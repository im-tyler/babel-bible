# Audit — Golub & Van Loan, *Matrix Computations* (4th ed., JHU Press)

- **source_book:** `golub-van-loan`
- **source_curriculum:** `numerical-analysis`
- **target section:** `content/43-numerical-analysis/` (frontmatter `section: numerical-analysis`)
- **date:** 2026-06-07

## Verdict

The `43-numerical-analysis` section is a **freshly scaffolded, empty** chapter set (all of
`01-floating-point-conditioning` … `11-finite-difference-pdes` are empty directories).
Trefethen & Bau is auditing the **conceptual core** of numerical linear algebra in parallel
and owns the standard algorithm spine: conditioning/stability/floating-point (43.01),
LU/Cholesky/GE-stability (43.03), QR/least-squares (43.04), SVD (43.05),
eigenvalue algorithms — power method / QR-algorithm / symmetric (43.06), and Krylov methods
— Arnoldi/Lanczos/CG/GMRES/preconditioning (43.07). **All of that is deferred to TB** and
appears under `## COVERED` tagged `TB 43.0x`, not re-proposed here.

This audit proposes ONLY genuine **Golub–Van-Loan-specific depth** that TB does not cover
and that no existing corpus unit states. Each candidate was grepped against the live corpus
(filenames + bodies) across `content/43-numerical-analysis/`,
`content/01-foundations/01-linear-algebra/`, `content/24-numerical-pde/`, and the whole
tree. The corpus's linear-algebra chapter `01.01.*` supplies the **theory** (SVD, spectral
theorem, Jordan form, the *theoretical* generalised eigenvalue problem via simultaneous
diagonalisation of two forms in `01.01.19`, matrix exponential via Jordan form in `01.01.11`
and ODE systems in `02.06.03`) — but in **every** case the corpus stops at the existence /
canonical-form theorem and has **no numerical algorithm** for it. The genuine gaps below are
exactly the GVL signature algorithms that compute these objects stably in floating point and
that are neither in TB's standard spine nor anywhere in the corpus.

Result: **5 genuine gaps.** This is the expected conservative outcome for a book whose core
overlaps heavily with TB — most candidate topics are either TB's or theoretically present.

**Prereq convention.** Anchors verified to exist:
`01.01.08` (eigenvalue/eigenvector), `01.01.09` (Gram–Schmidt / inner-product space),
`01.01.11` (Jordan canonical form), `01.01.12` (SVD), `01.01.13` (spectral theorem),
`01.01.14` (Rayleigh quotient / Courant–Fischer), `01.01.19` (generalised eigenvalue problem
/ simultaneous diagonalisation of two quadratic forms), `02.06.03` (linear ODE systems /
matrix exponential). Prereqs of the form `43.0x.xx` are **TB's parallel sibling units**
(LU/Cholesky `43.03`, QR/least-squares `43.04`, SVD `43.05`, eigenvalue `43.06`); they are
listed so the producer can wire the DAG once TB's units land. Proposed ids use **high unit
numbers in the shared chapters** (43.03.08+, 43.05.08+, 43.06.10+) to avoid collision with
TB's core numbering.

---

## GENUINE GAPS

### 43.03.08 — Symmetric-indefinite factorisation: the Bunch–Kaufman LDLᵀ algorithm
- **spec:** For a symmetric (possibly indefinite) \(A\), the block factorisation \(PAP^{\mathsf T}=LDL^{\mathsf T}\) with \(D\) block-diagonal of \(1\times1\) and \(2\times2\) pivots; the Bunch–Kaufman–Parlett diagonal pivoting strategy that bounds element growth without the \(\mathcal O(n^3)\) cost of complete pivoting; backward stability and operation count (≈ half of LU). Contrast with Cholesky (definite case, TB 43.03) which fails for indefinite \(A\).
- **prereqs:** `43.03.03` (TB: LU / Gaussian elimination with pivoting), `01.01.15` (quadratic forms), `01.01.13` (spectral theorem)
- **chapter:** `03-direct-linear-solvers` · **section:** `numerical-analysis`
- **source_book:** `golub-van-loan` · **source_curriculum:** `numerical-analysis`

### 43.04.08 — Updating and downdating matrix factorisations (rank-one QR and Cholesky modifications)
- **spec:** Stable \(\mathcal O(n^2)\) updates of a QR or Cholesky factorisation under a rank-one modification \(A\leftarrow A+\sigma v v^{\mathsf T}\), row/column add or delete; Givens- and Householder-based QR update, the Cholesky rank-one update/downdate, and why downdating (\(\sigma<0\)) is numerically delicate (hyperbolic rotations / loss of positive-definiteness). Application: recursive least squares.
- **prereqs:** `43.04.01` (TB: Householder QR), `43.03.05` (TB: Cholesky), `01.01.09` (Gram–Schmidt / orthogonalisation)
- **chapter:** `04-least-squares-qr` · **section:** `numerical-analysis`
- **source_book:** `golub-van-loan` · **source_curriculum:** `numerical-analysis`

### 43.05.08 — Total least squares and the generalised SVD
- **spec:** The errors-in-variables / total-least-squares problem \(\min\|[E\;r]\|_F\) s.t. \((A+E)x=b+r\) and its solution via the SVD of \([A\;b]\) (smallest singular triple); existence/uniqueness conditions and the closed-form TLS solution. The generalised SVD (GSVD) of a matrix pair \((A,B)\): simultaneous orthogonal diagonalisation \(A=U\Sigma_A X^{-1}\), \(B=V\Sigma_B X^{-1}\), and its use for constrained/regularised least squares. Contrast with ordinary least squares (TB 43.04).
- **prereqs:** `43.05.01` (TB: SVD computation), `01.01.12` (SVD), `01.01.14` (Courant–Fischer)
- **chapter:** `05-svd-low-rank` · **section:** `numerical-analysis`
- **source_book:** `golub-van-loan` · **source_curriculum:** `numerical-analysis`

### 43.06.10 — The generalised eigenvalue problem Ax=λBx and the QZ algorithm
- **spec:** The generalised eigenproblem \(Ax=\lambda Bx\) and the matrix pencil \(A-\lambda B\); regular vs singular pencils, infinite eigenvalues, the Kronecker/Weierstrass canonical form. The QZ (generalised Schur) algorithm: simultaneous unitary reduction of \((A,B)\) to (Hessenberg, triangular) then to (quasi-triangular, triangular) by an implicit shifted QR sweep on \(AB^{-1}\) without forming the inverse; backward stability. Contrast with the symmetric-definite case, which reduces to a standard eigenproblem via Cholesky of \(B\) (the *theory* of the latter is `01.01.19`).
- **prereqs:** `43.06.05` (TB: QR algorithm / Hessenberg reduction), `01.01.08` (eigenvalues), `01.01.19` (generalised eigenvalue problem, theoretical), `01.01.13` (spectral theorem)
- **chapter:** `06-eigenvalue-algorithms` · **section:** `numerical-analysis`
- **source_book:** `golub-van-loan` · **source_curriculum:** `numerical-analysis`

### 43.06.11 — Computing matrix functions: the matrix exponential ("nineteen dubious ways")
- **spec:** Numerical evaluation of \(f(A)\) for analytic \(f\), focused on \(e^{A}\): why naive Taylor series and eigendecomposition are unstable for non-normal/defective \(A\); the scaling-and-squaring algorithm with a diagonal Padé approximant (\(e^{A}=(e^{A/2^s})^{2^s}\)), error/overscaling analysis; the Schur–Parlett method for general \(f(A)\) via the (block) triangular Schur form. The "nineteen dubious ways" cautionary catalogue (Moler–Van Loan). The *theory* of \(e^{A}\) (Jordan form `01.01.11`, ODE systems `02.06.03`) exists; the **numerical computation** does not.
- **prereqs:** `43.06.05` (TB: QR algorithm / Schur form), `01.01.11` (Jordan canonical form), `02.06.03` (matrix exponential / linear ODE systems)
- **chapter:** `06-eigenvalue-algorithms` · **section:** `numerical-analysis`
- **source_book:** `golub-van-loan` · **source_curriculum:** `numerical-analysis`

---

## COVERED (not gaps)

Deferred to the parallel **Trefethen–Bau** audit (TB owns; do not duplicate):

- **Conditioning, stability, floating-point, backward error** — TB 43.01.
- **LU / Gaussian elimination with pivoting; growth factor; stability of GE** — TB 43.03.
- **Cholesky factorisation (symmetric positive-definite)** — TB 43.03 (the *indefinite* Bunch–Kaufman case is the genuine gap 43.03.08 above).
- **QR factorisation (Householder/Givens/Gram–Schmidt) and least squares** — TB 43.04 (ordinary LS; the *updating* problem is gap 43.04.08, *total* LS is gap 43.05.08).
- **Singular value decomposition (computation: Golub–Kahan bidiagonalisation)** — TB 43.05 (the *generalised* SVD is folded into gap 43.05.08).
- **Eigenvalue algorithms: power iteration, QR algorithm, Hessenberg/Schur reduction, symmetric eigenproblem (divide-and-conquer / MRRR)** — TB 43.06 (the *generalised* eigenproblem / QZ is gap 43.06.10; *matrix-function* evaluation is gap 43.06.11).
- **Krylov subspace methods: Arnoldi, Lanczos, CG, GMRES, preconditioning** — TB 43.07.

Already present in the corpus as **theory** (existence / canonical form), so the algorithm is the only gap (cited above as prereqs), not the object:

- **SVD (existence/structure)** — `01.01.12`.
- **Spectral theorem / orthogonal diagonalisation of normal operators** — `01.01.13`.
- **Eigenvalues/eigenvectors; characteristic polynomial** — `01.01.08`.
- **Jordan canonical form** — `01.01.11`.
- **Rayleigh quotient / Courant–Fischer min–max** — `01.01.14`.
- **Generalised eigenvalue problem via simultaneous diagonalisation of two quadratic forms (symmetric-definite, theoretical)** — `01.01.19` (the numerical QZ algorithm for the *general* pencil is gap 43.06.10).
- **Matrix exponential (via Jordan form / linear ODE systems)** — `01.01.11`, `02.06.03` (numerical computation is gap 43.06.11).
- **Gram–Schmidt orthonormalisation** — `01.01.09`.

## OUT OF SCOPE

- **Banded / tridiagonal / sparse direct methods, fill-in, reordering (Cuthill–McKee, nested dissection), fast Toeplitz solvers (Levinson/Schur).** GVL treats these, but they are algorithm-engineering specialisations of the LU/Cholesky/QR units (TB 43.03–43.04) with no new theorem-level payoff for this curriculum's intended depth; the Toeplitz *operator* theory that the corpus carries (`08.13.*`, random-matrix and Strong-Law Toeplitz-lemma uses) is unrelated. Not spun out as units.
- **Block / partitioned (level-3 BLAS) algorithm reformulations and parallel/cache-blocking performance engineering.** These are implementation re-castings of the same factorisations (TB's), not new mathematics — out of scope for a mathematics-curriculum spine.
- **Lyapunov / Sylvester matrix-equation solvers (Bartels–Stewart).** A genuine GVL topic but niche control-theory machinery with limited corpus pull; deferred (the corpus "Lyapunov" hits are the *stability function*, `02.12.08`, not the matrix equation). Candidate for a later targeted pass, not proposed now to avoid manufacturing marginal units.
- **CS / floating-point IEEE-754 hardware detail and BLAS API specification.** Belongs to a systems/CS unit, not the numerical-analysis mathematics spine.

---

## RETURN SUMMARY
- **Genuine gaps:** 5 (43.03.08, 43.04.08, 43.05.08, 43.06.10, 43.06.11)
- **COVERED:** 14 topics (7 deferred to TB 43.01–43.07; 7 theory-present-algorithm-absent corpus anchors)
- **OUT OF SCOPE:** 4
- **Gap file:** `plans/expansion/numerical-analysis/_audit/golub-van-loan.gaps.md`
