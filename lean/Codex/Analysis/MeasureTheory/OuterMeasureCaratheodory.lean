import Mathlib.MeasureTheory.OuterMeasure.Defs
import Mathlib.MeasureTheory.OuterMeasure.Caratheodory
import Mathlib.MeasureTheory.OuterMeasure.OfFunction
import Mathlib.MeasureTheory.Measure.Lebesgue.Basic
import Mathlib.MeasureTheory.MeasurableSpace.Basic

namespace Codex.Analysis.MeasureTheory

/-!
Companion names for the Lebesgue outer measure and Caratheodory construction
unit.

Mathlib provides:

* `MeasureTheory.OuterMeasure` for outer measures on a type `X` (a function
  `Set X -> ENNReal` satisfying `mu empty = 0`, monotonicity, and countable
  sub-additivity).
* `MeasureTheory.OuterMeasure.caratheodory` for the sigma-algebra of
  Caratheodory-measurable sets of an outer measure.
* `MeasureTheory.OuterMeasure.boundedBy` and `OuterMeasure.ofFunction` for
  the construction of an outer measure from a function on a generating
  family.
* `MeasureTheory.volume` for Lebesgue measure on real Euclidean space.
-/

variable (X : Type*)

/-- A Codex-named alias for Mathlib's outer measure type. -/
abbrev CodexOuterMeasure : Type _ := MeasureTheory.OuterMeasure X

/-- The Caratheodory sigma-algebra of an outer measure, named for
cross-reference. -/
def CodexCaratheodory (mu : MeasureTheory.OuterMeasure X) :
    MeasurableSpace X :=
  mu.caratheodory

/-- Lebesgue measure on the real Euclidean space, named for cross-reference. -/
abbrev CodexLebesgue (n : Nat) : MeasureTheory.Measure (Fin n -> Real) :=
  MeasureTheory.volume

end Codex.Analysis.MeasureTheory
