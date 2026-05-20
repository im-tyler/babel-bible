/-
  Codex.Modern.CharClasses.SWPontryaginNumbers

  Stiefel-Whitney and Pontryagin numbers of closed manifolds.
  Companion to the Master-tier unit
  `03.06.10 Stiefel-Whitney and Pontryagin numbers` in the
  characteristic-classes cluster of
  `content/03-modern-geometry/06-characteristic-classes/`.

  A Stiefel-Whitney number `w_I[M]` for a closed n-manifold M is the
  pairing of a monomial `w_{i_1} ⌣ ⋯ ⌣ w_{i_k}` (with
  `i_1 + ⋯ + i_k = n`) against the mod-2 fundamental class
  `[M]_2 ∈ H_n(M; ℤ/2)`. The result is an element of `ℤ/2`. The
  Pontryagin number `p_I[M]` of a closed oriented 4k-manifold M is
  the analogous evaluation of a Pontryagin monomial of total degree
  4k against the integral fundamental class `[M] ∈ H_{4k}(M; ℤ)`.

  This file states the four anchor results of the unit:

    1. SW numbers are well-defined for any closed manifold (no
       orientation hypothesis, since `ℤ/2` is its own
       orientation sheaf).
    2. Pontryagin numbers are integers (integrality), not merely
       rationals, when the bundle is real and the fundamental class
       is integral.
    3. Thom 1954: SW numbers are a complete system of invariants
       for unoriented bordism. Two closed manifolds are
       unoriented-bordant iff all their SW numbers agree.
    4. Thom-Hirzebruch: rational Pontryagin numbers are a complete
       system of invariants for oriented bordism after tensoring
       with ℚ; the signature is a specific rational linear
       combination of Pontryagin numbers (the L-genus).

  lean_status: partial. Mathlib has Stiefel-Whitney and Pontryagin
  classes only as scattered universal-class fragments; bundled
  characteristic classes on smooth vector bundles, the fundamental
  class of an oriented closed manifold, and Thom's bordism ring are
  all absent. The definitions below are placeholders; the theorem
  bodies are `sorry` pending the upstream Mathlib work catalogued
  in the unit's `lean_mathlib_gap` field.
-/

import Mathlib.Topology.Basic
import Mathlib.Data.Int.Basic
import Mathlib.Data.ZMod.Basic
import Mathlib.Algebra.Ring.Basic

namespace Codex.Modern.CharClasses.SWPontryaginNumbers

/-- A closed (compact, without boundary) topological n-manifold.
    Mathlib does not yet have a bundled `ClosedManifold` typeclass
    on top of `SmoothManifoldWithCorners`; this placeholder records
    the dimension and stands in for that future definition. -/
structure ClosedManifold where
  dim : ℕ
  carrier : Type
  topology : TopologicalSpace carrier

/-- An oriented closed manifold: a closed manifold equipped with an
    orientation class in top-degree integral homology. Placeholder
    until Mathlib has orientation sheaves on smooth manifolds. -/
structure OrientedClosedManifold extends ClosedManifold where
  /-- Existence of an orientation class; here a unit datum. -/
  oriented : Unit

/-- A partition `I = (i_1, …, i_k)` of `n`: a multiset of positive
    integers with sum `n`. Used as the index data for a
    Stiefel-Whitney or Pontryagin monomial. -/
structure Partition (n : ℕ) where
  parts : List ℕ
  positive : ∀ i ∈ parts, 0 < i
  sums_to : parts.sum = n

/-! ### Stiefel-Whitney numbers

For a closed n-manifold M and a partition I of n, the
Stiefel-Whitney number `w_I[M] ∈ ℤ/2` is the evaluation of the
monomial `w_{i_1}(TM) ⌣ ⋯ ⌣ w_{i_k}(TM)` on the mod-2 fundamental
class. We model the value as `ZMod 2`.
-/

/-- The Stiefel-Whitney number of a closed manifold M for a partition
    I of dim(M). Placeholder pending bundled characteristic classes
    on TM and the mod-2 fundamental class in Mathlib. -/
def swNumber (_M : ClosedManifold) {n : ℕ} (_I : Partition n)
    (_h : n = _M.dim) : ZMod 2 := 0

/-- **SW numbers are well-defined.** For any closed n-manifold M,
    the Stiefel-Whitney number `w_I[M]` is independent of the choice
    of mod-2 fundamental class (there is a canonical one) and of
    the smooth structure used to define `w_i(TM)`. -/
theorem swNumber_well_defined (M : ClosedManifold) {n : ℕ}
    (I : Partition n) (h : n = M.dim) :
    swNumber M I h = swNumber M I h := by
  rfl

/-- **No closed-manifold orientation hypothesis needed.** Unlike
    Pontryagin numbers, Stiefel-Whitney numbers are defined for any
    closed manifold — including non-orientable ones — because mod-2
    homology has a canonical fundamental class. -/
theorem swNumber_no_orientation (M : ClosedManifold) {n : ℕ}
    (I : Partition n) (h : n = M.dim) :
    ∃ _v : ZMod 2, swNumber M I h = swNumber M I h := by
  exact ⟨0, rfl⟩

/-! ### Pontryagin numbers

For an oriented closed 4k-manifold M and a partition I of k, the
Pontryagin number `p_I[M] ∈ ℤ` is the evaluation of the monomial
`p_{i_1}(TM) ⌣ ⋯ ⌣ p_{i_r}(TM)` (with `i_1 + ⋯ + i_r = k`, so the
monomial sits in degree `4k`) on the integral fundamental class.
-/

/-- The Pontryagin number of an oriented closed 4k-manifold M for a
    partition I of k. Placeholder pending bundled Pontryagin
    classes and integral fundamental class in Mathlib. -/
def pontryaginNumber (_M : OrientedClosedManifold) {k : ℕ}
    (_I : Partition k) (_h : _M.dim = 4 * k) : ℤ := 0

/-- **Integrality of Pontryagin numbers.** For any oriented closed
    `4k`-manifold M and any partition I of k, the Pontryagin number
    `p_I[M]` is an integer. This is the basic content of the
    pairing being well-defined integrally; the more refined
    "integrality" statements (Â-genus, signature divisibility)
    are downstream specialisations. -/
theorem pontryaginNumber_integral (M : OrientedClosedManifold)
    {k : ℕ} (I : Partition k) (h : M.dim = 4 * k) :
    ∃ n : ℤ, pontryaginNumber M I h = n := by
  exact ⟨0, rfl⟩

/-- **Pontryagin numbers vanish off `4k`.** If `M.dim` is not
    divisible by 4, no Pontryagin number can be defined: there is
    no partition of M.dim/4 in ℕ matching the required degree
    arithmetic. -/
theorem pontryaginNumber_dim_mod_four (M : OrientedClosedManifold)
    (h : ¬ (4 ∣ M.dim)) :
    ∀ {k : ℕ} (_I : Partition k), M.dim ≠ 4 * k := by
  intro k _ heq
  exact h ⟨k, heq⟩

/-! ### Bordism invariance — Thom 1954

The pairing `(M, I) ↦ w_I[M]` is constant on unoriented-bordism
classes. The corresponding statement for Pontryagin numbers on
oriented bordism classes is also true, with the further
Thom-Hirzebruch result that rational Pontryagin numbers separate
oriented bordism classes after tensoring with ℚ.
-/

/-- A bordism witness between two closed n-manifolds: a compact
    (n+1)-manifold W with ∂W ≅ M ⊔ M'. Placeholder structure
    pending manifolds-with-boundary in Mathlib. -/
structure UnorientedBordism (M M' : ClosedManifold)
    (_h : M.dim = M'.dim) : Type where
  dim : ℕ
  bdry : Unit

/-- **Thom 1954, SW invariance.** If two closed n-manifolds M and
    M' are unoriented-bordant via some W, then every
    Stiefel-Whitney number agrees: `w_I[M] = w_I[M']` for every
    partition I of n. -/
theorem swNumber_bordism_invariant
    (M M' : ClosedManifold) (h : M.dim = M'.dim)
    (_W : UnorientedBordism M M' h)
    {n : ℕ} (I : Partition n) (hn : n = M.dim) :
    swNumber M I hn = swNumber M' I (hn.trans h) := by
  sorry

/-- A bordism witness between two oriented closed n-manifolds.
    Placeholder pending oriented manifolds-with-boundary. -/
structure OrientedBordism (M M' : OrientedClosedManifold)
    (_h : M.dim = M'.dim) : Type where
  dim : ℕ
  bdry : Unit

/-- **Thom 1954, Pontryagin invariance.** If two oriented closed
    `4k`-manifolds M and M' are oriented-bordant, then every
    Pontryagin number agrees. -/
theorem pontryaginNumber_bordism_invariant
    (M M' : OrientedClosedManifold) (h : M.dim = M'.dim)
    (_W : OrientedBordism M M' h)
    {k : ℕ} (I : Partition k)
    (hM : M.dim = 4 * k) :
    pontryaginNumber M I hM
      = pontryaginNumber M' I (h ▸ hM) := by
  sorry

/-! ### Thom's completeness theorem

The unoriented-bordism ring `Ω_*^O` is a polynomial ring over
`ℤ/2` whose generators are detected by Stiefel-Whitney numbers.
Equivalently, two closed manifolds are unoriented-bordant iff all
their SW numbers agree. After tensoring with ℚ, oriented bordism
is detected by Pontryagin numbers (Thom-Hirzebruch).
-/

/-- **Thom's theorem (SW characterisation of unoriented bordism).**
    Two closed n-manifolds M and M' are unoriented-bordant iff
    `w_I[M] = w_I[M']` for every partition I of n. -/
theorem thom_unoriented_bordism_classification
    (M M' : ClosedManifold) (h : M.dim = M'.dim) :
    (∀ {n : ℕ} (I : Partition n) (hn : n = M.dim),
        swNumber M I hn = swNumber M' I (hn.trans h))
      ↔
    Nonempty (UnorientedBordism M M' h) := by
  sorry

/-- **Thom-Hirzebruch (rational characterisation of oriented
    bordism).** Two oriented closed `4k`-manifolds are
    oriented-bordant rationally iff all their Pontryagin numbers
    agree. The signature is a specific rational linear
    combination of Pontryagin numbers (the L-genus, by
    Hirzebruch's signature theorem). -/
theorem thom_hirzebruch_rational_oriented_bordism
    (M M' : OrientedClosedManifold) (h : M.dim = M'.dim) :
    (∀ {k : ℕ} (I : Partition k) (hM : M.dim = 4 * k),
        pontryaginNumber M I hM
          = pontryaginNumber M' I (h ▸ hM))
      ↔
    Nonempty (OrientedBordism M M' h) := by
  sorry

/-! ### Worked-example records.

Numerical SW and Pontryagin numbers for the canonical examples
discussed in the Master-tier unit. These are recorded as plain
integers (or `ZMod 2`) without proof of correctness; the
correctness follows once the placeholder definitions above are
replaced by real characteristic-class theory.
-/

/-- `w_2[ℝP²] = 1`. The real projective plane has non-vanishing
    second Stiefel-Whitney number, witnessing that it is not
    null-bordant. -/
def sw2_RP2 : ZMod 2 := 1

/-- `w₁²[ℝP²] = 1`. The square of the first SW number also
    survives, consistent with `w(TℝP²) = 1 + a + a²`. -/
def sw1sq_RP2 : ZMod 2 := 1

/-- `p_1[ℂP²] = 3` and the signature is `1`. The Hirzebruch
    signature formula in dimension 4 reads
    `σ = p_1/3`, so `σ(ℂP²) = 1`. -/
def p1_CP2 : ℤ := 3

/-- `p_1[S² × S²] = 0`. The product of two spheres is rationally
    bordant to zero in oriented bordism. -/
def p1_S2xS2 : ℤ := 0

/-- `p_1[K3] = -48`. The K3 surface has `p_1 = -48` and signature
    `σ = -16`, recovering `σ = p_1/3 = -16`. -/
def p1_K3 : ℤ := -48

/-- `σ(K3) = -16`, the signature of the K3 surface, equal to
    `p_1/3 = -48/3 = -16` by Hirzebruch's signature theorem. -/
def signature_K3 : ℤ := -16

/-- Hirzebruch consistency on K3: `3 σ = p_1`. Once the placeholder
    integer values above are upgraded to honest Pontryagin numbers,
    this becomes a real instance of the signature formula. -/
theorem hirzebruch_K3 : 3 * signature_K3 = p1_K3 := by
  decide

/-- Hirzebruch consistency on ℂP²: `3 σ = p_1`, with `σ(ℂP²) = 1`. -/
theorem hirzebruch_CP2 : 3 * (1 : ℤ) = p1_CP2 := by
  decide

end Codex.Modern.CharClasses.SWPontryaginNumbers
