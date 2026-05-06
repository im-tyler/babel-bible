/-
  Codex.AlgebraicGeometry.Sheaves.Sheaf

  Companion Lean file for `04.01.01 Sheaf`.
  lean_status: partial. Mathlib has `CategoryTheory.Sites.Sheaf` and
  `Topology.Sheaves.Sheaf` with full categorical sheaf API.
-/

import Mathlib.Topology.Sheaves.Sheaf
import Mathlib.CategoryTheory.Sites.Sheaf

namespace Codex.AlgebraicGeometry.Sheaves

variable {X : TopCat.{0}}

example (C : Type*) [CategoryTheory.Category C]
    [CategoryTheory.Limits.HasProducts C] (F : TopCat.Sheaf C X) :
    TopCat.Sheaf C X := F

end Codex.AlgebraicGeometry.Sheaves
