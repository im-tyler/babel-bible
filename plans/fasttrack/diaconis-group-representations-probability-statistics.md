# Diaconis — *Group Representations in Probability and Statistics* (Fast Track 3.16) — Audit + Gap Plan

**Book:** Persi Diaconis, *Group Representations in Probability and
Statistics*, IMS Lecture Notes-Monograph Series Vol. 11, Institute of
Mathematical Statistics, Hayward, CA, 1988. viii + 198 pp. ISBN
0-940600-14-5. DOI 10.1214/lnms/1215467407. Freely hosted by Project
Euclid (Open Access on a per-chapter basis):
<https://projecteuclid.org/ebooks/institute-of-mathematical-statistics-lecture-notes-monograph-series/Group-Representations-in-Probability-and-Statistics/toc/10.1214/lnms/1215467407>.

**Fast Track entry:** 3.16, listed in
`docs/catalogs/FASTTRACK_BOOKLIST.md` row 103 as
"Probability and Representation Theory" — Diaconis's canonical short
text. Sometimes referred to as "Group-representational methods in
probability and statistics."

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol) producing a concrete punch-list
of new units required to bring Codex coverage of Diaconis to the
equivalence threshold (≥95% per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). This pass works from
Diaconis's nine-chapter TOC, the standard probabilistic-representation
literature, and the current state of `content/07-representation-theory/`
(29 units, foundations + character theory + highest-weight + symmetric
group + Lie-algebraic + compact-Lie) and `content/08-stat-mech/`
(Markov-chain adjacent: critical, RG, mean-field, Onsager, partition,
path-integral, wick, Gaussian, lattice-gauge). It is **not** a full
line-by-line P1 inventory.

---

## §1 What Diaconis 1988 is for

Diaconis 1988 is the canonical short monograph fusing the **representation
theory of finite groups** with **probability and statistics**. Its claim
to fame is the systematic use of non-abelian Fourier analysis on a finite
group $G$ — i.e. the Plancherel decomposition
$L^2(G) \cong \bigoplus_\rho V_\rho \otimes V_\rho^*$ — to bound
convergence rates of *random walks on groups*. Where classical Markov
chain analysis works state-by-state, Diaconis works irrep-by-irrep:
$\|P^{*k} - U\|_{TV}^2 \leq \frac{1}{4}\sum_{\rho \neq \mathbf{1}} d_\rho
\operatorname{tr}(\hat{P}(\rho)^* \hat{P}(\rho))^k$ (the Upper Bound
Lemma, Diaconis-Shahshahani 1981 *Z. Wahrsch. verw. Gebiete* 57). This
turns mixing-time questions into eigenvalue questions for matrices
indexed by irreps.

Distinctive contributions, roughly in TOC order:

1. **Non-abelian Fourier analysis** on a finite group $G$: Fourier
   transform $\hat{f}(\rho) = \sum_g f(g) \rho(g)$, Plancherel, inversion,
   convolution-becomes-product (ch. 2). The whole edifice rests on this
   being usable as concretely as $\mathbb{Z}/n$-Fourier.

2. **The Upper Bound Lemma** for random walks on a finite group via
   characters (ch. 3). Diaconis-Shahshahani 1981 originating paper.
   Reduces total-variation distance to traces of $\hat{P}(\rho)^k$.

3. **Worked random walks**: random transpositions on $S_n$ (mixes in
   $\frac{1}{2}n \log n$ steps; Diaconis-Shahshahani 1981 originated the
   $n \log n$ cutoff result); top-in / random-to-top; nearest-neighbour
   transpositions; random walks on $\mathbb{Z}/2^n$; etc. (ch. 3, 4, 7).

4. **The cutoff phenomenon** — total-variation distance stays near 1,
   then drops abruptly to 0 in a window of lower order than the mixing
   time itself. Aldous-Diaconis 1986 *Amer. Math. Monthly* 93 originated
   the phrase; the riffle-shuffle cutoff at $\frac{3}{2}\log_2 n$ steps
   (Bayer-Diaconis 1992 *Annals of Applied Probability* 2, "Trailing the
   dovetail shuffle to its lair") is the canonical numerical answer ("7
   shuffles suffice" for a 52-card deck).

5. **Probabilistic / non-Fourier techniques** that complement the Fourier
   bound: strong stationary times, couplings, comparison of Dirichlet
   forms (ch. 4). These give matching lower bounds and handle cases
   where the irrep structure is intractable.

6. **Statistical applications on permutation data**: ranked / partially
   ranked data living on $S_n$ or homogeneous spaces $S_n / S_{n-k}$,
   spectral / ANOVA decomposition of permutation-valued data via
   irrep projections, models for partially ranked data (ch. 5, 6, 8, 9).
   This is Diaconis's other major contribution and is *not* part of the
   later "mixing-times" canon.

7. **Metrics on $S_n$** (Kendall's $\tau$, Spearman, Hamming, Cayley):
   their invariance properties and statistical interpretation via the
   permutation representation (ch. 6).

8. **Representation theory of $S_n$** specialised for statistics:
   Young's rule, Specht modules, the Murnaghan-Nakayama rule for
   evaluating $\chi^\lambda$ at cycle types — written for the
   statistician who needs character values for the Upper Bound Lemma,
   not for the algebraist (ch. 7).

The text is **short and self-contained** (198 pp.) but extremely dense.
It is the standard cite for "rep theory applied to probability" and is
the seed text from which Saloff-Coste's 2004 survey *Random walks on
finite groups* (in *Probability on discrete structures*, Encyclopaedia
of Mathematical Sciences 110, Springer) and the relevant chapters of
Levin-Peres-Wilmer *Markov Chains and Mixing Times* (AMS 2009; 2nd ed.
2017) grew. The Diaconis treatment remains the originator-prose
reference for the Upper Bound Lemma + the symmetric-group examples.

**Peer source cites used in this section:**

- P. Diaconis, M. Shahshahani, "Generating a random permutation with
  random transpositions," *Z. Wahrsch. verw. Gebiete* 57 (1981) 159–179
  — Upper Bound Lemma + first $n \log n$ cutoff result.
- D. Aldous, P. Diaconis, "Shuffling cards and stopping times,"
  *Amer. Math. Monthly* 93 (1986) 333–348 — cutoff phenomenon.
- D. Bayer, P. Diaconis, "Trailing the dovetail shuffle to its lair,"
  *Ann. Appl. Probab.* 2 (1992) 294–313 — riffle shuffle, "7 shuffles."
- L. Saloff-Coste, "Random walks on finite groups," in
  *Probability on Discrete Structures*, H. Kesten ed., Springer 2004,
  263–346 — modern survey.
- D. Levin, Y. Peres, E. Wilmer, *Markov Chains and Mixing Times*,
  AMS 2009 (2nd ed. with Peres-Wilmer 2017) — canonical textbook
  treatment of cutoff + Fourier methods for mixing.
- E. Hewitt, L. J. Savage, "Symmetric measures on Cartesian products,"
  *Trans. AMS* 80 (1955) 470–501 — exchangeability + de Finetti
  (referenced from Diaconis ch. 9 for the connection to symmetric-group
  representations).

---

## §2 Coverage table (Codex vs Diaconis 1988)

Cross-referenced against the 29-unit `07-representation-theory/` corpus
and against `08-stat-mech/` (which is mostly QFT/lattice-gauge flavored,
not Markov-chain mixing). ✓ = covered, △ = partial / different framing,
✗ = not covered.

| Diaconis topic (ch.) | Codex unit(s) | Status | Note |
|---|---|---|---|
| Group representation, irrep, complete reducibility (ch. 2) | `07.01.01`, `07.02.01` (Maschke) | ✓ | Covered. |
| Schur's Lemma (ch. 2) | `07.01.02` | ✓ | Covered. |
| Characters and orthogonality (ch. 2) | `07.01.03`, `07.01.04` | ✓ | Covered. |
| Regular representation, $L^2(G)$ decomposition (ch. 2) | `07.01.05` | ✓ | Covered. |
| Fourier transform on a finite group $\hat{f}(\rho) = \sum_g f(g) \rho(g)$ (ch. 2) | — | ✗ | **Gap.** Covered implicitly by `07.01.05` regular-rep + Peter-Weyl `07.07.02`, but no unit named "non-abelian Fourier transform on a finite group." Load-bearing for everything downstream. |
| Plancherel / Parseval, convolution-becomes-product (ch. 2) | △ via `07.07.02` Peter-Weyl | △ | Peter-Weyl is the compact-Lie analogue. Finite-group case deserves its own unit at $L^2(G) = \bigoplus V_\rho \otimes V_\rho^*$ level. |
| Random walk on a finite group, driving measure, convolution $P^{*k}$ (ch. 3) | — | ✗ | **Gap.** Foundational. No unit on $X_{k+1} = X_k \xi_k$ with $\xi_k \sim P$. |
| Total variation distance, mixing time, stationary distribution (ch. 3, 4) | — | ✗ | **Gap.** Markov-chain mixing primitives absent from the Codex. `08-stat-mech/` is QFT-flavored. |
| Upper Bound Lemma (Diaconis-Shahshahani 1981) (ch. 3) | — | ✗ | **Gap (high priority — Diaconis's central theorem).** |
| Random transpositions on $S_n$, $\frac{1}{2}n \log n$ mixing (ch. 3) | — | ✗ | **Gap.** Worked example #1. |
| Top-in / random-to-top shuffle, $n \log n$ mixing (ch. 3) | — | ✗ | **Gap.** Worked example #2. |
| Riffle shuffle, Bayer-Diaconis 7-shuffles result (ch. 3 + Bayer-Diaconis 1992) | — | ✗ | **Gap (high priority — signature application).** Not in Diaconis 1988 *per se*; referenced and elaborated in Bayer-Diaconis 1992. The Codex Diaconis unit should fold this in. |
| Cutoff phenomenon (Aldous-Diaconis 1986) (ch. 3, 4) | — | ✗ | **Gap (high priority).** |
| Strong stationary times, coupling, comparison technique (ch. 4) | — | ✗ | **Gap.** Probabilistic toolkit complementing Fourier. |
| Metrics on $S_n$: Kendall $\tau$, Spearman, Hamming, Cayley (ch. 6) | — | ✗ | **Gap.** Statistical / data side. |
| Spectral analysis of permutation-valued data (ch. 8) | — | ✗ | **Gap.** ANOVA-on-$S_n$; uses Specht modules of `07.05.03` but no application unit. |
| Models for partially ranked data on $S_n / S_{n-k}$ (ch. 5, 9) | — | ✗ | **Gap (low priority — applications).** |
| Murnaghan-Nakayama rule, character values at cycle types (ch. 7) | △ via `07.05.01-04` | △ | Symmetric-group rep theory units cover the structure (Young diagrams, Specht modules, Schur-Weyl) but the **Murnaghan-Nakayama recursion** for character evaluation is not explicitly its own unit. |
| Young's rule / branching (ch. 7) | △ via `07.05.02` | △ | Young diagrams unit exists; explicit branching rule for $S_n \downarrow S_{n-1}$ not isolated. |
| De Finetti / exchangeability connection (ch. 9) | — | ✗ | **Gap (low priority — probability foundations).** Hewitt-Savage 1955 anchor. |

**Aggregate coverage estimate:** ~20–25% of Diaconis 1988 has corresponding
Codex units, and the covered portion is entirely the *prerequisite*
representation theory (ch. 2 + parts of ch. 7). The **probabilistic
applications half of the book is a total gap** (ch. 3, 4, 5, 6, 8, 9).
This is unsurprising: `07-representation-theory/` was scoped at finite +
Lie-algebraic rep theory in a Fulton-Harris / Serre / Fulton-Harris-Wenzl
mold, with no probabilistic-application track. `08-stat-mech/` covers
*statistical mechanics* in the physics sense (Onsager, RG, lattice
gauge) — not Markov chain mixing in the probability-theory sense.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — soft prerequisite.** The Codex has no Markov-chain
infrastructure unit (no `0X.YY.ZZ-markov-chain.md`, no total-variation
distance unit, no stationary-distribution unit). Two short stub units
should ship as prereqs, either inside an extended `08-stat-mech/` or as
a new `01-foundations/` probability micro-section. These are shared
with future Levin-Peres-Wilmer / Saloff-Coste / Norris coverage.

- **P0a.** `markov-chain` — definition, transition matrix, stationary
  distribution, reversibility. ~800 words.
- **P0b.** `total-variation-distance-mixing-time` — definition, basic
  inequalities, $t_{\rm mix}(\varepsilon)$. ~600 words.

**Priority 1 — high-leverage, captures Diaconis's central content:**

1. **`07.01.09` Non-abelian Fourier transform on a finite group.**
   $\hat{f}(\rho) = \sum_g f(g)\rho(g)$, Plancherel
   $\|f\|^2 = \frac{1}{|G|}\sum_\rho d_\rho \|\hat{f}(\rho)\|_{HS}^2$,
   convolution $\widehat{f*g}(\rho) = \hat{f}(\rho)\hat{g}(\rho)$, Fourier
   inversion. Anchor: Diaconis ch. 2; Serre *Linear Reps of Finite
   Groups* ch. 2 cross-ref. Three-tier, ~1500 words.

2. **`07.05.05` Random walk on a finite group; Upper Bound Lemma.**
   $X_{k+1} = X_k \xi_k$, distribution $P^{*k}$, convergence to uniform
   distribution. Statement and proof of the Upper Bound Lemma
   $4\|P^{*k} - U\|_{TV}^2 \leq \sum_{\rho \neq \mathbf{1}} d_\rho
   \operatorname{tr}((\hat{P}(\rho)^*\hat{P}(\rho))^k)$. Anchor:
   Diaconis ch. 3, originating in Diaconis-Shahshahani 1981.
   Three-tier; Master tier carries the full proof; Intermediate gives
   the statement + the random-transpositions sketch; Beginner gives
   the heuristic ("Fourier-decompose the walk one irrep at a time").

3. **`07.05.06` Random transpositions on $S_n$: $\tfrac{1}{2}n\log n$
   mixing.** Worked application of the Upper Bound Lemma. The character
   ratio $\chi^\lambda(\tau)/d_\lambda$ controls the spectral
   decomposition; cycle-type analysis gives the bound. Anchor: Diaconis
   ch. 3 §A; Diaconis-Shahshahani 1981 *Z. Wahrsch.* 57. Three-tier,
   ~2000 words.

4. **`07.05.07` Riffle shuffle and the 7-shuffle theorem.** GSR (Gilbert-
   Shannon-Reeds) model, $a$-shuffles, $\binom{n+2^k-1}{n}/2^{nk}$
   formula, Bayer-Diaconis 1992 cutoff at $k = \tfrac{3}{2}\log_2 n$ with
   the "7 suffices, 6 doesn't" specialisation to $n = 52$. Originator
   prose. Anchor: Bayer-Diaconis 1992 *Ann. Appl. Probab.* 2;
   cross-reference Diaconis ch. 3 + Aldous-Diaconis 1986. Three-tier,
   ~2200 words. Most-cited "popular math" result in the corpus —
   warrants careful Beginner-tier exposition.

5. **`07.05.08` Cutoff phenomenon.** Definition of cutoff (sequence of
   chains $X_n$ with $t_{\rm mix}^n(\varepsilon)/t_{\rm mix}^n(1-\varepsilon)
   \to 1$), canonical examples (random transpositions, riffle, top-in),
   the "window" question. Originator: Aldous-Diaconis 1986 *Amer. Math.
   Monthly* 93. Anchor: Diaconis ch. 3, 4; LPW ch. 18. Three-tier,
   ~1800 words.

**Priority 2 — probabilistic toolkit + symmetric group character
mechanics:**

6. **`07.05.09` Strong stationary time; coupling argument.** Aldous-Diaconis
   strong-stationary-time framework, top-in worked example via stopping
   time $\tau$ = "time the original bottom card reaches the top."
   Coupling lower bounds. Anchor: Diaconis ch. 4; Aldous-Diaconis 1986.
   Intermediate + Master tiers.

7. **`07.05.10` Murnaghan-Nakayama rule.** Recursive evaluation of
   $\chi^\lambda(\mu)$ via border strips. Needed for Priority-1 unit 3
   (random transpositions) and 4 (riffle). Anchor: Diaconis ch. 7;
   Sagan *The Symmetric Group* ch. 4 (cross-ref); Macdonald *Symmetric
   Functions and Hall Polynomials* ch. I.7. Intermediate + Master.

8. **`07.05.11` Spectral analysis of permutation-valued data.** ANOVA on
   $S_n$ via irrep projection: $L^2(S_n) = \bigoplus_\lambda d_\lambda
   V_\lambda$ decomposition applied to a probability $P$ over $S_n$
   gives "$\lambda$-th order effects" generalising classical mean +
   linear + quadratic. Anchor: Diaconis ch. 8. Intermediate (statistical
   application unit, not a theorem). ~1500 words.

**Priority 3 — statistical-data side (lower leverage for FT-equivalence
but completes Diaconis's content):**

9. **`07.05.12` Metrics on $S_n$.** Kendall $\tau$, Spearman, Hamming,
   Cayley; bi-invariance; statistical interpretation. Anchor: Diaconis
   ch. 6. Short unit (~1000 words).

10. **`07.05.13` Models for partially ranked data on $S_n / S_{n-k}$.**
    Coset spaces, Mallows model, ranking data. Anchor: Diaconis ch. 5, 9.
    Intermediate-only, ~1200 words.

**Priority 4 — pointer (optional, Master-only):**

11. **`07.05.14` De Finetti / exchangeability and the symmetric group.**
    Hewitt-Savage 1955 reframed in rep-theoretic language. Anchor:
    Diaconis ch. 9. Master-tier pointer, ~800 words.

---

## §4 Implementation sketch (P3 → P4)

**Hour estimates** (mirroring earlier Serre / Fulton-Harris batches in
the corpus):

- Priority-0 prereq units (P0a, P0b): ~2 hours each = ~4 hours.
- Priority-1 units 1–5: ~3 hours each = ~15 hours.
- Priority-2 units 6–8: ~3 hours each = ~9 hours.
- Priority-3 units 9–10: ~2 hours each = ~4 hours.
- Priority-4 unit 11: ~1.5 hours.

**Totals:** Priority-1 alone = ~19 hours (a 3-day focused window).
Priority-1+2 = ~28 hours. Full punch-list (P0+P1+P2+P3+P4) = ~33.5 hours.
The Codex Diaconis pass is a smaller production than NAT (Brown-Higgins-
Sivera) because Diaconis 1988 is 198 pp. vs NAT's 668, and because the
representation-theory prereqs are already in the corpus.

**Originator-prose target.** Diaconis (with Shahshahani; with Aldous;
with Bayer) is the **originator** of the Fourier-bound + cutoff
programme. Units 2–5 should carry originator-prose treatment per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, citing:

- P. Diaconis, M. Shahshahani, *Z. Wahrsch. verw. Gebiete* 57 (1981)
  159–179 — Upper Bound Lemma + random transpositions $n \log n$
  cutoff (unit 2, unit 3).
- D. Aldous, P. Diaconis, *Amer. Math. Monthly* 93 (1986) 333–348 —
  cutoff phenomenon, naming (unit 5).
- D. Bayer, P. Diaconis, *Ann. Appl. Probab.* 2 (1992) 294–313 —
  riffle shuffle, "7 shuffles" (unit 4).
- E. Hewitt, L. J. Savage, *Trans. AMS* 80 (1955) 470–501 —
  exchangeability + de Finetti (unit 11).

**Notation crosswalk.** Diaconis writes $\hat{P}(\rho) = \sum_g P(g)\rho(g)$
(Fourier transform of the driving measure), $d_\rho$ for irrep dimension,
$\chi^\lambda$ for the irreducible character of $S_n$ indexed by partition
$\lambda \vdash n$, and uses $U$ for the uniform distribution on $G$.
The Codex symmetric-group units (`07.05.0X`) already use $\lambda \vdash n$
and $V_\lambda$. The new units should: (a) write the Fourier transform
as $\hat{P}(\rho)$ to match Diaconis; (b) reserve $\pi$ for stationary
distribution per LPW (avoiding clash with Diaconis's $U$, which is
specific to the uniform-on-$G$ case but doesn't generalise); (c) write
TV distance as $\|\cdot\|_{TV}$ uniformly. Record in a §Notation
paragraph of `07.05.05` (the Upper Bound Lemma unit).

**Section placement.** All ten content units fit naturally as a new
sub-section `07.05.0X` (probabilistic applications) inside the existing
`05-symmetric/` chapter, *or* as a new `08-probabilistic-applications/`
sub-chapter of `07-representation-theory/`. Recommendation: extend
`05-symmetric/` (already has Specht modules and Schur-Weyl, which the
new units depend on). The two Markov-chain prereq stubs (P0a, P0b) go
in `01-foundations/` or a new probability micro-section.

---

## §5 What this plan does NOT cover

- Diaconis's **later books and surveys**: *Group representations in
  probability and statistics* was followed by Diaconis 1996 "The cutoff
  phenomenon in finite Markov chains" *PNAS*, the 2003 *Bull. AMS*
  survey, and the unpublished *Probability and Algorithms* notes.
  These are deferred — the 1988 monograph remains the canonical entry
  point and the Codex unit set targets it.
- **Abelian random walks** (random walks on $\mathbb{Z}^d$,
  $\mathbb{Z}/n$) are deferred to standard probability texts (Durrett,
  Norris) and do not require Diaconis's machinery. Unit 1 should
  mention them as the abelian special case and stop.
- **Continuous-time / Lie-group random walks** (Brownian motion on
  $SU(2)$, etc.). Diaconis touches this briefly in ch. 4 §F but the
  full treatment belongs in a future Saloff-Coste / Stroock pass.
- **Coupling-from-the-past, Glauber dynamics, mixing on lattice
  models.** These are LPW (2009) territory; the Codex Diaconis pass
  intentionally stops at the finite-group Fourier method.
- **Free probability and large-$n$ rep theory** (Voiculescu, Biane,
  Borodin-Okounkov). Different programme.
- **Phylogenetic / molecular-biology applications** (Evans, Beerenwinkel)
  that descend from Diaconis's ranking framework. Out of scope.
- **Full exercise pack.** Diaconis 1988 has no exercise section
  *per se* (it's a lecture-notes monograph); exercises for the new
  units should be modelled on Saloff-Coste 2004 exercises + LPW
  problem sets and developed in a follow-up P3 pass.

---

## §6 Acceptance criteria for FT equivalence (Diaconis 1988)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The P0 Markov-chain prereq units have shipped (P0a, P0b).
- All five Priority-1 units have shipped, with originator-prose on the
  Upper Bound Lemma (`07.05.05`) and the riffle theorem (`07.05.07`).
- ≥95% of Diaconis's named theorems in chapters 2–4 and 7–8 map to
  Codex units. Currently the pre-existing ch. 2 + ch. 7 coverage gives
  ~25%; Priority-1 units lift this to ~75%; Priority-1+2 to ~92%;
  full ≥95% requires Priority-1+2+3.
- ≥90% of Diaconis's worked examples in chapters 3 + 4 (random
  transpositions, top-in, riffle, nearest-neighbour transpositions,
  $\mathbb{Z}/2^n$ walk) have a direct unit or are referenced in a
  worked-example block. Priority-1 units 3 and 4 close the two most
  important; the others are addressed inside unit 2's
  Master-tier worked-examples section.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new units to `07.01.05` (regular
  representation), `07.05.03` (Specht modules), `07.05.04` (Schur-Weyl),
  and the P0 Markov-chain prereqs.

The Priority-1 set closes most of the equivalence gap given the
existing `07-representation-theory/` foundations. Priority-2 closes the
character-evaluation (Murnaghan-Nakayama) and probabilistic-toolkit
gaps. Priority-3 closes the statistical-data side. Priority-4 is a
pointer.

---

## §7 Sourcing

- **Free.** Project Euclid Open Access (per-chapter PDF download), at
  <https://projecteuclid.org/ebooks/institute-of-mathematical-statistics-lecture-notes-monograph-series/Group-Representations-in-Probability-and-Statistics/toc/10.1214/lnms/1215467407>.
  DOI 10.1214/lnms/1215467407.
- **License.** IMS Lecture Notes-Monograph Series Vol. 11, distributed
  open-access by the Institute of Mathematical Statistics via Project
  Euclid. Cite as P. Diaconis, *Group Representations in Probability
  and Statistics*, IMS Lecture Notes-Monograph Series Vol. 11,
  Institute of Mathematical Statistics, Hayward CA, 1988.
- **Local copy.** Add to `reference/fasttrack-texts/01-fundamentals/`
  as `Diaconis-GroupRepresentationsProbabilityStatistics.pdf`
  (concatenated from per-chapter PDFs on Project Euclid) to mirror the
  pattern of other free FT texts. Companion-text additions:
  - `Bayer-Diaconis-TrailingDovetailShuffle-1992.pdf` (riffle, Ann.
    Appl. Probab. — may require library access; arXiv has a Diaconis
    preprint variant).
  - `Aldous-Diaconis-ShufflingCardsStoppingTimes-1986.pdf`
    (Amer. Math. Monthly — JSTOR; check if there's an author-hosted
    copy on Diaconis's Stanford page
    <https://statweb.stanford.edu/~cgates/PERSI/papers.html>).
  - `Saloff-Coste-RandomWalksFiniteGroups-2004.pdf` (Springer chapter;
    Saloff-Coste hosts a preprint at
    <https://pi.math.cornell.edu/~lsc/lecnotes.html>).
