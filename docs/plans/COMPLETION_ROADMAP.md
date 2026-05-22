# Babel Bible Completion Roadmap

**Drafted 2026-05-20** after Cycle 4 ship + Layer A structural cleanup. The destination: every Fast Track book has a complete coverage shell of math-style units, every cross-domain chapter (phys/chem/bio/phil) meets the §5.1 contract, and every skipped_units entry is closed. This document quantifies the gap, sequences the cycles, and sets realistic expectations.

---

## §1 Where we are (2026-05-20, verified)

| Metric | Value |
|---|---|
| Shipped units | **376** |
| Queued units | **273** |
| Audits done | **58 / 58** books (`books_unaudited: []`) |
| Cycle pace (Opus 4.7, math T1 + bio/chem mix) | ~6 units per cycle, ~40 min wall-clock |
| T1-only skipped backlog (from `manifests/skipped_units.md`) | ~105 remaining (was 110, Cycle 4 closed 2: KR-theory 03.08.12, φ⁴ 08.10.03) |
| Structural collisions | **all 4 resolved** (12.02.01 dedupe, 12.03.01 renumber, 11-thermo → 05-symplectic, 09-quantum-theory → 03.14) |
| deps.json prereq-registration debt | resolved (24 IDs in pending) |
| CONCEPT_CATALOG missing entries | resolved (6+ added 2026-05-20) |

### 1.1 Queued by section

| Section | Queued | Notes |
|---|---|---|
| 00 precalc | 16 | Math lane (Tyler's session A) |
| 01 foundations | 13 | Math |
| 02 analysis | 14 | Math (includes ODE/PDE backbone) |
| 03 modern geometry | 61 | Math — largest single bucket, T1-heavy |
| 04 algebraic geometry | 59 | Math — large, T1-heavy (Hodge/GIT/toric/tropical) |
| 05 symplectic | 10 | Math (incl. Souriau-Gibbs now here) |
| 06 Riemann surfaces | 16 | Math |
| 07 representation theory | 34 | Math (Lie groups + algebraic groups) |
| 08 stat mech | 14 | Math/physics border |
| 09 classical mech | 8 | Physics lane (session B) |
| 11 stat mech physics | 1 | Physics lane |
| 12 quantum | 5 | Physics lane |
| 21 number theory (no dir yet) | 22 | Math T1 grad-research cluster — planned, not yet started |
| **Math (00-08 + 21)** | **245** | This lane (Opus session A) |
| **Phys/Chem/Bio (09-19)** | **28 + ~30 unwritten chem/bio gaps** | Session B owns |

### 1.2 Per-chapter shipped counts (rounded to nearest where verified)

Math (489 files total — close to "complete" in many chapters at the *quantity* level; quality and depth varies):
- 03-modern-geometry: 122 (largest, deepest)
- 06-riemann-surfaces: 65
- 07-representation-theory: 64
- 05-symplectic: 61
- 04-algebraic-geometry: 51
- 02-analysis: 43
- 03-differential-geometry: 39
- 00-precalc: 25
- 01-foundations: 23

Cross-domain (the underbuilt half):
- 08-stat-mech: 23
- 17-mol-cell-bio: 18
- 12-quantum: 14
- 19-eco-evo-bio: 13
- 09-classical-mech: 12
- 15-orgchem: 12
- 10-em-sr: 10
- 14-genchem-pchem: 10
- 11-stat-mech-physics: 9
- 13-gr-cosmology: 9
- 16-inorgchem: 8
- 18-organismal-bio: 8
- 20-philosophy: 2 (vestigial)

---

## §2 Definition of "complete"

A coverage shell is "complete" for a book / chapter when:

1. Every P1-level concept from that book's audit punch-list has a shipped unit at 27/27.
2. Every chapter's prerequisite chain is internally consistent (no pending unresolved prereqs in deps.json).
3. Every unit meets the §5.1 math-style contract for its lane (math: full Lean + multi-section Master; chem/bio/applied-phys: prose-first multi-section Master, Lean optional).
4. The Pass-W cross-stitch density is ≥ 3 lateral connections per Master section (per CYCLE_4 §6.2 threshold).
5. Continuity-report metrics: backward-reference density ≥ 8.0 / 1000w, lateral connections ≥ 3 per Master, anchor-phrase reuse ≥ 0.95.

"Complete corpus" = all 58 audited books in this state. Realistic estimate: **~600 more units** beyond the current 376 (factoring queued 273 + ~325 from re-deepenings, audits' P2/P3/P4 punch-list items, and section-21 number-theory build-out).

---

## §3 Phased plan

### Phase 1 — Structural & meta (Cycle 5 cleanup) — DONE 2026-05-20

- ✓ Flatten repo to project root
- ✓ Cycle 4 ship + Pass-W
- ✓ Layer A structural cleanup (12.02.01 dedupe, 12.03.01 renumber, 11-thermo move, 09-quantum-theory rename)
- ✓ deps.json + catalog backfill
- ✓ Parallel-lanes coordination doc

### Phase 2 — Math T1 backlog drain (Cycles 5–15, ~10 cycles × 6 units = 60 units)

Focus: close the `skipped_units.md` T1-only backlog. These are units only an Opus-tier session can produce reliably.

**Cycle 5 (next dispatch this session):** Characteristic-classes cluster
- 03.06.07 Chern-Simons / transgression form
- 03.06.10 Stiefel-Whitney and Pontryagin numbers
- 03.06.11 Hirzebruch signature theorem (Master rewrite)
- 03.06.12 Unoriented bordism and Thom's theorem
- 03.06.14 Steenrod squares and the Wu formula
- 03.06.18 Chern character ring homomorphism

**Cycle 6:** Homotopy advanced cluster (Quillen / Bousfield-Kan)
- 03.12.33 Kan-Quillen model structure on sSet
- 03.12.35 Simplicial model category and function complex
- 03.12.37 Homotopy colimit (Bousfield-Kan construction)
- 03.12.38 Bousfield-Kan spectral sequence
- 03.12.40 Postnikov tower of a Kan complex
- 03.12.45 Arithmetic square and integral fracture

**Cycle 7:** K-theory backlog
- 03.08.12 ✓ DONE Cycle 4
- 03.08.13–20 remaining items

**Cycle 8:** Hodge / Voisin cluster
- 04.09.05 d-bar-d-bar-lemma
- 04.09.07 Hard Lefschetz
- 04.09.08 Hodge-Riemann bilinear relations
- 04.09.09 Lefschetz (1,1)-theorem
- 04.09.10 Akizuki-Nakano vanishing
- 04.09.11 Kodaira embedding theorem

**Cycle 9:** GIT / Moduli cluster (04.10.x)
**Cycle 10:** Toric / tropical cluster (04.11.x + 04.12.x)
**Cycle 11:** Surface / divisor advanced (04.05.10–12)
**Cycle 12:** QFT-side backlog (08.10.01, .04–07, .09, .10)
**Cycle 13:** Number-theory grad cluster (21.02.x–21.10.x) — opens new section
**Cycle 14:** Spectra / stable homotopy (03.08.06, 03.13.x cluster)
**Cycle 15:** Cleanup + Pass-W consolidation across Cycles 5–14

### Phase 3 — Rep-theory + Lie depth (Cycles 16–21, ~6 cycles × 6 = 36 units)

Section 7 has 34 queued. Cycles dispatch in topological order from queue head: 07.01.09, 07.05.05 onward.

### Phase 4 — Foundations / analysis tightening (Cycles 22–26, ~5 cycles × 6 = 30 units)

00–02 queued: 43 units. Foundations of Section 1 — measure theory, functional analysis advanced, group/ring/field deepening. Fills the back of the prerequisite cone.

### Phase 5 — Quality sweep + continuity audits (Cycles 27–30)

- Re-validate every Cycle-1 through Cycle-15 shipped unit for drift.
- Pass-W consolidation: every Master section should hit ≥ 3 lateral connections after this sweep.
- Continuity report: pull all metrics to passing.
- Lean compile check: every `lean_status: partial` or `full` module must compile against current Mathlib.

### Phase 6 — Chem/Bio/Phys parity (~30 cycles, parallel to math via session B)

Owned by the parallel session per `CYCLE_5_PARALLEL_LANES.md`. Independent stream. Targets:
- Bio: 37 → ~150 units across §17–19; multi-section Master + 6000+ words throughout.
- Chem: 30 → ~100 units across §14–16; same contract.
- Physics 10-em-sr: Lean retrofit or accept prose-first; 10 → ~30 units.
- Physics 12-quantum: 14 → ~40 units (most are already 8000+ words; depth check only).
- Philosophy §20: 2 → ~20 units. New chapter build-out.

### Phase 7 — Number theory full build (Cycles ~50–60)

Section 21 doesn't exist yet on disk. Build from scratch: 22 queued + ~30 more for completeness. T1-only — finite fields, Quadratic reciprocity, p-adics, Hensel, Hilbert symbol, modular forms, Hecke, Eichler-Shimura, Galois reps, BSD, Sato-Tate, Iwasawa, Langlands survey.

### Phase 8 — Final polish + ship gate (Cycles ~70+)

- Beginning-tier accessibility audit (some units may be too dense).
- Image / diagram coverage check.
- Bibliography canonicalization sweep.
- Final Lean compile pass.
- Continuity report green across all metrics.

---

## §4 Wall-clock estimate

- Per-cycle: ~40 min (6 units in parallel + re-validation + Pass-W).
- Cycles needed: ~80 across math lane, ~30 across chem/bio/phys lane (parallel).
- Single-session realistic: 2–4 cycles before context density forces stop.
- Total wall-clock to completion: ~80 × 40 min = 53 hours of orchestrator time, spread across many sessions.

**This session's plan:** finish Cycle 5 math (characteristic classes), Pass-W, commit + push. Stop.

---

## §5 Quality gates (don't compromise)

Per `AGENTIC_EXECUTION_PLAN.md` §8:
- Every unit re-validated independently 27/27 before commit.
- Re-dispatch on any agent failure; never accept partial.
- Pass-W runs after each cycle. Cross-stitches must be reciprocal.
- Continuity report runs at least every 3 cycles; drift triggers a polish cycle.
- Lean compilations checked at least every 6 cycles (when `lean_status: partial/full`).

---

## §6 Risks & mitigations

| Risk | Mitigation |
|---|---|
| Agent quality drift across cycles | Re-validate every cycle; Pass-W catches prose drift; quarterly continuity sweep |
| Cross-lane git conflicts | Both sessions pull+rebase before dispatch; shared files append-only; conflicts are usually benign and human-resolved |
| Lean infrastructure rot (Mathlib upgrades) | Lean compile every 6 cycles; pin Mathlib version in `lake-manifest.json` |
| Sub-agent harness limits (context, parallel cap) | Cap parallel dispatch at 6; orchestrator (top-level) handles dispatch, sub-agents don't recurse |
| Memory drift (this doc going stale) | Update §1 metrics every 3 cycles; treat queued numbers as snapshots |

---

## §7 Next steps after this session

1. Tyler boots session B with the prompt from `CYCLE_5_PARALLEL_LANES.md` §8 to start chem/bio/phys lane.
2. Session A continues math from Cycle 6 (homotopy advanced) at next session start; reads `orchestrator_status.md` for current state.
3. Both sessions commit/push at end of each cycle; sync via Forgejo origin/main.
4. After Phase 2 (math T1 backlog drain) is done, Tyler can decide whether to push Phase 3 vs hand chem/bio/phys priority.

End of roadmap.
