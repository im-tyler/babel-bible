# Babel Bible — Pilot Plan

**Wave 1.** 10 apex units, all three tiers (originally scoped Master-only; expanded during production once the rendering pipeline supported tier filtering). Apex-first production. Purpose: validate the spec + reveal real failure modes before scaling. Not to be confused with v1 launch.

**Status (2026-04-28, Wave 5 closed — DAG complete):** ✅ all 10 apex units shipped at 27/27 rubric. LM-editorial pass complete on all units. Wave 2 + Wave 3 + Wave 4 + Wave 5 all closed: **66 units shipped total (10 Wave 1 + 31 Wave 2 + 12 Wave 3 + 10 Wave 4 + 3 Wave 5). 1775/1775 rubric checks. Build clean: 71 pages render.** **🎉🎉🎉 ZERO units have `pending_prereqs: true`. The curriculum DAG is FULLY CLOSED — every shipped unit's prerequisites resolve to other shipped units.** v0.x scope is complete; lateral expansion (additional apex strands) and v1 launch readiness (rendering, exercise interactivity, RAG, reviewer attestation) are the next moves.

Read `OVERVIEW.md` §5 (production strategy), §8 (pipeline stages), and `docs/catalogs/DEPENDENCY_MAP.md` before this.

---

## 1. Production sequence

Deliberately *not* parallel. The pilot is a stress test of the spec.

| Order | Unit ID | Title | Strategy | Status |
|---|---|---|---|---|
| 1 | `03.09.02` | Clifford algebra | **Manual** (Tyler + dual-agent review) | ✅ shipped 2026-04-27, 27/27 rubric, 3 tiers, LM-editorial pass 2026-04-28 |
| 2 | `03.09.04` | Spin structure | Manual | ✅ shipped 2026-04-27, 20/20 rubric, Master-only, LM-editorial pass 2026-04-28 |
| 3 | `03.09.06` | Fredholm operators | Manual | ✅ shipped 2026-04-27, 27/27 rubric, 3 tiers, LM-editorial pass 2026-04-28 |
| 4 | `03.06.06` | Chern-Weil homomorphism | Agent-drafted (gpt-5-codex) + LM-editorial pass | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers |
| 5 | `03.06.04` | Pontryagin and Chern classes | Agent-drafted (gpt-5-codex) + LM-editorial pass | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers |
| 6 | `03.09.08` | Dirac operator | Agent-drafted (gpt-5-codex) + LM-editorial pass | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers |
| 7 | `03.08.07` | Bott periodicity | Agent-drafted (gpt-5-codex) | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers |
| 8 | `03.07.05` | Yang-Mills action | Agent-drafted (gpt-5-codex) | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers |
| 9 | `03.10.02` | CFT basics | Agent-drafted (gpt-5-codex) | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers |
| 10 | `03.09.10` | Atiyah-Singer index theorem | Agent-drafted (gpt-5-codex) + extended human review pending | ✅ shipped 2026-04-28, 27/27 rubric, 3 tiers, **flagged for human review per §3 Yellow** |

**Why unit #1 is Clifford algebra** (not Atiyah-Singer): Clifford algebra is algebraically self-contained, concrete (you can *compute* in it), and the prose can be anchored to Lawson-Michelsohn §I.1 with minimum speculation. Atiyah-Singer is intentionally last because it integrates everything — producing it last means the rubric has already been calibrated on simpler cases.

## 2. Success criteria (Pilot)

The pilot succeeds if, by end of wave 1:

- [x] All 10 units exist in `content/03-modern-geometry/` with full frontmatter per `docs/specs/UNIT_SPEC.md`
- [~] All reference citations resolve to real files in `reference/` — *partial: TODO_REF placeholders remain for Lawson-Michelsohn (NEED_TO_SOURCE #75), Atiyah-Singer Annals 1968, Berline-Getzler-Vergne, Kobayashi-Nomizu Vol. II, Milnor-Stasheff. Sourcing is a Wave 2 parallel task.*
- [x] All cross-references resolve (each unit's prereqs are either published pilot units or explicitly marked `pending_prereqs: true` with deps registered in `manifests/deps.json`)
- [n/a] For units with `lean_status: full` — *no pilot unit shipped at `lean_status: full`; Mathlib coverage is too thin at apex.*
- [x] For units with `lean_status: none` — `lean_mathlib_gap` populated; `human_reviewer: TBD` for most (formal review pending)
- [ ] ≥ 9 of 10 Master tiers rated "publication-quality" by a named mathematical reviewer — *pending Tyler's mathematical review pass*
- [x] `docs/specs/QUALITY_RUBRIC.md` exists, distilled from real pilot output (Wave 1 + LM editorial review + Wave 2 batch reports → 18 catalogued failure modes as of 2026-04-28)
- [x] At least one failure mode per unit is documented in `docs/pilot-lessons.md`
- [x] Production time per unit recorded — manual ~2.5h/unit (Wave 1 first three); agent-drafted ~2 min/unit (Wave 1 last seven; Wave 2 batches at 6 units / ~12 min). Median: agent-drafted apex unit ~2 min; manual apex unit ~2.5h.

The pilot *fails* (not "succeeds with caveats") if:

- Any unit ships with unresolved references or cross-refs
- Any `lean_status: none` ships without a named reviewer
- Any Master-tier prose can be shown to closely paraphrase the anchor text (plagiarism regression)
- We produce fewer than 6 of 10 in the planned pilot window

## 3. Reviewer confidence table

Pre-filled defaults (×) inferred from Tyler's known E8 / spinorial-2 / SO(8) / gauge-theory work. **Tyler: confirm or override each row.** Any Red → co-reviewer recruitment starts before that unit enters review. See `docs/plans/REVIEWER_PLAN.md` §7.

| Unit | Green (can review solo) | Yellow (can review with effort) | Red (need outside expert) | Note |
|---|:---:|:---:|:---:|---|
| Clifford algebra | × | | | concrete algebra; in your wheelhouse |
| Spin structure | × | | | E8 / SO(8) work touches this directly |
| Pontryagin and Chern classes | × | | | gauge-theory adjacent |
| Yang-Mills action | × | | | gauge-theory adjacent |
| Dirac operator | | × | | analytic side may want a 2nd look |
| Chern-Weil homomorphism | | × | | bridges algebra ↔ topology; analytic depth |
| Atiyah-Singer index theorem | | × | | deep result; integrates 6 prior units |
| Bott periodicity | | × | | more topology-flavored |
| Fredholm operators | | × | | functional-analysis depth |
| CFT basics | | × | | rep-theory of infinite-dim algebras |

Defaults: 4 Green, 6 Yellow, 0 Red — meaning solo review is feasible for all 10 with effort on 6 of them. **Recommendation:** recruit one co-reviewer with strong functional analysis / index theory background to back-up units #5–#10; they'd cover the Yellow rows. Reach out before Phase 2c starts.

## 4. What Phase 1.5 (RAG layer) must have before Phase 2a

Before the first pilot unit is produced (even manually), the following must be in place so the Scanner step — or a human producer using the same retrieval — has what it needs:

- Embeddings generated over all `reference/**/*.md`
- Embeddings generated over PDF text layers (pdftotext extraction + chunking)
- Vector store (LanceDB, Chroma, or pgvector on Nucleus once leak is fixed) populated
- Retrieval API: `retrieve(concept: str, k: int) -> list[Passage]` with provenance (source + locator)
- Retrieval results cached per-unit to `manifests/units/<id>-retrieval.json` so they are re-inspectable

This is necessary even for *manual* production — the producer needs the top-N passages pulled and reviewed before drafting, same as an agent would.

## 4b. Reference-material gap for unit #1 (Clifford algebra)

**Lawson-Michelsohn *Spin Geometry* (NEED_TO_SOURCE #75) is the canonical Master-tier anchor for `spin-geometry.clifford.clifford-algebra` per `docs/catalogs/CONCEPT_CATALOG.md`. We don't have it yet.**

Two paths:

- **(A) Wait** — pause Phase 2a until you source LM. Cleanest for review against the anchor. Slows pilot start.
- **(B) Produce now** with available substitutes; mark missing LM citations as `TODO_REF` placeholders; backfill citations once LM arrives. Better stress-test of the spec (handles citation gaps), faster pilot start.

**Available substitutes for unit #1:**

| Source | What it covers | Fit |
|---|---|---|
| Sternberg, *Lie Algebras* (already downloaded) | Clifford-adjacent algebraic structure | partial |
| Quantum Well, `Mathematical foundations/Algebra/` (CC BY 4.0) | Boris's notes touch Clifford via tensor and exterior algebra | useful |
| Atiyah-Bott-Shapiro, *Clifford Modules* (1964 Topology paper) | Original ABS paper — likely findable open-access via JSTOR / arXiv historical mirror | excellent if found |
| Tong, *Quantum Field Theory* PDF | Spinor-flavored Clifford in §4 | partial |
| Freed, *Lectures on Bordism — Old and New* (downloaded) | Clifford-bordism connection | partial |

**Recommendation: path (B).** Pilot is a spec stress-test, not a final unit. Produce, mark gaps, source LM in parallel, complete unit on LM arrival.

## 5. Timeline (indicative, not committed)

| Stage | Target | Dependencies |
|---|---|---|
| Phase 1.5: RAG build | 1–2 weeks | Neutron rendering can wait; RAG is standalone |
| Phase 2a: Unit #1 (Clifford algebra) manual | 1 week | RAG ready |
| Phase 2b: Rubric distillation from #1 | 2–3 days | Unit #1 reviewed |
| Phase 2c: Units #2–10 | 3–4 weeks | Rubric exists; agent swarm setup; Nucleus leak fixed (by unit #4 when agent-assisted production starts) |
| Phase 3: Spec iteration + Wave 2 planning | 1 week | Pilot reviewed |

Total pilot window: **~8 weeks**. If it slips past 12 weeks, treat as a signal that the spec is wrong, not that we need to push harder.

## 6. Nucleus leak — hard dependency

Agent-assisted production (unit #4 onward) writes manifests to Nucleus. The current leak must be resolved before unit #4 begins. If it isn't, unit #4 waits. Do not work around the leak — it will compound into a production-scale bug if deferred.

## 7. What the pilot is explicitly *not* testing

- Non-Master tiers (deferred by design — see `OVERVIEW.md` §2, §5)
- Full agent swarm orchestration (pilot uses minimal pipeline: Scanner → Producer → Reviewer → Integrator only)
- Interactive exercise rendering (exercises ship as static reveal-answer in pilot)
- Personalized paths, spaced repetition, mastery gating (all v1.5+)
- Cross-subject transfer (pilot is spin-geometry + its immediate neighbors)

## 8. Exit to Wave 2

Pilot complete → review `docs/pilot-lessons.md` → revise `docs/specs/UNIT_SPEC.md` and `docs/specs/QUALITY_RUBRIC.md` as needed → Wave 2 produces the high-priority pulled-prereq units (from `docs/catalogs/DEPENDENCY_MAP.md` §4) in parallel. Wave 2 is the first real test of parallel agent production.

---

*This plan is for Wave 1 only. Subsequent waves get their own plans as the DAG grows.*
