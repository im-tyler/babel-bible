# Audit — Boyd & Vandenberghe, *Convex Optimization* (Cambridge, 2004)

- **source_book:** `boyd-vandenberghe`
- **source_curriculum:** `optimization-control`
- **target section:** `content/44-optimization-control/` (frontmatter `section: optimization-control`)
- **date:** 2026-06-07

## Verdict

`44-optimization-control` is a **freshly scaffolded, empty** 8-chapter skeleton. Boyd &
Vandenberghe is the canonical text for the **convex-modeling + duality + conic/interior-point**
payload, and that payload is **almost entirely absent from the live corpus**. The corpus carries
plenty of *adjacent* material — geometric Hahn–Banach separation as a functional-analysis theorem
(`02.11.02`), the Legendre–Fenchel transform in the large-deviations setting (`37.07.03`),
multivariable extrema and the Lagrange-multiplier rule for *equality* constraints (`02.05.05`),
dual cones in toric geometry (`04.11.02`), Schur-complement *identities* in linear algebra
(`43.03.02`) — but in **every** case the corpus stops short of the finite-dimensional,
optimization-grade treatment that Boyd owns. There is **no** KKT unit, **no** LP/conic/SDP/SOCP/GP
modeling, **no** strong-duality-with-Slater theorem, **no** interior-point/barrier method anywhere
in `content/`.

Each candidate below was grepped against the whole tree (filenames + bodies). I confirmed each is
a genuine gap and assigned ids in free slots in chapters 01, 02, 03, 05 per Boyd's lane.

**Lane discipline (parallel siblings).** Rockafellar (ch 01/02) owns abstract convex-analysis
theory — subdifferential calculus, conjugate-function theory, infimal convolution, polyhedral
theory; those are deferred to RF and NOT proposed here. Nocedal–Wright (ch 03/04) owns the
algorithm spine — line-search/trust-region globalization, quasi-Newton (BFGS), SQP, active-set;
deferred to NW. Boyd's lane = **convex-function operations that preserve convexity** (ch 01),
**Lagrange duality / KKT / Slater as used in practice** (ch 02), the **conic + interior-point +
modeling** core (ch 05), and the **textbook equality-constrained Newton** that sets up the barrier
method (ch 03). The gaps below are scoped to that lane and chosen to not collide with RF/NW.

**Prereqs verified on disk:**
`01.01.13` (spectral theorem), `01.01.14` (Rayleigh quotient / Courant–Fischer),
`01.01.15` (bilinear/quadratic form), `01.01.18` (hyperplanes / affine subspaces),
`02.05.05` (multivariable Taylor / extrema, equality-constraint Lagrange multipliers),
`02.11.02` (Hahn–Banach, analytic + geometric/separation forms),
`37.07.03` (Legendre–Fenchel transform / convex duality, LDP setting),
`43.02.03` (Newton's method, superlinear/quadratic convergence),
`43.03.02` (Cholesky / SPD solve), `04.11.02` (rational polyhedral cone / dual cone).

---

## GENUINE GAPS

### 44.01.01 — Convex sets, convex functions, and the operations that preserve convexity
- **spec:** Convex/affine/conic sets, convex hull, the canonical convex sets (hyperplanes, halfspaces, polyhedra, the norm/second-order cone, the positive-semidefinite cone); convex functions via the epigraph and the first-/second-order conditions (\(\nabla^2 f\succeq0\)); the convexity-preserving operations (nonnegative weighted sum, affine precomposition, pointwise max/sup, partial minimization, perspective \( (x,t)\mapsto t f(x/t)\), composition rules); quasiconvexity and log-concavity. The "calculus" that lets one *recognize* a convex problem. Distinct from RF's abstract convex-analysis theory and from `02.11.02`'s separation theorem.
- **prereqs:** `01.01.18` (hyperplanes/affine subspaces), `02.05.05` (multivariable Taylor/extrema), `01.01.15` (quadratic forms), `01.01.13` (spectral theorem, for the PSD-cone characterization)
- **chapter:** `01-convex-sets-functions` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.02.01 — Lagrange duality, the dual function, and weak/strong duality with Slater's condition
- **spec:** The Lagrangian \(L(x,\lambda,\nu)\), the dual function \(g(\lambda,\nu)=\inf_x L\) as a pointwise-inf of affine functions (hence always concave), the dual problem, weak duality and the duality gap; strong duality and **Slater's constraint qualification** (strict feasibility) for convex problems; the saddle-point/minimax interpretation and connection to the geometric separation theorem (`02.11.02`). Distinct from the LDP-flavoured `37.07.03` (which is the conjugate of a rate function, not the constrained-optimization dual) and from RF's abstract conjugate-duality theory.
- **prereqs:** `44.01.01` (convex functions/sets), `02.11.02` (Hahn–Banach / separating hyperplane), `02.05.05` (Lagrange multipliers, equality case)
- **chapter:** `02-convex-duality-kkt` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.02.02 — The Karush–Kuhn–Tucker (KKT) optimality conditions
- **spec:** The KKT system — stationarity, primal/dual feasibility, and **complementary slackness** \(\lambda_i f_i(x)=0\) — for an inequality-and-equality-constrained problem; KKT as necessary conditions under a constraint qualification, and as *sufficient* (and equivalent to primal–dual optimality) for convex problems; recovery of the equality-only Lagrange rule (`02.05.05`) as the special case. Worked reading of the conditions as the certificate produced by strong duality (`44.02.01`).
- **prereqs:** `44.02.01` (Lagrange duality / strong duality), `02.05.05` (equality-constraint multipliers), `44.01.01` (convex functions)
- **chapter:** `02-convex-duality-kkt` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.02.03 — Fenchel duality and the conjugate function in constrained optimization
- **spec:** The convex conjugate \(f^*(y)=\sup_x(y^\top x-f(x))\) as the optimization workhorse (not the LDP rate-function setting of `37.07.03`): Fenchel's inequality, the conjugate of common modeling atoms (norms → dual-norm indicator, log-sum-exp → negative entropy, indicator of a cone → its dual cone), and the **Fenchel dual** of \(\min f(x)+g(Ax)\). How conjugates assemble the dual function of `44.02.01` mechanically. Scoped to the *computation/use* of conjugates for modeling; the abstract Fenchel–Moreau biconjugation theorem and subdifferential calculus stay with Rockafellar.
- **prereqs:** `44.01.01` (convex functions/operations), `37.07.03` (Legendre–Fenchel transform, LDP context), `44.02.01` (Lagrange duality)
- **chapter:** `02-convex-duality-kkt` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.03.01 — Newton's method for unconstrained and equality-constrained minimization
- **spec:** The Newton step \(\Delta x_{\mathrm{nt}}=-\nabla^2 f(x)^{-1}\nabla f(x)\), the Newton decrement \(\lambda(x)\) as a stopping/affine-invariant measure, damped (backtracking) vs pure Newton and the two-phase local quadratic convergence; **equality-constrained Newton** via the KKT linear system \(\begin{psmallmatrix}\nabla^2f&A^\top\\A&0\end{psmallmatrix}\), its solution by block elimination / Cholesky on the Schur complement (`43.03.02`), affine invariance. The textbook Newton that the barrier method (`44.05.05`) calls as its inner loop. Distinct from the scalar/rootfinding Newton (`43.02.03`) and from NW's globalization/quasi-Newton machinery.
- **prereqs:** `43.02.03` (Newton's method, convergence), `44.01.01` (convex functions), `43.03.02` (Cholesky / SPD solve), `02.05.05` (equality-constraint optimality)
- **chapter:** `03-unconstrained-optimization` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.05.01 — Conic optimization: LP, second-order-cone, and semidefinite programming
- **spec:** The conic standard form \(\min c^\top x\) s.t. \(Ax=b,\ x\in K\) for the three workhorse cones — nonnegative orthant (LP), second-order/Lorentz cone (SOCP), PSD cone (SDP/LMIs); generalized inequalities and **dual cones** (`04.11.02`), conic duality, and the modeling hierarchy LP ⊂ SOCP ⊂ SDP. Canonical reductions (eigenvalue minimization, robust LS, matrix-norm minimization as SDPs). The expressive-power core of convex modeling; nothing comparable exists in the corpus.
- **prereqs:** `44.01.01` (convex sets / PSD & SOC cones), `44.02.01` (Lagrange/conic duality), `04.11.02` (dual cone), `01.01.13` (spectral theorem, for the PSD cone)
- **chapter:** `05-conic-semidefinite` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.05.02 — Linear-programming duality, Farkas' lemma, and the simplex method
- **spec:** LP standard/inequality form; **LP duality** (primal–dual pair, weak/strong duality with *no* constraint qualification needed, complementary slackness); **Farkas' lemma** and the theorems-of-the-alternative as the separation-theorem (`02.11.02`) made concrete; the **simplex method** — basic feasible solutions = polyhedron vertices, pivoting, optimality test, and a word on degeneracy/cycling. The combinatorial-LP foundation absent from the corpus (max-flow/min-cut at `40.04.09` is graph-theoretic, not the LP-duality treatment).
- **prereqs:** `44.02.01` (Lagrange/strong duality), `02.11.02` (separating hyperplane / Farkas), `01.01.18` (hyperplanes/polyhedra), `44.01.01` (convex/polyhedral sets)
- **chapter:** `05-conic-semidefinite` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.05.03 — Geometric programming and convex modeling via change of variables
- **spec:** Posynomials and monomials, the geometric program in posynomial form, and its **convexification** by the log-change-of-variables \(y=\log x\) turning posynomial constraints into log-sum-exp (convex) constraints; the GP dual and engineering-design applications. The canonical example of "a non-obviously-convex problem made convex by a transform," a signature Boyd topic with no corpus presence.
- **prereqs:** `44.01.01` (convexity-preserving operations, log-sum-exp), `44.05.01` (conic/convex modeling), `44.02.01` (duality)
- **chapter:** `05-conic-semidefinite` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

### 44.05.05 — Interior-point methods: the barrier method, central path, and primal–dual algorithms
- **spec:** The logarithmic barrier and **self-concordance**, the **central path** as the trajectory of \(\min t c^\top x+\phi(x)\) and its limit to the KKT point, the barrier (sequential unconstrained) method with its \(O(\sqrt{m})\)-iteration polynomial complexity, and the **primal–dual interior-point** method (perturbed KKT / Mehrotra-style Newton steps). The inner Newton solve is `44.03.01`. The polynomial-time engine of modern convex optimization; entirely absent (corpus "barrier"/"interior" hits are Dahlquist barriers and set-interiors, unrelated).
- **prereqs:** `44.03.01` (Newton / equality-constrained Newton), `44.02.02` (KKT conditions), `44.05.01` (conic optimization), `44.02.01` (duality / duality gap as stopping rule)
- **chapter:** `05-conic-semidefinite` · **section:** `optimization-control`
- **source_book:** `boyd-vandenberghe` · **source_curriculum:** `optimization-control`

---

## COVERED (not gaps)

Adjacent material that exists but does NOT cover the optimization-grade topic (cited above as
prereqs, not re-proposed):

- **Geometric Hahn–Banach / separating-hyperplane theorem** — `02.11.02` (the abstract separation
  theorem; the finite-dim *Farkas / theorems-of-the-alternative* form for LP is gap 44.05.02, and
  the *duality* use is gap 44.02.01).
- **Legendre–Fenchel transform / convex duality** — `37.07.03` (in the large-deviations
  rate-function setting; the *constrained-optimization* conjugate-as-modeling-tool is gap 44.02.03).
- **Lagrange multipliers (equality constraints) / constrained extrema** — `02.05.05` (the
  equality-only rule; the inequality KKT generalization is gap 44.02.02).
- **Dual cone / rational polyhedral cone** — `04.11.02` (toric-geometry context; conic-program
  duality is gap 44.05.01).
- **Newton's method (convergence theory)** — `43.02.03` (scalar/rootfinding; the
  unconstrained/equality-constrained minimization Newton is gap 44.03.01).
- **Schur complement, Cholesky / SPD solve** — `43.03.02`, `43.03.08` (linear-algebra identities
  and factorizations; used as machinery inside 44.03.01, not the optimization content).
- **PSD cone / spectral theorem / Rayleigh quotient / Courant–Fischer** — `01.01.13`, `01.01.14`
  (linear-algebra foundations the SDP unit 44.05.01 builds on).
- **Convex functions appearing incidentally** (Jensen, Lp/Hölder/Minkowski convexity,
  martingale/large-deviation convexity) — `02.07.06`, `37.07.*` etc.; none is the convex-analysis
  *for-optimization* unit (gap 44.01.01).
- **Max-flow / min-cut, network flows** — `40.04.09` (graph-theoretic; the LP-duality treatment is
  gap 44.05.02, which subsumes it as a special case but is not duplicated by it).

Deferred to **parallel sibling audits** (do not duplicate):

- **Abstract convex analysis** — subdifferential calculus, conjugate-function (Fenchel–Moreau)
  theory, infimal convolution, polyhedral theory, recession cones → **Rockafellar** (ch 01/02).
- **Unconstrained/constrained nonlinear *algorithms*** — line search, trust region, quasi-Newton
  (BFGS/L-BFGS), nonlinear CG, SQP, active-set, penalty/augmented-Lagrangian → **Nocedal–Wright**
  (ch 03/04).
- **First-order / large-scale methods** — subgradient, proximal-gradient/ISTA, ADMM, mirror
  descent, accelerated gradient → ch 06, owned by a first-order-methods source (not Boyd's core;
  Boyd's ch 9–11 is the interior-point payload captured above).

## OUT OF SCOPE

- **Applications chapters (ch 4–7 of B&V: statistical estimation, geometry, circuit design, control
  examples).** Worked applications, not theorem-level mathematics; the modeling *machinery* is
  captured in 44.01.01 / 44.05.01–03. Not spun out as units.
- **Numerical linear algebra appendix (B&V App. C).** Cholesky, block elimination, Schur-complement
  solves, sparsity exploitation — already in the corpus (`43.03.*`) and used as machinery, not new
  content for this spine.
- **The DCP / disciplined-convex-programming software discipline and CVX tooling.** A software
  methodology, not mathematics; belongs to a CS/tooling note, not this spine.

---

## RETURN SUMMARY
- **Genuine gaps:** 9 (44.01.01, 44.02.01, 44.02.02, 44.02.03, 44.03.01, 44.05.01, 44.05.02, 44.05.03, 44.05.05)
- **COVERED:** 9 adjacent-but-not-equivalent corpus anchors + 3 sibling-deferred clusters
- **OUT OF SCOPE:** 3
- **Gap file:** `plans/expansion/optimization-control/_audit/boyd-vandenberghe.gaps.md`
