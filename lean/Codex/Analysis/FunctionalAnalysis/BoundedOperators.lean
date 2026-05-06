/-
  Codex.Analysis.FunctionalAnalysis.BoundedOperators

  Companion Lean file for `02.11.01 Bounded linear operators`.
  lean_status: partial. Mathlib provides `ContinuousLinearMap` (`E →L[𝕜] F`)
  for bounded linear operators between normed spaces, the operator norm
  via `‖·‖`, and the Banach-space structure on `E →L[𝕜] F` when `F` is
  complete.
-/

import Mathlib.Analysis.NormedSpace.OperatorNorm.Basic
import Mathlib.Analysis.NormedSpace.OperatorNorm.NormedSpace

namespace Codex.Analysis.FunctionalAnalysis

variable {𝕜 E F : Type*} [NontriviallyNormedField 𝕜]
variable [NormedAddCommGroup E] [NormedSpace 𝕜 E]
variable [NormedAddCommGroup F] [NormedSpace 𝕜 F]

/-- Mathlib uses `E →L[𝕜] F` for the type of bounded linear maps. -/
example (T : E →L[𝕜] F) (x : E) : ‖T x‖ ≤ ‖T‖ * ‖x‖ :=
  T.le_opNorm x

/-- Submultiplicativity of the operator norm under composition. -/
example (T : E →L[𝕜] E) (S : E →L[𝕜] E) : ‖T.comp S‖ ≤ ‖T‖ * ‖S‖ :=
  ContinuousLinearMap.opNorm_comp_le T S

/-- The space of bounded linear maps to a complete codomain is itself complete. -/
example [CompleteSpace F] : CompleteSpace (E →L[𝕜] F) := inferInstance

end Codex.Analysis.FunctionalAnalysis
