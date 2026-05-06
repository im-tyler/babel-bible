/-
  Codex.Analysis.FunctionalAnalysis.CompactOperators

  Companion Lean file for `02.11.05 Compact operators`.
  lean_status: partial. Mathlib provides `IsCompactOperator` as a predicate
  on continuous linear maps, with the closed-ideal property and stability
  under composition with continuous linear maps on either side.
-/

import Mathlib.Analysis.NormedSpace.CompactOperator

namespace Codex.Analysis.FunctionalAnalysis

variable {𝕜 E F G : Type*} [NontriviallyNormedField 𝕜]
variable [NormedAddCommGroup E] [NormedSpace 𝕜 E]
variable [NormedAddCommGroup F] [NormedSpace 𝕜 F]
variable [NormedAddCommGroup G] [NormedSpace 𝕜 G]

/-- Composition of a compact operator with a continuous linear map (on the
    left) is compact. Two-sided ideal property, half. -/
example (T : E →L[𝕜] F) (hT : IsCompactOperator T) (S : F →L[𝕜] G) :
    IsCompactOperator (S.comp T) :=
  hT.comp_continuousLinearMap S

/-- Composition with a continuous linear map on the right preserves
    compactness. Two-sided ideal property, other half. -/
example (T : F →L[𝕜] G) (hT : IsCompactOperator T) (S : E →L[𝕜] F) :
    IsCompactOperator (T.comp S) :=
  hT.continuousLinearMap_comp S

/-- The zero operator is compact. -/
example : IsCompactOperator (0 : E →L[𝕜] F) := isCompactOperator_zero

end Codex.Analysis.FunctionalAnalysis
