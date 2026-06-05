# [DEEPEN] brief — replace/enrich content inside an existing unit

Two modes. The dispatcher says which.

## Mode A — REPLACE a templated stub
An existing shipped unit contains generic v0.5 boilerplate (a "transparent sheets"
Intuition, a placeholder SVG, a `..._placeholder : True` Lean stub, thin proofs). You
rewrite the body to real textbook depth, preserving the frontmatter scaffold.
1. Read the unit in full. Read PRODUCER_BRIEF.md for the validator rules and required sections.
2. REWRITE the body to the depth in the dispatcher's spec — real statements, proofs, worked
   examples, topic-specific intuition. Keep the `![...](/img/<slug>-placeholder.svg)` line.
3. PRESERVE id/slug/section/chapter/concept_catalog_id/prerequisites/tiers_present. Refresh
   `tier_anchors`, `references`, `estimated_time`, `human_reviewer`. Set `lean_status: none`,
   REMOVE any placeholder Lean block and any `lean_module:` field, add a substantive
   `lean_mathlib_gap:`. Set `produced_by: claude-opus-4-8 (autonomous DEEPEN pass)`.

## Mode B — ADD an enrichment subsection
An existing valid (27/27) unit gets a focused `### Subheading` added to a named tier
section (the dispatcher names the section + content + length, usually ~300-500 words).
1. Read the unit. Locate the named section (e.g. `## Advanced results [Master]`).
2. INSERT the subsection there, matching surrounding prose density. Keep ALL existing
   content + frontmatter. If you cite a new source, add the matching `references[]` entry.
3. Respect Beginner-tier bans if adding to a Beginner section (no `\nabla \partial \int`
   etc., no proof language, ≤120-word paragraphs).

## Both modes
Run `python3 scripts/validate_unit.py <file>` until "27/27 checks passed" (your change is
the only thing that can break it — usually a banned word or an over-long paragraph). STOP.
Report the path, what changed, and 27/27. Do NOT run the integrator (in-place edit to an
already-registered unit).
