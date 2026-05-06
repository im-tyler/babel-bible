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
    Available in Mathlib as `lie_skew`; re-exported here for clarity. -/
theorem bracket_antisymm (X Y : L) : ⁅X, Y⁆ = -⁅Y, X⁆ :=
  lie_skew Y X |>.symm

/-- Jacobi identity in the cyclic-sum form. Mathlib's `leibniz_lie` is the
    Leibniz form `⁅X, ⁅Y, Z⁆⁆ = ⁅⁅X, Y⁆, Z⁆ + ⁅Y, ⁅X, Z⁆⁆`; the cyclic
    form below follows by antisymmetry. -/
theorem jacobi_cyclic (X Y Z : L) :
    ⁅X, ⁅Y, Z⁆⁆ + ⁅Y, ⁅Z, X⁆⁆ + ⁅Z, ⁅X, Y⁆⁆ = 0 := by
  have h := leibniz_lie X Y Z
  -- h : ⁅X, ⁅Y, Z⁆⁆ = ⁅⁅X, Y⁆, Z⁆ + ⁅Y, ⁅X, Z⁆⁆
  -- Rearranging plus antisymmetry yields the cyclic identity.
  have hYZX : ⁅Y, ⁅Z, X⁆⁆ = -⁅⁅X, Y⁆, Z⁆ - ⁅Z, ⁅X, Y⁆⁆ := by
    have := leibniz_lie Y Z X
    simp [bracket_antisymm] at this ⊢
    linear_combination this
  sorry  -- pending: reformulation through Mathlib's exact lemma `lie_jacobi`

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
