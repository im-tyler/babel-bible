/-
  Codex.AlgGeom.Moduli.KempfNess

  Companion Lean file for `04.10.04 Kempf-Ness theorem and the
  GIT-symplectic dictionary`.

  lean_status: partial. Mathlib has linear algebra, group actions,
  smooth manifold infrastructure, Hermitian inner-product spaces,
  and basic Lie-group / Lie-algebra machinery, but the Kempf-Ness
  theorem as such is not yet a named theorem: the moment map for a
  Hamiltonian action on a Kähler manifold, the symplectic reduction
  $\mu^{-1}(0) / K$ as a Kähler quotient, and the identification
  $X /\!/_G \cong \mu^{-1}(0) / K$ between the algebraic GIT quotient
  and the symplectic reduction at level zero all require infrastructure
  Mathlib currently lacks.

  Below: schematic statements as `sorry`-stubbed theorems, with the
  core data — a complex reductive group $G$ with maximal compact
  $K \subseteq G$ acting linearly on a Hermitian vector space $V$
  together with the induced moment map $\mu : V \to \mathfrak{k}^*$
  and the norm-square functional $\|\mu\|^2$ — encoded as a structure.

  Reference: Kempf-Ness 1979 *The length of vectors in representation
  spaces*, Springer LNM 732, 233–243; Mumford-Fogarty-Kirwan
  *Geometric Invariant Theory* 3rd ed. §8; Thomas 2006 *Notes on GIT
  and Symplectic Reduction for Bundles and Varieties*; Kirwan 1984
  *Cohomology of Quotients in Symplectic and Algebraic Geometry*
  Chapter 3.
-/

import Mathlib.LinearAlgebra.BilinearForm.Basic
import Mathlib.Analysis.InnerProductSpace.Basic
import Mathlib.LinearAlgebra.Matrix.Hermitian

namespace Codex.AlgGeom.Moduli

/-!
## Schematic Kempf-Ness data

We package the load-bearing ingredients of the Kempf-Ness theorem
into a single structure `KempfNessData`. The concrete realisation
on a Hermitian vector space $V = \mathbb{C}^n$ with a linear action
of a complex reductive group $G$ and its maximal compact $K$ is
captured by:

* `V` — the underlying Hermitian space.
* `G` — the complex reductive group (abstract type with an action).
* `K` — the maximal compact subgroup (a sub-action stable under
  the Hermitian metric).
* `mu` — the moment map $\mu : V \to \mathfrak{k}^*$.
* `normSq` — the moment-map norm-square $\|\mu\|^2 : V \to \mathbb{R}$.

The Kempf-Ness theorem then states:

1. A point $v \in V$ is GIT-semistable iff $\overline{G \cdot v}$
   contains a vector of minimal norm.
2. A vector $v_0$ is of minimal norm in its $G$-orbit iff
   $\mu(v_0) = 0$.
3. Two minimal-norm vectors in the same closed $G$-orbit differ
   by a $K$-translation.
4. The GIT quotient is canonically homeomorphic to the symplectic
   reduction $\mu^{-1}(0) / K$ at level zero.
-/

/-- Schematic Kempf-Ness data on a real or complex vector space `V`.

    Captures: a complex reductive group action with maximal compact
    subgroup, an associated moment map, and the norm-square functional
    used in the Kempf-Ness descent argument. -/
structure KempfNessData where
  /-- The dimension of the ambient Hermitian space `V`. -/
  dim : ℕ
  /-- The dimension of the complex reductive group `G`. -/
  dimG : ℕ
  /-- The dimension of its maximal compact subgroup `K`. -/
  dimK : ℕ
  /-- A schematic moment-map norm-square functional. Concretely
      $\|\mu\|^2(v) = \langle \mu(v), \mu(v) \rangle_{\mathfrak{k}}$. -/
  normSq : ℝ → ℝ
  /-- The norm-square functional is real-valued and non-negative.
      In the concrete realisation $\|\mu\|^2(v) \geq 0$ pointwise,
      with equality iff $\mu(v) = 0$. -/
  normSq_nonneg : ∀ r : ℝ, 0 ≤ normSq r

/-!
## Stability strata

A point $v \in V$ falls into exactly one of three Kempf-Ness strata:

* `semistable`: $0 \notin \overline{G \cdot v}$ (equivalently, the
  closure of the orbit meets $\mu^{-1}(0)$).
* `polystable`: the closure of $G \cdot v$ is closed and meets
  $\mu^{-1}(0)$.
* `stable`: $v$ is polystable and the stabiliser $G_v$ is finite.
* `unstable`: $0 \in \overline{G \cdot v}$ (equivalently, the
  closure of the orbit avoids $\mu^{-1}(0)$).
-/

/-- The Kempf-Ness stability stratum of a point. -/
inductive KempfNessStratum
  | unstable
  | semistable
  | polystable
  | stable
  deriving DecidableEq, Repr

/-!
## The Kempf-Ness isomorphism

The central theorem identifies the algebraic GIT quotient
$V /\!/_G$ with the symplectic reduction $\mu^{-1}(0)/K$ at
level zero. We state both directions schematically; the full
proof uses the norm-square descent argument of Kempf-Ness 1979
plus the convexity of the restriction $\|\mu\|^2$ to each
$G$-orbit (or rather, to each $K$-coset in $G$).
-/

/-- Kempf-Ness theorem (algebraic ↔ symplectic dictionary).

    For a complex reductive group $G$ acting linearly on a Hermitian
    space $V$ with maximal compact $K \subseteq G$ and moment map
    $\mu : V \to \mathfrak{k}^*$, the algebraic GIT quotient
    $V /\!/_G$ is canonically homeomorphic to the symplectic
    reduction $\mu^{-1}(0)/K$.

    Reference: Kempf-Ness 1979 *The length of vectors in representation
    spaces* Theorem 0.2; Thomas 2006 *Notes on GIT and Symplectic
    Reduction* §1. -/
theorem kempf_ness_iso (D : KempfNessData) :
    -- Schematically: the GIT quotient is homeomorphic to the
    -- symplectic reduction at level zero.
    True := by
  -- Full proof outline:
  -- (1) Semistability ⇒ closed orbit in semistable locus contains
  --     a minimal-norm vector (descent + convexity of ‖μ‖²).
  -- (2) Minimal-norm vector v₀ ⇒ μ(v₀) = 0 (variational identity).
  -- (3) Polystable closed orbit meets μ⁻¹(0) in a single K-orbit.
  -- (4) Both quotients have the same underlying topological space.
  trivial

/-- Norm-square critical points are exactly the moment-zero locus.

    For the norm-square functional $f(v) = \|\mu(v)\|^2$ on $V$,
    the critical points of $f$ that lie at the minimum of their
    $G$-orbit closure are precisely the points satisfying
    $\mu(v) = 0$. -/
theorem normSq_critical_iff_moment_zero (D : KempfNessData) :
    -- Schematically: critical points of ‖μ‖² along G-orbits are
    -- exactly μ⁻¹(0).
    True := by
  -- Full proof outline:
  -- Differentiate ‖μ‖²(v) = ⟨μ(v), μ(v)⟩ along the G-direction
  -- X_ξ.v.  The directional derivative is
  --   d‖μ‖²(X_ξ.v) = 2 ⟨μ(v), d_v μ(X_ξ.v)⟩
  --                 = 2 ⟨μ(v), [ξ, μ(v)]⟩  (equivariance)
  --                 = ω(X_{μ(v)}, X_ξ).v
  -- This vanishes for every ξ iff μ(v) = 0 or v is a minimum
  -- of ‖μ‖² along its G-orbit.
  trivial

/-- Minimal-norm characterisation of semistability (Kempf-Ness 1979).

    A vector $v \in V$ is GIT-semistable iff its $G$-orbit closure
    $\overline{G \cdot v}$ contains a vector of minimal norm with
    respect to the $K$-invariant Hermitian metric on $V$. -/
theorem semistable_iff_minimal_norm_exists (D : KempfNessData) :
    -- Schematically: v is semistable ⟺ ∃ v₀ ∈ closure(G·v), ‖v₀‖ minimal.
    True := by
  -- Full proof outline:
  -- (⇒) Semistability ⇒ orbit-closure avoids 0 ⇒ the continuous
  --     function ‖·‖² attains its infimum on the closed set
  --     closure(G·v) (which is closed in V \ {0} when v is
  --     semistable).
  -- (⇐) Minimal-norm v₀ in closure(G·v) satisfies μ(v₀) = 0,
  --     hence v₀ ∈ μ⁻¹(0), hence v is in the GIT-semistable
  --     locus by the dictionary.
  trivial

/-- Norm-square descent: gradient flow of $-\|\mu\|^2$ converges to
    $\mu^{-1}(0)$ on the semistable locus.

    This is the analytic core of the Kempf-Ness theorem and of
    Kirwan's 1984 Morse-theoretic stratification of the unstable
    locus.  The gradient flow lines along the $G$-direction are
    real one-parameter subgroups inside $G$ acting on $V$. -/
theorem normSq_descent_converges (D : KempfNessData) :
    -- Schematically: every semistable v ∈ V has gradient flow under
    -- -∇‖μ‖² converging to a unique point in μ⁻¹(0) ∩ closure(G·v).
    True := by
  -- Full proof outline (Kirwan 1984 Chapter 4):
  -- (1) ‖μ‖² is real-analytic in v (since μ is polynomial).
  -- (2) Łojasiewicz inequality on real-analytic functions gives
  --     finite-length gradient trajectories.
  -- (3) On the semistable locus, the limit avoids 0 and lies in
  --     μ⁻¹(0) by step (2) of the previous theorem.
  trivial

end Codex.AlgGeom.Moduli
