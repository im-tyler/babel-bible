#!/usr/bin/env python3
"""Retrieval module + CLI over the Codex RAG archive in Nucleus.

Used by:
- The Scanner agent role (programmatically: `from retrieve import retrieve`)
- Human producers / reviewers (CLI: `python retrieve.py "<query>" --k N`)

The model and embedding dimension must match `embed_archive.py`.
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from dataclasses import dataclass
from typing import Optional

import psycopg2
from sentence_transformers import SentenceTransformer


MODEL_NAME = "BAAI/bge-large-en-v1.5"

# Per BGE docs: prepending this instruction to the query improves retrieval.
QUERY_INSTRUCTION = (
    "Represent this sentence for searching relevant passages: "
)


@dataclass
class Passage:
    id: str
    source: str
    source_path: str
    locator: Optional[str]
    text: str
    similarity: float
    metadata: dict


# Lazy-loaded model singleton so importing this module is cheap.
_model: Optional[SentenceTransformer] = None


def _get_model(device: Optional[str] = None) -> SentenceTransformer:
    global _model
    if _model is None:
        _model = SentenceTransformer(MODEL_NAME, device=device)
    return _model


def _connect(host="localhost", port=5432, dbname="nucleus",
             user="postgres", password=""):
    return psycopg2.connect(
        host=host, port=port, dbname=dbname, user=user, password=password,
    )


def retrieve(
    query: str,
    k: int = 10,
    source_filter: Optional[list[str]] = None,
    device: Optional[str] = None,
    conn=None,
) -> list[Passage]:
    """Retrieve top-K passages from Nucleus for the given query.

    Args:
        query: free-text query (concept name, theorem, etc.)
        k: number of results
        source_filter: optional list of source names (e.g. ["quantum-well", "tong"])
        device: torch device override
        conn: optional pre-opened psycopg2 connection (for batched producer use)

    Returns:
        List of Passage, ordered by descending similarity.
    """
    model = _get_model(device=device)
    embedded = model.encode(
        [QUERY_INSTRUCTION + query],
        normalize_embeddings=True,
        show_progress_bar=False,
    )[0].tolist()

    own_conn = conn is None
    if own_conn:
        conn = _connect()

    try:
        cur = conn.cursor()
        if source_filter:
            cur.execute(
                """
                SELECT id, source, source_path, locator, text,
                       1.0 - (embedding <=> %s::vector) AS similarity,
                       metadata
                FROM codex_passages
                WHERE source = ANY(%s)
                ORDER BY embedding <=> %s::vector
                LIMIT %s
                """,
                (embedded, source_filter, embedded, k),
            )
        else:
            cur.execute(
                """
                SELECT id, source, source_path, locator, text,
                       1.0 - (embedding <=> %s::vector) AS similarity,
                       metadata
                FROM codex_passages
                ORDER BY embedding <=> %s::vector
                LIMIT %s
                """,
                (embedded, embedded, k),
            )
        rows = cur.fetchall()
        return [
            Passage(
                id=r[0],
                source=r[1],
                source_path=r[2],
                locator=r[3],
                text=r[4],
                similarity=float(r[5]),
                metadata=r[6] if r[6] else {},
            )
            for r in rows
        ]
    finally:
        if own_conn:
            conn.close()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("query", help="search query (concept, theorem, technique)")
    ap.add_argument("--k", type=int, default=10)
    ap.add_argument("--source", action="append",
                    help="restrict to source (repeatable: --source tong --source quantum-well)")
    ap.add_argument("--json", action="store_true",
                    help="emit JSON instead of formatted text")
    ap.add_argument("--text-len", type=int, default=300,
                    help="truncate passage text to this many chars in CLI output")
    ap.add_argument("--device", default=None)
    args = ap.parse_args()

    results = retrieve(
        args.query,
        k=args.k,
        source_filter=args.source,
        device=args.device,
    )

    if args.json:
        out = [{
            "id": p.id, "source": p.source, "source_path": p.source_path,
            "locator": p.locator, "similarity": p.similarity,
            "text": p.text, "metadata": p.metadata,
        } for p in results]
        print(json.dumps(out, indent=2))
        return

    if not results:
        print("No results.", file=sys.stderr)
        sys.exit(1)

    for i, p in enumerate(results, 1):
        loc = f"@{p.locator}" if p.locator else ""
        text = p.text.replace("\n", " ").strip()
        if len(text) > args.text_len:
            text = text[:args.text_len] + "…"
        print(f"\n[{i}] sim={p.similarity:.3f}  {p.source}/{p.source_path}{loc}")
        print(f"    {text}")


if __name__ == "__main__":
    main()
