# Hatcher — *Algebraic Topology* (Fast Track reference anchor) — Audit + Gap Plan

**Book:** Allen Hatcher, *Algebraic Topology* (Cambridge University Press, 2002).
Hosted free by the author at `https://pi.math.cornell.edu/~hatcher/AT/ATpage.html`.

**Fast Track entry:** *not numbered* — Hatcher sits in the Fast Track booklist
as a *peer reference anchor* alongside Brown (1.05), Bott-Tu (1.17), and the
May trilogy (3.38–3.40). It is the de-facto canonical English-language
graduate textbook for algebraic topology and is cited by ~21 Babel Bible units
(82 inline citations) but has never been audited for equivalence coverage.
Treated here as a peer-anchor parallel to Brown, with a numbered slot
deferred until the booklist is revised.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units to write so that Hatcher is covered to the equivalence threshold
(≥95% effective coverage of theorems, key examples, exercise pack, notation,
sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass mirrors the Brown plan in structure and depth. It is intentionally
not a full P1 audit (which would inventory every named theorem and exercise
in Hatcher's ~544 pages at the line-number level). It works from the book's
canonical chapter-and-section structure and Hatcher's distinctive editorial
choices, produces the gap punch-list, and stops there. A full P1 audit would
sharpen the punch-list — especially on the exercise side — but would not
change which units need writing.

---

## §1 What Hatcher's book is for

Hatcher is the canonical English-language graduate textbook for algebraic
topology. Where Brown (1.05) anchors the *fundamental-groupoid* framing and
Bott-Tu (1.17) anchors the *de Rham / differential-forms* route, Hatcher
anchors the **CW-complex / singular-chains / cup-product** mainline that
every modern algebraic-topology graduate course follows. It is the source
that current PhD students cite when they say "algebraic topology" without
qualification.

The book has four chapters and three appendices. The numbering carries
weight: each chapter is large (~120 pages) and contains its own thematic
sub-arcs.

**Chapter 0: Some Underlying Geometric Notions.**
A "Chapter 0" in the literal sense — homotopy, homotopy type, deformation
retracts, mapping cylinders, mapping cones, CW complexes, the operations on
spaces (product, quotient, suspension, smash, join, wedge), and homotopy
extension property (cofibration). Hatcher builds the entire book on a
CW-first foundation: every theorem is stated for CW complexes first and
then extended.

**Chapter 1: The Fundamental Group.**
The fundamental group $\pi_1(X, x_0)$ developed group-first (not
groupoid-first as Brown does it). Van Kampen's theorem in the group form.
Covering spaces with the full Galois-correspondence apparatus: deck
transformations, normal covers, classification by subgroups of $\pi_1$,
universal cover, group actions, $K(\pi, 1)$ spaces and graphs of groups.
Hatcher's covering-space chapter is the modern reference.

**Chapter 2: Homology.**
Simplicial, singular, and cellular homology developed in parallel. The
Eilenberg-Steenrod axioms as a unifying frame. Mayer-Vietoris.
Excision (the technical heart of the chapter, with a careful CW-pair proof).
Computations via cellular chain complexes. Coefficient theorems
(universal coefficient theorem for homology). Hatcher §2.A on the
classifying-space construction $K(G, 1)$ is the standard reference.

**Chapter 3: Cohomology.**
Cohomology dualised from homology, then enriched. Universal coefficient
theorem for cohomology (Ext + Hom). Cup product, cap product, cohomology
ring of products (Künneth). Poincaré duality for manifolds (Hatcher's
proof uses the limit over compact subsets, with the orientation sheaf as
a local-coefficient system — the modern presentation). Cohomology with
local coefficients. The chapter ends with the classifying-space
$BG = K(G, 1)$ for discrete $G$ and the universal coefficient theorem.

**Chapter 4: Homotopy Theory.**
Higher homotopy groups $\pi_n(X)$. The long exact sequence of a fibration.
Whitehead's theorem (CW form). Cellular approximation. CW approximation.
Excision in homotopy (the Blakers-Massey theorem). Hurewicz's theorem
(group form for $\pi_1$, abelian form for $n \geq 2$). Eilenberg-MacLane
spaces and the construction of $K(\pi, n)$. Postnikov towers and
obstruction theory. Stable homotopy and the Freudenthal suspension theorem.
Localisation and rational homotopy as a survey at the end.

**Appendices.**
- *Appendix A: CW complexes.* Topology, products of CW complexes, Euler
  characteristic, deformation retracts.
- *Appendix B: Topology of cell complexes.* Cofibrations, homotopy
  extension property, mapping cylinders revisited.
- *Appendix C: Topology of operations on spaces.* Compactly-generated
  spaces, function spaces, the compact-open topology, the exponential law
  $\mathrm{Map}(X \times Y, Z) \cong \mathrm{Map}(X, \mathrm{Map}(Y, Z))$.

**Distinctive Hatcher choices** (in roughly the order he develops them):

1. **CW-first.** Every theorem is proved for CW complexes first; extensions
   to general spaces come second. This is the opposite of Spanier (general
   spaces first, CW second). Hatcher's choice is what makes the book
   accessible to first-year graduate students: every space the reader sees
   has been built by attaching cells.
2. **Three homologies in parallel.** Simplicial, singular, and cellular
   homology developed together so the reader sees the agreement (each
   computes the "same" thing, differently) before any computation. The
   isomorphism between them is then a *theorem*, not a definition.
3. **Excision via CW pairs.** Hatcher's proof of excision is by reduction
   to a CW pair, then a cellular argument. This makes excision computable
   rather than mysterious.
4. **Hurewicz in two forms.** $\pi_1 \to H_1$ as abelianisation (Ch 2).
   $\pi_n \to H_n$ as iso for $(n-1)$-connected spaces (Ch 4).
   Hatcher's exposition makes the discrete-versus-stable distinction explicit.
5. **Postnikov towers as the bridge between $\pi_*$ and $H^*$.** Hatcher
   §4.3 is the modern English-language reference. The $k$-invariant
   $H^{n+2}(X^{(n-1)}; \pi_n)$ classifying the $n$-th tower stage is the
   core of obstruction theory.
6. **Cup product geometrically.** Cup product is introduced via the
   diagonal map $X \to X \times X$ and Alexander-Whitney, with the
   geometric meaning (intersections in manifolds) emphasised. Poincaré
   duality is then the homological dressed-up version of intersection.
7. **Pictures.** Hatcher's text is famously illustrated; the visual
   intuition is part of what the book transfers, not just a decoration.
   A Codex equivalent must reproduce that intuition in prose where Codex
   does not yet have figures.
8. **Exercise pack.** ~600+ exercises, many of them open-ended and used
   in later proofs. The exercise layer (FT equivalence Layer 2) is
   substantial — Hatcher is a book where the exercises *are* part of the
   curriculum, not optional.

---

## §2 Coverage table (Babel Bible vs Hatcher)

Cross-referenced against the current 217-unit corpus. ✓ = covered, △ =
partial / different framing or depth, ✗ = not covered. **Brown-overlap**
flags items where the gap also appears in the Brown plan punch-list.

### Chapter 0 — Underlying geometric notions

| Hatcher topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Homotopy, homotopy type | `03.12.01` homotopy | ✓ | Combined homotopy + homotopy group unit. |
| Deformation retracts | `02.01.06` (mention) | △ | Mentioned in quotient-topology unit; not its own unit; standard convention. |
| Mapping cylinder, mapping cone | `02.01.06` quotient-topology | ✓ | Both treated as universal-property quotients in the new (post-Brown) unit. |
| Operations on spaces (product, quotient, suspension, smash, join, wedge) | `02.01.06`, `03.12.03` suspension | ✓ | Covered across the quotient-topology unit and the suspension unit. |
| CW complex (definition, topology, products) | `03.12.10` cw-complex | ✓ | Standalone unit shipped in the same parallel batch as this audit. |
| Homotopy extension property / cofibration | `02.01.08` cofibration | ✓ | Standalone unit shipped in the same parallel batch as this audit. |
| Compact-open topology, function spaces | `02.01.09` compact-open-topology | ✓ | Standalone unit shipped in the same parallel batch as this audit. |
| Compactly-generated spaces | — | ✗ | **Brown-overlap gap.** No unit yet. |

### Chapter 1 — The Fundamental Group

| Hatcher topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Fundamental group $\pi_1(X, x_0)$ | `03.12.01` homotopy | ✓ | Combined homotopy-group unit covers $\pi_1$ as the $n = 1$ case. *Brown-plan item 5 — closed.* |
| Van Kampen's theorem (group form) | `03.12.09` seifert-van-kampen | ✓ | Both group and groupoid forms in one unit. *Brown-plan item 7 — closed.* |
| Covering spaces (basic theory) | `03.12.02` covering-space | ✓ | Standard treatment present. |
| Galois correspondence for covering spaces | `03.12.02` (partial) | △ | Currently a remark inside the covering-space unit. Hatcher §1.3 is the modern reference; deepening the unit with a Master section on the Galois correspondence in the language of $\pi_1$-sets matches Hatcher's depth. *Brown-plan item 10 — same deepening recommended.* |
| Universal cover | `03.12.02` | △ | Constructed in the unit; existence theorem stated, semi-locally-simply-connected condition stated; full proof deferred to Hatcher. |
| Deck transformations, normal covers | `03.12.02` (partial) | △ | Mentioned. Hatcher's depth on the action of $\pi_1$ on the universal cover and the classification of normal covers is a deepening opportunity. |
| Group actions on spaces, orbit spaces | `03.12.02` (partial) | △ | Brown-overlap; partial coverage from the covering-space side. |
| $K(\pi, 1)$ spaces | `03.12.05` eilenberg-maclane | ✓ | Covered as the $n = 1$ Eilenberg-MacLane case. |
| Graphs of groups, Bass-Serre theory | — | ✗ | **Hatcher §1.B.** Specialty — not load-bearing for the rest of the curriculum. Defer to Tier-γ. |
| Fundamental groupoid $\pi_1(X, A)$ | `03.12.08` fundamental-groupoid | ✓ | Brown's framing; *Brown-plan item 6 — closed.* Hatcher mentions this in passing; the existing unit's depth exceeds Hatcher's. |

### Chapter 2 — Homology

| Hatcher topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| $\Delta$-complexes (semi-simplicial sets) | — | ✗ | **Gap.** Hatcher §2.1 develops $\Delta$-complexes as a lightweight alternative to full simplicial sets; standard in modern algebraic topology and absent in Babel Bible. |
| Simplicial homology | — | ✗ | **Gap (high priority).** Hatcher §2.1. Codex has *singular cohomology* (`03.04.13`) but no dedicated unit on simplicial homology or its agreement with singular. |
| Singular homology (chain complex, computations) | `03.04.13` (cohomology side) | △ | **Gap (high priority).** Codex has singular *cohomology* but no separate unit on the chain-level homology theory. The singular-cohomology unit references homology in passing. Hatcher §2.1 is the modern reference. |
| Eilenberg-Steenrod axioms | `03.04.13` (Master section) | △ | Stated and used in the singular-cohomology unit; no standalone unit. Hatcher §2.3 + Eilenberg-Steenrod 1952 is the canonical pair. |
| Mayer-Vietoris (singular) | `03.04.07` mayer-vietoris | △ | Babel Bible unit is **de Rham** Mayer-Vietoris; the singular version is mentioned in §Bridge but does not have its own treatment. **Gap-by-framing** rather than gap-by-absence. |
| Excision theorem | `03.04.13` (uses) | △ | **Gap.** Stated as an Eilenberg-Steenrod axiom in the singular-cohomology unit; no standalone unit on the *theorem* (small simplices, barycentric subdivision, CW-pair argument). Hatcher §2.1 is the modern proof reference. |
| Cellular homology | `03.12.05` (uses, Step 4) | △ | **Gap (high priority).** Used silently in the Eilenberg-MacLane construction (cellular approximation argument) and elsewhere. Hatcher §2.2 is the modern reference. No standalone unit. |
| CW approximation | `03.12.05` (uses) | △ | **Gap.** Used silently. Hatcher §4.1 is the modern reference. |
| Cellular approximation theorem | `03.12.05` (uses) | △ | **Gap (high priority).** Same as above; used in `03.12.05` Step 3 ("Verify $\pi_k = 0$ for $k < n$") without ever being stated. *Brown-plan item 9.* |
| Universal coefficient theorem (homology) | `03.04.13` (mention) | △ | Mentioned in the integer-coefficient singular-cohomology unit; the homology version (Ext + Tor) is not separately developed. |
| Künneth theorem (homology) | `03.04.12` kunneth | ✓ | Codex has the Künneth unit. Hatcher §3.B reference. |
| Computations (spheres, projective spaces, surfaces, lens spaces) | various | △ | The standard computations are scattered: $H^*(\mathbb{C}P^n)$ in `03.12.05`, $H^*(S^n)$ implicit. Hatcher's worked-example density exceeds Babel Bible's. **Worked-example layer is partial.** |
| Classifying space $K(G, 1) = BG$ | `03.08.04` classifying-space | ✓ | Codex has the classifying-space unit. |
| Euler characteristic | — | ✗ | **Gap.** Hatcher §2.2, Appendix A. Used in many Babel Bible units without ever being formally introduced. |
| Lefschetz fixed-point theorem | — | ✗ | Hatcher §2.C. Specialty — defer. |

### Chapter 3 — Cohomology

| Hatcher topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cochains, singular cohomology | `03.04.13` singular-cohomology | ✓ | Codex covers singular cohomology with $\mathbb{Z}$ coefficients via the Bott-Tu / de Rham route. |
| Universal coefficient theorem (cohomology) | `03.04.13` (mention) | △ | **Gap.** Mentioned but not developed. The Ext + Hom statement is missing. |
| Cup product | `03.04.13` (Master section) | ✓ | Cup-product section present in the singular-cohomology unit. Hatcher §3.2 reference; intersection-theoretic interpretation fully there. |
| Cap product | — | ✗ | **Gap.** Hatcher §3.3. Used in Poincaré-duality formulations; not its own unit. |
| Künneth (cohomology) | `03.04.12` kunneth | ✓ | Covered. |
| Cohomology ring computations | `03.04.13`, `03.12.05` | △ | $H^*(\mathbb{C}P^n)$, $H^*(K(\mathbb{Z}/2, n))$ all present. Worked-example density still below Hatcher. |
| Poincaré duality | — | ✗ | **Gap (high priority).** Hatcher §3.3 is the modern proof reference. Used implicitly in the spin-geometry strand (`03.09.10` Atiyah-Singer) and the Riemann-surfaces strand without ever being stated. |
| Orientation, fundamental class | — | ✗ | **Gap.** Hatcher §3.3. Used silently in spin-geometry; needed for Poincaré duality. |
| Local coefficient systems | `04.03.02` local-systems | ✓ | Codex has local-systems unit (algebraic-geometry framing). Hatcher's framing in §3.H is dual; cross-link sufficient. |
| Cohomology operations | `03.12.05` (Master section) | ✓ | Steenrod squares, cup-$i$ products, Adem relations — all in the Eilenberg-MacLane Master section. **Hatcher's depth is a deepening opportunity, not a gap.** |
| Steenrod squares | `03.12.05` | ✓ | Same. |
| Eilenberg-MacLane representability | `03.12.05` | ✓ | Same. |

### Chapter 4 — Homotopy Theory

| Hatcher topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Higher homotopy groups $\pi_n(X)$ | `03.12.01` homotopy | ✓ | Combined unit. |
| Long exact sequence of a fibration | `02.01.07` fibration | ✓ | Stated and proved in the fibration unit. |
| Whitehead's theorem | `02.01.06` quotient-topology (mention); `03.12.07` whitehead-tower (uses) | △ | **Gap.** Stated in passing in the quotient-topology unit's Bridge and used in the Whitehead-tower unit; no standalone proof. Hatcher §4.1 is the canonical CW proof. |
| Cellular approximation | `03.12.05` (uses) | △ | **Gap (high priority — Brown-overlap, Brown plan item 9).** |
| CW approximation | `03.12.05` (uses) | △ | **Gap.** Same as above. |
| Excision in homotopy / Blakers-Massey | `03.12.03` suspension (uses) | △ | **Gap.** The Blakers-Massey theorem is invoked in the suspension unit's proof of Freudenthal but never stated as its own theorem. Hatcher §4.2 is the modern proof reference. |
| Hurewicz theorem (group form, $\pi_1 \to H_1$) | `03.12.01` (Master section) | △ | Stated as the $n=1$ abelianisation; no standalone unit. Hatcher §2.A. |
| Hurewicz theorem (abelian form, $n \geq 2$) | `03.12.07` whitehead-tower | △ | Used in the rational Hurewicz statement; integer form not stated cleanly as a theorem. Hatcher §4.2 is the canonical reference. **Gap (medium priority).** |
| Eilenberg-MacLane spaces, $K(\pi, n)$ construction | `03.12.05` eilenberg-maclane | ✓ | Codex has the unit; construction by cell-attachment is detailed. |
| Postnikov towers | `03.12.05` (Master section) | ✓ | Sketched in the Eilenberg-MacLane unit. **Hatcher's depth is a deepening opportunity** — the $k$-invariant classification, obstruction theory, and Postnikov sections are in Hatcher §4.3 with more detail than Codex currently has. |
| Obstruction theory ($k$-invariants) | `03.12.05` (Master section, mention) | △ | **Gap (medium priority).** Mentioned but not developed. Hatcher §4.3, May Ch. 22. |
| Stable homotopy, Freudenthal | `03.12.03` suspension; `03.08.06` stable-homotopy | ✓ | Both directions covered. |
| Localisation / rational homotopy | `03.12.06` sullivan-minimal-models | ✓ | Codex covers this in greater depth than Hatcher's survey-level treatment in §4.5. |

### Appendices A, B, C

| Hatcher topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| CW complex topology, products | `03.12.10` cw-complex | ✓ | Shipped. |
| Cofibrations, HEP | `02.01.08` cofibration | ✓ | Shipped. |
| Compactly-generated spaces, function-space exponential | `02.01.09` compact-open-topology (Master section) | ✓ | Covered inside the compact-open unit. |
| Compact-open topology | `02.01.09` compact-open-topology | ✓ | Shipped. |

### Aggregate coverage estimate

**Theorem layer**: ~55% of Hatcher's named theorems map to Babel Bible units;
~25% are partial / used implicitly without being stated as their own
theorem; ~20% are absent. After the priority-1+2 punch-list below, this
rises to ~90%.

**Exercise layer**: not separately audited (P1-lite). Hatcher's ~600+
exercises are the largest single exercise-layer gap on the Fast Track —
Babel Bible's exercise packs (`*.E1` files) cover ~3% of Hatcher's exercise
range. Defer to a dedicated Hatcher-exercise-pack pass.

**Worked-example layer**: ~40% covered; computations of $H^*(S^n)$,
$H^*(\mathbb{C}P^n)$, $H^*(\mathbb{R}P^n)$, lens spaces, surfaces of
genus $g$, etc. are scattered across Codex but not as the dense
chapter-2 / chapter-3 worked-example pack Hatcher delivers.

**Notation layer**: ~70% aligned; Hatcher's reduced-vs-unreduced
distinction, simplicial-vs-singular-vs-cellular indexing, and $\Delta$-set
notation need a `notation/hatcher.md` crosswalk file.

**Sequencing layer**: ~85%; the Babel Bible DAG follows Hatcher's prerequisite
flow (homotopy → cohomology → higher homotopy) faithfully where the
units exist.

**Intuition layer**: ~70%; Codex captures the CW-first framing and the
homotopy-vs-homology distinction, but Hatcher's pictorial intuition is
under-reproduced in prose.

**Application layer**: ~80%; the spin-geometry strand and the
Riemann-surfaces strand fold in Hatcher's applications cleanly.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

The Brown plan punch-list (items 1, 4, 5, 6, 7) closed five units:
`02.01.06` quotient-topology, `02.01.07` fibration, the existing
`03.12.01` homotopy (which now covers $\pi_1$), `03.12.08`
fundamental-groupoid, `03.12.09` seifert-van-kampen. Brown-plan items
that remain open (compact-open / compactly-generated / cofibration / CW
complex / cellular approximation, plus the covering-space deepening and
the crossed-module pointer) are noted as **Brown-overlap** below; the
priority order is the same as in the Brown plan, so these are not
duplicated as new entries here.

**Hatcher-distinctive priority 1 — fills load-bearing homology gaps Brown
does not touch:**

1. **`03.12.11` Singular homology and the chain complex.** The basic
   homology theory: singular chain complex $C_*(X)$, the boundary
   $\partial$, $H_*(X)$, functoriality, homotopy invariance.
   Hatcher §2.1 anchor. Three-tier; ~1500 words. Existing Codex
   `03.04.13` covers cohomology with the de Rham bridge but takes the
   chain-complex version for granted.
2. **`03.12.12` Simplicial and $\Delta$-complex homology, with the
   simplicial-singular agreement.** Hatcher §2.1 anchor.
   Three-tier; covers the agreement theorem (simplicial = singular on
   $\Delta$-complexes / CW complexes). ~1500 words.
3. **`03.12.13` Cellular homology and cellular approximation.**
   Hatcher §2.2 anchor; canonical proof via the long-exact-sequence
   spectral argument. Covers both the cellular chain complex *and* the
   cellular approximation theorem. Three-tier; closes a Brown-plan
   item (item 9) at the same time. ~1800 words.
4. **`03.12.14` Excision theorem (singular).** Hatcher §2.1 anchor.
   Three-tier; the master tier gives the small-simplices /
   barycentric-subdivision proof. ~1500 words. Foundational for the
   Eilenberg-Steenrod axiomatic approach.
5. **`03.12.15` Eilenberg-Steenrod axioms.** Hatcher §2.3 anchor;
   Eilenberg-Steenrod 1952 as originator-text. Statement + uniqueness
   theorem on CW pairs. Three-tier; ~1200 words. Currently scattered
   across `03.04.13` and the spectral-sequence units.

**Hatcher-distinctive priority 2 — fills duality + Hurewicz gaps:**

6. **`03.12.16` Poincaré duality, fundamental class, and orientation.**
   Hatcher §3.3 anchor; the canonical CW-pair / cap-product proof.
   Three-tier; ~2000 words. **Load-bearing** for Atiyah-Singer
   (`03.09.10`), Riemann-Roch (`04.04.01`, `06.04.01`), and the
   intersection pairing on Riemann surfaces (`06.05.*`). Currently used
   silently in all three strands.
7. **`03.12.17` Cap product and the Poincaré duality pairing.**
   Hatcher §3.3 anchor. Three-tier; ~1200 words. Couples to the cup
   product treatment in `03.04.13`. Required as a prerequisite for the
   Poincaré-duality unit above; could be merged with it if the
   resulting unit stays under 2500 words.
8. **`03.12.18` Universal coefficient theorem (homology and cohomology).**
   Hatcher §2.A and §3.1 anchors; the Ext + Tor short exact sequences.
   Three-tier; ~1500 words. The cohomology direction is widely
   referenced in `03.12.05` and the spin-geometry units.
9. **`03.12.19` Hurewicz theorem (integer form, all degrees).**
   Hatcher §4.2 anchor. Currently the rational version is in
   `03.12.07` and the $n=1$ abelianisation is in `03.12.01`; the
   integer-form theorem $\pi_n \to H_n$ for $(n-1)$-connected CW
   complexes is missing as its own unit. Three-tier; ~1200 words.
10. **`03.12.20` Whitehead's theorem (CW form).** Hatcher §4.1 anchor.
    Three-tier; ~1000 words. Currently mentioned in `02.01.06` and used
    in `03.12.07`; deserves a dedicated unit.

**Hatcher-distinctive priority 3 — Hatcher-depth deepenings on existing
units:**

11. **Deepening of `03.12.05` Eilenberg-MacLane:** add a Master section on
    obstruction theory and $k$-invariants per Hatcher §4.3. The Postnikov
    tower is sketched; the $k$-invariant classification
    $H^{n+2}(X^{(n-1)}; \pi_n)$ is a one-paragraph remark. Hatcher's
    depth would be a 600-800 word Master subsection.
12. **Deepening of `03.12.02` covering-space:** add a Master section on the
    Galois correspondence — same item as Brown plan item 10. The Hatcher
    framing (Hatcher §1.3) and the Brown framing (Brown §10) agree on the
    statement; Codex should cite both in the originator-prose treatment.
13. **Deepening of `03.04.13` singular-cohomology:** factor the
    Eilenberg-Steenrod-axioms section out into the new `03.12.15` unit
    (priority-1 item 5 above) and replace it with a cross-link.

**Hatcher-distinctive priority 4 — survey-level pointers, optional:**

14. **`03.12.21` Blakers-Massey / homotopy excision.** Hatcher §4.2.
    Currently invoked in `03.12.03` Freudenthal proof without being
    stated. Master-only unit, ~800 words; foundational for stable
    homotopy and the Goodwillie calculus.
15. **`03.12.22` $\Delta$-complex / semi-simplicial set.** Hatcher §2.1.
    Lightweight prerequisite for simplicial homology if the priority-1
    item 2 above gets pulled into a higher level of detail. Master-only,
    ~800 words.
16. **`03.12.23` Euler characteristic.** Hatcher §2.2 + Appendix A.
    Used in many Babel Bible units without ever being introduced.
    Beginner+Intermediate unit, ~1000 words.

---

## §4 Implementation sketch (P3 → P4)

For a full Hatcher coverage pass, **items 1–10 are the minimum priority-1+2
set** (10 new units). Production estimate (mirroring earlier batches):

- ~3 hours per unit (research + draft + validate at 27/27 + Lean stub +
  Bridge / Synthesis paragraphs in real prose, not the templated form).
- 10 priority-1+2 units × 3 hours = ~30 hours of focused production.
  At 4–6 production agents in parallel, this fits in a 3–4 day window
  with an integration agent stitching outputs.

**Combined with Brown punch-list:** the open Brown items (compact-open,
compactly-generated, cofibration, CW complex) overlap with Hatcher
Appendix A/B/C and with Hatcher Chapter 0. **Producing the Brown
priority-1+2 batch and the Hatcher priority-1+2 batch together yields
~14 new units that close both books simultaneously.** This is the
recommended execution path: dispatch them as one composite batch under
the Brown+Hatcher banner, since Brown and Hatcher agree on every
relevant theorem statement and only differ on framing.

**Originator-prose target.** Hatcher is a *modern textbook synthesis* —
not an originator-text in the sense of Brown (groupoid van Kampen) or
Eilenberg-Steenrod (the axioms). The originator citations for the new
priority-1+2 units are:

- Singular homology, axioms, excision: **Eilenberg & Steenrod 1952**,
  *Foundations of Algebraic Topology* (Princeton).
- Cellular homology: **Whitehead 1949**, *Combinatorial homotopy I, II*
  (Bull. AMS 55).
- Hurewicz: **Hurewicz 1935-1936**, *Beiträge zur Topologie der
  Deformationen I-IV*.
- Poincaré duality, fundamental class: **Poincaré 1895**, *Analysis Situs*;
  **Lefschetz 1926**.
- Universal coefficient: **Eilenberg & Mac Lane 1942**, "Group extensions
  and homology" (Ann. Math. 43).

Each priority-1 unit's Master section should cite the originator paper
in addition to Hatcher.

**Notation crosswalk.** Hatcher writes $H_n(X)$ and $H^n(X; G)$ in the
standard way; uses $C_*$ / $C^*$ for chain / cochain complexes; uses
$\Delta^n$ for the standard $n$-simplex; uses $K(\pi, n)$ for
Eilenberg-MacLane spaces. Distinctive: $X^{(n)}$ for the $n$-skeleton
(matches Codex); reduced versus unreduced homology distinguished by
$\widetilde{H}_n$ versus $H_n$; relative cohomology written as
$H^n(X, A; G)$. A `notation/hatcher.md` crosswalk file should record
this and align with Brown's notation file (when produced) so that the
two books' conventions are compatible.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and exercise in
  Hatcher's 544 pages. (Would take the full P1 audit; deferred unless
  the priority-1+2 punch-list expands.)
- The exercise pack. Hatcher's ~600+ exercises are the largest single
  exercise-layer gap on the Fast Track. A dedicated `03.12.E2`
  Hatcher-exercise-pack unit (or a per-chapter family of `*.E*` units)
  is a P3-priority follow-up after the priority-1+2 theorem-layer batch
  closes.
- Hatcher §1.B (graphs of groups, Bass-Serre theory) — defer to
  Tier-γ; not load-bearing for the rest of the curriculum.
- Hatcher §2.C (Lefschetz fixed-point theorem) — defer to Tier-γ;
  specialty.
- Hatcher Appendix C (compactly-generated spaces, exponential law) —
  *covered by the Brown plan punch-list*, not duplicated here.
- The figures. Hatcher's pictorial intuition needs a parallel Codex
  pass once the figure-rendering infrastructure exists (currently no
  Babel Bible unit ships figures); this is a curriculum-wide deferred item.

---

## §6 Acceptance criteria for FT equivalence (Hatcher)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, Hatcher is at
equivalence-coverage when:

- ≥95% of Hatcher's named theorems map to Babel Bible units (currently ~55%;
  after priority-1 units this rises to ~80%; after priority-1+2 to ~92%;
  after priority-3 deepenings to ~95%).
- ≥80% of Hatcher's exercises have a Codex equivalent (currently ~3%;
  closing this requires the dedicated exercise-pack pass per §5).
- ≥90% of Hatcher's worked examples are reproduced in some Babel Bible unit
  (currently ~40%; the priority-1+2 batch + the spin-geometry strand
  bring this to ~85%; the remainder requires worked-example densification
  in `03.04.13`, `03.12.01`, and the new units).
- A `notation/hatcher.md` crosswalk exists.
- For every chapter dependency in Hatcher (Ch 1 → Ch 2 → Ch 3 → Ch 4),
  there is a corresponding `prerequisites` arrow chain in Babel Bible's DAG.
- Pass-W weaving connects the new units to the existing
  `03.12-homotopy/`, `03.13-spectral-sequences/`, and `03.04-differential-forms/`
  units via lateral connections.

The 10 priority-1+2 units alone close most of the theorem-layer
equivalence gap. Priority-3 deepenings close the depth gap on
Eilenberg-MacLane and covering spaces. Priority-4 are survey-level
pointers and the exercise pack is a separate pass.

**Composite Brown+Hatcher batch recommendation.** Because the open Brown
items (compact-open, compactly-generated, cofibration, CW complex) are
also Hatcher Appendix A/B/C items, and because Brown's and Hatcher's
group-form van Kampen / homotopy / covering-space treatments already
agree on the underlying theorem statements, the recommended production
strategy is to merge the two punch-lists into one Brown+Hatcher batch
of ~14 new units. This batch closes both books' equivalence gaps
simultaneously and avoids redundant integration of the same prerequisite
unit twice.
