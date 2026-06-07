# Completeness round-2 re-audit — Golub & Van Loan, *Matrix Computations* (4th ed.)

- **source_book:** `golub-van-loan`
- **source_curriculum:** `numerical-analysis`
- **target section:** `content/43-numerical-analysis/` (frontmatter `section: numerical-analysis`)
- **date:** 2026-06-07
- **predecessors:** `golub-van-loan.gaps.md` (5 gaps, all shipped); `golub-van-loan.completeness.md` (1 gap, shipped as `43.06.12`)

## Verdict — **DRY — 0 new gaps.**

Closing the round-1 Sylvester/Lyapunov gap (`43.06.12`, Bartels–Stewart) revealed no further
STANDARD, named, high-value GVL topic genuinely absent from `content/`. Every GVL-signature
named algorithm now has corpus representation (verified by filename + body grep); the two
remaining named candidates are theorem-free alternatives to already-shipped units, and the
adjacent control/decomposition topics are either already proven as objects or carry no corpus
pull. GVL is convergent against the shipped corpus.

## Method

Confirmed the corpus is current: `find content/43-numerical-analysis -name "*.md" | wc -l` = 44
(the 42 planned units + round-1 additions `43.06.12` and `43.10.06`, all present). Re-swept GVL's
full TOC for any standard named topic that became a genuine gap once Sylvester/Lyapunov closed,
grepping each candidate (filename + body) across `content/43-numerical-analysis/` and
`content/01-foundations/01-linear-algebra/` before judgement. Strict scope: DRY is the expected,
correct outcome; marginal/variant units are not manufactured.

## CANDIDATES EXAMINED AND REJECTED (not gaps)

- **Jacobi eigenvalue method (cyclic/one-sided Jacobi rotations; GVL §8.5).** Absent as an
  eigensolver (the only `jacobi` hits in 43 are the Jacobi *linear-system* iteration of
  `43.07.01` and incidental matches). But it is an *alternative* symmetric eigensolver with the
  same input/output as the Wilkinson-shifted symmetric tridiagonal QR already shipped in
  `43.06.03`; its entire theoretical content is the spectral theorem (`01.01.13`) and
  Courant–Fischer (`01.01.14`). No new theorem-level object → an algorithm variant, not a gap.
- **Symmetric tridiagonal bisection / Sturm sequences / inertia count (GVL §8.4).** Absent as an
  eigenvalue algorithm. Its theoretical engine — Sylvester's law of inertia — is already proven
  and used (`01.01.13`, `01.01.15`, `01.01.17`; congruence-invariant signature). Same role: an
  alternative route to the symmetric spectrum already delivered by `43.06.03`. Theorem-free
  variant → not a gap.
- **Divide-and-conquer symmetric eigensolver (GVL §8.4.3).** Already named in the synthesis/notes
  of `43.06.02` and `43.06.03` as the Parlett-line successor to symmetric QR; a same-output
  performance variant, deliberately not spun out. Not a gap.
- **CS decomposition (GVL §8.7.3).** Already STATED AND PROVEN as a theorem inside `43.05.08`
  (the Paige–Saunders GSVD construction). Covered.
- **Polar decomposition + its Newton-iteration computation (GVL §9.4.3).** The object (existence +
  uniqueness) is already proven in `01.01.12` (and `01.01.09/10/11`); the Newton/Higham iteration
  is a minor SVD-adjacent variant with no GVL-signature corpus pull. Not a gap.
- **Algebraic Riccati equation / Hamiltonian-matrix invariant-subspace solve.** Genuinely absent,
  but quintessential control-theory machinery with NO existing corpus anchor (unlike Sylvester/
  Lyapunov, which bridged to the shipped ODE-stability units `02.12.08`/`02.06.03`). GVL treats it
  only lightly. Shipping it would manufacture a downstream marginal unit — out of scope, consistent
  with the round-1 deferral of control-theory matrix equations beyond the dense solver.
- **Condition estimation (Hager/LAPACK-style 1-norm estimator).** Not standalone; already woven as
  a sub-topic into `43.03.03`, `43.06.11`, and `43.06.12` (sep estimation via the same factors).
  Not a gap.

## OUT OF SCOPE (re-confirmed — do NOT re-propose)

- Banded / tridiagonal / sparse direct methods, fill-in, reordering, fast Toeplitz solvers
  (Levinson/Schur/Durbin) — algorithm engineering on the LU/Cholesky/QR units, no theorem payoff.
- Block / partitioned (level-3 BLAS) recastings, cache-blocking, parallel performance — implementation
  re-castings, not new mathematics.
- IEEE-754 hardware detail and BLAS API specification — systems/CS, not the mathematics spine.

## RETURN SUMMARY

- **New genuine gaps:** 0 (DRY).
- **Candidates examined and rejected:** Jacobi eigenvalue method, symmetric tridiagonal
  bisection/Sturm, divide-and-conquer eigensolver, CS decomposition, polar decomposition + Newton
  iteration, algebraic Riccati equation, condition estimation.
- **GVL status vs corpus:** convergent / DRY.
- **File:** `plans/expansion/numerical-analysis/_audit/golub-van-loan.completeness2.md`
