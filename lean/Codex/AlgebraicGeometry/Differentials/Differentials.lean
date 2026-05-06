/-
  Codex.AlgebraicGeometry.Differentials.Differentials

  Companion Lean file for `04.08.01 Sheaf of differentials`.
  lean_status: partial. Mathlib has `KaehlerDifferential` for commutative
  algebra; the schematic globalisation `Ω¹_{X/Y}` as a sheaf is partial.
-/

import Mathlib.RingTheory.Kaehler.Basic

namespace Codex.AlgebraicGeometry.Differentials

-- The sheaf of differentials Ω¹_{X/Y} is the sheafification of the
-- presheaf U ↦ Ω¹_{O_X(U) / O_Y(f(U))}. Mathlib has
-- KaehlerDifferential for the affine/algebraic case; the global
-- scheme-theoretic sheaf is partially formalised.

example (R : Type*) [CommRing R] (S : Type*) [CommRing S] [Algebra R S] :
    Module S (Ω[S⁄R]) := inferInstance

end Codex.AlgebraicGeometry.Differentials
