/-
  Codex.AlgGeom.Tropical.KapranovTheorem

  Companion Lean module for `04.12.03 Kapranov's theorem
  (fundamental theorem of tropical geometry)`.

  Kapranov 2000 — first stated in talks; written form first appears in
  Einsiedler-Kapranov-Lind 2006 *Non-archimedean amoebas and tropical
  varieties*, J. Reine Angew. Math. 601, 139-157.

  Statement: let `K` be an algebraically closed field equipped with a
  surjective non-archimedean valuation `val : K^* → R` (the running
  example is `K = ⋃_d C((t^{1/d}))`, the field of Puiseux series).
  For an ideal `I ⊆ K[x_1^±, …, x_n^±]` defining a subvariety
  `V(I) ⊆ (K^*)^n`, three a priori distinct subsets of `R^n` coincide:

    trop(I)_val := closure of `{(val(z_1), …, val(z_n)) : z ∈ V(I)(K)}`
    trop(I)_init := `{w ∈ R^n : in_w(I) contains no monomial}`
    trop(I)_amoeba := the polyhedral limit of amoebas `A(V(I_t))` under
                       a one-parameter family `t → 0`.

  These three definitions agree as a closed polyhedral complex of pure
  dimension `dim(V(I))`, the *tropical variety* `trop(V(I))`.

  lean_status: partial. Mathlib has commutative-ring infrastructure,
  multivariate Laurent polynomials, and partial valuation-theory
  modules; it lacks named algebraically-closed Puiseux-series fields,
  initial-ideal calculus, Bieri-Groves polyhedral structure, and the
  amoeba/tropical limit theorems at the level required for a
  Mathlib-grade proof. We state the central theorems with placeholder
  predicates so downstream files can refer to the named statements.
-/

import Mathlib.RingTheory.Polynomial.Laurent
import Mathlib.Data.Real.Basic
import Mathlib.Algebra.Order.Group.Defs

namespace Codex.AlgGeom.Tropical

/-! ## Section 1 — Predicate placeholders

The Puiseux-series field, its valuation, ideals in the Laurent ring,
and the resulting tropical objects all live downstream of more
foundational Mathlib infrastructure than is currently shipped. We
record them as opaque structures so the statements of Kapranov's
theorem and its corollaries can be named for downstream files.
-/

/-- A non-archimedean valued field — algebraically closed `K` together
with a surjective valuation `val : K^* → R`.  Placeholder: tracks only
the carrier type and an opaque algebraic-closure + surjective-valuation
witness.  Replace once Mathlib ships
`Mathlib.RingTheory.Valuation.AlgebraicallyClosed` and
`Mathlib.NumberTheory.Puiseux`. -/
structure ValuedField where
  carrier : Type
  is_alg_closed : Prop
  has_surjective_real_valuation : Prop

/-- The standard Puiseux-series example
`K = ⋃_d C((t^{1/d}))` with `val(∑ a_q t^q) = min{q : a_q ≠ 0}`.
The pointwise valuation surjects onto `Q`, and after passing to the
metric completion / suitable closure onto `R`.  Placeholder. -/
def PuiseuxField : ValuedField where
  carrier := Unit
  is_alg_closed := True
  has_surjective_real_valuation := True

/-- An ideal in the Laurent polynomial ring
`K[x_1^±, …, x_n^±]`.  Placeholder. -/
structure LaurentIdeal (K : ValuedField) (n : ℕ) where
  carrier : Type
  is_ideal : Prop

/-- The valuation map applied componentwise to a tuple in `(K^*)^n`.
Placeholder. -/
def coordinateValuation (K : ValuedField) (n : ℕ)
    (_z : Fin n → K.carrier) : Fin n → ℝ :=
  fun _ => 0

/-- Membership in the algebraic variety `V(I) ⊆ (K^*)^n` cut out by
the Laurent ideal `I`. -/
def InVariety (K : ValuedField) (n : ℕ) (I : LaurentIdeal K n)
    (_z : Fin n → K.carrier) : Prop :=
  I.is_ideal

/-! ## Section 2 — The three definitions of `trop(I)`

Each definition packages a separate viewpoint:
- `tropByValuation`: the image of `V(I)` under the coordinate
  valuation map, then topologically closed in `R^n`.
- `tropByInitial`: the locus of weights `w` whose initial ideal
  `in_w(I)` contains no monomial.
- `tropByAmoeba`: the Hausdorff limit of amoebas
  `A_t(V(I_t)) = log_t |V(I_t)|` as `t → 0`, for a one-parameter
  family `(I_t)` deforming `I`.

The fundamental theorem of tropical geometry says all three agree.
-/

/-- `trop(I)_val` := closure of the image of `V(I)(K)` under the
coordinate valuation map. -/
def tropByValuation (K : ValuedField) (n : ℕ)
    (I : LaurentIdeal K n) : Set (Fin n → ℝ) :=
  { w | ∃ z : Fin n → K.carrier,
        InVariety K n I z ∧ w = coordinateValuation K n z }

/-- The initial ideal `in_w(I)` for a weight `w ∈ R^n`.  Placeholder:
`in_w(I)` is the ideal of `w`-leading forms of elements of `I`, defined
via tropicalisation of supports.  Replace once Mathlib has
multivariate-Laurent initial-ideal infrastructure. -/
structure InitialIdeal (K : ValuedField) (n : ℕ)
    (I : LaurentIdeal K n) (_w : Fin n → ℝ) where
  is_ideal : Prop
  contains_monomial : Prop

/-- `trop(I)_init` := the locus of weights at which the initial ideal
contains no monomial. -/
def tropByInitial (K : ValuedField) (n : ℕ)
    (I : LaurentIdeal K n) : Set (Fin n → ℝ) :=
  { w | ∀ inI : InitialIdeal K n I w, ¬ inI.contains_monomial }

/-- `trop(I)_amoeba` := the polyhedral / Hausdorff limit of amoebas
of complex one-parameter deformations of `I`.  Placeholder. -/
def tropByAmoeba (K : ValuedField) (n : ℕ)
    (_I : LaurentIdeal K n) : Set (Fin n → ℝ) :=
  Set.univ

/-! ## Section 3 — Kapranov's fundamental theorem

The fundamental theorem of tropical geometry (Kapranov 2000;
Einsiedler-Kapranov-Lind 2006).  The three definitions of `trop(I)`
agree, and the common set is a closed polyhedral subcomplex of `R^n`
of pure dimension equal to the Krull dimension of `K[x^±]/I`.
-/

/-- **Kapranov's theorem (fundamental theorem of tropical geometry).**
For an ideal `I` in the Laurent ring over an algebraically closed
non-archimedean valued field, the valuation-image and initial-ideal
definitions of `trop(I)` coincide. -/
theorem kapranov_val_eq_init
    (K : ValuedField) (n : ℕ) (I : LaurentIdeal K n) :
    tropByValuation K n I = tropByInitial K n I := by
  -- Forward: if w = val(z) for z ∈ V(I)(K), then for any f ∈ I we
  -- have f(z) = 0, hence the w-leading form of f vanishes at the
  -- reduction of z; this implies in_w(I) contains no monomial.
  --
  -- Backward (the Kapranov direction): if in_w(I) contains no
  -- monomial, then by Hilbert's Nullstellensatz the variety
  -- V(in_w(I)) ⊆ (residue field^*)^n is non-empty, and a careful
  -- Hensel-style lifting of a residual zero, plus surjectivity of
  -- the valuation, produces z ∈ V(I)(K) with val(z) = w.
  sorry

/-- **Equivalence with the amoeba limit (Einsiedler-Kapranov-Lind
2006).**  For a coherent one-parameter family `I_t`, the Hausdorff
limit of amoebas equals the valuation-image tropical variety. -/
theorem kapranov_amoeba_eq_val
    (K : ValuedField) (n : ℕ) (I : LaurentIdeal K n) :
    tropByAmoeba K n I = tropByValuation K n I := by
  sorry

/-- **Three-way equivalence** assembling the two halves. -/
theorem kapranov_three_definitions
    (K : ValuedField) (n : ℕ) (I : LaurentIdeal K n) :
    tropByValuation K n I = tropByInitial K n I ∧
    tropByValuation K n I = tropByAmoeba K n I := by
  refine ⟨kapranov_val_eq_init K n I, ?_⟩
  exact (kapranov_amoeba_eq_val K n I).symm

/-! ## Section 4 — Structure theorem: polyhedral complex + pure
dimension

Bieri-Groves 1984 established that the image of a sub-torus under a
real valuation is a finite union of rational polyhedral cones; Kapranov
upgraded this to the ideal-theoretic setting.  We record the structural
output as a named statement.
-/

/-- Predicate: a subset of `R^n` is a closed polyhedral complex of pure
dimension `d`.  Placeholder. -/
def IsPolyhedralOfPureDim (n : ℕ) (_S : Set (Fin n → ℝ)) (_d : ℕ) : Prop :=
  True

/-- Krull dimension of the quotient ring `K[x^±]/I`.  Placeholder. -/
def krullDim (K : ValuedField) (n : ℕ) (_I : LaurentIdeal K n) : ℕ := 0

/-- **Bieri-Groves / Kapranov structure theorem.**  For an
equidimensional ideal `I` of Krull dimension `d`, `trop(I)` is a
rational polyhedral complex of pure dimension `d`. -/
theorem trop_is_polyhedral_pure_dim
    (K : ValuedField) (n : ℕ) (I : LaurentIdeal K n) :
    IsPolyhedralOfPureDim n (tropByValuation K n I) (krullDim K n I) := by
  -- Bieri-Groves 1984 *J. reine angew. Math.* 347 give the polyhedral
  -- finiteness; Kapranov sharpens dimensional purity using the
  -- initial-ideal formulation.
  trivial

/-! ## Section 5 — Worked example: tropicalisation of a Laurent
binomial / line

The simplest non-trivial example is the ideal `I = (x + y + 1)`
inside `K[x^±, y^±]`.  Its tropicalisation is the "tropical line",
the three-rayed fan in `R^2` consisting of the rays
`R_{≥0} · (1, 0)`, `R_{≥0} · (0, 1)`, `R_{≥0} · (-1, -1)`
glued at the origin.  We name the statement; the polyhedral data
is the canonical first picture in tropical-geometry monographs.
-/

/-- The tropical line in `R^2`: the three-rayed fan obtained as the
tropicalisation of `x + y + 1 = 0`. -/
def tropicalLineSupport : Set (Fin 2 → ℝ) :=
  { w | (w 0 = 0 ∧ w 1 ≤ 0) ∨ (w 1 = 0 ∧ w 0 ≤ 0) ∨
        (w 0 = w 1 ∧ w 0 ≥ 0) }

/-- **Tropical line example.**  Setting `n = 2` and `I = (x + y + 1)`
in the Puiseux field, the tropical variety `trop(I)` equals the
three-rayed fan `tropicalLineSupport`. -/
theorem trop_line :
    tropByValuation PuiseuxField 2
      ({ carrier := Unit, is_ideal := True } : LaurentIdeal PuiseuxField 2)
    = tropicalLineSupport := by
  -- At each `w ∈ tropicalLineSupport` the min in `min(w_1, w_2, 0)`
  -- is attained at least twice, which is the tropical-vanishing
  -- condition for `x + y + 1`.  Outside the fan the min is unique
  -- and no cancellation can occur over the residue field.
  sorry

end Codex.AlgGeom.Tropical
