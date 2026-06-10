# Mackenzie — *Lie Groupoids and Lie Algebroids in Differential Geometry* (Fast Track 1.08) — Audit + Gap Plan

**Book:** Kirill C. H. Mackenzie, *Lie Groupoids and Lie Algebroids in
Differential Geometry*. London Mathematical Society Lecture Note Series
124, Cambridge University Press 1987. xv + 327 pp.
ISBN 978-0-521-34882-9 (1987 paperback). The first book-length
monograph dedicated to Lie groupoids and Lie algebroids as
**foundational** objects in differential geometry — rather than as
auxiliary devices in foliation theory (Haefliger 1958, Pradines 1966)
or in the algebraic-geometry side of Grothendieck-style groupoid
schemes. The 1987 LMS LNS volume consolidated Mackenzie's Sheffield-era
research on the **transitive** Lie-algebroid case and on the
**integration problem** of Pradines, prior to the substantial
broadening of scope in Mackenzie's much later *General Theory of Lie
Groupoids and Lie Algebroids* (FT 1.09, CUP LMS LNS 213, 2005), which
incorporates non-transitive algebroids, double structures, and the
1990s integrability theory (Mackenzie-Xu, Cattaneo-Felder,
Crainic-Fernandes).

**Fast Track entry:** 1.08. Sourcing: **BUY** (CUP, currently print-
on-demand through CUP's LMS LNS reissue programme; secondhand copies
~$40–60). Marked `BUY` on `docs/catalogs/FASTTRACK_BOOKLIST.md`.

**Distinct** from FT 1.09 (Mackenzie 2005, the 600-page comprehensive
monograph) and from the **groupoid** strand of Brown 1.05 (FT 1.05,
the **fundamental** groupoid of topology). The three "groupoid"
books on the Fast Track partition cleanly:

- **Brown 1.05** — *fundamental groupoid* $\pi_1(X, A)$ of a
  topological space; topology-side van Kampen and covering-space
  programme. Audit at `plans/fasttrack/brown-topology-and-groupoids.md`.
- **Mackenzie 1.08** (this audit) — *Lie groupoid* $\mathcal{G}
  \rightrightarrows M$ as a smooth manifold-with-source-and-target
  morphism; differential-geometry-side, oriented to the
  **integration of Lie algebroids** and to **principal-bundle
  generalisation**. 1987 scope: transitive case + Pradines integration
  obstruction.
- **Mackenzie 1.09** — the 2005 comprehensive treatment of (a) the
  general (non-transitive) theory, (b) Poisson and symplectic
  groupoids, (c) double Lie groupoids and double Lie algebroids,
  (d) the Crainic-Fernandes integration theorem (2003). Audited
  separately.

**Summary.** Mackenzie 1987 is the **founding monograph** for the
view that connection theory on a principal $G$-bundle $P \to M$ is
a special case of a more general infinitesimal-geometric framework
in which the structure group $G$ is replaced by a **Lie groupoid**
$\mathcal{G} \rightrightarrows M$ and its infinitesimal counterpart
is a **Lie algebroid** $A \to M$ (a vector bundle equipped with a
bracket on sections and an anchor $\rho: A \to TM$ satisfying a
Leibniz compatibility). The book's pedagogical spine is the
**Lie-functor analogy**: Lie groupoid : Lie algebroid :: Lie group :
Lie algebra. Where the classical Lie correspondence is
$G \leftrightarrow \mathfrak{g}$ via $\mathfrak{g} = T_e G$ and
$\exp: \mathfrak{g} \to G$, Mackenzie develops the parallel
$\mathcal{G} \leftrightarrow A(\mathcal{G})$ via differentiation
along the source-fibre and a fibrewise exponential, and asks **when
an abstract Lie algebroid $A$ comes from a Lie groupoid** — the
**Pradines integration problem**. The 1987 book proves the result
for **transitive** algebroids (those with surjective anchor) and
documents Mackenzie's counterexamples in the intransitive case;
the **full** Crainic-Fernandes (2003) resolution of the
integration problem is post-1987 and is covered by FT 1.09 instead.

**Purpose of this plan:** lightweight P1-lite audit-and-gap pass
mirroring the Sternberg-Curvature, Kobayashi-Nomizu, and Brown-1.05
audits. The volume is **graduate-research-monograph density** with a
moderate theorem count but heavy on long structural definitions and
substantial worked examples (the gauge groupoid $\frac{P \times P}{G}$
of a principal bundle, the action groupoid $G \ltimes M$, the
fundamental groupoid as a Lie groupoid, the Atiyah algebroid). The
equivalence target is **conceptual-coverage plus originator-prose
anchoring on Pradines (1966), Mackenzie (1987), and the Atiyah-
algebroid construction (Atiyah 1957)**, not full proof-depth on every
named result. **The decisive observation for this audit is that the
Babel Bible's existing principal-bundle and connection apparatus
(`03.05-bundles/`, `03.05-fibre-bundles/`, `03.06-characteristic-classes/`)
shadow-covers the principal-bundle *examples* of Mackenzie's
theory but does not contain a single unit on Lie groupoids or Lie
algebroids as foundational objects.** The genuine Mackenzie-1.08-
distinctive content is concentrated in (a) the Lie groupoid /
algebroid pair as such; (b) the **Atiyah algebroid** $\mathrm{At}(P) =
TP/G$ as the infinitesimal counterpart of the gauge groupoid
$\frac{P \times P}{G}$; (c) the **transitive integration theorem**
and the explicit (non-)integrability obstruction; (d) the
**reformulation of principal-bundle connections** as splittings of
the Atiyah-algebroid extension $0 \to \mathrm{ad}(P) \to \mathrm{At}(P)
\to TM \to 0$.

**Audit mode: REDUCED.** No local PDF in
`reference/fasttrack-texts/01-fundamentals/` at audit time; working from
the canonical CUP LMS LNS 124 table of contents (Chs. I–V + Appendix,
well-attested via review articles in Bull. AMS, MathSciNet, and the
Mackenzie 2005 book's own retrospective preface), the peer-source
crosswalks below, and the in-Codex evidence that the principal-bundle
and connection apparatus exists but is **not** packaged in algebroid
terms anywhere in the corpus. A full P1 line-number inventory is
deferred to a production pass when a copy is on disk. Chapter
numbering below follows the CUP 1987 LMS LNS edition.

---

## §1 Chapter map of *Lie Groupoids and Lie Algebroids in Differential Geometry* (1987)

The CUP 1987 LMS LNS edition is organised into **five chapters plus
appendix**, totalling ~330 pages. Compared with the 2005 comprehensive
sequel (FT 1.09, ~600 pp.), the 1987 book is more focused — it sets
up the transitive theory cleanly and stops before the substantial
1990s machinery (symplectic groupoids, doubles, integration of
Poisson manifolds, the modular class). Chapter map:

1. **Chapter I — The algebra of groupoids.** Purely algebraic /
   set-theoretic introduction to groupoids as small categories with
   all morphisms invertible. Vertex group $\mathcal{G}(x, x)$ and
   the action of $\mathcal{G}$ on its base $\Omega(\mathcal{G})$
   (the set of objects). **Transitive vs intransitive** groupoids
   (transitive ⇔ for all $x, y$ there is a morphism $x \to y$).
   **Connected components / orbits** of $\mathcal{G}$ on the base.
   Examples: the **pair groupoid** $M \times M \rightrightarrows M$,
   **action groupoid** $G \ltimes M \rightrightarrows M$ of a
   group action, **fundamental groupoid** $\pi_1(X, X)$,
   **isotropy** groupoid. Groupoid morphisms, base-preserving
   morphisms, equivalences. Subgroupoids and quotient groupoids.
   ~50 pp; the most elementary chapter of the book. Distinct from
   Brown's *Topology and Groupoids* in that Mackenzie focuses
   throughout on the source-target maps $\alpha, \beta:
   \mathcal{G} \to M$ rather than on the Brown van-Kampen
   programme.

2. **Chapter II — Topological and Lie groupoids.** Adds topology
   and smoothness to Chapter I. A **topological groupoid** is a
   groupoid $\mathcal{G} \rightrightarrows M$ with topologies on
   $\mathcal{G}$ and $M$ making $\alpha, \beta$ continuous (and
   usually open) and inversion + composition continuous. A **Lie
   groupoid** adds the requirement that $\mathcal{G}, M$ are
   smooth manifolds, $\alpha, \beta$ are smooth surjective
   submersions (so source/target fibres $\mathcal{G}_x =
   \alpha^{-1}(x)$ are smooth submanifolds), the **unit map** $u:
   M \to \mathcal{G}$ is smooth, **inversion** $\mathcal{G} \to
   \mathcal{G}$ is smooth, and **composition** $\mathcal{G}
   \tensor[_\alpha]{\times}{_\beta} \mathcal{G} \to \mathcal{G}$
   is smooth on the fibre product (using that $\alpha$ is a
   submersion, the fibre product is automatically a smooth
   manifold). Worked examples: the **pair groupoid** $M \times M
   \rightrightarrows M$ (smoothly trivial); the **gauge
   groupoid** $\frac{P \times P}{G} \rightrightarrows M$ of a
   principal $G$-bundle $P \to M$ (this is the **canonical
   transitive Lie groupoid** and is Mackenzie's central example
   throughout the book); the **action groupoid** $G \ltimes M$ for
   a smooth $G$-action; the **fundamental groupoid** $\pi_1(M, M)$
   as a Lie groupoid (using the smooth structure on $\pi_1$ via
   the universal cover). **Transitivity** of a Lie groupoid:
   $\mathcal{G}$ transitive ⇔ the anchor $(\alpha, \beta):
   \mathcal{G} \to M \times M$ is a surjective submersion ⇔ all
   isotropy groups $\mathcal{G}(x, x)$ are isomorphic as Lie
   groups, and $\mathcal{G}$ is locally trivial as a principal
   bundle over $M \times M$. **Theorem (Mackenzie):** every
   transitive Lie groupoid $\mathcal{G} \rightrightarrows M$
   arises as the gauge groupoid $\frac{P \times P}{G}$ of some
   principal $G$-bundle $P \to M$ with $G = \mathcal{G}(x_0, x_0)$.
   This **structural classification of transitive Lie groupoids**
   is the chapter's central theorem and the bridge to
   principal-bundle theory. ~65 pp.

3. **Chapter III — Lie algebroids.** Introduces the infinitesimal
   counterpart. A **Lie algebroid** $A \to M$ over a smooth
   manifold $M$ is a smooth vector bundle equipped with: a
   **bundle map** $\rho: A \to TM$ called the **anchor**, and a
   **Lie bracket** $[-,-]: \Gamma(A) \times \Gamma(A) \to \Gamma(A)$
   on the $\mathbb{R}$-vector space of smooth sections, satisfying
   the **Leibniz compatibility** $[\sigma, f\tau] = f[\sigma, \tau]
   + (\rho(\sigma) \cdot f) \tau$ for all $\sigma, \tau \in
   \Gamma(A)$ and $f \in C^\infty(M)$, and such that the induced
   map $\rho_*: \Gamma(A) \to \mathfrak{X}(M)$ is a Lie-algebra
   homomorphism. The Leibniz law forces the bracket to be
   $C^\infty(M)$-linear in one slot up to anchor-derivative
   corrections — the structural shift from a Lie algebra (where
   the bracket is bilinear) to a Lie algebroid. **Examples
   throughout:** (a) the **tangent bundle** $TM$ as the Lie
   algebroid of the pair groupoid, with anchor $= \mathrm{id}$
   and bracket $= $ Lie bracket of vector fields; (b) a **Lie
   algebra** $\mathfrak{g}$ viewed as a Lie algebroid over a
   point, with $\rho = 0$; (c) the **action algebroid** $\mathfrak{g}
   \ltimes M$ for a Lie algebra acting on $M$ by vector fields;
   (d) the **integrable distribution** $D \subseteq TM$ as a Lie
   algebroid (anchor = inclusion, bracket = vector-field bracket);
   (e) **the Atiyah algebroid** $\mathrm{At}(P) = TP/G$ for a
   principal $G$-bundle $P \to M$, with anchor induced by
   $T\pi: TP \to TM$ and bracket induced by the Lie bracket of
   $G$-invariant vector fields on $P$. The Atiyah algebroid is
   the infinitesimal counterpart of the gauge groupoid and is
   **the most important example in the book**. **Transitivity:**
   $A$ transitive ⇔ $\rho$ surjective ⇔ short exact sequence
   $0 \to L \to A \to TM \to 0$ where $L = \ker \rho$ is a
   bundle of Lie algebras (the **isotropy** bundle). ~70 pp.

4. **Chapter IV — The Lie functor and the integration problem.**
   The differentiation procedure: given a Lie groupoid
   $\mathcal{G} \rightrightarrows M$, define $A(\mathcal{G}) =
   \ker(d\alpha)|_M$ (the **vertical** tangent bundle of $\alpha$,
   restricted to the unit submanifold $M \subset \mathcal{G}$),
   with anchor $\rho = d\beta|_{A(\mathcal{G})}$ and bracket
   induced by the Lie bracket of **right-invariant** vector fields
   on $\mathcal{G}$ (the right-invariant fields on $\mathcal{G}$
   form a Lie algebra under the usual bracket, isomorphic to
   $\Gamma(A(\mathcal{G}))$). Explicit computation: for the pair
   groupoid $M \times M$, $A(M \times M) = TM$; for an action
   groupoid $G \ltimes M$, $A(G \ltimes M) = \mathfrak{g} \ltimes
   M$; for the gauge groupoid $\frac{P \times P}{G}$,
   $A(\frac{P \times P}{G}) = \mathrm{At}(P)$. **Lie functor** is
   functorial in groupoid morphisms. **Lie's first theorem
   analogue:** every Lie groupoid morphism $\mathcal{G} \to
   \mathcal{H}$ over $\mathrm{id}_M$ differentiates to a Lie
   algebroid morphism $A(\mathcal{G}) \to A(\mathcal{H})$. **The
   integration problem (Pradines):** given an abstract Lie
   algebroid $A \to M$, when does there exist a Lie groupoid
   $\mathcal{G} \rightrightarrows M$ with $A(\mathcal{G}) \cong A$?
   For Lie *algebras*, Lie's third theorem (Cartan 1930) says
   every finite-dimensional real Lie algebra integrates to a
   (simply connected) Lie group; **for Lie algebroids the analogue
   is false in general.** Mackenzie's **counterexample** (1987):
   exhibits an explicit Lie algebroid over $M$ that does not
   integrate to any Lie groupoid; the obstruction is in the
   second Lie-algebroid cohomology $H^2(A; \ker \rho)$ and
   coincides with the **monodromy groups** later identified by
   Crainic-Fernandes (2003). **Pradines's theorem:** every Lie
   algebroid is integrable to a **local** Lie groupoid (germ
   along the unit submanifold). **Mackenzie's transitive
   integration theorem (1987):** every **transitive** Lie
   algebroid is integrable, and the integration is unique up to
   covering. The transitive case is **always integrable** because
   the obstruction in $H^2$ vanishes (the cohomology of a
   transitive algebroid is computed via the spectral sequence of
   the short exact sequence $0 \to L \to A \to TM \to 0$ and
   matches the cohomology of the structure-bundle Lie algebra
   $L$). ~90 pp; this is the **technical heart of the book**.

5. **Chapter V — Connections and the connection theory of Lie
   groupoids.** Reformulates principal-bundle connection theory in
   algebroid language. A **connection on a transitive Lie
   algebroid** $A \to M$ with short exact sequence $0 \to L \to A
   \to TM \to 0$ is a **splitting** of this sequence as bundle
   maps: a section $\gamma: TM \to A$ with $\rho \circ \gamma =
   \mathrm{id}_{TM}$. Equivalently a sub-bundle $H \subseteq A$
   complementary to $L$ (the **horizontal** distribution).
   **Curvature** of a connection $\gamma$ is the $\mathrm{Hom}(\Lambda^2
   TM, L)$-valued 2-form $R_\gamma(X, Y) = [\gamma(X), \gamma(Y)]_A
   - \gamma([X, Y])$ measuring the failure of $\gamma$ to be a Lie-
   algebroid morphism (and equivalently the failure of $H$ to be
   involutive). **Dictionary** with classical principal-bundle
   theory: for $A = \mathrm{At}(P)$, an Atiyah-algebroid splitting
   corresponds bijectively to a principal-bundle connection
   $\omega \in \Omega^1(P; \mathfrak{g})$, and the algebroid
   curvature $R_\gamma$ corresponds to the bundle-curvature
   $\Omega = d\omega + \tfrac{1}{2}[\omega, \omega]$ pushed down to
   $M$. **Theorem:** the categories of principal-$G$-bundles-with-
   connection over $M$ and of transitive Lie-algebroids-with-
   splitting over $M$ (with $L = \mathrm{ad}(P)$) are equivalent.
   This is the **Atiyah-Mackenzie reformulation of gauge theory**.
   Pointer chapter to representations of Lie groupoids /
   Lie algebroids on vector bundles, and to the **modular class**
   (the latter parked for the 2005 sequel). ~55 pp.

6. **Appendix — Sheaf-theoretic tools, distributions, foliations.**
   Brief technical appendix collecting the sheaf-cohomology
   prerequisites for Chapter IV's integration obstruction, plus a
   review of integrable distributions and Frobenius theorem (used
   throughout). ~15 pp.

7. **Editorial signature.** Four threads make Mackenzie 1987
   distinctive against (a) Brown's groupoid programme on the
   topology side, (b) Kobayashi-Nomizu's principal-bundle
   programme on the geometry side, (c) Moerdijk-Mrcun *Introduction
   to Foliations and Lie Groupoids* (CUP 2003), and (d) Mackenzie
   2005:
   - **Lie functor as the organising principle.** Where KN-I treats
     connections as a topic in differential geometry without an
     infinitesimal-vs-global structural framework, Mackenzie 1987
     argues that the **Lie algebra → Lie group correspondence is
     the *wrong* level of generality** for differential geometry;
     the **Lie algebroid → Lie groupoid correspondence** is the
     correct one, because principal bundles, foliations, and Poisson
     manifolds are all subcases. This **reframes** the whole
     subject around the Lie functor.
   - **Atiyah algebroid as the secret object.** The 1987 book
     elevates the Atiyah algebroid $\mathrm{At}(P) = TP/G$ — implicit
     in Atiyah 1957 *Complex analytic connections in fibre bundles*
     and used technically in Atiyah-Bott 1982 *Yang-Mills* — to a
     **named object with its own theory**. Today's research literature
     (Cattaneo-Felder, Crainic-Fernandes, Mehta-Tang) treats the
     Atiyah algebroid as standard; Mackenzie 1987 is **the source**
     for this elevation.
   - **Transitive case treated as a complete theory.** Mackenzie
     proves the transitive integration theorem in full and uses it
     as the **template** for the (later, harder) non-transitive
     case. The 1987 book is **internally consistent** at the
     transitive level even though the general integrability problem
     remained open for 16 more years.
   - **Connection-as-splitting reformulation.** The connection-1-form
     $\omega$ of KN-I appears in the 1987 book only as a derived
     concept: the primary object is the algebroid splitting
     $\gamma: TM \to \mathrm{At}(P)$. **Same theorems, opposite
     packaging.** This split is the reason gauge theory looks
     different in the Mackenzie tradition — gauge transformations
     become **bisections** of the gauge groupoid, the gauge group
     $\mathcal{G} = \mathrm{Aut}(P)$ becomes the **bisection group**
     of $\frac{P \times P}{G}$, and the Yang-Mills moduli space
     fits naturally into the Lie-groupoid framework.

The 1987 book is **not** the comprehensive Mackenzie reference — that
is the 2005 sequel (FT 1.09). It **is** the **founding text** of the
modern Lie-groupoid / Lie-algebroid programme as a differential-
geometric subject, and is the canonical citation for the
**transitive case** of the integration theory.

---

## §2 Babel Bible coverage map (Mackenzie 1.08 ↔ Codex)

Cross-referenced against the current corpus, with particular attention
to chapter overlap with KN-I (FT 3.18), LDG (FT 1.10), Brown 1.05 (FT
1.05), the existing `03.05-bundles/` + `03.05-fibre-bundles/`
principal-bundle apparatus, and the symplectic / Poisson chapter
`05-symplectic/`. ✓ = covered at Mackenzie-equivalent depth (textbook
depth, not necessarily proof-depth on every theorem); △ = topic
present but Codex unit shallower or differently anchored (typically
in **principal-bundle** form rather than **algebroid** form);
✗ = not covered.

### Cluster I — Algebra of groupoids (Ch. I)

| Mackenzie topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Groupoid as small category with all morphisms invertible | `03.12.08-fundamental-groupoid.md` | △ | Defined informally inside the fundamental-groupoid unit; the **abstract algebraic definition** of a groupoid (source/target maps $\alpha, \beta$, units, composition, inversion) is not isolated. |
| Vertex / isotropy group $\mathcal{G}(x, x)$ | — | ✗ | **Gap.** No general isotropy-group treatment. |
| Pair groupoid $M \times M \rightrightarrows M$ | — | ✗ | **Gap.** Foundational example; absent. |
| Action groupoid $G \ltimes M$ | △ | △ | The **group action** unit `03.03.02-group-action.md` covers actions; the **action groupoid** packaging is not isolated. |
| Fundamental groupoid (as a groupoid) | `03.12.08-fundamental-groupoid.md` | ✓ | Shipped via Brown audit Wave-1 production. |
| Transitive vs intransitive groupoids; orbits / connected components | — | ✗ | **Gap.** Used implicitly inside `03.12.08` but not named. |
| Groupoid morphism; base-preserving morphism; equivalence | — | ✗ | **Gap.** Foundational categorical concept; absent. |
| Subgroupoid, quotient groupoid | — | ✗ | **Gap.** |

**Cluster I status:** **mostly absent**; only the fundamental-groupoid
example exists in the corpus, as a topology-side anchor. The general
algebra-of-groupoids layer that Mackenzie Ch. I builds is **not** in
Codex.

### Cluster II — Topological and Lie groupoids (Ch. II)

| Mackenzie topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Topological groupoid (continuous source/target/composition) | — | ✗ | **Gap.** |
| **Lie groupoid $\mathcal{G} \rightrightarrows M$** (smooth source/target = submersions; smooth composition on fibre product) | — | ✗ | **Gap (priority 1 — Mackenzie's foundational object).** |
| Source-fibre $\mathcal{G}_x = \alpha^{-1}(x)$ as a smooth submanifold | — | ✗ | **Gap.** |
| Pair groupoid as a Lie groupoid | — | ✗ | **Gap.** |
| **Gauge groupoid $\frac{P \times P}{G} \rightrightarrows M$** of a principal bundle | — | ✗ | **Gap (priority 1 — Mackenzie's central example; the canonical transitive Lie groupoid).** The Codex `03.05.01-principal-bundle.md` covers the principal bundle itself; the gauge groupoid packaging is absent. |
| Action Lie groupoid $G \ltimes M$ for a smooth action | — | ✗ | **Gap.** |
| Fundamental Lie groupoid $\pi_1(M, M)$ (with smooth structure) | △ | △ | The topological fundamental groupoid `03.12.08` is shipped; the **Lie-groupoid** structure on $\pi_1(M, M)$ (when $M$ is a smooth manifold) is implicit, not isolated. |
| Transitive Lie groupoid ⇔ anchor $(\alpha, \beta)$ a surjective submersion ⇔ locally trivial as principal bundle | — | ✗ | **Gap (priority 1 — Mackenzie's structural classification theorem).** |
| **Mackenzie classification of transitive Lie groupoids** as gauge groupoids of principal bundles | — | ✗ | **Gap (priority 1 — central theorem of Ch. II; bridges to KN-I principal-bundle theory).** |
| Bisection $\sigma: M \to \mathcal{G}$ of a Lie groupoid; bisection group | — | ✗ | **Gap.** Connects to gauge group $\mathrm{Aut}(P)$ at `03.07.18-configuration-space-and-slice-theorem-on-mathcal-b-star-y.md`. |

**Cluster II status:** **completely absent.** The Lie-groupoid layer
is not in the Codex at all; the existing principal-bundle chapter
covers the **special-case principal-bundle examples** of Mackenzie's
theory but without the structural Lie-groupoid framing.

### Cluster III — Lie algebroids (Ch. III)

| Mackenzie topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Lie algebroid $A \to M$** (vector bundle + anchor $\rho: A \to TM$ + Lie bracket on $\Gamma(A)$ + Leibniz law) | — | ✗ | **Gap (priority 1 — Mackenzie's foundational infinitesimal object).** |
| Anchor $\rho$, Leibniz law $[\sigma, f\tau] = f[\sigma, \tau] + (\rho\sigma \cdot f)\tau$ | — | ✗ | **Gap.** |
| Tangent bundle $TM$ as a Lie algebroid (Lie algebroid of pair groupoid) | △ | △ | $TM$ is implicit throughout `03.02-manifolds/` and `03.05-fibre-bundles/`; the **Lie-algebroid** packaging is not stated. |
| Lie algebra $\mathfrak{g}$ as a Lie algebroid over a point | △ | △ | `03.04.01-lie-algebra.md` covers Lie algebras; the algebroid-as-generalisation packaging is absent. |
| Action algebroid $\mathfrak{g} \ltimes M$ for a Lie-algebra action by vector fields | — | ✗ | **Gap.** |
| Integrable distribution $D \subseteq TM$ as a Lie algebroid | △ | △ | The Frobenius theorem `48.02.04-frobenius-theorem.md` covers integrable distributions; the algebroid framing is absent. |
| **Atiyah algebroid $\mathrm{At}(P) = TP/G$** of a principal $G$-bundle | — | ✗ | **Gap (priority 1 — Mackenzie's most important worked example; the infinitesimal counterpart of the gauge groupoid).** |
| Transitive Lie algebroid; short exact sequence $0 \to L \to A \to TM \to 0$ | — | ✗ | **Gap (priority 1).** |
| Isotropy bundle $L = \ker \rho$ as a bundle of Lie algebras | — | ✗ | **Gap.** |
| Lie-algebroid cohomology $H^*(A; V)$ (for a representation $V$) | — | ✗ | **Gap.** Used internally for the integration obstruction. |

**Cluster III status:** **completely absent.** No Lie-algebroid unit
exists in the Codex. The closest neighbours are the tangent bundle
(implicit), Lie algebras (`03.04.01`), and integrable distributions
(`48.02.04`), all of which are **examples** of Lie algebroids but
none of which is packaged as such.

### Cluster IV — Lie functor and integration (Ch. IV)

| Mackenzie topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Differentiation $\mathcal{G} \mapsto A(\mathcal{G}) = \ker(d\alpha)\vert_M$ | — | ✗ | **Gap.** |
| Lie algebra of right-invariant vector fields on $\mathcal{G}$ ≅ $\Gamma(A(\mathcal{G}))$ | — | ✗ | **Gap.** Direct generalisation of $\mathfrak{g} = T_e G$ via right-invariant fields. |
| Lie functor on groupoid morphisms | — | ✗ | **Gap.** |
| Differentiation examples: $A(M \times M) = TM$; $A(G \ltimes M) = \mathfrak{g} \ltimes M$; $A(\frac{P \times P}{G}) = \mathrm{At}(P)$ | — | ✗ | **Gap.** |
| **Pradines integration problem**: given $A$, find $\mathcal{G}$ with $A(\mathcal{G}) = A$? | — | ✗ | **Gap (priority 1 — Mackenzie's central technical question).** |
| **Pradines local integration theorem** (every Lie algebroid integrates to a local Lie groupoid) | — | ✗ | **Gap.** |
| **Mackenzie's counterexample to global integration** in the non-transitive case | — | ✗ | **Gap.** |
| **Mackenzie's transitive integration theorem** (every transitive Lie algebroid integrates) | — | ✗ | **Gap (priority 1 — central theorem of the 1987 book).** |
| Crainic-Fernandes obstruction (2003) — out-of-scope for 1987 audit; covered by FT 1.09 sequel | — | ✗ | **Deferred to FT 1.09 audit.** |

**Cluster IV status:** **completely absent.** This is the **technical
heart** of Mackenzie 1987 and is the largest contribution distinctive
to this audit. The Lie's-third-theorem unit `48.03.06-lie-third-
theorem.md` is the closest neighbour (it covers the **Lie-group**
analogue: every finite-dim Lie algebra integrates), but the
**algebroid generalisation** — including the explicit failure in the
non-transitive case — is the genuine Mackenzie contribution and is
absent.

### Cluster V — Connections in algebroid language (Ch. V)

| Mackenzie topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Principal-bundle connection $\omega \in \Omega^1(P; \mathfrak{g})$ | `03.05.07-principal-bundle-connection.md` | ✓ | Shipped (KN-I anchor). |
| Curvature 2-form $\Omega$ of $\omega$ | `03.05.09-curvature.md` | ✓ | Shipped. |
| **Connection as splitting** $\gamma: TM \to \mathrm{At}(P)$ of the Atiyah algebroid sequence $0 \to \mathrm{ad}(P) \to \mathrm{At}(P) \to TM \to 0$ | — | ✗ | **Gap (priority 1 — Mackenzie's reformulation; the algebroid view of gauge theory).** |
| Algebroid curvature $R_\gamma(X, Y) = [\gamma X, \gamma Y]_A - \gamma[X, Y]$ as obstruction to $\gamma$ being a Lie-algebroid morphism | — | ✗ | **Gap.** |
| Dictionary: principal-bundle connection ↔ Atiyah-algebroid splitting; bundle curvature ↔ algebroid curvature | — | ✗ | **Gap (priority 1).** |
| **Adjoint bundle $\mathrm{ad}(P) = P \times_G \mathfrak{g}$** as the isotropy bundle of $\mathrm{At}(P)$ | △ | △ | Implicit in `03.05.07` and `03.07.05-yang-mills-action.md`; not a named unit. |
| Representation of a Lie groupoid / Lie algebroid on a vector bundle | — | ✗ | **Gap.** Pointer-level only in 1987; deferred to FT 1.09 for full treatment. |
| Gauge transformations as bisections of the gauge groupoid | △ | △ | The gauge group $\mathrm{Aut}(P)$ appears at `03.07.18`; the **bisection** packaging is absent. |
| Mackenzie's reformulation of Atiyah-Bott Yang-Mills moment-map picture in groupoid language | — | ✗ | **Gap.** Pointer-level deferred. |

**Cluster V status:** **half-covered** by the existing
principal-bundle apparatus, but **none** of it is packaged in
algebroid language. The dictionary between the two packagings is the
single most-cited Mackenzie contribution to modern gauge theory and is
absent.

### Aggregate coverage estimate

- **Theorem layer:** ~10% topic-level coverage. The principal-bundle
  examples (Cluster V) are essentially fully covered in their
  classical packaging; everything in Clusters I–IV that distinguishes
  Mackenzie from KN-I is absent. The Cluster V algebroid
  reformulation is also absent. **Mackenzie 1.08 is the
  least-covered book in the differential-geometry block** of the
  Fast Track among all books audited so far.
- **Worked-example layer:** ~25%. The principal-bundle examples
  (`03.05.01`, `03.05.07`, `03.05.09`) are covered; the Atiyah
  algebroid construction, the action groupoid, the pair groupoid,
  and the Mackenzie-counterexample non-integrable algebroid are
  not.
- **Notation layer:** ~30% aligned. Mackenzie's $\mathcal{G}
  \rightrightarrows M$ for source/target, $\alpha, \beta$ for the
  two structure maps, $A(\mathcal{G})$ for the Lie algebroid of a Lie
  groupoid, $\mathrm{At}(P)$ for the Atiyah algebroid, $\rho$ for the
  anchor, and $\Gamma(A)$ for sections are **not** in the Codex
  (because no unit uses them). The KN-I notation $\omega, \Omega$ for
  principal-bundle connection / curvature **is** in the Codex via the
  shipped `03.05.07`, `03.05.09` — and is the **dual notation** to
  Mackenzie's algebroid presentation; the audit's notation work is to
  install the **crosswalk** between the two presentations rather than
  to add notation from scratch.
- **Sequencing layer:** ~20%. The chain principal bundle →
  connection → curvature is shipped; the parallel chain Lie groupoid
  → Lie algebroid → connection-as-splitting → algebroid curvature is
  absent. The cross-link from `03.05.07` to its algebroid avatar is
  the punch-list weaving target.
- **Intuition layer:** ~30%. The "principal bundles capture gauge
  theory" intuition is present at `03.05.07` and `03.07.05-yang-
  mills-action.md`; the "Lie groupoids generalise Lie groups and
  Lie algebroids generalise Lie algebras, with the principal-bundle
  case as a special instance" intuition — Mackenzie's spine — is
  absent.
- **Application layer:** ~25%. The principal-bundle applications
  (Yang-Mills, characteristic classes) are covered in their
  classical form; the algebroid applications (Poisson manifolds via
  $T^*M$ algebroid structure, foliations as integrable algebroids,
  symplectic groupoids — though the latter two are mostly post-1987
  and parked for FT 1.09) are not.

**Composite estimate:** **~15% topic-coverage at present**, the
lowest of any audited differential-geometry book. After priority-1
punch-list completion the estimate rises to ~75%; after priority-1+2
to ~90%; the priority-3+4 items are weaving and Master-tier
deepenings. The book is **almost entirely uncovered** at the
foundational-objects layer (Lie groupoid, Lie algebroid, Lie functor,
integration problem), and the principal-bundle apparatus that is
shipped covers the **examples** but not the **structural theory**.
The net Mackenzie-1.08-distinctive contribution to the punch-list is
**8–10 net-new units** plus 2–3 deepenings of existing
principal-bundle units.

---

## §3 Gap punch-list (priority-ordered)

**Coordination note.** Cluster I (algebra of groupoids), Cluster II
(Lie groupoids), Cluster III (Lie algebroids), and Cluster IV (Lie
functor and integration) are **completely absent**. Cluster V
(connections in algebroid language) is half-covered via the
classical principal-bundle apparatus but the algebroid reformulation
is absent.

Every item below is flagged as either **[NEW]** (write a new unit),
**[DEEPEN]** (extend an existing shipped unit), **[ENRICH]** (add a
§Notation / §Originator paragraph), or **[already covered by ...]**
(no work; recorded to keep §2 tight). Slot ranges target the
appropriate chapter so production agents can land units without
inventing sub-chapter numbering. The Lie-groupoid and Lie-algebroid
units sit naturally in `03.03-lie/` and `03.04-differential-forms/`
(both modern-geometry chapters), with the gauge / Atiyah-algebroid
units landing in `03.05-bundles/` next to the principal-bundle units
they generalise.

**Priority 1 — Mackenzie-1.08-distinctive foundational units (the book's signature contribution):**

1. **`03.03.10` Lie groupoid: source, target, smooth composition.**
   [NEW] Anchor Mackenzie 1.08 Ch. II + Moerdijk-Mrcun *Introduction to
   Foliations and Lie Groupoids* (CUP 2003) Ch. 5 + da Silva-Weinstein
   *Geometric Models for Noncommutative Algebras* (AMS 1999) §16.
   Three-tier; ~2000 words. Define a **Lie groupoid** $\mathcal{G}
   \rightrightarrows M$ as a smooth manifold $\mathcal{G}$ over a
   smooth base $M$ with smooth submersions $\alpha, \beta:
   \mathcal{G} \to M$ (source / target), smooth unit map $u: M \to
   \mathcal{G}$, smooth inversion $i: \mathcal{G} \to \mathcal{G}$,
   and smooth associative composition $m: \mathcal{G}_\alpha
   \times_\beta \mathcal{G} \to \mathcal{G}$ on the fibre product
   (which is automatically a smooth manifold because $\alpha$ is a
   submersion). **Source-fibre** $\mathcal{G}_x = \alpha^{-1}(x)$ is a
   smooth submanifold of $\mathcal{G}$. **Examples:** pair groupoid
   $M \times M \rightrightarrows M$ (composition: $(y, z) \cdot
   (x, y) = (x, z)$); action groupoid $G \ltimes M$ for a smooth
   $G$-action; trivial groupoid $M \rightrightarrows M$; **fundamental
   Lie groupoid** $\pi_1(M, M)$ (smooth structure via universal
   cover). Master tier: groupoid morphisms, base-preserving
   morphisms, equivalences of Lie groupoids. **Bridges** to
   `03.12.08-fundamental-groupoid.md` (the topological precursor)
   and to `03.03.02-group-action.md` (the action-groupoid construction).
   **Originator-prose mandatory:** Ehresmann 1958 *Catégories
   topologiques et catégories différentiables* (Colloque de
   topologie de Bruxelles) as originator of differentiable
   categories / groupoids; Pradines 1966 *Théorie de Lie pour les
   groupoïdes différentiables* (C. R. Acad. Sci. 263) as
   originator of the Lie-groupoid programme.

2. **`03.05.21` Gauge groupoid of a principal bundle: $\frac{P \times P}{G} \rightrightarrows M$.**
   [NEW] Anchor Mackenzie 1.08 Ch. II §1.7 + Mackenzie 2005 Ch. 1 +
   Moerdijk-Mrcun §5.2. Three-tier; ~1800 words. Given a principal
   $G$-bundle $P \to M$, the **gauge groupoid** $\frac{P \times P}{G}
   \rightrightarrows M$ has arrows the $G$-orbits in $P \times P$
   under the diagonal action, with source $[u, v] \mapsto \pi(u)$
   and target $[u, v] \mapsto \pi(v)$. Composition: $[v, w] \cdot
   [u, v] = [u, w]$ (well-defined on $G$-orbits because of the
   diagonal-action equivalence). **The canonical transitive Lie
   groupoid.** Isotropy at $x \in M$: $\frac{P_x \times P_x}{G}
   \cong G$. Worked example: gauge groupoid of the Hopf bundle
   $S^3 \to S^2$ has isotropy $U(1)$. Master tier: **Mackenzie's
   structural theorem** — every transitive Lie groupoid arises as
   $\frac{P \times P}{G}$ for some principal $G$-bundle, with $G$
   the isotropy at any basepoint. **Bridges** `03.05.01-principal-
   bundle.md` to the upstream `03.03.10` Lie-groupoid unit.
   **Bisection** $\sigma: M \to \mathcal{G}$ of the gauge groupoid =
   gauge transformation of $P$; the **bisection group** of
   $\frac{P \times P}{G}$ is canonically $\mathrm{Aut}(P)$, the
   gauge group at `03.07.18-configuration-space-and-slice-theorem-
   on-mathcal-b-star-y.md`.

3. **`03.04.16` Lie algebroid: anchor, bracket, Leibniz law.** [NEW]
   Anchor Mackenzie 1.08 Ch. III + Cannas da Silva-Weinstein §17 +
   Marle 2008 *Calculus on Lie algebroids* survey. Three-tier;
   ~2200 words. Define a **Lie algebroid** $A \to M$ as: a smooth
   vector bundle, a bundle map $\rho: A \to TM$ called the
   **anchor**, and an $\mathbb{R}$-bilinear bracket $[-,-]:
   \Gamma(A) \times \Gamma(A) \to \Gamma(A)$ satisfying (a)
   Jacobi, (b) anti-symmetry, (c) **Leibniz** $[\sigma, f\tau] =
   f[\sigma, \tau] + (\rho\sigma \cdot f)\tau$ for $f \in C^\infty
   (M)$, and (d) $\rho_*: \Gamma(A) \to \mathfrak{X}(M)$ a
   Lie-algebra homomorphism. **Examples:** $A = TM$ (anchor = id,
   bracket = vector-field bracket); $A = \mathfrak{g}$ over a
   point (anchor = 0); $A = \mathfrak{g} \ltimes M$ for a Lie-
   algebra action; $A = D$ an integrable distribution. Worked
   example: cotangent bundle $T^*M$ of a **Poisson manifold** $(M,
   \pi)$ carries a Lie-algebroid structure with anchor $\pi^\sharp:
   T^*M \to TM$ and Koszul bracket $[\alpha, \beta] =
   \mathcal{L}_{\pi^\sharp \alpha}\beta - \mathcal{L}_{\pi^\sharp
   \beta}\alpha - d \pi(\alpha, \beta)$ (the Poisson-algebroid;
   bridges to `05.02.02-poisson-bracket.md`). Master tier: the
   **transitive case** with short exact sequence $0 \to L \to A
   \to TM \to 0$; the isotropy bundle $L = \ker \rho$ is a bundle
   of Lie algebras. **Originator-prose mandatory:** Pradines 1967
   *Théorie de Lie pour les groupoïdes différentiables. Calcul
   différentiel dans la catégorie des groupoïdes infinitésimaux*
   (C. R. Acad. Sci. 264) as originator of the Lie-algebroid
   definition; cite Mackenzie 1.08 Ch. III as the canonical
   pedagogical anchor.

4. **`03.05.22` Atiyah algebroid $\mathrm{At}(P) = TP/G$ of a principal bundle.**
   [NEW] Anchor Mackenzie 1.08 Ch. III §3 + Atiyah 1957 *Complex
   analytic connections in fibre bundles* (Trans. AMS 85) +
   Atiyah-Bott 1982 *Yang-Mills on Riemann surfaces* §2. Three-
   tier; ~2000 words. Given a principal $G$-bundle $\pi: P \to M$,
   the **Atiyah algebroid** is $\mathrm{At}(P) = TP/G$, with
   anchor $\rho: \mathrm{At}(P) \to TM$ induced by $T\pi: TP \to
   TM$ (well-defined because $T\pi$ is $G$-invariant) and Lie
   bracket induced by the Lie bracket of $G$-invariant vector
   fields on $P$ (which form a Lie algebra under restriction).
   **Short exact sequence (the Atiyah extension)** $0 \to
   \mathrm{ad}(P) \to \mathrm{At}(P) \to TM \to 0$, where
   $\mathrm{ad}(P) = P \times_G \mathfrak{g}$ is the **adjoint
   bundle** (the kernel of $\rho$ = the bundle of $G$-invariant
   vertical fields on $P$). **The Atiyah algebroid is the Lie
   algebroid of the gauge groupoid** $\frac{P \times P}{G}$
   (proved as Theorem in Mackenzie 1.08 Ch. IV §1; preview here).
   Worked examples: $\mathrm{At}(P)$ for the trivial bundle
   $P = M \times G$ is $TM \oplus \mathfrak{g}$ (with split anchor);
   $\mathrm{At}(P)$ for the Hopf bundle $S^3 \to S^2$ is a rank-3
   Lie algebroid over $S^2$ with $\mathrm{ad}(P) \cong S^2 \times
   \mathfrak{u}(1)$. Master tier: the construction's functoriality
   in $P$, and the fact that $\mathrm{At}(P)$ is **the most
   important transitive Lie algebroid in gauge theory**.
   **Bridges** `03.05.01` (principal bundle), `03.04.16` (Lie
   algebroid), and `03.05.07-principal-bundle-connection.md` (next
   item).

5. **`03.05.23` Connection on a principal bundle as splitting of the Atiyah algebroid.**
   [NEW] Anchor Mackenzie 1.08 Ch. V §1–§2 + Atiyah-Bott 1982 §2 +
   Cattaneo-Felder 2007 survey *Relative formality theorem and
   quantisation of coisotropic submanifolds*. Three-tier;
   ~2000 words. **Connection-as-splitting:** a principal-bundle
   connection $\omega \in \Omega^1(P; \mathfrak{g})$ corresponds
   bijectively to a smooth bundle splitting $\gamma: TM \to
   \mathrm{At}(P)$ of the Atiyah exact sequence (i.e., a section
   with $\rho \circ \gamma = \mathrm{id}_{TM}$). The horizontal
   distribution $H \subseteq TP$ pulls back to a sub-bundle of
   $\mathrm{At}(P)$ complementary to $\mathrm{ad}(P)$, which is
   the image of $\gamma$. **Algebroid curvature:** $R_\gamma(X, Y) =
   [\gamma X, \gamma Y]_{\mathrm{At}(P)} - \gamma([X, Y])$ — an
   $\mathrm{ad}(P)$-valued 2-form on $M$ — corresponds to the
   classical bundle curvature $\Omega \in \Omega^2(P; \mathfrak{g})$
   pushed down to $M$ via the standard identification
   $\Omega^k(M; \mathrm{ad}(P)) \cong (\Omega^k(P; \mathfrak{g}))^G_{
   \mathrm{horizontal}}$. **Dictionary theorem:** the categories of
   (principal-$G$-bundle, connection) and (Atiyah-algebroid,
   splitting) over $M$ are equivalent. Worked example: the Levi-
   Civita connection on a Riemannian manifold viewed as a splitting
   of the Atiyah algebroid of the orthonormal frame bundle (bridges
   to `48.05.15-linear-connection-frame-bundle-soldering-form.md`).
   Master tier: bisection-group action on splittings = gauge
   transformations; Yang-Mills moduli $\mathcal{A}/\mathcal{G}$
   in algebroid language. **Bridges** `03.05.07`, `03.05.09-curvature.md`,
   and `03.07.05-yang-mills-action.md` via lateral connections; the
   classical KN-I packaging is **a re-derivable corollary**.

6. **`03.04.17` Lie functor: differentiating a Lie groupoid to its Lie algebroid.**
   [NEW] Anchor Mackenzie 1.08 Ch. IV §1 + Moerdijk-Mrcun Ch. 6 +
   Crainic-Fernandes survey "Lectures on integrability of Lie
   brackets" (Geom. Topol. Monogr. 17, 2011) §2 (background).
   Three-tier; ~1800 words. Define $A(\mathcal{G}) = \ker(d\alpha)
   \vert_M$ as the vertical tangent bundle of $\alpha$ restricted to
   the unit submanifold; anchor $\rho = d\beta \vert_{A(\mathcal{G})}$;
   Lie bracket induced from right-invariant vector fields on
   $\mathcal{G}$ (form a Lie subalgebra of $\mathfrak{X}(\mathcal{G})$,
   isomorphic to $\Gamma(A(\mathcal{G}))$ via restriction to $M$).
   **Theorem:** $A(\mathcal{G})$ is a Lie algebroid; $\mathcal{G}
   \mapsto A(\mathcal{G})$ is functorial in Lie-groupoid morphisms.
   **Worked computations:** $A(M \times M) = TM$; $A(G \ltimes M) =
   \mathfrak{g} \ltimes M$; $A(\frac{P \times P}{G}) =
   \mathrm{At}(P)$ (this closes the gauge groupoid ↔ Atiyah
   algebroid loop). Master tier: the **Lie's first theorem analogue**
   — every Lie-groupoid morphism over $\mathrm{id}_M$ differentiates
   uniquely; the **fundamental Lie-groupoid as the integral** of
   $TM$. **Bridges** `48.03.06-lie-third-theorem.md` (the classical
   Lie-group analogue: $G \mapsto T_e G = \mathfrak{g}$),
   `03.03.10`, `03.04.16`, `03.05.22`.

7. **`03.04.18` Pradines integration theorem and Mackenzie's transitive integrability.**
   [NEW] Anchor Mackenzie 1.08 Ch. IV §3–§4 + Pradines 1966
   originator + Crainic-Fernandes 2003 *Integrability of Lie
   brackets* (Ann. Math. 157) (cited as the post-1987 resolution).
   Three-tier; ~2200 words. **Integration problem (Pradines 1966):**
   given a Lie algebroid $A \to M$, does there exist a Lie groupoid
   $\mathcal{G} \rightrightarrows M$ with $A(\mathcal{G}) \cong A$?
   **Pradines local theorem:** every Lie algebroid integrates to a
   **local** Lie groupoid (germ along the unit submanifold).
   **Mackenzie's counterexample (1987):** explicit construction of a
   Lie algebroid that does **not** integrate to any global Lie
   groupoid — the obstruction sits in the second Lie-algebroid
   cohomology $H^2(A; \ker \rho)$ and in retrospect (Crainic-
   Fernandes 2003) coincides with the **monodromy groups** of $A$.
   **Mackenzie's transitive integration theorem (1987):** every
   **transitive** Lie algebroid is globally integrable to a Lie
   groupoid, unique up to covering. The proof uses the structural
   classification (Cluster II item 2 above) — a transitive algebroid
   is the Atiyah algebroid of a principal bundle, and the
   integration is the gauge groupoid. Worked example: $\mathrm{At}(P)$
   integrates to $\frac{P \times P}{G}$ (the canonical case). Master
   tier: pointer-paragraph to Crainic-Fernandes 2003 for the general
   non-transitive obstruction (full treatment deferred to FT 1.09
   audit). **Originator-prose mandatory:** Pradines 1966 + 1967 (the
   two C. R. Acad. Sci. notes that pose the integration problem);
   Mackenzie 1987 (this book) as the canonical pedagogical anchor
   for the transitive case.

**Priority 2 — Cluster I algebraic-groupoid foundations + Cluster III worked-example breadth:**

8. **`03.03.11` Action Lie groupoid $G \ltimes M$ and action Lie algebroid $\mathfrak{g} \ltimes M$.**
   [NEW] Anchor Mackenzie 1.08 Ch. II §1.5 + Ch. III §1.4 +
   Moerdijk-Mrcun §5.1. Three-tier; ~1500 words. Given a smooth
   left $G$-action on $M$, form the **action groupoid** $G \ltimes
   M \rightrightarrows M$ with arrows $(g, x): x \to g \cdot x$
   and composition $(h, gx) \cdot (g, x) = (hg, x)$. Lie-groupoid
   structure: smooth iff the action is smooth. Lie algebroid
   $A(G \ltimes M) = \mathfrak{g} \ltimes M$ is the trivial
   bundle $M \times \mathfrak{g}$ with anchor $\rho(X)\vert_x =
   X_M(x)$ (the fundamental vector field of $X \in \mathfrak{g}$
   at $x$) and bracket $[X, Y]\vert_x = [X, Y]_\mathfrak{g}$
   (constant in $x$ for the constant sections). Worked examples:
   $SO(3) \curvearrowright \mathbb{R}^3$ rotation action;
   coadjoint action $G \curvearrowright \mathfrak{g}^*$ (bridges
   to `05.03.01-coadjoint-orbit.md`). **Bridges**
   `03.03.02-group-action.md`, `03.03.10`, `03.04.16`.

9. **`03.04.19` Cotangent algebroid of a Poisson manifold; pointer to symplectic groupoids.**
   [NEW] Anchor Mackenzie 1.08 Ch. III §1.6 (the construction
   appears explicitly in Mackenzie 1987 though the full
   symplectic-groupoid theory is post-1987 and parked for FT 1.09)
   + Weinstein 1983 *The local structure of Poisson manifolds*
   (J. Diff. Geom. 18) + Coste-Dazord-Weinstein 1987 (Publ. Dépt.
   Math. Lyon) for the symplectic-groupoid construction.
   Three-tier; ~1700 words. Given a Poisson manifold $(M, \pi)$,
   the cotangent bundle $T^*M$ carries a Lie-algebroid structure
   with anchor $\pi^\sharp: T^*M \to TM$, $\alpha \mapsto \pi(\alpha,
   -)$, and **Koszul bracket** on 1-forms $[\alpha, \beta] =
   \mathcal{L}_{\pi^\sharp \alpha}\beta - \mathcal{L}_{\pi^\sharp
   \beta}\alpha - d \pi(\alpha, \beta)$. Worked example: linear
   Poisson structure on $\mathfrak{g}^* = $ dual of a Lie algebra,
   with $\pi$ the Lie-Poisson bracket; the cotangent algebroid is
   the action algebroid for the coadjoint action. Master tier:
   pointer to the **symplectic-groupoid integration** problem —
   does the cotangent algebroid of $(M, \pi)$ integrate to a
   symplectic groupoid? (Yes for $\mathfrak{g}^*$, via Karasev /
   Weinstein 1987; general obstruction = Crainic-Fernandes 2004
   *Integrability of Poisson brackets*, deferred to FT 1.09).
   **Bridges** `05.02.02-poisson-bracket.md`, `03.04.16`,
   `05.03.01-coadjoint-orbit.md`.

10. **`03.03.12` Bisection group of a Lie groupoid; gauge transformations as bisections.**
    [NEW] Anchor Mackenzie 1.08 Ch. II §2 + Ch. V §3. Master-tier
    dominant; ~1500 words. A **bisection** of $\mathcal{G}
    \rightrightarrows M$ is a smooth map $\sigma: M \to
    \mathcal{G}$ with $\alpha \circ \sigma = \mathrm{id}_M$ and
    $\beta \circ \sigma$ a diffeomorphism of $M$. Bisections form
    a group under pointwise composition. For the gauge groupoid
    $\frac{P \times P}{G}$, the bisection group is canonically
    isomorphic to $\mathrm{Aut}(P) = $ the gauge group of $P$.
    Master tier: bisections act on splittings of the Atiyah
    algebroid by gauge transformation of connections; the
    moduli space $\mathcal{A}/\mathcal{G}$ at `03.07.18-
    configuration-space-and-slice-theorem-on-mathcal-b-star-y.md`
    is the quotient by the bisection-group action. **Bridges**
    `03.03.10`, `03.05.21`, `03.07.18`.

**Priority 3 — Cluster I algebra of groupoids + ENRICH paragraphs:**

11. **`03.03.13` Groupoid as a small category with all morphisms invertible (pure algebra).**
    [NEW] Anchor Mackenzie 1.08 Ch. I + Brown *Topology and
    Groupoids* §6 (algebraic-groupoid view) + Moerdijk-Mrcun §1.
    Three-tier; ~1500 words. Pure-algebra precursor to `03.03.10`:
    a **groupoid** as a small category $\mathcal{G}$ with all
    morphisms invertible; objects = base set $M$; arrows = morphism
    set $\mathcal{G}$; source/target $\alpha, \beta: \mathcal{G}
    \to M$; identity $u: M \to \mathcal{G}$; composition;
    inversion. **Vertex / isotropy group** $\mathcal{G}(x, x)$ at
    each $x \in M$. **Transitive vs intransitive**; orbits as
    equivalence classes. **Examples:** pair groupoid, action
    groupoid, fundamental groupoid (algebraic version),
    isomorphism groupoid of a category. Master tier: groupoid
    morphisms, functors of groupoids, natural equivalences;
    pointer-paragraph to the topological-groupoid case
    (`03.03.10`). **Bridges** `03.12.08-fundamental-groupoid.md`,
    `03.03.10`. Note: this sits algebraically *upstream* of the
    Lie-groupoid unit `03.03.10` but is a separate level of
    abstraction (algebra-only vs smooth-structure); audit
    recommends shipping both even though `03.03.10` is the
    differential-geometry priority.

12. **`03.05.07` Deepen principal-bundle-connection unit with the Atiyah-algebroid splitting reformulation.**
    [DEEPEN] Anchor Mackenzie 1.08 Ch. V + Atiyah 1957 +
    Atiyah-Bott 1982. Master-tier addition, ~500 words.
    Currently `03.05.07-principal-bundle-connection.md` presents
    the connection $\omega \in \Omega^1(P; \mathfrak{g})$ in pure
    KN-I packaging; this deepening adds a Master subsection
    **"Algebroid reformulation"** that defines the Atiyah
    extension and identifies a connection with a splitting of it.
    Cross-link forward to `03.05.23`. **No new unit ID** —
    in-place deepening.

13. **`03.05.09` Deepen curvature unit with the algebroid-curvature interpretation.**
    [DEEPEN] Anchor Mackenzie 1.08 Ch. V §2. Master-tier
    addition, ~400 words. Add a §"Curvature as failure of splitting
    to be a Lie-algebroid morphism" subsection. Cross-link to
    `03.05.23`. **No new unit ID.**

14. **`03.07.18` Deepen configuration-space unit with the bisection-group framing.**
    [DEEPEN] Anchor Mackenzie 1.08 Ch. V §3. Master-tier
    addition, ~300 words. Reframe the gauge group $\mathrm{Aut}(P)$
    as the bisection group of $\frac{P \times P}{G}$; cross-link
    to `03.05.21` and `03.03.12`. **No new unit ID.**

15. **`03.04.01` Enrich Lie-algebra unit with §Originator paragraph on Pradines + algebroid-generalisation pointer.**
    [ENRICH] Anchor Pradines 1967 + Mackenzie 1.08 Ch. III §1.
    ~200 words. Add a §"Generalisation to Lie algebroids"
    paragraph in the Master tier pointing to `03.04.16` and
    flagging Pradines 1967 as the originator of the algebroid
    generalisation. **No new unit ID.**

16. **`48.03.06` Enrich Lie's-third-theorem unit with the algebroid-integration parallel.**
    [ENRICH] Anchor Mackenzie 1.08 Ch. IV §3 + Pradines 1966.
    ~200 words. Add a §"Algebroid analogue" paragraph in the
    Master tier: the algebroid integration theorem is the
    Lie-groupoid analogue of Lie's third theorem; the analogue
    **fails** in general (Mackenzie 1987 counterexample) and is
    resolved fully only by Crainic-Fernandes 2003. Cross-link to
    `03.04.18`. **No new unit ID.**

**Priority 4 — pointer / deepening / FT-1.09 hand-offs (optional, Master-only):**

17. **`03.12.08` Deepen fundamental-groupoid unit with the Lie-groupoid structure.**
    [DEEPEN] Anchor Mackenzie 1.08 Ch. II §1.4. Master-tier
    addition, ~250 words. Currently `03.12.08-fundamental-groupoid.md`
    presents $\pi_1(M, M)$ as a topological groupoid; add a
    paragraph noting that for $M$ a smooth manifold, $\pi_1(M, M)$
    carries a canonical Lie-groupoid structure (smooth via
    universal cover construction), and that its Lie algebroid is
    $TM$. Cross-link to `03.03.10`, `03.04.17`. **No new unit ID.**

18. **Pointer in `03.05.21`, `03.04.18`** to FT 1.09 (Mackenzie
    2005) for: non-transitive integration (Crainic-Fernandes),
    symplectic groupoids, Poisson groupoid integration, double Lie
    groupoids, the modular class, and Lie bialgebroids. These are
    **post-1987** and are the substantive expansion of FT 1.09 over
    FT 1.08; the 1987 audit should explicitly hand them off rather
    than attempt to cover them. Single-paragraph weaving edit in
    each unit's Master tier, not a new unit; recorded here so the
    hand-off is not forgotten.

### Already covered — items extracted from the audit to keep the punch-list focused (do not produce):

- **Principal bundle, vector bundle, principal-bundle connection,
  curvature 2-form, vector-bundle covariant derivative, associated
  bundle, parallel transport, holonomy, reduction of structure
  group, Cartan structural equations, frame bundle:** already
  covered by `03.05.01`, `03.05.02`, `03.05.04`, `03.05.07`,
  `03.05.09`, `48.05.11`, `48.05.12`, `48.05.13`, `48.05.14`,
  `48.05.15`, `48.05.16`, `48.05.17` (KN-I / LDG / Sternberg-LDG
  audit production). These are the **principal-bundle examples**
  of Mackenzie's theory; the algebroid reformulation is the
  punch-list contribution, not the underlying principal-bundle
  apparatus.
- **Lie group, Lie algebra, exponential map, Lie's third theorem,
  group action:** already covered by `03.03.01`, `03.04.01`,
  `48.03.06`, `03.03.02`. The **algebroid generalisations** are
  the priority-1 / priority-2 punch-list items above; the
  group-side material is shipped.
- **Frobenius theorem, integrable distribution:** already covered
  by `48.02.04-frobenius-theorem.md`. The algebroid framing of an
  integrable distribution is captured in `03.04.16` Master tier as
  a worked example, not a separate unit.
- **Fundamental groupoid (topological), covering space, van Kampen
  (group + groupoid):** already covered by `03.12.08`, `03.12.02`,
  `03.12.09` (Brown audit production). The Lie-groupoid
  deepening of `03.12.08` is in priority-4 above.
- **Yang-Mills action, ASD equation, BPST instanton, ADHM, moduli
  space:** already covered by `03.07.05`–`03.07.10`. The
  algebroid / gauge-groupoid reformulation of gauge theory is in
  priority-1 (`03.05.23`) and priority-3 (`03.07.18` deepening),
  not a separate Yang-Mills unit.
- **Atiyah-Singer index theorem:** already covered by `03.09.10-atiyah-
  singer-index-theorem.md`. The 1987 book makes no contribution to
  Atiyah-Singer directly; the connection is via the Atiyah-algebroid
  / Atiyah 1957 originator citation in `03.05.22`.
- **Poisson bracket, symplectic manifold, coadjoint orbit:** already
  covered by `05.02.02`, `05.01.02`, `05.03.01`. The
  cotangent-algebroid framing of a Poisson manifold is in
  priority-2 (`03.04.19`).

---

## §4 Acceptance criteria for FT equivalence (Mackenzie 1.08)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Mackenzie 1987's named theorems in Chs. I–V map to Babel
  Bible units. Current ~10%; after priority-1 patches rises to ~75%;
  after priority-1+2 to ~88%; full ≥95% requires priority-3
  (priority-4 is weaving and hand-offs).
- ≥90% of Mackenzie's worked examples (pair groupoid, action
  groupoid, gauge groupoid of Hopf bundle, fundamental Lie groupoid,
  Atiyah algebroid of trivial / Hopf / Stiefel bundles, cotangent
  algebroid of $\mathfrak{g}^*$, action algebroid $\mathfrak{g}
  \ltimes M$, non-integrable counterexample) have either a direct
  unit or are referenced from a unit covering them.
- The 5 priority-1 net-new units (`03.03.10`, `03.05.21`, `03.04.16`,
  `03.05.22`, `03.05.23`) and the 2 priority-1 Lie-functor /
  integration units (`03.04.17`, `03.04.18`) all ship and validate
  at 27/27.
- The deepening of `03.05.07-principal-bundle-connection.md` adds the
  Atiyah-algebroid splitting reformulation (priority-3 item 12) and
  the deepening of `03.05.09-curvature.md` adds the algebroid-curvature
  interpretation (item 13).
- `03.07.18-configuration-space-and-slice-theorem-on-mathcal-b-star-y.md`
  cites the bisection-group framing (priority-3 item 14).
- Notation crosswalk is recorded in `03.03.10`, `03.04.16`, `03.05.22`,
  `03.05.23` aligning Mackenzie's $\mathcal{G} \rightrightarrows M$,
  $\alpha, \beta, u, m, i$, $A(\mathcal{G})$, $\mathrm{At}(P)$, $\rho$
  notation with the existing KN-I $\omega, \Omega, P(M, G)$
  notation. The crosswalk should explicitly mark the two
  presentations as **dual** (same content, opposite packaging).
- Originator-prose citations of Ehresmann 1958, Pradines 1966 + 1967,
  Mackenzie 1987 (this book), and Atiyah 1957 are present in the
  relevant units.
- Hand-off paragraphs at `03.05.21` and `03.04.18` reference FT 1.09
  (Mackenzie 2005) for the post-1987 expansions (Crainic-Fernandes,
  symplectic groupoids, doubles).

The 7 priority-1 units close the foundational Lie-groupoid / Lie-
algebroid / Lie-functor / integration gap. Priority-2 closes the
action-groupoid and Poisson-algebroid examples. Priority-3 closes the
algebra-of-groupoids layer and deepens the existing principal-bundle
units with the algebroid reformulation. Priority-4 is FT-1.09
hand-off paragraphs.

---

## §5 Sourcing and notation crosswalk

- **Sourcing.** BUY. CUP LMS LNS 124 (1987), ISBN 978-0-521-34882-9.
  Currently print-on-demand through CUP's LMS LNS reissue programme;
  secondhand $40–60. Listed on `docs/catalogs/FASTTRACK_BOOKLIST.md`
  entry 1.08 as BUY.
- **Local copy.** **Not present** in
  `reference/fasttrack-texts/01-fundamentals/` at audit time. A
  scanned copy should be added to
  `reference/fasttrack-texts/01-fundamentals/Mackenzie-LieGroupoidsLieAlgebroidsVol1.pdf`
  before production on the priority-1 punch-list units, so that
  line-number citations can be resolved.
- **Companion peer texts:**
  - **K. Mackenzie**, *General Theory of Lie Groupoids and Lie
    Algebroids* (LMS LNS 213, CUP 2005). The comprehensive sequel
    (FT 1.09); separate audit. Treats the post-1987 material
    (Crainic-Fernandes, symplectic groupoids, doubles, modular
    class) that this 1987 audit deliberately defers.
  - **I. Moerdijk, J. Mrcun**, *Introduction to Foliations and
    Lie Groupoids* (Cambridge Studies in Advanced Mathematics 91,
    CUP 2003). The modern pedagogical entry to Lie groupoids;
    preferred secondary anchor for `03.03.10`, `03.04.16`,
    `03.04.17`.
  - **A. Cannas da Silva, A. Weinstein**, *Geometric Models for
    Noncommutative Algebras* (Berkeley Math. Lect. Notes 10, AMS
    1999). The lecture-note treatment of Lie algebroids and
    Poisson manifolds; secondary anchor for `03.04.16`,
    `03.04.19`. Author-hosted free PDF on Cannas da Silva's
    Harvard page.
  - **M. Crainic, R. L. Fernandes**, "Lectures on integrability
    of Lie brackets" (Geometry & Topology Monographs 17, 2011).
    The post-1987 expansion of integration theory; used for
    background paragraphs in `03.04.17`, `03.04.18` (the full
    treatment belongs to FT 1.09).
  - **J. Pradines**, two 1966–1967 C. R. Acad. Sci. notes
    (originator papers for the Lie-groupoid / Lie-algebroid
    correspondence; cited in `03.03.10`, `03.04.16`).
  - **M. F. Atiyah**, "Complex analytic connections in fibre
    bundles" (Trans. AMS 85, 1957). Originator of the
    Atiyah-extension construction; cited in `03.05.22`,
    `03.05.23`.
  - **M. F. Atiyah, R. Bott**, "The Yang-Mills equations over
    Riemann surfaces" (Phil. Trans. R. Soc. A 308, 1982).
    The canonical use of the Atiyah algebroid in gauge theory;
    cited in `03.05.23`, `03.07.18` (deepening).

- **Notation crosswalk.** Mackenzie writes:
  - $\mathcal{G} \rightrightarrows M$ for a groupoid over a base
    set / manifold $M$; the double arrow indicates the source
    $\alpha$ and target $\beta$ together.
  - $\alpha, \beta: \mathcal{G} \to M$ for source and target maps
    (some authors write $s, t$; Mackenzie uses $\alpha, \beta$
    throughout).
  - $u: M \to \mathcal{G}$ for the unit / identity-arrow map.
  - $i: \mathcal{G} \to \mathcal{G}$ for inversion.
  - $m: \mathcal{G}_\alpha \times_\beta \mathcal{G} \to
    \mathcal{G}$ for composition on the fibre product.
  - $\mathcal{G}(x, x)$ for the **vertex** / isotropy group at
    $x \in M$.
  - $A(\mathcal{G})$ for the **Lie algebroid** of a Lie groupoid
    $\mathcal{G}$.
  - $\mathrm{At}(P) = TP/G$ for the Atiyah algebroid of a
    principal $G$-bundle $P$.
  - $\frac{P \times P}{G}$ for the gauge groupoid (in modern
    notation often $P \times_G P$; Mackenzie uses the explicit
    quotient).
  - $\rho: A \to TM$ for the anchor map of a Lie algebroid.
  - $\Gamma(A)$ for smooth sections of $A$ (the underlying
    $\mathbb{R}$-vector space carrying the algebroid bracket).
  - $\mathrm{ad}(P) = P \times_G \mathfrak{g}$ for the adjoint
    bundle (= isotropy bundle of $\mathrm{At}(P)$).

  Moerdijk-Mrcun and Crainic-Fernandes use identical
  $\mathcal{G} \rightrightarrows M$, $A$, $\rho$ notation; Mackenzie
  2005 retains the 1987 notation throughout. The Babel Bible
  decision (per `docs/specs/UNIT_SPEC.md` §11) is to **adopt
  Mackenzie's $\mathcal{G} \rightrightarrows M$, $\alpha, \beta$,
  $A(\mathcal{G})$, $\mathrm{At}(P)$, $\rho$ verbatim** in the new
  Lie-groupoid / algebroid units, **with a §Notation paragraph in
  `03.05.23` crosswalking $\omega = $ KN-I connection 1-form ↔
  $\gamma = $ Mackenzie algebroid splitting** (and similarly $\Omega$
  ↔ $R_\gamma$). The two presentations are dual and the crosswalk
  is the load-bearing notation work.

---

## §6 What this plan does NOT cover

- **Mackenzie 2005 (FT 1.09)** — the comprehensive 600-page sequel.
  Audited separately. Vol. 1.09 covers: non-transitive integration
  via Crainic-Fernandes (2003), symplectic groupoids and Poisson-
  manifold integration (Coste-Dazord-Weinstein 1987, Mackenzie-Xu
  1994), **double Lie groupoids and double Lie algebroids**,
  Lie bialgebroids, the **modular class**, and Mackenzie's own
  contributions on duality of double structures. Approximately
  twice the scope of the 1987 book.
- **Foliation theory beyond pointer level.** Haefliger 1958
  (originator of holonomy groupoids of foliations) and the
  Moerdijk-Mrcun foliation-side of the Lie-groupoid programme are
  beyond the 1987 book's focus. Deferred to a future Moerdijk-Mrcun
  / Connes audit if Codex ever expands into noncommutative geometry
  / foliation theory at unit depth.
- **Symplectic / Poisson groupoid integration in full.** The
  cotangent-algebroid pointer in `03.04.19` is the audit's
  contribution; the full symplectic-groupoid theory (Karasev,
  Weinstein, Coste-Dazord-Weinstein, Cattaneo-Felder) belongs to
  FT 1.09.
- **VB-groupoids, double Lie algebroids, Courant algebroids,
  generalised geometry.** Post-1987 developments; out of scope for
  this audit. The Courant-algebroid programme (Liu-Weinstein-Xu
  1997) is canonically downstream of Mackenzie's bialgebroid work
  and belongs to a future Hitchin / Gualtieri audit.
- **Lie groupoid cohomology and characteristic classes of Lie
  algebroids.** Mackenzie 1987 touches this only via the
  integration obstruction; full treatment (Crainic 2003, Crainic-
  Fernandes 2003, Mehta 2009) is post-1987 and belongs to FT 1.09.
- **Stacks, derived geometry, ∞-groupoid models.** Topos-theoretic
  / homotopical generalisations of groupoids beyond the differential-
  geometric category. Out of scope.

---

## §7 Summary card

- **Net-new units (priority 1):** 7
  (`03.03.10`, `03.05.21`, `03.04.16`, `03.05.22`, `03.05.23`,
  `03.04.17`, `03.04.18`).
- **Net-new units (priority 2):** 3
  (`03.03.11`, `03.04.19`, `03.03.12`).
- **Net-new units (priority 3):** 1
  (`03.03.13` algebra-of-groupoids).
- **Deepenings (priority 3):** 3
  (`03.05.07`, `03.05.09`, `03.07.18`).
- **ENRICH paragraphs (priority 3):** 2
  (`03.04.01`, `48.03.06`).
- **Deepenings + hand-offs (priority 4):** 2
  (`03.12.08` Lie-groupoid framing; FT-1.09 pointer paragraphs in
  `03.05.21`, `03.04.18`).
- **Total net-new units:** 11.
- **Total deepenings + enrichments:** 7 in-place edits.
- **Originator-prose anchors:** Ehresmann 1958, Pradines 1966 + 1967,
  Mackenzie 1987, Atiyah 1957, Atiyah-Bott 1982.
- **Already-covered count from §2:** ~18 classical principal-bundle
  / Lie-group / fundamental-groupoid items already shipped via
  KN-I, LDG, Brown, Sternberg-LDG audit production; these are the
  **examples** of Mackenzie's theory rather than the theory itself.

**Distinctive Mackenzie 1987 contribution vs the existing Codex.**
The Babel Bible covers principal bundles and their connections in
full classical KN-I packaging. Mackenzie 1987 covers the **same
material from above**: principal bundles are the **canonical
transitive Lie groupoids**, connections are **splittings of Atiyah
algebroids**, the gauge group is **the bisection group**, and the
whole apparatus generalises to **non-principal-bundle settings**
(foliations, Poisson manifolds, action geometries) where Lie
groupoids and Lie algebroids exist but no principal bundle does. The
audit's signature contribution is the **structural reframing** that
makes principal-bundle theory a special case of Lie-groupoid theory,
plus the **integration problem** (Pradines / Mackenzie / later
Crainic-Fernandes) which has no analogue in the classical
principal-bundle apparatus because every Lie group integrates (Lie's
third) and so the problem only becomes interesting in the algebroid
generalisation. **Net pedagogical lift:** the Codex gains a
structural layer above its principal-bundle chapter, and gauge theory
gains an algebroid presentation matching the post-2000 research
literature (Atiyah-Bott, Cattaneo-Felder, Crainic-Fernandes).
