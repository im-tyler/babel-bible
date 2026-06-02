/-
Machine-checked proofs of the claims in Grant's framework that are genuine
theorems — and one that is true only because it is *defined* to be (a tautology).
This separates real mathematics from the constructs and coincidences that the
Python harness rules out. (The metallic-mean = e^{arcsinh(n/2)} identity is a
theorem too; it is verified symbolically in ../structural.py.)
-/
import Mathlib

namespace Audit

/-- The consecutive-leg family is always a Pythagorean triple. THEOREM. -/
theorem family_pythagorean (n : ℤ) :
    (2 * n + 1) ^ 2 + (2 * n ^ 2 + 2 * n) ^ 2 = (2 * n ^ 2 + 2 * n + 1) ^ 2 := by
  ring

/-- Factor rule: c − a = 2n². THEOREM. -/
theorem factor_c_sub_a (n : ℤ) :
    (2 * n ^ 2 + 2 * n + 1) - (2 * n + 1) = 2 * n ^ 2 := by
  ring

/-- Factor rule: c + a = 2(n+1)². THEOREM. (This is the electron-shell capacity.) -/
theorem factor_c_add_a (n : ℤ) :
    (2 * n ^ 2 + 2 * n + 1) + (2 * n + 1) = 2 * (n + 1) ^ 2 := by
  ring

/-- Every Pythagorean triple lands on the unit hyperbola x² − y² = 1. THEOREM. -/
theorem unit_hyperbola (a b c : ℝ) (hb : b ≠ 0) (h : a ^ 2 + b ^ 2 = c ^ 2) :
    (c / b) ^ 2 - (a / b) ^ 2 = 1 := by
  field_simp
  linarith [h]

/-- The nine-means nesting: HM·(c/b) = GM and GM·(c/b) = AM. THEOREM. -/
theorem nine_means_nesting (b c : ℝ) (hb : b ≠ 0) (hc : c ≠ 0) :
    (b ^ 2 / c) * (c / b) = b ∧ b * (c / b) = c := by
  refine ⟨?_, ?_⟩ <;> field_simp

/-- Euler's V − E + F = 2 under Grant's definitions (E = 3V−6, F = 2V−4).
    TAUTOLOGY: it holds identically, so it proves nothing about geometry. -/
theorem euler_is_forced (V : ℤ) : V - (3 * V - 6) + (2 * V - 4) = 2 := by
  ring

/-- Kepler triangle: φ = (1+√5)/2 satisfies φ² = φ + 1 (so 1² + (√φ)² = φ²). THEOREM. -/
theorem kepler_golden (φ : ℝ) (h : φ = (1 + Real.sqrt 5) / 2) : φ ^ 2 = φ + 1 := by
  have h5 : Real.sqrt 5 ^ 2 = 5 := Real.sq_sqrt (by norm_num)
  subst h
  nlinarith [h5, Real.sqrt_nonneg 5]

end Audit
