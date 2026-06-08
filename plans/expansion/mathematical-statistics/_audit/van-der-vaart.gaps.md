# Audit — A. W. van der Vaart, *Asymptotic Statistics* (Cambridge Series in Statistical and Probabilistic Mathematics, 1998)

- **source_book:** `van-der-vaart`
- **source_curriculum:** `mathematical-statistics`
- **target chapters:** `content/45-mathematical-statistics/04-asymptotic-statistics/`,
  `content/45-mathematical-statistics/05-empirical-processes-nonparametric/`
  (frontmatter `section: mathematical-statistics`; `chapter:` = the chapter name **without** the
  number prefix, i.e. `asymptotic-statistics` / `empirical-processes-nonparametric`;
  id format `45.<CC>.<UU>`, so `45.04.*` and `45.05.*`)
- **date:** 2026-06-07
- **ownership:** this audit owns the **asymptotic-theory** lane of chapter `45.04` and the
  **empirical-process / theory** lane of chapter `45.05`. Parallel audits in the same spine:
  Casella–Berger owns the finite-sample classical theory (`45.01`–`45.03`, ch01-03),
  **Wasserman owns the nonparametric/bootstrap *methods* ids in `45.05`** (kernel density,
  resampling recipes), and HTF owns the learning-methods chapters (`45.06`/`45.08`).
  Coordination: this audit takes the **theory / empirical-process** ids in `45.05`
  (EDF, Glivenko–Cantelli classes, Donsker classes, entropy/VC conditions, U-statistics,
  functional delta method); Wasserman takes the **methods** ids (density estimation,
  bootstrap-in-practice, plug-in nonparametric estimators).

## Verdict

Section `45-mathematical-statistics` is a **freshly scaffolded, empty** chapter set: all eight
directories (`01-decision-theory-estimation … 08-learning-methods`) contain **no `.md` files**.
There is therefore **no asymptotic-statistics or empirical-process unit anywhere in `45.*`** to
reuse or collide with.

The only statistics-flavoured material elsewhere in the corpus is the **intro literacy spine**
`26-statistics/*` (ten single survey units: `26.04.01` sampling/CLT, `26.05.01` hypothesis
testing/p-values, `26.08.01` nonparametric/resampling, etc.). These mention the delta method,
M-estimators, Glivenko–Cantelli, U-statistics, ARE, and the bootstrap **in passing at survey
depth** — none **states or proves** the theorems at the graduate / van-der-Vaart level. They are
**not** treated as COVERED for these theorem-level gaps (they are the school/AP-level entry track,
not the rigorous asymptotic theory). Cross-references to `26.*` are appropriate for the producer
but do not pre-empt these units.

The genuine reuse is the now-rich **probability spine `37-probability/*`**, which supplies the
limit-theory *machinery* that these statistics units consume as PREREQS rather than re-prove:

- **37.03.01** — characteristic functions, Lévy continuity theorem (the tool behind asymptotic
  normality and the LR-statistic CLT).
- **37.03.02** — Lindeberg–Feller CLT (the finite-dimensional Gaussian limit; the engine of MLE /
  Z-estimator asymptotic normality and the U-statistic CLT).
- **37.03.03** — Donsker's invariance principle / functional CLT, including (its §"structural
  extensions" + final Proposition) the **classical empirical-process invariance principle**:
  the rescaled EDF of i.i.d. uniforms $\alpha_n=\sqrt n(\widehat F_n-t)\Rightarrow B^0$ (Brownian
  bridge) in $D[0,1]$, proved by the Prokhorov **tightness + fdd** template. **This 1-D EDF→
  Brownian-bridge result is COVERED** (see COVERED trailer) — the NEW empirical-process content is
  the abstract theory over **function classes** (Glivenko–Cantelli classes, Donsker classes,
  entropy/VC entropy conditions), which `37.03.03` does not address.
- **37.04.04** — Kakutani product martingales / Hellinger affinity / absolute-continuity dichotomy;
  its §"In statistics" discusses **contiguity** and the likelihood-ratio process as a *downstream
  application* but does **not state Le Cam's three lemmas, define LAN, or prove the convolution
  theorem**. Those remain genuine gaps; `37.04.04` is the measure-theoretic prereq.
- **37.05.05** — Sanov's theorem / empirical measures (cross-ref for the empirical-measure viewpoint
  on Glivenko–Cantelli; not a substitute).
- **02.07.08** — absolute continuity / Radon–Nikodym; **02.15.01** — Brownian motion / Wiener
  process (the limit object for empirical processes); **37.03.03** also carries Prokhorov tightness.

**Prereq convention.** Verified-existing anchors used below: `37.03.01`, `37.03.02`, `37.03.03`,
`37.04.04`, `37.05.05`, `02.07.08`, `02.15.01`, `37.01.01` (probability space / Kolmogorov
extension). Ids of the form `45.04.* / 45.05.*` other than a unit's own are **planned sibling units
defined in this same audit**; they are listed as prereqs so the producer can wire the DAG once
siblings land.

---

## GENUINE GAPS

### 45.04.01 — Consistency of estimators and the modes of stochastic convergence in statistics
- **spec:** Set up the asymptotic framework: $\sqrt n$-scaling, $O_P/o_P$ stochastic-order calculus,
  convergence in probability/distribution/a.s. for statistics, **Slutsky's lemma** and the
  **continuous-mapping theorem** in the statistical setting, and **consistency** of estimators
  (Wald-type consistency via uniform convergence of the criterion function; consistency of sample
  moments and the sample quantile). Prove the **prohorov/Slutsky** combination rule and give the
  uniform-LLN sufficient condition for consistency of an M-estimator (pointer to 45.04.04).
- **prereqs:** `37.03.02`, `37.03.01`, `37.01.01`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.02 — The delta method and the second-order delta method
- **spec:** Prove the **delta method**: if $\sqrt n(T_n-\theta)\rightsquigarrow N(0,\Sigma)$ and
  $\phi$ is differentiable at $\theta$, then $\sqrt n(\phi(T_n)-\phi(\theta))\rightsquigarrow
  N(0,\nabla\phi^\top\Sigma\nabla\phi)$ (incl. the multivariate Jacobian form). Prove the
  **second-order delta method** (degenerate-gradient case: $\chi^2$/quadratic-form limits scaled by
  $n$) and the **variance-stabilising transformation** corollary. Worked examples: sample
  correlation, log/logit/Fisher-z transforms.
- **prereqs:** `45.04.01`, `37.03.02`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.03 — Asymptotic normality and efficiency of the maximum-likelihood estimator
- **spec:** Under regularity (differentiability in quadratic mean, nonsingular Fisher information
  $I_\theta$), prove $\sqrt n(\hat\theta_n-\theta)\rightsquigarrow N(0,I_\theta^{-1})$ via the
  score-equation expansion; the **Cramér–Rao information bound** as the asymptotic-variance floor and
  the sense in which the MLE attains it (**Fisher efficiency**); the **one-step / Newton–Raphson
  estimator** as an efficient root. State and use the **information equality**
  $I_\theta=\mathrm{Var}(\dot\ell_\theta)=-\mathbb E\ddot\ell_\theta$.
- **prereqs:** `45.04.01`, `45.04.02`, `37.03.02`, `02.07.08`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.04 — M-estimators and Z-estimators: Argmax/Argmin theorem and the Z-estimator master theorem
- **spec:** Define **M-estimators** (maximise/minimise a criterion) and **Z-estimators** (zeros of an
  estimating equation $\Psi_n(\theta)=0$). Prove the **Argmax/Argmin theorem** (consistency of the
  maximiser from uniform convergence of the criterion to a well-separated maximum) and the
  **Z-estimator master theorem** for asymptotic normality:
  $\sqrt n(\hat\theta_n-\theta_0)\rightsquigarrow N\big(0,\,\dot\Psi_{\theta_0}^{-1}
  \,\mathrm{Var}\,\psi_{\theta_0}\,\dot\Psi_{\theta_0}^{-\top}\big)$, the sandwich form. Examples:
  Huber's robust location, quantile regression, MLE as the special case $\psi=\dot\ell$.
- **prereqs:** `45.04.01`, `45.04.03`, `37.03.02`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.05 — Asymptotic relative efficiency
- **spec:** Define the **asymptotic relative efficiency (ARE / Pitman efficiency)** of two consistent
  asymptotically normal estimators (and of two tests via the Pitman approach with local
  alternatives) as the ratio of asymptotic variances / sample sizes for equal performance. Compute
  classic AREs (mean vs median; Wilcoxon vs t-test = $3/\pi$; sample vs trimmed mean). Tie efficiency
  back to the information bound of 45.04.03.
- **prereqs:** `45.04.03`, `45.04.04`, `45.04.02`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.06 — Local asymptotic normality (LAN) and the local-experiment limit
- **spec:** Prove **differentiability in quadratic mean** $\Rightarrow$ the **LAN expansion**:
  the local log-likelihood ratio $\log\frac{dP_{\theta_0+h/\sqrt n}^n}{dP_{\theta_0}^n}
  = h^\top\Delta_{n,\theta_0}-\tfrac12 h^\top I_{\theta_0}h + o_{P}(1)$ with
  $\Delta_{n,\theta_0}\rightsquigarrow N(0,I_{\theta_0})$, i.e. the local experiment converges to a
  **Gaussian shift experiment**. Define LAN/LAMN as a property of a sequence of experiments. This is
  the central organising theorem for the efficiency and testing results that follow.
- **prereqs:** `45.04.03`, `37.04.04`, `37.03.02`, `02.07.08`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.07 — Contiguity and Le Cam's three lemmas
- **spec:** Define **contiguity** of sequences of measures $Q_n \triangleleft P_n$. Prove **Le Cam's
  first lemma** (contiguity criterion via the likelihood-ratio limit law / uniform integrability),
  the **second lemma** (asymptotic-normality of $\log$-LR under one hypothesis transfers to the other
  with the mean shifted by the variance), and the **third lemma** (Le Cam's third lemma: the limit
  law of a statistic under the contiguous alternative is the under-the-null limit with a covariance
  shift). Connect to the Hellinger/likelihood-ratio dichotomy of `37.04.04`.
- **prereqs:** `45.04.06`, `37.04.04`, `37.03.02`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.08 — The convolution theorem and the local asymptotic minimax bound
- **spec:** In the LAN framework, prove the **Hájek–Le Cam convolution theorem**: the limit law of
  any **regular** estimator is the convolution of the $N(0,I^{-1})$ Gaussian-shift-optimal law with
  an independent noise factor — hence $I^{-1}$ is the best regular asymptotic variance and the MLE is
  **asymptotically efficient**. Prove the **local asymptotic minimax (LAM) theorem** (Hájek–Le Cam)
  bounding the local minimax risk from below by the Gaussian-shift risk, ruling out
  superefficiency-as-improvement (Hodges' estimator as the cautionary example).
- **prereqs:** `45.04.06`, `45.04.07`, `45.04.03`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.09 — Asymptotics of the likelihood-ratio, Wald, and score tests (the chi-squared trinity)
- **spec:** Prove **Wilks' theorem**: under the null and regularity, $2\log\Lambda_n
  \rightsquigarrow \chi^2_k$ (with $k=\dim$ of the restriction), via the LAN quadratic expansion.
  Prove the **Wald** statistic and **Rao score** statistic share the same $\chi^2_k$ limit
  (asymptotic equivalence of the three tests under the null), and derive their **noncentral
  $\chi^2$** limits under contiguous local alternatives (via Le Cam's third lemma, 45.04.07) giving
  the local asymptotic power.
- **prereqs:** `45.04.06`, `45.04.07`, `45.04.03`, `45.04.02`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.04.10 — Asymptotic consistency of the bootstrap
- **spec:** State and prove **bootstrap consistency** for the sample mean / smooth functions:
  the bootstrap distribution of $\sqrt n(\bar X_n^*-\bar X_n)$ converges (conditionally, in
  probability) to the same $N(0,\sigma^2)$ limit as $\sqrt n(\bar X_n-\mu)$ — the asymptotic
  justification of the nonparametric bootstrap — via the delta method + a triangular-array CLT /
  exchangeable-multiplier argument. Note the **failure** cases (sample max, parameter on the
  boundary) where the naive bootstrap is inconsistent. *(This is the asymptotic-theory justification;
  Wasserman owns the bootstrap-as-a-method recipe unit in 45.05.)*
- **prereqs:** `45.04.02`, `45.04.01`, `37.03.02`
- **chapter:** `asymptotic-statistics` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.05.01 — The empirical distribution function and Glivenko–Cantelli classes
- **spec:** Define the empirical measure $\mathbb P_n$ and the empirical process
  $\mathbb G_n f=\sqrt n(\mathbb P_n-P)f$ indexed by a function class $\mathcal F$. Prove the
  classical **Glivenko–Cantelli theorem** ($\|\widehat F_n-F\|_\infty\to 0$ a.s.) and generalise to
  **Glivenko–Cantelli classes** of functions ($\sup_{f\in\mathcal F}|(\mathbb P_n-P)f|\to 0$ a.s.),
  with the **bracketing-number** (and the symmetrisation/Rademacher) sufficient condition. Connect to
  the empirical-measure / Sanov viewpoint of `37.05.05`.
- **prereqs:** `37.03.03`, `37.05.05`, `45.04.01`, `02.07.08`
- **chapter:** `empirical-processes-nonparametric` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.05.02 — Donsker classes and the empirical-process weak limit (the abstract empirical CLT)
- **spec:** Define **Donsker classes**: $\mathbb G_n\rightsquigarrow \mathbb G$ in $\ell^\infty
  (\mathcal F)$, where $\mathbb G$ is a **tight $P$-Brownian bridge** (mean-zero Gaussian process
  with covariance $Pfg-Pf\,Pg$). State the **abstract Donsker theorem** and prove the finite-class /
  bracketing case via the Prokhorov tightness+fdd template, reusing the 1-D EDF→Brownian-bridge
  result of `37.03.03` as the prototype $\mathcal F=\{\mathbf 1_{(-\infty,t]}\}$ instance. Asymptotic
  equicontinuity as the tightness criterion.
- **prereqs:** `45.05.01`, `37.03.03`, `02.15.01`, `37.03.01`
- **chapter:** `empirical-processes-nonparametric` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.05.03 — Entropy and VC conditions for the Donsker property (maximal inequalities)
- **spec:** Prove the **uniform-entropy** and **bracketing-entropy** integral conditions
  ($\int_0^1\sqrt{\log N_{[\,]}(\varepsilon,\mathcal F,L_2)}\,d\varepsilon<\infty$) that imply the
  Donsker property, the **symmetrisation** and **chaining / maximal inequalities** behind them, and
  the combinatorial route: **VC classes** (Vapnik–Chervonenkis dimension, Sauer's lemma, polynomial
  shatter bound) are uniformly Donsker. This is the verification toolkit for 45.05.02.
- **prereqs:** `45.05.02`, `45.05.01`
- **chapter:** `empirical-processes-nonparametric` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.05.04 — U-statistics and their asymptotics
- **spec:** Define **U-statistics** $U_n=\binom nm^{-1}\sum h(X_{i_1},\dots,X_{i_m})$ with symmetric
  kernel $h$. Prove the **Hoeffding decomposition** (projection onto orthogonal degeneracy levels),
  the **CLT for non-degenerate U-statistics** ($\sqrt n(U_n-\theta)\rightsquigarrow N(0,m^2\zeta_1)$
  via the Hájek projection onto the linear part) and the **degenerate** limit (weighted $\chi^2$ /
  multiple Wiener–Itô limit when $\zeta_1=0$). Examples: sample variance, Wilcoxon, Cramér–von Mises.
- **prereqs:** `45.04.01`, `37.03.02`, `37.04.04`
- **chapter:** `empirical-processes-nonparametric` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

### 45.05.05 — The functional delta method (Hadamard differentiability)
- **spec:** Prove the **functional delta method**: for a map $\phi$ between normed spaces that is
  **Hadamard-differentiable** tangentially to the support of the limit, $\sqrt n(\phi(\widehat
  F_n)-\phi(F))\rightsquigarrow \phi'_F(\mathbb G)$ whenever $\sqrt n(\widehat F_n-F)\rightsquigarrow
  \mathbb G$ (Brownian bridge). Apply to statistical functionals: **quantile function**, trimmed
  mean, **Wilcoxon / Mann–Whitney**, **Kolmogorov–Smirnov** and **Cramér–von Mises** functionals,
  giving their limit laws as continuous functionals of the empirical bridge. Note the **bootstrap of
  functionals** via the same Hadamard derivative.
- **prereqs:** `45.05.02`, `45.04.02`, `37.03.03`
- **chapter:** `empirical-processes-nonparametric` · **section:** `mathematical-statistics`
- **source_book:** `van-der-vaart` · **source_curriculum:** `mathematical-statistics`

---

## COVERED (not gaps)

- **The 1-D empirical-process invariance principle (EDF → Brownian bridge).** The rescaled empirical
  distribution function of i.i.d. uniforms $\alpha_n(t)=\sqrt n(\widehat F_n(t)-t)\Rightarrow B^0$
  (Brownian bridge) in $D[0,1]$, and the resulting Kolmogorov–Smirnov / Cramér–von Mises limit
  framing, is **stated and proved as a Proposition** in **`37.03.03`** (Donsker's invariance
  principle / functional CLT), §"structural extensions" + final Proposition. The new units
  `45.05.02`/`45.05.05` **reuse** it as the prototype rather than re-prove the 1-D case; the genuinely
  new content is the abstract function-class theory.
- **The Prokhorov tightness + finite-dimensional-distribution weak-convergence template** on path
  spaces — **`37.03.03`** (used as machinery, not re-proposed).
- **Lévy continuity / characteristic-function inversion** (the asymptotic-normality engine) —
  **`37.03.01`**.
- **The Lindeberg–Feller / triangular-array CLT** (finite-dimensional Gaussian limit) —
  **`37.03.02`**.
- **Brownian motion / Wiener process** (limit object) — **`02.15.01`** (and `37.06.*` for the
  stochastic-calculus layer).
- **The likelihood-ratio / Hellinger-affinity absolute-continuity dichotomy** that underlies
  contiguity — **`37.04.04`** (Kakutani product martingales). It motivates contiguity but does **not**
  state Le Cam's three lemmas / LAN / the convolution theorem, so 45.04.06–45.04.08 are still gaps.
- **Empirical measures / Sanov large-deviation viewpoint** — **`37.05.05`** (cross-ref for the
  empirical-measure framing of Glivenko–Cantelli; not a substitute for the GC/Donsker theory).
- **Radon–Nikodym / absolute continuity** — **`02.07.08`** (measure-theoretic prereq for densities,
  scores, likelihood ratios).
- **Intro-level survey mentions** of the delta method, M-estimators, Glivenko–Cantelli, U-statistics,
  ARE, and the bootstrap appear in **`26-statistics`** (`26.04.01`, `26.05.01`, `26.08.01`) at AP /
  literacy depth. These are **not** theorem-level coverage and do **not** pre-empt the gaps above;
  the producer may cross-reference them as the entry-track on-ramp.

## OUT OF SCOPE

- **Finite-sample classical estimation/testing theory** (sufficiency, Rao–Blackwell, UMP /
  Neyman–Pearson, exact distributions): Casella–Berger's lane (`45.01`–`45.03`), not asymptotic.
- **Bootstrap as a computational method, kernel density estimation, and nonparametric plug-in
  *recipes*:** Wasserman's `45.05` *methods* ids — this audit deliberately ceded those and took only
  the empirical-process *theory*. (The asymptotic *justification* of the bootstrap is in 45.04.10;
  the method recipe is Wasserman's.)
- **Semiparametric efficiency / tangent-space theory and the full M-/Z-estimation-via-empirical-
  processes program** (van der Vaart chs 19, 25): a substantial separate apparatus; deferred — the
  Donsker + Z-estimator + functional-delta units above give the load-bearing theorem-level payoff,
  and a dedicated semiparametric unit can be proposed later if the spine is extended.
