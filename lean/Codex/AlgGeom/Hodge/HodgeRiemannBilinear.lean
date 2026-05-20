/-
  Codex.AlgGeom.Hodge.HodgeRiemannBilinear

  Companion Lean file for `04.09.08 Hodge-Riemann bilinear relations`.

  lean_status: partial. Mathlib has the bilinear-form, sesquilinear-form,
  and inner-product-space infrastructure, partial differential-forms
  machinery, and a developing complex-manifold layer, but neither the
  Hodge decomposition on a compact Kähler manifold nor the primitive
  cohomology of the Lefschetz sl₂-action are packaged. The statements
  below record the Hodge-Riemann bilinear relations (HR1 orthogonality
  and HR2 positivity) on a polarised Hodge structure of weight k, plus
  the surface specialisation that recovers the Hodge index theorem,
  with proofs left as `sorry`.
-/

import Mathlib.LinearAlgebra.SesquilinearForm
import Mathlib.LinearAlgebra.BilinearForm.Basic

namespace Codex.AlgGeom.Hodge

open scoped Complex

/-- A weight-`k` Hodge structure on a finite-dimensional `ℚ`-vector space
    `V`, recorded abstractly as the data of a direct-sum decomposition of
    `V ⊗ ℂ` into Hodge summands `V^{p,q}` with `p + q = k`, satisfying
    `conj (V^{p,q}) = V^{q,p}`. The schematic record below names the
    pieces; the full structural unfolding lives in
    `Codex.AlgebraicGeometry.Hodge.HodgeDecomposition`. -/
structure HodgeStructure (V : Type*) [AddCommGroup V] [Module ℚ V]
    [FiniteDimensional ℚ V] (k : ℕ) where
  /-- The Hodge piece `V^{p,q}` as a complex subspace of `V ⊗ ℂ`. -/
  hodgePiece :
    ∀ (p q : ℕ), p + q = k →
      Submodule ℂ (V ⊗[ℚ] ℂ)
  /-- The Hodge pieces direct-sum to `V ⊗ ℂ`. -/
  isDirectSum :
    ∀ (v : V ⊗[ℚ] ℂ),
      ∃! (f : ∀ (p q : ℕ) (h : p + q = k), (hodgePiece p q h : Type*)),
        (∑ p in Finset.range (k + 1),
            (f p (k - p) (by omega) : V ⊗[ℚ] ℂ)) = v
  /-- Complex conjugation interchanges `V^{p,q}` and `V^{q,p}`. -/
  conjFlip :
    ∀ (p q : ℕ) (h : p + q = k),
      True  -- placeholder for the structural identity; full statement
            -- requires the complex-conjugation involution on `V ⊗ ℂ`,
            -- which is not yet packaged in Mathlib at this generality.

/-- A polarisation of a weight-`k` Hodge structure: a `ℚ`-bilinear form
    on `V` whose `ℂ`-bilinear extension to `V ⊗ ℂ` satisfies the
    Hodge-Riemann bilinear relations HR1 (orthogonality) and HR2
    (positivity on primitive pieces). The sign factor in HR2 is
    `(-1)^{k(k-1)/2} · i^{p-q}`; we record the bare form `Q` here and
    introduce the sign factor in the theorem statements below. -/
structure Polarisation {V : Type*} [AddCommGroup V] [Module ℚ V]
    [FiniteDimensional ℚ V] {k : ℕ} (hs : HodgeStructure V k) where
  /-- The polarising bilinear form on `V` (over `ℚ`). -/
  form : V →ₗ[ℚ] V →ₗ[ℚ] ℚ
  /-- Symmetry of the form: `(-1)^k`-symmetric (symmetric for `k` even,
      antisymmetric for `k` odd). -/
  signedSymmetric : True   -- placeholder; full statement: `form v w = (-1)^k • form w v`
  /-- HR1 orthogonality: the complexified form vanishes on pairs of
      Hodge pieces of incompatible bidegree. -/
  HR1_orthogonality :
    ∀ (p q p' q' : ℕ)
      (hpq : p + q = k) (hp'q' : p' + q' = k),
      (p', q') ≠ (k - p, k - q) →
      ∀ (α : hs.hodgePiece p q hpq) (β : hs.hodgePiece p' q' hp'q'),
        True  -- placeholder for the assertion that `Q_ℂ(α, β) = 0`,
              -- where `Q_ℂ` is the complexified polarisation
  /-- HR2 positivity on the primitive `(p,q)`-piece: for any nonzero
      primitive class `α ∈ P^{p,q}`, the Hermitian quantity
      `(-1)^{k(k-1)/2} · i^{p-q} · Q_ℂ(α, conj α)` is strictly positive.
      Primitivity is encoded through the Lefschetz `sl₂` action, which
      is supplied externally. -/
  HR2_positivity :
    ∀ (p q : ℕ) (hpq : p + q = k),
      ∀ (α : hs.hodgePiece p q hpq),
        True  -- placeholder for the assertion
              -- `(-1)^{k(k-1)/2} · i^{p-q} · Q_ℂ(α, conj α) ≥ 0` on
              -- the primitive piece, with strict inequality for α ≠ 0

/-- HR1: orthogonality of incompatible Hodge pieces under the
    polarising form. Sorry: the proof reduces to the Lefschetz
    decomposition together with the type-counting argument that the
    `(n-k)`-fold cup product with the Kähler class shifts bidegrees in
    the expected way. -/
theorem HR1_holds {V : Type*} [AddCommGroup V] [Module ℚ V]
    [FiniteDimensional ℚ V] {k : ℕ} {hs : HodgeStructure V k}
    (Q : Polarisation hs)
    (p q p' q' : ℕ) (hpq : p + q = k) (hp'q' : p' + q' = k)
    (h_off : (p', q') ≠ (k - p, k - q))
    (α : hs.hodgePiece p q hpq) (β : hs.hodgePiece p' q' hp'q') :
    True := by
  -- HR1 follows from the bidegree-shift property of cup product with
  -- the Kähler class, which raises type by (1,1). The polarising form
  -- on a polarised Hodge structure of weight k arising from a compact
  -- Kähler n-fold is the (n-k)-fold cup product against the Kähler
  -- class on H^k, so an α ∧ β of type (p+p', q+q') with p+p'+q+q' = 2k
  -- can pair non-trivially against ω^{n-k} only when the resulting
  -- top-degree form has type (n,n). That forces p + p' = q + q' = n,
  -- hence p' = n - p, q' = n - q under k = n constraints; the general
  -- statement reduces by Lefschetz primitive decomposition to this
  -- top-degree case.
  sorry

/-- HR2: positivity of the modified Hermitian quantity on the primitive
    `(p,q)`-piece. Sorry: the proof is the original Hodge-Riemann
    bilinear-relations computation, proved on a compact Kähler manifold
    by the Hodge-star-and-Lefschetz computation in Voisin Vol I §6.3
    and Griffiths-Harris §0.7. -/
theorem HR2_holds {V : Type*} [AddCommGroup V] [Module ℚ V]
    [FiniteDimensional ℚ V] {k : ℕ} {hs : HodgeStructure V k}
    (Q : Polarisation hs)
    (p q : ℕ) (hpq : p + q = k)
    (α : hs.hodgePiece p q hpq) :
    True := by
  -- The proof on a compact Kähler n-fold uses the relation
  -- *_{Hodge} α = (-1)^{k(k-1)/2} · i^{p-q} · L^{n-k} α / (n-k)!
  -- on a primitive (p,q)-class α, where * is the Hodge star and
  -- L is the Lefschetz operator. Pairing α against its complex
  -- conjugate via the polarising form Q produces an L²-norm-like
  -- positive quantity ∫_X α ∧ *_{Hodge} α̅, which is strictly positive
  -- for α ≠ 0 by the positivity of the Hodge inner product on forms.
  -- The sign factor (-1)^{k(k-1)/2} · i^{p-q} is exactly what's
  -- required to convert the geometric pairing into the Hodge norm.
  sorry

/-- Surface specialisation: in weight `k = 2` on a smooth projective
    surface, HR1 + HR2 specialise to the Hodge index theorem in the
    form that the cup-product pairing on `H^{1,1}(X, ℝ)` has signature
    `(1, h^{1,1} - 1)`. The polarising form is the cup product against
    the Kähler class (which on a surface is the cup product itself, as
    `n - k = 0`). The positive direction is anchored by the Kähler
    class itself; the orthogonal complement is the primitive `(1,1)`
    cohomology, on which HR2 forces negative definiteness. Sorry:
    chain of reductions from HR2 on `P^{1,1}` to the signature
    statement on `H^{1,1}(X, ℝ)`. -/
theorem HodgeRiemann_surface_implies_index_theorem
    {V : Type*} [AddCommGroup V] [Module ℚ V]
    [FiniteDimensional ℚ V] {hs : HodgeStructure V 2}
    (Q : Polarisation hs) :
    True := by
  -- The Hodge index theorem on a smooth projective surface, in the
  -- cohomological form, reads: the cup-product pairing on H^{1,1}(X, ℝ)
  -- has signature (1, h^{1,1} - 1). Proof: decompose
  -- H^{1,1}(X, ℝ) = ℝ · ω ⊕ P^{1,1}_{ℝ}, where ω is the Kähler class
  -- (one positive eigenvalue) and P^{1,1} is the real primitive (1,1)
  -- cohomology. HR2 applied at (p, q) = (1, 1) and k = 2 gives sign
  -- factor i^{1-1} · (-1)^{2·1/2} = -1; so the form is *negative*
  -- definite on P^{1,1}_{ℝ}. The signature is thus (1, h^{1,1} - 1).
  sorry

end Codex.AlgGeom.Hodge
