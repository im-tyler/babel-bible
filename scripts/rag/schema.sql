-- Codex RAG schema for Nucleus
-- Run once after starting Nucleus:
--   psql -h localhost -p 5432 -U postgres -d nucleus -f schema.sql

CREATE TABLE IF NOT EXISTS codex_passages (
  id           TEXT      PRIMARY KEY,           -- e.g. "tong/qft.pdf:p47:c0"
  source       TEXT      NOT NULL,              -- e.g. "tong"
  source_path  TEXT      NOT NULL,              -- relative path within source
  locator      TEXT,                            -- page / section reference
  text         TEXT      NOT NULL,              -- the passage text
  text_hash    TEXT      NOT NULL,              -- BLAKE3 of text — idempotent skip key
  embedding    VECTOR(1024) NOT NULL,           -- BGE-large-en-v1.5
  topic_tags   TEXT[],                          -- optional, e.g. {"linear-algebra"}
  metadata     JSONB,                           -- everything else
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- HNSW index for fast cosine-similarity retrieval.
-- Nucleus exposes HNSW per the data-model docs.
CREATE INDEX IF NOT EXISTS codex_passages_embedding_hnsw
  ON codex_passages
  USING HNSW (embedding cosine_ops);

-- Lookup index for idempotent re-embedding.
CREATE INDEX IF NOT EXISTS codex_passages_text_hash_idx
  ON codex_passages (text_hash);

-- Source-filter index for "all passages from Quantum Well" style queries.
CREATE INDEX IF NOT EXISTS codex_passages_source_idx
  ON codex_passages (source);
