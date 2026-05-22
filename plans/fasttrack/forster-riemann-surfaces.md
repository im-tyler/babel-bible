# Forster — *Lectures on Riemann Surfaces* (Fast Track 1.07-paired) — Audit + Gap Plan

**Book:** Otto Forster, *Lectures on Riemann Surfaces* (Springer GTM
81, 1981; corrected hardcover 1991; trans. Gilligan from German
*Riemannsche Flächen*, Springer 1977). ISBN 0-387-90617-7.

**Fast Track entry:** 1.07 (Riemann-surfaces, one-complex-variable;
paired with Donaldson, Miranda, Farkas-Kra). Forster is the
**classical analytic / sheaf-theoretic anchor** — distinct from
Donaldson's PDE / bundle-theoretic and Miranda's algebraic-curves
perspectives.

**Purpose:** lightweight P1-lite + P2 + P3-lite pass per orchestration
protocol — punch-list of new units + deepenings to reach
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 threshold. Peer audit
to `donaldson-riemann-surfaces.md`; overlap with Donaldson plan flagged
so the campaigns share infrastructure rather than double-count.

Babel Bible's `06-riemann-surfaces` ships 22 units (just-shipped `06.04.04`
Serre duality already cites Forster §17). Topic-level coverage of
Forster's core is high; **real gaps are on Forster's distinctively
analytic spine** — Mittag-Leffler on Riemann surfaces, additive and
multiplicative Cousin problems, Stein-manifold theory (Theorem A/B in
dimension 1), Behnke-Stein for non-compact surfaces, Runge approximation
on Riemann surfaces, branched-covering category, $H^1$-finiteness via
Schwartz.

---

## §1 What Forster's book is for

The canonical analytic / sheaf-theoretic introduction in the
Cartan-Serre-Behnke-Grauert tradition. Donaldson develops via PDE on
a Riemannian manifold (Hodge star, harmonic forms, Dirichlet energy);
Miranda via algebraic curves (divisors, linear systems, embeddings);
Forster via **sheaves of holomorphic functions, Čech cohomology, and
the Behnke-Stein existence theorems**. ~250 pages, three chapters:

- **Chapter 1 — Covering Spaces (§§1-10):** Riemann surfaces from
  gluing patches, holomorphic / meromorphic functions, inverse
  function theorem on a Riemann surface, general existence theorem
  for analytic continuation, **branched and unbranched coverings**,
  deck transformation groups, universal cover, Galois coverings,
  **Riemann's existence theorem** for $P(z, w) = 0$.
- **Chapter 2 — Compact Riemann Surfaces (§§11-22):** the cohomology
  machinery. Differential forms, Čech cohomology, the **finiteness
  theorem** $\dim H^1(X, \mathcal{O}) < \infty$ via Schwartz's
  compact-operator theorem, divisors, **Riemann-Roch**
  $\dim L(D) - \dim I(D) = 1 - g + \deg D$, **Serre duality**
  $I(D) \cong L(K-D)^*$, Abel, Jacobi inversion, theta functions.
- **Chapter 3 — Non-Compact Riemann Surfaces (§§23-31):** the
  Forster-distinctive Behnke-Stein-Cartan-Serre block. **Cousin I/II**,
  **Runge approximation on RS**, **Theorems A and B** for Stein RS,
  the **Behnke-Stein theorem** (non-compact ⇒ Stein) — peculiar to
  Forster among the FT 1.07 quartet — and **Mittag-Leffler on RS**
  as apex.

Distinctive Forster choices:

1. **Sheaf-theoretic from §11; no scheme theory.** Coherent analytic
   sheaves + Čech as working language; never enters Hartshorne-style
   AG. Distinct from a scheme audience.
2. **Cousin I + II** (§§26-27). Codex has zero coverage.
3. **Mittag-Leffler on Riemann surfaces** (§26/§28) — analytic apex
   of Chapter 3; not headline in Donaldson, Miranda, or Farkas-Kra.
4. **Cohomology of Stein manifolds (1-d)** — Theorems A and B
   (§§28-30). Donaldson skips Stein theory entirely.
5. **Behnke-Stein theorem on non-compact RS** (§29). Non-compact ⇒
   Stein. **Largest Forster-distinctive gap in Babel Bible.**
6. **Rigorous gluing-patches foundation** (§§1-2). More explicit than
   Donaldson — chart-atlas, IFT on RS, maximal atlas. Babel Bible unit
   doesn't unpack at this level.
7. **Branched coverings as a category** (§§4-6). Branched extensions
   of $X' \to Y \setminus B$ via local-monodromy criterion;
   identification of $\mathbb{P}^1$ branched covers with finite
   extensions of $\mathbb{C}(z)$. Not in Babel Bible.
8. **Riemann's existence theorem** (§§7-8). Every compact RS arises
   from $P(z, w) = 0$, via Mittag-Leffler. The concrete
   complex-analytic ↔ algebraic-curve bridge.
9. **Schwartz finiteness for $H^1(X, \mathcal{O})$** (§§14-15). Banach
   compact-perturbation argument; Donaldson uses Hodge instead.
10. **Mittag-Leffler / Cousin I / II as one arc** (§§26-28). The
    climax-narrative of Chapter 3 as Theorem B applied to the
    principal-part sheaf — Forster's pedagogical contribution.
11. **254 pages, ~50 exercises.** Less ground than Donaldson but
    covers non-overlapping analytic spine Donaldson skips entirely.

Forster does **not** cover: PDE uniformisation, Hodge decomposition,
Gauss-Manin / VHS, Schottky, projective-embedding criteria beyond
Riemann's existence — all Donaldson territory.

---

## §2 Coverage table (Babel Bible vs Forster)

Cross-referenced against the 22-unit Codex Riemann-surfaces chapter,
listed below. ✓ = covered at Forster-equivalent depth, △ = topic
present but Babel Bible unit shallower (typically templated v0.5 Strand-B
prose), ✗ = not covered.

**Existing Babel Bible units** (`find content/06-riemann-surfaces -name
"*.md" | sort`): `06.01.01-holomorphic-function`,
`06.01.02-cauchy-integral-formula`, `06.01.03-residue-theorem`,
`06.01.04-analytic-continuation`, `06.01.05-meromorphic-function`,
`06.01.06-riemann-mapping-theorem`, `06.02.01-branch-point-ramification`,
`06.03.01-riemann-surface`, `06.03.02-genus-riemann-surface`,
`06.03.03-uniformization-theorem`,
`06.04.01-riemann-roch-compact-riemann-surfaces`,
**`06.04.04-serre-duality-curves`** (just-shipped, Forster §17 cited),
`06.05.01-divisor-riemann-surface`, `06.05.02-holomorphic-line-bundle`,
`06.05.03-riemann-hurwitz-formula`, `06.06.01-holomorphic-one-form`,
`06.06.02-period-matrix`, `06.06.03-jacobian-variety`,
`06.06.04-abel-jacobi-map`, `06.06.05-theta-function`,
`06.07.01-holomorphic-several-variables`, `06.07.02-hartogs-phenomenon`.

### Chapter 1 — Covering Spaces (§§1-10)

| Forster topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| §1 Definition of RS (chart-atlas, gluing patches) | `06.03.01-riemann-surface` | △ | Definition shipped; Forster's explicit gluing-patches (maximal atlas, equivalence) implicit. Mild depth gap. |
| §1 Examples — $\mathbb{P}^1$, tori, $P(z,w)=0$, hyperelliptic | partial | △ | Scattered in Master sections; no running-examples unit (overlap with Donaldson item 18). |
| §2 Holomorphic / meromorphic functions on RS | `06.01.01`, `06.01.05` | ✓ | Shipped at depth. |
| §3 Inverse function theorem on RS; identity | partial in `06.01.04` | △ | Forster's local-form-of-holomorphic-map theorem implicit. |
| §4 Branch points / ramification | `06.02.01-branch-point-ramification` | ✓ | Shipped. Forster citation would strengthen `tier_anchors`. |
| §§4-6 **Branched coverings as a category** | — | ✗ | **Gap.** Functorial / categorical construction of branched extensions absent. Branch-point unit covers local picture only. |
| §6 Galois / deck-transformation theory | partial in `06.03.03` Master | △ | Universal cover / monodromy mentioned; Galois / deck-group treatment not unpacked. |
| §7 General analytic-continuation existence theorem | partial in `06.01.04` | △ | Forster's monodromy-along-paths formulation not unpacked. |
| §8 **Riemann's existence theorem** ($P(z,w) = 0$ ↔ compact RS; finite extensions of $\mathbb{C}(z)$) | — | ✗ | **Gap (priority-2/3).** Forster-signature; every compact RS is the normalisation of a plane algebraic curve. |
| §§9-10 Algebraic functions, monodromy of $P(z, w) = 0$ | — | ✗ | Pointer to Riemann's existence. |

### Chapter 2 — Compact Riemann Surfaces (§§11-22)

Forster's sheaf-theoretic spine begins. **Heavy overlap with Donaldson
Part II — most items co-owned in the composite batch.**

| Forster topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| §11 Differential forms on RS | partial in `06.06.01` | △ | Composite — same gap as Donaldson (Hodge-star / $(p,q)$-form vocabulary). |
| §12 1-form integration; periods | `06.06.02-period-matrix` | △ | Composite — Donaldson item 16. |
| §13 **Sheaves on RS; Čech cohomology** | — | ✗ | **Gap (high priority).** Co-owned with Donaldson item 1. One unit serves both. |
| §14 **Schwartz finiteness $\dim H^1(X, \mathcal{O}) < \infty$** | — | ✗ | **Gap (high priority — Forster-distinctive).** Donaldson proves via Hodge (Donaldson item 2); Forster's compact-operator proof is *not* co-owned. |
| §16 **Divisors + Riemann-Roch (Forster's proof)** | `06.04.01` | △ | Composite — Donaldson item 4. |
| §17 **Serre duality (residue pairing)** | `06.04.04-serre-duality-curves` (**just shipped**) | ✓ | **Covered.** Forster §17 cited; serves both books. |
| §18 Riemann-Hurwitz | `06.05.03-riemann-hurwitz-formula` | ✓ | Shipped. |
| §§19-20 $\dim \Omega^1(X) = g$ | `06.06.01` | △ | Composite — Donaldson item 17. |
| §21 Abel's theorem | `06.06.04-abel-jacobi-map` | ✓ | Shipped. |
| §§21-22 Jacobi inversion (theta proof) | — | ✗ | Composite — Donaldson item 6. |
| §22 Theta functions, vanishing theorem | `06.06.05-theta-function` | △ | Composite — Donaldson item 7; vanishing not proved. |

### Chapter 3 — Non-Compact Riemann Surfaces (§§23-31)

**Forster's distinctive territory.** Donaldson skips this entire block.
**Zero overlap with Donaldson plan; all gaps owned by Forster plan.**

| Forster topic | Babel Bible unit | Status | Note |
|---|---|---|---|
| §23 Sheaf cohomology on non-compact spaces; fine-sheaf acyclicity | — | ✗ | **Gap.** Foundation for §§24-30. |
| §24 Dolbeault iso $H^1(X, \mathcal{O}) = H^{0,1}_{\bar\partial}(X)$ | — | ✗ | **Gap.** Sheaf $H^1$ ↔ $\bar\partial$. |
| §§25-26 **Cousin I (additive)** on non-compact RS | — | ✗ | **Gap (high priority — Forster-distinctive).** Local principal-parts data ⇒ global meromorphic function. |
| §26 Cousin I cohomologically: $H^1(X, \mathcal{O}) = 0 \Rightarrow$ solvable | — | ✗ | **Gap.** Same unit. |
| §27 **Cousin II (multiplicative)** | — | ✗ | **Gap (high priority — Forster-distinctive).** Prescribed divisors; obstruction in $H^2(X, \mathbb{Z})$. |
| §27 **Weierstrass product theorem on non-compact RS** | — | ✗ | **Gap.** Cousin II corollary. |
| §28 **Mittag-Leffler on non-compact RS** | — | ✗ | **Gap (high priority — Forster-distinctive headline).** Apex of Theorem B. |
| §29 **Theorem A** | — | ✗ | **Gap (high priority).** Cartan-Serre A in dim 1. |
| §29 **Theorem B** ($H^q(X, \mathcal{F}) = 0$, $q \geq 1$, Stein, coherent) | — | ✗ | **Gap (high priority).** Headline vanishing; Cousin / Mittag-Leffler derive. |
| §29 **Stein Riemann surface** definition | — | ✗ | **Gap.** Definition unit. |
| §29 **Behnke-Stein theorem** (non-compact ⇒ Stein) | — | ✗ | **Gap (highest priority — Forster-distinctive headline).** Foundation for the Cartan-Serre chain on RS. |
| §30 **Runge approximation on RS** | — | ✗ | **Gap (high priority).** Generalises Runge on $\mathbb{C}$. |
| §31 Line bundles trivial on non-compact RS | partial in `06.05.02` | △ | Cousin-II corollary; Master-section addition worth adding. |

### Aggregate coverage estimate (vs Forster)

- **Theorem layer:** ~55% topic, ~30% Forster-proof-depth. Gap in
  Chapter 3 (entire Stein / Cousin / Behnke-Stein / Mittag-Leffler /
  Runge block, zero coverage) + Schwartz finiteness + Riemann's
  existence + branched-covering category. After priority-1: topic
  ~90%, proof-depth ~70%. After priority-1+2: ~92%.
- **Exercise layer:** ~50 Forster exercises vs templated 7-block.
  Composite with Donaldson exercise pack, deferred.
- **Worked-example layer:** ~45%. Running examples overlap Donaldson;
  composite item (Donaldson item 18).
- **Notation layer:** ~75% aligned. Forster $X$, $\mathcal{O}$,
  $\mathcal{M}$, $L(D) = H^0(\mathcal{O}(D))$, $I(D) =
  H^1(\mathcal{O}(D))$. $L(D)/I(D)$ Forster-specific.
- **Sequencing layer:** ~60%. Babel Bible DAG matches Chapter-2 flow;
  Chapter-3 chain (non-compact sheaf ⇒ Theorem B ⇒ Cousin ⇒
  Mittag-Leffler) absent.
- **Intuition layer:** ~50%. Sheaf intuition partial; Stein intuition
  (holomorphic convexity, why obstructions vanish on non-compact)
  absent.
- **Application layer:** ~50%. Mittag-Leffler / Weierstrass on
  $\mathbb{C}$ implicit in `06.01.05`; RS generalisations absent.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

Codex covers Forster Chapters 1-2 reasonably at topic level; the
Donaldson plan handles depth deepenings on the composite block.
**Forster's distinctive contribution to Babel Bible is Chapter 3 — the
Stein / Cousin / Behnke-Stein / Mittag-Leffler / Runge block.** New
units open `06.04-cohomology/` (already opened by `06.04.04`) and a
new `06.09-stein-and-cousin/`.

**Overlap convention.** Items tagged **[Forster-only]** (sole-owned by
this plan), **[Composite]** (also in Donaldson plan; one unit serves
both — production accounted to Donaldson). Composite items listed
with cross-reference, not double-counted.

### Priority 1 — Forster-distinctive analytic-spine (Chapter 3 block)

Forster's signature pedagogical contribution. **Donaldson plan covers
none of these.** Without them Codex cannot claim Forster-equivalence.

1. **`06.09.01` Stein Riemann surfaces.** **[Forster-only]** Forster
   §29; Cartan-Thullen 1932 / Stein 1951 originators; Grauert 1958
   for higher-dim. ~1800 words. Master: holomorphic convexity;
   equivalence on RS (non-compact ⇒ Stein); $\mathcal{O}(X)$ as
   Fréchet algebra; setup for Theorem A/B. Foundational for items 2-5.

2. **`06.09.02` Theorem A and B for Stein RS.** **[Forster-only]**
   Forster §29; Cartan séminaire 1951-52, Cartan-Serre 1953 (CRAS
   237). ~2200 words. Master: **A** — coherent sheaves generated by
   global sections; **B** — $H^q(X, \mathcal{F}) = 0$ for $q \geq 1$.
   Forster's 1-d proof: exhaustion by relatively-compact Runge opens
   + Schwartz finiteness + limit passage. Worked: $X = \mathbb{C}$,
   $\mathcal{F} = \mathcal{O}$, $H^1 = 0$ recovers classical
   Mittag-Leffler. **Headline of Forster-distinctive block.**

3. **`06.09.03` Behnke-Stein on non-compact RS.** **[Forster-only]**
   Forster §29; Behnke-Stein 1949 (Math. Ann. 120) originator.
   ~1800 words. Master: every non-compact connected RS is Stein;
   proof via Behnke-Stein exhaustion (concentric Runge domains);
   consequence chain (line bundles trivial; Cousin I/II solvable;
   Mittag-Leffler holds). **Largest Forster gap; foundational for 4-7.**

4. **`06.09.04` Cousin I (additive).** **[Forster-only]** Forster
   §§25-26; Cousin 1895 (Acta Math. 19). ~1500 words. Master: data
   $(U_i, f_i)$ with $f_i - f_j \in \mathcal{O}(U_i \cap U_j)$ →
   global $f \in \mathcal{M}(X)$ with $f|_{U_i} - f_i \in \mathcal{O}$.
   Obstruction in $H^1(X, \mathcal{O})$; vanishes non-compact.

5. **`06.09.05` Cousin II (multiplicative).** **[Forster-only]**
   Forster §27; Cousin 1895. ~1500 words. Master: prescribed local
   divisors. Exponential sequence $0 \to \mathbb{Z} \to \mathcal{O}
   \to \mathcal{O}^* \to 0$ → obstruction in $H^2(X, \mathbb{Z})$;
   non-compact ⇒ trivial → Cousin II solvable; line bundles trivial.

6. **`06.09.06` Mittag-Leffler on RS.** **[Forster-only]** Forster
   §28; Mittag-Leffler 1884 plane case; Behnke-Stein 1949 RS case.
   ~1700 words. Master: plane case as warm-up; RS generalisation
   (prescribed principal parts realised by global meromorphic
   function) via Cousin I. Worked: $\mathbb{C}$, $\mathbb{C}^*$.
   **Apex unit; Forster's headline.**

7. **`06.09.07` Runge approximation on RS.** **[Forster-only]**
   Forster §30; Runge 1885; Behnke-Stein 1949 RS extension. ~1500
   words. Master: classical Runge lifted to non-compact RS; setup
   for items 2-3, 6 exhaustion arguments.

### Priority 2 — Forster-distinctive proofs + covering-space block

Forster-distinctive proofs of theorems already (or soon-to-be) covered,
plus the branched-covering / Riemann-existence block from Chapter 1.

8. **`06.04.05` Schwartz finiteness for $H^1(X, \mathcal{O})$ on
   compact RS.** **[Forster-only]** Forster §§14-15; Schwartz 1950.
   ~1700 words. Master: Čech cocycles in Banach; obstruction as
   compact perturbation of injection ⇒ $\dim \mathrm{coker} < \infty$.
   **Forster-distinctive proof; Donaldson uses Hodge (item 2).**

9. **`06.02.02` Branched coverings as a category.** **[Forster-only]**
   Forster §§4-6; Riemann 1851 / Klein 1882. ~1800 words. Master:
   unbranched cover $X' \to Y \setminus B$; branched-extension theorem
   (unique extension if local monodromy finite); deck / Galois covers.
   Worked: $\sqrt{z}$ extends to double cover of $\mathbb{P}^1$
   branched at $\{0, \infty\}$.

10. **`06.02.03` Riemann's existence theorem for algebraic curves.**
    **[Forster-only]** Forster §§7-8; Riemann 1857 (*Theorie der
    Abel'schen Functionen*). ~2000 words. Master: every compact RS
    arises as desingularisation of $P(z, w) = 0$; $\mathcal{M}(X)$
    finite over $\mathbb{C}(z)$; categorical equivalence
    compact-RS ↔ smooth-projective-curves. Depends on item 6.
    **Conceptual climax of Chapter 1.**

11. **`06.04.06` Dolbeault iso $H^1(X, \mathcal{O}) =
    H^{0,1}_{\bar\partial}(X)$.** **[Forster-only]** Forster §24;
    Dolbeault 1953 (CRAS 236). ~1500 words. Master: $\mathcal{E}^{0,1}$
    fine ⇒ resolution gives Dolbeault iso. Bridges sheaf cohomology
    (Donaldson 1 / Forster §13) to Hodge (Donaldson 2).

12. **Deepen `06.03.01-riemann-surface` (gluing patches).**
    **[Forster-only]** Add Forster §§1-3 explicit chart-atlas: inverse
    function theorem on RS, maximal atlas, equivalent atlases,
    local-form-of-holomorphic-map theorem.

13. **Deepen `06.05.02-holomorphic-line-bundle` (triviality on
    non-compact RS).** **[Forster-only]** Forster §31 — every
    holomorphic line bundle on non-compact RS trivial (corollary of
    Cousin II / item 5).

### Priority 3 — composite-batch overlap with Donaldson (cross-references)

14. **`06.04.02` Čech cohomology of analytic sheaves on RS.**
    **[Composite — Donaldson item 1.]** Forster §13. *Production owned
    by Donaldson plan.* Forster framing adds analytic-sheaf vocabulary
    ($\mathcal{O}, \mathcal{M}, \mathcal{O}^*, \mathcal{O}(D)$) and
    the obstruction-class interpretation Chapter 3 needs.

15. **Deepen `06.04.01-riemann-roch` (Forster §16 proof).**
    **[Composite — Donaldson item 4.]** Same divisor-bumping induction
    + Serre duality proof; cite both books.

16. **Deepen `06.06.05-theta-function` and produce Jacobi inversion
    `06.06.06`.** **[Composite — Donaldson items 6-7.]** Forster §22.

17. **Deepen `06.06.01-holomorphic-one-form` (Hodge dim-counting).**
    **[Composite — Donaldson item 17.]** Forster §§19-20.

18. **Deepen `06.05.03-riemann-hurwitz-formula` (Forster §18 proof).**
    **[Composite]** Forster's combinatorial / branched-cover counting
    proof as alternative-proof commentary. Low priority.

19. **Deepen `06.06.02-period-matrix` for Forster §12 framing.**
    **[Composite — Donaldson item 16].**

### Priority 4 — Survey / pointer items, optional

20. **`06.09.08` Survey: Cartan-Serre Stein theory in higher dim.**
    **[Forster-only — pointer]** Master-only; ~700 words. Pointer to
    Hörmander Ch. IV-VI / Grauert-Remmert *Theory of Stein Spaces*.

21. **Notation crosswalk (`notation/forster.md`).** **[Forster-only]**
    Forster-specific $L(D) / I(D)$ + sheaf names. ~400 words. Optional.

---

## §4 Implementation sketch (P3 → P4); overlap with Donaldson plan

**Minimum Forster-equivalence batch** = priority 1 (items 1-7):
**7 new units, all Forster-only (zero overlap with Donaldson plan).**
Production estimate (mirroring Donaldson / Cannas batches):

- ~3 h per typical new unit; ~4 h each for items 2, 3 (large,
  load-bearing).
- Priority 1: 2 × 4 + 5 × 3 = ~23 h.
- Priority 1+2: 23 h + 4 typical × 3 h + 2 deepenings × 1 h = ~37 h.
- **Priority 3 items (14-19) are deepenings already in Donaldson plan
  — producing Donaldson priority-1 closes them as a side-effect.**
  Central scheduling insight.

At 4-6 parallel production agents, priority-1 fits in a 2-day window.

**Composite Donaldson + Forster scheduling.** Recommended order:

- **Phase Composite-A (Donaldson priority-1, ~14 h):** Čech cohomology,
  Hodge decomp, Serre duality (already shipped), Hilbert PDE, main
  theorem; deepens Riemann-Roch and uniformization. Closes Forster
  priority-3 items 14-19.
- **Phase Forster-1 (~23 h):** Chapter 3 block, items 1-7. All
  Forster-only; zero Donaldson overlap. Run *after* Composite-A so
  Theorem B (item 2) cites the Čech unit without forward-declaration.
- **Phase Forster-2 (~12 h):** items 8-11. Item 8 cross-references
  Donaldson item 2; item 10 depends on item 6.
- **Phase Forster-3 (~3 h):** deepenings 12, 13.

**Batches within Forster Phase 1.**

- **F-A (items 1, 2, 3, ~10 h):** Stein foundation; opens
  `06.09-stein-and-cousin/`. Load-bearing.
- **F-B (items 4, 5, 6, 7, ~12 h):** Cousin / Mittag-Leffler / Runge,
  depends on F-A.

**Originator-prose targets** (each Forster-distinctive unit cites
originator + Forster):

- (1) Stein RS: Cartan-Thullen 1932 (Math. Ann. 106); Stein 1951;
  Grauert 1958.
- (2) Theorem A/B: Cartan séminaire 1951-52; Cartan-Serre 1953
  (CRAS 237); Serre 1955 *Faisceaux algébriques cohérents* (Ann.
  Math. 61) for the algebraic parallel.
- (3) Behnke-Stein 1949 (Math. Ann. 120, 430-461). Originator voice
  mandatory.
- (4, 5) Cousin I/II: Cousin 1895 (Acta Math. 19); H. Cartan 1934.
- (6) Mittag-Leffler 1884 (Acta Math. 4) plane case; Behnke-Stein 1949
  for RS.
- (7) Runge 1885 (Acta Math. 6); Behnke-Stein 1949 RS extension.
- (8) Schwartz 1950 (Bull. Sci. Math. 74).
- (9) Branched covers: Riemann 1851 *Grundlagen* (Inauguraldissertation);
  Klein 1882.
- (10) Riemann's existence: Riemann 1857 *Theorie der Abel'schen
  Functionen* (J. reine angew. Math. 54). Originator voice mandatory.
- (11) Dolbeault 1953 (CRAS 236).

**Notation crosswalk.** Small `notation/forster.md` for $L(D)/I(D)$,
choice of $X$ (vs Donaldson's $M$), and sheaf names. Defer unless
chapter-wide cleanup (item 21).

**DAG edges to add** (priority-1+2):

- `06.09.01` ← {`06.03.01`, `06.04.02-cech-cohomology` *(Donaldson)*}
- `06.09.02` ← {`06.09.01`, `06.04.02`, `06.09.07`}
- `06.09.03` ← {`06.09.01`, `06.09.07`}
- `06.09.04` ← {`06.09.02`, `06.09.03`}
- `06.09.05` ← {`06.09.02`, `06.09.03`, `06.05.02`}
- `06.09.06` ← {`06.09.04`, `06.01.05`}
- `06.09.07` ← {`06.01.06`, `06.09.01`}
- `06.04.05` (item 8) ← {`06.04.02`}; xref `06.04.03-hodge`
- `06.02.02` (item 9) ← {`06.02.01`, `06.03.01`}
- `06.02.03` (item 10) ← {`06.02.02`, `06.09.06`}
- `06.04.06` (item 11) ← {`06.04.02`, `06.06.01`}

---

## §5 What this plan does NOT cover

- Line-number-level inventory of every theorem / exercise across
  Forster's 31 sections. Defer.
- Forster's ~50 exercises vs. Codex templated 7-block. Composite
  with Donaldson exercise pack — P3 follow-up.
- **Donaldson-distinctive** material (PDE uniformisation; Hodge
  decomp; Gauss-Manin / VHS; Schottky; projective-embedding criteria
  beyond Riemann's existence). Donaldson plan owns.
- **Miranda-distinctive** algebraic-curves material (full linear-
  systems, hyperelliptic theory). Miranda plan owns.
- **Farkas-Kra-distinctive** function-theoretic / theta-deep machinery
  (theta with characteristics, Schottky-Klein prime form, Bergman
  kernel, automorphic forms). Farkas-Kra plan owns.
- Several-complex-variables Stein theory (Hörmander, Grauert-Remmert).
  Forster is dimension 1; higher-dim is item 20 pointer.
- **Composite-block accounting.** Items 14-19 are cross-references to
  Donaldson; production owned by Donaldson plan. Read this Forster
  plan as adding **~13 units** to Codex (priority-1: 7 + priority-2:
  4 new + 2 deepenings), not 21.
- Worked-example densification beyond priority-1+2 deepenings.
- Chapter-wide $M / X / \Sigma$ notation cleanup — joint maintenance
  pass; out of scope.
- Higher-genus moduli theory (Donaldson Ch. 13 / Mumford GIT
  territory).
- Gauge theory / Hitchin moduli downstream.

---

## §6 Acceptance criteria for FT equivalence (Forster)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Forster's named theorems map to Babel Bible units **at
  Forster-equivalent proof depth** (currently ~30%; after priority-1,
  ~75%; after priority-1+2, ~92%; with composite Donaldson priority-1
  in parallel, ~96%).
- ≥80% of Forster's exercises have a Codex equivalent (currently
  ~5%; composite Donaldson+Forster exercise pack closes this).
- ≥90% of Forster's worked examples reproduced in some Babel Bible unit
  (currently ~45%; priority-1+2 worked-example sections + composite
  running-examples unit (Donaldson item 18) bring this to ~90%).
- Notation alignment recorded inline in priority-1 Master sections
  plus optional `notation/forster.md` (item 21).
- DAG `prerequisites` arrows for every Forster chapter dependency
  (§13 → §16; §13 → §17; §29 → §28 → §27 → §25; §30 → §29).
  Behnke-Stein → Theorem B → Cousin → Mittag-Leffler chain unbroken
  after priority-1.
- Pass-W weaving connects new units (`06.09.01-07`, `06.04.05-06`,
  `06.02.02-03`) to existing chapter — especially to the just-shipped
  `06.04.04` Serre-duality (which cites Forster §17), `06.05.02`
  line-bundle (becomes trivial on non-compact RS via item 5), and
  `06.01.05` meromorphic-function (lifts to global existence via
  item 6).

Priority-1 (items 1-7) closes the Forster-distinctive analytic spine
(Stein / Cousin / Behnke-Stein / Mittag-Leffler / Runge — all of
Chapter 3). Priority-2 new units (8-11) + 2 deepenings (12-13) close
the Forster-distinctive proof-style gap (Schwartz finiteness,
branched-covering category, Riemann's existence, Dolbeault) and
gluing-patches / non-compact-line-bundle deepenings. Priority-3
(14-19) is composite-batch overlap with Donaldson — not double-
counted. Priority-4 (20-21) optional pointer / notation crosswalk.

**Scheduling.** Run **Donaldson Phase Composite-A first** (~14 h —
Čech / Hodge / Serre-duality (shipped) / Riemann-Roch infrastructure).
Then **Forster Phase 1** (~23 h — Chapter 3 block, opening
`06.09-stein-and-cousin/`). Composite priority-1 cost: ~37 h, ~12 new
units across both books + ~5 deepenings. Priority-2 blocks (Gauss-Manin
/ VHS; Schwartz / Riemann's existence / Dolbeault; ~20 h combined)
round out FT-1.07 near-completely on both anchors.

**Honest scope.** Mid-sized gap on a 22-unit chapter. Work dominated by
**Forster's distinctive Chapter 3 analytic spine** (zero current Codex
coverage), plus composite infrastructure shared with Donaldson (Čech,
Riemann-Roch proof, Serre duality — partly shipped). New Forster-only
units concentrate in `06.09-stein-and-cousin/` (items 1-7) plus
covering-space supplements (8-11). Composite batching saves ~7-10 h
of duplicate Čech / Riemann-Roch work.

**Largest Forster-distinctive gap:** Behnke-Stein (item 3) and the
chain Theorem A/B → Cousin I/II → Mittag-Leffler on RS. Items 1-7 are
the single largest topic-level expansion Forster buys Babel Bible; no other
FT-1.07 anchor (Donaldson, Miranda, Farkas-Kra) supplies them.
