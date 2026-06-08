# Audit — Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* (2nd ed., Springer 2009)

- **source_book**: `hastie-tibshirani-friedman`
- **source_curriculum**: `mathematical-statistics`
- **target section**: `content/45-mathematical-statistics/` (prefix 45)
- **my chapters**: `06-high-dimensional-regularization`, `08-learning-methods`
- **lane**: STATISTICAL learning / ML-methods payload. I own the *methods* and the *statistical theory* (bias-variance, shrinkage, degrees of freedom, oracle inequalities, model assessment). The generalization-THEORY lane (VC / Rademacher / PAC) belongs to ch07 (parallel auditor). The convex-optimization SOLVERS for LASSO/proximal/coordinate-descent live in §44 (parallel spine, already shipped) — I cite them as prereqs, I do not duplicate them.

## Audit context

The `content/45-mathematical-statistics/` tree is a **fresh empty skeleton** — `find content/45 -name "*.md"` returns 0 files. So nothing in chapters 06/08 is occupied; every slot 45.06.0x / 45.08.0x is free.

Every HTF headline topic was verified against the live corpus by filename + body grep. The only places these topics surface are three **survey** units, none of which develops the statistical theory at unit depth:

- `26.06.01` — Correlation & regression analysis (8.0k words). Elementary→survey. *States* Gauss-Markov + OLS geometry properly; *mentions* ridge/lasso/AIC/BIC/CV only in Master "Advanced results" prose paragraphs.
- `26.08.01` — Nonparametric methods & resampling (8.0k words). Owns bootstrap principle, jackknife, KDE, permutation tests, U-statistics, Glivenko-Cantelli; *mentions* curse of dimensionality + oracle/efficiency in prose.
- `25.09.01` — AI / Machine learning survey (8.0k words). *States* bias-variance tradeoff, VC dimension, universal approximation at survey level; lists SVM/boosting/random-forest/trees in prose only. **Cross-ref, do not duplicate** — this is a CS-spine overview, not statistical theory.

Because the home section is empty and the surveys only gesture at these results, this is the "substantial but genuine gap list" the brief anticipated for a big chapter pair. Each gap below is a unit-level statistical-theory result with no corresponding unit anywhere in `content/`.

Verified prereq ids on disk: `02.11.07` (inner product space), `02.11.08` (Hilbert space), `01.01.12` (SVD), `26.04.01` (sampling distributions/CLT), `26.06.01` (regression survey), `26.07.01` (Bayesian/James-Stein mention), `26.08.01` (nonparametric/bootstrap), `25.09.01` (AI/ML survey), `44.02.05` (subdifferential calculus), `44.06.02` (proximal gradient), `44.06.07` (coordinate descent).

---

## GENUINE GAPS — chapter 06 (high-dimensional & regularization)

### 45.06.01 — Linear model theory: Gauss-Markov, the hat matrix, and BLUE
- **spec**: The classical linear model in matrix form; OLS as orthogonal projection; the hat (projection) matrix H = X(XᵀX)⁻¹Xᵀ, its idempotence/trace = p, leverage and influence; Gauss-Markov theorem (OLS is BLUE) with full proof; distributional theory under Gaussian errors.
- **rationale / vs 26.06.01**: 26.06.01 states Gauss-Markov and OLS geometry but at survey altitude and without the hat-matrix apparatus (leverage, trace = df, the algebra used downstream by ridge/df units). This unit is the rigorous matrix-theory anchor the rest of ch06 builds on. Genuine gap: no unit develops the hat matrix.
- **prereqs**: 01.01.12, 26.06.01
- **chapter dir**: `content/45-mathematical-statistics/06-high-dimensional-regularization/`
- **frontmatter**: section: `mathematical-statistics`, chapter: `06-high-dimensional-regularization`

### 45.06.02 — The bias-variance decomposition and the prediction-error trade-off
- **spec**: Decomposition of expected prediction error into irreducible noise + bias² + variance; pointwise and integrated forms; the trade-off as model complexity varies; in-sample vs extra-sample error, optimism of the training error.
- **rationale**: Mentioned in 25.09.01 and 26.06.01 as prose, never derived as a theorem-level unit. The decomposition is the conceptual spine of all of ch06/ch07; needs its own statement+proof.
- **prereqs**: 26.04.01, 45.06.01
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.03 — Ridge regression and shrinkage estimation
- **spec**: Ridge as penalized least squares / constrained OLS; closed form β̂ = (XᵀX + λI)⁻¹Xᵀy; shrinkage in the SVD basis; effective degrees of freedom df(λ) = tr(H_λ); bias-variance behavior; connection to Bayesian MAP under a Gaussian prior. Statistical theory only — the optimization is trivial (linear solve).
- **rationale**: Ridge appears only as a paragraph in 26.06.01. No unit derives the shrinkage formula, df(λ), or the Bayesian link.
- **prereqs**: 45.06.01, 45.06.02, 01.01.12
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.04 — The James-Stein estimator and inadmissibility of the MLE
- **spec**: Stein's paradox: the sample mean is inadmissible for the mean of a p≥3 Gaussian; James-Stein estimator and its dominance under squared-error loss; Stein's unbiased risk estimate (SURE); shrinkage interpretation; empirical-Bayes derivation.
- **rationale / lane note**: 26.07.01 (Bayesian) *names* the result and the inadmissibility fact in one Master paragraph, with no risk-dominance proof or SURE. The brief explicitly assigns James-Stein to my ch06 ("the James-Stein estimator if absent"). Decision-theory ch01 of §45 is a parallel lane, but its mandate is general decision theory (loss/risk/admissibility framework), not this specific shrinkage estimator — placing it in ch06 next to ridge is the intended home. Genuine gap.
- **prereqs**: 26.07.01, 45.06.03
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.05 — Subset selection and the curse of dimensionality
- **spec**: Best-subset, forward/backward stepwise and stagewise selection; the discreteness/instability of selection; the curse of dimensionality (volume concentration, nearest-neighbor sparsity, sample-complexity blowup) as the motivation for regularization over selection.
- **rationale**: Curse of dimensionality is a prose mention in 26.08.01 and §44 DP units (Bellman's "curse" is a different, control-theoretic usage). Subset selection is absent entirely. Genuine gap.
- **prereqs**: 45.06.01, 45.06.02
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.06 — The LASSO: sparsity, oracle inequalities, and the irrepresentable condition
- **spec**: ℓ₁-penalized regression; geometry of why ℓ₁ induces sparsity (corner solutions); the STATISTICAL theory — prediction/estimation oracle inequalities under the restricted eigenvalue / compatibility condition; model-selection consistency under the irrepresentable condition; the LASSO degrees of freedom (= number of selected variables). **Solvers are §44** (cross-ref 44.06.02 proximal/soft-thresholding, 44.06.07 coordinate descent) — this unit is the statistics.
- **rationale**: "oracle inequality" / "irrepresentable" appear nowhere as a developed result (only an "oracle/efficiency" prose mention in 26.08.01). This is the flagship high-dimensional statistical-theory gap.
- **prereqs**: 45.06.03, 44.06.02, 44.06.07, 44.02.05
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.07 — Elastic net and least angle regression (LARS)
- **spec**: Elastic net penalty (convex combination of ℓ₁/ℓ₂), the grouping effect, correlated-predictor behavior; LARS algorithm and the piecewise-linear LASSO regularization path; the path-following / homotopy view.
- **rationale**: No hits for "elastic net" or "least angle regression / LARS" anywhere in `content/` (the apparent "elastic net" grep hits are unrelated "...net" matches). Genuine gap.
- **prereqs**: 45.06.06
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.08 — Principal components regression and partial least squares
- **spec**: PCR as regression on leading SVD directions; PLS as supervised dimension reduction; relation to ridge (shrinkage along principal directions); when PCR/PLS beat OLS.
- **rationale**: PCA exists only as linear algebra (01.01.12 SVD); no unit treats PCA/PLS as a *regression/prediction* method with its statistical properties. Genuine gap.
- **prereqs**: 01.01.12, 45.06.03
- **chapter dir**: `.../06-high-dimensional-regularization/`

### 45.06.09 — Model assessment and selection: Cp, AIC, BIC, cross-validation, and the bootstrap .632 estimator
- **spec**: Optimism of training error and effective degrees of freedom; Mallows Cp; AIC and BIC (derivations + their asymptotic regimes / consistency-vs-efficiency contrast); K-fold and leave-one-out cross-validation (and the bias-variance of CV itself); the bootstrap estimate of prediction error and the .632 / .632+ correction.
- **rationale**: AIC/BIC/Cp/CV are prose mentions in 26.06.01 and 25.09.01; the bootstrap principle is in 26.08.01 but the **.632 estimator** specifically is absent and the unified model-assessment framework (optimism + df + the estimator comparison) has no home. Genuine gap.
- **prereqs**: 45.06.02, 26.08.01
- **chapter dir**: `.../06-high-dimensional-regularization/`

---

## GENUINE GAPS — chapter 08 (learning methods)

### 45.08.01 — Kernel methods, RKHS, and the representer theorem
- **spec**: Positive-definite kernels and the Moore-Aronszajn theorem; the reproducing-kernel Hilbert space; the kernel trick (feature map vs kernel evaluation); the representer theorem (the regularized-risk minimizer over an RKHS lies in the span of the data kernels). Reuse Hilbert-space theory as prereq; this is the learning-theoretic specialization.
- **rationale / vs complex analysis**: "reproducing kernel" grep hits are the Bergman/Szegő kernels in §06 several-complex-variables — a different object. No statistical/learning RKHS or representer theorem exists. Genuine gap.
- **prereqs**: 02.11.07, 02.11.08
- **chapter dir**: `content/45-mathematical-statistics/08-learning-methods/`
- **frontmatter**: section: `mathematical-statistics`, chapter: `08-learning-methods`

### 45.08.02 — Support vector machines: the margin, the dual, and the kernel trick
- **spec**: Maximum-margin separating hyperplane (hard margin); soft-margin / hinge-loss formulation; the Lagrangian dual and KKT/support-vector structure; kernelization via the RKHS; SVM regression (ε-insensitive loss) briefly.
- **rationale**: SVM is a prose list-item in 25.09.01 and 26.08.01; no unit derives the margin, the dual, or the SV conditions. (The §44 KKT machinery 44.02.02 is the optimization prerequisite, not the statistical unit.) Genuine gap.
- **prereqs**: 45.08.01, 44.02.05
- **chapter dir**: `.../08-learning-methods/`

### 45.08.03 — Linear & quadratic discriminant analysis and logistic regression as classifiers
- **spec**: Bayes-optimal classifier; Gaussian-class models → LDA (shared covariance, linear boundary) and QDA (per-class covariance, quadratic boundary); logistic regression as a discriminative learning method (log-odds linear model, MLE via IRLS), and the LDA-vs-logistic generative/discriminative contrast.
- **rationale**: "discriminant analysis" grep hits are false positives (unrelated text); logistic regression appears only as a Master paragraph in 26.06.01 (GLM context), not as a *classification learning method* with LDA/QDA. Genuine gap.
- **prereqs**: 26.04.01, 45.06.01
- **chapter dir**: `.../08-learning-methods/`

### 45.08.04 — Tree-based methods: CART
- **spec**: Recursive binary partitioning; splitting criteria (Gini, deviance/entropy, squared error); cost-complexity pruning; surrogate splits / missing data; bias-variance and instability of single trees.
- **rationale**: "decision tree / CART" hits are 25.09.01 (prose list) and 26.08.01; no unit develops the algorithm or pruning theory. Genuine gap.
- **prereqs**: 45.06.02, 45.06.05
- **chapter dir**: `.../08-learning-methods/`

### 45.08.05 — Bagging and random forests
- **spec**: Bootstrap aggregation and its variance-reduction mechanism; random forests (bagged trees + random feature subsampling, decorrelation); out-of-bag error estimation; variable importance.
- **rationale**: Bagging/random-forest are prose list-items in 25.09.01 and 26.08.01; the bootstrap *principle* is in 26.08.01 but bagging/RF as ensemble learning methods have no unit. Genuine gap.
- **prereqs**: 45.08.04, 26.08.01
- **chapter dir**: `.../08-learning-methods/`

### 45.08.06 — Boosting: AdaBoost as forward stagewise additive modeling, and gradient boosting
- **spec**: AdaBoost algorithm; its interpretation as forward stagewise additive modeling minimizing exponential loss; the statistical view (margin maximization, population minimizer = half log-odds); gradient boosting as functional gradient descent over a loss with weak learners; shrinkage/learning-rate and regularization.
- **rationale**: "boosting/adaboost/gradient boost" hits are 25.09.01 (prose) only. The forward-stagewise / functional-gradient theory is absent. Genuine gap.
- **prereqs**: 45.08.04, 44.06.05
- **chapter dir**: `.../08-learning-methods/`

### 45.08.07 — The EM algorithm and Gaussian-mixture / latent-variable models
- **spec**: EM as a general MLE method for latent-variable / incomplete-data models; the E and M steps; monotone ascent of the observed-data likelihood via the evidence lower bound (Jensen / minorize-maximize argument); convergence; Gaussian mixture models as the canonical instance; k-means as the hard-assignment EM limit.
- **rationale**: "EM algorithm / expectation-maximization" hits only 44.06.07 (a one-line analogy in coordinate descent). No unit states EM, the ELBO ascent proof, or GMMs. Brief assigns EM + GMM + k-means link to ch08. Genuine gap.
- **prereqs**: 26.04.01, 26.07.01, 44.06.07
- **chapter dir**: `.../08-learning-methods/`

### 45.08.08 — k-means and model-based clustering
- **spec**: k-means objective (within-cluster sum of squares), Lloyd's algorithm and its monotone descent / local-optimum behavior, initialization (k-means++); relation to Gaussian mixtures (hard-EM); choosing k. Unsupervised-learning counterpart to 45.08.07.
- **rationale**: "k-means / gaussian mixture / mixture model" produce no dedicated unit (only the survey mentions). Genuine gap. Kept distinct from 45.08.07 (EM/GMM is the probabilistic/MLE story; this is the geometric clustering algorithm and its theory).
- **prereqs**: 45.08.07
- **chapter dir**: `.../08-learning-methods/`

### 45.08.09 — Generalized additive models and the backfitting algorithm
- **spec**: Additive model f(x) = Σ fⱼ(xⱼ) with smooth component functions; the backfitting algorithm as coordinate-wise smoothing / Gauss-Seidel; degrees of freedom and inference; interpretability vs flexibility trade-off; link to smoothing splines.
- **rationale**: No hits for "generalized additive / backfitting" anywhere in `content/`. Genuine gap.
- **prereqs**: 45.06.09, 45.08.03
- **chapter dir**: `.../08-learning-methods/`

### 45.08.10 — Neural networks: the MLP and backpropagation (brief)
- **spec**: The multilayer perceptron as composed affine + nonlinearity layers; the squared-/cross-entropy objective; backpropagation as reverse-mode chain rule; weight decay / early stopping as regularization; brief note on the universal approximation theorem (stated, with the THEORY deferred to ch07 / 25.09.01). Methods-level, not a deep-learning treatise.
- **rationale**: "neural network / backpropagation / MLP" hits are 25.09.01 (survey, universal-approx + bias-variance) only — no unit derives backprop. HTF Ch. 11 owns this at methods depth. Brief explicitly scopes this "brief". Genuine but bounded gap; universal-approximation *theory* stays in the CS/ch07 lane (cross-ref, don't duplicate).
- **prereqs**: 45.08.06, 25.09.01
- **chapter dir**: `.../08-learning-methods/`

---

## COVERED (not gaps)

- **Gauss-Markov theorem / OLS as projection / GLS / multiple regression / R²** — `26.06.01` states and proves Gauss-Markov and develops OLS geometry. (45.06.01 deliberately *extends* with the hat-matrix/leverage apparatus the survey omits and which downstream df/CV units require — it is not a duplicate of the theorem statement.)
- **Bootstrap principle, bootstrap CIs, consistency of the bootstrap, jackknife, permutation tests, U-statistics, Glivenko-Cantelli, KDE** — `26.08.01`. (45.06.09 reuses these as the prereq for the .632 *prediction-error* estimator, which the survey does not cover.)
- **VC dimension & generalization bounds, universal approximation theorem** — `25.09.01` (and these belong to the ch07 learning-THEORY lane, not mine).
- **Bias-variance tradeoff (survey-level statement)** — mentioned in `25.09.01` and `26.06.01`; 45.06.02 promotes it to a derived theorem-level unit (the surveys do not decompose it formally), so it remains a genuine gap, not a duplicate.
- **James-Stein estimator (named, inadmissibility fact)** — `26.07.01` mentions it; 45.06.04 supplies the risk-dominance proof + SURE the survey lacks (kept as gap per brief).
- **Singular value decomposition** — `01.01.12` (reused as prereq for ridge/PCR).
- **Hilbert space / inner product space** — `02.11.07`, `02.11.08` (reused as prereq for RKHS; no learning-specific RKHS exists).
- **Convex-optimization SOLVERS for LASSO/sparse problems** — `44.06.02` (proximal/soft-thresholding), `44.06.03` (FISTA), `44.06.04` (ADMM), `44.06.07` (coordinate descent), `44.02.05` (subdifferential). These are the ALGORITHMIC side and live in the §44 spine; my LASSO/elastic-net/LARS units cite them and supply the *statistical* theory (sparsity recovery, oracle inequalities, df).
- **AI/ML overview, transformers, RLHF, foundation models, RL** — `25.09.01` (CS-spine survey; out of my statistical-theory lane).
- **GLM / logistic regression in the GLM/regression context** — `26.06.01` Master section mentions GLMs; 45.08.03 treats logistic regression specifically as a *classification learning method* alongside LDA/QDA, which is the genuine gap (the regression-spine mention is not a classifier unit).
- **PCA as a linear-algebra construction** — `01.01.12` SVD (45.06.08 is PCA/PLS as a *regression method*, a distinct statistical object).

## OUT OF SCOPE

- **Wavelets, signal-processing smoothers, and the wavelet-shrinkage chapter (HTF Ch. 5.9)** — belongs to the analysis/numerical spines, not the statistical-learning methods lane; no theorem-level statistical payoff unique to this section.
- **Undirected graphical models / structure learning (HTF Ch. 17)** — graphical-model theory is a separate topic better homed in a probabilistic-graphical-models lane; not part of the ch06/ch08 regularization+methods mandate.
- **High-dimensional inference plumbing (multiple testing / FDR, HTF Ch. 18.7)** — multiple-testing control is the hypothesis-testing lane (45.02 / Casella-Berger), not mine.
- **Generalization THEORY (VC / Rademacher / PAC bounds, structural risk minimization)** — explicitly the ch07 parallel auditor's lane; I cross-ref, do not propose.
- **Software/implementation details, dataset case studies, and the prototype-methods grab-bag (HTF Ch. 13 LVQ, etc.)** — phenomenology without theorem-level payoff.
