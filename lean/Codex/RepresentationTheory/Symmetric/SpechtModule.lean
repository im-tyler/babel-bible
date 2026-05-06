/-
  Codex.RepresentationTheory.Symmetric.SpechtModule

  Companion Lean file for `07.05.03 Specht module`.
  lean_status: partial. Mathlib has `Equiv.Perm.cycleType`,
  `Combinatorics.Young.YoungDiagram`, and basic representation theory,
  but the Specht module construction (polytabloids inside the
  permutation module on tabloids) and its modular structure (heads
  D^λ for p-regular λ as the irreducible modular representations) are
  not yet formalised.
-/

import Mathlib.GroupTheory.Perm.Cycle.Type
import Mathlib.Combinatorics.Young.YoungDiagram
import Mathlib.RepresentationTheory.Basic

namespace Codex.RepresentationTheory.Symmetric

-- Specht module S^λ over a field k:
--   M^λ = k{tabloids of shape λ}, the permutation module on tabloids.
--   For each tableau T of shape λ, the polytabloid is
--     e_T = Σ_{σ ∈ C(T)} sgn(σ) · {σT}
--   where C(T) is the column stabiliser.
--   S^λ is the k-span of all polytabloids inside M^λ.
-- Theorem (Specht 1935; James 1976):
--   * char k = 0: {S^λ}_λ ⊢ n are exactly the irreducible kS_n-modules.
--   * char k = p > 0: D^λ = S^λ / rad(S^λ) for p-regular λ are exactly
--     the irreducible kS_n-modules.

end Codex.RepresentationTheory.Symmetric
