# Section 11 — Statistical Mechanics · PRODUCTION PLAN (collision-checked)

Section `content/11-stat-mech-physics` (prefix 11, EXISTING section, spine id `stat-mech-physics`).
Field: `statistical-physics` (order 22, domain `physics`).
Source books: Reif 1965, Kittel-Kroemer 1980, Pathria-Beale 2011, Callen 1985, Kardar 2007.

## Existing units (do NOT duplicate)

| Chapter | Units on disk |
|---|---|
| 01-thermodynamics | 11.01.01 first/second laws, 11.01.02 thermodynamic potentials/Legendre |
| 02-kinetic-theory | 11.02.01 Maxwell-Boltzmann distribution |
| 03-ensembles | 11.03.01 microcanonical ensemble |
| 04-partition-functions | 11.04.01 canonical ensemble, 11.04.02 Souriau-Gibbs state (symplectic) |
| 05-quantum-stats | 11.05.01–11.05.06 (Bose-Einstein, Fermi-Dirac, Planck/Stefan-Boltzmann, BEC, Fermi gas, Debye) |
| 06-phase-transitions | 11.06.01 Ising model / phase transitions |
| 07-rg | 11.07.01 critical phenomena / renormalization group |

No SETUP required: section already exists.

## Collision check

- `11.04.02` Souriau-Gibbs state — symplectic/geometric formulation; cross-ref from 11.03.02 (grand canonical) since both use geometric language
- `38.04.*` ergodic theorems (dynamics spine) — foundational justification for ensembles; cross-ref 38.04.01–02 from ensemble units; do not re-prove ergodic theorem
- `44.07.*` optimal control / Hamilton-Jacobi — cross-ref only if discussing entropy production or minimum entropy
- `02.16.*` Sobolev / weak solutions — Boltzmann equation PDE treatment; cross-ref for 11.02.03
- `37.01–37.05` probability — probability distributions underlie all ensembles; cross-ref, do not re-expose

## Peer units for quality

- **Primary peer**: `content/11-stat-mech-physics/05-quantum-stats/11.05.02-fermi-dirac-distribution-and-electron-gas.md`
- **Derivation-style peer**: `content/09-classical-mech/04-hamiltonian/09.04.04-liouville-theorem.md` (once produced)
  Until 09.04.04 exists, use `content/37-probability/01-measure-foundations/37.01.01-probability-space-sigma-algebra-measure.md`

`lean_status: none` on all units; lean_mathlib_gap ≥30 words.

## Unit list

### ch01 thermodynamics (gap-fill, existing 01–02)

`11.01.03` Third law of thermodynamics: Nernst heat theorem, absolute entropy, and zero-point entropy
`11.01.04` Thermodynamic stability: convexity, Le Chatelier's principle, and the spinodal curve
`11.01.05` Equations of state: virial expansion, van der Waals gas, and the law of corresponding states
`11.01.06` Thermodynamic cycles: Carnot efficiency, Otto and Diesel cycles, and entropy production

### ch02 kinetic-theory (gap-fill, existing 01)

`11.02.02` Transport phenomena: diffusion, viscosity, thermal conductivity, and the mean free path
`11.02.03` The Boltzmann transport equation: H-theorem, the approach to equilibrium, and the BGK approximation
`11.02.04` Fluctuations and noise: the fluctuation-dissipation theorem and Nyquist's formula

### ch03 ensembles (gap-fill, existing 01)

`11.03.02` Grand canonical ensemble: chemical potential, fugacity, and variable particle number
`11.03.03` Equivalence of ensembles in the thermodynamic limit: Legendre structure and equivalence conditions
`11.03.04` Isothermal-isobaric (NPT) ensemble: Gibbs free energy as the natural potential

### ch04 partition-functions (gap-fill, existing 01–02)

`11.04.03` Factorization of the partition function: independent subsystems and the grand potential
`11.04.04` Classical ideal gas partition function: Sackur-Tetrode entropy and the Gibbs paradox
`11.04.05` Harmonic oscillator in a thermal bath: heat capacity and the Einstein solid

### ch06 phase-transitions (gap-fill, existing 01)

`11.06.02` Mean-field theory of phase transitions: the van der Waals and Curie-Weiss models
`11.06.03` Landau theory: order parameter, symmetry breaking, and the free energy expansion
`11.06.04` Fluctuations beyond mean field: Ginzburg criterion and the Ginzburg-Landau theory
`11.06.05` The transfer matrix method: exact solution of the 1D Ising model
`11.06.06` Kosterlitz-Thouless transition: topological phase transitions in 2D systems

### ch07 renormalization-group (gap-fill, existing 01)

`11.07.02` Block-spin renormalization: Wilson's real-space RG and fixed points
`11.07.03` The epsilon expansion: RG flows near four dimensions and critical exponents
`11.07.04` Universality classes: classification of critical behavior and the scaling hypothesis
`11.07.05` Conformal field theory basics: scale invariance at criticality and the central charge

**Total new units: 22**  (section grows from 14 → 36)

## Dependency waves

- **W1 (8)**: 11.01.03, 11.01.05, 11.02.02, 11.03.02, 11.04.03, 11.04.04, 11.06.02, 11.07.02
  *(directly extends existing thermodynamics/kinetic/ensemble foundations)*
- **W2 (7)**: 11.01.04, 11.01.06, 11.02.03, 11.03.03, 11.04.05, 11.06.03, 11.07.03
  *(needs W1 grand canonical, transport theory, partition function factorization)*
- **W3 (7)**: 11.02.04, 11.03.04, 11.06.04, 11.06.05, 11.07.04, 11.07.05, (11.01.06 may move here)
  *(needs fluctuation-dissipation, Landau theory, block-spin RG)*

## Prereq map

- Thermodynamics `11.01.01`, `11.01.02` — available
- Microcanonical `11.03.01` — for grand canonical unit
- Canonical `11.04.01` — for partition function extensions
- Quantum statistics `11.05.01`, `11.05.02` — for Fermi/Bose chemistry potential
- Ising model `11.06.01` — for phase transition extensions
- RG `11.07.01` — for advanced RG units
- Probability `37.01.01` (measure theory), `37.02.01` (LLN for ergodic)
- Complex analysis `02.09.*` (contour integrals in partition functions)

## Source_books frontmatter values

- `reif-1965` (Reif — Fundamentals of Statistical and Thermal Physics)
- `kittel-kroemer-1980` (Kittel & Kroemer — Thermal Physics, 2nd ed.)
- `pathria-beale-2011` (Pathria & Beale — Statistical Mechanics, 3rd ed.)
- `callen-1985` (Callen — Thermodynamics and an Introduction to Thermostatistics, 2nd ed.)
- `kardar-2007` (Kardar — Statistical Physics of Particles)

AND stamps `source_curriculum: stat-mech-physics`.

## Critical notes for producers

1. **Thermodynamic vs. statistical mechanics framing**: ch01 units (11.01.03–11.01.06) are
   thermodynamic — they derive results from the laws without appeal to microscopic statistics.
   ch03–04 units use the statistical (Boltzmann/Gibbs) framework. The bridge between them is
   the equivalence of ensembles (11.03.03).

2. **RG units (11.07.02–11.07.05)** cross-ref the quantum field theory spine (08.*) for the QFT
   perspective on RG. The 11.07 units give the condensed-matter / statistical mechanics
   interpretation; the QFT interpretation is in 08.*.

3. **BEC** is already in 11.05.04; 11.03.02 (grand canonical) provides the chemical-potential
   formalism used in that analysis. Producers of ch03 units should cross-ref 11.05.04.

4. **Conformal field theory unit 11.07.05** is a physics-level introduction (central charge,
   Virasoro algebra idea) not a math-rigorous treatment. Cross-ref 39.* (operator algebras) for
   the C*-algebra formulation.
