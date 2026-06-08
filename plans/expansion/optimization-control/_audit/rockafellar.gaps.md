# Audit — R. T. Rockafellar, *Convex Analysis* (Princeton, 1970)

- **source_book:** `rockafellar`
- **source_curriculum:** `optimization-control`
- **target section:** `content/44-optimization-control/` (frontmatter `section: optimization-control`)
- **date:** 2026-06-07

## Verdict

The `44-optimization-control` section is a **freshly scaffolded, empty** 8-chapter
skeleton. Rockafellar is the abstract-convex-analysis foundation for the spine, but a
**large fraction of its headline theorems already live in the corpus** — chiefly in two
mature units that were grepped (filenames + bodies) across the whole `content/` tree:

- **`02.11.02` — Hahn-Banach theorem (analytic + geometric forms).** Its Master tier is,
  in effect, a convex-analysis compendium in general normed / locally-convex spaces: both
  geometric **separation** theorems (via the Minkowski functional), the **subdifferential**
  definition + existence of a subgradient via separation, the **Fenchel-Moreau** theorem,
  the **Fenchel duality** theorem (with the Slater interior condition), **Lagrangian
  duality**, the **minimax / Sion / Ky Fan** theory, **Krein-Milman / extreme points**, and
  best-approximation / projection onto a closed convex set. These are stated (several only
  as proof-outlines) in the *general* infinite-dimensional setting.
- **`37.07.03` — Legendre-Fenchel transform and convex duality.** Full $\mathbb{R}^d$
  treatment with proofs of the **Fenchel conjugate**, **Fenchel-Young inequality**,
  **Fenchel-Moreau biconjugation**, the **subdifferential** ↔ conjugate inversion, the
  **Legendre-function** characterisation (recovering the smooth transform), and the
  **support function** of a convex set as the conjugate of its indicator.

Boyd-Vandenberghe (applied duality / conic / interior-point) and Nocedal-Wright
(algorithms) are auditing in parallel; KKT-in-practice, conic/SDP programming, and all
iterative methods are **left to them** and are not proposed here.

What remains genuinely absent is the **finite-dimensional, optimization-facing convex-set
and subdifferential-calculus theory** that Rockafellar owns and that neither of the two
units above develops: the structural theorems of convex sets in $\mathbb{R}^n$
(Carathéodory, relative interior), the **theorems of the alternative** (Farkas) as the
analytic substrate of LP/KKT duality, the **real** (non-lattice) recession-cone /
Minkowski-Weyl polyhedral theory, and the **operational subdifferential calculus**
(Moreau-Rockafellar sum rule, chain rule, max-formula). These are exactly the load-bearing
$\mathbb{R}^n$ theorems the rest of the spine (KKT, LP duality, first-order methods) will
need as prerequisites.

Result: **4 genuine gaps** (all into ch 01 / ch 02). This is the expected conservative
outcome — the conjugacy/separation/duality core is already present; the gaps are the
finite-dimensional structural and calculus theorems that the existing units assume rather
than prove.

**Prereq convention.** Anchors verified on disk:
`01.01.02` (dual space / linear functionals), `01.01.03` (vector space),
`01.01.05` (linear transformation / rank-nullity), `01.01.18` (linear manifolds,
hyperplanes, half-spaces — affine, not convex-separation), `02.11.02` (Hahn-Banach,
analytic + geometric separation), `37.07.03` (Legendre-Fenchel transform, conjugate,
subdifferential, Fenchel-Moreau). Free slots: chapters `44.01.*` and `44.02.*` are empty,
so low unit numbers are used.

---

## GENUINE GAPS

### 44.01.01 — Convex sets in $\mathbb{R}^n$: Carathéodory's theorem and relative interior
- **spec:** The finite-dimensional structure theory of convex sets that the corpus assumes but never proves: convex set / convex hull / convex combination; **Carathéodory's theorem** (every point of $\mathrm{conv}\,S \subseteq \mathbb{R}^n$ is a convex combination of at most $n+1$ points of $S$); the **relative interior** $\mathrm{ri}\,C$ (non-empty for any non-empty convex set, accessibility/line-segment principle $\mathrm{ri}\,C \neq \varnothing$ and $\overline{\mathrm{ri}\,C}=\overline C$); affine hull / dimension of a convex set; and the resulting **finite-dimensional separation theorem** (two convex sets with disjoint relative interiors are separated by a hyperplane). Contrast with `02.11.02`, which gives separation abstractly via the Minkowski functional but never the $\mathbb{R}^n$ relative-interior machinery or Carathéodory.
- **prereqs:** `01.01.18` (hyperplanes / half-spaces / affine subspaces), `01.01.03` (vector space), `02.11.02` (geometric separation, general form)
- **chapter:** `01-convex-sets-functions` · **section:** `optimization-control`
- **source_book:** `rockafellar` · **source_curriculum:** `optimization-control`

### 44.01.02 — Recession cones and polyhedral convexity: the Minkowski-Weyl theorem in $\mathbb{R}^n$
- **spec:** The **recession (asymptotic) cone** $0^+C$ of a closed convex set, the criterion for $C$ to contain a line, and the role of recession directions in existence-of-minimisers (no recession direction of decrease $\Rightarrow$ the infimum is attained). **Polyhedral convexity:** the **Minkowski-Weyl theorem** over $\mathbb{R}$ — every polyhedron $\{x : Ax \le b\}$ equals $\mathrm{conv}(V) + \mathrm{cone}(R)$ for finite $V,R$, and conversely (the two descriptions H-rep $\leftrightarrow$ V-rep); finitely generated cones are exactly the polyhedral cones; the polar/dual cone and $C^{\circ\circ}=C$ for closed convex cones. Explicitly the **real** finite-dimensional theory — distinct from `04.11.02`, which proves $\sigma^{\vee\vee}=\sigma$ only for *rational/lattice* polyhedral cones in the toric setting and cites Farkas/Minkowski-Weyl only as historical substrate.
- **prereqs:** `44.01.01` (convex sets, relative interior, separation), `01.01.18` (hyperplanes / half-spaces), `01.01.02` (dual space / linear functionals)
- **chapter:** `01-convex-sets-functions` · **section:** `optimization-control`
- **source_book:** `rockafellar` · **source_curriculum:** `optimization-control`

### 44.02.01 — Theorems of the alternative: Farkas's lemma and linear-inequality duality
- **spec:** **Farkas's lemma** in its optimization-facing form — exactly one of (i) $\exists x \ge 0,\ Ax=b$, or (ii) $\exists y,\ A^{\mathsf T}y \ge 0,\ b^{\mathsf T}y < 0$ holds — together with the variants (Gordan, Stiemke, Motzkin) and the geometric proof via the finite-dimensional separation of $b$ from the finitely generated cone $\{Ax : x\ge0\}$ (which is closed). Position it as the **analytic substrate of LP duality and the KKT conditions**: the existence of nonnegative multipliers is precisely a theorem of the alternative. The corpus has NO statement of Farkas's lemma — `04.11.02` proves only rational-cone duality and `02.11.02` merely *names* Farkas as the LP replacement for Hahn-Banach. LP duality / strong duality / simplex-and-interior-point algorithms are **left to Boyd-Vandenberghe and Nocedal-Wright**; this unit supplies only the underlying alternative theorem.
- **prereqs:** `44.01.02` (recession cones / polyhedral cones / closedness of finitely generated cones), `44.01.01` (finite-dimensional separation), `01.01.05` (linear maps / rank-nullity)
- **chapter:** `02-convex-duality-kkt` · **section:** `optimization-control`
- **source_book:** `rockafellar` · **source_curriculum:** `optimization-control`

### 44.02.02 — Subdifferential calculus: the Moreau-Rockafellar sum rule, chain rule, and max-formula
- **spec:** The **operational calculus** of subgradients that downstream optimality conditions need but that no corpus unit develops. Starting from the subdifferential $\partial f$ (defined in `37.07.03` / `02.11.02`): the **Moreau-Rockafellar sum rule** $\partial(f+g)=\partial f+\partial g$ under a relative-interior (qualification) condition $\mathrm{ri}(\mathrm{dom}\,f)\cap\mathrm{ri}(\mathrm{dom}\,g)\neq\varnothing$; the **chain rule** $\partial(f\circ A)=A^{\mathsf T}\partial f(Ax)$; the **max-formula / Danskin's theorem** $\partial(\max_i f_i)=\mathrm{conv}\{\partial f_i : i \text{ active}\}$ and the subdifferential of a pointwise supremum; non-emptiness/compactness of $\partial f(x)$ at interior points and the link $\nabla f$ ↔ singleton subdifferential; **Fermat's rule** $0\in\partial f(x^\star) \Leftrightarrow x^\star$ minimises $f$, the gateway to KKT. `37.07.03` and `02.11.02` define the subdifferential and prove the Young/conjugate inversion, but neither states a single calculus rule.
- **prereqs:** `37.07.03` (subdifferential, Fenchel-Young, conjugate inversion), `44.01.01` (relative interior — the qualification condition), `02.11.02` (geometric separation / subgradient existence)
- **chapter:** `02-convex-duality-kkt` · **section:** `optimization-control`
- **source_book:** `rockafellar` · **source_curriculum:** `optimization-control`

---

## COVERED (not gaps)

Already stated/proved in the corpus — verified by filename + body grep:

- **Convex / lsc / proper functions; epigraph definition** — `37.07.03` (formal defs, $\mathbb{R}^d$), with the convex-function definition + Jensen's inequality also in `00.04.01`.
- **Fenchel conjugate (Legendre-Fenchel transform) and its convexity/lsc for any $f$** — `37.07.03` (full proof); also `05.00.03`, `09.04.01`, `11.01.02` for the smooth Legendre case.
- **Fenchel-Young inequality** — `37.07.03` (Key theorem, part (i)).
- **Fenchel-Moreau biconjugation theorem $f^{**}=f$** — `37.07.03` (Key theorem, part (ii), proved via epigraph separation); also stated in `02.11.02`.
- **Subdifferential / subgradient — definition and existence via separation** — `02.11.02` (Master, "Subdifferentials and Fenchel duality") and `37.07.03` (Fenchel-Young equality $\lambda\in\partial f(x)$); the *calculus* of these is the genuine gap 44.02.02.
- **Conjugacy inverts subdifferentials ($\partial f^*=(\partial f)^{-1}$)** — `37.07.03` (Proposition 1).
- **Legendre-function characterisation / essential smoothness / steepness** — `37.07.03` (Formal definition + Advanced results).
- **Support function of a convex set (= conjugate of the indicator); dual norm** — `37.07.03` (Exercise 3).
- **Geometric Hahn-Banach / separating + supporting hyperplane theorems** — `02.11.02` (first and second geometric forms, proved via the Minkowski functional). The $\mathbb{R}^n$ relative-interior refinement + Carathéodory is gap 44.01.01.
- **Fenchel duality theorem ($\inf(f+g)=\sup(-f^*(-\varphi)-g^*(\varphi))$) with Slater condition** — `02.11.02` (Master, "Fenchel duality theorem").
- **Lagrangian duality / perturbation function / Slater interior condition** — `02.11.02` (Master, "Convex optimisation" applications); KKT-in-practice deferred to Boyd.
- **Minimax / saddle-point theory (von Neumann, Sion, Ky Fan)** — `02.11.02` (Master, "Minimax theorems"); the inf-sup saddle structure also `24.01.04` (Babuška-Brezzi).
- **Krein-Milman / extreme points (compact convex = closed convex hull of extreme points)** — `02.11.02` (Master, "Krein-Milman", with Choquet refinement).
- **Projection onto a closed convex set / best approximation / variational inequality** — `02.11.02` (Master, "Best-approximation problems").
- **Rational/lattice polyhedral cone duality $\sigma^{\vee\vee}=\sigma$, Gordan's lemma** — `04.11.02` (toric setting). The *real* finite-dimensional Minkowski-Weyl + recession theory is gap 44.01.02; Farkas's lemma proper is gap 44.02.01.

## OUT OF SCOPE

- **KKT optimality conditions / constraint qualifications in practice, conic & semidefinite programming, interior-point and barrier methods.** Owned by Boyd-Vandenberghe (ch 02 / ch 05). This audit supplies only the convex-analysis substrate (Farkas, subdifferential calculus); the applied KKT/conic units are not proposed here.
- **Iterative optimization algorithms (gradient / proximal / subgradient / ADMM / Newton).** Owned by Nocedal-Wright and ch 06. Rockafellar's infimal-convolution / Moreau-envelope material is the *theory* behind proximal methods, but is folded as context into 44.02.02 (subdifferential calculus) rather than spun out — the algorithmic units belong to the parallel audits.
- **Optimal control (Pontryagin) and dynamic programming (ch 07-08).** Not Rockafellar's content (his optimal-control work is a later book); left to the control-theory audits for this spine.
- **Infinite-dimensional / topological-vector-space convex analysis (Moreau's general theory).** The corpus already carries the abstract normed/LCTVS forms in `02.11.02`; re-deriving them in $\mathbb{R}^n$ would duplicate. The $\mathbb{R}^n$ *structural* theorems Rockafellar adds (Carathéodory, relative interior, recession, Farkas, subdifferential calculus) are the genuine gaps above; the abstract functional-analytic layer is not re-proposed.

---

## RETURN SUMMARY
- **Genuine gaps:** 4 (44.01.01, 44.01.02, 44.02.01, 44.02.02)
- **COVERED:** 14 topics (chiefly in `02.11.02` and `37.07.03`; plus `04.11.02`, `00.04.01`, smooth-Legendre units)
- **OUT OF SCOPE:** 4
- **Gap file:** `plans/expansion/optimization-control/_audit/rockafellar.gaps.md`
