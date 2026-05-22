# Shilov — *Linear Algebra* (Fast Track 1.01) — Audit + Gap Plan

**Book:** Georgi E. Shilov, *Linear Algebra* (Dover Publications, New
York, 1977; corrected republication of the Prentice-Hall translation by
Richard A. Silverman, 1971, of the Russian 2nd edition). ISBN
0-486-63518-X. xi + 387 pp. The Dover edition is widely held to be in
the public-domain-adjacent zone (a Dover reprint of a Prentice-Hall
translation of a Soviet text); see FASTTRACK_BOOKLIST row 1.01 ("PD?
(Dover reprint of Soviet text)"). Fast Track entry **1.01** — the
*first* book of §1 Foundations, sitting immediately after the §0
prerequisites (Lang 0.1, Apostol 0.2/0.3, Arnold 0.4) as the canonical
proof-based linear-algebra reference for the Codex spine.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write so that *Linear Algebra* (Shilov hereafter) is
covered to the equivalence threshold (≥95% effective coverage of
theorems, key examples, exercise pack, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).
Mirrors the Serre CinA plan and the Apostol Vol 2 plan in structure.
**Not** a full P1 audit — a line-number inventory of every numbered
theorem and exercise is deferred to a follow-up pass; the chapter-and-
section structure is documented from the PDF and is the spine of the
punch-list.

**Sourcing status: FULL.** Local PDF present at
`reference/textbooks-extra/linear-algebra_compress.pdf` (18.7 MB,
verified 2026-05-22). Title page confirms "Georgi E. Shilov / Professor
of Mathematics / Moscow University / Revised English Edition /
Translated and Edited by Richard A. Silverman / Dover Publications,
Inc., New York" with the 1977 Dover republication of the 1971
Prentice-Hall edition. Eleven-chapter TOC + appendix verified from the
PDF (pp. vii–xi). Line-number anchors are deliverable in the §3 punch-
list as written; full per-exercise inventory is the only deferred piece.

---

## §1 What Shilov's book is for

Shilov is the **canonical Soviet-school proof-based linear-algebra
text** in English translation. Where Halmos *Finite-Dimensional Vector
Spaces* (Van Nostrand 1958, ~200 pp.) is the famously terse American
honours text written for the Princeton lecture audience, where Hoffman-
Kunze *Linear Algebra* (Prentice-Hall, 2nd ed. 1971, ~407 pp.) is the
standard American graduate-track textbook with the cleanest treatment
of the rational and Jordan canonical forms via module theory over a
PID, where Axler *Linear Algebra Done Right* (Springer, 3rd ed. 2015,
~340 pp.) is the determinant-last polemic that builds spectral theory
from minimal polynomials, where Lang *Algebra* (Springer GTM 211, 3rd
ed. 2002, ~914 pp.) is the encyclopaedic graduate algebra reference
that subsumes linear algebra into module theory, and where Apostol
*Calculus Vol. 2* (Wiley, 2nd ed. 1969, Chs. 1–5, ~250 pp.) is the
American calculus-with-linear-algebra-attached text — **Shilov is the
single text that develops the entire finite-dimensional theory from
determinants to the representation theory of finite-dimensional
algebras with full proofs in 380 pages, in the Soviet
chapter-by-chapter spiral that introduces each abstraction immediately
after the concrete computation that motivates it**. Shilov stems from
his earlier *An Introduction to the Theory of Linear Spaces* (LS,
Prentice-Hall 1961) but differs by treating real and complex spaces
uniformly over a number field, adding a chapter on Jordan canonical
form, and adding a chapter on normal-operator canonical forms (with
Hermitian / anti-Hermitian / unitary as special cases).

Distinctive contributions, in the order Shilov develops them:

1. **Ch. 1 — Determinants ($\sim$30 pp.).** *Determinants first*, before
   linear spaces. Definition by permutation expansion; cofactors and
   minors; **Cramer's rule** (Ch. 1 §1.7); Laplace expansion (Ch. 1
   §1.8); linear dependence between columns characterised by the
   vanishing of a determinant. Soviet-school sequencing: the
   computational object is named and used before the abstract framework
   is built.
2. **Ch. 2 — Linear Spaces ($\sim$27 pp.).** Axioms over a number field
   $K$; linear dependence; bases, components, dimension; subspaces;
   **linear manifolds** (affine subspaces, Ch. 2 §2.5) — Shilov gives
   them their own section, unusual among Western texts; **hyperplanes**
   (Ch. 2 §2.6); morphisms of linear spaces (isomorphisms of finite-
   dimensional spaces classified by dimension). The affine-subspace
   thread is distinctive.
3. **Ch. 3 — Systems of Linear Equations ($\sim$17 pp.).** Rank of a
   matrix; the Kronecker-Capelli compatibility theorem; geometric
   description of the solution space as a linear manifold parallel to
   the null space; the Gauss-Jordan rank-calculation algorithm.
4. **Ch. 4 — Linear Functions of a Vector Argument ($\sim$43 pp.).**
   **Linear forms** (covectors) in their own section (Ch. 4 §4.1)
   before linear operators — Shilov develops the dual space implicitly
   here; sums and products of linear operators; the matrix realisation;
   range and null space; **invariant subspaces** (Ch. 4 §4.8);
   eigenvectors and eigenvalues from the characteristic polynomial.
5. **Ch. 5 — Coordinate Transformations ($\sim$15 pp.).** Change-of-
   basis matrices; transformation laws for components, linear forms,
   and operator matrices under change of basis; **tensors** (Ch. 5
   §5.6, starred) introduced as multi-index transformation objects.
   Shilov is one of the few elementary texts where the tensor
   transformation law is derived from change-of-basis in a chapter the
   undergraduate is expected to read.
6. **Ch. 6 — The Canonical Form of the Matrix of a Linear Operator
   ($\sim$46 pp.).** The book's signature chapter. Nilpotent canonical
   form (Ch. 6 §6.1); the algebra of polynomials over $K$ (Ch. 6 §6.2);
   canonical form of an arbitrary operator via the primary
   decomposition; **elementary divisors** (Ch. 6 §6.4) — the Smith-
   normal-form route to the Jordan form via invariant-factor theory;
   the real Jordan canonical form (Ch. 6 §6.6, complex-conjugate-
   eigenvalue pairs handled explicitly); spectra, jets, and polynomial
   functions of an operator (Ch. 6 §6.7, starred); operator functions
   and their matrices (Ch. 6 §6.8, starred — $e^{At}$, $\sin At$ for
   operators). The most thorough Jordan-form proof in any
   undergraduate text.
7. **Ch. 7 — Bilinear and Quadratic Forms ($\sim$31 pp.).** Bilinear
   forms; quadratic forms; **reduction of a quadratic form to canonical
   form** (Ch. 7 §7.3) via the Lagrange algorithm; **Jacobi's method**
   (Ch. 7 §7.5) using leading principal minors; **adjoint linear
   operators** (Ch. 7 §7.6) defined with respect to a non-degenerate
   bilinear form (more general than the Euclidean-space adjoint); the
   law of inertia for real quadratic forms (Ch. 7 §7.9); multilinear
   forms (Ch. 7 §7.8, starred).
8. **Ch. 8 — Euclidean Spaces ($\sim$33 pp.).** Real inner-product
   spaces; basic metric concepts; **orthogonal bases** (Ch. 8 §8.4);
   perpendiculars (orthogonal projections); the **orthogonalisation
   theorem** (Ch. 8 §8.6, Gram-Schmidt); the **Gram determinant** (Ch.
   8 §8.7); incompatible systems and the **method of least squares**
   (Ch. 8 §8.8); adjoint operators on Euclidean spaces and isometries
   (Ch. 8 §8.9).
9. **Ch. 9 — Unitary Spaces ($\sim$26 pp.).** Hermitian forms; the
   scalar product in a complex space; **normal operators** (Ch. 9 §9.3)
   — the Soviet emphasis: normal is the master class, Hermitian / anti-
   Hermitian / unitary are special cases of normal characterised by the
   location of the spectrum (real / imaginary / unit-circle);
   applications to operator theory in Euclidean space (Ch. 9 §9.4,
   complex-conjugate eigenvalue pairs give the real-normal block
   structure).
10. **Ch. 10 — Quadratic Forms in Euclidean and Unitary Spaces
    ($\sim$39 pp.).** The **spectral theorem for self-adjoint
    operators** (Ch. 10 §10.1, principal-axes theorem); **extremal
    properties of a quadratic form** (Ch. 10 §10.2, Rayleigh quotient
    and the Courant-Fischer min-max characterisation); **simultaneous
    reduction of two quadratic forms** (Ch. 10 §10.3, generalised
    eigenvalue problem); reduction of the general quadric equation
    (Ch. 10 §10.4–§10.6, the classical analytic-geometry application);
    **Hermitian quadratic forms** (Ch. 10 §10.7).
11. **Ch. 11 — Finite-Dimensional Algebras and Their Representations
    (starred, $\sim$23 pp.).** Algebras over a field; representations
    of abstract algebras; irreducible representations and **Schur's
    lemma** (Ch. 11 §11.3); basic types of finite-dimensional algebras;
    the left regular representation of a simple algebra; the structure
    of simple and semisimple algebras; representations of simple and
    semisimple algebras (Wedderburn-style).
12. **Appendix — Categories of Finite-Dimensional Spaces (starred,
    $\sim$26 pp.).** Categories of complete algebras / one-dimensional
    algebras / simple algebras / complete algebras of diagonal
    matrices; categories and direct sums. A surprisingly early
    appendix on categorical language (1971 in the Russian 2nd edition,
    1977 in the Dover printing) for an undergraduate text.

Shilov is **the** canonical proof-based linear-algebra reference for
the Codex spine. It is cited as the master-tier anchor in
`01.01.15-bilinear-quadratic-form.md` (alongside Lang and Serre CinA);
it should be the primary anchor for the missing Euclidean / unitary /
normal-operator units. **No overlap** with any other current FT title
at full depth: Apostol Vol 2 Chs. 1–5 (FT 0.3) covers the same ground
at honours-undergraduate depth but stops before Shilov's Ch. 6 (Jordan
form is sketched in Apostol §4.20, not proved). Hoffman-Kunze and
Halmos are not currently FT titles but are cited as peer sources for
shipped Codex linear-algebra units.

**Peer sources** (in addition to Shilov itself; ≥3 required per the
audit protocol):

- T. M. Apostol, *Calculus, Volume II* (Wiley, 2nd ed. 1969) — FT 0.3.
  Chapters 1–5 are the American calculus-with-linear-algebra-attached
  parallel; Apostol §5.6 (principal-axes theorem) is the
  closest-overlapping section. Audit at
  `plans/fasttrack/tom-m-apostol-calculus-vol-multi.md`.
- K. Hoffman, R. Kunze, *Linear Algebra* (Prentice-Hall, 2nd ed. 1971)
  — the standard American graduate-track textbook; Chapters 6–7
  (annihilating polynomials, primary decomposition, rational and Jordan
  canonical forms) are the cleanest peer treatment of Shilov Ch. 6. Not
  yet a FT title; cited at the master tier of `01.01.11-jordan-
  canonical-form.md`.
- S. Axler, *Linear Algebra Done Right* (Springer UTM, 3rd ed. 2015)
  — the determinant-last polemic; cleanest peer treatment of Shilov
  Chs. 8–10 (inner-product spaces and spectral theory). Not yet a FT
  title; cited at the master tier of shipped linear-algebra units.
- S. Lang, *Algebra* (Springer GTM 211, 3rd ed. 2002) — FT 1.02. Chs.
  XIII–XV subsume Shilov's content at module-theory depth (Smith normal
  form, structure of finitely generated modules over a PID); the right
  reference for the "from above" route to Shilov Ch. 6. Audit at
  `plans/fasttrack/serge-lang-algebra.md`.
- (Supplementary) P. R. Halmos, *Finite-Dimensional Vector Spaces*
  (Van Nostrand, 2nd ed. 1958) — the canonical short American
  undergraduate-honours reference; not currently a FT title.
- (Supplementary) F. R. Gantmacher, *The Theory of Matrices* (Chelsea
  1959, 2 vols.) — the Soviet matrix-theory companion volume; covers
  matrix functions, Jordan form, and the general theory at engineering-
  application depth.

---

## §2 Coverage table (Codex vs Shilov)

Cross-referenced against the current Codex corpus
(`content/00-precalc/` through `content/22-language/`; 362 units total
as of 2026-05-22). ✓ = covered, △ = partial / different framing, ✗ =
not covered. **Existing 01.01.XX shipped:** 01 (field), 03 (vector
space), 04 (subspace, basis, dimension), 05 (linear transformation,
rank-nullity), 07 (determinant), 08 (eigenvalue, eigenvector),
11 (Jordan canonical form), 12 (singular value decomposition),
15 (bilinear / quadratic form). **Available IDs in 01.01.XX:** 02, 06,
09, 10, 13, 14, 16, 17, 18, 19, 20.

| Shilov chapter / section | Codex unit(s) | Status | Note |
|---|---|---|---|
| Ch. 1 §§1.1–1.6 Determinants (definition, properties, cofactor expansion) | `01.01.07` determinant | ✓ | Shipped; references Apostol Vol 2 Ch. 3 at intermediate / master tiers. Add Shilov Ch. 1 to the master-tier anchor list. |
| Ch. 1 §1.7 Cramer's rule | `01.01.07` determinant (mention) | △ | Determinant unit mentions Cramer's rule but does not derive it as its own theorem. **Gap candidate** — either deepen `01.01.07` or new unit. |
| Ch. 1 §1.8 Laplace's theorem (minor expansion) | `01.01.07` (mention) | △ | Same as above; folded into determinant. |
| Ch. 1 §1.9 Linear dependence between columns | `01.01.04`, `01.01.07` | ✓ | Covered. |
| Ch. 2 §§2.1–2.4 Linear spaces, bases, dimension | `01.01.03`, `01.01.04` | ✓ | Shipped. |
| Ch. 2 §2.5 Linear manifolds (affine subspaces) | — | ✗ | **Gap.** Affine subspaces / linear manifolds have no Codex unit at the foundations level. Shipped affine content lives at much higher abstraction (`04.07.*` projective / affine schemes). |
| Ch. 2 §2.6 Hyperplanes | — | ✗ | **Gap.** Hyperplanes as the kernel of a non-zero linear functional are not the subject of any unit. Distinct from the projective hyperplane in `04.07.*`. |
| Ch. 2 §2.7 Morphisms of linear spaces | `01.01.05` | ✓ | Shipped (rank-nullity is the load-bearing morphism theorem). |
| Ch. 3 Systems of linear equations (Kronecker-Capelli, Gauss-Jordan) | — | ✗ | **Gap.** Codex has no unit on solving $A\mathbf{x} = \mathbf{b}$ as such; the rank-nullity unit `01.01.05` covers the kernel-image side but not the algorithm or the compatibility theorem. |
| Ch. 4 §4.1 Linear forms (covectors, dual space) | — | ✗ | **Gap.** No dual-space unit anywhere in Codex foundations. Brief mention in `01.01.03-vector-space.md` synthesis prose. |
| Ch. 4 §§4.2–4.6 Linear operators, matrix realisation | `01.01.05` | ✓ | Shipped. |
| Ch. 4 §4.7 Linear operators mapping $\mathbf{K}_n$ into itself | `01.01.05` | ✓ | Covered (the endomorphism case). |
| Ch. 4 §4.8 Invariant subspaces | — | ✗ | **Gap.** Invariant subspaces are the cornerstone of operator decomposition and appear nowhere as a primary topic. Mentioned in passing in `01.01.11`. |
| Ch. 4 §4.9 Eigenvectors and eigenvalues | `01.01.08` | ✓ | Shipped. |
| Ch. 5 §§5.1–5.5 Change-of-basis transformations | — | ✗ | **Gap.** Change-of-basis is foundational; no Codex unit treats the transformation laws for components, linear forms, and operator matrices systematically. |
| Ch. 5 §5.6 Tensors (multi-index transformation) | `03.01.01` tensor product | △ | Tensors in Codex live at the universal-property / multilinear-algebra level (`03.01.*`); the elementary index-transformation framing Shilov uses is absent. Tier-α-overlap; the precalc-of-tensors framing would be a new unit. |
| Ch. 6 §6.1 Nilpotent canonical form | `01.01.11` (component) | △ | Folded into the Jordan unit's master tier; not a standalone unit. |
| Ch. 6 §6.2 Algebra of polynomials over $K$ | △ | △ | Polynomial-ring content lives in `01.02.*` algebra strand (commutative algebra) at much higher abstraction. A foundations-tier unit on the polynomial algebra $K[X]$, division algorithm, ideals, minimal / characteristic polynomial structure is absent. |
| Ch. 6 §§6.3–6.5 Canonical form via elementary divisors | `01.01.11` | ✓ | Shipped. Add Shilov Ch. 6 to the master-tier anchor list. |
| Ch. 6 §6.6 The real Jordan canonical form | `01.01.11` (mention) | △ | Complex form proved; real form (with $2\times 2$ rotation blocks for complex-conjugate eigenvalues) is mentioned but not derived. Candidate deepening. |
| Ch. 6 §§6.7–6.8 Operator functions ($e^{At}$, polynomial functions) | `02.06.03` matrix exponential | ✓ | Covered in the matrix-exponential ODE unit at `02.06.03-systems-linear-ode-matrix-exponential.md`. |
| Ch. 7 §§7.1–7.3 Bilinear / quadratic forms, reduction to canonical form | `01.01.15` | ✓ | Shipped. Includes the diagonalisation-by-orthogonal-substitution master-tier discussion. |
| Ch. 7 §7.5 Jacobi's method (leading principal minors) | — | ✗ | **Gap candidate** — could be folded into `01.01.15` master tier or split as a method-pointer unit. |
| Ch. 7 §7.6 Adjoint linear operators (general bilinear form) | — | ✗ | **Gap.** The general adjoint (defined relative to an arbitrary non-degenerate bilinear form, not only the Euclidean inner product) is absent. |
| Ch. 7 §7.9 Bilinear / quadratic forms in real space; **law of inertia (Sylvester)** | `01.01.15` (mention) | △ | Sylvester's law of inertia is mentioned but not derived. Candidate deepening. |
| Ch. 8 §§8.2–8.5 Euclidean spaces, orthogonal bases, perpendiculars | `02.11.07` inner product space | △ | The Codex unit lives in the **analysis** strand (`02.11.*`) at functional-analysis depth. A *foundations-tier* finite-dimensional inner-product-space unit is absent. |
| Ch. 8 §8.6 Orthogonalisation (Gram-Schmidt) | △ | △ | Mentioned in the SVD unit `01.01.12` and used implicitly. Foundations-tier Gram-Schmidt unit absent. |
| Ch. 8 §8.7 Gram determinant | △ | △ | Used in `01.01.12` to relate singular values to $A^*A$ eigenvalues. Foundations-tier Gram-determinant unit absent. |
| Ch. 8 §8.8 Least squares | — | ✗ | **Gap.** The fundamental application of orthogonal projection. No Codex unit. |
| Ch. 8 §8.9 Adjoint on Euclidean space, isometries (orthogonal group preview) | △ | △ | Foundations-tier adjoint is a gap (see Ch. 7 §7.6 row); the orthogonal group is `03.03.03` but at Lie-group depth. |
| Ch. 9 §9.1 Hermitian forms | △ | △ | Mentioned in `01.01.15`; foundations-tier dedicated unit absent. |
| Ch. 9 §9.2 Scalar product in complex space | △ | △ | Foundations-tier complex inner-product unit absent; analysis-strand `02.11.07` covers the general case but not the elementary finite-dim version. |
| Ch. 9 §9.3 Normal operators | — | ✗ | **Gap.** **The book's master class.** Hermitian, anti-Hermitian, and unitary operators are all special cases of normal, classified by the location of the spectrum. Absent from Codex. |
| Ch. 9 §9.4 Applications to operator theory on Euclidean space | — | ✗ | Folded into the normal-operator unit above. |
| Ch. 10 §10.1 **Spectral theorem (principal-axes theorem)** | `01.01.08` (master tier) | △ | The finite-dim spectral theorem is stated in `01.01.08`'s master tier as a downstream remark; not a standalone unit. **Gap candidate** — the most important load-bearing theorem of the chapter. |
| Ch. 10 §10.2 Extremal properties (Rayleigh, Courant-Fischer min-max) | — | ✗ | **Gap.** No min-max / Rayleigh-quotient unit in Codex. |
| Ch. 10 §10.3 Simultaneous reduction of two quadratic forms | — | ✗ | **Gap.** Generalised eigenvalue problem; foundational for structural mechanics and applied PDE. |
| Ch. 10 §§10.4–10.6 Reduction of the quadric equation | — | ✗ | Classical analytic-geometry application. Low priority. |
| Ch. 10 §10.7 Hermitian quadratic forms | △ | △ | Mentioned at master tier of `01.01.15`; standalone unit absent. |
| Ch. 11 Finite-dim algebras, Schur's lemma, Wedderburn structure | `01.02.*` + `07.*` | △ | Schur's lemma is `07.01.*` (rep theory of finite groups); the Wedderburn-structure framing for finite-dim algebras at the foundations level is absent, but the abstraction is the right place for it. Master-tier overlap; not a foundations-tier gap. |
| Appendix Categories of finite-dim spaces | — | ✗ | Categorical-style closing chapter. **Out of scope** — pointer-only; defer. |

**Aggregate coverage estimate:** **~30%** of Shilov's eleven chapters
have full Codex coverage at the foundations tier (Chs. 1, 2 except
manifolds / hyperplanes, 4 except dual/invariant subspaces, eigen-
content of Ch. 4, the existing Jordan-canonical-form coverage of
Ch. 6, and the existing bilinear-/quadratic-form coverage of Ch. 7).
About **40%** has partial coverage (Chs. 8–10 covered in analysis-
strand `02.11.*` at functional-analysis depth but not at foundations
depth, or referenced inside other units without standalone treatment).
About **30%** is genuinely gapped (linear manifolds, hyperplanes,
linear systems, dual space, invariant subspaces, change of basis,
Gram-Schmidt as a unit, normal operators, spectral theorem as a unit,
min-max, simultaneous reduction, least squares, adjoint operators).

**Structural recommendation.** Shilov's content fits neatly into the
existing `01-foundations/01-linear-algebra/` chapter; no new sub-
chapter is required. The punch-list adds **8–10 new units** within
`01.01.XX` (using the available IDs 02, 06, 09, 10, 13, 14, 16, 17,
18, 19, 20) and **3 deepenings** of existing shipped units. **Shilov
should be the primary tier-anchor** for the new finite-dimensional
inner-product / spectral-theorem units; the analysis-strand units
`02.11.07-inner-product-space` and `02.11.03-unbounded-self-adjoint`
remain the infinite-dimensional / operator-theoretic anchors and stay
distinct.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

The §3 punch-list uses the parser format defined in
`scripts/build_production_plan.py:42-47` (`<NN.NN.NN>` IDs, originator
citations, peer cross-anchors, tier-presence, word target).

### Priority 1 — load-bearing finite-dim linear-algebra gaps

These are the units that close Shilov's distinctive contribution to
the Codex spine. Without them, downstream units in analysis,
representation theory, and operator theory reach back for foundations-
tier material that does not exist.

1. **`01.01.02` Dual space and double dual.** Linear forms $V^* =
   \mathrm{Hom}(V, K)$, dual basis, canonical injection $V \to V^{**}$
   with isomorphism in the finite-dimensional case, annihilators
   $W^\circ \subset V^*$ with $\dim W + \dim W^\circ = \dim V$,
   transpose of a linear map $T^* : W^* \to V^*$. **Shilov Ch. 4 §4.1
   primary anchor**; Hoffman-Kunze §3.5 + §3.7 cross-anchor; Axler
   §3.F cross-anchor. Three-tier. ~1800 words. Successor edges into
   `03.04.02` differential forms and `01.02.10` tensor product of
   modules. Originator citation: **Pincherle 1897** *Mémoire sur le
   calcul fonctionnel distributif* (Math. Ann. 49) — the first
   systematic treatment of linear functionals as a dual space; **Banach
   1929-32** for the topological extension.

2. **`01.01.06` Systems of linear equations and the Kronecker-Capelli theorem.** The augmented-matrix formulation; Gauss-Jordan
   elimination as a constructive algorithm; the **Kronecker-Capelli
   compatibility theorem** (the system $A\mathbf{x} = \mathbf{b}$ is
   solvable iff $\mathrm{rank}(A) = \mathrm{rank}(A | \mathbf{b})$);
   description of the solution space as an affine subspace parallel
   to $\ker A$; Cramer's rule as the special-case formula when $A$ is
   square non-singular. **Shilov Ch. 3 primary anchor**; Apostol Vol 2
   §2.20 cross-anchor; Hoffman-Kunze §1.4–§1.6 cross-anchor. Three-
   tier. ~1800 words. Originator citation: **Cramer 1750**
   *Introduction à l'analyse des lignes courbes algébriques*
   (Appendix 1) for Cramer's rule; **Kronecker 1903** *Vorlesungen
   über die Theorie der Determinanten* and **Capelli 1892** *Saggio
   sulla introduzione delle funzioni ellittiche* for the rank-
   compatibility theorem.

3. **`01.01.09` Gram-Schmidt orthonormalisation and finite-dim inner-product space.** Finite-dimensional inner-product space (real
   Euclidean and complex unitary); the inner product on $K^n$ as the
   model; **Gram-Schmidt orthonormalisation**: starting from a basis
   $\{v_1, \ldots, v_n\}$ produce an orthonormal basis
   $\{e_1, \ldots, e_n\}$ with the same flag of subspaces; the
   **Gram determinant** $G(v_1, \ldots, v_k) = \det(\langle v_i, v_j
   \rangle)$ and its volume interpretation; orthogonal complement
   $W^\perp$ with $V = W \oplus W^\perp$; orthogonal projection onto
   a subspace; the **method of least squares** as projection onto the
   column space. **Shilov Ch. 8 §§8.2–8.8 primary anchor**; Axler
   §6.A–§6.C cross-anchor; Apostol Vol 2 §1.14 + §1.15 cross-anchor.
   Three-tier. ~2200 words. Originator citation: **Gram 1883** *Über
   die Entwicklung reeller Funktionen* (J. Reine Angew. Math. 94);
   **Schmidt 1907** *Math. Ann.* 63 (the orthonormalisation algorithm);
   **Gauss 1809** *Theoria motus corporum coelestium* (least squares).

4. **`01.01.10` Adjoint operator and isometry on a finite-dim inner-product space.** Adjoint $T^* : V \to V$ defined by $\langle Tv, w
   \rangle = \langle v, T^* w \rangle$ on a finite-dim inner-product
   space; matrix of the adjoint is the conjugate transpose in an
   orthonormal basis; **self-adjoint** ($T = T^*$), **anti-self-
   adjoint** ($T = -T^*$), **unitary / orthogonal** ($T^* T = I$),
   **normal** ($TT^* = T^*T$); isometries preserve the inner product;
   Cartan-Dieudonné theorem statement (every orthogonal transformation
   is a product of reflections). **Shilov Ch. 8 §8.9 + Ch. 9 §9.3
   primary anchor**; Axler §7.A cross-anchor; Hoffman-Kunze §8.1
   cross-anchor.
   - Tiers: three-tier (beginner / intermediate / master).
   - Word target: ~2000.
   - Successor edges into `03.03.03` orthogonal group and `03.09.02`
     Clifford algebra.
   - Originator citation: **Hilbert 1906** (lecture notes,
     *Grundzüge einer allgemeinen Theorie der linearen
     Integralgleichungen* IV, Nachr. Gött. 1906) for the symmetric /
     adjoint operator on $L^2$; **Cartan 1922** + **Dieudonné 1948**
     for the reflection-product theorem.

5. **`01.01.13` Spectral theorem for normal operators on a finite-dim inner-product space (principal-axes theorem).** Statement: a
   normal operator on a finite-dimensional complex inner-product space
   has an orthonormal eigenbasis; the **real spectral theorem** as the
   specialisation to real symmetric matrices; the **principal-axes
   theorem** for quadratic forms as a corollary (every real symmetric
   matrix is orthogonally diagonalisable). Proof via the
   simultaneous-triangularisation Schur decomposition + the normality
   condition forcing zero off-diagonal entries. Spectral decomposition
   $T = \sum_\lambda \lambda P_\lambda$ as the diagonal-block form in
   the eigenbasis. **Shilov Ch. 9 §9.3 + Ch. 10 §10.1 primary
   anchor**; Axler §7.B + §7.C cross-anchor; Apostol Vol 2 §5.6
   cross-anchor; Hoffman-Kunze §8.2 + §8.4 cross-anchor.
   - Tiers: three-tier; master tier required.
   - Word target: ~2400.
   - Successor edges into `02.11.03` unbounded self-adjoint (infinite-
     dim generalisation) and `08.10.*` QFT operator-spectrum units.
   - Originator citation: **Cauchy 1829** *Exercises de mathématiques*
     IV (real symmetric case, principal axes); **Hermite 1855**
     *J. Reine Angew. Math.* 50 (Hermitian case); **Toeplitz 1918**
     *Math. Z.* 2 (general normal operators, finite-dim case);
     **Hilbert 1906** + **von Neumann 1929** for the infinite-dim
     extension cited as pointer only.

### Priority 2 — Shilov-distinctive completions

These complete Shilov's distinctive content but are slightly less
load-bearing than priority 1 (the downstream Codex consumers can defer
them or work around them).

6. **`01.01.14` Rayleigh quotient and the Courant-Fischer min-max characterisation of eigenvalues.** Rayleigh quotient $R(v) =
   \langle Tv, v \rangle / \langle v, v \rangle$ for self-adjoint $T$;
   maximum / minimum over the unit sphere equals the largest / smallest
   eigenvalue; the **Courant-Fischer min-max theorem** characterising
   the $k$-th eigenvalue as $\lambda_k = \min_{\dim S = k} \max_{v \in
   S, \|v\| = 1} R(v) = \max_{\dim S = n-k+1} \min_{v \in S, \|v\| =
   1} R(v)$; applications to perturbation theory (Weyl monotonicity).
   **Shilov Ch. 10 §10.2 primary anchor**; Horn-Johnson §4.2 cross-
   anchor; Axler §7.D cross-anchor. Three-tier. ~1600 words. Successor
   edges into `02.11.05` compact operators (the min-max extension to
   compact self-adjoint). Originator citation: **Rayleigh 1894**
   *Theory of Sound* §88; **Fischer 1905** *Monatsh. Math. Phys.* 16;
   **Courant 1920** *Math. Z.* 7 (the min-max theorem).

7. **`01.01.16` Invariant subspaces and the primary decomposition.**
   $T$-invariant subspace $W \subseteq V$ with $T(W) \subseteq W$;
   restriction $T|_W$; complementary invariant subspaces and the
   block-diagonal form; **primary decomposition theorem** for an
   operator with minimal polynomial $m_T = p_1^{n_1} \cdots p_r^{n_r}$
   (factoring into coprime parts): $V = \bigoplus_i \ker(p_i(T)^{n_i})$
   with each summand $T$-invariant. The conceptual content underlying
   the Jordan-form proof. **Shilov Ch. 4 §4.8 + Ch. 6 §6.3 primary
   anchor**; Hoffman-Kunze §6.8 cross-anchor; Axler §5.A + §8.A
   cross-anchor. Three-tier. ~1800 words. Successor edges into
   `01.01.11` Jordan canonical form (whose master-tier proof depends
   on this) and `07.*` representation theory (where the same
   decomposition pattern recurs). Originator citation: **Frobenius
   1878** *J. Reine Angew. Math.* 84 (the elementary-divisor route);
   **Cayley 1858** (matrix algebra and invariant subspaces).

8. **`01.01.17` Change of basis and the transformation laws.**
   Change-of-basis matrix $P$ from basis $\mathcal{B}$ to basis
   $\mathcal{B}'$; transformation laws: **components** of a vector
   transform contravariantly ($v' = P^{-1} v$), **coefficients** of a
   linear form transform covariantly ($\phi' = P^\top \phi$), and the
   **matrix of a linear operator** transforms by similarity ($A' =
   P^{-1} A P$); invariants of an operator under change of basis
   (trace, determinant, characteristic polynomial, eigenvalues);
   elementary preview of the tensor transformation law. **Shilov Ch.
   5 primary anchor**; Hoffman-Kunze §2.7 + §3.4 cross-anchor; Apostol
   Vol 2 §4.7 cross-anchor. Three-tier. ~1600 words. Successor edge
   into `03.01.01` tensor product (where the index-transformation law
   becomes a categorical statement) and into `03.04.*` differential-
   geometry index calculus. Originator citation: **Cayley 1855**
   *Crelle* 50 (matrix similarity); **Ricci 1888** + **Ricci-Levi-
   Civita 1900** for the tensor transformation law.

9. **`01.01.18` Linear manifolds, hyperplanes, and affine subspaces.**
   Affine subspace $L = v_0 + W$ as a coset of a linear subspace $W
   \subseteq V$; dimension of $L$ = $\dim W$; **hyperplane** as an
   affine subspace of codimension 1, equivalently the level set $\{v
   : \phi(v) = c\}$ of a non-zero linear functional $\phi \in V^*$;
   intersection of hyperplanes as the solution set of a linear system
   (cross-link to `01.01.06`); separation of points by hyperplanes
   (geometric Hahn-Banach preview in finite dim). **Shilov Ch. 2 §§2.5
   – 2.6 primary anchor**; Hoffman-Kunze §2.4 cross-anchor.
   - Tiers: three-tier; beginner anchored on the line-in-$\mathbb{R}^2$
     / plane-in-$\mathbb{R}^3$ picture; master ties to convex
     analysis.
   - Word target: ~1500.
   - Successor edges into `02.11.*` Hahn-Banach machinery and `04.07.*`
     projective / affine algebraic geometry.
   - Originator citation: **Möbius 1827** *Der barycentrische Calcul*
     (affine combinations); **Grassmann 1844** *Die Wissenschaft der
     extensiven Grösse* (affine and linear manifold theory).

10. **`01.01.19` Simultaneous diagonalisation of two quadratic forms and the generalised eigenvalue problem.** Given two quadratic
    forms $A, B$ on $V$ with $B$ positive-definite, there exists a
    basis simultaneously diagonalising both; equivalently, the
    generalised eigenvalue problem $Av = \lambda Bv$ has a basis of
    solutions; geometric content: the principal axes of an ellipsoid
    relative to a Euclidean structure. Applications in structural
    mechanics, vibration analysis, and the Sturm-Liouville reduction.
    **Shilov Ch. 10 §10.3 primary anchor**; Horn-Johnson §7.6 cross-
    anchor; Apostol Vol 2 §5.6 (specialised case) cross-anchor.
    - Tiers: three-tier; master-tier-heavy.
    - Word target: ~1500.
    - Originator citation: **Weierstrass 1858** *Monatsber. Berlin*
      (the generalised-eigenvalue problem for pairs of bilinear forms);
      **Lagrange 1762** (small-vibrations origin).

### Priority 3 — deepenings of existing shipped units

These add Shilov's distinctive material to units that already exist,
rather than producing standalone new units.

11. **`[DEEPEN] 01.01.07` determinant** — add Cramer's rule derivation
    and Laplace minor-expansion theorem as a Master-tier section.
    Shilov Ch. 1 §§1.7–1.8 primary anchor. ~600-word addition. Cross-
    link from new `01.01.06` (systems of linear equations).

12. **`[DEEPEN] 01.01.11` Jordan canonical form** — add the **real
    Jordan canonical form** (complex-conjugate-eigenvalue pairs give
    $2 \times 2$ rotation-and-scaling blocks) as a Master-tier
    addendum. Shilov Ch. 6 §6.6 primary anchor. ~500-word addition.

13. **`[DEEPEN] 01.01.15` bilinear / quadratic form** — add
    **Sylvester's law of inertia** (the signature $(p, q, r)$ of a
    real quadratic form is invariant under any diagonalising change
    of basis) and **Jacobi's method** (reduction via leading principal
    minors) as Master-tier sections. Shilov Ch. 7 §§7.5, 7.9 primary
    anchor. ~700-word addition. Originator citation: **Sylvester 1852**
    *Philos. Mag.* 4 (law of inertia); **Jacobi 1857** *J. Reine
    Angew. Math.* 53 (the reduction method).

### Priority 4 — bibliography-only / pointer items

14. **`[ENRICH] 01.01.03-vector-space`** — add Shilov Ch. 2 to the
    `tier_anchors.intermediate` and `references` block as the Soviet-
    school axiomatisation; the synthesis prose already cites the
    pattern abstractly. ~150-word reference addition.

15. **`[ENRICH] 02.11.07-inner-product-space`** — add Shilov Chs. 8–9
    to the `tier_anchors.beginner` and `references` block as the
    canonical finite-dimensional starting point. The current unit
    cites Reed-Simon and Conway at intermediate / master tiers only;
    a beginner anchor for the finite-dim case is missing. ~200-word
    reference addition + cross-link to new `01.01.09`.

16. **`[ENRICH] 01.01.12-singular-value-decomposition`** — the SVD
    unit's master-tier proof depends on the finite-dim spectral
    theorem; once new `01.01.13` ships, replace the in-line spectral-
    theorem statement with a cross-reference to `01.01.13` master
    tier. ~100-word edit.

---

## §4 Sourcing

- **Status: FULL.** Local PDF present at
  `reference/textbooks-extra/linear-algebra_compress.pdf` (18.7 MB,
  verified 2026-05-22). Eleven-chapter TOC + appendix verified from
  the PDF pp. vii–xi. Line-number anchors are deliverable for the §3
  punch-list as written; a full per-exercise inventory is the only
  piece still deferred to a follow-up pass.
- **License.** Dover Publications republication 1977 of the
  Prentice-Hall translation 1971 of the Soviet (Russian-language)
  original. The Dover catalog lists this volume as a republication;
  the underlying text is the 1971 Silverman translation of Shilov's
  Russian 2nd edition. For educational use cite as Shilov, *Linear
  Algebra*, trans. R. A. Silverman (Dover Publications, New York,
  1977; ISBN 0-486-63518-X). Originator citations in the unit-front-
  matter `references` blocks should pin individual theorems to their
  primary sources (Cramer, Gauss, Gram, Schmidt, Sylvester, Jacobi,
  Cauchy, Hermite, Frobenius, etc. — see §3) rather than to Shilov as
  the discoverer.
- **Companion sources already in / targeted for the reference
  library.**
  - Apostol Vol 2 — local PDF at
    `reference/textbooks-extra/Calculus Vol.2 - Multi-Variable
    Calculus and Linear Algebra with Applications (Tom Apostol).pdf`.
    Already used as the intermediate / master anchor for shipped
    `01.01.07`, `01.01.08`, `01.01.11`, `01.01.12`.
  - Hoffman-Kunze, *Linear Algebra* — not yet sourced; cited as
    `TODO_REF` in shipped units. Cross-anchor for punch-list items 1,
    2, 4, 5, 7, 8, 9.
  - Axler, *Linear Algebra Done Right* (3rd ed.) — not yet sourced;
    cited as `TODO_REF` in shipped units. Cross-anchor for punch-list
    items 1, 3, 4, 5, 6, 7.
  - Horn-Johnson, *Matrix Analysis* — not yet sourced; cited as
    `TODO_REF` in shipped `01.01.12`. Cross-anchor for punch-list
    items 6 and 10 (matrix-analytic min-max + generalised eigenvalue).
  - Halmos, *Finite-Dimensional Vector Spaces* — not yet sourced;
    supplementary cross-anchor for all priority-1 items.
- **Action item.** None for the audit itself; the PDF is in place.
  Optional follow-up: locate Hoffman-Kunze and Axler PDFs (both
  copyright; Anna's Archive deferred per protocol) before producing
  the priority-1 units so the cross-anchor `references` blocks
  resolve from `TODO_REF` to `textbooks-extra/`.

---

## §5 Implementation sketch (P3 → P4)

For a full Shilov coverage pass, **priority-1 items 1–5** are the
minimum set to hit FT equivalence on Shilov's distinctive content; the
priority-3 deepenings then bring shipped units up to Shilov's
master-tier line. Realistic production estimate (mirroring the Lang
*Basic Mathematics* and Serre CinA batches):

- ~3.5 hours per priority-1 unit (research + draft + validate at
  27/27 + Lean stub + bridge / synthesis prose). Foundations-tier
  units skew slightly **higher** than the corpus average because the
  beginner-tier prose density matters more and the master-tier proof
  must be rigorous and self-contained.
- 5 priority-1 units × ~3.5 h = **~18 hours**.
- 5 priority-2 units × ~3 h = ~15 hours.
- 3 priority-3 deepenings × ~1.5 h = ~5 hours.
- 3 priority-4 enrich items × ~0.5 h = ~2 hours.
- **Total ~40 hours** for the full Shilov-equivalence pass. Fits a
  focused 5–6 day window; at 4 production agents in parallel the
  priority-1 batch fits in a 2-day window.

**Batch structure.**

- **Batch A (dual / systems / change of basis, items 1, 2, 8, ~11 h):**
  Items 2 and 8 depend on no new units; item 1 depends on `01.01.03`
  (shipped). Parallel-safe.
- **Batch B (inner-product / adjoint / spectral, items 3, 4, 5, ~11
  h):** Sequential within batch — item 4 depends on item 3; item 5
  depends on item 4. Run after Batch A.
- **Batch C (min-max / invariant subspaces / manifolds / two-form
  reduction, items 6, 7, 9, 10, ~12 h):** Item 6 depends on item 5;
  item 10 depends on item 5. Parallel-safe within those deps.
- **Batch D (priority-3 deepenings, items 11–13, ~5 h):** Independent
  of the other batches; can run any time.
- **Batch E (priority-4 enrichments, items 14–16, ~2 h):** Independent;
  run after the priority-1 and priority-2 units land.

**DAG edges to add.** New prerequisites:

- `01.01.02` (dual) ← `01.01.03` (vector space)
- `01.01.06` (linear systems) ← {`01.01.04`, `01.01.05`, `01.01.07`}
- `01.01.09` (Gram-Schmidt + inner product space) ← {`01.01.03`,
  `01.01.15`}
- `01.01.10` (adjoint + isometry) ← `01.01.09`
- `01.01.13` (spectral theorem) ← {`01.01.10`, `01.01.08`}
- `01.01.14` (Rayleigh / min-max) ← `01.01.13`
- `01.01.16` (invariant subspaces + primary decomposition) ← {`01.01.05`,
  `01.01.08`}
- `01.01.17` (change of basis) ← {`01.01.03`, `01.01.05`, `01.01.02`}
- `01.01.18` (linear manifolds + hyperplanes) ← {`01.01.02`,
  `01.01.04`}
- `01.01.19` (simultaneous reduction of two forms) ← {`01.01.13`,
  `01.01.15`}

Successor edges from §1 to higher sections:

- `01.01.02` → `03.04.02` (cotangent / differential forms)
- `01.01.09` → `02.11.07` (analysis-strand inner-product space)
- `01.01.10` → `03.03.03` (orthogonal Lie group)
- `01.01.13` → `02.11.03` (unbounded self-adjoint)
- `01.01.16` → `07.01.*` (representation theory of finite groups —
  the primary-decomposition pattern recurs at the module level)

**Originator-prose targets.** Several Shilov units are originator-
eligible per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10:

- **Cramer 1750** *Introduction à l'analyse des lignes courbes
  algébriques*, Appendix 1. Cramer's rule. Originator citation for
  `01.01.06` and the `01.01.07` deepening.
- **Möbius 1827** + **Grassmann 1844**. Affine / linear manifold
  theory. Originator citations for `01.01.18`.
- **Gauss 1809** *Theoria motus*. Least squares as orthogonal
  projection. Originator citation for `01.01.09`.
- **Cauchy 1829** *Exercises de mathématiques* IV. Principal-axes
  theorem for real symmetric forms. Originator citation for `01.01.13`.
- **Sylvester 1852** *Philos. Mag.* 4. Law of inertia. Originator
  citation for the `01.01.15` deepening.
- **Cayley 1855** *Crelle* 50. Matrix similarity / change of basis.
  Originator citation for `01.01.17`.
- **Hermite 1855** *J. Reine Angew. Math.* 50. Hermitian-operator
  spectral theorem. Originator citation for `01.01.13`.
- **Jacobi 1857** *J. Reine Angew. Math.* 53. Reduction of quadratic
  forms via principal minors. Originator citation for the `01.01.15`
  deepening.
- **Weierstrass 1858** *Monatsber. Berlin*. Generalised-eigenvalue
  pair-of-forms problem. Originator citation for `01.01.19`.
- **Frobenius 1878** *J. Reine Angew. Math.* 84. Elementary-divisor
  / primary-decomposition route. Originator citation for `01.01.16`.
- **Gram 1883** + **Schmidt 1907**. Orthonormalisation algorithm.
  Originator citation for `01.01.09`.
- **Capelli 1892** + **Kronecker 1903**. Rank-compatibility theorem.
  Originator citation for `01.01.06`.
- **Rayleigh 1894** *Theory of Sound* §88. Rayleigh quotient.
  Originator citation for `01.01.14`.
- **Pincherle 1897** *Math. Ann.* 49. Dual space as functional
  calculus. Originator citation for `01.01.02`.
- **Fischer 1905** + **Courant 1920**. Min-max characterisation.
  Originator citation for `01.01.14`.
- **Toeplitz 1918** *Math. Z.* 2. Normal-operator spectral theorem in
  finite dimension. Originator citation for `01.01.13`.
- **Shilov 1971** (English translation 1977). The book itself —
  primary tier-anchor for the chapter.

**Notation crosswalk.** Shilov / Silverman use the Soviet-school
conventions:

- $K$ for the ground number field; $\mathbf{K}_n$ for $K^n$ (the
  thick-K convention is Silverman's; Codex uses plain $K$ and
  $K^n$ — record divergence).
- $L$ for a linear manifold (affine subspace); $W$ for a linear
  subspace.
- $T : V \to V$ or $A : V \to V$ for a linear operator; matrix of $T$
  in a basis $\mathcal{B}$ written $[T]_\mathcal{B}$ (Codex
  convention) vs Shilov's bare-juxtaposition.
- $(x, y)$ or $\langle x, y \rangle$ for the inner product;
  Shilov / Silverman use both; Codex standardises on $\langle \cdot,
  \cdot \rangle$.
- $T^*$ for the adjoint (Codex matches); Shilov writes the conjugate
  transpose as $\bar A^T$ or $A^*$ interchangeably.
- $\sigma(T)$ for the spectrum (Codex matches); Shilov writes
  $\mathrm{Sp}(T)$ in some places.

Record divergences in the `notation/` block at production time;
non-load-bearing.

---

## §6 What this plan does NOT cover

- A line-number-level inventory of every numbered theorem and exercise
  across Shilov's 387 pages. The TOC is documented and the punch-list
  is robust; per-exercise inventory is a follow-up.
- **Shilov's exercise pack.** Shilov has ~30–50 problems per chapter
  with hints + answers (pp. 361–377). A per-unit exercise pack pass
  (~5 problems per priority-1 unit) is a P3 follow-up after the units
  ship.
- **Ch. 11 (finite-dim algebras, Wedderburn structure).** The
  Wedderburn-structure framing for semisimple algebras is the right
  content for a representation-theory or algebra-strand unit, not a
  foundations-tier linear-algebra unit; defer to a future
  `07.01.*` or `01.02.*` audit pass.
- **Appendix (categories of finite-dim spaces).** Pointer-only;
  defer. The categorical framing of finite-dim spaces is implicit in
  Codex's `01.01.05` master-tier discussion and explicit in
  `03.01.*`; Shilov's appendix is historical interest.
- **Quadric-equation reduction (Ch. 10 §§10.4–10.6).** Classical
  analytic-geometry application; out of scope at the foundations
  tier (lives more naturally at `00.10.01` conic sections or as a
  pointer from `01.01.13`).
- **Matrix-function machinery (Ch. 6 §§6.7–6.8).** Already covered
  via the matrix exponential in `02.06.03`; Shilov's index-calculus
  framing adds nothing the existing unit does not have.
- **Tensors as a foundations-tier topic.** Shilov Ch. 5 §5.6 (starred)
  introduces tensors as multi-index transformation objects; Codex
  places tensors at `03.01.*` via the universal property. The
  index-transformation preview is folded into priority-2 item 8
  (change of basis) rather than its own unit.

---

## §7 Acceptance criteria for FT equivalence (Shilov)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, Shilov is at
equivalence-coverage when:

- ≥95% of Shilov's named results map to Codex units (currently ~30%
  at full depth + ~40% at partial / analysis-strand depth; after
  priority-1 this rises to ~80%; after priority-1+2 to ~95%; after
  priority-3 deepenings to ~98%).
- ≥80% of Shilov's exercises have a Codex equivalent (currently ~5%;
  closing this requires the per-unit exercise-pack follow-up).
- ≥90% of Shilov's worked computations have a direct unit or are
  referenced (currently ~40%; the priority-1+2 batch's required
  worked-example inclusions bring this to ~85%; full coverage
  requires worked-example densification across the new units —
  Gram-Schmidt on a 3-vector example, Cramer's rule on a 3×3 system,
  spectral decomposition of a 2×2 symmetric matrix, simultaneous
  reduction of two 3-variable forms).
- A `notation/shilov-linear-algebra.md` crosswalk exists (priority-4;
  defer until priority-1 units land).
- For every chapter dependency in Shilov (Ch. 1 → Ch. 2 → Ch. 3 →
  Ch. 4 → Ch. 5 → Ch. 6 → Ch. 7 → Ch. 8 → Ch. 9 → Ch. 10), there is a
  corresponding `prerequisites` chain in Codex's DAG; the
  `01.01.03 → 01.01.04 → 01.01.05 → 01.01.07 → 01.01.06 → 01.01.08 →
  01.01.02 → 01.01.17 → 01.01.16 → 01.01.11 → 01.01.15 → 01.01.09 →
  01.01.10 → 01.01.13 → 01.01.14 / 01.01.19` chain becomes the
  load-bearing finite-dim linear-algebra DAG.
- Pass-W weaving connects the new units to `03.01.*` (tensor product)
  via the dual-space unit, to `02.11.*` (functional analysis) via the
  inner-product / adjoint / spectral units, to `03.03.03` (orthogonal
  group) via the isometry unit, and to `07.01.*` (representation
  theory) via the invariant-subspace + primary-decomposition unit.

**Honest scope.** Shilov is the single canonical Soviet-school proof-
based linear-algebra reference, and the Codex linear-algebra chapter
is the most consequential foundations layer for the entire downstream
spine. Closing this audit's priority-1 batch (5 units, ~18 hours) is
the minimum viable Shilov-equivalence; closing priority-1+2 (10 units,
~33 hours) is the recommended ship. **Largest single Shilov-distinctive
gap:** the **normal-operator spectral theorem at finite-dim foundations
tier** (priority-1 item 5) — the master class that classifies
Hermitian, anti-Hermitian, unitary, and orthogonal operators as
special cases by the location of the spectrum. Every downstream
spectral unit in analysis, representation theory, and quantum mechanics
silently assumes this result; explicating it as a foundations unit
anchored to Shilov is the highest-leverage move in the punch-list.
