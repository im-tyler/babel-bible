import Mathlib.Analysis.NormedSpace.Basic

namespace Codex.Analysis.FunctionalAnalysis

/-!
Companion names for the Banach-space unit.

Mathlib represents a Banach space by a normed additive commutative group,
a normed vector-space structure, and the typeclass `CompleteSpace`.
-/

variable (𝕜 E : Type*) [NormedField 𝕜] [NormedAddCommGroup E] [NormedSpace 𝕜 E]

abbrev IsBanachSpace : Prop := CompleteSpace E

end Codex.Analysis.FunctionalAnalysis
