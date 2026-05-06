/-
  Codex.AlgebraicGeometry.Sheaves.Stalk

  Companion Lean file for `04.01.02 Stalk of a sheaf`.
  lean_status: partial. Mathlib has `TopCat.Presheaf.stalk` and the
  full stalk API for presheaves and sheaves on topological spaces.
-/

import Mathlib.Topology.Sheaves.Stalks

namespace Codex.AlgebraicGeometry.Sheaves

-- Mathlib defines `TopCat.Presheaf.stalk F x` as the colimit
-- `colim_{U ∋ x} F(U)` over open neighbourhoods of `x`.
-- For sheaves, `F.stalk x = F.presheaf.stalk x`.

end Codex.AlgebraicGeometry.Sheaves
