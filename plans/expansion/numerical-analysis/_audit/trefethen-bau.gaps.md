# Audit: Trefethen & Bau — *Numerical Linear Algebra*

`source_book: trefethen-bau`
`source_curriculum: numerical-analysis`
`section: numerical-analysis` (new section `content/43-numerical-analysis/`, prefix `43`)

Method: each of Trefethen-Bau's headline lectures was reduced to its theorem-level
payload and verified against the live corpus by filename grep + body grep. The section
`43-numerical-analysis/` is currently EMPTY (skeleton dirs only), so "covered" can only
mean covered in a *cross-section* home — overwhelmingly `01-foundations/01-linear-algebra`.

**The single most important corpus fact for this audit.** The `01-linear-algebra` units
are far deeper on numerics than a pure-LA chapter usually is. Concretely:

- **`01.01.09` (Gram-Schmidt / QR)** already *states and proves* the QR decomposition
  (existence + positive-diagonal uniqueness) AND carries, as named theorems, **modified
  Gram-Schmidt with Björck's backward-error analysis** (the $\sqrt{\kappa(A)}\,\epsilon$
  loss-of-orthogonality bound), **Householder reflectors as QR** (backward-stable
  independent of $\kappa$), and a statement of **Givens** rotations + Wilkinson rounding
  theory. This is essentially Trefethen-Bau Lectures 7-10 and 16.
- **`01.01.12` (SVD)** already *states and proves* **SVD existence/uniqueness**, the
  **Eckart-Young-Mirsky** best-rank-$k$ theorem in operator / Frobenius / nuclear norm
  (full proof), the **Moore-Penrose pseudoinverse** (four conditions + uniqueness), the
  **least-squares / normal-equations** connection and Tikhonov filtering, the **condition
  number** $\sigma_1/\sigma_r$, and narrates the **Golub-Kahan SVD algorithm** with its
  backward-stability bound. This is Trefethen-Bau Lectures 4-5 + 31.
- **`01.01.14` (Rayleigh quotient / Courant-Fischer)** already carries **Weyl's
  inequalities** and **Cauchy interlacing** for Hermitian eigenvalues (symmetric
  eigenvalue *perturbation*), plus the Rayleigh quotient itself.
- **`01.01.06` (Kronecker-Capelli)** carries the normal-equations least-squares framing
  and condition-number-as-distance-to-singularity narrative.

Consequence, applying the brief's doctrine (covered = a unit *states and proves* it, and
"default to COVERED for pure-LA facts"): **chapters 43.04 (least-squares/QR) and 43.05
(SVD/low-rank) are essentially fully covered** by `01.01.09` + `01.01.12`, and the
symmetric eigenvalue *perturbation* theory is covered by `01.01.14`. What is genuinely
absent is the **algorithmic / numerical core of Trefethen-Bau that a pure-LA unit does not
contain**: a standalone floating-point + conditioning + backward-stability framework; the
direct solvers (LU/GE stability, growth factors, Cholesky) as theorems; the eigenvalue
*algorithms* (power/inverse/RQ iteration, Hessenberg reduction, the QR algorithm) and the
*non-normal* Bauer-Fike perturbation bound; and the Krylov-subspace iterative methods
(Arnoldi, Lanczos, GMRES, CG, Chebyshev convergence, preconditioning). Those are the gaps.

Per the chapter-ownership split: I own the conceptual/algorithmic core; **Golub-Van Loan's
auditor owns structured/banded/sparse depth in 43.03** and is expected to add the
sparse-direct and detailed BLAS/blocking units there — I propose only the GE-stability /
growth-factor / Cholesky conceptual core.

---

## GENUINE GAPS

### 43.01.01 — Floating-point arithmetic and the IEEE model
- **id:** `43.01.01`
- **title:** Floating-point arithmetic, machine epsilon, and the fundamental axiom of rounding
- **spec:** The floating-point number system $\mathbb{F}\subset\mathbb{R}$ (mantissa/exponent, IEEE-754 single/double), unit roundoff $\epsilon_{\mathrm{mach}}$, the rounding map $\mathrm{fl}(x)=x(1+\delta)$ with $|\delta|\le\epsilon_{\mathrm{mach}}$, the fundamental axiom $\mathrm{fl}(x\,\mathrm{op}\,y)=(x\,\mathrm{op}\,y)(1+\delta)$ for the four arithmetic operations, catastrophic cancellation, and a worked accumulated-rounding analysis (e.g. a summation error bound). The numerical substrate of every later stability theorem; absent as a unit (only narrated inside `01.01.09`/`01.01.12`).
- **prereqs:** `00.01.01` (real numbers), `25.03.01` (algorithmic complexity / big-O)
- **chapter:** `01-floating-point-conditioning` — `section: numerical-analysis`

### 43.01.02 — Conditioning and condition numbers of problems
- **id:** `43.01.02`
- **title:** Conditioning of problems: absolute and relative condition numbers
- **spec:** A problem as a map $f:X\to Y$; the absolute condition number $\hat\kappa=\sup\|\delta f\|/\|\delta x\|$ and relative condition number $\kappa=\|J(x)\|\,\|x\|/\|f(x)\|$ via the Jacobian; the matrix condition number $\kappa(A)=\|A\|\,\|A^{-1}\|=\sigma_1/\sigma_n$ derived as the conditioning of matrix-vector multiply / linear-system solve; conditioning of polynomial roots (Wilkinson's polynomial) and of eigenvalues; well- vs ill-posed problems. Generalises the SVD-narrated $\kappa=\sigma_1/\sigma_r$ of `01.01.12` into the full theory of problem conditioning, independent of any algorithm.
- **prereqs:** `43.01.01` (floating point), `01.01.12` (SVD, $\kappa=\sigma_1/\sigma_n$), `02.05.03` (multivariable chain rule — the Jacobian)
- **chapter:** `01-floating-point-conditioning` — `section: numerical-analysis`

### 43.01.03 — Backward stability and backward-error analysis of algorithms
- **id:** `43.01.03`
- **title:** Stability, backward stability, and the backward-error / forward-error theorem
- **spec:** Accuracy vs stability vs backward stability of an algorithm $\tilde f$; the definition "$\tilde f(x)=f(\tilde x)$ for some $\tilde x$ with $\|\tilde x-x\|/\|x\|=O(\epsilon_{\mathrm{mach}})$"; the **fundamental theorem of backward-error analysis** $\frac{\|\tilde f(x)-f(x)\|}{\|f(x)\|}=O(\kappa(x)\,\epsilon_{\mathrm{mach}})$ (forward error $\le$ condition number $\times$ backward error); backward stability of inner products and Householder QR; the Wilkinson paradigm. The framework that turns conditioning (43.01.02) and floating point (43.01.01) into error guarantees; narrated but never built in `01.01.09`.
- **prereqs:** `43.01.02` (conditioning), `43.01.01` (floating point)
- **chapter:** `01-floating-point-conditioning` — `section: numerical-analysis`

### 43.03.01 — Gaussian elimination, LU factorization, and its stability
- **id:** `43.03.01`
- **title:** Gaussian elimination, the LU factorization, and partial-pivoting stability
- **spec:** Gaussian elimination as $A=LU$ ($L$ unit-lower-triangular, $U$ upper-triangular), existence/uniqueness when leading principal minors are nonzero, operation count $\tfrac{2}{3}n^3$; instability of unpivoted GE and the rescue by **partial pivoting** ($PA=LU$); the **growth factor** $\rho$, the backward-error bound $\|E\|=O(\rho\,\epsilon_{\mathrm{mach}}\|A\|)$, the $2^{n-1}$ worst case vs the benign average case, and why GEPP is stable in practice. The conceptual GE-stability core (Golub-Van Loan owns banded/sparse/blocked depth in this chapter); no LU/GE unit exists anywhere in the corpus.
- **prereqs:** `01.01.06` (systems of linear equations / Gaussian elimination as elementary operations), `43.01.03` (backward stability), `01.01.07` (determinant — leading minors)
- **chapter:** `03-direct-linear-solvers` — `section: numerical-analysis`

### 43.03.02 — Cholesky factorization and the symmetric positive-definite solve
- **id:** `43.03.02`
- **title:** The Cholesky factorization $A=R^*R$ and its unconditional stability
- **spec:** For Hermitian positive-definite $A$, the Cholesky factorization $A=R^*R$ with $R$ upper-triangular positive-diagonal (existence/uniqueness from the SPD structure), the $\tfrac{1}{3}n^3$ algorithm, the fact that **no pivoting is needed** and Cholesky is backward stable for every SPD matrix (growth factor bounded a priori), and its use to solve SPD systems and to test positive-definiteness. The SPD-solver core; the LU companion of 43.03.01. (`01.01.09` mentions Cholesky only as a name inside the Iwasawa synthesis.)
- **prereqs:** `43.03.01` (LU / GE stability), `01.01.15` (quadratic forms / positive-definiteness), `01.01.13` (spectral theorem — SPD diagonalisation)
- **chapter:** `03-direct-linear-solvers` — `section: numerical-analysis`

### 43.03.03 — Perturbation theory and a posteriori error for $Ax=b$
- **id:** `43.03.03`
- **title:** Perturbation theory for linear systems: the $\kappa(A)$ error bound and residual estimates
- **spec:** Sensitivity of $Ax=b$ to perturbations in $A$ and $b$: the bound $\frac{\|\delta x\|}{\|x\|}\le\frac{\kappa(A)}{1-\kappa(A)\|\delta A\|/\|A\|}\big(\frac{\|\delta A\|}{\|A\|}+\frac{\|\delta b\|}{\|b\|}\big)$; the residual $r=b-A\tilde x$ and the relation $\frac{\|\delta x\|}{\|x\|}\le\kappa(A)\frac{\|r\|}{\|b\|}$; backward error of an approximate solution (Rigal-Gaches); iterative refinement. Closes the loop from conditioning (43.01.02) to the concrete linear-solve guarantee; the `01.01.06` narrative on $\kappa$ near-singularity is not this theorem.
- **prereqs:** `43.03.01` (LU / GE), `43.01.02` (condition number), `43.01.03` (backward stability)
- **chapter:** `03-direct-linear-solvers` — `section: numerical-analysis`

### 43.04.01 — Least squares: normal equations vs QR vs SVD conditioning
- **id:** `43.04.01`
- **title:** The least-squares problem: normal equations, QR, and SVD — conditioning and stability comparison
- **spec:** The three algorithms for $\min_x\|Ax-b\|_2$ — normal equations $A^*Ax=A^*b$ (Cholesky, $\kappa(A^*A)=\kappa(A)^2$, fast but conditioning-squaring), Householder/MGS **QR** ($x=R^{-1}Q^*b$, backward stable), and **SVD** ($x=V\Sigma^+U^*b$, most robust for rank-deficiency) — with the conditioning theory of least squares (the $\kappa(A)$ and $\tan\theta/\eta$ sensitivity factors of Trefethen-Bau Lecture 18) explaining *why* QR/SVD replaced normal equations. The pieces (QR, pseudoinverse, normal equations) are proved in `01.01.09`/`01.01.12`; the **algorithm-vs-conditioning comparison and the LS perturbation theorem** are not assembled anywhere. Narrow, high-value: it is the synthesis unit, not a re-derivation.
- **prereqs:** `01.01.09` (QR, Householder, modified Gram-Schmidt), `01.01.12` (SVD, pseudoinverse, normal equations), `43.01.02` (conditioning), `43.01.03` (backward stability)
- **chapter:** `04-least-squares-qr` — `section: numerical-analysis`

### 43.06.01 — Power iteration, inverse iteration, and Rayleigh quotient iteration
- **id:** `43.06.01`
- **title:** Power iteration, inverse iteration, and Rayleigh quotient iteration
- **spec:** Power iteration converging to the dominant eigenpair at rate $|\lambda_2/\lambda_1|$; inverse iteration with a shift $\mu$ converging to the eigenvalue nearest $\mu$; **Rayleigh quotient iteration** combining the Rayleigh quotient estimate with inverse iteration to give cubic convergence for symmetric matrices (quadratic in general); deflation. The first eigenvalue *algorithms* — distinct from the existence theory (`01.01.08`) and the variational characterisation (`01.01.14`); none exist in the corpus.
- **prereqs:** `01.01.08` (eigenvalue/eigenvector), `01.01.14` (Rayleigh quotient), `43.03.01` (linear solves for inverse iteration)
- **chapter:** `06-eigenvalue-algorithms` — `section: numerical-analysis`

### 43.06.02 — Reduction to Hessenberg/tridiagonal form
- **id:** `43.06.02`
- **title:** Orthogonal reduction to Hessenberg and (symmetric) tridiagonal form
- **spec:** Householder similarity transformations reducing a general $A$ to upper-**Hessenberg** form (and a Hermitian $A$ to **tridiagonal** form) in a finite number of $O(n^3)$ steps, preserving the spectrum; why full triangularization is impossible in finite steps (Abel/Galois obstruction → eigenvalue computation must be iterative); this reduction as the cheap first phase that makes the QR algorithm efficient. The structural bridge from direct factorizations to the iterative QR algorithm; absent (no "Hessenberg"/"tridiagonal-reduction" unit — the corpus hits are Schur-Weyl/Cartan collisions).
- **prereqs:** `01.01.09` (Householder reflectors), `01.01.13` (spectral theorem — Hermitian case), `01.01.08` (eigenvalues)
- **chapter:** `06-eigenvalue-algorithms` — `section: numerical-analysis`

### 43.06.03 — The QR algorithm for eigenvalues, with shifts
- **id:** `43.06.03`
- **title:** The QR algorithm for eigenvalues: pure, shifted, and the symmetric case
- **spec:** The unshifted QR iteration $A_k=Q_kR_k$, $A_{k+1}=R_kQ_k$ converging to (quasi-)triangular Schur form; its equivalence to simultaneous (orthogonal) power iteration; the **Wilkinson shift** giving cubic local convergence; the practical implicit (bulge-chasing) QR on a Hessenberg matrix; the symmetric variant converging to the eigenvalue decomposition. The workhorse eigenvalue algorithm of numerical LA (Francis/Kublanovskaya 1961); referenced by name in `01.01.09` synthesis but never built; no Schur-decomposition unit exists either.
- **prereqs:** `43.06.02` (Hessenberg/tridiagonal reduction), `43.06.01` (power iteration — the convergence engine), `01.01.09` (QR factorization)
- **chapter:** `06-eigenvalue-algorithms` — `section: numerical-analysis`

### 43.06.04 — Bauer-Fike and the conditioning of eigenvalues
- **id:** `43.06.04`
- **title:** Eigenvalue perturbation for non-normal matrices: the Bauer-Fike theorem
- **spec:** The **Bauer-Fike theorem**: for diagonalizable $A=V\Lambda V^{-1}$, every eigenvalue of $A+E$ lies within $\kappa(V)\|E\|$ of an eigenvalue of $A$; the eigenvalue condition number $1/|y^*x|$ for a simple eigenvalue (left/right eigenvectors), Gershgorin disc localisation, and the pseudospectrum as the right tool for non-normal sensitivity. The **non-normal** eigenvalue-perturbation theory — genuinely distinct from the Hermitian Weyl/interlacing bounds already in `01.01.14` (which assume the symmetric case where $\kappa(V)=1$).
- **prereqs:** `01.01.08` (eigenvalues/diagonalization), `01.01.14` (Weyl/interlacing — the Hermitian counterpart), `43.01.02` (conditioning)
- **chapter:** `06-eigenvalue-algorithms` — `section: numerical-analysis`

### 43.07.01 — Stationary iterative methods: Jacobi, Gauss-Seidel, SOR
- **id:** `43.07.01`
- **title:** Classical stationary iterations: Jacobi, Gauss-Seidel, SOR and their convergence
- **spec:** Splitting $A=M-N$, the iteration $x_{k+1}=M^{-1}Nx_k+M^{-1}b$, convergence iff spectral radius $\rho(M^{-1}N)<1$; Jacobi, Gauss-Seidel, and successive over-relaxation (SOR) with the optimal $\omega$; convergence for diagonally dominant and SPD matrices; the relaxation-parameter optimisation. The classical iterative-solver baseline that motivates Krylov methods; no stationary-iteration unit exists.
- **prereqs:** `43.03.01` (direct solvers — the contrast), `01.01.08` (spectral radius / eigenvalues), `43.03.03` (linear-system perturbation context)
- **chapter:** `07-iterative-krylov-methods` — `section: numerical-analysis`

### 43.07.02 — Arnoldi and Lanczos iterations
- **id:** `43.07.02`
- **title:** Krylov subspaces, the Arnoldi iteration, and the Lanczos iteration
- **spec:** The Krylov subspace $\mathcal{K}_m=\mathrm{span}\{b,Ab,\dots,A^{m-1}b\}$; the **Arnoldi** iteration building an orthonormal Krylov basis via modified Gram-Schmidt and producing the Hessenberg $H_m=Q_m^*AQ_m$ (Arnoldi for eigenvalues / Ritz values); the **Lanczos** specialisation for Hermitian $A$ giving a three-term recurrence and tridiagonal $T_m$; loss of orthogonality and reorthogonalisation. The foundational Krylov machinery underlying GMRES and CG; absent (the corpus has no Krylov/Arnoldi/Lanczos unit).
- **prereqs:** `01.01.09` (modified Gram-Schmidt, Householder), `43.06.02` (Hessenberg form), `01.01.08` (eigenvalues — Ritz values)
- **chapter:** `07-iterative-krylov-methods` — `section: numerical-analysis`

### 43.07.03 — GMRES
- **id:** `43.07.03`
- **title:** GMRES: minimum-residual Krylov solution and its convergence
- **spec:** GMRES minimising $\|b-Ax\|_2$ over $x_0+\mathcal{K}_m$ via the Arnoldi basis and a small least-squares problem on $H_m$ (solved by Givens rotations); the residual-polynomial characterisation $\|r_m\|=\min_{p\in P_m,p(0)=1}\|p(A)b\|$; convergence governed by the field of values / pseudospectrum for non-normal $A$; restarting GMRES($k$). The general (non-symmetric) Krylov solver; no unit exists.
- **prereqs:** `43.07.02` (Arnoldi iteration), `43.04.01` (least squares — the inner solve) or `01.01.09` (QR/Givens), `43.01.02` (conditioning)
- **chapter:** `07-iterative-krylov-methods` — `section: numerical-analysis`

### 43.07.04 — The conjugate gradient method
- **id:** `43.07.04`
- **title:** The conjugate gradient method and its Chebyshev convergence bound
- **spec:** CG for SPD $A$ as the Lanczos-based Krylov method minimising the $A$-norm of the error over $\mathcal{K}_m$; the short three-term recurrence (no full basis stored); the energy-minimisation and conjugacy interpretations; the **Chebyshev-polynomial convergence bound** $\|e_m\|_A\le 2\big(\tfrac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\big)^m\|e_0\|_A$ and the clustered-spectrum acceleration. The canonical SPD iterative solver; absent (the Chebyshev hits in the corpus are precalc trig collisions).
- **prereqs:** `43.07.02` (Lanczos / Krylov), `43.03.02` (SPD / Cholesky context), `01.01.14` (Rayleigh quotient / energy norm)
- **chapter:** `07-iterative-krylov-methods` — `section: numerical-analysis`

### 43.07.05 — Preconditioning
- **id:** `43.07.05`
- **title:** Preconditioning of Krylov methods
- **spec:** The preconditioned system $M^{-1}Ax=M^{-1}b$ chosen so that $M^{-1}A$ has a clustered/low-condition-number spectrum while $M^{-1}$ is cheap to apply; preconditioned CG and preconditioned GMRES; standard preconditioners (Jacobi/diagonal, incomplete Cholesky/ILU, SSOR), and the spectral-clustering convergence rationale. The lever that makes Krylov methods practical; no preconditioning unit exists.
- **prereqs:** `43.07.04` (conjugate gradient), `43.07.03` (GMRES), `43.07.01` (stationary iterations — splitting as preconditioner)
- **chapter:** `07-iterative-krylov-methods` — `section: numerical-analysis`

---

## COVERED (not gaps)

- **SVD existence & uniqueness** — `01.01.12` (full proof via spectral theorem on $A^*A$;
  $A=U\Sigma V^*$ with the singular-value uniqueness statement). Trefethen-Bau Lecture 4-5.
- **Eckart-Young (-Mirsky) best low-rank approximation** — `01.01.12` *states and proves*
  it in operator, Frobenius, and nuclear norm (Mirsky via Ky Fan dominance). Lecture 5.
- **Moore-Penrose pseudoinverse; minimum-norm least squares; normal equations** —
  `01.01.12` (four Moore-Penrose conditions + uniqueness, $x^*=A^+b$, normal-equations
  recovery, Tikhonov filtering) and `01.01.06` (normal-equations framing). Lectures 11, 18.
  The remaining gap `43.04.01` is only the *algorithm-conditioning comparison*, not these.
- **QR factorization (existence + uniqueness)** — `01.01.09` *states and proves* it for
  full-column-rank $A$, positive-diagonal $R$. Lecture 7-8.
- **Householder triangularization** — `01.01.09` (Householder-reflector theorem with
  $\kappa$-independent backward stability). Lecture 10, 16.
- **Modified Gram-Schmidt + Björck backward-error analysis** — `01.01.09` (the
  $\sqrt{\kappa(A)}\,\epsilon_{\mathrm{mach}}$ loss-of-orthogonality bound). Lectures 8, 9, 19.
- **Givens rotations** — stated in `01.01.09` (sparse/incremental QR). Lecture 10.
- **Cholesky as a name / Iwasawa synthesis** — mentioned in `01.01.09`; but as a *theorem
  with the SPD stability statement* it is NOT proved → kept as gap `43.03.02`.
- **Rayleigh quotient; Courant-Fischer min-max** — `01.01.14` (full treatment). Lecture 27.
- **Weyl inequalities & Cauchy interlacing (Hermitian eigenvalue perturbation)** —
  `01.01.14`. The *non-normal* Bauer-Fike case is the genuine gap `43.06.04`.
- **Spectral theorem / Schur-form existence (as pure LA)** — `01.01.13` (normal-operator
  spectral theorem). The *iterative QR algorithm* that computes the Schur form numerically
  is the gap `43.06.03`.
- **Operator / matrix / spectral / Frobenius norms** — `01.01.12` (operator norm,
  condition number) and `02.11.01`/`02.11.06` (bounded operators, normed spaces). The
  *problem-conditioning theory* built on them is gap `43.01.02`.
- **Golub-Kahan SVD algorithm** — narrated inside `01.01.12` (bidiagonalisation + bidiagonal
  QR, backward-stability bound). Sufficient as the SVD-computation pointer; not re-proposed.

## OUT OF SCOPE

- **Structured / banded / sparse-direct factorizations, blocked & cache-aware LU/Cholesky,
  BLAS-3 / fill-in / nested dissection** — explicitly the **Golub-Van Loan** auditor's remit
  inside chapter `43.03`; this audit proposes only the conceptual GE-stability / growth-factor
  / Cholesky core (`43.03.01-02`).
- **Pseudospectra as a standalone theory (Trefethen-Bau Part VII detail)** — folded into
  `43.06.04` (Bauer-Fike / non-normal conditioning) as a pointer; a full pseudospectra unit
  would be a Trefethen-Embree *Spectra and Pseudospectra* item, not core Trefethen-Bau.
- **Numerical computation of the SVD as a separate unit** — already narrated in `01.01.12`;
  not worth a dedicated unit given the Golub-Kahan pointer there.
- **Interpolation / quadrature / numerical ODE / finite-difference PDE** (chapters 43.02,
  43.08-43.11) — outside this book (Trefethen-Bau is linear-algebra only) and outside this
  auditor's chapter ownership; reserved for Süli-Mayers / LeVeque source books.
- **Randomized NLA (randomized SVD, sketching)** — post-dates Trefethen-Bau's scope; defer
  to a dedicated modern source if the spine later wants it.
