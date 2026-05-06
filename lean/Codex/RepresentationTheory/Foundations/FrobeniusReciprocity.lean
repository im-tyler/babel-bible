/-
  Codex.RepresentationTheory.Foundations.FrobeniusReciprocity

  Companion Lean file for `07.01.08 Frobenius reciprocity`.
  lean_status: partial. Mathlib has the induction–restriction adjunction
  in `Mathlib.RepresentationTheory.Induced`.
-/

import Mathlib.RepresentationTheory.Basic
import Mathlib.RepresentationTheory.Induced

namespace Codex.RepresentationTheory.Foundations

-- Frobenius reciprocity:
-- Hom_G(Ind_H^G W, V) ≃ Hom_H(W, Res_H^G V).
-- Induction is left adjoint to restriction.
-- Mathlib: the adjunction is partially formalised via tensor-hom
-- adjointness and `Representation.ind`.

end Codex.RepresentationTheory.Foundations
