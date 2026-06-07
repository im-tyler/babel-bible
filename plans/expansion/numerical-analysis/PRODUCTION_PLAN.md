# Spine 8 (numerical-analysis) — collision-checked production plan

First Tier B spine (human-gated; approved for Spine 8 only). ONE new section
`content/43-numerical-analysis` (section `numerical-analysis`, prefix 43, field
`numerical-analysis` — SHARED with the existing `24-numerical-pde` FEEC content, so the
spine unifies with it under one "Numerical Analysis" lens). 42 NEW units across 11 chapters,
8 dependency waves. Trefethen-Bau / Golub-Van Loan / Süli-Mayers / LeVeque.

## Dedup / collision resolution
- NO id collisions — every proposed id is distinct. The four auditors coordinated chapter
  ownership: TB owns the NLA conceptual core (43.01 conditioning/stability, 43.03 GE/Cholesky,
  43.04.01 LS-conditioning, 43.06.01-04 eigenvalue algorithms, 43.07 Krylov); GVL took only
  GVL-SPECIFIC depth in FREE high slots (43.03.08 Bunch-Kaufman, 43.04.08 updating, 43.05.08
  TLS/GSVD, 43.06.10 QZ, 43.06.11 matrix-exp); Süli owns 43.02 root-finding, 43.08 interpolation/
  approximation, 43.09 quadrature; LeVeque owns 43.10 ODE integrators + 43.11 finite-difference PDE.
- The semantic overlap 43.10.01 (elementary RK one-step) was CEDED by Süli to LeVeque, who folds
  the intro construction into the stability-theory chapter. Single unit, no duplication.
- DEEP CROSS-SECTION COVERAGE already in the corpus (cross-ref, do NOT re-prove): SVD existence +
  Eckart-Young-Mirsky + Moore-Penrose pseudoinverse + Golub-Kahan all PROVEN in `01.01.12`; QR
  existence + modified Gram-Schmidt (Björck backward error) + Householder + Givens all in `01.01.09`;
  Hermitian eigenvalue perturbation (Weyl/Cauchy interlacing/Rayleigh) in `01.01.14`. Hence 43.05
  yields only the GVL TLS/GSVD gap and 43.04 only LS-conditioning + updating. Pure-analysis
  underpinnings cross-ref'd not reproved: Banach contraction `02.01.05`, Taylor-Lagrange `02.05.02/05`,
  inverse-function `02.05.04`, trig Weierstrass/Fejér `02.10.01`, matrix-exponential/linear-ODE
  `02.06.03`, abstract orthogonal polynomials `37.08.*`/`12.05.02`, regression LS `26.06.01`.
- FD-vs-FEM SEAM (43.11): the existing `24-numerical-pde` is finite-ELEMENT / FEEC (Galerkin,
  Arnold-Falk-Winther); LeVeque's 43.11 is finite-DIFFERENCE (pointwise stencils) — distinct method
  family, cross-ref'd. Continuous PDE theory (`02.13/16/17/18`) is the analytic side; 43.11 covers its
  numerical discretization + convergence, cross-ref not reprove.

## Master unit list (42 units, 11 chapters)
### 43.01 floating-point-conditioning [TB]: 01 floating-point/IEEE model · 02 conditioning & condition numbers · 03 backward stability & backward-error analysis
### 43.02 nonlinear-equations [Süli]: 01 bisection & the scalar root problem · 02 fixed-point iteration/contraction/order · 03 Newton & secant (super/quadratic convergence)
### 43.03 direct-linear-solvers [TB + GVL]: 01 GE/LU & its stability · 02 Cholesky/SPD solve · 03 perturbation & a-posteriori error for Ax=b · 08 Bunch-Kaufman symmetric-indefinite LDLᵀ [GVL]
### 43.04 least-squares-qr [TB + GVL]: 01 LS — normal-equations vs QR vs SVD conditioning · 08 updating/downdating QR & Cholesky [GVL]
### 43.05 svd-low-rank [GVL]: 08 total least squares & the generalised SVD [GVL]   (SVD core already proven in 01.01.12)
### 43.06 eigenvalue-algorithms [TB + GVL]: 01 power/inverse/Rayleigh-quotient iteration · 02 Hessenberg/tridiagonal reduction · 03 the QR algorithm with shifts · 04 Bauer-Fike & eigenvalue conditioning · 10 generalised eigenproblem Ax=λBx & QZ [GVL] · 11 matrix functions/the matrix exponential [GVL]
### 43.07 iterative-krylov-methods [TB]: 01 stationary iterations (Jacobi/GS/SOR) · 02 Arnoldi & Lanczos · 03 GMRES · 04 conjugate gradients · 05 preconditioning
### 43.08 interpolation-approximation [Süli]: 01 Lagrange interpolation (existence/uniqueness) · 02 interpolation error & the Runge phenomenon · 03 Hermite & cubic-spline interpolation · 04 minimax/Chebyshev best approximation · 05 least-squares approximation & orthogonal polynomials
### 43.09 numerical-quadrature [Süli]: 01 Newton-Cotes & the Peano kernel · 02 composite/Euler-Maclaurin/Romberg/adaptive · 03 Gauss quadrature via orthogonal polynomials
### 43.10 numerical-odes [LeVeque (+Süli intro)]: 01 one-step methods (Euler/trapezoidal/RK), consistency & order · 02 linear multistep (Adams/BDF) via characteristic polynomials · 03 zero-stability, root condition & Dahlquist equivalence · 04 absolute stability, stability regions, the test equation · 05 stiffness, A-stability & the Dahlquist second barrier
### 43.11 finite-difference-pdes [LeVeque]: 01 elliptic BVP — the 5-point Laplacian & convergence · 02 method of lines & parabolic stability (heat eqn) · 03 von Neumann analysis & the CFL condition · 04 hyperbolic FD (upwind/Lax-Friedrichs/Lax-Wendroff), numerical diffusion/dispersion · 05 the Lax equivalence theorem

## Wave schedule (dependency levels; in-spine frontmatter prereqs land in an earlier wave; same-wave co-deps → Connections per the standing rule)
- WAVE 1 (roots): 43.01.01, 43.01.02, 43.02.01, 43.06.01, 43.08.01, 43.10.01
- WAVE 2 (L1): 43.01.03, 43.02.02, 43.06.02, 43.06.04, 43.08.02, 43.08.05, 43.10.02
- WAVE 3 (L2): 43.03.01, 43.02.03, 43.06.03, 43.08.03, 43.08.04, 43.09.01, 43.10.03
- WAVE 4 (L3): 43.03.02, 43.03.03, 43.04.01, 43.07.01, 43.11.01, 43.10.04, 43.09.02
- WAVE 5 (L4): 43.06.10, 43.06.11, 43.09.03, 43.03.08, 43.07.02, 43.10.05
- WAVE 6 (L5): 43.04.08, 43.05.08, 43.07.03, 43.07.04, 43.11.02
- WAVE 7 (L6): 43.07.05, 43.11.03
- WAVE 8 (L7 tail): 43.11.04, 43.11.05

## Status
- [ ] W1  [ ] W2  [ ] W3  [ ] W4  [ ] W5  [ ] W6  [ ] W7  [ ] W8  [ ] COMPLETENESS (loop-until-dry)
