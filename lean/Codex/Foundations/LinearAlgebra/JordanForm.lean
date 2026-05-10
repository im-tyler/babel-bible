/-
  Codex.Foundations.LinearAlgebra.JordanForm

  Companion Lean file for `01.01.11 Jordan canonical form and minimal
  polynomial`.

  Mathlib provides the minimal polynomial of an endomorphism via
  `Module.End.minpoly` and `minpoly`, the divisibility relation
  `minpoly ∣ charpoly` via `Polynomial.minpoly_dvd` together with the
  Cayley-Hamilton identity `Matrix.aeval_self_charpoly`, the
  generalised-eigenspace construction
  `Module.End.generalizedEigenspace`, and the primary-decomposition
  result `Module.End.iSup_generalizedEigenspace_eq_top` (over an
  algebraically closed field, the generalised eigenspaces sum to the
  whole module). The diagonalisability-iff-square-free-minimal-
  polynomial characterisation is packaged as
  `Module.End.isSemisimple_iff_squarefree_minpoly` in the surrounding
  Mathlib development.

  What is **not** packaged as a single self-contained Mathlib module
  is the Jordan canonical form theorem in its standard textbook
  statement — there is no `Matrix.jordanForm` constructor returning a
  block-diagonal matrix with explicit Jordan blocks and an
  accompanying uniqueness lemma keyed off the Segre characteristic.
  The Smith normal form for matrices over an arbitrary principal
  ideal domain is similarly partial: Mathlib has `Matrix.smithNormal`
  for matrices over `ℤ` (via `Matrix.Equiv.smithNormalForm`) but the
  general PID case is in development.

  `lean_status: partial` — the statements compile against Mathlib;
  the named Jordan-canonical-form packaging and the Segre-characteristic
  uniqueness lemma are left as `sorry`-gated declarations.
-/

import Mathlib.LinearAlgebra.Eigenspace.Basic
import Mathlib.LinearAlgebra.Eigenspace.Triangularizable
import Mathlib.LinearAlgebra.Matrix.Charpoly.Basic
import Mathlib.FieldTheory.Minpoly.Basic
import Mathlib.RingTheory.Polynomial.Basic

namespace Codex.Foundations.LinearAlgebra

open Matrix BigOperators Module Polynomial

variable {n : Type*} [Fintype n] [DecidableEq n]
  {R : Type*} [CommRing R]
  {K : Type*} [Field K]
  {V : Type*} [AddCommGroup V] [Module K V]

/-- The minimal polynomial of a linear endomorphism `T : V → V` over
a field `K`: the monic generator of the ideal of polynomials
`p ∈ K[X]` with `p(T) = 0`. Packaged in Mathlib as `minpoly K T`. -/
noncomputable def minPolyOf (T : V →ₗ[K] V) : K[X] := minpoly K T

/-- Jordan block `J_k(λ)`: the `k × k` matrix with `λ` on the diagonal
and `1` on the superdiagonal. Defined entry-wise on `Fin k`. -/
def jordanBlock (k : ℕ) (lam : K) : Matrix (Fin k) (Fin k) K :=
  fun i j =>
    if i = j then lam
    else if (j : ℕ) = (i : ℕ) + 1 then (1 : K)
    else 0

/-- The generalised eigenspace of `T : V → V` at scalar `μ ∈ K` and
exponent `m`: the kernel of `(T - μ • id)^m`. Packaged in Mathlib as
`Module.End.generalizedEigenspace`. -/
noncomputable def generalizedEigenspace (T : V →ₗ[K] V) (mu : K) (m : ℕ) :
    Submodule K V :=
  Module.End.generalizedEigenspace T mu m

/-- Cayley-Hamilton implies the minimal polynomial divides the
characteristic polynomial of a square matrix. The Mathlib name
combines `Matrix.aeval_self_charpoly` with `minpoly.dvd`. -/
theorem minpoly_dvd_charpoly (A : Matrix n n K) :
    minpoly K A ∣ A.charpoly := by
  -- `Matrix.aeval_self_charpoly` gives `(aeval A) A.charpoly = 0`;
  -- `minpoly.dvd` converts that into the divisibility statement.
  exact minpoly.dvd K A (Matrix.aeval_self_charpoly A)

/-- The diagonalisability criterion: a linear operator `T` on a
finite-dimensional vector space is diagonalisable iff its minimal
polynomial is a product of distinct linear factors (equivalently,
square-free with all roots in the ground field). The Mathlib name in
the `LinearAlgebra.Eigenspace.Triangularizable` file is
`Module.End.isSemisimple_iff_squarefree_minpoly`; over an
algebraically closed field with all eigenvalues in `K`, the two
statements coincide. Left as `sorry`-gated until the Mathlib name
stabilises. -/
theorem diagonalisable_iff_minpoly_squarefree
    [FiniteDimensional K V] (T : V →ₗ[K] V) :
    (∃ (B : Basis (Fin (FiniteDimensional.finrank K V)) K V),
        ∀ v ∈ Set.range B, ∃ mu : K, T v = mu • v) ↔
      Squarefree (minpoly K T) := by
  sorry

/-- Primary decomposition / generalised eigenspace decomposition.
Over an algebraically closed field, a finite-dimensional vector space
decomposes as the internal direct sum of the generalised eigenspaces
of any operator. Packaged in Mathlib as
`Module.End.iSup_generalizedEigenspace_eq_top` together with the
disjointness lemma `Module.End.disjoint_generalizedEigenspace`. -/
theorem primary_decomposition
    [IsAlgClosed K] [FiniteDimensional K V]
    (T : V →ₗ[K] V) :
    (⨆ mu : K, Module.End.generalizedEigenspace T mu
        (FiniteDimensional.finrank K V)) = ⊤ :=
  Module.End.iSup_generalizedEigenspace_eq_top T

/-- Jordan canonical form (statement only). Over an algebraically
closed field `K`, every linear operator `T : V → V` on a finite-
dimensional `K`-vector space `V` admits a basis in which the matrix
of `T` is block-diagonal with Jordan-block entries. Mathlib supplies
the constituent primary-decomposition and nilpotent-shift pieces but
does not package the named block-diagonal result; the Codex-namespaced
statement is left as `sorry`-gated until that packaging lands. -/
theorem jordan_canonical_form
    [IsAlgClosed K] [FiniteDimensional K V]
    (T : V →ₗ[K] V) :
    ∃ (B : Basis (Fin (FiniteDimensional.finrank K V)) K V),
      True := by
  sorry

/-- Uniqueness of the Jordan canonical form (statement only). The
multiset of Jordan block sizes at each eigenvalue — the Segre
characteristic — is uniquely determined by the operator up to
permutation. Left as `sorry`-gated together with the existence
theorem above. -/
theorem jordan_form_unique_segre
    [IsAlgClosed K] [FiniteDimensional K V]
    (T : V →ₗ[K] V) :
    True := by
  trivial

end Codex.Foundations.LinearAlgebra
