# Babel Bible — Wave 4 Plan

**Wave 4.** Production of the deep prerequisites that Wave 3 units (and a handful of Wave 2 mid-tier units) declared `pending_prereqs: true` against. After Wave 4, every shipped unit's prerequisites should resolve to other shipped units — the curriculum DAG becomes traversable from leaf to apex with zero residual `pending_prereqs: true`.

Read `OVERVIEW.md`, `docs/plans/WAVE_3_PLAN.md` (Wave 3 Phase 3.1 + 3.2 are complete), `docs/pilot-lessons.md` (consolidated production lessons through Phase 3.2), `docs/specs/QUALITY_RUBRIC.md` (the validator gate).

---

## 1. Wave 4 scope

**8 units still have `pending_prereqs: true`** as of 2026-04-28 after Wave 3 Phase 3.2 closed:

| Unit | Pending on |
|---|---|
| `01.01.03` Vector space | `00.02.05` function, `01.01.01` field |
| `01.02.01` Group | `00.02.05` function |
| `03.01.04` Tensor algebra | `03.01.01` tensor product |
| `03.01.05` Quotient algebra | `03.01.02` associative algebra, `03.01.03` ideal |
| `03.04.06` De Rham cohomology | `03.04.04` exterior derivative, `03.04.05` Stokes' theorem |
| `03.05.05` Double cover | `03.12.02` covering space |
| `03.08.04` Classifying space | `03.12.01` homotopy / homotopy group |
| `03.08.06` Stable homotopy | `03.12.01` homotopy, `03.12.03` suspension, `03.12.04` spectrum |

Plus one additional gap surfaced by Wave 1 / Wave 2 prereq lists but not yet in any unit's pending list:
- `03.06.03` Stiefel-Whitney classes — referenced by Spin structure (which currently has `pending_prereqs: false` because the validator didn't catch this; could be tightened to `true` if rigour is desired, but Stiefel-Whitney is foundational to characteristic-class theory and worth producing as a Wave 4 unit either way).

**Wave 4 production target: 10 units** organised into two non-colliding strands.

## 2. Strand A — algebra / foundations (5 units, independent)

For the **gpt-codex parallel session**. See `docs/batches/WAVE_4_GPT_BATCH.md` (paste-ready scaffold).

| Order | Unit ID | Title | Path | Anchor |
|---|---|---|---|---|
| 1 | `00.02.05` | Function | content/00-precalc/02-set-and-function/00.02.05-function.md | Halmos *Naive Set Theory* §8; Lang *Algebra* §0 |
| 2 | `01.01.01` | Field | content/01-foundations/01-linear-algebra/01.01.01-field.md | Lang *Algebra* §III; Dummit-Foote §7 |
| 3 | `03.01.01` | Tensor product | content/03-modern-geometry/01-tensor-algebra/03.01.01-tensor-product.md | Lang *Algebra* §XVI; Atiyah-Macdonald §2 |
| 4 | `03.01.02` | Associative algebra | content/03-modern-geometry/01-tensor-algebra/03.01.02-associative-algebra.md | Lang *Algebra* §III; Bourbaki *Algebra I* Ch. III |
| 5 | `03.01.03` | Ideal in an algebra | content/03-modern-geometry/01-tensor-algebra/03.01.03-ideal.md | Lang *Algebra* §III §6; Atiyah-Macdonald §1 |

**Unblocks** (after this strand ships): `01.01.03` Vector space, `01.02.01` Group, `03.01.04` Tensor algebra, `03.01.05` Quotient algebra — i.e., **4 of the 8 pending units close**.

## 3. Strand B — topology / differential geometry (5 units, independent)

For the **claude session** (taken concurrent with Strand A).

| Order | Unit ID | Title | Path | Anchor |
|---|---|---|---|---|
| 1 | `03.12.01` | Homotopy and homotopy group | content/03-modern-geometry/12-homotopy/03.12.01-homotopy.md | Hatcher *Algebraic Topology* §1.1; May *Concise Course* Ch. 1 |
| 2 | `03.12.02` | Covering space | content/03-modern-geometry/12-homotopy/03.12.02-covering-space.md | Hatcher §1.3; Bredon §III.3; May Ch. 3 |
| 3 | `03.04.04` | Exterior derivative | content/03-modern-geometry/04-differential-forms/03.04.04-exterior-derivative.md | Spivak Vol. I §7; Bott-Tu §I.1 |
| 4 | `03.04.05` | Stokes' theorem | content/03-modern-geometry/04-differential-forms/03.04.05-stokes-theorem.md | Spivak Vol. I §11; Bott-Tu §I.3; Lee §16 |
| 5 | `03.06.03` | Stiefel-Whitney classes | content/03-modern-geometry/06-characteristic-classes/03.06.03-stiefel-whitney.md | Milnor-Stasheff §4–§8; Bott-Tu §23 |

**Unblocks** (after this strand ships): `03.04.06` De Rham cohomology, `03.05.05` Double cover, `03.08.04` Classifying space (partial — also needs Strand A), `03.08.06` Stable homotopy (partial — also needs suspension/spectra). After both strands close, **at minimum 6 of 8 pending units close**, with stable homotopy still needing the (deferred) suspension + spectrum units.

## 4. Strand collision avoidance

The two strands operate on **disjoint chapter directories**:

- Strand A: `content/00-precalc/02-set-and-function/`, `content/01-foundations/01-linear-algebra/01.01.01-*`, `content/03-modern-geometry/01-tensor-algebra/`
- Strand B: `content/03-modern-geometry/12-homotopy/`, `content/03-modern-geometry/04-differential-forms/03.04.04-*`, `content/03-modern-geometry/04-differential-forms/03.04.05-*`, `content/03-modern-geometry/06-characteristic-classes/03.06.03-*`

Shared files both strands edit:
- `docs/catalogs/CONCEPT_CATALOG.md` — append-only; new entries added in different sections
- `manifests/deps.json` — append-only; both strands add to `shipped` set
- `docs/pilot-lessons.md` — append-only

Risk of last-write-wins on shared files is acceptable — historically (Wave 2, Wave 3 Phase 3.2) this hasn't caused issues because each session adds new content rather than modifying shared lines.

If a conflict surfaces, prefer manual reconciliation: take the union of additions from both sessions, validate, ship.

## 5. Phase structure

Wave 4 ships in **one phase** — both strands run concurrently, total ~10 units. After both report back, run a flag-flip cleanup pass on the 8 originally-pending units, then ship Wave 4.

## 6. Wave 5 scope (sketch)

After Wave 4, the remaining gaps are:

- **Stable homotopy** (`03.08.06`) needs `03.12.03` suspension functor and `03.12.04` spectrum / stable category. These are deeper than typical curriculum entries and could be deferred indefinitely if we accept stable homotopy with a partial pending-prereqs flag, or produced in Wave 5 as part of a "homotopy theory completion" batch.
- **Possible apex expansion**: per `OVERVIEW.md`, additional apex strands beyond spin geometry (algebraic geometry, symplectic geometry, representation theory, statistical mechanics) would be the natural Wave 5 / v0.5 work. This is *lateral* expansion rather than depth, and constitutes the transition from v0.x to v1 of the curriculum.

**Wave 5 candidate units (4–6 units, optional):**

- `03.12.03` Suspension (homotopy-theoretic)
- `03.12.04` Spectrum / stable homotopy category
- `03.12.05` Eilenberg-MacLane space (foundation for ordinary cohomology in homotopy theory)
- `48.05.06` Reduction of structure group (alternative formulation of spin / oriented bundles, useful)

Wave 5 is optional in the sense that the curriculum DAG is already substantially complete after Wave 4. Its primary purpose is closing the last `pending_prereqs: true` flags rather than introducing new content.

## 7. Success criteria (Wave 4)

Wave 4 succeeds if:

- [ ] All 10 Wave 4 units ship at 27/27 rubric.
- [ ] After Wave 4 ships, `validate_all.py` is green at unit count ≥ 63 (53 currently shipped + 10 Wave 4).
- [ ] **At least 6 of 8** previously-`pending_prereqs: true` units flip to `false` (the 2 holdouts being stable homotopy and possibly classifying space, both blocking on suspension/spectrum which is deferred to Wave 5 if at all).
- [ ] `pnpm build` clean at ≥ 68 pages rendered.
- [ ] LM editorial review pass on the 10 new units catches no flagrant Master-prose violations (rubric §M).

Wave 4 fails if:

- Production introduces curriculum-bloat units that don't appear in any other unit's `prerequisites:` list.
- The DAG remains untraversable from leaf to apex after Wave 4 closes — i.e., more than 2 units still have `pending_prereqs: true`.

## 8. Exit conditions

After Wave 4:

- **If Wave 5 is scoped**: produce 4–6 stretch units to close the last 2 pending flags and bring the DAG to total closure.
- **If Wave 5 is deferred**: declare v0.x scope complete with a documented "stable homotopy / classifying space pending on Wave 5" footnote. Move on to v0.5 lateral expansion (additional apex strands) or v1 launch readiness (rendering, exercise interactivity, RAG, reviewer attestation).

The transition out of Wave 4 is the natural inflection from "depth completion" to "lateral / production readiness" work.

---

*Wave 4 plan drafted 2026-04-28 during Phase 3.2 cleanup. Two-strand parallel production.*
