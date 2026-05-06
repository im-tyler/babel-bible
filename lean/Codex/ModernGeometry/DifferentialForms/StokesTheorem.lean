/-
  Codex.ModernGeometry.DifferentialForms.StokesTheorem

  Companion Lean file for `03.04.05 Stokes' theorem`.
  lean_status: partial. Mathlib has the 1-dimensional fundamental theorem
  of calculus fully formalised (`intervalIntegral.integral_deriv_eq_sub`).
  Higher-dimensional Stokes on manifolds with boundary is in progress.
-/

import Mathlib.MeasureTheory.Integral.IntervalIntegral

namespace Codex.ModernGeometry.DifferentialForms

variable {f : ℝ → ℝ} {a b : ℝ}

/-- The 1-dimensional Stokes theorem: the fundamental theorem of calculus.
    Mathlib's `intervalIntegral.integral_deriv_eq_sub` gives this directly. -/
example (hf : ContinuousOn (deriv f) (Set.uIcc a b))
    (hd : ∀ x ∈ Set.uIcc a b, DifferentiableAt ℝ f x) :
    ∫ x in a..b, deriv f x = f b - f a :=
  intervalIntegral.integral_deriv_eq_sub hd (hf.intervalIntegrable a b)

end Codex.ModernGeometry.DifferentialForms
