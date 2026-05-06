/-
  Codex.ModernGeometry.Homotopy.Suspension

  Companion Lean file for `03.12.03 Suspension`.
  lean_status: partial. Mathlib has limited coverage of suspension and the
  suspension-loop adjunction; the categorical formulation in $\infty$-categories
  is in active development.
-/

import Mathlib.Topology.Homotopy.Basic

namespace Codex.ModernGeometry.Homotopy

variable (X : Type*) [TopologicalSpace X]

-- Mathlib does not yet bundle the suspension construction with all of its
-- standard properties. The forthcoming API would include:
--   * `TopCat.Suspension X` for the unreduced suspension
--   * `TopCat.ReducedSuspension X` for the reduced (pointed) version
--   * The natural map `Σ S^n ≃ S^{n+1}`
--   * Suspension-loop adjunction `[Σ X, Y] ≃ [X, Ω Y]`

end Codex.ModernGeometry.Homotopy
