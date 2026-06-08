# Completeness re-audit — Casella & Berger (post-production)

Spine: mathematical-statistics (§45). Book: Casella & Berger, *Statistical Inference*, 2e
(Duxbury, 2002), plus the classical-inference core (Lehmann & Casella *TPE*; Lehmann &
Romano *TSH* for cross-checking what is genuinely C&B-headline vs. adjacent).

Method: built the C&B headline-theorem list for estimation / testing / interval estimation /
decision theory, then grepped filenames + bodies across the whole `content/` corpus (not just
§45) for each. Default = COVERED. §45 is now 57 shipped units across 8 chapters; an elementary
survey lives at §26.

**Result: 1 genuinely-still-absent gap.** (The candidate residual list in the audit prompt is
otherwise fully covered or out of scope for *this* book — see trailers.)

---

## GENUINE GAPS (1)

### Equivariance / invariance and the Pitman best-equivariant estimator

- `id`: **45.01.07** (free; ch01 occupies 45.01.01–06)
- `title`: "Equivariance, Group-Invariant Decision Problems, and the Pitman Estimator"
- `spec`: The invariance/equivariance *principle* as a decision-theoretic reduction (not just the
  MLE's functional invariance): a group $G$ acting on the sample space induces actions on the
  parameter and action spaces; for an invariant loss the risk of an equivariant rule is constant
  on orbits, so the problem reduces to the maximal invariant. Derive the **best location-equivariant
  (Pitman) estimator** $\hat\theta_P(x)=x_1-\dfrac{\int t\,\prod f(x_i-t)\,dt}{\int \prod f(x_i-t)\,dt}$
  as the minimum-risk equivariant estimator under squared-error / any convex invariant loss
  (it is $E[\theta\mid \text{differences}]$ under the right-invariant prior), and the analogous
  **best scale-equivariant (Pitman) estimator**. State the Hunt–Stein connection between best
  invariant and minimax rules. Worked normal/uniform/exponential location examples; contrast with
  the MLE's reparametrization invariance already in 45.01.04.
- `prereqs`: `45.01.01` (loss / risk / minimax / least-favorable-prior decision theory),
  `45.01.04` (MLE and its functional invariance — the equivariance this unit generalizes),
  `45.01.06` (Rao–Blackwell / Lehmann–Scheffé optimal-estimator framing), `37.03.01` (the
  group-action / measure machinery — verify exact id if used).
- `chapter`: dir `01-decision-theory-estimation`; frontmatter `section: mathematical-statistics`,
  `chapter: 01-decision-theory-estimation`.
- `source_book`: casella-berger
- `source_curriculum`: mathematical-statistics

  **Evidence it is absent:** corpus-wide `grep -rliE "pitman estimator|best equivariant"
  content/` → **0 hits**. `equivarian|invarian` in §45 appears only as the MLE's *functional*
  invariance (45.01.04 Thm 1: reparametrization + data-transformation invariance of the
  argmax) and as a remark that the MAP/posterior mean are not equivariant (45.03.01). No unit
  anywhere develops invariant decision problems, the maximal-invariant reduction, or the
  Pitman minimum-risk-equivariant estimator. This is a genuine C&B headline topic
  (C&B 2e §7.3.4 "The Equivariance Principle" + the Pitman estimator; Lehmann & Casella
  *TPE* Ch. 3 is the deep treatment).

---

## COVERED (not gaps) — due-diligence evidence

- **Minimax estimation theory in depth / least-favorable priors** — COVERED, **45.01.01**.
  Body proves the minimax–Bayes saddle (von Neumann game value), the least-favorable-prior
  characterization, **least-favorable *sequences*** (normal-mean $\bar X$ minimax via
  $N(0,\tau^2),\ \tau\to\infty$), the equalizer-rule production recipe ("constant-risk + Bayes
  ⇒ minimax"), weak duality $r(\pi)\le\bar V$, and the convex-risk-set / separating-hyperplane
  geometry. Goes well beyond a passing mention. Not a gap.

- **Equivariance of the MLE (functional invariance)** — COVERED, **45.01.04** (Thm 1: full
  equivariance under reparametrization and data transformation; Prop 1 invariance of the MLE).
  This is *distinct* from the Pitman best-equivariant-estimator gap above, which is the
  decision-theoretic invariance principle, not the MLE's argmax invariance.

- **Permutation / randomization tests + rank tests (Wilcoxon signed-rank, Mann–Whitney/rank-sum,
  sign test, Kruskal–Wallis)** — COVERED at survey level, **26.08.01** (definitions, exact
  null = uniform over $n!$ permutations with proof, permutation p-values, Pitman ARE $3/\pi$,
  Hodges–Lehmann), with permutation testing also in **26.05.01** and randomization tests noted
  in **26.09.01**. See OUT OF SCOPE re: a *rigorous §45* unit — these are Lehmann–Romano
  (*TSH*) headline topics, not Casella & Berger (C&B 2e has no rank/permutation-test chapter),
  so they are not a C&B gap.

- **Multiple testing — FWER / Bonferroni / Benjamini–Hochberg FDR** — COVERED at survey level,
  **26.05.01** (FWER, union-bound Bonferroni proof, the BH procedure $p_{(i)}\le iq/m$,
  Benjamini–Yekutieli for dependence) and **26.09.01** (Tukey HSD, Dunnett, Scheffé,
  Bonferroni post-hoc). See OUT OF SCOPE — absent from Casella & Berger entirely; not a C&B gap.

- **Sequential analysis / SPRT** — COVERED at survey level, **26.05.01** §"Sequential testing
  and the SPRT" (Wald's SPRT, the $A/B$ boundaries, the expected-sample-size optimality). See
  OUT OF SCOPE — Wald (1947), not a Casella & Berger chapter; not a C&B gap.

- **Bootstrap for testing / resampling** — COVERED. Rigorous bootstrap consistency at
  **45.04.10**; bootstrap-vs-permutation testing and the bootstrap test construction at
  **26.08.01**. Not a gap.

- **Sufficiency / factorization / minimal & complete sufficiency / Basu** — COVERED,
  **45.01.02**, **45.01.03**. **Rao–Blackwell / Lehmann–Scheffé (UMVUE)** — **45.01.06**.
  **Fisher information / Cramér–Rao** — **45.01.05**. **MoM / MLE** — **45.01.04**.
- **Neyman–Pearson / MP** — **45.02.01**; **MLR / UMP** — **45.02.02**; **LRT / Wald / score** —
  **45.02.03** (+ asymptotics **45.04.09**); **confidence sets via test inversion / pivots /
  duality** — **45.02.04**. All C&B Ch. 8–9 headline results present.
- **Bayes estimation / conjugate priors / hierarchical–empirical Bayes / MCMC** —
  **45.03.01–05**; **James–Stein inadmissibility** — **45.06.04**. Covered.

---

## OUT OF SCOPE (for *this* book)

- **Rigorous §45 rank/permutation-test unit, a §45 multiple-testing (FDR) unit, and a §45
  SPRT/sequential unit.** Each is a real graduate topic and each currently lives only at the
  §26 survey tier, so a future §45 unit would add value — but **none is a Casella & Berger
  headline topic** (C&B 2e is parametric finite-sample + asymptotic inference and has no
  chapters on rank tests, multiple testing/FDR, or sequential analysis). They belong to
  Lehmann & Romano *TSH*, Benjamini–Hochberg (1995), and Wald (1947) respectively. Flagging
  them here as covered-at-survey so the C&B audit does not manufacture them; they are the
  proper province of the Lehmann–Romano / Wasserman / van der Vaart audits, not this one.
