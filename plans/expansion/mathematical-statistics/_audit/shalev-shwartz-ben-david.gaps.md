# Audit — Statistical Learning Theory (VC / Rademacher / PAC)

**Books audited:**
- Shalev-Shwartz & Ben-David — *Understanding Machine Learning* (Cambridge 2014) [primary]
- Vapnik — *The Nature of Statistical Learning Theory* (2nd ed., Springer 2000)
- Mohri, Rostamizadeh & Talwalkar — *Foundations of Machine Learning* (2nd ed., MIT 2018)

**source_book slug:** `shalev-shwartz-ben-david`
**source_curriculum:** `mathematical-statistics`
**Target chapter:** `content/45-mathematical-statistics/07-statistical-learning-theory/` (prefix 45.07) — fresh empty skeleton, all ids free.

**Ownership boundary.** This auditor owns the rigorous *generalization theory* (PAC, VC, Rademacher, margin, stability, online/Littlestone). HTF / Casella-Berger / van der Vaart run in parallel and own methods (ch06/08), classical inference (ch01-04), and asymptotics / classical empirical processes (Glivenko-Cantelli, Donsker, ch05). The combinatorial *concentration engine* (Azuma/McDiarmid/Hoeffding) already exists in combinatorics §40.07 and large deviations §37.07 — it is REUSED as a prereq below, never duplicated. Per the brief's coordination note, the standalone concentration unit is left to the Wasserman/probability owners; these units CITE it.

---

## GENUINE GAPS

### Gap 1 — PAC learnability and the finite-hypothesis-class sample-complexity bound
- **id:** `45.07.01`
- **title:** PAC and Agnostic PAC Learning: ERM, the Realizable/Agnostic Settings, and the Finite-Class Sample Complexity
- **spec:** Formal supervised-learning setup (instance/label spaces, distribution $\mathcal D$, hypothesis class $\mathcal H$, 0-1 loss, true risk $L_{\mathcal D}$ vs empirical risk $L_S$); ERM and overfitting; the realizable and agnostic PAC definitions; the finite-class sample-complexity bounds — $m \ge \lceil \log(|\mathcal H|/\delta)/\epsilon\rceil$ (realizable) and $m \ge 2\log(2|\mathcal H|/\delta)/\epsilon^2$ (agnostic, via uniform convergence + Hoeffding).
- **prereqs:** `37.02.02` (SLLN / i.i.d. averages), `40.07.05` (Azuma/McDiarmid — supplies the Hoeffding tail bound), `26.05.01` (hypothesis testing / confidence intuition)
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `shalev-shwartz-ben-david`; **source_curriculum:** `mathematical-statistics`

### Gap 2 — Uniform convergence, the bias-complexity tradeoff, and the No-Free-Lunch theorem
- **id:** `45.07.02`
- **title:** Uniform Convergence, the Approximation-Estimation Tradeoff, and the No-Free-Lunch Theorem
- **spec:** The uniform-convergence property and why it is sufficient for agnostic PAC learnability; the error decomposition $L_{\mathcal D}(\mathrm{ERM}) = \epsilon_{\mathrm{app}} + \epsilon_{\mathrm{est}}$ (approximation vs estimation / bias-complexity); the No-Free-Lunch theorem (no universal learner; every learner fails on some distribution) and its consequence that nontrivial learning requires restricting $\mathcal H$ / prior assumptions.
- **prereqs:** `45.07.01`, `37.02.02`
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `shalev-shwartz-ben-david`; **source_curriculum:** `mathematical-statistics`

### Gap 3 — VC dimension, shattering, the growth function, and the Sauer-Shelah lemma
- **id:** `45.07.03`
- **title:** VC Dimension, the Growth Function, and the Sauer-Shelah Lemma
- **spec:** Shattering and the VC dimension of a hypothesis/set class; the growth function (shatter function) $\tau_{\mathcal H}(m)$; the Sauer-Shelah lemma $\tau_{\mathcal H}(m) \le \sum_{i=0}^{d}\binom{m}{i} \le (em/d)^d$ — the polynomial-vs-exponential dichotomy; worked VC dimensions (intervals, halfspaces, axis-aligned rectangles). NOTE: Sauer-Shelah is genuinely absent from combinatorics §40.05 (extremal) — verified; this unit is its canonical home, framed for its learning-theoretic consequence (it feeds Gap 4).
- **prereqs:** `40.07.01` (probabilistic method / counting), `45.07.02`
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `shalev-shwartz-ben-david`; **source_curriculum:** `mathematical-statistics`

### Gap 4 — The Fundamental Theorem of Statistical Learning
- **id:** `45.07.04`
- **title:** The Fundamental Theorem of Statistical Learning: VC Dimension Characterizes PAC Learnability
- **spec:** The equivalence chain — for a class with the uniform-convergence property, agnostic PAC learnable $\iff$ uniformly convergent $\iff$ ERM is a successful learner $\iff$ $\mathrm{VCdim}(\mathcal H) < \infty$ — together with the quantitative sample-complexity characterization $m(\epsilon,\delta) = \Theta\big((d + \log(1/\delta))/\epsilon^2\big)$ (agnostic) and $\Theta\big((d\log(1/\epsilon) + \log(1/\delta))/\epsilon\big)$ (realizable). VC-bound proof sketch via symmetrization + the growth function (Sauer-Shelah) + a concentration/double-sample argument; the matching lower bound from No-Free-Lunch.
- **prereqs:** `45.07.03`, `45.07.02`, `40.07.05` (concentration)
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `shalev-shwartz-ben-david`; **source_curriculum:** `mathematical-statistics`

### Gap 5 — Rademacher complexity and its generalization bounds (with the contraction lemma)
- **id:** `45.07.05`
- **title:** Rademacher Complexity: Generalization Bounds, the Contraction Lemma, and Massart's Finite-Class Bound
- **spec:** Empirical and average Rademacher complexity $\mathfrak R_m(\mathcal F)$; the symmetrization-based generalization bound $\mathbb E\sup_{f}\big(\mathbb E f - \tfrac1m\sum f\big) \le 2\,\mathfrak R_m(\mathcal F)$ and the high-probability version via McDiarmid; Talagrand's contraction (composition) lemma for Lipschitz losses; Massart's lemma giving $\mathfrak R_m \le \sqrt{2\log|\mathcal F|/m}$ for finite classes; the link $\mathfrak R_m(\mathcal H) \lesssim \sqrt{\mathrm{VCdim}/m}$ (data-dependent refinement of the VC bound).
- **prereqs:** `45.07.04`, `40.07.05` (McDiarmid bounded differences), `44.02.01` (convex/Lipschitz background for contraction)
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `mohri-rostamizadeh-talwalkar`; **source_curriculum:** `mathematical-statistics`

### Gap 6 — Margin theory: bounds behind SVM and boosting generalization (covering numbers + Dudley chaining, brief)
- **id:** `45.07.06`
- **title:** Margin-Based Generalization Bounds: Covering Numbers, Dudley's Chaining, and the SVM/Boosting Margin Theory
- **spec:** The margin / confidence-margin loss and the margin-based Rademacher bound (generalization scales with $1/(\rho\sqrt m)$, dimension-free in the SVM kernel setting); covering numbers and metric entropy; Dudley's chaining (entropy-integral) bound $\mathfrak R_m(\mathcal F) \lesssim \tfrac1{\sqrt m}\int_0^\infty\sqrt{\log N(\epsilon,\mathcal F,L_2)}\,d\epsilon$ — stated, briefly motivated; application to the margin theory of boosting (large-margin explanation of AdaBoost's resistance to overfitting). Covering numbers/chaining are kept BRIEF per brief, as the apparatus feeding the margin bound.
- **prereqs:** `45.07.05`, `44.02.01` (Lagrangian duality — SVM dual), `44.02.02` (KKT)
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `mohri-rostamizadeh-talwalkar`; **source_curriculum:** `mathematical-statistics`

### Gap 7 — Stability-based generalization and online learning / Littlestone dimension (brief)
- **id:** `45.07.07`
- **title:** Stability and Online Learning: Uniform Stability, Regret, the Perceptron Mistake Bound, and the Littlestone Dimension
- **spec:** Two "brief" generalization viewpoints bundled into one unit. (a) Uniform algorithmic stability: $\beta$-uniform stability implies a generalization bound $|\mathbb E[L_{\mathcal D}-L_S]|\le\beta$, with regularized ERM (ridge / SVM) as the canonical $O(1/(\lambda m))$-stable example. (b) Online learning: the mistake-bound model, the Perceptron convergence/mistake bound $\le (R/\gamma)^2$, regret and the realizable Littlestone dimension as the combinatorial parameter characterizing online learnability ($\mathrm{Ldim}$ finite $\iff$ online learnable; $\mathrm{VCdim}\le\mathrm{Ldim}$). The regret-minimization *machinery* (mirror descent / multiplicative weights, online-to-batch) is owned by `44.06.05` and is CROSS-REFERENCED, not re-derived; this unit supplies the learning-theoretic statements (Littlestone dimension, mistake bounds, stability).
- **prereqs:** `45.07.05`, `44.06.05` (online convex optimization / regret / online-to-batch), `44.06.01` (subgradient methods)
- **chapter dir:** `45-mathematical-statistics/07-statistical-learning-theory`; frontmatter `section: 45`, `chapter: 07`
- **source_book:** `shalev-shwartz-ben-david`; **source_curriculum:** `mathematical-statistics`

---

## COVERED (not gaps)

- **Concentration / bounded-differences engine (Hoeffding, Azuma, McDiarmid, Talagrand convex-distance)** — COVERED by `40.07.05-concentration-azuma-bounded-differences` (states Azuma-Hoeffding, the bounded-differences/McDiarmid inequality for functions of independent inputs, and Talagrand's convex-distance inequality; cites Hoeffding 1963). REUSED as a prereq in Gaps 1, 4, 5; NOT duplicated. Left to the probability/Wasserman owners for any standalone deepening.
- **Cramér's theorem / Legendre-Fenchel exponential-tail rate (the moment-generating-function method behind Hoeffding-type bounds)** — COVERED by `37.07.02-cramer-theorem-legendre-fenchel-rate` (and the surrounding §37.07 large-deviations chapter). Provides the exponential-tilting background; not re-derived.
- **Strong law of large numbers / i.i.d. empirical averages** — COVERED by `37.02.02-strong-law-of-large-numbers`. Used as a prereq.
- **Glivenko-Cantelli theorem / Donsker / classical empirical-process weak convergence** — OWNED by the empirical-processes auditor (van der Vaart) in `content/45-mathematical-statistics/05-empirical-processes-nonparametric/` (currently skeleton). My VC/Rademacher units give the combinatorial/uniform-convergence form; the classical functional-CLT form is theirs. Boundary noted; no duplication.
- **Convex/Lagrangian duality, KKT, Fenchel conjugate (the SVM optimization backbone)** — COVERED by `44.02.01-lagrangian-duality-slater`, `44.02.02-kkt-conditions-constraint-qualifications`, `44.02.03-fenchel-duality-conjugate-modeling`. Cited as prereqs for the margin/SVM unit; SVM *optimization* is not re-derived.
- **Online convex optimization regret, mirror descent, multiplicative weights / Hedge, online-to-batch conversion** — COVERED by `44.06.05-stochastic-gradient-mirror-descent` (Theorem 4 regret bound, Hedge on the simplex, online-to-batch). Gap 7 cites it and adds only the *learning-theoretic* layer (Littlestone dimension, perceptron mistake bound, stability), avoiding overlap.
- **Subgradient methods (SGD foundations)** — COVERED by `44.06.01-subgradient-methods`. Prereq for Gap 7.
- **Bias-variance tradeoff (statistical-estimation framing)** — touched in `26.06.01-correlation-regression-analysis` and the survey `25.09.01`; the learning-theoretic approximation-estimation decomposition (Gap 2) is the rigorous generalization-theory version and is genuinely new.
- **High-level VC-bound statement / ML survey** — `25.09.01-artificial-intelligence-machine-learning` *states* the VC generalization inequality and universal-approximation theorem at survey altitude but proves nothing (no Sauer-Shelah, no PAC definitions, no Rademacher, no fundamental theorem). Per brief guidance, a one-line survey mention does NOT cover the rigorous theory; the §45.07 chapter is the genuine home. Not treated as covering Gaps 1-7.

## OUT OF SCOPE

- **Specific algorithm catalog (random forests, gradient boosting/XGBoost, decision-tree induction, neural-net training tricks, kernels-as-engineering)** — methods/applications, owned by the HTF (ch06/08 learning-methods) auditor, not the generalization theory. Survey coverage exists in `25.09.01`.
- **Deep-learning theory (NTK, implicit regularization, double descent), PAC-Bayes, compression bounds, local Rademacher complexity, fast rates / Bernstein-condition refinements** — research-frontier extensions beyond the three audited books' core; defer unless a later frontier pass requests them. (Bernstein's inequality itself lives with the probability/concentration owners.)
- **Vapnik's structural risk minimization as a model-selection *procedure* and the full VC-entropy/annealed-entropy hierarchy** — SRM as a practical model-selection recipe is methods-side; the VC-dimension characterization (Gap 4) captures the theorem-level payoff. The finer entropy hierarchy is diminishing-returns apparatus, not a theorem-level gap.
