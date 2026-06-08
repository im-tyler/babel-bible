# Audit — Casella & Berger, *Statistical Inference* (2nd ed., Duxbury 2002)

- **source_book:** `casella-berger`
- **source_curriculum:** `mathematical-statistics`
- **target section:** `content/45-mathematical-statistics/` (frontmatter `section: mathematical-statistics`)
- **date:** 2026-06-07

## Verdict

`45-mathematical-statistics` is a **freshly scaffolded, empty** 8-chapter skeleton (only
`.gitkeep` files on disk). Casella & Berger is the canonical text for the **rigorous,
finite-sample classical-inference core** — decision theory, sufficiency/completeness,
exponential families, point estimation with the Cramér–Rao bound, Rao–Blackwell /
Lehmann–Scheffé UMVU theory, and the Neyman–Pearson / UMP / LRT testing apparatus with
confidence-set duality. That payload is **entirely absent from the live corpus.**

The corpus carries two adjacent bodies of material, neither of which is the theorem-level
treatment:

1. **An ELEMENTARY prose-first survey** at `content/26-statistics/` (10 units). It *names*
   p-values, confidence intervals, MLE, priors/posteriors, and nonparametrics, but at the
   "introduction to the practice of statistics" tier — it does **not** state or prove the
   factorization theorem, the Cramér–Rao bound, Rao–Blackwell, Lehmann–Scheffé, Basu's
   theorem, or the Neyman–Pearson lemma. Each gap below cross-refs the matching survey unit
   as the beginner-tier on-ramp and is scoped to deliver the rigorous theorem-level content
   the survey lacks. **No duplication.**

2. **Measure-theoretic probability** at `content/37-probability/` and
   `content/02-analysis/07-*`: probability spaces, Radon–Nikodym derivatives (densities),
   the Lindeberg–Feller CLT, conditional expectation/martingales, L^p theory. These are
   **reused as prereqs** (densities, conditional expectation, CLT) and never re-derived.

Every headline C&B theorem was grepped across the whole tree (filenames + bodies). All of
sufficiency/factorization, completeness, Basu, exponential families (as a statistical
object), Fisher information, Cramér–Rao, Rao–Blackwell, Lehmann–Scheffé, method of moments,
the Neyman–Pearson lemma, MLR/UMP, Wald/score/LRT, and pivot/confidence-set duality returned
**zero** statistical matches (the few hits are unrelated: physics likelihood-ratios,
combinatorial "completeness," logic/decision-theory, etc.). Ids assigned in free slots in
chapters 01, 02, 03 per the lane.

**Lane discipline (parallel siblings — do NOT duplicate).** van der Vaart owns the
**asymptotics** spine (ch04/05): consistency/asymptotic-normality *of* the MLE, local
asymptotic normality, the asymptotic χ² distribution of LRT/Wald/score (Wilks), efficiency,
M/Z-estimators, the delta method, empirical processes — all deferred to vdV. This audit owns
**finite-sample** theory only: the MLE as an estimator and its *exact* properties, the LRT/
Wald/score statistics *as test constructions* (not their limiting laws). HTF owns ch06/08
(regularization/learning), a learning-theory auditor owns ch07. Bayesian decision theory is
kept **light** in ch03 (point estimation under squared/absolute loss only); a dedicated
Bayesian auditor owns conjugate-family computation, hierarchical models, and Bayesian
asymptotics.

**Prereqs verified on disk:**
`26.02.01` (probability rules/distributions), `26.03.01` (random variables / expectation),
`26.04.01` (sampling distributions / CLT), `26.05.01` (hypothesis testing, p-values, CIs —
survey), `26.07.01` (Bayesian priors/posteriors — survey), `02.05.05` (multivariable Taylor /
extrema, for score-equation and CRB regularity), `02.07.06` (L^p / Hölder–Minkowski / Riesz–
Fischer, for the L² projection in Rao–Blackwell and Cauchy–Schwarz in CRB), `02.07.08`
(Radon–Nikodym / densities, the measure-theoretic basis for the likelihood), `37.01.01`
(probability spaces), `37.03.02` (Lindeberg–Feller CLT, cited only where a normal reference
distribution is invoked), `37.04.01` (conditional expectation / martingale machinery, the
rigorous E[·|T] used by Rao–Blackwell), `24.06.01` (decision theory / Bayesian reasoning —
informal logic on-ramp).

---

## GENUINE GAPS

### 45.01.01 — Statistical decision theory: loss, risk, admissibility, minimax, and Bayes rules
- **spec:** The decision-theoretic frame — action space, loss function \(L(\theta,a)\), decision
  rules \(\delta\), and the **risk function** \(R(\theta,\delta)=E_\theta[L(\theta,\delta(X))]\);
  squared-error/absolute/0–1 loss; risk domination and **admissibility/inadmissibility**; the
  **minimax** principle \(\inf_\delta\sup_\theta R\); **Bayes risk** \(r(\pi,\delta)=\int R\,d\pi\)
  and the Bayes rule as its minimizer; the minimax–Bayes (least-favorable-prior) connection and
  the complete-class idea. The unifying language the rest of ch01/ch02 estimators and tests are
  judged in. Distinct from the informal logic-flavoured `24.06.01` and from the elementary survey.
- **prereqs:** `26.03.01` (random variables/expectation), `26.07.01` (priors/posteriors, survey),
  `24.06.01` (decision theory, informal), `02.07.06` (L^p, for L² risk)
- **chapter:** `01-decision-theory-estimation` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.01.02 — Sufficiency, the factorization theorem, minimal sufficiency, and exponential families
- **spec:** The **sufficiency** of a statistic \(T(X)\) (conditional distribution of the sample
  given \(T\) is parameter-free); the **Fisher–Neyman factorization theorem**
  \(p(x\mid\theta)=g(T(x),\theta)\,h(x)\); **minimal sufficiency** and the Lehmann–Scheffé
  minimal-sufficiency criterion (level sets of the likelihood ratio); the **k-parameter
  exponential family** \(p(x\mid\theta)=h(x)c(\theta)\exp(\sum_i w_i(\theta)t_i(x))\), its natural
  parametrization, the natural sufficient statistic, and the mean/variance-from-cumulant identities.
  The data-reduction backbone of classical inference; nothing in the corpus treats sufficiency in
  the statistical sense (the `37.*` hits are σ-algebra "sufficiency" in unrelated proofs).
- **prereqs:** `02.07.08` (Radon–Nikodym / densities), `26.03.01` (random variables), `37.04.01`
  (conditional expectation, the rigorous "given T"), `02.05.05` (multivariable differentiation)
- **chapter:** `01-decision-theory-estimation` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.01.03 — Ancillarity, completeness, and Basu's theorem
- **spec:** **Ancillary** statistics (distribution free of \(\theta\)); **completeness** of a
  statistic (\(E_\theta[g(T)]=0\ \forall\theta\Rightarrow g\equiv0\)) and **bounded completeness**;
  completeness of the natural sufficient statistic of a full-rank exponential family; **Basu's
  theorem** (a complete sufficient statistic is independent of every ancillary), with the canonical
  \(\bar X\perp s^2\) for the normal as the worked corollary. The independence/uniqueness engine
  that makes UMVU theory go through. Absent everywhere (no "Basu," no statistical "completeness").
- **prereqs:** `45.01.02` (sufficiency / exponential families), `26.03.01` (random variables),
  `37.04.01` (conditional expectation / independence)
- **chapter:** `01-decision-theory-estimation` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.01.04 — Point estimation: method of moments and maximum likelihood (finite-sample)
- **spec:** The two construction principles — **method of moments** (equate sample and population
  moments, solve) and **maximum likelihood** (the likelihood/log-likelihood, the score equation
  \(\partial_\theta\ell=0\), the MLE as maximizer); invariance of the MLE under reparametrization;
  exact MLEs in the canonical exponential-family / uniform / normal examples; bias, MSE, and the
  bias–variance decomposition as finite-sample yardsticks. **Lane note:** the *asymptotic*
  consistency/normality/efficiency of the MLE is van der Vaart's (ch04); this unit is the
  estimator's construction and exact small-sample behaviour only. Distinct from the survey's
  one-line MLE mention.
- **prereqs:** `45.01.02` (sufficiency / exponential families), `26.03.01` (expectation/moments),
  `02.05.05` (multivariable extrema, for the score equation), `26.04.01` (sampling distributions)
- **chapter:** `01-decision-theory-estimation` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.01.05 — Fisher information and the Cramér–Rao lower bound
- **spec:** The **score function** \(\partial_\theta\log p(X\mid\theta)\), its zero mean, and the
  **Fisher information** \(I(\theta)=\operatorname{Var}(\text{score})=-E[\partial_\theta^2\log p]\)
  under the regularity conditions; additivity over iid samples; the **Cramér–Rao inequality**
  \(\operatorname{Var}_\theta(W)\ge (\partial_\theta E_\theta W)^2/I(\theta)\) via Cauchy–Schwarz,
  the **efficiency** of an unbiased estimator, attainment iff the score is affine in the estimator
  (exponential-family characterization), and the multiparameter information-matrix form. The
  finite-sample optimality benchmark; entirely absent (the "Fisher information" hits are physics
  Fisher-information functionals, unrelated to the estimation bound).
- **prereqs:** `45.01.04` (MLE / score equation), `02.07.06` (Cauchy–Schwarz in L²), `02.05.05`
  (differentiation under the integral / regularity), `26.03.01` (variance/expectation)
- **chapter:** `01-decision-theory-estimation` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.01.06 — Rao–Blackwell and Lehmann–Scheffé: UMVU estimation
- **spec:** The **Rao–Blackwell theorem** (conditioning any unbiased estimator on a sufficient
  statistic, \(E[W\mid T]\), weakly improves convex risk — the L² projection picture); the
  **Lehmann–Scheffé theorem** (a function of a *complete* sufficient statistic that is unbiased is
  the unique **UMVU** estimator); construction of UMVUs in the standard exponential-family examples;
  the relationship to (and possible non-attainment of) the Cramér–Rao bound. The capstone of
  finite-sample point-estimation optimality; nothing in the corpus states either theorem.
- **prereqs:** `45.01.03` (completeness / Basu), `45.01.02` (sufficiency), `45.01.05` (Cramér–Rao),
  `37.04.01` (conditional expectation as L² projection), `02.07.06` (L² / Jensen)
- **chapter:** `01-decision-theory-estimation` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.02.01 — The Neyman–Pearson lemma and most-powerful tests
- **spec:** The hypothesis-testing frame (null/alternative, test function \(\phi\), size, **type I/II
  errors**, power); the **Neyman–Pearson lemma** — the likelihood-ratio test
  \(\phi=\mathbf 1\{p_1/p_0>k\}\) is most powerful of its size for simple-vs-simple, with the
  randomized form and sufficiency/necessity both proved; the p-value as the attained significance.
  The cornerstone optimality theorem of testing; the corpus only has the elementary survey
  (`26.05.01`) and a physics "Neyman–Pearson" mention — neither states or proves the lemma.
- **prereqs:** `45.01.01` (loss/risk frame), `26.05.01` (hypothesis testing, survey), `02.07.08`
  (densities / likelihood ratio), `26.03.01` (random variables)
- **chapter:** `02-hypothesis-testing-confidence` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.02.02 — Monotone likelihood ratio and uniformly most powerful (UMP) tests
- **spec:** **Monotone likelihood ratio** families; the **Karlin–Rubin theorem** delivering **UMP
  one-sided tests** for MLR families; nonexistence of UMP tests for two-sided alternatives and the
  resolution via **UMP unbiased** tests; worked one-parameter exponential-family examples. The
  bridge from the simple-vs-simple NP lemma to composite hypotheses; absent (no "monotone
  likelihood ratio," no "UMP" anywhere).
- **prereqs:** `45.02.01` (Neyman–Pearson lemma), `45.01.02` (exponential families / sufficiency),
  `45.01.01` (risk/power)
- **chapter:** `02-hypothesis-testing-confidence` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.02.03 — Likelihood-ratio, Wald, and score tests (finite-sample constructions)
- **spec:** The general **likelihood-ratio test statistic** \(\lambda(x)=\sup_{\Theta_0}L/\sup_\Theta
  L\) and the LRT for composite hypotheses; the **Wald** statistic (estimate-minus-null over
  standard error) and the **score (Lagrange-multiplier)** statistic (gradient of the log-likelihood
  at the null); their construction, geometric relationship, and exact use in the normal/t/F
  examples. **Lane note:** the asymptotic χ²/Wilks limiting distributions and their equivalence are
  van der Vaart's (ch04); this unit is the *construction* of the three statistics and their exact
  small-sample forms. Absent (no "Wald test," no "score test").
- **prereqs:** `45.02.01` (Neyman–Pearson / LRT idea), `45.01.04` (MLE / score), `45.01.05`
  (Fisher information, for the Wald/score standardization), `45.01.02` (sufficiency)
- **chapter:** `02-hypothesis-testing-confidence` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.02.04 — Confidence sets, pivotal quantities, and test–interval duality
- **spec:** **Confidence sets** and their coverage guarantee; **pivotal quantities** and the pivot
  method of construction (the normal/t/χ²/F pivots); **inverting a test** to build a confidence set
  and the **duality** between size-\(\alpha\) acceptance regions and \(1-\alpha\) confidence sets;
  the UMA / UMA-unbiased optimality of intervals inherited from UMP tests; one- vs two-sided
  intervals. The rigorous companion to the survey's informal CIs; the corpus has only `26.05.01`'s
  recipe-level treatment with no pivot/inversion/duality theory.
- **prereqs:** `45.02.02` (UMP tests), `45.02.01` (Neyman–Pearson), `26.05.01` (CIs, survey),
  `26.04.01` (sampling distributions / pivots)
- **chapter:** `02-hypothesis-testing-confidence` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

### 45.03.01 — Bayes point estimation under loss (posterior mean/median/mode)
- **spec:** The **Bayes estimator** as the minimizer of posterior expected loss: **posterior mean**
  under squared-error loss, **posterior median** under absolute loss, **posterior mode (MAP)** under
  0–1 loss; the Bayes risk as the marginal-averaged risk and the link to `45.01.01`'s decision
  frame; admissibility of (proper) Bayes rules and the shrinkage intuition in the conjugate-normal
  example. **Lane note:** kept deliberately light — conjugate-family computation catalogues,
  hierarchical/empirical-Bayes models, and Bayesian asymptotics belong to the dedicated Bayesian
  auditor; this unit is only the decision-theoretic point-estimation payoff that C&B Ch.7 pairs with
  classical estimation. The survey `26.07.01` gives priors/posteriors informally but no loss-based
  estimator optimality.
- **prereqs:** `45.01.01` (decision theory / Bayes risk), `26.07.01` (priors/posteriors, survey),
  `45.01.04` (point estimation), `02.07.06` (L², for the squared-error minimizer)
- **chapter:** `03-bayesian-inference` · **section:** `mathematical-statistics`
- **source_book:** `casella-berger` · **source_curriculum:** `mathematical-statistics`

---

## COVERED (not gaps)

Adjacent material that exists but is NOT the rigorous theorem-level topic (cited above as
prereqs / cross-refs, not re-proposed):

- **Hypothesis testing, p-values, confidence intervals (elementary)** — `26.05.01` (prose-first
  "practice of statistics" survey; the Neyman–Pearson lemma is gap 45.02.01, UMP is 45.02.02,
  LRT/Wald/score is 45.02.03, and pivot/duality is 45.02.04).
- **Bayesian statistics: prior/posterior (elementary)** — `26.07.01` (informal Bayes' rule and
  conjugate examples; the loss-based Bayes-estimator optimality is gap 45.03.01).
- **MLE / maximum likelihood (mentioned)** — `26.05.01`/`26.07.01` and applied uses in
  `19.07.01`, `25.09.01`; none constructs the estimator with the score equation, invariance, or
  exact properties (gap 45.01.04).
- **Sampling distributions / CLT** — `26.04.01`, `37.03.02` (Lindeberg–Feller). Reused as the
  reference-distribution prereq; they are not statistical-inference units.
- **Random variables / expectation / variance** — `26.03.01`, `37.01.01`. Probability foundations,
  reused as prereqs.
- **Conditional expectation (rigorous, as L² projection / "given a σ-algebra")** — `37.04.01`,
  `02.07.08` (Radon–Nikodym). The machinery Rao–Blackwell (45.01.06) and sufficiency (45.01.02)
  invoke; not the statistical content itself.
- **Decision theory (informal / Bayesian reasoning)** — `24.06.01` (logic-section on-ramp; the
  risk/admissibility/minimax/Bayes-risk theory is gap 45.01.01).
- **Exponential family appearing incidentally** — `44.02.03` (Fenchel-duality modeling atom),
  `07.05.14` (de Finetti exchangeability); neither is the statistical exponential-family /
  sufficiency unit (gap 45.01.02).
- **"Fisher information" / "likelihood ratio" hits in physics & other domains** — `05.15.*`,
  `08.10.*`, `13.07.01`, `37.04.04`, `02.07.08`; none is the estimation Cramér–Rao bound
  (gap 45.01.05) or the NP testing lemma (gap 45.02.01).

Deferred to **parallel sibling audits** (do not duplicate):

- **Asymptotic statistics** — consistency / asymptotic normality / efficiency of the MLE, local
  asymptotic normality, the Wilks/Wald/score **limiting χ² distributions** and their asymptotic
  equivalence, the delta method, M- and Z-estimators, U-statistics → **van der Vaart** (ch04/05).
  This audit stops at the finite-sample *construction* of the same statistics.
- **Empirical processes & nonparametrics** — Glivenko–Cantelli, Donsker classes, kernel density
  estimation, bootstrap theory → ch05 (van der Vaart / a nonparametrics source); `37.03.03`
  (Donsker functional CLT) already anchors the process side.
- **High-dimensional regularization & statistical learning** — lasso/ridge/oracle inequalities,
  PAC/VC theory, ERM → **HTF** (ch06/08) and the learning-theory auditor (ch07).
- **Full Bayesian apparatus** — conjugate-prior catalogues, hierarchical & empirical-Bayes models,
  Jeffreys/reference priors, MCMC, Bayesian asymptotics (Bernstein–von Mises) → dedicated
  **Bayesian auditor**; ch03 is kept light here (only 45.03.01).

## OUT OF SCOPE

- **C&B Ch.1–2 (probability theory, transformations, expectations, common distributions).**
  Already owned by `26.02.01`/`26.03.01` and the measure-theoretic `37.*` / `02.07.*` spine.
  Reused as prereqs, not respun.
- **C&B Ch.5 (properties of random samples: order statistics, convergence concepts,
  generating-a-random-sample).** Order-statistic distributions are an elementary computation;
  the convergence-mode theory (a.s./prob./distribution, Slutsky) lives in `37.*` and the vdV
  asymptotics spine. Not a standalone gap here.
- **C&B Ch.11–12 (one-way ANOVA, simple/oblique linear regression as worked methodology).**
  Survey-level coverage exists at `26.06.01` (regression) and `26.09.01` (ANOVA / experimental
  design); the rigorous linear-model theory (Gauss–Markov, projection geometry) is regression/
  linear-models territory, not C&B's distinctive payload, and would collide with HTF (ch06). Not
  proposed.

---

## RETURN SUMMARY
- **Genuine gaps:** 11 (45.01.01–45.01.06, 45.02.01–45.02.04, 45.03.01)
- **COVERED:** 9 adjacent corpus anchors + 4 sibling-deferred clusters
- **OUT OF SCOPE:** 3
- **Gap file:** `plans/expansion/mathematical-statistics/_audit/casella-berger.gaps.md`
