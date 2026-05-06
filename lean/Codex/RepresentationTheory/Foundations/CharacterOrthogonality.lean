/-
  Codex.RepresentationTheory.Foundations.CharacterOrthogonality

  Companion Lean file for `07.01.04 Character orthogonality`.
  lean_status: partial. Mathlib has the orthogonality relations in
  `Mathlib.RepresentationTheory.Character` (`char_orthonormal`).
-/

import Mathlib.RepresentationTheory.Basic
import Mathlib.RepresentationTheory.Character

namespace Codex.RepresentationTheory.Foundations

-- First orthogonality (row): for irreducible complex representations
-- V, W of a finite group G, ⟨χ_V, χ_W⟩_G = δ_{V, W}.
-- Mathlib: `FdRep.char_orthonormal`.

-- Second orthogonality (column): for g, h ∈ G,
-- Σ_V χ_V(g) χ_V(h)⁻¹ = |C_G(g)| if g ~ h, else 0.

end Codex.RepresentationTheory.Foundations
