import Mathlib.MeasureTheory.Constructions.Prod.Basic
import Mathlib.MeasureTheory.Integral.Prod
import Mathlib.MeasureTheory.Measure.Prod

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for the Fubini-Tonelli theorem unit (02.07.07).

Mathlib provides:

* `MeasureTheory.Measure.prod` for the product measure `μ.prod ν`
  on `α × β` constructed from σ-finite measures `μ` and `ν`.
* `MeasureTheory.MeasurePreserving` / `MeasureTheory.Measure.prod_apply`
  for the rectangle formula `(μ.prod ν)(s ×ˢ t) = μ s * ν t`.
* `MeasureTheory.lintegral_prod` for Tonelli on the lower-Lebesgue integral
  of non-negative measurable functions:
    `∫⁻ z, f z ∂(μ.prod ν) = ∫⁻ x, ∫⁻ y, f (x, y) ∂ν ∂μ`.
* `MeasureTheory.integral_prod` for Fubini on Bochner-integrable
  functions, with the symmetric iterated-integral identity.
* `MeasureTheory.Integrable.prod_swap` and
  `MeasureTheory.integral_prod_symm` for the symmetry between the two
  orders of iteration.
* `MeasureTheory.SigmaFinite` as the σ-finiteness hypothesis required
  for the Fubini and Tonelli statements.

The full Mathlib proof tracks σ-finiteness explicitly; counterexamples
without σ-finiteness (e.g., counting measure on `[0, 1]` paired with
Lebesgue measure on `[0, 1]`) are not part of the Mathlib library but
are recorded in the unit's Master tier.
-/

variable {α β : Type*} [MeasurableSpace α] [MeasurableSpace β]

/-- Tonelli's theorem on `ENNReal`-valued measurable functions: the
iterated and product lower-Lebesgue integrals coincide, regardless of
integrability, provided the measures are σ-finite. -/
def CodexTonelliStatement
    (μ : MeasureTheory.Measure α) (ν : MeasureTheory.Measure β)
    [MeasureTheory.SigmaFinite μ] [MeasureTheory.SigmaFinite ν]
    (f : α × β → ENNReal) : Prop :=
  MeasureTheory.lintegral (μ.prod ν) f =
    MeasureTheory.lintegral μ (fun x =>
      MeasureTheory.lintegral ν (fun y => f (x, y)))

/-- Fubini's theorem on Bochner-integrable functions: for `f ∈ L¹` on the
product, the iterated and product integrals coincide and the two iteration
orders agree. -/
def CodexFubiniStatement
    {E : Type*} [NormedAddCommGroup E] [NormedSpace ℝ E]
    (μ : MeasureTheory.Measure α) (ν : MeasureTheory.Measure β)
    [MeasureTheory.SigmaFinite μ] [MeasureTheory.SigmaFinite ν]
    (f : α × β → E) : Prop :=
  MeasureTheory.Integrable f (μ.prod ν) →
    MeasureTheory.integral (μ.prod ν) f =
      MeasureTheory.integral μ (fun x =>
        MeasureTheory.integral ν (fun y => f (x, y)))

/-- Product measure formula on measurable rectangles. -/
def CodexProductMeasureRectangle
    (μ : MeasureTheory.Measure α) (ν : MeasureTheory.Measure β)
    [MeasureTheory.SigmaFinite ν]
    (s : Set α) (t : Set β) (hs : MeasurableSet s) (ht : MeasurableSet t) : Prop :=
  (μ.prod ν) (s ×ˢ t) = μ s * ν t

end Codex.Analysis.MeasureTheory
