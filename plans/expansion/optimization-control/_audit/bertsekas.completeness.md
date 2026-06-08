# Completeness re-audit: Bertsekas — *Dynamic Programming and Optimal Control*

`source_book: bertsekas`
`source_curriculum: optimization-control`

Re-audit of the now-mature §44 (36 shipped units; DP/control core =
44.07.01–04, 44.08.01–03). The original greenfield audit (`bertsekas.gaps.md`)
opened those seven units and **deferred** POMDPs / Kalman-LQG / SSP as
"out of scope / deferrable while the section is greenfield." With the section
now built out, those deferrals are re-examined: three are genuine still-absent
headline Bertsekas Vol. I topics; the rest verify COVERED.

Method: filename grep + body grep across the WHOLE `content/` tree per
candidate. Default COVERED. Evidence inline.

---

## STILL-ABSENT GAPS

### 44.08.04 — Imperfect state information: belief-state reduction and partially observed MDPs (POMDPs)
- **id:** `44.08.04` (free; 44.08 occupies .01–.03 only)
- **title:** Dynamic programming with imperfect state information: the sufficient-statistic / belief-state reduction and partially observed Markov decision processes
- **spec:** The imperfect-state-information control problem where the controller observes noisy outputs $z_k = h_k(x_k, v_k)$ rather than the state $x_k$; the **reduction to perfect state information over an enlarged state**: the conditional distribution (information state / **belief state**) $b_k(\cdot) = P(x_k \mid I_k)$ given the information vector $I_k = (z_0,\dots,z_k,u_0,\dots,u_{k-1})$ is a **sufficient statistic**, propagating by a Bayesian recursion $b_{k+1} = \Phi(b_k, u_k, z_{k+1})$; the **belief-MDP** Bellman recursion $J_k(b) = \min_u \mathbb{E}[\,g_k + J_{k+1}(\Phi(b,u,z))\,]$; the finite-state **POMDP** as the canonical instance, with Smallwood–Sondik **piecewise-linear-convex** value functions and exact value iteration over $\alpha$-vectors; the explosion of the belief simplex and why exact solution is intractable. Genuine gap: the only trace anywhere is a one-line aside in 44.08.03 noting memory "matters for partial observability... not the present setting"; no unit states the belief-state reduction, the sufficient-statistic theorem, or the POMDP value-iteration structure.
- **prereqs:** `44.08.01` (finite-horizon DP / principle of optimality — the recursion carried over to the enlarged belief state), `44.08.03` (MDPs / stochastic Bellman equation — the perfect-information model the belief-MDP reduces to), `26.07.01` (Bayesian prior/posterior — the belief-update recursion is the per-step posterior), `37.05.01` (Markov property / transition kernels — the hidden state dynamics)
- **chapter:** `08-dynamic-programming` — `section: optimization-control`, `chapter: dynamic-programming`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.08.05 — The Kalman filter, LQG control, and the separation principle
- **id:** `44.08.05` (free)
- **title:** Linear-quadratic-Gaussian control: the Kalman filter, the separation principle, and certainty-equivalent feedback
- **spec:** The linear-Gaussian instance of imperfect state information — plant $x_{k+1} = A x_k + B u_k + w_k$, observation $z_k = C x_k + v_k$ with Gaussian $w_k, v_k$; the **Kalman filter** as the exact belief-state recursion for the linear-Gaussian model: the measurement/time-update propagation of the conditional mean $\hat x_{k\mid k}$ and error covariance $P_{k\mid k}$, the **Kalman gain** $K_k = P_{k\mid k-1} C^\top (C P_{k\mid k-1} C^\top + R)^{-1}$, and the **filtering Riccati recursion** for $P$ (the estimation dual of the control Riccati of 44.07.02 / 44.08.06); the **LQG problem** (quadratic cost, Gaussian noise, partial observation); the **separation principle / certainty equivalence** — the optimal LQG controller is the deterministic LQR feedback law applied to the Kalman state estimate, $u_k = -L_k \hat x_{k\mid k}$, so estimation and control decouple. Genuine gap: the Kalman filter is *named only as a forward-pointer* in 44.07.02 ("the estimation dual treated downstream") and appears solely as numerical square-root-filter *factorization updating* in 43.04.08 — no unit derives the filter, the LQG problem, or the separation principle. Nothing in 26-statistics / 37-probability builds state-space filtering.
- **prereqs:** `44.07.02` (LQR / control Riccati — the regulator half of the separation principle; the filter Riccati is its dual), `44.08.04` (imperfect state information / belief state — LQG is the linear-Gaussian special case where the belief is finitely parametrized by mean+covariance), `26.07.01` (Bayesian posterior — the filter is the Gaussian conditional update), `02.06.03` (linear systems / matrix exponential — the linear plant)
- **chapter:** `08-dynamic-programming` — `section: optimization-control`, `chapter: dynamic-programming`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.08.06 — Stochastic shortest path / total-cost DP and proper policies
- **id:** `44.08.06` (free)
- **title:** Stochastic shortest path problems: total-cost dynamic programming, proper policies, and the undiscounted Bellman equation
- **spec:** The **total-cost** infinite-horizon model with a cost-free **absorbing termination state** and undiscounted cost $\sum_{k\ge 0} g(x_k,u_k)$ ($\alpha = 1$); a stationary policy is **proper** if it reaches termination with probability one from every state (finite expected cost); the structural result that, under existence of a proper policy and the assumption that improper policies have infinite cost, the Bellman operator $T$ is a **contraction with respect to a weighted sup-norm** (not the ordinary sup-norm, since $\alpha = 1$), so $J^*$ is the unique fixed point of $J = TJ$ and value/policy iteration converge; the **stochastic shortest path (SSP)** as the unifying total-cost model that subsumes deterministic shortest paths, finite-horizon DP (via an augmented terminal state), and discounted DP (via a per-step termination probability $1-\alpha$). Genuine gap: no `content/` unit treats total-cost/SSP, proper policies, or weighted-sup-norm contraction; 44.08.02 covers only the discounted ($\alpha<1$) sup-norm contraction and 44.08.01 only the finite horizon.
- **prereqs:** `44.08.02` (discounted DP / Bellman operator as contraction — SSP is the undiscounted total-cost generalization with a weighted-norm contraction), `44.08.03` (MDPs — the controlled-chain substrate), `37.05.03` (hitting probabilities / expected hitting times — properness is finite expected hitting time of the termination state), `02.01.05` (Banach fixed-point — the weighted-sup-norm contraction engine)
- **chapter:** `08-dynamic-programming` — `section: optimization-control`, `chapter: dynamic-programming`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

---

## COVERED (not gaps)

Re-verified present at theorem level; do NOT re-propose.

- **Finite-horizon DP / principle of optimality / backward recursion** — `44.08.01`.
- **Infinite-horizon discounted DP, Bellman operator as sup-norm contraction, value & policy iteration, error bounds** — `44.08.02`.
- **Markov decision processes / stochastic Bellman optimality equation / optimal stationary policy / LP formulation** — `44.08.03`.
- **Average-cost (average-reward) infinite-horizon DP** — `44.08.02` **Theorem 4** is a full theorem-level treatment, NOT a brief mention: the average-cost optimality equation $g^* + h(x) = \min_u \mathbb{E}[g + h(f)]$, the gain $g^*$ and bias $h$ (unique up to a constant), the unichain/recurrence hypothesis, and the vanishing-discount limit $J^*_\alpha = g^*/(1-\alpha) + h + o(1)$. (Brief flagged this as a "brief mention"; on inspection it is a complete theorem. Covered. The remaining undiscounted *total-cost / SSP* model — distinct from average-cost — is the genuine gap 44.08.06.)
- **Approximate DP / value-function approximation error bounds** — `44.08.02` **Theorem 2** (approximate value iteration, per-step error $\varepsilon$, steady-state error $\le \varepsilon/(1-\alpha)$, greedy-policy loss $\le 2\alpha\varepsilon/(1-\alpha)^2$, the effective-horizon factor $1/(1-\alpha)$); plus `44.08.03` Ch.2 anchor (projected/fitted value iteration, TD, Q-learning as sampled value iteration). The ADP/RL *pointer* is intentional and adequate.
- **Pontryagin maximum principle / LQR / control Riccati / bang-bang / HJB-verification** — `44.07.01`–`44.07.04`.
- **Banach fixed-point / contraction engine** — `02.01.05` (consumed as prereq).
- **Markov-chain substrate (transition kernels, recurrence, hitting times, invariant measures, ergodic theorem)** — `37.05.01`–`37.05.12`.
- **Bayesian prior/posterior update** — `26.07.01` (the belief/filter update in 44.08.04/.05 is its sequential instance; cross-ref, do not re-prove).
- **Square-root Kalman *filter as factorization updating* (numerics only)** — `43.04.08`: this is the QR/Cholesky update view of the covariance recursion, NOT a derivation of the filter, the LQG problem, or the separation principle — those remain gap 44.08.05.

## OUT OF SCOPE

- **Rollout / one-step-lookahead policy improvement, neuro-dynamic programming, TD($\lambda$), actor-critic, policy gradient** — the full approximate-DP/RL apparatus. Rollout is a thin algorithmic slice of the policy-improvement property already carried by policy iteration (44.08.02) + the ADP error bounds (44.08.02 Thm 2); the full RL theory belongs to a Sutton–Barto / Bertsekas–Tsitsiklis *Neuro-Dynamic Programming* source in a statistics/learning spine, not §44. (Consistent with the original audit's OUT OF SCOPE.)
- **Semicontractive / abstract dynamic programming** — Bertsekas's *Abstract Dynamic Programming* research monograph (regular/irregular policies, semicontractive models generalizing SSP). A research-monograph abstraction beyond the two-volume headline core; the concrete payoff (weighted-norm SSP contraction) is captured by 44.08.06.
- **Continuous-time stochastic optimal control / stochastic HJB / controlled diffusions / Merton problem** — deferred in the original audit; would consume `02.15.03`/`02.15.04` (Itô/SDE/generator) and stochastic-HJB viscosity theory. Still a deep dedicated build (Fleming–Soner / Yong–Zhou), not scoped here.
- **Optimal stopping / multi-armed bandits / Gittins index** — specialized DP sub-theories, each a full source-book topic; not in the Bertsekas Vol. I theorem-core to a depth warranting a §44 unit. Deferrable.
- **Numerical ARE/Riccati solvers (Schur/Hamiltonian-matrix), policy-iteration PDE schemes** — solver technology for the §43 numerical-analysis spine (the filter-Riccati *numerics* already live at `43.04.08`); 44.08.05 builds the filter/LQG structure, not the linear-algebra to solve it.
