# Apostol — *Calculus, Vol. 1: One-Variable Calculus, with an Introduction to Linear Algebra* (Fast Track 0.2) — Audit + Gap Plan

**Book:** Tom M. Apostol, *Calculus, Volume I: One-Variable Calculus, with an
Introduction to Linear Algebra* (2nd ed., John Wiley & Sons, 1967;
SBN 0-471-00005-1). The "second-edition green hardcover" that has been
in continuous print since 1967, used as the proof-based first-year
calculus text at Caltech, MIT (18.014/18.024 historically), and a long
list of honors-track undergraduate programs.

**Fast Track entry:** 0.2 (the §0 "real prerequisites" slot of the
booklist; Apostol is the canonical *single-variable proof-based*
calculus anchor and is paired with *Vol. II* (entry 0.3) for
multivariable + linear algebra; together they form the §0 calculus
prerequisite that the Fast Track assumes the reader has internalised
before opening Apostol's analysis successors — Rudin, Pugh, etc. — or
the §1 differential-geometry / topology stack).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write so that *Calculus, Vol. I* is covered to the
equivalence threshold (≥95% effective coverage of theorems, key
examples, exercise pack, notation, sequencing, intuition, applications —
see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally not a full P1 audit (which would inventory
every numbered exercise across Apostol's 16 chapters at the
line-number level). It works from the book's chapter-by-chapter
organisation and Apostol's distinctive editorial choices, produces the
gap punch-list, and stops there.

The audit surface here is **the largest of any Fast Track book audited
so far**. Where Cannas, Hatcher, Donaldson all sit in chapters where
Codex already ships ~20 units in the same neighbourhood, *Apostol Vol. I*
sits squarely in single-variable calculus and elementary real analysis
— a region where Codex's `02-analysis/` chapter currently ships only
*topology* (`02.01.*`, 7 units) and *functional analysis* (`02.11.*`,
7 units). The entire interior of `02-analysis/` between chapters 01 and
11 — the reals, sequences, series, Riemann integration, differentiation,
elementary transcendental functions, Taylor's theorem — is empty.
Apostol's coverage will populate roughly seven new sub-chapters of
`02-analysis/` as well as one new `00-precalc/` mathematical-induction
unit. Expect a **large and load-bearing [NEW] punch-list** with very
few [DEEPEN] items — there is little to deepen because the upstream
infrastructure does not yet exist.

---

## §1 What Apostol's book is for

Apostol Vol. I is the canonical English-language *proof-based* first
encounter with calculus. It is the book the Fast Track assumes a reader
has either worked through directly or substituted with an equivalent
honors-track sequence (Spivak's *Calculus*, Courant & John Vol. I) — it
is **not** an analysis textbook in the Rudin / Pugh sense, but it is
also **not** a computational textbook in the Stewart / Thomas sense.
It occupies the precise pedagogical slot that Codex's existing
`02-analysis/01-topology` chapter assumes the reader has already
crossed: the bridge from "I can compute integrals and derivatives" to
"I can read a real-analysis textbook."

The book has 16 chapters across two parts.

**Part 1 — Introduction.** The famously Apostolian opening: not "limit"
or "derivative" but **integration of step functions**.

- **Ch. 1 — Introduction.** A historical introduction (Eudoxus, Archimedes,
  Newton, Leibniz). Apostol's preface argues that integration is older,
  more concrete, and more naturally rigorous than differentiation, and
  the book is therefore organised **integration first**.
- **Ch. 2 — Some basic concepts of the theory of sets.** Set-theoretic
  vocabulary: union, intersection, Cartesian product, functions as
  graphs.
- **Ch. 3 — A set of axioms for the real-number system.** This chapter
  is what makes Apostol distinctive at the §0 level. Apostol gives
  **the complete axiomatic specification of $\mathbb{R}$** —
  field axioms (10 axioms), order axioms, and the **least-upper-bound
  axiom (completeness)** — and then derives every basic property
  (Archimedean property, density of $\mathbb{Q}$, integer part,
  existence of $n$-th roots of positive reals, the fact that
  $\mathbb{R}$ is uncountable) from these axioms. Apostol does **not**
  construct $\mathbb{R}$ from $\mathbb{Q}$ (no Dedekind cuts, no
  Cauchy completion); he axiomatises it. Codex must record this
  pedagogical choice as the canonical proof-based-calculus framing.
- **Ch. 4 — Mathematical induction, summation notation, and related
  topics.** Mathematical induction (both forms), $\Sigma$-notation,
  the Bernoulli inequality, the binomial theorem, the well-ordering
  principle, finite vs. countable vs. uncountable sets (with Cantor's
  diagonal argument).

**Part 2 — Differential and integral calculus.**

- **Ch. 1 — The concepts of integral calculus.** *(Note: chapter
  numbering restarts at Ch. 1 in Part 2; Apostol calls these "Chapter
  I.1, I.2, ..." in the table-of-contents convention. We will use
  Apostol's running chapter numbering — Ch. 1 of Part 2 is **Ch. 1.1**
  in citations below.)* The integral of a step function as a finite
  sum. The integral of a more general function defined as the
  least upper bound of integrals of step functions below it (lower
  integral) and the greatest lower bound of integrals of step functions
  above it (upper integral); a function is **integrable** when the two
  agree. This is **not** the Riemann definition via tagged partitions —
  it is the **Darboux** definition via upper and lower step-function
  integrals. The integral of a monotonic function on a compact interval
  exists by this definition. The integral of a continuous function
  exists once continuity-on-a-compact-interval is shown to imply
  uniform continuity (Ch. 3).
- **Ch. 2 — Some applications of integration.** Area between curves,
  trigonometric integrals (developed *before* the trig functions are
  rigorously defined — Apostol uses a geometric area-of-circular-segment
  definition of $\sin$ and $\cos$ here, then revisits the analytical
  development in Ch. 6), volumes of solids of revolution, work, average
  value of a function, mean value theorem for integrals.
- **Ch. 3 — Continuous functions.** Definition of limit and continuity
  (in the $\varepsilon$-$\delta$ form), the algebra of continuous
  functions, the **intermediate value theorem**, **Bolzano's theorem**
  (existence of zero of a continuous function changing sign),
  **boundedness theorem** (continuous on $[a, b]$ implies bounded),
  **extreme value theorem** (continuous on $[a, b]$ attains its sup
  and inf), uniform continuity.
- **Ch. 4 — Differential calculus.** Definition of derivative as a
  limit, algebra of derivatives, chain rule, derivatives of inverse
  functions, **Rolle's theorem**, **mean value theorem** (Lagrange and
  Cauchy forms), monotonicity test, sufficient conditions for extrema,
  **Taylor's formula with Lagrange remainder** (this is Ch. 7 — Apostol
  defers Taylor until *after* the elementary transcendental functions
  in Ch. 6).
- **Ch. 5 — The relation between integration and differentiation.**
  The **two fundamental theorems of calculus** stated and proved
  cleanly. Apostol's framing: FTC1 says differentiation undoes the
  integral $F(x) = \int_a^x f$; FTC2 says the integral of a derivative
  recovers the function up to constants. Integration by parts.
  Integration by substitution. Improper Riemann integrals on
  $[a, \infty)$ and on intervals where the integrand is unbounded —
  comparison test and absolute convergence.
- **Ch. 6 — The logarithm, the exponential, and the inverse
  trigonometric functions.** Apostol's signature analytical
  construction:
    - **$\log x = \int_1^x \frac{dt}{t}$** for $x > 0$. From this
      definition every property — $\log(xy) = \log x + \log y$,
      $\log x \to \infty$, the bijection $\log : (0, \infty) \to
      \mathbb{R}$ — is a corollary.
    - **$\exp = \log^{-1}$**, with $e = \exp(1)$. The series
      $e^x = \sum x^n / n!$ comes later (Ch. 10) as a Taylor expansion.
    - $a^b = \exp(b \log a)$ for $a > 0$.
    - The trig functions are *re-derived* analytically as inverses of
      the corresponding integral $\arcsin x = \int_0^x dt/\sqrt{1-t^2}$;
      the geometric Ch. 2 framing is shown to agree with the analytic
      one.
  This **integral-first construction of the elementary transcendental
  functions** is one of Apostol's two largest pedagogical signatures
  (the other being integration-before-differentiation). Codex has zero
  units here.
- **Ch. 7 — Polynomial approximations to functions.** Taylor's formula
  with Lagrange remainder, with integral remainder, and with Cauchy
  remainder. Convergence conditions. Worked Taylor expansions of
  $\exp$, $\log(1+x)$, $\sin$, $\cos$, $\arctan$, $(1+x)^\alpha$.
  L'Hôpital's rule (as application of Taylor).
- **Ch. 8 — Introduction to differential equations.** First-order
  linear ODEs (integrating-factor method), separable ODEs, applications
  (radioactive decay, mixing, simple harmonic motion), second-order
  linear ODEs with constant coefficients (the characteristic-polynomial
  method), undetermined coefficients for forcing terms, applications to
  resonance and damping.
- **Ch. 9 — Complex numbers.** Construction $\mathbb{C} = \mathbb{R}^2$
  with complex multiplication, polar form, **Euler's formula**
  $e^{i\theta} = \cos\theta + i\sin\theta$ (proved from the Taylor
  series of $\exp$, $\sin$, $\cos$ — closing the loop with Ch. 6 and
  Ch. 7), de Moivre's theorem, $n$-th roots of unity, **fundamental
  theorem of algebra** (statement; proof deferred to Vol. II).
  Application: solving second-order constant-coefficient linear ODEs
  with complex characteristic roots from Ch. 8.
- **Ch. 10 — Sequences, infinite series, improper integrals.** $\varepsilon$
  -definition of sequence convergence, **monotone-convergence
  theorem**, **Cauchy sequences**, the **Bolzano-Weierstrass theorem**.
  Infinite series: comparison, ratio, root, alternating-series, Cauchy
  condensation tests. Absolute vs. conditional convergence.
  Riemann's rearrangement theorem (statement). Improper integrals
  revisited; the integral test for series.
- **Ch. 11 — Sequences and series of functions.** Pointwise vs.
  uniform convergence (Apostol's $\sup$-norm formulation), the
  **Weierstrass M-test**, term-by-term integration and differentiation
  under uniform convergence, power series and the radius of convergence
  (with Cauchy-Hadamard), Abel's theorem, Taylor series.
- **Ch. 12 — Vector algebra.** Vectors in $\mathbb{R}^n$, dot product,
  norm, Cauchy-Schwarz inequality, projections, linear independence,
  bases. *(Shorter prelude to Vol. II.)*
- **Chs. 13-15 — (Brief survey: applications of vector algebra to
  analytic geometry; calculus of vector-valued functions; linear
  spaces.)* These are bridge chapters into Vol. II and we will not
  fully audit them here — the proper audit lives in the Apostol Vol. II
  plan (FT 0.3).
- **Ch. 16 — Linear transformations and matrices.** Same comment;
  defer to Vol. II audit.

The book ships a **substantial exercise pack** (~2500 exercises across
the volume; ~1800 in the single-variable Chs. 1-11). Many are
load-bearing — Apostol's text is one of the few first-encounter books
where exercises are routinely cited later in the same book as
"Exercise n.m". The exercise layer (FT equivalence Layer 2) is
substantial; Codex has zero units in this region today, so the
exercise gap is currently 100%.

**Distinctive Apostol choices** (in roughly the order he develops them):

1. **Axiomatic real numbers.** The completeness axiom is
   **axiom 11** (after the 10 ordered-field axioms). Apostol does not
   construct $\mathbb{R}$ from $\mathbb{Q}$; he axiomatises it and then
   derives every property. This is the cleanest pedagogical choice for
   a first-year textbook and is the **standard convention assumed by
   every later Codex unit that quotes "the completeness of $\mathbb{R}$"**.
2. **Integration before differentiation.** Apostol Part 2 Ch. 1 is
   the integral; Ch. 4 is the derivative. The motivation is that the
   integral of a step function is **manifestly** a finite sum — there
   is no limiting process, no $\varepsilon$-$\delta$, no derivative
   to misuse. Apostol uses this to build the integral *before* the
   reader has the technical machinery for limits, then circles back
   to limits in Ch. 3 to handle continuous integrands.
3. **Darboux integral, not Riemann sum.** Apostol's "Riemann integral"
   is actually the Darboux upper/lower integral — agreement of
   $\inf \int s_+$ over step functions $s_+ \geq f$ and
   $\sup \int s_-$ over step functions $s_- \leq f$. This is
   **equivalent** to the tagged-partition Riemann definition for
   bounded $f$ on a compact interval, but pedagogically cleaner.
   Codex must record both formulations and note the equivalence.
4. **Logarithm-as-integral.** $\log x := \int_1^x dt/t$ is the
   definition. Every property of the log and the exponential follows
   by FTC. This is the analytical-purity choice (no a priori
   construction of "$2^\pi$" or "$e^x$" — they are *defined* via
   integrals and inverses).
5. **Trig analytically.** $\arcsin x := \int_0^x dt / \sqrt{1-t^2}$,
   then $\sin = \arcsin^{-1}$. The geometric definitions (Ch. 2) are
   shown to agree.
6. **Taylor with explicit remainder forms.** Lagrange, integral, and
   Cauchy remainders are all proved, not just stated. Applications
   include L'Hôpital's rule.
7. **Sequences/series after the elementary functions.** The
   monotone-convergence theorem and Bolzano-Weierstrass come in
   Ch. 10, *after* the elementary calculus is in place. This sequence
   reflects Apostol's pedagogical bet that students learn the
   $\varepsilon$-$\delta$ machinery best by seeing it applied to
   concrete familiar functions before being asked to absorb the
   abstract sup/inf machinery for sequences.
8. **Historical interludes.** Each chapter has historical notes —
   Eudoxus, Archimedes, Newton, Leibniz, Euler, Cauchy, Riemann,
   Weierstrass. These are not just colour; Apostol uses the historical
   sequence to motivate why the modern definitions take the form they
   do (e.g., Cauchy's $\varepsilon$-$\delta$ as the resolution of the
   "infinitely small quantity" embarrassment).
9. **Exercises as pedagogy.** Apostol's exercise sets are graded
   (computational → proof-based) and many computational exercises
   set up later proof-based ones. The exercise layer is a substantial
   fraction of the book's value transfer.

---

## §2 Coverage table (Codex vs Apostol)

Cross-referenced against the current ~217-unit Codex corpus
(`find content -name "*.md" | sort`). ✓ = covered at Apostol-equivalent
depth, △ = topic present elsewhere but not at calculus-textbook depth,
✗ = not covered.

The Codex `02-analysis/` chapter currently has units only in
`02-analysis/01-topology/` (7 units: topological-space, continuous-map,
metric-space, quotient-topology, fibration, cofibration, compact-open
topology) and `02-analysis/11-functional-analysis/` (7 units: bounded
linear operators, unbounded self-adjoint, Banach, compact operators,
normed vector space, inner-product space, Hilbert space). The interior
chapters (02 through 10) are empty. Apostol's coverage will populate
those interior chapters.

Codex `00-precalc/` currently ships exactly one unit
(`00.02.05-function`, in `00-precalc/02-set-and-function/`).

### Part 1 — Introduction (Apostol Chs. 1-4)

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Historical introduction (Eudoxus, Archimedes, Newton, Leibniz) | — | △ | Codex has no dedicated calculus-history unit; partial coverage in `02.04.*` (Riemann integration, when written) Master / Historical sections will subsume. |
| Set-theoretic vocabulary, Cartesian product, function as graph | `00.02.05` function | △ | The function unit is shipped; missing companion units on union/intersection/Cartesian product (likely deferred to other §0 books). Apostol Ch. 2 is brief; partial coverage acceptable. |
| **Field axioms (10) for $\mathbb{R}$** | `01.01.01` field | △ | The field unit is general (any field); a calculus-specific unit listing the ordered-field axioms exactly as Apostol enumerates them does not exist. |
| **Order axioms** | — | ✗ | **Gap.** No standalone unit; the ordered-field structure appears in `01.01.01` only by passing mention. |
| **Completeness axiom (least upper bound)** | — | ✗ | **Gap (foundational).** Apostol's Axiom 11. **Load-bearing for every later real-analysis unit in Codex.** Currently no unit anywhere in Codex states the LUB axiom as the defining property of $\mathbb{R}$. |
| Archimedean property, density of $\mathbb{Q}$, integer part | — | ✗ | **Gap.** Apostol Ch. 3 §3.10-3.13. Foundational. |
| Existence of $n$-th roots, $\mathbb{R}$ uncountable | — | ✗ | **Gap.** |
| **Mathematical induction (both forms)**, well-ordering | — | ✗ | **Gap.** Apostol Ch. 4. Foundational. **Used implicitly throughout Codex.** |
| Summation $\Sigma$ notation, telescoping sums | — | ✗ | Generally used silently; not its own unit. Acceptable as part of an induction unit. |
| Bernoulli inequality | — | ✗ | Standard — appears in Apostol Ch. 4 exercise; will be a worked example in the induction unit. |
| Binomial theorem | — | ✗ | **Gap.** Apostol Ch. 4. Foundational; used throughout calculus and combinatorics. |
| Countable vs uncountable, Cantor diagonal | — | ✗ | **Gap.** Apostol Ch. 4 §4.10. |

### Part 2 Ch. 1 — The integral (step functions, Darboux)

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Integral of a step function as a finite sum** | — | ✗ | **Gap (foundational).** The pedagogical entry point Apostol uses. |
| Properties of the step-function integral (linearity, additivity over partitions, monotonicity) | — | ✗ | **Gap.** |
| **Upper and lower integrals (Darboux)** of bounded $f$ | — | ✗ | **Gap (foundational).** |
| **Riemann/Darboux integrability** ($\overline{\int} f = \underline{\int} f$) | — | ✗ | **Gap (foundational).** |
| **Integrability of monotonic functions on $[a,b]$** | — | ✗ | **Gap.** Apostol Ch. 1 §1.20. |
| **Linearity of the integral**, change-of-interval, additivity | — | ✗ | **Gap.** |
| **Mean value theorem for integrals** (continuous $f$) | — | ✗ | **Gap.** Apostol Ch. 2 §2.16. |

### Part 2 Ch. 2 — Applications of integration

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Area between curves | — | ✗ | **Gap (medium).** Standard worked-example territory; can fold into a single applications-of-integration unit. |
| Volume by slicing / disks / shells | — | ✗ | **Gap (medium).** |
| Arc length | — | ✗ | **Gap (medium).** |
| Work, hydrostatic force, centroid | — | ✗ | **Gap (low).** Application material; one consolidated unit. |
| Average value of a function | — | ✗ | **Gap (medium).** |
| Trigonometric integrals (geometric framing of $\sin$, $\cos$) | — | ✗ | **Gap.** Apostol's Ch. 2 geometric trig is later replaced by Ch. 6 analytic trig; a single unit can record both. |

### Part 2 Ch. 3 — Continuous functions

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Limit of a function ($\varepsilon$-$\delta$) | `02.01.02` continuous-map (general) | △ | The continuous-map unit is **topological-space general** — limits in metric / real-line setting are not its specific subject. Calculus-textbook depth is missing. |
| Continuity at a point, on an interval | `02.01.02` (general) | △ | Same. |
| Algebra of continuous functions, composition | `02.01.02` (general) | △ | Same. |
| **Intermediate value theorem** (Bolzano) | — | ✗ | **Gap (high priority).** The single most-cited theorem of single-variable calculus. **Used silently throughout Codex — every existence-of-a-zero argument relies on it.** |
| **Boundedness theorem** ($f$ continuous on $[a,b]$ ⇒ bounded) | — | ✗ | **Gap (high priority).** |
| **Extreme value theorem** (Weierstrass) | — | ✗ | **Gap (high priority).** Used in optimisation, Lagrange multipliers, every "attains its supremum" appeal across Codex. |
| **Uniform continuity** on a compact interval (Heine-Cantor) | `02.01.02` (general topological framing — partial) | △ | The general topological compactness-implies-uniform-continuity is implicit in the metric-space unit; Apostol's specific calculus-level statement and its application to integrability of continuous functions is not present. |

### Part 2 Ch. 4 — Differential calculus

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Derivative** (definition as a limit) | — | ✗ | **Gap (foundational).** No single-variable derivative unit anywhere in Codex. |
| **Algebra of derivatives** (sum, product, quotient, chain rule) | — | ✗ | **Gap (foundational).** |
| **Chain rule** | — | ✗ | **Gap (foundational).** |
| Implicit differentiation | — | ✗ | **Gap.** |
| **Inverse function theorem (1D)**, derivative of inverse | — | ✗ | **Gap.** Apostol Ch. 6 §6.7. (Multi-D version belongs in Vol. II.) |
| **Rolle's theorem** | — | ✗ | **Gap.** |
| **Mean value theorem** (Lagrange) | — | ✗ | **Gap (foundational).** |
| **Cauchy mean value theorem** | — | ✗ | **Gap.** |
| Monotonicity test, sufficient conditions for extrema | — | ✗ | **Gap.** |
| First / second derivative tests | — | ✗ | **Gap.** |
| Concavity, inflection points | — | ✗ | **Gap.** |

### Part 2 Ch. 5 — FTC and techniques of integration

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **First fundamental theorem of calculus** ($F(x) = \int_a^x f$ ⇒ $F' = f$) | — | ✗ | **Gap (foundational).** |
| **Second fundamental theorem of calculus** ($\int_a^b F' = F(b) - F(a)$) | — | ✗ | **Gap (foundational).** |
| **Integration by parts** | — | ✗ | **Gap.** |
| **Integration by substitution** (change of variables, 1D) | — | ✗ | **Gap.** |
| Partial fractions | — | ✗ | **Gap.** Standard technique. |
| Trigonometric substitution | — | ✗ | **Gap.** Standard technique. |
| **Improper integrals** (over unbounded intervals; integrand unbounded) | — | ✗ | **Gap.** Apostol Ch. 5 §5.10 + Ch. 10. |
| **Comparison test for improper integrals** | — | ✗ | **Gap.** |

### Part 2 Ch. 6 — Logarithm, exponential, inverse trig (Apostol's signature analytical construction)

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **$\log x = \int_1^x dt/t$ as definition** | — | ✗ | **Gap (high priority — Apostol signature).** |
| Properties of $\log$ ($\log(xy) = \log x + \log y$, etc.) from FTC | — | ✗ | **Gap.** |
| **$\exp$ as inverse of $\log$**; $e = \exp(1)$ | — | ✗ | **Gap.** |
| $a^b = \exp(b \log a)$ for $a > 0$ | — | ✗ | **Gap.** |
| **Analytical $\sin$, $\cos$ via $\arcsin x = \int_0^x dt/\sqrt{1-t^2}$** | — | ✗ | **Gap.** Apostol Ch. 6 §6.18-6.20. |
| Inverse trig functions ($\arcsin$, $\arccos$, $\arctan$) and their derivatives | — | ✗ | **Gap.** |
| Hyperbolic functions $\sinh$, $\cosh$, $\tanh$ | — | ✗ | **Gap (medium).** Standard companion topic. |

### Part 2 Ch. 7 — Polynomial approximations (Taylor)

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Taylor's formula with Lagrange remainder** | — | ✗ | **Gap (high priority).** |
| Taylor's formula with **integral remainder** | — | ✗ | **Gap.** |
| Taylor's formula with **Cauchy remainder** | — | ✗ | **Gap.** |
| Worked Taylor series ($e^x$, $\sin$, $\cos$, $\log(1+x)$, $\arctan$, $(1+x)^\alpha$) | — | ✗ | **Gap.** Worked-example density. |
| **L'Hôpital's rule** (as Taylor application) | — | ✗ | **Gap.** |

### Part 2 Ch. 8 — Elementary differential equations

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **First-order linear ODE, integrating factor** | — | ✗ | **Gap.** |
| **Separable ODE** | — | ✗ | **Gap.** |
| **Second-order linear ODE with constant coefficients**, characteristic polynomial | — | ✗ | **Gap.** |
| Method of undetermined coefficients (forcing) | — | ✗ | **Gap.** |
| Application to simple harmonic motion, damping, resonance | — | ✗ | **Gap.** |

### Part 2 Ch. 9 — Complex numbers

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Construction of $\mathbb{C}$, real and imaginary parts | — | ✗ | **Gap.** No standalone "$\mathbb{C}$ as $\mathbb{R}^2$" unit; Codex `06-riemann-surfaces/01-*` units assume the reader has this. |
| Polar form, modulus, argument | — | ✗ | **Gap.** |
| **Euler's formula** $e^{i\theta} = \cos\theta + i\sin\theta$ (analytic proof via Taylor) | — | ✗ | **Gap.** |
| de Moivre, $n$-th roots of unity | — | ✗ | **Gap.** |
| **Fundamental theorem of algebra** (statement) | — | ✗ | **Gap.** Statement-level; analytic proof belongs in `06.01.*` complex analysis (already cited there but the named theorem is missing as its own unit). |

### Part 2 Ch. 10 — Sequences, series, improper integrals (return)

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **$\varepsilon$-definition of sequence convergence** | — | ✗ | **Gap (foundational).** |
| **Monotone convergence theorem** | — | ✗ | **Gap (foundational).** |
| **Cauchy sequences**, completeness of $\mathbb{R}$ as MCT/Cauchy criterion | `02.01.05` metric-space (general — partial) | △ | Cauchy sequences appear in the metric-space unit at general level; Apostol's calculus-textbook framing for $\mathbb{R}$ specifically is missing. |
| **Bolzano-Weierstrass theorem** | — | ✗ | **Gap (foundational).** Used silently throughout `02-analysis`. |
| Limsup, liminf of sequences | — | ✗ | **Gap.** |
| Infinite series, partial sums, convergence | — | ✗ | **Gap (foundational).** |
| **Comparison test, ratio test, root test** | — | ✗ | **Gap.** |
| Cauchy condensation test | — | ✗ | **Gap.** |
| **Alternating series test** | — | ✗ | **Gap.** |
| **Absolute vs conditional convergence**, Riemann rearrangement | — | ✗ | **Gap.** |
| **Integral test for series** | — | ✗ | **Gap.** |

### Part 2 Ch. 11 — Sequences and series of functions

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Pointwise vs uniform convergence** | — | ✗ | **Gap (foundational).** |
| **Weierstrass M-test** | — | ✗ | **Gap.** |
| **Term-by-term integration / differentiation under uniform convergence** | — | ✗ | **Gap.** |
| **Power series, radius of convergence (Cauchy-Hadamard)** | — | ✗ | **Gap.** |
| Abel's theorem on power series | — | ✗ | **Gap.** |
| Taylor series convergence | — | ✗ | **Gap.** |

### Part 2 Chs. 12-16 — Vector algebra / linear algebra prelude

These chapters are the Vol. II handoff. Codex's `01-foundations/01-linear-algebra/`
ships `01.01.01` field, `01.01.03` vector-space, and `01.01.15`
bilinear-quadratic-form. Vector algebra in Apostol Ch. 12 (dot product,
norm, Cauchy-Schwarz, projections, linear independence, bases) overlaps
with `01.01.03` vector-space and is partially covered there. **The full
Apostol-Vol.-II audit (FT 0.3) will cover these chapters in depth; this
plan defers them.** A single line item:

| Apostol topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Vector algebra (Ch. 12), analytic geometry (Ch. 13), vector calculus prelude (Ch. 14), linear spaces (Ch. 15), linear transformations (Ch. 16) | various `01.01.*` | △ | Defer to **Apostol Vol. II** plan. |

### Aggregate coverage estimate

**Theorem layer**: Of Apostol Vol. I's ~120 named theorems / propositions
in Chs. 1-11 of Part 2, Codex currently states and proves perhaps **3-5%**
(IVT/EVT are absent; FTC is absent; MVT is absent; chain rule is absent;
all of Ch. 6 and Ch. 7 is absent). After the priority-1 punch-list below
this rises to ~70%; after priority-1+2 to ~95%.

**Exercise layer**: ~0% — Codex has no calculus exercises today.
Apostol Vol. I has ~1800 exercises in the single-variable chapters; the
exercise-pack pass is a separate (large) follow-up after the
priority-1+2 theorem-layer batch closes.

**Worked-example layer**: ~0% — same.

**Notation layer**: partial — $\int$, $\sum$, $\lim$ etc. are used
everywhere but Apostol's specific conventions
(e.g., upper/lower-integral notation $\overline{\int}$, $\underline{\int}$;
the Bachmann-Landau-style $o$-notation Apostol uses for Taylor; the
distinction between $\log$ and $\ln$) are not currently catalogued.
A `notation/apostol-vol1.md` crosswalk file should be produced.

**Sequencing layer**: ~0% reflected in Codex DAG today; the Apostol
prerequisite chain (sets → reals → step-function integral → continuity
→ derivative → FTC → log/exp → Taylor → ODE → series → uniform
convergence) is genuinely not represented because the units do not
exist. Building the units automatically builds the sequencing.

**Intuition layer**: Apostol's pedagogical framing
(integration-before-differentiation, axiomatic-reals-not-construction,
log-as-integral) needs to be preserved in the Beginner / Master
sections of the new units.

**Application layer**: Apostol's applications (work, hydrostatics,
simple harmonic motion, radioactive decay, resonance) are physics-flavoured
classics; the application unit can fold them in.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

This is the largest punch-list of any Fast Track audit produced so
far. We propose **eight new sub-chapters of `02-analysis/`** plus
**one new `00-precalc/` sub-chapter for induction**, populated by
the units below. Sub-chapter slugs proposed:

- `00-precalc/03-induction-and-counting/` — induction + binomial.
- `02-analysis/02-real-numbers/` — axioms, completeness, Archimedean,
  countability.
- `02-analysis/03-sequences-series/` — sequence convergence, MCT,
  Cauchy, Bolzano-Weierstrass, series tests.
- `02-analysis/04-riemann-integration/` — step functions, Darboux,
  monotonic / continuous integrability, FTC, techniques, improper.
- `02-analysis/05-differentiation/` — derivative, chain rule, MVT,
  Rolle, monotonicity, extrema, inverse function theorem (1D).
- `02-analysis/06-elementary-functions/` — log-as-integral, exp,
  analytic trig, hyperbolic.
- `02-analysis/07-taylor-and-power-series/` — Taylor with three
  remainders, L'Hôpital, power series, radius of convergence.
- `02-analysis/08-elementary-odes/` — first-order linear, separable,
  second-order constant-coefficient, applications.
- `02-analysis/09-complex-numbers/` — $\mathbb{C}$, polar form, Euler,
  de Moivre, FTA statement.
- `02-analysis/10-uniform-convergence/` — pointwise vs uniform,
  Weierstrass M-test, term-by-term operations, Abel.

The chapter slugs above slot into the empty `02-analysis/` interior
between the existing topology (`01-`) and functional-analysis (`11-`)
chapters; numbering is reserved for them.

### Apostol-distinctive priority 1 — the load-bearing real-analysis foundation (~14 units)

These are the units **without which Codex cannot rigorously cite "by
the IVT", "by the MVT", "by completeness", "by FTC"** anywhere in the
corpus. They are foundational and currently absent.

1. **`00.03.01` Mathematical induction.** [NEW] Three-tier; ~1500 words.
   Statement of induction (weak and strong forms), well-ordering principle,
   equivalence with each other. Worked examples: $\sum_{k=1}^n k = n(n+1)/2$,
   Bernoulli inequality, factorial-power inequality. Apostol Ch. 4 anchor.
   Originator citation: **Pascal 1654** (treatise on the arithmetic
   triangle); modern: Apostol Ch. 4, Halmos *Naive Set Theory* §12.
2. **`00.03.02` Binomial theorem.** [NEW] Two-tier (Beginner +
   Intermediate); ~1000 words. Binomial coefficients, Pascal's triangle,
   the binomial expansion proved by induction. Worked examples:
   $(1+x)^n$, $\sum \binom{n}{k} = 2^n$, $\sum (-1)^k \binom{n}{k} = 0$.
   Apostol Ch. 4 §4.7.
3. **`02.02.01` Real-number axioms (ordered field).** [NEW] Three-tier;
   ~1500 words. The 10 ordered-field axioms (field 1-6, order 7-10).
   Apostol Ch. 3 §3.1-3.5 anchor. Cross-link to `01.01.01` field.
4. **`02.02.02` Completeness axiom (least upper bound) and the
   Archimedean property.** [NEW] Three-tier; ~1800 words.
   **Foundational.** Statement of LUB axiom (Apostol Axiom 11);
   Archimedean property as theorem; density of $\mathbb{Q}$; integer
   part; existence of $n$-th roots; uncountability of $\mathbb{R}$
   via Cantor. Originator: **Dedekind 1872**, *Stetigkeit und
   irrationale Zahlen* (the originator of completeness); modern:
   Apostol Ch. 3, Rudin *PMA* Ch. 1. Load-bearing for every later
   real-analysis unit.
5. **`02.03.01` Sequence convergence and the monotone convergence
   theorem.** [NEW] Three-tier; ~1500 words. $\varepsilon$-$N$
   definition, algebra of limits, monotone-convergence theorem
   for $\mathbb{R}$ (proof via LUB). Apostol Ch. 10 §10.1-10.3.
6. **`02.03.02` Cauchy sequences and Bolzano-Weierstrass.** [NEW]
   Three-tier; ~1500 words. Cauchy criterion, equivalence with
   convergence in $\mathbb{R}$, Bolzano-Weierstrass for bounded
   sequences. Originator: **Bolzano 1817**, *Rein analytischer Beweis
   des Lehrsatzes* (the originator of the IVT and the lemma now
   bearing his name); **Cauchy 1821**, *Cours d'analyse*. Apostol
   Ch. 10. Load-bearing for compactness arguments.
7. **`02.03.03` Infinite series: convergence and the standard tests.**
   [NEW] Three-tier; ~2000 words. Partial sums, geometric series,
   comparison test, ratio test, root test, integral test, Cauchy
   condensation. Apostol Ch. 10. Worked: harmonic series, $\sum 1/n^2$,
   $\sum 1/n^p$.
8. **`02.03.04` Alternating series, absolute and conditional
   convergence, Riemann rearrangement.** [NEW] Three-tier; ~1500
   words. Apostol Ch. 10 §10.16-10.21. Riemann rearrangement
   statement-level. Originator: **Riemann 1854** (*Habilitationsschrift*).
9. **`02.04.01` Step-function integral and the Darboux integral.**
   [NEW] Three-tier; ~2000 words. **Apostol's pedagogical entry
   point.** Step functions, integral as a finite sum, upper /
   lower integrals of bounded $f$, definition of integrability.
   Integrability of monotonic functions on $[a,b]$. Apostol Part 2
   Ch. 1. Originator: **Darboux 1875**, *Mémoire sur les fonctions
   discontinues* (Ann. Sci. ENS); modern: Apostol Part 2 Ch. 1.
10. **`02.04.02` Continuous functions and the IVT/EVT/uniform
    continuity package.** [NEW] Three-tier; ~2000 words. **Highest
    priority.** $\varepsilon$-$\delta$ continuity in $\mathbb{R}$,
    intermediate value theorem (Bolzano), boundedness theorem,
    extreme value theorem (Weierstrass), uniform continuity on a
    compact interval (Heine-Cantor). **Used silently across the
    entire Codex corpus.** Apostol Part 2 Ch. 3. Originator:
    **Bolzano 1817** (IVT); **Weierstrass 1860s lectures** (EVT).
11. **`02.04.03` Integrability of continuous functions on $[a,b]$.**
    [NEW] Three-tier; ~1200 words. Riemann-integrability of every
    continuous function on a compact interval, via uniform continuity.
    Apostol Part 2 Ch. 3 §3.20. Cross-links to `02.04.01` and `02.04.02`.
12. **`02.05.01` Derivative and the algebra of derivatives.** [NEW]
    Three-tier; ~1800 words. Derivative as limit, sum / product /
    quotient rules, chain rule. Apostol Part 2 Ch. 4 §4.1-4.6.
    Originator citations to **Newton 1671** (*Method of fluxions*) and
    **Leibniz 1684** (*Acta Eruditorum*).
13. **`02.05.02` Mean value theorem (Rolle, Lagrange, Cauchy).**
    [NEW] Three-tier; ~1500 words. **Foundational.** Rolle's theorem,
    Lagrange MVT, Cauchy MVT, monotonicity test, sufficient
    conditions for extrema. Apostol Part 2 Ch. 4 §4.13-4.16.
    Originator: **Rolle 1691**; **Lagrange 1797**, *Théorie des
    fonctions analytiques*.
14. **`02.04.04` Fundamental theorems of calculus (FTC1 and FTC2).**
    [NEW] Three-tier; ~2000 words. **Foundational.** FTC1
    ($F(x) = \int_a^x f$ is differentiable with $F' = f$ when $f$ is
    continuous), FTC2 ($\int_a^b F' = F(b) - F(a)$ when $F$ is
    differentiable with continuous $F'$). Integration by parts.
    Apostol Part 2 Ch. 5. Originator: **Barrow** (geometric form
    1670), **Newton 1671**, **Leibniz 1693**; analytical proof
    **Cauchy 1821-23**.

### Apostol-distinctive priority 2 — elementary functions, Taylor, ODEs (~9 units)

These cover the bulk of "calculus the working scientist actually uses"
beyond the foundational theorems above.

15. **`02.04.05` Techniques of integration (substitution, parts,
    partial fractions, trig substitution).** [NEW] Two-tier
    (Intermediate + Master); ~1500 words. Apostol Part 2 Ch. 5
    §5.6-5.9.
16. **`02.04.06` Improper integrals and the comparison test.** [NEW]
    Three-tier; ~1500 words. Apostol Part 2 Ch. 5 §5.10 + Ch. 10.
17. **`02.05.03` Inverse function theorem in one variable.** [NEW]
    Two-tier (Intermediate + Master); ~1000 words. The 1D inverse
    function theorem; derivative of inverse formula. Apostol Part 2
    Ch. 6 §6.7. (Multi-D version belongs in Vol. II.)
18. **`02.06.01` Logarithm as an integral.** [NEW] Three-tier;
    ~1800 words. **Apostol's signature analytical construction.**
    $\log x := \int_1^x dt/t$, derivation of all standard properties
    via FTC, characterisation as the unique additive function with
    $\log'(1) = 1$. Apostol Part 2 Ch. 6 §6.1-6.7. Originator:
    **Mercator 1668** (*Logarithmotechnia*; first power series for
    $\log$); modern analytical construction is canonically Apostol.
19. **`02.06.02` Exponential function and powers $a^b$.** [NEW]
    Three-tier; ~1500 words. $\exp = \log^{-1}$; $e = \exp(1)$;
    $a^b = \exp(b \log a)$ for $a > 0$; growth rate of $\exp$ vs
    polynomials. Apostol Part 2 Ch. 6 §6.8-6.17.
20. **`02.06.03` Analytic trigonometry from $\arcsin x = \int_0^x
    dt/\sqrt{1-t^2}$.** [NEW] Three-tier; ~1500 words. Apostol's
    rebuilding of $\sin$, $\cos$, $\tan$ as inverses of integrals.
    Bridge to the geometric definitions of Ch. 2. Apostol Part 2
    Ch. 6 §6.18-6.20.
21. **`02.06.04` Hyperbolic functions.** [NEW] Two-tier
    (Beginner + Intermediate); ~800 words. $\sinh$, $\cosh$, $\tanh$,
    their inverses, identities. Apostol Part 2 Ch. 6 §6.22.
22. **`02.07.01` Taylor's theorem with three remainders (Lagrange,
    integral, Cauchy).** [NEW] Three-tier; ~2000 words. **High
    priority.** All three remainder forms, with worked Taylor series
    of $e^x$, $\sin$, $\cos$, $\log(1+x)$, $\arctan$, $(1+x)^\alpha$.
    L'Hôpital's rule as application. Apostol Part 2 Ch. 7. Originator:
    **Taylor 1715**, *Methodus Incrementorum*; **Lagrange 1797**
    (Lagrange remainder); **Cauchy 1823** (integral remainder).
23. **`02.07.02` Power series and the radius of convergence
    (Cauchy-Hadamard).** [NEW] Three-tier; ~1500 words. Radius of
    convergence formula $1/R = \limsup |a_n|^{1/n}$; behaviour on
    the circle of convergence; Abel's theorem (statement-level).
    Apostol Part 2 Ch. 11. Originator: **Hadamard 1888** (these
    de doctorat); **Abel 1826** (continuity at the boundary).

### Apostol-distinctive priority 3 — uniform convergence, ODEs, complex (~6 units)

24. **`02.10.01` Pointwise vs uniform convergence and the Weierstrass
    M-test.** [NEW] Three-tier; ~1500 words. Apostol Part 2 Ch. 11
    §11.1-11.5. **Load-bearing for term-by-term operations and for
    every later analysis course.** Originator: **Weierstrass 1880s
    lectures** (uniform convergence is canonically his).
25. **`02.10.02` Term-by-term integration and differentiation;
    interchange of limit and derivative.** [NEW] Three-tier;
    ~1200 words. Apostol Part 2 Ch. 11 §11.6-11.10.
26. **`02.08.01` First-order linear and separable ODEs.** [NEW]
    Three-tier; ~1500 words. Integrating-factor method, separation
    of variables, applications (radioactive decay, mixing,
    Newton's law of cooling). Apostol Part 2 Ch. 8 §8.1-8.7.
27. **`02.08.02` Second-order linear ODEs with constant coefficients.**
    [NEW] Three-tier; ~1800 words. Characteristic polynomial,
    real and complex roots, undetermined coefficients. Applications:
    simple harmonic motion, damping, resonance. Apostol Part 2 Ch. 8
    §8.8-8.20.
28. **`02.09.01` Complex numbers and Euler's formula.** [NEW]
    Three-tier; ~1500 words. Construction $\mathbb{C} = \mathbb{R}^2$,
    polar form, Euler's formula via Taylor series of $\exp$, $\sin$,
    $\cos$, de Moivre, $n$-th roots of unity. Apostol Part 2 Ch. 9.
    Originator: **Hamilton 1837** (algebraic construction); Euler's
    formula goes back to **Euler 1748**, *Introductio*.
29. **`02.09.02` Fundamental theorem of algebra (statement and
    intuition).** [NEW] Two-tier (Beginner + Intermediate); ~800
    words. Statement-only; analytic proofs are deferred to
    `06-riemann-surfaces/01-*` complex analysis. Apostol Part 2
    Ch. 9 §9.10. Originator: **Gauss 1799** (dissertation; first
    rigorous proof).

### Apostol-distinctive priority 4 — applications, history, deepenings (~5 items)

30. **`02.04.07` Applications of integration (area, volume, arc
    length, work, average value).** [NEW] Two-tier (Beginner +
    Intermediate); ~1500 words. Application bouquet from Apostol
    Part 2 Ch. 2; one consolidated unit covering the standard
    physical applications.
31. **DEEPEN `02.01.05` metric-space:** add a Master subsection on
    the calculus-textbook framing of Cauchy completeness specifically
    for $\mathbb{R}$ (cross-link to the new `02.03.02` unit). [DEEPEN]
    ~400 words.
32. **DEEPEN `02.01.02` continuous-map:** add a Master subsection
    cross-linking to `02.04.02` for the IVT/EVT calculus-textbook
    statements that are the topological-compactness consequences in
    the existing unit. [DEEPEN] ~300 words.
33. **DEEPEN `01.01.01` field:** add a Master subsection listing the
    Apostol-style ordered-field axioms (Apostol Ch. 3 §3.1-3.5)
    explicitly, cross-linking to `02.02.01`. [DEEPEN] ~300 words.
34. **ENRICH `00.02.05` function:** add Apostol Vol. I as a citation
    in the Intermediate `tier_anchors` (Apostol Ch. 2 §2.4 has the
    classical "function as graph" framing). [ENRICH] ~50 words +
    front-matter edit.
35. **`02.E1` Apostol Vol. I exercise pack** [NEW]. *Deferred.*
    The full ~1800-exercise inventory is outside the scope of the
    P3-lite punch-list and lives in a dedicated exercise-pack pass
    after the priority-1+2 theorem-layer batch closes. Mentioned
    here as a placeholder so the sequencing layer captures it.

---

## §4 Implementation sketch (P3 → P4)

For full Apostol Vol. I coverage, **items 1-23 are the minimum
priority-1+2 set** (23 new units, ~36 000 words of content). Items
24-29 (priority 3, 6 more units) close the uniform convergence + ODEs
+ complex blocks. Items 30-34 (priority 4) close applications and
deepen / cross-link existing units. Total: **~29 new units +
4 deepenings + 1 enrichment**.

Production estimate (mirroring earlier batches):

- ~3 hours per new unit (research + draft + validate at 27/27 + Lean
  stub + Bridge / Synthesis paragraphs in real prose, not the
  templated form).
- 29 new units × 3 hours = **~87 hours of focused production.**
- At 4-6 production agents in parallel, this fits in a 9-12 day
  window with an integration agent stitching outputs.

This is **the largest single-book production load on the Fast Track.**
By comparison, Hatcher's punch-list is ~14 units (priority-1+2);
Cannas's is ~12; Donaldson's is ~10. Apostol Vol. I is ~29 because
Codex starts from a near-empty base in the calculus region.

**Batching recommendation.** Decompose into **four production sub-batches**
to keep agent context windows manageable and to parallelise integration:

- **Batch A (foundations, ~6 units):** induction (`00.03.01`),
  binomial (`00.03.02`), real-number axioms (`02.02.01`),
  completeness + Archimedean (`02.02.02`), sequence convergence
  + MCT (`02.03.01`), Cauchy + B-W (`02.03.02`). **Run first** —
  these are prerequisites for every later unit.
- **Batch B (integration + continuity + FTC + differentiation, ~9 units):**
  step-function integral (`02.04.01`), continuity / IVT / EVT
  (`02.04.02`), continuous-integrability (`02.04.03`), FTC
  (`02.04.04`), techniques (`02.04.05`), improper integrals
  (`02.04.06`), derivative (`02.05.01`), MVT (`02.05.02`),
  inverse function 1D (`02.05.03`). **Run after Batch A.**
- **Batch C (elementary functions + Taylor + power series, ~7 units):**
  log-as-integral (`02.06.01`), exponential (`02.06.02`), analytic
  trig (`02.06.03`), hyperbolic (`02.06.04`), Taylor (`02.07.01`),
  power series (`02.07.02`), and series-tests (`02.03.03`,
  `02.03.04` — could move into Batch A or here depending on which
  agents have capacity).
- **Batch D (uniform convergence + ODEs + complex + applications,
  ~7 units):** uniform convergence (`02.10.01`), term-by-term
  (`02.10.02`), 1st-order ODE (`02.08.01`), 2nd-order ODE
  (`02.08.02`), complex + Euler (`02.09.01`), FTA statement
  (`02.09.02`), applications (`02.04.07`). **Can run mostly in
  parallel with Batch C.**

Apostol's chapter prerequisites (sets → reals → integral → continuity
→ derivative → FTC → log/exp → Taylor → ODE / complex / series) drive
the inter-batch ordering: **Batch A must complete and be integrated
before B starts**, since every unit in B depends on at least one A
unit (LUB, MCT, or B-W). Batches C and D can begin once B is
substantially complete (FTC and continuous integrability need to be
in place before log-as-integral).

**Originator-prose target.** Apostol himself is a 1967 textbook
synthesis — not an originator-text. The originator citations for the
new priority-1+2 units (each unit's Master section should quote /
paraphrase the originator):

- Real numbers, completeness: **Dedekind 1872**, *Stetigkeit und
  irrationale Zahlen*; **Cantor 1872** (Cauchy-completion
  construction).
- Sequences, IVT, B-W: **Bolzano 1817**, *Rein analytischer Beweis
  des Lehrsatzes* (the IVT proof that does not use geometric
  intuition); **Cauchy 1821**, *Cours d'analyse*.
- Integration: **Cauchy 1823**, *Résumé des leçons sur le calcul
  infinitésimal* (first rigorous integral); **Riemann 1854**
  (*Habilitationsschrift* — the Riemann definition); **Darboux 1875**
  (the upper / lower integrals).
- Differentiation, MVT: **Rolle 1691**; **Lagrange 1797**, *Théorie
  des fonctions analytiques*; **Cauchy 1823** (Cauchy MVT).
- FTC: **Barrow 1670** (geometric); **Newton 1671** (*Method of
  fluxions*); **Leibniz 1693**.
- $\log$, $\exp$: **Mercator 1668**, *Logarithmotechnia*; **Euler
  1748**, *Introductio in analysin infinitorum*.
- Taylor: **Taylor 1715**, *Methodus Incrementorum*; **Maclaurin
  1742**; **Lagrange 1797** (Lagrange remainder); **Cauchy 1823**
  (integral remainder).
- Power series, uniform convergence: **Cauchy 1821**; **Abel 1826**
  (Abel's theorem); **Weierstrass 1880s lectures** (uniform
  convergence canonically his); **Hadamard 1888** (Cauchy-Hadamard).
- Complex numbers, Euler's formula: **Euler 1748**, *Introductio*;
  **Hamilton 1837** (algebraic construction); **Gauss 1799** (FTA).
- ODEs: **Bernoulli (Johann) 1696** (separation); **Lagrange 1762-65**
  (variation of parameters; characteristic polynomial method).

**Notation crosswalk.** Apostol Vol. I uses:

- $\int_a^b f(x)\,dx$ for the Riemann/Darboux integral; $\overline{\int}$
  and $\underline{\int}$ for upper/lower.
- $\sum_{k=m}^n a_k$ for finite sums; $\sum_{n=1}^\infty a_n$ for
  series.
- $f'$, $f''$, $f^{(n)}$ for derivatives; **never** Leibniz $df/dx$
  in the main text (Apostol's choice).
- $\log x$ (natural log) — **never** $\ln$.
- $\arcsin$, $\arccos$, $\arctan$ — **never** $\sin^{-1}$.
- $f \in C^n[a,b]$ for $n$-times continuously differentiable on
  $[a,b]$.
- "Theorem 3.7" cross-references (chapter.theorem-number).

A `notation/apostol-vol1.md` crosswalk file should record this.
The "$\log = \ln$" alignment is the most-cited entry.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and exercise in
  Apostol Vol. I's ~666 pages. (Would take the full P1 audit;
  deferred unless the priority-1+2 punch-list expands.)
- The exercise pack. Apostol Vol. I has ~1800 exercises in the
  single-variable Chs. 1-11; producing a Codex equivalent (`02.E1`
  Apostol-exercise-pack) is a P3-priority follow-up after the
  priority-1+2 theorem-layer batch closes.
- **Apostol Chs. 12-16** (vector algebra, analytic geometry, vector
  calculus prelude, linear spaces, linear transformations + matrices).
  These belong in the **Apostol Vol. II audit** (FT 0.3) since they
  are the bridge into multivariable / linear algebra; covering them
  here would duplicate that audit's punch-list.
- **The Vol. I appendices** (set-theoretic definitions, mutual
  induction, complex-number formal construction). Defer; covered by
  the existing `00.02.05` function unit and by `01.01.01` field's
  Master section once deepened (item 33 above).
- **Caveat: Riemann vs Darboux integral equivalence.** Apostol's
  upper/lower-integral definition is *equivalent* to the
  tagged-partition Riemann definition for bounded $f$ on a compact
  interval, but the two definitions are not literally the same. The
  proposed `02.04.01` unit uses the Darboux framing (Apostol's
  pedagogical choice); a Master-section remark or a separate Master
  cross-link should record the Riemann tagged-partition definition
  and prove the equivalence. Logged here so the production agent
  doesn't omit it.
- **Lebesgue integration, measure theory.** Out of scope for Apostol
  Vol. I. Lives in a future `02-analysis/12-measure-and-lebesgue/`
  sub-chapter (not on Apostol's audit; covered by Royden, Folland,
  Rudin *RCA*, etc.).
- **Multivariable calculus** — Apostol Vol. II audit (FT 0.3).
- **The figures.** Apostol's text is figure-heavy; the figure-rendering
  infrastructure does not yet exist in Codex. Pictorial intuition
  must be reproduced in prose for now. Curriculum-wide deferred item.

---

## §6 Acceptance criteria for FT equivalence (Apostol Vol. I)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, Apostol
Vol. I is at equivalence-coverage when:

- ≥95% of Apostol Vol. I's named theorems map to Codex units
  (currently ~3-5%; after priority-1 units (1-14) this rises to
  ~70%; after priority-1+2 (1-23) to ~90%; after priority-3 (24-29)
  to ~95%; after priority-4 deepenings (30-34) the qualitative gap
  is closed).
- ≥80% of Apostol's exercises have a Codex equivalent (currently
  ~0%; closing this requires the dedicated `02.E1` exercise-pack
  pass per §5).
- ≥90% of Apostol's worked examples are reproduced in some Codex
  unit (currently ~0%; the priority-1+2 batch's worked-example
  density brings this to ~60%; the remainder needs
  worked-example-densification in a follow-up pass).
- A `notation/apostol-vol1.md` crosswalk exists.
- For every chapter dependency in Apostol Vol. I (Sets / induction
  → Reals → Integral → Continuity → Derivative → FTC → Log/Exp /
  Trig → Taylor → ODE / Complex / Series → Uniform convergence),
  there is a corresponding `prerequisites` arrow chain in Codex's
  DAG between the relevant `00.03.*`, `02.02-10.*` units. Building
  the units automatically builds the chain since the prereqs are
  encoded in each unit's front-matter.
- Pass-W weaving connects the new `02.02-10.*` units to the existing
  `02.01-topology` units (via the metric-space Cauchy/IVT/EVT
  cross-links above) and to the existing `02.11-functional-analysis`
  units (via the Banach-space / completeness / Cauchy-criterion
  cross-links — every functional-analysis unit currently assumes
  the calculus-level real-analysis foundation that Apostol
  provides).

The 23 priority-1+2 units alone close most of the theorem-layer
equivalence gap. Priority-3 closes ODEs, complex numbers, and uniform
convergence. Priority-4 deepens existing units so the topological
foundation (`02.01.*`) cross-cites the new calculus foundation
(`02.02-10.*`) cleanly. The exercise pack is a separate large pass.

**Strategic note: this is the highest-leverage Fast Track audit so
far.** Every later analysis-flavoured unit in Codex
(`02.11-functional-analysis`, `06-riemann-surfaces`, the entire
analytical content of `03-modern-geometry` and `04-algebraic-geometry`)
implicitly assumes the Apostol Vol. I foundation. Closing this gap
unblocks the depth-deepening of every existing analysis-flavoured
unit elsewhere in the corpus. This is the **anchor of the entire
analysis strand.** If the Fast Track had to produce one book's
equivalence-coverage before any other, **this is the one.**
