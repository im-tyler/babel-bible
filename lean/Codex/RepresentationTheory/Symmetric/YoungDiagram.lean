/-
  Codex.RepresentationTheory.Symmetric.YoungDiagram

  Companion Lean file for `07.05.02 Young diagram and tableau`.
  lean_status: partial. Mathlib has `Combinatorics.Young.YoungDiagram`
  (Young diagrams as combinatorial objects) and
  `Combinatorics.Young.SemistandardYoungTableau`. The hook length
  formula and the connection to representations of the symmetric
  group are not yet formalised.
-/

import Mathlib.Combinatorics.Young.YoungDiagram
import Mathlib.Combinatorics.Young.SemistandardYoungTableau

namespace Codex.RepresentationTheory.Symmetric

-- Young diagrams: left-justified arrays of boxes encoding partitions.
-- Standard Young tableaux: fillings strictly increasing along rows and
-- columns; counted by f^λ = n! / ∏ h(i,j) (hook length formula).
-- Schur polynomials: generating functions for semistandard tableaux,
-- characters of polynomial GL_d-representations.

end Codex.RepresentationTheory.Symmetric
