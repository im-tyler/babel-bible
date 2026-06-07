# Completeness re-audit (round 2) — LeVeque + Süli-Mayers, joined

- **source_books:** `leveque`, `suli-mayers`
- **source_curriculum:** `numerical-analysis`
- **date:** 2026-06-07
- **predecessors:** `leveque.completeness.md`, `suli-mayers.completeness.md` (round 1 — each
  independently proposed the single shared gap `43.10.06`, now SHIPPED)

## RESULT — DRY — 0 new gaps

Round 1 closed the one genuine remaining gap: both books' two-point-BVP chapters
(LeVeque Ch. 2 "Steady States and Boundary Value Problems"; Süli-Mayers Ch. 13)
converged on a **single** unit, shipped as
`content/43-numerical-analysis/10-numerical-odes/43.10.06-two-point-boundary-value-problems.md`.
Verified on disk that 43.10.06 carries BOTH books' distinctive content in one DRY unit:
the **shooting method** + **multiple shooting** + linear-shooting exactness (Süli §13.1-13.2),
and the **finite-difference method** with the tridiagonal/Thomas solve, the $O(h^2)$
consistency-plus-stability convergence theorem, the discrete maximum principle /
M-matrix monotonicity, the sharp $\|A_h^{-1}\|_\infty\le(b-a)^2/8$ Green's-function bound,
**variable coefficients** $(\kappa u')'$, **Neumann/Robin** ghost-points + the half-order
pitfall, and **nonlinear BVPs by Newton** (LeVeque Ch. 2). The Sturm-Liouville / BVP-eigenvalue
analogue is folded in. This unit is the correct convergence point for the two books.

A fresh adversarial sweep of the *rest* of each book's headline-topic list against the
live corpus finds nothing standard, named, and high-value still absent.

## Per-book one-line justification

- **LeVeque** — DRY. Every standard chapter topic is shipped: ODE one-step/LMM/zero-stability/
  absolute-stability/stiffness `43.10.01-05`, two-point BVP `43.10.06`, and elliptic 5-point /
  parabolic method-of-lines / von-Neumann-CFL / hyperbolic upwind-LF-LW with numerical
  diffusion-dispersion / Lax-Richtmyer equivalence `43.11.01-05`. The previously-ruled-out
  clusters (multigrid, finite-volume/TVD-WENO, spectral, RK rooted-tree/B-series,
  Picard-Lindelöf) remain correctly out of scope.

- **Süli-Mayers** — DRY. Every standard chapter topic is shipped: root-finding `43.02.01-03`;
  Lagrange/divided-difference, error/Runge, Hermite-spline, minimax-Chebyshev,
  LS-orthogonal-polynomials `43.08.01-05`; Newton-Cotes-Peano, Euler-Maclaurin-Romberg-adaptive
  (Romberg = the general Richardson tableau), Gauss `43.09.01-03`; ODE-IVP one-step/multistep/
  stiffness `43.10.01-05`; and the Ch. 13 two-point-BVP shooting + finite differences `43.10.06`.
  Conditioning/floating-point and the linear-algebra chapters were ceded to and shipped under
  Trefethen/GVL `43.01`, `43.03-07`. (Páde/continued-fraction rational approximation is not part
  of this introductory text's standard core and is not a gap.)

## Verification evidence

- `43.10.06` present on disk; body grep `shooting|multiple shooting|thomas|sturm|eigenvalue`
  → 27 hits (both methods + the Sturm-Liouville analogue carried in one unit).
- 43.10.* directory = exactly the 6 expected units; 43.11.* = exactly the 5 expected units.
- Süli interpolation/quadrature topics each resolve to a shipped 43.08.*/43.09.* unit
  (Peano kernel, Euler-Maclaurin/Romberg, Gauss, minimax/Chebyshev, divided differences,
  orthogonal polynomials all confirmed present).
- 43.11.04 confirmed carrying numerical diffusion/dispersion (the LeVeque modified-equation /
  group-velocity content).

## RETURN SUMMARY

- **New genuine gaps:** 0 (DRY).
- **Convergence confirmed:** the round-1 shared gap `43.10.06` is shipped and fully closes
  both LeVeque Ch. 2 and Süli-Mayers Ch. 13 in one unit.
- **File:** `plans/expansion/numerical-analysis/_audit/leveque-suli.completeness2.md`
