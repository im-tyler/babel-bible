# Completeness audit — chapter 06-first-order-large-scale (post-seed, no prior formal audit)

Books audited: Beck, *First-Order Methods in Optimization* (SIAM 2017); Nesterov,
*Lectures on Convex Optimization* (Springer 2018); Bubeck, *Convex Optimization:
Algorithms and Complexity* (FnT ML 2015).

Existing shipped units in chapter 06: 44.06.01 subgradient; 44.06.02 proximal
operator / Moreau envelope / proximal-gradient (ISTA) / proximal point;
44.06.03 accelerated (Nesterov / FISTA); 44.06.04 ADMM / Douglas-Rachford;
44.06.05 stochastic-gradient / mirror descent.

Narrow question: headline first-order / large-scale methods STILL genuinely absent.
Default = COVERED. Three genuine gaps found, all high-value.

---

## GAP 1 — Frank-Wolfe / Conditional Gradient (the projection-free method)

- **id:** 44.06.06
- **title:** "The Frank-Wolfe (Conditional Gradient) Method"
- **slug:** frank-wolfe-conditional-gradient
- **chapter dir:** 06-first-order-large-scale
- **frontmatter section:** optimization-control
- **frontmatter chapter:** 06-first-order-large-scale
- **source_book:** beck
- **source_curriculum:** optimization-control
- **spec:** The projection-free first-order method for `min f(x)` over a compact convex
  set `C` with `f` L-smooth convex: each step calls the **linear minimization oracle**
  `s_k = argmin_{s in C} <grad f(x_k), s>` (an LP over `C` instead of a Euclidean
  projection) and moves `x_{k+1} = x_k + gamma_k (s_k - x_k)` with `gamma_k = 2/(k+2)`
  or exact line search. Establish the `O(1/k)` rate `f(x_k) - f* <= 2 L D^2/(k+2)` (D =
  diameter of C) via the curvature constant; the **Frank-Wolfe / duality gap**
  `g(x_k) = <grad f(x_k), x_k - s_k>` as a free certificate of suboptimality and natural
  stopping rule; the sparse/atomic structure of iterates (a convex combination of LMO
  vertices) and why this beats proximal/projected methods on the simplex, the nuclear-norm
  ball, and other "hard-to-project / easy-to-linearize" sets; the `O(1/k)` lower bound for
  vanilla FW (no acceleration to `O(1/k^2)` in general) and the **away-step / pairwise**
  variants restoring linear convergence on polytopes.
- **prereqs (verified to exist):**
  - 44.01.01  # convex sets and convex functions (compact convex feasible set, vertices)
  - 44.02.05  # subdifferential / gradient and the first-order optimality inequality
  - 44.06.02  # proximal/projected-gradient (the projection-based baseline FW replaces)
- **why a gap:** "Frank-Wolfe" / "conditional gradient" appears in `content/` ONLY as a
  1956 quadratic-programming history bib reference inside
  44.04.01-active-set-quadratic-programming (`@article{frankwolfe1956}` and one sentence of
  prose). The actual algorithm — LMO iteration, the `2/(k+2)` schedule, the `O(1/k)` rate,
  the duality-gap certificate, projection-free large-scale use, away-steps — is stated and
  proved NOWHERE. This is the single most significant omission in the chapter
  (Beck Ch. 13; Bubeck §3.3; Jaggi 2013 ICML).

## GAP 2 — Coordinate Descent and Block-Coordinate Methods

- **id:** 44.06.07
- **title:** "Coordinate Descent and Block-Coordinate Minimization"
- **slug:** coordinate-descent-block-coordinate
- **chapter dir:** 06-first-order-large-scale
- **frontmatter section:** optimization-control
- **frontmatter chapter:** 06-first-order-large-scale
- **source_book:** beck
- **source_curriculum:** optimization-control
- **spec:** Methods that update one coordinate (or one block) per step. Exact
  block-coordinate minimization and **coordinate-gradient descent**
  `x_{k+1} = x_k - (1/L_i) grad_i f(x_k) e_i`; the selection rules — cyclic,
  randomized (sampling coordinate `i` w.p. `L_i / sum_j L_j`), and Gauss-Southwell
  (greedy steepest); convergence theory: the classical convergence of exact block
  minimization for smooth convex `f` (and the Powell counterexample showing it can fail
  without convexity/uniqueness), and the `O(1/k)` expected-rate analysis of **randomized
  coordinate descent** (Nesterov 2012) with the coordinate-wise Lipschitz constants;
  extension to the separable composite model `f(x) + sum_i g_i(x_i)` (coordinate
  proximal-gradient), which is exactly why CD dominates on LASSO / group-LASSO / SVM-dual
  where each coordinate prox is a scalar soft-threshold; the cheap-per-iteration argument
  that makes CD the method of choice when partial-gradient evaluation is `O(1)`.
- **prereqs (verified to exist):**
  - 44.01.01  # convex sets and convex functions
  - 44.02.05  # subdifferential / first-order optimality (block-wise stationarity)
  - 44.06.02  # proximal-gradient (the coordinate prox step is its 1-D restriction)
- **why a gap:** "coordinate descent" / "block coordinate" appears in `content/` only as
  an anecdote in 44.03.04-quasi-newton (Davidon's frustration with a "coordinate-descent
  code") and unrelatedly in symplectic 05.09.06. No unit develops the iteration, the
  selection rules, or the randomized `O(1/k)` analysis. Genuine high-value gap
  (Nesterov §3 / Wright 2015 survey; Beck §11.4 block-descent).

## GAP 3 — Nesterov's Smoothing Technique for Structured Nonsmooth Problems

- **id:** 44.06.08
- **title:** "Nesterov Smoothing of Structured Nonsmooth Functions"
- **slug:** nesterov-smoothing-structured-nonsmooth
- **chapter dir:** 06-first-order-large-scale
- **frontmatter section:** optimization-control
- **frontmatter chapter:** 06-first-order-large-scale
- **source_book:** nesterov
- **source_curriculum:** optimization-control
- **spec:** Nesterov's 2005 "Smooth minimization of non-smooth functions" construction:
  for a nonsmooth `f(x) = max_{u in Q} { <Ax, u> - phi(u) }` of max / saddle type, replace
  it by `f_mu(x) = max_{u in Q} { <Ax, u> - phi(u) - mu d(u) }` with a strongly convex
  prox-function `d`; show `f_mu` is `C^1` with `(||A||^2/mu)`-Lipschitz gradient and
  `f_mu <= f <= f_mu + mu D`, then run the **accelerated** gradient method of [44.06.03]
  on `f_mu` and optimize `mu` to obtain the `O(1/k)` rate `f(x_k) - f* = O(||A|| D / k)` —
  an order-of-magnitude improvement over the subgradient method's `O(1/sqrt(k))` of
  [44.06.01], achieved by *exploiting structure* the black-box model cannot see. Contrast
  with the **Moreau-Yosida / Moreau-envelope** smoothing already in 44.06.02 (which is the
  prox-based, structure-free smoothing): this unit is the conjugate/saddle smoothing whose
  payoff is acceleration to `O(1/k)`.
- **prereqs (verified to exist):**
  - 44.02.03  # Fenchel duality / conjugate as a modeling tool (the max-type representation)
  - 44.06.01  # subgradient method (the O(1/sqrt(k)) baseline this beats)
  - 44.06.03  # accelerated gradient (the engine applied to the smoothed surrogate)
- **why a gap:** Moreau-envelope smoothing is covered (44.06.02 Theorem 2), but Nesterov's
  *explicit structural smoothing* of max-type nonsmooth functions plus acceleration to
  `O(1/k)` — a headline Nesterov result (Nesterov 2005; Beck §10.8 / Ch. on smoothing;
  Bubeck §3.5) — is stated nowhere. `grep -riE "nesterov smoothing|smoothing technique"`
  over `content/` returns no hit for this construction. Genuine gap.

---

## COVERED (checked, not gaps)

- **Gradient descent for smooth convex, the basic `O(1/k)`** — COVERED in 44.06.02:
  the descent lemma and the `O(1/k)` proximal-gradient bound reduce to plain gradient
  descent in the `g = 0` case, stated explicitly (lines 233, 239, 263, 298, 522), with the
  strongly-convex linear `(1-1/kappa)^k` rate as Theorem 1 (line 470).
- **Proximal point method** — COVERED in 44.06.02 Theorem 2 (line 472), as gradient
  descent on the Moreau envelope / the `f = 0` case of forward-backward; also referenced
  in 44.06.04, 44.04.02, 44.02.05.
- **Moreau-Yosida / Moreau-envelope smoothing** — COVERED in 44.06.02 (Moreau envelope as
  a `C^1` `(1/lambda)`-Lipschitz-gradient smoothing, Theorem 2). (Nesterov *structural*
  smoothing is the distinct GAP 3 above.)
- **Moreau decomposition / resolvent identity `prox = (I + lambda d f)^{-1}`** — COVERED in
  44.06.02 (synthesis, line 480) and 44.02.03 (Moreau identity, line 452).
- **ADMM / augmented Lagrangian / Douglas-Rachford / consensus & sharing decomposition** —
  COVERED in 44.06.04 (full unit, incl. Eckstein-Bertsekas three-way identification and the
  consensus split that is the dual-decomposition use case).
- **Mirror descent / Bregman prox / entropic (exponentiated-gradient) update** — COVERED in
  44.06.05.
- **Stochastic gradient descent (`O(1/sqrt(k))`, strongly-convex `O(1/k)`)** — COVERED in
  44.06.05.
- **FISTA / accelerated proximal gradient / estimate sequences / `O(1/k^2)` and matching
  lower bound** — COVERED in 44.06.03.
- **Subgradient method (`O(1/sqrt(k))`, Polyak step, matching `Omega(1/sqrt(k))` lower
  bound)** — COVERED in 44.06.01.

## BORDERLINE — judged COVERED / out of scope (NOT proposed)

- **Primal-dual hybrid gradient (Chambolle-Pock / PDHG)** — named in `content/` only as a
  member of the "primal-dual splitting family" in bridge/synthesis prose of 44.06.04
  (lines 263, 450) and 44.02.03; no unit develops its saddle-point iteration or `O(1/k)`
  analysis. Defensible as a 4th gap, but withheld: it is closely subsumed by the
  Douglas-Rachford / proximal-splitting machinery of 44.06.04 and the conjugate-prox setup
  of 44.02.03, so per the brief's default-to-COVERED bias it does not clear the bar that
  Frank-Wolfe / coordinate-descent / Nesterov-smoothing clearly do. Flag for a future audit
  if the chapter is expanded further.
- **Dual decomposition / dual subgradient ascent** — the augmented-Lagrangian decomposition
  and consensus form are COVERED in 44.06.04; the plain (non-augmented) dual-subgradient
  scheme is a thin specialization of 44.06.01 applied to the dual function and is not a
  distinct headline method warranting its own unit.
