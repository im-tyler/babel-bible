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

end Codex.Analysis.MeasureTheory
