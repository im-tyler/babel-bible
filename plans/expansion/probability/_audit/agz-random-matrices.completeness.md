# Completeness Re-Audit: Anderson-Guionnet-Zeitouni — *An Introduction to Random Matrices*

`source_book: agz-random-matrices`
`source_curriculum: probability`
`section: probability` · `chapter: 08-random-matrices`

**Context.** The probability spine and the full random-matrices chapter
`content/37-probability/08-random-matrices/` (units `37.08.01`–`37.08.08`) are now
shipped. This re-audit checks AGZ's headline theorems against the *now-larger* corpus.
The first audit (`agz-random-matrices.gaps.md`) flagged 7 gaps `37.08.02`–`37.08.08`;
every one is now a live unit on disk. The task is to find any headline theorem of AGZ
that remains *genuinely* absent and carries real curricular value.

Method: AGZ's chapter-by-chapter headline results were re-listed and each grepped by
filename + body across the live corpus and the shipped `37.08.*` units.

---

## NEW GENUINE GAP

### 37.08.09 — Large deviations of the empirical spectral measure (Ben Arous-Guionnet)

- **id:** `37.08.09`
- **title:** The Ben Arous-Guionnet large deviation principle for the spectral measure of a Gaussian ensemble
- **spec:** The large deviation principle (AGZ §2.6) for the empirical spectral
  distribution $\mu_n=\tfrac1n\sum_i\delta_{\lambda_i}$ of a Gaussian ensemble at
  **speed $n^2$** with good rate function the non-commutative entropy / logarithmic-energy
  functional
  $\Sigma_\beta(\mu)=\tfrac{\beta}{2}\big(\tfrac12\int x^2\,d\mu(x)-\iint\log|x-y|\,d\mu(x)\,d\mu(y)\big)-c_\beta$,
  uniquely minimised (value $0$) by the semicircle law. Derivation from the joint
  eigenvalue density `37.08.03`: the Vandermonde $\prod|\lambda_i-\lambda_j|^\beta$ plus
  the confining quadratic potential give a Gibbs weight $\exp(-\beta n^2 I(\mu_n))$;
  the matching exponential upper and lower bounds (covering of probability space by the
  variational functional, exponential tightness, and the regularisation of the
  logarithmic singularity), the good-rate-function / lower-semicontinuity property, and
  the identification of the unique minimiser with the equilibrium measure of `37.08.03`.
  This is the *theorem* whose minimiser-only consequence (`37.08.03` Proposition: the
  equilibrium measure is the semicircle) and whose *soft* one-sided envelope
  (`37.08.07` concentration, $e^{-cn^2t^2}$) are already in the corpus; the full
  two-sided rate-controlled LDP — the exact exponential cost of an *atypical* limiting
  spectrum — is genuinely absent. It is the random-matrix instance of the abstract LDP
  / Sanov / Varadhan machinery of chapter `37.07.*`, and the analytic root of free
  entropy.
- **prereqs:**
  - `37.08.03` (joint eigenvalue density / log-gas / equilibrium measure — *verified on disk*)
  - `37.08.07` (spectral concentration; the soft side of the same coin — *verified on disk*)
  - `37.07.01` (large deviation principle, good rate functions — *verified on disk*)
  - `37.07.05` (Sanov's theorem, LDP for empirical measures — *verified on disk*)
  - `37.07.07` (Varadhan integral lemma / Laplace principle — *verified on disk*)
- **chapter:** `08-random-matrices`
- **source_book:** `agz-random-matrices`
- **source_curriculum:** `probability`

**Why this is a real gap, not a duplicate.**
- `37.08.03` proves only that the *minimiser* of the logarithmic-energy functional is the
  semicircle (its Proposition), and states the LDP heuristically as
  "$p_{n,\beta}\approx\exp(-\beta n^2 I(\mu))$" — a saddle-point reading, not a theorem
  with upper/lower bounds or a good-rate-function statement.
- `37.08.07` proves *concentration*: a one-sided sub-Gaussian envelope
  $e^{-cn^2t^2}$. Its own bridge text (line 401) draws the exact distinction — "a large
  deviation principle gives the *exact* exponential rate of rare spectral events" — i.e.
  the unit explicitly disclaims the LDP it would need `37.08.09` to supply.
- No unit anywhere proves the LDP: grep for `ben arous`, free/non-commutative entropy,
  and the $\Sigma_\beta$ rate functional returns zero theorem-level hits.

**Why it now clears the deferral bar.** The first audit (line 101) parked the
Ben Arous-Guionnet LDP as "an Advanced-section extension … not a separate unit" *because
the general large-deviations spine did not yet exist*. It now does, in unusual depth:
`37.07.*` ships LDP/good-rate-functions, Cramér, Gärtner-Ellis, **Sanov**, Donsker-Varadhan,
**Varadhan's lemma**, the contraction principle, exponential tightness/Dawson-Gärtner,
Schilder, and Freidlin-Wentzell. With Sanov and Varadhan on disk and the equilibrium
measure already derived in `37.08.03`, the matrix LDP is the natural capstone that *ties
the two chapters together* — a high-value, well-supported unit rather than an orphaned
research aside. It is also the prerequisite any future free-entropy / free-probability
extension of `37.08.08` would build on.

---

## COVERED (re-verified — every prior gap now shipped)

| AGZ headline theorem | Unit |
|---|---|
| Wigner semicircle law, moment / Catalan method | `37.08.01` |
| Stieltjes transform, resolvent / Schur-complement, self-consistent equation | `37.08.02` |
| Gaussian ensembles GOE/GUE/GSE, Weyl-Jacobian joint eigenvalue density, log-gas, equilibrium-measure variational problem | `37.08.03` |
| Determinantal point processes, Christoffel-Darboux / Hermite kernel, sine-kernel bulk universality | `37.08.04` |
| Airy kernel, Tracy-Widom $F_1/F_2/F_4$ edge law, Painlevé II / Fredholm determinant | `37.08.05` |
| Operator norm / largest eigenvalue $\to 2$, high-trace method | `37.08.06` |
| Spectral concentration, Hoffman-Wielandt, log-Sobolev, Herbst, Talagrand/bounded-differences routes | `37.08.07` |
| Free probability: freeness, non-crossing partitions, free cumulants, R-transform, free convolution, asymptotic freeness of GUE | `37.08.08` |

Additional AGZ topics confirmed *woven into* existing units, not standalone gaps:
- **Marchenko-Pastur / Wishart sample-covariance law** — fully derived as a worked
  exercise in `37.08.02` (Schur-complement cavity → $\gamma z s^2+(z+\gamma-1)s+1=0$, MP
  density on $[(1-\sqrt\gamma)^2,(1+\sqrt\gamma)^2]$) and its edge in `37.08.06`. Same
  resolvent architecture as Wigner; not a separate headline theorem at the introductory
  RMT tier.
- **Deformed / band / sparse matrix Dyson equations** — sketched in `37.08.02` as the
  same cavity fixed point; advanced, out of introductory scope.

## OUT OF SCOPE (unchanged — re-confirmed, not re-proposed)

- **Dyson Brownian motion / eigenvalue SDE dynamics** — heavy stochastic-calculus
  apparatus on `02.15.*`; the static-ensemble theory is the introductory priority. Named
  only as a cross-reference in `37.08.01/02/04/05`. Still deferred.
- **Erdős-Schlein-Yau local-law / four-moment universality machinery** (optimal rigidity,
  general-Wigner bulk/edge universality at full generality) — research-monograph apparatus
  beyond AGZ's introductory scope; the GUE-exact determinantal universality of
  `37.08.04`–`37.08.05` is the right tier.
- **General-$\beta$ ensembles** (Dumitriu-Edelman tridiagonal, stochastic Airy operator,
  Selberg/Jack at general $\beta$) — the classical $\beta=1,2,4$ are in `37.08.03`; general
  $\beta$ stays out.
- **C\*- / von-Neumann-algebra formulation of free probability** (free group factors, free
  entropy/free dimension as $W^*$-invariants) — operator-algebra spine. `37.08.08` stays at
  the combinatorial RMT level. *Note:* the proposed `37.08.09` supplies the **probabilistic**
  large-deviation rate function (non-commutative entropy of a measure), which is the
  legitimate probability-level antecedent of free entropy — it does **not** cross into the
  operator-algebra formulation and is therefore in scope.
- **Circular law / Ginibre / non-Hermitian ensembles** — absent from AGZ's main line and
  from this RMT chapter's introductory remit; not proposed.

---

## DRY?

**Not fully DRY — 1 new genuine gap.** All 7 gaps from the first audit are shipped, and
every other AGZ headline theorem is either a live `37.08.*` unit or legitimately
out-of-scope. The single remaining headline result of real curricular value is the
**Ben Arous-Guionnet large deviation principle for the empirical spectral measure**
(`37.08.09`): the corpus has its minimiser (`37.08.03`) and its soft concentration
envelope (`37.08.07`) but not the two-sided rate-controlled theorem, and the
large-deviations chapter `37.07.*` now provides exactly the machinery (Sanov, Varadhan,
good rate functions) that makes it a natural capstone rather than a deferred aside.

- **New genuine gaps: 1** (`37.08.09`)
- **COVERED-verified: 8** shipped units + Marchenko-Pastur folded into `37.08.02/06`
- **OUT OF SCOPE: 5** (DBM, ESY universality, general-$\beta$, C\*/vNa free probability, circular law)

---

## Round 2

**Verdict: DRY.** Round-1's flagged gap is now closed on disk and no new headline gap remains.

**Round-1 fix verified on disk.** `find content/37-probability/08-random-matrices`
returns `37.08.01`–`37.08.09`. The new unit
`37.08.09-ben-arous-guionnet-ldp-empirical-spectral-measure.md` is a full 579-line,
three-tier unit (beginner/intermediate/master, `pending_prereqs: false`) that states
AGZ Theorem 2.6.1 correctly: the LDP for $L_n=\tfrac1n\sum_i\delta_{\lambda_i}$ at
**speed $a_n=1/n^2$** with **good rate function** $I_\beta$ the normalised
logarithmic-energy / non-commutative-entropy functional, unique minimiser the
semicircle ($I_\beta=0 \iff \mu=\sigma$), with the $n^2$-vs-$n$ (Sanov) speed
distinction and the Coulomb-gas derivation present. Prereqs `37.08.03`, `37.08.07`,
`37.07.01`, `37.07.05` all on disk. The Round-1 gap is genuinely resolved.

**Re-swept the residual AGZ headline list — all accounted for.**

| AGZ headline result | Status |
|---|---|
| Wigner semicircle / Stieltjes / Gaussian ensembles / DPP-sine / Airy-Tracy-Widom / norm-edge / concentration / free probability | COVERED `37.08.01`–`37.08.08` |
| Ben Arous-Guionnet speed-$n^2$ LDP for the spectral measure | COVERED `37.08.09` (Round-1 add, verified) |
| Marchenko-Pastur / Wishart, Hoffman-Wielandt | COVERED — folded into `37.08.02`/`37.08.06`/`37.08.07` (grep-confirmed, not a standalone headline at intro tier) |

**Deferred items re-confirmed out of scope — NOT re-proposed.** Grep shows Dyson
Brownian motion appears only as cross-references in `37.08.01/02/04/08` (no theorem-level
treatment), as intended. ESY local-law / four-moment universality, general-$\beta$
ensembles (Dumitriu-Edelman / stochastic Airy), C\*/von-Neumann free-probability, and
the circular/Ginibre law remain correctly outside this introductory probability spine.

**One adjacent item checked and correctly NOT a gap.** The Johansson **CLT for linear
eigenvalue statistics** (the $O(1)$, no-$\sqrt n$ fluctuation theorem) surfaces only as a
mentioned consequence inside `37.08.09`'s master tier (lines 460, 468) — the subleading
term beyond the LDP's leading order. It belongs to the same advanced fluctuation
apparatus as ESY universality, is not an AGZ introductory-tier headline theorem, and is
appropriately referenced rather than formalised. No new unit warranted.

- **New genuine gaps (Round 2): 0**
- **Round-1 add verified shipped: 1** (`37.08.09`)
- **Verdict: DRY**
