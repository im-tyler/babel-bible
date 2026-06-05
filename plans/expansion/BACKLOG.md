# Math Expansion — BACKLOG (source of truth for progress)

Worked top-down by the orchestration loop in
`docs/plans/MATH_EXPANSION_ORCHESTRATION.md`. The agent does the FIRST `[ ]` item, marks
it, commits, repeats. Status: `[ ]` todo · `[~]` in progress · `[x]` done · `[-]` skipped
(with reason).

Per spine, steps run in order: SETUP → AUDIT (all books) → PRODUCE (all gaps) → COMMIT +
build_lenses → COMPLETENESS (re-audit, loop-until-dry). Audit gap files land in
`plans/expansion/<spine>/_audit/<book>.gaps.md`. SETUP for a NEW section is the 7-step
checklist in playbook §2a (section dir, field_map section→field row, validate_unit prefix,
sections.ts entry, lens yaml, chapter skeleton, build_lenses smoke-test); a spine that only
EXTENDS an existing section just creates the new chapter dirs.

**Global gate:** Tier A (spines 1-7, pure math) is approved. Tier B (applied/computational,
spines 8-12) is a **HUMAN GATE** — do NOT start it without explicit go-ahead.

---

## Spine 1 — Probability & Stochastics  ·  `probability`  ·  STATUS: setup done, auditing
Section: `content/37-probability` (`probability`). Seeded: `content/02-analysis/15-stochastic-analysis`
(Brownian/Ito/SDE/Feynman-Kac/Stratonovich) already exists — audit AGAINST it, do not redo it.
NEW section → full SETUP (playbook §2a steps 1-7). Prefix `37` → DOMAIN_BY_PREFIX + formal_gap.
**Chapter skeleton** (lay down before auditing; auditors slot ids into this):
`01-measure-foundations · 02-independence-laws-of-large-numbers · 03-clt-characteristic-functions ·
04-conditional-expectation-martingales · 05-markov-chains · 06-brownian-motion-stochastic-calculus
(cross-ref 02.15, don't redo) · 07-large-deviations · 08-random-matrices`

- [x] SETUP: register `probability` section/field/lens + prefix 37 + chapter skeleton (playbook §2a 1-7); smoke-test build_lenses
- [ ] AUDIT: Durrett — *Probability: Theory and Examples* (measure-theoretic core, CLT, LLN, CFs)
- [ ] AUDIT: Williams — *Probability with Martingales* (martingale convergence, optional stopping, UI)
- [ ] AUDIT: Norris — *Markov Chains* (discrete + continuous-time, generators, recurrence)
- [ ] AUDIT: Le Gall — *Brownian Motion, Martingales, and Stochastic Calculus* (depth beyond 02.15)
- [ ] AUDIT: Dembo-Zeitouni — *Large Deviations Techniques and Applications* (Cramer, Sanov, Schilder)
- [ ] AUDIT: Anderson-Guionnet-Zeitouni — *An Introduction to Random Matrices* (Wigner, Tracy-Widom, free prob)
- [ ] PRODUCE: collision-check + produce all genuine gaps; integrate; commit; build_lenses
- [ ] COMPLETENESS: re-audit all 6 books vs the grown corpus; loop-until-dry (0 new gaps); log the dry round
- [ ] (optional) exercise packs for the new probability chapters

## Spine 2 — Modern PDE & Harmonic Analysis  ·  `pde-harmonic`  ·  STATUS: not started
EXTEND `content/02-analysis` (new chapters; NO new section/prefix/sections.ts — skip SETUP
2-5). Field `analysis`. Audit against existing 02.13-pde, 02.14-microlocal, 02.10-harmonic.
**New chapter skeleton** (next free chapter numbers under 02-analysis):
`sobolev-weak-solutions · elliptic-regularity (Schauder/De-Giorgi-Nash-Moser) ·
parabolic-hyperbolic · calderon-zygmund-singular-integrals · littlewood-paley-interpolation ·
dispersive-strichartz`. SETUP here = just create these chapter dirs.

- [ ] AUDIT: Evans — *Partial Differential Equations* (Sobolev, weak solutions, elliptic/parabolic/hyperbolic regularity)
- [ ] AUDIT: Gilbarg-Trudinger — *Elliptic PDE of Second Order* (Schauder, De Giorgi-Nash-Moser, maximum principles)
- [ ] AUDIT: Stein — *Singular Integrals and Differentiability Properties of Functions* (Calderon-Zygmund, Sobolev)
- [ ] AUDIT: Stein-Shakarchi — *Functional Analysis* / *Real Analysis* (Littlewood-Paley, interpolation, Hardy spaces)
- [ ] AUDIT: Tao — *Nonlinear Dispersive Equations* (Strichartz, local/global well-posedness)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses
- [ ] COMPLETENESS: re-audit all 5 books vs the grown corpus; loop-until-dry (0 new gaps); log

## Spine 3 — Analytic Number Theory  ·  `analytic-nt`  ·  STATUS: not started
EXTEND `content/21-number-theory` (new chapters; NO new section/prefix — skip SETUP 2-5).
Field `number-theory`. ⚠️ Verify the section number: `content/21-number-theory` — confirm `21`
is its real prefix before assigning ids (`ls content | grep number-theory`). Orthogonal methods
(complex analysis, exponential sums) to the existing arithmetic-geometry NT.
**New chapter skeleton:** `dirichlet-series-arithmetic-functions · prime-number-theorem ·
dirichlet-l-functions-characters · sieve-methods-large-sieve · exponential-sums · partitions-circle-method`.

- [ ] AUDIT: Davenport — *Multiplicative Number Theory* (PNT, Dirichlet L-functions, zero-free regions)
- [ ] AUDIT: Montgomery-Vaughan — *Multiplicative Number Theory I* (sieves, large sieve, mean values)
- [ ] AUDIT: Iwaniec-Kowalski — *Analytic Number Theory* (the modern toolbox; automorphic L-functions)
- [ ] AUDIT: Apostol — *Introduction to Analytic Number Theory* (arithmetic functions, Dirichlet series, partitions)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses
- [ ] COMPLETENESS: re-audit all 4 books vs the grown corpus; loop-until-dry (0 new gaps); log

## Spine 4 — Dynamical Systems & Ergodic Theory  ·  `dynamics`  ·  STATUS: not started
NEW section `content/38-dynamics` (`dynamics`) → full SETUP (§2a 1-7); prefix `38`. Extends `02.12-ode`.
**Chapter skeleton:** `01-topological-dynamics · 02-symbolic-dynamics · 03-hyperbolicity-structural-stability ·
04-ergodic-theorems (Birkhoff/von-Neumann) · 05-mixing-spectral · 06-entropy · 07-smooth-ergodic-theory`.

- [ ] SETUP: register `dynamics` section/field/lens + prefix 38 + chapter skeleton (§2a 1-7); smoke-test
- [ ] AUDIT: Katok-Hasselblatt — *Introduction to the Modern Theory of Dynamical Systems* (hyperbolicity, structural stability)
- [ ] AUDIT: Walters — *An Introduction to Ergodic Theory* (Birkhoff/von Neumann, mixing, entropy)
- [ ] AUDIT: Brin-Stuck — *Introduction to Dynamical Systems* (topological dynamics, symbolic dynamics)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses
- [ ] COMPLETENESS: re-audit all 3 books vs the grown corpus; loop-until-dry (0 new gaps); log

## Spine 5 — Operator Algebras & Noncommutative Geometry  ·  `operator-algebras`  ·  STATUS: not started
NEW section `content/39-operator-algebras` → full SETUP (§2a 1-7); prefix `39`. Extends index theory / K-theory.
**Chapter skeleton:** `01-c-star-algebras-basics · 02-af-algebras-k-theory · 03-von-neumann-algebras ·
04-tomita-takesaki-modular · 05-nuclearity-exactness · 06-spectral-triples-ncg · 07-cyclic-cohomology`.

- [ ] SETUP: register `operator-algebras` section/field/lens + prefix 39 + chapter skeleton (§2a 1-7); smoke-test
- [ ] AUDIT: Davidson — *C*-algebras by Example* (concrete C*-algebra theory, AF algebras)
- [ ] AUDIT: Takesaki — *Theory of Operator Algebras I* (von Neumann algebras, Tomita-Takesaki)
- [ ] AUDIT: Brown-Ozawa — *C*-algebras and Finite-Dimensional Approximations* (nuclearity, exactness)
- [ ] AUDIT: Connes — *Noncommutative Geometry* (spectral triples, cyclic cohomology)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses
- [ ] COMPLETENESS: re-audit all 4 books vs the grown corpus; loop-until-dry (0 new gaps); log

## Spine 6 — Combinatorics & Graph Theory  ·  `combinatorics`  ·  STATUS: not started
NEW section `content/40-combinatorics` → full SETUP (§2a 1-7); prefix `40`. Near-zero currently.
**Chapter skeleton:** `01-enumeration-generating-functions · 02-posets-lattices · 03-symmetric-functions-rsk ·
04-graph-theory-core (connectivity/matchings/colouring) · 05-extremal-ramsey · 06-design-coding-theory ·
07-probabilistic-method · 08-analytic-combinatorics-asymptotics`.

- [ ] SETUP: register `combinatorics` section/field/lens + prefix 40 + chapter skeleton (§2a 1-7); smoke-test
- [ ] AUDIT: Stanley — *Enumerative Combinatorics I* (posets, generating functions, q-analogues)
- [ ] AUDIT: Stanley — *Enumerative Combinatorics II* (trees, symmetric functions, RSK)
- [ ] AUDIT: Diestel — *Graph Theory* (connectivity, matchings, colouring, minors, Ramsey)
- [ ] AUDIT: van Lint-Wilson — *A Course in Combinatorics* (designs, codes, polya)
- [ ] AUDIT: Alon-Spencer — *The Probabilistic Method* (first/second moment, Lovasz local lemma)
- [ ] AUDIT: Flajolet-Sedgewick — *Analytic Combinatorics* (singularity analysis, asymptotics)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses
- [ ] COMPLETENESS: re-audit all 6 books vs the grown corpus; loop-until-dry (0 new gaps); log

## Spine 7 — Foundations, Logic & Category Theory  ·  `logic-foundations`  ·  STATUS: not started
MIXED: EXTEND `content/25-logic` (logic/model/set/computability — confirm the real prefix with
`ls content | grep logic`; field `foundations-logic`) AND create NEW section
`content/41-category-theory` (full SETUP §2a 1-7; prefix `41`; field `foundations-logic`).
Category theory currently has only the single `01.02.09` unit — audit against it.
**41-category-theory skeleton:** `01-categories-functors-natural-transformations · 02-limits-colimits ·
03-adjunctions · 04-yoneda-representability · 05-monads-algebras · 06-kan-extensions`.
**25-logic new chapters:** `first-order-logic-completeness · model-theory · set-theory-forcing · computability-degrees`.

- [ ] SETUP: `41-category-theory` section/field/lens + prefix 41 + both chapter skeletons (§2a 1-7); smoke-test
- [ ] AUDIT: Enderton — *A Mathematical Introduction to Logic* (first-order logic, completeness, compactness, incompleteness)
- [ ] AUDIT: Marker — *Model Theory: An Introduction* (types, saturation, quantifier elimination, Morley)
- [ ] AUDIT: Kunen — *Set Theory* (ZFC, ordinals/cardinals, forcing, independence)
- [ ] AUDIT: Soare — *Turing Computability* (computability, the arithmetical hierarchy, degrees)
- [ ] AUDIT: Mac Lane — *Categories for the Working Mathematician* (limits, adjoints, monads, Yoneda depth)
- [ ] AUDIT: Riehl — *Category Theory in Context* (representability, Kan extensions)
- [ ] PRODUCE: gaps → integrate → commit → build_lenses
- [ ] COMPLETENESS: re-audit all 6 books vs the grown corpus; loop-until-dry (0 new gaps); log

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
