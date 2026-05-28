import Mathlib.MeasureTheory.Integral.Lebesgue
import Mathlib.MeasureTheory.Integral.DominatedConvergence
import Mathlib.MeasureTheory.Integral.Bochner
import Mathlib.MeasureTheory.Function.UniformIntegrable

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for Fatou's lemma and the dominated convergence theorem unit.

Mathlib provides:

* `MeasureTheory.lintegral_liminf_le` for Fatou's lemma: the lower Lebesgue
  integral of the pointwise `liminf` of a sequence of measurable functions
  is at most the `liminf` of the integrals.
* `MeasureTheory.tendsto_lintegral_of_dominated_convergence` for the
  dominated convergence theorem in the lower-Lebesgue (`ENNReal`-valued)
  setting.
* `MeasureTheory.tendsto_integral_of_dominated_convergence` for the
  Bochner-valued dominated convergence theorem on Banach-space-valued
  measurable functions.
* `MeasureTheory.UniformIntegrable` and the Vitali convergence theorem
  variant for finite-measure spaces.
-/

variable (X : Type*) [MeasurableSpace X]
variable (μ : MeasureTheory.Measure X)

/-- A Codex-named alias for Mathlib's Fatou-lemma inequality:
`∫⁻ liminf f_n ≤ liminf ∫⁻ f_n` for a sequence of measurable functions
into `ENNReal`. -/
def CodexFatouStatement (f : ℕ → X → ENNReal) : Prop :=
  MeasureTheory.lintegral μ (fun x => Filter.liminf (fun n => f n x) Filter.atTop)
    ≤ Filter.liminf (fun n => MeasureTheory.lintegral μ (f n)) Filter.atTop

/-- A Codex-named predicate capturing the domination hypothesis of the
dominated convergence theorem in Banach-valued form: every member of the
sequence is bounded in norm by the integrable real-valued function `g`. -/
def CodexDominated {β : Type*} [NormedAddCommGroup β]
    (f : ℕ → X → β) (g : X → ℝ) : Prop :=
  ∀ n, ∀ᵐ x ∂μ, ‖f n x‖ ≤ g x

end Codex.Analysis.MeasureTheory
