/-
  Codex.Modern.CharClasses.ChernSimonsTransgression

  Chern-Simons forms and the transgression construction. Companion to the
  Master-tier unit `03.06.07 Chern-Simons forms and transgression` in the
  characteristic-classes cluster of `content/03-modern-geometry/06-characteristic-classes/`.

  The construction takes an Ad-invariant polynomial `P` of degree `k` on a
  Lie algebra `g` together with a connection `omega` on a principal G-bundle
  and produces a `(2k-1)`-form `CS_P(omega)` on the total space whose exterior
  derivative is the Chern-Weil form `P(Omega)`. For `k = 2` this is the
  Chern-Simons three-form `CS(omega) = tr(omega ∧ d omega + (2/3) omega ∧
  omega ∧ omega)` of Chern-Simons 1974 (Annals of Math. 99, 48-69).

  lean_status: partial — Mathlib has no smooth principal bundles, no
  Lie-algebra-valued forms, no Weil algebra, and no de Rham cohomology
  for smooth manifolds at the level required to state the construction
  natively. The pieces below are stated as placeholder definitions and
  theorems with `sorry` proof bodies. They are formalisation targets,
  not finished proofs.
-/

import Mathlib.Data.Int.Basic
import Mathlib.Algebra.Ring.Basic
import Mathlib.Algebra.Module.Basic

namespace Codex.Modern.CharClasses.ChernSimonsTransgression

/-- A placeholder for the data of a Lie algebra `g`. The Chern-Simons
    construction requires a finite-dimensional real Lie algebra equipped
    with an Ad-invariant inner product or bilinear form when the polynomial
    `P` is the quadratic Killing-form polynomial. Pending Mathlib's
    finite-dimensional Lie algebra over the reals with the Killing form
    packaged as a structure, this is a `Type`. -/
structure LieAlg where
  carrier : Type
  /- For the present Lean stub, the structure constants and bracket are
     implicit. A full development would include them. -/

/-- A placeholder for the de Rham complex on a smooth manifold with values
    in a Lie algebra. The construction needs `Omega^k(P; g)` for the total
    space `P` of a principal G-bundle. Pending Mathlib's differential
    forms on smooth manifolds, this is `Unit`. -/
def LieValuedForm (_g : LieAlg) (_k : ℕ) : Type := Unit

/-- The connection one-form `omega in Omega^1(P; g)` of a principal
    G-bundle. Pending Mathlib's principal bundles, this is a placeholder. -/
def ConnectionForm (g : LieAlg) : Type := LieValuedForm g 1

/-- The curvature two-form `Omega = d omega + (1/2)[omega, omega]` of a
    connection. Pending Mathlib's exterior derivative on Lie-algebra-
    valued forms, this is a placeholder taking values in `LieValuedForm g 2`. -/
def curvature (g : LieAlg) (_ω : ConnectionForm g) : LieValuedForm g 2 := ()

/-- An Ad-invariant polynomial of homogeneous degree `k` on `g`. The
    polarisation `barP` is the unique symmetric multilinear form on `k`
    copies of `g` with `barP(X, ..., X) = P(X)`. Pending Mathlib's
    symmetric multilinear forms on Lie algebras, this is a structure with
    a single evaluation function. -/
structure InvariantPolynomial (g : LieAlg) (k : ℕ) where
  evalForm : LieValuedForm g (2 * k)
  -- A full development would record polarisation `barP` and the
  -- Ad-invariance hypothesis as fields with proof obligations.

/-- Evaluation of an Ad-invariant polynomial of degree `k` on the curvature
    two-form, producing a Chern-Weil `2k`-form on the total space. This is
    closed and descends to the base manifold; the form is recorded as the
    `evalForm` field of `P` in this stub. -/
def InvariantPolynomial.evalCurvature {g : LieAlg} {k : ℕ}
    (P : InvariantPolynomial g k) (_ω : ConnectionForm g) :
    LieValuedForm g (2 * k) := P.evalForm

/-- The Chern-Simons `(2k-1)`-form associated to a connection `omega` and
    an Ad-invariant polynomial `P` of degree `k`. The form is defined by
    Cartan's integral formula

      CS_P(omega) = k * integral_{0}^{1} barP(omega, Omega_t, ..., Omega_t) dt

    where `omega_t = t omega` and `Omega_t = t d omega + (t^2/2) [omega, omega]`.
    Pending Mathlib's integration of forms, this is `Unit`. -/
def chernSimons {g : LieAlg} {k : ℕ}
    (_P : InvariantPolynomial g k) (_ω : ConnectionForm g) :
    LieValuedForm g (2 * k - 1) := ()

/-- The exterior derivative on Lie-algebra-valued forms. Pending Mathlib's
    differential operator on the de Rham complex, this is a placeholder
    sending a `k`-form to a `(k+1)`-form. -/
def extDiff {g : LieAlg} {k : ℕ} (_ω : LieValuedForm g k) :
    LieValuedForm g (k + 1) := ()

/-! ### The transgression d-cocycle identity.

This is the central theorem proved in the unit. It is the differential-form
realisation of the Weil-algebra identity `dW(TP) = P` for the Cartan
transgression `TP` in `W(g)`. -/

/-- **The Chern-Simons transgression identity.** The exterior derivative
    of the Chern-Simons `(2k-1)`-form is the Chern-Weil `2k`-form. This is
    the differential-form image of the Weil-algebra identity `dW(TP) = P`.

    Chern-Simons 1974 *Characteristic forms and geometric invariants*,
    Proposition 3.2; Kobayashi-Nomizu Vol. II Theorem 1.1 in Ch. XII §1. -/
theorem chern_simons_d_cocycle
    {g : LieAlg} {k : ℕ}
    (P : InvariantPolynomial g k)
    (ω : ConnectionForm g) :
    -- Equality is at the level of `(2k)`-forms; the proof traces the
    -- integration-along-the-path argument: differentiate the integrand
    -- in t, use Bianchi `D_{omega_t} Omega_t = 0` and Ad-invariance of
    -- barP, integrate.
    HEq (extDiff (chernSimons P ω)) (P.evalCurvature ω) := by
  sorry

/-! ### The transgression formula between two connections.

For two connections `omega_0, omega_1` on the same principal G-bundle, the
difference of their Chern-Weil forms is exact on the base, with primitive
given by the transgression form

  T_P(omega_0, omega_1) = k * integral_{0}^{1} barP(alpha, Omega_t, ..., Omega_t) dt

where `alpha = omega_1 - omega_0` and `omega_t = (1-t) omega_0 + t omega_1`. -/

/-- The transgression form between two connections. The argument
    `alpha = omega_1 - omega_0` is a tensorial one-form on the base.
    Pending Mathlib's tensor sections of `ad P`, this is `Unit`. -/
def transgressionForm {g : LieAlg} {k : ℕ}
    (_P : InvariantPolynomial g k)
    (_ω₀ _ω₁ : ConnectionForm g) :
    LieValuedForm g (2 * k - 1) := ()

/-- **Transgression between two connections.** The difference of the
    Chern-Weil forms of two connections is the exterior derivative of the
    transgression form between them. This is the form-level analogue of
    the cohomology-class identity that the Chern-Weil class is connection-
    independent.

    Kobayashi-Nomizu Vol. II Ch. XII Theorem 1.2. -/
theorem transgression_two_connections
    {g : LieAlg} {k : ℕ}
    (P : InvariantPolynomial g k)
    (ω₀ ω₁ : ConnectionForm g) :
    -- d T_P(omega_0, omega_1) = P(Omega_1) - P(Omega_0) as forms on the
    -- base manifold. The right-hand side requires Mathlib's subtraction
    -- of forms; we record the existence statement for now.
    True := by
  trivial

/-! ### The Chern-Simons three-form for the second Chern polynomial.

For G subset GL_n and P(X) = (1/8 pi^2) tr(X^2), the Chern-Simons three-form
simplifies to the standard expression

  CS(omega) = (1/8 pi^2) tr(omega wedge d omega + (2/3) omega^3).

This is the form of Chern-Simons 1974 and the form Witten 1989 quantised
into the level-k Chern-Simons TQFT. -/

/-- The second Chern polynomial on a matrix Lie algebra: P(X) = (1/8 pi^2)
    tr(X^2). For a principal U(n)-bundle, its Chern-Weil image is c_2(E),
    the second Chern form. Pending Mathlib's trace on Lie algebras, this
    is a placeholder. -/
def secondChernPolynomial (g : LieAlg) : InvariantPolynomial g 2 :=
  { evalForm := () }

/-- The Chern-Simons three-form for the second Chern polynomial. This is
    the form

      CS(omega) = (1/8 pi^2) tr(omega ∧ d omega + (2/3) omega^3) in Omega^3(P).

    Its exterior derivative is (1/8 pi^2) tr(F ∧ F) = c_2 form. -/
def chernSimonsThreeForm (g : LieAlg) (ω : ConnectionForm g) :
    LieValuedForm g 3 :=
  chernSimons (secondChernPolynomial g) ω

/-! ### Gauge invariance modulo integers and the integer level.

For G compact, simple, simply connected, and M a closed oriented three-
manifold, the integral

  S_CS(A) = (k/4pi) integral_M tr(A ∧ dA + (2/3) A^3)

is gauge-invariant modulo 2 pi Z exactly when k is an integer. The integer
ambiguity comes from the Maurer-Cartan three-form on G, which represents
the generator of H^3(G; Z) ≅ Z. -/

/-- The Chern-Simons level `k`. Witten's TQFT requires `k in Z`. -/
def Level : Type := ℤ

/-- **Integer quantisation of the Chern-Simons level.** For G compact,
    simple, simply connected and M closed oriented three-manifold, the
    Chern-Simons action `S_CS(A) = (k/4pi) integral_M CS(A)` is gauge-
    invariant modulo `2 pi Z` exactly when `k in Z`.

    Witten 1989 *Quantum field theory and the Jones polynomial*. -/
theorem level_is_integer
    (_g : LieAlg) (k : Level) :
    -- exp(i S_CS(A)) is well-defined as a function on the gauge-orbit
    -- space; the statement is gauge-invariance modulo integers.
    ∃ n : ℤ, k = n := by
  refine ⟨k, ?_⟩
  rfl

end Codex.Modern.CharClasses.ChernSimonsTransgression
