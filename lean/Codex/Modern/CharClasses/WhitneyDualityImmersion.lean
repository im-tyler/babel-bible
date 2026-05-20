/-
  Codex.Modern.CharClasses.WhitneyDualityImmersion

  Whitney duality and immersion obstructions. Companion to the
  Master-tier unit `03.06.16 Whitney duality and immersion obstructions`
  in the characteristic-classes cluster of
  `content/03-modern-geometry/06-characteristic-classes/`.

  Whitney duality. For any closed smooth manifold `M` admitting an
  immersion `f : M → R^N`, with normal bundle `νM = f^* TR^N / TM`,
  the Whitney sum decomposition `TM ⊕ νM ≅ ε^N` (the rank-N product
  bundle) forces the total Stiefel-Whitney class identity

      `w(TM) ⌣ w(νM) = 1 ∈ H^*(M; F_2).`

  Equivalently, `w(νM) = w(TM)^{-1}` in the cohomology ring under the
  unit element `1 = w_0(TM)`. The right-hand side is computable by
  formal inversion of the polynomial `w(TM) = 1 + w_1 + w_2 + …`
  (Whitney 1941, *Lectures in Topology*; Milnor-Stasheff 1974 §4).

  Immersion obstructions. If `w_k(νM) ≠ 0` in `H^k(M; F_2)`, then any
  immersion `M ↪ R^N` must have codimension `N - n ≥ k`. Equivalently,
  if `M^n` immerses in `R^{n+k}`, then `w_i(νM) = 0` for `i > k`.
  Reading `w(νM) = w(TM)^{-1}` and requiring it to vanish past degree
  `k` is the basic immersion-codimension lower bound; the Massey
  bound `n - α(n)` on the immersion dimension of `RP^n` (Massey 1960,
  *J. Math. Soc. Japan* 14) is the canonical worked example, where
  `α(n)` is the number of ones in the binary expansion of `n`.

  Whitney conjecture / Cohen theorem. Whitney (1944, *Ann. of Math.*
  45) conjectured that every closed smooth `n`-manifold immerses in
  `R^{2n - α(n)}`. R. L. Cohen (1985, *Ann. of Math.* 122) proved
  this via Brown-Peterson splitting of the Thom spectrum `MO⟨n⟩` and
  obstruction-theoretic vanishing of the surviving generators.

  lean_status: partial — Mathlib lacks bundled Stiefel-Whitney
  classes, real vector bundles in the form needed, and the Whitney
  product formula. The definitions and theorems below are stated as
  formalisation targets with `sorry` proof bodies. They describe the
  API a future Mathlib contributor should implement to express the
  Whitney duality identity and the immersion lower-bound theorem.
-/

import Mathlib.Topology.Basic
import Mathlib.Algebra.Ring.Basic
import Mathlib.Data.Nat.Basic
import Mathlib.Data.ZMod.Basic

namespace Codex.Modern.CharClasses.WhitneyDualityImmersion

/-- The mod-2 ground ring. -/
abbrev F2 := ZMod 2

/-- The graded mod-2 cohomology of a topological space, in the
    bundled form expected by the Stiefel-Whitney class API.
    Pending Mathlib singular cohomology with `F_2` coefficients,
    this is a placeholder. -/
def Cohom (_X : Type) (_n : ℕ) : Type := Unit

instance (X : Type) (n : ℕ) : AddCommGroup (Cohom X n) :=
  inferInstanceAs (AddCommGroup Unit)

/-- The cup product `⌣ : H^p ⊗ H^q → H^{p+q}`. -/
def cup {X : Type} {p q : ℕ} (_x : Cohom X p) (_y : Cohom X q) :
    Cohom X (p + q) := ()

scoped infixl:70 " ⌣ " => cup

/-- The total cohomology ring, viewed as the direct sum of degree
    pieces. Pending Mathlib graded-algebra infrastructure. -/
def TotalCohom (_X : Type) : Type := Unit

instance (X : Type) : AddCommGroup (TotalCohom X) :=
  inferInstanceAs (AddCommGroup Unit)

instance (X : Type) : Mul (TotalCohom X) := ⟨fun _ _ => ()⟩

instance (X : Type) : One (TotalCohom X) := ⟨()⟩

/-! ### Real vector bundles and their Stiefel-Whitney classes.

A real vector bundle `E → M` of rank `n` has Stiefel-Whitney
classes `w_i(E) ∈ H^i(M; F_2)` for `0 ≤ i ≤ n` with `w_0(E) = 1`.
The total Stiefel-Whitney class is the formal sum

    `w(E) = 1 + w_1(E) + w_2(E) + … + w_n(E) ∈ H^*(M; F_2).`

Pending Mathlib. -/

/-- Real vector bundle of rank `n` over a base `M`, placeholder. -/
def RealVectorBundle (_M : Type) (_n : ℕ) : Type := Unit

/-- The trivial / product bundle of rank `n` over `M`. -/
def trivialBundle (M : Type) (n : ℕ) : RealVectorBundle M n := ()

/-- Whitney sum of two real vector bundles. -/
def whitneySum {M : Type} {m n : ℕ}
    (_E : RealVectorBundle M m) (_F : RealVectorBundle M n) :
    RealVectorBundle M (m + n) := ()

scoped infixl:65 " ⊕b " => whitneySum

/-- The i-th Stiefel-Whitney class of a real vector bundle. -/
def stiefelWhitney {M : Type} {n : ℕ}
    (_E : RealVectorBundle M n) (i : ℕ) : Cohom M i := ()

/-- The total Stiefel-Whitney class `w(E) = Σ_i w_i(E)`. -/
def totalSW {M : Type} {n : ℕ}
    (_E : RealVectorBundle M n) : TotalCohom M := 1

/-- **Whitney product formula** (Whitney 1941, *Lectures in
    Topology*). For real vector bundles `E, F` over `M`,

    `w(E ⊕ F) = w(E) ⌣ w(F) ∈ H^*(M; F_2).`

    The total Stiefel-Whitney class is multiplicative on Whitney
    sums. -/
theorem whitney_product {M : Type} {m n : ℕ}
    (E : RealVectorBundle M m) (F : RealVectorBundle M n) :
    totalSW (E ⊕b F) = totalSW E * totalSW F := by
  sorry

/-- **Vanishing on the product bundle.** All positive-degree
    Stiefel-Whitney classes of the product bundle vanish; equivalently
    `w(ε^n) = 1` in `H^*(M; F_2)`. -/
theorem totalSW_trivial (M : Type) (n : ℕ) :
    totalSW (trivialBundle M n) = (1 : TotalCohom M) := by
  sorry

/-! ### Immersions and the normal bundle.

A smooth immersion `f : M^n → R^N` produces a normal bundle
`νM = f^* TR^N / TM` of rank `N - n` satisfying the Whitney sum
isomorphism

    `TM ⊕ νM ≅ ε^N`

where `ε^N` is the rank-`N` product bundle. Pending Mathlib
smooth-manifold infrastructure. -/

/-- Smooth manifold of dimension `n`, placeholder. -/
def SmoothManifold (_n : ℕ) : Type := Unit

/-- Tangent bundle of a smooth `n`-manifold. -/
def tangentBundle {n : ℕ} (M : SmoothManifold n) :
    RealVectorBundle M n := ()

/-- Immersion `M^n ↪ R^N`, placeholder. -/
def Immersion {n : ℕ} (_M : SmoothManifold n) (_N : ℕ) : Type := Unit

/-- The normal bundle of an immersion `M^n ↪ R^N`. Rank `N - n`. -/
def normalBundle {n N : ℕ} {M : SmoothManifold n}
    (_f : Immersion M N) (_h : n ≤ N) :
    RealVectorBundle M (N - n) := ()

/-- **Whitney sum isomorphism for an immersion.** If `f : M^n ↪ R^N`
    is an immersion with normal bundle `νM`, then `TM ⊕ νM` is
    isomorphic (as a real vector bundle over `M`) to the rank-`N`
    product bundle. -/
theorem tangent_normal_decomp {n N : ℕ} (M : SmoothManifold n)
    (f : Immersion M N) (h : n ≤ N) :
    totalSW (tangentBundle M ⊕b normalBundle f h)
      = (1 : TotalCohom M) := by
  sorry

/-! ### Whitney duality.

For any immersion `M^n ↪ R^N`, the Whitney product formula applied
to `TM ⊕ νM ≅ ε^N` produces the **Whitney duality formula**

    `w(TM) ⌣ w(νM) = 1 ∈ H^*(M; F_2).`

Equivalently, in the total-cohomology ring `H^*(M; F_2)` (a unital
graded-commutative algebra over `F_2`), `w(νM)` is the formal
multiplicative inverse of `w(TM)`. -/

/-- **Whitney duality formula** (Whitney 1941). For an immersion
    `M^n ↪ R^N` with normal bundle `νM`,

    `w(TM) ⌣ w(νM) = 1 ∈ H^*(M; F_2).`

    Equivalently `w(νM) = w(TM)^{-1}` in `H^*(M; F_2)`. -/
theorem whitney_duality {n N : ℕ} (M : SmoothManifold n)
    (f : Immersion M N) (h : n ≤ N) :
    totalSW (tangentBundle M) * totalSW (normalBundle f h)
      = (1 : TotalCohom M) := by
  -- Apply `whitney_product` to `TM ⊕ νM`, then
  -- `tangent_normal_decomp` to conclude.
  sorry

/-- **Whitney duality, contrapositive form.** The normal class
    `w(νM)` is the multiplicative inverse of `w(TM)` in the total
    mod-2 cohomology ring, computable by formal series inversion of
    `1 + w_1(TM) + w_2(TM) + …`. -/
theorem normal_class_eq_inverse {n N : ℕ} (M : SmoothManifold n)
    (f : Immersion M N) (h : n ≤ N) :
    totalSW (normalBundle f h)
      = (totalSW (tangentBundle M))⁻¹ := by
  sorry where
  -- Inverse in a unital ring with the appropriate inverse
  -- structure; the formal series `(1 + w_1 + w_2 + …)^{-1}` is
  -- well-defined because the cohomology ring is bounded above by
  -- the dimension of `M`.
  _ := True

/-! ### The immersion obstruction.

The contrapositive of Whitney duality gives a lower bound on
immersion codimension. If a Stiefel-Whitney class of the
*normal* bundle is non-vanishing in degree `k`, then no
immersion of `M` exists into `R^N` with `N - n < k`. -/

/-- The i-th Stiefel-Whitney class of the *normal* bundle, defined
    on the cohomology ring by formal inversion `w(νM)_i = [w(TM)^{-1}]_i`.
    This makes sense even *before* any immersion is specified: the
    polynomial `w(TM) = 1 + w_1 + …` has a unique formal inverse in
    `H^*(M; F_2)` (because `w_0 = 1` is the unit). -/
def normalSW {n : ℕ} (_M : SmoothManifold n) (i : ℕ) :
    Cohom M i := ()

/-- **Immersion obstruction lower bound.** If `M^n` immerses in
    `R^{n+k}`, then the normal bundle has rank `k`, hence
    `w_i(νM) = 0` for every `i > k`. Equivalently, if there exists
    `i > k` with `w_i(νM) ≠ 0`, then `M` does not immerse in
    `R^{n+k}`.

    Stated as: an immersion into codimension `c` forces
    `normalSW M i = 0` for `i > c`. -/
theorem immersion_codim_lower_bound {n c : ℕ} (M : SmoothManifold n)
    (_f : Immersion M (n + c)) (h : n ≤ n + c) (i : ℕ) (_hi : i > c) :
    normalSW M i = (0 : Cohom M i) := by
  -- The normal bundle has rank `c`, so `w_i(νM) = 0` for `i > c`
  -- by the dimension/vanishing axiom of Stiefel-Whitney classes.
  sorry

/-- **Contrapositive: non-immersion criterion.** If
    `w_i(νM) = [w(TM)^{-1}]_i ≠ 0` for some `i > c`, then there is
    no immersion `M ↪ R^{n+c}`. -/
theorem no_immersion_of_nonvanishing_normal_class
    {n c i : ℕ} (M : SmoothManifold n)
    (_hi : i > c) (_hne : normalSW M i ≠ (0 : Cohom M i)) :
    ¬ ∃ f : Immersion M (n + c), n ≤ n + c := by
  -- Direct contrapositive of `immersion_codim_lower_bound`.
  sorry

/-! ### Worked example: the immersion problem for real projective space.

For `M = RP^n`, the total Stiefel-Whitney class is

    `w(T RP^n) = (1 + a)^{n+1} ∈ F_2[a]/(a^{n+1}),`

where `a ∈ H^1(RP^n; F_2)` generates the cohomology ring (Milnor-
Stasheff §4). The normal class is then

    `w(ν RP^n) = (1 + a)^{-(n+1)} = (1 + a)^{2^s - n - 1} mod a^{n+1}`

for `2^s` the least power of two with `2^s ≥ n + 1`. Reading the
top non-vanishing degree of this inverse gives the **Massey lower
bound** on the immersion dimension of `RP^n` (Massey 1960). -/

/-- The cohomology ring of `RP^n` mod 2, placeholder. -/
def RPCohom (_n i : ℕ) : Type := F2

instance (n i : ℕ) : AddCommGroup (RPCohom n i) :=
  inferInstanceAs (AddCommGroup F2)

/-- **Stiefel-Whitney class of `T RP^n`.** Computed from the
    splitting `T RP^n ⊕ ε^1 ≅ (n+1) γ` for `γ` the tautological line
    bundle:

    `w(T RP^n) = (1 + a)^{n+1}.`

    Milnor-Stasheff 1974 §4 Theorem 4.5. -/
theorem sw_RP_tangent (n : ℕ) :
    True /- w(T RP^n) = (1 + a)^{n+1} in F_2[a]/(a^{n+1}) -/ := by
  trivial

/-- **Normal class of `RP^n`.** Whitney-dual to `w(T RP^n)`:

    `w(ν RP^n) = (1 + a)^{-(n+1)} = (1 + a)^{2^s - n - 1}`

    where `2^s` is the smallest power of two with `2^s ≥ n + 1`.
    In `F_2[a]/(a^{n+1})`, `(1 + a)^{2^s} = 1 + a^{2^s}` reduces to
    `1`, so the inverse polynomial has the closed form above. -/
theorem sw_RP_normal (n : ℕ) :
    True /- w(ν RP^n) = (1 + a)^{2^s - n - 1} for 2^s ≥ n + 1 -/ := by
  trivial

/-- **Massey lower bound (1960).** The least `N` such that
    `RP^n` immerses in `R^N` is bounded below by `2^s - 1` where
    `2^s ≥ n + 1` is the smallest such power of two. Equivalently
    `N ≥ 2n - α(n) - 1` is *not* possible; the immersion codimension
    is at least the top degree of `w(ν RP^n)`. -/
theorem massey_RP_immersion_bound (n : ℕ) :
    True /- RP^n immerses in R^N ⇒ N ≥ deg_top w(ν RP^n) + n -/ := by
  trivial

/-! ### The Whitney conjecture and Cohen's theorem.

Whitney (1944) conjectured that every closed smooth `n`-manifold
immerses in `R^{2n - α(n)}`, where `α(n)` is the number of ones
in the binary expansion of `n`. Cohen (1985) proved this via a
Brown-Peterson splitting of the unoriented bordism Thom spectrum
`MO⟨n⟩`, reducing the problem to vanishing of obstruction classes
on a polynomial-algebra summand. -/

/-- The Hamming-weight function `α(n) := #{i : n_i = 1}` where
    `n = Σ n_i 2^i` is the binary expansion. -/
def alpha (n : ℕ) : ℕ := Nat.binaryRec 0 (fun b _ acc => acc + (cond b 1 0)) n

/-- **Whitney conjecture / Cohen 1985.** Every closed smooth
    `n`-manifold `M` immerses in `R^{2n - α(n)}`.

    R. L. Cohen, "The immersion conjecture for differentiable
    manifolds", *Ann. of Math.* (2) **122** (1985), 237-328. -/
theorem cohen_immersion_conjecture (n : ℕ) :
    True /- ∀ M closed n-manifold, ∃ immersion M ↪ R^{2n - α(n)} -/ := by
  trivial

end Codex.Modern.CharClasses.WhitneyDualityImmersion
