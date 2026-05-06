/-
  Codex.Foundations.LinearAlgebra.VectorSpace

  Companion Lean file for `01.01.03 Vector space`.
  Mathlib models vector spaces as modules over a field.
-/

import Mathlib.LinearAlgebra.Basic

namespace Codex.Foundations.LinearAlgebra

variable {K V : Type*} [Field K] [AddCommGroup V] [Module K V]

/-- Scalar multiplication distributes over vector addition. -/
theorem smul_add_vector (a : K) (v w : V) :
    a • (v + w) = a • v + a • w :=
  smul_add a v w

/-- Scalar multiplication distributes over scalar addition. -/
theorem add_smul_vector (a b : K) (v : V) :
    (a + b) • v = a • v + b • v :=
  add_smul a b v

/-- Multiplication by the scalar zero gives the zero vector. -/
theorem zero_smul_vector (v : V) :
    (0 : K) • v = 0 :=
  zero_smul K v

/-- Multiplication of the zero vector by any scalar gives the zero vector. -/
theorem smul_zero_vector (a : K) :
    a • (0 : V) = 0 :=
  smul_zero a

/-- Additive cancellation is available in every vector space. -/
theorem add_left_cancel_vector (u v w : V) (h : u + v = u + w) :
    v = w :=
  add_left_cancel h

end Codex.Foundations.LinearAlgebra
