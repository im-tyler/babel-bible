# Milnor, Stasheff — *Characteristic Classes* (Fast Track 3.08) — Audit + Gap Plan

**Book:** John W. Milnor and James D. Stasheff, *Characteristic Classes*
(Annals of Mathematics Studies, No. 76), Princeton University Press,
1974. xv + 330 pp. ISBN 0-691-08122-0 (paperback).

**Fast Track entry:** 3.08. Modern-Geometry strand (B), characteristic-class
backbone shared with Bott-Tu (FT 1.17), Husemoller *Fibre Bundles*, and
Lawson-Michelsohn *Spin Geometry* (FT 3.10).

**Source PDF (free, library-archived):** Ranicki's Edinburgh mirror at
<https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf>. The
publisher (Princeton University Press) sells the paperback; the Ranicki
archive is the de-facto free academic copy used in the literature.
PDF exceeds the 10 MB WebFetch ceiling; this audit works from the
book's well-known structure (21 numbered sections + three appendices)
cross-checked against published reviews, the Lawson-Michelsohn audit
which cites Milnor-Stasheff throughout, the existing Codex stubs in
`03-modern-geometry/06-characteristic-classes/`, and the secondary
references listed in §1 below.

**Audit type:** P1-lite audit + P2 gap pass + P3-lite punch-list,
mirroring `brown-higgins-sivera-nonabelian-algebraic-topology.md`.
This is **not** a full P1 line-number inventory; that is deferred
pending direct PDF access at line-number granularity.

**Plan status:** `reduced` — single audit pass over book structure
without a full line-number P1 inventory. Sufficient to drive the
production punch-list to FT-equivalence. Full P1 deferred.

---

## §1 What Milnor-Stasheff is for

Milnor-Stasheff is the canonical English-language graduate text on
**characteristic classes of vector bundles** — Stiefel-Whitney, Chern,
Pontryagin, and the Euler class — developed first axiomatically and
then constructed via Grassmannian classifying spaces, the Thom
isomorphism, and Steenrod squares. The book closes with Hirzebruch's
signature theorem and a glimpse of Pontryagin-class applications to
manifold topology (exotic 7-spheres, the Pontryagin-Thom construction).
It is the reference that every later text (Hatcher *Vector Bundles
and K-Theory*, Bott-Tu, Husemoller, Madsen-Tornehave) cites as the
canonical treatment.

Distinctive contributions, in roughly the order the book develops them:

1. **Axiomatic Stiefel-Whitney classes (§4).** Naturality, Whitney
   product formula $w(E \oplus F) = w(E) \smile w(F)$, dimension axiom,
   and normalisation on the tautological line bundle over $\mathbb{RP}^\infty$.
   Existence and uniqueness proved without choosing a model first —
   the axioms determine the classes, then constructions verify them.
2. **Grassmannian / classifying-space construction (§5–§7, §14).**
   The infinite Grassmannian $G_n(\mathbb{R}^\infty)$ classifies rank-$n$
   real vector bundles; $\widetilde G_n$ the oriented version; $G_n(\mathbb{C}^\infty)$
   the complex version. The cohomology rings
   $H^*(BO(n); \mathbb{Z}/2) = \mathbb{Z}/2[w_1, \ldots, w_n]$,
   $H^*(BU(n); \mathbb{Z}) = \mathbb{Z}[c_1, \ldots, c_n]$ are computed
   directly via Schubert cells (§6, §14).
3. **Stiefel-Whitney numbers (§4, §16) and bordism (§17–§18).**
   $w_i[M]$ are the Stiefel-Whitney numbers of a closed manifold;
   Thom's theorem that two closed manifolds are unoriented-cobordant
   iff their Stiefel-Whitney numbers agree (§17). Pontryagin numbers
   and oriented cobordism (§18). This is where characteristic classes
   meet bordism — historically the original motivation.
4. **Obstruction-theoretic content of $w_i$ (§9, §12).** $w_1$ is the
   orientation obstruction; $w_2$ is the spin-structure obstruction;
   higher $w_i$ obstruct higher framings (string, fivebrane).
   The Whitney duality theorem $w(TM) \smile w(\nu) = 1$ for an
   immersed manifold (§4, §11) and its immersion-theoretic consequences.
5. **Thom isomorphism and Euler class (§8, §9, §10).** The Thom class
   $U \in H^n(E, E_0; \mathbb{Z})$ for an oriented rank-$n$ bundle;
   $\Phi: H^k(B) \xrightarrow{\sim} H^{k+n}(E, E_0)$ the Thom isomorphism.
   The Euler class $e(E) \in H^n(B; \mathbb{Z})$ defined as the
   restriction $U|_B$; Euler-class obstruction theorem
   ($e(E) = 0$ iff $E$ has a nonzero section, modulo low-dim subtleties).
6. **Chern classes via the projectivisation (§14).** Construction of
   $c_i \in H^{2i}(B; \mathbb{Z})$ for complex rank-$n$ bundles by the
   Leray-Hirsch / Grothendieck recipe applied to $\mathbb{P}(E) \to B$.
   The splitting principle, total Chern class
   $c(E) = \prod (1 + x_i)$ where $x_i$ are the formal Chern roots.
7. **Pontryagin classes (§15).** $p_i(E) = (-1)^i c_{2i}(E \otimes \mathbb{C})$
   for real bundles. Compatibility with Chern classes of the
   complexification. Pontryagin numbers $p_I[M]$ on oriented $4k$-manifolds
   as cobordism invariants.
8. **Hirzebruch signature theorem (§19).** For an oriented closed $4k$-manifold,
   $\mathrm{sign}(M) = \langle L_k(p_1, \ldots, p_k), [M] \rangle$ where $L_k$
   is the $k$-th Hirzebruch $L$-polynomial, defined by the formal power series
   $\prod \frac{x_i}{\tanh x_i}$. This is the prototype index-theoretic
   identity and the historical seed of the Atiyah-Singer index theorem.
9. **Combinatorial Pontryagin classes and exotic spheres (§20).**
   Milnor's exotic $7$-spheres are detected by Pontryagin-class /
   signature obstructions; this is the application-pinnacle of the book.
10. **Steenrod-square interpretation of Stiefel-Whitney (§8, §11).**
    $w_i = \mathrm{Sq}^i(U)$ where $U$ is the mod-2 Thom class —
    the formula tying Stiefel-Whitney classes to Steenrod operations.
11. **Three appendices.** Appendix A — cohomology and the cup product;
    Appendix B — Bernoulli numbers (used in the signature formula);
    Appendix C — connection between Chern-Weil and the singular-cohomology
    construction (where characteristic classes pass between the
    differential-geometric and topological camps).

The book is the *standard reference* — not a first text on bundles
(Husemoller serves that role) and not a first text on de Rham
characteristic classes (Bott-Tu serves that role). Milnor-Stasheff
sits at the *topological* center of the characteristic-class web.

**Peer cross-references** (the four cited reference texts and where they
overlap Milnor-Stasheff):

- **Hatcher, *Vector Bundles and K-Theory* (online draft).** Chapters 2–3.
  Hatcher covers Stiefel-Whitney + Chern axioms (§3.1), the Grassmannian
  / classifying-space construction (§1.2), and the Leray-Hirsch /
  splitting-principle derivation (§3.1). Doesn't cover bordism or the
  signature theorem.
- **Bott-Tu, *Differential Forms in Algebraic Topology* (FT 1.17).** §6, §11,
  §20–§23. Bott-Tu covers Thom isomorphism, Euler class, Chern classes
  via the de Rham / Chern-Weil route, splitting principle, and Pontryagin
  classes. Doesn't cover bordism, signature theorem, or exotic spheres.
- **Husemoller, *Fibre Bundles* (3rd ed., GTM 20, 1994).** §16–§20.
  Husemoller covers Stiefel-Whitney, Chern, Pontryagin classes
  axiomatically and via the Grassmannian construction with detailed
  proofs. Closest companion to Milnor-Stasheff; less manifold-topology
  application content.
- **Madsen-Tornehave, *From Calculus to Cohomology* (1997).** §17–§24.
  Madsen-Tornehave is a more elementary treatment via de Rham,
  pedagogically close to Bott-Tu. Covers Euler class, Chern classes,
  signature theorem via Chern-Weil. Doesn't cover bordism.
- **Lawson-Michelsohn, *Spin Geometry* (FT 3.10).** §I.2, §III.13.
  Spin perspective on $w_2$, signature theorem via the signature
  operator (Atiyah-Singer route). Complements Milnor-Stasheff's
  homotopy-theoretic route.

---

## §2 Coverage table (Codex vs Milnor-Stasheff)

Cross-referenced against the current corpus. The existing
`03-modern-geometry/06-characteristic-classes/` chapter has **four shipped
units**: `03.06.03 stiefel-whitney`, `03.06.04 pontryagin-chern-classes`,
`03.06.05 invariant-polynomial`, `03.06.06 chern-weil-homomorphism`.
The `08-k-theory/` chapter (5 shipped units) covers classifying spaces
and universal bundles. The `04-differential-forms/03.04.09 Thom`
unit covers the de Rham Thom isomorphism. Together these touch most
of Milnor-Stasheff's first half and leave the bordism / signature /
exotic-sphere arc almost entirely as a gap.

✓ = covered, △ = partial / different framing, ✗ = not covered.

| Milnor-Stasheff topic | Section | Codex unit(s) | Status | Note |
|---|---|---|---|---|
| Smooth manifolds, tangent bundles | §1–§2 | `03.02.01`+ | ✓ | Standard prereq. |
| Vector bundles, sections, frames | §2–§3 | `03.05.02`, `03.05.03`, `03.05.08` | ✓ | Real, complex, frame bundle all covered. |
| Stiefel-Whitney axioms ($w_i$) | §4 | `03.06.03` | △ | Axioms stated; "Master tier" anchors §4–§9. Whitney product, dimension, naturality covered. Whitney duality $w(TM)w(\nu)=1$ partial — referenced but not proved in unit. |
| Stiefel-Whitney numbers $w_I[M]$ | §4, §16 | — | ✗ | **Gap** — number invariants and pairing with $[M] \in H_n(M; \mathbb{Z}/2)$ not in any unit. |
| Grassmannians $G_n(\mathbb{R}^k)$, $G_n(\mathbb{R}^\infty)$ | §5–§6 | `03.08.04`, `03.08.05` | △ | Classifying space and universal bundle treated abstractly; the Grassmannian model and Schubert-cell cohomology calculation are **not** in the Codex. |
| Cohomology ring $H^*(BO(n); \mathbb{Z}/2) = \mathbb{Z}/2[w_1, \ldots, w_n]$ | §7 | — | ✗ | **Gap** — the central calculation of the topological side. Master-tier needed. |
| Existence + uniqueness of $w_i$ via Grassmannian | §5–§8 | — | ✗ | **Gap** — the proof that closes the axiomatic loop. |
| Obstruction $w_1$ = orientability | §4, §9 | `03.06.03` (Beginner) | △ | Stated, not proved. |
| Obstruction $w_2$ = spin | §4 + cross-ref §III.13 of L-M | `03.06.03`, `03.09.04` | ✓ | Covered across spin units. |
| Thom space, Thom class $U$ | §8, §10 | `03.04.09` (de Rham version) | △ | de Rham Thom shipped; singular-cohomology Thom class and Thom isomorphism $\Phi: H^k(B) \to H^{k+n}(E, E_0)$ **not** in a dedicated unit. |
| Euler class $e(E)$ of an oriented bundle | §9 | `03.05.10` (sphere bundle) + `03.04.09` (de Rham) | △ | Touched in sphere-bundle and Thom units; **no dedicated singular-cohomology Euler-class unit**. Master-tier worked computations missing. |
| Steenrod squares $\mathrm{Sq}^i$ | §8 (used) | — | ✗ | **Gap** — Steenrod squares are not in the Codex at all. Needed for the Wu formula and the $w_i = \mathrm{Sq}^i(U)$ identity. |
| $w_i = \mathrm{Sq}^i(U)$ identity | §8 | — | ✗ | **Gap** — depends on the Steenrod-square gap above. |
| Wu formula | §11 | — | ✗ | **Gap.** Master-tier. |
| Whitney duality theorem | §4, §11 | — | ✗ | **Gap.** Worked example of immersion obstruction missing. |
| Complex bundles, Chern classes axiomatic ($c_i$) | §14 | `03.06.04` | ✓ | Axioms + worked $\mathbb{CP}^n$ example present at all three tiers. |
| Splitting principle | §14, §15 | `03.13.03` (Leray-Hirsch / splitting) | ✓ | Shipped. Cross-references `03.06.04`. |
| Projectivisation $\mathbb{P}(E)$ and the Chern-class construction | §14 | `03.13.03` (Leray-Hirsch) | △ | Leray-Hirsch shipped; the explicit construction of $c_i$ as the Grothendieck/projective-bundle recipe is **adjacent** but not a dedicated unit. |
| Chern character $\mathrm{ch}(E)$ | §16 (briefly) | `03.08.01` (K-theory) + `03.09.10` (index theorem) | △ | Touched in K-theory and index-theorem units; not a standalone unit. |
| Pontryagin classes $p_i$ axiomatic | §15 | `03.06.04` | ✓ | Definition $p_i = (-1)^i c_{2i}(E \otimes \mathbb{C})$ present. |
| Pontryagin numbers $p_I[M]$ | §15–§16 | — | ✗ | **Gap.** Worked $\mathbb{CP}^{2k}$ Pontryagin numbers missing. |
| Chern-Weil construction (curvature-form route) | §C (Appendix C) | `03.06.05`, `03.06.06` | ✓ | Invariant polynomial + Chern-Weil shipped. Appendix C analogue. |
| Unoriented bordism $\mathfrak{N}_*$ and Stiefel-Whitney detection | §17 | — | ✗ | **Gap.** Touched in `ravenel-complex-cobordism.md` plan but no shipped unit. |
| Oriented bordism $\Omega_*^{\mathrm{SO}}$ and Pontryagin detection | §18 | — | ✗ | **Gap.** Same status. |
| Pontryagin-Thom construction | §18 | — | ✗ | **Gap.** Master-tier survey unit. |
| Hirzebruch signature theorem | §19 | `03.06.04` (mentioned) + `03.09.10` (named consequence) | △ | Named and computed for $\mathbb{CP}^2$ in `03.06.04`; the **$L$-polynomial / Hirzebruch genus** machinery and the statement at master tier are **partial**. Lawson-Michelsohn plan flags this as `△ partial` too (corr III.13.4). |
| $L$-genus, $\hat{A}$-genus, Todd genus as multiplicative sequences | §19 + Appendix B | partial | △ | $\hat{A}$ and $L$ appear in `03.09.10` and Lawson-Michelsohn-plan rows; **multiplicative-sequence formalism** is not a dedicated Codex unit. |
| Bernoulli numbers (Appendix B) | App B | — | ✗ | **Gap** — used by the $L$- and $\hat{A}$-genera but never defined in the Codex. |
| Combinatorial Pontryagin classes and exotic spheres | §20 | — | ✗ | **Gap.** Master-tier survey unit (Milnor 1956 exotic 7-sphere). |
| Cohomology + cup-product review | App A | `03.12.16`, `03.12.17` | ✓ | Poincaré duality and cap product shipped. |

**Aggregate coverage estimate.** Counting the ~25 top-level
Milnor-Stasheff topics in the table:

- ✓ covered: 9
- △ partial: 9
- ✗ gap: 9

Coverage is roughly **~50–55%** weighted by load-bearing, **~40%** by raw
topic count. The first half of the book (axiomatic Stiefel-Whitney +
Chern classes + Chern-Weil) is in good shape; the second half (bordism,
signature theorem at full master tier, exotic spheres, Steenrod squares)
is mostly gap.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites already in the corpus or already
on other plans:**

- Steenrod squares: not on any current FT plan. Add as a **shared
  prereq** here and flag for either Hatcher (FT 1.05 *Algebraic Topology*)
  or May (FT 1.18) punch-list.
- Cup product, Poincaré duality, cap product: ✓ shipped in `03.12.16`+.
- Vector bundles, classifying spaces, Leray-Hirsch: ✓ shipped.

**Priority 1 — high-leverage, closes the master-tier gap on the book's central content:**

1. **`03.06.07` Thom class and Thom isomorphism (singular cohomology).**
   Definition of the Thom class $U \in H^n(E, E_0; R)$ for an oriented
   rank-$n$ bundle; statement and proof of the Thom isomorphism
   $\Phi: H^k(B; R) \xrightarrow{\sim} H^{k+n}(E, E_0; R)$; mod-2 case
   for unoriented bundles. Anchors: Milnor-Stasheff §8, §10. Cross-link
   to `03.04.09` (de Rham version). Three-tier; Master tier proves
   via Leray-Hirsch. ~1500 words.
2. **`03.06.08` Euler class of an oriented vector bundle.** Definition
   $e(E) = U|_B \in H^n(B; \mathbb{Z})$. Euler-class obstruction theorem.
   Worked computations: $e(TS^{2n}) = 2 \cdot [\mathrm{pt}]$
   (Hopf), $e(\gamma^1_{\mathbb{C}}) = c_1$ on $\mathbb{CP}^\infty$.
   Anchors: Milnor-Stasheff §9. Three-tier. ~1500 words.
3. **`03.06.09` Cohomology of $BO(n)$ and $BU(n)$.** Computation
   $H^*(BO(n); \mathbb{Z}/2) = \mathbb{Z}/2[w_1, \ldots, w_n]$ and
   $H^*(BU(n); \mathbb{Z}) = \mathbb{Z}[c_1, \ldots, c_n]$ via the
   Grassmannian / Schubert-cell decomposition. Anchors: Milnor-Stasheff
   §6, §7, §14. Master-tier required; Intermediate gives the statement
   and the rank-1 case. ~1800 words.
4. **`03.06.10` Stiefel-Whitney and Pontryagin numbers.** Pairing
   $w_I[M] = \langle w_{i_1} \cdots w_{i_r}, [M]_{\mathbb{Z}/2} \rangle$;
   Pontryagin number $p_I[M]$ for oriented $4k$-manifolds; worked
   computations: Stiefel-Whitney numbers of $\mathbb{RP}^n$, Pontryagin
   numbers of $\mathbb{CP}^{2k}$. Anchors: Milnor-Stasheff §4, §16.
   Three-tier. ~1500 words.
5. **`03.06.11` Hirzebruch signature theorem (master-tier rewrite).**
   Full statement with the $L$-polynomial machinery as a multiplicative
   sequence; proof sketch via Thom's bordism theorem (signature is a
   ring homomorphism $\Omega_*^{\mathrm{SO}} \otimes \mathbb{Q} \to \mathbb{Q}$);
   worked computations for $\mathbb{CP}^2$, $\mathbb{CP}^4$, $K3$ surface.
   Anchors: Milnor-Stasheff §19; Lawson-Michelsohn §III.13. This
   **deepens** the current treatment in `03.06.04` and the named-result
   reference in `03.09.10`. Originator-prose treatment per FT spec §10
   citing Hirzebruch 1956. ~2200 words.
6. **`03.06.12` Unoriented bordism and Thom's theorem.** Definition
   of $\mathfrak{N}_*$; Thom's theorem: $M \sim N$ in $\mathfrak{N}_*$
   iff $w_I[M] = w_I[N]$ for all partitions $I$. Pointer to the
   structure of $\mathfrak{N}_*$ as a polynomial ring over $\mathbb{Z}/2$.
   Anchors: Milnor-Stasheff §17. Master-tier. ~1500 words.
7. **`03.06.13` Oriented bordism and Pontryagin-Thom.** Definition
   of $\Omega_*^{\mathrm{SO}}$; Pontryagin-Thom construction;
   Pontryagin-number cobordism criterion. Anchors: Milnor-Stasheff §18.
   Master-tier. ~1500 words. Lateral connection to
   `ravenel-complex-cobordism.md` punch-list.

**Priority 2 — Steenrod-square arc (also load-bearing for Hatcher / May):**

8. **`03.06.14` Steenrod squares and the Wu formula.** Definition of
   $\mathrm{Sq}^i: H^*(X; \mathbb{Z}/2) \to H^{*+i}(X; \mathbb{Z}/2)$
   via the Steenrod-Eilenberg construction (statement only at FT-equiv);
   axiomatic properties; the identity $w_i(M) = \mathrm{Sq}^i v$ where
   $v$ is the Wu class. Anchors: Milnor-Stasheff §8, §11.
   **Cross-claimed prereq for Hatcher / May plans** — coordinate with
   those plans during production. ~2000 words.

**Priority 3 — survey + master-tier deepenings (not strictly required
for FT equivalence; high pedagogical value):**

9. **`03.06.15` Multiplicative sequences and the $L$-, $\hat{A}$-, Todd genera.**
   Hirzebruch's multiplicative-sequence formalism. Each genus as a
   ring homomorphism from a bordism ring to $\mathbb{Q}$. Bernoulli-number
   coefficients. Anchors: Milnor-Stasheff §19, Appendix B; Hirzebruch
   *Topological Methods in Algebraic Geometry* §1. Master-only.
   ~1800 words.
10. **`03.06.16` Whitney duality and immersion obstructions.** $w(TM) \smile w(\nu) = 1$
    and consequences (e.g., obstructions to immersing $\mathbb{RP}^n$ in
    $\mathbb{R}^k$ for small $k$). Worked Stiefel-Whitney calculus for
    $\mathbb{RP}^n$. Anchors: Milnor-Stasheff §4, §11. Add as Master
    section to `03.06.03` rather than a new unit. ~1000 words inline.
11. **`03.06.17` Combinatorial Pontryagin classes and exotic 7-spheres.**
    Milnor's 1956 *Annals* construction of exotic 7-spheres via
    Pontryagin-class / signature mismatch on a candidate bounding
    $8$-manifold. Anchors: Milnor-Stasheff §20; Milnor 1956 *Ann. Math.*
    Master-only survey unit. ~1500 words.

**Priority 4 — Bernoulli-number prerequisite (small, easy):**

12. **`01.0?.??` Bernoulli numbers.** Definition by the generating
    function $\frac{t}{e^t - 1} = \sum B_n t^n / n!$; sign convention
    (modern $B_2 = 1/6$, etc.); first values; appearance in the
    $L$- and $\hat{A}$-genera and in $\zeta(2k)$. Anchor: Milnor-Stasheff
    Appendix B. Probably belongs in a number-theory or analysis chapter
    of the corpus; flag for cross-section placement during production.
    ~800 words.

---

## §4 Implementation sketch (P3 → P4)

**Hour estimates** (mirroring the Brown-Higgins-Sivera, Lawson-Michelsohn,
Bott-Tu batch averages — Milnor-Stasheff units are notation-light
but proof-heavy, so they sit at the *book-corpus average* rather than
above it):

- ~3 hours per Priority-1 unit (units 1–7) × 7 units = **~21 hours**.
- ~3 hours for the Priority-2 Steenrod unit (unit 8) = **~3 hours**.
- ~2.5 hours per Priority-3 unit (units 9–11) × 3 = **~7.5 hours**.
- ~1 hour for the Bernoulli-numbers unit (unit 12) = **~1 hour**.

**Total: ~32–33 hours of focused production**, plus Pass-W weaving
and Pass-V continuity verification (~6–8 hours combined per the
corpus-standard ratio). Fits a 5-day production batch.

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, the units carrying originator-prose treatment should be:

- **`03.06.11` (signature theorem):** F. Hirzebruch, *Neue topologische
  Methoden in der algebraischen Geometrie*, Springer Ergebnisse 9 (1956);
  English ed. *Topological Methods in Algebraic Geometry*, 1966.
  Originator of the multiplicative-sequence formalism and the signature
  theorem in its $L$-polynomial form.
- **`03.06.12` (unoriented bordism):** R. Thom, *Quelques propriétés
  globales des variétés différentiables*, Commentarii Math. Helv. 28
  (1954), 17–86. Originator of bordism theory and the Pontryagin-Thom
  construction.
- **`03.06.17` (exotic spheres):** J. Milnor, "On manifolds homeomorphic
  to the 7-sphere", *Ann. of Math.* 64 (1956), 399–405.

**Other originator citations** (referenced in unit prose, not full
treatments):

- **Stiefel-Whitney classes:** E. Stiefel, *Richtungsfelder und
  Fernparallelismus in $n$-dimensionalen Mannigfaltigkeiten*,
  Commentarii Math. Helv. 8 (1935-36), 305–353. H. Whitney,
  *Sphere-spaces*, Proc. Nat. Acad. Sci. USA 21 (1935), 462–468;
  *Topological properties of differentiable manifolds*, Bull. AMS 43
  (1937), 785–805.
- **Chern classes:** S.-S. Chern, *Characteristic classes of Hermitian
  manifolds*, Ann. of Math. 47 (1946), 85–121.
- **Pontryagin classes:** L. S. Pontryagin, *Characteristic cycles
  on differentiable manifolds*, Mat. Sbornik 21 (1942), 233–284
  (Russian); AMS translation 1950.
- **Hirzebruch signature theorem:** Hirzebruch 1956 (above).
- **Thom isomorphism + bordism:** Thom 1954 (above).

**Notation crosswalk.** Milnor-Stasheff's notation is the *de facto
standard* and the Codex should adopt it verbatim:

- $w_i(E) \in H^i(B; \mathbb{Z}/2)$ — Stiefel-Whitney classes (real bundles).
- $c_i(E) \in H^{2i}(B; \mathbb{Z})$ — Chern classes (complex bundles).
- $p_i(E) \in H^{4i}(B; \mathbb{Z})$ — Pontryagin classes (real bundles).
- $e(E) \in H^n(B; \mathbb{Z})$ — Euler class (oriented rank-$n$ real).
- $\chi(M) \in \mathbb{Z}$ — Euler characteristic (manifold-level).
- $w(E) = 1 + w_1 + w_2 + \cdots$ — total Stiefel-Whitney class.
- $c(E) = 1 + c_1 + c_2 + \cdots$ — total Chern class.
- $p(E) = 1 + p_1 + p_2 + \cdots$ — total Pontryagin class.
- $U \in H^n(E, E_0)$ — Thom class.
- $\Phi$ — Thom isomorphism.
- $G_n(\mathbb{R}^k)$, $G_n(\mathbb{R}^\infty)$ — Grassmannian.
- $BO(n)$, $BU(n)$, $BSO(n)$, $BSU(n)$ — classifying spaces.
- $\mathfrak{N}_n$ — unoriented bordism group in dimension $n$.
- $\Omega_n^{\mathrm{SO}}$ — oriented bordism group.
- $L_k$, $\hat{A}_k$, $\mathrm{Td}_k$ — Hirzebruch genera (component $k$).

Spot-check current corpus: `03.06.03`, `03.06.04`, `03.06.05`, `03.06.06`
all use the Milnor-Stasheff notation already. No notation migration needed
for existing units; new units should preserve it.

---

## §5 What this plan does NOT cover

- A line-number P1 inventory of every named theorem in Milnor-Stasheff
  at proof-detail granularity. PDF is >10 MB and exceeds WebFetch limit;
  full P1 audit deferred to a focused PDF-access pass.
- Exercise-pack production. Milnor-Stasheff problems are concentrated
  at end of each section and are routinely assigned in graduate
  topology / characteristic-class courses. Exercise pack is a
  P3-priority-3 follow-up.
- The Steenrod-square machinery beyond what is needed to state
  $w_i = \mathrm{Sq}^i U$. A full Steenrod-algebra unit (Adem relations,
  $\mathcal{A}$ as a Hopf algebra, etc.) belongs in the Hatcher /
  May FT plans.
- The K-theoretic perspective on characteristic classes (Adams operations,
  $\gamma$-filtration, Chern character as a ring isomorphism
  $K(X) \otimes \mathbb{Q} \to H^{\mathrm{ev}}(X; \mathbb{Q})$).
  Belongs in K-theory and `03.08.01`+ deepening; touched in
  `03.08.01` already.
- Bundles with non-classical structure groups ($\mathrm{Sp}$, $G_2$,
  exceptional groups). These belong in `03-modern-geometry/03-lie/` or
  a future structure-group chapter.

---

## §6 Acceptance criteria for FT equivalence (Milnor-Stasheff)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Milnor-Stasheff's named theorems in §1–§19 map to Codex units.
  Current: ~55%; after Priority-1 units (1–7): ~85%; after Priority-1+2:
  ~92%; full ≥95% requires Priority-3 + selective Priority-4.
- ≥90% of Milnor-Stasheff's worked computations through §19 have a
  direct unit, lateral connection, or worked example covering them.
- Notation crosswalk in §4 is preserved in every new unit (Milnor-Stasheff
  notation is already the corpus convention — no migration).
- Pass-W weaving connects the new units (`03.06.07`–`03.06.17`) to:
  - the existing `03.06.03`–`03.06.06` chapter spine,
  - `03.04.09` (de Rham Thom) for the topological/differential bridge,
  - `03.08.04`, `03.08.05` (classifying spaces, universal bundles),
  - `03.09.04`, `03.09.10` (spin structure, Atiyah-Singer) for the
    signature-theorem / $\hat{A}$-genus arc,
  - `ravenel-complex-cobordism.md` units (once shipped) for the bordism
    arc.
- Pass-V continuity holds on the Milnor-Stasheff-restricted scope.
- Originator-prose treatment present in units `03.06.11`, `03.06.12`,
  `03.06.17` per §4 above.

The Priority-1 punch-list (units 1–7, ~21 hrs) closes the master-tier
gap on the book's central content. Priority-2 + Priority-3 close the
deepening + survey gaps.

---

## §7 Sourcing

- **Free academic copy.** Ranicki's Edinburgh archive at
  <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf>
  (canonical mirror, used by the literature). PDF exceeded the 10 MB
  WebFetch ceiling during this audit; full P1 line-number inventory
  deferred.
- **Princeton paperback.** Princeton University Press, 1974,
  ISBN 0-691-08122-0. Annals of Mathematics Studies 76. ~330 pp.
  Sells for ~$60 retail; standard graduate library holding.
- **License.** Princeton paperback is copyrighted; the Ranicki mirror
  is the de-facto academic free copy. Cite as Milnor, J. W. & Stasheff,
  J. D., *Characteristic Classes*, Annals of Mathematics Studies 76,
  Princeton University Press, 1974.
- **Local copy.** Add to `reference/fasttrack-texts/03-modern-geometry/`
  as `Milnor-Stasheff-CharacteristicClasses.pdf` (mirror of the Ranicki
  source) when downloaded. Already cited as `fast-track` reference
  in `03.06.04-pontryagin-chern-classes.md` frontmatter.
- **Secondary references consulted for this audit pass:**
  - Hatcher, A., *Vector Bundles and K-Theory*, online draft
    (<https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html>),
    chapters 2–3.
  - Bott, R. & Tu, L. W., *Differential Forms in Algebraic Topology*,
    Springer GTM 82, 1982. §6, §11, §20–§23.
  - Husemoller, D., *Fibre Bundles*, Springer GTM 20 (3rd ed. 1994),
    chapters 16–20.
  - Madsen, I. & Tornehave, J., *From Calculus to Cohomology*,
    Cambridge UP, 1997, chapters 17–24.
  - Lawson, H. B. & Michelsohn, M.-L., *Spin Geometry*, Princeton UP,
    1989, §I.2, §III.13. Codex audit plan
    `lawson-michelsohn-spin-geometry.md` cross-referenced for the
    Hirzebruch-signature and $\hat{A}$-genus rows.
- **Codex internal references.** `plans/fasttrack/bott-tu-differential-forms.md`
  (TOC structure model), `plans/fasttrack/lawson-michelsohn-spin-geometry.md`
  (signature-theorem cross-rows), `plans/fasttrack/ravenel-complex-cobordism.md`
  (bordism arc), `plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md`
  (audit-format mirror), and the four shipped units
  `03.06.03`–`03.06.06`.
