# Completeness re-audit (ROUND 2) — Boyd & Vandenberghe + Rockafellar (convex)

- **source_books:** `boyd-vandenberghe`, `rockafellar`
- **source_curriculum:** `optimization-control`
- **target section:** `content/44-optimization-control/` (frontmatter `section: optimization-control`)
- **date:** 2026-06-07
- **context:** §44 now has 46 shipped units. Round-1's three flagged gaps are resolved:
  44.01.04 (quasiconvex optimization / bisection) and 44.01.05 (multicriteria / Pareto /
  scalarization) are SHIPPED; 44.02.06 (saddle-functions apparatus) was correctly skipped as
  below-bar (its theorem-level payoffs — minimax existence, saddle-point characterisation of
  duality, $T=(\partial_x K,-\partial_y K)$ maximal-monotone — are covered in 02.11.02 / 44.02.01 /
  44.06.04). This round narrowly re-greps for any STILL-absent headline convex theorem.

## Verdict

**DRY: 0 new gaps.** After round 1, no headline convex-optimization / convex-analysis theorem
from Boyd & Vandenberghe or Rockafellar remains genuinely absent from `content/`. Every candidate
was re-verified by filename + body grep across the whole corpus. The one previously-unexamined
candidate surfaced this round — the **S-procedure / S-lemma** (B&V App. B) — has its theorem-level
payoff already covered and is itself an appendix result, not a main-development headline; recorded
under OUT OF SCOPE with the covering evidence. This is the expected, desired DRY outcome.

---

## COVERED — re-verified by grep this round

- **S-lemma payoff: exact global solution of the (nonconvex) trust-region subproblem / single-
  quadratic-constraint QCQP strong duality** — `44.03.02` Theorem 1 (proved): $p^*$ is a *global*
  solution of $\min_{\|p\|\le\Delta} g^\top p+\tfrac12 p^\top Bp$ iff $\exists\lambda\ge0$ with
  $(B+\lambda I)\succeq0$, $(B+\lambda I)p^*=-g$, $\lambda(\Delta-\|p^*\|)=0$ — i.e. the zero-gap /
  exactness of the SDP-equivalent relaxation, which is exactly the S-lemma's headline consequence.
  Hard case + secular equation (Theorem 2) and global convergence (Theorem 3) also present.
- **Separating / supporting hyperplane theorems** — `44.01.02`, `44.01.01`, `44.02.04`, `02.11.02`.
- **Hahn-Banach (analytic + geometric/separation)** — `02.11.02`, `44.02.05`, `44.01.01`, `44.05.01`.
- **Jensen's inequality** — stated/used in `44.01.01` (and probability lane).
- **Schur complement (PSD / SDP modeling)** — `44.01.01`, `44.05.01`, `44.04.01`, `44.02.02`.
- **Lagrangian duality, weak/strong duality, Slater, saddle-point/game view** — `44.02.01` (full).
- **Sensitivity / shadow prices / multiplier = $-\partial p^\star/\partial u_i$** — `44.02.01`
  (theorem + proof via supporting hyperplane to the value set) and `44.02.02` (IFT smooth refinement);
  LP sensitivity in `44.05.02`.
- **KKT + constraint qualifications, complementary slackness** — `44.02.02` (full).
- **Fenchel duality / conjugate modeling / Fenchel-Moreau biconjugation** — `44.02.03`, `37.07.03`.
- **Farkas + theorems of the alternative (Gordan/Stiemke/Motzkin)** — `44.02.04` (proved).
- **Subdifferential calculus, maximal monotonicity, Moreau envelope/decomposition** — `44.02.05`,
  `44.06.02`, `44.06.04`.
- **Carathéodory / relative interior; recession cones / polyhedral / Minkowski-Weyl** —
  `44.01.02`, `44.01.03`.
- **Quasiconvex optimization (bisection); multicriteria / Pareto / scalarization** — `44.01.04`,
  `44.01.05` (round-1 gaps, now SHIPPED).
- **Minimax (von Neumann / Sion / Ky Fan), Krein-Milman** — `02.11.02`, `44.02.01`.
- **Robust LP / ellipsoidal uncertainty / chance constraints; SDP relaxations (max-cut /
  Goemans-Williamson / Lovász θ); GP / change-of-variables; conic LP/SOCP/SDP; LP duality / simplex;
  interior-point / barrier / central path** — `44.05.01`–`44.05.04`.
- **ℓ1/LASSO/soft-thresholding/ISTA/FISTA; ℓ∞ (Chebyshev) dual-norm fitting; full first-order
  spine (subgradient/prox/Nesterov/ADMM/SGD/mirror/Frank-Wolfe/coord/smoothing)** —
  `44.06.01`–`44.06.08`, `44.02.03`.

## OUT OF SCOPE

- **S-procedure / S-lemma as a standalone theorem-of-the-alternative for quadratic forms**
  (B&V Appendix B, ~2 pages). Not present anywhere as an abstract unit (the only "s-procedure"
  grep hits in the corpus are an unrelated frontmatter `slug` in `44.02.04` and Weierstrass/
  Cartan "lemma" false positives). However: (i) it is a B&V *appendix* result, not a main-text
  headline, and (ii) its theorem-level payoff — exactness / zero duality gap of the single-
  quadratic-constraint nonconvex QCQP, of which the trust-region subproblem is the canonical
  instance — is fully proved in `44.03.02` (Theorem 1). Manufacturing a standalone S-lemma unit
  would over-weight an appendix whose payload is already covered. Defer.
- **Saddle-function apparatus (Rockafellar §33-37)** — round-1 `44.02.06`, correctly skipped as
  below-bar; theorem-level payoffs covered (02.11.02 / 44.02.01 / 44.06.04).
- **Ellipsoid method, DCP/CVX tooling, applications chapters, NLA appendix, infinite-dim LCTVS** —
  unchanged from round 1 (see boyd-vandenberghe.completeness.md / rockafellar.completeness.md).

---

## RETURN SUMMARY
- **Still-absent gaps:** 0 (DRY)
- **File:** `plans/expansion/optimization-control/_audit/convex.completeness2.md`
