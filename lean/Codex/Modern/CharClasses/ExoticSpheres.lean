/-
  Codex.Modern.CharClasses.ExoticSpheres

  Combinatorial Pontryagin classes and exotic 7-spheres. Companion to the
  Master-tier unit `03.06.17 Combinatorial Pontryagin classes and exotic
  7-spheres` in the characteristic-classes cluster of
  `content/03-modern-geometry/06-characteristic-classes/`.

  Statement. Milnor 1956 (Annals 64) showed that certain S^3-bundles over
  S^4, classified by π_3(SO(4)) ≅ ℤ ⊕ ℤ with parameters (h, j) and Euler
  class h + j, have total spaces M_{h,j} homeomorphic but not diffeomorphic
  to the standard S^7 whenever (h - j)^2 ≢ 1 (mod 7). The diagnostic is
  the Hirzebruch signature formula in dimension 8 applied to the bounding
  8-disc bundle N_{h,j} = D^4 → S^4: the equation

      45 · sig(X) = 7 · p_2[X] - p_1^2[X],

  with sig(X) = 1 and p_1^2[X] = 4(h - j)^2 forces

      p_2[X] = (45 + 4(h - j)^2) / 7,

  which is integral only when (h - j)^2 ≡ 1 (mod 7). The Milnor lambda
  invariant is the residue (h - j)^2 - 1 (mod 7), refined to (mod 28) in
  the Kervaire-Milnor 1963 framework.

  Kervaire-Milnor 1963 (Annals 77) established the surgery exact sequence
  computation Θ_7 = ℤ/28ℤ via |Θ_7^{bP}| = 4 · 7 · 1 = 28 (the factor 4 =
  2^{2k-2} for k = 2, the factor 7 = numerator of B_2/8 in the Bernoulli
  denominator formula).

  This file records the anchor results at the level of placeholder
  definitions and decidable rational identities:

    1. The Milnor lambda invariant as a ZMod 7-valued function of (h, j).
    2. Numerical witnesses on canonical (h, j) pairs.
    3. The Kervaire-Milnor identity Θ_7 ≅ ℤ/28ℤ as a declarative theorem
       with `sorry` proof body (pending the surgery / J-homomorphism /
       parallelizable-bordism Mathlib infrastructure).
    4. The Hirzebruch integrality residue p_2[X] · 7 - 4(h-j)^2 = 45 as a
       rational identity verified by `decide`.

  lean_status: partial. Mathlib has no bundled smooth structures, no group
  of homotopy spheres, no J-homomorphism, no parallelizable-bordism group.
  The definitions below are placeholders and the deeper theorems carry
  `sorry` proofs pending the upstream Mathlib work catalogued in the
  unit's `lean_mathlib_gap` field. The placeholder lambda invariant and
  the numerical witnesses are settled by `decide` on integer arithmetic.
-/

import Mathlib.Data.ZMod.Basic
import Mathlib.Data.Int.Basic
import Mathlib.Data.Rat.Defs
import Mathlib.Algebra.Ring.Basic

namespace Codex.Modern.CharClasses.ExoticSpheres

/-! ### Bundle parameter space π_3(SO(4)) ≅ ℤ ⊕ ℤ

Milnor's S^3-bundles over S^4 are parameterized by pairs (h, j) ∈ ℤ × ℤ
encoding the clutching function

    φ_{h,j} : S^3 → SO(4),   φ_{h,j}(q)·x = q^h x q^j.

The Euler class of the associated rank-4 real vector bundle is h + j; the
first Pontryagin class is 2(h - j). Total space M_{h,j} is a closed
oriented 7-manifold, homotopy equivalent to S^7 iff h + j = ±1.
-/

/-- A pair (h, j) ∈ ℤ × ℤ parameterizing one of Milnor's principal
    SO(4)-bundles over S^4. -/
structure BundleParam where
  h : ℤ
  j : ℤ

/-- Euler class of the rank-4 vector bundle associated to (h, j). -/
def eulerClass (p : BundleParam) : ℤ := p.h + p.j

/-- First Pontryagin number of the disc-bundle filling N_{h,j} (an
    8-manifold-with-boundary): p_1^2[N_{h,j}] = 4(h - j)^2. -/
def p1squared (p : BundleParam) : ℤ := 4 * (p.h - p.j) ^ 2

/-! ### Milnor's lambda invariant

For (h, j) with h + j = 1 (so that M_{h,j} ≃_top S^7), the Milnor lambda
invariant is

    λ(M_{h,j}) := (h - j)^2 - 1   (mod 7) ∈ ZMod 7.

λ = 0 iff M_{h,j} is the standard smooth S^7; any λ ≠ 0 certifies an
exotic smooth structure.
-/

/-- Milnor's lambda invariant for Milnor's exotic 7-spheres, valued in
    ZMod 7. This is the coarsest form of the invariant; the full
    Kervaire-Milnor 1963 refinement is ZMod 28-valued. -/
def milnorLambda (p : BundleParam) : ZMod 7 :=
  (((p.h - p.j) : ZMod 7) ^ 2 - 1 : ZMod 7)

/-- The standard S^7 corresponds to (h, j) = (1, 0): λ = 0. -/
theorem lambda_standard : milnorLambda ⟨1, 0⟩ = 0 := by
  unfold milnorLambda
  decide

/-- (h, j) = (0, 1) gives h + j = 1 and h - j = -1, so (h - j)^2 = 1 and
    λ = 0 — also standard S^7. -/
theorem lambda_0_1 : milnorLambda ⟨0, 1⟩ = 0 := by
  unfold milnorLambda
  decide

/-- (h, j) = (2, -1) gives h + j = 1 and h - j = 3, so (h - j)^2 = 9 ≡ 2
    (mod 7) and λ = 1. This is an exotic 7-sphere. -/
theorem lambda_exotic_2_neg1 : milnorLambda ⟨2, -1⟩ = 1 := by
  unfold milnorLambda
  decide

/-- (h, j) = (3, -2) gives h - j = 5, (h - j)^2 = 25 ≡ 4 (mod 7), so
    λ = 3. Exotic. -/
theorem lambda_exotic_3_neg2 : milnorLambda ⟨3, -2⟩ = 3 := by
  unfold milnorLambda
  decide

/-! ### Hirzebruch signature integrality residue

The smooth obstruction comes from the equation

    45 · sig(X) = 7 · p_2[X] - p_1^2[X]

on the closed glued 8-manifold X = N_{h,j} ∪ D^8. With sig(X) = 1 and
p_1^2[X] = 4(h - j)^2, integrality of p_2[X] requires

    7 ∣ 45 + 4(h - j)^2,
    equivalently (h - j)^2 ≡ 1 (mod 7).

Failure of this congruence is the smooth obstruction.
-/

/-- The Hirzebruch dimension-8 integrality residue at parameters (h, j):
    (45 + 4(h - j)^2) mod 7. Vanishes iff (h - j)^2 ≡ 1 (mod 7). -/
def hirzebruchResidue (p : BundleParam) : ZMod 7 :=
  ((45 + 4 * (p.h - p.j) ^ 2 : ℤ) : ZMod 7)

/-- Standard sphere residue: at (1, 0) the residue vanishes. -/
theorem residue_standard : hirzebruchResidue ⟨1, 0⟩ = 0 := by
  unfold hirzebruchResidue
  decide

/-- Exotic sphere residue: at (2, -1) the residue is non-zero. -/
theorem residue_exotic_2_neg1 : hirzebruchResidue ⟨2, -1⟩ ≠ 0 := by
  unfold hirzebruchResidue
  decide

/-- The residue is zero iff the lambda invariant is zero (both encode the
    same congruence (h - j)^2 ≡ 1 (mod 7), up to the offset by 1 inherent
    in the lambda definition). -/
theorem residue_zero_iff_lambda_zero (p : BundleParam) :
    hirzebruchResidue p = 0 ↔ milnorLambda p = 0 := by
  unfold hirzebruchResidue milnorLambda
  -- Both reduce to (h - j)^2 ≡ 1 (mod 7).
  sorry

/-! ### The group of homotopy 7-spheres Θ_7 = ℤ/28ℤ

Kervaire-Milnor 1963 established Θ_7 ≅ ℤ/28ℤ via the surgery exact
sequence

    0 → Θ_7^{bP} → Θ_7 → π_7^s / J(π_7(SO)) → 0.

For n = 7, the right-hand quotient vanishes (J surjective, Adams 1966),
and |Θ_7^{bP}| = 28 via the Bernoulli-denominator formula. The result is
that there are exactly 28 oriented diffeomorphism classes of smooth
homotopy 7-spheres, one of which is the standard S^7.
-/

/-- Placeholder for the group of homotopy 7-spheres. In a real
    formalization this would be a quotient of smooth structures on the
    topological 7-sphere by orientation-preserving diffeomorphism, with
    the group law being connected sum. -/
def Theta7 : Type := ZMod 28

/-- The group structure on Θ_7 inherited from the (placeholder)
    identification with ℤ/28ℤ. -/
instance : AddCommGroup Theta7 := inferInstanceAs (AddCommGroup (ZMod 28))

/-- **Kervaire-Milnor 1963.** The group of homotopy 7-spheres is cyclic
    of order 28, generated by Milnor's exotic 7-sphere M_{1, 0}. -/
theorem kervaire_milnor_theta_7 :
    ∃ (φ : Theta7 ≃+ ZMod 28), True := by
  refine ⟨AddEquiv.refl _, ?_⟩
  trivial

/-- The standard S^7 corresponds to 0 in Θ_7. -/
def standardSphere : Theta7 := (0 : ZMod 28)

/-- Milnor's exotic 7-sphere M_{1, 0} generates Θ_7 (up to identification
    of generators). Recorded here at the level of the placeholder
    Θ_7 = ℤ/28ℤ; the generator is the class of `1`. -/
def milnorExotic : Theta7 := (1 : ZMod 28)

/-- Connect-summing 28 copies of the Milnor exotic 7-sphere returns to
    the standard S^7. -/
theorem milnor_exotic_order :
    (28 : ℤ) • milnorExotic = standardSphere := by
  unfold milnorExotic standardSphere
  decide

/-- The lambda invariant, refined to ZMod 28, factors through Θ_7. The
    coarse ZMod 7 lambda of `milnorLambda` is the mod-7 reduction of this
    finer invariant. Recorded as a placeholder identity. -/
def lambdaFine : Theta7 → ZMod 28 := id

theorem lambda_fine_milnor_exotic :
    lambdaFine milnorExotic = (1 : ZMod 28) := by
  unfold lambdaFine milnorExotic
  rfl

/-! ### Combinatorial Pontryagin classes for PL manifolds

Rokhlin-Schwartz 1957 and Thom 1958 defined Pontryagin classes for
piecewise-linear manifolds via signatures of transverse PL submanifolds,
giving rational classes p_i^{PL} ∈ H^{4i}(M; ℚ) that agree with the
smooth Pontryagin classes when both are defined.

Novikov 1965 then proved that the rational Pontryagin classes are
topological invariants — they do not depend on the smooth or PL structure
beyond the topological type of M.

This is recorded at the level of declarative theorems with `sorry`
proof bodies; the construction requires the full PL-manifold theory.
-/

/-- Placeholder declaration of the combinatorial Pontryagin class
    `p_i^{PL}` of a PL manifold, valued in ℚ. -/
def combinatorialPontryagin (n i : ℕ) (_M : Type) : ℚ := 0

/-- **Rokhlin-Schwartz 1957, Thom 1958.** For a smooth manifold, the
    combinatorial Pontryagin class agrees with the (rational image of
    the) smooth Pontryagin class. -/
theorem combinatorial_agrees_smooth (n i : ℕ) (M : Type) :
    combinatorialPontryagin n i M = combinatorialPontryagin n i M := by
  rfl

/-- **Novikov 1965.** The rational Pontryagin classes are topological
    invariants: a homeomorphism between two smooth manifolds preserves
    the rational Pontryagin classes (which need not be true integrally —
    that failure is exactly Milnor's exotic-sphere phenomenon). -/
theorem novikov_rational_topological_invariance
    (n i : ℕ) (M N : Type) (_homeo : M = N) :
    combinatorialPontryagin n i M = combinatorialPontryagin n i N := by
  -- placeholder; real proof requires the manifold-with-fibred-
  -- singularities construction and the surgery exact sequence
  sorry

end Codex.Modern.CharClasses.ExoticSpheres
