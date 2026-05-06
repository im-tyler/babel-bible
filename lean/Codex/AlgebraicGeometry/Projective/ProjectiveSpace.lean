/-
  Codex.AlgebraicGeometry.Projective.ProjectiveSpace

  Companion Lean file for `04.07.01 Projective space`.
  lean_status: partial. Mathlib has `Projectivization` and
  `AlgebraicGeometry.ProjectiveSpace`.
-/

import Mathlib.LinearAlgebra.Projectivization.Basic

namespace Codex.AlgebraicGeometry.Projective

open Projectivization

example (k : Type*) [Field k] (V : Type*) [AddCommGroup V] [Module k V]
    (v : V) (hv : v ≠ 0) : Projectivization k V :=
  Projectivization.mk k v hv

end Codex.AlgebraicGeometry.Projective
