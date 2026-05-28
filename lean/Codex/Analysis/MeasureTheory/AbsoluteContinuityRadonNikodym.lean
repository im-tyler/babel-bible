import Mathlib.MeasureTheory.Decomposition.RadonNikodym
import Mathlib.MeasureTheory.Decomposition.Lebesgue
import Mathlib.MeasureTheory.Measure.AbsolutelyContinuous

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for the absolute continuity and Radon-Nikodym theorem unit
(02.07.08).

Mathlib provides:

* `MeasureTheory.Measure.AbsolutelyContinuous` (notation `ν ≪ μ`) for the
  relation that every `μ`-null set is `ν`-null.
* `MeasureTheory.Measure.MutuallySingular` (notation `ν ⟂ₘ μ`) for two
  measures concentrated on disjoint measurable sets.
* `MeasureTheory.Measure.haveLebesgueDecomposition_of_sigmaFinite` and
  `MeasureTheory.Measure.singularPart`, `MeasureTheory.Measure.rnDeriv`
  for the Lebesgue decomposition `ν = ν.singularPart μ + (ν.rnDeriv μ) • μ`.
* `MeasureTheory.Measure.absolutelyContinuous_iff_rnDeriv_singularPart_zero`
  and `MeasureTheory.Measure.withDensity_rnDeriv_eq` for the Radon-Nikodym
  identity `ν = (ν.rnDeriv μ) • μ` when `ν ≪ μ`.
* `MeasureTheory.Measure.rnDeriv_unique` for almost-everywhere uniqueness of
  the Radon-Nikodym derivative.
* `MeasureTheory.lintegral_rnDeriv_mul` for the change-of-variables identity
  `∫⁻ x, f x ∂ν = ∫⁻ x, f x * ν.rnDeriv μ x ∂μ` under `ν ≪ μ`.

The von Neumann Hilbert-space proof (1940 *Bull. AMS* 46, 376) is not
explicitly reconstructed in Mathlib — Mathlib follows a more direct
decomposition argument — but the resulting RN derivative and Lebesgue
decomposition are fully formalised.
-/

variable {α : Type*} [MeasurableSpace α]

/-- Absolute continuity statement: every `μ`-null measurable set is also
`ν`-null. -/
def CodexAbsolutelyContinuousStatement
    (μ ν : MeasureTheory.Measure α) : Prop :=
  ∀ s : Set α, MeasurableSet s → μ s = 0 → ν s = 0

/-- Mutual singularity statement: there is a measurable splitting of `α`
into a `μ`-null piece and a `ν`-null piece. -/
def CodexMutuallySingularStatement
    (μ ν : MeasureTheory.Measure α) : Prop :=
  ∃ s : Set α, MeasurableSet s ∧ μ s = 0 ∧ ν sᶜ = 0

/-- Lebesgue decomposition statement: every σ-finite `ν` splits uniquely
as `ν = ν_a + ν_s` with `ν_a ≪ μ` and `ν_s ⟂ μ`. -/
def CodexLebesgueDecompositionStatement
    (μ ν : MeasureTheory.Measure α)
    [MeasureTheory.SigmaFinite μ] [MeasureTheory.SigmaFinite ν] : Prop :=
  ν = ν.singularPart μ + μ.withDensity (ν.rnDeriv μ)

/-- Radon-Nikodym identity: if `ν ≪ μ` (σ-finite), then `ν` has a density
`dν/dμ : α → ℝ≥0∞` and integration against `ν` reduces to integration
against `μ` weighted by that density. -/
def CodexRadonNikodymStatement
    (μ ν : MeasureTheory.Measure α)
    [MeasureTheory.SigmaFinite μ] [MeasureTheory.SigmaFinite ν]
    (f : α → ENNReal) : Prop :=
  ν.AbsolutelyContinuous μ →
    MeasureTheory.lintegral ν f =
      MeasureTheory.lintegral μ (fun x => f x * ν.rnDeriv μ x)

end Codex.Analysis.MeasureTheory
