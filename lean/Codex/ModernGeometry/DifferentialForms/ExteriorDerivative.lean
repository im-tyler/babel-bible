/-
  Codex.ModernGeometry.DifferentialForms.ExteriorDerivative

  Companion Lean file for `03.04.04 Exterior derivative`.
  lean_status: partial. Mathlib has differential calculus on manifolds
  (`mfderiv`, `MDifferentiable`) and exterior algebra constructions, but
  a full bundled exterior-derivative API on differential forms is in
  progress.
-/

import Mathlib.Geometry.Manifold.MFDeriv.Basic
import Mathlib.LinearAlgebra.ExteriorAlgebra.Basic

namespace Codex.ModernGeometry.DifferentialForms

variable {𝕜 : Type*} [NontriviallyNormedField 𝕜]
variable {V : Type*} [AddCommGroup V] [Module 𝕜 V]

/-- The exterior algebra is graded; this is the type-level statement that
    Mathlib provides as the model for differential forms fibrewise. -/
example : Module 𝕜 (ExteriorAlgebra 𝕜 V) := inferInstance

end Codex.ModernGeometry.DifferentialForms
