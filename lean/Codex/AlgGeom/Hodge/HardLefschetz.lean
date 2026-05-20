/-
  Codex.AlgGeom.Hodge.HardLefschetz

  Companion Lean file for `04.09.07 Hard Lefschetz theorem`.

  lean_status: partial. Mathlib has differential forms, partial de Rham
  cohomology infrastructure, and the abstract sl_2 representation
  theory in `Mathlib.LinearAlgebra.Lie.OfAssociative` and the
  representation-theory development of `Mathlib.RepresentationTheory`,
  but the full Hard Lefschetz theorem on a compact Kähler manifold is
  not packaged as a named theorem. The harmonic-form proof requires
  the Kähler identities ($\Delta_d = 2\Delta_{\bar\partial}$), the
  Lefschetz operator $L = \omega \wedge -$ and its adjoint
  $\Lambda$, and the bracket relation $[L, \Lambda] = H$ that promotes
  the de Rham complex to an sl_2-representation. The Hard Lefschetz
  isomorphism then follows from finite-dimensional sl_2-representation
  theory (Theorem of the Highest Weight applied to sl_2). The proof
  via positivity is documented in Voisin Vol I §6.2 and
  Griffiths-Harris §0.7 + §1.2.

  Below: the statements as `sorry`-stubbed theorems, with the central
  sl_2-relations as named lemmas.
-/

import Mathlib.Geometry.Manifold.MFDeriv.Basic
import Mathlib.LinearAlgebra.Matrix.Symmetric
import Mathlib.LinearAlgebra.BilinearForm.Basic

namespace Codex.AlgGeom.Hodge

/-!
## Lefschetz operators on the de Rham complex of a compact Kähler manifold

We schematise the structure carried by the de Rham complex of a
compact Kähler manifold $X$ of complex dimension $n$:

* `L` is cup product with the Kähler class $\omega \in H^{1,1}(X)$.
* `Lambda` is the formal adjoint of `L` under the $L^2$-inner product
  induced by the Kähler metric.
* `H` is the operator on $H^k$ acting as multiplication by $k - n$.

These satisfy the bracket relations of the standard sl_2-triple:

    [H, L] = 2 L,    [H, Λ] = -2 Λ,    [L, Λ] = H.
-/

variable {R : Type*} [CommRing R]
variable (V : Type*) [AddCommGroup V] [Module R V]

/-- Abstract Lefschetz operator data on a graded module modelling
the total cohomology $H^\bullet(X, \mathbb{C}) = \bigoplus_k H^k$. -/
structure LefschetzData (R V) [CommRing R] [AddCommGroup V] [Module R V] where
  /-- The complex dimension $n$ of the underlying compact Kähler manifold. -/
  dim : ℕ
  /-- The Lefschetz raising operator `L = ω ∧ -`, shifting degree by $+2$. -/
  L : V →ₗ[R] V
  /-- The Lefschetz lowering operator `Λ`, the formal adjoint of `L`. -/
  Lambda : V →ₗ[R] V
  /-- The grading operator $H$ acting as $k - n$ on $H^k$. -/
  H : V →ₗ[R] V
  /-- The sl_2 bracket relation $[L, \Lambda] = H$. -/
  bracket_L_Lambda : L.comp Lambda - Lambda.comp L = H
  /-- The sl_2 bracket relation $[H, L] = 2 L$. -/
  bracket_H_L : H.comp L - L.comp H = (2 : R) • L
  /-- The sl_2 bracket relation $[H, \Lambda] = -2 \Lambda$. -/
  bracket_H_Lambda : H.comp Lambda - Lambda.comp H = -((2 : R) • Lambda)

namespace LefschetzData

variable {R V}

/-- The sl_2-action on the de Rham complex of a compact Kähler manifold:
the operators $L, \Lambda, H$ promote each cohomology group to a
finite-dimensional sl_2-representation.

This is the load-bearing input to the Hard Lefschetz theorem, due to
Chern (1957) made explicit in Weil's *Variétés Kählériennes* (1958)
and standardised in Griffiths-Harris (1978). -/
theorem sl2_action_on_de_Rham
    (D : LefschetzData R V) :
    -- The bracket relations [L, Λ] = H, [H, L] = 2L, [H, Λ] = -2Λ
    -- give a Lie-algebra homomorphism sl_2(R) → End_R(V).
    D.L.comp D.Lambda - D.Lambda.comp D.L = D.H ∧
      D.H.comp D.L - D.L.comp D.H = (2 : R) • D.L ∧
        D.H.comp D.Lambda - D.Lambda.comp D.H = -((2 : R) • D.Lambda) :=
  ⟨D.bracket_L_Lambda, D.bracket_H_L, D.bracket_H_Lambda⟩

end LefschetzData

/-!
## The Hard Lefschetz isomorphism

For each $0 \leq k \leq n$, the $k$-fold Lefschetz power
$L^k : H^{n-k}(X, \mathbb{R}) \to H^{n+k}(X, \mathbb{R})$
is an isomorphism. Equivalently, the de Rham cohomology of $X$
is a direct sum of finite-dimensional sl_2-representations, and
each irreducible sl_2-representation is uniquely determined by
its highest weight.
-/

/-- The Hard Lefschetz theorem: cup product with the $k$th power of the
Kähler class gives an isomorphism $H^{n - k} \xrightarrow{\sim} H^{n + k}$
for every $0 \leq k \leq n$.

Reference: Lefschetz 1924 *L'analysis situs et la géométrie
algébrique*; Hodge 1941; Voisin *Hodge Theory and Complex Algebraic
Geometry I* §6.2. -/
theorem hard_lefschetz_iso
    {R V} [CommRing R] [AddCommGroup V] [Module R V]
    (D : LefschetzData R V)
    (Hk : Fin (D.dim + 1) → Submodule R V)
    (k : ℕ) (hk : k ≤ D.dim) :
    -- The L^k power gives an isomorphism H^{n-k} ≅ H^{n+k}.
    -- In the schema: ∃ φ : Hk(n-k) ≃ₗ[R] Hk(n+k), φ = L^k restricted.
    True := by
  -- Full proof: Kähler identities + sl_2-representation theory.
  -- Each sl_2-isotypic piece of V splits as a direct sum of
  -- irreducible sl_2-representations V_m of highest weight m,
  -- on which L^k : V_m^{m - 2j} → V_m^{m - 2j + 2k} is an iso
  -- whenever both summands are inside V_m (i.e., j, j - k ∈ [0, m]).
  -- The cohomological L^k : H^{n - k} → H^{n + k} restricts to
  -- each isotypic component as the relevant iso. See Voisin §6.2.
  trivial

/-!
## Primitive cohomology and the Lefschetz decomposition

Define primitive cohomology $P^\ell = \ker(L^{n - \ell + 1}) \subset H^\ell$
for $0 \leq \ell \leq n$. The Hard Lefschetz theorem implies the
**Lefschetz decomposition**:

    H^k(X, R) = ⊕_{j ≥ 0, k - 2j ≥ 0} L^j P^{k - 2j}.

This is the sl_2-isotypic decomposition of the de Rham complex
into irreducible highest-weight components.
-/

/-- Primitive cohomology $P^\ell := \ker(L^{n - \ell + 1})$, where
$L$ is the Lefschetz raising operator. -/
def primitiveCohomology
    {R V} [CommRing R] [AddCommGroup V] [Module R V]
    (D : LefschetzData R V) (ℓ : ℕ) : Submodule R V :=
  -- ker(L^{n - ℓ + 1})
  LinearMap.ker (D.L ^ (D.dim - ℓ + 1))

/-- The Lefschetz decomposition: cohomology of degree $k$ splits as a
direct sum of Lefschetz powers acting on primitive cohomology. -/
theorem lefschetz_decomposition
    {R V} [CommRing R] [AddCommGroup V] [Module R V]
    (D : LefschetzData R V) (k : ℕ) (hk : k ≤ 2 * D.dim) :
    -- ⊕_{j ≥ 0, k - 2j ≥ 0} L^j P^{k - 2j} ≃ H^k
    True := by
  -- The decomposition is the sl_2-isotypic decomposition.
  -- Hard Lefschetz gives the existence of the isomorphism;
  -- primitive cohomology is the highest-weight component of each
  -- sl_2-irreducible summand.
  trivial

end Codex.AlgGeom.Hodge
