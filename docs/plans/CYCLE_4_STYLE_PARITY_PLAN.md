# Cycle 4 — Cross-Domain Style-Parity Plan

**Drafted 2026-05-19.** First Opus 4.7 cycle since Cycle 3 (2026-05-18). Working orientation for Tyler.

**Premise:** Math is ~75% of shipped units and is the de facto style standard (7-section template + multi-section Master + Lean formalization + ~7000 wpu). Physics is close to parity in 12-quantum / 09-classical-mech / 13-gr-cosmology (83–89% Lean, 6000+ wpu), but **bio and chem are shipping at 50–60% depth with near-zero Lean coverage** (bio 0–12%, chem 8–40%). Cycle 4 closes that gap.

This plan supersedes `pending_approvals.md` items M–T as stale (already absorbed into subsequent silent cycles — 376 units shipped, 58 books audited, `books_unaudited: []`) and replaces them with the real current question: **how do we get bio/chem/under-served physics to the math-style standard, without stopping math frontier progress?**

---

## §1 State of play (verified 2026-05-19)

| Domain | Chapters | Units shipped | Share | Lean coverage | Words/unit |
|---|---|---|---|---|---|
| Math (00–07) | 9 | 489 | 75% | ~100% | ~7000 |
| Physics 12-quantum | 1 | 15 | 2% | 87% | 6100 |
| Physics 09-classical-mech | 1 | 12 | 2% | 83% | 6400 |
| Physics 13-gr-cosmology | 1 | 9 | 1.4% | 89% | comparable |
| Physics 11-stat-mech-physics | 1 | 9 | 1.4% | 44% | – |
| **Physics 10-em-sr** | 1 | **10** | 1.5% | **0%** | 7400 |
| **Chem 14-genchem-pchem** | 1 | 10 | 1.5% | 40% | 3500 |
| **Chem 15-orgchem** | 1 | 12 | 1.8% | 8% | – |
| **Chem 16-inorgchem** | 1 | 8 | 1.2% | 12% | – |
| **Bio 17-mol-cell-bio** | 1 | 17 | 2.6% | **6%** | – |
| **Bio 18-organismal-bio** | 1 | 8 | 1.2% | 12% | – |
| **Bio 19-eco-evo-bio** | 1 | 12 | 1.8% | **0%** | 4000 |

Master-section depth: a representative bio unit Master section is 737 words; a math-style physics unit Master is 2032 words (~2.75×). Bio/chem collapse their Master to a single named sub-section, not 3+.

### 1.1 Structural cleanup items found this session (corrected 2026-05-19)

These are NOT duplicate-content issues — they're naming/numbering bugs. Detail:

- **`09-quantum-theory/` (2 units) vs `09-classical-mech/` (12 units)**: shared Chapter-9 number, *distinct content*. 09-quantum-theory holds Woit/rep-theory-style QM (free particle as E(3) rep, complex structures + squeezed states); 09-classical-mech holds Hamiltonian/Lagrangian. Both are legitimate; both can't be Chapter 9. **Recommendation:** rename `09-quantum-theory/` → `03-modern-geometry/15-quantum-rep-theory/` (math-track home, matches the existing math/physics-track split) and renumber the 2 units to `03.15.0x`. Frees Chapter 9 for classical mech alone.
- **`11-thermodynamics/` (1 unit) vs `11-stat-mech-physics/` (9 units)**: shared Chapter-11 number, distinct content. The orphan unit is `11.04.02-souriau-gibbs-state.md` (symplectic-side stat mech). **Recommendation:** move to `05-symplectic/` as `05.XX.YY-souriau-gibbs-state.md`, delete empty `11-thermodynamics/` directory.
- **True duplicate inside `12-quantum/`**: `12.02.01-hilbert-space-formalism.md` (9454w, `02-formalism/`) and `12.02.01-hilbert-spaces-kets-and-bras.md` (3974w, `02-hilbert-formalism/`) cover the same topic at different depths. **Recommendation:** keep the 9454w version as canonical, archive the 3974w version, redirect cross-links.
- **ID collision inside `12-quantum/`**: `12.03.01-schrodinger-heisenberg-pictures.md` (`03-time-evolution/`) and `12.03.01-bosonic-fock-space-and-second-quantisation.md` (`03-fock-spaces/`) share ID `12.03.01` but cover different topics. **Recommendation:** renumber Bosonic Fock to `12.13.01` (new Fock-spaces chapter); keep Schrödinger/Heisenberg as `12.03.01`. Re-update prereq pointers in 4–5 dependent units.
- `pending_approvals.md` items M–T (Cycle-3 surfaced items) appear stale — silent cycles since 2026-05-18 shipped ~55 units and 36 audits without logging back to pending_approvals.md or orchestrator_status.md. Items should be marked **OBSOLETE / absorbed into silent cycles** rather than left active.

---

## §2 The math-style contract (revised 2026-05-19 after Tyler's clarification)

**Key reframe:** Math-style doesn't mean "Lean everywhere." For bio/chem/physics-applied chapters, the standard is **prose-first depth that conveys systems**, with formal math/Lean used **only where it adds explanatory force** (e.g., a population-genetics ODE is natural; a Lean category-theory abstraction of an enzyme is not). The validator already supports this: `lean_status: none` + a declared `lean_mathlib_gap` rationale passes 27/27 cleanly.

A "math-style" unit, regardless of domain, has:

1. **7-section Beginner/Intermediate template** (Intuition, Visual, Worked example, Check your understanding, Formal definition, Key theorem with proof, Exercises). All domains already do this. ✓
2. **Lean formalization section — required for math, optional for bio/chem/applied-physics.** When omitted, unit declares `lean_status: none` and names a `lean_mathlib_gap` (why this content doesn't formalize natively). When included for bio/chem, it must formalize a *substantive* claim (Hardy-Weinberg invariance as a probability lemma, Fisher's fundamental theorem as a real-valued bound), not a forced categorical wrapper.
3. **Master tier with ≥ 3 named H2 sub-sections**, each substantively developed. Each sub-section is a distinct advanced angle: a deeper mechanism, a connection to an adjacent system, an alternative formulation, an edge case where the textbook story breaks. Bio/chem currently collapse Master to one sub-section — this is the primary fix.
4. **6000–10000 words.** Bio at 4000 and chem at 3500 is half-depth. The added 3000+ words go into Master prose, not necessarily into formalization.
5. **27/27 validator pass** via `python3 scripts/validate_unit.py <path>`. Same gate as math.

A "**style-parity upgrade**" of an existing unit = adding (3)–(4) to a unit that already has the 7-section template; Lean status (2) decided per unit, not forced. A "**style-parity new production**" = ship a new unit that hits all five from the start.

**Operative principle (Tyler 2026-05-19):** bio/chem/applied-physics should be "grounded mostly in word information to convey systems, then also have math if needed." Math/theoretical-physics is the inverse: math is the medium and prose surrounds it. Both pass 27/27; both are "math style" in the validator's sense, but they look different on the page.

---

## §3 Three-track operating model

Run all three in parallel each cycle. Budget the agents accordingly.

### Track A — Math T1 frontier (skim, don't stop)

Keep 1–2 units per cycle from the T1-only `skipped_units.md` queue head (KR-theory, Bosonic Fock, φ⁴, characteristic-classes cluster). Opus-tier is the only producer capable of these; if we don't ship them, they accumulate forever. But cap at 1–2/cycle so bandwidth goes to closing the cross-domain gap.

### Track B — Bio/chem **deepening** (existing units → Lean + Master expansion)

The 67 already-shipped bio+chem units pass the 7-section template but lack Lean + multi-section Master. Deepening is faster than new production (the Beginner/Intermediate halves stay; we add ~3000 words of Master + 200-line Lean section). Target: 2–3 deepenings per cycle. Each deepening must re-validate 27/27.

### Track C — Bio/chem/physics **new production** at math-style depth

For chapters with under-coverage (e.g., 11-stat-mech-physics has only 9 units; 18-organismal-bio has only 8 across 7 sub-chapters), ship new units **at full math-style depth from the first draft** — never let a 3500-word stub bypass the contract. Target: 2–3 new per cycle.

### 3.1 Cycle budget (6 units, per Tyler's earlier answer)

- **2 × Track A** (math T1 frontier from queue head)
- **2 × Track B** (bio/chem deepening of high-leverage existing units)
- **2 × Track C** (bio/chem new at math-style depth)

---

## §4 Concrete Cycle-4 dispatch slate

### Track A — Math T1 frontier (2)

| Unit | Title | Where it lives | Notes |
|---|---|---|---|
| A1 | `03.08.12` | KR-theory (K-theory with reality) | `content/03-modern-geometry/08-k-theory/` | Atiyah KR-theory; splitting-principle arguments. Anchor: Atiyah 1966 *K-theory and reality*. |
| A2 | `08.10.03` | φ⁴ theory and the Dyson series | `content/08-stat-mech/10-qft/` (NEW sub-chapter — opens stat-side QFT entry strand; prereq: existing `12.03.01` bosonic Fock | reconcile per §1.1 | Anchor: Peskin-Schroeder §4.1–4.4; Weinberg vol 1 §6. |

(Both T1-only; both have producible mathematical content with proofs and Lean targets.)

### Track B — Bio/chem deepening (2)

Pick units that maximize cross-domain leverage (already cited by many other units; deepening lifts everything downstream). Per §2 revised: Lean is optional for these; focus is **prose depth and Master multi-sectioning**.

| Unit | Title | Current state | Deepening brief |
|---|---|---|---|
| B1 | `19.03.01` | Natural selection — directional/stabilizing/disruptive | 3880w, no Lean, 737w Master | Expand Master to 4 sub-sections, prose-first: (1) deterministic Wright-Fisher dynamics including the Fisher fundamental theorem stated and motivated; (2) stochastic drift coupling and the diffusion limit; (3) quantitative-trait extension (breeder's equation, heritability); (4) connection to evolutionary game theory (ESS, replicator dynamics). Target 8000w. Lean: optional — if added, formalize Fisher's fundamental theorem as a real-valued bound; otherwise declare `lean_status: none` citing "evolutionary dynamics formalization not in Mathlib." |
| B2 | `14.04.01` | Hydrogen atom quantum chemistry | 3899w, has Lean (40% chapter coverage) — but Master is single section | Expand Master to 4 sub-sections, prose-first: (1) relativistic corrections and fine structure with the Dirac equation perspective; (2) hyperfine structure and the magnetic-moment coupling; (3) breakdown for multi-electron atoms — what fails and why; (4) cross-link to the operator-side hydrogen unit `12.06.01` (same physics, different framing). Strengthen existing Lean to formalize separation of variables more substantively. Target 8000w. |

### Track C — Bio/chem new at math-style depth (2)

| Unit | Title | Section/chapter | Why this one |
|---|---|---|---|
| C1 | `19.02.01-extension` or new ID `19.02.05` | Wright-Fisher model and the diffusion approximation | 19-eco-evo-bio/02-pop-genetics | Currently Hardy-Weinberg is the only pop-gen unit and it's a 0-Lean-coverage chapter. WF is the math-stat-mech bridge of pop gen; should ship at full depth with Lean (martingale formalization, Kimura diffusion). |
| C2 | `17.07.02` | Receptor-tyrosine-kinase signaling — MAPK cascade | 17-mol-cell-bio/07-signaling | Highest cross-domain density (chemistry of phosphorylation + ODE kinetics + amplification math). Full math-style Master: ODE bistability, ultrasensitivity (Hill cooperativity proof), bifurcation analysis. |

Both Track C units open with full Lean + multi-section Master from line 1, not retro-fitted.

---

## §5 Dispatch protocol

Per `AGENTIC_EXECUTION_PLAN.md` §11 (still authoritative): 6 agents in a single parallel-dispatch message from the top-level Claude Code session. Each gets the unit-specific brief plus the **§2 math-style contract** as a hard constraint.

Self-validation loop required: each agent runs `python3 scripts/validate_unit.py <path>` before reporting done. Parent re-validates after return (don't trust agent self-reports — see Cycle 2 retro).

Pass W dispatched after all 6 return clean.

### 5.1 Style-parity contract appended to every Cycle-4 dispatch brief

> **Hard requirements (failure = re-dispatch, not partial accept):**
> 1. 7-section Beginner/Intermediate template present (Intuition → Visual → Worked example → Check your understanding → Formal definition → Key theorem with proof → Exercises).
> 2. **For math / theoretical-physics units:** Lean formalization section with non-`sorry` code compiling against current Mathlib. **For bio / chem / applied-physics units:** Lean optional — if omitted, frontmatter declares `lean_status: none` plus a `lean_mathlib_gap` rationale; if included, must formalize a substantive claim (probability lemma, ODE existence, invariance principle), not a forced abstraction.
> 3. Master tier with ≥ 3 named H2 sub-sections, each substantively developed. For bio/chem this is the most important contract item — single-sub-section Master is the current style gap. Each sub-section should be a distinct advanced angle: mechanism, alternative formulation, edge case, cross-system connection.
> 4. Word count ≥ 6000 for new production; ≥ 8000 for deepening. Increase goes into Master prose (and Lean if applicable), not into Beginner-tier padding.
> 5. `validate_unit.py` returns 27/27.
> 6. Concept catalog entry added if needed (overriding any "don't edit catalog" instruction — validator gate beats dispatch instruction, per Cycle-1 retro).
> 7. Bio/chem/applied-physics units prefer **prose-first explanation of systems**; equations and Lean appear where they add explanatory force, not as decoration.

---

## §6 What this cycle does NOT do

- Doesn't open new chapters. The structural cleanup (§1.1) is a separate pass.
- Doesn't run new audits. All 58 books audited.
- Doesn't re-frame `pending_approvals.md` items B–T (most are obsolete; will mark in a single sweep, not item-by-item).
- Doesn't touch the Lean compile pipeline. Lean sections per §2 must compile against current Mathlib — agents responsible for confirming.

---

## §7 What success looks like

After Cycle 4 ships:

- Math T1 backlog: 110 → 108 units remaining.
- Bio Master-sub-section depth: 1 → 3+ in B1 (proof that prose-first deepening hits the contract).
- Chem 14-genchem-pchem hydrogen: Master single-section → 4 sub-sections.
- 2 new bio/chem units shipped at full 6000+ word depth from line 1.
- Cycle-5 plan can scale Track B/C aggressively because the contract is proven workable.

If any of those don't land, **the contract is too aggressive for bio/chem** and we re-calibrate before Cycle 5 — that's the honest signal we want from this cycle.

---

## §8 Open questions for Tyler

1. **Structural cleanup (§1.1)**: do it inline as part of Cycle 4 (low risk; renames + git moves), or defer to a dedicated cleanup cycle?
2. **Bio Lean content**: Lean-formalize *population-genetics math* (PMF, expectations, allele-frequency dynamics) inside bio units, or relegate all Lean to a `19.0-formalization/` chapter that bio units cross-link to? (Recommendation: in-unit Lean. The math is part of the biology.)
3. **Track A unit A2 (φ⁴) location**: open `08-stat-mech/10-qft/` (new sub-chapter, opens stat-side QFT) vs put it in `12-quantum/03-fock-spaces/` (alongside the bosonic-Fock unit already there)? (Recommendation: stat-side. φ⁴ is partition-function-centric, not operator-centric.)
4. **Cycle 4 deepening pattern as standard**: should *every* future bio/chem dispatch require the math-style contract (§2/§5.1), or keep "stub then deepen" allowed for chapters that need fast scaffolding? (Recommendation: standard from Cycle 5 onward; Cycle 4 is the proof.)
