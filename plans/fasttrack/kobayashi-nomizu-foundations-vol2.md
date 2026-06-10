# Kobayashi-Nomizu — *Foundations of Differential Geometry, Vol. II* (Fast Track 3.19) — Audit + Gap Plan

**Book:** Shoshichi Kobayashi, Katsumi Nomizu, *Foundations of Differential
Geometry, Volume II*. Interscience Tracts in Pure and Applied Mathematics 15,
Interscience Publishers (Wiley), 1969. xv + 470 pp. Reprinted Wiley Classics
Library 1996 (ISBN 0-471-15732-5). The canonical English-language reference
for **complex / Hermitian / Kähler differential geometry** and for the
**Chern-Weil construction of characteristic classes via curvature** of
connections on principal bundles.

**Fast Track entry:** 3.19. Sibling to KN-I (FT 3.18, audit shipped this
Cycle 4 — see `plans/fasttrack/kobayashi-nomizu-foundations-vol1.md`).
KN-II picks up where KN-I leaves off and assumes the entire Vol. I apparatus
(principal bundles, connections, curvature, holonomy, Cartan structural
equations) as prerequisite. The two volumes are routinely cited together
as **"KN-I + KN-II"**; the Babel Bible Fast Track lists them as separate entries
because the audit + production effort is substantively distinct.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units so that *Foundations of Differential Geometry Vol. II* (KN-II
hereafter) is covered to the equivalence threshold (≥95% effective coverage
of theorems, key examples, exercise pack, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Audit mode: REDUCED.** No local PDF is available
(`reference/textbooks-extra/` and `reference/fasttrack-texts/03-modern-geometry/`
checked — only the KN-I cover-image stub
`reference/fast-track/images/Kobayashi-Nomizu-1-683x1024__72960fe9e3.jpg`
is present; KN-II is under active Wiley copyright and was not retrieved
within the time budget). This pass works from the canonical KN-II table
of contents (Chs. VIII–XII + appendices, well-attested across the modern
complex-geometry literature), the peer-source crosswalks below
(Wells, Huybrechts, Voisin, Tu, Milnor-Stasheff), the Fast Track entry's
editorial framing, the in-Codex evidence that KN-II is already cited as
the master anchor for `03.06.06-chern-weil-homomorphism.md`
(via `Kobayashi-Nomizu Vol. II Ch. XII`), and the sibling KN-I audit's
findings. A full P1 line-number inventory is deferred to the production
pass when a local copy is on disk.

---

## §1 What KN-II is for

KN-II is the **canonical reference** for the complex-and-curvature half
of differential geometry. Where KN-I organises connections on principal
$G$-bundles, parallel transport, the Cartan structural equations, and
the holonomy programme over **real** manifolds with structure group
$\mathrm{GL}(n, \mathbb{R})$ or $\mathrm{O}(n)$, KN-II makes two pivotal
moves: (i) it pushes the connection-and-curvature calculus through to
**complex / almost-complex manifolds, Hermitian and Kähler manifolds,
and homogeneous spaces**, and (ii) it culminates in Chapter XII with the
**Chern-Weil homomorphism**, the curvature-based geometric definition of
characteristic classes that competes head-on with the homotopy-theoretic
definition (Milnor-Stasheff, classifying spaces) and provides the bridge
between Vol. I's connection theory and modern index theory / gauge theory
[ref: L. Tu, *Differential Geometry: Connections, Curvature, and
Characteristic Classes* (Graduate Texts in Mathematics 275, Springer 2017)
Preface ("written to bridge Kobayashi-Nomizu Vol. I §III + Vol. II §XII
into modern notation") and Chapters 22–25].

Distinctive content, organised by the five chapters of the volume:

1. **Chapter VIII — Submanifolds.** Second fundamental form $\mathrm{II}(X,
   Y) = (\nabla_X Y)^\perp$ of an isometric immersion $f: M \hookrightarrow
   \bar M$; the **Gauss, Codazzi, and Ricci equations** that relate the
   intrinsic curvature of $M$ to the curvature of $\bar M$ and the second
   fundamental form. **Totally geodesic** submanifolds, **minimal**
   submanifolds (mean curvature zero), and **totally umbilical** submanifolds.
   KN-II §VIII.1–§VIII.5. The chapter is the canonical reference for the
   submanifold-theoretic side of Riemannian geometry; compare do Carmo
   *Riemannian Geometry* Ch. 6 and Spivak *Comprehensive Introduction* Vol. III
   Chs. 1–4 [ref: M. P. do Carmo, *Riemannian Geometry* (Birkhäuser 1992)
   Ch. 6; M. Spivak, *A Comprehensive Introduction to Differential Geometry
   Vol. III* (Publish or Perish 3rd ed. 1999) Chs. 1–4].
2. **Chapter IX — Complex and almost-complex manifolds.** **Almost-complex
   structure** $J: TM \to TM$ with $J^2 = -\mathrm{id}$; type decomposition
   $TM \otimes \mathbb{C} = T^{1,0}M \oplus T^{0,1}M$; **Nijenhuis tensor**
   $N_J(X, Y) = [X, Y] + J[JX, Y] + J[X, JY] - [JX, JY]$. The
   **Newlander-Nirenberg integrability theorem** (1957): $J$ comes from a
   complex-manifold structure iff $N_J \equiv 0$. **Complex vector
   bundles** and the **canonical decomposition** $\Omega^k(M; \mathbb{C}) =
   \bigoplus_{p+q=k} \Omega^{p,q}(M)$; the operators $\partial$, $\bar\partial$,
   and the Dolbeault complex. **Hermitian metrics** on complex vector
   bundles and on $TM$. The **Chern connection** on a holomorphic Hermitian
   vector bundle: the unique connection compatible with both the holomorphic
   structure and the Hermitian metric. KN-II §IX.1–§IX.9. Compare Wells
   *Differential Analysis on Complex Manifolds* Chs. I–III and Huybrechts
   *Complex Geometry* Ch. 2 [ref: R. O. Wells, *Differential Analysis on
   Complex Manifolds* (Graduate Texts in Mathematics 65, Springer 3rd ed.
   2008, with new appendix by O. García-Prada) Chs. I–III; D. Huybrechts,
   *Complex Geometry: An Introduction* (Universitext, Springer 2005) Ch. 2].
3. **Chapter IX continued — Kähler manifolds.** A Hermitian manifold
   $(M, J, g)$ is **Kähler** iff the Kähler form $\omega = g(J\cdot, \cdot) \in
   \Omega^{1,1}(M)$ is closed, equivalently iff $\nabla J = 0$, equivalently
   iff the Chern connection equals the Levi-Civita connection. **Kähler
   identities** $[\Lambda, \partial] = -i \bar\partial^*$,
   $[\Lambda, \bar\partial] = i \partial^*$; the **Hodge decomposition**
   on compact Kähler manifolds $H^k(M; \mathbb{C}) = \bigoplus_{p+q=k}
   H^{p,q}(M)$ with $H^{p,q} = \overline{H^{q,p}}$; the **$\partial\bar\partial$-lemma**;
   **hard Lefschetz** $L^k: H^{n-k}(M) \xrightarrow{\sim} H^{n+k}(M)$. KN-II
   §IX.7–§IX.9 sketches these; the deep proofs are deferred to the
   Hodge-theoretic literature [ref: C. Voisin, *Hodge Theory and Complex
   Algebraic Geometry I* (Cambridge Studies in Advanced Mathematics 76,
   CUP 2002) Chs. 6–8 — the canonical modern treatment of Kähler-Hodge
   theory; D. Huybrechts, *Complex Geometry* §3.2–§3.3]. Originator-paper
   citation: K. Kodaira, "On Kähler varieties of restricted type," *Annals
   of Math.* 60 (1954) 28–48 — the foundational paper establishing the
   Kodaira embedding and projective-embedding criterion for compact Kähler
   manifolds.
4. **Chapter X — Homogeneous spaces.** A **homogeneous space** is a quotient
   $G/H$ for a Lie group $G$ and closed subgroup $H$; KN-II develops the
   theory of **invariant** connections on $G/H$, the **canonical connection**
   on a **reductive** homogeneous space (where $\mathfrak{g} = \mathfrak{h}
   \oplus \mathfrak{m}$ with $\mathrm{Ad}(H)\mathfrak{m} \subseteq \mathfrak{m}$),
   the **Nomizu construction** of $G$-invariant affine connections, and
   the specialisation to **symmetric spaces** (where in addition $[\mathfrak{m},
   \mathfrak{m}] \subseteq \mathfrak{h}$). The Cartan classification of
   irreducible Riemannian symmetric spaces is **stated and referenced**;
   the proof is deferred to Helgason *Differential Geometry, Lie Groups,
   and Symmetric Spaces*. KN-II §X.1–§X.6. Compare Helgason Chs. IV–VIII
   [ref: S. Helgason, *Differential Geometry, Lie Groups, and Symmetric
   Spaces* (Graduate Studies in Mathematics 34, AMS 2001) Chs. IV–VIII].
5. **Chapter XI — Transformations of complex / Hermitian / Kähler manifolds.**
   **Holomorphic transformations**, **infinitesimal holomorphic
   transformations** (holomorphic vector fields with $\mathcal{L}_X J = 0$),
   **isometries of Hermitian and Kähler manifolds**, and the **Bochner
   technique** (using Weitzenböck-style curvature identities to obtain
   vanishing theorems for Killing fields and harmonic forms on manifolds
   with positive curvature). KN-II §XI.1–§XI.5.
6. **Chapter XII — Characteristic classes (the Chern-Weil construction).**
   The technical and conceptual climax of the volume. For a principal
   $G$-bundle $P \to M$ with connection $\omega$ and curvature $\Omega$,
   the **Chern-Weil homomorphism** is the map
   $w: I^*(\mathfrak{g}) \to H^*_{\mathrm{dR}}(M)$
   from the algebra of $\mathrm{Ad}(G)$-invariant polynomials on $\mathfrak{g}$
   to de Rham cohomology, sending an invariant polynomial $f$ of degree $k$
   to the cohomology class of $f(\Omega, \ldots, \Omega) \in \Omega^{2k}(M)$.
   **Chern classes** $c_i(E) = [\det(I + \tfrac{i}{2\pi} \Omega)]_{2i}$ for
   complex vector bundles, **Pontryagin classes** $p_i$, the **Euler class**
   from the Pfaffian, the **Todd class**, the **$\hat A$-class**, the **$L$-class**.
   The **transgression** formula computing the cohomology class of $w(f)$
   via a Chern-Simons form. **Independence of connection** (the central
   theorem). The bridge to Milnor-Stasheff's homotopy-theoretic definition
   (via classifying spaces) is stated but proved only as compatibility of
   the two definitions. KN-II §XII.1–§XII.5. Compare Milnor-Stasheff
   Appendix C and Tu Chs. 22–25 [ref: J. Milnor, J. Stasheff, *Characteristic
   Classes* (Annals of Math. Studies 76, Princeton University Press 1974)
   Appendix C — the canonical statement of the Chern-Weil construction in
   the topology-textbook tradition; L. Tu, *Differential Geometry: Connections,
   Curvature, and Characteristic Classes* (GTM 275, Springer 2017) Chs. 22–25
   — the modern teaching version of KN-II §XII]. Originator-paper citations:
   S.-S. Chern, "Characteristic classes of Hermitian manifolds," *Annals of
   Math.* 47 (1946) 85–121 — the originating paper for the curvature
   construction of complex characteristic classes; A. Weil, **unpublished
   lecture notes 1949** (circulated as a mimeograph; later collected in
   *Œuvres scientifiques*), which extended Chern's curvature recipe to all
   principal $G$-bundles via invariant polynomials — this is the work that
   the Babel Bible unit `03.06.06-chern-weil-homomorphism.md` is named after.
7. **Editorial signature.** KN-II is uncompromisingly **bundle-and-curvature
   first** in the same spirit as KN-I. Complex manifolds are introduced
   via the almost-complex / integrability route (not via local holomorphic
   coordinates as in a complex-analysis text); Kähler manifolds are
   identified by the Kähler condition $d\omega = 0$ *after* the almost-
   complex / Chern-connection apparatus is in place; characteristic classes
   are built from curvature *after* the full Vol. I + Vol. II §IX curvature
   calculus is available. This is the *opposite* order from Wells (which
   starts from sheaf cohomology and local Dolbeault) and Huybrechts
   (which starts from local complex geometry); it is the **same** order as
   Voisin (which also runs Hodge theory through the curvature-and-connection
   route) and Tu (which is explicitly a teaching rewrite of KN-II §XII).
   The principal-bundle-first ordering is what makes KN-II the natural
   bridge to **gauge theory** (Yang-Mills measures the curvature norm of
   a connection on a Hermitian or unitary bundle) and **index theory**
   (Atiyah-Singer expresses the index of an elliptic operator as the
   pairing of characteristic classes against the fundamental class)
   [ref: Tu Preface; D. Salamon, *Spin Geometry and Seiberg-Witten Invariants*
   (preprint, ETH Zürich 2000) §1 — both citing KN-II §XII as the canonical
   bridge between connection theory and characteristic classes].
8. **Peer-source contrast vs Milnor-Stasheff.** KN-II §XII and Milnor-Stasheff
   give two **different** definitions of characteristic classes that
   coincide in their cohomological output: KN-II builds $c_i \in H^{2i}_{\mathrm{dR}}
   (M; \mathbb{R})$ from the curvature of any connection on a complex
   vector bundle (the **differential-geometric** definition); Milnor-Stasheff
   builds $c_i \in H^{2i}(M; \mathbb{Z})$ axiomatically and via the
   classifying-map construction (the **homotopy-theoretic / topological**
   definition). The two agree under the de Rham comparison
   $H^*(M; \mathbb{Z}) \otimes \mathbb{R} \cong H^*_{\mathrm{dR}}(M; \mathbb{R})$
   for the Chern classes valued in $\mathbb{R}$ but disagree on torsion
   (Stiefel-Whitney classes, the integral lift of Chern classes), which is
   why both viewpoints are needed [ref: Milnor-Stasheff Appendix C; Voisin
   §11 — the explicit compatibility statement; Bott-Tu §20–§23 — runs both
   constructions and shows compatibility].

KN-II is **not** a first textbook on complex manifolds (Wells / Huybrechts
serve that role at a more accessible pace) and **not** a first textbook on
characteristic classes (Milnor-Stasheff serves that role with simpler
axiomatic foundations). The canonical "before KN-II" sequence is KN-I →
Wells → KN-II, or KN-I → Huybrechts → KN-II. The canonical "after KN-II"
sequence is KN-II → Voisin (deep Hodge theory) → Donaldson-Kronheimer
(four-manifold gauge theory) → Joyce (special holonomy / Calabi-Yau).

---

## §2 Coverage table (Babel Bible vs KN-II)

Cross-referenced against the current Babel Bible corpus. ✓ = covered,
△ = partial / different framing, ✗ = not covered. KN-II material maps
primarily to `03-modern-geometry/02-manifolds/`,
`03-modern-geometry/05-bundles/`,
`03-modern-geometry/06-characteristic-classes/`, the
`05-symplectic/almost-complex/` chapter, the
`04-algebraic-geometry/09-hodge/` chapter, and adjacent.

| KN-II topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Ch. VIII — submanifolds** | | | |
| Isometric immersion, second fundamental form $\mathrm{II}$ | — | ✗ | **Gap.** No anchor unit. Cited downstream (e.g. in `05-symplectic/lagrangian/` Lagrangian-submanifold framing) without a definitional unit. |
| Gauss equation | — | ✗ | **Gap.** Foundational; standard prereq for Riemannian comparison geometry. |
| Codazzi-Mainardi equation | — | ✗ | **Gap.** |
| Ricci equation (normal-bundle curvature) | — | ✗ | **Gap.** |
| Totally geodesic / minimal / totally umbilical submanifolds | — | ✗ | **Gap.** Cited informally in symplectic units (Lagrangian = totally null + half-dim) without an anchor. |
| **Ch. IX — complex and almost-complex manifolds** | | | |
| Almost-complex structure $J: TM \to TM$, $J^2 = -\mathrm{id}$ | `05.06.01-almost-complex.md` | △ | Shipped in the **symplectic** chapter (not the manifolds chapter), framed as "almost-complex structure on a symplectic manifold". KN-II frames $J$ as a manifold-level structure independent of any symplectic form; the Babel Bible framing is narrower. |
| Nijenhuis tensor $N_J$ | △ (inside `05.06.03`) | △ | Mentioned in `05.06.03-newlander-nirenberg.md` as the integrability obstruction. No dedicated unit; not anchored to a manifold-level $J$. |
| Type decomposition $TM \otimes \mathbb{C} = T^{1,0} \oplus T^{0,1}$ | — | ✗ | **Gap.** Foundational; not anchored as its own unit. |
| Newlander-Nirenberg integrability theorem | `05.06.03-newlander-nirenberg.md` | ✓ | Shipped; master anchor Newlander-Nirenberg 1957, Hörmander, Huybrechts, Voisin. Good coverage. |
| Dolbeault complex $(\Omega^{p, *}(M), \bar\partial)$ | — | ✗ | **Gap.** Cited in `05.06.03` Master tier without an anchor unit. |
| Dolbeault cohomology $H^{p,q}_{\bar\partial}(M)$ | — | ✗ | **Gap.** Load-bearing for Hodge theory and Kodaira-vanishing. |
| Complex vector bundle | `03.05.08-complex-vector-bundle.md` | ✓ | Shipped. |
| Holomorphic vector bundle (definition, transition functions) | — | ✗ | **Gap.** Distinct from smooth complex bundle. Cited in `04.09.02-kodaira-vanishing.md` without an anchor. |
| Hermitian metric on a complex vector bundle | — | ✗ | **Gap.** |
| Chern connection (unique compatible connection on a holomorphic Hermitian bundle) | — | ✗ | **Gap.** Distinctive to complex differential geometry; load-bearing for the Chern-class curvature formula. |
| **Ch. IX — Kähler manifolds** | | | |
| Hermitian metric on a complex manifold | — | ✗ | **Gap.** |
| Kähler form $\omega = g(J\cdot, \cdot)$; Kähler condition $d\omega = 0$ | — | ✗ | **Gap.** Standard reference for the entire Kähler-Hodge-theoretic literature. |
| Equivalence: $d\omega = 0 \Leftrightarrow \nabla J = 0 \Leftrightarrow$ Chern = Levi-Civita | — | ✗ | **Gap.** The defining theorem of Kähler geometry. |
| Kähler identities $[\Lambda, \partial] = -i \bar\partial^*$ etc. | — | ✗ | **Gap.** |
| Hodge decomposition for compact Kähler manifolds $H^k(\mathbb{C}) = \bigoplus_{p+q=k} H^{p,q}$ | `04.09.01-hodge-decomposition.md` | △ | A `hodge-decomposition` unit ships in `04-algebraic-geometry/09-hodge/`; it covers the algebraic-geometric framing but may not give the KN-II Kähler-manifold proof. To verify in the production pass. |
| Kodaira vanishing theorem | `04.09.02-kodaira-vanishing.md` | ✓ | Shipped in algebraic geometry chapter; master anchor Kodaira 1954. |
| $\partial\bar\partial$-lemma | — | ✗ | **Gap.** Load-bearing for formality of compact Kähler manifolds. |
| Hard Lefschetz $L^k: H^{n-k} \to H^{n+k}$ | — | ✗ | **Gap.** |
| **Ch. X — homogeneous spaces** | | | |
| Homogeneous space $G/H$ | △ | △ | Touched in `03-modern-geometry/03-lie/` (Lie-group chapter) and in `05-symplectic/coadjoint/` (coadjoint orbits as $G/G_\mu$). No dedicated "homogeneous-space" unit at manifold level. |
| Reductive decomposition $\mathfrak{g} = \mathfrak{h} \oplus \mathfrak{m}$ | — | ✗ | **Gap.** Foundational for invariant-connection theory. |
| Canonical connection on a reductive homogeneous space | — | ✗ | **Gap.** Distinctive to KN-II §X. |
| Nomizu construction (invariant affine connections) | — | ✗ | **Gap.** |
| Symmetric space (Lie-triple condition $[\mathfrak{m},\mathfrak{m}] \subseteq \mathfrak{h}$) | — | ✗ | **Gap.** Cited via `coadjoint` and `03.09.18-berger-holonomy.md` (Berger's list includes symmetric spaces) without an anchor. |
| Cartan classification of irreducible Riemannian symmetric spaces | — | ✗ | **Gap.** Referenced from `03.09.18`. |
| **Ch. XI — transformations** | | | |
| Holomorphic transformation, infinitesimal holomorphic vector field | — | ✗ | **Gap.** |
| Isometries of Hermitian / Kähler manifolds | — | ✗ | **Gap.** |
| Bochner technique (vanishing theorems via curvature) | — | ✗ | **Gap.** Load-bearing for Bonnet-Myers-style results in Kähler setting. |
| **Ch. XII — characteristic classes via Chern-Weil** | | | |
| Invariant polynomial $f \in I^*(\mathfrak{g})$ | `03.06.05-invariant-polynomial.md` | ✓ | Shipped. |
| Chern-Weil homomorphism $I^*(\mathfrak{g}) \to H^*_{\mathrm{dR}}(M)$ | `03.06.06-chern-weil-homomorphism.md` | ✓ | Shipped; master anchor "Kobayashi-Nomizu Vol. II Ch. XII". The unit's `references` block has a `source: TODO_REF` for the KN-II citation — the production pass should resolve it. |
| Independence-of-connection theorem | △ (inside `03.06.06`) | △ | Stated in `03.06.06` Master tier; proof is sketched but not at line-number granularity. |
| Chern classes $c_i(E) = [\det(I + \tfrac{i}{2\pi}\Omega)]$ via curvature | `03.06.04-pontryagin-chern-classes.md` | △ | Shipped axiomatically + with $\mathbb{CP}^n$ worked example; the **explicit curvature formula** is in `03.06.06` Master tier but not as a standalone unit. |
| Pontryagin classes via curvature | `03.06.04-pontryagin-chern-classes.md` | △ | Same as above — axiomatic + reference to Chern-Weil construction; the curvature formula is partial. |
| Euler class via the Pfaffian of curvature | △ | △ | Pfaffian computation is referenced in `03.06.06` Master tier but no dedicated unit. The de Rham Euler class is in `03.04.09-thom-global-angular-form.md` via the Thom form. |
| Chern-Simons transgression form | — | ✗ | **Gap.** Distinctive to KN-II §XII.4 (and a load-bearing concept for gauge theory and TQFT). Referenced informally in `03.07.05-yang-mills-action.md` (Chern-Simons action) without a curvature-side anchor. |
| Todd class, $\hat A$-class, $L$-class via curvature | △ | △ | $\hat A$ appears in `03.09.10` (Atiyah-Singer), $L$ in `03.06.04`; the Chern-Weil curvature formulas are partial. |
| Compatibility of Chern-Weil and Milnor-Stasheff definitions (de Rham comparison) | — | ✗ | **Gap.** The unit `03.06.06` references both; the explicit statement and proof of compatibility is not anchored. |
| **Appendices** | | | |
| Integration on complex manifolds (real and complex orientation) | — | ✗ | Touched implicitly; KN-II Appendix material is short. |

**Aggregate coverage estimate:** ~25–30% of KN-II has corresponding Codex
units. Chapter XII (Chern-Weil) is **the best-covered** chapter at ~60%
because `03.06.05` + `03.06.06` + `03.06.04` form the Chern-Weil spine and
the Milnor-Stasheff audit has already flagged the remaining gaps. Chapter
IX (complex / almost-complex / Kähler) is **~15% covered**: Newlander-Nirenberg
ships, the almost-complex structure ships (with a symplectic framing), but
holomorphic bundles, Chern connection, Hermitian metric, Kähler form, Kähler
identities, $\partial\bar\partial$-lemma, and hard Lefschetz are all
**gaps**. Chapter VIII (submanifolds) is **~0% covered**: no Gauss-Codazzi-Ricci
equations, no second fundamental form. Chapter X (homogeneous spaces) is
**~5% covered**: touched in Lie-group and coadjoint chapters but no
canonical-connection unit. Chapter XI (transformations) is **~0% covered**:
no Bochner technique, no Kähler-isometry framework.

**Silent KN-II dependencies in the Babel Bible.** The audit reveals a cluster
of units that cite KN-II as their master anchor (directly or implicitly)
but whose load-bearing prerequisites are uncovered:

1. **`03.06.06-chern-weil-homomorphism.md`** (master = "Kobayashi-Nomizu
   Vol. II Ch. XII; Milnor-Stasheff Appendix C") — `source: TODO_REF` for
   the KN-II citation. Silently depends on a missing **Chern connection**
   unit (for the complex-bundle special case) and on the missing
   **transgression / Chern-Simons** machinery.
2. **`04.09.01-hodge-decomposition.md`** — covers the algebraic-geometric
   framing of Hodge decomposition; the KN-II **Kähler-manifold proof** via
   Kähler identities is the load-bearing differential-geometric route and
   has no anchor in the Babel Bible.
3. **`04.09.02-kodaira-vanishing.md`** — cites Kodaira 1954 directly; the
   prerequisite **holomorphic bundle** and **Hermitian metric / Chern
   connection** layer is missing.
4. **`05.06.01-almost-complex.md`** — frames $J$ as a structure on a
   symplectic manifold; the KN-II manifold-level framing (independent of
   any symplectic form) is the wider concept.
5. **`05.06.03-newlander-nirenberg.md`** — cites Voisin and Huybrechts;
   the prerequisite **type decomposition** $T^{1,0} \oplus T^{0,1}$ and
   **Dolbeault complex** are not anchored.
6. **`03.09.18-berger-holonomy.md`** — Berger's list includes Kähler
   ($\mathrm{U}(n)$) and Calabi-Yau ($\mathrm{SU}(n)$) holonomy; the
   prerequisite **Kähler-manifold** and **Calabi-Yau** definitions are
   not anchored.
7. **`03.07.05-yang-mills-action.md`** — Yang-Mills lives on a Hermitian
   bundle with a $\mathrm{U}(n)$-connection; the prerequisite **Hermitian
   bundle** and **Chern connection** layer overlaps with the gaps above.

Net effect: the existing Codex `06-characteristic-classes/` chapter cites
KN-II as its canonical reference and covers ~60% of the relevant material;
the `02-manifolds/` chapter covers ~10% of the complex / Kähler prerequisite
layer; the `04-algebraic-geometry/09-hodge/` chapter covers the Hodge /
Kodaira downstream at ~70% via algebraic-geometric framing but with the
differential-geometric KN-II proof route absent. The KN-II audit is
therefore **load-bearing across four chapters**: `02-manifolds/`,
`05-bundles/`, `06-characteristic-classes/`, and `04.09-hodge/`.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — prerequisite chain shared with KN-I and Milnor-Stasheff
audits:**

These are listed here because KN-II assumes them; they are already on the
KN-I punch-list (FT 3.18) and / or the Milnor-Stasheff punch-list (FT 3.08).
Ship once, cite from both.

- **`48.05.14` Torsion tensor and the two Cartan structural equations**
  (KN-I punch-list, priority 1) — load-bearing for KN-II §IX (Chern
  connection is the unique connection with $T^{0,2} = 0$ on a holomorphic
  Hermitian bundle).
- **`03.03.X1` Levi-Civita connection, geodesics, exp, Hopf-Rinow**
  (KN-I punch-list, priority 1) — load-bearing for KN-II §VIII (submanifold
  geometry) and §IX (Kähler ⇔ Chern = Levi-Civita).
- **`48.05.13` Associated bundle and induced connection** (KN-I punch-list,
  priority 1) — load-bearing for KN-II §XII (curvature of an associated
  vector bundle is what enters Chern-Weil).

**Priority 1 — Ch. IX core (complex / almost-complex / Hermitian / Kähler):**

1. **`48.02.09` Almost-complex structure (manifold-level).** $J: TM \to TM$
   with $J^2 = -\mathrm{id}$; type decomposition $TM \otimes \mathbb{C}
   = T^{1,0}M \oplus T^{0,1}M$; the Nijenhuis tensor $N_J(X, Y)$. Sits
   in `02-manifolds/` (per the KN-I audit, this chapter is wide open).
   This is a **manifold-level lift** of the existing `05.06.01-almost-complex.md`
   (which lives in the symplectic chapter and uses the symplectic framing).
   Cross-reference both. KN-II §IX.1–§IX.2 anchor; Wells §I.1 + Huybrechts §2.6
   secondary. ~1500 words. Three-tier.
2. **`48.02.10` Complex manifold and the Dolbeault complex.** Holomorphic
   atlas; $\Omega^{p,q}(M)$ as smooth $(p,q)$-forms; the operators $\partial,
   \bar\partial$ with $\bar\partial^2 = 0$; the Dolbeault complex
   $(\Omega^{p, *}, \bar\partial)$ and Dolbeault cohomology $H^{p,q}_{\bar\partial}(M)$.
   KN-II §IX.2–§IX.3 anchor; Wells Ch. II + Huybrechts §2.6 secondary.
   ~1800 words. Three-tier.
3. **`48.05.19` Holomorphic vector bundle.** Definition (transition
   functions holomorphic), Dolbeault $\bar\partial_E$ on $\Omega^{p, *}(E)$,
   the Koszul-Malgrange theorem that holomorphic structures on a smooth
   complex bundle ↔ flat $\bar\partial$-operators. KN-II §IX.4 anchor;
   Wells §III.1 secondary; Huybrechts §2.6 secondary. ~1500 words. Three-tier.
   **Closes the silent gap behind `04.09.02-kodaira-vanishing.md`.**
4. **`48.05.20` Hermitian metric on a complex bundle; Chern connection.**
   Hermitian metric $h$ on a complex bundle $E$; the **unique** connection
   $\nabla^h$ compatible with both the holomorphic structure $\bar\partial_E$
   and the Hermitian metric (the Chern connection). Formula in local
   holomorphic frame: $\nabla^h = \partial + h^{-1}\partial h$. KN-II §IX.5
   anchor; Wells §III.2; Huybrechts §4.2 secondary. ~1500 words. Three-tier.
   **Closes the silent gap behind `03.06.06-chern-weil-homomorphism.md`
   for the complex-bundle special case.**
5. **`48.02.11` Hermitian manifold and the Kähler form.** Hermitian metric
   $g$ on $(M, J)$ with $g(JX, JY) = g(X, Y)$; the Kähler form $\omega \in
   \Omega^{1,1}(M)$ defined by $\omega(X, Y) = g(JX, Y)$; **Kähler condition**
   $d\omega = 0$. The equivalence theorem: $d\omega = 0 \Leftrightarrow
   \nabla J = 0 \Leftrightarrow$ Chern connection on $TM$ equals the
   Levi-Civita connection. KN-II §IX.6–§IX.7 anchor; Huybrechts §3.1
   secondary; Voisin §3.1 secondary. ~2000 words. Three-tier. **Master tier
   of any Hodge-theoretic unit downstream depends on this.**
6. **`48.02.12` Kähler identities and the Hodge decomposition (Kähler version).**
   The Kähler identities $[\Lambda, \partial] = -i\bar\partial^*$,
   $[\Lambda, \bar\partial] = i\partial^*$; the consequence that
   $\Delta_d = 2\Delta_{\bar\partial} = 2\Delta_\partial$ on a compact
   Kähler manifold; the **Hodge decomposition**
   $H^k(M; \mathbb{C}) = \bigoplus_{p+q=k} H^{p,q}(M)$ with $H^{p,q} =
   \overline{H^{q,p}}$. KN-II §IX.7 anchor; Voisin §6 secondary; Huybrechts §3.2
   secondary. ~2000 words. Master-tier dominant; Intermediate gives the
   statement of Hodge decomposition only. **Sharpens
   `04.09.01-hodge-decomposition.md` with the differential-geometric proof
   route.**

**Priority 2 — Ch. XII Chern-Weil deepenings + Ch. VIII submanifolds:**

7. **`03.06.07` Chern-Simons / transgression form.** For a connection
   $\omega$ on a principal $G$-bundle with curvature $\Omega$, the
   transgression form $TP(\omega) \in \Omega^{2k-1}(P)$ with
   $d TP(\omega) = P(\Omega^k)$ for an invariant polynomial $P$ of
   degree $k$. The Chern-Simons 3-form
   $CS(\omega) = \mathrm{tr}(\omega \wedge d\omega + \tfrac{2}{3} \omega
   \wedge \omega \wedge \omega)$ as the canonical transgression of the
   second Chern class. KN-II §XII.4 anchor; Chern-Simons 1974 originator
   citation. ~1500 words. Master-tier dominant. **Bridges
   `03.06.06-chern-weil-homomorphism.md` to
   `03.07.05-yang-mills-action.md` (Chern-Simons action) and to topological
   field theory.**
8. **`03.06.18` Compatibility of Chern-Weil and Milnor-Stasheff Chern classes.**
   The de Rham comparison: the curvature class
   $[\tfrac{i}{2\pi} \mathrm{tr}(\Omega)] \in H^2_{\mathrm{dR}}(M; \mathbb{R})$
   equals the image of the topological $c_1(E) \in H^2(M; \mathbb{Z})$ under
   $H^*(M; \mathbb{Z}) \to H^*(M; \mathbb{R}) \cong H^*_{\mathrm{dR}}(M; \mathbb{R})$.
   Generalisation to all Chern classes. KN-II §XII.5 anchor; Milnor-Stasheff
   Appendix C secondary. ~1500 words. Master-tier dominant. **Shared with
   the Milnor-Stasheff punch-list (FT 3.08, priority-3); ship once and
   cite from both audits.**
9. **`48.02.13` Isometric immersion and the second fundamental form.**
   Isometric immersion $f: M \hookrightarrow \bar M$ of Riemannian manifolds;
   the second fundamental form $\mathrm{II}: TM \times TM \to NM$; the
   mean curvature vector $H = \mathrm{tr}\,\mathrm{II}$. KN-II §VIII.1
   anchor; do Carmo Ch. 6 secondary. ~1500 words. Three-tier.
10. **`48.02.14` Gauss, Codazzi, and Ricci equations.** The three structure
    equations relating the curvature of $M$, the curvature of $\bar M$,
    and the second fundamental form. Worked example: $S^n \subseteq
    \mathbb{R}^{n+1}$ with the standard immersion. KN-II §VIII.2–§VIII.4
    anchor; do Carmo Ch. 6 secondary. ~2000 words. Three-tier.

**Priority 3 — Ch. X homogeneous spaces + Ch. XI transformations:**

11. **`03.03.X2` Homogeneous space $G/H$ and reductive decomposition.**
    Quotient manifold structure on $G/H$ for $G$ a Lie group and $H$ a
    closed subgroup; reductive decomposition $\mathfrak{g} = \mathfrak{h}
    \oplus \mathfrak{m}$ with $\mathrm{Ad}(H)\mathfrak{m} \subseteq
    \mathfrak{m}$. KN-II §X.1–§X.2 anchor; Helgason Ch. IV secondary.
    ~1500 words. Three-tier. **Sits in the `03-lie/` chapter; lateral
    connection to `05-symplectic/coadjoint/` (coadjoint orbits as
    homogeneous spaces).**
12. **`03.03.X3` Canonical connection on a reductive homogeneous space;
    symmetric space.** The Nomizu construction of $G$-invariant affine
    connections; the canonical connection (corresponding to $\mathrm{Ad}(H)$-
    invariant bilinear form on $\mathfrak{m}$); specialisation to symmetric
    spaces ($[\mathfrak{m}, \mathfrak{m}] \subseteq \mathfrak{h}$).
    Pointer to the Cartan classification of irreducible Riemannian symmetric
    spaces (statement only). KN-II §X.2–§X.6 anchor; Helgason Chs. IV, VIII
    secondary. ~1800 words. Master-tier dominant.
13. **`48.02.15` Bochner technique and curvature vanishing theorems.**
    Weitzenböck formula on a Riemannian manifold; vanishing of harmonic
    forms and Killing fields under curvature-positivity assumptions; the
    Kähler-manifold specialisation (vanishing of $H^{p, 0}$ on a manifold
    with positive Ricci form). KN-II §XI.4–§XI.5 anchor; Lawson-Michelsohn
    §II.8 secondary. ~1500 words. Master-tier dominant.

**Priority 4 — survey pointers (Master-only, weaving edits):**

14. **Pointer in `03.06.06-chern-weil-homomorphism.md`** to the new
    `48.05.20` (Chern connection) and `03.06.07` (Chern-Simons) units,
    and resolve the `source: TODO_REF` to KN-II §XII with concrete
    section locators. Single-paragraph weaving edit; resolves the
    audit-flagged TODO_REF.
15. **Pointer in `04.09.01-hodge-decomposition.md`** to the new `48.02.12`
    (Kähler identities + Kähler Hodge decomposition) as the
    differential-geometric route to the same theorem. Single-paragraph
    weaving edit.
16. **Pointer in `04.09.02-kodaira-vanishing.md`** to the new `48.05.19`
    (holomorphic bundle) and `48.05.20` (Hermitian metric / Chern
    connection) as the prerequisite layer.
17. **Pointer in `05.06.01-almost-complex.md`** to the new `48.02.09`
    (manifold-level almost-complex structure) as the upstream generic
    framing; the symplectic specialisation in `05.06.01` becomes a
    canonical example of the generic concept.
18. **Pointer in `05.06.03-newlander-nirenberg.md`** to `48.02.09` and
    `48.02.10` (Dolbeault complex) as the prerequisite layer; resolve
    the `TODO_REF` blocks accordingly.
19. **Pointer in `03.09.18-berger-holonomy.md`** to `48.02.11` (Kähler
    manifold) for the $\mathrm{U}(n)$ holonomy case and a forward
    pointer to the (deferred) Calabi-Yau unit for $\mathrm{SU}(n)$.
20. **Pointer in `03.07.05-yang-mills-action.md`** to `03.06.07` (Chern-Simons)
    for the Chern-Simons action specialisation.

---

## §4 Implementation sketch (P3 → P4)

For a full KN-II coverage pass, priority-0 + priority-1 are the minimum
set and close the complex-and-Chern-Weil silent-dependency gaps across
four chapters. Realistic production estimate (mirroring earlier Brown /
Bott-Tu / Milnor / KN-I batches):

- ~3.5 hours per unit. KN-II units skew slightly above the corpus
  average (and the KN-I average) because the Master tier requires careful
  juggling of (i) the principal-bundle calculus from Vol. I, (ii) the
  complex-bundle / holomorphic / Hermitian layer, and (iii) the
  curvature-formula bookkeeping (Pfaffians, determinants of $\Omega$).
- **Priority 0:** 3 units shared with the KN-I + Milnor-Stasheff punch-lists
  (do not double-count); flagged here for prerequisite tracking only.
- **Priority 1:** 6 units × ~3.5 hours = **~21 hours**. Heart of the audit;
  closes the complex / Kähler gap in one batch and supplies prerequisites
  for the Hodge chapter and the Chern-Weil unit.
- **Priority 2:** 4 units × ~3.5 hours = **~14 hours**. Closes the
  Chern-Simons / transgression gap, the de Rham–topological compatibility
  gap, and the submanifold-equations gap (Ch. VIII).
- **Priority 3:** 3 units × ~3 hours = **~9 hours**. Closes Ch. X
  (homogeneous spaces) and Ch. XI (Bochner technique).
- **Priority 4:** 7 weaving edits × ~30 min = **~3.5 hours**.
- **Total for full coverage: ~47–48 hours**, roughly a focused 7–10 day
  window. Priority-0 (carried by other audits) + priority-1 alone is
  ~21 hours and closes the load-bearing complex / Kähler gaps; with
  priority-2 (~14 hours more) the Chern-Weil chapter reaches FT-equivalence.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **S.-S. Chern**, "Characteristic classes of Hermitian manifolds,"
  *Annals of Math.* 47 (1946) 85–121 — the originating paper for the
  curvature construction of complex characteristic classes. **Cite in
  `03.06.06`** (audit-flagged TODO_REF resolution) **and in `48.05.20`**
  (Chern connection — historically derived from this paper).
- **André Weil**, unpublished 1949 lecture notes (mimeograph; later in
  *Œuvres scientifiques* Vol. III) — generalised Chern's curvature recipe
  to all principal $G$-bundles via invariant polynomials. **Cite in
  `03.06.06`** as the second half of the "Chern-Weil" name.
- **A. Newlander, L. Nirenberg**, "Complex analytic coordinates in almost
  complex manifolds," *Annals of Math.* 65 (1957) 391–404 — the
  integrability theorem. **Already cited in `05.06.03`** (TODO_REF block);
  resolve concretely during the production pass and **cross-cite in
  `48.02.09`** (manifold-level almost-complex structure).
- **K. Kodaira**, "On Kähler varieties of restricted type," *Annals of
  Math.* 60 (1954) 28–48 — the foundational paper for the compact-Kähler-
  manifold programme (Kodaira embedding, projectivity criterion).
  **Cite in `48.02.11`** (Kähler manifolds) **and in `04.09.02`**
  (Kodaira vanishing — already cited there).
- **S.-S. Chern, J. Simons**, "Characteristic forms and geometric
  invariants," *Annals of Math.* 99 (1974) 48–69 — the originating
  paper for the Chern-Simons transgression form. **Cite in `03.06.07`**.
- **W. V. D. Hodge**, *The Theory and Applications of Harmonic Integrals*
  (Cambridge University Press 1941, 2nd ed. 1952) — originating the
  Hodge decomposition. **Cite in `48.02.12`**.
- **K. Nomizu**, "Invariant affine connections on homogeneous spaces,"
  *Amer. J. Math.* 76 (1954) 33–65 — the Nomizu construction. **Cite in
  `03.03.X3`**.
- **S. Bochner**, "Vector fields and Ricci curvature," *Bull. AMS* 52
  (1946) 776–797 — the Bochner technique. **Cite in `48.02.15`**.
- **Kobayashi, Nomizu** (1969) — the canonical consolidation. **Cite
  throughout** as the in-Codex master anchor.

**Notation crosswalk.** KN-II writes:

- $J$ for the almost-complex structure; $N_J$ for the Nijenhuis tensor.
- $T^{1,0}$ and $T^{0,1}$ for the type-$(1,0)$ and type-$(0,1)$
  subbundles of $T_{\mathbb{C}} M$.
- $\Omega^{p,q}(M)$ for the smooth $(p,q)$-forms.
- $\partial, \bar\partial$ for the Dolbeault operators;
  $H^{p,q}_{\bar\partial}(M)$ for Dolbeault cohomology.
- $h$ for a Hermitian metric on a complex vector bundle; $\nabla^h$ for
  the Chern connection.
- $\omega$ for the Kähler form (reused from KN-I where $\omega$ is the
  connection 1-form — **notation clash** to flag in the Babel Bible; resolve
  by writing $\omega_K$ for the Kähler form when in the same paragraph
  as the connection 1-form, or by using $\omega^{\mathrm{conn}}$ for the
  latter, as Tu does).
- $I^*(\mathfrak{g})$ for the algebra of $\mathrm{Ad}$-invariant
  polynomials on $\mathfrak{g}$.
- $w: I^*(\mathfrak{g}) \to H^*_{\mathrm{dR}}(M)$ for the Chern-Weil
  homomorphism.
- $c_i, p_i, e, \mathrm{Td}, \hat A, L$ for the characteristic classes
  (same as Milnor-Stasheff and Codex existing convention).

Wells, Huybrechts, and Voisin use the same complex-geometry notation.
Tu uses identical notation to KN-II in the bundle / curvature register;
Tu adopts the $\omega \leftrightarrow A$, $\Omega \leftrightarrow F$
aliases to bridge to the gauge-theory notation in
`03.07.05-yang-mills-action.md` (already recorded in the KN-I plan §4).
The Babel Bible notation decision (per `docs/specs/UNIT_SPEC.md` §11) should:
adopt KN-II's complex-geometry notation verbatim; resolve the $\omega$
notation clash by reserving $\omega$ for the Kähler form inside the
complex / Kähler units (`48.02.11`, `48.02.12`) and writing $\omega^{\mathrm{conn}}$
in those units when the principal-bundle connection 1-form appears
explicitly. Record in a §Notation paragraph of each affected unit.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in KN-II (full
  P1 audit). **Deferred** until a local PDF is on disk in
  `reference/fasttrack-texts/03-modern-geometry/Kobayashi-Nomizu-FoundationsVol2.pdf`.
  This stub works from canonical TOC knowledge + peer-source crosswalks
  + Codex internal evidence and is therefore **REDUCED**.
- **The deep Hodge-theoretic programme** (Lefschetz decomposition,
  primitive cohomology, polarised Hodge structures, mixed Hodge
  structures, period domains, period maps, the Calabi-Yau Theorem,
  the Hodge conjecture). Fast Track 3.27 — **Voisin, *Hodge Theory and
  Complex Algebraic Geometry I + II*** — is the canonical Codex audit
  target for that material. KN-II §IX only goes as far as Hodge
  decomposition on compact Kähler manifolds; everything downstream is
  Voisin territory and is deferred to its own audit.
- **Kähler-Einstein metrics and the Calabi-Yau theorem.** KN-II does
  not cover Yau's solution of the Calabi conjecture. Deferred to a
  future Joyce / Tian audit pass (no current Fast Track entry).
- **Sasaki-Einstein and special holonomy beyond Kähler.** Cited via
  `03.09.18-berger-holonomy.md`; deferred to a future Joyce audit.
- **Algebraic-geometry-side cohomology of Kähler manifolds**
  (Lefschetz hyperplane theorem, Bertini, Kodaira-Akizuki-Nakano
  vanishing, Kodaira embedding, projective embedding of Kähler
  varieties of restricted type). Sits in the `04-algebraic-geometry/`
  chapter and is partly shipped (`04.09.02-kodaira-vanishing.md`);
  not on this audit's scope.
- **Index theory for the Dolbeault operator** (Riemann-Roch,
  Hirzebruch-Riemann-Roch, Atiyah-Singer for $\bar\partial$).
  Touched in `03.09.10` (Atiyah-Singer) and `04-algebraic-geometry/04-riemann-roch/`;
  not on this audit's scope.
- **Yang-Mills / instanton theory specifics** (ASD equations,
  Donaldson invariants, ADHM construction). Fast Track 3.20 (Donaldson-
  Kronheimer / Atiyah-Bott) is the canonical audit target. Deferred.
- **The $G_2$, $\mathrm{Spin}(7)$, and Calabi-Yau holonomy specialisations.**
  Joyce-territory; deferred.

---

## §6 Acceptance criteria for FT equivalence (KN-II)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of KN-II's named theorems in Chs. VIII–XII map to Babel Bible units.
  Current ~25–30%; after priority-1 rises to ~65%; after priority-1+2
  to ~85%; after priority-1+2+3 to ~93%; full ≥95% requires
  priority-4 weaving (no new units, only cross-references).
- ≥90% of KN-II's worked computations in Chs. IX + XII (the load-bearing
  chapters) have either a direct unit or a worked example in a
  cross-referenced unit. Canonical KN-II computations to cover:
  $\mathbb{CP}^n$ as a Kähler manifold; the Hopf bundle as a holomorphic
  line bundle and its first Chern class; the Fubini-Study metric; the
  Pfaffian computation of $e(TS^{2n})$; the second Chern class of an
  $\mathrm{SU}(2)$-instanton over $S^4$.
- The `source: TODO_REF` for KN-II §XII in `03.06.06-chern-weil-homomorphism.md`
  is resolved to a concrete chapter/section locator.
- The TODO_REF blocks in `05.06.01-almost-complex.md` and
  `05.06.03-newlander-nirenberg.md` for the complex-geometry secondary
  references (Cannas da Silva, Huybrechts, Voisin) are resolved.
- The Milnor-Stasheff-shared item (`03.06.18` Chern-Weil / Milnor-Stasheff
  compatibility) ships once and is cited from both audits without
  duplication.
- The KN-I-shared items (priority-0 above) ship once and are cited from
  both audits.
- `03.09.18-berger-holonomy.md` and `04.09.01-hodge-decomposition.md` and
  `04.09.02-kodaira-vanishing.md` and `05.06.01-almost-complex.md` and
  `05.06.03-newlander-nirenberg.md` carry weaving paragraphs pointing
  to the new complex / Kähler / Chern-Weil units.
- Notation decisions are recorded in `48.02.09`, `48.02.10`, `48.02.11`,
  `48.02.12`, `48.05.19`, `48.05.20`, `03.06.07`, `03.06.18`
  (especially the $\omega$ Kähler-form vs $\omega$ connection-1-form
  clash resolution; see §4).
- Originator-prose citations of Chern 1946, Weil 1949, Newlander-Nirenberg
  1957, Kodaira 1954, Chern-Simons 1974, Hodge 1941, Nomizu 1954, and
  Bochner 1946 are present in the relevant units.

The 6 priority-1 units close the complex / Kähler / Chern-connection
silent-dependency gaps and lift KN-II coverage from ~25% to ~65%.
Priority-2 (4 units) closes the Chern-Weil deepenings (transgression,
Milnor-Stasheff compatibility) and the submanifold-equations gap.
Priority-3 (3 units) closes the homogeneous-space / Bochner gaps.
Priority-4 is weaving only and does not add new units.

---

## §7 Sourcing

- **Not free.** KN-II is under active Wiley copyright (1969, reprint
  1996). Same legal status as KN-I — no free legal PDF is hosted by the
  authors' institutions or by Wiley. Print copies (Wiley Classics Library
  reprint, ISBN 0-471-15732-5) are readily available second-hand. Library
  mirror or Anna's Archive likely needed for a local copy; the Fast
  Track entry currently holds only the cover-image stub already shared
  with KN-I (`reference/fast-track/images/Kobayashi-Nomizu-1-683x1024__72960fe9e3.jpg`)
  — note that this stub may show only the Vol. I cover; the Vol. II
  cover image is *not* in the archive at the time of this audit.
- **Local copy.** **Not present** in `reference/textbooks-extra/` or
  `reference/fasttrack-texts/03-modern-geometry/` at the time of this
  audit. A scanned copy should be added to
  `reference/fasttrack-texts/03-modern-geometry/Kobayashi-Nomizu-FoundationsVol2.pdf`
  before the production pass on the priority-1 punch-list units, so
  that line-number citations can be resolved in the TODO_REF blocks of
  `03.06.06` and in the new units that will cite KN-II Chs. IX + XII
  at master tier.
- **Companion peer texts (cited in §1):**
  - **R. O. Wells**, *Differential Analysis on Complex Manifolds*, GTM 65,
    Springer 3rd ed. 2008 (with new appendix by O. García-Prada).
    The standard graduate text on the analytic side of complex
    geometry; Chs. I–III parallel KN-II §IX with a sheaf-theoretic
    rather than principal-bundle framing. The preferred secondary anchor
    for `48.02.10`, `48.05.19`, `48.05.20`.
  - **D. Huybrechts**, *Complex Geometry: An Introduction*, Universitext,
    Springer 2005. The most accessible modern graduate text; Ch. 2
    covers almost-complex / complex / Hermitian / Chern connection,
    Ch. 3 covers Kähler manifolds, Ch. 4 covers Hodge theory and
    Lefschetz decomposition, Ch. 5 covers Kähler-Einstein and Calabi-Yau.
    The preferred secondary anchor for `48.02.09`–`48.02.12` and
    `48.05.19`–`48.05.20`.
  - **C. Voisin**, *Hodge Theory and Complex Algebraic Geometry I + II*,
    Cambridge Studies in Advanced Mathematics 76 + 77, CUP 2002–2003.
    The canonical modern treatment of Hodge theory on compact Kähler
    manifolds. Fast Track 3.27. Voisin §3 + §6–§8 directly parallels
    KN-II §IX.7 + Hodge decomposition; deeper Hodge-theoretic material
    is **deferred to the FT 3.27 audit** (see §5).
  - **L. Tu**, *Differential Geometry: Connections, Curvature, and
    Characteristic Classes*, GTM 275, Springer 2017. The most accessible
    modern rewriting of KN-I + KN-II §XII; Chs. 22–25 are a teaching
    rewrite of the Chern-Weil construction. The preferred secondary
    anchor for `03.06.06`, `03.06.07`, `03.06.18` (alongside KN-II).
  - **J. Milnor, J. Stasheff**, *Characteristic Classes*, Annals of Math.
    Studies 76, Princeton University Press 1974. Fast Track 3.08.
    The canonical topological / classifying-space construction of
    characteristic classes — the **contrast** to KN-II §XII. Appendix
    C of Milnor-Stasheff is the explicit bridge to Chern-Weil.
    Audit shipped this Cycle 4 (`plans/fasttrack/milnor-stasheff-characteristic-classes.md`);
    coordinate on the `03.06.18` compatibility unit.
  - **S. Helgason**, *Differential Geometry, Lie Groups, and Symmetric
    Spaces*, Graduate Studies in Mathematics 34, AMS 2001. The standard
    reference for homogeneous and symmetric spaces; Chs. IV–VIII parallel
    KN-II §X. Secondary anchor for `03.03.X2`, `03.03.X3`.
  - **M. P. do Carmo**, *Riemannian Geometry*, Birkhäuser 1992.
    Already cited in the KN-I plan; Ch. 6 covers submanifold geometry
    (Gauss-Codazzi-Ricci) at a gentler pace than KN-II §VIII. Secondary
    anchor for `48.02.13`, `48.02.14`.
  - **H. B. Lawson, M.-L. Michelsohn**, *Spin Geometry*, Princeton
    Mathematical Series 38, Princeton University Press 1989. Fast Track
    3.10. §II.8 covers the Bochner technique in the spin / Dirac-operator
    setting. Secondary anchor for `48.02.15`.
- **Originator-paper archive locations:**
  - Chern 1946 *Annals* — JSTOR.
  - Weil 1949 lectures — collected in *Œuvres scientifiques* Vol. III
    (Springer 1979); print only.
  - Newlander-Nirenberg 1957 *Annals* — JSTOR.
  - Kodaira 1954 *Annals* — JSTOR.
  - Chern-Simons 1974 *Annals* — JSTOR.
  - Hodge 1941 *Harmonic Integrals* — Cambridge University Press; print only.
  - Nomizu 1954 *Amer. J. Math.* — JHU Press / JSTOR.
  - Bochner 1946 *Bull. AMS* — AMS journals.

---

## §8 Coordination with sibling audits (Cycle 4)

The KN-II audit overlaps three sibling audits shipped or in flight this
Cycle 4:

1. **KN-I (FT 3.18) — `plans/fasttrack/kobayashi-nomizu-foundations-vol1.md`.**
   Strict prerequisite chain. The KN-II priority-0 units (torsion / Cartan
   structural equations, Levi-Civita / Hopf-Rinow, associated bundle /
   induced connection) are already on the KN-I priority-1 punch-list.
   Production order: KN-I priority-1 must precede KN-II priority-1.
   The KN-II Chern-connection unit (`48.05.20`) is the complex-bundle
   specialisation of the KN-I `48.05.13` (associated bundle and induced
   connection); cross-reference both.
2. **Milnor-Stasheff (FT 3.08) — `plans/fasttrack/milnor-stasheff-characteristic-classes.md`.**
   The `03.06.18` (Chern-Weil ↔ topological compatibility) unit is shared.
   Milnor-Stasheff approaches characteristic classes from the homotopy /
   classifying-space side; KN-II approaches them from the curvature side.
   The compatibility unit is the bridge and should ship as a co-authored
   unit citing both anchors at master tier.
3. **Voisin (FT 3.27) — not yet audited.** Voisin is the deep Hodge-theoretic
   sequel to KN-II §IX. The KN-II priority-1 unit `48.02.12` (Kähler
   identities + Hodge decomposition) is the **upstream** of Voisin's
   programme; Voisin's audit should treat `48.02.12` as a prerequisite
   anchor and pick up at Lefschetz decomposition / primitive cohomology /
   polarised Hodge structures.

The three audits together close the **complex-and-characteristic-classes
spine** of the modern-geometry chapter (FT 3.08 + 3.18 + 3.19 + 3.27).
The Chern-Weil / Chern-connection / Kähler-Hodge subchain is the
load-bearing centre of that spine, and the priority-1 + priority-2 units
of this KN-II audit are the most-cited new units across all four
sibling-audit punch-lists.
