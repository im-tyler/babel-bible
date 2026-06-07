# Audit — Süli & Mayers, *An Introduction to Numerical Analysis* (CUP, 2003)

- **source_book:** `suli-mayers`
- **source_curriculum:** `numerical-analysis`
- **target chapters:** `content/43-numerical-analysis/02-nonlinear-equations/`,
  `content/43-numerical-analysis/08-interpolation-approximation/`,
  `content/43-numerical-analysis/09-numerical-quadrature/`
  (frontmatter `section: numerical-analysis`;
  `chapter: nonlinear-equations` / `interpolation-approximation` / `numerical-quadrature`;
  id format `43.02.<UU>` / `43.08.<UU>` / `43.09.<UU>`)
- **date:** 2026-06-07

## Verdict

The entire `43-numerical-analysis` section is a **freshly scaffolded set of empty chapter
directories** (`01`…`11` all empty — `ls` confirms 0 files each). Nothing in `content/`
develops numerical analysis as a subject. The corpus sweep surfaced only the **underlying
pure-analysis theorems** that these numerical methods rest on — they exist, but as
abstract existence/structure statements, NOT as algorithms with error/convergence-rate
analysis. Per the brief, where the THEOREM exists but the NUMERICAL-METHOD treatment
(algorithm + error/convergence-order analysis) does not, the numerical unit is a genuine
gap and I cross-reference the existing theorem as a prereq rather than re-proving it.

What the verify-against-corpus sweep found:

- **Banach / contraction fixed-point theorem** is *stated* in `02.01.05` (metric space):
  "$f$ a contraction $\Rightarrow$ unique fixed point reached by iteration," explicitly
  naming Newton's method and Picard–Lindelöf as downstream users. It gives the abstract
  existence statement, **not** the numerical fixed-point-iteration treatment: linear
  convergence with asymptotic rate $|g'(x^\*)|$, the order-of-convergence framework, error
  estimates, or stopping criteria. The numerical layer is a genuine gap (43.02.02), and it
  cross-refs `02.01.05`.
- **Newton's method** appears only as a *named tool/historical aside* — the
  smoothed-Newton iteration of the Nash–Moser hard IFT (`02.05.04`), KAM (`05.09.01`),
  Hensel's lemma's "Newton-style" lifting (`21.02.04`). **No unit constructs the scalar /
  $\mathbb{R}^n$ Newton iteration $x_{k+1}=x_k-f(x_k)/f'(x_k)$ and proves quadratic
  convergence.** Genuine gap (43.02.03).
- **Taylor's theorem with Lagrange remainder** is fully proved in `02.05.02` (single-var,
  via Cauchy MVT) and extended in `02.05.05` (multivariable). This is the standard error
  engine for interpolation/quadrature; I cross-ref it as a prereq, never re-prove it.
- **Weierstrass approximation**: only the *trigonometric / circle* form (density of
  trig polynomials in $C(\mathbb{T})$ via Fejér) appears, in `02.10.01`. The polynomial
  best-approximation / minimax theory on $[a,b]$ (Chebyshev equioscillation, Chebyshev
  polynomials as the minimax-error machinery) is absent — genuine gap (43.08.04).
- **Gram–Schmidt** is in `01.01.09` and the *abstract* notion of orthogonal polynomials is
  name-dropped in `02.11.07` and used in random-matrix theory (`37.08.*`); **no unit builds
  the orthogonal-polynomial families (Legendre/Chebyshev) as a least-squares /
  Gauss-quadrature tool.** Legendre polynomials appear physically in `12.05.02` (spherical
  harmonics) — a different purpose. Genuine gap (43.08.06, feeding 43.09.03).
- **Quadrature / numerical integration**: filename + body sweep returned **nothing** in
  `content/`. The whole quadrature chapter is open ground.

So chapters 43.02, 43.08, 43.09 are **genuine gaps in full**, anchored on existing
pure-analysis prereqs. Tight high-value spine below; worked examples (Runge's example, the
$\tfrac1{1+25x^2}$ function, specific Newton–Cotes weights) are folded into the unit they
illustrate.

**Prereq convention.** Verified-existing anchors (all confirmed present by
`find content -name "<id>*"`): `02.01.05` (metric space + Banach fixed-point),
`02.05.02` (MVT + Taylor–Lagrange remainder, single-var), `02.05.04` (inverse/implicit
function thm, for the $\mathbb{R}^n$ Jacobian setting of Newton-on-systems), `02.05.05`
(multivariable Taylor), `01.01.09` (Gram–Schmidt + finite-dim inner-product space),
`02.11.07` (inner-product space, orthogonality/projection), `01.01.12` (SVD — cross-ref
only). Prereqs of the form `43.0x.xx` are **sibling units in this section**; `43.01`
(conditioning/floating-point) is **Trefethen–Bau's** territory (audited in parallel), so I
list `43.01.xx` only as a forward cross-ref, not as a hard dependency I own.

---

## GENUINE GAPS

### 43.02.01 — The bisection method and the scalar root-finding problem
- **spec:** The root-finding problem $f(x)=0$ for continuous $f$; bracketing via the
  intermediate value theorem; the bisection algorithm, its guaranteed convergence and the
  exact a-priori error bound $|x_n-x^\*|\le (b-a)/2^{n+1}$ (linear, rate $1/2$, one function
  evaluation per step); robustness vs. slowness trade-off; stopping criteria and the role of
  finite-precision in the achievable accuracy (forward cross-ref to Trefethen's 43.01).
- **prereqs:** `02.01.05`, `02.05.02`
- **chapter:** `nonlinear-equations` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

### 43.02.02 — Fixed-point iteration, contraction convergence, and order of convergence
- **spec:** Reformulating $f(x)=0$ as $x=g(x)$; the simple iteration $x_{n+1}=g(x_n)$; the
  contraction-mapping convergence theorem applied numerically — local convergence when
  $|g'(x^\*)|<1$ with asymptotic **linear** rate $|g'(x^\*)|$, divergence when $>1$; the
  general definition of **order of convergence** $p$ (and asymptotic error constant) via
  $|e_{n+1}|\approx C|e_n|^p$; superlinear/quadratic order when low derivatives of $g$
  vanish at $x^\*$; a-posteriori error control. Cross-refs the abstract Banach fixed-point
  statement in `02.01.05` and builds the numerical convergence-rate layer on top of it.
- **prereqs:** `02.01.05`, `02.05.02`, `43.02.01`
- **chapter:** `nonlinear-equations` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`
- **dedup:** `02.01.05` states existence/uniqueness of the fixed point; this unit owns the
  **rate/order** analysis ($|g'(x^\*)|$, the order-$p$ framework) that the metric-space unit
  does not develop. Cross-ref it as the existence prereq.

### 43.02.03 — Newton's method and the secant method: superlinear and quadratic convergence
- **spec:** Newton's iteration $x_{n+1}=x_n-f(x_n)/f'(x_n)$ as a fixed-point map with
  $g'(x^\*)=0$; the local **quadratic** convergence theorem (via Taylor with remainder,
  $e_{n+1}\approx \tfrac{f''(x^\*)}{2f'(x^\*)}e_n^2$) and its hypotheses (simple root, $f''$
  continuous, sufficiently close start); failure modes (multiple roots $\Rightarrow$ linear,
  overshoot, basins); the **secant method** as the derivative-free finite-difference variant
  with superlinear order $\varphi=(1+\sqrt5)/2$; **Newton for systems** $F(\mathbf x)=\mathbf 0$
  using the Jacobian (cross-ref the inverse-function-theorem setting `02.05.04`,
  `02.05.05`) and its quadratic convergence.
- **prereqs:** `43.02.02`, `02.05.02`, `02.05.04`, `02.05.05`
- **chapter:** `nonlinear-equations` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`
- **dedup:** Newton is only *named* in `02.05.04`/`05.09.01`/`21.02.04`; no unit performs the
  scalar/system construction with a convergence-order proof. This unit owns it.

### 43.08.01 — Polynomial interpolation: existence, uniqueness, and the Lagrange form
- **spec:** The interpolation problem (match $n+1$ data $(x_i,f_i)$ with a degree-$\le n$
  polynomial); existence and **uniqueness** (Vandermonde nonsingularity / a polynomial of
  degree $\le n$ with $n+1$ roots is zero); the **Lagrange** cardinal-basis form and its
  fragility under node changes; the **Newton divided-difference** form, the divided-difference
  recurrence, and its incremental (add-a-node) efficiency; equivalence of the two forms.
- **prereqs:** `01.01.09`, `02.05.02`
- **chapter:** `interpolation-approximation` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

### 43.08.02 — Interpolation error and the Runge phenomenon
- **spec:** The interpolation error theorem
  $f(x)-p_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}\prod_i(x-x_i)$ (proof via Rolle / the Taylor
  remainder engine of `02.05.02`); the node polynomial $\prod(x-x_i)$ as the controllable
  factor; the **Runge phenomenon** — divergence of equispaced-node interpolation for
  $1/(1+25x^2)$ despite analyticity — and why node *placement* (Chebyshev nodes, forward
  cross-ref to 43.08.04) cures it; divided differences as derivatives in the limit.
- **prereqs:** `43.08.01`, `02.05.02`
- **chapter:** `interpolation-approximation` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

### 43.08.03 — Hermite interpolation and piecewise / cubic spline interpolation
- **spec:** **Hermite** interpolation (match values and derivatives; the generalized
  divided-difference construction and its error term with the repeated-node product);
  piecewise-polynomial interpolation to defeat Runge; **cubic splines** — the $C^2$
  piecewise-cubic, the tridiagonal system for the moments/second-derivatives, natural vs.
  clamped vs. not-a-knot end conditions, existence/uniqueness, and the
  minimum-curvature (minimal $\int (s'')^2$) optimality property; $O(h^4)$ error.
- **prereqs:** `43.08.01`, `43.08.02`
- **chapter:** `interpolation-approximation` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

### 43.08.04 — Best uniform approximation, minimax, and Chebyshev polynomials
- **spec:** Best approximation in $C[a,b]$ under the sup-norm; existence of a best
  polynomial approximant and the **Chebyshev equioscillation theorem** characterizing it;
  the **Chebyshev polynomials** $T_n(\cos\theta)=\cos n\theta$, their three-term recurrence,
  extremal (minimal sup-norm monic) property, and roots as the optimal interpolation nodes
  (closing the Runge loop from 43.08.02); near-minimax interpolation. Cross-refs the
  trigonometric Weierstrass density in `02.10.01` as the classical density backdrop.
- **prereqs:** `43.08.02`, `02.11.07`
- **chapter:** `interpolation-approximation` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`
- **dedup:** only the *circle* Weierstrass (Fejér) form is in `02.10.01`; the polynomial
  minimax / equioscillation / Chebyshev-extremal theory is absent. This unit owns it.

### 43.08.05 — Least-squares approximation and orthogonal polynomials
- **spec:** Best $L^2$-approximation by polynomials as orthogonal projection in an
  inner-product space (cross-ref `02.11.07`); the **normal equations** and their
  ill-conditioning in the monomial basis (forward cross-ref to Trefethen 43.01/43.04);
  constructing **orthogonal polynomial** families by Gram–Schmidt on $\{1,x,x^2,\dots\}$
  against a weight $w$ (cross-ref `01.01.09`); the **three-term recurrence** for orthogonal
  polynomials and the fact their real, simple, interlacing roots lie in $(a,b)$ — the
  property that powers Gauss quadrature (forward cross-ref 43.09.03); Legendre/Chebyshev as
  the canonical weighted instances.
- **prereqs:** `02.11.07`, `01.01.09`, `43.08.01`
- **chapter:** `interpolation-approximation` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`
- **dedup:** orthogonal polynomials are *named* in `02.11.07` and used spectrally in
  `37.08.*`; Legendre polynomials appear physically in `12.05.02`. None builds the
  approximation-theory / recurrence / Gauss-node machinery. This unit owns it. Linear-algebra
  least-squares (QR, normal-equation conditioning) is **Trefethen's 43.04** — deferred; this
  unit owns only the *function*-approximation / orthogonal-polynomial layer.

### 43.09.01 — Newton–Cotes rules and their error via the Peano kernel
- **spec:** Interpolatory quadrature: integrate the interpolating polynomial to get a rule
  $\int_a^b f\approx\sum w_i f(x_i)$; the **closed Newton–Cotes** family (trapezoidal,
  Simpson's, Simpson's 3/8) with their exactness degrees; error terms (e.g. trapezoidal
  $-\tfrac{(b-a)^3}{12}f''(\xi)$, Simpson $-\tfrac{(b-a)^5}{2880}f^{(4)}(\xi)$); the
  **Peano kernel theorem** as the systematic tool deriving these error representations
  $E(f)=\int K(t)f^{(k)}(t)\,dt$ and giving the sign/order of the leading error; instability
  of high-order Newton–Cotes (negative weights).
- **prereqs:** `43.08.01`, `43.08.02`, `02.05.02`
- **chapter:** `numerical-quadrature` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

### 43.09.02 — Composite rules, Euler–Maclaurin, and Romberg / adaptive quadrature
- **spec:** Composite trapezoidal/Simpson rules and their global $O(h^2)/O(h^4)$ error from
  summing local errors; the **Euler–Maclaurin formula** giving the trapezoidal rule's full
  asymptotic error expansion in even powers of $h$ (Bernoulli-number coefficients), which
  (a) explains spectral accuracy for smooth periodic integrands and (b) justifies
  **Romberg integration** via Richardson extrapolation of the trapezoidal rule on the $h^2$
  expansion; **adaptive quadrature** (local error estimation by subdivision and refinement).
- **prereqs:** `43.09.01`
- **chapter:** `numerical-quadrature` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

### 43.09.03 — Gauss quadrature via orthogonal polynomials
- **spec:** Gaussian quadrature: choosing both nodes and weights to maximize exactness;
  the theorem that the $n$-point rule with nodes at the roots of the degree-$n$ orthogonal
  polynomial (for weight $w$) and the associated weights is exact for all polynomials of
  degree $\le 2n-1$ (and no rule does better); positivity of the Gauss weights and
  consequent stability/convergence; the error term via the $(2n)$th derivative; Gauss–Legendre,
  Gauss–Chebyshev, Gauss–Hermite/Laguerre as weighted instances; comparison with
  Newton–Cotes. Builds directly on the orthogonal-polynomial root structure of 43.08.05.
- **prereqs:** `43.08.05`, `43.09.01`
- **chapter:** `numerical-quadrature` · **section:** `numerical-analysis`
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`

---

## COVERED (not gaps)

- **Banach / contraction fixed-point theorem (abstract existence-uniqueness)** — `02.01.05`.
  The numerical iteration's **convergence rate / order-of-convergence** layer is 43.02.02,
  which cross-refs it. Not re-proposed.
- **Taylor's theorem with Lagrange remainder (single-var)** — `02.05.02`; **multivariable
  Taylor** — `02.05.05`. The error engine for interpolation/quadrature; used as a prereq,
  never re-proved.
- **Inverse / implicit function theorem (Jacobian setting for Newton-on-systems)** —
  `02.05.04`. Prereq cross-ref for 43.02.03, not re-proposed.
- **Gram–Schmidt orthonormalisation / finite-dim inner-product space** — `01.01.09`;
  **inner-product space, orthogonal projection** — `02.11.07`. Prereqs for the
  orthogonal-polynomial / least-squares units (43.08.05); the *polynomial-approximation*
  specialization is the gap.
- **Trigonometric Weierstrass / density of trig polynomials (Fejér)** — `02.10.01`. The
  polynomial **minimax / Chebyshev-equioscillation** theory (43.08.04) is the distinct,
  uncovered numerical-approximation content; `02.10.01` is cited as the density backdrop.
- **Orthogonal polynomials (abstract / spectral / physical)** — named in `02.11.07`, used in
  random-matrix theory `37.08.*`, Legendre in `12.05.02` (spherical harmonics). None develops
  the approximation-theory recurrence/Gauss-node machinery (43.08.05/43.09.03).
- **SVD / least-squares (linear-algebra)** — `01.01.12`, plus regression `26.06.01`. The
  *linear-algebra* least-squares (QR, normal-equation conditioning) is **Trefethen's 43.04**
  — deferred, not proposed here.

## OUT OF SCOPE

- **Conditioning, numerical stability, floating-point arithmetic, backward error** (Süli &
  Mayers Ch. 1-fragments) — **Trefethen–Bau, chapter 43.01**; deferred. Referenced as forward
  cross-refs from 43.02.01 (precision-limited accuracy) and 43.08.05 (normal-equation
  ill-conditioning) only.
- **Solution of linear systems (Gaussian elimination / LU), matrix eigenvalue problems,
  iterative/Krylov methods, QR least-squares** (Süli & Mayers Ch. 2,3,5) — **Trefethen–Bau,
  chapters 43.03–43.07**; entirely deferred.
- **ODE-IVP numerical methods (Euler / Taylor-series / Runge–Kutta one-step construction,
  linear multistep, A-stability, stiffness, Dahlquist barriers)** (Süli & Mayers Ch. 12) —
  **LeVeque, chapter 43.10**. The corpus has **no** numerical-ODE unit (verified: no
  Runge-Kutta/Euler-method/one-step files), so the *elementary one-step/Taylor/RK
  construction* is technically uncovered. **Per the audit-coordination directive I DEFER it
  to LeVeque** rather than propose a 43.10 unit: LeVeque's stability-theory audit naturally
  opens with the one-step construction, and splitting it risks duplication. **COORDINATE
  WITH LeVeque** — if LeVeque's audit assumes the elementary RK/Euler construction
  pre-exists, fold a single "one-step methods: Euler, Taylor-series, explicit Runge–Kutta,
  local/global truncation error" intro unit into 43.10 (no stability theory). Flagged, not
  claimed.
- **Boundary-value problems for ODEs / finite-difference & finite-element PDE discretization**
  (Süli & Mayers Ch. 13, 14) — **LeVeque, chapter 43.11** (and the FEEC material already in
  `24-numerical-pde`, e.g. `24.04.07`). Deferred.

---

## RETURN SUMMARY
- **Genuine gaps:** 11 — 43.02.01–43.02.03 (3), 43.08.01–43.08.05 (5), 43.09.01–43.09.03 (3).
- **COVERED:** 7 topic-clusters (each mapped to existing ids: `02.01.05`, `02.05.02`/`02.05.05`,
  `02.05.04`, `01.01.09`/`02.11.07`, `02.10.01`, `37.08.*`/`12.05.02`, `01.01.12`/`26.06.01`).
- **OUT OF SCOPE:** 4 clusters (43.01 Trefethen conditioning/floating-point; 43.03–43.07
  Trefethen numerical linear algebra; 43.10 ODE — **deferred to LeVeque, coordinate flag**;
  43.11 FD/FE PDE — LeVeque + existing `24-numerical-pde`).
- **Coordination flags:** elementary ODE one-step/RK construction deferred to LeVeque (43.10)
  with a fold-in note; least-squares/conditioning forward-cross-ref Trefethen (43.01/43.04).
- **Gap file:** `plans/expansion/numerical-analysis/_audit/suli-mayers.gaps.md`
