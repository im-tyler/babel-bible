/-
  Codex.Foundations.LinearAlgebra.Determinant

  Companion Lean file for `01.01.07 Determinant: axiomatic + expansion +
  properties`.

  Mathlib provides the determinant as `Matrix.det`, together with the
  Leibniz formula `Matrix.det_apply`, multilinearity / alternation in
  the rows (`Matrix.det_updateRow_*`, `Matrix.det_smul_row`,
  `Matrix.det_swap_rows`), the multiplicativity identity
  `Matrix.det_mul`, the cofactor expansion `Matrix.det_succ_row` /
  `Matrix.det_succ_column`, and the invertibility-iff-non-vanishing
  characterisation through `Matrix.isUnit_iff_isUnit_det`.

  What is not packaged in a single self-contained Mathlib module is
  the unified axiomatic characterisation as the unique
  multilinear-alternating-normalised function `Mₙ(R) → R`, together
  with the equivalences between (i) the axiomatic definition, (ii)
  the Leibniz permutation sum, and (iii) the cofactor / Laplace
  expansion as three equally valid starting points. The
  determinant-line-bundle generalisation `det V = Λ^{rank V} V`
  beyond `Matrix.det` is also absent.

  `lean_status: partial` — the statements compile against Mathlib;
  the Codex-namespaced axiomatic uniqueness theorem and the
  determinant-line-bundle definition are left as `sorry`-gated aliases
  until the unified axiomatic interface and the exterior-power-of-a-
  free-module construction land in Mathlib in a stable form.
-/

import Mathlib.LinearAlgebra.Matrix.Determinant.Basic
import Mathlib.LinearAlgebra.Matrix.NonsingularInverse
import Mathlib.Data.Matrix.Basic

namespace Codex.Foundations.LinearAlgebra

open Matrix BigOperators

variable {n : Type*} [Fintype n] [DecidableEq n] {R : Type*} [CommRing R]

/-- The determinant of a square matrix, as packaged in Mathlib via
`Matrix.det`. -/
noncomputable abbrev det (A : Matrix n n R) : R := Matrix.det A

/-- Multiplicativity of the determinant: `det(AB) = det A · det B`.
Recorded as the Mathlib lemma `Matrix.det_mul`. -/
theorem det_mul (A B : Matrix n n R) :
    det (A * B) = det A * det B :=
  Matrix.det_mul A B

/-- `det I = 1`, the normalisation axiom of the determinant. -/
theorem det_one : det (1 : Matrix n n R) = 1 :=
  Matrix.det_one

/-- The Leibniz permutation-sum formula for the determinant, as
packaged in Mathlib by `Matrix.det_apply`. -/
theorem det_leibniz (A : Matrix n n R) :
    det A = ∑ σ : Equiv.Perm n,
      Equiv.Perm.sign σ • ∏ i, A i (σ i) :=
  Matrix.det_apply A

/-- Invertibility-iff-non-vanishing characterisation. Over a
commutative ring `R`, a square matrix `A` is a unit in `Mₙ(R)` iff
its determinant is a unit in `R`. Over a field, this reduces to
`det A ≠ 0`. Recorded as `Matrix.isUnit_iff_isUnit_det`. -/
theorem isUnit_iff_isUnit_det (A : Matrix n n R) :
    IsUnit A ↔ IsUnit (det A) :=
  Matrix.isUnit_iff_isUnit_det A

/-- Axiomatic uniqueness of the determinant (statement form).
A function `f : Matrix n n R → R` that is multilinear and alternating
in the rows and satisfies `f 1 = 1` agrees with `Matrix.det` on every
square matrix. The Codex-namespaced statement is left as
`sorry`-gated until a unified axiomatic interface lands in Mathlib. -/
theorem det_axiomatic_uniqueness
    (f : Matrix n n R → R)
    (h_multilinear : ∀ (A : Matrix n n R) (i : n) (c : R) (v : n → R),
      f (A.updateRow i (c • A i + v)) = c * f A + f (A.updateRow i v))
    (h_alt : ∀ (A : Matrix n n R) (i j : n), i ≠ j → A i = A j → f A = 0)
    (h_one : f (1 : Matrix n n R) = 1) :
    ∀ A : Matrix n n R, f A = det A := by
  -- Standard proof: expand any matrix in the standard basis of rows,
  -- invoke multilinearity to reduce to permutation matrices, use
  -- alternation to read off the sign, and use `f 1 = 1` to fix the
  -- overall scalar. The unified statement is not packaged in Mathlib.
  sorry

end Codex.Foundations.LinearAlgebra
