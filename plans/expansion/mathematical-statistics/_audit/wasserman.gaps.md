# Audit — Larry Wasserman, *All of Statistics* (Springer 2004) + *All of Nonparametric Statistics* (2006)

- **source_book slug:** `wasserman`
- **source_curriculum:** `mathematical-statistics`
- **Target section:** `content/45-mathematical-statistics/` (prefix 45)
- **Lane:** nonparametric METHODS half of ch05 (`05-empirical-processes-nonparametric`) — bootstrap/jackknife, kernel density estimation, nonparametric regression, the concentration-inequalities toolkit. Theory/asymptotic-justification of the bootstrap and empirical processes (Glivenko–Cantelli, Donsker, asymptotic validity) belongs to the **van der Vaart** parallel audit, NOT here. Estimation/testing belongs to **Casella–Berger**, NOT here.

## Verdict

Wasserman is a broad modern survey and is **near-fully covered** by the existing corpus. The entire bootstrap/jackknife/KDE/nonparametric-regression apparatus is already owned — at an unusually high level of completeness — by a single, very thorough unit `26.08.01` (nonparametric methods and resampling), and the Hoeffding/McDiarmid concentration machinery is fully stated and proved in `40.07.05`. **One genuine high-value gap remains: Bernstein's inequality** (the variance-aware sub-exponential refinement), which is named in passing in two units but never stated or proved anywhere corpus-wide. It is foundational for high-dimensional statistics and learning theory (the §45 spine consumes it).

**Genuine gaps: 1. COVERED: 12. OUT OF SCOPE: 3.**

---

## GENUINE GAP

### 45.05.01 — Bernstein's inequality and the sub-exponential / Bennett regime

- **id:** `45.05.01` (free slot — `content/45-mathematical-statistics/05-empirical-processes-nonparametric/` is an empty skeleton; first methods id. Coordinate with vdV so theory ids 45.05.02+ go to empirical-process units.)
- **title:** Bernstein's inequality and sub-exponential concentration
- **spec:** State and prove Bernstein's inequality for sums of independent bounded (or sub-exponential) random variables — the Chernoff/MGF bound $\Pr(\sum (X_i-\mathbb{E}X_i) \ge t) \le \exp\!\big(-\tfrac{t^2}{2(\sigma^2 + ct/3)}\big)$ that interpolates between a sub-Gaussian small-deviation regime ($\propto e^{-t^2/2\sigma^2}$, governed by the variance proxy $\sigma^2=\sum \mathrm{Var}(X_i)$) and a sub-exponential large-deviation regime ($\propto e^{-3t/2c}$, governed by the boundedness/MGF constant $c$). Derive via the per-summand cumulant bound $\log\mathbb{E}e^{\lambda(X_i-\mathbb{E}X_i)} \le \tfrac{\lambda^2\mathrm{Var}(X_i)/2}{1-c\lambda/3}$, optimise $\lambda$. Contrast with Hoeffding (which ignores variance and so is loose when $\sigma^2 \ll$ range) and with Bennett's inequality (the sharper parent). Note the sub-exponential / Orlicz-$\psi_1$ tail characterisation and one application: a variance-adaptive confidence bound / the sample-variance or empirical-mean tail that Hoeffding cannot tighten.
- **prereqs (verified on disk):**
  - `37.07.02` — Cramér's theorem / Legendre–Fenchel rate (the Chernoff/MGF-optimisation method; `content/37-probability/07-large-deviations/37.07.02-cramer-theorem-legendre-fenchel-rate.md`)
  - `40.07.05` — concentration: Azuma, bounded differences (Hoeffding's lemma, sub-Gaussian MGF, the variance-free cousin this unit refines; `content/40-combinatorics/07-probabilistic-method/40.07.05-concentration-azuma-bounded-differences.md`)
  - `37.03.01` — characteristic functions / MGF foundations (`content/37-probability/03-clt-characteristic-functions/37.03.01-characteristic-functions-levy-continuity.md`)
- **chapter dir:** `content/45-mathematical-statistics/05-empirical-processes-nonparametric/`
- **frontmatter:** `section: mathematical-statistics`, `chapter: empirical-processes-nonparametric`
- **source_book:** `wasserman` · **source_curriculum:** `mathematical-statistics`
- **lean_status:** `none` (Mathlib has Hoeffding's lemma fragments via `MeasureTheory`, but no Bernstein/Bennett tail; human-reviewed).
- **Why genuine:** corpus-wide grep (`bernstein.*inequality`, `sub-exponential.*tail`, `bennett`) finds Bernstein **named only in one sentence in `26.02.01`** ("incorporates variance information, giving tighter bounds when the variance is small relative to the range") and **named only in the history paragraph of `40.07.05`** ("anticipated by Sergei Bernstein"). It is **never stated as a theorem and never proved.** The variance-aware/sub-exponential regime is the one piece of the standard concentration toolkit genuinely absent; learning-theory and high-dimensional units in this very spine (45.06/45.07) will need it.

---

## COVERED (not gaps) — verified against the live corpus

The bootstrap/jackknife/KDE/nonparametric-regression lane is owned almost entirely by **`26.08.01`** (`content/26-statistics/08-nonparametric/26.08.01-nonparametric-methods-resampling.md`), which is unusually complete:

1. **Nonparametric bootstrap & the plug-in principle** ($\hat F_n$ for $F$) — `26.08.01` ("The bootstrap principle", §body lines 217–227).
2. **Bootstrap confidence intervals: percentile, BCa, bootstrap-t** — `26.08.01` (lines 227–233, 450: BCa bias-correction $z_0$ + acceleration $a$ via jackknife influence; bootstrap-t studentised, second-order accuracy). Pivotal CI is the bootstrap-t/centred construction, present.
3. **Bootstrap consistency (Bickel–Freedman) and second-order accuracy (Singh)** — `26.08.01` (lines 263–267, 446). (NB: deeper *asymptotic* justification is vdV's empirical-process lane, not duplicated here.)
4. **Bootstrap failures + remedies (extreme order statistics, $m$-out-of-$n$ bootstrap, subsampling, double bootstrap)** — `26.08.01` (lines 376–390, 448–450).
5. **Bootstrap for regression: residual / pairs / wild bootstrap** — `26.08.01` (lines 436–442).
6. **The jackknife (delete-one, bias/SE estimation, failure on non-smooth statistics)** — `26.08.01` (lines 83, 414–420).
7. **Parametric bootstrap** — `26.08.01` (resampling from a fitted model; covered alongside residual bootstrap, lines 436–438).
8. **Kernel density estimation: estimator, bias $\approx \tfrac{h^2}{2}f''\!\int u^2K$, variance $\approx f/(nh)$, MISE & optimal bandwidth, Silverman's rule, CV bandwidth selection** — `26.08.01` (lines 239–251, 466, 524).
9. **Minimax optimal nonparametric rate $n^{-2s/(2s+1)}$ (and $d$-dim $n^{-2s/(2s+d)}$); KDE minimax optimality** — `26.08.01` (lines 434, 462).
10. **Curse of dimensionality + structured remedies (additive, single-index, dimension reduction)** — `26.08.01` (§"The curse of dimensionality", lines 552–558).
11. **Nonparametric / local polynomial regression (Nadaraya–Watson local-constant context, local-linear boundary-bias fix, minimax rate for $m(x)=\mathbb{E}[Y\mid X{=}x]$)** — `26.08.01` (lines 464). Histogram/binning bias–variance also there (line 79).
12. **Hoeffding's inequality + McDiarmid bounded-differences inequality (the concentration toolkit's first two members)** — Hoeffding (iid-sum form) stated in `26.02.01` (line 489) and proved in martingale form (Azuma–Hoeffding, with the conditional Hoeffding lemma and sub-Gaussian MGF) in `40.07.05` (Props 1–2, lines 236–254); McDiarmid stated & proved in `40.07.05` (Cor./Prop 3, lines 254, 450–456). Chernoff method: `37.07.02`; entropy-method route to the same family: `40.07.06`; Talagrand convex-distance: `40.07.05`.

## OUT OF SCOPE

1. **Empirical-process theory proper — Glivenko–Cantelli, Donsker / functional CLT, asymptotic bootstrap validity.** No dedicated Glivenko–Cantelli unit exists, but the brief assigns this lane to the **van der Vaart** audit (theory), with the methods owned here. Donsker's invariance principle already exists at `37.03.03`. Not a methods gap; defer to vdV to avoid duplication.
2. **The estimation/testing core of *All of Statistics*** (MLE, sufficiency, Fisher information, Wald/score/LRT, Neyman–Pearson, CI construction, Bayesian inference) — Casella–Berger's lane and already covered across `26.05`, planned `45.01`–`45.03`. Wasserman overlaps but owns nothing new here.
3. **The probability-spine review chapters of Wasserman** (random variables, CLT, convergence modes, conditional expectation) — phenomenological review, fully owned by `37.*` and `26.02`–`26.04`. No theorem-level payoff unique to Wasserman.
