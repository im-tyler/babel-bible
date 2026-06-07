# Completeness re-audit — Golub & Van Loan, *Matrix Computations* (4th ed.)

- **source_book:** `golub-van-loan`
- **source_curriculum:** `numerical-analysis`
- **target section:** `content/43-numerical-analysis/` (frontmatter `section: numerical-analysis`)
- **date:** 2026-06-07
- **predecessor:** `golub-van-loan.gaps.md` (5 gaps, all SHIPPED: 43.03.08, 43.04.08, 43.05.08, 43.06.10, 43.06.11)

## Method

The numerical-analysis spine has now SHIPPED all 42 planned units (verified:
`find content/43-numerical-analysis -name "*.md" | wc -l` = 42, every id in the
PRODUCTION_PLAN master list present). The original GVL audit's 5 GVL-specific gaps are
live in the corpus. The conceptual NLA core was ceded to Trefethen–Bau and is shipped
(43.01–43.07). This re-audit re-examines ONLY the topics the original audit deferred
(`## OUT OF SCOPE`): banded/sparse/Toeplitz engineering, block/BLAS recastings, and the
Lyapunov–Sylvester (Bartels–Stewart) matrix-equation solver — plus a sweep for any other
standard named GVL topic that has become a genuine high-value gap. Every candidate was
grepped against the live corpus (filenames + bodies) before judgement.

## Verdict — **1 new gap.**

The book is, as expected for a text that overlaps TB this heavily, nearly DRY against the
shipped corpus. Exactly one deferred topic — the **dense Bartels–Stewart solver for the
Sylvester / Lyapunov matrix equation** — survives strict scope judgement as a genuine,
theorem-bearing, high-value gap. All other deferred topics remain correctly out of scope.

---

## GENUINE GAPS

### 43.06.12 — The Sylvester and Lyapunov matrix equations: the Bartels–Stewart algorithm
- **spec:** The linear matrix equations \(AX+XB=C\) (Sylvester) and \(A^{\mathsf T}X+XA=-Q\)
  (Lyapunov, the symmetric special case). Solvability: a unique solution exists iff
  \(\sigma(A)\cap\sigma(-B)=\varnothing\), because the Sylvester operator
  \(\mathcal S\colon X\mapsto AX+XB\) has spectrum \(\{\lambda+\mu:\lambda\in\sigma(A),\,
  \mu\in\sigma(B)\}\) (Kronecker form \((I\otimes A + B^{\mathsf T}\otimes I)\,\mathrm{vec}\,X
  = \mathrm{vec}\,C\)); the \(\mathrm{sep}(A,-B)\) separation as the conditioning of the solve.
  The **Bartels–Stewart algorithm**: reduce \(A\) and \(B\) to (real) Schur form via the QR
  algorithm \([43.06.03]\), transform \(C\) accordingly, solve the resulting quasi-triangular
  system column-by-column by back-substitution (each step a small \(1\times1\) or \(2\times2\)
  Sylvester solve), then transform back — an \(\mathcal O(n^3)\) backward-stable method, the
  standard dense solver (the Hammarling variant computes the Cholesky factor of the Lyapunov
  solution directly). The Lyapunov application: \(A\) is stable (Hurwitz) iff for every SPD
  \(Q\) the Lyapunov equation has a unique SPD solution \(X\) (the controllability/observability
  Gramian \(\int_0^\infty e^{A^{\mathsf T}t}Q e^{At}\,dt\)), connecting the computation to the
  *analytic* Lyapunov direct method of \([02.12.08]\) and the matrix exponential of \([02.06.03]\).
- **why not already covered:** \([43.06.11]\) proves the Sylvester equation's *well-posedness*
  (the operator-spectrum Proposition) and names Bartels–Stewart, but ONLY as the internal
  subroutine of the Schur–Parlett **block** recurrence \(T_{ii}F_{ij}-F_{ij}T_{jj}=C_{ij}\) for
  an *already block-triangular* \(T\) in matrix-function evaluation. It never presents the
  general dense \(AX+XB=C\) as a solve in its own right, never gives the QR-Schur-reduction
  algorithm for two *general* matrices, never gives the Kronecker/`vec` formulation, and never
  treats the Lyapunov/Gramian/stability application. That is a distinct, standard,
  theorem-bearing GVL chapter (GVL §7.6 invariant subspaces / §7.6.3 the algorithm) with a
  control-theory payoff and a direct bridge to the existing ODE-stability corpus.
- **prereqs (verified to exist):**
  `43.06.03` (QR algorithm / real Schur form — `content/43-numerical-analysis/06-eigenvalue-algorithms/43.06.03-qr-algorithm-shifts.md`),
  `01.01.08` (eigenvalues/eigenvectors — `content/01-foundations/01-linear-algebra/01.01.08-*`; verified the `01.01.08` anchor is the eigenvalue unit),
  `02.06.03` (matrix exponential / linear ODE systems — `content/02-analysis/06-transcendental/02.06.03-systems-linear-ode-matrix-exponential.md`),
  `02.12.08` (Lyapunov stability, direct method — `content/02-analysis/12-ode/02.12.08-lyapunov-stability-direct-method.md`).
- **chapter:** `06-eigenvalue-algorithms` · **frontmatter** `section: numerical-analysis`,
  `chapter: 06-eigenvalue-algorithms` · **id slot:** `43.06.12` (next free; `43.06.10`/`.11`
  occupied, `.12` unused — verified by directory listing).
- **source_book:** `golub-van-loan` · **source_curriculum:** `numerical-analysis`

---

## COVERED / DRY (re-checked, not gaps)

The 5 original GVL gaps — all SHIPPED and verified present:
- **43.03.08** Bunch–Kaufman symmetric-indefinite LDLᵀ — shipped.
- **43.04.08** updating/downdating QR & Cholesky — shipped.
- **43.05.08** total least squares & generalised SVD — shipped.
- **43.06.10** generalised eigenproblem / QZ — shipped.
- **43.06.11** matrix functions / matrix exponential (scaling-and-squaring, Schur–Parlett) — shipped.

Sylvester-equation *well-posedness* and the Bartels–Stewart *name*: present inside
**43.06.11** (Proposition + Synthesis), as the Schur–Parlett block subroutine — which is
exactly why the *general dense solver + Lyapunov/Gramian application* (43.06.12 above) is the
genuine remaining gap, not the operator-spectrum theorem itself (do NOT re-prove the
solvability Proposition; cross-ref 43.06.11).

## OUT OF SCOPE (re-confirmed)

- **Banded / tridiagonal / sparse direct methods, fill-in, reordering (Cuthill–McKee, nested
  dissection), fast Toeplitz solvers (Levinson/Schur/Durbin).** Re-grepped: no Levinson/
  Toeplitz/Cuthill/banded-solver unit in `content/43-numerical-analysis/` (the lone "Toeplitz"
  hit is the incidental spline tridiagonal system in `43.08.03`). These remain
  algorithm-engineering specialisations of the LU/Cholesky/QR units (43.03–43.04) with no
  theorem-level payoff at this curriculum's depth. NOT a gap.
- **Block / partitioned (level-3 BLAS) algorithm reformulations, cache-blocking, parallel
  performance engineering.** Implementation re-castings of the same factorisations, not new
  mathematics. NOT a gap.
- **IEEE-754 hardware detail and BLAS API specification.** Systems/CS material, not the
  mathematics spine (the floating-point *model* needed for analysis is in 43.01.01). NOT a gap.

---

## RETURN SUMMARY
- **New genuine gaps:** 1 (43.06.12 — Sylvester/Lyapunov equations, Bartels–Stewart algorithm)
- **Re-confirmed out of scope:** banded/Toeplitz/sparse, block/BLAS, IEEE/BLAS-API
- **Original 5 gaps:** all shipped & verified
- **File:** `plans/expansion/numerical-analysis/_audit/golub-van-loan.completeness.md`
