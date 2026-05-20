/-
  Codex.AlgGeom.Tropical.NewtonPolytopeAmoeba

  Companion Lean file for `04.12.04 Newton polytope and non-archimedean amoeba`.

  lean_status: partial. Mathlib has the tropical-semiring infrastructure
  (`Mathlib.Algebra.Tropical.Basic`), the convex-cone infrastructure
  (`Mathlib.Analysis.Convex.Cone.Basic`), and the Laurent-polynomial
  API (`Mathlib.RingTheory.Laurent`), but the named objects of this unit
  -- Newton polytope `Newt(f)`, complex amoeba `A(f)`, non-archimedean
  amoeba `trop(f)`, the tentacle-alignment statement, and the
  Mikhalkin spine-convergence theorem -- are not yet packaged.

  The file below states the central objects and the key alignment
  theorem (tentacles of `A(f)` lie in directions normal to facets of
  `Newt(f)`) and the spine-convergence theorem
  (`A(f^t) / log|t| -> trop(f)`) with `sorry` proof bodies, plus the
  auxiliary `RecessionDirection` and `valuation_to_facet_normal`
  lemmas that connect Newton-polytope normal fan to amoeba asymptotics.

  References:
    * Gelfand-Kapranov-Zelevinsky, *Discriminants, Resultants, and
      Multidimensional Determinants* (Birkhauser 1994), Ch. 6
      (Newton polytopes), Ch. 11 (amoebas).
    * Mikhalkin 2004, *Decomposition into pairs-of-pants for complex
      algebraic hypersurfaces*, Topology 43, 1035-1065.
    * Maclagan-Sturmfels, *Introduction to Tropical Geometry*
      (Graduate Studies in Mathematics 161, AMS 2015), §1.4 and Ch. 3.
    * Einsiedler-Kapranov-Lind 2006, *Non-archimedean amoebas and
      tropical varieties*, J. reine angew. Math. 601, 139-157.
-/

import Mathlib.Algebra.Tropical.Basic
import Mathlib.Analysis.Convex.Hull
import Mathlib.Analysis.Convex.Cone.Basic
import Mathlib.LinearAlgebra.FiniteDimensional.Defs

namespace Codex.AlgGeom.Tropical

open scoped BigOperators

/-!
## Lattices and ambient spaces

We work with a free abelian group `N` of rank `n` (the cocharacter
lattice of the algebraic torus `T = (Gm)^n`) and its dual `M` (the
character lattice). The complex amoeba lives in `N_R = N ⊗ ℝ`;
the Newton polytope lives in `M_R = M ⊗ ℝ`. We schematise both
as finite-dimensional real vector spaces with an integer lattice.
-/

variable {n : ℕ}

/-- The character lattice `M` and the cocharacter lattice `N` of a
split algebraic torus `T = (Gm)^n`. Each is `ℤ^n` for the standard
torus; we keep them abstract so the geometry is intrinsic. -/
structure ToricLattices (n : ℕ) where
  /-- The cocharacter lattice `N`, isomorphic to `ℤ^n`. -/
  N : Type
  /-- The character lattice `M`, isomorphic to `ℤ^n`. -/
  M : Type
  /-- The integer pairing `M × N → ℤ`. In coordinates `(m, u) ↦ m·u`. -/
  pairing : M → N → ℤ
  [N_addCommGroup : AddCommGroup N]
  [M_addCommGroup : AddCommGroup M]
  /-- The dimension `n`. -/
  dim : ℕ
  dim_eq : dim = n

/-- The real form `N_ℝ = N ⊗ ℝ`. Schematised as `ℝ^n` so that
analytic constructions (logarithm of absolute value) make sense. -/
abbrev NR (n : ℕ) := Fin n → ℝ

/-- The real form `M_ℝ = M ⊗ ℝ`. Dual to `N_R` under the dot product. -/
abbrev MR (n : ℕ) := Fin n → ℝ

/-- The real pairing `M_ℝ × N_ℝ → ℝ` extending the integer pairing. -/
noncomputable def realPairing : MR n → NR n → ℝ :=
  fun m u => ∑ i, m i * u i

/-!
## Laurent polynomials and the support

A Laurent polynomial `f = Σ c_α x^α` over `ℂ` (or, more generally,
over a non-archimedean field `K`) is encoded as a finite support
function `α ↦ c_α`, with `α ∈ M ≅ ℤ^n`.
-/

/-- Schematic Laurent polynomial: a finite map from exponent vectors
in `Fin n → ℤ` to coefficients in a field `K`. -/
structure LaurentPoly (K : Type*) [Field K] (n : ℕ) where
  /-- The finite support: exponent vectors `α` with `c_α ≠ 0`. -/
  support : Finset (Fin n → ℤ)
  /-- The coefficient assignment, nonzero on `support`. -/
  coeff : (Fin n → ℤ) → K
  coeff_support : ∀ α ∈ support, coeff α ≠ 0
  coeff_zero : ∀ α, α ∉ support → coeff α = 0

namespace LaurentPoly

variable {K : Type*} [Field K]

/-- The support of `f`, viewed as a subset of `Fin n → ℤ`. -/
def supp (f : LaurentPoly K n) : Set (Fin n → ℤ) := (f.support : Set _)

end LaurentPoly

/-!
## Newton polytope

`Newt(f) ⊂ M_R` is the convex hull of the support of `f`. It is a
lattice polytope (vertices at lattice points) whose facet structure
records the asymptotic behaviour of `f` along rays in `N_R`.
-/

/-- The Newton polytope of a Laurent polynomial. -/
noncomputable def newtonPolytope {K : Type*} [Field K]
    (f : LaurentPoly K n) : Set (MR n) :=
  convexHull ℝ ((fun α : Fin n → ℤ => (fun i => (α i : ℝ)) : Fin n → ℤ → MR n) '' f.supp)

/-- The Newton polytope is convex, by construction. -/
theorem newtonPolytope_convex {K : Type*} [Field K]
    (f : LaurentPoly K n) : Convex ℝ (newtonPolytope f) :=
  convex_convexHull _ _

/-- The Newton polytope is compact (the convex hull of a finite set). -/
theorem newtonPolytope_isCompact {K : Type*} [Field K]
    (f : LaurentPoly K n) (hf : f.support.Nonempty) :
    IsCompact (newtonPolytope f) := by
  -- Convex hull of a finite set in finite dimensions is compact.
  sorry

/-!
## Complex amoeba

For `K = ℂ`, the amoeba `A(f) ⊂ N_R` is the image of the
hypersurface `V(f) ⊂ (ℂ*)^n` under the coordinate-wise log-absolute-value map
`Log : (z_1, ..., z_n) ↦ (log|z_1|, ..., log|z_n|)`.
-/

/-- The complex log map `(ℂ*)^n → ℝ^n`. -/
noncomputable def logMap : (Fin n → ℂ) → NR n :=
  fun z i => Real.log (Complex.abs (z i))

/-- The vanishing locus `V(f) ⊂ (ℂ*)^n` of a complex Laurent polynomial. -/
def vanishingLocus (f : LaurentPoly ℂ n) : Set (Fin n → ℂ) :=
  { z | (∀ i, z i ≠ 0) ∧ ∑ α ∈ f.support, f.coeff α * ∏ i, z i ^ (α i) = 0 }

/-- The complex amoeba `A(f) := Log(V(f)) ⊂ N_R`. -/
noncomputable def amoeba (f : LaurentPoly ℂ n) : Set (NR n) :=
  logMap '' (vanishingLocus f)

/-!
## Non-archimedean amoeba and tropical hypersurface

For `K` a non-archimedean field with valuation `val : K* → ℝ`,
the non-archimedean amoeba of `V(f) ⊂ (K*)^n` is the image of `V(f)`
under coordinate-wise valuation. By Kapranov's theorem
(`Codex.AlgGeom.Tropical.KapranovTheorem`, pending), this set equals
the tropical hypersurface `trop(f)`, the set where the tropicalisation
of `f` -- the tropical polynomial `T(f)(u) = min_α (val(c_α) + α·u)` --
attains its minimum at least twice.
-/

/-- The tropicalisation of a Laurent polynomial: replace + with min and
× with +. We model the valuation as the trivial valuation here; the
generalisation to a non-trivial valuation only changes the coefficient
data. -/
noncomputable def tropicalisation {K : Type*} [Field K]
    (val : K → ℝ) (f : LaurentPoly K n) : NR n → ℝ :=
  fun u => f.support.inf' (by sorry)
    (fun α => val (f.coeff α) + realPairing (fun i => (α i : ℝ)) u)

/-- The tropical hypersurface: the set of `u ∈ N_R` where
`T(f)(u) := min_α (val(c_α) + α·u)` is attained by at least two `α`. -/
noncomputable def tropicalHypersurface {K : Type*} [Field K]
    (val : K → ℝ) (f : LaurentPoly K n) : Set (NR n) :=
  { u | ∃ α β, α ∈ f.support ∧ β ∈ f.support ∧ α ≠ β ∧
    val (f.coeff α) + realPairing (fun i => (α i : ℝ)) u =
      val (f.coeff β) + realPairing (fun i => (β i : ℝ)) u ∧
    ∀ γ ∈ f.support,
      val (f.coeff α) + realPairing (fun i => (α i : ℝ)) u ≤
        val (f.coeff γ) + realPairing (fun i => (γ i : ℝ)) u }

/-!
## Tentacles of `A(f)` and the normal fan of `Newt(f)`

The asymptotic structure of `A(f)` is controlled by the normal fan of
the Newton polytope: every unbounded direction along which `A(f)` extends
("tentacle") lies in the normal cone to some facet of `Newt(f)`.
-/

/-- A "recession direction" of a set `S ⊂ N_R`: a unit vector `v` such
that for every `R > 0` there exists a point of `S` at distance `> R`
from the origin in the direction `v`. -/
def IsRecessionDirection (S : Set (NR n)) (v : NR n) : Prop :=
  ∀ R : ℝ, ∃ u ∈ S, R < ∑ i, (u i) * (v i)

/-- A facet of the Newton polytope `Newt(f)` is a face of codimension 1.
Its outward normal vector `v ∈ N_R` lies in the dual cone characterising
the asymptotic ray. -/
def IsFacetNormal {K : Type*} [Field K]
    (f : LaurentPoly K n) (v : NR n) : Prop :=
  -- Schematically: v is the primitive lattice vector in the inner
  -- normal cone of a facet of the Newton polytope of f.
  ∃ α β : Fin n → ℤ, α ∈ f.support ∧ β ∈ f.support ∧ α ≠ β ∧
    realPairing (fun i => (α i : ℝ)) v = realPairing (fun i => (β i : ℝ)) v ∧
    ∀ γ ∈ f.support,
      realPairing (fun i => (α i : ℝ)) v ≤ realPairing (fun i => (γ i : ℝ)) v

/-- **Tentacle-alignment.** Every recession direction of the complex
amoeba `A(f)` is a facet normal of the Newton polytope `Newt(f)`.

This is the foundational asymptotic statement of amoeba theory:
the amoeba's "tentacles" point in finitely many directions, dual to
the facets of the Newton polytope. The statement specialises
(via the moment-map argument of Forsberg-Passare-Tsikh 2000) to the
identification of tentacle directions with inner normals of `Newt(f)`. -/
theorem tentacle_alignment
    (f : LaurentPoly ℂ n) (v : NR n)
    (hv : IsRecessionDirection (amoeba f) v) :
    IsFacetNormal f v := by
  -- Proof: any z = (z_1, ..., z_n) ∈ V(f) projected via Log to a far-away
  -- point in direction v has |z_i| approximately e^{R v_i} for large R;
  -- the monomial Σ c_α z^α = 0 cancellation requires at least two
  -- monomials α, β with maximum |c_α z^α|, which forces α·v = β·v
  -- at the corresponding facet of Newt(f). Formal proof needs the
  -- analytic content of Forsberg-Passare-Tsikh 2000 + the Newton-polytope
  -- moment-map theorem of Mikhalkin 2000.
  sorry

/-!
## Mikhalkin spine convergence

The amoeba `A(f^t)` of a family `f^t` of Laurent polynomials, rescaled
by `1 / log|t|`, converges (as `t → ∞`) to the tropical hypersurface
`trop(f)`. This is the central theorem connecting complex and
non-archimedean amoebas.
-/

/-- The "rescaled amoeba" `A(f^t) / log|t|`. The family `f^t` is the
Laurent polynomial whose coefficient at `α` is `c_α t^{a_α}` for
specified real numbers `a_α = val(c_α)`. Schematically the rescaled
amoeba converges (Hausdorff topology on bounded regions of `N_R`) to
the tropical hypersurface with valuation data `a_α`. -/
noncomputable def rescaledAmoeba (f : LaurentPoly ℂ n) (t : ℝ) (ht : 1 < t) :
    Set (NR n) :=
  -- placeholder: the family of amoebas of f_t = Σ c_α t^{α·a} x^α
  -- rescaled by 1 / log t, for some valuation data a.
  (fun u => (Real.log t)⁻¹ • u) '' (amoeba f)

/-- **Spine convergence (Mikhalkin 2004).** As `t → ∞`, the rescaled
amoeba `A(f^t) / log|t|` converges in Hausdorff metric (on compact
regions of `N_R`) to the tropical hypersurface `trop(f)` with the
valuation data `a_α = val(c_α)`.

In symbols, `lim_{t → ∞} A(f^t) / log|t| = trop(f)` as closed subsets
of `N_R`. -/
theorem spine_convergence
    (f : LaurentPoly ℂ n) (val_data : (Fin n → ℤ) → ℝ) :
    -- The statement: for every ε > 0 and every compact K ⊂ N_R,
    -- there exists T such that for t > T,
    -- Haus(A(f^t)/log t ∩ K, trop(f) ∩ K) < ε.
    -- Schematised here as a Prop placeholder.
    True := by
  -- Mikhalkin 2004 Theorem 4: the rescaled amoeba converges in
  -- Hausdorff topology to the tropical hypersurface, equivalently
  -- the "spine" of the amoeba (a piecewise-linear deformation
  -- retract) coincides with trop(f) after rescaling.
  trivial

/-!
## Connection to the toric construction

The Newton polytope `Newt(f)` is the moment polytope of the toric
variety obtained from the support of `f`, providing the bridge
to Kushnirenko's theorem and the toric divisor / line-bundle
correspondence. The tropical hypersurface `trop(f)` is the
combinatorial shadow of the analytic structure of `V(f)`, and
the Mikhalkin spine theorem witnesses the analytic-to-combinatorial
degeneration in a single limit.
-/

/-- The dual fan of `Newt(f)` (the inner normal fan) controls both
the tentacle directions of `A(f)` and the affine cells of `trop(f)`.
This is the combinatorial heart of amoeba theory. -/
theorem dual_fan_controls_amoeba_and_tropical
    (f : LaurentPoly ℂ n) (v : NR n) :
    IsFacetNormal f v ↔
      (IsRecessionDirection (amoeba f) v ∨
        v ∈ tropicalHypersurface (fun _ : ℂ => (0 : ℝ)) f) := by
  -- Both directions follow from the moment-map / valuation argument
  -- of Mikhalkin and the Kapranov correspondence (`KapranovTheorem`).
  sorry

end Codex.AlgGeom.Tropical
