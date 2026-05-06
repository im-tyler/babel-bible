/-
  Codex.SpinGeometry.CalibratedGeometries

  Calibrated geometries — Special Lagrangian, associative, coassociative, Cayley.
  Companion to the Master-tier unit `03.09.19 Calibrated geometries`.
  lean_status: partial — statements compile via stub types, with the
  fundamental theorem and the four named calibrations recorded as axioms
  pending Mathlib's comass functional, special-holonomy structures, and
  parallel-spinor formalism.
-/

import Mathlib.Geometry.Manifold.SmoothManifoldWithCorners
import Mathlib.LinearAlgebra.ExteriorAlgebra.Basic

namespace Codex.SpinGeometry.CalibratedGeometries

/-- A calibration of degree `p` on a Riemannian manifold `M`: a closed
    differential `p`-form whose comass is bounded by 1 globally.

    The fields `form`, `closed`, `comass_le_one` are placeholders; the actual
    structure requires Mathlib's differential-form library together with a
    comass functional on Hermitian inner-product spaces, neither yet present
    in a Riemannian-bundle setting. -/
structure Calibration (M : Type*) (p : ℕ) where
  /-- The closed differential `p`-form on `M`. -/
  form : Unit
  /-- Closed condition: $d\varphi = 0$. -/
  closed : Unit
  /-- Comass bound: $\|\varphi\|^\ast \leq 1$ at every point. -/
  comass_le_one : Unit

/-- A calibrated submanifold: a `p`-submanifold whose oriented unit tangent
    `p`-vector pairs with the calibration form to give 1 at every point of
    the submanifold. -/
structure CalibratedSubmanifold {M : Type*} {p : ℕ} (φ : Calibration M p) where
  /-- The submanifold $N \subset M$. -/
  N : Unit
  /-- Tangent-in-contact-set condition: $\varphi(\vec N_x) = 1$ for all $x \in N$. -/
  tangent_in_contact_set : Unit

/-! ### TODOs pending Mathlib coverage

The fundamental theorem and the four named calibrations are stated as axioms.
Each is a concrete Mathlib contribution target.
-/

/-- Fundamental theorem of calibrations (Harvey-Lawson 1982): a compact
    oriented submanifold calibrated by a calibration form minimises volume
    in its relative homology class.

    NOT YET IN MATHLIB. Requires (a) the comass functional on differential
    forms, (b) integration of forms over oriented submanifolds, (c) Stokes's
    theorem for compact manifolds with boundary, (d) the relative homology
    framework on the ambient manifold. -/
axiom fundamental_theorem_of_calibrations
    {M : Type*} {p : ℕ} (φ : Calibration M p)
    (N : CalibratedSubmanifold φ) : True

/-- Special Lagrangian calibration on a Calabi-Yau $n$-fold: $\mathrm{Re}\,\Omega$
    is a calibration of degree $n$, with contact set $\mathrm{SU}(n)/\mathrm{SO}(n)$.

    NOT YET IN MATHLIB. Requires (a) Calabi-Yau structures (Ricci-flat Kähler
    with parallel holomorphic volume form), (b) the Wirtinger inequality
    refined to the SL setting, (c) $\mathrm{SU}(n)$ as a Lie subgroup of
    $\mathrm{Spin}(2n)$. -/
axiom special_lagrangian_calibration : True

/-- Associative calibration on a $G_2$ 7-fold: the parallel $G_2$ three-form
    $\phi$ is a calibration of degree 3, with contact set
    $G_2/\mathrm{SO}(4)$.

    NOT YET IN MATHLIB. Requires the $G_2$ holonomy structure and the
    parallel three-form, both absent. -/
axiom associative_calibration : True

/-- Coassociative calibration on a $G_2$ 7-fold: the dual form $\ast\phi$
    is a calibration of degree 4, with contact set $G_2/\mathrm{SO}(4)$
    (orthogonal complements of associative 3-planes).

    NOT YET IN MATHLIB. -/
axiom coassociative_calibration : True

/-- Cayley calibration on a Spin(7) 8-fold: the parallel Cayley four-form
    $\Phi$ is a calibration of degree 4, with contact set
    $\mathrm{Spin}(7)/(\mathrm{Sp}(1)^3 / (\mathbb{Z}/2))$.

    NOT YET IN MATHLIB. Requires the Spin(7) holonomy structure and the
    parallel four-form. -/
axiom cayley_calibration : True

/-- McLean's deformation theorem: the moduli space of calibrated submanifolds
    in a fixed homology class is a smooth, finite-dimensional manifold
    near each unobstructed calibrated submanifold.

    NOT YET IN MATHLIB. Requires the moduli theory of submanifolds plus
    elliptic-operator index theory on normal bundles. -/
axiom mclean_deformation_theorem
    {M : Type*} {p : ℕ} (φ : Calibration M p) : True

end Codex.SpinGeometry.CalibratedGeometries
