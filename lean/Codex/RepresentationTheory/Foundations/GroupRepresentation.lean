/-
  Codex.RepresentationTheory.Foundations.GroupRepresentation

  Companion Lean file for `07.01.01 Group representation`.
  lean_status: partial. Mathlib has `Representation` and basic API
  in `Mathlib.RepresentationTheory.Basic`.
-/

import Mathlib.RepresentationTheory.Basic

namespace Codex.RepresentationTheory.Foundations

open Representation

example {G V : Type*} [Group G] [AddCommGroup V] [Module ℂ V]
    (ρ : Representation ℂ G V) (g h : G) :
    ρ (g * h) = ρ g * ρ h :=
  ρ.map_mul g h

end Codex.RepresentationTheory.Foundations
