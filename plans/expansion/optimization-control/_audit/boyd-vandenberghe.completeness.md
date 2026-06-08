# Completeness re-audit — Boyd & Vandenberghe, *Convex Optimization* (Cambridge, 2004)

- **source_book:** `boyd-vandenberghe`
- **source_curriculum:** `optimization-control`
- **target section:** `content/44-optimization-control/` (frontmatter `section: optimization-control`)
- **date:** 2026-06-07
- **context:** §44 is now PRODUCED (36 shipped units, 44.01.01–44.08.03). This is a re-audit
  against the now-mature corpus, narrowly hunting for any headline Boyd theorem/method still
  genuinely absent. Default = COVERED. Every candidate below was grepped (filenames + bodies)
  across the whole `content/` tree.

## Verdict

The book is now **very well covered**. The convex-modeling / duality / conic / interior-point /
first-order payload that the pre-production audit flagged is all shipped, and the candidate
"hard" topics check out as already present: robust optimization, SDP relaxations
(max-cut / Goemans–Williamson / Lovász θ), the minimax theorem (von Neumann / Sion),
ℓ1/LASSO + soft-thresholding, Chebyshev/ℓ∞ fitting via dual norms, and geometric programming /
change-of-variables are all genuinely treated. **Two** genuine gaps remain, both from Boyd's
ch. 4 (*Convex optimization problems*) — the **problem-class taxonomy** layer that the produced
units skipped in favor of the theory (ch. 2–3) and algorithm (ch. 9–11) spines:

1. quasiconvex optimization solved by **bisection over convex feasibility problems**; and
2. **multicriteria / vector (Pareto) optimization** and scalarization.

Both have a natural home in the modeling chapter `01-convex-sets-functions` (free slots
44.01.04, 44.01.05). Quasiconvexity is *defined* in 44.01.01 but the *solution method* is
absent; Pareto/vector optimization has **zero** optimization-grade presence anywhere (the only
"Pareto" hits in the corpus are welfare-economics efficiency in `content/23-world/01-economics/`,
a different concept).

---

## GENUINE GAPS (still absent)

### 44.01.04 — Quasiconvex optimization and the bisection method
- **spec:** Quasiconvex programs $\min f_0(x)$ s.t. convex constraints, where $f_0$ is
  quasiconvex (not convex). The key device: a family of convex sublevel-set representations
  $f_0(x)\le t \iff \phi_t(x)\le 0$ with $\phi_t$ convex and nonincreasing in $t$ (e.g. the
  linear-fractional objective $\frac{c^\top x+d}{e^\top x+f}$, with $\phi_t(x)=c^\top x+d-t(e^\top x+f)$).
  The **bisection algorithm**: solve a sequence of convex *feasibility* problems "is
  $\{x: \phi_t(x)\le0,\ \text{constraints}\}$ nonempty?", halving the bracket on $t^\star$ each
  step, with the explicit $\lceil\log_2((u-l)/\epsilon)\rceil$ iteration count. Linear-fractional
  programming as the worked instance. Distinct from 44.01.01 (which gives only the quasiconvexity
  *definition* and the sublevel-set characterization, not the solution method) and from the
  bisection-as-rootfinding mentions in 43.* / 44.04.04 (Newton-system regularization, unrelated).
- **prereqs:** `44.01.01` (quasiconvexity, sublevel sets, convex functions), `44.02.01`
  (convex feasibility as the degenerate convex program), `44.05.01` (conic feasibility as the
  per-step subproblem solver)
- **chapter:** `01-convex-sets-functions` · **section:** `optimization-control` · frontmatter
  `chapter: convex-sets-functions`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.01.05 — Multicriteria and vector (Pareto) optimization, scalarization, and trade-off curves
- **spec:** Vector-valued optimization $\min f_0(x)\in\mathbb{R}^q$ with respect to a proper cone
  $K$ (typically $\mathbb{R}^q_+$); the distinction between an **optimal** point (dominates all
  others) and the generic **Pareto-optimal / efficient** point (not dominated by any feasible
  point); the Pareto frontier / optimal trade-off curve. The **scalarization theorem**: minimizing
  the weighted sum $\lambda^\top f_0(x)$ for $\lambda\succ_{K^*}0$ yields a Pareto-optimal point,
  and for convex vector problems *every* Pareto-optimal point arises from some $\lambda\succeq_{K^*}0$
  (sweeping $\lambda$ traces the whole frontier), proved by separating-hyperplane on the achievable
  set $\mathcal{A}+K$. Regularized least-squares ($\min(\|Ax-b\|^2,\|x\|^2)$) as the canonical
  bicriterion example. Entirely absent from the optimization corpus — the only "Pareto" units are
  welfare economics (`23.01.*`), a different notion.
- **prereqs:** `44.01.01` (convex sets, proper cones, generalized inequalities), `44.02.01`
  (separating hyperplane / weighted-sum support of the achievable set), `44.05.01`
  (dual cone $K^*$, generalized inequalities)
- **chapter:** `01-convex-sets-functions` · **section:** `optimization-control` · frontmatter
  `chapter: convex-sets-functions`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

---

## COVERED (not gaps)

Every candidate area from the audit prompt was grepped; each is already treated:

- **Robust optimization / ellipsoidal data uncertainty** — `44.05.01` (Worked-example "Robust
  LP": the $a\in\{\bar a+Pu:\|u\|_2\le1\}$ constraint reduced to the SOCP constraint
  $\|P^\top x\|_2\le b-\bar a^\top x$; "the canonical robust-optimization reduction"). Synthesis
  also calls out robust optimization as an LMI/conic application.
- **Chance constraints** — `44.05.01` (the Gaussian/ellipsoidal chance constraint
  $\mathrm{Prob}(a^\top x\le b)\ge\eta$ is exactly the ellipsoidal-uncertainty SOCP move above;
  no separate probabilistic-programming theorem in B&V beyond this reduction).
- **Semidefinite relaxations beyond conic basics** — `44.05.01` (full Worked example deriving the
  max-cut SDP relaxation $\max\tfrac14\langle L,X\rangle$ over PSD unit-diagonal $X$;
  Goemans–Williamson 0.878 randomized rounding; the **Lovász θ-function** SDP with
  $\alpha(G)\le\vartheta(\bar G)\le\chi(G)$; mention of sum-of-squares / Lasserre hierarchies).
- **Minimax / total variation / saddle points** — `44.02.01` (the max-min inequality, the
  saddle-point ⇔ optimal-pair proposition, **von Neumann's minimax theorem** and **Sion's
  generalization** as the abstract source of LP duality and matrix-game value). "Total variation"
  in B&V is an ℓ1-type denoising application, subsumed by the prox/ℓ1 machinery below.
- **ℓ1 / LASSO / sparse recovery / soft-thresholding** — `44.06.02` (prox of $\lambda\|\cdot\|_1$ =
  soft-thresholding, ISTA for LASSO), `44.06.03` (FISTA), `44.02.03` (the ℓ1-penalty → ℓ∞-dual-
  constraint Fenchel reduction).
- **Approximation & fitting / ℓ∞ (Chebyshev) approximation / dual-norm fitting** — `44.02.03`
  (dual norm of ℓ1 is ℓ∞, $\|A^\top y\|_\infty\le\tau$ box-image; the conjugate-of-a-norm =
  indicator-of-dual-ball pair), `44.03.07` (Gauss–Newton / Levenberg–Marquardt nonlinear least
  squares). B&V ch. 6 is an applications chapter; the *modeling machinery* is covered.
- **Disciplined convex programming / problem transformations / change of variables** — `44.05.03`
  (geometric programming convexified by the $y=\log x$ change of variables — Boyd's signature
  "non-obviously-convex made convex by a transform"); epigraph form and convexity-preserving
  operations in `44.01.01`. The DCP *software discipline* (CVX) is a tooling methodology, not
  theorem-level math — out of scope.
- **Quasiconvexity (definition + sublevel-set characterization)** — `44.01.01` (Proposition:
  sublevel sets of a convex function are convex; convex sublevel sets ⇔ quasiconvexity; the
  $\sqrt{|x|}$ counterexample). NB: only the *definition*; the bisection *solution method* is the
  genuine gap 44.01.04.
- **Lagrange duality / KKT / Fenchel / Farkas / subdifferential** — `44.02.01`–`44.02.05` (full).
- **Conic LP / SOCP / SDP / LP-duality / interior-point / barrier / central path** —
  `44.05.01`, `44.05.02`, `44.05.04` (full).
- **Newton / quasi-Newton / line-search / trust-region / SQP / active-set / aug-Lagrangian** —
  `44.03.*`, `44.04.*` (full — Nocedal–Wright lane).
- **First-order: subgradient / proximal / accelerated / ADMM / SGD / mirror descent** —
  `44.06.01`–`44.06.05` (full).

## OUT OF SCOPE

- **The ellipsoid method (Khachiyan).** Appears only as historical mentions in `44.05.02` and
  `44.05.04` ("Khachiyan's 1979 ellipsoid method settled LP ∈ P without practical speed"). It is
  not a B&V *headline* method — B&V treat interior-point as the polynomial-time engine (captured in
  `44.05.04`) and mention the ellipsoid method only in passing. Manufacturing a standalone unit
  would over-weight a method the book itself sidelines; the historical note in `44.05.02` suffices.
- **B&V applications chapters (ch. 4 examples, ch. 6 approximation/fitting, ch. 7 statistical
  estimation, ch. 8 geometry).** Worked applications, not theorem-level math; the modeling
  machinery they exercise is all captured above. (The two proposed gaps are *formulation theory*
  from ch. 4, not applications.)
- **DCP / CVX software discipline.** Tooling methodology, not mathematics.
- **Numerical-linear-algebra appendix (App. C).** Cholesky / block elimination / Schur complement
  already in `43.03.*`, used as machinery.

---

## RETURN SUMMARY
- **Still-absent gaps:** 2 — `44.01.04` (quasiconvex optimization / bisection),
  `44.01.05` (multicriteria / vector / Pareto optimization + scalarization)
- **COVERED:** all other candidate areas (robust opt, chance constraints, SDP relaxations,
  minimax, ℓ1/LASSO, ℓ∞ fitting, GP/change-of-variables, quasiconvexity definition) + full
  spine coverage 44.02–44.08
- **OUT OF SCOPE:** 4 (ellipsoid method, applications chapters, DCP/CVX tooling, NLA appendix)
- **File:** `plans/expansion/optimization-control/_audit/boyd-vandenberghe.completeness.md`
