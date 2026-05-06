/-
  Codex.ModernGeometry.DifferentialForms.GoodCover

  Companion Lean file for `03.04.10 Good covers, finite-dimensionality of
  de Rham cohomology, and the Mayer-Vietoris induction`.

  lean_status: partial. Mathlib has paracompactness, partition-of-unity
  scaffolding (`Mathlib.Geometry.Manifold.PartitionOfUnity`), and partial
  Riemannian-geometry support, but the geodesic-convexity construction of
  good covers and the Mayer-Vietoris induction proof of finite-dimensionality
  are not formalised.
-/

namespace Codex.ModernGeometry.DifferentialForms

universe u

axiom Manifold : Type u

axiom OpenCover : Manifold → Type u

/-- A cover is **good** if every finite intersection of cover elements is
    contractible (in particular, diffeomorphic to a Euclidean ball). -/
axiom GoodCover : {M : Manifold} → OpenCover M → Prop

/-- A cover is **finite** if it has finitely many elements. -/
axiom FiniteCover : {M : Manifold} → OpenCover M → Prop

/-- Existence of finite good covers on compact smooth manifolds, via the
    Whitehead-Greene geodesic-convexity construction. -/
axiom finite_good_cover_exists :
    {M : Manifold} → True → ∃ U : OpenCover M, GoodCover U ∧ FiniteCover U

/-- Mayer-Vietoris induction over a finite good cover gives finite-dimensionality
    of de Rham cohomology in each degree. -/
axiom de_rham_finite_dim :
    {M : Manifold} → {U : OpenCover M} →
    GoodCover U → FiniteCover U → True

/-- Vanishing of de Rham cohomology above the dimension of the manifold,
    via the same induction. -/
axiom de_rham_vanish_above_dim :
    {M : Manifold} → {U : OpenCover M} →
    GoodCover U → FiniteCover U → (q : Nat) → True

end Codex.ModernGeometry.DifferentialForms
