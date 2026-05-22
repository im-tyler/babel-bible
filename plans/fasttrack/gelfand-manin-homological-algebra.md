# Gel'fand-Manin — *Homological Algebra* (Algebra V) (Fast Track 3.02) — Audit + Gap Plan

**Book:** Sergei I. Gel'fand and Yuri I. Manin, *Homological Algebra*
(Encyclopaedia of Mathematical Sciences Vol. 38 — "Algebra V", Springer
1994; viii + 222 pp.). English translation by S. I. Gel'fand (the
author) of the Russian VINITI volume *Современные проблемы математики.
Фундаментальные направления. Том 38. Алгебра-5: Гомологическая алгебра*
(VINITI, Moscow, 1989). ISBN 3-540-53373-2 (Springer hardcover). Often
co-cited with the authors' later, longer *Methods of Homological Algebra*
(Springer 1996, 2nd ed. 2003, ~372 pp.) — the two books cover overlapping
material but the EMS-Algebra-V volume is the **survey** ($\approx 200$
pp.) and *Methods* is the **textbook** ($\approx 370$ pp.). Commercial
title (BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.02 — "Derived
categories, D-modules, Riemann-Hilbert").

**Fast Track entry:** 3.02. The canonical *Soviet-school survey* of
modern homological algebra in the derived-categories / triangulated-
categories framework. Five-chapter structure (in the EMS English ed.):
**Ch. I — Simplicial sets and topology** (simplicial homotopy primer,
chain complexes from simplicial sets); **Ch. II — Cohomology of
complexes** (chain complexes, homotopy, mapping cone, snake lemma,
long exact sequence); **Ch. III — Triangulated categories** (Verdier
1963 axioms, the derived category $D(\mathcal{A})$ via localisation at
quasi-isomorphisms, derived functors $RF$ and $LF$); **Ch. IV — Abelian
sheaves and their cohomology** (sheaves, derived functors of $\Gamma$,
Grothendieck spectral sequence, Leray, Čech); **Ch. V — Hochschild and
cyclic (co)homology** (Hochschild $HH_*(A)$ and $HH^*(A)$, cyclic
homology $HC_*(A)$, Connes' long exact sequence $\cdots \to HC_{n-1}
\to HH_n \to HC_n \to HC_{n-2} \to \cdots$). Two long appendices: the
**Beilinson-Bernstein-Deligne $t$-structures** appendix (the
truncations $\tau^{\le n}$, $\tau^{\ge n}$ and the heart $\mathcal{C} =
D^{\le 0} \cap D^{\ge 0}$ as an abelian category) and a **six-functor
formalism** appendix (the package $f^*$, $f_*$, $f_!$, $f^!$, $\otimes^L$,
$R\mathcal{H}om$ with the adjunctions and base-change isomorphisms).
The book is **the** canonical compact survey of derived-category-era
homological algebra, sitting between Weibel *An Introduction to
Homological Algebra* (Cambridge 1994, ~450 pp.; textbook with classical
emphasis) and Kashiwara-Schapira *Categories and Sheaves* (Springer
2006, ~498 pp.; the comprehensive modern reference). Gel'fand-Manin's
distinctive contribution is **the unified narrative from chain complexes
to triangulated categories to $t$-structures to cyclic homology in
200 pages**, with the derived-category formalism treated as the central
organising principle (not an advanced topic appended at the end).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units so that *Homological Algebra (Algebra V)* (GM-HA hereafter)
is covered to the equivalence threshold (≥95% effective coverage of
theorems, key examples, exercise pack, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).
Mirrors the Serre *Course in Arithmetic* (FT 3.14) and Manin-Panchishkin
*Introduction to Modern Number Theory* (FT 3.34) plans in structure.
**Not** a full P1 audit; a line-number inventory of every named theorem
and exercise is deferred to a dedicated pass after a local PDF is
sourced.

**Sourcing status: REDUCED.** No local PDF in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/` (verified 2026-05-22).
Springer link <https://link.springer.com/book/10.1007/978-3-642-57911-5>
redirects to the Springer IDP authentication wall. Anna's Archive
acquisition deferred. This plan was produced from canonical knowledge of
GM-HA's five-chapter / two-appendix structure (well-documented in
review literature and reproduced in essentially every survey of
derived-category-era homological algebra published 1995-2010) cross-
referenced against the peer sources in §1 and against the existing
Babel Bible derived-functor / sheaf-cohomology / spectral-sequence
units already inventoried below.

**Strong coordination required** with the **Hatcher** (FT reference
anchor), **May Concise** (FT 3.38), **May-Ponto More Concise** (FT
3.39), **Brown-Higgins-Sivera Nonabelian Algebraic Topology** (FT
1.05a), **Brown Topology and Groupoids** (FT 1.05), **Goerss-Jardine
Simplicial Homotopy Theory** (FT 3.40), **Hartshorne** (FT 3.21), and
**Hirzebruch Topological Methods** (FT 3.25) audits. Simplicial sets
(Ch. I) and basic chain complexes (Ch. II opening) are already covered;
mapping cones / triangulated categories / derived categories / six
functors / $t$-structures / Hochschild / cyclic are the genuine gap.

---

## §1 What GM-HA is for

GM-HA is **the canonical 200-page derived-category survey** of modern
homological algebra. Where **Weibel** *An Introduction to Homological
Algebra* (Cambridge Studies in Advanced Mathematics 38, 1994, ~450 pp.)
is the comprehensive textbook treatment with a classical / Cartan-
Eilenberg-and-Grothendieck emphasis (derived functors developed via
spectral sequences before the derived category is even introduced),
where **Hartshorne** *Residues and Duality* (Springer LNM 20, 1966, ~423
pp.) is the original Grothendieck-school manuscript on the six-functor
formalism and Grothendieck duality at full technical depth, and where
**Kashiwara-Schapira** *Categories and Sheaves* (Springer Grundlehren
332, 2006, ~498 pp.) is the comprehensive modern reference that
develops the derived-category and six-functor apparatus from the ground
up with full proofs and the modern $\infty$-categorical viewpoint
(implicit) — **GM-HA is the shortest self-contained survey that places
triangulated and derived categories at the centre of the narrative**.
Like Serre *CSLA* (FT 3.12) and Serre *LRFG* (FT 3.15), GM-HA extracts
its subject's functorial spine and presents it as a coherent 200-page
story, stripping commentary while keeping every non-trivial result.

Distinctive contributions, in the order GM-HA develops them:

1. **Ch. I — Simplicial sets and topology ($\sim$30 pp.).** The
   simplicial-set primer ($\Delta$, $sX$, geometric realisation, the
   homotopy category of simplicial sets, the Eilenberg-Zilber theorem,
   Dold-Kan correspondence between simplicial abelian groups and chain
   complexes). This chapter is the **bridge** from classical topology
   (Hatcher Ch. 2 simplicial homology) into the categorical machinery
   that the rest of the book uses. Gel'fand-Manin's signature pedagogical
   choice: simplicial sets first, *before* abelian categories — because
   the simplicial framework supplies the geometric intuition that makes
   the abstract triangulated-category axioms (Ch. III) feel natural.
2. **Ch. II — Cohomology of complexes ($\sim$35 pp.).** Chain complexes
   in an abelian category, chain maps, **chain homotopy**, the **mapping
   cone** $\mathrm{Cone}(f)$ of a chain map and its long exact sequence,
   the **snake lemma** and **five-lemma** at the level of complexes,
   the **Künneth formula** for tensor products of complexes, and the
   universal-coefficient theorem in chain-complex form. **Abelian
   categories** introduced (Grothendieck axioms AB1–AB5; generators
   AB5+). The chapter ends with the **homotopy category** $K(\mathcal{A})$
   as the localisation of complexes at chain homotopy.
3. **Ch. III — Triangulated and derived categories ($\sim$50 pp.).**
   The most innovative chapter — and the one where most of GM-HA's
   gap-filling pedagogical value sits. **Verdier 1963 axioms** for a
   triangulated category $(T, [1], \mathcal{T})$: shift functor $[1]$,
   distinguished triangles, axioms TR1–TR4 (the octahedral axiom
   being the deepest). The **derived category** $D(\mathcal{A}) =
   K(\mathcal{A})[\mathrm{qis}^{-1}]$ as the localisation of the
   homotopy category at quasi-isomorphisms; the bounded variants
   $D^+, D^-, D^b$. **Derived functors** $RF$ and $LF$ in the modern
   formalism (no resolution chosen until the very last step). The
   **Grothendieck spectral sequence** $R^p G \circ R^q F \Rightarrow
   R^{p+q}(G \circ F)$ when $F$ takes injectives to $G$-acyclics —
   stated and proved as a derived-category isomorphism $R(G \circ F)
   \cong RG \circ RF$ in $D^+(\mathcal{A})$. **Ext and Tor** redefined
   as $\mathrm{Ext}^n(X, Y) = \mathrm{Hom}_{D(\mathcal{A})}(X, Y[n])$,
   $\mathrm{Tor}_n(M, N) = H^{-n}(M \otimes^L N)$. The classical
   construction-by-resolutions is **derived as a corollary**.
4. **Ch. IV — Abelian sheaves and their cohomology ($\sim$40 pp.).**
   Sheaves on a topological space, sheafification, direct/inverse
   images. **Sheaf cohomology** $H^n(X, \mathcal{F}) = R^n
   \Gamma(X, -)(\mathcal{F})$. Injective resolutions and Godement
   resolutions. **Leray spectral sequence** $H^p(Y, R^q f_* \mathcal{F})
   \Rightarrow H^{p+q}(X, \mathcal{F})$ as a corollary of the
   Grothendieck spectral sequence with $F = f_*$, $G = \Gamma_Y$.
   Čech cohomology and comparison with derived-functor cohomology.
   Hypercohomology $\mathbb{H}^n(X, \mathcal{F}^\bullet)$ of a complex
   of sheaves.
5. **Ch. V — Hochschild and cyclic (co)homology ($\sim$30 pp.).** For
   a $k$-algebra $A$: the bar resolution, **Hochschild homology**
   $HH_n(A) = \mathrm{Tor}^{A^e}_n(A, A)$ where $A^e = A \otimes A^{\mathrm{op}}$,
   **Hochschild cohomology** $HH^n(A) = \mathrm{Ext}^n_{A^e}(A, A)$.
   The Hochschild-Kostant-Rosenberg theorem identifying $HH^*(A) \cong
   \Omega^*_{A/k}$ for smooth commutative $A$. **Cyclic homology**
   $HC_n(A)$ via the cyclic bar complex (Connes' construction). The
   **Connes long exact sequence** $\cdots \to HC_{n-1}(A) \to HH_n(A)
   \to HC_n(A) \to HC_{n-2}(A) \to \cdots$ and the Connes operator
   $B$. Application: cyclic homology as a non-commutative de Rham
   theory (Connes' philosophy).
6. **Appendix I — $t$-structures (Beilinson-Bernstein-Deligne).**
   BBD 1982 *Astérisque* 100 axiomatisation: a $t$-structure on a
   triangulated category $T$ is a pair $(D^{\le 0}, D^{\ge 0})$ of
   full subcategories with $D^{\le -1} \subset D^{\le 0}$, $D^{\ge 1}
   \subset D^{\ge 0}$, $\mathrm{Hom}(D^{\le 0}, D^{\ge 1}) = 0$, and
   the triangle axiom. The **heart** $\mathcal{C} = D^{\le 0} \cap
   D^{\ge 0}$ is an abelian category. The **truncations**
   $\tau^{\le n}, \tau^{\ge n}$ as functors. The canonical $t$-structure
   on $D(\mathcal{A})$ has heart $\mathcal{A}$; perverse $t$-structures
   on $D^b_c(X)$ have heart $\mathrm{Perv}(X)$.
7. **Appendix II — Six-functor formalism.** Following Grothendieck-
   Verdier: for a (suitable) morphism $f : X \to Y$, the package of
   functors $f^*$, $f_*$, $f_!$, $f^!$ between derived categories of
   sheaves, with the standard adjunctions $(f^* \dashv f_*)$,
   $(f_! \dashv f^!)$, the projection formula, base change, and
   Grothendieck duality $f^! = D \circ f^* \circ D$. Presented as
   axiomatic specification + sketch of the construction in the
   constructible-sheaves setting; full proofs delegated to Hartshorne
   *Residues and Duality*.

GM-HA is **the** canonical short-form anchor for the derived-category
era. It is the prerequisite for (or co-requisite with) **Kashiwara-
Schapira** (the long-form reference), **Hartshorne RD** (the original
six-functor reference), **Beilinson-Bernstein-Deligne** *Faisceaux
pervers* (the perverse-sheaves reference), and **Voevodsky** *Triangulated
categories of motives* (the motivic application). Within the Babel
Bible, GM-HA is the natural anchor for the **derived-category /
triangulated-category / six-functor / $t$-structure** track that is
currently absent.

**Peer sources** (in addition to the GM-HA book itself; ≥3 required per
the audit protocol):

- C. A. Weibel, *An Introduction to Homological Algebra* (Cambridge
  Studies in Advanced Mathematics 38, 1994, ~450 pp.) — the
  comprehensive English textbook. **Classical emphasis**: derived
  functors via injective/projective resolutions developed in Ch. 2
  before derived categories appear in Ch. 10. Already a tier-anchor
  in `01.02.11`, `04.03.06`.
- S. I. Gel'fand, Y. I. Manin, *Methods of Homological Algebra*
  (Springer 1996; 2nd ed. 2003, ~372 pp.) — the **longer textbook
  companion** to GM-HA. Same authors, same derived-category-first
  philosophy, ~170 pp. more material (full proofs, more examples,
  more exercises). Where GM-HA stops at a survey-density treatment,
  *Methods* expands to textbook depth. Already a tier-anchor in
  `04.03.06`. **GM-HA Ch. III + Appendix I corresponds approximately
  to *Methods* Chs. III + IV**; the punch-list units below take
  *Methods* as the textbook supplement.
- R. Hartshorne, *Residues and Duality* (Springer LNM 20, 1966, ~423
  pp.) — the original Grothendieck-school manuscript on the six-
  functor formalism, Grothendieck duality, dualising complexes, and
  the derived category in algebraic geometry. **Hartshorne RD is the
  source GM-HA Appendix II points at**.
- M. Kashiwara, P. Schapira, *Categories and Sheaves* (Springer
  Grundlehren 332, 2006, ~498 pp.) — the comprehensive modern
  reference for derived categories and the six-functor formalism with
  full proofs and the modern viewpoint (includes preliminary
  $\infty$-categorical hints). Where Hartshorne RD is the original
  manuscript and GM-HA is the survey, K-S is the modern textbook.
- A. Beilinson, J. Bernstein, P. Deligne, "Faisceaux pervers,"
  *Astérisque* 100, Soc. Math. France 1982 — the original BBD paper.
  Axiomatic $t$-structures and perverse sheaves in their first form.
  GM-HA Appendix I is the short-form survey of §§1.3–1.4 of BBD.
- (Supplementary) H. Cartan, S. Eilenberg, *Homological Algebra*
  (Princeton 1956) — the original textbook on homological algebra.
  Predates derived categories. GM-HA Ch. II is the modernised
  Cartan-Eilenberg.
- (Supplementary) J. L. Verdier, "Catégories dérivées: État 0,"
  appendix to *SGA 4½* (Springer LNM 569, 1977; original thesis
  defended 1967, published 1996 by Soc. Math. France) — the original
  derived-categories thesis. **GM-HA Ch. III is the readable
  exposition of Verdier's thesis.**
- (Supplementary) J.-L. Loday, *Cyclic Homology* (Springer Grundlehren
  301, 1992; 2nd ed. 1998, ~516 pp.) — the comprehensive reference
  for cyclic homology. GM-HA Ch. V is the survey-density version of
  Loday Chs. 1–4.

---

## §2 Coverage table (Babel Bible vs GM-HA)

Cross-referenced against the current Babel Bible corpus
(`content/00-precalc/` through `content/22-language/`; ~365 units total
as of 2026-05-22).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| GM-HA topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Simplicial sets $sX$, $\Delta$, geometric realisation $\lvert sX \rvert$ | `03.12.22-delta--complex-semi-simplicial-set`, `03.12.25-simplicial-sets-and-geometric-realization` | ✓ | Covered by **Goerss-Jardine** (FT 3.40) and **May Simplicial Objects** (FT 3.40-adjacent) audits. No new unit needed. |
| Simplicial homology | `03.12.12-simplicial-homology` | ✓ | Hatcher-anchored. |
| Eilenberg-Zilber theorem, Dold-Kan correspondence | — | ✗ | **Gap.** Dold-Kan is a load-bearing equivalence between simplicial abelian groups and non-negatively graded chain complexes; cited in `03.12.25` but no dedicated unit. |
| Chain complex, chain map, chain homotopy | △ | △ | Touched in `03.12.12-simplicial-homology`, `03.12.13-cellular-homology`, `03.04.06-de-rham-cohomology`; **no dedicated chain-complex / chain-homotopy unit at the abstract abelian-category level**. |
| Snake lemma, five-lemma | `01.02.11-exact-sequence-snake-lemma` | ✓ | Shipped in foundations; Weibel-anchored. No new unit. |
| Mapping cone $\mathrm{Cone}(f)$ in chain complexes, long exact sequence | — | ✗ | **Gap.** Topological mapping cone covered in `03.12.01-homotopy` adjacent material; **chain-complex mapping cone is a distinct algebraic construction** and is not covered. The bridge to triangulated-category distinguished triangles. |
| Abelian category, Grothendieck axioms AB1–AB5 | — | ✗ | **Gap.** Abelian-category axioms are referenced inline in `04.03.06-derived-functors-and-ext` but never given their own unit. |
| Generators / AB5+ categories, Grothendieck's existence-of-injectives theorem | — | ✗ | **Gap.** Tôhoku 1957 Theorem 1.10.1; the existence theorem that makes derived-functor cohomology well-defined for sheaves. |
| Homotopy category of complexes $K(\mathcal{A})$ | — | ✗ | **Gap.** The intermediate object between $\mathrm{Ch}(\mathcal{A})$ and $D(\mathcal{A})$. |
| Triangulated category, Verdier axioms TR1–TR4, octahedral axiom | — | ✗ | **Gap.** Foundational; the axiomatic framework underlying both $D(\mathcal{A})$ and the stable homotopy category. |
| Derived category $D(\mathcal{A}) = K(\mathcal{A})[\mathrm{qis}^{-1}]$, bounded variants | — | ✗ | **Gap.** The central object of modern homological algebra. |
| Localisation of a category at a multiplicative system | △ | △ | Touched in passing in `04.10.15-derived-git-and-magic-windows`; no dedicated unit on Gabriel-Zisman calculus of fractions. |
| Derived functors $RF$, $LF$ via the derived category | △ | △ | `04.03.06-derived-functors-and-ext` covers classical $R^iF$ via injective resolutions, and Master tier mentions derived-category formulation; **the derived-functor-as-Kan-extension framing in $D^+(\mathcal{A}) \to D^+(\mathcal{B})$ is not given its own unit**. |
| Sheaf cohomology $H^n(X, \mathcal{F})$ via injective resolutions | `04.03.01-sheaf-cohomology` | ✓ | Shipped. |
| Čech cohomology and comparison theorem | `04.03.03-cech-schemes` | △ | Schemes-flavoured; the general topological Čech cohomology with comparison to $R^i\Gamma$ is touched but not full. |
| Hypercohomology $\mathbb{H}^n(X, \mathcal{F}^\bullet)$ | `03.04.14-hypercohomology-of-a-complex-of-sheaves` | ✓ | Shipped. |
| Higher direct images $R^if_*$ | `04.03.07-higher-direct-images-and-base-change` | ✓ | Shipped. |
| Spectral sequence (general) | `03.13.01-spectral-sequence` | ✓ | Bott-Tu / McCleary anchored. |
| Spectral sequence of a filtered complex | △ | △ | Subsumed under `03.13.01` opening; **no dedicated unit** on the filtered-complex spectral sequence as the primary construction. |
| Grothendieck spectral sequence $R^pG \circ R^qF \Rightarrow R^{p+q}(GF)$ | — | ✗ | **Gap.** Foundational; specialises to Leray, Serre, Adams. |
| Leray spectral sequence (general) | `03.13.02-leray-serre` | △ | Leray-Serre (fibration form) shipped; the **general Leray spectral sequence for a continuous map $f : X \to Y$ and a sheaf** is a distinct sheaf-theoretic statement and is a gap. |
| Ext via derived category, Yoneda Ext | `04.03.06-derived-functors-and-ext` | ✓ | Shipped (master tier covers the derived-category framing). |
| Tor via derived tensor product $\otimes^L$ | △ | △ | Implicit in `01.02.10-tensor-product-modules`; **the derived tensor product as a functor on derived categories is a gap**. |
| Six-functor formalism ($f^*, f_*, f_!, f^!, \otimes^L, R\mathcal{H}om$) | — | ✗ | **Gap.** Massive load-bearing gap; appears via lone references in `04.03.07`, `04.10.15-derived-git-and-magic-windows`, and `04.05.12-pointer-grothendieck-riemann-roch-grr`. |
| Grothendieck duality, dualising complex | △ | △ | Pointed at in `04.08.03-serre-duality` master tier; **no derived-category Grothendieck-duality unit**. |
| $t$-structures on a triangulated category, heart, truncations | — | ✗ | **Gap.** BBD-flavoured; the categorical refinement of "good" subcategories of $D(\mathcal{A})$. |
| Perverse sheaves $\mathrm{Perv}(X)$ (pointer) | — | ✗ | **Gap.** A pointer unit is appropriate; full BBD theory is a downstream chapter, not on the GM-HA punch-list. |
| Hochschild homology $HH_n(A)$, Hochschild cohomology $HH^n(A)$ | — | ✗ | **Gap.** Foundational non-commutative invariant. Connected to `04.10.15-derived-git-and-magic-windows` Master-tier references but no dedicated unit. |
| Hochschild-Kostant-Rosenberg theorem | — | ✗ | **Gap.** $HH^*(A) \cong \Omega^*_{A/k}$ for smooth commutative $A$; the bridge to de Rham. |
| Cyclic homology $HC_n(A)$, Connes' long exact sequence | — | ✗ | **Gap.** $\cdots \to HC_{n-1} \to HH_n \to HC_n \to HC_{n-2} \to \cdots$ and the Connes operator $B$. |
| Tilting theory (basic) | — | ✗ | **Pointer-only gap.** Tilting is downstream; GM-HA gives a brief mention. A pointer unit is appropriate at most, and probably defer. |
| D-modules and Riemann-Hilbert (booklist gloss) | — | ✗ | **Out of scope for GM-HA Algebra V.** The booklist row 3.02 mentions D-modules / Riemann-Hilbert as the "scope" of the volume, but the *Algebra V* EMS book does **not** cover D-modules — that's the **separate** Algebra-VI EMS volume (Borel et al., "D-modules", Springer 1994). Listed here only to clarify: **D-modules are deferred to a future audit and are not punch-list items for GM-HA**. |

**Aggregate coverage estimate:** **~25%** of GM-HA has corresponding
Babel Bible units. The simplicial-sets / chain-complex / snake-lemma /
sheaf-cohomology / classical-derived-functor / hypercohomology /
spectral-sequence / Leray-Serre layer is covered (Chs. I, II opening,
IV largely). The **distinctive GM-HA content** — triangulated and
derived categories (Ch. III), $t$-structures (App. I), six-functor
formalism (App. II), Hochschild and cyclic (Ch. V) — is essentially
absent. This is the **load-bearing gap** that makes GM-HA a Priority-1
audit: the corpus cites derived-category-era language in dozens of
master-tier anchors but lacks the foundational units that would make
those references resolve.

**Structural recommendation.** This plan proposes **two new sub-chapters**:

- **`01.02.30-39 — Homological algebra (foundations)`** under
  `content/01-foundations/02-groups/` (already the algebra/ring/module
  home — see `01.02.10-tensor-product-modules`, `01.02.11-exact-
  sequence-snake-lemma`, `01.02.16-nakayama-lemma`). The foundational
  abstract-algebra-flavoured units (chain complexes, abelian categories,
  homotopy category, mapping cone) live here.
- **`04.03.10-19 — Derived categories and six functors`** under
  `content/04-algebraic-geometry/03-cohomology/` (existing chapter —
  see `04.03.01` through `04.03.07`). The geometric-flavoured units
  (triangulated category axioms with sheaf-theoretic examples, $D(\mathcal{A})$
  for $\mathcal{A} =$ sheaves on a topological space, derived $f_*$,
  six-functor formalism, Grothendieck duality, $t$-structures with
  perverse-sheaves pointer) live here.
- **`16-something/HH-HC`** — Hochschild and cyclic homology live
  awkwardly. The natural Babel Bible home is a new sub-chapter under
  `04-algebraic-geometry/` (since the noncommutative-algebra applications
  link to derived AG via `04.10.15-derived-git-and-magic-windows`) or
  a new top-level chapter slot. **Proposal**: ship as
  `04.03.20-22 — Hochschild and cyclic homology` (continuing the
  `04.03.xx` cohomology sub-chapter); revisit if a dedicated
  noncommutative-algebra chapter materialises later.

Dependency edges: `01.02.30 chain complex` → `01.02.31 chain homotopy`
→ `01.02.32 mapping cone` → `01.02.33 abelian category` → `01.02.34
homotopy category $K(\mathcal{A})$` → `04.03.10 triangulated category`
→ `04.03.11 derived category $D(\mathcal{A})$` → `04.03.12 derived
functors $RF$, $LF$` → `04.03.13 Grothendieck spectral sequence` → ...

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites (foundations sub-chapter scaffolding):**

1. **`01.02.30` Chain complex in an abelian category.** Definition of a chain complex $(C^\bullet, d)$ in an abelian category $\mathcal{A}$, the category $\mathrm{Ch}(\mathcal{A})$, cochain vs chain conventions, bounded variants $\mathrm{Ch}^+, \mathrm{Ch}^-, \mathrm{Ch}^b$, cohomology objects $H^n(C^\bullet) = \ker d^n / \mathrm{im}\, d^{n-1}$, the long exact sequence in cohomology for a short exact sequence of complexes. GM-HA Ch. II §§1–2 anchor; Weibel Ch. 1 cross-anchor. Three-tier. ~1800 words. Originator: Cartan-Eilenberg 1956 *Homological Algebra* (the modern axiomatic presentation; Poincaré-Betti 1895 origin for the topological case).

2. **`01.02.31` Chain homotopy and the homotopy category $K(\mathcal{A})$.** Chain homotopy between chain maps, $f \simeq g \iff f - g = ds + sd$, the homotopy category $K(\mathcal{A}) = \mathrm{Ch}(\mathcal{A})/\simeq$, $K^+$, $K^-$, $K^b$. The shift functor $[1]$, $C[1]^n = C^{n+1}$, $d_{C[1]} = -d_C$. Why $K(\mathcal{A})$ is **not** abelian but is **triangulated**. GM-HA Ch. II §§3–4 anchor; Weibel §1.4 cross-anchor. Three-tier. ~1800 words. Originator: Verdier 1963 thesis.

3. **`01.02.32` Mapping cone of a chain map and the distinguished triangle.** Definition $\mathrm{Cone}(f)^n = C^{n+1} \oplus D^n$ with differential $\begin{pmatrix} -d_C & 0 \\ f & d_D \end{pmatrix}$, the natural maps $D \to \mathrm{Cone}(f) \to C[1]$, the **long exact sequence in cohomology** $\cdots \to H^n(C) \to H^n(D) \to H^n(\mathrm{Cone}(f)) \to H^{n+1}(C) \to \cdots$, the **distinguished triangle** $C \xrightarrow{f} D \to \mathrm{Cone}(f) \to C[1]$ as the algebraic analogue of the Puppe sequence. GM-HA Ch. II §5 anchor; Weibel §1.5 cross-anchor. Three-tier. ~1800 words. **Distinct from the topological mapping cone** in `03.12.01-homotopy`-adjacent material — flag the analogy in master tier.

4. **`01.02.33` Abelian category and Grothendieck axioms AB1-AB5.** Pre-additive → additive → pre-abelian → abelian; the axioms AB1 (kernels/cokernels exist), AB2 (image = coimage), AB3 (small coproducts), AB4 (small coproducts exact), AB5 (filtered colimits exact); AB5+generator = Grothendieck category. Examples: $\mathrm{Mod}_R$, $\mathrm{Sh}(X)$, $\mathrm{QCoh}(X)$. **Grothendieck's existence theorem**: every Grothendieck category has enough injectives. GM-HA Ch. II §6 + interspersed anchor; Weibel Ch. 1 §A.4 + Grothendieck 1957 Tôhoku §1.10 cross-anchor. Three-tier. ~2200 words. Originator: Grothendieck 1957 *Tôhoku Math. J.* 9.

**Priority 1 — high-leverage, derived-category track (the load-bearing GM-HA contribution):**

5. **`04.03.10` Triangulated category — Verdier axioms TR1-TR4 and the octahedral axiom.** Triangulated category $(T, [1], \Delta)$ with shift autoequivalence $[1]$ and class $\Delta$ of distinguished triangles; axioms TR1 (existence and naturality), TR2 (rotation), TR3 (morphisms of triangles), TR4 (octahedral). Key examples: $K(\mathcal{A})$, $D(\mathcal{A})$, the stable homotopy category $\mathrm{SH}$. **The octahedral axiom and the eight composable triangles diagram**, with the pedagogical "two-of-three" lemma. GM-HA Ch. III §§1–2 anchor; Weibel Ch. 10 + Kashiwara-Schapira Ch. 10 cross-anchor; *Methods of Homological Algebra* Ch. IV §1 cross-anchor. Three-tier; Master tier required. ~2400 words. Originator: Verdier 1963 thesis (formally 1967; published 1996).

6. **`04.03.11` Derived category $D(\mathcal{A})$ — localisation at quasi-isomorphisms.** Quasi-isomorphism $f : C \to D$ ($H^n(f)$ iso for all $n$); Gabriel-Zisman calculus of fractions on $K(\mathcal{A})$ at $\mathrm{qis}$; the derived category $D(\mathcal{A}) = K(\mathcal{A})[\mathrm{qis}^{-1}]$ with universal property. The bounded variants $D^+(\mathcal{A}), D^-(\mathcal{A}), D^b(\mathcal{A})$. **The derived category is triangulated** (distinguished triangles inherited from $K(\mathcal{A})$). Equivalences $D^+(\mathcal{A}) \cong K^+(\mathrm{Inj}\,\mathcal{A})$ when $\mathcal{A}$ has enough injectives; the dual statement with projectives. GM-HA Ch. III §3 anchor; Weibel Ch. 10 §1–2 cross-anchor; *Methods of Homological Algebra* Ch. III cross-anchor. Three-tier; Master tier required. ~2400 words. Originator: Verdier 1963 thesis; Gabriel-Zisman 1967 *Calculus of Fractions and Homotopy Theory* (Springer Ergebnisse 35).

7. **`04.03.12` Derived functors $RF$ and $LF$ via derived categories.** A left-exact additive functor $F : \mathcal{A} \to \mathcal{B}$ extends to $RF : D^+(\mathcal{A}) \to D^+(\mathcal{B})$ as the (essentially unique) total right derived functor; dually $LF : D^-(\mathcal{A}) \to D^-(\mathcal{B})$ for right-exact $F$. Definition via $F$-injective ($F$-acyclic) resolutions; functoriality and universal property in derived-category language. **Recovery of the classical $R^iF$ as $H^i(RF)$**. Examples: $R\Gamma$, $Rf_*$, $R\mathrm{Hom}$, $\otimes^L$. GM-HA Ch. III §§4–5 anchor; Weibel Ch. 10 §§5–8 cross-anchor; *Methods of Homological Algebra* Ch. III §§5–7 cross-anchor. Three-tier; Master tier required. ~2200 words. **Coordinates with existing `04.03.06-derived-functors-and-ext`** — this is the *derived-category-formulation* companion; `04.03.06` keeps its classical Cartan-Eilenberg framing, this unit lifts to $D^+$.

8. **`04.03.13` Grothendieck spectral sequence.** Statement: for additive functors $\mathcal{A} \xrightarrow{F} \mathcal{B} \xrightarrow{G} \mathcal{C}$ between abelian categories with enough injectives, with $F$ taking injectives to $G$-acyclics, there is a convergent spectral sequence $E_2^{pq} = R^p G(R^q F(X)) \Rightarrow R^{p+q}(GF)(X)$, equivalently the derived-category isomorphism $R(GF) \cong RG \circ RF$ in $D^+(\mathcal{A}) \to D^+(\mathcal{C})$. Proof via Cartan-Eilenberg resolutions / hyper-derived functors. **Specialisations**: Leray ($F = f_*$, $G = \Gamma_Y$), Serre (fibration, fibre = a point), Hochschild-Serre (group extension), Adams (Eilenberg-Moore for a pullback). GM-HA Ch. III §6 anchor; Weibel Ch. 5 §8 + McCleary Ch. 12 cross-anchor. Three-tier. ~2000 words. Originator: Grothendieck 1957 *Tôhoku Math. J.* 9 §2.4. **Prerequisite for upgrading `04.03.07-higher-direct-images-and-base-change` to its full master-tier statement.**

9. **`04.03.14` Spectral sequence of a filtered complex.** Given a decreasing filtration $F^\bullet C^\bullet$ on a chain complex $C^\bullet$, the associated spectral sequence $E_0^{pq} = \mathrm{gr}^p_F C^{p+q}$, $E_1^{pq} = H^{p+q}(\mathrm{gr}^p_F C^\bullet)$, converging (under boundedness hypotheses) to $H^{p+q}(C^\bullet)$ with the induced filtration. **The construction underlying every spectral sequence in the book**. Convergence criteria (boundedness, exhaustiveness, Hausdorffness). GM-HA Ch. III §§7–8 anchor; Weibel §5.4–5.5 + McCleary §2.2 cross-anchor; Bott-Tu §14 cross-anchor for the double-complex special case. Three-tier; Master tier proves convergence. ~2200 words. **Upgrades existing `03.13.01-spectral-sequence`** which currently opens with the exact-couple framing — the filtered-complex framing belongs alongside it; either deepen `03.13.01` or ship `03.13.14-filtered-complex` as a sibling, editorial decision.

10. **`04.03.15` Sheaf cohomology — Leray spectral sequence (general form).** For a continuous map $f : X \to Y$ and an abelian sheaf $\mathcal{F}$ on $X$: $E_2^{pq} = H^p(Y, R^q f_* \mathcal{F}) \Rightarrow H^{p+q}(X, \mathcal{F})$. Proof as a corollary of the Grothendieck spectral sequence with $F = f_*$, $G = \Gamma_Y$. Worked examples: $f =$ projection $X \times Y \to Y$ (Künneth-flavoured); $f =$ inclusion of a closed subset (local cohomology pairing); $f =$ Stein cover (vanishing $R^q f_*$ for $q > 0$). GM-HA Ch. IV §§3–4 anchor; Hartshorne *AG* §III.8 cross-anchor; Godement *Topologie algébrique et théorie des faisceaux* (Hermann 1958) cross-anchor. Three-tier. ~2000 words. **Distinct from existing `03.13.02-leray-serre`** which is the fibration form; this is the sheaf form on a general continuous map. Originator: Leray 1946 *C.R. Acad. Sci. Paris* 222 (initial construction); Grothendieck 1957 *Tôhoku* (modern derived-functor version).

11. **`04.03.16` Six-functor formalism — adjunctions and base change.** For a (suitable) morphism $f : X \to Y$ of locally compact Hausdorff spaces or finite-type schemes, the package $(f^*, f_*, f_!, f^!)$ with adjunctions $(f^* \dashv f_*)$ and $(f_! \dashv f^!)$; the **projection formula** $f_!(\mathcal{F} \otimes^L f^*\mathcal{G}) \cong f_!\mathcal{F} \otimes^L \mathcal{G}$; **base change** for a Cartesian square $\begin{smallmatrix} X' \to X \\ \downarrow \quad \downarrow \\ Y' \to Y\end{smallmatrix}$: $g^* f_! \cong f'_! g'^*$. **Grothendieck duality** $f^!(\mathcal{O}_Y) =$ relative dualising complex; for proper $f$, $f^! \cong D \circ f^* \circ D$ where $D = R\mathcal{H}om(-, \omega^\bullet)$ is Verdier duality. GM-HA Appendix II anchor; Hartshorne *Residues and Duality* Chs. III, IV, VII cross-anchor; Kashiwara-Schapira Ch. 3 cross-anchor; SGA 4 / SGA 4½ Verdier appendix cross-anchor. Two-tier (Intermediate + Master); Beginner = pointer only. ~2800 words. **Massive load-bearing pointer**; full proofs delegated to RD and K-S. Originator: Grothendieck 1957–1972 (SGA 4, SGA 4½); Verdier 1967 thesis.

12. **`04.03.17` Derived tensor product $\otimes^L$ and Tor in derived categories.** For $\mathcal{A} = \mathrm{Mod}_R$ ($R$ commutative): the derived tensor product $M \otimes^L_R N$ defined via flat (projective) resolution of either argument, well-defined up to canonical quasi-isomorphism. **$\mathrm{Tor}^R_n(M, N) = H^{-n}(M \otimes^L_R N)$**. The functor $\otimes^L : D^-(\mathrm{Mod}_R) \times D^-(\mathrm{Mod}_R) \to D^-(\mathrm{Mod}_R)$ as a tensor-triangulated structure. Examples: $\mathrm{Tor}^{\mathbb{Z}}_*(\mathbb{Z}/n, M)$, $\mathrm{Tor}^R_*(R/I, R/J)$ for regular sequences. GM-HA Ch. III §5 anchor; Weibel Ch. 3 cross-anchor. Three-tier. ~1800 words. Originator: Cartan-Eilenberg 1956 (classical Tor); Verdier 1963 (derived-category formulation).

13. **`04.03.18` $t$-structure on a triangulated category — heart and truncations.** BBD axiomatisation: a $t$-structure on $T$ is a pair $(T^{\le 0}, T^{\ge 0})$ of full strict subcategories with $T^{\le -1} \subset T^{\le 0}$, $T^{\ge 1} \subset T^{\ge 0}$, $\mathrm{Hom}_T(T^{\le 0}, T^{\ge 1}) = 0$, and **for every $X \in T$ a triangle $\tau^{\le 0}X \to X \to \tau^{\ge 1}X \to (\tau^{\le 0}X)[1]$** with $\tau^{\le 0}X \in T^{\le 0}$, $\tau^{\ge 1}X \in T^{\ge 1}$. The **heart** $\mathcal{C} = T^{\le 0} \cap T^{\ge 0}$ is abelian. The **truncations** $\tau^{\le n}, \tau^{\ge n}$ are functors. The canonical $t$-structure on $D(\mathcal{A})$ has heart $\mathcal{A}$. **Cohomology functor** $H^0_t : T \to \mathcal{C}$. GM-HA Appendix I anchor; BBD 1982 *Astérisque* 100 §§1.3–1.4 cross-anchor; Kashiwara-Schapira Ch. 10 §1 cross-anchor. Three-tier. ~2200 words. Originator: Beilinson-Bernstein-Deligne 1982.

14. **`04.03.19` Pointer — perverse sheaves $\mathrm{Perv}(X)$.** Pointer unit. The perverse $t$-structure on $D^b_c(X)$ (constructible sheaves on a complex algebraic variety $X$ of dimension $d$, with middle perversity $p$): $\mathcal{F}^\bullet \in {}^p D^{\le 0}$ iff $\dim \mathrm{supp}\, \mathcal{H}^i(\mathcal{F}^\bullet) \le -i$ for all $i$; dually for ${}^p D^{\ge 0}$. The **heart $\mathrm{Perv}(X) = {}^p D^{\le 0} \cap {}^p D^{\ge 0}$**, an abelian category. Properties: stability under Verdier duality, simple objects classified by (irreducible local system on a smooth locally closed subvariety, intermediate extension $j_{!*}$). **Applications**: decomposition theorem (BBD-Gabber); intersection cohomology $IH^*(X)$. Pointer-tier only (Beginner + Intermediate as pointer; Master tier optional, gates on BBD audit). ~1500 words. Originator: Beilinson-Bernstein-Deligne 1982 *Astérisque* 100; Goresky-MacPherson 1980 *Topology* 19 (intersection homology).

**Priority 1 — Hochschild and cyclic (Ch. V):**

15. **`04.03.20` Hochschild homology and cohomology.** For an associative $k$-algebra $A$, the **bar resolution** $B_\bullet(A) = A \otimes A^{\otimes \bullet} \otimes A$ of $A$ as an $A$-bimodule. **Hochschild homology** $HH_n(A, M) = \mathrm{Tor}^{A^e}_n(A, M)$ where $A^e = A \otimes_k A^{\mathrm{op}}$ and $M$ is an $A$-bimodule. **Hochschild cohomology** $HH^n(A, M) = \mathrm{Ext}^n_{A^e}(A, M)$. The Hochschild complex $C_n(A, M) = M \otimes A^{\otimes n}$ with the alternating-sum differential $b$. Interpretation: $HH^0$ = centre, $HH^1$ = outer derivations, $HH^2$ = deformations, $HH^3$ = obstructions. GM-HA Ch. V §§1–2 anchor; Loday Ch. 1 + Weibel Ch. 9 cross-anchor. Three-tier. ~2200 words. Originator: Hochschild 1945 *Ann. Math.* 46.

16. **`04.03.21` Hochschild-Kostant-Rosenberg theorem.** For a smooth commutative $k$-algebra $A$ (finitely generated, or analytic local, depending on framing): $HH_n(A) \cong \Omega^n_{A/k}$ and $HH^n(A) \cong \wedge^n_A \mathrm{Der}_k(A, A)$. The antisymmetrisation map $\Omega^n \to C_n$ is a quasi-isomorphism. **Significance**: identifies Hochschild homology with algebraic de Rham forms for smooth schemes; the bridge from non-commutative invariants back to commutative geometry. GM-HA Ch. V §3 anchor; Loday Ch. 3 + Hochschild-Kostant-Rosenberg 1962 *Trans. AMS* 102 cross-anchor. Three-tier; Master tier required. ~1800 words. Originator: Hochschild-Kostant-Rosenberg 1962 *Trans. Amer. Math. Soc.* 102.

17. **`04.03.22` Cyclic homology and Connes' long exact sequence.** Cyclic homology $HC_n(A)$ via the **cyclic bar complex** with the cyclic operator $t : C_n \to C_n$, $t(a_0 \otimes \cdots \otimes a_n) = (-1)^n (a_n \otimes a_0 \otimes \cdots \otimes a_{n-1})$. Connes' bicomplex with operators $b$ (Hochschild) and $B$ (Connes operator). **Connes' long exact sequence (SBI sequence)**: $\cdots \to HC_{n-1}(A) \xrightarrow{S} HC_n(A) \xrightarrow{B} HH_{n+1}(A) \xrightarrow{I} HC_n(A) \to \cdots$, where $S$ is the periodicity operator, $B$ is the Connes coboundary, $I$ is the inclusion of Hochschild cycles. Application: cyclic homology of $k[x]$, of the group algebra $k[\Gamma]$, of $C^\infty(M)$ (Connes' philosophy: cyclic = non-commutative de Rham). GM-HA Ch. V §§4–5 anchor; Loday Chs. 2 + 4 cross-anchor; Connes 1985 *Publ. Math. IHES* 62 cross-anchor. Three-tier; Master tier required. ~2200 words. Originator: Connes 1981–1985 *C.R. Acad. Sci. Paris* 296 (announcement); *Publ. Math. IHES* 62 (full paper); Tsygan 1983 *Uspekhi Mat. Nauk* 38 (independent discovery in the Soviet school).

**Priority 2 — supporting / pointer:**

18. **`01.02.35` Dold-Kan correspondence.** Statement: the normalised-chain functor $N : s\mathrm{Ab} \to \mathrm{Ch}_{\ge 0}(\mathrm{Ab})$ is an equivalence of categories, with inverse the Kan extension $K : \mathrm{Ch}_{\ge 0}(\mathrm{Ab}) \to s\mathrm{Ab}$. **The Eilenberg-Zilber theorem** as a corollary: for simplicial abelian groups $A_\bullet, B_\bullet$, $N(A \otimes B) \simeq NA \otimes NB$ as chain complexes. Applications: chain complexes as the algebraic shadow of simplicial sets; bridge between simplicial homotopy theory and homological algebra. GM-HA Ch. I §§6–7 anchor; Goerss-Jardine Ch. III §2 + Weibel Ch. 8 §4 cross-anchor; May *Simplicial Objects in Algebraic Topology* §22 cross-anchor. Three-tier. ~1800 words. Originator: Dold 1958 + Kan 1958 (independent); Eilenberg-Zilber 1953.

---

## §4 Implementation sketch (P3 → P4)

For a full GM-HA coverage pass, **items 1–17 are the minimum set** to hit
the FT equivalence threshold, **with the Priority-0 foundations
scaffolding (items 1–4) shipped first**. Realistic production estimate
(mirroring earlier Brown / Lawson-Michelsohn / Bott-Tu / Hartshorne
batches):

- ~4–5 hours per unit on average. GM-HA units skew **slightly higher**
  than the corpus average — derived-category-flavoured units are
  conceptually dense and require extensive worked examples to land at
  the Beginner/Intermediate tiers.
- 4 Priority-0 foundations units × ~4 hours = **~16 hours**.
- 10 Priority-1 derived-category-track units × ~4.5 hours = **~45 hours**.
- 3 Priority-1 Hochschild/cyclic units × ~4.5 hours = **~14 hours**.
- 1 Priority-2 Dold-Kan unit × ~4 hours = **~4 hours**.
- **Total GM-HA marginal cost ~79 hours**. Fits a focused 10–12 day
  window. Strong coordination dedup with the Hartshorne audit (which
  references derived-functor units via `04.03.06`) and the K-S /
  Hartshorne RD downstream audits.

**Originator-prose targets.** Several GM-HA units are originator-
eligible per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10:

- **Grothendieck 1957**, "Sur quelques points d'algèbre homologique,"
  *Tôhoku Math. J.* 9, 119–221. The Grothendieck axioms AB1–AB5 and
  the existence of injectives in a Grothendieck category. Originator
  citation for `01.02.33` and `04.03.13`.
- **Verdier 1963 / 1967 / 1996**, *Catégories dérivées et catégories
  triangulées* (thesis, defended 1967; published as *Astérisque* 239,
  Soc. Math. France 1996). The triangulated and derived categories.
  Originator citation for `04.03.10`, `04.03.11`, `04.03.12`.
- **Hochschild 1945**, "On the cohomology groups of an associative
  algebra," *Ann. Math.* 46, 58–67. Hochschild (co)homology.
  Originator citation for `04.03.20`.
- **Hochschild-Kostant-Rosenberg 1962**, "Differential forms on regular
  affine algebras," *Trans. Amer. Math. Soc.* 102, 383–408. HKR
  theorem. Originator citation for `04.03.21`.
- **Connes 1985**, "Non-commutative differential geometry," *Publ.
  Math. IHES* 62, 257–360 (cf. Connes 1981 *C.R. Acad. Sci. Paris*
  296 announcement). Cyclic homology and the SBI sequence.
  Originator citation for `04.03.22`. Co-discovered by Tsygan 1983
  *Uspekhi Mat. Nauk* 38.
- **Beilinson-Bernstein-Deligne 1982**, "Faisceaux pervers,"
  *Astérisque* 100. $t$-structures and perverse sheaves. Originator
  citation for `04.03.18` and `04.03.19`.
- **Dold 1958** / **Kan 1958** — independent discoveries of the
  Dold-Kan correspondence. Originator citation for `01.02.35`.
- **Gabriel-Zisman 1967**, *Calculus of Fractions and Homotopy
  Theory* (Springer Ergebnisse 35). Localisation at a multiplicative
  system. Originator citation cross-ref for `04.03.11`.

**Notation crosswalk.** GM-HA follows the Verdier / Grothendieck /
Bourbaki conventions:

- $\mathrm{Ch}(\mathcal{A}), K(\mathcal{A}), D(\mathcal{A})$ — chain
  complexes, homotopy category, derived category. Bounded variants
  $\mathrm{Ch}^+, \mathrm{Ch}^-, \mathrm{Ch}^b$; same for $K, D$.
- $[n]$ — shift functor; $C[n]^k = C^{n+k}$, $d_{C[n]} = (-1)^n d_C$
  (sign convention; specify in `01.02.31`).
- $\mathrm{Cone}(f), \mathrm{Cyl}(f)$ — mapping cone, mapping cylinder
  of a chain map.
- $R F, L F$ — total right/left derived functor.
- $\mathrm{Ext}^n(X, Y) = \mathrm{Hom}_{D(\mathcal{A})}(X, Y[n])$ — Ext
  in derived-category form.
- $\otimes^L, R\mathcal{H}om$ — derived tensor product, derived
  internal Hom.
- $f^*, f_*, f_!, f^!$ — the four functors. $\otimes^L, R\mathcal{H}om$
  are the remaining two of the six.
- $\tau^{\le n}, \tau^{\ge n}$ — truncations.
- $D^{\le 0}, D^{\ge 0}, \mathcal{C} = D^{\le 0} \cap D^{\ge 0}$ —
  $t$-structure and its heart.
- $HH_n, HH^n$ — Hochschild homology, cohomology. $HC_n$ — cyclic
  homology. $B$ — Connes operator. $S$ — periodicity operator.
- $A^e = A \otimes_k A^{\mathrm{op}}$ — enveloping algebra.

Record once in the chapter-opening unit for `04.03.10` (the
triangulated-category README slot). **No notation conflict with the
existing Babel Bible derived-functor unit** (`04.03.06`) — GM-HA's
conventions are the same as Hartshorne, Weibel, and Kashiwara-Schapira.

---

## §5 What this plan does NOT cover

- **A line-number-level inventory of every named theorem and exercise
  in GM-HA** (full P1 audit; deferred until a local PDF is sourced —
  GM-HA is only 222 pp. and a complete inventory is a ~3-day pass
  once the PDF lands, but is gated on acquisition).
- **D-modules and Riemann-Hilbert correspondence.** The booklist row
  3.02 gloss mentions D-modules / Riemann-Hilbert as the scope of the
  Algebra-V volume, but **the EMS *Algebra V* book by Gel'fand-Manin
  does not cover D-modules** — D-modules are the subject of the
  separate **EMS Algebra-VI volume** (Borel et al., *Algebraic
  D-modules*, Springer 1994). D-modules are deferred to a future
  audit, candidate Fast Track slot **3.02b** or a new entry. The
  Riemann-Hilbert correspondence (Kashiwara-Mebkhout 1980, Beilinson-
  Bernstein 1981) would slot naturally next to the perverse-sheaves
  pointer `04.03.19`.
- **Tilting theory at textbook depth.** Mentioned in passing in
  GM-HA; the comprehensive treatment is in Happel *Triangulated
  Categories in the Representation Theory of Finite-Dimensional
  Algebras* (Cambridge LMS Lecture Note Series 119, 1988). Defer to
  a representation-theory-flavoured audit.
- **Operadic / $A_\infty$ / DG-category framings** of homological
  algebra. Outside GM-HA's scope; on the road map for a Keller / Kontsevich
  audit (none yet on Fast Track).
- **$\infty$-categorical reformulation** (Lurie *Higher Algebra*).
  GM-HA predates Lurie; the modern $\infty$-categorical version of
  the entire book is a separate audit (Lurie *HTT* and *HA* are not
  yet Fast Track entries).
- **Beilinson-Bernstein localisation, the Kazhdan-Lusztig conjecture,
  and intersection cohomology** at full proof depth. Pointer unit
  `04.03.19` is the GM-HA-scope entry; the full BBD audit is a
  downstream chapter.
- **Exercise pack at full coverage.** GM-HA has ~50 worked examples
  and ~30 exercises; this plan does not include a per-unit exercise
  pass. Bundle a P3 exercise sweep alongside the Weibel audit (a
  Weibel audit is not yet on the docket; GM-HA exercises share format
  with Weibel exercises).

---

## §6 Acceptance criteria for FT equivalence (GM-HA)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The new sub-chapters `01.02.30-35` (homological-algebra foundations)
  and `04.03.10-22` (derived categories, six functors, Hochschild and
  cyclic) exist with their scaffolding (dependency edges in
  `docs/catalogs/DEPENDENCY_MAP.md`).
- Priority-0 units `01.02.30`–`01.02.33` (chain complex, chain
  homotopy + $K(\mathcal{A})$, mapping cone, abelian category +
  AB1–AB5) have shipped.
- Priority-1 derived-category-track units `04.03.10`–`04.03.19`
  (triangulated category, $D(\mathcal{A})$, $RF$/$LF$, Grothendieck
  spectral sequence, filtered-complex spectral sequence, general
  Leray, six-functor formalism, $\otimes^L$/$\mathrm{Tor}$,
  $t$-structures, perverse pointer) have shipped.
- Priority-1 Hochschild/cyclic units `04.03.20`–`04.03.22` (Hochschild,
  HKR, cyclic + Connes) have shipped.
- ≥95% of GM-HA's named theorems map to Babel Bible units (currently
  ~25%; after the 17 Priority-1 units this rises to ~92%; full ≥95%
  requires the Priority-2 Dold-Kan unit `01.02.35`).
- ≥90% of GM-HA's worked computations have a direct unit or are
  referenced (mapping cone of $\mathbb{Z} \xrightarrow{n} \mathbb{Z}$,
  cohomology of complexes computed from filtrations, Grothendieck
  spectral sequence specialised to Leray, $\mathrm{Tor}^{\mathbb{Z}}_*$
  of cyclic groups, Hochschild homology of polynomial algebras and of
  group algebras, cyclic homology of $k[x]$ and of $C^\infty(M)$,
  Verdier dualising complex on a smooth variety).
- Notation decisions recorded in the `04.03.10` README slot (see §4).
- Pass-W weaving connects the new sub-chapters to existing units:
  - `01.02.11-exact-sequence-snake-lemma` ← `01.02.30 chain complex`
  - `04.03.06-derived-functors-and-ext` ↔ `04.03.12 RF/LF` (sibling
    units, classical and derived-category framings)
  - `04.03.07-higher-direct-images-and-base-change` ← `04.03.13
    Grothendieck spectral sequence` (upgrade master tier with
    explicit Grothendieck-SS proof)
  - `03.04.14-hypercohomology-of-a-complex-of-sheaves` ← `04.03.11
    derived category of sheaves`
  - `03.13.01-spectral-sequence` ↔ `04.03.14 filtered-complex
    spectral sequence` (editorial decision: deepen `03.13.01` or
    ship sibling)
  - `03.13.02-leray-serre` ↔ `04.03.15 general Leray` (sibling
    units, fibration vs sheaf-theoretic framings)
  - `04.08.03-serre-duality` ← `04.03.16 six functors` (upgrade
    master tier with Verdier-duality framing)
  - `04.05.12-pointer-grothendieck-riemann-roch-grr` ← `04.03.16
    six functors` (the natural derived-category home of GRR)
  - `04.10.15-derived-git-and-magic-windows` ← `04.03.20 Hochschild`
    (already references HH in master tier; close the loop)

The 4 Priority-0 + 13 Priority-1 units close most of the equivalence
gap. The Priority-2 Dold-Kan unit closes the residual gap. A
per-unit exercise pass (deferred to a Weibel-joint sweep) hits the
≥95% line.

---

## §7 Sourcing

- **Status: REDUCED.** No local PDF found in the three configured paths
  (`reference/textbooks-extra/`, `reference/fasttrack-texts/`,
  `reference/book-collection/free-downloads/`) as of 2026-05-22.
  Springer link <https://link.springer.com/book/10.1007/978-3-642-57911-5>
  redirects to the Springer IDP authentication wall (303 See Other to
  `idp.springer.com/authorize?…`). The VINITI Russian original
  (Sovremennye Problemy Matematiki, Fund. Napr. Tom 38) is out of
  print; ru-archives may host scans. WebFetch on the Springer book
  page and on the AMS MathSciNet review returned summary metadata but
  not the TOC at line-number granularity. This plan was produced from
  canonical knowledge of GM-HA's five-chapter / two-appendix
  structure (well-documented in review literature — e.g. AMS Bull.
  review by R. Hartshorne 1995; Mathematical Reviews MR1309739; the
  TOC is reproduced in Loday *Cyclic Homology* §1 references and in
  Weibel Ch. 10 references) cross-referenced against the peer
  sources in §1 and against the existing Babel Bible
  derived-functor / sheaf-cohomology / spectral-sequence units
  inventoried in §2.
- **Action item.** Source GM-HA (Springer paid download or Anna's
  Archive) and drop into `reference/textbooks-extra/` as
  `GelfandManin-HomologicalAlgebra-EMS-Algebra-V-1994.pdf`. Required
  before a full P1 audit can run at line-number granularity. Also
  consider sourcing the longer textbook companion *Methods of
  Homological Algebra* (Springer 1996, 2nd ed. 2003) which has more
  proofs and exercises.
- **License.** Springer copyright. For educational use cite as
  Gel'fand, Manin, *Homological Algebra* (Encyclopaedia of
  Mathematical Sciences Vol. 38, Algebra V; Springer-Verlag, 1994;
  English trans. of VINITI Russian original 1989).
- **Local copy target path.** `reference/textbooks-extra/` per pattern
  of other paid FT texts.
- **Companion sources already in / targeted for the reference
  library.**
  - Weibel, *An Introduction to Homological Algebra* — already cited
    as tier-anchor in `01.02.11`, `04.03.06`. Source PDF status:
    check `reference/`.
  - Gel'fand-Manin, *Methods of Homological Algebra* — already cited
    as tier-anchor in `04.03.06`. Source PDF status: check
    `reference/`.
  - Hartshorne, *Residues and Duality* — not yet sourced. Required
    cross-anchor for `04.03.16` (six functors), `04.03.18`
    ($t$-structures only marginally), and downstream Grothendieck-
    duality audits.
  - Kashiwara-Schapira, *Categories and Sheaves* — not yet sourced.
    Required cross-anchor for `04.03.10`–`04.03.17`. **High
    acquisition priority** — this is the modern reference and
    deepens essentially every derived-category-track unit.
  - Loday, *Cyclic Homology* — not yet sourced. Required cross-anchor
    for `04.03.20`–`04.03.22`.
  - Beilinson-Bernstein-Deligne, *Astérisque* 100 — not yet sourced.
    Required cross-anchor for `04.03.18` and `04.03.19`. Available
    open-access via the Société Mathématique de France's NUMDAM-
    adjacent Astérisque archive (CC-BY for older volumes — check).
  - Verdier, *Astérisque* 239 (1996 publication of 1967 thesis) —
    not yet sourced. The original derived-categories source;
    cross-anchor for `04.03.10`, `04.03.11`, `04.03.12`.
  - Gabriel-Zisman, *Calculus of Fractions and Homotopy Theory* —
    not yet sourced. Cross-anchor for `04.03.11` (localisation
    construction).
  - Godement, *Topologie algébrique et théorie des faisceaux* (Hermann
    1958) — not yet sourced. Cross-anchor for `04.03.15` (the
    original Godement-resolution construction of sheaf cohomology).
  - Connes, *Publ. Math. IHES* 62 (1985) — open-access via NUMDAM.
    Cross-anchor for `04.03.22`.

---

## §8 Coordination notes (overlap dedup)

The GM-HA audit identifies **strong overlap** with the following
existing audits and shipped units:

- **`01.02.11-exact-sequence-snake-lemma`** (already shipped, Weibel-
  anchored): snake lemma and five-lemma covered. **No new GM-HA unit;
  reuse.**
- **`03.12.22-delta--complex-semi-simplicial-set`,
  `03.12.25-simplicial-sets-and-geometric-realization`** (already
  shipped, Goerss-Jardine / May-anchored): GM-HA Ch. I simplicial
  primer covered. **No new GM-HA units in Ch. I scope** except the
  Priority-2 Dold-Kan unit `01.02.35`.
- **`04.03.01-sheaf-cohomology`**, **`04.03.03-cech-schemes`**,
  **`04.03.04-cohomology-projective`**, **`04.03.05-serre-s-vanishing-and-finiteness-theorems`** (already shipped, Hartshorne-anchored):
  GM-HA Ch. IV opening covered for the algebraic-geometry case.
  **No new units; the new GM-HA Ch. IV unit is `04.03.15` general
  Leray** which is the topological-spaces parallel to the
  scheme-flavoured `04.03.07`.
- **`04.03.06-derived-functors-and-ext`** (already shipped, Hartshorne /
  Weibel / Gel'fand-Manin-anchored): classical $R^iF$ via injective
  resolutions covered, with derived-category framing in master tier.
  GM-HA unit **`04.03.12 RF/LF in derived categories`** is the sibling
  — both ship; `04.03.06` keeps its classical framing as the
  Beginner/Intermediate-friendly entry, `04.03.12` is the
  derived-category-first reformulation.
- **`04.03.07-higher-direct-images-and-base-change`** (already
  shipped): the scheme-theoretic $R^if_*$ covered. GM-HA unit
  **`04.03.13 Grothendieck spectral sequence`** is the *general*
  statement that specialises to this; **deepen `04.03.07` master
  tier** to cite the Grothendieck-SS framework explicitly once
  `04.03.13` ships.
- **`03.13.01-spectral-sequence`** (already shipped, Bott-Tu / McCleary
  anchored): exact-couple framing covered. GM-HA unit **`04.03.14`
  filtered-complex spectral sequence** is the sibling — editorial
  decision: ship `04.03.14` as a sibling unit OR deepen `03.13.01`
  master tier with the filtered-complex construction. *Recommendation:
  ship sibling; the two framings are co-equal and each is best
  presented in its native register.*
- **`03.13.02-leray-serre`** (already shipped): the fibration form
  of Leray-Serre covered. GM-HA unit **`04.03.15` general Leray** is
  the sibling — the sheaf-theoretic form on a general continuous
  map. Both ship.
- **`03.04.14-hypercohomology-of-a-complex-of-sheaves`** (already
  shipped): hypercohomology covered. GM-HA unit **`04.03.11`
  derived category** is the framework in which hypercohomology
  becomes $H^n(R\Gamma(\mathcal{F}^\bullet))$ — deepen
  `03.04.14` master tier to cite this once `04.03.11` ships.
- **`04.08.03-serre-duality`** (already shipped): Serre duality on
  curves and projective varieties covered. GM-HA unit **`04.03.16`
  six-functor formalism** subsumes this in the Verdier-duality
  framing — deepen `04.08.03` master tier to add the $f^!$ picture
  once `04.03.16` ships.

**Net effect.** GM-HA adds **18 new units** (17 P0+P1 + 1 P2) and
**deepens 4 existing units** in their master tiers. The combined
punch-list for the new sub-chapters `01.02.30-35` and `04.03.10-22` is
**18 units**, not the 20+ a naive count would suggest. **Strong dedup
discipline required**: GM-HA's pedagogical contribution is the
unification of these results into a derived-category-first narrative;
the punch-list reflects the **gaps in the derived-category track**,
not the classical material already covered by Weibel-anchored units.

A future **Kashiwara-Schapira audit** (not yet on Fast Track) would
deepen `04.03.10-19` further with the modern $\infty$-categorical hints
and exhaustive proof depth; GM-HA-tier coverage is the prerequisite.
A future **Hartshorne RD audit** (also not yet on Fast Track) would
deepen `04.03.16` (six functors) to full Grothendieck-duality proof
depth.
