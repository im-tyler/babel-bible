/-
  Codex.AlgebraicGeometry.Sheaves.DirectInverseImage

  Companion Lean file for `04.01.04 Direct and inverse image of sheaves`.
  lean_status: partial. Mathlib has `TopCat.Presheaf.pushforward` and
  `TopCat.Sheaf.pullback` with the f^{-1} ⊣ f_* adjunction.
-/

import Mathlib.Topology.Sheaves.Functors

namespace Codex.AlgebraicGeometry.Sheaves

-- Direct image (pushforward): (f_* F)(V) = F(f^{-1}(V)).
-- Inverse image (pullback): f^{-1} G is the sheafification of
-- V ↦ colim_{U ⊇ f(V)} G(U).
-- Adjunction: f^{-1} ⊣ f_*.

end Codex.AlgebraicGeometry.Sheaves
