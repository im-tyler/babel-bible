import Mathlib.MeasureTheory.Integral.Lebesgue
import Mathlib.MeasureTheory.Integral.MeanInequalities
import Mathlib.MeasureTheory.Integral.Bochner
import Mathlib.MeasureTheory.Function.SimpleFunc
import Mathlib.MeasureTheory.Function.L1Space

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for the Lebesgue-integral construction and the monotone
convergence theorem unit.

Mathlib provides:

* `MeasureTheory.lintegral` for the Lebesgue integral of an `ENNReal`-valued
  measurable function as the supremum over simple-function approximations
  from below.
* `MeasureTheory.lintegral_iSup` (the monotone convergence theorem): if
  `f : ℕ → α → ℝ≥0∞` is a monotone sequence of measurable functions with
  pointwise supremum `g`, then `∫⁻ x, g x ∂μ = ⨆ n, ∫⁻ x, f n x ∂μ`.
* `MeasureTheory.lintegral_iSup_ae` for the almost-everywhere variant.
* `MeasureTheory.lintegral_liminf_le` (Fatou's lemma) as the standard
  derived consequence.
* `MeasureTheory.tendsto_integral_of_dominated_convergence` for the
  dominated convergence theorem in the Bochner setting.
* `MeasureTheory.Integrable` for the integrability predicate on real- or
  Banach-valued measurable functions.
-/

variable (X : Type*) [MeasurableSpace X]
variable (μ : MeasureTheory.Measure X)

/-- A Codex-named alias for Mathlib's `MeasureTheory.lintegral`: the lower
Lebesgue integral of an `ENNReal`-valued measurable function with respect
to a measure. -/
abbrev CodexLintegral (f : X → ENNReal) : ENNReal := MeasureTheory.lintegral μ f

/-- A Codex-named alias for Mathlib's `MeasureTheory.Integrable`: the
predicate that a measurable real- or Banach-valued function lies in `L¹`
with respect to a measure. -/
abbrev CodexIntegrable {β : Type*} [NormedAddCommGroup β] (f : X → β) : Prop :=
  MeasureTheory.Integrable f μ

/-- The monotone convergence theorem for the lower Lebesgue integral: a
monotone sequence of measurable `ℝ≥0∞`-valued functions may be
integrated term by term. Alias of `MeasureTheory.lintegral_iSup`; the
primary theorem of the lebesgue-integral-monotone-convergence unit. -/
theorem lebesgue_integral_monotone_convergence {f : ℕ → X → ℝ≥0∞}
    (hf : ∀ n, Measurable (f n)) (h_mono : Monotone f) :
    ∫⁻ a, ⨆ n, f n a ∂μ = ⨆ n, ∫⁻ a, f n a ∂μ :=
  MeasureTheory.lintegral_iSup hf h_mono

end Codex.Analysis.MeasureTheory
