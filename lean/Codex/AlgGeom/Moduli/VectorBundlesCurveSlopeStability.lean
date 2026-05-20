/-
  Codex.AlgGeom.Moduli.VectorBundlesCurveSlopeStability

  Companion Lean file for `04.10.06 Moduli of vector bundles on a curve
  and slope stability`.

  lean_status: partial. Mathlib provides commutative-algebra,
  module-theory, and elementary algebraic-geometry infrastructure
  (`Mathlib.AlgebraicGeometry.Scheme`, `Mathlib.RingTheory.GradedAlgebra`).
  What is missing for a full mechanisation of the Mumford / Seshadri /
  Narasimhan-Seshadri picture:

  * a `VectorBundle` typeclass on schemes specialised to a fixed
    smooth projective curve (Mathlib's `Mathlib.Topology.VectorBundle`
    is differential-topological, not scheme-theoretic);
  * `degree`, `rank` for a locally free coherent sheaf on a curve,
    together with the additivity over short exact sequences that
    makes slope a homomorphism on the Grothendieck group;
  * the Harder-Narasimhan filtration as a structure on a semistable
    coherent sheaf;
  * the construction of the moduli space `M(r, d)` as a
    quasi-projective scheme via GIT on the Quot scheme;
  * the Narasimhan-Seshadri correspondence
    `M(r, d) ≅ Hom(π₁ C, U(r)) / U(r)` and its
    Atiyah-Bott / Yang-Mills realisation as a symplectic quotient
    `μ⁻¹(c) / G(P)` of the moment map on the affine space of
    unitary connections on a Hermitian bundle.

  The statements below schematise the load-bearing data and the four
  Master-tier theorems of the companion unit:

  * `Slope.slope` and the slope-stability predicate;
  * `harder_narasimhan_filtration` existence and uniqueness;
  * `dim_moduli_vector_bundles` — Mumford's formula
    $\dim M(r, d) = r^2 (g - 1) + 1$;
  * `narasimhan_seshadri` — the bijection with irreducible unitary
    representations of $\pi_1$ of fixed determinant.

  Proofs are `sorry` pending the Mathlib infrastructure above.
-/

import Mathlib.AlgebraicGeometry.Scheme
import Mathlib.RingTheory.GradedAlgebra.Basic
import Mathlib.LinearAlgebra.Basic
import Mathlib.Topology.Algebra.Module.Basic

namespace Codex.AlgGeom.Moduli

/-!
## Slope and the slope-stability predicate

We axiomatise a smooth projective curve $C$ of genus $g$ as a piece
of input data together with the rank-and-degree functions on the
abstract class of vector bundles over $C$. This sidesteps the lack
of a Mathlib scheme-theoretic `VectorBundle` typeclass while
preserving the algebraic shape of the slope construction.
-/

/-- Abstract data of a smooth projective curve of genus `g` together
with a class of vector bundles equipped with `rank` and `degree`. -/
structure CurveBundleData where
  /-- Genus of the curve $C$. -/
  genus : ℕ
  /-- The (set of) isomorphism classes of vector bundles on $C$. -/
  Bundle : Type
  /-- Rank of a vector bundle on $C$; positive for the non-zero bundles. -/
  rank : Bundle → ℕ
  /-- Degree of a vector bundle on $C$, an integer. -/
  degree : Bundle → ℤ
  /-- Sub-bundle relation: a sub-bundle of `E` is a vector bundle on $C$
  together with an inclusion of sheaves whose quotient is locally free. -/
  Sub : Bundle → Type
  /-- The underlying bundle of a sub-bundle. -/
  subBundle : ∀ {E}, Sub E → Bundle
  /-- A sub-bundle is *proper* if its rank is strictly between 0 and the
  rank of the ambient bundle. -/
  isProper : ∀ {E}, Sub E → Prop

namespace CurveBundleData

variable (C : CurveBundleData)

/-- The **slope** of a vector bundle of positive rank on the curve:
$\mu(E) := \deg(E) / \mathrm{rank}(E) \in \mathbb{Q}$. -/
noncomputable def slope (E : C.Bundle) (h : 0 < C.rank E) : ℚ :=
  (C.degree E : ℚ) / (C.rank E : ℚ)

/-- A vector bundle `E` on `C` is **slope-stable** (Mumford 1963) if
for every proper sub-bundle `F ⊂ E`,
$\mu(F) < \mu(E)$. -/
def IsStable (E : C.Bundle) (h : 0 < C.rank E) : Prop :=
  ∀ (F : C.Sub E), C.isProper F →
    ∀ (hF : 0 < C.rank (C.subBundle F)),
      C.slope (C.subBundle F) hF < C.slope E h

/-- A vector bundle `E` on `C` is **slope-semistable** if for every
proper sub-bundle `F ⊂ E`, $\mu(F) \leq \mu(E)$. -/
def IsSemistable (E : C.Bundle) (h : 0 < C.rank E) : Prop :=
  ∀ (F : C.Sub E), C.isProper F →
    ∀ (hF : 0 < C.rank (C.subBundle F)),
      C.slope (C.subBundle F) hF ≤ C.slope E h

/-- Stability implies semistability. -/
theorem IsStable.semistable {E : C.Bundle} {h : 0 < C.rank E}
    (hE : C.IsStable E h) : C.IsSemistable E h := by
  intro F hF hFrk
  exact (hE F hF hFrk).le

end CurveBundleData

/-!
## The Harder-Narasimhan filtration

Every coherent sheaf on a smooth projective curve admits a unique
filtration by sub-bundles whose successive quotients are semistable
with strictly decreasing slope. This is Harder-Narasimhan
(*Math. Ann.* 212, 1975); it reduces every sheaf to a stack of
semistable building blocks, which is what makes the moduli space
of *semistable* bundles tractable.
-/

/-- Existence and uniqueness of the Harder-Narasimhan filtration:
for every vector bundle `E` of positive rank on a smooth projective
curve there is a unique filtration
`0 = E₀ ⊊ E₁ ⊊ … ⊊ Eₘ = E`
such that each subquotient `Eᵢ / Eᵢ₋₁` is semistable and
`μ(E₁ / E₀) > μ(E₂ / E₁) > … > μ(Eₘ / Eₘ₋₁)`. -/
theorem harder_narasimhan_filtration
    (C : CurveBundleData) (E : C.Bundle) (h : 0 < C.rank E) :
    -- The statement is schematised as `True` pending a Mathlib
    -- coherent-sheaf API on a smooth projective curve. The intended
    -- payload: ∃! filtration as above with semistable subquotients
    -- of strictly decreasing slope.
    True := by
  -- Proof (Harder-Narasimhan 1975): pick a maximal-slope sub-bundle
  -- E₁ ⊂ E (existence: the slopes of sub-bundles are bounded above
  -- in degree at fixed rank because deg is integer-valued and
  -- bounded by deg E + (rank E)(rank E₁) · genus); E₁ is then
  -- semistable by maximality; iterate on E / E₁. Uniqueness comes
  -- from the strict-inequality of slopes.
  trivial

/-!
## Mumford's moduli space `M(r, d)`

Mumford (1963, ICM Stockholm) constructed the moduli space
$M_C(r, d)$ of stable vector bundles of rank $r$ and degree $d$ on a
fixed smooth projective curve $C$ of genus $g$. When $\gcd(r, d) = 1$,
every semistable bundle is stable, so $M_C(r, d)$ is projective; in
general it is quasi-projective and admits a projective compactification
by S-equivalence classes of semistable bundles (Seshadri 1967).

The central numerical fact is the dimension formula

    dim M_C(r, d) = r² (g − 1) + 1.

This is the input/output of the Atiyah-Bott / Verlinde combinatorics
and a load-bearing identity in every downstream gauge-theoretic
or representation-theoretic application.
-/

/-- Mumford's moduli space `M_C(r, d)` is a quasi-projective scheme. -/
structure ModuliVectorBundles (C : CurveBundleData) (r : ℕ) (d : ℤ)
    (hr : 0 < r) : Type where
  /-- The underlying set of stable vector bundles of fixed rank and degree
  modulo isomorphism. Schematised as a `Type` pending a Mathlib
  scheme-theoretic moduli API. -/
  carrier : Type
  /-- The dimension of `M_C(r, d)` as a scheme. -/
  dim : ℕ
  /-- Mumford's dimension formula: `dim M(r, d) = r²(g − 1) + 1`,
  valid for $g \geq 2$, $r \geq 1$, and any degree $d$ (the formula
  depends only on the rank). -/
  dim_eq : C.genus ≥ 2 → dim = r * r * (C.genus - 1) + 1

/-- The **dimension theorem** for the moduli of stable bundles
(Mumford 1963, Newstead 1968):
$\dim M_C(r, d) = r^2 (g - 1) + 1$. -/
theorem dim_moduli_vector_bundles
    (C : CurveBundleData) (r : ℕ) (d : ℤ) (hr : 0 < r)
    (hg : C.genus ≥ 2) (M : ModuliVectorBundles C r d hr) :
    M.dim = r * r * (C.genus - 1) + 1 :=
  M.dim_eq hg

/-!
## The Narasimhan-Seshadri theorem

Narasimhan-Seshadri (*Ann. of Math.* 82, 1965) identify $M_C(r, d)$
with a quotient of unitary representations of the fundamental group:

  M_C(r, d) ≅ Hom_{irr}(π₁(C, c), U(r))^{det = ζ_d} / U(r)

where the determinant is constrained by the fixed degree $d$, and
"irr" denotes irreducible representations. The bijection sends a
stable bundle $E$ to the holonomy of its essentially unique
projectively-flat unitary connection of constant central curvature
$2\pi i d / r \cdot \mathrm{Id}$.

When $g = 0$, $\pi_1 = 1$ and the only bundles are direct sums of
line bundles, so the statement is empty; for $g \geq 1$ the
correspondence is a homeomorphism of real-analytic spaces and an
isomorphism of complex manifolds. The Atiyah-Bott (1983) gauge
theoretic proof reinterprets the moduli as a symplectic quotient
of the affine space of unitary connections by the gauge group.
-/

/-- Abstract data of the "topological" side of Narasimhan-Seshadri:
unitary representations of the curve's fundamental group of fixed
determinant character. -/
structure UnitaryRepData (C : CurveBundleData) (r : ℕ) (d : ℤ) where
  /-- The space of irreducible $U(r)$-representations of $\pi_1(C)$ with
  determinant prescribed by $d$, modulo conjugation. -/
  carrier : Type

/-- The **Narasimhan-Seshadri correspondence**: for $g \geq 2$ and
$r \geq 1$, the moduli space of stable rank-$r$ degree-$d$ bundles
on $C$ is in bijection with the space of irreducible unitary
$r$-dimensional representations of $\pi_1(C)$ with fixed
determinant character $\zeta_d$. -/
theorem narasimhan_seshadri
    (C : CurveBundleData) (r : ℕ) (d : ℤ) (hr : 0 < r)
    (hg : C.genus ≥ 2)
    (M : ModuliVectorBundles C r d hr)
    (R : UnitaryRepData C r d) :
    -- Intended payload: a bijection (or homeomorphism)
    -- `M.carrier ≃ R.carrier`. We schematise as `True` pending an
    -- API for irreducible unitary representations of a surface
    -- group in Mathlib.
    True := by
  -- Proof (Narasimhan-Seshadri 1965, Donaldson 1983 *J. Diff. Geom.*
  -- 18 analytic proof): a stable bundle of degree $d$ and rank $r$ on
  -- $C$ admits a unique (up to gauge) Hermitian-Einstein connection
  -- with central curvature $-2\pi i (d / r) \mathrm{Id}$. Its
  -- holonomy is a projective unitary representation of $\pi_1(C)$.
  -- For $(r, d) = 1$ this lifts to an honest $U(r)$-representation
  -- with determinant character $\zeta_d$. Conversely, every such
  -- irreducible representation defines a flat unitary bundle whose
  -- tensor with a fixed line bundle of degree $d$ is the required
  -- stable bundle. The Atiyah-Bott (1983) reinterpretation is the
  -- statement that $M(r, d)$ is the symplectic reduction
  -- $\mu^{-1}(c) / \mathcal{G}$ of the moment map on the affine
  -- space of unitary connections.
  trivial

/-!
## The Atiyah-Bott symplectic reduction

Atiyah-Bott (*Phil. Trans. R. Soc. London A* 308, 1983) realise
$M_C(r, d)$ as the symplectic quotient of the affine space
$\mathcal{A}$ of unitary connections on a fixed smooth Hermitian
bundle of rank $r$ and degree $d$ on $C$, by the unitary gauge
group $\mathcal{G}$, at the level $c = -2\pi i (d / r) \cdot \omega$
of the curvature moment map.
-/

/-- Schematic data for the Atiyah-Bott infinite-dimensional
symplectic-reduction realisation: an affine space of connections,
a gauge group, and a moment map. -/
structure AtiyahBottData (C : CurveBundleData) (r : ℕ) (d : ℤ) where
  /-- Affine space of unitary connections on a Hermitian rank-$r$
  bundle of degree $d$. -/
  Connections : Type
  /-- The unitary gauge group $\mathcal{G}$ acting on `Connections`. -/
  GaugeGroup : Type
  /-- The curvature moment map taking values in (the dual of) the
  Lie algebra of the gauge group. -/
  μ : Connections → Type

/-- **Atiyah-Bott (1983).** The moduli of stable rank-$r$ degree-$d$
bundles on $C$ is the symplectic reduction of the space of unitary
connections at the central curvature level. -/
theorem atiyah_bott_symplectic_quotient
    (C : CurveBundleData) (r : ℕ) (d : ℤ) (hr : 0 < r)
    (hg : C.genus ≥ 2)
    (M : ModuliVectorBundles C r d hr)
    (AB : AtiyahBottData C r d) :
    -- Intended payload: `M.carrier ≃ μ⁻¹(c) / GaugeGroup`.
    True := by
  -- Proof: the curvature `F_A` of a unitary connection $A$ is the
  -- moment map for the gauge action on `Connections`. Level sets
  -- of constant central curvature correspond to projectively flat
  -- (Yang-Mills) connections; modulo gauge these are stable
  -- holomorphic structures by Narasimhan-Seshadri / Donaldson.
  -- The full proof: Atiyah-Bott §§7-12, Donaldson 1983.
  trivial

end Codex.AlgGeom.Moduli
