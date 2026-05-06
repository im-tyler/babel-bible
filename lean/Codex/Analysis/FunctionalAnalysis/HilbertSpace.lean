import Mathlib.Analysis.InnerProductSpace.Basic

namespace Codex.Analysis.FunctionalAnalysis

/-!
Companion names for the Hilbert-space unit.

Mathlib represents Hilbert spaces through `InnerProductSpace` together
with the completeness typeclass `CompleteSpace`.
-/

variable (𝕜 E : Type*) [RCLike 𝕜] [NormedAddCommGroup E] [InnerProductSpace 𝕜 E]

abbrev IsHilbertSpace : Prop := CompleteSpace E

end Codex.Analysis.FunctionalAnalysis
