# Kardar — *Statistical Physics of Fields* / MIT 8.334 *Statistical Mechanics II* (Fast Track 2.15) — Audit + Gap Plan

**Book:** Mehran Kardar, *Statistical Physics of Fields*
(Cambridge University Press, 2007; ix + 359 pp., ISBN 978-0-521-87341-3),
delivered as the **MIT OpenCourseWare 8.334 *Statistical Mechanics II:
Statistical Physics of Fields*** course (lecture notes, problem sets,
and exams, all under the MIT OCW free license). Chapter references in
this plan follow the CUP 2007 edition, whose eight-chapter structure
matches the 8.334 lecture sequence.

**Fast Track entry:** 2.15 — the **field-theoretic / renormalization-
group statistical mechanics** apex of Section 2 of the booklist. The
companion to 2.04-class *Statistical Physics of Particles* (8.333,
which is the Landau-Vol-5 / Pathria territory of FT 2.10) and the
free-license modern equivalent of the FT 2.13/2.14 Itzykson-Drouffe
*Statistical Field Theory* pair. Sits one slot after 2.14 in the
booklist. Catalog status: **FREE (MIT OCW)** — `docs/catalogs/
FASTTRACK_BOOKLIST.md` entry 2.15.

**Audit completeness: standard (not reduced).** Unlike the Landau Vol 5
(2.10) and Baxter (2.12) audits — both `reduced` for lack of a local
PDF — Kardar SMII is **freely and legally available** as MIT OCW
8.334 (full lecture notes + problem sets + solutions) and as the CUP
2007 text. No local copy is yet in `reference/` (the
`reference/jimmyqin/raw/pdfs/kardar-*.pdf` set is from **8.333 /
*Statistical Physics of Particles*** — ensembles, kinetic theory,
cluster expansion, BEC — i.e. the SMI/particles course, **not** SMII/
fields). But because the source is FREE, the §6.6 no-PDF hard rule
that pins Landau/Baxter to `reduced` does **not** bind here: a P5
verification pass may promote this book to `equivalence-covered` once
the OCW notes are pulled into `reference/` and a section-by-section
TOC inventory replaces the chapter-level inventory of this pass. This
audit is constructed from the stable 8-chapter 8.334 / CUP-2007
structure cross-referenced against three peer anchors (Goldenfeld
2.09; Itzykson-Drouffe 2.13/2.14; the Kardar SMI companion volume) and
against the **47 shipped `content/08-stat-mech/` units** verified by
`find` (not the chapter-level abstraction Landau/Baxter relied on).

**Section-2 structural note.** Kardar SMII is the **continuum
field-theory + renormalization-group** center of mass of Section 2 —
the *complement* of both peer audits. Where Landau Vol 5 (2.10) is
thermodynamics + fluctuations and Baxter (2.12) is exactly-solved
lattice models, Kardar SMII is **the Landau-Ginzburg functional, the
momentum-shell (Wilson) RG, the ε-expansion, perturbative RG, the
O(n) model, fluctuation-corrected mean field, and the
Kosterlitz-Thouless transition**. Its natural home is the existing
`content/08-stat-mech/` chapter, which already ships an RG block
(`08.04.*`), a Gaussian-field block (`08.06.*`), a critical block
(`08.05.*`), a mean-field block (`08.02.*` including Mermin-Wagner),
the Onsager solution (`08.03.*`), and — newly — the Baxter
exactly-solved block (`08.13.*`). **The dominant editorial finding
(developed in §2): the chapter has the *vocabulary* of Kardar SMII
almost everywhere but the *field-theoretic machinery* almost nowhere.**
The shipped RG units are **real-space / block-spin** (Kadanoff-style);
Kardar's signature **momentum-shell Wilson RG and the ε-expansion**
are stated only in synthesis prose and bibliography, never derived.

**Purpose:** standard audit-and-gap pass (P1 + P2 + P3 per
orchestration protocol). Output is a punch-list of new units and
existing-unit deepenings so that *Statistical Physics of Fields*
reaches the FT-equivalence threshold (≥95% of named results, per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §9.1). The seven-layer
coverage definition (§9 of the equivalence plan) is the acceptance
frame in §6.

---

## §1 What Kardar SMII is for

Kardar's *Statistical Physics of Fields* is **the modern graduate
canon for the renormalization-group theory of critical phenomena**, in
the Wilson-Fisher / momentum-shell tradition, taught as a coherent
field-theoretic narrative rather than a catalogue of models. Its thesis
is that **the universal physics of continuous phase transitions is
captured by a coarse-grained continuum field theory — the
Landau-Ginzburg functional — whose long-distance behaviour is
governed by renormalization-group fixed points**, and that the
critical exponents are computable, systematically, as a power series
in $\epsilon = 4 - d$. Where the SMI companion (8.333, *Particles*)
develops ensembles, kinetic theory and ideal quantum gases, SMII
(8.334, *Fields*) starts where Landau's phenomenological theory of
phase transitions ends and builds the entire RG apparatus on top of it.

The book is organised as eight chapters: **Ch. 1** collective
behaviour — coarse-graining and the **Landau-Ginzburg Hamiltonian**
$\beta\mathcal{H} = \int d^dx\,[\tfrac{t}{2}m^2 + u\,m^4 +
\tfrac{K}{2}(\nabla m)^2 - h\cdot m]$; **Ch. 2** saddle-point / mean
field, SSB and Goldstone modes, the Ginzburg criterion and $d_u=4$;
**Ch. 3** Gaussian fluctuations about the saddle and fluctuation-
corrected mean field; **Ch. 4** the scaling hypothesis and exponent
relations; **Ch. 5** the **momentum-shell (Wilson) RG** and the
**ε-expansion** (Wilson-Fisher fixed point at $O(\epsilon)$);
**Ch. 6** position-space / lattice RG (Niemeijer–van Leeuwen,
Migdal-Kadanoff, Monte-Carlo RG); **Ch. 7** series expansions, 2D
Ising duality, the field-theoretic (Grassmann / free-fermion) Onsager,
and continuous O(n) spins; **Ch. 8** the **nonlinear σ-model**
(asymptotic freedom for $n>2$), topological defects, and the **XY /
Kosterlitz-Thouless transition** (vortex unbinding, universal jump).

Distinctive Kardar SMII choices, with honest corpus status (each
verified against the 47 shipped units):

1. **Landau-Ginzburg functional from symmetry/coarse-graining (Ch. 1).**
   △ — `08.02.01` and `08.11.03` *name* "the Landau-Ginzburg
   saddle-point equation" in synthesis prose, but **no unit constructs
   the LG functional as a field theory**. `08.06.01` is the closest
   (the *free* theory, not the interacting LG functional).

2. **Momentum-shell (Wilson) RG (Ch. 5).** ✗ — **the single most
   important gap.** The shipped RG block (`08.04.01-04`) is **entirely
   real-space / block-spin (Kadanoff)**; `grep` for "momentum shell"
   across `content/08-stat-mech/` returns **zero** substantive hits.
   Wilson 1971 (*Phys. Rev. B* 4:3174, 3184) + Wilson-Kogut 1974
   (*Phys. Rep.* 12:75) — the latter is in five units' bibliographies,
   but its method is never carried out.

3. **The ε-expansion (Ch. 5).** △ — `08.04.02-wilson-fisher` *states*
   exponents are "power series in $\epsilon = 4-d$", but its Master
   theorem is a generic $-\partial_\beta\log Z$ mean-energy identity,
   **not** the one-loop recursion $\frac{du}{d\ell} = \epsilon u -
   (n+8)Cu^2$ giving $u^\star = \epsilon/[(n+8)C]$ and $\nu = \tfrac12
   + \tfrac{n+2}{4(n+8)}\epsilon$. **Stated, never derived.**

4. **Fluctuation-corrected MF and the Ginzburg criterion (Chs. 2-3).**
   ✗ — "$d_c=4$" appears in synthesis (`08.02.01`, `08.02.02`,
   `08.11.03`) but **the Ginzburg-criterion inequality is never
   written** and the one-loop fluctuation correction never computed.

5. **Gaussian fluctuations as the RG starting point (Ch. 3).** △ —
   `08.06.01` ships the free boson at good depth but framed as
   free-boson CFT, not "fluctuations about the LG saddle". Framing /
   lateral-link gap, not a topic gap.

6. **Scaling hypothesis and exponent relations (Ch. 4).** ✓/△ —
   `08.05.01` ships exponent definitions + scaling laws (the strongest
   single overlap) at good depth; Kardar's *derivation-from-RG-
   eigenvalues* (rather than postulating scaling) is the deepening.

7. **O(n) model, continuous spins, nonlinear σ-model (Chs. 7-8).** ✗ —
   the only O(n) material is one synthesis sentence in `08.02.03`
   (2D XY). The O(n) model as an RG object, the spin-wave expansion,
   and the σ-model β-function are **absent**. Polyakov 1975,
   Brézin-Zinn-Justin 1976.

8. **Kosterlitz-Thouless transition (Ch. 8 apex).** ✗ —
   "Berezinskii-Kosterlitz-Thouless" appears in **exactly one synthesis
   sentence** in `08.02.03`; there is **no KT/vortex/topological-defect
   unit and no RG flow**. Berezinskii 1971, Kosterlitz-Thouless 1973
   (*J. Phys. C* 6:1181), Kosterlitz 1974 (2016 Nobel). **The
   second-most-important gap; mandatory-originator-prose apex.**

9. **Series expansions and the field-theoretic Onsager (Ch. 7).** △ —
   `08.03.01` ships the Onsager result; the Baxter plan (2.12 item 6)
   already owns Kramers-Wannier duality. The **Grassmann / free-fermion**
   route to Onsager is the Kardar-distinctive complement — coordinate
   to avoid duplication (see §5).

Kardar SMII stops before the conformal-bootstrap / exact-CFT treatment
of 2D critical points (the corpus's `08.06.02` conformal-criticality
stub gestures at it) and before the modern functional / exact RG
(Wetterich) and the higher-loop ε-expansion — those are downstream
(Itzykson-Drouffe 2.13/2.14 and beyond).

**Density vs. existing corpus.** The shipped `08-stat-mech/` chapter
(47 `.md` files, 13 subchapters) is — uniquely among the three
Section-2 stat-mech audits — **already on Kardar's home turf for
vocabulary** (RG, Gaussian field, critical exponents/scaling,
mean-field, Mermin-Wagner, Onsager, a φ⁴/QFT block). Named-topic
overlap is the highest of the three audits, **~55%**, but worked-
machinery overlap is far lower, **~25%**: the RG is real-space-only,
the ε-expansion is asserted not derived, and the O(n) / KT / σ-model /
momentum-shell / Ginzburg-criterion / fluctuation-correction content
is essentially absent. **The dominant editorial finding: a *depth and
machinery* gap on a vocabulary-mature chapter — "fill in the field-
theoretic engine the synthesis prose keeps promising."** Headline
net-new: momentum-shell RG + ε-expansion (the engine) and
Kosterlitz-Thouless (the apex); the rest are LG-functional
construction, O(n)/σ-model, scaling-from-RG, and deepenings.

---

## §2 Coverage table (Babel Bible vs Kardar SMII)

Cross-referenced against the **47-file** `content/08-stat-mech/`
chapter, verified by `find content/08-stat-mech -name "*.md"`. Unit ids
below are **actual shipped ids**. ✓ = covered at Kardar-equivalent
depth, △ = topic present but Kardar's field-theoretic machinery/depth
not captured, ✗ = not covered.

### Ch. 1 — Collective behaviour: from particles to fields

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Coarse-graining; building a field theory from symmetry | — | ✗ | **Gap (P1).** No unit constructs an effective field theory from symmetry/locality. |
| Landau-Ginzburg functional $\beta\mathcal{H}[m]$ | `08.02.01-mean-field`, `08.11.03` (named in synthesis) | △ | **Depth gap.** The LG functional is *named* ("Landau-Ginzburg saddle-point equation") but never written as a continuum field theory or constructed. |

### Ch. 2 — Statistical fields (saddle point / mean field)

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Saddle-point / mean-field solution of LG | `08.02.01-mean-field` | ✓ | Shipped (Curie-Weiss form). Kardar's *functional* saddle point is the deepening. |
| Spontaneous symmetry breaking, Goldstone modes | `08.02.02-spontaneous-symmetry-breaking` | ✓ | Shipped. |
| Correlation length, $\xi \sim |t|^{-\nu}$ | `08.05.02-correlation-functions`, `08.05.01` | ✓ | Shipped. |
| **Ginzburg criterion / upper critical dimension $d_u=4$** | `08.02.01`, `08.02.02`, `08.11.03` (synthesis mentions $d_c=4$) | △ | **Depth gap (P1).** "$d_c=4$" asserted in prose; the Ginzburg-criterion **inequality** is never written and the crossover scale $t_G$ never derived. |

### Ch. 3 — Fluctuations

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Gaussian (harmonic) fluctuations about the saddle | `08.06.01-gaussian-field` | △ | **Framing gap.** Shipped as free-boson CFT; not framed as fluctuations about the LG saddle. Lateral-link + Beginner deepening. |
| Two-point function / Ornstein-Zernike form | `08.05.02-correlation-functions`, `08.06.01` | ✓ | Shipped. |
| **Fluctuation-corrected mean field; breakdown of Gaussian theory** | — | ✗ | **Gap (P1).** The one-loop correction to the free energy / $T_c$ and the divergence at $d \le 4$ are not computed. Motivates the RG. |

### Ch. 4 — The scaling hypothesis

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Homogeneity of singular free energy; scaling form | `08.05.01-critical-exponents` | ✓ | Shipped (scaling laws present). |
| Scaling relations (Rushbrooke, Widom, Fisher, Josephson/hyperscaling) | `08.05.01` | ✓ | Shipped. |
| Two independent exponents from **RG eigenvalues** $y_t, y_h$ | `08.05.01` (postulated, not RG-derived) | △ | **Depth gap (P2).** Scaling is *stated*; Kardar *derives* it from the linearised RG eigenvalues at the fixed point. Deepening once the momentum-shell unit exists. |

### Ch. 5 — Perturbative renormalization group (the engine)

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Momentum-shell (Wilson) RG** — coarse-grain / rescale / renormalize | `08.04.01` real-space, `08.04.04` block-spin (Kadanoff) | ✗ | **Gap (P1, apex root).** The shipped RG is **real-space only**. Momentum-shell RG has **zero** substantive corpus coverage. The field-theoretic engine of the whole book. |
| Gaussian fixed point; relevant/irrelevant/marginal operators | `08.04.02` (named), `08.06.01` | △ | **Depth gap.** "Gaussian fixed point" named in `08.04.02` synthesis; the operator-classification by RG eigenvalue is not carried out. |
| **The ε-expansion; Wilson-Fisher at $O(\epsilon)$** | `08.04.02-wilson-fisher` (states the result) | △ | **Depth gap (P1).** $u^\star, \nu, \eta$ to $O(\epsilon)$ are **stated** in synthesis but the one-loop recursion is **never derived**. The unit's Master theorem is a generic mean-energy identity, not the RG flow. |
| Critical exponents to $O(\epsilon)$ for O(n) | `08.05.01` (mean-field + assertion) | △ | **Depth gap (P1).** $\nu = \tfrac12 + \tfrac{n+2}{4(n+8)}\epsilon$, $\eta = O(\epsilon^2)$ not computed. |

### Ch. 6 — Position-space / lattice RG

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Block-spin / real-space decimation | `08.04.01-real-space-rg`, `08.04.04-block-spin-decimation` | ✓ | **Shipped at Kardar-equivalent depth** — this is the chapter Kardar treats as the lattice complement, and the corpus is strong here. |
| Beta function | `08.04.03-beta-function` | ✓ | Shipped. |
| Migdal-Kadanoff bond-moving; Monte-Carlo RG | — | ✗ | **Gap (P3).** Secondary; deferable. |

### Ch. 7 — Series expansions, duality, continuous spins

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| High-/low-temperature series expansions | — | ✗ | **Gap (P2).** No systematic series-expansion unit. |
| 2D Ising duality (Kramers-Wannier) | `08.03.01-onsager-solution` (uses result); **owned by Baxter plan 2.12 item 6** | △ | **Owned elsewhere.** The Baxter audit (`08.13.06`, planned) covers Kramers-Wannier duality + star-triangle. Do **not** duplicate; lateral-link only. |
| **Onsager via field theory (Grassmann / free fermions)** | `08.03.01-onsager-solution` (Clifford/spinor route) | △ | **Depth gap (P2).** Onsager free energy is shipped; the **free-fermion / Grassmann field-theory** derivation (Kardar's route) is distinct from the corpus's transfer-matrix/spinor route and from Baxter's commuting-transfer route. |
| Continuous (O(n)) spins | `08.02.03-mermin-wagner` (XY, one sentence) | ✗ | **Gap (P1/P2).** The O(n) model as a field theory is absent. |

### Ch. 8 — Beyond spin waves (the apex)

| Kardar topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Nonlinear σ-model; O(n) RG; asymptotic freedom for $n>2$** | — | ✗ | **Gap (P2).** Polyakov 1975, Brézin-Zinn-Justin 1976. Zero corpus coverage. |
| **Topological defects; vortices in the 2D XY model** | `08.02.03-mermin-wagner` (one synthesis sentence) | ✗ | **Gap (P1).** Folded into the KT unit. |
| **Kosterlitz-Thouless transition; vortex unbinding; universal jump $K_R=2/\pi$; KT recursion relations** | `08.02.03-mermin-wagner` (named once) | ✗ | **Gap (P1, apex, mandatory-originator-prose).** No KT unit. Berezinskii 1971, Kosterlitz-Thouless 1973, Kosterlitz 1974 (2016 Nobel). |

### Aggregate coverage estimate (Kardar SMII)

- **Theorem layer:** ~28% at Kardar-equivalent machinery depth (~55%
  at topic-name level). The chapter ships scaling laws, mean-field,
  SSB, Mermin-Wagner, Gaussian field, Onsager, real-space RG, and the
  β-function at full depth — but the **momentum-shell RG, the
  ε-expansion derivation, fluctuation-corrected MF, the Ginzburg
  criterion, the LG functional construction, the O(n)/σ-model, and the
  entire Kosterlitz-Thouless apparatus** are absent or stubbed.
- **Worked-example layer:** ~20%. The one-loop recursion relations,
  the $O(\epsilon)$ exponents, the Ginzburg crossover scale, the
  Gaussian fluctuation correction, the KT recursion flow, the σ-model
  β-function — none worked out.
- **Notation layer:** ~50%. Crosswalk concerns (Kardar-specific):
  - Kardar's reduced temperature $t = (T-T_c)/T_c$ vs. the corpus's
    mixed $\beta$ / $\tau$. Pin a chapter-wide note.
  - Kardar's order-parameter **field** $m(\mathbf{x})$ (an
    $n$-component field) vs. the corpus's scalar $\phi$ (`08.06.01`)
    and SSB $\phi$ (`08.02.02`) and Landau $\eta$. Pin a crosswalk.
  - Kardar's rescaling factor $b$, RG eigenvalues $y_t, y_h$,
    anomalous dimension $\eta$ (collides with reduced temperature in
    some texts — Kardar uses $\eta$ for the exponent and $t$ for
    temperature). Pin in the momentum-shell unit.
  - KT stiffness $K$ and fugacity $y$; superfluid-density jump. Pin in
    the KT unit.
- **Sequencing layer:** ~40%. The corpus has Ising → mean-field →
  real-space RG → Wilson-Fisher → critical exponents; Kardar runs
  fields → saddle → Gaussian fluctuations → scaling → momentum-shell
  RG → ε-expansion → O(n)/σ-model → KT. The **momentum-shell →
  ε-expansion → σ-model → KT** spine is net-new.
- **Intuition layer:** ~35%. Coarse-graining-as-flow, the geometric
  meaning of relevant/irrelevant operators, vortex unbinding,
  asymptotic freedom of the σ-model — mostly absent.
- **Application layer:** ~25%. Superfluid films (KT), 2D melting,
  liquid crystals (σ-model), the 3D Ising/fluid universality class
  via ε — present only as the existing universality synthesis.

After P1: theorem layer ~62%, machinery-depth ~58%. After P1+P2:
~85% / ~82%. After P1+P2+P3: ~93% / ~90%. Full ≥95% requires the
deferred Migdal-Kadanoff / Monte-Carlo-RG / higher-loop / 2D-melting
units and a dedicated Kardar problem-set pass (the OCW 8.334 problem
sets + solutions are the natural source) — deferable.

---

## §3 Gap punch-list (priority-ordered)

The `08-stat-mech/` chapter is **vocabulary-mature but
field-theoretic-machinery-thin**: it has the names everywhere and the
engine nowhere. Recommended slot allocation:

- **Extend `08.04-rg/`** (currently `08.04.01`-`08.04.04`, all
  real-space) with the **momentum-shell RG + ε-expansion** units —
  the headline engine, in the natural sub-chapter. Next free ids:
  `08.04.05`, `08.04.06`.
- **Open `08.14-topological/`** (verified unused — highest used
  subchapter is `08.13`) for the **Kosterlitz-Thouless / topological-
  defects / nonlinear-σ-model** apex block: `08.15.01`-`08.15.03`.
- **Extend `08.02-mean-field/`** (currently `.01`-`.03`) with the
  **Landau-Ginzburg functional + fluctuation-corrected MF + Ginzburg
  criterion**: `08.02.04`, `08.02.05`.
- **Deepen** the shipped `08.04.02` (Wilson-Fisher), `08.05.01`
  (scaling-from-RG), `08.06.01` (Gaussian-as-fluctuations),
  `08.03.01` (field-theoretic Onsager).

Non-colliding ids verified against `find content/08-stat-mech -name
"*.md"` (used: `08.02.01-03`, `08.04.01-04`, `08.05.01-02`,
`08.06.01-02`; `08.15.*` is unused).

### Priority 1 — Kardar-load-bearing field-theoretic engine + apex (5 items)

1. **`08.04.05` Momentum-shell (Wilson) renormalization group.**
   [NEW] Kardar Ch. 5 anchor; **Wilson 1971 (*Phys. Rev. B* 4:3174,
   3184) and Wilson-Kogut 1974 (*Phys. Rep.* 12:75) originators.**
   Three-tier; ~2400 words. Beginner: why coarse-grain in momentum
   space — integrate out a shell $\Lambda/b < |q| < \Lambda$, rescale,
   renormalize. Intermediate: the Gaussian fixed point; the recursion
   relations for $\{t, u, K, \dots\}$; **relevant / irrelevant /
   marginal operators** classified by the linearised RG eigenvalue
   $y_i$; contrast with the shipped real-space RG `08.04.01` and
   block-spin `08.04.04`. Master: the field-theoretic statement of the
   RG as a flow on coupling space, fixed points, and the relation
   $\nu = 1/y_t$, $y_h = (d+2-\eta)/2$. **Mandatory originator-prose**
   — paraphrase Wilson 1971 §II and Wilson-Kogut directly with
   `[ref:]` citations. **The single most important unit in this audit —
   the engine the shipped chapter promises in synthesis prose but never
   builds.** Apex root. Prereq: `08.04.01`, `08.06.01`, `08.05.01`.

2. **`08.04.06` The ε-expansion and the Wilson-Fisher fixed point at
   one loop.** [NEW] Kardar Ch. 5 anchor; **Wilson-Fisher 1972
   (*Phys. Rev. Lett.* 28:240) originator.** Three-tier; ~2400 words.
   Beginner: why $d=4$ is special (the φ⁴ coupling is marginal) and the
   idea of working in $d = 4 - \epsilon$. Intermediate: the one-loop
   recursion relations
   $\frac{du}{d\ell} = \epsilon u - (n+8)\,C\,u^2 + \cdots$, the
   nontrivial fixed point $u^\star = \epsilon/[(n+8)C]$, and its
   stability. Master: the **critical exponents to $O(\epsilon)$** —
   $\nu = \tfrac12 + \tfrac{n+2}{4(n+8)}\epsilon + O(\epsilon^2)$,
   $\eta = O(\epsilon^2)$, $\gamma = 1 + \tfrac{n+2}{2(n+8)}\epsilon$ —
   and the comparison to the shipped mean-field exponents `08.05.01`
   and the 3D Ising values. Deepens / supplies the derivation
   `08.04.02-wilson-fisher` currently only asserts. Prereq:
   `08.04.05`, `08.04.02`. **Apex** — the headline quantitative
   prediction of the book.

3. **`08.15.01` The Kosterlitz-Thouless transition (2D XY model).**
   [NEW] Kardar Ch. 8 anchor; **Berezinskii 1971 (*Sov. Phys. JETP*
   32:493), Kosterlitz-Thouless 1973 (*J. Phys. C* 6:1181), Kosterlitz
   1974 (*J. Phys. C* 7:1046) originators (2016 Nobel Prize).**
   Three-tier; ~2400 words. Beginner: the 2D XY model has no
   conventional long-range order (Mermin-Wagner `08.02.03`) yet has two
   phases — quasi-long-range-ordered (power-law correlations) and
   disordered — separated by a topological transition. Intermediate:
   **vortices** as topological defects, the logarithmic vortex-pair
   energy, the entropy-energy balance giving $T_{KT}$, and **vortex
   unbinding**. Master: the **KT recursion relations** for the
   stiffness $K$ and vortex fugacity $y$, the separatrix flow, and the
   **universal jump** $K_R(T_{KT}^-) = 2/\pi$ in the superfluid
   stiffness (Nelson-Kosterlitz 1977). **Mandatory originator-prose** —
   paraphrase Kosterlitz-Thouless 1973 directly. Prereq: `08.02.03`
   Mermin-Wagner, `08.04.05`. **Apex** — the second headline result.

4. **`08.02.04` The Landau-Ginzburg functional and fluctuation-
   corrected mean field.** [NEW] Kardar Chs. 1-3 anchor; **Landau 1937
   (the phenomenological theory) + Ginzburg-Landau 1950
   (*Zh. Eksp. Teor. Fiz.* 20:1064) for the gradient term.**
   Three-tier; ~2200 words. Beginner: building the effective field
   theory $\beta\mathcal{H}[m] = \int d^dx\,[\tfrac{t}{2}m^2 + u\,m^4 +
   \tfrac{K}{2}(\nabla m)^2 - h\cdot m]$ from symmetry, locality, and
   coarse-graining. Intermediate: the saddle-point (mean-field)
   solution recovering `08.02.01`, the correlation length
   $\xi = \sqrt{K/t}$, and **Gaussian fluctuations about the saddle**
   (lateral to `08.06.01`). Master: the **one-loop fluctuation
   correction** to the free energy and to $T_c$, and the **Ginzburg
   criterion** $|t| \ll t_G \sim (u^2/K^d)^{2/(4-d)}$ identifying the
   **upper critical dimension $d_u = 4$** below which fluctuations
   dominate and the RG is mandatory. Closes the "$d_c = 4$"-asserted-
   never-derived gap in `08.02.01`/`08.02.02`/`08.11.03`. Prereq:
   `08.02.01`, `08.06.01`. Near-apex; the bridge from mean-field to RG.

5. **`08.15.02` The nonlinear σ-model and the O(n) renormalization
   group.** [NEW] Kardar Ch. 8 anchor; **Polyakov 1975 (*Phys. Lett. B*
   59:79) and Brézin-Zinn-Justin 1976 (*Phys. Rev. B* 14:3110)
   originators.** Three-tier; ~2200 words. Beginner: continuous O(n)
   spins, the low-temperature spin-wave (Goldstone) expansion, and the
   unit-vector constraint. Intermediate: the nonlinear σ-model action
   and its perturbative RG in $d = 2 + \epsilon$. Master: the
   **β-function** $\frac{dT}{d\ell} = -\epsilon T + (n-2)\,T^2/(2\pi)
   + \cdots$, the **asymptotic freedom** of the O(n) model for $n > 2$
   (flow to strong coupling / disorder in $d=2$), and the lower
   critical dimension $d_\ell = 2$; the $n=2$ marginal case connecting
   to KT (`08.15.01`). Prereq: `08.02.02` SSB, `08.04.05`. Apex-
   adjacent — the complement to the ε-expansion (top-down vs.
   bottom-up around the two critical dimensions).

### Priority 2 — Kardar-distinctive depth and the series/duality layer (4 items)

6. **`08.15.03` Topological defects in ordered media.** [NEW] Kardar
   Ch. 8 anchor; Mermin 1979 (*Rev. Mod. Phys.* 51:591) for the
   homotopy classification. Three-tier; ~1800 words. Beginner: defects
   as obstructions — vortices, hedgehogs, disclinations — and why they
   matter for ordering. Intermediate: the homotopy-group classification
   $\pi_n(\mathcal{M})$ of defects of an order-parameter manifold
   $\mathcal{M}$; the $\pi_1(S^1) = \mathbb{Z}$ vortex charge for XY.
   Master: defect-mediated melting (KTHNY) as a pointer; lateral to
   the topology chapter's homotopy units. Generalises the XY vortices
   of `08.15.01`. Prereq: `08.15.01`.

7. **`08.07.01`-style deepening → `08.05.03` Scaling from the RG.**
   [NEW] Kardar Ch. 4 anchor; Kadanoff 1966 (*Physics* 2:263), Widom
   1965, Wilson originators. Three-tier; ~1600 words. Beginner: the
   scaling hypothesis as homogeneity of the singular free energy.
   Intermediate: deriving the **scaling relations** (Rushbrooke, Widom,
   Fisher, Josephson/hyperscaling) from the two RG eigenvalues
   $y_t, y_h$ at the fixed point, rather than postulating them.
   Master: the role of the dangerously-irrelevant variable above
   $d_u$, and the breakdown of hyperscaling above four dimensions.
   Deepens the postulated scaling of `08.05.01`. Prereq: `08.04.05`,
   `08.05.01`.

8. **Deepen `08.03.01-onsager-solution`.** [DEEPEN] Add a Master-tier
   section on the **field-theoretic (Grassmann / free-fermion)
   derivation** of the 2D Ising free energy (Kardar Ch. 7) — the route
   that maps the Ising partition function to a free Majorana-fermion
   theory and reads off the free energy as a fermion determinant. This
   is **distinct from** the shipped transfer-matrix/spinor route and
   from the Baxter commuting-transfer route (`08.13.*`); flag the
   three-way equivalence. Pin Schultz-Mattis-Lieb 1964 (*Rev. Mod.
   Phys.* 36:856). No new id.

9. **`08.07.02`-style → `08.05.04` High- and low-temperature series
   expansions.** [NEW] Kardar Ch. 7 anchor; Domb-Sykes / Domb-Green
   series-expansion tradition. Master-tier focus; ~1600 words. The
   systematic high-T (graph) and low-T (droplet) expansions of the
   Ising partition function, the determination of $T_c$ and exponents
   from series, and the duality pairing of the two expansions (lateral
   to the Baxter Kramers-Wannier unit `08.13.06`, **not** duplicated).
   Prereq: `08.01.02-ising-model`.

### Priority 3 — deepenings and secondary RG methods (3 items)

10. **Deepen `08.04.02-wilson-fisher`.** [DEEPEN] Re-anchor the unit's
    Master section to the actual ε-expansion derivation now in
    `08.04.06`, and replace/augment the generic mean-energy "key
    theorem" with the one-loop fixed-point statement. Pin Wilson-Fisher
    1972 alongside the existing Wilson-Kogut reference. No new id.

11. **Deepen `08.06.01-gaussian-field`.** [ENRICH] Add a Beginner-tier
    section framing the free-boson theory as **Gaussian fluctuations
    about the Landau-Ginzburg saddle** (Kardar Ch. 3), with a lateral
    link to `08.02.04`. Distinguishes the free-boson-CFT framing
    (shipped) from the fluctuation-theory framing (Kardar). No new id.

12. **`08.04.07` Position-space RG methods: Migdal-Kadanoff and
    Monte-Carlo RG.** [NEW] Kardar Ch. 6 anchor; Migdal 1975 /
    Kadanoff 1976 bond-moving; Swendsen 1979 MCRG. Master-tier;
    ~1400 words. The bond-moving approximation and the Monte-Carlo RG
    as practical lattice complements to the momentum-shell programme;
    contrast with the exact block-spin decimation `08.04.04`.
    Deferable. Prereq: `08.04.01`, `08.04.05`.

### Priority 4 — survey / pointer items (deferable) (1 item)

13. **Notation crosswalk pin + 2D-melting pointer (no standalone
    file).** [ENRICH] Pin the Kardar reduced-temperature $t$, field
    $m(\mathbf{x})$, eigenvalues $y_t,y_h$, anomalous dimension $\eta$,
    KT stiffness $K$ / fugacity $y$ crosswalk in the Master sections of
    `08.04.05`, `08.04.06`, `08.15.01` per §2. Add a one-paragraph
    pointer (in `08.15.03`) to the **KTHNY two-stage melting** of 2D
    solids as the defect-mediated application beyond the XY model.
    No standalone `notation/kardar-smii.md` needed (per-unit Master
    paragraphs suffice; a standalone crosswalk is the §6 layer-4
    requirement and may be added at P5).

---

## §4 Implementation sketch

**Minimum Kardar-equivalence batch** = priority 1 only (items 1-5):
5 new units (the field-theoretic engine + the topological apex + the
LG-functional bridge). Estimates (mirroring the Landau Vol 5 / Baxter
batches):

- ~4 hours per typical new field-theory unit (research + draft +
  validate 27/27 + Lean stub + Bridge/Synthesis prose).
- The apex / originator-prose units (item 1 momentum-shell RG, item 3
  Kosterlitz-Thouless) require substantial primary-source paraphrase —
  ~5-6 hours each.
- Priority 1: 3 typical × 4 h + 2 apex × 5.5 h = ~23 hours.
- Priority 1+2: ~23 + 3 new × 3.5 h + 1 deepening × 1.5 h = ~36 hours.
- Priority 1+2+3: ~36 + 1 new × 3 h + 2 deepenings × 1.5 h = ~42 hours.
- Full punch-list including P4: ~43 hours. **Fits a focused 6-8 day
  window**, comparable to the Baxter batch.

**Batch structure.**

- **Batch A (the engine, items 1, 2, 4, ~17 h):** the momentum-shell
  RG (1) is the load-bearing root; the ε-expansion (2) is its
  quantitative payoff; the LG-functional + fluctuation-corrected MF (4)
  is the bridge that motivates the RG from mean-field breakdown.
  Produce together — item 4 supplies the Ginzburg-criterion "why",
  items 1-2 supply the "how".
- **Batch B (the topological apex, items 3, 5, 6, ~15 h):** depends on
  Batch A's momentum-shell unit. Kosterlitz-Thouless (3) and the
  nonlinear σ-model (5) are the two ends of the $d = 2 + \epsilon$
  story; topological defects (6) generalises the vortices of (3).
- **Batch C (series / duality / scaling, items 7, 8, 9, ~9 h):** the
  scaling-from-RG deepening (7) needs the momentum-shell unit;
  field-theoretic Onsager (8) and series expansions (9) are largely
  independent and lateral-link to the Baxter `08.13.*` block.
- **Optional Batch D (P3+P4, items 10-13, ~7 h):** after P1+P2 lands;
  the `08.04.02` and `08.06.01` deepenings re-anchor the shipped units
  to the new engine.

**Originator-prose targets.** Kardar SMII is a **modern textbook**, not
an originator text — so the originator-prose obligation falls on the
*primary sources Kardar synthesises*, not on Kardar's own prose.
Mandatory originator-prose items:

- **Item 1** (`08.04.05` momentum-shell RG): **Wilson 1971 +
  Wilson-Kogut 1974** — the originators. Apex; paraphrase Wilson's
  own RG formulation.
- **Item 3** (`08.15.01` Kosterlitz-Thouless): **Kosterlitz-Thouless
  1973 + Berezinskii 1971** — co-originators (2016 Nobel). Apex;
  paraphrase KT 1973 directly.

Joint originator-citations:

- **Item 2 (ε-expansion):** Wilson-Fisher 1972.
- **Item 4 (LG functional / Ginzburg criterion):** Landau 1937;
  Ginzburg-Landau 1950; Ginzburg 1960 (the criterion).
- **Item 5 (σ-model):** Polyakov 1975; Brézin-Zinn-Justin 1976.
- **Item 6 (topological defects):** Mermin 1979.
- **Item 7 (scaling):** Kadanoff 1966; Widom 1965.
- **Item 8 (field-theoretic Onsager):** Schultz-Mattis-Lieb 1964;
  Onsager 1944.

**Notation crosswalk concerns (Kardar SMII-specific).** Recorded inline
in the Master sections of each new unit (per item 13):

- **Reduced temperature** $t = (T-T_c)/T_c$ (Kardar) vs. corpus
  $\beta$ / $\tau$. Pin in `08.04.05`.
- **Order-parameter field** $m(\mathbf{x})$ ($n$-component, Kardar) vs.
  scalar $\phi$ (`08.06.01`, `08.02.02`) vs. Landau $\eta$. Pin a
  crosswalk in `08.02.04`.
- **RG eigenvalues** $y_t, y_h$; rescaling factor $b$; anomalous
  dimension $\eta$ (Kardar uses $\eta$ for the exponent, $t$ for
  reduced temperature — no collision). Pin in `08.04.05`/`08.05.03`.
- **KT** stiffness $K$, fugacity $y$, jump $K_R = 2/\pi$. Pin in
  `08.15.01`.

**DAG edges** (assumes shipped `08.01.02`, `08.02.01-03`, `08.03.01`,
`08.04.01-04`, `08.05.01-02`, `08.06.01`): `08.04.05` momentum-shell ←
{`08.04.01`, `08.06.01`, `08.05.01`} → everything else; `08.04.06`
ε-expansion ← {`08.04.05`, `08.04.02`}; `08.02.04` LG-functional ←
{`08.02.01`, `08.06.01`} (motivates `08.04.05`); `08.15.01` KT ←
{`08.02.03`, `08.04.05`}; `08.15.02` σ-model ← {`08.02.02`,
`08.04.05`}; `08.15.03` defects ← `08.15.01`; `08.05.03` scaling ←
{`08.04.05`, `08.05.01`}; `08.05.04` series ← `08.01.02` (lateral
`08.13.06`); `08.04.07` Migdal-Kadanoff ← {`08.04.01`, `08.04.05`}.

**Lean status.** Per the prose-first precedent of the shipped
`08.03.*` / `08.04.*` / `08.13.*` units (all `lean_status: none`),
all new `08.04.05-07`, `08.02.04`, `08.05.03-04`, `08.15.*` units are
**prose-first** (`lean_status: none`). The contract lift is
multi-section Master prose + originator paraphrase (the one-loop
recursion algebra, the KT flow, the σ-model β-function), not Lean.

**Chapter structure.** New sub-chapter **`08.14-topological/`** (items
3, 5, 6: KT, σ-model, defects). Extends **`08.04-rg/`** (`08.04.05-07`:
momentum-shell, ε-expansion, Migdal-Kadanoff), **`08.02-mean-field/`**
(`08.02.04`: LG functional / Ginzburg), **`08.05-critical/`**
(`08.05.03-04`: scaling-from-RG, series). Deepens (no new id)
`08.04.02`, `08.06.01`, `08.03.01`.

**Composite note (coordinate with neighbours).** **Baxter (2.12)**
already owns the exactly-solved-lattice axis `08.13.*` (incl.
Kramers-Wannier duality `08.13.06`); Kardar's series/Onsager units 8-9
**lateral-link, not duplicate**. **Itzykson-Drouffe (2.13/2.14)** owns
the higher-loop / exact-RG depth beyond Kardar's one-loop treatment —
the momentum-shell + ε-expansion units are the **shared prerequisite**,
produce at apex depth. **Goldenfeld (2.09)** is the bridge text; the
LG-functional unit (item 4) serves it too. The single most important
addition is the **momentum-shell RG + ε-expansion pair** (the engine
the `08.04.*` block names but never builds), then the **KT apex**.

---

## §5 What this plan does NOT cover

- **Exactly-solved lattice models.** Owned by the Baxter audit (2.12,
  `08.13.*`): six-/eight-vertex, Yang-Baxter, Bethe ansatz, corner
  transfer matrix, hard-hexagon, Kramers-Wannier duality, spherical /
  Bethe-lattice. Kardar Ch. 7's duality and transfer-matrix material
  **lateral-links** to `08.13.*`; the only net-new Kardar route is the
  **free-fermion / Grassmann** derivation of Onsager (item 8,
  deepening) — distinct from Baxter's commuting-transfer route.
- **Thermodynamics, ensembles, ideal quantum gases, kinetic theory.**
  These are *Statistical Physics of Particles* (8.333 / FT 2.10 Landau
  Vol 5) territory — already shipped (`08.01.*`, `08.11.*`, `08.12.*`,
  `08.10.02` Fokker-Planck) and audited under the Landau Vol 5 plan.
  Not re-audited. (The local `reference/jimmyqin/kardar-*.pdf` set is
  the 8.333 source, not 8.334.)
- **Conformal field theory of 2D critical points.** The $c$-theorem,
  minimal models, and the conformal bootstrap belong downstream
  (`08.06.02-conformal-criticality` is a stub; Itzykson-Drouffe 2.13
  and a dedicated CFT entry own the depth). Kardar gestures at the
  KT line's $c=1$ structure; this plan flags but does not build the
  CFT correspondence.
- **Functional / exact RG (Wetterich), higher-loop ε-expansion,
  resummation (Borel / conformal-mapping of the ε-series).** Beyond
  Kardar's one-loop pedagogical scope; owned by Itzykson-Drouffe
  2.13/2.14 and a future exact-RG entry.
- **Dynamical critical phenomena / model A-J / Hohenberg-Halperin.**
  Kardar SMII is equilibrium; the dynamic RG is the sequel (Kardar's
  later KPZ work, not in 8.334). Out of scope; the shipped
  `08.10.02-fokker-planck` and `08.12.*` linear-response units are the
  nearest corpus anchors.
- **KPZ / stochastic growth / driven systems.** Kardar's own famous
  KPZ equation is *not* in 8.334 (it is a research-seminar topic).
  Out of scope.
- **Disordered systems / spin glasses / replica.** Not in the 8.334
  core sequence. Out of scope.
- **Line-number problem inventory.** The OCW 8.334 problem sets +
  solutions are the natural source for a dedicated problem-pack pass;
  inventory deferred to a follow-up (the source is FREE, so this is
  *not* blocked by the reduced-audit constraint — it is simply out of
  scope for this gap-analysis pass).

---

## §6 Acceptance criteria for FT equivalence (Kardar SMII)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §9 (seven-layer coverage
definition), *Statistical Physics of Fields* is at equivalence-coverage
when, simultaneously:

1. **Theorem layer (≥95%).** Kardar's named results in Chs. 1-8 map to
   Babel Bible units with explicit `[ref:]` back to Kardar SMII /
   8.334 (currently ~28% at machinery depth; after P1 ~62%; after
   P1+P2 ~85%; after P1+P2+P3 ~93%; full ≥95% needs the deferred
   Migdal-Kadanoff / MCRG / 2D-melting depth). Highest-leverage gaps:
   the **momentum-shell RG** (item 1), the **ε-expansion** (item 2),
   the **Kosterlitz-Thouless transition** (item 3).
2. **Exercise layer (≥80%).** Currently ~15%; the OCW 8.334 problem
   sets (with published solutions) are the natural source for a
   dedicated problem-pack pass — out of scope for this gap analysis,
   but **not blocked** by sourcing since 2.15 is FREE.
3. **Worked-example layer (≥90%).** Currently ~20%; the one-loop
   recursion relations, $O(\epsilon)$ exponents, Ginzburg crossover
   scale, KT recursion flow, and σ-model β-function appear in the P1/P2
   Master sections — P1+P2 brings to ~75%.
4. **Notation layer.** A `notation/kardar-smii.md` crosswalk
   ($t$, $m(\mathbf{x})$, $y_t/y_h$, $\eta$, KT $K/y$) — per-unit
   Master pins (item 13) suffice for this audit; the standalone file
   is a P5 deliverable.
5. **Sequencing layer.** An unbroken DAG chain mean-field → LG
   functional → Gaussian fluctuations → momentum-shell RG →
   ε-expansion → {σ-model, KT}. **Currently breaks immediately after
   the real-space RG `08.04.04`** (no momentum-shell successor) — item
   1 (`08.04.05`) is the missing root; item 4 (`08.02.04`) supplies the
   mean-field-breakdown bridge.
6. **Intuition layer.** Each chapter has a unit whose Beginner/Master
   section explains *why* — coarse-graining-as-flow (`08.04.05`),
   relevant/irrelevant operators (`08.04.05`), vortex unbinding
   (`08.15.01`), asymptotic freedom (`08.15.02`). Currently absent for
   the RG-engine and topological chapters; P1 closes it.
7. **Application layer (≥80%).** Superfluid films (KT), 2D melting
   (KTHNY pointer), the 3D Ising/fluid universality class via ε —
   referenced in the new units' Connections sections. Currently ~25%;
   P1+P2 brings to ~70%.

The Pass-5 verification agent checks all seven thresholds and signs
off, or flags specific deficits.

**Audit-completeness note (NOT reduced).** Unlike Landau Vol 5 (2.10)
and Baxter (2.12) — both `reduced` per AGENTIC_EXECUTION_PLAN.md §6.6
for lack of a legal local PDF — Kardar SMII is **FREE (MIT OCW 8.334)**.
The §6.6 no-PDF hard rule that pins those two to `reduced` does **not**
bind here. To promote this audit to `full` and ultimately mark the book
`equivalence-covered`, pull the OCW 8.334 lecture notes + problem sets
into `reference/` (recommended path
`reference/fasttrack-texts/02-stat-field/MIT-8.334-Kardar-SMII/` —
permitted because the source is free-license, mirroring the
free-license convention reserved for `reference/fasttrack-texts/`) and
run a section-by-section TOC inventory replacing this chapter-level
inventory. **No reduced-audit caveat applies; this is a standard
gap-analysis audit.**

**Prerequisite alert.** Kardar SMII sits at FT 2.15 — after the
Section 1 mathematics anchors and after the Section 2 stat-mech
foundations (2.09 Goldenfeld RG, 2.10 Landau Vol 5, 2.12 Baxter,
2.13/2.14 Itzykson-Drouffe). The corpus must keep the shipped RG
(`08.04.*`), Gaussian-field (`08.06.*`), critical (`08.05.*`),
mean-field (`08.02.*`), and Onsager (`08.03.*`) blocks available — the
new units build directly on them. This plan does not re-audit those
prerequisites.

**Honest scope.** **Medium-large equivalence gap — a depth-and-
machinery pass on a vocabulary-mature chapter, intermediate between
the Landau Vol 5 framing-pass and the Baxter net-new-construction
pass.** The `08-stat-mech/` chapter ships scaling laws, mean-field,
SSB, Mermin-Wagner, Gaussian field, Onsager, real-space RG, and the
β-function at full depth — and *names* the momentum-shell RG, the
ε-expansion, the upper critical dimension, and Berezinskii-Kosterlitz-
Thouless in synthesis prose throughout — but **builds none of the
field-theoretic engine** those names refer to. The P1 batch is **5
new units, two of them apex / originator-prose** (momentum-shell RG;
Kosterlitz-Thouless), one near-apex bridge (LG functional /
fluctuation-corrected MF). P1+P2 is **8 new units + 1 deepening**;
the full punch-list is **9 new units + 3 deepenings**. The chapter's
single most important addition is the **momentum-shell RG +
ε-expansion pair** — the engine the shipped synthesis prose has been
promising in every RG unit — and the **Kosterlitz-Thouless apex**,
the field's most celebrated topological result and a 2016 Nobel
citation that currently lives in one sentence of the Mermin-Wagner
unit.

---

## §7 Sourcing

- **Status:** FREE (MIT OCW) per `docs/catalogs/FASTTRACK_BOOKLIST.md`
  entry 2.15.
- **Local copy:** **NOT RESOLVED, but FREELY available.** `reference/`
  holds the 8.333 / *Statistical Physics of Particles* lecture PDFs
  (`reference/jimmyqin/raw/pdfs/kardar-*.pdf` — ensembles, kinetic
  theory, cluster expansion, BEC) but **not** the 8.334 / *Fields*
  notes. Recommended remediation: pull the MIT OCW 8.334 lecture notes
  + problem sets + solutions (free license) into
  `reference/fasttrack-texts/02-stat-field/MIT-8.334-Kardar-SMII/`.
  Because the source is free, acquiring it promotes this audit to
  `full` with no copyright friction — unlike the Landau/Baxter
  commercial titles.
- **Citation form:** M. Kardar, *Statistical Physics of Fields*
  (Cambridge University Press, Cambridge, 2007), ISBN
  978-0-521-87341-3; equivalently MIT OpenCourseWare 8.334
  *Statistical Mechanics II: Statistical Physics of Fields*
  (M. Kardar, MIT, ocw.mit.edu).
- **Peer / companion sources (peer-anchors for §1):**
  - N. Goldenfeld, *Lectures on Phase Transitions and the
    Renormalization Group* (Westview, 1992) — FT 2.09; the
    phenomenological-Landau-to-Wilson bridge text; overlaps items 4, 7.
  - C. Itzykson, J.-M. Drouffe, *Statistical Field Theory*, Vols. 1-2
    (CUP, 1989) — FT 2.13/2.14; the field-theoretic-stat-mech
    companion; owns the higher-loop / exact-RG depth beyond Kardar.
  - M. Kardar, *Statistical Physics of Particles* (CUP, 2007) — the
    8.333 companion volume; supplies the ensemble / thermodynamic
    prerequisites (the local `reference/jimmyqin/kardar-*.pdf` set).
- **Originator references** (cited in §3-§4 punch-list):
  K. G. Wilson, "Renormalization group and critical phenomena I, II"
  (*Phys. Rev. B* 4:3174, 3184 (1971)); K. G. Wilson, J. Kogut, "The
  renormalization group and the ε expansion" (*Phys. Rep.* 12:75
  (1974)); K. G. Wilson, M. E. Fisher, "Critical exponents in 3.99
  dimensions" (*Phys. Rev. Lett.* 28:240 (1972)); V. L. Berezinskii,
  "Destruction of long-range order in one- and two-dimensional systems"
  (*Sov. Phys. JETP* 32:493 (1971)); J. M. Kosterlitz, D. J. Thouless,
  "Ordering, metastability and phase transitions in two-dimensional
  systems" (*J. Phys. C* 6:1181 (1973)); J. M. Kosterlitz, "The
  critical properties of the two-dimensional XY model" (*J. Phys. C*
  7:1046 (1974)); D. R. Nelson, J. M. Kosterlitz, "Universal jump in
  the superfluid density of two-dimensional superfluids" (*Phys. Rev.
  Lett.* 39:1201 (1977)); A. M. Polyakov, "Interaction of Goldstone
  particles in two dimensions" (*Phys. Lett. B* 59:79 (1975));
  E. Brézin, J. Zinn-Justin, "Renormalization of the nonlinear σ-model
  in 2 + ε dimensions" (*Phys. Rev. B* 14:3110 (1976)); N. D. Mermin,
  "The topological theory of defects in ordered media" (*Rev. Mod.
  Phys.* 51:591 (1979)); L. P. Kadanoff, "Scaling laws for Ising models
  near $T_c$" (*Physics* 2:263 (1966)); B. Widom, "Equation of state in
  the neighborhood of the critical point" (*J. Chem. Phys.* 43:3898
  (1965)); V. L. Ginzburg, "Some remarks on phase transitions of the
  second kind" (*Sov. Phys. Solid State* 2:1824 (1960)); V. L. Ginzburg,
  L. D. Landau, "On the theory of superconductivity" (*Zh. Eksp. Teor.
  Fiz.* 20:1064 (1950)); L. D. Landau, "On the theory of phase
  transitions" (*Phys. Z. Sowjet.* 11:26 (1937)); T. D. Schultz,
  D. C. Mattis, E. H. Lieb, "Two-dimensional Ising model as a soluble
  problem of many fermions" (*Rev. Mod. Phys.* 36:856 (1964)).
- **Local copy retention.** If acquired, store the OCW 8.334 notes at
  `reference/fasttrack-texts/02-stat-field/MIT-8.334-Kardar-SMII/` —
  the free-license tree (Kardar SMII / OCW is free), *not*
  `reference/textbooks-extra/` (reserved for commercial scans like
  the Landau / Baxter titles).
