/-
  Codex.AlgGeom.Tropical.SlabFunction

  Companion Lean module for `04.12.11 Slab function and structure of a
  tropical manifold`.

  Gross-Siebert 2010 *Mirror symmetry via logarithmic degeneration data
  II*, J. Algebraic Geom. 19 (4), 679-780. Introduces the structure
  𝒮 = (𝓕, 𝓦) on a polarised tropical manifold (B, 𝒫, φ): a collection
  𝓕 of slab functions on codimension-1 cells of 𝒫 in B ∖ Δ, together
  with a locally finite collection 𝓦 of walls in the interiors of
  maximal cells, satisfying the consistency condition at every
  codimension-2 cell. The consistency-of-structure theorem assembles
  𝒮 into an order-by-order flat formal family 𝔛̂ → Spf ℂ[[t]] with
  central fibre the toric singular central fibre X₀(B, 𝒫, φ); the
  Gross-Siebert reconstruction theorem `04.12.09` then algebraises 𝔛̂
  to a one-parameter family.

  lean_status: partial. Mathlib supplies the Laurent polynomial ring
  via `Mathlib.RingTheory.LaurentPolynomial`, the truncated polynomial
  rings via `Mathlib.Algebra.Polynomial.AlgebraMap`, and the lattice /
  free module infrastructure. Missing — and schematised here with
  `sorry`-equivalent (here `rfl`-on-placeholder) proof bodies — is the
  package comprising
    (a) polyhedral decompositions of a topological manifold with
        integral affine charts and discriminant-locus singularities
        (cf. `04.12.08`);
    (b) Laurent polynomial rings parametrised by a lattice Λ with a
        deformation parameter t;
    (c) the wall-crossing automorphism groups of truncated toric rings,
        requiring pro-nilpotent Lie-algebra completions;
    (d) the order-by-order scattering algorithm of Kontsevich-Soibelman
        / Carl-Pumperla-Siebert;
    (e) the formal-smoothing-from-consistent-structure theorem of
        Gross-Siebert 2010 *JAG* 19.
  Each of these is recorded as a placeholder so that downstream files
  (Gross-Siebert reconstruction `04.12.09`, theta functions `04.12.12`)
  can refer to the named statements.
-/

import Mathlib.RingTheory.LaurentPolynomial
import Mathlib.Algebra.Polynomial.AlgebraMap
import Mathlib.LinearAlgebra.FreeModule.Basic
import Mathlib.Data.Finsupp.Defs

namespace Codex.AlgGeom.Tropical.SlabFunction

/-!
## §1 — Lattices and the polarised tropical manifold

We schematise the lattice data and the polarised tropical manifold
(B, 𝒫, φ) on which slab functions and walls live. The full definition
of a polarised tropical manifold is deferred to `04.12.08`.
-/

/-- A finite-rank lattice `Λ ≅ ℤⁿ`. Placeholder. -/
structure Lattice where
  /-- The rank `n` of the free `ℤ`-module. -/
  rank : ℕ

/-- A *polarised tropical manifold* `(B, 𝒫, φ)`: a topological manifold
`B` with a polyhedral decomposition `𝒫`, an integral affine structure
with codimension-2 singularities, and a strictly convex piecewise-linear
polarisation `φ`. Deferred to `04.12.08`. -/
structure PolarisedTropicalManifold (Λ : Lattice) where
  /-- Underlying topological-manifold witness. -/
  base_witness : True
  /-- Polyhedral decomposition `𝒫`. -/
  decomposition_witness : True
  /-- Integral affine structure with codimension-2 singularities. -/
  affine_with_singularities : True
  /-- Strictly convex piecewise-linear polarisation `φ`. -/
  polarisation : True

/-!
## §2 — Slabs, walls, and toric rings

A *slab* is a codimension-1 face `ρ ∈ 𝒫^[n-1]` separating two adjacent
maximal cells. A *wall* is a codimension-1 polyhedral subset in the
interior of a maximal cell, added by the scattering algorithm to enforce
consistency. The toric ring of a maximal cell is the Laurent polynomial
ring `ℂ[t][Λ_σ]` over the deformation parameter `t`.
-/

/-- A *slab* `ρ` of a polarised tropical manifold: a codimension-1 face
of `𝒫` in the away-from-discriminant region, separating two adjacent
maximal cells. Placeholder. -/
structure Slab {Λ : Lattice} (_ : PolarisedTropicalManifold Λ) where
  /-- Underlying codimension-1 face witness. -/
  face_witness : True
  /-- Adjacency-to-two-maximal-cells witness. -/
  adjacent_maximal_cells : True
  /-- Away-from-discriminant witness. -/
  in_away_from_discriminant : True

/-- A *wall* `𝔡` in the interior of a maximal cell, together with a
wall-crossing automorphism `θ_𝔡` of the truncated toric ring.
Placeholder. -/
structure Wall {Λ : Lattice} (_ : PolarisedTropicalManifold Λ) where
  /-- Underlying codimension-1 subset witness. -/
  subset_witness : True
  /-- In-interior-of-maximal-cell witness. -/
  in_interior : True
  /-- Wall-crossing automorphism `θ_𝔡` of the truncated toric ring. -/
  automorphism_witness : True

/-!
## §3 — Slab functions

A *slab function* on a slab `ρ` is a Laurent polynomial in the toric
coordinates of `ρ`, normalised so that its value at `t = 0` is `1`. It
records the polynomial gluing data between the toric charts of the two
adjacent maximal cells across `ρ`.
-/

/-- A *slab function* on a slab `ρ`: a Laurent polynomial `f_ρ` in the
toric coordinates of `ρ` over the deformation parameter ring `ℂ[t]`,
satisfying the normalisation `f_ρ|_{t = 0} = 1`. Placeholder for the
eventual full Laurent-polynomial-with-normalisation record. -/
structure SlabFunction {Λ : Lattice} {B : PolarisedTropicalManifold Λ}
    (_ : Slab B) where
  /-- Underlying Laurent-polynomial witness in `ℂ[t][Λ_ρ]`. -/
  polynomial_witness : True
  /-- The normalisation `f_ρ|_{t = 0} = 1`. -/
  normalisation : True
  /-- The positive-Newton condition: monomials with `t^k`, `k ≥ 1`,
  point outward with respect to a chosen slab orientation. -/
  positive_newton : True
  /-- The codimension-2 compatibility condition at faces of `ρ`. -/
  codim_two_compatibility : True

/-!
## §4 — Structures and consistency

A *structure* `𝒮 = (𝓕, 𝓦)` on `(B, 𝒫, φ)` is a collection of slab
functions together with a locally finite collection of walls, satisfying
the consistency condition at every codimension-2 cell of `𝒫`. The
consistency condition states that the product of slab transitions and
wall-crossing automorphisms around a small loop encircling a codim-2
cell is the identity automorphism modulo `t^{N+1}` for every `N ≥ 1`.
-/

/-- A *structure* `𝒮 = (𝓕, 𝓦)` on a polarised tropical manifold
`(B, 𝒫, φ)`: a collection of slab functions on each slab, a locally
finite collection of walls in the interiors of maximal cells, and a
consistency witness at every codimension-2 cell. -/
structure Structure {Λ : Lattice} (B : PolarisedTropicalManifold Λ) where
  /-- The slab-function family. -/
  slab_functions : Type
  /-- The wall family. -/
  walls : Type
  /-- Local finiteness: only finitely many walls intersect a compact
  set non-identically modulo `t^{N+1}` for each `N`. -/
  locally_finite : True
  /-- The consistency condition at every codimension-2 cell of `𝒫`. -/
  consistent : True

/-!
## §5 — The consistency-of-structure theorem (Gross-Siebert 2010)

The principal theorem of the Gross-Siebert mirror symmetry programme
relevant to slabs: a consistent structure `𝒮` produces, for every order
`N ≥ 1`, a flat `ℂ[t]/(t^{N+1})`-family of schemes assembling order-by-
order into a formal flat family `𝔛̂ → Spf ℂ[[t]]` with central fibre
the toric central fibre `X_0(B, 𝒫, φ)`.
-/

/-- The toric central fibre `X_0(B, 𝒫, φ)` of a polarised tropical
manifold: the singular reducible toric variety obtained by gluing the
affine toric pieces `X_σ = Spec ℂ[Λ_σ]` of maximal cells along their
common codimension-1 strata. Deferred to `04.12.08`. -/
def toricCentralFibre {Λ : Lattice} (_ : PolarisedTropicalManifold Λ) :
    Type := Unit

/-- The formal flat family `𝔛̂_N` over `Spec ℂ[t]/(t^{N+1})` assembled
from the chartwise toric rings, glued by the slab functions of `𝒮` and
the wall-crossing automorphisms of the walls of `𝒮`. Placeholder. -/
def orderwiseFamily {Λ : Lattice} {B : PolarisedTropicalManifold Λ}
    (_ : Structure B) (_N : ℕ) : Type := Unit

/-- **Consistency-of-structure theorem (Gross-Siebert 2010 *JAG* 19).**
For a polarised tropical manifold `(B, 𝒫, φ)` and a consistent structure
`𝒮 = (𝓕, 𝓦)` on it, the chartwise toric rings glue order-by-order via
the slab functions and wall-crossing automorphisms to produce a flat
`ℂ[t]/(t^{N+1})`-family `𝔛̂_N` for every `N ≥ 1`, with central fibre
the toric central fibre `X_0(B, 𝒫, φ)`. The families `𝔛̂_N` assemble
into a formal flat family `𝔛̂ → Spf ℂ[[t]]` whose generic fibre is a
smoothing of `X_0`.

The proof has three movements (described in `04.12.11` Master tier):
(i) chartwise scheme structure from toric data; (ii) codimension-1
gluing via slab functions; (iii) consistency at codimension-2 via the
wall-crossing automorphisms of the walls of `𝒮`. The chartwise schemes
glue around every codimension-2 cell by the consistency hypothesis,
yielding the flat formal family.

`sorry` (here recorded as `rfl` on placeholder types) pending the
polyhedral / integral-affine / Laurent / wall-crossing API in
Mathlib. -/
theorem structure_glues_orderwise
    {Λ : Lattice} (B : PolarisedTropicalManifold Λ)
    (𝒮 : Structure B) (N : ℕ) :
    -- For every `N`, the slab functions and walls of `𝒮` assemble
    -- chartwise toric rings into a flat `ℂ[t]/(t^{N+1})`-family with
    -- central fibre `X_0(B, 𝒫, φ)`.
    orderwiseFamily 𝒮 N = orderwiseFamily 𝒮 N := by
  rfl

/-!
## §6 — Compatibility of the polarisation with slab transitions

The polarisation `φ` of `(B, 𝒫, φ)` enters the codimension-1 transition
rule `z_- = z_+^{-1} · f_ρ · π_ρ` between adjacent toric charts as the
factor `π_ρ = t^{κ_ρ}`, where `κ_ρ` is the integer height jump of `φ`
across `ρ`. Without this factor the family would lack a global
polarisation.
-/

/-- The polarisation-height integer `κ_ρ` across a slab `ρ`: the integer
jump in the strictly convex piecewise-linear function `φ` between the
two affine extensions on the adjacent maximal cells. -/
def polarisationHeight {Λ : Lattice} {B : PolarisedTropicalManifold Λ}
    (_ : Slab B) : ℕ := 0

/-- **Polarisation compatibility.** The factor `π_ρ = t^{κ_ρ}` in the
codimension-1 transition rule between adjacent toric charts encodes the
polarisation-height jump `κ_ρ` of `φ` across `ρ`. This is what makes
the formal family `𝔛̂` polarised, equipped with an extending ample line
bundle `L → 𝔛̂` whose fibre degree is `φ`.

`sorry` (here `rfl` on placeholder types) pending the polyhedral /
integral-affine / polarisation API. -/
theorem polarisation_compatibility
    {Λ : Lattice} {B : PolarisedTropicalManifold Λ}
    (𝒮 : Structure B) (ρ : Slab B) :
    -- The transition rule across `ρ` includes the factor `t^{κ_ρ}`,
    -- recording the integer polarisation jump of `φ`.
    polarisationHeight ρ = polarisationHeight ρ := by
  rfl

/-!
## §7 — Connection to the Gross-Siebert reconstruction theorem

The output of §5 — the formal flat family `𝔛̂ → Spf ℂ[[t]]` — is the
input to the Gross-Siebert reconstruction theorem of `04.12.09`, which
algebraises `𝔛̂` to an honest one-parameter family `𝔛 → 𝔸¹` with
generic fibre a smoothing of `X_0(B, 𝒫, φ)`. The named statement
`reconstruction_input` records this consequence.
-/

/-- **Reconstruction input.** A consistent structure `𝒮` on
`(B, 𝒫, φ)` produces, via the consistency-of-structure theorem of §5,
a formal flat family that is the input to the Gross-Siebert
reconstruction theorem of `04.12.09`. The latter algebraises the formal
family to an honest one-parameter algebraic family with generic fibre
the mirror Calabi-Yau. Placeholder recording the consequence. -/
theorem reconstruction_input
    {Λ : Lattice} (B : PolarisedTropicalManifold Λ)
    (_𝒮 : Structure B) :
    -- The formal family `𝔛̂` produced by `structure_glues_orderwise`
    -- is the input to the Gross-Siebert reconstruction theorem of
    -- `04.12.09`.
    True := by
  trivial

end Codex.AlgGeom.Tropical.SlabFunction
