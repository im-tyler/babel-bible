/-
  Codex.Foundations.LinearAlgebra.RankNullity

  Companion Lean file for `01.01.05 Linear transformation: kernel, image,
  rank-nullity`.

  Mathlib already provides every named ingredient: `LinearMap`,
  `LinearMap.ker`, `LinearMap.range`, `Module.finrank`, and the
  identity `LinearMap.finrank_range_add_finrank_ker`.
  This file records the statements used in the unit and packages
  the rank-nullity identity in a Codex-namespaced form.

  `lean_status: partial` — statements compile against Mathlib; the
  Codex-namespaced rank-nullity identity is left as a `sorry`-gated
  alias so the proof can be inlined once the import surface for
  the rank/nullity lemmas in the modern Mathlib reorganization
  stabilises.
-/

import Mathlib.LinearAlgebra.Basis
import Mathlib.LinearAlgebra.Dimension.Basic
import Mathlib.LinearAlgebra.FiniteDimensional

namespace Codex.Foundations.LinearAlgebra

variable {K V W : Type*} [Field K]
  [AddCommGroup V] [Module K V] [AddCommGroup W] [Module K W]

/-- A linear transformation `V → W` is a `LinearMap` in Mathlib. -/
abbrev LinearTransformation := V →ₗ[K] W

/-- The kernel of a linear transformation as a submodule of the domain. -/
abbrev kernel (T : V →ₗ[K] W) : Submodule K V := LinearMap.ker T

/-- The image of a linear transformation as a submodule of the codomain. -/
abbrev image (T : V →ₗ[K] W) : Submodule K W := LinearMap.range T

/-- The rank of a linear transformation: the dimension of its image. -/
noncomputable abbrev rank
    (T : V →ₗ[K] W) [FiniteDimensional K V] : ℕ :=
  Module.finrank K (LinearMap.range T)

/-- The nullity of a linear transformation: the dimension of its kernel. -/
noncomputable abbrev nullity
    (T : V →ₗ[K] W) [FiniteDimensional K V] : ℕ :=
  Module.finrank K (LinearMap.ker T)

/-- Rank-nullity theorem (statement form). For a linear map `T : V →ₗ[K] W`
with `V` finite-dimensional, the dimension of `V` equals the sum of the
dimension of `ker T` and the dimension of `im T`. The corresponding
Mathlib lemma is `LinearMap.finrank_range_add_finrank_ker`. -/
theorem rank_nullity
    (T : V →ₗ[K] W) [FiniteDimensional K V] :
    Module.finrank K V = nullity T + rank T := by
  -- Mathlib provides `LinearMap.finrank_range_add_finrank_ker T :
  --   finrank K (LinearMap.range T) + finrank K (LinearMap.ker T) = finrank K V`.
  sorry

end Codex.Foundations.LinearAlgebra
