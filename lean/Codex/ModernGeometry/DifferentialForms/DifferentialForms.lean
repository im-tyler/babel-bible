/-
  Codex.ModernGeometry.DifferentialForms.DifferentialForms

  Companion Lean file for `03.04.02 Differential forms`.
  lean_status: partial. Mathlib has `MDifferentiable`, `mfderiv`, the
  beginnings of exterior algebra and de Rham cohomology, but a full
  exterior-calculus API with `d^2 = 0`, Stokes's theorem, etc. is still
  in progress.
-/

import Mathlib.Geometry.Manifold.MFDeriv.Basic
import Mathlib.LinearAlgebra.ExteriorAlgebra.Basic

namespace Codex.ModernGeometry.DifferentialForms

variable {𝕜 : Type*} [NontriviallyNormedField 𝕜]
variable {E : Type*} [NormedAddCommGroup E] [NormedSpace 𝕜 E]
variable {M : Type*} [TopologicalSpace M] [ChartedSpace E M]

/-- Mathlib's exterior algebra construction `ExteriorAlgebra` is the
    fibrewise model for differential forms; the global form-bundle and
    exterior-derivative API is still under development. -/
example {V : Type*} [AddCommGroup V] [Module 𝕜 V] :
    Module 𝕜 (ExteriorAlgebra 𝕜 V) := inferInstance

end Codex.ModernGeometry.DifferentialForms
