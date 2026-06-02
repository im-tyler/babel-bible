# Diaconis — *Group Representations in Probability and Statistics* (FT 3.16) — Deepening gaps

**Verdict: book is now ~90% covered.** The first-pass audit
(`plans/fasttrack/diaconis-group-representations-probability-statistics.md`)
was written when `07-representation-theory/` had 29 units; it now has 72,
and **the entire P0–P4 punch-list of that audit has already shipped**
(see COVERED trailer). The first-pass audit is essentially obsolete.

Only a thin slice of genuinely-uncovered material remains, all from
Diaconis's **abelian / commutative-harmonic-analysis side** (ch. 3F + ch. 7):
the association-scheme / Bose–Mesner machinery whose spherical functions
are the **Krawtchouk and Hahn orthogonal polynomials**, the
**Bernoulli–Laplace / Ehrenfest urn diffusions** analysed through it, and
the **wreath-product / hyperoctahedral** representation theory Diaconis
uses for signed permutations and walks on the cube. These are real gaps
(no named unit anywhere in the 1319-unit corpus) and high-value because
they complete the *commutative* counterpart of the already-covered
non-abelian Fourier programme.

Placement: extend `07-representation-theory/05-symmetric/`. Free slot
`07.05.06` is open (the audit's "random transpositions" unit was folded
into `07.05.05`); `07.05.15`–`07.05.17` are open.

---

## GENUINE GAPS (3)

### 1. `07.05.06` — Association schemes, the Bose–Mesner algebra, and Krawtchouk/Hahn spherical functions
- **spec:** Commutative association scheme on a finite set; the Bose–Mesner
  algebra of its adjacency matrices; simultaneous diagonalisation giving
  the dual eigenvalue (P/Q) matrices; the Hamming scheme (hypercube) whose
  spherical functions are the **Krawtchouk polynomials** and the Johnson
  scheme whose spherical functions are the **Hahn / dual-Hahn polynomials**
  — the explicit orthogonal-polynomial eigenfunctions that diagonalise
  symmetric (reversible) finite-group walks; Delsarte's linear-programming
  bound as the application.
- **why a gap:** No named unit. Krawtchouk polynomials appear *only* inside
  the Wright–Fisher diffusion (`19.04.01`) as an incidental eigenfunction
  remark; "association scheme / Bose–Mesner / Delsarte" appears *only* as a
  one-line historical aside in `07.05.13`. The commutative spherical-function
  theory itself is absent. This is the abelian counterpart of the covered
  Gelfand-pair zonal-spherical-function theory (`07.05.13`).
- **prereqs:** `07.01.09` (non-abelian Fourier transform / Plancherel),
  `07.01.04` (character orthogonality), `07.05.13` (Gelfand pairs, zonal
  spherical functions — the non-commutative analogue).
- **chapter:** `content/07-representation-theory/05-symmetric/`;
  frontmatter chapter 07, section 05.

### 2. `07.05.15` — Bernoulli–Laplace and Ehrenfest urn diffusions: sharp mixing via spherical functions
- **spec:** The Ehrenfest urn (random walk on the hypercube $(\mathbb{Z}/2)^n$,
  Krawtchouk eigenvalues) and the Bernoulli–Laplace diffusion (the
  Gelfand pair $(S_n,\,S_k\times S_{n-k})$, dual-Hahn eigenfunctions);
  explicit spectra, the $\tfrac14 n\log n$ cutoff for Bernoulli–Laplace
  (Diaconis–Shahshahani 1987), and the upper-bound-lemma computation in
  the commutative case where characters reduce to orthogonal polynomials.
- **why a gap:** No unit. `07.05.08` covers the *lazy hypercube* walk's
  cutoff abstractly (Theorem 2, Diaconis–Rock) but never the Ehrenfest urn
  or its Krawtchouk diagonalisation, and the **Bernoulli–Laplace** model
  is entirely absent (only the unrelated Polya urn appears, in `07.05.14`).
  These are Diaconis's two canonical *reversible commutative* worked
  examples, the abelian foil to the covered random-transposition (`07.05.05`)
  and riffle (`07.05.07`) examples.
- **prereqs:** `07.05.06` (Krawtchouk/Hahn spherical functions),
  `07.05.05` (upper bound lemma, mixing time, TV distance),
  `07.05.08` (cutoff phenomenon).
- **chapter:** `content/07-representation-theory/05-symmetric/`;
  frontmatter chapter 07, section 05.

### 3. `07.05.16` — Representations of wreath products and the hyperoctahedral group
- **spec:** Wreath product $A \wr S_n = A^n \rtimes S_n$; Clifford-theory /
  little-groups construction of its irreducibles (irreps indexed by
  multipartitions); the hyperoctahedral group $B_n = (\mathbb{Z}/2)\wr S_n$
  (signed permutations) and its $2^n n!$ order; characters via the
  cycle-index / wreath Murnaghan–Nakayama; application to random walks on
  the cube and signed-permutation data.
- **why a gap:** "Wreath product" occurs nowhere in the corpus in the
  group-theoretic sense (the only filename hit is photosynthesis prose);
  no hyperoctahedral / signed-permutation / $B_n$-representation unit
  exists. Diaconis (ch. 7) needs this for signed-rank statistics and
  cube walks; it is also the standard next layer after the covered
  $S_n$ theory (`07.05.01`–`07.05.04`).
- **prereqs:** `07.01.07` (induced representation), `07.01.08` (Frobenius
  reciprocity), `07.05.01` (symmetric-group representations),
  `07.05.10` (Murnaghan–Nakayama rule).
- **chapter:** `content/07-representation-theory/05-symmetric/`;
  frontmatter chapter 07, section 05.

---

## COVERED (not gaps) — verified against the live corpus

Every Priority-0 … Priority-4 item of the first-pass audit is now shipped:

- **Non-abelian Fourier transform on a finite group; Plancherel,
  inversion, convolution-becomes-product** — `07.01.09`
  (`07.01.09-non-abelian-fourier-transform.md`; explicit
  $\hat f(\rho)=\sum f(g)\rho(g)$, inversion, convolution = matrix product).
- **Random walk on a finite group; convolution power $Q^{*k}$; transition
  kernel; stationary/uniform; total-variation distance; mixing time;
  Upper Bound Lemma (Diaconis–Shahshahani)** — `07.05.05`
  (full statement + proof, Master tier).
- **Random transpositions on $S_n$, $\tfrac12 n\log n$ mixing** — `07.05.05`
  Theorem 1 (folded in; not a separate unit). The audit's proposed
  `07.05.06` "random transpositions" unit is therefore redundant.
- **Markov-chain primitives (transition matrix, stationary distribution,
  TV distance, mixing time)** — embedded in `07.05.05` "Formal definition"
  (the audit's P0a/P0b stubs are unnecessary as standalone units).
- **Riffle shuffle / GSR model / Bayer–Diaconis "7 shuffles" /
  $\tfrac32\log_2 n$** — `07.05.07` (`07.05.07-riffle-shuffle-7-shuffle.md`).
- **Cutoff phenomenon (Aldous–Diaconis); window; pre-cutoff (Saloff-Coste);
  hypercube cutoff** — `07.05.08` (`07.05.08-cutoff-phenomenon.md`,
  Theorem 2 = Diaconis–Rock hypercube, Theorem 5 = Saloff-Coste pre-cutoff).
- **Strong stationary times; coupling; top-to-random** — `07.05.09`
  (`07.05.09-strong-stationary-time.md`).
- **Comparison of Dirichlet forms (Diaconis–Saloff-Coste 1993); Wilson's
  method; adjacent transpositions $\Theta(n^3\log n)$** — `07.05.05`
  Theorems 4 & 5.
- **Murnaghan–Nakayama rule (border-strip character recursion)** — `07.05.10`
  (`07.05.10-murnaghan-nakayama-rule.md`).
- **Spectral analysis / ANOVA of permutation-valued data** — `07.05.11`
  (`07.05.11-spectral-analysis-permutation-data.md`).
- **Metrics on $S_n$ (Kendall $\tau$, Spearman, Hamming, Cayley);
  bi-invariance** — `07.05.12` (`07.05.12-metrics-on-symmetric-group.md`).
- **Partially ranked data on $S_n/S_{n-k}$; Gelfand pairs; zonal spherical
  functions; double-coset algebra commutativity; spherical inversion;
  Mallows model; Jack-polynomial connection** — `07.05.13`
  (`07.05.13-partially-ranked-data.md`). (Covers the *non-commutative*
  Gelfand-pair spherical theory; the gap above is the *commutative*
  association-scheme / Krawtchouk–Hahn side.)
- **De Finetti / exchangeability and the symmetric group; Hewitt–Savage** —
  `07.05.14` (`07.05.14-de-finetti-exchangeability.md`).
- **Symmetric-group rep theory: irreducibles ↔ partitions, Young diagrams,
  Specht modules, Schur–Weyl, hook-length, RSK correspondence,
  branching** — `07.05.01`–`07.05.04` (RSK is stated and proved in both
  `07.05.01` and `07.05.02`; branching is in `07.05.02`).
- **Maschke, Schur's lemma, characters & orthogonality, regular
  representation $L^2(G)$ decomposition** — `07.01.01`–`07.01.05`.
- **Spherical functions on $G/K$ (Lie-group case), Harish-Chandra** —
  `07.04.12`, `07.04.11` (the continuous analogue, already present).

**Gap count: 3.  COVERED-verified topics: 16.**
