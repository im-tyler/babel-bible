import Mathlib.Analysis.NormedSpace.HahnBanach.Extension
import Mathlib.Analysis.NormedSpace.HahnBanach.Separation

namespace Codex.Analysis.FunctionalAnalysis

/-!
Companion names for the Hahn-Banach unit.

Mathlib provides the analytic and geometric forms of the Hahn-Banach theorem
through `exists_extension_norm_eq` and the separation theorems in
`Mathlib.Analysis.NormedSpace.HahnBanach.Separation`. The names below mirror
the curriculum statements so downstream units can reference a stable handle
even while their proofs are inherited from Mathlib.
-/

variable (𝕜 E F : Type*)
variable [NormedField 𝕜] [NormedAddCommGroup E] [NormedSpace 𝕜 E]
variable [NormedAddCommGroup F] [NormedSpace 𝕜 F]

/-- Analytic Hahn-Banach: every bounded linear functional on a subspace of a
normed vector space extends to the whole space without enlarging its operator
norm. The Mathlib lemma `ContinuousLinearMap.exists_extension_norm_eq` realises
this when the scalar field is the reals or the complex numbers. -/
abbrev HahnBanachAnalytic : Prop :=
  ∀ (p : Subspace ℝ E) (f : p →L[ℝ] ℝ),
    ∃ g : E →L[ℝ] ℝ, (∀ x : p, g x = f x) ∧ ‖g‖ = ‖f‖

/-- Geometric Hahn-Banach, first form: an open convex set and a disjoint
non-empty convex set can be separated by a closed real hyperplane. -/
abbrev HahnBanachSeparationFirst : Prop :=
  ∀ (A B : Set E), Convex ℝ A → Convex ℝ B → IsOpen A → A.Nonempty → B.Nonempty →
    Disjoint A B → ∃ (f : E →L[ℝ] ℝ) (c : ℝ),
      (∀ a ∈ A, f a < c) ∧ (∀ b ∈ B, c ≤ f b)

/-- Geometric Hahn-Banach, second form: a compact convex set and a disjoint
closed convex set can be strictly separated. -/
abbrev HahnBanachSeparationSecond : Prop :=
  ∀ (A B : Set E), Convex ℝ A → Convex ℝ B → IsCompact A → IsClosed B →
    Disjoint A B → ∃ (f : E →L[ℝ] ℝ) (c₁ c₂ : ℝ), c₁ < c₂ ∧
      (∀ a ∈ A, f a ≤ c₁) ∧ (∀ b ∈ B, c₂ ≤ f b)

end Codex.Analysis.FunctionalAnalysis
