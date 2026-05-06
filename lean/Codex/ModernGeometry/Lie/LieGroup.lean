/-
  Codex.ModernGeometry.Lie.LieGroup

  Companion Lean file for `03.03.01 Lie group`.
  lean_status: partial. Mathlib has `LieGroup` as a typeclass on smooth
  manifolds with smooth multiplication, the matrix Lie groups
  (`Matrix.GeneralLinearGroup`, `Matrix.SpecialLinearGroup`,
  `Matrix.SpecialOrthogonalGroup`, `Matrix.SpecialUnitaryGroup`), and
  partial coverage of the exponential map and Lie's correspondence.
-/

import Mathlib.Geometry.Manifold.LieGroup

namespace Codex.ModernGeometry.Lie

variable {𝕜 : Type*} [NontriviallyNormedField 𝕜]
variable {E : Type*} [NormedAddCommGroup E] [NormedSpace 𝕜 E]
variable {G : Type*} [TopologicalSpace G] [ChartedSpace E G]
variable (I : ModelWithCorners 𝕜 E E)

/-- Multiplication on a Lie group is continuous. -/
example [Group G] [LieGroup I G] :
    Continuous (fun (p : G × G) => p.1 * p.2) :=
  continuous_mul

/-- Inversion on a Lie group is continuous. -/
example [Group G] [LieGroup I G] : Continuous (fun (g : G) => g⁻¹) :=
  continuous_inv

end Codex.ModernGeometry.Lie
