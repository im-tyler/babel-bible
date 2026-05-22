# Atiyah — *K-Theory* (Fast Track 3.10) — Audit + Gap Plan

**Book:** Michael F. Atiyah, *K-Theory*, lectures Fall 1964 (Harvard), notes
by D. W. Anderson. First edition W. A. Benjamin Inc., New York / Amsterdam
1967, vii + 166 pp. of body + appendix + two reprinted papers (*Power
operations in K-theory*; *K-theory and reality*). Reprinted with the same
pagination as Advanced Book Classics, Addison-Wesley / Westview Press 1989,
ISBN 0-201-09394-4. Citations in Babel Bible units already point at "Atiyah —
K-Theory §1", "§1.4", "§1.1", "§2"; this plan aligns those pointers to the
true table of contents (verified against the Ranicki-archive scan,
<https://webhomes.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf>).

**Fast Track entry:** 3.10. Listed in
`docs/catalogs/FASTTRACK_BOOKLIST.md` line 97 with marker `BUY` (no free
host) but a complete scan is in fact freely circulated on the Ranicki
archive; sourcing note in §7 below. Cross-listed in
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` line 269 as a §3 supplement.

**Purpose of this plan:** lightweight P1 audit-and-gap pass mirroring
`plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md`.
Atiyah's monograph is short (166 body pp.), terse, and computational, so
this pass is closer to a real P1 audit than the Brown-Higgins-Sivera one
— every chapter and section is enumerated, and every named theorem on
the Bott-periodicity / operations / Adams spine is mapped. The output is
a punch-list of new or extended units required so that *K-Theory* is
covered to the equivalence threshold (≥95% effective coverage of
theorems, key examples, exercise pack, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

The Codex chapter `content/03-modern-geometry/08-k-theory/` currently
ships **5 units** (not 3 as in the briefing): `03.08.01-topological-k-theory`,
`03.08.04-classifying-space`, `03.08.05-universal-bundle`,
`03.08.06-stable-homotopy`, `03.08.07-bott-periodicity`. The numbering
gap (no `.02`, `.03`) suggests two reserved slots from an earlier plan;
this audit treats them as available for the new units below.

---

## §1 What Atiyah's *K-Theory* is for

Atiyah's *K-Theory* is the **canonical small monograph** on topological
K-theory of complex vector bundles over compact Hausdorff spaces. It is
the originator text for the topological side of the subject (Atiyah-
Hirzebruch 1959–61 grew out of these lectures), and it is the single
shortest place that contains the complete arc from "what is a vector
bundle" to the Adams operations $\psi^k$, the splitting principle in
K-theory, the Thom isomorphism in K-theory, and the $J(X)$ groups.

Distinctive contributions, in the order Atiyah develops them:

1. **Vector bundles via continuous functors.** Ch. I §1.2 packages
   $\oplus$, $\otimes$, $\wedge^k$, $\mathrm{Hom}$, dualization etc. as
   instances of a single construction: a continuous functor on finite-
   dimensional vector spaces extends fibrewise to a continuous functor
   on the category of vector bundles. This is the cleanest treatment in
   the literature and is exactly the functoriality the Babel Bible unit
   `03.05.02` should anchor against.
2. **Compactness as the load-bearing hypothesis.** §1.4 (*Vector bundles
   on compact spaces*) proves the homotopy invariance, sub-bundle
   complements via partition of unity, and the existence of a stable
   inverse — the four "compactness lemmas" on which everything else
   stands. Atiyah's terse account here is the canonical one.
3. **Equivariant K-theory $K_G(X)$ from the start.** §1.6 (*G-bundles
   over G-spaces*) introduces the equivariant theory in parallel with
   the non-equivariant one, and §2.3 packages $K_G(X)$ as a ring with
   the representation ring $R(G) = K_G(\mathrm{pt})$ acting on it. The
   parallel development is Atiyah's signature pedagogical move and is
   *absent* from the Babel Bible.
4. **Bott periodicity proved via clutching functions.** Ch. II §2.2.
   The proof is the *finite-dimensional, Fourier-Laurent-series-of-
   clutching-function* argument (Atiyah-Bott 1964 *Topology* paper),
   reduced here from 30 pages to about 20. The proof is via three
   reduction lemmas: (i) every clutching function is a finite Laurent
   polynomial, (ii) every Laurent polynomial is a polynomial after
   shift, (iii) every polynomial clutching reduces to linear via a
   "linearisation trick." The fundamental class $\beta = [H] - 1 \in
   \widetilde K(\mathbb{C}P^1)$ where $H$ is the tautological line bundle
   generates everything.
5. **The Thom isomorphism in K-theory.** §2.7. $K(P(E\oplus 1), P(E))
   \cong K(X)$ via the canonical class $\lambda_E$ on the projective
   bundle; this is the K-theoretic shadow of the cohomological Thom
   isomorphism, and supplies the multiplicative structure needed by the
   Atiyah-Singer index theorem [03.09.10].
6. **Exterior power operations $\lambda^k$ and Adams operations $\psi^k$.**
   Ch. III §3.1–§3.2. The $\lambda$-ring structure on $K(X)$ via the
   exterior-power functors; Newton's identities convert $\lambda^k$ to
   $\psi^k$, which are *ring* homomorphisms (the multiplicativity is
   what makes Adams operations powerful). The Codex has no unit for
   either $\lambda^k$ or $\psi^k$.
7. **The group $J(X)$ and stable-fibre-homotopy invariants.** §3.3 with
   the Power-operations-in-K-theory reprint. Adams 1962–66 *Topology*
   four-paper sequence is the originator citation; Atiyah's lectures
   give the compact in-book version. $J(X)$ classifies sphere-bundles
   up to fibre homotopy and is the engine behind the solution of the
   vector-fields-on-spheres problem.
8. **Appendix: the space of Fredholm operators.** $\mathrm{Fred}(H)$
   classifies $K^0$: $K^0(X) = [X, \mathrm{Fred}(H)]$. Atiyah's
   geometric / analytic alternative to the Grothendieck-completion
   definition and the direct bridge to the index theorem.

The book is **not** an introduction to algebraic topology; it assumes
basic point-set topology and linear algebra plus willingness to manipulate
clutching functions. It is the canonical entry point to topological
K-theory; Hatcher's *Vector Bundles and K-Theory* is the standard modern
counterpart; Karoubi's *K-Theory: An Introduction* (1978) is the next
step up and the canonical algebraic-K-theory bridge.

**Peer sources for cross-checking (all consulted in §2 below):**

- Allen Hatcher, *Vector Bundles and K-Theory*, in-progress draft,
  Cornell, ~2017 revision. Free at
  <https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html>.
- Max Karoubi, *K-Theory: An Introduction*, Grundlehren 226, Springer
  1978. The category-theoretic / Banach-category treatment; covers
  Bott via Wood-Wood and the Karoubi tower.
- Dale Husemoller, *Fibre Bundles*, 3rd ed., GTM 20, Springer 1994.
  §10 (K-theory) is the bundle-theoretic peer text.
- Raoul Bott, Loring Tu, *Differential Forms in Algebraic Topology*
  (FT 1.17). §23 (universal bundle, $H^*(BU(k))$) is the cohomological
  peer; not a K-theory text per se but the Babel Bible `03.08.05` unit is
  Bott-Tu-anchored.

---

## §2 Coverage table (Babel Bible vs Atiyah)

Cross-referenced against the current corpus (5 shipped K-theory units +
ancillaries in `03.05`, `03.06`, `03.09`, `03.13`). Pagination given is
Benjamin 1967 / Westview 1989 (identical).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| Atiyah §  | Topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| §1.1 | Basic defs of vector bundle | `03.05.02-vector-bundle` | ✓ | Atiyah's def ≡ Babel Bible's; align notation in Master tier. |
| §1.2 | Operations via continuous functors | `03.05.02` (notes), `03.05.08-complex-vector-bundle` | △ | Codex treats $\oplus$, $\otimes$, $\wedge^k$ ad hoc; Atiyah's continuous-functor packaging is not present. **Minor gap** — add a Master-tier note to `03.05.02` rather than a new unit. |
| §1.3 | Sub-bundles and quotient bundles | — | △ | Stated implicitly in `03.05.02`/`03.05.10` but the *complement-via-partition-of-unity* lemma (Atiyah 1.4.1) is not its own theorem. **Add to `03.05.02` Master.** |
| §1.4 | Vector bundles on compact spaces (homotopy invariance, stable inverse, classification by $[X, BU(n)]$) | `03.05.02`, `03.08.04-classifying-space` | △ | Classification is in `03.08.04`; the four compactness lemmas (1.4.1 complement, 1.4.3 homotopy invariance, 1.4.7 stable inverse, 1.4.9 finite-dim classification) are *implicit* in Babel Bible but not theorem-numbered. **Add a §"Compactness lemmas" block to `03.05.02` Master.** |
| §1.5 | Additional structures (Hermitian, orientation) | `03.05.08-complex-vector-bundle` | △ | Hermitian metric structure mentioned; orientation as $\det$-bundle reduction not its own item. |
| §1.6 | $G$-bundles over $G$-spaces | `03.05.01-principal-bundle` | △ | Principal-bundle treatment exists; equivariant *vector* bundle structure (the precursor to $K_G(X)$) is not isolated. **Gap.** |
| §2.1 | Definitions of $K(X)$, $K^0$, reduced $\widetilde K$, relative $K(X, Y)$ | `03.08.01-topological-k-theory` | ✓ | Covered; the reduced and relative versions are in the Master tier of `03.08.01`. |
| §2.2 | **Periodicity theorem** (Atiyah-Bott clutching-function proof) | `03.08.07-bott-periodicity` | △ | Statement covered, but the *clutching-function proof* itself (the Laurent-polynomial reduction lemmas) is not in `03.08.07` — that unit anchors instead on the Morse-theoretic Milnor-Bott proof. **Gap (Master tier of `03.08.07` should record both proofs or split out a "Bott periodicity — clutching-function proof" deepening unit).** |
| §2.3 | $K_G(X)$, equivariant K-theory, $R(G)$ action | `03.09.21-family-equivariant-index` | △ | Family / equivariant index appears in Spin chapter, but the *foundational* equivariant K-theory unit ($K_G(X)$ as a ring, $R(G) = K_G(\mathrm{pt})$, induced rep $\mathrm{Ind}_H^G$ etc.) is missing. **Gap.** |
| §2.4 | Cohomology properties of $K^*$ (long exact sequence of a pair, exactness, Mayer-Vietoris in K-theory) | — | ✗ | **Gap.** The fact that $K^*$ is a generalised cohomology theory (homotopy, excision, exactness, additivity) is implicit in `03.08.01` and `03.08.07` but not stated as such. |
| §2.5 | Computations of $K^*(X)$ for $X = S^n$, $\mathbb{C}P^n$, $T^n$, Stiefel manifolds, $\mathbb{R}P^n$ (the latter via $\psi^k$ obstruction) | — | ✗ | **Gap.** Worked computations are absent from the Babel Bible. The $\mathbb{C}P^n$ computation $K^*(\mathbb{C}P^n) = \mathbb{Z}[H]/(H-1)^{n+1}$ is a load-bearing example used throughout the index-theorem chapter. |
| §2.6 | External / internal product $K(X) \otimes K(Y) \to K(X \times Y)$, multiplicative structure on $K^*$ | — | △ | The ring structure on $K^0(X)$ is stated in `03.08.01`; the external product and the suspension-Bott combinatorics are not. **Add to `03.08.01` Master or split as a unit.** |
| §2.7 | **Thom isomorphism in K-theory** | `03.08.07` (passing mention) | ✗ | **Gap (high priority).** Atiyah's $\lambda_E \in K(P(E\oplus 1), P(E))$ construction and the resulting $K(X) \cong K_c(E)$ for $E \to X$ a complex bundle is the K-theoretic ingredient of Atiyah-Singer. Mentioned in `03.08.07` and `03.09.10`, never developed. |
| §3.1 | Exterior powers $\lambda^k$, $\lambda$-ring structure | — | ✗ | **Gap (high priority).** No unit exists. The continuous functor $\Lambda^k$ extends to operations $\lambda^k : K(X) \to K(X)$ satisfying $\lambda^k(x+y) = \sum_{i+j=k} \lambda^i(x) \lambda^j(y)$; this is the input for §3.2. |
| §3.2 | **Adams operations $\psi^k$** | — | ✗ | **Gap (high priority).** No unit exists. Defined via Newton's identities from $\lambda^k$; $\psi^k$ are *ring* homomorphisms (vs $\lambda^k$ which are only additive after correction). The single most important K-theory operations after Bott. Codex references AHSS but never introduces $\psi^k$. |
| §3.3 | The group $J(X)$, stable fibre-homotopy classification of sphere-bundles, $J$-homomorphism | — | ✗ | **Gap.** No unit. Connects to Adams' 1962–66 solution of the vector-fields-on-spheres problem and to stable homotopy [03.08.06]. |
| Appx | Space of Fredholm operators, $K^0(X) = [X, \mathrm{Fred}(H)]$ | `03.09.06-fredholm-operators` | △ | The Fredholm-operator unit exists; the *classification* statement "$\mathrm{Fred}(H)$ represents $K^0$" (Atiyah-Jänich) is not in `03.09.06`. **Add to `03.09.06` Master.** |
| Reprint 1 | *Power operations in K-theory* (Atiyah 1966 *Quart. J. Math.*) | — | ✗ | **Gap (Master-tier only).** Externalisation of $\lambda^k$ to symmetric-group equivariant operations $P^k : K(X) \to K_{\Sigma_k}(X^k)$. Underlies the Atiyah-Hirzebruch *Steenrod operations in K-theory* programme. |
| Reprint 2 | *K-theory and reality* (Atiyah 1966 *Quart. J. Math.*) | — | ✗ | **Gap (Master-tier only).** $KR(X)$ unifying $K$, $KO$, $KSp$; eight-fold periodicity via the Clifford volume element. **Already partially anchored** in `03.09.15-clk-dirac` and the `CONCEPT_CATALOG` $KR^{p,q}$ entry; needs a dedicated stub at the K-theory chapter. |
| AHSS  | Atiyah-Hirzebruch spectral sequence (not in *K-Theory* the book itself, but the *naming-author* topic) | — | ✗ | **Gap.** Mentioned in `03.13.01–.03` and in `03.12.13` as the K-theoretic shadow of cellular / Leray-Serre; never its own unit. Originator: Atiyah-Hirzebruch 1961 *Vector bundles and homogeneous spaces* (Proc. Sympos. Pure Math. III). Out-of-scope for the *book* but in-scope for "Atiyah's K-theory programme as a whole." Add as a separate unit; book-attribution note in §4. |

**Aggregate coverage estimate:** ~35% of *K-Theory* maps cleanly to
existing Babel Bible units. The Ch. I foundations (§1.1–§1.5) are ~80%
covered via `03.05.02` and `03.05.08`; Ch. II §2.1 is ✓, §2.2 is △ (the
proof gap), §2.3–§2.7 are 0–20%; Ch. III is **0%** (the $\lambda$-ring,
$\psi^k$, $J(X)$ story); Appendix and reprints are ~10% covered via
`03.09.06` and `03.09.15`. The principal gaps are concentrated in
Ch. III (operations) and §2.4–§2.7 (cohomology properties, computations,
external product, Thom isomorphism). Closing those gaps is independent
of any other Fast Track book — Atiyah-internal work only.

---

## §3 Gap punch-list (units to write / extend, priority-ordered)

**Priority 1 — high-leverage, captures Atiyah's central content:**

1. **`03.08.02` Adams operations $\psi^k$.** *New unit.* Definition via
   $\psi^k = N_k(\lambda^1, \ldots, \lambda^k)$ with $N_k$ the Newton
   polynomial; ring-homomorphism property; $\psi^k \psi^l = \psi^{kl}$;
   action on line bundles $\psi^k(L) = L^{\otimes k}$; computation on
   $K(\mathbb{C}P^n)$ and $K(S^{2n})$. Atiyah §3.2 anchor; Hatcher
   *VB&K* §2.3 anchor; Karoubi §IV.7 anchor. Three-tier, ~1800 words.
   Master tier records the Adams 1962 *Topology* originator paper plus
   the Atiyah lectures' Newton-polynomial derivation. **Foundational
   for the vector-fields-on-spheres application and for AHSS
   differentials.**
2. **`03.08.03` Thom isomorphism in K-theory.** *New unit.* Statement
   $K(X) \cong \widetilde K(X^E)$ for $E \to X$ a complex vector
   bundle of rank $n$; construction of the Thom class
   $\lambda_E = \sum (-1)^i \Lambda^i E \in K(X^E)$; cup-product
   isomorphism; reduction to Bott's theorem when $X = \mathrm{pt}$.
   Atiyah §2.7 anchor; Karoubi §IV.5; Lawson-Michelsohn §I.9 for the
   Spin variant. Three-tier, ~1800 words. Master tier proves the
   isomorphism via the projective-bundle theorem. **Load-bearing for
   the Atiyah-Singer index theorem [03.09.10] symbol-class argument.**
3. **`03.08.08` Exterior-power operations $\lambda^k$ and the
   $\lambda$-ring structure on $K(X)$.** *New unit.* The
   continuous-functor $\Lambda^k$ from §1.2, its extension to a
   well-defined operation $\lambda^k : K(X) \to K(X)$, the
   $\lambda$-ring axioms $\lambda^k(x+y) = \sum \lambda^i x \cdot
   \lambda^j y$, $\lambda_t(x) = \sum \lambda^k(x) t^k$ as a
   homomorphism to $1 + tK(X)[[t]]$ under multiplication. Atiyah §3.1
   anchor; Karoubi §IV.7; Fulton-Lang *Riemann-Roch Algebra* Ch. I.
   Prerequisite for `03.08.02`. Three-tier, ~1500 words.
4. **`03.08.09` Computations of $K^*(X)$: spheres, projective spaces,
   tori.** *New unit.* Worked computations $K^*(S^{2n}) = \mathbb{Z} \oplus
   \mathbb{Z}$, $K^*(\mathbb{C}P^n) = \mathbb{Z}[H]/(H-1)^{n+1}$, $K^*(T^n)
   = \Lambda^* \mathbb{Z}^n$, and Hopf-bundle generators. Atiyah §2.5
   anchor. Three-tier, ~1500 words. Beginner tier covers $S^2$ and
   $\mathbb{C}P^1$; Master tier records the Adams obstruction
   computation for $K^*(\mathbb{R}P^n)$ via $\psi^k$ (the input for
   `03.08.02`'s vector-fields application). **Hatcher *VB&K* §2.1
   uses these as canonical examples.**
5. **`03.08.10` Equivariant K-theory $K_G(X)$ and $R(G)$.** *New unit.*
   $G$-vector bundles on $G$-spaces; Grothendieck construction
   $K_G(X)$; the case $X = \mathrm{pt}$ recovers the representation
   ring $R(G) = K_G(\mathrm{pt})$; functoriality, induction
   $\mathrm{Ind}_H^G$, restriction $\mathrm{Res}^G_H$. Atiyah §1.6 +
   §2.3 anchor; Segal 1968 *Equivariant K-theory* (Publ. IHES 34) as
   the definitive originator paper. Master-only initially, ~2000 words.
   **Prerequisite for the family-equivariant index in `03.09.21`.**

**Priority 2 — proof completions and clarifications:**

6. **Extend `03.08.07-bott-periodicity` Master tier with Atiyah-Bott
   clutching-function proof.** The existing unit anchors on the
   Milnor-Bott Morse-theoretic proof. Add a §"Atiyah-Bott proof via
   clutching functions" Master block: Laurent-polynomial reduction,
   linearisation trick, and the fundamental class
   $\beta = [H] - 1 \in \widetilde K(\mathbb{C}P^1)$. Atiyah §2.2 anchor;
   Atiyah-Bott 1964 *Topology* 3, 1–18. **No new unit, in-place edit.**
7. **Extend `03.08.01-topological-k-theory` Master tier with cohomology
   properties.** Long exact sequence of a pair, Mayer-Vietoris,
   excision, suspension (i.e. the proof that $K^*$ is a generalised
   cohomology theory in the Eilenberg-Steenrod sense modulo dimension).
   Atiyah §2.4. **No new unit.**
8. **Extend `03.05.02-vector-bundle` Master tier with Atiyah's
   continuous-functor packaging.** Add a §"Operations via continuous
   functors" Master block citing Atiyah §1.2 and the four compactness
   lemmas of §1.4. **No new unit, in-place edit.**
9. **Extend `03.09.06-fredholm-operators` Master tier with the
   Atiyah-Jänich classification.** Statement $\mathrm{Fred}(H) \simeq
   \mathbb{Z} \times BU$, with citation to Atiyah Appendix and
   Jänich 1965 *Math. Ann.* 161, 129–142. **No new unit, in-place edit.**

**Priority 3 — Master-tier deepenings (Atiyah-internal):**

10. **`03.08.11` The group $J(X)$ and the $J$-homomorphism.** Atiyah
    §3.3 + reprint 1. Master-only, ~1500 words. Connects to Adams'
    1962–66 *Topology* four-paper sequence and the vector-fields-on-
    spheres theorem. Prereqs: `03.08.02` $\psi^k$, `03.08.06` stable
    homotopy.
11. **`03.08.12` $KR$-theory (K-theory with reality).** Atiyah 1966
    *Quart. J. Math.* 17, 367–386 (reprint 2). Master-only,
    ~1500 words. The bigraded $KR^{p,q}$ theory unifying $K$, $KO$,
    $KSp$; eight-fold periodicity via the Clifford volume element.
    **Already partially anchored** in `03.09.15-clk-dirac` historical
    section and the `CONCEPT_CATALOG` $KR^{p,q}$ entry; needs the
    dedicated stub here.

**Priority 4 — extension beyond the book (Atiyah's K-theory
programme, originator-attributed elsewhere):**

12. **`03.13.04` Atiyah-Hirzebruch spectral sequence.** Originator
    Atiyah-Hirzebruch 1961, not in *K-Theory* the book per se but
    a standard companion topic; currently referenced in `03.13.01–.03`
    and `03.12.13` but not its own unit. Three-tier, ~1800 words. Pairs
    with `03.13.02-leray-serre` as the K-theoretic analogue. **Add to
    Ch. 13 spectral-sequences chapter rather than Ch. 8 K-theory.**

---

## §4 Implementation sketch (P3 → P4)

For a full Atiyah coverage pass, priority-1 items 1–5 (new units) plus
the priority-2 in-place extensions are the minimum set. Realistic
production estimate (mirroring earlier K-theory and Bott-Tu batches):

- ~3–4 hours per new unit (three-tier with worked computations and
  Master-tier proofs).
- 5 priority-1 new units × ~3.5 hours = ~17–18 hours of focused
  production.
- 4 priority-2 in-place edits × ~1 hour = ~4 hours.
- 2 priority-3 Master-only units × ~2.5 hours = ~5 hours.
- 1 priority-4 unit `03.13.04` × ~3.5 hours = ~3.5 hours.
- **Total ~30 hours** focused production, plus integration / weaving /
  cross-link audit. Fits a focused 4-day window.

**Originator-prose targets.** Atiyah is the *originator* of topological
K-theory (jointly with Hirzebruch 1959 *Bull. AMS*); Adams is the
originator of $\psi^k$; Grothendieck originated the algebraic side
(1957 *Sur quelques points d'algèbre homologique*, Tôhoku); Bott
originated periodicity (1959 *Bull. AMS*; 1959 *Ann. Math.* 70,
313–337). Units 1–5 + 6 (extension) should carry originator-prose
treatment per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, citing:

- A. Grothendieck, *Sur quelques points d'algèbre homologique*, Tôhoku
  Math. J. 9 (1957), 119–221 — algebraic K-theory of coherent sheaves
  and the original Grothendieck completion.
- M. F. Atiyah, F. Hirzebruch, *Riemann-Roch theorems for differentiable
  manifolds*, Bull. AMS 65 (1959), 276–281 — originator of topological
  K-theory; *Vector bundles and homogeneous spaces*, Proc. Sympos. Pure
  Math. III (1961), 7–38 — AHSS.
- R. Bott, *The stable homotopy of the classical groups*, Ann. Math. 70
  (1959), 313–337 — originator of periodicity.
- M. F. Atiyah, R. Bott, *On the periodicity theorem for complex vector
  bundles*, Topology 3 (1964), Suppl. 1, 1–18 — the clutching-function
  proof reproduced in §2.2 of the book.
- J. F. Adams, *Vector fields on spheres*, Ann. Math. 75 (1962), 603–632
  — originator of $\psi^k$ and the $J(X)$ application.
- M. F. Atiyah, *K-theory and reality*, Quart. J. Math. Oxford 17 (1966),
  367–386 — originator of $KR$-theory.
- G. Segal, *Equivariant K-theory*, Publ. IHES 34 (1968), 129–151 —
  definitive equivariant treatment (Atiyah §1.6 + §2.3 are the
  in-book version; Segal is the standard citation).

**Notation crosswalk.** Atiyah writes $K(X)$ for unreduced K-theory and
$\widetilde K(X)$ for reduced; the Babel Bible (per `03.08.01`) writes $K^0(X)$
and $\widetilde K^0(X)$ with explicit grading. Atiyah uses $H$ for the
tautological / Hopf line bundle on $\mathbb{C}P^n$ and $\beta = [H] - 1$
for the Bott class; the Babel Bible should adopt the same. Atiyah's $\lambda_E$
for the K-theory Thom class clashes with the spinor-symbol $\Lambda(E)$
in `03.08.07` line 466 — record the decision in `03.08.03` (new Thom
unit) §Notation: use $\Lambda_E$ for the K-theoretic Thom class
throughout, reserving $\lambda^k$ for the exterior-power operation.
Atiyah's $J(X)$ is the standard symbol; keep. Atiyah's $K_G(X)$ for
equivariant K-theory is universal; keep. Record all decisions in a
§Notation paragraph of `03.08.02`, `03.08.03`, `03.08.08`, `03.08.10`.

---

## §5 What this plan does NOT cover

- Algebraic K-theory ($K_0$ of a ring, Whitehead's $K_1$, Milnor's
  $K_2$, Quillen $K_n$). Atiyah's *K-Theory* is topological throughout;
  the algebraic side is a separate book (Weibel *K-Book*, Rosenberg,
  Srinivas) and a separate Codex chapter would be required. Not on the
  Fast Track booklist at this priority.
- The full Atiyah-Singer index theorem proof. That is `03.09.10`'s job
  and is independent of this audit. Cross-link only.
- Equivariant Bott periodicity (Atiyah-Segal 1969 *Equivariant K-theory
  and completion*). Out of scope; pointer in `03.08.10` Master only.
- Exercise pack production. Atiyah's book has no formal exercise sets;
  problems live inside the prose. Exercise pack production is a
  P3-priority-3 follow-up after priority-1 units ship.
- The two reprinted papers' full content beyond the dedicated
  Master-only stubs `03.08.11` (J(X)) and `03.08.12` (KR-theory).
- Connections to motivic K-theory, twisted K-theory, K-homology and
  Kasparov KK-theory. Beyond the book's scope; pointer-only in
  `03.08.12` if at all.

---

## §6 Acceptance criteria for FT equivalence (Atiyah *K-Theory*)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Atiyah's named theorems (compactness lemmas of §1.4,
  periodicity theorem §2.2, Thom isomorphism §2.7, Adams operation
  identities §3.2, $J(X)$ exactness §3.3) map to Babel Bible units. Current:
  ~35%. After priority-1 (units 1–5): ~85%. After priority-1+2 (units
  1–9): ~95%. Priority-3+4 close the residual deepening gap.
- ≥90% of Atiyah's worked computations ($K^*(S^n)$, $K^*(\mathbb{C}P^n)$,
  $K^*(\mathbb{R}P^n)$ via $\psi^k$, $K^*(\mathrm{Stiefel})$) have a
  direct Babel Bible unit or are referenced from a unit that covers them
  (closed by `03.08.09`).
- The clutching-function proof of Bott periodicity (Atiyah §2.2) is
  recorded in `03.08.07` Master alongside the Milnor-Bott Morse-theoretic
  proof. Currently only the Morse proof anchors.
- The $\lambda$-ring / Adams-operations story (Atiyah Ch. III) has at
  least one dedicated Babel Bible unit (closed by `03.08.02` + `03.08.08`).
- Notation decisions (§4) are recorded in `03.08.03`, `03.08.02`,
  `03.08.08`, `03.08.10`.
- Pass-W weaving connects the new units to `03.05.02`, `03.08.04`,
  `03.08.06`, `03.08.07`, `03.09.06`, `03.09.10`, `03.13.02`, and the
  AHSS unit `03.13.04`.

The 5 priority-1 units close most of the equivalence gap with no
external prerequisites. Priority-2 closes the proof / cohomology-property
residual. Priority-3 covers the appendix and reprints. Priority-4 closes
the AHSS gap which is Atiyah-attributed but lives in `03.13`.

---

## §7 Sourcing

- **Status on FT booklist:** marked `BUY` (Westview 1989 reprint,
  ISBN 0-201-09394-4, list price ~$60).
- **Free scan available.** A complete OCR'd PDF of the Benjamin 1967
  edition (220 pp., 7.7 MB, Adobe Acrobat 8 paper-capture, dated 2008)
  is freely hosted on Andrew Ranicki's archive at
  <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf>
  (redirected from the older `www.maths.ed.ac.uk/~v1ranick/` URL). The
  Ranicki archive is a long-standing, university-hosted, citation-grade
  mathematical resource and was used as the authoritative source for
  the §2 TOC reconstruction in this audit.
- **License.** Strictly the 1967 Benjamin / 1989 Westview copyright;
  the Ranicki archive hosts it under fair-use educational provision.
  Cite as Atiyah, *K-Theory*, Benjamin 1967 / Westview Advanced Book
  Classics 1989.
- **Local copy.** Recommended: add to
  `reference/fasttrack-texts/03-modern-geometry/` as
  `Atiyah-KTheory.pdf` to mirror the pattern of other free FT texts
  (Bott *Lectures on Morse Theory*, May *Concise Algebraic Topology*,
  etc.). The booklist line `3.10 ... BUY` should be revised to `FREE
  (Ranicki archive scan)` once the file is mirrored locally.
- **Peer sources for cross-checking** (used in §2 coverage table):
  Hatcher, *Vector Bundles and K-Theory*, Cornell in-progress draft,
  free at <https://pi.math.cornell.edu/~hatcher/VBKT/VBpage.html>;
  Karoubi, *K-Theory: An Introduction*, Grundlehren 226, Springer
  1978 (paywalled, on Anna's Archive); Husemoller, *Fibre Bundles*,
  GTM 20, Springer 1994 (paywalled, on Anna's Archive); Bott-Tu,
  *Differential Forms in Algebraic Topology*, GTM 82, Springer 1982
  (paywalled, FT 1.17, already in `reference/fasttrack-texts/01-fundamentals/`).
