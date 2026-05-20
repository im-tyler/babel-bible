# Brylinski — *Loop Spaces, Characteristic Classes and Geometric Quantization* (Fast Track 3.47) — Audit + Gap Plan

**Book:** Jean-Luc Brylinski, *Loop Spaces, Characteristic Classes and
Geometric Quantization* (Progress in Mathematics Vol. 107, Birkhäuser
Boston 1993, xvi + 300 pp.; reprinted in *Modern Birkhäuser Classics*,
Birkhäuser/Springer 2008, ISBN 978-0-8176-4730-8). Not openly hosted by the
author or publisher; paywalled via SpringerLink (DOI 10.1007/978-0-8176-4731-5).

**Fast Track entry:** 3.47 (Modern Geometry block; flagged **BUY** in
`docs/catalogs/FASTTRACK_BOOKLIST.md` with topic tags "Higher cohomology,
stacks").

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units to write so that Brylinski is covered to the Fast Track
equivalence threshold (≥95% effective coverage of theorems, key examples,
exercise pack, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally **not** a full line-number P1 audit. The book is
a 300-page research monograph synthesising sheaf hypercohomology, gerbe
theory and loop-group representation theory; a complete inventory at
line-number granularity is a multi-week job and is deferred to a dedicated
audit pass after the priority-1 punch-list ships. This plan works from the
book's canonical 7-chapter outline and Brylinski's distinctive editorial
choices, produces the gap punch-list, and stops there.

**Reduced-source note.** No local PDF was available at the three project
paths checked (`reference/fasttrack-texts/`, `~/Downloads/`,
`~/Documents/Code Projects/B.I.B.L.E/`). WebFetch attempts against
SpringerLink and Google Books were either redirected to authentication
walls or returned 404. The Birkhäuser/Springer publisher page,
ncatlab.org/nlab entries on *Deligne cohomology*, *gerbe*, *Bundle gerbe*
and *Jean-Luc Brylinski*, and the canonical citation pattern of the book in
later literature (Murray 1996, Hitchin 1999, Bunke-Schick 2012) were used
to reconstruct the chapter outline. **This plan is therefore marked
REDUCED**: the topic taxonomy below is reliable (the book's outline is
well-known to specialists) but per-chapter section numbers and specific
named-theorem inventories cannot be cited at line-number granularity until
a copy is acquired.

---

## §1 What Brylinski is for

Brylinski 1993 is the **canonical bridge** between Deligne's sheaf
hypercohomology and the geometric (bundle / gerbe / line-bundle-on-loop-
space) realisations that string theory and higher gauge theory later needed.
Where Pressley–Segal *Loop Groups* (1986) is the canonical text on loop
groups as infinite-dimensional Lie groups and their positive-energy
representations, and Kac *Infinite-Dimensional Lie Algebras* is the canonical
text on the affine-algebra side, Brylinski is the canonical text that
introduces **smooth Deligne cohomology**, develops **gerbes with band $U(1)$**
as a geometric model for $H^3(X, \mathbb{Z})$, and shows how line bundles
over the free loop space $LM$ are controlled by gerbes on $M$ — the
geometric core of the WZW central extension.

Distinctive contributions, in roughly the order Brylinski develops them
across the 7 chapters:

1. **Complexes of sheaves and hypercohomology (Ch. 1).** A
   self-contained development of sheaf hypercohomology, the Čech-de-Rham
   double complex, and the smooth Deligne complex
   $\mathbb{Z}(p)_D^\infty = [\underline{\mathbb{Z}} \to
   \underline{\Omega}^0 \to \underline{\Omega}^1 \to \cdots \to
   \underline{\Omega}^{p-1}]$ as the differential-cohomology refinement of
   integral cohomology. This is the foundation the rest of the book
   builds on. Originating reference: Deligne, *Théorie de Hodge II*, Pub.
   IHES 40 (1971) — but Brylinski's smooth-manifold reformulation is the
   reference standard.
2. **Line bundles and geometric quantization (Ch. 2).** Kostant–Weil
   isomorphism
   $H^2(M, \mathbb{Z}) \cong \{\text{iso classes of Hermitian line bundles}
   / M\}$, the smooth Deligne complex $\mathbb{Z}(2)_D^\infty$ classifying
   line bundles **with connection**, and the Kostant–Souriau prequantum
   line bundle. This recasts geometric quantization as a Deligne-cohomology
   theorem, not a hand-built construction.
3. **Kähler geometry of the space of loops / knots (Ch. 3).** The free
   loop space $LM$ and (Brylinski's variant) the space of unparameterised
   smooth knots in $\mathbb{R}^3$ are infinite-dimensional Kähler
   manifolds, with the Kähler form constructed from a transgression of a
   3-form on $M$. This sets up the geometric side of the loop-group story.
4. **Degree-3 cohomology, Dixmier–Douady theory (Ch. 4).** $H^3(M,
   \mathbb{Z})$ classifies infinite-dimensional Hilbert-bundle / continuous-
   trace-$C^*$-algebra structures (Dixmier–Douady class). Brylinski rebuilds
   the classification using the smooth Deligne complex
   $\mathbb{Z}(3)_D^\infty$. This is the "what $H^3$ classifies" chapter
   and is the conceptual entry into gerbes.
5. **Sheaves of groupoids / gerbes with band $U(1)$ (Ch. 5).** The
   centrepiece. A **gerbe** with band $U(1)$ on $M$ is a sheaf of
   groupoids satisfying local-non-emptiness and local-connectedness, whose
   isomorphism classes are in bijection with $H^3(M, \mathbb{Z})$ (the
   Brylinski–Giraud theorem). A **gerbe with connective structure and
   curving** corresponds to smooth Deligne cohomology
   $H^3(M, \mathbb{Z}(3)_D^\infty)$. This is the canonical geometric
   model that Murray (1996) later reformulated as **bundle gerbes** —
   Brylinski's stacky / sheaf-of-groupoids form and Murray's
   submersion-with-line-bundle form are equivalent but differ in
   computability; both descend from this chapter.
6. **Line bundles over loop spaces (Ch. 6).** A gerbe on $M$ with band
   $U(1)$ canonically transgresses to a line bundle on $LM$; conversely
   line bundles on $LM$ pull back from gerbes on $M$ when sufficiently
   $S^1$-equivariant. This is the **transgression theorem**, geometrising
   the cohomological transgression $H^3(M) \to H^2(LM)$.
7. **Gerbes and central extensions of loop groups (Ch. 7).** The level-$k$
   central extension $\widetilde{LG} \to LG$ of a simple compact Lie
   group $G$ is the transgression of the level-$k$ gerbe on $G$
   (equivalently, the gerbe with Dixmier–Douady class $k$ times the
   generator of $H^3(G, \mathbb{Z}) \cong \mathbb{Z}$). Brylinski gives
   this construction directly from the Deligne / gerbe machinery, recovering
   Pressley–Segal's central extension geometrically.

Brylinski is **not** a first introduction to anything it covers. It assumes
sheaf cohomology (Hartshorne / Iversen), de Rham theory (Bott–Tu), Lie
groups and Lie algebras, basic line-bundle geometry (Kobayashi–Nomizu), and
the existence of the free-loop-space formalism (Pressley–Segal, Kac). It is
the canonical text for the **specific bridge**: Deligne cohomology ⇔
gerbes ⇔ loop-space line bundles ⇔ loop-group central extensions.

**Peer sources** confirming this framing (≥3 required):

- Pressley & Segal, *Loop Groups* (Oxford University Press 1986). The
  canonical text on $LG$, positive-energy representations and central
  extensions from the **Lie-theoretic side** — Brylinski Ch. 7 is the
  geometric / sheaf-cohomological complement.
- Bunke & Schick, "Smooth K-theory" (Astérisque 328, 2010) and
  follow-ups; these treat differential cohomology / smooth Deligne
  cohomology as the universal example, citing Brylinski Ch. 1 as the
  reference standard for the smooth Deligne complex on a manifold.
- Hitchin, "Lectures on special Lagrangian submanifolds" (in *Winter
  School on Mirror Symmetry, Vector Bundles and Lagrangian Submanifolds*,
  AMS/IP Studies in Advanced Math. 23, 2001) — the first widely-circulated
  notes that pushed gerbes (in Brylinski's sense) into the
  string-theory / mirror-symmetry mainstream; cites Brylinski Ch. 5 as
  *the* geometric reference for the $B$-field.
- Murray, "Bundle gerbes" (*J. London Math. Soc.* 54 (1996) 403–416). The
  geometric reformulation: a submersion $Y \to M$ together with a line
  bundle on $Y \times_M Y$ satisfying a cocycle condition. Murray opens by
  citing Brylinski as the originating treatment of $H^3$-classified
  geometric objects and frames bundle gerbes as a computable alternative.

---

## §2 Coverage table (Codex vs Brylinski)

Cross-referenced against the current Codex corpus (per file scan of
`content/03-modern-geometry/{04,05,06,07,08,11,12,13}-*/` and
`content/05-symplectic/`). ✓ = covered; △ = partial / different framing;
✗ = not covered.

| Brylinski topic | Chapter | Codex unit(s) | Status | Note |
|---|---|---|---|---|
| Sheaf hypercohomology, Čech–de-Rham double complex | 1 | `03.04.11-cech-de-rham.md` | △ | Single-complex Čech-de-Rham only; **gap**: hypercohomology of a complex of sheaves; spectral sequence of the Čech-hypercohomology bicomplex. |
| Smooth Deligne complex $\mathbb{Z}(p)_D^\infty$ | 1 | — | ✗ | **Gap (high priority — Brylinski's foundational tool; load-bearing for everything downstream).** |
| Deligne / differential cohomology $H^p(M, \mathbb{Z}(p)_D^\infty)$ | 1 | — | ✗ | **Gap (high priority).** |
| Hermitian line bundles classified by $H^2(M, \mathbb{Z})$ (Kostant–Weil) | 2 | `03.05.08-complex-vector-bundle.md`, `03.06.04-pontryagin-chern-classes.md` | △ | First Chern class as obstruction is implicit; the Kostant–Weil iso (line bundles $\cong H^2(\cdot, \mathbb{Z})$) is not stated. |
| Line bundles with connection $\leftrightarrow$ $H^2(M, \mathbb{Z}(2)_D^\infty)$ | 2 | — | ✗ | **Gap.** |
| Prequantum line bundle / Kostant–Souriau geometric quantization | 2 | `05.03.01-coadjoint-orbit.md` (KKS form only) | △ | KKS symplectic form on coadjoint orbits is named but the **prequantization condition** $[\omega/2\pi] \in H^2(M, \mathbb{Z})$ and the construction of the prequantum line bundle are not units. |
| Kähler structure on $LM$ / space of knots | 3 | — | ✗ | **Gap.** Loop-space geometry is absent from `03.11-infinite-dim-lie/` (which covers algebraic central extensions only). |
| Transgression $H^{p+1}(M) \to H^p(LM)$ | 3, 6 | — | ✗ | **Gap.** |
| $H^3(M, \mathbb{Z})$ as classifying group (Dixmier–Douady) | 4 | — | ✗ | **Gap (high priority).** |
| Continuous-trace $C^*$-algebras, infinite-dim Hilbert bundles | 4 | — | ✗ | **Gap (low priority — operator-algebra side, defer to a $C^*$ track).** |
| Gerbes with band $U(1)$ / sheaves of groupoids | 5 | — | ✗ | **Gap (highest priority — book's centrepiece).** |
| Connective structure + curving on a gerbe | 5 | — | ✗ | **Gap (high priority).** |
| Bundle gerbes (Murray 1996 reformulation) | 5 (cf.) | — | ✗ | **Gap (high priority — the computable form; cite Murray as originator).** |
| $B$-field / Kalb-Ramond field as a gerbe connection | 5–6 | — | ✗ | **Gap.** Codex has no string-theory $B$-field unit. |
| Transgression: gerbe on $M$ $\to$ line bundle on $LM$ | 6 | — | ✗ | **Gap (high priority — the geometric content of Brylinski).** |
| Central extension $\widetilde{LG} \to LG$ (algebraic 2-cocycle form) | 7 | `03.11.01-central-extension.md`, `03.11.02-infinite-dim-lie-reps.md`, `03.11.03-virasoro-algebra.md` | △ | Central extension is defined at the **Lie-algebra cocycle** level only (Kac / Pressley–Segal §4). Brylinski's geometric construction from a gerbe on $G$ is not present. |
| Level-$k$ gerbe on a simple compact Lie group | 7 | — | ✗ | **Gap.** Connects WZW level to $H^3(G, \mathbb{Z}) \cong \mathbb{Z}$. |
| WZW action and the level-$k$ central extension | 7 (cf.) | `03.10.02-cft-basics.md` | △ | CFT basics unit exists but does not connect to the gerbe / Deligne picture. |
| Twisted K-theory pointer (Freed–Hopkins–Teleman) | — (post-Brylinski) | — | ✗ | **Gap (low priority — Master-tier pointer; defer to FHT-specific audit).** |

**Aggregate coverage estimate:** ~5% of Brylinski has corresponding Codex
units, and most of that 5% is the algebraic / Lie-cocycle side of Ch. 7
(via the three units in `03.11-infinite-dim-lie/`). The **entire
Deligne-cohomology and gerbe apparatus (Chs. 1, 4, 5, 6)** is absent. The
gap is essentially total for the book's central content.

Prerequisite-blocker note: the Codex has solid bundle/connection
foundations (`03.05-bundles/`, `03.06-characteristic-classes/`) and Čech
cohomology (`03.04.11-cech-de-rham.md`, `06.04.02-cech-cohomology-line-bundles.md`),
which is the minimum substrate. No new prereq stub is needed *before*
starting the Brylinski punch-list — the gap is in the upper-storey
construction (hypercohomology of complexes of sheaves, smooth Deligne,
gerbes), not in the foundations.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — no external blockers.** The Codex's existing
`03.04.11-cech-de-rham.md`, `03.05.*-bundles/`, `03.06.*-characteristic-classes/`
and `03.11.01-central-extension.md` are sufficient prereq substrate.

**Priority 1 — high-leverage, captures Brylinski's central content:**

1. **`03.04.14` Hypercohomology of a complex of sheaves.** Definition via
   Čech bicomplex; the two spectral sequences. Brylinski Ch. 1 anchor.
   Standalone unit (~1500 words). Foundational for everything downstream.
2. **`03.06.07` Smooth Deligne complex $\mathbb{Z}(p)_D^\infty$ and
   differential cohomology $\hat{H}^p(M, \mathbb{Z})$.** Definition,
   Bockstein-style exact sequences relating $\hat{H}^p$ to ordinary
   $H^p$ and to differential forms with integral periods. Brylinski Ch. 1
   anchor; Bunke–Schick for the modern reformulation. Master-tier
   required (~2000 words). **Load-bearing for items 3, 5, 6, 7.**
3. **`03.06.08` Kostant–Weil isomorphism and prequantum line bundle.**
   $H^2(M, \mathbb{Z}) \cong \{\text{Hermitian line bundles}\}/{\sim}$;
   line bundles with connection $\cong H^2(M, \mathbb{Z}(2)_D^\infty)$;
   prequantization condition $[\omega / 2\pi] \in H^2(M, \mathbb{Z})$ and
   construction of the prequantum line bundle on a symplectic manifold.
   Brylinski Ch. 2; Woodhouse *Geometric Quantization* as the standard
   pedagogical reference. Three-tier (~2000 words).
4. **`03.11.04` Free loop space $LM$ and the transgression
   $H^{p+1}(M) \to H^p(LM)$.** Smooth structure on $LM$ (Frechet
   manifold), $S^1$-action, transgression at the level of de Rham
   complexes. Brylinski Ch. 3, 6. Three-tier (~1500 words).
5. **`03.06.09` Dixmier–Douady class and $H^3(M, \mathbb{Z})$.** What
   $H^3$ classifies: continuous-trace $C^*$-algebra bundles (statement
   only — operator-algebra proofs deferred), and (the modern reading)
   $U(1)$-gerbes. Brylinski Ch. 4 anchor; Murray 1996 for the bundle-gerbe
   reformulation cited in §4. Master-tier (~1500 words).
6. **`03.06.10` Bundle gerbe (Murray) and gerbe with band $U(1)$
   (Brylinski).** Two parallel definitions, equivalence statement,
   classification by $H^3(M, \mathbb{Z})$. Connective structure (curving)
   and the lift to $H^3(M, \mathbb{Z}(3)_D^\infty)$ for gerbes with
   connection. Brylinski Ch. 5 + Murray 1996 as joint anchors. Master-tier
   (~2500 words; the central unit of this punch-list).
7. **`03.06.11` Transgression of a gerbe to a line bundle on the loop
   space.** Statement and construction: a $U(1)$-gerbe on $M$ with
   connective structure gives a line bundle with connection on $LM$;
   curvature of the line bundle is the transgressed 3-curvature of the
   gerbe. Brylinski Ch. 6. Master-tier (~1500 words).
8. **`03.11.05` Geometric construction of $\widetilde{LG} \to LG$ from
   the level-$k$ gerbe on $G$.** The Brylinski Ch. 7 construction:
   level-$k$ generator of $H^3(G, \mathbb{Z}) \cong \mathbb{Z}$
   transgresses to the level-$k$ line bundle on $LG$, whose total space
   (with the obvious group structure) is the central extension.
   Connects to existing `03.11.01-central-extension.md`,
   `03.11.02-infinite-dim-lie-reps.md`. Master-tier (~2000 words).

**Priority 2 — physics-side connection units:**

9. **`03.07.16` $B$-field as a gerbe connection.** Pointer unit
   connecting `03.06.10` to string-theory / sigma-model literature.
   Hitchin 1999 / 2001 anchor. Intermediate + Master (~1200 words).
10. **`03.10.03` WZW action and the level-$k$ extension via Brylinski's
    geometric construction.** Builds on existing
    `03.10.02-cft-basics.md`. Cross-links to `03.11.05`. Master-only
    (~1500 words).

**Priority 3 — pointer / Master-tier deepening:**

11. **`03.06.12` Twisted K-theory and the Freed–Hopkins–Teleman theorem
    (pointer unit).** $K^*_G(G)$ at level $k$ equals the Verlinde ring;
    builds on `03.06.10` (gerbes / twists) and `03.08.*` (K-theory).
    Freed–Hopkins–Teleman 2003/2007/2011 papers as originators. Pointer
    only; defers proof to a dedicated Freed audit. Master-only
    (~1000 words).

**Priority 4 — deferred / explicitly NOT in scope here:**

- Higher gerbes ($n$-gerbes for $n \geq 2$) — defer until 2-gerbes /
  $\infty$-stack track is opened.
- TQFT-specific gerbe applications (Dijkgraaf–Witten, Chern–Simons at
  the prequantum level) — defer to **Freed FT 3.05 audit** per the
  task's explicit non-goal.
- The cubical / simplicial-sheaf reformulation of Deligne cohomology —
  defer; not load-bearing for Brylinski.
- Continuous-trace $C^*$-algebra side of Dixmier–Douady — defer to a
  $C^*$ / operator-algebra track.

---

## §4 Implementation sketch (hour estimates, originator citations)

For full Brylinski coverage at the FT-equivalence threshold, the minimum
set is items 1–8 (8 priority-1 units). Realistic production estimate
(mirroring earlier Bott–Tu / Lawson–Michelsohn / Berline–Getzler–Vergne
batches in `plans/fasttrack/`):

- ~3–4 hours per unit for definitional / Beginner+Intermediate-tier units
  (items 1, 4, 9).
- ~5–6 hours per unit for Master-tier units carrying nontrivial
  constructions (items 2, 3, 5, 6, 7, 8, 10).
- Priority-1 total: 1 × 4h + 1 × 6h + 1 × 5h + 1 × 4h + 1 × 5h + 1 × 6h +
  1 × 5h + 1 × 6h = **~41 hours** focused production.
- Priority-2 total: ~4h + ~5h = **~9 hours**.
- Priority-3 pointer: **~2 hours**.
- **Grand total: ~52 hours** of focused production for FT equivalence
  + Master-tier extras. Fits a 7-day production window with reserve.

**Originator-prose target.** Brylinski is the *originator* of the smooth
Deligne / gerbe synthesis. The Master tier of items 1, 2, 5, 6, 7, 8 must
carry originator-prose treatment per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, citing:

- P. Deligne, "Théorie de Hodge II," *Publications mathématiques de
  l'I.H.É.S.* 40 (1971) 5–58 — originating Deligne cohomology
  (analytic / algebraic-variety setting).
- P. Deligne, "Théorie de Hodge III," *Publications mathématiques de
  l'I.H.É.S.* 44 (1974) 5–77 — continuation; mixed Hodge structures.
- J.-L. Brylinski, *Loop Spaces, Characteristic Classes and Geometric
  Quantization*, Progress in Math. 107, Birkhäuser 1993 — the book
  itself; originating reference for **smooth** Deligne cohomology, for
  gerbes with band $U(1)$ in the differential-geometric setting, and for
  the gerbe → loop-space-line-bundle → central-extension chain.
- M. K. Murray, "Bundle gerbes," *Journal of the London Mathematical
  Society* 54 (1996) 403–416 — originating the bundle-gerbe
  (submersion + line bundle on the fibre product) reformulation; the
  computable form used in physics.
- N. Hitchin, "Lectures on special Lagrangian submanifolds," in
  *Winter School on Mirror Symmetry, Vector Bundles and Lagrangian
  Submanifolds* (Cumrun Vafa & S.-T. Yau eds.), AMS/IP Studies in
  Advanced Math. 23 (2001) — first widely-cited treatment putting
  gerbes (Brylinski's sense) into the string-theory mainstream;
  originating the modern $B$-field / gerbe dictionary.
- D. S. Freed, M. J. Hopkins & C. Teleman, "Loop groups and twisted
  K-theory" series, *Journal of Topology* 4 (2011) 737–798 and earlier
  parts — originating the FHT theorem identifying twisted equivariant
  K-theory of $G$ at level $k$ with the Verlinde ring of $LG$ positive-
  energy representations at level $k$. Pointer-only in priority-3 item 11.

**Notation crosswalk.** Brylinski writes $\mathbb{Z}(p)_D^\infty$ for the
smooth Deligne complex (with $\infty$ marking the smooth, not analytic /
algebraic, version) and uses the truncation
$[\underline{\mathbb{Z}} \to \underline{\Omega}^0 \to \cdots \to
\underline{\Omega}^{p-1}]$. Bunke–Schick and the differential-cohomology
literature write $\hat{H}^p(M, \mathbb{Z})$ for $H^p(M, \mathbb{Z}(p)_D^\infty)$.
Murray writes $\mathcal{G} \to M$ for a bundle gerbe; Brylinski writes
$\mathcal{C} \to M$ for a sheaf of groupoids (gerbe). The Codex notation
decision (per `docs/specs/UNIT_SPEC.md` §11) should: adopt Brylinski's
$\mathbb{Z}(p)_D^\infty$ in `03.06.07` for the complex, adopt the
differential-cohomology $\hat{H}^p$ in unit bodies as the headline name,
and use **bundle gerbe** as the headline term in `03.06.10` (citing
Brylinski's *gerbe with band $U(1)$* as the equivalent sheaf-of-groupoids
form). Record this in a §Notation paragraph of `03.06.07` and `03.06.10`.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named proposition / theorem in
  Brylinski (full P1 audit; deferred — book is 300 pp. and no local PDF
  was available in this pass).
- The exercise pack. Brylinski has worked-example-style exposition rather
  than an exercise pack per chapter; exercises for the punch-list units
  will need to be **generated** during P3 production, not transcribed.
  Deferred to a follow-up exercise sweep after the priority-1 units ship.
- **Higher gerbes ($n$-gerbes for $n \geq 2$).** Brylinski touches these
  in passing in Ch. 5 but does not develop the theory. Defer to a
  dedicated $\infty$-stack / higher-gauge-theory audit.
- **TQFT-specific applications of the gerbe / Deligne machinery**
  (Dijkgraaf–Witten as a gerbe-cohomology theory, Chern–Simons at the
  prequantum level, anomaly inflow). These belong to the **Freed FT 3.05
  audit** (`plans/fasttrack/freed-lectures-field-theory-topology.md`)
  and are *explicitly out of scope* for this plan per the task brief.
- The operator-algebra side of Dixmier–Douady (continuous-trace
  $C^*$-algebras). Defer to a $C^*$ / non-commutative-geometry track.
- The full Freed–Hopkins–Teleman theorem proof; only a pointer unit
  (item 11) is in scope.

---

## §6 Acceptance criteria for FT equivalence (Brylinski)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The 8 priority-1 units ship to the standard tier-rubric. Item 6
  (`03.06.10` bundle gerbe / gerbe with band $U(1)$) is the **single
  highest-impact unit** and must include Brylinski-Murray equivalence as
  a stated theorem plus at least one worked computation
  (the level-$k$ gerbe on $\mathrm{SU}(2)$ is the canonical choice).
- ≥95% of Brylinski's named theorems in Chs. 1, 2, 4, 5, 6, 7 map to
  Codex units (currently ~5%; after priority-1 this rises to ~75%;
  after priority-1 + priority-2 to ~90%; ≥95% additionally needs the
  exercise-pack sweep noted in §5 and the priority-3 pointer for FHT).
- ≥90% of Brylinski's signature worked examples map: the prequantum
  line bundle on a symplectic manifold (Ch. 2), the Kähler form on the
  space of knots (Ch. 3 — Master-tier example only), the level-$k$
  gerbe on $\mathrm{SU}(2)$ / $\mathrm{SU}(n)$ (Ch. 7), and the
  resulting central extension of $L\mathrm{SU}(n)$ at level $k$.
- Notation decisions in §4 are recorded in the relevant units'
  §Notation sections.
- Pass-W weaving connects the new units laterally to:
  (i) `03.04.11-cech-de-rham.md` ← items 1, 2;
  (ii) `03.05.07-principal-bundle-connection.md` ← items 2, 6;
  (iii) `03.06.04-pontryagin-chern-classes.md` ← items 3, 5;
  (iv) `03.11.01-central-extension.md`,
  `03.11.02-infinite-dim-lie-reps.md` ← item 8;
  (v) `05.03.01-coadjoint-orbit.md` ← item 3;
  (vi) `03.10.02-cft-basics.md` ← item 10.

Priority-1 alone closes the bulk of the equivalence gap. Priority-2 closes
the physics-side connection gap. Priority-3 + exercise sweep close to
≥95%.

---

## §7 Sourcing

- **NOT FREE.** Brylinski has not openly hosted the book; the publisher
  (Birkhäuser/Springer) paywalls the 2008 *Modern Birkhäuser Classics*
  reprint via SpringerLink (DOI 10.1007/978-0-8176-4731-5; ISBN
  978-0-8176-4730-8). Print is in stock at the publisher
  (~$70 USD list, often less via institutional access).
- **Acquire before P3 production.** A local PDF (or institutional access
  via the user's library) is required before writing items 1, 2, 5, 6, 7
  at Master tier — these units depend on Brylinski's notation and proof
  organisation, and the reduced-source reconstruction in this plan
  cannot substitute for the canonical text at line-number granularity.
- **Local copy target.** When acquired, place at
  `reference/fasttrack-texts/03-modern-geometry/Brylinski-LoopSpacesCharacteristicClassesGeometricQuantization.pdf`
  to mirror the pattern of other 3.x FT texts (Bott, Freed, May,
  Sternberg already present in that directory).
- **Companion sources** (used to triangulate Brylinski's content in this
  reduced pass; all should be cited in the units below per
  `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10):
  - Pressley & Segal, *Loop Groups* (OUP 1986) — already referenced in
    `03.11.0[1-3]`; cross-reference from item 8.
  - Murray, "Bundle gerbes," *J. London Math. Soc.* 54 (1996) — primary
    secondary source for item 6.
  - Bunke & Schick, "Smooth K-theory" (Astérisque 328, 2010) — primary
    secondary source for item 2.
  - Hitchin, "Lectures on special Lagrangian submanifolds" (2001) —
    primary secondary source for item 9.
  - Freed, Hopkins & Teleman, "Loop groups and twisted K-theory" series
    (2003 / 2007 / 2011) — primary secondary source for item 11
    (pointer-only).
- **Reduced-pass marker.** This plan was produced WITHOUT a local PDF
  copy of Brylinski. The chapter-by-chapter outline used here is the
  canonical 7-chapter structure of the book as cited in the secondary
  literature above; it is reliable at the topic-taxonomy level but not at
  the level of specific theorem numbers, page references, or proof
  ordering. The first action on acquiring the PDF is to upgrade §2's
  coverage table with Brylinski's per-theorem numbering and revise
  item-by-item word-counts in §4 accordingly.
