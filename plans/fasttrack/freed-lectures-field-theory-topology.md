# Freed — *Lectures on Field Theory and Topology* (Fast Track 3.05) — Audit + Gap Plan

**Book:** Daniel S. Freed, *Lectures on Field Theory and Topology*, CBMS
Regional Conference Series in Mathematics, No. 133, American Mathematical
Society / NSF–CBMS, 2019 (xi + 186 pp.). Author-hosted preliminary PDF
(permission-of-publisher version) is the version inspected here.

**Local copy used for audit:**
`reference/book-collection/free-downloads/Freed-CBMS_Field_Theory_and_Topology.pdf`
(186 pages, preliminary version). The file
`reference/fasttrack-texts/03-modern-geometry/Freed-AspectsOfFieldTheory.pdf`
is a *different, earlier* Freed text and is **not** the FT 3.05 source.

**Fast Track entry:** 3.05 (Modern Geometry tier). Listed in
`docs/catalogs/FASTTRACK_BOOKLIST.md` line for 3.05 as "TQFT, cobordism."
Catalog flagged availability as "? (AMS may have partial)" — the
preliminary author PDF above resolves the question.

**Purpose of this plan:** P1-lite audit-and-gap pass mirroring
`plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md`.
Produces a priority-ordered punch-list of new Codex units required for
FT-equivalence coverage. Stops short of a line-number P1 inventory; the
book is 186 pp. of dense survey-level prose and a fuller inventory is a
follow-up. This pass uses the TOC, the Freed-Hopkins program structure,
and the canonical literature for the gap mapping.

---

## §1 What this book is for

Freed's *Lectures on Field Theory and Topology* is the canonical modern
mathematical introduction to **topological quantum field theory (TQFT)**
from the categorical / cobordism-axiomatic perspective, written by one
of the field's central figures. The motivating problem (stated on p. 1
of the introduction) is from condensed-matter physics: **classify
invertible gapped phases of matter**. The mathematical translation is
the Freed–Hopkins program: invertible TQFTs (with a given tangential
structure $H$, dimension $n$) form a Picard groupoid / connective
spectrum, and deformation classes are computed by stable homotopy of
Madsen–Tillmann spectra (a generalised cohomology of $BH$).

Distinctive contributions of the book, in roughly the order of the lectures:

1. **The Atiyah–Segal Axiom System** for field theory (Introduction;
   Lectures 1, 3). A field theory is a symmetric monoidal functor
   $F : \mathrm{Bord}_n^H \to \mathcal{C}$ where the domain is a
   bordism category of $n$-manifolds with structure $H$ (orientation,
   spin, framing, …) and the codomain is typically $\mathrm{sVect}_\mathbb{C}$
   or a higher target. Originated by Segal 1988 (CFT) and Atiyah 1988
   (topological case); Freed presents the unified modern formulation.
2. **Bordism categories and worked low-dimensional examples**
   (Lecture 1; Lecture 4). Classification of 1d and 2d TQFTs: 2d
   oriented TQFTs ↔ commutative Frobenius algebras (Dijkgraaf–Abrams
   thesis), 1d framed/oriented theories worked explicitly.
3. **The Wick rotation viewpoint** (Lectures 2, 3, 7). Quantum mechanics
   and relativistic QFT are recast as Wick-rotated (Euclidean) field
   theories, motivating the bordism axiom system from the physics side
   rather than presenting it as an isolated mathematical definition.
4. **Extended locality and the cobordism hypothesis** (Lecture 5).
   Higher categories, extended bordism $(\infty, n)$-categories,
   extended TQFTs, fully extended (down to points) — the
   Baez–Dolan–Lurie cobordism hypothesis is sketched, not proved.
5. **Invertible field theories and stable homotopy theory**
   (Lecture 6). Invertible $n$-dim TQFTs with structure $H$ are
   classified by maps of spectra $MTH \to \Sigma^{n+1} I_\mathbb{Z}$
   (in the deformation-class / continuous setting). Madsen–Tillmann
   spectra $MTH$, the sphere spectrum, Anderson dual $I_\mathbb{Z}$.
   This is the core Freed–Hopkins technical content.
6. **Reflection positivity, extended unitarity, and the Pin / Pin\$^c\$
   double covers** (Lectures 7, 8). Wick-rotated unitarity becomes a
   reflection-positivity datum; equivariant spectra over $\mathbb{Z}/2$
   capture orientation-reversal.
7. **Non-topological invertible field theories** (Lecture 9).
   Short-range entangled lattice systems, the long-range limit of
   3d Yang–Mills + Chern–Simons; differential cohomology refinements.
8. **Computations for free-fermion / electron systems and the 10-fold
   way** (Lecture 10). Connects the abstract classification to
   Altland–Zirnbauer symmetry classes and topological-insulator phase
   tables — the original physics motivation closed up.
9. **Anomalies as invertible field theories in one dimension higher**
   (Lecture 11). Anomalies of an $n$-dim QFT are realised as boundary
   theories for an invertible $(n+1)$-dim theory — Freed's signature
   reinterpretation; Pfaffians of Dirac operators worked as the
   prototype.

Source pedigree and peer-cited corroborations:

- **M. F. Atiyah,** "Topological quantum field theories," *Publ. Math.
  IHÉS* 68 (1988) 175–186 — the original Atiyah axioms; Freed cites
  this as the topological half of the axiom-system pedigree.
- **G. Segal,** "The definition of conformal field theory," in
  *Topology, Geometry, and Quantum Field Theory* (London Math. Soc.
  Lecture Note Series 308, 2004; original preprint 1988) — the
  Segal CFT axioms that the Atiyah axioms are a topological
  restriction of.
- **J. Lurie,** "On the classification of topological field theories,"
  *Current Developments in Mathematics* 2008 (2009) 129–280 —
  the cobordism-hypothesis sketch that Lecture 5 surveys.
- **S. Stolz, P. Teichner,** "Supersymmetric field theories and
  generalized cohomology," in *Mathematical Foundations of Quantum
  Field Theory and Perturbative String Theory*, Proc. Sympos. Pure
  Math. 83 (AMS 2011) 279–340 — establishes that classes of
  field theories realize cohomology theories (the Stolz–Teichner
  program). Freed uses this as background but does not prove it.
- **D. S. Freed, M. J. Hopkins,** "Reflection positivity and invertible
  topological phases," *Geom. Topol.* 25 (2021, ArXiv 2016) 1165–1330
  — the joint paper these lectures are *based on*; the lectures are
  Freed's pedagogical companion volume.
- **A. Kapustin,** "Symmetry protected topological phases, anomalies,
  and cobordisms: beyond group cohomology," ArXiv 1403.1467 (2014)
  — the physics-side parallel classification of SPT phases by
  cobordism that the Freed–Hopkins framework subsumes and refines.

The book is **not** a first introduction to QFT, topology, or higher
categories. It assumes basic algebraic topology (singular homology,
spectra, generalised cohomology), some quantum mechanics, and
familiarity with symmetric-monoidal-category language. Lecture 1 is
the only self-contained low-prerequisite entry point.

---

## §2 Coverage table (Codex vs Freed)

Cross-referenced against the current Codex corpus
(`content/` tree, May 2026 audit snapshot).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| Freed topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Symmetric monoidal categories (Appendix A) | — | ✗ | **Gap.** Some monoidal-functor language scattered (RT, K-theory) but no dedicated unit; needed as prerequisite glue for any TQFT pass. |
| Picard groupoids / Picard category (App. A.4) | — | ✗ | **Gap.** Needed for invertible-TQFT classification. |
| Symmetric monoidal duality (App. A.2) | — | ✗ | **Gap.** Dualizable objects; load-bearing for cobordism hypothesis. |
| Classical bordism (Lecture 1.1) | △ | △ | `03.12.04-spectrum.md` mentions bordism as a generalised cohomology theory (Thom spectrum). No standalone bordism-category unit. |
| Bordism category $\mathrm{Bord}_n$ (Lecture 1.2) | — | ✗ | **Gap (high priority — the central object of the book).** |
| Atiyah–Segal axioms / TQFT as symmetric-monoidal functor (Lect. 1.2, 3.1) | △ | △ | Only a passing reference in `03.10.02-cft-basics.md` ("modular-functor / TQFT formulation"). No dedicated unit. **Gap.** |
| Manifolds with tangential structure $H$ (orientation, spin, framing, Spin$^c$) (Lect. 1.3) | △ | △ | Spin in `03.09.04-spin-structure.md`; orientation throughout. No unified "tangential structure" framing. |
| Super vector spaces $\mathrm{sVect}$ (Lect. 1.4) | — | ✗ | **Gap.** Z/2-graded vector spaces, super-trace, Koszul sign. |
| Bordism ↔ homotopy theory (Pontryagin–Thom) (Lect. 1.5) | △ | △ | `03.12.04-spectrum.md` mentions bordism spectra; no Pontryagin–Thom theorem unit. |
| Quantum mechanics axiomatic / Hamiltonian / observables (Lect. 2) | △ | △ | `12-quantum/01-foundations/` likely has some content (not audited here); Freed's "Axiom System for QM" is field-theory-framed and probably distinct. |
| Wick rotation in QM / QFT (Lect. 2.5, 3.3) | — | ✗ | **Gap.** Imaginary-time formulation; reflection-positivity setup. |
| Toric code / lattice TQFT example (Lect. 2.3) | — | ✗ | **Gap.** Worked example, condensed-matter side. |
| Classification of 2d oriented TQFTs ↔ commutative Frobenius algebras (Lect. 4.2) | — | ✗ | **Gap (high priority — the canonical first non-trivial example).** |
| Classification of 1d TQFTs (Lect. 4.4) | — | ✗ | **Gap.** Easy warm-up example. |
| 2d area-dependent theories (Lect. 4.3) | — | ✗ | **Gap.** |
| Higher categories — definitions and examples (Lect. 5.1, 5.2) | — | ✗ | **Gap.** No bicategory / $(\infty,n)$-category unit anywhere in Codex. |
| Extended TQFTs (Lect. 5.3) | — | ✗ | **Gap.** |
| Cobordism hypothesis (Baez–Dolan–Lurie) (Lect. 5.6) | — | ✗ | **Gap (high priority — Master-tier pointer unit minimum).** |
| Invertible field theories (Lect. 6.2) | — | ✗ | **Gap.** Central object of the Freed–Hopkins program. |
| Madsen–Tillmann spectra $MTH$ (Lect. 6.6) | — | ✗ | **Gap.** Connects to `03.12.04-spectrum.md`. |
| Anderson dual to sphere spectrum $I_\mathbb{Z}$ (Lect. 6.7) | — | ✗ | **Gap.** Stable-homotopy machinery. |
| Invertible TQFTs as spectrum maps $MTH \to \Sigma^{n+1} I_\mathbb{Z}$ (Lect. 6.8) | — | ✗ | **Gap (high priority — Freed–Hopkins classification theorem).** |
| Reflection positivity (Lect. 7) | — | ✗ | **Gap.** Osterwalder–Schrader at the abstract level. |
| Extended positivity / equivariant spectra (Lect. 8) | — | ✗ | **Gap.** |
| Short-range entangled lattice systems / SPT phases (Lect. 9.1) | — | ✗ | **Gap.** Physics-side endpoint. |
| Long-range limit Yang–Mills + Chern–Simons (Lect. 9.2) | △ | △ | `03.07-gauge-theory/` covers Yang–Mills geometry but not Chern–Simons TQFT. **Gap on the CS side.** |
| Differential cohomology (Lect. 9.4) | — | ✗ | **Gap.** Cheeger–Simons, Deligne cohomology. |
| 10-fold way for free electrons (Lect. 10.1) | △ | △ | `03.09.12-kr-theory.md` covers $KR$-theory and Altland–Zirnbauer's 10-fold way is a $KR$ application; check whether the Codex unit mentions phase classes. |
| Anomalies as invertible field theories (Lect. 11) | — | ✗ | **Gap.** Pfaffians of Dirac operators connects to `03.09.10-atiyah-singer-index-theorem.md`. |

**Aggregate coverage estimate:** ~3% of Freed has a directly
corresponding Codex unit. The two △ rows on bordism (Pontryagin–Thom
sketch inside the spectrum unit) and the Spin / $KR$ rows from
`03-modern-geometry/09-spin-geometry/` are the only material connections.
The TQFT track is a near-total gap. This is expected: Codex has invested
in *geometry* of fields (gauge theory, characteristic classes, index
theorem) but not in the *categorical-axiomatic* face of field theory.

---

## §3 Gap punch-list (priority-ordered units to write)

**Priority 0 — prerequisite glue (small but load-bearing):**

1. **`01.02.NN` Symmetric monoidal category.** Definition, coherence,
   symmetric monoidal functor, duality. Anchored on Mac Lane and
   Appendix A of Freed. ~1200 words; Beginner + Intermediate + Master.
2. **`01.02.NN+1` Picard groupoid / Picard category.** Invertible-only
   subcategory of a symmetric monoidal category, equivalent to a
   2-truncated connective spectrum. ~1000 words; Master-emphasised.
3. **`03.MM.NN` Super vector spaces.** $\mathbb{Z}/2$-grading,
   super-trace, Koszul sign rule. ~800 words. Slots into either
   `03-modern-geometry/01-tensor-algebra/` or `07-representation-theory/`.

**Priority 1 — core TQFT content (book's central machinery):**

4. **`03.NN.01` Bordism category $\mathrm{Bord}_n^H$.** Objects =
   closed $(n-1)$-manifolds with structure $H$; morphisms = bordisms
   modulo diffeomorphism rel boundary; symmetric monoidal under
   disjoint union. Standard examples: $\mathrm{Bord}_2^{\mathrm{or}}$.
   Freed Lecture 1.2 anchor; Atiyah 1988 originator citation.
   ~1800 words; three-tier.
5. **`03.NN.02` Atiyah–Segal axioms / TQFT as symmetric-monoidal
   functor.** Definition: $F : \mathrm{Bord}_n^H \to \mathrm{sVect}_\mathbb{C}$.
   Worked: state spaces, partition functions, gluing.
   Freed Lecture 1.2, 3.1 anchor; Atiyah 1988 + Segal 1988 (CFT) +
   Segal 2004 originators. ~2000 words; three-tier.
6. **`03.NN.03` Pontryagin–Thom theorem and bordism as homotopy
   theory.** Statement (oriented / unoriented / framed cobordism
   ring isomorphic to $\pi_*$ of Thom spectrum). Sketch only.
   Freed Lecture 1.5 anchor; classical (Pontryagin 1950, Thom 1954).
   Lateral connection to `03.12.04-spectrum.md`. ~1500 words.
7. **`03.NN.04` Classification of 2d oriented TQFTs ↔ commutative
   Frobenius algebras.** Statement + proof sketch (pair-of-pants,
   cap, cup generate $\mathrm{Bord}_2^{\mathrm{or}}$; relations
   reduce to Frobenius axioms). Worked: $A = \mathbb{C}[G]$
   group-algebra example (Dijkgraaf–Witten 2d).
   Freed Lecture 4.2 anchor; Abrams 1996 / Dijkgraaf thesis 1989
   originators. ~1800 words; *signature worked computation* of TQFT.
8. **`03.NN.05` Classification of 1d TQFTs.** 1d framed and oriented
   theories; tells the reader the entire game in one example.
   Freed Lecture 4.4 anchor. ~800 words; Beginner+Intermediate only.

**Priority 2 — extended TQFT and the cobordism hypothesis (pointer-tier):**

9. **`03.NN.06` Higher categories: bicategories and $(\infty, n)$-
   categories (pointer).** Definitions only, Segal-space / complete
   Segal model named, $n$-category structure of the extended bordism
   category named. Freed Lecture 5.1–5.2 anchor; Lurie 2009 *On the
   classification of TQFTs* as anchor for the cobordism-hypothesis pass.
   ~1500 words; Master-only.
10. **`03.NN.07` Extended TQFTs and the cobordism hypothesis.**
    Statement of Baez–Dolan–Lurie: fully extended $n$-dim framed
    TQFTs valued in symmetric monoidal $(\infty, n)$-category
    $\mathcal{C}$ are classified by fully dualizable objects of
    $\mathcal{C}$. Sketch only; no proof. Freed Lecture 5.6 anchor;
    Baez–Dolan 1995 + Lurie 2009 originators. ~1500 words; Master-only.

**Priority 3 — Freed–Hopkins invertible TQFT classification:**

11. **`03.NN.08` Invertible field theories.** Definition (lands in
    the Picard subcategory of the target); first examples (Euler
    theory in 1d, Arf in 2d, signature in 4d). Freed Lecture 6.1–6.2
    anchor. ~1200 words.
12. **`03.NN.09` Madsen–Tillmann spectra $MTH$.** Definition via
    Thom spectrum construction on tangential structure $H$; relation
    to classical Thom spectra $MO, MSO, M\mathrm{Spin}$ in
    `03.12.04-spectrum.md`. Freed Lecture 6.6 anchor; Madsen–Tillmann
    2007 originator (*Acta Math.*). ~1500 words; Master.
13. **`03.NN.10` Anderson dual $I_\mathbb{Z}$, invertible TQFTs as
    spectrum maps.** The Freed–Hopkins classification theorem
    (statement): deformation classes of invertible $n$-dim $H$-TQFTs
    with values in $\mathrm{sVect}_\mathbb{C}$ are
    $[\Sigma^{-1} MTH, \Sigma^{n+1} I_\mathbb{Z}]$. Freed Lecture 6.7–6.8
    anchor; Freed–Hopkins 2016/2021 *Geom. Topol.* originator.
    ~1800 words; Master only. **Master-tier signature unit.**

**Priority 4 — applications and pointer endpoints (Master-tier only):**

14. **`03.NN.11` Reflection positivity (pointer).** Wick-rotated
    unitarity, abstract reflection structure. Freed Lecture 7.
    ~1000 words.
15. **`03.NN.12` SPT phases / 10-fold way TQFT classification
    (pointer).** Bridges Freed Lecture 10 to existing
    `03.09.12-kr-theory.md` (Altland–Zirnbauer table is a $KR$-theory
    application). Add as Master section to `03.09.12` rather than
    standalone unit. Kapustin 2014 + Freed–Hopkins 2016 originators.
16. **`03.NN.13` Anomalies as invertible field theories (pointer).**
    The "anomaly inflow" framework as boundary theories of an
    invertible $(n+1)$-theory. Connects to `03.09.10-atiyah-singer`
    via Pfaffian-of-Dirac. Freed Lecture 11 anchor. Master section
    on `03.09.10` rather than standalone unit.

**Tally:** 13 standalone new units (3 prereq + 5 priority-1 + 2 priority-2 +
3 priority-3) + 2 Master sections grafted onto existing units (priority-4
items 15, 16). Plus 1 lateral-connection edit to `03.10.02-cft-basics.md`
to point at the new TQFT cluster.

---

## §4 Implementation sketch and hour estimates

**Per-unit estimate** (matches the corpus average for survey-tier units
with originator-prose treatment):

- Priority 0 (prereq glue): ~2 hours × 3 units = ~6 hours.
- Priority 1 (core TQFT): ~3.5 hours × 5 units = ~17–18 hours.
- Priority 2 (cobordism hypothesis pointer cluster): ~3 hours × 2 units
  = ~6 hours.
- Priority 3 (Freed–Hopkins classification): ~4 hours × 3 units =
  ~12 hours. Unit 13 is harder than average — the spectrum classification
  needs careful exposition of the Anderson dual.
- Priority 4 (grafted Master sections): ~1.5 hours × 2 = ~3 hours.

**Total:** ~44 hours of focused production. Fits a focused
6–8 day production window.

**Routing decision:** The new units don't fit cleanly into an existing
`03-modern-geometry/NN-*/` slot. Recommend opening a new section
`03-modern-geometry/14-tqft/` (or `15-tqft/` if 14 is reserved) for the
TQFT cluster. Alternative: graft into `10-conformal-field-theory/` as
`10.NN` since CFT is the historical sibling, but this would dilute the
CFT chapter's identity. **Recommendation: new section `14-tqft/`.**

**Originator-prose targets** (per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10):

- **Witten 1988**, "Topological quantum field theory," *Commun.
  Math. Phys.* 117, 353–386 — the physics-side origin (Donaldson
  invariants as a TQFT path integral); originator-cite in units 4–5.
- **Atiyah 1988**, "Topological quantum field theories," *Publ.
  Math. IHÉS* 68, 175–186 — the axiomatic origin; originator-cite
  in units 4–5.
- **Segal 1988 / Segal 2004**, "The definition of conformal field
  theory" — the parallel CFT origin and the model the Atiyah axioms
  shorten; originator-cite in units 5 and 11.
- **Lurie 2009**, "On the classification of topological field
  theories" — originator-cite for cobordism hypothesis in units 9–10.
- **Freed–Hopkins 2016/2021**, "Reflection positivity and invertible
  topological phases," *Geom. Topol.* 25, 1165–1330 — originator-cite
  for unit 13 (the Master-tier signature unit).

**Notation crosswalk.** Freed uses $\mathrm{Bord}_n^H$ for the bordism
category with tangential structure $H$ (a homomorphism $H \to O(n)$);
$\mathrm{Bord}_{\langle n-1, n \rangle}^H$ for the one-categorical
truncation; $\mathrm{Bord}_n^{H, \mathrm{ext}}$ for the extended
$(\infty, n)$-version. He writes $MTH$ for the Madsen–Tillmann
spectrum (note: the $T$ is tangential, *not* "Thom"; distinct from
$MH$). The Anderson dual is $I_\mathbb{Z}$. The Codex should adopt
all four conventions verbatim. Record in a §Notation paragraph in
units 4 and 12.

---

## §5 What this plan does NOT cover

- **A line-by-line P1 inventory of all 11 lectures + appendix.** The
  book is 186 pp.; the punch-list above captures the load-bearing
  theorems. Per-theorem audit deferred.
- **The Lurie HTT / HA machinery underlying the cobordism hypothesis.**
  Treated as a sketched pointer only (unit 10). A genuine HTT/HA pass
  is a multi-month project routed through `04-algebraic-geometry/` and
  a future $\infty$-category section.
- **Stolz–Teichner deep details** (supersymmetric field theories ↔
  $K$-theory / $\mathrm{tmf}$). Mentioned in passing in unit 5 only;
  full Stolz–Teichner coverage is a separate Fast Track entry and a
  separate audit pass.
- **Companion volume Ayala–Freed–Grady (AFG) supplementary lectures.**
  Out of scope; the supplementary chapters are independent papers.
- **Exercise pack.** Freed contains exercises but the lecture set is
  primarily expository. Exercise production deferred to a P3-priority-3
  follow-up.
- **The 10-fold way physics derivation** beyond the pointer in unit 15.
  Deferred to the condensed-matter side of the corpus
  (`11-stat-mech-physics/` or `12-quantum/`).

---

## §6 Acceptance criteria for FT equivalence (Freed 3.05)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Freed's stated theorems / classifications in lectures 1–11
  map to Codex units. Currently ~3%; after priority-1 this rises to
  ~50%; after priority-1+2 to ~70%; after priority-1+2+3 to ~90%;
  priority-4 grafts and one CFT lateral-connection edit close the gap
  to ≥95%.
- ≥90% of Freed's named worked examples (2d Frobenius classification,
  1d theories, toric code, Dijkgraaf–Witten, 10-fold way) are either
  units or are referenced from units that name them as canonical.
- The Freed–Hopkins classification theorem (unit 13) ships at Master
  tier with the spectrum-map statement intact.
- Notation decisions ($\mathrm{Bord}_n^H$, $MTH$, $I_\mathbb{Z}$,
  $\mathrm{sVect}$) recorded in unit-level §Notation paragraphs.
- Pass-W weaving connects the new `14-tqft/` cluster to
  `03.09-spin-geometry/` (anomalies, $KR$-theory),
  `03.10-conformal-field-theory/` (CFT as a non-topological cousin),
  `03.12.04-spectrum.md` (Thom and Madsen–Tillmann spectra), and
  `03.07-gauge-theory/` (Chern–Simons as a TQFT example).

The 5 priority-1 units close the largest equivalence gap. Priority-3
units 11–13 are required for the Master-tier signature material and
constitute the actual Freed-Hopkins content the book is named for;
omitting them would coverage at the level of *any* TQFT survey, not
specifically of *this* book.

---

## §7 Sourcing

- **Source PDF (used for audit):**
  `reference/book-collection/free-downloads/Freed-CBMS_Field_Theory_and_Topology.pdf`
  — author's preliminary version; AMS permission granted; not to be
  reposted. Sufficient for audit and unit production; cite the
  *published* AMS edition in unit bibliographies once the published
  version is checked for pagination drift.
- **Published edition:** Daniel S. Freed, *Lectures on Field Theory
  and Topology*, CBMS Regional Conference Series in Mathematics, No.
  133, AMS / CBMS / NSF, 2019. ISBN 978-1-4704-5206-3.
- **Companion paper (anchor for unit 13):** D. S. Freed, M. J. Hopkins,
  "Reflection positivity and invertible topological phases,"
  *Geom. Topol.* 25 (2021) 1165–1330 (ArXiv 1604.06527, 2016).
- **License note:** The lectures are based on the Freed–Hopkins paper
  with additional pedagogical material; cite Freed (2019) for the
  lectures and Freed–Hopkins (2021) for the classification theorem
  proper.
- **Local availability for FT 3.05 catalog update:** The author-
  preliminary PDF resolves the catalog's "? (AMS may have partial)"
  flag. Update `docs/catalogs/FASTTRACK_BOOKLIST.md` 3.05 line to
  "**FREE** (author-preliminary, AMS permission)" with the local-path
  pointer above.
- **Distinct from:** `reference/fasttrack-texts/03-modern-geometry/Freed-AspectsOfFieldTheory.pdf`
  (a separate, earlier Freed text — *Aspects of Field Theory* — and
  **not** the FT 3.05 source). The FT 3.05 PDF is in the
  `book-collection/free-downloads/` tree under the filename
  `Freed-CBMS_Field_Theory_and_Topology.pdf`.
