/-
  Codex.SpinGeometry.CliffordAlgebra

  Clifford algebra of a quadratic form. Companion to the Master-tier unit
  `03.09.02 Clifford algebra`. lean_status: partial — statements compile,
  some proofs deferred to Mathlib's existing `CliffordAlgebra` (which has
  the universal property), others marked `sorry` pending the ABS
  classification not yet in Mathlib.
-/

import Mathlib.LinearAlgebra.CliffordAlgebra.Basic
import Mathlib.LinearAlgebra.CliffordAlgebra.Grading
import Mathlib.LinearAlgebra.CliffordAlgebra.Conjugation

namespace Codex.SpinGeometry

variable {R : Type*} [CommRing R]
variable {M : Type*} [AddCommGroup M] [Module R M]
variable (Q : QuadraticForm R M)

/-- The fundamental Clifford relation: for any v in M, the image of v in
    `CliffordAlgebra Q` squares to the scalar `Q v`.  Mathlib provides this
    as `CliffordAlgebra.ι_sq_scalar`. -/
theorem fundamental_relation (v : M) :
    (CliffordAlgebra.ι Q v) * (CliffordAlgebra.ι Q v) = algebraMap R _ (Q v) :=
  CliffordAlgebra.ι_sq_scalar Q v

/-- The polarized fundamental relation: anticommutator equals twice the
    associated bilinear form. -/
theorem fundamental_relation_polarized (u v : M) :
    (CliffordAlgebra.ι Q u) * (CliffordAlgebra.ι Q v)
      + (CliffordAlgebra.ι Q v) * (CliffordAlgebra.ι Q u)
    = algebraMap R _ (QuadraticForm.polar Q u v) := by
  -- Standard polarization argument from `ι_sq_scalar`.
  -- Mathlib provides `CliffordAlgebra.ι_mul_ι_add_swap`.
  exact CliffordAlgebra.ι_mul_ι_add_swap Q u v

/-- The canonical involution α : Cl(V, Q) → Cl(V, Q) sending v ↦ −v on the
    underlying vector space. Mathlib calls this `CliffordAlgebra.involute`. -/
theorem involute_involutive :
    Function.Involutive (CliffordAlgebra.involute (R := R) (Q := Q)) := by
  intro x
  exact CliffordAlgebra.involute_involute x

/-- Z/2-grading via the involution α. The +1 eigenspace is the "even" part. -/
def evenPart : Subalgebra R (CliffordAlgebra Q) :=
  CliffordAlgebra.even Q

/-! ### TODOs pending Mathlib coverage

The following statements correspond to results in Lawson-Michelsohn §I.1
that are not yet in Mathlib. They are stated here with `sorry` so the
module compiles; each is a candidate for upstream Mathlib contribution.
-/

/-- Dimension of `CliffordAlgebra Q` for finite-rank free `M` is `2^(finrank M)`.
    Uses `Module.finrank` (natural-number rank) which is the right object when
    `M` is free of finite rank. Mathlib has partial coverage; the fully general
    statement at LM I.1.5's level is open. -/
theorem finrank_eq_two_pow_finrank
    [Module.Free R M] [Module.Finite R M] :
    Module.finrank R (CliffordAlgebra Q) = 2 ^ Module.finrank R M := by
  sorry

/-- Real Clifford algebras `Cl(p, q)` are isomorphic to matrix algebras over
    one of `ℝ`, `ℂ`, or `ℍ`. The Atiyah-Bott-Shapiro classification table.

    NOT YET IN MATHLIB. Statement requires extending Mathlib's quadratic-form
    library to handle the standard signature `(p, q)` quadratic form on
    `EuclideanSpace ℝ (Fin (p + q))`. -/
-- theorem abs_classification : ... := sorry

/-- Eight-fold periodicity: `Cl(p, q+8) ≅ Cl(p, q) ⊗ M_16(ℝ)`.
    NOT YET IN MATHLIB. -/
-- theorem clifford_periodicity_real : ... := sorry

end Codex.SpinGeometry
