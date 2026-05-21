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

### foundations.real-numbers

- **title**: Real numbers, integers, rationals
- **unit**: `00.01.01`
- **prerequisites**: none
- **tier_anchors**:
  - master: Dedekind 1872 *Stetigkeit und irrationale Zahlen* (originator of the cut construction); Cantor 1872 *Über die Ausdehnung eines Satzes aus der Theorie der trigonometrischen Reihen* (originator of the Cauchy-sequence quotient); Hilbert 1899 *Grundlagen der Geometrie* (axiomatic complete-ordered-field characterisation); Tarski 1959 (real-closed-field axiomatisation); Rudin *Principles of Mathematical Analysis* Ch. 1
  - intermediate: Lang *Basic Mathematics* Ch. 1; Apostol *Calculus Vol. 1* Ch. 1
  - beginner: Lang *Basic Mathematics* Ch. 1; Strogatz-style number-line picture
- **notes**: Number-system hierarchy $\mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Field axioms (closure, associativity, commutativity, distributivity, identities, inverses) and order axioms for $\mathbb{Q}$ and $\mathbb{R}$. Completeness axiom (least upper bound) and Archimedean property. Two parallel constructions of $\mathbb{R}$ from $\mathbb{Q}$: Dedekind cuts and Cauchy-sequence completion modulo null sequences. Uniqueness of complete ordered fields up to unique order-isomorphism. Irrationality of $\sqrt{2}$ (classical contradiction proof). Density of $\mathbb{Q}$ in $\mathbb{R}$ via Archimedean property. Cardinality jump $|\mathbb{Z}| = |\mathbb{Q}| = \aleph_0$ versus $|\mathbb{R}| = 2^{\aleph_0}$ via Cantor's diagonal argument. Foundational floor for the algebra strand (`linalg.field`), the analysis strand (metric-space completion), and the complex-analysis strand.

### foundations.absolute-value

- **title**: Absolute value and the triangle inequality
- **unit**: `00.01.02`
- **prerequisites**: `foundations.real-numbers`
- **tier_anchors**:
  - master: Lang *Basic Mathematics* Ch. 2; Rudin *Principles of Mathematical Analysis* Ch. 1; Bourbaki *Topologie générale* Ch. IX (norms and absolute values); Ostrowski 1916 *Über einige Lösungen der Funktionalgleichung* (classification of absolute values on $\mathbb{Q}$)
  - intermediate: Lang *Basic Mathematics* Ch. 2; Apostol *Calculus Vol. 1* Ch. 1
  - beginner: Lang *Basic Mathematics* Ch. 2; Strogatz-style distance-on-the-line picture
- **notes**: Definition $|x| = x$ if $x \geq 0$ else $-x$, the four signature properties (positivity, multiplicativity, triangle inequality, reverse triangle), and the case-on-sign proof of the triangle inequality. The triangle inequality is the load-bearing axiom — the absolute-value function on $\mathbb{R}$ is the prototype of a norm, and the metric $d(x, y) = |x - y|$ is the prototype of a metric. Master-tier scope adds the $\ell^p$ norms via Minkowski's inequality, the discrete metric as a non-norm, the $p$-adic absolute value with its ultrametric strengthening, and Ostrowski's theorem classifying all non-trivial absolute values on $\mathbb{Q}$ as either Euclidean or $p$-adic. Foundational floor for sequence convergence (`analysis.sequence-limit`), metric-space axioms (`topology.metric-space`), normed vector spaces (`functional-analysis.banach-spaces`), and number-theoretic completions (`number-theory.p-adic-numbers`).

### foundations.polynomials

- **title**: Polynomials and rational expressions
- **unit**: `00.01.03`
- **prerequisites**: `foundations.real-numbers`
- **tier_anchors**:
  - master: Lang *Basic Mathematics* Ch. 1.5–1.7; Lang *Algebra* Ch. IV (polynomial rings); Gauss 1799 *Demonstratio nova theorematis* (fundamental theorem of algebra); Abel 1824 / Galois 1832 (unsolvability of the quintic); Bourbaki *Algèbre* Ch. IV
  - intermediate: Lang *Basic Mathematics* Ch. 1.5–1.7; Artin *Algebra* Ch. 11 (polynomial rings); Dummit-Foote §9 (polynomial rings as Euclidean domains)
  - beginner: Lang *Basic Mathematics* Ch. 1.5–1.7; Strogatz-style "expression in $x$" picture
- **notes**: A polynomial over a field $k$ is a finite formal sum $p(x) = \sum_{i=0}^n a_i x^i$ with $a_i \in k$ and $a_n \neq 0$ (the leading coefficient); $\deg p = n$. The set $k[x]$ is a commutative ring under term-by-term addition and convolution multiplication. For $k$ a field, $k[x]$ is a Euclidean domain via the polynomial division algorithm: for any $p, q \in k[x]$ with $q \neq 0$ there exist unique $a, r \in k[x]$ with $p = aq + r$ and $\deg r < \deg q$. Factor theorem: $r$ is a root of $p$ iff $(x - r) \mid p(x)$. A degree-$n$ polynomial has at most $n$ roots in any field. Rational expression: ratio $p/q$ with $q \neq 0$, organised into the field of fractions $k(x)$ when one quotients by the equivalence $p_1/q_1 \sim p_2/q_2 \iff p_1 q_2 = p_2 q_1$. Master-tier scope: $k[x]$ Euclidean $\Rightarrow$ PID $\Rightarrow$ UFD, with the chain breaking for $k[x_1, \ldots, x_n]$ ($n \geq 2$) which is UFD (Gauss) but not PID; fundamental theorem of algebra (every non-constant $p \in \mathbb{C}[x]$ has a root, Gauss 1799 thesis); real-coefficient polynomials factor into real linear and irreducible real quadratic factors via conjugate-pair roots; algebraic closure $\bar k$ and the algebraic numbers $\bar{\mathbb{Q}} \subset \mathbb{C}$; partial-fraction decomposition over $k(x)$ as the dual to division. Originators: Diophantus *Arithmetica* (~250 CE); al-Khwārizmī *al-jabr* (~825 CE); Cardano-Tartaglia 1545 *Ars Magna* (cubic formula); Ferrari 1545 (quartic formula); Abel 1824 / Ruffini 1799 (no general quintic formula in radicals); Galois 1832 (the symmetry theory behind solvability); Gauss 1799 (fundamental theorem of algebra). Foundational floor for the algebra strand (`linalg.field`, polynomial-ring algebra), complex analysis (`complex-analysis.fundamental-theorem-of-algebra`), and integration of rational functions (partial fractions).

### foundations.linear-equations-line

- **title**: Linear equations and the line
- **unit**: `00.03.01`
- **prerequisites**: `foundations.real-numbers`
- **tier_anchors**:
  - master: Descartes 1637 *La Géométrie* (algebra-geometry correspondence); Cramer 1750 *Introduction à l'analyse des lignes courbes algébriques* (determinant rule); Klein 1872 *Vergleichende Betrachtungen über neuere geometrische Forschungen* (Erlangen Programm and the projective line); Lang *Linear Algebra* Ch. I; Audin *Geometry* Ch. I
  - intermediate: Lang *Basic Mathematics* Ch. 3–4; Apostol *Calculus Vol. 1* §3.1; Lay *Linear Algebra and Its Applications* Ch. 1.1–1.2
  - beginner: Lang *Basic Mathematics* Ch. 3; Strogatz-style line-on-the-plane picture
- **notes**: A linear equation in $n$ variables over a field $k$ is an equation $a_1 x_1 + \cdots + a_n x_n = b$ with coefficients $a_i, b \in k$ and the $a_i$ not all zero; the solution set in $k^n$ is a hyperplane (codimension-$1$ affine subspace). For $n = 2$ over $\mathbb{R}$, the solution set of $ax + by = c$ is a line in $\mathbb{R}^2$, equivalently the affine $1$-flat $\{p_0 + tv : t \in \mathbb{R}\}$ where $p_0$ is any solution and $v$ is a direction vector orthogonal to the normal $(a, b)$. Slope-intercept form $y = mx + b'$ exists for non-vertical lines, with $m$ the slope and $b'$ the y-intercept; two non-vertical lines are parallel iff their slopes agree and perpendicular iff $m_1 m_2 = -1$. Classification of two-line intersections: the system $\{a_1 x + b_1 y = c_1, a_2 x + b_2 y = c_2\}$ has a unique solution iff the determinant $D = a_1 b_2 - a_2 b_1 \neq 0$ (Cramer's rule: $x = (c_1 b_2 - c_2 b_1)/D$, $y = (a_1 c_2 - a_2 c_1)/D$); if $D = 0$, the lines are parallel (no solution) or coincident (every common point), distinguished by whether the triples $(a_i, b_i, c_i)$ are proportional. Master-tier scope: linear-versus-affine distinction (linear subspace through origin, affine subspace = translate); hyperplanes and flats in $\mathbb{R}^n$; Frobenius / Kronecker-Capelli theorem ($Ax = b$ consistent iff $\mathrm{rank}(A) = \mathrm{rank}([A \mid b])$); Cramer's rule for $n \times n$ systems via the adjugate-inverse formula; projective line $\mathbb{P}^1(\mathbb{R}) = \mathbb{R} \cup \{\infty\}$ with $\mathrm{PGL}(2, \mathbb{R})$ acting by Möbius transformations, sharply $3$-transitive on triples of distinct points; linear codes over $\mathbb{F}_q$; convex polytopes as bounded intersections of half-spaces (Minkowski-Weyl duality). Originators: Euclid *Elements* Book I (~300 BCE) for the geometric line; Descartes 1637 *La Géométrie* and Fermat ~1636 letters (algebra-geometry correspondence); Cramer 1750 (determinant rule); Cauchy 1812 (systematic determinant theory); Klein 1872 Erlangen Programm (projective hierarchy). Foundational floor for the determinant in `linear-algebra.determinant`, linear maps and rank-nullity in `linear-algebra.linear-transformation-rank-nullity`, multivariable Jacobian determinants in `multivariable-calculus.jacobian`, Möbius transformations and the Riemann sphere in `complex-analysis.mobius-transformations`, and the affine-versus-linear distinction throughout differential geometry.

### foundations.quadratic-formula

- **title**: Quadratic equations and the quadratic formula
- **unit**: `00.03.02`
- **prerequisites**: `foundations.polynomials`
- **tier_anchors**:
  - master: al-Khwārizmī ~825 *Al-jabr* (systematic completion-of-the-square method); Cardano 1545 *Ars Magna* (algebraic formulas for cubic and quartic); Viète 1591 *In artem analyticen isagoge* (literal coefficient notation and the Vieta formulas); Gauss 1801 *Disquisitiones Arithmeticae* (quadratic reciprocity); Lang *Algebra* Ch. IV §1
  - intermediate: Lang *Basic Mathematics* Ch. 3–4; Apostol *Calculus Vol. 1* §I.4; Artin *Algebra* Ch. 11
  - beginner: Lang *Basic Mathematics* Ch. 3; Strogatz-style parabola-crossing-the-axis picture
- **notes**: A quadratic equation over a field $k$ of characteristic not two is $ax^2 + bx + c = 0$ with $a, b, c \in k$ and $a \neq 0$. Completing the square rewrites the equation as $(x + b/(2a))^2 = (b^2 - 4ac)/(4a^2)$, and taking square roots gives the quadratic formula $x = (-b \pm \sqrt{\Delta})/(2a)$, where $\Delta = b^2 - 4ac$ is the discriminant. Over the real numbers the discriminant classifies the solution count: $\Delta > 0$ gives two distinct real roots, $\Delta = 0$ a single repeated real root (the vertex of the parabola $y = ax^2 + bx + c$ touches the $x$-axis), and $\Delta < 0$ no real roots (two complex-conjugate solutions $x = (-b \pm i\sqrt{-\Delta})/(2a)$). The Vieta formulas express the elementary symmetric functions of the two roots in terms of the coefficients: $x_1 + x_2 = -b/a$ and $x_1 x_2 = c/a$. Master-tier scope: the discriminant of a degree-$n$ polynomial $\Delta_n = a_n^{2n-2} \prod_{i<j}(r_i - r_j)^2$ as a symmetric function of the roots, expressible in the coefficients by Vieta; Cardano's 1545 cubic and Ferrari's 1540 quartic formulas; Abel-Ruffini 1824 and Galois 1832 (no general formula in radicals for the quintic and beyond, originating Galois theory); the binary quadratic form $Q(x, y) = ax^2 + bxy + cy^2$ and the conic-section discriminant $b^2 - 4ac$ classifying hyperbola / parabola / ellipse; the general quadratic form on $\mathbb{R}^n$ as $Q(v) = v^\top A v$, Sylvester's law of inertia on the signature $(p, q)$ under change of basis; Gauss's 1801 quadratic reciprocity for Legendre symbols; the fundamental theorem of algebra (Gauss 1799) extending complete factorisation from quadratics to all polynomials over $\mathbb{C}$. Originators: Babylonian scribes ~2000 BCE (geometric completion-of-the-square on specific quadratics); al-Khwārizmī ~825 CE *Kitāb al-jabr wa-l-muqābala* (systematic Arabic method, with the word *algebra* deriving from *al-jabr*); Cardano 1545 *Ars Magna* (cubic formula and modern algebraic form); Viète 1591 *In artem analyticen isagoge* (letter notation for coefficients, sum-and-product of roots); Gauss 1799 doctoral thesis (fundamental theorem of algebra); Gauss 1801 *Disquisitiones* (quadratic reciprocity). Foundational floor for conic-section classification (`foundations.conic-sections`), bilinear and quadratic forms (`linalg.bilinear-quadratic-form`), the algebra-strand discriminant of a polynomial, the Galois-theoretic solvability story (`algebra.galois-theory`), and the algebraic-closure picture (`complex-analysis.fundamental-theorem-of-algebra`).

### foundations.inequalities

- **title**: Inequalities (linear and quadratic)
- **unit**: `00.04.01`
- **prerequisites**: `foundations.quadratic-formula`
- **tier_anchors**:
  - master: Cauchy 1821 *Cours d'analyse* (the original Cauchy inequality on finite sums); Schwarz 1885 *Über ein die Flächen kleinsten Flächeninhalts betreffendes Problem der Variationsrechnung* (the inner-product-space generalisation); Hölder 1889 *Über einen Mittelwertssatz* (the Hölder inequality); Minkowski 1896 *Geometrie der Zahlen* (the triangle inequality in $\ell^p$); Jensen 1906 *Sur les fonctions convexes et les inégalités entre les valeurs moyennes* (the convex-function inequality); Hardy-Littlewood-Pólya *Inequalities* 1934; Tarski 1948 *A Decision Method for Elementary Algebra and Geometry* (semi-algebraic sets); Lang *Algebra* Ch. XV
  - intermediate: Lang *Basic Mathematics* Ch. 4; Apostol *Calculus Vol. 1* §I.4; Rudin *Principles of Mathematical Analysis* Ch. 1
  - beginner: Lang *Basic Mathematics* Ch. 4; Strogatz-style number-line-region picture
- **notes**: An inequality in one real variable replaces the equals sign in an equation by one of $<, \leq, >, \geq$. The solution set is a region of the number line rather than a finite set of points. The basic manipulation rules match those for equations except that multiplying or dividing both sides by a negative number reverses the direction of the inequality, since the order on $\mathbb{R}$ is incompatible with multiplication by negatives in the opposite sense from addition. A linear inequality $ax + b \leq c$ has solution set $\{x : x \leq (c - b)/a\}$ when $a > 0$ (and $\{x : x \geq (c - b)/a\}$ when $a < 0$), a half-line in either case. A quadratic inequality $ax^2 + bx + c \leq 0$ is solved by sign analysis: factor as $a(x - r_1)(x - r_2)$ when the discriminant $\Delta = b^2 - 4ac$ is non-negative, then read the sign of the product in each of the three regions cut off by the roots. The solution set is a closed interval when $a > 0$ and $\Delta > 0$, the complement of an open interval when $a < 0$ and $\Delta > 0$, a single point when $\Delta = 0$, and either the entire line or the empty set when $\Delta < 0$. Named load-bearing inequalities at this tier: the triangle inequality $|x + y| \leq |x| + |y|$ on $\mathbb{R}$, the arithmetic-mean-geometric-mean inequality $(x_1 + \cdots + x_n)/n \geq (x_1 \cdots x_n)^{1/n}$ for non-negative reals with equality iff all $x_i$ coincide, and the Cauchy-Schwarz inequality $|u \cdot v| \leq \|u\| \|v\|$ for vectors in a real or complex inner-product space with equality iff the vectors are linearly dependent. The standard proof of Cauchy-Schwarz observes that the quadratic $t \mapsto \|u - tv\|^2$ is non-negative everywhere, hence its discriminant in $t$ is non-positive — a direct invocation of the discriminant trichotomy from `foundations.quadratic-formula`. Master-tier scope: Hölder's inequality $\sum |x_i y_i| \leq (\sum |x_i|^p)^{1/p} (\sum |y_i|^q)^{1/q}$ for conjugate exponents $1/p + 1/q = 1$ (with Cauchy-Schwarz as the case $p = q = 2$); Minkowski's inequality $(\sum |x_i + y_i|^p)^{1/p} \leq (\sum |x_i|^p)^{1/p} + (\sum |y_i|^p)^{1/p}$ supplying the triangle inequality on $\ell^p$ and $L^p$; Jensen's inequality $\phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)]$ for $\phi$ convex (generalising AM-GM via $\phi = -\log$); the isoperimetric inequality on $\mathbb{R}^2$ (and Lévy-Gromov on manifolds); polynomial inequalities and the Tarski-Seidenberg theorem (1948) on the decidability of the first-order theory of $\mathbb{R}$ via quantifier elimination over real-closed fields; semi-algebraic sets as a category. Originators: Cauchy 1821 *Cours d'analyse* (the original finite-sum form of the inequality, in the language of bilinear sums); Schwarz 1885 (the inner-product generalisation used in his minimal-surfaces work); Hölder 1889 (the eponymous inequality, generalising Cauchy-Schwarz to conjugate exponents); Minkowski 1896 (the triangle inequality in $\ell^p$); Jensen 1906 (the convex-function inequality and its probabilistic formulation); Tarski 1948 (the decision procedure for the elementary theory of $\mathbb{R}$). Foundational floor for the metric-space triangle inequality (`metric-spaces.metric-space`), the $L^p$-norm theory (`functional-analysis.lp-spaces`), inner-product geometry (`functional-analysis.hilbert-space` — the Cauchy-Schwarz inequality is the reason the angle $\cos\theta = \langle u, v \rangle / (\|u\| \|v\|)$ takes values in $[-1, 1]$), and concentration inequalities in probability (`probability.concentration`).

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

### linear-algebra.subspace-basis-dimension

- **title**: Subspace, basis, dimension
- **prerequisites**: `linalg.vector-space`
- **tier_anchors**:
  - master: Halmos *Finite-Dimensional Vector Spaces* §I.5–I.8; Hoffman-Kunze §2; Lang *Algebra* Ch. III §5
  - intermediate: Axler *Linear Algebra Done Right* §2; Apostol *Calculus* Vol. 2 Ch. 1 §1.7–§1.13
  - beginner: 3Blue1Brown — *Essence of Linear Algebra* Ch. 2 (linear combinations, span, basis)
- **notes**: The structural triple every linear-algebra computation rests on. Subspace = subset closed under the two operations; basis = linearly independent spanning set; dimension = common cardinality of any basis. Steinitz replacement theorem (1913) is the load-bearing result. Generalises to rank over a PID and to module-theoretic invariants for general modules; in the categorical view, finite-dimensional $K$-vector spaces form a category equivalent to $\mathbb{N}$ with morphisms given by matrices, and $K_0(K\text{-Vect}^{\mathrm{fd}})=\mathbb{Z}$.

### linear-algebra.linear-transformation-rank-nullity

- **title**: Linear transformation: kernel, image, rank-nullity
- **prerequisites**: `linear-algebra.subspace-basis-dimension`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 2 §2.2–§2.7; Axler *Linear Algebra Done Right* Ch. 3; Mac Lane–Birkhoff *Algebra* Ch. V
  - intermediate: Axler *Linear Algebra Done Right* §3.B–§3.D; Apostol *Calculus* Vol. 2 Ch. 2
  - beginner: 3Blue1Brown — *Essence of Linear Algebra* Ch. 3 (linear transformations) and Ch. 6–7 (the inverse, column space, null space)
- **notes**: The fundamental dimension-counting theorem for linear maps. Linear map $T:V\to W$ is the morphism in the category of vector spaces; kernel $\ker T$ and image $\mathrm{im}\,T$ are its canonical sub-objects. Rank-nullity $\dim V=\dim(\ker T)+\dim(\mathrm{im}\,T)$ packages dimension as a conserved quantity through any linear map. Categorical sharpening: in $K\text{-Vect}$ every short exact sequence splits, so $V\cong\ker T\oplus\mathrm{im}\,T$ — the splitting fails for general modules (e.g. $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to 0$). Functional-analytic generalisation: the index $\mathrm{ind}(T)=\dim\ker T-\dim\mathrm{coker}\,T$ for Fredholm operators (Atiyah-Singer). Pairs with the first isomorphism theorem $V/\ker T\cong\mathrm{im}\,T$.

### linear-algebra.determinant

- **title**: Determinant: axiomatic + expansion + properties
- **prerequisites**: `linear-algebra.linear-transformation-rank-nullity`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 3; Axler *Linear Algebra Done Right* Ch. 10; Bourbaki *Algèbre* Ch. III (multilinear algebra)
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 3 §3.1–§3.10; Hoffman-Kunze *Linear Algebra* Ch. 5
  - beginner: 3Blue1Brown — *Essence of Linear Algebra* Ch. 5–6 (determinant as signed area / volume)
- **notes**: The scalar invariant of a square matrix. Three equivalent definitions: axiomatic (the unique multilinear-alternating-normalised function on rows / columns), Leibniz permutation sum $\det A=\sum_{\sigma\in S_n}\mathrm{sgn}(\sigma)\prod_i a_{i,\sigma(i)}$, and recursive Laplace / cofactor expansion. Geometric content: signed volume of the parallelepiped spanned by the columns; $\det A=0$ iff the columns are linearly dependent. Multiplicativity $\det(AB)=\det A\cdot\det B$ from the axiomatic characterisation. Builds toward (i) the change-of-variables Jacobian $|\det J|$ in multivariable calculus, (ii) the characteristic polynomial $\chi_A(t)=\det(tI-A)$ for eigenvalues, (iii) the top exterior power $\Lambda^n A:\Lambda^n V\to\Lambda^n V$ acting as multiplication by $\det A$, and (iv) the determinant line bundle $\det V=\Lambda^{\mathrm{rank}\,V}V$ in geometry. Originators: Seki Takakazu (1683) and Leibniz (1693); Cauchy (1812) unified the modern theory; Cayley (1858) the matrix notation; Vandermonde (1771) the special case; Artin (1942) the modern axiomatic presentation; Bourbaki the multilinear-algebra framing.

### linear-algebra.eigenvalue-eigenvector

- **title**: Eigenvalue, eigenvector, characteristic polynomial
- **prerequisites**: `linear-algebra.determinant`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 4; Axler *Linear Algebra Done Right* Ch. 5; Hoffman-Kunze *Linear Algebra* Ch. 6
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 4 §4.1–§4.10; Axler *Linear Algebra Done Right* §5.A–§5.B
  - beginner: 3Blue1Brown — *Essence of Linear Algebra* Ch. 14 (eigenvectors and eigenvalues)
- **notes**: The spectral structure of a linear operator on a finite-dimensional vector space. Eigenvalue equation $T v=\lambda v$ with $v\ne 0$; eigenspace $E_\lambda=\ker(T-\lambda I)$; characteristic polynomial $\chi_T(t)=\det(tI-T)$ with eigenvalues as roots; algebraic multiplicity vs geometric multiplicity. Key result: eigenvectors for distinct eigenvalues are linearly independent, so an operator with $n=\dim V$ distinct eigenvalues is diagonalisable. Cayley-Hamilton: every operator satisfies its own characteristic polynomial, $\chi_T(T)=0$; the spectral theorem (finite-dim) refines this for self-adjoint operators on an inner-product space, giving an orthonormal eigenbasis with real eigenvalues; Jordan canonical form classifies operators on a finite-dim $\mathbb{C}$-vector space up to similarity by Jordan-block data, with the Segre characteristic recording block sizes. Generalises to Banach-space spectral theory (point / continuous / residual spectrum), the resolvent $(T-\lambda I)^{-1}$ as an analytic function off the spectrum, spectral measures for self-adjoint operators on Hilbert space (Stone-von Neumann), and Frobenius eigenvalues for $\ell$-adic Galois representations. Originators: Cauchy (1829) for symmetric matrices; Cayley (1858) and Frobenius (1878) for Cayley-Hamilton; Jordan (1870) for Jordan canonical form; Hilbert (1904-) for the infinite-dim spectral theorem; von Neumann (1929) for self-adjoint spectral measures.

### linear-algebra.jordan-canonical-form

- **title**: Jordan canonical form and minimal polynomial
- **prerequisites**: `linear-algebra.eigenvalue-eigenvector`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 4 §4.20; Axler *Linear Algebra Done Right* Ch. 8; Hoffman-Kunze *Linear Algebra* Ch. 6–7; Lang *Algebra* Ch. XIV §2 + Ch. III §10
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 4 §4.20; Axler *Linear Algebra Done Right* §8.A–§8.D
  - beginner: stretching plus shear — the closest-to-diagonal block decomposition of a linear map over $\mathbb{C}$
- **notes**: The complete similarity classification of linear operators on a finite-dimensional $\mathbb{C}$-vector space. Jordan block $J_k(\lambda)$: $k \times k$ matrix with $\lambda$ on the diagonal and $1$s on the superdiagonal. Minimal polynomial $m_T(t)$: monic generator of the ideal $\{p \in K[t] : p(T)=0\}$; $m_T \mid \chi_T$ by Cayley-Hamilton, and $T$ is diagonalisable iff $m_T$ is square-free. Primary decomposition: $V=\bigoplus_i G_{\lambda_i}$ with $G_{\lambda_i}=\ker(T-\lambda_i I)^{m_i}$ the generalised eigenspaces. Existence + uniqueness theorem: over an algebraically closed field every operator is similar to a direct sum of Jordan blocks, unique up to block reordering. Segre characteristic: multiset of block sizes at each eigenvalue, encoding the partition of $\dim G_\lambda$ by Jordan-chain lengths. Builds toward (i) rational canonical form over arbitrary fields via companion matrices of invariant factors, (ii) Smith normal form for matrices over a PID, (iii) the structure theorem for finitely generated modules over a PID via $V \cong \bigoplus_i K[t]/(p_i^{e_i})$, (iv) holomorphic functional calculus $f(J_k(\lambda))=\sum_{j<k}\tfrac{f^{(j)}(\lambda)}{j!}N^j$ used to compute $e^{tA}$, $\sin A$, $\cos A$, (v) GIT quotient $\mathrm{GL}_n//\mathrm{GL}_n$ parametrising conjugacy classes. Originators: Weierstrass (1858, elementary divisor theory); Smith (1861, PID version); Jordan (1870, *Traité des substitutions*); Frobenius (1879, rational canonical form); Lang (1965, modern module-theoretic packaging in *Algebra* Ch. III).

### linear-algebra.singular-value-decomposition

- **title**: Singular value decomposition (finite-dim)
- **prerequisites**: `linear-algebra.eigenvalue-eigenvector`
- **tier_anchors**:
  - master: Horn-Johnson *Matrix Analysis* Ch. 7; Golub-Van Loan *Matrix Computations* Ch. 2 + Ch. 8; Trefethen-Bau *Numerical Linear Algebra* Lectures 4–5; Kato *Perturbation Theory for Linear Operators* Ch. I §5
  - intermediate: Horn-Johnson *Matrix Analysis* §7.3; Strang *Introduction to Linear Algebra* Ch. 7; Axler *Linear Algebra Done Right* §7.E (singular values)
  - beginner: rotate, stretch along orthogonal axes, rotate — the universal factorisation of any matrix
- **notes**: The factorisation $A = U \Sigma V^*$ for an arbitrary $m \times n$ matrix $A$ over $\mathbb{R}$ or $\mathbb{C}$: $U$ unitary $m \times m$, $V$ unitary $n \times n$, $\Sigma$ an $m \times n$ diagonal matrix with non-negative entries $\sigma_1 \ge \sigma_2 \ge \cdots \ge \sigma_r > 0$ called the *singular values* of $A$, with $r = \mathrm{rank}\,A$. The singular values are the non-negative square roots of the eigenvalues of $A^* A$ (equivalently of $A A^*$); the right singular vectors (columns of $V$) are an orthonormal eigenbasis of $A^* A$, the left singular vectors (columns of $U$) are an orthonormal eigenbasis of $A A^*$, and the two bases are paired by $A v_i = \sigma_i u_i$ for $\sigma_i > 0$. Existence proof: spectral theorem on $A^* A$, then define $u_i = A v_i / \sigma_i$ and verify orthonormality. Uniqueness: the singular values are uniquely determined; $U$ and $V$ are unique up to a unitary block on each constant-singular-value subspace (and a phase rotation on simple singular values in the complex case). Companion structures: (i) *Moore-Penrose pseudoinverse* $A^+ = V \Sigma^+ U^*$ with $\Sigma^+$ the transpose of $\Sigma$ with non-zero entries reciprocated; gives the minimum-norm least-squares solution to $Ax = b$. (ii) *Polar decomposition* $A = QP$ with $Q = UV^*$ unitary and $P = V \Sigma V^*$ Hermitian positive semidefinite — the matrix analogue of the polar form $z = r e^{i\theta}$. (iii) *Eckart-Young theorem*: for any unitarily invariant norm, the best rank-$k$ approximation to $A$ is $A_k = \sum_{i=1}^k \sigma_i u_i v_i^*$; in the operator norm $\|A - A_k\| = \sigma_{k+1}$, in the Frobenius norm $\|A - A_k\|_F = (\sigma_{k+1}^2 + \cdots + \sigma_r^2)^{1/2}$. (iv) *Schmidt decomposition* for compact operators on Hilbert space: $A = \sum_n \sigma_n u_n v_n^*$ with $\sigma_n \to 0$, foundation for trace-class and Hilbert-Schmidt operators. (v) *GL action*: the bi-unitary action of $U(m) \times U(n)$ on $m \times n$ complex matrices has orbits parametrised by the tuple $(\sigma_1, \ldots, \sigma_r)$ of singular values — SVD is the orbit-decomposition. Applications: principal component analysis (right singular vectors = principal directions, $\sigma_i^2 / N$ = variances); least-squares regression via the pseudoinverse; low-rank approximation in image compression, latent semantic indexing, recommender systems; condition number $\kappa(A) = \sigma_1 / \sigma_r$ for numerical sensitivity; numerical rank via small-singular-value thresholding. Originators: Beltrami (1873) and Jordan (1874), independently for square matrices; Sylvester (1889) for the rectangular case; Schmidt (1907) for the integral-operator / Hilbert-space generalisation; Weyl (1912) for the modern unified treatment; Eckart-Young (1936) for the low-rank approximation theorem; Mirsky (1960) extended Eckart-Young to all unitarily invariant norms; Golub-Kahan (1965) gave the numerical SVD algorithm.

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

### hodge.hodge-riemann-bilinear

- **title**: Hodge-Riemann bilinear relations
- **unit**: `04.09.08`
- **prerequisites**: `alg-geom.hodge-decomposition` (04.09.01), `alg-geom.hodge-index-theorem` (04.05.09)
- **tier_anchors**:
  - master: Hodge 1941 *The Theory and Applications of Harmonic Integrals* (originator); Weil 1958 *Variétés Kähleriennes* (modern sign convention); Voisin *Hodge Theory and Complex Algebraic Geometry* I §6.3; Griffiths-Harris §0.7 + §1.2; Stanley 1980 *Adv. Math.* 35 (g-theorem); Kahn-Saks 1984 *Order* 1 (poset log-concavity); Cattani-Kaplan-Schmid 1986/87 *Ann. Math.* 123 / *Invent. Math.* 87 (limit Hodge structures); Adiprasito-Huh-Katz 2018 *Ann. Math.* 188 (matroid Kähler package)
  - intermediate: Voisin Vol I §6.3; Griffiths-Harris §0.7 + §1.2
  - beginner: Voisin Vol I §6.3 informal opening; Beauville §IV.2 surface specialisation
- **notes**: On a compact Kähler $n$-fold $X$ with Kähler class $\omega$, the Hodge-Riemann bilinear form on $H^k(X, \mathbb{C})$ is $Q(\alpha, \beta) = (-1)^{k(k-1)/2} \int_X \alpha \wedge \beta \wedge \omega^{n - k}$. The Hodge-Riemann bilinear relations (Hodge 1941) state: (HR1) $Q$ vanishes on $H^{p, q} \times H^{p', q'}$ unless $(p', q') = (k - p, k - q)$ — orthogonality by bidegree counting; and (HR2) $i^{p - q} Q(\alpha, \bar\alpha) > 0$ for non-zero primitive $\alpha \in P^{p, q}$ — positivity on primitive Hodge pieces. The proof of HR2 reduces to Weil's identity $*\alpha = i^{p - q} (-1)^{k(k-1)/2} L^{n - k} \alpha / (n - k)!$ on primitive forms (Weil 1958 *Variétés Kähleriennes*), which converts $i^{p - q} Q(\alpha, \bar\alpha)$ into the squared $L^2$-norm of $\alpha$. The combination of Hodge decomposition + HR1 + HR2 makes $(H^k(X, \mathbb{Q}), F^\bullet, Q)$ a polarised Hodge structure of weight $k$ — the canonical algebraic-geometric example of the abstract notion (Deligne 1971-74). Surface case ($n = k = 2$): HR specialises to the Hodge index theorem (signature $(1, h^{1,1} - 1)$ on $H^{1,1}(X, \mathbb{R})$); the algebraic Néron-Severi version has signature $(1, \rho - 1)$. Hard Lefschetz follows from HR2 by a primitive-decomposition + positivity argument: $L^k : H^{n-k} \to H^{n+k}$ is an isomorphism. Combinatorial applications: Stanley 1980 proved McMullen's g-conjecture on simplicial polytopes via HR on the cohomology of a smooth projective toric variety; Kahn-Saks 1984 deduced log-concavity correlation inequalities for poset linear extensions; Adiprasito-Huh-Katz 2018 proved the Kähler package (Poincaré duality + Hard Lefschetz + Hodge-Riemann) for the Chow ring of any matroid, settling Rota's 1971 log-concavity conjecture (Huh Fields Medal 2022). Mixed-Hodge generalisation: Cattani-Kaplan-Schmid 1986-87 extend the bilinear relations to limit Hodge structures of nilpotent orbits in degenerations of polarised Hodge structures. The bilinear relations are the load-bearing positivity statement of modern Hodge theory and combinatorial Hodge theory. Lean status: `partial`, module `Codex.AlgGeom.Hodge.HodgeRiemannBilinear` records HR1 + HR2 + surface specialisation with `sorry` proof bodies pending Mathlib Kähler-manifold and primitive-cohomology infrastructure.

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

### hodge.kodaira-embedding

- **title**: Kodaira embedding theorem
- **unit**: `04.09.11`
- **prerequisites**: `alg-geom.hodge-decomposition`, `alg-geom.kodaira-vanishing`
- **tier_anchors**:
  - master: Kodaira 1954 *Ann. Math.* 60; Voisin *Hodge Theory* Vol I §7.4; Griffiths-Harris §1.4; Demailly *Complex Analytic and Differential Geometry* §VII
  - intermediate: Voisin Vol I §7.4; Griffiths-Harris §1.4; Wells *Differential Analysis on Complex Manifolds* Ch. VI
  - beginner: positivity makes a manifold embed into projective space
- **notes**: A compact Kähler manifold $X$ is projective iff $X$ admits a positive holomorphic line bundle $L$, equivalently iff $X$ carries an integral Kähler class (Hodge class of type $(1,1)$ with positive representative). The embedding is via global sections of $L^{\otimes k}$ for $k$ sufficiently large. Proof factors through Kodaira vanishing: $H^1(L^{\otimes k} \otimes \mathcal{I}_{p,q}) = 0$ and $H^1(L^{\otimes k} \otimes \mathfrak{m}_p^2) = 0$ for $k$ large give separation of points and tangent vectors. Hodge-class equivalence via the Lefschetz $(1,1)$-theorem and the exponential exact sequence. Sharpness: generic K3 surfaces are Kähler but non-projective (Picard rank $0$ at the generic point of the period domain); the Noether-Lefschetz locus is the dense union of codimension-1 strata where projectivity holds. Moduli consequence: polarised moduli are algebraic (Hilbert scheme + GIT), while unpolarised analytic moduli need not be. Originator: Kodaira 1954 *On Kähler varieties of restricted type* (Ann. Math. 60, 28–48). Modern anchor: Voisin Vol I §7.4; Demailly's *Complex Analytic and Differential Geometry*. Companion: Moishezon 1966 (Kähler-Moishezon = projective); Chow 1949 (analytic in $\mathbb{P}^N$ = algebraic). Used downstream in moduli of polarised varieties, Calabi-Yau moduli, K3 period domains, and the minimal model programme.

### hodge.akizuki-nakano-vanishing

- **title**: Akizuki-Nakano vanishing theorem
- **unit**: `04.09.10`
- **prerequisites**: `alg-geom.ample-line-bundle`, `alg-geom.hodge-decomposition`, `alg-geom.kodaira-vanishing`
- **tier_anchors**:
  - master: Akizuki-Nakano 1954 *Proc. Japan Acad.* 30, 266-272 (originator note responding to Kodaira-Spencer's deformation programme); Nakano 1955 *J. Math. Soc. Japan* 7, 1-12 (extension to Hermitian vector bundles, the Bochner-Kodaira-Nakano formula); Voisin *Hodge Theory and Complex Algebraic Geometry I* Cambridge 2002 §7.3 (modern transcendental proof); Demailly *Complex Analytic and Differential Geometry* §VII.5-§VII.7 (the bundle-valued Bochner-Kodaira-Nakano calculus); Lazarsfeld *Positivity in Algebraic Geometry I, II* Springer Ergebnisse 48-49 (2004) (cohomological-positivity dictionary); Kawamata 1982 *Math. Ann.* 261 (nef-and-big extension); Demailly-Peternell-Schneider 2001 *Internat. J. Math.* 12 (singular metric extension)
  - intermediate: Voisin Vol I §7.3; Demailly §VII; Wells *Differential Analysis on Complex Manifolds* Ch. V; Griffiths-Harris *Principles of Algebraic Geometry* §0.7
  - beginner: positivity plus bidegree counting force the upper-right of the Hodge bidegree square to vanish
- **notes**: $H^q(X, \Omega^p_X \otimes L) = 0$ for all $(p, q)$ with $p + q > n$, $L$ ample on smooth projective complex $X$ of dimension $n$. Proof via the Bochner-Kodaira-Nakano identity $\Delta_{\bar\partial_L} - \Delta_{D'_L} = [i\Theta_h(L), \Lambda_\omega]$ on $L$-valued $(p, q)$-forms; pointwise positivity of the curvature commutator on a unitary diagonalising frame yields strict positivity for $p + q > n$; harmonic-form representation forces vanishing. Case $p = n$ recovers Kodaira vanishing. Hierarchy of refinements: Kodaira (ample, canonical-twist only) $\Rightarrow$ Akizuki-Nakano (ample, full upper-right triangle) $\Rightarrow$ Kawamata-Viehweg (nef + big, canonical-twist corner) $\Rightarrow$ Nadel-Demailly-Peternell-Schneider (pseudoeffective, multiplier-ideal correction). Failure on non-Kähler manifolds (Hopf surface, Kodaira 1964); partial Bogomolov-Sommese replacement for logarithmic differentials on smooth pairs. Raynaud 1978 counter-example in characteristic $p > 0$. Foundational for the Kodaira embedding theorem (separation of points and tangent vectors via high tensor powers), the Lefschetz hyperplane theorem on Dolbeault cohomology, the structure of complete-intersection Hodge numbers, and the minimal model program (BCHM 2010 via Kawamata-Viehweg). Lean status: `partial`, module `Codex.AlgGeom.Hodge.AkizukiNakanoVanishing` states the theorem, its Kodaira specialisation, and its Serre-dual form with `sorry` proof bodies pending Mathlib's Bochner-Kodaira-Nakano and Dolbeault-cohomology infrastructure.

### alg-geom.lefschetz-1-1-theorem

- **title**: Lefschetz (1,1)-theorem
- **unit**: `04.09.09`
- **prerequisites**: `alg-geom.hodge-decomposition`, `alg-geom.picard-group`, `alg-geom.line-bundle-scheme`, `alg-geom.sheaf-cohomology`
- **tier_anchors**:
  - master: Lefschetz 1924 *L'analysis situs et la géométrie algébrique*; Griffiths-Harris §1.2; Voisin *Hodge Theory and Complex Algebraic Geometry* I §7.1; Deligne *Théorie de Hodge II*
  - intermediate: Griffiths-Harris §1.2 (exponential sheaf sequence, Picard group, statement of the (1,1)-theorem); Voisin I §7.1
  - beginner: Beauville *Complex Algebraic Surfaces* §I — informal account of divisors as integer classes in $H^2$
- **notes**: For $X$ a smooth projective complex variety, the first Chern class map $c_1: \mathrm{Pic}(X) \to H^2(X; \mathbb{Z})$ has image equal to $H^{1,1}(X, \mathbb{Z}) := H^2(X; \mathbb{Z}) \cap H^{1,1}(X)$, and kernel equal to $\mathrm{Pic}^0(X) = H^1(X; \mathcal{O}_X)/H^1(X; \mathbb{Z})$, a complex torus of dimension $h^{0,1}(X)$. Equivalently, the Néron-Severi group $\mathrm{NS}(X) = \mathrm{Pic}(X)/\mathrm{Pic}^0(X)$ equals the integer-Hodge $(1,1)$-classes, finitely generated of rank $\rho(X) \leq h^{1,1}(X)$ (the Picard number). Proof via the exponential sheaf sequence $0 \to \mathbb{Z} \to \mathcal{O}_X \to \mathcal{O}_X^* \to 0$: the connecting map $\delta = c_1$, and its image is the kernel of $H^2(X; \mathbb{Z}) \to H^2(X; \mathcal{O}_X) = H^{0,2}(X)$, identified via complex conjugation with $H^{1,1}(X, \mathbb{Z})$. This is the codimension-one case of the Hodge conjecture — known since Lefschetz 1924, with the modern cohomological proof due to Hodge 1941 and Griffiths-Harris 1978. The codimension $\geq 2$ case is the open Hodge conjecture (one of the Clay Millennium Prize Problems). Examples: $\mathrm{Pic}(\mathbb{P}^n) = H^2(\mathbb{P}^n; \mathbb{Z}) = \mathbb{Z}$ (every class is algebraic); K3 surfaces $\rho \in \{1, \ldots, 20\} = \{1, \ldots, h^{1,1}\}$; abelian varieties $\rho \leq g^2$ with Riemann forms as the algebraic classes.

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

### moduli.kempf-ness-symplectic-dictionary

- **title**: Kempf-Ness theorem and the GIT-symplectic dictionary
- **unit**: `04.10.04`
- **prerequisites**: `alg-geom.git`, `symplectic-geometry.moment-map`, `symplectic-geometry.symplectic-reduction`
- **tier_anchors**:
  - master: Kempf-Ness 1979 *Length of vectors in representation spaces* LNM 732; Mumford-Fogarty-Kirwan *GIT* §8; Kirwan 1984 *Cohomology of Quotients*; Atiyah-Bott 1983 *Yang-Mills equations over Riemann surfaces*; Donaldson 1985 / Uhlenbeck-Yau 1986 (Kobayashi-Hitchin)
  - intermediate: Thomas 2006 *Notes on GIT and Symplectic Reduction*; Kirwan 1984 Ch. 3
  - beginner: algebraic quotient equals symplectic reduction
- **notes**: Kempf-Ness 1979 *Length of vectors in representation spaces* (Springer LNM 732, 233-243): for a complex reductive group $G$ with maximal compact $K$ acting linearly on a Hermitian vector space $V$ with induced moment map $\mu : V \to \mathfrak{k}^*$, the algebraic GIT quotient $V /\!/_G$ is canonically homeomorphic to the symplectic reduction $\mu^{-1}(0) / K$ at level zero. Four-part theorem (KN1-KN4): (KN1) $v$ semistable iff $\overline{G \cdot v}$ contains a minimum-norm vector; (KN2) minimum-norm vectors in $G \cdot v$ are exactly $\mu^{-1}(0) \cap G \cdot v$; (KN3) inside a polystable orbit the moment-zero set is a single $K$-orbit; (KN4) the inclusion $\mu^{-1}(0) \cap V^{ss} \hookrightarrow V^{ss}$ descends to the homeomorphism $\mu^{-1}(0)/K \cong V /\!/_G$. Proof rests on the variational identity $df(\rho(i\xi) v) = -2 \langle \mu(v), \xi \rangle$ along the non-compact $i\mathfrak{k}$-direction of the Cartan decomposition $\mathfrak{g} = \mathfrak{k} \oplus i\mathfrak{k}$, plus convexity of the length-squared along the orbit (sum of exponentials with real exponents is convex). Worked example: $V = \mathbb{C}^2$, $G = \mathbb{C}^\times$ diagonal, $K = U(1)$ — algebraic GIT quotient $\mathbb{C}^2 /\!/ \mathbb{C}^\times = \mathbb{P}^1$ matches symplectic reduction $S^3 / U(1) = \mathbb{P}^1$ via the Hopf fibration. Kirwan stratification (Kirwan 1984 Ch. 4): the unstable locus decomposes as $V \setminus V^{ss} = \bigsqcup_\beta S_\beta$ via the stable manifolds of critical sets of $\|\mu\|^2$, indexed by Hilbert-Mumford-most-destabilising directions $\beta \in \mathfrak{k}^*/K$; Hesselink-Kirwan-Ness equivalence identifies the algebraic Hilbert-Mumford stratification with the analytic gradient-flow stratification. Atiyah-Bott 1983 *Phil. Trans. R. Soc.* 308: infinite-dimensional Kempf-Ness for the gauge-group action on the space of unitary connections on a Riemann surface — moment map equals curvature, moduli of polystable holomorphic bundles equals moduli of flat unitary connections (this is Narasimhan-Seshadri 1965 viewed as infinite-dimensional Kempf-Ness); Atiyah-Bott Morse theory on $\|F\|^2$ stratifies by Harder-Narasimhan filtrations giving closed-form Poincaré polynomial of $\mathcal{N}(r, d)$. Kobayashi-Hitchin correspondence (Donaldson 1985 / Uhlenbeck-Yau 1986): holomorphic vector bundle $E \to X$ over compact Kähler $X$ is $\omega$-polystable iff $E$ admits a Hermitian-Einstein metric. Hitchin moduli space (Hitchin 1987): hyperkähler reduction producing the Higgs-bundle moduli space. Yau-Tian-Donaldson conjecture (Chen-Donaldson-Sun 2015): Fano manifold admits Kähler-Einstein metric iff K-stable. Originator chain: Hilbert 1890 → Mumford 1965 → Marsden-Weinstein 1974 → Narasimhan-Seshadri 1965 → Kempf-Ness 1979 → Kirwan 1984 → Atiyah-Bott 1983 → Donaldson-Uhlenbeck-Yau 1985-86 → Hitchin 1987 → Chen-Donaldson-Sun 2015.

### moduli.hilbert-mumford-criterion

- **title**: Hilbert-Mumford numerical criterion
- **unit**: `04.10.03`
- **prerequisites**: `alg-geom.git`, `alg-geom.scheme`, `rep-theory.lie-algebra-representation`
- **tier_anchors**:
  - master: Hilbert 1893 *Über die vollen Invariantensysteme* (Math. Ann. 42); Mumford 1965 *Geometric Invariant Theory* §2.1; Newstead *Lectures on Moduli Problems and Orbit Spaces*; Dolgachev *Lectures on Invariant Theory*; Kempf 1978 *Instability in Invariant Theory* (Annals 108); Kirwan 1984 *Cohomology of Quotients*
  - intermediate: Mumford-Fogarty-Kirwan §2.1; Newstead §4; Dolgachev Ch. 9; Thomas *Notes on GIT and Symplectic Reduction* §4
  - beginner: stability is detected by walking out along one-parameter subgroups and watching where the point goes
- **notes**: For a reductive group $G$ acting on a projective variety $X$ with $G$-linearised ample line bundle $L$, the **Hilbert-Mumford numerical criterion** characterises GIT stability via one-parameter subgroups: $x \in X$ is GIT-semistable iff $\mu^L(x, \lambda) \geq 0$ for every one-parameter subgroup $\lambda : \mathbb{G}_m \to G$, where $\mu^L(x, \lambda)$ is the weight of $\lambda$ on the line-bundle fibre at the limit point $\lim_{t \to 0} \lambda(t) \cdot x$. Equivalently, on the affine cone $\mu^L(\tilde{x}, \lambda) = -\min\{m_i : \tilde{x}_i \neq 0\}$ where $\tilde{x} = \sum_i \tilde{x}_i$ is the weight decomposition. **Proof architecture**: (1) reduction from $G$ to a maximal torus $T$ via conjugation; (2) convex-hull lemma — $\mu^L \geq 0$ for all $\lambda_T \in X_*(T)$ iff $0 \in \mathrm{conv}(\mathrm{wt}_T(\tilde{x}))$ in the character lattice; (3) Reynolds-operator averaging from $T$-invariant to $G$-invariant, requiring reductivity. **Worked example**: $\mathrm{SL}_2$ acting on binary forms of degree $d$ — the diagonal one-parameter subgroup gives weight $d - 2i$ on the monomial $x^{d-i} y^i$, and Hilbert's classical theorem (1893, modern form) follows: a binary form is unstable iff some root has multiplicity strictly greater than $d/2$. **Kempf 1978 refinement**: for an unstable point, a unique optimal destabilising one-parameter subgroup $\lambda^*$ minimising $\mu^L / \| \lambda \|$ exists (up to stabiliser-conjugacy), driving the Kirwan stratification of the unstable locus. **Applications**: $\mathcal{M}_g$ (Mumford 1965), moduli of vector bundles with slope semistability (Seshadri 1967), Gieseker semistability of sheaves (1977), K-stability of Fano varieties (Tian, Donaldson, Chen-Donaldson-Sun 2015), derived GIT (Halpern-Leistner 2014). Originator: Hilbert 1893 one-parameter heuristic; Mumford 1965 rigorous formulation.

### moduli.vector-bundles-curve-slope-stability

- **title**: Moduli of vector bundles on a curve and slope stability
- **unit**: `04.10.06`
- **prerequisites**: `alg-geom.moduli-of-curves`, `alg-geom.git`, `alg-geom.coherent-sheaf`, `riemann-surfaces.holomorphic-line-bundle`
- **tier_anchors**:
  - master: Mumford 1963 ICM Stockholm; Narasimhan-Seshadri 1965 *Ann. of Math.* 82; Atiyah-Bott 1983 *Phil. Trans. R. Soc. London A* 308; Seshadri 1967 *Ann. of Math.* 85; Donaldson 1983 *J. Differential Geom.* 18
  - intermediate: Newstead *Introduction to Moduli Problems and Orbit Spaces* (Tata 1978); Le Potier *Lectures on Vector Bundles* (Cambridge 1997)
  - beginner: average degree per fibre — the slope of a bundle
- **notes**: Mumford 1963 introduced the slope $\mu(E) = \deg(E) / \mathrm{rk}(E)$ and slope stability for vector bundles on a smooth projective curve. Stable: $\mu(F) < \mu(E)$ for every proper sub-bundle $F$; semistable: $\leq$. The moduli space $M_C(r, d)$ is a quasi-projective variety of dimension $r^2(g - 1) + 1$, projective when $\gcd(r, d) = 1$ (every semistable bundle then stable). Construction as GIT quotient of a Quot scheme by $\mathrm{PGL}_h$. Harder-Narasimhan filtration (1975, *Math. Ann.* 212): every bundle has a unique filtration by sub-bundles with semistable subquotients of strictly decreasing slope; existence by maximal-slope, maximal-rank sub-bundle argument; functorial under bundle morphisms. Narasimhan-Seshadri 1965 identifies $M_C(r, d)^{\mathrm{stable}}$ with irreducible unitary $r$-dimensional representations of $\pi_1(C)$ of fixed determinant character $\zeta_d$; bridge is the essentially unique projectively-flat Hermitian-Einstein connection on the underlying smooth bundle. Atiyah-Bott 1983 reinterprets $M_C(r, d) \cong \mu^{-1}(c) / \mathcal{G}$ as the symplectic reduction of the affine space of unitary connections by the gauge group at the central curvature level $c = -2\pi i (d/r) \cdot \omega$; Yang-Mills functional $\|F_A\|^2$ as equivariant Morse function recovers the Poincaré polynomial of the moduli via the Harder-Narasimhan stratification. Donaldson 1983 *J. Diff. Geom.* 18 gives an analytic proof via convergence of the Donaldson functional on Hermitian metrics. Schur lemma for stable bundles: $\mathrm{Hom}(E, F) = 0$ when $\mu(E) > \mu(F)$ and $E, F$ semistable; $\mathrm{End}(E) = k$ for $E$ stable. Deformation-theoretic dimension at a stable point: $\dim T_{[E]} M = \dim \mathrm{Ext}^1(E, E) = r^2(g - 1) + 1$ via Riemann-Roch on $\mathcal{E}\mathit{nd}(E)$. Generalises to Higgs bundles (Hitchin 1987, Simpson 1992), to higher-dimensional Kähler manifolds (Donaldson-Uhlenbeck-Yau), to Gieseker stability of sheaves (Gieseker 1977), and to Bridgeland stability (2007). Foundational for the Verlinde formula, geometric Langlands, and non-abelian Hodge theory.

### moduli.variation-of-git-vgit

- **title**: Variation of GIT (VGIT)
- **unit**: `04.10.09`
- **prerequisites**: `alg-geom.git` (04.10.02), `alg-geom.scheme` (04.02.01), `alg-geom.ample-line-bundle` (04.05.05)
- **tier_anchors**:
  - master: Dolgachev-Hu 1998 *Variation of geometric invariant theory quotients* (Publ. Math. IHÉS 87, 5-56) — the systematic foundation of VGIT, establishing the chamber-wall decomposition of the equivariant ample cone; Thaddeus 1996 *Geometric invariant theory and flips* (J. Amer. Math. Soc. 9, 691-723) — independent simultaneous discovery, with the explicit master-space construction and the Bradlow-pair example; Thaddeus 1994 *Stable pairs, linear systems, and the Verlinde formula* (Invent. Math. 117) — first application of VGIT chains to cohomology of moduli of vector bundles; Hu-Keel 2000 *Mori dream spaces and GIT* (Michigan Math. J. 48, 331-348) — the identification of Mori chamber decomposition with VGIT chamber decomposition; Mumford-Fogarty-Kirwan *Geometric Invariant Theory* 3rd ed. §3 (Springer Ergebnisse 34, 1994); Kempf 1978 *Instability in invariant theory* (Ann. Math. 108) — finiteness of numerical types underlying VGIT chamber finiteness; Halpern-Leistner 2015 *The derived category of a GIT quotient* (J. Amer. Math. Soc. 28, 871-912) — derived VGIT and magic windows; Chen-Donaldson-Sun 2015 *Kähler-Einstein metrics on Fano manifolds I, II, III* (J. Amer. Math. Soc. 28) — infinite-dimensional VGIT and the K-stability picture
  - intermediate: Dolgachev-Hu 1998; Thaddeus 1996; Mumford-Fogarty-Kirwan §3
  - beginner: the GIT quotient depends on a choice of polarisation; varying that choice gives a wall-and-chamber picture
- **notes**: For a reductive group $G$ acting on a projective variety $X$, the GIT quotient $X /\!/_L G$ depends on the choice of $G$-linearised ample line bundle $L$. The set of linearisations forms an open cone $\mathrm{Amp}^G(X) \subset \mathrm{Pic}^G(X) \otimes \mathbb{Q}$ in the rational equivariant Picard group. Dolgachev-Hu 1998 and Thaddeus 1996 prove independently that $\mathrm{Amp}^G(X)$ admits a finite decomposition into rational polyhedral chambers $C_1, \ldots, C_r$ — the *GIT chambers* — such that (i) inside each chamber the semistable locus $X^{ss}(L)$, the stable locus $X^s(L)$, and the GIT quotient $X /\!/_L G$ are constant; (ii) the chamber count is finite (via Kempf's 1978 finiteness of numerical types); (iii) crossing a wall $W = \overline{C_-} \cap \overline{C_+}$ between adjacent chambers gives a birational map $Q_- \dashrightarrow Q_+$ realised by a *master space* $M$ together with projective birational morphisms $Q_- \xleftarrow{\phi_-} M \xrightarrow{\phi_+} Q_+$ contracting the loci of strictly semistable orbits at the wall. When the codimensions are $\geq 2$ on both sides, this is a *flip* in the Mori-theoretic sense. The simplest example — the **Atiyah flop** — is the $\mathbb{C}^\times$-action on $\mathbb{C}^4$ with weights $(+1, +1, -1, -1)$; the two chambers give the two small resolutions of the conifold $\{XZ - YW = 0\}$. The proof of chamber-constancy rests on the *linearity* of the Hilbert-Mumford function $\mu^L(x, \lambda)$ in $L$: each numerical type of one-parameter subgroup contributes one linear half-space inequality, and the chambers are the connected components of the resulting hyperplane arrangement. Worked example — binary quartics: for $G = \mathrm{SL}_2$ acting on $V_4 = \mathrm{Sym}^4(k^2)$, the rational equivariant Picard group is one-dimensional, giving a single chamber and the unique GIT quotient $\mathbb{P}(V_4) /\!/ \mathrm{SL}_2 \cong \mathbb{A}^1$ — the $j$-line of moduli of elliptic curves. Hu-Keel theorem (2000) identifies *Mori dream spaces* as exactly the projective varieties $Y$ admitting a torus-GIT presentation $Y = \mathrm{Spec}\,\mathrm{Cox}(Y) /\!/_L T$ in which the Mori chamber decomposition of $\overline{\mathrm{Eff}}(Y)$ coincides with the VGIT chamber decomposition of $\mathrm{Pic}^T(\mathrm{Spec}\,\mathrm{Cox}(Y)) \otimes \mathbb{Q}$. Castravet-Tevelev 2015 showed $\overline{\mathcal{M}}_{0, n}$ fails to be a Mori dream space for $n \geq 7$. Modern extensions: Halpern-Leistner 2014 *magic windows* lift VGIT to derived categories, with wall-crossings becoming derived equivalences subsuming Bondal-Orlov's flop derived equivalences; Chen-Donaldson-Sun 2015 prove the Yau-Tian-Donaldson conjecture via infinite-dimensional VGIT (K-stability with test configurations as one-parameter subgroups); Bérczi-Doran-Hawes-Kirwan develop non-reductive VGIT. Thaddeus 1994 used VGIT chains to derive the Verlinde formula by induction over walls. Lean status: partial, module `Codex.AlgGeom.Moduli.VariationOfGIT` declares an abstract `VGITChamberData` structure, the `chamber_constancy` and `wall_crossing_flip` theorems as `sorry`-stubbed statements, the `chamber_finiteness` corollary, the Hu-Keel `hu_keel_mds_iff_torus_git` theorem, and the binary-quartics worked example as a named theorem pending the equivariant Picard group + GIT quotient functor + Cox ring infrastructure in Mathlib.

### moduli.hilbert-scheme

- **title**: Hilbert scheme Hilb^P(X)
- **unit**: `04.10.05`
- **prerequisites**: `alg-geom.scheme`, `alg-geom.projective-scheme`, `alg-geom.sheaf-cohomology`, `alg-geom.moduli-of-curves`
- **tier_anchors**:
  - master: Grothendieck 1962 *Les schémas de Hilbert* (Séminaire Bourbaki 221); Mumford 1966 *Lectures on Curves on an Algebraic Surface* Ch. 5; Fogarty 1968; Nakajima *Hilbert Schemes of Points on Surfaces* 1999; Hartshorne *Deformation Theory* 2010; Fantechi et al. *FGA Explained* 2005 §5
  - intermediate: Mumford *Lectures on Curves on an Algebraic Surface* Ch. 5; Hartshorne *Deformation Theory* Ch. 1; *FGA Explained* §5
  - beginner: a space whose points are subschemes
- **notes**: $\mathrm{Hilb}^P_{X/S}$ is the projective $S$-scheme parametrising closed subschemes $Z \subset X$ flat over the base with fibrewise Hilbert polynomial $P$. Grothendieck's 1962 existence theorem (FGA, Séminaire Bourbaki 221): for $X$ projective over Noetherian $S$ with chosen relatively very ample line bundle, the Hilbert functor is representable. Construction goes through (i) uniform Mumford-Castelnuovo $m_0$-regularity, (ii) Grassmannian embedding via $W = H^0(\mathcal{I}_Z(m_0))$, (iii) closedness by rank conditions on multiplication maps, (iv) flatness of the universal family by cohomology-and-base-change. Tangent space at $[Z]$ is $H^0(Z, N_{Z/X})$ and obstruction space is $H^1(Z, N_{Z/X})$ (Grothendieck-Mumford). Schlessinger inequality $h^0 - h^1 \leq \dim_{[Z]} \mathrm{Hilb}^P \leq h^0$. Fogarty 1968 *Amer. J. Math.* 90: $\mathrm{Hilb}^n$ of a smooth surface is smooth and irreducible of dimension $2n$. Hartshorne 1966 *Publ. Math. IHES* 29 proved connectedness; Piene-Schlessinger 1985 *Amer. J. Math.* 107 the twisted-cubic reducibility. Hilbert-Chow morphism $\mathrm{Hilb}^n(X) \to \mathrm{Sym}^n(X)$ is a resolution of singularities on surfaces, crepant for K3 (Beauville 1983 — hyperkähler $\mathrm{Hilb}^n(K3)$). Göttsche 1990 generating function for Betti numbers. Nakajima 1997 Heisenberg-algebra representation on $\bigoplus_n H^*(\mathrm{Hilb}^n(X))$. McKay correspondence via $G$-Hilbert schemes (Ito-Nakamura 1996; Bridgeland-King-Reid 2001). Donaldson-Thomas invariants (Donaldson-Thomas 1998; Behrend 2009) and the MNOP conjecture (Maulik-Nekrasov-Okounkov-Pandharipande 2006). Generalised by the Quot scheme (Grothendieck 1961). Foundational for [04.10.01] moduli of curves (Mumford GIT on tri-canonically embedded curves), [04.10.06] moduli of vector bundles (via Quot scheme), and modern enumerative geometry of surfaces and Calabi-Yau threefolds.

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

### char-classes.hirzebruch-signature

- **title**: Hirzebruch signature theorem
- **unit**: `03.06.11`
- **prerequisites**: `char-classes.pontryagin-chern.definitions`, `char-classes.chern-weil.homomorphism`, `topology.singular-cohomology`
- **tier_anchors**:
  - master: Hirzebruch 1956/1966 *Topological Methods in Algebraic Geometry* §8; Atiyah-Singer 1968 *Annals of Mathematics* 87, *Index of Elliptic Operators III*
  - intermediate: Milnor-Stasheff §19; Bott-Tu §22
  - beginner: Strogatz / 3Blue1Brown analogous bilinear-form and global-invariant pacing
- **notes**: For a closed oriented smooth $4k$-manifold $M$, the cup-product intersection form on $H^{2k}(M; \mathbb{R})$ is symmetric and non-degenerate; its signature $\mathrm{sig}(M) = b_+(M) - b_-(M)$ equals the Pontryagin number $\langle L_k(p_1, \ldots, p_k), [M] \rangle$ where $L_k$ is the degree-$k$ component of the Hirzebruch multiplicative sequence associated to $Q(x) = \sqrt{x}/\tanh \sqrt{x}$. The first three $L$-polynomials are $L_1 = p_1/3$, $L_2 = (7 p_2 - p_1^2)/45$, $L_3 = (62 p_3 - 13 p_1 p_2 + 2 p_1^3)/945$. Proof structure: signature and Pontryagin numbers are both oriented bordism invariants, and the rational oriented bordism ring $\Omega_*^{\mathrm{SO}} \otimes \mathbb{Q}$ is a polynomial ring on $[\mathbb{CP}^{2k}]$; multiplicativity reduces the formula to verification on the projective-space generators where it is direct. Atiyah-Singer 1968 reformulates the theorem as the index identity for the signature operator $D^+ = d + d^\ast$. Canonical examples: $\mathrm{sig}(\mathbb{CP}^2) = 1$ with $p_1 = 3$; $\mathrm{sig}(K3) = -16$ with $p_1 = -48$; $\mathrm{sig}(\mathbb{CP}^4) = 1$ with $(p_1, p_2) = (5, 10)$; $\mathrm{sig}(\mathbb{HP}^2) = 1$ with $(p_1, p_2) = (2, 7)$.

### char-classes.signature-4k-intersection-form

- **title**: Signature of a $4k$-manifold and the intersection form
- **unit**: `03.06.19`
- **prerequisites**: `char-classes.hirzebruch-signature`, `topology.poincare-duality`, `alg-geom.hodge-index-theorem`
- **tier_anchors**:
  - master: Milnor 1958 *On simply connected 4-manifolds* (Symp. Int. Top. Mexico City, 122-128); Wall 1964 *J. London Math. Soc.* 39, 141-149; Freedman 1982 *J. Differential Geom.* 17, 357-453; Donaldson 1983 *J. Differential Geom.* 18, 279-315; Milnor-Stasheff §19; Scorpan 2005; Gompf-Stipsicz 1999
  - intermediate: Milnor-Stasheff §19; Scorpan *The Wild World of 4-Manifolds* §3; Gompf-Stipsicz §1
  - beginner: Milnor-Stasheff §19 informal; 3Blue1Brown bilinear-form pacing
- **notes**: For a closed oriented smooth $4k$-manifold $M$, the cup-product pairing $Q_M(\alpha, \beta) = \langle \alpha \cup \beta, [M] \rangle$ on $H^{2k}(M; \mathbb{Z})$ is symmetric and (after passing to the torsion-free quotient) unimodular by integral Poincaré duality, with $\det Q_M = \pm 1$. The signature $\mathrm{sig}(M) = b_+(M) - b_-(M) \in \mathbb{Z}$ is the difference of positive and negative eigenvalue counts of the real extension. Four basic properties pin down the invariant: symmetric, unimodular, orientation-reversal-flips-sign, additive on disjoint union and multiplicative on products. In dimension four the intersection form is the central topological invariant. Freedman 1982 classifies closed simply-connected topological 4-manifolds by the pair $(Q_M, \mathrm{ks}(M))$ where $\mathrm{ks}(M) \in \mathbb{Z}/2$ is the Kirby-Siebenmann invariant, subject to the parity constraint $\mathrm{ks} \equiv \mathrm{sig}(Q_M)/8 \pmod{2}$ when $Q_M$ is even; every unimodular form is realised. Donaldson 1983 proves the diagonalisation theorem: a positive-definite intersection form arising from a smooth 4-manifold is $\mathbb{Z}$-isomorphic to $\langle +1 \rangle^{\oplus b_2(M)}$, ruling out the $E_8$ lattice and exhibiting the smooth-vs-topological category gap in dimension four. Cobordism invariance: signature vanishes on null-bordant manifolds via the Lagrangian-half-space argument. Rokhlin congruence on spin 4-manifolds: $\mathrm{sig}(M) \equiv 0 \pmod{16}$ when $w_2(M) = 0$. Canonical examples: $\mathrm{sig}(\mathbb{CP}^2) = 1$, $\mathrm{sig}(S^2 \times S^2) = 0$, $\mathrm{sig}(E_8) = 8$, $\mathrm{sig}(K3) = -16$. Connects to Hirzebruch 03.06.11 (signature as L-genus), Poincaré duality 03.12.16 (unimodularity input), Hodge index 04.05.09 (signature-$(1, \rho - 1)$ on algebraic surfaces), Atiyah-Singer 03.09.10 (signature as index of $d + d^\ast$), Yang-Mills moduli 03.07.05 ($b_+$ in the dimension formula).

### char-classes.multiplicative-sequences-genera

- **title**: Multiplicative sequences and the $L$-, $\hat{A}$-, Todd genera
- **unit**: `03.06.15`
- **prerequisites**: `char-classes.pontryagin-chern.definitions`, `char-classes.hirzebruch-signature`, `char-classes.chern-character`
- **tier_anchors**:
  - master: Hirzebruch 1956/1966 *Topological Methods in Algebraic Geometry* §1.4-§1.6; Atiyah-Singer 1968 *Ann. Math.* 87; Milnor-Stasheff §19; Lawson-Michelsohn 1989 §III.13
  - intermediate: Milnor-Stasheff §19; Bott-Tu §22
  - beginner: Strogatz / 3Blue1Brown analogous power-series bookkeeping
- **notes**: Multiplicative sequence: given a formal power series $f(z) = 1 + a_1 z + a_2 z^2 + \cdots$, the polynomials $K_n(\sigma_1, \ldots, \sigma_n)$ defined by $\prod_j f(z_j) = \sum_n K_n(\sigma_1, \ldots, \sigma_n)$, with $\sigma_i$ the elementary symmetric polynomials. Hirzebruch's reduction theorem identifies multiplicative sequences with formal power series with $f(0) = 1$ via a bijection. Three canonical instances: the $L$-sequence from $Q_L(z) = \sqrt{z}/\tanh \sqrt{z}$ producing $L_1 = p_1/3$, $L_2 = (7 p_2 - p_1^2)/45$, $L_3 = (62 p_3 - 13 p_1 p_2 + 2 p_1^3)/945$, with $\varphi_L[M] = \mathrm{sig}(M)$ for closed oriented $4k$-manifolds; the $\hat{A}$-sequence from $Q_{\hat{A}}(z) = (\sqrt{z}/2)/\sinh(\sqrt{z}/2)$ producing $\hat{A}_1 = -p_1/24$, $\hat{A}_2 = (7 p_1^2 - 4 p_2)/5760$, with $\hat{A}[M] = \mathrm{index}(\slashed{D}^+)$ on closed spin manifolds (Atiyah-Singer); the Todd class from $Q_{\mathrm{Td}}(z) = z/(1 - e^{-z})$ producing $\mathrm{Td}_1 = c_1/2$, $\mathrm{Td}_2 = (c_1^2 + c_2)/12$, $\mathrm{Td}_3 = c_1 c_2/24$, with $\langle \mathrm{Td}_n, [X] \rangle = \chi(\mathcal{O}_X)$ for compact complex $n$-manifolds (Hirzebruch-Riemann-Roch). Each canonical genus is normalised by its evaluation on projective spaces: $\varphi_L[\mathbb{CP}^{2k}] = 1$, $\varphi_{\mathrm{Td}}[\mathbb{CP}^n] = 1$. Lichnerowicz vanishing connects positive scalar curvature to $\hat{A}[M] = 0$.

### char-classes.chern-character

- **title**: Chern character $\mathrm{ch}(E)$ as a ring homomorphism
- **unit**: `03.06.18`
- **prerequisites**: `char-classes.pontryagin-chern.definitions`, `k-theory.vector-bundles`, `k-theory.adams-operations`, `bundle.complex-vector-bundle`
- **tier_anchors**:
  - master: Atiyah-Hirzebruch 1959 Bull. AMS 65, 276-281; Atiyah K-Theory §2-§3; Milnor-Stasheff §16
  - intermediate: Bott-Tu §21; Atiyah K-Theory §2.4
  - beginner: Bott-Tu §21 informal exposition; 3Blue1Brown / Strogatz analogous level
- **notes**: The Chern character $\mathrm{ch}(E) = \sum_j e^{x_j}$ is a ring homomorphism from topological K-theory to rational even cohomology, additive on direct sums and multiplicative on tensor products via the splitting principle. The Atiyah-Hirzebruch theorem promotes the rationalisation $\mathrm{ch} \otimes \mathbb{Q} : K(X) \otimes \mathbb{Q} \to H^{\mathrm{even}}(X; \mathbb{Q})$ to a ring isomorphism on every finite CW complex. The Chern character is the universal coefficient appearing in Hirzebruch-Riemann-Roch and Atiyah-Singer, and is compatible with Adams operations via $\mathrm{ch}_n(\psi^k(x)) = k^n \mathrm{ch}_n(x)$.

### char-classes.borel-hirzebruch-g-t

- **title**: Borel-Hirzebruch and the cohomology of $G/T$
- **unit**: `03.06.20`
- **prerequisites**: `char-classes.pontryagin-chern.definitions` (03.06.04), `rep-theory.weyl-group` (07.06.04), `rep-theory.borel-weil-theorem` (07.06.09), `rep-theory.weyl-character-formula` (07.06.07)
- **tier_anchors**:
  - master: Borel 1953 *Ann. of Math.* 57, 115-207 (coinvariant theorem); Borel-Hirzebruch *Characteristic Classes and Homogeneous Spaces I-II-III* (Amer. J. Math. 80, 81, 82, 1958-60); Bott 1957 *Ann. of Math.* 66, 203-248 (Borel-Weil-Bott); Bernstein-Gelfand-Gelfand 1973 *Russ. Math. Surv.* 28, 1-26 (Schubert calculus via divided-difference operators); Demazure 1974 *Invent. Math.* 21, 287-301 (Demazure operators); Chevalley 1955 *Amer. J. Math.* 77, 778-782 (reflection-group invariants); Kleiman 1974 *Compositio Math.* 28, 287-297 (Schubert positivity)
  - intermediate: Bott-Tu *Differential Forms in Algebraic Topology* §23 (flag bundles); Milnor-Stasheff *Characteristic Classes* §14 (splitting principle for $U(n)$); Hiller *Geometry of Coxeter Groups* (reflection-group invariants); Brion 2005 (modern flag-variety survey)
  - beginner: Bott-Tu §23 informal exposition; Fulton *Young Tableaux* §10 (Schubert calculus type-$A$ instance)
- **notes**: For a compact connected Lie group $G$ with maximal torus $T$ of rank $r$ and Weyl group $W$, the rational cohomology of the flag variety $G/T$ is the **coinvariant algebra** $H^*(G/T; \mathbb{Q}) = \mathbb{Q}[t_1, \dots, t_r] / ((S^+)^W)$ of total $\mathbb{Q}$-dimension $|W|$ (Borel 1953). The Poincaré polynomial is $\prod_i (1 - q^{2 d_i})/(1 - q^2)$ where $d_i$ are the fundamental degrees of $W$, with $\prod d_i = |W|$. Borel's proof uses the Serre spectral sequence collapse of $G/T \to BT \to BG$ together with Chevalley's reflection-group invariant theorem identifying $H^*(BG; \mathbb{Q}) = S(\mathfrak{t}^*)^W_{\mathbb{Q}}$ as a polynomial ring on $r$ generators. Bernstein-Gelfand-Gelfand 1973 and Demazure 1974 produced the **Schubert basis** $\{\sigma_w\}_{w \in W}$ as an integral additive basis with $\deg \sigma_w = 2 \ell(w)$, obtained from the Bruhat cell decomposition; the BGG divided-difference operators $\partial_i f = (f - s_i f)/(t_i - s_i t_i)$ produce polynomial representatives via $\sigma_w = \partial_{i_1} \cdots \partial_{i_k}(\sigma_{w_0})$ for any reduced word. Kleiman 1974 generic transversality gives non-negativity of Schubert structure constants $c^w_{u,v} \geq 0$ in $\sigma_u \cdot \sigma_v = \sum c^w_{u,v} \sigma_w$; in type $A$ these are the Littlewood-Richardson coefficients, closed off by the Knutson-Tao saturation conjecture 1999. The **splitting principle** for a rank-$n$ complex vector bundle $E \to X$ (Borel-Hirzebruch III 1960; Milnor-Stasheff §14) is the geometric form: the flag bundle $\mathrm{Fl}(E) \to X$ has $\pi^*$ injective on cohomology and the pullback splits as $L_1 \oplus \cdots \oplus L_n$, identifying $\pi^* c(E) = \prod (1 + x_i)$ as elementary symmetric polynomials in Chern roots; equivalently $H^*(BU(n); \mathbb{Q}) = H^*(BT(n); \mathbb{Q})^{S_n} = \mathbb{Q}[c_1, \dots, c_n]$ via the maximal-torus restriction. **Borel-Weil-Bott** (Bott 1957) computes $H^p(G/T; L_\lambda)$ of any integral-weight line bundle: zero if $\lambda + \rho$ is singular, concentrated in degree $p = \ell(w)$ if $\lambda + \rho$ is regular (where $w \in W$ is the unique reflection moving $\lambda + \rho$ into the dominant chamber), and there equal to $V_{w \cdot \lambda}$. The Borel-Weil specialisation $w = e$ gives Borel-Weil [07.06.09] and recovers the Weyl character formula via Atiyah-Bott localisation on $G/T$ with fixed-point set $W$. The equivariant refinement of Goresky-Kottwitz-MacPherson 1998 gives the GKM presentation of $H^*_T(G/T; \mathbb{Q})$ as a Steinberg double-polynomial ring, fitting into the Atiyah-Bott / Duistermaat-Heckman localisation framework. Lean status: `partial`, module `Codex.Modern.CharClasses.BorelHirzebruchGT` declares Borel's coinvariant isomorphism, the dimension equality $\dim H^*(G/T; \mathbb{Q}) = |W|$, the Schubert basis cardinality, and the splitting-principle anchor with `sorry` proof bodies pending the root-datum / reflection-group invariant theory plus bundle-level characteristic-class infrastructure in Mathlib.

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

### k-theory.adams-operations

- **title**: Adams operations $\psi^k$ on K-theory
- **unit**: `03.08.02`
- **prerequisites**: `k-theory.vector-bundles`, `char-classes.pontryagin-chern.definitions`
- **tier_anchors**:
  - master: Atiyah *K-Theory* Ch. III; Karoubi *K-Theory: An Introduction* Ch. IV; Adams 1962 *Vector fields on spheres* (Annals of Math. 75); Atiyah 1966 *Power operations in K-theory* (Quart. J. Math. 17)
  - intermediate: Atiyah *K-Theory* §3; Husemoller *Fibre Bundles* §15
  - beginner: raising bundles to powers by analogy with raising numbers to powers (3Blue1Brown / Strogatz pacing)
- **notes**: $\psi^k$ as ring homomorphisms on $K(X)$; Newton-power-sum interpretation via $\lambda$-ring structure; the Adams 1962 application — non-existence of $H$-space structures on $S^{2n-1}$ beyond $n=1, 2, 4$ — and Adams' theorem on vector fields on spheres, which Atiyah-Singer-style index theory recovers through Real K-theory.

### topology.kr-theory

- **title**: KR-theory (K-theory with reality)
- **unit**: `03.08.12`
- **prerequisites**: `k-theory.vector-bundles`, `k-theory.bott.periodicity`, `spin-geometry.clifford.clifford-algebra`
- **tier_anchors**:
  - master: Atiyah 1966 *K-theory and reality* (Quart. J. Math. Oxford (2) 17, 367-386); Atiyah *K-Theory* (Benjamin 1967) Ch. III; Karoubi *K-Theory: An Introduction* Ch. III §5-§7; Lawson-Michelsohn *Spin Geometry* §I.10
  - intermediate: Atiyah 1966 *K-theory and reality*; Karoubi §III.5
  - beginner: K-theory of a space with a continuous involution — Strogatz / 3Blue1Brown analogous level
- **notes**: Atiyah's bigraded $KR^{p,q}(X)$ for a Real space $(X, \tau)$, unifying $KU$, $KO$, $KSp$, and $KSC$ in one ring. The (1, 1)-periodicity $KR^{p+1, q+1} \cong KR^{p, q}$ is the K-theoretic shadow of the Clifford bridging identity $\mathrm{Cl}_{r+1, s+1} \cong \mathrm{Cl}_{r, s} \otimes \mathrm{Cl}_{1, 1}$. Combined with the complex two-fold periodicity it produces the eight-fold real Bott periodicity. KR hosts the Atiyah-Singer index theorem for Real elliptic operators, with $\mathbb{Z}/2$-valued indices in dimensions $\equiv 1, 2 \pmod 8$ detecting positive-scalar-curvature obstructions. The KR-refinement of Adams' division-algebra argument gives a unified proof that the only normed division-algebra spheres are $S^0, S^1, S^3, S^7$. Distinct from `spin-geometry.kr-theory` (same theory, complementary entry point).

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

### stat-mech.phi-4-dyson-series

- **title**: φ⁴ theory and the Dyson series
- **unit**: `08.10.03`
- **prerequisites**: `stat-mech.path-integral`, `stat-mech.wick-rotation`, `quantum-mechanics.bosonic-fock-space-second-quantisation`
- **tier_anchors**:
  - master: Peskin-Schroeder Ch. 4 + Ch. 10; Weinberg Vol. I Ch. 6; Itzykson-Zuber Ch. 6; Glimm-Jaffe Chs. 8-11
  - intermediate: Peskin-Schroeder §4.1-4.4; Tong QFT §3; Folland Tourist Guide Ch. 6
  - beginner: Zee QFT in a Nutshell Ch. I; Tong informal sections
- **notes**: The interaction Hamiltonian of φ⁴ theory generates a time-ordered exponential whose perturbative expansion is the Dyson series. Central theorem: Wick's theorem reduces the vacuum expectation of a time-ordered product of free fields to a sum over pairings of Feynman propagators. First non-trivial application: tree-level 2→2 scattering amplitude $\mathcal{M} = -i\lambda$. One-loop bubble diagram exhibits the logarithmic UV divergence cured by coupling renormalisation, yielding the one-loop beta function $\beta(\lambda) = 3\lambda^2/(16\pi^2)$. Stat-side framing: the Dyson expansion is the perturbative series of the Euclidean path-integral generating functional around the Gaussian free-field measure; the Wick-rotated theory is the field-theoretic continuum limit of the critical Ising model in the Wilsonian sense. Triviality in $d=4$ (Aizenman-Duminil-Copin 2021) is the modern closure of the four-dimensional φ⁴ chapter.

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

### complex-analysis.riemann-sphere

- **title**: Riemann sphere
- **unit**: `06.01.07`
- **prerequisites**: `complex-analysis.holomorphic-function`
- **tier_anchors**:
  - master: Riemann 1857 *Theorie der Abel'schen Functionen* (originator); Klein 1894 *Vorlesungen über die hypergeometrische Funktion*; Ahlfors §1.2.4; Forster §1; Miranda Ch. I; Donaldson Ch. 3; Griffiths-Harris Ch. 1 §3
  - intermediate: Ahlfors *Complex Analysis* Ch. 1 §2.4; Stein-Shakarchi Vol. II §1.3
  - beginner: Needham *Visual Complex Analysis* §3.IV (stereographic projection); 3Blue1Brown sphere-of-complex-numbers intuition
- **notes**: Distinctive Ahlfors item from `plans/fasttrack/lars-ahlfors-complex-analysis.md` §3 audit. Three-tier unit covering one-point compactification, the two-chart holomorphic atlas, biholomorphism with $\mathbb{P}^1(\mathbb{C})$, Möbius automorphism group $\mathrm{PSL}_2(\mathbb{C})$, function field $\mathbb{C}(z)$, Riemann-Roch in genus 0, and Grothendieck's splitting of vector bundles on $\mathbb{P}^1$.

### complex-analysis.mobius-transformations

- **title**: Möbius (linear-fractional) transformations
- **unit**: `06.01.08`
- **prerequisites**: `complex-analysis.riemann-sphere`
- **tier_anchors**:
  - master: Möbius 1855 *Die Theorie der Kreisverwandtschaft in rein geometrischer Darstellung* (originator); Klein 1872 *Erlanger Programm*; Poincaré 1882 *Théorie des groupes fuchsiens*; Ahlfors §3.3; Beardon *The Geometry of Discrete Groups*; Ford *Automorphic Functions*
  - intermediate: Ahlfors *Complex Analysis* Ch. 3 §3 (linear transformations); Stein-Shakarchi Vol. II §1.3; Needham *Visual Complex Analysis* Ch. 3
  - beginner: Needham *Visual Complex Analysis* §3.II (geometric inversion); 3Blue1Brown 'Möbius transformations revealed'
- **notes**: Distinctive Ahlfors item 7 from `plans/fasttrack/lars-ahlfors-complex-analysis.md` §3 audit. Three-tier unit covering the group $\mathrm{PSL}_2(\mathbb{C}) = \mathrm{Aut}(\mathbb{C}_\infty)$, three-point uniqueness via cross-ratio, classification by trace squared (parabolic / elliptic / hyperbolic / loxodromic), circle-and-line preservation, and the bridge to hyperbolic geometry on $\mathbb{H}$ via $\mathrm{PSL}_2(\mathbb{R})$ and the modular group $\mathrm{PSL}_2(\mathbb{Z})$. Foundational for Schwarz-Pick, Schwarz-Christoffel, and the modular function $\lambda / j$.

### complex-analysis.cauchy-riemann

- **title**: Cauchy-Riemann equations and harmonic conjugate
- **unit**: `06.01.10`
- **prerequisites**: `complex-analysis.riemann-sphere`
- **tier_anchors**:
  - master: d'Alembert 1752 *Essai d'une nouvelle théorie de la résistance des fluides* (originating fluid-flow form); Euler 1757 *Principia motus fluidorum* and 1777 *De repraesentatione superficiei sphaericae super plano*; Cauchy 1814 *Mémoire sur les intégrales définies* and 1825 *Mémoire sur les intégrales définies prises entre des limites imaginaires*; Riemann 1851 *Grundlagen für eine allgemeine Theorie der Functionen einer veränderlichen complexen Grösse* (Inaugural Dissertation); Wirtinger 1927 *Zur formalen Theorie der Funktionen von mehr komplexen Veränderlichen*; Hartogs 1906 *Zur Theorie der analytischen Funktionen mehrerer unabhängiger Veränderlichen*; Hörmander *An Introduction to Complex Analysis in Several Variables*; Ahlfors *Complex Analysis* §2.1 and §3.2
  - intermediate: Ahlfors *Complex Analysis* Ch. 2 §2.1 and Ch. 3 §3.2; Stein-Shakarchi Vol. II §1.2; Conway *Functions of One Complex Variable* §III.2
  - beginner: Needham *Visual Complex Analysis* §4.II (amplitwist); 3Blue1Brown 'derivative of a complex function'
- **notes**: Distinctive Ahlfors item 9 from `plans/fasttrack/lars-ahlfors-complex-analysis.md` §3 audit. Three-tier unit covering the differential characterisation of holomorphicity: real Jacobian as complex multiplication, equivalence of complex differentiability with the CR system $u_x = v_y$, $u_y = -v_x$, harmonic conjugate existence on simply-connected domains, Wirtinger $\partial / \bar\partial$ formalism, Hartogs's separately-holomorphic theorem, and the connection to elliptic-regularity for general elliptic PDE.

### complex-analysis.harmonic-functions

- **title**: Harmonic functions on the plane
- **unit**: `06.01.11`
- **prerequisites**: `complex-analysis.cauchy-riemann`
- **tier_anchors**:
  - master: Laplace 1782 *Théorie des attractions des sphéroïdes et de la figure des planètes* (originator of $\Delta$ for celestial mechanics); Lagrange 1781 *Mémoire sur la théorie du mouvement des fluides* (earlier appearance of the Laplacian in hydrodynamics); Poisson 1820 *Mémoire sur la manière d'exprimer les fonctions par des séries de quantités périodiques* (Poisson kernel and integral); Riemann 1851 *Grundlagen* (Dirichlet principle); Hilbert 1900 *Über das Dirichletsche Prinzip* (rigorous existence); Wiener 1924 *The Dirichlet problem* (regular boundary points); Perron 1923 *Eine neue Behandlung der ersten Randwertaufgabe für $\Delta u = 0$*; Ahlfors *Complex Analysis* Ch. 4 §6; Axler-Bourdon-Ramey *Harmonic Function Theory*
  - intermediate: Ahlfors *Complex Analysis* Ch. 4 §6; Stein-Shakarchi Vol. II §3.2; Conway *Functions of One Complex Variable* §X
  - beginner: 3Blue1Brown 'Laplace's equation' / heat-equation visualizations; Needham *Visual Complex Analysis* Ch. 12 (stream and potential pictures)
- **notes**: Distinctive Ahlfors item 10 from `plans/fasttrack/lars-ahlfors-complex-analysis.md` §3 audit. Three-tier unit covering the planar Laplace equation $u_{xx} + u_{yy} = 0$, the connection $f = u + iv$ holomorphic $\Rightarrow u, v$ harmonic and the converse on simply-connected domains via harmonic conjugate, the mean-value property, the maximum principle, the Poisson integral as the disc Dirichlet solution, the Liouville theorem for bounded plane harmonic functions, and the elliptic-regularity perspective that frames harmonic-function theory as the prototypical scalar elliptic PDE on $\mathbb{R}^2$. Foundational for Schwarz reflection, Schwarz lemma, Perron's method on general domains, Hardy-space theory, and the higher-dimensional generalisation $\Delta u = \sum u_{x_i x_i} = 0$ on $\mathbb{R}^n$.

### complex-analysis.max-modulus-schwarz

- **title**: Maximum modulus + Schwarz lemma
- **unit**: `06.01.12`
- **prerequisites**: `complex-analysis.cauchy-riemann`, `complex-analysis.harmonic-functions`
- **tier_anchors**:
  - master: Schwarz 1869 *Über einige Abbildungsaufgaben* (originator of the lemma now bearing his name); Carathéodory 1907 and Lindelöf 1908 (modern formulation); Pick 1916 *Über eine Eigenschaft der konformen Abbildung kreisförmiger Bereiche* (disc-automorphism characterisation and the hyperbolic-metric contraction); Phragmén-Lindelöf 1908 *Sur une extension d'un principe classique de l'analyse* (unbounded-sector extension); Ahlfors 1938 *An extension of Schwarz's lemma* (generalisation to negatively-curved Hermitian metrics); Hadamard 1893 *Sur les fonctions entières* (three-circles theorem); Ahlfors *Complex Analysis* Ch. 4 §3.4 and Ch. 6 §1; Krantz *Geometric Function Theory*
  - intermediate: Ahlfors *Complex Analysis* Ch. 4 §3.4 and Ch. 6 §1; Stein-Shakarchi Vol. II §2.5 and §8.1; Conway *Functions of One Complex Variable* §VI.2
  - beginner: Needham *Visual Complex Analysis* §6.II–§6.III (rigidity of the disc); 3Blue1Brown 'why holomorphic functions are rigid' framing
- **notes**: Distinctive Ahlfors item 11 from `plans/fasttrack/lars-ahlfors-complex-analysis.md` §3 audit. Three-tier unit covering the maximum modulus principle on connected open sets (non-constant holomorphic $f$ cannot attain an interior modulus maximum), the Schwarz lemma on the unit disc ($f: \mathbb{D} \to \mathbb{D}$ with $f(0) = 0$ satisfies $|f(z)| \leq |z|$ and $|f'(0)| \leq 1$, with rotation as the only equality case), the disc automorphism group $\mathrm{Aut}(\mathbb{D}) \cong \mathrm{PSU}(1, 1)$, the Schwarz-Pick hyperbolic-metric contraction, Schwarz-Ahlfors-Pick on negatively-curved metrics, Phragmén-Lindelöf on unbounded sectors, Hadamard three-circles convexity, and Cartan's lemma in several complex variables. Foundational for the Riemann mapping theorem's uniqueness statement, Koenigs linearisation in complex dynamics, the modular-function bridge to Picard's theorems, and the Kobayashi-hyperbolic framework on complex manifolds.

### complex-analysis.argument-principle

- **title**: Argument principle and Rouché's theorem
- **unit**: `06.01.13`
- **prerequisites**: `complex-analysis.cauchy-riemann`
- **tier_anchors**:
  - master: Cauchy 1825 *Mémoire sur les intégrales définies prises entre des limites imaginaires* and 1826 *Sur un nouveau genre de calcul analogue au calcul infinitésimal* (originator of the residue theorem and the special case of the argument principle); Rouché 1862 *Mémoire sur la série de Lagrange* (eponymous comparison theorem); Hurwitz 1889 *Über die Bedingungen, unter welchen eine Gleichung nur Wurzeln mit negativen reellen Theilen besitzt* (limits-of-non-vanishing theorem); Picard 1879, Landau 1904 (refined zero-counting applications); Ahlfors *Complex Analysis* Ch. 4 §5
  - intermediate: Ahlfors *Complex Analysis* Ch. 4 §5; Stein-Shakarchi Vol. II §3.4; Conway *Functions of One Complex Variable* §V.3
  - beginner: Needham *Visual Complex Analysis* §7.I (winding numbers and the topology of $f \circ \gamma$); 3Blue1Brown 'winding numbers and FTA'
- **notes**: Distinctive Ahlfors item from `plans/fasttrack/lars-ahlfors-complex-analysis.md` §3 audit (P1, Ch. 4 §5). Three-tier unit covering the argument principle ($(2 \pi i)^{-1} \oint_\gamma f'/f \, dz = N - P$ for meromorphic $f$ with no zeros or poles on $\gamma$, equivalently the winding number of $f \circ \gamma$ around the origin), the generalised argument principle with a holomorphic weight $g$, Rouché's theorem in both the asymmetric form $|g| < |f|$ on $\partial D$ and the symmetric form $|f + g| < |f| + |g|$ on $\partial D$, the open mapping theorem (non-constant holomorphic functions are open maps, with the local $m$-to-$1$ refinement), Hurwitz's theorem on uniform limits of non-vanishing holomorphic functions, and the fundamental theorem of algebra proved cleanly via Rouché on a large circle. Foundational for the local-degree theory of branched coverings ($06.02.02$) and the Riemann-Hurwitz formula, the existence half of the Riemann mapping theorem ($06.01.06$, via Hurwitz applied to Montel-extremal sequences), Jensen's formula and Nevanlinna value-distribution theory, and the argument-principle-as-index-theorem perspective that bridges to the Atiyah-Singer index theorem on higher-dimensional elliptic operators.

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

### analysis.real-number-axioms

- **title**: Real-number axioms (ordered field)
- **unit**: `02.02.01`
- **prerequisites**: `set-theory.function`
- **tier_anchors**:
  - master: Hilbert 1899 *Grundlagen der Geometrie* §13–§17 (originator of the complete-ordered-field axiomatisation, Vollständigkeitsaxiom); Apostol *Calculus* Vol. 1 Ch. 3; Bourbaki *Topologie Générale* Ch. IV; Tarski 1948 (decidability of the elementary theory)
  - intermediate: Apostol *Calculus* Vol. 1 Ch. 3 §3.1–3.7; Rudin *Principles of Mathematical Analysis* Ch. 1
  - beginner: Strogatz number-line intuition; 3Blue1Brown style framing
- **notes**: The standard axiomatic characterisation of $\mathbb{R}$ as a **complete ordered field**. Thirteen axioms in three families: nine field axioms (closure, associativity, commutativity of $+, \cdot$; identity elements $0 \neq 1$; additive inverse; multiplicative inverse for nonzero; distributivity), three order axioms (trichotomy, transitivity, compatibility of $<$ with $+$ and $\cdot$), and one completeness axiom (every non-empty bounded-above subset has a least upper bound). Apostol's Axiom 11 is the standard textbook framing. **Categoricity:** any two complete ordered fields are uniquely order-isomorphic, so $\mathbb{R}$ is uniquely characterised up to isomorphism. **Archimedean property** as theorem from completeness: for every $x \in \mathbb{R}$ some $n \in \mathbb{N}$ has $n > x$; proof by contradiction via $\sup \mathbb{N}$. **Equivalent reformulations of (C):** Cauchy completeness plus Archimedean, nested-interval property, monotone convergence theorem, Bolzano-Weierstrass. **Independence of axioms** demonstrated by witnessing structures: $\mathbb{Z}$ violates (F6), $\mathbb{C}$ admits no compatible order, $\mathbb{Q}$ violates (C). **Constructive vs classical completeness** (Bishop-Bridges 1967) — Cauchy completeness is intuitionistically valid; LUB completeness needs LEM. **Non-Archimedean extensions** (Robinson 1966) — hyperreals $^*\mathbb{R}$ relax Archimedean, restoring infinitesimals. **Tarski 1948** — the first-order theory of real closed fields is decidable by quantifier elimination, contrasting with the undecidability of $\mathbb{N}$. Foundational for [02.02.02] sup/inf, [02.03.01] sequence convergence, [02.04.04] FTC, and the entire single-variable analysis strand. Originators: Hilbert 1899 (*Grundlagen der Geometrie*) for the axiomatisation; Apostol 1967 for the canonical pedagogical presentation; Dedekind 1872 / Cantor 1872 for the construction-from-rationals alternative; Bourbaki 1940- for the modern formalisation; Tarski 1948 for the elementary theory's decision procedure.


### analysis.cauchy-bolzano-weierstrass

- **title**: Cauchy sequences and Bolzano-Weierstrass
- **unit**: `02.03.02`
- **prerequisites**: `analysis.real-number-axioms`
- **tier_anchors**:
  - master: Bolzano 1817 *Rein analytischer Beweis des Lehrsatzes* (originator of the bounded-set-clustering lemma now bearing his name); Weierstrass 1860s Berlin lectures (published 1885) for the bisection proof; Cauchy 1821 *Cours d'analyse* (originator of the Cauchy criterion); Apostol *Calculus* Vol. 1 Ch. 10; Bourbaki *Topologie Générale* Ch. II §3
  - intermediate: Apostol *Calculus* Vol. 1 Ch. 10 §10.7–10.13; Rudin *Principles of Mathematical Analysis* Ch. 3
  - beginner: Strogatz informal "clustering" framing; 3Blue1Brown style sequence-convergence visualisation
- **notes**: Two convergence criteria for sequences in $\mathbb{R}$ that together encode the metric form of completeness. **Cauchy sequence:** $(a_n)$ is Cauchy iff for every $\varepsilon > 0$ some $N$ has $|a_m - a_n| < \varepsilon$ whenever $m, n \geq N$ — terms eventually cluster tightly against one another rather than against a named limit. **Bolzano-Weierstrass theorem:** every bounded sequence in $\mathbb{R}$ has a convergent subsequence, proved by repeated bisection of a bounding interval and the nested-interval consequence of completeness. **Cauchy criterion theorem:** a real sequence converges iff it is Cauchy, proved by combining the triangle inequality (convergent implies Cauchy) with boundedness plus Bolzano-Weierstrass plus the Cauchy condition (Cauchy implies convergent). The two theorems package the metric form of the LUB axiom: completeness in the sense of "every Cauchy sequence converges" is equivalent over the Archimedean ordered field axioms to the least-upper-bound completeness of [02.02.01]. **Worked example:** $a_n = (-1)^n / n$ is bounded between $-1$ and $1$; the even-index subsequence converges to $0$; the full sequence converges to $0$; Bolzano-Weierstrass guarantees the subsequence's existence from boundedness alone. **Master scope:** **metric-space completeness** (every Cauchy sequence converges); the **Cauchy completion** functor (every metric space embeds densely into a complete one, generalising the construction of $\mathbb{R}$ from $\mathbb{Q}$); **sequential compactness** (every sequence has a convergent subsequence, equivalent to compactness on metric spaces but not in general); **Heine-Borel** in $\mathbb{R}^n$ (closed and bounded equals compact equals sequentially compact); **failures in infinite dimensions** — the closed unit ball of $\ell^2$ is bounded but the standard-basis sequence $(e_n)$ has no convergent subsequence, so Bolzano-Weierstrass fails; **Banach's contraction principle** uses Cauchy completeness as input. Originators: Bolzano 1817 *Rein analytischer Beweis* for the original intermediate-value-style clustering argument; Weierstrass 1860s Berlin lectures (published in his *Werke* 1894-1895) for the bisection proof now standard; Cauchy 1821 *Cours d'analyse* for the Cauchy criterion as a working definition (without a proof of completeness); modern unified treatment in Apostol *Calculus* Vol. 1 Ch. 10 and Rudin *Principles of Mathematical Analysis* Ch. 3. Foundational for [02.01.05] metric-space completeness, [02.03.03] series-convergence tests via the Cauchy criterion for partial sums, [02.04.02] the extreme-value theorem and the IVT via compactness, [02.05.01] multi-variable limits using Cauchy and sequential compactness, and [02.11.04] Banach-space completeness.


### analysis.multi-variable-limit-continuity

- **title**: Multi-variable limit and continuity
- **unit**: `02.05.01`
- **prerequisites**: `analysis.real-number-axioms`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 8 §8.2–8.4 (multi-variable limit and continuity, originator pedagogical presentation); Fréchet 1906 *Sur quelques points du calcul fonctionnel* (Rend. Circ. Mat. Palermo 22) — originator of the metric / general topological framework; Heine 1872 *Die Elemente der Functionenlehre* (J. reine angew. Math. 74) — uniform continuity on compact sets; Bourbaki *Topologie Générale* Ch. I §7
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 8; Rudin *Principles of Mathematical Analysis* Ch. 4; Munkres *Topology* §18, §21
  - beginner: 3Blue1Brown style multi-variable framing; Strogatz informal "no jumps" surface intuition
- **notes**: Limit and continuity for $f : \mathbb{R}^n \to \mathbb{R}^m$. Open ball $B_r(a) = \{x : \|x - a\| < r\}$ from the Euclidean norm. **Definition:** $\lim_{x \to a} f(x) = L$ iff for every $\varepsilon > 0$ there exists $\delta > 0$ with $0 < \|x - a\| < \delta \Rightarrow \|f(x) - L\| < \varepsilon$; $f$ is continuous at $a$ iff $\lim_{x \to a} f(x) = f(a)$; continuous iff continuous at every point of its domain. **Worked example contrast:** $f(x, y) = x^2 + y^2$ is continuous at the origin, but $g(x, y) = xy/(x^2 + y^2)$ has no limit at the origin — the approach $y = x$ gives $1/2$ while $y = 0$ gives $0$, so directional limits disagree. **Sequential characterisation theorem:** $f$ is continuous at $a$ iff for every sequence $x_k \to a$, the image sequence $f(x_k) \to f(a)$. The forward direction picks $\delta$ from $\varepsilon$ and $N$ from $\delta$; the contrapositive of the converse builds a witness sequence with $\|x_k - a\| < 1/k$ but $\|f(x_k) - f(a)\| \geq \varepsilon_0$. **Bridge** to the general-topology characterisation (preimage of open is open, [02.01.02]); to uniform continuity and the multivariable Heine-Cantor theorem on compact domains; to the differential structure built on top of continuity in [02.05.02]; to first-countability — sequential continuity equals topological continuity exactly when the domain has countable neighbourhood bases. The path-independence requirement is the central insight: in $\mathbb{R}^n$ for $n \geq 2$, "$x$ approaches $a$" allows infinitely many directions, so a candidate limit must agree along all of them. **Master scope:** multivariable Heine-Cantor (continuous on compact equals uniformly continuous); composition continuity via preimage axioms; Tietze extension on normal spaces; Banach fixed-point theorem on complete metric spaces; first-countability and the gap to general topological continuity. Originators: Cauchy 1821 (*Cours d'analyse*) for single-variable $\varepsilon$-$\delta$; Riemann's lectures of the 1850s for the multivariable case in pedagogical practice; Heine 1872 and Cantor 1872 (independently) for uniform continuity on compact sets; Fréchet's 1906 thesis introduced the metric / abstract-space framework that subsumes both single- and multi-variable limits. Foundational for [02.05.02] partial derivative and the differential, [02.05.03] chain rule, [02.05.04] inverse and implicit function theorems, and [02.05.05] Taylor and extrema.


### analysis.multivariable-chain-rule

- **title**: Chain rule for multi-variable functions
- **unit**: `02.05.03`
- **prerequisites**: `analysis.multi-variable-limit-continuity`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 8 §8.18–8.21 (canonical pedagogical presentation in Jacobian-matrix form); Dieudonné *Foundations of Modern Analysis* Ch. VIII (Banach-space Fréchet-derivative form); Cartan *Calcul Différentiel* Ch. I (intrinsic differential framing); Faà di Bruno 1855 *Sullo sviluppo delle funzioni* (Annali di Scienze Matematiche e Fisiche 6) — originator of the higher-order chain rule with set-partition coefficients; Itô 1944 *Stochastic Integral* (Proc. Imp. Acad. Tokyo 20) — originator of the stochastic chain rule with the quadratic-variation correction
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 8 §8.18–8.21; Rudin *Principles of Mathematical Analysis* Ch. 9; Spivak *Calculus on Manifolds* Ch. 2 Theorem 2-2
  - beginner: 3Blue1Brown "nested-function gears" framing; Strogatz informal kinematic "rate-times-rate" picture
- **notes**: The composition rule for differentiation between Euclidean spaces. Setup: $g : U \subseteq \mathbb{R}^n \to \mathbb{R}^m$ differentiable at $a$ with derivative $Dg(a) : \mathbb{R}^n \to \mathbb{R}^m$ (the Jacobian) and $f : V \subseteq \mathbb{R}^m \to \mathbb{R}^p$ differentiable at $b = g(a)$ with derivative $Df(b)$. **Statement:** $f \circ g$ is differentiable at $a$ and $D(f \circ g)(a) = Df(g(a)) \circ Dg(a)$; in Jacobian-matrix form, $J_{f \circ g}(a) = J_f(g(a)) \cdot J_g(a)$, an ordinary $p \times m$ by $m \times n$ matrix product yielding a $p \times n$ matrix. **Worked example:** $g(t) = (\cos t, \sin t)$ and $f(x, y) = x^2 + y^2$ give $(f \circ g)(t) = 1$; direct derivative is $0$; chain-rule gives $(2 \cos t, 2 \sin t) \cdot (-\sin t, \cos t)^T = 0$. **Proof structure** (linear-approximation form): define remainders $\rho_g(h) = g(a + h) - g(a) - Dg(a) h$ and $\rho_f(k) = f(b + k) - f(b) - Df(b) k$, both $o(\|h\|)$ and $o(\|k\|)$ respectively; set $k(h) = Dg(a) h + \rho_g(h)$; then $(f \circ g)(a + h) = f(g(a)) + Df(b) \cdot Dg(a) h + Df(b) \rho_g(h) + \rho_f(k(h))$; bound $\|Df(b) \rho_g(h)\| \leq \|Df(b)\|_{\mathrm{op}} \|\rho_g(h)\|$ and $\|k(h)\| \leq (\|Dg(a)\|_{\mathrm{op}} + 1) \|h\|$ on a small ball; conclude the two remainder terms are each $o(\|h\|)$. **Bridge** to the implicit and inverse function theorems via $Dg^{-1}(b) = Dg(a)^{-1}$ (chain rule applied to $g^{-1} \circ g = \mathrm{id}$); to the differential structure of smooth manifolds where the chain rule is functoriality of the tangent functor; to the de Rham complex where pullback of forms satisfies $(\psi \circ \phi)^* = \phi^* \circ \psi^*$; to the change-of-variables formula in multi-variable integration with $|\det Dg|$ correction factor. **Master scope:** Banach-space chain rule (same proof, Fréchet derivative in normed spaces); pushforward on tangent vectors with $(\psi \circ \phi)_* = \psi_* \circ \phi_*$ (functoriality); pullback on differential forms with $(\psi \circ \phi)^* = \phi^* \circ \psi^*$ (contravariance); Faà di Bruno formula for the $n$-th derivative of a composition with sum over set partitions; Itô formula in stochastic calculus with the half-Hessian quadratic-variation correction term; categorical view of differentiation as a functor from smooth manifolds to vector bundles. Originators: Leibniz 1684 (*Nova methodus pro maximis et minimis*, *Acta Eruditorum*) — originator of the single-variable rule $dy/dx \cdot dx/dt$; Cauchy and Lagrange (early nineteenth century) for rigorous proofs; Cartan c. 1900 for the intrinsic differential / coordinate-free form; Apostol Vol. 2 1969 for the canonical pedagogical multi-variable presentation; Faà di Bruno 1855 for the combinatorial higher-order formula; Itô 1944 for the stochastic chain rule. Foundational for [02.05.04] implicit and inverse function theorems, [02.05.05] Taylor and extrema (multi-variable Taylor uses the chain rule iteratively), [02.06.*] ODE systems (variational equations via the chain rule), [03.02.01] smooth manifolds (chain rule is the structural reason coordinate changes patch together), [03.04.04] exterior derivative (pullback functoriality is the chain rule), and the change-of-variables formula in multi-variable integration.


### analysis.implicit-inverse-function-theorems

- **title**: Implicit and inverse function theorems
- **unit**: `02.05.04`
- **prerequisites**: `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 13 (originator pedagogical presentation with the contraction-mapping proof); Spivak *Calculus on Manifolds* Ch. 2 Theorems 2-11 and 2-12; Dieudonné *Foundations of Modern Analysis* Ch. X §10.2 (Banach-space Fréchet-derivative form); Cauchy 1831 *Sur la mécanique céleste et sur un nouveau calcul* (analytic implicit-function tradition through majorant series); Goursat 1903 *Sur la théorie des fonctions implicites* (Bulletin de la Société Mathématique de France 31) — originator of the modern $C^1$-and-Banach formulation; Dini 1877 *Lezioni di analisi infinitesimale* — originator of the modern $\mathbb{R}^n$ form; Nash 1956 *The imbedding problem for Riemannian manifolds* (Annals of Mathematics 63); Moser 1966 *A rapidly convergent iteration method and non-linear differential equations* (Annali Scuola Norm. Sup. Pisa 20) — originators of the Nash-Moser hard implicit function theorem
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 13 §13.4–13.7; Rudin *Principles of Mathematical Analysis* Ch. 9 §9.17–9.29; Spivak *Calculus on Manifolds* Ch. 2 Theorems 2-11 and 2-12
  - beginner: 3Blue1Brown style local-zoom-into-linear-map framing; Strogatz informal "level-curve as graph" picture
- **notes**: The two foundational local-invertibility theorems for multi-variable maps. **Inverse function theorem:** if $f : U \subseteq \mathbb{R}^n \to \mathbb{R}^n$ is $C^k$ on open $U$ and $Df(a)$ is invertible at $a \in U$, then there are open neighbourhoods $V \ni a$ and $W \ni f(a)$ with $f|_V : V \to W$ a $C^k$ bijection with $C^k$ inverse, and $D(f^{-1})(f(a)) = (Df(a))^{-1}$. **Implicit function theorem:** if $g : U \subseteq \mathbb{R}^{n+m} \to \mathbb{R}^m$ is $C^k$ with $g(a, b) = 0$ and $D_2 g(a, b)$ (the Jacobian in the last $m$ variables) is invertible, then there is a neighbourhood $V \ni a$ and a $C^k$ map $h : V \to \mathbb{R}^m$ with $h(a) = b$ and $g(x, h(x)) = 0$ for $x \in V$, with derivative $Dh(a) = -D_2 g(a, b)^{-1} D_1 g(a, b)$. **Worked example (inverse):** $f(x, y) = (x^2 - y^2, 2xy)$ at $(1, 0)$: $Df = \mathrm{diag}(2, 2)$, determinant $4$, invertible, so local inverse exists (globally $f$ is the complex squaring map, 2-to-1). **Worked example (implicit):** $g(x, y) = x^2 + y^2 - 1$ at $(1/\sqrt{2}, 1/\sqrt{2})$: $g_y = 2y = \sqrt{2} \neq 0$, so the unit circle is locally a graph $y = \sqrt{1 - x^2}$. **Proof structure (inverse implies implicit):** define $F(x, y) = (x, g(x, y))$; then $DF(a, b)$ is block lower-triangular with diagonal blocks $I_n$ and $D_2 g(a, b)$, hence invertible iff $D_2 g(a, b)$ is invertible; apply inverse function theorem to $F$ and read off $h$ from the second component of the inverse. **Proof structure (inverse function theorem):** define $T_y(x) = x - Df(a)^{-1}(f(x) - y)$; this is a contraction on a small closed ball for $y$ near $f(a)$, with contraction constant $1/2$ from continuity of $Df$; Banach contraction principle gives a unique fixed point — the inverse value $f^{-1}(y)$. **Bridge** to the manifold structure on level sets (a regular level set of a $C^k$ submersion is a $C^k$ submanifold — the regular-value theorem of [03.02.01]); to the constant-rank theorem (a $C^k$ map of constant rank is locally equivalent to a linear projection $(x_1, \ldots, x_n) \mapsto (x_1, \ldots, x_r, 0, \ldots, 0)$ in suitable coordinates); to the Banach-space inverse function theorem with the same contraction-mapping proof under a topological-isomorphism hypothesis; to the holomorphic inverse function theorem powering the local theory of Riemann surfaces and the definition of étale morphisms in algebraic geometry; to the real-analytic inverse function theorem via Cauchy-Kovalevskaya majorant series; to the Nash-Moser hard implicit function theorem on tame Fréchet spaces with loss-of-derivatives compensation, used in KAM theory and the Riemannian embedding problem. **Master scope:** Banach-space form with topological-isomorphism hypothesis; failure of inverse on Banach spaces when $Df(a)$ is algebraically bijective but lacks continuous inverse (witness $T(x_n) = (x_n/n)$ on $c_0$); holomorphic form and étale morphisms; real-analytic form; constant rank theorem subsuming both inverse and implicit theorems; Nash-Moser smoothed Newton iteration on tame Fréchet spaces; applications to KAM, isometric Riemannian embedding, and nonlinear PDE. Originators: Newton's *Method of Fluxions* (1671, published 1736) for single-variable series-form forerunner; Lagrange *Théorie des fonctions analytiques* 1797 for multi-variable series form; Cauchy 1831 Turin lectures for the analytic majorant-series form; Dini 1877 *Lezioni di analisi infinitesimale* for the modern $\mathbb{R}^n$ form under continuous-partials hypothesis; Goursat 1903 *Bulletin de la Société Mathématique de France 31* for the contraction-mapping proof under $C^1$ hypothesis; Banach 1922 *Fundamenta Mathematicae 3* for the contraction-mapping principle as an abstract tool; Dieudonné 1960 *Foundations of Modern Analysis* for the Banach-space textbook presentation; Apostol 1969 Vol. 2 Ch. 13 for the canonical pedagogical presentation; Nash 1956 *Annals of Mathematics 63* for the smoothed Newton iteration in the Riemannian embedding problem; Moser 1966 *Annali Scuola Norm. Sup. Pisa 20* for the Nash-Moser refinement and KAM applications; Hamilton 1982 *Bulletin of the AMS 7* for the tame-Fréchet-space framework. Foundational for [02.05.05] Taylor and extrema (Lagrange multiplier rule is a direct corollary), [03.02.01] smooth manifolds (regular-value theorem makes level sets into submanifolds), [03.02.02] the constant-rank theorem and submanifold structure, [04.*] étale morphisms in algebraic geometry, [05.09.*] KAM theory via the Nash-Moser hard IFT, [06.*] Riemann surfaces via the holomorphic IFT, and the Picard-Lindelöf existence theorem for ODEs which shares the Banach contraction engine.


### analysis.multivariable-taylor-extrema

- **title**: Taylor's theorem and extrema in several variables
- **unit**: `02.05.05`
- **prerequisites**: `analysis.implicit-inverse-function-theorems`
- **tier_anchors**:
  - master: Apostol *Calculus* Vol. 2 Ch. 9 §9.4–9.9 (canonical pedagogical presentation of multi-variable Taylor's theorem and the Hessian-based second-derivative test); Taylor 1715 *Methodus incrementorum directa et inversa* — originator of the single-variable Taylor formula; Lagrange 1797 *Théorie des fonctions analytiques* — originator of the Lagrange remainder form; Hesse 1857 *Über die Determinanten und ihre Anwendung in der Geometrie* (J. reine angew. Math. 49) — originator of the Hessian determinant; Morse 1925 *Relations between the critical points of a real function of n independent variables* (Transactions AMS 27) — originator of Morse theory; Thom 1972 *Stabilité structurelle et morphogénèse* — originator of catastrophe theory; Milnor *Morse Theory* (1963) for the modern reference on the index and cellular attachment
  - intermediate: Apostol *Calculus* Vol. 2 Ch. 9 §9.4–9.9; Rudin *Principles of Mathematical Analysis* Ch. 9 §9.39–9.41; Spivak *Calculus on Manifolds* Ch. 2 §2-12 to §2-14
  - beginner: 3Blue1Brown style tangent-paraboloid framing; Strogatz informal "cup, cap, saddle" picture for critical points
- **notes**: Multi-variable Taylor expansion plus the second-derivative test for extrema. **Taylor's theorem (multi-variable, Lagrange form):** for $f : U \to \mathbb{R}$ of class $C^{k+1}$ on a convex open $U \subseteq \mathbb{R}^n$, $a \in U$, $a + h \in U$, there exists $c$ on the segment from $a$ to $a + h$ with $f(a + h) = \sum_{|\alpha| \leq k} D^\alpha f(a) h^\alpha/\alpha! + \sum_{|\alpha| = k+1} D^\alpha f(c) h^\alpha/\alpha!$, using multi-index notation $\alpha = (\alpha_1, \ldots, \alpha_n) \in \mathbb{N}^n$, $|\alpha| = \sum \alpha_i$, $\alpha! = \alpha_1! \cdots \alpha_n!$, $h^\alpha = h_1^{\alpha_1} \cdots h_n^{\alpha_n}$, $D^\alpha = \partial^{|\alpha|}/(\partial x_1^{\alpha_1} \cdots \partial x_n^{\alpha_n})$. The second-order specialisation reads $f(a + h) = f(a) + \nabla f(a) \cdot h + \tfrac{1}{2} h^T H_f(a) h + o(\|h\|^2)$ where $H_f(a) = (\partial^2 f/\partial x_i \partial x_j(a))$ is the **Hessian matrix**, symmetric by Clairaut-Schwarz for $C^2$ functions. **Second-derivative test theorem:** for a $C^2$ function $f$ with $\nabla f(a) = 0$ and $H = H_f(a)$ the Hessian: (1) $H$ positive definite ⇒ strict local min; (2) $H$ negative definite ⇒ strict local max; (3) $H$ indefinite (both positive and negative eigenvalues) ⇒ saddle; (4) $H$ semidefinite with a zero eigenvalue ⇒ inconclusive. **Worked examples:** $f(x, y) = x^2 + y^2$, critical point $(0, 0)$, Hessian $\mathrm{diag}(2, 2)$, both eigenvalues positive, local minimum; $g(x, y) = x^2 - y^2$, critical point $(0, 0)$, Hessian $\mathrm{diag}(2, -2)$, mixed signs, saddle. **Proof structure** (case (1)): Taylor expansion at $a$ with $\nabla f(a) = 0$ gives $f(a + h) - f(a) = \tfrac{1}{2} h^T H_f(c(h)) h$ for $c(h)$ on the segment; by continuity of $H_f$, $h^T H_f(c(h)) h \geq \tfrac{1}{2} \lambda_{\min}(H) \|h\|^2$ for small $\|h\|$, with $\lambda_{\min} > 0$ the smallest eigenvalue of $H$; the Rayleigh-quotient bound dominates the remainder, giving strict positivity. **Counterexamples for case (4):** $f(x, y) = x^4 + y^4$ has zero Hessian at origin and is a strict local min; $g(x, y) = x^4 - y^4$ has zero Hessian at origin and is a saddle; $h(x, y) = x^2 - y^3$ has positive semidefinite Hessian (one zero eigenvalue) but the origin is not a local min. **Bridge** to *Morse theory* — a Morse function has only non-degenerate critical points, each labelled by an *index* (number of negative Hessian eigenvalues), and the topology of sublevel sets changes by attaching a cell of dimension equal to the index as $c$ passes a critical value; foundation for the h-cobordism theorem and Floer homology. To *Lagrange multipliers* via the implicit function theorem [02.05.04]: constrained extrema are critical points of the Lagrangian $L(x, \lambda) = f(x) - \lambda g(x)$, and the bordered-Hessian classifies them. To *catastrophe theory* (Thom 1972): generic degenerate critical points in $r$-parameter families with $r \leq 4$ have one of seven normal forms (fold, cusp, swallowtail, butterfly, three umbilics). To *Laplace's method*: $\int e^{-N f(x)} dx \sim e^{-N f(a^*)} (2\pi/N)^{n/2}/\sqrt{\det H_f(a^*)}$ as $N \to \infty$ for a non-degenerate minimum $a^*$. **Master scope:** integral form of the Taylor remainder; Morse lemma (local quadratic normal form at non-degenerate critical points via parametric inverse function theorem); Lagrange multiplier rule with bordered-Hessian classification; Thom's elementary catastrophes; Laplace's method and the saddle-point method in complex analysis; multi-jet classification of degenerate critical points. Originators: Taylor 1715 for the single-variable formula; Lagrange 1797 for the remainder form; Cauchy 1821 *Cours d'analyse* for the first rigorous $\varepsilon$-$\delta$ proof; Hesse 1857 for the Hessian determinant in algebraic geometry; Morse 1925 for Morse theory; Milnor 1963 *Morse Theory* for the modern textbook presentation; Smale 1961 for the h-cobordism theorem application; Thom 1972 for catastrophe theory; Mather 1968–1971 for the rigorous proofs; Apostol 1969 Vol. 2 Ch. 9 for the canonical undergraduate pedagogical presentation. Foundational for Morse theory and the topology of manifolds (pending unit in 03.12.*), Lagrange multipliers in constrained optimisation, the saddle-point method in complex analysis (pending unit in 06.*), the stationary-phase asymptotic in oscillatory-integral theory, and partition-function expansions in statistical mechanics.

## Physics (§09–13)

### classical-mechanics.kinematics

- **title**: Kinematics — position, velocity, acceleration
- **unit**: `09.01.01`
- **prerequisites**: `analysis.multivariable-chain-rule`, `set-theory.function`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §1–2; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §1
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 1
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 1
- **notes**: (to be filled during production)


### classical-mechanics.newtons-laws

- **title**: Newton's laws of motion
- **unit**: `09.01.02`
- **prerequisites**: `linalg.vector-space`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §2; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §1–3
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 1–2
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 2–3
- **notes**: (to be filled during production)


### classical-mechanics.conservation-laws

- **title**: Conservation laws — energy, momentum, angular momentum
- **unit**: `09.01.03`
- **prerequisites**: `classical-mechanics.newtons-laws`, `linalg.vector-space`, `ode.phase-space-vector-field`, `ode.first-integrals`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §3, §16; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §2, §6–9
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 3–4
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 3–4
- **notes**: (to be filled during production)


### classical-mechanics.action-principle

- **title**: The action principle and variational calculus
- **unit**: `09.02.01`
- **prerequisites**: `classical-mechanics.newtons-laws`, `classical-mechanics.conservation-laws`, `analysis.multivariable-chain-rule`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §12–14; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §2–3
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 6
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 5–6
- **notes**: (to be filled during production)


### classical-mechanics.euler-lagrange-equations

- **title**: Euler-Lagrange equations
- **unit**: `09.02.02`
- **prerequisites**: `classical-mechanics.newtons-laws`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §12; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §1–3
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 7
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 6
- **notes**: (to be filled during production)


### classical-mechanics.noethers-theorem

- **title**: Noether's theorem — symmetries and conservation laws
- **unit**: `09.03.01`
- **prerequisites**: `classical-mechanics.euler-lagrange-equations`, `classical-mechanics.conservation-laws`, `linalg.vector-space`, `ode.first-integrals`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §20; Marsden-Ratiu, *Mechanics and Symmetry*, Ch. 11
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 7.5; Goldstein, *Classical Mechanics* 3e, Ch. 2.6
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 7
- **notes**: (to be filled during production)


### modern-geometry.quantum-free-particle-e3

- **title**: Quantum free particle as a representation of E(3)
- **unit**: `09.03.03`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Souriau 1970 Structure des Systemes Dynamiques; Mackey 1968 Induced Representations
  - intermediate: Hall Quantum Theory for Mathematicians Ch. 17; Taylor PDE Vol. 1
  - beginner: Taylor-Bohm Quantum Mechanics informal; Strogatz-style wave picture
- **notes**: (to be filled during production)


### classical-mechanics.legendre-transform

- **title**: Legendre transform — from Lagrangian to Hamiltonian
- **unit**: `09.04.01`
- **prerequisites**: `classical-mechanics.euler-lagrange-equations`, `classical-mechanics.conservation-laws`, `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §13, §14; Marsden-Ratiu, *Mechanics and Symmetry*, Ch. 3.3
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 13.1
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 8
- **notes**: (to be filled during production)


### classical-mechanics.hamiltons-equations

- **title**: Hamilton's equations
- **unit**: `09.04.02`
- **prerequisites**: `classical-mechanics.legendre-transform`, `symplectic-geometry.symplectic-manifold`, `symplectic-geometry.hamiltonian-vector-field`, `symplectic-geometry.poisson-bracket`, `symplectic-geometry.cotangent-bundle`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), Part III §8; Marsden-Ratiu, *Introduction to Mechanics and Symmetry*, Ch. 2-3; Abraham-Marsden, *Foundations of Mechanics*, §3.6-3.7
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 13; Goldstein-Poole-Safko, *Classical Mechanics* 3e, Ch. 8
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 8
- **notes**: (to be filled during production)


### modern-geometry.complex-structures-squeezed

- **title**: Complex structures and quantization: squeezed states
- **unit**: `09.04.07`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: de Gosson Symplectic Geometry and Quantum Mechanics Ch. 3; Bargmann 1961
  - intermediate: Hall Quantum Theory Ch. 14; Folland Harmonic Analysis Ch. 1
  - beginner: Taylor-Bohm informal coherent-state picture; Strogatz-style oscillator
- **notes**: (to be filled during production)


### classical-mechanics.canonical-transformations

- **title**: Canonical transformations
- **unit**: `09.05.01`
- **prerequisites**: `classical-mechanics.hamiltons-equations`, `linalg.vector-space`, `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §45; Marsden-Ratiu, *Mechanics and Symmetry*, Ch. 2.2–2.3
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 13.5; Goldstein, *Classical Mechanics* 3e, Ch. 9
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 9
- **notes**: (to be filled during production)


### classical-mechanics.hamilton-jacobi

- **title**: Hamilton-Jacobi equation
- **unit**: `09.05.02`
- **prerequisites**: `classical-mechanics.hamiltons-equations`, `classical-mechanics.legendre-transform`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §46–47; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §47
  - intermediate: Goldstein, *Classical Mechanics* 3e, Ch. 10
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 9–10
- **notes**: (to be filled during production)


### classical-mechanics.action-angle-variables

- **title**: Action-angle variables
- **unit**: `09.06.01`
- **prerequisites**: `classical-mechanics.hamilton-jacobi`, `classical-mechanics.hamiltons-equations`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §49–50; Landau & Lifshitz, *Mechanics*, 3rd ed. (1976), §49
  - intermediate: Goldstein, *Classical Mechanics* 3e, Ch. 10.6; Taylor, *Classical Mechanics*, Ch. 13.6
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 10
- **notes**: (to be filled during production)


### classical-mechanics.kam-theorem-chaos

- **title**: KAM theorem and chaos
- **unit**: `09.08.01`
- **prerequisites**: `classical-mechanics.hamiltons-equations`, `ode.poincare-bendixson`, `ode.limit-cycle-lienard`
- **tier_anchors**:
  - master: Arnold, *Mathematical Methods of Classical Mechanics*, 2nd ed. (1989), §52; Arnold, *Geometric Methods in the Theory of ODEs*
  - intermediate: Taylor, *Classical Mechanics* (2005), Ch. 13.7; Goldstein, *Classical Mechanics* 3e, Ch. 11
  - beginner: Susskind & Hrabovsky, *The Theoretical Minimum: Classical Mechanics* (2014), Lecture 11
- **notes**: (to be filled during production)


### electromagnetism.coulomb-gauss

- **title**: Coulomb's law and Gauss's law
- **unit**: `10.01.01`
- **prerequisites**: `classical-mechanics.newtons-laws`, `linalg.vector-space`, `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 1; Zangwill, *Modern Electrodynamics*, Ch. 3
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 2
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 1–2
- **notes**: (to be filled during production)


### electromagnetism.laplace-boundary-value-problems

- **title**: Laplace equation and boundary value problems
- **unit**: `10.01.02`
- **prerequisites**: `analysis.multivariable-chain-rule`, `linalg.vector-space`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 2; Zangwill, *Modern Electrodynamics*, Ch. 4
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 3
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 2
- **notes**: (to be filled during production)


### electromagnetism.biot-savart-ampere

- **title**: Biot-Savart law and Ampere's law
- **unit**: `10.02.01`
- **prerequisites**: `classical-mechanics.newtons-laws`, `linalg.vector-space`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 5; Zangwill, *Modern Electrodynamics*, Ch. 9
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 5
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 3
- **notes**: (to be filled during production)


### electromagnetism.faradays-law-induction

- **title**: Faraday's law and electromagnetic induction
- **unit**: `10.03.01`
- **prerequisites**: `electromagnetism.biot-savart-ampere`, `classical-mechanics.newtons-laws`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 6; Zangwill, *Modern Electrodynamics*, Ch. 10
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 7
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 4
- **notes**: (to be filled during production)


### electromagnetism.maxwell-equations-differential-form

- **title**: Maxwell's equations in differential form
- **unit**: `10.04.01`
- **prerequisites**: `diffgeo.exterior-derivative`, `diffgeo.stokes-theorem`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3rd ed. (1998), Ch. 6 and Ch. 11; Landau-Lifshitz, *The Classical Theory of Fields*, 4th ed. (Course of Theoretical Physics Vol. 2, 1980), §28-§30; Zangwill, *Modern Electrodynamics* (2013), Ch. 22; Misner-Thorne-Wheeler, *Gravitation* (1973), Ch. 3-4 (forms-first treatment of EM)
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4th ed. (2013), Ch. 7-9; Purcell-Morin, *Electricity and Magnetism*, 3rd ed. (2013), Ch. 9
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lectures 4-6; Feynman *Lectures on Physics* Vol. II Ch. 1-18 (selected)
- **notes**: (to be filled during production)


### electromagnetism.em-waves-wave-equation

- **title**: EM waves and the wave equation
- **unit**: `10.04.02`
- **prerequisites**: `electromagnetism.faradays-law-induction`, `classical-mechanics.kinematics`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 7; Landau-Lifshitz Vol 2, Ch. 4
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 9
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 5–6
- **notes**: (to be filled during production)


### electromagnetism.special-relativity-lorentz

- **title**: Special relativity — postulates and Lorentz transformations
- **unit**: `10.05.01`
- **prerequisites**: `classical-mechanics.kinematics`, `linalg.vector-space`, `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 11; Landau-Lifshitz Vol 2, Ch. 1
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 12
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 7–8
- **notes**: (to be filled during production)


### electromagnetism.relativistic-dynamics

- **title**: Relativistic kinematics and dynamics
- **unit**: `10.05.02`
- **prerequisites**: `classical-mechanics.newtons-laws`, `classical-mechanics.conservation-laws`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 11; Landau-Lifshitz Vol 2, Ch. 2
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 12.2
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 8–9
- **notes**: (to be filled during production)


### electromagnetism.covariant-em-faraday-tensor

- **title**: Covariant electrodynamics — Faraday tensor
- **unit**: `10.06.01`
- **prerequisites**: `electromagnetism.relativistic-dynamics`, `electromagnetism.maxwell-equations-differential-form`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 11; Landau-Lifshitz Vol 2, Ch. 4
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 12.3
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 10
- **notes**: (to be filled during production)


### electromagnetism.radiation-larmor

- **title**: Radiation from accelerating charges — Larmor formula
- **unit**: `10.07.01`
- **prerequisites**: `electromagnetism.covariant-em-faraday-tensor`, `classical-mechanics.newtons-laws`
- **tier_anchors**:
  - master: Jackson, *Classical Electrodynamics*, 3e (1999), Ch. 14; Zangwill, *Modern Electrodynamics*, Ch. 20
  - intermediate: Griffiths, *Introduction to Electrodynamics*, 4e (2017), Ch. 11
  - beginner: Susskind & Friedman, *Special Relativity and Classical Field Theory* (2017), Lecture 11
- **notes**: (to be filled during production)


### statistical-mechanics.thermodynamic-laws

- **title**: First and second laws of thermodynamics
- **unit**: `11.01.01`
- **prerequisites**: `classical-mechanics.noethers-theorem`, `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Callen, *Thermodynamics and an Introduction to Thermostatistics*, 2e (1985), Ch. 1–4; Landau & Lifshitz, *Statistical Physics*, Part 1, §1–4
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 1–3
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 1–2
- **notes**: (to be filled during production)


### statistical-mechanics.thermodynamic-potentials

- **title**: Thermodynamic potentials and Legendre transforms
- **unit**: `11.01.02`
- **prerequisites**: `classical-mechanics.legendre-transform`, `analysis.multivariable-chain-rule`
- **tier_anchors**:
  - master: Callen, *Thermodynamics and an Introduction to Thermostatistics*, 2e (1985), Ch. 5–8; Landau & Lifshitz, *Statistical Physics*, Part 1, §15–20
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 5; Callen, *Thermodynamics*, Ch. 5
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 3
- **notes**: (to be filled during production)


### statistical-mechanics.maxwell-boltzmann-kinetic-theory

- **title**: Maxwell-Boltzmann distribution from kinetic theory
- **unit**: `11.02.01`
- **prerequisites**: `classical-mechanics.conservation-laws`, `classical-mechanics.kinematics`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Landau & Lifshitz, *Statistical Physics*, Part 1, §4–5; Huang, *Statistical Mechanics*, 2e, Ch. 3
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 6
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 4
- **notes**: (to be filled during production)


### statistical-mechanics.microcanonical-ensemble

- **title**: Microcanonical ensemble
- **unit**: `11.03.01`
- **prerequisites**: `statistical-mechanics.maxwell-boltzmann-kinetic-theory`, `classical-mechanics.hamiltons-equations`, `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Landau & Lifshitz, *Statistical Physics*, Part 1, §1–4; Huang, *Statistical Mechanics*, 2e, Ch. 6
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 2–3; Reichl, *Modern Course in Statistical Physics*, Ch. 2
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 5–6
- **notes**: (to be filled during production)


### statistical-mechanics.canonical-ensemble

- **title**: Canonical ensemble and partition function
- **unit**: `11.04.01`
- **prerequisites**: `stat-mech.boltzmann-distribution`, `stat-mech.free-energy`, `analysis.multivariable-taylor-extrema`
- **tier_anchors**:
  - master: Landau & Lifshitz *Statistical Physics, Part 1*, 3rd ed. (Course of Theoretical Physics Vol. 5, Pergamon, 1980) §28–§31; Reichl *A Modern Course in Statistical Physics*, 4th ed. (Wiley-VCH, 2016) Ch. 3
  - intermediate: Schroeder *Thermal Physics* Ch. 6–7; Reif *Fundamentals of Statistical and Thermal Physics* (McGraw-Hill, 1965) Ch. 6
  - beginner: Schroeder *An Introduction to Thermal Physics* (Addison-Wesley, 2000), Ch. 6 (Boltzmann statistics); Susskind & Hrabovsky *Statistical Mechanics: The Theoretical Minimum* (Basic Books, 2014, where applicable)
- **notes**: (to be filled during production)


### statistical-mechanics.bose-einstein-distribution

- **title**: Bose-Einstein distribution
- **unit**: `11.05.01`
- **prerequisites**: `statistical-mechanics.microcanonical-ensemble`, `statistical-mechanics.maxwell-boltzmann-kinetic-theory`
- **tier_anchors**:
  - master: Landau & Lifshitz, *Statistical Physics*, Part 1, §54–55; Huang, *Statistical Mechanics*, 2e, Ch. 12
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 7
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 9
- **notes**: (to be filled during production)


### statistical-mechanics.fermi-dirac-electron-gas

- **title**: Fermi-Dirac distribution and electron gas
- **unit**: `11.05.02`
- **prerequisites**: `statistical-mechanics.bose-einstein-distribution`, `quantum-mechanics.stern-gerlach-spin-half`
- **tier_anchors**:
  - master: Landau & Lifshitz, *Statistical Physics*, Part 1, §56–58; Ashcroft & Mermin, *Solid State Physics*, Ch. 2
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 7
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 10
- **notes**: (to be filled during production)


### statistical-mechanics.ising-phase-transitions

- **title**: Ising model and phase transitions
- **unit**: `11.06.01`
- **prerequisites**: `statistical-mechanics.bose-einstein-distribution`, `statistical-mechanics.fermi-dirac-electron-gas`
- **tier_anchors**:
  - master: Landau & Lifshitz, *Statistical Physics*, Part 1, §73–74; Huang, *Statistical Mechanics*, 2e, Ch. 14
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 8; Reichl, *Modern Course in Statistical Physics*, Ch. 4
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 11
- **notes**: (to be filled during production)


### statistical-mechanics.renormalization-group-critical-phenomena

- **title**: Critical phenomena and renormalization group
- **unit**: `11.07.01`
- **prerequisites**: `statistical-mechanics.bose-einstein-distribution`, `statistical-mechanics.fermi-dirac-electron-gas`
- **tier_anchors**:
  - master: Goldenfeld, *Lectures on Phase Transitions and the Renormalization Group* (1992); Wilson & Kogut, *Physics Reports* 12C (1974)
  - intermediate: Schroeder, *Thermal Physics* (2000), Ch. 8; Goldenfeld, *Lectures on Phase Transitions and the Renormalization Group*, Ch. 1–5
  - beginner: Susskind, *The Theoretical Minimum: Statistical Mechanics* (2013), Lecture 12
- **notes**: (to be filled during production)


### quantum-mechanics.wave-particle-duality

- **title**: Wave-particle duality and the double-slit
- **unit**: `12.01.01`
- **prerequisites**: `classical-mechanics.kinematics`, `classical-mechanics.newtons-laws`
- **tier_anchors**:
  - master: Dirac, *The Principles of Quantum Mechanics*, 4e (1958), Ch. I; Sakurai, *Modern Quantum Mechanics*, §1.1
  - intermediate: Feynman, Leighton & Sands, *The Feynman Lectures on Physics*, Vol. III, Ch. 1
  - beginner: Susskind & Friedman, *Quantum Mechanics: The Theoretical Minimum* (2014), Lecture 1
- **notes**: (to be filled during production)


### quantum-mechanics.stern-gerlach-spin-half

- **title**: Stern-Gerlach and spin-1/2
- **unit**: `12.01.02`
- **prerequisites**: `linear-algebra.linear-transformation-rank-nullity`, `linear-algebra.eigenvalue-eigenvector`, `spin-geometry.clifford.clifford-algebra`, `rep-theory.lie-algebra-representation`, `rep-theory.compact-lie-group-representation`
- **tier_anchors**:
  - master: Sakurai-Napolitano, *Modern Quantum Mechanics* 2e (2011), Ch. 3 (angular momentum); Sakurai, *Advanced Quantum Mechanics* (1967), Ch. 3 (relativistic spin); Peskin & Schroeder, *Introduction to Quantum Field Theory* (1995), Ch. 3 (Dirac field spin); Weinberg, *Lectures on Quantum Mechanics* 2e (2015), Ch. 4
  - intermediate: Griffiths, *Introduction to Quantum Mechanics* 2e (2005), Ch. 4 §4.4 (spin); Sakurai-Napolitano, *Modern Quantum Mechanics* 2e (2011), Ch. 1 §1.1 (Stern-Gerlach motivation)
  - beginner: Susskind & Friedman, *Quantum Mechanics: The Theoretical Minimum* (2014), Lectures 1–2; Feynman Lectures on Physics Vol. III, Chs. 1–6 (selected)
- **notes**: (to be filled during production)


### quantum-mechanics.hilbert-space-formalism

- **title**: Hilbert-space formalism of quantum mechanics
- **unit**: `12.02.01`
- **prerequisites**: `linear-algebra.eigenvalue-eigenvector`, `functional-analysis.banach-space`, `functional-analysis.normed-vector-space`, `functional-analysis.inner-product-space`, `functional-analysis.hilbert-space`, `functional-analysis.bounded-operators`, `functional-analysis.unbounded-self-adjoint`, `quantum-mechanics.stern-gerlach-spin-half`
- **tier_anchors**:
  - master: von Neumann, *Mathematische Grundlagen der Quantenmechanik* (Springer, 1932; Eng. trans. Princeton, 1955); Dirac, *The Principles of Quantum Mechanics*, 4th ed. (Oxford, 1958); Reed & Simon, *Methods of Modern Mathematical Physics*, Vol. I (Academic Press, 1980), §VII–VIII; Hall, *Quantum Theory for Mathematicians* (Springer GTM 267, 2013), Chs. 2–10; Takhtajan, *Quantum Mechanics for Mathematicians* (AMS GSM 95, 2008), Chs. 1–3
  - intermediate: Griffiths, *Introduction to Quantum Mechanics*, 2nd ed. (Pearson, 2005), Ch. 3; Sakurai & Napolitano, *Modern Quantum Mechanics*, 2nd ed. (Pearson/Cambridge, 2011), Ch. 1 §1.2–1.7; Shankar, *Principles of Quantum Mechanics*, 2nd ed. (Plenum, 1994), Chs. 1, 4
  - beginner: Susskind & Friedman, *Quantum Mechanics: The Theoretical Minimum* (Basic Books, 2014), Lectures 1–3; Feynman, Leighton & Sands, *The Feynman Lectures on Physics*, Vol. III (Addison-Wesley, 1965), Chs. 1–3, 8
- **notes**: (to be filled during production)


### quantum-mechanics.hilbert-spaces-kets-bras

- **title**: Hilbert spaces, kets, and bras
- **unit**: `12.02.01`
- **prerequisites**: `quantum-mechanics.stern-gerlach-spin-half`, `linalg.vector-space`
- **tier_anchors**:
  - master: Dirac, *The Principles of Quantum Mechanics*, 4e (1958), Ch. I–II; von Neumann, *Mathematical Foundations of Quantum Mechanics* (1932)
  - intermediate: Sakurai, *Modern Quantum Mechanics*, 2e (2017), Ch. 1.1–1.2
  - beginner: Susskind & Friedman, *Quantum Mechanics: The Theoretical Minimum* (2014), Lecture 1–2
- **notes**: (to be filled during production)


### quantum-mechanics.operators-observables-hermiticity

- **title**: Operators, observables, and Hermiticity
- **unit**: `12.02.02`
- **prerequisites**: `quantum-mechanics.wave-particle-duality`, `quantum-mechanics.stern-gerlach-spin-half`, `linalg.vector-space`
- **tier_anchors**:
  - master: Dirac, The Principles of Quantum Mechanics, 4e (1958), Ch. II-III; von Neumann, Mathematical Foundations of Quantum Mechanics (1932), Ch. II-III
  - intermediate: Sakurai & Napolitano, Modern Quantum Mechanics, 2e (2017), Ch. 1.2-1.4
  - beginner: Susskind & Friedman, Quantum Mechanics: The Theoretical Minimum (2014), Lectures 2-3
- **notes**: (to be filled during production)


### quantum-mechanics.bosonic-fock-space-second-quantisation

- **title**: Bosonic Fock space and second quantisation
- **unit**: `12.03.01`
- **prerequisites**: `linear-algebra.eigenvalue-eigenvector`, `functional-analysis.banach-space`, `functional-analysis.inner-product-space`, `functional-analysis.hilbert-space`, `functional-analysis.bounded-operators`, `functional-analysis.unbounded-self-adjoint`, `rep-theory.lie-algebra-representation`, `quantum-mechanics.stern-gerlach-spin-half`
- **tier_anchors**:
  - master: Reed, M. & Simon, B., *Methods of Modern Mathematical Physics*, Vol. II: *Fourier Analysis, Self-Adjointness* (Academic Press, 1975), §X.7 (Fock spaces, creation and annihilation operators, second quantisation); Bratteli, O. & Robinson, D. W., *Operator Algebras and Quantum Statistical Mechanics*, Vol. II, 2nd ed. (Springer, 1997), §5.2 (the bosonic Fock space and the Weyl CCR-algebra); Glimm, J. & Jaffe, A., *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987), Ch. 6; Cook, J. M., *Trans. Amer. Math. Soc.* 74, 222 (1953); Streater, R. F. & Wightman, A. S., *PCT, Spin and Statistics, and All That* (Benjamin, 1964; Princeton Landmarks reprint, 2000); Woit, P., *Quantum Theory, Groups and Representations* (Springer, 2017), Chs. 22–25
  - intermediate: Chatterjee, S., *Introduction to Quantum Field Theory for Mathematicians*, Stanford lecture notes (2022), Lecture 2; Folland, G. B., *Quantum Field Theory: A Tourist Guide for Mathematicians* (AMS Math. Surveys 149, 2008), Ch. 4–5; Hall, B. C., *Quantum Theory for Mathematicians* (Springer GTM 267, 2013), Chs. 11–14
  - beginner: Sakurai & Napolitano, *Modern Quantum Mechanics*, 2nd ed. (Pearson/Cambridge, 2011), Ch. 2 §2.3 (harmonic oscillator with ladder operators); Griffiths, *Introduction to Quantum Mechanics*, 2nd ed. (Pearson, 2005), Ch. 2 §2.3 (algebraic harmonic oscillator); Susskind & Friedman, *Quantum Mechanics: The Theoretical Minimum* (Basic Books, 2014), Lecture 10
- **notes**: (to be filled during production)


### quantum-mechanics.schrodinger-heisenberg-pictures

- **title**: Schrödinger and Heisenberg pictures
- **unit**: `12.03.01`
- **prerequisites**: `quantum-mechanics.hilbert-space-formalism`, `quantum-mechanics.wave-particle-duality`
- **tier_anchors**:
  - master: Dirac, The Principles of Quantum Mechanics, 4e (1958), Ch. III; von Neumann, Mathematical Foundations of Quantum Mechanics (1932), Ch. IV
  - intermediate: Sakurai & Napolitano, Modern Quantum Mechanics, 2e (2017), Ch. 2.1-2.2
  - beginner: Susskind & Friedman, Quantum Mechanics: The Theoretical Minimum (2014), Lectures 3-4
- **notes**: (to be filled during production)


### quantum-mechanics.fermionic-fock-space-pauli-anticommutators

- **title**: Fermionic Fock space, Pauli exclusion, and anticommutators
- **unit**: `12.03.02`
- **prerequisites**: `linear-algebra.eigenvalue-eigenvector`, `functional-analysis.banach-space`, `functional-analysis.inner-product-space`, `functional-analysis.hilbert-space`, `functional-analysis.bounded-operators`, `spin-geometry.clifford.clifford-algebra`, `rep-theory.lie-algebra-representation`, `quantum-mechanics.stern-gerlach-spin-half`, `quantum-mechanics.schrodinger-heisenberg-pictures`
- **tier_anchors**:
  - master: Bratteli, O. & Robinson, D. W., *Operator Algebras and Quantum Statistical Mechanics*, Vol. II, 2nd ed. (Springer, 1997), §5.2 (CAR-algebra, fermionic Fock representation, Pauli exclusion via the antisymmetric tensor algebra); Reed, M. & Simon, B., *Methods of Modern Mathematical Physics*, Vol. II: *Fourier Analysis, Self-Adjointness* (Academic Press, 1975), §X.7 (fermionic Fock space, $\\|a^*(f)\\| = \\|f\\|$ bound); Glimm, J. & Jaffe, A., *Quantum Physics: A Functional Integral Point of View*, 2nd ed. (Springer, 1987), Ch. 6 (Dirac field on fermionic Fock space); Streater, R. F. & Wightman, A. S., *PCT, Spin and Statistics, and All That* (Benjamin, 1964; Princeton Landmarks reprint, 2000), Ch. 4 (spin-statistics theorem); Lawson, H. B. & Michelsohn, M.-L., *Spin Geometry* (Princeton, 1989), Ch. I (Clifford algebras and the CAR algebra as the relevant Clifford structure); Jordan, P. & Wigner, E., *Z. Phys.* 47, 631 (1928) (originator paper for fermionic anticommutation and the Jordan-Wigner transformation)
  - intermediate: Folland, G. B., *Quantum Field Theory: A Tourist Guide for Mathematicians* (AMS Math. Surveys 149, 2008), Ch. 4 (Fock spaces, bosonic and fermionic); Hall, B. C., *Quantum Theory for Mathematicians* (Springer GTM 267, 2013), Ch. 19 (systems of identical particles, antisymmetric tensor products, Slater determinants); Chatterjee, S., *Introduction to Quantum Field Theory for Mathematicians*, Stanford lecture notes (2022), Lecture 2 (Fock spaces); Berezin, F. A., *The Method of Second Quantization* (Academic Press, 1966), Part II (fermionic case)
  - beginner: Sakurai & Napolitano, *Modern Quantum Mechanics*, 2nd ed. (Pearson/Cambridge, 2011), Ch. 7 (identical particles and second quantisation); Griffiths, *Introduction to Quantum Mechanics*, 2nd ed. (Pearson, 2005), Ch. 5 §5.2 (identical particles, bosons and fermions, Pauli exclusion); Susskind & Friedman, *Quantum Mechanics: The Theoretical Minimum* (Basic Books, 2014), Lecture 7 (entanglement) and Lecture 10 (particle statistics in passing)
- **notes**: (to be filled during production)


### quantum-mechanics.particle-in-a-box

- **title**: Particle in a box
- **unit**: `12.04.01`
- **prerequisites**: `quantum-mechanics.hilbert-space-formalism`, `quantum-mechanics.operators-observables-hermiticity`
- **tier_anchors**:
  - master: Dirac, The Principles of Quantum Mechanics, 4e (1958), Ch. III; Messiah, Quantum Mechanics, Vol. 1 (Dover, 1999), Ch. III
  - intermediate: Griffiths & Schroeter, Introduction to Quantum Mechanics, 3e (Cambridge, 2018), Ch. 2.1-2.2
  - beginner: Susskind & Friedman, Quantum Mechanics: The Theoretical Minimum (2014), Lecture 4
- **notes**: (to be filled during production)


### quantum-mechanics.quantum-harmonic-oscillator

- **title**: Quantum harmonic oscillator
- **unit**: `12.04.02`
- **prerequisites**: `quantum-mechanics.operators-observables-hermiticity`, `quantum-mechanics.hilbert-space-formalism`
- **tier_anchors**:
  - master: Dirac, The Principles of Quantum Mechanics, 4e (1958), Ch. IV; Messiah, Quantum Mechanics, Vol. 1, Ch. V
  - intermediate: Griffiths & Schroeter, Introduction to Quantum Mechanics, 3e (Cambridge, 2018), Ch. 2.3
  - beginner: Susskind & Friedman, Quantum Mechanics: The Theoretical Minimum (2014), Lecture 5
- **notes**: (to be filled during production)


### quantum-mechanics.angular-momentum-su2

- **title**: Angular momentum operators and SU(2) representations
- **unit**: `12.05.01`
- **prerequisites**: `quantum-mechanics.hilbert-space-formalism`, `quantum-mechanics.stern-gerlach-spin-half`
- **tier_anchors**:
  - master: Dirac, The Principles of Quantum Mechanics, 4e (1958), Ch. IV; Wigner, Group Theory and its Application to the Quantum Mechanics of Atomic Spectra (1931)
  - intermediate: Sakurai & Napolitano, Modern Quantum Mechanics, 2e (Cambridge, 2017), Ch. 3.1-3.5
  - beginner: Susskind & Friedman, Quantum Mechanics: The Theoretical Minimum (2014), Lecture 6
- **notes**: (to be filled during production)


### quantum-mechanics.hydrogen-atom-bound-states

- **title**: Hydrogen atom bound states
- **unit**: `12.06.01`
- **prerequisites**: `quantum-mechanics.particle-in-a-box`, `quantum-mechanics.operators-observables-hermiticity`
- **tier_anchors**:
  - master: Pauli 1926; Fock 1935; Bander & Itzykson, Rev. Mod. Phys. 38, 330 (1966)
  - intermediate: Griffiths & Schroeter, Introduction to Quantum Mechanics, 3e (Cambridge, 2018), Ch. 4.1-4.3
  - beginner: Susskind & Friedman, Quantum Mechanics: The Theoretical Minimum (2014), Lecture 7
- **notes**: (to be filled during production)


### quantum-mechanics.time-independent-perturbation-theory

- **title**: Time-independent perturbation theory
- **unit**: `12.07.01`
- **prerequisites**: `quantum-mechanics.particle-in-a-box`, `quantum-mechanics.operators-observables-hermiticity`
- **tier_anchors**:
  - master: Kato, Perturbation Theory for Linear Operators (Springer, 1966); Epstein 1916
  - intermediate: Sakurai & Napolitano, Modern Quantum Mechanics, 2e (2017), Ch. 5.1-5.2
  - beginner: Griffiths & Schroeter, Introduction to Quantum Mechanics, 3e (2018), Ch. 7 intro
- **notes**: (to be filled during production)


### quantum-mechanics.path-integral-formulation

- **title**: Path integral formulation of quantum mechanics
- **unit**: `12.10.01`
- **prerequisites**: `quantum-mechanics.quantum-harmonic-oscillator`, `classical-mechanics.action-principle`
- **tier_anchors**:
  - master: Feynman & Hibbs, Quantum Mechanics and Path Integrals (1965); Kleinert, Path Integrals (2009)
  - intermediate: Sakurai & Napolitano, Modern Quantum Mechanics, 2e (2017), Ch. 2.5-2.6
  - beginner: Feynman, QED: The Strange Theory of Light and Matter (1985)
- **notes**: (to be filled during production)


### quantum-mechanics.dirac-equation-relativistic-spin

- **title**: Dirac equation and relativistic spin
- **unit**: `12.11.01`
- **prerequisites**: `quantum-mechanics.schrodinger-heisenberg-pictures`, `electromagnetism.special-relativity-lorentz`
- **tier_anchors**:
  - master: Dirac, The Principles of Quantum Mechanics, 4e (1958), Ch. XI; Bjorken & Drell, Relativistic Quantum Mechanics (1964)
  - intermediate: Griffiths, Introduction to Elementary Particles, 2e (2008), Ch. 7
  - beginner: Feynman, QED: The Strange Theory of Light and Matter (1985)
- **notes**: (to be filled during production)


### general-relativity.equivalence-principle

- **title**: The equivalence principle
- **unit**: `13.01.01`
- **prerequisites**: `classical-mechanics.newtons-laws`
- **tier_anchors**:
  - master: Will, Theory and Experiment in Gravitational Physics, 2e (2018); Norton, 'What was Einstein's Principle of Equivalence?' (1985)
  - intermediate: Schutz, A First Course in General Relativity, 2e (2009), Ch. 1, 5
  - beginner: Hartle, Gravity: An Introduction to Einstein's General Relativity (2003), Ch. 1-2
- **notes**: (to be filled during production)


### general-relativity.tensors-smooth-manifolds

- **title**: Tensors on smooth manifolds
- **unit**: `13.02.01`
- **prerequisites**: `algebra.tensor-product`, `electromagnetism.special-relativity-lorentz`
- **tier_anchors**:
  - master: Wald, General Relativity (1984), Ch. 2-3; Carroll, Spacetime and Geometry (2004), Ch. 2
  - intermediate: Schutz, A First Course in General Relativity, 2e (2009), Ch. 3-4
  - beginner: Hartle, Gravity (2003), Ch. 3-4
- **notes**: (to be filled during production)


### general-relativity.geodesics-parallel-transport

- **title**: Geodesics and parallel transport
- **unit**: `13.02.02`
- **prerequisites**: `algebra.tensor-product`, `classical-mechanics.action-principle`
- **tier_anchors**:
  - master: Wald, General Relativity (1984), Ch. 3; do Carmo, Riemannian Geometry (1992), Ch. 3
  - intermediate: Schutz, A First Course in General Relativity, 2e (2009), Ch. 6
  - beginner: Hartle, Gravity (2003), Ch. 5-6
- **notes**: (to be filled during production)


### general-relativity.riemann-curvature-tensor

- **title**: Riemann curvature tensor
- **unit**: `13.03.01`
- **prerequisites**: `general-relativity.tensors-smooth-manifolds`
- **tier_anchors**:
  - master: Wald, *General Relativity* (1984), Ch. 3; Carroll, *Spacetime and Geometry* (2004), Ch. 3
  - intermediate: Schutz, *A First Course in General Relativity*, 2nd ed. (2009), Ch. 6; Carroll, *Spacetime and Geometry* (2004), Ch. 3
  - beginner: Hartle, *Gravity: An Introduction to Einstein's General Relativity* (2003), Ch. 6
- **notes**: (to be filled during production)


### general-relativity.einstein-field-equations

- **title**: Einstein field equations
- **unit**: `13.04.01`
- **prerequisites**: `general-relativity.tensors-smooth-manifolds`, `classical-mechanics.newtons-laws`
- **tier_anchors**:
  - master: Wald, General Relativity (1984), Ch. 4; Weinberg, Gravitation and Cosmology (1972), Ch. 7
  - intermediate: Schutz, A First Course in General Relativity, 2e (2009), Ch. 8
  - beginner: Hartle, Gravity: An Introduction to Einstein's General Relativity (2003), Ch. 8
- **notes**: (to be filled during production)


### general-relativity.schwarzschild-solution

- **title**: Schwarzschild solution
- **unit**: `13.05.01`
- **prerequisites**: `diffgeo.differential-forms`, `diffgeo.exterior-derivative`, `diffgeo.connection.vector-bundle-connection`, `bundle.connection.curvature`
- **tier_anchors**:
  - master: Wald — General Relativity Ch. 6; Misner-Thorne-Wheeler — Gravitation §31; Weinberg — Gravitation and Cosmology Ch. 8
  - intermediate: Schutz — A First Course in General Relativity Ch. 10–11; Hartle — Gravity Ch. 9; Carroll — Spacetime and Geometry Ch. 5
  - beginner: Susskind — General Relativity: Theoretical Minimum (selected lectures); Hartle — Gravity (intro chapters)
- **notes**: (to be filled during production)


### general-relativity.orbits-schwarzschild

- **title**: Orbits in Schwarzschild geometry
- **unit**: `13.05.02`
- **prerequisites**: `general-relativity.geodesics-parallel-transport`, `classical-mechanics.newtons-laws`
- **tier_anchors**:
  - master: Chandrasekhar — Mathematical Theory of Black Holes (1983) Ch. 3–4
  - intermediate: Schutz — A First Course in General Relativity Ch. 11; Hartle — Gravity Ch. 9
  - beginner: Hartle — Gravity Ch. 9 (selected sections on orbits and precession)
- **notes**: (to be filled during production)


### general-relativity.linearized-gr-gravitational-waves

- **title**: Linearized GR and gravitational waves
- **unit**: `13.07.01`
- **prerequisites**: `general-relativity.riemann-curvature-tensor`, `electromagnetism.em-waves-wave-equation`
- **tier_anchors**:
  - master: Misner, Thorne & Wheeler, Gravitation (1973), Ch. 35-36; Maggiore, Gravitational Waves Vol. 1 (2008)
  - intermediate: Schutz, A First Course in General Relativity, 2e (2009), Ch. 9
  - beginner: Hartle, Gravity: An Introduction to Einstein's General Relativity (2003), Ch. 23
- **notes**: (to be filled during production)


### general-relativity.flrw-cosmology-friedmann

- **title**: FLRW cosmology and Friedmann equations
- **unit**: `13.08.01`
- **prerequisites**: `general-relativity.tensors-smooth-manifolds`, `electromagnetism.special-relativity-lorentz`
- **tier_anchors**:
  - master: Weinberg, *Cosmology* (Oxford, 2008); Dodelson, *Modern Cosmology* (2003)
  - intermediate: Schutz, *A First Course in General Relativity*, 2e (2009), Ch. 12
  - beginner: Hartle, *Gravity: An Introduction to Einstein's General Relativity* (2003), Ch. 18-19
- **notes**: (to be filled during production)


## Chemistry (§14–16)

### chemistry.atomic-structure-electron-configurations

- **title**: Atomic structure and electron configurations
- **unit**: `14.01.01`
- **prerequisites**: `quantum-mechanics.angular-momentum-su2`
- **tier_anchors**:
  - master: Levine, *Quantum Chemistry*, 7e (2014), Ch. 10-11
  - intermediate: Atkins, *Physical Chemistry*, 12e (2023), Ch. 8
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 7
- **notes**: (to be filled during production)


### chemistry.lewis-structures-vsepr

- **title**: Lewis structures and VSEPR
- **unit**: `14.02.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Gillespie & Higgitt, *VSEPR Theory*; Gillespie & Robinson 1961
  - intermediate: Atkins & de Paula, *Physical Chemistry*, 12e (2023), Ch. 2
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 9
- **notes**: (to be filled during production)


### chemistry.hybridization-valence-bond

- **title**: Hybridization and valence bond theory
- **unit**: `14.02.02`
- **prerequisites**: `chemistry.atomic-structure-electron-configurations`
- **tier_anchors**:
  - master: Pauling, *The Nature of the Chemical Bond*, 3e (1960)
  - intermediate: Clayden, Greeves, Warren & Wothers, *Organic Chemistry*, 2e (2012), Ch. 4
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 10
- **notes**: (to be filled during production)


### chemistry.stoichiometry-gas-laws

- **title**: Stoichiometry and gas laws
- **unit**: `14.03.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Atkins Ch. 1 + statistical-mechanics perspective on the ideal gas law
  - intermediate: Atkins & de Paula, *Physical Chemistry*, 12e (2023), Ch. 1
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 4-5
- **notes**: (to be filled during production)


### chemistry.hydrogen-atom-quantum-chemistry

- **title**: Hydrogen atom quantum chemistry
- **unit**: `14.04.01`
- **prerequisites**: `chemistry.atomic-structure-electron-configurations`
- **tier_anchors**:
  - master: Levine, *Quantum Chemistry*, 7e (2014), Ch. 6-7
  - intermediate: McQuarrie, *Quantum Chemistry*, 2e (2008), Ch. 6
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 7
- **notes**: (to be filled during production)


### physical-chemistry.mo-theory-homonuclear-diatomics

- **title**: Molecular orbital theory for homonuclear diatomics
- **unit**: `14.05.02`
- **prerequisites**: `linear-algebra.eigenvalue-eigenvector`, `rep-theory.group-representation`, `rep-theory.character`
- **tier_anchors**:
  - master: McQuarrie — *Quantum Chemistry* Ch. 8–9; Levine — *Quantum Chemistry* Ch. 13–14; Szabo-Ostlund — *Modern Quantum Chemistry* (LCAO foundations)
  - intermediate: Atkins & de Paula — *Physical Chemistry* Ch. 10–11; Housecroft-Sharpe — *Inorganic Chemistry* Ch. 2 (MO for diatomics)
  - beginner: Tro — *Chemistry: A Molecular Approach* (intro chapters on bonding); Khan Academy Chemistry; Crash Course Chemistry on bonding
- **notes**: (to be filled during production)


### chemistry.chemical-thermodynamics-equilibrium

- **title**: Chemical thermodynamics: free energies and equilibrium
- **unit**: `14.06.01`
- **prerequisites**: `chemistry.stoichiometry-gas-laws`
- **tier_anchors**:
  - master: Callen, *Thermodynamics and an Introduction to Thermostatistics*, 2e (1985)
  - intermediate: Atkins & de Paula, *Physical Chemistry*, 12e (2023), Ch. 3
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 17-18
- **notes**: (to be filled during production)


### chemistry.chemical-kinetics-rate-laws

- **title**: Chemical kinetics: rate laws and the Arrhenius equation
- **unit**: `14.08.01`
- **prerequisites**: `chemistry.stoichiometry-gas-laws`
- **tier_anchors**:
  - master: Laidler, *Chemical Kinetics*, 3e (1987)
  - intermediate: Atkins & de Paula, *Physical Chemistry*, 12e (2023), Ch. 22
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 13
- **notes**: (to be filled during production)


### chemistry.acid-base-bronsted-lewis-pka

- **title**: Acid-base chemistry: Bronsted-Lowry, Lewis, and pKa
- **unit**: `14.10.01`
- **prerequisites**: `chemistry.atomic-structure-electron-configurations`
- **tier_anchors**:
  - master: Albert & Serjeant, *The Determination of Ionization Constants*, (1984)
  - intermediate: Clayden, Greeves, Warren & Wothers, *Organic Chemistry*, 2e (2012), Ch. 8
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 16
- **notes**: (to be filled during production)


### chemistry.electrochemistry-nernst-cells

- **title**: Electrochemistry: the Nernst equation and electrochemical cells
- **unit**: `14.11.01`
- **prerequisites**: `chemistry.acid-base-bronsted-lewis-pka`
- **tier_anchors**:
  - master: Bard & Faulkner, *Electrochemical Methods*, 3e (2022)
  - intermediate: Atkins & de Paula, *Physical Chemistry*, 12e (2023), Ch. 7
  - beginner: Tro, *Chemistry: A Molecular Approach*, 6e (2023), Ch. 19
- **notes**: (to be filled during production)


### chemistry.structure-stereochemistry

- **title**: Structure of organic molecules — stereochemistry
- **unit**: `15.01.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Eliel & Wilen — Stereochemistry of Organic Compounds (Wiley, 1994); Anslyn & Dougherty — Modern Physical Organic Chemistry Ch. 6; March's Advanced Organic Chemistry 7th ed. Ch. 5
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 15–16 (Stereochemistry, stereoselectivity); Bruice — Organic Chemistry, stereochemistry chapters
  - beginner: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 14 (Stereochemistry)
- **notes**: (to be filled during production)


### chemistry.functional-groups-nomenclature

- **title**: Functional groups and nomenclature
- **unit**: `15.02.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: IUPAC — Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (Blue Book); Favre & Powell — Nomenclature of Organic Chemistry: IUPAC Recommendations and Preferred Names 2013 (RSC, 2014)
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 2–3 (Functional groups, nomenclature); Bruice — Organic Chemistry, nomenclature chapters
  - beginner: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 2 (Functional groups)
- **notes**: (to be filled during production)


### chemistry.acids-bases-organic

- **title**: Acids and bases in organic chemistry
- **unit**: `15.03.01`
- **prerequisites**: `chemistry.functional-groups-nomenclature`
- **tier_anchors**:
  - master: March's Advanced Organic Chemistry 7th ed. Ch. 8; Anslyn & Dougherty — Modern Physical Organic Chemistry Ch. 1 (thermodynamics of acids and bases)
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 8; Bruice — Organic Chemistry, acid-base chapters
  - beginner: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 8 (Acids and bases)
- **notes**: (to be filled during production)


### organic-chemistry.sn1-vs-sn2-mechanism

- **title**: SN1 vs SN2 substitution mechanisms
- **unit**: `15.04.02`
- **prerequisites**: `chemistry.chemical-kinetics-rate-laws`
- **tier_anchors**:
  - master: Carey & Sundberg — Advanced Organic Chemistry Part A 5th ed. Ch. 4 (nucleophilic substitution); Anslyn & Dougherty — Modern Physical Organic Chemistry Ch. 11; March's Advanced Organic Chemistry 7th ed. Ch. 10; Lowry & Richardson — Mechanism and Theory in Organic Chemistry Ch. 4
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 15 (nucleophilic substitution at saturated carbon); Vollhardt-Schore — Organic Chemistry Ch. 6–7; Bruice — Organic Chemistry intermediate sections; Carey & Giuliano — Organic Chemistry Ch. 8
  - beginner: Klein — Organic Chemistry as a Second Language (substitution chapters); Crash Course Organic Chemistry (substitution episodes); Vollhardt-Schore — Organic Chemistry, beginner-tier sections of Ch. 6–7
- **notes**: (to be filled during production)


### chemistry.electrophilic-addition-alkenes

- **title**: Electrophilic addition to alkenes
- **unit**: `15.05.01`
- **prerequisites**: `chemistry.acid-base-bronsted-lewis-pka`
- **tier_anchors**:
  - master: Carey & Sundberg — Advanced Organic Chemistry Part A 5th ed. Ch. 6; March's Advanced Organic Chemistry 7th ed. Ch. 11
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 19–20; Bruice — Organic Chemistry, addition chapters
  - beginner: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 19 (Electrophilic addition to alkenes)
- **notes**: (to be filled during production)


### chemistry.aromatic-chemistry-eas-huckel

- **title**: Aromatic chemistry — EAS, Huckel
- **unit**: `15.06.01`
- **prerequisites**: `chemistry.structure-stereochemistry`
- **tier_anchors**:
  - master: March's Advanced Organic Chemistry 7th ed. Ch. 11; Carey & Sundberg — Advanced Organic Chemistry Part A 5th ed. Ch. 10
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 22–23; Bruice — Organic Chemistry, aromatic chapters
  - beginner: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 22 (Aromatic chemistry)
- **notes**: (to be filled during production)


### chemistry.carbonyl-nucleophilic-addition

- **title**: Carbonyl chemistry — nucleophilic addition
- **unit**: `15.07.01`
- **prerequisites**: `chemistry.functional-groups-nomenclature`
- **tier_anchors**:
  - master: March's Advanced Organic Chemistry 7th ed. Ch. 16; Carey & Sundberg — Advanced Organic Chemistry Part A 5th ed. Ch. 3, 9
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 9–10; Bruice — Organic Chemistry, carbonyl chapters
  - beginner: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 6 (Nucleophilic addition to carbonyl groups), Ch. 9 (Using organometallic reagents to make C-C bonds)
- **notes**: (to be filled during production)


### chemistry.retrosynthetic-analysis

- **title**: Retrosynthetic analysis
- **unit**: `15.10.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Carey & Sundberg — Advanced Organic Chemistry Part B 5th ed. Ch. 1–2; Warren — Organic Synthesis: The Disconnection Approach 2nd ed.; Nicolaou & Sorensen — Classics in Total Synthesis
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 28 (Retrosynthetic analysis); Bruice — Organic Chemistry, synthesis chapters
  - beginner: Klein — Organic Chemistry as a Second Language, retrosynthesis chapters; Crash Course Organic Chemistry — Synthesis and Retrosynthesis
- **notes**: (to be filled during production)


### chemistry.nmr-spectroscopy-organic

- **title**: NMR spectroscopy of organic molecules
- **unit**: `15.11.01`
- **prerequisites**: `organic-chemistry.sn1-vs-sn2-mechanism`
- **tier_anchors**:
  - master: Keeler — Understanding NMR Spectroscopy, 2nd ed.; Ernst, Bodenhausen & Wokaun — Principles of Nuclear Magnetic Resonance in One and Two Dimensions
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 13 (NMR spectroscopy); Pavia — Introduction to Spectroscopy
  - beginner: Klein — Organic Chemistry as a Second Language, spectroscopy chapters; Crash Course Organic Chemistry — NMR episodes
- **notes**: (to be filled during production)


### chemistry.amino-acids-protein-chemistry

- **title**: Amino acids and protein chemistry
- **unit**: `15.12.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Carey & Sundberg — Advanced Organic Chemistry Part A, peptide chemistry sections; Voet & Voet — Biochemistry Ch. 4–6; Walsh — Tetrahedron report on peptide synthesis
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 42 (The organic chemistry of life); Lehninger — Biochemistry Ch. 3–4
  - beginner: Klein — Organic Chemistry as a Second Language, bioorganic chapters; Crash Course Biology — Biomolecules
- **notes**: (to be filled during production)


### chemistry.nucleic-acid-chemistry

- **title**: Nucleic acid chemistry
- **unit**: `15.13.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Carey & Sundberg — Advanced Organic Chemistry Part A; Blackburn — Nucleic Acids: Structures, Properties, and Functions; Saenger — Principles of Nucleic Acid Structure
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 42; Voet & Voet — Biochemistry Ch. 8–10
  - beginner: Klein — Organic Chemistry as a Second Language, bioorganic chapters; Crash Course Biology — DNA and RNA
- **notes**: (to be filled during production)


### chemistry.enzyme-mechanism

- **title**: Enzyme mechanism
- **unit**: `15.14.01`
- **prerequisites**: `chemistry.chemical-kinetics-rate-laws`
- **tier_anchors**:
  - master: Carey & Sundberg — Advanced Organic Chemistry Part A; Fersht — Enzyme Structure and Mechanism; Silverman — The Organic Chemistry of Enzyme-Catalyzed Reactions
  - intermediate: Clayden, Greeves & Warren — Organic Chemistry 2nd ed. Ch. 42; Voet & Voet — Biochemistry Ch. 11–12; Lehninger — Biochemistry Ch. 6
  - beginner: Crash Course Biology — Enzymes; Khan Academy — Enzyme catalysis
- **notes**: (to be filled during production)


### chemistry.periodic-trends-quantified

- **title**: Periodic trends quantified
- **unit**: `16.01.01`
- **prerequisites**: `chemistry.hydrogen-atom-quantum-chemistry`
- **tier_anchors**:
  - master: Cotton & Wilkinson — Advanced Inorganic Chemistry, Ch. 1; Greenwood & Earnshaw — Chemistry of the Elements, Ch. 1–2
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 1; Miessler, Fischer & Tarr — Inorganic Chemistry, Ch. 2
  - beginner: Crash Course Chemistry — The Periodic Table; Khan Academy — Periodic trends
- **notes**: (to be filled during production)


### chemistry.symmetry-group-theory-chemistry

- **title**: Symmetry and group theory in chemistry
- **unit**: `16.02.01`
- **prerequisites**: `chemistry.periodic-trends-quantified`
- **tier_anchors**:
  - master: Cotton — Chemical Applications of Group Theory, 3rd ed.; Bishop — Group Theory and Chemistry
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 4; Miessler, Fischer & Tarr — Inorganic Chemistry, Ch. 4
  - beginner: Kettle — Symmetry and Structure; Crash Course Chemistry — Molecular Geometry
- **notes**: (to be filled during production)


### chemistry.crystal-field-theory-fundamentals

- **title**: Crystal field theory fundamentals
- **unit**: `16.03.01`
- **prerequisites**: `chemistry.symmetry-group-theory-chemistry`
- **tier_anchors**:
  - master: Cotton & Wilkinson — Advanced Inorganic Chemistry, Ch. 16–17; Ballhausen — Introduction to Ligand Field Theory
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 19; Miessler, Fischer & Tarr — Inorganic Chemistry, Ch. 10
  - beginner: Crash Course Chemistry — Transition Metals; Khan Academy — Transition metals
- **notes**: (to be filled during production)


### inorganic-chemistry.crystal-field-octahedral

- **title**: Crystal field splitting in octahedral complexes
- **unit**: `16.03.02`
- **prerequisites**: `rep-theory.character-orthogonality`, `quantum-mechanics.stern-gerlach-spin-half`, `chemistry.hydrogen-atom-quantum-chemistry`
- **tier_anchors**:
  - master: Cotton & Wilkinson — Advanced Inorganic Chemistry, Ch. 16–17; Crabtree — The Organometallic Chemistry of the Transition Metals, Ch. 1–2; Bersuker — Electronic Structure and Properties of Transition Metal Compounds
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 21 (d-block coordination chemistry); Miessler, Fischer & Tarr — Inorganic Chemistry, Ch. 10 (Crystal-field / Ligand-field theory)
  - beginner: Atkins / Shriver — Chemistry: A Very Short Introduction (Beginner sections); Crash Course Chemistry — Transition Metals
- **notes**: (to be filled during production)


### chemistry.coordination-chemistry

- **title**: Coordination chemistry
- **unit**: `16.04.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Cotton & Wilkinson — Advanced Inorganic Chemistry, Ch. 19–20; von Zelewsky — Stereochemistry of Coordination Compounds
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 7, 19; Miessler, Fischer & Tarr — Inorganic Chemistry, Ch. 9
  - beginner: Crash Course Chemistry — Transition Metals; Khan Academy — Coordination chemistry
- **notes**: (to be filled during production)


### chemistry.organometallic-16-18-electron

- **title**: Organometallic chemistry
- **unit**: `16.05.01`
- **prerequisites**: `chemistry.coordination-chemistry`
- **tier_anchors**:
  - master: Crabtree — Organometallic Chemistry, Ch. 1–6; Hartwig — Organotransition Metal Chemistry
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 20; Crabtree — Organometallic Chemistry of the Transition Metals, Ch. 1–4
  - beginner: Crash Course Chemistry — Organometallics; Crabtree Ch. 1 introductory material
- **notes**: (to be filled during production)


### chemistry.bioinorganic-metalloenzymes

- **title**: Bioinorganic chemistry
- **unit**: `16.06.01`
- **prerequisites**: `chemistry.coordination-chemistry`, `chemistry.enzyme-mechanism`
- **tier_anchors**:
  - master: Lippard & Berg — Principles of Bioinorganic Chemistry; Berg, Tymoczko & Stryer — Biochemistry Ch. 7; Bertini, Gray, Stiefel & Valentine — Biological Inorganic Chemistry
  - intermediate: Lippard, S. J. & Berg, J. M. — Principles of Bioinorganic Chemistry; Frausto da Silva & Williams — The Biological Chemistry of the Elements
  - beginner: Crash Course Biology — Enzymes; Lippard & Berg introductory chapters
- **notes**: (to be filled during production)


### chemistry.solid-state-chemistry

- **title**: Solid-state chemistry
- **unit**: `16.07.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: West, A. R. — Solid State Chemistry; Kittel — Introduction to Solid State Physics, Ch. 1–7
  - intermediate: Housecroft & Sharpe — Inorganic Chemistry, Ch. 6; West — Solid State Chemistry and its Applications
  - beginner: Crash Course Chemistry — Network Solids; Khan Academy — Solids
- **notes**: (to be filled during production)


## Biology (§17–19)

### symplectic.souriau-gibbs-state

- **title**: Souriau Gibbs state on a symplectic G-space
- **unit**: `11.04.02`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Souriau 1970 Ch. III-IV; Kirillov 1976 Lectures on the Orbit Method; Marle 2016
  - intermediate: Souriau 1970 Ch. IV; Marsden-Ratiu Ch. 9; Guillemin-Sternberg 1984
  - beginner: Souriau 1970 Ch. IV informal; Strogatz-style thermal equilibrium
- **notes**: (to be filled during production)


### biology.biomolecules-cells-overview

- **title**: Biomolecules in cells
- **unit**: `17.01.01`
- **prerequisites**: `chemistry.lewis-structures-vsepr`
- **tier_anchors**:
  - master: Alberts et al., MBoC 7e; Stryer et al., Biochemistry 9e; Voet & Voet, Biochemistry, 5th ed. (2019), Ch. 1-3
  - intermediate: Alberts et al., MBoC 7e, Ch. 2; Berg, Tymoczko & Stryer, Biochemistry, 9th ed. (2019), Ch. 1-3
  - beginner: Alberts et al., Molecular Biology of the Cell, 7th ed. (2022), Ch. 2
- **notes**: (to be filled during production)


### biology.cell-membranes-structure

- **title**: Cell membranes: structure
- **unit**: `17.02.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Alberts et al., MBoC 7e; Stryer et al., Biochemistry 9e; Gennis, Biomembranes: Molecular Structure and Function (1989)
  - intermediate: Alberts et al., MBoC 7e, Ch. 10; Berg, Tymoczko & Stryer, Biochemistry, 9th ed. (2019), Ch. 11
  - beginner: Alberts et al., Molecular Biology of the Cell, 7th ed. (2022), Ch. 10
- **notes**: (to be filled during production)


### biology.membrane-transport

- **title**: Membrane transport
- **unit**: `17.02.02`
- **prerequisites**: `chemistry.electrochemistry-nernst-cells`
- **tier_anchors**:
  - master: Alberts et al., MBoC 7e; Gennis, Biomembranes (1989); Hille, Ion Channels of Excitable Membranes, 4th ed. (2021)
  - intermediate: Alberts et al., MBoC 7e, Ch. 11; Berg, Tymoczko & Stryer, Biochemistry, 9th ed. (2019), Ch. 13
  - beginner: Alberts et al., Molecular Biology of the Cell, 7th ed. (2022), Ch. 11
- **notes**: (to be filled during production)


### biology.cellular-organization-organelles

- **title**: Cellular organization: organelles
- **unit**: `17.03.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Alberts et al., MBoC 7e; Palade, Nobel Lecture 1974; Rothman, Nobel Lecture 2013
  - intermediate: Alberts et al., MBoC 7e, Ch. 12-14; Lodish et al., Molecular Cell Biology, 9th ed. (2023), Ch. 12-13
  - beginner: Alberts et al., Molecular Biology of the Cell, 7th ed. (2022), Ch. 12-13
- **notes**: (to be filled during production)


### biology.cytoskeleton-contractile

- **title**: Cytoskeleton and contractile proteins
- **unit**: `17.03.02`
- **prerequisites**: `biology.skeletal-muscle-physiology`
- **tier_anchors**:
  - master: Alberts et al., MBoC 7e; Howard, Mechanics of Motor Proteins and the Cytoskeleton (2001); Bray, Cell Movements, 2nd ed. (2001)
  - intermediate: Alberts et al., MBoC 7e, Ch. 16; Lodish et al., Molecular Cell Biology, 9th ed. (2023), Ch. 17
  - beginner: Alberts et al., Molecular Biology of the Cell, 7th ed. (2022), Ch. 16
- **notes**: (to be filled during production)


### biology.cellular-respiration-glycolysis-cac

- **title**: Cellular respiration: glycolysis and CAC
- **unit**: `17.04.01`
- **prerequisites**: `chemistry.chemical-thermodynamics-equilibrium`
- **tier_anchors**:
  - master: Alberts et al., MBoC 7e; Berg et al., Biochemistry 9e; Nicholls & Ferguson, Bioenergetics, 4th ed. (2013)
  - intermediate: Alberts et al., MBoC 7e, Ch. 14; Berg, Tymoczko & Stryer, Biochemistry, 9th ed. (2019), Ch. 14-16
  - beginner: Alberts et al., Molecular Biology of the Cell, 7th ed. (2022), Ch. 14
- **notes**: (to be filled during production)


### biology.oxidative-phosphorylation

- **title**: Oxidative phosphorylation and ATP synthesis
- **unit**: `17.04.02`
- **prerequisites**: `chemistry.electrochemistry-nernst-cells`
- **tier_anchors**:
  - master: Nicholls & Ferguson, *Bioenergetics* (4th ed., Academic Press 2013); Mitchell, *Chemiosmotic coupling in oxidative and photosynthetic phosphorylation* (1966); Boyer, *The ATP synthase — a splendid molecular machine* (1997, Annu. Rev. Biochem. 66, 717-749)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 14 *Energy Generation in Mitochondria and Chloroplasts*; Stryer, *Biochemistry* (8th ed., W. H. Freeman 2015), Ch. 18
  - beginner: Khan Academy (cellular respiration series); PhET Simulation — Energy Forms and Changes
- **notes**: (to be filled during production)


### biology.photosynthesis

- **title**: Photosynthesis: light and dark reactions
- **unit**: `17.04.03`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Blankenship, *Molecular Mechanisms of Photosynthesis* (2nd ed., Wiley-Blackwell 2014); Bassham, Benson & Calvin, *The Path of Carbon in Photosynthesis* (1950); Hill & Bendall, *Function of the two cytochrome components in chloroplasts: a working hypothesis* (1960)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 14; Campbell & Farrell, *Biochemistry* (7th ed., Cengage 2018), Ch. 17
  - beginner: Khan Academy (photosynthesis series); Crash Course Biology #8
- **notes**: (to be filled during production)


### biology.dna-replication

- **title**: DNA replication
- **unit**: `17.05.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Kornberg & Baker, *DNA Replication* (2nd ed., W. H. Freeman 2005); Meselson & Stahl 1958; Okazaki et al. 1968; Gilbert & Maxam 1973
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 5 *DNA Replication, Repair, and Recombination*; Watson et al., *Molecular Biology of the Gene* (7th ed., Pearson 2014), Ch. 8
  - beginner: Khan Academy (DNA replication series); Amoeba Sisters — DNA Structure & Replication
- **notes**: (to be filled during production)


### biology.transcription

- **title**: Transcription
- **unit**: `17.05.02`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Ptashne & Gann, *Genes and Signals* (2002); Kornberg, *The Molecular Basis of Eukaryotic Transcription* (Nobel Lecture 2006); Cramer et al., *Structural biology of RNA polymerase II* (2008)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 6 *How Cells Read the Genome: From DNA to Protein*; Lodish et al., *Molecular Cell Biology* (8th ed., W. H. Freeman 2016), Ch. 5
  - beginner: Khan Academy (transcription and translation); Amoeba Sisters — DNA to Protein
- **notes**: (to be filled during production)


### biology.translation

- **title**: Translation
- **unit**: `17.05.03`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Steitz, *A structural understanding of the dynamic ribosome machine* (2008 Nobel Lecture); Noller, *Evolution of protein synthesis from an RNA world* (2004); Ramakrishnan, *Ribosome Structure and the Mechanism of Translation* (2002)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 6; Lodish et al., *Molecular Cell Biology* (8th ed., W. H. Freeman 2016), Ch. 5
  - beginner: Khan Academy (translation); Amoeba Sisters — Protein Synthesis
- **notes**: (to be filled during production)


### biology.mutation-repair

- **title**: Mutation and repair
- **unit**: `17.06.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Friedberg et al., *DNA Repair and Mutagenesis* (2nd ed., ASM Press 2006); Lindahl — Instability and decay of the primary structure of DNA (1993 Nature); Modrich — Mechanisms in eukaryotic DNA mismatch repair (2006)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 5 *DNA Replication, Repair, and Recombination*; Strachan & Read, *Human Molecular Genetics* (5th ed., Garland 2019)
  - beginner: Khan Academy (mutations); Amoeba Sisters — Mutations
- **notes**: (to be filled during production)


### biology.cell-signaling-gpcrs

- **title**: Cell signaling: receptors and GPCRs
- **unit**: `17.07.01`
- **prerequisites**: `biology.transcription`
- **tier_anchors**:
  - master: Gilman, *G Proteins and Regulation of Adenylyl Cyclase* (Nobel Lecture 1994); Rosenbaum et al., *The structure and function of G-protein-coupled receptors* (2009); Pierce et al., *Signal transduction — principles, pathways, and processes* (2002)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 15 *Cell Signaling*; Lodish et al., *Molecular Cell Biology* (8th ed., W. H. Freeman 2016), Ch. 15
  - beginner: Khan Academy (cell signaling); Crash Course Biology — Signal Transduction
- **notes**: (to be filled during production)


### biology.rtk-mapk-cascade

- **title**: Receptor tyrosine kinases and the MAPK signaling cascade
- **unit**: `17.07.02`
- **prerequisites**: `biology.cell-signaling-gpcrs`
- **tier_anchors**:
  - master: Lemmon & Schlessinger — *Cell signaling by receptor tyrosine kinases* (Cell 2010); Huang & Ferrell — *Ultrasensitivity in the MAPK cascade* (PNAS 1996); Goldbeter & Koshland — *Amplified sensitivity from covalent modification* (PNAS 1981); Kholodenko — *Negative feedback and ultrasensitivity in MAPK cascades* (Eur. J. Biochem. 2000); Ferrell & Machleder — *Biochemical basis of an all-or-none cell fate switch* (Science 1998)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 15; Lodish et al., *Molecular Cell Biology* (8th ed., W. H. Freeman 2016), Ch. 16; Lehninger *Principles of Biochemistry* (7th ed., Macmillan 2017), Ch. 12
  - beginner: Khan Academy (intracellular signal transduction); Crash Course Biology — Signal Transduction; Amoeba Sisters — Cell Signaling
- **notes**: Receptor tyrosine kinases, ligand-induced dimerization and trans-autophosphorylation, GRB2-SOS adapter recruitment via SH2 phospho-tyrosine recognition, Ras GTP loading, and the three-tier Raf-MEK-ERK MAPK cascade. Quantitative content: Hill-function kinetics at each tier, Huang-Ferrell composition theorem for cascade ultrasensitivity, Goldbeter-Koshland zero-order ultrasensitivity, distributive multisite phosphorylation. Master tier covers four named sub-sections: stacked-Hill mathematics of ultrasensitivity; bistability via positive feedback (saddle-node bifurcations, oscillations from delayed negative feedback per Kholodenko); spatial dynamics including scaffold proteins, KSR, and reaction-diffusion gradients of active ERK; and cross-system connections to oncology via RTK/Ras/Raf mutations and clinical inhibitors (EGFR-TKIs, vemurafenib, trametinib, sotorasib).


### biology.cell-cycle-mitosis

- **title**: Cell cycle and mitosis
- **unit**: `17.08.01`
- **prerequisites**: `biology.cell-signaling-gpcrs`
- **tier_anchors**:
  - master: Nurse — Cyclin dependent kinases and regulation of the cell cycle (Nobel Lecture 2001); Hartwell et al. 1974 (cell cycle genetics); Novak & Tyson 1993 (numerical modeling of cell cycle oscillations)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 17 *The Cell Cycle*; Morgan, *The Cell Cycle: Principles of Control* (2nd ed., New Science Press 2007)
  - beginner: Khan Academy (cell cycle); Crash Course Biology — Mitosis
- **notes**: (to be filled during production)


### biology.resting-membrane-potential

- **title**: Resting membrane potential and ion channels
- **unit**: `17.09.01`
- **prerequisites**: `chemistry.electrochemistry-nernst-cells`
- **tier_anchors**:
  - master: Hille, *Ion Channels of Excitable Membranes* (3rd ed., Sinauer 2001), Ch. 1-4; Hodgkin & Huxley 1952; Nernst 1888; Goldman 1943
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 11; Kandel et al., *Principles of Neural Science* (5th ed., McGraw-Hill 2013), Ch. 6-7
  - beginner: Khan Academy (neuronal synapses); Crash Course — Nervous System
- **notes**: (to be filled during production)


### cellular-neuroscience.action-potential-ionic-basis

- **title**: The action potential — ionic basis
- **unit**: `17.09.02`
- **prerequisites**: `ode.limit-cycle-lienard`
- **tier_anchors**:
  - master: Hille, *Ion Channels of Excitable Membranes* (3rd ed., Sinauer 2001) — the canonical reference; Koch, *Biophysics of Computation* (Oxford University Press 1999), Chs. 6-7; Kandel et al., *Principles of Neural Science* (5th ed.) — advanced sections including patch-clamp and Markov-state modelling; Hodgkin & Huxley 1952 (*J. Physiol.* 117, 500-544) — the four foundational papers culminating in the quantitative description; Neher & Sakmann 1976 (*Nature* 260, 799-802) — patch-clamp recording of single-channel currents; Sakmann & Neher 1995 *Single-Channel Recording* (2nd ed., Plenum); Izhikevich, *Dynamical Systems in Neuroscience* (MIT Press 2007) — bifurcation analysis of HH and reduced models
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 11 *Membrane Transport of Small Molecules and the Electrical Properties of Membranes*; Boron & Boulpaep, *Medical Physiology* (3rd ed., Elsevier 2017), Ch. 7 *Electrophysiology of the Cell Membrane*; Kandel, Schwartz, Jessell, Siegelbaum, Hudspeth, *Principles of Neural Science* (5th ed., McGraw-Hill 2013), Part II *Cell and Molecular Biology of the Neuron*
  - beginner: Crash Course Biology / Anatomy & Physiology (neuron episodes); Nick Lane, *The Vital Question* (W. W. Norton 2015), chapters on the proton-motive force and the energetic basis of excitability
- **notes**: (to be filled during production)


### biology.innate-immunity

- **title**: Innate immunity at the molecular level
- **unit**: `17.10.01`
- **prerequisites**: `biology.biomolecules-cells-overview`
- **tier_anchors**:
  - master: Janeway et al., *Immunobiology* (9th ed., Garland 2017); Medzhitov & Janeway 2002 (Decoding the patterns of self and nonself); Beutler 2004 (TLRs and innate immunity, Nobel Lecture)
  - intermediate: Alberts et al., *Molecular Biology of the Cell* (6th ed., Garland 2014), Ch. 24 *The Innate and Adaptive Immune Systems*; Janeway et al., *Immunobiology* (9th ed., Garland 2017)
  - beginner: Khan Academy (immune system); Crash Course Biology — Immune System
- **notes**: (to be filled during production)


### biology.cardiovascular-physiology

- **title**: Cardiovascular physiology — the heart
- **unit**: `18.02.01`
- **prerequisites**: `biology.oxidative-phosphorylation`
- **tier_anchors**:
  - master: Boron-Boulpaep advanced sections; Noble et al. Cardiac Cellular Electrophysiology; Katz Physiology of the Heart 6th ed.; primary literature — Frank 1895, Starling 1918, Wiggers 1921
  - intermediate: Boron-Boulpaep Medical Physiology 3rd ed. Ch. 21-24 (Cardiovascular Physiology); Hall & Hall Guyton and Hall Textbook of Medical Physiology 14th ed. Ch. 9-13
  - beginner: Campbell Biology 12th ed. Ch. 42 (Circulation and Gas Exchange); Crash Course Anatomy & Physiology episodes on the heart; Khan Academy cardiovascular system modules
- **notes**: (to be filled during production)


### biology.respiratory-physiology

- **title**: Respiratory physiology — gas exchange and transport
- **unit**: `18.03.01`
- **prerequisites**: `biology.photosynthesis`
- **tier_anchors**:
  - master: Boron-Boulpaep advanced sections; West Ventilation/Blood Flow and Gas Exchange; primary literature — Bohr 1904, Haldane 1914, Fenn & Rahn 1954
  - intermediate: Boron-Boulpaep Medical Physiology 3rd ed. Ch. 26-32 (Respiratory Physiology); West Respiratory Physiology 10th ed.
  - beginner: Campbell Biology 12th ed. Ch. 42; Crash Course Anatomy & Physiology respiratory episodes; Khan Academy respiratory system modules
- **notes**: (to be filled during production)


### biology.skeletal-muscle-physiology

- **title**: Skeletal muscle physiology
- **unit**: `18.04.01`
- **prerequisites**: `biology.cytoskeleton-contractile`
- **tier_anchors**:
  - master: Boron-Boulpaep advanced sections; Hill 1938; Huxley 1957 cross-bridge model; Bagshaw 1993 muscle contraction; primary literature
  - intermediate: Boron-Boulpaep Medical Physiology 3rd ed. Ch. 9 (Cellular Physiology of Skeletal, Cardiac, and Smooth Muscle); McMahon Muscles, Reflexes, and Locomotion
  - beginner: Campbell Biology 12th ed. Ch. 50; Crash Course Anatomy & Physiology muscle episodes; Khan Academy muscle physiology modules
- **notes**: (to be filled during production)


### animal-physiology.muscle-contraction-actin-myosin

- **title**: Muscle contraction — the actin-myosin cycle
- **unit**: `18.04.02`
- **prerequisites**: `chemistry.enzyme-mechanism`, `biology.cytoskeleton-contractile`
- **tier_anchors**:
  - master: Boron-Boulpaep advanced sections (Ch. 9 §III–V); Hill *Animal Physiology* 4th ed. (muscle and locomotion); Squire *Molecular Mechanism of Muscular Contraction* (Springer 1981) and Squire *The Structural Basis of Muscular Contraction* (Plenum 1981); primary literature — Huxley & Hanson 1954, Hill 1938, Lymn & Taylor 1971, Huxley & Simmons 1971, Rayment et al. 1993, Finer-Simmons-Spudich 1994
  - intermediate: Boron-Boulpaep *Medical Physiology* 3rd ed. Ch. 9 (Cellular Physiology of Skeletal, Cardiac, and Smooth Muscle); Alberts et al. *Molecular Biology of the Cell* 6th ed. Ch. 16 (The Cytoskeleton, §16.4 Molecular Motors); Campbell *Biology* 11th ed. Ch. 50 (Sensory and Motor Mechanisms)
  - beginner: Crash Course Anatomy & Physiology (muscle episodes 21–22); Campbell *Biology* intro chapters on muscle physiology; Khan Academy muscle modules
- **notes**: (to be filled during production)


### biology.nervous-system

- **title**: Nervous system — gross anatomy and functional organisation
- **unit**: `18.05.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Kandel advanced sections; Nieuwenhuys et al. The Human Central Nervous System 4th ed.; primary literature — Cajal 1904, Sherrington 1906
  - intermediate: Kandel et al. Principles of Neural Science 6th ed. Ch. 1-18; Boron-Boulpaep Medical Physiology 3rd ed. Ch. 11-17
  - beginner: Campbell Biology 12th ed. Ch. 48-49; Crash Course Anatomy & Physiology nervous system episodes; Khan Academy neuroanatomy modules
- **notes**: (to be filled during production)


### biology.endocrine-hormones

- **title**: Endocrine system — hormones and regulation
- **unit**: `18.07.01`
- **prerequisites**: `biology.nervous-system`
- **tier_anchors**:
  - master: Boron-Boulpaep advanced sections; Williams Textbook of Endocrinology 14th ed.; primary literature — Bayliss & Starling 1902, Harris 1955, Schally & Guillemin 1970s
  - intermediate: Boron-Boulpaep Medical Physiology 3rd ed. Ch. 47-55; Guyton and Hall Textbook of Medical Physiology 14th ed. Ch. 73-84
  - beginner: Campbell Biology 12th ed. Ch. 45; Crash Course Anatomy & Physiology endocrine episodes; Khan Academy endocrine system modules
- **notes**: (to be filled during production)


### biology.renal-physiology

- **title**: Renal physiology — homeostasis and the nephron
- **unit**: `18.08.01`
- **prerequisites**: `chemistry.acid-base-bronsted-lewis-pka`
- **tier_anchors**:
  - master: Boron-Boulpaep advanced sections; Brenner and Rector The Kidney 11th ed.; primary literature — Bowman 1842, Starling 1896, Richards 1930s
  - intermediate: Boron-Boulpaep Medical Physiology 3rd ed. Ch. 33-40 (Renal Physiology); Guyton and Hall Textbook of Medical Physiology 14th ed. Ch. 25-31
  - beginner: Campbell Biology 12th ed. Ch. 44; Crash Course Anatomy & Physiology urinary system episodes; Khan Academy renal physiology modules
- **notes**: (to be filled during production)


### biology.embryology-morphogenesis

- **title**: Embryology and morphogenesis
- **unit**: `18.11.01`
- **prerequisites**: `biology.cell-cycle-mitosis`
- **tier_anchors**:
  - master: Gilbert advanced sections; primary literature — Spemann & Mangold 1924, Nusslein-Volhard & Wieschaus 1980, Driever & Nusslein-Volhard 1988
  - intermediate: Gilbert Developmental Biology 12th ed. Ch. 1-12; Wolpert Principles of Development 6th ed.
  - beginner: Campbell Biology 12th ed. Ch. 46-47; Crash Course Biology development episodes; Khan Academy embryology modules
- **notes**: (to be filled during production)


### biology.mendelian-genetics

- **title**: Mendelian genetics — segregation and dominance
- **unit**: `19.01.01`
- **prerequisites**: `biology.mutation-repair`
- **tier_anchors**:
  - master: Hartl & Clark advanced sections; Crow & Kimura Introduction to Population Genetics Theory; primary literature — Mendel 1866
  - intermediate: Hartl & Clark Principles of Population Genetics 4th ed. Ch. 1; Futuyma Evolution 4th ed. Ch. 4
  - beginner: Campbell Biology 12th ed. Ch. 14; Crash Course Biology genetics episodes; Khan Academy Mendelian genetics modules
- **notes**: (to be filled during production)


### population-genetics.hardy-weinberg

- **title**: Hardy-Weinberg equilibrium
- **unit**: `19.02.01`
- **prerequisites**: `biology.mendelian-genetics`
- **tier_anchors**:
  - master: Charlesworth & Charlesworth, *Elements of Evolutionary Genetics* (Roberts, 2010), Ch. 2 + Ch. 5; Crow & Kimura, *An Introduction to Population Genetics Theory* (Harper & Row, 1970), Ch. 1–3; Walsh & Lynch, *Evolution and Selection of Quantitative Traits* (Oxford, 2018), Ch. 1; Ewens, *Mathematical Population Genetics I* 2nd ed. (Springer, 2004), Ch. 1–3
  - intermediate: Hartl & Clark, *Principles of Population Genetics* 4th ed. Ch. 2–3; Futuyma, *Evolution* 4th ed. (Sinauer, 2017), Ch. 8 (variation in populations); Gillespie, *Population Genetics: A Concise Guide* 2nd ed. (Johns Hopkins, 2004), Ch. 1–2
  - beginner: Coyne, *Why Evolution Is True* (Viking, 2009), Ch. 1 + Ch. 5; Crash Course Biology, *Population Genetics* episode; Hartl & Clark, *Principles of Population Genetics* 4th ed. (Sinauer, 2007), Ch. 1 introductory sections
- **notes**: (to be filled during production)


### biology.wright-fisher-diffusion

- **title**: Wright-Fisher model and the diffusion approximation
- **unit**: `19.02.05`
- **prerequisites**: `population-genetics.hardy-weinberg`, `biology.mendelian-genetics`
- **tier_anchors**:
  - master: Ewens, *Mathematical Population Genetics I* 2nd ed. (Springer, 2004), Ch. 3 + Ch. 4; Crow & Kimura, *An Introduction to Population Genetics Theory* (Harper & Row, 1970), Ch. 3 + Ch. 8 + Ch. 9; Charlesworth & Charlesworth, *Elements of Evolutionary Genetics* (Roberts, 2010), Ch. 5; primary literature — Wright 1931 *Genetics* 16, Fisher 1930, Kimura 1955 *PNAS* 41, Kimura 1962 *Genetics* 47, Kingman 1982
  - intermediate: Hartl & Clark, *Principles of Population Genetics* 4th ed. Ch. 3 + Ch. 7; Gillespie, *Population Genetics: A Concise Guide* 2nd ed. Ch. 2–3; Futuyma, *Evolution* 4th ed. Ch. 10; Crow & Kimura Ch. 3
  - beginner: Coyne, *Why Evolution Is True* (Viking, 2009), Ch. 5; Hartl & Clark, *Principles of Population Genetics* 4th ed. Ch. 3 introductory sections; Gillespie, *Population Genetics: A Concise Guide* 2nd ed. Ch. 2
- **notes**: The discrete Wright-Fisher Markov chain (binomial sampling each generation), its diffusion-limit Fokker-Planck equation $\partial_t \phi = -\partial_p[M\phi] + \tfrac{1}{2}\partial_p^2[V\phi]$ with $V(p) = p(1-p)$ and $M(p) = sp(1-p)$, Kimura's fixation-probability formula $u(p) = (1 - e^{-2Nsp})/(1 - e^{-2Ns})$ derived from the backward Kolmogorov ODE, the neutral $u(p) = p$ case, weak-selection asymptotics and the nearly-neutral threshold $|2Ns| \sim 1$, and the Kingman coalescent as the time-reversed genealogical dual. Connects Hardy-Weinberg (deterministic null) to natural selection (deterministic drift) to genetic drift (stochastic limit) to phylogenetics (coalescent inference).


### biology.natural-selection

- **title**: Natural selection — directional, stabilizing, and disruptive
- **unit**: `19.03.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Futuyma Ch. 11-12; Crow & Kimura Introduction to Population Genetics Theory; primary literature — Darwin 1859, Fisher 1930, Haldane 1932
  - intermediate: Futuyma Evolution 4th ed. Ch. 10-11; Hartl & Clark Principles of Population Genetics 4th ed. Ch. 3-4
  - beginner: Campbell Biology 12th ed. Ch. 22-23; Coyne Why Evolution Is True; Crash Course Biology evolution episodes
- **notes**: (to be filled during production)


### biology.sexual-selection

- **title**: Sexual selection
- **unit**: `19.03.02`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Futuyma advanced sections; primary literature — Darwin 1871, Fisher 1930, Zahavi 1975, Lande 1981
  - intermediate: Futuyma Evolution 4th ed. Ch. 12; Andersson Sexual Selection (1994)
  - beginner: Coyne Why Evolution Is True Ch. 2; Campbell Biology 12th ed. Ch. 23; Crash Course Biology sexual selection episodes
- **notes**: (to be filled during production)


### biology.kin-selection-hamiltons

- **title**: Kin selection and Hamilton's rule
- **unit**: `19.03.03`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Futuyma advanced sections; primary literature — Hamilton 1964, Maynard Smith 1964, Trivers 1971, Wilson 1975
  - intermediate: Futuyma Evolution 4th ed. Ch. 13; Hamilton 1964 papers
  - beginner: Coyne Why Evolution Is True Ch. 7; Campbell Biology 12th ed. Ch. 51; Crash Course Biology social behaviour episodes
- **notes**: (to be filled during production)


### biology.genetic-drift

- **title**: Genetic drift
- **unit**: `19.04.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Hartl & Clark advanced sections; Ewens Mathematical Population Genetics; primary literature — Wright 1931, Kimura 1968, Kingman 1982
  - intermediate: Hartl & Clark Principles of Population Genetics 4th ed. Ch. 3, 7; Futuyma Evolution 4th ed. Ch. 10
  - beginner: Coyne Why Evolution Is True Ch. 7; Campbell Biology 12th ed. Ch. 23; Crash Course Biology genetic drift episodes
- **notes**: (to be filled during production)


### biology.quantitative-genetics

- **title**: Quantitative genetics — heritability and the breeder's equation
- **unit**: `19.05.01`
- **prerequisites**: `biology.genetic-drift`
- **tier_anchors**:
  - master: Walsh & Lynch advanced sections; Falconer & Mackay Introduction to Quantitative Genetics 4th ed.; primary literature — Fisher 1918, Lush 1937
  - intermediate: Walsh & Lynch Evolution and Selection of Quantitative Traits Ch. 1-7; Futuyma Evolution 4th ed. Ch. 13
  - beginner: Coyne Why Evolution Is True Ch. 7; Campbell Biology 12th ed. Ch. 23; Crash Course Biology heritability episodes
- **notes**: (to be filled during production)


### biology.speciation

- **title**: Speciation — allopatric and sympatric
- **unit**: `19.06.01`
- **prerequisites**: `biology.genetic-drift`
- **tier_anchors**:
  - master: Coyne & Orr advanced sections; primary literature — Mayr 1942, Dobzhansky 1937, Grant & Grant 2008
  - intermediate: Futuyma Evolution 4th ed. Ch. 17-18; Coyne & Orr Speciation
  - beginner: Coyne Why Evolution Is True Ch. 5, 8; Campbell Biology 12th ed. Ch. 24; Crash Course Biology speciation episodes
- **notes**: (to be filled during production)


### biology.phylogenetics

- **title**: Phylogenetics — tree reconstruction
- **unit**: `19.07.01`
- **prerequisites**: `quantum-mechanics.hydrogen-atom-bound-states`
- **tier_anchors**:
  - master: Felsenstein advanced sections; Semple & Steel Phylogenetics; primary literature — Felsenstein 1981, 1985
  - intermediate: Felsenstein Inferring Phylogenies; Baum & Smith Tree Thinking Ch. 1-8
  - beginner: Coyne Why Evolution Is True Ch. 1; Campbell Biology 12th ed. Ch. 26; Crash Course Biology phylogeny episodes
- **notes**: (to be filled during production)


### biology.population-ecology

- **title**: Population ecology — Lotka-Volterra
- **unit**: `19.09.01`
- **prerequisites**: `analysis.first-order-ode`
- **tier_anchors**:
  - master: Begon et al. advanced sections; Kot Elements of Mathematical Ecology; primary literature — Lotka 1925, Volterra 1926, May 1972
  - intermediate: Begon, Harper & Townsend Ecology: Individuals, Populations and Communities 4th ed. Ch. 5-6; Case An Illustrated Guide to Theoretical Ecology
  - beginner: Campbell Biology 12th ed. Ch. 52-53; Crash Course Ecology population dynamics episodes
- **notes**: (to be filled during production)


### biology.community-ecology

- **title**: Community ecology — interactions and food webs
- **unit**: `19.10.01`
- **prerequisites**: (none)
- **tier_anchors**:
  - master: Begon et al. advanced sections; Pimm Food Webs; primary literature — Paine 1966, May 1972, Tilman 1982
  - intermediate: Begon, Harper & Townsend Ecology 4th ed. Ch. 8-11; Case An Illustrated Guide to Theoretical Ecology
  - beginner: Campbell Biology 12th ed. Ch. 54; Crash Course Ecology community ecology episodes
- **notes**: (to be filled during production)


### biology.origin-of-life

- **title**: Origin of life — mechanistic scenarios
- **unit**: `19.15.01`
- **prerequisites**: `chemistry.chemical-thermodynamics-equilibrium`, `quantum-mechanics.particle-in-a-box`
- **tier_anchors**:
  - master: Maynard Smith & Szathmary advanced sections; Deamer Assembling Life; primary literature — Miller 1953, Woese 1998
  - intermediate: Maynard Smith & Szathmary The Major Transitions in Evolution Ch. 1-4; Hazen Genesis Ch. 5-10
  - beginner: Coyne Why Evolution Is True Ch. 1; Lane The Vital Question; Crash Course Biology origin of life episodes
- **notes**: (to be filled during production)


### ode.lyapunov-stability

- **title**: Lyapunov stability — direct method
- **unit**: `02.12.08`
- **prerequisites**: `analysis.implicit-inverse-function-theorems`, `analysis.normed-vector-space`
- **tier_anchors**:
  - master: Lyapunov 1892 *The General Problem of the Stability of Motion* (Kharkov PhD thesis; English transl. Taylor & Francis 1992 — originator); LaSalle 1960 *Some extensions of Liapunov's second method* (IRE Trans. CT-7 — invariance principle); Krasovskii 1959 *Stability of Motion*; Hahn 1967 *Stability of Motion*; Arnold *ODE* Ch. 5 §23
  - intermediate: Arnold *ODE* Ch. 5 §22-§23; Hirsch-Smale-Devaney Ch. 9; Khalil *Nonlinear Systems* Ch. 4
  - beginner: Strogatz *Nonlinear Dynamics* Ch. 6 §6.5 (energy-function picture for pendulum-type mechanical systems)
- **notes**: Lyapunov-function characterisation of asymptotic stability of equilibria of $\dot x = f(x)$. $V$ positive definite with $\dot V < 0$ along trajectories implies stability; LaSalle's invariance principle generalises to limit-set arguments when $\dot V \leq 0$. Direct method recovers Hamiltonian-energy intuition without integrating the ODE.


### ode.rectification-theorem

- **title**: Rectification theorem (flow box theorem)
- **unit**: `02.12.05`
- **prerequisites**: `ode.phase-space-vector-field`, `ode.phase-flow`
- **tier_anchors**:
  - master: Arnold *ODE* §7 (originator-style treatment); Hartman *ODE* Ch. 5; Hirsch-Smale-Devaney Ch. 8
  - intermediate: Arnold *ODE* §7; Hirsch-Smale-Devaney Ch. 8
  - beginner: visual flow-box / parallel-flow picture
- **notes**: Near any non-equilibrium point, a smooth vector field is conjugate to the constant field $\partial / \partial x_1$ via a local diffeomorphism. Local normal-form result; equilibria are the only obstruction. Foundation for the qualitative theory of ODE.


### ode.variation-of-constants

- **title**: Variation of constants — inhomogeneous linear ODE
- **unit**: `02.12.13`
- **prerequisites**: `ode.phase-space-vector-field`
- **tier_anchors**:
  - master: Arnold *ODE* §15; Coddington-Levinson *Theory of Ordinary Differential Equations* Ch. 3; Hartman *ODE* Ch. 4
  - intermediate: Arnold *ODE* §15; Tenenbaum-Pollard Ch. 12
  - beginner: standard first-course-ODE textbook treatment
- **notes**: Lagrange's method (1774): for the inhomogeneous linear ODE $\dot x = A(t) x + f(t)$, write the solution as $x(t) = \Phi(t) c(t)$ where $\Phi$ is the fundamental matrix of the homogeneous problem; solve for $c(t)$ via integration of $\Phi^{-1} f$. Recovers Duhamel's principle and the convolution formula in the constant-coefficient case.


### ode.bifurcation-theory-pointer

- **title**: Bifurcation theory (pointer)
- **unit**: `02.12.17`
- **prerequisites**: `ode.phase-flow`, `ode.lyapunov-stability`
- **tier_anchors**:
  - master: Guckenheimer-Holmes *Nonlinear Oscillations, Dynamical Systems, and Bifurcations of Vector Fields*; Arnold *Geometrical Methods in the Theory of Ordinary Differential Equations*; Kuznetsov *Elements of Applied Bifurcation Theory*
  - intermediate: Strogatz *Nonlinear Dynamics and Chaos* Ch. 3 + Ch. 8; Hirsch-Smale-Devaney Ch. 8
  - beginner: Strogatz Ch. 3 (saddle-node, pitchfork, transcritical) — informal worked examples
- **notes**: Pointer unit (per Codex pointer convention): names and sketches the main local-bifurcation taxonomy (saddle-node, transcritical, pitchfork, Hopf) plus the global-bifurcation landscape (homoclinic, heteroclinic), without producing the full proofs. Anchors downstream relativity / fluid-dynamics / MAPK-bistability content (e.g., `17.07.02` MAPK cascade) that cites bifurcation language.



### char-classes.sw-pontryagin-numbers

- **title**: Stiefel-Whitney and Pontryagin numbers
- **unit**: `03.06.10`
- **prerequisites**: `char-classes.stiefel-whitney`, `char-classes.pontryagin-chern.definitions`, `char-classes.chern-weil`, smooth-manifold, singular-homology
- **tier_anchors**:
  - master: Milnor-Stasheff 1974 §4 + §16 + §17 (canonical reference for both SW and Pontryagin numbers); Thom 1954 *Comment. Math. Helv.* 28 (originator — bordism-invariance + completeness for unoriented bordism); Hirzebruch 1956 *Topological Methods in Algebraic Geometry* §1.5 (Pontryagin numbers + signature theorem); Wall 1960 *Ann. Math.* 72 (integral oriented-bordism ring); Milnor 1956 *Ann. Math.* 64 (exotic 7-sphere via Pontryagin numbers); Stong 1968 *Notes on Cobordism Theory* Ch. III-IV
  - intermediate: Milnor-Stasheff 1974 §4, §16; Hirzebruch 1956 §1.5
  - beginner: Milnor-Stasheff 1974 §4 (informal level)
- **notes**: For a closed manifold M^n, evaluate top-dimensional characteristic monomials (SW mod 2, Pontryagin in dim 4k) on the fundamental class [M]. SW numbers w_I[M] ∈ Z/2 are defined for any closed manifold (no orientation needed, since the mod-2 fundamental class is canonical); Pontryagin numbers p_I[M] ∈ Z require orientation + dim divisible by 4. Thom 1954: SW numbers are bordism invariants of unoriented bordism, and the SW-number map separates bordism classes — Ω^O_n is detected by SW numbers. Thom-Hirzebruch: rational Pontryagin numbers separate oriented-bordism classes after ⊗Q; the signature is a specific rational linear combination via Hirzebruch's L-genus, σ(M) = p_1/3 in dim 4. Worked examples: CP^2 with p_1 = 3, σ = 1; S^2 × S^2 with p_1 = 0, σ = 0; K3 with p_1 = -48, σ = -16; RP^2 with both SW numbers = 1 (not null-bordant). Master tier covers Thom's bordism-invariance proof via the boundary identity TW|_∂W = T(∂W) ⊕ R, and the Milnor exotic-7-sphere divisibility argument. Lean status: partial (theorems stated, sorry proof bodies pending bundled characteristic-class infrastructure in Mathlib).



### quantum.time-dependent-perturbation-theory

- **title**: Time-dependent perturbation theory and Fermi's golden rule
- **unit**: `12.07.02`
- **prerequisites**: `quantum-mechanics.time-independent-perturbation-theory`, `quantum-mechanics.schrodinger-heisenberg-pictures`, `quantum-mechanics.angular-momentum-operators-su2`
- **tier_anchors**:
  - master: Cohen-Tannoudji, Diu & Laloe, Quantum Mechanics, Vol. II (Wiley, 1977), Ch. XIII; Dirac 1927 Proc. Roy. Soc. A 114; Fermi 1950 Nuclear Physics
  - intermediate: Sakurai & Napolitano, Modern Quantum Mechanics, 2e (2017), Ch. 5.6-5.8
  - beginner: Griffiths & Schroeter, Introduction to Quantum Mechanics, 3e (2018), Ch. 11 intro
- **notes**: First-order amplitude expansion in the interaction picture, the squared-sinc lineshape for sinusoidal perturbations, the long-time limit producing the energy-conserving delta, and the rate formula $\Gamma_{i\to f} = (2\pi/\hbar) |V_{fi}|^2 \rho(E_f)$. The Master tier develops the Dyson series and its connection to the S-matrix in QFT (Dyson 1949 Phys. Rev. 75), the emergence of Fermi's golden rule from Dirac's 1927 paper and Wentzel's 1927 radiationless-transition calculation (with Fermi 1950 christening it the "golden rule"), the catalogue of physical applications (photoionisation cross-sections, beta decay via Fermi's 1934 four-fermion interaction, spontaneous emission and the Einstein A-coefficient, electron-phonon scattering, tunnel-junction conductance), and second-order Dyson with virtual transitions including Bethe's 1947 non-relativistic Lamb-shift calculation and the AC Stark shift. The Lean status is `none`: Mathlib has the unperturbed unitary exponential but lacks the time-ordered Dyson expansion, the operator-valued Volterra convergence, and the distributional long-time limit of the squared-sinc kernel.


### char-classes.chern-simons-transgression

- **title**: Chern-Simons forms and transgression
- **unit**: `03.06.07`
- **prerequisites**: `char-classes.pontryagin-chern.definitions`, `char-classes.chern-weil.homomorphism`, `bundle.vector-bundle`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Chern-Simons 1974 *Annals of Math.* (2) 99, 48-69; Freed 1995 *Adv. Math.* 113, 237-303; Kobayashi-Nomizu Vol. II Ch. XII §1-§3
  - intermediate: Bott-Tu *Differential Forms in Algebraic Topology* §6 (transgression); Milnor-Stasheff Appendix C
  - beginner: 3Blue1Brown / Strogatz analogous level for derivative-of-a-primitive pictures
- **notes**: The Chern-Simons form `CS_P(omega)` of an Ad-invariant polynomial `P` of degree `k` and a connection `omega` is a `(2k-1)`-form on the principal bundle satisfying `d CS_P(omega) = P(Omega)` — the transgression d-cocycle identity. The construction realises Cartan's transgression in the Weil algebra at the bundle level. The Chern-Simons three-form `CS(A) = (1/8 pi^2) tr(A ∧ dA + (2/3) A^3)` for the second Chern polynomial is gauge-invariant modulo integers, yielding the integer-level Chern-Simons action functional whose path integral defines the Witten-Reshetikhin-Turaev 3-manifold and knot invariants. Higher Chern-Simons forms produce secondary characteristic classes on flat bundles in dimension `2k-1` with values in `H^{2k-1}(M; R/Z)`, the Cheeger-Simons differential characters; the same forms appear in the Atiyah-Patodi-Singer boundary correction (eta-invariant variation) and the Stora-Zumino descent equations for chiral gauge anomalies.

### char-classes.steenrod-squares-wu

- **title**: Steenrod squares and the Wu formula
- **unit**: `03.06.14`
- **prerequisites**: `char-classes.stiefel-whitney`, `topology.singular-homology`, `alg-top.singular-cohomology`
- **tier_anchors**:
  - master: Steenrod 1947 *Annals of Math.* 48 (originator of Sq^i); Steenrod-Epstein 1962 *Cohomology Operations* (Annals Studies 50, canonical monograph); Milnor-Stasheff 1974 §8 + §11; Wu 1950 *C. R. Acad. Sci. Paris* 230 (Wu formula); Milnor 1958 *Annals* 67 (Hopf-algebra structure of A_2)
  - intermediate: Milnor-Stasheff §8 (Sq on Thom spaces) + §11 (Wu formula); Hatcher §4.L
  - beginner: Hatcher *Algebraic Topology* §4.L informal opening; 3Blue1Brown / Strogatz analogous level for stable cohomology operations on a CW skeleton
- **notes**: Steenrod squares `Sq^i : H^n(X; F_2) → H^{n+i}(X; F_2)` are the stable mod-2 cohomology operations characterised by Steenrod-Epstein axioms (naturality, additivity, Cartan formula, unstability, stability). They generate the mod-2 Steenrod algebra `A_2`, a graded cocommutative Hopf algebra over `F_2` whose dual is the polynomial algebra `F_2[xi_1, xi_2, ...]` with `|xi_i| = 2^i - 1` (Milnor 1958). The Wu formula `w(TM) = Sq(v)` expresses the total Stiefel-Whitney class of the tangent bundle of a closed smooth manifold as the total Steenrod square of the Wu class `v in H^*(M; F_2)`, where `v_i` is defined by the Poincaré-duality pairing condition `<Sq^i(u), [M]> = <v_i cup u, [M]>` for all `u in H^{n-i}(M; F_2)`. Stiefel-Whitney classes admit the Thom-Wu construction `Sq^i(u) = pi^*(w_i(E)) cup u` on the mod-2 Thom class `u`. The bordism application (Thom 1954) identifies `H^*(MO; F_2)` as a free `A_2`-module, recovering the unoriented bordism ring as a polynomial `F_2`-algebra.

### char-classes.combinatorial-pontryagin-exotic-spheres

- **title**: Combinatorial Pontryagin classes and exotic 7-spheres
- **unit**: `03.06.17`
- **prerequisites**: `char-classes.pontryagin-chern.definitions`, `char-classes.sw-pontryagin-numbers`, `char-classes.hirzebruch-signature`
- **tier_anchors**:
  - master: Milnor 1956 *Ann. of Math.* 64, 399-405 *On manifolds homeomorphic to the 7-sphere* (originator); Kervaire-Milnor 1963 *Ann. of Math.* 77, 504-537 *Groups of homotopy spheres I* (surgery exact sequence + Θ_7 = ℤ/28ℤ); Novikov 1965 *Dokl. Akad. Nauk SSSR* 163 (topological invariance of rational Pontryagin classes); Thom 1958 *Symp. Internacional de Topología Algebraica* (combinatorial Pontryagin classes); Rohlin-Schwartz 1957 *Dokl. Akad. Nauk SSSR* 114; Milnor-Stasheff §20; Hirsch *Differential Topology* §8
  - intermediate: Milnor-Stasheff §20; Hirsch *Differential Topology* §8; Hatcher *Algebraic Topology* introduction to differential-topology surgery
  - beginner: Milnor *Topology from the Differentiable Viewpoint*; 3Blue1Brown fibre-bundle visualizations
- **notes**: Milnor 1956 constructed S^3-bundles M_{h,j} → S^4 from the parameter space π_3(SO(4)) ≅ ℤ ⊕ ℤ via clutching functions φ_{h,j}(q)·x = q^h x q^j. For h + j = 1 the total space M_{h,j} is homeomorphic to S^7 (Gysin sequence + Smale h-cobordism 1962). The Hirzebruch signature formula in dimension 8, applied to the disc-bundle filling N_{h,j} glued to a standard D^8, forces p_2[X] = (45 + 4(h - j)^2)/7. Integrality of p_2 requires (h - j)^2 ≡ 1 (mod 7); failure of this congruence certifies that M_{h,j} is not diffeomorphic to the standard S^7. The Milnor lambda invariant λ(M_{h,j}) := (h - j)^2 - 1 (mod 7) ∈ ℤ/7ℤ vanishes precisely on standard structures. Kervaire-Milnor 1963 systematized the construction via the surgery exact sequence 0 → Θ_n^{bP} → Θ_n → π_n^s / J(π_n(SO)) → 0 and computed Θ_7 = ℤ/28ℤ from |Θ_7^{bP}| = 4 · 7 · 1 = 28 (via Bernoulli-denominator formula B_2/8 = 1/240 with numerator 1, factor 2^{2k-2} = 4 for k = 2, factor 2^{2k-1} - 1 = 7) combined with J surjectivity in degree 7 (Adams 1966 *Topology* 5). Connect-sum endows Θ_7 with abelian group structure; the 28 oriented diffeomorphism classes of smooth homotopy 7-spheres consist of the standard S^7 and 27 exotic ones, all realized as connect sums of Milnor's M_{1,0}. Combinatorial Pontryagin classes for PL manifolds defined by Rokhlin-Schwartz 1957 and Thom 1958 via signatures of transverse PL submanifolds; rational classes p_i^{PL} ∈ H^{4i}(M; ℚ) agree with smooth Pontryagin classes when both defined, and Novikov 1965 proved their topological invariance (rational Pontryagin classes do not depend on smooth/PL structure — but integral Pontryagin classes do, exactly as Milnor's exotic spheres demonstrate). Novikov's argument uses the manifold-with-fibred-singularities construction and the surgery exact sequence; awarded the Fields Medal in 1970.

### char-classes.unoriented-bordism-thom

- **title**: Unoriented bordism and Thom's theorem
- **unit**: `03.06.12`
- **prerequisites**: `char-classes.stiefel-whitney`, `bundle.vector-bundle`, `topology.singular-homology`
- **tier_anchors**:
  - master: Thom 1954 *Comment. Math. Helv.* 28, 17-86 *Quelques propriétés globales des variétés différentiables*; Milnor-Stasheff *Characteristic Classes* §17 (Pontryagin-Thom) + §18 (computation of N_*); Stong *Notes on Cobordism Theory* (Princeton, 1968); Pontryagin 1950 *Smooth manifolds and their applications in homotopy theory*; Dold 1956 *Math. Z.* 65, 25-35 (Dold manifolds as odd-dimensional generators)
  - intermediate: Milnor-Stasheff §17–§18; Stong Ch. I–II; Hatcher *Algebraic Topology* §3.D for bordism overview
  - beginner: Hatcher §3.D informal opening; pair-of-pants / disk-bounds-sphere pictures
- **notes**: The unoriented bordism group `N_n` is the abelian group of closed smooth `n`-manifolds modulo the bordism relation `M ~ N <=> exists W^{n+1} with boundary M sqcup N`, with addition by disjoint union; every element has order 2 so `N_n` is an `F_2`-vector space. The graded ring `N_* = oplus N_n` carries the Cartesian-product multiplication. Bordism invariance of Stiefel-Whitney numbers (Pontryagin 1947; Thom 1954): if `M, N` are bordant then `<w_omega(TM), [M]_2> = <w_omega(TN), [N]_2>` in `F_2` for every partition `omega` of `n`. Proof: pull `w_omega(TW)` along boundary inclusions, then `d[W]_2 = [M]_2 + [N]_2` in `H_n(d W; F_2)` and Stokes-style relative pairing collapses to zero. Pontryagin-Thom construction (transversality + tubular neighbourhood) defines the Thom homomorphism `Phi : N_n -> pi_n(MO)` from the bordism group into the n-th homotopy group of the unoriented Thom spectrum. Thom's main theorem: `Phi` is a ring isomorphism `N_* ≅ pi_*(MO)`. Computation: Thom showed `H^*(MO; F_2)` is a free module over the mod-2 Steenrod algebra `A` on generators indexed by non-dyadic partitions; Adams spectral sequence collapses at `E_2`, yielding `N_* ≅ F_2[x_n : n >= 2, n + 1 != 2^k]` with one polynomial generator in every non-Mersenne dimension. Generators chosen as `[RP^{2k}]` for even dimensions and Dold manifolds `P(m,n) = (S^m x CP^n) / Z_2` for odd admissible dimensions (Dold 1956). Low-dimensional values: `N_0 = F_2`, `N_1 = 0`, `N_2 = F_2 <[RP^2]>`, `N_3 = 0`, `N_4 = F_2^2 <[RP^4], [RP^2 x RP^2]>`, `N_5 = F_2`, with `N_n = 0` exactly when `n in {1, 3, 7, 15, ...}`. The theorem is the historical model for every subsequent cobordism computation (Wall 1960 oriented, Quillen 1969 complex MU as universal formal group law) and the first nontrivial collapsing Adams spectral sequence.

### char-classes.whitney-duality-immersion

- **title**: Whitney duality and immersion obstructions
- **unit**: `03.06.16`
- **prerequisites**: `char-classes.stiefel-whitney`, `char-classes.pontryagin-chern.definitions`, `bundle.vector-bundle`
- **tier_anchors**:
  - master: Whitney 1941 *Lectures in Topology* (Whitney duality identity); Whitney 1944 *Ann. of Math.* (2) 45 (immersion conjecture statement); Massey 1960 *Amer. J. Math.* 82 (RP^n immersion lower bound); Milnor-Stasheff 1974 *Characteristic Classes* §4 + §11; Cohen 1985 *Ann. of Math.* (2) 122 (proof of the immersion conjecture); Brown-Peterson 1966 *Topology* 5 (BP spectrum)
  - intermediate: Milnor-Stasheff §4 (Whitney duality) + §11 (immersion obstruction); Hatcher *Vector Bundles and K-Theory* §3.1
  - beginner: Strogatz-style picture of a closed surface inside three-space with the normal direction at each point compensating the tangent directions; 3Blue1Brown-style cohomology-ring inversion intuition
- **notes**: Whitney duality is the identity `w(TM) ⌣ w(νM) = 1` in `H^*(M; F_2)` for any closed smooth `n`-manifold `M` admitting an immersion `f : M ↪ R^N` with normal bundle `νM = f^* TR^N / TM`. The proof is the two-line Whitney-product-plus-naturality argument applied to `TM ⊕ νM ≅ ε^N`. Equivalently `w(νM) = w(TM)^{-1}` in the total cohomology ring under formal inversion of `1 + w_1 + w_2 + …`. Immersion obstruction: if `[w(TM)^{-1}]_i ≠ 0` for some `i > k`, then `M^n` does not immerse in `R^{n+k}` (because the rank-`k` normal bundle has vanishing SW classes above degree `k`). Worked example: `w(T RP^n) = (1+a)^{n+1}` in `F_2[a]/(a^{n+1})`; inversion gives `w(ν RP^n) = (1+a)^{2^s - n - 1}` for `2^s ≥ n+1` the smallest such power of two, with top non-vanishing degree `2^s - n - 1`. Massey 1960 derives from this the lower bound `imm(RP^n) ≥ 2^s - 1`; the bound is sharp when `n = 2^r`. Boy's surface (Boy 1903) realises the codimension-1 immersion `RP^2 ↪ R^3` predicted by the duality formula. Whitney 1944 conjectured `imm(M^n) ≤ 2n - α(n)` for `α(n)` the binary-digit count of `n`; R. L. Cohen 1985 proved the conjecture via Brown-Peterson splitting of `MO⟨n - α(n)⟩` and Adams-spectral-sequence vanishing of the obstruction class `θ(M) ∈ π_n(MO⟨n - α(n)⟩)`. The interplay between Stiefel-Whitney lower bounds, K-theoretic refinements (Atiyah-Hirzebruch 1959, Adams 1962 vector-fields-on-spheres), and chromatic-stable-homotopy (Brown-Peterson, Cohen) is the structural three-layer ladder for immersion theory.


### inorg-chem.crystal-field-stabilization-spectrochemical-series

- **title**: Crystal field stabilization energy and the spectrochemical series
- **unit**: `16.04.02`
- **prerequisites**: `inorganic-chemistry.crystal-field-octahedral` (16.03.02), `chemistry.coordination-chemistry` (16.04.01), `representation-theory.character` (07.01.03), `representation-theory.character-orthogonality` (07.01.04)
- **tier_anchors**:
  - master: Bethe 1929 *Annalen der Physik* 3 (originator); Van Vleck 1932 *Phys. Rev.* 41 (LFT extensions to magnetism); Jahn & Teller 1937 *Proc. Roy. Soc. A* 161 (J-T theorem); Tanabe & Sugano 1954 *J. Phys. Soc. Japan* 9 (term-energy diagrams); Schäffer & Jørgensen 1965 *Mol. Phys.* 9 (AOM); Schäffer 1968 *Struct. Bonding* 5 (AOM formal); Cotton-Wilkinson *Adv. Inorg. Chem.* 6th ed.; Bersuker 2010
  - intermediate: Housecroft-Sharpe *Inorganic Chemistry* 5th ed. Ch. 19-21; Miessler-Fischer-Tarr 5th ed. Ch. 10-11; Atkins *Inorganic Chemistry* 7th ed. Ch. 20
  - beginner: Atkins-Jones *Chemistry: Molecules, Matter, and Change* Ch. 16; Crash Course Chemistry coordination compounds + CFT
- **notes**: Develops the CFSE formula $-0.4 n_{t_{2g}} \Delta_o + 0.6 n_{e_g} \Delta_o$ for octahedral d-electron configurations and proves the high-spin / low-spin crossover at $\Delta_o = P$ for $d^4$ through $d^7$. Includes the empirical spectrochemical series ordering, the sigma-donor / pi-donor / pi-acceptor classification due to Schäffer-Jørgensen, the angular overlap model (AOM) parameterisation $\Delta_o = 3 e_\sigma - 4 e_\pi$, the Jahn-Teller theorem with symmetric-square selection rule and application to $d^9$ Cu(II), the Laporte and spin selection rules for d-d transitions, the LMCT/MLCT distinction in charge-transfer spectra, and the Tanabe-Sugano diagram framework for assigning electronic spectra. The Master tier connects to bioinorganic metalloenzymes (heme spin-crossover), to lattice models of transition-metal solids (multi-orbital Hubbard), and to organic stereochemistry (Hückel-J-T in degenerate $\pi$ systems).


### organismal-bio.cardiac-electrophysiology

- **title**: Cardiac action potentials, pacemaker physiology, and the ECG
- **unit**: `18.02.02`
- **prerequisites**: `ode.phase-space-vector-field`, `ode.limit-cycle-lienard`, `ode.bifurcation-theory-pointer`
- **tier_anchors**:
  - master: Bers *Excitation-Contraction Coupling and Cardiac Contractile Force* (2nd ed., Kluwer 2001); Zipes-Jalife-Stevenson *Cardiac Electrophysiology: From Cell to Bedside* (7th ed., Elsevier 2017); Noble 1962 (*J. Physiol.* 160, 317-352) — first cardiac Purkinje HH-style model; DiFrancesco & Noble 1985 (*Phil. Trans. R. Soc. B* 307, 353-398) — funny current pacemaker model; Luo & Rudy 1991/1994 (*Circ. Res.*) — modern ventricular model; Beeler & Reuter 1977 (*J. Physiol.* 268, 177-210); Maltsev & Lakatta 2009 — coupled-clock pacemaker; Winfree 1987 — spiral and scroll-wave reentry
  - intermediate: Boron & Boulpaep *Medical Physiology* (3rd ed., Elsevier 2017) Ch. 20-21; Klabunde *Cardiovascular Physiology Concepts* (3rd ed., Wolters Kluwer 2021) Chs. 2-4; Berne & Levy *Cardiovascular Physiology* (10th ed., Mosby 2008) Chs. 2-3
  - beginner: Crash Course Anatomy & Physiology heart and cardiac conduction episodes; Khan Academy cardiovascular electrophysiology modules; Goldberger *Clinical Electrocardiography: A Simplified Approach* (9th ed., Elsevier 2017) — beginner-accessible ECG primer
- **notes**: Deepens the §18.02 cardiovascular chapter at the cellular electrophysiology level above the organ-and-haemodynamics peer 18.02.01. Four Master sub-sections: (i) cardiac AP phases 0-4 and ion-channel basis (plateau as the defining feature; L-type Ca, delayed-rectifier K, contrast with neural HH); (ii) pacemaker cells with funny current $I_f$ and the coupled membrane-clock/Ca-clock model (DiFrancesco-Noble + Maltsev-Lakatta); (iii) conduction, gap junctions, and reentry as a limit-cycle phenomenon on the cardiac excitable medium (wavelength criterion, Winfree-Keener rotors, ventricular fibrillation as scroll-wave breakup); (iv) ECG genesis from cellular dipoles to body-surface vectorcardiography (Einthoven's triangle, twelve-lead axis determination, link to specific pathologies). The unit builds *above* the neural HH parent 17.09.02 without re-deriving it; cardiac contributions are the plateau, the funny current, gap-junction coupling, and the body-surface ECG. Lean status: none — Mathlib lacks conductance-based cardiac models, the bidomain PDE, and reentry-rotor stability theory.


### topology.postnikov-tower-kan-complex

- **title**: Postnikov tower of a Kan complex
- **unit**: `03.12.40`
- **prerequisites**: `topology.eilenberg-maclane` (03.12.05), `homotopy.whitehead-tower-rational-hurewicz` (03.12.07), `topology.singular-homology` (03.12.11), `topology.simplicial-set` (03.12.25)
- **tier_anchors**:
  - master: Postnikov 1951 *Doklady Akad. Nauk SSSR* 76 (originator); Goerss-Jardine 2009 *Simplicial Homotopy Theory* §VI; May 1967 *Simplicial Objects in Algebraic Topology* §8; Hatcher 2002 §4.3; Hirschhorn 2003 *Model Categories and Their Localizations* §6 for the Bousfield-localisation viewpoint
  - intermediate: May 1967 §8; Hatcher §4.3; Goerss-Jardine §VI.2-§VI.3
  - beginner: Hatcher §4.3 informal level; Friedman *An elementary illustrated introduction to simplicial sets* (arXiv:0809.4221) for the simplicial pictures
- **notes**: The simplicial-side Postnikov decomposition of a Kan complex. The Postnikov section $P_n X = \mathrm{cosk}_{n+1}(\mathrm{Ex}^\infty X)$ has $\pi_i(P_n X) = \pi_i(X)$ for $i \leq n$ and $\pi_i(P_n X) = 0$ for $i > n$. The bonding map $P_n X \to P_{n-1} X$ is a Kan fibration with fibre the Eilenberg-MacLane Kan complex $K(\pi_n X, n)$, classified by a cohomology class $k_n \in H^{n+1}(P_{n-1} X; \pi_n X)$ called the $n$-th k-invariant. The tower is dual to the Whitehead tower (Postnikov truncates from above; Whitehead from below) and converges to $X$ via $X \simeq \varprojlim_n P_n X$ for $X$ of finite type. Hirschhorn 2003 identifies the truncation functors $\tau_{\leq n}$ as left Bousfield localisations of the Kan-Quillen model structure at the maps inverting $\pi_{n+1}, \pi_{n+2}, \ldots$. Worked example: the Postnikov tower of $S^2$ has $P_2 S^2 = K(\mathbb{Z}, 2) = \mathbb{CP}^\infty$ and first k-invariant $k_3 = \iota_2 \smile \iota_2 \in H^4(K(\mathbb{Z}, 2); \mathbb{Z}) = \mathbb{Z}$, the cup-square of the fundamental class, encoding the Hopf-map obstruction $\pi_3 S^2 = \mathbb{Z}$. Postnikov 1951's classification theorem: weak homotopy type equals homotopy groups plus k-invariants up to equivalence. The structural foundation of simplicial-side obstruction theory and the canonical example of left Bousfield localisation in $\mathbf{sSet}$.


### topology.kan-quillen-model-structure

- **title**: Kan-Quillen model structure on sSet
- **unit**: `03.12.33`
- **prerequisites**: `topology.simplicial-set` (03.12.25), `homotopy.quillen-model-category` (03.12.31)
- **tier_anchors**:
  - master: Quillen 1967 *Homotopical Algebra* (LNM 43) §II.3 (originator); Goerss-Jardine 2009 *Simplicial Homotopy Theory* §I-§II; Hovey 1999 *Model Categories* (AMS Math. Surveys 63) §3; May 1967 *Simplicial Objects in Algebraic Topology* §15-§17; Lurie 2009 *Higher Topos Theory* §1.1-§2.2
  - intermediate: Quillen 1967 §II.3; Goerss-Jardine §I.7-§I.11; Hovey 1999 §3.2-§3.6
  - beginner: Goerss-Jardine 2009 §I.1-§I.3 informal opening on horns; Friedman 2008 arXiv:0809.4221 for the horn-filling pictures
- **notes**: The canonical model structure on simplicial sets, established by Quillen in 1967. Three classes: cofibrations = monomorphisms (level-wise injections); fibrations = Kan fibrations (right lifting against horn inclusions $\Lambda^n_k \hookrightarrow \Delta^n$ for $0 \leq k \leq n$, $n \geq 1$); weak equivalences = maps whose geometric realisation is a weak homotopy equivalence (equivalently, isos on simplicial homotopy groups after fibrant replacement). The five model-category axioms M1-M5 are verified using the small-object argument applied to the generating sets $I = \{\partial \Delta^n \hookrightarrow \Delta^n\}_{n \geq 0}$ and $J = \{\Lambda^n_k \hookrightarrow \Delta^n\}_{0 \leq k \leq n, n \geq 1}$. Key structural facts: every simplicial set is cofibrant (the initial object is empty, and the empty map is vacuously injective); a simplicial set is fibrant iff it is a Kan complex; the singular complex $\mathrm{Sing}(X)$ is always a Kan complex; simplicial groups are automatically Kan complexes (Moore 1955). Quillen 1967 Theorem II.3.1 establishes that the realisation-singular adjunction $|{-}| \dashv \mathrm{Sing}$ is a Quillen equivalence between the Kan-Quillen structure and the Serre model structure on $\mathbf{Top}$, so $\mathrm{Ho}(\mathbf{sSet}) \simeq \mathrm{Ho}(\mathbf{Top})$ identifies combinatorial and topological homotopy theory. The Kan-Quillen structure has a sibling Joyal model structure on the same underlying category $\mathbf{sSet}$ using only inner-horn fillers, modelling $(\infty, 1)$-categories rather than $\infty$-groupoids; Cisinski 2006 identifies Kan-Quillen as the universal $\infty$-groupoid presentation among Cisinski model structures on $\mathbf{sSet}$. The foundational example of the Quillen abstract framework [03.12.31], and the canonical worked example for the Quillen-equivalence calculus of [03.12.32].


### topology.bousfield-kan-spectral-sequence

- **title**: Bousfield-Kan spectral sequence
- **unit**: `03.12.38`
- **prerequisites**: `topology.cw-complex` (03.12.10), `topology.simplicial-set` (03.12.25), `homotopy.quillen-model-category` (03.12.31), `spectral-sequences.spectral-sequence` (03.13.01)
- **tier_anchors**:
  - master: Bousfield-Kan 1972 *Homotopy Limits, Completions and Localizations* (Springer LNM 304) §IX-§XI (originator); Bousfield-Kan 1972 *Topology* 11, 79-106 (the homotopy spectral sequence with coefficients in a ring; cobar construction); Hirschhorn 2003 *Model Categories and Their Localizations* §17; Goerss-Jardine 2009 *Simplicial Homotopy Theory* §VIII; Bousfield 1979 *The localisation of spectra with respect to homology* (Topology 18, 257-281); Ravenel 1986 *Complex Cobordism and the Stable Homotopy Groups of Spheres* §3-§5
  - intermediate: Bousfield-Kan 1972 LNM 304 §IX-§X; Goerss-Jardine 2009 §VIII.1-§VIII.2; Hirschhorn 2003 §17
  - beginner: Bousfield-Kan 1972 LNM 304 §IX informal opening; Goerss-Jardine 2009 §VIII.1
- **notes**: The Bousfield-Kan spectral sequence of a cosimplicial space $X^{\bullet}$ has $E_2^{s, t} = \pi^s \pi_t(X^{\bullet})$ converging conditionally to $\pi_{t - s}(\mathrm{Tot} X^{\bullet})$, the homotopy of the totalisation. Construction: for a Reedy-fibrant cosimplicial space, the tower of partial totalisations $\mathrm{Tot}_n(X^{\bullet}) \to \mathrm{Tot}_{n-1}(X^{\bullet})$ is a tower of Kan fibrations with fibre $\Omega^n N^n X^{\bullet}$ (the loop on the $n$-th normalised cosimplicial level), and the spectral sequence is the exact-couple spectral sequence of this tower. The $E_2$-page identification uses the Dold-Kan acyclicity theorem to exchange the normalised cosimplicial cochain complex for the alternating-sum cochain complex of $\pi_t(X^{\bullet})$. Conditional convergence to $\pi_*(\mathrm{Tot})$ involves a $\lim^1$ obstruction packaged via the Milnor short exact sequence $0 \to \lim^1 \pi_{k+1} \mathrm{Tot}_n \to \pi_k \mathrm{Tot} \to \lim \pi_k \mathrm{Tot}_n \to 0$; strong convergence holds under Mittag-Leffler hypotheses on the tower of homotopy groups. The Adams-style BK spectral sequence at a ring spectrum $R$ applies the construction to the cobar cosimplicial spectrum $C^n(R; X) = R^{\wedge (n + 1)} \wedge X$, with $E_2$-page $\mathrm{Ext}^{s, t}_{R_* R}(R_*, R_* X)$ converging to $\pi_*(X^{\wedge}_R)$. The classical Adams spectral sequence at $R = H\mathbb{F}_p$, the Adams-Novikov spectral sequence at $R = BP$, and the chromatic $K(n)$-local Adams BK spectral sequences are the canonical specialisations underlying the chromatic stratification of stable homotopy theory (Devinatz-Hopkins-Smith 1988, Hopkins-Smith 1998, Ravenel 1986). Goerss-Hopkins obstruction theory uses BK spectral sequences on moduli of $E_\infty$ ring structures to construct $\mathrm{tmf}$. Lean status: `partial`, module `Codex.Modern.Homotopy.BousfieldKanSpectralSequence` declares the API (cosimplicial spaces, totalisation, $E_2$-identification, conditional convergence) with proof bodies pending Mathlib cosimplicial-object and spectral-sequence packages.


### topology.homotopy-colimit-bousfield-kan

- **title**: Homotopy colimit via the Bousfield-Kan construction
- **unit**: `03.12.37`
- **prerequisites**: `topology.simplicial-set` (03.12.25), `homotopy.quillen-model-category` (03.12.31)
- **tier_anchors**:
  - master: Bousfield-Kan 1972 *Homotopy Limits, Completions and Localizations* (LNM 304) §X-§XII (originator); Hirschhorn 2003 *Model Categories and Their Localizations* (AMS Math. Surveys 99) §18-§19; Riehl 2014 *Categorical Homotopy Theory* §6; Dugger 2008 *A primer on homotopy colimits*; Goerss-Jardine 2009 *Simplicial Homotopy Theory* §IV
  - intermediate: Bousfield-Kan 1972 §XI-§XII; Dwyer-Spalinski 1995 §10; Hirschhorn 2003 §18
  - beginner: Dwyer-Spalinski 1995 §10 informal opening on homotopy colimits; Dugger 2008 primer
- **notes**: The Bousfield-Kan construction: the homotopy colimit of a diagram $X : I \to \mathbf{sSet}$ is the geometric realisation $|B(*, I, X)|$ of the bar construction, whose $n$-simplices are pairs of a length-$n$ chain of composable arrows in $I$ and an $n$-simplex of the source space. Face maps act by composing arrows / shifting via the leftmost arrow / dropping the rightmost object; degeneracies insert identities. The formula gives the left-derived functor $\mathbf{L} \operatorname*{colim}_I$ of the ordinary colimit, computed in the projective model structure on $\mathbf{sSet}^I$. Concrete instances: homotopy pushout = double mapping cylinder $A \sqcup_C (C \times \Delta^1) \sqcup_C B$; sequential hocolim = mapping telescope $\mathrm{Tel}(X) = \bigsqcup_n X_n \times \Delta^1 / \sim$; classifying space $BG = |N(BG)| = \operatorname*{hocolim}_{BG} *$ (Segal 1974). Homotopy invariance via Bousfield-Friedlander diagonal lemma. The two-sided bar construction $B(W, I, X)$ with contravariant weight $W$ generalises to weighted colimits (Riehl 2014). Projective and Reedy model structures on $\mathbf{sSet}^I$ (Hirschhorn 2003 §18) give equivalent presentations. The Bousfield-Kan formula is the universal computational tool underlying chromatic homotopy theory, motivic hocolims, topological cyclic homology, and equivariant stable homotopy, and is the classical-side counterpart to the $(\infty, 1)$-categorical colimit in $\mathcal{S}$ (Joyal 2002, Lurie 2009). Lean status: `partial`, module `Codex.Modern.Homotopy.HomotopyColimitBK` declares the API (bar construction, hocolim, pushout = double mapping cylinder, sequential = telescope, classifying space) with proof bodies pending Mathlib model-category and diagram-category packages.

### topology.arithmetic-square-fracture

- **title**: Arithmetic square and integral fracture theorems
- **unit**: `03.12.45`
- **prerequisites**: `homotopy.quillen-model-category` (03.12.31); pending peers `topology.homotopy-colimit-bousfield-kan` (03.12.37) and `topology.bousfield-kan-spectral-sequence` (03.12.38)
- **tier_anchors**:
  - master: Sullivan 1970 *Geometric Topology: Localization, Periodicity, and Galois Symmetry* (MIT notes; revised K-Monographs in Mathematics 8, 2005) — originator; Bousfield-Kan 1972 *Homotopy Limits, Completions and Localizations* (LNM 304) §VI; Dwyer-Greenlees-Iyengar 2006 *Duality in algebra and topology* (Adv. Math. 200) §4; May-Ponto 2012 *More Concise Algebraic Topology* Ch. 10-13; Hovey-Strickland 1999 *Morava K-theories and Localisation* (AMS Memoirs 666) §6-§7 for the chromatic-fracture extension
  - intermediate: Bousfield-Kan 1972 §VI; May-Ponto 2012 Ch. 11-12; Hatcher 2002 §4.K
  - beginner: May-Ponto 2012 Ch. 10 informal opening; Hess 2007 *Rational homotopy theory: a brief introduction* (arXiv:math/0604626) §3
- **notes**: The Sullivan arithmetic square at a nilpotent finite-type space $X$ is the commutative square with $X$ at the top-left, the product of $p$-completions $\prod_p L_p X$ at the top-right, the rationalisation $L_\mathbb{Q} X$ at the bottom-left, and the rational gluing corner $L_\mathbb{Q}(\prod_p L_p X)$ at the bottom-right. The integral fracture theorem (Sullivan 1970; Bousfield-Kan 1972 §VI) states that the canonical comparison map from $X$ to the homotopy pullback of the other three corners is a weak equivalence in $\mathrm{Ho}(\mathbf{sSet}_*)$, under the nilpotence + finite-type + $\lim^1$-vanishing hypotheses. The proof proceeds via the Milnor short exact sequence for the homotopy pullback, the Mittag-Leffler vanishing of $\lim^1$ at finite type, and the local-global short exact sequence $0 \to \mathbb{Z} \to \mathbb{Q} \oplus \hat{\mathbb{Z}} \to \mathbb{A}_f \to 0$ tensored with the relevant homotopy group. Worked sphere example: $\pi_3(S^2) = \mathbb{Z}$ recovered as the pullback $\mathbb{Q} \times_{\mathbb{A}_f} \hat{\mathbb{Z}}$. Chromatic extension: the Hovey-Strickland 1999 chromatic-fracture squares at each height $n$ recover $L_{E(n)} X$ as the homotopy pullback of $L_{E(n-1)} X$, $L_{K(n)} X$, and $L_{E(n-1)} L_{K(n)} X$; iterated downward, the chromatic tower assembles a finite $p$-local spectrum from its monochromatic strata via the Hopkins-Ravenel 1992 chromatic convergence theorem. The framework is dual to the number-theoretic adelic local-global principle (Sullivan's title invokes "Galois Symmetry" to make the duality explicit) and the Devinatz-Hopkins 1995 *Topology* 34 identification $L_{K(n)} S^0 \simeq E_n^{h \mathbb{G}_n}$ closes the loop. Lean status: `partial`, module `Codex.Modern.Homotopy.ArithmeticSquare` states the fracture theorem and sphere corollary; proofs `sorry` pending Mathlib `BousfieldLocalization` + `HomotopyPullback` + nilpotent-class infrastructure.


### topology.simplicial-model-category

- **title**: Simplicial model category and the function complex
- **unit**: `03.12.35`
- **prerequisites**: `topology.simplicial-set` (03.12.25), `homotopy.quillen-model-category` (03.12.31)
- **tier_anchors**:
  - master: Quillen 1967 *Homotopical Algebra* (Springer LNM 43) §II.1-§II.3 (originator of simplicial model categories and the SM7 pushout-product axiom); Goerss-Jardine 2009 *Simplicial Homotopy Theory* §II.2-§II.3 (function complexes and the Kan-complex theorem); Hirschhorn 2003 *Model Categories and Their Localizations* §9.1-§9.4 (modern treatment); Hovey 1999 *Model Categories* §4.2-§4.3 (monoidal-model-category framework); Riehl 2014 *Categorical Homotopy Theory* §10 (homotopy-coherent diagrams via simplicial enrichment); Lurie 2009 *Higher Topos Theory* §A.3 (relation to $(\infty, 1)$-categories)
  - intermediate: Quillen 1967 §II.1-§II.2; Goerss-Jardine 2009 §II.2; Hovey 1999 §4.2
  - beginner: Dwyer-Spalinski 1995 §3-§4 informal opening on simplicial mapping spaces
- **notes**: A simplicial model category is a model category $\mathcal{C}$ enriched over the cartesian-closed category $\mathbf{sSet}$ of simplicial sets, satisfying three compatibility axioms beyond M1-M5: SM0 (underlying category coincides with the enrichment's $0$-simplices), SM6 (tensor $X \otimes K$ and cotensor $X^K$ with simplicial sets giving the bifunctorial adjunction $\mathrm{Map}_\mathcal{C}(X \otimes K, Y) \cong \mathrm{Map}_\mathbf{sSet}(K, \mathrm{Map}_\mathcal{C}(X, Y)) \cong \mathrm{Map}_\mathcal{C}(X, Y^K)$), and SM7 (pushout-product axiom: the pushout-product $i \square j : (A \otimes L) \sqcup_{A \otimes K} (B \otimes K) \to B \otimes L$ of a cofibration $i : A \to B$ in $\mathcal{C}$ with a monomorphism $j : K \to L$ in $\mathbf{sSet}$ is a cofibration in $\mathcal{C}$, acyclic if either factor is acyclic). Headline theorem (Quillen 1967 §II.2 Proposition 3): the function complex $\mathrm{Map}_\mathcal{C}(X, Y)$ is a Kan complex whenever $X$ is cofibrant and $Y$ is fibrant; the proof is a horn-filling argument using SM7 with $i_X : \emptyset \to X$ and $j : \Lambda^n_k \hookrightarrow \Delta^n$ to produce an acyclic cofibration that lifts against $Y \to *$ by M3. The derived function complex $\mathrm{RMap}(X, Y) := \mathrm{Map}_\mathcal{C}(QX, RY)$ has homotopy groups $\pi_n \mathrm{RMap}(X, Y) \cong [S^n \otimes X, Y]_{\mathrm{Ho}(\mathcal{C})}$ and $\pi_0 \mathrm{RMap}(X, Y) = \mathrm{Hom}_{\mathrm{Ho}(\mathcal{C})}(X, Y)$, identifying the simplicial-enrichment side with derived $\mathrm{Hom}$. Canonical examples: $\mathbf{sSet}$ itself with Kan-Quillen structure and internal-Hom enrichment; simplicial groups (Quillen 1967 §II.4); simplicial commutative dg-algebras over $\mathbb{Q}$ via Bousfield-Gugenheim 1976 (foundation of rational homotopy theory); non-negatively graded chain complexes via Dold-Kan; symmetric spectra $\mathrm{Sp}^\Sigma$ (Hovey-Shipley-Smith 2000). Generalised by Hovey 1999 §4.2 to monoidal model categories. Lurie 2009 §A.3 proves that every simplicial model category (restricted to cofibrant-fibrant subcategory) presents an $(\infty, 1)$-category via the homotopy-coherent nerve; the Bergner-Joyal Quillen equivalence between $\mathbf{sCat}$ and $\mathbf{sSet}_{\mathrm{Joyal}}$ confirms equivalence with the quasi-categorical presentation. Lean status: `partial`, module `Codex.Modern.Homotopy.SimplicialModelCategory` declares the SM7 axiom and the Kan-complex theorem with `sorry` proof bodies pending the upstream `SimplicialModelCategory` API in Mathlib.

### alg-geom.ddbar-lemma

- **title**: The ddbar-lemma
- **unit**: `04.09.05`
- **prerequisites**: `alg-geom.hodge-decomposition`, `alg-geom.kodaira-vanishing`, `topology.differential-forms`, `topology.de-rham-cohomology`
- **tier_anchors**:
  - master: Deligne-Griffiths-Morgan-Sullivan 1975 *Invent. Math.* 29, 245–274 (popularised the lemma in its formal-rationality role); Voisin *Hodge Theory and Complex Algebraic Geometry I* §6.1; Griffiths-Harris *Principles of Algebraic Geometry* §0.7 (Kähler identities); Demailly *Complex Analytic and Differential Geometry* §VI.8; Frölicher 1955 *Proc. Nat. Acad. Sci. USA* 41, 641–644 (the Dolbeault-to-de-Rham spectral sequence); Angella-Tomassini 2013 *Invent. Math.* 192 (quantitative inequality between Bott-Chern, Aeppli, and Dolbeault dimensions); Angella *Cohomological Aspects in Complex Non-Kähler Geometry* (Springer LNM 2095, 2014, modern reference)
  - intermediate: Voisin Vol I §6.1; Griffiths-Harris §0.7; Demailly §VI.8
  - beginner: intuition that three exactness conditions collapse onto one on compact Kähler
- **notes**: On a compact Kähler manifold, a d-closed (p, q)-form that is d-exact, ∂-exact, or ∂̄-exact is in fact ∂∂̄-exact: equivalently $\ker(d) \cap \operatorname{im}(d) = \ker(d) \cap \operatorname{im}(\partial \bar{\partial})$ on the level of forms. Proof uses the Kähler identities $[\Lambda, \partial] = i \bar{\partial}^*, [\Lambda, \bar{\partial}] = -i \partial^*$, which force $\Delta_d = 2\Delta_\partial = 2\Delta_{\bar{\partial}}$ and hence simultaneous harmonicity across the three derivative operators; combined with the Hodge decomposition of $\Omega^{p, q}$ for the Dolbeault Laplacian, the harmonic-free residual lies in $\operatorname{im}(\partial \bar{\partial})$. Headline consequence (Deligne-Griffiths-Morgan-Sullivan 1975 *Invent. Math.* 29): *formality* of the de Rham algebra — the real DGA $(\Omega^*(X; \mathbb{R}), d)$ is connected by a zig-zag of quasi-isomorphisms to its cohomology ring $(H^*(X; \mathbb{R}), 0)$ with zero differential, via the intermediate dga $\ker(d^c) \cap \Omega^*$; all higher Massey products in rational cohomology vanish; the Sullivan minimal model is freely generated by the cohomology ring. Second consequence: Frölicher spectral sequence degeneration at $E_1$ — the differential $d_1 : E_1^{p, q} = H^{p, q}_{\bar{\partial}}(X) \to E_1^{p+1, q}$ vanishes on ∂̄-harmonic representatives because Kähler symmetry makes them simultaneously ∂-harmonic; iteration gives $E_1 = E_\infty$, equivalent to the Hodge decomposition. Third consequence: Bott-Chern equals Dolbeault equals de Rham (in matched bidegrees) on a compact Kähler manifold — the four cohomology theories coincide, expressed quantitatively in Angella-Tomassini's inequality $\dim H^{p, q}_{BC} + \dim H^{p, q}_A \geq 2 \dim H^{p, q}_{\bar{\partial}}$ with equality iff the lemma holds. Fourth: the Hodge filtration is independent of the choice of Kähler metric (only the harmonic representatives change). Failure on non-Kähler manifolds: *Hopf surface* $S^1 \times S^3$ — $b_2 = 0$ rules out any Kähler form; $h^{1, 0} = 0 \neq 1 = h^{0, 1}$ breaks Hodge symmetry. *Iwasawa nilmanifold* $\Gamma \backslash G$ for $G$ the complex Heisenberg group — $h^{1, 0} + h^{0, 1} = 5 \neq 4 = b_1$ (Frölicher non-degeneration), non-vanishing triple Massey product in rational cohomology (non-formal). The lemma is now a defining property of *$\partial \bar{\partial}$-manifolds*, a strictly broader class than Kähler that nonetheless inherits Kähler-style cohomological rigidity; Fujiki class-$\mathcal{C}$ manifolds (bimeromorphic to Kähler) and certain Moishezon manifolds are ddbar but not Kähler. Modern refinements: higher-order ddbar-Massey products (Tirabassi-Tomassini 2018; Angella-Sferruzza 2019). Lean status: `partial`, module `Codex.AlgGeom.Hodge.DdbarLemma` declares the ddbar-lemma plus the Frölicher E_1-degeneration corollary plus the Bott-Chern-equals-Dolbeault bijection with `sorry` proof bodies pending the compact-Kähler-manifold + bidegree-form + Dolbeault-Laplacian API in Mathlib.

### hodge.hard-lefschetz

- **title**: Hard Lefschetz theorem
- **unit**: `04.09.07`
- **prerequisites**: `alg-geom.hodge-decomposition` (04.09.01), `alg-geom.hodge-index-theorem` (04.05.09)
- **tier_anchors**:
  - master: Lefschetz 1924 *L'analysis situs et la géométrie algébrique* (originator monograph for Lefschetz pencils and the precursor topological theorem); Hodge 1941 *The Theory and Applications of Harmonic Integrals* (the harmonic-integral / $\mathfrak{sl}_2$-action proof); Weil 1958 *Variétés Kählériennes*; Griffiths-Harris 1978 *Principles of Algebraic Geometry* §0.7 (Hodge-Riemann bilinear relations) + §1.2 (Lefschetz decomposition); Voisin 2002 *Hodge Theory and Complex Algebraic Geometry I* §6.2 (modern analytic proof); Deligne 1968 *Théorème de Lefschetz et critères de dégénérescence de suites spectrales* *Publ. Math. IHÉS* 35 (algebraic-geometric proof via Weil conjectures); Beilinson-Bernstein-Deligne 1982 *Faisceaux pervers* *Astérisque* 100 (decomposition theorem and the perverse-sheaf generalisation); Saito 1988 *Modules de Hodge polarisables* *Publ. RIMS Kyoto Univ.* 24 (mixed Hodge modules)
  - intermediate: Voisin Vol I §6.2; Griffiths-Harris §0.7 + §1.2
  - beginner: cup product with the Kähler class is an isomorphism between symmetric cohomological degrees on a compact Kähler manifold
- **notes**: For a compact Kähler manifold $X$ of complex dimension $n$ with Kähler class $[\omega] \in H^{1, 1}(X, \mathbb{R})$, the iterated cup-product map $L^k = [\omega]^k \cup - : H^{n - k}(X, \mathbb{R}) \to H^{n + k}(X, \mathbb{R})$ is an isomorphism for every $0 \leq k \leq n$; the map respects the Hodge decomposition by sending $H^{p, q}$ isomorphically to $H^{p + k, q + k}$ for $p + q = n - k$. The proof has three layers: (1) the Kähler identities $\Delta_d = 2 \Delta_{\bar{\partial}}$ promote the Lefschetz operator $L$, its $L^2$-adjoint $\Lambda$, and the grading operator $H$ (acting on $H^k$ as multiplication by $k - n$) to an $\mathfrak{sl}_2(\mathbb{R})$-triple satisfying $[L, \Lambda] = H$, $[H, L] = 2L$, $[H, \Lambda] = -2 \Lambda$; (2) the de Rham complex of $X$ thereby becomes a finite-dimensional $\mathfrak{sl}_2$-representation, which classifies as a direct sum of irreducibles $V_m$ of dimension $m + 1$ indexed by highest weight $m$; (3) the iso-statement of $L^k$ is immediate from $\mathfrak{sl}_2$-representation theory since $L^k$ sends the $-k$-eigenspace to the $+k$-eigenspace inside each $V_m$ with $m \geq k$ isomorphically. The theorem implies the Lefschetz decomposition $H^k = \bigoplus_{j \geq 0,\ k - 2j \geq 0} L^j P^{k - 2j}$, where primitive cohomology $P^{\ell} = \ker(L^{n - \ell + 1})$ is the highest-weight component of each $\mathfrak{sl}_2$-irreducible. Together with the Hodge-Riemann bilinear relations [04.09.08] on primitive cohomology, the Hard Lefschetz iso defines a polarised Hodge structure on each cohomology group. The surface case is the Hodge index theorem [04.05.09]. Deligne 1968 gave the first algebraic-geometric proof for smooth projective varieties over arbitrary algebraically closed fields, via the Weil conjectures and the Frobenius weight filtration on $\ell$-adic cohomology; Beilinson-Bernstein-Deligne 1982 generalised this to the decomposition theorem for direct images of perverse sheaves under proper morphisms between complex algebraic varieties, which also produced Hard Lefschetz on intersection cohomology of singular projective varieties. Stanley 1980 deduced the unimodality of $h$-vectors of simplicial polytopes from Hard Lefschetz on smooth projective toric varieties, and Adiprasito-Huh-Katz 2018 extended Hodge-Lefschetz positivity to matroid combinatorics. Donaldson 1999 showed that every symplectic four-manifold admits a Lefschetz pencil, extending the topological side to symplectic geometry. Lean status: `partial`, module `Codex.AlgGeom.Hodge.HardLefschetz` declares the Lefschetz $\mathfrak{sl}_2$-triple via the `LefschetzData` structure, the Hard Lefschetz iso $L^k : H^{n - k} \to H^{n + k}$ as a `sorry`-stubbed theorem, and the Lefschetz decomposition of cohomology into primitive components pending the compact-Kähler-manifold + de-Rham-complex + Kähler-identities API in Mathlib.

### moduli.kirwan-stratification

- **title**: Kirwan stratification of the unstable locus
- **unit**: `04.10.08`
- **prerequisites**: `alg-geom.git`
- **tier_anchors**:
  - master: Kirwan 1984 *Cohomology of Quotients in Symplectic and Algebraic Geometry* (Princeton Math. Notes 31); Kirwan 1985 *Partial desingularisations of quotients of non-singular varieties* (Inventiones 81, 547-569); Atiyah-Bott 1983 *Phil. Trans. Royal Soc. A* 308; Mumford-Fogarty-Kirwan *GIT* 3rd ed. §6; Ness 1984 *Amer. J. Math.* 106; Hesselink 1978 *J. reine angew. Math.* 303/304; Kempf 1978 *Ann. of Math.* 108
  - intermediate: Kirwan 1984 *Cohomology of Quotients* Ch. 12 (algebraic side) + Ch. 4-5 (symplectic side); MFK §6; Newstead lectures
  - beginner: Intuition — the bad set inside a GIT quotient is layered into finitely many smooth invariant pieces ordered by how unstable they are
- **notes**: For a complex reductive group $G$ acting on a smooth projective variety $X$ with $G$-linearised ample line bundle $L$, the unstable locus $X^{us} = X \setminus X^{ss}$ decomposes as a finite disjoint union of smooth $G$-invariant locally closed Kirwan strata $S_\beta$ indexed by points $\beta$ of a closed positive Weyl chamber $\mathfrak{t}_+$ of a maximal compact $K \subset G$. The index set $\mathcal{B}$ is the finite collection of $\beta$ that arise as the closest point to the origin in the convex hull of a Weyl orbit of a weight of the $T$-action on $L$ restricted to $X^T$ (Hesselink 1978 + Kempf 1978 optimal-one-parameter-subgroup theorem). Each stratum has explicit codimension $d_\beta = \mathrm{codim}_{\mathbb{C}}(Z_\beta, X) - \dim_\mathbb{C}(G/P_\beta)$ where $Z_\beta$ is the $\beta$-fixed-locus component and $P_\beta$ is the associated parabolic. Each $S_\beta$ retracts $G$-equivariantly onto the parabolic bundle $G \times_{P_\beta} Y_\beta^{ss}$ over the semistable sub-locus of $Z_\beta$. On the symplectic side, $S_\beta$ is the unstable manifold of the Morse-Bott critical set $K \cdot Z_\beta$ of $\|\mu\|^2 : X \to \mathbb{R}_{\geq 0}$ under the gradient flow of $-\|\mu\|^2$ (Kirwan 1984 §4 + §6; Ness 1984). The function $\|\mu\|^2$ is $K$-equivariantly perfect — its equivariant Morse-Bott inequalities are equalities — because the negative bundles of the critical sets carry $K$-equivariant complex structures (Atiyah-Bott 1983 Proposition 13.4). Consequence: the equivariant Poincaré series of $X$ equals the sum of the contributions from the Kirwan strata, $P^G_t(X) = P^G_t(X^{ss}) + \sum_{\beta \neq 0} t^{2 d_\beta} P^G_t(S_\beta)$. Kirwan surjectivity (Theorem 5.4): the natural restriction $H^*_G(X; \mathbb{Q}) \to H^*_G(X^{ss}; \mathbb{Q}) = H^*(X //_L G; \mathbb{Q})$ is surjective with kernel generated by the equivariant Thom classes $\mathrm{Th}_\beta \in H^{2 d_\beta}_G(X; \mathbb{Q})$ of the unstable strata. Worked example: $\mathrm{SL}_2$ on binary $d$-forms gives Kirwan strata indexed by the root-multiplicity $m \in \{\lceil d/2 \rceil + 1, \ldots, d\}$, with codimensions $m - 1$. Partial desingularisations (Kirwan 1985 *Inventiones* 81): when strictly semistable points exist, a sequence of $G$-equivariant blow-ups along strictly-semistable Kirwan strata produces $\widetilde{X //_L G}$ for which surjectivity holds. Applications: cohomology of moduli of vector bundles on a curve (Kirwan 1986 *Inventiones* 86, completing Atiyah-Bott 1983); cohomology of moduli of stable maps (Behrend-Manin); K-stability (Chen-Donaldson-Sun 2015 Yau-Tian-Donaldson). Lean status: `partial`, module `Codex.AlgGeom.Moduli.KirwanStratification` declares the existence of the stratification (`kirwan_stratification`), the equivariant Morse-equality (`kirwan_morse_equality`), and Kirwan surjectivity (`kirwan_surjectivity`) with `sorry` proof bodies pending the reductive-group + linearised-line-bundle + moment-map + Morse-Bott-decomposition pipelines in Mathlib.

### char-classes.oriented-bordism-pontryagin-thom

- **title**: Oriented bordism and the Pontryagin-Thom construction
- **unit**: `03.06.13`
- **prerequisites**: `char-classes.pontryagin-chern.definitions`, `char-classes.sw-pontryagin-numbers`, `char-classes.unoriented-bordism-thom`
- **tier_anchors**:
  - master: Thom 1954 *Comment. Math. Helv.* 28, 17-86 (oriented case alongside unoriented; introduces MSO Thom spectrum and the rational generators); Wall 1960 *Ann. Math.* 72, 292-311 *Determination of the cobordism ring* (integral computation of Ω^SO_* through dimension 8; Wu manifold as the Z/2 generator in dimension 5); Milnor-Stasheff *Characteristic Classes* §17 (Pontryagin-Thom collapse for MSO); Stong *Notes on Cobordism Theory* (Princeton, 1968) Ch. V; Hirzebruch *Topological Methods in Algebraic Geometry* §1.5 (signature theorem and L-genus on Ω^SO_*); Novikov 1962 *Mat. Sb.* 57(99) (Adams spectral sequence for MSO; 2-primary torsion at higher dimensions)
  - intermediate: Milnor-Stasheff §17 (Pontryagin-Thom oriented case); Stong Ch. V (oriented bordism); Hirzebruch §1.5
  - beginner: Hatcher §3.D informal opening upgraded to oriented; oriented annulus / arrow pictures of compatibly oriented bordism
- **notes**: The oriented bordism group `Ω^SO_n` is the abelian group of closed smooth oriented `n`-manifolds modulo the oriented bordism relation `M ~_SO N <=> exists oriented W^{n+1} with boundary M sqcup \bar N`, with addition by disjoint union and additive inverse `-[M] = [\bar M]` from orientation reversal. Elements need not be 2-torsion; the obstruction to 2-torsion is the existence of an orientation-reversing self-diffeomorphism (CP^2 has none, so [CP^2] has infinite order). The graded ring `Ω^SO_* = ⊕_n Ω^SO_n` carries Cartesian-product multiplication. Bordism invariance of Pontryagin numbers (Thom 1954): if M, N are oriented-bordant 4k-manifolds then `<p_I(TM), [M]> = <p_I(TN), [N]>` in Z for every partition I of k. The Pontryagin-Thom collapse in the oriented case is built from a smooth oriented embedding `M^n ⊂ S^{n+k}` and the oriented normal bundle, classified by `BSO(k)`, yielding maps into the oriented Thom spectrum `MSO = colim_k Σ^-k Th(γ^k_SO(k))`. Thom's main theorem (oriented case): the oriented Thom homomorphism `Φ^SO : Ω^SO_* → π_*(MSO)` is a ring isomorphism. Rational computation (Thom 1954, Wall 1960): `Ω^SO_* ⊗ Q ≅ Q[CP^2, CP^4, CP^6, …]` is a polynomial Q-algebra on the even-dimensional complex projective spaces, with `|CP^{2k}| = 4k`; rationally Pontryagin numbers separate bordism classes. Wall 1960 integral computation through dimension 8: `Ω^SO_0 = Z`, `Ω^SO_1 = Ω^SO_2 = Ω^SO_3 = 0`, `Ω^SO_4 = Z<[CP^2]>` with signature isomorphism `σ : Ω^SO_4 → Z`, `Ω^SO_5 = Z/2` generated by the Wu manifold `W^5 = SU(3)/SO(3)` (with non-zero Stiefel-Whitney number `w_2 w_3`), `Ω^SO_6 = Ω^SO_7 = 0`, `Ω^SO_8 = Z^2<[CP^4], [CP^2 × CP^2]>`. Wall's classification: Pontryagin numbers and Stiefel-Whitney numbers together separate Ω^SO_*; rationally Pontryagin numbers alone suffice. The signature is the canonical multiplicative-sequence homomorphism `σ : Ω^SO_* → Z` via the Hirzebruch L-genus; `σ(CP^{2k}) = 1` on every rational generator. Numerical witnesses: `3σ(CP^2) = p_1(CP^2)[CP^2] = 3`, `45σ(CP^4) = 7p_2(CP^4) - p_1(CP^4)^2 = 70 - 25 = 45`. Lean status: partial (theorems stated, sorry proof bodies pending Mathlib smooth-oriented-manifold + Pontryagin-class + MSO-Thom-spectrum infrastructure; decidable numerical witnesses for Hirzebruch at CP^2 and CP^4 included).

### tropical.semiring-polynomial

- **title**: Tropical semiring and tropical polynomial
- **unit**: `04.12.01`
- **prerequisites**: toric-geometry.algebraic-torus-character-lattices
- **tier_anchors**:
  - master: Maclagan-Sturmfels 2015 *Introduction to Tropical Geometry* (AMS GSM 161) Ch. 1, 3; Itenberg-Mikhalkin-Shustin 2009 *Tropical Algebraic Geometry* (Oberwolfach Seminars 35) Ch. 1; Mikhalkin 2006 ICM survey; Bieri-Groves 1984 *J. reine angew. Math.* 347, 168-195; Kapranov 2000 *Amoebas, Newton polytopes, and tropical varieties* (preprint); Sturmfels 2002 *Solving Systems of Polynomial Equations* (CBMS 97) Ch. 9
  - intermediate: Maclagan-Sturmfels §1.1, §3.1; Itenberg-Mikhalkin-Shustin Ch. 1
  - beginner: Maclagan-Sturmfels §1.1 informal — the min-plus semiring and piecewise-linear polynomials; Speyer-Sturmfels 2009 *Mathematics Magazine* 82 (accessible exposition)
- **notes**: The tropical semiring $\mathbb{T} = (\mathbb{R} \cup \{+\infty\}, \oplus, \odot)$ with $x \oplus y = \min(x, y)$ (min-plus convention) and $x \odot y = x + y$ is a commutative idempotent semifield: associative, commutative, distributive, idempotent ($x \oplus x = x$), with additive identity $+\infty$, multiplicative identity $0$, and multiplicative inverses for finite reals. Idempotence obstructs additive inverses (the structure is not a ring); residuation $a \backslash b = b - a$ replaces subtraction. The dual max-plus convention $(\mathbb{R} \cup \{-\infty\}, \max, +)$ is equivalent via $x \mapsto -x$ — min-plus matches valuation conventions on non-archimedean fields. A tropical polynomial $p(x) = \oplus_{\alpha \in A} c_\alpha \odot x^\alpha = \min_\alpha(c_\alpha + \langle \alpha, x \rangle)$ on $\mathbb{R}^n$ is a piecewise-linear concave function — the minimum of finitely many affine functions with integer slope vectors $\alpha \in \mathbb{Z}^n$. The tropical hypersurface $V(p)$ is the corner locus: equivalently the set where the minimum is attained at least twice, equivalently the non-smooth locus of $p$ as a piecewise-linear function. Bieri-Groves 1984: $V(p)$ is a rational polyhedral complex of pure codimension one in $\mathbb{R}^n$, balanced at every $(n-2)$-cell with integer multiplicities $\mu_e$ given by lattice lengths of edges in the Newton-polytope subdivision. Newton-polytope duality: the regular subdivision of $\mathrm{Newt}(p) = \mathrm{Conv}(A)$ induced by the lift $\alpha \mapsto (\alpha, c_\alpha) \in \mathbb{R}^{n+1}$ is **dual** to the polyhedral structure on $V(p)$ — top-cells of $V(p)$ correspond bijectively to lower edges of $\mathrm{Newt}(p)$, codimension-two cells correspond to 2-faces, dimensions reverse. Function-realisation theorem: every piecewise-linear concave function with integer slopes and finitely many pieces arises from a tropical polynomial, and the map from canonical-representative polynomials to functions is bijective (redundancy is the failure mode for non-canonical representatives). Tropical lines in $\mathbb{R}^2$ are Y-shapes with three rays meeting at one trivalent vertex (primitive directions $(-1,-1), (1,0), (0,1)$ sum to $(0,0)$ — the balancing identity); tropical conics in $\mathbb{R}^2$ have three trivalent vertices, three bounded edges, six unbounded rays for generic coefficients (dual to the four-lattice-triangle subdivision of the degree-2 Newton triangle). Originators: Bieri-Groves 1984 (polyhedral structure of valuation tropicalisations); Kapranov 2000 (term "tropical variety", non-archimedean amoeba identification); Mikhalkin 2005 (enumerative correspondence on $\mathbb{R}^2$). Modern canonical references: Maclagan-Sturmfels 2015 (AMS textbook); Itenberg-Mikhalkin-Shustin 2009 (Oberwolfach text); Mikhalkin 2006 ICM survey. Historical lineage from Imre Simon (São Paulo, automata theory, 1970s) — hence the name "tropical" attributed to Pin 1998 — Cuninghame-Green 1979 (max-plus minimax algebra), and the Maslov-Litvinov 2005 dequantisation philosophy treating min-plus as the classical limit of $\hbar \to 0$ in idempotent mathematics. Connection to mirror symmetry via Gross-Siebert 2011 reconstruction (Annals 174) and Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114). Lean status: `partial`, module `Codex.AlgGeom.Tropical.TropicalSemiringPolynomial` declares the tropical-semiring idempotence axiom (proved via Mathlib's `Tropical.add_self`), the `TropicalPolynomial` schematic structure with `eval` / `argmin` / `tropicalHypersurface` definitions, the corner-locus characterisation, the Bieri-Groves polyhedral-complex theorem, the balancing condition at codim-2 cells, and a worked example with the standard tropical conic in two variables — with `sorry`-stubbed proof bodies pending Mathlib polyhedral-complex infrastructure.


### tropical.curve-balanced-metric-graph

- **title**: Tropical curve as balanced rational metric graph
- **unit**: `04.12.02`
- **prerequisites**: `toric-geometry.algebraic-torus-character-lattices` (04.11.01)
- **tier_anchors**:
  - master: Mikhalkin 2005 *Enumerative tropical algebraic geometry in $\mathbb{R}^2$*, J. Amer. Math. Soc. 18, 313–377 (originator definition of tropical curves as balanced rational polyhedral 1-complexes with positive integer edge weights, and the correspondence theorem with classical enumerative invariants in $\mathbb{R}^2$); Maclagan–Sturmfels 2015 *Introduction to Tropical Geometry* Ch. 3 (canonical exposition); Brannetti–Melo–Viviani 2011 *Adv. Math.* 226 (abstract tropical curves as weighted metric graphs, tropical Torelli map); Baker–Norine 2007 *Adv. Math.* 215 (tropical Riemann–Roch); Caporaso 2012 *Algebraic and tropical curves: comparing their moduli spaces* (Handbook of Moduli)
  - intermediate: Mikhalkin 2005 §2; Maclagan–Sturmfels §3.1–§3.4
  - beginner: Maclagan–Sturmfels §3.1 informal opening on tropical lines and conics
- **notes**: A tropical curve in $\mathbb{R}^n$ is a finite rational polyhedral 1-complex $\Gamma \subset \mathbb{R}^n$ whose edges carry positive integer weights $w_e$ and primitive integer directions $u_e$ (rational primitive vectors in $\mathbb{Z}^n$), satisfying the *balancing condition* $\sum_{e \ni v} w_e \cdot u_{e, v} = 0 \in \mathbb{Z}^n$ at every vertex $v$, with $u_{e, v}$ the primitive integer direction of $e$ pointing away from $v$. Equivalently, an *abstract tropical curve* is a triple $(G, w, \ell)$ where $G$ is a finite multigraph, $w : E(G) \to \mathbb{Z}_{> 0}$ assigns positive integer weights, and $\ell : E(G) \to \mathbb{R}_{> 0} \cup \{\infty\}$ assigns positive edge lengths (with $\infty$ modelling unbounded ends); the metric realisation $|\Gamma|$ is the topological space obtained by gluing intervals. Foundational structure theorem (Mikhalkin 2005, derived from Bieri–Groves 1984): every tropical curve $\mathrm{Trop}(V)$ arising as the tropicalisation of an algebraic curve $V \subset (\mathbb{C}^*)^n$ over the Puiseux-series field $K = \mathbb{C}\{\!\{t\}\!\}$ is a balanced rational polyhedral 1-complex, with edge weights given by intersection multiplicities in the toric resolution and balancing forced by the integer-valued zero-degree identity for principal divisors. The *degree* of a tropical curve in $\mathbb{R}^2$ is the integer $d$ such that the unbounded ends' weighted directions form the multiset $\{d \cdot (1, 0), d \cdot (0, 1), d \cdot (-1, -1)\}$. The *genus* $g(\Gamma) = b_1(|\Gamma|) = |E(G)| - |V(G)| + c(G)$ is the first Betti number, a purely combinatorial invariant of the underlying graph (independent of weights or lengths). Worked example: the standard tropical line in $\mathbb{R}^2$ has one vertex with three weight-1 rays in primitive directions $(1, 0), (0, 1), (-1, -1)$ (sum is $(0, 0)$, balancing holds); the standard tropical line in $\mathbb{R}^n$ has $n + 1$ weight-1 rays in directions $e_1, \ldots, e_n, -(e_1 + \cdots + e_n)$. Newton-subdivision duality (Mikhalkin 2005 §3): a tropical curve $\Gamma \subset \mathbb{R}^2$ is dual to a subdivision of its Newton polytope $\Delta \subset \mathbb{R}^2$, with vertices of $\Gamma$ in bijection with maximal cells of the subdivision and bounded edges of $\Gamma$ in bijection with bounded edges of the subdivision; the weight of an edge of $\Gamma$ equals the integer length of the dual edge. Degree-genus inequality $g \leq \binom{d - 1}{2}$ with equality for smooth tropical curves (unimodular Newton subdivisions). Moduli (Brannetti–Melo–Viviani 2011): $M_g^{\mathrm{trop}}$ is a generalised cone complex of dimension $3g - 3$ for $g \geq 2$, identified with the skeleton of the Berkovich analytification of $\overline{M}_g$ (Abramovich–Caporaso–Payne 2015). Tropical Riemann–Roch (Baker–Norine 2007 *Adv. Math.* 215): $r(D) - r(K_\Gamma - D) = \deg(D) - g + 1$ for every divisor $D$ on a tropical curve of genus $g$, with $K_\Gamma = \sum_v (\mathrm{val}(v) - 2) \cdot v$ and $r$ the chip-firing-defined combinatorial rank. Tropical Clifford inequality (Coppens 2016): $r(D) \leq \deg(D) / 2$ for effective $D$ with $0 \leq \deg(D) \leq 2g - 2$. Lean status: `partial`, module `Codex.AlgGeom.Tropical.TropicalCurve` declares the `PrimitiveVector`, `WeightedDirection`, `VertexData.balanced`, `TropicalCurve`, `WeightedMetricGraph`, `Divisor`, and `tropical_riemann_roch` with `sorry` proof bodies pending the rational-polyhedral-complex + chip-firing-equivalence + Picard-group API in Mathlib.

### tropical.newton-polytope-amoeba

- **title**: Newton polytope and non-archimedean amoeba
- **unit**: `04.12.04`
- **prerequisites**: `toric-geometry.rational-polyhedral-cone-dual`, `tropical.semiring-polynomial`
- **tier_anchors**:
  - master: Gelfand-Kapranov-Zelevinsky 1994 *Discriminants, Resultants, and Multidimensional Determinants* (Birkhauser) Ch. 6 + Ch. 11 (originator of "amoeba"); Mikhalkin 2004 *Decomposition into pairs-of-pants for complex algebraic hypersurfaces* (Topology 43, 1035-1065); Einsiedler-Kapranov-Lind 2006 *Non-archimedean amoebas and tropical varieties* (J. reine angew. Math. 601); Forsberg-Passare-Tsikh 2000 *Laurent determinants and arrangements of hyperplane amoebas* (Adv. Math. 151, 45-70); Maclagan-Sturmfels 2015 §1.4 + Ch. 3; Bergman 1971 *Trans. AMS* 157 (originator of logarithmic limit set)
  - intermediate: Maclagan-Sturmfels §1.4 + Ch. 3; Gelfand-Kapranov-Zelevinsky Ch. 6 §1 + Ch. 11 §1
  - beginner: Maclagan-Sturmfels §1.4 informal — the Newton polytope as the "shadow" of a Laurent polynomial; the amoeba as the projection of a hypersurface to log-modulus coordinates
- **notes**: For a Laurent polynomial $f = \sum_{\alpha \in \mathrm{supp}(f)} c_\alpha x^\alpha$ over a field $K$ in $n$ variables, the Newton polytope is $\mathrm{Newt}(f) = \mathrm{conv}(\mathrm{supp}(f)) \subseteq M_\mathbb{R}$, a lattice polytope encoding the support combinatorially. For $K = \mathbb{C}$, the complex amoeba is $\mathcal{A}(f) = \mathrm{Log}(V(f)) \subseteq N_\mathbb{R}$ where $\mathrm{Log} : (\mathbb{C}^*)^n \to N_\mathbb{R}$ takes coordinate-wise log-absolute-value; the amoeba is a closed subset of $N_\mathbb{R}$ with finitely many connected components in its complement, labelled by lattice points of $\mathrm{Newt}(f) \cap M$ via the Forsberg-Passare-Tsikh order map. For $K$ a non-archimedean field with valuation $v$, the non-archimedean amoeba is $\mathcal{A}_v(f) = \mathrm{val}(V(f)) \subseteq N_\mathbb{R}$ where $\mathrm{val}$ is coordinate-wise valuation; Kapranov's theorem (Einsiedler-Kapranov-Lind 2006) identifies $\mathcal{A}_v(f)$ exactly with the tropical hypersurface $\mathrm{trop}(f) = \{u : T(f)(u) = \min_\alpha (v(c_\alpha) + \langle \alpha, u\rangle) \text{ attained twice}\}$. The Forsberg-Passare-Tsikh tentacle-alignment theorem identifies every recession direction of $\mathcal{A}(f)$ with the outer normal to a facet of $\mathrm{Newt}(f)$, by a cancellation argument on the dominant monomials of $f$ at far-away points of $V(f)$. The Mikhalkin spine-convergence theorem (Mikhalkin 2004 Theorem 4) is the analytic-degeneration version: as $t \to \infty$, the rescaled complex amoeba $\mathcal{A}(f^t)/\log t$ converges in Hausdorff metric on bounded regions to the tropical hypersurface $\mathrm{trop}(f)$, with the rescaling rate $O(1/\log t)$. The combinatorial bridge between the three objects is the normal-fan-of-$\mathrm{Newt}(f)$ structure on $N_\mathbb{R}$: tentacle directions of $\mathcal{A}(f)$ = outer normals to facets of $\mathrm{Newt}(f)$ = ray directions of $\mathrm{trop}(f)$ for trivial valuation. The regular-subdivision correspondence (Maclagan-Sturmfels §3) extends this: $\mathrm{trop}(f) \subset \mathbb{R}^2$ is dual to a regular subdivision $\mathcal{R}_f$ of $\mathrm{Newt}(f)$ obtained by lifting support points via the valuation and projecting the lower hull. The Bernstein-Kushnirenko theorem connects $\mathrm{Newt}(f)$ to enumerative geometry: the number of common zeros of $f_1, \ldots, f_n$ in $(\mathbb{C}^*)^n$ for generic coefficients equals the mixed volume $\mathrm{MV}(\mathrm{Newt}(f_1), \ldots, \mathrm{Newt}(f_n))$. The Bergman-Bieri-Groves theorem identifies the more general tropical variety $\mathrm{trop}(V)$ of a subvariety $V \subseteq T$ as a balanced rational polyhedral complex of pure dimension $\dim V$, with multiplicities at top cells satisfying the balancing condition at codimension-1 faces. The Sturmfels-Tevelev geometric description identifies $\mathrm{trop}(V)$ with the recession data of the closure of $V$ in a suitable toric compactification, bridging the abstract valuative definition to explicit toric-geometric computation. The Newton-polytope and amoeba dictionary is the foundational entry point to the tropical-geometry-and-mirror-symmetry program: it feeds Mikhalkin's correspondence theorem [04.12.05] on enumeration of complex curves via tropical curves, the Nishinou-Siebert correspondence [04.12.06] on log Gromov-Witten invariants, and the Gross-Siebert reconstruction program [04.12.09] on Calabi-Yau mirror symmetry via tropical manifolds. Originator chain: Newton 1671/1736 (Newton polygon for Puiseux expansion); Bergman 1971 (logarithmic limit set); Gelfand-Kapranov-Zelevinsky 1994 (amoeba terminology, complex case); Kapranov 1995 (non-archimedean amoeba); Forsberg-Passare-Tsikh 2000 (order map, complement components); Mikhalkin 2000-2004 (spine, pairs-of-pants decomposition, spine convergence); Einsiedler-Kapranov-Lind 2006 (canonical published proof of Kapranov's theorem). Lean status: `partial`, module `Codex.AlgGeom.Tropical.NewtonPolytopeAmoeba` declares the `LaurentPoly` structure, the `newtonPolytope` and `amoeba` and `tropicalHypersurface` definitions, the `tentacle_alignment` theorem (Forsberg-Passare-Tsikh recession-direction = facet-normal statement), and the `spine_convergence` placeholder (Mikhalkin 2004), with `sorry`-stubbed proof bodies pending Mathlib non-archimedean amoeba + Newton-polytope + Hausdorff-convergence infrastructure.

### tropical.kapranov-theorem

- **title**: Kapranov's theorem (fundamental theorem of tropical geometry)
- **unit**: `04.12.03`
- **prerequisites**: `toric-geometry.algebraic-torus-character-lattices` (04.11.01); `tropical.semiring-polynomial` (04.12.01)
- **tier_anchors**:
  - master: Einsiedler-Kapranov-Lind 2006 *Non-archimedean amoebas and tropical varieties*, J. Reine Angew. Math. 601, 139-157 (canonical written reference); Kapranov 2000 Hannover talks (originator); Bieri-Groves 1984 *J. reine angew. Math.* 347, 168-195 (polyhedral predecessor); Maclagan-Sturmfels 2015 *Introduction to Tropical Geometry* (AMS GSM 161) Ch. 3 (canonical monograph); Sturmfels 2002 *Solving Systems of Polynomial Equations* CBMS 97 §9 (Gröbner-fan formulation); Speyer-Sturmfels 2004 *Adv. Geom.* 4 (tropical Grassmannian worked example); Gubler 2013 *A guide to tropicalizations* (Berkovich-analytic viewpoint)
  - intermediate: Maclagan-Sturmfels Ch. 3; Einsiedler-Kapranov-Lind 2006
  - beginner: Maclagan-Sturmfels §1.1 — the three-rayed tropical line from `x + y + 1 = 0`
- **notes**: For an algebraically closed field $K$ with surjective non-archimedean valuation $\mathrm{val} : K^* \to \mathbb{R}$ (canonical example: Puiseux series $K = \bigcup_d \mathbb{C}((t^{1/d}))$), an ideal $I \subseteq K[x_1^\pm, \ldots, x_n^\pm]$ defining a subvariety $V(I) \subseteq (K^*)^n$ produces three a priori distinct subsets of $\mathbb{R}^n$: $\mathrm{trop}(I)_\mathrm{val}$ (closure of valuation image of $V(I)(K)$), $\mathrm{trop}(I)_\mathrm{init}$ (locus of weights $w$ at which the initial ideal $\mathrm{in}_w(I)$ contains no monomial), and $\mathrm{trop}(I)_\mathrm{amoeba}$ (Hausdorff limit of complex amoebas as $t \to 0$). The fundamental theorem (Kapranov 2000 unpublished; Einsiedler-Kapranov-Lind 2006 written) asserts the three coincide and produce a closed polyhedral subcomplex of pure dimension equal to the Krull dimension of $K[x^\pm]/I$. Forward direction ($\mathrm{val} \subseteq \mathrm{init}$): strong triangle inequality of the non-archimedean valuation forces uniqueness of the tropical minimum to imply $\mathrm{val}(f(z)) < \infty$, contradicting $f(z) = 0$. Reverse direction ($\mathrm{init} \subseteq \mathrm{val}$): Hensel-style lifting of a residual root in $V(\mathrm{in}_w(I)) \subseteq (\text{residue field}^*)^n$ — non-empty by the Hilbert Nullstellensatz over the algebraically closed residue field — to a $K$-point of $V(I)$ with prescribed coordinate valuations; at residually-singular points the Berkovich-analytic surjectivity of the tropicalisation map (Gubler 2013) supplies the lift. Polyhedral structure: Gröbner-fan finiteness (Sturmfels 1996) refines the equivalence relation $w \sim w' \iff \mathrm{in}_w(I) = \mathrm{in}_{w'}(I)$ into finitely many rational polyhedral cones; pure dimensionality is the ideal-theoretic upgrade of Bieri-Groves 1984. Balancing: at each codimension-one face the multiplicities $m_i$ of adjacent top cones and primitive normal directions $v_i$ satisfy $\sum_i m_i v_i = 0$ in the quotient lattice (Speyer 2004 dissertation; Maclagan-Sturmfels §3.4). Worked example: $\mathrm{trop}(x + y + 1) = 0$ is the three-rayed fan in $\mathbb{R}^2$ with rays in directions $(1, 1)$, $(-1, 0)$, $(0, -1)$ meeting at the origin, multiplicities all $1$, balancing $(1, 1) + (-1, 0) + (0, -1) = (0, 0)$. Bergman-fan specialisation (linear ideals = matroids; Sturmfels 2002, Ardila-Klivans 2006). Downstream applications: Mikhalkin's correspondence theorem [04.12.05] for plane-curve Gromov-Witten counts via tropical curve counts; Nishinou-Siebert [04.12.06] toric-degeneration for toric Calabi-Yau enumeration; SYZ [04.12.10] mirror symmetry as polyhedral-base dualisation; Gross-Siebert reconstruction theorem [04.12.09] for Calabi-Yau varieties from tropical-manifold scattering diagrams. Lean status: `partial`, module `Codex.AlgGeom.Tropical.KapranovTheorem` declares the `ValuedField` structure, `LaurentIdeal` placeholder, the three constructions `tropByValuation`, `tropByInitial`, `tropByAmoeba`, and the equivalences `kapranov_val_eq_init`, `kapranov_amoeba_eq_val`, `kapranov_three_definitions`, plus the Bieri-Groves polyhedral-and-pure-dimension theorem `trop_is_polyhedral_pure_dim` and the tropical-line worked-example theorem `trop_line` with `sorry` proof bodies pending Mathlib algebraically-closed-Puiseux-field + initial-ideal-calculus + Bieri-Groves polyhedral-finiteness + non-archimedean Hensel-lift infrastructure.

### tropical.mikhalkin-correspondence

- **title**: Mikhalkin's correspondence theorem
- **unit**: `04.12.05`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04), `tropical.semiring-polynomial` (04.12.01), `tropical.curve-balanced-metric-graph` (04.12.02)
- **tier_anchors**:
  - master: Mikhalkin 2005 *J. Amer. Math. Soc.* 18, 313-377 (originator — enumerative correspondence in $\mathbb{R}^2$, tropical multiplicity formula, lattice-path enumeration, application to Gromov-Witten of $\mathbb{P}^2$); Mikhalkin 2007 *Inventiones* 167, 213-251 (real version, signed multiplicity for Welschinger invariants); Itenberg-Kharlamov-Shustin 2003 *IMRN* 49 + 2004 *Russian Math. Surveys* 59 (Welschinger invariant tropical computation, logarithmic equivalence); Welschinger 2005 *Inventiones* 162 (real symplectic invariant via solitary-node sign); Nishinou-Siebert 2006 *Duke Math. J.* 135 (toric-degeneration generalisation to higher-dimensional targets); Gathmann-Markwig 2007 *Math. Ann.* 338 (tropical Caporaso-Harris recursion for relative Gromov-Witten); Cavalieri-Johnson-Markwig 2010-2014 (higher-genus and descendant Gromov-Witten tropically); Maclagan-Sturmfels 2015 *Introduction to Tropical Geometry* (GSM 161) Ch. 5-6; Mikhalkin-Rau (draft monograph 2018-2024) Ch. 6-7
  - intermediate: Mikhalkin 2005 §1-§5; Itenberg-Mikhalkin-Shustin 2007 *Tropical Algebraic Geometry* (Oberwolfach Seminars 35) Ch. 4-5; Maclagan-Sturmfels Ch. 6
  - beginner: Mikhalkin 2005 §1 informal — counting complex curves through points equals counting tropical curves through points, with explicit lines / conics / cubics
- **notes**: For a toric surface $X_\Sigma$ with Newton polygon $\Delta \subset \mathbb{Z}^2$ and a generic configuration of $r = |\Delta \cap \mathbb{Z}^2| - 1 - g$ points in $(\mathbb{C}^*)^2 \subset X_\Sigma$, the count $N^{\Delta, g}$ of irreducible complex curves of Newton polygon $\Delta$ and geometric genus $g$ through the points equals the **Mikhalkin tropical count** $\sum_\Gamma m(\Gamma)$ over simple tropical curves of Newton polygon $\Delta$ and genus $g$ through corresponding generic tropical points, weighted by the tropical multiplicity $m(\Gamma) = \prod_V m(V)$. At each trivalent vertex $V$ with weighted primitive outgoing directions $(w_i, v_i)_{i = 1, 2, 3}$ satisfying balancing $\sum w_i v_i = 0$, the multiplicity is $m(V) = w_1 w_2 |\det(v_1, v_2)|$ — equivalently twice the lattice area of the triangle spanned by $w_1 v_1$ and $w_2 v_2$. The three pairwise determinant computations $w_1 w_2 |\det(v_1, v_2)| = w_2 w_3 |\det(v_2, v_3)| = w_1 w_3 |\det(v_1, v_3)|$ all agree, forced by the balancing relation. **Proof structure (Mikhalkin 2005)**: (1) dimension count — both moduli spaces have dimension $r = |\Delta \cap \mathbb{Z}^2| - 1 - g$, matched by combinatorial counts on the tropical side (Mikhalkin Prop. 2.13) and by the genus-degree formula on the algebraic side; (2) local multiplicity matching at trivalent vertices via Bézout-type intersection theory in $(\mathbb{C}^*)^2$, with the determinant $|\det(v_1, v_2)|$ recording the intersection multiplicity of two branches in primitive directions; (3) degeneration argument via the valuation map $\mathrm{val}: (\mathbb{C}\{\{t\}\}^*)^2 \to \mathbb{R}^2$ and the **Viro 1984 patchworking construction**, exhibiting every tropical curve through generic points as the limit of $m(\Gamma)$ complex curves over the Puiseux series field $\mathbb{C}\{\{t\}\}$. **Application to Gromov-Witten of $\mathbb{P}^2$**: for the standard simplex $\Delta_d$ and genus zero, $r = 3d - 1$ (Kontsevich-Manin 1994 dimension count), and the Mikhalkin tropical enumeration via lattice paths in the Newton triangle recovers $N_1 = 1, N_2 = 1, N_3 = 12, N_4 = 620, N_5 = 87304$, agreeing with the WDVV recursion. Mikhalkin's tropical algorithm is the first combinatorial-geometric algorithm reproducing $N_d$ without passing through the WDVV recursion. **Real version (Mikhalkin 2007 + Itenberg-Kharlamov-Shustin 2003)**: the Welschinger invariant $W_d$ of real rational degree-$d$ curves in $\mathbb{P}^2(\mathbb{R})$ through $3d - 1$ real generic points equals the signed Mikhalkin tropical count $\sum_\Gamma (-1)^{n(\Gamma)} m(\Gamma)$, with $n(\Gamma)$ counting odd-multiplicity bounded edges. Welschinger 2005 *Inventiones* 162 established the symplectic invariance (independence of generic configuration and compatible $J$); the tropical formula gives the first effective computation. Values: $W_1 = 1, W_2 = 1, W_3 = 8, W_4 = 240, W_5 = 18264$. Itenberg-Kharlamov-Shustin 2004 proved the logarithmic equivalence $\log W_d \sim \log N_d$ as $d \to \infty$, confirming the real count is exponentially comparable to the complex count despite the cancellation of complex-conjugate pairs. **Generalisations**: Nishinou-Siebert 2006 (higher-dimensional toric targets via toric degenerations — foundation of Gross-Siebert mirror symmetry); Gathmann-Markwig 2007 (tropical Caporaso-Harris recursion for relative Severi degrees of plane curves tangent to a line); Cavalieri-Johnson-Markwig (higher-genus and descendant $\psi$-class invariants tropically). Mikhalkin's correspondence is the genealogical root of modern enumerative tropical geometry and the first complete bridge between the algebraic-geometric tradition of Severi / Gromov-Witten enumeration (Kontsevich-Manin 1994, Caporaso-Harris 1998) and the combinatorial-geometric tradition of Newton-polygon / lattice-path / Viro-patchworking enumeration. Lean status: `partial`, module `Codex.AlgGeom.Tropical.MikhalkinCorrespondence` declares the `TrivalentVertexData` structure (three weighted primitive directions with balancing condition), the multiplicity formula `m(V) = w₁·w₂·|det(v₁, v₂)|` with balancing invariance lemmas, the `SimpleTropicalCurve` and `NewtonPolygon` structures, the `moduliDimension` formula $r = |\Delta \cap \mathbb{Z}^2| - 1 - g$, the `mikhalkin_correspondence` theorem equating complex and tropical counts, the `welschinger_correspondence` for the signed real version, and numerical witnesses ($N_1 = 1, N_2 = 1, N_3 = 12, W_3 = 8$ with the decidable check $N_3 - W_3 = 4$) — with `sorry`-stubbed proof bodies pending Mathlib infrastructure for Puiseux series, toric degenerations, and Viro patchworking.


### tropical.nishinou-siebert-correspondence

- **title**: Nishinou-Siebert correspondence theorem
- **unit**: `04.12.06`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); tropical correspondence in dimension 2 (Mikhalkin) is the n = 2 specialisation
- **tier_anchors**:
  - master: Nishinou-Siebert 2006 *Toric degenerations of toric varieties and tropical curves*, Duke Math. J. 135 (1), 1-51 (originator paper: arbitrary-dimension correspondence via toric degenerations); Gross-Siebert 2011 *From real affine geometry to complex geometry*, Annals of Math. 174 (3), 1301-1428 (mirror-symmetry framework); Mikhalkin 2005 *J. AMS* 18 (the dimension-2 predecessor); Abramovich-Chen 2014 *Asian J. Math.* 18 + Chen 2014 *Annals* 180 + Gross-Siebert 2013 *J. AMS* 26 (log Gromov-Witten foundations); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) for textbook exposition
  - intermediate: Nishinou-Siebert 2006 §1-§3 + §8; Gross 2011 CBMS Ch. 4-6
  - beginner: Gathmann 2006 *Tropical algebraic geometry*, Jahresbericht DMV, §1 informal opening; Mikhalkin 2006 ICM survey
- **notes**: The Nishinou-Siebert correspondence theorem (Nishinou-Siebert 2006, *Duke* 135) generalises Mikhalkin's 2005 correspondence theorem from toric surfaces to toric varieties of arbitrary dimension. Setup: $X_\Sigma$ a smooth projective toric variety of complex dimension $n$, $L$ a $T$-equivariant ample line bundle with associated lattice polytope $\Delta \subseteq M_\mathbb{R}$, $\Xi$ a polyhedral subdivision of $\Delta$, and $\pi : \mathcal{X} \to \mathbb{A}^1_\mathbb{C}$ a toric degeneration with generic fibre $X_\Sigma$ and central fibre $\mathcal{X}_0 = \bigcup_{\Delta_i \in \Xi} X_{\Delta_i}$ a reduced union of toric strata. The dual intersection complex $B(\Xi)$ is the cone complex dual to $\Xi$, an integral affine manifold (with codimension-2 monodromy singularities) of dimension $n$. Theorem (Nishinou-Siebert 2006 Theorem 8.3): for genus $g \geq 0$, curve class $\Delta \in H_2(X_\Sigma, \mathbb{Z})$, expected dimension $r = (1 - g)(n - 3) + \langle c_1(T X_\Sigma), \Delta \rangle$, and $r$ generic points $p_i \in X_\Sigma$, the count $N_{g, \Delta}(X_\Sigma; p_1, \ldots, p_r)$ of genus-$g$ stable maps to $X_\Sigma$ of class $\Delta$ passing through every $p_i$ equals the multiplicity-weighted count $N^{\mathrm{trop}}_{g, \Delta}(\Xi) = \sum_{(\Gamma, h)} m(\Gamma, h)$ of parametrised tropical curves in $B(\Xi)$ matched to the corresponding tropically generic points. Multiplicity: at each trivalent vertex with edge direction vectors $u_1, u_2, u_3 \in N$ ($u_1 + u_2 + u_3 = 0$), $m_v = |\det(u_i, u_j)|$ for any pair (the Mikhalkin lattice determinant); at higher-valence vertices, the Nishinou-Siebert higher-determinantal formula generalises via Plücker volumes. Proof (Nishinou-Siebert 2006 §4-§8): (i) algebraic count = log GW count by definition; (ii) log GW degeneration formula equates smooth-fibre count with log GW count on log smooth central fibre $\mathcal{X}_0$ (Abramovich-Chen 2014 / Gross-Siebert 2013); (iii) tropicalisation map sends log smooth stable maps to parametrised tropical curves in $B(\Xi)$, with the dual graph of $C \subseteq \mathcal{X}_0$ giving $\Gamma$, irreducible-component-to-stratum assignment giving the map $h$, and intersection numbers giving the direction vectors; balancing follows from the toric residue theorem; (iv) local multiplicity match reduces to the Mikhalkin / Plücker formula. Reduction to Mikhalkin: when $\Sigma$ is two-dimensional, $B(\Xi)$ is two-dimensional and the multiplicity formula specialises to $|\det(u_i, u_j)|$, recovering Mikhalkin 2005 *J. AMS* 18. Application to mirror symmetry: the tropical curves enumerated by Nishinou-Siebert are precisely the wall-crossing data of scattering diagrams on $B$ that Gross-Siebert 2011 *Annals* 174 use to construct the mirror Calabi-Yau as a smoothing of the degenerate central fibre. The Gross-Hacking-Keel-Kontsevich structure-constant formula $\vartheta_{q_1} \cdot \vartheta_{q_2} = \sum_{q_3, (\Gamma, h)} m(\Gamma, h) \cdot t^{\mathrm{area}(\Gamma)} \cdot \vartheta_{q_3}$ writes theta-function multiplication on the mirror in terms of Nishinou-Siebert curve counts. SYZ heuristic (Strominger-Yau-Zaslow 1996 *Nucl. Phys. B* 479): mirror Calabi-Yau pairs arise as dual special-Lagrangian torus fibrations over a common base $B$; the dual intersection complex is the algebraic realisation of $B$. Witnesses: classical Severi degrees $N_{0, d}(\mathbb{P}^2) = (1, 12, 620, 87304, \ldots)$ for $d = 2, 3, 4, 5, \ldots$ are recovered as tropical counts in the dimension-2 specialisation (Mikhalkin 2005); higher-dimensional Nishinou-Siebert counts produce e.g. $N_{0, 1}(\mathbb{P}^3) = 1$ (unique line through 2 points) and three-dimensional analogues. Computational tool: Caporaso-Harris recursion (Gathmann-Markwig 2007 *Math. Ann.* 338). Lean status: `partial`, module `Codex.AlgGeom.Tropical.NishinouSiebertCorrespondence` declares the `Lattice`, `Cone`, `Fan`, `ToricVariety`, `PolyhedralSubdivision`, `ToricDegeneration`, `DualIntersectionComplex`, `TropicalCurve`, `algebraicCount`, `tropicalCount`, and the named theorems `nishinou_siebert_correspondence`, `reduces_to_mikhalkin`, `gross_siebert_scattering_input` with placeholder proof bodies pending the log GW + virtual-class + polyhedral-complex API in Mathlib.

### tropical.toric-degeneration-calabi-yau

- **title**: Toric degeneration of a Calabi-Yau variety
- **unit**: `04.12.07`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `tropical.newton-polytope-amoeba` (04.12.04); `tropical.nishinou-siebert-correspondence` (04.12.06)
- **tier_anchors**:
  - master: Gross-Siebert 2006 *Mirror symmetry via logarithmic degeneration data I*, J. Differential Geom. 72 (2), 169-338 (originator paper: the log-geometric mirror programme, toric degeneration of a Calabi-Yau pair, maximally unipotent monodromy); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lecture 4 (textbook exposition); Mumford 1972 *Compositio* 24 + KKMS 1973 *Toroidal Embeddings I* (predecessor polyhedral-degeneration framework); Kulikov 1977 *Math. USSR Izv.* 11 + Persson-Pinkham 1981 *Annals* 113 (K3-degeneration classification, dimension-2 prototype); Morrison 1993 *J. AMS* 6 (maximally unipotent monodromy and the mirror map); Deligne 1971 *Publ. Math. IHÉS* 40 + Schmid 1973 *Inventiones* 22 (limit mixed Hodge structure); Friedman 1983 *Annals* 118 (d-semistability obstruction theory); Nishinou-Siebert 2006 *Duke* 135 (toric-degeneration prototype on toric varieties); Gross-Siebert 2011 *Annals* 174 (reconstruction theorem consuming the toric-degeneration data); Strominger-Yau-Zaslow 1996 *Nucl. Phys. B* 479 (SYZ heuristic); Kontsevich-Soibelman 2006 *Unity of Mathematics* 244 (non-archimedean parallel)
  - intermediate: Gross 2011 CBMS Lecture 4 §4.1-§4.2; Gross-Siebert 2006 §2; KKMS 1973 Ch. III §2 (semistable reduction)
  - beginner: Gross 2011 CBMS Lecture 4 informal opening; Gross 2013 *Current Developments in Mathematics* 2012 (three-page survey of toric-degeneration mirror picture)
- **notes**: A *toric degeneration of a Calabi-Yau variety* (Gross-Siebert 2006 *J. Differential Geom.* 72 §2) is a flat proper morphism $\pi : \mathfrak{X} \to \mathrm{Spec}\,\mathbb{C}[\![t]\!]$ with smooth Calabi-Yau generic fibre $\mathfrak{X}_t \cong X$ and central fibre $\mathfrak{X}_0 = \bigcup_i X_{\Delta_i}$ a reduced reducible union of toric varieties indexed by the top-dimensional cells of a polyhedral subdivision $\mathscr{P}$ of an associated lattice polytope $\Delta \subseteq M_\mathbb{R}$, satisfying (i) toric-strata intersections along faces of $\mathscr{P}$, (ii) log smoothness of $\pi$ with respect to the divisorial log structure of $\mathfrak{X}_0$ (Kato 1989), (iii) triviality of the relative canonical sheaf $\omega_{\mathfrak{X}/\mathrm{Spec}\,\mathbb{C}[\![t]\!]}$ (or its logarithmic version, $\omega_{\mathfrak{X}/S}(\log \mathfrak{X}_0) \cong \mathcal{O}_\mathfrak{X}$). The Calabi-Yau condition is enforced *on the family*, not just fibrewise. Construction (Gross-Siebert 2006 §2): for $X \subseteq Y_\Sigma$ a Calabi-Yau hypersurface in a toric Fano with reflexive polytope $\nabla$, the polar dual $\Delta = \nabla^\circ$ is the Newton polytope of $-K_Y$; a regular polyhedral subdivision $\mathscr{P}$ of $\Delta$ is determined by a strictly convex integer-valued piecewise-linear function $\varphi$ (the Mumford function) via the lower-envelope construction (Gelfand-Kapranov-Zelevinsky 1994 secondary polytope); the *Mumford degeneration* lifts each monomial $\chi^m$ to $\widetilde{\chi^m} := t^{\varphi(m)} \chi^m \in \mathbb{C}[\Delta \cap M, t]$, producing a flat family of toric Fanos with generic fibre $Y_\Sigma$ and central fibre $\bigcup_i Y_{\Delta_i}$; lifting a generic anticanonical section gives the Calabi-Yau hypersurface family $\mathfrak{X} = \{f_t = 0\} \subseteq \mathfrak{Y}$. Maximally unipotent monodromy (MUM): the monodromy operator $T$ on $H^n(\mathfrak{X}_t, \mathbb{C})$ satisfies $(T - I)^n \neq 0$ and $(T - I)^{n+1} = 0$ (Morrison 1993); the limit mixed Hodge structure (Deligne 1971; Schmid 1973) has maximal weight filtration jump $(1, h^{2,1}, h^{2,1}, 1, h^{2,1}, h^{2,1}, 1)$ for $n = 3$. MUM points are the algebraic-geometric counterparts of large-volume limits on the mirror under the Morrison mirror map. Dual intersection complex $B(\mathscr{P})$: the integral affine cell complex obtained by gluing dual cones over cells of $\mathscr{P}$; topologically $S^n$ in the Calabi-Yau case (reflexive polytope); carries an integral affine structure away from a codimension-2 singular locus $\Delta_{\mathrm{sing}}$. Simple singularities (Gross-Siebert 2006 §1.6) are the local-form restrictions that make the Gross-Siebert reconstruction theorem run. Witnesses: simplest example is the elliptic curve degenerating to a nodal cubic, $B(\mathscr{P}) \cong S^1$; K3 surfaces degenerate via Type-III Kulikov 1977 degeneration to a triangulation of $S^2$; the quintic threefold degenerates to five hyperplanes meeting in a triangulation of $S^3$. d-semistability (Friedman 1983 *Annals* 118): the obstruction theory for smoothing normal-crossings central fibres; Gross-Siebert resolve it combinatorially via the integral affine structure on $B(\mathscr{P})$. Non-archimedean parallel: Kontsevich-Soibelman 2006 realises $B(\mathscr{P})$ as the Berkovich skeleton of a non-archimedean analytic Calabi-Yau. The toric-degeneration setup is the input to the Gross-Siebert reconstruction theorem `[04.12.09]` and the algebraic realisation of the SYZ conjecture `[04.12.10]`; Nishinou-Siebert tropical curves on $B(\mathscr{P})$ from `[04.12.06]` are the wall-crossing data of the scattering structure. Lean status: `partial`, module `Codex.AlgGeom.Tropical.ToricDegeneration` declares the `Lattice`, `LatticePolytope`, `PolyhedralSubdivision`, `CalabiYauVariety`, `ToricFano`, `ToricDegenerationCY`, `DualIntersectionComplex`, `integralAffineSingularLocus` placeholder structures and definitions, plus the named theorems `exists_toric_degeneration` (Gross-Siebert 2006 existence theorem), `central_fibre_is_union_of_toric_strata`, `maximally_unipotent_at_zero`, `dual_intersection_complex_is_topological_sphere`, and `gross_siebert_reconstruction_input` with placeholder proof bodies pending the log-smooth-morphism, limit-mixed-Hodge-structure, and polyhedral-cell-complex API in Mathlib.

### tropical.dual-intersection-complex

- **title**: Dual intersection complex; tropical manifold B
- **unit**: `04.12.08`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `tropical.nishinou-siebert-correspondence` (04.12.06)
- **tier_anchors**:
  - master: Gross-Siebert 2006 *Mirror symmetry via affine geometry, I*, J. Diff. Geom. 72 (2), 169-338 (originator of the algebraic dual-intersection-complex framework with integral affine structure and Calabi-Yau monodromy condition); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lectures 4-5 (canonical textbook); Kontsevich-Soibelman 2001 *Homological mirror symmetry and torus fibrations* + Kontsevich-Soibelman 2006 *Affine structures and non-archimedean analytic spaces* (non-archimedean SYZ); Strominger-Yau-Zaslow 1996 *Nucl. Phys. B* 479 (SYZ-base motivation); Gross-Siebert 2011 *Annals of Math.* 174, 1301-1428 (reconstruction theorem consuming (B, P) as input); Mumford 1972 *Compositio* 24 + KKMS 1973 *Toroidal Embeddings I* (historical predecessor)
  - intermediate: Gross 2011 CBMS 114 Lecture 4 §4.1-§4.3; Gross-Siebert 2006 §1.1-§1.2
  - beginner: Gross 2011 CBMS 114 Lecture 4 informal opening; Gross-Siebert 2011 *Annals* 174 §1 introductory paragraphs
- **notes**: The dual intersection complex $(B, P) = (B(\Xi), P(\Xi))$ of a toric degeneration $\pi : \mathcal{X} \to \mathbb{A}^1$ packages the combinatorial skeleton of the central fibre $\mathcal{X}_0 = \bigcup_{\Delta_i \in \Xi} X_{\Delta_i}$ together with its integral affine structure. Construction: for each cell $\Delta_i \in \Xi$ of dimension $k$, the dual cone $\sigma_{\Delta_i}^\vee \subseteq N_\mathbb{R}$ has dimension $n - k$; the dual intersection complex $B(\Xi) = \bigsqcup \sigma_{\Delta_i}^\vee / \sim$ glues these cones along dual-of-face identifications. The polyhedral decomposition $P(\Xi)$ has one cell per cell of $\Xi$ with reverse face order. The integral affine structure on $B(\Xi)$ is induced cell-wise from the lattice $N \cap \sigma_{\Delta_i}^\vee$ on each dual cone; it extends across codim-1 cells uniquely (by lattice gluing) and across codim-$\geq 3$ cells determined by codim-2 data; the codim-2 cells with non-identity local monodromy $\mathrm{mon}(\rho) \in \mathrm{GL}_n(\mathbb{Z})$ form the singular locus $\Delta_B \subseteq B(\Xi)$. The complement $B(\Xi) \setminus \Delta_B$ is an integral affine manifold; $B(\Xi)$ is an integral affine manifold with codim-2 singularities. A *tropical manifold* is the abstracted triple $(B, P, s)$ of cell complex + decomposition + integral affine structure with singular locus. Calabi-Yau monodromy condition (Gross-Siebert 2006 §1.5): the generic fibre $\mathcal{X}_t$ is Calabi-Yau iff the monodromy representation $\rho_B : \pi_1(B \setminus \Delta_B) \to \mathrm{GL}_n(\mathbb{Z})$ factors through $\mathrm{SL}_n(\mathbb{Z})$; equivalently the integral affine structure preserves a parallel volume form; equivalently the relative canonical line bundle $\omega_{\mathcal{X}/\mathbb{A}^1}|_{\mathcal{X}_0}$ is trivial. Simple singularities (Gross-Siebert 2006 §1.6): codim-2 cells where the monodromy is conjugate to the focus-focus form with non-trivial $\mathrm{SL}_2(\mathbb{Z})$ unipotent block on a transverse 2-plane; the Gross-Siebert reconstruction theorem `[04.12.09]` applies under the simple-singularities hypothesis. Discrete Legendre duality (Gross-Siebert 2006 §1.4): the cell-wise dualisation interchanges $k$-cells of $P$ with $(n - k)$-cells of $\check{P}$ via the $N \times M \to \mathbb{Z}$ pairing, producing a dual tropical manifold $(\check{B}, \check{P}, \check{s})$ on the same underlying space; the construction is involutive and intertwines mirror-symmetric Calabi-Yau pairs. SYZ identification (Strominger-Yau-Zaslow 1996): the dual intersection complex is the algebraic realisation of the SYZ base $B$, the polyhedral decomposition records the discriminant stratification of the special-Lagrangian fibration, the integral affine structure records the Arnold-Liouville action coordinates, and the singular locus records the SYZ discriminant. Castaño-Bernard-Matessi 2009 supplies the symplectic-side dimension-3 Lagrangian fibrations matching algebraic $(B, P)$. Non-archimedean realisation (Kontsevich-Soibelman 2001/2006): $(B, P)$ is the Berkovich skeleton of a maximally degenerate Calabi-Yau over $K = \mathbb{C}((t))$, with the integral affine structure recovered from the Berkovich retraction; the algebraic and non-archimedean realisations agree. Originator chain: Mumford 1972 (degenerating abelian varieties with affine-base structure); KKMS 1973 (toroidal-embedding language); Strominger-Yau-Zaslow 1996 (SYZ heuristic); Kontsevich-Soibelman 2001 (integral affine + simple singularities framework); Gross-Siebert 2006 (algebraic-geometric definition of $(B, P)$ from a toric degeneration); Castaño-Bernard-Matessi 2009 (symplectic-side 3-torus fibrations); Gross 2011 CBMS (textbook synthesis); Gross-Siebert 2011 Annals (reconstruction theorem). Lean status: `partial`, module `Codex.AlgGeom.Tropical.DualIntersectionComplex` declares the `Lattice`, `IntegralAffineChart`, `PolyhedralSubdivision`, `DualIntersectionComplex`, `PolyhedralDecomposition`, `singularLocus`, `TropicalManifold`, `fromSubdivision`, `legendreDual`, `localMonodromy`, `isCalabiYauMonodromy` structures and definitions, plus the named theorems `fromSubdivision_isTropicalManifold`, `monodromy_calabi_yau`, `legendreDual_involutive`, `syz_base_identification` with placeholder proof bodies pending the polyhedral-complex + integral-affine-chart + monodromy-representation + Calabi-Yau-line-bundle API in Mathlib.

### tropical.gross-siebert-reconstruction

- **title**: Gross-Siebert reconstruction theorem (statement)
- **unit**: `04.12.09`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `tropical.nishinou-siebert-correspondence` (04.12.06); `tropical.toric-degeneration-calabi-yau` (04.12.07); `tropical.dual-intersection-complex` (04.12.08); slab function (04.12.11)
- **tier_anchors**:
  - master: Gross-Siebert 2011 *From real affine geometry to complex geometry*, Annals of Math. 174 (3), 1301-1428 (originator paper, the published reconstruction theorem); Gross-Siebert 2006 *Mirror symmetry via logarithmic degeneration data I*, J. Diff. Geom. 72 (2), 169-338 (precursor — log Calabi-Yau spaces and the dual intersection complex); Gross-Siebert 2010 *Mirror symmetry via logarithmic degeneration data II*, J. Algebraic Geom. 19 (4), 679-780 (intrinsic log structures on the central fibre, Kato fan); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lecture 5 (canonical textbook); Kontsevich-Soibelman 2001 *Symplectic Geom. and Mirror Symm.* + Kontsevich-Soibelman 2006 *Unity of Mathematics* (the non-archimedean SYZ and scattering-diagram formalism); SYZ 1996 *Nucl. Phys. B* 479 (conjectural geometric origin); Auroux 2009 *Surv. Diff. Geom.* 13 (modern survey); Gross-Hacking-Keel 2015 *Publ. IHÉS* 122, 65-168 (theta-function payoff in the surface case); Abramovich-Chen 2014 + Chen 2014 + Gross-Siebert 2013 (log Gromov-Witten foundations)
  - intermediate: Gross-Siebert 2011 §1-§4 (setup of (B, P, S) and statement); Gross 2011 CBMS Lecture 5
  - beginner: Gross 2011 CBMS Lecture 5 informal opening — reconstruct a Calabi-Yau from a combinatorial recipe
- **notes**: The Gross-Siebert reconstruction theorem (Gross-Siebert 2011, *Annals of Mathematics* 174, 1301-1428, title *"From real affine geometry to complex geometry"*) is the central technical move of the Gross-Siebert programme for mirror symmetry. Setup: a polarised tropical manifold $(B, \mathscr{P}, \varphi)$ where $B$ is an integral affine manifold of real dimension $n$ with codimension-2 singular locus $\Delta \subset B$, $\mathscr{P}$ a polyhedral decomposition of $B$ into lattice polytopes whose codimension-2 cells contain $\Delta$ ("simple singularities" — focus-focus in dimension 2; classified Type-I/II in dimension 3 per Gross-Siebert 2006 §1.6), and $\varphi : B \to \mathbb{R}$ a strictly convex piecewise-affine polarisation. Lifted gluing data: slab functions $\{f_\rho\}_{\rho \in \mathscr{P}^{(n-1)}}$ on codimension-1 cells, each a formal Laurent polynomial $f_\rho = 1 + \sum_i c_{\rho,i} z^{m_{\rho,i}}$ with $c_{\rho,i} \in \mathbb{C}[[t]]$, constant term 1 (forced by Calabi-Yau / order-0-identity normalisation), satisfying the joint-consistency condition: at every joint $\tau \in \mathscr{P}^{(n-2)}$, the product of wall-crossing automorphisms $\theta_{\rho_1} \circ \cdots \circ \theta_{\rho_k}$ around $\tau$ equals the identity modulo $t$. Theorem: there exists a toric degeneration $\pi : \mathfrak{X} \to \text{Spec}\,\mathbb{C}[[t]]$ of Calabi-Yau varieties of relative dimension $n$ whose dual intersection complex (`[04.12.08]`) is the given $(B, \mathscr{P})$ and whose slab gluing recovers $\{f_\rho\}$; the toric degeneration is unique up to formal isomorphism over $\text{Spec}\,\mathbb{C}[[t]]$. Construction: order by order in $t$, via the Kontsevich-Soibelman scattering algorithm. Order 0: central fibre $\mathfrak{X}_0 = \bigcup_\sigma X_\sigma$ as union of toric pieces indexed by maximal cells $\sigma \in \mathscr{P}^{(n)}$ glued along codimension-$k$ toric strata indexed by codimension-$k$ cells of $\mathscr{P}$. Order $k - 1$ to order $k$: at each joint $\tau$, compute deficit $\theta_\tau \equiv \exp(\sum_j a_{\tau,j} t^k z^{m_{\tau,j}} \partial_{z^{m_{\tau,j}}}) \pmod{t^{k+1}}$ from the order-$(k-1)$ wall-crossing-product around $\tau$; add walls $\mathfrak{d}_{\tau,j}$ to scattering diagram $\mathscr{S}$ emanating from $\tau$ in the direction $m_{\tau,j}^\perp$, labelled with $\theta_{\tau,j}^{-1}$, to compensate the deficit. Termination per order: deficits are finite sums of monomials. Uniqueness per order: deficits and compensating walls are uniquely determined by the order-$(k-1)$ data, hence the formal family is determined inductively. The full proof in Gross-Siebert 2011 has four moves: (I) formal-infinitesimal lift order 0 → 1, using Kato logarithmic deformation theory; (II) scattering algorithm order $k-1$ → $k$; (III) global consistency across joints at each order via Kato-fan / cohomology-vanishing computation (Gross-Siebert 2010, the $[B, \mathscr{P}]$ paper); (IV) uniqueness via Čech-cohomology argument on formal-neighbourhood covering of joints. The full proof is 128 pages and is **deferred** at FT-equivalence (statement-only unit with a structural Master-tier proof sketch only). Antecedents: Mikhalkin 2005 (*J. AMS* 18) — dim-2 tropical-classical correspondence; Nishinou-Siebert 2006 (*Duke* 135) — higher-dimensional toric correspondence; SYZ 1996 (*Nucl. Phys. B* 479) — physical-geometric conjectural origin; Kontsevich-Soibelman 2001 + 2006 — non-archimedean SYZ + scattering-diagram formalism. Enumerative content: slab functions admit expansion $f_\rho = 1 + \sum_\beta N_\beta^{\text{trop}}(\rho) t^{\omega(\beta)} z^{\partial \beta}$ where $\beta$ ranges over relative-homology classes of tropical Maslov-index-2 disks ending on $\rho$, $N_\beta^{\text{trop}}(\rho)$ is the tropical count, $\omega(\beta)$ the symplectic area, $z^{\partial \beta}$ the boundary monomial; via Nishinou-Siebert (`[04.12.06]`), the tropical-disk counts equal log Gromov-Witten invariants on the central fibre (Abramovich-Chen 2014 + Chen 2014 + Gross-Siebert 2013). Downstream: theta functions on the reconstructed mirror (Gross-Hacking-Keel 2015 *Publ. IHÉS* 122, surface case; `[04.12.12]`) form a canonical $\mathbb{Z}$-basis $\{\vartheta_m\}_{m \in B(\mathbb{Z})}$ of regular functions on the generic fibre, constructed via broken-line counts on $B$; mirror map (Auroux 2009 survey) relates the formal parameter $t$ to the Kähler class on the A-side mirror via period integrals; homological mirror conjecture (Kontsevich 1994) conjecturally identifies $D^b(\mathfrak{X})$ with the Fukaya category of the A-side. Worked example: dim-1 case — circle of circumference $L$ with slab functions $f = 1 + z$ at the two zero-cells reconstructs the elliptic curve with period $L$. Worked example (heuristic): dim-2 K3 mirror — sphere $S^2$ with 24 focus-focus singularities (Gross-Wilson 2000 differential-geometric SYZ for K3) reconstructs the mirror K3 via Gross-Hacking-Keel 2015. Worked example (heuristic): quintic mirror — $S^3$ with 30 lines of singularities (Gross 2005) reconstructs the mirror quintic via the full Gross-Siebert algorithm. Generalises Batyrev 1994 *J. Algebraic Geom.* 3 — which works for reflexive polytopes and the toric case — to full Calabi-Yau case with substantive singular locus. Lean status: `partial`, module `Codex.AlgGeom.Tropical.GrossSiebertReconstruction` declares the `Lattice`, `IntegralAffineManifold`, `PolyhedralDecomposition`, `TropicalManifold`, `SlabFunction`, `Wall`, `ScatteringDiagram`, `Structure_`, `ToricDegenerationOfCY`, `dualIntersectionComplex`, `slabGluingData` structures and definitions, plus the named theorems `gross_siebert_reconstruction` (the central theorem, existence-and-uniqueness statement), `reconstruction_is_inverse_of_dual_complex`, `theta_function_basis`, `slab_functions_are_tropical_disk_counts` with placeholder proof bodies pending the integral-affine-manifold-with-singularities + Kato-fan + formal-scheme-deformation + scattering-algorithm + log-Gromov-Witten infrastructure in Mathlib.

### tropical.strominger-yau-zaslow-conjecture

- **title**: Strominger-Yau-Zaslow (SYZ) conjecture
- **unit**: `04.12.10`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `tropical.curve-balanced-metric-graph` (04.12.02); `symplectic-geometry.lagrangian-submanifold` (05.05.01)
- **tier_anchors**:
  - master: Strominger-Yau-Zaslow 1996 *Mirror symmetry is T-duality*, *Nucl. Phys. B* 479, 243-259 (originator paper, arXiv:hep-th/9606040); Hitchin 1997 *The moduli space of special Lagrangian submanifolds*, *Annali SNS Pisa* 25 (mathematical reformulation: semi-flat metric, integral affine structure); McLean 1998 *Comm. Anal. Geom.* 6 (special Lagrangian moduli theorem); Gross-Wilson 2000 *J. Diff. Geom.* 55 (K3 case, first complete proof); Kontsevich-Soibelman 2001 *Symplectic Geom. and Mirror Symm.* + Kontsevich-Soibelman 2006 *Unity of Mathematics* (non-archimedean reformulation via Berkovich skeleton); Joyce 2003 *Comm. Anal. Geom.* 11 (singularities of special Lagrangian fibrations); Gross-Siebert 2006 *J. Algebraic Geom.* 15 + Gross-Siebert 2011 *Annals* 174 (algebraic reformulation via toric degenerations); Auroux 2007 *Surveys in Diff. Geom.* 13 (Lagrangian wall-crossing and SYZ for Fano); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Ch. 6 (textbook); Yau 1978 *Comm. Pure Appl. Math.* 31 (Ricci-flat Calabi-Yau metric existence — foundational)
  - intermediate: Strominger-Yau-Zaslow 1996 *Nucl. Phys. B* 479 (full short paper, ~17 pages); Hitchin 1997 *Annali SNS Pisa* 25; Gross 2011 CBMS 114 Ch. 6
  - beginner: Strominger-Yau-Zaslow 1996 §1 informal opening; Gross 2011 CBMS Ch. 6 informal three-page survey
- **notes**: The Strominger-Yau-Zaslow conjecture (Strominger-Yau-Zaslow 1996, *Nucl. Phys. B* 479) proposes a geometric reason for mirror symmetry: mirror Calabi-Yau pairs $(X, X^\vee)$ admit dual special Lagrangian $T^n$-fibrations $X \to B$ and $X^\vee \to B$ over a common integral affine base $B$, with the mirror map realised fibrewise by T-duality. The 1996 paper argues from supersymmetric brane charges in Type IIA / Type IIB string theory: a D0-brane on $X$ (a point particle, with moduli space $X$) is mirror dual to a brane on $X^\vee$ wrapping a special Lagrangian torus $L \cong T^n$ with flat $U(1)$-connection $\mathcal{L}$; by McLean's 1998 theorem, the moduli space of pairs $(L, \mathcal{L})$ has real dimension $2 b_1(L) = 2n$, recovering $X$. The mirror is therefore the moduli space of branes — equivalently the dual torus fibration $X^\vee = \{(L, \mathcal{L}) : L \subset X^\vee \text{ s.L. torus}\}$. Mathematical reformulations: (1) Hitchin 1997 *Annali SNS Pisa* 25 constructs the semi-flat metric on the smooth locus $B^\circ$ of the SYZ base, identifying the integral affine atlas (transition maps in $\mathrm{GL}(n, \mathbb{Z}) \ltimes \mathbb{R}^n$) and the Hessian-metric form $g_B = \mathrm{Hess}_g(\phi)$ for a strictly convex potential $\phi$. Ricci-flatness on the total space reduces to the real Monge-Ampère equation $\det(\phi_{ij}) = C$. Legendre duality $\check{\phi}(y^\vee) = \sum y_i y_i^\vee - \phi(y)$ exchanges the original and mirror sides, preserving the Monge-Ampère form ($\det(\check{\phi}_{ij}) = 1/C$). (2) Gross-Wilson 2000 *J. Diff. Geom.* 55 proves SYZ for K3 surfaces: the Ricci-flat Kähler-Einstein metric on a polarised K3 collapses (Gromov-Hausdorff) at a large complex structure limit to a metric on $S^2 \setminus \{24 \text{ points}\}$ with 24 focus-focus singularities; this is the K3's SYZ base. (3) Kontsevich-Soibelman 2001 + 2006 reformulate SYZ via Berkovich skeletons: the analytic skeleton $\mathrm{Sk}(X) \subset X^{\mathrm{an}}$ of a Calabi-Yau over $K = \mathbb{C}\{\{t\}\}$ carries a canonical integral affine structure; the mirror has the same skeleton with Legendre-dual integral affine structure. (4) Joyce 2003 *Comm. Anal. Geom.* 11 classifies generic singular fibres of dimension-3 special Lagrangian fibrations; the discriminant locus is a real one-dimensional graph in the base. (5) Gross-Siebert 2006 *J. Algebraic Geom.* 15 + 2011 *Annals* 174 realise SYZ algebraically: the dual intersection complex `[04.12.08]` of a toric degeneration of a Calabi-Yau is the SYZ base, the integral affine structure is the dual cone-glueing structure, and the mirror is reconstructed by Legendre duality on the affine base together with a structure of slab functions. The Gross-Siebert programme is a constructive proof of SYZ in the algebraic setting. (6) Auroux 2007 extends SYZ to Fano targets (Landau-Ginzburg mirrors) via Lagrangian wall-crossing. Worked examples: $T^2 = S^1 \times S^1_r$ has SYZ mirror $(T^2)^\vee = S^1 \times S^1_{1/r}$ (T-duality on one circle factor); K3 self-mirror is realised by 24-point-singular $T^2$-fibration over $S^2$. Status: the conjecture is proved in dimension two (Gross-Wilson 2000), partially proved algebraically (Gross-Siebert programme), and open in full generality for Calabi-Yau threefolds. Cross-pointer: the integral affine base $B$ of the SYZ conjecture is the same combinatorial object as the dual intersection complex `[04.12.08]` of a toric degeneration `[04.12.07]`, and tropical curves on this base from `[04.12.05]`/`[04.12.06]` are the perturbative wall-crossing data of the Gross-Siebert mirror reconstruction `[04.12.09]`. Lean status: `partial`, module `Codex.AlgGeom.Tropical.StromingerYauZaslow` declares `CalabiYau`, `IntegralAffineBase`, `SpecialLagrangianFibration`, `MirrorPair`, `IsMirror`, plus the named theorem `syz_conjecture` and the supporting `legendre_duality_preserves_monge_ampere` and `TorusFibre.dual_dual` with placeholder proof bodies pending the Calabi-Yau / special Lagrangian / integral affine manifold API in Mathlib.

### toric-geometry.orbit-cone-correspondence

- **title**: Orbit-cone correspondence
- **unit**: `04.11.06`
- **prerequisites**: `toric-geometry.algebraic-torus-character-lattices` (04.11.01); `toric-geometry.fan-and-toric-variety` (04.11.04)
- **tier_anchors**:
  - master: Fulton 1993 *Introduction to Toric Varieties* (Princeton Annals Studies 131) §3.1, §3.2; Cox-Little-Schenck 2011 *Toric Varieties* (AMS GSM 124) §3.2, Theorem 3.2.6; Oda 1988 *Convex Bodies and Algebraic Geometry* (Ergebnisse 15) Ch. 1 §1.6; Demazure 1970 *Sous-groupes algébriques de rang maximum du groupe de Cremona* (Ann. Sci. ENS 3, 507-588) Théorème 4 (orbit stratification of $X_\Sigma$); Sumihiro 1974 *Equivariant completion* (J. Math. Kyoto Univ. 14, 1-28) (equivariant-covering theorem yielding orbit-cone as a corollary); Danilov 1978 *The geometry of toric varieties* (Russian Math. Surveys 33(2), 97-154) §5 (canonical English exposition); Białynicki-Birula 1973 *Some theorems on actions of algebraic groups* (Ann. of Math. 98, 480-497) (general algebraic-torus decomposition); Atiyah 1982 *Convexity and commuting Hamiltonians* (Bull. London Math. Soc. 14, 1-15) (symplectic moment-polytope counterpart)
  - intermediate: Fulton §3.1; Cox-Little-Schenck §3.2
  - beginner: Fulton §3.1 informal opening — orbit decomposition of $\mathbb{P}^2$ into seven orbits matched to the seven cones of its fan
- **notes**: For a toric variety $X_\Sigma$ associated to a fan $\Sigma$ in $N_\mathbb{R}$ of rank $n$ with dense torus $T = N \otimes \mathbb{C}^*$, the orbit-cone correspondence is the bijection $\sigma \mapsto O(\sigma)$ between cones of $\Sigma$ and $T$-orbits in $X_\Sigma$, where $O(\sigma) := \mathrm{Hom}_\mathbb{Z}(\sigma^\perp \cap M, \mathbb{C}^*)$ is an algebraic torus of dimension $n - \dim \sigma$. The dimension formula $\dim O(\sigma) + \dim \sigma = n$ reduces to the rank duality $\mathrm{rk}(\sigma^\perp \cap M) = n - \dim \sigma$ under the perfect pairing $M \times N \to \mathbb{Z}$. The bijection is **order-reversing**: $\sigma \preceq \tau$ iff $O(\tau) \subseteq V(\sigma) = \overline{O(\sigma)}$, with closure decomposition $V(\sigma) = \bigsqcup_{\tau \succeq \sigma} O(\tau)$. The orbit closure $V(\sigma)$ is itself a toric variety with dense torus $O(\sigma)$, character lattice $M(\sigma) = \sigma^\perp \cap M$, cocharacter lattice $N(\sigma) = N / N_\sigma$, and fan the **star quotient** $\Sigma / \sigma = \{\bar\tau : \tau \in \mathrm{Star}(\sigma)\}$ in $N(\sigma)_\mathbb{R}$, where $\bar\tau$ is the image of $\tau$ under the quotient $N_\mathbb{R} \to N(\sigma)_\mathbb{R}$. The toric stratification $X_\Sigma = \bigsqcup_{\sigma \in \Sigma} O(\sigma)$ is a special case of the Białynicki-Birula decomposition (BB 1973) for algebraic-torus actions on smooth complete varieties. Worked examples: $\mathbb{P}^n$ has $2^{n+1} - 1$ orbits (binomial-coefficient breakdown by dimension); $\mathbb{P}^2$ has $7$ orbits (one dense torus, three one-dim, three fixed points); $\mathbb{P}^1 \times \mathbb{P}^1$ has $9$ orbits ($3 \times 3$ from the product of factors); Hirzebruch surface $F_a$ has $9$ orbits for every $a \in \mathbb{N}$ (uniform combinatorial type of the fan, with $a$-dependence in intersection numbers $D_{\rho_2} \cdot D_{\rho_4} = a$). Proof structure: cone-by-cone reduction to the affine chart $U_\sigma$, where the $T$-orbits are in bijection with faces of $\sigma$ via the distinguished-point realisation $x_\tau$ with $\chi^m(x_\tau) = 1$ iff $m \in \tau^\perp \cap M$; chart gluing glues the local correspondences into a global cone-to-orbit bijection. Originator chain: Demazure 1970 (orbit stratification of $X_\Sigma$ in the originating fan paper); Sumihiro 1974 (equivariant-covering theorem reducing global orbit-cone to affine case); Danilov 1978 (canonical pre-Fulton English exposition, star-quotient construction); Fulton 1993 (modern textbook); Cox-Little-Schenck 2011 (thousand-page treatment). General-equivariant context: Białynicki-Birula 1973 (BB decomposition for algebraic-torus actions). Symplectic-side counterpart: Atiyah-Guillemin-Sternberg 1982 convexity (moment-map image is convex polytope; for Kähler toric manifolds, polytope is the lattice polytope whose normal fan is $\Sigma$); Delzant 1988 (symplectic classification of toric manifolds by Delzant polytopes). Downstream applications: toric divisors as orbit closures of rays (04.11.08); toric Picard group as quotient of $\mathbb{Z}^{\Sigma(1)}$ (04.11.09); polytope-fan dictionary (04.11.10); algebraic moment map (04.11.11); Danilov-Jurkiewicz cohomology $H^*(X_\Sigma; \mathbb{Q}) = \mathbb{Q}[D_\rho] / (\text{linear} + \text{Stanley-Reisner})$ via toric stratification Euler-characteristic identity $\chi_\mathrm{top}(X_\Sigma) = |\Sigma_\mathrm{max}|$ (04.11.12). Lean status: `partial`, module `Codex.AlgGeom.Toric.OrbitConeCorrespondence` declares the placeholder `RationalPolyhedralCone`, `Fan`, `ToricVariety`, `Orbit` structures, the bijection theorem `orbit_cone_bijection`, the dimension formula `orbit_dim_plus_cone_dim`, the star-quotient closure theorem `closure_is_toric_with_star_quotient`, the stratification theorem `orbit_stratification`, the order-reversing face-containment theorem `orbit_closure_face_containment`, and decidable numerical witnesses `orbit_count_P2 : projectiveOrbitCount 2 = 7`, `orbit_count_P1xP1 : p1xp1OrbitCount = 9`, `orbit_count_Hirzebruch : hirzebruchOrbitCount a = 9` with the consistency check `hirzebruch_zero_eq_P1xP1 : hirzebruchOrbitCount 0 = p1xp1OrbitCount`, all with `sorry`-stubbed proof bodies pending the upstream `Fan` and `ToricVariety` formalism in Mathlib.


### toric-geometry.smoothness-completeness-fans

- **title**: Smoothness and completeness via fans
- **unit**: `04.11.05`
- **prerequisites**: `toric-geometry.rational-polyhedral-cone-dual-cone` (04.11.02), `toric-geometry.affine-toric-variety` (04.11.03), `toric-geometry.fan-and-toric-variety` (04.11.04)
- **tier_anchors**:
  - master: Fulton 1993 *Introduction to Toric Varieties* (Princeton Annals Studies 131) §2.1 (smoothness criterion) + §2.4 (completeness criterion); Cox-Little-Schenck 2011 *Toric Varieties* (AMS GSM 124) §3.1 (smoothness), Theorem 3.1.19 (global smoothness), §3.4 Theorem 3.4.6 (completeness criterion via valuative criterion); Oda 1988 *Convex Bodies and Algebraic Geometry* (Ergebnisse 15) Theorem 1.10 (smoothness), Theorem 1.11 (completeness); Demazure 1970 *Sous-groupes algébriques de rang maximum du groupe de Cremona* (Ann. Sci. ENS 3, 507-588) Theorem 4 (originator: $U_\sigma$ smooth iff $\sigma$ generated by part of a $\mathbb{Z}$-basis of $N$); Sumihiro 1974 *Equivariant completion* (J. Math. Kyoto Univ. 14, 1-28) (foundational equivariant-covering theorem identifying every normal $T$-toric variety as $X_\Sigma$, so the criteria classify the whole category); Hirzebruch 1951 *Math. Ann.* 124 (Hirzebruch surfaces $F_a$ as smooth complete examples); Reid 1980 *Canonical 3-folds* (toric cyclic quotient singularities); Mori 1982 *Ann. Math.* 116 ($\mathbb{Q}$-factorial varieties — simplicial-but-not-smooth fans — as MMP input)
  - intermediate: Fulton §2.1 + §2.4; Cox-Little-Schenck §3.1 + §3.4
  - beginner: Fulton §2.1 informal — a fan is smooth when each cone is generated by part of a lattice basis; complete when its cones cover the whole real vector space
- **notes**: Two named criteria on a fan $\Sigma$ classify the local and global geometry of the toric variety $X_\Sigma$. **Smoothness criterion** (Demazure 1970 Théorème 4, Fulton 1993 §2.1): $X_\Sigma$ is smooth as a $\mathbb{C}$-scheme iff every cone $\sigma \in \Sigma$ is smooth — equivalently, the primitive ray generators of each $\sigma$ extend to a $\mathbb{Z}$-basis of $N$. Proof factors through the affine smoothness theorem ($U_\sigma$ smooth iff $\sigma$ smooth) plus the locality of smoothness on a scheme: the affine direction is via the dual-basis decomposition of the semigroup, $S_\sigma = \mathbb{Z}_{\geq 0}^k \oplus \mathbb{Z}^{n - k}$, giving $\mathbb{C}[S_\sigma] = \mathbb{C}[x_1, \ldots, x_k, x_{k+1}^{\pm}, \ldots, x_n^{\pm}]$, a regular ring, so $U_\sigma \cong \mathbb{A}^k \times \mathbb{G}_m^{n - k}$; the converse direction goes through the Hilbert-basis-equals-cotangent-dimension identification, forcing the Hilbert basis size to equal $n$, which forces unimodularity of the ray-generator matrix. **Completeness criterion** (Fulton 1993 §2.4, Cox-Little-Schenck Theorem 3.4.6, Oda Theorem 1.11): $X_\Sigma$ is complete (proper over $\mathrm{Spec}\,\mathbb{C}$, equivalently compact in the classical topology) iff $|\Sigma| = N_\mathbb{R}$. Proof via the valuative criterion for properness applied to torus-valued points: a morphism $\mathrm{Spec}\,K \to T \subseteq X_\Sigma$ corresponds to a homomorphism $\phi : M \to K^*$; composing with the DVR's discrete valuation gives a cocharacter $v_\phi \in N$; the extension to $\mathrm{Spec}\,R$ exists iff $v_\phi \in \sigma$ for some $\sigma \in \Sigma$, iff $v_\phi \in |\Sigma|$; ranging over DVRs sweeps $v_\phi$ across all of $N$, so properness iff $|\Sigma| \supseteq N$, iff $|\Sigma| = N_\mathbb{R}$ (closure of $N$ inside $N_\mathbb{R}$). Worked examples covering the four cases of (smooth/non-smooth) × (complete/non-complete): **$\mathbb{P}^n$** smooth complete (fan with $n + 1$ rays, primitive generators $-e_1 - \cdots - e_n$ and $e_1, \ldots, e_n$, all maximal cones unimodular); **$\mathbb{P}^1 \times \mathbb{P}^1$** smooth complete (four-quadrant fan in $\mathbb{R}^2$, every cone unimodular); **Hirzebruch surface $F_a$** smooth complete for every $a \geq 0$ (four-ray tilted fan, every cone has unit determinant by direct check, with $F_0 = \mathbb{P}^1 \times \mathbb{P}^1$); **weighted projective space $\mathbb{P}(1, 2, 3)$** complete but not smooth (three rays with non-unimodular cones, cyclic quotient singularities $(1/2)(1, 1)$ and $(1/3)(1, 2)$ at two of the three torus-fixed points, $\mathbb{Q}$-factorial); **affine line $\mathbb{C}$** smooth but not complete (single ray, support $\mathbb{R}_{\geq 0} \neq \mathbb{R}$); **the cone $\mathrm{Cone}(e_1, 2 e_1 + 3 e_2)$** gives the canonical simplicial-but-not-smooth example with $A_2$-type cyclic quotient. Connections: orbit-cone correspondence (04.11.06) extends the criteria to the orbit stratification; toric resolution of singularities (04.11.07) refines non-smooth fans to smooth refinements; toric Picard group (04.11.09) shows the difference between Picard and class groups vanishes for smooth $X_\Sigma$; polytope-fan correspondence (04.11.10) adds the projectivity criterion strengthening completeness; minimal model program for toric varieties (04.11.13) uses simplicial-but-not-smooth fans ($\mathbb{Q}$-factorial inputs) as the MMP setting; symplectic toric manifolds via Delzant (05.09.01) gives the symplectic-side smoothness condition matching the algebraic one. Lean status: `partial`, module `Codex.AlgGeom.Toric.SmoothnessCompletenessFans` declares the `Lattice`, `RationalPolyhedralCone`, `Fan`, `AffineToricVariety`, `ToricVariety` structures (placeholder), the predicates `RationalPolyhedralCone.Smooth`, `Fan.IsComplete`, `Fan.IsSmooth`, and the named theorems `affineToricVariety_smooth_iff_cone_smooth`, `toricVariety_complete_iff_support_full`, `toricVariety_smooth_iff_all_cones_smooth`, with explicit worked-example witnesses for $\mathbb{P}^n$, $\mathbb{P}^1 \times \mathbb{P}^1$, $F_a$, $\mathbb{P}(1, 2, 3)$, and $\mathbb{A}^1$, all with `sorry`-stubbed proof bodies pending Mathlib's cone-and-fan formalism.

### toric-geometry.picard-group

- **title**: Toric Picard group
- **unit**: `04.11.09`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `alg-geom.ample-line-bundle` (04.05.05)
- **tier_anchors**:
  - master: Fulton 1993 *Introduction to Toric Varieties* (Princeton Annals Studies 131) §3.3 (toric divisors and the Picard exact sequence) + §3.4 (rank formula and ample / nef cones via strictly convex support functions) + §4.3 (ample cone); Cox-Little-Schenck 2011 *Toric Varieties* (AMS GSM 124) §4.2 Theorem 4.2.1 (toric Picard exact sequence), Proposition 4.2.5 (rank formula for smooth complete), §6.1 (ample line bundles via strict convexity), §6.3 Theorem 6.3.13 (Mori cone), §15.1 (Mori dream space classification); Oda 1988 *Convex Bodies and Algebraic Geometry* (Ergebnisse 15) §2.1-§2.3 (divisor class group and Picard group); Demazure 1970 *Sous-groupes algébriques de rang maximum du groupe de Cremona* (Ann. Sci. ENS 3, 507-588) (originator paper: toric Picard exact sequence, rank formula, smoothness criterion); Hu-Keel 2000 *Mori dream spaces and GIT* (Michigan Math. J. 48, 331-348) (smooth complete toric ↔ Mori dream space); Cox 1995 *The homogeneous coordinate ring of a toric variety* (J. Algebraic Geom. 4, 17-50) (Cox-ring presentation via Picard grading + GIT quotient); Mavlyutov 2000 *Semiample hypersurfaces in toric varieties* (Compositio Math. 124, 7-24) (singular-case ample cone description); Reid 1983 *Decomposition of toric morphisms* (Progress in Mathematics 36, Birkhäuser, 395-418) (Mori cone of toric variety and contraction theorem for extremal rays); Hirzebruch 1951 *Math. Ann.* 124 (Hirzebruch surfaces F_a as the canonical rank-2 Picard example)
  - intermediate: Fulton §3.3-§3.4; Cox-Little-Schenck §4.2 + §6.1
  - beginner: Fulton §3.3 informal opening on toric divisors and the Picard group as differences of ray classes modulo characters
- **notes**: The toric Picard group of $X_\Sigma$ is governed by the **toric Picard exact sequence** (Demazure 1970, Fulton §3.4): $0 \to M \xrightarrow{\mathrm{div}} \bigoplus_{\rho \in \Sigma(1)} \mathbb{Z} \cdot D_\rho \to \mathrm{Cl}(X_\Sigma) \to 0$, with $\mathrm{div}(m) = \sum_\rho \langle m, v_\rho\rangle D_\rho$ encoding the divisor of the rational function $\chi^m$ on the torus. Surjectivity uses that every Weil divisor on a normal $T$-variety is linearly equivalent to a torus-invariant one (averaging over the dense torus). Injectivity of $\mathrm{div}$ holds when the rays span $N_\mathbb{R}$ (in particular for any complete fan), by non-degeneracy of the perfect pairing $M \times N \to \mathbb{Z}$. The image of $\mathrm{div}$ is exactly the principal torus-invariant divisors, by $T$-semi-invariance of any function with $T$-invariant divisor. **Smooth complete case** (Demazure 1970, Fulton §3.4 rank formula): when $X_\Sigma$ is smooth, $\mathrm{Pic}(X_\Sigma) = \mathrm{Cl}(X_\Sigma)$ (regular local rings are UFDs, so every Weil is Cartier) and the cokernel is free abelian of rank $|\Sigma(1)| - n$ via Smith normal form (every maximal cone has primitive generators forming a $\mathbb{Z}$-basis of $N$, so the elementary divisors of the divisor matrix are all 1). **Singular case**: $\mathrm{Pic}(X_\Sigma) \hookrightarrow \mathrm{Cl}(X_\Sigma)$ as a finite-index sublattice (index = lcm of stabiliser orders at singular fixed points). **Worked examples**: $\mathrm{Pic}(\mathbb{P}^n) = \mathbb{Z}\langle H\rangle$ (rank $1 = (n+1) - n$); $\mathrm{Pic}(\mathbb{P}^1 \times \mathbb{P}^1) = \mathbb{Z}^2$ with two fibre classes (rank $2 = 4 - 2$); $\mathrm{Pic}(F_a) = \mathbb{Z}\langle F\rangle \oplus \mathbb{Z}\langle S\rangle$ for Hirzebruch surface with $F^2 = 0, F \cdot S = 1, S^2 = -a$ (rank 2 independent of $a$); $\mathrm{Pic}(\mathrm{Bl}_p \mathbb{P}^2) = \mathbb{Z}\langle H\rangle \oplus \mathbb{Z}\langle E\rangle$ with $E^2 = -1$ (rank $2 = 4 - 2$); $\mathrm{Cl}(\mathbb{P}(1, 2, 3)) = \mathbb{Z}$, $\mathrm{Pic}(\mathbb{P}(1, 2, 3)) = 6\mathbb{Z}$ (index 6 = lcm). **Ample / nef cones via support functions** (Demazure 1970, Cox-Little-Schenck §6.1 Theorem 6.1.14): a torus-invariant Cartier divisor $D = \sum_\rho a_\rho D_\rho$ is ample iff its piecewise-linear support function $\psi_D : |\Sigma| \to \mathbb{R}$ (defined by $\psi_D(v_\rho) = -a_\rho$, extended linearly on maximal cones) is **strictly convex**; nef iff merely convex; the nef cone is the closure of the ample cone in $\mathrm{Pic}(X_\Sigma)_\mathbb{R}$, dual to the Mori cone $\overline{\mathrm{NE}}(X_\Sigma)$ of effective toric curves under intersection pairing. **Mori dream space** (Hu-Keel 2000 Theorem 2.3): every smooth complete toric variety has finitely generated Cox ring (= polynomial ring $\mathbb{C}[x_\rho : \rho \in \Sigma(1)]$ graded by $\mathrm{Pic}$ via the Picard exact sequence), with the moveable cone $\overline{\mathrm{Mov}}(X_\Sigma)$ admitting a finite chamber decomposition into closures of nef cones of small $\mathbb{Q}$-factorial modifications (= GIT chambers of the Cox quotient). The Cox-ring presentation (Cox 1995): $X_\Sigma = (\mathbb{C}^{\Sigma(1)} \setminus Z(\Sigma)) / G$ for $G = \mathrm{Hom}(\mathrm{Pic}, \mathbb{C}^*)$ acting via the dual of the Picard exact sequence, $Z(\Sigma)$ the irrelevant locus. Downstream connections: polytope-fan dictionary (04.11.10) realises projective $X_\Sigma$ as the toric variety of a lattice polytope with explicit ample-bundle polarisation; toric cohomology (04.11.12) presents the Chow ring as Stanley-Reisner modulo the Picard linear relations; toric Hirzebruch-Riemann-Roch (04.11.13) computes Euler characteristics of line bundles via lattice-point counts in polytopes (Brion-Vergne 1997). Lean status: `partial`, module `Codex.AlgGeom.Toric.PicardGroup` declares the `Lattice`, `Ray`, `Fan`, `ZSigmaOne`, `CharacterLattice`, `Pairing`, `divMap`, `PicardGroup`, `SupportFunction`, `StrictlyConvex`, `Convex` placeholder structures, the named theorems `toric_picard_exact_sequence`, `pic_rank_smooth_complete`, `ample_iff_strictly_convex`, `nef_iff_convex`, `smooth_complete_toric_is_mds`, `cox_quotient_presentation`, `moveable_cone_chamber_decomposition`, and decidable numerical witnesses `pic_projective_space_rank`, `pic_p1_times_p1_rank`, `pic_hirzebruch_rank`, `pic_blowup_p2_rank`, `cl_weighted_projective_123_rank`, `pic_weighted_projective_123_index` (the last decidably $\mathrm{lcm}(1, 2, 3) = 6$), with `sorry`-stubbed and `trivial`-stubbed proof bodies pending the upstream `Fan` formalism from 04.11.04 plus Mathlib's piecewise-linear-function and GIT-quotient infrastructure.

### toric-geometry.polytope-fan-dictionary

- **title**: Polytope-fan dictionary; the line bundle $L_P$
- **unit**: `04.11.10`
- **prerequisites**: `toric-geometry.algebraic-torus-character-lattices` (04.11.01), `toric-geometry.rational-polyhedral-cone-dual` (04.11.02), `toric-geometry.affine-toric-variety` (04.11.03), `toric-geometry.fan-and-toric-variety` (04.11.04)
- **tier_anchors**:
  - master: Fulton 1993 *Introduction to Toric Varieties* (Princeton Annals Studies 131) §1.5 + §3.4 (polytope-to-fan and the polarisation $L_P$; Demazure character formula); Cox-Little-Schenck 2011 *Toric Varieties* (AMS GSM 124) §6.1 + §6.2 + §6.3 (canonical exposition of the polytope-fan dictionary and global sections via lattice points); Oda 1988 *Convex Bodies and Algebraic Geometry* (Ergebnisse 15) Ch. 1 §1.5 + Ch. 2 §2.3; Demazure 1970 *Sous-groupes algébriques de rang maximum du groupe de Cremona* (Ann. Sci. ENS 4-3, 507-588) — originator of the strict-convexity ampleness criterion and the character formula bearing his name; Kempf-Knudsen-Mumford-Saint-Donat *Toroidal Embeddings I* (Springer LNM 339, 1973) Ch. I §3; Batyrev 1994 *Dual polyhedra and mirror symmetry for Calabi-Yau hypersurfaces in toric varieties* (J. Algebraic Geom. 3, 493-535) — reflexive polytopes and Calabi-Yau mirror duality; Brion 1996 *Banach Center Publ.* 36, 25-44 (lattice-point cohomology formula); Brion-Vergne 1997 *J. Amer. Math. Soc.* 10, 371-392 (lattice points in simple polytopes); Ehrhart 1962 *C. R. Acad. Sci.* 254, 616-618 (Ehrhart polynomiality); Delzant 1988 *Bull. SMF* 116, 315-339 (symplectic-side Delzant correspondence on simple smooth rational polytopes); Cox 1995 *J. Algebraic Geom.* 4, 17-50 (Cox-ring reframing); Kreuzer-Skarke 2002 *Adv. Theor. Math. Phys.* 4, 1209-1230 (classification of reflexive 4-polytopes); Gross-Siebert 2011 *Annals* 174, 1301-1428 (tropical mirror reconstruction generalising Batyrev); Mustață 2002 *Tohoku Math. J.* 54, 451-470 (toric Kodaira vanishing)
  - intermediate: Fulton §1.5 + §3.4; Cox-Little-Schenck §6.1 + §6.2
  - beginner: Fulton §1.5 informal — every lattice polytope produces a projective toric variety with an ample line bundle, with lattice points of $P$ giving a basis of global sections
- **notes**: The polytope-fan dictionary (Demazure 1970, Fulton 1993 §1.5 + §3.4, Cox-Little-Schenck §6.1-§6.2) gives a categorical equivalence between full-dimensional lattice polytopes $P \subseteq M_\mathbb{R}$ (up to lattice translation) and pairs $(X, L)$ of projective normal toric varieties with ample $T$-equivariant line bundles. The forward construction: $P \mapsto \Sigma_P$ (normal fan, inward-normal cones at vertices), $P \mapsto X_P = X_{\Sigma_P}$ (toric variety via fan-gluing of `04.11.04`), $P \mapsto L_P$ (polarisation defined locally by $\chi^v$ on $U_{\sigma_v}$ with transitions $\chi^{v - v'}$). The cocycle condition holds tautologically; ampleness of $L_P$ equals strict convexity of the support function $\psi_P(u) = \min_{m \in P} \langle m, u\rangle$ on $\Sigma_P$ (CLS Theorem 6.1.14). The reverse construction: $(X, L) \mapsto P_L = \mathrm{conv}(\mathrm{supp}(L))$ where $\mathrm{supp}(L) = \{m \in M : H^0(X, L)_m \neq 0\}$ is the $T$-character support; strict convexity from ampleness ensures the vertex cones of $P_L$ are exactly the maximal cones of $\Sigma$ (CLS Theorem 6.2.1). **Demazure character formula** (the structural heart): $H^0(X_P, L_P) = \bigoplus_{m \in P \cap M} \mathbb{C} \cdot \chi^m$ as a $T$-representation, with weight $m$ appearing with multiplicity one for $m \in P \cap M$. In particular $\dim H^0(X_P, L_P) = |P \cap M|$ — sheaf cohomology becomes lattice-point counting. Higher cohomology vanishes: $H^i(X_P, L_P) = 0$ for $i \geq 1$ by the toric Kodaira-Demazure vanishing theorem (Mustață 2002 *Tohoku Math. J.* 54). **Ehrhart polynomial**: for $k \geq 1$, $L_{kP} = L_P^{\otimes k}$ and $\dim H^0(X_P, L_P^{\otimes k}) = |kP \cap M| =: L(P, k)$ — a polynomial of degree $n = \dim P$ with leading coefficient $\mathrm{vol}(P)$ (Ehrhart 1962 *C. R. Acad. Sci.* 254), matching the Hilbert polynomial of $X_P$ under the polarisation; Brion-Vergne 1997 *J. Amer. Math. Soc.* 10 extends to higher cohomology and arbitrary toric divisors via fixed-point residue formulas. **Worked examples**: standard $n$-simplex gives $(\mathbb{P}^n, \mathcal{O}(1))$ with $|P \cap M| = n + 1$; unit cube $[0, 1]^n$ gives $((\mathbb{P}^1)^n, \mathcal{O}(1)^{\boxtimes n})$ with $|P \cap M| = 2^n$; $a \times b$ rectangle gives $(\mathbb{P}^1 \times \mathbb{P}^1, \mathcal{O}(a, b))$ with $|P \cap M| = (a + 1)(b + 1)$; trapezoid with vertices $(0, 0), (1, 0), (1, 1), (0, 2)$ gives Hirzebruch surface $F_1$ with $L_P = F + 2\sigma$ in $\mathrm{Pic}(F_1)$; cross-polytope and unit square share a normal fan in $\mathbb{R}^2$ (both give $\mathbb{P}^1 \times \mathbb{P}^1$) but in higher dim the cross-polytope gives singular toric Calabi-Yau threefolds (conifold-transition prototype); weighted projective planes $\mathbb{P}(a, b, c)$ arise from triangles with vertices $(0, 0), (a, 0), (0, b)$ after appropriate rescaling. **Mirror symmetry via reflexive polytopes** (Batyrev 1994 *J. Algebraic Geom.* 3): a lattice polytope $P$ is reflexive if it contains the origin in its interior and the polar dual $P^\circ = \{u : \langle m, u\rangle \geq -1 \text{ for } m \in P\}$ is also a lattice polytope; polar duality is an involution $(P^\circ)^\circ = P$, and for reflexive $P$ the anticanonical class $-K_{X_P} = L_P$ defines a Calabi-Yau hypersurface family with mirror in $X_{P^\circ}$; the 473,800,776 reflexive 4-polytopes classified by Kreuzer-Skarke 2000-2002 (*Adv. Theor. Math. Phys.* 4 + *Comm. Math. Phys.* 230) account for the bulk of explicitly known mirror Calabi-Yau 3-folds; Batyrev-Borisov 1996 *Higher-dimensional complex varieties (Trento)* extends to complete intersections via nef-partitions. **Symplectic-side dovetail**: Delzant 1988 *Bull. SMF* 116 classifies compact symplectic toric manifolds by Delzant polytopes (simple, rational, smooth), and the Delzant correspondence overlaps the polytope-fan dictionary on the projective-toric stratum, with the moment-map image $\mu(X_P) = P$ (Atiyah 1982; Guillemin-Sternberg 1982 convexity). **Cox-ring reframing** (Cox 1995 *J. Algebraic Geom.* 4): $X_P$ presented as a GIT quotient with $L_P$ a character in the Cox-ring grading; this unifies projective and toric geometry under a single functorial framework foundational for modern computational toric algorithms (Macaulay2, Polymake, SageMath) and for non-projective toric extensions via GIT chambers. Connections: fan-and-toric-variety (04.11.04) supplies the variety side; toric-divisor-and-support-function (04.11.08) decomposes $L_P$ as $\sum a_\rho D_\rho$ over rays; orbit-cone correspondence (04.11.05) stratifies $X_P$ by faces of $P$; toric Picard group (04.11.09) sits the polarisation in the ample cone; symplectic Delzant (05.04.05) closes the symplectic-algebraic loop; Gross-Siebert (04.12.09) generalises Batyrev to arbitrary Calabi-Yau pairs via tropical scattering diagrams. Lean status: `partial`, module `Codex.AlgGeom.Toric.PolytopeFanDictionary` declares `LatticePolytope`, `NormalFan`, `PolarisedToric`, the construction `PolarisedToric.ofPolytope`, the combinatorial Demazure formula `dim_global_sections : (PolarisedToric.ofPolytope P).h0LP = P.numLatticePoints` (proved by `rfl`), and stubs `polytope_to_projective_toric`, `projective_toric_to_polytope`, `simplex_gives_projective_space`, `square_gives_p1_times_p1`, `dilation_gives_tensor_power`, `demazure_character_formula`, `batyrev_mirror_pair` — all with `sorry`-equivalent proof bodies (or `trivial` on `True` statements) pending the toric-variety + ample-line-bundle + sheaf-cohomology infrastructure missing from Mathlib.

### toric-geometry.divisor-support-function

- **title**: Toric divisor and support function
- **unit**: `04.11.08`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `toric-geometry.orbit-cone-correspondence` (04.11.06)
- **tier_anchors**:
  - master: Fulton 1993 *Introduction to Toric Varieties* (Princeton Annals Studies 131) §3.3 ($T$-invariant Weil divisors) + §3.4 Proposition 1 (support-function correspondence) + §3.4 Proposition 2 (smoothness criterion at divisor level) + §3.4 (global-sections lattice-point formula) + §3.5 (anticanonical on $\mathbb{P}^n$); Cox-Little-Schenck 2011 *Toric Varieties* (AMS GSM 124) §4.0-§4.3 + §6.1 (Theorem 4.3.3 global-sections formula; Theorem 6.1.14 ampleness via strict convexity); Oda 1988 *Convex Bodies and Algebraic Geometry* (Ergebnisse 15) §2.1-§2.3 (toric divisors, support functions, ample line bundles); Demazure 1970 *Sous-groupes algébriques de rang maximum du groupe de Cremona* (Ann. Sci. ENS (4) 3, 507-588) (originator: bijection between $T$-invariant Cartier divisors and integer-valued piecewise-linear functions, smoothness criterion, ampleness criterion, global-sections formula); Kempf-Knudsen-Mumford-Saint-Donat *Toroidal Embeddings I* (Springer LNM 339, 1973) Ch. I §2 (Cartier-cocycle formulation on toroidal embeddings); Mumford 1972 *Compositio Math.* 24, 239-272 (cone-and-lattice precursor); Brion 1989 *Duke Math. J.* 58, 397-424 (spherical-variety generalisation); Brion-Vergne 1997 *J. Amer. Math. Soc.* 10, 797-833 (residue formula and equivariant lattice-point cohomology); Reid 1983 *Decomposition of toric morphisms* (Progress in Mathematics 36, Birkhäuser, 395-418) (piecewise-linear functions as universal Cartier-divisor object); Mavlyutov 2000 *Compositio Math.* 124, 7-24 (singular-toric refinements); Hirzebruch 1951 *Math. Ann.* 124, 77-86 (Hirzebruch surfaces as Cartier-divisor laboratory); Ehrhart 1962 *C. R. Acad. Sci.* 254, 616-618 (Ehrhart polynomial); Batyrev 1994 *J. Algebraic Geom.* 3, 493-535 (anticanonical reflexive-polytope mirror duality)
  - intermediate: Fulton §3.3-§3.4; Cox-Little-Schenck §4.0 + §4.3
  - beginner: Fulton §3.3 informal opening — the prime divisor $D_\rho$ attached to a ray, the piecewise-linear support function reading off Cartier coefficients, and the polytope $P_D$ enumerating global sections
- **notes**: The toric divisor and support function form the combinatorial backbone of line-bundle theory on a toric variety. **$T$-invariant Weil divisors** are indexed by rays: for each ray $\rho \in \Sigma(1)$ with primitive generator $v_\rho \in N$, the **toric divisor** $D_\rho \subseteq X_\Sigma$ is the closure of the codimension-one torus orbit attached to $\rho$ by the orbit-cone correspondence (`04.11.06`), and every $T$-invariant Weil divisor is a finite integer combination $D = \sum_\rho a_\rho D_\rho$ over rays. **Support function correspondence** (Demazure 1970, Fulton §3.4 Proposition 1): the map $D \mapsto \psi_D$ is a bijection between $T$-invariant Cartier divisors on $X_\Sigma$ and integer-valued piecewise-linear functions on $|\Sigma|$ — continuous functions linear on each cone $\sigma$ with linear piece $m_\sigma \in M$ satisfying $\psi_D(v_\rho) = -a_\rho$ at every ray and the Cartier-cocycle compatibility $m_\sigma - m_\tau \in (\sigma \cap \tau)^\perp$ across pairwise intersections. The proof uses that $T$-invariance forces local Cartier sections to be characters $\chi^{m_\sigma}$, with the cocycle compatibility equivalent to continuity of the resulting $\psi_D$. **Smoothness criterion at divisor level** (Fulton §3.4 Proposition 2): every $T$-invariant Weil divisor is Cartier iff $X_\Sigma$ is smooth, iff every cone $\sigma$ is unimodular (rays form part of a $\mathbb{Z}$-basis of $N$). Proof in the forward direction uses dual-basis decomposition on each cone to solve the Cartier system; reverse via exhibiting a non-Cartier Weil divisor at any non-smooth cone. **$\mathbb{Q}$-Cartier refinement** (Cox-Little-Schenck §4.2): on simplicial toric, every Weil divisor is $\mathbb{Q}$-Cartier with multiplier the cone multiplicity $\mathrm{mult}(\sigma) = |\det(v_{\rho_1}, \ldots, v_{\rho_n})|$. **Demazure global-sections formula** (Fulton §3.4 Proposition 1; Cox-Little-Schenck Theorem 4.3.3): for a $T$-invariant Cartier divisor $D = \sum_\rho a_\rho D_\rho$, $H^0(X_\Sigma, \mathcal{O}(D)) = \bigoplus_{m \in P_D \cap M} \mathbb{C} \cdot \chi^m$, with $P_D = \{m \in M_\mathbb{R} : \langle m, v_\rho\rangle \geq -a_\rho \text{ for all } \rho \in \Sigma(1)\}$ the **divisor polytope**. Proof via $T$-weight decomposition: $H^0$ decomposes into weight spaces, each at most one-dimensional, with $\chi^m$ extending to a section iff $\mathrm{div}(\chi^m) + D \geq 0$, equivalent to $m \in P_D$. **Demazure vanishing**: $H^i(X_\Sigma, \mathcal{O}(D)) = 0$ for $i \geq 1$ when $D$ is nef and $X_\Sigma$ smooth complete (Cox-Little-Schenck Theorem 9.2.3), reducing Hirzebruch-Riemann-Roch to lattice-point counting. **Ehrhart polynomiality** (Ehrhart 1962; Brion-Vergne 1997): for nef $D$, the Hilbert function $L(P_D, k) = |k P_D \cap M|$ is polynomial of degree $n$, recovering the Hilbert polynomial of the polarised toric variety. **Worked anticanonical example** (Fulton §3.5): on $\mathbb{P}^n$, $-K = D_0 + \cdots + D_n = (n+1) H$ has polytope a size-$(n+1)$ simplex with $\binom{2n+1}{n}$ lattice points — $10$ for $\mathbb{P}^2$ (plane cubics), $35$ for $\mathbb{P}^3$ (quartics in four variables), $126$ for $\mathbb{P}^4$. **Hirzebruch surface anticanonical**: $-K_{F_a} = D_1 + (2-a) D_2 + D_3 + D_4$ is ample iff $a \leq 1$, distinguishing del Pezzo ($F_0, F_1$) from non-Fano ($F_{\geq 2}$). **Batyrev mirror Calabi-Yau** (Batyrev 1994): anticanonical hypersurfaces in toric $X_P$ for reflexive polytope $P$ pair with mirror hypersurfaces in $X_{P^\circ}$ via polar duality, supplying the bulk of explicitly known Calabi-Yau 3-folds (473,800,776 reflexive 4-polytopes classified by Kreuzer-Skarke). Connections: fan-and-toric-variety (04.11.04) supplies the toric variety; orbit-cone correspondence (04.11.06) supplies the geometric realisation of $D_\rho$; toric Picard group (04.11.09) is the abelian-group avatar of the support-function calculus; polytope-fan dictionary (04.11.10) recovers $(X_\Sigma, \mathcal{O}(D))$ from $P_D$ as projective toric variety with polarisation; algebraic moment map (04.11.11) is the symplectic-side polytope; toric cohomology (04.11.12) treats $D_\rho$ as degree-one generators of the Chow ring; Cox-ring and GIT quotient (04.11.15) reframe $D_\rho$ as monomial classes. Lean status: `partial`, module `Codex.AlgGeom.Toric.DivisorSupportFunction` declares `Lattice`, `Ray`, `Fan`, `TInvariantWeilDivisor`, `SupportFunction`, `DivisorPolytope`, `anticanonicalDivisor`, and named theorems `support_function_correspondence`, `smooth_iff_all_weil_cartier`, `global_sections_lattice_points`, with decidable numerical witnesses `anticanonical_p2_h0_eq_ten` ($\binom{5}{2} = 10$), `anticanonical_pn_count` ($\binom{5}{2} = 10, \binom{7}{3} = 35, \binom{9}{4} = 126$), `o_d_on_p2_dimensions` ($\binom{3}{2}=3, \binom{4}{2}=6, \binom{5}{2}=10, \binom{6}{2}=15$ for $d \in \{1, 2, 3, 4\}$), and `weighted_projective_123_cartier_multiplier` ($\mathrm{lcm}(2, 3) = 6$). Sorry-stubbed proof bodies pending the upstream `Fan` formalism plus Cartier-divisor sheaf API in Mathlib.

### toric-geometry.resolution-of-singularities

- **title**: Toric resolution of singularities
- **unit**: `04.11.07`
- **prerequisites**: `toric-geometry.rational-polyhedral-cone-dual` (04.11.02); `toric-geometry.affine-toric-variety` (04.11.03); `toric-geometry.fan-and-toric-variety` (04.11.04)
- **tier_anchors**:
  - master: Fulton 1993 *Introduction to Toric Varieties* §2.6, §3.4; Cox-Little-Schenck 2011 *Toric Varieties* §11.1, §10.1; Kempf-Knudsen-Mumford-Saint-Donat *Toroidal Embeddings I* (Springer LNM 339, 1973) Ch. I §2; Hirzebruch 1953 *Math. Ann.* 126, 1-22 (continued-fraction resolution of cyclic-quotient surface singularities); Demazure 1970 *Ann. Sci. ENS* (4) 3, 507-588 (smoothness criterion + cone-subdivision resolution algorithm); Hironaka 1964 *Ann. of Math.* 79, 109-326 (general resolution-of-singularities in characteristic zero, of which the toric case is the algorithmic specialisation); Reid 1980 *Canonical 3-folds* (Journées de géométrie algébrique d'Angers, pp. 273-310); Reid 1983 *Decomposition of toric morphisms* (Arithmetic and Geometry II); Bridgeland-King-Reid 2001 *J. Amer. Math. Soc.* 14, 535-554 (derived McKay correspondence); Ito-Nakamura 1996 *Proc. Japan Acad. A* 72, 135-138 (G-Hilbert scheme as crepant resolution); Brieskorn 1968 *Invent. Math.* 4, 336-358 (ADE classification of rational double points); Klein 1884 *Vorlesungen über das Ikosaeder* (finite subgroups of $SU(2)$); Włodarczyk 2005 *Invent. Math.* 162, 711-769 (constructive Hironaka)
  - intermediate: Fulton §2.6; Cox-Little-Schenck §11.1; Oda 1988 Ch. 1 §1.7
  - beginner: Fulton §2.6 informal — every toric variety is resolved by subdividing the fan until each cone is simplicial unimodular; the $A_1$ singularity $\mathbb{C}^2 / \mathbb{Z}_2$ resolved by inserting the ray $e_1$
- **notes**: The toric resolution theorem (Demazure 1970; KKMS 1973) asserts that every fan $\Sigma$ in $N_\mathbb{R}$ admits a **smooth refinement** $\Sigma'$ — a fan with the same support whose every cone is generated by part of a $\mathbb{Z}$-basis of $N$ — obtainable by finitely many iterated **star subdivisions** along interior lattice points of non-smooth cones. The induced toric morphism $f : X_{\Sigma'} \to X_\Sigma$ is a proper birational $T$-equivariant resolution of singularities: $X_{\Sigma'}$ is smooth, $f$ is proper (supports agree), $f$ is birational (dense torus shared), $f$ is $T$-equivariant (induced by identity on $N$), and $f$ is an isomorphism over the smooth locus of $X_\Sigma$. The construction is **algorithmic**: define the cone multiplicity $\mathrm{mult}(\sigma) = |\det(u_1, \ldots, u_n)|$ on primitive ray generators (with $\mathrm{mult}(\sigma) = 1$ iff $\sigma$ smooth), and the total multiplicity $M(\Sigma) = \sum_{\sigma \in \Sigma_n} \mathrm{mult}(\sigma)$; each star subdivision along an interior lattice point of a non-smooth cone strictly decreases $M(\Sigma) - |\Sigma_n|$, forcing termination in finitely many steps. The toric setting is the only known case of resolution of singularities that is fully algorithmic in arbitrary characteristic — the general resolution theorem (Hironaka 1964) is a non-constructive Noetherian induction in characteristic zero only, and positive-characteristic resolution remains open in dimensions $\geq 4$. **Hirzebruch-Jung algorithm** (Hirzebruch 1953): for two-dimensional cyclic-quotient surface singularities $\mathbb{C}^2 / \mathbb{Z}_p(1, q)$ presented as the cone $\sigma = \mathrm{Cone}(e_2, p e_1 - q e_2)$ with $\gcd(p, q) = 1$ and $0 < q < p$, the negative continued-fraction expansion $p/q = [b_1, \ldots, b_s]^{-} = b_1 - 1/(b_2 - 1/(\cdots - 1/b_s))$ with each $b_i \geq 2$ produces the smooth refinement and the exceptional divisor: a chain of $s$ rational curves $E_1, \ldots, E_s \cong \mathbb{P}^1$ intersecting transversely in a chain with self-intersections $E_i \cdot E_i = -b_i$ and adjacent intersections $E_i \cdot E_{i+1} = 1$. Worked examples: $A_n$ singularity $\mathbb{C}^2 / \mathbb{Z}_{n+1}(1, n)$ has continued-fraction expansion $[2, 2, \ldots, 2]$ of length $n$, yielding the $A_n$ Dynkin chain of $n$ rational $(-2)$-curves; $\mathbb{C}^2 / \mathbb{Z}_5(1, 2)$ has expansion $[3, 2]$ yielding two exceptional curves of self-intersections $(-3, -2)$; $\mathbb{C}^2 / \mathbb{Z}_7(1, 3)$ has expansion $[3, 2, 2]$ yielding self-intersections $(-3, -2, -2)$. Star subdivision corresponds to **$T$-equivariant blow-up** of the closed $T$-orbit indexed by the cone being subdivided (Reid 1983); every $T$-equivariant proper birational morphism between $\mathbb{Q}$-factorial toric varieties is a composition of star subdivisions and their inverses, giving the **toric Mori program** (Reid 1983; Matsuki 2002). **Crepant resolution criterion** (Reid 1980): a star subdivision $\Sigma \to \Sigma^*(v)$ along a primitive lattice $v$ interior to a cone $\sigma$ is crepant ($f^* K_X = K_{X'}$) iff $v$ lies on the affine hyperplane $H_\sigma$ spanned by the primitive ray generators of $\sigma$; for Gorenstein toric singularities $\mathbb{C}^n / G$ with $G \subset SL_n(\mathbb{C})$ finite, crepant resolutions exist in dimensions $\leq 3$ and correspond to lattice triangulations of $P \cap H_\sigma$. The **McKay correspondence** (Reid 1980; Ito-Nakamura 1996; Bridgeland-King-Reid 2001) identifies cohomology classes of the crepant resolution $\mathrm{Hilb}^G(\mathbb{C}^n)$ with irreducible representations of $G$, with the derived-equivalence statement $D^b(\mathrm{Coh}^G(\mathbb{C}^n)) \cong D^b(\mathrm{Coh}\,Y)$ (BKR 2001) extending the dimension-2 classical McKay (Klein 1884; Brieskorn 1968 ADE). The toric resolution is the foundational toy model for every constructive resolution algorithm (Bierstone-Milman 1997; Encinas-Villamayor 2003; Włodarczyk 2005) and is the only known case algorithmic in positive characteristic (KKMS 1973). Lean status: `partial`, module `Codex.AlgGeom.Toric.ResolutionSingularities` declares the placeholder `RationalPolyhedralCone`, `Fan`, `IsSmooth`, `Refines` structures, the resolution theorem `smooth_refinement_exists` and `toric_resolution`, the `Fan.starSubdivision` operation with `starSubdivision_refines`, the `negativeContinuedFraction` function, the `HirzebruchJungData` structure, the `hirzebruch_jung_resolution` theorem, and the `aN_HJ` construction with witnesses `aN_chain_length`, `aN_blocks_all_two`, `aN_is_crepant` — with `sorry`-stubbed proof bodies pending the upstream cone-and-fan machinery in Mathlib.


### tropical.theta-function-polarised-manifold

- **title**: Theta function of a polarised tropical manifold
- **unit**: `04.12.12`
- **prerequisites**: `toric-geometry.polytope-fan-dictionary` (04.11.10 — the Fulton 3.32 lattice-point basis the construction generalises); `tropical.nishinou-siebert-correspondence` (04.12.06 — curve-count input to wall functions); `tropical.toric-degeneration-calabi-yau` (04.12.07); dual intersection complex (04.12.08); slab function (04.12.11)
- **tier_anchors**:
  - master: Gross-Hacking-Keel 2015 *Mirror symmetry for log Calabi-Yau surfaces I*, Publ. IHÉS 122 (1), 65-168 (originator paper: theta functions and the canonical $\mathbb{Z}$-basis on log Calabi-Yau surfaces); Carl-Pumperla-Siebert 2020 *A tropical view of Landau-Ginzburg models*, Forum Math. Sigma 8, e15 (arbitrary-dimension generalisation; broken-line construction on a polarised tropical manifold); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lecture 6 (textbook synthesis); Gross-Siebert 2011 *Annals* 174 (reconstruction theorem supplying the smoothing on which theta functions live); Gross-Hacking-Keel-Siebert 2022 *Mem. AMS* 278/1367 (theta functions on varieties with effective anticanonical class); Mandel 2019 arXiv:1903.12014 (log Gromov-Witten interpretation of structure constants); Fulton 1993 §3.4 (the polarised-toric lattice-point basis this construction generalises)
  - intermediate: Gross 2011 CBMS Lecture 6; Gross-Hacking-Keel 2015 §3-§6; Carl-Pumperla-Siebert 2020 §2-§4
  - beginner: Gross 2011 CBMS Lecture 6 informal opening; Gross-Hacking-Keel 2015 §1 preamble
- **notes**: The theta-function construction of Gross-Hacking-Keel 2015 *Publ. IHÉS* 122 (surface case) and Carl-Pumperla-Siebert 2020 *Forum Math. Sigma* 8 (arbitrary dimension) supplies a canonical $\mathbb{Z}$-basis $\{\vartheta_m\}_{m \in B(\mathbb{Z})}$ of the polarised section ring of the smoothing $\mathfrak{X}_t$ reconstructed from a polarised tropical manifold $(B, \mathscr{P}, \varphi)$. The construction: given the canonical scattering diagram $\mathscr{S}$ of Gross-Siebert 2011, walls $\mathfrak{d}$ in $B$ carry wall functions $f_\mathfrak{d} = 1 + \sum_k a_{\mathfrak{d}, k} z^{k m_\mathfrak{d}}$ with integer coefficients (from the Nishinou-Siebert curve counts of 04.12.06). A *broken line* with terminal direction $m$ ending at a generic test point $Q$ is a piecewise-linear path that bends at each wall crossing with monomial decoration picked from the wall function. The theta function $\vartheta_m(Q) := \sum_\beta \mathrm{Mono}(\beta)$ is the broken-line sum. **Theorem (canonical $\mathbb{Z}$-basis; Gross-Hacking-Keel 2015 §1, Carl-Pumperla-Siebert 2020 §4):** $\{\vartheta_m : m \in B(\mathbb{Z})\}$ is a free $\mathbb{Z}[\![t]\!]$-basis of $R(L) = \bigoplus_k H^0(\mathfrak{X}, L^{\otimes k})$, with multiplication law $\vartheta_{p_1} \cdot \vartheta_{p_2} = \sum_p C^p_{p_1, p_2} \vartheta_p$ and $C^p_{p_1, p_2}$ a non-negative integer (the broken-line triple count weighted by wall decorations). **Fulton specialisation:** in the rigid-toric case $(B, \mathscr{P}, \varphi) = (P, \{P\}, \varphi_P)$ with no walls, broken lines reduce to unbent straight lines and $\vartheta_m = \chi^m$, exactly recovering the lattice-point monomial basis $H^0(X_P, L_P) = \bigoplus_{m \in P \cap M} \mathbb{C} \cdot \chi^m$ of Fulton 1993 §3.4 (cf. 04.11.10). The Gross-Hacking-Keel / Carl-Pumperla-Siebert construction is therefore the faithful Calabi-Yau generalisation of the polarised-toric polytope-to-sections theorem. **Mandel 2019 log GW interpretation:** the structure constants $C^p_{p_1, p_2}$ equal naive log Gromov-Witten invariants of $\mathfrak{X}_t$ — counts of stable log maps from three-marked rational curves with prescribed contact orders along the boundary. **Mumford 1966 specialisation:** for $\mathfrak{X}_t$ a totally degenerate abelian variety, the theta functions reduce to Mumford's classical theta functions with polarisation; the broken-line combinatorics replaces the classical Heisenberg-group computations. **SYZ interpretation (Strominger-Yau-Zaslow 1996):** theta functions on $\mathfrak{X}^\vee_t$ correspond, under fibrewise T-duality on the special-Lagrangian torus fibration, to canonical wavefunctions on $\mathfrak{X}_t$; structure constants are OPE coefficients. **Cluster algebra interpretation (Mandel 2019; Fock-Goncharov):** for cluster log Calabi-Yau varieties, the theta-function basis coincides with the Fock-Goncharov canonical basis, supplying the Fock-Goncharov positivity coefficients. **Gross-Hacking-Keel-Siebert 2022 *Mem. AMS* 278/1367:** the *intrinsic mirror algebra* $A(X, D) := \bigoplus_{m \in \mathrm{Int}(X, D)} \mathbb{Z} \cdot \vartheta_m$ with theta-function multiplication realises the mirror Calabi-Yau intrinsically from log Calabi-Yau data $(X, D)$. The audit-punch-list anchor is the Fulton 3.32 polarised-toric lattice-point basis (`04.11.10`); the present construction is the Calabi-Yau analogue, the explicit generalisation of the polytope-to-sections theorem to degenerate Calabi-Yau varieties. Lean status: `partial`, module `Codex.AlgGeom.Tropical.ThetaFunction` declares `IntegralAffineManifold`, `PolyhedralDecomposition`, `Polarisation`, `PolarisedTropicalManifold`, `Wall`, `Structure`, `BrokenLine`, `thetaFunction`, `structureConstant`, and the named theorems `theta_canonical_basis`, `reduces_to_fulton_lattice_basis`, `theta_structure_constants_integer` with placeholder proof bodies pending the polarised-tropical-manifold + broken-line + scattering-diagram + log Gromov-Witten API in Mathlib.

### tropical.slab-function-structure

- **title**: Slab function and structure of a tropical manifold
- **unit**: `04.12.11`
- **prerequisites**: `toric-geometry.fan-and-toric-variety` (04.11.04); `toric-geometry.polytope-fan-dictionary` (04.11.10); `tropical.nishinou-siebert-correspondence` (04.12.06); toric degeneration (04.12.07); dual intersection complex (04.12.08)
- **tier_anchors**:
  - master: Gross-Siebert 2010 *Mirror symmetry via logarithmic degeneration data II*, J. Algebraic Geom. 19 (4), 679-780 (originator definitions of slab functions on codimension-1 cells of $(B, \mathscr{P})$, structure $\mathscr{S} = (\mathscr{F}, \mathscr{W})$, consistency condition at codim-2 cells, and the order-by-order construction of a formal flat family from a consistent structure); Gross-Siebert 2011 *From real affine geometry to complex geometry*, Annals of Mathematics 174 (3), 1301-1428 (the formalism $(B, \mathscr{P}, \varphi, \mathscr{S})$ and the reconstruction theorem assembling a one-parameter smoothing from a consistent structure); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS Reg. Conf. Ser. 114, AMS) Lecture 5 (textbook synthesis); Carl-Pumperla-Siebert 2010 arXiv:1011.6228 (algorithmic scattering assembly of a consistent structure from log-Gromov-Witten counts; broken-line construction); Kontsevich-Soibelman 2006 (Birkhäuser PiM 244, 321-385, *Affine structures and non-Archimedean analytic spaces*: non-archimedean SYZ, scattering diagrams, wall-crossing automorphism group $V_\rho$); Gross-Hacking-Keel 2015 *Publ. IHÉS* 122, 65-168 (two-dimensional log-Calabi-Yau case: slab functions on codim-1 cells, cluster-algebra realisation); Cox-Little-Schenck 2011 *Toric Varieties* (AMS GSM 124) Ch. 1-3 + Ch. 6 (toric-coordinate language); Gross-Siebert 2013 *Logarithmic Gromov-Witten invariants*, J. Amer. Math. Soc. 26 (2), 451-510 (the log-GW count input determining order-1 slab-function coefficients); Strominger-Yau-Zaslow 1996 *Nuclear Physics B* 479, 243-259 (SYZ heuristic); Maclagan-Sturmfels 2015 *Introduction to Tropical Geometry* (AMS GSM 161) Ch. 3-§3 (tropical-hypersurface background); Kontsevich-Soibelman 2008 arXiv:0811.2435 (wall-crossing formalism, pro-nilpotent Lie-algebra completion)
  - intermediate: Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lecture 5; Gross-Siebert 2006 *J. Differential Geom.* 72 *Mirror symmetry via logarithmic degeneration data I* §1-§2
  - beginner: Gross 2011 *TGMS* (CBMS 114) Lecture 5 informal opening — slab functions as the polynomial gluing data on the codimension-1 walls between chambers
- **notes**: A polarised tropical manifold $(B, \mathscr{P}, \varphi)$ is an integral affine $n$-manifold with codimension-2 singularity locus $\Delta \subseteq B$, a polyhedral decomposition $\mathscr{P}$, and a strictly convex piecewise-linear polarisation $\varphi$ (cf. `04.12.08`). A **slab** is a codimension-1 face $\rho \in \mathscr{P}^{[n-1]}$ in the away-from-discriminant region $B \setminus \Delta$ separating two adjacent maximal cells $\sigma_+, \sigma_- \in \mathscr{P}^{[n]}$, with common tangent integral lattice $\Lambda_\rho = \Lambda_{\sigma_+} \cap \Lambda_{\sigma_-} \cong \mathbb{Z}^{n-1}$. A **slab function** on $\rho$ (Gross-Siebert 2010 *JAG* 19 §1) is a Laurent polynomial $f_\rho \in \mathbb{C}[t][\Lambda_\rho] = \mathbb{C}[t][z^m : m \in \Lambda_\rho]$ normalised by $f_\rho|_{t = 0} = 1$ and required to satisfy the positive-Newton condition (monomials at positive order in $t$ point outward against the slab orientation) and compatibility at every codimension-2 face of $\rho$ in $B \setminus \Delta$. A **wall** is a codimension-1 rational polyhedral subset $\mathfrak{d}$ in the interior of a maximal cell $\sigma$ together with a wall-crossing automorphism $\theta_\mathfrak{d}(z^m) = z^m \cdot f_\mathfrak{d}^{\langle n_\mathfrak{d}, m\rangle}$ of the truncated toric ring $\mathbb{C}[t][\Lambda_\sigma]/(t^N)$, for primitive normal $n_\mathfrak{d} \in \Lambda_\sigma^\vee$ and wall function $f_\mathfrak{d} \in 1 + t \cdot \mathbb{C}[t][\Lambda_\sigma]$. A **structure** $\mathscr{S} = (\mathscr{F}, \mathscr{W})$ on $(B, \mathscr{P}, \varphi)$ is a slab-function family $\mathscr{F} = \{f_\rho\}$ together with a locally finite wall family $\mathscr{W} = \{(\mathfrak{d}, \theta_\mathfrak{d})\}$ satisfying the **consistency condition** at every codimension-2 cell $\tau$: the product of slab transitions and wall-crossing automorphisms around a small loop encircling $\tau$ in $B \setminus \Delta$ is the identity modulo $t^{N+1}$ for every $N \geq 1$. **Consistency-of-structure theorem** (Gross-Siebert 2010 *JAG* 19): a consistent structure $\mathscr{S}$ produces, for every $N \geq 1$, a flat $\mathbb{C}[t]/(t^{N+1})$-family of schemes assembling order-by-order into a formal flat family $\hat{\mathfrak{X}} \to \mathrm{Spf}\,\mathbb{C}[[t]]$ with central fibre $X_0(B, \mathscr{P}, \varphi)$. The proof has three movements: chartwise scheme structure from the toric ring $R_\sigma = \mathbb{C}[t][\Lambda_\sigma]$; codimension-1 gluing via $z_- = z_+^{-1} f_\rho \pi_\rho$ with $\pi_\rho = t^{\kappa_\rho}$ recording the polarisation jump; codimension-2 consistency via the wall-crossing automorphisms. **Carl-Pumperla-Siebert algorithm** (2010 arXiv:1011.6228): starting from initial slab functions $\mathscr{F}^{(1)} = \{1 + t \alpha_\rho\}$ with $\alpha_\rho$ a sum of genus-0 log-GW counts on $X_0$ contributing to $\rho$, the algorithm iterates Kontsevich-Soibelman scattering at every codim-2 cell to assemble a consistent structure $\mathscr{S} = \varprojlim_N (\mathscr{F}^{(N)}, \mathscr{W}^{(N)})$. **Kontsevich-Soibelman scattering theorem** (2006): two walls with non-proportional primitive normals admit a unique locally finite completion to a consistent system. **Worked examples**: at the simplest substantive level, the one-dimensional interval split into two segments has one slab with slab function $f_\rho = 1 + t z$ producing a one-parameter family; the focus-focus singularity of an integral affine surface has two slabs $\rho_1, \rho_2$ with order-1 functions $f_{\rho_i} = 1 + t z^{m_i}$ and an order-1 wall $f_\mathfrak{d} = 1 + t z^{m_1 + m_2}$ correcting the cocycle. **Toric specialisation**: when $(B, \mathscr{P}, \varphi)$ is the polarised tropical manifold of a lattice polytope $P$, all slab functions reduce to $f_\rho = 1$, the wall set is empty, and the reconstruction theorem applied to this identity structure recovers $(X_P, L_P)$ from `04.11.10`. Connection: the apparatus is the codimension-1 enhancement of the dual intersection complex (`04.12.08`); it is the input to the Gross-Siebert reconstruction theorem (`04.12.09`); it determines the broken-line theta functions (`04.12.12`) on a polarised mirror Calabi-Yau; and it consumes the log-Gromov-Witten correspondence (`04.12.06`) at order 1 and order $N \geq 2$ via Carl-Pumperla-Siebert. Originator chain: Mumford 1972 *Compositio Math.* 24 (Tate-curve prototype); Kempf-Knudsen-Mumford-Saint-Donat 1973 *Toroidal Embeddings I* (toric-pasting precedent); Strominger-Yau-Zaslow 1996 (SYZ heuristic); Kontsevich-Soibelman 2006 (non-archimedean SYZ, scattering); Gross-Siebert 2006 *JDG* 72 (log Calabi-Yau central fibre, $(B, \mathscr{P})$); Gross-Siebert 2010 *JAG* 19 (slab functions, structure $\mathscr{S}$, consistency-of-structure theorem); Gross-Siebert 2011 *Annals* 174 (algebraisation, reconstruction theorem); Carl-Pumperla-Siebert 2010 (scattering algorithm from log-GW counts); Gross-Hacking-Keel 2015 *Publ. IHÉS* 122 (two-dimensional log-Calabi-Yau realisation). Lean status: `partial`, module `Codex.AlgGeom.Tropical.SlabFunction` declares `Lattice`, `PolarisedTropicalManifold`, `Slab`, `Wall`, `SlabFunction`, `Structure`, `toricCentralFibre`, `orderwiseFamily`, `polarisationHeight`, and the named theorems `structure_glues_orderwise` (Gross-Siebert 2010 consistency-of-structure), `polarisation_compatibility` (compatibility of $\pi_\rho = t^{\kappa_\rho}$ with the polarisation $\varphi$), and `reconstruction_input` (the formal-family output is the input to the Gross-Siebert reconstruction theorem of `04.12.09`) — with `sorry`-equivalent (`rfl`-on-placeholder) proof bodies pending the polyhedral + integral-affine + Laurent + wall-crossing infrastructure in Mathlib.

### tropical.period-integral-mirror-map

- **title**: Period integral and the mirror map (pointer)
- **unit**: `04.12.13`
- **prerequisites**: `algebraic-geometry.kodaira-embedding` (04.09.11 — polarisation + ample line bundles on the Calabi-Yau family); `tropical.toric-degeneration-calabi-yau` (04.12.07); `tropical.gross-siebert-reconstruction` (04.12.09 — the family on which periods are computed); `tropical.theta-function-polarised-manifold` (04.12.12 — broken-line parallel to the period reconstruction)
- **tier_anchors**:
  - master: Candelas-de la Ossa-Green-Parkes 1991 *Nucl. Phys. B* 359 (originator: the founding mirror-symmetry period prediction for the quintic); Morrison 1993 *J. Amer. Math. Soc.* 6 (canonical Mathematicians' guide; LCSL framework; maximally unipotent monodromy; canonical-coordinate construction); Hosono-Klemm-Theisen-Yau 1995 *Comm. Math. Phys.* 167 (Picard-Fuchs equations and GKZ for toric Calabi-Yau hypersurfaces); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lecture 7 (textbook synthesis with tropical-disk-count interpretation); Cox-Katz 1999 *Mirror Symmetry and Algebraic Geometry* (AMS Math. Surv. Mono. 68); Doran-Morrison 2010 *J. Symbolic Comput.* 45 (algorithmic Picard-Fuchs solver); GKZ 1994 *Discriminants, Resultants, and Multidimensional Determinants* (Birkhäuser); Voisin 1996 *Symétrie miroir* (SMF Panoramas et Synthèses 2); Strominger-Yau-Zaslow 1996 *Nucl. Phys. B* 479 (SYZ geometric origin); Gross-Siebert 2011 *Annals* 174 (reconstruction theorem supplying the Calabi-Yau family)
  - intermediate: Gross 2011 CBMS Lecture 7; Morrison 1993; Cox-Katz 1999 §5-§6
  - beginner: Gross 2011 CBMS Lecture 7 informal opening; Candelas-de la Ossa-Green-Parkes 1991 §1-§2 informal preamble
- **notes**: The period integral and mirror-map story for Calabi-Yau mirror symmetry, presented as a Master-tier pointer unit bridging the Gross-Siebert tropical-mirror-symmetry programme (04.12.07/09/12) to the Hodge-theoretic foundations of chapter 04.09. For the Gross-Siebert reconstructed toric degeneration $\pi : \mathfrak{X} \to \mathrm{Spec}\,\mathbb{C}[[t]]$ of Calabi-Yau varieties from a polarised tropical manifold $(B, \mathscr{P}, \varphi)$, the relative holomorphic volume form $\Omega_t$ produces period integrals $\Pi_i(t) = \int_{\gamma_i} \Omega_t$ along a basis of cycles $\gamma_i \in H_n(\mathfrak{X}_\eta, \mathbb{Z})$. The periods satisfy a **Picard-Fuchs equation** $L \cdot \Pi(t) = 0$ where $L = \theta^r + a_{r-1}(t) \theta^{r-1} + \cdots + a_0(t)$ is the linear ODE in the logarithmic derivative $\theta = t \, d/dt$ derived from the Gauss-Manin connection on the relative de Rham cohomology $R^n \pi_* \Omega^\bullet_{\mathfrak{X}/B}$. **Large-complex-structure limit (LCSL)** at $t = 0$: the monodromy $T$ is maximally unipotent ($N = \log T$ nilpotent of order $n + 1$), the weight filtration $W_\bullet$ has maximum length $2n + 1$, and the limiting mixed Hodge structure of Schmid 1973 / Deligne 1997 gives a canonical pair of periods $\Pi_0(t)$ (regular, $\Pi_0(0) \neq 0$) and $\Pi_1(t) = \Pi_0(t) \log(t) + R(t)$ (logarithmic) constructed from generators of $\mathrm{Gr}^W_0$ and $\mathrm{Gr}^W_2$. **Mirror map.** The canonical coordinate $q(t) := \exp(\Pi_1(t)/\Pi_0(t))$ is the mirror map: it satisfies $q(t) = t \cdot (1 + r_1 t + r_2 t^2 + \cdots)$ near the LCSL, and identifies the algebraic-geometric parameter $t$ on the B-side with the symplectic Kähler parameter $q$ on the A-side mirror via the Strominger-Yau-Zaslow correspondence (04.12.10). **Tropical-disk-count interpretation (Gross 2011 Lecture 7).** The higher-order coefficients $r_k$ of the mirror map are computed by tropical-disk count generating series on the polarised tropical manifold $(B, \mathscr{P}, \varphi)$ via the Nishinou-Siebert correspondence (04.12.06): each $r_k$ is a count of Maslov-index-2 tropical disks with prescribed combinatorial type, identified with log Gromov-Witten invariants on the central fibre via Nishinou-Siebert and with Gromov-Witten invariants on the generic fibre via the deformation invariance of log GW theory. **Quintic example (Candelas-de la Ossa-Green-Parkes 1991).** For the mirror quintic of the quintic threefold $X \subset \mathbb{P}^4$, the Picard-Fuchs operator is of order $4$, the LCSL coincides with a specific point in the one-parameter mirror moduli, and the leading coefficient $r_1$ of the mirror map equals (a rational multiple of) the degree-1 Gromov-Witten count $n_1(X) = 2875$ (the number of lines on the quintic, classically known). The systematic identification of all $r_k$ with Gromov-Witten invariants is the BCOV recursion (Bershadsky-Cecotti-Ooguri-Vafa 1994) and was rigorously confirmed by Givental 1996 and Lian-Liu-Yau 1997. **GKZ side.** For Calabi-Yau hypersurfaces in toric varieties, the Picard-Fuchs operator is a reduction of the Gelfand-Kapranov-Zelevinsky hypergeometric system $\mathcal{H}_A(\beta)$ attached to the reflexive polytope $A \subset \mathbb{Z}^n$ with Calabi-Yau parameter $\beta = (-1, 0, \ldots, 0)$; the reduction via the principal $A$-determinant ideal is the content of GKZ 1994 Ch. 10-11, Hosono-Klemm-Theisen-Yau 1995, Hosono-Lian-Yau 1996, and the algorithmic completion of Doran-Morrison 2010. The bridge from the algebraic-geometric GKZ side to the tropical Gross-Siebert side is provided by the Nishinou-Siebert correspondence and is the foundational content of the Gross 2011 Lecture 7 anchor. **Three structural bridges of the pointer unit.** Bridge one: from Gross-Siebert reconstruction (04.12.09) to the period integral via the relative holomorphic volume form. Bridge two: from the period integral to the Picard-Fuchs equation via the Gauss-Manin connection and the Frobenius method at the LCSL. Bridge three: from the mirror-map coefficients back to the tropical side via the Nishinou-Siebert correspondence applied to the slab functions. The unit is a Master-tier pointer ($\geq 6000$ words per CYCLE_4_STYLE_PARITY_PLAN §5.1; Beginner $\leq 600$w; Intermediate $\leq 2000$w by pointer-unit interpretation) deferring the full Hodge-theoretic content to chapter 04.09 and to the monograph literature. Originator chain: Schmid 1973 *Invent. Math.* 22 (variation of Hodge structure, nilpotent-orbit theorem); Griffiths 1968 (period mappings); Candelas-de la Ossa-Green-Parkes 1991 (mirror-symmetry prediction); Morrison 1993 (Mathematicians' guide; LCSL); GKZ 1994 (GKZ hypergeometric system); Hosono-Klemm-Theisen-Yau 1995, Hosono-Lian-Yau 1996 (GKZ-Picard-Fuchs systematic reduction); Strominger-Yau-Zaslow 1996 (SYZ geometric origin); Givental 1996, Lian-Liu-Yau 1997 (rigorous Gromov-Witten matching); Deligne 1997 (limiting mixed Hodge structure); Cox-Katz 1999, Voisin 1996 (canonical monographs); Gross-Siebert 2011 (reconstruction theorem); Gross 2011 CBMS Lecture 7 (tropical-disk-count interpretation); Doran-Morrison 2010 (algorithmic completion). Lean status: `partial`, module `Codex.AlgGeom.Tropical.PeriodIntegral` declares `PeriodVector`, `picardFuchsOperator`, the named theorems `mirror_map_asymptotic` and `period_picard_fuchs_annihilation` with `sorry`-equivalent placeholder bodies pending Mathlib's holomorphic-volume-form + Gauss-Manin-connection + limiting-mixed-Hodge-structure + GKZ-hypergeometric-system + tropical-disk-count infrastructure.

### chemistry.molecular-spectroscopy-fundamentals

- **title**: UV-Vis, IR, and NMR — fundamentals of molecular spectroscopy
- **unit**: `14.12.01`
- **prerequisites**: `chemistry.hydrogen-atom-quantum-chemistry` (14.04.01); `chemistry.mo-theory-homonuclear-diatomics` (14.05.02); `chemistry.hybridization-valence-bond` (14.02.02)
- **tier_anchors**:
  - master: Hollas 2004 *Modern Spectroscopy* 4e (Wiley); Levine 1975 *Molecular Spectroscopy* (Wiley); Bernath 2020 *Spectra of Atoms and Molecules* 4e (Oxford); Atkins-de Paula 2022 *Physical Chemistry* 12e Ch. 12-14; Cohen-Tannoudji-Diu-Laloe 1977 *Quantum Mechanics* Vol. II; originators: Bouguer 1729 *Essai d'optique* + Lambert 1760 *Photometria* + Beer 1852 *Ann. Phys. Chem.* 86 (Beer-Lambert law); Raman 1928 *Indian J. Phys.* 2 (Raman scattering, Nobel 1930); Bloch 1946 *Phys. Rev.* 70 + Purcell-Torrey-Pound 1946 *Phys. Rev.* 69 (NMR, Nobel 1952); Rabi 1938 *Phys. Rev.* 53 (molecular-beam magnetic resonance, Nobel 1944); Franck 1925 *Trans. Faraday Soc.* 21 + Condon 1926 *Phys. Rev.* 28 (Franck-Condon principle); Ernst-Anderson 1966 *Rev. Sci. Instrum.* 37 (FT-NMR, Nobel 1991); Aue-Bartholdi-Ernst 1976 *J. Chem. Phys.* 64 (2D-NMR); Wuthrich 2002 Nobel Lecture (biomolecular NMR); Zewail 1999 Nobel Lecture (femtochemistry)
  - intermediate: Atkins-de Paula 2022 Ch. 12-14; Pavia et al. 2015 *Introduction to Spectroscopy* 5e Ch. 2-5
  - beginner: Tro 2023 *Chemistry: A Molecular Approach* 6e Ch. 7 spectroscopy callouts; Crash Course Chemistry — spectroscopy episodes
- **notes**: Foundations of molecular spectroscopy unifying UV-Vis, IR/Raman, and NMR techniques around a single quantum-mechanical principle: a photon is absorbed when its energy matches an allowed gap between two stationary states of the molecule, with rate governed by the transition dipole moment $\boldsymbol{\mu}_{fi} = \langle f|\hat{\boldsymbol{\mu}}|i\rangle$ via Fermi's golden rule (see [12.07.02]). **UV-Vis spectroscopy** probes electronic transitions (2-6 eV photons); the Beer-Lambert law $A = \varepsilon c \ell$ — derivable from a first-order linear ODE on intensity in the linear-response regime — relates absorbance to concentration with the molar absorptivity $\varepsilon$ identified with the transition rate. Vibronic-band shape is governed by the Franck-Condon principle, with intensity proportional to the squared vibrational-overlap integral $|\langle\chi_f|\chi_i\rangle|^2$; for harmonic potentials with displacement $\Delta x$ the intensity distribution follows a Poisson law $P(v_f) = e^{-S} S^{v_f}/v_f!$ in the Huang-Rhys factor $S = (\Delta x/x_0)^2/2$. Chromophore concept transferable across molecules; HOMO-LUMO gaps scale as $1/L^2$ for conjugated polyenes (free-electron-in-a-box approximation); transition-metal d-d transitions in the visible due to crystal-field splitting $\Delta_o$ (see [16.04.02]); charge-transfer bands much more intense than d-d because not parity-forbidden. **Vibrational spectroscopy** probes normal modes of the mass-weighted Hessian; a molecule with $N$ atoms has $3N - 6$ (non-linear) or $3N - 5$ (linear) modes. Harmonic-oscillator energies $E_n = \hbar\omega(n+1/2)$ with selection rule $\Delta n = \pm 1$; anharmonic Morse-potential corrections $E_n = \hbar\omega_e(n+1/2) - \hbar\omega_e x_e(n+1/2)^2$ make overtones weakly allowed. IR-active modes require $\partial\boldsymbol{\mu}/\partial Q \neq 0$; Raman-active modes require $\partial\boldsymbol{\alpha}/\partial Q \neq 0$. **Mutual-exclusion principle**: in centrosymmetric molecules, no mode is both IR- and Raman-active because dipole is $u$-parity and polarisability is $g$-parity. Group-theoretic selection rule via direct-product decomposition $\Gamma_f \otimes \Gamma_\mu \otimes \Gamma_i$ contains the trivial representation $\Gamma_1$; for $C_{2v}$ formaldehyde, $\pi \to \pi^*$ ($B_1 \otimes B_1 = A_1$, $z$-polarised, allowed); $n \to \pi^*$ ($B_2 \otimes B_1 = A_2$, none of $\mu_x,\mu_y,\mu_z$, forbidden, weakly observed via vibronic coupling). Group-frequency analysis: C=O at 1715 cm$^{-1}$ in ketones, 1735 in esters, 1690 in conjugated, 1640 in amides — chemical environment modulates bond strength and frequency. **NMR spectroscopy** probes nuclear-spin states in external field $B_0$ via Larmor frequency $\omega_0 = \gamma B_0$. Two key chemical observables: chemical shift $\delta$ in ppm relative to TMS reflecting local electronic shielding $\sigma$ via $B_{\text{eff}} = B_0(1-\sigma)$; J-coupling Hamiltonian $\hat{H}_J = 2\pi J\hat{\mathbf{I}}_1\cdot\hat{\mathbf{I}}_2$ mediated by Fermi-contact interaction through bonding electrons, with Karplus relation $^3J(\phi) = A\cos^2\phi + B\cos\phi + C$ linking vicinal couplings to dihedral angles. **Bloch equations** $d\mathbf{M}/dt = \gamma\mathbf{M}\times\mathbf{B} - (M_x\hat{x}+M_y\hat{y})/T_2 - (M_z-M_0)\hat{z}/T_1$ govern macroscopic-magnetisation dynamics: Larmor precession plus phenomenological relaxation, yielding Lorentzian lineshape of half-width $1/T_2$. FT-NMR revolution (Ernst 1966) increased sensitivity by $\sqrt{N}$ Felgett advantage, enabling routine $^{13}$C NMR despite 1.1% natural abundance and reduced gyromagnetic ratio. 2D pulse sequences (COSY, HSQC, HMBC, NOESY, TOCSY) generate molecular-connectivity maps via Fourier transform of two evolution times; Wuthrich 2002 extended to biological-macromolecule structure determination. **Modern frontiers** include hyperpolarisation (DNP, parahydrogen-induced polarisation, optical pumping) amplifying NMR sensitivity by $10^2$-$10^4$; single-molecule fluorescence and super-resolution microscopy (Moerner-Hell-Betzig 2014 Nobel); ultrafast pump-probe spectroscopy reaching femtosecond timescales (Zewail 1999 Nobel) and attosecond pulses (Krausz-Agostini-L'Huillier 2023 Nobel); 2D-IR (Hochstrasser, Tokmakoff) and 2D electronic spectroscopy applying the 2D-NMR concept to optical regime. Connections: [12.07.02] time-dependent perturbation theory + Fermi golden rule (transition-rate basis); [16.04.02] CFSE + spectrochemical series (UV-Vis of transition-metal complexes via d-d transitions); [15.11.01] NMR organic chemistry (structure-elucidation companion). Lean status: `none`, with substantive mathlib_gap describing three independent formalisation targets — transition dipole moments as matrix elements of position operator in bra-ket inner-product API; Beer-Lambert law in measure-theoretic form derivable from Bochner integral over photon-absorption probabilities; Bloch equations as first-order linear ODE on magnetisation vector $\mathbf{M}(t) \in \mathbb{R}^3$ with existence-uniqueness from Picard-Lindelöf already in Mathlib. The (3) ODE-foundation route is the most accessible formalisation target; (1) and (2) need new analytic foundations.

### number-theory.riemann-zeta

- **title**: Riemann zeta function $\zeta(s)$
- **unit**: `21.03.01`
- **prerequisites**: `complex-analysis.analytic-continuation` (06.01.04); `complex-analysis.gamma-function` (06.01.15); `analysis.infinite-series-convergence` (02.03.03)
- **tier_anchors**:
  - master: Riemann 1859 *Monatsber. Berliner Akad.* (originator: definition for complex $s$, analytic continuation, functional equation, Hadamard product, explicit formula, Riemann hypothesis); Edwards 1974 *Riemann's Zeta Function* (Academic Press, line-by-line reading); Titchmarsh 1986 *Theory of the Riemann Zeta-Function* (2nd ed., revised Heath-Brown, Oxford); Davenport 2000 *Multiplicative Number Theory* (GTM 74, 3rd ed.); Iwaniec-Kowalski 2004 *Analytic Number Theory* (AMS Colloquium 53); Hadamard 1896 + de la Vallée Poussin 1896 (PNT via $\zeta \neq 0$ on $\operatorname{Re}(s) = 1$); Bombieri 2000 Clay Millennium Problem statement; Conrey 2003 *Notices AMS* survey
  - intermediate: Davenport 2000 Ch. 8; Iwaniec-Kowalski 2004 Ch. 5
  - beginner: Derbyshire 2003 *Prime Obsession* Ch. 5-7 informal; Euler 1735 Basel opening with $\zeta(2) = \pi^2/6$
- **notes**: The Riemann zeta function is the foundational analytic object of analytic number theory. Definition by Dirichlet series $\zeta(s) = \sum_{n=1}^{\infty} 1/n^s$ on the half-plane $\operatorname{Re}(s) > 1$; equivalent Euler product $\zeta(s) = \prod_p (1 - p^{-s})^{-1}$ over primes (Euler 1737, encoding unique factorisation in $\mathbb{Z}$); analytic continuation to a meromorphic function on $\mathbb{C}$ with a single simple pole at $s = 1$ of residue $1$. The signature theorem is the **functional equation** in symmetric form $\xi(s) = \xi(1-s)$ where the completed function $\xi(s) = \frac{1}{2}s(s-1) \pi^{-s/2} \Gamma(s/2) \zeta(s)$ is entire of order $1$; equivalently in asymmetric form $\zeta(s) = 2^s \pi^{s-1} \sin(\pi s/2) \Gamma(1-s) \zeta(1-s)$. Two proofs (both Riemann 1859): (i) contour deformation via the Hankel integral $\zeta(s) = -\Gamma(1-s) (2\pi i)^{-1} \int_C (-z)^{s-1}/(e^z - 1) dz$, providing analytic continuation in one step; (ii) theta-function symmetry via the Mellin transform $\pi^{-s/2} \Gamma(s/2) \zeta(s) = \int_0^{\infty} \psi(x) x^{s/2-1} dx$ where $\psi(x) = \sum_{n=1}^{\infty} e^{-\pi n^2 x}$ and the Jacobi transformation $\theta(1/x) = x^{1/2} \theta(x)$ (a Poisson summation identity on the Gaussian) produces $s \leftrightarrow 1-s$ symmetry of the integrand. **Trivial zeros** $\zeta(-2k) = 0$ for $k \geq 1$, forced by the entirety of $\xi$ cancelling the simple poles of $\Gamma(s/2)$ at negative even integers. **Special values** $\zeta(2k) = (-1)^{k+1} (2\pi)^{2k} B_{2k} / (2(2k)!)$ for positive integer $k$, including $\zeta(2) = \pi^2/6$ (Euler 1735 Basel problem) and $\zeta(4) = \pi^4/90$; $\zeta(0) = -1/2$, $\zeta(-1) = -1/12$, $\zeta(1-2n) = -B_{2n}/(2n)$. **Hadamard product** $\xi(s) = e^{a + bs} \prod_\rho (1 - s/\rho) e^{s/\rho}$ over non-trivial zeros (Riemann 1859 stated, Hadamard 1893 proved). **Explicit formula** (Riemann-von Mangoldt) $\psi(x) = x - \sum_\rho x^\rho/\rho - \log(2\pi) - \frac{1}{2}\log(1 - x^{-2})$ connecting Chebyshev's $\psi$ to non-trivial zeros. **Prime number theorem** (Hadamard 1896 + de la Vallée Poussin 1896 independently), equivalent to $\zeta(s) \neq 0$ on $\operatorname{Re}(s) = 1$. **Riemann hypothesis** (Riemann 1859, statement only): all non-trivial zeros lie on the critical line $\operatorname{Re}(s) = 1/2$. Open since 1859; Hilbert problem 8; Clay Millennium Prize (Bombieri 2000). Partial results: Hardy 1914 (infinitely many zeros on the line), Selberg 1942 (positive proportion), Levinson 1974 ($\geq 1/3$), Conrey 1989 ($\geq 2/5$). Random-matrix heuristic (Montgomery 1973, Odlyzko 1987-): local zero statistics match GUE eigenvalue statistics. Function-field analogue proved by Weil 1948. Chapter-opening unit of Section 21.03 L-functions; forward-connects to Dirichlet $L$-functions (21.03.02), Dedekind/Hecke/Artin $L$-functions (21.03.03), modular forms (21.04.01), Hecke operators (21.04.02), and the Langlands programme (21.10.01). Originator chain: Euler 1735 *Basel* ($\zeta(2) = \pi^2/6$); Euler 1737 *Var. obs.* (Euler product); Riemann 1859 *Monatsber.* (complex-variable treatment, analytic continuation, functional equation, Hadamard product, explicit formula, RH); Hadamard 1893 (factorisation theorem); Mangoldt 1895 (explicit-formula rigour); Hadamard 1896 + de la Vallée Poussin 1896 (PNT); Hardy 1914 (infinitely many critical-line zeros); Selberg 1942 (positive proportion); Weil 1948 (function-field analogue); Montgomery 1973 + Odlyzko 1987 (random-matrix heuristic). Lean status: `partial`, module `Codex.NumberTheory.LFunctions.RiemannZeta` declares `riemannZeta : ℂ → ℂ`, `riemannZeta_eq_dirichlet_series`, `riemannZeta_residue_at_one`, `riemannZeta_meromorphic`, `zeta_euler_product`, `zeta_nonzero_re_gt_one`, `completedZeta`, `completedZeta_functional_equation`, `zeta_functional_equation`, `zeta_trivial_zeros`, `criticalStrip`, `criticalLine`, `RiemannHypothesis` — all `sorry`-stubbed pending Mathlib infrastructure on Dirichlet-series meromorphic continuation, Poisson summation on $\mathbb{Z} \subset \mathbb{R}$, and Mellin-transform $\Gamma$-twist pairing.

### number-theory.modular-forms-sl2-z

- **title**: Modular Forms on $\mathrm{SL}_2(\mathbb{Z})$
- **unit**: `21.04.01`
- **prerequisites**: linalg.linear-transformation-rank-nullity; complex-analysis.holomorphic-function; complex-analysis.mobius-transformations
- **tier_anchors**:
  - master: Hecke 1936-37 *Math. Ann.* 112 + 114 (originator: definition with multiplier, $T_n$ operators, Euler-product factorisation, structure theorem $M_*(\mathrm{SL}_2(\mathbb{Z})) = \mathbb{C}[E_4, E_6]$); Diamond-Shurman 2005 (Springer GTM 228) §§1.1-1.5 + §§3.5-3.7; Serre 1973 *A Course in Arithmetic* Ch. VII §§1-4 (valence formula, structure theorem, dimension formula); Manin-Panchishkin 2005 (Springer EMS 49, 2nd ed.) Ch. 6 §§1-3 (encyclopaedic survey); Shimura 1971 (Princeton/Iwanami) §§2.1-2.7 (arithmetic theory, Petersson inner product); Miyake 1989 Ch. 2; Koblitz 1993 (GTM 97) Ch. III; Lang 1976 (Grundlehren 222) Ch. III + Ch. X; Bump 1997 (Cambridge Studies 55) Ch. 1 (automorphic-representation framing); Petersson 1939 (originator of the inner product + Ramanujan-Petersson conjecture); Deligne 1974 *Publ. Math. IHES* 43 (Ramanujan-Petersson via Weil conjectures); Atkin-Lehner 1970 *Math. Ann.* 185 (new-form theory at level $N$); Borcherds 1992 *Invent. Math.* 109 (monstrous moonshine connecting $j$-invariant to Monster representation theory)
  - intermediate: Diamond-Shurman §§1.1-1.2; Serre Ch. VII §§2-3
  - beginner: Diamond-Shurman §1.1 informal opening; Serre Ch. VII §1 introduction
- **notes**: Foundational definitional unit for Section 21.04 modular forms. A **modular form of weight $k$ for $\mathrm{SL}_2(\mathbb{Z})$** is a holomorphic function $f : \mathbb{H} \to \mathbb{C}$ on the upper half-plane satisfying the transformation law $f((a\tau + b)/(c\tau + d)) = (c\tau + d)^k f(\tau)$ for every $\begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \mathrm{SL}_2(\mathbb{Z})$, together with holomorphy at the cusp $\infty$ (equivalently, the Fourier expansion $f(\tau) = \sum_{n \geq 0} a_n q^n$ in $q = e^{2\pi i\tau}$ has no negative-index terms). A **cusp form** has additional vanishing $a_0 = 0$. The space $M_k$ of weight-$k$ modular forms is finite-dimensional, with dimension formula $\dim M_k = \lfloor k/12\rfloor + 1$ for $k$ even and $k \not\equiv 2 \pmod{12}$, $\lfloor k/12\rfloor$ for $k \equiv 2 \pmod{12}$, and $0$ for $k$ odd. Foundational examples: **Eisenstein series** $E_k = 1 - (2k/B_k) \sum_{n \geq 1} \sigma_{k-1}(n) q^n$ for even $k \geq 4$ (lattice sum $G_k(\tau) = \sum_{(m,n) \neq (0,0)} (m\tau + n)^{-k}$ normalised by $2\zeta(k)$); **modular discriminant** $\Delta = (E_4^3 - E_6^2)/1728 = q\prod_{n \geq 1}(1 - q^n)^{24}$ of weight 12, the smallest non-zero cusp form, with Fourier coefficients $\tau(n)$ the Ramanujan tau function; **Klein $j$-invariant** $j = E_4^3/\Delta = 1/q + 744 + 196884 q + \cdots$, the generator of the field of meromorphic modular functions on $X(1)$. Signature theorem is the **structure theorem** $M_*(\mathrm{SL}_2(\mathbb{Z})) = \bigoplus_{k \geq 0} M_k \cong \mathbb{C}[E_4, E_6]$ as graded $\mathbb{C}$-algebras with $\deg E_4 = 4, \deg E_6 = 6$ (Hecke 1937; Serre VII §3 Theorem 4). The proof uses the **valence formula** $\nu_\infty(f) + \tfrac{1}{2}\nu_i(f) + \tfrac{1}{3}\nu_\rho(f) + \sum_{P} \nu_P(f) = k/12$ derived from the residue theorem on the standard fundamental domain $F = \{|\tau| \geq 1, |\mathrm{Re}\,\tau| \leq 1/2\}$. The **Petersson inner product** $\langle f, g\rangle = \int_F f\bar{g} y^k y^{-2} dx\, dy$ makes $S_k$ into a finite-dimensional Hilbert space on which the Hecke algebra acts self-adjointly; simultaneous Hecke eigenforms give an orthogonal basis with multiplicative Fourier coefficients and attached $L$-function $L(f, s) = \sum a_n/n^s$ with Euler product. The **Ramanujan-Petersson conjecture** $|a_p| \leq 2 p^{(k-1)/2}$ (Petersson 1939) is proved by Deligne 1974 *Publ. Math. IHES* 43 via the Weil conjectures for Kuga-Sato varieties. Forward-connects to Hecke operators and Hecke algebra (21.04.02), Eichler-Shimura correspondence (21.04.03), $\ell$-adic Galois representations (21.05.01), modularity theorem and BSD (21.06.01), Langlands programme (21.10.01); backward-connects to Möbius transformations (06.01.08), holomorphic function (06.01.01), Riemann surfaces (06.03.01), Riemann zeta function (21.03.01). Lean status: `partial`, module `Codex.NumberTheory.ModularForms.SL2Z` declares `UpperHalfPlane`, `ModularGroup`, `mobius`, `automorphyFactor`, `ModularForm k`, `CuspForm k`, `eisensteinSeries k`, `modularDiscriminant`, `gradedRingOfModularForms`, plus theorems `modular_ring_polynomial_in_E4_E6`, `discriminant_via_E4_E6`, `dim_formula_even`, `dim_formula_odd`, `eisenstein_constant_term_one` — all `sorry`-stubbed pending Mathlib infrastructure on lattice-sum convergence, holomorphy of Eisenstein series, the valence formula via residue calculus on the fundamental domain, and the Hecke-Serre polynomial-ring identification.



### number-theory.dirichlet-l-functions

- **title**: Dirichlet $L$-functions $L(s, \chi)$
- **unit**: `21.03.02`
- **prerequisites**: `algebra.group` (01.02.01 — the multiplicative group $(\mathbb{Z}/m)^\times$); `algebra.subgroup-coset-quotient` (01.02.02 — quotient and finite-abelian-group machinery underlying $(\mathbb{Z}/m)^\times$); `complex-analysis.complex-numbers-euler` (02.09.01 — codomain $\mathbb{C}^\times$ and Mellin / contour-integral background); sibling `number-theory.riemann-zeta` (21.03.01 — principal-character $L$-function inherits the analytic continuation of $\zeta$)
- **tier_anchors**:
  - master: Dirichlet 1837 *Abh. Königl. Preuss. Akad.* 45-81 (originator paper: Dirichlet characters, $L$-series $L(s, \chi) = \sum \chi(n)/n^s$, non-vanishing $L(1, \chi) \neq 0$, primes in arithmetic progressions); Dirichlet 1839/40 *J. reine angew. Math.* 19, 21 (analytic class-number formula); Davenport 2000 *Multiplicative Number Theory* (GTM 74, 3rd ed., revised Montgomery); Iwaniec-Kowalski 2004 *Analytic Number Theory* (AMS Colloquium 53) Ch. 4-5; Apostol 1976 *Introduction to Analytic Number Theory* (Springer UTM) Ch. 6-7; Selberg 1949 *Canad. J. Math.* 2 (elementary proof of PNT in arithmetic progressions); Tate 1950 Princeton PhD thesis (Cassels-Fröhlich 1967, Ch. XV — adelic / Fourier-analytic reformulation); Bump 1997 *Automorphic Forms and Representations* (Cambridge Studies 55) Ch. 1, 3; Hecke 1918, 1920 *Math. Z.* 1, 6 (Hecke $L$-functions of number fields, functional equation via theta inversion); Artin 1923/1930 *Abh. Math. Sem. Univ. Hamburg* 3, 8 (Artin $L$-functions of Galois representations); Page 1935 *Proc. Lond. Math. Soc.* 39 + Siegel 1935 *Acta Arith.* 1 (exceptional Siegel zero); Linnik 1944 *Mat. Sb.* 15 (least prime in arithmetic progression); Manin-Panchishkin 2005 *Introduction to Modern Number Theory* (Springer EMS 49) Ch. 6 of Part II
  - intermediate: Apostol 1976 Ch. 6-7; Davenport 2000 Ch. 1, 4, 6
  - beginner: Dirichlet 1837 informal opening — counting primes in $4k + 1, 4k + 3$ progressions through a $\pm 1$-character sieve; Leibniz 1674 / Madhava ca. 1400 identity $1 - 1/3 + 1/5 - \cdots = \pi/4$ as a special value of $L(1, \chi_1)$
- **notes**: The Dirichlet $L$-function $L(s, \chi) = \sum_{n \geq 1} \chi(n)/n^s$ on the half-plane $\mathrm{Re}(s) > 1$ is the originator and prototype of analytic number theory. Dirichlet 1837 *Abh. Königl. Preuss. Akad.* introduces the **Dirichlet character** $\chi : (\mathbb{Z}/m)^\times \to \mathbb{C}^\times$ as a homomorphism of the finite multiplicative group of units, extended to $\mathbb{Z}$ by zero on integers sharing a factor with $m$, completely multiplicative and $m$-periodic. The **Euler product** $L(s, \chi) = \prod_p (1 - \chi(p) p^{-s})^{-1}$ for $\mathrm{Re}(s) > 1$ encodes complete multiplicativity. **Principal character $\chi_0$**: $L(s, \chi_0) = \zeta(s) \prod_{p \mid m} (1 - p^{-s})$, inheriting the simple pole at $s = 1$ from $\zeta$ with residue $\varphi(m)/m$. **Non-principal characters**: $L(s, \chi)$ is entire on $\mathbb{C}$ (Hecke 1918). **Signature theorem (non-vanishing at $s = 1$, Dirichlet 1837)**: $L(1, \chi) \neq 0$ for every non-principal $\chi$; proof splits into the complex-character case (Landau's theorem on Dirichlet series with non-negative coefficients applied to $\prod_\chi L(s, \chi)$) and the real-character case (class-number formula $L(1, \chi) = 2\pi h(D)/(w_D \sqrt{|D|})$ for $D < 0$ or $L(1, \chi) = 2\pi h(D) \log\varepsilon / \sqrt{|D|}$ for $D > 0$, both strictly positive). **Dirichlet's theorem on primes in arithmetic progressions** (Dirichlet 1837): for every modulus $m$ and residue $a$ coprime to $m$, the arithmetic progression $a, a + m, a + 2m, \ldots$ contains infinitely many primes; quantitative PNT (de la Vallée Poussin 1896) gives $\pi(x; m, a) \sim x/(\varphi(m) \log x)$. The proof reduces via orthogonality of characters and the logarithmic Euler product to the divergence $\log L(s, \chi_0) \to +\infty$ at $s = 1^+$ — the non-vanishing $L(1, \chi) \neq 0$ being the only analytic input. **Functional equation** (Hecke 1918 *Math. Z.* 1): for primitive $\chi$ of conductor $m$ with parity $\mathfrak{a} = (1 - \chi(-1))/2$, the completed $L$-function $\Lambda(s, \chi) = (m/\pi)^{(s+\mathfrak{a})/2} \Gamma((s+\mathfrak{a})/2) L(s, \chi)$ satisfies $\Lambda(s, \chi) = W(\chi) \Lambda(1 - s, \overline{\chi})$ with root number $W(\chi) = \tau(\chi) / (i^\mathfrak{a} \sqrt{m})$ and Gauss sum $\tau(\chi) = \sum_a \chi(a) e^{2\pi i a/m}$, $|\tau(\chi)| = \sqrt{m}$. Proof via Mellin transform of the Dirichlet theta function and Poisson summation. **Exceptional Siegel zero** (Page 1935, Siegel 1935): real $\chi$ has at most one real zero $\beta < 1$ within $1 - O(1/\log m)$ of $1$; ineffective Siegel bound $1 - \beta \gg_\varepsilon m^{-\varepsilon}$. **Linnik's theorem** (Linnik 1944): least prime $p \equiv a \bmod m$ is $\ll m^L$, current $L \leq 5$ (Xylouris 2011), conjecturally $L = 1 + \varepsilon$ under GRH. **Modern reformulations**: Hecke 1918 generalises to characters of the idele class group of number fields, giving **Hecke $L$-functions**; Artin 1923/1930 generalises further to $L$-functions of Galois representations, with one-dimensional Artin = Dirichlet by class field theory and Artin reciprocity (Artin 1927); Tate 1950 PhD thesis recasts everything as global zeta integrals over $\mathbb{A}_\mathbb{Q}^\times$ against Schwartz-Bruhat functions — the $\mathrm{GL}_1/\mathbb{Q}$ prototype of the Langlands programme (Bump 1997). The Dirichlet $L$-function is the foundational unit of Section 21.03; sibling $\zeta$ (21.03.01), forward Dedekind/Hecke/Artin $L$ (21.03.03), forward modular forms (21.04.01) and Hecke operators (21.04.02), and lateral character of a finite group (07.01.03). Originator chain: Euler 1737 ($\zeta$ Euler product); Dirichlet 1837 (characters + $L$-series + non-vanishing + arithmetic progression theorem); Dirichlet 1839/40 (class-number formula); Riemann 1859 (functional equation for $\zeta$, analytic-continuation method generalised by Hecke); Hadamard-de la Vallée Poussin 1896 (PNT and zero-free region); Hecke 1918, 1920 (Hecke $L$ + functional equation); Artin 1923, 1930 (Artin $L$); Page 1935, Siegel 1935 (Siegel zero); Linnik 1944 (least prime); Selberg 1949 (elementary proof of PNT in arithmetic progressions); Tate 1950 (adelic Tate thesis). Lean status: `partial`, module `Codex.NumberTheory.LFunctions.DirichletL` declares `structure DirichletCharacter`, `def DirichletL`, `theorem L_nonvanish_at_one`, `theorem dirichlet_progression`, plus orthogonality lemmas and the witness `L_one_chi_one_mod_four = π/4` (Leibniz series), all `sorry`-stubbed pending Mathlib infrastructure on Dirichlet-series meromorphic continuation, Landau theorem on positive-coefficient series, and the class-number formula for real characters.
### tropical.log-gromov-witten-invariants

- **title**: Log Gromov-Witten Invariants (pointer)
- **unit**: `04.12.15`
- **prerequisites**: `tropical.nishinou-siebert-correspondence` (04.12.06 — uses log GW theory in its proof); `tropical.toric-degeneration-calabi-yau` (04.12.07); `tropical.gross-siebert-reconstruction` (04.12.09 — consumes log GW as scattering input)
- **tier_anchors**:
  - master: Gross-Siebert 2013 *Logarithmic Gromov-Witten invariants*, J. Amer. Math. Soc. 26 (2), 451-510 (originator paper, basic monoid construction, perfect obstruction theory, degeneration formula); Abramovich-Chen 2014 *Stable logarithmic maps to Deligne-Faltings pairs II*, Asian J. Math. 18 (3), 465-488 (parallel construction, minimal log structure, Deligne-Faltings pairs); Chen 2014 *Stable logarithmic maps to Deligne-Faltings pairs I*, Ann. of Math. 180 (2), 455-521 (foundations of the Abramovich-Chen moduli theory); Abramovich-Chen-Marcus-Wise 2017 *Compos. Math.* 153 (8), 1633-1666 (equivalence of the two constructions); Kato 1989 *Logarithmic structures of Fontaine-Illusie* (foundational log-geometry framework: fs log structures, log smooth morphisms, log differentials, chart theory); Gross-Pandharipande-Siebert 2010 *Publ. Math. IHÉS* 122, 65-168 (BPS invariants from log GW; tropical vertex algebra); Mandel-Ruddat 2020 *Algebraic Geometry* 7 (5), 591-624 (canonical scattering diagrams from log GW; wall functions as tropical-curve generating series); Nishinou-Siebert 2006 *Duke* 135 (the tropical-correspondence application); Behrend-Fantechi 1997 *Invent. Math.* 128 (virtual fundamental class, perfect obstruction theory machinery); Mikhalkin 2005 *J. AMS* 18 (the $n = 2$ predecessor of the tropical correspondence); Gross 2011 *Tropical Geometry and Mirror Symmetry* (CBMS 114) Lecture 6 (textbook synthesis)
  - intermediate: Abramovich-Chen 2014 §1-§3; Gross-Siebert 2013 §0-§4; Kato 1989 §1-§2; Behrend-Fantechi 1997 §1
  - beginner: Gross 2011 CBMS Lecture 6 informal opening; Abramovich 2014 *Bull. AMS* 51 *Logarithmic geometry and moduli* informal §1
- **notes**: Pointer unit recording the foundational log Gromov-Witten package consumed by [04.12.06] Nishinou-Siebert correspondence and [04.12.09] Gross-Siebert reconstruction. A **log Gromov-Witten invariant** is an integer count of stable log maps from a log smooth curve to a log smooth target, weighted by the virtual fundamental class on the moduli stack with perfect obstruction theory. Key data: a fine saturated (fs) log scheme $(X, M_X)$ in the sense of Kato 1989; a log smooth morphism $f : (C, M_C) \to (X, M_X)$ from a log smooth pointed curve; contact-order data $\mathbf{c} = (c_1, \ldots, c_m)$ at the marked points recording tangency to the boundary divisor; the moduli stack $\overline{\mathcal{M}}_{g, m}^{\log}(X / S, \beta, \mathbf{c})$ of stable log maps of fixed genus, marking, class, and contact data, with its perfect obstruction theory and virtual fundamental class $[\overline{\mathcal{M}}^{\log}]^{\mathrm{vir}}$ of expected dimension $(1 - g)(n - 3) + \langle c_1(T X^{\log}), \beta\rangle + m$. The log GW invariant is the integral $\langle \tau_{a_1}(\gamma_1) \cdots \tau_{a_m}(\gamma_m)\rangle^{\log}_{g, \beta, \mathbf{c}} = \int_{[\overline{\mathcal{M}}^{\log}]^{\mathrm{vir}}} \prod \psi_i^{a_i} \mathrm{ev}_i^*(\gamma_i)$. Foundational theorems: (1) the **Abramovich-Chen vs Gross-Siebert equivalence** (Abramovich-Chen-Marcus-Wise 2017), proving that the two parallel constructions of the moduli stack agree as Deligne-Mumford stacks with matching obstruction theories, so the resulting log GW invariants are well-defined; (2) the **degeneration formula** (Gross-Siebert 2013, Theorem 0.3): for a flat family $\pi : \mathcal{X} \to \mathbb{A}^1$ with smooth generic fibre and log smooth central fibre, $N_{g, \beta}(\mathcal{X}_t) = \sum_\tau N^{\log, \tau}_{g, \beta}(\mathcal{X}_0)$, the sum over decoration types $\tau$ of dual graphs with contact-order labels; (3) the **Nishinou-Siebert application** (Nishinou-Siebert 2006, [04.12.06]): for a toric degeneration of a smooth toric variety, the central-fibre log GW counts equal a multiplicity-weighted tropical-curve count on the dual intersection complex $B(\Xi)$. Master-tier sections: §1 foundational log-scheme setup after Kato 1989 (fs log structures, log smooth morphisms, log differentials, chart theory, basic monoid construction); §2 the two parallel constructions of Abramovich-Chen vs Gross-Siebert with the 2017 equivalence theorem; §3 the Nishinou-Siebert correspondence as a tropical computation via the degeneration formula. Forward-connects to [04.12.06] Nishinou-Siebert, [04.12.09] Gross-Siebert reconstruction, [04.12.10] SYZ, [04.12.13] period integral, plus a future Gromov-Witten foundations unit (not yet shipped; the Behrend-Fantechi virtual-class machinery is sketched here in lieu). Lean status `partial` with module `Codex.AlgGeom.Tropical.LogGromovWitten`: declares `FsLogStructure`, `LogScheme`, `LogSmoothMap`, `LogSmoothCurve`, `StableLogMap`, `ModuliStableLogMaps`, `virtualFundamentalClass`, `logGWInvariant`, plus theorems `logGW_well_defined`, `degeneration_formula`, `nishinou_siebert_application` — all `sorry`-stubbed pending Mathlib infrastructure on log geometry, moduli of stable log maps, perfect obstruction theory in the log category, and the virtual fundamental class.

### number-theory.hecke-operators

- **title**: Hecke Operators and Hecke Algebra
- **unit**: `21.04.02`
- **prerequisites**: sibling `number-theory.modular-forms-sl2z` (21.04.01 — defines the ambient space $M_k(\mathrm{SL}_2(\mathbb{Z}))$ on which the Hecke operators act); `complex-analysis.complex-numbers-euler` (02.09.01 — Fourier-series / Dirichlet-series machinery)
- **tier_anchors**:
  - master: Hecke 1936 *Math. Ann.* 112, 664-699 and Hecke 1937 *Math. Ann.* 114, 1-28 (originator pair: Hecke operators $T_n$, multiplicativity, the Hecke algebra $\mathbb{T}$, Euler product for the attached $L$-function, functional equation); Petersson 1939 *Math. Ann.* 116 (Petersson inner product on cusp forms, Hecke self-adjointness, spectral decomposition of $S_k(\Gamma)$); Atkin-Lehner 1970 *Math. Ann.* 185 (new and old forms at level $\Gamma_0(N)$, Atkin-Lehner involutions $w_q$, multiplicity-one theorem for newforms); Eichler 1954 *Arch. Math.* 5 + Shimura 1958 *Tohoku Math. J.* 10 (cohomological realisation of Hecke operators on $H^1(X_0(N))$); Deligne 1971 *Sém. Bourbaki* 355 + Deligne-Serre 1974 *Ann. Sci. ENS* 7 (two-dimensional $\ell$-adic Galois representations attached to weight-$\geq 1$ cusp eigenforms, trace of Frobenius equal to $a_p$); Deligne 1974 *Publ. Math. IHES* 43 (Ramanujan-Petersson conjecture as theorem); Shimura 1971 *Introduction to the Arithmetic Theory of Automorphic Functions* (Princeton); Serre 1973 *A Course in Arithmetic* (GTM 7) Ch. VII §5; Lang 1976 *Introduction to Modular Forms* (Grundlehren 222); Diamond-Shurman 2005 *A First Course in Modular Forms* (GTM 228) Ch. 5; Manin-Panchishkin 2005 *Introduction to Modern Number Theory* (Springer EMS 49, 2nd ed.) Ch. 6
  - intermediate: Diamond-Shurman 2005 Ch. 5; Serre 1973 Ch. VII §5
  - beginner: Diamond-Shurman 2005 §5.1 informal — Hecke operators as sub-lattice averages of index $p$; the eigenform-Fourier-coefficient identity ($T_p f = a_p f$, eigenvalue equals coefficient)
- **notes**: The **Hecke operator** $T_p$ at a prime $p$ acting on $M_k(\mathrm{SL}_2(\mathbb{Z}))$ is the sub-lattice average $(T_p f)(z) = p^{k - 1} f(p z) + p^{-1} \sum_{b = 0}^{p - 1} f((z + b)/p)$, equivalently the sum over coset representatives $f |_k \delta$ for $\delta$ ranging over $\Gamma \backslash M_2(\mathbb{Z})_{\det = p}$. The operators commute pairwise, satisfy the **multiplicativity** $T_{m n} = T_m T_n$ for $\gcd(m, n) = 1$ and the **prime-power recursion** $T_p T_{p^n} = T_{p^{n + 1}} + p^{k - 1} T_{p^{n - 1}}$, and generate the commutative **Hecke algebra** $\mathbb{T} = \mathbb{C}[T_n : n \geq 1] \subseteq \mathrm{End}_\mathbb{C}(M_k(\Gamma))$. **Signature theorem (Hecke 1936)**: for a normalised Hecke eigenform $f$ with $a_1(f) = 1$, the eigenvalue $\lambda_n$ of $T_n$ equals the $n$-th Fourier coefficient $a_n(f)$; consequently the Dirichlet series $L(f, s) = \sum a_n n^{-s}$ acquires the **Euler product** $\prod_p (1 - a_p p^{-s} + p^{k - 1 - 2 s})^{-1}$, with quadratic local factors whose coefficients are the eigenvalue $a_p$ and the weight-dependent constant $p^{k - 1}$. **Petersson self-adjointness (1939)**: the Hecke operators are self-adjoint with respect to the Petersson inner product $\langle f, g \rangle_{\mathrm{Pet}} = \int_{\Gamma \backslash \mathbb{H}} f \bar g y^{k - 2} dx dy$, yielding an orthonormal basis of simultaneous Hecke eigenforms on $S_k(\Gamma)$. **Atkin-Lehner 1970 multiplicity-one** at higher level $\Gamma_0(N)$: every newform is uniquely determined (up to scalar) by its Hecke eigenvalue sequence $\{a_p(f) : p \nmid N\}$ plus Atkin-Lehner signs. **Deligne-Serre 1974** attaches a $2$-dimensional $\ell$-adic Galois representation $\rho_{f, \ell} : \mathrm{Gal}(\overline{\mathbb{Q}}/\mathbb{Q}) \to \mathrm{GL}_2(\overline{\mathbb{Q}_\ell})$ to every normalised weight-$\geq 1$ cusp newform $f$ with $\mathrm{tr}\,\rho_{f, \ell}(\mathrm{Frob}_p) = a_p(f)$ and $\det \rho_{f, \ell}(\mathrm{Frob}_p) = p^{k - 1}$ for $p \nmid N \ell$. Worked example: the discriminant cusp form $\Delta(z) = q \prod (1 - q^n)^{24}$ of weight $12$ on $\mathrm{SL}_2(\mathbb{Z})$ is the unique normalised cusp form in a one-dimensional space, automatically a Hecke eigenform with eigenvalues $\tau(n)$ (Ramanujan tau), the multiplicativity $\tau(m n) = \tau(m) \tau(n)$ for coprime $(m, n)$ and the recursion $\tau(p) \tau(p^n) = \tau(p^{n + 1}) + p^{11} \tau(p^{n - 1})$ being direct consequences. Deligne 1974 proved $|\tau(p)| \leq 2 p^{11/2}$ (Ramanujan-Petersson). **Originator chain**: Ramanujan 1916 (multiplicativity conjectures for $\tau$); Mordell 1917 *Proc. Cambridge Phil. Soc.* (direct proof via $L$-function); Hecke 1936-37 *Math. Ann.* 112 + 114 (operators $T_n$, Hecke algebra, Euler product); Petersson 1939 *Math. Ann.* 116 (Petersson inner product, self-adjointness); Eichler 1954 + Shimura 1958 (cohomological realisation); Atkin-Lehner 1970 (new/old decomposition, multiplicity-one); Deligne 1971 + Deligne-Serre 1974 (Galois representations); Deligne 1974 (Ramanujan-Petersson). Forward-connects to [21.04.03] Eichler-Shimura correspondence, [21.05.01] $\ell$-adic Galois representations, [21.06.01] modularity theorem and BSD, [21.03.01] Riemann zeta (sibling Dirichlet series), [21.03.02] Dirichlet $L$-functions (sibling $\mathrm{GL}_1$-case), [21.03.03] Dedekind / Hecke / Artin $L$ (sibling higher-rank generalisations). Lean status: `partial`, module `Codex.NumberTheory.ModularForms.HeckeOperators` declares `def heckeOperator (p : ℕ) [Fact (Nat.Prime p)] : ModularForm k → ModularForm k`, `theorem hecke_multiplicative`, `theorem hecke_prime_power_recursion`, `theorem hecke_eigenform_fourier_coeff_eq_eigenvalue`, and `theorem hecke_petersson_self_adjoint` with `sorry`-stubbed proof bodies pending Mathlib's coset-decomposition API for $\mathrm{SL}_2(\mathbb{Z})$ acting on determinant-$n$ integer matrices and the integration-on-fundamental-domain machinery for the Petersson inner product.

### foundations.subgroup-coset-quotient

- **title**: Subgroup, coset, and quotient group with the isomorphism theorems
- **prerequisites**: `foundations.group`
- **tier_anchors**:
  - master: Lang *Algebra* (Springer GTM 211, 2002) Ch. I §2 + Dummit-Foote Ch. 3
  - intermediate: Artin *Algebra* (Pearson, 2nd ed. 2011) Ch. 2 §§4-12
  - beginner: Fraleigh *A First Course in Abstract Algebra* Ch. 2-3
- **notes**: Subgroup as closed-under-operation-and-inverse subset. Left and right cosets; Lagrange's theorem ($|G| = [G : H] \cdot |H|$). Normal subgroup $N \triangleleft G$ as kernel of a homomorphism, equivalently subgroup whose left and right cosets coincide. Quotient $G/N$ with the canonical projection $\pi: G \twoheadrightarrow G/N$. The four isomorphism theorems: first (kernel-image: $G/\ker f \cong \mathrm{im}\, f$), second (diamond: $(HN)/N \cong H/(H \cap N)$), third (lattice modular law: $(G/N)/(M/N) \cong G/M$ when $N \subseteq M \triangleleft G$), fourth (correspondence: subgroups of $G/N$ correspond bijectively to subgroups of $G$ containing $N$). Used everywhere downstream — character theory of finite groups, Galois theory, classifying spaces, deck transformation groups.
