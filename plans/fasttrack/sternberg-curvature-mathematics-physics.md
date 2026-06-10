# Sternberg — *Curvature in Mathematics and Physics* (Fast Track 1.14) — Audit + Gap Plan

**Book:** Shlomo Sternberg, *Curvature in Mathematics and Physics*,
Dover Publications, Mineola NY 2012. xi + 397 pp.
ISBN 978-0-486-47855-3 (Dover paperback). Dover's 2012 reprint is the
trade edition of Sternberg's 2008 Harvard course-note manuscript that
circulated electronically for several years as "Curvature, Yang-Mills,
gravity — the geometric side of physics," used as the text for
Sternberg's late-career Harvard Math 273 and Math 290 courses. The 2012
Dover printing made the manuscript a stable citable trade volume; the
Harvard course-note PDF (host: `people.math.harvard.edu/~shlomo/`)
remains available as the author's own pre-Dover version and is the
only freely circulating copy.

**Fast Track entry:** 1.14. Sourcing: **BUY** (Dover, ~$25 new;
secondhand $15–25). Marked `BUY` on `docs/catalogs/FASTTRACK_BOOKLIST.md`
line 23.

**Distinct** from Sternberg's earlier *Lectures on Differential
Geometry* (FT 1.10, Prentice-Hall 1964 / AMS-Chelsea reprint;
audited at `plans/fasttrack/sternberg-lectures-differential-geometry.md`)
and from his *Group Theory and Physics* (FT 1.15, CUP 1994). The three
Sternberg audits are intentionally separate: LDG (1964) is the
moving-frame / $G$-structures / Cartan-prolongation Differential
geometry text; *Curvature* (2008/2012) is the **gauge-theory + general
relativity application layer** that uses LDG-style differential
geometry as a tool; *Group Theory and Physics* (1994) is the
representation-theoretic counterpart aimed at quantum mechanics. The
three books partition Sternberg's pedagogical output roughly as
**geometry / curvature / symmetry**.

**Summary.** This is Sternberg's late-career synthesis of differential
geometry oriented toward its two great twentieth-century physical
applications: **general relativity** (Einstein's equations as the
Euler-Lagrange equations of the Einstein-Hilbert action, derived
through Cartan's structural equations and Chern's formulation of the
Gauss-Bonnet-Chern theorem) and **gauge theory** (Yang-Mills functional
on connections on a principal bundle, the Bianchi identities as
integrability conditions for curvature, Chern-Weil characteristic
classes, Chern-Simons forms, anomalies, the Atiyah-Singer index theorem
as the source of the topological constraints on instanton moduli).
Where LDG (1964) is a differential-geometry text with a brief Ch. VII
preview of symplectic mechanics, *Curvature* is the converse — a
**physics-motivated** book that presupposes manifold / Lie-group /
bundle infrastructure and pivots to the geometric machinery of gauge
theory and GR. The book ends with brief chapters on the geometric
content of quantum field theory (Faddeev-Popov ghosts as Maurer-Cartan
forms on the gauge group, BRST cohomology, anomalies via the
descent equations).

**Purpose of this plan:** lightweight P1-lite audit-and-gap pass
mirroring the Sternberg-LDG, Arnold-Hydrodynamics, and Cannas
audits. The volume is **applied-mathematical-physics density** —
moderate theorem count, heavy on computational examples and
physics-style derivations — so the equivalence target is
**expository-coverage plus originator-prose anchoring**, not full
proof-depth on every named result. **The decisive question for this
audit is overlap management**: the bulk of *Curvature*'s differential-
geometry chapters is shadow-covered by KN-I (FT 3.18), LDG (FT 1.10),
Bott-Tu (FT 1.17), and the existing Babel Bible
`03-modern-geometry/05-bundles/` + `06-characteristic-classes/` +
`07-gauge-theory/` + `13-gr-cosmology/` corpus. The genuinely
**Sternberg-Curvature-distinctive** content is concentrated in (a) the
Yang-Mills / Einstein-Hilbert variational-principle synthesis at a
pedagogically uniform level; (b) the BRST / Faddeev-Popov / anomaly
geometric exposition; (c) Sternberg's signature "physics derivation
via differential geometry" voice on the EM-as-U(1)-connection,
Kaluza-Klein, and Einstein-Hilbert action passages.

**Audit mode: REDUCED.** No local PDF in
`reference/fasttrack-texts/01-fundamentals/` at audit time; working from
canonical TOC + peer-source crosswalks + in-Codex evidence. The author's
Harvard page hosts the pre-Dover course-note PDF, which can be added to
`reference/fasttrack-texts/01-fundamentals/Sternberg-CurvatureMathPhysics.pdf`
before production. Chapter numbering below follows the Dover 2012
printing, which renumbers the 2008 manuscript's parts/chapters
slightly; cross-edition disambiguation flagged where it matters.

---

## §1 What *Curvature in Mathematics and Physics* is for

Sternberg's 2008 course notes were written to fill a specific
pedagogical gap: a physics-mathematics text covering **all of**
(i) Cartan differential geometry, (ii) the geometry of Maxwell-Yang-Mills
gauge theory, (iii) the geometry of Einstein's general relativity, (iv)
Chern-Weil characteristic classes and their use in gauge anomalies, at a
**uniform level** somewhere between Bott-Tu (rigorous, $C^\infty$-precise,
topology-leaning) and Nakahara *Geometry, Topology and Physics* (broad
overview, physics-loose). Where Bott-Tu is the canonical algebraic
topology + de Rham + characteristic-class text but ends short of
physics applications, and Nakahara is the canonical physics-overview but
sacrifices precision, *Curvature* sits in the middle — it is the book
that proves the Bianchi identities cleanly, derives the Yang-Mills
equations as the Euler-Lagrange equations of the Yang-Mills functional,
proves the Chern-Weil theorem with attention to physics-style sign and
factor conventions, and then derives the Einstein field equations from
the Einstein-Hilbert action by the same machinery used for Yang-Mills.

Distinctive Sternberg-Curvature contributions, organised by chapter
cluster:

1. **Chapter cluster A — Manifolds, Lie groups, forms (review).** Chs.
   1–5 of the Dover edition. Brisk review of smooth manifolds, vector
   fields and flows, Lie groups and Lie algebras, the exponential
   map, differential forms and exterior derivative, Stokes' theorem,
   de Rham cohomology. **Almost entirely review** — this is the
   prerequisite material Sternberg expects but recapitulates so the
   book is reasonably self-contained. The corresponding Codex
   coverage is essentially complete via the
   `03-modern-geometry/02-manifolds/`, `03-lie/`, `04-differential-forms/`,
   `03-differential-geometry/02-manifolds/`, `03-lie-groups/` chapters
   (and is shared with the KN-I and LDG audits).
2. **Chapter cluster B — Connections on principal and vector bundles
   (Chs. 6–9).** Definition of a principal bundle, connection 1-form
   $\omega \in \Omega^1(P; \mathfrak{g})$, horizontal subspace,
   curvature 2-form $\Omega = d\omega + \tfrac{1}{2}[\omega, \omega]$,
   the structure equation. Associated vector bundle with induced
   covariant derivative $\nabla^\rho$. Parallel transport and
   holonomy. **Bianchi identity** $d_\omega \Omega = 0$ proved as a
   formal consequence of $d^2 = 0$. **Sternberg's distinctive
   pedagogical move:** present the principal-bundle and moving-frame
   pictures **side by side** with explicit notation crosswalk —
   continuity with LDG Ch. V is deliberate; the formula
   $\omega^i_j$ for moving-frame connection 1-forms is reintroduced
   verbatim.
3. **Chapter cluster C — Riemannian and pseudo-Riemannian geometry
   (Chs. 10–12).** Riemannian and Lorentzian metrics on a manifold;
   the **Levi-Civita connection** as the unique torsion-free
   metric-compatible covariant derivative; first and second
   structural equations; **Riemann curvature tensor** in coordinates
   and as a 2-form on the orthonormal frame bundle; **Ricci tensor**,
   **scalar curvature**, **Weyl tensor** (the trace-free part of
   Riemann, which vanishes iff the metric is conformally flat in
   $\dim \geq 4$). **Geodesics**, the **exponential map** $\exp_p$,
   normal coordinates, **Hopf-Rinow theorem**. *Curvature* gives the
   pseudo-Riemannian (Lorentzian) version of Hopf-Rinow alongside the
   positive-definite version — distinctive vs LDG which is
   positive-definite throughout.
4. **Chapter cluster D — Chern-Weil theory and characteristic classes
   (Chs. 13–15).** **Invariant polynomials** $\mathrm{Inv}(\mathfrak{g})^G$
   on a Lie algebra, evaluated on curvature 2-forms produce closed
   differential forms whose de Rham classes are independent of the
   connection. **Chern-Weil theorem.** **Chern classes** $c_k(E)$ via
   $\det(I + \tfrac{i}{2\pi}\Omega)$. **Pontryagin classes** $p_k(E)$
   for real bundles. **Chern character** $\mathrm{ch}(E)$. **Euler
   class** via the Pfaffian. **Chern-Simons forms** as transgression
   primitives. **The most important chapter for connecting to gauge
   theory** — Sternberg's pedagogical style is to compute every class
   in coordinates first, then state the invariant-polynomial /
   transgression theorem.
5. **Chapter cluster E — Yang-Mills theory (Chs. 16–18).** **Yang-
   Mills functional** $S_{\mathrm{YM}}[A] = \int_M |F_A|^2\,
   d\mathrm{vol}$ for a connection $A$ on a principal bundle
   $P \to M^4$ with structure group $G$ compact semisimple.
   **Euler-Lagrange equations** $d_A {*}F_A = 0$ obtained by
   variation; together with the **Bianchi identity** $d_A F_A = 0$
   these are the **Yang-Mills equations**. **Self-dual and
   anti-self-dual connections** on a 4-manifold; instantons as
   absolute minima of the Yang-Mills functional in a fixed
   topological sector parameterised by $c_2(P)$. **Gauge group**
   $\mathcal{G} = \mathrm{Aut}(P)$ and the moduli space $\mathcal{A}/
   \mathcal{G}$. Special focus on **electromagnetism as $U(1)$ Yang-
   Mills**: Maxwell's equations $dF = 0$, $d{*}F = J$ as the Bianchi
   identity plus the Euler-Lagrange equation; the gauge potential
   $A$ as a $\mathfrak{u}(1) = i\mathbb{R}$-valued connection 1-form.
   **The book's apex section** on the geometric content of physics.
6. **Chapter cluster F — General relativity via the Einstein-Hilbert
   action (Chs. 19–21).** **Einstein-Hilbert action** $S_{\mathrm{EH}}
   = \int_M R\, d\mathrm{vol}_g$ on Lorentzian metrics. **Variational
   derivation** of the **Einstein field equations** $R_{\mu\nu} -
   \tfrac{1}{2} R g_{\mu\nu} = 8\pi G T_{\mu\nu}$. Sternberg gives
   the **Palatini variation** (vary metric and connection
   independently, recover Levi-Civita as a constraint) as the cleanest
   route — distinctive vs the standard metric-only variation in most
   GR textbooks. **Stress-energy tensor** $T_{\mu\nu}$ as the
   functional derivative of the matter action with respect to the
   metric. Brief tour of solutions: **Schwarzschild**, **FLRW
   cosmology**, **gravitational waves** as linearised perturbations.
   **Cartan formulation of GR** via the orthonormal coframe
   $\theta^a$ and the spin connection $\omega^a_b$: Einstein's
   equations become a set of conditions on the curvature 2-form
   $\Omega^a_b$. This **Cartan / Palatini packaging** is Sternberg's
   signature reformulation; it is the bridge to the gauge-theoretic
   view of gravity and to **Ashtekar variables / loop quantum
   gravity** (mentioned in passing as a pointer).
7. **Chapter cluster G — Geometric content of quantum field theory
   (Chs. 22–24).** Brief late-book chapters covering: **Faddeev-Popov
   ghosts** as the Maurer-Cartan form on the gauge group viewed
   geometrically (gauge-fixing as choice of slice in $\mathcal{A}/
   \mathcal{G}$); **BRST cohomology** as the cohomology of a
   nilpotent supercharge $Q$ on the algebra of functionals; **anomalies**
   via the **descent equations** $\delta_{\mathrm{BRST}} \omega_{2n+1}
   = d \omega^1_{2n}$ that connect the Chern-Simons form to the
   anomaly cocycle. **Atiyah-Singer index theorem** stated as the
   topological source of chiral anomalies (proof deferred to
   references — Atiyah-Bott-Patodi, Gilkey, etc.). **Pointer
   chapters**, not full developments; the book is closer to a
   geometrical motivation for QFT than a QFT textbook.
8. **Editorial signature.** Three threads make *Curvature* distinctive
   against KN-I, Bott-Tu, and Nakahara:
   - **Uniform Cartan / moving-frame style throughout.** Where Bott-Tu
     uses sheaf cohomology + spectral sequences and KN-I uses purely
     principal-bundle abstraction, Sternberg writes every curvature
     formula in **both** the moving-frame ($\omega^i_j$, $\Omega^i_j$)
     and the matrix-valued ($\omega$, $\Omega$) forms, with cross-
     references between the two — preserving the continuity with LDG
     while adopting the modern bundle apparatus.
   - **Variational principle as the unifying thread.** Yang-Mills and
     Einstein-Hilbert presented as **two instances of the same
     mathematical structure**: vary an action functional on a space of
     geometric objects (connections in YM, metrics or coframes in GR),
     get a curvature-equation system, identify the Bianchi-type
     integrability constraint. This **variational-unification** is
     the book's pedagogical spine.
   - **Physics-aware notation conventions.** $i/2\pi$ factors in Chern
     classes follow the physics convention (Chern classes have
     integer-valued integrals, $c_1 = \tfrac{i}{2\pi}\mathrm{tr}\,\Omega$).
     Lorentzian signature conventions stated explicitly. The book is
     **physics-friendly** in a way that LDG, KN-I, and Bott-Tu are
     not.

*Curvature* is **not** a first textbook on differential geometry —
Chapters 1–5 are review, not development. The canonical "before
*Curvature*" sequence is LDG + KN-I + Bott-Tu. The canonical "after
*Curvature*" sequence is Lawson-Michelsohn *Spin Geometry* (FT 3.35,
for the spinor/Dirac side), Donaldson-Kronheimer *Geometry of Four-
Manifolds* (FT-adjacent), or Nakahara *Geometry, Topology and Physics*
(FT-adjacent, broader physics survey at lower precision). It is the
**connective text** between the mathematician's differential geometry
(LDG / KN-I / Bott-Tu) and the physicist's gauge-theory + GR.

---

## §2 Babel Bible coverage map (Sternberg-Curvature ↔ Codex)

Cross-referenced against the current corpus, with particular attention
to chapter overlap with KN-I (FT 3.18), LDG (FT 1.10), Bott-Tu (FT 1.17),
Lawson-Michelsohn (FT 3.35), Cannas-da-Silva, and the GR chapter
`13-gr-cosmology/`. ✓ = covered at *Curvature*-equivalent depth (textbook
depth, not necessarily proof-depth on every theorem); △ = topic
present but Codex unit shallower or differently anchored; ✗ = not
covered.

### Cluster A — Manifolds, Lie groups, forms (Chs. 1–5, review)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Smooth manifolds, charts, smooth maps | `03.02.01-smooth-manifold.md`; `03.02.01-topological-manifold.md`; `48.02.02-smooth-structure-atlases.md` | ✓ | Already covered by KN-I / LDG audit ancestry. |
| Vector fields, Lie bracket, flows | △ | △ | `03.04.01-lie-algebra.md` covers the algebraic side; flows / Lie derivative shared gap with KN-I and LDG audits. |
| Frobenius theorem | `48.02.04-frobenius-theorem.md` | ✓ | Shipped. |
| Lie groups, Lie algebras, exp map | `03.03.01-lie-group.md`; `03.04.01-lie-algebra.md` | ✓ | Shipped. Exponential-map dedicated unit shared with KN-I / LDG. |
| Cartan's closed-subgroup theorem | — | △ | Shared with LDG punch-list item 6 (priority 1, LDG-only). |
| Lie's third theorem | `48.03.06-lie-third-theorem.md` | ✓ | Shipped via LDG audit Wave 4 production. |
| Differential forms, exterior derivative | `03.04.02-differential-forms.md`; `03.04.04-exterior-derivative.md` | ✓ | Shipped. |
| Pullback $f^*\alpha$, naturality | △ | △ | Covered in passing in `03.04.04`; adequate at *Curvature* depth. |
| Stokes' theorem | `03.04.05-stokes-theorem.md` | ✓ | Shipped. |
| de Rham cohomology | `03.04.06-de-rham-cohomology.md`; `03.04.07-mayer-vietoris.md`; `03.04.11-cech-de-rham.md` | ✓ | Shipped at full Bott-Tu depth. |

**Cluster A status:** essentially complete; *all* gaps coincide with
KN-I / LDG / Bott-Tu shared punch-list items already prioritised in
prior audits. **Zero net-new Sternberg-Curvature production work in
Cluster A.**

### Cluster B — Connections on principal and vector bundles (Chs. 6–9)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Principal bundle $P \to M$ with structure group $G$ | `03.05.01-principal-bundle.md` | ✓ | Shipped. |
| Vector bundle, sections, transition functions | `03.05.02-vector-bundle.md`; `03.05.08-complex-vector-bundle.md` | ✓ | Shipped. |
| Connection 1-form $\omega \in \Omega^1(P; \mathfrak{g})$ on a principal bundle | `03.05.07-principal-bundle-connection.md` | ✓ | Shipped. |
| Horizontal subspace, horizontal lift, parallel transport | `48.05.11-horizontal-lift-parallel-transport.md` | ✓ | Shipped. |
| Vector-bundle covariant derivative $\nabla$ | `03.05.04-vector-bundle-connection.md` | ✓ | Shipped. |
| Associated bundle $P \times_G F$ and its induced connection | `48.05.13-associated-bundle-induced-connection.md` | ✓ | Shipped. |
| Curvature 2-form $\Omega = d\omega + \tfrac{1}{2}[\omega, \omega]$ | `03.05.09-curvature.md` | ✓ | Shipped, principal-bundle form. |
| Moving-frame / coframe presentation of $\omega^i_j$ and $\Omega^i_j$ | △ | △ | LDG audit priority-1 item 8 (`48.05.14-torsion-cartan-structural-equations.md`) is shipped and covers this. |
| Torsion form $\Theta = d\theta + \omega \wedge \theta$; soldering form | `48.05.14-torsion-cartan-structural-equations.md`; `48.05.15-linear-connection-frame-bundle-soldering-form.md` | ✓ | Shipped via LDG audit production. |
| **Bianchi identity** $d_\omega \Omega = 0$ | △ | △ | **Already covered by `03.05.09-curvature.md`** in the principal-bundle Master tier; the explicit Bianchi-identity statement is named there but **not isolated as its own unit**. The *Curvature*-distinctive presentation is the **two-form Bianchi identity** + the **algebraic Bianchi identity** $R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0$ as a single conceptual whole; gap noted. |
| Holonomy and Ambrose-Singer theorem | `48.05.16-holonomy-group.md`; `48.05.17-ambrose-singer-holonomy.md` | ✓ | Shipped. |
| Reduction of structure group; $G$-structures | `48.05.12-reduction-structure-group.md` | ✓ | Shipped via LDG audit. |

**Cluster B status:** **already covered by prior KN-I / LDG audit
production.** The only marginal gap is a dedicated Bianchi-identity
unit; we evaluate whether this is worth a standalone unit in §3 below.

### Cluster C — Riemannian and pseudo-Riemannian geometry (Chs. 10–12)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Riemannian metric, Levi-Civita connection | `48.02.05-sectional-ricci-scalar-curvature.md` (mentions); KN-I audit priority-1 item shipped | △ | The dedicated Levi-Civita unit is covered by the KN-I / LDG / Milnor MMT shared punch-list (KN-I item 12). |
| First and second Cartan structural equations | `48.05.14-torsion-cartan-structural-equations.md` | ✓ | Shipped. |
| Riemann curvature tensor in coordinates | `13.03.01-riemann-curvature-tensor.md`; `03.05.09-curvature.md` | ✓ | Shipped both in GR chapter and in modern-geometry chapter. |
| Sectional, Ricci, scalar curvature | `48.02.05-sectional-ricci-scalar-curvature.md` | ✓ | Shipped via KN-I audit. |
| **Weyl tensor** (trace-free part of Riemann) | — | ✗ | **Gap.** Distinctive *Curvature* / GR content; appears nowhere in Codex. Conformal-flatness diagnostic. |
| Geodesics, exponential map $\exp_p$, normal coordinates | `13.02.02-geodesics-parallel-transport.md` (light); KN-I shared punch-list | △ | Light coverage in GR chapter; the dedicated unit is on the KN-I shared punch-list. |
| Hopf-Rinow theorem (positive-definite + Lorentzian) | — | ✗ | **Gap.** On the KN-I shared punch-list (positive-definite); the Lorentzian variant (Penrose, Geroch) is **uncovered** anywhere in Codex. |
| **Killing fields**, infinitesimal isometries | `48.02.07-killing-fields.md` | ✓ | Shipped via KN-I audit. |
| Killing-Hopf theorem (space forms classification) | `48.02.06-constant-curvature-killing-hopf.md` | ✓ | Shipped via KN-I audit. |
| Conformal transformations, Weyl tensor, conformally flat metrics | — | ✗ | **Gap.** Distinctive *Curvature* content tied to the Weyl-tensor gap. |
| Lorentzian / pseudo-Riemannian signature subtleties | `13.09.01-globally-hyperbolic-lorentzian-manifolds.md` | △ | The globally-hyperbolic / causal-structure layer is in `13.09.*`; the **introductory pseudo-Riemannian-geometry-with-Lorentzian-signature** gap (signature $(-,+,+,+)$, timelike/spacelike/null vectors, causal cones, indefinite Hopf-Rinow) is not isolated. |

**Cluster C status:** **mostly covered** for the positive-definite
material via KN-I audit production; **two genuine gaps** distinctive to
*Curvature*: the **Weyl tensor / conformally-flat-metric block** and
the **Lorentzian Hopf-Rinow / pseudo-Riemannian foundations** block.

### Cluster D — Chern-Weil and characteristic classes (Chs. 13–15)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Invariant polynomials on $\mathfrak{g}$ | `03.06.05-invariant-polynomial.md` | ✓ | Shipped. |
| **Chern-Weil homomorphism** | `03.06.06-chern-weil-homomorphism.md` | ✓ | Shipped. |
| Chern classes $c_k(E)$ of complex vector bundle | `03.06.04-pontryagin-chern-classes.md` | ✓ | Shipped. |
| Pontryagin classes $p_k(E)$ of real bundle | `03.06.04-pontryagin-chern-classes.md` | ✓ | Shipped. |
| Stiefel-Whitney classes (mod 2) | `03.06.03-stiefel-whitney.md` | ✓ | Shipped. |
| Chern character $\mathrm{ch}(E)$ | `03.06.18-chern-character-ring-homomorphism.md` | ✓ | Shipped. |
| Euler class via the Pfaffian | △ | △ | Pontryagin/Chern unit mentions Euler class via Pfaffian; **not isolated**. Bott-Tu and Milnor-Stasheff audits should refine. |
| **Chern-Simons forms / transgression** | `03.06.07-chern-simons-and-transgression.md` | ✓ | Shipped. |
| **Hirzebruch L-genus and signature theorem** | `03.06.11-hirzebruch-signature-theorem.md`; `03.06.15-multiplicative-sequences-l-ahat-todd-genera.md` | ✓ | Shipped. |
| $\hat A$-genus and the Todd genus | `03.06.15-multiplicative-sequences-l-ahat-todd-genera.md` | ✓ | Shipped. |

**Cluster D status:** **already covered** by the existing `03.06-*`
chapter (which is in fact one of the most complete chapters in the
corpus). Only marginal Euler-class-via-Pfaffian deepening is
plausibly a punch-list item; treat as out-of-scope for this audit
(it belongs to the Bott-Tu or Milnor-Stasheff audits).

### Cluster E — Yang-Mills theory (Chs. 16–18)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Yang-Mills functional $S_{\mathrm{YM}}[A] = \int |F_A|^2$ | `03.07.05-yang-mills-action.md` | ✓ | Shipped. |
| Yang-Mills equations $d_A {*} F_A = 0$ from variational principle | `03.07.05-yang-mills-action.md` | ✓ | Shipped (Master tier covers the derivation). |
| Bianchi identity $d_A F_A = 0$ | △ | △ | Covered as a paragraph in `03.05.09-curvature.md` and `03.07.05-yang-mills-action.md`; the **algebraic + differential Bianchi-identity duality** as a standalone treatment is not isolated. |
| Anti-self-dual (ASD) connections | `03.07.06-anti-self-dual-asd-equation-on-a-4-manifold.md` | ✓ | Shipped. |
| BPST instanton and the Bogomolny bound | `03.07.07-bpst-instanton-and-the-bogomolny-bound.md` | ✓ | Shipped. |
| Conformal compactification and finite-action instantons | `03.07.08-conformal-compactification-and-finite-action-instantons.md` | ✓ | Shipped. |
| Moduli space $\mathcal{M}_k(S^4)$ of ASD connections | `03.07.09-moduli-space-of-asd-connections-mathcal-m-k-s-4.md` | ✓ | Shipped. |
| ADHM construction | `03.07.10-adhm-construction-atiyah-drinfeld-hitchin-manin.md` | ✓ | Shipped. |
| **Electromagnetism as $U(1)$ Yang-Mills**: $F = dA$, $dF = 0$, $d{*}F = J$ | `10.04.01-maxwell-in-differential-forms.md`; `10.06.01-covariant-electrodynamics-faraday-tensor.md` | ✓ | Shipped in the EM chapter; the **gauge-theoretic packaging** (EM as a connection on a $U(1)$-principal bundle) is treated in `03.05.07-principal-bundle-connection.md` Master tier and pointed to from `10.04.01`. **Distinctive *Curvature* angle:** Sternberg writes the explicit dictionary EM $\leftrightarrow U(1)$-Yang-Mills $\leftrightarrow$ connection-on-$P$ in a **single self-contained passage**. **Small gap:** no dedicated unit makes this dictionary the centerpiece. |
| Gauge group $\mathcal{G} = \mathrm{Aut}(P)$ and quotient $\mathcal{A}/\mathcal{G}$ | `03.07.18-configuration-space-and-slice-theorem-on-mathcal-b-star-y.md` | ✓ | Shipped. |
| Topological sectors labelled by $c_2(P)$ | △ | △ | Implicit in `03.07.09-*`; not its own unit. Adequate at *Curvature* depth. |

**Cluster E status:** **strongly covered** by the existing `03.07-*`
gauge-theory chapter (which was produced under the Lawson-Michelsohn /
Donaldson-Floer audit threads). The two marginal gaps are the
**EM-as-U(1)-Yang-Mills dictionary unit** (Sternberg's distinctive
single-chapter synthesis) and the **Bianchi-identity-as-a-named-result**
unit. Both are plausibly genuine punch-list items.

### Cluster F — General relativity via the Einstein-Hilbert action (Chs. 19–21)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Equivalence principle | `13.01.01-equivalence-principle.md` | ✓ | Shipped. |
| Tensor / manifold formalism for GR | `13.02.01-tensors-smooth-manifolds.md` | ✓ | Shipped. |
| Geodesics, parallel transport in GR | `13.02.02-geodesics-parallel-transport.md` | ✓ | Shipped. |
| Riemann curvature tensor (GR-flavoured) | `13.03.01-riemann-curvature-tensor.md` | ✓ | Shipped. |
| Einstein field equations | `13.04.01-einstein-field-equations.md` | ✓ | Shipped. |
| **Einstein-Hilbert action; variational derivation** | △ | △ | The `13.04.01-einstein-field-equations.md` Master tier states the action; **the explicit variational derivation as Euler-Lagrange of $S_{\mathrm{EH}}$ is not detailed**. Variational calculus is in `03.04.08-variational-calculus.md` (general theory) and `05.00.01-lagrangian-on-tm.md` (mechanics); a **GR-specific variational-principle unit** is missing. |
| **Palatini variation** (vary metric and connection independently) | — | ✗ | **Gap.** Distinctive Sternberg-Curvature derivation; the **first-order / Palatini formalism** is also the upstream of the Ashtekar / loop-quantum-gravity programme. Appears nowhere in Codex. |
| Stress-energy tensor $T_{\mu\nu}$ as functional derivative | △ | △ | Covered in `13.04.01-einstein-field-equations.md` and in `09.03.01-noethers-theorem.md`; a dedicated stress-energy-tensor unit is plausibly net-new. |
| Schwarzschild solution | `13.05.01-schwarzschild-solution.md`; `13.05.02-orbits-schwarzschild-geometry.md` | ✓ | Shipped. |
| FLRW cosmology | `13.08.01-flrw-cosmology-friedmann-equations.md` | ✓ | Shipped. |
| Linearised GR / gravitational waves | `13.07.01-linearized-gr-gravitational-waves.md` | ✓ | Shipped. |
| **Cartan / tetrad / spin-connection formulation of GR** | — | ✗ | **Gap.** Distinctive *Curvature* presentation: rewrite Einstein's equations in terms of the orthonormal coframe $\theta^a$ and the spin connection $\omega^a_b$. Bridge to **spinors in curved spacetime** (which sits in `03.09-spin-geometry/`) and to **Ashtekar variables**. **Single largest gap distinctive to this audit.** |

**Cluster F status:** **moderately covered** at the standard GR-textbook
level (`13-gr-cosmology/` shipped), but **three genuine gaps** distinctive
to *Curvature*: the **Einstein-Hilbert variational-derivation unit**;
the **Palatini / first-order variational formulation** of GR; and the
**Cartan tetrad / spin-connection** packaging. Together these three
gaps are the **Sternberg-Curvature distinctive contribution to GR**
that LDG / KN-I / Bott-Tu / the existing `13-*` chapter do not touch.

### Cluster G — Geometric QFT (Chs. 22–24, pointer chapters)

| *Curvature* topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Faddeev-Popov ghosts as Maurer-Cartan forms on gauge group | — | ✗ | **Gap.** Geometric exposition of gauge-fixing; bridge between physics QFT and gauge-theory geometry. |
| BRST cohomology, nilpotent supercharge $Q$ | — | ✗ | **Gap.** Distinctive. |
| Anomalies via descent equations $\delta_{\mathrm{BRST}} \omega_{2n+1} = d\omega^1_{2n}$ | △ | △ | `03.06.07-chern-simons-and-transgression.md` covers the Chern-Simons / transgression side; the **anomaly-cocycle-via-descent** equation is **not isolated**. |
| Atiyah-Singer index theorem as source of chiral anomalies | `03.09.10-atiyah-singer-index-theorem.md` | ✓ | Shipped (statement; full proof in spin-geometry chapter Master tier). The **anomaly-cancellation application** is the *Curvature*-distinctive angle and is **not isolated**. |
| Aharonov-Bohm effect (gauge-theoretic significance) | — | ✗ | **Gap.** Cited but not anchored; the *Curvature* explanation in terms of holonomy of a $U(1)$-connection around a topologically nontrivial loop is the canonical geometric account. |

**Cluster G status:** **mostly absent**; Sternberg's pointer-chapter
treatments are themselves not full units of physical depth, so the
recommendation is **pointer-density Codex units** that capture the
geometric framing without claiming to teach QFT from scratch.

### Aggregate coverage estimate

- **Theorem layer:** ~70% topic-level coverage. The Cluster A
  (manifolds/forms) and Cluster D (Chern-Weil) chapters are
  essentially 100% covered; Cluster B (bundles) ~95%; Cluster C
  (Riemannian / pseudo-Riemannian) ~70% (Weyl tensor + Lorentzian
  Hopf-Rinow gaps); Cluster E (Yang-Mills) ~90%; Cluster F (GR via
  Einstein-Hilbert) ~60% (Einstein-Hilbert variation, Palatini,
  Cartan tetrads all missing); Cluster G (geometric QFT) ~20%.
- **Worked-example layer:** ~50%. Schwarzschild, FLRW, BPST instanton,
  ADHM all covered; Einstein-Hilbert variational derivation, Palatini
  in $D = 4$, tetrad-formalism Schwarzschild rewrite, Aharonov-Bohm
  computation, BRST cohomology of $\mathrm{SU}(N)$ Yang-Mills,
  EM-as-$U(1)$-bundle dictionary not isolated.
- **Notation layer:** ~80% aligned. Sternberg's physics-convention
  $i/2\pi$ factors in Chern classes match the `03.06-*` chapter; his
  signature $(-,+,+,+)$ Lorentzian convention is the same as the
  `13-*` chapter; the **moving-frame ↔ principal-bundle dual
  notation** is by now installed in the bundle chapters via LDG.
  Outstanding notation work: dedicated tetrad / spin-connection
  $\omega^a_b$ notation in a Cartan-GR unit; BRST $\delta$ and $Q$
  notation if Cluster G is built out.
- **Sequencing layer:** ~75%. The chain manifolds → bundles →
  Chern-Weil → Yang-Mills is fully represented; the chain
  manifolds → Lorentzian → Einstein → variational → Cartan-tetrad is
  broken at the Einstein-Hilbert-variation and Cartan-tetrad links.
- **Intuition layer:** ~60%. The "physics through differential
  geometry" framing of `13-*` and `03.07-*` is consonant with
  Sternberg's voice; what's missing is the **explicit pedagogical
  bridge from differential geometry to Yang-Mills / GR as
  variational systems** — the book's central thread.
- **Application layer:** ~65%. Schwarzschild / FLRW / BPST /
  ADHM applications covered; the EM-as-$U(1)$-Yang-Mills application,
  the Cartan-tetrad-formulation-of-GR application, and the
  BRST/anomaly applications are not isolated.

**Composite estimate:** **~65% topic-coverage at present**. After
priority-1 punch-list completion the estimate rises to ~85%; after
priority-1+2 to ~93%. The book is **substantially shadow-covered** by
the union of KN-I + LDG + Bott-Tu + Lawson-Michelsohn audits and the
existing `13-gr-cosmology/` chapter; the **net Sternberg-Curvature
distinctive contribution** to the punch-list is ~6–10 units, mostly
concentrated in Cluster F (Einstein-Hilbert variation, Palatini,
Cartan tetrad), the EM-as-$U(1)$-gauge dictionary in Cluster E,
the Weyl-tensor / Lorentzian Hopf-Rinow gap in Cluster C, and the
geometric-QFT pointer chapters in Cluster G.

---

## §3 Gap punch-list (priority-ordered)

**Coordination note.** Cluster A and Cluster D are essentially
fully covered; **no punch-list items** from those clusters.
Cluster B has the single marginal Bianchi-identity item, treated as
deepening of `03.05.09-curvature.md` rather than a separate unit.
Cluster C has the Weyl-tensor and Lorentzian Hopf-Rinow gaps;
Cluster E has the EM-as-$U(1)$-Yang-Mills dictionary; Cluster F has
the three genuinely distinctive Sternberg-Curvature units
(Einstein-Hilbert variation, Palatini, tetrad formalism); Cluster G
adds the BRST / anomaly / Aharonov-Bohm pointer triplet.

Every item below is flagged as either **[NEW]** (write a new unit),
**[DEEPEN]** (extend an existing shipped unit), **[ENRICH]**
(add a §Notation / §Originator paragraph), or **[already covered
by ...]** (no work; recorded to keep §2 tight). Slot ranges target
the appropriate existing chapter so that production agents can land
units without invented sub-chapter numbering.

**Priority 1 — Sternberg-Curvature-distinctive GR + gauge content (book's signature contribution):**

1. **`13.04.02` Einstein-Hilbert action and variational derivation of the Einstein equations.** [NEW] Anchor *Curvature*
   Chs. 19–20 + Wald §E and Carroll Ch. 4 + Misner-Thorne-Wheeler
   §21. Three-tier; ~2200 words. Define $S_{\mathrm{EH}}[g] = \tfrac{1}{16\pi G}
   \int_M R\,\sqrt{-g}\,d^4 x$ on the space of Lorentzian metrics on
   $M^4$. Compute $\delta R$, $\delta \sqrt{-g}$, integrate by parts
   (Gibbons-Hawking-York boundary term parked at the Master tier);
   obtain $G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2} R g_{\mu\nu} = 0$
   in vacuum, $G_{\mu\nu} = 8\pi G T_{\mu\nu}$ with matter. Worked
   example: pure-gravity vacuum equation $R_{\mu\nu} = 0$ as
   Euler-Lagrange. Master tier covers diffeomorphism-invariance,
   Bianchi-identity $\nabla^\mu G_{\mu\nu} = 0$, and the boundary-term
   issue. **Originator-prose mandatory:** Hilbert 1915 *Die Grundlagen
   der Physik* (Nachr. Ges. Wiss. Göttingen) — independent of and
   slightly preceding Einstein 1915 *Die Feldgleichungen der
   Gravitation* — as the originator of the variational derivation.
   Cite Sternberg-Curvature Ch. 20 as the canonical pedagogical
   anchor.

2. **`13.04.03` Palatini first-order variational formulation of general relativity.** [NEW] Anchor *Curvature* Ch. 20 §3 +
   Wald App. E + Holst 1996 (the modern Holst-action form is
   beyond *Curvature* scope and parked for `13.04.04` if ever
   produced). Three-tier; ~2000 words. The Palatini action
   $S_{\mathrm{P}}[g, \Gamma] = \int g^{\mu\nu} R_{\mu\nu}(\Gamma)
   \sqrt{-g}\,d^4 x$ treats metric and connection as independent.
   Varying $\Gamma$ recovers the Levi-Civita constraint
   ($\nabla g = 0$, $T = 0$); varying $g$ recovers the Einstein
   equations. Worked example: Palatini variation of the
   Einstein-Hilbert + cosmological-constant action. Master tier:
   bridge to Einstein-Cartan theory (allow torsion, couple to
   fermionic matter); pointer to Ashtekar variables and to
   Sternberg-Curvature's gauge-theoretic reading of gravity.
   **Originator-prose mandatory:** Palatini 1919 *Deduzione
   invariantiva delle equazioni gravitazionali dal principio di
   Hamilton* (Rend. Circ. Mat. Palermo 43).

3. **`13.02.03` Cartan tetrad and spin-connection formulation of general relativity.** [NEW] Anchor *Curvature* Ch. 21 + MTW §14 + Carroll
   §3.4 + Wald §3.4. Three-tier; ~2200 words. Choose an orthonormal
   coframe $\theta^a$ ($a = 0, 1, 2, 3$) on a Lorentzian 4-manifold;
   the metric becomes $g = \eta_{ab} \theta^a \otimes \theta^b$ with
   $\eta = \mathrm{diag}(-1,1,1,1)$. The **spin connection**
   $\omega^a{}_b$ is determined by the torsion-free condition
   $d\theta^a + \omega^a{}_b \wedge \theta^b = 0$ (Cartan's first
   structural equation). The **curvature 2-form** $\Omega^a{}_b =
   d\omega^a{}_b + \omega^a{}_c \wedge \omega^c{}_b$ is the Riemann
   tensor in 2-form form. Einstein's vacuum equations $R_{\mu\nu} = 0$
   become $\epsilon_{abcd}\, \theta^a \wedge \Omega^{bc} = 0$ (sum
   over indices). Worked example: tetrad formulation of the
   Schwarzschild metric; spin connection 1-forms read off the
   structure equations. **Bridges to spin geometry** (`03.09-*`,
   spinor fields in curved spacetime require the tetrad / spin-
   connection formulation), to **loop quantum gravity / Ashtekar
   variables**, and to the **Cartan-Weyl programme** mentioned in
   `48.05.14-torsion-cartan-structural-equations.md`. **Originator-prose:**
   Cartan 1922 *Sur une généralisation de la notion de courbure
   de Riemann et les espaces à torsion* (C. R. Acad. Sci. Paris
   174) and Cartan 1923–1925 *Annales sci. ÉNS* affine-connection
   trilogy (shared anchor with the LDG audit).

4. **`13.04.04` Stress-energy tensor as functional derivative of the matter action.** [NEW] Anchor *Curvature* Ch. 20 + MTW §21
   + Weinberg *Gravitation and Cosmology* §12. Three-tier;
   ~1700 words. Given a matter Lagrangian $\mathcal{L}_{\mathrm{m}}
   (\phi, \nabla\phi, g)$, the **stress-energy tensor** is defined
   as $T_{\mu\nu} = -\tfrac{2}{\sqrt{-g}} \frac{\delta (\sqrt{-g}
   \mathcal{L}_{\mathrm{m}})}{\delta g^{\mu\nu}}$. Equivalence to
   the Noether-current definition modulo improvements
   (Belinfante-Rosenfeld symmetrisation). Worked examples: perfect
   fluid stress-energy $T_{\mu\nu} = (\rho + p) u_\mu u_\nu + p
   g_{\mu\nu}$; scalar field $T_{\mu\nu} = \partial_\mu \phi
   \partial_\nu \phi - \tfrac{1}{2} g_{\mu\nu} (\partial\phi)^2$;
   electromagnetic $T_{\mu\nu} = F_{\mu\alpha} F_\nu{}^\alpha -
   \tfrac{1}{4} g_{\mu\nu} F^2$. Master tier: conservation
   $\nabla^\mu T_{\mu\nu} = 0$ as consequence of diffeomorphism
   invariance; relationship to the canonical / Noether
   stress-energy tensor.

5. **`03.07.29` Electromagnetism as a $U(1)$ Yang-Mills theory — the geometric dictionary.** [NEW] Anchor *Curvature* Ch. 16
   + Bleecker *Gauge Theory and Variational Principles* §3 +
   Nakahara §10. Three-tier; ~1800 words. **Dictionary unit**
   collecting in one place: the EM 4-potential $A_\mu$ as a
   $\mathfrak{u}(1) = i\mathbb{R}$-valued connection 1-form on a
   $U(1)$-principal bundle $P \to M^4$; the field strength
   $F = dA$ as the curvature 2-form; the Bianchi identity $dF = 0$
   as the homogeneous Maxwell equations $\nabla \cdot B = 0$,
   $\nabla \times E + \partial_t B = 0$; the Euler-Lagrange equation
   $d{*}F = J$ as the inhomogeneous Maxwell equations $\nabla
   \cdot E = \rho$, $\nabla \times B - \partial_t E = J$; gauge
   transformations $A \mapsto A + d\chi$ as bundle automorphisms;
   topological sector ($c_1$ of the bundle) as Dirac monopole
   charge. Worked example: Dirac magnetic monopole as a $U(1)$
   principal bundle over $S^2$ with first Chern class 1. Master
   tier covers the Aharonov-Bohm phase as holonomy of $A$ around
   a loop encircling a flux tube, pointing to `03.07.30` (item 11
   below). **Bridges** $10.04.01$ (Maxwell-in-differential-forms),
   $10.06.01$ (covariant electrodynamics), and `03.05.07`
   (principal-bundle connection). **The most-cited single
   pedagogical passage in Sternberg-Curvature.**

**Priority 2 — Cluster C pseudo-Riemannian + Cluster B Bianchi gaps:**

6. **`48.02.16` Weyl tensor and conformally flat metrics.** [NEW]
   Anchor *Curvature* Ch. 12 + KN-I §2.4 + Besse *Einstein
   Manifolds* §1.G. Three-tier; ~1800 words. Decomposition of the
   Riemann tensor $R = W + \tfrac{2}{n-2}(\mathrm{Ric}\circ g) -
   \tfrac{R}{(n-1)(n-2)}(g \circ g)$ (Singer-Thorpe decomposition);
   the **Weyl tensor** $W$ is the trace-free, conformally invariant
   part. **Theorem:** for $n \geq 4$, a metric is conformally flat
   iff $W = 0$; for $n = 3$ the Weyl tensor vanishes identically
   and conformal flatness is detected by the **Cotton tensor**
   $C_{ijk} = \nabla_k (\mathrm{Ric}_{ij} - \tfrac{R}{4} g_{ij}) -
   \nabla_j (\mathrm{Ric}_{ik} - \tfrac{R}{4} g_{ik})$ (Cotton-York
   3D conformal-flatness criterion). Worked examples: Schwarzschild
   has nonzero Weyl tensor (vacuum but not conformally flat); FLRW
   with $k = 0$ is conformally flat. Master tier: Weyl tensor in
   the Petrov classification for Lorentzian 4-manifolds.
   **Originator-prose:** Weyl 1918 *Reine Infinitesimalgeometrie*
   (Math. Z. 2) for the conformally invariant curvature decomposition.

7. **`48.02.17` Lorentzian Hopf-Rinow and global hyperbolicity (introductory pseudo-Riemannian geometry).** [NEW] Anchor *Curvature* Ch. 11
   + O'Neill *Semi-Riemannian Geometry* §5 + Hawking-Ellis *The
   Large Scale Structure of Space-time* §6. Three-tier;
   ~1800 words. Lorentzian signature $(-,+,+,+)$ on a smooth
   manifold; timelike / spacelike / null tangent vectors; chronological
   and causal future / past; **causal structure**; Cauchy
   surfaces. **Lorentzian Hopf-Rinow is FALSE in general** (a
   geodesically complete Lorentzian manifold need not be globally
   hyperbolic; example: anti-de Sitter spacetime); **the correct
   replacement** is the equivalence (for strongly causal Lorentzian
   manifolds): globally hyperbolic ⇔ existence of a Cauchy surface
   ⇔ $J^+(p) \cap J^-(q)$ compact for all $p, q$. Worked example:
   Minkowski spacetime is globally hyperbolic; Schwarzschild
   spacetime in standard $(t, r, \theta, \phi)$ coordinates is **not**
   globally hyperbolic (no Cauchy surface) but is across the
   maximally extended Kruskal manifold. Cross-link to
   `13.09.01-globally-hyperbolic-lorentzian-manifolds.md`. **Bridges
   the positive-definite Hopf-Rinow** (on the KN-I shared
   punch-list) **to the GR causal-structure layer**. **Originator-prose:**
   Penrose 1965 *Gravitational collapse and space-time singularities*
   (Phys. Rev. Lett. 14); Geroch 1970 *Domain of dependence*
   (J. Math. Phys. 11).

8. **`03.05.09` Deepen curvature unit with explicit algebraic + differential Bianchi identity treatment.** [DEEPEN] Anchor
   *Curvature* Ch. 8 + KN-I §III + LDG Ch. V. Master-tier addition,
   ~600 words insertion. Currently `03.05.09-curvature.md` mentions
   the Bianchi identity in passing; this deepening promotes it to
   a named, fully-proved result with both forms displayed and
   their equivalence shown. Add the explicit notation crosswalk:
   algebraic Bianchi $\Omega(X,Y)Z + \Omega(Y,Z)X + \Omega(Z,X)Y = 0$
   (linearity over $C^\infty(M)$, follows from $d^2 = 0$ on the
   horizontal-lift form); differential Bianchi $d_\omega \Omega = 0$
   (the matrix-form differential identity, also from $d^2 = 0$).
   Cross-link to `03.07.05-yang-mills-action.md` (Bianchi identity
   in Yang-Mills) and `13.04.01-einstein-field-equations.md`
   (contracted Bianchi $\nabla^\mu G_{\mu\nu} = 0$ as consistency).
   **No new unit ID** — in-place deepening.

**Priority 3 — Cluster G geometric-QFT pointer triplet (Sternberg's late-book chapters):**

9. **`03.07.30` Aharonov-Bohm effect and holonomy of $U(1)$ connections.** [NEW] Anchor *Curvature* Ch. 18 §3 + Aharonov-Bohm
   1959 originator + Nakahara §10.5. Three-tier; ~1500 words. The
   Aharonov-Bohm phase $\exp(\tfrac{ie}{\hbar} \oint A)$ acquired by
   a charged-particle wavefunction on a closed loop around a confined
   magnetic flux tube. Geometric interpretation: the loop encircles
   a region of nontrivial topology where the $U(1)$ principal bundle
   has a nontrivial connection even though the curvature vanishes
   off the flux region. The phase is the **holonomy** of the
   connection. Worked example: explicit computation for a thin
   solenoid in $\mathbb{R}^3 \setminus \{$axis$\}$. **Bridge** between
   `03.07.29` (EM-as-$U(1)$-YM) and `48.05.16` (holonomy). **Bridges
   to quantum mechanics** chapter `12-quantum` (currently empty;
   pointer-only). **Originator-prose:** Aharonov-Bohm 1959
   *Significance of electromagnetic potentials in the quantum theory*
   (Phys. Rev. 115).

10. **`03.07.31` BRST cohomology and Faddeev-Popov-ghost quantisation of gauge theories.** [NEW] Anchor *Curvature*
    Chs. 22–23 + Henneaux-Teitelboim *Quantization of Gauge Systems*
    §8 + Polchinski *String Theory* §4 (for the canonical BRST
    treatment). Master-tier dominant; ~2000 words. The
    **Faddeev-Popov procedure**: gauge-fix the Yang-Mills path
    integral $\int [DA]\, e^{i S_{\mathrm{YM}}}$ via a slice in
    $\mathcal{A}/\mathcal{G}$; the Jacobian determinant of the
    gauge-fixing is rewritten as a Gaussian integral over
    anticommuting ghost fields $c, \bar c$ in the adjoint
    representation. The **BRST operator** $\delta_{\mathrm{B}}$ is
    a nilpotent ($\delta_{\mathrm{B}}^2 = 0$) supersymmetry on the
    extended field space (gauge fields + ghosts + antighosts +
    Nakanishi-Lautrup multiplier) that encodes the residual gauge
    invariance. **BRST cohomology** $H^*(\delta_{\mathrm{B}})$
    classifies physical observables. Geometric content: $\delta_{
    \mathrm{B}}$ is the Maurer-Cartan form on $\mathcal{G}$ in
    Faddeev-Popov-extended form. Worked example: BRST quantisation
    of pure $SU(N)$ Yang-Mills in $\mathbb{R}^4$ (Lorenz gauge).
    **Originator-prose:** Becchi-Rouet-Stora 1976 *Renormalization
    of gauge theories* (Ann. Phys. 98); Tyutin 1975 (Lebedev
    preprint, independent originator).

11. **`03.07.32` Anomalies via descent equations and the Atiyah-Singer index theorem.** [NEW] Anchor *Curvature* Ch. 24
    + Bertlmann *Anomalies in Quantum Field Theory* §4–§6 +
    Atiyah-Singer index theorem (`03.09.10-*`, shipped). Master-tier
    dominant; ~1800 words. **Anomaly** = obstruction to gauge
    invariance of the quantum effective action under the gauge
    group. **Descent equations**: starting from the Chern character
    $\mathrm{ch}_{n+1}(F) = d \omega_{2n+1}$ (Chern-Simons primitive),
    one obtains via the BRST $\delta_{\mathrm{B}}$ a chain
    $\omega_{2n+1} \to \omega^1_{2n} \to \omega^2_{2n-1} \to \cdots$,
    where $\omega^1_{2n}$ is the **anomaly cocycle** (the 1-cocycle
    on the BRST cohomology = gauge anomaly). Worked example: the
    **chiral anomaly** in 4D for $\mathrm{SU}(N)$ gauge theory with
    chiral fermions: anomaly proportional to $\mathrm{tr}(T^a \{T^b,
    T^c\})$. **Identification with Atiyah-Singer:** the chiral
    anomaly equals the index of the Dirac operator coupled to the
    gauge field, integrated over spacetime; gives the **'t Hooft
    consistency condition** for chiral fermion content. **Bridges**
    `03.06.07-chern-simons-and-transgression.md`,
    `03.07.31` (BRST), and `03.09.10-atiyah-singer-index-theorem.md`.
    **Originator-prose:** Adler 1969 + Bell-Jackiw 1969 (independent
    originators of the chiral anomaly); Stora 1983 + Zumino 1984
    descent-equation formalism.

**Priority 4 — depth-completion and weaving (optional):**

12. **`13.04.01` Deepen Einstein-field-equations unit with cross-links to `13.04.02`, `13.04.03`, and `13.02.03`.** [DEEPEN] Master-tier
    weaving addition, ~400 words. Single paragraph each pointing to
    the variational, first-order, and tetrad formulations as
    alternative routes to the same field equations. **No new unit ID.**

13. **`03.07.05` Deepen Yang-Mills-action unit with the explicit EM-as-$U(1)$-Yang-Mills passage.** [DEEPEN] Master-tier addition, ~300 words. Cross-link to `03.07.29`. Single paragraph
    connecting the abstract Yang-Mills functional to the special case
    $G = U(1)$ recovering electromagnetism. **No new unit ID.**

14. **`03.06.06` Enrich Chern-Weil-homomorphism and Pontryagin-Chern-classes units with Sternberg-Curvature originator-prose paragraph.** [ENRICH] Cross-anchor `03.06.04` as well; note Sternberg's
    physics-convention $i/2\pi$ factors and cite *Curvature* Ch. 14
    as a peer pedagogical anchor. ~150 words each. **No new
    unit ID.**

15. **`48.02.18` Petrov classification of Lorentzian 4-curvature.**
    [NEW; optional] Anchor *Curvature* Ch. 12 §4 + Penrose-Rindler
    *Spinors and Space-Time Vol. 1* §8 + Stephani et al. *Exact
    Solutions of Einstein's Field Equations*. Master-only; ~1500 words.
    The **Petrov types I, II, III, D, N, O** classify the algebraic
    structure of the Weyl tensor at a point of a Lorentzian 4-manifold
    by the multiplicity pattern of its **principal null directions**.
    Schwarzschild is Petrov type D; gravitational radiation in the
    far zone is Petrov type N. Cross-link to `48.02.16` (Weyl tensor)
    and `13.07.01` (gravitational waves). **Optional depth-completion;
    not needed for `equivalence-covered` threshold.**

### Already covered — items extracted from the audit to keep the
punch-list focused (do not produce):

- **Smooth manifolds, atlases, smooth maps:** already covered by
  `03.02.01-smooth-manifold.md`, `03.02.01-topological-manifold.md`,
  `48.02.02-smooth-structure-atlases.md`.
- **Lie groups, Lie algebras, exp map, Maurer-Cartan, Lie's third
  theorem:** already covered by `03.03.01`, `03.04.01`, `48.03.06`
  and the KN-I / LDG shared punch-list (priority 0–1 items).
- **Frobenius theorem:** already covered by `48.02.04`.
- **Differential forms, exterior derivative, Stokes, de Rham
  cohomology:** already covered by `03.04.02`–`03.04.07`,
  `03.04.11`.
- **Principal bundles, vector bundles, connections, curvature,
  parallel transport, holonomy, Ambrose-Singer, reduction of
  structure group, Cartan structural equations:** already covered
  by `03.05.01-*`, `03.05.04`, `03.05.07`, `03.05.09`, `48.05.11`,
  `48.05.12`, `48.05.13`, `48.05.14`, `48.05.15`, `48.05.16`,
  `48.05.17`.
- **Chern-Weil homomorphism, Chern classes, Pontryagin classes,
  Stiefel-Whitney classes, Chern character, Chern-Simons forms,
  Hirzebruch signature theorem, $\hat A$-genus, Todd genus,
  multiplicative sequences:** already covered by the entire
  `03.06-characteristic-classes/` chapter (a strength of the
  corpus).
- **Yang-Mills functional, Euler-Lagrange equations, ASD
  connections, BPST instanton, ADHM, instanton moduli, conformal
  compactification:** already covered by `03.07.05`–`03.07.10`.
- **Riemann curvature tensor, sectional / Ricci / scalar curvature,
  Killing fields, Killing-Hopf classification, Bochner technique,
  Gauss-Codazzi-Ricci equations, second fundamental form:** already
  covered by `48.02.05`–`48.02.07`, `48.02.13`–`48.02.15`.
- **Einstein field equations, Schwarzschild solution, FLRW
  cosmology, linearised GR, equivalence principle:** already
  covered by `13.01.01`, `13.02.01-02`, `13.03.01`, `13.04.01`,
  `13.05.01-02`, `13.07.01`, `13.08.01`.
- **Atiyah-Singer index theorem (statement; spin-Dirac case):**
  already covered by `03.09.10-atiyah-singer-index-theorem.md`.
- **Globally hyperbolic Lorentzian manifolds (advanced level):**
  already covered by `13.09.01-globally-hyperbolic-lorentzian-manifolds.md`;
  the *introductory* pseudo-Riemannian-geometry layer is the
  priority-2 item 7 gap.
- **Hodge theory, Hodge-Laplacian, Kähler identities:** already
  covered by `03.04.15-hodge-laplacian-on-a-riemannian-manifold.md`,
  `48.02.11-hermitian-kahler-form.md`, `48.02.12-kahler-identities-hodge-decomposition.md`
  (Sternberg-Curvature touches Kähler only in passing).
- **Maxwell equations in differential-forms language:** already
  covered by `10.04.01-maxwell-in-differential-forms.md`; the
  Sternberg-Curvature-distinctive **EM-as-$U(1)$-Yang-Mills
  dictionary** is the priority-1 item 5 gap that promotes this
  to a gauge-theoretic packaging unit.

---

## §4 Implementation sketch (P3 → P4)

**Minimum equivalence-batch** = priority 1 only (items 1–5): **5 new
units** opening / extending the `13-gr-cosmology/` and
`03-modern-geometry/07-gauge-theory/` chapters. Estimates:

- Items 1, 2, 3 (Einstein-Hilbert variation, Palatini, Cartan tetrad)
  cluster tightly: ~3 hours each, internal cross-references heavy.
  Priority-1-GR sub-batch ~9 hours.
- Item 4 (stress-energy tensor): ~2.5 hours; standalone but cross-
  links to Noether's theorem.
- Item 5 (EM-as-$U(1)$-YM dictionary): ~3 hours; the highest-leverage
  single unit in the audit — connects three Codex chapters
  (`03.05`, `03.07`, `10.04`) under one Sternberg-style synthesis.

**Priority-1 total: ~15 hours of focused production. Fits a 2-day
window with 2–3 parallel agents.**

- **Priority 2** (items 6, 7, 8 = Weyl + Lorentzian Hopf-Rinow +
  Bianchi deepening): ~2 new units × ~3h + 1 deepening × ~1h ≈
  ~7 hours additional. Total cumulative ~22 hours.
- **Priority 3** (items 9, 10, 11 = Aharonov-Bohm + BRST + anomaly
  descent): 3 new units × ~3.5h ≈ ~10.5 hours additional. **The
  BRST and anomaly units are Master-tier dominant and benefit from
  extended agent budgets; production should be sequenced after the
  Yang-Mills + Chern-Simons depth-confidence of `03.07-*` is
  verified.** Total cumulative ~32.5 hours.
- **Priority 4** (items 12, 13, 14, 15): ~3 weaving / enrichment
  edits × ~30 min + 1 optional new unit × ~3h ≈ ~4.5 hours.
  **Optional — not required for equivalence-coverage.**

**Full-coverage total (priority 1+2+3):** ~32 hours of focused
production. Fits a focused 5-day window with 2–3 agents in parallel.

**Composite LDG + Curvature + Group-Theory Sternberg arc.** The
three Sternberg audits (FT 1.10 / 1.14 / 1.15) together close the
Sternberg-pedagogical-tradition gap. Sequencing recommendation:

1. **LDG priority-0+1** (already underway as part of the KN-I /
   LDG shared production block) — closes manifold + Lie-group +
   moving-frame foundations.
2. **LDG priority-2** ($G$-structures + prolongation + Spencer
   cohomology + Guillemin-Sternberg classification) — closes the
   LDG-distinctive chapter VI.
3. **Curvature priority-1 (this plan, items 1–5)** — closes the
   variational-principle + EM-as-gauge + Cartan-tetrad block.
4. **Curvature priority-2 (items 6–8)** — closes the Weyl-tensor /
   Lorentzian foundations / Bianchi-identity-as-named-result gap.
5. **Curvature priority-3 (items 9–11)** — opens the geometric-QFT
   block (Aharonov-Bohm, BRST, anomalies) as pointer-density
   bridge to the still-empty `12-quantum/` chapter.
6. **Group-Theory-and-Physics audit (deferred)** — closes the
   representation-theory-applied-to-QM side.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **David Hilbert**, "Die Grundlagen der Physik," *Nachr. Ges.
  Wiss. Göttingen*, Math.-Phys. Kl. (1915) 395–407 — the
  originator of the variational derivation of the Einstein
  equations from the Einstein-Hilbert action. Cite in `13.04.02`.
- **Albert Einstein**, "Die Feldgleichungen der Gravitation,"
  *Sitzungsberichte Preuss. Akad. Wiss.* (1915) 844–847 — the
  parallel originator (independent of Hilbert, slightly later) of
  the Einstein equations. Cite in `13.04.02` and `13.04.01`.
- **Attilio Palatini**, "Deduzione invariantiva delle equazioni
  gravitazionali dal principio di Hamilton," *Rend. Circ. Mat.
  Palermo* 43 (1919) 203–212 — the originator of the first-order
  / Palatini variational formulation. Cite in `13.04.03`.
- **Élie Cartan**, "Sur une généralisation de la notion de
  courbure de Riemann et les espaces à torsion," *C. R. Acad. Sci.
  Paris* 174 (1922) 593–595, and the affine-connection trilogy
  *Annales sci. ÉNS* 40 / 41 / 42 (1923–1925) — the originator
  of the tetrad / spin-connection formulation. Cite in `13.02.03`
  (shared anchor with the LDG audit).
- **Hermann Weyl**, "Reine Infinitesimalgeometrie," *Math. Z.* 2
  (1918) 384–411 — the originator of the conformally-invariant
  Weyl-tensor decomposition of curvature. Cite in `48.02.16`.
- **Roger Penrose**, "Gravitational collapse and space-time
  singularities," *Phys. Rev. Lett.* 14 (1965) 57–59, and
  **Robert Geroch**, "Domain of dependence," *J. Math. Phys.* 11
  (1970) 437–449 — originators of the modern global-hyperbolicity
  / Cauchy-surface framework. Cite in `48.02.17`.
- **Yakir Aharonov, David Bohm**, "Significance of electromagnetic
  potentials in the quantum theory," *Phys. Rev.* 115 (1959)
  485–491 — the originator of the Aharonov-Bohm effect. Cite in
  `03.07.30`.
- **Carlo Becchi, Alain Rouet, Raymond Stora**, "Renormalization
  of gauge theories," *Ann. Phys.* 98 (1976) 287–321, and
  **Igor Tyutin** (Lebedev preprint 39, 1975, independent
  originator) — originators of BRST cohomology. Cite in
  `03.07.31`.
- **Stephen Adler**, "Axial-vector vertex in spinor electrodynamics,"
  *Phys. Rev.* 177 (1969) 2426–2438, and **John Bell, Roman Jackiw**,
  "A PCAC puzzle: $\pi^0 \to \gamma\gamma$ in the $\sigma$-model,"
  *Nuovo Cim. A* 60 (1969) 47–61 — independent originators of the
  chiral anomaly. **Bruno Zumino**, "Chiral anomalies and
  differential geometry," *Les Houches lectures* 1983 — originator
  of the descent-equation formalism. Cite in `03.07.32`.
- **Shlomo Sternberg**, *Curvature in Mathematics and Physics*,
  Dover 2012 — cite throughout as the in-Codex master anchor for
  the variational-principle + Cartan-tetrad + Einstein-Hilbert
  synthesis, and for the EM-as-$U(1)$-Yang-Mills dictionary
  passage.

**Notation crosswalk.** Sternberg-Curvature uses:

- $\omega \in \Omega^1(P; \mathfrak{g})$ for the principal-bundle
  connection 1-form (matches KN-I and Codex `03.05.07`).
- $\Omega = d\omega + \tfrac{1}{2}[\omega, \omega]$ for the
  curvature 2-form (matches Codex).
- $\omega^i_j$ for moving-frame connection 1-forms on $L(M)$
  (matches LDG and Codex `48.05.14`).
- $\theta^a$ for orthonormal Lorentzian coframe (tetrad);
  $\omega^a{}_b$ for the spin connection on the orthonormal frame
  bundle of a Lorentzian 4-manifold (the **Cartan-tetrad** notation;
  to be installed in the new `13.02.03`).
- $A \in \Omega^1(M; \mathfrak{u}(1))$ for the EM 4-potential
  viewed as a $U(1)$-connection (matches `03.05.07` and `10.04.01`).
- $F = dA$ for the EM field strength (matches `10.04.01`).
- $T_{\mu\nu}$ for the stress-energy tensor (matches `13.04.01`).
- $G_{\mu\nu} = R_{\mu\nu} - \tfrac{1}{2} R g_{\mu\nu}$ for the
  Einstein tensor (matches `13.04.01`).
- $c_k(E) = \det(I + \tfrac{i}{2\pi}\Omega)_k$ for Chern classes
  (physics-convention $i/2\pi$; matches Codex `03.06.04`).
- $\delta_{\mathrm{B}}$ for the BRST operator; $Q$ for the BRST
  charge (to be installed in `03.07.31` and `03.07.32`).
- $\omega_{2n+1}$ for the Chern-Simons primitive of the
  $(n+1)$-th Chern character; $\omega^k_{2n+1-k}$ for the
  $k$-th descent term (to be installed in `03.07.32`; matches
  Zumino 1983 originator notation).

No separate `notation/sternberg-curvature.md` crosswalk file
needed — per-unit §Notation paragraphs suffice (per the
Cannas / Arnold-Mech / Arnold-Khesin precedent). The
**Lorentzian-signature convention $(-,+,+,+)$** matches both
*Curvature* and the existing `13-gr-cosmology/` chapter.

**DAG edges to add.** New prerequisites arrows for priority-1+2:

- `13.04.02` ← {`13.04.01` Einstein field equations,
  `03.04.08-variational-calculus.md`, `13.03.01-riemann-curvature-tensor.md`}
- `13.04.03` ← {`13.04.02`, `03.05.07-principal-bundle-connection.md`,
  `48.05.14-torsion-cartan-structural-equations.md`}
- `13.02.03` ← {`48.05.14`, `48.05.15-linear-connection-frame-bundle-soldering-form.md`,
  `13.03.01`}
- `13.04.04` ← {`13.04.02`, `09.03.01-noethers-theorem.md`}
- `03.07.29` ← {`03.05.07`, `03.07.05-yang-mills-action.md`,
  `10.04.01-maxwell-in-differential-forms.md`,
  `03.06.04-pontryagin-chern-classes.md`}
- `48.02.16` ← {`48.02.05-sectional-ricci-scalar-curvature.md`}
- `48.02.17` ← {`03.02.01-smooth-manifold.md`,
  `13.09.01-globally-hyperbolic-lorentzian-manifolds.md` (succeeds)}
- `03.07.30` ← {`03.07.29`, `48.05.16-holonomy-group.md`}
- `03.07.31` ← {`03.07.05`, `03.05.07`, `03.03.01-lie-group.md`}
- `03.07.32` ← {`03.06.07-chern-simons-and-transgression.md`,
  `03.07.31`, `03.09.10-atiyah-singer-index-theorem.md`}

**Chapter / slot structure.** No new sub-chapter required; the
audit's punch-list lands inside existing chapters:

- `13.04-einstein-eq/` extends from 1 unit → 4 units
  (`13.04.01` shipped, `13.04.02`–`13.04.04` new).
- `13.02-manifold-formalism/` extends from 2 units → 3 units
  (`13.02.01-02` shipped, `13.02.03` new tetrad / spin-connection).
- `03-modern-geometry/02-manifolds/` extends from 1 unit → 3 units
  with the addition of `48.02.16` (Weyl tensor) and `48.02.17`
  (Lorentzian Hopf-Rinow / pseudo-Riemannian intro). Optionally
  `48.02.18` (Petrov classification, priority 4).
- `03-modern-geometry/07-gauge-theory/` extends from 24 units →
  ~28 units with `03.07.29` (EM-as-$U(1)$-YM), `03.07.30` (Aharonov-
  Bohm), `03.07.31` (BRST), `03.07.32` (anomalies / descent).

---

## §5 What this plan does NOT cover

- Line-number theorem inventory across the 2012 Dover edition.
  Defer until a local PDF is on disk in
  `reference/fasttrack-texts/01-fundamentals/Sternberg-CurvatureMathPhysics.pdf`
  (natural location since FT 1.14 is a §1 fundamentals entry). The
  Harvard course-note PDF is the natural seed.
- **Sternberg, *Lectures on Differential Geometry*** — Fast Track
  1.10. Covered by the parallel audit at
  `plans/fasttrack/sternberg-lectures-differential-geometry.md`.
- **Sternberg, *Group Theory and Physics*** — Fast Track 1.15.
  Separate audit pending; covers representation theory applied to
  quantum mechanics (partial overlap with Fulton-Harris audit and
  with the still-empty `12-quantum/` chapter).
- **The Atiyah-Singer index theorem proof** — *Curvature* states the
  theorem and uses it (in the anomaly chapter) but does not prove
  it. Codex coverage in `03.09.10` is statement-level + sketch;
  full proof (heat-kernel, K-theoretic, or supersymmetric routes) is
  owned by the Lawson-Michelsohn audit and the spin-geometry
  chapter's `03.09.20`, `03.09.23`. Not a Sternberg-Curvature gap.
- **The Donaldson / Seiberg-Witten programme on 4-manifolds** —
  *Curvature* introduces ASD connections but does not develop
  Donaldson invariants. Already covered by `03.07-*` chapter via
  the Donaldson-Floer audit.
- **String theory and the Polyakov / Nambu-Goto actions** — not in
  *Curvature*; deferred to a future Polchinski / Becker-Becker-
  Schwarz audit if catalogued.
- **Loop quantum gravity and Ashtekar variables** — only mentioned
  as a pointer in *Curvature*; deferred to a hypothetical Rovelli
  *Quantum Gravity* / Thiemann *Modern Canonical Quantum General
  Relativity* audit if those texts join the Fast Track.
- **Symplectic geometry and Hamiltonian mechanics** — not the
  *Curvature* topic; LDG Ch. VII covers the basics, Cannas-da-Silva
  is the canonical anchor.
- **Riemannian geometric analysis** — Ricci flow, comparison geometry,
  isoperimetric inequalities, etc. Not in *Curvature*; owned by the
  KN-I and Jost audits.
- **The detailed physics of cosmology, inflation, the CMB** — beyond
  the FLRW chapter scope of *Curvature*. Covered at higher depth
  by future audits if catalogued (Mukhanov, Weinberg *Cosmology*).
- **The Standard Model of particle physics** — only the Yang-Mills
  / EM dictionary side is in *Curvature*; the full Standard Model
  (electroweak symmetry breaking, QCD running coupling, Higgs
  mechanism) is out of scope, owned by future Weinberg QFT Vol. II
  audits if catalogued.
- A separate `notation/sternberg-curvature.md` file. Per-unit
  §Notation paragraphs suffice.

---

## §6 Acceptance criteria for FT equivalence (Sternberg-Curvature)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of *Curvature*'s named theorems map to Babel Bible units
  (currently ~65%; after priority-1 → ~85%; after priority-1+2 →
  ~93%; after priority-1+2+3 → ~97%). The single largest contributor
  is the priority-1 cluster (items 1–5: Einstein-Hilbert variation,
  Palatini, Cartan tetrad, stress-energy tensor, EM-as-$U(1)$-YM);
  these five units take the GR chapter from "Einstein equation
  stated" to "Einstein equation derived three ways and explicitly
  connected to gauge theory."
- ≥80% of *Curvature*'s named worked examples have either a direct
  unit or are referenced from a unit covering them (currently ~50%;
  priority-1 → ~75%; priority-1+2+3 → ~85%). Canonical *Curvature*
  worked examples to capture: Schwarzschild tetrad-form spin
  connection (item 3); Palatini variation of Einstein-Hilbert with
  cosmological constant (item 2); EM-as-$U(1)$-bundle with the
  Dirac monopole example (item 5); Schwarzschild Petrov type
  (item 6 / 15); Aharonov-Bohm phase computation (item 9); BRST
  quantisation of $SU(N)$ Yang-Mills in Lorenz gauge (item 10);
  chiral anomaly via descent (item 11).
- Notation alignment recorded inline in Master sections per item
  (no separate notation file).
- Sequencing: the chain
  $\{$manifolds, bundles, Chern-Weil$\}$ → Yang-Mills → EM-as-$U(1)$-YM →
  Einstein-Hilbert action → Palatini → Cartan tetrad → BRST → anomaly
  is unbroken after priority-1+2+3 lands. Currently broken at
  Yang-Mills → EM (no dictionary unit), Einstein equation →
  Einstein-Hilbert variation (no variational unit), Einstein
  equation → Cartan tetrad (no tetrad unit), Yang-Mills → BRST
  (no BRST unit).
- Pass-W weaving connects the new units bidirectionally to
  `03.05-bundles/`, `03.06-characteristic-classes/`,
  `03.07-gauge-theory/`, `03.09-spin-geometry/`,
  `10.04-maxwell-fields/`, `10.06-covariant-em/`,
  `13.02-manifold-formalism/`, `13.04-einstein-eq/`,
  `13.05-schwarzschild/`, `13.07-gravitational-waves/`,
  `13.09-microlocal-qft-curved-spacetimes/`. Priority-4 weaving
  items 12–14 explicitly schedule the cross-link edits.

The 5 priority-1 new units (items 1–5) close the
Sternberg-Curvature-distinctive GR variational + EM-gauge-dictionary
gap and ship the Einstein-Hilbert / Palatini / Cartan-tetrad
package as a coordinated triplet. The 3 priority-2 items (6–8) close
the Weyl-tensor, Lorentzian-foundations, and Bianchi-identity-as-
named-result deepenings. The 3 priority-3 items (9–11) open the
geometric-QFT pointer block (Aharonov-Bohm, BRST, anomaly). The 4
priority-4 items (12–15) are weaving / enrichment edits plus one
optional Petrov-classification unit.

**Apex unit designation.** Item 1 (`13.04.02` Einstein-Hilbert action
+ variational derivation) and item 3 (`13.02.03` Cartan tetrad /
spin-connection GR) are designated **apex units** — they synthesise
originator-text material (Hilbert 1915, Cartan 1922) with the
modern textbook presentation and are the single most-cited
*Curvature* passages downstream in physics. Item 11 (`03.07.32`
anomalies via descent) is a **secondary apex unit** — requires
synthesis of three originator papers (Adler 1969, Bell-Jackiw 1969,
Zumino 1983) with the Atiyah-Singer index theorem (`03.09.10`) and
the Chern-Simons / transgression material (`03.06.07`); allocate
extended agent budgets per `docs/specs/ORCHESTRATION_PROTOCOL.md` §8.

**Honest scope.** *Curvature in Mathematics and Physics* is a **Tier
β / γ-boundary specialty text** — the differential-geometry
prerequisite material is shadow-covered by Tier α/β audits (KN-I,
LDG, Bott-Tu), but the **variational synthesis + EM-gauge dictionary
+ Cartan-tetrad-GR + BRST/anomaly pointer block** is
Sternberg-Curvature's distinctive contribution and is **not
covered** by any other Fast Track book at the same uniform
pedagogical level. **The honest recommendation is priority-1 batch
as a five-unit minimum** to preserve the originator-prose layer and
to install the Sternberg-style "variational principles across
physics" pedagogical voice. Priority-2 and priority-3 batches are
worth doing as the geometric-QFT chapter (currently `12-quantum/`
sits empty) is built out — the BRST / anomaly / Aharonov-Bohm
triplet is the natural bridge from the gauge-theory chapter
(`03.07-*`) to a future quantum-gauge-theory chapter.

**Composite batch recommendation.** Run priority-1 (5 units, ~15h)
as a single Sternberg-Curvature batch closing the GR-variational +
EM-gauge dictionary gap. Defer priority-2 (Weyl + Lorentzian
foundations + Bianchi deepening, ~7h) to a second batch coordinated
with the KN-I priority-2 production. Defer priority-3 (Aharonov-
Bohm + BRST + anomaly, ~10.5h) to a third batch coordinated with
the eventual `12-quantum/` chapter opening. Priority-4 (4 items,
~4.5h) is weaving-only and ships alongside whichever production
batch is convenient. **The priority-1 batch alone graduates
Sternberg-Curvature from "moderately covered" (~65%) to
"variational-GR-plus-gauge-dictionary equivalent" (~85%) and
closes the originator-prose audit obligation on Hilbert 1915 +
Palatini 1919 + Cartan 1922.**

---

## §7 Sourcing

- **Not free as a trade volume.** The Dover 2012 reprint is in
  active print (~$25 new; secondhand $15–25). ISBN 978-0-486-47855-3.
- **Freely available as Sternberg's pre-Dover Harvard course-note
  PDF.** Hosted on the author's Harvard page
  (`people.math.harvard.edu/~shlomo/`) under the title used during
  the 2007–2010 Math 273/290 courses. WebFetch on the Harvard page
  should retrieve the latest revision; the page lists six Sternberg
  books and the *Curvature in Mathematics and Physics* manuscript
  is among them. The Dover trade edition is a copy-edited version
  of the same content.
- **Local copy.** **Not present** in
  `reference/fasttrack-texts/01-fundamentals/` at the time of this
  audit. Recommend adding the Harvard-page PDF as
  `reference/fasttrack-texts/01-fundamentals/Sternberg-CurvatureMathPhysics.pdf`
  before the priority-1 production pass, so line-number citations
  to *Curvature* Chs. 19–21 (Einstein-Hilbert / Palatini / tetrad)
  can be resolved.
- **Companion peer texts (cited in §1 and §3):**
  - **R. Wald**, *General Relativity*, University of Chicago Press
    1984. The canonical mathematical-GR graduate text; Ch. 4 and
    App. E are the canonical peer presentation of the
    Einstein-Hilbert variational derivation. Joint master anchor
    with *Curvature* for `13.04.02` and `13.04.03`.
  - **C. Misner, K. Thorne, J. Wheeler**, *Gravitation*, Freeman
    1973. The encyclopaedic GR reference; §21 on variational
    principles and §14 on tetrad formalism are joint anchors.
  - **S. Carroll**, *Spacetime and Geometry*, Addison-Wesley 2004.
    Modern textbook treatment; §3.4 on tetrads, §4 on Einstein
    equations, App. on variational derivation. Peer anchor for
    `13.04.02`, `13.02.03`.
  - **B. O'Neill**, *Semi-Riemannian Geometry with Applications to
    Relativity*, Academic Press 1983. The canonical pseudo-
    Riemannian / Lorentzian geometry text; §5–§8 are the canonical
    anchor for `48.02.17` (Lorentzian Hopf-Rinow and globally
    hyperbolic foundations) at textbook depth.
  - **A. Besse**, *Einstein Manifolds*, Springer 1987. The
    canonical reference for Weyl-tensor decomposition (§1.G) and
    conformal-flatness criteria. Master anchor for `48.02.16`.
  - **D. Bleecker**, *Gauge Theory and Variational Principles*,
    Addison-Wesley 1981 (Dover reprint 2005). The canonical 1980s
    geometric-gauge-theory text; §3 covers EM as $U(1)$ Yang-Mills,
    §5 covers Einstein-Hilbert in tetrad form. Most direct peer
    anchor for `03.07.29` and the Sternberg-Curvature variational
    synthesis.
  - **M. Nakahara**, *Geometry, Topology and Physics*, IOP Publishing
    (2nd ed. 2003). The canonical physicist's overview; §10–§11 are
    the broader (less precise) peer presentation. Useful as a
    cross-check / lower-precision sanity layer; not a master anchor.
  - **M. Henneaux, C. Teitelboim**, *Quantization of Gauge Systems*,
    Princeton University Press 1992. The canonical BRST / constrained-
    Hamiltonian-systems reference; §8 is the master anchor for
    `03.07.31`.
  - **R. Bertlmann**, *Anomalies in Quantum Field Theory*, Oxford
    University Press 1996. The canonical anomaly reference; §4–§6
    are the master anchor for `03.07.32`.
  - **R. Penrose, W. Rindler**, *Spinors and Space-Time, Vols. 1–2*,
    Cambridge University Press 1984/1986. Master reference for the
    Petrov classification (Vol. 1, §8); peer anchor for optional
    `48.02.18`.
  - **H. Stephani, D. Kramer, M. MacCallum, C. Hoenselaers, E.
    Herlt**, *Exact Solutions of Einstein's Field Equations*, 2nd
    ed., Cambridge University Press 2003. Compendium of named GR
    solutions; peer anchor for the tetrad / Petrov-classification
    worked examples in items 3, 6, 15.
  - **S. Hawking, G. Ellis**, *The Large Scale Structure of
    Space-time*, Cambridge University Press 1973. The canonical
    causal-structure / global-hyperbolicity reference; §6 is the
    master anchor for the Penrose-Geroch material in `48.02.17`.
- **Originator-paper archive locations:**
  - Hilbert 1915 *Die Grundlagen der Physik* — open access via
    Göttingen Akademie reprints; English translation in
    Sauer-Majer *David Hilbert's Lectures on the Foundations of
    Physics 1915–1927* (Springer 2009).
  - Einstein 1915 *Die Feldgleichungen der Gravitation* — open
    access via the Einstein Papers Project (Princeton).
  - Palatini 1919 *Deduzione invariantiva …* — open access via
    Rendiconti Circolo Mat. Palermo archive.
  - Cartan 1922 *C. R. Acad. Sci. Paris* + 1923–25 *Annales sci.
    ÉNS* affine-connection trilogy — open access via NUMDAM /
    Œuvres complètes.
  - Weyl 1918 *Math. Z.* — Springer archive (open after embargo).
  - Penrose 1965 *Phys. Rev. Lett.* + Geroch 1970 *J. Math. Phys.*
    — APS / AIP archives.
  - Aharonov-Bohm 1959 *Phys. Rev.* — APS archive.
  - Becchi-Rouet-Stora 1976 *Ann. Phys.* — Elsevier archive.
    Tyutin 1975 Lebedev preprint — circulated as scanned PDF; not
    formally published until 2008 *Theor. Math. Phys.* 155.
  - Adler 1969 *Phys. Rev.* + Bell-Jackiw 1969 *Nuovo Cim. A* —
    APS / Springer archives. Zumino 1983 *Les Houches lectures* —
    print only; conference proceedings.
  - Sternberg 2008/2012 *Curvature in Mathematics and Physics* —
    Dover trade edition; Harvard pre-print PDF on author's page.
