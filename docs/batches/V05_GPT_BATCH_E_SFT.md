# Codex v0.5 — Strand E (Statistical Field Theory & Lattice Models) — gpt-codex batch

This is your second strand. Concurrent with Strand B (Symplectic geometry — see `docs/batches/V05_GPT_BATCH_B_SYMPLECTIC.md`) and claude's Strands A, C, D.

Total Strand E production: ~22 new units (12 apex + ~10 supporting). At your current production cadence (~2–5 min per unit), this strand should close in roughly 1.5–2 hours of focused work.

## Working directory

/Users/tyler/Documents/proj rn/codex

## Read first

1. `docs/plans/CURRICULUM_V0_5_PLAN.md` §6 — the Strand E framing, apex unit list, supporting units, and shipped foundations to reuse.
2. `docs/plans/PILOT_PLAN.md` — current shipped count, v0.x retrospective.
3. `docs/pilot-lessons.md` — production lessons.
4. `docs/specs/UNIT_SPEC.md` — frontmatter and tier markers.
5. `docs/specs/QUALITY_RUBRIC.md` — 27-point automated checklist + §M Master prose standard.
6. `docs/catalogs/CONCEPT_CATALOG.md` — find/add concept entries; new namespace `stat-mech.<topic>` for this strand.
7. **Existing reference templates** — read these for style:
   - `content/03-modern-geometry/10-conformal-field-theory/03.10.02-cft-basics.md` (closest physics-style content; ties to the conformal-symmetry-at-criticality apex unit).
   - `content/03-modern-geometry/07-gauge-theory/03.07.05-yang-mills-action.md` (action-functional style, similar physics flavour).

## Production queue (Strand E Wave 1 apex)

12 apex units in dependency order. Section `08` is reserved for statistical field theory & lattice models. Place units in `content/08-stat-mech/<chapter>/<id>-<slug>.md`.

| Order | Unit ID | Title | Path | Anchor |
|---|---|---|---|---|
| 1 | `08.01.01` | Partition function (statistical mechanics) | content/08-stat-mech/01-partition/08.01.01-partition-function.md | Kardar *Statistical Physics of Fields* (MIT 8.334 OCW) Ch. 1; Pathria & Beale Ch. 3 |
| 2 | `08.01.02` | Ising model | content/08-stat-mech/01-partition/08.01.02-ising-model.md | Baxter *Exactly Solved Models in Statistical Mechanics* §1; Kardar Ch. 5 |
| 3 | `08.02.01` | Mean-field theory and Curie-Weiss model | content/08-stat-mech/02-mean-field/08.02.01-mean-field.md | Kardar Ch. 4; Goldenfeld Ch. 4 |
| 4 | `08.03.01` | Onsager solution of the 2D Ising model (transfer matrix) | content/08-stat-mech/03-onsager/08.03.01-onsager-solution.md | Onsager 1944; Baxter §7; Kardar Ch. 5 |
| 5 | `08.04.01` | Renormalisation group (real-space block decimation) | content/08-stat-mech/04-rg/08.04.01-real-space-rg.md | Kadanoff 1966; Wilson-Kogut 1974; Kardar Ch. 6 |
| 6 | `08.04.02` | Wilson-Fisher fixed point and universality | content/08-stat-mech/04-rg/08.04.02-wilson-fisher.md | Wilson-Fisher 1972; Kardar Ch. 7 |
| 7 | `08.05.01` | Critical exponents and scaling laws | content/08-stat-mech/05-critical/08.05.01-critical-exponents.md | Stanley *Introduction to Phase Transitions and Critical Phenomena* §3; Kardar Ch. 5 |
| 8 | `08.06.01` | Gaussian field theory and free boson | content/08-stat-mech/06-gaussian/08.06.01-gaussian-field.md | Itzykson-Drouffe Vol. 1 §1; Di Francesco-Mathieu-Sénéchal §6 |
| 9 | `08.06.02` | Conformal symmetry at criticality | content/08-stat-mech/06-gaussian/08.06.02-conformal-criticality.md | Belavin-Polyakov-Zamolodchikov 1984; Polchinski Vol. 1 §4 |
| 10 | `08.07.01` | Path integral formulation of statistical mechanics | content/08-stat-mech/07-path-integral/08.07.01-path-integral.md | Feynman-Hibbs *Quantum Mechanics and Path Integrals*; Kardar QFT notes §4 |
| 11 | `08.08.01` | Wilson's lattice gauge theory | content/08-stat-mech/08-lattice-gauge/08.08.01-wilson-lattice-gauge.md | Wilson 1974; Kogut 1979; Itzykson-Drouffe Vol. 2 |
| 12 | `08.09.01` | Quantum-classical correspondence (Wick rotation) | content/08-stat-mech/09-wick/08.09.01-wick-rotation.md | Itzykson-Drouffe Vol. 1 §1; Polchinski Vol. 1 §1 |

After the apex queue, produce a Wave 2 supporting batch (Boltzmann distribution, free energy, correlation functions, transfer matrix general theory, spontaneous symmetry breaking, Mermin-Wagner, beta function, etc.).

## Tier policy

All units: three tiers, `tiers_present: [beginner, intermediate, master]`. Beginner aims at Strogatz / 3Blue1Brown; Master aims at LM-standard graduate-text prose.

`pending_prereqs: false` for most — Hilbert space, Lie algebra, differential forms, CFT basics, central extension are all shipped. Set `pending_prereqs: true` only when a Strand E unit cross-refers to another not-yet-produced Strand E unit.

## Per-unit production protocol

1. Read the anchor reference; identify the canonical Master-tier statement and proof.
2. Draft using the CFT-basics or Yang-Mills template.
3. Update `docs/catalogs/CONCEPT_CATALOG.md` (new namespace `stat-mech`).
4. Update `manifests/deps.json`.
5. Run `validate_unit.py` until 27/27.
6. Append to `docs/pilot-lessons.md`.
7. After apex queue: `validate_all.py` green, `pnpm build` clean.

## Hard conventions

- **Sign conventions**: state explicitly in each formal-definition section (e.g., the Boltzmann factor's $\exp(-\beta H)$ vs $\exp(-H/k_B T)$ choice, the partition function's $Z = \mathrm{tr}(\exp(-\beta H))$ vs path-integral form).
- **Imaginary-time / Wick rotation**: when you write $\beta = it$, document it. The unit `08.09.01` makes this convention explicit and is the canonical reference for downstream units that use it.
- **Lattice spacing**: in lattice units, use $a$ as the lattice spacing; the continuum limit is $a \to 0$. State explicitly.
- **No emojis anywhere**.
- **Lean status**: Mathlib has very little statistical-physics infrastructure. Most units will be `lean_status: none`; document the gap in `lean_mathlib_gap`.

## Master prose standard

Same as Strand B and v0.x: six failure modes from QUALITY_RUBRIC §M. Avoid valedictory rhetoric especially in physics-flavored Historical & philosophical context sections — physics history is rich enough to tempt drift into "the deepest insight of statistical mechanics is..." territory. Cite, attribute, stop.

## Stop conditions

Stop and report after:

- All 12 apex units validate at 27/27.
- 8–10 supporting units shipped.
- `validate_all.py` green; `pnpm build` clean.

If any apex unit (e.g., Onsager) genuinely cannot be sourced from `reference/`, report and ship the unit at `lean_status: none` with `human_reviewer: TBD` rather than block.

Begin with `08.01.01` Partition function. Read `docs/plans/CURRICULUM_V0_5_PLAN.md` §6 first.

---

*v0.5 Strand E — Statistical field theory & lattice models. 12 apex + ~10 supporting = ~22 new units. Concurrent with Strand B and claude's Strands A, C, D.*
