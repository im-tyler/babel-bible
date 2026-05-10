/-
  Codex.Analysis.RealNumbers.Axioms

  Companion Lean file for `02.02.01 Real-number axioms (ordered field)`.

  lean_status: partial. Mathlib carries the complete-ordered-field
  structure as `LinearOrderedField` together with the `Real` instance
  satisfying `ConditionallyCompleteLinearOrderedField`. The categoricity
  statement (any two complete ordered fields are uniquely isomorphic) is
  not packaged as a single named theorem in Mathlib; the proof goes
  through `Real.ringHomEquiv` plus `Archimedean` / sup-preservation
  arguments and is left as a Codex-facing statement here.
-/

import Mathlib.Data.Real.Basic
import Mathlib.Order.ConditionallyCompleteLattice.Basic
import Mathlib.Algebra.Order.Field.Basic
import Mathlib.Algebra.Order.Archimedean.Basic

namespace Codex.Analysis.RealNumbers

/-- The reals form a linear ordered field. -/
example : LinearOrderedField ℝ := inferInstance

/-- The reals are conditionally complete: every non-empty subset that is
bounded above has a supremum. -/
example (S : Set ℝ) (hne : S.Nonempty) (hbd : BddAbove S) :
    IsLUB S (sSup S) :=
  isLUB_csSup hne hbd

/-- The Archimedean property: for every real `x`, some natural number
exceeds it. -/
example (x : ℝ) : ∃ n : ℕ, x < n :=
  exists_nat_gt x

/-- Categoricity (Codex statement): any two conditionally complete
linearly ordered fields are uniquely order-isomorphic. The Mathlib
infrastructure exists piecewise (`Real.ringHomEquiv`, `OrderRingHom`),
but the unified categoricity theorem is not a single named result. -/
theorem real_number_axioms_categorical_placeholder : True := by
  trivial

end Codex.Analysis.RealNumbers
