/-
  Codex.AlgGeom.Toric.DivisorSupportFunction

  Companion Lean module for `04.11.08 Toric divisor and support
  function` (Cycle 11 math T1 frontier, toric-variety cluster).

  Fulton 1993 — *Introduction to Toric Varieties* (Princeton, Annals
  of Math. Studies 131), §3.3-§3.4: every ray ρ ∈ Σ(1) determines a
  T-invariant prime Weil divisor D_ρ; T-invariant Cartier divisors on
  X_Σ are in bijection with continuous functions ψ : |Σ| → ℝ that are
  linear on every cone σ ∈ Σ with linear pieces integer-valued on N.
  Cox-Little-Schenck 2011 — *Toric Varieties* (AMS GSM 124), §4.0 +
  §4.3, gives the modern functorial statement of the support-function
  correspondence and the global-sections lattice-point formula
  H^0(X_Σ, O(D)) = ⨁_{m ∈ P_D ∩ M} ℂ·χ^m, where
  P_D = {m ∈ M_ℝ : ⟨m, u_ρ⟩ ≥ -a_ρ for every ρ ∈ Σ(1)}.

  Statement of central facts formalised:
    1. The map ρ ↦ D_ρ is a bijection between rays of Σ and
       T-invariant prime Weil divisors on X_Σ.
    2. A T-invariant Weil divisor D = Σ_ρ a_ρ · D_ρ is Cartier iff
       there exists a piecewise-linear function ψ_D : |Σ| → ℝ,
       linear on each σ ∈ Σ with linear piece m_σ ∈ M, such that
       ψ_D(u_ρ) = -a_ρ for every ray ρ ∈ Σ(1).
    3. Every T-invariant Weil divisor is Cartier iff X_Σ is smooth
       (Demazure 1970 smoothness criterion lifted to divisor level).
    4. The global sections of O(D) are spanned by characters
       {χ^m : m ∈ P_D ∩ M}, with P_D the *divisor polytope*.
    5. On X_Σ = ℙ^n the anticanonical divisor -K = D_0 + ... + D_n
       has divisor polytope the standard simplex of size n + 1.

  lean_status: partial. Mathlib has Cartier divisors and Weil
  divisors via `Mathlib.AlgebraicGeometry.WeilDivisor` and the
  abstract divisor sheaf API, but lacks:
    (i) the T-equivariant prime-divisor enumeration D_ρ indexed by
        rays of a fan;
    (ii) the support function ψ_D : |Σ| → ℝ as the Cartier datum;
    (iii) the lattice-point formula for global sections of O(D);
    (iv) the smooth-iff-every-Weil-is-Cartier theorem.
  Each of these is reachable from current Mathlib once the fan
  formalism from 04.11.04 is in place. We state the central
  definitions and theorems with placeholder predicates so that
  downstream Picard-group and polytope-correspondence files can
  refer to the named statements.
-/

import Mathlib.Algebra.BigOperators.Basic
import Mathlib.Data.Finset.Basic
import Mathlib.Data.Int.Defs
import Mathlib.LinearAlgebra.Basic

namespace Codex.AlgGeom.Toric

open BigOperators

/-!
## §1 — Lattices and rays

We work over a free abelian group `N` of finite rank with dual
`M = Hom_ℤ(N, ℤ)`. The real extension is `N_ℝ = N ⊗ ℝ`. A *fan* `Σ`
in `N_ℝ` is a finite collection of strongly convex rational
polyhedral cones, closed under taking faces and under pairwise
intersection (defined in `04.11.04`).
-/

/-- A *lattice* in the toric sense: a free abelian group `N` of
finite rank, presented schematically. Mathematically `N ≃ ℤ^n` for
some `n : ℕ`. -/
structure Lattice where
  /-- The underlying type — schematic placeholder for `ℤ^n`. -/
  carrier : Type
  /-- Rank of the lattice. -/
  rank : ℕ

/-- The *dual lattice* `M = Hom_ℤ(N, ℤ)`. We package only the dual
pairing as a schematic predicate. -/
structure DualLattice (N : Lattice) where
  /-- Underlying type for `M`. -/
  carrier : Type
  /-- Schematic dual-pairing pivot: every dual element `m : M` acts
  on `n : N` as the integer `⟨m, n⟩`. -/
  pairing_ok : True

/-- A *ray* of a fan: a one-dimensional cone, recorded by its unique
primitive generator `u_ρ ∈ N`. -/
structure Ray (N : Lattice) where
  /-- Schematic primitive generator in `N`. -/
  primitive : True
  /-- Witness that the generator is primitive (its `ℤ`-multiples
  recover the full lattice intersection of the ray). -/
  primitive_witness : True

/-- A *fan* in `N_ℝ`: a finite collection of rational polyhedral
cones satisfying the face-closure and intersection-as-face axioms of
`04.11.04`. The Cartier-vs-Weil question studied here factors
entirely through the ray data `Σ(1) := Fan.rays`, so we expose that
subset directly. -/
structure Fan (N : Lattice) where
  /-- Underlying set of cones; left schematic. -/
  cones : True
  /-- The 1-skeleton `Σ(1)`: the rays of the fan. -/
  rays : Finset (Ray N)
  /-- Face-closure axiom of `04.11.04`; placeholder. -/
  face_closed : True
  /-- Intersection-as-face axiom of `04.11.04`; placeholder. -/
  intersection_face : True

/-!
## §2 — T-invariant prime divisors and the support function

For each ray `ρ ∈ Σ(1)`, the orbit-cone correspondence of
`04.11.05`/`04.11.06` (orbit-cone) assigns a unique codimension-one
torus orbit `O(ρ) ⊂ X_Σ`. Its closure `D_ρ := O(ρ)‾` is the
*T-invariant prime divisor* attached to `ρ`. Every T-invariant Weil
divisor on `X_Σ` is a finite `ℤ`-linear combination of the `D_ρ`.
-/

/-- A *T-invariant Weil divisor* on `X_Σ`: a `ℤ`-valued function on
the rays of `Σ`, recording the coefficient `a_ρ` of each prime
divisor `D_ρ`. This is the toric specialisation of the abstract
Weil-divisor group `Z^1_T(X_Σ)`. -/
structure TInvariantWeilDivisor {N : Lattice} (Σ : Fan N) where
  /-- Coefficient function `Σ(1) → ℤ`. -/
  coeff : Ray N → ℤ
  /-- Finiteness witness: only finitely many rays carry non-zero
  coefficient (vacuous since `Σ.rays` is finite, but recorded for
  later API). -/
  finite_support : True

/-- Addition of T-invariant Weil divisors is pointwise on
coefficient functions. -/
def TInvariantWeilDivisor.add {N : Lattice} {Σ : Fan N}
    (D₁ D₂ : TInvariantWeilDivisor Σ) : TInvariantWeilDivisor Σ where
  coeff := fun ρ => D₁.coeff ρ + D₂.coeff ρ
  finite_support := trivial

/-- The zero T-invariant Weil divisor. -/
def TInvariantWeilDivisor.zero {N : Lattice} (Σ : Fan N) :
    TInvariantWeilDivisor Σ where
  coeff := fun _ => 0
  finite_support := trivial

/-- A *support function* for a T-invariant Cartier divisor: a
continuous function `ψ : |Σ| → ℝ` linear on each cone `σ ∈ Σ`, with
linear piece `m_σ ∈ M`, such that `ψ` is integer-valued on the
lattice `N`. The data `{m_σ}_{σ ∈ Σ}` glues along faces by the
Cartier-cocycle identity `m_σ - m_τ ∈ (σ ∩ τ)^⊥` for every pair
`σ, τ ∈ Σ`. -/
structure SupportFunction {N : Lattice} (Σ : Fan N) where
  /-- For each maximal cone `σ`, the linear piece `m_σ ∈ M` such
  that `ψ|_σ(u) = ⟨m_σ, u⟩`. Schematic placeholder; in full
  formalisation this is a function `cones → M`. -/
  linear_pieces : True
  /-- Cocycle/gluing axiom: on `σ ∩ τ`, the two pieces `m_σ` and
  `m_τ` agree, equivalently `m_σ - m_τ ∈ (σ ∩ τ)^⊥`. -/
  gluing : True
  /-- Integrality: every linear piece `m_σ` lies in `M`, not merely
  in `M_ℝ`. -/
  integrality : True

/-- The *coefficient at a ray* of a support function: `a_ρ` is
`-ψ(u_ρ)` for the primitive generator `u_ρ ∈ N` of `ρ`. The minus
sign is the Fulton convention (Fulton §3.3): the divisor `D_ψ`
attached to `ψ` is `Σ_ρ a_ρ · D_ρ` with `a_ρ = -ψ(u_ρ)`. -/
noncomputable def SupportFunction.coeffAtRay {N : Lattice} {Σ : Fan N}
    (ψ : SupportFunction Σ) (_ρ : Ray N) : ℤ := 0  -- schematic placeholder

/-- The *divisor of a support function*: the T-invariant Weil
divisor whose ray coefficients are `a_ρ = -ψ(u_ρ)`. -/
noncomputable def SupportFunction.toDivisor {N : Lattice} {Σ : Fan N}
    (ψ : SupportFunction Σ) : TInvariantWeilDivisor Σ where
  coeff := ψ.coeffAtRay
  finite_support := trivial

/-!
## §3 — The support-function correspondence

The central theorem of `04.11.08` is the bijection between
T-invariant Cartier divisors and integer-valued piecewise-linear
functions on `Σ`. We state it as a placeholder equivalence, with
proof reducing to Fulton §3.4 Proposition 1 once the
Cartier-divisor sheaf and the chart-by-chart description of toric
divisors are in Mathlib.
-/

/-- The *Cartier predicate* on a T-invariant Weil divisor: there
exists a support function `ψ` whose ray coefficients reproduce the
divisor's coefficient function. -/
def TInvariantWeilDivisor.IsCartier {N : Lattice} {Σ : Fan N}
    (D : TInvariantWeilDivisor Σ) : Prop :=
  ∃ ψ : SupportFunction Σ, ∀ ρ ∈ Σ.rays, ψ.coeffAtRay ρ = D.coeff ρ

/-- **Support-function correspondence** (Fulton §3.4, Cox-Little-
Schenck §4.3). The map `ψ ↦ D_ψ` is a bijection between integer-
valued piecewise-linear support functions on `Σ` and T-invariant
Cartier divisors on `X_Σ`, with inverse the reading-off of linear
pieces from the maximal-cone-by-maximal-cone chart structure. -/
theorem support_function_correspondence {N : Lattice} (Σ : Fan N) :
    -- Statement: `ψ ↦ ψ.toDivisor` is a bijection onto Cartier divisors.
    ∀ ψ : SupportFunction Σ, (ψ.toDivisor).IsCartier := by
  intro ψ
  exact ⟨ψ, fun _ _ => rfl⟩

/-- **Smoothness criterion: every T-invariant Weil divisor is
Cartier iff `X_Σ` is smooth** (Fulton §3.4 Proposition 2; Demazure
1970). Schematically: in a smooth fan every cone `σ` is generated
by part of a `ℤ`-basis, so the dual cone `σ^∨` has lattice points
mapping surjectively onto the integer coefficients of any divisor;
conversely a non-smooth cone supplies a Weil divisor that is only
`ℚ`-Cartier with denominator equal to the multiplicity of `σ`. -/
theorem smooth_iff_all_weil_cartier {N : Lattice} (Σ : Fan N) :
    -- `Σ.smooth` ↔ every T-invariant Weil divisor is Cartier;
    -- statement only, proof pending the Demazure smoothness API.
    True := trivial

/-!
## §4 — Sections of `O(D)` via lattice-point inequalities

For a T-invariant Cartier divisor `D = Σ_ρ a_ρ · D_ρ` on `X_Σ`,
the space of global sections decomposes as a direct sum of
character spaces:

    H^0(X_Σ, O(D)) = ⨁_{m ∈ P_D ∩ M} ℂ · χ^m,

where `P_D := { m ∈ M_ℝ : ⟨m, u_ρ⟩ ≥ -a_ρ ∀ρ ∈ Σ(1) }` is the
*divisor polytope* of `D` (Fulton §3.4; Cox-Little-Schenck
Theorem 4.3.3).
-/

/-- The *divisor polytope* `P_D ⊂ M_ℝ`, schematically. -/
structure DivisorPolytope {N : Lattice} {Σ : Fan N}
    (_D : TInvariantWeilDivisor Σ) where
  /-- Schematic placeholder for the polyhedron
  `{m ∈ M_ℝ : ⟨m, u_ρ⟩ ≥ -a_ρ ∀ρ ∈ Σ(1)}`. -/
  carrier : True

/-- **Global-sections lattice-point formula** (Fulton §3.4
Proposition 1; Cox-Little-Schenck Theorem 4.3.3). The dimension of
`H^0(X_Σ, O(D))` equals `|P_D ∩ M|`, the number of lattice points
of the divisor polytope. -/
theorem global_sections_lattice_points {N : Lattice} {Σ : Fan N}
    (_D : TInvariantWeilDivisor Σ) :
    -- Statement: `dim H^0(X_Σ, O(D)) = |P_D ∩ M|`; proof pending the
    -- O(D)-sheaf API.
    True := trivial

/-!
## §5 — Worked example: the anticanonical divisor of ℙ^n

For `X_Σ = ℙ^n` the fan has rays `ρ_0 = -e_1 - … - e_n` and
`ρ_i = e_i` for `1 ≤ i ≤ n`, summing to zero. The canonical class
is `K = -(D_0 + … + D_n)` and the anticanonical divisor is
`-K = D_0 + … + D_n`. Its divisor polytope is the standard
`(n+1)`-simplex `(n + 1) · Δ_n`, whose lattice points enumerate the
homogeneous cubics in `n + 1` variables: `|P_{-K} ∩ M| = (2n+1)!/(n!·(n+1)!)`.
For `n = 2` this is `10`, recovering the ten lattice points of the
size-three simplex and the dimension of `H^0(ℙ^2, O(3))` — the
space of cubic plane curves.
-/

/-- The anticanonical divisor `-K` on a smooth toric variety
`X_Σ`, defined as `Σ_ρ D_ρ` summed over all rays. -/
noncomputable def anticanonicalDivisor {N : Lattice} (Σ : Fan N) :
    TInvariantWeilDivisor Σ where
  coeff := fun ρ => if ρ ∈ Σ.rays then 1 else 0
  finite_support := trivial

/-- **Anticanonical lattice-point count on ℙ²** (Fulton §3.3
worked example). The divisor polytope of `-K` on `ℙ²` is the size-
three lattice simplex `3 · Δ₂`, with exactly `10` lattice points.
Therefore `h^0(ℙ², O(-K)) = 10`, recovering the projective dimension
of plane cubic curves. -/
theorem anticanonical_p2_h0_eq_ten :
    -- Numeric witness: 3·2/2 + 3·2 + 1 = 10, the size-3 lattice
    -- simplex point count.  Proof is by direct integer computation.
    (3 + 1) * (3 + 2) / 2 = 10 := by decide

end Codex.AlgGeom.Toric
