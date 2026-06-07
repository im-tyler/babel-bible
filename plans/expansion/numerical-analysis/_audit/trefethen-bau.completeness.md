# Completeness re-audit: Trefethen & Bau — *Numerical Linear Algebra*

`source_book: trefethen-bau`
`source_curriculum: numerical-analysis`

**Result: DRY — 0 new gaps.**

The original `trefethen-bau.gaps.md` proposed 16 NLA-core units (43.01.01-03, 43.03.01-03,
43.04.01, 43.06.01-04, 43.07.01-05); all 16 have SHIPPED, and the wider Spine-8 plan (42 units)
plus the cross-section LA core (01.01.09/12/14) and the existing 24-numerical-pde now cover every
headline lecture of Trefethen-Bau. Each of the book's 40 lectures was reduced to its theorem-level
payload and verified against the live corpus by filename + body grep. No standard, named, high-value
Trefethen-Bau result remains without a home unit.

## Book-area coverage map (verified)

- **Lectures 1-3 (matrix-vector products, orthogonal vectors/matrices, vector & matrix norms,
  operator/Frobenius norm, unitary invariance, condition number)** — proven in `01.01.12` (operator
  & Frobenius norm, $\|UAV^*\|=\|A\|$, $\kappa=\sigma_1/\sigma_r$) and `01.01.10` (adjoint/isometry);
  conditioning theory re-stated in `43.01.02`. COVERED.
- **Lectures 4-5 (SVD, Eckart-Young-Mirsky, low-rank)** — `01.01.12` states+proves. COVERED
  (already logged in the original audit).
- **Lectures 6-10 (projectors, QR, Gram-Schmidt, MGS+Björck, Householder, Givens)** — `01.01.09`
  states+proves. COVERED.
- **Lectures 11-15 (least squares / normal equations / pseudoinverse; conditioning; floating point;
  stability; backward error)** — `01.01.12` (pseudoinverse, normal equations) + `43.04.01` (LS
  algorithm-conditioning comparison) + `43.01.01` (floating point/IEEE) + `43.01.02` (conditioning) +
  `43.01.03` (backward stability). COVERED.
- **Lectures 16-19 (stability of Householder triangularization; back-substitution stability;
  conditioning & stability of $Ax=b$; stability of least-squares algorithms)** — back-substitution /
  triangular-solve stability is folded into `43.03.01`/`43.03.02` and `43.01.03`; the $Ax=b$
  conditioning/residual theorem is `43.03.03`; LS stability is `43.04.01`/`43.04.08`. COVERED — no
  standalone "back-substitution stability" unit is warranted (it is a one-paragraph corollary of the
  triangular-solve backward-error bound, not a headline theorem).
- **Lectures 20-23 (Gaussian elimination, partial pivoting, growth factor, stability of GE,
  Cholesky)** — `43.03.01` (GE/LU + GEPP + growth factor) and `43.03.02` (Cholesky, unconditional
  stability). COVERED.
- **Lectures 24-31 (eigenvalue problems; overview of algorithms; reduction to Hessenberg/tridiagonal;
  Rayleigh quotient & inverse iteration; QR algorithm with shifts; computing the SVD)** — `43.06.01`
  (power/inverse/RQ iteration), `43.06.02` (Hessenberg/tridiagonal reduction, incl. the
  finite-step-impossibility/Abel obstruction), `43.06.03` (QR algorithm with Wilkinson shift, Schur
  form, simultaneous-iteration equivalence); Rayleigh quotient & Courant-Fischer in `01.01.14`;
  computing the SVD (Golub-Kahan bidiagonalization) narrated in `01.01.12`. COVERED.
- **Lectures 32-34 (overview of iterative methods; Arnoldi; how Arnoldi locates eigenvalues — Ritz
  values; eigenvalue perturbation, Bauer-Fike, Gershgorin)** — `43.07.02` (Arnoldi/Lanczos, Ritz
  values) and `43.06.04` (Bauer-Fike + Gershgorin disc localisation, both explicitly present).
  COVERED.
- **Lectures 35-40 (GMRES; Lanczos; CG; biorthogonalization/QMR family; preconditioning)** —
  `43.07.03` (GMRES + residual-polynomial characterisation), `43.07.02` (Lanczos), `43.07.04` (CG +
  Chebyshev convergence bound), `43.07.05` (preconditioning). The biorthogonalization / nonsymmetric
  Lanczos / BiCG-QMR family (Lecture 39) is a single survey lecture in Trefethen-Bau with no
  theorem-level payload and was already excluded from the spine plan; not a genuine gap. COVERED.

## Spot-checked "could-be-missing" topics (all COVERED, none standalone gaps)
- Schur decomposition/form → `43.06.03` (computed numerically) + `01.01.13` (existence as pure LA).
- Ritz values / Rayleigh-Ritz → `43.07.02`, `43.07.03`, `43.07.04`; `01.01.14`.
- Gershgorin discs → `43.06.04` (cited Gershgorin 1931 + the disc localisation statement).
- Chebyshev-polynomial convergence (CG/GMRES) → `43.07.04` (explicit bound) + `43.08.04` (minimax).
- Simultaneous / orthogonal subspace iteration → `43.06.03` (QR ≡ simultaneous power iteration).
- Sherman-Morrison / rank-one updates → `43.04.08` (updating/downdating factorisations).
- Back-/forward-substitution backward-error → `43.01.03`, `43.03.01`/`43.03.02`.

## OUT OF SCOPE (unchanged from original audit; not new gaps)
- Pseudospectra as a standalone theory — Trefethen-Embree territory; the non-normal sensitivity
  pointer is folded into `43.06.04`.
- Nonsymmetric-Lanczos / BiCG / QMR survey (Lecture 39) — survey-level, no theorem payload.
- Randomized NLA (randomized SVD, sketching) — post-dates Trefethen-Bau; defer to a modern source.
- Structured/banded/sparse-direct & blocked BLAS-3 depth — Golub-Van Loan remit; the GE/Cholesky
  conceptual core is in `43.03.01`/`43.03.02`/`43.03.08`.
