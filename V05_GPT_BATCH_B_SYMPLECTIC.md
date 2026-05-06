# Codex v0.5 — Strand B (Symplectic Geometry) — gpt-codex batch

This is your strand. The claude session is concurrently producing Strands A (Algebraic geometry), C (Riemann surfaces), and D (Representation theory). Strand E (Statistical field theory) is your second strand — see `V05_GPT_BATCH_E_SFT.md`.

Total Strand B production: ~21 new units (11 apex + ~10 supporting). At your current production cadence (~2–5 min per unit), this strand should close in roughly 1.5–2 hours of focused work.

## Working directory

/Users/tyler/Documents/proj rn/codex

## Read first

1. `CURRICULUM_V0_5_PLAN.md` §3 — the Strand B framing, apex unit list, supporting units, and shipped foundations to reuse.
2. `PILOT_PLAN.md` — current shipped count (66 units after Wave 5), v0.x retrospective.
3. `WAVE_3_PLAN.md` and `WAVE_4_PLAN.md` — depth-completion plans (for context on how foundations shipped).
4. `pilot-lessons.md` — consolidated production lessons including the LM editorial pass findings.
5. `UNIT_SPEC.md` — frontmatter, tier markers, citation syntax (note §11 Style: the six Master-prose failure modes).
6. `QUALITY_RUBRIC.md` — the 27-point automated checklist + §M Master prose standard.
7. `CONCEPT_CATALOG.md` — find each concept entry; add parent entries first if missing (e.g., `symplectic-geometry.symplectic-manifold` namespace).
8. One existing shipped unit as reference template — recommended: `content/03-modern-geometry/07-gauge-theory/03.07.05-yang-mills-action.md` (similar physics-flavored, action-functional content) or `content/03-modern-geometry/05-bundles/03.05.07-principal-bundle-connection.md` (similar diffgeo flavor).

## Production queue (Strand B Wave 1 apex)

11 apex units in dependency order. Section `05` is reserved for symplectic geometry. Place units in `content/05-symplectic/<chapter>/<id>-<slug>.md` with chapter directories created as needed.

| Order | Unit ID | Title | Path | Anchor |
|---|---|---|---|---|
| 1 | `05.01.01` | Symplectic vector space | content/05-symplectic/01-symplectic-linear/05.01.01-symplectic-vector-space.md | Cannas da Silva *Lectures on Symplectic Geometry* §1; Arnold *Mathematical Methods of Classical Mechanics* §VIII |
| 2 | `05.01.02` | Symplectic manifold | content/05-symplectic/01-symplectic-linear/05.01.02-symplectic-manifold.md | Cannas da Silva §1–§3; Arnold §44 |
| 3 | `05.02.01` | Hamiltonian vector field | content/05-symplectic/02-hamiltonian/05.02.01-hamiltonian-vector-field.md | Arnold §44; Cannas da Silva §18 |
| 4 | `05.02.02` | Poisson bracket and Poisson manifold | content/05-symplectic/02-hamiltonian/05.02.02-poisson-bracket.md | Cannas da Silva §18; Marsden-Ratiu *Introduction to Mechanics and Symmetry* §10 |
| 5 | `05.03.01` | Coadjoint orbit | content/05-symplectic/03-coadjoint/05.03.01-coadjoint-orbit.md | Kirillov *Lectures on the Orbit Method*; Marsden-Ratiu §14 |
| 6 | `05.04.01` | Moment map | content/05-symplectic/04-moment-reduction/05.04.01-moment-map.md | Cannas da Silva §22; Marsden-Ratiu §11–§12 |
| 7 | `05.04.02` | Marsden-Weinstein symplectic reduction | content/05-symplectic/04-moment-reduction/05.04.02-symplectic-reduction.md | Marsden-Weinstein 1974; Cannas da Silva §23 |
| 8 | `05.05.01` | Lagrangian submanifold | content/05-symplectic/05-lagrangian/05.05.01-lagrangian-submanifold.md | Cannas da Silva §3, §6; Arnold §44C |
| 9 | `05.06.01` | Almost-complex structure on a symplectic manifold | content/05-symplectic/06-almost-complex/05.06.01-almost-complex.md | McDuff-Salamon *Introduction to Symplectic Topology* §2; Cannas da Silva §13 |
| 10 | `05.07.01` | Gromov non-squeezing theorem | content/05-symplectic/07-gromov/05.07.01-non-squeezing.md | McDuff-Salamon §2.4; Gromov, *Pseudo-holomorphic curves in symplectic manifolds* (Inventiones 1985) |
| 11 | `05.08.01` | Arnold conjecture and Floer homology setup | content/05-symplectic/08-floer/05.08.01-arnold-conjecture.md | Audin-Damian *Morse Theory and Floer Homology* §10; Donaldson-Kronheimer §1 |

After the apex queue, produce supporting units identified in `CURRICULUM_V0_5_PLAN.md` §3 (integrable systems, Darboux's theorem, action-angle coordinates, etc.) as a Strand B Wave 2 batch. Aim for 8–10 supporting units.

## Tier policy

All units: produce all three tiers. `tiers_present: [beginner, intermediate, master]`. The Master tier should match LM standard (see prose standard below). Beginner tier is calibrated to Strogatz / 3Blue1Brown.

`pending_prereqs: false` for most units — all the major foundations (smooth manifold, differential forms, Lie group, exterior derivative, integration on manifolds, variational calculus) are already shipped. Use `pending_prereqs: true` only when a unit declares another not-yet-produced Strand B unit.

## Per-unit production protocol

Same as previous batches:

1. Read the unit's anchor reference; identify the canonical Master-tier statement and proof.
2. Draft the unit using the Phase 3.2 template (any `02.11.06-normed-vector-space.md` or `03.05.07-principal-bundle-connection.md` is a good model).
3. Update `CONCEPT_CATALOG.md` — add the new concept entry. Add parent namespace entries if missing (e.g., `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.hamiltonian-system`, `symplectic-geometry.moment-map`).
4. Update `manifests/deps.json` — add to shipped, add edges from this unit's prerequisites.
5. Run `./.venv/bin/python scripts/validate_unit.py <path>` and iterate until 27/27.
6. Append a paragraph to `pilot-lessons.md` per unit on what was non-obvious to produce.
7. After the apex queue is complete, run `./.venv/bin/python scripts/validate_all.py` and confirm green; then `pnpm build` from `tystack/typescript/apps/codex` to confirm rendering.

## Hard conventions

Same as v0.x:

- **Sign convention** for symplectic forms: $\omega(X_H, \cdot) = dH$ (the "geometric" convention). Mathematical / physical literature uses both signs; commit to this one and document it clearly in the formal-definition section of `05.02.01`.
- **Citation syntax**: `[ref: source locator]` for external; `[NN.NN.NN]` for cross-refs to other Codex units. `TODO_REF` placeholder when source not in `reference/`.
- **No emojis anywhere**.
- **Lean status**: Mathlib has `SymplecticForm`, `Symplectic`, partial Hamiltonian-mechanics infrastructure. Use `lean_status: partial` for units where Mathlib has the structure but not the full theorem; `none` for units where Mathlib lacks substantial infrastructure (e.g., Floer homology).

## Master prose standard

The QUALITY_RUBRIC §M six failure modes:

1. No section-level metacommentary at Master tier.
2. No "Counterexamples to common slips" bullet lists at Master tier (encouraged at Intermediate, prohibited at Master).
3. No hedged futures or apologies for omission ("we will see…", "we do not state…").
4. No valedictory closing paragraphs in Historical & philosophical context.
5. No real-time error correction in worked examples.
6. No triplicate emphasis or rhetorical italics.

The validator's prohibited-phrasings filter strips fenced code blocks before scanning, so Lean tactic names like `:= trivial` no longer trip the rubric. Bare prose uses of "trivial" / "trivially" still do — replace with "nonzero" / "immediate" / "direct" as fits the meaning.

## Stop conditions

Stop and report after:

- All 11 apex units validate at 27/27.
- A Wave 2 batch of 8–10 supporting units (your call which to produce; aim for highest-leverage first).
- `validate_all.py` is green across the entire shipped DAG.
- `pnpm build` is clean.

If any genuine blocker surfaces (a Master-tier theorem you can't justify without sources not in `reference/`, a foundational concept that turns out to be missing), report and pause that unit; don't ship a half-quality unit.

Begin with `05.01.01` Symplectic vector space. Read `CURRICULUM_V0_5_PLAN.md` §3 first.

---

*v0.5 Strand B — Symplectic geometry. 11 apex + ~10 supporting = ~21 new units. Concurrent with claude's Strands A, C, D and your Strand E.*
