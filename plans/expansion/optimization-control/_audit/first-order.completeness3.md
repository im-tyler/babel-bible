# Completeness audit round 3 (final convergence check) — chapter 06-first-order-large-scale

**Result: DRY: 0 new gaps. Chapter converged — complete.**

Books re-checked: Beck, *First-Order Methods in Optimization* (SIAM 2017);
Nesterov, *Lectures on Convex Optimization* (Springer 2018, 2nd ed.);
Bubeck, *Convex Optimization: Algorithms and Complexity* (FnT ML 2015).

Narrow question (final): is ANY headline first-order / large-scale method still
genuinely absent? Round 1 found 3 gaps (Frank-Wolfe, coordinate descent,
Nesterov smoothing — all shipped). Round 2 added the last borderline residual
(Chambolle-Pock / PDHG, shipped as 44.06.09) and rejected proximal-Newton,
bundle method, gradient-sampling, and extragradient as below-bar / out-of-scope.
This round did a fresh filename + body grep over the whole corpus for any
remaining candidate and found nothing clearing the bar. **0 still-absent gaps.**

## Shipped units in chapter 06 (9, full headline coverage)

| id | method |
|----|--------|
| 44.06.01 | subgradient method (O(1/√k), Polyak step, matching Ω(1/√k) lower bound) |
| 44.06.02 | proximal operator / Moreau envelope / proximal-gradient (ISTA) / proximal point |
| 44.06.03 | accelerated gradient (Nesterov / FISTA, O(1/k²), estimate sequences, restart) |
| 44.06.04 | ADMM / Douglas-Rachford / augmented Lagrangian / consensus decomposition |
| 44.06.05 | stochastic gradient / mirror descent / Bregman prox / variance reduction |
| 44.06.06 | Frank-Wolfe / conditional gradient (LMO, O(1/k), duality-gap certificate) |
| 44.06.07 | coordinate descent / block-coordinate minimization |
| 44.06.08 | Nesterov smoothing of structured nonsmooth functions |
| 44.06.09 | Chambolle-Pock / primal-dual hybrid gradient (PDHG) |

## COVERED — candidates re-checked this round, all subsumed

- **Heavy-ball / Polyak momentum** — COVERED in 44.06.03 (definition, strongly-convex
  constant-momentum scheme Theorem 2, and the explicit note that constant-β heavy-ball
  does NOT achieve the optimal convex rate without look-ahead; lines 217-228, 318).
  Not a distinct headline unit — it is the unaccelerated foil to FISTA.
- **Variance reduction — SVRG / SAG / SAGA** — COVERED in 44.06.05 Theorem 3 (the
  finite-sum linear-rate result `(1 - c/κ)^k` with the SVRG snapshot correction and
  the SAG/SAGA gradient table), plus full history (Le Roux-Schmidt-Bach 2012,
  Johnson-Zhang 2013, Defazio et al. 2014) and bib entry. Fully developed, not a stub.
- **Adaptive restart (function / gradient restart)** — COVERED in 44.06.03 Theorem 5.
- **Mini-batch SGD / Robbins-Monro stochastic approximation** — COVERED in 44.06.05.
- **Level method / bundle method** — referenced in 44.06.01 (locator §3.2.1; Polyak-step
  → level/bundle extension at lines 434, 444) as the natural f*-estimation extension of
  the subgradient method. Round 2 rejected bundle as below the headline-unit bar; the
  corpus references are provenance prose, not a gap. Confirmed still below bar.
- **Dual subgradient ascent / dual decomposition** — COVERED via 44.06.04 (augmented
  decomposition / consensus) and as a thin dual specialization of 44.06.01.

## OUT OF SCOPE / below bar — confirmed absent and correctly so

- **AdaGrad / Adam / RMSProp (adaptive per-coordinate step heuristics)** — `adagrad`,
  `rmsprop` return 0 hits; `Adam`/`RDA` hits are all false positives (English word /
  unrelated chapters). These are ML-engineering adaptive heuristics whose convex
  theorem-level payoff (regret-bound AdaGrad) is a thin specialization of the mirror-
  descent / online recursion already in 44.06.05; no headline-unit warrant at this bar.
- **Dual averaging / Nesterov's RDA** — 0 genuine hits; a variant of the mirror-descent
  recursion (44.06.05), not a distinct headline method.
- **Extragradient / Korpelevich / mirror-prox / Tseng forward-backward-forward** — 0
  hits corpus-wide; round-2 rejection stands. Saddle-point / VI iteration is now
  represented at the chapter's headline level by Chambolle-Pock (44.06.09); the
  extragradient family is a monotone-VI specialization below the convex-optimization
  headline bar for this chapter.
- **Proximal-Newton, gradient-sampling** — 0 hits; round-2 rejection stands (second-order
  / nonconvex-nonsmooth specializations, not first-order large-scale headline methods).

## Verdict

The chapter is **converged**. Every headline first-order / large-scale method in
Beck, Nesterov, and Bubeck has a dedicated unit or is explicitly developed inside one.
No new unit proposed.
