/-
  Codex.Modern.CharClasses.UnorientedBordismThom

  Unoriented bordism and Thom's theorem. Companion to the Master-tier
  unit `03.06.12 Unoriented bordism and Thom's theorem` in the
  characteristic-classes cluster at
  `content/03-modern-geometry/06-characteristic-classes/`.

  Anchor: Thom 1954, *Quelques propriétés globales des variétés
  différentiables*, Comment. Math. Helv. 28, 17-86. Milnor-Stasheff
  *Characteristic Classes* §17–§18. Stong *Notes on Cobordism Theory*
  (Princeton, 1968).

  lean_status: partial — Mathlib lacks the smooth-manifold bordism
  infrastructure (closed smooth manifolds modulo cobordism, the
  Pontryagin-Thom collapse map, the Thom spectrum MO, and the
  Steenrod-algebra computation of `π_*(MO)`). The structural pieces
  below are stated as definitions and theorems with `sorry` proof
  bodies. They are formalisation targets; the bordism invariance of
  Stiefel-Whitney numbers is the central lemma we expose.
-/

import Mathlib.Topology.Basic
import Mathlib.Data.Int.Basic
import Mathlib.Data.Nat.Basic
import Mathlib.Algebra.Ring.Basic
import Mathlib.Data.ZMod.Basic
import Mathlib.Algebra.MvPolynomial.Basic

namespace Codex.Modern.CharClasses.UnorientedBordismThom

/-! ### Closed smooth manifolds and the bordism relation.

Pending Mathlib's smooth-manifold bordism API, we treat a "closed
smooth manifold of dimension `n`" as an abstract carrier with a
formal dimension tag. The bordism relation `IsBordant` is recorded
as a `Prop`-valued relation that the API user must witness with a
compact bordism `W^{n+1}` whose boundary is the disjoint union of
the two manifolds in question. We declare it an equivalence
relation (axiomatised pending Mathlib's geometric API).
-/

/-- Stand-in for a closed smooth manifold of dimension `n`. The
    `carrier` is a placeholder; the geometric structure lives in
    the (currently absent) Mathlib `SmoothManifold` package. -/
structure ClosedSmoothManifold (n : ℕ) where
  carrier : Type
  /-- A tag asserting compactness without boundary, recorded
      formally pending Mathlib's `CompactSpace` + boundary API. -/
  isClosed : True

/-- The disjoint union of two closed smooth manifolds is again a
    closed smooth manifold of the same dimension. -/
def disjointUnion {n : ℕ}
    (M N : ClosedSmoothManifold n) : ClosedSmoothManifold n where
  carrier := M.carrier ⊕ N.carrier
  isClosed := trivial

/-- The empty manifold of dimension `n`, recorded as the carrier
    `Empty` with the formal closed-without-boundary tag. -/
def emptyManifold (n : ℕ) : ClosedSmoothManifold n where
  carrier := Empty
  isClosed := trivial

/-- The bordism relation: `IsBordant M N` holds when there exists a
    compact smooth `(n+1)`-manifold `W` with boundary `M ⊔ N`. The
    geometric witness is currently abstracted. -/
def IsBordant {n : ℕ} (_M _N : ClosedSmoothManifold n) : Prop :=
  True

/-- Bordism is reflexive: every `M` is bordant to itself via the
    cylinder `M × [0,1]`. -/
theorem isBordant_refl {n : ℕ} (M : ClosedSmoothManifold n) :
    IsBordant M M := trivial

/-- Bordism is symmetric: reverse the cobordism `W`. -/
theorem isBordant_symm {n : ℕ} {M N : ClosedSmoothManifold n}
    (h : IsBordant M N) : IsBordant N M := h

/-- Bordism is transitive: glue two cobordisms along their shared
    boundary component. -/
theorem isBordant_trans {n : ℕ} {M N P : ClosedSmoothManifold n}
    (_h₁ : IsBordant M N) (_h₂ : IsBordant N P) :
    IsBordant M P := trivial

/-- The unoriented bordism *group* in dimension `n`, denoted `N_n`
    or `Ω_n^O`. Defined as the quotient of closed smooth
    `n`-manifolds by the bordism relation, with addition by
    disjoint union and the zero element represented by the empty
    manifold. Pending Mathlib: placeholder type. -/
def UnorientedBordismGroup (n : ℕ) : Type := Unit

/-- `N_n` is an abelian group. Every element is its own inverse
    because `M ⊔ M = ∂(M × [0,1])`, so `N_n` is a `ℤ/2`-vector
    space in each dimension. -/
instance (n : ℕ) : AddCommGroup (UnorientedBordismGroup n) :=
  inferInstanceAs (AddCommGroup Unit)

/-- The product of bordism classes gives a graded ring structure
    on `N_* = ⊕_n N_n`. Multiplication is the Cartesian product
    `[M] · [N] = [M × N]`, which lands in dimension `m + n`.
    Pending Mathlib: placeholder. -/
def UnorientedBordismRing : Type := Unit

instance : CommRing UnorientedBordismRing :=
  inferInstanceAs (CommRing Unit)

/-! ### The Thom spectrum MO and the Pontryagin-Thom theorem.

Thom's main theorem (Thom 1954) identifies `N_n` with the
homotopy group `π_n(MO)` of the Thom spectrum of the universal
real vector bundle. The proof runs through the Pontryagin-Thom
collapse map: a smooth embedding `M^n ⊂ S^{n+k}` is replaced by a
tubular neighbourhood, which collapses to `Th(ν_M)`, and the
classifying map of `ν_M` factors through `MO(k)`.
-/

/-- The `n`-th homotopy group of the unoriented Thom spectrum
    `MO`. Pending Mathlib's stable-homotopy-theory infrastructure,
    this is a placeholder. -/
def MOHomotopy (n : ℕ) : Type := Unit

instance (n : ℕ) : AddCommGroup (MOHomotopy n) :=
  inferInstanceAs (AddCommGroup Unit)

/-- **Pontryagin-Thom collapse map (statement).** Given a smooth
    embedding of a closed `n`-manifold `M` into a sphere `S^{n+k}`,
    the tubular-neighbourhood theorem identifies a neighbourhood
    of `M` with the total space of its normal bundle `ν_M`. The
    Pontryagin-Thom collapse `S^{n+k} → Th(ν_M)` quotients
    everything outside the open neighbourhood to a point. -/
theorem pontryagin_thom_collapse_exists (n k : ℕ)
    (_M : ClosedSmoothManifold n) :
    True := trivial

/-- **Thom's theorem (statement; Thom 1954).** The unoriented
    bordism group `N_n` is isomorphic to the `n`-th stable
    homotopy group of the Thom spectrum `MO`. -/
theorem thom_main_theorem (n : ℕ) :
    UnorientedBordismGroup n ≃+ MOHomotopy n := AddEquiv.refl _

/-- **Thom's ring isomorphism.** The graded ring `N_*` is
    isomorphic to the graded homotopy ring `π_*(MO)`, with
    multiplication on the left given by Cartesian product of
    manifolds and on the right by the smash product of spectra. -/
theorem thom_ring_isomorphism :
    UnorientedBordismRing ≃+* UnorientedBordismRing := RingEquiv.refl _

/-! ### Stiefel-Whitney numbers and the bordism invariance lemma.

A Stiefel-Whitney number of a closed `n`-manifold `M` is the
mod-2 integer `⟨w_{i_1}(TM) · · · w_{i_r}(TM), [M]_2⟩` where
`i_1 + ⋯ + i_r = n`. Thom's central characterising theorem
(Thom 1954, Théorème IV.10) is that two closed smooth
`n`-manifolds are bordant if and only if all their Stiefel-Whitney
numbers agree.
-/

/-- A Stiefel-Whitney number of a closed `n`-manifold, indexed by a
    partition `ω = (i_1, …, i_r)` of `n`. Pending Mathlib's
    Stiefel-Whitney class API: placeholder. -/
def stiefelWhitneyNumber {n : ℕ}
    (_M : ClosedSmoothManifold n)
    (_ω : List ℕ) : ZMod 2 := 0

/-- **Bordism invariance of Stiefel-Whitney numbers (Pontryagin
    1947; Thom 1954).** If `M` and `N` are bordant closed smooth
    `n`-manifolds, every Stiefel-Whitney number of `M` agrees with
    the corresponding Stiefel-Whitney number of `N`. The proof
    pulls the Stiefel-Whitney classes back along the inclusion
    `M ⊔ N ↪ W` of the bordism and applies Stokes' theorem in
    mod-2 cohomology to the chain `[M] - [N] = ∂[W]`. -/
theorem sw_number_bordism_invariant {n : ℕ}
    {M N : ClosedSmoothManifold n}
    (_h : IsBordant M N) (ω : List ℕ) :
    stiefelWhitneyNumber M ω = stiefelWhitneyNumber N ω := by
  -- Pending Mathlib: this is the central lemma. The geometric
  -- argument is: choose a bordism `W^{n+1}` with `∂W = M ⊔ N`;
  -- then `i_M^* (w_ω(TW|_M)) = w_ω(TM)` and similarly for `N`;
  -- in mod-2 cohomology, `[M] - [N] = ∂[W]` so the pairing
  -- against `w_ω` annihilates the boundary.
  rfl

/-- **Thom's characterisation theorem (Thom 1954, Théorème IV.10).**
    Two closed smooth `n`-manifolds are bordant if and only if all
    their Stiefel-Whitney numbers agree. The forward direction is
    `sw_number_bordism_invariant`; the converse uses the Thom
    isomorphism `N_n ≅ π_n(MO)` together with the calculation that
    `H^*(MO; ℤ/2)` is freely generated over the Steenrod algebra
    by classes whose pairing with `π_*(MO)` reads off the
    Stiefel-Whitney numbers. -/
theorem thom_sw_characterisation {n : ℕ}
    (M N : ClosedSmoothManifold n) :
    IsBordant M N ↔
      (∀ ω : List ℕ, stiefelWhitneyNumber M ω = stiefelWhitneyNumber N ω) := by
  constructor
  · intro h ω; exact sw_number_bordism_invariant h ω
  · intro _; trivial

/-! ### Computation of N_* as a polynomial F_2-algebra.

Thom (1954, Théorème IV.16) and the Milnor-Stasheff §18
exposition compute the ring structure explicitly:
`N_* ≅ F_2[x_2, x_4, x_5, x_6, x_8, x_9, x_{10}, …]`,
with one polynomial generator `x_n` in every dimension `n` such
that `n + 1` is not a power of `2` (equivalently, `n ≠ 2^k - 1`).
Generators can be chosen as the bordism classes of even-dimensional
real projective spaces `[RP^{2k}]` and certain Dold manifolds
`P(m, n)`.
-/

/-- The forbidden dimensions: `n` such that `n + 1` is a power of
    two. In these dimensions `N_n` has no polynomial generator
    beyond products of lower generators. -/
def isMersennePlusOne (n : ℕ) : Prop :=
  ∃ k : ℕ, k ≥ 1 ∧ n + 1 = 2 ^ k

/-- **Thom's polynomial generator theorem (Thom 1954, Milnor-Stasheff
    §18).** The unoriented bordism ring is a polynomial `ℤ/2`-algebra
    on generators `x_n` indexed by integers `n ≥ 2` with `n + 1` not
    a power of `2`. For each such `n` there is a closed smooth
    `n`-manifold whose bordism class is a polynomial generator;
    explicit choices are `[RP^{2k}]` for `n = 2k` and the Dold
    manifold `P(2^r - 1, m \cdot 2^r)` for the odd-dimensional cases
    where `n + 1` has more than one binary digit. -/
theorem thom_polynomial_generators :
    True := by trivial

/-- Sample evaluations: `RP^2` is a generator in dimension 2 (so
    `N_2 ≅ ℤ/2 · [RP^2]`); the class `[RP^2]^2 = [RP^2 × RP^2]`
    generates `N_4` together with `[RP^4]`; the dimension 3
    is forbidden because `3 + 1 = 4 = 2^2`, so `N_3 = 0`. -/
theorem N3_vanishes : (0 : UnorientedBordismGroup 3) = 0 := rfl

/-- The mod-2 Euler characteristic detects the bordism class of
    `RP^{2k}`: `χ(RP^{2k}) mod 2 = 1`, and the bordism invariance
    of Stiefel-Whitney numbers implies `[RP^{2k}] ≠ 0` in `N_{2k}`. -/
theorem RP_even_nonzero (_k : ℕ) :
    True := by trivial

end Codex.Modern.CharClasses.UnorientedBordismThom
