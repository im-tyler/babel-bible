# Audit: Nocedal & Wright — *Numerical Optimization* (2nd ed., Springer, 2006)

`source_book: nocedal-wright`
`source_curriculum: optimization-control`
`section: optimization-control` (new units in `content/44-optimization-control/03-unconstrained-optimization`
and `content/44-optimization-control/04-constrained-nonlinear`)

## Method & corpus findings

Each Nocedal-Wright headline algorithm/theorem was verified by filename grep
(`find content -name "*.md" | sed 's#.*/##' | grep -iE ...`) and body grep
(`grep -rliE ...`) across the WHOLE `content/` tree.

- **The entire `content/44-optimization-control/` section is an empty scaffold** — all eight
  chapter dirs contain only `.gitkeep`. There is NO existing optimization-algorithm unit
  anywhere in the corpus. `grep -rliE "wolfe condition|trust region|line search|quasi-newton|
  bfgs|l-bfgs|levenberg|gauss-newton|sequential quadratic|active.set|augmented lagrangian|
  interior.point|steepest descent|fletcher.reeves|polak.ribiere|nonlinear conjugate"` over
  `content/` returns only **incidental** hits (the MVT in `02.05.02`; "trust region" appearing
  as prose in PDE/dynamics units; "active set" in unrelated contexts). So ch 03 and ch 04 are
  greenfield for the algorithm layer.

- **Linear CG is COVERED but DISTINCT.** `43.07.04-conjugate-gradient-method` builds CG as
  A-norm minimisation over the Krylov subspace for the SPD *linear system* $Ax=b$ (Lanczos
  recurrence, Chebyshev convergence). The optimization variant — **nonlinear** CG
  (Fletcher-Reeves / Polak-Ribière, restarts, line-search coupling for a general smooth $f$) —
  is a different construction and is absent. Proposed as a gap (44.03.06).

- **Newton-for-root-finding is COVERED but DISTINCT.** `43.02.03` proves superlinear/quadratic
  convergence of Newton & secant for $f(x)=0$ scalar/system root-finding.
  Newton-for-**minimisation** (Newton step from the Hessian, modified/safeguarded Hessian for
  non-PD case, line-search/trust-region globalisation, the $O(\|x-x^\*\|^2)$ local rate from
  the optimality conditions) is a distinct unit and is absent. Proposed (44.03.03).

- **Multivariable-calculus prereqs are COVERED** (`02-analysis`): `02.05.05` (Taylor in several
  variables, Hessian, the **second-derivative test for unconstrained extrema**), `02.05.04`
  (implicit/inverse function theorems — the engine behind constraint qualifications and the
  SQP step), `02.05.02` (MVT), `02.05.03` (chain rule — used in adjoint/reverse-mode AD).
  These are the analytic foundation that the algorithm units cross-reference, NOT re-prove.

- **Linear-algebra factorisation prereqs are COVERED** (`43-numerical-analysis`):
  `43.03.02` (Cholesky / SPD solve — the trust-region & Newton subproblem solver),
  `43.03.08` (Bunch-Kaufman LDLᵀ for symmetric-indefinite KKT systems — the SQP/IP step),
  `43.04.01` (least-squares normal equations / QR / SVD — the linear least-squares base that
  Gauss-Newton iterates), `01.01.08` (eigenvalues — Hessian definiteness),
  `01.01.13` (spectral theorem — Hessian modification / eigenvalue floor). Cross-refs, not gaps.

- **Coordination (parallel audits).** Boyd-Vandenberghe owns abstract convex **duality**,
  conic/SDP modelling, and **interior-point for conic/SDP** (ch 02/05). Rockafellar owns
  abstract convex analysis — subdifferentials, conjugates, the separation/supporting-hyperplane
  apparatus (ch 01). This audit's lane = concrete iterative **algorithms and their convergence
  theory**. The KKT unit below (44.04.01) is deliberately the **concrete NLP first/second-order
  optimality + constraint-qualification** statement (LICQ/MFCQ, the Lagrange-multiplier
  existence theorem, second-order sufficient conditions) that the constrained algorithms need —
  NOT the abstract Lagrangian-duality / strong-duality theory, which is Boyd's. If Boyd lands a
  general KKT-via-duality unit in ch 02, 44.04.01 still stands as the smooth-NLP optimality
  theorem the SQP/IP units cite; renumber out only if a true duplicate lands.

These are the genuine gaps below.

---

## GENUINE GAPS — 44.03 unconstrained-optimization

### 44.03.01 — Line-search globalization: Wolfe/Armijo/Goldstein conditions and Zoutendijk's theorem
- **id:** `44.03.01`
- **title:** Line-search methods: step-length selection, the Armijo/Wolfe/Goldstein conditions, and global convergence via Zoutendijk's theorem
- **spec:** The descent-direction framework $x_{k+1}=x_k+\alpha_k p_k$ with $p_k^\top\nabla f_k<0$; the **sufficient-decrease (Armijo)**, **curvature**, **(strong) Wolfe**, and **Goldstein** conditions; backtracking and a Wolfe-bracketing/zoom line search; existence of step lengths satisfying Wolfe for smooth bounded-below $f$. **Zoutendijk's theorem**: under Wolfe + Lipschitz gradient, $\sum_k \cos^2\theta_k\,\|\nabla f_k\|^2<\infty$, hence global convergence ($\nabla f_k\to0$) whenever directions stay bounded away from orthogonality to the gradient. Steepest descent as the canonical instance, with its linear (and slow, ill-conditioned) rate. The globalization backbone every later line-search algorithm cites.
- **prereqs:** `02.05.05` (multivariable Taylor / gradient & Hessian / descent), `02.05.02` (MVT — sufficient-decrease derivation), `01.01.08` (eigenvalues — conditioning of the steepest-descent rate)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.02 — Trust-region methods: the subproblem, Cauchy point, dogleg, and global convergence
- **id:** `44.03.02`
- **title:** Trust-region methods: the quadratic-model subproblem, Cauchy point, the dogleg and 2-D subspace steps, and global/local convergence
- **spec:** The trust-region paradigm $\min_p m_k(p)=f_k+\nabla f_k^\top p+\tfrac12 p^\top B_k p$ s.t. $\|p\|\le\Delta_k$; the actual-vs-predicted-reduction ratio $\rho_k$ and the radius-update rule; the **Cauchy point** and sufficient model decrease; the **dogleg** and 2-D-subspace approximate solvers; the exact-subproblem characterization (the $(B+\lambda I)p=-g$ optimality / Moré-Sorensen condition, $\lambda\ge0$, $\lambda(\Delta-\|p\|)=0$); **global convergence** $\liminf\|\nabla f_k\|=0$ (and $\to0$). The trust-region alternative to line search — the other major globalization strategy.
- **prereqs:** `44.03.01` (descent/globalization framework, model decrease), `01.01.13` (spectral theorem — the $(B+\lambda I)$ shift / hard case), `43.03.02` (Cholesky — the inner SPD solve for the subproblem)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.03 — Newton's method for optimization: the Newton step, Hessian modification, and quadratic local convergence
- **id:** `44.03.03`
- **title:** Newton's method for unconstrained minimization: the Newton step, modified-Hessian/safeguarded variants, and local quadratic convergence
- **spec:** The Newton direction $p_k=-\nabla^2 f_k^{-1}\nabla f_k$ as the minimiser of the local quadratic model; **local quadratic convergence** near a point satisfying the second-order sufficient conditions (positive-definite Hessian, Lipschitz $\nabla^2 f$); the breakdown when $\nabla^2 f_k\not\succ0$ and the **modified-Newton** fixes — added multiple of $I$ via a modified Cholesky (eigenvalue floor), used inside line-search and trust-region globalization. **Distinct from** Newton-for-root-finding `43.02.03` (this is minimisation of $f$ via $\nabla f=0$ *with the second-order/definiteness structure*).
- **prereqs:** `02.05.05` (Hessian, second-order test), `43.02.03` (Newton iteration & its quadratic-convergence proof technique — root-finding base), `43.03.02` (Cholesky / modified Cholesky for the step), `44.03.01` (line-search globalization)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.04 — Quasi-Newton methods: the secant condition, BFGS/DFP/SR1, and superlinear convergence
- **id:** `44.03.04`
- **title:** Quasi-Newton methods: the secant equation, BFGS, DFP and SR1 updates, and the Dennis-Moré superlinear-convergence characterization
- **spec:** The **secant equation** $B_{k+1}s_k=y_k$ ($s_k=x_{k+1}-x_k$, $y_k=\nabla f_{k+1}-\nabla f_k$) and curvature condition $s_k^\top y_k>0$; derivation of the **DFP** and **BFGS** rank-two updates (and the inverse-Hessian forms via Sherman-Morrison-Woodbury) and the **SR1** rank-one update; hereditary positive-definiteness of BFGS under Wolfe; the **Dennis-Moré condition** characterizing **superlinear convergence**, and global convergence of BFGS with Wolfe line search. The workhorse curvature-without-Hessians family.
- **prereqs:** `44.03.03` (Newton step / the Hessian it approximates), `44.03.01` (Wolfe line search / curvature condition), `01.01.13` (positive-definiteness / spectral structure of the update)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.05 — Large-scale unconstrained optimization: L-BFGS and inexact (truncated) Newton-CG
- **id:** `44.03.05`
- **title:** Large-scale methods: limited-memory BFGS (L-BFGS) and the inexact/truncated Newton-CG method
- **spec:** **L-BFGS**: the two-loop recursion that applies $H_k\nabla f_k$ from the last $m$ pairs $\{s_i,y_i\}$ without forming a matrix, the implicit compact representation, and storage/cost $O(mn)$ for large $n$. **Inexact (truncated) Newton**: solving $\nabla^2 f_k\,p=-\nabla f_k$ approximately by CG with a forcing-sequence stopping rule, negative-curvature handling, and Hessian-vector products via finite differences or AD (no explicit Hessian); the superlinear/quadratic rate governed by the forcing sequence $\eta_k$. The large-scale layer that makes Newton/quasi-Newton tractable; cross-ref linear CG `43.07.04` as the inner solver.
- **prereqs:** `44.03.04` (BFGS update — limited-memory specialization), `44.03.03` (Newton step — the system being inexactly solved), `43.07.04` (linear CG — the inner Hessian solve)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.06 — Nonlinear conjugate gradient: Fletcher-Reeves and Polak-Ribière
- **id:** `44.03.06`
- **title:** Nonlinear conjugate-gradient methods: Fletcher-Reeves, Polak-Ribière, restarts, and global convergence
- **spec:** Extension of CG from quadratics to general smooth $f$: the update $p_{k+1}=-\nabla f_{k+1}+\beta_{k+1}p_k$ with the **Fletcher-Reeves**, **Polak-Ribière(+)**, and Hestenes-Stiefel choices of $\beta$; the strong-Wolfe line search needed for descent; restart strategies; **global convergence** (Zoutendijk for FR with strong Wolfe; the PR+ safeguard). The matrix-free first-order method between steepest descent and L-BFGS. **Distinct from** the *linear*-system CG of `43.07.04` (this minimises a general nonlinear $f$, not the quadratic of an SPD linear solve).
- **prereqs:** `44.03.01` (Zoutendijk / strong-Wolfe line search), `43.07.04` (linear CG — the quadratic special case it generalizes), `02.05.05` (gradient / quadratic model)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.07 — Nonlinear least squares: the Gauss-Newton and Levenberg-Marquardt methods
- **id:** `44.03.07`
- **title:** Nonlinear least squares: the Gauss-Newton method, the Levenberg-Marquardt trust-region variant, and their convergence
- **spec:** The objective $f(x)=\tfrac12\|r(x)\|^2$ with residual $r:\mathbb R^n\to\mathbb R^m$; the Jacobian $J$, gradient $J^\top r$, and the Gauss-Newton **approximate Hessian** $J^\top J$ (dropping the $\sum r_i\nabla^2 r_i$ term); the **Gauss-Newton** step as a linear least-squares solve (via QR/normal equations) and its rate (fast for small residuals, degraded for large); the **Levenberg-Marquardt** damping $(J^\top J+\lambda I)$ as the trust-region instance for the GN model; convergence. The structured second-order method for data-fitting/inverse problems; cross-ref `43.04.01` for the inner linear least-squares solve.
- **prereqs:** `43.04.01` (linear least squares / normal equations / QR — the inner solve), `44.03.02` (trust region — Levenberg-Marquardt is its LM instance), `02.05.03` (chain rule / Jacobian)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

### 44.03.08 — Computing derivatives: finite differences and automatic differentiation (forward & reverse mode)
- **id:** `44.03.08`
- **title:** Computing derivatives for optimization: finite-difference approximation and automatic differentiation (forward and reverse/adjoint mode)
- **spec:** Finite-difference gradients/Hessians (forward/central) with the step-size truncation-vs-rounding tradeoff; the **computational graph** and **automatic differentiation**: **forward mode** (dual numbers / directional derivatives, cost $\propto n$ inputs) and **reverse mode** (the adjoint sweep / backpropagation, gradient at cost $O(1)\times$ the function, $\propto m$ outputs); the cheap-gradient principle (reverse mode for $\nabla f$ of scalar $f$) and Hessian-vector products via forward-over-reverse. The derivative-supply layer underpinning every gradient/Newton method. **Distinct from** the survey mention of "automatic differentiation" inside the CS/ML overview `25.09.01` — this is the theorem-level construction.
- **prereqs:** `02.05.03` (multivariable chain rule — the foundation of both modes), `02.05.05` (gradient/Hessian being computed), `25.03.01` (algorithmic complexity / big-O — the cost analysis of the sweeps)
- **chapter:** `03-unconstrained-optimization` — `section: optimization-control`, `chapter: 03-unconstrained-optimization`

---

## GENUINE GAPS — 44.04 constrained-nonlinear

### 44.04.01 — KKT optimality for smooth NLP: constraint qualifications and second-order conditions
- **id:** `44.04.01`
- **title:** First- and second-order optimality for constrained nonlinear programs: the KKT conditions, constraint qualifications (LICQ/MFCQ), and second-order sufficient conditions
- **spec:** The smooth NLP $\min f(x)$ s.t. $c_i(x)=0\ (i\in\mathcal E),\ c_i(x)\ge0\ (i\in\mathcal I)$; the tangent/linearized feasible cone, **constraint qualifications** (**LICQ**, **MFCQ**); the **Karush-Kuhn-Tucker first-order necessary conditions** (stationarity of the Lagrangian, primal/dual feasibility, complementary slackness) and the **existence of Lagrange multipliers** under a CQ; strict complementarity; the **second-order necessary** and **sufficient** conditions on the critical cone (the Hessian of the Lagrangian). This is the **concrete smooth-NLP optimality theorem** the constrained algorithms (44.04.02-05) cite — NOT abstract convex Lagrangian duality / strong duality, which is Boyd-Vandenberghe's lane (ch 02). Cross-ref `02.05.04` (implicit function theorem — the CQ/multiplier engine).
- **prereqs:** `02.05.04` (implicit/inverse function theorems — multiplier existence via the constraint surface), `02.05.05` (gradient/Hessian — the second-order conditions), `01.01.13` (spectral theorem — definiteness of $\nabla^2_{xx}\mathcal L$ on the critical cone)
- **chapter:** `04-constrained-nonlinear` — `section: optimization-control`, `chapter: 04-constrained-nonlinear`

### 44.04.02 — Quadratic programming: active-set methods
- **id:** `44.04.02`
- **title:** Quadratic programming: the KKT system and active-set methods for inequality-constrained QP
- **spec:** The QP $\min \tfrac12 x^\top G x+x^\top c$ s.t. linear equalities/inequalities; the **equality-constrained QP KKT system** and its solution (Schur-complement / null-space / range-space methods using `43.03.08` LDLᵀ); the **active-set method** for inequality QP: the working set, the equality-constrained subproblem step, blocking constraints and step-length, Lagrange-multiplier signs driving constraint drops, finite termination for convex (PD $G$) QP; degeneracy/cycling pointer. The QP solver that is the inner subproblem of SQP. Cross-ref `43.03.08` (symmetric-indefinite KKT factorization).
- **prereqs:** `44.04.01` (KKT conditions — the optimality system being solved), `43.03.08` (Bunch-Kaufman LDLᵀ — the indefinite KKT solve), `43.04.01` (least squares / null-space basis via QR)
- **chapter:** `04-constrained-nonlinear` — `section: optimization-control`, `chapter: 04-constrained-nonlinear`

### 44.04.03 — Penalty and augmented Lagrangian methods (LANCELOT)
- **id:** `44.04.03`
- **title:** Penalty, exact-penalty, and augmented-Lagrangian (method-of-multipliers / LANCELOT) methods
- **spec:** The **quadratic penalty** method and its ill-conditioning as $\mu\to\infty$; the **nonsmooth exact $\ell_1$ penalty** and the Maratos effect pointer; the **augmented Lagrangian** $\mathcal L_A(x,\lambda;\mu)=f-\lambda^\top c+\tfrac{\mu}{2}\|c\|^2$, the **method-of-multipliers** update $\lambda\leftarrow\lambda-\mu c$, and why it avoids the penalty ill-conditioning (bounded $\mu$); convergence to a KKT point; the bound-constrained-subproblem **LANCELOT** framework. The multiplier-estimate route to constrained optima.
- **prereqs:** `44.04.01` (KKT / Lagrangian / multipliers), `44.03.05` (large-scale unconstrained / bound-constrained inner solver), `44.03.01` (line search for the inner minimisations)
- **chapter:** `04-constrained-nonlinear` — `section: optimization-control`, `chapter: 04-constrained-nonlinear`

### 44.04.04 — Sequential quadratic programming (SQP)
- **id:** `44.04.04`
- **title:** Sequential quadratic programming: the local SQP step, quasi-Newton Hessians, merit functions, and convergence
- **spec:** SQP as **Newton's method applied to the KKT system**: at each iterate solve the QP $\min \nabla f_k^\top p+\tfrac12 p^\top \nabla^2_{xx}\mathcal L_k\,p$ s.t. linearized constraints, giving the step and updated multipliers; equivalence to Newton on the KKT equations and **local quadratic convergence** under LICQ + second-order sufficiency + strict complementarity; **quasi-Newton (BFGS) approximation** of $\nabla^2_{xx}\mathcal L$ (damped BFGS); **globalization** via an $\ell_1$/augmented-Lagrangian merit function or a filter, and the Maratos effect / second-order correction. The premier method for smooth constrained NLP; inner QP solved by 44.04.02.
- **prereqs:** `44.04.01` (KKT system — what SQP solves by Newton), `44.04.02` (QP active-set — the SQP subproblem solver), `44.03.04` (BFGS — the Lagrangian-Hessian approximation)
- **chapter:** `04-constrained-nonlinear` — `section: optimization-control`, `chapter: 04-constrained-nonlinear`

### 44.04.05 — Interior-point methods for nonlinear programming
- **id:** `44.04.05`
- **title:** Primal-dual interior-point methods for nonlinear programming: the barrier problem, the central path, and Newton steps
- **spec:** The log-**barrier**/slack reformulation of inequality-constrained NLP and the **perturbed KKT system** with the centering parameter $\mu$; the **central path** and its existence; the **primal-dual Newton step** on the perturbed KKT equations (the symmetric-indefinite step solved via `43.03.08`), fraction-to-the-boundary step rule, and $\mu$-reduction; line-search/trust-region globalization and a merit-function/filter; superlinear convergence. The interior-point method **for general smooth NLP** — distinct from Boyd-Vandenberghe's interior-point for **conic/SDP/LP** (ch 05), which is the structured-cone specialization left to that audit.
- **prereqs:** `44.04.01` (KKT / perturbed KKT system), `43.03.08` (symmetric-indefinite LDLᵀ — the primal-dual step), `44.03.03` (Newton step — applied to the barrier KKT equations)
- **chapter:** `04-constrained-nonlinear` — `section: optimization-control`, `chapter: 04-constrained-nonlinear`

---

## COVERED (cross-referenced, not gaps)

Existing units that the proposed algorithm units cross-reference and must NOT duplicate:

Analytic foundations (`02-analysis`):
- **Multivariable Taylor, Hessian, second-derivative test for unconstrained extrema** —
  `02.05.05` (the analytic optimality test underlying every unconstrained unit; the *algorithms*
  to reach those extrema are the gaps).
- **Implicit / inverse function theorems** — `02.05.04` (the engine for constraint
  qualifications and Lagrange-multiplier existence in 44.04.01, and the SQP step).
- **Mean value theorem** — `02.05.02`; **multivariable chain rule** — `02.05.03` (Armijo
  derivation; forward/reverse-mode AD).

Linear-algebra / factorisation prerequisites (`01-foundations`, `43-numerical-analysis`):
- **Eigenvalues / eigenvectors** — `01.01.08`; **spectral theorem / principal axes** — `01.01.13`
  (Hessian definiteness, Hessian modification, the trust-region $(B+\lambda I)$ shift).
- **Cholesky / SPD solve** — `43.03.02` (Newton & trust-region subproblem solves).
- **Bunch-Kaufman symmetric-indefinite LDLᵀ** — `43.03.08` (the KKT / primal-dual / SQP step).
- **Linear least squares: normal equations / QR / SVD** — `43.04.01` (the inner solve of
  Gauss-Newton and of QP null-space methods).

Distinct numerical-analysis units (related but NOT the optimization algorithm):
- **Conjugate gradient for SPD *linear systems*** — `43.07.04` (A-norm/Krylov minimisation;
  the *linear* special case cross-ref'd by nonlinear-CG 44.03.06 and inexact-Newton 44.03.05,
  not the same unit).
- **Newton & secant for *root-finding*** — `43.02.03` (the $f(x)=0$ quadratic-convergence proof,
  cross-ref'd by Newton-for-optimization 44.03.03, not duplicated).

Survey-level mentions (not theorem-level units; the proposed unit is the real construction):
- **"Automatic differentiation" named in the AI/ML overview** — `25.09.01` (overview prose;
  44.03.08 is the actual forward/reverse-mode construction with the cheap-gradient theorem).
- **Algorithmic complexity / big-O** — `25.03.01` (cost analysis cross-ref for AD).

## OUT OF SCOPE (other parallel audits / other source books)

- **Abstract convex Lagrangian duality, weak/strong duality, the dual problem, Slater's
  condition, conic & SDP modelling, and interior-point for LP/SOCP/SDP** — Boyd-Vandenberghe's
  lane (ch 02 `convex-duality-kkt` and ch 05 `conic-semidefinite`). 44.04.05 covers
  interior-point only for *general smooth NLP*, not the structured-cone theory.
- **Subdifferentials, conjugate (Fenchel) duality, supporting/separating hyperplanes, convex
  sets/functions abstract theory** — Rockafellar's lane (ch 01 `convex-sets-functions`).
- **First-order large-scale / proximal / mirror-descent / stochastic-gradient / ADMM methods**
  — ch 06 `first-order-large-scale`; a Beck (*First-Order Methods in Optimization*) or
  Bubeck audit owns subgradient/proximal/accelerated and SGD machinery. Nocedal-Wright's
  L-BFGS/inexact-Newton (44.03.05) is the second-order large-scale layer, distinct from these.
- **The simplex method and LP duality / sensitivity** — Nocedal-Wright ch 13 treats LP, but the
  LP simplex/duality core is better owned by a dedicated LP source (or Boyd for LP-as-conic);
  active-set QP (44.04.02) is the structurally analogous unit retained here. Flag for the
  ch-05/ch-02 audits rather than manufacturing an LP-simplex unit in this algorithm lane.
- **Derivative-free / pattern-search / Nelder-Mead** — Nocedal-Wright ch 9; a narrow,
  low-theorem-payoff appendix relative to the gradient-based core; reserve unless a DFO source
  is later audited.
