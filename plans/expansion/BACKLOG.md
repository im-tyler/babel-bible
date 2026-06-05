# Math Expansion — BACKLOG (source of truth for progress)

Worked top-down by the orchestration loop in
`docs/plans/MATH_EXPANSION_ORCHESTRATION.md`. The agent does the FIRST `[ ]` item, marks
it, commits, repeats. Status: `[ ]` todo · `[~]` in progress · `[x]` done · `[-]` skipped
(with reason).

Per spine, steps run in order: SETUP → AUDIT (all books) → PRODUCE (all gaps) → COMMIT +
build_lenses. Audit gap files land in `plans/expansion/<spine>/_audit/<book>.gaps.md`.

**Global gate:** Tier A (spines 1-7, pure math) is approved. Tier B (applied/computational,
spines 8-12) is a **HUMAN GATE** — do NOT start it without explicit go-ahead.

---

## Spine 1 — Probability & Stochastics  ·  `probability`  ·  STATUS: not started
Section: `content/37-probability` (`probability`). Seeded: `content/02-analysis/15-stochastic-analysis`
(Brownian/Ito/SDE/Feynman-Kac/Stratonovich) already exists — audit AGAINST it, do not redo it.

- [ ] SETUP: register `probability` section/field/lens (see playbook §2a, §4)
- [ ] AUDIT: Durrett — *Probability: Theory and Examples* (measure-theoretic core, CLT, LLN, CFs)
- [ ] AUDIT: Williams — *Probability with Martingales* (martingale convergence, optional stopping, UI)
- [ ] AUDIT: Norris — *Markov Chains* (discrete + continuous-time, generators, recurrence)
- [ ] AUDIT: Le Gall — *Brownian Motion, Martingales, and Stochastic Calculus* (depth beyond 02.15)
- [ ] AUDIT: Dembo-Zeitouni — *Large Deviations Techniques and Applications* (Cramer, Sanov, Schilder)
- [ ] AUDIT: Anderson-Guionnet-Zeitouni — *An Introduction to Random Matrices* (Wigner, Tracy-Widom, free prob)
- [ ] PRODUCE: collision-check + produce all genuine gaps; integrate; commit; build_lenses
- [ ] (optional) exercise packs for the new probability chapters

## Spine 2 — Modern PDE & Harmonic Analysis  ·  `pde-harmonic`  ·  STATUS: not started
Extend `content/02-analysis` (new chapters); field `analysis`. Audit against existing
02.13-pde, 02.14-microlocal, 02.10-harmonic.

- [ ] AUDIT: Evans — *Partial Differential Equations* (Sobolev, weak solutions, elliptic/parabolic/hyperbolic regularity)
- [ ] AUDIT: Gilbarg-Trudinger — *Elliptic PDE of Second Order* (Schauder, De Giorgi-Nash-Moser, maximum principles)
- [ ] AUDIT: Stein — *Singular Integrals and Differentiability Properties of Functions* (Calderon-Zygmund, Sobolev)
- [ ] AUDIT: Stein-Shakarchi — *Functional Analysis* / *Real Analysis* (Littlewood-Paley, interpolation, Hardy spaces)
- [ ] AUDIT: Tao — *Nonlinear Dispersive Equations* (Strichartz, local/global well-posedness)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses

## Spine 3 — Analytic Number Theory  ·  `analytic-nt`  ·  STATUS: not started
Extend `content/21-number-theory` (new chapters); field `number-theory`. Orthogonal methods
(complex analysis, exponential sums) to the existing arithmetic-geometry NT.

- [ ] AUDIT: Davenport — *Multiplicative Number Theory* (PNT, Dirichlet L-functions, zero-free regions)
- [ ] AUDIT: Montgomery-Vaughan — *Multiplicative Number Theory I* (sieves, large sieve, mean values)
- [ ] AUDIT: Iwaniec-Kowalski — *Analytic Number Theory* (the modern toolbox; automorphic L-functions)
- [ ] AUDIT: Apostol — *Introduction to Analytic Number Theory* (arithmetic functions, Dirichlet series, partitions)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses

## Spine 4 — Dynamical Systems & Ergodic Theory  ·  `dynamics`  ·  STATUS: not started
Section `content/38-dynamics` (`dynamics`). Extends `02.12-ode`.

- [ ] AUDIT: Katok-Hasselblatt — *Introduction to the Modern Theory of Dynamical Systems* (hyperbolicity, structural stability)
- [ ] AUDIT: Walters — *An Introduction to Ergodic Theory* (Birkhoff/von Neumann, mixing, entropy)
- [ ] AUDIT: Brin-Stuck — *Introduction to Dynamical Systems* (topological dynamics, symbolic dynamics)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses

## Spine 5 — Operator Algebras & Noncommutative Geometry  ·  `operator-algebras`  ·  STATUS: not started
Section `content/39-operator-algebras`. Extends index theory / K-theory.

- [ ] AUDIT: Davidson — *C*-algebras by Example* (concrete C*-algebra theory, AF algebras)
- [ ] AUDIT: Takesaki — *Theory of Operator Algebras I* (von Neumann algebras, Tomita-Takesaki)
- [ ] AUDIT: Brown-Ozawa — *C*-algebras and Finite-Dimensional Approximations* (nuclearity, exactness)
- [ ] AUDIT: Connes — *Noncommutative Geometry* (spectral triples, cyclic cohomology)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses

## Spine 6 — Combinatorics & Graph Theory  ·  `combinatorics`  ·  STATUS: not started
Section `content/40-combinatorics`. Near-zero currently.

- [ ] AUDIT: Stanley — *Enumerative Combinatorics I* (posets, generating functions, q-analogues)
- [ ] AUDIT: Stanley — *Enumerative Combinatorics II* (trees, symmetric functions, RSK)
- [ ] AUDIT: Diestel — *Graph Theory* (connectivity, matchings, colouring, minors, Ramsey)
- [ ] AUDIT: van Lint-Wilson — *A Course in Combinatorics* (designs, codes, polya)
- [ ] AUDIT: Alon-Spencer — *The Probabilistic Method* (first/second moment, Lovasz local lemma)
- [ ] AUDIT: Flajolet-Sedgewick — *Analytic Combinatorics* (singularity analysis, asymptotics)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses

## Spine 7 — Foundations, Logic & Category Theory  ·  `logic-foundations`  ·  STATUS: not started
Extend `content/24-logic`/`25-logic` + section `content/41-category-theory`. Field `foundations-logic`.

- [ ] AUDIT: Enderton — *A Mathematical Introduction to Logic* (first-order logic, completeness, compactness, incompleteness)
- [ ] AUDIT: Marker — *Model Theory: An Introduction* (types, saturation, quantifier elimination, Morley)
- [ ] AUDIT: Kunen — *Set Theory* (ZFC, ordinals/cardinals, forcing, independence)
- [ ] AUDIT: Soare — *Turing Computability* (computability, the arithmetical hierarchy, degrees)
- [ ] AUDIT: Mac Lane — *Categories for the Working Mathematician* (limits, adjoints, monads, Yoneda depth)
- [ ] AUDIT: Riehl — *Category Theory in Context* (representability, Kan extensions)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses

---

## Tier B (applied / computational) — HUMAN GATE: do not start without go-ahead

- [ ] Spine 8 — Numerical Analysis & Scientific Computing (Trefethen-Bau, Golub-Van Loan, LeVeque, Suli-Mayers)
- [ ] Spine 9 — Optimization & Control (Boyd-Vandenberghe, Nocedal-Wright, Rockafellar, Bertsekas)
- [ ] Spine 10 — Statistics & Learning Theory (Casella-Berger, van der Vaart, Wasserman, Hastie-Tibshirani-Friedman)
- [ ] Spine 11 — Information & Coding Theory (Cover-Thomas, MacWilliams-Sloane)
- [ ] Spine 12 — Theoretical Computer Science (Sipser, Arora-Barak, Cormen)

---

## Completion target
Tier A (1-7) takes pure math from ~47% to ~85% of pure mathematics. Tier A+B → ~70% of ALL
mathematics. Per `docs/plans/LENS_SYSTEM_AND_MATH_EXPANSION.md`.

## Log (newest first — the agent appends one line per completed wave)
- (none yet)
