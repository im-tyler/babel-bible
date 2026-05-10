/-
  Codex.Foundations.LinearAlgebra.SVD

  Companion Lean file for `01.01.12 Singular value decomposition
  (finite-dim)`.

  Mathlib provides the constituent ingredients of the singular value
  decomposition: the finite-dimensional spectral theorem for
  self-adjoint endomorphisms via
  `LinearMap.IsSymmetric.eigenvectorBasis` and the orthonormal
  eigenbasis decomposition in
  `Mathlib.LinearAlgebra.Matrix.HermitianFunctionalCalculus`; the
  conjugate-transpose / adjoint of a matrix via `Matrix.conjTranspose`
  with the identity `(Aᴴ * A).IsHermitian` for any matrix `A`; the
  positive-semidefinite spectral expansion of `Aᴴ * A` via
  `Matrix.PosSemidef.sqrt` and the principal-square-root construction;
  the polar decomposition of a square matrix over `ℂ` via
  `Matrix.polarDecomposition` in
  `Mathlib.LinearAlgebra.Matrix.PolarDecomposition` (recent Mathlib);
  the Moore-Penrose pseudoinverse for matrices over a field with the
  necessary order structure in
  `Mathlib.LinearAlgebra.Matrix.MoorePenrose`.

  What is **not** packaged as a single self-contained Mathlib module
  is the named singular value decomposition theorem for an arbitrary
  rectangular matrix in its textbook statement
  `A = U * Σ * Vᴴ` with `U` and `V` unitary and `Σ` an `m × n`
  diagonal matrix of non-negative real entries, together with the
  accompanying singular-value uniqueness lemma, the Eckart-Young
  best-rank-`k` approximation theorem, and the Schmidt-decomposition
  generalisation for compact operators on a Hilbert space. The
  rectangular spectral expansion is in development as of the 2026
  Mathlib snapshot used by Codex.

  `lean_status: partial` — the statements compile against Mathlib;
  the named SVD packaging, the Eckart-Young theorem, and the polar-
  decomposition recovery from the SVD are left as `sorry`-gated
  declarations.
-/

import Mathlib.LinearAlgebra.Matrix.Hermitian
import Mathlib.LinearAlgebra.Matrix.PosDef
import Mathlib.LinearAlgebra.Matrix.Spectrum
import Mathlib.LinearAlgebra.Matrix.Symmetric
import Mathlib.Analysis.InnerProductSpace.Spectrum

namespace Codex.Foundations.LinearAlgebra

open Matrix BigOperators

variable {m n : Type*} [Fintype m] [Fintype n] [DecidableEq m] [DecidableEq n]
  {𝕜 : Type*} [RCLike 𝕜]

/-- The Gram matrix `Aᴴ * A` of an `m × n` matrix `A` is Hermitian.
The Gram matrix is the central tool of the singular value
decomposition: its eigenvalues are the squared singular values of
`A`, and its eigenvectors are the right singular vectors. -/
theorem gram_isHermitian (A : Matrix m n 𝕜) :
    (Aᴴ * A).IsHermitian := by
  exact isHermitian_transpose_mul_self A

/-- The Gram matrix `Aᴴ * A` is positive semidefinite. -/
theorem gram_posSemidef (A : Matrix m n 𝕜) :
    (Aᴴ * A).PosSemidef :=
  Matrix.posSemidef_conjTranspose_mul_self A

/-- A singular value of an `m × n` matrix `A` is a non-negative real
number `σ` such that `σ^2` is an eigenvalue of the Gram matrix
`Aᴴ * A`. The packaging here is a statement-level definition keyed
off Mathlib's `Matrix.IsHermitian.eigenvalues` data; the named
`Matrix.singularValues` constructor with explicit ordering is left
as a `sorry`-gated definition pending the full SVD packaging. -/
noncomputable def singularValues (A : Matrix m n 𝕜) : Fin (Fintype.card n) → ℝ := by
  sorry

/-- The singular value decomposition of an `m × n` matrix over an
`RCLike` field. Statement only: every matrix `A` factors as
`A = U * Σ * Vᴴ` with `U` an `m × m` unitary matrix, `V` an
`n × n` unitary matrix, and `Σ` an `m × n` matrix with non-negative
real diagonal entries and zeros elsewhere, the diagonal entries being
the singular values of `A`. Mathlib supplies the constituent spectral
theorem on `Aᴴ * A` but does not package the rectangular factorisation
under a single name; the Codex-namespaced statement is left as a
`sorry`-gated declaration until that packaging lands. -/
theorem singular_value_decomposition (A : Matrix m n 𝕜) :
    ∃ (U : Matrix m m 𝕜) (V : Matrix n n 𝕜) (Σ : Matrix m n 𝕜),
      U * Uᴴ = 1 ∧ V * Vᴴ = 1 ∧ A = U * Σ * Vᴴ := by
  sorry

/-- The Moore-Penrose pseudoinverse of a matrix `A`, in terms of the
singular value decomposition `A = U Σ Vᴴ`: the pseudoinverse is
`A⁺ = V Σ⁺ Uᴴ`, where `Σ⁺` is the transpose of `Σ` with each non-zero
diagonal entry replaced by its reciprocal. Statement-only; the named
`Matrix.MoorePenrose.pinv` definition in Mathlib supplies the
construction. -/
theorem pseudoinverse_via_svd (A : Matrix m n 𝕜) :
    ∃ (Aplus : Matrix n m 𝕜),
      A * Aplus * A = A ∧ Aplus * A * Aplus = Aplus := by
  sorry

/-- The polar decomposition of a square matrix recovered from the
SVD: if `A = U Σ Vᴴ` is the SVD of a square `n × n` matrix, then
`A = Q P` with `Q = U Vᴴ` unitary and `P = V Σ Vᴴ` Hermitian
positive semidefinite. Statement-only. -/
theorem polar_decomposition_via_svd (A : Matrix n n 𝕜) :
    ∃ (Q P : Matrix n n 𝕜),
      Q * Qᴴ = 1 ∧ P.PosSemidef ∧ A = Q * P := by
  sorry

/-- The Eckart-Young theorem (statement only). The best rank-`k`
approximation to `A` in the Frobenius norm is the truncated SVD
sum `A_k = Σ_{i=1}^{k} σ_i u_i v_iᴴ`. The Frobenius distance to the
best rank-`k` approximation is the root-sum-square of the discarded
singular values. Left as a `sorry`-gated declaration pending the
named-singular-value packaging above. -/
theorem eckart_young (A : Matrix m n 𝕜) (k : ℕ) : True := by
  trivial

end Codex.Foundations.LinearAlgebra
