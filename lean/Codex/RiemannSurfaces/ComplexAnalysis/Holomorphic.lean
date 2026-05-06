/-
  Codex.RiemannSurfaces.ComplexAnalysis.Holomorphic

  Companion Lean file for `06.01.01 Holomorphic function`.
  lean_status: partial. Mathlib has `DifferentiableAt ℂ` and
  much of the Cauchy theory.
-/

import Mathlib.Analysis.Calculus.Deriv.Basic
import Mathlib.Analysis.Complex.Basic

namespace Codex.RiemannSurfaces.ComplexAnalysis

open Complex

example (z : ℂ) : DifferentiableAt ℂ (fun w => w * w) z := by
  exact (differentiableAt_id'.mul differentiableAt_id')

end Codex.RiemannSurfaces.ComplexAnalysis
