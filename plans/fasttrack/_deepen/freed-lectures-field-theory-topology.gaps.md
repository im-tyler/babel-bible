# Freed — *Lectures on Field Theory and Topology* (FT 3.05) — Deepening pass (genuine gaps)

**Audit slug:** `freed-lectures-field-theory-topology`.
**Recommended chapter:** a NEW chapter `content/03-modern-geometry/15-tqft/`
(frontmatter `section: modern-geometry`, `chapter: tqft`). Chapters 15 and 16
are both free in `03-modern-geometry/` (14 = `quantum-representations`, occupied
by QM-content only). The cluster could alternatively graft into
`10-conformal-field-theory/` (03.10.04+, all free), but a dedicated `15-tqft/`
keeps the CFT chapter's identity intact, per the first-pass audit §4 routing
recommendation. **Use `15-tqft/` ids `03.15.01`–`03.15.09` below.** (Note: the
existing `03.15-morse-homology/` directory uses a *dotted* chapter prefix
`03.15.NN`; to avoid id collision, this cluster takes a distinct directory but
must claim ids the Morse-homology chapter does NOT use — Morse-homology occupies
`03.15.01`–`03.15.NN`. **Action required before production: either renumber the
new TQFT chapter to `16-tqft/` with ids `03.16.NN`, or confirm Morse-homology's
occupied range and slot above it.** Recommend `03.16.NN` to be safe; ids below
are written as `03.16.0N`.)

The first-pass audit (`plans/fasttrack/freed-lectures-field-theory-topology.md`)
estimated ~3% coverage and proposed 13 standalone units + 2 grafts. Since it was
written the corpus grew to 1319 units and several of its items are now COVERED or
partially covered cross-section. Crucially: the **bare Atiyah–Segal TQFT-functor
definition is already stated** inside `03.02.20` (the cobordism-category unit
literally says "A topological quantum field theory is a symmetric monoidal functor
out of $\mathbf{Cob}_n$, by the Atiyah-Segal axioms" with the symmetric-monoidal +
duality structure spelled out). **Pontryagin–Thom, Thom/bordism spectra, the
10-fold way via $KR$, Chern–Simons forms, the eta invariant, and anomaly *inflow*
are all covered.** What remains genuinely absent is the **categorical-axiomatic and
Freed–Hopkins stable-homotopy face of TQFT**: the worked TQFT axioms (state spaces /
partition function / gluing / tangential structure $H$), the 2d-TQFT ↔ Frobenius
classification, Dijkgraaf–Witten and Chern–Simons *quantum* TQFT, extended TQFT +
the cobordism hypothesis, invertible field theories, Madsen–Tillmann spectra, the
Anderson-dual / Freed–Hopkins classification theorem, and anomaly-as-invertible-
theory in the homotopy-classification sense. This is a genuine FRONTIER cluster.

The first-pass "Priority 0" prereq-glue units (symmetric monoidal category, Picard
groupoid, super vector spaces) are **not proposed as standalone gaps** — they are
folded into the units that need them (notation/§Background blocks), matching corpus
practice (the spectrum unit 03.12.04 already carries "symmetric-monoidal category of
spectra" and $E_\infty$-rings without a dedicated monoidal-category unit; there is no
category-theory section in the corpus and inventing three is gold-plating). Flag for
the producer, do not spawn.

---

## GENUINE GAP 1 (high value) — Atiyah–Segal axioms worked: state spaces, partition functions, gluing

- **id:** `03.16.01`
- **title:** The Atiyah–Segal axioms: TQFT as a symmetric monoidal functor $\mathrm{Bord}_n^H \to \mathrm{sVect}$
- **spec:** Promote the one-paragraph definition in `03.02.20` to a worked unit. A TQFT is a symmetric monoidal functor $F:\mathrm{Bord}_n^H\to\mathrm{Vect}_\mathbb{C}$ (or $\mathrm{sVect}_\mathbb{C}$): closed $(n-1)$-manifolds $\mapsto$ state spaces $F(Y)$, bordisms $\mapsto$ linear maps, disjoint union $\mapsto$ tensor product, closed $n$-manifolds $\mapsto$ partition-function numbers $F(M)\in\mathbb{C}$. Consequences: $F(\varnothing)=\mathbb{C}$, $\dim F(Y)=F(Y\times S^1)$, finite-dimensionality from duality, the **gluing law** $F(M_1\cup_Y M_2)=\langle F(M_1),F(M_2)\rangle$. Tangential structure $H\to O(n)$ (orientation, spin, framing, $\mathrm{Spin}^c$) as the input datum. Worked: $\mathrm{Bord}_2^{\mathrm{or}}$ pictures.
- **why a gap:** This is the central definition the whole book turns on. The corpus states it in one sentence (`03.02.20` line 262) but never works state spaces / partition functions / gluing, never introduces tangential structure $H$ as a unified notion, and never names $\mathrm{sVect}$. grep confirms no unit contains "commutative Frobenius algebra", "partition function" tied to bordism, or "$\mathrm{Bord}_n^H$". Freed Introduction + Lectures 1, 3 anchor; Atiyah 1988 (*Publ. Math. IHÉS* 68) + Segal 1988/2004 originators.
- **prereqs:** `03.02.20` (cobordism category, symmetric-monoidal + duals), `03.09.04` (spin structure, for the $H=\mathrm{Spin}$ example), `03.12.04` (spectrum, for the bordism-spectra link).
- **chapter dir:** new `03-modern-geometry/16-tqft/`; `section: modern-geometry`, `chapter: tqft`. Three-tier; ~2000 words. §Notation records $\mathrm{Bord}_n^H$, $\mathrm{sVect}$.

---

## GENUINE GAP 2 (high value) — 2d oriented TQFTs ↔ commutative Frobenius algebras

- **id:** `03.16.02`
- **title:** Classification of 2d oriented TQFTs: the Frobenius-algebra theorem
- **spec:** State and prove (sketch) the equivalence: the category of 2d oriented TQFTs $F:\mathrm{Bord}_2^{\mathrm{or}}\to\mathrm{Vect}_\mathbb{C}$ is equivalent to the category of commutative Frobenius algebras. Generators-and-relations presentation of $\mathrm{Bord}_2^{\mathrm{or}}$ (cap, cup, pair of pants and its dual generate; the relations are exactly the Frobenius + commutativity + Frobenius-form axioms). The pair-of-pants = multiplication, the cap = trace/counit. Worked example: $A=\mathbb{C}[G]$ recovering 2d Dijkgraaf–Witten finite-gauge-theory partition functions (counting $G$-bundles weighted by $|\mathrm{Aut}|^{-1}$).
- **why a gap:** The canonical first non-trivial TQFT computation; corpus-wide absent (no "commutative Frobenius algebra", no "2d TQFT", no "Dijkgraaf–Witten" anywhere — grep confirms). The "pair of pants" hits in the corpus are Morse-cohomology / moduli-of-curves, not the 2d-TQFT generators. Freed Lecture 4.2 anchor; Abrams 1996 / Dijkgraaf 1989 thesis + Dijkgraaf–Witten 1990 originators.
- **prereqs:** `03.16.01` (Atiyah–Segal axioms), `03.02.20` (cobordism category). Frobenius-algebra background is light and self-contained in the unit (the corpus `03.02.04`/`07.01.12` Frobenius hits are unrelated: Frobenius *theorem* on distributions / Frobenius–Schur indicator).
- **chapter dir:** `03-modern-geometry/16-tqft/`. Three-tier; ~1800 words. *Signature worked computation* of the cluster.

---

## GENUINE GAP 3 (high value) — Extended TQFT and the cobordism hypothesis (Baez–Dolan–Lurie)

- **id:** `03.16.03`
- **title:** Extended TQFT and the cobordism hypothesis
- **spec:** Locality / extension down to points; the extended bordism $(\infty,n)$-category $\mathrm{Bord}_n^{H,\mathrm{ext}}$ (objects = points, 1-morphisms = intervals, …, $n$-morphisms = $n$-bordisms); fully extended TQFT = symmetric monoidal functor to a symmetric monoidal $(\infty,n)$-category $\mathcal{C}$. **Statement** of the cobordism hypothesis: fully extended *framed* $n$-dim TQFTs valued in $\mathcal{C}$ are classified by **fully dualizable objects** of $\mathcal{C}$ ($\mathrm{Fun}^\otimes(\mathrm{Bord}_n^{\mathrm{fr}},\mathcal{C})\simeq (\mathcal{C}^{\mathrm{fd}})^\sim$); the $O(n)$-action and tangential-structure $H$-fixed-point refinement for non-framed theories. Sketch only, no proof. Higher-category definitions ($(\infty,n)$, complete Segal spaces) introduced at pointer depth.
- **why a gap:** Master-tier signature result of Lecture 5 and a flagged FRONTIER target. The corpus has **no** $(\infty,n)$-category, bicategory, "fully dualizable", "cobordism hypothesis", or "Baez–Dolan" content (grep: the "cobordism hypothesis" hits are h-cobordism / Poincaré-conjecture units and an amino-acid file — all false positives). Freed Lecture 5 anchor; Baez–Dolan 1995 + Lurie 2009 (*Current Developments in Mathematics*) originators.
- **prereqs:** `03.16.01` (1-categorical TQFT axioms), `03.16.02` (the $n=2$ dualizability picture as warm-up), `03.12.04` (spectrum, for the Picard/spectrum link the hypothesis feeds).
- **chapter dir:** `03-modern-geometry/16-tqft/`. Master-emphasised; ~1600 words.

---

## GENUINE GAP 4 (high value) — Invertible field theories and the Freed–Hopkins classification

- **id:** `03.16.04`
- **title:** Invertible field theories, Madsen–Tillmann spectra, and the Freed–Hopkins classification
- **spec:** Invertible TQFT = a theory landing in the Picard subgroupoid of the target (every $F(Y)$ is $\otimes$-invertible, every $F(M)\in\mathbb{C}^\times$). First examples: Euler theory (1d), the Arf theory (2d spin), the signature theory (4d). Deformation classes of invertible $n$-dim $H$-theories form an abelian group computed by **stable homotopy**: the Madsen–Tillmann spectrum $MTH$ (Thom spectrum of $-$ the tangential $H$-bundle; relation to classical $MO,MSO,M\mathrm{Spin}$ from `03.12.04`), the **Anderson dual to the sphere** $I_\mathbb{Z}$, and the **Freed–Hopkins theorem** (statement): topological deformation classes are $[\,MTH,\,\Sigma^{n+1}I_\mathbb{Z}\,]$, i.e. a generalised cohomology of $BH$. Reflection positivity as the unitarity datum (pointer to the OS framing in `08.10.07`).
- **why a gap:** The actual content the book is *named for* (Freed–Hopkins 2016/2021). Corpus-wide absent: no "invertible field theory", "Madsen–Tillmann", "Anderson dual", or "Picard groupoid" (grep: the "invertible" hits are RG / Berry-phase units; the "Anderson" hits are moduli-of-curves false positives). The closest existing anchor is the bordism-spectra paragraph in `03.12.04`, which this unit extends. Freed Lecture 6 anchor; Madsen–Tillmann 2007 (*Acta Math.*) + Freed–Hopkins 2021 (*Geom. Topol.* 25) originators.
- **prereqs:** `03.16.01` (invertible = Picard-valued TQFT), `03.12.04` (Thom/bordism spectra, generalised cohomology, Brown representability), `03.06.13` (oriented bordism / Pontryagin–Thom, the classical shadow of $MTH$).
- **chapter dir:** `03-modern-geometry/16-tqft/`. Master only; ~1800 words. **Master-tier signature unit of the audit.** §Notation records $MTH$, $I_\mathbb{Z}$.

---

## GENUINE GAP 5 (medium value) — Anomalies as invertible field theories (Freed's reframing)

- **id:** `03.16.05`
- **title:** Anomalies as invertible field theories in one dimension higher
- **spec:** Freed's reinterpretation: an anomalous $n$-dim QFT is a *boundary theory* (relative theory) for an invertible $(n+1)$-dim theory $\alpha$; the "anomaly" is the deformation class of $\alpha$, valued in the Freed–Hopkins group $[\,MTH,\Sigma^{n+2}I_\mathbb{Z}\,]$. Prototype: the Pfaffian line of a Dirac operator and its anomaly as the partition function of an invertible theory built from the APS $\eta$-invariant. Connects this homotopy-theoretic framing **to** the differential-form anomaly *inflow* already in the corpus (`03.07.32`) — they are the same inflow read in two registers (de Rham descent vs. invertible-theory/bordism).
- **why a gap:** A distinct, higher-level framing from what the corpus has. `03.07.32` covers anomaly inflow via descent + index density (de Rham / Chern–Simons bulk), and `12.18.05` covers the ABJ triangle — but **neither** states "anomaly = (deformation class of an) invertible field theory", which is Freed's signature contribution (Lecture 11) and the bridge to the SPT/SET physics. Freed Lecture 11 + Freed 2014 "Anomalies and invertible field theories" originators.
- **prereqs:** `03.16.04` (invertible theories / Freed–Hopkins group), `03.07.32` (anomaly inflow via descent — the de Rham face), `03.09.24` (eta invariant / APS — the Pfaffian-phase input).
- **chapter dir:** `03-modern-geometry/16-tqft/`. Master only; ~1400 words.

---

## GENUINE GAP 6 (medium value) — Chern–Simons quantum TQFT (Witten 1989)

- **id:** `03.16.06`
- **title:** Chern–Simons theory as a 3d TQFT: partition functions and knot invariants
- **spec:** Quantise the classical Chern–Simons functional (already in `03.07.17`) into a 3d TQFT: the path integral $Z(M)=\int e^{2\pi i k\,\mathrm{CS}(A)}\,DA$ as a 3-manifold invariant; Wilson-loop expectation values giving the Jones polynomial and its $\mathfrak{su}(2)_k$ generalisations; the assignment of state spaces to surfaces = conformal blocks of the WZW model at level $k$ (the CS/WZW correspondence, tying to `03.10.03`); surgery / Reshetikhin–Turaev combinatorial construction as the rigorous shadow. This is the canonical *non-finite* TQFT example and the historical Fields-medal motivation.
- **why a gap:** `03.07.17`/`03.06.07` cover the *classical* Chern–Simons functional/forms and `03.10.03` the WZW *action*, but **none** treat Chern–Simons as a quantum TQFT (no partition-function-as-3-manifold-invariant, no Jones polynomial, no Reshetikhin–Turaev — grep confirms zero "Jones polynomial" / "knot invariant" / "Reshetikhin" in the corpus). Freed Lecture 9.2 (long-range YM+CS) + Witten 1989 (*Commun. Math. Phys.* 121) + Reshetikhin–Turaev 1991 originators. (Witten 1988 TQFT / Donaldson-invariants framing is partly present via `03.07.24`; this unit is the CS/3-manifold half.)
- **prereqs:** `03.16.01` (TQFT axioms), `03.07.17` (classical Chern–Simons functional), `03.10.03` (WZW action, for the conformal-blocks state spaces).
- **chapter dir:** `03-modern-geometry/16-tqft/`. Three-tier; ~1800 words.

---

## COVERED (not gaps) — verified against the live corpus

- **Bordism / cobordism category as a symmetric monoidal category with duals** — `03.02.20-handles-surgery-and-the-cobordism-category` (full $\mathbf{Cob}_n$ construction: objects, gluing, identity, disjoint-union monoidal, $\overline V$ duals, evaluation/coevaluation; line 262).
- **The bare Atiyah–Segal definition (TQFT = symmetric monoidal functor out of $\mathbf{Cob}_n$)** — STATED in `03.02.20` (line 262 + line 300, crediting Atiyah 1988). The *worked* version (state spaces / partition functions / gluing / tangential $H$) is GAP 1 — the one-sentence statement is not a substitute.
- **Pontryagin–Thom construction; unoriented & oriented bordism rings** — `03.06.12-unoriented-bordism-thoms-theorem` and `03.06.13-oriented-bordism-pontryagin-thom` (full units; Thom 1954, Wall 1960 anchors).
- **Thom / bordism spectra $MO, MSO, MU$; bordism as a generalised cohomology theory; Brown representability; symmetric-monoidal category of spectra; $E_\infty$-rings** — `03.12.04-spectrum` (lines 82, 171, 181, 412). The audit's "Madsen–Tillmann" gap extends this; $MTH$ itself is absent (GAP 4).
- **Chern–Simons forms / transgression (classical)** — `03.06.07-chern-simons-and-transgression` (full unit; Chern–Simons 1974, Freed 1995). The *quantum* TQFT is GAP 6.
- **Chern–Simons functional on a 3-manifold (classical, gauge-theory)** — `03.07.17-chern-simons-functional-on-a-3-manifold` (full unit; feeds instanton Floer homology). Classical action only.
- **Anomaly inflow via descent equations + index density (de Rham face)** — `03.07.32-anomalies-via-descent-equations-and-the-index-theorem` (full unit; consistent anomaly, Wess–Zumino condition, inflow $2n+2\to 2n$). The *invertible-field-theory* reframing is GAP 5.
- **Chiral / ABJ axial anomaly (triangle diagram, Fujikawa)** — `12.18.05-chiral-abj-anomaly-triangle-diagram`. Physics-side; no TQFT framing.
- **The 10-fold way / Altland–Zirnbauer symmetry classes via $KR$-theory** — `03.08.12-kr-theory-k-theory-with-reality` (lines 509, 583: Kitaev 2009 periodic table, AZ classes as $KR$-coefficients) and `03.09.12-kr-theory`. The audit's "graft a 10-fold-way pointer" item is therefore COVERED — no new unit.
- **Eta invariant / Atiyah–Patodi–Singer (the Pfaffian-phase / partition-function input to invertible theories)** — `03.09.24-eta-invariant-and-atiyah-patodi-singer-index-theorem` (full unit; spectral asymmetry, $\eta(0)$, holonomy dependence). Feeds GAP 5 as a prereq.
- **Reflection positivity / Osterwalder–Schrader (constructive-QFT face)** — `08.10.07-wightman-axioms-w1w7` (OS axioms + reconstruction; lines 57, 65) and `08.09.01-wick-rotation`. Freed's *abstract* reflection-positivity-as-a-structure-on-a-TQFT is the unitarity datum folded into GAP 4 (pointer), NOT a standalone gap — the OS content is already present.
- **Wick rotation / imaginary-time / Euclidean continuation** — `08.09.01-wick-rotation` (dedicated unit) + path-integral units. The audit's "Wick rotation" gap is COVERED.
- **WZW action and the level-$k$ extension** — `03.10.03-the-wess-zumino-witten-action-and-the-level-k-extension` (feeds GAP 6's conformal-blocks state spaces).
- **CFT basics (the historical sibling of TQFT; Segal axioms namedrop)** — `03.10.02-cft-basics` (mentions modular-functor / TQFT formulation). Pass-W should weave the new `16-tqft/` cluster back here.
- **Frobenius (theorem / reciprocity / Schur indicator)** — `03.02.04`, `07.01.08`, `07.01.12`: all UNRELATED to Frobenius *algebras*; no commutative-Frobenius-algebra unit exists (confirms GAP 2 is real).
- **Symmetric monoidal categories / Picard groupoids / super vector spaces (audit Priority-0 prereq glue)** — NOT proposed as standalone gaps. The corpus has no category-theory section and the spectrum unit already uses monoidal/$E_\infty$ language without one; fold the needed pieces into GAPs 1, 2, 4 as §Background/§Notation blocks rather than spawning three thin prereq units (gold-plating). Producer note, not a gap.

---

**Result: 6 genuine gaps (03.16.01 Atiyah–Segal axioms worked; 03.16.02 2d-TQFT↔Frobenius; 03.16.03 cobordism hypothesis; 03.16.04 invertible theories + Freed–Hopkins; 03.16.05 anomaly-as-invertible-theory; 03.16.06 Chern–Simons quantum TQFT) — all in a new `03-modern-geometry/16-tqft/` chapter. 16 topics verified COVERED with unit ids.** This is a true FRONTIER cluster: the corpus has invested deeply in the *geometry* of fields (gauge theory, characteristic classes, index theorem, bordism, spectra) but not in the *categorical-axiomatic + Freed–Hopkins stable-homotopy* face. The audit's original 13-unit punch-list compresses to 6 (the bare TQFT-functor def, Pontryagin–Thom, Thom spectra, 10-fold way, Wick rotation, OS reflection positivity, and the prereq-glue trio are now COVERED or fold-ins); GAPs 3 and 4 are the highest-value Master-tier targets.
