/-
  Codex.AlgebraicGeometry.Schemes.AffineScheme

  Companion Lean file for `04.02.02 Affine scheme`.
  lean_status: partial. Mathlib has `AlgebraicGeometry.AffineScheme`,
  `AlgebraicGeometry.Spec`, and the Spec/Γ adjunction.
-/

import Mathlib.AlgebraicGeometry.AffineScheme

namespace Codex.AlgebraicGeometry.Schemes

open AlgebraicGeometry

example (R : CommRingCat) : AffineScheme :=
  AffineScheme.of (Spec.obj (Opposite.op R))

end Codex.AlgebraicGeometry.Schemes
