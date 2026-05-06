/-
  Codex.RepresentationTheory.Foundations.InducedRepresentation

  Companion Lean file for `07.01.07 Induced representation`.
  lean_status: partial. Mathlib has the algebraic-induction
  construction via `MonoidAlgebra` tensor products and
  `Representation.ofMulAction`, plus partial induced-rep API in
  `Mathlib.RepresentationTheory.Induced`.
-/

import Mathlib.RepresentationTheory.Basic
import Mathlib.RepresentationTheory.Induced

namespace Codex.RepresentationTheory.Foundations

-- Induced representation: from ρ : H → GL(W) for H ≤ G, build
-- Ind_H^G W := k[G] ⊗_{k[H]} W with G acting on the left factor.
-- Mathlib: `Representation.ind` (partial coverage).

end Codex.RepresentationTheory.Foundations
