# Producer brief — full 3-tier unit (any field)

You produce ONE rigorous 3-tier curriculum unit. This brief is field-agnostic; the
dispatcher gives you the unit's id, title, spec, target path, prerequisites, and two
peer units to match for quality/format.

## Read first
- `docs/specs/UNIT_SPEC.md` (canonical unit format) and `docs/specs/QUALITY_RUBRIC.md`
  (the 27-point validator).
- The TWO peer units the dispatcher names (real shipped units in the target chapter at
  the quality bar). Match their depth, section structure, and notation.

## Hard constraints (validator failures — avoid)
- NEVER use: `trivial`, `trivially`, `non-trivial`, `obviously`, `clearly`,
  `it is easy to see`, `as we will see` (substring-matched — also catches `nontrivial`,
  `trivialise`). Reword: vanishes, identity, the simple case, plain, evident-in-context.
- Beginner sections: NO `\nabla \otimes \sum \int \prod \partial \forall \exists`
  symbols (the ban includes `\partial` even inside `\bar\partial` — say "the boundary
  operator"). Keep Beginner math elementary; paragraphs ≤120 words; no proof language
  ("Proof.", "QED", "Suppose ", "It follows that", "Hence,").
- No paragraph anywhere exceeds 250 words.
- Every `[ref: TODO_REF X]` needs a matching `references[]` entry with `source: TODO_REF`.

## Required sections (validator-enforced)
- `## Intuition [Beginner]`
- `## Visual [Beginner]` with `![alt](/img/<slug>-placeholder.svg)`
- `## Worked example [Beginner]`
- `## Check your understanding [Beginner]` — ≥1 `<aside class="exercise">`
- `## Formal definition [Intermediate+]`
- `## Key theorem with proof [Intermediate+]` ending with a `**Bridge.**` paragraph
- `## Exercises [Intermediate+]` — multiple `<aside class="exercise">` blocks
- `## Advanced results [Master]` ending with a `**Synthesis.**` paragraph
- `## Full proof set [Master]` (≥1 Proposition + proof)
- `## Connections [Master]` — ≥3 bullets, each its own blank-line-separated paragraph,
  all linking to other unit ids in `[NN.NN.NN]` brackets
- `## Historical & philosophical context [Master]` (≥1 cited primary source via
  `[ref: TODO_REF Author year]`)
- `## Bibliography [Master]` with bibtex entries

## Continuity-metric requirements
- The `**Bridge.**` paragraph (end of Key theorem) must contain `builds toward`,
  `appears again in`, plus 2+ of: `the foundational reason`, `this is exactly`,
  `generalises`, `is dual to`, `the central insight`, `putting these together`,
  `the bridge is`.
- The `**Synthesis.**` paragraph (end of Advanced results) must hit ≥4 of those patterns.

## MANDATORY frontmatter checklist (missing any field fails the validator)
- `id:`, `title:` (quoted), `slug:`, `section:`, `chapter:`, `concept_catalog_id:`
- `tiers_present: [beginner, intermediate, master]`
- `tier_anchors:` with THREE sub-keys `beginner:` / `intermediate:` / `master:` — each a
  quoted string of real bibliographic anchors (Author year *Title* (publisher) chapter).
- `prerequisites: [...]` — ONLY ids that are already shipped on disk. If a prereq is
  co-produced in this same wave (not yet on disk), do NOT list it here — reference it in
  `## Connections [Master]` instead.
- `successors: []`, `pending_prereqs: false`
- `references:` (each `[ref: TODO_REF ...]` you cite needs a matching entry; ≥1 non-pending
  if a real source exists in `reference/`, else `source: TODO_REF`)
- `lean_status: none` with a substantive `lean_mathlib_gap:` (≥30 words). Do NOT add a
  `lean_module:` field when status is none.
- `estimated_time:` with THREE sub-keys `beginner:` / `intermediate:` / `master:`
- `source_books: [<book-id from the dispatcher>]` and `source_curriculum: <spine-id>`
  — PROVENANCE for the lens system, so this unit surfaces under its field lens.
- `human_reviewer:` (quoted, topic-appropriate, never literal "TBD")
- `produced_by: claude-opus-4-8 (autonomous production driver)`
- `status: shipped`, `reviewed_by: []`

## Catalog stub (chicken-and-egg fix)
`integrate_unit.py` validates BEFORE adding the catalog stub, so append your
`### <concept_catalog_id>` stub (with a one-line description) to
`docs/catalogs/CONCEPT_CATALOG.md` via an ATOMIC python heredoc append (temp-file +
`os.replace`, with an idempotency guard) before finishing.

## Finish
Run `python3 scripts/validate_unit.py <yourfile>` and fix until "27/27 checks passed".
Then STOP. Return the path, word count, and prereq ids. Do NOT run the integrator — the
dispatcher integrates.
