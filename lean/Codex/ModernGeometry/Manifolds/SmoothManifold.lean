/-
  Codex.ModernGeometry.Manifolds.SmoothManifold

  Companion Lean file for `03.02.01 Smooth manifold`.
  lean_status: partial. Mathlib provides `ChartedSpace`,
  `SmoothManifoldWithCorners`, `ModelWithCorners`, and the full
  smooth-maps / tangent-bundle / smooth-fields infrastructure.
-/

import Mathlib.Geometry.Manifold.SmoothManifoldWithCorners
import Mathlib.Geometry.Manifold.ContMDiff.Basic

namespace Codex.ModernGeometry.Manifolds

variable {𝕜 : Type*} [NontriviallyNormedField 𝕜]
variable {E : Type*} [NormedAddCommGroup E] [NormedSpace 𝕜 E]
variable {M : Type*} [TopologicalSpace M] [ChartedSpace E M]
variable (I : ModelWithCorners 𝕜 E E)

/-- Mathlib's `SmoothManifoldWithCorners` typeclass captures the smooth-atlas
    requirement: any two charts have $C^\infty$ transition functions. -/
example [SmoothManifoldWithCorners I M] : SmoothManifoldWithCorners I M :=
  inferInstance

/-- A smooth map between smooth manifolds is one whose chart-pulled-back
    expression is $C^\infty$. Mathlib uses `ContMDiff` (continuously
    manifold-differentiable). -/
example {N : Type*} [TopologicalSpace N] [ChartedSpace E N]
    (J : ModelWithCorners 𝕜 E E) [SmoothManifoldWithCorners J N]
    (f : M → N) (hf : ContMDiff I J ⊤ f) : ContMDiff I J ⊤ f := hf

end Codex.ModernGeometry.Manifolds
