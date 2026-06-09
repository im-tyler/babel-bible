# Section 09 — Classical Mechanics · PRODUCTION PLAN (collision-checked)

Section `content/09-classical-mech` (prefix 09, EXISTING section, spine id `classical-mech`).
Field: `classical-physics` (shared with EM/SR, order 20, domain `physics`).
Source books: Taylor 2005, Goldstein-Poole-Safko 2002, Landau-Lifshitz-Mechanics 1976.

## Existing units (do NOT duplicate)

| Chapter | Units on disk |
|---|---|
| 01-newtonian | 09.01.01–09.01.04 (kinematics, Newton's laws, conservation laws, two-body/Kepler) |
| 02-lagrangian | 09.02.01–09.02.02 (action principle, Euler-Lagrange) |
| 03-symmetries-noether | 09.03.01, 09.03.03 (Noether, quantum free particle as E(3) rep) |
| 04-hamiltonian | 09.04.01–09.04.02, 09.04.07 (Legendre transform, Hamilton's equations, squeezed states) |
| 05-canonical | 09.05.01–09.05.02 (canonical transformations, Hamilton-Jacobi) |
| 06-integrable | 09.06.01 (action-angle variables) |
| 07-continuum | 09.07.01 (continuum mechanics / field theory) |
| 08-chaos | 09.08.01 (KAM theorem and chaos) |

No SETUP required: section, field_map entry, validate_unit prefix, sections.ts, and lens already exist.

## Collision check — existing cross-refs, not redos

- `09.02.01` action principle — Lagrangian is defined here; all ch02 new units build on it
- `09.04.07` squeezed states / complex structure — cross-ref from 09.04.05 (symplectic structure); do not re-introduce quantization
- `44.07.01` Pontryagin maximum principle — cross-ref from 09.04.09 (optimal control angle) if needed
- `44.08.01-05` dynamic programming / LQG — cross-ref from 09.08 (Hamilton-Jacobi as HJB equation)
- `38.01-07` dynamics section — KAM, ergodic, symbolic dynamics covered there; cross-ref 09.08.01
- `02.12.*` ODE section — existence/uniqueness of ODE solutions; cross-ref from 09.01
- `37.05.*` Markov chains — NOT classical mechanics; avoid overlap
- `11.*` stat-mech-physics — thermodynamics cross-refs (09 provides the Hamiltonian formalism)

## Peer units for quality

Dispatch producers with:
- **Physics near-peer**: `content/09-classical-mech/04-hamiltonian/09.04.01-legendre-transform-lagrangian-to-hamiltonian.md`
- **Applied math peer**: `content/44-optimization-control/03-unconstrained-optimization/44.03.01-gradient-descent-convergence-rates.md`

Both ~6500–7500 words, 27/27 passing. For physics units: lean_status is always `none`; the
lean_mathlib_gap note should explain why the physical principle (e.g., Galilean invariance,
D'Alembert principle) resists formalization and cite what Mathlib has (e.g., symplectic
geometry in Mathlib). Human review is the correctness gate for physics content.

## Unit list

### ch01 newtonian (gap-fill, existing 01–04)

`09.01.05` Newton's law of gravitation: gravitational field, potential, and shell theorem
`09.01.06` Friction, normal forces, and constraints: holonomic and non-holonomic systems
`09.01.07` Non-inertial frames: centrifugal force, Coriolis force, and Foucault's pendulum
`09.01.08` Variable-mass systems: the rocket equation (Tsiolkovsky) and momentum transport

### ch02 lagrangian (gap-fill, existing 01–02)

`09.02.03` Constrained Lagrangian systems: Lagrange multipliers and D'Alembert's principle
`09.02.04` Small oscillations: normal modes and the eigenvalue problem for coupled oscillators
`09.02.05` Lagrangian perturbation theory: secular terms and the method of multiple scales
`09.02.06` Field Lagrangians and the continuum limit: elastic media and the wave equation as a field theory

### ch03 symmetries-noether (gap-fill, existing 01, 03)

`09.03.02` Cyclic coordinates, ignorable degrees of freedom, and Routh's procedure
`09.03.04` Discrete symmetries in mechanics: parity, time-reversal, and conservation laws
`09.03.05` Galilean symmetry group and the ten integrals of motion

### ch04 hamiltonian (gap-fill, existing 01–02, 07)

`09.04.03` Poisson brackets: structure, Jacobi identity, and bracket algebra of conserved quantities
`09.04.04` Liouville's theorem and the incompressibility of phase-space flow
`09.04.05` Symplectic structure, the symplectic form, and Darboux's theorem
`09.04.06` Hamiltonian perturbation theory: averaging and adiabatic invariants
`09.04.08` Classical spin: the SO(3) Poisson bracket and Euler's equations for rigid body rotation
`09.04.09` The Hamilton-Jacobi equation as the eikonal limit: WKB and geometric optics analogy

### ch05 canonical (gap-fill, existing 01–02)

`09.05.03` Generating functions for canonical transformations: four types (F₁, F₂, F₃, F₄)
`09.05.04` Point transformations and their canonical lifts
`09.05.05` The symplectic group Sp(2n, ℝ) and its role in linear canonical transformations

### ch06 integrable (gap-fill, existing 01)

`09.06.02` The Liouville-Arnold theorem: integrability and the existence of action-angle variables
`09.06.03` Completely integrable systems: the Toda lattice and the Kepler problem revisited
`09.06.04` Lax pairs and the inverse scattering method: solitons in classical mechanics

### ch07 continuum (gap-fill, existing 01)

`09.07.02` Elastic waves in solids: longitudinal and transverse modes, the Cauchy stress tensor
`09.07.03` Ideal fluid mechanics: Euler's equations, Bernoulli's equation, and vorticity
`09.07.04` Viscous flow: the Navier-Stokes equations, Reynolds number, and laminar/turbulent transition

### ch08 chaos (gap-fill, existing 01)

`09.08.02` Phase-space structure of chaos: Poincaré sections, homoclinic tangles, and horseshoe maps
`09.08.03` Lyapunov exponents: definition, computation, and the chaotic double pendulum
`09.08.04` Period-doubling route to chaos: the logistic map and Feigenbaum universality
`09.08.05` Strange attractors: the Lorenz system, fractal dimension, and sensitive dependence

**Total new units: 35**  (section grows from 16 → 51)

## Dependency waves

- **W1 (9)**: 09.01.05, 09.01.06, 09.02.03, 09.02.06, 09.03.02, 09.03.04, 09.04.03, 09.04.05, 09.06.02
  *(foundations that need only the existing Lagrangian/Hamiltonian base)*
- **W2 (9)**: 09.01.07, 09.01.08, 09.02.04, 09.03.05, 09.04.04, 09.04.06, 09.05.03, 09.05.04, 09.06.03
  *(needs W1 Poisson brackets, normal modes base, Noether symmetry)*
- **W3 (8)**: 09.02.05, 09.04.08, 09.04.09, 09.05.05, 09.06.04, 09.07.02, 09.07.03, 09.08.02
  *(needs perturbation theory, symplectic structure, integrability)*
- **W4 (5)**: 09.03.05, 09.07.04, 09.08.03, 09.08.04, 09.08.05
  *(needs chaos foundations, fluid mechanics base, Lyapunov)*
  Note: 09.03.05 can be produced in W1 if producers treat it as independent; moved to W4 only if Galilean group needs 09.04.03 Poisson brackets.

## Prereq map (verified cross-refs)

- Newton/Lagrange `09.01.01`, `09.01.02`, `09.02.01`, `09.02.02` — always available
- Hamiltonian base `09.04.01`, `09.04.02` — for ch04 gap-fills
- ODE theory `02.12.01` (existence/uniqueness)
- Linear algebra `01.01.01` (eigenvalue problem for normal modes)
- Variational calculus `09.02.01` (action principle, for ch02 gap-fills)
- Dynamics section `38.07.*` (KAM, Liouville-Arnold proofs; cross-ref, do not re-prove)

## Source_books frontmatter values

Every unit stamps `source_books` with one or more of:
- `taylor-2005` (Taylor — Classical Mechanics)
- `goldstein-2002` (Goldstein, Poole & Safko — Classical Mechanics, 3rd ed.)
- `landau-lifshitz-mechanics` (Landau & Lifshitz — Mechanics, 3rd ed.)

AND stamps `source_curriculum: classical-mech`.

## Critical notes for producers

1. **lean_status: none** on every unit. The lean_mathlib_gap note should be ≥30 words and substantive:
   reference what Mathlib has (symplectic forms in `Mathlib.Geometry.Symplectic`, ODE existence in
   `Mathlib.Analysis.ODE`) and explain what gap prevents full formalization of the physical content.

2. **Prose-first contract**: physics units justify mechanisms and use evidence. The "Key theorem"
   section is still required but may be a "Key result" — a physical theorem with a derivation,
   not necessarily a Lean-formalizable mathematical proof. The Bridge and Synthesis paragraphs
   must still hit the continuity patterns.

3. **No quantum mechanics in classical mechanics units**. The prefix-09 spine is purely classical.
   Mention quantum correspondence only in the Bridge/Synthesis context of future connections.
   The squeezed-states unit 09.04.07 is an existing exception; do not extend this pattern.

4. **Continuum and fluid units (09.07)** cross-ref the numerical PDE section (24.*) for computation
   and the functional analysis section (02.*) for the Sobolev space treatment of PDE well-posedness.
   The 09.07 units give the physical derivation; well-posedness proofs live elsewhere.
