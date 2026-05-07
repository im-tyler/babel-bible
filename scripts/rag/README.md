# Codex RAG Layer

Embedding + retrieval over the `codex/reference/` archive. The Scanner agent role (and any human producer) calls `retrieve(concept, k)` to get the top-K relevant passages with provenance before drafting a unit.

## Architecture

| Layer | Choice | Notes |
|---|---|---|
| Embedding model | `BAAI/bge-large-en-v1.5` (1024-dim) | local via `sentence-transformers`; no API key; ~1.3 GB one-time download |
| Storage | Nucleus `VECTOR(1024)` column + HNSW index | dogfoods Nucleus; single persistence layer |
| Chunking | MD: sectioned, max ~800 tokens with 100-token overlap; PDFs: per-page, paragraph-grouped | preserves semantic boundaries |
| Provenance | Every chunk carries `source / source_path / locator` | matches `[ref:]` citation syntax in `docs/specs/UNIT_SPEC.md` |

## Files

- `requirements.txt` — Python deps
- `schema.sql` — Nucleus tables + HNSW index
- `embed_archive.py` — one-shot embedding pipeline (idempotent; safe to re-run)
- `retrieve.py` — retrieval module + CLI for ad-hoc queries

## One-time setup

```bash
# 1. Python env (~5 min)
cd codex/scripts/rag
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# 2. Start Nucleus (separately, in tystack/)
cd ~/Documents/proj\ rn/tystack/nucleus
cargo run --release -- serve --port 5432

# 3. Initialize schema
psql -h localhost -p 5432 -U postgres -d nucleus -f schema.sql

# 4. Run the embedder (~30–60 min depending on archive size + machine)
python embed_archive.py --archive ../../reference --batch-size 32
```

## Usage

```bash
# CLI query
python retrieve.py "Clifford algebra" --k 10

# As a Python module (for the Scanner agent)
from retrieve import retrieve
passages = retrieve("Clifford algebra", k=10)
for p in passages:
    print(f"[{p.source}/{p.source_path}@{p.locator}] {p.text[:160]}")
```

## Re-running the embedder

`embed_archive.py` is idempotent: it computes a content hash per chunk and skips chunks whose hash already exists in Nucleus. Safe to re-run after adding new files to `reference/`.

## What's deliberately not handled (yet)

- **Handwritten PDFs (Jimmy Qin)** — text extraction from handwritten scans needs OCR; flagged with `metadata.handwritten: true` and skipped. Add OCR later if needed.
- **Cross-encoder re-ranking** — top-K from cosine is good enough for v0.x; a cross-encoder (e.g., `bge-reranker-large`) over the top-50 → top-10 is a v1 enhancement.
- **Query expansion** — could LLM-rewrite queries for better recall; skipped for v0.x.

## Sanity check after setup

After embedding, run:

```bash
python retrieve.py "Clifford algebra" --k 5
```

Should return passages from Quantum Well's `Mathematical foundations/Algebra/`, possibly Sternberg *Lie Algebras*, Freed's bordism notes, and any Tong PDF that mentions Clifford. If the top-5 looks irrelevant, embedding is broken; investigate.
