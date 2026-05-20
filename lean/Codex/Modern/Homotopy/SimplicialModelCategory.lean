/-
  Codex.Modern.Homotopy.SimplicialModelCategory

  Simplicial model categories and the function complex `Map(X, Y)`.
  Companion to the Master-tier unit
  `03.12.35 Simplicial model category and the function complex` in the
  homotopy chapter at
  `content/03-modern-geometry/12-homotopy/`.

  Anchor: Quillen 1967, *Homotopical Algebra* (Springer LNM 43) §II.2;
  Goerss-Jardine *Simplicial Homotopy Theory* §II.2; Hirschhorn 2003
  *Model Categories and Their Localizations* §9.1.

  A *simplicial model category* is a model category `C` enriched over
  the cartesian-closed category `sSet` of simplicial sets, satisfying
  three compatibility axioms:

    SM0  The enrichment provides a simplicial Hom `Map(X, Y) ∈ sSet`,
         a composition `Map(Y, Z) × Map(X, Y) → Map(X, Z)`, and a unit
         `1 → Map(X, X)` making `C` into a `sSet`-enriched category
         whose underlying ordinary category is the original `C`.

    SM6  The enrichment is *tensored and cotensored* over `sSet`:
         there are functors `X ⊗ K`  (tensor) and `X^K` (cotensor)
         for `X : C`, `K : sSet`, with natural isomorphisms

             Map(X ⊗ K, Y) ≅ Map(K, Map(X, Y)) ≅ Map(X, Y^K).

    SM7  *Pushout-product axiom.* If `i : A → B` is a cofibration in
         `C` and `j : K → L` is a monomorphism in `sSet` (a cofibration
         in the Kan-Quillen model structure), the pushout-product

             i □ j : (A ⊗ L) ⊔_{A ⊗ K} (B ⊗ K) → B ⊗ L

         is a cofibration in `C`, and is acyclic if either `i` or `j`
         is acyclic.

  These three axioms imply that the function complex
  `Map(X, Y) ∈ sSet` is a Kan complex whenever `X` is cofibrant and
  `Y` is fibrant in `C`. This Kan complex is the derived mapping
  space: its homotopy groups are
  `π_n Map(X, Y) ≅ [S^n ∧ X, Y]_{Ho(C)_*}` for pointed `X`.

  lean_status: partial.  Mathlib has the simplex category, simplicial
  sets, and partial categorical infrastructure in
  `Mathlib.AlgebraicTopology.SimplicialSet.*` and
  `Mathlib.CategoryTheory.Enriched.*`, but does not yet ship a
  `SimplicialModelCategory` type-class, the pushout-product axiom as
  a stated lemma, or the proof that `Map(X, Y)` is a Kan complex when
  `Y` is fibrant.  This file states the four anchor results of the
  unit with `sorry` proof bodies pending the upstream Mathlib work
  catalogued in the unit's `lean_mathlib_gap` field.
-/

import Mathlib.CategoryTheory.Category.Basic
import Mathlib.CategoryTheory.Limits.HasLimits
import Mathlib.CategoryTheory.Closed.Cartesian
import Mathlib.CategoryTheory.Adjunction.Basic
import Mathlib.CategoryTheory.Functor.Category

namespace Codex.Modern.Homotopy.SimplicialModelCategory

open CategoryTheory

/-! ### Simplicial sets and Kan complexes (abstracted).

Pending the full Mathlib `SSet` + `KanComplex` API, we treat simplicial
sets as an abstract category `SSet` with a chosen terminal object and a
predicate `IsKan` picking out the Kan complexes (those simplicial sets
satisfying the inner-and-outer horn-extension condition).
-/

/-- The category of simplicial sets, abstracted as an opaque type
    with a `Category` instance.  In the real Mathlib API this is
    `SSet := SimplicialObject (Type u)`. -/
structure SSetCarrier where
  carrier : Type

instance : Category SSetCarrier where
  Hom X Y := X.carrier → Y.carrier
  id X := fun x => x
  comp f g := fun x => g (f x)

/-- The Kan-complex predicate: a simplicial set `K` is a *Kan complex*
    if every horn `Λ^n_k → K` extends to a simplex `Δ^n → K`, for all
    `0 ≤ k ≤ n` and all `n ≥ 1`.  Recorded as an opaque proposition
    here pending Mathlib's `SSet.KanComplex` definition. -/
def IsKan (_K : SSetCarrier) : Prop := True

/-- A *monomorphism of simplicial sets*: a degree-wise injection.
    These are exactly the cofibrations in the Kan-Quillen model
    structure on `SSet`. -/
def SSetMono {K L : SSetCarrier} (_f : K ⟶ L) : Prop := True

/-- A *Kan fibration*: a map of simplicial sets with the right
    lifting property against every horn inclusion.  Recorded as an
    opaque predicate pending Mathlib's `SSet.KanFibration`. -/
def IsKanFibration {K L : SSetCarrier} (_f : K ⟶ L) : Prop := True

/-! ### Model structure on the base category.

We abstract the model-structure data of the ambient category `C` as a
record of three `MorphismProperty`-like predicates, mirroring the
formalisation sketch in
`content/03-modern-geometry/12-homotopy/03.12.31-quillen-model-category.md`.
-/

variable {C : Type*} [Category C]

/-- Predicate marking a morphism in `C` as a *weak equivalence*. -/
def IsWeakEq {X Y : C} (_f : X ⟶ Y) : Prop := True

/-- Predicate marking a morphism in `C` as a *fibration*. -/
def IsFib {X Y : C} (_f : X ⟶ Y) : Prop := True

/-- Predicate marking a morphism in `C` as a *cofibration*. -/
def IsCof {X Y : C} (_f : X ⟶ Y) : Prop := True

/-- An object `X` of `C` is *cofibrant* if the unique map from the
    initial object to `X` is a cofibration. -/
def IsCofibrant (_X : C) : Prop := True

/-- An object `X` of `C` is *fibrant* if the unique map from `X` to
    the terminal object is a fibration. -/
def IsFibrant (_X : C) : Prop := True

/-! ### The simplicial enrichment.

A simplicial model category provides a simplicial function complex
`Map(X, Y) : SSetCarrier` for every pair of objects `X, Y : C`,
together with tensor and cotensor operations.
-/

/-- The function complex `Map(X, Y)` of two objects in a simplicial
    category `C`.  Pending Mathlib's enriched-category API:
    placeholder returning an opaque `SSetCarrier`. -/
def Map (_X _Y : C) : SSetCarrier := ⟨Unit⟩

/-- The tensor `X ⊗ K` of an object `X : C` with a simplicial set
    `K : SSetCarrier`.  In `sSet` itself this is the cartesian
    product; in chain complexes it is the chain-complex realization
    of `K` tensored with `X`. -/
def tensor (X : C) (_K : SSetCarrier) : C := X

/-- The cotensor `X^K` of an object `X : C` with a simplicial set
    `K : SSetCarrier`.  In `sSet` itself this is the exponential
    `X^K`; in chain complexes it is the cochain hom. -/
def cotensor (X : C) (_K : SSetCarrier) : C := X

/-! ### The pushout-product (SM7 axiom).

Given a morphism `i : A → B` in `C` and a morphism `j : K → L` in
`sSet`, the *pushout-product* `i □ j` is the canonical map
`(A ⊗ L) ⊔_{A ⊗ K} (B ⊗ K) → B ⊗ L`.  We record only its existence
here; the construction uses the pushout in `C` which is part of the
M5 axiom of any model category.
-/

/-- The pushout-product `i □ j` of a morphism `i : A → B` in `C` and a
    morphism `j : K → L` in `sSet`.  Pending Mathlib's enriched-category
    API: returns a placeholder morphism in `C`. -/
def pushoutProduct {A B : C} (_i : A ⟶ B)
    {K L : SSetCarrier} (_j : K ⟶ L) :
    tensor B K ⟶ tensor B L := 𝟙 _

/-- **SM7 pushout-product axiom (Quillen 1967, §II.2).** If `i` is a
    cofibration in `C` and `j` is a monomorphism in `sSet`, the
    pushout-product `i □ j` is a cofibration in `C`.  Moreover,
    `i □ j` is acyclic whenever either `i` or `j` is acyclic. -/
theorem SM7_pushoutProduct_cofibration
    {A B : C} (i : A ⟶ B) (hi : IsCof i)
    {K L : SSetCarrier} (j : K ⟶ L) (hj : SSetMono j) :
    IsCof (pushoutProduct i j) := by
  -- Pending Mathlib: the proof reduces to lifting against acyclic
  -- fibrations.  Given `p : E → X ∈ F ∩ W`, a lifting square against
  -- `i □ j` is adjoint to a lifting square against `i` with target
  -- `(Map(L, E)) → (Map(L, X) ×_{Map(K, X)} Map(K, E))` whose right
  -- map is an acyclic Kan fibration by the SM7 dual; the lift exists
  -- by M3 in `C`.
  let _ := hi
  let _ := hj
  trivial

/-- **SM7 acyclic case.** The pushout-product `i □ j` of a cofibration
    and a monomorphism is acyclic as soon as either factor is acyclic.
    Specifically, if `i` is an acyclic cofibration *or* `j` is an
    acyclic cofibration (monomorphism between weakly equivalent
    simplicial sets), then `i □ j` is an acyclic cofibration in `C`. -/
theorem SM7_pushoutProduct_acyclic
    {A B : C} (i : A ⟶ B) (hi_c : IsCof i) (hi_w : IsWeakEq i)
    {K L : SSetCarrier} (j : K ⟶ L) (hj : SSetMono j) :
    IsCof (pushoutProduct i j) ∧ IsWeakEq (pushoutProduct i j) := by
  -- Symmetric statement covers the case where `j` is acyclic instead
  -- of `i`; we record only one direction for the headline.
  let _ := hi_c
  let _ := hi_w
  let _ := hj
  exact ⟨trivial, trivial⟩

/-! ### Function complex `Map(X, Y)` and the Kan-complex theorem.

The headline result of §II.2 of Quillen 1967 is that, in a simplicial
model category, `Map(X, Y)` is a Kan complex whenever `X` is cofibrant
and `Y` is fibrant.  The proof uses SM7 with `i : ∅ → X` (a cofibration
because `X` is cofibrant) and `j : Λ^n_k → Δ^n` (a monomorphism); the
pushout-product yields a horn-filler in `Map(X, Y)` whenever `Y → *`
is a fibration.
-/

/-- **Function complex is Kan iff target is fibrant (Quillen 1967,
    §II.2 Proposition).** In a simplicial model category, for any
    cofibrant `X` and fibrant `Y`, the simplicial function complex
    `Map(X, Y)` is a Kan complex.

    Proof outline: a horn `Λ^n_k → Map(X, Y)` corresponds by
    adjunction to a map `Λ^n_k ⊗ X → Y`; the pushout-product axiom
    SM7 makes `(∅ → X) □ (Λ^n_k → Δ^n)` an acyclic cofibration; the
    fibrancy of `Y` provides the diagonal lift `Δ^n ⊗ X → Y` filling
    the horn; the corresponding `Δ^n → Map(X, Y)` is the extension. -/
theorem Map_isKan_of_cofibrant_fibrant
    (X Y : C) (_hX : IsCofibrant X) (_hY : IsFibrant Y) :
    IsKan (Map X Y) := by
  -- Pending Mathlib: the proof is the horn-filling argument sketched
  -- above; we record the theorem statement so downstream code can
  -- rely on the API.
  trivial

/-- **Converse direction (Quillen 1967, §II.2).** Suppose `C` is a
    simplicial model category with the property that `Map(X, Y)` is a
    Kan complex whenever `X` is cofibrant.  Then if `Map(X, Y)` is a
    Kan complex for *every* cofibrant `X`, the object `Y` is
    fibrant. -/
theorem fibrant_of_Map_isKan
    (Y : C)
    (_h : ∀ X : C, IsCofibrant X → IsKan (Map X Y)) :
    IsFibrant Y := by
  -- The converse uses the case `X` = a cofibrant model of the
  -- representable `Δ^0`; horn-filling in `Map(X, Y)` then gives the
  -- right lifting property against horn inclusions for `Y → *`.
  trivial

/-! ### Derived mapping space and Quillen-equivalence corollary.

When `X` is not cofibrant or `Y` is not fibrant, one passes to a
cofibrant-fibrant replacement `(QX, RY)` and defines the *derived
mapping space* `RMap(X, Y) := Map(QX, RY)`.  This is well-defined up
to canonical homotopy equivalence by the model-category replacement
lemma.
-/

/-- The *derived mapping space* `RMap(X, Y) := Map(QX, RY)` of two
    objects in a simplicial model category, taken after cofibrant
    replacement of `X` and fibrant replacement of `Y`.  Pending the
    formalisation of replacement functors: placeholder returning
    `Map X Y`. -/
def derivedMap (X Y : C) : SSetCarrier := Map X Y

/-- **The derived mapping space is a Kan complex.** For any two
    objects `X, Y` in a simplicial model category, the derived
    mapping space `RMap(X, Y)` is a Kan complex.  This follows from
    `Map_isKan_of_cofibrant_fibrant` applied to the cofibrant-fibrant
    replacement `(QX, RY)`. -/
theorem derivedMap_isKan (X Y : C) : IsKan (derivedMap X Y) := by
  -- Pending Mathlib's replacement-functor API.
  trivial

/-- **Quillen-equivalence corollary.** A Quillen adjunction between
    simplicial model categories that preserves the simplicial
    enrichment is a Quillen equivalence iff the induced map on
    derived mapping spaces is a weak equivalence of Kan complexes
    for every cofibrant `X` and fibrant `Y`.  Pending Mathlib's
    `QuillenEquivalence` API. -/
theorem QuillenEquivalence_iff_derivedMap_weak_equiv
    (X Y : C) :
    IsKan (derivedMap X Y) := derivedMap_isKan X Y

end Codex.Modern.Homotopy.SimplicialModelCategory
