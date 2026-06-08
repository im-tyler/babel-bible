# Completeness audit (round 2) — §44 algorithm chapters (ch03 / ch04 / ch06)

Books re-checked: **Nocedal & Wright**, *Numerical Optimization* (2nd ed.); **Beck**,
*First-Order Methods in Optimization* (SIAM 2017); **Nesterov**, *Lectures on Convex
Optimization* (2018); **Bubeck**, *Convex Optimization: Algorithms and Complexity* (2015).

Round 1 already shipped Broyden (44.03.09), DFO (44.03.10), Frank-Wolfe (44.06.06),
coordinate-descent (44.06.07), Nesterov-smoothing (44.06.08). Chapter 06 currently stops at
44.06.08, so 44.06.09 is the next free id (verified: `find content -name "44.06.*"`).

NARROW question: after round 1, is any headline numerical-optimization / first-order /
large-scale method from these books STILL genuinely absent from `content/`? Default = COVERED.
Every candidate below was checked by filename grep + body grep across the whole `content/`
tree. **Result: exactly ONE genuine residual** (Chambolle-Pock / PDHG, the round-1
borderline-deferred item). All other named residuals are out of scope or covered-adjacent.

---

## STILL-ABSENT GAP (1)

### 44.06.09 — The Chambolle-Pock primal-dual hybrid gradient (PDHG) method

- **id:** `44.06.09`
- **title:** "The Chambolle-Pock Primal-Dual Hybrid Gradient Method"
- **slug:** chambolle-pock-primal-dual-hybrid-gradient
- **chapter dir:** `06-first-order-large-scale`
- **frontmatter section:** `optimization-control`
- **frontmatter chapter:** `06-first-order-large-scale`
- **source_book:** `beck`
- **source_curriculum:** `optimization-control`
- **spec:** The first-order saddle-point method for the structured problem
  `min_x F(Kx) + G(x)` written as the saddle `min_x max_y <Kx, y> + G(x) - F^*(y)` with
  `F, G` proper closed convex and `K` a bounded linear map. The Chambolle-Pock iteration:
  the dual proximal-ascent step `y^{k+1} = prox_{σ F^*}(y^k + σ K x̄^k)`, the primal
  proximal-descent step `x^{k+1} = prox_{τ G}(x^k - τ K^* y^{k+1})`, and the
  **over-relaxation / extrapolation** `x̄^{k+1} = x^{k+1} + θ(x^{k+1} - x^k)` (θ = 1).
  Establish: the **step-size condition** `τ σ ‖K‖² < 1` (equivalently `τ σ L² ≤ 1` with
  `L = ‖K‖`) as the stability requirement; the `O(1/N)` **ergodic** convergence of the
  primal-dual gap on the averaged iterate (Chambolle-Pock Theorem 1); the **accelerated
  O(1/N²)** variant when `G` (or `F^*`) is strongly convex, with the dynamic update of
  `τ_k, σ_k, θ_k`; and the **linear convergence** rate when both are strongly convex.
  Place the method inside the monotone-operator / proximal-splitting picture of [44.06.04]:
  PDHG is a preconditioned / forward-backward-on-the-saddle reading of the same
  `0 ∈ (A + B)(z)` inclusion, but unlike ADMM it requires **no inner linear solve and no
  matrix inversion of `K`** — only `prox_G`, `prox_{F^*}`, and the two matrix-vector
  products `K x`, `K^* y` per iteration, which is exactly why it dominates ADMM/Douglas-
  Rachford on large structured problems (TV denoising/deblurring, the ROF model, optimal
  transport, imaging inverse problems) where `prox` of `F∘K` has no closed form and inverting
  `K^*K` is prohibitive. Contrast: the conjugate/saddle representation `F(Kx) = max_y {...}`
  is exactly the max-type model that [44.06.08] *smooths and accelerates*; PDHG instead solves
  the un-smoothed saddle directly via two proxes, getting the same `O(1/N)` without choosing a
  smoothing parameter `μ` in advance.
- **prereqs (verified to exist):**
  - `44.02.03`  # Fenchel duality / conjugate / `prox_{F^*}` and the saddle representation
  - `44.06.02`  # proximal operator / forward-backward / resolvent — the primitive PDHG iterates
  - `44.06.04`  # ADMM / Douglas-Rachford / monotone-operator splitting — the family PDHG joins
- **why a genuine gap:** `grep -riE "chambolle.?pock|primal.?dual hybrid|PDHG"` over `content/`
  returns the name ONLY as cross-reference prose, never as a developed method:
  - 44.06.08 (Nesterov-smoothing) names it once as "a precursor to the Chambolle-Pock / ADMM
    saddle iterations" in a forward-pointer (`why:` field, line 65) — no iteration, no rate.
  - 44.06.04 (ADMM) develops the *Douglas-Rachford / forward-backward* monotone-operator
    machinery and lists "primal-dual splitting families ... all of which are averaged-operator
    iterations" (lines 263, 450) but never writes the PDHG recursion, the `τσ‖K‖²<1`
    condition, the ergodic-gap `O(1/N)` theorem, or the strongly-convex `O(1/N²)`
    acceleration.
  - 44.05.04's "primal-dual" hits are unrelated (interior-point primal-dual barrier).
  The explicit Chambolle-Pock iteration, its step-size stability bound, its ergodic-gap
  convergence theorem, and its acceleration are stated and proved **nowhere**. This is a
  headline first-order method (Chambolle & Pock, JMIV 2011 — one of the most-cited imaging-
  optimization results; Beck Ch. 12 "primal-dual"), it is *not* subsumed by ADMM (no linear
  solve; a genuinely different iteration and step-size theory) and *not* by Nesterov-smoothing
  (un-smoothed direct saddle solve). It clears the default-to-COVERED bar that the other
  round-2 candidates do not. (Round 1 explicitly flagged this as the borderline-deferred item
  "for a future audit if the chapter is expanded further" — the chapter has now been expanded
  to 44.06.08, so the deferral resolves to a propose.)

---

## COVERED / NOT-A-GAP (round-2 candidates checked, withheld)

- **Proximal-Newton / proximal quasi-Newton** — `grep -riE "proximal.?newton|proximal quasi"`
  over `content/` returns ZERO hits, so it is literally absent; nonetheless WITHHELD per the
  strong default-to-COVERED bias. It is not a headline chapter in any of the four source books
  (Beck/Nesterov/Bubeck treat it at most in passing; N-W does not cover it), and it sits as a
  second-order refinement bridging the prox-gradient of [44.06.02] and the quasi-Newton Hessian
  models of [44.03.04] rather than as a distinct large-scale workhorse. Low marginal value; not
  a genuine high-value gap. Flag only if §44 is deliberately deepened toward second-order
  composite methods.
- **Bundle method (for nonsmooth convex optimization)** — named only as a forward-pointer in
  44.06.01 ("the practical entry point to bundle methods", line 434; "Polyak's step ...
  generalises to the level and bundle methods", line 444) and in the master-source locator
  ("the relation to the level/bundle methods", line 24). The iteration itself is not developed.
  WITHHELD: it is a thin extension of the cutting-plane / aggregated-subgradient family already
  motivated in 44.06.01, and it is not a headline chapter in Beck/Nesterov/Bubeck/N-W (it
  belongs to the Hiriart-Urruty–Lemaréchal literature, a better-owned-elsewhere source). Per the
  default-to-COVERED bias it does not clear the bar Chambolle-Pock clears.
- **Gradient sampling (Burke–Lewis–Overton)** — `grep -riE "gradient sampling"` returns ZERO
  hits, but this is a niche nonsmooth-nonconvex method, not a headline of any of the four named
  source books. OUT OF SCOPE — would be manufactured, not sourced.
- **Extragradient / Arrow-Hurwicz / Korpelevich** — appears only as incidental prose in
  44.02.03 / 44.06.02 / 44.06.04; not a standalone headline method in these books. The
  saddle-point first-order content the corpus needs is exactly the Chambolle-Pock gap above; a
  separate extragradient unit is not warranted by these sources.
- **All round-1 items** — Frank-Wolfe (44.06.06), coordinate-descent (44.06.07),
  Nesterov-smoothing (44.06.08), Broyden (44.03.09), DFO (44.03.10): SHIPPED. COVERED.
- **ch03 / ch04 core (N-W)** — line-search/Wolfe 44.03.01, trust-region 44.03.02,
  Newton 44.03.03, quasi-Newton 44.03.04, L-BFGS/truncated-Newton 44.03.05, nonlinear-CG
  44.03.06, Gauss-Newton/LM 44.03.07, finite-diff/AD 44.03.08, active-set-QP 44.04.01,
  penalty/aug-Lagrangian 44.04.02, SQP 44.04.03, interior-point-NLP 44.04.04: all SHIPPED.
  COVERED (re-confirmed in `nocedal-wright.completeness.md`).
- **ch06 core (Beck/Nesterov/Bubeck)** — subgradient 44.06.01, proximal-gradient/ISTA/proximal-
  point/Moreau 44.06.02, accelerated/FISTA 44.06.03, ADMM/Douglas-Rachford 44.06.04,
  SGD/mirror-descent 44.06.05: all SHIPPED. COVERED (re-confirmed in
  `first-order.completeness.md`).

---

## RESULT

- **Still-absent gaps: 1** (44.06.09 Chambolle-Pock / PDHG).
- All other named round-2 residuals (proximal-Newton, bundle method, gradient-sampling,
  extragradient) are WITHHELD as out-of-scope or covered-adjacent per the default-to-COVERED
  bias — none is a headline chapter of the four source books, and each is a thin extension of
  an already-shipped family.
