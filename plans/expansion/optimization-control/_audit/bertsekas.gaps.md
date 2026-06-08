# Audit: Bertsekas — *Dynamic Programming and Optimal Control* (Athena Scientific)

`source_book: bertsekas`
`source_curriculum: optimization-control`
`section: optimization-control` (new chapters `content/44-optimization-control/07-optimal-control-pontryagin`,
`08-dynamic-programming`)

Method: each Bertsekas headline result was verified by filename grep + body grep across the
WHOLE `content/` tree before being called a gap. Lane discipline: this audit owns
**optimal control + DP/Bellman/HJB**; the convex/conic/NLP-algorithm chapters
(44.01–44.06) are left to Boyd, Nocedal-Wright, and Rockafellar (auditing in parallel).

Top-level findings:

- **The entire `content/44-optimization-control/` section is an empty 8-chapter scaffold** —
  zero `.md` files in any of `01-convex-sets-functions` … `08-dynamic-programming`. So both
  target chapters (44.07, 44.08) are greenfield; every gap below opens a free id.

- **Calculus of variations / Euler-Lagrange are already built and must be cross-ref'd, NOT
  re-proved.** The *mechanics* formulation lives in `09.02.01` (action principle / variational
  calculus) and `09.02.02` (Euler-Lagrange equations); the *analysis* existence theory is
  `02.18.04` (direct method of the calculus of variations); a manifold version is `03.04.08`.
  Bertsekas's genuine contribution is the **control formulation** — a controlled ODE
  $\dot x=f(x,u)$ with an admissible-control set $U$, the state/costate Hamiltonian, and the
  **maximum principle as a necessary condition with control constraints** (which Euler-Lagrange
  does not handle). That is the gap (44.07.01), and it cross-refs E-L rather than restating it.

- **The Hamilton-Jacobi PDE and its weak (viscosity) theory are already built.** `09.05.02`
  (Hamilton-Jacobi equation, classical mechanics) and `02.18.05` (viscosity solutions of
  Hamilton-Jacobi, which already cites Bardi-Capuzzo-Dolcetta and lists the HJB connection).
  The **HJB equation of optimal control** — the dynamic-programming PDE for the value function
  $V(t,x)$, the verification theorem, and the value function *as* the unique viscosity solution
  — is the genuine gap (44.07.04); it cross-refs `02.18.05` for the well-posedness engine
  rather than re-deriving viscosity theory.

- **The Banach fixed-point / contraction-mapping theorem is built — reuse as a PREREQ, do not
  re-prove.** Stated and proved in `02.01.05` (metric spaces); a numerical-iteration restatement
  is `43.02.02` (fixed-point iteration / contraction / order). The DP-convergence gap (44.08.02)
  consumes `02.01.05` as the engine: the Bellman operator is a sup-norm contraction with modulus
  $\alpha$, so value/policy iteration converge — this is an *application*, not a re-proof.

- **Markov chains are fully built (`37.05.01`–`37.05.12`) but there is NO MDP / stochastic-DP
  unit anywhere.** No `content/` file states the Markov decision process, the stochastic Bellman
  equation $V=\min_u\{g+\alpha\,\mathbb E[V]\}$, or the controlled-chain optimality theory. The
  stochastic-control gap (44.08.03) builds the MDP on top of the existing transition-kernel
  machinery (`37.05.01`) — genuine and high-value.

- **The algebraic Riccati equation is NOT in the corpus.** `43.06.12` covers the *Sylvester /
  Lyapunov* equations (Bartels-Stewart) but neither the differential nor the algebraic Riccati
  equation; LQR is absent. So 44.07.02 (LQR / Riccati) is a genuine gap; it cross-refs
  `02.06.03` (matrix exponential / linear systems) and `43.06.12` (the adjacent linear-matrix-
  equation numerics) without duplicating them.

These are the genuine gaps.

---

## GENUINE GAPS — 44.07 optimal-control-pontryagin

### 44.07.01 — Pontryagin's maximum principle for constrained optimal control
- **id:** `44.07.01`
- **title:** Pontryagin's maximum (minimum) principle: the control Hamiltonian, the costate/adjoint equation, and necessary conditions with control constraints
- **spec:** The deterministic continuous-time optimal-control problem $\min_{u(\cdot)\in U}\;\int_0^T g(x,u)\,dt+h(x(T))$ subject to $\dot x=f(x,u)$, $x(0)=x_0$; the control Hamiltonian $H(x,u,p)=g(x,u)+p^\top f(x,u)$; the **costate (adjoint) ODE** $\dot p=-\nabla_x H$ with transversality $p(T)=\nabla h(x(T))$; the **maximum/minimum principle** — an optimal trajectory pointwise minimises $H$ over the admissible set $u^*(t)=\arg\min_{u\in U}H(x^*,u,p^*)$ — as a *necessary* condition valid when the control set is bounded/constrained (where Euler-Lagrange fails); constancy of $H$ on the optimum for autonomous problems; free vs fixed endpoint and free-time transversality. Cross-ref `09.02.02` (Euler-Lagrange — the unconstrained-control special case) and `09.05.02` (Hamilton-Jacobi — the dual PDE view); the maximum principle is the genuine gap, not Euler-Lagrange.
- **prereqs:** `09.02.02` (Euler-Lagrange equations — the variational backbone the control problem generalises), `02.12.01` (phase space / vector field / controlled ODE flow), `02.05.05` (multivariable Taylor / first-order extremum conditions / Lagrange multipliers — the stationarity machinery)
- **chapter:** `optimal-control-pontryagin` — `section: optimization-control`, `chapter: optimal-control-pontryagin`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.07.02 — The linear-quadratic regulator and the Riccati equation
- **id:** `44.07.02`
- **title:** The linear-quadratic regulator (LQR): the matrix Riccati equation, optimal linear state feedback, and the infinite-horizon algebraic Riccati equation
- **spec:** The LQR problem $\min\int_0^T(x^\top Qx+u^\top Ru)\,dt+x(T)^\top Q_T x(T)$ subject to $\dot x=Ax+Bu$ ($Q\succeq0$, $R\succ0$); solution via the maximum principle / dynamic programming with quadratic value function $V(t,x)=x^\top P(t)x$; the **differential Riccati equation** $-\dot P=A^\top P+PA-PBR^{-1}B^\top P+Q$ and the optimal feedback $u^*=-R^{-1}B^\top P\,x$; the **infinite-horizon algebraic Riccati equation (ARE)** $A^\top P+PA-PBR^{-1}B^\top P+Q=0$, the stabilising solution under (stabilisability, detectability), and closed-loop stability $A-BR^{-1}B^\top P$ Hurwitz. The discrete-time LQR / DARE analogue. Genuine gap: no Riccati or LQR unit exists; `43.06.12` covers only Sylvester/Lyapunov.
- **prereqs:** `44.07.01` (maximum principle — derives the optimal feedback), `02.06.03` (systems of linear ODE / matrix exponential — the controlled linear plant), `01.01.08` (eigenvalues — closed-loop spectrum / Hurwitz stability of the feedback)
- **chapter:** `optimal-control-pontryagin` — `section: optimization-control`, `chapter: optimal-control-pontryagin`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.07.03 — Bang-bang control and minimum-time problems
- **id:** `44.07.03`
- **title:** Bang-bang control, the switching function, and minimum-time optimal control
- **spec:** Control-affine systems $\dot x=f(x)+g(x)u$ with box constraints $u\in[u_{\min},u_{\max}]$; the **switching function** $\sigma(t)=p^\top g(x)$ and the maximum-principle consequence that the optimal control saturates at the extremes — **bang-bang control** $u^*=\operatorname{sgn}\sigma$ — except on singular arcs ($\sigma\equiv0$); the **minimum-time problem** (free terminal time, $g\equiv1$) and its transversality $H\equiv0$; for the double integrator / harmonic oscillator, the finite bound on the number of switches and the explicit switching curve; existence (Filippov) and the singular-arc condition. The constrained-extremal control gap; consumes 44.07.01 directly.
- **prereqs:** `44.07.01` (Pontryagin maximum principle — the switching structure follows from pointwise $H$-minimisation), `02.12.01` (controlled vector field / trajectories), `02.06.03` (linear systems — the double-integrator / oscillator examples)
- **chapter:** `optimal-control-pontryagin` — `section: optimization-control`, `chapter: optimal-control-pontryagin`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.07.04 — The Hamilton-Jacobi-Bellman equation and the verification theorem
- **id:** `44.07.04`
- **title:** The Hamilton-Jacobi-Bellman equation of optimal control: the value function, the verification theorem, and the viscosity-solution characterisation
- **spec:** The continuous-time value function $V(t,x)=\inf_{u(\cdot)}\int_t^T g+h$; the **dynamic-programming / HJB PDE** $-\partial_t V=\min_{u\in U}\{g(x,u)+\nabla_x V\cdot f(x,u)\}$ with terminal $V(T,\cdot)=h$; the **verification theorem** — a smooth subsolution/supersolution that attains the minimiser is the value function and the pointwise minimiser is an optimal feedback; the connection $\min_u H = -\partial_t V$ tying HJB to the maximum principle (44.07.01); the value function as the unique **viscosity solution** when it is non-smooth, cross-referencing the weak-solution theory at `02.18.05`. Genuine gap: 02.18.05 builds viscosity-solution PDE theory but NOT the control-DP derivation, verification theorem, or feedback synthesis. Cross-ref `09.05.02` (classical Hamilton-Jacobi) and `02.18.05` (viscosity uniqueness engine).
- **prereqs:** `02.18.05` (viscosity solutions of Hamilton-Jacobi — well-posedness of the non-smooth value function), `09.05.02` (Hamilton-Jacobi equation — the classical PDE the value function generalises), `44.07.01` (maximum principle — the HJB-PMP bridge $\min_u H=-\partial_t V$)
- **chapter:** `optimal-control-pontryagin` — `section: optimization-control`, `chapter: optimal-control-pontryagin`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

---

## GENUINE GAPS — 44.08 dynamic-programming

### 44.08.01 — The dynamic-programming algorithm and the principle of optimality (finite horizon)
- **id:** `44.08.01`
- **title:** Finite-horizon dynamic programming: the principle of optimality, the backward DP recursion, and optimal feedback policies
- **spec:** The discrete-time finite-horizon problem $\min_{\{\mu_k\}}\;\mathbb E\big[g_N(x_N)+\sum_{k=0}^{N-1}g_k(x_k,\mu_k(x_k),w_k)\big]$ subject to $x_{k+1}=f_k(x_k,u_k,w_k)$; **Bellman's principle of optimality** and the **backward DP algorithm** $J_N=g_N$, $J_k(x)=\min_{u}\,\mathbb E[g_k(x,u,w)+J_{k+1}(f_k(x,u,w))]$; the theorem that the DP recursion yields the optimal cost-to-go and that the argmin defines an optimal **feedback (closed-loop) policy**; deterministic vs stochastic disturbance, perfect-state-information assumption; worked instances (shortest path / DAG, deterministic LQ as the quadratic special case bridging 44.07.02). The foundational DP gap; nothing in `content/` states the DP algorithm or principle of optimality.
- **prereqs:** `02.05.05` (multivariable optimisation / extrema — the per-stage minimisation), `37.05.01` (Markov property / transition kernel — the stochastic transition $f_k(\cdot,\cdot,w_k)$), `01.01.08` (eigenvalues — for the LQ specialisation cross-ref)
- **chapter:** `dynamic-programming` — `section: optimization-control`, `chapter: dynamic-programming`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.08.02 — Infinite-horizon discounted DP: the Bellman operator, value & policy iteration, contraction convergence
- **id:** `44.08.02`
- **title:** Infinite-horizon discounted dynamic programming: Bellman's equation, the Bellman operator as a contraction, and convergence of value/policy iteration
- **spec:** The discounted infinite-horizon problem with cost $\sum_{k\ge0}\alpha^k g(x_k,u_k)$, $0<\alpha<1$; the **Bellman operator** $(TJ)(x)=\min_u\{g(x,u)+\alpha\,\mathbb E[J(f(x,u,w))]\}$ and the policy operator $T_\mu$; **Bellman's equation** $J^*=TJ^*$ as the fixed point; the key structural fact that $T$ is a **sup-norm $\alpha$-contraction**, so by the Banach fixed-point theorem (`02.01.05`) $J^*$ is the unique fixed point and **value iteration** $J_{k+1}=TJ_k$ converges geometrically; monotonicity of $T$; **policy iteration** (policy evaluation $J_\mu=T_\mu J_\mu$ + greedy improvement), its monotone improvement and finite/superlinear convergence; the error bound $\|J_k-J^*\|\le \alpha^k\|J_0-J^*\|$. Genuine gap; reuses `02.01.05` as the contraction engine (no re-proof).
- **prereqs:** `44.08.01` (finite-horizon DP — the recursion taken to the stationary infinite-horizon limit), `02.01.05` (Banach fixed-point theorem — the contraction engine for $T$), `37.05.07` (ergodic theorem / long-run behaviour of Markov chains — average-cost / stationarity context)
- **chapter:** `dynamic-programming` — `section: optimization-control`, `chapter: dynamic-programming`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

### 44.08.03 — Markov decision processes and stochastic dynamic programming
- **id:** `44.08.03`
- **title:** Markov decision processes: controlled Markov chains, the stochastic Bellman equation, and optimal stationary policies
- **spec:** The **Markov decision process** $(\mathcal S,\mathcal A,P(\cdot\mid s,a),g,\alpha)$ as a controlled Markov chain built on the transition-kernel theory of `37.05.01`; per-stage cost, policies (history-dependent vs Markov vs stationary deterministic), the value $V^\pi$ and the stochastic **Bellman optimality equation** $V^*(s)=\min_a\{g(s,a)+\alpha\sum_{s'}P(s'\mid s,a)V^*(s')\}$; existence of an **optimal stationary deterministic policy** (greedy w.r.t. $V^*$); solution by value iteration / policy iteration (44.08.02) and by **linear programming**; the average-cost MDP and its differential Bellman equation; the bridge to **approximate DP / reinforcement learning** (function approximation, TD/Q-learning as sampled value iteration) as a pointer, not a full build. Genuine gap: Markov chains exist (`37.05.*`) but no controlled-chain / MDP unit anywhere.
- **prereqs:** `37.05.01` (Markov property / transition matrices / Chapman-Kolmogorov — the uncontrolled chain), `44.08.02` (discounted DP, Bellman operator, value/policy iteration — the solution machinery), `37.05.05` (invariant measures / recurrence — average-cost stationarity)
- **chapter:** `dynamic-programming` — `section: optimization-control`, `chapter: dynamic-programming`
- **source_book:** `bertsekas` · **source_curriculum:** `optimization-control`

---

## COVERED (not gaps)

Verified present elsewhere in the corpus; Bertsekas's units cross-reference these and must NOT
duplicate them.

Variational / Hamiltonian backbone (the unconstrained, no-control-set theory):
- **Action principle / variational calculus** — `09.02.01`.
- **Euler-Lagrange equations** — `09.02.02` (the maximum principle 44.07.01 *generalises* this to constrained controls; cross-ref, do not re-prove).
- **Direct method of the calculus of variations (existence of minimisers, weak l.s.c.)** — `02.18.04`.
- **Variational calculus on manifolds** — `03.04.08`.
- **Legendre transform / Hamilton's equations** — `09.04.01`, `09.04.02` (the Hamiltonian formalism reused in the control Hamiltonian).
- **Hamilton-Jacobi equation (classical mechanics)** — `09.05.02` (the PDE the HJB equation 44.07.04 specialises with a control min).
- **Viscosity solutions of Hamilton-Jacobi (weak-solution theory, already cites Bardi-Capuzzo-Dolcetta / the HJB link)** — `02.18.05` (the well-posedness engine for the non-smooth value function; 44.07.04 cross-refs it, does not rebuild viscosity theory).

Fixed-point / contraction engine (consumed as prereq for DP convergence):
- **Banach fixed-point theorem on complete metric spaces (stated + proved)** — `02.01.05` (the $\alpha$-contraction engine for the Bellman operator in 44.08.02).
- **Fixed-point iteration / contraction / order of convergence (numerical restatement)** — `43.02.02`.

Markov / stochastic substrate (the uncontrolled processes the MDP sits on):
- **Markov property, transition matrices, Chapman-Kolmogorov** — `37.05.01`.
- **Invariant measures, positive/null recurrence** — `37.05.05`; **convergence to equilibrium** — `37.05.06`; **ergodic theorem / detailed balance** — `37.05.07`; continuous-time chains / generators — `37.05.08`–`37.05.10`. (These give the chain theory; the *controlled* chain / MDP is the new 44.08.03 build.)
- **SDE / diffusions / generator, Feynman-Kac** — `02.15.03`, `02.15.04` (the continuous-time stochastic substrate; a stochastic *continuous-time* control build would consume these, deferred — see OUT OF SCOPE).

Linear-algebra / linear-systems prerequisites:
- **Systems of linear ODE / matrix exponential** — `02.06.03` (the LQR plant); **eigenvalues** — `01.01.08` (closed-loop spectrum / Hurwitz).
- **Sylvester / Lyapunov / Bartels-Stewart linear matrix equations** — `43.06.12` (adjacent to, but distinct from, the *Riccati* equation built in 44.07.02; cross-ref).

Optimisation prerequisites left to PARALLEL audits (NOT this lane):
- **Multivariable extrema / Lagrange-multiplier stationarity** — `02.05.05` (used as prereq).
- **Convex sets/functions, convex duality / KKT, conic/SDP, first-order large-scale methods, NLP algorithms** — chapters `44.01`–`44.06`, owned by Boyd / Rockafellar / Nocedal-Wright. This audit does NOT propose into those chapters.

## OUT OF SCOPE

- **Convex analysis, conic/SDP, KKT/duality, gradient/Newton/SQP algorithms (44.01–44.06)** —
  parallel lanes (Boyd, Rockafellar, Nocedal-Wright). Bertsekas's *Convex Optimization* /
  *Nonlinear Programming* material is theirs; this audit stays in 44.07–44.08.
- **Full approximate DP / reinforcement-learning apparatus** (TD($\lambda$), Q-learning
  convergence proofs, actor-critic, neuro-dynamic programming, policy-gradient, function-
  approximation error bounds). 44.08.03 *points* to ADP/RL; the full RL theory is a dedicated
  Sutton-Barto / Bertsekas-Tsitsiklis *Neuro-Dynamic Programming* source, better placed in a
  statistics/learning spine, not manufactured here.
- **Continuous-time stochastic optimal control / stochastic HJB / Merton portfolio /
  controlled diffusions** — would consume `02.15.03`/`02.15.04` (Itô / SDE / generator) and the
  stochastic-HJB viscosity theory; a genuine future unit but a deep dedicated build (Fleming-
  Soner / Yong-Zhou), deferred rather than scoped into this freshly-opened section. The discrete
  stochastic case is covered by the MDP unit 44.08.03.
- **Optimal stopping, multi-armed bandits, Gittins index, partially-observed MDPs (POMDPs),
  filtering/separation principle** — specialised DP sub-theories; each a full source-book topic,
  not in Bertsekas Vol. I's theorem-core to the depth that warrants a unit here. Deferrable.
- **Numerical solution of the Riccati/HJB PDE** (Schur/Hamiltonian-matrix ARE solvers, policy-
  iteration PDE schemes) — solver technology for the `43`-numerical-analysis spine, not the
  control-theory core. 44.07.02/44.07.04 build the equations and their structure, not the
  numerical linear-algebra to solve them.
