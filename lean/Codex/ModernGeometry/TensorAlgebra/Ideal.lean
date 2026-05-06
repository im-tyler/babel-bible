/-
  Codex.ModernGeometry.TensorAlgebra.Ideal

  Companion Lean file for `03.01.03 Ideal in an algebra`.
-/

import Mathlib.RingTheory.Ideal.Basic

namespace Codex.ModernGeometry.TensorAlgebra

variable {R : Type*} [CommSemiring R]

/-- Ideals are closed under addition. -/
theorem ideal_add_mem (I : Ideal R) {x y : R} (hx : x ∈ I) (hy : y ∈ I) :
    x + y ∈ I :=
  I.add_mem hx hy

/-- Ideals absorb multiplication on the left. -/
theorem ideal_mul_mem_left (I : Ideal R) (a : R) {x : R} (hx : x ∈ I) :
    a * x ∈ I :=
  I.mul_mem_left a hx

/-- Ideals absorb multiplication on the right. -/
theorem ideal_mul_mem_right (I : Ideal R) {x : R} (hx : x ∈ I) (a : R) :
    x * a ∈ I :=
  I.mul_mem_right a hx

end Codex.ModernGeometry.TensorAlgebra
