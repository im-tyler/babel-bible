# Spine 10 — Statistics & Learning Theory · PRODUCTION PLAN (collision-checked)

Section `content/45-mathematical-statistics` (prefix 45, field `statistics` SHARED with the
elementary `26-statistics` survey, spine id `mathematical-statistics`). Reconciles 5 audits
(Casella-Berger / van der Vaart / Wasserman / Hastie-Tibshirani-Friedman / Shalev-Shwartz-Ben-David)
into 57 units, 7 dependency waves.

Collisions resolved: ch05 — Wasserman Bernstein keeps 45.05.01; van der Vaart's 5 empirical-process
theory units shift to 45.05.02-06.
ch03 (bayesian) was under-audited (no dedicated Bayesian auditor); 45.03.02-05 added directly
(conjugate/exponential-family Bayes, hierarchical/empirical Bayes, Bernstein-von Mises, MCMC) —
producers MUST verify-not-covered (esp. MCMC vs 37.05 Markov chains).

Peers to match — THEORY: `37.07.03` (Legendre-Fenchel) + a shipped in-section 45.* unit once
available. ALGORITHM/ML: `44.06.02` (proximal-gradient) + `43.07.04` (CG). Producers should also
read the single most-relevant shipped peer.

Reused cross-spine prereqs (verified shipped): probability 37.02 (LLN), 37.03 (CLT/char-fns/Donsker
FCLT 37.03.03), 37.04 (conditional expectation/contiguity foundation 37.04.04), 37.05 (Markov),
37.07 (large deviations / 37.07.02), concentration 40.07.05 (Azuma/McDiarmid) + 40.07.01, optimization
44.02.* (duality/KKT), 44.06.* (proximal/SGD/mirror 44.06.05), 44.03.08 (AD), functional analysis
02.11.*, elementary survey 26.* (cross-ref, do not duplicate).

## ch01 decision-theory-estimation (Casella-Berger, 6)
45.01.01 decision theory: loss/risk/admissibility/minimax/Bayes · 45.01.02 sufficiency/factorization/
exponential-families · 45.01.03 ancillarity/completeness/Basu · 45.01.04 method-of-moments & MLE
(finite-sample) · 45.01.05 Fisher information & Cramér-Rao · 45.01.06 Rao-Blackwell & Lehmann-Scheffé (UMVU)
## ch02 hypothesis-testing-confidence (Casella-Berger, 4)
45.02.01 Neyman-Pearson · 45.02.02 MLR & UMP (Karlin-Rubin) · 45.02.03 LRT/Wald/score (finite-sample) ·
45.02.04 confidence sets/pivots/duality
## ch03 bayesian-inference (Casella-Berger + Gelman/Efront/vdV, 5)
45.03.01 Bayes estimation under loss · 45.03.02 conjugate priors & exponential-family Bayes ·
45.03.03 hierarchical & empirical Bayes (Stein link) · 45.03.04 Bernstein-von Mises theorem ·
45.03.05 MCMC: Metropolis-Hastings & Gibbs (VERIFY vs 37.05)
## ch04 asymptotic-statistics (van der Vaart, 10)
45.04.01 consistency & modes of stochastic convergence · 45.04.02 delta method (1st/2nd order) ·
45.04.03 MLE asymptotic normality & efficiency · 45.04.04 M- & Z-estimators · 45.04.05 ARE ·
45.04.06 LAN · 45.04.07 contiguity & Le Cam's lemmas · 45.04.08 convolution theorem & LAM bound ·
45.04.09 LR/Wald/score asymptotics (chi-squared trinity) · 45.04.10 bootstrap consistency
## ch05 empirical-processes-nonparametric (Wasserman + van der Vaart, 6)
45.05.01 Bernstein inequality (sub-exponential/Bennett) [Wasserman] · 45.05.02 EDF & Glivenko-Cantelli
classes · 45.05.03 Donsker classes & empirical-process weak limit · 45.05.04 entropy/VC conditions for
Donsker · 45.05.05 U-statistics & asymptotics · 45.05.06 functional delta method (Hadamard)
## ch06 high-dimensional-regularization (HTF, 9)
45.06.01 linear model/Gauss-Markov/BLUE · 45.06.02 bias-variance decomposition · 45.06.03 ridge/shrinkage ·
45.06.04 James-Stein & inadmissibility · 45.06.05 subset selection & curse of dimensionality ·
45.06.06 LASSO/sparsity/oracle inequalities · 45.06.07 elastic net & LARS · 45.06.08 PCR & PLS ·
45.06.09 model assessment: Cp/AIC/BIC/CV/.632
## ch07 statistical-learning-theory (Shalev-Shwartz-Ben-David/Vapnik/Mohri, 7)
45.07.01 PAC & agnostic PAC, ERM, finite-class bound · 45.07.02 uniform convergence/bias-complexity/
No-Free-Lunch · 45.07.03 VC dimension/growth function/Sauer-Shelah · 45.07.04 fundamental theorem of
statistical learning · 45.07.05 Rademacher complexity & contraction · 45.07.06 margin bounds & covering/
Dudley chaining · 45.07.07 stability & online learning/perceptron/Littlestone
## ch08 learning-methods (HTF, 10)
45.08.01 kernels/RKHS/representer theorem · 45.08.02 SVM (margin/dual/kernel trick) · 45.08.03 LDA/QDA/
logistic · 45.08.04 CART · 45.08.05 bagging & random forests · 45.08.06 boosting (AdaBoost/gradient) ·
45.08.07 EM & Gaussian mixtures · 45.08.08 k-means & model-based clustering · 45.08.09 GAMs & backfitting ·
45.08.10 neural nets/MLP/backprop (brief)

## Waves (dependency-ordered)
- W1 (9): 45.01.01, 45.01.02, 45.01.04, 45.04.01, 45.05.01, 45.06.01, 45.06.02, 45.08.04, 45.03.05
- W2 (9): 45.01.03, 45.01.05, 45.02.01, 45.04.02, 45.05.02, 45.05.05, 45.06.03, 45.07.01, 45.08.07
- W3 (9): 45.01.06, 45.02.02, 45.02.03, 45.02.04, 45.03.01, 45.04.03, 45.05.03, 45.06.05, 45.07.02
- W4 (8): 45.03.02, 45.04.04, 45.04.05, 45.04.06, 45.04.09, 45.05.04, 45.06.04, 45.07.03
- W5 (8): 45.03.03, 45.04.07, 45.04.10, 45.05.06, 45.06.06, 45.06.08, 45.07.04, 45.08.01
- W6 (8): 45.03.04, 45.04.08, 45.06.07, 45.06.09, 45.07.05, 45.08.02, 45.08.03, 45.08.09
- W7 (6): 45.07.06, 45.07.07, 45.08.05, 45.08.06, 45.08.08, 45.08.10

Total: 57 units.
