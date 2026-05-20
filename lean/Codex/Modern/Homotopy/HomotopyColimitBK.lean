/-
  Codex.Modern.Homotopy.HomotopyColimitBK

  Homotopy colimit via the Bousfield-Kan construction. Companion to the
  unit `03.12.37 Homotopy colimit via the Bousfield-Kan construction`.

  lean_status: partial. Mathlib has the simplex category and simplicial
  objects in `Mathlib.AlgebraicTopology.SimplexCategory` and
  `Mathlib.AlgebraicTopology.SimplicialObject`, the geometric realisation
  functor `SSet.toTop`, and substantial colimit infrastructure in
  `Mathlib.CategoryTheory.Limits.*`. What is currently absent: the bar
  construction `Bar(*, I, X)` as a simplicial object built from a small
  category `I` and a diagram `X : I ⥤ sSet` together with the explicit
  face/degeneracy formulae of Bousfield-Kan 1972 §XII.2; the projective
  and Reedy model structures on `sSet^I` as named instances of
  `ModelCategory`; the derived left Kan extension `LLan_p : Ho(sSet^I) →
  Ho(sSet)` as the homotopy-colimit functor; and the comparison theorem
  `hocolim_I X ≃ |Bar(*, I, X)|` for `I` a small category and `X` a
  diagram of simplicial sets. Each theorem below compiles as a `True`
  placeholder; substantive proofs await the model-category formalisation
  package.
-/

import Mathlib.AlgebraicTopology.SimplicialSet.Basic
import Mathlib.CategoryTheory.Limits.HasLimits
import Mathlib.CategoryTheory.Functor.Category

namespace Codex.Modern.Homotopy.HomotopyColimitBK

open CategoryTheory

/-- A small indexing category `I`. Used as the domain of a diagram whose
    homotopy colimit we form. -/
structure SmallCat where
  carrier_dummy : Unit

/-- A diagram `X : I ⥤ sSet` of simplicial sets indexed by a small
    category `I`. Packaged minimally for the exposition. -/
structure Diagram (_I : SmallCat) where
  values_dummy : Unit

/-- The Bousfield-Kan bar construction `Bar(*, I, X)` as a simplicial
    object whose `n`-simplices are
      ∐_{i_0 → i_1 → ⋯ → i_n} X(i_0).
    The face maps act by composing arrows in `I` (interior faces) or by
    applying the leftmost morphism to `X(i_0)` and dropping the leftmost
    object (outermost face); the degeneracies insert identity arrows.
    NOT YET IN MATHLIB. -/
def barConstruction {I : SmallCat} (_X : Diagram I) : Unit := ()

/-- The Bousfield-Kan homotopy colimit
      hocolim_I X := |Bar(*, I, X)|
    as the geometric realisation of the bar construction. The
    realisation is the diagonal of the bisimplicial set obtained from
    the bar construction read as a simplicial object in `sSet`. NOT YET
    IN MATHLIB. -/
def hocolim {I : SmallCat} (_X : Diagram I) : Unit := ()

/-- Bousfield-Kan formula (1972, *Homotopy Limits, Completions and
    Localizations*, §XII.5.1): for a small category `I` and a diagram
    `X : I ⥤ sSet`, the homotopy colimit is computed by the realisation
    of the bar construction. -/
theorem hocolim_eq_bar {I : SmallCat} (X : Diagram I) :
    True := by
  -- Mathlib target: identify `hocolim I X` (defined via the derived
  -- left Kan extension along `I → *`) with `|barConstruction X|` (the
  -- explicit BK formula). Proof routes through the projective model
  -- structure on `sSet^I` and a cofibrant-replacement comparison.
  trivial

/-- The pushout diagram shape `A ← C → B`. The classical pushout is the
    coequaliser of the two maps `C ⇒ A ⊔ B`; the homotopy pushout is the
    Bousfield-Kan hocolim of this diagram. -/
structure PushoutShape where
  arrows_dummy : Unit

/-- The double mapping cylinder `M(f, g) := A ⊔_C (C × Δ¹) ⊔_C B` for
    maps `f : C → A` and `g : C → B`. Cofibrant replacement of the
    pushout shape in the projective model structure on `sSet^{PushoutShape}`. -/
def doubleMappingCylinder
    (_A _B _C : Type) (_f : _C → _A) (_g : _C → _B) : Unit := ()

/-- Homotopy pushout via the double mapping cylinder: for a span
    `A ← C → B` of simplicial sets the homotopy pushout is weakly
    equivalent to the double mapping cylinder. This is the Bousfield-Kan
    bar construction evaluated on the pushout shape. NOT YET IN MATHLIB. -/
theorem hocolim_pushout_eq_mapping_cylinder
    (A B C : Type) (f : C → A) (g : C → B) :
    True := by
  -- Mathlib target: cofibrant-replacement argument identifying the
  -- bar-construction realisation `|Bar(*, PushoutShape, X)|` with the
  -- double mapping cylinder `A ⊔_C (C × Δ¹) ⊔_C B`.
  trivial

/-- A sequential diagram `X_0 → X_1 → X_2 → ⋯` indexed by the poset `ℕ`.
    The bar construction on a sequential diagram gives the mapping
    telescope. -/
structure SequentialDiagram where
  stages_dummy : Unit

/-- The mapping telescope of a sequential diagram
    `X_0 →^{f_0} X_1 →^{f_1} X_2 → ⋯` is
      Tel(X) := ⨆_{n ≥ 0} (X_n × [n, n+1]) / ~
    glued via the maps `f_n` on the right ends. The Bousfield-Kan
    formula identifies the sequential hocolim with this telescope. NOT
    YET IN MATHLIB. -/
def mappingTelescope (_X : SequentialDiagram) : Unit := ()

/-- Sequential hocolim equals the mapping telescope: for `X : ℕ ⥤ sSet`,
    `hocolim_ℕ X ≃ Tel(X)` in the homotopy category of simplicial sets.
    NOT YET IN MATHLIB. -/
theorem hocolim_sequential_eq_telescope (X : SequentialDiagram) :
    True := by
  -- Mathlib target: identify the bar-construction realisation on the
  -- ℕ-shape with the explicit telescope quotient.
  trivial

/-- The classifying space `BG` of a group `G`, viewed as the homotopy
    colimit of the constant diagram with value `*` on the one-object
    groupoid `BG`. The Bousfield-Kan formula recovers the standard
    nerve presentation. -/
def classifyingSpace (_G : Type) : Unit := ()

/-- Classifying-space identification: for a group `G`, `BG ≃ hocolim_{BG}
    *` where the indexing category is the one-object groupoid with
    automorphisms `G`. This presents the Eilenberg-MacLane space
    `K(G, 1)` for discrete `G` and the homotopy-theoretic classifying
    space for topological `G`. NOT YET IN MATHLIB. -/
theorem classifying_space_eq_hocolim (G : Type) :
    True := by
  -- Mathlib target: identify the nerve `N(BG)` (the standard simplicial
  -- model of `BG`) with the bar construction `Bar(*, BG, *)`.
  trivial

/-- The projective model structure on `sSet^I`: weak equivalences and
    fibrations are object-wise (i.e. taken in each `X(i)` for `i : I`),
    cofibrations are determined by the lifting property. Left Quillen
    against the constant-diagram functor `c : sSet → sSet^I`. NOT YET IN
    MATHLIB. -/
structure ProjectiveModelStructure (_I : SmallCat) where
  data_dummy : Unit

/-- The Reedy model structure on `sSet^I` for `I` a Reedy category: the
    fibrations are detected by matching objects, cofibrations by latching
    objects, weak equivalences are object-wise. Compatible with the
    projective and injective structures when `I` is Reedy. NOT YET IN
    MATHLIB. -/
structure ReedyModelStructure (_I : SmallCat) where
  data_dummy : Unit

/-- The homotopy colimit as the left-derived functor of `colim` along
    cofibrant replacement in the projective model structure on `sSet^I`.
    This is the conceptual definition; the Bousfield-Kan formula is the
    explicit point-set realisation. NOT YET IN MATHLIB. -/
theorem hocolim_is_derived_colim {I : SmallCat} (X : Diagram I) :
    True := by
  -- Mathlib target: identify `hocolim_I X` with `colim (Q_I X)` where
  -- `Q_I : sSet^I → sSet^I` is the cofibrant-replacement functor in the
  -- projective model structure.
  trivial

/-- Homotopy invariance: a level-wise weak equivalence `X → Y : I ⥤ sSet`
    induces a weak equivalence `hocolim_I X → hocolim_I Y`. This is the
    defining property the ordinary colimit fails; the bar construction
    encodes the cofibrant replacement needed for invariance. -/
theorem hocolim_homotopy_invariant
    {I : SmallCat} (X Y : Diagram I) :
    True := by
  -- Mathlib target: derived-functor argument via Ken Brown's lemma in
  -- the projective model structure on `sSet^I`.
  trivial

end Codex.Modern.Homotopy.HomotopyColimitBK
