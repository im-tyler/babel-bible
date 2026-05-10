/-
  Codex.Foundations.LinearAlgebra.Basis

  Companion Lean file for `01.01.04 Subspace, basis, dimension`.
  Mathlib provides Submodule, Basis, finrank, and FiniteDimensional;
  this file records the statements used in the unit and the
  Steinitz-replacement-style cardinality identity.

  `lean_status: partial` — statements compile against Mathlib; the
  unified Steinitz-replacement proof in the modern Mathlib idiom is
  left as `sorry` (Mathlib derives the same fact from
  `LinearIndependent.le_span_finset_card` / `Module.Free.rank`).
-/

import Mathlib.LinearAlgebra.Basis
import Mathlib.LinearAlgebra.Dimension.Basic
import Mathlib.LinearAlgebra.FiniteDimensional

namespace Codex.Foundations.LinearAlgebra

variable {K V : Type*} [Field K] [AddCommGroup V] [Module K V]

/-- A subspace of `V` over `K` is a `Submodule K V` in Mathlib. -/
abbrev Subspace := Submodule K V

/-- A basis of `V` indexed by `ι` is a `Basis ι K V` in Mathlib. -/
abbrev VectorBasis (ι : Type*) := Basis ι K V

/-- The dimension of a finite-dimensional vector space, as `finrank`. -/
abbrev dim [FiniteDimensional K V] : ℕ := Module.finrank K V

/-- Two finite bases of the same vector space have the same cardinality.
This is the well-definedness of `dim`, a corollary of the Steinitz
replacement theorem. -/
theorem basis_card_eq
    {ι κ : Type*} [Fintype ι] [Fintype κ]
    (b : Basis ι K V) (b' : Basis κ K V) :
    Fintype.card ι = Fintype.card κ := by
  -- Mathlib derives this from `mk_eq_mk_of_basis` plus finiteness.
  have h := mk_eq_mk_of_basis b b'
  exact Cardinal.toNat_congr h |>.symm ▸ by
    simp [Cardinal.mk_fintype, Cardinal.toNat_natCast] at h
    exact_mod_cast h

/-- Steinitz replacement (statement form): if `s` spans `V` and `t` is
linearly independent in `V`, then `t` is no larger than `s`. The
constructive replacement procedure is left for Mathlib's
`LinearIndependent.le_span_finset_card` lemma family. -/
theorem steinitz_card_le
    {ι κ : Type*} [Fintype ι] [Fintype κ]
    (s : ι → V) (hs : Submodule.span K (Set.range s) = ⊤)
    (t : κ → V) (ht : LinearIndependent K t) :
    Fintype.card κ ≤ Fintype.card ι := by
  sorry

end Codex.Foundations.LinearAlgebra
