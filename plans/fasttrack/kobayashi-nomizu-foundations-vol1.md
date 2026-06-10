# Kobayashi-Nomizu — *Foundations of Differential Geometry, Vol. I* (Fast Track 3.18) — Audit + Gap Plan

**Book:** Shoshichi Kobayashi, Katsumi Nomizu, *Foundations of Differential
Geometry, Volume I*. Interscience Tracts in Pure and Applied Mathematics 15,
Interscience Publishers (Wiley), 1963. xi + 329 pp. Reprinted Wiley Classics
Library 1996 (ISBN 0-471-15733-3). The canonical English-language reference
for connection-theoretic differential geometry.

**Fast Track entry:** 3.18 (KN Vol. I is the cited anchor for
connection-and-curvature units across the Babel Bible modern-geometry chapter;
KN Vol. II is its own Fast Track entry 3.19, deferred to a separate audit).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units so that *Foundations of Differential Geometry Vol. I* (KN-I
hereafter) is covered to the equivalence threshold (≥95% effective coverage
of theorems, key examples, exercise pack, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Audit mode: REDUCED.** No local PDF is available
(`reference/textbooks-extra/` and `reference/fasttrack-texts/03-modern-geometry/`
checked — only the cover-image stub `reference/fast-track/images/Kobayashi-Nomizu-1-…jpg`
is present; KN-I is copyright-protected and was not retrieved via WebFetch
within the time budget). This pass works from the canonical KN-I table of
contents (Chs. I–VII + appendices, well-attested in every modern
differential-geometry text), the peer-source crosswalks below, the Fast
Track entry's editorial framing, and the in-Codex evidence that KN-I is
already cited as the master anchor for `03.05.04`, `03.05.07`, `03.05.09`,
`03.06.05`, `03.06.06` without a counterpart audit. A full P1 line-number
inventory is deferred to the production pass when a local copy is on disk.

---

## §1 What KN-I is for

KN-I is the **canonical reference** for the connection-and-curvature half
of differential geometry. Where Lee's *Introduction to Smooth Manifolds*
covers the manifold layer (charts, tangent bundles, vector fields, Lie
derivative, integration) and Spivak's *Comprehensive Introduction* Vol. I
walks the same material at a slower pace with more pictures, KN-I is the
text that organises **connections on principal $G$-bundles**, the
**Cartan structural equations** for curvature and torsion, the **holonomy
group** and its reduction theorems, and the specialisation to the **affine
and Riemannian** cases. Every later text on gauge theory, geometric
analysis, or Riemannian geometry either cites KN-I or rewrites its
chapters in lighter notation [ref: Tu *Differential Geometry: Connections,
Curvature, and Characteristic Classes* (GTM 275, Springer 2017) Preface
("the book is largely an exposition of the relevant chapters of
Kobayashi-Nomizu Vol. I in modern notation"); Bleecker *Gauge Theory and
Variational Principles* (Addison-Wesley 1981, Dover reprint 2005) Ch. 1
("our principal reference for connections is Kobayashi-Nomizu Vol. I")].

Distinctive content, organised by the seven chapters of the book:

1. **Chapter I — Differentiable manifolds.** Charts and atlases, tangent
   and cotangent bundles, vector fields and the Lie bracket, the **Frobenius
   theorem** (involutive distributions integrate to foliations), Lie groups
   and Lie algebras as $G \leadsto \mathfrak{g} = T_e G$, **invariant**
   vector fields, the **exponential map** $\exp: \mathfrak{g} \to G$,
   group actions (left, right, free, transitive, proper), and **fibre
   bundles** in general. The chapter sets up the entire infrastructure
   that the rest of the book depends on. Compare Lee *Introduction to
   Smooth Manifolds* Chs. 1–9 (verbose) and Spivak Vol. I Chs. 1–6
   (geometric) [ref: Lee, *Introduction to Smooth Manifolds* (GTM 218,
   Springer 2nd ed. 2013) Chs. 1–9; Spivak, *A Comprehensive Introduction
   to Differential Geometry Vol. I* (Publish or Perish 3rd ed. 1999)
   Chs. 1–6].
2. **Chapter II — Theory of connections.** The technical heart of the
   book. **Principal $G$-bundle** $P \to M$ with right $G$-action;
   **vertical subbundle** $V P \subseteq T P$; a **connection** is a
   smooth right-equivariant horizontal complement $H P$ to $V P$,
   equivalently a $\mathfrak{g}$-valued **connection 1-form**
   $\omega \in \Omega^1(P; \mathfrak{g})$ with $\omega|_{V P} = \mathrm{id}$
   (after identification) and $R_g^* \omega = \mathrm{Ad}(g^{-1}) \omega$.
   **Horizontal lift** of a curve in $M$ to $P$; **parallel transport**;
   the **curvature 2-form** $\Omega = \mathrm{d}\omega + \tfrac{1}{2}[\omega
   \wedge \omega]$ (Cartan's **structural equation**); the **Bianchi
   identity** $\mathrm{d}_\omega \Omega = 0$. **Reduction** of a
   principal $G$-bundle to a subgroup $H \subseteq G$ and the resulting
   reduction of the connection. **Associated bundles** $E = P \times_G F$,
   induced connections on $E$, and the equivalence between connections on
   $P$ and **covariant derivatives** $\nabla$ on associated vector bundles
   (the bridge to the vector-bundle viewpoint). Compare Tu *Differential
   Geometry* Chs. 10–13 and Bleecker §3 [ref: Tu Chs. 10–13; Bleecker §3].
3. **Chapter III — Linear and affine connections.** Specialisation of
   Ch. II to the **frame bundle** $L(M) = \mathrm{Fr}(M)$, a principal
   $\mathrm{GL}(n, \mathbb{R})$-bundle. A **linear connection** on $M$ is
   a connection on $L(M)$; equivalently a covariant derivative on $T M$.
   **Affine connection**: a linear connection together with a soldering
   form (the canonical $\mathbb{R}^n$-valued 1-form on $L(M)$). The
   **torsion tensor** $T(X, Y) = \nabla_X Y - \nabla_Y X - [X, Y]$ and
   the **curvature tensor** $R(X, Y) Z = \nabla_X \nabla_Y Z - \nabla_Y
   \nabla_X Z - \nabla_{[X, Y]} Z$ (with the two Cartan structural
   equations $\mathrm{d}\theta = -\omega \wedge \theta + \Theta$ and
   $\mathrm{d}\omega = -\omega \wedge \omega + \Omega$, where $\Theta$
   is the torsion form). **Geodesics** as auto-parallel curves of an
   affine connection; the **exponential map** $\exp_p$ at a point.
   **Normal coordinates** around $p$. **Geodesic completeness**.
4. **Chapter IV — Riemannian connections.** The unique **Levi-Civita
   connection** (1917): the unique torsion-free metric-compatible affine
   connection on a Riemannian manifold $(M, g)$. **Sectional curvature**,
   the **Ricci tensor**, the **scalar curvature**. **Hopf-Rinow theorem**
   (geodesic completeness $\Leftrightarrow$ Cauchy completeness
   $\Leftrightarrow$ closed-bounded-compact). **Spaces of constant
   curvature** (Riemannian space forms): the model classification into
   $S^n$, $\mathbb{R}^n$, $\mathbb{H}^n$ at each curvature value, and
   the Killing-Hopf theorem that complete simply-connected constant-
   curvature spaces are exactly these. Compare Lee *Riemannian Manifolds*
   and do Carmo *Riemannian Geometry* [ref: Lee, *Introduction to
   Riemannian Manifolds* (GTM 176, Springer 2nd ed. 2018); do Carmo,
   *Riemannian Geometry* (Birkhäuser 1992)].
5. **Chapter V — Curvature and space forms.** Deeper development of
   constant-curvature spaces, classification, and the **isometry group**.
6. **Chapter VI — Transformations.** **Affine and isometric
   transformations**, infinitesimal isometries (**Killing fields**),
   the **Myers-Steenrod theorem** (the isometry group of a Riemannian
   manifold is a finite-dimensional Lie group), and transformations of
   connections.
7. **Chapter VII — Holonomy.** The **holonomy group** $\mathrm{Hol}(\omega, u)
   \subseteq G$ of a connection at a basepoint $u \in P$ — the subgroup
   generated by parallel transport around loops. **Restricted holonomy**
   $\mathrm{Hol}^0(\omega, u)$ via contractible loops. The **Ambrose-Singer
   holonomy theorem** (1953): the Lie algebra of $\mathrm{Hol}^0$ is
   generated by the curvature $\Omega_u(X, Y)$ as $u$ ranges over the
   holonomy bundle. The **holonomy reduction** theorem: a connection on
   $P$ reduces to a principal $\mathrm{Hol}(\omega, u)$-bundle. **Berger's
   classification** (1955) of Riemannian holonomy is **stated and
   referenced** but the proof is left to the original literature; KN-II
   §X.5 expands on this. Compare Joyce *Riemannian Holonomy Groups* Ch. 2
   [ref: Joyce *Riemannian Holonomy Groups and Calibrated Geometry*
   (Oxford Graduate Texts in Mathematics 12, OUP 2007) Ch. 2].
8. **Editorial signature.** KN-I is uncompromisingly **principal-bundle
   first**. Connections are defined on $P$, not on $T M$; the
   vector-bundle / covariant-derivative viewpoint is recovered from
   associated bundles. This is the *opposite* of the order in Lee or do
   Carmo (which start from $\nabla$ on $T M$) and is the reason KN-I is
   the gauge-theory anchor: Yang-Mills *requires* the principal-bundle
   framing because the gauge group is the bundle automorphism group of
   $P$, not the tangent bundle. Bleecker's textbook (cited above) is the
   bridge from KN's principal-bundle calculus to physical gauge theory
   [ref: Bleecker §3 ("we have adopted the Kobayashi-Nomizu principal-
   bundle formulation throughout because it is forced on us by physical
   gauge transformations")].

KN-I is **not** a first textbook on smooth manifolds. It assumes Chapter I
material as a rapid review and pivots immediately to connections. The
canonical "before KN-I" sequence is Lee *Smooth Manifolds* → Lee
*Riemannian Manifolds* → KN-I, or Spivak Vol. I → KN-I. The canonical
"after KN-I" sequence is KN-II (complex geometry, Chern-Weil, characteristic
classes) → Bleecker / Donaldson-Kronheimer (gauge theory) → Joyce
(special-holonomy / calibrated geometry).

---

## §2 Coverage table (Babel Bible vs KN-I)

Cross-referenced against the current Babel Bible corpus. ✓ = covered,
△ = partial / different framing, ✗ = not covered. KN-I material maps
primarily to `03-modern-geometry/02-manifolds/`, `03-lie/`, `05-bundles/`,
`07-gauge-theory/`, and adjacent.

| KN-I topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Ch. I — manifold prerequisites** | | | |
| Smooth manifold, atlas, charts | `03.02.01-smooth-manifold.md` | ✓ | Single Codex manifold unit. Anchored on Lee. KN-I Ch. I §1 covered. |
| Tangent / cotangent bundle, vector fields | — | ✗ | **Gap.** Currently *implicit* in `03.02.01` and `03.05.02-vector-bundle.md`; no dedicated unit for $T M$ as a smooth vector bundle with the standard frame. Per the Milnor audit, `02-manifolds/` is "1 unit only — wide open"; this is one of the open slots. |
| Lie bracket $[X, Y]$ of vector fields, Lie derivative | — | ✗ | **Gap.** Foundational; no unit. |
| Frobenius theorem (involutive ⇒ integrable) | — | ✗ | **Gap.** Cited downstream (e.g. foliation references in `03.09-spin-geometry/`) but no anchor unit. |
| Lie group, Lie algebra | `03.03.01-lie-group.md`, `03.04.01-lie-algebra.md` | ✓ | Both shipped. |
| Group action (free, transitive, proper) | `03.03.02-group-action.md` | ✓ | Shipped. |
| Exponential map $\exp: \mathfrak{g} \to G$, Maurer-Cartan form | — | ✗ | **Gap.** Strange omission; cited by `03.05.07` and `03.05.09` without anchor. |
| Fibre bundle (general) | △ | △ | `03.05.01-principal-bundle.md`, `03.05.02-vector-bundle.md`, `03.05.10-sphere-bundle.md` cover the specialised cases. A *general* fibre-bundle unit (definition, local triviality, structure group, transition functions) is **absent**. |
| **Ch. II — connections on principal bundles** | | | |
| Principal $G$-bundle | `03.05.01-principal-bundle.md` | ✓ | Shipped. |
| Vertical subbundle $V P$, fundamental vector fields | — | ✗ | **Gap.** Needed for the intrinsic definition of a connection 1-form. The existing `03.05.07` has it as an unanchored prerequisite (`lean_mathlib_gap` block flags "vertical tangent bundles, fundamental vector fields" as missing). |
| Connection on a principal bundle (horizontal distribution + connection 1-form) | `03.05.07-principal-bundle-connection.md` | △ | **Shipped**, master anchor is "Kobayashi-Nomizu Vol. I §II". Adequate at FT-equivalence but the unit's `references` block has `source: TODO_REF` for the KN-I citation — the audit pass should resolve that. |
| Horizontal lift, parallel transport | — | ✗ | **Gap.** Currently a sub-topic inside `03.05.07` but the explicit horizontal-lift theorem (every curve in $M$ lifts uniquely to a horizontal curve in $P$ given an initial point) and the parallel-transport functor have no dedicated unit. |
| Curvature 2-form $\Omega$, Cartan structural equation $\Omega = \mathrm{d}\omega + \tfrac{1}{2}[\omega \wedge \omega]$ | `03.05.09-curvature.md` | ✓ | Shipped, master anchor is KN-I §III. |
| Bianchi identity $\mathrm{d}_\omega \Omega = 0$ | △ | △ | Mentioned inside `03.05.09` but no dedicated theorem statement; the algebraic Bianchi (first Bianchi $R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0$ for torsion-free connections) is also absent. |
| Reduction of structure group; reduction of connection | — | ✗ | **Gap.** `03.05.03-orthogonal-frame-bundle.md` is the canonical example (reduction from $\mathrm{GL}$ to $\mathrm{O}$ via a metric) but the *general* reduction theorem is absent. |
| Associated bundle $E = P \times_G F$; induced connection | △ | △ | `03.05.02-vector-bundle.md` and `03.05.04-vector-bundle-connection.md` cover the vector-bundle specialisation. The general associated-bundle construction and the connection-induction theorem (KN-I §II.6) are not anchored. |
| Equivalence: connections on $P$ ↔ covariant derivatives on associated vector bundles | △ | △ | Implicit in the sibling pair `03.05.04` ↔ `03.05.07` but not stated as a theorem unit. |
| **Ch. III — linear and affine connections** | | | |
| Frame bundle $L(M) = \mathrm{Fr}(M)$ | `03.05.03-orthogonal-frame-bundle.md` | △ | The **orthogonal** frame bundle is shipped. The general $\mathrm{GL}(n, \mathbb{R})$-frame bundle (without a metric reduction) has no dedicated unit. |
| Linear connection on $M$ (= connection on $L(M)$) | △ | △ | `03.05.04-vector-bundle-connection.md` covers the covariant-derivative side; the KN-I framing as a principal-bundle connection on $L(M)$ is not the entry point. |
| Soldering form / canonical $\mathbb{R}^n$-valued 1-form on $L(M)$ | — | ✗ | **Gap.** Distinctive to KN-I; nothing analogous in Lee. |
| Torsion tensor $T(X, Y)$ and torsion 2-form $\Theta$ | — | ✗ | **Gap.** Foundational; no unit. Referenced informally in `03.05.09` as the second Cartan equation but never anchored. |
| Two Cartan structural equations | △ | △ | The curvature equation is in `03.05.09`; the torsion equation is missing. |
| Geodesic of an affine connection; auto-parallel curve | — | ✗ | **Gap.** Hopf-Rinow / Levi-Civita-shaped gap; flagged in the Milnor audit punch-list item `03.03.X1` (Levi-Civita / exp / Hopf-Rinow). |
| Exponential map $\exp_p$ at a point; normal coordinates | — | ✗ | **Gap.** Cited downstream (Cartan-Hadamard, Bonnet-Myers) without anchor. |
| Geodesic completeness | — | ✗ | **Gap.** |
| **Ch. IV — Riemannian connections** | | | |
| Levi-Civita connection (existence + uniqueness) | — | ✗ | **Gap.** This is the most-cited missing unit in the Babel Bible: `03.09.18-berger-holonomy.md` invokes it without anchor; the Milnor audit lists it as priority-2 item `03.03.X1`. KN-I §IV is the canonical anchor. |
| Sectional curvature | — | ✗ | **Gap.** |
| Ricci tensor, scalar curvature | — | ✗ | **Gap.** |
| Hopf-Rinow theorem | — | ✗ | **Gap.** Shared with the Milnor audit punch-list. |
| Spaces of constant curvature; Riemannian space forms | — | ✗ | **Gap.** |
| Killing-Hopf theorem (simply-connected complete constant curvature = $S^n$ / $\mathbb{R}^n$ / $\mathbb{H}^n$) | — | ✗ | **Gap.** |
| **Ch. V–VI — transformations** | | | |
| Killing field, infinitesimal isometry | — | ✗ | **Gap.** Cited in symplectic and Lie-group units informally. |
| Myers-Steenrod (isometry group is a Lie group) | — | ✗ | **Gap.** |
| **Ch. VII — holonomy** | | | |
| Holonomy group $\mathrm{Hol}(\omega, u)$; restricted holonomy $\mathrm{Hol}^0$ | △ | △ | `03.09.18-berger-holonomy.md` is shipped and *uses* the holonomy group as its central object, but it imports it without a definitional anchor unit. The Berger classification unit therefore has a load-bearing prerequisite gap. |
| Ambrose-Singer theorem (Lie algebra of $\mathrm{Hol}^0$ = curvature span) | — | ✗ | **Gap.** Foundational holonomy theorem; absent from the Babel Bible. |
| Holonomy reduction theorem | — | ✗ | **Gap.** |
| Berger's classification of Riemannian holonomy | `03.09.18-berger-holonomy.md` | △ | Shipped, but as a **downstream** unit in the spin-geometry chapter; the upstream KN-I Ch. VII apparatus (Ambrose-Singer, restricted holonomy, reduction) is absent. |
| **Ancillary / gauge-theory bridge** | | | |
| Yang-Mills action $\|F_A\|^2$ on a Riemannian base | `03.07.05-yang-mills-action.md` | ✓ | Shipped, but `07-gauge-theory/` contains only this one unit; the entire connection-theoretic apparatus it depends on is in `05-bundles/`. KN-I's Ch. II–III + the §VII holonomy material *is* the prerequisite chain for gauge theory. |
| Chern-Weil homomorphism | `03.06.06-chern-weil-homomorphism.md` | ✓ | Shipped, master anchor cites KN-II (complex characteristic classes), but the construction itself (invariant polynomial of curvature) uses KN-I §III. |
| Invariant polynomial | `03.06.05-invariant-polynomial.md` | ✓ | Shipped. |
| Pontryagin and Chern classes | `03.06.04-pontryagin-chern-classes.md` | ✓ | Shipped. |

**Aggregate coverage estimate:** ~20–25% of KN-I has corresponding Codex
units. Chapter II (connections on principal bundles) is **the best-covered**
chapter at ~60%, because `03.05.01`, `03.05.04`, `03.05.07`, `03.05.09`
together cover the principal-bundle-connection-and-curvature core (though
with the gaps flagged above: horizontal lift, parallel transport, reduction,
associated bundles, torsion). Chapter III (linear/affine connections) is
**~15% covered**: only the orthogonal frame bundle and the covariant-
derivative side, with no soldering form, no torsion tensor, no geodesics
as auto-parallels, no exp map, no normal coordinates. Chapter IV
(Riemannian connections) is **~0% covered**: Levi-Civita itself is absent
as a unit, and Hopf-Rinow, sectional / Ricci / scalar curvature, and the
space forms are all missing. Chapters V–VI are essentially uncovered.
Chapter VII (holonomy) has the *downstream* classification unit
(`03.09.18`) but the *upstream* apparatus (Ambrose-Singer, restricted
holonomy, holonomy reduction) is missing.

**Silent KN-I dependencies in the Babel Bible.** The audit reveals a
cluster of units that cite KN-I as their master anchor but whose load-
bearing prerequisites are uncovered:

1. **`03.05.04-vector-bundle-connection.md`** (master = "Kobayashi-Nomizu
   Vol. I §III") — silently depends on a missing **general fibre-bundle**
   unit and a missing **Lie derivative / vector-field** unit.
2. **`03.05.07-principal-bundle-connection.md`** (master = "Kobayashi-Nomizu
   Vol. I §II; Steenrod §17") — silently depends on a missing **vertical
   subbundle and fundamental vector field** unit, and the unit's own
   `lean_mathlib_gap` block already flags these as the formalisation
   blockers.
3. **`03.05.09-curvature.md`** (master = "Kobayashi-Nomizu Vol. I §III") —
   states the curvature Cartan equation but not the torsion equation;
   silently depends on a missing **torsion tensor** unit and a missing
   **Bianchi identity** unit.
4. **`03.05.03-orthogonal-frame-bundle.md`** — is the *example* of a
   reduction of structure group from $\mathrm{GL}(n)$ to $\mathrm{O}(n)$
   without an anchor unit for the general reduction theorem.
5. **`03.07.05-yang-mills-action.md`** — the **entire** gauge-theory
   chapter is one unit whose Master tier cites Atiyah-Bott and
   Donaldson-Kronheimer; both anchor texts assume KN-I Ch. II–III + Ch. VII
   as prerequisites that the Babel Bible does not supply at present.
6. **`03.09.18-berger-holonomy.md`** — cites Berger 1955 directly,
   bypasses KN-I Ch. VII (Ambrose-Singer / holonomy reduction). The
   **definition** of the holonomy group is invoked without an anchor.
7. **`03.06.06-chern-weil-homomorphism.md`** — Chern-Weil is the
   *application* of KN-I Ch. III curvature; the apparatus is partly
   present (`03.05.09` + `03.06.05`) but the *invariant-polynomial-of-
   curvature* construction depends on the torsion-free / structural-
   equation packaging that the torsion gap above weakens.

Net effect: the existing Codex `05-bundles/` chapter cites KN-I as its
canonical reference but covers ~60% of the relevant material; the
`02-manifolds/` chapter (the prerequisite layer) covers ~10%; the
`07-gauge-theory/` chapter (the downstream layer) cites KN-I via
intermediaries but has no other units. The KN-I audit is therefore
**load-bearing across three chapters**.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — manifold-layer prerequisites (also on the Milnor /
Lee-equivalent open punch-list for `02-manifolds/`):**

These are shared with any future Lee *Introduction to Smooth Manifolds*
audit and with the Milnor *Topology from the Differentiable Viewpoint*
audit. Listed here because KN-I assumes them and the audit reveals them
as silently load-bearing.

1. **`48.02.02` Tangent bundle as a smooth vector bundle.** $T M$ with
   its canonical smooth structure, $\pi: T M \to M$, local frames in a
   chart. KN-I §I.2 anchor; Lee Ch. 3 anchor. Three-tier, ~1500 words.
2. **`48.02.03` Vector fields, Lie bracket, Lie derivative.** $\Gamma(T M)$,
   the Lie bracket as a Lie-algebra structure on $\mathfrak{X}(M)$, Lie
   derivative $\mathcal{L}_X$ on tensor fields. KN-I §I.3 anchor; Lee
   Chs. 8–12 anchor. ~1500 words. Three-tier.
3. **`48.02.04` Frobenius theorem.** Involutive ⇔ integrable distribution.
   KN-I §I.2 (Theorem 2.1) anchor; Lee Ch. 19 anchor. ~1200 words.
   Intermediate + Master.
4. **`48.03.04` Exponential map $\exp: \mathfrak{g} \to G$ and the
   Maurer-Cartan form.** KN-I §I.4 anchor; Warner Ch. 3 anchor.
   Three-tier, ~1500 words. Sits in the existing `03-lie/` chapter.
5. **`48.05.00` General fibre bundle (definition, local triviality,
   structure group, transition functions).** The umbrella unit that
   sits *above* `03.05.01-principal-bundle.md` and `03.05.02-vector-bundle.md`.
   KN-I §I.5 anchor; Steenrod *Topology of Fibre Bundles* §2–§3 anchor.
   ~1500 words. Three-tier.

**Priority 1 — load-bearing KN-I Ch. II–III core (the heart of the audit):**

6. **`48.05.06` Vertical subbundle and fundamental vector fields.** Inside
   `05-bundles/`. $V P = \ker(\mathrm{d}\pi) \subseteq T P$; for each
   $X \in \mathfrak{g}$ the fundamental vector field $X^*$ on $P$.
   The infinitesimal-action map $\mathfrak{g} \to \Gamma(V P)$ is an
   isomorphism onto vertical fields. KN-I §II.1 anchor. ~1200 words.
   Intermediate + Master. **Unblocks the `03.05.07` Lean formalisation.**
7. **`48.05.11` Horizontal lift and parallel transport.** Existence and
   uniqueness of horizontal lifts of curves in $M$ to $P$. The
   parallel-transport functor $\mathrm{P}_\gamma: P_{\gamma(0)} \to
   P_{\gamma(1)}$ as a $G$-equivariant map. KN-I §II.3 anchor. ~1500 words.
   Three-tier.
8. **`48.05.12` Reduction of structure group; reduction of a connection.**
   General theorem: a section of $P/H \to M$ ⇔ a reduction of $P$ to an
   $H$-subbundle $Q \subseteq P$. A connection $\omega$ reduces to $Q$
   iff its holonomy at a point of $Q$ lies in $H$. KN-I §II.7 anchor.
   ~1500 words. Three-tier. The orthogonal-frame-bundle unit
   `03.05.03` becomes a canonical *example* of this theorem.
9. **`48.05.13` Associated bundle and induced connection.**
   $E = P \times_G F$ for $G$ acting on $F$; the connection on $P$ induces
   a connection on $E$ (and a covariant derivative when $F$ is a vector
   space). KN-I §II.6 anchor. ~1500 words. Three-tier. The pair
   `03.05.04` ↔ `03.05.07` becomes a *corollary* of this.
10. **`48.05.14` Torsion tensor and the two Cartan structural equations.**
    Torsion $T(X, Y) = \nabla_X Y - \nabla_Y X - [X, Y]$, the torsion
    2-form $\Theta = \mathrm{d}\theta + \omega \wedge \theta$ on $L(M)$,
    the full pair of Cartan equations. The first and second Bianchi
    identities. KN-I §III.2, §III.5 anchor. ~1500 words. Three-tier.
    **Closes the `03.05.09-curvature.md` partial coverage.**
11. **`48.05.15` Linear connection via the frame bundle; soldering form.**
    The canonical $\mathbb{R}^n$-valued 1-form $\theta$ on $L(M)$
    (soldering form), and the resulting structural equations. KN-I §III.2
    anchor. ~1500 words. Master-tier dominant; the Beginner tier is the
    Lee-style "$\nabla$ on $T M$" reformulation.
12. **`03.03.X1` Levi-Civita connection, geodesics, exponential map,
    Hopf-Rinow.** Shared with the Milnor audit (`milnor-morse-theory.md`
    punch-list item 6). KN-I §IV.1–§IV.4 anchor; do Carmo *Riemannian
    Geometry* Ch. 2–7 secondary anchor. ~2500 words. Three-tier.
    **Single most-cited missing unit in the Babel Bible.**

**Priority 2 — Ch. IV–V Riemannian completions and Ch. VII holonomy:**

13. **`48.02.05` Sectional curvature, Ricci tensor, scalar curvature.**
    The three standard curvature contractions. KN-I §IV.1 anchor;
    Lee *Riemannian Manifolds* Ch. 8 secondary. ~1500 words. Three-tier.
14. **`48.02.06` Constant-curvature spaces and Killing-Hopf.** Model
    spaces $S^n$, $\mathbb{R}^n$, $\mathbb{H}^n$; classification of
    complete simply-connected constant-curvature manifolds. KN-I §V.3
    anchor. ~1500 words. Three-tier.
15. **`48.05.16` Holonomy group and restricted holonomy.** $\mathrm{Hol}(\omega, u)$
    and $\mathrm{Hol}^0(\omega, u)$ as Lie subgroups of $G$. The
    holonomy bundle. KN-I §VII.1–§VII.2 anchor. ~1500 words. Three-tier.
    **Supplies the missing prerequisite for `03.09.18-berger-holonomy.md`.**
16. **`48.05.17` Ambrose-Singer holonomy theorem.** The Lie algebra of
    $\mathrm{Hol}^0$ equals the span of $\Omega_u(X, Y)$ as $u$ ranges
    over the holonomy bundle and $X, Y \in T_u P$. KN-I §VII.8 anchor;
    Ambrose-Singer 1953 originator. ~1500 words. Intermediate + Master.
17. **`48.05.18` Holonomy reduction theorem.** A connection on $P$
    reduces to a principal $\mathrm{Hol}(\omega, u)$-bundle. KN-I §VII.2
    anchor. ~1200 words. Master-dominant.

**Priority 3 — Ch. VI transformations + Bianchi packaging:**

18. **`48.02.07` Killing fields and infinitesimal isometries.** Killing
    equation $\mathcal{L}_X g = 0$; the Lie algebra of Killing fields.
    KN-I §VI.2 anchor. ~1200 words. Intermediate + Master.
19. **`48.02.08` Myers-Steenrod theorem.** The isometry group of a
    Riemannian manifold is a finite-dimensional Lie group. KN-I §VI.3
    anchor. ~1200 words. Master-dominant.
20. **First and second Bianchi identities** — add as a section to
    `48.05.14` rather than a new unit.

**Priority 4 — survey pointers (optional, Master-only):**

21. **Pointer in `03.07.05-yang-mills-action.md`** to the new
    `48.05.11`–`48.05.18` chain as the prerequisite anchor. Single-
    paragraph weaving edit, not a new unit; recorded here so it is not
    forgotten in Pass-W.
22. **Pointer in `03.09.18-berger-holonomy.md`** to `48.05.16`–`48.05.18`
    as the upstream holonomy apparatus. Single-paragraph weaving edit.
23. **Pointer in `03.06.06-chern-weil-homomorphism.md`** to `48.05.14`
    (torsion-free, structural equations) — the construction is
    sharpened once the torsion apparatus is anchored. Single-paragraph
    weaving edit.

---

## §4 Implementation sketch (P3 → P4)

For a full KN-I coverage pass, priority-0+1 are the minimum set (12 units)
and close the gauge-theory and holonomy silent-dependency gaps. Realistic
production estimate (mirroring earlier Brown / Bott-Tu / Milnor batches):

- ~3 hours per unit. KN-I units skew slightly above the corpus average
  because the Master tier requires careful principal-bundle notation
  (vertical / horizontal / fundamental / equivariant) and the structural
  equations need both the moving-frame and the abstract presentation.
- **Priority 0:** 5 units × ~2.5 hours = ~12 hours. Mostly manifold-layer
  patches with strong external anchors (Lee).
- **Priority 1:** 7 units × ~3.5 hours = ~25 hours. Heart of the audit;
  closes the gauge-theory and Riemannian-connection gaps in one batch.
- **Priority 2:** 5 units × ~3 hours = ~15 hours. Closes the holonomy
  chain into `03.09.18`.
- **Priority 3:** 2 units + 1 section × ~2 hours = ~5 hours.
- **Priority 4:** 3 weaving edits × ~30 min = ~1.5 hours.
- **Total for full coverage: ~58 hours**, roughly two focused weeks.
  Priority-0+1 alone is ~37 hours and closes the load-bearing gaps.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **Tullio Levi-Civita**, "Nozione di parallelismo in una varietà
  qualunque e conseguente specificazione geometrica della curvatura
  riemanniana," *Rendiconti del Circolo Matematico di Palermo* 42
  (1917) 173–204 — the original definition of the Levi-Civita
  connection on a Riemannian manifold. Cite in `03.03.X1`.
- **Élie Cartan**, "Sur les variétés à connexion affine et la théorie
  de la relativité généralisée," *Annales scientifiques de l'É.N.S.*
  40 (1923) 325–412, *cont'd* 41 (1924) 1–25, 42 (1925) 17–88 — the
  invention of the **moving-frame** approach to connections; the
  Cartan structural equations are introduced here. Cite in `48.05.14`
  and `48.05.15`.
- **Charles Ehresmann**, "Les connexions infinitésimales dans un espace
  fibré différentiable," in *Colloque de topologie de Bruxelles*
  (1950) — the formal definition of a connection on a principal
  bundle as a horizontal distribution. Cite in `03.05.07` and
  `48.05.11`.
- **Warren Ambrose, Isadore Singer**, "A theorem on holonomy,"
  *Trans. AMS* 75 (1953) 428–443 — the holonomy theorem. Cite in
  `48.05.17`.
- **Marcel Berger**, "Sur les groupes d'holonomie homogène des
  variétés à connexion affine et des variétés riemanniennes,"
  *Bull. Soc. Math. France* 83 (1955) 279–330 — the holonomy
  classification. Already cited in `03.09.18-berger-holonomy.md`;
  the new upstream units (`48.05.16`–`48.05.18`) should cross-reference.
- **Heinz Hopf, Willi Rinow**, "Über den Begriff der vollständigen
  differentialgeometrischen Fläche," *Comment. Math. Helv.* 3
  (1931) 209–225 — Hopf-Rinow. Cite in `03.03.X1`.
- **Sumner Myers, Norman Steenrod**, "The group of isometries of a
  Riemannian manifold," *Annals of Math.* 40 (1939) 400–416 —
  Myers-Steenrod. Cite in `48.02.08`.
- **Kobayashi, Nomizu** (1963) — the canonical consolidation. Cite
  throughout as the in-Codex master anchor.

**Notation crosswalk.** KN-I writes:

- $P(M, G)$ for a principal $G$-bundle over $M$ (instead of $P \to M$).
- $\omega$ for the connection 1-form, $\Omega$ for the curvature 2-form.
- $\Theta$ for the torsion 2-form on $L(M)$, $\theta$ for the
  soldering / canonical $\mathbb{R}^n$-valued 1-form.
- $L(M) = \mathrm{Fr}(M)$ for the frame bundle.
- $\mathrm{Hol}(\omega, u)$ and $\mathrm{Hol}^0(\omega, u)$ for full
  and restricted holonomy at $u \in P$.
- $T(X, Y)$, $R(X, Y) Z$ for torsion and curvature as tensors
  (alongside $\Omega, \Theta$ as forms).

Tu *Differential Geometry* uses identical notation; Bleecker writes
$F = F_A$ for curvature (the gauge-theory convention) and $A$ for
$\omega$ (gauge potential). Lee writes $\nabla$ throughout and
introduces the principal-bundle viewpoint only in Ch. 17. The Codex
notation decision (per `docs/specs/UNIT_SPEC.md` §11) should: adopt
KN-I's $\omega$, $\Omega$, $\Theta$, $\theta$, $L(M)$ verbatim for the
principal-bundle units; *also* introduce the gauge-theory $A = \omega$,
$F = \Omega$ aliases in `03.07.05-yang-mills-action.md` and in
`48.05.11` (horizontal lift / parallel transport), with a
`§Notation` paragraph cross-referencing both.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in KN-I (full
  P1 audit). **Deferred** until a local PDF is on disk in
  `reference/fasttrack-texts/03-modern-geometry/Kobayashi-Nomizu-FoundationsVol1.pdf`.
  This stub works from canonical TOC knowledge + Codex internal
  evidence and is therefore **REDUCED**.
- **Kobayashi-Nomizu *Foundations of Differential Geometry, Vol. II***
  (Wiley 1969) — Fast Track 3.19. Deferred to a separate audit.
  Vol. II covers: complex and almost-complex structures, Hermitian
  and Kähler manifolds, characteristic classes via Chern-Weil
  (overlapping with Codex `03.06-characteristic-classes/`),
  homogeneous spaces, and submanifolds. The two volumes are typically
  cited together but are substantively distinct chapters of
  differential geometry.
- **Yang-Mills theory specifics** (instanton moduli spaces,
  Donaldson invariants, the Atiyah-Bott moment-map picture, BPST
  instantons) — Fast Track 3.20 (Donaldson-Kronheimer / Atiyah-Bott).
  Deferred. The `03.07.05-yang-mills-action.md` unit already exists
  as the entry point; the deeper Yang-Mills audit is its own pass.
- **Riemannian comparison geometry** (Toponogov, volume comparison,
  splitting theorems) — KN-I touches the Bonnet-Myers / Cartan-Hadamard
  end only; the full comparison-geometry programme is do Carmo
  *Riemannian Geometry* / Petersen *Riemannian Geometry*, not KN-I.
  Deferred.
- **Geometric analysis / Ricci flow** — far downstream of KN-I.
  Deferred indefinitely.
- **Foliations and $G$-structures beyond reduction of structure group**
  — KN-II §I covers $G$-structures more thoroughly. Deferred to the
  KN-II audit.

---

## §6 Acceptance criteria for FT equivalence (KN-I)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of KN-I's named theorems in Chs. I–VII map to Babel Bible units.
  Current ~20–25%; after priority-0 patches rises to ~40%; after
  priority-0+1 to ~75%; after priority-0+1+2 to ~92%; full ≥95%
  requires priority-3 (priority-4 is weaving, not new units).
- ≥90% of KN-I's worked examples (the canonical principal-bundle
  examples — $\mathrm{Fr}(M)$, $\mathrm{O}(M)$, the Hopf bundle
  $S^3 \to S^2$, Stiefel manifolds, symmetric spaces $G/H$) have
  either a direct unit or are referenced from a unit covering them.
- All five units in `03.05-bundles/` that currently list a
  `source: TODO_REF` for the KN-I citation (`03.05.04`, `03.05.07`,
  `03.05.09`, and via aliases `03.05.03`, `03.05.01`) have the
  TODO_REF resolved to a concrete chapter/section locator in KN-I.
- `03.09.18-berger-holonomy.md` cites the new upstream holonomy units
  (`48.05.16`–`48.05.18`) as prerequisites.
- `03.07.05-yang-mills-action.md` cites the new connection-reduction
  and parallel-transport units (`48.05.11`–`48.05.13`) as
  prerequisites via Pass-W weaving paragraphs.
- The Milnor-audit shared item (`03.03.X1` Levi-Civita / Hopf-Rinow)
  ships once and is cited by both audits without duplication.
- Notation decisions are recorded in `03.05.07`, `48.05.11`,
  `48.05.14`, `48.05.15` (see §4).
- Originator-prose citations of Levi-Civita 1917, Cartan 1923–25,
  Ehresmann 1950, Ambrose-Singer 1953, Hopf-Rinow 1931, and
  Myers-Steenrod 1939 are present in the relevant units.

The 5 priority-0 + 7 priority-1 units close the gauge-theory and
Riemannian-connection silent-dependency gaps and lift KN-I coverage
from ~25% to ~75%. Priority-2 closes the holonomy chain (the most
important remaining gap because it is load-bearing for the existing
`03.09.18-berger-holonomy.md`). Priority-3 closes the Ch. VI
transformations chapter and Bianchi packaging.

---

## §7 Sourcing

- **Not free.** KN-I is under active Wiley copyright (1963, reprint
  1996). No free legal PDF is hosted by the authors' institutions or
  by Wiley. Print copies (Wiley Classics Library reprint, ISBN
  0-471-15733-3) are readily available second-hand.
- **Local copy.** **Not present** in `reference/textbooks-extra/` or
  `reference/fasttrack-texts/03-modern-geometry/` at the time of this
  audit. The Fast Track entry holds only a cover-image stub
  (`reference/fast-track/images/Kobayashi-Nomizu-1-683x1024__72960fe9e3.jpg`).
  A scanned copy should be added to
  `reference/fasttrack-texts/03-modern-geometry/Kobayashi-Nomizu-FoundationsVol1.pdf`
  before the production pass on the priority-1 punch-list units, so
  that line-number citations can be resolved in the TODO_REF blocks
  of `03.05.04`, `03.05.07`, `03.05.09`.
- **Companion peer texts (cited in §1):**
  - **L. Tu**, *Differential Geometry: Connections, Curvature, and
    Characteristic Classes*, Graduate Texts in Mathematics 275,
    Springer 2017. The most accessible modern rewriting of KN-I;
    explicitly designed as a teaching version of KN-I + KN-II Ch. XII.
    The preferred secondary anchor for priority-1 units.
  - **M. Spivak**, *A Comprehensive Introduction to Differential
    Geometry, Vols. I–II*, Publish or Perish (3rd ed. 1999). The
    most geometric and historical treatment; Vol. II Ch. 4–8
    parallels KN-I Ch. II–IV with extensive figures and historical
    notes (Riemann's *Habilitationsschrift*, Levi-Civita's
    discovery of parallelism, Cartan's moving frames).
  - **D. Bleecker**, *Gauge Theory and Variational Principles*,
    Addison-Wesley 1981, Dover reprint 2005. The bridge from KN-I's
    principal-bundle calculus to physical gauge theory; Ch. 3 is the
    most accessible exposition of why physicists need KN-I and not
    Lee. Cite in `03.07.05-yang-mills-action.md` Pass-W weaving.
  - **J. M. Lee**, *Introduction to Smooth Manifolds*, Graduate
    Texts in Mathematics 218, Springer (2nd ed. 2013). The
    standard prerequisite. Anchor for the priority-0 manifold-layer
    units (`48.02.02`, `48.02.03`, `48.02.04`).
  - **J. M. Lee**, *Introduction to Riemannian Manifolds*, GTM 176,
    Springer (2nd ed. 2018). The standard Riemannian-geometry text;
    anchor for the priority-2 Riemannian units (`48.02.05`,
    `48.02.06`) alongside KN-I §IV.
  - **D. Joyce**, *Riemannian Holonomy Groups and Calibrated
    Geometry*, Oxford Graduate Texts in Mathematics 12, OUP 2007.
    The standard reference for special holonomy beyond Berger's
    classification; cited in `03.09.18` and the new priority-2
    holonomy units.
- **Originator-paper archive locations:**
  - Levi-Civita 1917 *Rend. Circ. Mat. Palermo* — open access via
    BDIM / Biblioteca Digitale Italiana di Matematica.
  - Cartan 1923–25 *Annales sci. ÉNS* — open access via NUMDAM.
  - Ehresmann 1950 *Colloque de topologie de Bruxelles* — collected
    works; print only.
  - Ambrose-Singer 1953 *Trans. AMS* — JSTOR.
  - Berger 1955 *Bull. Soc. Math. France* — open access via NUMDAM.
  - Hopf-Rinow 1931 *Comment. Math. Helv.* — Springer archive (paywall).
  - Myers-Steenrod 1939 *Annals* — JSTOR.
