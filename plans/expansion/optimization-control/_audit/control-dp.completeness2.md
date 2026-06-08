# Completeness re-audit (round 2): control & DP vs Bertsekas — *Dynamic Programming and Optimal Control*

`source_book: bertsekas`
`source_curriculum: optimization-control`

Round 2 re-audit of §44 after the section reached 46 shipped units. Round 1
(`bertsekas.completeness.md`) re-examined the original deferrals and shipped the
three genuine headline residuals — POMDP / belief-state (`44.08.04`), Kalman /
LQG / separation (`44.08.05`), stochastic-shortest-path / total-cost
(`44.08.06`). This round runs the NARROW question the brief poses: after round 1,
is ANY headline Bertsekas control/DP topic STILL genuinely absent? Candidates
checked: approximate / neuro-dynamic programming & rollout & policy-gradient as a
dedicated unit; the deterministic continuous-time minimum principle WITH pure
state constraints; multiplicative / risk-sensitive cost.

Method: filename grep + whole-tree body grep per candidate, then scope judgement
against the audited book's actual theorem-core. Default COVERED.

---

## RESULT: DRY — 0 new gaps

Every round-2 candidate is either already at theorem level in `content/`, already
harvested in round 1, or genuinely outside the audited book's headline scope. No
new unit is proposed.

---

## COVERED (not gaps)

Re-verified present at theorem level; do NOT propose.

- **Approximate dynamic programming / value-function-approximation error bounds.**
  `44.08.02` **Theorem 2** is a full theorem: per-step approximation error
  $\|\tilde J_{k+1}-T\tilde J_k\|_\infty\le\varepsilon$, steady-state error
  $\limsup_k\|\tilde J_k-J^*\|_\infty\le\varepsilon/(1-\alpha)$, greedy-policy
  loss $\le 2\alpha\varepsilon/(1-\alpha)^2$, and the effective-horizon factor
  $1/(1-\alpha)$ — exactly the Bertsekas Vol. 2 Ch. 2 ADP result. Not a passing
  mention.
- **Reinforcement learning / TD / Q-learning as stochastic approximation to the
  Bellman operators.** `44.08.03` **Theorem 4** states TD ($V\leftarrow
  V+\eta[r+\alpha V'-V]$, mean field $T_\mu V-V$) and Q-learning ($Q\leftarrow
  Q+\eta[r+\alpha\max Q'-Q]$, mean field $\mathcal HQ-Q$) with the Robbins–Monro
  step-size conditions and convergence to $V^\mu$ / $Q^*$. Theorem-level, not a
  pointer. The model-free / function-approximation slice of neuro-dynamic
  programming is thus carried.
- **Rollout / one-step-lookahead policy improvement.** A thin algorithmic slice
  of the policy-improvement property already proved in policy iteration
  (`44.08.02`) plus the ADP error bounds (`44.08.02` Thm 2). No standalone
  theorem-level payoff distinct from what is shipped; consistent with round 1's
  OUT OF SCOPE.
- **Finite-horizon DP / principle of optimality** — `44.08.01`.
- **Infinite-horizon discounted DP, sup-norm contraction, value & policy
  iteration, average-cost optimality equation** — `44.08.02` (Thms incl. Thm 4
  average-cost).
- **MDPs / stochastic Bellman optimality / optimal stationary policy / LP
  formulation** — `44.08.03`.
- **POMDP / belief-state sufficient-statistic reduction** — `44.08.04` (round 1).
- **Kalman filter / LQG / separation principle / certainty equivalence** —
  `44.08.05` (round 1).
- **Stochastic shortest path / total-cost DP / proper policies /
  weighted-sup-norm contraction** — `44.08.06` (round 1).
- **Pontryagin maximum principle with CONTROL constraints + terminal-manifold
  transversality** — `44.07.01`: the pointwise Hamiltonian minimisation over the
  admissible set $U$ (control constraints) and the transversality condition on a
  terminal manifold $\mathcal M=\{g(x)=0\}$ (free/fixed endpoints as the two
  extremes) are both full theorems. LQR / Riccati / bang-bang / HJB-verification
  — `44.07.02`–`44.07.04`.

## OUT OF SCOPE

- **Deterministic continuous-time minimum principle with PURE STATE
  (inequality) constraints** — constrained-arc theory, costate jump / junction
  conditions on the boundary of a state-space inequality $h(x)\le 0$. Genuinely
  absent from `content/` (0 grep hits), BUT not a Bertsekas *DPOC* headline
  topic: DPOC is overwhelmingly discrete-time, and `44.07.01` already sources its
  continuous-time PMP from Pontryagin / Liberzon / Clarke, not Bertsekas. State-
  constrained arcs belong to the Hartl–Sethi–Vickson / Bryson–Ho / Clarke
  continuous-time control literature, i.e. outside the audited book. Not
  manufactured here; flag for a continuous-time-control source audit if that book
  is ever added.
- **Multiplicative / risk-sensitive (exponential-of-cost, LEQG) DP** — absent
  from `content/` (0 grep hits). Present in Bertsekas only as a slim specialised
  section, not a theorem-core pillar; in the same category as the round-1
  OUT-OF-SCOPE specialised DP sub-theories (optimal stopping, bandits/Gittins).
  No theorem-level payoff warranting a §44 unit on the strength of this book
  alone. Deferrable.
- **Neuro-dynamic programming full apparatus (TD($\lambda$), actor-critic,
  policy gradient, aggregation, projected Bellman / LSTD)** — the
  Bertsekas–Tsitsiklis *Neuro-Dynamic Programming* monograph. The value-based
  core (TD, Q-learning, ADP error bounds) is already shipped; the remaining
  policy-gradient / actor-critic theory belongs to a Sutton–Barto / NDP source in
  a statistics-and-learning spine, not §44. Consistent with round 1.
- **Continuous-time stochastic control / stochastic HJB / controlled diffusions;
  semicontractive / abstract DP** — as round 1: deep dedicated builds
  (Fleming–Soner / Yong–Zhou; Bertsekas *Abstract DP*) beyond the two-volume
  headline core.
