# Audit brief — find genuine gaps in one book (verify against the live corpus)

You audit ONE textbook against the existing corpus to surface GENUINE gaps: theorems /
constructions in the book that have NO corresponding unit anywhere in `content/`. The
corpus is large and mature — assume covered until proven absent.

Working dir: repo root.

## Method (rigorous, evidence-based)
1. Build a list of the book's 10-25 headline theorems/constructions.
2. For EACH, VERIFY against the live corpus before calling it a gap:
   - `find content -name "*.md" | sed 's#.*/##' | grep -iE "<kw1>|<kw2>"` and body grep
     `grep -rliE "<theorem name>|<key phrase>" content/`.
   - Check the obvious home chapter AND likely cross-section homes.
   - If a unit already states/proves it (even elsewhere), mark COVERED with the id. Do NOT
     propose it.
3. A topic is a GENUINE GAP only if no existing unit states/proves it. Be conservative;
   default to COVERED when a near-equivalent exists.
4. SCOPE JUDGEMENT: if a topic is genuinely outside the curriculum's intended scope
   (pure phenomenology, a 200-page apparatus with no theorem-level payoff), say so rather
   than manufacturing a unit.

## Output — write `plans/expansion/<spine>/_audit/<book-slug>.gaps.md` with, per genuine gap:
- proposed `id` in a FREE slot (`find content -name "<chapter-prefix>*" | sort` for unused
  numbers; never reuse an occupied id),
- `title`, one-line `spec`, `prereqs` (existing ids you verified exist), `chapter` dir +
  frontmatter `section`/`chapter`,
- the `source_book` id (this book's slug) and `source_curriculum` (the spine id) — so the
  producer can stamp provenance,
- a `## COVERED (not gaps)` trailer: topics you checked and found covered, each with the
  existing unit id (REQUIRED due-diligence evidence),
- a `## OUT OF SCOPE` trailer (if any) with one-line reasons.

Aim for QUALITY over quantity: a tight list of genuine high-value gaps. A near-fully-
covered book yielding 0-3 gaps is a valid, valuable result. Do NOT manufacture marginal
units to hit a number.

## Return
Genuine-gap count, COVERED count, OUT-OF-SCOPE count, and the gap-file path.
