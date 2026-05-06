/-
  Codex.Foundations.LinearAlgebra.Field

  Companion Lean file for `01.01.01 Field`.
  Mathlib represents fields by the `Field` typeclass.
-/

import Mathlib.Algebra.Field.Basic

namespace Codex.Foundations.LinearAlgebra

variable {K : Type*} [Field K]

/-- Addition in a field is associative. -/
theorem field_add_assoc (a b c : K) :
    (a + b) + c = a + (b + c) :=
  add_assoc a b c

/-- Multiplication in a field is associative. -/
theorem field_mul_assoc (a b c : K) :
    (a * b) * c = a * (b * c) :=
  mul_assoc a b c

/-- Multiplication distributes over addition. -/
theorem field_left_distrib (a b c : K) :
    a * (b + c) = a * b + a * c :=
  left_distrib a b c

/-- A nonzero element multiplied by its inverse is one. -/
theorem field_mul_inv_cancel {a : K} (ha : a ≠ 0) :
    a * a⁻¹ = 1 :=
  mul_inv_cancel₀ ha

end Codex.Foundations.LinearAlgebra
