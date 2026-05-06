/-
  Codex.Foundations.LinearAlgebra.BilinearQuadraticForm

  Companion Lean file for `01.01.15 Bilinear form / quadratic form`.
  Mathlib has bilinear maps and quadratic forms; this file records the
  elementary bridge used in the unit.
-/

import Mathlib.LinearAlgebra.BilinearForm
import Mathlib.LinearAlgebra.QuadraticForm.Basic

namespace Codex.Foundations.LinearAlgebra

variable {K V : Type*} [Field K] [AddCommGroup V] [Module K V]

/-- A scalar-valued bilinear form in Mathlib notation. -/
abbrev ScalarBilinearForm := BilinForm K V

/-- A quadratic form in Mathlib notation. -/
abbrev ScalarQuadraticForm := QuadraticForm K V

/-- The quadratic form associated to a bilinear form by evaluating on the diagonal. -/
def quadraticFromBilinear (B : ScalarBilinearForm (K := K) (V := V)) :
    V → K :=
  fun v => B v v

end Codex.Foundations.LinearAlgebra
