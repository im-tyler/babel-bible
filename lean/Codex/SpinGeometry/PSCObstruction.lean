/-
  Codex.SpinGeometry.PSCObstruction

  Positive scalar curvature obstruction theory. Companion to the Master-tier
  unit `03.09.16 Positive scalar curvature obstruction theory`.
  lean_status: partial — statements compile via stub types, with the
  Lichnerowicz vanishing theorem, the α-invariant obstruction, and the
  Gromov-Lawson surgery and enlargeable manifold theorems recorded as
  axioms pending Mathlib's Riemannian-spin-Dirac, KO-theory, and surgery
  infrastructure.
-/

import Mathlib.LinearAlgebra.CliffordAlgebra.Basic

namespace Codex.SpinGeometry.PSCObstruction

/-- A closed Riemannian spin manifold: data of a manifold, a Riemannian
    metric, a spin structure, and the scalar-curvature function.

    The fields are placeholders; the actual structure requires Mathlib's
    `RiemannianManifold`, `SpinStructure`, and `scalarCurvature` APIs,
    none yet present in the form needed for the Bochner-Weitzenböck identity. -/
structure SpinManifold (M : Type*) where
  /-- Underlying fibre type at a point. -/
  fibre : Type*
  /-- Riemannian metric data. -/
  riemann : Unit
  /-- Spin structure on $M$. -/
  spin : Unit
  /-- Scalar-curvature function $\mathrm{Scal}_g \in C^\infty(M)$. -/
  scalarCurv : Unit

/-- The α-invariant $\alpha(M) \in KO_n$ of a closed spin manifold $M$ —
    the Cl_n-linear Clifford-index of the spin Dirac operator. Cf. unit
    `03.09.15`. Per notation decision #24, the symbol is $\alpha(M)$. -/
def alphaInvariant {M : Type*} (E : SpinManifold M) : Unit := ()

/-- An enlargeable manifold (Gromov-Lawson 1983 §IV): admits arbitrarily
    small Lipschitz contraction maps to $S^n$ from finite covers. -/
def Enlargeable (M : Type*) : Prop := True

/-! ### TODOs pending Mathlib coverage

The Lichnerowicz vanishing, Hitchin α-invariant obstruction, Gromov-Lawson
surgery, and Gromov-Lawson enlargeable theorems are stated as axioms.
Each is a concrete Mathlib contribution target.
-/

/-- Lichnerowicz vanishing (Lichnerowicz 1963): on a closed Riemannian
    spin manifold of strictly positive scalar curvature, the spin Dirac
    operator has trivial kernel.

    NOT YET IN MATHLIB. Requires (a) the Bochner-Weitzenböck identity on
    the spinor bundle, axiomatised in `DiracBundle.lean`, (b) the spin
    Dirac operator as a Fredholm self-adjoint operator, (c) the integration-
    by-parts identity for the connection Laplacian. -/
axiom lichnerowicz_vanishing
    {M : Type*} (E : SpinManifold M) : True

/-- Hitchin's α-invariant obstruction (Hitchin 1974): on a closed spin
    manifold admitting a positive-scalar-curvature metric, the α-invariant
    in $KO_n$ vanishes.

    NOT YET IN MATHLIB. Requires (a) the Cl_n-linear refinement of
    Lichnerowicz, axiomatised in `ClkDirac.lean`, (b) KO-theory and the
    ABS isomorphism. -/
axiom hitchin_alpha_obstruction
    {M : Type*} (E : SpinManifold M) : True

/-- Gromov-Lawson surgery theorem (Gromov-Lawson 1980 Theorem 1.1):
    positive scalar curvature is preserved under codimension-$\geq 3$
    surgery.

    NOT YET IN MATHLIB. Requires (a) the surgery construction on smooth
    manifolds, (b) the warped-product psc metric construction. -/
axiom gromov_lawson_surgery
    {M : Type*} (E : SpinManifold M) : True

/-- Gromov-Lawson enlargeable manifold theorem (Gromov-Lawson 1983 §V):
    every closed enlargeable spin manifold admits no metric of positive
    scalar curvature.

    NOT YET IN MATHLIB. Requires (a) twisted Dirac operators on twist bundles
    pulled back from spheres, (b) the Lichnerowicz argument with a curvature
    contribution from the twist, (c) the enlargeable manifold class. -/
axiom gromov_lawson_enlargeable
    {M : Type*} (E : SpinManifold M) (h : Enlargeable M) : True

/-- Stolz classification theorem (Stolz 1992 Theorem A): for a closed
    simply-connected spin manifold of dimension $\geq 5$, $\alpha(M) = 0$
    is equivalent to the existence of a positive-scalar-curvature metric.

    NOT YET IN MATHLIB. Requires (a) spin-cobordism rings, (b) the surgery
    theorem above, (c) the α-invariant ring homomorphism. -/
axiom stolz_classification
    {M : Type*} (E : SpinManifold M) : True

end Codex.SpinGeometry.PSCObstruction
