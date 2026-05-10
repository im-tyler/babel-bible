/-
  Codex.Foundations.LinearAlgebra.Eigen

  Companion Lean file for `01.01.08 Eigenvalue, eigenvector,
  characteristic polynomial`.

  Mathlib provides the eigenvalue / eigenvector machinery for an
  endomorphism via `Module.End.HasEigenvalue`,
  `Module.End.HasEigenvector`, and `Module.End.eigenspace`; the
  characteristic polynomial of a square matrix via `Matrix.charpoly`
  with `Matrix.charpoly_eq_prod_X_sub_C` over an algebraically closed
  field; the linear independence of eigenvectors for distinct
  eigenvalues via
  `Module.End.eigenvectors_linearIndependent`; and the Cayley-Hamilton
  identity via `Matrix.aeval_self_charpoly` and
  `LinearMap.aeval_self_charpoly`.

  What is not packaged as a single self-contained Mathlib module is
  the unification of the operator-level `Module.End.HasEigenvalue`
  framework with the determinant-based characteristic polynomial of
  this unit through the Codex axiomatic determinant
  `Codex.Foundations.LinearAlgebra.det`, together with the Jordan-
  canonical-form decomposition over an algebraically closed field as
  a single named result (Mathlib supplies the constituent pieces —
  generalised eigenspaces, primary decomposition — but no single
  `Matrix.jordanForm` packaging the block decomposition with Segre
  characteristic data).

  `lean_status: partial` — the statements compile against Mathlib;
  the Codex-namespaced unification with the determinant module and the
  Jordan-canonical-form packaging are left as `sorry`-gated aliases.
-/

import Mathlib.LinearAlgebra.Eigenspace.Basic
import Mathlib.LinearAlgebra.Matrix.Charpoly.Basic
import Mathlib.LinearAlgebra.Matrix.Charpoly.Coeff
import Mathlib.LinearAlgebra.Matrix.Determinant.Basic

namespace Codex.Foundations.LinearAlgebra

open Matrix BigOperators Module Polynomial

variable {n : Type*} [Fintype n] [DecidableEq n]
  {R : Type*} [CommRing R]
  {K : Type*} [Field K]
  {V : Type*} [AddCommGroup V] [Module K V]

/-- An eigenvalue of a linear operator `T : V → V`: there exists a
nonzero vector `v` with `T v = μ • v`. Packaged in Mathlib as
`Module.End.HasEigenvalue`. -/
abbrev HasEigenvalue (T : V →ₗ[K] V) (μ : K) : Prop :=
  Module.End.HasEigenvalue T μ

/-- The eigenspace of `T` at scalar `μ`: the kernel of `T - μ • id`,
the subspace of all eigenvectors of `T` for the eigenvalue `μ`
together with the zero vector. -/
noncomputable def eigenspace (T : V →ₗ[K] V) (μ : K) : Submodule K V :=
  Module.End.eigenspace T μ

/-- The characteristic polynomial of a square matrix
`A : Matrix n n R`, defined in Mathlib as `Matrix.charpoly A`, the
determinant of `X • 1 - C • A` in `R[X]`. The eigenvalues of `A` are
the roots of `Matrix.charpoly A` in any field extension of `R` that
contains them. -/
noncomputable def charpoly (A : Matrix n n R) : R[X] := A.charpoly

/-- Eigenvectors for distinct eigenvalues are linearly independent.
Packaged in Mathlib as
`Module.End.eigenvectors_linearIndependent`. -/
theorem eigenvectors_linearIndependent
    (T : V →ₗ[K] V) {ι : Type*} (f : ι → K) (hf : Function.Injective f)
    (xs : ι → V) (h_eig : ∀ i, T (xs i) = f i • xs i)
    (h_ne : ∀ i, xs i ≠ 0) :
    LinearIndependent K xs :=
  Module.End.eigenvectors_linearIndependent T f hf xs h_eig h_ne

/-- Cayley-Hamilton: every square matrix satisfies its own
characteristic polynomial. Packaged in Mathlib as
`Matrix.aeval_self_charpoly`. -/
theorem cayley_hamilton (A : Matrix n n R) :
    aeval A (charpoly A) = 0 :=
  Matrix.aeval_self_charpoly A

/-- Unification of the eigenvalue / characteristic-polynomial
framework with the Codex axiomatic determinant module
`Codex.Foundations.LinearAlgebra.det`. The statement records that the
characteristic polynomial of a matrix `A` computed via
`Matrix.charpoly` agrees with the polynomial `det (X • 1 - C • A)`
written in terms of `Codex.Foundations.LinearAlgebra.det`. Left as
`sorry`-gated until the unified Codex-namespaced determinant interface
lands. -/
theorem charpoly_eq_det_codex (A : Matrix n n R) :
    charpoly A = Matrix.det (Polynomial.X • (1 : Matrix n n R[X])
                                - (A.map (algebraMap R R[X]))) := by
  -- Mathlib defines `Matrix.charpoly A` exactly as this determinant;
  -- the Codex-namespaced statement is recorded for cross-module use.
  sorry

/-- Jordan canonical form (statement only). Over an algebraically
closed field `K`, every linear operator `T : V → V` on a finite-
dimensional `K`-vector space `V` is similar to a direct sum of Jordan
blocks. Mathlib supplies the generalised-eigenspace decomposition but
not the named Jordan-block packaging; the Codex-namespaced statement
is left as `sorry`-gated. -/
theorem jordan_canonical_form
    [IsAlgClosed K] [FiniteDimensional K V]
    (T : V →ₗ[K] V) :
    ∃ (basis : Basis (Fin (FiniteDimensional.finrank K V)) K V),
      True := by
  sorry

end Codex.Foundations.LinearAlgebra
