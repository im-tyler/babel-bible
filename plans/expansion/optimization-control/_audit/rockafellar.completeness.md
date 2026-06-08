# Completeness re-audit — R. T. Rockafellar, *Convex Analysis* (Princeton, 1970)

- **source_book:** `rockafellar`
- **source_curriculum:** `optimization-control`
- **target section:** `content/44-optimization-control/` (frontmatter `section: optimization-control`)
- **date:** 2026-06-07
- **predecessor:** `rockafellar.gaps.md` (its 4 gaps were produced and shipped as 44.01.01-03, 44.02.04-05)

## Verdict

Re-audited against the now-mature §44 (36 shipped units) plus the pre-existing
`37.07.03` and `02.11.02`. The convexity/conjugacy/separation/duality/subdifferential
core that Rockafellar owns is now **saturated** — every headline theorem named in the
prompt's candidate list is stated or proved somewhere in the corpus (evidence in the
`## COVERED` trailer). The expected conservative outcome holds: **1 genuine gap**, and it
is borderline-scope (recorded with a caveat). All other candidate areas are COVERED.

---

## GENUINE GAPS

### 44.02.06 — Saddle-functions: concave-convex bifunctions and the saddle-conjugacy correspondence
- **spec:** Rockafellar's §33-37 theory of saddle-functions *as objects* (distinct from saddle *points* and from minimax existence, which are already covered). A **saddle-function** (concave-convex bifunction) $K(x,y)$: concave in $x$, convex in $y$; its **lower and upper closure** operations $\operatorname{cl}_1 K$, $\operatorname{cl}_2 K$ and the **equivalence classes** of saddle-functions sharing a closure; the **saddle-conjugacy correspondence** — the involutive bijection between closed concave-convex saddle-functions and convex-concave ones obtained by partial conjugation in each argument — generalising Fenchel-Moreau biconjugacy to the bivariate setting; the saddle-value / minimax equality $\inf_y\sup_x K = \sup_x\inf_y K$ characterised through closedness of the partial conjugates; and the **subdifferential of a saddle-function** as the convex-concave analogue underlying the saddle-point operator $T(x,y)=(\partial_x K, -\partial_y K)$ whose maximal-monotonicity drives primal-dual algorithms. The corpus has the *partial conjugate / value-function* perturbational scheme (44.02.03 Master) and saddle *points* + minimax (44.02.01, 02.11.02), but no unit develops the saddle-function object, its closure equivalence classes, or the bivariate conjugacy correspondence.
- **prereqs:** `44.02.03` (Fenchel-Moreau conjugacy, partial conjugate, perturbational duality), `44.02.05` (subdifferential calculus, $\partial f$ maximal monotone), `44.02.01` (saddle-point / minimax)
- **chapter:** `02-convex-duality-kkt` · **section:** `optimization-control`
- **source_book:** `rockafellar` · **source_curriculum:** `optimization-control`
- **SCOPE CAVEAT:** Borderline. Rockafellar §33-37 is a ~120-page abstract apparatus whose *theorem-level payoffs* — minimax existence (von Neumann/Sion/Ky Fan), the saddle-point characterisation of Lagrangian duality, and $T=(\partial_x K,-\partial_y K)$ maximal monotone behind primal-dual splitting — are **already covered** (02.11.02, 44.02.01, 44.06.04). What is absent is the saddle-function *machinery* itself (equivalence classes, lower/upper closures, the bivariate conjugacy bijection). Produce only if the spine wants Rockafellar's organising apparatus made explicit; otherwise legitimately deferrable as covered-at-the-payoff-level. A producer skipping this for that reason is acting correctly per the brief's scope clause.

---

## COVERED (not gaps)

Re-verified by filename + body grep across `content/`:

- **Convex sets/functions/operations, perspective, sublinearity** — `44.01.01` (formal defs, operation-preserving calculus, support-function/sublinearity correspondence).
- **Carathéodory's theorem + Fenchel-Bunt sharpening; relative interior, line-segment principle, closure identities** — `44.01.02` (Master + key theorem).
- **Support function (= conjugate of indicator); sublinear ↔ closed convex set correspondence** — `44.01.01` (Advanced/Master) and `44.02.05` (directional-derivative = support function of $\partial f$); also `37.07.03` (Exercise 3).
- **Directional derivatives & their duality with the subdifferential** ($f'(x;d)=\sup_{g\in\partial f(x)}\langle g,d\rangle$, sublinear, support function of $\partial f$) — `44.02.05` (key theorem part (i), proved).
- **Gauge / Minkowski functional** — `02.11.02` (defined, used to derive geometric separation).
- **Polar / dual cone, bipolar theorem $K=K^{\circ\circ}$ for closed convex cones** — `44.01.03` (Minkowski-Weyl via polarity, proved) and `44.02.04` (bipolar = cone form of biconjugation, proved).
- **Recession (asymptotic) cones, lineality, Motzkin decomposition, faces/face lattice** — `44.01.03` (Master).
- **Polyhedral convexity, Minkowski-Weyl (H-rep ↔ V-rep), finitely generated ⇔ polyhedral cone, Fourier-Motzkin** — `44.01.03` (key theorem + Prop 4, proved twice) and `44.02.04`.
- **Polyhedral *functions* and their closure under sum/max/inf-convolution/conjugacy** — `44.01.03` (Advanced, "Polyhedral functions").
- **Fenchel conjugate, Fenchel-Young, Fenchel-Moreau biconjugation $f^{**}=f$** — `37.07.03` (full proofs) and `44.02.03`; also `02.11.02`.
- **Conjugacy inverts subdifferentials $\partial f^*=(\partial f)^{-1}$** — `37.07.03` (Prop 1) and `44.02.05` (synthesis).
- **Infimal (inf-)convolution and its conjugate ( = sum of conjugates )** — `44.02.03`, `44.01.03`, `44.02.05`; Moreau-envelope/inf-convolution regularisation `44.06.02`.
- **Conjugate of a sum / of a composition (constraint qualification)** — `44.02.03` (Fenchel duality), `44.02.05` (sum & chain rules).
- **Subdifferential calculus: Moreau-Rockafellar sum rule, chain rule, max-formula, Fermat rule** — `44.02.05` (proved, all under relative-interior qualification).
- **Subdifferential is maximal monotone** — `44.02.05` (Proposition 4, stated and proved); resolvent/prox link `44.06.02`, `44.06.04`.
- **Maximal monotone operators, resolvents, reflected resolvents, Minty/Browder context** — `44.06.02` (resolvent = prox), `44.06.04` (Douglas-Rachford on $0\in\mathcal A+\mathcal B$, Prop 4 proved); `44.02.05` (Moreau-Rockafellar/proximal-point history).
- **Moreau envelope / Moreau decomposition $\operatorname{prox}_f+\operatorname{prox}_{f^*}=I$** — `44.06.02` (proved).
- **Lagrangian duality, Slater, perturbation/value function, conjugate (perturbational) duality §29-31, partial conjugate, bifunctions** — `44.02.01` and `44.02.03` (Master, the unified scheme specialising to Fenchel/Lagrangian/conic).
- **Saddle *points* and minimax (von Neumann, Sion, Ky Fan); saddle-point characterisation of duality** — `02.11.02` (Master) and `44.02.01` (saddle inequality ⇒ feasibility + complementary slackness, proved).
- **Farkas's lemma, theorems of the alternative (Gordan, Stiemke, Motzkin), bipolar substrate of LP/KKT duality** — `44.02.04` (proved).
- **Krein-Milman / extreme points** — `02.11.02` (Master, with Choquet); also `44.01.01`, `44.01.03`.
- **Helly / Radon-type intersection stability** — `44.01.03` (recession-cone Helly-type stability), `44.02.04`, `44.01.02`.
- **Differentiability ⇔ singleton subdifferential; Rademacher/Alexandrov a.e. second-order** — `44.02.05` (Advanced) and `02.07.10` (Alexandrov, stated and proved; convex ⇒ locally Lipschitz).
- **Continuity / local Lipschitz of a finite convex function on relint** — fact established/used in `44.01.02` (synthesis: "convex function is continuous on the relative interior of its domain") and `02.07.10` (convex ⇒ locally Lipschitz, used for Rademacher). Covered at the fact level; not a standalone theorem-unit, but no headline result is missing.
- **Legendre-function characterisation / essential smoothness / steepness** — `37.07.03`.
- **Danskin's theorem (parametric value-function subdifferential)** — `44.02.05` and `44.04.02`.

## OUT OF SCOPE

- **Infinite-dimensional / LCTVS convex analysis (Moreau's general theory).** Abstract normed/LCTVS forms already in `02.11.02`; re-deriving in $\mathbb{R}^n$ duplicates.
- **Algorithmic units (gradient/proximal/subgradient/ADMM/Newton/interior-point) and applied KKT/conic/SDP.** Owned by the algorithm chapters (`44.03`-`44.06`) and Boyd/Nocedal audits; Rockafellar supplies only the theory, which is now present.

---

## RETURN SUMMARY
- **Genuine still-absent gaps:** 1 (44.02.06 saddle-functions — borderline scope, caveated)
- **COVERED:** 27 topic clusters re-verified
- **OUT OF SCOPE:** 2
- **File:** `plans/expansion/optimization-control/_audit/rockafellar.completeness.md`
