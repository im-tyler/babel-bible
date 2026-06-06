# Completeness re-audit: Durrett — *Probability: Theory and Examples*

`source_book: durrett-probability`
`source_curriculum: probability`
`section: probability` (`content/37-probability/`)

**Second pass.** The probability spine is now fully produced: `37.01`-`37.08`
(measure foundations, Borel-Cantelli/0-1, SLLN, char-functions/Lévy, Lindeberg-Feller,
discrete martingales ×3, the full Markov chapter `37.05.01-12`, continuous local
martingales / martingale representation / local time `37.06.01-03`, large deviations
`37.07.01-11`, random matrices `37.08.01-08`) plus stochastic calculus
`02.15.01-05`. The eight first-pass gaps in `durrett-probability.gaps.md` all shipped.

Method: each Durrett headline theorem (chapters 1-9 of the 5th ed.) was re-checked by
filename grep + body grep against the now-larger corpus. The conservative bar: a
headline counts as a new gap only if it is **neither built nor stated** anywhere as a
standalone result of real curricular value.

Result: the limit-theorem core, the entire weak-convergence/char-function layer, the
martingale theory, the full Markov theory (incl. Chung-Fuchs/Pólya recurrence at
`37.05.04`, renewal-reward at `37.05.07`, Poisson process at `37.05.11`), large
deviations, Brownian/Itô calculus, and random matrices are all covered. **Two**
Durrett headline blocks survive the second pass: the **general measure-preserving
ergodic theorems** (Durrett ch.6) and **Donsker's invariance principle** (Durrett
§8.1). Both are only *named* in bridge paragraphs, never built.

---

## GENUINE GAPS

### 37.02.03 — Birkhoff's ergodic theorem and Kingman's subadditive ergodic theorem
- **id:** `37.02.03`
- **title:** Stationary sequences and the ergodic theorems (Birkhoff, von Neumann, Kingman)
- **spec:** Measure-preserving transformations and stationary sequences; the invariant
  $\sigma$-field, ergodicity (invariant sets are null or co-null) and mixing;
  von Neumann's mean ($L^2$) ergodic theorem; the **maximal ergodic lemma** and
  Birkhoff's **pointwise ergodic theorem** — $\tfrac1n\sum_{k<n} f(\Theta^k\omega) \to
  \mathbb{E}[f\mid\mathcal{I}]$ a.s. and in $L^1$, equal to $\mathbb{E}[f]$ when $\Theta$
  is ergodic; **Kingman's subadditive ergodic theorem** for stationary subadditive
  families $X_{0,n}$ (with the longest-increasing-subsequence / products-of-random-
  matrices / first-passage-percolation applications). This is the measure-theoretic
  *parent* that the SLLN `37.02.02` and the Markov-chain ergodic theorem `37.05.07`
  specialise: `37.05.07` Thm 4 only **states** Birkhoff as a one-paragraph parent
  remark, and `05.02.08` (Poincaré recurrence) discusses it as an **unproved**
  exercise ("the full lower-density statement is Birkhoff and requires the maximal
  ergodic theorem"). Kingman's theorem is absent everywhere (no hit in the corpus).
- **prereqs:** `37.02.02` (SLLN — the i.i.d. special case the ergodic theorem
  generalises), `02.07.06` ($L^p$ spaces / $L^1$ and $L^2$ convergence),
  `37.04.03` (conditional expectation as the projection onto $\mathcal{I}$; Doob/UI
  machinery)
- **chapter:** `02-independence-laws-of-large-numbers` — `section: probability`,
  `chapter: 02-independence-laws-of-large-numbers`

### 37.03.03 — Donsker's invariance principle (the functional central limit theorem)
- **id:** `37.03.03`
- **title:** Weak convergence on path space and Donsker's invariance principle
- **spec:** Weak convergence of probability measures on the Polish space
  $C[0,1]$; tightness and Prokhorov's criterion via modulus-of-continuity bounds;
  the linearly interpolated, $n^{-1/2}$-rescaled partial-sum process
  $S^{(n)}_t = n^{-1/2}\big(S_{\lfloor nt\rfloor} + (nt-\lfloor nt\rfloor)X_{\lfloor
  nt\rfloor+1}\big)$ of i.i.d. mean-zero variance-one summands; **Donsker's theorem**
  that $S^{(n)} \Rightarrow B$ in $C[0,1]$ (Brownian motion as the universal scaling
  limit of random walk); the continuous-mapping corollaries (max, occupation time,
  the arcsine law for the last sign change) and a statement of the Skorokhod
  embedding as the standard proof route. This is the **functional** generalisation of
  the Lindeberg-Feller CLT `37.03.02` and the *probabilistic* construction of
  Brownian motion complementary to the Lévy-Ciesielski/Gaussian-increment
  construction in `02.15.01` (which builds Wiener measure axiomatically, not as a
  random-walk limit). Donsker is currently only named in bridge paragraphs of
  `37.03.02` and `02.15.01`; no unit states or proves it.
- **prereqs:** `37.03.02` (Lindeberg-Feller CLT — the finite-dimensional marginals),
  `02.15.01` (Brownian motion / Wiener measure on $C[0,1]$ — the limit object),
  `37.05.04` (strong Markov / reflection-principle hitting laws used for the
  continuous-mapping corollaries)
- **chapter:** `03-clt-characteristic-functions` — `section: probability`,
  `chapter: 03-clt-characteristic-functions`

---

## COVERED on the second pass (re-verified, not gaps)

- **First-pass eight** (`37.02.01`, `37.02.02`, `37.03.01`, `37.03.02`, `37.04.01`,
  `37.05.01`→shipped as `37.05.01-12`, `37.07.01`→`37.07.01-11`, `37.08.01`) — all shipped.
- **Chung-Fuchs / Pólya recurrence of random walk on $\mathbb{Z}^d$** (recurrent
  $d\le 2$, transient $d\ge 3$, Green-function / local-CLT proof) — `37.05.04`.
- **Renewal-reward / regeneration** (the renewal engine behind the ergodic theorem) —
  `37.05.07`; the Poisson process as the constant-rate renewal skeleton — `37.05.11`.
- **Kolmogorov three-series theorem, maximal inequality, Marcinkiewicz-Zygmund** —
  `37.02.02`.
- **Law of the iterated logarithm** — *stated with the sharp constant* (the
  $\sqrt{2n\log\log n}$ envelope) in `37.02.02` and as a display in `02.15.01`; not a
  standalone proof unit, but stated-with-constant clears the conservative bar, so **not
  a new gap**.
- **Optional stopping / upcrossing / Doob $L^p$ + UI** — `37.04.01-03`.
- **Weak convergence, tightness, Prokhorov (finite-dimensional)** — `37.03.01`; the
  *path-space* (functional) version is the gap `37.03.03`.
- **Continuous-time Markov / Q-matrices / birth-death / queues** — `37.05.08-12`.
- **Brownian motion, Itô, SDEs, Feynman-Kac, Stratonovich, local time, martingale
  representation** — `02.15.01-05`, `37.06.01-03`.

## OUT OF SCOPE / not gaps

- **Measure-foundations chapter `37.01`** — Durrett ch.1 served by `02-analysis/
  07-measure-theory`; `37.01.01` carries the probability-specific
  Kolmogorov-extension piece. No gap.
- **Poisson approximation / Stein-Chen "law of small numbers"** (Durrett §3.6) —
  minor; the survey statement at `26.02.01` plus the Poisson-process construction at
  `37.05.11` suffice. Not a curricular headline worth a dedicated unit.
- **Renewal theorem (Blackwell / key renewal)** (Durrett §2.6, §3.4) — instrumental;
  the renewal-reward content the spine actually uses is built into `37.05.07`. Not a
  standalone gap.

## DRY?

2 new gaps

---

## Round 2

**Verdict: DRY — 0 new gaps.**

Confirmed both round-1 additions are now on disk as full, three-tier units:

- `37.02.03` — *The Ergodic Theorems: Birkhoff, von Neumann, and Kingman*
  (`content/37-probability/02-independence-laws-of-large-numbers/37.02.03-ergodic-theorems-birkhoff-von-neumann-kingman.md`,
  ~6800 words, `tiers_present: [beginner, intermediate, master]`).
- `37.03.03` — *Donsker's Invariance Principle and the Functional Central Limit
  Theorem* (`content/37-probability/03-clt-characteristic-functions/37.03.03-donsker-invariance-principle-functional-clt.md`,
  ~6250 words, all three tiers).

Re-swept Durrett's remaining headline theorems (chs. 1-9, 5th ed.) by filename + body
grep against the now-larger corpus (`37.01`-`37.08` plus `02.15.01-05`). Every headline
resolves to an existing unit:

- Birkhoff / von Neumann / Kingman → `37.02.03`; Donsker / Skorokhod embedding / arcsine
  law → `37.03.03`.
- Chung-Fuchs / Pólya recurrence-transience of random walk → `37.05.04` (+ `37.05.05`,
  `37.05.10`, `37.05.12`).
- Glivenko-Cantelli, Kolmogorov three-series, LIL (stated with sharp constant),
  Hewitt-Savage 0-1 → `37.02.02` (+ char-function/0-1 layer).
- de Finetti / exchangeability, optional stopping, upcrossing, Doob $L^p$/UI,
  Radon-Nikodym (conditional expectation) → `37.04.01-04`.
- Renewal-reward, Poisson process, continuous-time Markov / Q-matrices / birth-death /
  queues → `37.05.07-12`.
- Large deviations (Cramér, Sanov, Gärtner-Ellis, Varadhan, Schilder,
  Freidlin-Wentzell) → `37.07.01-11`; random matrices → `37.08.01-09`; Brownian/Itô/SDE/
  Feynman-Kac/Stratonovich/local time/martingale representation → `02.15.01-05`,
  `37.06.01-03`.

The previously-noted OUT-OF-SCOPE items (Poisson approximation / Stein-Chen §3.6,
Blackwell / key renewal theorem §2.6) remain instrumental, not standalone curricular
headlines — unchanged from round 1; no `Chung-Fuchs` or `Poisson approximation` literal
hits, but the underlying results are built under their conceptual unit names. No
headline theorem of real curricular value survives this pass. Spine is DRY.
