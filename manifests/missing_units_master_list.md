# Missing Units — Master Catalogue (Math + Physics)

**Purpose:** every math + physics unit that is missing from Babel Bible relative to the BRIEF.md promise (high-school algebra → graduate research readiness, anchored to canonical undergraduate + graduate textbooks).

**Generated:** 2026-05-28 by orchestrator audit (Claude Opus 4.7 1M ctx).

**Snapshot at generation:** 1126 shipped, 67 queued, 92/92 books audited.

**Priority key:**
- **P1** — undergrad-blocking. Closes a hole in the canonical sequence that downstream units depend on. Build first.
- **P2** — graduate-track standard material. Build next.
- **P3** — frontier / specialty. Build last or defer to v2.

**★** = highest leverage in its block (anchors the next batch).

**Numbers in parentheses** = approximate Master-tier word count target.

---

## A. Structural fixes (do before producing more)

These are not new units. They are repository-structure bugs that will compound as production continues. Fix first.

1. **ch03 directory split.** `content/03-modern-geometry/` and `content/03-differential-geometry/` both hold ch03 units; some unit IDs (e.g., `03.02.01`, `03.05.06+`, `03.12.24+`) exist in *both* directories with different content. Pick one canonical directory and merge — recommendation: keep `03-modern-geometry/` as canonical and move/dedupe everything from `03-differential-geometry/`.
2. **ch04 sub-chapter prefix duplication.** `04-curves` + `04-riemann-roch` (both 04 prefix); `05-divisors` + `05-surfaces` (both 05 prefix). Renumber to unique prefixes.
3. **ch24 vs ch25 logic duplication.** `24-logic/` (8 sub) and `25-logic/` (4 sub) — pick canonical numbering. `24-numerical-pde/` also uses ch24. Resolve.
4. **ch08 rename.** Currently labeled `08-stat-mech` but contents are statistical field theory / Euclidean QFT (path integral, φ^4, Wightman, lattice gauge, Wick rotation). Rename to `08-statistical-field-theory`. The actual undergrad stat-mech is ch11.
5. **ch05 directory naming.** Sub-chapters inconsistently prefixed: `09-kam` vs. `almost-complex` (no prefix). Normalize all sub-chapters to `NN-name` format.
6. **`content/_unknown/`** has 20 units — these need to be reclaimed into their canonical chapters or deleted.
7. **ch01 sub-chapter duplication.** `01-foundations/` has `02-algebra/` AND `02-groups/` — both prefix 02. Merge or renumber.

---

# MATHEMATICS

## ch00 Precalc — COMPLETE

Already at 25 units. Optional additions:

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 00.13.03 | Introduction to proof: direct, contrapositive, contradiction, induction | P2 | Velleman, *How to Prove It* |

---

## ch01 Foundations — middle layer missing

### 01.01 Linear algebra (12 shipped, gaps at .06, .10, .14, .16, .17)

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 01.01.06 | Matrix algebra: multiplication, transpose, trace, rank by row reduction | P1 ★ | Axler §3 |
| 01.01.10 | Cayley-Hamilton theorem + minimal polynomial | P1 ★ | Axler §8 / Lang XV |
| 01.01.14 | Change of basis + similarity + matrix representation of linear maps | P1 ★ | Axler §3 |
| 01.01.16 | Orthogonal projection + orthogonal complement + Gram matrix | P1 | Axler §6 |
| 01.01.17 | Least-squares problem + Moore-Penrose pseudoinverse | P1 | Trefethen-Bau |
| 01.01.18 | Operator norm + condition number + numerical stability | P2 | Trefethen-Bau |
| 01.01.19 | Tensor product of vector spaces: bilinear universal property | P2 | Lang XVI |

### 01.02 Algebra / groups (foundation algebra middle is wildly incomplete)

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~01.02.06~~ | ~~Ring + ring homomorphism + ideal~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Lang II |
| ~~01.02.07~~ | ~~Polynomial ring + PID + UFD + Euclidean domain~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Lang II |
| 01.02.09 | Module over a ring + free + projective + injective module | P1 ★ | Lang III |
| 01.02.13 | Structure theorem for finitely-generated modules over a PID | P1 ★ | Lang III |
| 01.02.14 | Galois theory: Galois extension + fundamental theorem | P1 ★ | Lang VI |
| 01.02.15 | Solvability by radicals + Abel-Ruffini theorem | P1 | Lang VI |
| 01.02.18 | Characteristic + finite fields F_q + Frobenius automorphism | P1 | Lang V |
| 01.02.21 | Symmetric polynomial functions + Newton's identities | P2 | Macdonald |
| 01.02.23 | Integral extensions + Noether normalization lemma | P2 | Atiyah-Macdonald |
| 01.02.24 | Hilbert Nullstellensatz (algebraic side) | P1 | Atiyah-Macdonald |
| 01.02.25 | Smith normal form + elementary divisors | P2 | Lang III |
| 01.02.26 | Quaternion algebra + Cayley-Dickson construction | P2 | Lang IX |
| 01.02.27 | Group cohomology basics + group extensions + H^2 | P2 | Brown |
| 01.02.28 | Burnside lemma + Pólya enumeration | P3 | Stanley EC1 |
| 01.02.29 | Free modules + finitely-presented modules | P2 | Lang III |

---

## ch02 Analysis — graduate-top, undergrad holes

### 02.01 Topology gaps

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 02.01.03 | Basis + subbasis + product topology | P1 ★ | Munkres §13-19 |
| 02.01.04 | Connectedness + path connectedness + components | P1 ★ | Munkres §23-25 |
| 02.01.10 | Compactness: Heine-Borel + Bolzano-Weierstrass + Tychonoff | P1 ★ | Munkres §26-27 |
| 02.01.11 | Separation axioms + Urysohn lemma + Tietze extension | P1 | Munkres §31-35 |
| 02.01.12 | Stone-Čech + one-point compactification | P2 | Munkres §38 |
| 02.01.13 | Baire category theorem | P1 | Munkres §48 |
| 02.01.14 | Paracompactness + partitions of unity | P2 | Lee TM §13 |
| 02.01.15 | Topological manifolds + topological vs smooth | P2 | Lee TM §3 |

### 02.02 Real numbers

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 02.02.02 | Construction of R: Dedekind cuts | P2 | Rudin Ch1 appendix |
| 02.02.03 | Construction of R: Cauchy completion | P2 | Rudin Ch3 |
| 02.02.04 | Sup/inf, Archimedean property, density of Q | P1 | Rudin §1.20 |

### 02.03 Sequences-series gaps

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 02.03.01 | Sequences + limit definition + limit theorems | P1 ★ | Rudin §3 |
| 02.03.04 | Monotone convergence + lim sup / lim inf | P1 | Rudin §3.13-3.19 |
| 02.03.05 | Uniform convergence + Weierstrass M-test + uniform-limit theorems | P1 ★ | Rudin §7 |
| 02.03.06 | Power series + Abel's theorem + radius of convergence | P1 | Rudin §3.30+ |
| 02.03.07 | Conditional vs absolute convergence + Riemann rearrangement | P2 | Rudin §3.49 |

### 02.04 Integration gaps

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 02.04.02 | Riemann integral: partition + upper/lower sum + Riemann criterion | P1 ★ | Rudin §6 |
| 02.04.05 | Mean-value theorems for integrals | P2 | Apostol |
| 02.04.07 | Integration by parts + substitution rule | P1 | Apostol |
| 02.04.08 | Change of variables in R^n + Jacobian determinant | P1 ★ | Spivak Calc on Manifolds |
| 02.04.09 | Fubini's theorem for Riemann integrals | P2 | Spivak CoM |

### NEW SUB-CHAPTER — 02.07 Lebesgue / measure theory ★★★

The single biggest math hole in the project. The Lebesgue side of analysis is entirely missing.

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~02.07.01~~ | ~~σ-algebra + measurable space + Borel σ-algebra~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Folland §1.2 |
| ~~02.07.02~~ | ~~Lebesgue outer measure + Carathéodory construction~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Folland §1.4 |
| ~~02.07.03~~ | ~~Measurable functions + simple functions + Egorov + Lusin~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Folland §2.1 |
| ~~02.07.04~~ | ~~Lebesgue integral + monotone convergence theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Folland §2.2 |
| ~~02.07.05~~ | ~~Fatou's lemma + dominated convergence theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Folland §2.2 |
| ~~02.07.06~~ | ~~L^p spaces + Hölder + Minkowski + completeness~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Folland §6 |
| ~~02.07.07~~ | ~~Fubini-Tonelli for product measures~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Folland §2.5 |
| ~~02.07.08~~ | ~~Absolute continuity + Radon-Nikodym theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Folland §3.2 |
| 02.07.09 | Lebesgue differentiation + Lebesgue density | P2 | Folland §3.4 |
| 02.07.10 | Hausdorff measure + Hausdorff dimension | P2 | Folland §11 |
| 02.07.11 | Signed measures + Hahn + Jordan decompositions | P2 | Folland §3.1 |
| 02.07.12 | Riesz representation theorem (positive linear functionals on C_c) | P2 | Folland §7.2 |

### 02.10 Fourier analysis / harmonic analysis ★★★

Currently only one unit (and it's about surface integrals — mis-located).

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~02.10.01~~ | ~~Fourier series + Riemann-Lebesgue lemma~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Stein-Shakarchi I |
| 02.10.02 | Fourier series pointwise: Dirichlet + Fejér kernels | P1 | Stein-Shakarchi I |
| 02.10.03 | Fourier series L^2: Parseval + completeness | P1 | Stein-Shakarchi I |
| ~~02.10.04~~ | ~~Fourier transform on R^n + Plancherel theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Stein-Shakarchi I |
| 02.10.06 | Schwartz space + tempered distributions | P1 ★ | Hörmander I |
| 02.10.07 | Convolution + Young's inequality | P1 | Stein-Shakarchi |
| 02.10.08 | Paley-Wiener theorem | P2 | Stein-Shakarchi |
| 02.10.09 | Poisson summation formula | P2 | Stein-Shakarchi |
| 02.10.10 | Hausdorff-Young + Riesz-Thorin interpolation | P2 | Folland real anal §6.5 |
| 02.10.11 | Hardy-Littlewood maximal function | P2 | Stein, Singular Integrals |
| 02.10.12 | Calderón-Zygmund theory introduction | P3 | Stein, SI |
| 02.10.13 | Wavelet introduction + Daubechies wavelets | P3 | Daubechies, *Ten Lectures* |
| 02.10.14 | Discrete Fourier transform + FFT algorithm | P2 | Trefethen-Bau §8 |

### 02.11 Functional analysis additions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~02.11.02~~ | ~~Hahn-Banach theorem (analytic + geometric)~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Brezis §1 |
| ~~02.11.09~~ | ~~Open mapping + closed graph theorems~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Brezis §2 |
| 02.11.10 | Uniform boundedness principle (Banach-Steinhaus) | P1 | Brezis §2 |
| 02.11.11 | Weak + weak-* topology + Banach-Alaoglu | P1 | Brezis §3 |
| 02.11.12 | Spectral theory of compact operators + Fredholm alternative | P1 | Brezis §6 |
| 02.11.14 | Riesz representation for Hilbert spaces | P1 | Brezis §5 |
| 02.11.15 | C* algebras + Gelfand-Naimark | P2 | Conway |
| 02.11.16 | von Neumann algebras introduction | P3 | Murphy |
| 02.11.17 | Distributions on a manifold (basic theory) | P2 | Hörmander I |

### 02.12 ODE additions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 02.12.06 | Picard-Lindelöf existence + uniqueness | P1 ★ | Arnold ODE |
| 02.12.07 | Continuous dependence + Grönwall inequality | P2 | Arnold ODE |
| 02.12.09 | Sturm-Liouville theory + boundary value problems | P1 | Coddington-Levinson |
| 02.12.11 | Hilbert-Schmidt eigenvalue theory of compact symmetric operators | P2 | Reed-Simon I |
| 02.12.15 | Floquet theory + Hill equation + Mathieu functions | P2 | Magnus-Winkler |
| 02.12.16 | Hopf bifurcation theorem | P2 | Guckenheimer-Holmes |

### NEW SUB-CHAPTER — 02.13 PDE ★★★

PDE proper is currently spread across ch02.14 (microlocal) + ch24 (numerical FEEC) but no actual PDE chapter exists.

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~02.13.01~~ | ~~Laplace equation + harmonic functions + max principle + mean-value~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Evans §2 |
| ~~02.13.02~~ | ~~Poisson equation + fundamental solution + Newtonian potential~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Evans §2 |
| ~~02.13.03~~ | ~~Heat equation + heat kernel + Duhamel's principle~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Evans §2 |
| ~~02.13.04~~ | ~~Wave equation: d'Alembert + spherical means + Huygens~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Evans §2 |
| 02.13.05 | Classification of 2nd-order PDE: elliptic / parabolic / hyperbolic + characteristics | P1 | Evans §1 |
| 02.13.06 | Energy methods for hyperbolic PDE | P1 | Evans §7 |
| 02.13.07 | Method of separation of variables + eigenfunction expansion | P1 | Strauss |
| 02.13.08 | Variational methods + Dirichlet principle | P1 | Evans §8 |
| 02.13.09 | Sobolev embedding theorem | P1 | Evans §5 |
| 02.13.10 | Schauder estimates for 2nd-order elliptic | P2 | Gilbarg-Trudinger |
| 02.13.11 | Method of characteristics for 1st-order PDE | P2 | Evans §3 |
| 02.13.12 | Hyperbolic conservation laws + entropy solutions + Rankine-Hugoniot | P2 | Evans §11 |
| 02.13.13 | Burgers + KdV equation: dispersive + dissipative | P2 | Drazin-Johnson |

---

## ch03 Modern geometry — OVERSATURATED, skip new units

Already 160 units. Only structural fixes needed (see §A). Further additions deferred to v2.

If pushed: complete the 03.10 CFT sub-chapter (currently 1 unit, surrounding territory expects much more).

---

## ch04 Algebraic geometry — basic plumbing thin

### 04.01 Sheaves

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 04.01.05 | Ringed space + locally ringed space | P1 | Hartshorne II.1 |
| 04.01.06 | Sheaf of modules + locally free sheaf of finite rank | P2 | Hartshorne II.5 |
| 04.01.07 | Étalé space + germ + adjoint properties | P2 | Hartshorne II.1 |

### 04.02 Schemes

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 04.02.06 | Separated + proper morphisms + valuative criteria | P1 | Hartshorne II.4 |
| 04.02.08 | Integral / reduced / irreducible schemes | P1 | Vakil |
| 04.02.09 | Noetherian schemes + dimension theory | P2 | Hartshorne II.3 |
| 04.02.11 | Galois descent + fpqc topology basics | P3 | SGA |

---

## ch05 Symplectic — no new P1 units (just dir cleanup)

---

## ch06 Riemann surfaces — COMPLETE

---

## ch07 Representation theory — COMPLETE

---

## ch21 Number theory — INVERTED, MAJOR FILL ★★★

The most acute math gap. We have Langlands but no quadratic reciprocity. All units below are P1 unless noted.

### NEW SUB-CHAPTER — 21.01 Elementary number theory

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~21.01.01~~ | ~~Divisibility + GCD + Bézout + Euclidean algorithm~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Ireland-Rosen §1 |
| ~~21.01.02~~ | ~~Primes + fundamental theorem of arithmetic + infinitude~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | I-R §1 |
| ~~21.01.03~~ | ~~Congruences + Chinese remainder theorem + Z/nZ structure~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | I-R §3 |
| ~~21.01.04~~ | ~~Fermat's little + Euler's + Wilson's theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | I-R §3 |
| ~~21.01.05~~ | ~~Primitive roots + structure of (Z/nZ)^×~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | I-R §4 |
| ~~21.01.06~~ | ~~Quadratic residues + Legendre symbol + Euler's criterion~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | I-R §5 |
| ~~21.01.07~~ | ~~Quadratic reciprocity law (Gauss)~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | I-R §5 |
| ~~21.01.08~~ | ~~Pell equation + continued fractions~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Hardy-Wright |
| 21.01.09 | Linear Diophantine + Pythagorean triples + sum of two squares | P1 | I-R §17 |
| 21.01.10 | Liouville-Roth-Thue + Diophantine approximation | P2 | Cassels |
| 21.01.11 | Gauss sums + Jacobi sums + character sums | P2 | I-R §8 |
| 21.01.12 | Arithmetic functions + Möbius inversion | P2 | Apostol AN |
| 21.01.13 | Dirichlet convolution | P3 | Apostol AN |

### NEW SUB-CHAPTER — 21.02 Algebraic number theory

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 21.02.01 | Number field + ring of integers O_K + integral basis | P1 ★ | Marcus §2 |
| 21.02.02 | Norm + trace + discriminant of a number field | P1 | Marcus §2 |
| 21.02.03 | Unique factorization of ideals in Dedekind domains | P1 ★ | Marcus §3 |
| 21.02.04 | Ramification + decomposition + inertia + Frobenius | P1 | Marcus §4 |
| 21.02.05 | Class group + finiteness (Minkowski bound) | P1 ★ | Marcus §5 |
| 21.02.06 | Dirichlet unit theorem | P1 | Marcus §5 |
| 21.02.07 | p-adic numbers Q_p + Ostrowski's theorem | P1 ★ | Koblitz, *p-adic* |
| 21.02.08 | Hensel's lemma + Newton polygons | P1 | Koblitz |
| 21.02.09 | Local fields + Krasner's lemma | P2 | Neukirch II |
| 21.02.10 | Adeles + ideles | P2 | Neukirch VI |
| 21.02.11 | Class field theory survey (local + global) | P2 | Cassels-Fröhlich |
| 21.02.12 | Cyclotomic fields + Kronecker-Weber | P1 | Washington |

### 21.03 Analytic number theory expansion

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 21.03.04 | Prime number theorem + zero-free region | P1 ★ | Davenport |
| 21.03.05 | Dirichlet's theorem on primes in AP | P1 | Davenport |
| 21.03.06 | Selberg-Erdős elementary PNT proof | P2 | Apostol AN |
| 21.03.07 | Riemann hypothesis statement + equivalences + consequences | P2 | Edwards |
| 21.03.08 | Sieve methods: Brun + Selberg + large sieve | P2 | Iwaniec-Kowalski |
| 21.03.09 | Vinogradov three-primes theorem | P3 | Vaughan |
| 21.03.10 | Hardy-Littlewood circle method | P3 | Vaughan |

---

## ch24 / 25 Logic — needs canonicalization + foundational fills

(Decide canonical chapter first — see §A.3.)

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 25.05.01 | Gödel's incompleteness theorems (first + second) | P1 ★ | Smullyan |
| 25.05.02 | Recursive functions + Turing machines + Church-Turing | P1 | Sipser |
| 25.05.03 | Peano arithmetic + non-standard models | P2 | Kaye |
| 25.05.04 | Modal logic K + S4 + S5 + Kripke semantics | P2 | Hughes-Cresswell |
| 25.05.05 | Lambda calculus + simply-typed lambda calculus | P2 | Pierce TAPL |
| 25.05.06 | Cut elimination + sequent calculus | P3 | Gentzen / Troelstra |
| 25.05.07 | ZFC axioms + ordinals + cardinals | P1 | Jech |
| 25.05.08 | Continuum hypothesis + forcing introduction | P3 | Kunen |

---

## ch24 Numerical PDE / numerical analysis — narrow

Decide whether ch24 is "FEEC only" or "numerical methods" broadly. If broadly:

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 24.05.01 | Finite differences for ODE: Euler + Runge-Kutta | P1 | Iserles |
| 24.05.02 | Multistep methods: Adams-Bashforth / Adams-Moulton | P2 | Iserles |
| 24.05.03 | Stiff ODE + implicit methods + BDF | P2 | Hairer-Wanner |
| 24.06.01 | Numerical linear algebra: QR + LU + Cholesky | P1 | Trefethen-Bau |
| 24.06.02 | SVD algorithm + power iteration | P1 | Trefethen-Bau |
| 24.06.03 | Krylov methods: CG + GMRES | P1 ★ | Trefethen-Bau |
| 24.06.04 | Preconditioning + multigrid | P2 | Briggs |
| 24.06.05 | Iterative eigenvalue: Arnoldi + Lanczos | P2 | Saad |
| 24.07.01 | Spectral / pseudospectral methods | P2 | Trefethen, Spectral |
| 24.08.01 | Monte Carlo integration | P2 | Press NR |
| 24.08.02 | Markov chain Monte Carlo (Metropolis, HMC) | P2 | Liu MC |
| 24.09.01 | Approximation theory: Chebyshev + Lagrange + min-max | P2 | Trefethen ATAP |

---

## ch26 Statistics — skeletal, needs full build-out

### 26.02 Probability proper

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.02.02 | Conditional probability + Bayes' theorem | P1 ★ | Ross |
| 26.02.03 | Independence (events + random variables) | P1 | Ross |
| 26.02.04 | Kolmogorov axioms + probability space | P1 | Billingsley |
| 26.02.05 | Measure-theoretic probability + filtrations | P1 ★ | Billingsley |
| 26.02.06 | Law of large numbers (weak + strong) | P1 ★ | Billingsley |
| 26.02.07 | Central limit theorem | P1 ★ | Billingsley |
| 26.02.08 | Borel-Cantelli lemmas | P2 | Billingsley |
| 26.02.09 | Martingales + optional stopping | P2 | Williams |
| 26.02.10 | Brownian motion + Wiener measure | P2 | Mörters-Peres |
| 26.02.11 | Markov chains: discrete-time | P1 | Norris |
| 26.02.12 | Itô integral + Itô formula + SDE | P2 | Øksendal |

### 26.03 Random variables / distributions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.03.02 | Discrete distributions: Bernoulli, binomial, Poisson, geometric | P1 | Ross |
| 26.03.03 | Continuous distributions: uniform, exponential, normal, gamma, beta | P1 | Ross |
| 26.03.04 | Joint / marginal / conditional distributions | P1 | Ross |
| 26.03.05 | Moment generating + characteristic functions | P1 | Billingsley |
| 26.03.06 | Order statistics | P2 | Casella-Berger |

### 26.05 Inference

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.05.02 | Likelihood ratio test + Neyman-Pearson lemma | P1 | Casella-Berger |
| 26.05.03 | Maximum likelihood estimation + Cramér-Rao bound | P1 ★ | Casella-Berger |
| 26.05.04 | Sufficiency + completeness + UMVUE (Rao-Blackwell, Lehmann-Scheffé) | P1 | Casella-Berger |

### 26.06 Regression expansions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.06.02 | Multivariate regression + Gauss-Markov theorem | P1 | Hastie-Tibshirani-Friedman |
| 26.06.03 | Logistic regression + GLMs | P2 | McCullagh-Nelder |
| 26.06.04 | Regression diagnostics + residual analysis | P2 | Faraway |

### 26.07 Bayesian expansions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.07.02 | Conjugate priors | P1 | Gelman BDA |
| 26.07.03 | MCMC: Metropolis-Hastings + Gibbs | P2 | Gelman BDA |
| 26.07.04 | Variational Bayes | P3 | Bishop |

### 26.08 Nonparametric expansions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.08.02 | Empirical distribution + Glivenko-Cantelli | P1 | van der Vaart |
| 26.08.03 | Bootstrap | P1 | Efron-Tibshirani |
| 26.08.04 | Kernel density estimation | P2 | Wasserman |

### NEW SUB-CHAPTER — 26.11 Information theory

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.11.01 | Entropy + mutual information | P1 ★ | Cover-Thomas |
| 26.11.02 | Shannon source coding theorem | P1 | Cover-Thomas |
| 26.11.03 | Channel capacity + Shannon noisy channel coding | P1 | Cover-Thomas |
| 26.11.04 | Kullback-Leibler divergence + cross-entropy | P1 | Cover-Thomas |
| 26.11.05 | Asymptotic equipartition + typical sequences | P2 | Cover-Thomas |
| 26.11.06 | Rate-distortion theory | P3 | Cover-Thomas |

### NEW SUB-CHAPTER — 26.12 Statistical learning theory

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 26.12.01 | PAC learning + VC dimension | P2 | Vapnik |
| 26.12.02 | Empirical risk minimization + bias-variance | P2 | Vapnik |
| 26.12.03 | Concentration inequalities: Hoeffding + Chernoff + McDiarmid | P2 | Boucheron-Lugosi-Massart |
| 26.12.04 | Rademacher complexity | P3 | BLM |
| 26.12.05 | Kernel methods + RKHS | P3 | Schölkopf-Smola |

---

## NEW CHAPTER — Combinatorics (proposed ch37, defer to v2)

If a v2 combinatorics chapter is added:

| ID | Title | Pri |
|---|---|---|
| 37.01.* | Counting principles, permutations, combinations | P1 |
| 37.02.* | Inclusion-exclusion principle | P1 |
| 37.03.* | Generating functions | P1 |
| 37.04.* | Recurrence relations + master theorem | P1 |
| 37.05.* | Graph theory: connectivity, trees, matching, planar, Euler/Hamilton | P1 |
| 37.06.* | Ramsey theory | P2 |
| 37.07.* | Extremal combinatorics + probabilistic method | P2 |
| 37.08.* | Algebraic combinatorics + Young tableaux + RSK | P2 |
| 37.09.* | Catalan + lattice paths + species | P2 |
| 37.10.* | Posets + Möbius functions | P2 |
| 37.11.* | Design theory + finite geometries | P3 |

---

# PHYSICS

## ch08 Statistical field theory — COMPLETE (just rename)

---

## ch09 Classical mechanics — additions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~09.01.04~~ | ~~Two-body problem + Kepler orbits + Rutherford scattering~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Goldstein §3 |
| 09.01.05 | Rigid body dynamics: inertia tensor + Euler equations + tops + gyroscopes | P1 ★ | Goldstein §5 |
| 09.01.06 | Small oscillations + normal modes + coupled oscillators | P1 ★ | Goldstein §6 |
| 09.01.07 | Driven + damped oscillators + resonance | P1 | Taylor §5 |
| 09.02.03 | D'Alembert principle + constraints + Lagrange multipliers | P2 | Goldstein §2 |
| 09.03.02 | Noether theorem with worked examples | P2 | Goldstein §13 |
| 09.04.03 | Poisson brackets + canonical invariants | P2 | Goldstein §9 |
| 09.05.03 | Generating functions of canonical transformations | P2 | Goldstein §9 |
| 09.06.02 | Liouville integrability + invariant tori | P2 | Arnold §10 |
| 09.07.02 | Fluid mechanics intro: Euler equation + Bernoulli | P1 | LL Fluids §1-2 |
| 09.07.03 | Elasticity intro: stress + strain + Hooke + isotropic | P1 | LL Elasticity §1 |
| 09.07.04 | Navier-Stokes + viscous flow + Reynolds number | P2 | LL Fluids §15 |
| 09.07.05 | Sound waves + acoustic dispersion | P2 | LL Fluids §63 |
| 09.08.02 | Lyapunov exponents + ergodic measures | P2 | Strogatz |
| 09.08.03 | Strange attractors + Lorenz system + Hénon map | P2 | Strogatz |

---

## ch10 Electromagnetism + SR — MAJOR EXPANSION ★★★

### 10.01 Electrostatics

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~10.01.03~~ | ~~Conductors + capacitance + electrostatic energy~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Griffiths Intro EM §2 |
| ~~10.01.04~~ | ~~Dielectrics + polarization P + displacement D~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Griffiths §4 |
| ~~10.01.05~~ | ~~Multipole expansion of static potential~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Griffiths §3.4 / Jackson §4 |
| 10.01.06 | Method of images | P1 | Griffiths §3.2 |
| 10.01.07 | Green's functions for Laplace + Poisson | P2 | Jackson §1.10 |

### 10.02 Magnetostatics

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.02.02 | Vector potential A + gauge freedom + Coulomb gauge | P1 | Griffiths §5.4 |
| 10.02.03 | Magnetic materials: magnetization M + H field | P1 ★ | Griffiths §6 |
| 10.02.04 | Magnetic multipole + magnetic dipole | P1 | Griffiths §5.4 / Jackson §5 |
| 10.02.05 | Boundary conditions + magnetostatic boundary value problems | P2 | Jackson §5 |

### 10.03 Electrodynamics

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.03.02 | Maxwell's equations: integral + differential form + vacuum + media | P1 | Griffiths §7 |
| ~~10.03.03~~ | ~~Energy + momentum: Poynting + Maxwell stress tensor~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Griffiths §8 |
| 10.03.04 | AC circuits + impedance + RLC + resonance + Q factor | P1 ★ | Griffiths §7 / Purcell §8 |

### 10.04 Waves

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.04.03 | Reflection + refraction + Fresnel equations + Brewster | P1 ★ | Griffiths §9 / Hecht |
| 10.04.04 | Polarization of light + Malus + Stokes parameters | P1 | Hecht §8 |
| 10.04.05 | Dispersion + Kramers-Kronig + group velocity | P1 | Jackson §7 |
| 10.04.06 | Waveguides: rectangular + cylindrical + TM/TE modes | P1 ★ | Jackson §8 |
| 10.04.07 | Cavity resonators + Q factor + mode density | P2 | Jackson §8 |
| 10.04.08 | Transmission lines + impedance matching + Smith chart | P2 | Pozar |
| 10.04.09 | Plasma dispersion + Langmuir waves | P2 | Krall-Trivelpiece |

### 10.05 Special relativity

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~10.05.03~~ | ~~Four-velocity + four-momentum + energy-momentum identity~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Rindler / Hartle SR |
| 10.05.04 | Relativistic Doppler + aberration + headlight effect | P1 | Rindler |
| 10.05.05 | Relativistic collisions + Compton + thresholds | P1 | Hartle |
| 10.05.06 | Thomas precession + relativistic angular momentum | P2 | Jackson §11 |
| 10.05.07 | Action principle for relativistic point particle | P2 | LL Classical Fields §8 |

### 10.06 Covariant EM

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.06.02 | EM stress-energy tensor + conservation laws | P1 | LL §32-33 |
| 10.06.03 | Lagrangian formulation of classical EM | P1 | Jackson §12.7 |
| 10.06.04 | Lorentz force from action principle | P1 | Jackson §12 |
| 10.06.05 | Liénard-Wiechert potentials + retarded fields | P1 ★ | Jackson §14 |

### 10.07 Radiation

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.07.02 | Multipole radiation: electric dipole + magnetic dipole + electric quadrupole | P1 ★ | Jackson §9 |
| 10.07.03 | Antenna theory: short dipole + half-wave + arrays | P1 | Jackson §9 |
| 10.07.04 | Scattering: Thomson + Rayleigh + Mie | P1 ★ | Jackson §10 |
| 10.07.05 | Synchrotron radiation: spectrum + polarization | P1 | Jackson §14 |
| 10.07.06 | Cherenkov radiation + Vavilov-Cherenkov spectrum | P2 | Jackson §13 |
| 10.07.07 | Classical bremsstrahlung + radiation reaction | P2 | Jackson §13-16 |
| 10.07.08 | Abraham-Lorentz-Dirac equation + runaway solutions | P2 | Jackson §16 |

### NEW SUB-CHAPTER — 10.08 Optics

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.08.01 | Geometric optics: Snell + lens equation + thin lens | P1 ★ | Hecht §5 |
| 10.08.02 | Thick lenses + matrix optics + cardinal points | P1 | Hecht §6 |
| 10.08.03 | Aberrations: spherical + chromatic + Seidel | P2 | Hecht §6 |
| 10.08.04 | Diffraction: Huygens + Fraunhofer + Fresnel | P1 ★ | Hecht §10 |
| 10.08.05 | Diffraction gratings + spectroscopy | P2 | Hecht §10 |
| 10.08.06 | Interferometry: Michelson + Mach-Zehnder + Fabry-Pérot | P1 | Hecht §9 |
| 10.08.07 | Coherence: temporal + spatial + visibility | P2 | Mandel-Wolf |
| 10.08.08 | Holography | P2 | Hecht §13 |
| 10.08.09 | Nonlinear optics: SHG + parametric processes | P3 | Boyd |
| 10.08.10 | Fiber optics: step-index + graded-index + modes | P3 | Agrawal |
| 10.08.11 | Lasers: stimulated emission + cavity + types | P2 | Siegman |

### NEW SUB-CHAPTER — 10.09 Plasma physics introduction

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 10.09.01 | Debye length + plasma frequency + plasma parameter | P2 | Chen |
| 10.09.02 | Single-particle motion in EM fields + drifts | P2 | Chen |
| 10.09.03 | MHD basics + Alfvén waves | P3 | Krall-Trivelpiece |
| 10.09.04 | Vlasov equation + Landau damping | P3 | Krall-Trivelpiece |

---

## ch11 Statistical mechanics (proper) — MAJOR EXPANSION ★★★

### 11.01 Thermodynamics

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.01.03 | Maxwell relations + Jacobian techniques | P1 | Callen |
| 11.01.04 | Heat capacities + response functions + susceptibilities | P1 ★ | Callen |
| 11.01.05 | Phase transitions + Clausius-Clapeyron + Gibbs phase rule | P1 | Reif §8 |
| 11.01.06 | Third law of thermodynamics + absolute entropy | P2 | Callen §10 |
| 11.01.07 | Engines + refrigerators + Carnot + entropy maximization | P1 | Reif §5 |
| 11.01.08 | Chemical potential + open systems | P1 | Reif §6 |

### 11.02 Kinetic theory

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.02.02 | Boltzmann equation + H-theorem | P1 ★ | Reif §13 / Huang |
| 11.02.03 | Chapman-Enskog + transport coefficients | P1 | Huang |
| 11.02.04 | Brownian motion + Einstein relation | P1 | Reif §15 |
| 11.02.05 | Langevin equation + fluctuation-dissipation (classical) | P2 | Reif §15 |

### 11.03 Ensembles

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.03.02 | Equivalence of ensembles + thermodynamic limit | P1 | Pathria |
| 11.03.03 | Grand canonical ensemble + chemical potential | P1 ★ | Pathria §4 |

### 11.04 Partition functions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.04.02 | Ideal gas + Sackur-Tetrode + equipartition | P1 ★ | Reif §7 |
| 11.04.03 | Maxwell-Boltzmann statistics + classical limit | P1 | Pathria §5 |
| 11.04.04 | Diatomic gas: rotational + vibrational + electronic | P1 | Reif §7 |
| 11.04.05 | Lattice models + binding energies | P2 | Pathria §6 |

### 11.05 Quantum statistics

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~11.05.03~~ | ~~Blackbody radiation + Planck + Stefan-Boltzmann + Wien~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Reif §9 |
| ~~11.05.04~~ | ~~Bose-Einstein condensation + critical temperature~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Pathria §7 |
| ~~11.05.05~~ | ~~Fermi gas: heat capacity + electron specific heat + Pauli paramagnetism~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Reif §11 |
| ~~11.05.06~~ | ~~Photon + phonon gas + Debye model~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | Pathria §7 |
| 11.05.07 | White dwarf + neutron star: degeneracy pressure | P2 | Shapiro-Teukolsky |
| 11.05.08 | Quantum hard-sphere gas + virial expansion | P2 | Pathria §10 |

### 11.06 Phase transitions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.06.02 | Landau theory of phase transitions | P1 ★ | LL Stat Phys 1 §142 |
| 11.06.03 | Mean-field theory + Curie-Weiss | P1 | Pathria §11 |
| 11.06.04 | Critical exponents + scaling hypothesis + universality | P1 | Cardy |
| 11.06.05 | Heisenberg model + ferromagnetism + spin waves | P1 | Ashcroft-Mermin |
| 11.06.06 | Antiferromagnetism + spin-glass | P2 | Mezard-Parisi-Virasoro |
| 11.06.07 | 2D XY model + Kosterlitz-Thouless transition | P2 | Cardy |
| 11.06.08 | Percolation introduction | P2 | Stauffer |

### 11.07 RG additions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.07.02 | Kadanoff block-spin + correlation length | P1 | Cardy |
| 11.07.03 | Linear response + Kubo formula + fluctuation-dissipation | P1 | Reif §15 |

### NEW SUB-CHAPTER — 11.08 Non-equilibrium

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 11.08.01 | Onsager reciprocal relations | P1 | de Groot-Mazur |
| 11.08.02 | Fluctuation theorems: Jarzynski + Crooks | P2 | Seifert review |
| 11.08.03 | Stochastic thermodynamics | P2 | Seifert |
| 11.08.04 | Master equation + Markov processes | P2 | van Kampen |
| 11.08.05 | Fokker-Planck equation | P2 | Risken |

---

## ch12 Quantum — major undergrad-track + entanglement gaps

### 12.02 Formalism additions

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.02.03 | Position + momentum eigenstates + rigged Hilbert space | P1 | Sakurai §1 |
| 12.02.04 | Uncertainty relations: Robertson-Schrödinger | P1 | Sakurai §1 |
| 12.02.05 | Composite systems + tensor product structure | P1 | Sakurai §3 |

### 12.04 1D problems

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.04.03 | Tunneling + WKB matching connection formulas | P2 | Griffiths QM |
| 12.04.04 | Periodic potentials + Bloch theorem + band structure | P1 | Ashcroft-Mermin |
| 12.04.05 | Delta-function potential + bound + scattering states | P2 | Griffiths QM |
| 12.04.06 | Coherent + squeezed states (rehoused from ch03.14) | P1 | Sakurai §2 |

### 12.05 Angular momentum

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~12.05.02~~ | ~~Spherical harmonics + Legendre polynomials~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Sakurai §3 |
| ~~12.05.03~~ | ~~Addition of angular momenta + Clebsch-Gordan~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Sakurai §3 |
| 12.05.04 | Wigner-Eckart theorem | P1 | Sakurai §3 |
| 12.05.05 | Spin in magnetic field + Larmor + spin resonance | P1 | Sakurai §3 |
| 12.05.06 | Spinor / SU(2) rep theory of angular momentum | P2 | Sakurai §3 |

### 12.06 Central force

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.06.02 | Spherical potential well + isotropic oscillator | P1 | Griffiths QM |
| 12.06.03 | Hydrogen atom fine structure + spin-orbit | P1 | Griffiths QM §6 |
| 12.06.04 | Quantum defect + Rydberg states | P2 | Bethe-Salpeter |

### 12.07 Perturbation theory

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.07.03 | Variational method (Rayleigh-Ritz) | P1 | Griffiths QM §7 |
| 12.07.05 | Stark + Zeeman + Paschen-Back | P1 | Bethe-Salpeter |
| 12.07.06 | Hyperfine structure + magnetic dipole interaction | P2 | Bethe-Salpeter |
| ~~12.07.07~~ | ~~Adiabatic theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Born-Fock orig / Griffiths QM §10 |
| ~~12.07.08~~ | ~~Berry phase / geometric phase~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Berry 1984 / Wilczek-Shapere |
| 12.07.09 | Sudden approximation | P2 | Sakurai §5 |

### 12.08 Scattering

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.08.02 | Born approximation + Lippmann-Schwinger | P1 | Sakurai §7 |
| 12.08.03 | Partial waves + phase shifts | P1 | Sakurai §7 |
| 12.08.04 | Inelastic scattering + distorted-wave Born | P2 | Sakurai §7 |
| 12.08.05 | Resonance scattering + Breit-Wigner | P1 | Sakurai §7 |

### 12.09 Identical particles

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.09.02 | Exchange interaction + helium atom | P1 | Griffiths QM §5 |
| 12.09.03 | Hartree-Fock SCF method | P1 | Bransden-Joachain |
| 12.09.04 | Multi-electron atoms + LS coupling + jj coupling | P1 | Bransden-Joachain |
| 12.09.05 | Born-Oppenheimer + diatomic molecules | P1 | Bransden-Joachain |
| 12.09.06 | Slater determinants + second quantization for fermions | P1 | Negele-Orland |

### 12.15 Symmetries

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.15.01 | Time reversal + Kramers degeneracy | P1 | Sakurai §4 |
| 12.15.02 | Parity + discrete symmetry groups | P1 | Sakurai §4 |
| 12.15.03 | CPT theorem | P2 | Streater-Wightman |

### NEW SUB-CHAPTER — 12.17 Quantum information + entanglement ★★★

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~12.17.01~~ | ~~Density matrix + pure + mixed states~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Nielsen-Chuang §2 |
| ~~12.17.02~~ | ~~Entanglement + Schmidt decomposition + entropy~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | NC §2 |
| ~~12.17.03~~ | ~~Bell inequalities + CHSH + Tsirelson~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | NC §2 / Bell 1964 |
| 12.17.04 | EPR paradox + non-locality | P1 | EPR 1935 |
| 12.17.05 | Quantum gates + universal sets | P1 | NC §4 |
| 12.17.06 | No-cloning + no-deletion + no-broadcasting | P1 | Wootters-Zurek |
| ~~12.17.07~~ | ~~Quantum teleportation + superdense coding~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 | NC §2 / Bennett 1993 |
| 12.17.08 | Quantum key distribution: BB84 + E91 | P2 | BB84 / E91 |
| 12.17.09 | Quantum algorithms: Deutsch-Jozsa + Grover + Shor | P2 | NC §5-6 |
| 12.17.10 | Quantum error correction: stabilizer formalism | P2 | NC §10 |
| 12.17.11 | Topological quantum computation introduction | P3 | Kitaev / Nayak |
| 12.17.12 | POVMs + generalized measurements | P1 | NC §2 |
| 12.17.13 | Quantum channels + Kraus + Stinespring | P2 | NC §8 |
| 12.17.14 | Entanglement distillation + entanglement of formation | P2 | Horodecki review |

### NEW SUB-CHAPTER — 12.18 Open quantum systems

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 12.18.01 | Open systems + reduced density matrix + partial trace | P1 | Breuer-Petruccione |
| 12.18.02 | Lindblad / GKLS master equation | P1 ★ | Breuer-Petruccione §3 |
| 12.18.03 | Decoherence + pointer states + einselection | P1 | Zurek review |
| 12.18.04 | Quantum trajectories + stochastic unraveling | P2 | Wiseman-Milburn |
| 12.18.05 | Spin-boson model + dissipation | P2 | Leggett review |

---

## ch13 GR + cosmology — undergrad + cosmology gaps ★★★

### 13.04 Einstein equations

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 13.04.02 | ADM 3+1 decomposition + lapse + shift | P1 ★ | MTW §21 / Wald §10 |
| 13.04.03 | Initial value problem + constraint equations | P1 | Wald §10 |
| 13.04.04 | Energy conditions: weak / strong / dominant / null | P1 ★ | Wald §9 |
| 13.04.05 | Stress-energy of cosmological matter | P1 | Carroll §8 |

### 13.05 Schwarzschild

| ID | Title | Pri | Anchor |
|---|---|---|---|
| ~~13.05.03~~ | ~~Solar-system tests: perihelion + light bending + Shapiro + GP-B~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Will, *TEGP* / Hartle GR §10 |
| ~~13.05.04~~ | ~~Kerr black hole + ergosphere + Penrose process~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Wald §12 |
| 13.05.05 | Reissner-Nordström + Kerr-Newman | P1 | Wald §12 |
| 13.05.06 | Black hole no-hair + uniqueness theorems | P2 | Heusler |

### 13.06 Black holes

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 13.06.02 | Penrose diagrams + conformal structure + Kruskal | P1 ★ | Wald §6 |
| ~~13.06.03~~ | ~~Black hole thermodynamics: 4 laws + Bekenstein-Hawking + area theorem~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Wald §12 |
| ~~13.06.04~~ | ~~Hawking radiation derivation~~ **PRODUCED 2026-05-28 by Claude Opus 4.7 at 28/28** | P1 ★ | Hawking 1975 / Wald QFTCS |
| 13.06.05 | Raychaudhuri equation + focusing | P1 | Wald §9 |
| 13.06.06 | Singularity theorems: Penrose + Hawking-Penrose | P1 | Wald §9 / Hawking-Ellis |
| 13.06.07 | Black hole information paradox | P2 | Mathur review |

### 13.07 GW

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 13.07.02 | GW sources: binary inspiral + ringdown + chirp mass | P1 ★ | Maggiore |
| 13.07.03 | Multipole formula for GW + quadrupole approximation | P1 | MTW §36 |
| 13.07.04 | GW detection: LIGO + interferometry + matched filtering | P1 | Maggiore |
| 13.07.05 | Continuous + stochastic GW backgrounds | P2 | Maggiore II |
| 13.07.06 | Post-Newtonian expansion + effective one-body | P2 | Buonanno-Damour |

### 13.08 Cosmology

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 13.08.02 | Cosmological observations + Hubble + distance ladder | P1 ★ | Dodelson |
| 13.08.03 | Hot Big Bang + Big Bang nucleosynthesis | P1 ★ | Weinberg Cosmology |
| 13.08.04 | CMB physics + acoustic peaks + polarization | P1 ★ | Dodelson |
| 13.08.05 | Linear perturbation theory + structure formation | P1 ★ | Dodelson |
| 13.08.06 | Inflation: slow-roll + scalar perturbations + r ratio | P1 ★ | Weinberg Cosmology §10 |
| 13.08.07 | Dark matter: evidence + candidates + halo formation | P1 ★ | Bertone review |
| 13.08.08 | Dark energy + cosmological constant problem | P1 ★ | Weinberg RMP 1989 |
| 13.08.09 | Large-scale structure + N-body + BAO | P2 | Dodelson |
| 13.08.10 | Eternal inflation + multiverse landscape | P3 | Vilenkin / Susskind |

### NEW SUB-CHAPTER — 13.10 Mathematical relativity

| ID | Title | Pri | Anchor |
|---|---|---|---|
| 13.10.01 | Causal structure + global hyperbolicity | P2 | Wald §8 |
| 13.10.02 | Positive mass theorem | P2 | Schoen-Yau / Witten |
| 13.10.03 | Penrose conjecture | P3 | Bray-Huisken-Ilmanen |
| 13.10.04 | Cosmic censorship | P2 | Penrose 1969 |
| 13.10.05 | Nonlinear stability of Minkowski | P3 | Christodoulou-Klainerman |

---

# Summary of unit counts

| Block | Units | Priority |
|---|---:|---|
| Structural fixes | 7 | P1 (do first) |
| ch01 foundations middle | 22 | mostly P1 |
| ch02.07 measure theory (new) | 12 | P1 |
| ch02.10 Fourier (expanded) | 13 | P1 |
| ch02.11 functional analysis | 9 | P1 |
| ch02.13 PDE (new) | 13 | P1 |
| ch02 other (topology/seq/integration/ODE) | 22 | P1 |
| ch04 alg geom plumbing | 7 | P1-P2 |
| ch21 elementary NT (new) | 13 | P1 |
| ch21 algebraic NT (new) | 12 | P1 |
| ch21 analytic NT expansion | 7 | P1-P2 |
| ch24/25 logic foundations | 8 | mixed |
| ch24 numerical analysis broad | 12 | P1-P2 |
| ch26 statistics expansion | 31 | mixed |
| ch26.11 information theory (new) | 6 | P1 |
| **Math total** | **~187** | |
| ch09 classical mech additions | 15 | mostly P1 |
| ch10 EM widening | 35 | mostly P1 |
| ch10.08 optics (new) | 11 | P1-P2 |
| ch10.09 plasma (new) | 4 | P2-P3 |
| ch11 stat-mech widening | 24 | mostly P1 |
| ch11.08 non-equilibrium (new) | 5 | P2 |
| ch12 quantum undergrad fills | 22 | P1 |
| ch12.17 qinfo (new) | 14 | P1 |
| ch12.18 open systems (new) | 5 | P1-P2 |
| ch13 GR/cosmology widening | 25 | P1 |
| ch13.10 math relativity (new) | 5 | P2-P3 |
| **Physics total** | **~165** | |
| **GRAND TOTAL** | **~352** | |

**Cycles required at current cadence:** 30-40 production waves of ~10 units each. Realistically 6-12 months of full-time agent production.

---

# Production order recommendation

Six waves, each ~30-40 units, focused for content coherence:

1. **Wave A: ch10 EM + SR widening** (Griffiths anchor, ~35 units). Highest physics-track leverage.
2. **Wave B: ch11 stat-mech proper** (~24 units). Pairs naturally with Wave A.
3. **Wave C: ch21 elementary + algebraic NT** (~25 units). Closes the most absurd inversion.
4. **Wave D: ch02.07 measure theory + ch02.10 Fourier** (~25 units). Closes the biggest math hole.
5. **Wave E: ch12 quantum information + open systems** (~19 units). Modern QM literacy.
6. **Wave F: ch13 GR/cosmology widening** (~25 units). Closes GR at undergrad.

After F: ch01.02 algebra middle, ch12 angular momentum/symmetries, ch02.13 PDE, ch26 stats, ch09 mech additions.

---

**Maintained by:** the orchestrator session that needs the next unit. Strike entries through (`~~`) and append `**PRODUCED YYYY-MM-DD by <model> at <validator score>**` when shipped, same convention as `skipped_units.md`. Do not delete.
