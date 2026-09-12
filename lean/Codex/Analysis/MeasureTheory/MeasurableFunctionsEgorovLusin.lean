import Mathlib.MeasureTheory.MeasurableSpace.Basic
import Mathlib.MeasureTheory.Function.SimpleFunc
import Mathlib.MeasureTheory.Function.SimpleFuncDense
import Mathlib.MeasureTheory.Function.Egorov

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for the measurable-functions / simple-functions / Egorov /
Lusin unit.

Mathlib provides:

* `Measurable` and `MeasurableSet.preimage` for the preimage-of-measurable
  definition of measurable functions between measurable spaces.
* `MeasureTheory.SimpleFunc` for finite-range measurable functions (the
  building blocks of the Lebesgue integral).
* `MeasureTheory.SimpleFunc.approx` and `SimpleFunc.tendsto_approx` for the
  approximation theorem: every non-negative measurable function is the
  pointwise increasing limit of simple functions.
* `MeasureTheory.Egorov` and `MeasureTheory.tendstoUniformlyOn_of_ae_tendsto`
  for Egorov's theorem (a.e. convergence implies uniform convergence off a
  small-measure exceptional set on a finite-measure space).
-/

variable (X : Type*) [MeasurableSpace X]
variable (Y : Type*) [MeasurableSpace Y]

/-- A Codex-named alias for Mathlib's `Measurable` predicate: a function
`f : X → Y` is measurable when the preimage of every measurable set is
measurable. -/
abbrev CodexMeasurable (f : X → Y) : Prop := Measurable f

/-- A Codex-named alias for Mathlib's `MeasureTheory.SimpleFunc`: a
finite-range measurable function with measurable level sets. -/
abbrev CodexSimpleFunc : Type _ := MeasureTheory.SimpleFunc X ENNReal

open scoped Topology in
/-- Egorov's theorem: on a measurable set of finite measure, a sequence
of measurable functions converging almost everywhere converges
uniformly off an arbitrarily small exceptional set. Alias of
`MeasureTheory.tendstoUniformlyOn_of_ae_tendsto`; the primary theorem
of the measurable-functions-egorov-lusin unit. -/
theorem egorov_theorem {β : Type*} [PseudoEMetricSpace β]
    {μ : MeasureTheory.Measure X} {f : ℕ → X → β} {g : X → β} {s : Set X}
    (hf : ∀ n, StronglyMeasurable (f n)) (hg : StronglyMeasurable g)
    (hsm : MeasurableSet s) (hs : μ s ≠ ∞)
    (hfg : ∀ᵐ x ∂μ, x ∈ s →
      Filter.Tendsto (fun n => f n x) Filter.atTop (𝓝 (g x)))
    {ε : ℝ} (hε : 0 < ε) :
    ∃ t ⊆ s, MeasurableSet t ∧ μ t ≤ ENNReal.ofReal ε ∧
      TendstoUniformlyOn f g Filter.atTop (s \ t) :=
  MeasureTheory.tendstoUniformlyOn_of_ae_tendsto hf hg hsm hs hfg hε

end Codex.Analysis.MeasureTheory
