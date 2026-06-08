# Unit Quality Spec — Dispatch Reference

Compact reference for producing agents. The canonical specs are in:
- `docs/briefs/PRODUCER_BRIEF.md` — full brief (READ THIS FIRST)
- `docs/specs/UNIT_SPEC.md` — format spec
- `docs/specs/QUALITY_RUBRIC.md` — 27-point rubric

This document is the fast-reference checklist. A unit that passes all 27 automated checks
and matches a peer unit in depth ships immediately.

---

## Exemplary units (match these for quality)

Pick the one most similar to your domain:

| Style | Path | Words |
|---|---|---|
| Rigorous math, measure-theoretic | `content/37-probability/07-large-deviations/37.07.02-cramers-theorem-legendre-fenchel.md` | ~7 200 |
| Applied/algorithmic, optimization | `content/44-optimization-control/08-dynamic-programming/44.08.03-markov-decision-processes.md` | ~6 500 |
| ML / statistical learning theory | `content/45-mathematical-statistics/07-statistical-learning-theory/45.07.01-pac-learning-empirical-risk-minimization.md` | ~7 000 |
| Complexity / logic | `content/42-mathematical-logic/04-computability-degrees/42.04.02-halting-problem-undecidability-recursion-theorem.md` | ~6 800 |

Open whichever peer unit the dispatcher names and copy its section structure exactly.

---

## Required sections (in order)

```
## Intuition [Beginner]        ← plain language, NO formal notation
## Visual [Beginner]           ← table OR ![alt](/img/<slug>-placeholder.svg)
## Worked example [Beginner]   ← concrete numbers / small instance
## Check your understanding [Beginner]  ← ≥1 <aside class="exercise"> block
## Formal definition [Intermediate+]   ← LaTeX definition(s)
## Key theorem with proof [Intermediate+]  ← ends with **Bridge.** paragraph
## Exercises [Intermediate+]   ← ≥2 <aside class="exercise"> blocks
## Lean formalization [Intermediate+]  ← (lean_status: none → prose gap note)
## Advanced results [Master]   ← ends with **Synthesis.** paragraph
## Full proof set [Master]     ← ≥1 Proposition + complete proof
## Connections [Master]        ← ≥3 bullets, each unit id in [NN.NN.NN] brackets
## Historical & philosophical context [Master]  ← ≥1 cited primary source
## Bibliography [Master]       ← bibtex entries
```

---

## Word limits (hard — validator enforces)

| Scope | Limit |
|---|---|
| Any single paragraph | ≤ 250 words |
| Any Beginner paragraph | ≤ 120 words |
| Full unit | 5 000 – 9 000 words (target ~6 500–7 500) |

---

## Banned words (substring-matched — any occurrence fails)

`trivial` · `trivially` · `non-trivial` · `nontrivial` · `trivialise` ·
`obviously` · `clearly` · `it is easy to see` · `as we will see`

**Reword as:** "vanishes", "the identity", "the simple case", "direct computation shows",
"evident from the definition", "as shown in [unit-id]".

---

## Beginner section constraints

- NO LaTeX operators: `\nabla \otimes \sum \int \prod \partial \forall \exists`
  (The ban includes `\partial` even inside `\bar\partial` — say "the boundary operator".)
- NO proof language: "Proof.", "QED", "Suppose ", "It follows that", "Hence,"
  (these exact strings are scanned in Beginner text outside `<aside>` blocks)
- Math is allowed (e.g., `$x + y$`, `$n^2$`) but keep it elementary

---

## Continuity patterns (Bridge + Synthesis paragraphs — checked by validator)

**Bridge paragraph** (end of `## Key theorem with proof`):
Must contain `builds toward` AND `appears again in` PLUS ≥ 2 of:
`the foundational reason` · `this is exactly` · `generalises` · `is dual to` ·
`the central insight` · `putting these together` · `the bridge is`

**Synthesis paragraph** (end of `## Advanced results`):
Must contain ≥ 4 of the same patterns from the Bridge list.

---

## Frontmatter checklist

Every field below is required. Omitting any one fails the validator.

```yaml
id: "NN.NN.NN"                  # e.g. 46.03.02
title: "Full Title Here"        # quoted
slug: kebab-case-title
section: information-theory     # or theoretical-cs (see PRODUCTION_PLAN.md)
chapter: NN-chapter-name        # e.g. 03-channel-capacity
concept_catalog_id: section.slug-here

prerequisites:
  - NN.NN.NN    # ONLY ids already on disk; co-wave ids go in Connections

successors: []
tiers_present: [beginner, intermediate, master]
pending_prereqs: false

tier_anchors:
  beginner:  "Author Year *Title* (Publisher) §chapter (plain English)"
  intermediate: "Author Year *Title* (Publisher) §chapter (formal definitions)"
  master: "Author Year *Title* (Publisher) §chapter (full proofs)"

references:
  - source: TODO_REF
    path: "Author — Full Book Title"
    locator: "Publisher (Year). Chapter: [paste 150-300 word locator with LaTeX math]"

lean_status: none
lean_mathlib_gap: |
  [≥30 words: what Mathlib has, what is missing, why it matters for formalization]

source_books: [book-id-from-PRODUCTION_PLAN]
source_curriculum: information-theory   # or theoretical-cs

estimated_time:
  beginner: "15 min"
  intermediate: "40 min"
  master: "90 min"

human_reviewer: "topic-appropriate expert name (not 'TBD')"
produced_by: claude-sonnet-4-6 (autonomous production driver)
status: shipped
reviewed_by: []
```

---

## Catalog stub (run BEFORE finishing)

The validator checks `concept_catalog_id` against `docs/catalogs/CONCEPT_CATALOG.md`.
Integration adds the stub automatically, but only AFTER validation — which is circular.

**Fix**: append your own stub to the catalog before running the validator:

```python
python3 - <<'EOF'
from pathlib import Path
catalog = Path("docs/catalogs/CONCEPT_CATALOG.md")
cid = "section.your-slug"
title = "Your Full Unit Title"
text = catalog.read_text()
if f"### {cid}" not in text:
    stub = f"\n### {cid}\n\n- **title**: {title}\n- **prerequisites**: (auto-stub)\n- **tier_anchors**:\n  - master: TBD\n  - intermediate: TBD\n  - beginner: TBD\n- **notes**: Auto-generated.\n"
    catalog.write_text(text + stub)
    print("Added stub")
else:
    print("Already present")
EOF
```

---

## Finish protocol

1. Run: `python3 scripts/validate_unit.py <your-file.md>` — fix until `27/27 checks passed`
2. Return: file path, word count, prereq ids used
3. **Do NOT run integrate_unit.py** — the dispatcher does that

---

## Common failure patterns (from previous production runs)

| Failure | Fix |
|---|---|
| "concept_catalog_id not found" | Add catalog stub (see above) before validating |
| "paragraph exceeds 250 words" | Split at any sentence boundary — two paragraphs of 125w each pass |
| "no prohibited phrasings" | Search for `trivial`, `clearly`, `obviously`; replace with alternatives above |
| "Beginner uses no advanced formal notation" | Search Beginner sections for `\sum`, `\int`, `\partial`, `\nabla` — remove or move to Intermediate+ |
| "Beginner paragraphs ≤ 120 words" | Split any Beginner paragraph at a sentence boundary |
| "concept_catalog_id exists" failing after stub | Verify the stub's `### cid` exactly matches `concept_catalog_id:` in frontmatter (no quotes mismatch) |
| Bridge paragraph fails | Ensure the LAST paragraph of Key theorem section starts `**Bridge.**` and hits the required patterns |
