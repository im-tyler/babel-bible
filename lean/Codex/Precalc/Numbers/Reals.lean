/-
  Codex.Precalc.Numbers.Reals

  Companion Lean file for `00.01.01 Real numbers, integers, rationals`.

  Mathlib already provides `Int`, `Rat`, and `Real` together with the
  field, order, and Archimedean instances we cite at the Intermediate
  tier, and the Cauchy-style construction of `Real` is available at
  `Mathlib.Data.Real.Basic`. The statements below mirror the unit's
  signature theorems; proofs are deferred to Mathlib lookup or `sorry`
  while the reviewer signs off on the gap notes.
-/

namespace Codex.Precalc.Numbers

universe u

/-- Inclusion `Int → Rat`: every integer is a rational. -/
theorem int_subset_rat : ∀ n : Int, ∃ q : Rat, q = (n : Rat) :=
  fun n => ⟨(n : Rat), rfl⟩

/-- Inclusion `Rat → Real`: every rational is a real. -/
theorem rat_subset_real : ∀ q : Rat, ∃ r : Real, r = (q : Real) :=
  fun q => ⟨(q : Real), rfl⟩

/-- Existence of an irrational real: `Real.sqrt 2` is not rational. -/
theorem sqrt_two_irrational :
    ¬ ∃ q : Rat, ((q : Real) * (q : Real)) = (2 : Real) := by
  sorry

/-- Density of `Rat` in `Real`: between any two distinct reals lies a rational. -/
theorem rat_dense_in_real (a b : Real) (h : a < b) :
    ∃ q : Rat, a < (q : Real) ∧ (q : Real) < b := by
  sorry

end Codex.Precalc.Numbers
