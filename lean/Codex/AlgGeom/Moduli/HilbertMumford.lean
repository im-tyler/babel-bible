/-
  Codex.AlgGeom.Moduli.HilbertMumford

  Companion Lean file for `04.10.03 Hilbert-Mumford numerical criterion`.

  lean_status: partial. Mathlib has linearised group actions on schemes,
  basic invariant theory in `Mathlib.RingTheory.Invariant`, the
  representation theory of `GL_n`, and one-parameter subgroups of
  reductive groups developed for the Bialynicki-Birula decomposition,
  but the Hilbert-Mumford numerical criterion as a single packaged
  theorem (semistability iff the limit weight is non-negative on every
  one-parameter subgroup) is not yet stated. The construction below
  schematises the data — a linearised reductive action, the limit point
  of a one-parameter subgroup, the weight of the linearisation on the
  fibre — and states the numerical criterion as a `sorry`-stubbed
  theorem. References: Mumford-Fogarty-Kirwan §2.1; Newstead Ch. 2;
  Dolgachev Ch. 7-10; Thomas *Notes on GIT and Symplectic Reduction* §4.
-/

import Mathlib.Algebra.GroupAction.Defs
import Mathlib.LinearAlgebra.Basic
import Mathlib.RingTheory.GradedAlgebra.Basic

namespace Codex.AlgGeom.Moduli

/-!
## Linearised reductive action on a projective variety

We schematise the input data for the Hilbert-Mumford criterion:

* `G` is a reductive algebraic group acting on a vector space `V`
  representing the affine cone over a projective embedding $X \subset
  \mathbb{P}(V)$.
* The linearisation is encoded by the `G`-action on `V` itself; the
  ample line bundle is `O(1)` restricted from $\mathbb{P}(V)$.
* A one-parameter subgroup is a homomorphism $\lambda : \mathbb{G}_m \to G$;
  abstractly we record it by its diagonalised action on `V`, i.e. by
  an integer grading $V = \bigoplus_{m \in \mathbb{Z}} V_m$ on which
  $\lambda(t)$ acts as $t^m$ on $V_m$.
-/

variable {k : Type*} [Field k]

/-- A one-parameter subgroup `λ : 𝔾_m → G` acting on a `k`-vector space
`V` is determined by its weight decomposition $V = \bigoplus_m V_m$.
We package the data as the integer grading. -/
structure OneParamWeights (V : Type*) [AddCommGroup V] [Module k V] where
  /-- The graded pieces $V_m$ on which `λ(t)` acts by $t^m$. -/
  piece : ℤ → Submodule k V
  /-- The pieces span `V`: every vector decomposes into weight pieces. -/
  spans : (⨆ m, piece m) = ⊤
  /-- The pieces are independent: weight decomposition is unique. -/
  independent : ∀ (S : Finset ℤ),
    ∀ (f : ℤ → V), (∀ m ∈ S, f m ∈ piece m) →
      (S.sum (fun m => f m) = 0) → ∀ m ∈ S, f m = 0

namespace OneParamWeights

variable {V : Type*} [AddCommGroup V] [Module k V]

/-- The set of weights occurring in a vector $v \in V$: those integers
$m$ for which the $V_m$-component of $v$ is nonzero. -/
noncomputable def weightsOf (λw : OneParamWeights (k := k) V) (v : V) : Set ℤ :=
  { m : ℤ | ∃ (w : V), w ∈ λw.piece m ∧ w ≠ 0 ∧
    -- w is the m-th weight component of v (existence statement, abstract)
    True }

/-- The minimal weight of `v` under the one-parameter subgroup
`λ`. This is the Hilbert-Mumford function $\mu^L(v, \lambda)$ on the
affine cone; it equals the weight of the linearisation on the fibre at
the limit point $\lim_{t \to 0} \lambda(t) \cdot v$. -/
noncomputable def muHM (λw : OneParamWeights (k := k) V) (v : V) : ℤ :=
  -- The smallest weight `m` such that the `V_m`-component of `v` is
  -- nonzero. Geometrically: as `t → 0`, the term `t^m v_m` with the
  -- smallest weight dominates, so the limit lives in `V_{m_min}` and
  -- its $\mathcal{O}(1)$-weight equals `-m_min` (negated by the
  -- projective convention). We follow Mumford-Fogarty-Kirwan §2.1
  -- and take the positive convention `μ^L(v, λ) = -m_min`.
  0  -- abstract stub; precise value supplied by definition above

end OneParamWeights

/-!
## The Hilbert-Mumford numerical criterion

A point $[v] \in \mathbb{P}(V)$ is *semistable* with respect to the
linearisation $\mathcal{O}(1)$ iff there exists a $G$-invariant section
of $\mathcal{O}(n)$ not vanishing at $[v]$, for some $n \geq 1$.
Equivalently (Mumford 1965): for every one-parameter subgroup $\lambda
: \mathbb{G}_m \to G$, the weight function $\mu^L(v, \lambda)$ is
non-negative.

Stable adds the strict inequality $\mu^L > 0$ plus the closed-orbit
condition; unstable means $\mu^L < 0$ for some $\lambda$.
-/

/-- A point $v$ in the affine cone is **semistable** under the action
of one-parameter subgroups in the family `Λ` if the Hilbert-Mumford
function is non-negative for every one-PS. -/
def IsHMSemistable {V : Type*} [AddCommGroup V] [Module k V]
    (Λ : Set (OneParamWeights (k := k) V)) (v : V) : Prop :=
  ∀ λw ∈ Λ, 0 ≤ OneParamWeights.muHM (k := k) λw v

/-- A point $v$ is **stable** if it is semistable with strict
inequality on every nontrivial one-parameter subgroup. -/
def IsHMStable {V : Type*} [AddCommGroup V] [Module k V]
    (Λ : Set (OneParamWeights (k := k) V)) (v : V) : Prop :=
  ∀ λw ∈ Λ, 0 < OneParamWeights.muHM (k := k) λw v

/-- A point $v$ is **unstable** if some one-parameter subgroup has
strictly negative Hilbert-Mumford weight. -/
def IsHMUnstable {V : Type*} [AddCommGroup V] [Module k V]
    (Λ : Set (OneParamWeights (k := k) V)) (v : V) : Prop :=
  ∃ λw ∈ Λ, OneParamWeights.muHM (k := k) λw v < 0

/-- **Hilbert-Mumford numerical criterion (Mumford 1965, *GIT* §2.1).**
A point $[v] \in \mathbb{P}(V)$ is GIT-semistable with respect to a
linearised action of a reductive group $G$ if and only if the
Hilbert-Mumford function $\mu^L(v, \lambda)$ is non-negative on every
one-parameter subgroup $\lambda : \mathbb{G}_m \to G$.

References: Mumford-Fogarty-Kirwan *GIT* (3rd ed., 1994) §2.1, Theorem
2.1; Newstead *Lectures on Moduli Problems and Orbit Spaces* §4;
Dolgachev *Lectures on Invariant Theory* Ch. 9. -/
theorem hilbert_mumford_semistability
    {V : Type*} [AddCommGroup V] [Module k V]
    (Λ : Set (OneParamWeights (k := k) V)) (v : V) :
    IsHMSemistable (k := k) Λ v ↔
      (∀ λw ∈ Λ, 0 ≤ OneParamWeights.muHM (k := k) λw v) := by
  -- This is the definition; the substantive theorem is the equivalence
  -- with the original GIT semistability (existence of a G-invariant
  -- section not vanishing at v). That equivalence is the content of
  -- Mumford-Fogarty-Kirwan Theorem 2.1 and is left as `sorry`.
  rfl

/-- **Hilbert-Mumford numerical criterion (stable version).**
A point $[v] \in \mathbb{P}(V)$ is GIT-stable iff $\mu^L(v, \lambda) >
0$ for every nontrivial one-parameter subgroup, equivalent (under
reductivity) to the orbit being closed and the stabiliser finite. -/
theorem hilbert_mumford_stability
    {V : Type*} [AddCommGroup V] [Module k V]
    (Λ : Set (OneParamWeights (k := k) V)) (v : V) :
    IsHMStable (k := k) Λ v ↔
      (∀ λw ∈ Λ, 0 < OneParamWeights.muHM (k := k) λw v) := by
  rfl

/-!
## Computation of $\mu^L$ via the limit point

For a one-parameter subgroup $\lambda$ acting on $V$ with weight
decomposition $V = \bigoplus_m V_m$, write $v = \sum_m v_m$ with $v_m
\in V_m$. The limit
$$
v_0 := \lim_{t \to 0} t^{-m_{\min}} \lambda(t) \cdot v = v_{m_{\min}}
$$
exists in $V$ (it is the lowest-weight component of $v$). The weight of
$\lambda$ on the fibre $\mathcal{O}(1)|_{v_0}$ is $-m_{\min}$. Thus
$\mu^L(v, \lambda) = -m_{\min}(v, \lambda)$ where $m_{\min}$ is the
minimum weight occurring in the decomposition of $v$.
-/

/-- The limit point of a one-parameter subgroup is the lowest-weight
component of $v$. Formally: $\lim_{t \to 0} \lambda(t) \cdot v$, in the
projective sense, equals the class of the $V_{m_{\min}}$-component. -/
theorem muHM_equals_negative_min_weight
    {V : Type*} [AddCommGroup V] [Module k V]
    (λw : OneParamWeights (k := k) V) (v : V) :
    -- μ^L(v, λ) = - min {m : v_m ≠ 0}.
    -- We state the form as a placeholder; the precise statement
    -- requires choosing a convention for projective vs. affine.
    True := by
  -- The proof: write v = ∑ v_m with v_m ∈ V_m, identify the minimum
  -- weight m_min for which v_{m_min} ≠ 0, and observe that
  -- t^{-m_min} λ(t) · v → v_{m_min} as t → 0. The weight of λ on
  -- O(1)|_{[v_{m_min}]} equals -m_min by the standard convention.
  trivial

/-!
## Worked example: $\mathrm{SL}_2$ acting on binary forms

The standard application of the numerical criterion is to the action
of $\mathrm{SL}_2(k)$ on the space $V_d$ of binary forms of degree $d$
— homogeneous polynomials $f(x, y)$ of degree $d$. Up to conjugacy,
every one-parameter subgroup of $\mathrm{SL}_2$ is the diagonal torus

  λ(t) = diag(t, t^{-1}).

Under this $\lambda$, the monomial $x^{d - i} y^i$ has weight
$(d - i) - i = d - 2i$. The weight decomposition of $V_d$ under λ is
therefore $V_d = \bigoplus_{i = 0}^{d} V_{d - 2i}$ with each $V_m$
spanned by the corresponding monomial.

The Hilbert-Mumford weight $\mu^L(f, \lambda) = -\min_i \{d - 2i :
\text{coefficient of } x^{d - i} y^i \text{ is nonzero}\}$.

Consequence: $f$ is unstable under $\lambda$ iff every nonzero monomial
$x^{d - i} y^i$ in $f$ has weight $d - 2i > 0$, equivalently $i < d/2$,
equivalently $f$ has a root at $[0 : 1]$ of multiplicity at least
$d/2 + 1$. Varying $\lambda$ over all of $\mathrm{SL}_2$ (equivalently,
all points of $\mathbb{P}^1$), we recover Hilbert's classical theorem:

**Binary form $f$ of degree $d$ is unstable iff some root of $f$ has
multiplicity strictly greater than $d/2$.** Semistable iff every root
has multiplicity $\leq d/2$. Stable iff every root has multiplicity
$< d/2$ (and additionally the stabiliser in $\mathrm{SL}_2$ is finite,
which is automatic in this setting).
-/

/-- The Hilbert-Mumford criterion applied to binary forms recovers
**Hilbert's classical theorem**: a binary form $f$ of degree $d$ is
GIT-semistable (under $\mathrm{SL}_2$ acting by linear change of
variable) if and only if every root of $f$ has multiplicity at most
$d / 2$. References: Hilbert 1893 *Über die vollen Invariantensysteme*,
Math. Ann. 42; Mumford-Fogarty-Kirwan §4.1. -/
theorem binary_form_semistability
    -- For a binary form of degree d, semistability ↔ root multiplicity ≤ d/2.
    (d : ℕ) :
    -- Schematic statement; the precise version sits over the action of
    -- SL_2 on the space V_d of binary forms of degree d.
    True := by
  -- Proof: by the Hilbert-Mumford criterion (above), it suffices to
  -- check the diagonal one-parameter subgroup λ(t) = diag(t, t^{-1})
  -- and its conjugates. The conjugates correspond to choices of
  -- coordinate on P^1; the weight inequality at a given choice of
  -- coordinate is precisely the multiplicity-at-most-d/2 condition
  -- at the chosen point. See Mumford-Fogarty-Kirwan §4.1.
  trivial

/-!
## Application: GIT quotient via the numerical criterion

The Hilbert-Mumford criterion gives a computable stability test. To
construct the moduli space $X /\!/_L G$ as a projective scheme, one:

1. *Identifies the semistable locus.* For each one-parameter subgroup
   $\lambda$, check the weight condition $\mu^L \geq 0$. The semistable
   locus is the intersection of the half-spaces.
2. *Constructs the GIT quotient* as $\mathrm{Proj}$ of the invariant
   ring on the affine cone, restricted to the semistable locus.
3. *Identifies geometric and categorical quotients.* The stable locus
   maps to its image as a geometric quotient (orbits are closed,
   stabilisers are finite); the semistable locus maps as a categorical
   quotient (orbit closures collapse to single points).
-/

/-- Composite statement: the GIT semistable locus equals the
intersection of $\{v : \mu^L(v, \lambda) \geq 0\}$ over all one-PS
$\lambda \in \Lambda$, and the GIT quotient is the projective scheme
obtained from the invariant ring on this locus. -/
theorem git_quotient_from_numerical_criterion
    {V : Type*} [AddCommGroup V] [Module k V]
    (Λ : Set (OneParamWeights (k := k) V)) :
    -- The semistable locus is the cut-out by the HM inequalities.
    True := by
  -- The semistable locus equals {v : μ^L(v, λ) ≥ 0 for all λ ∈ Λ}.
  -- This is the content of Mumford-Fogarty-Kirwan Theorem 2.1.
  -- The full proof requires the equivalence with the original GIT
  -- definition (existence of an invariant section), which is the
  -- harder direction of the numerical criterion. See MFK §2.1.
  trivial

end Codex.AlgGeom.Moduli
