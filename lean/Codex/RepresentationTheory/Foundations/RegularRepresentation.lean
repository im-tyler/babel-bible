/-
  Codex.RepresentationTheory.Foundations.RegularRepresentation

  Companion Lean file for `07.01.05 Regular representation`.
  lean_status: partial. Mathlib has the regular representation
  via `MonoidAlgebra` and the action by left multiplication.
-/

import Mathlib.RepresentationTheory.Basic
import Mathlib.Algebra.MonoidAlgebra.Basic

namespace Codex.RepresentationTheory.Foundations

-- The (left) regular representation of a group G acts on the group
-- algebra k[G] = MonoidAlgebra k G by left multiplication:
-- ρ_reg(g)(e_h) = e_{g·h}.
-- Mathlib: `MonoidAlgebra.lift` and the natural left action of `G` on
-- its own group algebra.

end Codex.RepresentationTheory.Foundations
