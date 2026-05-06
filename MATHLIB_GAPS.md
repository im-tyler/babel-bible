# Codex — Mathlib Gap Roadmap

Auto-generated from unit frontmatter (`lean_mathlib_gap` fields). Do not edit by hand; run `scripts/build_mathlib_gaps.py` to regenerate.

**Status:** 144 units flag Mathlib gaps as of last regeneration.

Each entry below corresponds to a Codex unit whose Lean formalisation is blocked or partial because Mathlib does not yet have the required infrastructure. Collectively these form the upstream-contribution roadmap. As Mathlib lands the listed material, the relevant Codex units can be promoted from `lean_status: none` / `partial` to `full`.

## Conventions

- **`status: partial`** — the unit's Lean module compiles statements but proofs are `sorry`-gated pending Mathlib.
- **`status: none`** — Mathlib coverage is too thin to even state the theorem; the unit ships with a named human reviewer as the correctness gate.

## Gaps by unit

### `01.01.15` — Bilinear form / quadratic form

- **Lean status:** `partial`
- **Module:** `Codex.Foundations.LinearAlgebra.BilinearQuadraticForm`
- **Human reviewer:** TBD
- **Source:** [`content/01-foundations/01-linear-algebra/01.01.15-bilinear-quadratic-form.md`](content/01-foundations/01-linear-algebra/01.01.15-bilinear-quadratic-form.md)

### `01.02.01` — Group

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/01-foundations/02-algebra/01.02.01-group.md`](content/01-foundations/02-algebra/01.02.01-group.md)

**Mathlib gap:**

> Mathlib has a mature group theory hierarchy, but this curriculum unit needs
> a project-level bridge from beginner algebraic language to the later geometry
> vocabulary: actions, torsors, Lie groups, orthogonal groups, kernels,
> quotient-ready normal subgroups, and notational conventions shared by the
> bundle units. A future formalization can be full once those local names are
> aligned with Mathlib's `Group`, homomorphism, and subgroup APIs.

### `02.01.02` — Continuous map

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/01-topology/02.01.02-continuous-map.md`](content/02-analysis/01-topology/02.01.02-continuous-map.md)

**Mathlib gap:**

> Mathlib has topological spaces and continuous maps, but this curriculum unit
> needs a stable bridge among the local notation for preimages, metric
> continuity, homeomorphisms, pullbacks of bundles, and classifying maps. A
> future formalization can be full once the project decides how much of
> Mathlib's topology API to expose directly in learner-facing statements.

### `02.11.01` — Bounded linear operators

- **Lean status:** `partial`
- **Module:** `Codex.Analysis.FunctionalAnalysis.BoundedOperators`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.01-bounded-linear-operators.md`](content/02-analysis/11-functional-analysis/02.11.01-bounded-linear-operators.md)

### `02.11.03` — Unbounded self-adjoint operators

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.03-unbounded-self-adjoint.md`](content/02-analysis/11-functional-analysis/02.11.03-unbounded-self-adjoint.md)

**Mathlib gap:**

> Mathlib has bounded operators and Hilbert-space foundations, but the
> curriculum-level theory of densely defined unbounded operators is not
> packaged with domains, graph closedness, adjoints, symmetric versus
> self-adjoint operators, spectral measures, essential self-adjointness,
> and functional calculus in the form needed here.

### `02.11.04` — Banach space fundamentals

- **Lean status:** `partial`
- **Module:** `Codex.Analysis.FunctionalAnalysis.BanachSpaces`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.04-banach-spaces.md`](content/02-analysis/11-functional-analysis/02.11.04-banach-spaces.md)

### `02.11.05` — Compact operators

- **Lean status:** `partial`
- **Module:** `Codex.Analysis.FunctionalAnalysis.CompactOperators`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.05-compact-operators.md`](content/02-analysis/11-functional-analysis/02.11.05-compact-operators.md)

### `02.11.06` — Normed vector space

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.06-normed-vector-space.md`](content/02-analysis/11-functional-analysis/02.11.06-normed-vector-space.md)

**Mathlib gap:**

> Mathlib has normed groups, normed spaces, and continuous linear maps, but the
> curriculum needs a stable bridge among elementary vector-space norms,
> induced metrics, Banach completion, bounded operators, and the notation used
> in the functional-analysis chain. A future formalization can be full once
> these local statement forms are aligned with Mathlib's normed-space API.

### `02.11.07` — Inner product space

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.07-inner-product-space.md`](content/02-analysis/11-functional-analysis/02.11.07-inner-product-space.md)

**Mathlib gap:**

> Mathlib has inner product spaces, Cauchy-Schwarz, orthogonality, and normed
> structures, but this curriculum unit needs a stable bridge from bilinear
> forms to analytic Hilbert-space notation, including real versus complex
> conventions, projection language, and the downstream operator-theory units.
> A future formalization can be full after these local conventions are fixed.

### `02.11.08` — Hilbert space

- **Lean status:** `partial`
- **Module:** `Codex.Analysis.FunctionalAnalysis.HilbertSpace`
- **Human reviewer:** TBD
- **Source:** [`content/02-analysis/11-functional-analysis/02.11.08-hilbert-space.md`](content/02-analysis/11-functional-analysis/02.11.08-hilbert-space.md)

### `03.01.04` — Tensor algebra

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/01-tensor-algebra/03.01.04-tensor-algebra.md`](content/03-modern-geometry/01-tensor-algebra/03.01.04-tensor-algebra.md)

**Mathlib gap:**

> Mathlib has tensor products and tensor algebras in algebraic form, but this
> curriculum unit needs a project-level bridge between tensor powers of vector
> spaces, the free associative algebra universal property, filtrations, and the
> downstream Clifford-sign convention. A future formalization should identify
> the exact Mathlib API for the adjunction from vector spaces to associative
> algebras and then expose the quotient maps used by Clifford algebra.

### `03.01.05` — Quotient algebra

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/01-tensor-algebra/03.01.05-quotient-algebra.md`](content/03-modern-geometry/01-tensor-algebra/03.01.05-quotient-algebra.md)

**Mathlib gap:**

> Mathlib has quotient rings, ideals, and noncommutative algebraic quotients
> in several mature APIs, but this curriculum unit needs a coordinated bridge
> from tensor algebra to two-sided ideals and then to the Clifford quotient
> convention used in the spin-geometry chapter. A future formalization should
> state the factorization theorem for associative algebra homomorphisms in the
> exact project vocabulary and connect it to the existing CliffordAlgebra API.

### `03.02.01` — Smooth manifold

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.Manifolds.SmoothManifold`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/02-manifolds/03.02.01-smooth-manifold.md`](content/03-modern-geometry/02-manifolds/03.02.01-smooth-manifold.md)

### `03.03.01` — Lie group

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.Lie.LieGroup`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/03-lie/03.03.01-lie-group.md`](content/03-modern-geometry/03-lie/03.03.01-lie-group.md)

### `03.03.02` — Group action

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/03-lie/03.03.02-group-action.md`](content/03-modern-geometry/03-lie/03.03.02-group-action.md)

**Mathlib gap:**

> Mathlib has a strong group-action hierarchy, but this unit needs the local
> curriculum bridge from actions on sets to torsors, homogeneous spaces,
> principal-bundle fibers, equivariant maps, and later Lie group actions. A
> future formalization can be full once the project fixes the shared vocabulary
> for left and right actions in the bundle chapters.

### `03.03.03` — Orthogonal group

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/03-lie/03.03.03-orthogonal-group.md`](content/03-modern-geometry/03-lie/03.03.03-orthogonal-group.md)

**Mathlib gap:**

> Mathlib has orthogonal groups and linear isometries in several algebraic and
> analytic forms, but this curriculum unit needs a project-level connection
> among bilinear forms, matrix equations, Lie group structure, frame bundles,
> and the Spin double cover. A future formalization should choose whether the
> local API is based on matrices, linear isometries, or quadratic-form
> automorphisms.

### `03.04.01` — Lie algebra

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.DifferentialForms.LieAlgebra`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.01-lie-algebra.md`](content/03-modern-geometry/04-differential-forms/03.04.01-lie-algebra.md)

### `03.04.02` — Differential forms

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.DifferentialForms.DifferentialForms`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.02-differential-forms.md`](content/03-modern-geometry/04-differential-forms/03.04.02-differential-forms.md)

### `03.04.03` — Integration on manifolds

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.03-integration-on-manifolds.md`](content/03-modern-geometry/04-differential-forms/03.04.03-integration-on-manifolds.md)

**Mathlib gap:**

> Mathlib has measure theory and manifold foundations, but the curriculum
> layer for integration of compactly supported top-degree differential
> forms on oriented manifolds, partitions of unity, change of variables,
> boundary orientation, and Stokes-compatible notation is not packaged in
> the form needed by this unit.

### `03.04.04` — Exterior derivative

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.DifferentialForms.ExteriorDerivative`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.04-exterior-derivative.md`](content/03-modern-geometry/04-differential-forms/03.04.04-exterior-derivative.md)

### `03.04.05` — Stokes' theorem

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.DifferentialForms.StokesTheorem`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.05-stokes-theorem.md`](content/03-modern-geometry/04-differential-forms/03.04.05-stokes-theorem.md)

### `03.04.06` — De Rham cohomology

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.DifferentialForms.DeRhamCohomology`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.06-de-rham-cohomology.md`](content/03-modern-geometry/04-differential-forms/03.04.06-de-rham-cohomology.md)

### `03.04.08` — Variational calculus on manifolds

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/04-differential-forms/03.04.08-variational-calculus.md`](content/03-modern-geometry/04-differential-forms/03.04.08-variational-calculus.md)

**Mathlib gap:**

> Mathlib does not yet have a bundled calculus of variations on manifolds:
> smooth mapping spaces, variations with compact support, first variation
> of action functionals, Euler-Lagrange operators for bundle-valued fields,
> integration by parts on manifolds, and gauge-theoretic variational
> formulas such as d_A^* F_A = 0.

### `03.05.01` — Principal bundle

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.01-principal-bundle.md`](content/03-modern-geometry/05-bundles/03.05.01-principal-bundle.md)

**Mathlib gap:**

> Mathlib has group actions, manifolds, and some bundle infrastructure, but it
> does not yet provide a mature unified theory of smooth principal G-bundles
> with local trivializations, free transitive right Lie-group actions on
> fibers, transition cocycles, associated bundles, pullbacks, reductions of
> structure group, and gauge transformations in the form used by differential
> geometry and Chern-Weil theory.

### `03.05.02` — Vector bundle

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.02-vector-bundle.md`](content/03-modern-geometry/05-bundles/03.05.02-vector-bundle.md)

**Mathlib gap:**

> Mathlib has algebraic vector spaces and some bundle-related infrastructure,
> but not a mature API for topological or smooth finite-rank vector bundles
> with local linear trivializations, transition maps into GL(n), sections,
> pullbacks, frame bundles, associated-bundle constructions, Whitney sums,
> tensor products, dual bundles, and characteristic-class-facing operations.

### `03.05.03` — Orthogonal frame bundle

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.03-orthogonal-frame-bundle.md`](content/03-modern-geometry/05-bundles/03.05.03-orthogonal-frame-bundle.md)

**Mathlib gap:**

> Mathlib does not yet have the project-level smooth vector bundle and
> principal bundle infrastructure needed to define orthonormal frame bundles as
> principal O(n)-bundles. Required work includes Riemannian vector bundles,
> smooth local orthonormal frames, transition functions valued in O(n), frame
> bundle total spaces, and the oriented SO(n)-reduction used by spin structures.

### `03.05.04` — Connection on a vector bundle

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.04-vector-bundle-connection.md`](content/03-modern-geometry/05-bundles/03.05.04-vector-bundle-connection.md)

**Mathlib gap:**

> Mathlib does not yet have a mature smooth vector-bundle API with
> sections, covariant derivatives, bundle-valued differential forms,
> End(E)-valued one-forms, curvature, pullback connections, and induced
> connections on tensor, dual, and Hom bundles. Formalizing this unit
> requires that vector-bundle layer before the affine-space theorem for
> connections can be stated in the project conventions.

### `03.05.05` — Double cover

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.05-double-cover.md`](content/03-modern-geometry/05-bundles/03.05.05-double-cover.md)

**Mathlib gap:**

> Mathlib contains topology and group-action ingredients, but the project does
> not yet have a curriculum-level covering-space API with sheets, deck
> transformations, double covers, principal Z/2-bundles, and the comparison
> with Lie-group double covers such as Spin(n) to SO(n). A future formalization
> should connect covering maps, fiber cardinality, and deck involutions.

### `03.05.07` — Principal bundle with connection

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.07-principal-bundle-connection.md`](content/03-modern-geometry/05-bundles/03.05.07-principal-bundle-connection.md)

**Mathlib gap:**

> Mathlib does not yet provide smooth principal G-bundles with vertical
> tangent bundles, fundamental vector fields, Lie-algebra-valued forms,
> right-equivariant horizontal distributions, curvature, gauge
> transformations, and associated-bundle induced connections. Formalizing
> this unit requires principal-bundle infrastructure plus a compatible
> differential-form API for Lie-algebra-valued forms.

### `03.05.08` — Complex vector bundle

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.08-complex-vector-bundle.md`](content/03-modern-geometry/05-bundles/03.05.08-complex-vector-bundle.md)

**Mathlib gap:**

> Mathlib has vector spaces and modules over $\mathbb{C}$, and rudimentary
> vector-bundle infrastructure, but no bundled API for complex vector bundles
> with Hermitian metrics, complexification of real bundles, or the
> conjugate-bundle construction. A formalization needs the complex-bundle
> structure as a typeclass on top of Mathlib's bundle hierarchy plus the
> associated bundle constructions (tensor, dual, conjugate, complexification).

### `03.05.09` — Curvature of a connection

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/05-bundles/03.05.09-curvature.md`](content/03-modern-geometry/05-bundles/03.05.09-curvature.md)

**Mathlib gap:**

> Mathlib does not yet have principal-bundle curvature in the geometric form
> used by Chern-Weil and gauge theory. Required infrastructure: principal
> G-bundles with smooth structure, connection 1-forms valued in the Lie
> algebra, exterior covariant derivative, and the Cartan structure equation
> Ω = dω + ½[ω∧ω]. The vector-bundle case (curvature as End(E)-valued
> 2-form) is partially in Mathlib via differential-geometry foundations
> but not packaged for Codex's downstream uses.

### `03.06.03` — Stiefel-Whitney classes

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/06-characteristic-classes/03.06.03-stiefel-whitney.md`](content/03-modern-geometry/06-characteristic-classes/03.06.03-stiefel-whitney.md)

**Mathlib gap:**

> Mathlib does not yet have characteristic classes of vector bundles in
> bundled form. A formalisation needs the universal bundle on $BO(n)$,
> the cohomology ring $H^\ast(BO; \mathbb{Z}/2) = \mathbb{Z}/2[w_1, w_2, \ldots]$,
> classifying maps from real vector bundles, and the Stiefel-Whitney
> axioms (naturality, Whitney product, normalisation, dimension).

### `03.06.04` — Pontryagin and Chern classes

- **Lean status:** `none`
- **Human reviewer:** Tyler — Green per PILOT_PLAN §3 (gauge-theory adjacent characteristic-class material)
- **Source:** [`content/03-modern-geometry/06-characteristic-classes/03.06.04-pontryagin-chern-classes.md`](content/03-modern-geometry/06-characteristic-classes/03.06.04-pontryagin-chern-classes.md)

**Mathlib gap:**

> Mathlib lacks the bundle-level characteristic-class theory needed for this
> unit. Required upstream work includes complex and real vector bundles over
> smooth manifolds, classifying maps to BU(n) and BO(n), Chern and Pontryagin
> classes as natural cohomology operations, the splitting principle, Chern-Weil
> representatives via curvature, and standard computations such as the Euler
> sequence formula for the tangent bundle of complex projective space.

### `03.06.05` — Invariant polynomial on a Lie algebra

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/06-characteristic-classes/03.06.05-invariant-polynomial.md`](content/03-modern-geometry/06-characteristic-classes/03.06.05-invariant-polynomial.md)

**Mathlib gap:**

> Mathlib has `LieAlgebra` and multilinear algebra, but does not yet bundle
> the symmetric algebra `S^•(g*)` together with the adjoint action and the
> invariants subalgebra `S^•(g*)^G`. A formalization needs symmetric tensor
> powers of duals, the dual adjoint representation, and the subalgebra of
> fixed points under that action. The classical generators (trace powers
> for matrix Lie algebras, Pfaffian, determinant coefficients) would then
> be specific instances built on top.

### `03.06.06` — Chern-Weil homomorphism

- **Lean status:** `none`
- **Human reviewer:** Tyler — Yellow per PILOT_PLAN §3 (Chern-Weil bridges algebra, bundles, topology, and gauge theory)
- **Source:** [`content/03-modern-geometry/06-characteristic-classes/03.06.06-chern-weil-homomorphism.md`](content/03-modern-geometry/06-characteristic-classes/03.06.06-chern-weil-homomorphism.md)

**Mathlib gap:**

> Mathlib does not yet provide the differential-geometric infrastructure needed
> to state the Chern-Weil homomorphism as used here. Required upstream work:
> principal G-bundles over smooth manifolds, connection forms on principal
> bundles, curvature forms with values in Lie algebras, invariant polynomial
> algebras on Lie algebras, de Rham cohomology as a functor for smooth
> manifolds, and the proof that invariant polynomials evaluated on curvature
> produce closed forms with connection-independent cohomology classes.

### `03.07.05` — Yang-Mills action

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/07-gauge-theory/03.07.05-yang-mills-action.md`](content/03-modern-geometry/07-gauge-theory/03.07.05-yang-mills-action.md)

**Mathlib gap:**

> Mathlib has substantial differential geometry but not the full package needed
> to state the Yang-Mills action on a principal bundle. Missing pieces include
> smooth principal G-bundles with connection forms, curvature as an ad(P)-valued
> 2-form, Riemannian Hodge star on vector-bundle-valued forms, gauge-group
> action on connections, and the Euler-Lagrange equation d_A^* F_A = 0.

### `03.08.01` — Topological K-theory

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/08-k-theory/03.08.01-topological-k-theory.md`](content/03-modern-geometry/08-k-theory/03.08.01-topological-k-theory.md)

**Mathlib gap:**

> Mathlib does not yet provide topological K-theory as a packaged functor from
> compact spaces to abelian groups. Needed work includes topological vector
> bundles, direct-sum monoids of isomorphism classes, Grothendieck completion,
> reduced K-theory, pullback functoriality, external products, and the Bott
> element. Algebraic Grothendieck groups exist separately but are not connected
> to this geometric vector-bundle construction.

### `03.08.04` — Classifying space

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/08-k-theory/03.08.04-classifying-space.md`](content/03-modern-geometry/08-k-theory/03.08.04-classifying-space.md)

**Mathlib gap:**

> Mathlib has extensive algebraic topology foundations, but the classifying
> space package needed here would require principal bundles as topological
> objects, numerability, universal principal G-bundles, pullback classification
> by homotopy classes of maps, and concrete models for BU(n), BO(n), and BG.
> These ingredients are not yet available in the project vocabulary.

### `03.08.06` — Stable homotopy

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/08-k-theory/03.08.06-stable-homotopy.md`](content/03-modern-geometry/08-k-theory/03.08.06-stable-homotopy.md)

**Mathlib gap:**

> Mathlib does not yet have the stable homotopy infrastructure needed for this
> curriculum unit: pointed spaces with suspension and loop adjunctions,
> stable homotopy groups, spectra as structured objects, Freudenthal
> stabilization in a usable API, and the bridge from stable homotopy to
> generalized cohomology theories such as K-theory.

### `03.08.07` — Bott periodicity

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/08-k-theory/03.08.07-bott-periodicity.md`](content/03-modern-geometry/08-k-theory/03.08.07-bott-periodicity.md)

**Mathlib gap:**

> Mathlib does not yet have topological K-theory in the form needed for this
> unit. Required upstream work includes Grothendieck groups of complex and real
> vector bundles over compact spaces, reduced K-groups, suspension and loop
> space functoriality, classifying spaces for the stable unitary and orthogonal
> groups, Clifford-module models for KO-theory, and the Bott isomorphisms
> K^{-n}(X) ≃ K^{-n-2}(X) and KO^{-n}(X) ≃ KO^{-n-8}(X).

### `03.09.02` — Clifford algebra

- **Lean status:** `partial`
- **Module:** `Codex.SpinGeometry.CliffordAlgebra`
- **Human reviewer:** Tyler — Green per PILOT_PLAN §3
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.02-clifford-algebra.md`](content/03-modern-geometry/09-spin-geometry/03.09.02-clifford-algebra.md)

**Mathlib gap:**

> Mathlib's `CliffordAlgebra` covers the universal-property construction
> for an arbitrary quadratic form (good). It does not (yet) cover:
> - The signature-graded classification Cl_{p,q}(ℝ) ≃ matrix algebras
> over ℝ, ℂ, or ℍ (the ABS table)
> - Bott periodicity Cl_{p,q+8} ≃ Cl_{p,q} ⊗ Cl_{0,8} ≃ Cl_{p,q} ⊗ M_{16}(ℝ)
> - The pin / spin double covers as Mathlib structures
> We can formalize the universal property and the involution / grading;
> the full classification is left for a follow-on Mathlib contribution.

### `03.09.03` — Spin group

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.03-spin-group.md`](content/03-modern-geometry/09-spin-geometry/03.09.03-spin-group.md)

**Mathlib gap:**

> Mathlib has Clifford algebras, quadratic forms, and Lie groups in broad
> generality, but it does not yet provide the Clifford group, Pin group,
> Spin group, the twisted adjoint representation, or the double-cover
> theorem Spin(n) -> SO(n). Formalizing this unit would require:
> - a Clifford-unit subgroup generated by nonisotropic vectors,
> - the even subgroup defining Spin(V,q),
> - proofs that the twisted adjoint action preserves V and q,
> - the kernel computation {+1,-1},
> - the identification of the image with SO(V,q) in the positive definite
> real case.

### `03.09.04` — Spin structure on an oriented Riemannian manifold

- **Lean status:** `none`
- **Human reviewer:** Tyler — Green per PILOT_PLAN §3 (E8 / SO(8) work covers this directly)
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.04-spin-structure.md`](content/03-modern-geometry/09-spin-geometry/03.09.04-spin-structure.md)

**Mathlib gap:**

> Mathlib does not cover principal bundles or spin structures. Required
> groundwork: a working theory of fibre bundles, principal G-bundles,
> associated bundles, and characteristic classes (in particular Stiefel-
> Whitney classes via singular cohomology with Z/2 coefficients).
> Formalising spin structures depends on substantial bundle infrastructure
> that is not in Mathlib as of this writing. Once Mathlib has principal
> bundles and the cohomological obstruction theory, spin structures are a
> natural follow-on contribution.

### `03.09.05` — Spinor bundle

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.05-spinor-bundle.md`](content/03-modern-geometry/09-spin-geometry/03.09.05-spinor-bundle.md)

**Mathlib gap:**

> Mathlib does not yet have spinor bundles in their geometric form (associated
> bundles to spin structures, with Clifford-module fibres and induced spinor
> connections). Required upstream work: spin structures as principal-bundle
> reductions, the complex spin representation $\Delta_n$ as a $\mathrm{Spin}(n)$
> module, the associated-bundle construction $P \times_\sigma V$ for principal
> $G$-bundles and $G$-modules, fibrewise Clifford multiplication as a bundle
> map, and the unique lift of the Levi-Civita connection to a connection on
> the spinor bundle.

### `03.09.06` — Fredholm operators

- **Lean status:** `none`
- **Human reviewer:** Tyler — Yellow per PILOT_PLAN §3 (functional-analysis depth; recommend co-reviewer before formal verification)
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.06-fredholm-operators.md`](content/03-modern-geometry/09-spin-geometry/03.09.06-fredholm-operators.md)

**Mathlib gap:**

> Mathlib has the foundational pieces — bounded linear operators on
> Banach spaces, compact operators, and basic spectral theory — but
> does not (yet) have Fredholm operators as a defined class with
> the index function and the Atkinson characterisation. Required
> upstream contributions: define `IsFredholm : (E →L[𝕜] F) → Prop`,
> prove Atkinson (Fredholm iff invertible modulo `CompactOperator`),
> define `Fredholm.index : ... → ℤ`, and prove the homotopy / compact-
> perturbation invariance of the index. Mathlib's `Calkin` quotient
> infrastructure is partially present and would be the right launchpad.

### `03.09.07` — Symbol of a differential operator

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.07-symbol-of-operator.md`](content/03-modern-geometry/09-spin-geometry/03.09.07-symbol-of-operator.md)

**Mathlib gap:**

> Mathlib does not yet have a differential-operator API on smooth vector
> bundles with filtered order, principal symbols as bundle morphisms over
> the cotangent bundle, coordinate invariance, composition of symbols, and
> symbol exact sequences. This infrastructure is needed before ellipticity
> and index-theoretic symbol classes can be formalized.

### `03.09.08` — Dirac operator

- **Lean status:** `none`
- **Human reviewer:** Tyler — Yellow per PILOT_PLAN §3 (analytic side may want a second look)
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.08-dirac-operator.md`](content/03-modern-geometry/09-spin-geometry/03.09.08-dirac-operator.md)

**Mathlib gap:**

> Mathlib does not yet have the geometric infrastructure required to state the
> Dirac operator on a spin manifold. Required upstream work includes smooth
> vector bundles and sections, Riemannian manifolds with Levi-Civita
> connections, principal Spin bundles and spinor bundles, Clifford
> multiplication as a bundle map, covariant derivatives on associated bundles,
> elliptic differential operators, Sobolev completions, and the Fredholm theory
> needed to connect the operator to index theory.

### `03.09.09` — Elliptic operators on a manifold

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.09-elliptic-operators.md`](content/03-modern-geometry/09-spin-geometry/03.09.09-elliptic-operators.md)

**Mathlib gap:**

> Mathlib lacks a curriculum-ready theory of elliptic differential
> operators on smooth vector bundles: principal symbols over cotangent
> bundles, ellipticity, Sobolev spaces of sections, parametrices,
> elliptic regularity, compact embeddings, and Fredholmness on compact
> manifolds. Those layers are prerequisites for formal index theory.

### `03.09.10` — Atiyah-Singer index theorem

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/09-spin-geometry/03.09.10-atiyah-singer-index-theorem.md`](content/03-modern-geometry/09-spin-geometry/03.09.10-atiyah-singer-index-theorem.md)

**Mathlib gap:**

> Mathlib cannot yet state the Atiyah-Singer index theorem. Required upstream
> infrastructure includes elliptic differential operators on smooth vector
> bundles, Sobolev mapping theory and Fredholmness, principal symbols as
> compactly supported K-theory classes on cotangent bundles, topological
> K-theory and Thom isomorphisms, Chern character and Todd/A-hat classes,
> spinor bundles and Dirac operators, and heat-kernel asymptotics.

### `03.10.02` — CFT basics

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/10-conformal-field-theory/03.10.02-cft-basics.md`](content/03-modern-geometry/10-conformal-field-theory/03.10.02-cft-basics.md)

**Mathlib gap:**

> Mathlib does not yet contain the analytic and algebraic infrastructure needed
> for conformal field theory. Missing pieces include two-dimensional conformal
> manifolds as field-theory backgrounds, local operator algebras, operator
> product expansions, stress tensors, Virasoro representations with central
> charge, Ward identities, and the state-operator correspondence.

### `03.11.01` — Central extension of a Lie algebra

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/11-infinite-dim-lie/03.11.01-central-extension.md`](content/03-modern-geometry/11-infinite-dim-lie/03.11.01-central-extension.md)

**Mathlib gap:**

> Mathlib has Lie algebras and cohomological ingredients in separate areas,
> but it does not package Lie-algebra central extensions, Chevalley-Eilenberg
> 2-cocycles, equivalence of extensions, universal central extensions, or
> the affine/Virasoro examples used in CFT.

### `03.11.02` — Infinite-dimensional Lie algebra representations

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/11-infinite-dim-lie/03.11.02-infinite-dim-lie-reps.md`](content/03-modern-geometry/11-infinite-dim-lie/03.11.02-infinite-dim-lie-reps.md)

**Mathlib gap:**

> Mathlib has Lie algebras and modules over Lie algebras, but it does not
> provide the analytic and graded representation theory needed here: completed
> infinite-dimensional modules, highest-weight representations of affine and
> Virasoro algebras, central charge as a structured scalar, positive-energy
> Hilbert-space representations, or the CFT state-space conventions used by
> this curriculum.

### `03.11.03` — Virasoro algebra

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/11-infinite-dim-lie/03.11.03-virasoro-algebra.md`](content/03-modern-geometry/11-infinite-dim-lie/03.11.03-virasoro-algebra.md)

**Mathlib gap:**

> Mathlib has Lie algebras and modules, but it does not yet package the Witt
> algebra of Laurent vector fields, the Gelfand-Fuchs cocycle, the Virasoro
> central extension, highest-weight Virasoro modules, Verma modules, central
> charge, or positive-energy representation structures used in conformal field
> theory.

### `03.12.01` — Homotopy and homotopy group

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.Homotopy.Homotopy`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/12-homotopy/03.12.01-homotopy.md`](content/03-modern-geometry/12-homotopy/03.12.01-homotopy.md)

### `03.12.02` — Covering space

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.Homotopy.CoveringSpace`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/12-homotopy/03.12.02-covering-space.md`](content/03-modern-geometry/12-homotopy/03.12.02-covering-space.md)

### `03.12.03` — Suspension

- **Lean status:** `partial`
- **Module:** `Codex.ModernGeometry.Homotopy.Suspension`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/12-homotopy/03.12.03-suspension.md`](content/03-modern-geometry/12-homotopy/03.12.03-suspension.md)

### `03.12.04` — Spectrum

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/12-homotopy/03.12.04-spectrum.md`](content/03-modern-geometry/12-homotopy/03.12.04-spectrum.md)

**Mathlib gap:**

> Mathlib does not yet have spectra in any modelled form (sequential,
> symmetric, orthogonal). The stable homotopy category construction
> requires substantial $\infty$-categorical machinery. A first
> formalisation would target the sequential-spectrum model with structure
> maps $\Sigma E_n \to E_{n+1}$, the homotopy category, and the
> representability of generalised cohomology theories.

### `03.12.05` — Eilenberg-MacLane space

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/03-modern-geometry/12-homotopy/03.12.05-eilenberg-maclane.md`](content/03-modern-geometry/12-homotopy/03.12.05-eilenberg-maclane.md)

**Mathlib gap:**

> Mathlib does not yet have Eilenberg-MacLane spaces in their canonical
> homotopy-type form. A formalisation needs the existence theorem for
> spaces with prescribed homotopy in a single degree, the loop-space
> characterisation $K(A, n) \simeq \Omega K(A, n+1)$, and the
> representability $H^n(X; A) = [X, K(A, n)]$.

### `04.01.01` — Sheaf

- **Lean status:** `partial`
- **Module:** `Codex.AlgebraicGeometry.Sheaves.Sheaf`
- **Human reviewer:** TBD
- **Source:** [`content/04-algebraic-geometry/01-sheaves/04.01.01-sheaf.md`](content/04-algebraic-geometry/01-sheaves/04.01.01-sheaf.md)

### `04.02.01` — Scheme

- **Lean status:** `partial`
- **Module:** `Codex.AlgebraicGeometry.Schemes.Scheme`
- **Human reviewer:** TBD
- **Source:** [`content/04-algebraic-geometry/02-schemes/04.02.01-scheme.md`](content/04-algebraic-geometry/02-schemes/04.02.01-scheme.md)

### `04.02.02` — Affine scheme

- **Lean status:** `partial`
- **Module:** `Codex.AlgebraicGeometry.Schemes.AffineScheme`
- **Human reviewer:** TBD
- **Source:** [`content/04-algebraic-geometry/02-schemes/04.02.02-affine-scheme.md`](content/04-algebraic-geometry/02-schemes/04.02.02-affine-scheme.md)

### `04.03.01` — Sheaf cohomology

- **Lean status:** `partial`
- **Module:** `Codex.AlgebraicGeometry.Cohomology.SheafCohomology`
- **Human reviewer:** TBD
- **Source:** [`content/04-algebraic-geometry/03-cohomology/04.03.01-sheaf-cohomology.md`](content/04-algebraic-geometry/03-cohomology/04.03.01-sheaf-cohomology.md)

### `04.04.01` — Riemann-Roch theorem for curves

- **Lean status:** `partial`
- **Module:** `Codex.AlgebraicGeometry.RiemannRoch.Curves`
- **Human reviewer:** TBD
- **Source:** [`content/04-algebraic-geometry/04-riemann-roch/04.04.01-riemann-roch-curves.md`](content/04-algebraic-geometry/04-riemann-roch/04.04.01-riemann-roch-curves.md)

### `04.07.01` — Projective space

- **Lean status:** `partial`
- **Module:** `Codex.AlgebraicGeometry.Projective.ProjectiveSpace`
- **Human reviewer:** TBD
- **Source:** [`content/04-algebraic-geometry/07-projective/04.07.01-projective-space.md`](content/04-algebraic-geometry/07-projective/04.07.01-projective-space.md)

### `05.06.01` — Almost-complex structure on a symplectic manifold

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/almost-complex/05.06.01-almost-complex.md`](content/05-symplectic/almost-complex/05.06.01-almost-complex.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for almost-complex structure on a symplectic manifold: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.06.02` — Pseudoholomorphic curve

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/almost-complex/05.06.02-pseudoholomorphic-curve.md`](content/05-symplectic/almost-complex/05.06.02-pseudoholomorphic-curve.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for pseudoholomorphic curve: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.03.01` — Coadjoint orbit

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/coadjoint/05.03.01-coadjoint-orbit.md`](content/05-symplectic/coadjoint/05.03.01-coadjoint-orbit.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for coadjoint orbit: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.08.01` — Arnold conjecture and Floer homology setup

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/floer/05.08.01-arnold-conjecture.md`](content/05-symplectic/floer/05.08.01-arnold-conjecture.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for arnold conjecture and Floer homology setup: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.08.02` — Floer homology

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/floer/05.08.02-floer-homology.md`](content/05-symplectic/floer/05.08.02-floer-homology.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for floer homology: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.08.03` — Maslov index

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/floer/05.08.03-maslov-index.md`](content/05-symplectic/floer/05.08.03-maslov-index.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for maslov index: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.08.04` — Conley-Zehnder index

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/floer/05.08.04-conley-zehnder-index.md`](content/05-symplectic/floer/05.08.04-conley-zehnder-index.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for conley-Zehnder index: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.07.01` — Gromov non-squeezing theorem

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/gromov/05.07.01-non-squeezing.md`](content/05-symplectic/gromov/05.07.01-non-squeezing.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for gromov non-squeezing theorem: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.07.02` — Symplectic capacity

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/gromov/05.07.02-symplectic-capacity.md`](content/05-symplectic/gromov/05.07.02-symplectic-capacity.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for symplectic capacity: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.02.01` — Hamiltonian vector field

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/hamiltonian/05.02.01-hamiltonian-vector-field.md`](content/05-symplectic/hamiltonian/05.02.01-hamiltonian-vector-field.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for hamiltonian vector field: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.02.02` — Poisson bracket and Poisson manifold

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/hamiltonian/05.02.02-poisson-bracket.md`](content/05-symplectic/hamiltonian/05.02.02-poisson-bracket.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for poisson bracket and Poisson manifold: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.02.03` — Integrable system

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/hamiltonian/05.02.03-integrable-system.md`](content/05-symplectic/hamiltonian/05.02.03-integrable-system.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for integrable system: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.02.04` — Action-angle coordinates

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/hamiltonian/05.02.04-action-angle-coordinates.md`](content/05-symplectic/hamiltonian/05.02.04-action-angle-coordinates.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for action-angle coordinates: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.02.05` — Cotangent bundle as canonical symplectic manifold

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/hamiltonian/05.02.05-cotangent-bundle.md`](content/05-symplectic/hamiltonian/05.02.05-cotangent-bundle.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for cotangent bundle as canonical symplectic manifold: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.05.01` — Lagrangian submanifold

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/lagrangian/05.05.01-lagrangian-submanifold.md`](content/05-symplectic/lagrangian/05.05.01-lagrangian-submanifold.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for lagrangian submanifold: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.04.01` — Moment map

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/moment-reduction/05.04.01-moment-map.md`](content/05-symplectic/moment-reduction/05.04.01-moment-map.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for moment map: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.04.02` — Marsden-Weinstein symplectic reduction

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/moment-reduction/05.04.02-symplectic-reduction.md`](content/05-symplectic/moment-reduction/05.04.02-symplectic-reduction.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for marsden-Weinstein symplectic reduction: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.01.01` — Symplectic vector space

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/symplectic-linear/05.01.01-symplectic-vector-space.md`](content/05-symplectic/symplectic-linear/05.01.01-symplectic-vector-space.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for symplectic vector space: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.01.02` — Symplectic manifold

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/symplectic-linear/05.01.02-symplectic-manifold.md`](content/05-symplectic/symplectic-linear/05.01.02-symplectic-manifold.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for symplectic manifold: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.01.03` — Symplectic group

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/symplectic-linear/05.01.03-symplectic-group.md`](content/05-symplectic/symplectic-linear/05.01.03-symplectic-group.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for symplectic group: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `05.01.04` — Darboux's theorem

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/05-symplectic/symplectic-linear/05.01.04-darboux-theorem.md`](content/05-symplectic/symplectic-linear/05.01.04-darboux-theorem.md)

**Mathlib gap:**

> Mathlib contains scattered linear algebra, differential geometry, and some symplectic structures, but this project lacks a complete formal layer for darboux's theorem: smooth symplectic manifolds with the chosen Hamiltonian sign convention, flows, reduction, transversality, and the analytic or quotient theorems used in this curriculum unit.

### `06.01.01` — Holomorphic function

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.ComplexAnalysis.Holomorphic`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/01-complex-analysis/06.01.01-holomorphic-function.md`](content/06-riemann-surfaces/01-complex-analysis/06.01.01-holomorphic-function.md)

### `06.01.02` — Cauchy integral formula

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.ComplexAnalysis.CauchyIntegralFormula`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/01-complex-analysis/06.01.02-cauchy-integral-formula.md`](content/06-riemann-surfaces/01-complex-analysis/06.01.02-cauchy-integral-formula.md)

### `06.01.03` — Residue theorem

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.ComplexAnalysis.ResidueTheorem`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/01-complex-analysis/06.01.03-residue-theorem.md`](content/06-riemann-surfaces/01-complex-analysis/06.01.03-residue-theorem.md)

### `06.01.04` — Analytic continuation

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.ComplexAnalysis.AnalyticContinuation`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/01-complex-analysis/06.01.04-analytic-continuation.md`](content/06-riemann-surfaces/01-complex-analysis/06.01.04-analytic-continuation.md)

### `06.01.05` — Meromorphic function

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.ComplexAnalysis.MeromorphicFunction`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/01-complex-analysis/06.01.05-meromorphic-function.md`](content/06-riemann-surfaces/01-complex-analysis/06.01.05-meromorphic-function.md)

### `06.01.06` — Riemann mapping theorem

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.ComplexAnalysis.RiemannMappingTheorem`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/01-complex-analysis/06.01.06-riemann-mapping-theorem.md`](content/06-riemann-surfaces/01-complex-analysis/06.01.06-riemann-mapping-theorem.md)

### `06.02.01` — Branch point and ramification

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.BranchPoints.BranchPointRamification`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/02-branch-points/06.02.01-branch-point-ramification.md`](content/06-riemann-surfaces/02-branch-points/06.02.01-branch-point-ramification.md)

### `06.03.01` — Riemann surface

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Surfaces.RiemannSurface`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/03-riemann-surfaces/06.03.01-riemann-surface.md`](content/06-riemann-surfaces/03-riemann-surfaces/06.03.01-riemann-surface.md)

### `06.03.02` — Genus of a Riemann surface

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Surfaces.GenusRiemannSurface`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/03-riemann-surfaces/06.03.02-genus-riemann-surface.md`](content/06-riemann-surfaces/03-riemann-surfaces/06.03.02-genus-riemann-surface.md)

### `06.03.03` — Uniformization theorem

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Surfaces.UniformizationTheorem`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/03-riemann-surfaces/06.03.03-uniformization-theorem.md`](content/06-riemann-surfaces/03-riemann-surfaces/06.03.03-uniformization-theorem.md)

### `06.04.01` — Riemann-Roch theorem for compact Riemann surfaces

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.RiemannRoch.CompactSurface`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/04-riemann-roch-rs/06.04.01-riemann-roch-compact-riemann-surfaces.md`](content/06-riemann-surfaces/04-riemann-roch-rs/06.04.01-riemann-roch-compact-riemann-surfaces.md)

### `06.05.01` — Divisor on a Riemann surface

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.DivisorsBundles.DivisorRiemannSurface`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/05-divisors-bundles/06.05.01-divisor-riemann-surface.md`](content/06-riemann-surfaces/05-divisors-bundles/06.05.01-divisor-riemann-surface.md)

### `06.05.02` — Holomorphic line bundle on a Riemann surface

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.DivisorsBundles.HolomorphicLineBundle`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/05-divisors-bundles/06.05.02-holomorphic-line-bundle.md`](content/06-riemann-surfaces/05-divisors-bundles/06.05.02-holomorphic-line-bundle.md)

### `06.05.03` — Riemann-Hurwitz formula

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.DivisorsBundles.RiemannHurwitzFormula`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/05-divisors-bundles/06.05.03-riemann-hurwitz-formula.md`](content/06-riemann-surfaces/05-divisors-bundles/06.05.03-riemann-hurwitz-formula.md)

### `06.06.01` — Holomorphic 1-form / abelian differential

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Jacobians.HolomorphicOneForm`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/06-jacobians/06.06.01-holomorphic-one-form.md`](content/06-riemann-surfaces/06-jacobians/06.06.01-holomorphic-one-form.md)

### `06.06.02` — Period matrix

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Jacobians.PeriodMatrix`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/06-jacobians/06.06.02-period-matrix.md`](content/06-riemann-surfaces/06-jacobians/06.06.02-period-matrix.md)

### `06.06.03` — Jacobian variety

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Jacobians.JacobianVariety`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/06-jacobians/06.06.03-jacobian-variety.md`](content/06-riemann-surfaces/06-jacobians/06.06.03-jacobian-variety.md)

### `06.06.04` — Abel-Jacobi map

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Jacobians.AbelJacobiMap`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/06-jacobians/06.06.04-abel-jacobi-map.md`](content/06-riemann-surfaces/06-jacobians/06.06.04-abel-jacobi-map.md)

### `06.06.05` — Theta function

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.Jacobians.ThetaFunction`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/06-jacobians/06.06.05-theta-function.md`](content/06-riemann-surfaces/06-jacobians/06.06.05-theta-function.md)

### `06.07.01` — Holomorphic functions of several variables

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.SeveralVariables.HolomorphicSeveralVariables`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/07-several-variables/06.07.01-holomorphic-several-variables.md`](content/06-riemann-surfaces/07-several-variables/06.07.01-holomorphic-several-variables.md)

### `06.07.02` — Hartogs phenomenon

- **Lean status:** `partial`
- **Module:** `Codex.RiemannSurfaces.SeveralVariables.HartogsPhenomenon`
- **Human reviewer:** TBD
- **Source:** [`content/06-riemann-surfaces/07-several-variables/06.07.02-hartogs-phenomenon.md`](content/06-riemann-surfaces/07-several-variables/06.07.02-hartogs-phenomenon.md)

### `07.01.01` — Group representation

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.Foundations.GroupRepresentation`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/01-foundations/07.01.01-group-representation.md`](content/07-representation-theory/01-foundations/07.01.01-group-representation.md)

### `07.01.02` — Schur's lemma

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.Foundations.SchurLemma`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/01-foundations/07.01.02-schur-lemma.md`](content/07-representation-theory/01-foundations/07.01.02-schur-lemma.md)

### `07.03.01` — Highest weight representation

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.HighestWeight.HighestWeight`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/03-highest-weight/07.03.01-highest-weight-representation.md`](content/07-representation-theory/03-highest-weight/07.03.01-highest-weight-representation.md)

### `07.04.01` — Cartan-Weyl classification

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.Classification.CartanWeyl`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/04-classification/07.04.01-cartan-weyl-classification.md`](content/07-representation-theory/04-classification/07.04.01-cartan-weyl-classification.md)

### `07.06.01` — Lie algebra representation

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.LieAlgebraRepresentation`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.01-lie-algebra-representation.md`](content/07-representation-theory/06-lie-algebraic/07.06.01-lie-algebra-representation.md)

### `07.06.02` — Universal enveloping algebra

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.UniversalEnvelopingAlgebra`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.02-universal-enveloping-algebra.md`](content/07-representation-theory/06-lie-algebraic/07.06.02-universal-enveloping-algebra.md)

### `07.06.03` — Root system

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.RootSystem`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.03-root-system.md`](content/07-representation-theory/06-lie-algebraic/07.06.03-root-system.md)

### `07.06.04` — Weyl group

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.WeylGroup`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.04-weyl-group.md`](content/07-representation-theory/06-lie-algebraic/07.06.04-weyl-group.md)

### `07.06.05` — Dynkin diagram

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.DynkinDiagram`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.05-dynkin-diagram.md`](content/07-representation-theory/06-lie-algebraic/07.06.05-dynkin-diagram.md)

### `07.06.06` — Verma module

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.VermaModule`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.06-verma-module.md`](content/07-representation-theory/06-lie-algebraic/07.06.06-verma-module.md)

### `07.06.07` — Weyl character formula

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.WeylCharacterFormula`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.07-weyl-character-formula.md`](content/07-representation-theory/06-lie-algebraic/07.06.07-weyl-character-formula.md)

### `07.06.08` — Weyl dimension formula

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.WeylDimensionFormula`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.08-weyl-dimension-formula.md`](content/07-representation-theory/06-lie-algebraic/07.06.08-weyl-dimension-formula.md)

### `07.06.09` — Borel-Weil theorem

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.LieAlgebraic.BorelWeilTheorem`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/06-lie-algebraic/07.06.09-borel-weil-theorem.md`](content/07-representation-theory/06-lie-algebraic/07.06.09-borel-weil-theorem.md)

### `07.07.01` — Compact Lie group representation

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.CompactLie.CompactLieGroupRepresentation`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/07-compact-lie/07.07.01-compact-lie-group-representation.md`](content/07-representation-theory/07-compact-lie/07.07.01-compact-lie-group-representation.md)

### `07.07.02` — Peter-Weyl theorem

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.CompactLie.PeterWeylTheorem`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/07-compact-lie/07.07.02-peter-weyl-theorem.md`](content/07-representation-theory/07-compact-lie/07.07.02-peter-weyl-theorem.md)

### `07.07.03` — Haar measure

- **Lean status:** `partial`
- **Module:** `Codex.RepresentationTheory.CompactLie.HaarMeasure`
- **Human reviewer:** TBD
- **Source:** [`content/07-representation-theory/07-compact-lie/07.07.03-haar-measure.md`](content/07-representation-theory/07-compact-lie/07.07.03-haar-measure.md)

### `08.05.01` — Critical exponents and scaling laws

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/critical/08.05.01-critical-exponents.md`](content/08-stat-mech/critical/08.05.01-critical-exponents.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for critical exponents and scaling laws: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.05.02` — Correlation functions (statistical mechanics)

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/critical/08.05.02-correlation-functions.md`](content/08-stat-mech/critical/08.05.02-correlation-functions.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for correlation functions (statistical mechanics): finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.06.01` — Gaussian field theory and free boson

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/gaussian/08.06.01-gaussian-field.md`](content/08-stat-mech/gaussian/08.06.01-gaussian-field.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for gaussian field theory and free boson: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.06.02` — Conformal symmetry at criticality

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/gaussian/08.06.02-conformal-criticality.md`](content/08-stat-mech/gaussian/08.06.02-conformal-criticality.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for conformal symmetry at criticality: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.08.01` — Wilson's lattice gauge theory

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/lattice-gauge/08.08.01-wilson-lattice-gauge.md`](content/08-stat-mech/lattice-gauge/08.08.01-wilson-lattice-gauge.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for wilson's lattice gauge theory: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.08.02` — Wilson action

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/lattice-gauge/08.08.02-wilson-action.md`](content/08-stat-mech/lattice-gauge/08.08.02-wilson-action.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for wilson action: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.08.03` — Effective field theory

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/lattice-gauge/08.08.03-effective-field-theory.md`](content/08-stat-mech/lattice-gauge/08.08.03-effective-field-theory.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for effective field theory: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.02.01` — Mean-field theory and Curie-Weiss model

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/mean-field/08.02.01-mean-field.md`](content/08-stat-mech/mean-field/08.02.01-mean-field.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for mean-field theory and Curie-Weiss model: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.02.02` — Spontaneous symmetry breaking

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/mean-field/08.02.02-spontaneous-symmetry-breaking.md`](content/08-stat-mech/mean-field/08.02.02-spontaneous-symmetry-breaking.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for spontaneous symmetry breaking: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.02.03` — Mermin-Wagner theorem

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/mean-field/08.02.03-mermin-wagner.md`](content/08-stat-mech/mean-field/08.02.03-mermin-wagner.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for mermin-Wagner theorem: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.03.01` — Onsager solution of the 2D Ising model (transfer matrix)

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/onsager/08.03.01-onsager-solution.md`](content/08-stat-mech/onsager/08.03.01-onsager-solution.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for onsager solution of the 2D Ising model (transfer matrix): finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.03.02` — Transfer matrix

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/onsager/08.03.02-transfer-matrix.md`](content/08-stat-mech/onsager/08.03.02-transfer-matrix.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for transfer matrix: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.01.01` — Partition function (statistical mechanics)

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/partition/08.01.01-partition-function.md`](content/08-stat-mech/partition/08.01.01-partition-function.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for partition function (statistical mechanics): finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.01.02` — Ising model

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/partition/08.01.02-ising-model.md`](content/08-stat-mech/partition/08.01.02-ising-model.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for ising model: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.01.03` — Boltzmann distribution and canonical ensemble

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/partition/08.01.03-boltzmann-distribution.md`](content/08-stat-mech/partition/08.01.03-boltzmann-distribution.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for boltzmann distribution and canonical ensemble: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.01.04` — Free energy

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/partition/08.01.04-free-energy.md`](content/08-stat-mech/partition/08.01.04-free-energy.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for free energy: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.07.01` — Path integral formulation of statistical mechanics

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/path-integral/08.07.01-path-integral.md`](content/08-stat-mech/path-integral/08.07.01-path-integral.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for path integral formulation of statistical mechanics: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.04.01` — Renormalisation group (real-space block decimation)

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/rg/08.04.01-real-space-rg.md`](content/08-stat-mech/rg/08.04.01-real-space-rg.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for renormalisation group (real-space block decimation): finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.04.02` — Wilson-Fisher fixed point and universality

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/rg/08.04.02-wilson-fisher.md`](content/08-stat-mech/rg/08.04.02-wilson-fisher.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for wilson-Fisher fixed point and universality: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.04.03` — Beta function (renormalisation group)

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/rg/08.04.03-beta-function.md`](content/08-stat-mech/rg/08.04.03-beta-function.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for beta function (renormalisation group): finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.04.04` — Block-spin decimation

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/rg/08.04.04-block-spin-decimation.md`](content/08-stat-mech/rg/08.04.04-block-spin-decimation.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for block-spin decimation: finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

### `08.09.01` — Quantum-classical correspondence (Wick rotation)

- **Lean status:** `none`
- **Human reviewer:** TBD
- **Source:** [`content/08-stat-mech/wick/08.09.01-wick-rotation.md`](content/08-stat-mech/wick/08.09.01-wick-rotation.md)

**Mathlib gap:**

> Mathlib has probability theory, measure theory, and analysis, but it does not yet provide a project-level statistical mechanics library for quantum-classical correspondence (Wick rotation): finite and infinite lattice models, thermodynamic limits, transfer matrices as physics objects, renormalisation-group flows, Euclidean path integrals, or lattice gauge actions with the conventions used here.

---

*Update by running `python scripts/build_mathlib_gaps.py`.*
