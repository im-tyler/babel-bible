# Completeness re-audit — Süli & Mayers, *An Introduction to Numerical Analysis* (CUP, 2003)

- **source_book:** `suli-mayers`
- **source_curriculum:** `numerical-analysis`
- **date:** 2026-06-07
- **predecessor:** `plans/expansion/numerical-analysis/_audit/suli-mayers.gaps.md` (11 gaps, all SHIPPED)

## Method

The first-pass audit proposed 11 Süli-Mayers gaps (43.02.×3, 43.08.×5, 43.09.×3),
all now shipped. The spine has since shipped 42 units across 11 chapters. This pass
re-walks the *remaining* Süli-Mayers chapter topics against the live corpus to find
anything STILL genuinely absent, verifying every candidate by filename + body grep
before listing.

## Verdict — 1 new gap

Three candidates were checked explicitly. Two are COVERED; one (two-point ODE
boundary-value problems) is a GENUINE GAP — it is Süli-Mayers Ch. 13, a distinct
topic from the elliptic-PDE chapter 43.11 and from the ODE-IVP chapter 43.10, and
nothing in the corpus develops it.

---

## GENUINE GAP

### 43.10.06 — Two-point boundary-value problems for ODEs: shooting and finite differences
- **spec:** The two-point BVP for a second-order ODE on an interval, $-u''(x) +
  q(x)u(x) = f(x)$ on $[a,b]$ with Dirichlet (and mixed/Neumann) boundary data —
  the genuinely *boundary*-coupled problem, NOT an initial-value march. Two solution
  families: (i) the **shooting method** — recast the BVP as an IVP with an unknown
  initial slope $s$, integrate to $b$ with a 43.10 one-step/multistep integrator,
  and solve the residual equation $\phi(s) = u(b;s) - \beta = 0$ for $s$ by a
  root-finder (cross-ref Newton/secant `43.02.03`), including the linear-BVP case
  where one Newton step is exact via superposition; (ii) the **finite-difference
  method** — replace $u''$ by the centred second difference $D^2 U_j =
  (U_{j-1}-2U_j+U_{j+1})/h^2$ to get the symmetric tridiagonal system $A_h U = F$,
  solved by the Thomas/Cholesky machinery (`43.03.01`/`43.03.02`); the
  $O(h^2)$ local truncation error, the discrete maximum principle / monotonicity of
  $A_h$, the stability bound $\|A_h^{-1}\|_\infty \le (b-a)^2/8$, and the resulting
  $O(h^2)$ global convergence theorem (consistency + stability). Note the
  Sturm-Liouville / BVP-eigenvalue analogue and the contrast with the IVP stability
  theory of 43.10.03-05 (here the difficulty is the *global* coupling, not
  step-by-step stability).
- **prereqs:** `43.10.01`, `43.02.03`, `43.03.01`
- **chapter:** `numerical-odes` · **section:** `numerical-analysis`
  (id `43.10.06`; dir `content/43-numerical-analysis/10-numerical-odes/`;
  frontmatter `section: numerical-analysis`, `chapter: numerical-odes`)
- **source_book:** `suli-mayers` · **source_curriculum:** `numerical-analysis`
- **dedup / why this is the right home:** Verified absent — `grep -rliE "shooting
  method" content/` returns nothing, and no unit poses the scalar two-point ODE BVP.
  The 1-D second-difference operator $D^2$ *does* appear in `43.11.01`, but ONLY as
  the building block assembled (via Kronecker sum $A_h = I\otimes T + T\otimes I$)
  into the 2-D 5-point Laplacian for an elliptic **PDE** BVP on a square; that unit
  never treats the one-dimensional ODE BVP as its own problem, has no boundary-data
  / mixed-BC discussion for the scalar case, and has no shooting method. Because the
  defining technique (shoot-and-correct via an IVP integrator + root-finder; the
  global tridiagonal solve) is squarely ODE-numerics and depends on the 43.10 one-step
  integrators and the 43.02.03 root-finder, the unit belongs in the
  `10-numerical-odes` chapter as `43.10.06`, NOT in the finite-difference-PDE chapter
  43.11. It cross-refs 43.11.01 for the shared $D^2$/discrete-maximum-principle
  apparatus rather than re-deriving it.

---

## COVERED (candidates checked, found covered)

- **Richardson extrapolation as a standalone topic** — COVERED by `43.09.02`
  (composite/Euler-Maclaurin/Romberg). That unit not only builds the Romberg table
  as Richardson extrapolation of the trapezium rule on the even-power $h^2$
  expansion, but its Master layer (*Theorem 3, Romberg integration and the Richardson
  tableau*) states the GENERAL Richardson principle explicitly: "given any quantity
  $A(h) = A_0 + \sum_i a_i h^{p_i}$ with known exponents $p_1 < p_2 < \dots$, the
  Neville-type tableau with denominators $2^{p_k}-1$ removes the terms in order."
  A separate Richardson unit would duplicate this. Not a gap.
- **Stiffness / A-stability** — COVERED by `43.10.05` (stiffness, A-stability,
  Dahlquist second barrier). Not a gap.
- **Predictor-corrector ODE methods** — COVERED: the predictor-corrector families are
  constructed and order-certified in `43.10.02` (linear multistep / Adams / BDF), and
  their convergence is settled by the root-condition / Dahlquist-equivalence theory in
  `43.10.03`. Not a gap.

## OUT OF SCOPE / already-deferred-and-shipped (no action)

- **Elementary one-step ODE construction** (the original audit's deferred fold-in to
  LeVeque) — SHIPPED as `43.10.01`. Resolved.
- **Conditioning / floating-point / backward error** (Süli-Mayers Ch. 1 fragments) —
  SHIPPED under Trefethen's `43.01.01-03`.
- **Linear systems / eigenvalue / iterative methods / QR-LS** (Süli-Mayers Ch. 2,3,5)
  — SHIPPED under Trefethen/GVL `43.03`-`43.07`.
- **Linear multistep, absolute stability, stiffness, Dahlquist barriers**
  (Süli-Mayers Ch. 12) — SHIPPED under LeVeque `43.10.02-05`.
- **Finite-difference PDE discretization / Lax equivalence** (Süli-Mayers Ch. 14
  flavour) — SHIPPED under LeVeque `43.11.01-05`.

---

## RETURN SUMMARY
- **New genuine gaps:** 1 — `43.10.06` (two-point ODE BVP: shooting + finite differences).
- **COVERED candidates verified:** 3 (Richardson `43.09.02`; stiffness `43.10.05`;
  predictor-corrector `43.10.02`/`43.10.03`).
- **Verification evidence:** `grep -rliE "shooting method" content/` → empty; no unit
  poses the scalar two-point ODE BVP; `43.11.01` uses $D^2$ only to assemble the 2-D
  elliptic 5-point Laplacian. Prereqs `43.10.01`, `43.02.03`, `43.03.01` all confirmed
  present.
- **File:** `plans/expansion/numerical-analysis/_audit/suli-mayers.completeness.md`
