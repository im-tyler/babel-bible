# COMPLETENESS audit — Wasserman, *All of Statistics* / *All of Nonparametric Statistics*

- **source_book slug:** `wasserman`
- **source_curriculum:** `mathematical-statistics`
- **Target section:** `content/45-mathematical-statistics/` (prefix 45), ch05 `05-empirical-processes-nonparametric`
- **Date:** 2026-06-08
- **Mode:** POST-production completeness pass (§45 now carries 57 shipped units; ch05 = 45.05.01–06). Question: after production, any headline nonparametric/applied-statistics topic from Wasserman STILL genuinely absent corpus-wide?

## Verdict

**Near-complete. 2 genuine still-absent gaps.** The bootstrap/jackknife/KDE/local-polynomial
apparatus is owned by `26.08.01`; concentration (Hoeffding/McDiarmid/Bernstein) by `40.07.05`
+ `45.05.01`; empirical-process theory (Glivenko–Cantelli, DKW band, Donsker, entropy/VC,
U-statistics, functional delta) by `45.05.02–06`; PAC/VC/Rademacher learning by `45.07.*`.
Two Wasserman *All of Nonparametric Statistics* headline topics have **zero** corpus coverage:
(1) orthogonal-series / wavelet density estimation with thresholding, and (2) the *derivation*
of nonparametric minimax lower bounds (Le Cam two-point / Fano / Assouad over smoothness
classes) — the rates are asserted in `26.08.01` but never proved anywhere.

**Still-absent gaps: 2. COVERED: 9 clusters. NOTED (defer to sibling): 1. OUT OF SCOPE: 2.**

---

## STILL-ABSENT GAPS

### 45.05.07 — Orthogonal-series and wavelet density estimation; thresholding
- **id:** `45.05.07` (free slot — ch05 occupies 45.05.01–06; this is the next id)
- **title:** Orthogonal-series and wavelet density estimation
- **spec:** Expand an unknown density/regression function in an orthonormal basis
  $f=\sum_j \theta_j \phi_j$ (cosine/Legendre/Hermite series; then a compactly supported
  wavelet multiresolution $\{\phi_{jk},\psi_{jk}\}$); estimate coefficients by their empirical
  means $\hat\theta_j=n^{-1}\sum_i \phi_j(X_i)$ (unbiased, variance $\approx 1/n$); the
  **linear projection (series) estimator** truncated at $J$ terms and its bias–variance trade-off,
  recovering the minimax rate $n^{-2s/(2s+1)}$ over a Sobolev/Hölder ball when $J\asymp n^{1/(2s+1)}$;
  then the gain from **nonlinear thresholding** (hard/soft, Donoho–Johnstone $\sqrt{2\log n}$
  universal threshold; VisuShrink/SureShrink) which adapts to spatially inhomogeneous smoothness
  (Besov bodies) where the linear estimator is suboptimal. Contrast with kernel density estimation
  (`26.08.01`): same minimax rate over Sobolev balls, but wavelet thresholding is *adaptive* over
  Besov scales and handles local features (jumps, spikes) the fixed-bandwidth kernel oversmooths.
  This is Wasserman *ANS* Ch. 8–9 (orthogonal functions, wavelets) — a headline chapter with no
  corpus home.
- **prereqs (verified on disk):**
  - `26.08.01` — kernel density estimation, MISE, bias–variance, minimax rate (the parent nonparametric methods unit; `content/26-statistics/08-nonparametric/26.08.01-nonparametric-methods-resampling.md`)
  - `02.11.07` — inner product space / orthonormal systems (`content/02-analysis/11-functional-analysis/02.11.07-inner-product-space.md`)
  - `02.10.01` — Fourier series, orthonormal expansion, Parseval (`content/02-analysis/10-harmonic/02.10.01-fourier-series-riemann-lebesgue.md`)
  - `45.06.06` — lasso / soft-thresholding sparsity oracle (the soft-threshold operator and oracle-inequality template, here applied to coefficient sequences; `content/45-mathematical-statistics/06-high-dimensional-regularization/45.06.06-lasso-sparsity-oracle.md`)
- **chapter dir:** `content/45-mathematical-statistics/05-empirical-processes-nonparametric/`
- **frontmatter:** `section: mathematical-statistics`, `chapter: 05-empirical-processes-nonparametric`
- **source_book:** `wasserman` · **source_curriculum:** `mathematical-statistics`
- **lean_status:** `none` (prose-first; no Mathlib wavelet/density-estimation API).
- **Why genuine:** corpus-wide grep for `wavelet|multiresolution` returns only tangential hits
  (Larmor radiation `10.07.01`, FISTA's "wavelet transform" aside `44.06.03`); `orthogonal series`,
  `besov`, `thresholding.*densit`, `donoho|johnstone` as *density/regression estimators* return
  **zero**. Lasso/elastic-net soft-thresholding (`45.06.06`/`45.06.07`) is for sparse parameter
  *vectors* in linear models, never the function-estimation series/wavelet picture. KDE in
  `26.08.01` is the only density estimator present.

### 45.05.08 — Minimax lower bounds: Le Cam two-point, Fano, and Assouad methods
- **id:** `45.05.08` (free slot — next ch05 id after 45.05.07)
- **title:** Nonparametric minimax lower bounds (Le Cam, Fano, Assouad)
- **spec:** The general machinery for **proving** that no estimator beats a given rate over a
  function class. Reduction of estimation to testing; **Le Cam's two-point method** (a single
  pair $f_0,f_1$ with small Hellinger/TV distance but separated functionals gives an $\Omega$ bound);
  **Le Cam's method with mixtures**; **Fano's inequality** route (a $2^m$-packing of the parameter
  class, mutual-information / KL control of the testing error, yielding the polynomial-in-$n$ rate);
  **Assouad's lemma** (hypercube reduction to $m$ coupled two-point problems, the natural tool for
  the $L_2$ loss of function estimation). Apply to recover the **lower** half of the nonparametric
  minimax rate $n^{-2s/(2s+1)}$ over a Sobolev/Hölder smoothness ball — matching the KDE/series
  *upper* bound and so establishing minimax optimality, not merely asserting it. Contrast with the
  parametric LAM/convolution bound (`45.04.08`) and with the No-Free-Lunch classification lower
  bound (`45.07.02`): those are parametric-rate / VC-capacity statements; this is the
  smoothness-class nonparametric-rate lower-bound calculus. Wasserman *ANS* Ch. 6 (minimax theory).
- **prereqs (verified on disk):**
  - `26.08.01` — states the minimax rate $n^{-2s/(2s+1)}$ as fact (this unit *derives* the lower bound; `content/26-statistics/08-nonparametric/26.08.01-nonparametric-methods-resampling.md`)
  - `45.04.07` — contiguity / Le Cam's lemmas (the Le Cam asymptotic toolkit; this unit is the *minimax-testing* sibling, distinct from contiguity; `content/45-mathematical-statistics/04-asymptotic-statistics/45.04.07-contiguity-le-cam-lemmas.md`)
  - `45.05.01` — Bernstein / sub-exponential, MGF/KL control (`content/45-mathematical-statistics/05-empirical-processes-nonparametric/45.05.01-bernstein-inequality-sub-exponential.md`)
  - `45.02.01` — Neyman–Pearson / testing-error framing (the estimation→testing reduction rests on test risk; `content/45-mathematical-statistics/02-hypothesis-testing-confidence/45.02.01-neyman-pearson-most-powerful-tests.md`)
  - Information-theoretic note: KL/mutual-information appear; if a dedicated KL/entropy unit exists in the §46/information spine it should be added as a prereq at production time (Fano needs $I(X;Y)$).
- **chapter dir:** `content/45-mathematical-statistics/05-empirical-processes-nonparametric/`
- **frontmatter:** `section: mathematical-statistics`, `chapter: 05-empirical-processes-nonparametric`
- **source_book:** `wasserman` · **source_curriculum:** `mathematical-statistics`
- **lean_status:** `none` (prose-first).
- **Why genuine:** grep `two.point method|fano.{0,10}(inequality|method)|assouad|minimax lower bound`
  across `content/`: **zero** hits. The only `le cam` matches are in ch04 (`45.04.06–08`) and are
  **contiguity / LAN / convolution-LAM** — the *parametric* asymptotic-efficiency lower bound, a
  different theorem from the nonparametric minimax-rate lower bound. `26.08.01` *asserts* the rate
  is minimax-optimal ("confirming their minimax optimality") but contains no lower-bound derivation;
  `45.07.02` No-Free-Lunch is a $0/1$-loss VC-capacity argument, not a smoothness-class rate bound.
  This is the one piece of nonparametric *theory* (the lower-bound side) genuinely missing.

---

## COVERED (not gaps) — verified against the live post-production corpus

1. **Nonparametric confidence band / DKW** — FULLY COVERED. `45.05.02` Theorem 3 states DKW with
   Massart's sharp constant and the exact-coverage Kolmogorov–Smirnov band
   $F_n(t)\pm\sqrt{(2n)^{-1}\log(2/\alpha)}$, plus the Brownian-bridge asymptotic; `26.08.01` line
   426 also states DKW. Not a gap.
2. **Bootstrap suite (nonparametric/parametric/residual/pairs/wild, percentile/BCa/bootstrap-t,
   consistency, failures + $m$-out-of-$n$/subsampling)** — `26.08.01`; bootstrap consistency theory
   also `45.04.10`.
3. **Jackknife (delete-one, bias/SE, influence)** — `26.08.01`.
4. **Kernel density estimation, bandwidth/MISE/CV/Silverman; local-polynomial regression
   (Nadaraya–Watson, local-linear boundary fix)** — `26.08.01`.
5. **Concentration toolkit: Hoeffding, McDiarmid/bounded-differences, Azuma, Bernstein /
   sub-exponential** — `40.07.05` + `45.05.01` (Bernstein, produced from the pre-production audit).
6. **Empirical-process theory: empirical distribution + Glivenko–Cantelli, Donsker/entropy/VC
   maximal inequalities, U-statistics, functional delta method (Hadamard)** — `45.05.02`, `45.05.03`,
   `45.05.04`, `45.05.05`, `45.05.06`; Donsker functional CLT also `37.03.03`.
7. **Minimax *rates* (the upper-bound statement) $n^{-2s/(2s+1)}$, curse of dimensionality** —
   stated in `26.08.01` (lines 434, 462). The *derivation of the matching lower bound* is gap
   45.05.08; the rate-assertion itself is covered.
8. **PAC/VC/Rademacher statistical-learning theory, No-Free-Lunch lower bound, oracle/sparsity** —
   `45.07.01–07`, `45.06.06`. (No-Free-Lunch ≠ nonparametric minimax lower bound; see 45.05.08.)
9. **Classical inference core of *All of Statistics* (MLE, sufficiency, Fisher info, CRB,
   NP/UMP/LRT/Wald/score, CI duality, Bayes)** — `45.01.*`, `45.02.*`, `45.03.*` (Casella–Berger lane).

## NOTED — defer to sibling auditor (do not produce here)

- **Multiple testing / false discovery rate (Bonferroni, family-wise error, Benjamini–Hochberg
  FDR)** — Wasserman *AoS* Ch. 10. Corpus has only the elementary survey mentions (`26.05.01`,
  `26.09.01`); no rigorous Benjamini–Hochberg / FDR-control theorem unit exists anywhere
  (grep `false discovery|benjamini|hochberg|family.?wise` → survey hits only). **This is a real
  hole**, but per the audit charter it belongs to the **classical-inference (Casella–Berger)**
  lane in ch02 hypothesis-testing, not the nonparametric ch05 lane. Flagging for that auditor to
  own (suggest a free `45.02.05` id) so it is claimed exactly once and not duplicated here.

## OUT OF SCOPE

1. **Causal inference / directed graphical models / DAGs / d-separation / do-calculus** (Wasserman
   *AoS* Ch. 17–18) — a separate apparatus (probabilistic graphical models / causality), outside the
   mathematical-statistics estimation/testing/nonparametric spine; no theorem-level payoff that this
   spine consumes. Belongs to a future PGM/causality spine if pursued, not §45.
2. **Wasserman probability-review chapters** (random variables, CLT, convergence modes, conditional
   expectation, Markov chains) — phenomenological review, owned by `37.*` / `26.02–26.04` /
   `45.04.01`. No unique theorem-level payload.

---

## RETURN SUMMARY
- **Still-absent gaps:** 2 (45.05.07 orthogonal-series/wavelet density estimation + thresholding;
  45.05.08 nonparametric minimax lower bounds — Le Cam/Fano/Assouad)
- **COVERED:** 9 clusters
- **NOTED (defer to Casella–Berger sibling):** 1 (multiple testing / FDR)
- **OUT OF SCOPE:** 2
- **File:** `plans/expansion/mathematical-statistics/_audit/wasserman.completeness.md`
