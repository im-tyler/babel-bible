# Itzykson, Drouffe — *Statistical Field Theory, Vol. 1* (Fast Track 2.13) — Audit + Gap Plan

**Book:** C. Itzykson, J.-M. Drouffe, *Statistical Field Theory,
Volume 1: From Brownian Motion to Renormalization and Lattice Gauge
Theory* (Cambridge University Press, Cambridge Monographs on
Mathematical Physics, 1989; xx + 403 pp. for Vol. 1).
ISBN 0-521-34058-4 (hbk), 0-521-40805-7 (set). Pagination and
chapter references in this plan follow the 1989 first edition, whose
structure is preserved in the 1991 paperback and all subsequent
reprintings. Chapter references (Ch. 1, …, Ch. 6) are
**Itzykson-Drouffe Vol. 1 chapter numbers**, not PDF page numbers.

**Fast Track entry:** 2.13 — the **statistical-field-theory /
path-integral / lattice-gauge** anchor of Section 2 of the booklist.
Sits between 2.12 (Baxter *Exactly Solved Models*, the
transfer-matrix / Yang-Baxter integrable-lattice axis) and 2.14 (the
quantum-statistical track). Catalog status: **BUY** (Cambridge
Monographs commercial title; under active copyright). Reads as the
field-theorist's companion to Baxter: where Baxter solves lattice
models *exactly* by the transfer matrix, Itzykson-Drouffe builds the
**continuum field theory** the lattice models flow to under
coarse-graining, and the **lattice gauge theory** that regulates it.

**Audit completeness: reduced.** Per AGENTIC_EXECUTION_PLAN.md §6.6 —
**no local PDF available.** `reference/textbooks-extra/` and
`reference/fasttrack-texts/` were searched
(`find reference -iname "*itzykson*" -o -iname "*drouffe*"` returns
nothing; the companion Itzykson-Zuber *Quantum Field Theory*, often
confused with this title, is also absent). This plan is constructed
from the canonical Itzykson-Drouffe Vol. 1 table of contents (stable
across the 1989 hardback and the 1991/2005 paperback reprints)
together with cross-references in the standard companion sources that
treat it as their primary statistical-field-theory reference:
Parisi *Statistical Field Theory* (1988), Zinn-Justin *Quantum Field
Theory and Critical Phenomena*, Kardar *Statistical Physics of Fields*
(2.15), Montvay-Münster *Quantum Fields on a Lattice*, and the
lattice-gauge chapters of Creutz *Quarks, Gluons and Lattices*.
**P5 verification cannot mark this book `equivalence-covered` until a
full audit replaces this reduced one** (§6.6 hard rule) — the CUP
hardback or paperback should be acquired into
`reference/textbooks-extra/` to promote the audit to `full`.

**Coordination note (parallel audits).** This audit runs alongside:
- **Baxter 2.12 (shipped):** owns the exactly-solved / transfer-matrix
  / Yang-Baxter / Bethe-ansatz / corner-transfer-matrix axis, now in
  `content/08-stat-mech/13-exactly-solved-models/` (`08.13.01`–`08.13.08`,
  with `08.13.06`/`.09`/`.10` still open). **Itzykson-Drouffe does NOT
  re-audit that block** — the lattice-Ising / transfer-matrix anchors
  are treated as shipped prerequisites and lateral references.
- **Kardar 2.15 (running in parallel):** owns the **critical-phenomena
  / RG / continuous-spin / scaling** axis. **Itzykson-Drouffe yields
  that overlap to Kardar** and keeps the **path-integral / Brownian /
  lattice-gauge / large-N / lattice-fermion** axis. Concretely:
  - The **O(n) / continuous-spin / spin-wave / Mermin-Wagner** material
    (ID's Ch. 3-4 overlap with Kardar) → **Kardar owns** the
    critical-exponent / Wilson-Fisher side; the existing
    `08.02.03-mermin-wagner` and `08.04.02-wilson-fisher` are shipped.
    Itzykson-Drouffe claims only the **lattice → continuum / Gaussian
    field / large-N** framing, not the ε-expansion.
  - The **renormalization group** units (`08.04.01`-`08.04.04`) are
    shipped and shared; Itzykson-Drouffe references them, deepens none
    beyond a lateral lattice-RG note left to Kardar.

**Section-2 structural note.** Itzykson-Drouffe Vol. 1 is
**Euclidean (statistical) field theory built from the lattice up** —
the path integral as a continuum limit of a statistical-mechanical
partition function, the renormalization group as the organising
principle of the continuum limit, and lattice gauge theory as the
gauge-invariant nonperturbative regulator. Its natural home in the
corpus is the existing **`content/08-stat-mech/`** chapter, which
already ships a path-integral unit (`08.07.01`), a Wick-rotation /
quantum-classical-correspondence unit (`08.09.01`), a three-unit
lattice-gauge block (`08.08.01`-`08.08.03`), the RG block
(`08.04.*`), the Gaussian-field unit (`08.06.01`), and a 10-unit
Euclidean-QFT sub-chapter (`08.10.01`-`08.10.10`, the
`10-qft/` folder: bosonic/fermionic Fock space, φ⁴ + Dyson series,
Wick's theorem, Feynman propagator, one-loop renormalisation,
Langevin lattice numerics, Fokker-Planck). It does **not** belong in
`content/11-stat-mech-physics/` (undergraduate thermodynamics) nor in
`content/12-quantum/` (the canonical-QFT chapter, which is the
*Minkowski / operator* counterpart to Itzykson-Drouffe's *Euclidean /
path-integral* treatment).

**Purpose:** lightweight audit-and-gap pass (P1 + P2 + P3-lite per
orchestration protocol). Output is a punch-list of new units and
existing-unit deepenings so that *Statistical Field Theory Vol. 1*
reaches the FT-equivalence threshold (≥95% effective coverage of named
results; see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a
full P1 audit (no line-number-level problem inventory) under the
reduced-completeness constraint.

---

## §1 What Itzykson-Drouffe Vol. 1 is for

Itzykson-Drouffe's *Statistical Field Theory* is **the canonical
graduate reference that unifies critical phenomena, Euclidean quantum
field theory, and lattice gauge theory under the single banner of the
field-theoretic path integral**. Written by two CEN-Saclay
field-theorists (Itzykson is also co-author of the standard
Itzykson-Zuber *Quantum Field Theory*), Vol. 1 makes the central
modern claim explicit: **a statistical-mechanical system near a
continuous phase transition and a Euclidean quantum field theory are
the same object**, related by Wick rotation, and the renormalization
group is the machinery that controls the continuum limit on both
sides. The distinctive editorial choice is to **build the field theory
from Brownian motion and the lattice up** — opening (Ch. 1) with the
random walk / Wiener measure as the simplest path integral, before any
field appears — rather than postulating a continuum action.

Vol. 1 is organised as six chapters:

- **Ch. 1 — From Brownian motion to Euclidean fields.** The random
  walk, the **Wiener measure** and the continuum limit, the free
  (Gaussian) Euclidean field as a sum over random paths, the
  propagator as a random-walk generating function, the
  **functional integral** for a free scalar field, and the
  Feynman-Kac formula. **The book's distinctive starting point** —
  the path integral *derived* as a statistical-mechanics limit, not
  postulated.
- **Ch. 2 — Grassmannian integrals and the two-dimensional Ising
  model.** **Grassmann (anticommuting) variables** and the fermionic
  Gaussian integral / Pfaffian; the **2D Ising model solved as a
  free-fermion theory** (the Onsager solution recast à la
  Schultz-Mattis-Lieb / Samuel) — the dimer / Pfaffian method.
  This is Itzykson-Drouffe's bridge from exactly-solved lattice models
  to the fermionic path integral.
- **Ch. 3 — Spontaneous symmetry breaking, mean field.** Landau theory,
  the **mean-field approximation** from the saddle point of the
  functional integral, Gaussian fluctuations and the **Ginzburg
  criterion**, the upper critical dimension, the **continuous-spin /
  O(n) model**, Goldstone modes and the spin-wave / low-temperature
  expansion. (Overlap with Kardar — ID yields the critical-exponent
  side; keeps the saddle-point / functional-integral framing.)
- **Ch. 4 — Scaling, the renormalization group, perturbation theory.**
  The **block-spin RG**, fixed points and critical exponents as
  eigenvalues of the linearised RG, the **ε-expansion / Wilson-Fisher
  fixed point**, the perturbative expansion of correlation functions
  and **Feynman diagrams in the statistical context**, and
  renormalisation. (Overlap with Kardar — ID yields the
  ε-expansion / Wilson-Fisher; keeps the diagrammatic / perturbative
  field-theory machinery.)
- **Ch. 5 — Lattice gauge theory.** Gauge fields on the lattice, the
  **Wilson action and Wilson loop**, the **strong-coupling (character)
  expansion**, **confinement and the area law**, the
  roughening / deconfinement transition, the **string tension** and the
  glueball spectrum, Elitzur's theorem, and the **continuum limit /
  asymptotic scaling** of the lattice gauge theory. **The headline
  net-new content of the book for the corpus** — the corpus has the
  Wilson action but no strong-coupling-expansion *derivation* of the
  area law.
- **Ch. 6 — The large-N limit, lattice fermions, further topics.** The
  **large-N (mean-field) expansion** of O(n) / matrix models and the
  factorisation of gauge-invariant observables; **lattice fermions and
  the doubling problem** (Nielsen-Ninomiya), Wilson fermions, staggered
  (Kogut-Susskind) fermions; the strong-coupling expansion with
  fermions and chiral symmetry on the lattice. (Vol. 1 only sketches
  these; the full treatment is Vol. 2 — **out of scope**, see §5.)

Distinctive Itzykson-Drouffe choices (the net-new strands; the
per-topic corpus diff is the §2 coverage table):

1. **Brownian-motion-first construction of the path integral.** Ch. 1
   *derives* the functional integral as the continuum limit of a sum
   over random walks weighted by the **Wiener measure**, with the
   propagator as the random-walk generating function and the
   **Feynman-Kac formula** for the Schrödinger semigroup. The corpus's
   path-integral (`08.07.01`) and Wick-rotation (`08.09.01`) units
   build the integral *formally*; the random-walk / Wiener / Feynman-Kac
   foundation is net-new and is the book's signature move.

2. **Grassmann integration and the 2D Ising model as free fermions.**
   Ch. 2's anticommuting Grassmann calculus, the fermionic Gaussian
   integral and the Pfaffian, solving 2D Ising as free lattice fermions
   (Schultz-Mattis-Lieb / dimer-Pfaffian). The corpus has the Onsager
   transfer-matrix solution (`08.03.01`) and continuum fermionic Fock
   space (`08.10.09`) but not the Grassmann/Pfaffian *Ising solution*.

3. **Lattice gauge theory: strong-coupling expansion and the area
   law.** Ch. 5's **character / strong-coupling expansion** that
   *derives* $\langle W(C)\rangle \sim e^{-\sigma A}$ (confinement),
   plus the string tension, roughening, and asymptotic-scaling
   continuum limit. The corpus's `08.08.01`-`08.08.03` *state* the area
   law in synthesis but never derive it — the single largest gap.

4. **The large-N limit and lattice fermions.** Ch. 6's $1/N$ expansion
   of O(n) / matrix models (saddle exact as $N\to\infty$, factorisation
   of gauge-invariant observables) and the **lattice-fermion doubling
   problem** (Nielsen-Ninomiya, Wilson / staggered fermions). Corpus
   coverage of both: zero.

The **Feynman-diagram expansion in the statistical context** (Ch. 4) is
*largely covered*: φ⁴ + Dyson series, Feynman propagator and one-loop
renormalisation are shipped in the QFT sub-chapter (`08.10.03`,
`08.10.05`, `08.10.06`); only the near-critical-correlation-function
framing is a light ENRICH (item 7), not a new unit.

**Density of theorem layer vs. existing corpus.** The shipped
`08-stat-mech/` chapter is, by the prior Baxter and Landau-Vol-5
audits, **field-theoretic / RG / Euclidean-QFT-heavy** — exactly
Itzykson-Drouffe's centre of mass. So the topic-level overlap is the
**highest of any Section-2 stat-mech audit so far** (~45% of ID's named
results have *some* corpus unit): path integral, Wick rotation,
Gaussian field, mean field, RG block, Wilson-Fisher / ε-expansion,
Mermin-Wagner / continuous spin, lattice gauge (Wilson action),
Feynman diagrams / φ⁴ / propagator, Onsager Ising. **But four
ID-signature strands are net-new** — (a) the Brownian-motion / Wiener
/ Feynman-Kac foundation of the path integral, (b) the Grassmann /
Pfaffian solution of the 2D Ising model, (c) the strong-coupling
expansion / area-law derivation / string tension in lattice gauge
theory, and (d) the large-N limit and lattice fermions. **The dominant
editorial finding: this is a moderate-coverage book — much higher base
overlap than Baxter, but with a concentrated net-new requirement on the
Brownian foundation, the lattice-gauge confinement derivation, and the
large-N / lattice-fermion strand.**

---

## §2 Coverage table (Babel Bible vs Itzykson-Drouffe Vol. 1)

Cross-referenced against the `content/08-stat-mech/` chapter (verified
actual unit ids via `find content -name "08.*"` and content grep for
`brownian|wiener|feynman-kac|grassmann|pfaffian|strong coupling|area
law|character expansion|large-n|fermion doubling`). ✓ = covered at
ID-equivalent depth, △ = topic present but ID-distinctive machinery /
depth not captured, ✗ = not covered.

### Ch. 1 — From Brownian motion to Euclidean fields

| ID topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Random walk / Brownian motion as a path integral | — | ✗ | **Gap (P1, ID-signature).** No random-walk-to-field-theory unit. The book's opening move. |
| Wiener measure on continuous paths | — | ✗ | **Gap (P1).** No Wiener-measure unit. Folded into the Brownian unit. |
| Feynman-Kac formula | — | ✗ | **Gap (P1).** Heat-kernel / Schrödinger semigroup as a path integral. |
| Free (Gaussian) Euclidean scalar field; propagator as random-walk generating function | `08.06.01-gaussian-field`; `08.07.01-path-integral` | △ | **Depth gap.** Gaussian field and path integral are shipped, but *built formally*, not derived from the random-walk continuum limit. The propagator-as-random-walk-sum is net-new framing. |
| Functional integral for the free field | `08.07.01-path-integral` | ✓ | Shipped. |
| Quantum-classical correspondence (Wick rotation) | `08.09.01-wick-rotation` | ✓ | Shipped at ID-equivalent depth. |

### Ch. 2 — Grassmannian integrals and the 2D Ising model

| ID topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Grassmann (anticommuting) variables; fermionic Gaussian integral | `08.10.09-fermionic-fock-space...` (lateral) | △ | **Depth gap.** Anticommutators / fermionic Fock space shipped in the QFT sub-chapter; the *Grassmann-integral / Berezin-integration* calculus and the Pfaffian are not isolated. |
| Pfaffian / dimer method | — | ✗ | **Gap (P2).** No Pfaffian-of-an-antisymmetric-matrix unit. |
| 2D Ising model solved as free lattice fermions (Schultz-Mattis-Lieb) | `08.03.01-onsager-solution` (transfer-matrix route) | △ | **Method gap.** Onsager solution shipped via the transfer matrix; the *Grassmann / Pfaffian free-fermion solution* (the ID route) is net-new. |

### Ch. 3 — Spontaneous symmetry breaking, mean field

| ID topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Landau theory / mean-field from the saddle point | `08.02.01-mean-field` | ✓ | Shipped. |
| Spontaneous symmetry breaking; Goldstone modes | `08.02.02-spontaneous-symmetry-breaking` | ✓ | Shipped. |
| Gaussian fluctuations; Ginzburg criterion; upper critical dimension | (touched in `08.02.01`, `08.04.02`) | △ | **Depth gap.** Ginzburg criterion is referenced in the RG/mean-field units but not isolated with the $d_c=4$ derivation. **Kardar 2.15 owns this** — yielded. |
| Continuous-spin / O(n) model; spin waves; Mermin-Wagner | `08.02.03-mermin-wagner` | ✓ | Shipped (continuous-symmetry obstruction, spin-wave IR divergence). **Kardar owns the critical-exponent side.** |

### Ch. 4 — Scaling, RG, perturbation theory

| ID topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Block-spin RG; fixed points; exponents as RG eigenvalues | `08.04.01-real-space-rg`, `08.04.04-block-spin-decimation` | ✓ | Shipped. |
| ε-expansion / Wilson-Fisher fixed point | `08.04.02-wilson-fisher` | ✓ | Shipped. **Kardar 2.15 owns deepening.** |
| Beta function / flow | `08.04.03-beta-function` | ✓ | Shipped. |
| Perturbative expansion; Feynman diagrams in the statistical context | `08.10.03-phi-4-theory-and-the-dyson-series`, `08.10.05-feynman-propagator...`, `08.10.06-one-loop-renormalisation-in-phi-4` | △ | **Framing gap (light).** φ⁴ + diagrams + one-loop renormalisation shipped in the QFT sub-chapter; the *statistical-correlation-function* framing is an ENRICH, not a new unit. |

### Ch. 5 — Lattice gauge theory

| ID topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Gauge fields on the lattice; Wilson action | `08.08.02-wilson-action`, `08.08.01-wilson-lattice-gauge` | ✓ | Shipped. |
| Wilson loop; area law vs perimeter law (statement) | `08.08.01`, `08.08.02` (synthesis only) | △ | **Derivation gap (P1).** The area law is *stated* in synthesis paragraphs; the **strong-coupling (character) expansion that derives it** is not carried out. |
| Strong-coupling / character expansion | — | ✗ | **Gap (P1, ID-headline).** No strong-coupling-expansion unit. |
| Confinement; string tension | — | ✗ | **Gap (P1).** Folded into the strong-coupling unit. |
| Roughening / deconfinement transition | — | ✗ | **Gap (P2).** |
| Elitzur's theorem | (named once in `08.08.02` synthesis) | △ | **Depth gap.** Named, not developed. Folded into the strong-coupling unit. |
| Continuum limit / asymptotic scaling of LGT | (touched in `08.08.01`, via `08.04.03`) | △ | **Depth gap.** Continuum limit mentioned; asymptotic-scaling window not derived. |

### Ch. 6 — Large-N, lattice fermions, further topics

| ID topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Large-N (1/N) expansion of O(n) / vector models; factorisation | — | ✗ | **Gap (P2, ID-signature).** No large-N unit. `08.02.01-mean-field` is the closest analogue but does not organise mean-field as the $N\to\infty$ saddle. |
| Lattice fermions; the doubling problem (Nielsen-Ninomiya) | — | ✗ | **Gap (P2).** No lattice-fermion / fermion-doubling unit. `08.10.09`-`08.10.10` are *continuum* fermions. |
| Wilson / staggered (Kogut-Susskind) fermions | — | ✗ | **Gap (P3).** Folded into the lattice-fermion unit. |
| Matrix models / strong-coupling with fermions | — | ✗ | **Gap (P3 / Vol. 2).** Mostly Vol. 2 — out of scope; pointer only. |

### Aggregate coverage estimate (Itzykson-Drouffe Vol. 1)

- **Theorem layer:** ~45% topic-level, ~35% at ID-equivalent
  machinery-depth. The shipped chapter covers the **continuum-field /
  RG / Euclidean-QFT** spine (path integral, Wick rotation, Gaussian
  field, mean field, SSB, the full RG block, Wilson-Fisher, φ⁴ +
  diagrams + one-loop renormalisation, Wilson action) at full or
  near-full depth — the highest base overlap of any Section-2 audit.
  The four ID-signature strands (Brownian/Wiener/Feynman-Kac;
  Grassmann/Pfaffian Ising; strong-coupling/area-law/string-tension;
  large-N/lattice-fermions) are absent.
- **Worked-example layer:** ~25%. Shipped: one-loop φ⁴
  renormalisation, the Onsager transfer-matrix solution, Wilson-action
  partition function. Absent: random-walk → propagator, Pfaffian Ising
  free energy, strong-coupling area-law coefficient / string tension,
  large-N saddle, fermion-doubler count.
- **Notation layer:** ~40%. Major crosswalk concerns (ID-specific):
  - ID uses the Euclidean-action sign convention and $\beta = 1/g_0^2$
    for the inverse lattice gauge coupling (collides with $\beta = 1/T$
    of the stat-mech units — already a live collision in
    `08.08.02`). Pin a Master-tier note.
  - Grassmann / Berezin integration $\int d\bar\psi\, d\psi$ and the
    Pfaffian $\mathrm{Pf}(A)$ — introduce cleanly; crosswalk to
    `08.10.09` anticommutator conventions.
  - $N$ (large-N rank) vs $n$ (O(n) spin components) — ID uses both;
    pin disambiguation in the large-N unit.
  - Wiener measure $dW$, diffusion constant, lattice spacing $a$ as the
    UV cutoff — crosswalk to `08.07.01` / `08.08.01`.
- **Sequencing layer:** ~40%. The corpus has Gaussian field → path
  integral → Wick rotation → lattice gauge, and a separate RG block;
  ID's spine is Brownian → free field → Grassmann/Ising →
  mean-field/SSB → RG/diagrams → lattice gauge → large-N/fermions.
  The Brownian *prequel* and the large-N/lattice-fermion *sequel* are
  the missing endpoints of the chain.
- **Intuition layer:** ~40%. Path-integral-as-random-walk-sum,
  confinement-as-strong-coupling-area-law, large-N-as-exact-saddle,
  fermion-doubling-as-a-topological-obstruction — all absent.
- **Application layer:** ~30%. Lattice QCD / confinement, the
  Ising-as-free-fermions correspondence, the O(n)-large-N solution —
  none present at ID depth.

After P1: theorem layer ~70%, machinery-depth ~62%. After P1+P2:
~88% / ~82%. After P1+P2+P3: ~94% / ~90%. Full ≥95% requires the
deferred matrix-model / lattice-fermion-spectroscopy units and a
dedicated ID problem pack — deferred per the reduced-audit constraint
and the Vol. 2 boundary.

---

## §3 Gap punch-list (priority-ordered)

The `08-stat-mech/` chapter is **mature on the continuum-field / RG /
Euclidean-QFT side** (path integral, Wick, Gaussian field, mean field,
SSB, RG block, Wilson-Fisher, φ⁴ + diagrams, Wilson action) — so most
of ID's spine is already shipped. The gap is concentrated in **four
ID-signature strands**: (a) the **Brownian-motion / Wiener / Feynman-Kac
foundation** of the path integral, (b) the **Grassmann / Pfaffian
solution of the 2D Ising model**, (c) the **strong-coupling expansion /
area-law derivation / string tension** in lattice gauge theory, and
(d) the **large-N limit and lattice fermions**.

Recommended slot allocation: open a new sub-chapter
**`08.14-statistical-field-theory/`** for the Brownian / Grassmann /
large-N / lattice-fermion units, and **extend `08.08-lattice-gauge/`**
(currently `08.08.01`-`08.08.03`) with the strong-coupling /
confinement units. Verified-unused id ranges:
**`08.14.*` is entirely unused** (no `08.14` in `content/`);
**`08.08.04`-`08.08.06` are unused** (the chapter stops at `08.08.03`).

### Priority 1 — ID-load-bearing apparatus (mandatory for FT-equivalence) (4 items)

1. **`08.14.01` Brownian motion, the Wiener measure, and the
   path integral.** [NEW] ID Ch. 1 anchor; **Wiener 1923
   (*J. Math. Phys. (MIT)* 2:131) is the originator of the Wiener
   measure; Feynman 1948 (*Rev. Mod. Phys.* 20:367) and Kac 1949
   (*Trans. Amer. Math. Soc.* 65:1) for the Feynman-Kac formula.**
   Three-tier; ~2400 words. Beginner: the random walk and its
   continuum (diffusion) limit; the propagator as a sum over paths.
   Intermediate: the **Wiener measure** on continuous paths; the free
   Euclidean scalar field as a Gaussian sum over random paths; the
   propagator as the random-walk generating function. Master: the
   **Feynman-Kac formula** $e^{-tH}$ as a path integral; the bridge to
   `08.07.01-path-integral` (the formal functional integral *derived*
   here) and `08.09.01-wick-rotation`. **Mandatory originator-prose** —
   paraphrase Wiener 1923 and Kac 1949 directly with `[ref:]`
   citations. Prereq: `08.06.01-gaussian-field`,
   `08.07.01-path-integral` (lateral; this unit is its *prequel*).
   **The ID-signature opening move — the single most important net-new
   foundation in this audit.** Near-apex.

2. **`08.08.04` The strong-coupling expansion, the area law, and
   confinement.** [NEW] ID Ch. 5 anchor; **Wilson 1974
   (*Phys. Rev. D* 10:2445) is the originator of lattice gauge theory
   and the strong-coupling confinement argument.** Three-tier;
   ~2400 words. Beginner: the Wilson loop as an order parameter; area
   law vs perimeter law. Intermediate: the **character / strong-coupling
   expansion** of $\langle W(C)\rangle$; the tiling of the minimal
   surface; the leading area-law coefficient. Master: the **string
   tension** $\sigma$ and the confining potential $V(r) = \sigma r$;
   **Elitzur's theorem** (local gauge symmetry is never spontaneously
   broken); the roughening transition; the continuum limit and
   **asymptotic scaling**. **Mandatory originator-prose** — paraphrase
   Wilson 1974 §II-III directly. Prereq: `08.08.01`, `08.08.02`,
   `08.04.03-beta-function` (lateral, asymptotic scaling). **The
   headline net-new derivation — the corpus states the area law but
   never derives it.** Apex.

   > **RESOLUTION 2026-06-01 (dedup): SUPERSEDED — do not produce as a
   > standalone unit.** Since this audit was written, `12.18.16`
   > *Lattice gauge theory and confinement* (Weinberg-v2 wave, shipped)
   > now contains the FULL strong-coupling derivation the audit flagged
   > as missing: Wilson loop, Peter-Weyl character expansion, minimal-
   > surface tiling, area law $W(C)=(\beta/2N^2)^{A(C)}(1+O(\beta))$,
   > string tension $\sigma=-\log(\beta/2N^2)$, the confining potential
   > $V(r)=\sigma r$, Elitzur's theorem, and asymptotic scaling. The
   > identified gap is CLOSED cross-section; a stat-mech `08.08.04` would
   > duplicate it. The only genuinely non-overlapping AS-distinct piece
   > is the **roughening transition / SOS-interface** angle (`08.08.05`),
   > which is demoted to a **P3 enrichment** (a short stat-mech-native
   > unit that *cross-links* to `12.18.16` for the derivation and adds
   > only the interface-roughening physics) — not an apex gap. Net: the
   > confinement derivation is no longer a corpus hole.

3. **`08.14.02` Grassmann integration and the 2D Ising model as free
   fermions.** [NEW] ID Ch. 2 anchor; **Berezin 1966 (*The Method of
   Second Quantization*) for Grassmann integration; Schultz-Mattis-Lieb
   1964 (*Rev. Mod. Phys.* 36:856) for the free-fermion solution;
   Kasteleyn 1963 / Fisher 1961 for the dimer-Pfaffian method.**
   Three-tier; ~2200 words. Beginner: anticommuting Grassmann variables;
   why a fermion integral is a determinant / Pfaffian. Intermediate:
   the **Berezin integral** $\int d\bar\psi\,d\psi\, e^{-\bar\psi A\psi}
   = \det A$ and $\int e^{\frac12 \psi^T A\psi} = \mathrm{Pf}(A)$;
   the 2D Ising partition function as a Grassmann Gaussian integral.
   Master: the **free-fermion solution** of the 2D Ising model
   (Schultz-Mattis-Lieb), recovering the Onsager free energy and the
   $\beta = 1/8$ magnetisation exponent; lateral reference to
   `08.03.01-onsager-solution` (the transfer-matrix route) and
   `08.10.09` (continuum fermionic Fock space). Prereq:
   `08.03.01-onsager-solution`, `08.01.02-ising-model`. Near-apex.

4. **`08.14.03` The large-N limit.** [NEW] ID Ch. 6 anchor;
   **Stanley 1968 (*Phys. Rev.* 176:718) for the spherical / O(n→∞)
   limit; 't Hooft 1974 (*Nucl. Phys. B* 72:461) for the matrix /
   gauge large-N expansion.** Three-tier; ~2000 words. Beginner: why a
   model with many components becomes solvable as $N\to\infty$.
   Intermediate: the **$1/N$ expansion** of the O(n) vector model; the
   saddle point becoming exact; recovery of mean-field exponents in the
   $N=\infty$ limit and the gap equation. Master: factorisation of
   gauge-invariant observables; 't Hooft's planar-diagram counting and
   the topological $1/N$ expansion (sketch — the full matrix-model
   treatment is Vol. 2). Prereq: `08.02.01-mean-field`,
   `08.02.03-mermin-wagner` (lateral, O(n) model). **ID-signature; the
   third major net-new strand.** Near-apex.

### Priority 2 — ID-distinctive depth and the lattice-fermion / Pfaffian layer (3 items)

5. **`08.14.04` Lattice fermions and the doubling problem.** [NEW]
   ID Ch. 6 anchor; **Nielsen-Ninomiya 1981 (*Nucl. Phys. B* 185:20;
   193:173) for the no-go theorem; Wilson 1975 for Wilson fermions;
   Kogut-Susskind 1975 (*Phys. Rev. D* 11:395) for staggered
   fermions.** Three-tier; ~2000 words. Beginner: why naively
   discretising the Dirac operator produces extra ("doubler") fermions.
   Intermediate: the **Nielsen-Ninomiya no-go theorem** — locality +
   chiral symmetry + no doublers cannot coexist; the $2^d$ doublers.
   Master: **Wilson fermions** (the Wilson term that lifts the
   doublers at the cost of explicit chiral-symmetry breaking) and
   **staggered (Kogut-Susskind) fermions** (spin-diagonalisation,
   tastes); pointer to Ginsparg-Wilson / overlap fermions (Vol. 2 /
   modern). Prereq: `08.08.01-wilson-lattice-gauge`,
   `08.10.09-fermionic-fock-space...`, `08.14.02` (Grassmann). Deepens
   the lattice-gauge programme to include matter.

6. **`08.08.05` The roughening transition and the lattice-gauge phase
   diagram.** [NEW] ID Ch. 5 anchor; **Wilson 1974 / Creutz 1980
   (*Phys. Rev. Lett.* 45:313) for the Monte-Carlo confinement
   evidence.** Three-tier; ~1600 words. Beginner: confined vs
   deconfined phases; the order of the transition by gauge group.
   Intermediate: the **roughening transition** of the confining string;
   the breakdown of the strong-coupling expansion. Master: the
   $\mathbb{Z}_2$ / U(1) / SU(N) phase structure, the absence of a
   bulk transition for SU(2)/SU(3) (one confining phase, asymptotic
   freedom connecting strong and weak coupling), and Creutz's
   Monte-Carlo demonstration. Prereq: `08.08.04`. Deepens the
   confinement picture.

7. **Deepen `08.10.03-phi-4-theory-and-the-dyson-series` and
   `08.10.06-one-loop-renormalisation-in-phi-4`.** [ENRICH] Add a
   Master-tier section framing the **Feynman-diagram expansion as the
   statistical perturbation series of a near-critical correlation
   function** (ID Ch. 4): the same diagrams compute the Euclidean
   correlation functions of a statistical field theory near $T_c$, with
   the mass $\propto (T-T_c)$ and the diagrams organised by the RG.
   Pin ID and Wilson-Kogut 1974 (*Phys. Rep.* 12:75) alongside the
   existing references. No new id. (This is the light ENRICH that
   closes the Ch. 4 "framing gap" — Kardar 2.15 owns the
   ε-expansion deepening proper.)

### Priority 3 — secondary depth and pointer items (deferable) (3 items)

8. **`08.14.05` The Pfaffian and the dimer model.** [NEW] ID Ch. 2
   anchor; **Kasteleyn 1961 (*Physica* 27:1209) / Fisher-Temperley 1961
   originators.** Master-tier focus; ~1400 words. The Pfaffian of an
   antisymmetric matrix, Kasteleyn's theorem (planar dimer partition
   function as a Pfaffian), and the dimer → Ising correspondence.
   Prereq: `08.14.02`. Deferable — the Pfaffian machinery can ride
   inside `08.14.02`; split out only if the Ising unit overflows.

9. **Deepen `08.06.01-gaussian-field`.** [ENRICH] Add a Beginner-tier
   section deriving the **free Euclidean field as the continuum limit of
   the Gaussian random walk** (ID Ch. 1), lateral-referencing
   `08.14.01`. Distinguishes the lattice-Gaussian-field origin from the
   formal continuum definition the unit currently uses. No new id.

10. **`08.14.06` Pointer: matrix models and the topological expansion.**
    [NEW] Pointer / survey, Master-only; ~900 words. 't Hooft's
    planar limit, the genus expansion of matrix integrals, and the
    bridge to 2D quantum gravity / random surfaces — **mostly Vol. 2**,
    included as a pointer to a future FT entry. Prereq: `08.14.03`.
    Deferable.

### Priority 4 — notation crosswalk (1 item; no standalone file)

11. **Notation crosswalk pin (no standalone file).** [ENRICH] Pin the
    ID Euclidean-action sign convention, the lattice-gauge
    $\beta = 1/g_0^2$ vs stat-mech $\beta = 1/T$ collision, the
    Grassmann/Berezin and Pfaffian conventions, the Wiener-measure
    notation, and the $N$ (rank) vs $n$ (O(n) components)
    disambiguation, inline in the Master sections of `08.14.01`-`.04`
    and `08.08.04`. No standalone `notation/itzykson-drouffe.md`
    needed.

---

## §4 Implementation sketch

**Minimum ID-equivalence batch** = priority 1 only (items 1-4):
4 new units, all net-new (one Brownian foundation + one lattice-gauge
confinement derivation + one Grassmann/Ising + one large-N).
Estimates (mirroring the Baxter / Landau Vol 5 batches):

- ~4 hours per typical new unit (research + draft + validate 27/27 +
  Lean stub + Bridge / Synthesis prose).
- The originator-prose units (item 1 Wiener/Feynman-Kac, item 2
  strong-coupling/Wilson) require historical research and
  primary-source paraphrase — ~5-6 hours each.
- Priority 1: 2 typical × 4 h + 2 originator × 5.5 h = ~19 hours.
- Priority 1+2: ~19 + 2 new × 3.5 h + 1 deepening × 1.5 h = ~27.5 hours.
- Priority 1+2+3: ~27.5 + 2 new × 3 h + 1 deepening × 1.5 h + 1 pointer
  × 2 h = ~37 hours.
- Full punch-list including P4: ~37.5 hours. **Fits a focused
  5-7 day window**, slightly lighter than the Baxter batch because the
  RG / φ⁴ / Wilson-action spine is already shipped (ID has the highest
  base overlap of the Section-2 stat-mech audits).

**Batch structure.**

- **Batch A (Brownian foundation + Grassmann/Ising, items 1, 3,
  ~9.5 h):** opens `08.14-statistical-field-theory/`. Item 1 is the
  path-integral *prequel*; item 3 is the lattice-Ising *bridge*.
  Independent of each other; produce together.
- **Batch B (lattice-gauge confinement, items 2, 6, ~7 h):** extends
  `08.08-lattice-gauge/`. Item 2 (strong-coupling / area law) is the
  headline; item 6 (roughening / phase diagram) depends on it.
- **Batch C (large-N + lattice fermions, items 4, 5, ~7.5 h):** item 4
  (large-N) is independent; item 5 (lattice fermions) needs the
  Grassmann unit (item 3) from Batch A and the Wilson-LGT unit
  (`08.08.01`, shipped).
- **Optional Batch D (P3+P4, items 7-11, ~9 h):** the φ⁴ ENRICH,
  Pfaffian/dimer split-out, Gaussian-field ENRICH, matrix-model
  pointer, notation pins — after P1+P2 lands.

**Originator-prose targets.** Mandatory originator-prose items:

- **Item 1** (`08.14.01` Brownian / path integral): Wiener 1923 (Wiener
  measure) + Kac 1949 (Feynman-Kac) + Feynman 1948. Cite all three.
- **Item 2** (`08.08.04` strong-coupling / confinement): **Wilson 1974
  — sole originator** of lattice gauge theory and the strong-coupling
  confinement argument. Apex; paraphrase Wilson 1974 directly.

Joint originator-citations:

- **Item 3 (Grassmann / Ising):** Berezin 1966; Schultz-Mattis-Lieb
  1964; Kasteleyn 1963.
- **Item 4 (large-N):** Stanley 1968 (O(n→∞)); 't Hooft 1974 (matrix).
- **Item 5 (lattice fermions):** Nielsen-Ninomiya 1981; Wilson 1975;
  Kogut-Susskind 1975.
- **Item 6 (roughening / phase diagram):** Creutz 1980.
- **Item 8 (Pfaffian / dimer):** Kasteleyn 1961; Fisher-Temperley 1961.

**Notation crosswalk concerns (ID-specific).** Recorded inline in the
Master sections of each new unit:

- **Coupling collision:** ID lattice gauge $\beta = 1/g_0^2$ vs
  stat-mech $\beta = 1/T$ — already live in `08.08.02`. Pin in
  `08.08.04`.
- **Grassmann / Berezin:** $\int d\bar\psi\,d\psi$, $\mathrm{Pf}(A)$;
  crosswalk to `08.10.09`. Pin in `08.14.02`.
- **Wiener measure:** $dW$, diffusion constant, lattice spacing $a$ as
  UV cutoff; crosswalk to `08.07.01`. Pin in `08.14.01`.
- **$N$ vs $n$:** large-N rank vs O(n) component count. Pin in
  `08.14.03`.

**DAG edges.** New prerequisites for P1+P2 (assumes the shipped
`08-stat-mech/` units `08.01.02`, `08.02.01`, `08.02.03`, `08.03.01`,
`08.04.*`, `08.06.01`, `08.07.01`, `08.08.01`-`.03`, `08.09.01`,
`08.10.03`/`.05`/`.06`/`.09` are present):

- `08.14.01` (Brownian / path integral) ← {`08.06.01` Gaussian field,
  `08.07.01` path integral (lateral — prequel)}; → `08.06.01`
  ENRICH, lateral to `08.09.01`.
- `08.08.04` (strong-coupling / area law) ← {`08.08.01`, `08.08.02`,
  `08.04.03` beta function (lateral)}; → `08.08.05`.
- `08.14.02` (Grassmann / Ising) ← {`08.03.01` Onsager, `08.01.02`
  Ising}; → `08.14.04`, `08.14.05`.
- `08.14.03` (large-N) ← {`08.02.01` mean field, `08.02.03`
  Mermin-Wagner (lateral, O(n))}; → `08.14.06`.
- `08.14.04` (lattice fermions) ← {`08.08.01`, `08.10.09`, `08.14.02`}.
- `08.08.05` (roughening / phase diagram) ← `08.08.04`.
- `08.14.05` (Pfaffian / dimer) ← `08.14.02`.
- `08.14.06` (matrix-model pointer) ← `08.14.03`.

**Lean status.** Per the bio/chem/applied-physics prose-first memory
and playbook, these statistical-field-theory units are **prose-first**:
`lean_status: none` is appropriate for all `08.14.*` and `08.08.04`-`.05`
units (the shipped `08.07.*`, `08.08.*`, `08.09.*` units already carry
`lean_status: none`). The contract lift is multi-section Master prose +
originator paraphrase, not formalisation. (Exception worth a flag:
the Grassmann/Berezin determinant identity and the Pfaffian could
support a small Lean stub, but it is not required and not blocking.)

**Chapter structure.** Adds one new sub-chapter and extends one:

- **`08.14-statistical-field-theory/`** — items 1, 3, 4, 5, 8, 10
  (Brownian / Wiener / Feynman-Kac; Grassmann / Ising; large-N;
  lattice fermions; Pfaffian / dimer; matrix-model pointer). Optional
  alias `08.14-euclidean-field-theory/`.
- **`08.08-lattice-gauge/`** — items 2, 6 (strong-coupling / area law;
  roughening / phase diagram), extending `08.08.01`-`08.08.03`.

Extends (ENRICH, no new ids):
- **`08.10-qft/`** — item 7 (φ⁴ diagrams as statistical perturbation
  series).
- **`08.06-gaussian/`** — item 9 (Gaussian field as random-walk
  continuum limit).

**Composite note.** Unlike Baxter (the unique exactly-solved entry),
Itzykson-Drouffe **shares its centre of mass with the already-shipped
field-theoretic core of `08-stat-mech/`** and with **Kardar 2.15
(running in parallel)**. The overlap with Kardar is partitioned per the
header note: **Kardar owns critical/RG/continuous-spin; ID owns
path-integral/Brownian/lattice-gauge/large-N/lattice-fermion.** The
strong-coupling / area-law unit (`08.08.04`) and the Brownian /
Feynman-Kac unit (`08.14.01`) are the two load-bearing net-new
additions; both are ID-exclusive and do not collide with Kardar.

---

## §5 What this plan does NOT cover

- **Itzykson-Drouffe Vol. 2.** Per the wave-loop hard-stops, **Vol. 2
  (Strong Coupling, Monte Carlo Methods, Conformal Field Theory, and
  Random Systems) is out of scope** for this audit. Vol. 2's
  conformal-field-theory chapters overlap `08.06.02-conformal-criticality`
  (a shipped stub) and belong to a *separate FT entry / audit* if Vol. 2
  is ever listed. The matrix-model / random-surface material (item 10
  pointer), the full Monte-Carlo-methods treatment, the disordered /
  random-systems chapters (spin glasses, replica), and the
  finite-size-scaling / conformal-bootstrap material are all Vol. 2 —
  flagged here only as pointers, not produced.
- **Critical phenomena / ε-expansion deepening.** Owned by **Kardar
  2.15** (parallel audit). The shipped `08.04.*` RG block and
  `08.04.02-wilson-fisher` are referenced but not deepened here; the
  Ginzburg-criterion / upper-critical-dimension derivation is yielded
  to Kardar.
- **Exactly-solved lattice models / Yang-Baxter / Bethe ansatz / corner
  transfer matrix.** Owned by **Baxter 2.12** (shipped in
  `08.13-exactly-solved-models/`). ID's Ch. 2 Ising solution is the
  *Grassmann / free-fermion* route (item 3), explicitly distinct from
  Baxter's transfer-matrix route and not a re-audit of `08.13.*`.
- **Canonical (Minkowski / operator) quantum field theory.** The
  `content/12-quantum/` canonical-QFT chapter
  (`12.12.*`, `12.16.*`) is the operator-formalism counterpart; ID is
  strictly Euclidean / path-integral. Not duplicated. (The shipped
  `08.10.*` Euclidean-QFT sub-chapter is the relevant overlap and is
  treated as shipped prerequisite, not re-audited.)
- **Continuum lattice QCD spectroscopy and modern Monte-Carlo
  algorithms.** Hybrid Monte Carlo, improved actions, chiral fermions
  (Ginsparg-Wilson / overlap / domain-wall), finite-temperature QCD —
  post-1989 developments beyond Vol. 1, and partly Vol. 2 / modern
  literature. Out of scope; item 5 Master gives a single pointer to
  Ginsparg-Wilson.
- **Rigorous constructive field theory.** Glimm-Jaffe / Osterwalder-
  Schrader axioms beyond the Wick-rotation correspondence already in
  `08.09.01`; the constructive-QFT programme is not in ID's territory
  and not in scope.
- **Line-number problem inventory.** ID's chapter-end problems form a
  separate corpus; inventory deferred under the reduced-audit
  constraint.

---

## §6 Acceptance criteria for FT equivalence (Itzykson-Drouffe Vol. 1)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9,
*Statistical Field Theory Vol. 1* is at equivalence-coverage when:

- ≥95% of ID's named results (and worked free-energy / partition-
  function formulae) in Chs. 1-6 map to Babel Bible units **at
  ID-equivalent machinery depth** (currently ~45%; after P1 ~70%;
  after P1+P2 ~88%; after P1+P2+P3 ~94%; full ≥95% requires the
  deferred matrix-model / dimer split-outs and an ID problem-pack
  pass). Items 1 (Brownian / Feynman-Kac), 2 (strong-coupling / area
  law), 3 (Grassmann / Ising), 4 (large-N) are the highest-leverage
  individual gaps.
- ≥80% of ID's problems have a Codex equivalent worked example
  (currently ~25%; closing requires a dedicated ID problem-pack pass —
  out of scope for this reduced audit).
- ≥90% of ID's worked examples (random-walk propagator, Pfaffian Ising
  free energy, strong-coupling area-law coefficient / string tension,
  large-N saddle / gap equation, fermion-doubler count) appear in a
  unit (currently ~25%; P1+P2 brings to ~80%).
- Notation crosswalk pinned in Master sections per §4 (Euclidean-action
  sign, $\beta = 1/g_0^2$ vs $1/T$ collision, Grassmann/Berezin +
  Pfaffian, Wiener measure, $N$ vs $n$), with explicit crosswalk to
  `08.10.09`, `08.07.01`, `08.08.02`. No standalone
  `notation/itzykson-drouffe.md` needed.
- DAG: an unbroken prerequisite chain
  Brownian / Wiener → free Euclidean field → path integral → Wick
  rotation; and Ising → Grassmann / free-fermion solution; and Wilson
  action → strong-coupling expansion → area law / string tension →
  roughening; and mean field → large-N. Currently breaks at the
  Brownian *prequel* (item 1) and at the area-law *derivation*
  (item 2, the corpus states but does not derive it).
- Pass-W weaving connects the new `08.14.*` and `08.08.04`-`.05` units
  to the shipped `08.06.01` Gaussian field, `08.07.01` path integral,
  `08.09.01` Wick rotation, `08.03.01` Onsager, `08.08.01`-`.03`
  lattice gauge, `08.04.*` RG, and `08.10.09` fermionic Fock space.
- **Originator-prose units shipped:** items 1 (`08.14.01`
  Brownian/Feynman-Kac — Wiener 1923, Kac 1949, Feynman 1948) and 2
  (`08.08.04` strong-coupling/confinement — Wilson 1974, sole
  originator) require explicit paraphrase of the primary sources with
  `[ref:]` citations.

**Reduced-audit caveat.** Per AGENTIC_EXECUTION_PLAN.md §6.6 hard rule,
P5 verification cannot mark Itzykson-Drouffe Vol. 1 as
`equivalence-covered` until a **full audit replaces this reduced one**
(CUP hardback/paperback acquired into `reference/textbooks-extra/` or a
section-by-section local TOC inventory). The reduced status applies
even if all 11 punch-list items ship.

**Prerequisite alert.** Itzykson-Drouffe sits at FT 2.13 — after the
Section 1 mathematics anchors and after the Section 2 stat-mech
foundations (2.09 Goldenfeld RG, 2.10 Landau Vol 5, 2.12 Baxter). The
corpus must keep the shipped field-theoretic core of `08-stat-mech/`
(path integral, Wick, Gaussian field, RG block, Wilson action, φ⁴ +
diagrams, fermionic Fock space) available as prerequisites and lateral
references for all new units. This plan does not re-audit those
prerequisites, nor the Baxter `08.13.*` block, nor the Kardar-owned
critical / RG deepening.

**Honest scope.** **Moderate equivalence gap — highest base overlap of
any Section-2 stat-mech audit so far, with a concentrated net-new
requirement.** Unlike Baxter (a large net-new exactly-solved-models
build), Itzykson-Drouffe's continuum-field / RG / Euclidean-QFT spine
is **already largely shipped** (path integral, Wick, Gaussian field,
mean field, SSB, full RG block, Wilson-Fisher, φ⁴ + diagrams + one-loop
renormalisation, Wilson action — ~45% topic overlap). The gap is
concentrated in **four ID-signature strands**: the Brownian /
Wiener / Feynman-Kac *foundation* of the path integral, the
Grassmann / Pfaffian *solution* of the 2D Ising model, the
strong-coupling-expansion *derivation* of the area law / confinement /
string tension (the corpus states the area law but never derives it),
and the large-N / lattice-fermion *sequel*. The P1 batch is **4 new
units, all net-new, two of them originator-prose** (Wiener/Kac and
Wilson). P1+P2 is **6 new units + 1 deepening**. This is a focused
campaign whose single most important additions are the strong-coupling
/ confinement derivation (`08.08.04`) and the Brownian / Feynman-Kac
foundation (`08.14.01`).

---

## §7 Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md` (entry 2.13).
- **Local copy:** **NOT RESOLVED.** `reference/` was searched
  (`find reference -iname "*itzykson*" -o -iname "*drouffe*"` — no
  hits; the companion Itzykson-Zuber *QFT* is also absent). This is the
  dominant factor making the audit `reduced`. Recommended remediation:
  acquire the **CUP paperback** (ISBN 0-521-40806-5, in print) and scan
  into `reference/textbooks-extra/` as `Itzykson, Drouffe - Statistical
  Field Theory Vol 1 (CUP 1989).pdf`. Promote audit to `full` after.
- **Citation form:** C. Itzykson, J.-M. Drouffe, *Statistical Field
  Theory, Volume 1: From Brownian Motion to Renormalization and Lattice
  Gauge Theory* (Cambridge Monographs on Mathematical Physics,
  Cambridge University Press, 1989). ISBN 0-521-34058-4.
- **Peer / companion sources (peer-anchors for §1):**
  - G. Parisi, *Statistical Field Theory* (Addison-Wesley, 1988) — the
    closest contemporaneous companion; same Brownian-to-RG-to-gauge
    arc.
  - J. Zinn-Justin, *Quantum Field Theory and Critical Phenomena*
    (Oxford UP, 4th ed. 2002) — the encyclopaedic reference for the
    path-integral / RG / critical-phenomena synthesis.
  - M. Kardar, *Statistical Physics of Fields* (CUP, 2007) — FT 2.15;
    the parallel-audit companion; owns the critical / RG / continuous-
    spin axis partitioned away from this plan.
  - I. Montvay, G. Münster, *Quantum Fields on a Lattice* (CUP, 1994)
    and M. Creutz, *Quarks, Gluons and Lattices* (CUP, 1983) — the
    lattice-gauge / strong-coupling / lattice-fermion references for
    items 2, 5, 6.
- **Originator references** (cited in §3-§4 punch-list):
  N. Wiener, "Differential space" (*J. Math. Phys. (MIT)* 2:131 (1923));
  M. Kac, "On distributions of certain Wiener functionals"
  (*Trans. Amer. Math. Soc.* 65:1 (1949)); R. P. Feynman, "Space-time
  approach to non-relativistic quantum mechanics" (*Rev. Mod. Phys.*
  20:367 (1948)); F. A. Berezin, *The Method of Second Quantization*
  (Academic Press, 1966); T. D. Schultz, D. C. Mattis, E. H. Lieb,
  "Two-dimensional Ising model as a soluble problem of many fermions"
  (*Rev. Mod. Phys.* 36:856 (1964)); P. W. Kasteleyn, "Dimer statistics
  and phase transitions" (*J. Math. Phys.* 4:287 (1963)); K. G. Wilson,
  "Confinement of quarks" (*Phys. Rev. D* 10:2445 (1974)); H. B.
  Nielsen, M. Ninomiya, "Absence of neutrinos on a lattice"
  (*Nucl. Phys. B* 185:20; 193:173 (1981)); J. Kogut, L. Susskind,
  "Hamiltonian formulation of Wilson's lattice gauge theories"
  (*Phys. Rev. D* 11:395 (1975)); H. E. Stanley, "Spherical model as the
  limit of infinite spin dimensionality" (*Phys. Rev.* 176:718 (1968));
  G. 't Hooft, "A planar diagram theory for strong interactions"
  (*Nucl. Phys. B* 72:461 (1974)); M. Creutz, "Monte Carlo study of
  quantized SU(2) gauge theory" (*Phys. Rev. D* 21:2308 (1980)).
- **Local copy retention.** If acquired, store at
  `reference/textbooks-extra/Itzykson, Drouffe - Statistical Field
  Theory Vol 1 (CUP 1989).pdf` — not in `reference/fasttrack-texts/`,
  which is reserved for free-license / public-domain texts
  (Itzykson-Drouffe is commercial).
