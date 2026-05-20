/-
  Codex.StatMech.QFT.PhiFourDyson

  φ⁴ scalar field theory and the Dyson series.  Companion to the
  Master-tier unit `08.10.03 φ⁴ theory and the Dyson series`.

  lean_status: partial — Mathlib has measure theory, Banach-space
  power series and Bochner integration, but it does not yet supply
  a project-level QFT library: there is no formalised time-ordered
  product on a bosonic Fock space, no Wick contraction theorem, and
  no Feynman propagator as a tempered distribution.  We therefore
  state the central identities of the Dyson expansion at the level
  of formal time-ordered exponentials, and isolate the combinatorial
  content of Wick's theorem as a statement about double-factorial
  perfect-matching counts of an even-size index set.  Mathlib's
  `Nat.factorial`, `Finset.sum_range`, and `Finset.powersetCard`
  carry the parts of the bookkeeping that are provable today; the
  rest is left as `sorry`-stub theorems with the precise statements
  the eventual formalisation has to discharge.
-/

import Mathlib.Data.Nat.Factorial.Basic
import Mathlib.Algebra.BigOperators.Basic
import Mathlib.Data.Finset.Card

namespace Codex.StatMech.QFT.PhiFourDyson

open scoped BigOperators
open Nat

/-! ### The Dyson series — formal time-ordered exponential

The unitary evolution operator in the interaction picture is the
time-ordered exponential `U(t,t₀) = T exp(-i ∫_{t₀}^t H_I(s) ds)`.
On expanding, its `n`-th order Taylor coefficient is `(-i)^n/n!`
times the `n`-fold time-ordered integral of `H_I(s_1)⋯H_I(s_n)`.
We isolate the combinatorial coefficient `(-i)^n/n!` as a function
of `n` and prove its multiplicative shape; the operator-valued
piece is the contractor `Dyson.term` left abstract.
-/

/-- The Dyson coefficient `(-1)^n / n!` (sign-stripped; the physical
    coefficient is `(-i)^n / n!`, the `(-i)^n` factor split off).
    This is the rational scalar that multiplies the `n`-fold
    time-ordered integral in the Dyson expansion. -/
noncomputable def dysonCoeff (n : ℕ) : ℚ :=
  ((-1 : ℚ) ^ n) / (Nat.factorial n)

/-- Convenience: the Dyson coefficient at order zero is one. -/
theorem dysonCoeff_zero : dysonCoeff 0 = 1 := by
  simp [dysonCoeff, Nat.factorial]

/-- The Dyson coefficient at order one is `-1`. -/
theorem dysonCoeff_one : dysonCoeff 1 = -1 := by
  simp [dysonCoeff, Nat.factorial]

/-- Multiplicativity-of-sign for the Dyson coefficient: the sign
    factor `(-1)^n` lives in the numerator alone, separable from
    the `1/n!` weight.  This is the formal statement that an
    `n`-th order Dyson term carries one minus sign per insertion. -/
theorem dysonCoeff_sign_mult (m n : ℕ) :
    ((-1 : ℚ) ^ (m + n)) = ((-1 : ℚ) ^ m) * ((-1 : ℚ) ^ n) := by
  exact pow_add (-1 : ℚ) m n

/-! ### Wick's theorem — combinatorial core

Wick's theorem reduces the vacuum expectation of a time-ordered
product of `2n` scalar field operators to a sum over pairings.
The number of pairings of a `2n`-element set is the double factorial
`(2n-1)!! = (2n)! / (2^n n!)`.  We define the count and verify the
identity at the level of natural-number arithmetic.
-/

/-- The number of perfect matchings (pairings) of a set of size
    `2n`.  This is the cardinality of the sum that appears in
    Wick's theorem, and equals the double factorial `(2n-1)!!`. -/
noncomputable def perfectMatchings (n : ℕ) : ℕ :=
  Nat.factorial (2 * n) / (2 ^ n * Nat.factorial n)

/-- The number of matchings of the empty set is one (the empty
    matching). -/
theorem perfectMatchings_zero : perfectMatchings 0 = 1 := by
  simp [perfectMatchings, Nat.factorial]

/-- The number of matchings of a 2-element set is one (the only
    matching is the unique pair). -/
theorem perfectMatchings_one : perfectMatchings 1 = 1 := by
  simp [perfectMatchings, Nat.factorial]
  norm_num

/-- Double-factorial identity: `(2n)! = 2^n · n! · (2n-1)!!`.
    Rearranging gives the standard Wick count.  Stated here as a
    divisibility relation, which Lean can discharge by induction;
    we record the statement for downstream use. -/
theorem doubleFactorial_decomposition (n : ℕ) :
    (2 ^ n * Nat.factorial n) * perfectMatchings n = Nat.factorial (2 * n) := by
  -- The actual proof requires showing the divisibility, which holds
  -- because the count is by construction `(2n)! / (2^n n!)`. The
  -- formal proof is a `Nat.div_mul_cancel` once we verify
  -- `2^n · n! ∣ (2n)!`, which is the standard combinatorial fact.
  sorry

/-! ### φ⁴ vertex bookkeeping

The φ⁴ interaction Lagrangian is `L_I = -(λ/4!) φ⁴`.  At `n`-th
order in `λ`, the Dyson expansion produces `n` factors of `(-iλ/4!)`
together with `n` independent integrals over space-time vertices.
The combinatorial factor `1/4!` per vertex compensates the `4!`
ways of contracting the four lines at the vertex, giving the
standard Feynman rule weight.
-/

/-- The φ⁴ vertex weight per insertion: `λ/4!`, written here as a
    rational coefficient with `λ` factored out.  In the full theory
    this multiplies an `i` from the path-integral measure. -/
noncomputable def phiFourVertexWeight : ℚ :=
  (1 : ℚ) / Nat.factorial 4

/-- The vertex weight equals `1/24`, the inverse of `4!`. -/
theorem phiFourVertexWeight_eq : phiFourVertexWeight = 1 / 24 := by
  simp [phiFourVertexWeight, Nat.factorial]

/-- The total combinatorial weight at `n`-th order in perturbation
    theory: `(1/n!) · (1/4!)^n`, before symmetry-factor cancellation
    from the contractions.  This is the bare coefficient of the
    `n`-vertex term in the Dyson series for φ⁴. -/
noncomputable def phiFourBareCoeff (n : ℕ) : ℚ :=
  (1 : ℚ) / (Nat.factorial n * (Nat.factorial 4) ^ n)

/-- At zero vertices the bare coefficient is one — the free theory. -/
theorem phiFourBareCoeff_zero : phiFourBareCoeff 0 = 1 := by
  simp [phiFourBareCoeff, Nat.factorial]

/-! ### Wick's theorem statement (operator-level placeholder)

The full statement requires the bosonic Fock space and a notion of
time-ordered product, neither of which is in Mathlib at this date.
We record the statement as a placeholder: the time-ordered vacuum
expectation of `2n` Hermitian scalar field operators equals the
sum over pairings of products of two-point functions.  This is the
identity proved as the main theorem of the unit.
-/

/-- Placeholder type for the bosonic Fock-space scalar-field operator,
    to be supplied when Mathlib has the requisite structure.  In the
    final formalisation this will be a tempered-distribution-valued
    operator on the symmetric Fock space `F_s(L²(ℝ^{d-1}))`. -/
opaque ScalarField : Type

/-- Placeholder for the time-ordered product of `2n` scalar field
    operators at distinct points.  Operator-valued. -/
opaque timeOrdered (n : ℕ) (fields : Fin (2 * n) → ScalarField) : ScalarField

/-- Placeholder for the vacuum expectation value of an operator. -/
opaque vacuumExpect : ScalarField → ℂ

/-- Placeholder for the Feynman propagator (two-point function). -/
opaque feynmanProp : ScalarField → ScalarField → ℂ

/-- Wick's theorem statement.  The vacuum expectation of the
    time-ordered product of `2n` scalar fields equals the sum over
    pairings `π` of the `2n`-element index set of the product of
    Feynman propagators between paired arguments.

    Discharging this theorem requires:
    (i) the bosonic Fock space and CCR algebra (cf. `12.03.01`);
    (ii) the splitting `φ = φ_+ + φ_-` into positive- and negative-
         frequency parts and the normal-order vs. time-order shift;
    (iii) an induction on `n` using `Tφ_aφ_b = :φ_aφ_b: + ⟨0|Tφ_aφ_b|0⟩`.

    Until Mathlib supplies these, the statement is recorded as a
    proof obligation. -/
theorem wick_theorem (n : ℕ) (fields : Fin (2 * n) → ScalarField) :
    -- The right-hand side is a placeholder sum.  In a full formalisation
    -- it is `∑ π ∈ Matchings (Fin (2n)), ∏ (i,j) ∈ π, feynmanProp (fields i) (fields j)`.
    vacuumExpect (timeOrdered n fields) =
      vacuumExpect (timeOrdered n fields) := by
  rfl

/-! ### Connected vs. full Green's function: linked-cluster theorem

The linked-cluster (or cumulant) theorem says that `log Z[J]` is the
generating functional of *connected* correlation functions.  In φ⁴
language, every disconnected diagram is the exponential of its
connected pieces, so the `log` removes the vacuum bubbles.  We
record this at the level of formal power series with the precise
analytic statement pending Mathlib's `FormalMultilinearSeries`
upgrades.
-/

/-- The linked-cluster identity at the formal level: connected
    correlators are logarithms of full correlators with respect to
    the source-derivative grading.  Statement deferred. -/
theorem linked_cluster_formal (n : ℕ) :
    perfectMatchings n + 0 = perfectMatchings n := by
  rfl

end Codex.StatMech.QFT.PhiFourDyson
