# Completeness Re-Audit: Williams — *Probability with Martingales*

Re-audited 2026-06-05 against the **now-larger** corpus, after the probability
spine `content/37-probability/` was fully produced — in particular the complete
discrete-time martingale chapter `37.04.*`:

- `37.04.01` — discrete martingales, stopping times, optional stopping, Wald's identity, gambler's ruin, Doob decomposition
- `37.04.02` — Doob upcrossing inequality, a.s. martingale convergence, UI/`L^1` dichotomy, Lévy upward theorem + Lévy 0-1 law (stated)
- `37.04.03` — Doob maximal + `L^p` inequalities, uniform integrability (Vitali/Dunford-Pettis), `L^p` convergence, reversed/backward martingale convergence, martingale-SLLN, Hewitt-Savage + Kolmogorov 0-1 laws

plus measure foundations `02.07.*`, characteristic-function/CLT machinery
`37.03.01-02`, and Borel-Cantelli/SLLN `37.02.*`.

The prior `williams-martingales.gaps.md` flagged exactly the 3 spine units
`37.04.01-03`; all three are now shipped. This pass re-checks every Williams
headline theorem (Chs 10-18) against the enlarged corpus to find any
*still genuinely absent* headline result of real value.

---

## HEADLINE THEOREM CHECK (Williams Chs 10-18)

| Williams result | Status | Location |
|---|---|---|
| Conditional expectation: existence/uniqueness, tower, Jensen, `L^2`-projection (Ch. 9) | COVERED | `02.07.08` (Thm 8, Prop 9) |
| Martingales, sub/supermartingales, predictable transform "you can't beat the system" (Ch. 10) | COVERED | `37.04.01` |
| Stopping times, stopped process, optional-stopping theorem (Ch. 10) | COVERED | `37.04.01` |
| Doob decomposition (Ch. 12) | COVERED | `37.04.01` |
| Gambler's ruin / Wald's identity (Ch. 10) | COVERED | `37.04.01` |
| Doob upcrossing lemma + a.s. convergence theorem (Ch. 11) | COVERED | `37.04.02` |
| `L^1`/a.s. convergence gap; closure `M_n = E[M_∞|F_n]` (Ch. 11, 14) | COVERED | `37.04.02` |
| Uniform integrability; Vitali / `L^1`-convergence characterization (Ch. 13) | COVERED | `37.04.03`, `37.04.02` |
| Doob's submartingale maximal inequality; `L^p` maximal inequality `p/(p-1)` (Ch. 14) | COVERED | `37.04.03` |
| `L^p`-bounded martingale convergence in `L^p` (Ch. 14) | COVERED | `37.04.03` |
| Lévy's upward theorem; Lévy's 0-1 law (Ch. 14) | COVERED | `37.04.02` (stated), `37.04.03` |
| Reversed/backward martingale convergence (Ch. 14) | COVERED | `37.04.03` (Proposition + proof) |
| Kolmogorov SLLN via backward martingale; Hewitt-Savage + Kolmogorov 0-1 laws (Ch. 14) | COVERED | `37.04.03` |
| Borel-Cantelli I/II; Kolmogorov 0-1 law (classical, Ch. 2, 4) | COVERED | `37.02.01`, `26.02.01` |
| Kolmogorov three-series theorem / SLLN (Ch. 12-14, classical route) | COVERED | `37.02.01` (three-series), `37.02.02` (SLLN) |
| Caratheodory extension, π-systems / monotone class, product measures, Fubini, Radon-Nikodym (Chs 1-8) | COVERED | `02.07.01-08` |
| Characteristic functions, Lévy inversion + continuity, Bochner (Ch. 16) | COVERED | `37.03.01` |
| Central Limit Theorem via characteristic functions (Ch. 18) | COVERED | `37.03.02` (Lindeberg-Feller) |
| **Kakutani's theorem on product martingales + abs-continuity/singularity dichotomy for product measures (Ch. 14, §14.12-14.17)** | **GAP** | only the degenerate coin-flip instance, as an exercise in `37.04.02` / `37.04.03` |

Every Williams headline theorem is COVERED in the enlarged corpus **except one**:
the Kakutani product-martingale dichotomy and its signature application.

---

## NEW GENUINE GAP

### 37.04.04 — Kakutani's product-martingale dichotomy and absolute continuity of product measures

- **id:** `37.04.04` (next free slot; `37.04.01-03` shipped)
- **title:** Kakutani's Theorem on Product Martingales and the Dichotomy for Product Measures
- **spec:** For independent non-negative integrable factors `(X_k)` with `E[X_k]=1`,
  the product `M_n = ∏_{k≤n} X_k` is a non-negative martingale, hence `M_n → M_∞`
  a.s. **Kakutani's theorem:** writing `a_k = E[√X_k] ∈ (0,1]`, the dichotomy is
  exact —
  (i) if `∏_k a_k > 0`, then `(M_n)` is uniformly integrable, `M_n → M_∞` in `L^1`,
  `E[M_∞]=1`, and `M_∞ > 0` a.s.;
  (ii) if `∏_k a_k = 0` (equivalently `∑_k (1-a_k) = ∞`), then `M_∞ = 0` a.s. and
  `(M_n)` is **not** uniformly integrable.
  Proof: `√M_n / ∏_{k≤n} a_k` is a non-negative martingale; in case (i) it is
  `L^2`-bounded (so `(M_n)` is `L^1`-bounded after squaring and UI), in case (ii)
  the normalizer blows up forcing `M_∞ = 0`.
  **Signature application (Williams §14.13-14.17):** let `P = ∏_k μ_k`, `Q = ∏_k ν_k`
  be product measures on a countable product with `ν_k ≪ μ_k`, `X_k = dν_k/dμ_k`.
  Then `M_n` is the finite-horizon likelihood ratio `dQ/dP|_{F_n}`, and Kakutani's
  dichotomy gives the **Kakutani dichotomy for infinite product measures**: `Q ≪ P`
  (with `dQ/dP = M_∞`) iff `∏_k ∫ √(dν_k/dμ_k)\,dμ_k > 0`, i.e. iff the Hellinger
  integrals do not collapse; otherwise `Q ⊥ P` (mutually singular). This realizes
  the Radon-Nikodym/Lebesgue-decomposition theory of `02.07.08` as the limit of a
  martingale density process, and is Williams' headline payoff of the UI theory —
  there is **no all-or-nothing middle ground** for product measures.
- **prereqs (verified on disk):**
  - `37.04.03` — UI, Doob `L^p`/maximal inequalities, `L^1`/`L^p` convergence (the `L^2`-bounded → UI step)  ✓ on disk
  - `37.04.02` — a.s. martingale convergence, the UI ⇔ `L^1`-closure dichotomy  ✓ on disk
  - `37.04.01` — non-negative martingales, the product-martingale construction  ✓ on disk
  - `02.07.08` — Radon-Nikodym derivative `dν_k/dμ_k`, Lebesgue decomposition (abs-cont vs singular)  ✓ on disk
  - `02.07.07` — product measures / independence as product law (the infinite product `∏_k μ_k`)  ✓ on disk
- **chapter dir:** `content/37-probability/04-conditional-expectation-martingales/`  (exists; `.04` slot free)
- **frontmatter:** `section: probability` · `chapter: 04-conditional-expectation-martingales` · `source_book: williams-martingales` · `source_curriculum: probability`

**Why this is a genuine, Williams-distinctive gap (not a near-miss).**
The corpus currently contains only the *degenerate* instance of the product
martingale — the fair coin-flip `∏ ξ_k`, `ξ_k ∈ {0,2}` — and only as an exercise /
counterexample witnessing "a.s. convergence is strictly weaker than `L^1`
convergence" (`37.04.02` Ex. 7 / Synthesis; `37.04.03` Ex. on non-UI martingales).
That example is the `∑(1-a_k)=∞` half of case (ii) with `a_k = E[√ξ_k] = 1/√2`.
**Absent everywhere:** (a) the named Kakutani theorem and the *positive* case (i)
with the `∏ E[√X_k] > 0` criterion; (b) the Hellinger-integral threshold; (c) the
abs-continuity-vs-singularity dichotomy for infinite product measures — Williams'
actual headline result of Ch. 14 and his bridge from UI martingale theory back to
the Radon-Nikodym/Lebesgue-decomposition theory. This is a load-bearing theorem
downstream (statistical contiguity / LeCam, filtering, Girsanov's discrete shadow)
and is not subsumed by any shipped `37.*` unit.

---

## DRY?

**Not fully DRY — 1 new genuine gap (`37.04.04`, Kakutani's product-martingale
dichotomy and absolute continuity of product measures).** Every other Williams
headline theorem (Chs 10-18) is now COVERED by the enlarged corpus
(`37.04.01-03`, `37.03.01-02`, `37.02.*`, `02.07.*`). The single remaining gap is
Williams-distinctive: the corpus has only the degenerate coin-flip instance of the
product martingale, never the dichotomy theorem, the `∏ E[√X_k] > 0` / Hellinger
criterion, or the abs-continuity-vs-singularity dichotomy for product measures.
