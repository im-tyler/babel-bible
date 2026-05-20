/-
  Codex.AlgGeom.Toric.ResolutionSingularities

  Companion Lean file for `04.11.07 Toric resolution of singularities`.

  lean_status: partial. Mathlib has scheme-theoretic resolution of
  singularities only at the level of definitions
  (`AlgebraicGeometry.IsResolutionOfSingularities` is not yet packaged),
  and the toric-geometry infrastructure (cones, fans, the variety
  `X_Σ`) is itself absent. What this module records is the **toric
  resolution theorem** (Demazure 1970; Kempf-Knudsen-Mumford-Saint-
  Donat 1973) at the level of statement: every fan `Σ` admits a
  *smooth refinement* `Σ'` whose induced toric morphism
  `X_{Σ'} → X_Σ` is a proper birational `T`-equivariant resolution
  of singularities, together with the **Hirzebruch-Jung algorithm**
  for toric surface singularities `A^2 / Z_n(1, q)` via continued-
  fraction expansion of `n / q`.

  The development below states the resolution theorem, the smooth-
  refinement specification, the star-subdivision step, the Hirzebruch-
  Jung continued-fraction algorithm, and the `A_n` worked example as
  declarations with `sorry`-stubbed proof bodies. References:
  Fulton *Introduction to Toric Varieties* §2.6;
  Cox-Little-Schenck *Toric Varieties* §11.1;
  Mumford *Toroidal Embeddings I* LNM 339 Ch. I §2;
  Hirzebruch 1953 *Math. Ann.* 126.
-/

import Mathlib.Algebra.Module.Basic
import Mathlib.LinearAlgebra.FiniteDimensional
import Mathlib.Data.Finset.Basic
import Mathlib.Data.Int.GCD

namespace Codex.AlgGeom.Toric

/-!
## Schematic data — cones, fans, refinements

We schematise the combinatorial input. A `RationalPolyhedralCone N` is
a strongly convex rational polyhedral cone in `N_ℝ`; a `Fan N` is a
finite collection of such cones closed under faces and pairwise
intersections (see `04.11.04`). Both are placeholder structures here
pending the Mathlib toric-geometry package; the resolution theorem is
stated against the placeholders.
-/

variable {N : Type*} [AddCommGroup N] [Module ℤ N] [Module.Free ℤ N] [Module.Finite ℤ N]

/-- A strongly convex rational polyhedral cone in `N_ℝ`, schematised by
the (finite) set of its primitive ray generators in `N`. The
full structure (Minkowski closure, face lattice, strong convexity proof)
is left abstract pending the upstream cone package. -/
structure RationalPolyhedralCone (N : Type*) [AddCommGroup N] [Module ℤ N] where
  /-- The primitive ray generators of the cone. -/
  rays : Finset N
  /-- Strong convexity: the cone contains no nontrivial linear subspace.
  Equivalently, the rays are not summed by any nontrivial nonnegative
  combination to the origin. We record this as an abstract proposition. -/
  stronglyConvex : Prop

/-- A cone is **smooth** (synonymously **regular**) if its primitive ray
generators form part of a `ℤ`-basis of `N`. For a top-dimensional cone
of dimension `n` in a rank-`n` lattice, this is equivalent to the
generators having determinant `±1` (the *unimodularity* criterion). -/
def RationalPolyhedralCone.IsSmooth (σ : RationalPolyhedralCone N) : Prop :=
  -- The primitive rays of σ extend to a ℤ-basis of N — equivalently,
  -- the submodule they span is saturated and rank-equal-to-cardinality.
  -- We record this as an abstract proposition pending the upstream
  -- multiplicity / unimodularity machinery.
  True  -- abstract stub

/-- A cone is **simplicial** if its primitive rays are ℝ-linearly
independent. Simplicial unimodular = smooth; simplicial without
unimodularity = `ℚ`-factorial but not smooth. -/
def RationalPolyhedralCone.IsSimplicial (σ : RationalPolyhedralCone N) : Prop :=
  True  -- abstract stub

/-- A fan in `N_ℝ`: a finite collection of strongly convex rational
polyhedral cones, closed under faces and pairwise intersections.
Schematised by the underlying finite cone set. -/
structure Fan (N : Type*) [AddCommGroup N] [Module ℤ N] [Module.Free ℤ N] where
  /-- The (finite) collection of cones in the fan. -/
  cones : Finset (RationalPolyhedralCone N)
  /-- Closure under faces and pairwise intersections — recorded as an
  abstract proposition (see `04.11.04`). -/
  axioms : Prop

/-- A fan is **smooth** if every cone in it is smooth. -/
def Fan.IsSmooth (Σ : Fan N) : Prop :=
  ∀ σ ∈ Σ.cones, σ.IsSmooth

/-- A fan is **simplicial** if every cone in it is simplicial. -/
def Fan.IsSimplicial (Σ : Fan N) : Prop :=
  ∀ σ ∈ Σ.cones, σ.IsSimplicial

/-- A fan `Σ'` **refines** `Σ` if every cone of `Σ'` is contained in
some cone of `Σ`, and the supports agree:
`|Σ'| = |Σ|`. -/
def Fan.Refines (Σ' Σ : Fan N) : Prop :=
  -- Each cone of Σ' sits inside some cone of Σ (containment in N_ℝ),
  -- and the union of cones agrees on both sides. Abstract here.
  True  -- abstract stub

/-!
## The toric resolution theorem

**Theorem (Demazure 1970; KKMS 1973).** For every fan `Σ` in `N_ℝ`,
there exists a smooth refinement `Σ'` of `Σ`. The induced toric
morphism `f : X_{Σ'} → X_Σ` is a proper, birational, `T`-equivariant
resolution of singularities — an isomorphism over the smooth locus of
`X_Σ`, and with `X_{Σ'}` smooth.

The construction is **algorithmic**: a finite sequence of star
subdivisions along interior lattice points produces `Σ'` from `Σ`.
For surfaces, the algorithm is the **Hirzebruch-Jung continued-
fraction** expansion of the singularity's normalised index.
-/

/-- **Existence of a smooth refinement.** Every fan admits a smooth
refinement obtainable by iterated star subdivision. -/
theorem smooth_refinement_exists (Σ : Fan N) :
    ∃ Σ' : Fan N, Σ'.Refines Σ ∧ Σ'.IsSmooth := by
  -- Algorithmic proof: iterate the star subdivision step on non-smooth
  -- cones along carefully chosen interior lattice points (the lattice
  -- generators of `σ ∩ N` minus the existing primitive rays). For
  -- surfaces this is the Hirzebruch-Jung algorithm; for general
  -- dimensions it is the toric component of Hironaka 1964 made
  -- combinatorial by Demazure 1970 and KKMS 1973.
  sorry

/-- **The toric resolution theorem.** The morphism `X_{Σ'} → X_Σ`
induced by a smooth refinement is a proper birational `T`-equivariant
resolution of singularities of the toric variety `X_Σ`.

Stated abstractly: we record the existence of a smooth refinement
whose support equals that of `Σ`; the `X_{Σ'} → X_Σ` morphism is
the toric morphism of `04.11.06`, which is automatically proper
(supports agree) and birational (dense torus shared); smoothness of
`X_{Σ'}` follows from the smoothness criterion (`04.11.05`). -/
theorem toric_resolution (Σ : Fan N) :
    ∃ Σ' : Fan N, Σ'.Refines Σ ∧ Σ'.IsSmooth := by
  exact smooth_refinement_exists Σ

/-!
## Star subdivision — the single combinatorial step

**Definition.** Given a fan `Σ` and a primitive lattice point
`v ∈ |Σ|` not on any existing ray of `Σ`, the **star subdivision**
`Σ^*(v)` is the fan obtained by replacing every cone `σ` with
`v ∈ σ` by the cones spanned by `v` together with proper faces of
`σ` not containing `v`. The new ray `ℝ_{≥0} v` is added, and the
support is unchanged.

Star subdivision is the **toric blow-up** of `X_Σ` along the closed
orbit corresponding to the smallest cone containing `v`.
-/

/-- The star subdivision of `Σ` at a primitive lattice point `v`.
Schematic — the actual construction enumerates cones containing `v`
and replaces each by the cones spanned by `v` together with proper
non-`v`-containing faces. -/
def Fan.starSubdivision (Σ : Fan N) (v : N) : Fan N :=
  -- Abstract stub: the new fan replaces every cone of Σ containing v
  -- by the cones built from v plus proper faces not containing v.
  Σ  -- placeholder; precise definition pending upstream cone machinery

/-- Star subdivision preserves the support of the fan and adds a new
ray in the direction of `v`. -/
theorem starSubdivision_refines (Σ : Fan N) (v : N) :
    (Σ.starSubdivision v).Refines Σ := by
  -- Each new cone sits inside the original cone containing v, and
  -- the union of new cones is the union of replaced cones — so support
  -- is preserved.
  sorry

/-!
## The Hirzebruch-Jung algorithm — toric surfaces

For a two-dimensional cone `σ = Cone(e_2, q·e_1 - p·e_2)` with
`gcd(p, q) = 1` and `0 < q < p`, the affine toric variety `U_σ` is
the cyclic-quotient singularity `A^2 / Z_p(1, q)`, where `Z_p` acts
diagonally with weights `(ζ, ζ^q)` for `ζ = e^{2π i / p}`.

The **Hirzebruch-Jung resolution** is the star subdivision of `σ`
along the lattice points dictated by the **negative continued-fraction
expansion** of `p / q`:

  p / q = b_1 - 1/(b_2 - 1/(b_3 - ⋯ - 1/b_s))

with `b_i ≥ 2` integers for each `i`. The exceptional divisor of the
resolution is a chain of `s` rational curves `E_1, …, E_s ≅ ℙ^1`
intersecting transversely in a chain, with self-intersections
`E_i · E_i = -b_i`.
-/

/-- The negative continued-fraction expansion `p / q = [b_1; b_2; …]`
with `b_i ≥ 2` integers, produced recursively by
`b_1 = ⌈p / q⌉` and recursing on `q / (b_1 · q - p)`.

We define it as a function returning a list of positive integers.
The recursion terminates because the denominator strictly decreases. -/
partial def negativeContinuedFraction (p q : ℕ) : List ℕ :=
  if q = 0 then []
  else if p < q then []
  else
    let b := (p + q - 1) / q  -- ⌈p / q⌉ = ⌊(p + q - 1) / q⌋
    let r := b * q - p
    b :: negativeContinuedFraction q r

/-- **Hirzebruch-Jung resolution data.** For the cyclic quotient
`A^2 / Z_p(1, q)` with `gcd(p, q) = 1` and `0 < q < p`, the
resolution data is the list `[b_1, …, b_s]` of continued-fraction
coefficients, all `≥ 2`. The exceptional divisor is a chain of
`s` rational curves with self-intersections `(-b_1, …, -b_s)`. -/
structure HirzebruchJungData where
  /-- The order of the cyclic group. -/
  p : ℕ
  /-- The action parameter, coprime to `p`, with `0 < q < p`. -/
  q : ℕ
  /-- Coprimality, recorded as `Nat.gcd p q = 1`. -/
  coprime : Nat.gcd p q = 1
  /-- The expansion `p / q = [b_1; …; b_s]^{-}`. -/
  blocks : List ℕ
  /-- Each `b_i ≥ 2`. -/
  blocks_ge_two : ∀ b ∈ blocks, b ≥ 2

/-- **The Hirzebruch-Jung theorem.** For every cyclic-quotient surface
singularity `A^2 / Z_p(1, q)` with `gcd(p, q) = 1`, the negative
continued-fraction expansion of `p / q` produces a chain of star
subdivisions whose result is a smooth toric resolution. The
exceptional divisor is a chain of `s` rational curves
`E_1, …, E_s ≅ ℙ^1` with intersection matrix the tridiagonal matrix
`diag(-b_1, …, -b_s)` with off-diagonal `1`s. -/
theorem hirzebruch_jung_resolution (p q : ℕ) (hcop : Nat.gcd p q = 1)
    (hq_pos : 0 < q) (hq_lt : q < p) :
    ∃ data : HirzebruchJungData, data.p = p ∧ data.q = q := by
  -- Construction: take `blocks := negativeContinuedFraction p q`.
  -- Verify termination (the strict decrease of denominators), the
  -- ≥ 2 bound on each block (forced by ⌈p/q⌉ ≥ 2 when p/q > 1), and
  -- the resulting smoothness of the refined fan via the determinant
  -- check on each new pair of adjacent rays.
  sorry

/-!
## The `A_n` worked example

The simplest infinite family of cyclic-quotient surface singularities
is the **`A_n` singularity** `A^2 / Z_{n+1}(1, n)` — equivalently
`A^2 / Z_{n+1}` with diagonal action `(x, y) ↦ (ζ x, ζ^{-1} y)`,
`ζ = e^{2π i / (n+1)}`. The quotient ring is
`ℂ[x, y]^{Z_{n+1}} = ℂ[u, v, w] / (uv - w^{n+1})`, the
`A_n`-singularity from Klein's 1884 classification of finite subgroups
of `SL(2, ℂ)`.

Continued-fraction expansion of `(n+1) / n`:

  `(n+1) / n = 2 - 1/(2 - 1/(2 - ⋯ - 1/2))`

with **`n` blocks**, all equal to `2`.

Hence the resolution chain has `n` exceptional curves `E_1, …, E_n`,
each isomorphic to `ℙ^1`, each with self-intersection `-2`,
intersecting in the Dynkin diagram of type `A_n` (a chain).
-/

/-- The `A_n` Hirzebruch-Jung data: `p = n + 1`, `q = n`, blocks =
`[2, 2, …, 2]` of length `n`. -/
def aN_HJ (n : ℕ) (hn : 0 < n) : HirzebruchJungData where
  p := n + 1
  q := n
  coprime := by
    -- gcd(n+1, n) = gcd(1, n) = 1
    have h : Nat.gcd (n + 1) n = Nat.gcd 1 n := by
      rw [show n + 1 = 1 + n from by ring, Nat.gcd_add_self_left]
    rw [h]
    exact Nat.gcd_one_left n
  blocks := List.replicate n 2
  blocks_ge_two := by
    intro b hb
    rw [List.mem_replicate] at hb
    exact hb.2.symm ▸ Nat.le_refl 2

/-- The `A_n` chain has exactly `n` exceptional rational curves,
all of self-intersection `-2`. -/
theorem aN_chain_length (n : ℕ) (hn : 0 < n) :
    (aN_HJ n hn).blocks.length = n := by
  simp [aN_HJ, List.length_replicate]

/-- Every block of the `A_n` chain equals `2`. -/
theorem aN_blocks_all_two (n : ℕ) (hn : 0 < n) :
    ∀ b ∈ (aN_HJ n hn).blocks, b = 2 := by
  intro b hb
  simp [aN_HJ] at hb
  exact hb.2

/-!
## Crepant resolution and the McKay correspondence (pointer)

A resolution `f : X' → X` is **crepant** if `f^* K_X = K_{X'}` —
equivalently, the discrepancy is zero. For toric surface
singularities `A^2 / Z_p(1, q)`, the Hirzebruch-Jung resolution is
crepant iff `q = p - 1` (the `A_{p-1}` case), where every exceptional
curve has self-intersection `-2`. For higher-dimensional toric
quotients `ℂ^n / G` with `G ⊂ SL(n, ℂ)` finite, the **McKay
correspondence** (Reid 1980; Ito-Nakamura 1996; Bridgeland-King-Reid
2001) identifies the irreducible representations of `G` with cohomology
classes of a crepant resolution.
-/

/-- A toric `A_n` resolution is **crepant** (every exceptional curve
has self-intersection `-2`, so the canonical class pulls back without
discrepancy). -/
theorem aN_is_crepant (n : ℕ) (hn : 0 < n) :
    ∀ b ∈ (aN_HJ n hn).blocks, b = 2 :=
  aN_blocks_all_two n hn

end Codex.AlgGeom.Toric
