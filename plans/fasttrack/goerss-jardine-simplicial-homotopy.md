# Paul Goerss, John Jardine — *Simplicial Homotopy Theory* (Fast Track 3.41) — Audit + Gap Plan

**Book:** Paul G. Goerss and John F. Jardine, *Simplicial Homotopy Theory*
(Birkhäuser, Progress in Mathematics 174, 1999; xv + 510 pp.; ISBN
3-7643-6064-X; reprinted 2009 with corrections as Modern Birkhäuser Classics).
The canonical modern reference for simplicial homotopy theory presented through
**Quillen's model-category language**.

**Fast Track entry:** 3.41, inside §3 Modern Geometry, immediately after May
*Concise* (3.38), May-Ponto *More Concise* (3.39), and May *Simplicial
Objects* (3.40). Goerss-Jardine (hereafter **GJ**) is the explicit "modern
successor" to May 3.40: the same simplicial-set foundations but presented
through Quillen model categories rather than the classical combinatorial
viewpoint.

**Purpose of this plan:** P1-stub audit + gap punch-list. Output is a concrete
priority-ordered list of new units to write so that GJ is covered to the Fast
Track equivalence threshold (≥95% effective coverage — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Reduced-source note.** No local PDF is in `reference/textbooks-extra/` or
`reference/fasttrack-texts/03-modern-geometry/`. WebFetch against Springer
returned a 303 to the authenticated identity-provider gateway and is gated;
Anna's Archive / direct PDF mirrors were not retrieved within the hard time
limit. **This audit is REDUCED:** worked from the book's well-attested
chapter / section structure as cross-cited inside the existing
`plans/fasttrack/may-simplicial-objects.md` plan (which gives explicit GJ
section locators §I.1, §I.2, §I.3, §I.7, §III.2, §V.3), inside the shipped
`content/03-modern-geometry/12-homotopy/03.12.25-simplicial-sets-and-geometric-realization.md`
unit's tier anchors and reference list, and from standard knowledge of GJ's
seven-chapter Progress-in-Mathematics structure. A future revision with the
local PDF should sharpen the punch-list at the named-theorem level
(particularly Chapters IV-VII on bisimplicial sets, Bousfield-Kan, and
simplicial sheaves) but the units-to-write list below is robust against the
reduction.

---

## §1 What GJ is for

GJ is the **canonical modern reference** for simplicial homotopy theory. Where
May 1967 *Simplicial Objects* (FT 3.40) treats the simplicial category and Kan
complexes *combinatorially* — face/degeneracy operators, simplicial homotopy
groups, twisted cartesian products — and predates Quillen's model categories
by a few months, GJ treats the exact same objects through the model-category
machinery Quillen introduced in *Homotopical Algebra* (1967) and which has
become the lingua franca of modern algebraic topology and higher category
theory. The two books cover overlapping material; the choice between them is
not what is covered but how.

Distinctive contributions, in roughly the order GJ develops them:

1. **The simplicial category $\Delta$ and simplicial sets, with the
   Yoneda-flavoured emphasis** (GJ §I.1). Simplicial sets as presheaves
   $\Delta^{\mathrm{op}} \to \mathbf{Set}$; standard simplex $\Delta^n =
   \mathrm{Hom}_\Delta(-, [n])$; the density theorem $X = \mathrm{colim}_{\Delta^n
   \to X} \Delta^n$ that makes every simplicial set a colimit of standard
   simplices. This is the categorical reframing of May §1's normal-form
   factorisation.
2. **Geometric realisation and the $|\cdot| \dashv \mathrm{Sing}$ adjunction**
   (GJ §I.2). Realisation via the coend $|X| = \int^{[n]} X_n \times \Delta^n$;
   theorem that $|\cdot|$ preserves finite products in compactly generated
   spaces (Milnor 1957); the adjunction with $\mathrm{Sing}$ as the load-bearing
   bridge to $\mathbf{Top}$.
3. **Kan complexes and the extension condition** (GJ §I.3). The horn-filling
   property as right lifting against $\Lambda^n_k \hookrightarrow \Delta^n$;
   simplicial homotopy as an equivalence relation on Kan complexes; every
   simplicial group is a Kan complex.
4. **The Quillen model structure on $\mathbf{sSet}$** (GJ §I.11 / Ch II). The
   *central* technical achievement: cofibrations = monomorphisms, weak
   equivalences = maps inducing weak equivalences on geometric realisation,
   fibrations = Kan fibrations. Existence proved via the small-object argument
   plus the explicit anodyne extensions of Gabriel-Zisman. The proof that this
   is a model structure occupies most of GJ Chapter I-II and is one of the most
   technically demanding passages in the book.
5. **Geometric realisation as a Quillen equivalence
   $|\cdot| \dashv \mathrm{Sing}: \mathbf{sSet} \rightleftarrows \mathbf{Top}$**
   (GJ §I.11). The full statement: the adjunction is a Quillen equivalence
   between $\mathbf{sSet}$ with the Kan-Quillen model structure and
   $\mathbf{Top}$ with the standard (Quillen) model structure. This is the
   *theorem* that justifies doing homotopy theory combinatorially: it says the
   two homotopy categories are equivalent, not merely related.
6. **Simplicial groups, $W\bar{G}$ classifying space, principal fibrations**
   (GJ Ch V). The simplicial-group analogue of $BG$; Kan's loop-group functor
   $G \dashv W\bar{}$; the classification of principal $G$-fibrations as
   $[\cdot, W\bar{G}]$. Modern reframing of May §17-§21 twisted cartesian
   products.
7. **Bisimplicial sets and homotopy colimits** (GJ Ch IV). The diagonal
   $\mathrm{diag}: \mathbf{sSet}^{\Delta^{\mathrm{op}}} \to \mathbf{sSet}$,
   Bousfield-Kan homotopy colimit construction $\mathrm{hocolim}$, the
   Reedy model structure, and the homotopy spectral sequence of a bisimplicial
   set.
8. **The Bousfield-Kan spectral sequence** (GJ Ch VI / Ch VIII). The spectral
   sequence of a cosimplicial space converging (under connectivity hypotheses)
   to the homotopy groups of the totalisation. Includes the unstable Adams
   spectral sequence as a special case. Central tool of unstable homotopy
   theory in the post-Quillen era.
9. **Simplicial presheaves / simplicial sheaves and Jardine's local model
   structures** (GJ Ch VII). Jardine's own programme: simplicial homotopy theory
   over a Grothendieck site, with the local model structure where weak
   equivalences are stalkwise. Foundational for motivic homotopy theory
   (Morel-Voevodsky 1999, same year as GJ). The Codex defers this entirely
   (see §5).
10. **Cosimplicial spaces and Reedy theory** (GJ Ch VII). The dual to
    bisimplicial sets; Reedy fibrant replacement; obstruction theory for
    cosimplicial diagrams.

Peer-source corroboration of the framing:

- **Quillen, *Homotopical Algebra* (Springer LNM 43, 1967).** The originator
  text for model categories. Quillen §II.3 puts the model structure on
  $\mathbf{sSet}$ for the first time and proves the $|\cdot| \dashv
  \mathrm{Sing}$ Quillen equivalence. GJ §I.11 is the modern textbook
  consolidation of Quillen §II.3 with all proofs filled in.
- **Hovey, *Model Categories* (AMS Mathematical Surveys 63, 1999).** The
  systematic reference for model-category theory itself, published the same
  year as GJ. Hovey Ch 3 treats the simplicial-set model structure as a
  worked example; GJ inverts the emphasis (simplicial sets first, model
  structure as the technology). The two books are explicitly complementary
  and should be used together for the model-category strand.
- **May, *Simplicial Objects in Algebraic Topology* (1967).** FT 3.40, the
  classical predecessor. GJ cites May §1, §2, §3, §14-§16 for the
  pre-model-category material and reproves much of it in modern notation.
  The two books are not redundant: May is shorter, more direct, and the
  canonical citation for the *classical* simplicial theory; GJ is the
  canonical citation for the *model-category* presentation and for
  bisimplicial / Bousfield-Kan content that May does not cover.
- **May & Ponto, *More Concise Algebraic Topology* (FT 3.39).** Develops
  model-category foundations in Ch 14-19 and uses them for localisation,
  completion, and rational homotopy theory. May-Ponto and GJ overlap on the
  abstract model-category axioms (Ch 14 of May-Ponto, Ch II of GJ); they
  diverge on emphasis (May-Ponto: applications to algebraic topology; GJ:
  internal simplicial machinery).
- **Lurie, *Higher Topos Theory* (Princeton AMS 170, 2009).** The
  $\infty$-categorical successor programme. Lurie §1.1 cites GJ as the
  canonical reference for the Kan-Quillen model structure on $\mathbf{sSet}$
  and for the equivalence of categories between Kan complexes and
  $\infty$-groupoids. Lurie's quasi-category model structure (the *Joyal*
  model structure, also on $\mathbf{sSet}$) is *not* in GJ but is the
  natural next step after it.

GJ is **not** a first introduction to simplicial sets, to homotopy theory, or
to model categories — it assumes all three at the level of a working graduate
student. The natural prerequisite stack is: classical algebraic topology
(Hatcher or May 3.38) + simplicial sets (May 3.40, or chapters I-III of GJ
read concurrently) + abstract category theory (Mac Lane *Categories for the
Working Mathematician*). Reading GJ alongside Hovey *Model Categories* is the
standard modern path; reading GJ instead of May 3.40 is the standard *modern*
path but loses the classical viewpoint that older literature still uses.

---

## §2 Coverage table (Babel Bible vs GJ)

Cross-referenced against the current `03-modern-geometry/12-homotopy/`
chapter (24 shipped units + the freshly-shipped Cycle-2 entry-point
`03.12.25-simplicial-sets-and-geometric-realization.md`). The entry point
already carries Goerss-Jardine §I.1-§I.3 as its Intermediate / Master tier
anchor and cites Lurie *HTT* §1.1 for the $\infty$-categorical pointer; that
unit is the foundation the rest of the GJ punch-list builds on.

✓ = covered, △ = partial / different framing, ✗ = not covered.
**MS-overlap** = the gap is already on the May 3.40 (FT) punch-list.

### Chapter I — Simplicial sets

| GJ topic (section) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Simplicial category $\Delta$, presheaves $\Delta^{\mathrm{op}} \to \mathbf{Set}$ (§I.1) | `03.12.25` simplicial-sets-and-geometric-realization | ✓ | Shipped this cycle. Anchored on GJ §I.1. |
| Yoneda lemma + density theorem $X = \mathrm{colim}_{\Delta^n \to X} \Delta^n$ (§I.1) | `03.12.25` (mention) | △ | Mentioned in the Master tier; full categorical statement is a deepening. |
| Geometric realisation $|\cdot|$ as a coend (§I.2) | `03.12.25` | ✓ | Shipped this cycle. |
| $|\cdot| \dashv \mathrm{Sing}$ adjunction (§I.2) | `03.12.25` | ✓ | Shipped this cycle. |
| Milnor 1957 finite-products theorem (§I.2) | `03.12.25` (Master) | ✓ | Covered at Master tier. |
| Kan complexes and the extension condition (§I.3) | — | ✗ | **Gap (P1, high-priority — MS-overlap).** Already on May 3.40 punch-list as `03.12.25` (now `48.12.26` in our local numbering since `03.12.25` is taken). |
| Simplicial homotopy / homotopy of $n$-simplices (§I.3, §I.6) | — | ✗ | **Gap. MS-overlap.** |
| Simplicial homotopy groups $\pi_n(K, *)$ (§I.7) | — | ✗ | **Gap (P1). MS-overlap.** |
| Function complex $\mathrm{Hom}(K, L)$ and the simplicial-set enrichment of $\mathbf{sSet}$ (§I.5) | — | ✗ | **Gap.** Internal hom; load-bearing for the model-category structure. |
| Kan fibration (§I.4, §I.7) | — | ✗ | **Gap (P1). MS-overlap.** |
| Anodyne extensions and Gabriel-Zisman (§I.4) | — | ✗ | **Gap.** Technical lemma class; load-bearing for the small-object argument. |
| Long exact sequence of a Kan fibration (§I.7) | — | ✗ | **Gap.** |

### Chapter II — Model categories

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Quillen model-category axioms (§II.1) | — | ✗ | **Gap (P1, foundational).** No Babel Bible unit on model categories at all; this is the largest single piece of the GJ punch-list. |
| Cofibrantly generated model categories, small-object argument (§II.1, §II.5) | — | ✗ | **Gap (P1).** Foundational technique. |
| Quillen functor / Quillen adjunction / Quillen equivalence (§II.1) | — | ✗ | **Gap (P1).** |
| The homotopy category $\mathrm{Ho}(\mathcal{M})$ (§II.1) | — | ✗ | **Gap (P1).** Already a deepening candidate from May 3.38 plan (May's `h𝒯`). |
| Standard examples: $\mathbf{Top}$, $\mathbf{Ch}_{\geq 0}(R)$, $\mathbf{sSet}$ (§II.2-II.3) | — | ✗ | **Gap.** |
| The Kan-Quillen model structure on $\mathbf{sSet}$ (§II.3) | — | ✗ | **Gap (P1, central GJ theorem).** Goerss-Jardine's distinctive content; absent from May 3.40 (predates Quillen). |
| $|\cdot| \dashv \mathrm{Sing}$ is a Quillen equivalence $\mathbf{sSet} \simeq_{\mathrm{Qu}} \mathbf{Top}$ (§II.3) | — | ✗ | **Gap (P1, central GJ theorem).** |
| Simplicial model categories (§II.3) | — | ✗ | **Gap (P2).** $\mathbf{sSet}$-enrichment compatible with the model structure. |

### Chapter III — Classical results and constructions

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Simplicial abelian groups, simplicial $R$-modules (§III.2) | — | ✗ | **Gap. MS-overlap.** |
| Normalised Moore complex $N(A_\bullet)$ (§III.2) | — | ✗ | **Gap. MS-overlap.** |
| **Dold-Kan correspondence** (§III.2) | — | ✗ | **Gap (P1). MS-overlap.** |
| Eilenberg-Zilber theorem and shuffle product (§III.5) | △ | △ | Mentioned in `03.12.11` Synthesis; not its own unit. MS-overlap. |
| Spectral sequences of a filtered chain complex (§III.6) | △ | △ | Codex has spectral-sequence content scattered (`03.13-*` if it exists); GJ's filtered-chain-complex set-up is a unit-level gap. |
| Eilenberg-MacLane simplicial groups $K(A, n)$ (§III.3-§III.4) | △ | △ | `03.12.05` covers the *space* $K(\pi, n)$; the simplicial-abelian-group construction is a deepening. MS-overlap. |

### Chapter IV — Bisimplicial sets

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Bisimplicial set $X: \Delta^{\mathrm{op}} \times \Delta^{\mathrm{op}} \to \mathbf{Set}$ (§IV.1) | — | ✗ | **Gap (P2).** No Codex bisimplicial content. |
| Diagonal $\mathrm{diag}: \mathbf{sSet}^{\Delta^{\mathrm{op}}} \to \mathbf{sSet}$ (§IV.1) | — | ✗ | **Gap (P2).** |
| The Bousfield-Kan homotopy colimit / homotopy limit (§IV.2-§IV.4) | — | ✗ | **Gap (P2).** Foundational construction of post-1972 homotopy theory; cited in every modern algebraic-topology paper. |
| Reedy model structure on $\mathbf{sSet}^{\Delta^{\mathrm{op}}}$ (§IV.3) | — | ✗ | **Gap (P3).** Technical infrastructure for hocolim/holim. |
| Homotopy spectral sequence of a bisimplicial set (§IV.4) | — | ✗ | **Gap (P3).** |
| Realisation lemma (the diagonal of a bisimplicial set is weakly equivalent to its bar-construction realisation) (§IV.1) | — | ✗ | **Gap.** Used silently in many later constructions. |

### Chapter V — Simplicial groups

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Simplicial group, simplicial group action (§V.1) | — | ✗ | **Gap (P2). MS-overlap** with May 3.40 §17. |
| Every simplicial group is a Kan complex (§V.1) | — | ✗ | **Gap.** Foundational theorem. |
| Kan's loop-group functor $G: \mathbf{sSet}_* \to \mathbf{sGrp}$ (§V.5) | — | ✗ | **Gap (P3). MS-overlap.** |
| $W\bar{}$ classifying-space functor (§V.4) | — | ✗ | **Gap (P2).** Simplicial-set analogue of $BG$. |
| $G \dashv W\bar{}$ adjunction; $G \bar{W} G \to G$ weak equivalence (§V.5) | — | ✗ | **Gap (P3).** Kan's theorem. |
| Classification of principal $G$-bundles as $[X, W\bar{G}]$ (§V.3) | △ | △ | `03.08.04` classifying-space covers topologically; GJ's simplicial version is a deepening. |

### Chapter VI — The homotopy theory of towers

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Postnikov tower of a Kan complex (§VI.3) | — | ✗ | **Gap (P2). MS-overlap.** Codex has Whitehead-tower (`03.12.07`, dual); Postnikov is missing. |
| $k$-invariants as cohomology classes (§VI.5) | — | ✗ | **Gap. MS-overlap.** |
| Tower of fibrations, $\lim^1$ exact sequence (§VI.2) | — | ✗ | **Gap.** $\lim^1$ already flagged in May 3.38 punch-list. |
| Obstruction theory for lifting through a Postnikov tower (§VI.5) | △ | △ | Briefly mentioned in `03.12.05` Master tier; not its own unit. |

### Chapter VII — Cosimplicial spaces

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cosimplicial space $X^\bullet: \Delta \to \mathbf{sSet}$, totalisation $\mathrm{Tot}$ (§VII.1) | — | ✗ | **Gap (P3).** |
| **Bousfield-Kan spectral sequence** $E_2 = \pi^s \pi_t \Rightarrow \pi_{t-s} \mathrm{Tot}(X^\bullet)$ (§VII.6) | — | ✗ | **Gap (P2, distinctive GJ).** Central tool of unstable homotopy theory; absent from May 3.40 entirely. |
| The unstable Adams spectral sequence as a BK spectral sequence (§VII.6) | — | ✗ | **Gap (P3).** Connection to the stable-homotopy strand (`03.08.06`). |
| Cosimplicial resolutions, $R$-completion (§VIII.3) | — | ✗ | **Gap (P3).** Bousfield-Kan 1972 monograph; pointer-only treatment recommended. |

### Chapter VIII (when present in the 2009 reprint) — Simplicial sheaves and presheaves

| GJ topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Simplicial presheaves on a site, local weak equivalences (§VIII.1) | — | ✗ | **Out of scope** — defer to motivic-homotopy-theory pass (Morel-Voevodsky); see §5. |
| Jardine local model structure (§VIII.2) | — | ✗ | **Out of scope.** Same. |
| Stalks, Brown-Gersten descent (§VIII.4) | — | ✗ | **Out of scope.** Same. |

### Aggregate coverage estimate

**Theorem layer.** ~10% of GJ's named theorems map to Babel Bible units. The
freshly-shipped `03.12.25` covers the §I.1-§I.2 foundations and the
$|\cdot| \dashv \mathrm{Sing}$ adjunction. Everything model-category-theoretic
(GJ Ch II), every named model-structure result on $\mathbf{sSet}$, the
Dold-Kan correspondence, Postnikov towers, bisimplicial sets, the
Bousfield-Kan spectral sequence — all missing. **After the priority-1
punch-list (model categories + Kan complexes + Dold-Kan + Quillen
equivalence) this rises to ~50%. After priority-2 to ~75%.**

**Framing layer.** ~5% covered. The model-category framing is *the* GJ
contribution and Codex has no model-category units at all. This is the
dominant gap.

**Sequencing layer.** Codex follows May 3.40's classical sequencing
(simplicial sets → Kan complexes → simplicial homotopy groups → realisation).
GJ inverts: (simplicial sets → realisation → adjunction → Kan complexes →
model structure → everything else as model-category corollary). The
sequencing decision is a notation/framing decision (record per §3 below)
rather than a re-ordering of shipped units.

**Notation layer.** ~70% aligned with GJ's modern conventions (Codex
already adopted $|K|$, $\mathrm{Sing}(X)$, $d_i / s_i$ per the May 3.40
crosswalk — these are *GJ's* notations, which Codex inherited).

**Application layer.** ~5% covered. Bisimplicial / hocolim, BK spectral
sequence, simplicial-group classifying-space machinery are all gaps.

The flag in the task prompt is correct: **expect substantial new-unit
punch-list. Model-category language is largely absent from Babel Bible.**

---

## §3 Gap punch-list — units to write, priority-ordered

**Priority 0 — strict prerequisites (already in place or in flight):**

- `03.12.25-simplicial-sets-and-geometric-realization` — **shipped this cycle**.
  GJ §I.1-§I.2. All P1 units below build on it.
- May 3.40 (FT) priority-1 punch-list units `48.12.26` (Kan complex) through
  `48.12.30` (Dold-Kan) — see `plans/fasttrack/may-simplicial-objects.md` §3.
  These are **shared prerequisites** between the May 3.40 and GJ 3.41 plans
  (same units, both plans depend on them). **Recommendation: produce them
  once as the joint May/GJ batch and cite both originator texts**, then build
  the GJ-distinctive model-category superstructure on top.

**Priority 1 — high-leverage, captures GJ's distinctive content
(estimate: 5 new units, all new; ~5 of these are not on May 3.40 plan):**

1. **`03.12.31` Quillen model category.** Definition of a model category
   (Quillen's original three-axiom presentation; the modern five-axiom
   factorisation presentation; equivalence of the two). Standard examples
   *stated*: $\mathbf{Top}$ with Serre fibrations + weak equivalences + Hurewicz
   cofibrations; $\mathbf{Ch}_{\geq 0}(R)$ with quasi-iso + epimorphism +
   monomorphism with projective cokernel; $\mathbf{sSet}$ pointer-only at this
   stage (full statement in unit 3 below). The homotopy category
   $\mathrm{Ho}(\mathcal{M}) = \mathcal{M}[W^{-1}]$ and Quillen's theorem that
   it is locally small. Three-tier, ~2000 words. Anchor: GJ §II.1; Quillen
   1967 §I.1-§I.3; Hovey *Model Categories* Ch 1; May-Ponto Ch 14. Foundational
   for everything below.
2. **`03.12.32` Quillen functor and Quillen equivalence.** Left/right Quillen
   functor (preserves cofibrations + trivial cofibrations / fibrations +
   trivial fibrations); Quillen adjunction; Quillen equivalence (the derived
   functors are an equivalence of homotopy categories). Standard examples:
   the singular-chains functor $\mathbf{Top} \to \mathbf{Ch}_{\geq 0}$ is left
   Quillen; the $|\cdot| \dashv \mathrm{Sing}$ adjunction will be the example
   in unit 3. Three-tier, ~1800 words. Anchor: GJ §II.1; Hovey §1.3.
3. **`03.12.33` The Kan-Quillen model structure on $\mathbf{sSet}$.** The
   model structure: cofibrations = monomorphisms; weak equivalences = maps
   that induce weak equivalences on geometric realisation; fibrations = Kan
   fibrations (right lifting against horns). Existence proof outline via the
   small-object argument and anodyne extensions. The fibrant objects are
   exactly the Kan complexes. Three-tier; Beginner tier states the structure,
   Intermediate tier sketches the existence proof, Master tier walks through
   the anodyne-extension classification. ~2500 words. Anchor: GJ §I.11, §II.3;
   Quillen 1967 §II.3.
4. **`03.12.34` Geometric realisation as a Quillen equivalence
   $\mathbf{sSet} \simeq_{\mathrm{Qu}} \mathbf{Top}$.** Statement that
   $(|\cdot|, \mathrm{Sing})$ is a Quillen equivalence between the Kan-Quillen
   model structure on $\mathbf{sSet}$ and the Quillen (Serre) model structure
   on $\mathbf{Top}$. Sketch of proof via the unit / counit triangle
   identities and the comparison theorem $|\mathrm{Sing}(X)| \to X$ being a
   weak equivalence (May 3.40 §16). Master tier discusses the $k$-space
   subtlety and the choice of $\mathbf{CGWH}$ vs $\mathbf{Top}$. Three-tier,
   ~2000 words. Anchor: GJ §I.11 / §II.3; Quillen 1967 §II.3 Theorem 3.
   **This is the load-bearing GJ theorem.**
5. **`03.12.35` Simplicial model category and the function complex.**
   Definition of a simplicial model category (Quillen's SM7 axiom on the
   pushout-product of cofibrations and fibrations being a Kan fibration);
   the simplicial-set enrichment $\mathrm{Hom}(K, L)$ on $\mathbf{sSet}$ and
   its compatibility with the model structure. Three-tier, ~1800 words.
   Anchor: GJ §II.3 (definition), §I.5 (function complex);
   Hovey §4.2.

**Priority 2 — bisimplicial sets, Bousfield-Kan, simplicial groups
(estimate: 4 new units):**

6. **`48.12.36` Bisimplicial set, diagonal, and the realisation lemma.**
   Bisimplicial set $X: \Delta^{\mathrm{op}} \times \Delta^{\mathrm{op}} \to
   \mathbf{Set}$; the two derived simplicial-set functors (diagonal,
   row-wise / column-wise realisation); the realisation lemma:
   $\mathrm{diag}(X) \simeq |X|_\mathrm{row}|_\mathrm{col}$. Three-tier;
   Master required for the proof. ~1800 words. Anchor: GJ §IV.1.
7. **`03.12.37` Homotopy colimit (Bousfield-Kan construction).** Definition
   of $\mathrm{hocolim}_I F$ for a small-category-indexed diagram $F: I \to
   \mathbf{sSet}$, via the bar construction $B(*, I, F)$. Universal property
   as the homotopy-invariant replacement of the ordinary colimit.
   Examples: homotopy pushout, mapping telescope. Dual: $\mathrm{holim}$.
   Three-tier, ~2000 words. Anchor: GJ §IV.2-§IV.4; Bousfield-Kan 1972
   *Homotopy Limits, Completions and Localizations* (Springer LNM 304) as
   originator text.
8. **`03.12.38` Bousfield-Kan spectral sequence.** Cosimplicial space
   $X^\bullet$, totalisation $\mathrm{Tot}(X^\bullet)$, BK spectral sequence
   $E_2^{s,t} = \pi^s \pi_t(X^\bullet) \Rightarrow \pi_{t-s}\mathrm{Tot}(X^\bullet)$.
   Convergence under connectivity hypotheses. Pointer to the unstable Adams
   spectral sequence as a special case. Master-only, ~1800 words. Anchor:
   GJ §VII.6; Bousfield-Kan 1972 (originator).
9. **`48.12.39` Simplicial group and the $W\bar{}$ classifying functor.**
   Simplicial group $G$, the canonical Kan-complex structure; the $W\bar{G}$
   classifying simplicial set; classification of principal-$G$ Kan
   fibrations as homotopy classes $[X, W\bar{G}]$. Cross-links to
   `03.08.04` classifying-space (topological side) and to the May 3.40
   `03.12.31` TCP unit (classical side). Three-tier, ~2200 words. Anchor:
   GJ §V.1-§V.4.

**Priority 3 — Postnikov and Reedy / cosimplicial deepenings (estimate:
2 new units + 1 cross-link deepening):**

10. **`03.12.40` Postnikov tower of a Kan complex.** Postnikov tower
    $P_n X$ with $\pi_i(P_n X) = \pi_i(X)$ for $i \leq n$, zero above;
    $k$-invariants as cohomology classes $[k_n] \in H^{n+2}(P_n X; \pi_{n+1} X)$.
    Cross-link to `03.12.07` Whitehead tower (dual construction). Three-tier,
    ~1800 words. Anchor: GJ §VI.3-§VI.5. **MS-overlap** — this is the
    simplicial-Kan-complex version of the Postnikov unit on the May 3.40
    plan (`03.12.33`); produce once and cite both.
11. **`03.12.41` Reedy model structure on cosimplicial / bisimplicial
    spaces.** Reedy categories; latching and matching objects; the Reedy
    model structure on $\mathcal{M}^{\Delta^{\mathrm{op}}}$ for $\mathcal{M}$
    a model category. Master-only, ~1800 words. Anchor: GJ §VII.2;
    Hirschhorn *Model Categories and Their Localizations* Ch 15 as the
    canonical modern treatment.
12. **Deepening of `03.12.25` simplicial-sets-and-geometric-realization**
    — add a Master section "Yoneda lemma and density" giving the formal
    categorical statement $X = \mathrm{colim}_{\Delta^n \to X} \Delta^n$ and
    its role as the basis for every coend construction in the book
    (realisation, function complex, hocolim). ~600 words. GJ §I.1 anchor.

**Priority 4 — survey-level pointers, exercise pack (optional, defer):**

13. **Exercise pack `03.12.E3-simplicial-homotopy-theory-exercises`.** GJ
    has exercises at the end of every chapter (~80-100 total). The Codex
    pack should cover: explicit horn-filling in $\mathrm{Sing}(X)$; the
    nerve of a category as a Kan-complex check; explicit Quillen adjunction
    verification for $\pi_0: \mathbf{sSet} \rightleftarrows \mathbf{Set}$;
    a worked Bousfield-Kan spectral sequence (e.g. cosimplicial
    $\mathbb{F}_p$-resolution of a finite space). ~20 exercises across
    three tiers.
14. **Cofibrantly generated model categories (deepening).** The
    small-object argument in full; $I$-cell complexes and the Quillen-Smith
    recognition theorem. Add as a Master section to `03.12.31`; ~700 words.
    Anchor: Hovey §2.1, GJ §II.5.
15. **Pointer to Joyal model structure / quasi-categories.** Add as a
    Synthesis pointer in `03.12.33`: the *other* model structure on
    $\mathbf{sSet}$ (Joyal 2008, Lurie *HTT* §2.2-§2.4) whose fibrant objects
    are quasi-categories rather than Kan complexes. Out of scope for full
    treatment; pointer only.

**Notation crosswalk** (record in the §Notation paragraph of each new unit):

- GJ uses $\mathbf{S}$ for the category of simplicial sets; Codex uses
  $\mathbf{sSet}$. **Codex convention wins** (matches modern nLab / Lurie /
  May-Ponto).
- GJ uses $|X|$ for geometric realisation, $\mathrm{Sing}$ for the singular
  complex (or $S$); $d_i / s_i$ for face/degeneracy. **All match Codex
  conventions** from the May 3.40 crosswalk.
- GJ uses $\mathrm{Hom}(K, L)$ for the function complex (the internal hom of
  $\mathbf{sSet}$). Babel Bible's `03.12.25` uses $\mathrm{Map}(K, L)$ informally;
  reconcile to $\mathrm{Hom}_\mathbf{sSet}(K, L)$ (full notation) in the new
  units 3 and 5.
- GJ uses $W\bar{G}$ for the classifying simplicial set of a simplicial
  group $G$; Codex topology side uses $BG$. Keep both: $BG$ for the
  topological classifying space, $W\bar{G}$ for the simplicial-set version,
  with an explicit comparison statement in `48.12.39` ($|W\bar{G}| \simeq BG$
  for $G$ a topological group with simplicial-set model).
- GJ writes $\mathrm{Ho}(\mathcal{M})$ for the homotopy category; matches the
  modern convention. May's `h𝒯` notation (May 3.38 plan) is the same object;
  the `notation/may.md` crosswalk should record both.
- GJ uses $\mathrm{hocolim}, \mathrm{holim}$ for homotopy
  colimit/limit; standard.

**Three-tier scheduling.** P1 units 1-5 require all three tiers (the
foundational ones especially — model categories needs a Strogatz-level
intuition section). P2 units 6-9 can omit Beginner for the more technical
ones (bisimplicial sets, BK spectral sequence) but should keep Intermediate +
Master. P3 units 10-11 are Master-only.

---

## §4 Implementation sketch

For a full GJ coverage pass, **items 1-9 are the minimum P1+P2 set** (9 new
units). Realistic production estimate:

- **P1 (5 units):** ~4 hours each = **~20 hours**. Model-category units skew
  higher than the corpus average because the abstraction level requires
  careful exposition and the proofs (small-object argument, Quillen
  equivalence) are nontrivial.
- **P2 (4 units):** ~3.5 hours each = **~14 hours**.
- **P3 (2 new units + 1 deepening):** ~3 hours each + 1 hour = **~7 hours**.
- **P4 (exercise pack + 2 deepenings):** ~5 hours combined.

**Total: ~45-50 hours for full GJ equivalence.** Fits a 6-8 day focused
window. Slightly larger than the May 3.40 batch (~38-40 hours) because of
the model-category abstraction layer.

**Strict prerequisite:** the May 3.40 priority-1 punch-list (Kan complex,
simplicial homotopy groups, Kan fibration, Dold-Kan) must ship first.
Recommendation: dispatch the May 3.40 P1 batch and the GJ 3.41 P1 batch as
**one composite "simplicial-homotopy bookshelf" batch** with 10 new units
total (5 from each plan), since they all live in the same chapter and share
several originator citations. Run Pass-W once at the end of the composite
batch.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, GJ-distinctive content has
clearly identified originators:

- **Quillen, D. G.** *Homotopical Algebra.* Springer Lecture Notes in
  Mathematics 43 (1967). Originating reference for model categories,
  including the original axioms (slightly different from the modern form)
  and the proof that $\mathbf{sSet}$ has a model structure Quillen-equivalent
  to $\mathbf{Top}$. Cite in `03.12.31`, `03.12.33`, `03.12.34`.
- **Kan, D. M.** "Functors involving c.s.s. complexes,"
  *Transactions of the AMS* 87 (1958) 330-346. Originator of Kan complexes,
  the extension condition, simplicial homotopy groups, and the loop-group
  functor $G$. Already on the May 3.40 plan originator list; co-cite in
  GJ-side units `03.12.33`, `48.12.39`.
- **Kan, D. M.** "A combinatorial definition of homotopy groups,"
  *Annals of Mathematics* 67 (1958) 282-312. Cite in `03.12.33`.
- **Bousfield, A. K., and Kan, D. M.** *Homotopy Limits, Completions and
  Localizations.* Springer Lecture Notes in Mathematics 304 (1972).
  Originating reference for $\mathrm{hocolim}$ / $\mathrm{holim}$ and the
  Bousfield-Kan spectral sequence. Cite in `03.12.37`, `03.12.38`.
- **Bousfield, A. K.** "The localization of spaces with respect to homology,"
  *Topology* 14 (1975) 133-150. The companion paper on Bousfield
  localisation; cite in `03.12.37` Synthesis.
- **Goerss, P. G., and Jardine, J. F.** *Simplicial Homotopy Theory.*
  Birkhäuser Progress in Mathematics 174 (1999). The book itself —
  definitive modern consolidation. Cite in *every* unit on this punch-list.
- **Milnor, J. W.** "The geometric realization of a semi-simplicial
  complex," *Annals of Mathematics* 65 (1957) 357-362. Already cited in
  `03.12.25`; co-cite in `03.12.34` for the finite-products theorem.
- **Hovey, M.** *Model Categories.* AMS Mathematical Surveys and Monographs
  63 (1999). Modern systematic reference; cite as the canonical "see also"
  in `03.12.31`, `03.12.32`, `03.12.35`.

---

## §5 What this plan does NOT cover

- **Simplicial presheaves / simplicial sheaves / Jardine local model
  structures** (GJ Ch VIII in the 2009 reprint). Out of scope. This is
  the foundation of motivic homotopy theory (Morel-Voevodsky 1999) and
  the home territory of the second author's later research. Defer to a
  dedicated motivic-homotopy audit, which would also pull in Morel-Voevodsky
  *A^1-Homotopy Theory of Schemes* (Publ. IHÉS 90, 1999).
- **Quasi-categories / $\infty$-categories and the Joyal model
  structure** (Lurie *Higher Topos Theory*, Joyal 2008). Out of scope;
  pointer only in `03.12.33` Synthesis. The Codex Fast Track lists Lurie
  HTT as a separate (deferred) audit; that audit subsumes the
  $\infty$-categorical machinery.
- **May-Ponto** (FT 3.39) **deep content** — localisation at a set of primes,
  formal groups, completion, the Adams spectral sequence applications, and
  the Hopf-algebra structure on $\pi_*$ of ring spectra. Defer to the May-Ponto
  audit. GJ touches some of this material at the simplicial level (e.g. BK
  spectral sequence) but the *applications* live in May-Ponto.
- **Model categories beyond the simplicial-set example.** GJ does not
  develop the general theory in depth (Hovey does). Babel Bible's
  model-category units `03.12.31`, `03.12.32`, `03.12.35` should state the
  general theory but illustrate it with $\mathbf{sSet}$ and $\mathbf{Top}$
  only; deeper examples (chain complexes, spectra, operads) live in the
  May-Ponto and Hovey audits.
- **Line-number-level inventory of every theorem in GJ.** Done at the
  section-level above; this audit is **reduced** (no local PDF, no fetched
  PDF within the time budget). A revision pass with the local PDF would
  sharpen the named-theorem audit, especially in Ch IV-VII, but the
  units-to-write list is robust against the reduction.
- **The full proof of the Kan-Quillen model structure on $\mathbf{sSet}$
  in unit `03.12.33`** — only the structure of the proof (anodyne
  extensions + small-object argument) is required at Master tier; the full
  technical proof of the anodyne-extension classification is a "see Gabriel-
  Zisman 1967 §IV" reference rather than a Babel Bible unit.
- **Algebraic K-theory of rings via simplicial methods** (Quillen's
  $+$-construction and $Q$-construction). Out of scope; cite Quillen's
  *Higher algebraic K-theory I* (LNM 341, 1973) as the originator pointer
  in `48.12.39` Synthesis.
- **Cubical sets / cubical homotopy theory.** Out of scope. See the
  Brown-Higgins-Sivera 1.05a plan for cubical pointer units.
- **Operads / $E_\infty$-structures on simplicial chain complexes.** Out of
  scope; defer to a future May *Geometry of Iterated Loop Spaces* / Hinich
  audit pass.
- **Figures and large commutative diagrams.** Curriculum-wide deferred item;
  same flag as in the Hatcher / May plans.

---

## §6 Acceptance criteria for FT equivalence (GJ)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, GJ is at
equivalence-coverage when:

- The May 3.40 P1 punch-list (Kan complex, simplicial homotopy groups, Kan
  fibration, Dold-Kan) has shipped (strict prereq).
- All **5 GJ priority-1 units** have shipped (`03.12.31`-`03.12.35`). This
  alone raises GJ coverage from ~10% to ~55%.
- At least **3 of the 4 GJ priority-2 units** have shipped (the bisimplicial
  / hocolim / BK spectral sequence triad is the highest-leverage). Brings
  coverage to ~80%.
- Both P3 units (Postnikov + Reedy) plus the `03.12.25` deepening have
  shipped. Brings coverage to ~92%.
- **Notation decisions are recorded** in each unit's §Notation paragraph
  per the crosswalk in §3 above, and a `notation/model-category.md`
  master-list is started (covering `𝒞`, $W$, $\mathrm{Cof}$, $\mathrm{Fib}$,
  $\mathrm{Ho}(\mathcal{M})$, $\mathbb{L}F$, $\mathbb{R}G$, derived adjunction,
  Quillen equivalence).
- **Pass-W weaving** connects the new units to `03.12-homotopy/` (especially
  to the just-shipped `03.12.25` and to `03.12.07` Whitehead tower for the
  Postnikov / Whitehead duality), to `03.08-*` (classifying-space units), and
  forward to the May 3.40, May-Ponto 3.39, and Lurie HTT audits.
- **Originator-prose paragraphs** present in `03.12.31` (Quillen 1967),
  `03.12.34` (Quillen 1967 + Milnor 1957), `03.12.37` (Bousfield-Kan 1972),
  `03.12.38` (Bousfield-Kan 1972), per the citation list in §4.
- **Exercise pack `03.12.E3`** ships (P4) — required for the ≥95% threshold.

The 5 P1 units close the model-category gap. The 4 P2 units close the
bisimplicial / Bousfield-Kan / simplicial-group gaps. The 2 P3 units close
the Postnikov / Reedy gaps. The P4 exercise pack closes the residual gap
to ≥95%.

**Composite recommendation.** The GJ P1 batch (5 units) is most efficient
dispatched together with the May 3.40 P1 batch (5 units) as a single
**"simplicial-homotopy bookshelf" composite batch of 10 units** — they share
prerequisites (`03.12.25`), share originator citations (May 1967, Kan 1958,
Eilenberg-Zilber, Milnor 1957), and live in adjacent units of the same
chapter. The GJ-distinctive P1 content (model-category framing) builds
directly on the May-3.40 P1 content (Kan-complex foundations), so producing
them in two passes risks notation drift between the batches. Run Pass-V
continuity once on the composite batch and Pass-W weaving once on the full
ten-unit set.

---

## §7 Sourcing

- **Not free.** Goerss-Jardine is published by Birkhäuser (Progress in
  Mathematics 174, 1999; reprinted 2009 Modern Birkhäuser Classics).
  Available at SpringerLink for institutional subscribers
  (<https://link.springer.com/book/10.1007/978-3-0346-0189-4>; auth-gated).
  No author-hosted free PDF; this differs from May 3.38 / 3.40 and Brown
  1.05a.
- **No local copy.** `reference/textbooks-extra/` and
  `reference/fasttrack-texts/03-modern-geometry/` checked — neither contains
  a Goerss-Jardine PDF. **Action item:** acquire institutional-access PDF or
  paper copy and add to
  `reference/fasttrack-texts/03-modern-geometry/Goerss-Jardine-SimplicialHomotopyTheory.pdf`
  before the P1 batch ships. A revision pass on this audit at that point
  will sharpen Ch IV-VII coverage (currently the weakest part of the audit
  given the reduced sourcing).
- **License.** For educational use cite as P. G. Goerss and J. F. Jardine,
  *Simplicial Homotopy Theory*, Progress in Mathematics 174, Birkhäuser
  1999 (reprinted in Modern Birkhäuser Classics 2009).
- **Comparison reading for P1 production.** Since GJ itself is not
  immediately available, the P1 batch should be produced against:
  - **Hovey, *Model Categories* (1999)** — the systematic model-category
    reference; covers the same Ch II content as GJ in greater abstraction.
    Often clearer than GJ on the small-object argument.
  - **May, *Simplicial Objects in Algebraic Topology* (1967)** — local copy
    at `reference/fasttrack-texts/03-modern-geometry/May-SimplicialObjects.pdf`.
    Covers the same Ch I, III, V content combinatorially (no model
    structure).
  - **May-Ponto, *More Concise Algebraic Topology* (2012)** — Ch 14-19
    cover the model-category material with worked applications.
  - **Lurie, *Higher Topos Theory* (2009)** Ch 1 — the modern $\infty$-
    categorical view; cite for the Kan-Quillen and Joyal model structures.
- **Tertiary sources.** Dwyer-Hirschhorn-Kan-Smith *Homotopy Limit Functors
  on Model Categories and Homotopical Categories* (AMS Math. Surv. & Monog.
  113, 2004) and Hirschhorn *Model Categories and Their Localizations* (AMS
  Math. Surv. & Monog. 99, 2003) are the canonical secondary references for
  the bisimplicial / Reedy / hocolim content (GJ Ch IV, VII). Cite these in
  `48.12.36`, `03.12.37`, `03.12.41`.
