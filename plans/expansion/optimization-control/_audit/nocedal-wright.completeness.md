# Completeness re-audit: Nocedal & Wright — *Numerical Optimization* (2nd ed.)

`source_book: nocedal-wright`
`source_curriculum: optimization-control`

Re-audit against the now-PRODUCED §44 corpus (36 shipped units, ch 01-08). The original
`nocedal-wright.gaps.md` 13-unit gap list (44.03.01-08, 44.04.01-05) has been fully produced
and shipped. This pass re-checks the NARROW question: any headline N-W method STILL genuinely
absent? Every candidate below was verified by filename grep + body grep across the whole
`content/` tree. Default = COVERED.

---

## STILL-ABSENT GAPS

### 44.03.09 — Newton & quasi-Newton methods for nonlinear systems of equations (Broyden)

- **id:** `44.03.09`
- **title:** Solving nonlinear systems $F(x)=0$: Newton's method in $\mathbb{R}^n$, Broyden's quasi-Newton method, and merit-function / trust-region globalization
- **spec:** The multivariate root problem $F:\mathbb{R}^n\to\mathbb{R}^n$, $F(x)=0$: the Newton step $J(x_k)\,p_k=-F(x_k)$ and its local quadratic convergence (the $\mathbb{R}^n$ Newton-Kantorovich / affine-invariant rate); **Broyden's "good" quasi-Newton update** — the least-change secant rank-one update $B_{k+1}=B_k+\frac{(y_k-B_k s_k)s_k^\top}{s_k^\top s_k}$ satisfying the secant equation $B_{k+1}s_k=y_k$ (with $y_k=F_{k+1}-F_k$), the Sherman-Morrison inverse update for the matrix-free solve, and **local superlinear convergence** (Broyden-Dennis-Moré); the merit function $\tfrac12\|F(x)\|^2$ and **line-search / trust-region globalization** (descent on the merit function, the Levenberg-Marquardt-style step), with the spurious-minimizer caveat; pointer to continuation/homotopy for poor starts. **Distinct from** root-finding `43.02.03` (scalar/system *Newton & secant* convergence only — no multivariate quasi-Newton update, no merit-function globalization) and from optimization quasi-Newton `44.03.04` (BFGS/DFP/SR1 build a *symmetric PD Hessian* model of $\nabla^2 f$; Broyden builds a *nonsymmetric* Jacobian model of $F$ — a genuinely different update and convergence theory). This is N-W ch 11, a headline chapter with no corresponding unit anywhere.
- **prereqs:** `43.02.03` (Newton & secant for root-finding — the convergence-proof base and the scalar/system Newton step), `44.03.04` (quasi-Newton secant updates / Sherman-Morrison — the optimization sibling Broyden generalizes from), `43.04.01` (least squares / linear solve — the Newton/Broyden inner step)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.10 — Derivative-free optimization: Nelder-Mead and model-based trust-region DFO

- **id:** `44.03.10`
- **title:** Derivative-free optimization: the Nelder-Mead simplex method, pattern/coordinate search, and model-based (interpolation) trust-region DFO with its convergence theory
- **spec:** Minimizing $f$ when gradients are unavailable/noisy/expensive. The **Nelder-Mead** downhill-simplex method (reflection, expansion, contraction, shrink) and its known non-convergence pathologies (McKinnon counterexample); **generating-set / pattern (compass) search** and its first-order global-convergence guarantee under a positive-spanning direction set; **model-based DFO**: building a fully-linear/fully-quadratic interpolation or regression model from sample points, the **poisedness / $\Lambda$-poised geometry condition** that controls model error, and the **derivative-free trust-region** algorithm with its global convergence to a stationary point (Conn-Scheinberg-Vicente theory). N-W ch 9, a headline chapter completely absent from the corpus; the model-based branch carries genuine convergence-theorem payoff (poisedness + trust-region globalization), distinct from every gradient-based unit (44.03.01-09) which assumes available derivatives.
- **prereqs:** `44.03.02` (trust-region framework — the globalization the model-based method reuses), `43.04.01` (least squares / interpolation — the regression model fit), `44.03.08` (finite differences — the derivative-supply alternative this unit dispenses with)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

---

## COVERED (re-verified against the now-larger corpus — not gaps)

All 13 originally-proposed N-W units are now PRODUCED and shipped; re-verifying the
re-audit candidate areas:

- **Line search / Wolfe / Zoutendijk** — `44.03.01` (shipped). COVERED.
- **Trust region / Cauchy point / dogleg** — `44.03.02` (shipped). COVERED.
- **Newton for optimization / modified Hessian** — `44.03.03` (shipped). COVERED.
- **Quasi-Newton BFGS / DFP / SR1 (for optimization)** — `44.03.04` (shipped). COVERED.
  (Broyden for *nonlinear systems* is the distinct missing sibling — gap 44.03.09.)
- **L-BFGS / truncated Newton-CG** — `44.03.05` (shipped). COVERED.
- **Nonlinear CG (Fletcher-Reeves / Polak-Ribière)** — `44.03.06` (shipped). COVERED.
- **Gauss-Newton / Levenberg-Marquardt (nonlinear least squares)** — `44.03.07` (shipped).
  COVERED. (N-W ch 10 "Least-Squares Problems" — the constrained-LS / large-residual
  variants are absorbed here; no separate gap.)
- **Finite differences / automatic differentiation (computing derivatives, N-W ch 8)** —
  `44.03.08` (shipped). COVERED.
- **KKT optimality / constraint qualifications / second-order conditions (N-W ch 12)** —
  `44.02.02` (kkt-conditions-constraint-qualifications, shipped) PLUS the active-set-QP unit
  `44.04.01`. COVERED. (The original audit's planned 44.04.01 "KKT for smooth NLP" was merged
  into the shipped `44.02.02`; the smooth-NLP optimality theorem the algorithms cite exists.)
- **Quadratic programming / active-set (N-W ch 16)** — `44.04.01` (active-set-quadratic-
  programming, shipped). COVERED.
- **Penalty / augmented Lagrangian / LANCELOT (N-W ch 17)** — `44.04.02` (penalty-augmented-
  lagrangian, shipped). COVERED.
- **Sequential quadratic programming (N-W ch 18)** — `44.04.03` (sequential-quadratic-
  programming, shipped). COVERED.
- **Interior-point for NLP (N-W ch 19)** — `44.04.04` (interior-point-nonlinear-programming,
  shipped). COVERED.
- **LP interior-point, the central path, and Mehrotra's predictor-corrector (N-W ch 14)** —
  `44.05.04` (interior-point-barrier-central-path, shipped) treats the perturbed KKT system,
  the central path, $\mathcal{N}_2$/$\mathcal{N}_{-\infty}$ neighborhoods, short-/long-step
  path-following, the $O(\sqrt n\,L)$ complexity, AND **Mehrotra's predictor-corrector** by
  name as the production algorithm; `44.04.04` gives the nonlinear-form predictor-corrector.
  COVERED — NOT a gap.
- **The simplex method & LP duality (N-W ch 13)** — `44.05.02` (lp-duality-simplex-method,
  shipped). COVERED. (The original audit deferred LP-simplex to the ch-05 lane; it has since
  been produced. No gap.)
- **Theory of constrained optimization beyond first-order KKT (N-W ch 12: second-order
  conditions, the critical cone, sensitivity)** — `44.02.02` + `44.04.01`. COVERED.
- **Calculating derivatives (N-W ch 8)** — `44.03.08`. COVERED.
- **First-order / proximal / SGD / mirror / ADMM (related families)** — `44.06.01-05`
  (shipped). Out of N-W's core but COVERED by the corpus.

## OUT OF SCOPE

- **Complementarity problems (LCP/NCP), variational inequalities, semismooth Newton** — N-W
  does not treat these as a headline chapter (only a brief mention in the IP/active-set
  context); body grep finds no genuine optimization unit, but the construction is a separate
  literature (Facchinei-Pang) better owned by a dedicated source than manufactured here. The
  perturbed-complementarity Newton step that N-W *does* use is already inside the shipped IP
  units `44.04.04` / `44.05.04`. No N-W-headline gap.
- **Continuation / homotopy methods for $F(x)=0$ (N-W ch 11 closing section)** — a short,
  low-theorem-payoff appendix; cross-referenced as a pointer inside `43.02.03` and folded into
  the Broyden unit's globalization pointer (44.03.09) rather than carved out as its own unit.
