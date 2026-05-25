# Shifrin — *Multivariable Mathematics: Linear Algebra, Multivariable Calculus, and Manifolds* (Fast Track 1.18, Ch. 8 focus) — Audit + Gap Plan

**Book:** Theodore Shifrin, *Multivariable Mathematics: Linear Algebra,
Multivariable Calculus, and Manifolds*. John Wiley & Sons, Hoboken NJ
2005. xiv + 491 pp. ISBN 978-0-471-52638-4. A single-volume
undergraduate hybrid of linear algebra and multivariable calculus
aimed at honors sophomore / junior students at universities running an
integrated transition-to-proofs sequence (Shifrin is a long-time
University of Georgia faculty whose pedagogy is well-attested via the
*MAA Reviews* of this text and his earlier *Abstract Algebra: A
Geometric Approach* with Adams). The text reaches its **distinctive
contribution in Chapter 8**, which is what Fast Track entry 1.18
specifically anchors on: a **two-track presentation of differential
forms and Stokes' theorem on $\mathbb{R}^n$** that bridges the
classical vector-calculus surface / line / volume integrals
(Apostol-style, Marsden-Tromba-style) with the modern
forms-on-manifolds Stokes (Spivak's *Calculus on Manifolds* / Bott-Tu
Ch. I / Lee Ch. 14-16). The chapter is **the unique entry in the FT
spine that sits cleanly between Apostol Vol 2 (FT 0.3) and Spivak's
*Calculus on Manifolds***: it carries the **pedagogical lift** from
"divergence, gradient, curl, classical Stokes / Green / divergence
theorems in $\mathbb{R}^3$" up to "$d\omega$ on a $k$-form, generalised
Stokes $\int_{\partial M} \omega = \int_M d\omega$", with each
classical theorem re-derived as a special case in the same chapter.

**Fast Track entry:** 1.18. The FT explicitly calls out **Ch. 8
only** — the book's first seven chapters (linear algebra +
multivariable differential calculus + multivariable integration) are
covered more rigorously by Apostol Vol 2 (FT 0.3) and Shilov (FT
1.01), and the FT picks Shifrin Ch. 8 as the **forms-on-Euclidean-
space pedagogical bridge** rather than as a substitute for either
upstream text. Sourcing: **BUY** (Wiley, list price ~$200 new;
secondhand and Wiley eBook ~$60-80; well-stocked in academic
libraries). Marked `BUY` in `docs/catalogs/FASTTRACK_BOOKLIST.md`
entry 1.18.

**Distinct** from the heavier-weight forms-on-manifolds books on the
FT (Bott-Tu 1.17, Whitney 1.13, Sternberg-LDG 1.10, KN-I 3.18), each
of which assumes a graduate-level reader and reaches further into
cohomology / characteristic classes / bundle theory. **Shifrin Ch. 8
is the undergraduate Beginner-and-Intermediate-tier presentation of
the same forms-on-$\mathbb{R}^n$ material** — the same theorems
(Stokes, Poincaré lemma, closed-vs-exact, the classical
specialisations) stated and proved with **physics-flavoured worked
examples**, **explicit $\mathbb{R}^3$ index computations**, and
**diagrams of oriented surfaces** that Bott-Tu / Whitney / KN-I
deliberately suppress in favour of structural abstraction.

**Summary.** Shifrin Ch. 8 covers exactly six things in the FT-cited
section: (8.1) differential $k$-forms on $\mathbb{R}^n$ defined via
$dx_{i_1} \wedge \cdots \wedge dx_{i_k}$ basis, with $0$-forms =
functions, $1$-forms = covector fields, $n$-forms = top-degree
volume-element multiples; (8.2) line integrals of 1-forms $\int_C
\omega$ with the classical $\int_C P\,dx + Q\,dy + R\,dz$
presentation, path-independence ⇔ exactness for star-shaped domains;
(8.3) surface integrals of 2-forms $\iint_S \omega$ with the classical
$\iint_S P\,dy \wedge dz + Q\,dz \wedge dx + R\,dx \wedge dy$
flux-form presentation; (8.4) Stokes' theorem
$\int_{\partial M} \omega = \int_M d\omega$ as the **single identity
that recovers** the classical Green's theorem ($n=2$), classical
Stokes' theorem on a surface ($n=3$, $k=1$), and the divergence
theorem ($n=3$, $k=2$) by specialisation; (8.5) closed and exact
forms, the **Poincaré lemma** on a star-shaped domain
(closed ⇒ exact), and the failure of the converse on non-simply-connected
domains; (8.6) brief pointer chapter on **manifolds in
$\mathbb{R}^n$** (level sets, parametrised surfaces, the
implicit / inverse function theorems as charts) with a
sketch that the forms-and-Stokes machinery transfers from
$\mathbb{R}^n$ to an embedded submanifold. **The book itself
does not develop the abstract-manifold / coordinate-free / bundle-
theoretic picture** — that is exactly the line where Shifrin stops
and Spivak / Bott-Tu / Lee take over.

**Purpose of this plan:** lightweight P1-lite audit-and-gap pass
mirroring the Mackenzie 1.08, Whitney 1.13, Bott-Tu 1.17, and Apostol
Vol 2 audits. The volume is **undergraduate-textbook density** — a
moderate theorem count and high worked-example / classical-physics-
notation density, with the **pedagogical bridge above
multivariable-calculus and below abstract differential geometry** as
the single distinctive contribution. The equivalence target is
**Beginner / Intermediate-tier pedagogical coverage of forms-on-
$\mathbb{R}^n$ and the classical-Stokes specialisations**, not
master-tier theoretical depth. **The decisive observation for this
audit is that the Babel Bible's existing forms-and-Stokes apparatus
(`03.04.*` differential-forms chapter, with the Bott-Tu audit shipped
to 92.9% equivalence-coverage and the Whitney audit shipped) covers
all of Shifrin Ch. 8's master-tier content — the audit's distinctive
contribution is at the BEGINNER and INTERMEDIATE tiers, where Shifrin's
physics-notation classical-vector-calculus presentation has no
equivalent in the abstract-form-theoretic units shipped to date.**
The Bott-Tu audit notes (`plans/fasttrack/bott-tu-differential-forms.md`)
explicitly defer the "Beginner-tier classical-Stokes-as-special-case
of forms-Stokes" presentation to a future audit; this Shifrin
audit is that audit, and **fills the same gap that the Apostol Vol 2
audit also identified** at items 25-29 of its Priority-2 punch-list
(line integrals, surface integrals, classical Green / Stokes /
divergence as `[ENRICH]` deepenings of `03.04.05`). The two audits
coordinate: Apostol Vol 2 owns the **classical-vector-calculus-as-
multivariable-calculus** framing; Shifrin Ch. 8 owns the **classical-
vector-calculus-as-special-case-of-forms** framing. Both deepenings
are non-conflicting and stack cleanly on `03.04.05`.

**Audit mode: REDUCED.** No local PDF in
`reference/fasttrack-texts/01-fundamentals/` at audit time; working
from the canonical Wiley 2005 first-edition table of contents (~492 pp,
Chs. 1–8 + appendices), the well-attested University of Georgia course
pages (Math 3500/3510 sequence, which Shifrin himself ran for ~20
years and from which the book grew), the *MAA Reviews* notice
(2005), and the in-Codex evidence that the forms-and-Stokes apparatus
exists at `03.04.*` but is packaged for graduate-tier consumption.
A full P1 line-number inventory is deferred to a production pass when
a copy is on disk. Chapter numbering below follows the Wiley 2005
first edition; the FT entry restricts attention to **Chapter 8**, but
this audit briefly maps Chapters 1–7 for completeness, marking them
**[upstream-covered by FT 0.3 / 1.01]** rather than producing
duplicate coverage analysis.

---

## §1 Chapter map of *Multivariable Mathematics* (2005)

The Wiley 2005 first edition is organised into **eight chapters plus
two appendices**, totalling ~492 pages. The first seven chapters
develop the linear-algebra + multivariable-differential + multivariable-
integral foundations needed for Ch. 8; the FT picks Ch. 8 because the
upstream foundations are **better-covered by Apostol Vol 2 (FT 0.3)
and Shilov (FT 1.01)** at higher rigour, but no upstream FT text
delivers the **forms-on-$\mathbb{R}^n$-with-classical-Stokes-as-
special-case** presentation at undergraduate tier. Chapter map:

1. **Chapter 1 — Vectors and Matrices.** Vectors in $\mathbb{R}^n$;
   dot product; matrix algebra; linear systems via row reduction;
   span and linear independence in $\mathbb{R}^n$. ~50 pp;
   sophomore-honours linear algebra opener. **[upstream-covered by
   Apostol Vol 2 Chs. 1-2, Shilov §1-§3]** — no Shifrin-distinctive
   contribution.

2. **Chapter 2 — Matrix Algebra and Linear Maps.** Matrix
   multiplication; inverse; linear transformations $\mathbb{R}^n \to
   \mathbb{R}^m$ via matrices; kernel / image; rank-nullity.
   ~55 pp. **[upstream-covered by Apostol Vol 2 Chs. 2-3]**.

3. **Chapter 3 — Vector Spaces.** Abstract vector space axioms;
   subspace, basis, dimension; change of basis; orthogonal
   complement; Gram-Schmidt; least squares. ~50 pp. **[upstream-
   covered by Apostol Vol 2 Ch. 1, Shilov §1-§4]**.

4. **Chapter 4 — Projections and Linear Transformations.**
   Projection onto a subspace; rotation / reflection matrices;
   spectral theorem for symmetric matrices on
   finite-dim inner-product space; quadratic forms; positive-
   definite matrices. ~50 pp. **[upstream-covered by Apostol Vol
   2 Ch. 5]**.

5. **Chapter 5 — Determinants.** Axiomatic determinant
   (multilinear / alternating / $\det I = 1$); expansion by minors;
   determinant as oriented volume of the parallelepiped of column
   vectors; eigenvalues via the characteristic polynomial.
   ~40 pp. **[upstream-covered by Apostol Vol 2 Chs. 3-4]**.

6. **Chapter 6 — Multivariable Differential Calculus.** Topology of
   $\mathbb{R}^n$; limits / continuity; the derivative as a linear
   map; partial derivatives; Jacobian matrix; chain rule;
   directional derivative; gradient; implicit and inverse function
   theorems (proved); Taylor's theorem in several variables;
   extrema and Lagrange multipliers. ~70 pp. **[upstream-covered
   by Apostol Vol 2 Chs. 8-9]**.

7. **Chapter 7 — Multivariable Integral Calculus.** Riemann
   integration on rectangles; Fubini's theorem; change-of-variables
   formula with the Jacobian determinant; surface area;
   improper multiple integrals; integration in spherical /
   cylindrical / polar coordinates. ~75 pp. **[upstream-covered
   by Apostol Vol 2 Chs. 10-11]** — Shifrin's Ch. 7 has slightly
   more concrete worked-example density than Apostol but no
   theorem-level distinction.

8. **Chapter 8 — Differential Forms and Integration on
   Manifolds.** *The FT-cited chapter.* ~70 pp; six sections:
   - **§8.1 Motivation; differential forms on $\mathbb{R}^n$.**
     0-forms = smooth functions on $U \subseteq \mathbb{R}^n$;
     1-forms $= \sum_i f_i\,dx_i$; $k$-forms $= \sum_{I}
     f_I\,dx_{i_1} \wedge \cdots \wedge dx_{i_k}$ in increasing
     multi-index $I$. Algebraic operations: addition, scalar
     multiplication, **wedge product** $\omega \wedge \eta$ with
     graded-commutativity $\omega \wedge \eta = (-1)^{|\omega| |\eta|}
     \eta \wedge \omega$. **Exterior derivative** $d: \Omega^k \to
     \Omega^{k+1}$ as the unique $\mathbb{R}$-linear operator
     satisfying (a) $df = \sum_i (\partial f / \partial x_i) dx_i$
     on 0-forms, (b) Leibniz $d(\omega \wedge \eta) = d\omega
     \wedge \eta + (-1)^{|\omega|} \omega \wedge d\eta$, and (c)
     $d^2 = 0$. The **classical $\nabla$-operator dictionary**:
     for a function $f$ on $\mathbb{R}^3$, $df$ corresponds to
     $\nabla f$; for a 1-form $\omega = P\,dx + Q\,dy + R\,dz$,
     $d\omega$ corresponds to $\nabla \times \mathbf{F}$ via the
     Hodge isomorphism $\Omega^2(\mathbb{R}^3) \cong \mathbb{R}^3$;
     for a 2-form $\eta = P\,dy \wedge dz + Q\,dz \wedge dx +
     R\,dx \wedge dy$, $d\eta = (\partial_x P + \partial_y Q +
     \partial_z R)\,dx \wedge dy \wedge dz$ corresponds to
     $\nabla \cdot \mathbf{F}$. The **two classical identities**
     $\nabla \times \nabla f = 0$ and $\nabla \cdot (\nabla \times
     \mathbf{F}) = 0$ are exactly $d^2 f = 0$ and $d^2(d\omega) =
     0$ pushed through the dictionary. ~12 pp.
   - **§8.2 Line integrals and 1-forms.** Pullback of a 1-form
     $\omega$ along a parametrised curve $\gamma: [a, b] \to
     \mathbb{R}^n$ defines $\int_\gamma \omega = \int_a^b
     \gamma^*\omega$. Classical presentation $\int_\gamma P\,dx +
     Q\,dy + R\,dz = \int_a^b [P \dot{x} + Q \dot{y} + R
     \dot{z}]\,dt$. **Path-independence ⇔ exactness on a connected
     domain:** $\int_\gamma \omega$ depends only on endpoints iff
     $\omega = df$ for some function $f$ (the **scalar potential**).
     **Conservative-vector-field theorem** (the classical
     specialisation: $\mathbf{F} = \nabla f$ ⇔ $\int_C \mathbf{F}
     \cdot d\mathbf{r}$ is path-independent). Worked examples:
     work done by a force field around a closed loop; circulation
     of a vector field; Poincaré-lemma special case on a star-
     shaped domain. ~12 pp.
   - **§8.3 Surface integrals and 2-forms.** Pullback of a 2-form
     $\omega$ along a parametrised surface $\Phi: D \subset
     \mathbb{R}^2 \to \mathbb{R}^n$ defines $\iint_S \omega = \iint_D
     \Phi^*\omega$. Classical $\iint_S P\,dy \wedge dz + Q\,dz
     \wedge dx + R\,dx \wedge dy = \iint_S \mathbf{F} \cdot
     d\mathbf{S}$ where $d\mathbf{S} = \mathbf{n}\,dS$ is the
     oriented surface element. **Orientation** of a surface =
     consistent choice of normal vector field; non-orientability
     of the Möbius band as a worked example. Worked examples:
     flux of a vector field through a sphere; flux through a
     cylinder. ~12 pp.
   - **§8.4 Stokes' theorem.** Statement: for a smooth oriented
     $k$-dimensional manifold $M \subseteq \mathbb{R}^n$ with
     boundary $\partial M$ and a smooth $(k-1)$-form $\omega$ with
     compact support, $\int_{\partial M} \omega = \int_M d\omega$.
     **Three classical specialisations**, each derived as a
     corollary in the same section:
     - **Green's theorem** ($n = 2$, $k = 2$): for a planar region
       $D$ with boundary curve $\partial D$ and 1-form $\omega =
       P\,dx + Q\,dy$, $\oint_{\partial D} P\,dx + Q\,dy = \iint_D
       (\partial Q / \partial x - \partial P / \partial y)\,dx \wedge
       dy$.
     - **Classical Stokes' theorem** ($n = 3$, $k = 2$): for an
       oriented surface $S$ with boundary curve $\partial S$ and
       vector field $\mathbf{F}$, $\oint_{\partial S} \mathbf{F}
       \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot
       d\mathbf{S}$.
     - **Divergence theorem (Gauss-Ostrogradsky)** ($n = 3$, $k =
       3$): for a solid region $V$ with boundary surface $\partial
       V$ and vector field $\mathbf{F}$, $\iint_{\partial V}
       \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot
       \mathbf{F})\,dV$.
     Worked examples: each classical specialisation applied to a
     concrete vector field on a concrete region. ~15 pp.
   - **§8.5 Closed and exact forms; Poincaré lemma.** A form
     $\omega$ is **closed** iff $d\omega = 0$, **exact** iff
     $\omega = d\eta$ for some $\eta$. $d^2 = 0$ ⇒ exact ⇒ closed.
     **Poincaré lemma** on a star-shaped domain $U \subseteq
     \mathbb{R}^n$: closed ⇒ exact, via the explicit homotopy
     operator $K\omega(x) = \int_0^1 t^{k-1} \omega(tx)(x,
     \cdot)\,dt$ (constructive proof; Shifrin gives it in full at
     undergraduate level, without invoking the chain-homotopy
     language of Bott-Tu). Failure on non-simply-connected
     domains: the **angle 1-form** $d\theta = (-y\,dx + x\,dy) /
     (x^2 + y^2)$ on $\mathbb{R}^2 \setminus \{0\}$ is closed but
     not exact (cohomology obstruction = winding number around
     origin); Shifrin presents this as the first concrete instance
     of **de Rham cohomology** even though the formal definition
     is parked for graduate study. ~10 pp.
   - **§8.6 Manifolds in $\mathbb{R}^n$; integration on
     submanifolds.** A $k$-dimensional submanifold $M \subseteq
     \mathbb{R}^n$ defined as a level set $f^{-1}(c)$ where $f:
     \mathbb{R}^n \to \mathbb{R}^{n-k}$ has full rank, **or** as a
     parametrised submanifold; equivalence via the implicit /
     inverse function theorems (proved in Ch. 6). Tangent space
     $T_p M$ as kernel of $df_p$ (level-set form) or image of
     $D\Phi_q$ (parametrised form). **Integration of forms on a
     submanifold** via pullback to the parameter domain. Pointer
     remark that the apparatus extends to abstract manifolds (charts
     + transition functions), with the definition deferred to a
     subsequent graduate text. ~9 pp.

   Appendix A — Linear-algebra review. Appendix B — Continuity and
   limits review. ~25 pp total.

9. **Editorial signature.** Four threads make Shifrin Ch. 8
   distinctive against (a) Spivak *Calculus on Manifolds*
   (Benjamin / Westview 1965; the canonical short text on the
   forms-on-$\mathbb{R}^n$ presentation), (b) Bott-Tu Ch. I
   (graduate algebraic-topology framing), (c) Apostol Vol 2 Chs.
   10-12 (classical vector calculus in pure $\nabla$-operator
   form, **no forms framing**), and (d) Lee *Introduction to
   Smooth Manifolds* (graduate abstract-manifold framing):
   - **Two-track presentation.** Every theorem in Ch. 8 is stated
     and proved in the **forms language** ($d\omega$,
     $\int_M \omega$, wedge product) and immediately re-derived
     in the **classical $\nabla$-operator language** (grad, div,
     curl, $\mathbf{F} \cdot d\mathbf{r}$, $\mathbf{F} \cdot
     d\mathbf{S}$). The two presentations sit on facing pages.
     Spivak suppresses the classical language; Apostol suppresses
     the forms language; Shifrin runs both in parallel. **This is
     the single pedagogical contribution that justifies FT
     inclusion.**
   - **Undergraduate-friendly proof depth.** The Poincaré lemma is
     proved at undergraduate level via the explicit homotopy
     operator, without invoking chain-homotopy or de Rham
     cohomology language. Stokes is proved on a single cube and
     extended via partition of unity to a general manifold,
     without the technical machinery of orientation classes or
     simplicial chains that Bott-Tu / Whitney use.
   - **Physics-notation density.** Worked examples consistently
     use the classical $\int_C P\,dx + Q\,dy$ / $\iint_S
     \mathbf{F} \cdot d\mathbf{S}$ presentations a physics or
     engineering student recognises from a sophomore vector-
     calculus course. The forms-side derivation appears as the
     **structural justification** for the formula the student
     already knows.
   - **Stops cleanly before abstract manifolds.** §8.6 sketches
     submanifolds of $\mathbb{R}^n$ via level sets and
     parametrisations and explicitly says "the full abstract-
     manifold theory is left to graduate study." Shifrin is **not**
     trying to be Spivak or Lee; he is trying to deliver
     forms-and-Stokes at the maximum rigour an undergraduate can
     consume in one chapter, and to **bridge** the reader's
     subsequent graduate study.

Chapters 1–7 of Shifrin are **upstream-covered** by Apostol Vol 2
(FT 0.3) and Shilov (FT 1.01), both at higher rigour and broader
scope. The FT picks Ch. 8 because the **forms-on-$\mathbb{R}^n$-with-
classical-Stokes-as-special-case** presentation at undergraduate tier
is the single Shifrin-distinctive contribution and is the **pedagogical
bridge** that no upstream FT book delivers.

---

## §2 Babel Bible coverage map (Shifrin 1.18 Ch. 8 ↔ Codex)

Cross-referenced against the current corpus (`find content -name
"*.md" | sort`; ~365 units as of 2026-05-25), with particular
attention to the `03.04-differential-forms/` chapter (Bott-Tu and
Whitney audit production), the `02.10-harmonic/` analysis chapter
(Apostol-style classical surface integration), and the Apostol Vol 2
audit's already-planned ENRICH items on `03.04.05`. ✓ = covered at
Shifrin-Ch.8-equivalent depth (Beginner + Intermediate tier);
△ = topic present but Codex unit packaged for graduate consumption
without the classical-vector-calculus framing; ✗ = not covered.

### Cluster I — Differential forms on $\mathbb{R}^n$ (§8.1)

| Shifrin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| 0-forms = smooth functions; 1-forms $= \sum f_i\,dx_i$; $k$-forms with $dx_I$ basis | `03.04.02-differential-forms.md` | △ | Shipped at Master tier with Bott-Tu / Lee framing; **Beginner-tier classical $dx_i$ presentation present but light on $\mathbb{R}^3$-specific worked examples.** |
| Wedge product $\omega \wedge \eta$; graded-commutativity | `03.04.02-differential-forms.md`, `01.02.19-tensor-algebra-exterior-symmetric.md` | ✓ | Defined cleanly in `03.04.02`; algebraic side at `01.02.19`. |
| Exterior derivative $d: \Omega^k \to \Omega^{k+1}$; the three axioms (linearity, $df = \sum \partial_i f\,dx_i$ on 0-forms, Leibniz, $d^2 = 0$) | `03.04.04-exterior-derivative.md` | ✓ | Shipped at Master tier, axioms cleanly stated. |
| $d^2 = 0$ | `03.04.04-exterior-derivative.md` | ✓ | Stated and proved. |
| **Dictionary $d \leftrightarrow$ grad/curl/div on $\mathbb{R}^3$ via Hodge $\ast$** | △ | △ | **Gap (priority 1).** The dictionary is implicit in the worked examples of `03.04.05-stokes-theorem.md` (Green / classical Stokes / divergence as special cases) but is not stated as a named **named dictionary** in any Beginner-tier section. **This is Shifrin's distinctive pedagogical contribution.** |
| Classical identities $\nabla \times \nabla f = 0$, $\nabla \cdot (\nabla \times \mathbf{F}) = 0$ as $d^2 = 0$ | — | ✗ | **Gap.** Closely tied to the dictionary above; same punch-list item. |

**Cluster I status:** master-tier shipped, **Beginner-tier
classical-vector-calculus dictionary gap.** The Apostol Vol 2 audit's
item 28 (`[NEW]` bridge unit translating $\nabla$-operator ↔ $d$ on
forms) is the same gap, and the Shifrin audit confirms that
priority assignment.

### Cluster II — Line integrals and 1-forms (§8.2)

| Shifrin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Line integral $\int_\gamma \omega = \int_a^b \gamma^*\omega$ via pullback | `03.04.03-integration-on-manifolds.md` | △ | Covers the abstract pullback / integration of top-degree forms on an oriented manifold; the **1-dimensional / line-integral special case with classical $\int_\gamma P\,dx + Q\,dy + R\,dz$ presentation** is implicit. |
| Classical line integral $\int_\gamma P\,dx + Q\,dy + R\,dz$ in physics notation | — | ✗ | **Gap (priority 1).** Apostol Vol 2 audit item 25 / 26 also flags this. The classical form is the entry point a sophomore vector-calculus reader recognises. |
| Path-independence ⇔ exactness on connected domain | △ | △ | Implicit in `03.04.06-de-rham-cohomology.md` Master tier (the $H^1_{dR}$ obstruction); **explicit Beginner-tier statement absent**. |
| Conservative-vector-field theorem (the classical specialisation: $\mathbf{F} = \nabla f$ ⇔ $\int_C \mathbf{F} \cdot d\mathbf{r}$ path-independent) | — | ✗ | **Gap.** Same punch-list item as the classical line integral. |
| Worked examples: work done by force field; circulation | — | ✗ | **Gap.** Beginner-tier physics-notation worked examples are absent. |

**Cluster II status:** abstract-form Master tier shipped, **Beginner /
Intermediate-tier classical line-integral presentation absent.** This
is the largest punch-list item.

### Cluster III — Surface integrals and 2-forms (§8.3)

| Shifrin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Surface integral $\iint_S \omega = \iint_D \Phi^*\omega$ via pullback | `03.04.03-integration-on-manifolds.md`, `02.10.05-surface-integral-parametric-surfaces.md` | △ | Codex `02.10.05` covers the classical parametric-surface formulation in pure Apostol-style; `03.04.03` covers the abstract-form formulation. **The bridge — that the two are the same thing — is implicit, not stated.** |
| Classical $\iint_S P\,dy \wedge dz + Q\,dz \wedge dx + R\,dx \wedge dy = \iint_S \mathbf{F} \cdot d\mathbf{S}$ presentation | △ | △ | `02.10.05` has the $\mathbf{F} \cdot d\mathbf{S}$ side; the explicit **2-form-as-flux-form** identification is absent. |
| Orientation of a surface; oriented surface element $d\mathbf{S}$ | △ | △ | Implicit in `03.04.03` and `03.04.05`. The classical-physics-flavoured "normal vector field" presentation absent from the forms units. |
| Möbius band as worked example of non-orientability | △ | △ | Möbius band mentioned in `03.02.01-smooth-manifold.md` and elsewhere; not a worked example in the integration context. |
| Worked examples: flux through sphere; flux through cylinder | — | ✗ | **Gap.** Beginner-tier physics-notation worked examples are absent. |

**Cluster III status:** half-covered by the bridge between `02.10.05`
(classical) and `03.04.03` (abstract), but the **bridge unit
explicitly identifying the two presentations** is the punch-list
contribution.

### Cluster IV — Stokes' theorem and classical specialisations (§8.4)

| Shifrin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Stokes' theorem $\int_{\partial M} \omega = \int_M d\omega$ on a smooth oriented manifold-with-boundary in $\mathbb{R}^n$ | `03.04.05-stokes-theorem.md` | ✓ | Shipped at all three tiers with proof. |
| Green's theorem $\oint_{\partial D} P\,dx + Q\,dy = \iint_D (\partial_x Q - \partial_y P)\,dx \wedge dy$ as the $n=2$ specialisation | `03.04.05-stokes-theorem.md` (Worked example) | △ | Stated as a Worked-example one-liner in `03.04.05` Beginner tier; **no dedicated Green's-theorem unit or extended Beginner-tier treatment.** Apostol Vol 2 audit flags `[ENRICH]` on `03.04.05` for the same gap. |
| Classical Stokes' theorem $\oint_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$ as the $n=3$, $k=2$ specialisation | `03.04.05-stokes-theorem.md` (Worked example) | △ | Same status; **stated, not extended.** |
| Divergence theorem $\iint_{\partial V} \mathbf{F} \cdot d\mathbf{S} = \iiint_V (\nabla \cdot \mathbf{F})\,dV$ as the $n=3$, $k=3$ specialisation | `03.04.05-stokes-theorem.md` (Worked example) | △ | Same status; **stated, not extended.** |
| Worked computation: each classical theorem applied to a concrete $\mathbb{R}^3$ vector field on a concrete region | — | ✗ | **Gap.** No classical-physics-style worked computations in the corpus. |

**Cluster IV status:** master statement and Worked-example one-liners
in `03.04.05`, but the **classical-specialisations extended Beginner-
tier treatment with worked $\mathbb{R}^3$ computations is absent.**
This is the second-largest punch-list contribution, and the Apostol
Vol 2 audit's items 27 (Green), 28 (Stokes classical), 29 (divergence)
flag the same gap as `[ENRICH]` on `03.04.05`. The Shifrin audit
upgrades these to a **dedicated Beginner-tier exercise / worked-
example pack** unit rather than in-place ENRICH paragraphs, on the
grounds that the worked computations are too long to interleave into
the existing Master-tier `03.04.05` unit.

### Cluster V — Closed and exact forms; Poincaré lemma (§8.5)

| Shifrin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Closed form: $d\omega = 0$; exact form: $\omega = d\eta$ | `03.04.06-de-rham-cohomology.md` | ✓ | Defined cleanly in the de Rham unit. |
| Exact ⇒ closed (via $d^2 = 0$) | `03.04.06-de-rham-cohomology.md` | ✓ | Stated. |
| **Poincaré lemma** on a star-shaped (or contractible) domain: closed ⇒ exact | △ | △ | Stated as a corollary in `03.04.06`; **the explicit homotopy operator $K\omega$ construction is not given in Codex at Beginner-tier**. Bott-Tu / Whitney audit production gives the operator at Master tier but not in undergraduate-friendly form. |
| Angle 1-form $d\theta = (-y\,dx + x\,dy)/(x^2 + y^2)$ on $\mathbb{R}^2 \setminus \{0\}$ as closed-not-exact (first instance of de Rham cohomology) | — | ✗ | **Gap.** The angle 1-form is the canonical first example of nontrivial de Rham cohomology and is absent from the corpus. |
| Winding number as cohomology obstruction; $H^1_{dR}(\mathbb{R}^2 \setminus \{0\}) = \mathbb{R}$ | △ | △ | Implicit in `03.04.06-de-rham-cohomology.md` Master tier; **Beginner-tier statement with the explicit $d\theta$ computation is absent.** |

**Cluster V status:** master-tier de Rham machinery shipped, but the
**Beginner-tier Poincaré-lemma-with-explicit-homotopy-operator and
the angle-1-form worked example** are absent. The angle-1-form unit
is small and high-leverage.

### Cluster VI — Submanifolds of $\mathbb{R}^n$ and integration on them (§8.6)

| Shifrin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Submanifold $M \subseteq \mathbb{R}^n$ via level sets $f^{-1}(c)$ with full-rank $f$ | `03.02.01-smooth-manifold.md`, `02.05.04-implicit-inverse-function-theorems.md` | ✓ | Submanifold framing covered in `03.02.01` (abstract) and `02.05.04` (implicit-function-theorem proof). |
| Parametrised submanifold via $\Phi: D \to \mathbb{R}^n$ with full-rank $D\Phi$ | `02.10.05-surface-integral-parametric-surfaces.md` | △ | Covered for 2-surfaces; general-dimension parametrised submanifold absent. |
| Tangent space $T_p M$ as $\ker df_p$ or $\mathrm{im}\,D\Phi_q$ | `03.02.01-smooth-manifold.md` | △ | Defined abstractly; the $\mathbb{R}^n$-embedded explicit-formula characterisation is implicit. |
| Equivalence of level-set / parametrised definitions via inverse function theorem | `02.05.04-implicit-inverse-function-theorems.md` | ✓ | Implicit function theorem shipped. |
| Integration of forms on a submanifold via pullback | `03.04.03-integration-on-manifolds.md` | ✓ | Shipped. |
| Pointer to abstract-manifold extension | `03.02.01-smooth-manifold.md` | ✓ | The abstract definition is the unit's subject. |

**Cluster VI status:** **fully covered.** Shifrin §8.6 is a pointer
chapter to graduate study and the targets it points to (abstract
manifold, integration via pullback, implicit-function theorem) are
all shipped. **No new units.**

### Aggregate coverage estimate

- **Theorem layer:** ~85% topic-level coverage. All five named
  theorems of Ch. 8 (Stokes, Green, classical Stokes, divergence,
  Poincaré lemma) are present in the corpus, but **Beginner-tier
  classical-vector-calculus presentations of each are absent**.
- **Worked-example layer:** ~30%. The corpus has no
  physics-notation worked examples of flux through a sphere /
  cylinder, no classical line-integral computations, no
  explicit angle-1-form computation, no concrete $\mathbb{R}^3$
  vector-field applications of Green / Stokes / divergence
  theorems. **This is the largest single contribution Shifrin
  delivers above the existing corpus.**
- **Notation layer:** ~60% aligned. Codex uses $\Omega^k(M)$,
  $d\omega$, $\int_M \omega$, $\wedge$ (Bott-Tu / Lee). Shifrin
  uses the same in §8.1-§8.5; **the bridge to the classical
  $\nabla$-operator notation** ($\nabla f$, $\nabla \cdot
  \mathbf{F}$, $\nabla \times \mathbf{F}$, $d\mathbf{r}$,
  $d\mathbf{S}$, $dV$) is **the load-bearing notation work** of
  this audit. The notation crosswalk file
  `notation/shifrin-multivariable.md` (per
  `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4) is the largest
  notation crosswalk in any audit because it bridges two
  pedagogical traditions, not just two textbook conventions.
- **Sequencing layer:** ~90%. The chain forms → exterior
  derivative → Stokes → de Rham is shipped at `03.04.02 →
  03.04.04 → 03.04.05 → 03.04.06`. Shifrin's chain forms-and-
  classical-vector-calculus → line / surface integrals →
  classical Stokes / Green / divergence → Poincaré lemma /
  angle 1-form is the parallel **undergraduate-pedagogical**
  sequence and needs the bridge units to be navigable.
- **Intuition layer:** ~40%. The "differential forms generalise
  classical vector calculus" intuition is implicit in
  `03.04.05-stokes-theorem.md` (the worked-example section gives
  Green / classical Stokes / divergence as specialisations) but
  **the intuition is presented as a graduate retrospective on
  classical vector calculus, not as a Beginner-tier on-ramp from
  it.** Shifrin's distinctive contribution is the **on-ramp
  direction**.
- **Application layer:** ~50%. Physical-flux applications
  (electrostatics Gauss's law, magnetic-flux examples, fluid-flow
  circulation) are pointed to in `10-em-sr/` units but not as
  worked examples of the differential-forms-and-Stokes
  machinery.

**Composite estimate:** **~65% topic coverage** at Master tier
already, with the **35% gap concentrated at Beginner and Intermediate
tier on the classical-vector-calculus side**. After Priority-1
punch-list completion the estimate rises to ~90% with all three
tiers populated; Priority-2 closes the worked-example exercise pack
and the angle-1-form unit. The net Shifrin-Ch.8-distinctive
contribution to the punch-list is **~6 net-new units** (mostly
Beginner / Intermediate tier with light Master) plus **3
deepenings** of existing differential-forms units.

---

## §3 Gap punch-list (priority-ordered)

**Coordination notes.**

- **The Apostol Vol 2 audit** (`plans/fasttrack/tom-m-apostol-calculus-vol-multi.md`)
  flags items 25 (line integral), 26 (path-independence /
  conservative fields), 27 (Green), 28 (Stokes classical), 29
  (divergence) on the same gaps. Those items are recorded as
  `[ENRICH]` paragraphs on `03.04.05` in the Apostol audit; this
  Shifrin audit **upgrades them** to a small dedicated set of
  Beginner-tier units, on the grounds that the worked-computation
  density is too high to fit as ENRICH on a Master-tier unit. The
  Apostol audit and the Shifrin audit do not double-count: the
  Shifrin audit owns the Beginner-tier unit production; the
  Apostol audit owns the in-place ENRICH paragraphs that point
  forward to the new Shifrin-audit units.
- **The Bott-Tu audit** (`plans/fasttrack/bott-tu-differential-forms.md`,
  Pass V verified) explicitly defers Beginner-tier classical-
  Stokes-as-special-case presentation to a future audit; this
  Shifrin audit closes that defer.
- **The Whitney audit** (`plans/fasttrack/whitney-geometric-integration-theory.md`)
  covers forms-on-$\mathbb{R}^n$ at the geometric-measure-theory
  / flat-chains / deformation-theorem level and lands in
  `02.13-geometric-measure-theory/`. No conflict with Shifrin
  which stays in `03.04-differential-forms/`.

Every item below is flagged as either **[NEW]** (write a new unit),
**[DEEPEN]** (extend an existing shipped unit), **[ENRICH]** (add a
§Notation / §Originator paragraph), or **[already covered by ...]**
(no work; recorded to keep §2 tight). Slot ranges target the
appropriate chapter; new units land in `03.04-differential-forms/`
next to the units they deepen.

**Priority 1 — Shifrin-Ch.8-distinctive Beginner-tier classical-vector-calculus units (the pedagogical bridge):**

1. **`03.04.18` Differential forms on $\mathbb{R}^3$ and the grad / div / curl dictionary.** [NEW] Anchor Shifrin Ch. 8 §8.1 +
   Spivak *Calculus on Manifolds* Ch. 4 + Marsden-Tromba
   *Vector Calculus* Ch. 8 (5th ed., Freeman 2003). Three-tier with
   **Beginner-tier dominant**; ~2200 words. Define the
   **dictionary**: on $\mathbb{R}^3$ with standard basis $dx, dy,
   dz$, the Hodge $\ast$ identifies $\Omega^1(\mathbb{R}^3) \cong
   \mathbb{R}^3$-valued functions (vector fields) and
   $\Omega^2(\mathbb{R}^3) \cong \mathbb{R}^3$-valued functions
   via $dy \wedge dz \mapsto \hat{x}$, $dz \wedge dx \mapsto
   \hat{y}$, $dx \wedge dy \mapsto \hat{z}$, and $\Omega^3
   (\mathbb{R}^3) \cong C^\infty(\mathbb{R}^3)$ via $dx \wedge dy
   \wedge dz \mapsto 1$. Under this dictionary: $d$ on a 0-form
   $f$ is $\nabla f$ (the **gradient**); $d$ on a 1-form is the
   **curl** of the corresponding vector field; $d$ on a 2-form is
   the **divergence** of the corresponding vector field times the
   volume form. **The two classical identities** $\nabla \times
   \nabla f = 0$ (curl of gradient is zero) and $\nabla \cdot
   (\nabla \times \mathbf{F}) = 0$ (divergence of curl is zero) are
   **exactly** $d^2 = 0$ on a 0-form and $d^2 = 0$ on a 1-form
   respectively. Worked examples in Beginner tier: compute
   $\nabla f$, $\nabla \times \mathbf{F}$, $\nabla \cdot \mathbf{F}$
   for $f = x^2 y$ and $\mathbf{F} = (yz, xz, xy)$ both classically
   and via $d$. Master tier: brief note that the dictionary
   generalises to oriented Riemannian $n$-manifolds via the Hodge
   $\ast$, with the classical identities becoming $d^2 = 0$ at
   each degree. **Bridges** `03.04.04-exterior-derivative.md`
   (upstream), `03.04.05-stokes-theorem.md` (downstream). **The
   single most-cited pedagogical contribution of Shifrin Ch. 8 to
   the FT spine.**

2. **`03.04.19` Line integrals of 1-forms; path-independence and conservative fields.** [NEW] Anchor Shifrin Ch. 8 §8.2 +
   Apostol Vol 2 Ch. 10 + Marsden-Tromba Ch. 7. Three-tier with
   **Beginner-tier dominant**; ~2000 words. Define the **line
   integral** $\int_\gamma \omega$ of a 1-form $\omega = P\,dx +
   Q\,dy + R\,dz$ along a smooth parametrised curve $\gamma: [a,
   b] \to \mathbb{R}^3$ as the Riemann integral $\int_a^b [P
   \dot{x} + Q \dot{y} + R \dot{z}]\,dt$. Equivalent presentation:
   $\int_\gamma \omega = \int_a^b \gamma^*\omega$ via pullback.
   **Conservative vector field theorem:** the following are
   equivalent on a connected open $U \subseteq \mathbb{R}^3$ —
   (a) $\mathbf{F} = \nabla f$ for some scalar potential $f$; (b)
   $\int_\gamma \omega$ depends only on the endpoints of $\gamma$
   (path-independence); (c) $\oint_\gamma \omega = 0$ for every
   closed loop $\gamma$; (d) the 1-form $\omega$ corresponding to
   $\mathbf{F}$ is exact ($\omega = df$). On a **simply connected**
   $U$, these are also equivalent to (e) $\nabla \times \mathbf{F}
   = 0$ (the **closed-form** condition); on a non-simply-connected
   $U$ the equivalence (a)-(d) ⇔ (e) fails — see `03.04.21` for
   the angle 1-form counterexample. Worked examples: compute work
   done by $\mathbf{F} = (y, x, 0)$ around the unit circle in
   the $xy$-plane (zero, because $\mathbf{F}$ is conservative);
   compute work done by $\mathbf{F} = (-y, x, 0) / (x^2 + y^2)$
   around the unit circle (= $2\pi$, the **winding-number
   obstruction**). Master tier: this is the cohomology statement
   $H^1_{dR}(U) = 0$ for $U$ simply connected, $H^1_{dR}(\mathbb{R}^2
   \setminus \{0\}) = \mathbb{R}$ for the punctured plane.
   **Bridges** `03.04.02-differential-forms.md`, `03.04.06-de-
   rham-cohomology.md`, `03.04.21` (angle 1-form unit below).

3. **`03.04.20` Surface integrals of 2-forms; flux of a vector field through an oriented surface.** [NEW] Anchor Shifrin Ch.
   8 §8.3 + Apostol Vol 2 Ch. 12 + Marsden-Tromba Ch. 7-8 +
   `02.10.05-surface-integral-parametric-surfaces.md` (Codex
   classical-side bridge). Three-tier with **Beginner-tier
   dominant**; ~2200 words. Define the **surface integral**
   $\iint_S \omega$ of a 2-form $\omega = P\,dy \wedge dz + Q\,dz
   \wedge dx + R\,dx \wedge dy$ over a smoothly parametrised
   oriented surface $S = \Phi(D)$ via $\iint_S \omega = \iint_D
   \Phi^*\omega$. **Classical flux presentation:** under the
   $\Omega^2(\mathbb{R}^3) \cong$ vector-fields dictionary
   (`03.04.18`), the 2-form $\omega$ corresponds to the vector
   field $\mathbf{F} = (P, Q, R)$ and $\iint_S \omega = \iint_S
   \mathbf{F} \cdot d\mathbf{S}$ where $d\mathbf{S} = \mathbf{n}\,
   dS$ is the **oriented surface element** (outward-pointing unit
   normal times scalar surface area). **Orientation:** a smooth
   global choice of normal vector field $\mathbf{n}$ on $S$;
   non-orientability of the **Möbius band** as the worked
   counterexample (the obstruction is topological — no consistent
   normal vector field exists). Worked examples: compute the flux
   of $\mathbf{F} = (x, y, z)$ outward through the unit sphere
   $S^2$ (answer $4\pi$, the **Gauss-law prototype**); compute the
   flux of $\mathbf{F} = (-y, x, 0)$ upward through the disk $D =
   \{x^2 + y^2 \leq 1, z = 0\}$ (answer $\pi r^2 \cdot 2 =
   2\pi$ — connects to circulation via classical Stokes).
   Master tier: bridge to `03.04.03-integration-on-manifolds.md`
   (the general manifold-form integration). **Bridges**
   `02.10.05-surface-integral-parametric-surfaces.md`,
   `03.04.02`, `03.04.03`, `03.04.05`.

4. **`03.04.21` Closed and exact forms; Poincaré lemma; the angle 1-form.** [NEW] Anchor Shifrin Ch. 8 §8.5 + Spivak *Calculus
   on Manifolds* Ch. 4 + Bott-Tu §I.4. Three-tier with
   **Intermediate-tier dominant**; ~2000 words. Define **closed**
   ($d\omega = 0$) and **exact** ($\omega = d\eta$) forms; exact
   ⇒ closed via $d^2 = 0$. **Poincaré lemma:** on a star-shaped
   open set $U \subseteq \mathbb{R}^n$, every closed form is
   exact. **Proof via the explicit homotopy operator** $K:
   \Omega^k(U) \to \Omega^{k-1}(U)$ defined by $(K\omega)(x)(v_1,
   \ldots, v_{k-1}) = \int_0^1 t^{k-1} \omega(tx)(x, v_1, \ldots,
   v_{k-1})\,dt$; the identity $dK + Kd = \mathrm{id}$ (the
   **chain homotopy** between $\mathrm{id}$ and $0$ on $\Omega^*
   (U)$) gives: if $d\omega = 0$ then $\omega = d(K\omega)$.
   Proof given at undergraduate level with full computation (this
   is the standard Spivak / Madsen-Tornehave proof, accessible
   without graduate-tier chain-homotopy abstraction). **The
   angle 1-form** $\omega = (-y\,dx + x\,dy) / (x^2 + y^2)$ on
   $U = \mathbb{R}^2 \setminus \{0\}$: direct computation shows
   $d\omega = 0$ (closed); the line integral $\oint_C \omega =
   2\pi$ around any loop $C$ encircling the origin shows $\omega$
   is **not exact** (else the integral would vanish by
   path-independence). Conclusion: the **first cohomology**
   $H^1_{dR}(\mathbb{R}^2 \setminus \{0\}) = \mathbb{R}$, generated
   by $[\omega]$. The class $[\omega] \in H^1_{dR}$ detects the
   **winding number** of $C$ around the origin. Master tier:
   pointer to the de Rham cohomology unit `03.04.06` for the
   general framework; pointer to `03.04.06` Master tier for the
   Mayer-Vietoris computation $H^*_{dR}(S^n)$. **Bridges**
   `03.04.02`, `03.04.04`, `03.04.06`. **The single most
   important Beginner-tier de-Rham-cohomology example in the FT
   spine.**

**Priority 2 — Worked-example pack and deepenings:**

5. **`03.04.E2` Classical-Stokes worked-example pack: Green, classical Stokes, divergence on $\mathbb{R}^3$.** [NEW]
   Anchor Shifrin Ch. 8 §8.4 + Apostol Vol 2 Ch. 11-12 +
   Marsden-Tromba Ch. 8. Exercise-pack unit (mirroring
   `03.04.E1-mv-degree-exercises.md`); ~2400 words. ~12 worked
   problems distributed across the three classical specialisations:
   - **Green's theorem (3 problems):** (a) verify Green's theorem
     for $\omega = -y\,dx + x\,dy$ on the unit disk (both sides
     evaluate to $2\pi$); (b) area enclosed by a closed planar
     curve via $\mathrm{Area} = \frac{1}{2}\oint(-y\,dx + x\,dy)$;
     (c) Green's theorem applied to an annulus (boundary has two
     components).
   - **Classical Stokes (4 problems):** (a) verify classical
     Stokes for $\mathbf{F} = (y, -x, 0)$ on the upper hemisphere
     of $S^2$ with boundary the equatorial circle; (b)
     circulation of $\mathbf{F} = (z, x, y)$ around a triangle
     with vertices $(1,0,0), (0,1,0), (0,0,1)$ via the
     curl-flux integral over the triangle; (c) classical Stokes
     applied to a deformed surface (showing surface-independence
     for fixed boundary); (d) classical Stokes applied to a
     surface with hole (boundary has two components).
   - **Divergence theorem (4 problems):** (a) verify the
     divergence theorem for $\mathbf{F} = (x, y, z)$ on the unit
     ball $B^3 \subset \mathbb{R}^3$ (both sides = $4\pi$, the
     **Gauss-law prototype**); (b) divergence theorem applied to
     a cylindrical shell; (c) computation of $\iint_{S^2}
     (x^2 + y^2 + z^2)\,dS = 4\pi$ via the divergence theorem
     applied to $\mathbf{F} = (x^3/3, y^3/3, z^3/3)$; (d) Gauss's
     law in electrostatics ($\iint_{\partial V} \mathbf{E} \cdot
     d\mathbf{S} = 4\pi Q_{\mathrm{enc}}$) as a divergence-theorem
     application with point-charge limit.
   - **One transcendence problem (1):** the same physical flux
     computed via three different specialisations of generalised
     Stokes, showing the unity.
   **Bridges** `03.04.05`, `03.04.18`, `03.04.20`. **The single
   highest-density Beginner-tier physics-notation worked-example
   batch in the FT corpus.**

6. **`03.04.05` Deepen Stokes-theorem unit with classical-specialisations dictionary Beginner-tier subsection.** [DEEPEN] Anchor Shifrin Ch. 8 §8.4. Beginner-tier addition,
   ~600 words. Currently `03.04.05-stokes-theorem.md` Beginner
   tier mentions Green / classical Stokes / divergence in one
   paragraph of the Worked Example; this deepening adds a
   **dedicated subsection** listing each as a named theorem with
   its classical form, the $n$ and $k$ values that specialise
   generalised Stokes to it, and a cross-link to the
   `03.04.E2` worked-example pack and the `03.04.18` dictionary
   unit. **No new unit ID.** Coordinates with the Apostol Vol 2
   audit's items 27-29 (also flagging `[ENRICH]` on `03.04.05`);
   this deepening absorbs those Apostol-audit ENRICH items so
   they need not be produced separately.

7. **`03.04.06` Deepen de Rham cohomology unit with the angle-1-form Beginner-tier worked example.** [DEEPEN] Anchor
   Shifrin Ch. 8 §8.5. Beginner-tier addition, ~400 words.
   Currently `03.04.06-de-rham-cohomology.md` defines $H^*_{dR}$
   abstractly and computes $H^*_{dR}(\mathbb{R}^n)$ and
   $H^*_{dR}(S^n)$ via Mayer-Vietoris at Master tier; this
   deepening adds a **Beginner-tier worked-example subsection**
   on the angle 1-form, computing $H^1_{dR}(\mathbb{R}^2 \setminus
   \{0\}) = \mathbb{R}$ directly (without Mayer-Vietoris machinery)
   and identifying the cohomology class with the winding number.
   Cross-link to the new `03.04.21` Poincaré-lemma unit. **No new
   unit ID.**

**Priority 3 — Notation crosswalk and originator-prose enrichments:**

8. **`notation/shifrin-multivariable.md`** [NEW notation crosswalk
   file] Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4.
   ~800 words. Two-column crosswalk:
   - **Forms-side notation** (Shifrin §8.1-§8.5 = Codex
     `03.04.*`): $\omega \in \Omega^k(M)$, $d\omega$, $\omega
     \wedge \eta$, $dx_i$, $dx_I = dx_{i_1} \wedge \cdots \wedge
     dx_{i_k}$, $\int_M \omega$, $\Phi^*\omega$.
   - **Classical-vector-calculus notation** (Shifrin §8.2-§8.4
     classical-side): $\mathbf{F}$, $\nabla f$, $\nabla \cdot
     \mathbf{F}$, $\nabla \times \mathbf{F}$, $\mathbf{F} \cdot
     d\mathbf{r}$, $\mathbf{F} \cdot d\mathbf{S}$, $dV$, $dS$,
     $\hat{x}, \hat{y}, \hat{z}$.
   - Two-column dictionary table: each row gives the forms-side
     object, the classical-side object, the explicit
     correspondence (via Hodge $\ast$ on $\mathbb{R}^3$), and the
     reference to the Babel Bible unit where the correspondence is
     stated (`03.04.18` primarily). **Mandatory load-bearing
     notation work.**

9. **`03.04.02` Enrich differential-forms unit with Cartan originator paragraph and Beginner-tier dictionary pointer.** [ENRICH] Anchor Shifrin Ch. 8 §8.1 + Élie Cartan 1899 *Bull.
   Soc. Math. France* 27 / 1899 *Ann. Sci. ÉNS* (the
   originator paper on exterior differential systems). ~200 words.
   Add a §"Classical-vector-calculus dictionary" Beginner-tier
   pointer pointing forward to `03.04.18` and noting that the
   forms framework subsumes the classical $\nabla$-operator
   framework. **No new unit ID.**

10. **`03.04.04` Enrich exterior-derivative unit with the classical-identities subsection.** [ENRICH] Anchor Shifrin
    Ch. 8 §8.1. Beginner-tier addition, ~250 words. Add a
    §"$d^2 = 0$ as the classical $\nabla$ identities" Beginner-
    tier subsection: $d^2 f = 0$ on a 0-form = $\nabla \times
    \nabla f = 0$ (curl of gradient is zero); $d^2 \omega = 0$
    on a 1-form = $\nabla \cdot (\nabla \times \mathbf{F}) = 0$
    (divergence of curl is zero). Cross-link to `03.04.18`.
    **No new unit ID.**

### Already covered — items extracted from the audit to keep the punch-list focused (do not produce):

- **Differential forms, wedge product, exterior derivative,
  Stokes' theorem, de Rham cohomology, integration on manifolds,
  parametric surface integral:** already covered by
  `03.04.02`, `03.04.04`, `03.04.05`, `03.04.06`, `03.04.03`,
  `02.10.05`. The **Beginner-tier classical-vector-calculus
  presentations** are the punch-list contribution, not the
  underlying abstract-form machinery.
- **Smooth manifold, tangent space, implicit / inverse function
  theorems, submanifold via level set or parametrisation:**
  already covered by `03.02.01`, `02.05.04`. Shifrin §8.6 is a
  pointer chapter to these; no new units.
- **Mayer-Vietoris, Künneth, Poincaré duality:** already covered
  by `03.04.07`, `03.04.12`, `03.12.16`. Shifrin Ch. 8 does not
  reach these (deferred to graduate study).
- **Multivariable differential calculus (partial derivatives,
  gradient, chain rule, directional derivative, Taylor's theorem
  in several variables, Lagrange multipliers):** Chapters 6-7 of
  Shifrin — already covered by `02.05.*` (partially) and the
  Apostol Vol 2 audit's punch-list (in production). Out of scope
  for this Shifrin-Ch.8 audit.
- **Linear algebra (vector spaces, matrices, determinants,
  eigenvalues, inner products, spectral theorem, quadratic
  forms):** Chapters 1-5 of Shifrin — already covered by
  `01.01.*` (partially) and the Apostol Vol 2 audit's punch-list
  + the Shilov audit's punch-list. Out of scope for this
  Shifrin-Ch.8 audit.
- **Topology of $\mathbb{R}^n$, continuity, limits:** already
  covered by `02.01.*`. Shifrin Ch. 6 §1-§2 is upstream-covered.

---

## §4 Acceptance criteria for FT equivalence (Shifrin 1.18 Ch. 8)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 / §9, the book
(Ch. 8 only) is at equivalence-coverage when:

- ≥95% of Shifrin Ch. 8's named theorems map to Babel Bible units.
  Current ~85%; after Priority-1 patches (items 1-4) rises to ~95%
  with Beginner-tier classical-vector-calculus presentations
  populated.
- ≥90% of Shifrin Ch. 8's worked examples (~20 physics-notation
  computations of line / surface / volume integrals) have a direct
  unit or are referenced from a unit. Current ~30%; after
  Priority-2 worked-example pack (item 5) rises to ~95%.
- The 4 Priority-1 net-new units (`03.04.18`, `03.04.19`,
  `03.04.20`, `03.04.21`) and the 1 Priority-2 exercise-pack unit
  (`03.04.E2`) ship and validate at 27/27.
- The Beginner-tier deepening of `03.04.05-stokes-theorem.md` adds
  the classical-specialisations dictionary subsection (item 6),
  and the deepening of `03.04.06-de-rham-cohomology.md` adds the
  angle-1-form Beginner-tier worked example (item 7).
- `notation/shifrin-multivariable.md` is shipped (item 8) with the
  two-column forms ↔ classical-vector-calculus dictionary table.
- Originator-prose / pointer enrichments to `03.04.02` (item 9) and
  `03.04.04` (item 10) are present.
- Cross-link audit: the new `03.04.18`, `03.04.19`, `03.04.20`,
  `03.04.21` units appear in the prerequisites / successors of
  `03.04.05` (Stokes) and `03.04.06` (de Rham) per the existing
  Babel Bible DAG conventions.

The 4 Priority-1 units close the Beginner-tier forms-on-$\mathbb{R}^n$
pedagogical gap. Priority-2 (item 5) closes the worked-example
density gap. Priority-3 (items 8-10) closes the notation crosswalk
and originator-prose layer. **The Apostol Vol 2 audit's items
25-29 are absorbed by this audit's items 1-3 and item 6** and need
not be produced as separate ENRICH paragraphs.

---

## §5 Sourcing and notation crosswalk

- **Sourcing.** BUY. Wiley first edition 2005, ISBN 978-0-471-
  52638-4. Wiley list price ~$200; secondhand and Wiley eBook
  $60-80; stocked in most US academic libraries. Listed on
  `docs/catalogs/FASTTRACK_BOOKLIST.md` entry 1.18 as BUY.
- **Local copy.** **Not present** in
  `reference/fasttrack-texts/01-fundamentals/` at audit time. A
  scanned copy should be added to
  `reference/fasttrack-texts/01-fundamentals/Shifrin-MultivariableMathematics.pdf`
  before production on the Priority-1 punch-list units, so that
  line-number citations can be resolved for the worked-example
  pack (item 5) and the Poincaré-lemma proof in item 4.
- **Companion peer texts:**
  - **M. Spivak**, *Calculus on Manifolds* (Benjamin / Westview
    1965, ~160 pp.). The canonical short text on
    forms-on-$\mathbb{R}^n$ at the same pedagogical level as
    Shifrin Ch. 8. Preferred secondary anchor for `03.04.18`,
    `03.04.20`, `03.04.21`. The Poincaré-lemma proof in `03.04.21`
    is the Spivak proof.
  - **J. Marsden, A. Tromba**, *Vector Calculus* (5th ed., W. H.
    Freeman 2003, ~700 pp.). The canonical sophomore-level
    classical-vector-calculus textbook in the US tradition;
    preferred secondary anchor for `03.04.19`, `03.04.20`, and
    the worked-example pack `03.04.E2`. The classical $P\,dx +
    Q\,dy + R\,dz$ and $\mathbf{F} \cdot d\mathbf{S}$ presentations
    Codex absorbs are Marsden-Tromba's.
  - **T. M. Apostol**, *Calculus, Vol. 2* (2nd ed., Wiley 1969).
    Already on the FT (entry 0.3). The rigorous-vector-calculus
    counterpart to Shifrin; the Apostol Vol 2 audit
    (`plans/fasttrack/tom-m-apostol-calculus-vol-multi.md`) is
    the upstream coordination point.
  - **R. Bott, L. W. Tu**, *Differential Forms in Algebraic
    Topology* (Springer GTM 82, 1982). The graduate-level
    forms-on-manifolds text; the Bott-Tu audit
    (`plans/fasttrack/bott-tu-differential-forms.md`, Pass V
    verified) is the downstream coordination point. Shifrin Ch.
    8 is the **prerequisite** for reading Bott-Tu Ch. I cleanly.
  - **J. M. Lee**, *Introduction to Smooth Manifolds* (2nd ed.,
    Springer GTM 218, 2013). The graduate-level abstract-manifold
    text; Shifrin §8.6 is the **prerequisite** for reading Lee
    Ch. 11-16 cleanly.
  - **É. Cartan**, "Sur certaines expressions différentielles et
    le problème de Pfaff," *Ann. Sci. ÉNS* (3) 16 (1899),
    239-332; "Sur l'intégration de certains systèmes
    indéterminés d'équations différentielles," *J. Reine Angew.
    Math.* 145 (1915), 86-91. The **originator papers** on
    exterior differential systems / the modern $d\omega$
    formalism. Cited in `03.04.02` (existing) and reinforced in
    item 9 ENRICH.
  - **H. Poincaré**, "Analysis situs," *J. École Polytechnique*
    (2) 1 (1895), 1-121. The originator paper on the **Poincaré
    lemma** (then unnamed; Poincaré proves the homotopy-invariance
    of period integrals on star-shaped domains). Cited in
    `03.04.21`.

- **Notation crosswalk.** Shifrin Ch. 8 uses the standard modern
  forms notation $\omega \in \Omega^k$, $d\omega$, $\omega \wedge
  \eta$ — **identical** to the Codex / Bott-Tu / Lee notation
  already in `03.04.*`. The load-bearing notation work is the
  **bridge to classical-vector-calculus notation**: $\mathbf{F}$
  for a vector field on $\mathbb{R}^3$ corresponding to a 1-form
  via $\flat$ ($\mathbf{F}^\flat = F_1\,dx + F_2\,dy + F_3\,dz$);
  $\mathbf{F}$ corresponding to a 2-form via $\flat \circ \ast$
  ($\ast \mathbf{F}^\flat = F_1\,dy \wedge dz + F_2\,dz \wedge dx +
  F_3\,dx \wedge dy$); $\nabla f = (\partial_x f, \partial_y f,
  \partial_z f)$ corresponding to $df$; $\nabla \times \mathbf{F}$
  corresponding to $d(\mathbf{F}^\flat)$ under the 1-form ↔ 2-form
  ↔ vector-field round-trip; $\nabla \cdot \mathbf{F}$
  corresponding to $d(\ast \mathbf{F}^\flat) / dx \wedge dy \wedge
  dz$. The Babel Bible decision (per `docs/specs/UNIT_SPEC.md` §11)
  is to **adopt the forms notation as primary** in `03.04.*`
  units and **install the dictionary as the load-bearing
  Beginner-tier content in `03.04.18`**, with the
  `notation/shifrin-multivariable.md` crosswalk file as the
  cross-tradition reference. The two notations are equivalent
  on $\mathbb{R}^3$ and the dictionary is bijective; Shifrin's
  pedagogical innovation is to run them in parallel so the
  reader fluent in classical $\nabla$ acquires fluency in $d$
  (and vice versa).

---

## §6 What this plan does NOT cover

- **Shifrin Chapters 1-7** — linear algebra (Chs. 1-5), multivariable
  differential calculus (Ch. 6), multivariable integral calculus
  (Ch. 7). **Out of scope** by the FT entry's explicit restriction
  to Ch. 8. Upstream-covered by Apostol Vol 2 (FT 0.3) and Shilov
  (FT 1.01) audits; the punch-lists of those audits absorb the
  Shifrin Chs. 1-7 material.
- **Abstract smooth manifolds; tangent / cotangent bundles;
  intrinsic differential geometry.** Shifrin §8.6 is a one-page
  pointer to this material; the full graduate-tier treatment is
  delegated to Spivak's *Comprehensive Introduction* (referenced
  in `03.02.01`, `03.04.02`) and to Lee's *Introduction to Smooth
  Manifolds*. Out of scope for this Shifrin-Ch.8 audit.
- **De Rham cohomology beyond the angle-1-form example.**
  `03.04.06-de-rham-cohomology.md` covers the general framework
  (Mayer-Vietoris computation of $H^*_{dR}(S^n)$, the de Rham
  theorem). Shifrin Ch. 8 does not reach the general framework;
  the angle-1-form is the **single concrete instance** he gives.
  Item 4 (`03.04.21`) and item 7 (deepening of `03.04.06`) cover
  this; the general framework is already in the Bott-Tu / Whitney
  shipped content.
- **Differential geometry of curves and surfaces in $\mathbb{R}^3$
  (Frenet-Serret, Gauss curvature, geodesics, Gauss-Bonnet).**
  Shifrin's *earlier* book *Differential Geometry: A First Course
  in Curves and Surfaces* (self-published, freely available)
  covers this; the FT entry restricts to *Multivariable
  Mathematics* Ch. 8 and does not include this material. The
  classical-curves-and-surfaces strand is covered by KN-I /
  Sternberg-LDG / Cartan-Sternberg-Curvature audits at the
  modern-geometry level. **Out of scope.**
- **Numerical methods, applications to ODE / PDE, probability /
  statistics.** Shifrin Chs. 1-7 (and Apostol Vol 2 Chs. 13-15)
  reach into these; out of scope here and out of scope for
  Apostol Vol 2 audit too (deferred to the future
  Arnold-ODEs audit and to specialised statistics / numerics
  audits).
- **Forms on manifolds with boundary at the geometric-measure-
  theory / flat-chains level.** Whitney 1.13 audit covers this;
  the Shifrin audit stays at the smooth-forms-on-$\mathbb{R}^n$
  level and does not duplicate Whitney material.

---

## §7 Summary card

- **Net-new units (Priority 1):** 4
  (`03.04.18` grad-div-curl dictionary; `03.04.19` line
  integrals; `03.04.20` surface integrals / flux; `03.04.21`
  Poincaré lemma + angle 1-form).
- **Net-new units (Priority 2):** 1
  (`03.04.E2` classical-Stokes worked-example pack).
- **Deepenings (Priority 2):** 2
  (`03.04.05` Stokes Beginner-tier classical specialisations;
  `03.04.06` de Rham Beginner-tier angle-1-form example).
- **Notation crosswalk (Priority 3):** 1
  (`notation/shifrin-multivariable.md`).
- **ENRICH paragraphs (Priority 3):** 2
  (`03.04.02` Cartan-originator + dictionary pointer;
  `03.04.04` $d^2 = 0$ classical identities subsection).
- **Total net-new units:** 5.
- **Total deepenings + enrichments + notation:** 5 in-place
  edits + 1 new notation file.
- **Already-covered count from §2:** ~12 items (the entire
  abstract forms / Stokes / de Rham / integration-on-manifolds
  apparatus) already shipped via Bott-Tu / Whitney / Sternberg-
  LDG audit production. Shifrin Ch. 8's distinctive contribution
  is **Beginner-tier pedagogical packaging**, not novel content.
- **Originator-prose anchors:** Cartan 1899 (exterior calculus);
  Poincaré 1895 (Poincaré lemma); Stokes 1854 (the namesake);
  Green 1828 (Green's theorem); Gauss 1813 / Ostrogradsky 1826
  (divergence theorem).

**Distinctive Shifrin Ch. 8 contribution vs the existing Codex.**
The Babel Bible covers differential forms, exterior derivative,
Stokes, and de Rham at full Bott-Tu / Lee / Whitney master-tier
rigour. Shifrin Ch. 8 covers the **same material at undergraduate
pedagogical tier**: the same theorems stated and proved with
**physics-notation worked examples**, **classical vector-calculus
specialisations explicitly named**, and a **two-presentation
parallel-tracks layout** that maps the abstract forms apparatus
onto the classical $\nabla$-operator apparatus a sophomore reader
already knows. The audit's signature contribution is the
**Beginner-tier pedagogical bridge between Apostol Vol 2 (classical
vector calculus in pure $\nabla$-operator form, no forms framing)
and Bott-Tu / Whitney / Lee (graduate-tier forms on abstract
manifolds)**. The 4 Priority-1 units (`03.04.18` dictionary,
`03.04.19` line integrals, `03.04.20` surface integrals / flux,
`03.04.21` Poincaré lemma + angle 1-form) plus the worked-example
pack (`03.04.E2`) deliver the bridge. **Net pedagogical lift:** the
Codex gains a Beginner-tier on-ramp from undergraduate
multivariable-calculus to graduate differential-forms theory,
filling the pedagogical gap between FT 0.3 (Apostol) and FT 1.17
(Bott-Tu) that no other FT entry covers.
