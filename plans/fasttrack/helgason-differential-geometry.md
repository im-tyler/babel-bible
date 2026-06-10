# Helgason — *Differential Geometry, Lie Groups, and Symmetric Spaces* (Fast Track 3.17) — Audit + Gap Plan

**Book:** Sigurdur Helgason, *Differential Geometry, Lie Groups, and Symmetric
Spaces* (Academic Press 1978; corrected reprint as AMS Graduate Studies in
Mathematics 34, American Mathematical Society 2001, xxvi + 641 pp.,
ISBN 0-8218-2848-7). The canonical reference for symmetric-space theory;
commercial title (BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.17).

**Fast Track entry:** 3.17. Helgason hereafter = **DGLGSS** (the AMS catalog
abbreviation; Helgason himself titles his three-volume programme by this
acronym + GTM 113 *Groups and Geometric Analysis* + AMS 39 *Geometric
Analysis on Symmetric Spaces*). DGLGSS is the **structure-theoretic** volume:
Riemannian symmetric spaces $M = G/K$, Cartan decomposition
$\mathfrak{g} = \mathfrak{k} \oplus \mathfrak{p}$, the duality between compact
and non-compact types, real forms of complex semisimple Lie algebras, root
systems with multiplicities (Satake / Tits diagrams), Iwasawa decomposition
$G = KAN$, restricted-root data, and the first cut of spherical-function
theory. The harmonic-analysis half (Plancherel, Paley-Wiener, horocycle
transform, eigenfunctions of the Laplace-Beltrami operator) is deferred to
GTM 113.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units to write so that DGLGSS is covered to the equivalence threshold
(≥95% effective coverage of theorems, key examples, exercise pack, notation,
sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit.** No local PDF in `reference/textbooks-extra/` (only Lang,
Apostol, Courant, Ahlfors, Donaldson, Mackenzie, Landau-Lifshitz volumes are
present). AMS title; not author-hosted; not in Anna's Archive surface mirror.
This audit works from (a) the **public TOC structure** of AMS GSM 34
(well-documented, table of contents stable across the 1978 and 2001 editions
except for added errata + Helgason's own "Solutions to Exercises" appendix
folded in for the 2001 reprint), (b) the Babel Bible's existing 26 shipped units of
`content/07-representation-theory/` plus 3 shipped Lie-group units of
`content/03-modern-geometry/03-lie/`, and (c) the originator literature
(Cartan 1926–27, Iwasawa 1949, Harish-Chandra 1953–68). A full line-number
audit is deferred until a PDF is acquired. **Promote to full P1 audit when
PDF is local.** This is consistent with the audit-stub convention used for
Fulton-Harris (FT 3.11) and Brown-Higgins-Sivera (FT 1.05a).

---

## §1 What DGLGSS is for

DGLGSS is the **definitive structure-theoretic treatment of Riemannian
symmetric spaces** — the class of homogeneous spaces $M = G/K$ where $K$ is
the fixed-point set of an involution $\sigma$ of $G$, and equivalently the
class of Riemannian manifolds in which every point is the isolated fixed
point of an isometric involution (the *geodesic symmetry*). Where Knapp's
*Lie Groups Beyond an Introduction* (FT 3.10-adjacent) gives the structural
theory of real semisimple Lie groups from the bottom up and Bump's *Lie
Groups* gives the application-driven survey, Helgason **organises the entire
edifice around the symmetric-space classification** and the geometric
realisations $G/K$. The book is simultaneously the canonical reference for:

1. **The Cartan classification of (irreducible) Riemannian symmetric spaces.**
   Cartan's 1926–27 papers in *Bull. Soc. Math. France* and *Math.
   Annalen* identified the four classes (I: non-compact non-Hermitian, II:
   compact non-Hermitian, III: non-compact Hermitian, IV: compact Hermitian)
   and produced the eleven infinite families + twelve exceptional
   spaces. DGLGSS Chapter X reproduces this classification with corrected
   notation and modern proofs. **This is the load-bearing chapter** —
   without it, references in physics (Kaluza-Klein, GUTs) and probability
   (de Finetti / random matrix theory) lose their organising principle.

2. **Cartan decomposition $\mathfrak{g} = \mathfrak{k} \oplus \mathfrak{p}$.**
   For $G$ semisimple real with Cartan involution $\theta$, the
   $\pm 1$-eigenspace decomposition of $\theta$ on $\mathfrak{g}$. The
   pair $(\mathfrak{g}, \mathfrak{k})$ is an **orthogonal symmetric Lie
   algebra**; the bracket relations $[\mathfrak{k}, \mathfrak{k}] \subseteq
   \mathfrak{k}$, $[\mathfrak{k}, \mathfrak{p}] \subseteq \mathfrak{p}$,
   $[\mathfrak{p}, \mathfrak{p}] \subseteq \mathfrak{k}$ are the algebraic
   shadow of the geodesic-symmetry involution. DGLGSS Chapters IV–V.

3. **Real forms of a complex semisimple Lie algebra.** Compact form,
   split (normal) form, and the intermediate real forms classified by
   Cartan involutions modulo conjugation. The compact-non-compact duality
   $G_u / K \leftrightarrow G / K$ where $G_u$ is the compact dual.
   DGLGSS Chapter III gives the Cartan / Weyl proof of the existence of a
   compact real form. **Originator citation: Weyl 1925–26, Cartan 1914
   and 1929 (real-form classification), Wigner 1939 (physics application).**

4. **Iwasawa decomposition $G = KAN$.** Every connected semisimple real
   Lie group factors as the product of its maximal compact $K$, a maximal
   $\mathbb{R}$-split torus $A$ in $\exp \mathfrak{p}$, and a unipotent
   radical $N$ of a minimal parabolic. DGLGSS Chapter VI. **Originator
   citation: Iwasawa 1949** ("On some types of topological groups,"
   *Ann. of Math.* 50). The Iwasawa decomposition is the algebraic backbone
   for harmonic analysis on $G/K$ (horocycle coordinates) and is the
   primary structural input to the Langlands programme. Restricted roots
   $\Sigma \subset \mathfrak{a}^*$ with **multiplicities** $m_\alpha$ (the
   relative root system) appear here; these multiplicities are the data
   distinguishing the real forms beyond the Dynkin diagram alone.

5. **Spherical functions and the first cut of harmonic analysis on $G/K$.**
   DGLGSS Chapters IV §§5–6 and Chapter X §§3–4: $K$-bi-invariant
   eigenfunctions of the algebra of $G$-invariant differential operators
   on $G/K$; the Harish-Chandra integral formula
   $\varphi_\lambda(g) = \int_K e^{(i\lambda - \rho)(H(gk))} \, dk$;
   $c$-function and the rank-one Plancherel formula sketch. **Originator
   citation: Harish-Chandra 1953–68** ("Spherical functions on a
   semisimple Lie group I, II," *Amer. J. Math.* 80, 1958). The deep
   Plancherel theorem and Paley-Wiener theorem are pushed to GTM 113.

6. **Tools chapters.** Chapters I–II cover the prerequisites at
   Helgason's depth: differentiable manifolds, affine connections,
   Riemannian connections, geodesics, exponential map, completeness
   (Hopf-Rinow), Lie groups, Lie algebras, the adjoint representation,
   the Killing form, semisimplicity (Cartan's criterion). Chapter III
   covers semisimple Lie algebras and root-space decomposition over
   $\mathbb{C}$ as a **structural prerequisite to real forms** — i.e.,
   reproves Fulton-Harris Part IV but with the real-form motivation
   already in view.

DGLGSS is **not** the place to learn algebraic topology of Lie groups
(Mimura-Toda is canonical), is **not** the place for the abstract
representation theory of semisimple Lie groups (Knapp *Representation
Theory of Semisimple Groups* and Wallach *Real Reductive Groups* cover
that), and is **not** the place for deep harmonic analysis (Plancherel
formula proofs, wave-packet techniques, Eisenstein series) — that
material lives in the sequel GTM 113 *Groups and Geometric Analysis* and
in AMS 39 *Geometric Analysis on Symmetric Spaces*. DGLGSS also makes a
deliberate choice to develop the theory **Lie-algebraically with Riemannian
input as needed**, rather than the alternative "submanifold-of-$\mathrm{GL}_n$"
matrix-Lie-group approach (Hall, Onishchik). Readers wanting the matrix-explicit
view of $\mathrm{SU}(p, q) / \mathrm{S}(\mathrm{U}(p) \times \mathrm{U}(q))$ etc.
should pair DGLGSS with Goodman-Wallach or Onishchik-Vinberg.

**Cited peer sources (≥3, per stub spec):**

- A. W. Knapp, *Lie Groups Beyond an Introduction* (Birkhäuser 2nd ed.
  2002, ISBN 0-8176-4259-5). The closest modern competitor. Knapp covers
  the same real-form / Iwasawa / Cartan-decomposition core but **orders
  the material structurally (real Lie groups first, symmetric spaces as
  application)** rather than Helgason's geometric ordering (manifolds
  first, real-form structure as the route to symmetric spaces). Knapp
  also gives a more polished proof of the Iwasawa decomposition.
- A. L. Onishchik, E. B. Vinberg, *Lie Groups and Algebraic Groups*
  (Springer 1990; translation of Russian 1988 edition). The
  Russian-school complement: maximally matrix-explicit treatment of the
  classical groups and their real forms, with the symmetric-space data
  (Satake diagrams, Tits indices) tabulated for all real forms of all
  simple Lie algebras. Cited in DGLGSS Chapter X as the source for the
  classification tables. **Helgason and Onishchik-Vinberg are
  complementary — Helgason proves; Onishchik-Vinberg tabulates.**
- R. Goodman, N. R. Wallach, *Symmetry, Representations, and Invariants*
  (Springer GTM 255, 2009, ISBN 978-0-387-79851-6). The modern
  invariant-theoretic / matrix-explicit synthesis. Covers DGLGSS
  Chapters III–VI material with classical-invariants applications
  (highest weights, branching rules, Schur-Weyl-Brauer dualities)
  woven through. The Goodman-Wallach symmetric-pair material is
  much shorter than Helgason but is the natural entry point for a
  reader who has shipped the FH (3.11) Babel Bible units and wants the
  real-form extension before tackling Helgason directly.
- R. Carter, G. Segal, I. Macdonald, *Lectures on Lie Groups and Lie
  Algebras* (LMS Student Texts 32, Cambridge 1995, ISBN
  0-521-49922-7). Three short lecture series (Carter on finite groups
  of Lie type, Macdonald on Lie algebras, Segal on Lie groups). Segal's
  lecture series in particular is the cleanest 60-page introduction to
  the compact-real-form / Cartan-involution story and is recommended in
  DGLGSS preface as a "lightweight orientation."
- E. P. van den Ban, M. Flensted-Jensen, H. Schlichtkrull, *survey
  articles on spherical functions and the Plancherel theorem* (various
  *Acta Math.*, *Invent. Math.*; 1980s–2000s). Master-tier references
  for the spherical-function side of DGLGSS Chapter IV §§5–6 and the
  continuation into GTM 113.

---

## §2 Coverage table (Babel Bible vs DGLGSS)

Cross-referenced against the current shipped units of
`content/07-representation-theory/` (26 units across 7 subdirs),
`content/03-modern-geometry/03-lie/` (3 units), and adjacent strands
relevant for symmetric-space prerequisites
(`content/03-modern-geometry/02-manifolds/`).
✓ = covered, △ = partial / different framing / coverage in a unit body
but not the explicit DGLGSS treatment, ✗ = not covered.

| DGLGSS topic (chapter:section) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Differentiable manifolds, tangent vectors, vector fields (I §§1–3) | `03.02.*` manifolds strand | ✓ | Standard manifold material. |
| Tensor fields, exterior algebra (I §§5–7) | `03.01.*` tensor-algebra + `03.04.*` differential-forms | ✓ | |
| Affine connection, parallel transport (I §§8–10) | TBD in `03.02-manifolds/` (or 03.04) | △ | Codex has Riemannian + Levi-Civita pieces but a standalone "affine connection" unit may need a dedicated check. **Gap (low — prereq, may already be in 03.02).** |
| Riemannian metric, Riemannian connection, geodesics (I §§11–14) | TBD | △ | Likely partial; verify against `03-modern-geometry/02-manifolds/` once PDF is local. |
| Exponential map of a manifold, normal coordinates (I §§15) | TBD | △ | Pre-Lie-group exp map; verify against shipped units. |
| Hopf-Rinow completeness (I §§16) | — | ✗ | **Gap (low).** Foundational Riemannian-geometry theorem; not currently a Babel Bible unit. Pre-requisite for symmetric-space global structure. |
| Lie group, Lie algebra of a Lie group (II §§1–2) | `03.03.01` lie-group | ✓ | Direct correspondent. |
| Exponential map of a Lie group, Baker-Campbell-Hausdorff (II §§3–5) | — | △ | **Gap (medium).** No dedicated Lie-group-exp / BCH unit. Touched in passing in `03.03.01`. Candidate: `48.03.04` lie-group-exponential-map (with BCH master-tier extension). |
| Adjoint representation, $\mathrm{Ad}$ and $\mathrm{ad}$ (II §§5) | — | △ | **Gap (low).** Referenced inside `07.06.*` but not a standalone unit; folds into `48.03.04` or a new `48.03.05`. |
| Killing form, semisimplicity, Cartan's criterion (II §§6, III §§1) | — (referenced in `07.06.03` root-system master) | △ | **Gap (medium).** Killing form has no dedicated unit despite being load-bearing for every classification result. Candidate: `07.06.10` killing-form-and-cartan-criterion. |
| Semisimple Lie algebras over $\mathbb{C}$, root-space decomposition (III §§4–5) | `07.06.03 root-system`, `07.06.04 weyl-group`, `07.06.05 dynkin-diagram`, `07.04.01 cartan-weyl-classification` | ✓ | Codex covers the complex-semisimple case via the FH route. |
| Compact real form of a complex semisimple Lie algebra (III §§6–7) | — | ✗ | **Gap (high).** Foundational: every complex semisimple Lie algebra has a compact real form unique up to conjugation. **Originator: Weyl 1925.** Candidate: `07.04.02` compact-real-form. |
| Cartan involution $\theta$ on a real semisimple Lie algebra (III §§7, V §§1) | — | ✗ | **Gap (very high — load-bearing).** No Babel Bible unit. Candidate: `07.04.03` cartan-involution. |
| Cartan decomposition $\mathfrak{g} = \mathfrak{k} \oplus \mathfrak{p}$ (V §§1) | — | ✗ | **Gap (very high — the central algebraic object).** Candidate: `07.04.04` cartan-decomposition. |
| Real forms of a complex semisimple Lie algebra; Cartan classification (III §§7, X §§6) | △ (mentioned in `07.04.01` as "Cartan-Weyl" but real forms not explicit) | △→✗ | **Gap (very high).** `07.04.01` covers the complex classification; the real-form classification (compact, split, intermediate) is absent. Candidate: `07.04.05` real-forms-classification. |
| Orthogonal symmetric Lie algebra (IV §§1) | — | ✗ | **Gap (high).** The algebraic abstraction Helgason works with throughout. Candidate: `07.04.06` orthogonal-symmetric-lie-algebra. |
| Riemannian symmetric space (IV §§3) | — | ✗ | **Gap (very high — the namesake object).** Definition via geodesic symmetry $s_p$ at each point; equivalence with $G/K$ for $(\mathfrak{g}, \mathfrak{k})$ orthogonal symmetric. Candidate: `03.02.0X` riemannian-symmetric-space (lives in modern-geometry/02-manifolds adjacent OR in rep-theory; **decision needed — likely 07-representation-theory/08-symmetric-space/** new subdir). |
| The four types of irreducible symmetric spaces (compact / non-compact / Hermitian / non-Hermitian) (IV §§3, X) | — | ✗ | **Gap (high).** Candidate: §Master of `07.04.05` real-forms-classification or its own unit `07.04.07` four-types-of-symmetric-spaces. |
| Compact / non-compact duality $G_u/K \leftrightarrow G/K$ (V §§2) | — | ✗ | **Gap (high).** Candidate: §Master extension of `07.04.04` cartan-decomposition. |
| Curvature of $G/K$, sectional curvature signs by type (V §§3) | — | ✗ | **Gap (medium).** Type I/III have non-positive curvature; type II/IV have non-negative curvature. Candidate: §Master extension to the riemannian-symmetric-space unit. |
| Totally geodesic submanifolds; Lie triple system (IV §§7) | — | ✗ | **Gap (low — Master deepening).** |
| Restricted roots, $\Sigma \subset \mathfrak{a}^*$, multiplicities $m_\alpha$ (VI §§3) | — | ✗ | **Gap (high).** The data refining the complex root system into real-form invariants. Candidate: `07.04.08` restricted-root-system. |
| Satake / Tits diagram of a real form (X §§3–4) | — | ✗ | **Gap (medium).** The combinatorial classification table. Candidate: §Master extension of `07.04.05`. |
| Iwasawa decomposition $G = KAN$ (VI §§3) | — | ✗ | **Gap (very high).** **Originator: Iwasawa 1949.** Candidate: `07.04.09` iwasawa-decomposition. |
| $KAK$ decomposition (Cartan / polar decomposition); $A_+$ as a fundamental domain (IX §§1) | — | ✗ | **Gap (medium).** Candidate: §Master extension of `07.04.09`. |
| Bruhat decomposition (IX §§1) | — | ✗ | **Gap (medium).** Candidate: §Master extension of `07.04.09` or new `07.04.10` bruhat-decomposition (decision later). |
| Minimal / standard parabolic subgroup (VI §§3, IX) | — | ✗ | **Gap (medium).** Parabolic-subgroup machinery; folds with Iwasawa. |
| Algebra of $G$-invariant differential operators $\mathbb{D}(G/K)$ (IV §§5) | — | ✗ | **Gap (medium).** Helgason's central tool for harmonic analysis. Candidate: `07.04.11` invariant-differential-operators. |
| Spherical function $\varphi_\lambda$ (IV §§5–6) | — | ✗ | **Gap (high).** **Originator: Harish-Chandra 1953–58.** Candidate: `07.04.12` spherical-function. |
| Harish-Chandra integral formula $\varphi_\lambda(g) = \int_K e^{(i\lambda-\rho)(H(gk))}\, dk$ (IV §§5) | — | ✗ | **Gap (medium).** Folds into `07.04.12` spherical-function. |
| Plancherel formula on $G/K$ (sketch) (IV §§7) | — | ✗ | **Gap (low for DGLGSS — explicitly deferred to GTM 113).** Pointer-only candidate. |
| Symmetric spaces of compact type: classical examples (Grassmannians, Lagrangian Grassmannians, $\mathrm{SU}(n)/\mathrm{SO}(n)$, etc.) (X) | △ (Grassmannians referenced in `07.04.01`) | △ | **Gap (medium).** The 11 infinite families need a tabular pointer unit. Candidate: §Master extension or `07.04.13` classification-tables. |
| Hermitian symmetric spaces; Borel embedding; bounded symmetric domains (VIII) | — | ✗ | **Gap (medium).** A whole DGLGSS chapter; Hermitian type intersects complex geometry. Candidate: `07.04.14` hermitian-symmetric-space (or defer to a later DGLGSS+Helgason-GTM-113 pass). |

**Aggregate coverage estimate (REDUCED audit basis).**
- **Chapter I–II (manifolds, Lie groups foundations):** ~60% covered.
  Codex has manifolds, Lie group definition, Lie algebra. Gaps are
  Hopf-Rinow, BCH formula, adjoint-action standalone unit, and the
  Riemannian-geometry prerequisites at Helgason's depth.
- **Chapter III (complex semisimple Lie algebras, root systems, compact
  real form):** ~70% covered for the complex side via existing
  `07.06.03–07.06.05` and `07.04.01`; the compact-real-form half is **a
  total gap (0%)**.
- **Chapter IV–V (orthogonal symmetric Lie algebras, Riemannian
  symmetric spaces, Cartan decomposition, duality):** **~0% covered.**
  This is the book's load-bearing core and is a complete gap in the
  Babel Bible.
- **Chapter VI (Iwasawa, restricted roots):** **~0% covered.**
- **Chapter VIII (Hermitian symmetric spaces, bounded domains):**
  **~0% covered.**
- **Chapter IX (decompositions and integration):** **~0% covered.**
- **Chapter X (classification tables):** **~0% covered.** (`07.04.01`
  states the complex classification; real-form classification is the
  missing half.)
- **Spherical functions (IV §§5–6, X §§3–4):** **~0% covered.**

**Overall: ~15–20% of DGLGSS covered by existing Babel Bible units, almost all
of that being the Chapter III complex-Lie-algebra prerequisites that
Codex already ships via the FH (3.11) route.** The symmetric-space half
of DGLGSS (chapters IV–X, the namesake material) is **a complete gap**.
This is unsurprising — the Babel Bible has shipped the FH "complex
classification" units and the Hall-/Knapp-flavoured Lie-group-as-manifold
units, but has not yet entered the real-form / symmetric-space sector
at all. **The gap closure is new-unit-heavy, not deepening-heavy**, the
inverse pattern from the FH audit.

---

## §3 Gap punch-list (priority-ordered)

**Priority 0 — prerequisites that should ship from other plans before
the priority-1 DGLGSS units begin:**

- `03.02.0X` Hopf-Rinow theorem (Riemannian completeness; lives in
  manifolds strand). Probably 1 hour.
- `48.03.04` Lie-group exponential map + BCH (master tier). Probably
  3 hours. May already be covered as a §Master extension of
  `03.03.01 lie-group`; verify.
- `07.06.10` Killing form and Cartan's semisimplicity criterion.
  Likely a 1500-word unit. Three-tier. ~2 hours.

These three are **shared prereqs** that should be coordinated with the
Knapp audit (when written), the Kobayashi-Nomizu Vol 1 audit (already
exists as `kobayashi-nomizu-foundations-vol1.md`), and the Woit audit.

**Priority 1 — high-leverage, captures DGLGSS's central content (the
symmetric-space classification + Iwasawa decomposition):**

1. **`07.04.02` Compact real form of a complex semisimple Lie algebra.**
   Statement of the theorem (every complex semisimple Lie algebra has a
   compact real form, unique up to conjugation), Weyl's "unitary trick,"
   construction via the Chevalley involution. Three-tier; master tier
   includes Weyl 1925 originator prose. ~1500 words. **Foundational —
   the gateway to all real-form theory.** ~3 hours.

2. **`07.04.03` Cartan involution.** Definition $\theta \colon \mathfrak{g}
   \to \mathfrak{g}$, $\theta^2 = \mathrm{id}$, $-B_\theta(X, Y) = -B(X, \theta Y)$
   positive-definite (where $B$ is the Killing form). Existence and
   uniqueness up to inner automorphism. Three-tier; ~1500 words. **High —
   the algebraic object that bridges the complex and real-form theories.**
   ~3 hours.

3. **`07.04.04` Cartan decomposition $\mathfrak{g} = \mathfrak{k} \oplus
   \mathfrak{p}$.** $\pm 1$-eigenspaces of $\theta$; bracket relations
   $[\mathfrak{k}, \mathfrak{k}] \subseteq \mathfrak{k}$,
   $[\mathfrak{k}, \mathfrak{p}] \subseteq \mathfrak{p}$,
   $[\mathfrak{p}, \mathfrak{p}] \subseteq \mathfrak{k}$. Group-level
   counterpart $G = K \cdot \exp \mathfrak{p}$ (Cartan decomposition of
   the group). Three-tier; ~2000 words. Master tier sketches the
   compact-non-compact duality. **Very high — the central algebraic
   object of DGLGSS.** ~4 hours.

4. **`07.04.05` Real forms of a complex semisimple Lie algebra
   (Cartan's classification).** Statement of the classification:
   real forms of $\mathfrak{g}_\mathbb{C}$ are in bijection with
   conjugacy classes of Cartan involutions, which in turn correspond
   to certain involutions of the Dynkin diagram (the **Satake / Tits
   diagram** data). Compact form, split (normal) form, and intermediate
   forms. Three-tier; ~2500 words. Master tier reproduces Cartan's
   classification tables for $A_n, B_n, C_n, D_n, G_2, F_4, E_6, E_7,
   E_8$. **Very high.** ~4–5 hours.

5. **`07.04.06` Orthogonal symmetric Lie algebra.** Definition: a pair
   $(\mathfrak{g}, s)$ where $s$ is an involutive automorphism and the
   bilinear form $B + B \circ s$ is non-degenerate. The four classes
   (Euclidean, compact, non-compact, "of $\mathbb{R}$-type"). Bridge
   from the algebraic side to the geometric side. Three-tier; ~1500
   words. **High — gateway to symmetric spaces.** ~3 hours.

6. **`07.04.07` Riemannian symmetric space.** Geometric definition:
   a Riemannian manifold $M$ such that at every $p \in M$ there is an
   isometric involution $s_p$ with $p$ as an isolated fixed point.
   Equivalence with $G/K$ for $(\mathfrak{g}, \mathfrak{k})$ an
   orthogonal symmetric Lie algebra of compact, non-compact, or
   Euclidean type. Curvature signs by type. Three-tier; ~2500 words.
   Master tier includes worked examples: spheres $S^n =
   \mathrm{SO}(n+1)/\mathrm{SO}(n)$, hyperbolic space $H^n =
   \mathrm{SO}_0(n,1)/\mathrm{SO}(n)$, complex projective space
   $\mathbb{CP}^n = \mathrm{SU}(n+1)/\mathrm{S}(\mathrm{U}(n)\times\mathrm{U}(1))$,
   Grassmannian $\mathrm{Gr}_k(\mathbb{R}^n) =
   \mathrm{SO}(n)/(\mathrm{SO}(k)\times\mathrm{SO}(n-k))$.
   **Very high — the namesake unit.** ~5 hours.

7. **`07.04.09` Iwasawa decomposition $G = KAN$.** Statement, proof
   sketch via Iwasawa's 1949 argument (or modern proof via Lie-algebra
   Iwasawa $\mathfrak{g} = \mathfrak{k} \oplus \mathfrak{a} \oplus
   \mathfrak{n}$ and exponentiation), uniqueness of decomposition,
   global diffeomorphism $K \times A \times N \to G$. Three-tier;
   ~2000 words. Master tier includes the restricted-root data
   $\Sigma \subset \mathfrak{a}^*$ with multiplicities. **Very high —
   the structural cornerstone for everything past Chapter VI.** ~4 hours.

**Priority 2 — fills medium-priority DGLGSS content with new units:**

8. **`07.04.08` Restricted root system.** $\Sigma = \{\alpha \in
   \mathfrak{a}^* \setminus \{0\} : \mathfrak{g}_\alpha \neq 0\}$
   where $\mathfrak{g}_\alpha$ is the $\alpha$-restricted-root space
   under $\mathrm{ad}(\mathfrak{a})$. Multiplicities $m_\alpha = \dim
   \mathfrak{g}_\alpha$. Non-reduced root systems ($BC_n$) appear here
   even when the complex root system is reduced. Three-tier; ~1500
   words. **Medium-high.** ~3 hours.

9. **`07.04.10` Bruhat decomposition.** $G = \sqcup_{w \in W} B w B$
   for $B = MAN$ a minimal parabolic, $W = W(\mathfrak{g}, \mathfrak{a})$
   the restricted Weyl group. The big-cell open dense Bruhat cell.
   Three-tier; ~1500 words. **Medium.** ~3 hours.

10. **`07.04.11` Algebra of $G$-invariant differential operators
    $\mathbb{D}(G/K)$.** Definition, commutativity (the Helgason-Harish-Chandra
    theorem), characterisation as polynomials on $\mathfrak{a}^*$
    invariant under the restricted Weyl group $W$. Intermediate + Master.
    ~1500 words. **Medium.** ~3 hours.

11. **`07.04.12` Spherical function $\varphi_\lambda$ on $G/K$.**
    Definition as the unique $K$-bi-invariant joint eigenfunction of
    $\mathbb{D}(G/K)$ with eigenvalue determined by $\lambda \in
    \mathfrak{a}_\mathbb{C}^*$, normalised by $\varphi_\lambda(e) = 1$.
    Harish-Chandra integral formula. Statement of the rank-one
    Plancherel sketch; deeper analysis deferred to GTM 113. Three-tier;
    ~2500 words. Master tier carries Harish-Chandra 1953–58
    originator-prose. **High.** ~4 hours.

12. **`07.04.13` Classification tables for irreducible Riemannian
    symmetric spaces.** Reference / lookup unit. The four classes
    (compact non-Hermitian, non-compact non-Hermitian, compact
    Hermitian, non-compact Hermitian) and the explicit tables: the
    11 infinite families ($\mathrm{AI}, \mathrm{AII}, \mathrm{AIII}$;
    $\mathrm{BDI}, \mathrm{DIII}$; $\mathrm{CI}, \mathrm{CII}$; etc.)
    + the 12 exceptional spaces. Cartan's original labelling.
    Intermediate + Master. ~1500 words; predominantly tabular.
    **Medium — high reference value, low explanatory value.** ~3 hours.

**Priority 3 — Master-tier deepenings and pointer units:**

13. **§Master extension of `07.04.04`: compact / non-compact duality
    $G_u/K \leftrightarrow G/K$ and worked examples.** ~500 words added.

14. **§Master extension of `07.04.07`: curvature of $G/K$, sectional
    curvature signs by type (non-positive for non-compact, non-negative
    for compact).** ~500 words added. **Useful cross-link to physics
    strand (Kaluza-Klein compactifications, sigma models).**

15. **§Master extension of `07.04.09`: $KAK$ decomposition / polar
    decomposition, $A_+$ as a fundamental domain for $K$-bi-invariant
    functions.** ~400 words added.

16. **`07.04.14` Hermitian symmetric space (pointer unit).** Brief
    definition: a Riemannian symmetric space with a $G$-invariant
    complex structure compatible with the metric. Borel embedding into
    its compact dual; bounded-symmetric-domain realisation
    (Harish-Chandra 1956). Pointer to deeper material in Knapp / Wolf
    *Spaces of Constant Curvature*. ~1200 words; master tier only.
    **Medium-low — important for physics-bridge (string theory moduli
    spaces, Calabi-Yau, etc.) but not strictly required for FT
    equivalence on DGLGSS.** ~2 hours.

17. **§Master extension of `07.04.07`: Lie triple system and totally
    geodesic submanifolds.** ~400 words added.

**Priority 4 — survey / exercise pack follow-ups (optional):**

18. **Exercise pack: explicit Iwasawa decomposition of
    $\mathrm{SL}_2(\mathbb{R})$ ($K = \mathrm{SO}(2)$, $A$ = positive
    diagonals, $N$ = upper unitriangulars), of $\mathrm{SL}_n(\mathbb{R})$
    (full Gram-Schmidt), and of $\mathrm{SU}(n,1)$.** Fold into
    `07.04.09` exercise set.

19. **Exercise pack: compute restricted root systems for
    $\mathrm{SU}(p, q)$, $\mathrm{SO}_0(p, q)$, $\mathrm{Sp}(p, q)$,
    $\mathrm{Sp}_n(\mathbb{R})$.** Fold into `07.04.08`.

20. **Pointer to physics strand: Cartan's classification of
    symmetric spaces underlies Altland-Zirnbauer's tenfold classification
    of topological insulators / random matrix universality classes.**
    ~300 words; Master section in `07.04.13` or new unit in physics
    strand.

---

## §4 Implementation sketch (P3 → P4)

**Realistic production estimate** (mirroring earlier audits — Brown-Higgins-Sivera,
Lawson-Michelsohn, Bott-Tu, Fulton-Harris):

- **Priority 0 prereqs** (3 prereq units / extensions): ~6 hours.
- **Priority 1** (7 new units): ~3.5–5 hours each = **~26–28 hours.**
  `07.04.02 compact-real-form`, `07.04.03 cartan-involution`,
  `07.04.04 cartan-decomposition`, `07.04.05 real-forms-classification`,
  `07.04.06 orthogonal-symmetric-lie-algebra`,
  `07.04.07 riemannian-symmetric-space`,
  `07.04.09 iwasawa-decomposition`.
- **Priority 2** (5 new units): ~3.5 hours each = **~17 hours.**
- **Priority 3** (4 master deepenings + 1 pointer unit): ~1 hour each
  for deepenings + 2 hours for pointer = **~6 hours.**
- **Priority 4** (exercise packs + physics pointer): ~3 hours.

**Total: ~58–60 hours of focused production for full FT-equivalence
coverage of DGLGSS.** Fits an 8–10 day window. Priority 1 alone (~26
hours, ~3.5 days) raises effective coverage from ~15% to ~65% and closes
the namesake-material gap.

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, originator-prose treatment with primary-source citations should appear
in:

- **Cartan 1926–27** — Élie Cartan, "Sur une classe remarquable d'espaces
  de Riemann," *Bull. Soc. Math. France* 54 (1926) 214–264 and 55 (1927)
  114–134; and "La géométrie des groupes de transformations,"
  *J. Math. Pures Appl.* 6 (1927) 1–119. Foundational classification of
  Riemannian symmetric spaces. **Cite in `07.04.05`, `07.04.07`,
  `07.04.13`.**
- **Cartan 1914 and 1929** — Élie Cartan, "Les groupes réels simples,
  finis et continus," *Ann. Sci. École Norm. Sup.* 31 (1914) 263–355;
  "Groupes simples clos et ouverts et géométrie riemannienne,"
  *J. Math. Pures Appl.* 8 (1929) 1–33. Real-form classification.
  **Cite in `07.04.02`, `07.04.05`.**
- **Weyl 1925–26** — Hermann Weyl, "Theorie der Darstellung
  kontinuierlicher halb-einfacher Gruppen," *Math. Z.* 23–24 (1925–26).
  Compact-real-form existence and the "unitary trick." **Cite in
  `07.04.02`.** (Also cited by the FH audit in `07.06.07`,
  `07.07.04` — coordinate to avoid duplication.)
- **Wigner 1939** — E. P. Wigner, "On unitary representations of the
  inhomogeneous Lorentz group," *Ann. of Math.* 40, 149–204. Physics
  application of real-form classification (the Poincaré group's
  representation theory uses the same Cartan-involution machinery).
  **Cite as application in `07.04.05` Master section.**
- **Iwasawa 1949** — Kenkichi Iwasawa, "On some types of topological
  groups," *Ann. of Math.* 50 (1949) 507–558. Originates the
  $G = KAN$ decomposition. **Cite in `07.04.09`.**
- **Harish-Chandra 1953–68** — Harish-Chandra, "Representations of
  semisimple Lie groups I–VI," *Trans. Amer. Math. Soc.* 75 (1953),
  76 (1954), 76 (1954); *Amer. J. Math.* 77, 78 (1955–56); plus
  "Spherical functions on a semisimple Lie group I, II," *Amer. J.
  Math.* 80 (1958) 241–310, 553–613. Origin of spherical-function
  theory and the foundations for the Plancherel programme. **Cite in
  `07.04.11`, `07.04.12`.**

**Notation crosswalk.** DGLGSS uses $G$ for a (connected) semisimple
real Lie group, $K$ for its maximal compact subgroup (= fixed-point
set of the Cartan involution lifted to $G$), $\mathfrak{g} = \mathfrak{k}
\oplus \mathfrak{p}$ for the Cartan decomposition (note: $\mathfrak{p}$
not $\mathfrak{m}$ — Helgason's $\mathfrak{p}$ collides with the
"Iwasawa $\mathfrak{p} = \mathfrak{m} + \mathfrak{a} + \mathfrak{n}$"
parabolic-subalgebra convention used by Knapp; **Codex should adopt
Helgason's $\mathfrak{p}$ for the Cartan-decomposition piece** and call
out the collision in `07.04.04` §Notation). DGLGSS writes
$\mathfrak{a}$ for a maximal $\mathbb{R}$-split abelian subalgebra of
$\mathfrak{p}$ (consistent with Knapp), $\Sigma \subset \mathfrak{a}^*$
for the restricted-root system, $m_\alpha$ for the multiplicity
$\dim \mathfrak{g}_\alpha$, $W(\mathfrak{g}, \mathfrak{a})$ for the
restricted Weyl group (distinct from the complex Weyl group $W$
familiar from `07.06.04`). Codex should adopt all of these.

For symmetric spaces themselves: Helgason writes $M = G/K$ for a
non-compact-type symmetric space and $M^* = U/K$ (or sometimes
$M_u$) for its compact dual. Helgason's classification labels
($\mathrm{AI}, \mathrm{AII}, \ldots, \mathrm{EVII}, \mathrm{EVIII},
\mathrm{EIX}$) should be reproduced verbatim in `07.04.13`.

**Cross-strand weaving (Pass-W).** New units should link laterally to:

- `07.06.*` Lie-algebraic strand — `07.04.02 compact-real-form`
  and `07.04.05 real-forms-classification` are direct deepenings of
  `07.04.01 cartan-weyl-classification`.
- `03.02 manifolds` and `03.04 differential-forms` — `07.04.07
  riemannian-symmetric-space` is a Riemannian-geometry application.
- `06-riemann-surfaces` — Hermitian symmetric spaces of non-compact type
  in rank one are the unit ball $\mathbb{B}^n \subset \mathbb{C}^n$,
  connecting to complex geometry.
- `physics/quantum-mechanics/` — Wigner's classification of
  particle representations uses real forms of the Poincaré algebra;
  Altland-Zirnbauer tenfold way for topological matter uses Cartan's
  classification of symmetric spaces.
- Future Knapp audit (if commissioned) — Knapp covers the same
  real-form material with a different ordering; coordinate prereq /
  prerequisite chains to avoid duplication.
- Future Kobayashi-Nomizu Vol 1 audit (already exists as
  `kobayashi-nomizu-foundations-vol1.md`) — KN Vol 1 covers Riemannian
  connections and curvature; coordinate the Hopf-Rinow prereq.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in DGLGSS
  (full P1 audit; deferred until a local PDF is acquired). Coverage
  estimates in §2 are based on DGLGSS's well-known chapter structure
  (AMS GSM 34 catalog page + standard references in Knapp, Goodman-
  Wallach, Onishchik-Vinberg).
- **Helgason's sequel volumes.** *Groups and Geometric Analysis*
  (GTM 113, AMS reprint as GSM 83) covers the harmonic-analysis half:
  invariant differential operators on $G/K$ in depth, spherical
  Plancherel theorem, Paley-Wiener theorem on $G/K$, horocycle
  transform, eigenfunctions of the Laplace-Beltrami operator on
  $G/K$. Geometric Analysis on Symmetric Spaces (GSM 39) is the
  third volume, covering the Helgason-Fourier transform and conjectures
  on eigenfunctions. **These two volumes should each receive their
  own audit plan when commissioned. Cross-references to GTM 113 are
  acceptable in the Babel Bible `07.04.12 spherical-function` master tier,
  but the deep harmonic-analysis content stays in the GTM 113 plan.**
- **Knapp's *Lie Groups Beyond an Introduction*.** Substantial overlap
  with DGLGSS Chapters II–VI; deferred to its own audit. Note that
  Knapp orders the material structurally (real Lie groups → root
  systems → symmetric spaces), while Helgason orders it geometrically
  (manifolds → Lie groups → orthogonal symmetric Lie algebras →
  symmetric spaces). The Codex Lie-strand units `07.04.*` should
  read cleanly under either ordering.
- **Goodman-Wallach *Symmetry, Representations, and Invariants*.**
  Major overlap with DGLGSS Chapter III; deferred.
- **Onishchik-Vinberg *Lie Groups and Algebraic Groups*.** Tabulation
  reference; consult for `07.04.13` classification tables but no
  separate audit needed (Onishchik-Vinberg is reference-style).
- **Wolf *Spaces of Constant Curvature*.** Covers the
  space-form classification side; deferred.
- **The infinite-dimensional / Kac-Moody / loop-group analogues**
  of symmetric-space theory. Live in `03-modern-geometry/11-infinite-dim-lie/`
  and have their own canonical references (Pressley-Segal *Loop
  Groups*, Kac *Infinite Dimensional Lie Algebras*).
- **Modular / positive-characteristic** representation theory of
  real reductive groups. Out of scope for DGLGSS by design.
- **Number-theoretic / Langlands-programme** applications. DGLGSS
  Chapter VI material (Iwasawa decomposition, parabolic subgroups)
  is the structural input but the arithmetic side is deferred to
  Bump *Automorphic Forms*, Cogdell *L-Functions*, Borel
  *Automorphic Forms on Reductive Groups*.

---

## §6 Acceptance criteria for FT equivalence (DGLGSS)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, DGLGSS is at
equivalence-coverage when:

- The 3 Priority-0 prereqs have shipped (Hopf-Rinow, Lie-group
  exp/BCH, Killing form + Cartan criterion).
- The 7 Priority-1 new units have shipped (`07.04.02` through
  `07.04.07`, `07.04.09`). These close the namesake-material gap.
- ≥95% of DGLGSS's named theorems in Chapters I–X map to a Codex
  unit (currently ~15–20%; after Priority-1 this rises to ~65%;
  after Priority-1+2 to ~88%; full ≥95% requires Priority-3 master
  deepenings + the Hermitian-symmetric-space pointer unit).
- ≥90% of DGLGSS's worked examples (sphere, hyperbolic space,
  complex projective space, real and complex Grassmannians, the
  bounded symmetric domains in low rank, $\mathrm{SL}_2(\mathbb{R})$
  Iwasawa) have a direct unit or are cross-referenced from a unit
  that covers them.
- Notation crosswalk recorded (see §4).
- Pass-W weaving connects the new units to `07.06.*`,
  `03.02 manifolds`, `03.04 differential-forms`, and the physics
  strand (Wigner classification + Altland-Zirnbauer cross-link).
- Originator-prose sections (Cartan 1926–27 + 1914 + 1929, Weyl
  1925, Iwasawa 1949, Harish-Chandra 1953–68, Wigner 1939) appear
  in the relevant Master tiers.

**Equivalence verification protocol** (per `FASTTRACK_EQUIVALENCE_PLAN.md`
§4):

- **4.1 Book-as-input self-check.** Sample 5 random theorem statements
  from DGLGSS (likely from Chapters IV, V, VI); for each, identify
  the Babel Bible unit that proves it.
- **4.2 Exercise reproducibility.** Sample 5 random exercises from
  DGLGSS (Helgason's exercises are detailed and his *Solutions to
  Exercises* appendix in the 2001 reprint is itself a 70-page
  document; bias the sampling toward exercises with solutions
  in the appendix); for each, identify the Babel Bible unit(s) sufficient
  to solve it.
- **4.3 Notation comprehension.** Sample 5 fragments of Helgason
  prose; paraphrase each into the Babel Bible notation system (per §4
  crosswalk). The $\mathfrak{p}$ / parabolic-$\mathfrak{p}$ collision
  is a known stumbling block — flag any tested paraphrase that
  mishandles it.

---

## §7 Sourcing

- **Local PDF status.** Not present in `reference/textbooks-extra/`
  (verified — present titles are Lang *Basic Mathematics*, Apostol
  *Calculus* Vols 1 + 2, Ahlfors *Complex Analysis* + *Riemann
  Surfaces*, Courant *Differential and Integral Calculus* Vols 1 + 2,
  Donaldson *Riemann Surfaces*, Mackenzie *Lie Groupoids and Algebroids*
  Vols, Landau-Lifshitz Vols 1, 2, 6, 8, and an unrelated ODE epdf).
  No Helgason title anywhere in the Babel Bible `reference/` tree.
- **Commercial source.** AMS GSM 34 (2001 corrected reprint).
  Available at `https://bookstore.ams.org/gsm-34/` (BUY). ISBN
  978-0-8218-2848-9. Also available as the original Academic Press
  1978 edition (ISBN 0-12-338460-5) — content essentially identical,
  but the 2001 reprint adds the Solutions to Exercises appendix and
  errata corrections. **Target the 2001 reprint** for the local copy.
- **Library-mirror sources.** Acquire via institutional access (AMS
  member subscription or university library) or interlibrary loan.
  For the local copy, target placement is
  `reference/textbooks-extra/Helgason-Differential-Geometry-Lie-Groups-Symmetric-Spaces.pdf`.
- **Companion / supplementary materials.**
  - S. Helgason, *Groups and Geometric Analysis* (AMS GSM 83, 2000
    reprint of Academic Press 1984) — the harmonic-analysis sequel.
  - S. Helgason, *Geometric Analysis on Symmetric Spaces* (AMS Math.
    Surveys 39, 2nd ed. 2008) — the Helgason-Fourier-transform
    volume.
  - A. W. Knapp, *Lie Groups Beyond an Introduction* (Birkhäuser
    2nd ed. 2002) — alternative coverage of the same structure
    theory; recommended companion for the Iwasawa / restricted-root
    material.
  - A. L. Onishchik, E. B. Vinberg, *Lie Groups and Algebraic Groups*
    (Springer 1990) — recommended companion for the classification
    tables.
  - R. Goodman, N. R. Wallach, *Symmetry, Representations, and
    Invariants* (Springer GTM 255, 2009) — matrix-explicit treatment
    of the same material.
- **Open-access alternatives covering ~30% of DGLGSS:**
  - G. Segal, "Lie Groups," in Carter-Macdonald-Segal *Lectures on
    Lie Groups and Lie Algebras* (LMS Student Texts 32, Cambridge
    1995) — 60-page introduction to compact-real-form theory.
    Substantial preview on Google Books / Cambridge Core.
  - Various lecture notes: A. Kirillov Jr., *Introduction to Lie
    Groups and Lie Algebras* (free, online at Stony Brook); covers
    DGLGSS Chapters I–III material at gentler pace, real forms only
    briefly.
  - D. Bump, *Lie Groups* (Springer GTM 225, 2nd ed. 2013) — partial
    Google Books preview; covers the compact-real-form material and
    spherical functions in the rank-one case.
- **Reduced-audit flag.** **This plan was produced *without* a local
  Helgason PDF.** Coverage estimates in §2 should be re-verified once
  a PDF is acquired, particularly for Chapters VIII (Hermitian
  symmetric spaces) and X (classification tables) where the
  load-bearing content is the detailed tabular data and the
  precise definitions of the Cartan labels
  ($\mathrm{AI}, \mathrm{AII}, \mathrm{AIII}, \mathrm{BDI}, \mathrm{DIII},
  \mathrm{CI}, \mathrm{CII}, \mathrm{EI}, \mathrm{EII}, \ldots,
  \mathrm{EIX}$). **Promote to full P1 audit when PDF is local.**
