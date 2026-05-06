/-
  Codex.ModernGeometry.TensorAlgebra.AssociativeAlgebra

  Companion Lean file for `03.01.02 Associative algebra`.
-/

import Mathlib.Algebra.Algebra.Basic

namespace Codex.ModernGeometry.TensorAlgebra

variable {K A : Type*} [CommSemiring K] [Semiring A] [Algebra K A]

/-- Multiplication in a Mathlib algebra is associative. -/
theorem algebra_mul_assoc (a b c : A) :
    (a * b) * c = a * (b * c) :=
  mul_assoc a b c

/-- The scalar action agrees with the algebra map from the base. -/
theorem algebra_smul_def (r : K) (a : A) :
    r • a = (algebraMap K A r) * a :=
  Algebra.smul_def r a

end Codex.ModernGeometry.TensorAlgebra
