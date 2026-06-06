# Audit — Alon & Spencer, *The Probabilistic Method* (40.07 probabilistic-method)

- **source_book:** `alon-spencer-probabilistic-method`
- **source_curriculum:** `40-combinatorics` (Spine 6)
- **chapter dir:** `content/40-combinatorics/07-probabilistic-method/`
- **frontmatter:** `section: combinatorics`, `chapter: probabilistic-method`
- **id range:** `40.07.NN` — the entire `content/40-combinatorics/` tree is greenfield (0 existing units), so all `40.07.*` ids are free. Sequential from `.01`.

## Audit context (verified against live corpus)

- `find content/40-combinatorics -name "*.md"` → **0 files**. This is NEW section content; no in-chapter duplication risk.
- **Concentration cross-ref (the load-bearing one).** `grep -rliE "azuma|hoeffding|chernoff|bounded.differenc|mcdiarmid" content/37-probability/` shows: the only Chernoff appearance is the **upper half of Cramér's theorem** [37.07.02], stated *asymptotically* (the $\frac1n\log$ LDP form in $\mathbb{R}^d$), and concentration in 37.08.07 is the **log-Sobolev/Herbst spectral** version for random matrices. **There is NO standalone finite-$n$ Chernoff tail bound, NO Azuma–Hoeffding martingale inequality, and NO bounded-differences/McDiarmid unit anywhere in the corpus** (`grep -rin "azuma\|mcdiarmid\|bounded.differenc" content/37-probability/04-conditional-expectation-martingales/*.md` → empty). The probability spine has the *abstract* martingale machinery (37.04.01–04) and the *asymptotic* LDP machinery (37.07.*), but not the explicit finite-$n$ exponential tail inequalities the probabilistic method runs on. Per the brief I therefore scope the concentration unit to the **combinatorial application layer** (state Azuma/bounded-differences as tools; prove the *combinatorial* concentration results — chromatic-number concentration, concentration of combinatorial functionals) and cross-ref 37.04.* (martingale definitions) and 37.07.02 (Cramér/Chernoff lineage) rather than reproving the abstract inequalities.
- **Coordination with Diestel (40.05 extremal-ramsey).** Diestel owns Ramsey's theorem, Turán, Erdős–Stone, the regularity lemma (graph-Ramsey upper bounds + extremal structure). My units own only the **probabilistic lower-bound technique** ($R(k,k) > 2^{k/2}$ via first/second moment + LLL) and the **random-graph G(n,p) threshold** angle. No Turán/regularity/Ramsey-theorem unit is proposed; 40.07.02 cross-refs Diestel's Turán unit for the extremal-number context.
- **Analytic-combinatorics coordination (40.08).** The G(n,p) phase transition / threshold *phenomenology* (giant component, exact threshold locations) belongs with the analytic-combinatorics owner. My second-moment unit (40.07.03) keeps strictly the **probabilistic-method existence/threshold-sharpness angle** (first vs second moment determines whether a monotone property holds whp) and cross-refs 40.08 for the analytic counting.

---

## GENUINE GAPS

### 40.07.01 — The basic probabilistic method and the first-moment / counting argument
- **spec:** The existence paradigm "an object with property P exists if a random object has positive probability / expected count placing it below threshold"; counting-sieve proof of $R(k,k) > 2^{k/2}$, existence of tournaments with many Hamiltonian paths / no dominating $k$-set, and $2$-colourings of hypergraphs ($m < 2^{n-1}$ edges $\Rightarrow$ property B).
- **prereqs:** *cross-spine* — 37.01.01 (probability spaces / basic measure), 26.03.01 (random variables, expectation). *within-spine* — none (this is the spine foundation; produced first).
- **dependency level:** 0 (foundation of 40.07).

### 40.07.02 — Linearity of expectation and the deletion method
- **spec:** Linearity of expectation as an existence engine (no independence needed): large independent/bipartite sets via $\mathbb{E}[\,|S|\,]$, the Turán-type bound $\alpha(G)\ge\sum 1/(d_i+1)$, sum-free subsets; the deletion (alteration) method giving the improved Ramsey lower bound and the crossing-number / unbalancing-lights applications.
- **prereqs:** *within-spine* — 40.07.01. *cross-spine* — 26.03.01 (expectation). Cross-ref (not prereq) Diestel's Turán unit in 40.05 for the extremal-number contrast.
- **dependency level:** 1.

### 40.07.03 — The second-moment method and thresholds for G(n,p)
- **spec:** Chebyshev/second-moment inequality as an existence-with-high-probability tool; variance computation for subgraph counts in the Erdős–Rényi $G(n,p)$ model giving threshold functions (appearance of a fixed subgraph, the clique number $\omega(G(n,1/2))\approx 2\log_2 n$), and the first-moment/second-moment "sharp threshold" dichotomy.
- **prereqs:** *within-spine* — 40.07.01, 40.07.02. *cross-spine* — 37.01.01, 26.03.01 (variance). Cross-ref 40.08 (analytic-combinatorics) for the threshold/giant-component phenomenology; cross-ref Borel–Cantelli [37.02.01] for a.s. statements.
- **dependency level:** 2.

### 40.07.04 — The Lovász Local Lemma and the Moser–Tardos algorithm
- **spec:** The symmetric LLL ($ep(d+1)\le 1$) and Lovász's general (asymmetric) form via the dependency graph; applications to hypergraph $2$-colouring, $k$-SAT with bounded clause-variable degree, and proper colourings; the Moser–Tardos entropy-compression algorithmic proof making the existence constructive.
- **prereqs:** *within-spine* — 40.07.01. *cross-spine* — 37.01.01 (independence / conditioning). Cross-ref 25-computer-science for the SAT / algorithmic-existence framing.
- **dependency level:** 1.

### 40.07.05 — Concentration for combinatorial functionals (Azuma & the bounded-differences method)
- **spec:** The Azuma–Hoeffding martingale inequality and McDiarmid's bounded-differences inequality applied to combinatorial functionals; concentration of the chromatic number $\chi(G(n,p))$ and of Lipschitz graph parameters around their means; Talagrand's inequality stated as the sharper tool for product-space functionals.
- **prereqs:** *within-spine* — 40.07.03 (G(n,p) setup). *cross-spine* — **37.04.01 (discrete martingales — the Doob martingale this builds on)**, **37.07.02 (Chernoff/Cramér lineage for the exponential-tail idea)**. NOTE per brief: this unit does NOT reprove the inequalities as probability theorems — it states Azuma/McDiarmid and proves the *combinatorial* concentration results, cross-referencing 37.04.* and 37.07.02.
- **dependency level:** 3.

### 40.07.06 — The entropy method and Shearer's lemma
- **spec:** Shannon entropy as a counting/probabilistic tool; subadditivity and **Shearer's lemma** (entropy of a random structure bounded by a cover of coordinate projections); applications to counting independent sets / the number of triangles, the Loomis–Whitney / Bollobás–Thomason projection inequalities, and dimension-type bounds.
- **prereqs:** *within-spine* — 40.07.01. *cross-spine* — 37.01.01. Cross-ref 37.07.06 (relative entropy / Donsker–Varadhan) for the measure-theoretic entropy lineage; cross-ref 25-computer-science / information-theory if an entropy unit exists there.
- **dependency level:** 1.

### 40.07.07 — Correlation inequalities: FKG, Harris, and the Janson inequalities
- **spec:** The Harris/FKG positive-correlation inequality for monotone (increasing) events on the cube; the Janson inequality and its extended form for the *lower* tail of a sum of dependent indicators (e.g. probability $G(n,p)$ is triangle-free), completing the threshold toolkit with the deletion-free lower-tail estimate.
- **prereqs:** *within-spine* — 40.07.01, 40.07.03 (G(n,p) thresholds — the canonical application). *cross-spine* — 37.01.01, 26.03.01. Cross-ref 02-posets-lattices (40.02) for the lattice/monotone-event order structure.
- **dependency level:** 2.

---

## COVERED (not gaps) — checked, found elsewhere in corpus

- **Chernoff bound (asymptotic LDP form), Cramér's theorem.** Covered as the upper half of `37.07.02-cramer-theorem-legendre-fenchel-rate.md` (and the abstract LDP in 37.07.01). 40.07.05 cross-refs this rather than reproving it; the *finite-n* combinatorial application is the genuine gap.
- **Martingale definitions, Doob's inequalities, optional stopping.** Covered in `37.04.01`–`37.04.03`. 40.07.05 builds the Doob/exposure martingale on top of 37.04.01; not reproposed.
- **Large-deviation principle, rate functions, Sanov, Gärtner–Ellis.** Covered across `37.07.01`–`37.07.11`. The probabilistic-method units use only finite-$n$ first/second-moment estimates, not the asymptotic LDP apparatus — no overlap.
- **Spectral / log-Sobolev concentration.** Covered in `37.08.07` (random-matrix specific). Distinct from combinatorial bounded-differences concentration.
- **Borel–Cantelli / Kolmogorov 0–1 law.** Covered in `37.02.01`; used as a cross-ref prereq for a.s. statements in 40.07.03, not reproposed.
- **Ramsey's theorem (upper bound), Turán's theorem, Erdős–Stone, regularity lemma.** Owned by the Diestel auditor in **40.05 extremal-ramsey** (per coordination directive). 40.07.01–02 own only the probabilistic *lower-bound* technique; cross-ref Diestel.
- **Variance / Chebyshev's inequality (abstract).** Foundational, lives with `26-statistics` / `37.01`; 40.07.03 applies it to combinatorial counts rather than reproving it.

## OUT OF SCOPE

- **The G(n,p) phase transition / giant-component / exact threshold-location analysis.** The analytic/branching-process phenomenology (sharp giant-component emergence at $p=1/n$, exact threshold constants) belongs with the **40.08 analytic-combinatorics** owner. 40.07.03 keeps strictly the probabilistic-method existence/threshold-sharpness angle and cross-refs 40.08. Proposing a full phase-transition unit here would duplicate that spine.
- **Derandomization via conditional expectations (standalone).** Alon–Spencer treats the method of conditional probabilities/pessimistic estimators in a few pages as a corollary of the basic method, not as a theorem-level standalone topic. Folded into 40.07.01 (and the algorithmic LLL is captured by Moser–Tardos in 40.07.04) rather than given its own ~6000-word unit; promoting it would be a marginal manufactured unit.
- **Quasirandomness / pseudorandom graph spectral characterizations (Chung–Graham–Wilson).** Genuine and important, but it is the graph-spectral / extremal side rather than the existence-via-randomness core; better placed adjacent to 40.05 (extremal) or a dedicated spectral unit. Flagged for the Diestel/extremal owner rather than claimed here to avoid a scope collision.
