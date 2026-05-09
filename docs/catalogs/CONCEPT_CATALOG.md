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

### topology.fundamental-group

- **title**: Fundamental group
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.homotopy`
- **tier_anchors**:
  - master: Poincaré 1895 *Analysis Situs* (originator); Hatcher §1.1; Brown *Topology and Groupoids* §6; tom Dieck §2
  - intermediate: Hatcher §1.1; Munkres §51-§52
  - beginner: Hatcher §1.1 informal; 3Blue1Brown loops-on-circle
- **notes**: $\pi_1(X, x_0)$ as homotopy classes of based loops $\gamma : [0,1] \to X$, $\gamma(0)=\gamma(1)=x_0$, under concatenation. Identity = constant loop; inverse = reversed loop. Functoriality $f_* : \pi_1(X, x_0) \to \pi_1(Y, y_0)$, $(g \circ f)_* = g_* \circ f_*$. Homotopy invariance: $f \simeq g$ implies $f_* = g_*$. Basepoint independence up to inner automorphism via path conjugation $\beta_\eta$. Standard examples: $\pi_1(\mathbb{R}^n) = 0$, $\pi_1(S^1) = \mathbb{Z}$ (winding number via universal cover), $\pi_1(S^n) = 0$ for $n \geq 2$, $\pi_1(\mathbb{T}^n) = \mathbb{Z}^n$, $\pi_1(\mathbb{RP}^n) = \mathbb{Z}/2$, $\pi_1(\Sigma_g)$ surface group, $\pi_1$(figure-eight) $= F_2$. Loop space $\Omega(X, x_0)$ with compact-open topology; $\pi_0(\Omega X) = \pi_1(X)$ and $\pi_n(X) = \pi_{n-1}(\Omega X)$. Galois correspondence between subgroups and connected covers (`topology.covering-space`). $\pi_1(X, x_0) = \mathrm{Aut}_{\pi_1(X)}(x_0)$ in the fundamental groupoid (`topology.fundamental-groupoid`). Originator Poincaré 1895.

### topology.fundamental-groupoid

- **title**: Fundamental groupoid
- **prerequisites**: `topology.homotopy`, `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Brown *Topology and Groupoids* §6, §10; Brown 1967 (originator paper); May *Concise Course* Ch. 2
  - intermediate: Brown §6; May Ch. 2
  - beginner: Brown §6 informal; loops-and-paths intuition
- **notes**: Small category $\pi_1(X)$ on points of $X$ with morphisms = path-homotopy classes; partial composition (concatenation when endpoints match); inverses by reversed paths; identity = constant path. Functor $\pi_1 : \mathbf{Top} \to \mathbf{Groupoid}$. Equivalent to one-object $\mathrm{B}\pi_1(X, x_0)$ when $X$ is path-connected. Brown's groupoid Seifert-van Kampen: $\pi_1(X, A)$ as a pushout, no path-connectedness hypothesis on $U \cap V$. Galois correspondence as equivalence $\mathbf{Cov}(X) \simeq \mathbf{Set}^{\pi_1(X)}$.

### topology.singular-homology

- **title**: Singular homology
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.homotopy`
- **tier_anchors**:
  - master: Eilenberg 1944 (originator); Hatcher §2.1--§2.2; May Ch. 13; tom Dieck §9
  - intermediate: Hatcher §2.1; Munkres *Elements of Algebraic Topology* §29
  - beginner: Hatcher §2.1 informal; chains-and-cycles intuition
- **notes**: Singular $n$-simplex $\sigma : \Delta^n \to X$. Free abelian chain group $C_n(X)$. Boundary $\partial = \sum (-1)^i d^i$, $\partial^2 = 0$. Homology $H_n(X) = \ker \partial_n / \mathrm{im}\, \partial_{n+1}$. Functoriality, homotopy invariance via prism/chain-homotopy. Reduced homology, augmentation. Coefficients $H_n(X; G)$. Mayer-Vietoris. Long exact sequence of a pair. Computations $H_n(\mathrm{pt})$, $H_n(S^k)$. Originator: Eilenberg 1944 *Singular homology theory* (Ann. Math. 45); precursors Vietoris 1927, Lefschetz 1933.

### topology.simplicial-homology

- **title**: Simplicial and $\Delta$-complex homology
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.homotopy`
- **tier_anchors**:
  - master: Hatcher §2.1; Eilenberg-Steenrod *Foundations of Algebraic Topology* §I; May Ch. 13
  - intermediate: Hatcher §2.1; Munkres *Elements* §6 + §13
  - beginner: Hatcher §2.1 informal triangulations
- **notes**: $\Delta$-complex / semi-simplicial structure on $X$ via characteristic maps with face conditions. Simplicial chain complex $C_n^\Delta(X)$ — finite-dim when $X$ is finite. Simplicial homology $H_n^\Delta(X)$. Comparison theorem (Hatcher 2.27): $H_n^\Delta(X) \cong H_n(X)$ via the natural chain map. Standard computations: $S^n$, $\mathbb{RP}^n$, $\mathbb{CP}^n$, genus-$g$ surfaces, lens spaces. Originator: Poincaré 1895 (simplicial chain complex); Eilenberg-Zilber 1950 / Eilenberg-Steenrod 1952 modern $\Delta$-framing.

### topology.cellular-homology

- **title**: Cellular homology and cellular approximation
- **prerequisites**: `topology.cw-complex`, `topology.singular-homology`
- **tier_anchors**:
  - master: Whitehead 1949 II (originator); Hatcher §2.2 + §4.1; Massey *A Basic Course* Ch. IX
  - intermediate: Hatcher §2.2; May Ch. 13
  - beginner: Hatcher §2.2 informal cell-counting
- **notes**: For a CW complex $X$, $C_n^{\mathrm{cell}}(X) = H_n(X^{(n)}, X^{(n-1)})$. Cellular boundary via long-exact-sequence connecting map; explicit degree formula $d_n(e_\alpha^n) = \sum \deg(\phi_{\alpha\beta}) e_\beta^{n-1}$. Cellular = singular: $H_n^{\mathrm{cell}}(X) \cong H_n(X)$ (Hatcher 2.35). Computational power: $\mathbb{CP}^n$ has zero boundaries (no consecutive cells); $\mathbb{RP}^n$ has $\partial = 1 + (-1)^k$. Cellular approximation theorem: every continuous CW-map is homotopic to a cellular map (Hatcher 4.8). Originator: J.H.C. Whitehead 1949 *Combinatorial homotopy II*.

### topology.excision

- **title**: Excision theorem
- **prerequisites**: `topology.singular-homology`, `topology.cellular-homology`
- **tier_anchors**:
  - master: Eilenberg-Steenrod *Foundations of Algebraic Topology* §I (axiomatic); Hatcher §2.1 (full proof); May Ch. 13
  - intermediate: Hatcher §2.1 + Theorem 2.20
  - beginner: Hatcher §2.1 informal
- **notes**: For $Z \subseteq A \subseteq X$ with $\overline Z \subseteq \mathrm{int}(A)$, the inclusion induces $H_n(X \setminus Z, A \setminus Z) \cong H_n(X, A)$. Equivalent open-cover form: $X = \mathrm{int}(A) \cup \mathrm{int}(B) \Rightarrow H_n(B, A \cap B) \cong H_n(X, A)$. Proof via barycentric subdivision + Lebesgue-number argument. Consequences: Mayer-Vietoris derivation; $H_n(D^k, S^{k-1}) \cong \tilde H_{n-1}(S^{k-1})$; cellular boundary formula. Originator: Eilenberg-Steenrod 1952 (axiomatic elevation); precursor in Eilenberg 1944.

### topology.eilenberg-steenrod

- **title**: Eilenberg-Steenrod axioms
- **prerequisites**: `topology.singular-homology`, `topology.excision`
- **tier_anchors**:
  - master: Eilenberg-Steenrod 1945 + 1952 *Foundations of Algebraic Topology* (originator); Hatcher §2.3 + §4.1; tom Dieck §17
  - intermediate: Hatcher §2.3; May Ch. 13
  - beginner: Hatcher §2.3 informal
- **notes**: Axioms for ordinary homology: homotopy, long exact sequence of a pair, excision, additivity, naturality, dimension ($h_n(\mathrm{pt}) = 0$ for $n \neq 0$), and weak-equivalence. Uniqueness theorem: any two theories satisfying dimension and agreeing on $\mathrm{pt}$ are naturally isomorphic on CW pairs. Generalised cohomology theories drop dimension axiom (K-theory, cobordism, stable homotopy). Brown representability via spectra. Singular = simplicial = cellular = Čech all satisfy axioms; uniqueness explains agreement.

### topology.poincare-duality

- **title**: Poincaré duality
- **prerequisites**: `topology.singular-homology`, `topology.cellular-homology`, `topology.excision`, `topology.eilenberg-steenrod`
- **tier_anchors**:
  - master: Poincaré 1895/1899 (originator); Hatcher §3.3 (full proof); Milnor-Stasheff §11; Bott-Tu §5; Spivak (de Rham)
  - intermediate: Hatcher §3.3; Bredon §VI
  - beginner: Hatcher §3.3 informal
- **notes**: For closed oriented $n$-manifold $M$, cap with $[M]$ gives $H^k(M; \mathbb{Z}) \cong H_{n-k}(M; \mathbb{Z})$. $\mathbb{Z}/2$-coefficients version: works without orientation. Lefschetz duality for manifolds with boundary. de Rham version: integration pairing on closed oriented smooth manifolds. Consequences: vanishing $\chi$ for odd-dim closed manifolds, signature theorem, Hirzebruch L-genus. Originator: Poincaré *Analysis Situs* 5th supplement; modern proof Lefschetz 1930 + Eilenberg-Steenrod 1952; de Rham 1931 (smooth version).

### topology.cap-product

- **title**: Cap product
- **prerequisites**: `topology.singular-homology`, `topology.cellular-homology`
- **tier_anchors**:
  - master: Eilenberg-Steenrod 1952 §V (axiomatic); Spanier *Algebraic Topology* §V; Hatcher §3.3
  - intermediate: Hatcher §3.3; Bredon §VI
  - beginner: Hatcher §3.3 informal
- **notes**: Front-face/back-face split: $\phi \frown \sigma = \phi(\sigma|_{[v_0, \ldots, v_k]}) \cdot \sigma|_{[v_k, \ldots, v_n]}$. Bilinear $\frown : C^k \otimes C_n \to C_{n-k}$, descends to homology via Leibniz rule $\partial(\phi \frown \sigma) = (-1)^k(\delta\phi \frown \sigma - \phi \frown \partial\sigma)$. Makes $H_*(X)$ a graded $H^*(X)$-module. Naturality (projection formula): $f_*(f^*\phi \frown \alpha) = \phi \frown f_*\alpha$. Cap-cup compatibility: $\phi \frown (\psi \frown \alpha) = (\psi \smile \phi) \frown \alpha$. Cap with fundamental class $-\frown[M]$ is the Poincaré-duality isomorphism. Originator: Čech 1936 / Whitney 1938 / Lefschetz 1942; axiomatised in Eilenberg-Steenrod 1952.

### topology.universal-coefficient

- **title**: Universal coefficient theorem (homology and cohomology)
- **prerequisites**: `topology.singular-homology`, `topology.cellular-homology`
- **tier_anchors**:
  - master: Cartan-Eilenberg *Homological Algebra* 1956 (originator algebraic); Hatcher §3.1 + §3.A; Weibel *Introduction to Homological Algebra*; tom Dieck §17
  - intermediate: Hatcher §3.A and §3.1
  - beginner: Hatcher §3.A informal
- **notes**: Homology UCT: split SES $0 \to H_n(X) \otimes G \to H_n(X; G) \to \mathrm{Tor}(H_{n-1}(X), G) \to 0$. Cohomology UCT: $0 \to \mathrm{Ext}(H_{n-1}(X), G) \to H^n(X; G) \to \mathrm{Hom}(H_n(X), G) \to 0$. Algebraic version for any chain complex of free abelian groups. Tor and Ext as derived functors. Field-coefficient case: Tor and Ext vanish in characteristic 0. Bockstein homomorphism via SES $0 \to \mathbb{Z} \to \mathbb{Z} \to \mathbb{Z}/n \to 0$. Originator: Cartan-Eilenberg 1956 (algebraic); Eilenberg-Steenrod 1952 (topological).

### symplectic-geometry.ags-convexity

- **title**: Atiyah-Guillemin-Sternberg convexity theorem
- **prerequisites**: `symplectic-geometry.moment-map`, `symplectic-geometry.symplectic-manifold`
- **tier_anchors**:
  - master: Atiyah 1982 + Guillemin-Sternberg 1982 (originator papers, simultaneous); Cannas da Silva §27; Audin *Topology of Torus Actions* §IV; Kirwan *Cohomology of Quotients* §3
  - intermediate: Cannas §27; Audin §IV
  - beginner: Cannas §27 informal
- **notes**: For closed connected $(M, \omega)$ with Hamiltonian $T = T^k$ action and moment map $\mu : M \to \mathfrak{t}^*$: (i) $\mu(M)$ is a convex polytope; (ii) $\mu(M) = \mathrm{conv}(\mu(M^T))$; (iii) every fibre $\mu^{-1}(c)$ is connected. Atiyah's proof: Morse-Bott analysis of $\mu^\xi$, even index/coindex via weight-space decomposition, level-set connectedness via even-index attaching, induction on rank. Examples: $S^2$ height function, $\mathbb{CP}^n$ standard polytope, coadjoint orbits / Schur-Horn permutohedron. Originators: Atiyah 1982 *Convexity and commuting Hamiltonians*; Guillemin-Sternberg 1982 *Convexity properties of the moment mapping*.

### topology.hurewicz-theorem

- **title**: Hurewicz theorem
- **prerequisites**: `topology.homotopy`, `topology.singular-homology`
- **tier_anchors**:
  - master: Hurewicz 1935-36 four-paper series in *Proc. Konink. Akad. Wetensch. Amsterdam* (originator); Hatcher §4.2 (full proof); tom Dieck §6; May Ch. 11
  - intermediate: Hatcher §2.A + §4.2
  - beginner: Hatcher §2.A informal
- **notes**: Hurewicz map $h_n : \pi_n(X) \to H_n(X)$, $[\sigma] \mapsto \sigma_*[S^n]$. Low-dim form (Hatcher 2A.1): $h_1 : \pi_1 \to H_1$ is abelianisation map. Higher-dim form (Hatcher 4.32): if $X$ is $(n-1)$-connected then $H_k(X) = 0$ for $1 \leq k < n$ and $h_n$ is iso. Relative form (Hatcher 4.37). $\pi_n(S^n) = \mathbb{Z}$ as a basic computation. Hopf map shows non-injectivity of $h_3 : \pi_3(S^2) \to H_3(S^2) = 0$. Originator: Witold Hurewicz 1935-36 four-paper series.

### topology.whitehead-theorem

- **title**: Whitehead's theorem
- **prerequisites**: `topology.cw-complex`, `topology.homotopy`, `topology.hurewicz-theorem`
- **tier_anchors**:
  - master: Whitehead 1949 *Combinatorial homotopy I+II* (originator); Hatcher §4.1 (full proof + Warsaw counterexample); tom Dieck §8
  - intermediate: Hatcher §4.1; May Ch. 10
  - beginner: Hatcher §4.1 informal
- **notes**: A continuous map $f : X \to Y$ between CW complexes inducing iso on all $\pi_n$ is a homotopy equivalence (Hatcher 4.5). Proof via cellular approximation + HEP for CW pairs + skeleton-by-skeleton inductive obstruction-theoretic construction of homotopy inverse. Mapping-cylinder reformulation. Hurewicz + Whitehead corollary: simply-connected CW complexes with iso on all $H_n$ are homotopy-equivalent. Warsaw circle is the standard counterexample for the CW hypothesis. Originator: J.H.C. Whitehead 1949.

### symplectic-geometry.contact-manifold

- **title**: Contact manifold
- **prerequisites**: `symplectic-geometry.symplectic-manifold`, `diffgeo.exterior-derivative`
- **tier_anchors**:
  - master: Lie 1872 (origins); Cartan early 20th c. (manifold framing); Reeb 1952 (Reeb vector field); Gray 1959 (rigidity); Geiges *An Introduction to Contact Topology* 2008
  - intermediate: Cannas da Silva §10; Geiges Ch. 1-2
  - beginner: Cannas §10 informal; Geiges Ch. 1
- **notes**: Odd-dimensional manifold $M^{2n+1}$ with maximally non-integrable codimension-1 hyperplane field $\xi \subset TM$, locally $\xi = \ker\alpha$ with $\alpha \wedge (d\alpha)^n \neq 0$. Co-orientable (global $\alpha$) vs non-co-orientable. Reeb vector field $R$: $\iota_R\alpha = 1, \iota_R d\alpha = 0$. Standard examples: $\mathbb{R}^{2n+1}$ with $dz - \sum y_i dx_i$; $S^{2n+1} \subset \mathbb{C}^{n+1}$ Sasakian; $S(T^*M)$ unit-cotangent (Reeb = geodesic flow); $J^1(M, \mathbb{R})$. Contact Darboux via Moser. Symplectisation $(M \times \mathbb{R}, d(e^t \alpha))$. Legendrian = $n$-dim submanifold tangent to $\xi$. Gray's theorem (1959): isotopic contact structures are diffeomorphic. Tight/overtwisted dichotomy (Eliashberg 1989).

### symplectic-geometry.generating-functions

- **title**: Generating functions for symplectomorphisms
- **prerequisites**: `symplectic-geometry.lagrangian-submanifold`, `symplectic-geometry.weinstein-neighbourhood`, `symplectic-geometry.symplectic-manifold`
- **tier_anchors**:
  - master: Hamilton 1834 (origins); Hörmander 1971 *Fourier integral operators I* (Acta Math. 127, GFQI); Viterbo 1992 (symplectic-capacity applications); Cannas §22; McDuff-Salamon Ch. 9 + 11
  - intermediate: Cannas §22; McDuff-Salamon Ch. 9
  - beginner: Arnold *Mathematical Methods of Classical Mechanics* §47 informal
- **notes**: Graph of symplectomorphism $\phi : T^*M \to T^*M$ as a Lagrangian in $T^*M \times T^*M \cong T^*(M \times M)$. Type-1 generating function $F : M \times M \to \mathbb{R}$. Four classical types (physics literature). Generating function for exact Lagrangian = scalar potential $S : M \to \mathbb{R}$. Hörmander 1971 GFQI: every closed Lagrangian admits a generating function quadratic at infinity. Sikorav-Viterbo theorem: GFQIs for Hamiltonian-isotopic Lagrangians are equivalent up to stabilisation/fibre-change/constants — gives spectral invariants. Discrete action principle: critical points = fixed points / Lagrangian intersections. Conley-Zehnder used GFQI for the torus Arnold conjecture (1983).

### symplectic-geometry.delzant-theorem

- **title**: Delzant theorem (symplectic toric classification)
- **prerequisites**: `symplectic-geometry.moment-map`, `symplectic-geometry.ags-convexity`, `symplectic-geometry.symplectic-reduction`
- **tier_anchors**:
  - master: Delzant 1988 *Hamiltoniens périodiques et images convexes de l'application moment* (Bull. SMF 116, originator); Cannas §28; Audin *Topology of Torus Actions* §VII; Guillemin *Moment Maps* (Birkhauser 1994)
  - intermediate: Cannas §28; Audin §VII
  - beginner: Cannas §28 informal
- **notes**: Bijection between symplectic toric manifolds (closed, effective Hamiltonian half-dim torus action) and Delzant polytopes (simple + rational + smooth). Five-step construction: facet primitive normals $v_i$; surjection $\beta : \mathbb{R}^d \to \mathbb{R}^n$; kernel torus $K$; standard $T^d$-action on $\mathbb{C}^d$ with diagonal moment map; symplectic reduction $M_\Delta = \mu_K^{-1}(0)/K$. Examples: standard simplex = $\mathbb{CP}^n$ (Fubini-Study); standard cube = $(\mathbb{CP}^1)^n$; trapezoid = Hirzebruch $\mathbb{F}_n$. Originator: Delzant 1988.

### symplectic-geometry.duistermaat-heckman

- **title**: Duistermaat-Heckman theorem
- **prerequisites**: `symplectic-geometry.moment-map`, `symplectic-geometry.symplectic-reduction`, `symplectic-geometry.ags-convexity`
- **tier_anchors**:
  - master: Duistermaat-Heckman 1982 *On the variation in the cohomology of the symplectic form of the reduced phase space* (Invent. Math. 69, originator); Atiyah-Bott 1984 *The moment map and equivariant cohomology* (Topology 23); Cannas §31; Audin §IV.4; Guillemin-Sternberg *Supersymmetry and Equivariant de Rham Theory*
  - intermediate: Cannas §31; Audin §IV.4
  - beginner: Cannas §31 informal
- **notes**: Pushforward of Liouville volume $\omega^n/n!$ under moment map $\mu : M \to \mathfrak{t}^*$ has piecewise-polynomial density $\rho(t)$ of degree $\le n - k$ on chambers of $\mu(M) \setminus \mathcal{W}$, walls $\mathcal{W}$ being moment-map images of fixed-point components of proper subtori. Three formulations: (1) pushforward density polynomial; (2) equivariant integration $\int_M e^{i\langle t, \mu\rangle}\omega^n/n! = \sum_F \int_F e^{i\langle t, \mu(F)\rangle}/e_T(\nu_F)$ over fixed-point components; (3) reduced symplectic volume $\mathrm{vol}(M_t, \omega_t)$ polynomial in $t$. Proof spine: linear variation $[\omega_t] = [\omega_{t_0}] + \langle t - t_0, c_T\rangle$ in cohomology of reduced space; binomial-theorem expansion gives polynomial of degree $\le n - k$. Toric corollary: for symplectic toric $M$, $\int_M \omega^n/n! = (2\pi)^n \mathrm{vol}_{\mathrm{Leb}}(\Delta)$. Worked examples: $S^2$ rotation (constant $\rho = 2\pi$); $\mathbb{CP}^n$ toric (constant $\rho = (2\pi)^n$); coadjoint orbit of $U(n)$ (Harish-Chandra-Itzykson-Zuber integral via Weyl-image fixed points). Prototype of equivariant localisation, subsumed by Atiyah-Bott / Berline-Vergne 1982-1984; non-Abelian generalisation Witten 1992. Originators: Duistermaat-Heckman 1982; Atiyah-Bott 1984 (abstract).

### symplectic-geometry.symplectic-blowup

- **title**: Symplectic blow-up and symplectic cut
- **prerequisites**: `symplectic-geometry.symplectic-reduction`, `symplectic-geometry.delzant-theorem`, `symplectic-geometry.almost-complex`
- **tier_anchors**:
  - master: Lerman 1995 *Symplectic cuts* (Math. Res. Lett. 2, originator of the cut construction); McDuff-Polterovich 1994 *Symplectic packings and algebraic geometry* (Invent. Math. 115); Cannas §29; McDuff-Salamon *Introduction to Symplectic Topology* Ch. 7 and Ch. 9; Beauville *Complex Algebraic Surfaces* Ch. II
  - intermediate: Cannas §29; McDuff-Salamon Ch. 7
  - beginner: Cannas §29 informal
- **notes**: Symplectic analogue of the algebraic blow-up: replace a Darboux ball $B(p, \delta) \subset (M, \omega)$ around a point $p$ with a tubular neighbourhood of $\mathbb{CP}^{n - 1}$ (the exceptional divisor, scaled by $\delta$). Two equivalent constructions: (i) Lerman's symplectic cut at level $\mu = \delta$ for the rotational $S^1$-action with moment map $\mu(z) = \pi\|z\|^2$ on the Darboux ball, giving $M_\delta = \mu^{-1}([0, \delta])/{\sim}$ where the $\delta$-level is collapsed by the $S^1$-action; (ii) explicit gluing via the tautological line bundle $\mathcal{O}_{\mathbb{P}^{n-1}}(-1)$ over $\mathbb{CP}^{n-1}$, with the Hopf-style projection making the symplectic form patch smoothly. Properties: $H^*(\widetilde M) = H^*(M) \oplus H^*(\mathbb{CP}^{n-1})_{\geq 1}$ additively; for surfaces ($n = 2$) introduces a $(-1)$-curve, a symplectic 2-sphere of self-intersection $-1$; symplectic volume $\mathrm{vol}(\widetilde M) = \mathrm{vol}(M) - \mathrm{vol}(B(p, \delta)) + \mathrm{vol}(\mathbb{CP}^{n-1}_\delta) = \mathrm{vol}(M) - O(\delta^{2n})$. Examples: blow-up of $\mathbb{CP}^2$ at a point = Hirzebruch surface $\mathbb{F}_1$; blow-up of $\mathbb{CP}^1 \times \mathbb{CP}^1$ at a point; symplectic cut on toric varieties chops the Delzant polytope along a hyperplane. Inverse: Castelnuovo's contractibility theorem (a $(-1)$-curve in a smooth projective surface contracts to a smooth point) has a symplectic analogue. Applications: birational classification of complex surfaces (Castelnuovo-Beauville-Bombieri); symplectic-embedding flexibility / obstructions (McDuff-Polterovich 1994); compactification of Donaldson instanton moduli spaces (ideal instantons via blow-ups). Originator: algebraic side, Cremona / Italian school 19th c.; symplectic side, Gromov 1985 (sketched) and Lerman 1995 (cut construction made explicit); McDuff-Polterovich 1994 systematic embedding applications.

### symplectic-geometry.symplectisation

- **title**: Symplectisation of a contact manifold
- **prerequisites**: `symplectic-geometry.contact-manifold`, `symplectic-geometry.symplectic-manifold`
- **tier_anchors**:
  - master: Geiges Ch. 2; Cieliebak-Eliashberg *From Stein to Weinstein and Back* (2012); McDuff-Salamon Ch. 11; Eliashberg-Hofer SFT survey 2000
  - intermediate: Geiges Ch. 2; Cannas §10
  - beginner: Geiges §2 informal
- **notes**: Symplectisation $(M \times \mathbb{R}, d(e^t \alpha))$ of a co-orientable contact manifold. Verification via $(e^t\alpha)^{n+1} = e^{(n+1)t} dt \wedge \alpha \wedge (d\alpha)^n$. Independence of contact-form choice via $(p, t) \mapsto (p, t - \log f(p))$. Liouville structure with primitive $\lambda = e^t\alpha$ and Liouville vector field $\partial_t$. Reeb-flow lift. Floer-theoretic relevance: SFT (Eliashberg-Givental-Hofer 2000) and ECH (Hutchings 2002). Worked example: $S^{2n+1} \subset \mathbb{C}^{n+1}$ symplectisation = $\mathbb{C}^{n+1}\setminus\{0\}$.

### symplectic-geometry.gray-theorem

- **title**: Gray's stability theorem
- **prerequisites**: `symplectic-geometry.contact-manifold`, `symplectic-geometry.moser-trick`
- **tier_anchors**:
  - master: Gray 1959 *Some global properties of contact structures* (Ann. Math. 69, originator); Geiges Ch. 2; McDuff-Salamon Ch. 11
  - intermediate: Geiges Ch. 2; Cannas §10
  - beginner: Geiges Ch. 2 informal
- **notes**: A smooth path of contact structures on a closed manifold is induced by an isotopy. Proof: Moser-trick adaptation. Choose contact forms $\alpha_t$, seek $\psi_t^*\alpha_t = \lambda_t \alpha_0$. The contact condition makes the tangent equation $\iota_{X_t}d\alpha_t|_{\xi_t} = -\dot\alpha_t|_{\xi_t}$ uniquely solvable for $X_t \in \xi_t$. Integrate. Consequences: classification up to homotopy = up to diffeomorphism on closed manifolds; Reeb-dynamics stability; foundation for SFT/ECH. 3D extra: tight/overtwisted dichotomy (Eliashberg 1989). Originator: J.W. Gray 1959.

### symplectic-geometry.contact-topology-survey

- **title**: Contact topology and Reeb dynamics (survey)
- **prerequisites**: `symplectic-geometry.contact-manifold`, `symplectic-geometry.symplectisation`, `symplectic-geometry.gray-theorem`
- **tier_anchors**:
  - master: Bennequin 1983 *Entrelacements et équations de Pfaff* (Astérisque 107-108, originator of tight/overtwisted); Eliashberg 1989 (Inventiones, overtwisted classification); Giroux 2002 ICM *Géométrie de contact* (open-book correspondence); Taubes 2007 *The Seiberg-Witten equations and the Weinstein conjecture* (Geom. Topol. 11); Geiges *An Introduction to Contact Topology* Ch. 4-8; Cieliebak-Eliashberg *From Stein to Weinstein and Back* (2012); Hutchings *Lecture notes on embedded contact homology*
  - intermediate: Geiges Ch. 4-5; Etnyre *Lectures on Contact Geometry*
  - beginner: Geiges §1 + 4 informal
- **notes**: Survey unit (Cannas P4 optional pointer expanded). Tight vs overtwisted dichotomy (Eliashberg 1989): on closed contact 3-manifolds, overtwisted structures are classified up to isotopy by homotopy classes of plane fields; tight structures are subtle (Bennequin 1983 standard $\mathbb{R}^3$ tight, distinct from the overtwisted same-homotopy-class form). Reeb dynamics: closed orbits of $R_\alpha$. Weinstein conjecture (1979): every Reeb vector field on a closed contact manifold has at least one closed orbit; proven dim 3 by Taubes 2007 via Seiberg-Witten Floer. Floer-theoretic invariants from pseudoholomorphic curves in symplectisations: Symplectic Field Theory (Eliashberg-Givental-Hofer 2000), Embedded Contact Homology (Hutchings 2002), cylindrical contact homology. Legendrian knots: classical invariants (Thurston-Bennequin, rotation number); refined invariants (Chekanov-Eliashberg DGA 1997, Legendrian contact homology). Convex surface theory (Giroux 1991): characteristic foliation gives discrete neighbourhood data; foundation for cut-and-paste. Open-book decompositions and Giroux correspondence (2002): closed oriented contact 3-manifolds ↔ stable equivalence classes of open books. Higher-dimensional contact topology: Borman-Eliashberg-Murphy 2015 existence h-principle for overtwisted; Cieliebak-Eliashberg 2012 Weinstein-domain technology. Open problems: cardinality of tight structures, ECH spectral invariants, Stein-vs-Weinstein boundary rigidity, contact mapping class groups. Originators: Bennequin 1983; Eliashberg 1989-92; Giroux 2002; Taubes 2007.

### symplectic-geometry.kam-theorem

- **title**: Kolmogorov-Arnold-Moser theorem
- **prerequisites**: `symplectic-geometry.integrable-system`, `symplectic-geometry.action-angle-coordinates`, `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.generating-functions`
- **tier_anchors**:
  - master: Kolmogorov 1954 + Arnold 1963 + Moser 1962 (originator papers); Arnold-Kozlov-Neishtadt *Math. Aspects of Classical & Celestial Mechanics* Ch. 5; Pöschel 1982; Salamon 2004
  - intermediate: Arnold *Mathematical Methods* Appendix 8; Wayne 1996 lecture notes
  - beginner: Strogatz §8 informal
- **notes**: APEX UNIT. Persistence of invariant tori under Hamiltonian perturbation. Setup: integrable $H_0(I)$ with action-angle coords; perturbation $H_\epsilon = H_0 + \epsilon H_1$. Diophantine condition $|\langle k, \omega^*\rangle| \geq \gamma/|k|^\tau$. Kolmogorov non-degeneracy $\det \partial^2 H_0/\partial I^2 \neq 0$. Theorem: Diophantine torus survives for small $\epsilon$. Newton-iteration / KAM scheme: cohomological equation, Fourier decomposition, super-exponential convergence with controlled analyticity loss. Measure conclusion: $1 - C\sqrt\epsilon$ of phase space remains invariant. Refinements: Moser twist 1962, Pöschel $C^k$ 1982, lower-dim tori, Nekhoroshev exponential stability, Aubry-Mather. Applications: solar-system stability, magnetic confinement, beam dynamics. Originators: Kolmogorov 1954 (4-page Dokl. announcement); Arnold 1963 (full proof); Moser 1962 (smooth twist version).

### classical-mechanics.galilean-newtonian-setup

- **title**: Galilean group and Newtonian mechanics
- **prerequisites**: `manifolds.smooth-manifold`
- **tier_anchors**:
  - master: Newton 1687 *Principia* (originator); Bargmann 1954 *Annals of Math.* 59 (central extension / projective representations); Souriau 1970 *Structure des systèmes dynamiques*; Marsden-Ratiu Ch. 1; Arnold *Mathematical Methods* Appendix 1
  - intermediate: Arnold *Mathematical Methods* Ch. 1; Marsden-Ratiu Ch. 1
  - beginner: Strogatz §1 informal; Arnold Ch. 1 informal
- **notes**: Galilean spacetime as affine 4-space $\mathbb{A}^4$ with absolute time $t : \mathbb{A}^4 \to \mathbb{R}$ and Euclidean structure on each time-fibre. Galilean group $\mathrm{Gal}(4)$ as 10-parameter group of affine transformations preserving time differences and fibre Euclidean structure: spatial translations $\mathbb{R}^3$, time translation $\mathbb{R}$, rotations $\mathrm{SO}(3)$, Galilean boosts $\mathbb{R}^3$, with semi-direct product structure. Inertial frames = Galilean coordinate systems; Galilean relativity principle. Newton's laws restated geometrically on a configuration manifold $Q$ with Newton's 2nd $m_i \ddot q_i = F_i(q, \dot q, t)$ and determinism principle (state $(q, \dot q, t)$ determines the future). Conservative forces $F = -\nabla V$; Lagrangian $L = T - V$ as the bridge to the Lagrangian formalism. Examples: free particle (Newton's 1st), two-body Kepler, $N$-body system with Galilean invariance giving energy / momentum / angular momentum / centre-of-mass conservation laws. Lie algebra $\mathfrak{gal}(4)$ 10-dim with brackets among translations / boosts / rotations. Inönü-Wigner contraction $c \to \infty$ from Poincaré group. Bargmann central extension by $\mathbb{R}$ governs projective QM representations; mass = central charge (Lévy-Leblond 1963). Originator: Galileo 1632 *Dialogue* (relativity principle); Newton 1687 *Principia*; modern group-theoretic framing Bargmann 1954, Souriau 1970.

### classical-mechanics.lagrangian-on-tm

- **title**: Lagrangian mechanics on the tangent bundle
- **prerequisites**: `manifolds.smooth-manifold`
- **tier_anchors**:
  - master: Lagrange 1788 *Mécanique analytique* (originator); Abraham-Marsden *Foundations of Mechanics* §3.5; Arnold §4 + Appendix 1; Souriau 1970
  - intermediate: Arnold §2-§4; Marsden-Ratiu Ch. 1-2
  - beginner: Strogatz §1 informal; Arnold §4 informal
- **notes**: Configuration space $Q$, tangent bundle $TQ = \{(q, \dot q)\}$, Lagrangian $L : TQ \to \mathbb{R}$ (often $T - V$). Action $S[\gamma] = \int L\, dt$. Euler-Lagrange equations $\frac{d}{dt}(\partial L/\partial \dot q^i) - \partial L/\partial q^i = 0$ as critical-point condition. Coordinate-free framing via Poincaré-Cartan one-form $\theta_L = (\partial L/\partial \dot q^i) dq^i$. Energy $E_L = \dot q^i (\partial L/\partial \dot q^i) - L$ as Hamilton-prefiguration. Examples: free particle, particle-in-potential = Newton's 2nd law, geodesics, pendulum. Regularity / hyper-regularity controlling Legendre transform. Originator: Lagrange 1788; modern coordinate-free framing mid-20th-c.

### classical-mechanics.hamilton-principle

- **title**: Hamilton's principle of least action
- **prerequisites**: `classical-mechanics.lagrangian-on-tm`
- **tier_anchors**:
  - master: Hamilton 1834 *On a general method in dynamics* (Phil. Trans., originator); Arnold §4 + Appendix 1; Abraham-Marsden §3.5; Marsden-Ratiu Ch. 1
  - intermediate: Arnold §4; Goldstein *Classical Mechanics* §2
  - beginner: Strogatz informal; Arnold §4 informal
- **notes**: Path is a physical trajectory iff it is a critical point of the action functional $S[\gamma] = \int L(\gamma, \dot\gamma) dt$ among paths with fixed endpoints. First-variation formula: $\delta S = \int (\partial L/\partial q - d/dt(\partial L/\partial \dot q)) \delta q\, dt$ + boundary, which vanishes by endpoint condition. Vanishing for arbitrary $\delta q$ ⇔ Euler-Lagrange. Equivalence with Newton's 2nd law for $L = T - V$. Maupertuis reparametrisation pitfall and Jacobi metric. D'Alembert principle for non-conservative forces. Holonomic constraints via Lagrange multipliers. Field-theory generalisation: Klein-Gordon, Maxwell, Yang-Mills, Einstein-Hilbert. Originator: Hamilton 1834; Maupertuis 1744 less-precise predecessor.

### classical-mechanics.legendre-transform

- **title**: Legendre transform
- **prerequisites**: `classical-mechanics.lagrangian-on-tm`
- **tier_anchors**:
  - master: Legendre 1787 (originator algebraic transform); Abraham-Marsden §3.6; Arnold §15 + App. 4; Marsden-Ratiu Ch. 7; Rockafellar *Convex Analysis* §12
  - intermediate: Arnold §15; Goldstein §8
  - beginner: Arnold §15 informal; Goldstein §8 informal
- **notes**: Convex transform $f^*(p) = \sup_q (\langle p, q\rangle - f(q))$. Fenchel-Moreau involution $(f^*)^* = f$. Differential form $\nabla f^*(p) = q(p)$ inverse of $\nabla f$. Fibre Legendre transform $\mathbb{F}L : TQ \to T^*Q$, $\mathbb{F}L(q, \dot q) = (q, \partial L/\partial \dot q)$. Regularity = local diffeomorphism (Hessian non-singular); hyper-regularity = global diffeomorphism. Hamiltonian $H(q, p) = \langle p, \dot q\rangle - L$. Equivalence of EL on $TQ$ with Hamilton's equations on $T^*Q$. Cotangent bundle as natural symplectic phase space. Singular Lagrangians and Dirac-Bergmann constraint analysis (gauge theories, GR). Originator: Legendre 1787; mechanics application Hamilton 1834; modern framing Abraham-Marsden 1978.

### classical-mechanics.noether-theorem

- **title**: Noether's theorem
- **prerequisites**: `classical-mechanics.lagrangian-on-tm`, `classical-mechanics.hamilton-principle`
- **tier_anchors**:
  - master: Noether 1918 *Invariante Variationsprobleme* (Nachr. König. Gesell. Wiss. Göttingen, originator); Olver *Applications of Lie Groups to Differential Equations*; Marsden-Ratiu Ch. 4 + 11
  - intermediate: Goldstein §13.7; Arnold §20
  - beginner: Strogatz informal; Goldstein §13.7 informal
- **notes**: Every smooth one-parameter family of symmetries of the action $S$ gives a conserved quantity along EL flow. Setup: vector field $X$ on $Q$ with prolongation $X^{(1)}$ on $TQ$; invariance $\mathcal{L}_{X^{(1)}} L = 0$. Noether charge $J_X = \langle \partial L/\partial \dot q, X\rangle$. Examples: time-translation → energy; space-translation → momentum; rotation → angular momentum. Hamiltonian-side: Poisson-commute condition $\{f, H\} = 0$. Lifts to moment-map theory: $G$-action on $(M, \omega)$ with $\mu : M \to \mathfrak{g}^*$. Field-theory generalisation: Noether currents $\partial_\mu J^\mu_X = 0$. Inverse Noether (Cartan-Lie). Originator: Emmy Noether 1918.

### symplectic-geometry.geodesic-flow-hamiltonian

- **title**: Geodesic flow as a Hamiltonian flow
- **prerequisites**: `symplectic-geometry.hamiltonian-vector-field`, `symplectic-geometry.cotangent-bundle`, `manifolds.smooth-manifold`
- **tier_anchors**:
  - master: Jacobi 1837 (originator); Abraham-Marsden §3.7; Klingenberg *Riemannian Geometry* Ch. 3; Cannas §1-§2
  - intermediate: Arnold §47; Marsden-Ratiu Ch. 8
  - beginner: Arnold §47 informal; Strogatz §6 informal
- **notes**: Kinetic-energy Hamiltonian $H(q, p) = \frac{1}{2} g^{ij} p_i p_j$ on $T^*M$. Hamilton's equations recover the geodesic equation $\ddot q^i + \Gamma^i_{jk}\dot q^j \dot q^k = 0$. Unit cotangent bundle $S(T^*M)$ is contact; Reeb = geodesic spray. Killing vector fields → Noether-conserved quantities. Maupertuis-Jacobi reformulation: mechanics with potential $V$ on energy level $H = E$ ↔ pure geodesic flow of Jacobi metric $\tilde g = (E - V)g$. Examples: flat $\mathbb{R}^n$ (straight lines), round $S^n$ (great circles, integrable), hyperbolic plane (Anosov), Jacobi-integrable ellipsoid. Originator: Jacobi 1837.

### symplectic-geometry.euler-arnold-equations

- **title**: Euler-Arnold equations
- **prerequisites**: `symplectic-geometry.coadjoint-orbit`, `symplectic-geometry.geodesic-flow-hamiltonian`, `lie-theory.lie-group`
- **tier_anchors**:
  - master: Euler 1758 *Du mouvement de rotation des corps solides autour d'un axe variable* (Mémoires Berlin 14, originator, rigid body); Arnold 1966 *Sur la géométrie différentielle des groupes de Lie de dimension infinie et ses applications à l'hydrodynamique des fluides parfaits* (Ann. Inst. Fourier 16, originator, general Lie group + ideal fluid); Marsden-Ratiu Ch. 13-14; Arnold-Khesin *Topological Methods in Hydrodynamics*
  - intermediate: Arnold *Mathematical Methods of Classical Mechanics* §29 + Appendix 2; Marsden-Ratiu Ch. 13
  - beginner: Strogatz §3 informal rigid-body picture; Arnold §29 informal
- **notes**: Body-frame projection of geodesic flow on a Lie group $G$ with left-invariant Riemannian metric to the dual Lie algebra $\mathfrak{g}^*$. Setup: inertia operator $I : \mathfrak{g} \to \mathfrak{g}^*$, kinetic-energy Hamiltonian $H(\xi^*) = \tfrac{1}{2}\langle \xi^*, I^{-1}\xi^*\rangle$. Equation: $\dot \xi^* = -\mathrm{ad}^*_{I^{-1}\xi^*}\xi^*$. Hamiltonian flow of $H$ for the Lie-Poisson bracket on $\mathfrak{g}^*$; coadjoint orbits are the symplectic leaves with KKS form. Conservation: energy + Casimirs (= $\mathrm{Ad}^*_G$-invariant functions). Examples: $\mathrm{SO}(3)$ rigid-body Euler equations (Euler 1758, Liouville-integrable, Poinsot construction); $\mathrm{SO}(n)$ rigid body (Manakov 1976, Lax pair with spectral parameter); $\mathrm{SDiff}(M)$ ideal-fluid Euler equations (Arnold 1966, $L^2$ inertia); $\mathrm{Diff}(S^1)$ Bott-Virasoro group with $L^2$ metric → KdV, with $H^1$ metric → Camassa-Holm (Misiołek 1998). Tennis-racket theorem: stability of long/short-axis rotation, instability of medium-axis. Geodesic completeness: full for compact finite-dim $G$, blow-up possible for infinite-dim (Beale-Kato-Majda 1984 vorticity criterion for 3D Euler). Mishchenko-Fomenko argument-shift method (1978) gives Liouville-integrability on semisimple $\mathfrak{g}$. Heavy top via semidirect product $\mathrm{SO}(3) \ltimes \mathbb{R}^3$. Originators: Euler 1758 (rigid body), Arnold 1966 (general Lie group + ideal fluid).

### topology.blakers-massey

- **title**: Blakers-Massey theorem
- **prerequisites**: `topology.homotopy`, `topology.cw-complex`, `topology.hurewicz-theorem`
- **tier_anchors**:
  - master: Blakers-Massey 1949-53 four-paper Annals series (originator); Hatcher §4.2 (full proof); tom Dieck §6; Anel-Biedermann-Finster-Joyal 2017 (∞-categorical)
  - intermediate: Hatcher §4.2
  - beginner: Hatcher §4.2 informal
- **notes**: Homotopy excision for CW triads $X = A \cup B$ with $C = A \cap B$ path-connected and connectivity hypotheses on the inclusions. $\pi_k(A, C) \to \pi_k(X, B)$ is iso for $k < m + n$, surjective at $m + n$. Homology-excision-up-to-stable-range. Freudenthal suspension theorem as corollary: $\pi_k(X) \to \pi_{k+1}(\Sigma X)$ iso for $k < 2n - 1$ when $X$ is $(n-1)$-connected. Foundation of stable homotopy theory and Adams spectral sequence. ∞-categorical generalisation in modal homotopy type theory.

### topology.euler-characteristic

- **title**: Euler characteristic
- **prerequisites**: `topology.cw-complex`, `topology.cellular-homology`, `topology.poincare-duality`
- **tier_anchors**:
  - master: Euler 1758 (originator); Poincaré 1895; Lefschetz 1926; Hatcher §2.2 + §2.C + §3.3; Milnor *Topology from the Differentiable Viewpoint* (Poincaré-Hopf)
  - intermediate: Hatcher §2.2 + §3.3
  - beginner: Hatcher §2.2 informal
- **notes**: Cellular form $\chi(X) = \sum (-1)^n c_n$. Homological form $\chi(X) = \sum (-1)^n \mathrm{rk}\, H_n$. Cellular = homological proof. Multiplicativity via Künneth. Euler-Poincaré for fibre bundles $\chi(E) = \chi(F)\chi(B)$. Vanishes on closed odd-dim orientable manifolds (Poincaré duality + alternating sum). Gauss-Bonnet $\int K\, dA = 2\pi \chi$ on closed surfaces; Chern-Gauss-Bonnet via Pfaffian in even dim. Poincaré-Hopf $\sum \mathrm{ind}_p V = \chi(M)$. Lefschetz fixed-point. Examples: $S^n, \Sigma_g, \mathbb{RP}^n, \mathbb{CP}^n, T^n$. Originator: Euler 1758 *Elementa doctrinae solidorum*.

### classical-mechanics.hamilton-jacobi

- **title**: Hamilton-Jacobi equation
- **prerequisites**: `symplectic-geometry.generating-functions`, `symplectic-geometry.cotangent-bundle`, `classical-mechanics.legendre-transform`
- **tier_anchors**:
  - master: Hamilton 1834 (originator); Jacobi 1866; Carathéodory 1909; Crandall-Lions 1983 viscosity solutions; Abraham-Marsden §5.2; Arnold §47 + Appendix 11; Evans *PDE* Ch. 3
  - intermediate: Goldstein §10; Arnold §47
  - beginner: Goldstein §10 informal; Arnold §47 informal
- **notes**: $\partial S/\partial t + H(q, \partial S/\partial q, t) = 0$ for action $S(q, t)$; time-indep $H(q, \partial W/\partial q) = E$. Generating-function-type-2 making $H \mapsto 0$. Method of characteristics: characteristics = Hamilton flow. Complete integrals giving full integration. Separation of variables (central potentials, Stäckel framework). Action-angle coordinates from HJ. Geometric: solutions = Lagrangian submanifolds of $T^*M$. WKB / eikonal limit of Schrödinger. Viscosity-solution theory (Crandall-Lions 1983) for caustics + optimal control. Originator: Hamilton 1834; Jacobi 1866 computational.

### classical-mechanics.liouville-volume

- **title**: Liouville's volume theorem
- **prerequisites**: `symplectic-geometry.hamiltonian-vector-field`, `symplectic-geometry.symplectic-manifold`
- **tier_anchors**:
  - master: Liouville 1838 *Sur la théorie de la variation des constantes arbitraires* (J. Math. Pures Appl., originator); Arnold §16 + Appendix 1; Abraham-Marsden §3.5
  - intermediate: Arnold §16; Goldstein §9.9
  - beginner: Strogatz §6 informal; Goldstein §9.9 informal
- **notes**: Hamiltonian flows preserve symplectic volume $\omega^n/n!$. Proof via Cartan: $\mathcal{L}_{X_H}\omega = 0 \Rightarrow \mathcal{L}_{X_H}\omega^n = 0$. Darboux-coordinate divergence-free form. Liouville equation $\partial_t\rho + \{\rho, H\} = 0$ for phase-space density. Equilibrium measures as $f(H)$. Volume-rigid + length-flexible characterising symplectic geometry. Counterexample: gradient flows are NOT volume-preserving. Foundation for Poincaré recurrence and statistical mechanics. Originator: Liouville 1838.

### classical-mechanics.poincare-recurrence

- **title**: Poincaré recurrence theorem
- **prerequisites**: `classical-mechanics.liouville-volume`, `symplectic-geometry.hamiltonian-vector-field`
- **tier_anchors**:
  - master: Poincaré 1890 *Sur le problème des trois corps* (Acta Math. 13, originator); Carathéodory 1919; Walters *An Introduction to Ergodic Theory* Ch. 1; Halmos *Lectures on Ergodic Theory* Ch. 2
  - intermediate: Arnold §16; Walters Ch. 1
  - beginner: Strogatz §6 informal; Arnold §16 informal
- **notes**: On finite measure space with measure-preserving $T : X \to X$, every measurable $A$ with $\mu(A) > 0$ has a.e. point returning infinitely often. Pigeonhole proof on $T^{-n}(A)$ disjoint iterates. Mean recurrence time = $\mu(X)/\mu(A)$ (Kac's lemma). Hamiltonian application via Liouville volume. Boltzmann/Zermelo timescale resolution of H-theorem tension. Quantum recurrence in finite-dim Hilbert space; failure in infinite-dim. Foundation of ergodic theory (ergodicity, mixing, K-systems, Bernoulli). Originator: Poincaré 1890; Carathéodory 1919 abstract.

### symplectic-geometry.poincare-cartan-invariants

- **title**: Poincaré-Cartan integral invariants
- **prerequisites**: `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.hamiltonian-vector-field`, `classical-mechanics.liouville-volume`
- **tier_anchors**:
  - master: Poincaré 1890 *Sur le problème des trois corps* (Acta Math. 13) and *Les Méthodes Nouvelles de la Mécanique Céleste* Vol. III §245-§249 (originator); Cartan 1922 *Leçons sur les invariants intégraux* (Hermann, Paris); Arnold *Mathematical Methods of Classical Mechanics* §44 + Appendix 1; Abraham-Marsden *Foundations of Mechanics* §3.4
  - intermediate: Arnold §44; Goldstein §9.5
  - beginner: Arnold §44 informal extended-phase-space picture
- **notes**: Extended phase space $\widetilde{M} = T^*Q \times \mathbb{R}$. Poincaré-Cartan one-form $\theta = p\, dq - H\, dt$. Differential $\omega = d\theta = dp \wedge dq - dH \wedge dt$ has rank $2n$ and one-dimensional kernel; suspended Hamiltonian vector field $\widetilde{X}_H = X_H + \partial_t$ is the kernel direction. First integral invariant $\oint_\gamma \theta$ flow-invariant on closed one-cycles (Poincaré 1890). Higher invariants $\omega^k$ for $k = 1, \ldots, n$ — Cartan 1922 graded family with Liouville volume $\omega^n / n!$ as top degree. Cartan-formula proof: $\iota_{\widetilde{X}_H}\omega = 0$ plus closedness of $\omega$ gives $\mathcal{L}_{\widetilde{X}_H}\omega^k = 0$. Tube-of-trajectories reformulation: integrals on two rims of any tube agree by Stokes. Action variables $I_k = \frac{1}{2\pi}\oint_{\gamma_k} p\, dq$ on a Liouville torus are first invariants on basis loops; angles canonical-conjugate (Liouville-Arnold). Maupertuis principle on energy level $H = E$ as reduction of Hamilton's principle to spatial $\delta \int p\, dq = 0$. Cartan's relative-versus-absolute distinction. Originator: Poincaré 1890/1899; Cartan 1922 systematic theory.

### symplectic-geometry.adiabatic-invariants

- **title**: Adiabatic invariants
- **prerequisites**: `symplectic-geometry.action-angle-coordinates`, `symplectic-geometry.integrable-system`, `symplectic-geometry.symplectic-manifold`
- **tier_anchors**:
  - master: Ehrenfest 1916 (originator term); Arnold-Kozlov-Neishtadt Ch. 6; Born *The Mechanics of the Atom* (1925); Berry 1984 (geometric phase)
  - intermediate: Arnold §52; Goldstein §12.5
  - beginner: Goldstein §12.5 informal; Arnold §52 informal
- **notes**: Slowly-varying Hamiltonian $H(q, p; \lambda(\epsilon t))$. Adiabatic theorem (Burgers/Ehrenfest 1916, 1D): action $I = (1/2\pi)\oint p\,dq$ conserved up to $O(\epsilon)$ over time $O(\epsilon^{-1})$. Geometric proof: average over fast angle. Higher-dim issues with resonant tori. Magnetic mirror $\mu = mv_\perp^2/(2B)$ adiabatic invariant for charged-particle motion (foundational for tokamaks). Quantum adiabatic theorem (Born-Fock 1928). Berry phase as adiabatic-correction holonomy. Nekhoroshev exponential-stability extension. Connection to KAM. Originator: Ehrenfest 1913-16.

### symplectic-geometry.birkhoff-normal-form

- **title**: Birkhoff normal form
- **prerequisites**: `symplectic-geometry.hamiltonian-vector-field`, `symplectic-geometry.action-angle-coordinates`, `symplectic-geometry.symplectic-manifold`
- **tier_anchors**:
  - master: Birkhoff 1927 *Dynamical Systems* (AMS Colloquium Publications IX, originator); Siegel 1942 (small divisors); Moser 1956 (analytic refinement); Arnold-Kozlov-Neishtadt Ch. 7; Pöschel 1989 *On invariant manifolds of complex analytic mappings near non-resonant fixed points*
  - intermediate: Arnold *Mathematical Methods of Classical Mechanics* §22 + Appendix 7
  - beginner: Strogatz §6 informal; Arnold §22 informal opening
- **notes**: Hamiltonian system near an elliptic equilibrium $z_0$ with $H_2 = \tfrac{1}{2}\sum \omega_j (q_j^2 + p_j^2)$. If $\omega = (\omega_1, \ldots, \omega_n)$ is non-resonant up to order $N$ — no integer relation $\sum k_j \omega_j = 0$ with $|k| \leq N$ — then a sequence of canonical (Lie-series) transformations puts $H = H_2 + Z_4 + Z_6 + \cdots + Z_N + R_{N+1}$ where each $Z_{2k}$ depends only on the actions $I_j = (q_j^2 + p_j^2)/2$ and $R_{N+1} = O(\|z\|^{N+1})$. Construction: at each order $k$, generating function $F_k$ with $\{H_2, F_k\}$ killing the non-resonant part of $H_k$; resonant terms become $Z_k$. Small-divisor / Poincaré non-integrability: full series generally diverges; Diophantine condition gives Gevrey-class smoothness. Examples: 1D (action-angle), 2D non-resonant (full Birkhoff), 2D 1:1 resonance (focus/saddle/centre classification), Lyapunov families near triangular Lagrange points in restricted three-body problem. Refinements: Birkhoff-Gustavson algorithm; KAM as the convergent island in the Birkhoff scheme; Nekhoroshev stability bounds derived from finite-order Birkhoff truncation. Originator: Birkhoff 1927; Siegel 1942 small divisors; Moser 1956 analytic refinement; Pöschel 1989 Gevrey.

### symplectic-geometry.nekhoroshev

- **title**: Nekhoroshev estimates
- **prerequisites**: `symplectic-geometry.kam-theorem`, `symplectic-geometry.action-angle-coordinates`, `symplectic-geometry.birkhoff-normal-form`
- **tier_anchors**:
  - master: Nekhoroshev 1977 *An exponential estimate of the time of stability of nearly-integrable Hamiltonian systems* (Russian Math. Surveys 32, originator); Lochak 1992 *Canonical perturbation theory via simultaneous approximation* (Russian Math. Surveys 47); Pöschel 1993 *Nekhoroshev estimates for quasi-convex Hamiltonian systems*; Niederman 2007; Arnold-Kozlov-Neishtadt Ch. 7
  - intermediate: Arnold-Kozlov-Neishtadt *Mathematical Aspects of Classical and Celestial Mechanics* Ch. 7
  - beginner: Strogatz §6 informal; Arnold §54 informal
- **notes**: Near-integrable Hamiltonian $H = H_0(I) + \epsilon H_1(I, \theta)$ with $H_0$ analytic and *steep* (a generic non-degeneracy condition stronger than non-resonance, weaker than convexity). Theorem (Nekhoroshev 1977): for all initial conditions and all $|t| \leq T(\epsilon) \asymp \exp(c\epsilon^{-a})$, $|I(t) - I(0)| \leq C\epsilon^b$ for explicit Nekhoroshev exponents $a, b$ depending on $H_0$ and dimension. **Comparison with KAM.** KAM gives $|I(t) - I(0)| = 0$ on a positive-measure Cantor set of Diophantine initial conditions for all time; Nekhoroshev gives $|I(t) - I(0)| = O(\epsilon^b)$ for *every* initial condition but only over an exponentially long interval. **Steepness condition.** $H_0$ is steep at $I^*$ if for every linear subspace $L \subseteq \mathbb{R}^n$ through $I^*$, the restriction $H_0|_L$ has only a degenerate isolated extremum at $I^*$ along directions in some lower-dim sublattice. Generic in $C^\infty$ topology, weaker than convexity, but excludes degenerate $H_0$. **Proof outline (Lochak 1992 / Pöschel 1993).** Block Birkhoff normal form on resonance regions: each resonance class $\mathcal{M}_K = \{\langle k, \omega \rangle = 0 : k \in K\}$ gets its own normal form, the non-resonant part is killed up to order $\sim 1/\epsilon$, and steepness controls geometric diffusion across resonance regions. Iteration over resonance lattices gives the exponential time bound. **Examples and exponents.** Convex $H_0$ (Lochak): $a = 1/(2n)$, $b = 1/(2n)$. Quasi-convex (Pöschel 1993): same exponents — convex on energy levels suffices. Generic steep: smaller exponents, same shape. Solar system (Niederman 2007): explicit Nekhoroshev-type stability bounds; Arnold conjectured Lyapunov stability of the planetary motion at the perihelion-precession level over Hubble timescales. **Arnold diffusion.** For non-convex $H_0$ in dimensions $n \geq 3$, Nekhoroshev is essentially optimal: there exist initial conditions with $|I(t) - I(0)| \to \infty$. Arnold 1964 *Instability of dynamical systems with several degrees of freedom* (Doklady Akad. Nauk SSSR 156) gave the first explicit example via heteroclinic chains of whiskered tori. Mather, Berti-Bolle, Cheng-Yan made the diffusion mechanism rigorous in various settings. **Combined picture (Bourgain-Kuksin and beyond).** KAM gives positive-measure permanent stability; Nekhoroshev gives global polynomial stability over exponentially long times; Arnold diffusion gives the exceptional unstable orbits in the resonance gaps. Originator: Nekhoroshev 1977; Lochak 1992 simplification via simultaneous Diophantine approximation; Pöschel 1993 explicit constants.

### symplectic-geometry.williamson-normal-form

- **title**: Williamson normal form for quadratic Hamiltonians
- **prerequisites**: `symplectic-geometry.symplectic-vector-space`, `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.symplectic-group`
- **tier_anchors**:
  - master: Williamson 1936 (originator, *Amer. J. Math.* 58); Arnold-Kozlov-Neishtadt *Mathematical Aspects of Classical and Celestial Mechanics* Ch. 7; de Gosson *Symplectic Geometry and Quantum Mechanics* Ch. 6; Long *Index Theory for Symplectic Paths*
  - intermediate: Arnold *Mathematical Methods of Classical Mechanics* §22 + Appendix 6; McDuff-Salamon *Introduction to Symplectic Topology* Ch. 2
  - beginner: Arnold §22 informal opening; informal harmonic-oscillator picture
- **notes**: Symplectic congruence classification of quadratic Hamiltonians $H(z) = \tfrac{1}{2} z^T A z$ on $(\mathbb{R}^{2n}, \omega_0)$ with $A$ real symmetric. **Positive-definite case (the headline statement):** there exists $S \in \mathrm{Sp}(2n, \mathbb{R})$ with $S^T A S = \mathrm{diag}(\omega_1, \ldots, \omega_n, \omega_1, \ldots, \omega_n)$, where the positive numbers $\{\omega_1, \ldots, \omega_n\}$ — the **symplectic eigenvalues** or **Williamson invariants** of $A$ — are read off as the absolute values of the eigenvalues of $JA$ (which are $\pm i\omega_k$, all purely imaginary). The unordered multiset $\{\omega_k\}$ is a complete symplectic-conjugacy invariant. Proof: $JA$ is skew-self-adjoint for the inner product $\langle u, v\rangle_A = u^T A v$ (using $A^T = A$, $J^T = -J$), so its spectrum is purely imaginary; pair complex eigenvectors with their conjugates to build a real symplectic basis that simultaneously diagonalises $A$. **Indefinite case (full Williamson 1936 classification):** $JA$-spectrum decomposes under joint $\pm$ and $\bar{\,\cdot\,}$ symmetries into orbits of four types — purely imaginary pair (elliptic, $H = \omega(q^2 + p^2)/2$ with a $\pm$ Krein sign), real pair (saddle, $H = \omega \, q p$), complex quadruple (loxodromic), and zero (parabolic / nilpotent). Long 1971 refinement at degenerate strata (Williamson-Long form). **Connections:** quadratic linearisation underlying the Birkhoff normal form near an elliptic equilibrium; symplectic eigenvalues are the frequency vector entering the KAM Diophantine condition; symplectic capacity of an ellipsoid $\{z^T A z \leq 1\}$ is $\pi / \omega_{\max}$; metaplectic quantisation has spectrum $\sum (n_k + 1/2)\omega_k$; Robertson-Schrödinger uncertainty principle bounds each symplectic eigenvalue of a Gaussian covariance matrix below by $\hbar/2$; Krein theory of strong stability identifies elliptic-block sign collisions as the linear birth of parametric resonance instabilities (e.g. triangular Lagrange points at the critical mass ratio of the restricted three-body problem). Originator: Williamson 1936 *On the algebraic problem concerning the normal forms of linear dynamical systems* (Amer. J. Math. 58); Long 1971 refinement; Arnold App. 6 mechanics-flavoured exposition.

### topology.cofibration

- **title**: Cofibration and homotopy extension property
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`, `topology.quotient-topology`, `topology.homotopy`
- **tier_anchors**:
  - master: May *Concise Course* Ch. 6; Strom *Modern Classical Homotopy Theory* §1; Whitehead *Elements of Homotopy Theory* §I.5
  - intermediate: Hatcher §0; May Ch. 6
  - beginner: Hatcher §0 informal; May §6 informal HEP picture
- **notes**: Map $i : A \to X$ with the homotopy extension property: any homotopy $H : A \times [0,1] \to Z$ compatible with $f : X \to Z$ extends to $\tilde H : X \times [0,1] \to Z$. Equivalent retract characterisation: $X \times \{0\} \cup_{A \times \{0\}} A \times [0,1]$ is a retract of $X \times [0,1]$. Mapping-cylinder factorisation $X \hookrightarrow M_f \xrightarrow{\simeq} Y$. CW pair inclusions are cofibrations. Eckmann-Hilton dual to fibration; cofibre sequence $A \to X \to X/A \to \Sigma A \to \cdots$. Originator: Borsuk 1931 (ANR theory); modern HEP framing Strom 1968 / Steenrod 1967.

### topology.compact-open-topology

- **title**: Compact-open topology and function spaces
- **prerequisites**: `topology.topological-space`, `topology.continuous-map`
- **tier_anchors**:
  - master: Steenrod 1967 (originator paper); May *Concise Course* §5; tom Dieck §2.4
  - intermediate: Munkres §46; Hatcher §0
  - beginner: Munkres §46 informal
- **notes**: Compact-open topology on $C(X, Y)$: subbasis $W(K, U) = \{f : f(K) \subseteq U\}$ for $K$ compact, $U$ open. Evaluation $C(X, Y) \times X \to Y$ continuous when $X$ is locally compact Hausdorff. Exponential law $C(X \times Y, Z) \cong C(X, C(Y, Z))$ as a homeomorphism. Compactly-generated weak Hausdorff (CGWH) = Steenrod's convenient category. Loop space $\Omega X$, suspension-loop adjunction $[\Sigma X, Y] \cong [X, \Omega Y]$. Originator: Fox 1945; Steenrod 1967 *A convenient category of topological spaces*.

### topology.cw-complex

- **title**: CW complex
- **prerequisites**: `topology.topological-space`, `topology.quotient-topology`, `topology.homotopy`
- **tier_anchors**:
  - master: Whitehead 1949 (originator paper); Hatcher §0 + §4.1; tom Dieck §8
  - intermediate: Hatcher §0; May Ch. 10
  - beginner: Hatcher §0 informal; cell-attachment intuition
- **notes**: Inductive skeleton construction $X^{(n)} = X^{(n-1)} \cup_\Phi \bigsqcup_\alpha D^n_\alpha$ with attaching map $\Phi : \bigsqcup_\alpha S^{n-1}_\alpha \to X^{(n-1)}$. Weak (colimit) topology on $X = \mathrm{colim}\, X^{(n)}$. Cellular pushout square. Standard examples: $S^n$, $\mathbb{RP}^n$, $\mathbb{CP}^n$, classifying spaces, Lie groups. CW pair inclusions are cofibrations. Cellular approximation theorem; Whitehead's theorem (homotopy-equivalence detection by $\pi_n$). Originator: J.H.C. Whitehead 1949 *Combinatorial homotopy I*.

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

### alg-geom.hurwitz-formula

- **title**: Hurwitz formula
- **unit**: `04.04.02`
- **prerequisites**: `alg-geom.riemann-roch-curves`
- **tier_anchors**:
  - master: Hurwitz 1891 *Über Riemann'sche Flächen mit gegebenen Verzweigungspunkten* (Math. Ann. 39, originator); Hartshorne §IV.2; Liu §7.4; Donaldson §6
  - intermediate: Hartshorne §IV.2; Liu §7.4
  - beginner: Hartshorne §IV.2 informal; ramification accounting for branched covers of curves
- **notes**: $2g_Y - 2 = n(2g_X - 2) + \deg R$ for a finite separable morphism $\pi : Y \to X$ of smooth projective curves of degree $n$, with ramification divisor $R = \sum_y (e_y - 1)\,y$ in the tame case ($\mathrm{char}\,k \nmid e_y$). Proof via $\pi^* K_X = K_Y - R$ and degree comparison. Worked examples: $t \mapsto t^n$ on $\mathbb{P}^1$, hyperelliptic double cover ramified at $2g + 2$ points, elliptic double cover with four branch points. Wild ramification in positive characteristic replaces $\sum(e_y - 1)$ with the different $\mathfrak{d}_{Y/X}$. Castelnuovo-Severi inequality bounds $g_Y$ in terms of $g_X$, $n$, and ramification.

### alg-geom.elliptic-curves

- **title**: Elliptic curves
- **unit**: `04.04.03`
- **prerequisites**: `alg-geom.riemann-roch-curves`, `alg-geom.hurwitz-formula`, `alg-geom.picard-group`
- **tier_anchors**:
  - master: Weierstrass *Vorlesungen über elliptische Funktionen* (1880s, originator); Poincaré 1901 *Sur les propriétés arithmétiques des courbes algébriques* (J. de Math. 7, originator of Mordell-Weil conjecture); Mordell 1922 *Proc. Camb. Phil. Soc.* 21 (proof for $\mathbb{Q}$); Weil 1929 *Acta Math.* 52 (number-field generalisation); Tate 1974 *Invent. Math.* 23 (modern survey); Hartshorne §IV.4; Silverman §III, §VIII
  - intermediate: Hartshorne §IV.4; Silverman *The Arithmetic of Elliptic Curves* §III; Cassels *Lectures on Elliptic Curves* §7-§8
  - beginner: Silverman §III informal — group law on a cubic; Hartshorne §IV.4 informal
- **notes**: A smooth projective curve of genus 1 over $k$ equipped with a $k$-rational point $O$. Equivalently a 1-dimensional abelian variety over $k$. Weierstrass form $y^2 = x^3 + a x + b$ with $\Delta = -16(4 a^3 + 27 b^2) \neq 0$ (in $\mathrm{char}\,k \neq 2, 3$); $j$-invariant $j(E) = 1728 \cdot 4 a^3 / (4 a^3 + 27 b^2)$ classifies $E$ over $\bar k$. Group law via chord-and-tangent construction or via $E(k) \cong \mathrm{Pic}^0(E)$ from Riemann-Roch on a genus-1 curve. Mordell-Weil theorem: $E(K)$ is finitely generated for every number field $K$ (Mordell 1922 for $\mathbb{Q}$, Weil 1929 for general number fields). Mazur's torsion theorem 1977: $E(\mathbb{Q})_{\mathrm{tors}}$ is one of 15 explicit groups. Modularity theorem (Wiles-Taylor-Breuil-Conrad-Diamond 1995-2001): every $E/\mathbb{Q}$ is modular. BSD conjecture: $\mathrm{ord}_{s=1} L(E, s) = \mathrm{rank}(E(\mathbb{Q}))$. Hasse bound over $\mathbb{F}_q$: $|\#E(\mathbb{F}_q) - q - 1| \leq 2\sqrt q$. Tate's algorithm for reduction types. CM theory and class field theory of imaginary quadratic fields. Heegner points and Gross-Zagier-Kolyvagin for rank-$\leq 1$ BSD. Modular curves $X_0(N), X_1(N)$ as moduli of elliptic curves with level structure.

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

### alg-geom.smooth-etale-unramified

- **title**: Smooth, étale, and unramified morphisms
- **prerequisites**: `alg-geom.morphism-of-schemes`, `alg-geom.sheaf-of-differentials`
- **tier_anchors**:
  - master: Grothendieck-Dieudonné EGA IV §17 (smooth and étale morphisms); Grothendieck SGA 1 (étale fundamental group); Milne *Étale Cohomology* Ch. I; Lurie *Spectral Algebraic Geometry* §11
  - intermediate: Hartshorne §III.10; Vakil §12, §21, §25; Görtz-Wedhorn §6, §16, §18
  - beginner: algebraic counterpart of submersion / immersion / covering map
- **notes**: Three local properties of $f : X \to Y$ at $x \in X$, $y = f(x)$. **Unramified**: $f$ locally of finite type with $\Omega^1_{X/Y, x} = 0$, equivalently $\mathfrak{m}_y \mathcal{O}_{X,x} = \mathfrak{m}_x$ and $\kappa(x)/\kappa(y)$ finite separable. **Smooth (relative dim $n$)**: $f$ locally of finite presentation, flat at $x$, with regular geometric fibre $X_{\bar y}$ at $\bar x$; equivalently $\Omega^1_{X/Y}$ locally free of rank $n$ near $x$ (EGA IV.17.5.1). **Étale**: smooth of relative dimension $0$ = flat + locally finitely presented + unramified. Jacobian criterion: for $X = \mathrm{Spec}(A[t_1, \ldots, t_n]/(g_1, \ldots, g_c))$ over $\mathrm{Spec}(A)$, smooth at $x$ of relative dim $n - c$ iff $\mathrm{rank}\,(\partial g_i/\partial t_j)(x) = c$. Stable under composition and base change. Examples: $\mathrm{Spec}(k[x, y]/(y^2 - x)) \to \mathrm{Spec}(k[x])$ étale on $x \neq 0$ (char $\neq 2$); Frobenius $F : X \to X$ in char $p$ never étale (purely inseparable); $z \mapsto z^n$ on $\mathbb{G}_m$ étale iff $n$ invertible in base. **Local structure (EGA IV.18.4.6)**: every unramified morphism factors étale-locally as a closed immersion into an étale cover. **Formal characterisations**: smooth = formally smooth + locally finitely presented (lifting along square-zero ideals surjective); étale = formally étale (bijective lifting); unramified = formally unramified (injective lifting). **Étale fundamental group** $\pi_1^{\text{ét}}(X, \bar x)$ classifies finite étale covers (SGA 1 Exposé V); profinite completion of $\pi_1^{\text{top}}(X^{\text{an}})$ for smooth complex $X$ (SGA 1 Exposé XII, Riemann existence). **Henselisation / strict henselisation** as étale-local rings; **cotangent complex** $L_{X/Y}$ as derived refinement (Illusie 1971–72); **Kunz 1969**: regular ⟺ Frobenius flat in char $p$. Originators: Auslander-Buchsbaum-Serre 1956–58 (regularity criterion); Grothendieck-Dieudonné EGA IV (1965–67); Grothendieck SGA 1 (1960–61, étale fundamental group).

### alg-geom.nullstellensatz-dimension

- **title**: Nullstellensatz and dimension theory
- **prerequisites**: `alg-geom.affine-scheme`, `alg-geom.morphism-of-schemes`
- **tier_anchors**:
  - master: Hilbert 1893 (originator); Krull 1928 (Hauptidealsatz); Zariski 1947 (modern Zariski-lemma proof); Eisenbud *Commutative Algebra with a View Toward Algebraic Geometry* Ch. 8–13; Matsumura *Commutative Ring Theory* Ch. 5, 14, 17; Stacks Project Tags 00FV, 00KW, 00KZ
  - intermediate: Atiyah-Macdonald Ch. 5, 7, 11; Hartshorne §I.1; Eisenbud Ch. 1, 8–10; Reid *Undergraduate Commutative Algebra* §3, §6, §8
  - beginner: dictionary between polynomial equations and their common zero sets
- **notes**: Over algebraically closed $k$ and $R = k[x_1, \ldots, x_n]$: **Weak Nullstellensatz** — every proper ideal $\mathfrak{a} \subsetneq R$ has $V(\mathfrak{a}) \neq \emptyset$. **Strong Nullstellensatz** — $I(V(\mathfrak{a})) = \sqrt{\mathfrak{a}}$, equivalently $f \in I(V(\mathfrak{a})) \Leftrightarrow f^N \in \mathfrak{a}$. **Maximal-ideal form** — every maximal ideal $\mathfrak{m} \subset R$ has the form $\mathfrak{m}_a = (x_1 - a_1, \ldots, x_n - a_n)$ for a unique $a \in k^n$. Proof: weak via Zariski lemma (a field finitely generated as a $k$-algebra equals $k$ when $k$ is algebraically closed) and Noether normalisation; weak ⇒ strong via the Rabinowitsch trick (introduce $y$ and use $(\mathfrak{a}, 1 - yf)$). **Krull dimension** $\dim R = \sup$ length of prime chains $\mathfrak{p}_0 \subsetneq \cdots \subsetneq \mathfrak{p}_d$. For irreducible affine variety $X$ over $k$: $\dim X = \dim_{\mathrm{Krull}} k[X] = \mathrm{tr.deg}_k k(X)$. For noetherian local $(R, \mathfrak{m})$: $\dim R = \deg P_{\mathfrak{q}}(n)$ (Hilbert-Samuel polynomial of $\mathrm{length}(R/\mathfrak{q}^n)$ for $\mathfrak{q}$ $\mathfrak{m}$-primary) = min generators of an $\mathfrak{m}$-primary ideal (system of parameters). **Krull's Hauptidealsatz / height theorem (1928)**: in noetherian $R$, every minimal prime over $(f)$ has height $\leq 1$ (= 1 if $f$ is a non-zero-divisor non-unit); minimal primes over $(f_1, \ldots, f_r)$ have height $\leq r$. Geometrically: hypersurface in $\mathbb{A}^n$ has dimension $n - 1$. Cohen-Seidenberg going-up / going-down for integral extensions; catenary rings and the dimension formula $\mathrm{ht}(\mathfrak{p}) + \dim(R/\mathfrak{p}) = \dim R$; finitely generated $k$-algebras universally catenary; Nagata 1956 non-catenary domain. Cohen-Macaulay rings (depth = dimension); Krull's intersection theorem; effective Nullstellensatz (Brownawell 1987 with $N \leq nd^n$, Kollár 1988 sharpening to $d^n$); real Nullstellensatz / Positivstellensatz (Stengle 1974, Krivine 1964); arithmetic Nullstellensatz over $\mathbb{Z}$; model-theoretic content as quantifier elimination for $\mathrm{ACF}_p$; Stillman's conjecture (Ananyan-Hochster 2020). Originators: Hilbert 1893 (Math. Ann. 42, appendix); Lasker 1905 (primary decomposition); Noether 1921 (noetherian foundations); Krull 1928 (Hauptidealsatz); Rainich/Rabinowitsch 1929 (auxiliary-variable trick); Zariski 1947 (modern proof).

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

### alg-geom.serre-duality-curves

- **title**: Serre duality on a curve
- **prerequisites**: `complex-analysis.holomorphic-line-bundle`, `complex-analysis.riemann-roch-compact-rs`, `alg-geom.canonical-sheaf`
- **tier_anchors**:
  - master: Serre 1955 *Un théorème de dualité* (originator); Hartshorne §IV.1; Donaldson *Riemann Surfaces* §11; Griffiths-Harris *Principles of Algebraic Geometry* §0.7
  - intermediate: Donaldson *Riemann Surfaces* §11; Forster *Lectures on Riemann Surfaces* §17
  - beginner: pairing $H^1$ of a line bundle with global sections of the dual-twisted canonical
- **notes**: For a line bundle $L$ on a smooth projective curve $X$ of genus $g$ over an algebraically closed field $k$, the residue trace $\mathrm{tr} : H^1(X; K_X) \to k$ pairs $H^1(X; L) \times H^0(X; K_X \otimes L^{-1}) \to k$ non-degenerately, giving $H^1(X; L) \cong H^0(X; K_X \otimes L^{-1})^*$. Combined with Riemann-Roch ($\dim H^0(L) - \dim H^1(L) = \deg L + 1 - g$) yields $\dim H^0(L) - \dim H^0(K \otimes L^{-1}) = \deg L + 1 - g$. Vanishing $H^1(L) = 0$ for $\deg L > 2g - 2$. Specialisation of Grothendieck duality to dimension 1; the dualising sheaf is $K_X = \omega_X$. Geometric content: $H^0(K \otimes L^{-1})$ measures specialty (Brill-Noether). Originator: Serre 1955 (Comm. Math. Helv. 29).

### alg-geom.hodge-decomposition

- **title**: Hodge decomposition
- **prerequisites**: `alg-geom.sheaf-cohomology`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Voisin *Hodge Theory* Vol I Ch. 6; Griffiths-Harris Ch. 0; Wells *Differential Analysis on Complex Manifolds*
  - intermediate: Voisin Vol I Ch. 6; Griffiths-Harris Ch. 0
  - beginner: harmonic forms split by holomorphic type
- **notes**: For compact Kähler $X$, $H^n(X; \mathbb{C}) = \bigoplus_{p+q = n} H^{p,q}(X)$ with $H^{p,q} = H^q(X; \Omega^p)$ and $\overline{H^{p,q}} = H^{q,p}$. Hodge 1941 *Theory and Applications of Harmonic Integrals* — harmonic representatives. Hodge-to-de-Rham degeneration. Algebraic proof: Deligne-Illusie 1987 via reduction mod $p$. Polarised Hodge structures and period domains. Bridges algebra and topology.

### alg-geom.hodge-decomposition-curves

- **title**: Hodge decomposition on a compact Riemann surface
- **prerequisites**: `complex-analysis.holomorphic-line-bundle`, `complex-analysis.riemann-roch-compact-rs`, `alg-geom.canonical-sheaf`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Hodge 1941 *The Theory and Applications of Harmonic Integrals* (originator); Griffiths-Harris *Principles of Algebraic Geometry* §0.6–§0.7; Donaldson *Riemann Surfaces* §10; Voisin *Hodge Theory and Complex Algebraic Geometry I* §5–§6
  - intermediate: Donaldson *Riemann Surfaces* §10; Forster *Lectures on Riemann Surfaces* §17; Griffiths-Harris §0.7
  - beginner: Donaldson §10 informal; Forster §17 informal
- **notes**: For a compact Riemann surface $X$ (= smooth projective complex curve) of genus $g$, complex conjugation on $C^\infty$ forms intertwines the Dolbeault bidegree decomposition with the Kähler-harmonic theorem to give $H^1(X; \mathbb{C}) = H^{1,0}(X) \oplus H^{0,1}(X)$, with $H^{1,0}(X) = H^0(X; \Omega^1_X)$ (holomorphic 1-forms), $H^{0,1}(X) = H^1(X; \mathcal{O}_X)$, and $\overline{H^{1,0}} = H^{0,1}$. Dimensions $h^{1,0} = h^{0,1} = g$, total $2g$ matching topology. Period matrix $\Pi = (A \mid B)$ over a symplectic homology basis satisfies Riemann's bilinear relations $A B^T = B A^T$, $\mathrm{Im}(B A^{-1}) > 0$, exhibiting the Jacobian $\mathrm{Jac}(X) = H^0(X; \Omega^1_X)^* / H_1(X; \mathbb{Z})$ as a principally polarised abelian variety. Curve case of the general Kähler Hodge $(p,q)$-decomposition (Hodge 1941); originator content traces to Riemann's 1857 bilinear relations. Direct prerequisite for Serre duality on curves and for the bilinear-relations and Schottky machinery on Jacobians.

### alg-geom.jacobi-inversion

- **title**: Jacobi inversion theorem
- **prerequisites**: `complex-analysis.jacobian-variety`, `alg-geom.serre-duality-curves`, `alg-geom.hodge-decomposition-curves`
- **tier_anchors**:
  - master: Jacobi 1834 *Considerationes generales de transcendentibus Abelianis* (originator); Riemann 1857 *Theorie der Abel'schen Functionen* (theta divisor); Donaldson *Riemann Surfaces* §11–§12; Mumford *Tata Lectures on Theta II*; Griffiths-Harris *Principles of Algebraic Geometry* §2.7
  - intermediate: Donaldson *Riemann Surfaces* §11–§12; Forster *Lectures on Riemann Surfaces* §21
  - beginner: Donaldson §11–§12 informal; Forster §21 informal
- **notes**: For a smooth projective compact Riemann surface $X$ of genus $g \geq 1$, fix a basis $\omega_1, \ldots, \omega_g$ of $H^0(X; \Omega^1_X)$, a symplectic basis of $H_1(X; \mathbb{Z})$, and a reference point $p_0 \in X$. The Abel-Jacobi map $\alpha : \mathrm{Sym}^g(X) \to \mathrm{Jac}(X)$, $\alpha(p_1 + \cdots + p_g) = (\sum_i \int_{p_0}^{p_i} \omega_j)_j \mod \Lambda$, is surjective and birational (Jacobi 1834 — *Considerationes generales de transcendentibus Abelianis*, Crelle 9). Riemann 1857 refines this: the exceptional locus, after translation by the Riemann constant $\kappa$, coincides with the theta divisor $\Theta = \alpha(W_{g-1}) \subset \mathrm{Jac}(X)$, equivalently with the zero locus of the Riemann theta function $\theta(z; \tau) = \sum_{n \in \mathbb{Z}^g} \exp(\pi i n^T \tau n + 2 \pi i n^T z)$ (Riemann's vanishing theorem). Proof via four steps: image is closed (compactness of $\mathrm{Sym}^g(X)$), image has dimension $g$ (differential = Brill-Noether matrix, full-rank by Riemann-Roch + Serre duality on non-special divisors), image equals the full Jacobian (closed + full-dim in connected target), generic fibre is a point (Riemann-Roch on a generic line bundle of degree $g$ gives $h^0 = 1$). Combined with Abel's theorem yields the structural identification $\mathrm{Pic}^0(X) \cong \mathrm{Jac}(X)$ as complex Lie groups. Brill-Noether stratification $W^r_d \subset \mathrm{Pic}^d(X)$ extends the inversion to all degrees: $\dim W^r_d \geq g - (r+1)(g - d + r)$ when non-negative (Kempf 1971, Kleiman-Laksov 1972), with equality on a general curve (Griffiths-Harris 1980, Gieseker 1982). Torelli's theorem (Torelli 1913) recovers $X$ from the principally polarised Jacobian $(\mathrm{Jac}(X), \Theta)$. Schottky problem characterises Jacobi loci inside $\mathcal{A}_g$; Schottky 1888 ($g = 4$), Welters trisecant (Krichever 2006), Novikov-Shiota KP characterisation (Shiota 1986).

### alg-geom.riemann-bilinear

- **title**: Riemann's bilinear relations
- **prerequisites**: `complex-analysis.jacobi-inversion`, `alg-geom.hodge-decomposition-curves`, `complex-analysis.period-matrix`
- **tier_anchors**:
  - master: Riemann 1857 *Theorie der Abel'schen Functionen* (originator); Donaldson *Riemann Surfaces* §12; Griffiths-Harris *Principles of Algebraic Geometry* §2.7; Mumford *Tata Lectures on Theta I-II*
  - intermediate: Donaldson *Riemann Surfaces* §12; Forster *Lectures on Riemann Surfaces* §21
  - beginner: Donaldson §11–§12 informal
- **notes**: For a compact Riemann surface $X$ of genus $g$, fix a symplectic basis $a_1, \ldots, a_g, b_1, \ldots, b_g$ of $H_1(X; \mathbb{Z})$ ($a_i \cdot b_j = \delta_{ij}$, $a_i \cdot a_j = b_i \cdot b_j = 0$) and a basis $\omega_1, \ldots, \omega_g$ of $H^0(X; \Omega^1_X)$ normalised so that $\int_{a_j} \omega_i = \delta_{ij}$. The period matrix $\tau_{ij} = \int_{b_j} \omega_i$ satisfies (RB1) $\tau_{ij} = \tau_{ji}$ (symmetry) and (RB2) $\mathrm{Im}\,\tau$ positive definite. Equivalently, in non-normalised form $(A \mid B)$, $A B^T = B A^T$ and $\mathrm{Im}(B A^{-1}) > 0$. Proof: Riemann's bilinear identity $\int_X \omega \wedge \eta = \sum_k [\int_{a_k} \omega \cdot \int_{b_k} \eta - \int_{b_k} \omega \cdot \int_{a_k} \eta]$ (cut $X$ along the symplectic basis to a $4g$-gon, apply Stokes); for $\omega, \eta$ holomorphic, $\omega \wedge \eta \in \Omega^{2,0}(X) = 0$ on a curve, giving (RB1). For (RB2), positivity of $\frac{i}{2} \int_X \omega \wedge \bar\omega$ (the Kähler form $\frac{i}{2} f \, dz \wedge d\bar z = |f|^2 \, dV$) plus the bilinear identity gives $\mathrm{Im}\,\tau$ as the Gram matrix of a positive-definite Hermitian form on $H^0(X; \Omega^1_X)$. Geometric content: the period matrix lies in the Siegel upper half space $\mathfrak{H}_g = \{$symmetric $g \times g$ complex matrices with positive-definite imaginary part$\}$; conversely every $\tau \in \mathfrak{H}_g$ defines a principally polarised abelian variety (PPAV). The Schottky problem (Schottky 1888 for $g = 4$ via a quartic modular relation; Welters-Shiota for the KP / Novikov characterisation; Krichever 2006 for the trisecant conjecture) asks which points of $\mathfrak{H}_g / \mathrm{Sp}(2g, \mathbb{Z})$ come from curves: the Jacobi locus has dimension $3g - 3$ vs. $g(g+1)/2$ for $\mathfrak{H}_g$, so the inclusion is far from surjective for $g \geq 4$. Riemann theta function $\theta(z; \tau)$ on $\mathbb{C}^g \times \mathfrak{H}_g$ uses the bilinear relations directly in its quasi-periodicity. Foundation of Riemann's 1857 theta-function theory and of the modern theory of Abelian integrals, complex multiplication, Heegner points, modular curves.

### alg-geom.schottky-problem

- **title**: Schottky problem
- **prerequisites**: `alg-geom.riemann-bilinear`, `alg-geom.vhs-jacobian`, `alg-geom.jacobi-inversion`
- **tier_anchors**:
  - master: Schottky 1888 *Über die Moduln der Thetafunctionen* (originator); Shiota 1986 *Characterization of Jacobian varieties in terms of soliton equations* (Inventiones 83); Welters 1984; Krichever 2010 *Characterizing Jacobians via trisecants of the Kummer variety*; Arbarello-Cornalba-Griffiths *Geometry of Algebraic Curves II*
  - intermediate: Donaldson *Riemann Surfaces* §13; Mumford *Tata Lectures on Theta II*
  - beginner: Donaldson §12–§13 informal; Mumford *Tata Lectures on Theta II* informal narrative
- **notes**: Identify the period matrices of compact Riemann surfaces among all symmetric positive-imaginary $g \times g$ complex matrices, modulo $\mathrm{Sp}(2g, \mathbb{Z})$. Setup: Siegel upper half-space $\mathfrak{H}_g = \{\tau \in M_g(\mathbb{C}) : \tau = \tau^T, \mathrm{Im}\,\tau > 0\}$ of dimension $g(g+1)/2$; quotient $\mathcal{A}_g = \mathfrak{H}_g / \mathrm{Sp}(2g, \mathbb{Z})$ = moduli space of principally polarised abelian varieties; period mapping $\mathrm{Per} : \mathcal{M}_g \to \mathcal{A}_g$, $X \mapsto \mathrm{Jac}(X)$; Jacobi locus $\mathcal{J}_g = \mathrm{Per}(\mathcal{M}_g) \subset \mathcal{A}_g$ of dimension $3g - 3$ for $g \geq 2$; codimension $(g - 2)(g - 3)/2$, so $\mathcal{J}_g = \mathcal{A}_g$ iff $g \leq 3$ and strict subvariety for $g \geq 4$. Five characterisations of $\mathcal{J}_g$: (1) Schottky 1888 — single explicit polynomial $S(\theta) = 0$ in even theta-constants of degree $4$ on $12$ specific characteristics, irreducible hypersurface (Igusa 1980); Schottky-Jung 1909 extends via Pryms; (2) Andreotti-Mayer 1967 — $\mathcal{J}_g \subseteq \mathcal{N}_{g - 4}$ where $\mathcal{N}_k = \{\dim \mathrm{Sing}(\Theta) \geq k\}$, with the reverse containment conjectural and false in general (Beauville-Debarre 1986, Debarre 1992 identify additional components); (3) Novikov-Shiota 1979/1986 — $(A, \Theta)$ is a Jacobian iff $u(x, y, t) = 2 \partial_x^2 \log \theta(xV + yU + tW + z_0; \tau)$ solves the KP equation $\frac{3}{4} u_{yy} = (u_t - \frac{3}{2} u u_x - \frac{1}{4} u_{xxx})_x$, descending from Krichever's 1977 construction of KP solutions from algebraic curves via the Baker-Akhiezer function; alternative algebro-geometric proof in Arbarello-De Concini 1987; (4) Welters 1984 / Krichever 2010 — $(A, \Theta)$ is a Jacobian iff its Kummer variety $K(\tau) \subset \mathbb{P}^{2^g - 1}$ admits a trisecant line, descending from the Fay 1973 trisecant identity for Jacobians; (5) modular forms / Siegel-Igusa-Tsuyumine ring of theta-constants $\theta[m, m']$ of weight $1/2$ on $\Gamma(2)$. Generalisations: Prym Schottky problem (Beauville 1977, Donagi 1981); hyperelliptic Schottky (Mumford Tata II §IIIb); $k$-gonal strata; $p$-adic Schottky uniformisation (Mumford 1972, Mumford curves). Modern surveys: Donagi 1988, Grushevsky 2009. Foundation for the integration of curve geometry, theta-function theory, Sato-Grassmannian / Hirota tau-function integrable systems, projective geometry of Kummer varieties, and Siegel modular forms.

### alg-geom.gauss-manin

- **title**: Gauss-Manin connection
- **prerequisites**: `alg-geom.hodge-decomposition-curves`, `alg-geom.serre-duality-curves`, `alg-geom.sheaf-cohomology`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Manin 1958 *Rational points of algebraic curves over function fields* (originator, algebraic-geometry framing); Katz-Oda 1968 *On the differentiation of de Rham cohomology classes with respect to parameters* (modern algebraic framework); Griffiths 1968 *Periods of integrals on algebraic manifolds* I-III (Hodge-theoretic interpretation); Voisin *Hodge Theory and Complex Algebraic Geometry* I+II §10; Cattani-Kaplan-Schmid 1986 (degenerations); Cox-Katz *Mirror Symmetry and Algebraic Geometry*
  - intermediate: Voisin *Hodge Theory I* §10
  - beginner: Donaldson *Riemann Surfaces* §13 informal; Voisin *Hodge Theory* §10 informal
- **notes**: For a smooth proper morphism $\pi : \mathcal{X} \to S$ with compact Kähler fibres $X_s$, the cohomology bundle $\mathcal{H}^k = R^k \pi_* \mathbb{C}_{\mathcal{X}}$ is a local system on $S$ with fibre $H^k(X_s; \mathbb{C})$, and the Gauss-Manin connection $\nabla : \mathcal{H}^k \to \mathcal{H}^k \otimes \Omega^1_S$ is the canonical flat connection whose horizontal sections are locally-constant cycles. Three equivalent formulations: (i) trivial connection on the local system encoding monodromy; (ii) Katz-Oda algebraic construction on the de Rham cohomology bundle of a smooth proper morphism; (iii) Čech-cocycle level differentiation of locally lifted cocycles. Periods $\Pi(s) = \int_{\gamma_s} \omega$ are multivalued holomorphic functions on $S$, solutions of an algebraic Picard-Fuchs ODE with regular singularities at boundary divisors. Worked examples: family of elliptic curves with Picard-Fuchs = Gauss hypergeometric / Legendre equation (Euler-Gauss); quintic threefold $\sum z_i^5 = 5\psi z_1\cdots z_5$ whose Picard-Fuchs is the mirror-symmetry quintic equation (Candelas-de la Ossa-Green-Parkes 1991, encoding genus-zero Gromov-Witten invariants of the mirror via Givental-Kontsevich); family of Riemann surfaces over $\mathcal{M}_g$ producing the variation of Hodge structure (VHS) on $H^1$. Hodge filtration $F^p \mathcal{H}^k$ varies holomorphically but is not preserved by $\nabla$; instead Griffiths transversality $\nabla F^p \subseteq F^{p-1} \otimes \Omega^1_S$ holds. Period mapping $\mathcal{P} : S \to \mathcal{D}/\Gamma$ to the period domain modulo monodromy is horizontal in the transversality distribution. Modern context: mirror-symmetry identification with quantum cohomology connection; Shimura-variety automorphic theory; $p$-adic Hodge comparison theorems (Berthelot-Ogus-Faltings); Dubrovin's Frobenius-manifold framework. Originator: Manin 1958 (Izv. Akad. Nauk SSSR 22), with Picard-Fuchs antecedents in Gauss's hypergeometric work and Picard-Fuchs 1891-1928; modern algebraic framework Katz-Oda 1968 (J. Math. Kyoto Univ. 8); Hodge-theoretic interpretation Griffiths 1968.

### alg-geom.vhs-jacobian

- **title**: Variation of Hodge structure on the Jacobian
- **prerequisites**: `alg-geom.gauss-manin`, `alg-geom.jacobi-inversion`, `alg-geom.hodge-decomposition-curves`
- **tier_anchors**:
  - master: Griffiths 1968-70 *Periods of integrals on algebraic manifolds* I-III (originator); Voisin *Hodge Theory and Complex Algebraic Geometry* I+II §10–§11; Andreotti 1958 *On a theorem of Torelli* (Torelli for curves); Schottky 1888 (genus-4 Schottky problem); Shiota 1986 *Inventiones* (general Schottky via KP); Cox-Katz *Mirror Symmetry and Algebraic Geometry*; Mumford *Tata Lectures on Theta II*
  - intermediate: Voisin *Hodge Theory I* §10–§11
  - beginner: Voisin *Hodge Theory I* §10 informal; Donaldson *Riemann Surfaces* §13 informal
- **notes**: For a smooth proper family $\pi : \mathcal{X} \to S$ of compact Riemann surfaces of genus $g$, each fibre cohomology $H^1(X_s; \mathbb{C})$ carries a polarised pure Hodge structure of weight $1$ with Hodge filtration $F^1 H^1 = H^{1,0}(X_s) \subset H^1(X_s; \mathbb{C})$ of rank $g$ inside the rank-$2g$ total space; the Hodge subbundle $F^1 \mathcal{H}^1 = \pi_* \Omega^1_{\mathcal{X}/S}$ varies holomorphically over $S$. The relative Jacobian $\mathrm{Jac}(\mathcal{X}/S) = (F^1 \mathcal{H}^1)^* / R^1 \pi_* \mathbb{Z}$ is a smooth proper family of principally polarised abelian varieties (PPAV) over $S$, and the variation of Hodge structure is the data $(R^1 \pi_* \mathbb{Z}, F^1 \mathcal{H}^1, Q)$ with the symplectic intersection form $Q$ providing the polarisation. The period mapping $\mathcal{P} : S \to \mathfrak{H}_g / \mathrm{Sp}(2g, \mathbb{Z})$ to the Siegel upper half-space modulo the symplectic monodromy is holomorphic and horizontal: Griffiths transversality $\nabla F^1 \subseteq F^0 \otimes \Omega^1_S = \mathcal{H}^1 \otimes \Omega^1_S$ is the differential constraint that holds automatically in weight $1$, while the substantive content is the Cauchy-Riemann compatibility of the period matrix $\Pi(s)$ via the Gauss-Manin connection (Griffiths 1968 *Amer. J. Math.* 90). The period domain $\mathcal{D}$ for weight-1 PHS is the symmetric domain $\mathrm{Sp}(2g, \mathbb{R}) / U(g)$ realised as $\mathfrak{H}_g$, the Siegel upper half-space; the quotient $\mathfrak{H}_g / \mathrm{Sp}(2g, \mathbb{Z})$ is the moduli space $\mathcal{A}_g$ of PPAV. Torelli's theorem (Andreotti 1958) asserts the period mapping $\mathcal{M}_g \to \mathcal{A}_g$ is injective: a curve is determined by its principally polarised Jacobian. The Schottky problem (Schottky 1888 for $g = 4$ via a single explicit modular relation; Shiota 1986 / Novikov conjecture: KP-equation characterisation) asks for the image — the Schottky locus $\mathcal{J}_g$ of dimension $3g - 3$ inside $\mathcal{A}_g$ of dimension $g(g+1)/2$, of codimension $g(g-1)/2 - (3g - 3)$ for $g \geq 4$. The Riemann theta function $\theta(z; \tau)$ provides quasi-periodic sections of the principal polarisation line bundle on $\mathrm{Jac}(X_s)$; Jacobian theta functions satisfy the KP hierarchy (Shiota's theorem). Modular interpretation: $g = 1$ recovers the upper half-plane $\mathfrak{H}_1$ and modular forms for $\mathrm{SL}(2, \mathbb{Z})$, the bridge to number theory. Generalisations: VHS of higher weight (multi-step Hodge filtration with substantive Griffiths transversality), mixed Hodge structures (Deligne 1971-74) for non-compact / singular fibres, $\mathbb{R}$-VHS on homogeneous period domains $G(\mathbb{R})/V$, and $p$-adic VHS (Faltings, Berthelot rigid cohomology). Originator: Griffiths 1968-70 four-paper series *Periods of integrals on algebraic manifolds* (Inventiones, *Amer. J. Math.* 90, *Publ. Math. IHÉS* 38); Andreotti 1958 (Torelli for curves); Schottky 1888 (genus-4 Schottky); Shiota 1986 (general Schottky via KP, *Invent. Math.* 83).

### alg-geom.moduli-of-riemann-surfaces

- **title**: Moduli of Riemann surfaces
- **prerequisites**: `alg-geom.vhs-jacobian`, `alg-geom.jacobi-inversion`, `alg-geom.moduli-of-curves`
- **tier_anchors**:
  - master: Riemann 1857 *Theorie der Abel'schen Functionen* (originator of moduli — the $3g - 3$ count); Mumford 1965 *Geometric Invariant Theory* (algebraic-geometric construction); Deligne-Mumford 1969 *The irreducibility of the space of curves of given genus* (stable-curves compactification); Teichmüller 1939-44 (foundations of $\mathcal{T}_g$); Kontsevich 1992 *Intersection theory on the moduli space of curves* (Witten conjecture); Madsen-Weiss 2007 (Mumford's conjecture); Harris-Morrison *Moduli of Curves*; Arbarello-Cornalba-Griffiths *Geometry of Algebraic Curves I+II*
  - intermediate: Hain *Lectures on Moduli Spaces of Riemann Surfaces* (Park City IAS / PCMI 2011); Arbarello-Cornalba-Griffiths-Harris *Geometry of Algebraic Curves I+II*
  - beginner: Donaldson *Riemann Surfaces* §13 informal; Hain *Lectures on Moduli Spaces of Riemann Surfaces* (Park City) informal
- **notes**: The moduli space $\mathcal{M}_g$ of compact Riemann surfaces of genus $g$ is the parameter space of all isomorphism classes of smooth projective complex curves of fixed genus. It is naturally a smooth Deligne-Mumford stack of complex dimension $3g - 3$ for $g \geq 2$ (Riemann's count, rigorously realised in Mumford 1965 GIT), $\dim \mathcal{M}_1 = 1$ (the $j$-line), $\dim \mathcal{M}_0 = 0$ (a single point with stack structure $B\mathrm{PGL}(2)$). The coarse moduli space $M_g$ is a quasi-projective complex variety; the stack structure records non-trivial automorphisms of curves (hyperelliptic involutions, Klein quartic $\mathrm{PSL}(2, \mathbb{F}_7)$ etc.) that prevent $\mathcal{M}_g$ from being a scheme. Three non-tautological constructions: Teichmüller-theoretic ($\mathcal{T}_g$ contractible, $\cong \mathbb{R}^{6g-6}$, $\mathcal{M}_g = \mathcal{T}_g / \mathrm{MCG}(g)$ with $\mathrm{MCG}(g) = \pi_0(\mathrm{Diff}^+(\Sigma_g))$); algebraic-geometric (Mumford GIT on the Hilbert scheme of pluri-canonically embedded curves); period-mapping ($\mathcal{P} : \mathcal{M}_g \to \mathcal{A}_g$ via the Jacobian, image the Schottky locus $\mathcal{J}_g$, Torelli injectivity by Andreotti 1958). For $g \geq 2$ a fourth description by complete hyperbolic metrics (Fenchel-Nielsen length-twist coordinates) realises $\mathcal{T}_g \cong \mathbb{R}^{6g - 6}$. Compactification: $\overline{\mathcal{M}}_g$ adds stable nodal curves (Deligne-Mumford 1969 *Publ. IHÉS* 36); a smooth proper Deligne-Mumford stack of dimension $3g - 3$ with normal-crossings boundary $\partial \overline{\mathcal{M}}_g = \Delta_0 \cup \Delta_1 \cup \cdots \cup \Delta_{\lfloor g/2 \rfloor}$. Marked-point version $\mathcal{M}_{g, n}$ has dimension $3g - 3 + n$ (when $2g - 2 + n > 0$). Tautological ring: classes $\kappa_i, \psi_i, \lambda_i \in H^*(\overline{\mathcal{M}}_{g, n}; \mathbb{Q})$, generated by Mumford-Morita-Miller / Hodge / cotangent-line classes; Mumford's relation $\lambda_1 = \kappa_1 / 12$ via Grothendieck-Riemann-Roch on the universal curve; Faber's conjecture (1999) on the Gorenstein structure of $R^*(\mathcal{M}_g)$ (open in general). Witten conjecture (1990) / Kontsevich theorem (1992 *Comm. Math. Phys.* 147): the generating function of $\psi$-class intersection numbers on $\overline{\mathcal{M}}_{g, n}$ is a tau-function of the KdV hierarchy, proved via the matrix Airy integral and Strebel ribbon-graph combinatorics. Madsen-Weiss 2007 *Ann. of Math.* 165: $\mathrm{colim}_g H^*(\mathcal{M}_g; \mathbb{Q}) \cong \mathbb{Q}[\kappa_1, \kappa_2, \ldots]$ (Mumford's conjecture), via cobordism-category methods (Galatius-Madsen-Tillmann-Weiss 2009 *Acta Math.* 202). Applications: Gromov-Witten invariants integrate over $\overline{\mathcal{M}}_{g, n}(X, \beta)$ pushing to $\psi$-classes on $\overline{\mathcal{M}}_{g, n}$ (Kontsevich-Manin 1994); closed-bosonic-string scattering amplitudes are integrals of vertex operators against the Weil-Petersson measure on $\overline{\mathcal{M}}_{g, n}$ (Polyakov 1981); Hurwitz numbers via the ELSV formula (Ekedahl-Lando-Shapiro-Vainshtein 2001) translate combinatorial enumeration of branched covers to $\lambda$- and $\psi$-class integrals. Arithmetic moduli: $\mathcal{M}_g$ has a model over $\mathrm{Spec}\,\mathbb{Z}$, with Galois action of $\mathrm{Gal}(\overline{\mathbb{Q}}/\mathbb{Q})$ on $\widehat{\pi_1(\mathcal{M}_g \times \overline{\mathbb{Q}})}$ and the Grothendieck-Teichmüller programme (Grothendieck *Esquisse* 1984; Drinfeld 1990). Open problems: Faber's conjecture, Schottky problem in higher genus, explicit description of $H^*(\overline{\mathcal{M}}_g)$ for large $g$, gauge-theoretic / quantum-field-theoretic interpretations. Originator: Riemann 1857 (parameter count); Mumford 1965 (algebraic-geometric construction); Deligne-Mumford 1969 (stack and stable-curves compactification); Teichmüller 1939-44 (foundations of $\mathcal{T}_g$).

### alg-geom.kodaira-vanishing

- **title**: Kodaira vanishing theorem
- **prerequisites**: `alg-geom.sheaf-cohomology`, `alg-geom.ample-line-bundle`, `alg-geom.hodge-decomposition`
- **tier_anchors**:
  - master: Voisin Vol I; Griffiths-Harris Ch. 1; Lazarsfeld *Positivity* Vol I; Esnault-Viehweg *Vanishing Theorems*
  - intermediate: Voisin Vol I; Lazarsfeld Vol I
  - beginner: positivity kills higher cohomology
- **notes**: $H^i(X; \omega_X \otimes L) = 0$ for $i > 0$, $L$ ample on smooth projective complex $X$. Kodaira 1953 (transcendental). Akizuki-Nakano generalisation to $\Omega^p$. Algebraic proof via Deligne-Illusie reduction mod $p$. Kawamata-Viehweg generalisation to nef + big. Kollár's injectivity. Foundational for the minimal model program.

### alg-geom.intersection-pairing-surfaces

- **title**: Intersection pairing on a surface
- **prerequisites**: `alg-geom.scheme`, `alg-geom.weil-divisor`, `alg-geom.cartier-divisor`, `alg-geom.line-bundle-scheme`, `alg-geom.picard-group`
- **tier_anchors**:
  - master: Hartshorne §V.1; Beauville *Complex Algebraic Surfaces* §I–§III; Fulton *Intersection Theory* Ch. 7–8
  - intermediate: Hartshorne §V.1; Beauville §I
  - beginner: Beauville §I; counting transverse intersection points
- **notes**: Symmetric bilinear pairing $\mathrm{Pic}(X) \times \mathrm{Pic}(X) \to \mathbb{Z}$, $(D, D') \mapsto D \cdot D'$, on a smooth projective surface $X$ over algebraically closed $k$. Three equivalent definitions: geometric (transverse intersection count after moving lemma), cohomological ($D \cdot D' = \chi(\mathcal{O}_X) - \chi(\mathcal{O}(-D)) - \chi(\mathcal{O}(-D')) + \chi(\mathcal{O}(-D-D'))$, Hartshorne V.1.4), cup-product (cycle-class map $\mathrm{Pic}(X) \to H^2(X, \mathbb{Z})$ intertwines intersection with $\smile$). Self-intersection $D^2$. Examples: line $L^2 = 1$ on $\mathbb{P}^2$, exceptional divisor $E^2 = -1$, ruling $f^2 = 0$ on $\mathbb{P}^1 \times \mathbb{P}^1$. Italian school (Castelnuovo-Enriques 1880–1910); Hartshorne V scheme-theoretic framing; Fulton's $A^*(X)$-deepening. Load-bearing for adjunction, Riemann-Roch on surfaces, Hodge index, and the Castelnuovo-Beauville-Bombieri-Kodaira classification of surfaces.

### alg-geom.adjunction-formula

- **title**: Adjunction formula on a surface
- **prerequisites**: `alg-geom.intersection-pairing-surfaces`, `alg-geom.canonical-sheaf`, `alg-geom.sheaf-of-differentials`, `alg-geom.riemann-roch-curves`
- **tier_anchors**:
  - master: Hartshorne §V.1.5; Beauville *Complex Algebraic Surfaces* Ch. I and Ch. III; Griffiths-Harris §1.4 (conormal sequence) and §4.5 (analytic adjunction)
  - intermediate: Hartshorne §V.1 (Proposition 1.5); Beauville §I.5
  - beginner: Beauville §I; Hartshorne §V.1 informal — genus of a smooth plane curve from intersection numbers
- **notes**: For a smooth projective curve $C$ on a smooth projective surface $X$ over algebraically closed $k$, the adjunction formula in canonical-restriction form: $\omega_C \cong (\omega_X \otimes \mathcal{O}_X(C))|_C$. Genus form: $2 g_C - 2 = K_X \cdot C + C^2$, equivalently $g_C = 1 + \tfrac{1}{2}(K_X \cdot C + C^2)$. Proof via the conormal exact sequence $0 \to \mathcal{N}_{C/X}^\vee \to \Omega^1_X|_C \to \Omega^1_C \to 0$, taking determinants, and using $\mathcal{N}_{C/X}^\vee \cong \mathcal{O}_X(-C)|_C$. Codim-$1$ case of the general adjunction $\omega_Y \cong (\omega_X \otimes \det \mathcal{N}_{Y/X})|_Y$. Recovers Plücker's plane-curve genus formula $g = (d-1)(d-2)/2$, the bidegree-$(a,b)$ genus $(a-1)(b-1)$ on $\mathbb{P}^1 \times \mathbb{P}^1$, the K3 inequality $C^2 \geq -2$, the Castelnuovo $(-1)$-curve diagnostic, and Noether's formula $K_X^2 + e(X) = 12 \chi(\mathcal{O}_X)$. Picard 1897 originator-text; Castelnuovo 1892 and Severi 1921 Italian-school synthesis; Hartshorne V.1.5 modern scheme-theoretic framing.

### alg-geom.riemann-roch-surfaces

- **title**: Riemann-Roch theorem for surfaces
- **unit**: `04.05.08`
- **prerequisites**: `alg-geom.intersection-pairing-surfaces`, `alg-geom.adjunction-formula`, `alg-geom.riemann-roch-curves`, `alg-geom.serre-vanishing-finiteness`
- **tier_anchors**:
  - master: Hartshorne §V.1; Beauville *Complex Algebraic Surfaces* §I.6 + §VIII; Hirzebruch *Topological Methods in Algebraic Geometry* §20–§21; Griffiths-Harris *Principles of Algebraic Geometry* Ch. 5
  - intermediate: Hartshorne §V.1 Theorem 1.6; Beauville §I.6
  - beginner: Beauville §I.6 informal — Euler characteristic of a divisor on a surface from two intersection numbers
- **notes**: Theorem (Hartshorne V.1.6). For a smooth projective surface $S$ over algebraically closed $k$ and a divisor $D$ on $S$, $\chi(\mathcal{O}_S(D)) = \chi(\mathcal{O}_S) + \tfrac{1}{2} D \cdot (D - K_S)$, where $K_S$ is the canonical divisor and $\chi(\mathcal{O}_S) = 1 - q + p_g$ with $q = h^1(\mathcal{O}_S)$ the irregularity and $p_g = h^0(\omega_S) = h^2(\mathcal{O}_S)$ the geometric genus. **Noether's formula** (Max Noether 1883): $12 \chi(\mathcal{O}_S) = K_S^2 + c_2(S)$ couples the holomorphic and topological Euler characteristics on $S$. **Hirzebruch-Riemann-Roch derivation**: surface Riemann-Roch is the degree-two specialisation of $\chi(X, \mathcal{F}) = \int_X \mathrm{ch}(\mathcal{F}) \cdot \mathrm{td}(T_X)$ at $\mathcal{F} = \mathcal{O}_S(D)$, with $\mathrm{ch}(\mathcal{O}_S(D)) = 1 + D + D^2/2$ and $\mathrm{td}(T_S) = 1 - K_S/2 + (K_S^2 + c_2)/12$ truncated on a surface. **Direct (Italian-school) proof**: short exact sequence $0 \to \mathcal{O}_S(D - C) \to \mathcal{O}_S(D) \to \mathcal{O}_C(D|_C) \to 0$ for a smooth curve $C \subset S$, take Euler characteristics, apply curve Riemann-Roch on $C$, and use adjunction to identify the genus. **Worked examples**. (1) $S = \mathbb{P}^2$ with $K_S = -3H$, $H^2 = 1$: $\chi(\mathcal{O}(d)) = d(d+3)/2 + 1 = \binom{d+2}{2}$, recovering the dimension count for plane curves of degree $d$. (2) $S = \mathbb{P}^1 \times \mathbb{P}^1$ with $K_S = -2H_1 - 2H_2$ and bidegree $(a, b)$: $\chi = (a+1)(b+1)$. **Hodge index theorem** (Hartshorne V.1.9): the intersection form on $\mathrm{NS}(S) \otimes \mathbb{R}$ has signature $(1, \rho - 1)$, equivalently the intersection form on $H^{1,1}(S, \mathbb{R})$ has signature $(1, h^{1,1} - 1)$. **Castelnuovo's contractibility criterion** (Hartshorne V.5.7): a smooth rational curve $E$ with $E^2 = -1$ on a smooth projective surface is the exceptional divisor of a blow-up at a smooth point, with adjunction giving $E \cdot K_S = -1$ as the dual diagnostic. **Geography of surfaces**: Noether inequality $K_S^2 \geq 2 p_g - 4$ (Noether 1875); Bogomolov-Miyaoka-Yau inequality $K_S^2 \leq 9 \chi(\mathcal{O}_S)$ (Yau 1977, Miyaoka 1977) for surfaces of general type; the strip $2 \chi - 6 \leq K_S^2 \leq 9 \chi$ is the realisation region. **Enriques-Kodaira classification**: every smooth projective surface is birational to a unique minimal model with no $(-1)$-curves, and minimal models fall into four Kodaira-dimension classes: $\kappa = -\infty$ (rational/ruled), $\kappa = 0$ (K3, Enriques, abelian, bielliptic), $\kappa = 1$ (properly elliptic), $\kappa = 2$ (general type). Castelnuovo-Enriques-Severi (1900s-1920s) for char zero, Bombieri-Mumford (1976-77) for char $p$. Originators: Max Noether 1883 (the topological correction term); Castelnuovo, Enriques, Severi 1890s-1920s (Italian-school synthesis); Severi 1926 *Trattato* (refined version); Enriques 1949 *Le superficie algebriche* (synthesis); Hirzebruch 1956 (modern HRR proof); Hartshorne 1977 §V.1 (canonical scheme-theoretic framing).

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

### symplectic-geometry.moser-trick

- **title**: Moser's trick
- **prerequisites**: `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.darboux-theorem`
- **tier_anchors**:
  - master: Moser 1965 (originator, volume forms); Weinstein 1971 (symplectic extension); Cannas da Silva §3; McDuff-Salamon Ch. 3
  - intermediate: Cannas §3; McDuff-Salamon Ch. 3
  - beginner: Cannas §3 informal path-method intuition
- **notes**: Path-method proof technique. Given $\omega_t$ a path of cohomologous symplectic forms with $\dot\omega_t = d\alpha_t$, define $X_t$ by $\iota_{X_t}\omega_t = -\alpha_t$; the time-1 flow $\psi_1$ satisfies $\psi_1^* \omega_1 = \omega_0$. Originator-anchor for Darboux's theorem (modern proof), Weinstein neighbourhood theorem, equivariant Darboux, and smooth structure of regular symplectic reduction.

### symplectic-geometry.weinstein-neighbourhood

- **title**: Weinstein Lagrangian neighbourhood theorem
- **prerequisites**: `symplectic-geometry.lagrangian-submanifold`, `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.moser-trick`
- **tier_anchors**:
  - master: Weinstein 1971 (originator); Cannas §8; McDuff-Salamon Ch. 3 + 11
  - intermediate: Cannas §8; McDuff-Salamon Ch. 3
  - beginner: Cannas §8 informal
- **notes**: Closed Lagrangian $L \subset (M, \omega)$ has a tubular neighbourhood symplectomorphic to a neighbourhood of the zero section in $T^*L$ with the canonical form $-d\lambda$. Three-step proof: Lagrangian splitting + normal bundle = $T^*L$; tubular diffeomorphism via exponential map; Moser's trick on path of forms vanishing on $L$. Equivariant version. Generating-function bridge to symplectomorphisms. Foundational for Floer-theoretic comparison and Arnold-Givental conjectures. Originator: Weinstein 1971 *Symplectic manifolds and their Lagrangian submanifolds* (Adv. Math. 6).

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

### complex-geometry.newlander-nirenberg

- **title**: Newlander-Nirenberg integrability theorem
- **unit**: `05.06.03`
- **prerequisites**: `symplectic-geometry.almost-complex-structure`, `symplectic-geometry.pseudoholomorphic-curve`
- **tier_anchors**:
  - master: Newlander-Nirenberg 1957 (Annals of Math. 65); Hörmander *An Introduction to Complex Analysis in Several Variables* Ch. 5; Webster 1989 simplified proof; Voisin *Hodge Theory and Complex Algebraic Geometry I* §2; Huybrechts *Complex Geometry* §2.6
  - intermediate: Cannas da Silva §13 + §14; Huybrechts §2.6
  - beginner: Cannas §13 informal; Voisin §2 informal
- **notes**: An almost-complex structure $J$ on $M$ comes from a complex-manifold structure if and only if its Nijenhuis tensor $N_J(X,Y) = [JX,JY] - J[JX,Y] - J[X,JY] - [X,Y]$ vanishes. Equivalent formulations: involutivity of $T^{1,0}M$ under the Lie bracket; $\bar\partial^2 = 0$ on $\Lambda^*$; local existence of $n$ smooth $\mathbb{C}$-valued functions $z_1,\dots,z_n$ with $\bar\partial z_i = 0$ and $dz_1 \wedge \cdots \wedge dz_n \neq 0$. Originator: Newlander-Nirenberg 1957 (smooth case via Hörmander-style $L^2$-estimates for $\bar\partial$); predecessors Korn 1914 / Lichtenstein 1916 (real-dimension 2), Cartan-Kähler 1934 (real-analytic case via Frobenius), Eckmann-Frölicher 1951 (formal version); modern simplifications Malgrange 1969, Webster 1989. Real-dimension cases: dim 2 automatic; dim 4 generically obstructed; $S^4$ admits no almost-complex structure (Wu / Massey); $S^6$ integrability is the famous open problem on the $G_2$-invariant structure. Cross-strand bridge between symplectic almost-complex geometry and complex geometry; prerequisite for Kodaira-Spencer deformation theory of complex structures.

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

### complex-analysis.branched-coverings

- **title**: Branched coverings of Riemann surfaces
- **unit**: `06.02.02`
- **prerequisites**: `04.04.02`, `06.05.02`
- **tier_anchors**:
  - master: Riemann 1857 *Theorie der Abel'schen Functionen* (originator); Forster §4–§8; Grothendieck SGA 1 (1960–61); Belyi 1979; Grothendieck *Esquisse d'un programme* (1984); Schneps (ed.) *The Grothendieck Theory of Dessins d'Enfants* (1994); ELSV 2001
  - intermediate: Forster §4–§8; Donaldson §3–§4 (category of branched covers; Riemann existence theorem)
  - beginner: Forster §4 informal; Donaldson §3 informal (sheets meeting at branch points)
- **notes**: Forster-distinctive item from `plans/fasttrack/forster-riemann-surfaces.md` priority 2 (item 9). Three-tier unit organising branched covers as a category, with Riemann's existence theorem as the master equivalence.

### alg-geom.riemann-existence-theorem

- **title**: Riemann's existence theorem for algebraic curves
- **unit**: `06.02.03`
- **prerequisites**: `06.02.02`, `06.04.04`
- **tier_anchors**:
  - master: Riemann 1857 *Theorie der Abel'schen Functionen* (original existence claim, with gaps in the Dirichlet-principle step); Hilbert 1900 *Über das Dirichletsche Princip* (rigorous Dirichlet principle); Weyl 1913 *Die Idee der Riemannschen Fläche* (modern Hodge-theoretic proof); Hodge 1941 *The Theory and Applications of Harmonic Integrals*; Serre 1956 *Géométrie algébrique et géométrie analytique* (GAGA); Forster *Lectures on Riemann Surfaces* §16 (function-field route); Hartshorne *Algebraic Geometry* App. B (Chow's theorem)
  - intermediate: Forster §16; Donaldson §10–§11 (function-field route and very-ample-line-bundle embedding)
  - beginner: Forster §16 informal (compact Riemann surfaces are algebraic curves); Donaldson §10 informal
- **notes**: The converse direction to `complex-analysis.branched-coverings` (06.02.02): every compact Riemann surface is biholomorphic to the analytification of a smooth projective algebraic curve. Three proof routes (Riemann-Roch + very-ample embedding; function-field generation with $P(f, g) = 0$; branched-cover monodromy + GAGA). Master tier covers GAGA, the function-field-of-curves equivalence of categories, Belyi's theorem, and Chow's theorem as the higher-dimensional analogue.

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

### alg-geom.cech-schemes

- **title**: Čech cohomology of sheaves on schemes
- **unit**: `04.03.03`
- **prerequisites**: `alg-geom.scheme`, `alg-geom.affine-scheme`, `alg-geom.sheaf-cohomology`
- **tier_anchors**:
  - master: Serre 1955 *Faisceaux Algébriques Cohérents* (Annals of Math. 61); Hartshorne §III.4 + §III.5; Liu *Algebraic Geometry and Arithmetic Curves* §5.2
  - intermediate: Hartshorne §III.4
  - beginner: Hartshorne §III.4 informal — combinatorial cocycle bookkeeping on intersections of an open cover
- **notes**: Čech cochain complex $C^p(\mathcal{U}, \mathcal{F}) = \prod_{i_0 < \cdots < i_p} \mathcal{F}(U_{i_0 \cdots i_p})$ with alternating-sum-of-restriction differential $\delta : C^p \to C^{p+1}$; Čech cohomology $\check H^p(\mathcal{U}, \mathcal{F}) = \ker\delta^p / \mathrm{im}\,\delta^{p-1}$; refinement colimit $\check H^p(X, \mathcal{F}) = \mathrm{colim}_\mathcal{U} \check H^p(\mathcal{U}, \mathcal{F})$. Cartan's comparison theorem: for separated scheme $X$, affine open cover $\mathcal{U}$, and quasi-coherent $\mathcal{F}$, the canonical map $\check H^*(\mathcal{U}, \mathcal{F}) \to H^*(X, \mathcal{F})$ is an isomorphism in all degrees. Foundation for the cohomology computation on $\mathbb{P}^n_k$ via the standard cover $\{D_+(x_i)\}$ — Hartshorne III.5. Affine vanishing (Serre): $H^p(\mathrm{Spec}\,A, \tilde M) = 0$ for $p > 0$. Two-set covers reproduce Mayer-Vietoris. Čech-derived spectral sequence $E_2^{p,q} = \check H^p(\mathcal{U}, \mathcal{H}^q(\mathcal{F})) \Rightarrow H^{p+q}(X, \mathcal{F})$ degenerates when higher derived presheaves vanish on intersections. Originator: Čech 1932 (combinatorial topology); modern scheme version Serre 1955 *FAC*.

### alg-geom.cohomology-projective

- **title**: Cohomology of line bundles on projective space
- **unit**: `04.03.04`
- **prerequisites**: `alg-geom.cech-schemes`, `alg-geom.projective-scheme`
- **tier_anchors**:
  - master: Serre 1955 *Faisceaux Algébriques Cohérents* (Annals of Math. 61); Hartshorne §III.5; Liu *Algebraic Geometry and Arithmetic Curves* §5.2
  - intermediate: Hartshorne §III.5 + Theorem III.5.1
  - beginner: Hartshorne §III.5 informal — counting monomials of fixed degree on the standard affine cover of projective space
- **notes**: Theorem (Hartshorne III.5.1, Serre 1955): for $X = \mathbb{P}^n_k$ and $\mathcal{O}(d)$ the standard twisting sheaf, $H^0(\mathbb{P}^n, \mathcal{O}(d)) = S_d$ the degree-$d$ piece of $S = k[x_0, \ldots, x_n]$, of dimension $\binom{n + d}{n}$ for $d \geq 0$ and zero otherwise; $H^n(\mathbb{P}^n, \mathcal{O}(d))$ has basis Laurent monomials $x_0^{a_0} \cdots x_n^{a_n}$ with all $a_i < 0$ and $\sum a_i = d$, of dimension $\binom{-d - 1}{n}$ for $d \leq -n - 1$ and zero otherwise; $H^p(\mathbb{P}^n, \mathcal{O}(d)) = 0$ for $0 < p < n$. Proof via Čech on the standard cover $\{D_+(x_i)\}_{i=0}^n$: localised polynomial rings $S_{x_{i_0} \cdots x_{i_p}}$, alternating-sum differential, monomial bookkeeping with negative-support decomposition. Serre duality on $\mathbb{P}^n$: $H^n(\mathbb{P}^n, \mathcal{O}(d)) \cong H^0(\mathbb{P}^n, \mathcal{O}(-d - n - 1))^*$ via cup-product pairing, with dual basis matching $a_i + b_i = -1$; canonical sheaf $\omega_{\mathbb{P}^n} = \mathcal{O}(-n - 1)$ read off from this. Euler-Poincaré characteristic: $\chi(\mathbb{P}^n, \mathcal{O}(d)) = \binom{n + d}{n}$ as a polynomial identity in $d$. Hilbert polynomial of $\mathcal{O}_{\mathbb{P}^n}$ of degree $n$, leading coefficient $1/n!$, constant term $1$. Bott vanishing: $H^p(\mathbb{P}^n, \Omega^q(d)) = 0$ for $0 < p < n$, $d > 0$ via Euler exact sequence and the cohomology table. Riemann-Roch on $\mathbb{P}^n$ via Chern character and Todd class recovers $\binom{n + d}{n}$ from $\int e^{dH} \mathrm{td}(\mathbb{P}^n)$. Originator: Serre 1955 *FAC*; standard pedagogical reference Hartshorne III.5.

### alg-geom.serre-vanishing-finiteness

- **title**: Serre's vanishing and finiteness theorems
- **unit**: `04.03.05`
- **prerequisites**: `alg-geom.cech-schemes`, `alg-geom.cohomology-projective`
- **tier_anchors**:
  - master: Serre 1955 *Faisceaux Algébriques Cohérents* (Annals of Math. 61); Hartshorne §III.5; Grothendieck-Dieudonné EGA III §2; Mumford *Lectures on Curves on an Algebraic Surface* §14 (Castelnuovo-Mumford regularity)
  - intermediate: Hartshorne §III.5 + Theorems III.5.2 and III.5.3
  - beginner: Hartshorne §III.5 informal — twisting by $\mathcal{O}(n)$ for large $n$ kills higher cohomology
- **notes**: Theorem (Serre 1955; Hartshorne III.5.2). Setup: $A$ a noetherian ring, $X$ a noetherian projective scheme over $A$ with very ample $\mathcal{O}_X(1)$, $\mathcal{F}$ a coherent $\mathcal{O}_X$-module. (1) **Finiteness**: $H^i(X, \mathcal{F})$ is a finitely generated $A$-module for every $i \geq 0$, and $H^i(X, \mathcal{F}) = 0$ for $i > \dim X$ (Grothendieck vanishing). (2) **Vanishing**: there exists $n_0 = n_0(\mathcal{F})$ such that $H^i(X, \mathcal{F}(n)) = 0$ for every $n \geq n_0$ and every $i > 0$. **Proof outline (3 ingredients).** (i) Reduce to $X = \mathbb{P}^N_A$ via the closed immersion $i \colon X \hookrightarrow \mathbb{P}^N_A$: $i_*$ is exact with $R^p i_* = 0$ for $p \geq 1$ (closed immersion is affine), so the Leray spectral sequence collapses to $H^p(X, \mathcal{F}) \cong H^p(\mathbb{P}^N_A, i_* \mathcal{F})$. (ii) Compute $H^p(\mathbb{P}^N_A, \mathcal{O}(d))$ explicitly via Čech on the standard cover [04.03.04]: $H^0 = A[x_0, \ldots, x_N]_d$ free of rank $\binom{N+d}{N}$ for $d \geq 0$, $H^N = $ free $A$-module of rank $\binom{-d-1}{N}$ for $d \leq -N-1$, zero in middle and high degrees. (iii) Reduce general coherent $\mathcal{F}$ to line bundles via Serre's theorem A: every coherent $\mathcal{F}$ on $\mathbb{P}^N_A$ admits a surjection $\mathcal{O}(-d)^{\oplus k} \twoheadrightarrow \mathcal{F}$, kernel $\mathcal{K}$ coherent, long exact sequence in cohomology, descending induction on $i$ with base case $i > N$ (Grothendieck vanishing). **Cohomological characterisation of ampleness** (Hartshorne III.5.3): $\mathcal{L}$ ample iff for every coherent $\mathcal{F}$ there is $n_0(\mathcal{F})$ with $H^i(X, \mathcal{F} \otimes \mathcal{L}^n) = 0$ for $i > 0$ and $n \geq n_0$. **Castelnuovo-Mumford regularity**: $\mathcal{F}$ is $m$-regular iff $H^i(\mathbb{P}^N_A, \mathcal{F}(m - i)) = 0$ for $i \geq 1$; the regularity index $\mathrm{reg}(\mathcal{F})$ is the smallest such $m$, finite, monotone ($m$-regular implies $m'$-regular for $m' \geq m$), and provides the explicit threshold $n_0 = \mathrm{reg}(\mathcal{F})$ for Serre vanishing; $\mathcal{F}(\mathrm{reg}(\mathcal{F}))$ is globally generated and the multiplication map $H^0(\mathcal{F}(m)) \otimes H^0(\mathcal{O}(d)) \to H^0(\mathcal{F}(m+d))$ is surjective (Mumford 1966). **Generalisations**: Grothendieck's relative finiteness/vanishing for proper morphisms (EGA III §2); Serre duality as the dual statement; Kodaira vanishing $H^i(X, \omega_X \otimes \mathcal{L}) = 0$ for ample $\mathcal{L}$ on smooth projective $X/\mathbb{C}$ (one-twist refinement, characteristic zero); Kawamata-Viehweg vanishing for nef-and-big $\mathbb{Q}$-divisors; Serre's affineness criterion ($X$ affine iff $H^i(X, \mathcal{F}) = 0$ for every coherent $\mathcal{F}$ and $i \geq 1$). Worked example on $\mathbb{P}^2$ with ideal sheaf $\mathcal{I}_C$ of a smooth plane curve $C$ of degree $e$ uses the SES $0 \to \mathcal{O}(d-e) \to \mathcal{O}(d) \to \mathcal{O}_C(d) \to 0$ to compute the explicit threshold. Originator: Serre 1955 *FAC*; modernised in Hartshorne III.5.2-3 (1977) and EGA III (1961-63).

### alg-geom.cech-cohomology-line-bundles

- **title**: Čech cohomology of holomorphic line bundles
- **unit**: `06.04.02`
- **prerequisites**: `complex-analysis.holomorphic-line-bundle`, `complex-analysis.riemann-roch-compact-rs`
- **tier_anchors**:
  - master: Behnke-Stein 1949 *Entwicklung analytischer Funktionen auf Riemannschen Flächen* (Math. Ann. 120) — originator Čech for holomorphic-bundle data on Riemann surfaces; Forster *Lectures on Riemann Surfaces* §12–§17; Donaldson *Riemann Surfaces* §10–§12; Griffiths-Harris *Principles of Algebraic Geometry* §0.4 + §1.2
  - intermediate: Forster *Lectures on Riemann Surfaces* §12–§17; Donaldson *Riemann Surfaces* §10–§11
  - beginner: Forster §12 informal; Donaldson §10 informal
- **notes**: For a compact Riemann surface $X$, a holomorphic line bundle $L \to X$ with transition functions $g_{ij}$ on a cover $\mathcal{U} = \{U_i\}$, and the sheaf $\mathcal{O}(L)$ of holomorphic sections, the Čech cochain complex $C^p(\mathcal{U}, \mathcal{O}(L)) = \prod_{i_0 < \cdots < i_p} \Gamma(U_{i_0 \cdots i_p}, L)$ with alternating-sum-of-restriction differential gives the Čech cohomology $\check H^p(X, L) = \mathrm{colim}_{\mathcal{U}} \check H^p(\mathcal{U}, L)$. Real dimension two forces $H^p(X, L) = 0$ for $p \geq 2$, leaving only $H^0$ (global sections) and $H^1$. Dolbeault comparison: the fine resolution $0 \to \mathcal{O}(L) \to C^\infty(L) \xrightarrow{\bar\partial} C^\infty(L \otimes \overline{T^*X}) \to 0$ identifies $\check H^p(X, L) \cong H^{0,p}_{\bar\partial}(X, L)$ canonically. Worked computation on $\mathbb{P}^1$ with $L = \mathcal{O}(d)$ on the standard two-set cover $\{U_0, U_1\}$ with transition $z \mapsto z^d$ on $\mathbb{C}^*$: $\dim H^0(\mathcal{O}(d)) = d + 1$ for $d \geq 0$ and zero for $d \leq -1$; by Serre duality $\dim H^1(\mathcal{O}(d)) = -d - 1$ for $d \leq -2$ and zero otherwise. Mittag-Leffler problem (Forster §26): the obstruction to globalising prescribed principal parts on $X$ lives in $H^1(X, L)$, recovering Cousin I (additive principal parts) and Cousin II (multiplicative divisors) as cohomological-obstruction problems. Computational tool: short exact sequences $0 \to \mathcal{O}(-D) \to \mathcal{O} \to \mathcal{O}_D \to 0$ for a divisor $D$ produce long exact sequences relating $H^*(X, \mathcal{O}(-D))$ to $H^*(X, \mathcal{O})$ and the local data of $D$, the inductive backbone of every line-bundle cohomology computation on a curve. Originator: Čech 1932 (combinatorial topology) + Behnke-Stein 1949 (Math. Ann. 120) for holomorphic-bundle data on Riemann surfaces; Serre 1955 *FAC* for the algebraic-side counterpart on schemes.

### complex-analysis.stein-riemann-surfaces

- **title**: Stein Riemann surfaces
- **unit**: `06.09.01`
- **prerequisites**: `complex-analysis.holomorphic-line-bundle`, `alg-geom.cech-cohomology-line-bundles`
- **tier_anchors**:
  - master: Behnke-Stein 1949 *Entwicklung analytischer Funktionen auf Riemannschen Flächen* (Math. Ann. 120, originator: every non-compact RS is Stein); Stein 1951 *Analytische Funktionen mehrerer komplexer Veränderlichen zu vorgegebenen Periodizitätsmoduln und das zweite Cousinsche Problem* (Math. Ann. 123, originator: Stein-manifold definition); Cartan 1951–53 séminaire (Theorems A and B); Forster *Lectures on Riemann Surfaces* §25–§26; Hörmander *Several Complex Variables* Ch. IV–VI; Cieliebak-Eliashberg *From Stein to Weinstein and Back* (2012)
  - intermediate: Forster *Lectures on Riemann Surfaces* §25–§26; Donaldson *Riemann Surfaces* §11
  - beginner: Forster §25 informal; Donaldson §11 informal
- **notes**: A non-compact Riemann surface $X$ is **Stein** when it is *holomorphically convex* (for every compact $K \subset X$ the holomorphic hull $\hat K = \{z : |f(z)| \leq \sup_K |f|, \forall f \in \mathcal{O}(X)\}$ is compact) and *holomorphically separable* (for every $p \neq q$ in $X$ there is $f \in \mathcal{O}(X)$ with $f(p) \neq f(q)$). Equivalent characterisations on a non-compact Riemann surface: existence of a strictly subharmonic exhaustion $\phi : X \to \mathbb{R}$; vanishing $H^q(X, \mathcal{F}) = 0$ for $q \geq 1$ and every coherent analytic sheaf $\mathcal{F}$ (Theorem B); solvability of the $\bar\partial$-equation $\bar\partial f = g$ with no compatibility condition; solvability of Cousin I and II problems. **Behnke-Stein theorem (1949):** every non-compact Riemann surface is Stein — the trivial classification on a curve, replaced by an inequivalent rigidity condition only in higher complex dimension. Cohomological consequences: $H^1(X, \mathcal{O}) = 0$ (Mittag-Leffler always solvable), $H^1(X, \mathcal{O}^*) = 0$ for the simply-connected part (every line bundle on a non-compact RS is holomorphically trivial), classical Runge approximation extends to all of $X$ when $X \setminus K$ has no relatively compact components. Examples = the entire class of non-compact Riemann surfaces: $\mathbb{C}$, $\mathbb{C}^*$, $\mathbb{C} \setminus \mathbb{N}$, the upper half-plane $\mathbb{H}$, the open unit disc $\mathbb{D}$, every annulus, the universal cover $\mathbb{H}^2$ of a genus-$g \geq 2$ surface, every compact Riemann surface minus a finite point set. Higher-dimensional Stein theory: same axioms produce the Cartan-Serre theorems A and B in arbitrary complex dimension, with Hörmander's $L^2$-method and Grauert's Oka principle as analytic engines. Bridge to symplectic topology: every Stein manifold carries a canonical Weinstein structure compatible with the cotangent symplectic form (Cieliebak-Eliashberg 2012). Bridge to algebraic geometry via Serre's GAGA on the projective side and the affine-versus-Stein dictionary on the open side. Originators: Behnke-Stein 1949 (RS case), Stein 1951 (general Stein-manifold definition), Cartan 1951–53 (Theorems A and B).

### complex-analysis.theorems-a-and-b-stein-rs

- **title**: Theorems A and B for Stein Riemann surfaces
- **unit**: `06.09.02` (planned)
- **prerequisites**: `complex-analysis.stein-riemann-surfaces`, `alg-geom.cech-cohomology-line-bundles`
- **tier_anchors**:
  - master: Cartan 1951–53 séminaire (originator); Cartan-Serre 1953 (CRAS 237); Forster *Lectures on Riemann Surfaces* §29; Hörmander *Several Complex Variables* Ch. IV
  - intermediate: Forster *Lectures on Riemann Surfaces* §29
  - beginner: Forster §29 informal
- **notes**: Theorem A: on a Stein Riemann surface, every coherent analytic sheaf is generated by its global sections. Theorem B: on a Stein Riemann surface, $H^q(X, \mathcal{F}) = 0$ for every coherent analytic $\mathcal{F}$ and every $q \geq 1$. Forster's 1-d proof: exhaustion by relatively compact Runge opens combined with Schwartz finiteness and a limit-passage argument. Forces Cousin I, Cousin II, and Mittag-Leffler on $X$ from a single vanishing identity. Originators: Cartan 1951–53; Cartan-Serre 1953.

### complex-analysis.behnke-stein

- **title**: Behnke-Stein theorem
- **unit**: `06.09.03`
- **prerequisites**: `complex-analysis.stein-riemann-surfaces`, `complex-analysis.theorems-a-and-b-stein-rs`
- **tier_anchors**:
  - master: Behnke-Stein 1949 *Entwicklung analytischer Funktionen auf Riemannschen Flächen* (Math. Ann. 120, originator); Forster *Lectures on Riemann Surfaces* §25–§26; Hörmander *Several Complex Variables*; Grauert-Remmert *Theory of Stein Spaces*
  - intermediate: Forster *Lectures on Riemann Surfaces* §25–§26
  - beginner: Forster §25 informal; Donaldson §11 informal
- **notes**: **Behnke-Stein theorem (1949).** Every connected non-compact Riemann surface is Stein. Cornerstone classification of non-compact Riemann surfaces; combined with the uniformisation theorem on the compact side gives a complete picture of complex one-folds. Equivalent reformulations: (1) every non-compact RS admits a strictly subharmonic exhaustion $\phi : X \to \mathbb{R}$; (2) for every coherent analytic sheaf $\mathcal{F}$ on a non-compact $X$, $H^q(X, \mathcal{F}) = 0$ for $q \geq 1$ (Theorem B); (3) $H^1(X, \mathcal{O}) = 0$, i.e. Mittag-Leffler holds globally; (4) $\mathrm{Pic}(X) = 0$, every line bundle holomorphically trivial. Proof outline: construct a Runge exhaustion $K_1 \Subset K_2 \Subset \cdots$ with $\bigcup K_n = X$; build a strictly subharmonic exhaustion via a limit-passage Runge approximation; solve $\bar\partial f = g$ globally via Hörmander $L^2$ on each pseudoconvex piece + Mittag-Leffler / Fréchet limit passage; deduce cohomological vanishing and holomorphic separability + holomorphic convexity from the exhaustion. **Why dim 1 is special.** Every domain in $\mathbb{C}$ is automatically holomorphically convex (Runge's theorem 1885 generalises). In higher dim, this fails — $\mathbb{C}^2 \setminus \{0\}$ is not Stein. The notion of "non-compact + open" implies Stein in dim 1; in higher dim, pseudoconvexity is required (Levi's theorem). The dim-1 proof is therefore much simpler than the general Stein-manifold theory. **Higher-dim picture.** Stein $\Leftrightarrow$ holomorphically convex $\Leftrightarrow$ pseudoconvex (Bergman 1934 / Oka 1942 / Bremermann 1954 / Norguet 1954) — the **Levi problem**. In dim $n \geq 2$, not every non-compact connected complex $n$-fold is Stein; Behnke-Stein is the dim-1 "easy" case. Examples (all Stein on the dim-1 side): $\mathbb{C}$, $\mathbb{C}^*$, $\mathbb{C} \setminus K$ for $K$ finite, open Riemann surfaces of any genus, disc, half-plane, annulus, compact RS minus a finite point set, universal cover $\widetilde{\Sigma_g}$ of higher-genus $\Sigma_g$ (the disc). Connection to Riemann's mapping theorem: every simply connected proper open $\Omega \subset \mathbb{C}$ biholomorphic to the unit disc — special case of Behnke-Stein for simply connected non-compact RS, biholomorphic to $\mathbb{C}$ or the disc by uniformisation. Connection to uniformisation: compact RS (3 types — $\mathbb{P}^1$, elliptic, hyperbolic); non-compact (universal cover $\mathbb{C}$ or disc); Behnke-Stein gives the structure of the quotient by deck transformations. **Originators.** Heinrich Behnke + Karl Stein 1949 *Entwicklung analytischer Funktionen auf Riemannschen Flächen* (Math. Ann. 120). Karl Stein 1951 abstracted to *Stein manifolds* in higher dim. Levi problem in higher dim solved by Bremermann + Norguet + Oka in 1954.

### complex-analysis.cousin-i-additive

- **title**: Cousin I (additive)
- **unit**: `06.09.04`
- **prerequisites**: `complex-analysis.theorems-a-and-b-stein-rs`, `complex-analysis.behnke-stein`
- **tier_anchors**:
  - master: Cousin 1895 *Sur les fonctions de $n$ variables complexes* (Acta Math. 19, originator); Mittag-Leffler 1884 (Acta Math. 4, planar special case); Forster *Lectures on Riemann Surfaces* §26; Cartan 1951–53 séminaire (cohomological reformulation via Theorem B); Hörmander *Several Complex Variables* Ch. III; Grauert-Remmert *Theory of Stein Spaces* (Grundlehren 236)
  - intermediate: Forster *Lectures on Riemann Surfaces* §26
  - beginner: Forster §26 informal; Donaldson §11 informal
- **notes**: **Cousin I problem (additive).** Given an open cover $\{U_i\}$ of a non-compact Riemann surface $X$ and meromorphic functions $f_i \in \mathcal{M}(U_i)$ with $f_i - f_j \in \mathcal{O}(U_i \cap U_j)$ on every overlap, find a global meromorphic $f \in \mathcal{M}(X)$ with $f - f_i \in \mathcal{O}(U_i)$ for every $i$. The differences $g_{ij} = f_i - f_j$ form a Čech 1-cocycle in the structure sheaf $\mathcal{O}_X$, and solvability is exactly the cohomology class $[\{g_{ij}\}] \in H^1(X, \mathcal{O}_X)$ vanishing. By Behnke-Stein 1949 + Cartan-Serre Theorem B, $H^1(X, \mathcal{O}_X) = 0$ on every non-compact Riemann surface, so Cousin I is unconditionally solvable. **Sheaf-theoretic formulation.** Use the short exact sequence $0 \to \mathcal{O}_X \to \mathcal{M}_X \to \mathcal{P}_X \to 0$ where $\mathcal{M}_X$ is the meromorphic-function sheaf and $\mathcal{P}_X = \mathcal{M}_X / \mathcal{O}_X$ is the principal-parts sheaf with stalks the Laurent-tail rings. The connecting homomorphism $\delta : \Gamma(X, \mathcal{P}_X) \to H^1(X, \mathcal{O}_X)$ is the Cousin I obstruction map; the datum is solvable when $\delta(\sigma) = 0$. **Classical Mittag-Leffler.** The 1884 planar case on $\mathbb{C}$: for $a_n \to \infty$ and prescribed Laurent tails $P_n(1/(z - a_n))$, the convergence-factor series $\sum_n (P_n(1/(z - a_n)) - q_n(z))$ with $q_n$ a partial Taylor expansion is the explicit Čech coboundary trivialisation. Closed form for poles at integers with residue 1: $\pi \cot(\pi z)$. **Compact case.** On a compact RS of genus $g$, $H^1(X, \mathcal{O}_X) \cong \mathbb{C}^g$ (Hodge / Serre duality on a curve), so a generic Cousin I datum is not solvable; the obstruction dimension is the genus. **Higher-dimensional picture.** Cousin posed the problem in 1895 on bidiscs in $\mathbb{C}^n$ and solved the polydisc case by iterated Cauchy integrals. Oka 1937 (J. Sci. Hiroshima Univ.) settled Cousin I on every domain of holomorphy in $\mathbb{C}^n$. Cartan-Serre 1953 (Cartan séminaire, CRAS 237) extended to abstract Stein manifolds via Theorem B. Hörmander 1965 supplied the modern $L^2$-PDE engine. **Failure on non-Stein manifolds.** $\mathbb{C}^2 \setminus \{0\}$: Hartogs extension forces every holomorphic function to extend to all of $\mathbb{C}^2$, breaking the Stein hypothesis and producing a non-zero $H^1(X, \mathcal{O}_X)$. The dichotomy Cousin-I-solvable-vs-not coincides with Stein-vs-not in arbitrary complex dimension. **Cousin II (multiplicative).** Replace differences with ratios $f_i / f_j \in \mathcal{O}^*(U_i \cap U_j)$; obstruction in $H^1(X, \mathcal{O}_X^*) = \mathrm{Pic}(X)$. On a non-compact RS, both $H^1(X, \mathcal{O}_X)$ and $H^2(X, \mathbb{Z})$ vanish, so Cousin II is also unconditionally solvable; on Stein manifolds in higher dimension, Cousin II can fail when $H^2(X, \mathbb{Z}) \neq 0$. **Originators.** Pierre Cousin 1895 (Acta Math. 19) — thesis problem in $\mathbb{C}^n$; Mittag-Leffler 1884 (Acta Math. 4) — planar special case; Oka 1937 — domains of holomorphy in $\mathbb{C}^n$; Cartan-Serre 1953 — Stein manifolds in arbitrary dimension; Behnke-Stein 1949 — RS case via the dimension-one Stein theorem.

### complex-analysis.cousin-ii-multiplicative

- **title**: Cousin II (multiplicative)
- **unit**: `06.09.05`
- **prerequisites**: `complex-analysis.cousin-i-additive`, `complex-analysis.theorems-a-and-b-stein-rs`
- **tier_anchors**:
  - master: Cousin 1895 *Sur les fonctions de $n$ variables complexes* (Acta Math. 19, originator); Weierstrass 1876 *Zur Theorie der eindeutigen analytischen Functionen* (Berlin Akad., planar special case); Forster *Lectures on Riemann Surfaces* §26; Oka 1939 *Sur les fonctions analytiques de plusieurs variables III* (J. Sci. Hiroshima Univ. 9, originator of the Oka principle and the first higher-dim counterexample); Grauert 1958 *Analytische Faserungen über holomorph-vollständigen Räumen* (Math. Ann. 135, Oka-Grauert principle for vector bundles); Hörmander *Several Complex Variables* Ch. III; Grauert-Remmert *Theory of Stein Spaces* (Grundlehren 236)
  - intermediate: Forster *Lectures on Riemann Surfaces* §26
  - beginner: Forster §26 informal; Donaldson §11 informal
- **notes**: **Cousin II problem (multiplicative).** Given an open cover $\{U_i\}$ of a Riemann surface $X$ and non-zero meromorphic $f_i \in \mathcal{M}^*(U_i)$ with $f_i / f_j \in \mathcal{O}^*(U_i \cap U_j)$ (holomorphic and non-vanishing) on every overlap, find a global $f \in \mathcal{M}^*(X)$ with $f / f_i \in \mathcal{O}^*(U_i)$ for every $i$. The ratios $g_{ij} = f_i / f_j$ form a multiplicative Čech 1-cocycle in $\mathcal{O}_X^*$, and solvability is exactly the cohomology class $[\{g_{ij}\}] \in H^1(X, \mathcal{O}_X^*) = \mathrm{Pic}(X)$ vanishing — equivalently, the holomorphic line bundle determined by the cocycle is holomorphically trivial. **Exponential sheaf sequence.** $0 \to 2\pi i \mathbb{Z} \to \mathcal{O}_X \xrightarrow{\exp} \mathcal{O}_X^* \to 0$ produces the long exact sequence segment $H^1(X, \mathcal{O}_X) \to \mathrm{Pic}(X) \xrightarrow{c_1} H^2(X, \mathbb{Z}) \to H^2(X, \mathcal{O}_X)$ where $c_1$ is the first Chern class. **Non-compact RS case.** On a connected non-compact Riemann surface, $H^1(X, \mathcal{O}_X) = 0$ (Behnke-Stein + Theorem B) *and* $H^2(X, \mathbb{Z}) = 0$ (top-degree integer cohomology of a connected non-compact 2-manifold), so $\mathrm{Pic}(X) = 0$ and Cousin II is unconditionally solvable. The two-fold vanishing chain — analytic + topological — distinguishes Cousin II from Cousin I, which only needs the analytic part. **Sheaf-theoretic formulation.** Short exact sequence $0 \to \mathcal{O}_X^* \to \mathcal{M}_X^* \to \mathcal{D}_X \to 0$ where $\mathcal{D}_X = \mathcal{M}_X^* / \mathcal{O}_X^*$ is the divisor sheaf; connecting map $\delta : \Gamma(X, \mathcal{D}_X) \to \mathrm{Pic}(X)$ is the Cousin II obstruction. **Classical Weierstrass product.** The 1876 planar case on $\mathbb{C}$: for $a_n \to \infty$ and multiplicities $m_n$, the product $\prod_n E_{p_n}(z/a_n)^{m_n}$ with elementary factors $E_p(z) = (1 - z) \exp(z + z^2/2 + \cdots + z^p/p)$ is the explicit multiplicative Čech coboundary trivialisation. Closed form for simple zeros at every integer: $\sin(\pi z)$. **Compact case.** On a compact RS of genus $g$, $\mathrm{Pic}(X)$ sits in $0 \to \mathrm{Pic}^0(X) \to \mathrm{Pic}(X) \xrightarrow{\deg} \mathbb{Z} \to 0$ with $\mathrm{Pic}^0(X)$ the Jacobian, a $g$-dim complex torus. Generic Cousin II data are not solvable; obstruction is the line bundle's degree (topological) plus its class in $\mathrm{Pic}^0$ (analytic). **Higher-dimensional picture.** Cousin posed Cousin II in 1895 on polydiscs in $\mathbb{C}^n$ and solved them directly (contractible). Oka 1939 (J. Sci. Hiroshima Univ. Ser. A 9) gave the first counterexample on a domain in $\mathbb{C}^2$ with non-trivial $H^2(\mathbb{Z})$ and formulated the **Oka principle**: on a Stein manifold, every continuous Cousin II datum has a holomorphic solution iff the topological obstruction vanishes. Grauert 1958 (Math. Ann. 135) extended to vector bundles of arbitrary rank — the **Oka-Grauert principle**: holomorphic and topological classifications of complex vector bundles on a Stein manifold agree as bijections. **Cousin I vs Cousin II.** Cousin I obstruction in $H^1(\mathcal{O})$, purely analytic; Cousin II obstruction in $\mathrm{Pic}$, sandwiched between analytic and topological via the exponential sequence. In dim 1 non-compact, both vanish; in dim ≥ 2 Stein, Cousin I always solvable but Cousin II conditional on topology. **Originators.** Pierre Cousin 1895 (Acta Math. 19) — thesis problem in $\mathbb{C}^n$; Weierstrass 1876 — planar special case (entire functions with prescribed zeros); Oka 1939 — counterexample + Oka principle; Grauert 1958 — Oka-Grauert principle for vector bundles; Cartan-Serre 1953 — cohomological reformulation via the exponential sequence on Stein manifolds; Behnke-Stein 1949 — RS case via dimension-one Stein theorem.

### alg-geom.sheaf-cohomology-survey

- **title**: Survey of sheaf cohomology on Riemann surfaces
- **unit**: `06.04.07`
- **prerequisites**: `alg-geom.cech-cohomology-line-bundles`, `complex-analysis.dbar-hilbert-pde`, `alg-geom.serre-duality-curves`
- **tier_anchors**:
  - master: Serre 1955 *Faisceaux Algébriques Cohérents* (Annals of Math. 61, originator: sheaf cohomology of coherent sheaves on a complex algebraic variety); Grothendieck 1957 *Sur quelques points d'algèbre homologique* (Tôhoku Math. J. 9, originator: derived-functor cohomology in an abelian category); Forster *Lectures on Riemann Surfaces* §11–§17; Donaldson *Riemann Surfaces* §10–§12; Griffiths-Harris *Principles of Algebraic Geometry* §0.4; Voisin *Hodge Theory and Complex Algebraic Geometry I* §1–§5
  - intermediate: Forster *Lectures on Riemann Surfaces* §11–§13; Donaldson *Riemann Surfaces* §10
  - beginner: Forster §11–§13 informal; Donaldson §10 informal
- **notes**: Synoptic survey gathering the four pictures of sheaf cohomology on a Riemann surface and the comparison theorems that make them equivalent. (1) **Čech**: $\check H^*(X, \mathcal{F})$ via the alternating-sum-of-restriction complex on open covers and the colimit over refinements (computational; dovetails with the line-bundle case in 06.04.02). (2) **Dolbeault / harmonic**: $H^q(X, \mathcal{F}) \cong \mathcal{H}^q(X, \mathcal{F})$ via the harmonic kernel of the Hodge-Laplace, with the Bochner-Kodaira-Nakano refinement (analytic; the framework of 06.04.05). (3) **Derived-functor**: $H^*(X, \mathcal{F}) = R^* \Gamma(X, -)$ in the abelian category of sheaves of $\mathcal{O}_X$-modules (Grothendieck 1957); most flexible, least computational. (4) **Singular / topological** for constant coefficient sheaves: $H^*(X, \mathbb{Z})$ via singular cochains on the underlying topological surface, matched with $H^*_{dR}(X, \mathbb{C})$ via de Rham. **Comparison theorems.** Cartan-Leray: Čech equals derived-functor on a paracompact Hausdorff space. Dolbeault: fine resolution by smooth $(0, q)$-forms identifies derived-functor cohomology with $\bar\partial$-cohomology, with harmonic representatives via the Hodge theorem on compact Kähler. Hodge: $H^k(X, \mathbb{C}) = \bigoplus_{p + q = k} H^{p, q}(X)$ with $H^{p, q}$ the harmonic $(p, q)$-forms; on a Riemann surface this is the genus identification $H^1(X, \mathbb{C}) = H^{1, 0}(X) \oplus H^{0, 1}(X) = \mathbb{C}^g \oplus \overline{\mathbb{C}^g}$. Serre duality (Serre 1955 *Un théorème de dualité*): $H^q(X, \mathcal{F}) \cong H^{n-q}(X, \mathcal{F}^\vee \otimes \omega_X)^*$ for coherent $\mathcal{F}$ on a smooth proper $n$-dimensional scheme; the curve case ($n = 1$) is 06.04.04. **GAGA** (Serre 1956 *Géométrie algébrique et géométrie analytique*, Ann. Inst. Fourier 6): on a smooth projective variety over $\mathbb{C}$, algebraic and analytic coherent cohomology agree, identifying the analytic Čech / Dolbeault picture with the algebraic Hartshorne III picture. **Computational toolkit.** Long exact sequence in cohomology from a short exact sequence of sheaves; Mayer-Vietoris from a two-set cover; twisting / shift via $0 \to \mathcal{O}(L - p) \to \mathcal{O}(L) \to \mathbb{C}_p \to 0$; Schwartz finiteness $\dim H^q(X, \mathcal{F}) < \infty$ for coherent $\mathcal{F}$ on compact $X$; Riemann-Roch $\chi(L) = \deg L + 1 - g$ for line bundles on a curve; Serre vanishing $H^1(X, L) = 0$ for $\deg L \geq 2g - 1$. **Standard cohomology table** (compact RS of genus $g$): $h^0(\mathcal{O}_X) = 1$, $h^1(\mathcal{O}_X) = g$; $h^0(\omega_X) = g$, $h^1(\omega_X) = 1$; for $\mathcal{O}(D)$ with $\deg D > 2g - 2$, $h^0 = \deg D - g + 1$ and $h^1 = 0$ (non-special range); for $\deg D < 0$, $h^0 = 0$ and $h^1 = h^0(\omega_X \otimes \mathcal{O}(-D))$; for $0 \leq \deg D \leq 2g - 2$, both sides require Riemann-Roch + Serre + speciality bookkeeping. **Higher-dimensional generalisation.** Cartan-Serre Theorems A and B on Stein manifolds; Kodaira vanishing on compact Kähler with positive line bundles; Grothendieck cohomology on noetherian schemes via injective resolutions; the four-pictures-agree mantra extends with Hodge replaced by mixed Hodge (Deligne) on singular varieties and de Rham replaced by crystalline / étale on positive-characteristic schemes. **Failure modes.** Non-Kähler compact complex manifolds (Hopf surface): Hodge symmetry $h^{p, q} = h^{q, p}$ fails, so harmonic-vs-Dolbeault identification is incomplete. Non-paracompact spaces: Čech-vs-derived-functor can differ (counterexamples in Godement). Non-coherent sheaves on a Riemann surface: $H^*$ may be infinite-dimensional, and harmonic theory does not directly apply. Originators: Čech 1932 (combinatorial cohomology); Cartan 1953-55 (sheaf-theoretic refinement, séminaire); Serre 1955 *FAC* (algebraic-side coherent cohomology); Hodge 1941 (harmonic representatives); Dolbeault 1953 (Dolbeault cohomology); Hörmander 1965 ($L^2$ existence); Grothendieck 1957 *Tôhoku* (derived-functor cohomology in an abelian category).

### complex-analysis.dbar-hilbert-pde

- **title**: Hilbert-space PDE for $\bar\partial$
- **unit**: `06.04.05`
- **prerequisites**: `alg-geom.cech-cohomology-line-bundles`, `functional-analysis.bounded-operators`
- **tier_anchors**:
  - master: Hörmander 1965 *L^2 estimates and existence theorems for the $\bar\partial$ operator* (Acta Math. 113) — originator $L^2$ existence theorem; Andreotti-Vesentini 1965 (Publ. Math. IHÉS 25) — compact Kähler companion; Demailly *Complex Analytic and Differential Geometry* (online); Voisin *Hodge Theory and Complex Algebraic Geometry I* §5
  - intermediate: Donaldson *Riemann Surfaces* §10; Hörmander *Introduction to Complex Analysis in Several Variables* §3
  - beginner: Donaldson §10 informal; Demailly informal
- **notes**: Setup: compact Riemann surface $X$ with Hermitian metric $\omega$ and Hermitian holomorphic line bundle $(L, h)$. The $L^2$ space of $L$-valued $(0, q)$-forms is the completion of $\Omega^{0, q}(X, L)$ under $\langle s, t \rangle = \int_X \langle s, t \rangle_h \, dV_\omega$. The Cauchy-Riemann operator $\bar\partial : L^2_{(0, q)}(X, L) \to L^2_{(0, q+1)}(X, L)$ is a closed densely-defined unbounded operator with Hilbert adjoint $\bar\partial^*$. The Hodge-Laplace $\Delta_{\bar\partial} = \bar\partial \bar\partial^* + \bar\partial^* \bar\partial$ is self-adjoint, elliptic of order two, non-negative. **Hodge-Dolbeault theorem on a compact Riemann surface:** $L^2_{(0, q)}(X, L) = \mathcal{H}^q(X, L) \oplus \overline{\mathrm{im}\, \bar\partial} \oplus \overline{\mathrm{im}\, \bar\partial^*}$ orthogonally; $\mathcal{H}^q(X, L) = \ker \Delta_{\bar\partial}$ is finite-dimensional and canonically isomorphic to $H^q(X, L)$ via the Dolbeault fine resolution. **Solvability:** $\bar\partial f = g$ for $g \in L^2_{(0, 1)}(X, L)$ closed has a solution iff $g \perp \mathcal{H}^1(X, L)$; the canonical solution is $f = \bar\partial^* G g$, the Bergman / Green-operator output. **Bochner-Kodaira-Nakano formula** $\Delta_{\bar\partial} = \Delta_\partial + [i \Theta(L, h), \Lambda]$ on $L$-valued forms gives the curvature lower bound $\langle \Delta_{\bar\partial} \alpha, \alpha \rangle \geq \int_X (i\Theta/\omega) |\alpha|^2 dV$ on $(0, 1)$-forms; positive curvature forces $\mathcal{H}^1 = 0$, recovering Kodaira vanishing $H^1(X, L) = 0$ for $\deg L > 2g - 2$. **Hörmander's $L^2$ existence theorem:** on a complete Kähler manifold with curvature $i \Theta(L, h) \geq c \omega$, every $\bar\partial$-closed $g \in L^2_{(0, q)}$ admits a solution with $\|f\|^2 \leq c^{-1} \|g\|^2$ — foundation of complex analysis on Stein manifolds. Schwartz finiteness theorem $\dim H^q(X, \mathcal{F}) < \infty$ for coherent $\mathcal{F}$ on compact $X$ via $\bar\partial$-Hodge theory + ellipticity of $\Delta_{\bar\partial}$. Spectral discreteness on compact $X$: eigenvalues $0 = \lambda_0 < \lambda_1 \leq \lambda_2 \leq \cdots \to \infty$ with finite multiplicities; the Bergman kernel of $\ker \bar\partial$ encodes geometric data (Tian 1990, Zelditch 1998). Worked examples: $\mathbb{P}^1$ with $\mathcal{O}(d)$ (Kodaira positive for $d \geq 1$ gives $H^1 = 0$); elliptic curve $\mathbb{C}/\Lambda$ trivial bundle (harmonic $(0, 1)$-form $d\bar z$ generates $H^1(X, \mathcal{O}) \cong \mathbb{C}$); higher genus with $\deg L \geq 2g - 1$ gives $H^1 = 0$. Originators: Hörmander 1965 (*Acta Math.* 113); Andreotti-Vesentini 1965 (compact Kähler $L^2$); Hodge 1941 (harmonic representatives); Kodaira 1953 (vanishing).
