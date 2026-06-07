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

## Spine 1 — Probability & Stochastics  ·  `probability`  ·  STATUS: COMPLETE (46 units, loop-until-dry converged 2026-06-05)
Section: `content/37-probability` (`probability`). Seeded: `content/02-analysis/15-stochastic-analysis`
(Brownian/Ito/SDE/Feynman-Kac/Stratonovich) already exists — audit AGAINST it, do not redo it.
NEW section → full SETUP (playbook §2a steps 1-7). Prefix `37` → DOMAIN_BY_PREFIX + formal_gap.
**Chapter skeleton** (lay down before auditing; auditors slot ids into this):
`01-measure-foundations · 02-independence-laws-of-large-numbers · 03-clt-characteristic-functions ·
04-conditional-expectation-martingales · 05-markov-chains · 06-brownian-motion-stochastic-calculus
(cross-ref 02.15, don't redo) · 07-large-deviations · 08-random-matrices`

- [x] SETUP: register `probability` section/field/lens + prefix 37 + chapter skeleton (playbook §2a 1-7); smoke-test build_lenses
- [x] AUDIT: Durrett — *Probability: Theory and Examples* (8 gaps → see _audit/durrett-probability.gaps.md)
- [x] AUDIT: Williams — *Probability with Martingales* (3 gaps)
- [x] AUDIT: Norris — *Markov Chains* (12 gaps)
- [x] AUDIT: Le Gall — *Brownian Motion, Martingales, and Stochastic Calculus* (3 gaps, rest covered by 02.15)
- [x] AUDIT: Dembo-Zeitouni — *Large Deviations Techniques and Applications* (11 gaps)
- [x] AUDIT: Anderson-Guionnet-Zeitouni — *An Introduction to Random Matrices* (7 gaps, +1 capstone in completeness)
- [x] PRODUCE: collision-check (see _audit/../PRODUCTION_PLAN.md) → 42 units, 6 waves, all 27/27; integrated; build_lenses
- [x] COMPLETENESS: 2 rounds. R1 surfaced 4 (37.02.03/37.03.03/37.04.04/37.08.09); R2 fully DRY (0 new gaps) across all 6 books
- [ ] (optional) exercise packs for the new probability chapters
- TOTAL: 46 units shipped (42 produce + 4 completeness). probability lens core=51, 0 dangling.

## Spine 2 — Modern PDE & Harmonic Analysis  ·  `pde-harmonic`  ·  STATUS: COMPLETE (37 units, loop-until-dry converged 2026-06-05)
EXTEND `content/02-analysis` (new chapters; NO new section/prefix/sections.ts — skip SETUP
2-5). Field `analysis`. Audit against existing 02.13-pde, 02.14-microlocal, 02.10-harmonic.
**New chapter skeleton** (next free chapter numbers under 02-analysis):
`sobolev-weak-solutions · elliptic-regularity (Schauder/De-Giorgi-Nash-Moser) ·
parabolic-hyperbolic · calderon-zygmund-singular-integrals · littlewood-paley-interpolation ·
dispersive-strichartz`. SETUP here = just create these chapter dirs.

- [x] AUDIT: Evans (13 gaps) · Gilbarg-Trudinger (8) · Stein (6) · Stein-Shakarchi (7) · Tao (6) — see _audit/*.gaps.md
- [x] PRODUCE: collision-checked → 36 units across chapters 16-21 (see pde-harmonic/PRODUCTION_PLAN.md), 6 waves, all 27/27
- [x] COMPLETENESS: 2 rounds. R1 GT/Stein/Stein-Shakarchi/Tao DRY, Evans +1 (02.13.06 Cauchy-Kovalevskaya/Holmgren); R2 fully DRY
- TOTAL: 37 units (36 produce + 1 completeness). chapters 02.16-02.21 + 02.13.06. math area +37.

## Spine 3 — Analytic Number Theory  ·  `analytic-nt`  ·  STATUS: COMPLETE (26 units, loop-until-dry converged 2026-06-05)
EXTEND `content/21-number-theory` (new chapters; NO new section/prefix — skip SETUP 2-5).
Field `number-theory`. ⚠️ Verify the section number: `content/21-number-theory` — confirm `21`
is its real prefix before assigning ids (`ls content | grep number-theory`). Orthogonal methods
(complex analysis, exponential sums) to the existing arithmetic-geometry NT.
**New chapter skeleton:** `dirichlet-series-arithmetic-functions · prime-number-theorem ·
dirichlet-l-functions-characters · sieve-methods-large-sieve · exponential-sums · partitions-circle-method`.

- [x] AUDIT: Davenport (9 gaps) · Montgomery-Vaughan (6) · Iwaniec-Kowalski (8) · Apostol (5) — see _audit/*.gaps.md
- [x] PRODUCE: collision-checked → 26 units across chapters 21.11-21.16 (see analytic-nt/PRODUCTION_PLAN.md), 5 waves, all 27/27
- [x] COMPLETENESS: 1 round, all 4 books DRY (0 new gaps) — converged immediately
- TOTAL: 26 units. chapters 21.11-21.16. math area +26. (audited against existing 21.03 L-functions — analytic proofs were the gaps)

## Spine 4 — Dynamical Systems & Ergodic Theory  ·  `dynamics`  ·  STATUS: COMPLETE (24 units, loop-until-dry converged 2026-06-05)
NEW section `content/38-dynamics` (`dynamics`) → full SETUP (§2a 1-7); prefix `38`. Extends `02.12-ode`.
**Chapter skeleton:** `01-topological-dynamics · 02-symbolic-dynamics · 03-hyperbolicity-structural-stability ·
04-ergodic-theorems (Birkhoff/von-Neumann) · 05-mixing-spectral · 06-entropy · 07-smooth-ergodic-theory`.

- [x] SETUP: section 38 + field/lens/prefix + 7-chapter skeleton; smoke-test passed
- [x] AUDIT: Katok-Hasselblatt (9 gaps) · Walters (7) · Brin-Stuck (9) — see _audit/*.gaps.md
- [x] PRODUCE: collision-checked → 23 units across chapters 38.01-38.07 (see dynamics/PRODUCTION_PLAN.md), 4 waves, all 27/27
- [x] COMPLETENESS: 2 rounds. R1 Walters/Brin-Stuck DRY, K-H +1 (38.07.04 Livšic); R2 fully DRY
- TOTAL: 24 units (23 produce + 1 completeness). dynamics lens core=24. Ergodic theorems reused from 37.02.03 (not re-proposed).

## Spine 5 — Operator Algebras & Noncommutative Geometry  ·  `operator-algebras`  ·  STATUS: COMPLETE (34 units, loop-until-dry converged 2026-06-06)
NEW section `content/39-operator-algebras` → full SETUP (§2a 1-7); prefix `39`. Extends index theory / K-theory.
**Chapter skeleton:** `01-c-star-algebras-basics · 02-af-algebras-k-theory · 03-von-neumann-algebras ·
04-tomita-takesaki-modular · 05-nuclearity-exactness · 06-spectral-triples-ncg · 07-cyclic-cohomology`.

- [x] SETUP: register `operator-algebras` section/field/lens + prefix 39 + chapter skeleton (§2a 1-7); smoke-test
- [x] AUDIT: Davidson — *C*-algebras by Example* (concrete C*-algebra theory, AF algebras)
- [x] AUDIT: Takesaki — *Theory of Operator Algebras I* (von Neumann algebras, Tomita-Takesaki)
- [x] AUDIT: Brown-Ozawa — *C*-algebras and Finite-Dimensional Approximations* (nuclearity, exactness)
- [x] AUDIT: Connes — *Noncommutative Geometry* (spectral triples, cyclic cohomology)
- [x] PRODUCE: 33 units, 7 dependency waves → integrate → commit → build_lenses
- [x] COMPLETENESS: re-audited all 4 books; 3 DRY, 1 firm gap closed (39.05.10 exact groups/property A); converged at 34 units

## Spine 6 — Combinatorics & Graph Theory  ·  `combinatorics`  ·  STATUS: COMPLETE (59 units, loop-until-dry converged 2026-06-06)
NEW section `content/40-combinatorics` → full SETUP (§2a 1-7); prefix `40`. Near-zero currently.
**Chapter skeleton:** `01-enumeration-generating-functions · 02-posets-lattices · 03-symmetric-functions-rsk ·
04-graph-theory-core (connectivity/matchings/colouring) · 05-extremal-ramsey · 06-design-coding-theory ·
07-probabilistic-method · 08-analytic-combinatorics-asymptotics`.

- [x] SETUP: register `combinatorics` section/field/lens + prefix 40 + chapter skeleton (§2a 1-7); smoke-test
- [x] AUDIT: Stanley — *Enumerative Combinatorics I* (posets, generating functions, q-analogues)
- [x] AUDIT: Stanley — *Enumerative Combinatorics II* (trees, symmetric functions, RSK)
- [x] AUDIT: Diestel — *Graph Theory* (connectivity, matchings, colouring, minors, Ramsey)
- [x] AUDIT: van Lint-Wilson — *A Course in Combinatorics* (designs, codes, polya)
- [x] AUDIT: Alon-Spencer — *The Probabilistic Method* (first/second moment, Lovasz local lemma)
- [x] AUDIT: Flajolet-Sedgewick — *Analytic Combinatorics* (singularity analysis, asymptotics)
- [x] PRODUCE: 54 units, 7 dependency waves → integrate → commit → build_lenses
- [x] COMPLETENESS: re-audited all 6 books; EC1/vLW/FS DRY, 5 firm gaps closed (40.03.07/08, 40.04.11, 40.07.08/09); converged at 59 units

## Spine 7 — Foundations, Logic & Category Theory  ·  `logic-foundations`  ·  STATUS: COMPLETE (51 units, loop-until-dry converged 2026-06-07)
⚠️ PREFIX-25 COLLISION (discovered 2026-06-06): `content/25-logic` and `content/25-computer-science`
BOTH use prefix 25 (ids 25.01.01–25.04.01 duplicated across the two; CS occupies chapters 01–12).
Extending 25-logic with 25.05+ would collide with CS. RESOLUTION: the formal mathematical-logic
chapters go into a NEW collision-free section `content/42-mathematical-logic` (prefix 42, section
`mathematical-logic`, field `foundations-logic`) — same field/lens as the existing prose-logic, so
the spine still groups together. (Repo already has multiple prefixes sharing one section: 24-logic
and 25-logic are both `section: logic`.) Category theory is NEW section `content/41-category-theory`
(prefix 41; field `foundations-logic`).
Category theory currently has only the single `01.02.09` unit — audit against it.
**41-category-theory skeleton:** `01-categories-functors-natural-transformations · 02-limits-colimits ·
03-adjunctions · 04-yoneda-representability · 05-monads-algebras · 06-kan-extensions`.
**25-logic new chapters:** `first-order-logic-completeness · model-theory · set-theory-forcing · computability-degrees`.

- [x] SETUP: `41-category-theory` section/field/lens + prefix 41 + both chapter skeletons (§2a 1-7); smoke-test
- [x] AUDIT: Enderton — *A Mathematical Introduction to Logic* (first-order logic, completeness, compactness, incompleteness)
- [x] AUDIT: Marker — *Model Theory: An Introduction* (types, saturation, quantifier elimination, Morley)
- [x] AUDIT: Kunen — *Set Theory* (ZFC, ordinals/cardinals, forcing, independence)
- [x] AUDIT: Soare — *Turing Computability* (computability, the arithmetical hierarchy, degrees)
- [x] AUDIT: Mac Lane — *Categories for the Working Mathematician* (limits, adjoints, monads, Yoneda depth)
- [x] AUDIT: Riehl — *Category Theory in Context* (representability, Kan extensions)
- [x] PRODUCE: 46 units, 8 dependency waves (sections 41 + 42) → integrate → commit → build_lenses
- [x] COMPLETENESS: re-audited all 6 books; Riehl DRY, 5 firm gaps closed (42.05.01 proof theory, 42.02.09 indiscernibles, 42.03.10 club/stationary, 42.04.08 algorithmic randomness, 41.07.01 monoidal); converged at 51 units

---

## Tier B (applied / computational) — HUMAN GATE: do not start without go-ahead

- [x] Spine 8 — Numerical Analysis & Scientific Computing (Trefethen-Bau, Golub-Van Loan, LeVeque, Suli-Mayers) — **COMPLETE (human-gated approval for Spine 8 only; STOP before Spine 9)**
  - [x] SETUP: NEW section `content/43-numerical-analysis` (prefix 43, field `numerical-analysis` shared with existing 24-numerical-pde FEEC; 11-chapter skeleton; validator/sections.ts/lens registered; smoke-test 0 dangling)
  - [x] AUDIT: Trefethen-Bau — *Numerical Linear Algebra* (16 gaps; SVD/QR core found already proven in 01.01.12/01.01.09 → those chapters shrank correctly)
  - [x] AUDIT: Golub-Van Loan — *Matrix Computations* (5 GVL-specific gaps; core deferred to TB)
  - [x] AUDIT: Suli-Mayers — *An Introduction to Numerical Analysis* (11 gaps: root-finding, interpolation/approximation, quadrature)
  - [x] AUDIT: LeVeque — *Finite Difference Methods for ODEs and PDEs* (10 gaps: ODE integrators + finite-difference PDE; FD-vs-FEM seam with 24-numerical-pde cross-ref'd)
  - [x] PRODUCE: 42 units, 8 dependency waves → integrated → committed → build_lenses (plan in plans/expansion/numerical-analysis/PRODUCTION_PLAN.md)
  - [x] COMPLETENESS: re-audited all 4 books loop-until-dry (2 rounds; TB DRY immediately; closed 43.06.12 Sylvester/Lyapunov-Bartels-Stewart + 43.10.06 two-point BVP; round 2 DRY). 44 units total.
- [ ] Spine 9 — Optimization & Control (Boyd-Vandenberghe, Nocedal-Wright, Rockafellar, Bertsekas)
- [ ] Spine 10 — Statistics & Learning Theory (Casella-Berger, van der Vaart, Wasserman, Hastie-Tibshirani-Friedman)
- [ ] Spine 11 — Information & Coding Theory (Cover-Thomas, MacWilliams-Sloane)
- [ ] Spine 12 — Theoretical Computer Science (Sipser, Arora-Barak, Cormen)

---

## Completion target
Tier A (1-7) takes pure math from ~47% to ~85% of pure mathematics. Tier A+B → ~70% of ALL
mathematics. Per `docs/plans/LENS_SYSTEM_AND_MATH_EXPANSION.md`.

## Log (newest first — the agent appends one line per completed wave)
- 2026-06-07 — Spine 8 (numerical-analysis) COMPLETE — **FIRST TIER B SPINE (human-gated approval for Spine 8 ONLY)**: 44 units, NEW section 43-numerical-analysis (prefix 43, field `numerical-analysis` SHARED with the existing 24-numerical-pde FEEC content → both unify under one Numerical Analysis lens). 11 chapters: floating-point/conditioning, nonlinear-equations, direct-linear-solvers, least-squares-qr, svd-low-rank, eigenvalue-algorithms, iterative-krylov-methods, interpolation-approximation, numerical-quadrature, numerical-odes, finite-difference-pdes. Trefethen-Bau/Golub-Van Loan/Suli-Mayers/LeVeque. 8 dependency waves (42 units) + 2 completeness rounds (TB DRY immediately — SVD/QR/Hermitian-eigenvalue core already proven in 01.01.09/12/14, so 43.04/43.05 shrank to the algorithmic residue; 2 gaps closed: 43.06.12 Sylvester/Lyapunov-Bartels-Stewart [GVL], 43.10.06 two-point-BVP finite differences [LeVeque Ch.2/Süli Ch.13, deduped]; round 2 DRY). FD-vs-FEM seam cross-ref'd to 24-numerical-pde (Galerkin) not duplicated; continuous PDE theory cross-ref'd to 02.13/17/18; matrix-exp to 02.06.03; Lyapunov to 02.12.08. math area +44 (1305→1349). **Tier B HUMAN GATE REMAINS — do NOT start Spine 9 (optimization) without explicit go-ahead.**
- 2026-06-07 — Spine 7 (logic-foundations) COMPLETE — **LAST TIER A SPINE**: 51 units across TWO new sections. NEW section 42-mathematical-logic (prefix 42; 4 chapters first-order-logic-completeness/model-theory/set-theory-forcing/computability-degrees + completeness chapter 05-proof-theory = 38 units; Enderton/Marker/Kunen/Soare) AND NEW section 41-category-theory (prefix 41; 6 chapters + completeness chapter 07-monoidal-categories = 13 units; Mac Lane/Riehl). ⚠️ prefix-25 collision (25-logic vs 25-computer-science) forced formal logic onto fresh prefix 42 rather than extending 25-logic. 8 dependency waves (46 units) + 1 completeness round (Riehl DRY; 5 gaps: proof-theory 42.05.01 [closed a dangling fwd-ref from 42.01.05], indiscernibles 42.02.09, club/stationary/Fodor 42.03.10, algorithmic randomness 42.04.08, monoidal categories 41.07.01). Greenfield; deepens the elementary 24/25-logic + the 01.02.09 category survey; cross-refs Ramsey 40.05.04, ordinals/epsilon_0, Nullstellensatz 04.02.07, CS complexity 25.03.01, number theory 21.01.08 (MRDP). math area +51. **ALL TIER A COMPLETE (spines 1-7). NEXT = Tier B HUMAN GATE — STOP and ask before spines 8-12.**
- 2026-06-06 — Spine 6 (combinatorics) COMPLETE: 59 units, NEW section 40 (8 chapters: enumeration-GF/posets-lattices/symmetric-functions-rsk/graph-theory-core/extremal-ramsey/design-coding-theory/probabilistic-method/analytic-combinatorics). Stanley EC1+EC2/Diestel/van-Lint-Wilson/Alon-Spencer/Flajolet-Sedgewick. 7 dependency waves (54 units) + 1 completeness round (EC1/vLW/FS DRY; 5 gaps closed: plane-partitions/MacMahon 40.03.07, QSym 40.03.08, Hamilton cycles 40.04.11, discrepancy 40.07.08, Rödl nibble 40.07.09). Greenfield; cross-refs to rep-theory S_n 07.05.*, finite fields 21.02.01, complex analysis 06.01.*, probability 37.*, partitions/circle-method 21.16.*. Orphan matrix-tree/Cayley/Lagrange folded into enumeration as 40.01.07. math area +59. Next: Spine 7 (logic-foundations) — LAST Tier A spine.
- 2026-06-06 — Spine 5 (operator-algebras) COMPLETE: 34 units, NEW section 39 (7 chapters: c-star-basics/af-k-theory/von-neumann/tomita-takesaki/nuclearity-exactness/spectral-triples-ncg/cyclic-cohomology). Davidson/Takesaki/Brown-Ozawa/Connes. 7 dependency waves + 1 completeness round (Davidson/Takesaki/Connes DRY; Brown-Ozawa one gap → 39.05.10 exact groups/property A; 39.05.11 amenable traces skipped as below-bar). Operator K-theory kept distinct from topological K-theory 03.08; analytic cyclic cohomology cross-refs algebraic 04.03.22; local index formula cross-refs Atiyah-Singer 03.09.10. math area +34. Next: Spine 6 (combinatorics, NEW section 40).
- 2026-06-05 — Spine 4 (dynamics) COMPLETE: 24 units, NEW section 38 (7 chapters: topological/symbolic/hyperbolicity/ergodic/mixing-spectral/entropy/smooth-ergodic). Katok-Hasselblatt/Walters/Brin-Stuck. 4 produce waves + 2 completeness rounds (K-H +Livšic, then DRY). Ergodic theorems reused from 37.02.03. math area +24. Next: Spine 5 (operator-algebras, NEW section 39).
- 2026-06-05 — Spine 3 (analytic-nt) COMPLETE: 26 units extending 21-number-theory (chapters 11-16). Davenport/Montgomery-Vaughan/Iwaniec-Kowalski/Apostol. 5 produce waves + 1 completeness round (all 4 books DRY immediately). Analytic proofs (PNT contour, zero-free regions, large sieve, exponential sums, circle method) were the gaps vs the existing algebraic 21.03 L-functions. math area +26. Next: Spine 4 (dynamics, NEW section 38).
- 2026-06-05 — Spine 2 (pde-harmonic) COMPLETE: 37 units extending 02-analysis (chapters 16-21 + classical 02.13.06). Evans/GT/Stein/Stein-Shakarchi/Tao. 6 produce waves + 2 completeness rounds (converged). math area +37. Next: Spine 3 (analytic-nt, EXTENDS 21-number-theory).
- 2026-06-05 — Spine 1 (probability) COMPLETE: section 37 SETUP + 46 units across 6 produce waves + 2 completeness rounds (loop-until-dry converged). probability lens core 5→51, math area +46, 0 dangling. Next: Spine 2 (pde-harmonic, EXTENDS 02-analysis).
