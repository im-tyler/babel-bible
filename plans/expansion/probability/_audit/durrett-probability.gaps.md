# Audit: Durrett — *Probability: Theory and Examples*

`source_book: durrett-probability`
`source_curriculum: probability`
`section: probability` (new section `content/37-probability/`)

Method: each Durrett headline theorem was verified by filename grep + body grep against
the live corpus (1507 units). The corpus already carries the *measure-theoretic
substrate* (sigma-algebras, Lebesgue integral, Lp, Radon-Nikodym, Fubini) under
`02-analysis/07-measure-theory`, and the *stochastic-calculus* layer (Brownian motion,
Ito, SDEs, Feynman-Kac) under `02-analysis/15-stochastic-analysis`. What is genuinely
absent is the **probability-theoretic core**: the limit theorems and their proof
machinery (Borel-Cantelli, SLLN, characteristic-function CLT, martingale
convergence/optional stopping), general Markov-chain theory, large deviations, and the
random-matrix law as a probability theorem. The `26-statistics` section mentions these
only as one-paragraph survey asides inside single intro units — none states or proves
them. These are the genuine gaps below.

---

## GENUINE GAPS

### 37.02.01 — Borel-Cantelli lemmas and the Kolmogorov 0-1 law
- **id:** `37.02.01`
- **title:** The Borel-Cantelli lemmas and the Kolmogorov 0-1 law
- **spec:** First Borel-Cantelli (summable probabilities ⇒ finitely often a.s.), second Borel-Cantelli for independent events (divergent sum ⇒ infinitely often a.s.), and the Kolmogorov 0-1 law for tail events of independent sequences; applications to a.s. convergence criteria.
- **prereqs:** `02.07.01` (sigma-algebra/measurable space), `02.07.05` (Fatou/dominated convergence), `26.02.01` (independence, basic probability rules)
- **chapter:** `02-independence-laws-of-large-numbers` — `section: probability`, `chapter: 02-independence-laws-of-large-numbers`

### 37.02.02 — The strong law of large numbers
- **id:** `37.02.02`
- **title:** The strong law of large numbers (Kolmogorov) and the weak law
- **spec:** Weak LLN via L2/truncation; Kolmogorov's maximal inequality and the three-series theorem; the strong law for i.i.d. integrable variables (a.s. convergence of the empirical mean to the expectation); Kolmogorov's variance/Cesàro criteria.
- **prereqs:** `37.02.01` (Borel-Cantelli / 0-1 law), `02.07.06` (Lp spaces), `26.03.01` (random variables, expectation)
- **chapter:** `02-independence-laws-of-large-numbers` — `section: probability`, `chapter: 02-independence-laws-of-large-numbers`

### 37.03.01 — Characteristic functions, inversion, and the Lévy continuity theorem
- **id:** `37.03.01`
- **title:** Characteristic functions, the inversion formula, and the Lévy continuity theorem
- **spec:** Characteristic function of a law on R^n, uniqueness/inversion formula, the correspondence between convergence of characteristic functions and weak convergence of distributions (Lévy continuity theorem), tightness/Prokhorov, and moment expansions. The classical finite-dimensional companion to the nuclear-space `02.10.06` Bochner-Minlos unit.
- **prereqs:** `02.10.04` (Fourier transform / Plancherel, Bochner on R^n), `26.02.01` (distributions), `26.03.01` (expectation/moments)
- **chapter:** `03-clt-characteristic-functions` — `section: probability`, `chapter: 03-clt-characteristic-functions`

### 37.03.02 — The Lindeberg-Feller central limit theorem
- **id:** `37.03.02`
- **title:** The Lindeberg-Feller central limit theorem
- **spec:** CLT for triangular arrays via characteristic functions; classical i.i.d. CLT as a corollary; the Lindeberg condition (and Feller's converse / Lyapunov sufficient condition); statement of the Berry-Esseen rate. Theorem-level treatment beyond the survey statement in `26.04.01`.
- **prereqs:** `37.03.01` (characteristic functions / Lévy continuity), `37.02.02` (SLLN context), `26.04.01` (CLT survey statement)
- **chapter:** `03-clt-characteristic-functions` — `section: probability`, `chapter: 03-clt-characteristic-functions`

### 37.04.01 — Martingale convergence and optional stopping
- **id:** `37.04.01`
- **title:** Discrete-time martingales: convergence theorems and optional stopping
- **spec:** Conditional expectation as L2 projection / Radon-Nikodym derivative; filtrations and (sub/super)martingales; Doob's upcrossing inequality and the martingale convergence theorem; Doob's maximal and Lp inequalities; uniform integrability and L1 convergence; the optional stopping theorem. The discrete-time probabilistic core that `02.15` (continuous Ito calculus) assumes but never builds.
- **prereqs:** `02.07.08` (Radon-Nikodym — basis for conditional expectation), `02.07.06` (Lp spaces), `37.02.01` (Borel-Cantelli / a.s. machinery)
- **chapter:** `04-conditional-expectation-martingales` — `section: probability`, `chapter: 04-conditional-expectation-martingales`

### 37.05.01 — Markov chains: recurrence, stationarity, and convergence
- **id:** `37.05.01`
- **title:** Discrete Markov chains: recurrence/transience, stationary distributions, and the convergence theorem
- **spec:** Markov property and transition kernels; the strong Markov property; recurrence vs transience and the dichotomy; existence/uniqueness of stationary distributions; positive recurrence, the ergodic/convergence theorem for irreducible aperiodic chains, and detailed balance/reversibility. General theory distinct from the representation-theoretic random-walk-on-groups mixing units in `07.05`.
- **prereqs:** `37.02.01` (Borel-Cantelli), `37.04.01` (martingale tools for hitting/return times), `26.02.01` (conditional probability)
- **chapter:** `05-markov-chains` — `section: probability`, `chapter: 05-markov-chains`

### 37.07.01 — Cramér's theorem and the large deviation principle
- **id:** `37.07.01`
- **title:** Cramér's theorem and the large deviation principle
- **spec:** Definition of a large deviation principle (rate function, lower/upper bounds); Cramér's theorem for i.i.d. sums via the Legendre transform of the log-MGF; the Gärtner-Ellis theorem; statement of Sanov's theorem and Varadhan's lemma. No existing unit states the LDP framework (only scattered physics-flavored "large deviation" asides).
- **prereqs:** `37.02.02` (SLLN — the law the LDP refines), `37.03.01` (moment generating / characteristic functions), `02.07.06` (Lp / convex analysis context)
- **chapter:** `07-large-deviations` — `section: probability`, `chapter: 07-large-deviations`

### 37.08.01 — The Wigner semicircle law for random matrices
- **id:** `37.08.01`
- **title:** The Wigner semicircle law and the moment method for random matrices
- **spec:** Wigner ensembles (real/complex symmetric matrices with i.i.d. entries); convergence of the empirical spectral distribution to the semicircle law via the moment/Catalan-number method; statement of universality and (at the edge) the Tracy-Widom distribution. Durrett ch.8 treated as *probability*; the corpus's `08.14.06` derives the semicircle only from the QFT large-N genus expansion and explicitly defers the probabilistic ensemble theory.
- **prereqs:** `37.02.02` (SLLN / concentration of empirical measures), `37.03.01` (moment/Stieltjes-transform machinery), `02.07.06` (Lp / spectral context)
- **chapter:** `08-random-matrices` — `section: probability`, `chapter: 08-random-matrices`

---

## COVERED (not gaps)

- **Sigma-algebras, measurable spaces, Borel sets** — `02.07.01`.
- **Lebesgue measure / Carathéodory extension** — `02.07.02`.
- **Measurable functions, a.e. convergence, Egorov/Lusin** — `02.07.03`.
- **Lebesgue integral, monotone convergence** — `02.07.04`.
- **Fatou's lemma, dominated convergence** — `02.07.05`.
- **Lp spaces, Hölder/Minkowski, completeness** — `02.07.06`.
- **Fubini-Tonelli / product measures** (basis for independence and joint laws) — `02.07.07`.
- **Absolute continuity, Radon-Nikodym** (the analytic engine behind conditional expectation; conditional expectation itself is built in the martingale gap `37.04.01`) — `02.07.08`.
- **Fourier transform / Plancherel, Bochner's theorem on R^n** — `02.10.04`.
- **Characteristic functionals on nuclear spaces (Bochner-Minlos)** — the infinite-dimensional field-theory generalization is present at `02.10.06`; the *classical finite-dimensional* characteristic-function theory is the gap `37.03.01`.
- **Brownian motion / Wiener process** (Durrett's BM chapter) — `02.15.01` (and physics-flavored `08.14.01`).
- **Ito integral and Ito's formula** — `02.15.02`.
- **SDEs, diffusions, the generator** (includes optional-stopping-style use in continuous time) — `02.15.03`.
- **Feynman-Kac formula** — `02.15.04`.
- **Stratonovich calculus** — `02.15.05`.
- **Wigner semicircle as a large-N matrix-model saddle** (QFT derivation, Catalan moments, genus expansion) — `08.14.06`; the *probabilistic* random-matrix law (empirical spectral distribution, universality, Tracy-Widom) is the gap `37.08.01`.
- **Random walks on the symmetric group / mixing times / cutoff** (Diaconis-style representation-theoretic) — `07.05.05`, `07.05.07`, `07.05.08`, `07.05.09`, `07.05.15`; the *general* Markov-chain theory is the gap `37.05.01`.
- **De Finetti exchangeability** — `07.05.14`.

## OUT OF SCOPE

- **Survey-level intro probability** (probability rules, named distributions, expectation, basic CLT statement, Bayesian prior/posterior) — already served at the *introductory* tier by `26.02.01`, `26.03.01`, `26.04.01`, `26.07.01`. The gaps above deliberately target the *theorem-and-proof* tier these surveys point at, not a re-do of the survey.
- **Measure-foundations chapter `37.01`** — no genuine gap: Durrett's ch.1 measure theory is fully covered by `02-analysis/07-measure-theory` (see COVERED). The `37.01` slot is left empty rather than duplicating analysis units under the probability section.
- **Continuous-time stochastic-calculus chapter `37.06`** — no genuine gap: Durrett's Brownian/martingale-calculus material is covered by `02.15.01`-`02.15.05`. Slot left empty.
