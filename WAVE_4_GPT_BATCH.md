# Codex Wave 4 — Strand A (Algebra / Foundations) — gpt-codex session batch

This is your batch. The claude session is concurrently producing Strand B (homotopy, covering space, exterior derivative, Stokes' theorem, Stiefel-Whitney classes), so coordinate by working only in the directories listed below — they are disjoint from Strand B's work.

## Working directory

/Users/tyler/Documents/proj rn/codex

## Read first

1. `WAVE_4_PLAN.md` — the overall Wave 4 framing (read §1, §2, §4, §7).
2. `PILOT_PLAN.md` — current shipped count (53 units), Wave 1+2+3 status.
3. `pilot-lessons.md` — the consolidated production lessons. The most recent autonomous-run entry covers the validator improvement (code-block stripping for prohibited-phrasings) that you'll benefit from.
4. `UNIT_SPEC.md` — frontmatter, tier markers, citation syntax.
5. `QUALITY_RUBRIC.md` — the 27-point automated checklist + the §M Master-tier prose standard (six failure modes).
6. `CONCEPT_CATALOG.md` — find each concept entry; add parent entries first if missing (e.g., `set-theory.set-and-function` namespace may need creating).
7. One existing shipped unit as a reference template — recommended: `content/01-foundations/01-linear-algebra/01.01.15-bilinear-quadratic-form.md` (same chapter as the field unit you'll produce, three tiers, Master-only proof).

## Production queue — Strand A (5 units)

Sequential within strands; the algebra strand has internal dependencies (associative algebra → ideal → quotient algebra is the chain Wave 4 partially fills).

| Order | Unit ID | Title | Path | Anchor |
|---|---|---|---|---|
| 1 | `00.02.05` | Function | content/00-precalc/02-set-and-function/00.02.05-function.md | Halmos *Naive Set Theory* §8; Lang *Algebra* §0; Bourbaki *Theory of Sets* Ch. II |
| 2 | `01.01.01` | Field | content/01-foundations/01-linear-algebra/01.01.01-field.md | Lang *Algebra* §III §1; Dummit-Foote §7; Artin Ch. 13 |
| 3 | `03.01.01` | Tensor product | content/03-modern-geometry/01-tensor-algebra/03.01.01-tensor-product.md | Lang *Algebra* §XVI §1–§2; Atiyah-Macdonald §2 |
| 4 | `03.01.02` | Associative algebra | content/03-modern-geometry/01-tensor-algebra/03.01.02-associative-algebra.md | Lang *Algebra* §III §1; Bourbaki *Algebra I* Ch. III |
| 5 | `03.01.03` | Ideal in an algebra | content/03-modern-geometry/01-tensor-algebra/03.01.03-ideal.md | Lang *Algebra* §III §6; Atiyah-Macdonald §1 |

Notes:

- `00.02.05` lives in a **new** chapter `content/00-precalc/02-set-and-function/`. Create the chapter directory.
- `01.01.01` lives in the existing `content/01-foundations/01-linear-algebra/` chapter (alongside vector space and bilinear/quadratic form).
- `03.01.01`, `03.01.02`, `03.01.03` live in the existing `content/03-modern-geometry/01-tensor-algebra/` chapter (alongside tensor algebra and quotient algebra).

## Tier policy

All five units: produce all three tiers. `tiers_present: [beginner, intermediate, master]`. These are foundational units where Beginner / Intermediate are the dominant audiences; Master tier should still meet LM standard but will naturally be shorter than apex Master sections.

`pending_prereqs:`
- `00.02.05` Function — `false` (genuinely depends on nothing in the catalog; basic set/relation primitives can be defined inline).
- `01.01.01` Field — `false` if you only declare `00.02.05 function` as a prereq (which will ship in this batch).
- `03.01.01`, `03.01.02`, `03.01.03` — `false` if their declared prereqs all ship in this batch (vector space `01.01.03` is shipped; field `01.01.01` will ship in this batch).

## Per-unit production protocol

Same as Wave 2 / Wave 3 protocol. After each unit:

1. Update `CONCEPT_CATALOG.md` with the new concept entry. **Add parent namespace entries first if missing** — e.g., `set-theory.function`, `algebra.associative-algebra`, `algebra.ideal`, `algebra.tensor-product`, `linalg.field`. The catalog already has `linalg.vector-space`, `linalg.bilinear-form`, `algebra.tensor-algebra`, `algebra.quotient-algebra` — your new entries integrate next to those.
2. Update `manifests/deps.json` — add the new unit to the `shipped` list (move from `pending` if it was there). Add `_notes` entry.
3. Run `./.venv/bin/python scripts/validate_unit.py <path>` and iterate until 27/27.
4. Append a paragraph to `pilot-lessons.md` describing what was non-obvious about producing this foundational-tier unit.
5. Run `./.venv/bin/python scripts/validate_all.py` — should be green (the claude session's Strand B units may be shipping concurrently, so the unit count grows from both sides).

After all five: run `cd /Users/tyler/Documents/proj rn/tystack/typescript/apps/codex && pnpm build` to confirm rendering. Vite emits a Neutron `sharp` dynamic-import warning that does not block; ignore it.

## Hard conventions

Same as previous waves:

- **Sign convention**: Lawson-Michelsohn $v^2 = -q(v)$ throughout (relevant if any unit touches Clifford-related material — these algebra-foundation units mostly don't).
- **Citation syntax**: `[ref: source locator]` for external; `[NN.NN.NN]` for cross-refs to other Codex units. `TODO_REF` placeholder when source not in `reference/`.
- **No emojis anywhere.**
- **Lean status honesty**: Mathlib has comprehensive coverage at this foundational layer (`Field`, `TensorProduct`, `Algebra`, `Ideal`). Use `lean_status: full` for these where the full content can be stated and proved against Mathlib (for `Function` it's basic logic, for `Field` it's `Field` typeclass, for `TensorProduct` it's `TensorProduct.tprod`, etc.).

## Prose standard (Master tier)

The QUALITY_RUBRIC §M Master-prose checklist is automated to a degree (the prohibited-phrasings filter). Six failure modes to avoid at Master tier:

1. No section-level metacommentary ("the structural fact that organises…", "the right organising principle…").
2. No "Counterexamples to common slips" bullet lists at Master tier — fold into running prose with positive formulations. (Encouraged at Intermediate.)
3. No hedged futures or apologies for omission ("we will see…", "we do not state…").
4. No valedictory closing paragraphs in Historical & philosophical context — cite, attribute, stop.
5. No real-time error correction in worked examples — compute correctly the first time.
6. No triplicate emphasis or rhetorical italics — italics for definitions and proper names only.

The validator now strips fenced code blocks before scanning prohibited phrases (recent improvement), so Lean tactic names like `:= trivial` no longer trip the rubric. Bare prose uses of "trivial" / "trivially" still do — replace with "nonzero" / "immediate" / "direct" as fits the meaning.

## Spec gap workarounds

- `pending_prereqs: true` is the standard for units with declared prereqs not yet shipped. Set `false` only when every declared prereq resolves (either already shipped, or shipping in this batch and you handle deps.json updates correctly).
- `tier_anchors.beginner: deferred` is acceptable when a tier isn't filled in (rare for these units — all should have all three tiers).
- `TODO_REF` is the source name for unresolved external references. Mark with `pending: true` in the references[] entry where possible.

## Stop conditions

Stop and report back if:

- A validator failure persists after three iterations on the same unit.
- A unit cannot be produced without sourcing material not in `reference/`.
- `pnpm build` fails for a non-Vite-warning reason.
- A merge conflict appears with the claude session's Strand B work — defer the affected file and continue with your strand.

Otherwise: produce all five, validate, build, and report when done with rubric scores and a one-line note per unit on what was the hardest part.

Begin with unit `00.02.05` Function. Read `WAVE_4_PLAN.md` and `pilot-lessons.md` first.

---

*Wave 4 Strand A — algebra / foundations. Concurrent with claude's Strand B (homotopy, covering space, exterior derivative, Stokes, Stiefel-Whitney). After both strands ship, Wave 4 closes ~6 of 8 outstanding `pending_prereqs: true` flags.*
