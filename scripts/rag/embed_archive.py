#!/usr/bin/env python3
"""Embed the Codex reference archive and write to Nucleus.

Walks the archive, chunks markdown by section and PDFs by page, computes
embeddings via BGE-large-en-v1.5, and inserts into the `codex_passages`
table. Idempotent: re-running skips chunks whose text hash is already stored.

Usage:
    python embed_archive.py --archive ../../reference [options]
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable

import psycopg2
import pymupdf
from sentence_transformers import SentenceTransformer
from tqdm import tqdm


MODEL_NAME = "BAAI/bge-large-en-v1.5"
EMBEDDING_DIM = 1024
MAX_CHUNK_TOKENS = 800        # approximate; uses word count as proxy
CHUNK_OVERLAP_TOKENS = 100
MIN_CHUNK_TOKENS = 30         # discard shorter than this — too thin to be useful

# Sources to skip entirely (out of scope or fringe-flagged in SOURCES.md)
SKIP_SOURCES = {
    "readingfeynman",   # excluded from production per SOURCES.md
    "rowlands",         # CS, out of scope for math/physics v1
}


@dataclass
class Chunk:
    id: str
    source: str
    source_path: str
    locator: str | None
    text: str
    metadata: dict = field(default_factory=dict)

    def text_hash(self) -> str:
        return hashlib.blake2b(self.text.encode("utf-8"), digest_size=16).hexdigest()


# ---------------------------------------------------------------------------
# Chunkers
# ---------------------------------------------------------------------------

def approx_tokens(s: str) -> int:
    """Word-count proxy for token count — cheap and good enough for batching."""
    return len(s.split())


def split_by_size(text: str, max_tokens: int = MAX_CHUNK_TOKENS,
                  overlap_tokens: int = CHUNK_OVERLAP_TOKENS) -> list[str]:
    """Word-based chunking with overlap; only used when section is too large."""
    words = text.split()
    if len(words) <= max_tokens:
        return [text] if approx_tokens(text) >= MIN_CHUNK_TOKENS else []
    chunks = []
    step = max_tokens - overlap_tokens
    for i in range(0, len(words), step):
        chunk = " ".join(words[i:i + max_tokens])
        if approx_tokens(chunk) >= MIN_CHUNK_TOKENS:
            chunks.append(chunk)
    return chunks


SECTION_RE = re.compile(r"^(#{1,4})\s+(.+)$", re.MULTILINE)


def chunk_markdown(md: str, source: str, source_path: str) -> list[Chunk]:
    """Split markdown by ##/###/#### sections; further split if a section is too large."""
    chunks: list[Chunk] = []

    matches = list(SECTION_RE.finditer(md))
    if not matches:
        # No sections — treat whole doc as one chunk (split by size if needed).
        for i, body in enumerate(split_by_size(md.strip())):
            chunks.append(Chunk(
                id=f"{source}/{source_path}:c{i}",
                source=source,
                source_path=source_path,
                locator=None,
                text=body,
            ))
        return chunks

    # Walk sections.
    bounds = [(m.start(), m.end(), m.group(1), m.group(2).strip()) for m in matches]
    bounds.append((len(md), len(md), "#", ""))  # sentinel
    for idx, (start, end, hashes, title) in enumerate(bounds[:-1]):
        next_start = bounds[idx + 1][0]
        body = md[end:next_start].strip()
        if not body:
            continue
        # Include heading as part of the chunk for retrieval signal.
        full = f"{hashes} {title}\n\n{body}"
        for cidx, sub in enumerate(split_by_size(full)):
            chunks.append(Chunk(
                id=f"{source}/{source_path}:s{idx}c{cidx}",
                source=source,
                source_path=source_path,
                locator=title or None,
                text=sub,
                metadata={"heading": title},
            ))
    return chunks


def chunk_pdf(path: Path, source: str, source_path: str) -> list[Chunk]:
    """Extract text from a PDF and chunk by page (further split if a page is huge)."""
    chunks: list[Chunk] = []
    try:
        doc = pymupdf.open(str(path))
    except Exception as e:
        print(f"  SKIP {source_path}: pdf open failed: {e}")
        return chunks
    try:
        for page_no, page in enumerate(doc, start=1):
            text = page.get_text("text").strip()
            if not text:
                continue
            for cidx, sub in enumerate(split_by_size(text)):
                chunks.append(Chunk(
                    id=f"{source}/{source_path}:p{page_no}c{cidx}",
                    source=source,
                    source_path=source_path,
                    locator=f"p.{page_no}",
                    text=sub,
                    metadata={"page": page_no},
                ))
    finally:
        doc.close()
    return chunks


# ---------------------------------------------------------------------------
# Walker
# ---------------------------------------------------------------------------

def walk_archive(archive: Path) -> Iterable[Chunk]:
    """Yield chunks across the entire reference archive."""
    for source_dir in sorted(archive.iterdir()):
        if not source_dir.is_dir() or source_dir.name.startswith("_"):
            continue
        if source_dir.name in SKIP_SOURCES:
            print(f"[skip] {source_dir.name} — flagged in SKIP_SOURCES")
            continue

        source = source_dir.name
        # Markdown files in md/ subdirs (Obsidian, converted HTML).
        md_root = source_dir / "md"
        if md_root.exists():
            for f in sorted(md_root.rglob("*.md")):
                rel = str(f.relative_to(source_dir))
                try:
                    body = f.read_text(encoding="utf-8", errors="replace")
                except Exception as e:
                    print(f"  SKIP {rel}: {e}")
                    continue
                yield from chunk_markdown(body, source, rel)

        # PDFs in raw/ or anywhere under the source dir.
        for f in sorted(source_dir.rglob("*.pdf")):
            rel = str(f.relative_to(source_dir))
            # Heuristic: Jimmy Qin PDFs are largely handwritten scans — flag and skip
            if source == "jimmyqin":
                continue  # extracted text is mostly noise; OCR is a v1 problem
            yield from chunk_pdf(f, source, rel)

        # Top-level markdowns directly in source dir (Obsidian assets etc).
        for f in source_dir.glob("*.md"):
            rel = str(f.relative_to(source_dir))
            try:
                body = f.read_text(encoding="utf-8", errors="replace")
            except Exception:
                continue
            yield from chunk_markdown(body, source, rel)


# ---------------------------------------------------------------------------
# Persistence
# ---------------------------------------------------------------------------

def existing_hashes(conn) -> set[str]:
    cur = conn.cursor()
    cur.execute("SELECT text_hash FROM codex_passages")
    return {row[0] for row in cur.fetchall()}


def insert_batch(conn, batch: list[tuple[Chunk, list[float]]]):
    cur = conn.cursor()
    rows = []
    for chunk, emb in batch:
        rows.append((
            chunk.id,
            chunk.source,
            chunk.source_path,
            chunk.locator,
            chunk.text,
            chunk.text_hash(),
            emb,
            None,  # topic_tags TBD
            json.dumps(chunk.metadata) if chunk.metadata else None,
        ))
    cur.executemany(
        """
        INSERT INTO codex_passages
          (id, source, source_path, locator, text, text_hash, embedding, topic_tags, metadata)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (id) DO NOTHING
        """,
        rows,
    )
    conn.commit()


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--archive", type=Path, required=True,
                    help="path to codex/reference/")
    ap.add_argument("--batch-size", type=int, default=32)
    ap.add_argument("--db-host", default="localhost")
    ap.add_argument("--db-port", type=int, default=5432)
    ap.add_argument("--db-name", default="nucleus")
    ap.add_argument("--db-user", default="postgres")
    ap.add_argument("--db-password", default="")
    ap.add_argument("--device", default=None,
                    help="cpu / cuda / mps; auto-detected if omitted")
    args = ap.parse_args()

    print(f"Loading {MODEL_NAME} …")
    model = SentenceTransformer(MODEL_NAME, device=args.device)
    print(f"  device: {model.device}")
    print(f"  embedding dim: {model.get_sentence_embedding_dimension()}")
    assert model.get_sentence_embedding_dimension() == EMBEDDING_DIM

    print(f"Connecting to Nucleus at {args.db_host}:{args.db_port}/{args.db_name} …")
    conn = psycopg2.connect(
        host=args.db_host, port=args.db_port,
        dbname=args.db_name, user=args.db_user, password=args.db_password,
    )

    print("Loading existing text hashes (idempotency) …")
    have = existing_hashes(conn)
    print(f"  {len(have)} chunks already embedded")

    print(f"Walking {args.archive} …")
    chunks = list(walk_archive(args.archive))
    print(f"  produced {len(chunks)} chunks total")
    new_chunks = [c for c in chunks if c.text_hash() not in have]
    print(f"  {len(new_chunks)} are new, embedding now")

    if not new_chunks:
        print("Nothing to do.")
        return

    batch: list[tuple[Chunk, list[float]]] = []
    bar = tqdm(total=len(new_chunks), desc="embedding")
    for i in range(0, len(new_chunks), args.batch_size):
        slab = new_chunks[i:i + args.batch_size]
        texts = [c.text for c in slab]
        embs = model.encode(texts, normalize_embeddings=True, show_progress_bar=False)
        for c, e in zip(slab, embs):
            batch.append((c, e.tolist()))
        if len(batch) >= args.batch_size:
            insert_batch(conn, batch)
            batch = []
        bar.update(len(slab))
    if batch:
        insert_batch(conn, batch)
    bar.close()

    cur = conn.cursor()
    cur.execute("SELECT count(*) FROM codex_passages")
    total = cur.fetchone()[0]
    print(f"\nDone. codex_passages now has {total} rows.")


if __name__ == "__main__":
    main()
