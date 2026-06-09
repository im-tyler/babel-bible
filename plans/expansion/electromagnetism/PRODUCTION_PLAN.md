# Section 10 — Electromagnetism & Special Relativity · PRODUCTION PLAN (collision-checked)

Section `content/10-em-sr` (prefix 10, EXISTING section, spine id `em-sr`).
Field: `classical-physics` (shared with classical-mech, order 20, domain `physics`).
Source books: Griffiths 2017 (undergrad EM), Jackson 1999 (grad EM), Purcell-Morin 2013.

## Existing units (do NOT duplicate)

| Chapter | Units on disk |
|---|---|
| 01-electrostatics | 10.01.01 Coulomb/Gauss, 10.01.02 Laplace/BVP, 10.01.03 conductors, 10.01.04 dielectrics, 10.01.05 multipole |
| 02-magnetostatics | 10.02.01 Biot-Savart/Ampere |
| 03-electrodynamics | 10.03.01 Faraday, 10.03.03 Poynting/Maxwell stress |
| 04-maxwell-fields | 10.04.01 Maxwell in differential forms, 10.04.02 EM waves |
| 05-special-relativity | 10.05.01 SR postulates/Lorentz, 10.05.02 relativistic kinematics, 10.05.03 four-vectors |
| 06-covariant-em | 10.06.01 Faraday tensor |
| 07-radiation | 10.07.01 Larmor formula |

No SETUP required: section, field_map, validate_unit, sections.ts, and lens already exist.

## Collision check

- `10.01.02` Laplace equation / BVP — covered; new unit 10.01.06 goes to Green's functions/method of images
- `13.02.*` GR manifold formalism — differential forms treatment of Maxwell already in 10.04.01; cross-ref the GR covariant divergence
- `09.04.05` symplectic structure — Poisson bracket of EM field can cross-ref here
- `24.*` numerical PDE — finite-difference / finite-element solution of Laplace equation; cross-ref, not redo
- `02.13-02.18` PDE spine — Sobolev-space well-posedness of Maxwell; cross-ref from 10.04.03
- `40.04.*` graph theory — transmission lines as networks cross-ref for 10.04.04

## Peer units for quality

- **Primary peer**: `content/10-em-sr/01-electrostatics/10.01.02-laplace-equation-and-boundary-value-problems.md`
- **Derivation-style peer**: `content/09-classical-mech/04-hamiltonian/09.04.01-legendre-transform-lagrangian-to-hamiltonian.md`

`lean_status: none` on all units; lean_mathlib_gap ≥30 words (cite what Mathlib has for
`MeasureTheory.integral`, differential forms, and what is missing for physical boundary conditions).

## Unit list

### ch02 magnetostatics (gap-fill, existing 01)

`10.02.02` Magnetic vector potential, gauge freedom, and the Coulomb gauge
`10.02.03` Magnetization, H-field, and magnetic materials (diamagnets, paramagnets, ferromagnets)
`10.02.04` Boundary conditions at interfaces: normal and tangential components of E, D, B, H
`10.02.05` Magnetic scalar potential and the demagnetization factor

### ch03 electrodynamics (gap-fill, existing 01, 03)

`10.03.02` Faraday's law in integral and differential form: mutual and self-inductance, energy in inductors
`10.03.04` Displacement current, the continuity equation, and the complete Maxwell equations in matter
`10.03.05` Energy and momentum in the electromagnetic field: the Poynting vector and radiation pressure

### ch04 maxwell-fields (gap-fill, existing 01–02)

`10.04.03` Plane waves in matter: dispersion relations, skin depth, and the complex refractive index
`10.04.04` Waveguides and transmission lines: TE, TM, TEM modes and the cutoff frequency
`10.04.05` Cavities and resonant modes: the quality factor Q and normal-mode expansion

### ch06 covariant-em (gap-fill, existing 01)

`10.06.02` The four-current, charge-current density, and covariant continuity
`10.06.03` The electromagnetic stress-energy tensor Tᵘᵛ and covariant energy-momentum conservation
`10.06.04` Transformation of E and B fields under Lorentz boosts

### ch07 radiation (gap-fill, existing 01)

`10.07.02` Electric dipole radiation: angular distribution, polarization, and total radiated power
`10.07.03` Magnetic dipole and electric quadrupole radiation: multipole expansion of radiation fields
`10.07.04` Radiation reaction: the Abraham-Lorentz force and the self-energy problem
`10.07.05` Synchrotron radiation: relativistic circular motion and the 1/γ⁴ power formula
`10.07.06` Scattering of radiation: Thomson scattering, Rayleigh scattering, and the optical theorem

### ch08 advanced-electrodynamics (NEW chapter — these topics have no current chapter home)

`10.08.01` Green's function method for the scalar and vector potentials: retarded, advanced, and Feynman propagators
`10.08.02` Jefimenko's equations: exact retarded solutions for E and B given arbitrary sources
`10.08.03` Diffraction: Kirchhoff integral, Fraunhofer and Fresnel regimes
`10.08.04` Geometrical optics as the short-wavelength limit: eikonal equation and ray tracing
`10.08.05` Macroscopic Maxwell equations: linear response, Kramers-Kronig relations, and causality

**Total new units: 22**  (section grows from 15 → 37)

## Dependency waves

- **W1 (8)**: 10.02.02, 10.02.04, 10.03.02, 10.03.04, 10.03.05, 10.06.02, 10.07.02, 10.08.01
  *(each builds only on existing electrostatics/magnetostatics/Faraday base)*
- **W2 (7)**: 10.02.03, 10.02.05, 10.03.05, 10.04.03, 10.06.03, 10.06.04, 10.07.03
  *(needs W1 Ampere/Faraday full set and B-field boundary conditions)*
- **W3 (7)**: 10.04.04, 10.04.05, 10.07.04, 10.07.05, 10.07.06, 10.08.02, 10.08.04
  *(needs plane waves, covariant stress tensor, multipole)*

## Prereq map

- Electrostatics `10.01.01–10.01.05` — always available as prereqs within this section
- Magnetostatics `10.02.01` — for ch02 gap-fills
- Maxwell/waves `10.04.01`, `10.04.02` — for advanced EM units
- SR `10.05.01–10.05.03` — for covariant units
- Faraday tensor `10.06.01` — for 10.06.02–04
- PDE `02.13.01` (classical Sobolev), `02.17.01` (wave equation); cross-ref only

## Source_books frontmatter values

- `griffiths-em-2017` (Griffiths — Introduction to Electrodynamics, 4th ed.)
- `jackson-em-1999` (Jackson — Classical Electrodynamics, 3rd ed.)
- `purcell-morin-2013` (Purcell & Morin — Electricity and Magnetism, 3rd ed.)

AND stamps `source_curriculum: em-sr`.

## Critical notes for producers

1. **Graduate vs. undergrad level**: ch01–05 are Griffiths-level (undergrad); ch06–08 are
   Jackson-level (graduate). Intermediate+ sections should escalate accordingly. The tier_anchors
   must reflect this split: Griffiths for beginner/intermediate, Jackson for master.

2. **Units 10.08.03–10.08.05** are physics optics / linear response, NOT quantum optics. Do not
   reference quantum field theory. The Kramers-Kronig unit cross-refs `02.10.*` (complex analysis)
   for the contour integral derivation.

3. **Gauge freedom** (10.02.02) must mention both Coulomb and Lorenz gauges, state which is
   convenient for statics vs. radiation, and cross-ref `10.06.01` (Faraday tensor in covariant form).
