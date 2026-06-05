# Audit — Norris, *Markov Chains* (CUP, 1997)

- **source_book:** `norris-markov-chains`
- **source_curriculum:** `probability`
- **target chapter:** `content/37-probability/05-markov-chains/` (frontmatter `section: probability`, `chapter: 05-markov-chains`, id format `37.05.<UU>`)
- **date:** 2026-06-05

## Verdict

The `37-probability` section is a **freshly scaffolded, empty** chapter set (all of
`01-measure-foundations` … `08-random-matrices` are empty directories). No unit anywhere in
`content/` states the general theory of Markov chains: the only adjacent material is
(a) the representation-theory units `07.05.0x`, which treat **random walks on finite groups
via non-abelian Fourier analysis** (mixing times, cutoff, strong stationary times) — a
different toolset and goal than Norris' state-classification theory; (b) stat-mech / SDE
units (`08.10.02` Fokker-Planck, `02.15.03` SDE generator) which are **continuous-state
diffusion generators**, not countable-state Markov generator theory; (c) `26.02.01`,
which is elementary probability with no chain theory.

Consequently **the core of Norris is a genuine gap.** Below is a tight spine of the
headline theorems/constructions that should become units. Marginal/expository topics
(book's worked examples, MCMC asides) are folded into the units they illustrate rather
than spun out, per quality-over-quantity.

**Prereq convention.** Anchors verified to exist:
`02.07.01` (σ-algebras), `02.07.04` (Lebesgue integral), `02.07.08` (Radon-Nikodym),
`02.15.03` (SDE / diffusion generator, cross-ref), `26.02.01` (elementary probability),
`07.05.05` (finite-group random walk, cross-ref). Prereqs of the form `37.0x.xx` /
`37.05.xx` are **planned sibling units in this same section** (chapters `37.01`–`37.04`
audited in parallel; intra-chapter `37.05.*` ids defined below). They are listed as
prereqs so the producer can wire the DAG once those siblings land.

---

## GENUINE GAPS

### 37.05.01 — Markov property, transition matrices, and the Chapman–Kolmogorov equations
- **spec:** Define a discrete-time Markov chain on a countable state space via a stochastic transition matrix \(P\); prove the (simple and strong) Markov property and the Chapman–Kolmogorov identity \(p^{(m+n)}_{ij}=\sum_k p^{(m)}_{ik}p^{(n)}_{kj}\); law of a chain from \((\lambda,P)\).
- **prereqs:** `26.02.01`, `02.07.01`, `37.01.01` (planned: probability space / Kolmogorov extension)
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.02 — Class structure, communication, irreducibility, and periodicity
- **spec:** The communication relation \(i\leftrightarrow j\) as an equivalence; closed/absorbing classes; irreducibility; period \(d(i)=\gcd\{n:p^{(n)}_{ii}>0\}\) is a class property; aperiodicity.
- **prereqs:** `37.05.01`
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.03 — Hitting probabilities and expected hitting times (minimal non-negative solutions)
- **spec:** Hitting probabilities \(h^A_i\) and mean hitting times \(k^A_i\) as the minimal non-negative solutions of their respective linear systems; first-step analysis; gambler's ruin and birth–death hitting as the canonical solved cases.
- **prereqs:** `37.05.01`, `37.05.02`
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.04 — Strong Markov property and recurrence/transience dichotomy
- **spec:** Stopping times and the strong Markov property at a stopping time; return time \(T_i\); the dichotomy via \(\sum_n p^{(n)}_{ii}\) (recurrent iff the series diverges iff \(\mathbb{P}_i(T_i<\infty)=1\)); recurrence/transience as class properties; solidarity theorem.
- **prereqs:** `37.05.01`, `37.05.02`, `37.04.01` (planned: martingales / optional stopping, cross-ref)
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.05 — Invariant (stationary) measures and distributions; existence and uniqueness for irreducible recurrent chains
- **spec:** Invariant measures \(\nu=\nu P\); the excursion/return-time construction \(\gamma^k_i=\mathbb{E}_k[\#\text{visits to }i\text{ before return to }k]\); existence for irreducible recurrent chains and uniqueness up to scalar; positive vs null recurrence via \(\mathbb{E}_i[T_i]\).
- **prereqs:** `37.05.03`, `37.05.04`
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.06 — Convergence to equilibrium for aperiodic irreducible positive-recurrent chains (coupling proof)
- **spec:** For an irreducible aperiodic positive-recurrent chain, \(p^{(n)}_{ij}\to \pi_j=1/\mathbb{E}_j[T_j]\); proof by the coupling of two independent copies; periodic-case statement along the period; total-variation framing (cross-ref the finite-group cutoff results).
- **prereqs:** `37.05.05`, `07.05.05` (cross-ref: finite-group mixing), `07.05.08` (cross-ref: cutoff)
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.07 — Ergodic theorem for Markov chains (long-run averages and detailed balance)
- **spec:** Strong law for additive functionals \(\frac1n\sum_{k<n}f(X_k)\to\sum_i \pi_i f(i)\) a.s. (ergodic theorem via excursions / renewal-reward); reversibility and detailed balance \(\pi_i p_{ij}=\pi_j p_{ji}\); reversible chains and their use (MCMC / Metropolis as the application).
- **prereqs:** `37.05.05`, `37.02.01` (planned: strong law of large numbers)
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.08 — Continuous-time chains I: Q-matrices, jump chains, and holding times
- **spec:** The generator / Q-matrix (conservative, off-diagonal \(\ge 0\), rows sum to 0); construction of a minimal right-continuous chain from jump chain \(\Pi\) plus exponential holding times \(\mathrm{Exp}(q_i)\); the Markov property in continuous time; explosion and non-explosion (Reuter's criterion).
- **prereqs:** `37.05.01`, `02.15.03` (cross-ref: diffusion generators), `37.01.01` (planned)
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.09 — Continuous-time chains II: backward/forward (Kolmogorov) equations and the semigroup
- **spec:** Transition semigroup \(P(t)=e^{tQ}\); backward equation \(P'(t)=QP(t)\) and forward equation \(P'(t)=P(t)Q\); existence/uniqueness for the minimal solution; relation to the matrix exponential on finite state spaces.
- **prereqs:** `37.05.08`, `02.07.04`
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.10 — Recurrence, invariant distributions, and convergence for continuous-time chains
- **spec:** Class structure, recurrence/transience and positive recurrence in continuous time; invariant distribution \(\pi Q=0\); convergence to equilibrium and the continuous-time ergodic theorem; detailed balance for continuous-time chains.
- **prereqs:** `37.05.08`, `37.05.09`, `37.05.05`, `37.05.06`
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.11 — The Poisson process: equivalent characterizations
- **spec:** The Poisson process of rate \(\lambda\) as a continuous-time Markov chain; three equivalent definitions (independent stationary increments / infinitesimal definition / exponential inter-arrival times); superposition and thinning; the order-statistics property of arrivals given \(N_t=n\).
- **prereqs:** `37.05.08`, `26.02.01`
- **chapter:** `05-markov-chains` · **section:** `probability`

### 37.05.12 — Birth–death processes and queueing chains
- **spec:** Birth–death generators; explosion/recurrence criteria via the \(\gamma\)-series; stationary distribution by detailed balance; the M/M/1 (and M/M/∞) queue as the worked application, including stability condition \(\lambda<\mu\) and stationary geometric law.
- **prereqs:** `37.05.10`, `37.05.11`
- **chapter:** `05-markov-chains` · **section:** `probability`

---

## COVERED (not gaps)

- **Random walk on a finite group / Upper Bound Lemma** — `07.05.05` (Fourier-analytic; cross-referenced by 37.05.06, not duplicated).
- **Cutoff phenomenon** — `07.05.08`.
- **Strong stationary times (coupling for finite-group walks)** — `07.05.09` (the coupling *method* recurs in 37.05.06, but the finite-group result is distinct).
- **Ehrenfest / Bernoulli–Laplace urn diffusions (specific reversible chains)** — `07.05.15`.
- **Wright–Fisher model as a Markov chain + diffusion approximation** — `19.02.05` (population-genetics application of chain + diffusion limit).
- **Fokker–Planck equation / stationary (equilibrium) distribution** — `08.10.02` (continuous-state generator; the diffusion analogue of the forward equation).
- **SDE / diffusion infinitesimal generator** — `02.15.03` (continuous-state generator theory; cross-referenced by 37.05.08–09 for contrast).
- **Brownian motion / Wiener process** — `02.15.01` and `03.02.45` (continuous-path Markov process; lands in `37.06`, out of this chapter's scope).
- **Detailed balance / equilibrium in stat-mech** — `08.01.03` (Boltzmann distribution), `08.12.01` (fluctuation-dissipation): physics framing, not the chain theorem; 37.05.07 supplies the probabilistic statement.
- **Elementary probability (events, conditional probability, expectation)** — `26.02.01`, `26.03.01`: prerequisites, not chain theory.

## OUT OF SCOPE

- **Book's extended worked examples / case studies** (e.g. specific genetics, chemistry-network, Markov-decision asides used to motivate definitions) — folded into the relevant theorem units above; not spun out as standalone units.
- **MCMC / Metropolis–Hastings algorithmics** — the *theorem* basis (reversibility, convergence) is in 37.05.06–07; algorithm engineering belongs to a statistics/CS unit, not the probability spine.
- **Measure-theoretic foundations of the probability space and Kolmogorov extension** — belong to sibling chapter `37.01-measure-foundations` (audited separately under Durrett); referenced here as prereq `37.01.01`, not re-proposed.
- **Martingale machinery (optional stopping, convergence)** — sibling chapter `37.04` (Williams audit); referenced as prereq `37.04.01`.

---

## RETURN SUMMARY
- **Genuine gaps:** 12 (37.05.01 – 37.05.12)
- **COVERED:** 10 topics (mapped to existing ids)
- **OUT OF SCOPE:** 4
- **Gap file:** `plans/expansion/probability/_audit/norris-markov-chains.gaps.md`
