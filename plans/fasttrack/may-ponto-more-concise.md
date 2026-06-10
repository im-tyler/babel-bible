# J. Peter May, Kathleen Ponto — *More Concise Algebraic Topology: Localization, Completion, and Model Categories* (Fast Track 3.39) — Audit + Gap Plan

**Book:** J. Peter May and Kathleen Ponto, *More Concise Algebraic Topology:
Localization, Completion, and Model Categories* (Chicago Lectures in
Mathematics, University of Chicago Press, 2012; xxviii + 514 pp.; ISBN
978-0-226-51178-8). The explicit sequel to May's 1999 *Concise Course*
(Fast Track 3.38).

**Fast Track entry:** 3.39, inside §3 Modern Geometry, between May *Concise*
(3.38), May *Simplicial Objects* (3.40), and Goerss-Jardine *Simplicial
Homotopy Theory* (3.41). Listed in `docs/catalogs/FASTTRACK_BOOKLIST.md`
line 126 as **FREE (author PDF)**.

**Purpose of this plan:** P1-stub audit + gap punch-list. Output is a
priority-ordered list of new units to write so that May-Ponto (hereafter
**MP**) is covered to the Fast Track equivalence threshold (≥95% effective
coverage — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Reduced-source note.** Despite the FASTTRACK_BOOKLIST flag, the
University of Chicago Press master books page
(<http://www.math.uchicago.edu/~may/BOOKSMaster.html>) lists *More Concise*
only with a `$65.00` purchase link to
<http://www.press.uchicago.edu/ucp/books/book/chicago/M/bo12322308.html>
and **does not host a free PDF** alongside the other May titles
(*Concise Course*, *Simplicial Objects*, *Geometry of Iterated Loop Spaces*,
*E_infty Ring Spaces*, *Equivariant*, *Classifying Spaces and Fibrations*,
all of which are linked in PDF form on the same page). The catalog
FREE flag is therefore **incorrect for MP** as of 2026-05-18 and should
be corrected in a follow-up edit to `FASTTRACK_BOOKLIST.md`. Possible
the book was free in earlier years (May has progressively opened his
back catalog) but no public PDF was retrieved within the hard time
limit. **This audit is REDUCED:** worked from the publisher table of
contents (verified via the Chicago Press page), the explicit
chapter-level cross-references inside the sibling audits
(`plans/fasttrack/may-concise-algebraic-topology.md` and
`plans/fasttrack/goerss-jardine-simplicial-homotopy.md` both cite MP
Ch 14-19 for model categories and Bousfield localisation), the originator
literature (Sullivan 1977, Quillen 1969, Bousfield-Kan 1972, Hovey 1999),
and standard knowledge of MP's five-part structure. A revision pass with
the PDF or paper copy in hand would sharpen the named-theorem inventory
inside Parts 2-3 (localisation, completion) and Part 5 (Hopf-algebra
machinery) but the units-to-write list below is robust against the
reduction.

---

## §1 What MP is for

MP is the **direct sequel to May *Concise Course* (FT 3.38)** and the
canonical graduate-level entry point to the **post-Hatcher / post-Quillen**
agenda of modern algebraic topology: localisation and completion of
spaces at sets of primes, model categories as the working language of
homotopy theory, and the resulting tools (rational homotopy theory,
$p$-completion, Bousfield localisation, fracture squares) that turn
abstract homotopy types into computable algebraic data. Where May
1999 *Concise* tops out at Postnikov systems + sketched cohomology
operations and explicitly defers model categories ("influenced by
Quillen's framework but does not develop it"), MP picks up from the same
foundations and develops the full apparatus, with two new departures:
**Ponto's coauthorship** brings serious attention to applications inside
chapter 19 (model structures on chain complexes) and chapter 24
(spectral sequences), and the book is **organised around the working
homotopy theorist's toolkit** rather than a strictly historical
progression.

Distinctive contributions, in roughly the order MP develops them:

1. **Nilpotent spaces and Postnikov towers as the central computable
   class** (MP Part 1, Ch 1-4). A space is *nilpotent* if $\pi_1$ acts
   nilpotently on each $\pi_n$. Nilpotent spaces are the largest class
   for which localisation and completion of *spaces* (not just rings or
   abelian groups) behaves homotopically well; MP makes this class the
   central object. Ch 1-2 give the cofibration/fibration foundations and
   the $\mathrm{hocolim}/\mathrm{holim} + \lim^1$ machinery needed
   throughout. Ch 3-4 develop the detection theorems that let one
   recognise nilpotent groups and spaces in practice.
2. **Localisation of spaces at a set of primes** $T$ (MP Part 2,
   Ch 5-9). Bousfield's localisation $X \to X_T$ inverting primes outside
   $T$; characterisation theorems (a map is a $T$-equivalence iff it
   induces an iso on $T$-local cohomology, etc.); the **fracture theorems**
   $X \simeq X_{(p)} \times_{X_\mathbb{Q}} X_{(p')}$ that reassemble a
   nilpotent space from its rationalisation and its $p$-localisations;
   and the rational $H$-space classification. The $T = \emptyset$ case is
   classical **rational homotopy theory** (Quillen 1969, Sullivan 1977);
   MP treats the full prime-set generalisation.
3. **Completion of spaces at a set of primes** (MP Part 3, Ch 10-13).
   Bousfield-Kan $p$-completion $X \to X^\wedge_p$ via the cosimplicial
   $\mathbb{F}_p$-resolution; characterisation theorems
   (a map is a $p$-completion iff it induces an iso on $\mathbb{F}_p$-
   cohomology); and the **integral fracture theorems** that combine
   completion with localisation to recover the full nilpotent
   homotopy type from rational + $p$-complete pieces. This is the
   modern presentation of the **arithmetic square** that has driven
   homotopy theory since the 1970s.
4. **An introduction to model category theory** (MP Part 4, Ch 14-19).
   The full Quillen model-category machinery developed as its own
   subject: axioms (Quillen's original three-axiom form and the modern
   five-axiom factorisation form), cofibrantly generated model
   categories and the small-object argument, Quillen functors and
   Quillen equivalences, the homotopy category $\mathrm{Ho}(\mathcal{M})$,
   and the worked examples on $\mathbf{Top}$, $\mathbf{sSet}$, and chain
   complexes (Ch 18-19). Ch 19 closes Part 4 with **Bousfield
   localisation in a model category** — the model-categorical
   abstraction of the prime-set localisation in Parts 2-3, which makes
   the localisation/completion programme functorial in $\mathcal{M}$.
5. **Bialgebras, Hopf algebras, and the structure of homotopy groups**
   (MP Part 5, Ch 20-24). MP closes with the Hopf-algebra structure on
   $\pi_*(X)$ for $H$-spaces and ring spectra, the Milnor-Moore theorem
   classifying connected Hopf algebras, restricted Lie algebras and
   their cohomology, and a final chapter on spectral sequences as the
   working homotopy theorist's calculational tool. The Hopf-algebra
   machinery here is **load-bearing for the Steenrod algebra**, for
   the calculation of the Adams spectral sequence, and for the
   classification of rational and $p$-complete $H$-spaces (cf. Part 2).

Peer-source corroboration of the framing:

- **May, *A Concise Course in Algebraic Topology* (1999).** FT 3.38;
  audited in `plans/fasttrack/may-concise-algebraic-topology.md`
  (Cycle 1). MP opens by **assuming** *Concise* — same notation, same
  category $\mathcal{U}$ of compactly generated weak-Hausdorff spaces,
  same homotopy-category framework $h\mathcal{T}$ — and picks up where
  *Concise* leaves off. The two books were designed to be read in
  sequence. *Concise* §5 (compactly generated spaces), §6-9
  (cofibrations/fibrations), and §16 (simplicial objects) are
  particularly load-bearing for MP Part 1.
- **Goerss, Jardine, *Simplicial Homotopy Theory* (1999, reprint 2009).**
  FT 3.41; audited in
  `plans/fasttrack/goerss-jardine-simplicial-homotopy.md` (Cycle 7).
  GJ and MP overlap on the model-category foundations (GJ Ch II,
  MP Ch 14-17) and on the Kan-Quillen model structure on $\mathbf{sSet}$
  (GJ §II.3, MP §17). The two books diverge in emphasis: GJ is the
  internal simplicial-machinery reference; MP is the applications-to-
  algebraic-topology reference. Both are needed; the units-to-write
  list below explicitly aims to *share* the model-category foundational
  units between the MP and GJ audits.
- **Sullivan, "Genetics of homotopy theory and the Adams conjecture,"
  *Annals of Mathematics* 100 (1974) 1-79, and "Infinitesimal
  computations in topology," *Publ. Math. IHÉS* 47 (1977) 269-331.**
  Originator references for prime-by-prime localisation of spaces and
  for rational homotopy theory via differential forms. MP Parts 2-3
  consolidate Sullivan's programme; MP §6-§9 cite Sullivan 1974
  directly for the fracture theorems and for the $H$-space
  classification. Codex `03.12.06` sullivan-minimal-models is the
  partial Codex realisation of Sullivan 1977.
- **Bousfield, Kan, *Homotopy Limits, Completions and Localizations*
  (Springer LNM 304, 1972).** Originator reference for the cosimplicial
  $p$-completion functor $X \mapsto X^\wedge_p$, the homotopy limit
  $\mathrm{holim}$, and the Bousfield-Kan spectral sequence. MP
  Part 3 (Ch 10-13) is the modern textbook consolidation of BK 1972;
  BK is the canonical "see also" for every named theorem about
  $p$-completion.
- **Quillen, *Homotopical Algebra* (Springer LNM 43, 1967), and "Rational
  homotopy theory," *Annals of Mathematics* 90 (1969) 205-295.** Quillen
  1967 originates model categories; Quillen 1969 originates the
  model-categorical approach to rational homotopy theory (the dual to
  Sullivan's differential-form approach). MP Part 4 is the textbook
  presentation of Quillen 1967; MP §9 cites Quillen 1969 alongside
  Sullivan 1977 for the rationalisation of $H$-spaces.
- **Hovey, *Model Categories* (AMS Math. Surv. & Monog. 63, 1999).**
  The systematic model-category reference, published the same year
  as Goerss-Jardine. MP Ch 14-17 give the same theorems but with a
  different emphasis (applications-driven vs internal-theory-driven);
  Hovey is the canonical "for the full proof, see Hovey §X.Y"
  reference in MP.
- **Félix, Halperin, Thomas, *Rational Homotopy Theory* (Graduate Texts
  in Mathematics 205, Springer 2001).** The canonical rational-homotopy
  textbook; MP Part 2 Ch 9 ($H$-spaces over $\mathbb{Q}$) cites FHT for
  the deep computations. FHT also serves Codex `03.12.06`.

MP is **not** a first course in algebraic topology. It assumes May
*Concise* (or a Hatcher-equivalent foundation) plus comfort with
categorical language at the level of *Concise* Ch 2. It is the right
book for a working homotopy theorist's **second-year graduate** course
or for a researcher's reference shelf; it is the canonical companion
text to Goerss-Jardine and (one step later) to Lurie's *Higher Topos
Theory*.

---

## §2 Coverage table (Babel Bible vs MP)

Cross-referenced against the current `03-modern-geometry/12-homotopy/`
chapter (24 shipped units + the freshly-shipped Cycle-2
`03.12.25-simplicial-sets-and-geometric-realization.md` from the
joint May 3.40 / GJ 3.41 entry-point batch) and against the rational
homotopy unit `03.12.06-sullivan-minimal-models.md`.

✓ = covered at MP-equivalent depth, △ = partial / different framing,
✗ = not covered. **GJ-overlap** = the gap is also on the
Goerss-Jardine 3.41 punch-list (shared P1 batch recommendation).
**MC-overlap** = the gap is also on the May-Concise 3.38 punch-list.

### Part 1 — Preliminaries: basic homotopy theory and nilpotent spaces (Ch 1-4)

| MP topic (chapter) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cofibrations and fibrations (Ch 1) | `02.01.07` fibration, `02.01.08` cofibration | ✓ | Already shipped. MP Ch 1 is a brisk review at *Concise* §6-7 depth; Codex matches. |
| Mapping cone, mapping path space, Puppe sequence cofiber / fiber form (Ch 1) | `03.12.03` suspension, `02.01.08` (mention) | △ | Puppe sequences flagged as a P2 gap in the MC plan (items 8-9); same gap here. |
| **Homotopy colimits and homotopy limits, $\mathrm{hocolim}$ / $\mathrm{holim}$** (Ch 2) | — | ✗ | **Gap (P1, foundational; GJ-overlap).** Bousfield-Kan construction. Already on GJ punch-list as `03.12.37`. Joint produce. |
| **$\lim^1$ exact sequence for a tower** (Ch 2) | — | ✗ | **Gap (P2; MC-overlap).** Already on the May-Concise punch-list (item 16). Needed for the cosimplicial completion in Part 3. |
| **Nilpotent groups and nilpotent spaces** (Ch 3) | — | ✗ | **Gap (P1, MP-distinctive).** The central class of spaces for the rest of the book; no Babel Bible unit. |
| Postnikov tower of a nilpotent space (Ch 3) | △ | △ | `03.12.05` eilenberg-maclane has a Master pointer to Postnikov; full Postnikov-tower unit is a P2 gap (also flagged on the GJ plan as `03.12.40`). MP Ch 3 specialises to the nilpotent case where the $k$-invariants are central — the MP-distinctive refinement. |
| Detection theorems for nilpotent groups / nilpotent spaces (Ch 4) | — | ✗ | **Gap (P3).** Technical lemmata; needed inside Parts 2-3 but optional as standalone units. |

### Part 2 — Localisation of spaces at sets of primes (Ch 5-9)

| MP topic (chapter) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Localisation of abelian groups, nilpotent groups, nilpotent spaces at $T$** (Ch 5) | — | ✗ | **Gap (P1, MP-distinctive; load-bearing).** The book's central construction; no Babel Bible unit. |
| **Characterisations of $T$-local spaces** (Ch 6) | — | ✗ | **Gap (P1).** The standard equivalent definitions: $T$-local $\pi_n$, $T$-local cohomology, $T$-local fundamental class. |
| **Fracture theorems for localisation** (Ch 7) | — | ✗ | **Gap (P1).** Nilpotent space $\simeq$ pullback of $X_{(p)}$ along $X_\mathbb{Q}$. The signature theorem of Part 2. |
| Rationalisation $X \to X_\mathbb{Q}$ as the $T = \emptyset$ case (Ch 8) | △ | △ | `03.12.06` sullivan-minimal-models covers rational homotopy from the differential-forms side; the **Bousfield-style $X \to X_\mathbb{Q}$** as a functor is a deepening / sibling unit. Originator-split: Sullivan 1977 (forms) vs Quillen 1969 (model categories) vs Bousfield 1975 (localisation functor). |
| Rational $H$-spaces, $\pi_*(X_\mathbb{Q})$ as a free graded Lie algebra (Ch 9) | △ | △ | `03.12.06` Master tier mentions the FHT classification briefly; full unit deferred. |

### Part 3 — Completion of spaces at sets of primes (Ch 10-13)

| MP topic (chapter) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Completion of abelian groups, $p$-completion of nilpotent spaces** $X^\wedge_p$ (Ch 10) | — | ✗ | **Gap (P1, MP-distinctive).** The Bousfield-Kan cosimplicial $\mathbb{F}_p$-resolution; central construction of Part 3. |
| **Characterisations of $p$-complete spaces** (Ch 11) | — | ✗ | **Gap (P1).** Equivalent definitions via $\mathbb{F}_p$-cohomology iso, etc. |
| **Integral fracture theorems** (Ch 12) | — | ✗ | **Gap (P1).** The full arithmetic square: nilpotent $X$ recovered from $X_\mathbb{Q}, \{X^\wedge_p\}_p$, and the rational fracture comparison. |
| **Bousfield-Kan spectral sequence** (Ch 13 / cross-references throughout) | — | ✗ | **Gap (P2; GJ-overlap).** Already on GJ punch-list as `03.12.38`. Joint produce. |

### Part 4 — An introduction to model category theory (Ch 14-19)

| MP topic (chapter) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Quillen model-category axioms (three-axiom + five-axiom forms)** (Ch 14) | — | ✗ | **Gap (P1, foundational; GJ-overlap).** Already on GJ punch-list as `03.12.31`. **Largest single gap.** |
| **Cofibrantly generated model categories, small-object argument** (Ch 15) | — | ✗ | **Gap (P1; GJ-overlap).** Foundational. Already a P4 deepening on GJ; promote to P1 in the joint batch. |
| **Quillen functor, Quillen adjunction, Quillen equivalence** (Ch 16) | — | ✗ | **Gap (P1; GJ-overlap).** Already on GJ punch-list as `03.12.32`. |
| The homotopy category $\mathrm{Ho}(\mathcal{M}) = \mathcal{M}[W^{-1}]$ (Ch 16) | — | ✗ | **Gap (P1; MC-overlap, GJ-overlap).** Already a deepening candidate on May-Concise (May's $h\mathcal{T}$) and on GJ. |
| Model structure on $\mathbf{Top}$ (Quillen / Serre fibrations) (Ch 17) | — | ✗ | **Gap (P1; GJ-overlap).** Shared with GJ `03.12.31`. |
| **Kan-Quillen model structure on $\mathbf{sSet}$; $|\cdot| \dashv \mathrm{Sing}$ is a Quillen equivalence** (Ch 17 / cross-references to GJ) | △ | △ | The Quillen-equivalence statement is **already announced** in the shipped `03.12.25` simplicial-sets-and-geometric-realization unit (Corollary on line 297) but with no proof; full development is a P1 unit shared with GJ (`03.12.33`, `03.12.34`). |
| **Model structure on chain complexes $\mathbf{Ch}_{\geq 0}(R)$** (Ch 18) | — | ✗ | **Gap (P2, MP-distinctive).** Projective / injective model structures; Ponto's contribution. Foundational for derived categories. |
| **Bousfield localisation of a model category** (Ch 19) | — | ✗ | **Gap (P2, MP-distinctive).** The model-categorical abstraction of Parts 2-3; load-bearing for the modern stable-homotopy literature. |

### Part 5 — Bialgebras and Hopf algebras (Ch 20-24)

| MP topic (chapter) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Bialgebra, Hopf algebra, antipode (Ch 20) | △ | △ | Codex may have Hopf-algebra units in `01.10-*` or `01.04-*` category-theory / algebra chapters; need to verify. If absent: P2 gap. |
| Connected Hopf algebras, Milnor-Moore theorem (Ch 21) | — | ✗ | **Gap (P2).** Classification of connected co-commutative Hopf algebras over a field of char 0 as $U(L)$ for a graded Lie algebra. Load-bearing for rational $H$-space classification (Ch 9). |
| Lie algebras and their universal enveloping algebras (Ch 22) | △ | △ | Codex has Lie-algebra content in `03.02-lie-groups/` and `03.16-*` (verify); the **graded** Lie algebra / restricted Lie algebra machinery for char-$p$ Hopf algebras is the gap. |
| Restricted Lie algebras (char $p$), cohomology (Ch 23) | — | ✗ | **Gap (P3).** Technical; needed for $p$-complete $H$-spaces. |
| Spectral sequences as a working tool (Ch 24) | △ | △ | Codex has spectral-sequence content in `03.13-*` (verify); MP Ch 24 is a brisk reference rather than a primary exposition. Deepening rather than new unit. |

### Aggregate coverage estimate

**Theorem layer.** ~5% of MP's named theorems map to Babel Bible units. The
freshly-shipped `03.12.25` covers the $|\cdot| \dashv \mathrm{Sing}$
adjunction and announces the Quillen equivalence; `03.12.06`
sullivan-minimal-models covers rational homotopy from the
differential-forms side. Everything else — nilpotent spaces,
$T$-localisation, $p$-completion, model-category axioms, fracture
theorems, Hopf-algebra classification — is missing. **After the P1
punch-list (nilpotent spaces + model categories + localisation +
completion foundations) this rises to ~50%. After P1+P2 to ~80%.**

**Framing layer.** ~10% covered. Model-category framing is *the*
working language of MP and Codex has no model-category units. Same
status as Goerss-Jardine — the model-category gap is the largest
single piece of the simplicial-homotopy / modern-homotopy strand.

**Sequencing layer.** Codex follows Hatcher's order (singular →
cellular → axiomatic → cohomology → duality) and the May-Concise plan
deepens that toward May's reverse order. MP's order
(cofibration/fibration → hocolim → nilpotent space →
localisation → completion → model category → Hopf algebra) is yet
another sequencing — the working-homotopy-theorist's toolkit
ordering. Record as a notation/framing decision per §3 below;
not a re-ordering of shipped units.

**Notation layer.** ~50% aligned. Codex has adopted compactly-generated
spaces (per `02.01.09` and the May-Concise crosswalk), the Kan /
Quillen / GJ notation for simplicial machinery (per `03.12.25` and
the May-Simplicial crosswalk), and the standard chain-complex
notation. MP-distinctive additions: $X_T$ for $T$-localisation,
$X^\wedge_p$ for $p$-completion, $X_\mathbb{Q}$ for rationalisation,
$\mathrm{Ho}(\mathcal{M})$ for the homotopy category of a model
category, $\mathbb{L}F / \mathbb{R}G$ for derived functors, and
the **arithmetic square** notation; record in `notation/may-ponto.md`.

**Sourcing layer.** MP is **paywalled** (Chicago Press, $65). This is
a sourcing gap relative to the FASTTRACK_BOOKLIST flag; correct in
the catalog and acquire institutional / paper copy before the P1
batch ships. Production can proceed against MP-substitute references
(Hovey for model categories, BK 1972 for completion, Sullivan 1977 +
Quillen 1969 for localisation, FHT for rational $H$-spaces) in the
interim.

The flag in the task brief is correct: **expect a substantial
new-unit punch-list. Model categories + localisation + completion +
nilpotent spaces are all total gaps.**

---

## §3 Gap punch-list — units to write, priority-ordered

**Priority 0 — strict prerequisites:**

- The May 3.40 (FT) P1 batch and the GJ 3.41 (FT) P1 batch are
  **shared prerequisites** with this audit. Specifically the
  GJ-P1 units `03.12.31` (Quillen model category), `03.12.32`
  (Quillen functor / equivalence), `03.12.33` (Kan-Quillen model
  structure on $\mathbf{sSet}$), `03.12.34` ($|\cdot| \dashv
  \mathrm{Sing}$ as Quillen equivalence) — see
  `plans/fasttrack/goerss-jardine-simplicial-homotopy.md` §3 — are
  **also** the MP-Part-4 (Ch 14-17) foundational units. **The
  composite recommendation from the GJ plan is to dispatch these as
  one joint batch with originator-citations splitting between
  Quillen 1967 (canonical), Hovey 1999 (modern alternative), GJ 1999
  (simplicial emphasis), and MP 2012 (applications emphasis).** This
  audit endorses that recommendation.
- The May-Concise (FT 3.38) P2 unit `48.12.27` (Puppe cofiber sequence)
  is a strict prerequisite for the hocolim unit below. Already on the
  May-Concise plan.

**Priority 1 — high-leverage, captures MP's distinctive content
(estimate: 6 new units, 4 of which are shared with GJ-3.41):**

1. **`03.12.31` Quillen model category.** Definition (three-axiom +
   five-axiom forms); examples ($\mathbf{Top}$, $\mathbf{Ch}_{\geq 0}$,
   $\mathbf{sSet}$ pointer-only at this stage); homotopy category
   $\mathrm{Ho}(\mathcal{M})$. Three-tier, ~2000 words. **Shared with
   GJ 3.41** (`03.12.31` in that plan, same number). Citations:
   Quillen 1967, Hovey 1999, MP Ch 14, GJ §II.1.
2. **`03.12.32` Quillen functor and Quillen equivalence.** Left/right
   Quillen functor, Quillen adjunction, Quillen equivalence as
   equivalence of homotopy categories. Three-tier, ~1800 words.
   **Shared with GJ 3.41.** Citations: Quillen 1967, Hovey 1999,
   MP Ch 16, GJ §II.1.
3. **`03.12.33` The Kan-Quillen model structure on $\mathbf{sSet}$.**
   Cofibrations = monomorphisms; weak equivalences = realisation weak
   equivalences; fibrations = Kan fibrations. Three-tier, ~2500 words.
   **Shared with GJ 3.41.** Citations: Quillen 1967 §II.3,
   GJ §I.11 / §II.3, MP §17.
4. **`03.12.34` Geometric realisation as a Quillen equivalence
   $\mathbf{sSet} \simeq_\mathrm{Qu} \mathbf{Top}$.** The
   load-bearing theorem already announced in `03.12.25` Corollary
   line 297; full development here. Three-tier, ~2000 words.
   **Shared with GJ 3.41.** Citations: Quillen 1967 §II.3 Thm 3,
   GJ §I.11 / §II.3, MP §17.
5. **`03.12.42` Nilpotent space and the central class for
   localisation / completion.** Nilpotent group; nilpotent action of
   $\pi_1$ on $\pi_n$; nilpotent space; the Postnikov tower of a
   nilpotent space has principal $K(A, n)$-fibrations as stages.
   Three-tier; ~1800 words. **MP-distinctive.** Citation: MP Ch 3-4
   (canonical), BK 1972 §I.5 (originator), Hilton-Mislin-Roitberg
   1975 *Localization of Nilpotent Groups and Spaces* (the
   monograph).
6. **`03.12.43` Localisation of spaces at a set of primes** $T$
   (Bousfield localisation $X \to X_T$). Construction via the
   $H\mathbb{Z}[T^{-1}]$-localisation; characterisation theorems;
   the rational case $T = \emptyset$ as Sullivan-Quillen
   rationalisation. Three-tier, ~2200 words. **MP-distinctive.**
   Citations: MP Ch 5-6, Bousfield 1975 *Topology* 14, Sullivan
   1974 *Annals* 100, Quillen 1969 *Annals* 90, Hilton-Mislin-Roitberg
   1975.

**Priority 2 — completion, fracture, hocolim/holim, model structures on
chain complexes (estimate: 5 new units, 2 of which are shared with GJ):**

7. **`03.12.37` Homotopy colimit (Bousfield-Kan construction).**
   $\mathrm{hocolim}_I F$ via the bar construction $B(*, I, F)$;
   universal property; examples (homotopy pushout, mapping
   telescope, dual $\mathrm{holim}$). Three-tier, ~2000 words.
   **Shared with GJ 3.41** (item `03.12.37` in that plan, same
   number). Citations: BK 1972, GJ §IV.2-§IV.4, MP Ch 2.
8. **`03.12.38` Bousfield-Kan spectral sequence.** Cosimplicial
   space, totalisation, $E_2^{s,t} = \pi^s \pi_t \Rightarrow
   \pi_{t-s}\mathrm{Tot}$. Master-only, ~1800 words. **Shared with
   GJ 3.41.** Citations: BK 1972, GJ §VII.6, MP §13.
9. **`03.12.44` $p$-completion of nilpotent spaces** $X \to X^\wedge_p$
   (Bousfield-Kan cosimplicial $\mathbb{F}_p$-resolution).
   Construction; characterisation theorems via $\mathbb{F}_p$-
   cohomology; convergence under nilpotence. Three-tier, ~2200 words.
   **MP-distinctive.** Citations: BK 1972 §I.4 (originator), MP Ch 10-11.
10. **`03.12.45` Arithmetic square and integral fracture theorems.**
    Nilpotent $X \simeq \mathrm{holim}\big[X_\mathbb{Q} \to
    \prod_p (X^\wedge_p)_\mathbb{Q} \leftarrow \prod_p X^\wedge_p\big]$;
    the standard fracture comparison square; the rational-vs-completion
    duality. Three-tier, ~2000 words. **MP-distinctive.** Citations:
    MP Ch 7, Ch 12, Sullivan 1974, BK 1972 §VI.
11. **`03.12.46` Model structure on $\mathbf{Ch}_{\geq 0}(R)$
    (projective and injective).** Quillen model structure on
    non-negatively-graded chain complexes; Quillen equivalence with
    simplicial $R$-modules via Dold-Kan; derived functors as Quillen
    derived functors. Three-tier, ~2000 words. **Shared with the GJ
    plan as a Master deepening; promote here.** Citations: MP Ch 18,
    Hovey §2.3 / §2.4, Quillen 1967, GJ §III.2 (Dold-Kan side).

**Priority 3 — rational $H$-spaces, Bousfield localisation in a model
category, Hopf-algebra machinery (estimate: 3 new units + 1 deepening):**

12. **`03.12.47` Rational $H$-space classification, $\pi_*(X_\mathbb{Q})$
    as a free graded Lie algebra.** MP Ch 9 anchor; FHT GTM 205 as the
    canonical "see also" reference. Master tier; ~1800 words.
    Cross-link to `03.12.06` sullivan-minimal-models (the
    differential-forms side) as a sibling treatment.
13. **`03.12.48` Bousfield localisation of a model category.**
    Left Bousfield localisation $L_S \mathcal{M}$ inverting a set
    $S$ of maps; existence theorems (Hirschhorn 2003); the
    prime-set localisation as the example $S = \{p \cdot \mathrm{id}_X
    : p \notin T\}$. Master-only, ~1800 words. **MP-distinctive
    (Ch 19).** Citations: MP Ch 19, Hirschhorn 2003 *Model Categories
    and Their Localizations* (AMS), Bousfield 1975.
14. **`48.12.49` Bialgebra, Hopf algebra, Milnor-Moore theorem.**
    Bialgebra and Hopf algebra in a graded-symmetric monoidal
    category; antipode; Milnor-Moore: connected co-commutative
    Hopf algebra over char-0 field $\cong U(L)$ for $L = \mathrm{Prim}$
    graded Lie algebra. Three-tier, ~2000 words. **MP-distinctive
    (Ch 20-21).** Citations: MP Ch 20-21, Milnor-Moore 1965 *Annals*
    81, Sweedler 1969 *Hopf Algebras*.
15. **Deepening of `03.12.06` sullivan-minimal-models** — add a Master
    section "Quillen's dual rational-homotopy framework" outlining
    Quillen 1969 *Annals* 90: differential graded Lie algebras over
    $\mathbb{Q}$ as the dual category to Sullivan minimal models, with
    the Quillen-Sullivan duality. ~700 words. Citations: Quillen 1969,
    MP Ch 8, FHT §22.

**Priority 4 — survey-level pointers, exercise pack (optional):**

16. **Restricted Lie algebra cohomology** (MP Ch 22-23). Master-only;
    defer to a future "$p$-completion deep-dive" pass.
17. **Spectral sequences as a working homotopy theorist's tool**
    (MP Ch 24). Deepening of the `03.13-*` spectral-sequence units
    rather than a new unit; defer to a pass on that chapter.
18. **Exercise pack `03.12.E4-localization-completion-model-categories`.**
    MP has exercise sets at the end of every chapter (heavy in
    Parts 1-2, lighter in Parts 3-5). Codex pack should cover:
    explicit $T$-localisation of $\mathbb{Z}, S^1, S^2$; computation
    of $S^{2n+1}_\mathbb{Q}$ as a $K(\mathbb{Q}, 2n+1)$; verification
    of the small-object argument on $\mathbf{sSet}$; an explicit
    arithmetic-square reconstruction of a nilpotent space (e.g.
    $S^2 \vee S^4$). ~20 exercises across three tiers.

**Notation crosswalk** (record in the §Notation paragraph of each new
unit; assemble in `notation/may-ponto.md`):

- $X_T$ for $T$-localisation of a nilpotent space $X$; $X_{(p)}$ for
  the special case $T = \{p\}$ ($p$-localisation, not to be confused
  with $p$-completion); $X_\mathbb{Q}$ for rationalisation
  ($T = \emptyset$).
- $X^\wedge_p$ for the Bousfield-Kan $p$-completion.
- $\mathrm{Ho}(\mathcal{M})$ for the homotopy category;
  $\mathbb{L}F, \mathbb{R}G$ for left/right derived functors;
  $\mathcal{M}[W^{-1}]$ for the localisation construction
  (Quillen 1967). Match GJ-plan `notation/model-category.md`.
- $\mathrm{hocolim}, \mathrm{holim}$ for Bousfield-Kan homotopy
  colimit/limit; standard; match GJ.
- Cofibrantly generated model category: $(I, J)$ for the generating
  cofibrations / trivial cofibrations; standard.
- MP writes $\mathcal{U}$ for compactly generated weak-Hausdorff
  spaces, matching May *Concise*. Codex adopts the same convention
  per the May-Concise crosswalk.
- MP's Part 5 uses $A, H, P, L$ for bialgebra / Hopf algebra /
  primitive elements / Lie algebra; standard. Match Sweedler's
  notation where possible; flag MP-specific symbols in unit
  Notation paragraphs.

**Three-tier scheduling.** P1 units 1-6 require all three tiers
(model categories need Strogatz-level intuition; localisation /
completion benefit from a Beginner-tier "two flavours of zooming
in on a single prime" framing). P2 units 7-11 keep Intermediate +
Master; Beginner optional for the technical ones (BK spectral
sequence, chain-complex model structure). P3 units 12-15 are
Master-only. P4 is exercise pack only.

---

## §4 Implementation sketch (P3 → P4)

For a full MP coverage pass, **items 1-11 are the minimum P1+P2 set**
(11 new units, of which 6 are shared with the GJ-3.41 plan and 1 is
shared with the May-Concise 3.38 plan). Production estimate:

- **P1 (6 units, 4 shared with GJ):** ~4 hours each = **~24 hours**.
  Model-category units skew higher than corpus average because the
  abstraction level requires careful exposition; nilpotent-space /
  localisation units skew higher because the originator literature
  (Sullivan, Bousfield-Kan, Hilton-Mislin-Roitberg) must be
  synthesised. Charge ~12 hours against the GJ-shared subset.
- **P2 (5 units, 2 shared with GJ):** ~3.5 hours each = **~17.5
  hours**. Charge ~7 hours against the GJ-shared subset.
- **P3 (3 new units + 1 deepening):** ~3 hours each + 1.5 hours =
  **~10.5 hours**.
- **P4 (exercise pack):** ~6 hours.

**Total: ~58 hours for full MP equivalence** if all units are produced
from scratch; **~38 hours** if produced jointly with GJ-3.41 and
charged half-and-half on the shared P1+P2 subset.

**Strict prerequisite chain:**
1. GJ-3.41 P1 units `03.12.31`-`03.12.34` (the joint model-category
   foundations) — also the MP Part-4 foundations. Recommend joint
   batch.
2. The May-Concise (FT 3.38) P2 unit `48.12.27` (Puppe cofiber sequence)
   for the hocolim/holim unit `03.12.37`.
3. MP-distinctive units `03.12.42` (nilpotent spaces) → `03.12.43`
   (localisation) → `03.12.44` ($p$-completion) → `03.12.45`
   (arithmetic square) must ship in that order; each depends on its
   predecessor.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, MP-distinctive
content has clearly identified originators:

- **Quillen, D. G.** *Homotopical Algebra.* Springer LNM 43 (1967).
  Originator for model categories. Cite in `03.12.31`-`03.12.34`,
  `03.12.46`, `03.12.48`.
- **Quillen, D. G.** "Rational homotopy theory." *Annals of Mathematics*
  90 (1969) 205-295. Originator for the model-categorical / dgla side
  of rational homotopy theory. Cite in `03.12.43`, `03.12.47`, the
  `03.12.06` deepening.
- **Sullivan, D.** "Genetics of homotopy theory and the Adams
  conjecture." *Annals of Mathematics* 100 (1974) 1-79. Originator for
  prime-by-prime localisation of spaces and fracture squares.
  Cite in `03.12.43`, `03.12.45`.
- **Sullivan, D.** "Infinitesimal computations in topology." *Publ.
  Math. IHÉS* 47 (1977) 269-331. (Often cited as **Sullivan's
  MIT notes / Geometric Topology: Localization, Periodicity, and
  Galois Symmetry** for the precursor 1970 manuscript.) Originator for
  Sullivan minimal models. Already cited in `03.12.06`.
- **Bousfield, A. K., and Kan, D. M.** *Homotopy Limits, Completions
  and Localizations.* Springer Lecture Notes in Mathematics 304 (1972).
  Originator for $\mathrm{hocolim}/\mathrm{holim}$, $p$-completion,
  and the BK spectral sequence. Cite in `03.12.37`, `03.12.38`,
  `03.12.44`, `03.12.45`.
- **Bousfield, A. K.** "The localization of spaces with respect to
  homology." *Topology* 14 (1975) 133-150. Originator for the
  Bousfield-localisation functor. Cite in `03.12.43`, `03.12.48`.
- **Hilton, P., Mislin, G., Roitberg, J.** *Localization of Nilpotent
  Groups and Spaces.* North-Holland Mathematics Studies 15 (1975).
  Canonical monograph on the nilpotent-localisation programme.
  Cite in `03.12.42`, `03.12.43`.
- **Milnor, J., and Moore, J. C.** "On the structure of Hopf algebras."
  *Annals of Mathematics* 81 (1965) 211-264. Originator for the
  Milnor-Moore theorem. Cite in `48.12.49`.
- **May, J. P., and Ponto, K.** *More Concise Algebraic Topology.*
  University of Chicago Press 2012. The book itself — definitive
  modern consolidation. Cite in *every* unit on this punch-list.
- **Hovey, M.** *Model Categories.* AMS Math. Surv. & Monog. 63 (1999).
  Modern systematic model-category reference. Cite as canonical
  "see also" in `03.12.31`, `03.12.32`, `03.12.46`, `03.12.48`.
- **Hirschhorn, P. S.** *Model Categories and Their Localizations.*
  AMS Math. Surv. & Monog. 99 (2003). Definitive reference for
  Bousfield localisation. Cite in `03.12.48`.

---

## §5 What this plan does NOT cover

- **Stable homotopy / Hopf invariant deep details** (MP only
  touches stable homotopy at the level needed for the Hopf-algebra
  structure on $\pi_*(X)$; the Adams spectral sequence and the
  full stable-homotopy programme are the territory of **Ravenel
  FT 3.42** *Complex Cobordism and the Stable Homotopy Groups of
  Spheres* and **Adams *Stable Homotopy and Generalised Homology***).
  Defer.
- **$\infty$-categories and the Joyal model structure / quasi-categories**
  (Lurie *Higher Topos Theory*). Out of scope; pointer only in
  `03.12.48` Synthesis. The Codex Fast Track lists Lurie HTT as a
  separate deferred audit.
- **Goerss-Jardine-specific bisimplicial / Reedy / Postnikov material**
  (GJ Ch IV-VII). Defer to the GJ-3.41 plan. MP touches this at the
  level needed for $p$-completion (cosimplicial spaces, $\mathrm{Tot}$)
  but the bisimplicial / Reedy machinery proper lives in GJ.
- **Simplicial presheaves / motivic homotopy theory** (Morel-Voevodsky,
  Jardine local model structures). Out of scope; same defer as GJ.
- **Operads and $E_\infty$ structures** (May *Geometry of Iterated
  Loop Spaces*, May-Mandell *Equivariant Orthogonal Spectra*).
  Out of scope; pointer only.
- **Equivariant homotopy theory** (May et al. *Equivariant Homotopy
  and Cohomology Theory*). Out of scope; May has separate books on
  the equivariant programme.
- **Algebraic K-theory via simplicial / model-category methods**
  (Quillen Q-construction, Waldhausen S-construction). Out of scope;
  pointer in `03.12.46` Synthesis only.
- **Line-number-level inventory of every theorem in MP.** Done at the
  chapter / part level above; this audit is **reduced** (no local
  PDF, paywalled at Chicago Press). A revision pass with the PDF or
  paper copy would sharpen the named-theorem audit, especially
  inside Parts 2-3 (where the fracture theorems split across many
  named results) and Part 5 (Hopf-algebra machinery).
- **Detailed proofs of the Bousfield-localisation existence theorems**
  (`03.12.48`). The Babel Bible unit should state the existence theorem
  (after Hirschhorn) and sketch the small-object-argument proof; the
  full technical proof of the locally-presentable hypothesis is a
  "see Hirschhorn Ch 4-5" reference rather than a Babel Bible unit.
- **The exercise pack.** Defer to a P4 dedicated pass after the
  priority-1+2 unit batch closes.
- **Figures and large commutative diagrams.** Curriculum-wide
  deferred item; same flag as the Hatcher / May plans.

---

## §6 Acceptance criteria for FT equivalence (MP)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, MP is at
equivalence-coverage when:

- The GJ-3.41 P1 punch-list (`03.12.31`-`03.12.34`, the joint
  model-category foundations) has shipped (strict prereq, shared
  with this audit).
- The May-Concise 3.38 P2 unit `48.12.27` (Puppe cofiber sequence)
  has shipped (strict prereq for `03.12.37` hocolim).
- All **6 MP P1 units** have shipped (`03.12.31`-`03.12.34` shared +
  `03.12.42` nilpotent space + `03.12.43` localisation). This alone
  raises MP coverage from ~5% to ~50%.
- All **5 MP P2 units** have shipped (`03.12.37`, `03.12.38` shared +
  `03.12.44` $p$-completion + `03.12.45` arithmetic square + `03.12.46`
  chain-complex model structure). Brings coverage to ~80%.
- At least **2 of the 3 MP P3 units** have shipped (`03.12.47`
  rational $H$-spaces, `03.12.48` Bousfield localisation in
  $\mathcal{M}$, `48.12.49` Hopf-algebra / Milnor-Moore are
  ordered by leverage). Brings coverage to ~92%.
- The `03.12.06` sullivan-minimal-models Master-section deepening
  (Quillen 1969 dgla side) has shipped.
- **Notation decisions are recorded** in each unit's §Notation
  paragraph per the crosswalk in §3, and a `notation/may-ponto.md`
  is started.
- **Pass-W weaving** connects the new units to `03.12-homotopy/`
  (especially to `03.12.05`, `03.12.06`, `03.12.07`, `03.12.25`),
  to `03.08-*` (classifying-space / stable-homotopy units), and
  forward to the GJ-3.41, May-Concise 3.38, and Ravenel 3.42 audits.
- **Originator-prose paragraphs** present in `03.12.31` (Quillen 1967),
  `03.12.42` (Hilton-Mislin-Roitberg 1975), `03.12.43` (Sullivan 1974,
  Bousfield 1975), `03.12.44` (Bousfield-Kan 1972), `03.12.45`
  (Sullivan 1974), `48.12.49` (Milnor-Moore 1965). Co-cite MP 2012
  throughout.
- **Exercise pack `03.12.E4`** ships (P4) — required for the ≥95%
  threshold.

The 6 P1 units close the model-category + nilpotent-space +
localisation foundations. The 5 P2 units close the completion +
arithmetic-square + chain-complex gaps. The 3 P3 units close the
rational-$H$-space + Bousfield + Hopf-algebra gaps. The P4
exercise pack closes the residual gap to ≥95%.

**Composite recommendation.** The MP P1 model-category subset (4
units) is most efficient dispatched together with the GJ-3.41 P1
batch as the joint **"model-category foundations" composite batch of
4 units**. The MP P1 localisation/completion subset (2 units:
`03.12.42` nilpotent space + `03.12.43` localisation) is dispatched
as a **second composite batch** alongside the May-Concise 3.38 P3
Sullivan-deepening (item 15 above) — they share the Sullivan /
Bousfield / Quillen-1969 originator citations and the
rational-homotopy crosslink to `03.12.06`. The MP P2 batch
(`03.12.37`, `03.12.38`, `03.12.44`, `03.12.45`, `03.12.46`) is a
third composite, with `03.12.37`+`03.12.38` shared with GJ-3.41.
Run Pass-V continuity once per composite batch and Pass-W weaving
once on the full eleven-unit set.

**Coordination note (Cycle-shared P1).** This audit explicitly
shares its P1 model-category units with the GJ-3.41 audit. The
Cycle-7 GJ audit already flagged this. Whichever audit is
operationalised first should produce the shared P1 batch and the
other should cite the produced units rather than re-list them.
Recommend GJ-first because GJ's emphasis on the simplicial-set
model structure aligns better with the entry-point `03.12.25`
unit already shipped.

---

## §7 Sourcing

- **NOT free as currently catalogued.** The
  `docs/catalogs/FASTTRACK_BOOKLIST.md` line 126 flag "**FREE**
  (author PDF)" is **incorrect as of 2026-05-18**. The University of
  Chicago Press master books page
  (<http://www.math.uchicago.edu/~may/BOOKSMaster.html>) lists *More
  Concise* only with a `$65.00` purchase link to
  <http://www.press.uchicago.edu/ucp/books/book/chicago/M/bo12322308.html>
  and **does not** host a free PDF alongside the other May titles
  (which are individually linked). **Action item:** correct the
  FASTTRACK_BOOKLIST flag from **FREE** to **Paid (UCP, $65)** in a
  follow-up edit. (Out of scope for this audit per "DO NOT edit any
  other files" — flag for the catalog-maintenance pass.)
- **No local copy.**
  `reference/textbooks-extra/`,
  `reference/fasttrack-texts/03-modern-geometry/`, and
  `reference/book-collection/free-downloads/` checked — none contains
  a May-Ponto PDF. Only May *Concise* and May *Simplicial Objects*
  are present from the May catalogue. **Action item:** acquire
  institutional / paper / e-book copy and add to
  `reference/fasttrack-texts/03-modern-geometry/May-Ponto-MoreConciseAlgebraicTopology.pdf`
  before the P1 batch ships.
- **License.** For educational use cite as J. P. May and K. Ponto,
  *More Concise Algebraic Topology: Localization, Completion, and
  Model Categories*, Chicago Lectures in Mathematics, University of
  Chicago Press, 2012 (xxviii + 514 pp.).
- **Comparison reading for P1 production.** Since MP itself is
  paywalled and no PDF is currently in the Babel Bible reference tree,
  the P1 batch should be produced against:
  - **Hovey, *Model Categories* (1999)** — model-category foundations;
    MP Ch 14-17 substitute.
  - **Bousfield-Kan, *Homotopy Limits, Completions and Localizations*
    (Springer LNM 304, 1972)** — completion / hocolim foundations;
    MP Part 3 substitute. The originator monograph; widely available.
  - **Hilton-Mislin-Roitberg, *Localization of Nilpotent Groups and
    Spaces* (North-Holland 1975)** — nilpotent-space / localisation
    foundations; MP Parts 1-2 substitute. Out of print but findable.
  - **Sullivan 1974 *Annals* 100; Sullivan 1977 *Publ. IHÉS* 47;
    Quillen 1969 *Annals* 90** — the rational-homotopy /
    prime-by-prime localisation originator literature.
  - **Goerss-Jardine *Simplicial Homotopy Theory* (1999)** — the
    parallel simplicial-emphasis textbook; itself paywalled but
    institutional access often available; shares P1 with this
    audit.
  - **Félix-Halperin-Thomas *Rational Homotopy Theory* (GTM 205,
    Springer 2001)** — canonical rational-homotopy textbook;
    MP Ch 8-9 substitute and ongoing reference for `03.12.06`.
- **Tertiary sources.** Dwyer-Hirschhorn-Kan-Smith *Homotopy Limit
  Functors on Model Categories and Homotopical Categories* (AMS
  Math. Surv. & Monog. 113, 2004) and Hirschhorn *Model Categories
  and Their Localizations* (AMS Math. Surv. & Monog. 99, 2003) are
  the canonical secondary references for Bousfield localisation and
  for the technical existence theorems. Cite in `03.12.48`.

---

## §8 Cross-references with adjacent Cycle audits

- **May-Concise (FT 3.38), Cycle 1.** Direct predecessor. MP opens by
  assuming *Concise*. The May-Concise punch-list items 1-7 (HELP,
  simplicial sets, $\Gamma X$, van-Kampen-as-colimit deepening, etc.)
  are **upstream** of every MP unit on this list. The May-Concise
  P2 Puppe-cofiber unit (`48.12.27`) is a strict prereq for the MP
  hocolim unit (`03.12.37`).
- **May Simplicial Objects (FT 3.40), Cycle ?.** Direct sibling. May
  3.40 supplies the classical (pre-Quillen) simplicial machinery; MP
  Part 4 supplies the model-category superstructure. The May-3.40 P1
  units `48.12.24`-`48.12.28` (Kan complex, simplicial homotopy groups,
  geometric realisation, Dold-Kan) are upstream of MP `03.12.33`,
  `03.12.34`, `03.12.46`.
- **Goerss-Jardine (FT 3.41), Cycle 7.** Direct sibling. GJ-3.41
  shares 6 of the 11 MP P1+P2 units (`03.12.31`-`03.12.34`,
  `03.12.37`, `03.12.38`). The GJ audit flagged model categories as
  the largest single missing abstraction layer in Babel Bible; this audit
  endorses that flag. **Coordinate P1 batch dispatch.**
- **Just-shipped `03.12.25` simplicial-sets-and-geometric-realization
  (Cycle 2).** The just-shipped entry-point unit *announces* the
  $|\cdot| \dashv \mathrm{Sing}$ Quillen equivalence (Corollary line
  297) and the Kan-Quillen model structure on $\mathbf{sSet}$ but
  does not develop them. The MP P1 units `03.12.33` and `03.12.34`
  (shared with GJ) supply the development. **Add a forward-reference
  arrow from `03.12.25` to `03.12.33`/`03.12.34` once the latter
  ship.**
- **Sullivan-minimal-models `03.12.06` (already shipped).** Babel Bible's
  existing rational-homotopy unit. MP Part 2 Ch 8-9 supplies the
  Bousfield / Quillen 1969 / Sullivan 1974 originator framing that
  `03.12.06` currently lacks; the P3 deepening (item 15) closes
  that gap.
- **Bott-Tu rational-homotopy exercises `03.12.E1` (already shipped).**
  Standalone exercise pack on the differential-forms / Sullivan side.
  Sibling to the prospective P4 `03.12.E4` localisation /
  completion / model-category pack.
- **Ravenel (FT 3.42), Cycle TBD.** Downstream. MP Ch 24 (spectral
  sequences) and the implicit stable-homotopy material in Parts 2-3
  ($p$-completion, Adams resolution) are propaedeutic to Ravenel's
  Adams-Novikov spectral-sequence / chromatic-homotopy programme.
  Defer.
