/-
  Codex.AlgebraicGeometry.Schemes.Scheme

  Companion Lean file for `04.02.01 Scheme`.
  lean_status: partial. Mathlib has `AlgebraicGeometry.Scheme`,
  `AlgebraicGeometry.Spec`, and the Spec / Γ adjunction.
-/

import Mathlib.AlgebraicGeometry.Scheme

namespace Codex.AlgebraicGeometry.Schemes

example (R : CommRingCat) : AlgebraicGeometry.Scheme :=
  AlgebraicGeometry.Spec.obj (Opposite.op R)

end Codex.AlgebraicGeometry.Schemes
