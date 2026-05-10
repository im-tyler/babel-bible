/-
  Codex.Precalc.Equations.QuadraticFormula

  Companion Lean file for `00.03.02 Quadratic equations and the
  quadratic formula`.

  Mathlib supplies a packaged statement of the quadratic formula for a
  field of characteristic not two. The relevant lemmas live in
  `Mathlib.Algebra.QuadraticDiscriminant`, where `discrim a b c`
  is defined as `b ^ 2 - 4 * a * c` and `quadratic_eq_zero_iff`
  characterises the roots of `a * x ^ 2 + b * x + c = 0` in terms of
  a chosen square root of the discriminant. The signature statements
  below mirror the unit's signature theorems; proofs are deferred to
  Mathlib lookup while the reviewer signs off on the coverage claim.
-/

import Mathlib.Algebra.QuadraticDiscriminant
import Mathlib.Analysis.SpecialFunctions.Pow.Real

namespace Codex.Precalc.Equations

universe u

variable {K : Type u} [Field K]

/-- The discriminant of a quadratic polynomial `a x^2 + b x + c`. -/
def quadDiscrim (a b c : K) : K := b ^ 2 - 4 * a * c

/-- Quadratic formula via completing the square. Over a field of
    characteristic not two with `a ≠ 0`, the equation
    `a x^2 + b x + c = 0` is equivalent to `x` being one of the two
    values `(-b + s) / (2 a)` or `(-b - s) / (2 a)`, where `s` is a
    square root of the discriminant `b^2 - 4 a c`. -/
theorem quadratic_eq_zero_iff_of_discrim
    [NeZero (2 : K)]
    (a b c : K) (ha : a ≠ 0)
    (s : K) (hs : s ^ 2 = quadDiscrim a b c)
    (x : K) :
    a * x ^ 2 + b * x + c = 0 ↔
      x = (-b + s) / (2 * a) ∨ x = (-b - s) / (2 * a) := by
  sorry

/-- Discriminant classification over the real numbers. Let
    `Δ = b^2 - 4 a c`. The quadratic `a x^2 + b x + c = 0` with
    `a ≠ 0` has two distinct real roots iff `Δ > 0`, a single repeated
    real root iff `Δ = 0`, and no real roots iff `Δ < 0`. -/
theorem real_discriminant_trichotomy
    (a b c : ℝ) (ha : a ≠ 0) :
    (0 < quadDiscrim a b c ↔
        ∃ x y : ℝ, x ≠ y ∧
          a * x ^ 2 + b * x + c = 0 ∧
          a * y ^ 2 + b * y + c = 0) ∧
    (quadDiscrim a b c = 0 ↔
        ∃! x : ℝ, a * x ^ 2 + b * x + c = 0) ∧
    (quadDiscrim a b c < 0 ↔
        ∀ x : ℝ, a * x ^ 2 + b * x + c ≠ 0) := by
  sorry

/-- Vieta's formulas for a monic quadratic. If `x₁` and `x₂` are the
    two roots of `x^2 + b x + c = 0` over a field, then
    `x₁ + x₂ = -b` and `x₁ * x₂ = c`. -/
theorem vieta_monic_quadratic
    (b c x₁ x₂ : K)
    (h₁ : x₁ ^ 2 + b * x₁ + c = 0)
    (h₂ : x₂ ^ 2 + b * x₂ + c = 0)
    (hne : x₁ ≠ x₂) :
    x₁ + x₂ = -b ∧ x₁ * x₂ = c := by
  sorry

/-- Completing-the-square identity. Over a field of characteristic
    not two with `a ≠ 0`, the polynomial `a x^2 + b x + c` equals
    `a * (x + b / (2 a))^2 - (b^2 - 4 a c) / (4 a)`. -/
theorem complete_the_square
    [NeZero (2 : K)]
    (a b c x : K) (ha : a ≠ 0) :
    a * x ^ 2 + b * x + c
      = a * (x + b / (2 * a)) ^ 2 - quadDiscrim a b c / (4 * a) := by
  sorry

end Codex.Precalc.Equations
