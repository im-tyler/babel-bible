# Spine 2 (pde-harmonic) — collision-checked production plan

EXTENDS `content/02-analysis` (section `analysis`, field `analysis`; `source_curriculum: pde-harmonic`).
36 units across 6 chapters (02.16-02.21), produced in 6 dependency-sorted level-waves (no
intra-level deps → every frontmatter prereq is on disk). Peers: `02.13.03` (heat eq, deep PDE
unit) + chapter-specific shipped siblings; `02.07.06` (Lp), `02.10.04` (Fourier), `02.14.02` (psido).

## Dedup / collision resolution
- 02.17 elliptic-regularity: GT owns the 8-unit chain; Evans' max-principle + Schauder/Lp/DGM
  proposals DROPPED (subsumed by GT); Evans' distinct H^2/energy-method regularity KEPT (02.17.01).
- 02.19: Stein owns all 5; Stein-Shakarchi's HL-maximal (Gap1) + CZ (Gap2) DROPPED as dups.
- 02.20: Stein-Shakarchi owns all 5; Stein's g-function (its 02.20.01) MERGED into 02.20.03.
- 02.16 (Evans, 5), 02.18 (Evans, 6), 02.21 (Tao, 6): no cross-book collisions.

## Master unit list (id → title → book)
02.16 sobolev-weak-solutions (Evans):
- 02.16.01 Sobolev inequalities (Gagliardo-Nirenberg-Sobolev, Morrey)
- 02.16.02 Trace and extension theorems
- 02.16.03 Rellich-Kondrachov compactness & Poincaré inequalities
- 02.16.04 Lax-Milgram & weak solutions of elliptic BVPs
- 02.16.05 Fredholm alternative & elliptic eigenvalues
02.17 elliptic-regularity (Evans 01; GT 02-09):
- 02.17.01 H^2/H^k regularity of weak solutions (energy/difference-quotient) [Evans]
- 02.17.02 Maximum principles for general elliptic operators (weak/strong/Hopf) [GT]
- 02.17.03 Alexandrov-Bakelman-Pucci estimate [GT]
- 02.17.04 Schauder C^{2,alpha} estimates [GT]
- 02.17.05 Dirichlet problem: method of continuity [GT]
- 02.17.06 Lp (Calderon-Zygmund) W^{2,p} estimates for elliptic eqns [GT, cites 02.19.04]
- 02.17.07 De Giorgi-Nash-Moser: Holder continuity of weak solutions [GT]
- 02.17.08 Harnack inequality (Moser & Krylov-Safonov) [GT]
- 02.17.09 Quasilinear elliptic equations (Leray-Schauder) [GT]
02.18 parabolic-hyperbolic (Evans):
- 02.18.01 Galerkin existence for parabolic equations
- 02.18.02 Galerkin existence for hyperbolic equations
- 02.18.03 Hille-Yosida / C0-semigroups
- 02.18.04 Direct method of the calculus of variations
- 02.18.05 Viscosity solutions of Hamilton-Jacobi
- 02.18.06 Scalar conservation laws & entropy solutions
02.19 calderon-zygmund-singular-integrals (Stein):
- 02.19.01 Hardy-Littlewood maximal function & Vitali covering
- 02.19.02 Calderon-Zygmund decomposition
- 02.19.03 CZ singular integral operators: Lp boundedness
- 02.19.04 Riesz transforms
- 02.19.05 Riesz/Bessel potentials, HLS fractional integration
02.20 littlewood-paley-interpolation (Stein-Shakarchi):
- 02.20.01 BMO and John-Nirenberg
- 02.20.02 Hardy spaces H^p & atomic decomposition
- 02.20.03 Littlewood-Paley theory / square function (+Stein g-function)
- 02.20.04 Fourier multipliers / Hormander-Mikhlin
- 02.20.05 Oscillatory integrals / van der Corput / stationary phase
02.21 dispersive-strichartz (Tao):
- 02.21.01 Dispersive decay estimates (Schrodinger/wave propagators)
- 02.21.02 Strichartz estimates via TT*
- 02.21.03 Local well-posedness of semilinear NLS/NLW
- 02.21.04 Conservation laws & global well-posedness; energy-critical
- 02.21.05 Bourgain X^{s,b} spaces & low-regularity LWP
- 02.21.06 Virial/blowup & soliton-stability outlook

## Wave schedule (dependency levels; all prereqs land on disk before the wave that needs them)
- WAVE 1 (L0): 02.16.01, 02.17.02, 02.18.03, 02.19.01, 02.20.05, 02.21.01
- WAVE 2 (L1): 02.16.02, 02.17.03, 02.17.04, 02.17.07, 02.19.02, 02.19.05
- WAVE 3 (L2): 02.16.03, 02.17.05, 02.17.08, 02.19.03, 02.20.01, 02.21.02
- WAVE 4 (L3): 02.16.04, 02.17.09, 02.18.04, 02.19.04, 02.20.02, 02.20.03, 02.21.03
- WAVE 5 (L4): 02.16.05, 02.17.01, 02.17.06, 02.18.01, 02.18.05, 02.20.04, 02.21.04, 02.21.05
- WAVE 6 (L5): 02.18.02, 02.18.06, 02.21.06

## Status
- [x] W1  [x] W2  [x] W3  [x] W4  [x] W5  [x] W6  [x] COMPLETENESS (2 rounds, converged)
- SPINE 2 COMPLETE: 37 units (36 + 1 completeness 02.13.06 Cauchy-Kovalevskaya/Holmgren). 0 dangling.
