# Codex — Canonical Concept Catalog

The master list of concepts. Every unit maps to exactly one entry here via `concept_catalog_id`. Two producers cannot declare different prerequisites for the same concept because the concept (and its canonical prerequisites) is defined *here*, not in the unit.

This resolves the "partial-order freedom" problem: textbook dependencies are not a clean DAG, and without a canonical catalog, different producers make different canonical choices for the same concept.

---

## Format

```
## <subject>.<chapter>.<concept-slug>

- **title**: human-readable name
- **prerequisites**: list of other concept_catalog_ids
- **tier_anchors**: per-tier literature anchor (informs the unit when it's produced)
- **notes**: free text — scope, what's in vs out, common confusions
```

---

## Scope & status

This document seeds the apex pilot subjects first (spin geometry, Clifford algebras, etc.) and grows as pilot production pulls in prerequisites. For v0.x, only the pilot subjects' catalog entries exist. Full catalog is a v0.5+ deliverable.

Adding a new concept entry is a *curriculum-architecture* decision, not a unit-production decision. Discuss before adding.

---

## Seed entries (to be filled during `docs/catalogs/DEPENDENCY_MAP.md` writing)

Placeholder for the ~10 apex units + their pulled-in prerequisites. Each entry below will be fleshed out as the DAG is drawn.

### spin-geometry.clifford.clifford-algebra

- **title**: Clifford algebra
- **prerequisites**: `linalg.bilinear-form`, `linalg.vector-space`, `algebra.tensor-algebra`, `algebra.quotient-algebra`
- **tier_anchors**:
  - master: Lawson-Michelsohn §I.1
  - intermediate: (deferred — no canonical intermediate anchor yet)
  - beginner: (deferred)
- **notes**: Graded algebra structure; relation to exterior algebra and Grassmann algebra; real vs complex Clifford algebras.

### spin-geometry.clifford-chessboard

- **title**: Clifford algebra classification — the 8×8 chessboard
- **prerequisites**: `spin-geometry.clifford.clifford-algebra`, `algebra.tensor-algebra`, `algebra.quotient-algebra`
- **tier_anchors**:
  - master: Lawson-Michelsohn §I.3–§I.4 + Atiyah-Bott-Shapiro 1964 *Clifford Modules*
  - intermediate: Friedrich, *Dirac Operators in Riemannian Geometry* §1.5
  - beginner: pattern-recognition in the 8×8 table
- **notes**: ABS classification of $\mathrm{Cl}_{p,q}$ as matrix algebras over $\mathbb{R}$, $\mathbb{C}$, $\mathbb{H}$. Bridging identity $\mathrm{Cl}_{r+1,s+1} \cong \mathrm{Cl}_{r,s} \otimes \mathrm{Cl}_{1,1}$. Real eight-fold periodicity $\mathrm{Cl}_{p,q+8} \cong \mathrm{Cl}_{p,q} \otimes M_{16}(\mathbb{R})$; complex two-fold periodicity. Module quotient $\widehat{\mathfrak{M}}_n \cong KO^{-n}(\mathrm{pt})$.

### spin-geometry.kr-theory

- **title**: KR-theory and the $(1,1)$-periodicity theorem
- **prerequisites**: `spin-geometry.clifford-chessboard`, `k-theory.bott-periodicity`, `topology.classifying-space`
- **tier_anchors**:
  - master: Lawson-Michelsohn §I.10 + Atiyah 1966 *K-theory and reality*
  - intermediate: Karoubi *K-theory: An Introduction* §III.5–III.7
  - beginner: complex K-theory with a real-structure overlay
- **notes**: Atiyah's bigraded $KR^{p,q}$ unifying $K$, $KO$, and $K\!Sp$. The $(1,1)$-periodicity $KR^{p,q+1} \cong KR^{p+1,q}$ is the $K$-theoretic incarnation of the Clifford bridging identity. Bott periodicity in eight steps via the volume element of $\mathrm{Cl}_{0,8}$.

### spin-geometry.triality

- **title**: Triality on $\mathrm{Spin}(8)$ and exceptional Lie group constructions
- **prerequisites**: `spin-geometry.spin-group`, `spin-geometry.clifford-chessboard`, `lie.classification.cartan-weyl`
- **tier_anchors**:
  - master: Lawson-Michelsohn §I.7–§I.8 + Adams 1996 *Lectures on Exceptional Lie Groups*
  - intermediate: Baez 2002 *The octonions* §3
  - beginner: $\mathrm{Spin}(8)$ has three irreducible 8-dimensional representations that permute under an outer symmetry
- **notes**: Triality as the outer automorphism of $\mathrm{Spin}(8)$ permuting the vector representation $V$ and the two half-spinor representations $\mathfrak{S}^\pm$. Spinor squaring builds the octonions and constructs $G_2 \subset \mathrm{Spin}(7) \subset \mathrm{Spin}(8)$, $F_4$, $E_6, E_7, E_8$ via the Freudenthal magic square.

### spin-geometry.dirac.dirac-operator

- **title**: Dirac operator on a spin manifold
- **prerequisites**: `spin-geometry.clifford.clifford-algebra`, `spin-geometry.structure.spin-structure`, `spin-geometry.spinor-bundle`, `diffgeo.connection.connection`, `diffgeo.elliptic-operators`, `functional-analysis.fredholm.operators`
- **tier_anchors**:
  - master: Lawson-Michelsohn §II.5
  - intermediate: Lawson-Michelsohn §II.5 with Bott-Tu style proof pacing
  - beginner: 3Blue1Brown / Strogatz analogous derivative-as-measurement level
- **notes**: First-order elliptic operator on the spinor bundle, $D=c\circ\nabla^S$. Principal symbol is Clifford multiplication, hence elliptic. Role in Lichnerowicz formula, positive scalar curvature, and Atiyah-Singer index theorem.

### linalg.field

- **title**: Field
- **prerequisites**: `set-theory.function`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. III §1; Dummit-Foote §7
  - intermediate: field axioms, finite fields, homomorphisms
  - beginner: reliable arithmetic with division by nonzero elements
- **notes**: Commutative division rings with $0 \ne 1$, field homomorphisms, characteristic, prime fields, finite fields in elementary examples, and field extensions as the scalar context for vector spaces and algebras.

### linalg.vector-space

- **title**: Vector space over a field
- **prerequisites**: `linalg.field`, `linalg.set-and-function`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. III §1
  - intermediate: Axler *Linear Algebra Done Right* §1.A
  - beginner: 3Blue1Brown — *Essence of Linear Algebra* Ch. 1
- **notes**: The single most-reused concept in the curriculum. Definition over arbitrary field, not just $\mathbb{R}$ or $\mathbb{C}$. Counterexamples: function spaces, polynomial rings as $K$-vector spaces.

### set-theory.function

- **title**: Function
- **prerequisites**: none
- **tier_anchors**:
  - master: Halmos *Naive Set Theory* §8; Bourbaki *Theory of Sets* Ch. II
  - intermediate: domain, codomain, image, graph, injective, surjective, bijective
  - beginner: dependable input-output rule
- **notes**: Functions as total single-valued relations, graphs, image, composition, identity maps, inverse criterion for bijections, and categorical monomorphism / epimorphism behavior in Set. Foundational prerequisite for vector spaces, groups, maps, and actions.

### linalg.bilinear-form

- **title**: Bilinear form / quadratic form
- **prerequisites**: `linalg.vector-space`, `linalg.dual-space`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. XV §1
  - intermediate: Axler §6.A
  - beginner: deferred
- **notes**: Symmetric / antisymmetric / hermitian sub-cases. Polarization identity. Gram matrix. Signature for real symmetric forms (Sylvester's law of inertia).

### algebra.tensor-product

- **title**: Tensor product of vector spaces
- **prerequisites**: `linalg.field`, `linalg.vector-space`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. XVI §1-§2; Bourbaki *Algebra I* Ch. III
  - intermediate: universal property for bilinear maps and basis theorem
  - beginner: paired linear choices
- **notes**: Universal bilinear map $V \times W \to V \otimes_K W$, pure tensors, basis $e_i \otimes f_j$, functoriality, uniqueness by representing property, and the bridge to tensor algebra, tensor powers, vector-bundle operations, and Clifford algebra.

### algebra.associative-algebra

- **title**: Associative algebra
- **prerequisites**: `linalg.field`, `linalg.vector-space`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. III §1; Bourbaki *Algebra I* Ch. III
  - intermediate: unital algebra over a field, homomorphisms, commutator bracket
  - beginner: vector space with multiplication
- **notes**: Unital associative $K$-algebras, bilinear multiplication, central scalar action, algebra homomorphisms, kernels as two-sided ideals, commutator Lie algebra, matrix and polynomial examples, and the ambient structure for tensor and quotient algebras.

### algebra.ideal

- **title**: Ideal in an algebra
- **prerequisites**: `algebra.associative-algebra`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. III §6; Atiyah-Macdonald §1
  - intermediate: left ideals, right ideals, two-sided ideals, kernel theorem
  - beginner: subspace absorbing multiplication
- **notes**: Left, right, and two-sided ideals in associative algebras; kernels of algebra homomorphisms; intersections and preimages; two-sided ideals as the data needed for quotient algebra multiplication; polynomial examples and relation to Clifford algebra.

### algebra.tensor-algebra

- **title**: Tensor algebra of a vector space
- **prerequisites**: `linalg.vector-space`, `linalg.tensor-product`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. XVI §6
  - intermediate: Sternberg *Lie Algebras* §1.8.3
  - beginner: deferred
- **notes**: $T(V) = \bigoplus V^{\otimes n}$. Universal property among unital associative algebras under $V$. Distinguish from symmetric / exterior / Clifford algebras as quotients of $T(V)$.

### algebra.quotient-algebra

- **title**: Quotient algebra by a two-sided ideal
- **prerequisites**: `algebra.associative-algebra`, `algebra.two-sided-ideal`
- **tier_anchors**:
  - master: Lang *Algebra* Ch. III §6
  - intermediate: standard undergrad algebra
  - beginner: deferred
- **notes**: Universal property: factoring through the quotient is equivalent to killing the ideal. Foundational for: Clifford algebras (quotient of $T(V)$), exterior algebras, polynomial rings modulo relations.

### algebra.group

- **title**: Group
- **prerequisites**: `set-theory.set-and-function`
- **tier_anchors**:
  - master: Lang Algebra §I; Dummit-Foote §1; Artin Ch. 2
  - intermediate: group axioms, subgroups, homomorphisms, kernels
  - beginner: reversible symmetry operations
- **notes**: Algebraic groups in the elementary sense: identity, inverse, associativity, homomorphisms, subgroups, kernels, quotient-ready normal subgroups, and the foundation for group actions and Lie groups.

### algebra.group-action

- **title**: Group action
- **prerequisites**: `algebra.group`, `set-theory.set-and-function`
- **tier_anchors**:
  - master: Lang §I.5; Dummit-Foote §1.7; Artin Ch. 6
  - intermediate: orbits, stabilizers, equivariant maps
  - beginner: a symmetry group moving points of a set
- **notes**: Left and right group actions, orbit-stabilizer theorem, torsors, equivariance, homogeneous spaces, and the principal-bundle fiber action.

### lie-groups.orthogonal-group

- **title**: Orthogonal group
- **prerequisites**: `algebra.group`, `linalg.bilinear-form`, `lie-groups.lie-group`
- **tier_anchors**:
  - master: Lang Algebra §XV; Hall Lie Groups Ch. 1
  - intermediate: matrices preserving an inner product
  - beginner: rotations and reflections preserving distance
- **notes**: Orthogonal group of a real inner-product space, matrix equation $A^TA=I$, determinant components, special orthogonal group, Lie algebra of skew-symmetric matrices, and role in frame bundles and spin geometry.

### spin-geometry.structure.spin-structure

- **title**: Spin structure on an oriented Riemannian manifold
- **prerequisites**: `spin-geometry.clifford.clifford-algebra`, `spin-geometry.spin-group`, `bundle.principal-bundle`, `bundle.frame-bundle.orthonormal`, `topology.cover.double-cover`, `char-classes.stiefel-whitney`
- **tier_anchors**:
  - master: Lawson-Michelsohn §II.1 — Definition II.1.3 + Proposition II.1.15
- **notes**: Lift of the orthonormal frame bundle through Spin(n) → SO(n). Existence obstructed by w_2; classification (when nonempty) by H^1(M; Z/2). Pin± analogues for non-orientable case.

### topology.cover.double-cover

- **title**: Double cover
- **prerequisites**: `topology.topological-space`, `topology.covering-space`
- **tier_anchors**:
  - master: Hatcher §1.3; Bredon §III.3
  - intermediate: covering-space theory with deck transformations
  - beginner: two-sheeted covering intuition, Strogatz / 3Blue1Brown analogous level
- **notes**: Two-sheeted covering maps, fibers with two points, deck involutions, relation to principal $\mathbb Z/2$-bundles, and the role of $\mathrm{Spin}(n)\to\mathrm{SO}(n)$ as the double cover behind spin structures.

### topology.continuous-map

- **title**: Continuous map
- **prerequisites**: `topology.topological-space`
- **tier_anchors**:
  - master: Munkres §18; Willard §6
  - intermediate: preimages of open sets and metric epsilon-delta comparison
  - beginner: maps that do not tear nearby structure
- **notes**: Continuity between topological spaces, preimage characterization, composition, homeomorphisms, metric-space epsilon-delta comparison, and use in pullbacks and classifying maps.

### bundle.frame-bundle.orthonormal

- **title**: Orthogonal frame bundle
- **prerequisites**: `bundle.principal-bundle`, `bundle.vector-bundle`, `diffgeo.smooth-manifold`, `lie-groups.orthogonal-group`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. I §III.2; Lawson-Michelsohn §I.4; Steenrod §6
  - intermediate: frame bundles as principal O(n)-bundles
  - beginner: moving rulers attached to a curved space
- **notes**: Orthonormal frames of a Riemannian vector bundle, principal $\mathrm{O}(n)$-bundle structure, oriented $\mathrm{SO}(n)$ reduction, tautological frame action, and use as the bundle lifted by a spin structure.

### diffgeo.stokes-theorem

- **title**: Stokes' theorem
- **prerequisites**: `diffgeo.differential-forms`, `topology.integration-on-manifolds`, `diffgeo.exterior-derivative`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Spivak Vol. I §11; Bott-Tu §I.3; Lee Ch. 16; Madsen-Tornehave §10
  - intermediate: Spivak Vol. I §11; Bott-Tu §I.3; Lee Ch. 16
  - beginner: visual fundamental-theorem-of-calculus generalisation
- **notes**: $\int_M d\omega = \int_{\partial M} \omega$ on oriented compact manifolds with boundary. Unifies fundamental theorem of calculus, Green's, classical Stokes, divergence theorem. Extends to chains (de Rham theorem) and supports Poincaré duality.

### diffgeo.exterior-derivative

- **title**: Exterior derivative
- **prerequisites**: `diffgeo.differential-forms`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Spivak Vol. I §7; Bott-Tu §I; Lee Ch. 14; Cartan
  - intermediate: Spivak Vol. I §7; Bott-Tu §I.1; Lee Ch. 14
  - beginner: visual extension of derivative to forms
- **notes**: Unique linear operator $d : \Omega^k \to \Omega^{k+1}$ characterised by action on functions, linearity, graded Leibniz, $d^2 = 0$. Local formula. Naturality (commutes with pullback). Cartan magic formula. Poincaré lemma. Maurer-Cartan equation on Lie groups. Covariant exterior derivative on bundle-valued forms.

### topology.homotopy

- **title**: Homotopy and homotopy group
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Hatcher *Algebraic Topology*; May *Concise Course*; tom Dieck *Algebraic Topology*
  - intermediate: Hatcher §1.1; May Ch. 1
  - beginner: visual loop deformation
- **notes**: Homotopy as continuous deformation; homotopy equivalence; fundamental group $\pi_1$ via loop concatenation; higher homotopy groups $\pi_n$ for $n \geq 2$ (abelian by Eckmann-Hilton). Functoriality, homotopy invariance, Seifert-Van Kampen, Hurewicz, universal cover, long exact sequence of a fibration. Eilenberg-MacLane spaces.

### topology.fundamental-groupoid

- **title**: Fundamental groupoid
- **prerequisites**: `topology.homotopy`, `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Brown *Topology and Groupoids* §6, §10; Brown 1967 (originator paper); May *Concise Course* Ch. 2
  - intermediate: Brown §6; May Ch. 2
  - beginner: Brown §6 informal; loops-and-paths intuition
- **notes**: Small category $\pi_1(X)$ on points of $X$ with morphisms = path-homotopy classes; partial composition (concatenation when endpoints match); inverses by reversed paths; identity = constant path. Functor $\pi_1 : \mathbf{Top} \to \mathbf{Groupoid}$. Equivalent to one-object $\mathrm{B}\pi_1(X, x_0)$ when $X$ is path-connected. Brown's groupoid Seifert-van Kampen: $\pi_1(X, A)$ as a pushout, no path-connectedness hypothesis on $U \cap V$. Galois correspondence as equivalence $\mathbf{Cov}(X) \simeq \mathbf{Set}^{\pi_1(X)}$.

### topology.fibration

- **title**: Fibration (Hurewicz and Serre)
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.homotopy`
- **tier_anchors**:
  - master: Hurewicz 1955, Serre 1951 (originator papers); May Ch. 7--9; tom Dieck §5; Bott-Tu §17
  - intermediate: Hatcher §4.2; May Ch. 7
  - beginner: Hatcher §4 informal; Hopf-fibration intuition
- **notes**: Hurewicz fibration: HLP for all spaces. Serre fibration: HLP for CW pairs / discs. Standard examples: covering maps, fibre bundles over paracompact bases, path-space fibration $PX \to X$ with fibre $\Omega X$. Long exact sequence of homotopy groups $\pi_n(F) \to \pi_n(E) \to \pi_n(B) \to \pi_{n-1}(F)$. Fibration replacement: any map factors through a Hurewicz fibration. Hopf fibration $S^1 \to S^3 \to S^2$ as the originator example. Loop-space adjunction: $\pi_n(\Omega X) \cong \pi_{n+1}(X)$. Connection to Leray-Serre spectral sequence.

### topology.quotient-topology

- **title**: Quotient and identification topology
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Brown *Topology and Groupoids* §4; tom Dieck §1.5
  - intermediate: Brown §4; Hatcher §0; Munkres §22
  - beginner: Brown §4 informal universal-property treatment
- **notes**: Identification topology on $Y = X/{\sim}$: $U$ open iff $q^{-1}(U)$ open in $X$. Universal property: continuous maps $Y \to Z$ are continuous maps $X \to Z$ constant on equivalence classes. Standard quotients: cone $CX$, suspension $SX$ ($\Sigma S^n = S^{n+1}$), mapping cylinder $M_f$, mapping cone $C_f$, adjunction space $Y \cup_f X$, wedge $X \vee Y$, smash $X \wedge Y$. Cellular pushout for CW complex skeleton attachments. Quotient by group action gives covering spaces when properly discontinuous.

### topology.seifert-van-kampen

- **title**: Seifert-van Kampen theorem
- **prerequisites**: `topology.homotopy`, `topology.fundamental-groupoid`, `topology.topological-space`
- **tier_anchors**:
  - master: Brown 1967 (groupoid form); Brown *Topology and Groupoids* §6.7; tom Dieck §3.2
  - intermediate: Hatcher §1.2; May Ch. 2; Brown §6.7
  - beginner: Hatcher §1.2 informal; figure-eight / sphere computations
- **notes**: Classical group form: $\pi_1(U \cup V, x_0) = \pi_1(U, x_0) *_{\pi_1(U \cap V, x_0)} \pi_1(V, x_0)$ when $U$, $V$, $U \cap V$ path-connected. Brown's groupoid form: pushout in $\mathbf{Groupoid}$ for $\pi_1(X, A)$ with $A$ meeting every path-component of $U$, $V$, $U \cap V$ — no connectedness hypothesis on $U \cap V$. Lebesgue-number subdivision argument. Key computations: figure eight ($F_2$), sphere ($0$), genus-$g$ surface ($\langle a_i, b_i \mid \prod[a_i, b_i] \rangle$).

### rep-theory.cartan-weyl-classification

- **title**: Cartan-Weyl classification
- **prerequisites**: `rep-theory.group-representation`, `rep-theory.highest-weight-representation`, `lie.lie-algebra`
- **tier_anchors**:
  - master: Humphreys; Bourbaki Ch. IV–VI; Knapp; Helgason
  - intermediate: Humphreys §10–§12; Fulton-Harris §21; Bourbaki Ch. VI
  - beginner: the periodic table of simple Lie groups via Dynkin diagrams
- **notes**: Bijection {irreducible Dynkin diagrams} ↔ {simple complex Lie algebras}. Four infinite families $A_n, B_n, C_n, D_n$ and five exceptionals $G_2, F_4, E_6, E_7, E_8$. Root systems with crystallographic condition. Cartan matrix and Serre relations. Compact real forms. Langlands duality on root systems. Connections to Kac-Moody algebras, buildings (Tits), McKay correspondence, $E_8$ in lattice theory and string theory.

### rep-theory.highest-weight-representation

- **title**: Highest weight representation
- **prerequisites**: `rep-theory.group-representation`, `rep-theory.schur-lemma`, `lie.lie-algebra`
- **tier_anchors**:
  - master: Humphreys; Fulton-Harris; Bourbaki *Lie Groups and Lie Algebras Ch. VI–VIII*; Knapp
  - intermediate: Humphreys §6, §20–§24; Fulton-Harris §11–§14
  - beginner: organising Lie algebra reps by weight vectors and ladders
- **notes**: Cartan + root decomposition $\mathfrak{g} = \mathfrak{h} \oplus \mathfrak{n}^+ \oplus \mathfrak{n}^-$. Weight space decomposition. Highest weight vector annihilated by $\mathfrak{n}^+$. Verma modules $M(\lambda)$, irreducible quotient $L(\lambda)$. Bijection between dominant integral weights and finite-dim irreducibles. Weyl character formula and Weyl dimension formula. Borel-Weil(-Bott) realisation. Category $\mathcal{O}$, Kazhdan-Lusztig polynomials, crystals, quantum groups.

### rep-theory.schur-lemma

- **title**: Schur's lemma
- **prerequisites**: `rep-theory.group-representation`, `linalg.vector-space`
- **tier_anchors**:
  - master: Fulton-Harris; Knapp; Vogan *Representations of Real Reductive Lie Groups*
  - intermediate: Fulton-Harris §1.2; Serre §2.2; Sternberg *Group Theory and Physics* §1.7
  - beginner: rigidity of irreducible-to-irreducible maps
- **notes**: (1) An equivariant linear map between irreducibles is zero or an isomorphism. (2) Over an algebraically closed field, $\mathrm{End}_G(V) = k \cdot \mathrm{id}_V$ for irreducible $V$. Powers character orthogonality, dimension formula $\sum (\dim V_i)^2 = |G|$. Generalises to simple modules over algebras and to abelian categories. von Neumann's commutant theorem extends to unitary representations. Schur-Weyl duality and categorical Schur.

### rep-theory.group-representation

- **title**: Group representation
- **prerequisites**: `groups.group`, `linalg.vector-space`
- **tier_anchors**:
  - master: Fulton-Harris; Serre; James-Liebeck; Knapp *Lie Groups Beyond an Introduction*
  - intermediate: Fulton-Harris *Representation Theory*; Serre *Linear Representations of Finite Groups*
  - beginner: groups acting linearly on vector spaces
- **notes**: Homomorphism $\rho : G \to \mathrm{GL}(V)$ equivalently a $kG$-module structure on $V$. Subrepresentations, irreducibility, semisimplicity, intertwiners. Direct sum, tensor product, dual, Hom. Maschke's theorem (complete reducibility in char 0 or coprime to $|G|$). Characters, orthogonality relations. Regular representation. Frobenius reciprocity. Connections to modular and categorical representation theory.

### rep-theory.symmetric-group-representation

- **title**: Symmetric group representation
- **prerequisites**: `rep-theory.group-representation`, `rep-theory.schur-lemma`
- **tier_anchors**:
  - master: Frobenius 1900 *Über die Charaktere der symmetrischen Gruppe*; Young 1900-1933 *On Quantitative Substitutional Analysis* I-IX; Fulton-Harris §4-§6; Sagan; Fulton *Young Tableaux*
  - intermediate: Fulton-Harris *Representation Theory* §4; Sagan *The Symmetric Group* Ch. 1-2; Serre §5
  - beginner: irreducibles of $S_n$ labelled by partitions of $n$
- **notes**: Bijection {partitions of $n$} ↔ {irreducible $S_n$-reps over $\mathbb{C}$}. Frobenius character formula via Vandermonde × power-sum determinant. Young symmetriser $c_\lambda \in \mathbb{C}[S_n]$ realising $V^\lambda = \mathbb{C}[S_n] \cdot c_\lambda$ as a left ideal. Hook length formula $\dim V^\lambda = n!/\prod h(i,j)$. Murnaghan-Nakayama border-strip rule. Frobenius characteristic map to symmetric functions. Schur-Weyl duality with $\mathrm{GL}_d$. RSK correspondence. Connections to Hecke algebras, Brauer algebras, crystal bases, Schubert calculus.

### rep-theory.young-diagram

- **title**: Young diagram and tableau
- **prerequisites**: `rep-theory.symmetric-group-representation`
- **tier_anchors**:
  - master: Alfred Young 1900-1933 *On Quantitative Substitutional Analysis* I-IX (Proc. London Math. Soc.); Fulton; Sagan; Stanley *Enumerative Combinatorics* Vol II Ch. 7
  - intermediate: Fulton *Young Tableaux* §1-§5; Sagan *The Symmetric Group* Ch. 2; Fulton-Harris §4
  - beginner: stacks of boxes encoding partitions; fillings as basis vectors
- **notes**: Young diagram $[\lambda]$ as left-justified array of cells encoding partition $\lambda \vdash n$. Standard Young tableau (SYT): bijective filling strictly increasing along rows and columns; $f^\lambda = |\mathrm{SYT}(\lambda)|$. Semistandard Young tableau (SSYT): weak rows, strict columns, with content. Hook length formula $f^\lambda = n!/\prod h(i,j)$ (Frame-Robinson-Thrall 1954); Greene-Nijenhuis-Wilf hook-walk proof; Novelli-Pak-Stoyanovskii bijective proof. Schur polynomials $s_\lambda$ as generating functions of SSYTs; basis of $\Lambda$. RSK correspondence $S_n \leftrightarrow \bigsqcup_\lambda \mathrm{SYT}(\lambda)^2$. Littlewood-Richardson rule. Plancherel measure asymptotics (Vershik-Kerov-Logan-Shepp; Baik-Deift-Johansson Tracy-Widom). Crystal bases (Kashiwara). Schubert calculus on Grassmannians.

### rep-theory.specht-module

- **title**: Specht module
- **prerequisites**: `rep-theory.symmetric-group-representation`, `rep-theory.young-diagram`
- **tier_anchors**:
  - master: Wilhelm Specht 1935 *Die irreduziblen Darstellungen der symmetrischen Gruppe* (Mathematische Zeitschrift); James 1976; James-Kerber *The Representation Theory of the Symmetric Group*; Mathas *Iwahori-Hecke Algebras and Schur Algebras of the Symmetric Group*
  - intermediate: Sagan *The Symmetric Group* Ch. 2; James *Representation Theory of the Symmetric Groups* (LNM 682) §4-§7; Fulton-Harris §4
  - beginner: characteristic-flexible construction of $S_n$-irreducibles via polytabloids
- **notes**: Permutation module $M^\lambda = k\{\text{tabloids}\} = \mathrm{Ind}_{S_\lambda}^{S_n}(\mathrm{triv})$. Polytabloid $e_T = \sum_{\sigma \in C(T)} \mathrm{sgn}(\sigma)\{\sigma T\}$ (column antisymmetrisation). Specht module $S^\lambda = k\langle e_T \rangle \subseteq M^\lambda$. Standard polytabloids $\{e_T : T \in \mathrm{SYT}(\lambda)\}$ form a $\mathbb{Z}$-basis. Theorem: in char 0, $\{S^\lambda\}_{\lambda \vdash n}$ are exactly the irreducible $kS_n$-modules; in char $p$, $D^\lambda = S^\lambda/\mathrm{rad}(S^\lambda)$ for $p$-regular $\lambda$ are the irreducible modular representations (James 1976). James submodule theorem: any submodule $U \subseteq M^\lambda$ contains $S^\lambda$ or sits in $(S^\lambda)^\perp$. Garnir relations. Branching rule via removable corners. Mullineux involution $D^\lambda \otimes \mathrm{sgn} \cong D^{m_p(\lambda)}$ (Ford-Kleshchev 1997). Connections to Hecke algebras, $q$-Schur algebras, LLT algorithm, KLR categorification, Cellular algebras (Graham-Lehrer).

### complex-analysis.riemann-roch-compact-rs

- **title**: Riemann-Roch theorem for compact Riemann surfaces
- **prerequisites**: `complex-analysis.holomorphic-function`, `complex-analysis.riemann-surface`, `alg-geom.riemann-roch-curves`
- **tier_anchors**:
  - master: Forster; Griffiths-Harris; Farkas-Kra; Miranda
  - intermediate: Forster *Lectures on Riemann Surfaces* §16; Miranda Ch. V; Griffiths-Harris Ch. 2
  - beginner: counting meromorphic functions on compact surfaces
- **notes**: $\ell(D) - i(D) = \deg(D) - g + 1$ on compact Riemann surface of genus $g$. Analytic version of algebraic Riemann-Roch [04.04.01]; equivalent by Serre's GAGA. Index of speciality $i(D) = \dim \{\omega \in \Omega^1_{\mathrm{hol}} : (\omega) \geq D\}$. Serre duality identifies $i(D) = \ell(K - D)$. Hodge decomposition powers the analytic proof. Riemann-Hurwitz, Brill-Noether, Clifford generalisations. Hirzebruch-Riemann-Roch and Grothendieck-Riemann-Roch generalisations.

### complex-analysis.riemann-surface

- **title**: Riemann surface
- **prerequisites**: `complex-analysis.holomorphic-function`, `manifolds.smooth-manifold`, `topology.topological-space`
- **tier_anchors**:
  - master: Forster; Miranda; Donaldson *Riemann Surfaces*; Farkas-Kra
  - intermediate: Forster *Lectures on Riemann Surfaces*; Miranda *Algebraic Curves and Riemann Surfaces*
  - beginner: surfaces where complex analysis works globally
- **notes**: 1-dimensional complex manifold (real dimension 2). Charts to $\mathbb{C}$ with holomorphic transitions. Examples: $\mathbb{C}$, Riemann sphere $\hat{\mathbb{C}}$, tori $\mathbb{C}/\Lambda$, smooth complex projective curves. Genus and Euler characteristic. Uniformization: every simply connected Riemann surface is $\hat{\mathbb{C}}$, $\mathbb{C}$, or $\mathbb{H}$. GAGA: compact Riemann surfaces $=$ smooth complex projective curves. Sheaves $\mathcal{O}_X$, $\omega_X$, $\mathcal{O}(D)$. Hodge decomposition, Abel-Jacobi, Teichmüller and moduli spaces.

### complex-analysis.holomorphic-function

- **title**: Holomorphic function
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Ahlfors; Conway *Functions of One Complex Variable*; Rudin *Real and Complex Analysis*
  - intermediate: Ahlfors *Complex Analysis* §1–§4; Stein-Shakarchi Vol. 2 §1–§2
  - beginner: complex differentiability and conformality intuition
- **notes**: Complex differentiability $f'(z_0) = \lim_{h \to 0} (f(z_0 + h) - f(z_0))/h$ direction-independently. Cauchy-Riemann equations $u_x = v_y$, $u_y = -v_x$ equivalent to $\bar{\partial} f = 0$. Analyticity (local power series). Cauchy's theorem, Cauchy integral formula, residue theorem, Liouville, maximum modulus, identity theorem. Conformal maps, open mapping theorem, Schwarz lemma, Riemann mapping theorem, Picard, Mittag-Leffler.

### alg-geom.cartier-divisor

- **title**: Cartier divisor
- **prerequisites**: `alg-geom.weil-divisor`, `alg-geom.line-bundle-scheme`, `alg-geom.coherent-sheaf`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Cartier 1957–58 Bourbaki seminars
  - intermediate: Hartshorne §II.6; Vakil §14; Eisenbud-Harris §III
  - beginner: divisors that are locally principal
- **notes**: Section of $\mathcal{K}^\times/\mathcal{O}^\times$ — system of local equations $\{(U_i, f_i)\}$ with $f_i/f_j \in \mathcal{O}^\times$. $\mathrm{CaCl}(X) = \mathrm{Pic}(X)$ exactly. On smooth/locally-factorial schemes, $\mathrm{CaDiv} = \mathrm{Div}$. Effective Cartier divisor = locally principal codimension-1 closed subscheme. Failure of Weil = Cartier on cone over conic. Base-change-friendly, the natural relative-setting divisor. Cartier dual of group schemes. Arakelov arithmetic.

### alg-geom.line-bundle-scheme

- **title**: Line bundle on a scheme
- **prerequisites**: `alg-geom.coherent-sheaf`, `alg-geom.quasi-coherent-sheaf`, `alg-geom.weil-divisor`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Cartan-Serre FAC 1955; Lazarsfeld *Positivity*
  - intermediate: Hartshorne §II.6; Vakil §14; Eisenbud-Harris §III
  - beginner: rank-1 bundles, locally trivial
- **notes**: Locally free coherent sheaf of rank 1. Transition functions in $\mathcal{O}^\times$. $\mathcal{L} \otimes \mathcal{L}^{-1} = \mathcal{O}_X$. Picard group $\mathrm{Pic}(X) = H^1(X; \mathcal{O}^\times)$ via Čech cohomology. Equivalence with Cartier divisors. On locally factorial schemes, $\mathrm{Pic} = \mathrm{Cl}$. Twisting sheaves $\mathcal{O}(d)$ on $\mathbb{P}^n$. Exponential sequence and first Chern class. Picard scheme. Ample/nef/big positivity classes.

### alg-geom.weil-divisor

- **title**: Weil divisor
- **prerequisites**: `alg-geom.scheme`, `alg-geom.affine-scheme`, `alg-geom.coherent-sheaf`
- **tier_anchors**:
  - master: Hartshorne §II.6; Vakil; Weil *Foundations* 1946; Bourbaki *Commutative Algebra*
  - intermediate: Hartshorne §II.6; Vakil §14; Weil *Foundations*
  - beginner: prescribed zeros and poles on a variety
- **notes**: Formal $\mathbb{Z}$-linear combinations of codimension-1 prime divisors. $\mathrm{div}(f) = \sum v_Y(f) [Y]$ for rational $f$. Principal divisors and divisor class group $\mathrm{Cl}(X)$. Linear equivalence. $\mathrm{Cl}(\mathbb{P}^n) = \mathbb{Z}$ via degree. $\mathrm{Cl}^0$ for curves equals Jacobian. Connection to ideal class group of number fields. Equality $\mathrm{Cl} = \mathrm{Pic}$ for locally factorial schemes. Excision sequence for class groups. Foundation for Chow rings.

### alg-geom.coherent-sheaf

- **title**: Coherent sheaf
- **prerequisites**: `alg-geom.quasi-coherent-sheaf`, `alg-geom.scheme`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Cartan-Serre coherence theorems 1953; Serre FAC 1955
  - intermediate: Hartshorne §II.5; Vakil §13.6; Eisenbud-Harris Ch. III
  - beginner: finitely-generated sheaves
- **notes**: Quasi-coherent + locally finitely generated. On Noetherian $\mathrm{Spec}(R)$: $\mathbf{Mod}^{\mathrm{fg}}(R) \cong \mathbf{Coh}(\mathrm{Spec}(R))$. Closed under kernel/cokernel/tensor/Hom/pullback. Pushforward coherent under proper morphisms (Grothendieck EGA III). Finiteness theorem: $H^i$ on projective scheme is finitely generated. Hilbert polynomial, Castelnuovo-Mumford regularity. Resolution by locally free sheaves on regular schemes.

### alg-geom.quasi-coherent-sheaf

- **title**: Quasi-coherent sheaf
- **prerequisites**: `alg-geom.sheaf`, `alg-geom.scheme`, `alg-geom.affine-scheme`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Grothendieck-Dieudonné EGA I; Serre FAC 1955
  - intermediate: Hartshorne §II.5; Vakil §13; Eisenbud-Harris Ch. III
  - beginner: sheaves locally given by modules
- **notes**: On $\mathrm{Spec}(R)$, quasi-coherent sheaves $\widetilde{M}$ correspond to $R$-modules $M$ via $\widetilde{M}(D(f)) = M[f^{-1}]$. Equivalence $\mathbf{Mod}(R) \cong \mathbf{QCoh}(\mathrm{Spec}(R))$. Closed under kernels, cokernels, tensor product, pullback, pushforward (q-c-q-s). Serre's vanishing on affines: $H^i(\mathrm{Spec}(R); \widetilde{M}) = 0$ for $i \geq 1$. On Proj: $\mathbf{grMod}(S)/\mathbf{Tor} \cong \mathbf{QCoh}(\mathrm{Proj}(S))$.

### alg-geom.affine-scheme

- **title**: Affine scheme
- **prerequisites**: `alg-geom.sheaf`, `alg-geom.scheme`, `algebra.associative-algebra`, `algebra.ideal`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Grothendieck-Dieudonné EGA I; Mumford *Red Book*
  - intermediate: Hartshorne §II.2; Vakil §3–§5; Eisenbud-Harris *Geometry of Schemes* Ch. I
  - beginner: dictionary between rings and geometric spaces
- **notes**: $\mathrm{Spec}(R) = \{\text{prime ideals of } R\}$ with Zariski topology and structure sheaf $\mathcal{O}$. Stalks are localisations $R_\mathfrak{p}$. Locally ringed space. Spec/Γ adjunction: $\mathbf{CRing}^{\mathrm{op}} \cong \mathbf{AffSch}$. Distinguished opens $D(f)$, sections $\mathcal{O}(D(f)) = R_f$. Hilbert Nullstellensatz reformulation. Generic vs closed points. Non-reduced schemes via nilpotents. $\mathrm{Spec}(\mathbb{Z})$ as arithmetic line.

### alg-geom.projective-scheme

- **title**: Projective scheme
- **prerequisites**: `alg-geom.sheaf`, `alg-geom.scheme`, `alg-geom.affine-scheme`, `alg-geom.projective-space`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Grothendieck-Dieudonné EGA II
  - intermediate: Hartshorne §II.2, §II.5; Vakil §4–§5; Eisenbud-Harris Ch. III
  - beginner: projective varieties built from graded rings
- **notes**: $\mathrm{Proj}(S)$ for graded commutative ring $S$; homogeneous primes excluding the irrelevant ideal $S_+$. Affine cover by distinguished opens $D(f) \cong \mathrm{Spec}((S[f^{-1}])_0)$. Twisting sheaves $\mathcal{O}(d)$. Every projective $k$-scheme embeds in $\mathbb{P}^N_k$. Veronese and Segre embeddings. Closed subschemes correspond to homogeneous ideals. Coherent sheaves correspond to graded modules modulo torsion. Hilbert polynomial / regularity / Hilbert scheme.

### alg-geom.projective-space

- **title**: Projective space
- **prerequisites**: `alg-geom.scheme`, `linalg.vector-space`, `linalg.field`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Grothendieck-Dieudonné EGA II; Eisenbud-Harris
  - intermediate: Hartshorne §I.2, §II.4–§II.5; Vakil §4; Eisenbud-Harris §1
  - beginner: lines through the origin; points-at-infinity completion
- **notes**: $\mathbb{P}^n_k = (k^{n+1} \setminus 0)/k^\times = \mathrm{Proj}\,k[x_0, \ldots, x_n]$. Open affine cover by $U_i = \{x_i \neq 0\}$. Twisting sheaves $\mathcal{O}(d)$, foundational cohomology computation. $\mathrm{Pic}(\mathbb{P}^n) = \mathbb{Z}$. Canonical $\omega = \mathcal{O}(-n-1)$. Functor of points: surjections $R^{n+1} \to L$. Toric perspective. Plücker embedding of Grassmannians. Bézout's theorem.

### alg-geom.riemann-roch-curves

- **title**: Riemann-Roch theorem for curves
- **prerequisites**: `alg-geom.sheaf`, `alg-geom.scheme`, `alg-geom.sheaf-cohomology`
- **tier_anchors**:
  - master: Hartshorne §IV; Mumford *Curves and their Jacobians*; Arbarello-Cornalba-Griffiths-Harris
  - intermediate: Hartshorne §IV.1; Vakil §18; Forster §16; Griffiths-Harris Ch. 2
  - beginner: dimension counting for functions with prescribed singularities
- **notes**: $\ell(D) - \ell(K - D) = \deg(D) - g + 1$ on smooth projective curve of genus $g$. Equivalently $\chi(\mathcal{L}) = \deg(\mathcal{L}) + 1 - g$. Serre duality $H^1(C; \mathcal{L}) \cong H^0(C; \omega_C \otimes \mathcal{L}^{-1})^\vee$. Canonical divisor of degree $2g - 2$. Inductive proof via skyscraper short exact sequences. Hirzebruch and Grothendieck generalisations. Brill-Noether theory and Clifford's theorem for special divisors.

### alg-geom.sheaf-cohomology

- **title**: Sheaf cohomology
- **prerequisites**: `alg-geom.sheaf`, `alg-geom.scheme`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Hartshorne §III; Bott-Tu §13; Iversen; Godement
  - intermediate: Hartshorne §III.1–§III.4; Bott-Tu §10–§13; Iversen Ch. III
  - beginner: global obstructions to local-to-global gluing
- **notes**: $H^i(X; \mathcal{F}) = R^i \Gamma(X, -)$ as right-derived functors of global sections. Long exact sequence in cohomology from short exact sequence of sheaves. Čech cohomology and comparison theorem. Acyclic resolutions: flabby, soft, fine. Serre's vanishing theorem on affine schemes. Grothendieck vanishing in degrees above dimension. Leray spectral sequence. Hodge decomposition for Kähler manifolds. Coherent cohomology of $\mathbb{P}^n$ via $\mathcal{O}(d)$.

### alg-geom.scheme

- **title**: Scheme
- **prerequisites**: `alg-geom.sheaf`, `algebra.associative-algebra`, `algebra.ideal`, `topology.topological-space`
- **tier_anchors**:
  - master: Hartshorne §II; Vakil; Grothendieck-Dieudonné EGA
  - intermediate: Hartshorne §II.2; Vakil Ch. 4; Eisenbud-Harris
  - beginner: ring-as-functions-on-geometric-space intuition
- **notes**: Locally ringed space locally isomorphic to $\mathrm{Spec}(R)$. Anti-equivalence $\mathbf{CRing}^{\mathrm{op}} \cong \mathbf{AffSch}$. Zariski topology, structure sheaf, projective and affine schemes. Functor of points. Reduced vs non-reduced (nilpotents).

### alg-geom.sheaf

- **title**: Sheaf
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Hartshorne §II.1; Godement; Bredon
  - intermediate: Hartshorne §II.1; Vakil §2; Bredon §I
  - beginner: visual local-to-global gluing
- **notes**: Presheaf as contravariant functor from open sets; sheaf axioms (locality + gluing); sheafification; stalks; morphisms; pushforward and pullback adjunction; étale space construction; sheaves form a topos.

### alg-geom.picard-group

- **title**: Picard group
- **prerequisites**: `alg-geom.weil-divisor`, `alg-geom.line-bundle-scheme`, `alg-geom.cartier-divisor`
- **tier_anchors**:
  - master: Hartshorne §II–§III; Vakil; Mumford *Abelian Varieties* Ch. III; Grothendieck FGA exposé 232
  - intermediate: Hartshorne §II.6, §III.4; Vakil §14, §28; Eisenbud-Harris §III
  - beginner: line bundles up to isomorphism, under tensor product
- **notes**: $\mathrm{Pic}(X) = \{\text{line bundles on } X\}/\cong$ under tensor product. Three descriptions: $H^1(X; \mathcal{O}_X^\times)$ via Čech cocycles; Cartier divisor classes $\mathrm{CaCl}(X)$; Weil divisor classes $\mathrm{Cl}(X)$ on locally factorial schemes. Functorial pullback. Picard scheme $\mathrm{Pic}_{X/S}$ representing the relative Picard functor (Grothendieck FGA 1962). $\mathrm{Pic}^0(X)$ as connected component, abelian variety for smooth projective $X$. Néron-Severi $\mathrm{NS}(X) = \mathrm{Pic}(X)/\mathrm{Pic}^0(X)$, finitely generated. Jacobian of a curve as $\mathrm{Pic}^0(C)$. Examples: $\mathrm{Pic}(\mathbb{P}^n) = \mathbb{Z}$, $\mathrm{Pic}(\mathrm{Spec}\,\mathcal{O}_K) = \mathrm{Cl}(\mathcal{O}_K)$. Picard scheme of an abelian variety as dual abelian variety with Poincaré bundle (Mumford).

### alg-geom.ample-line-bundle

- **title**: Ample and very ample line bundle
- **prerequisites**: `alg-geom.line-bundle-scheme`, `alg-geom.coherent-sheaf`, `alg-geom.projective-space`
- **tier_anchors**:
  - master: Hartshorne §II–§III; Vakil; Lazarsfeld *Positivity in Algebraic Geometry* Vol I; Grothendieck EGA II
  - intermediate: Hartshorne §II.7; Vakil §15–§16; Lazarsfeld I
  - beginner: positively curved bundles giving projective embeddings
- **notes**: $\mathcal{L}$ very ample if global sections give a closed immersion $X \hookrightarrow \mathbb{P}^N$; ample if some power $\mathcal{L}^{\otimes m}$ is very ample. Cartan-Serre-Grothendieck: $\mathcal{L}$ ample iff for every coherent $\mathcal{F}$, $\mathcal{F} \otimes \mathcal{L}^{\otimes m}$ is globally generated for $m \gg 0$ iff $H^i(X; \mathcal{F} \otimes \mathcal{L}^{\otimes m}) = 0$ for $i \geq 1$, $m \gg 0$. Numerical (Nakai-Moishezon): on a complete scheme, $\mathcal{L}$ ample iff $\mathcal{L}^{\dim Y} \cdot Y > 0$ for every irreducible closed $Y$. Kleiman criterion for nef. Ample cone in $\mathrm{NS}(X) \otimes \mathbb{R}$, dual to Mori cone of curves. Kodaira embedding theorem (analytic ample = positive line bundle). MMP and the cone theorem.

### alg-geom.stalk-of-sheaf

- **title**: Stalk of a sheaf
- **prerequisites**: `alg-geom.sheaf`
- **tier_anchors**:
  - master: Hartshorne §II.1; Bredon Ch. I; Iversen Ch. II; Godement *Topologie algébrique et théorie des faisceaux*
  - intermediate: Hartshorne §II.1; Vakil §2.4; Bredon §I
  - beginner: germ of a function at a point
- **notes**: $\mathcal{F}_x = \varinjlim_{U \ni x} \mathcal{F}(U)$, the colimit over open neighbourhoods of $x$. Equivalently equivalence classes of pairs $(U, s)$ with $s \in \mathcal{F}(U)$, modulo agreement on a smaller neighbourhood. Stalks of $\mathcal{O}_X$ are local rings. Sheafification produces a sheaf with the same stalks as the input presheaf. Morphisms of sheaves are isomorphisms iff each stalk map is an isomorphism. Skyscraper sheaves. Étale space $\mathrm{\acute{E}t}(\mathcal{F}) = \bigsqcup_x \mathcal{F}_x$ with local-section topology. Leray's 1946 introduction in Oflag XVII-A.

### alg-geom.sheafification

- **title**: Sheafification
- **prerequisites**: `alg-geom.sheaf`, `alg-geom.stalk-of-sheaf`
- **tier_anchors**:
  - master: Hartshorne §II.1; Vakil §2.4; Bredon Ch. I; Godement 1958
  - intermediate: Hartshorne §II.1; Vakil §2.4
  - beginner: gluing local data into a sheaf
- **notes**: Left adjoint $(-)^+ : \mathbf{PSh}(X) \to \mathbf{Sh}(X)$ to the inclusion. Construction via étale-space: $\mathcal{F}^+(U) = \{$continuous sections $s : U \to \mathrm{\acute{E}t}(\mathcal{F})\}$. Universal property: for any sheaf $\mathcal{G}$ and presheaf morphism $\mathcal{F} \to \mathcal{G}$, factors uniquely through $\mathcal{F}^+$. Stalks unchanged: $\mathcal{F}^+_x = \mathcal{F}_x$ for all $x$. Sheafification is exact. For sheaf categories: kernels are presheaf kernels, cokernels and images require sheafification. Foundational tool throughout sheaf theory. Cartan-Serre exposés 1948–55; systematised in Godement 1958.

### alg-geom.direct-inverse-image

- **title**: Direct and inverse image of sheaves
- **prerequisites**: `alg-geom.sheaf`
- **tier_anchors**:
  - master: Hartshorne §II.1; Iversen Ch. III; Kashiwara-Schapira *Sheaves on Manifolds*
  - intermediate: Hartshorne §II.1; Vakil §2.6; Iversen Ch. III
  - beginner: pushforward and pullback of sheaf data along a continuous map
- **notes**: For $f : X \to Y$ continuous, pushforward $f_*\mathcal{F}(V) = \mathcal{F}(f^{-1}(V))$. Inverse image $f^{-1}\mathcal{G}$ is the sheafification of $V \mapsto \varinjlim_{U \supseteq f(V)} \mathcal{G}(U)$. Adjunction $f^{-1} \dashv f_*$ on sheaves of sets. For ringed spaces: pullback $f^*\mathcal{G} = f^{-1}\mathcal{G} \otimes_{f^{-1}\mathcal{O}_Y} \mathcal{O}_X$, adjoint to $f_*$ on $\mathcal{O}$-modules. $f^{-1}$ exact; $f_*$ left exact only. Right derived $R^i f_*$ measure failure. Six functor formalism precursor: Grothendieck *Tôhoku* 1957. Proper base change for $f$ proper, projection formula. Modern: Lurie's $\infty$-categorical six functors; Grothendieck duality $f^!$.

### alg-geom.morphism-of-schemes

- **title**: Morphism of schemes
- **prerequisites**: `alg-geom.scheme`, `alg-geom.affine-scheme`
- **tier_anchors**:
  - master: Hartshorne §II–§III; Vakil; Grothendieck-Dieudonné EGA I, IV
  - intermediate: Hartshorne §II.3; Vakil §6–§9
  - beginner: ring-of-functions reversal of geometric maps
- **notes**: Morphism of locally ringed spaces $(f, f^\sharp) : (X, \mathcal{O}_X) \to (Y, \mathcal{O}_Y)$ with $f$ continuous and $f^\sharp : \mathcal{O}_Y \to f_* \mathcal{O}_X$ a sheaf-of-rings map inducing local-ring maps on stalks. For affine schemes $\mathrm{Hom}(\mathrm{Spec}\,A, \mathrm{Spec}\,B) = \mathrm{Hom}(B, A)$ (anti-equivalence). Properties (EGA IV): finite type, finite presentation, separated, proper, flat, smooth, étale, finite, affine, projective, quasi-finite, quasi-compact. Closed/open immersions. Base change $X \times_Y Z$. Diagonal $\Delta : X \to X \times_Y X$. Valuative criteria for separatedness and properness. Functor of points: $h_X(T) = \mathrm{Hom}(T, X)$. Galois descent and faithfully flat descent for morphisms.

### alg-geom.blowup

- **title**: Blowup
- **prerequisites**: `alg-geom.scheme`, `alg-geom.projective-space`, `alg-geom.cartier-divisor`
- **tier_anchors**:
  - master: Hironaka 1964 *Resolution of Singularities*; Kollár *Lectures on Resolution of Singularities*; Hauser *The Hironaka Theorem*
  - intermediate: Hartshorne §II.7; Vakil §22; Eisenbud-Harris *Geometry of Schemes* §IV.2
  - beginner: replacing a point with the directions through it
- **notes**: $\mathrm{Bl}_Z X = \mathrm{Proj}_X \bigoplus_{n \geq 0} \mathcal{I}^n$, the relative Proj of the Rees algebra. Universal property: minimal surgery making the ideal sheaf invertible. Exceptional divisor as effective Cartier divisor; projective bundle $\mathbb{P}(\mathcal{N}_{Z/X}^\vee)$ for smooth centres. Hironaka 1964 resolution theorem in characteristic 0; weak factorisation; Castelnuovo contraction for surfaces. Open in characteristic $p$ for dimension $\geq 4$.

### alg-geom.sheaf-of-differentials

- **title**: Sheaf of differentials
- **prerequisites**: `alg-geom.scheme`, `alg-geom.coherent-sheaf`, `alg-geom.morphism-of-schemes`
- **tier_anchors**:
  - master: Grothendieck-Dieudonné EGA IV; Liu *Algebraic Geometry and Arithmetic Curves* Ch. 6; Hartshorne §II.8
  - intermediate: Hartshorne §II.8; Vakil §21; Liu Ch. 6
  - beginner: algebraic differentials of functions
- **notes**: $\Omega^1_{X/Y}$ defined by the universal $\mathcal{O}_Y$-linear derivation $d : \mathcal{O}_X \to \Omega^1_{X/Y}$. Corresponds to Kähler differentials $\Omega^1_{R/S}$ on affines. Conormal/normal sheaf exact sequences for closed immersions and smooth morphisms. First fundamental exact sequence $f^*\Omega^1_{Y/Z} \to \Omega^1_{X/Z} \to \Omega^1_{X/Y} \to 0$. Locally free of rank equal to relative dimension on smooth morphisms. Foundation for canonical sheaf and Serre duality.

### alg-geom.canonical-sheaf

- **title**: Canonical sheaf
- **prerequisites**: `alg-geom.sheaf-of-differentials`, `alg-geom.line-bundle-scheme`
- **tier_anchors**:
  - master: Hartshorne §II.8, §III.7; Vakil §21; Iitaka *Algebraic Geometry*
  - intermediate: Hartshorne §II.8; Vakil §21
  - beginner: top-degree differential forms
- **notes**: $\omega_X = \det \Omega^1_X = \bigwedge^n \Omega^1_X$ for smooth variety of dimension $n$. Canonical divisor class $K_X$. $\deg(K_C) = 2g - 2$ on a smooth projective curve. Adjunction formula $\omega_Y = (\omega_X \otimes \mathcal{O}(D))|_Y$ for smooth divisor $Y \subset X$. Dualising sheaf and Serre duality. Riemann's implicit canonical divisor (1857) via everywhere-holomorphic 1-forms. Kodaira dimension classifies birational geometry by canonical-sheaf positivity.

### alg-geom.serre-duality

- **title**: Serre duality
- **prerequisites**: `alg-geom.sheaf-cohomology`, `alg-geom.canonical-sheaf`, `alg-geom.coherent-sheaf`
- **tier_anchors**:
  - master: Hartshorne §III.7; Vakil §30; Hartshorne *Residues and Duality*
  - intermediate: Hartshorne §III.7; Vakil §30
  - beginner: dualities pairing top and bottom cohomology
- **notes**: For smooth projective $X$ of dimension $n$ over a field, $H^i(X; \mathcal{F}) \cong H^{n-i}(X; \mathcal{F}^\vee \otimes \omega_X)^\vee$ for locally free $\mathcal{F}$. Trace map $H^n(X; \omega_X) \to k$. Serre 1955 *Un théorème de dualité*. Grothendieck duality (1966) generalises to proper morphisms via dualising complex $\omega_X^\bullet$. On curves: $H^1(\mathcal{L}) \cong H^0(\omega \otimes \mathcal{L}^{-1})^\vee$, powering Riemann-Roch.

### alg-geom.hodge-decomposition

- **title**: Hodge decomposition
- **prerequisites**: `alg-geom.sheaf-cohomology`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Voisin *Hodge Theory* Vol I Ch. 6; Griffiths-Harris Ch. 0; Wells *Differential Analysis on Complex Manifolds*
  - intermediate: Voisin Vol I Ch. 6; Griffiths-Harris Ch. 0
  - beginner: harmonic forms split by holomorphic type
- **notes**: For compact Kähler $X$, $H^n(X; \mathbb{C}) = \bigoplus_{p+q = n} H^{p,q}(X)$ with $H^{p,q} = H^q(X; \Omega^p)$ and $\overline{H^{p,q}} = H^{q,p}$. Hodge 1941 *Theory and Applications of Harmonic Integrals* — harmonic representatives. Hodge-to-de-Rham degeneration. Algebraic proof: Deligne-Illusie 1987 via reduction mod $p$. Polarised Hodge structures and period domains. Bridges algebra and topology.

### alg-geom.kodaira-vanishing

- **title**: Kodaira vanishing theorem
- **prerequisites**: `alg-geom.sheaf-cohomology`, `alg-geom.ample-line-bundle`, `alg-geom.hodge-decomposition`
- **tier_anchors**:
  - master: Voisin Vol I; Griffiths-Harris Ch. 1; Lazarsfeld *Positivity* Vol I; Esnault-Viehweg *Vanishing Theorems*
  - intermediate: Voisin Vol I; Lazarsfeld Vol I
  - beginner: positivity kills higher cohomology
- **notes**: $H^i(X; \omega_X \otimes L) = 0$ for $i > 0$, $L$ ample on smooth projective complex $X$. Kodaira 1953 (transcendental). Akizuki-Nakano generalisation to $\Omega^p$. Algebraic proof via Deligne-Illusie reduction mod $p$. Kawamata-Viehweg generalisation to nef + big. Kollár's injectivity. Foundational for the minimal model program.

### alg-geom.moduli-of-curves

- **title**: Moduli of curves
- **prerequisites**: `alg-geom.riemann-roch-curves`, `alg-geom.coherent-sheaf`
- **tier_anchors**:
  - master: Harris-Morrison *Moduli of Curves*; Mumford *GIT*; Arbarello-Cornalba-Griffiths *Geometry of Algebraic Curves* Vol II
  - intermediate: Harris-Morrison; Vakil notes; Mumford-Suominen 1972
  - beginner: spaces parameterising curves of genus $g$
- **notes**: $\mathcal{M}_g$ moduli space of smooth genus-$g$ curves; quasi-projective scheme of dimension $3g - 3$ for $g \geq 2$ (Riemann's count, Mumford's GIT construction). Deligne-Mumford compactification $\overline{\mathcal{M}_g}$ via stable curves (1969). Tautological classes $\kappa, \psi, \lambda$. Witten's conjecture (Kontsevich theorem). $\mathcal{M}_{g,n}$ with marked points. Connection to teichmüller theory and string topology.

### alg-geom.git

- **title**: Geometric invariant theory
- **prerequisites**: `alg-geom.scheme`, `lie-groups.lie-group`, `algebra.group-action`
- **tier_anchors**:
  - master: Mumford-Fogarty-Kirwan *GIT* 3rd ed.; Newstead *Lectures on Moduli Problems*; Thomas *Notes on GIT and Symplectic Reduction*; Dolgachev *Lectures on Invariant Theory*
  - intermediate: Mumford-Fogarty-Kirwan; Newstead lectures
  - beginner: quotient varieties via stability
- **notes**: Mumford 1965 *Geometric Invariant Theory*. GIT quotient $X /\!/ G = \mathrm{Proj}\bigoplus_n H^0(X; L^n)^G$ for linearised ample $L$. Stable, semistable, unstable points; Hilbert-Mumford numerical criterion. Symplectic reduction correspondence (Kempf-Ness). Foundational for moduli of vector bundles, varieties, sheaves. Kirwan's stratification of unstable locus. Variation of GIT.

### topology.spectrum

- **title**: Spectrum
- **prerequisites**: `topology.topological-space`, `topology.homotopy`, `topology.suspension`
- **tier_anchors**:
  - master: Adams; Switzer §8–§13; Hovey-Shipley-Smith *Symmetric spectra*; Lurie *Higher Algebra*
  - intermediate: Adams *Stable Homotopy and Generalised Homology* §I; Switzer §8; May Ch. 23
  - beginner: stabilisation intuition
- **notes**: Sequential spectra with structure maps $\Sigma E_n \to E_{n+1}$. $\Omega$-spectra. Stable homotopy groups indexed over $\mathbb{Z}$. Brown representability. Stable homotopy category as triangulated, symmetric monoidal. Examples: sphere, Eilenberg-MacLane, K-theory, bordism. Connection to generalised cohomology theories.

### topology.suspension

- **title**: Suspension
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.homotopy`
- **tier_anchors**:
  - master: Hatcher Ch. 4; May Ch. 8; Switzer §6
  - intermediate: Hatcher §0–§4
  - beginner: cone-and-double-cone visual
- **notes**: Unreduced and reduced suspension. $\Sigma S^n \cong S^{n+1}$. Suspension-loop adjunction. Freudenthal suspension theorem. Stable homotopy as the limit of iterated suspension. Smash product: $\Sigma X = S^1 \wedge X$.

### topology.covering-space

- **title**: Covering space
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.homotopy`
- **tier_anchors**:
  - master: Hatcher §1.3; Bredon §III.3; May Ch. 3
  - intermediate: Hatcher §1.3; Munkres §53
  - beginner: stack-of-sheets visual
- **notes**: Local-product covering maps with discrete fibres. Path-lifting, homotopy-lifting, deck transformation group. Universal cover. Galois correspondence between subgroups of $\pi_1$ and connected covers. Spin double cover $\mathrm{Spin}(n) \to \mathrm{SO}(n)$ as a fundamental example.

### topology.metric-space

- **title**: Metric space
- **prerequisites**: `topology.topological-space`
- **tier_anchors**:
  - master: Bourbaki *General Topology* Ch. IX; Engelking §4.1
  - intermediate: Munkres Ch. 2; Rudin Ch. 2
  - beginner: distance and convergence intuition
- **notes**: Sets equipped with a distance function satisfying positive-definiteness, symmetry, and triangle inequality. Metric topology, Cauchy sequences and completeness, equivalence of metrics generating the same topology, completion. Banach fixed-point theorem, Heine-Borel, Arzelà-Ascoli, Stone-Weierstrass, Baire category. Bridge from topology to functional analysis.

### functional-analysis.banach-space

- **title**: Banach space
- **prerequisites**: `linalg.vector-space`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §III; Conway §III
  - intermediate: complete normed vector spaces and closed-subspace theorem
  - beginner: completeness as no missing limits
- **notes**: Complete normed vector spaces; foundation for bounded linear operators, compact operators, Fredholm theory, and PDE estimates.

### functional-analysis.normed-vector-space

- **title**: Normed vector space
- **prerequisites**: `linalg.vector-space`, `topology.metric-space`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §III; Conway §III
  - intermediate: norms, induced metric, and continuity of linear maps
  - beginner: vector spaces with a length measurement
- **notes**: Norm axioms, induced metric, norm topology, continuous linear maps, equivalent norms in finite dimension, and foundation for Banach spaces.

### functional-analysis.inner-product-space

- **title**: Inner product space
- **prerequisites**: `functional-analysis.normed-vector-space`, `linalg.bilinear-form`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §II; Conway §I
  - intermediate: Cauchy-Schwarz, induced norm, orthogonality
  - beginner: dot-product geometry beyond finite dimensions
- **notes**: Inner products, induced norm, Cauchy-Schwarz inequality, orthogonality, projection geometry, parallelogram identity, and foundation for Hilbert spaces.

### functional-analysis.hilbert-space

- **title**: Hilbert space
- **prerequisites**: `linalg.vector-space`, `linalg.bilinear-form`, `functional-analysis.banach-space`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §II; Conway §I
  - intermediate: inner products, Cauchy-Schwarz, and completeness
  - beginner: dot-product geometry for functions and infinite lists
- **notes**: Complete inner-product spaces; supplies orthogonality, projection, adjoints, and state-space language for quantum theory and CFT.

### functional-analysis.unbounded-self-adjoint

- **title**: Unbounded self-adjoint operators
- **prerequisites**: `functional-analysis.hilbert-space`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §VIII; Kato §V
  - intermediate: domains, adjoints, symmetry, and self-adjointness
  - beginner: operators as rules with allowed inputs
- **notes**: Densely defined unbounded operators on Hilbert spaces, adjoints, symmetric versus self-adjoint operators, closed graph, deficiency spaces, and spectral calculus.

### functional-analysis.bounded-operators

- **title**: Bounded linear operators
- **prerequisites**: `functional-analysis.banach-space`, `linalg.vector-space`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §III–§VI; Conway §II–§VII; Pedersen *Analysis Now*
  - intermediate: Reed-Simon Vol. I §III; Conway §II
  - beginner: stretching/squashing operations between sequence and function spaces
- **notes**: Linear operators between normed spaces, operator norm, equivalence of boundedness and continuity, Banach-space structure of $\mathcal{B}(X, Y)$, submultiplicativity, Banach algebra structure. Banach-Steinhaus, open mapping, closed graph. Adjoints in Hilbert space and the C*-identity. Spectrum and spectral radius.

### functional-analysis.compact-operators

- **title**: Compact operators
- **prerequisites**: `functional-analysis.bounded-operators`, `functional-analysis.banach-space`, `linalg.vector-space`
- **tier_anchors**:
  - master: Reed-Simon Vol. I §VI; Conway §II–§VII; Schaefer §III
  - intermediate: Reed-Simon Vol. I §VI; Conway §II.4
  - beginner: "almost finite-dimensional" operators that turn bounded sets relatively compact
- **notes**: Bounded linear operators sending bounded sets to relatively compact sets. Closed two-sided ideal in $\mathcal{B}(X)$. Density of finite-rank operators in $\mathcal{K}(\mathcal{H})$ (Hilbert spaces). Schauder's theorem (compactness of adjoint). Riesz-Schauder spectral theorem. Hilbert-Schmidt and trace-class refinements (Schatten ideals). Calkin algebra $\mathcal{B}/\mathcal{K}$ as the home of Fredholm theory.

### functional-analysis.fredholm.operators

- **title**: Fredholm operators
- **prerequisites**: `functional-analysis.bounded-linear-operators`, `functional-analysis.banach-space`, `functional-analysis.compact-operators`
- **tier_anchors**:
  - master: Lawson-Michelsohn §III.7; Booss-Bavnbek & Wojciechowski (Elliptic Boundary Problems for Dirac Operators)
  - intermediate: Reed-Simon Vol. 1 §VI Theorems VI.10–VI.13
  - beginner: Strogatz — Infinite Powers (analogous level)
- **notes**: Bounded operators with finite-dimensional kernel, closed range, finite-dimensional cokernel. Index = $\dim \ker - \dim \mathrm{coker}$ is the central invariant. Atkinson: Fredholm iff invertible modulo compacts. Stable under compact and small-norm perturbations. Foundation for the Atiyah-Singer index theorem.

### char-classes.chern-weil.homomorphism

- **title**: Chern-Weil homomorphism
- **prerequisites**: `bundle.principal-bundle`, `diffgeo.connection.connection`, `diffgeo.connection.curvature`, `lie-algebra.lie-algebra`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. II Ch. XII; Milnor-Stasheff Appendix C
  - intermediate: Bott-Tu characteristic-class chapters
  - beginner: 3Blue1Brown / Strogatz analogous visual local-to-global level
- **notes**: Invariant polynomials on a Lie algebra evaluated on curvature forms. Produces closed de Rham classes independent of connection; natural under pullback. Gateway from connections and gauge curvature to characteristic classes.

### bundle.principal-bundle

- **title**: Principal bundle
- **prerequisites**: `topology.topological-space`, `diffgeo.smooth-manifold`, `lie-groups.lie-group`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. I §I.5; Steenrod §8; Husemoller §4
  - intermediate: Steenrod §8; Husemoller §4
  - beginner: visual local-product and symmetry-fiber account analogous to 3Blue1Brown / Strogatz pacing
- **notes**: Smooth principal right $G$-bundles, free transitive fiber action, local product charts, transition functions and cocycles, associated bundles, pullbacks, reductions of structure group, and gauge transformations. Connections and curvature are separate units.

### bundle.vector-bundle

- **title**: Vector bundle
- **prerequisites**: `linalg.vector-space`, `topology.topological-space`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Milnor-Stasheff §2; Husemoller §3; Atiyah *K-Theory* §1.1
  - intermediate: Milnor-Stasheff §2; Husemoller §3
  - beginner: visual fiber-over-base account analogous to 3Blue1Brown / Strogatz pacing
- **notes**: Finite-rank real and complex vector bundles, local linear product charts, sections, transition functions into $\operatorname{GL}_n$, frame bundles, associated-bundle equivalence, pullback, direct sum, tensor product, duals, and relation to K-theory and characteristic classes.

### bundle.sphere-bundle-hopf-index

- **title**: Sphere bundle, the global angular form, and the Hopf index theorem
- **unit**: `03.05.10`
- **prerequisites**: `bundle.vector-bundle`, `bundle.frame-bundle.orthonormal`, `char-classes.pontryagin-chern.definitions`, `diffgeo.de-rham.thom-cv-cohomology`
- **tier_anchors**:
  - master: Bott-Tu §11; Milnor *Topology from the Differentiable Viewpoint* §6
  - intermediate: Bott-Tu §11
  - beginner: visual hairy-ball / cowlick account analogous to Strogatz / 3Blue1Brown pacing
- **notes**: Oriented sphere bundle as the unit-sphere bundle of an oriented rank-$r$ real vector bundle with $SO(r)$ structure group. Global angular form $\psi \in \Omega^{r-1}(S(E))$ characterised by fibre-integral $1$ and $d\psi = -\pi^\ast e(E)$. Euler class of an oriented sphere bundle equals the Euler class of the associated vector bundle. Hopf index theorem $\sum_p \mathrm{ind}_p(V) = \chi(M)$ for a vector field with isolated zeros. Poincaré-Hopf as the Morse-function specialisation. Worked examples: $e(TS^{2n})$ as twice the generator, Hopf bundle Euler class $-h$ on $\mathbb{C}P^1$. Bott-Tu §11 originator-text for the global-angular-form derivation; Hopf 1926 *Vektorfelder in $n$-dimensionalen Mannigfaltigkeiten* (Math. Ann. 96) for the original index theorem.

### diffgeo.connection.vector-bundle-connection

- **title**: Connection on a vector bundle
- **prerequisites**: `bundle.vector-bundle`, `manifold.smooth`, `diffgeo.differential-forms`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. I §III; Milnor-Stasheff Appendix C
  - intermediate: covariant derivative and affine-space theorem
  - beginner: parallel comparison of nearby fibers
- **notes**: Covariant derivatives on vector bundles, Leibniz rule, local connection forms, affine space modeled on End(E)-valued one-forms, induced connections, and curvature.

### bundle.complex-vector-bundle

- **title**: Complex vector bundle
- **prerequisites**: `bundle.vector-bundle`, `linalg.vector-space`
- **tier_anchors**:
  - master: Milnor-Stasheff §14–§17; Wells *Differential Analysis on Complex Manifolds*
  - intermediate: Milnor-Stasheff §14; Atiyah K-Theory §1.4
  - beginner: visual complex-line-bundle and Chern-class twist
- **notes**: Smooth complex vector bundles via $J^2 = -\mathrm{id}$ structure or via $\mathrm{GL}_n(\mathbb{C})$ cocycles. Hermitian metrics and reduction to $U(n)$. Direct sum, tensor, dual, conjugate, complexification, realification. Self-conjugacy of $V_\mathbb{C}$ and 2-torsion of odd Chern classes (motivating Pontryagin classes). Holomorphic bundles, Chern connections, K-theory.

### bundle.connection.curvature

- **title**: Curvature of a connection
- **prerequisites**: `bundle.principal-bundle`, `diffgeo.connection.vector-bundle-connection`, `diffgeo.connection.connection`, `lie-algebra.lie-algebra`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. I §III; Donaldson-Kronheimer §2
  - intermediate: Kobayashi-Nomizu Vol. I §III.5; Milnor-Stasheff Appendix C
  - beginner: visual parallel-transport-around-a-loop intuition
- **notes**: Curvature 2-form on a principal bundle, Cartan structure equation, Bianchi identity. Vector-bundle curvature as $\mathrm{End}(E)$-valued 2-form. Gauge covariance of curvature. Frobenius integrability of horizontal distribution. Ambrose-Singer holonomy theorem. Riemann tensor / Ricci / scalar curvature as the metric-affine special case.

### diffgeo.connection.connection

- **title**: Principal bundle with connection
- **prerequisites**: `bundle.principal-bundle`, `lie-groups.lie-group`, `lie-algebra.lie-algebra`, `diffgeo.differential-forms`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. I §II; Steenrod §17
  - intermediate: connection forms and horizontal distributions
  - beginner: horizontal lift and pure gauge motion
- **notes**: Principal connections as Lie-algebra-valued one-forms or equivariant horizontal distributions; local gauge potentials, gauge transformations, associated vector-bundle connections, and curvature.

### topology.de-rham-cohomology

- **title**: De Rham cohomology
- **prerequisites**: `diffgeo.smooth-manifold`, `diffgeo.differential-forms`, `diffgeo.exterior-derivative`, `diffgeo.stokes-theorem`
- **tier_anchors**:
  - master: Bott-Tu §I; Madsen-Tornehave; Spivak Vol. I
  - intermediate: Bott-Tu §I; Spivak Vol. I differential forms
  - beginner: circulation-and-holes account analogous to 3Blue1Brown / Strogatz pacing
- **notes**: Defines $H^k_{\mathrm{dR}}(M)=\ker d/\operatorname{im}d$, exact forms, closed forms, functorial pullback, wedge product, Poincare lemma, de Rham theorem, and integration pairing with cycles. Provides the cohomology target for Chern-Weil representatives.

### diffgeo.integration-on-manifolds

- **title**: Integration on manifolds
- **prerequisites**: `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Spivak Vol. I §11; Bott-Tu §I.3; Madsen-Tornehave §10
  - intermediate: compactly supported top forms, partitions of unity, orientation
  - beginner: signed local contributions patched globally
- **notes**: Integration of compactly supported top-degree forms on oriented manifolds, partitions of unity, change of variables, orientation reversal, boundary orientation, and Stokes-compatible formalism.

### diffgeo.variational-calculus

- **title**: Variational calculus on manifolds
- **prerequisites**: `diffgeo.integration-on-manifolds`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Arnold §III.12; Spivak Vol. I §10
  - intermediate: first variation and Euler-Lagrange equation
  - beginner: optimizing paths and fields by tiny changes
- **notes**: Action functionals, variations, first variation, Euler-Lagrange equations, integration by parts, boundary terms, and gauge-theoretic variational formulas.

### char-classes.pontryagin-chern.definitions

- **title**: Pontryagin and Chern classes
- **prerequisites**: `char-classes.chern-weil.homomorphism`, `bundle.vector-bundle`, `topology.de-rham-cohomology`, `linalg.vector-space`
- **tier_anchors**:
  - master: Milnor-Stasheff Chs. 14-15 and Appendix C; Kobayashi-Nomizu Vol. II Ch. XII
  - intermediate: Bott-Tu characteristic-class chapters
  - beginner: 3Blue1Brown / Strogatz analogous global-twisting level
- **notes**: Chern classes for complex vector bundles, Pontryagin classes for real bundles via complexification, splitting principle, Whitney product formula, Chern-Weil representatives, and standard examples such as $T\mathbb{CP}^n$.

### k-theory.classifying-spaces

- **title**: Classifying space
- **prerequisites**: `bundle.principal-bundle`, `topology.homotopy`, `topology.topological-space`
- **tier_anchors**:
  - master: Husemoller §4; May §16; Milnor universal-bundle papers
  - intermediate: Husemoller §4 with Bott-Tu style bundle examples
  - beginner: maps as bundle recipes, 3Blue1Brown / Strogatz analogous level
- **notes**: Universal principal bundles, pullback classification, homotopy invariance, numerable bundles, and the role of $BU(n)$ and $BO(n)$ in characteristic classes and K-theory.

### k-theory.vector-bundles

- **title**: Topological K-theory
- **prerequisites**: `bundle.vector-bundle`, `k-theory.classifying-spaces`, `topology.topological-space`
- **tier_anchors**:
  - master: Atiyah *K-Theory* §1-§2; Husemoller §10
  - intermediate: Atiyah *K-Theory* §1 and Grothendieck completion
  - beginner: vector-bundle bookkeeping and cancellation at Strogatz / 3Blue1Brown analogous level
- **notes**: Grothendieck group of vector bundles, direct sum, virtual bundles, reduced K-theory, pullback functoriality, and preparation for Bott periodicity.

### topology.eilenberg-maclane

- **title**: Eilenberg-MacLane space
- **prerequisites**: `topology.topological-space`, `topology.homotopy`, `topology.spectrum`
- **tier_anchors**:
  - master: Hatcher §4.K; May Ch. 22; Switzer §10
  - intermediate: Hatcher §4.K; May Ch. 22
  - beginner: one-degree-of-freedom homotopy
- **notes**: Spaces $K(A, n)$ with $\pi_n = A$ and other $\pi_k = 0$. Uniqueness up to weak equivalence. Loop-space characterisation. Representability of ordinary cohomology: $H^n(X; A) \cong [X, K(A, n)]$. Postnikov towers. Cohomology operations and the Steenrod algebra.

### homotopy.stable-homotopy

- **title**: Stable homotopy
- **prerequisites**: `topology.homotopy`, `topology.suspension`, `topology.sphere`
- **tier_anchors**:
  - master: Hatcher §4; Switzer §8; Adams §I
  - intermediate: suspension, stable range, and stable homotopy groups
  - beginner: patterns that stop changing after repeated suspension
- **notes**: Suspension, stable homotopy groups, spectra-level intuition, Freudenthal stabilization, stable phenomena behind generalized cohomology theories, and the stable classical-group context for Bott periodicity.

### k-theory.bott.periodicity

- **title**: Bott periodicity
- **prerequisites**: `k-theory.vector-bundles`, `k-theory.classifying-spaces`, `spin-geometry.clifford.clifford-algebra`, `char-classes.pontryagin-chern.definitions`
- **tier_anchors**:
  - master: Atiyah *K-Theory* §2; Milnor *Morse Theory* §23; Lawson-Michelsohn §I.9
  - intermediate: Atiyah *K-Theory* §2; Bott-Milnor Morse-theoretic account
  - beginner: visual periodic-pattern account analogous to 3Blue1Brown / Strogatz pacing
- **notes**: Complex K-theory has period $2$ and real K-theory has period $8$. The unit treats the classifying-space form, coefficient tables, Bott elements, Clifford-module source of real periodicity, and the role of Bott periodicity in the topological index.

### gauge-theory.yang-mills.action

- **title**: Yang-Mills action
- **prerequisites**: `bundle.principal-bundle`, `diffgeo.connection.connection`, `diffgeo.connection.curvature`, `lie-algebra.lie-algebra`, `topology.de-rham-cohomology`, `char-classes.chern-weil.homomorphism`
- **tier_anchors**:
  - master: Atiyah-Bott, "The Yang-Mills equations over Riemann surfaces"; Donaldson-Kronheimer §2
  - intermediate: Tong *Gauge Theory* §2; Donaldson-Kronheimer §2
  - beginner: visual curvature-energy account analogous to 3Blue1Brown / Strogatz pacing
- **notes**: Defines $\operatorname{YM}(A)=\frac12\|F_A\|_{L^2}^2$, proves gauge invariance, derives $d_A^*F_A=0$, relates four-dimensional self-duality to Yang-Mills, and separates metric-dependent action from Chern-Weil topological classes.

### physics.cft.basics

- **title**: CFT basics
- **prerequisites**: `functional-analysis.hilbert-space`, `lie-algebra.central-extension`, `lie-algebra.infinite-dimensional-representations`, `lie-algebra.virasoro`
- **tier_anchors**:
  - master: Di Francesco-Mathieu-Sénéchal §5; Polchinski Vol. 1 §2; Tong *String Theory* §4
  - intermediate: Tong *String Theory* §4
  - beginner: visual local-angle-preserving symmetry account analogous to 3Blue1Brown / Strogatz pacing
- **notes**: Introduces two-dimensional conformal symmetry, primary fields, stress tensor, Witt and Virasoro algebras, central charge, OPEs, radial quantization, and the state-operator correspondence.

### index-theory.atiyah-singer.index-theorem

- **title**: Atiyah-Singer index theorem
- **prerequisites**: `functional-analysis.fredholm.operators`, `spin-geometry.dirac.dirac-operator`, `k-theory.bott.periodicity`, `char-classes.pontryagin-chern.definitions`, `char-classes.chern-weil.homomorphism`, `diffgeo.elliptic-operators`
- **tier_anchors**:
  - master: Atiyah-Singer Annals I and III; Lawson-Michelsohn §III; Berline-Getzler-Vergne
  - intermediate: Atiyah-Singer statement with Bott-Tu style symbol/K-theory pacing
  - beginner: invariant-counting bridge between solutions and topology
- **notes**: States $\operatorname{ind}_a(D)=\operatorname{ind}_t([\sigma(D)])$, explains symbol K-theory and Bott-periodic topological index, specializes to the spin Dirac formula $\langle\widehat A(TM)\operatorname{ch}(E),[M]\rangle$, and connects heat-kernel local index theory to Chern-Weil forms.

### spin-geometry.spin-group

- **title**: Spin group $\mathrm{Spin}(n)$
- **prerequisites**: `linalg.bilinear-form`, `spin-geometry.clifford.clifford-algebra`, `lie-groups.connected-double-cover`
- **tier_anchors**:
  - master: Lawson-Michelsohn §I.2.9
  - intermediate: Clifford-algebra construction via even products of unit vectors
  - beginner: quaternionic double-cover intuition
- **notes**: Connected double cover of $\mathrm{SO}(n)$ for $n \geq 3$. Even part of the Pin group. Realizes universal cover for $n = 3$. Spin(4) is SU(2) × SU(2). Spin(6) is SU(4).

### diffgeo.operator.symbol

- **title**: Symbol of a differential operator
- **prerequisites**: `linalg.vector-space`, `diffgeo.smooth-manifold`, `bundle.vector-bundle`
- **tier_anchors**:
  - master: Hörmander Vol. III §18; Lawson-Michelsohn §III.1
  - intermediate: local leading-order formula and composition theorem
  - beginner: highest-order behavior under magnification
- **notes**: Principal symbols of linear differential operators, order filtration, lower-order quotient, composition rule, cotangent-bundle interpretation, and Dirac symbol.

### diffgeo.elliptic-operators

- **title**: Elliptic operators on a manifold
- **prerequisites**: `diffgeo.operator.symbol`, `functional-analysis.unbounded-self-adjoint`, `bundle.vector-bundle`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Lawson-Michelsohn §III.5; Hörmander Vol. III §19; Wells §IV
  - intermediate: principal-symbol invertibility and Laplacian example
  - beginner: no symbolic blind directions
- **notes**: Elliptic differential operators, invertible principal symbols off the zero section, Laplacian and Dirac examples, parametrices, elliptic regularity, Fredholmness, and symbol K-theory class.

### char-classes.invariant-polynomial.adjoint-invariant

- **title**: Invariant polynomial on a Lie algebra
- **prerequisites**: `lie-algebra.lie-algebra`, `linalg.vector-space`, `linalg.bilinear-form`
- **tier_anchors**:
  - master: Kobayashi-Nomizu Vol. II §XII; Chevalley-Eilenberg 1948
  - intermediate: Kobayashi-Nomizu Vol. II §XII.1; Milnor-Stasheff Appendix C
  - beginner: trace, determinant, basis-independent measurements
- **notes**: Symmetric multilinear $G$-invariant functions on a Lie algebra; the algebra $S^\bullet(\mathfrak{g}^\ast)^G$. Group/Lie-algebra invariance equivalence for connected $G$. Generators for matrix Lie algebras: $\mathrm{tr}(A^k)$, elementary symmetric polynomials of eigenvalues, Pfaffian for $\mathfrak{so}$. Chevalley's restriction theorem. The input to Chern-Weil theory.

### lie-algebra.lie-algebra

- **title**: Lie algebra
- **prerequisites**: `linalg.vector-space`
- **tier_anchors**:
  - master: Humphreys §1; Fulton-Harris §8; Serre Part I; Bourbaki Ch. I
  - intermediate: bracket axioms, Jacobi identity, classical matrix Lie algebras
  - beginner: infinitesimal symmetries and the failure of two flows to commute
- **notes**: Lie algebras as vector spaces with a bilinear, antisymmetric, Jacobi-respecting bracket; classical examples $\mathfrak{gl}_n$, $\mathfrak{sl}_n$, $\mathfrak{so}_n$, $\mathfrak{u}_n$; the adjoint representation; ideals and homomorphisms; the commutator-on-an-associative-algebra construction. The Killing form, simple/semisimple/solvable structure, Cartan classification, and the exponential map / BCH formula are at Master tier.

### lie-algebra.central-extension

- **title**: Central extension of a Lie algebra
- **prerequisites**: `lie-algebra.lie-algebra`
- **tier_anchors**:
  - master: Kac §1; Pressley-Segal §4
  - intermediate: 2-cocycles and one-dimensional central extensions
  - beginner: hidden commuting correction term
- **notes**: Central extensions of Lie algebras, one-dimensional extensions by 2-cocycles, coboundary equivalence, relation to projective representations, and Virasoro central charge.

### lie-algebra.infinite-dimensional-representations

- **title**: Infinite-dimensional Lie algebra representations
- **prerequisites**: `lie-algebra.lie-algebra`, `lie-algebra.central-extension`, `functional-analysis.hilbert-space`
- **tier_anchors**:
  - master: Kac §2-§9; Pressley-Segal §11
  - intermediate: modules over Lie algebras, Schur lemma, central charge
  - beginner: symmetries acting on infinitely many states
- **notes**: Lie algebra representations on infinite-dimensional vector spaces, modules, highest-weight representations, central elements acting by scalars under irreducibility hypotheses, and the representation-theoretic bridge from central extensions to CFT.

### lie-algebra.virasoro

- **title**: Virasoro algebra
- **prerequisites**: `lie-algebra.central-extension`, `lie-algebra.infinite-dimensional-representations`
- **tier_anchors**:
  - master: Kac §1.3; Pressley-Segal §13; Di Francesco-Mathieu-Sénéchal §6
  - intermediate: Witt algebra, central extension, and highest-weight modules
  - beginner: symmetry modes with a central charge
- **notes**: Witt algebra of Laurent vector fields, Virasoro central extension, Gelfand-Fuchs cocycle, central charge, highest-weight modules, and the CFT stress-tensor mode algebra.

### (more entries added as DAG grows)

---

## Adding an entry — checklist

Before adding a concept to the catalog:

- [ ] Is this actually atomic, or should it be split into multiple concepts?
- [ ] Do the declared prerequisites form the *minimal* necessary set? (Over-declaration bloats the DAG; under-declaration creates broken prereq chains.)
- [ ] Is the tier anchor a real, concrete book section? "Kobayashi-Nomizu Vol 1" isn't enough — needs "Ch. III §2" or similar.
- [ ] Does this concept belong in scope v1 (math + physics)?

---

*This catalog will grow significantly during pilot. Each unit produced adds (or validates) its catalog entry before production begins.*
## Symplectic geometry (v0.5 Strand B)

### symplectic-geometry.symplectic-vector-space

- **title**: Symplectic vector space
- **prerequisites**: `01.01.03`, `01.01.15`
- **tier_anchors**:
  - master: Cannas da Silva Lectures on Symplectic Geometry §1; Arnold Mathematical Methods §VIII
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A vector space with a nondegenerate skew form. Central theorem: standard symplectic basis theorem. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.symplectic-manifold

- **title**: Symplectic manifold
- **prerequisites**: `03.02.01`, `03.04.02`, `03.04.04`, `05.01.01`
- **tier_anchors**:
  - master: Cannas da Silva §1-§3; Arnold §44
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A smooth manifold with a closed nondegenerate 2-form. Central theorem: symplectic volume form theorem. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.symplectic-group

- **title**: Symplectic group
- **prerequisites**: `03.03.01`, `03.03.03`, `05.01.01`
- **tier_anchors**:
  - master: Cannas da Silva §1; Hall Lie Groups Ch. 1
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: The linear transformations preserving a symplectic form. Central theorem: matrix criterion for the symplectic group. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.darboux-theorem

- **title**: Darboux's theorem
- **prerequisites**: `05.01.02`, `03.04.04`
- **tier_anchors**:
  - master: Cannas da Silva §8; Arnold §43-§44
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: The local normal form for every symplectic form. Central theorem: Darboux local coordinate theorem. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.hamiltonian-vector-field

- **title**: Hamiltonian vector field
- **prerequisites**: `05.01.02`, `03.04.04`
- **tier_anchors**:
  - master: Arnold §44; Cannas da Silva §18
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: The vector field determined by a function and the symplectic form. Central theorem: Hamiltonian flow preserves the symplectic form. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.poisson-bracket

- **title**: Poisson bracket and Poisson manifold
- **prerequisites**: `05.02.01`, `03.04.01`
- **tier_anchors**:
  - master: Cannas da Silva §18; Marsden-Ratiu §10
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A lie bracket on functions encoding hamiltonian dynamics. Central theorem: Poisson bracket satisfies Jacobi identity. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.integrable-system

- **title**: Integrable system
- **prerequisites**: `05.02.01`, `05.02.02`
- **tier_anchors**:
  - master: Arnold §49-§50; Cannas da Silva §27
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: Many commuting conserved quantities on a symplectic manifold. Central theorem: commuting Hamiltonians preserve common level sets. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.action-angle-coordinates

- **title**: Action-angle coordinates
- **prerequisites**: `05.02.03`, `05.01.04`
- **tier_anchors**:
  - master: Arnold §50; Cannas da Silva §27
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: Canonical coordinates near compact invariant tori. Central theorem: Liouville-Arnold local normal form. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.cotangent-bundle

- **title**: Cotangent bundle as canonical symplectic manifold
- **prerequisites**: `03.02.01`, `03.04.02`, `03.04.04`, `05.01.02`
- **tier_anchors**:
  - master: Arnold §37-§44; Cannas da Silva §2
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: The natural symplectic form on a cotangent bundle. Central theorem: canonical one-form gives the cotangent symplectic form. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.coadjoint-orbit

- **title**: Coadjoint orbit
- **prerequisites**: `03.03.01`, `03.04.01`, `05.02.02`
- **tier_anchors**:
  - master: Kirillov Lectures on the Orbit Method; Marsden-Ratiu §14
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: An orbit in the dual of a lie algebra with a natural symplectic form. Central theorem: Kirillov-Kostant-Souriau form is symplectic. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.moment-map

- **title**: Moment map
- **prerequisites**: `03.03.02`, `05.02.01`, `05.02.02`
- **tier_anchors**:
  - master: Cannas da Silva §22; Marsden-Ratiu §11-§12
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A map whose components generate an infinitesimal group action. Central theorem: moment map components are Hamiltonians for fundamental fields. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.symplectic-reduction

- **title**: Marsden-Weinstein symplectic reduction
- **prerequisites**: `05.04.01`, `03.03.02`, `05.01.02`
- **tier_anchors**:
  - master: Marsden-Weinstein 1974; Cannas da Silva §23
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A quotient construction producing a smaller symplectic manifold. Central theorem: regular reduction theorem. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.lagrangian-submanifold

- **title**: Lagrangian submanifold
- **prerequisites**: `05.01.02`, `03.02.01`
- **tier_anchors**:
  - master: Cannas da Silva §3 §6; Arnold §44C
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A half-dimensional submanifold on which the symplectic form vanishes. Central theorem: graph of a closed one-form is Lagrangian. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.almost-complex-structure

- **title**: Almost-complex structure on a symplectic manifold
- **prerequisites**: `05.01.02`, `03.05.02`
- **tier_anchors**:
  - master: McDuff-Salamon Introduction to Symplectic Topology §2; Cannas da Silva §13
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: An endomorphism squaring to minus identity compatible with the symplectic form. Central theorem: compatible almost-complex structures exist. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.pseudoholomorphic-curve

- **title**: Pseudoholomorphic curve
- **prerequisites**: `05.06.01`, `03.02.01`
- **tier_anchors**:
  - master: Gromov 1985; McDuff-Salamon §2-§3
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A surface whose tangent map intertwines complex structures. Central theorem: energy-area identity for pseudoholomorphic curves. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.non-squeezing

- **title**: Gromov non-squeezing theorem
- **prerequisites**: `05.01.02`, `05.06.02`
- **tier_anchors**:
  - master: McDuff-Salamon §2.4; Gromov 1985
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: The rigidity theorem forbidding symplectic squeezing of a ball into a thin cylinder. Central theorem: Gromov non-squeezing theorem. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.symplectic-capacity

- **title**: Symplectic capacity
- **prerequisites**: `05.07.01`, `05.01.02`
- **tier_anchors**:
  - master: Hofer-Zehnder; McDuff-Salamon §12
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A numerical invariant measuring symplectic size. Central theorem: capacity monotonicity under symplectic embeddings. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.arnold-conjecture

- **title**: Arnold conjecture and Floer homology setup
- **prerequisites**: `05.02.01`, `05.05.01`, `05.06.02`, `05.07.02`
- **tier_anchors**:
  - master: Audin-Damian Morse Theory and Floer Homology §10; Donaldson-Kronheimer §1
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: Fixed points of hamiltonian diffeomorphisms counted through floer theory. Central theorem: Arnold fixed-point lower bound statement. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.floer-homology

- **title**: Floer homology
- **prerequisites**: `05.08.01`, `05.06.02`
- **tier_anchors**:
  - master: Floer original papers; Audin-Damian §10
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: A homology theory generated by hamiltonian orbits or lagrangian intersections. Central theorem: boundary squares to zero under compactness and gluing. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.maslov-index

- **title**: Maslov index
- **prerequisites**: `05.05.01`, `05.01.01`
- **tier_anchors**:
  - master: Arnold; Audin-Damian §6
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: An integer measuring winding of lagrangian subspaces. Central theorem: Maslov index is homotopy invariant with fixed endpoints. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.

### symplectic-geometry.conley-zehnder-index

- **title**: Conley-Zehnder index
- **prerequisites**: `05.01.03`, `05.08.03`, `05.02.01`
- **tier_anchors**:
  - master: Conley-Zehnder; Salamon-Zehnder
  - intermediate: formal definitions, canonical theorem, and worked computations
  - beginner: phase-space and paired-direction intuition
- **notes**: An index grading nondegenerate hamiltonian periodic orbits. Central theorem: Conley-Zehnder index changes by Maslov index under loop composition. Used in the v0.5 symplectic geometry strand for Hamiltonian dynamics, reduction, rigidity, and Floer-theoretic constructions.
## Statistical mechanics and lattice models (v0.5 Strand E)

### stat-mech.partition-function

- **title**: Partition function (statistical mechanics)
- **prerequisites**: `00.02.05`
- **tier_anchors**:
  - master: Kardar Statistical Physics of Fields Ch. 1; Pathria-Beale Ch. 3
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The weighted sum of all allowed states in a statistical system. Central theorem: thermodynamic derivatives of log partition function. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.ising-model

- **title**: Ising model
- **prerequisites**: `08.01.01`
- **tier_anchors**:
  - master: Baxter Exactly Solved Models §1; Kardar Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A lattice model whose spins take two values and interact with neighbors. Central theorem: one-dimensional Ising transfer-matrix solution. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.boltzmann-distribution

- **title**: Boltzmann distribution and canonical ensemble
- **prerequisites**: `08.01.01`
- **tier_anchors**:
  - master: Kardar Ch. 1; Pathria-Beale Ch. 3
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The probability rule assigning lower weight to higher energy at fixed temperature. Central theorem: canonical distribution maximizes entropy with fixed mean energy. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.free-energy

- **title**: Free energy
- **prerequisites**: `08.01.01`, `08.01.03`
- **tier_anchors**:
  - master: Kardar Ch. 1; Goldenfeld Ch. 2
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The thermodynamic potential obtained from the logarithm of the partition function. Central theorem: free energy generates canonical thermodynamics. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.mean-field

- **title**: Mean-field theory and Curie-Weiss model
- **prerequisites**: `08.01.02`, `08.01.04`
- **tier_anchors**:
  - master: Kardar Ch. 4; Goldenfeld Ch. 4
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: An approximation replacing many neighbors by an average field. Central theorem: Curie-Weiss self-consistency equation. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.spontaneous-symmetry-breaking

- **title**: Spontaneous symmetry breaking
- **prerequisites**: `08.02.01`, `01.02.01`
- **tier_anchors**:
  - master: Goldenfeld Ch. 4; Kardar Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The selection of asymmetric equilibrium states from symmetric equations. Central theorem: mean-field double-well criterion for broken symmetry. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.mermin-wagner

- **title**: Mermin-Wagner theorem
- **prerequisites**: `08.02.02`, `02.01.05`
- **tier_anchors**:
  - master: Mermin-Wagner 1966; Goldenfeld Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A low-dimensional obstruction to breaking continuous symmetries at positive temperature. Central theorem: absence of continuous-symmetry long-range order in two dimensions. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.onsager-solution

- **title**: Onsager solution of the 2D Ising model (transfer matrix)
- **prerequisites**: `08.01.02`, `08.03.02`
- **tier_anchors**:
  - master: Onsager 1944; Baxter §7; Kardar Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The exact solution locating the two-dimensional ising critical point. Central theorem: Onsager critical temperature formula. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.transfer-matrix

- **title**: Transfer matrix
- **prerequisites**: `01.01.03`, `02.11.01`
- **tier_anchors**:
  - master: Baxter §1; Kardar Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A linear operator that advances a lattice model one slice at a time. Central theorem: largest eigenvalue controls thermodynamic free energy. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.real-space-rg

- **title**: Renormalisation group (real-space block decimation)
- **prerequisites**: `08.01.02`, `08.01.04`
- **tier_anchors**:
  - master: Kadanoff 1966; Wilson-Kogut 1974; Kardar Ch. 6
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A scale-changing transformation on statistical systems. Central theorem: fixed points organize long-distance behavior. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.wilson-fisher

- **title**: Wilson-Fisher fixed point and universality
- **prerequisites**: `08.04.01`, `08.06.01`, `08.04.03`
- **tier_anchors**:
  - master: Wilson-Fisher 1972; Kardar Ch. 7
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The non-gaussian fixed point governing many critical phenomena below four dimensions. Central theorem: epsilon-expansion fixed point to first order. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.beta-function

- **title**: Beta function (renormalisation group)
- **prerequisites**: `08.04.01`
- **tier_anchors**:
  - master: Wilson-Kogut 1974; Kardar Ch. 6
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The vector field describing how couplings change with scale. Central theorem: fixed points are zeros of the beta function. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.block-spin-decimation

- **title**: Block-spin decimation
- **prerequisites**: `08.04.01`
- **tier_anchors**:
  - master: Kadanoff 1966; Goldenfeld Ch. 9
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A concrete coarse-graining map replacing blocks of spins by effective spins. Central theorem: decimation induces effective couplings. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.critical-exponents

- **title**: Critical exponents and scaling laws
- **prerequisites**: `08.02.01`, `08.04.02`, `08.01.04`
- **tier_anchors**:
  - master: Stanley §3; Kardar Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: Numbers measuring power-law behavior near a phase transition. Central theorem: Rushbrooke scaling relation. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.correlation-functions

- **title**: Correlation functions (statistical mechanics)
- **prerequisites**: `08.01.01`, `08.05.01`
- **tier_anchors**:
  - master: Kardar Ch. 5; Goldenfeld Ch. 5
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: Expectations of products of observables at separated points. Central theorem: connected correlations detect fluctuations. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.gaussian-field

- **title**: Gaussian field theory and free boson
- **prerequisites**: `08.05.02`, `02.11.08`
- **tier_anchors**:
  - master: Itzykson-Drouffe Vol. 1 §1; Di Francesco-Mathieu-Senechal §6
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A field theory whose action is quadratic and whose correlations are determined by a green kernel. Central theorem: Gaussian Wick factorization. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.conformal-criticality

- **title**: Conformal symmetry at criticality
- **prerequisites**: `08.05.01`, `08.06.01`, `03.10.02`
- **tier_anchors**:
  - master: Belavin-Polyakov-Zamolodchikov 1984; Polchinski Vol. 1 §4
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: Scale symmetry enhanced by angle-preserving transformations at critical points. Central theorem: two-dimensional primary-field two-point form. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.path-integral

- **title**: Path integral formulation of statistical mechanics
- **prerequisites**: `08.01.01`, `08.06.01`, `03.04.08`
- **tier_anchors**:
  - master: Feynman-Hibbs; Kardar QFT notes §4
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A continuum weighted sum over field configurations. Central theorem: saddle-point expansion around a stationary configuration. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.wilson-lattice-gauge

- **title**: Wilson's lattice gauge theory
- **prerequisites**: `03.03.01`, `03.05.07`, `08.08.02`
- **tier_anchors**:
  - master: Wilson 1974; Kogut 1979; Itzykson-Drouffe Vol. 2
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A lattice regularization of gauge fields using group elements on links. Central theorem: Wilson plaquette action approximates Yang-Mills action. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.wilson-action

- **title**: Wilson action
- **prerequisites**: `03.07.05`, `03.03.01`
- **tier_anchors**:
  - master: Wilson 1974; Kogut 1979
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The plaquette action measuring lattice curvature in gauge theory. Central theorem: small-plaquette expansion recovers curvature squared. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.effective-field-theory

- **title**: Effective field theory
- **prerequisites**: `08.04.01`, `08.07.01`
- **tier_anchors**:
  - master: Wilson-Kogut 1974; Polchinski EFT lectures
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: A scale-dependent description retaining operators relevant at the chosen resolution. Central theorem: irrelevant operators are suppressed at long distance. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

### stat-mech.wick-rotation

- **title**: Quantum-classical correspondence (Wick rotation)
- **prerequisites**: `08.07.01`, `02.11.08`
- **tier_anchors**:
  - master: Itzykson-Drouffe Vol. 1 §1; Polchinski Vol. 1 §1
  - intermediate: finite-volume definitions, canonical theorem, and scaling computations
  - beginner: lattice-state and weighted-probability intuition
- **notes**: The relation between quantum time evolution and statistical weights after imaginary-time continuation. Central theorem: thermal trace as imaginary-time path integral. Used in the v0.5 statistical field theory strand for lattice models, criticality, renormalisation, and Euclidean field theory.

## v0.5 Strand C supporting complex analysis

### complex-analysis.meromorphic-function

- **title**: Meromorphic function
- **unit**: `06.01.05`
- **prerequisites**: `06.01.01`
- **tier_anchors**:
  - master: Riemann 1851 Grundlagen; Ahlfors §4; Forster §1
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.cauchy-integral-formula

- **title**: Cauchy integral formula
- **unit**: `06.01.02`
- **prerequisites**: `06.01.01`
- **tier_anchors**:
  - master: Cauchy 1825 Memoire sur les integrales definies prises entre des limites imaginaires; Ahlfors §4
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.residue-theorem

- **title**: Residue theorem
- **unit**: `06.01.03`
- **prerequisites**: `06.01.02`, `06.01.05`
- **tier_anchors**:
  - master: Cauchy 1826 residue calculus; Ahlfors §4-5
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.analytic-continuation

- **title**: Analytic continuation
- **unit**: `06.01.04`
- **prerequisites**: `06.01.01`
- **tier_anchors**:
  - master: Weierstrass 1841 lectures on analytic continuation; Ahlfors §8; Conway Ch IX
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.riemann-mapping-theorem

- **title**: Riemann mapping theorem
- **unit**: `06.01.06`
- **prerequisites**: `06.01.01`, `06.01.02`
- **tier_anchors**:
  - master: Riemann 1851 statement; Koebe 1907 proof; Ahlfors §6; Stein-Shakarchi Vol II §8
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.branch-point-ramification

- **title**: Branch point and ramification
- **unit**: `06.02.01`
- **prerequisites**: `06.01.04`, `06.03.01`
- **tier_anchors**:
  - master: Riemann 1851 dissertation; Forster §1; Donaldson Ch 1
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.genus-riemann-surface

- **title**: Genus of a Riemann surface
- **unit**: `06.03.02`
- **prerequisites**: `06.03.01`
- **tier_anchors**:
  - master: Riemann 1857 Theorie der Abelschen Functionen; Forster §16; Donaldson Ch 3
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.uniformization-theorem

- **title**: Uniformization theorem
- **unit**: `06.03.03`
- **prerequisites**: `06.03.01`, `06.01.06`
- **tier_anchors**:
  - master: Koebe 1907; Poincare 1907; Forster IV-V; Donaldson Ch 6; Ahlfors-Sario
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.divisor-riemann-surface

- **title**: Divisor on a Riemann surface
- **unit**: `06.05.01`
- **prerequisites**: `06.01.05`, `06.03.01`
- **tier_anchors**:
  - master: Riemann 1857 implicit divisor calculus; Klein 1882; Forster §16; Miranda Ch IV; Farkas-Kra Ch III
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.holomorphic-line-bundle

- **title**: Holomorphic line bundle on a Riemann surface
- **unit**: `06.05.02`
- **prerequisites**: `06.05.01`, `06.03.01`, `03.05.02`
- **tier_anchors**:
  - master: Cartan-Serre 1953-55 coherent sheaf theory; Forster §29; Donaldson Ch 8
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.riemann-hurwitz-formula

- **title**: Riemann-Hurwitz formula
- **unit**: `06.05.03`
- **prerequisites**: `06.02.01`, `06.03.02`
- **tier_anchors**:
  - master: Hurwitz 1891 Uber Riemannsche Flachen mit gegebenen Verzweigungspunkten; Forster §17; Miranda Ch II
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.holomorphic-one-form

- **title**: Holomorphic 1-form / abelian differential
- **unit**: `06.06.01`
- **prerequisites**: `06.03.01`, `03.04.02`
- **tier_anchors**:
  - master: Riemann 1857; Klein 1882; Forster §17; Farkas-Kra Ch II; Springer
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.period-matrix

- **title**: Period matrix
- **unit**: `06.06.02`
- **prerequisites**: `06.06.01`, `06.03.02`
- **tier_anchors**:
  - master: Riemann 1857 period relations; Farkas-Kra Ch III; Griffiths-Harris Ch 2
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.jacobian-variety

- **title**: Jacobian variety
- **unit**: `06.06.03`
- **prerequisites**: `06.06.02`, `06.06.04`
- **tier_anchors**:
  - master: Jacobi 1829 elliptic theory; Riemann 1857 general theory; Mumford Curves and their Jacobians; Farkas-Kra Ch VI
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.abel-jacobi-map

- **title**: Abel-Jacobi map
- **unit**: `06.06.04`
- **prerequisites**: `06.05.01`, `06.06.01`
- **tier_anchors**:
  - master: Abel 1826 Memoire sur une propriete generale; Jacobi 1832; Mumford; Griffiths-Harris Ch 2; Forster §21
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.theta-function

- **title**: Theta function
- **unit**: `06.06.05`
- **prerequisites**: `06.06.02`, `06.06.03`
- **tier_anchors**:
  - master: Jacobi 1828 Fundamenta Nova; Riemann 1866 theta with characteristics; Mumford Tata Lectures on Theta I-III; Farkas-Kra Ch VI; Igusa
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.holomorphic-several-variables

- **title**: Holomorphic functions of several variables
- **unit**: `06.07.01`
- **prerequisites**: `06.01.01`
- **tier_anchors**:
  - master: Hartogs 1906 several complex variables; Krantz; Gunning-Rossi
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

### complex-analysis.hartogs-phenomenon

- **title**: Hartogs phenomenon
- **unit**: `06.07.02`
- **prerequisites**: `06.07.01`
- **tier_anchors**:
  - master: Hartogs 1906 Zur Theorie der analytischen Functionen mehrerer unabhangiger Veranderlicher; Krantz; Hormander
  - intermediate: local definitions, canonical theorem, and proof
  - beginner: visual local-data intuition
- **notes**: Supporting v0.5 Riemann-surface and complex-analysis unit.

## v0.5 Strand D supporting Lie and compact representation theory

### rep-theory.lie-algebra-representation

- **title**: Lie algebra representation
- **unit**: `07.06.01`
- **prerequisites**: `03.04.01`, `01.01.03`, `07.01.01`
- **tier_anchors**:
  - master: Cartan 1894 Sur la structure des groupes de transformations finis et continus; Humphreys §6; Fulton-Harris §9
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.universal-enveloping-algebra

- **title**: Universal enveloping algebra
- **unit**: `07.06.02`
- **prerequisites**: `03.04.01`, `03.01.02`, `07.06.01`
- **tier_anchors**:
  - master: Poincare 1900; Birkhoff 1937; Witt 1937 PBW theorem; Humphreys §17; Dixmier; Bourbaki Ch I
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.root-system

- **title**: Root system
- **unit**: `07.06.03`
- **prerequisites**: `03.04.01`, `01.01.15`, `07.04.01`
- **tier_anchors**:
  - master: Killing 1888-90; Cartan 1894; Bourbaki Ch VI; Humphreys §8-10; Serre
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.weyl-group

- **title**: Weyl group
- **unit**: `07.06.04`
- **prerequisites**: `07.06.03`
- **tier_anchors**:
  - master: Weyl 1925-26 Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen; Bourbaki Ch VI; Humphreys §10; Hiller
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.dynkin-diagram

- **title**: Dynkin diagram
- **unit**: `07.06.05`
- **prerequisites**: `07.06.03`, `07.06.04`
- **tier_anchors**:
  - master: Eugene Dynkin 1947 Classification of simple Lie algebras; Humphreys §11; Bourbaki Ch VI
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.verma-module

- **title**: Verma module
- **unit**: `07.06.06`
- **prerequisites**: `07.06.01`, `07.06.02`, `07.03.01`
- **tier_anchors**:
  - master: Daya-Nand Verma 1968 PhD thesis; Humphreys Category O; Dixmier; Knapp Ch V
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.weyl-character-formula

- **title**: Weyl character formula
- **unit**: `07.06.07`
- **prerequisites**: `07.03.01`, `07.06.03`, `07.06.04`
- **tier_anchors**:
  - master: Weyl 1925-26 character formula; Fulton-Harris §24; Humphreys §24; Knapp Ch V
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.weyl-dimension-formula

- **title**: Weyl dimension formula
- **unit**: `07.06.08`
- **prerequisites**: `07.06.07`
- **tier_anchors**:
  - master: Weyl 1925 dimension formula; Fulton-Harris §24
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.borel-weil-theorem

- **title**: Borel-Weil theorem
- **unit**: `07.06.09`
- **prerequisites**: `07.06.07`, `03.05.02`
- **tier_anchors**:
  - master: Borel 1954; Bott 1957; Knapp Ch VI; Tu Differential Geometry; Wallach
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.compact-lie-group-representation

- **title**: Compact Lie group representation
- **unit**: `07.07.01`
- **prerequisites**: `03.03.01`, `07.01.01`
- **tier_anchors**:
  - master: Weyl 1925-26 unitarian trick; Knapp Ch IV; Brocker-tom Dieck; Sepanski
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.peter-weyl-theorem

- **title**: Peter-Weyl theorem
- **unit**: `07.07.02`
- **prerequisites**: `07.07.01`, `02.11.08`, `07.01.01`
- **tier_anchors**:
  - master: Peter and Weyl 1927 Die Vollstandigkeit der primitiven Darstellungen einer geschlossenen kontinuierlichen Gruppe; Knapp Ch IV; Brocker-tom Dieck; Folland Abstract Harmonic Analysis
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

### rep-theory.haar-measure

- **title**: Haar measure
- **unit**: `07.07.03`
- **prerequisites**: `03.03.01`, `03.04.03`
- **tier_anchors**:
  - master: Alfred Haar 1933 Der Massbegriff in der Theorie der kontinuierlichen Gruppen; Knapp Ch VIII; Folland Real Analysis; Bourbaki Integration
  - intermediate: representation-theoretic definition, canonical theorem, and proof
  - beginner: symmetry-as-linear-action intuition
- **notes**: Supporting v0.5 Lie-algebraic and compact-Lie representation unit.

## v0.5 Strand D supporting representation theory foundations

### rep-theory.character

- **title**: Character of a representation
- **unit**: `07.01.03`
- **prerequisites**: `rep-theory.group-representation`
- **tier_anchors**:
  - master: Frobenius 1896 Über die Charaktere endlicher Gruppen; Serre §2; Fulton-Harris §2; James-Liebeck
  - intermediate: Serre §2; Fulton-Harris §2
  - beginner: trace of a representation as conjugation-invariant signature
- **notes**: Class function $\chi_\rho(g) = \mathrm{tr}(\rho(g))$. Originated by Frobenius via Dedekind's group-determinant problem. Powers orthogonality, dimension formula, decomposition algorithms. Generalises to compact Lie groups via integration against Haar measure.

### rep-theory.character-orthogonality

- **title**: Character orthogonality
- **unit**: `07.01.04`
- **prerequisites**: `rep-theory.character`, `rep-theory.schur-lemma`
- **tier_anchors**:
  - master: Frobenius 1896; Schur 1905 Neue Begründung der Theorie der Gruppencharaktere; Serre §2; Fulton-Harris §2; James-Liebeck Ch 14-17
  - intermediate: Serre §2; Fulton-Harris §2
  - beginner: orthonormality of irreducible characters in the class-function inner product
- **notes**: Row and column orthogonality. Gives multiplicity formula $n_V = \langle \chi, \chi_V \rangle$ and isomorphism criterion (representations isomorphic iff characters agree). Frobenius's first orthogonality relation; Schur's 1905 derivation via Schur's lemma is the modern textbook approach.

### rep-theory.regular-representation

- **title**: Regular representation
- **unit**: `07.01.05`
- **prerequisites**: `rep-theory.group-representation`
- **tier_anchors**:
  - master: Frobenius 1898 Über Relationen zwischen den Charakteren einer Gruppe und denen ihrer Untergruppen; Serre §1-§2; Fulton-Harris §2; James-Liebeck Ch 6
  - intermediate: Serre §1-§2; Fulton-Harris §2
  - beginner: group acting on its own group algebra by left multiplication
- **notes**: $\mathbb{C}G$ as a $G$-representation. Contains every irreducible $V$ with multiplicity $\dim V$, giving $|G| = \sum_V (\dim V)^2$. Character $\chi_{\mathrm{reg}}(e) = |G|$, $\chi_{\mathrm{reg}}(g) = 0$ for $g \neq e$. Foundational computational object.

### rep-theory.tensor-product-of-representations

- **title**: Tensor product of representations
- **unit**: `07.01.06`
- **prerequisites**: `rep-theory.group-representation`, `linalg.tensor-product`
- **tier_anchors**:
  - master: Schur 1901 PhD thesis; Weyl 1925-26 Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen; Fulton-Harris §1.1, §2; Serre §3
  - intermediate: Fulton-Harris §1.1; Serre §3
  - beginner: combining two representations into a larger one via tensoring
- **notes**: $(\rho_1 \otimes \rho_2)(g) = \rho_1(g) \otimes \rho_2(g)$ on $V_1 \otimes V_2$. Character $\chi_{V_1 \otimes V_2} = \chi_{V_1} \cdot \chi_{V_2}$. Decomposition into irreducibles (Clebsch-Gordan). Foundation of Schur-Weyl duality.

### rep-theory.induced-representation

- **title**: Induced representation
- **unit**: `07.01.07`
- **prerequisites**: `rep-theory.group-representation`, `groups.group`
- **tier_anchors**:
  - master: Frobenius 1898 Über Relationen zwischen den Charakteren einer Gruppe und denen ihrer Untergruppen; Serre §7; Fulton-Harris §3.3; Bump Ch 8
  - intermediate: Serre §7; Fulton-Harris §3.3
  - beginner: building a $G$-representation from a subgroup-representation
- **notes**: $\mathrm{Ind}_H^G W = \mathbb{C}G \otimes_{\mathbb{C}H} W$. Character formula $\chi_{\mathrm{Ind} W}(g) = \frac{1}{|H|} \sum_{x \in G : x^{-1} g x \in H} \chi_W(x^{-1} g x)$. Foundation of Mackey theory and $\mathrm{GL}_n(\mathbb{Q}_p)$ representations.

### rep-theory.frobenius-reciprocity

- **title**: Frobenius reciprocity
- **unit**: `07.01.08`
- **prerequisites**: `rep-theory.induced-representation`, `rep-theory.character`
- **tier_anchors**:
  - master: Frobenius 1898; Serre §7; Fulton-Harris §3.3; Knapp Ch VIII
  - intermediate: Serre §7; Fulton-Harris §3.3
  - beginner: induction and restriction as adjoint operations
- **notes**: Adjunction $\mathrm{Hom}_G(\mathrm{Ind}_H^G W, V) \cong \mathrm{Hom}_H(W, \mathrm{Res}_H^G V)$. Prototype of all categorical adjunctions, predating category theory by 50+ years. Powers Mackey theory, Brauer's theorem on induced characters, Langlands correspondences.

### rep-theory.maschke-theorem

- **title**: Maschke's theorem
- **unit**: `07.02.01`
- **prerequisites**: `rep-theory.group-representation`
- **tier_anchors**:
  - master: Heinrich Maschke 1899 Beweis des Satzes, dass diejenigen endlichen linearen Substitutionsgruppen, in welchen einige durchgehends verschwindende Coefficienten auftreten, intransitiv sind; Serre §1; Fulton-Harris §1.1; Lang Ch XVIII
  - intermediate: Serre §1; Fulton-Harris §1.1
  - beginner: every representation of a finite group splits into irreducible pieces
- **notes**: Complete reducibility of finite-group representations over fields where $|G|$ is invertible. Averaging-projection proof. Failure in characteristic dividing $|G|$ launches modular representation theory (Brauer 1935).

### spin-geometry.heat-kernel-index

- **title**: Heat-kernel proof of the Atiyah-Singer index theorem
- **unit**: `03.09.20`
- **prerequisites**: `index-theory.atiyah-singer.index-theorem`, `diffgeo.elliptic-operators`, `spin-geometry.dirac.dirac-operator`, `char-classes.pontryagin-chern.definitions`
- **tier_anchors**:
  - master: Atiyah-Bott-Patodi 1973 *On the heat equation and the index theorem*; Getzler 1986; Berline-Getzler-Vergne; Lawson-Michelsohn §III.6+§III.13
  - intermediate: Lawson-Michelsohn §III.6 with McKean-Singer derivation
  - beginner: heat flow as $t$-independent supertrace counting solutions minus obstructions
- **notes**: The McKean-Singer formula $\operatorname{ind}(D)=\operatorname{Str}(e^{-tD^2})$ holds for every $t>0$. Large-$t$ limit returns the analytic index from the harmonic projection; small-$t$ asymptotic expansion of the heat kernel produces the local index density $\widehat A(\nabla^{TM})\operatorname{ch}(\nabla^E)$ (spin Dirac case). Getzler 1986 rescaling reduces the small-$t$ computation to the harmonic-oscillator heat kernel of Mehler. Alvarez-Gaumé 1983 reproduces the result by supersymmetric path-integral evaluation. The proof package supplies the local form, not just the index integer.

### spin-geometry.family-equivariant-index

- **title**: Family, equivariant, and Lefschetz fixed-point index theorems
- **unit**: `03.09.21`
- **prerequisites**: `index-theory.atiyah-singer.index-theorem`, `spin-geometry.heat-kernel-index`, `k-theory.bott.periodicity`, `bundle.principal-bundle.connection`
- **tier_anchors**:
  - master: Atiyah-Singer 1971 *The index of elliptic operators IV–V*; Atiyah-Bott 1968 *A Lefschetz fixed point formula for elliptic complexes*; Berline-Getzler-Vergne Ch. 6
  - intermediate: Lawson-Michelsohn §III.8–§III.9 + §III.14–§III.15
  - beginner: index as a topological invariant moving continuously over a family
- **notes**: Family index of an elliptic family $D=\{D_b\}_{b\in B}$ is a class $\operatorname{ind}(D)\in K^0(B)$ whose Chern character equals the integral of $\widehat A\cdot\operatorname{ch}(\sigma)$ over the fibre. Equivariant index of a $G$-equivariant elliptic operator lives in the representation ring $R(G)$. Lefschetz fixed-point formula expresses the equivariant index via local contributions at the fixed-point set $M^g$. The three refinements share a heat-kernel proof: insert the family / group action into the supertrace, invoke localisation.

### spin-geometry.pseudodifferential

- **title**: Sobolev spaces, pseudodifferential operators, and elliptic parametrices
- **unit**: `03.09.22`
- **prerequisites**: `functional-analysis.compact-operators`, `diffgeo.operator.symbol`, `diffgeo.elliptic-operators`
- **tier_anchors**:
  - master: Hörmander *Analysis of Linear Partial Differential Operators III* Ch. 18; Lawson-Michelsohn §III.1–§III.5; Taylor *Pseudodifferential Operators*
  - intermediate: Lawson-Michelsohn §III.1–§III.5; Folland *Introduction to Partial Differential Equations* Ch. 6
  - beginner: counting derivatives by Sobolev exponent; symbols and parametrices as approximate inverses
- **notes**: Sobolev spaces $H^s$ measure regularity by integrability of derivatives. Embedding theorem $H^s\hookrightarrow C^k$ for $s>k+n/2$. Rellich-Kondrachov compactness $H^s\hookrightarrow H^{s'}$ for $s>s'$ on bounded domains. Pseudodifferential operators of order $m$ are quantisations of symbols $a(x,\xi)\in S^m$. Elliptic symbols admit a parametrix $Q\in\Psi^{-m}$ with $QP-I,PQ-I\in\Psi^{-\infty}$ smoothing. On a closed manifold smoothing operators are compact between Sobolev spaces; Atkinson then yields Fredholmness of every elliptic operator. Notation: Thom class $\tau\in H^*$ (cohomology), $\Lambda\in K^*$ (K-theory) per LM.

### spin-geometry.dirac-bundle

- **title**: Generalised Dirac bundles and the Bochner-Weitzenböck identity
- **unit**: `03.09.14`
- **prerequisites**: `spin-geometry.spinor-bundle`, `spin-geometry.dirac.dirac-operator`, `bundle.principal-bundle.connection`, `diffgeo.de-rham`
- **tier_anchors**:
  - master: Lawson-Michelsohn §II.6 + §II.8.3–II.8.4; Berline-Getzler-Vergne Ch. 3.5; Bochner 1946 *Vector fields and Ricci curvature* (Bull. AMS 52)
  - intermediate: Lawson-Michelsohn §II.6
  - beginner: square-equals-Laplacian-plus-curvature pattern shared by spinors, forms, and twisted bundles
- **notes**: A Dirac bundle is a Hermitian vector bundle equipped with a fibrewise Clifford action of $T^\ast M$ and a metric-compatible connection whose Levi-Civita-Leibniz rule holds. The Dirac operator is $D = c\circ\nabla^{\mathfrak{E}}$. The universal Bochner-Weitzenböck identity reads $D^2 = (\nabla^{\mathfrak{E}})^\ast\nabla^{\mathfrak{E}} + \mathcal{R}^{\mathfrak{E}}$ with $\mathcal{R}^{\mathfrak{E}} = \tfrac{1}{2}\sum_{j,k} c(e^j)c(e^k)R^{\mathfrak{E}}(e_j,e_k)$. Specialisations: spinor bundle ($\mathcal{R} = \tfrac{1}{4}\,\mathrm{Scal}$, Lichnerowicz 1963), de Rham bundle ($\mathcal{R}$ = Ricci on 1-forms, Bochner 1946; Weitzenböck curvature operator on $k$-forms), twisted spinor bundle ($\mathcal{R} = \tfrac{1}{4}\,\mathrm{Scal} + F^E$, Atiyah-Singer twist).

### spin-geometry.clk-dirac

- **title**: Cl_k-linear Dirac operators and the KO-valued index
- **unit**: `03.09.15`
- **prerequisites**: `spin-geometry.dirac-bundle`, `spin-geometry.clifford.clifford-algebra`, `index-theory.atiyah-singer.index-theorem`, `k-theory.bott.periodicity`
- **tier_anchors**:
  - master: Atiyah-Singer 1971 *The index of elliptic operators IV* (Ann. Math. 93); Hitchin 1974 *Harmonic spinors* (Adv. Math. 14); Lawson-Michelsohn §II.7 + §III.10 + §III.16
  - intermediate: Lawson-Michelsohn §II.7
  - beginner: refining the integer index of the Dirac operator into a KO-valued obstruction by tracking a Clifford-module symmetry
- **notes**: A $\mathrm{Cl}_k$-linear Dirac bundle carries a graded right $\mathrm{Cl}_k$-action commuting with the Clifford action of $T^\ast M$. Its Clifford-index $\widehat\alpha(D)$ lives in $\widehat{\mathfrak{M}}_k = M_k / i^\ast M_{k+1}$, the ABS module quotient, which equals $KO_k$ via the Atiyah-Bott-Shapiro isomorphism. The Cl_k-linear AS theorem (Atiyah-Singer Index IV) computes the topological side as the KO-pushforward of the symbol class. The $\alpha$-invariant of Hitchin is the special case $\widehat\alpha(D_{\mathfrak{S}})$ on a spin manifold, the foundational psc obstruction in dimensions where the integer Dirac index vanishes. Notation disambiguation: $\mathrm{Cl}_k$ here is the standard real Clifford algebra $\mathrm{Cl}_{0,k}$ (positive-definite in the sign convention $v^2 = -|v|^2$), distinct from the $\mathrm{Cl}_{r,s}$ chessboard family of `03.09.11`.

### spin-geometry.exercise-pack-ch1

- **title**: Clifford and spin algebra exercise pack (Lawson-Michelsohn Ch. I supplement)
- **unit**: `03.09.E1`
- **prerequisites**: `spin-geometry.clifford.clifford-algebra`, `spin-geometry.spin-group`, `spin-geometry.clifford-chessboard`
- **tier_anchors**:
  - intermediate: Lawson-Michelsohn §I.5 (spinor module $\Lambda^* W$), §I.6 ($\mathfrak{so}(n) \hookrightarrow \mathrm{Cl}^0$ commutators), §I.7 (low-dimensional Spin), §I.8 ($G_2$ via octonionic spinors, $E_8$ from $\mathrm{Spin}(16)$), §I.9 (ABS module quotient $\widehat{\mathfrak{M}}_n$), §I.10 (KR-$(1,1)$ periodicity)
- **notes**: Twelve exercises covering Clifford chessboard low-rank computations, Pin/Spin extensions, automorphism inner-products, Atiyah-Bott-Shapiro module classifications, K-theory orientations, and exceptional Lie group descriptions. Cross-cuts the existing units 03.09.02, 03.09.03, 03.09.11, and (in low-dim and chessboard exercises) 03.09.13. Difficulty distribution: 4 easy / 5 medium / 3 hard. Each exercise carries a hint and full answer in `<details>` blocks. Exercise-pack-only unit type — slimmed frontmatter with `tiers_present: [intermediate]`, no Lean infrastructure.


### spin-geometry.calibrated-geometries

- **title**: Calibrated geometries — Special Lagrangian, associative, coassociative, Cayley
- **unit**: `03.09.19`
- **prerequisites**: `spin-geometry.triality`, `spin-geometry.spinor-bundle`, `spin-geometry.structure.spin-structure`
- **tier_anchors**:
  - master: Harvey-Lawson 1982 *Calibrated geometries* (Acta Mathematica 148); Lawson-Michelsohn §IV.12; Joyce 2007 *Riemannian Holonomy Groups and Calibrated Geometry*; McLean 1998 *Deformations of calibrated submanifolds*
  - intermediate: Lawson-Michelsohn §IV.12, with Joyce *Compact Manifolds with Special Holonomy* Ch. 3 as parallel reading
  - beginner: closed differential form of unit comass certifying volume-minimisers
- **notes**: A calibration of degree $p$ on a Riemannian manifold is a closed $p$-form of comass at most 1 globally. Submanifolds calibrated by $\varphi$ — those whose oriented unit tangent $p$-vector lies in the contact set $\{\xi : \varphi(\xi) = 1\}$ — are volume-minimisers in their homology class by the Harvey-Lawson fundamental theorem (one chain of inequalities: Stokes plus comass bound). The four named calibrated geometries are: Special Lagrangian on a Calabi-Yau $n$-fold ($\mathrm{Re}\,\Omega$, holonomy $\mathrm{SU}(n)$, contact set $\mathrm{SU}(n)/\mathrm{SO}(n)$); associative on a $G_2$ 7-fold ($\phi$, contact set $G_2/\mathrm{SO}(4)$); coassociative on a $G_2$ 7-fold ($\ast\phi$); Cayley on a Spin(7) 8-fold ($\Phi$). Each calibrating form is the spinor square of a parallel spinor preserved by the special holonomy. McLean 1998 computed the moduli-space dimensions: $b_1$ for SL, $b^2_+$ for coassociative, normal-Dirac kernel for associative and Cayley.

### spin-geometry.psc-obstruction

- **title**: Positive scalar curvature obstruction theory
- **unit**: `03.09.16`
- **prerequisites**: `spin-geometry.dirac-bundle`, `spin-geometry.clk-dirac`, `spin-geometry.spinor-bundle`, `spin-geometry.structure.spin-structure`
- **tier_anchors**:
  - master: Lichnerowicz 1963 *Spineurs harmoniques* (CRAS 257); Hitchin 1974 *Harmonic spinors* (Adv. Math. 14); Gromov-Lawson 1980 (Annals 111) + 1983 (IHÉS 58); Stolz 1992 (Annals 136); Lawson-Michelsohn §IV.1–§IV.4
  - intermediate: Lawson-Michelsohn §IV.1–§IV.4, with Gromov-Lawson 1980 (Annals 111) as parallel reading
  - beginner: scalar curvature as obstruction to harmonic spinors via the Lichnerowicz formula
- **notes**: The classical psc obstruction chain spans 1963–1992 in four links. Lichnerowicz 1963: $D^2 = \nabla^\ast\nabla + \tfrac{1}{4}\,\mathrm{Scal}$ on the spinor bundle, with positive scalar curvature forcing $\ker D = 0$ and hence $\widehat A(M)[M] = 0$. Hitchin 1974: the Cl_n-linear refinement, with the α-invariant $\alpha(M) \in KO_n$ vanishing under psc; the new content is the $\mathbb{Z}/2$ obstructions in dimensions $n \equiv 1, 2 \mod 8$, detecting exotic spheres without psc. Gromov-Lawson 1980/83: the surgery theorem (psc preserved under codim-$\geq 3$ surgery) and the enlargeable manifold theorem (manifolds admitting arbitrarily small Lipschitz maps to $S^n$ from finite covers admit no psc, ruling out $T^n$). Stolz 1992: in the simply-connected case, $\alpha(M) = 0$ is equivalent to psc-existence in dimension $\geq 5$. Lawson is co-originator of Gromov-Lawson. Notation: the α-invariant symbol is $\alpha(M)$ (notation decision #24, pinned in this unit).

### spin-geometry.witten-positive-mass

- **title**: Witten positive-mass theorem via spinors
- **unit**: `03.09.17`
- **prerequisites**: `spin-geometry.spinor-bundle`, `spin-geometry.structure.spin-structure`, `spin-geometry.dirac-bundle`
- **tier_anchors**:
  - master: Witten 1981 *A new proof of the positive energy theorem* (Comm. Math. Phys. 80); Schoen-Yau 1979/81 minimal-surface proof; Parker-Taubes 1982 *On Witten's proof*; Lawson-Michelsohn §IV.10–§IV.11
  - intermediate: Witten 1981 with Lawson-Michelsohn §IV.10–§IV.11 as parallel reading
  - beginner: ADM mass of an asymptotically flat 3-manifold as the boundary term of a Lichnerowicz integration by parts
- **notes**: Witten 1981 reproved the Schoen-Yau positive-mass theorem in three pages by introducing a harmonic spinor with prescribed asymptotic value $\psi_\infty$, applying the Lichnerowicz formula on the asymptotically flat spin 3-manifold, and identifying the integration-by-parts boundary term at infinity with $-4\pi m_{\mathrm{ADM}}|\psi_\infty|^2$. Result: $4\pi m_{\mathrm{ADM}} = \int_M |\nabla\psi|^2 + \tfrac{1}{4}\int_M \mathrm{Scal}|\psi|^2 \geq 0$ under non-negative scalar curvature; equality forces a parallel spinor and hence flat $\mathbb{R}^3$. The Parker-Taubes 1982 reformulation made the existence of the Witten spinor rigorous via weighted Sobolev spaces. The Dirac-Witten operator $\widehat D = D - \tfrac{1}{2}K^{ij}c(e_i)\nabla_{e_j}$ extends the argument to the spacetime case (positive-energy theorem with dominant energy condition).

### spin-geometry.berger-holonomy

- **title**: Berger holonomy classification and parallel spinors
- **unit**: `03.09.18`
- **prerequisites**: `spin-geometry.spinor-bundle`, `spin-geometry.structure.spin-structure`, `spin-geometry.spin-group`
- **tier_anchors**:
  - master: Berger 1955 *Sur les groupes d'holonomie homogène* (Bull. SMF 83); Wang 1989 *Parallel spinors and parallel forms* (Annals Glob. Anal. Geom.); Bryant 1987 *Metrics with exceptional holonomy* (Annals 126); Joyce 2007 *Riemannian Holonomy Groups and Calibrated Geometry*
  - intermediate: Lawson-Michelsohn §IV.9 with Joyce *Compact Manifolds with Special Holonomy* Ch. 2 as parallel reading
  - beginner: holonomy as the rotation imparted by parallel transport around a loop; the seven Berger groups
- **notes**: Berger 1955 classified the restricted holonomy of simply-connected, irreducible, non-symmetric Riemannian manifolds: $\mathrm{SO}(n)$ (generic), $\mathrm{U}(n)$ (Kähler), $\mathrm{SU}(n)$ (Calabi-Yau, Ricci-flat), $\mathrm{Sp}(n)$ (hyperkähler), $\mathrm{Sp}(n)\mathrm{Sp}(1)$ (quaternionic Kähler, Einstein), $G_2$ (dim 7, Ricci-flat), $\mathrm{Spin}(7)$ (dim 8, Ricci-flat). The proof is a representation-theoretic case analysis: which irreducible subalgebras of $\mathfrak{so}(n)$ admit non-zero curvature tensors satisfying the first Bianchi identity? Wang 1989 established the bijection between Berger's special holonomies $\{\mathrm{SU}(n), \mathrm{Sp}(n), G_2, \mathrm{Spin}(7)\}$ and the existence of a non-zero parallel spinor, with parallel-spinor counts 2, $n+1$, 1, 1 respectively. Bryant 1987 constructed local exceptional-holonomy metrics; Joyce 1996/2000 constructed compact $G_2$ and $\mathrm{Spin}(7)$ manifolds. The Wang bijection is the structural foundation of the Harvey-Lawson calibrated-geometry framework: every parallel spinor produces a calibration via spinor squaring.

### spin-geometry.exercise-pack-ch4

- **title**: Chapter IV applications exercise pack (Lawson-Michelsohn Ch. IV supplement)
- **unit**: `03.09.E2`
- **prerequisites**: `spin-geometry.psc-obstruction`, `spin-geometry.witten-positive-mass`, `spin-geometry.berger-holonomy`, `spin-geometry.calibrated-geometries`
- **tier_anchors**:
  - intermediate: Lawson-Michelsohn — Spin Geometry Ch. IV (§IV.1–§IV.12) exercise sets
- **notes**: Fourteen exercises covering Chapter IV applications of spin geometry. Distribution: 4 easy / 7 medium / 3 hard. Group I (4 exercises): psc obstruction — Lichnerowicz on flat torus, Â-genus of K3, α-invariant on $\mathbb{H}P^2$, enlargeable propagation under product. Group II (3 exercises): Witten positive-mass theorem — ADM mass of Schwarzschild, Witten boundary identity, equality case via parallel-spinor rigidity. Group III (3 exercises): Berger holonomy — list size, parallel-spinor count on K3, Calabi-Yau Ricci-flatness. Group IV (4 exercises): calibrated geometries — comass of volume form, Wirtinger inequality, Special Lagrangian lines, $G_2$ associative 3-planes via the cross product. Cross-cuts the four Batch-2 units 03.09.16–03.09.19. Each exercise carries a hint and full answer in `<details>` blocks. Exercise-pack-only unit type — slimmed frontmatter with `tiers_present: [intermediate]`, no Lean infrastructure.

### diffgeo.de-rham.kunneth

- **title**: Künneth formula for de Rham cohomology — two proofs
- **unit**: `03.04.12`
- **prerequisites**: `diffgeo.de-rham.mayer-vietoris`, `diffgeo.de-rham.good-cover-induction`, `diffgeo.de-rham.cech-de-rham-double-complex`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Bott-Tu §5 + §9 — the dual-proof unit; Hatcher §3.B for the singular Künneth via Eilenberg-Zilber
  - intermediate: Bott-Tu §5 (MV induction) + §9 (tic-tac-toe); Madsen-Tornehave §6
  - beginner: Strogatz / 3Blue1Brown level on product spaces — multiplying tensor invariants
- **notes**: $H^*_{\mathrm{dR}}(M\times F) \cong H^*_{\mathrm{dR}}(M)\otimes H^*_{\mathrm{dR}}(F)$ for finite-type $M$, proved twice. First proof: Mayer-Vietoris induction over a good cover, with the cross-product map $\pi_M^*\alpha\wedge\pi_F^*\beta$ as the natural transformation, base case the Poincaré lemma on $\mathbb{R}^n\times F$, inductive step via the five lemma on the MV ladder. Second proof: tic-tac-toe ascent on the Čech-de Rham double complex of the product cover $\mathcal{U}\times\mathcal{V}$, factoring as Čech-of-constant-coefficients tensored. The dual-proof presentation is Bott-Tu's pedagogical signature — one theorem, told twice; the second telling is shorter because the first installed the machinery. Failure mode: infinite-type manifolds; cross-product is injective but the tensor-product splitting fails. Consequences: $H^*(T^n) = \Lambda^*[\theta_1,\ldots,\theta_n]$ exterior algebra of dimension $2^n$; multiplicativity of Euler characteristic $\chi(M\times F) = \chi(M)\chi(F)$; Poincaré-polynomial multiplication $P_{M\times F}(t) = P_M(t) P_F(t)$.

### alg-top.singular-cohomology

- **title**: Singular cohomology and the de Rham theorem (with $\mathbb{Z}$ coefficients)
- **unit**: `03.04.13`
- **prerequisites**: `diffgeo.de-rham.mayer-vietoris`, `topology.de-rham-cohomology`, `diffgeo.de-rham.cech-de-rham-double-complex`, `alg-geom.sheaf-cohomology`
- **tier_anchors**:
  - master: Bott-Tu §15; alternative Hatcher §2.1, §3.1
  - intermediate: Bott-Tu §13, §15; Hatcher §2.1
  - beginner: Strogatz / 3Blue1Brown level on counting holes by counting cocycles
- **notes**: Singular complex $C_*(X) = \bigoplus_n \mathbb{Z}\langle \sigma: \Delta^n\to X\rangle$ with face boundary $\partial$; singular cohomology $H^*_{\mathrm{sing}}(X; A) = H^*(\mathrm{Hom}(C_*, A))$. Key constructions: cone construction — every chain on a contractible space is a boundary, hence acyclic; small chains — for an open cover, every chain is chain-equivalent to a sum of chains supported in single opens, giving a singular MV long exact sequence. **De Rham theorem** $H^k_{\mathrm{dR}}(M)\cong H^k_{\mathrm{sing}}(M; \mathbb{R})$ via three routes: (i) MV induction over a good cover comparing the de Rham and singular MV functors via the integration pairing; (ii) Čech-de Rham double complex collapses to both Čech and de Rham, identifying both with $\check{H}^*(\mathcal{U};\underline{\mathbb{R}})$; (iii) sheaf-cohomology via Leray on the constant sheaf $\underline{\mathbb{R}}$ with the Poincaré-lemma fine resolution. The integer-coefficient version requires the singular complex (de Rham only sees $\mathbb{R}$ coefficients). Eilenberg-Steenrod axioms 1952 axiomatised the construction; de Rham 1931 proved the analytic equivalence directly.

### alg-geom.cohomology.local-system-monodromy

- **title**: Local systems, monodromy, and twisted cohomology
- **unit**: `04.03.02`
- **prerequisites**: `alg-geom.sheaf-cohomology`, `topology.cover.double-cover`, `topology.covering-space`, `topology.homotopy`
- **tier_anchors**:
  - master: Bott-Tu §13; alternative Voisin *Hodge Theory and Complex Algebraic Geometry I* §3
  - intermediate: Bott-Tu §13; Voisin §3.1
  - beginner: Strogatz / 3Blue1Brown level on monodromy via covering spaces and rotating frames
- **notes**: A **local system** on $X$ is a locally constant sheaf $\mathcal{L}$ of $A$-modules — concretely, a sheaf such that every point has a neighborhood where $\mathcal{L}$ is the constant sheaf with stalk a fixed $A$-module $V$. On a connected, locally simply-connected $X$, the category of local systems is equivalent to the category of $\pi_1(X, x_0)$-representations: parallel transport along loops gives the monodromy representation $\rho: \pi_1(X)\to \mathrm{Aut}(V)$. Examples: constant sheaf (trivial monodromy); orientation local system $\mathrm{or}_M$ on a non-orientable manifold (monodromy $\mathbb{Z}/2$ via the orientation double cover); Möbius local system on $S^1$. **Twisted cohomology** $H^*(X; \mathcal{L})$ is the cohomology with local-system coefficients; for orientation-twisted coefficients on a non-orientable manifold, Poincaré duality recovers via $H^k(M; \underline{\mathbb{R}})\cong H^{n-k}_c(M; \mathrm{or}_M)$ (the twisted Poincaré duality of Bott-Tu §7). Cohomology $H^*(X; \mathcal{L})$ on $K(\pi, 1)$-spaces equals group cohomology $H^*(\pi; V)$ with $V$ a $\pi$-module via $\rho$.

### diffgeo.de-rham.exercise-packs.chapter-i

- **title**: Mayer-Vietoris and degree-theory exercise pack (Bott-Tu Ch. I supplement)
- **unit**: `03.04.E1`
- **prerequisites**: `diffgeo.de-rham.mayer-vietoris`, `diffgeo.de-rham.good-cover-induction`, `diffgeo.de-rham.thom-cv-cohomology`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - intermediate: Bott-Tu Ch. I exercises (§1.4, §3, §4, §5, §6, §7, §11)
- **notes**: Fourteen exercises covering Chapter I of Bott-Tu — Mayer-Vietoris computation, degree theory, Hopf invariant, sphere cohomology by induction, $\mathbb{R}^n$-minus-$k$-points, the punctured torus, Stokes-on-manifolds-with-boundary applications. Distribution: 4 easy / 6 medium / 4 hard. Each exercise carries a hint and full solution in `<details>` blocks. Cross-cuts N1 (MV), N2 (good cover), N4 (Thom and degree), and the deepening D1 of `03.04.06`. Exercise-pack-only unit type — slimmed frontmatter with `tiers_present: [intermediate]`, no Lean infrastructure.

### diffgeo.de-rham.mayer-vietoris

- **title**: Mayer-Vietoris sequence for de Rham cohomology
- **unit**: `03.04.07`
- **prerequisites**: `topology.de-rham-cohomology`, `diffgeo.exterior-derivative`, `diffgeo.differential-forms`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Bott-Tu §2 + §5; Madsen-Tornehave §5; Mayer 1929 *Über abstrakte Topologie*; Vietoris 1930 *Über die Homologiegruppen der Vereinigung zweier Komplexe*
  - intermediate: Bott-Tu §2 (the de Rham version with the partition-of-unity proof of exactness)
  - beginner: cohomology computed by gluing two charts; the no-obstacle path of §1.7
- **notes**: For a smooth manifold $M = U \cup V$, the short exact sequence $0 \to \Omega^*(M) \to \Omega^*(U) \oplus \Omega^*(V) \to \Omega^*(U \cap V) \to 0$ produces the long exact Mayer-Vietoris sequence in de Rham cohomology. Surjectivity is the partition-of-unity argument; the connecting homomorphism $\delta \colon H^q(U \cap V) \to H^{q+1}(M)$ is the canonical zig-zag of homological algebra. Compactly-supported variant has reversed maps; both extend to arbitrary good covers via the generalised Mayer-Vietoris sequence (the row exactness of the Čech-de Rham double complex). The canonical inductive computation of $H^*(S^n)$ runs through this machinery — Bott-Tu's pedagogical heart. Closes Bott-Tu §1 → §2 within-chapter sequencing.

### diffgeo.de-rham.good-cover-induction

- **title**: Good covers, finite-dimensionality of de Rham cohomology, and the Mayer-Vietoris induction
- **unit**: `03.04.10`
- **prerequisites**: `diffgeo.de-rham.mayer-vietoris`, `topology.de-rham-cohomology`, `diffgeo.smooth-manifold`
- **tier_anchors**:
  - master: Bott-Tu §5; Spivak Vol. I §11 (geodesically convex neighborhoods); Whitehead-Greene 1949 *On C-1-complexes*
  - intermediate: Bott-Tu §5 (existence of good covers via geodesic convexity; finite-dimensionality)
  - beginner: contractible patches and contractible overlaps; the inductive computation of $H^*(S^n)$
- **notes**: A **good cover** of a smooth manifold is an open cover $\mathcal{U}$ such that every finite intersection $U_{\alpha_0 \cdots \alpha_p}$ is diffeomorphic to a Euclidean ball (in particular contractible). Existence: choose a Riemannian metric and use the fact that geodesically convex normal-coordinate neighborhoods exist around every point and have geodesically convex finite intersections. **Finite good cover** exists on every compact manifold; **countable good cover** on every paracompact manifold. The Mayer-Vietoris induction over a finite good cover proves: $H^*_{\mathrm{dR}}(M)$ is finite-dimensional in each degree on a compact manifold, vanishes above $\dim M$, and admits explicit inductive computation. Foundation for both the Čech-de Rham double-complex theorem and the Künneth / Poincaré-duality dual proofs.

### diffgeo.de-rham.cech-de-rham-double-complex

- **title**: Čech-de Rham double complex and the tic-tac-toe principle
- **unit**: `03.04.11`
- **prerequisites**: `diffgeo.de-rham.good-cover-induction`, `topology.de-rham-cohomology`, `diffgeo.de-rham.mayer-vietoris`, `alg-geom.sheaf-cohomology`
- **tier_anchors**:
  - master: Bott-Tu §8–§12 (originator-text for the tic-tac-toe pedagogy); Weil 1952 *Sur les théorèmes de de Rham*; Griffiths-Harris Ch. 0 §3
  - intermediate: Bott-Tu §8–§9; Madsen-Tornehave §10
  - beginner: two-direction grid of patch data; diagonal staircase ascent
- **notes**: Bigraded complex $K^{p,q}(\mathcal{U}) = \prod_{\alpha_0 < \cdots < \alpha_p} \Omega^q(U_{\alpha_0 \cdots \alpha_p})$ on a cover $\mathcal{U}$, with **Čech differential** $\delta$ horizontal (alternating-sum restriction), **de Rham differential** $d$ vertical (componentwise exterior derivative), and **total differential** $D = d + (-1)^p \delta$ on bidegree $(p, q)$. Total complex $\mathrm{Tot}^n(K) = \bigoplus_{p+q=n} K^{p, q}$. On a good cover, both row-collapse (yielding $H^*_{\mathrm{dR}}(M)$) and column-collapse (yielding $\check{H}^*(\mathcal{U}; \underline{\mathbb{R}})$) compute the same total cohomology — Weil's 1952 proof of the de Rham theorem. Tic-tac-toe ascent is the diagonal-staircase algorithm that makes the equivalence explicit. Generalised Mayer-Vietoris is the row exactness; tic-tac-toe Künneth and Poincaré duality follow from the bigraded structure. Prototype of the spectral sequence of a filtered complex (Bott-Tu §14). Notation $K^{p,q}$, $\mathrm{Tot}^n$, $\delta$ vs $d$, $D = d + (-1)^p \delta$ — Pass 4 §3.4 decisions #12, #13, #27, #28.

### diffgeo.de-rham.thom-cv-cohomology

- **title**: Compactly-supported cohomology, integration along the fiber, and the de Rham Thom isomorphism
- **unit**: `03.04.09`
- **prerequisites**: `diffgeo.de-rham.mayer-vietoris`, `topology.de-rham-cohomology`, `bundle.vector-bundle`, `diffgeo.stokes-theorem`
- **tier_anchors**:
  - master: Bott-Tu §6 (originator-text for the differential-form Thom isomorphism via the global angular form); Thom 1952 *Espaces fibrés en sphères et carrés de Steenrod*; Madsen-Tornehave §11
  - intermediate: Bott-Tu §6 (compact-vertical cohomology, integration along the fiber, Thom isomorphism)
  - beginner: integrating a fiber away to get a base form; the global angular form on a sphere bundle
- **notes**: $\Omega^*_c(M)$ compactly supported forms; $H^*_c(M)$ compactly supported cohomology. For a vector bundle $\pi \colon E \to M$, $\Omega^*_{cv}(E)$ is the **compactly-vertical** complex (forms whose support meets every fiber in a compact set; Bott-Tu coinage), and $H^*_{cv}(E)$ its cohomology. **Integration along the fiber** $\pi_* \colon \Omega^{p+r}_{cv}(E) \to \Omega^p(M)$ for a rank-$r$ oriented bundle commutes with $d$ and induces the **Thom isomorphism** $H^p(M) \cong H^{p+r}_{cv}(E)$, with inverse $\omega \mapsto \pi^* \omega \wedge \Phi$ for the **Thom class** $\Phi \in H^r_{cv}(E)$ characterised by $\int_{\mathrm{fiber}} \Phi = 1$. **Global angular form** $\psi$ on the unit-sphere bundle of an oriented rank-$r$ bundle, with **Bott-Tu sign convention** $d\psi = -\pi^* e(E)$. Provides the de Rham model of the Euler class as the obstruction to a global section, and dual proof (via Čech-de Rham of [03.04.11]) of the Thom isomorphism. Notation $\Omega^*_{cv}$, $H^*_{cv}$, $\Phi$, $\psi$ — Pass 4 §3.4 decisions #4, #8, #9, #21, #22.

### homotopy.spectral-sequence.filtered-complex

- **title**: Spectral sequences — exact couples, filtered complexes, double complexes
- **unit**: `03.13.01`
- **prerequisites**: `topology.de-rham-cohomology`, `diffgeo.de-rham.cech-de-rham-double-complex`
- **tier_anchors**:
  - master: Leray 1946 *L'anneau d'homologie d'une représentation* (CRAS 222) and 1950 (J. Math. Pures Appl. 29); Massey 1952 *Exact couples in algebraic topology* (Ann. of Math. 56); Bott-Tu §14 (originator-text for the double-complex pedagogy); Cartan-Eilenberg *Homological Algebra* §XV; McCleary *A User's Guide to Spectral Sequences* Ch. 1–3
  - intermediate: Bott-Tu §14; McCleary Ch. 1–2
  - beginner: a sequence of approximations to a cohomology that is too complicated to compute in one shot; pages refining each other through inclusion-exclusion bookkeeping
- **notes**: A spectral sequence is a tower of bigraded pages $\{E_r^{p, q}, d_r\}_{r \geq 1}$ with $d_r$ of bidegree $(r, 1-r)$ (notation decision #15), $H(E_r, d_r) = E_{r+1}$, and limiting page $E_\infty$ recovering an associated graded of a filtration on a target $H^*$. The convergence symbol $\Rightarrow$ (decision #30) denotes this abutment. Three equivalent presentations: Massey 1952 exact couples (the algebraic structure that drives the page-advance), filtered cochain complexes (the geometric source — bounded filtrations give the cleanest convergence), and double complexes with two anticommuting differentials $d', d''$ producing two spectral sequences ${}_I E$ and ${}_{II} E$ (decision #29) both abutting to $H^*(\operatorname{Tot})$. The Čech-de Rham double complex of [03.04.11] is the concrete prototype: its two collapsing spectral sequences prove the de Rham theorem on a good cover. Multiplicative structure: a filtered DGA gives each page the structure of a bigraded ring, $d_r$ a derivation, with $E_\infty$ the associated graded of the cup product. Edge homomorphisms and transgression supply the partial maps used in low-degree calculations. Master section channels Leray 1946 directly: invented at *Oflag XVII-A*, the prisoner-of-war camp where Leray hid his fluid-mechanics expertise behind the topological work that became sheaf theory and spectral sequences.

### homotopy.spectral-sequence.serre

- **title**: Leray-Serre spectral sequence and the Gysin sequence
- **unit**: `03.13.02`
- **prerequisites**: `homotopy.spectral-sequence.filtered-complex`, `diffgeo.de-rham.mayer-vietoris`, `bundle.vector-bundle`
- **tier_anchors**:
  - master: Leray 1950 (J. Math. Pures Appl. 29); Serre 1951 *Homologie singulière des espaces fibrés. Applications* (Ann. of Math. 54 — Serre's PhD thesis); Gysin 1942 *Zur Homologietheorie der Abbildungen und Faserungen von Mannigfaltigkeiten* (Comment. Math. Helv. 14); Bott-Tu §14–§17; McCleary §5–§6; Borel *Topology of Lie groups and characteristic classes* §I
  - intermediate: Bott-Tu §15; McCleary §5
  - beginner: cohomology of a fibred space computed by stacking cohomology-of-fibre on cohomology-of-base
- **notes**: For a fibration $F \to E \xrightarrow{\pi} B$ with $B$ simply connected (or a local system describing monodromy on $\pi_1(B)$), the Leray-Serre spectral sequence has $E_2^{p, q} = H^p(B; H^q(F))$ and converges multiplicatively to $H^{p+q}(E)$. Three canonical computations following Bott-Tu: (i) the Hopf fibration $S^1 \to S^3 \to S^2$ — non-trivial $d_2$ kills classes in degrees 1 and 2, giving $H^*(S^3)$ with classes only in 0 and 3; (ii) the trivial $S^1 \to T^2 \to S^1$ where the spectral sequence collapses at $E_2$ and recovers the Künneth product; (iii) the unit-circle bundle of $\mathcal{O}(1) \to \mathbb{C}P^k$ giving the cohomology of $S^{2k+1}$ via Gysin. The **Gysin sequence** is the long exact sequence
$$
\cdots \to H^{p-r}(B) \xrightarrow{\smile e(E)} H^p(B) \xrightarrow{\pi^*} H^p(SE) \xrightarrow{\pi_*} H^{p-r+1}(B) \to \cdots
$$
of an oriented sphere bundle of rank $r-1$ (sphere of total rank $r$ vector bundle), derivable as the edge spectral sequence of the Serre SS where $H^*(F) = H^*(S^{r-1})$ has only two non-zero degrees. The Euler class $e(E) \in H^r(B)$ is the transgression of the fibre fundamental class. Master section channels Serre 1951 PhD thesis: $\pi_4(S^3) = \mathbb{Z}/2$ via the Postnikov tower applied to the Serre SS of $K(\mathbb{Z}, 3) \to K(\mathbb{Z}, 3) \to *$.

### homotopy.spectral-sequence.leray-hirsch

- **title**: Leray-Hirsch theorem and the splitting principle for vector bundles
- **unit**: `03.13.03`
- **prerequisites**: `homotopy.spectral-sequence.serre`, `char-classes.pontryagin-chern.definitions`, `bundle.vector-bundle`
- **tier_anchors**:
  - master: Leray (multiple papers, 1946–50); Hirsch 1948 *Un isomorphisme attaché aux structures fibrées* (CRAS 227); Borel-Hirzebruch 1958 *Characteristic classes and homogeneous spaces I* (Amer. J. Math. 80) — the splitting-principle papers; Bott-Tu §17 + §21; Milnor-Stasheff §16; Husemoller *Fibre Bundles* §16
  - intermediate: Bott-Tu §17 (Leray-Hirsch); Bott-Tu §21 (splitting principle); Milnor-Stasheff §16
  - beginner: when fibre cohomology classes extend to total-space classes, the cohomology of the total space is the Künneth product of base and fibre
- **notes**: **Leray-Hirsch theorem.** For a fibre bundle $F \to E \xrightarrow{\pi} B$ with $H^*(F)$ free over the coefficient ring and finitely generated, if there exist global classes $e_1, \ldots, e_k \in H^*(E)$ whose restrictions to each fibre form a basis of $H^*(F)$, then $H^*(E)$ is a free $H^*(B)$-module on $\{e_i\}$:
$$
H^*(E) \cong H^*(B) \otimes_{\mathbb{Z}} H^*(F) \quad \text{as } H^*(B)\text{-modules}.
$$
This is the collapse-at-$E_2$ statement of the Leray-Serre spectral sequence. **Splitting principle.** For a complex vector bundle $E \to M$ of rank $n$, there exists a flag bundle $F\ell(E) \to M$ and a pullback under which $E$ splits as a sum of line bundles $L_1 \oplus \cdots \oplus L_n$. The cohomology pullback $H^*(M) \to H^*(F\ell(E))$ is injective (Leray-Hirsch on each successive projectivization). Consequence: any polynomial identity in Pontryagin/Chern classes that holds for sums of line bundles holds universally. This is the cleanest pedagogical move in the theory of characteristic classes — Borel-Hirzebruch 1958/59 codified the principle, which now drives every "compute by writing $c(E) = \prod (1 + x_i)$" argument. Master section channels Borel-Hirzebruch 1958 directly.

### homotopy.spectral-sequence.exercise-pack

- **title**: Spectral-sequence computation exercise pack (Bott-Tu Ch. III supplement)
- **unit**: `03.13.E1`
- **prerequisites**: `homotopy.spectral-sequence.filtered-complex`, `homotopy.spectral-sequence.serre`, `homotopy.spectral-sequence.leray-hirsch`
- **tier_anchors**:
  - intermediate: Bott-Tu §14–§18 exercise problems; McCleary Ch. 1–6 worked examples; Hatcher §4.2–§4.3; Borel 1953
- **notes**: Eighteen exercises covering general spectral-sequence machinery, Leray-Serre and Gysin computations, Leray-Hirsch and the splitting principle, and Eilenberg-Moore on the path-loop fibration. Distribution: 5 easy / 9 medium / 4 hard. Group I (5 easy): bidegree of $d_r$, convergence symbol semantics, exact-couple from a SES, two-filtration $E_2$ identification, collapse-at-$E_2$ from a row/column hypothesis. Group II (4 medium): Hopf fibration $S^3 \to S^2$ Serre SS, $S^1 \to S^3 \to S^2$ Gysin, $H^*(\mathbb{C}P^n)$ via Borel construction, Borel computation of $H^*(BU(n))$. Group III (5 medium): Leray-Hirsch on the projectivization $\mathbb{P}(E) \to M$, splitting principle for Pontryagin classes, $H^*(\mathrm{Gr}(2, 4))$, Whitney via splitting, $H^*(\Omega S^n)$ via Serre. Group IV (4 hard): $\pi_4(S^3) = \mathbb{Z}/2$ via Postnikov truncation of $K(\mathbb{Z}, 3)$, Eilenberg-Moore on the path-loop fibration, transgression in a specific bundle, multiplicative structure. Cross-cuts the three Batch units 03.13.01–03. Each exercise carries a hint and full answer in `<details>` blocks. Exercise-pack-only unit type — slimmed frontmatter with `tiers_present: [intermediate]`, no Lean infrastructure.

### homotopy.rational.sullivan-minimal-models

- **title**: Sullivan minimal models and rational homotopy theory
- **unit**: `03.12.06`
- **prerequisites**: `topology.eilenberg-maclane`, `topology.de-rham-cohomology`, `homotopy.spectral-sequence.serre`
- **tier_anchors**:
  - master: Sullivan 1977 *Infinitesimal computations in topology* (Publ. Math. IHÉS 47, 269–331); Quillen 1969 *Rational homotopy theory* (Annals of Math. 90); Bott-Tu §19 (originator-text for the differential-form-flavoured pedagogy); Félix-Halperin-Thomas *Rational Homotopy Theory* (GTM 205, 2001); Griffiths-Morgan *Rational Homotopy Theory and Differential Forms* (1981); Deligne-Griffiths-Morgan-Sullivan 1975 (Inventiones 29) — formality of compact Kähler manifolds
  - intermediate: Bott-Tu §19; Félix-Halperin-Thomas §10–§14
  - beginner: a small graded-commutative differential algebra over the rationals that recovers both the cohomology ring and the rational homotopy groups of a simply-connected space; Bott-Tu §19 worked examples
- **notes**: For a simply-connected space $X$ of finite rational type, the **Sullivan minimal model** is a quasi-isomorphism $\varphi : (\Lambda V, d) \xrightarrow{\sim} A_{PL}(X)$ where $\Lambda V$ is a free graded-commutative algebra on a graded $\mathbb{Q}$-vector space $V$, the differential $d$ satisfies $d V \subseteq \Lambda^{\geq 2} V$ (minimality), and $A_{PL}$ is the piecewise-polynomial de Rham functor sending $X$ to compatible polynomial forms over each simplex. **Sullivan's main theorem (1977):** $V^n \cong \mathrm{Hom}_\mathbb{Z}(\pi_n(X), \mathbb{Q})$, and the differential encodes Whitehead products and higher Massey products. Existence and uniqueness via the lifting lemma for minimal Sullivan algebras. Worked examples: $S^{2k}$ → $\Lambda(x, y)$ with $\deg x = 2k$, $\deg y = 4k-1$, $dy = x^2$; $S^{2k+1}$ → $\Lambda(x)$ with $\deg x = 2k+1$, $dx = 0$; $\mathbb{C}P^n$ → $\Lambda(x, y)$ with $\deg x = 2$, $\deg y = 2n+1$, $dy = x^{n+1}$. **Halperin's algorithm** computes the minimal model of a fibration $F \to E \to B$ as a perturbed tensor product $M_B \otimes \Lambda V_F$ with transgression encoded by the perturbation $\tau$. **Formality theorem (Deligne-Griffiths-Morgan-Sullivan 1975):** simply-connected compact Kähler manifolds have minimal models determined by their cohomology rings via the $dd^c$-lemma. Master section channels Sullivan 1977 *Publ. IHÉS* 47 directly: rational homotopy theory as the differential-form calculus on rational invariants, parallel to Quillen's DG-Lie-algebraic side, with Bott-Tu §19 the canonical pedagogical exposition.

### homotopy.universal-bundle-borel

- **title**: Universal bundle, $H^*(BU(k))$, and the Borel presentation of flag-manifold cohomology
- **unit**: `03.08.05`
- **prerequisites**: `k-theory.classifying-spaces`, `homotopy.spectral-sequence.serre`, `char-classes.pontryagin-chern.definitions`, `homotopy.spectral-sequence.leray-hirsch`
- **tier_anchors**:
  - master: Borel 1953 *Sur la cohomologie des espaces fibrés principaux et des espaces homogènes de groupes de Lie compacts* (Annals of Math. 57, 115–207) — PhD thesis; Steenrod 1951 *The Topology of Fibre Bundles* (Princeton); Bott-Tu §23; Milnor-Stasheff §14; Husemoller *Fibre Bundles* §4 + §16; Borel-Hirzebruch 1958 *Characteristic classes and homogeneous spaces I* (Amer. J. Math. 80)
  - intermediate: Bott-Tu §23 + §21 ("Flag manifolds"); Husemoller §4 + §16
  - beginner: a single bundle on a single space — the classifying space — that contains every rank-$k$ vector bundle as a pullback, plus a clean polynomial recipe for its cohomology
- **notes**: The **universal complex rank-$k$ bundle** $\gamma_k \to BU(k)$ is realised in the Grassmannian model $BU(k) = G_k(\mathbb{C}^\infty) = \varinjlim G_k(\mathbb{C}^n)$ as the colimit $\gamma_k = \varinjlim \gamma_k^n$ of the **tautological bundles** $\gamma_k^n \to G_k(\mathbb{C}^n)$ (notation decision #19). Steenrod's classification theorem identifies $[X, BU(k)]$ with rank-$k$ complex vector bundles on $X$ up to isomorphism, the bijection sending $[f]$ to $f^* \gamma_k$. The cohomology ring $H^*(BU(k); \mathbb{Z}) = \mathbb{Z}[c_1, \ldots, c_k]$ is the polynomial algebra on the universal Chern classes, $\deg c_i = 2i$; computed via the Leray-Serre spectral sequence of the fibration $\mathbb{C}P^\infty \to BU(k-1) \to BU(k)$ (or directly from the Schubert cell decomposition of the Grassmannian). **Borel presentation (1953):** for a compact Lie group $G$ with maximal torus $T$ of rank $r$ and Weyl group $W = N_G(T)/T$,
$$H^*(BG; \mathbb{Q}) \cong H^*(BT; \mathbb{Q})^W = \mathbb{Q}[t_1, \ldots, t_r]^W,$$
the ring of $W$-invariant polynomials in $r$ degree-$2$ generators. Specialisations: $G = U(n)$ gives $\mathbb{Q}[c_1, \ldots, c_n]$ (Chern classes); $G = SO(2n+1)$ gives $\mathbb{Q}[p_1, \ldots, p_n]$ (Pontryagin); $G = SO(2n)$ adds the Euler class. **Flag manifold $F\ell_n = U(n)/T$:** $H^*(F\ell_n; \mathbb{Z}) = \mathbb{Z}[x_1, \ldots, x_n]/(\text{symmetric polynomials of positive degree})$, the **Borel presentation of flag-manifold cohomology**, which carries the Schubert basis dual to the Schubert cells. Master section channels Borel 1953 (Annals 57) directly: the structural foundation of equivariant cohomology and characteristic-class theory.

### homotopy.whitehead-tower-rational-hurewicz

- **title**: Whitehead tower, rational Hurewicz theorem, and Serre's finiteness
- **unit**: `03.12.07`
- **prerequisites**: `topology.eilenberg-maclane`, `homotopy.rational.sullivan-minimal-models`, `homotopy.spectral-sequence.serre`
- **tier_anchors**:
  - master: G. W. Whitehead 1953 *On the homology suspension* (Annals of Math. 57); Hurewicz 1935-36 *Beiträge zur Topologie der Deformationen I-IV* (Proc. K. Akad. Wet. Amsterdam 38, 39); Serre 1953 *Groupes d'homotopie et classes de groupes abéliens* (Annals of Math. 58); Bott-Tu §17 + §18; Hatcher §4.2 + §4.3
  - intermediate: Bott-Tu §17–§18; Hatcher §4.2 (Hurewicz), §4.3 (Whitehead tower)
  - beginner: a tower of maps that successively *kill* the homotopy groups of a space starting from the bottom — dual to the Postnikov tower which kills from the top
- **notes**: The **Whitehead tower** of a connected space $X$ is a sequence $\cdots \to X\langle 3 \rangle \to X\langle 2 \rangle \to X\langle 1 \rangle \to X$ of fibrations such that $X\langle n \rangle$ is $n$-connected and the fibre $X\langle n \rangle \to X\langle n-1 \rangle$ is the Eilenberg-MacLane space $K(\pi_n(X), n-1)$. Dual to the Postnikov tower (which truncates from above), the Whitehead tower truncates from below: at each stage one *kills* the lowest non-vanishing homotopy group. The basepoint-loop space $\Omega X$ is the fibre of $PX \to X$ where $PX$ is the based path space (notation decision #32). **Hurewicz theorem (1935-36):** for a path-connected space $X$ with $\pi_i(X) = 0$ for $i < n$, the Hurewicz map $\pi_n(X) \to H_n(X; \mathbb{Z})$ is an isomorphism (and surjective with abelianisation kernel for $n = 1$). **Rational Hurewicz:** for simply-connected $X$, if $\pi_i(X) \otimes \mathbb{Q} = 0$ for $1 \leq i \leq n-1$, then $\pi_n(X) \otimes \mathbb{Q} \xrightarrow{\sim} H_n(X; \mathbb{Q})$ is an isomorphism, and $\pi_i(X) \otimes \mathbb{Q} \xrightarrow{\sim} H_i(X; \mathbb{Q})$ is an isomorphism for $1 \leq i \leq 2n - 2$. **Hopf invariant** $H(f) \in \mathbb{Z}$ (notation decision #34) of a map $f : S^{2n-1} \to S^n$: the integer counted by the linking number of two preimage spheres of generic regular values. Adams 1960 proved $H(f) = \pm 1$ only when $n \in \{1, 2, 4, 8\}$. **Serre's finiteness theorem (1953):** for $k \neq n$ and except $\pi_{4k-1}(S^{2k})$ which has a $\mathbb{Z}$-summand from the Hopf invariant, the homotopy groups $\pi_k(S^n)$ are finite. **Computations via Whitehead tower:** $\pi_4(S^3) = \mathbb{Z}/2$ via $S^3 \to K(\mathbb{Z}, 3)$ killing $\pi_3$; $\pi_5(S^3) = \mathbb{Z}/2$ via further truncation. Master section channels J.H.C. Whitehead 1953 + Hurewicz 1935-36 + Serre 1953 directly.

### homotopy.rational.exercise-pack

- **title**: Rational homotopy and Sullivan minimal-model exercise pack (Bott-Tu Ch. III §19 supplement)
- **unit**: `03.12.E1`
- **prerequisites**: `homotopy.rational.sullivan-minimal-models`, `homotopy.whitehead-tower-rational-hurewicz`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - intermediate: Bott-Tu §19 minimal-model exercises; Félix-Halperin-Thomas §10–§14 worked examples; Hatcher §4.2 + §4.3; Sullivan 1977
- **notes**: Eight exercises covering the Sullivan minimal-model machinery and rational homotopy. Distribution: 2 easy / 4 medium / 2 hard. Easy: minimal model of $S^{2k}$ (closed case), minimal model of $\mathbb{C}P^n$. Medium: minimal model of $\Omega S^n$ via Bott-Samelson; rational Hurewicz for a simply-connected space; minimal model of a fibration via Halperin's algorithm; minimal model of a Lie group as exterior algebra on primitive generators. Hard: Sullivan's solution to Serre's question $\pi_*(S^n) \otimes \mathbb{Q}$; formality of compact Kähler manifolds via the $dd^c$-lemma. Cross-cuts N12 and N14. Each exercise carries a hint and full answer in `<details>` blocks. Exercise-pack-only unit type — slimmed frontmatter with `tiers_present: [intermediate]`, no Lean infrastructure.
