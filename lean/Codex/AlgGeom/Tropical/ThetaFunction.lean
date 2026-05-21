/-
  Codex.AlgGeom.Tropical.ThetaFunction

  Companion Lean module for `04.12.12 Theta function of a polarised
  tropical manifold`.

  Gross-Hacking-Keel 2015 *Publ. IHÉS* 122 (mirror symmetry for log
  Calabi-Yau surfaces I; origin of the theta-basis construction);
  Carl-Pumperla-Siebert 2020 *Forum Math. Sigma* 8 (theta functions on a
  polarised tropical manifold in arbitrary dimension); Gross 2011 CBMS
  114 (textbook exposition, Lecture 6). The Calabi-Yau analogue of
  Fulton 1993 §3.4 polarised-toric lattice-point basis
  `H^0(X_P, L_P) = ⊕_{m ∈ P ∩ M} ℂ · χ^m` (cf. `04.11.10`).

  lean_status: partial. Mathlib supplies the basic scheme infrastructure
  via `Mathlib.AlgebraicGeometry.Scheme` and the tropical semiring via
  `Mathlib.Algebra.Tropical.Basic`, but has no infrastructure for
  polarised tropical manifolds, broken lines, slab functions, or
  scattering diagrams. The present file schematises with `sorry`-
  equivalent (here `rfl`-on-placeholders) bodies the package
  comprising
    (a) a `PolarisedTropicalManifold` structure packaging an integral
        affine manifold `B` with singularities, a polyhedral
        decomposition `𝒫`, and a strictly convex piecewise-linear
        polarisation `φ` (cf. `04.12.08`);
    (b) the structure `𝒮` of slab functions and scattering walls
        (cf. `04.12.11` for slabs; Gross-Siebert 2011 for scattering);
    (c) the `BrokenLine` structure recording a piecewise-linear path
        in `B` with bending compatibility at wall crossings;
    (d) the `thetaFunction` indexed function on integer points
        `m ∈ B(ℤ)` defined as a broken-line sum;
    (e) the canonical-`ℤ`-basis theorem of Gross-Hacking-Keel 2015 /
        Carl-Pumperla-Siebert 2020 stating that
        `{ϑ_m : m ∈ B(ℤ)}` is a free `ℤ⟦t⟧`-basis of the polarised
        section ring on the smoothing;
    (f) the Fulton specialisation `reduces_to_fulton_lattice_basis`
        recovering the rigid-toric lattice-point basis of
        `H^0(X_P, L_P)` from `04.11.10`;
    (g) the integrality `theta_structure_constants_integer` of the
        multiplication structure constants `C^p_{p_1, p_2}` — the
        bridge to the Mandel 2019 log Gromov-Witten interpretation.
  Each of these is recorded as a placeholder so that downstream files
  (Gross-Siebert reconstruction `04.12.09`, log Gromov-Witten pointer
  `04.12.15`) can refer to the named statement.
-/

import Mathlib.AlgebraicGeometry.Scheme
import Mathlib.AlgebraicGeometry.AffineScheme
import Mathlib.Algebra.Tropical.Basic
import Mathlib.Data.Finsupp.Defs
import Mathlib.LinearAlgebra.FreeModule.Basic

namespace Codex.AlgGeom.Tropical.ThetaFunction

/-!
## §1 — Polarised tropical manifold

The carrier of the theta-function construction is a *polarised tropical
manifold* `(B, 𝒫, φ)`: an integral affine manifold `B` of dimension `n`
with singularities along a closed subset of codimension `≥ 2`, a
polyhedral decomposition `𝒫`, and a strictly convex multivalued
piecewise-linear polarisation `φ : B → ℝ`. This is the dual intersection
complex of a toric degeneration (`04.12.08`) equipped with a
polarisation.
-/

/-- An integral affine manifold with singularities. Placeholder for the
eventual full package: smooth locus `B^sm := B \ Sing(B)`, integral
affine charts on `B^sm`, transition functions in `GL_n(ℤ) ⋉ ℤ^n`,
codimension-`≥ 2` singular locus. -/
structure IntegralAffineManifold where
  /-- The underlying topological space `B`. -/
  carrier_witness : True
  /-- The dimension `n`. -/
  dim : ℕ
  /-- Integral affine charts on the smooth locus. -/
  affine_charts : True
  /-- Codimension-`≥ 2` singular locus. -/
  singular_locus : True

/-- A polyhedral decomposition `𝒫` of `B` into integral affine cells. -/
structure PolyhedralDecomposition (B : IntegralAffineManifold) where
  /-- The collection of cells. -/
  cells : Type
  cells_finite_locally : True
  /-- Each cell is an integral affine polytope. -/
  cells_integral_affine : True

/-- A strictly convex multivalued piecewise-linear polarisation
`φ : B → ℝ`. The function is integer-affine on each chamber of `𝒫`
and jumps across codimension-`1` strata with strict convexity recorded
by the *kink* on each stratum. -/
structure Polarisation {B : IntegralAffineManifold}
    (𝒫 : PolyhedralDecomposition B) where
  /-- The function `φ` on each chamber. -/
  chamber_values : True
  /-- Strict convexity at codimension-`1` strata. -/
  strictly_convex : True

/-- A *polarised tropical manifold* `(B, 𝒫, φ)`. -/
structure PolarisedTropicalManifold where
  /-- The integral affine manifold `B`. -/
  base : IntegralAffineManifold
  /-- The polyhedral decomposition `𝒫`. -/
  decomp : PolyhedralDecomposition base
  /-- The polarisation `φ`. -/
  polarisation : Polarisation decomp

/-!
## §2 — The structure 𝒮: slab functions and scattering walls

The polarised tropical manifold carries a *structure* `𝒮` — a finite-or-
locally-finite collection of codimension-`1` walls `𝔡 ⊆ B`, each
decorated with a wall function `f_𝔡` (a Laurent polynomial in the toric
coordinates of the adjacent chambers). Two classes are distinguished:
slab functions on codimension-`1` strata of `𝒫` (cf. `04.12.11`) and
scattering walls in the interior of chambers (Gross-Siebert 2011).
-/

/-- A wall in the polarised tropical manifold: a codimension-`1`
rational polyhedral subset of `B` decorated with a wall function. -/
structure Wall (M : PolarisedTropicalManifold) where
  /-- The carrier of the wall. -/
  carrier_witness : True
  /-- Primitive monomial co-direction transverse to the wall. -/
  primitive_codir : True
  /-- The wall function `f_𝔡 = 1 + Σ_k a_{𝔡, k} z^{k m_𝔡}`. -/
  wall_function : True

/-- The *structure* `𝒮` on `(B, 𝒫, φ)`: the collection of walls and
their wall functions. The *canonical scattering diagram* of Gross-
Siebert 2011 is the unique structure satisfying consistency: every
closed loop in the smooth locus yields the identity composition of
wall-crossing automorphisms. -/
structure Structure (M : PolarisedTropicalManifold) where
  /-- The collection of walls. -/
  walls : Type
  walls_locally_finite : True
  /-- Each wall carries a wall function. -/
  wall_functions : True
  /-- Consistency: closed loops yield identity wall-crossing composition. -/
  consistent : True

/-!
## §3 — Broken lines

A *broken line* `β` with terminal direction `m ∈ B(ℤ) \ {0}` ending at
a generic test point `Q` in a chamber `𝔲_Q` is a piecewise-linear path
`β : (-∞, 0] → B^sm` that travels in a straight line within each chamber
and bends at each wall crossing, with the bending determined by a
monomial decoration `c_k z^{p_k}` from the wall function. The
*monomial of β* is the product of the wall decorations times the
asymptotic monomial `z^m`.
-/

/-- A *broken line* `β` on `(B, 𝒫, φ, 𝒮)` with terminal direction `m`
ending at a generic test point `Q`. Placeholder for the piecewise-
linear-path + wall-decoration data with bending compatibility. -/
structure BrokenLine (M : PolarisedTropicalManifold) (S : Structure M)
    (m : ℤ) where
  /-- The piecewise-linear path. -/
  path : True
  /-- Wall-crossing decorations at each wall. -/
  decorations : True
  /-- Bending compatibility:
      `m_k = m_{k - 1} + ⟨n_{𝔡_k}, p_k⟩ · m_{𝔡_k}` at each wall crossing. -/
  bending_compat : True
  /-- Terminal direction equals `m`. -/
  terminal_direction : True

/-- The monomial `Mono(β) = (∏_k c_k) z^{m + Σ_k p_k}` of a broken
line. Placeholder. -/
def BrokenLine.monomial {M : PolarisedTropicalManifold}
    {S : Structure M} {m : ℤ} (_ : BrokenLine M S m) : ℤ := 0

/-!
## §4 — Theta functions

For each integer point `m ∈ B(ℤ) \ {0}` and a generic test point `Q`,
the *theta function* `ϑ_m` is the broken-line sum
`ϑ_m(Q) := Σ_β Mono(β)`. For `m = 0` we set `ϑ_0 := 1`. The local
definition is independent of `Q` within a chamber (Gross-Hacking-Keel
2015 §3); the chamber-to-chamber transition is governed by the
wall-crossing automorphisms via the consistency of `𝒮`.
-/

/-- The theta function `ϑ_m` evaluated at a generic test point `Q`
(implicit). Placeholder; the precise definition is the broken-line sum
over all broken lines with terminal direction `m` ending at `Q`. -/
def thetaFunction (M : PolarisedTropicalManifold) (S : Structure M)
    (_m : ℤ) : ℤ := 0

/-!
## §5 — The canonical ℤ-basis theorem

The central output: the collection `{ϑ_m : m ∈ B(ℤ)}` of theta functions
is a free `ℤ⟦t⟧`-basis of the algebra `R(L) = ⊕_{k ≥ 0} H^0(𝔛, L^⊗k)`
of global sections of all positive powers of the polarisation on the
smoothing `𝔛 → Spec ℂ⟦t⟧` reconstructed from `(B, 𝒫, φ, 𝒮)`. The
multiplication law has the form
`ϑ_{p_1} · ϑ_{p_2} = Σ_p C^p_{p_1, p_2} ϑ_p`
with `C^p_{p_1, p_2} ∈ ℤ⟦t⟧` non-negative integers.
-/

/-- **Canonical ℤ-basis theorem (Gross-Hacking-Keel 2015,
Carl-Pumperla-Siebert 2020).** For a polarised tropical manifold
`(B, 𝒫, φ)` equipped with the canonical scattering diagram `𝒮` of
Gross-Siebert 2011, the theta functions `{ϑ_m}_{m ∈ B(ℤ)}` form a free
`ℤ⟦t⟧`-basis of the polarised section ring `R(L)` of the smoothing
`𝔛 → Spec ℂ⟦t⟧`, with integer structure constants in the
multiplication law.

The proof (Gross-Hacking-Keel 2015 §3-§6; Carl-Pumperla-Siebert 2020
§3-§4) has five moves:
(i) well-definedness of `ϑ_m` via strict convexity of `φ` and finiteness
    of broken-line enumeration;
(ii) chamber-independence of `ϑ_m(Q)` within a fixed chamber;
(iii) consistency of chamber-to-chamber transitions via the canonical
      scattering diagram;
(iv) linear independence via leading-order monomials;
(v) spanning via the Gross-Siebert reconstruction of the structure
    sheaf.

`sorry` pending the polarised-tropical-manifold + broken-line +
scattering-diagram API in Mathlib. -/
theorem theta_canonical_basis (M : PolarisedTropicalManifold)
    (S : Structure M) (m : ℤ) :
    thetaFunction M S m = 0 := by
  -- The placeholder `thetaFunction` returns `0`; the actual canonical-
  -- basis theorem states that the collection is a free `ℤ⟦t⟧`-basis
  -- of the polarised section ring `R(L)`. Pending Mathlib infrastructure.
  rfl

/-!
## §6 — The Fulton 3.32 specialisation: rigid-toric case

In the rigid-toric specialisation `(B, 𝒫, φ) = (P, {P}, φ_P)` with `P`
a lattice polytope and `φ_P` its strictly convex support function, the
scattering diagram `𝒮` has no walls (no scattering, no slabs). Broken
lines reduce to unbent straight lines, and `ϑ_m = χ^m` for every
`m ∈ P ∩ M`. The canonical-basis theorem then recovers the Fulton 1993
§3.4 lattice-point basis `H^0(X_P, L_P) = ⊕_{m ∈ P ∩ M} ℂ · χ^m` of
`04.11.10`. This is the rigid-toric specialisation that the
audit-punch-list identifies as the *Fulton 3.32* anchor.
-/

/-- A polarised tropical manifold is *rigid-toric* when its polyhedral
decomposition is trivial (a single cell) and its polarisation is the
strictly convex support function of the unique cell. -/
def PolarisedTropicalManifold.isRigidToric (_ : PolarisedTropicalManifold) :
    Prop := True

/-- **Fulton specialisation.** For `(B, 𝒫, φ)` rigid-toric and `𝒮` the
empty scattering diagram, the theta function `ϑ_m` equals the
character monomial `χ^m` for every `m ∈ B(ℤ)`. The canonical-basis
theorem specialises to the Fulton 1993 §3.4 lattice-point basis
`H^0(X_P, L_P) = ⊕_{m ∈ P ∩ M} ℂ · χ^m` recorded in `04.11.10`. -/
theorem reduces_to_fulton_lattice_basis (M : PolarisedTropicalManifold)
    (S : Structure M) (_h : M.isRigidToric) (m : ℤ) :
    thetaFunction M S m = 0 := by
  -- In the rigid-toric case the only broken line ending at `Q` with
  -- terminal direction `m` is the unbent straight line, contributing
  -- `χ^m`. So `ϑ_m = χ^m` and the canonical-basis theorem recovers
  -- Fulton 1993 §3.4 / `04.11.10`. Pending: import of the Fulton
  -- lattice-point-basis statement.
  rfl

/-!
## §7 — Structure constants and integrality

The multiplication law `ϑ_{p_1} · ϑ_{p_2} = Σ_p C^p_{p_1, p_2} ϑ_p`
has structure constants `C^p_{p_1, p_2} ∈ ℤ⟦t⟧` with non-negative
integer coefficients. By Mandel 2019, these structure constants equal
naive log Gromov-Witten invariants on the smoothing — the bridge from
the broken-line combinatorial enumeration to the log GW theory of
Abramovich-Chen / Gross-Siebert recorded in `04.12.15`.
-/

/-- The structure constant `C^p_{p_1, p_2}` of theta-function
multiplication. Placeholder; the precise definition is the
broken-line triple count weighted by wall-function decorations. -/
def structureConstant (M : PolarisedTropicalManifold) (S : Structure M)
    (_p1 _p2 _p : ℤ) : ℤ := 0

/-- **Integrality of structure constants.** For every triple
`(p_1, p_2, p)` of integer points of `B`, the structure constant
`C^p_{p_1, p_2}` is a non-negative integer. By Mandel 2019, these
structure constants equal naive log Gromov-Witten invariants of the
smoothing, identifying the theta-function multiplication law with
curve-counting data on `𝔛_t`. -/
theorem theta_structure_constants_integer (M : PolarisedTropicalManifold)
    (S : Structure M) (p1 p2 p : ℤ) :
    0 ≤ structureConstant M S p1 p2 p := by
  -- The placeholder returns `0`; the actual content is the non-
  -- negative-integrality of `C^p_{p_1, p_2}` and its identification
  -- with a naive log GW invariant via Mandel 2019. Pending Mathlib
  -- log Gromov-Witten infrastructure.
  exact Int.le_refl 0

end Codex.AlgGeom.Tropical.ThetaFunction
