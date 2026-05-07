/-
  Codex.ModernGeometry.DifferentialForms.LieAlgebra

  Companion Lean file for `03.04.01 Lie algebra`.
  lean_status: partial. Mathlib provides `LieAlgebra`, `LieRing`,
  `LieSubalgebra`, and `LieHom` with the bracket notation `⁅·, ·⁆`.
  This module re-exports those structures and records the Codex
  conventions used in downstream units (Chern-Weil, Yang-Mills,
  central extensions, etc.).
-/

import Mathlib.Algebra.Lie.Basic
import Mathlib.Algebra.Lie.OfAssociative
import Mathlib.Algebra.Lie.Subalgebra

namespace Codex.ModernGeometry.DifferentialForms

universe u v

variable {K : Type u} [CommRing K] {L : Type v} [LieRing L] [LieAlgebra K L]

/-- Antisymmetry of the bracket as the equality `⁅X, Y⁆ = -⁅Y, X⁆`.
    Mathlib's `lie_skew x y` has type `-⁅y, x⁆ = ⁅x, y⁆`; symmetry gives the
    Codex-side orientation. -/
theorem bracket_antisymm (X Y : L) : ⁅X, Y⁆ = -⁅Y, X⁆ :=
  (lie_skew X Y).symm

/-- Jacobi identity in the cyclic-sum form. Mathlib's `lie_jacobi` provides
    exactly this statement; we re-export it so downstream Codex modules
    can call it under the local name. -/
theorem jacobi_cyclic (X Y Z : L) :
    ⁅X, ⁅Y, Z⁆⁆ + ⁅Y, ⁅Z, X⁆⁆ + ⁅Z, ⁅X, Y⁆⁆ = 0 :=
  lie_jacobi X Y Z

/-- The adjoint action `ad X : L → L`, `ad X Y = ⁅X, Y⁆`. -/
def ad (X : L) : L →ₗ[K] L where
  toFun Y := ⁅X, Y⁆
  map_add' := by intros; simp [lie_add]
  map_smul' := by intros; simp [lie_smul]

/-- The commutator on an associative `K`-algebra is a Lie bracket.
    This is Mathlib's `LieRing.ofAssociativeRing` / `LieAlgebra.ofAssociativeAlgebra`
    construction, made available as a Codex re-export. -/
example {A : Type*} [Ring A] [Algebra K A] : LieAlgebra K A := by
  infer_instance

end Codex.ModernGeometry.DifferentialForms
