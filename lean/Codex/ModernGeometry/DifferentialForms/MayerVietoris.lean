/-
  Codex.ModernGeometry.DifferentialForms.MayerVietoris

  Companion Lean file for `03.04.07 Mayer-Vietoris sequence for de Rham
  cohomology`.

  lean_status: partial. Mathlib has the abstract long-exact-sequence /
  snake-lemma machinery (`HomologicalComplex.LongExactSequence`,
  `CategoryTheory.ShortComplex.snakeLemma`) and partial differential-form
  support, but the de Rham specialisation — partition-of-unity surjectivity
  on a two-set open cover — is not formalised.
-/

namespace Codex.ModernGeometry.DifferentialForms

universe u

axiom Manifold : Type u

axiom OpenSubset : Manifold → Type u

axiom CoversManifold : {M : Manifold} → OpenSubset M → OpenSubset M → Prop

/-- Differential `k`-forms on an open subset of a manifold (schematic). -/
axiom Form : {M : Manifold} → OpenSubset M → Nat → Type u

/-- Restriction of a form on `M` to an open subset (schematic). -/
axiom restrictForm :
    {M : Manifold} → {U : OpenSubset M} → {k : Nat} →
    Form (⟨⟩ : OpenSubset M) k → Form U k

/-- The Mayer-Vietoris short exact sequence at form-degree `k` on a two-set
    open cover (statement placeholder; the actual short exact sequence
    requires the snake-lemma framework). -/
axiom mvShortExact :
    {M : Manifold} → {U V : OpenSubset M} →
    CoversManifold U V → {k : Nat} → True

/-- The Mayer-Vietoris connecting homomorphism `H^q(U ∩ V) → H^{q+1}(M)`. -/
axiom mvConnecting :
    {M : Manifold} → {U V : OpenSubset M} →
    CoversManifold U V → {k : Nat} → True

end Codex.ModernGeometry.DifferentialForms
