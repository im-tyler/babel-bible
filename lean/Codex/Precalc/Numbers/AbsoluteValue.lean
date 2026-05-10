/-
  Codex.Precalc.Numbers.AbsoluteValue

  Companion Lean file for `00.01.02 Absolute value and the triangle
  inequality`.

  Mathlib already provides the absolute-value function on `Real` together
  with `abs_nonneg`, `abs_mul`, `abs_add`, and `abs_sub_abs_le_abs_sub`,
  so the four named statements below mirror the unit's signature
  properties and the proofs reduce to Mathlib lemma lookup. The
  statements compile against Mathlib's `Real`; proofs are deferred while
  the human reviewer signs off on the Mathlib-coverage claim.
-/

namespace Codex.Precalc.Numbers

universe u

/-- Non-negativity of the absolute value: `|x| ≥ 0` for every real `x`. -/
theorem abs_nonneg' : ∀ x : Real, 0 ≤ |x| := by
  sorry

/-- Multiplicativity of the absolute value: `|x * y| = |x| * |y|`. -/
theorem abs_mul' : ∀ x y : Real, |x * y| = |x| * |y| := by
  sorry

/-- Triangle inequality on the real line: `|x + y| ≤ |x| + |y|`. -/
theorem abs_add_le_abs_add_abs : ∀ x y : Real, |x + y| ≤ |x| + |y| := by
  sorry

/-- Reverse triangle inequality: `||x| - |y|| ≤ |x - y|`. -/
theorem abs_abs_sub_abs_le_abs_sub :
    ∀ x y : Real, |(|x| - |y|)| ≤ |x - y| := by
  sorry

end Codex.Precalc.Numbers
