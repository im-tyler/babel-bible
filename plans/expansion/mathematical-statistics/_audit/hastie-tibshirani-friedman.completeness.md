# Completeness re-audit — Hastie, Tibshirani & Friedman, *The Elements of Statistical Learning* (2nd ed., Springer 2009)

- **source_book**: `hastie-tibshirani-friedman`
- **source_curriculum**: `mathematical-statistics`
- **target section**: `content/45-mathematical-statistics/` (prefix 45)
- **my chapters**: `06-high-dimensional-regularization`, `08-learning-methods`
- **status of section**: PRODUCED — ch06 = 45.06.01-09 (9 units), ch08 = 45.08.01-10 (10 units). This is the POST-production NARROW re-audit: which ESL headline method is *still* genuinely absent after the first wave shipped.

## Method
Every candidate residual was grepped against the live corpus (filenames + bodies) before judgement. Default = COVERED. Result: **3 genuine gaps**, all headline ESL chapters with theorem-level payoff that the shipped 19 units do not state anywhere.

---

## GENUINE GAPS (3)

### 45.08.11 — k-nearest-neighbours and local regression: Cover-Hart, Stone's universal consistency, and the bias-variance of local methods
- **spec**: The k-NN classifier and regression estimate as the canonical memory-based / local method; the Cover-Hart theorem (the asymptotic 1-NN risk is bounded above by twice the Bayes risk, $R^* \le R_{1NN} \le 2R^*(1-R^*)$); Stone's theorem (universal $L_2$ consistency of $k$-NN regression under $k\to\infty$, $k/n\to 0$); local linear / local polynomial regression and the Nadaraya-Watson kernel smoother; the bias-variance trade-off of the bandwidth/neighbourhood size and how the curse of dimensionality degrades local methods (effective neighbourhood diameter $\to 1$). ESL Ch. 2 (§2.3.2 nearest neighbours, §2.5 curse of dimensionality, local methods in high dimensions) and Ch. 6 (kernel smoothing, local regression).
- **rationale / why still absent**: After production, no §45 unit treats $k$-NN or local regression as a method. `45.08.03` (LDA/QDA/logistic) is the only "linear methods for classification" unit and explicitly does the *parametric* boundary; `45.08.09` (GAM/backfitting) cites "local regression" only in passing inside the backfitting convergence note, with no Cover-Hart / Stone consistency. `45.06.05` (curse of dimensionality) motivates regularization-over-selection but does not develop the local-methods estimator or its consistency theorems. The first audit deferred this entirely (no unit proposed). Cover-Hart and Stone's theorem are genuine theorem-level payload. Genuine gap.
- **prereqs**: 45.06.02 (bias-variance), 45.06.05 (curse of dimensionality), 45.08.03 (Bayes classifier baseline)
- **chapter dir**: `content/45-mathematical-statistics/08-learning-methods/`
- **frontmatter**: section: `mathematical-statistics`, chapter: `08-learning-methods`
- **source_book**: `hastie-tibshirani-friedman` · **source_curriculum**: `mathematical-statistics`

### 45.08.12 — Generalized linear models: the exponential-dispersion family, the canonical link, Fisher scoring as IRLS, and the deviance
- **spec**: The general GLM as the unifying framework behind logistic, Poisson, gamma and Gaussian regression; the exponential-dispersion family $f(y;\theta,\phi)=\exp\{(y\theta-b(\theta))/a(\phi)+c(y,\phi)\}$ with mean $b'(\theta)$ and variance $a(\phi)b''(\theta)$ (the mean-variance relationship); the link function $g(\mu)=\eta=x^\top\beta$ and the canonical link $g=(b')^{-1}$; the score equations $X^\top W (y-\mu)=0$; Fisher scoring shown to be iteratively reweighted least squares with working response $z=\eta+(y-\mu)\,d\eta/d\mu$ and weights from the variance function; the deviance as the GLM goodness-of-fit / likelihood-ratio statistic; existence/uniqueness of the MLE and a brief note on Wedderburn quasi-likelihood. ESL §4.4 generalised + McCullagh & Nelder Ch. 2.
- **rationale / why still absent**: `45.08.03` proves the IRLS identity and convexity *only for the logistic (Bernoulli) special case*, and its own synthesis paragraph explicitly defers the general statement — "every canonical-link generalized linear model fits by the same weighted least squares, with the Bernoulli variance $p(1-p)$ replaced by the model's variance function." No unit states the exponential-dispersion family in general, the canonical-link characterisation, Poisson/gamma regression, the deviance, or quasi-likelihood. `45.01.02` (sufficiency / exponential families) is the distributional substrate but not the regression theory. `45.03.02` is the *Bayes* exponential-family unit. This is the genuine unification gap the brief flagged. Genuine gap.
- **prereqs**: 45.01.02 (exponential families), 45.01.04 (MLE / Fisher scoring), 45.06.01 (linear model / weighted least squares), 45.08.03 (logistic special case)
- **chapter dir**: `content/45-mathematical-statistics/08-learning-methods/`
- **frontmatter**: section: `mathematical-statistics`, chapter: `08-learning-methods`
- **source_book**: `hastie-tibshirani-friedman` · **source_curriculum**: `mathematical-statistics`

### 45.06.10 — Gaussian graphical models and the graphical LASSO
- **spec**: The undirected Gaussian graphical model: for $X\sim N(0,\Sigma)$, a zero in the precision matrix $\Theta=\Sigma^{-1}$ ($\theta_{jk}=0$) is equivalent to conditional independence of $X_j$ and $X_k$ given the rest (the pairwise Markov property for the Gaussian, the partial-correlation reading); structure learning by neighbourhood selection (Meinshausen-Bühlmann nodewise LASSO) and by the **graphical LASSO** — the $\ell_1$-penalised Gaussian log-likelihood $\max_{\Theta\succ 0}\ \log\det\Theta-\operatorname{tr}(S\Theta)-\lambda\|\Theta\|_1$ — with its block-coordinate-descent solution and sparsistency. ESL Ch. 17 (§17.3 the Gaussian graphical model, §17.3.1 graphical lasso, §17.4 hidden-variable comments).
- **rationale / why still absent**: grep for `graphical model | graphical lasso | gaussian graphical | precision matrix` returns **zero** hits anywhere in `content/`. The first audit placed ESL Ch. 17 OUT OF SCOPE on the premise it belonged to a "separate probabilistic-graphical-models lane" — but no such lane exists in the corpus, so the topic is simply absent. It is a headline ESL chapter with genuine theorem payload (the precision-matrix conditional-independence equivalence; the graphical-lasso convex program). It sits naturally in ch06 as a high-dimensional sparse-estimation problem next to the LASSO. Genuine gap.
- **prereqs**: 45.06.06 (LASSO / $\ell_1$ sparsity), 45.06.01 (linear model / partial correlation), 01.01.12 (SVD / positive-definite matrices)
- **chapter dir**: `content/45-mathematical-statistics/06-high-dimensional-regularization/`
- **frontmatter**: section: `mathematical-statistics`, chapter: `06-high-dimensional-regularization`
- **source_book**: `hastie-tibshirani-friedman` · **source_curriculum**: `mathematical-statistics`

---

## COVERED (not gaps) — verified against shipped units

- **Linear model / Gauss-Markov / hat matrix / BLUE** — `45.06.01`.
- **Bias-variance decomposition** — `45.06.02`.
- **Ridge / shrinkage / df(λ) / Bayesian MAP link** — `45.06.03`.
- **James-Stein / inadmissibility / SURE** — `45.06.04`.
- **Subset selection / curse of dimensionality** — `45.06.05`.
- **LASSO / oracle inequalities / irrepresentable condition** — `45.06.06`.
- **Elastic net / LARS / regularization path** — `45.06.07`.
- **PCR / PLS as regression methods** — `45.06.08`; PCA-as-linear-algebra and the Eckart-Young / best-rank-$k$ statement in `01.01.12`.
- **Model assessment: Cp / AIC / BIC / CV / .632 bootstrap** — `45.06.09`.
- **Kernels / RKHS / Moore-Aronszajn / representer theorem** — `45.08.01`.
- **SVM: margin / dual / KKT / kernel trick** — `45.08.02`.
- **LDA / QDA / logistic regression (logistic IRLS special case, convexity, generative-vs-discriminative)** — `45.08.03`. (The *general* GLM is the residual gap 45.08.12 above; the logistic instance is fully covered here.)
- **CART / splitting criteria / cost-complexity pruning** — `45.08.04`.
- **Bagging / random forests / OOB / variable importance** — `45.08.05`.
- **Boosting: AdaBoost as forward-stagewise / gradient boosting** — `45.08.06`.
- **EM / Gaussian mixtures / ELBO ascent** — `45.08.07`.
- **k-means / model-based clustering / Lloyd / k-means++** — `45.08.08`.
- **GAMs / backfitting / concurvity** — `45.08.09`.
- **Neural nets / MLP / backpropagation** — `45.08.10`.
- **Matrix completion / recommender / nuclear-norm** — conceptually covered: `01.01.12` (SVD recommender note, Candès-Recht exact-completion reference) and the nuclear-norm-constrained completion solver in `44.06.06` (Frank-Wolfe). No standalone statistical theorem unique to §45 beyond these. Not a gap.
- **PCA / Eckart-Young best low-rank approximation** — `01.01.12`.
- **Generalization THEORY (VC / Rademacher / PAC / no-free-lunch / margin bounds / stability)** — `45.07.01-07` (ch07 lane). Cross-ref, not mine.

## OUT OF SCOPE

- **Independent component analysis, nonnegative matrix factorization, and nonlinear manifold learning (Isomap / LLE / Laplacian eigenmaps / kernel PCA / t-SNE), ESL Ch. 14** — ICA has a single identifiability theorem but the bulk (manifold methods, NMF) is algorithm phenomenology without theorem-level statistical payoff distinct from the PCA/SVD already in `01.01.12`. Linear dimension reduction is covered (PCR/PLS, SVD). Not manufactured into a unit.
- **Naive-Bayes classifier** — a one-step corollary of the Bayes classifier already developed in `45.08.03` (the conditional-independence factorisation of class densities); no standalone theorem-level payload. Not a gap.
- **Wavelets / wavelet shrinkage (ESL §5.9), signal-processing smoothers** — analysis / numerical spines, no statistical theorem unique to this section.
- **Prototype methods grab-bag (LVQ, K-medoids variants, ESL Ch. 13), software/dataset case studies** — phenomenology without theorem-level payoff.
- **High-dimensional multiple testing / FDR (ESL §18.7)** — the hypothesis-testing lane (45.02 / Casella-Berger), not the ch06/ch08 mandate.
