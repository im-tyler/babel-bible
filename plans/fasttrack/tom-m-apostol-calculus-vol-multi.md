# Apostol — *Calculus, Vol. 2: Multi-Variable Calculus and Linear Algebra, with Applications to Differential Equations and Probability* (Fast Track 0.3) — Audit + Gap Plan

**Book:** Tom M. Apostol, *Calculus, Volume II: Multi-Variable Calculus and
Linear Algebra, with Applications to Differential Equations and Probability*
(2nd edition, John Wiley & Sons, 1969). ISBN 978-0-471-00007-5.

**Fast Track entry:** 0.3 (the §0 *prerequisites* slot — Apostol Vol 2 is
the multi-variable calculus + linear-algebra-introduction prerequisite for
the whole Codex spine; it sits alongside Apostol Vol 1 (0.2) and Lang
*Basic Mathematics* (0.1) as the foundation that every subsequent strand
assumes operationally).

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite per
the orchestration protocol). Punch-list of new units + deepenings to
reach the equivalence threshold (`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§3.4). Not a full P1 audit (no line-number-level theorem / exercise
inventory; Apostol Vol 2 has roughly 800 pages, ~400 named results, and
~2400 exercises across 16 chapters — line-level inventory deferred).

The audit surface is **the largest of any single Tier-α book**: Codex
01-foundations / linear-algebra ships only 4 templated units (field,
vector-space, bilinear-quadratic-form, plus group in 01.02), and 02-analysis
ships only topology + functional-analysis chapters with **no
multi-variable calculus, ODE, or vector calculus content whatsoever**.
Vector-calculus-on-manifolds pieces (Stokes, integration on manifolds,
differential forms) are well covered in `03.04.*`, so the integration
side has a [DEEPEN] / [ENRICH] route there. Most of the rest is
genuinely [NEW].

---

## §1 What Apostol Vol 2's book is for

Apostol Vol 2 is the **canonical American honours-calculus second-year
textbook**: paired with Vol 1 it forms the rigorous calculus + linear
algebra foundation that two generations of MIT, Caltech, and elite-
university science / engineering / mathematics undergraduates were
trained on. It is unusual among multi-variable calculus textbooks because
it **builds linear algebra first** (Chapters 1-7) and then uses it to do
multi-variable calculus properly (Chapters 8-13), with applications to
differential equations and probability afterwards. Where competing texts
(Marsden-Tromba, Hubbard-Hubbard, Edwards) develop linear algebra as
needed for vector calculus, Apostol develops it as a self-contained
abstract-algebra course in its own right and *then* uses it. This is
why the book is the foundation for the whole Codex spine: a reader who
finishes Vol 2 has the linear-algebra vocabulary required by every
subsequent strand (manifolds, bundles, representation theory, spectral
theory, linear PDE, symplectic geometry, etc.).

The book is organised as 16 chapters across roughly five Parts:

- **Part 1 — Linear Analysis** (Chapters 1-5): the linear-algebra spine.
  Linear spaces, linear transformations and matrices, determinants,
  eigenvalues and eigenvectors, eigenvalues of operators on Euclidean
  spaces (inner-product theory: orthogonality, the spectral theorem for
  symmetric / Hermitian operators, the principal-axes theorem for
  quadratic forms, the singular-value-decomposition-adjacent material).
- **Part 2 — Linear Differential Equations** (Chapters 6-7): applications
  of the linear-algebra spine. Chapter 6 develops linear ODEs with
  constant coefficients (homogeneous and inhomogeneous, the
  characteristic polynomial), method of variation of parameters, the
  Wronskian; Chapter 7 generalises to systems of linear differential
  equations using the exponential-of-matrix machinery.
- **Part 3 — Multi-variable Differential Calculus** (Chapters 8-9):
  partial derivatives, the gradient, the Jacobian matrix, the chain rule,
  the Taylor formula in several variables, sufficient conditions for
  extrema; applications to geometry (level sets, tangent planes, normal
  vectors, extrema with constraints, Lagrange multipliers, the
  implicit-function theorem).
- **Part 4 — Multi-variable Integral Calculus and Vector Calculus**
  (Chapters 10-12): line integrals, multiple integrals (Riemann
  integrability, Fubini, change of variables / Jacobian formula),
  surface integrals; the integral theorems (Green's theorem in the plane,
  Stokes's theorem on surfaces, the divergence theorem in $\mathbb{R}^3$).
- **Part 5 — Probability and Numerical Analysis** (Chapters 13-15):
  set functions and elementary probability (Chapters 13-14: $\sigma$-algebras-
  in-disguise, probability as a set function, conditional probability,
  random variables in discrete and continuous form, expectation, variance,
  standard distributions, weak law of large numbers, Chebyshev's
  inequality); numerical analysis (Chapter 16: polynomial approximation,
  Lagrange interpolation, finite differences, numerical integration,
  Newton's method, fixed-point iteration).

Distinctive Apostol-Vol-2 choices:

1. **Linear algebra before multi-variable calculus.** The order matters:
   linear maps, matrices, determinants, eigenvalues — *first* — then
   the differential of $f : \mathbb{R}^n \to \mathbb{R}^m$ is *defined*
   as the linear map $df_p$, not as the matrix of partials. Apostol
   teaches the modern (Cartan-Dieudonné) framing in 1969 — early.
2. **Linear-spaces-first treatment.** Chapter 1 defines a real or complex
   vector space abstractly (axioms), develops basis / dimension /
   subspace / quotient, then specialises to $\mathbb{R}^n$. Distinguishes
   sharply from Strang-style "computations on $\mathbb{R}^n$" approach.
3. **Determinants axiomatically.** Chapter 3 develops the determinant
   from three axioms (multilinear, alternating, $\det I = 1$) before
   any expansion-by-minors formula. Modern.
4. **Spectral theorem on inner-product spaces.** Chapter 5 proves the
   spectral theorem for symmetric / Hermitian operators on
   finite-dimensional inner-product spaces, including the principal-axes
   theorem for quadratic forms and the simultaneous-diagonalisation result.
   Done before any reference to functional analysis.
5. **ODE via linear algebra.** Chapters 6-7 do not present ODEs as a
   recipe-based subject; they treat the solution space of an
   $n$-th-order linear ODE as a vector space and the characteristic
   polynomial as the eigenvalue problem of the differentiation operator.
   Apostol's framing is the modern one Arnold popularised later.
6. **Differential as a linear map.** The differential of $f$ at $p$ is
   defined intrinsically as the linear map $df_p : \mathbb{R}^n \to
   \mathbb{R}^m$ such that $f(p+h) = f(p) + df_p(h) + o(|h|)$. The
   Jacobian matrix is then the matrix of $df_p$ in standard bases.
   Critical for Babel Bible's eventual development of derivatives on manifolds.
7. **Implicit and inverse function theorems with full proofs.** Chapter 9
   proves both rigorously (contraction mapping argument, in
   finite-dimensional form). These are the two theorems every working
   mathematician uses constantly and Apostol's proofs are clean and
   modern.
8. **Lagrange multipliers with full proof.** Not heuristic; full proof
   via the implicit function theorem.
9. **Vector calculus integral theorems.** Green, Stokes (classical
   surface form), divergence — proved (in modern $C^1$ generality, not
   just $C^\infty$). Apostol's Stokes is the *classical* form, not yet
   the differential-forms / manifold form (which Codex `03.04.05`
   already covers).
10. **Probability axiomatically.** Chapter 13 introduces probability
    via Kolmogorov axioms (probability as a $\sigma$-additive set
    function on a $\sigma$-algebra), then specialises to discrete and
    continuous cases. Modern; rare in 1969 calculus textbooks.
11. **Numerical analysis appendix.** Chapter 16 introduces Lagrange
    interpolation, finite differences, Newton-Cotes integration,
    Newton's method, fixed-point iteration. Codex has no numerical
    analysis content — a deliberate scope choice; this chapter is
    largely **out of scope** for the FT spine.
12. **Worked-example density.** Apostol's 800 pages contain ~150 fully
    worked examples and ~2400 exercises. The exercise layer is the
    largest single layer-2 gap on the Babel Bible side.

**Pedagogical position in the Babel Bible curriculum.** Apostol Vol 2 is the
*foundation* book — every subsequent Tier-α / β book assumes the reader
has the linear-algebra and multi-variable-calculus operational competence
the book delivers. **Closing the Apostol Vol 2 equivalence gap is
prerequisite work for the whole Fast Track campaign.** It produces the
01-linear-algebra and 02-analysis content that Hatcher / Bott-Tu /
Lawson-Michelsohn / Sternberg / Cannas / Donaldson all silently assume.

Apostol Vol 2 ends before measure theory proper (Chapter 13 stays in
elementary probability), before complex analysis (covered in Vol 1
appendix, not here), and before nonlinear ODEs (Arnold's *ODEs* picks
that up). Operational, not foundational on those three.

---

## §2 Coverage table (Babel Bible vs Apostol Vol 2)

Cross-referenced against the Babel Bible content tree (`find content -name
"*.md" | sort`). ✓ = covered at Apostol-equivalent depth, △ = topic
present but Babel Bible unit shallower (typically templated v0.5 prose, or
covered tangentially in a different framing), ✗ = not covered.

The **status convention** in the rightmost-column note matches peer
audits (Hatcher / Donaldson / Cannas).

### Part 1 — Linear Algebra (Chapters 1-5)

This is the largest single coverage gap. Codex `01.01-linear-algebra/`
ships only 4 units (field, vector-space, bilinear-quadratic-form). The
operational vocabulary of linear algebra — matrix, linear map, kernel,
image, rank, basis, dimension, determinant, eigenvalue, diagonalisation,
inner product, orthogonality, spectral theorem — is essentially absent
as **named units**, though it is silently used everywhere downstream
(in tangent spaces, bundle structure groups, representation theory,
symplectic linear algebra).

| Apostol topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Real / complex vector space (axioms) | `01.01.03-vector-space` | △ | Templated unit shipped; covers the axioms. Apostol Ch. 1 reference. |
| Subspace, span, linear independence, basis | `01.01.03-vector-space` (mentioned) | △ | Mentioned inside the vector-space unit; not its own unit. **Gap (medium priority — should be its own unit).** |
| Dimension theorem, $\dim(U+V) + \dim(U \cap V) = \dim U + \dim V$ | — | ✗ | **Gap.** Apostol Ch. 1 §1.13. |
| Linear transformation (definition, kernel, image) | — | ✗ | **Gap (high priority).** Apostol Ch. 2. *No standalone Babel Bible unit on linear maps* — silently assumed in `03.02.01-smooth-manifold` (tangent map), `03.05.04-vector-bundle-connection` (parallel transport), and throughout `07.*`. |
| Rank-nullity theorem | — | ✗ | **Gap (high priority).** Apostol Ch. 2 §2.7. Foundational. |
| Matrix of a linear map (in fixed bases); change of basis | — | ✗ | **Gap (high priority).** Apostol Ch. 2 §2.13-2.16. |
| Matrix multiplication, inverse, transpose, similarity | — | ✗ | **Gap (high priority).** Apostol Ch. 2 §2.17-2.21. Operational vocabulary used everywhere downstream. |
| Determinant (axiomatic + expansion + properties) | — | ✗ | **Gap (high priority).** Apostol Ch. 3. The axiomatic treatment (multilinear, alternating, $\det I = 1$) is the modern standard; Codex assumes it silently in `03.04.02-differential-forms` (top form on $\mathbb{R}^n$) without ever introducing it. |
| Eigenvalue, eigenvector, characteristic polynomial | — | ✗ | **Gap (high priority).** Apostol Ch. 4. Used silently in `02.11.03-unbounded-self-adjoint`, `03.05.09-curvature` (sectional curvature is an eigenvalue computation), and throughout `07-representation-theory`. |
| Diagonalisability; condition for diagonalisability | — | ✗ | **Gap.** Apostol Ch. 4 §4.10-4.13. |
| Cayley-Hamilton theorem | — | ✗ | **Gap (medium).** Apostol Ch. 4 §4.16. |
| Minimal polynomial, generalised eigenspaces, Jordan canonical form | — | ✗ | **Gap (medium).** Apostol Ch. 4 §4.20 + Ch. 7 (used in matrix exponentials). Note: Apostol gives a partial Jordan-form treatment; Hoffman-Kunze fills it. |
| Inner product space, Gram-Schmidt, orthogonal projection | `02.11.07-inner-product-space` | △ | Babel Bible unit covers the **infinite-dimensional / Hilbert** framing; Apostol's finite-dimensional treatment + Gram-Schmidt + projection is implicit but not dedicated. |
| Orthogonal / unitary operators, $O(n)$ / $U(n)$ as automorphism groups | `03.03.03-orthogonal-group` | △ | Group-theoretic / Lie-group framing of $O(n)$ is in `03.03.03`; the linear-algebraic treatment (orthogonal operator preserves inner product) is not explicit. |
| Spectral theorem (symmetric / Hermitian operators, finite-dim) | `02.11.03-unbounded-self-adjoint` | △ | Codex covers the **unbounded / functional-analysis** version; Apostol's clean finite-dimensional spectral theorem is missing. **High priority — load-bearing.** |
| Principal-axes theorem for quadratic forms | `01.01.15-bilinear-quadratic-form` | △ | Templated unit on bilinear / quadratic forms; the principal-axes / diagonalisation result is in scope but not detailed. |
| Bilinear and quadratic forms, signature, Sylvester's law of inertia | `01.01.15-bilinear-quadratic-form` | △ | Templated; Sylvester's law not stated cleanly. **Medium priority deepening.** |

### Part 2 — Linear Differential Equations (Chapters 6-7)

Codex has zero ODE coverage anywhere. This is a **strand-level gap**:
the Arnold *Mathematical Methods of Classical Mechanics* audit
(`plans/fasttrack/arnold-mathematical-methods.md`) treats ODE infrastructure
as deferred to a future Arnold *ODEs* / Apostol Vol 2 batch; Apostol Vol 2
is the place where it gets created.

| Apostol topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| First-order linear ODE, integrating factor | — | ✗ | **Gap (high priority).** Apostol Ch. 6 §6.7. |
| Existence / uniqueness for linear ODEs | — | ✗ | **Gap.** Apostol Ch. 6 §6.6. (General Picard-Lindelöf is in Arnold *ODEs*; Apostol covers the linear case rigorously.) |
| $n$-th order linear ODE with constant coefficients (homogeneous) | — | ✗ | **Gap (high priority).** Apostol Ch. 6 §6.9-6.12. The characteristic polynomial as the eigenvalue problem of $D = d/dx$. |
| Inhomogeneous linear ODE; method of undetermined coefficients; variation of parameters | — | ✗ | **Gap.** Apostol Ch. 6 §6.13-6.18. |
| Wronskian, linear independence of solutions | — | ✗ | **Gap.** Apostol Ch. 6 §6.5. |
| Systems of linear ODEs $\dot x = Ax$ | — | ✗ | **Gap (high priority).** Apostol Ch. 7. |
| Matrix exponential $e^{tA}$, computation via Jordan form | — | ✗ | **Gap (high priority).** Apostol Ch. 7 §7.7-7.10. Used silently in `03.03.01-lie-group` (one-parameter subgroups). |
| Phase portraits, qualitative theory of $\dot x = Ax$ | — | ✗ | **Gap (medium).** Apostol Ch. 7 §7.13-7.15. Bridges to Arnold dynamical-systems framing. |

### Part 3 — Multi-variable Differential Calculus (Chapters 8-9)

Codex has zero multi-variable calculus chapter. **This is the second-largest
gap.** Pieces appear scattered (`03.02.01-smooth-manifold` mentions tangent
maps, `03.04.04-exterior-derivative` uses partial derivatives) but none
of the foundational multi-variable calculus is shipped as named units.

| Apostol topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Limits, continuity for $f : \mathbb{R}^n \to \mathbb{R}^m$ | — | ✗ | **Gap.** Apostol Ch. 8 §8.2-8.4. |
| Partial derivative; existence vs. continuity | — | ✗ | **Gap (high priority).** Apostol Ch. 8 §8.5-8.6. Foundational. |
| Differentiability (linear-map definition); the differential $df_p$ | — | ✗ | **Gap (high priority).** Apostol Ch. 8 §8.10-8.13. The modern / Cartan-Dieudonné definition. |
| Gradient $\nabla f$, directional derivative | — | ✗ | **Gap.** Apostol Ch. 8 §8.14. |
| Jacobian matrix; chain rule (matrix form) | — | ✗ | **Gap (high priority).** Apostol Ch. 8 §8.18-8.21. |
| Mean-value theorem, Taylor's theorem in several variables | — | ✗ | **Gap.** Apostol Ch. 9 §9.4-9.7. |
| Sufficient conditions for extrema; Hessian | — | ✗ | **Gap.** Apostol Ch. 9 §9.8-9.9. |
| Implicit function theorem | — | ✗ | **Gap (high priority).** Apostol Ch. 9 §9.10-9.14. Used silently in `03.02.01-smooth-manifold` (regular-value theorem follows from IFT). |
| Inverse function theorem | — | ✗ | **Gap (high priority).** Apostol Ch. 9 §9.16. Same — silently assumed throughout `03.*`. |
| Lagrange multipliers, extrema with constraints | — | ✗ | **Gap.** Apostol Ch. 9 §9.18-9.22. |
| Tangent plane to a level surface; normal vector | — | ✗ | **Gap.** Apostol Ch. 9 §9.23. Bridges to `03.02.01-smooth-manifold` (tangent space generalises this). |

### Part 4 — Multi-variable Integral Calculus (Chapters 10-12)

This is where the Babel Bible 03-modern-geometry chapter has substantial overlap.
The differential-forms / Stokes machinery in `03.04.*` covers the modern
abstract version of these theorems; what's missing is the **classical
$\mathbb{R}^n$-flavoured presentation** (Riemann integral, Fubini,
classical Green/Stokes/divergence in components).

| Apostol topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Line integral $\int_\gamma P\,dx + Q\,dy$ | — | ✗ | **Gap.** Apostol Ch. 10 §10.4-10.10. The classical-form line integral — Codex `03.04.02-differential-forms` has the abstract 1-form integration but not the classical $P\,dx + Q\,dy$ presentation. |
| Path-independence, conservative fields, scalar potentials | — | ✗ | **Gap.** Apostol Ch. 10 §10.14-10.18. The proper-1-form / closed-vs-exact discussion; in modern language, the de Rham cohomology question $H^1_{dR}$. Codex `03.04.06-de-rham-cohomology` has the abstract version. |
| Riemann integral over rectangles in $\mathbb{R}^n$ | — | ✗ | **Gap (medium priority).** Apostol Ch. 11 §11.2-11.6. Operational definition of the multiple integral. |
| Fubini's theorem (Riemann form) | — | ✗ | **Gap (high priority).** Apostol Ch. 11 §11.7. The classical Fubini for continuous integrands; the measure-theoretic Fubini comes later. |
| Change of variables / Jacobian formula for multiple integrals | — | ✗ | **Gap (high priority).** Apostol Ch. 11 §11.26-11.30. The classical $\int_\Omega f = \int_{\Omega'} (f \circ g)|\det Dg|$. |
| Polar / cylindrical / spherical coordinates as worked examples | — | ✗ | **Gap.** Apostol Ch. 11 §11.32-11.34. |
| Surface integral $\iint_S f \, dS$, $\iint_S \mathbf{F} \cdot d\mathbf{S}$ | `03.04.03-integration-on-manifolds` | △ | Codex has the abstract / manifold-form integration; the classical parametric-surface presentation is not shipped. |
| Green's theorem in the plane | `03.04.05-stokes-theorem` (limit case) | △ | Codex has Stokes in differential-forms generality; Green's theorem is the $n=2$ classical case. Worth a dedicated treatment. **[ENRICH]** in `03.04.05` rather than full new unit. |
| Stokes's theorem (classical, surface form) | `03.04.05-stokes-theorem` | △ | Codex covers the modern manifold-form Stokes; the classical $\int_{\partial S} \mathbf{F} \cdot d\mathbf{r} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$ presentation is the Apostol form. **[ENRICH]** in `03.04.05`. |
| Divergence theorem in $\mathbb{R}^3$ | `03.04.05-stokes-theorem` (limit case) | △ | Codex has the manifold version; classical divergence theorem is the $n=3$ case with $\nabla \cdot \mathbf{F}$. **[ENRICH]**. |
| Vector fields, divergence, curl, gradient — operational identities | — | ✗ | **Gap (medium priority).** The classical-vector-calculus identities ($\nabla \times \nabla f = 0$, $\nabla \cdot \nabla \times \mathbf{F} = 0$, vector-triple-product identities). Codex has them implicitly via $d^2 = 0$. Worth a dedicated bridge unit translating between classical $\nabla$-operator and modern $d$ on forms. |

### Part 5 — Probability and Numerical Analysis (Chapters 13-15, 16)

| Apostol topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| $\sigma$-algebra, probability as a set function (Kolmogorov axioms) | — | ✗ | **Out of scope (P4).** Apostol Ch. 13. Pre-measure-theoretic probability. Defer until measure-theory chapter exists in Babel Bible. |
| Conditional probability, independence, Bayes | — | ✗ | **Out of scope (P4).** Apostol Ch. 13. |
| Random variable, distribution function, expectation, variance | — | ✗ | **Out of scope (P4).** Apostol Ch. 14. |
| Discrete distributions (binomial, Poisson, geometric) | — | ✗ | **Out of scope (P4).** Apostol Ch. 14 §14.10. |
| Continuous distributions (normal, exponential, uniform) | — | ✗ | **Out of scope (P4).** Apostol Ch. 14 §14.20. |
| Chebyshev's inequality, weak law of large numbers | — | ✗ | **Out of scope (P4).** Apostol Ch. 14 §14.30. |
| Lagrange interpolation, finite differences | — | ✗ | **Out of scope (P4).** Apostol Ch. 16. Codex has no numerical-analysis content; deliberate scope choice. |
| Newton-Cotes numerical integration | — | ✗ | **Out of scope (P4).** Apostol Ch. 16. |
| Newton's method, fixed-point iteration | — | ✗ | **Out of scope (P4).** Apostol Ch. 16. |

### Aggregate coverage estimate

- **Theorem layer:** ~15% of Apostol Vol 2's named theorems map to
  Babel Bible units. Concentrated almost entirely on the **vector-calculus
  end** (Stokes / Green / divergence in `03.04.05`, integration in
  `03.04.03`) and a *small* slice of linear algebra (`01.01.03`,
  `01.01.15`, `02.11.03`, `02.11.07`). After priority-1: ~55%. After
  priority-1+2: ~80%. After priority-3 (out-of-scope cuts honoured):
  ~85% modulo deliberate-out-of-scope probability and numerical
  analysis.
- **Exercise layer:** ~1%. Apostol's ~2400 exercises vs. Babel Bible's
  effectively-zero coverage on the linear-algebra and multi-variable
  side. **Closing this requires a dedicated exercise-pack pass after
  the theorem-layer batch lands** — likely the largest single
  exercise-pack production on the Fast Track.
- **Worked-example layer:** ~5%. Apostol's ~150 worked examples cover
  matrix computations, Jacobian computations, line-integral
  computations, ODE solutions, eigenvalue computations — almost none
  of which appear as Codex worked examples.
- **Notation layer:** Apostol uses standard 1969-vintage notation
  ($\mathbf{a}, \mathbf{b}$ bold for vectors; $\nabla$ for gradient,
  $\nabla \cdot$ for divergence, $\nabla \times$ for curl; $\det A$
  or $|A|$; $\mathbf{i}, \mathbf{j}, \mathbf{k}$ for $\mathbb{R}^3$
  basis). Aligned with modern Codex conventions; no `notation/apostol-vol2.md`
  needed if the new units adopt the modern $df_p$ / $J_f$ / $\det A$
  conventions.
- **Sequencing layer:** ~10%. Babel Bible DAG has no linear-algebra spine;
  the new units must build a fresh DAG segment in 01-foundations and
  02-analysis (multivariable-differentiation, ODE).
- **Intuition layer:** ~10%. Apostol's geometric / kinematic intuition
  for line integrals, gradient flow, eigenvalue interpretation as
  scaling-along-eigenvector is essentially absent in Babel Bible.
- **Application layer:** ~30%. The vector-calculus applications (work,
  flux, conservative fields, Maxwell-equation precursors) are partly
  covered in `08.*` stat-mech / lattice-gauge units; the linear-algebra
  applications (PCA, normal modes via eigenvalues, matrix exponential
  in dynamics) are absent.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The Codex 01-foundations / 02-analysis chapters need substantial
expansion to honestly claim Apostol-Vol-2-equivalence. **The bulk of
this is [NEW]**, with [ENRICH] / [DEEPEN] confined to the
vector-calculus pieces that already have a manifold-form treatment in
`03.04.*`. The recommended slot ranges are:

- `01.01.*` for the linear-algebra core (linear maps, determinants,
  eigenvalues, spectral theorem).
- `01.01.E*` for linear-algebra exercise packs.
- `02.05.*` (new chapter) for multi-variable differential calculus.
- `02.06.*` (new chapter) for ODEs (linear ODEs and systems).
- `02.10.*` (new chapter) for classical vector calculus (line / surface
  / multiple integrals in classical $\nabla$-flavoured form).
- Existing `03.04.*` units for the manifold-form Stokes / Green /
  divergence enrichments.
- Probability + numerical analysis (`02.12.*`) deferred — see §5.

### Priority 1 — Linear-algebra spine and load-bearing multi-variable calculus

These items create the operational vocabulary that **the entire rest of
Codex silently assumes**. Without them, every downstream unit's
prerequisites are floating — `03.02.01-smooth-manifold` cannot honestly
demand "linear map" / "differential" / "Jacobian" because none of those
are shipped.

1. **`01.01.04` Subspace, basis, dimension.** [NEW]. Apostol Ch. 1
   §1.10-1.13 anchor; Halmos *Finite-Dimensional Vector Spaces* (1958)
   originator-citation. Three-tier; ~1500 words. Master section: span,
   linear independence, Steinitz exchange lemma, dimension theorem
   $\dim(U+V) + \dim(U \cap V) = \dim U + \dim V$, dimension as
   well-defined invariant. Worked examples: $\dim \mathbb{R}^n = n$,
   $\dim P_n[x] = n+1$ (polynomials of degree $\leq n$).

2. **`01.01.05` Linear transformation: kernel, image, rank-nullity.**
   [NEW]. Apostol Ch. 2 §2.2-2.7 anchor; Halmos originator. Three-tier;
   ~1800 words. Master section: linear map $T : V \to W$ between
   vector spaces; $\ker T$, $\mathrm{im}\,T$ as subspaces; rank-nullity
   $\dim V = \dim \ker T + \dim \mathrm{im}\, T$; consequences for
   injectivity / surjectivity in finite dimensions. **Highest priority
   in the linear-algebra block — every other linear-algebra unit
   depends on this.**

3. **`01.01.06` Matrix of a linear map; change of basis; matrix
   algebra.** [NEW]. Apostol Ch. 2 §2.13-2.21 anchor. Three-tier;
   ~2000 words. Master section: matrix representation in fixed bases;
   matrix multiplication = composition of linear maps; transpose,
   inverse, similarity transformation $A \mapsto P^{-1} A P$; change-of-
   basis formula for endomorphisms. Worked examples: $2 \times 2$
   rotation matrix, projection matrix, similarity to diagonal form.

4. **`01.01.07` Determinant: axiomatic + expansion + properties.**
   [NEW]. Apostol Ch. 3 anchor; Cayley 1858 *A memoir on the theory of
   matrices* originator (for $n \geq 3$); Leibniz / Cramer for the
   classical formula. Three-tier; ~2200 words. Master section: the
   determinant as the unique multilinear-alternating-normalised function
   $\det : V^n \to \mathbb{F}$ (where $\dim V = n$); equivalence with
   permutation-sum formula $\det A = \sum_\sigma \mathrm{sgn}(\sigma)
   \prod_i a_{i,\sigma(i)}$ and Laplace expansion; properties
   ($\det(AB) = \det A \cdot \det B$, $\det A^T = \det A$, behaviour
   under row operations, Cramer's rule); geometric interpretation as
   signed volume. **Load-bearing — `03.04.02-differential-forms`
   silently uses determinants in the top-form construction.**

5. **`01.01.08` Eigenvalue, eigenvector, characteristic polynomial.**
   [NEW]. Apostol Ch. 4 §4.1-4.10 anchor; Cauchy 1829 (originator —
   characteristic equation in mechanics). Three-tier; ~2000 words.
   Master section: eigenvalue equation $T v = \lambda v$; characteristic
   polynomial $\chi_T(\lambda) = \det(\lambda I - T)$; algebraic vs
   geometric multiplicity; diagonalisability iff sum of geometric
   multiplicities equals $\dim V$; Cayley-Hamilton theorem (with
   proof via adjugate matrix). Worked examples: $2 \times 2$
   diagonalisable, $2 \times 2$ non-diagonalisable Jordan block,
   rotation eigenvalues $e^{\pm i\theta}$.

6. **`01.01.09` Inner-product space: orthogonality, Gram-Schmidt,
   spectral theorem (finite-dim).** [NEW]. Apostol Ch. 5 anchor;
   Hilbert 1904 originator (early form), Schmidt 1907 originator
   (Gram-Schmidt). Three-tier; ~2200 words. Master section: inner
   product $\langle \cdot, \cdot \rangle$ on real / complex vector
   space; orthonormal basis; Gram-Schmidt orthogonalisation; orthogonal
   projection; orthogonal / unitary operator preserves $\langle \cdot,
   \cdot \rangle$; **spectral theorem for symmetric / Hermitian
   operators** — every Hermitian operator on a finite-dimensional
   inner-product space has an orthonormal basis of eigenvectors with
   real eigenvalues. Cross-link to `02.11.03-unbounded-self-adjoint`
   for the infinite-dimensional generalisation. **Load-bearing for
   `03.05.09-curvature` (sectional curvature is an eigenvalue
   computation), `03.09.*` spin-geometry (Dirac operator spectrum),
   `07.*` representation theory (unitary reps).**

7. **`01.01.10` Bilinear and quadratic forms; Sylvester's law of
   inertia; principal-axes theorem.** [DEEPEN] of `01.01.15-bilinear-
   quadratic-form`. Apostol Ch. 5 §5.13-5.18 anchor; Sylvester 1852
   originator. Currently the unit is templated. Replace the templated
   "Key theorem" section with: Sylvester's law of inertia (signature
   $(p, q, z)$ is invariant under change of basis); principal-axes
   theorem (every quadratic form has an orthonormal basis in which it
   is diagonal); applications to conic and quadric classification.
   Cross-link to item 6. No new unit ID.

8. **`02.05.01` Multi-variable limit and continuity.** [NEW]. Apostol
   Ch. 8 §8.2-8.4 anchor. Three-tier; ~1300 words. Master section:
   limit of $f : \mathbb{R}^n \to \mathbb{R}^m$ at a point;
   $\epsilon$-$\delta$ definition; continuity; sequential continuity;
   continuity-of-composition. Worked examples: $f(x, y) = xy / (x^2 +
   y^2)$ has no limit at origin; partial limits don't determine joint
   limit.

9. **`02.05.02` Partial derivative; differentiability; the differential
   $df_p$.** [NEW]. Apostol Ch. 8 §8.5-8.13 anchor; Cartan 1899-1900
   originator (intrinsic differential); Dieudonné 1960 *Foundations of
   Modern Analysis* for the modern presentation. Three-tier; ~2000
   words. Master section: partial derivative; existence of partials
   does *not* imply differentiability; differentiability defined as
   existence of linear map $df_p : \mathbb{R}^n \to \mathbb{R}^m$
   with $f(p+h) = f(p) + df_p(h) + o(|h|)$; sufficient condition
   ($C^1$ implies differentiable); Jacobian matrix as matrix of $df_p$
   in standard bases. **Load-bearing — `03.02.01-smooth-manifold`
   silently uses this.**

10. **`02.05.03` Chain rule for multi-variable functions.** [NEW].
    Apostol Ch. 8 §8.18-8.21 anchor. Three-tier; ~1500 words. Master
    section: chain rule $d(g \circ f)_p = dg_{f(p)} \circ df_p$;
    matrix form $J_{g \circ f}(p) = J_g(f(p)) \cdot J_f(p)$; gradient
    of composition; directional derivative; consequences. Worked
    examples: chain rule in polar coordinates, change of variables in
    PDE.

11. **`02.05.04` Implicit and inverse function theorems.** [NEW].
    Apostol Ch. 9 §9.10-9.16 anchor; Dini 1877 originator (implicit);
    Goursat 1903 originator (modern statement). Three-tier; ~2400
    words. Master section: inverse function theorem — if $f$ is $C^1$
    near $p$ and $df_p$ invertible, then $f$ is locally invertible
    with $C^1$ inverse; implicit function theorem — derived from inverse
    function theorem; full proof via Banach fixed-point / contraction
    mapping. **Load-bearing — `03.02.01-smooth-manifold` invokes
    regular-value theorem (= IFT corollary) silently.**

12. **`02.05.05` Taylor's theorem and extrema in several variables.**
    [NEW]. Apostol Ch. 9 §9.4-9.9 anchor. Three-tier; ~1500 words.
    Master section: multi-variable Taylor's theorem with remainder;
    Hessian matrix as second-order coefficient; sufficient conditions
    for local extremum (positive-definite Hessian = local min);
    Lagrange multipliers via implicit function theorem (cross-link
    to item 11). Worked examples: classify critical points of
    $f(x, y) = x^2 - y^2 + xy$; constrained optimisation on a sphere.

### Priority 2 — ODEs and classical vector calculus

These items open two new chapters in 02-analysis (ODE infrastructure
and classical vector calculus) and provide the [ENRICH] hooks into
the existing manifold-form Stokes machinery.

13. **`02.06.01` First-order linear ODE; existence and uniqueness for
    linear ODEs.** [NEW]. Apostol Ch. 6 §6.4-6.7 anchor. Three-tier;
    ~1500 words. Master section: $y' + p(x) y = q(x)$ solved via
    integrating factor; uniqueness of solution given initial condition;
    statement of Picard-Lindelöf for linear case. Worked examples:
    radioactive decay, Newton's cooling law.

14. **`02.06.02` $n$-th-order linear ODE with constant coefficients.**
    [NEW]. Apostol Ch. 6 §6.9-6.18 anchor; Euler 1739-1743 (originator
    — characteristic equation method); d'Alembert 1747 (inhomogeneous
    case). Three-tier; ~2000 words. Master section: solution space of
    $L y = 0$ where $L$ is a constant-coefficient differential operator
    is an $n$-dimensional vector space; characteristic polynomial of
    $L$ as the eigenvalue problem of $D = d/dx$ (cross-link to item
    5); fundamental solution set; Wronskian as test for linear
    independence; inhomogeneous case via variation of parameters.
    Worked examples: harmonic oscillator $\ddot x + \omega^2 x = 0$;
    damped oscillator; forced oscillator with resonance.

15. **`02.06.03` Systems of linear ODEs and the matrix exponential.**
    [NEW]. Apostol Ch. 7 anchor; Lagrange 1762-1765 (originator,
    in mechanics); Cauchy 1840s (matrix exponential form). Three-tier;
    ~2000 words. Master section: system $\dot x = A x$ where $A \in
    \mathrm{Mat}_n(\mathbb{R})$; solution $x(t) = e^{tA} x(0)$;
    matrix exponential defined via power series; computation via
    diagonalisation when $A$ diagonalisable; via Jordan form otherwise;
    phase-portrait classification (sink / source / saddle / centre /
    spiral) by eigenvalue location. **Load-bearing — `03.03.01-lie-
    group` invokes the matrix exponential silently.**

16. **`02.10.01` Line integral; conservative fields; path
    independence.** [NEW]. Apostol Ch. 10 §10.1-10.18 anchor. Three-tier;
    ~1800 words. Master section: line integral $\int_\gamma P\,dx +
    Q\,dy + R\,dz$ along a piecewise-$C^1$ curve $\gamma$; line
    integral of vector field $\mathbf{F} \cdot d\mathbf{r}$;
    conservative field $\mathbf{F} = \nabla \phi$; path independence
    iff conservative iff $\oint = 0$ on every closed loop; relation
    to closed-vs-exact 1-forms (cross-link to `03.04.06-de-rham-
    cohomology`). Worked examples: work done by gravity (conservative);
    work in magnetic field (not conservative).

17. **`02.10.02` Multiple integral; Riemann integrability over a
    rectangle and over a Jordan-measurable set.** [NEW]. Apostol Ch. 11
    §11.2-11.10 anchor; Riemann 1854 *Habilitationsschrift*
    originator-citation. Three-tier; ~1600 words. Master section:
    Riemann integral over a rectangle in $\mathbb{R}^n$; Jordan content
    / Jordan-measurable sets; integrability of continuous functions;
    properties (linearity, monotonicity, additivity over disjoint
    decomposition). Bridge to `02.11.*` measure theory (deferred).

18. **`02.10.03` Fubini's theorem (Riemann form) and iterated
    integrals.** [NEW]. Apostol Ch. 11 §11.7 anchor. Three-tier;
    ~1200 words. Master section: continuous-integrand Fubini —
    $\int_{R_1 \times R_2} f = \int_{R_1} \left( \int_{R_2} f \right)$
    when $f$ continuous; equivalent to Riemann definition. Cross-link
    to measure-theoretic Fubini (deferred).

19. **`02.10.04` Change of variables in multiple integrals; the
    Jacobian formula.** [NEW]. Apostol Ch. 11 §11.26-11.34 anchor;
    Jacobi 1841 *De determinantibus functionalibus* originator. Three-tier;
    ~1700 words. Master section: change-of-variables formula
    $\int_\Omega f = \int_{\Omega'} (f \circ g) \cdot |\det Dg|$ for
    $C^1$ diffeomorphism $g$; proof sketch via partition / linear
    approximation; standard worked examples — polar, cylindrical,
    spherical coordinates; relation to differential-forms version
    (cross-link to `03.04.03-integration-on-manifolds`). **Load-bearing
    operationally — used silently in physics applications throughout
    Babel Bible.**

20. **`02.10.05` Surface integral and parametric surfaces.** [NEW].
    Apostol Ch. 12 §12.1-12.10 anchor. Three-tier; ~1500 words.
    Master section: parametric surface $\mathbf{r} : D \to \mathbb{R}^3$;
    surface area $\iint_S dS = \iint_D |\mathbf{r}_u \times \mathbf{r}_v|
    \, du \, dv$; flux integral $\iint_S \mathbf{F} \cdot d\mathbf{S}
    = \iint_D \mathbf{F} \cdot (\mathbf{r}_u \times \mathbf{r}_v) \,
    du \, dv$; relation to integration of 2-forms (cross-link to
    `03.04.03`).

21. **`02.10.06` Vector calculus identities; gradient / divergence /
    curl in $\mathbb{R}^3$.** [NEW]. Apostol Ch. 12 §12.16-12.18
    anchor. Three-tier; ~1300 words. Master section: classical $\nabla$
    operator; $\nabla \times \nabla f = 0$, $\nabla \cdot \nabla \times
    \mathbf{F} = 0$; vector triple identities; **classical-vs-modern
    bridge** translating $(\nabla, \nabla \cdot, \nabla \times)$ to
    $d$ on differential forms via the musical isomorphism in $\mathbb{R}^3$
    (cross-link to `03.04.04-exterior-derivative`). **Pedagogically
    important — closes the gap between classical-physics-vector-calculus
    notation and the modern differential-forms language.**

22. **[ENRICH] `03.04.05-stokes-theorem`.** Add Master-section
    treatment of the three classical specialisations: Green's theorem
    in the plane ($n=2$), classical Stokes (boundary of a 2-surface
    in $\mathbb{R}^3$), divergence theorem ($n=3$, $\nabla \cdot
    \mathbf{F}$ form). With Apostol Ch. 12 anchor. Each as a one-page
    Master subsection deriving the classical statement from the
    abstract manifold-form Stokes. No new unit ID.

23. **[ENRICH] `03.04.03-integration-on-manifolds`.** Add cross-link
    paragraph to `02.10.04` and `02.10.05` for the classical-form
    treatments. Note that the change-of-variables formula in classical
    notation is the differential-forms pull-back formula in disguise.
    No new unit ID.

24. **[ENRICH] `03.04.06-de-rham-cohomology`.** Add cross-link to
    `02.10.01` (conservative fields) — closed-vs-exact 1-forms in
    $\mathbb{R}^n$ correspond exactly to conservative-vs-non-conservative
    vector fields; on a star-shaped domain, every closed 1-form is
    exact, recovering Poincaré's lemma in the classical-vector-calculus
    setting.

### Priority 3 — Linear-algebra depth completions and exercise packs

These items close the remaining linear-algebra depth gaps and produce
the (large) exercise pack required for full equivalence.

25. **`01.01.11` Jordan canonical form and minimal polynomial.** [NEW].
    Apostol Ch. 4 §4.20 + Hoffman-Kunze for full proof. Three-tier;
    ~1800 words. Master section: minimal polynomial; primary
    decomposition theorem; Jordan blocks; Jordan canonical form
    theorem (every endomorphism over algebraically closed field has
    Jordan form, unique up to ordering); applications to matrix
    exponential (cross-link to `02.06.03`). Optional but valuable.

26. **`01.01.12` Singular value decomposition (finite-dim).** [NEW].
    Beltrami 1873 / Jordan 1874 / Sylvester 1889 originator. Three-tier;
    ~1500 words. Apostol does not develop SVD per se but the principal-
    axes theorem (item 7) is the symmetric case of the same idea; SVD
    is a natural priority-3 add-on for completeness. Worked example:
    PCA / data-analysis interpretation.

27. **`01.01.E1` Linear-algebra exercise pack: matrix computations,
    rank-nullity, eigenvalues, diagonalisation.** [NEW]. Apostol's
    Ch. 1-5 exercise selection. ~50 problems with full or hint-form
    solutions. Operational competence test.

28. **`02.05.E1` Multi-variable calculus exercise pack.** [NEW].
    Apostol's Ch. 8-9 exercise selection. ~30 problems on partial
    derivatives, chain rule, IFT applications, Lagrange multipliers,
    Taylor expansions.

29. **`02.06.E1` ODE exercise pack.** [NEW]. Apostol's Ch. 6-7
    exercise selection. ~20 problems on linear ODEs, characteristic
    polynomials, matrix exponential.

30. **`02.10.E1` Vector calculus exercise pack.** [NEW]. Apostol's
    Ch. 10-12 exercise selection. ~30 problems on line integrals,
    multiple integrals (incl. polar/cylindrical/spherical), surface
    integrals, applications of Green / Stokes / divergence theorems.

31. **[DEEPEN] `01.01.03-vector-space`.** Replace templated v0.5 prose
    with anchored treatment: explicitly cite Halmos and Apostol; add
    Master-section discussion of finite-dimensional vs
    infinite-dimensional distinction; cross-link to item 1. No new
    unit ID.

### Priority 4 — Probability and numerical analysis (deferred / out of scope)

These items are deliberately deferred — probability theory belongs
in a measure-theory chapter that does not yet exist; numerical
analysis is out of strict FT scope. Listed for completeness:

32. **`02.12.*` Elementary probability** (Apostol Ch. 13-15).
    [DEFERRED]. Defer until measure-theory chapter exists in `02.*`.
    A future plan can cover Apostol's $\sigma$-algebra-via-set-functions
    treatment as the bridge to formal measure theory. Out of scope
    for the FT spine; revisit when probability theory is added per
    the strand expansion plan.

33. **Numerical analysis** (Apostol Ch. 16). [OUT OF SCOPE].
    Codex deliberately does not cover numerical analysis. A future
    `Numerical Analysis Strand` could address Lagrange interpolation,
    Newton-Cotes, Newton's method; not required for FT equivalence.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Apostol-Vol-2-equivalence batch** = priority 1 only (items
1-12): 11 new units + 1 deepening across `01.01.04-12` (linear-algebra
spine) and `02.05.01-05` (multi-variable differentiation). Realistic
production estimate (mirroring earlier Donaldson / Cannas / Hatcher
batches):

- ~3 hours per typical new unit (research + draft + validate at 27/27 +
  Lean stub + Bridge / Synthesis prose).
- ~4 hours for the larger units (determinant axioms, IFT, spectral
  theorem, change-of-variables — each load-bearing for downstream
  strands).
- ~1.5 hours per deepening.
- Priority-1 totals: 5 large × 4 h + 6 typical × 3 h + 1 deepening ×
  1.5 h = ~39.5 hours.
- Priority-1+2 totals: 5 large × 4 h + 18 typical × 3 h + 4 enrichments
  × 1 h = ~78 hours.
- Priority-1+2+3 (excluding exercise packs): ~95 hours.
- Exercise packs (items 27-30): ~3 hours each × 4 = ~12 hours.
- **Grand total** for full Apostol-Vol-2-equivalence (excluding deferred
  probability and out-of-scope numerical analysis): ~107 hours.

At 6-8 production agents in parallel, priority-1 fits in a 4-5 day
window with 1-2 integration agents stitching outputs. **This is the
largest single Tier-α book production batch in the campaign.**

**Batch structure.**

- **Batch A (linear-algebra spine, items 1-7, ~28 h):** opens out
  `01.01-linear-algebra/` to ~10 units. Pure prerequisite; produce
  first; load-bearing for everything downstream including most
  Tier-β books.
- **Batch B (multi-variable differential calculus, items 8-12, ~16
  h):** opens new chapter `02.05-multivariable-differentiation/`.
  Depends on Batch A only for the linear-algebra prerequisites
  (linear map, matrix, determinant).
- **Batch C (ODEs, items 13-15, ~12 h):** opens new chapter
  `02.06-ordinary-differential-equations/`. Depends on Batch A
  (eigenvalues for matrix exponential, Jordan form for non-
  diagonalisable case). Bridges to Arnold *ODEs* (deferred).
- **Batch D (classical vector calculus, items 16-21, ~14 h):**
  opens new chapter `02.10-vector-calculus/`. Depends on Batch B
  (Jacobian / chain rule for change-of-variables formula). Mostly
  independent of Batch C.
- **Batch E (manifold-form enrichments, items 22-24, ~3 h):**
  enriches existing `03.04.*` units. Single-threaded; do at end of
  Batches B-D.
- **Batch F (exercise packs, items 27-30, ~12 h):** depends on
  A-D; produced in parallel after the theorem-layer batch lands.

**Originator-prose targets** (each priority-1 unit's Master section
cites originator + Apostol):

- **Linear spaces / dimension** (1): Halmos 1958 *Finite-Dimensional
  Vector Spaces*; Grassmann 1844 *Ausdehnungslehre* for the originator-
  text on linear independence and dimension as an algebraic-geometric
  concept.
- **Linear maps / rank-nullity** (2): Halmos 1958; Sylvester 1851
  for "rank" vocabulary.
- **Matrix algebra** (3): Cayley 1858 *A memoir on the theory of
  matrices*; Frobenius 1877 (similarity / canonical forms).
- **Determinants** (4): Leibniz 1693 (originator concept); Cauchy 1812
  (modern formulation); Cayley 1841 (notation $\det$).
- **Eigenvalues** (5): Cauchy 1829 (characteristic equation in
  mechanics); Cayley-Hamilton 1853-1858.
- **Inner-product / spectral theorem** (6): Hilbert 1904 (early form);
  Schmidt 1907 (Gram-Schmidt); von Neumann 1929-32 *Mathematische
  Grundlagen der Quantenmechanik* (modern axiomatic).
- **Multi-variable differential** (9): Cartan 1899-1900 (intrinsic
  differential); Dieudonné 1960 *Foundations of Modern Analysis*.
- **IFT / inverse function theorem** (11): Dini 1877; Goursat 1903.
- **Linear ODE** (14): Euler 1739-1743; d'Alembert 1747.
- **Matrix exponential / systems** (15): Lagrange 1762-1765;
  Peano 1888 (rigorous matrix exponential).
- **Multiple integral / Fubini** (17-18): Riemann 1854; Fubini 1907;
  Tonelli 1909.
- **Change of variables** (19): Jacobi 1841 *De determinantibus
  functionalibus*.

**Notation crosswalk.** Apostol's notation is mostly aligned with
modern Codex conventions ($\mathbb{R}^n$, $\nabla f$, $J_f$, $\det A$,
$\langle \cdot, \cdot \rangle$). Distinctive: bold $\mathbf{a}$ for
vectors (Babel Bible prefers italic $a$ except in physics contexts); $|A|$
sometimes interchangeable with $\det A$. No `notation/apostol-vol2.md`
strictly needed; alignment can be handled in each new unit's notation
discussion.

**DAG edges to add.** New prerequisites for the priority-1+2 batch:

- `01.01.04` ← `01.01.03-vector-space`
- `01.01.05` ← `01.01.04`; → `03.02.01-smooth-manifold` (tangent map);
  → `02.05.02` (differential as linear map)
- `01.01.06` ← `01.01.05`
- `01.01.07` (determinants) ← `01.01.06`; → `03.04.02-differential-forms`
  (top form construction); → `01.01.08`
- `01.01.08` (eigenvalues) ← {`01.01.07`, `01.01.06`}; →
  `02.06.02-linear-ode-constant-coefficients`; →
  `02.06.03-systems-matrix-exponential`; →
  `02.11.03-unbounded-self-adjoint`; → `07.04.01-cartan-weyl-classification`
- `01.01.09` (inner-product / spectral) ← {`01.01.08`,
  `02.11.07-inner-product-space`}; → `01.01.15-bilinear-quadratic-form`;
  → `03.05.09-curvature` (sectional curvature); → `03.09.08-dirac-operator`
- `02.05.01` (limits) ← `01.01.05` (linear map context)
- `02.05.02` (differential) ← {`02.05.01`, `01.01.05`, `01.01.06`}; →
  `03.02.01-smooth-manifold`
- `02.05.03` (chain rule) ← `02.05.02`
- `02.05.04` (IFT / inverse function theorem) ← {`02.05.03`,
  `02.11.04-banach-spaces` for Banach fixed-point}; →
  `03.02.01-smooth-manifold` (regular-value theorem)
- `02.05.05` (Taylor / extrema) ← {`02.05.03`, `01.01.09` for Hessian
  spectral analysis}
- `02.06.01-03` (ODEs) ← `01.01.08`
- `02.10.01` (line integral) ← `02.05.03`
- `02.10.02-04` (multiple integral / Fubini / change of variables) ←
  {`02.05.03`, `01.01.07-determinants`}
- `02.10.04` → `03.04.03-integration-on-manifolds` (the modern
  reformulation)
- `02.10.05-06` (surface integral / vector calculus identities) ←
  {`02.10.04`, `03.04.04-exterior-derivative` for the bridge}

**Composite Apostol-Vol-2 + Shilov batch recommendation.** Shilov
*Linear Algebra* (FT 1.01) is Tier-α and shares the linear-algebra
spine with Apostol Vol 2 Chapters 1-5 entirely. **Items 1-7 of this
plan also constitute the bulk of the Shilov priority-1 batch.**
Defer the Shilov audit to the same campaign window so that these
heavy units are produced once and serve both equivalences. Hoffman-Kunze
and Lang *Algebra* (Tier-α 3.01) overlap with item 25 (Jordan form)
and items 1-6 — produce in synchronicity.

**Composite with Apostol Vol 1 (FT 0.2)**: Apostol Vol 1 covers
single-variable calculus and would supply prerequisites in `00-precalc`
/ `02.0X-single-variable-analysis`. Vol 1 and Vol 2 should be planned
adjacent: the §0 prerequisites slot is a single coherent foundational
batch.

---

## §5 What this plan does NOT cover

- **Probability theory** (Apostol Ch. 13-15). Deferred until a
  measure-theory chapter exists in `02.*`. Apostol's elementary-form
  treatment (set-function-based, Kolmogorov axioms, discrete +
  continuous random variables, expectation, Chebyshev, weak law of
  large numbers) is a self-contained pre-measure-theoretic introduction;
  it is left **P4 / out of scope** here. Revisit when probability
  theory enters Codex via the Diaconis (Tier-γ 3.16) or Tao
  *Measure Theory* expansion.
- **Numerical analysis** (Apostol Ch. 16). Deliberately **out of
  scope** for the FT spine. Codex covers no numerical analysis;
  Lagrange interpolation, Newton-Cotes, Newton's method, fixed-point
  iteration are off-curriculum. Defer indefinitely.
- **Apostol Vol 1** material (single-variable calculus,
  $\epsilon$-$\delta$ rigorous limits, Riemann integral on $\mathbb{R}$,
  series, Taylor's theorem in one variable). Vol 1 is FT 0.2 and gets
  its own audit; some Vol 2 units (`02.05.01` limits, `02.05.05`
  Taylor) reference Vol 1 prerequisites.
- **Line-number-level inventory** of every theorem / exercise across
  Apostol Vol 2's 800 pages. Defer unless priority-1+2 expands. The
  ~2400 exercises require dedicated exercise-pack production —
  items 27-30 are placeholder packs of ~30-50 problems each, *not*
  full exercise reproduction.
- **General Picard-Lindelöf existence-uniqueness for nonlinear ODEs**
  (Apostol's Ch. 6 only treats the linear case rigorously; the
  general case is in Arnold *ODEs* and Coddington-Levinson). Defer
  to Arnold *ODEs* batch.
- **Full Jordan-form proof** (Apostol gives partial; Hoffman-Kunze
  / Lang fill it). Item 25 is priority-3 / optional.
- **Functional analysis** (Banach / Hilbert space theory in
  infinite dimensions). Babel Bible's `02.11.*` already covers this, at
  greater depth than Apostol Vol 2 reaches. No deepening required
  on that side.
- **Differential forms / manifold-form Stokes** (Apostol Ch. 12 stays
  classical; the modern manifold treatment is `03.04.*` and is already
  shipped). Items 22-24 are [ENRICH]-only cross-link additions, not
  new manifold-side content.
- **Tensor analysis / curvilinear coordinates** (Apostol Ch. 12
  appendix touches this; full treatment is in Sternberg /
  Frankel / Lovelock-Rund — not Apostol's central scope).
- **Modern multi-variable analysis** beyond Apostol's 1969 vintage
  (Lebesgue integral, distributions, Sobolev spaces). Out of scope;
  in `02.11.*` / future measure-theory chapter.

---

## §6 Acceptance criteria for FT equivalence (Apostol Vol 2)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, Apostol Vol 2
is at equivalence-coverage when:

- ≥95% of Apostol Vol 2's named theorems (in Chapters 1-12) map to
  Babel Bible units **at Apostol-equivalent proof depth** (currently ~15%;
  after priority-1 this rises to ~55%; after priority-1+2 to ~80%;
  after priority-3 deepenings to ~92% — modulo deliberate-out-of-scope
  Chapters 13-16).
- ≥80% of Apostol Vol 2's exercises (Chapters 1-12) have a Codex
  equivalent. **This is the largest single exercise-layer gap on the
  Fast Track.** Currently ~1%; closing this requires items 27-30
  (priority-3 exercise packs) plus ongoing per-unit exercise
  densification. Realistic path-to-≥80% needs an explicit follow-up
  Apostol-Vol-2-exercise-pack pass beyond items 27-30.
- ≥90% of Apostol Vol 2's worked examples (Chapters 1-12) are
  reproduced in some Babel Bible unit. Currently ~5%; the priority-1+2
  batch's mandatory worked-example inclusions (matrix computations,
  Jacobian computations, ODE solutions, change-of-variables in polar
  / cylindrical / spherical, Lagrange-multiplier examples) bring this
  to ~70%; densification to ~90% is part of the per-unit production
  spec, not a separate task.
- Notation alignment recorded inline in the new units (no separate
  `notation/apostol-vol2.md` strictly required; alignment with modern
  conventions is the default).
- For every chapter dependency in Apostol Vol 2 (Ch. 1 → Ch. 2 →
  Ch. 3 → Ch. 4 → Ch. 5; Ch. 5 → Ch. 6 → Ch. 7; Ch. 1-5 → Ch. 8-9;
  Ch. 8-9 → Ch. 10-12), there is a corresponding `prerequisites`
  arrow chain in Babel Bible's DAG. The linear-algebra → multi-variable-
  differentiation → vector-calculus chain in particular must be
  unbroken after the priority-1+2 batch.
- Pass-W weaving connects the new units (`01.01.04-12`,
  `02.05.01-05`, `02.06.01-03`, `02.10.01-06`) to the existing
  `03.02.01-smooth-manifold`, `03.04.*` differential-forms units,
  and the `02.11.*` functional-analysis chapter via lateral
  connections. The classical-vs-modern bridge (item 21 + items
  22-24) is the single most pedagogically important weaving lateral.

The 12 priority-1 items (items 1-12) close the load-bearing-linear-
algebra-and-multi-variable-differentiation gap that **every other
Codex strand silently assumes**. Priority-2 items (13-24) open the
ODE and classical-vector-calculus chapters and provide the [ENRICH]
hooks into the existing manifold-form Stokes machinery. Priority-3
items (25-31) are linear-algebra depth completions plus the (large)
exercise pack. Priority-4 items (32-33) are deferred / out-of-scope.

**Honest scope.** The largest single Tier-α equivalence gap. Codex
01-foundations / 02-analysis is structurally undersized relative to
the foundational role these chapters play in every downstream strand;
Apostol Vol 2 production is **prerequisite work for the whole Fast
Track campaign**. Once shipped, downstream books (Hatcher, Bott-Tu,
Sternberg, Lawson-Michelsohn, Cannas, Donaldson, Arnold, Lang, Shilov)
all gain explicit linear-algebra and multi-variable-calculus
prerequisites instead of silent assumptions.

**Largest single Apostol-Vol-2-distinctive value-add:** the
**linear-algebra spine** (items 1-7). Codex has no rank-nullity, no
matrix algebra, no determinants, no eigenvalues, no spectral theorem
as named units. Producing them is a one-time foundational investment
with the highest leverage of any priority-1 batch in the campaign.

**Composite recommendation.** Plan and produce **Apostol Vol 1 + Vol 2
+ Shilov + Lang Algebra** as a synchronised §0 / §1 prerequisite-
foundation batch. The four books overlap heavily on linear-algebra
and single/multi-variable analysis; producing the foundational units
once and reusing across all four equivalence sign-offs is the
correct campaign sequencing. After that joint foundation lands, all
subsequent Tier-α / β audits can drop their "linear algebra silently
assumed" caveats and demand named-unit prerequisites.
