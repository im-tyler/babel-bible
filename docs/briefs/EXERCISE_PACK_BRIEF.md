# Exercise-pack brief — single-tier problem pack

You produce an EXERCISE PACK unit: a SINGLE-TIER ([intermediate]) unit, lighter than a
concept unit. Use a shipped pack as the structural template (e.g.
`content/03-modern-geometry/04-differential-forms/03.04.E1-mv-degree-exercises.md`).

## Frontmatter
- `id:` the `NN.NN.EN` id, `title:` "... exercise pack (<Book> <chapter> supplement)",
  `slug:`, `section:`, `chapter:` (match the target chapter).
- `concept_catalog_id: <namespace>.exercise-packs.<topic>` — append a `### <id>` stub to
  `docs/catalogs/CONCEPT_CATALOG.md` via ATOMIC python heredoc append.
- `prerequisites:` the shipped concept-unit ids the exercises test (grep-verify).
  `pending_prereqs: true` is acceptable for packs.
- `tier_anchors:` with ONLY `intermediate:`. `tiers_present: [intermediate]`.
- `source_books: [<book-id>]`, `source_curriculum: <spine-id>` (provenance for lenses).
- `references:`, `lean_status: none` with a gap note explaining it is an exercise pack,
  `estimated_time:` with `intermediate:`, `human_reviewer:` (quoted),
  `produced_by: claude-opus-4-8 (autonomous production driver)`, `status: shipped`,
  `reviewed_by: []`.

## Body — exactly these three [Intermediate] sections
- `## Formal definition of the pack [Intermediate]` — what it covers, which results.
- `## Key theorem with full solution [Intermediate]` — one model worked problem + solution.
- `## Exercises [Intermediate]` — 7-10 problems, each an
  `<aside class="exercise" data-difficulty="easy|medium|hard" data-type="numeric|symbolic|proof" markdown="1">`
  block with `**Exercise N (difficulty, type).** *Title.*`, the problem, a
  `<details class="exercise__hint">`, and a `<details class="exercise__answer">` with a
  full solution. Include ≥2 easy, ≥3 medium, ≥2 hard, ≥1 numeric/symbolic.

## Rules
- Obey the banned-words list and the 250-word paragraph cap (see PRODUCER_BRIEF.md).
  Packs are Intermediate-tier so the Beginner symbol bans do NOT apply.
- Problems must be genuine, solvable, with correct worked solutions.
- ID COLLISION: if your assigned `.EN` id is taken, pick the next free `NN.NN.EN` and report it.

## Finish
`python3 scripts/validate_unit.py <file>` until it passes. STOP. Report path, id, problem
count, pass status. Do NOT run the integrator.
