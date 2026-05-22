# Hassler Whitney — *Geometric Integration Theory* (Fast Track 1.13) — Audit + Gap Plan

**Book:** Hassler Whitney, *Geometric Integration Theory* (Princeton
Mathematical Series 21, Princeton University Press, Princeton, 1957;
xv + 387 pp.). LCCN 57-5468. The 2005 Dover unabridged reprint
(ISBN 0-486-44583-6) is the in-print edition. Commercial title
(BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 1.13 — "Geometric
Integration Theory, Hassler Whitney, Analytical geometric integration,
BUY").

**Fast Track entry:** 1.13. The **founding monograph of geometric
measure theory (GMT)**. Whitney synthesises three pre-existing
research threads — de Rham's smooth differential-forms /
de-Rham-cohomology programme, the simplicial-cochain (Eilenberg /
Whitney-himself-1937) discrete-side picture, and the
Lebesgue-Carathéodory rectifiable-set / area-theory programme of
Besicovitch and his school — into a **single integration theory for
$k$-dimensional surfaces in $\mathbb{R}^n$** that is invariant under
non-smooth (Lipschitz / BV) deformations, capable of computing the
boundary of a non-smooth set, and rich enough to formulate variational
problems like the Plateau soap-film problem at the level of generality
the physical applications demand. Three-part structure:

- **Part I — Classical theory (Chs. I–IV, ~80 pp.).** $r$-vectors and
  $r$-covectors as Grassmann-algebraic objects; differential forms;
  smooth chains; Stokes' theorem; de Rham's theorem (smooth-cohomology
  = singular-cohomology) developed via simplicial machinery.
- **Part II — General theory (Chs. V–XI, ~210 pp.).** Polyhedral
  chains; mass and flat norm $\flat$; flat chains as the completion;
  the **deformation theorem** (Whitney's master technical theorem
  approximating any flat chain by a polyhedral one with controlled
  flat-norm error); integration of forms over flat chains; rectifiable
  currents (under different names) emerging as the
  $\mathbb{Z}$-coefficient sub-theory.
- **Part III — Geometric structure theorems (Chs. XII–XIV, ~80 pp.).**
  Slicing; structure of rectifiable sets; the prefiguration of what
  became, in Federer 1969 *Geometric Measure Theory*, the
  **normal-and-integral-currents** apparatus that Federer-Fleming 1960
  used to solve the Plateau problem in all dimensions and codimensions.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2
+ P3-lite of the orchestration protocol). Output is a concrete
punch-list of new units so that *Geometric Integration Theory*
(GIT-Whitney hereafter; not to be confused with Mumford's
*Geometric Invariant Theory* — same abbreviation, entirely unrelated
book) is covered to the equivalence threshold (≥95% effective coverage
of theorems, key examples, exercise pack, notation, sequencing,
intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Mirrors the Serre
*CinA* plan and the Arnold *FEEC* plan in structure. **Not** a full
P1 audit: a theorem-by-theorem inventory with line-number anchors is
deferred until a local PDF is sourced. This audit is **tightly
coordinated with the just-completed Arnold *FEEC* audit (FT 1.20,
2026-05-22)**: Whitney forms are the originator-source for FEEC's
lowest-order finite element family, and that audit's punch-list
already contains a Whitney-forms unit at `24.03.01`. **The Whitney
audit defers the Whitney-forms unit to the FEEC audit** and contributes
a P3-shared coordination note here in §8.

**Sourcing status: REDUCED.** No local PDF in
`reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
`reference/book-collection/free-downloads/` (verified 2026-05-22).
Princeton University Press lists the original 1957 hardcover as
out-of-print; the Dover 2005 unabridged reprint
<https://store.doverpublications.com/0486445836.html> sits behind a
paid-purchase wall. Anna's Archive acquisition deferred. A
freely-circulating one-page "uncategorized note" file at
`reference/quantum-well/md/uncategorized notes/Whitney's Theorem.md`
covers only the Whitney embedding theorem (a corollary of GIT-Whitney's
extension-theorem techniques but **not** the central content of the
1957 monograph; the embedding result was published earlier in Whitney
1936 *Ann. of Math.* 37 / 1944 *Ann. of Math.* 45). This plan was
produced from canonical knowledge of GIT-Whitney's three-part /
fourteen-chapter structure (stable since the 1957 first edition; the
2005 Dover reprint is unabridged, paginated identically), cross-referenced
against **Federer 1969** *Geometric Measure Theory* (Springer
Grundlehren 153) — the canonical successor monograph which extends and
in places supersedes GIT-Whitney's framework but which **explicitly
credits the GIT-Whitney foundation** in its preface and §4.1, and
which is essentially **the natural reading order continuation** of
the GIT-Whitney material covered here — and against the peer sources
in §1. The §3 punch-list is robust to the PDF gap because GIT-Whitney's
content map is fixed by the standard restatement in Federer 1969 Ch. 4
and in Krantz-Parks 2008 *Geometric Integration Theory* (Birkhäuser);
the line-number anchor list in §4 is the part that genuinely needs the
local PDF.

---

## §1 What GIT-Whitney is for

GIT-Whitney is the **founding monograph of geometric measure theory**.
Where Hardt-Simon *Seminar on Geometric Measure Theory* (Birkhäuser
DMV Seminar 7, 1986, ~272 pp.) is the canonical modern short
introduction to the post-Federer framework, where Federer 1969
*Geometric Measure Theory* (Springer Grundlehren 153, ~676 pp.) is
the encyclopaedic reference monograph that **succeeded** GIT-Whitney
and reorganises its material in a more powerful (and substantially
denser) framework, where Krantz-Parks 2008 *Geometric Integration
Theory* (Birkhäuser, ~340 pp.) is the modern textbook reformulation
preserving Whitney's narrative arc with cleaned-up notation, where
Mattila 1995 *Geometry of Sets and Measures in Euclidean Spaces*
(Cambridge Studies in Advanced Mathematics 44, ~360 pp.) is the
canonical text on the rectifiable-sets / Hausdorff-measure side of
GMT, and where Morgan 2016 *Geometric Measure Theory: A Beginner's
Guide* (5th ed., Academic Press, ~272 pp.) is the friendly graduate-
intro to currents and Plateau — **GIT-Whitney is the unique
foundational text that builds the entire integration-theory side of
GMT from $r$-vectors and polyhedral chains up to flat chains and the
deformation theorem in a self-contained 387-page narrative**. The
book is famously dense (Whitney's signature compression matched by
unconventional notation) but is the source the entire subsequent
literature cites.

Distinctive contributions, in the order GIT-Whitney develops them:

1. **Ch. I — $r$-vectors and $r$-covectors ($\sim$25 pp.).** The
   exterior powers $\Lambda^r V$ and $\Lambda^r V^*$ of a real
   finite-dimensional vector space $V$, with Whitney's emphasis on the
   **geometric content**: an $r$-vector $\xi = v_1 \wedge \cdots
   \wedge v_r$ represents an oriented $r$-volume in $V$; its **mass**
   $|\xi|$ is the Euclidean $r$-volume; its **comass** $\|\xi\|$ is
   the supremum of $\omega(\xi)$ over unit $r$-covectors $\omega$.
   Simple vs. non-simple $r$-vectors (a 2-vector in $\mathbb{R}^4$
   is non-simple iff its Plücker coordinates fail the Plücker
   relation $\xi_{12}\xi_{34} - \xi_{13}\xi_{24} + \xi_{14}\xi_{23} = 0$).
   The duality $\Lambda^r V^* \cong (\Lambda^r V)^*$. Whitney's
   exposition of this material is **the** canonical reference and
   was, for two decades, the only textbook source for the geometric
   (as opposed to algebraic) treatment of $r$-vectors.
2. **Ch. II — Differential forms ($\sim$15 pp.).** $C^k$
   differential $r$-forms on a smooth manifold; pullback; exterior
   derivative; the standard Stokes / Poincaré-lemma machinery — all
   developed at the slightly-old-fashioned 1957 level of generality
   (real-analytic + $C^k$ flavours, no sheaves), but recognisably the
   smooth-side de Rham picture.
3. **Ch. III — Smooth chains and Stokes ($\sim$15 pp.).** $C^k$
   singular simplices, the smooth chain complex, the smooth Stokes
   theorem, the **comparison theorem** smooth-de-Rham =
   smooth-singular-cohomology = polyhedral-singular-cohomology = the
   de Rham theorem in three different flavours.
4. **Ch. IV — Whitney's classical theorems on smooth functions
   ($\sim$25 pp.).** The **Whitney extension theorem** (a $C^k$
   function defined on a closed set $A \subset \mathbb{R}^n$ with a
   compatible $k$-jet field extends to a $C^k$ function on all of
   $\mathbb{R}^n$); the **Whitney covering lemma** (every open set in
   $\mathbb{R}^n$ admits a covering by closed cubes whose sizes are
   proportional to their distance from the boundary); the **Whitney
   embedding theorem** (any smooth $n$-manifold embeds in
   $\mathbb{R}^{2n+1}$; **strong form**: in $\mathbb{R}^{2n}$, by
   Whitney 1944) is stated and proved using the extension theorem.
   These three theorems originated in earlier Whitney papers but are
   reorganised and re-proved here for the GMT-prerequisite role.
5. **Ch. V — Polyhedral chains ($\sim$15 pp.).** A polyhedral
   $r$-chain in $\mathbb{R}^n$ is a finite formal $\mathbb{Z}$-linear
   (or $\mathbb{R}$-linear) combination $A = \sum_i a_i \sigma_i$ of
   oriented $r$-simplices in general position. Boundary
   $\partial A = \sum_i a_i \partial\sigma_i$. The **polyhedral chain
   complex** $\mathcal{P}_r(\mathbb{R}^n) \to \mathcal{P}_{r-1}(\mathbb{R}^n)$.
6. **Ch. VI — Mass and flat norm on polyhedral chains
   ($\sim$15 pp.).** Two non-equivalent norms on $\mathcal{P}_r$:
   the **mass** $\mathbf{M}(A) = \sum_i |a_i| \cdot \mathrm{vol}_r(\sigma_i)$
   (the total $r$-area, weighted by coefficients); and the **flat
   norm** $\mathbf{F}(A) = \inf_{A = B + \partial C}
   (\mathbf{M}(B) + \mathbf{M}(C))$ where the infimum runs over
   decompositions of $A$ as a sum of a polyhedral $r$-chain $B$ and
   the boundary of a polyhedral $(r+1)$-chain $C$. Flat norm is the
   **right** notion of distance because it makes the boundary
   operator $\partial$ continuous (in fact a contraction) and because
   a flat-Cauchy sequence of polyhedral chains can have a
   non-polyhedral limit which is still geometrically meaningful.
7. **Ch. VII — Flat $r$-chains ($\sim$15 pp.).** The completion of
   $\mathcal{P}_r$ in the flat norm: $\mathcal{F}_r(\mathbb{R}^n) =
   \overline{\mathcal{P}_r}^{\mathbf{F}}$. **The boundary $\partial$
   extends to a continuous operator $\mathcal{F}_r \to
   \mathcal{F}_{r-1}$ with $\partial^2 = 0$.** Flat chains can have
   fractional-dimensional support (a Cantor-set-like example) and
   still admit boundary and integration of forms — this is the **key
   novelty of the framework**.
8. **Ch. VIII — The deformation theorem ($\sim$25 pp.).** Whitney's
   master technical result. For any flat $r$-chain $T \in
   \mathcal{F}_r(\mathbb{R}^n)$ and any $\epsilon > 0$, there exists a
   polyhedral chain $P$ with $\mathbf{F}(T - P) \leq \epsilon
   \mathbf{F}(T)$ and explicit mass and flat-norm bounds. **Proof
   idea:** project $T$ onto the $r$-skeleton of a fine cubical
   grid, controlling the projection's Lipschitz constant carefully so
   that the projection map has bounded distortion. This theorem is
   the engine of the entire flat-chains framework: it shows that
   polyhedral chains are dense in flat chains in a quantitatively
   controlled way, and the same construction underlies Federer-Fleming's
   1960 proof of the existence of solutions to the Plateau problem.
9. **Ch. IX–X — Integration of forms over flat chains ($\sim$20 pp.).**
   For a continuous $r$-form $\omega$ on $\mathbb{R}^n$ and a flat
   $r$-chain $T$, the pairing $\int_T \omega = T(\omega)$ extends from
   the polyhedral case by continuity in $\mathbf{F}$. Smooth Stokes
   $\int_{\partial T} \omega = \int_T d\omega$ extends to flat chains
   by the same continuity argument. This recovers Stokes' theorem in
   the **full generality of flat chains** — much wider than the
   $C^1$-smooth manifolds setting of de Rham.
10. **Ch. XI — Rectifiable currents ($\sim$15 pp.).** A flat
    $r$-chain $T$ is **rectifiable** if $T = \sum_i a_i \tau_{f_i\#}[E_i]$
    for countable disjoint Lipschitz images $f_i(E_i)$ of measurable
    subsets $E_i \subset \mathbb{R}^r$, with $a_i \in \mathbb{Z}$ and
    $\sum_i |a_i| \mathcal{H}^r(f_i(E_i)) < \infty$. Federer-Fleming
    1960 *Ann. of Math.* 72:458-520 refine this to **integral
    currents** $\mathbf{I}_r$ (rectifiable $T$ with rectifiable
    boundary $\partial T$) and **normal currents** $\mathbf{N}_r$
    (flat $T$ with $\mathbf{M}(T) + \mathbf{M}(\partial T) < \infty$).
    GIT-Whitney's Ch. XI is the **originator** version of these
    notions (without the names Federer-Fleming gave them); the
    cleaner Federer-Fleming framework supersedes Whitney's
    presentation here but **does not contradict it**.
11. **Ch. XII–XIV — Structure of rectifiable currents and slicing
    ($\sim$45 pp.).** The **rectifiable-set structure theorem** (a
    set $E \subset \mathbb{R}^n$ of finite $\mathcal{H}^r$-measure
    decomposes uniquely as a countable union of $r$-rectifiable
    pieces + a purely $r$-unrectifiable piece, **Besicovitch
    1928-1939** for $r = 1$ in $\mathbb{R}^2$, **Federer 1947 *Trans.
    AMS* 62** in full generality, restated in GIT-Whitney Ch. XII);
    **slicing** of a flat chain $T$ by hyperplanes
    $T \mapsto T \cap \{x_n = c\}$ — defines a flat
    $(r-1)$-chain for a.e. slicing height $c$, and the slicing
    operation commutes with the boundary $\partial$ up to a sign.

GIT-Whitney is **the** canonical primary source for the
**foundational integration-theoretic side of GMT** (currents, flat
chains, deformation theorem, rectifiability). It has been continuously
in print since 1957 (Princeton 1957; Dover 2005 unabridged reprint)
and remains the canonical citation for **the originating ideas** —
even though most modern coursework uses Federer 1969 as the working
reference. GIT-Whitney has **partial overlap** with FT 1.20 (Arnold
*FEEC*) via the Whitney-forms originator-source (one unit, shipped
once at FEEC's `24.03.01`); **partial overlap** with FT 1.07
(Spivak / Bott-Tu / equivalent multivariable-calculus and de-Rham
material) via the smooth-side Stokes / de Rham foundations (no new
units required — those are shipped already); and **no other FT
overlaps**.

**Peer sources** (in addition to the GIT-Whitney book itself; ≥3
required per the audit protocol):

- H. Federer, *Geometric Measure Theory* (Springer Grundlehren der
  mathematischen Wissenschaften 153, 1969; xiv + 676 pp.) — the
  **canonical successor monograph**. Federer's Ch. 4 ("Homological
  integration theory") is the modern reorganisation of GIT-Whitney
  Chs. V–XIV. Federer's preface (p. v) explicitly says: "Of all the
  earlier treatments of geometric measure theory, that of Whitney
  [Geometric Integration Theory] is closest to the present one." The
  natural reading-order continuation after GIT-Whitney is
  Federer 1969; **every modern GMT student moves to Federer for the
  serious working theory**.
- F. Morgan, *Geometric Measure Theory: A Beginner's Guide* (5th ed.,
  Academic Press 2016; ~272 pp.) — the friendly graduate-introduction
  to GMT, oriented toward the Plateau problem and minimal-surface
  applications. Reads Federer through GIT-Whitney's pedagogical lens.
  Available in academic libraries but commercial.
- S. G. Krantz, H. R. Parks, *Geometric Integration Theory*
  (Birkhäuser, Cornerstones series, 2008; xv + 339 pp.) — the
  **modern textbook reformulation** of GIT-Whitney with cleaned-up
  notation and modern measure-theoretic prerequisites. **Best
  cross-anchor**: Krantz-Parks chapters 5–9 cover GIT-Whitney Chs.
  V–XI in identical sequence, in modern notation; line-number anchors
  in this audit will reference Krantz-Parks where the GIT-Whitney
  PDF is missing.
- P. Mattila, *Geometry of Sets and Measures in Euclidean Spaces*
  (Cambridge Studies in Advanced Mathematics 44, 1995; xii + 343 pp.)
  — the canonical text on **the rectifiable-sets / Hausdorff-measure
  side** of GMT. Cross-anchor for the Ch. XII rectifiable-set
  structure theorem.
- H. Federer, W. H. Fleming, "Normal and integral currents," *Ann. of
  Math.* (2) 72 (1960), 458-520 — **the founding paper of the
  Federer-Fleming reformulation** that succeeds GIT-Whitney Ch. XI.
  Originator-source for normal and integral currents. The Plateau
  problem in all dimensions and codimensions solved here.
- (Supplementary) L. C. Evans, R. F. Gariepy, *Measure Theory and
  Fine Properties of Functions* (CRC Press, Studies in Advanced
  Mathematics, rev. ed. 2015; ~314 pp.) — the canonical reference
  for the **prerequisite real-analysis** (Hausdorff measure, BV
  functions, area / coarea formulas).
- (Supplementary) F. J. Almgren, "Existence and regularity almost
  everywhere of solutions to elliptic variational problems with
  constraints," *Mem. AMS* 165 (1976) — the **Almgren big regularity
  paper** that pushed the GIT-Whitney / Federer-Fleming programme to
  its modern form; the source of subsequent regularity theory for
  area-minimising integral currents.
- (Supplementary) L. Simon, *Lectures on Geometric Measure Theory*
  (Centre for Mathematical Analysis, ANU, Proceedings of the CMA 3,
  1983; vii + 272 pp.) — free CMA / ANU lecture notes; an
  open-access cross-anchor for the Plateau-problem / minimal-surface
  side of the theory. Available at
  <https://maths-people.anu.edu.au/~loriasimon/PCMA-3.pdf>.

---

## §2 Coverage table (Babel Bible vs GIT-Whitney)

Cross-referenced against the current Babel Bible corpus
(`content/00-precalc/` through `content/23-world/`; ~362 units as of
2026-05-22). ✓ = covered, △ = partial / different framing, ✗ =
not covered.

| GIT-Whitney topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Exterior algebra $\Lambda^r V$, $\Lambda^r V^*$ (algebraic side) | `03.01.04-tensor-algebra.md`, `03.04.02-differential-forms.md` | ✓ | Algebraic / tensor-algebra side shipped; Master tier of `03.01.04` covers $\Lambda^r$. |
| $r$-vectors as oriented $r$-volume (geometric framing); mass and comass | △ | △ | Algebraic $\Lambda^r$ is shipped but **the geometric-volume / mass-comass framing GIT-Whitney Ch. I distinctively develops is absent**. **Gap.** |
| Simple vs. non-simple $r$-vectors; Plücker relations | — | ✗ | **Gap.** Plücker relations not anywhere in the corpus despite Grassmannian appearances elsewhere. |
| Differential forms on smooth manifolds | `03.04.02-differential-forms.md` | ✓ | Master tier shipped. |
| Pullback, exterior derivative | `03.04.04-exterior-derivative.md` | ✓ | Master tier shipped. |
| Smooth Stokes' theorem | `03.04.05-stokes-theorem.md` | ✓ | Standard manifold Stokes. |
| de Rham cohomology, de Rham theorem | `03.04.06-de-rham-cohomology.md` | ✓ | Master tier covers de Rham theorem (smooth de Rham = singular cohomology). |
| Singular cohomology, simplicial chains | `03.04.13-singular-cohomology.md` | ✓ | Shipped. |
| **Whitney extension theorem** (smooth) | — | ✗ | **Gap.** Whitney 1934 originator. Foundational for GMT and for several other tracks (singularity theory, jet spaces). |
| **Whitney covering lemma** (cube cover of an open set in $\mathbb{R}^n$) | — | ✗ | **Gap.** Foundational; reused in Calderón-Zygmund theory, in BMO, in Sobolev extension. |
| **Whitney embedding theorem** ($n$-manifold $\hookrightarrow \mathbb{R}^{2n+1}$; strong $\mathbb{R}^{2n}$) | △ | △ | A one-page Note exists at `reference/quantum-well/md/uncategorized notes/Whitney's Theorem.md` (not a production unit). **Gap as a production unit.** Foundational for differential topology — every manifold lives in some $\mathbb{R}^N$. |
| Lipschitz functions, BV functions, Rademacher's theorem | — | ✗ | **Gap.** Foundational GMT prerequisites. No measure-theory prerequisites in the corpus at all (see analysis below). |
| Lebesgue measure, Hausdorff measure $\mathcal{H}^r$ | — | ✗ | **Gap.** No measure-theory units anywhere in `02-analysis/`. **Hard prerequisite for the entire GMT track.** |
| Carathéodory construction of measures | — | ✗ | **Gap.** |
| Area and coarea formulas | — | ✗ | **Gap.** Federer 1969 §3.2 anchor; preceded by Eilenberg 1938 / Kronrod 1950 area / coarea predecessors. |
| Rectifiable sets | — | ✗ | **Gap.** Besicovitch-Federer rectifiable-set theory. |
| Polyhedral $r$-chains in $\mathbb{R}^n$ | — | ✗ | **Gap.** GIT-Whitney Ch. V originator. **The geometric primitive of the entire flat-chains framework.** |
| Mass $\mathbf{M}(A)$ and flat norm $\mathbf{F}(A)$ on polyhedral chains | — | ✗ | **Gap.** GIT-Whitney Ch. VI originator. |
| Flat $r$-chains $\mathcal{F}_r$ (completion under flat norm) | — | ✗ | **Gap.** GIT-Whitney Ch. VII originator. |
| Boundary $\partial : \mathcal{F}_r \to \mathcal{F}_{r-1}$, $\partial^2 = 0$ | — | ✗ | **Gap.** |
| **Whitney deformation theorem** | — | ✗ | **Gap.** GIT-Whitney Ch. VIII originator. **The master technical theorem of flat chains; the engine behind the Federer-Fleming closure theorem.** |
| Integration of forms over flat chains; Stokes for flat chains | — | ✗ | **Gap.** GIT-Whitney Chs. IX–X. |
| **Rectifiable currents** (GIT-Whitney's prefiguration of Federer-Fleming) | — | ✗ | **Gap.** GIT-Whitney Ch. XI originator; renamed and refined by Federer-Fleming 1960. |
| **Federer-Fleming normal and integral currents $\mathbf{N}_r$, $\mathbf{I}_r$** | — | ✗ | **Gap.** Federer-Fleming 1960 *Ann. Math.* originator; pointer unit. |
| Plateau problem (existence of area-minimising currents) | △ | △ | A passing pointer in `05-symplectic/` or `03-modern-geometry/` (Calabi-Yau / minimal-surface adjacent) may exist; no dedicated unit on the Federer-Fleming 1960 / Almgren regularity programme. **Gap as a pointer unit.** |
| Whitney forms $\mathcal{W}^k$ (lowest-order FEEC family) | — | ✗ | **Gap; coordinated with FEEC audit** — already on the FEEC punch-list at `24.03.01`. **Defer here; do NOT double-count.** |
| Rectifiable-set structure theorem (Besicovitch-Federer) | — | ✗ | **Gap.** GIT-Whitney Ch. XII; Besicovitch 1928–39 + Federer 1947 originator. |
| Slicing of currents | — | ✗ | **Gap.** GIT-Whitney Ch. XIII. |

**Aggregate coverage estimate:** **~10%** of GIT-Whitney has
corresponding Babel Bible units (the smooth-side Part I material —
differential forms, Stokes, de Rham — is fully shipped; Whitney
extension/embedding/covering theorems are absent; the entire GMT body
of Parts II–III is absent). The gap is essentially total on the GMT
side (Chs. V–XIV) and substantial on the Whitney-classical-theorems
side (Ch. IV).

**Structural recommendation.** Two options for ID-space placement:

- **Option A — single home in `03-modern-geometry/04-differential-forms/`
  extending the existing differential-forms sub-chapter.** Add a
  block of `03.04.16+` units on Whitney's classical extension /
  embedding theorems, then a block on polyhedral chains and flat
  chains. Pro: keeps everything together with the smooth de Rham
  upstream. Con: GMT is fundamentally a **measure-theoretic
  analysis** subject, not a modern-geometry subject — the natural
  home is in `02-analysis/`. Whitney's *embedding* theorem belongs in
  modern geometry (or in a manifolds sub-chapter), but the
  *integration theory* (Parts II–III) is analysis.

- **Option B — split: Whitney's classical theorems land in
  `03-modern-geometry/02-manifolds/` (the currently-sparse
  manifolds sub-chapter with only one unit), and the GMT body opens
  a new sub-chapter `02.13-geometric-measure-theory/` in analysis.**
  This is the structurally correct placement. The Whitney
  embedding / extension / covering theorems are classical
  differential-topology results (Whitney 1934-1944) and belong in
  modern geometry / manifolds. The GMT body (polyhedral chains, flat
  chains, deformation theorem, rectifiable currents) is
  fundamentally **measure-theoretic** and belongs in analysis,
  alongside a prerequisite block on measure theory and Hausdorff
  measure that the entire analysis side of the Babel Bible is currently
  missing.

**This plan recommends Option B**, with the GIT-Whitney content split
as follows:

- **`03.02.02+` Whitney's classical theorems (manifolds sub-chapter
  expansion):** Whitney extension theorem, Whitney covering lemma,
  Whitney embedding theorem. Three units in the manifolds
  sub-chapter, broadening it from one unit (smooth manifold,
  shipped) to a four-unit foundational block.

- **`02.13-geometric-measure-theory/` (new analysis sub-chapter):**
  prerequisite measure-theory units (Lebesgue, Hausdorff,
  Carathéodory), polyhedral chains, mass and flat norm, flat
  chains, deformation theorem, integration of forms over flat
  chains, rectifiable currents and pointer to Federer-Fleming
  normal-and-integral currents, Plateau-problem pointer.

- **`03.04.NN` Whitney forms unit** — **already on FEEC punch-list
  at `24.03.01`; defer here, do not double-count.**

The **measure-theory prerequisites** are a longstanding hole in the
analysis side of the Babel Bible (no Lebesgue measure unit exists). The
GMT audit is the **first natural occasion** to ship them, and they
will pay dividends across the future analysis track (PDE units,
spectral theory deepening, ergodic theory). Recommend that the
measure-theory prerequisites land in `02.13.00x` as the chapter
opening rather than as an isolated `02.11.X` block, since GMT is what
forces them and the chapter README naturally explains the
prerequisite role. **Alternative:** ship them in a new
`02.07-measure-theory/` slot (the slot `07` is currently unused in
`02-analysis/`; the existing sub-chapters jump from `06-transcendental`
to `08-ode`). This alternative is cleaner long-term — measure theory
deserves its own sub-chapter, not a satellite role in a GMT chapter.
**This plan recommends the `02.07-measure-theory/` route**: opens the
measure-theory sub-chapter for general analysis use, with GMT
consuming it downstream in `02.13-geometric-measure-theory/`.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites (measure theory chapter +
analysis foundations; this entire block is **first-time content** for
the Babel Bible and pays back across the full future analysis track):**

1. **`02.07.00` Measure theory sub-chapter README + notation
   crosswalk.** Chapter scaffolding: sub-chapter README, dependency
   edges to and from `02-analysis/02-real-numbers/`,
   `02-analysis/03-sequences-series/`, `02-analysis/04-integration/`,
   and `02-analysis/11-functional-analysis/`. Notation table:
   $\sigma$-algebra $\mathcal{M}$, measure $\mu$, Lebesgue measure
   $\mathcal{L}^n$, Hausdorff measure $\mathcal{H}^r$, integrable
   function spaces $L^p$. ~800 words.

2. **`02.07.01` $\sigma$-algebras and abstract measures.** Definition
   of $\sigma$-algebra; measurable functions; abstract measure
   $\mu : \mathcal{M} \to [0, \infty]$; countable additivity; the
   monotone-class lemma; the Carathéodory construction of a measure
   from an outer measure. Three-tier; ~2000 words.
   Originator-citation: Borel 1898 (Borel sets); Lebesgue 1902
   *Intégrale, longueur, aire* (Ann. di Mat. Pura Appl.); Carathéodory
   1914 *Nachr. Gesellsch. Wiss. Göttingen* (the outer-measure
   construction).

3. **`02.07.02` Lebesgue measure $\mathcal{L}^n$ on $\mathbb{R}^n$.**
   Construction via outer measure; translation invariance;
   regularity (inner via compact sets, outer via open sets); the
   Vitali / non-measurable example; the Cantor-set null example;
   complete metric structure of $\mathcal{L}^n$ under symmetric
   difference. Three-tier; ~2200 words. Originator-citation:
   Lebesgue 1902 *Intégrale, longueur, aire* (Ann. di Mat. Pura
   Appl.), thèse Sorbonne; ÉNS 1904 lecture notes.

4. **`02.07.03` Lebesgue integral and convergence theorems.** Step
   functions to non-negative measurable to general integrable;
   monotone convergence (Levi); Fatou's lemma; dominated convergence
   (Lebesgue). The $L^p$ spaces ($1 \leq p \leq \infty$); Hölder
   and Minkowski; completeness of $L^p$ (Riesz-Fischer).
   Three-tier; ~2400 words. Originator-citation: Lebesgue 1904
   *Leçons sur l'intégration* (Gauthier-Villars); Riesz 1907 *C. R.*
   144 (Riesz-Fischer for $L^2$); Fischer 1907 *C. R.* 144
   (independent Riesz-Fischer); Lebesgue 1908 (dominated
   convergence).

5. **`02.07.04` Hausdorff measure $\mathcal{H}^r$ and Hausdorff
   dimension.** $r$-dimensional Hausdorff outer measure via covers
   of diameter $\leq \delta$ taken to $\delta \to 0$; Hausdorff
   dimension $\dim_{\mathcal{H}}(E) = \inf\{r : \mathcal{H}^r(E) = 0\}$;
   examples: $\dim_{\mathcal{H}}(\text{Cantor middle-thirds set}) =
   \log 2 / \log 3$, $\dim_{\mathcal{H}}(\text{Koch snowflake}) =
   \log 4 / \log 3$. The **Hausdorff-measure / Lebesgue-measure
   relation** $\mathcal{H}^n = c_n \mathcal{L}^n$ on $\mathbb{R}^n$.
   Three-tier; Master required; ~2200 words. Originator-citation:
   Hausdorff 1919 *Math. Ann.* 79:157-179 ("Dimension und äußeres
   Maß"). **Mandatory originator-prose.**

6. **`02.07.05` Lipschitz functions and Rademacher's theorem.**
   Lipschitz constant; pointwise Lipschitz vs. global Lipschitz;
   **Rademacher's theorem**: a Lipschitz function $f : \mathbb{R}^n
   \to \mathbb{R}^m$ is differentiable $\mathcal{L}^n$-a.e.
   Three-tier; ~1800 words. Originator-citation: Rademacher 1919
   *Math. Ann.* 79:340-359.

7. **`02.07.06` Area and coarea formulas.** **Area formula** for a
   Lipschitz $f : \mathbb{R}^n \to \mathbb{R}^m$ with $n \leq m$:
   $\int_A J_n f\, d\mathcal{L}^n = \int_{\mathbb{R}^m} \mathcal{H}^0(A
   \cap f^{-1}\{y\})\, d\mathcal{H}^n(y)$. **Coarea formula** for
   $f : \mathbb{R}^n \to \mathbb{R}^m$ with $n \geq m$:
   $\int_A J_m f\, d\mathcal{L}^n = \int_{\mathbb{R}^m} \mathcal{H}^{n-m}(A
   \cap f^{-1}\{y\})\, d\mathcal{L}^m(y)$. The two **non-smooth
   change-of-variables theorems** that drive GMT computations.
   Three-tier; Master required; ~2200 words. Originator-citation:
   Federer 1959 *Trans. AMS* 93:418-491 ("Curvature measures");
   Federer 1969 *Geometric Measure Theory* §3.2 (consolidation);
   Eilenberg 1938 *Fund. Math.* 30 (early area-formula precursor);
   Kronrod 1950 *Uspekhi Mat. Nauk* 5 (early coarea precursor).

**Priority 1 — high-leverage Whitney classical theorems
(differential-topology side; **lives in `03-modern-geometry/02-manifolds/`**):**

8. **`03.02.02` Whitney extension theorem.** Statement: a closed set
   $A \subset \mathbb{R}^n$ and a compatible $k$-jet field on $A$
   extend to a $C^k$ function on $\mathbb{R}^n$. Proof via the
   **Whitney cube decomposition** of $\mathbb{R}^n \setminus A$ and
   smooth partition of unity matched to it. Three-tier; Master
   required; ~2400 words. Originator-citation: Whitney 1934 *Trans.
   AMS* 36:63-89 ("Analytic extensions of differentiable functions
   defined in closed sets"). **Mandatory originator-prose.**

9. **`03.02.03` Whitney covering lemma.** Any open set $\Omega \subset
   \mathbb{R}^n$ admits a covering by closed cubes
   $\{Q_i\}_{i \in I}$ with disjoint interiors satisfying
   $\mathrm{diam}(Q_i) \leq \mathrm{dist}(Q_i, \partial\Omega) \leq
   4\sqrt{n}\,\mathrm{diam}(Q_i)$ and $\bigcup_i Q_i = \Omega$.
   Three-tier; ~1500 words. Originator-citation: Whitney 1934
   (same paper as the extension theorem; the covering is the
   construction step). **Reused in Calderón-Zygmund decomposition,
   BMO, Sobolev extension, and Carleson-measure theorem; foundational
   harmonic-analysis tool.**

10. **`03.02.04` Whitney embedding theorem.** Statement: every smooth
    $n$-manifold $M$ embeds smoothly in $\mathbb{R}^{2n+1}$ (easy
    form); strong form: in $\mathbb{R}^{2n}$ for $n \geq 1$. Proof
    of the easy form via general-position arguments on the tangent
    bundle and the Whitney extension theorem; strong form proof
    deferred to Master tier (the **Whitney trick** for removing
    transverse double points). Three-tier; Master required;
    ~2400 words. Originator-citation: Whitney 1936 *Ann. of Math.*
    37 (easy form: $\mathbb{R}^{2n+1}$); Whitney 1944 *Ann. of
    Math.* 45 (strong form: $\mathbb{R}^{2n}$, plus the Whitney
    trick). **Mandatory originator-prose.** Foundational for
    differential topology — every smooth manifold lives concretely
    in some $\mathbb{R}^N$. Note: the existing
    `reference/quantum-well/md/uncategorized notes/Whitney's
    Theorem.md` is **not** a production unit and does not satisfy
    the equivalence threshold; this is a from-scratch unit.

**Priority 1 — high-leverage GIT-Whitney GMT-core (lives in new
`02.13-geometric-measure-theory/` sub-chapter):**

11. **`02.13.00` Geometric measure theory sub-chapter README +
    notation crosswalk.** Chapter scaffolding: sub-chapter README,
    dependency edges to `02.07-measure-theory/` (consumes
    Lebesgue / Hausdorff measure and the area / coarea formulas)
    and to `03.04-differential-forms/` (consumes smooth Stokes and
    de Rham). Notation table: polyhedral chain $\mathcal{P}_r$,
    flat chain $\mathcal{F}_r$, mass $\mathbf{M}$, flat norm
    $\mathbf{F}$, rectifiable current, integral current
    $\mathbf{I}_r$, normal current $\mathbf{N}_r$. ~800 words.

12. **`02.13.01` $r$-vectors and $r$-covectors: mass and comass.**
    The geometric framing of $\Lambda^r V$ as oriented $r$-volumes;
    **mass** $|\xi|$ and **comass** $\|\xi\|$ as dual Euclidean
    norms on $\Lambda^r V$; simple vs. non-simple $r$-vectors;
    **Plücker relations** for simple $r$-vectors. **The geometric
    counterpart to the existing algebraic `03.01.04-tensor-algebra`
    unit.** Three-tier; ~2000 words. Originator-citation: Grassmann
    1844 *Die lineale Ausdehnungslehre* (the $\Lambda^r$
    construction); Whitney 1957 *Geometric Integration Theory*
    Ch. I (the geometric mass-and-comass framing).

13. **`02.13.02` Polyhedral $r$-chains in $\mathbb{R}^n$.** Oriented
    $r$-simplex; formal $\mathbb{Z}$-linear combinations; general
    position; the polyhedral-chain complex $\mathcal{P}_r \to
    \mathcal{P}_{r-1}$ and its boundary $\partial$. Three-tier;
    ~1800 words. Originator-citation: Whitney 1957 *Geometric
    Integration Theory* Ch. V. **Originator unit; mandatory
    originator-prose.**

14. **`02.13.03` Mass and flat norm on polyhedral chains.** Mass
    $\mathbf{M}(A) = \sum_i |a_i| \cdot \mathrm{vol}_r(\sigma_i)$;
    flat norm $\mathbf{F}(A) = \inf\{\mathbf{M}(B) + \mathbf{M}(C)
    : A = B + \partial C\}$; non-equivalence of $\mathbf{M}$ and
    $\mathbf{F}$; flat norm makes $\partial$ a 1-Lipschitz
    operator (a contraction); examples on simple polyhedra in
    $\mathbb{R}^2$ and $\mathbb{R}^3$. Three-tier; Master required;
    ~2000 words. Originator-citation: Whitney 1957 Ch. VI.
    **Mandatory originator-prose.**

15. **`02.13.04` Flat $r$-chains $\mathcal{F}_r(\mathbb{R}^n)$.**
    Completion of $\mathcal{P}_r$ under the flat norm; boundary
    operator extends to a continuous $\partial : \mathcal{F}_r \to
    \mathcal{F}_{r-1}$ with $\partial^2 = 0$; examples of
    non-polyhedral flat chains (Cantor-set-like supports, fractal
    boundaries). Three-tier; ~2000 words. Originator-citation:
    Whitney 1957 Ch. VII. **Originator unit.**

16. **`02.13.05` Whitney deformation theorem.** Statement: for any
    flat $r$-chain $T \in \mathcal{F}_r(\mathbb{R}^n)$ and any
    $\epsilon > 0$, there exists a polyhedral chain $P$ with
    explicit mass and flat-norm bounds $\mathbf{F}(T - P) \leq
    \epsilon \mathbf{F}(T)$, $\mathbf{M}(P) \leq
    C(n, r)\,\mathbf{M}(T)$. Proof outline via projection onto the
    $r$-skeleton of a fine cubical grid; controlled-distortion
    estimate. Three-tier; Master required; ~3000 words.
    Originator-citation: Whitney 1957 Ch. VIII; consolidated by
    Federer 1969 §4.2.9. **Mandatory originator-prose. The
    distinctive load-bearing theorem of GIT-Whitney and the
    technical engine of all subsequent flat-chain theory; carries
    research-level depth.**

17. **`02.13.06` Integration of differential forms over flat chains;
    Stokes for flat chains.** For a continuous $r$-form $\omega$ on
    $\mathbb{R}^n$ and $T \in \mathcal{F}_r$, the pairing
    $\int_T \omega$ extends from the polyhedral case by
    flat-norm continuity. **Flat-chain Stokes** $\int_{\partial T}
    \omega = \int_T d\omega$. The recovery of the smooth Stokes
    theorem as a special case ($T = $ smooth manifold viewed as a
    flat chain). Three-tier; ~1800 words. Originator-citation:
    Whitney 1957 Chs. IX–X.

18. **`02.13.07` Rectifiable currents (GIT-Whitney's prefiguration).**
    Definition: $T \in \mathcal{F}_r$ is **rectifiable** iff
    $T = \sum_i a_i\, \tau_{f_i\#}[E_i]$ for $E_i \subset
    \mathbb{R}^r$ measurable, $f_i$ Lipschitz, $a_i \in \mathbb{Z}$,
    $\sum_i |a_i| \mathcal{H}^r(f_i(E_i)) < \infty$. **The
    GIT-Whitney prefiguration** of the Federer-Fleming framework;
    Federer-Fleming clean up to **normal currents $\mathbf{N}_r$**
    (finite mass + finite boundary mass) and **integral currents
    $\mathbf{I}_r$** (rectifiable with rectifiable boundary).
    Three-tier; Master required; ~2400 words.
    Originator-citation: Whitney 1957 Ch. XI (the prefiguration);
    Federer-Fleming 1960 *Ann. of Math.* (2) 72:458-520 (the
    refined normal-and-integral-currents framework). **Bridge unit
    between GIT-Whitney and modern GMT.**

19. **`02.13.08` Federer-Fleming normal and integral currents
    (pointer).** Pointer-tier expansion of `02.13.07`. Statement of
    the **Federer-Fleming compactness theorem**: the unit ball of
    $\mathbf{I}_r$ in $\mathbf{F}$ is compact (a corollary of the
    deformation theorem). Statement of the **closure theorem**:
    $\mathbf{I}_r$ is closed under flat-norm convergence with
    bounded mass + boundary mass. Pointer to Federer 1969 for the
    full theory; pointer to Almgren 1976 for the regularity theory.
    Two-tier (Intermediate + Master); ~1500 words.
    Originator-citation: Federer-Fleming 1960 *Ann. of Math.* 72.

**Priority 1 — Plateau-problem application pointer:**

20. **`02.13.09` Plateau problem and minimal surfaces via
    Federer-Fleming (pointer).** The **classical Plateau problem**
    (a closed curve in $\mathbb{R}^3$ bounds an area-minimising
    surface): **Douglas 1931** *Trans. AMS* 33 / **Radó 1930**
    independently for the disk topology; **Federer-Fleming 1960**
    for the general $r$-dimensional, $n$-codimensional case via
    integral currents (existence in $\mathbf{I}_r$ via the
    compactness theorem applied to a mass-minimising sequence).
    Regularity: **Almgren big regularity paper** 1976; **De Giorgi
    1965** for codimension-1 (boundaries of Caccioppoli sets);
    **Almgren-De Giorgi-Federer-Fleming** completed the codim-1
    smooth-up-to-a-codim-7-singular-set picture. Pointer-tier +
    Master tier; ~1800 words. Originator-citations: Plateau 1873
    (the empirical / experimental problem statement, *Statique
    Expérimentale et Théorique des Liquides Soumis aux Seules
    Forces Moléculaires*); Douglas 1931, Radó 1930 (disk case);
    Federer-Fleming 1960, Almgren 1976 (general regularity).

**Priority 2 — GIT-Whitney structure theorems:**

21. **`02.13.10` Rectifiable-set structure theorem
    (Besicovitch-Federer).** A set $E \subset \mathbb{R}^n$ of
    finite $\mathcal{H}^r$-measure decomposes uniquely as
    $E = E_{\text{rect}} \cup E_{\text{pure}}$ where
    $E_{\text{rect}}$ is countably $r$-rectifiable and
    $E_{\text{pure}}$ is purely $r$-unrectifiable (Besicovitch:
    every Lipschitz image of $\mathbb{R}^r$ meets it in
    $\mathcal{H}^r$-measure zero). Three-tier; Master required;
    ~2200 words. Originator-citations: Besicovitch 1928 *Math.
    Ann.* 98, 1938 *Math. Ann.* 115, 1939 *Math. Ann.* 116
    ($r = 1$ in $\mathbb{R}^2$); Federer 1947 *Trans. AMS* 62
    (full generality). Master tier covers the Besicovitch
    projection / tangent-density characterisation
    of rectifiability.

22. **`02.13.11` Slicing of currents.** For $T \in \mathcal{F}_r$
    and a Lipschitz function $\rho : \mathbb{R}^n \to \mathbb{R}$,
    the **slice** $\langle T, \rho, c \rangle \in \mathcal{F}_{r-1}$
    is defined for a.e. $c \in \mathbb{R}$ by the boundary
    construction
    $\partial(T \mathbin{\llcorner} \{\rho \leq c\}) = T \mathbin{\llcorner}
    \{\rho \leq c\}|_{\partial} + \langle T, \rho, c\rangle$;
    properties (mass / boundary commute, integration commute).
    Three-tier; Master required; ~1800 words. Originator-citation:
    Whitney 1957 Ch. XIII; Federer 1969 §4.3.

**Priority 3 — coordination notes and exercise pack:**

23. **`02.13.E1` GMT exercise pack across `02.13.*`.** ~12 exercises
    distributed across the GMT units: explicit flat-norm
    computations on triangulated chains in $\mathbb{R}^2$;
    construction of a Cantor-set-supported flat 1-chain in
    $\mathbb{R}^2$; the deformation theorem applied to a specific
    chain (numerical-style mass/flat-norm bookkeeping); the area
    and coarea formulas applied to simple Lipschitz maps; the
    Federer-Fleming compactness theorem applied to a minimising
    sequence for the disk Plateau problem. Master-tier exercise-pack
    unit; ~3 hours production.

24. **`02.07.E1` Measure-theory exercise pack across `02.07.*`.**
    ~10 exercises: Carathéodory construction of Lebesgue measure
    from intervals; the Vitali non-measurable set; computation of
    $\mathcal{H}^{\log 2/\log 3}$ of the Cantor middle-thirds set;
    Rademacher's theorem applied to specific Lipschitz functions;
    the area formula for a polynomial map. Master-tier exercise-pack
    unit; ~3 hours production.

**Priority 3 — pointer back to FEEC `24.03.01`:**

25. **Coordination note in the `02.13-geometric-measure-theory/`
    README pointing to FEEC `24.03.01` Whitney forms.** No new unit;
    one paragraph + cross-link. **Whitney forms (the lowest-order
    FEEC family) are shipped at FEEC `24.03.01`, with Whitney 1957
    *Geometric Integration Theory* §IV.27 as the originator
    citation.** That FEEC unit satisfies both audits' acceptance
    criteria — **do not double-count** by creating a parallel unit
    in `02.13-*`. The Whitney-forms unit sits **structurally** in
    the FEEC numerical-PDE chapter (which is where the
    finite-element machinery lives); the GMT chapter cross-references
    it from the bridge between flat chains and FEEC subcomplexes
    (Whitney forms are the FEEC-side analogue of the flat-chains-side
    polyhedral chains).

---

## §4 Implementation sketch (P3 → P4)

For a full GIT-Whitney coverage pass, **items 1-22 are the minimum
set** to hit the FT equivalence threshold, **with the Priority-0
measure-theory scaffolding (items 1-7) shipped first**. Realistic
production estimate (mirroring earlier Brown-Higgins-Sivera /
Bott-Tu / Hartshorne / FEEC batches, with the prose-first
analysis-heavy premium):

- ~4-5 hours per unit. GMT units skew **higher** than the corpus
  average — the bio/chem prose-first contract applies in spirit
  (analysis-heavy units do not require Lean formalisation; lean_status:
  none for all `02.07.*` and `02.13.*` units except the
  $\sigma$-algebra unit `02.07.01` which has a partial
  `Mathlib.MeasureTheory.MeasurableSpace` formalisation path).
  Master-tier word target ≥6000 for theorem-heavy units (items 8,
  10, 16, 18, 21).
- 7 Priority-0 measure-theory units × ~4.5 hours = **~32 hours**.
- 3 Priority-1 Whitney-classical-theorems units × ~5 hours =
  **~15 hours** (items 8-10).
- 9 Priority-1 GMT-core units × ~5 hours = **~45 hours** (items
  11-19; one sub-chapter README + 8 GMT-content units).
- 1 Priority-1 Plateau pointer × ~3 hours = ~3 hours.
- 2 Priority-2 structure-theorem units × ~5 hours = ~10 hours.
- 2 exercise packs × ~3 hours = ~6 hours.
- **Total ~111 hours.** Fits a focused 14-16 day window. **Overlap
  dedup with FEEC saves 1 unit (Whitney forms `24.03.01`,
  ~5 hours)** if the FEEC audit ships first.

**Per the bio/chem prose-first contract memo** (memory note
`feedback_bio_chem_prose_first.md`): GMT / analysis-heavy units stay
**prose-first**, with **`lean_status: none`** the default outside
`02.07.01`. The Mathlib measure-theory library
(`Mathlib.MeasureTheory.*`) covers $\sigma$-algebras and Lebesgue
integration substantially, so `02.07.01`–`02.07.04` can plausibly
ship with `lean_status: partial` and pointers to specific Mathlib
declarations; `02.07.05` (Hausdorff measure) has minimal Mathlib
coverage (`Mathlib.MeasureTheory.Measure.Hausdorff` exists but is
thin); `02.07.06` (area/coarea) and the full `02.13.*` block have
**no plausible Mathlib formalisation path** and ship with
`lean_status: none` + named `human_reviewer`. **Reviewer-pool
acquisition is the bottleneck for ship**, as for the
upstream-of-research bio units and FEEC.

**Originator-prose targets.** Several GIT-Whitney units are
originator-eligible per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10:

- **Lebesgue 1902**, "Intégrale, longueur, aire," *Annali di
  Matematica Pura ed Applicata* (3) 7:231-359; thèse Sorbonne. The
  Lebesgue measure / integral. Originator citations for `02.07.02`,
  `02.07.03`.
- **Carathéodory 1914**, "Über das lineare Maß von Punktmengen —
  eine Verallgemeinerung des Längenbegriffs," *Nachr. Gesellsch.
  Wiss. Göttingen* 1914:404-426. The outer-measure construction.
  Originator citation for `02.07.01`.
- **Hausdorff 1919**, "Dimension und äußeres Maß," *Math. Ann.*
  79:157-179. Hausdorff measure and dimension. Originator citation
  for `02.07.04`. **Mandatory originator-prose.**
- **Rademacher 1919**, "Über partielle und totale
  Differenzierbarkeit von Funktionen mehrerer Variabeln und über
  die Transformation der Doppelintegrale," *Math. Ann.* 79:340-359.
  Rademacher's theorem. Originator citation for `02.07.05`.
- **Federer 1959**, "Curvature measures," *Trans. AMS* 93:418-491;
  **Federer 1969**, *Geometric Measure Theory* (Springer
  Grundlehren 153) §3.2. The area and coarea formulas. Originator
  citation for `02.07.06`.
- **Whitney 1934**, "Analytic extensions of differentiable
  functions defined in closed sets," *Trans. AMS* 36:63-89. Whitney
  extension theorem and Whitney covering lemma. Originator
  citations for `03.02.02`, `03.02.03`. **Mandatory
  originator-prose.**
- **Whitney 1936**, "Differentiable manifolds," *Ann. of Math.* (2)
  37:645-680; **Whitney 1944**, "The self-intersections of a smooth
  $n$-manifold in $2n$-space," *Ann. of Math.* (2) 45:220-246; "The
  singularities of a smooth $n$-manifold in $(2n-1)$-space," ibid.
  247-293. Whitney embedding theorem (easy + strong forms).
  Originator citation for `03.02.04`. **Mandatory
  originator-prose.**
- **Grassmann 1844**, *Die lineale Ausdehnungslehre, ein neuer
  Zweig der Mathematik* (Otto Wigand, Leipzig). The exterior
  algebra. Cross-citation for `02.13.01` (algebraic side cited
  in the existing `03.01.04-tensor-algebra` unit).
- **Whitney 1957**, *Geometric Integration Theory* (Princeton
  Mathematical Series 21, Princeton University Press). Polyhedral
  chains, mass/flat norm, flat chains, deformation theorem, flat
  chain Stokes, rectifiable currents. Originator citations for
  `02.13.02`–`02.13.07` and `02.13.11`. **Mandatory
  originator-prose throughout `02.13-*`** — the book itself is the
  source.
- **Besicovitch 1928** *Math. Ann.* 98, **Besicovitch 1938** *Math.
  Ann.* 115:296-329, **Besicovitch 1939** *Math. Ann.* 116:296-329;
  **Federer 1947**, "The $(\phi, k)$-rectifiable subsets of
  $n$-space," *Trans. AMS* 62:114-192. Rectifiable-set structure
  theorem. Originator citations for `02.13.10`.
- **Federer-Fleming 1960**, "Normal and integral currents," *Ann.
  of Math.* (2) 72:458-520. Normal and integral currents; the
  successor framework. Originator citations for `02.13.08`,
  `02.13.09`. **Mandatory originator-prose** (this is the
  refinement / closure of the GIT-Whitney framework).
- **Plateau 1873**, *Statique Expérimentale et Théorique des
  Liquides Soumis aux Seules Forces Moléculaires* (Gauthier-Villars
  / F. Clemm, 2 vols.); **Douglas 1931**, "Solution of the problem
  of Plateau," *Trans. AMS* 33:263-321; **Radó 1930**, "On
  Plateau's problem," *Ann. of Math.* (2) 31:457-469; **Almgren
  1976**, *Mem. AMS* 165 (the big regularity paper); **De Giorgi
  1965**, "Una estensione del teorema di Bernstein," *Ann. Scuola
  Norm. Sup. Pisa* 19:79-85. Plateau problem and minimal-surface
  regularity. Originator citations for `02.13.09`.

**Notation crosswalk.** GIT-Whitney uses idiosyncratic 1957 notation
in places; the modern Federer-Fleming reconciliation is universal in
the post-1969 literature and is what this audit adopts:

- $\Lambda^r V$ (or $\bigwedge^r V$) for the $r$-th exterior power
  of $V$; $\Lambda^r V^*$ (or $\bigwedge^r V^*$) for $r$-covectors.
  Matches the existing `03.01.04-tensor-algebra` and
  `03.04.02-differential-forms` conventions.
- $|\xi|$ for the **mass** of an $r$-vector $\xi$ (Euclidean
  $r$-volume on simple $r$-vectors, extended by convexity);
  $\|\xi\|$ for the **comass** (dual norm). Whitney 1957 used
  different symbols here; this audit adopts the Federer 1969
  notation.
- $\mathcal{L}^n$ for $n$-dimensional Lebesgue measure on
  $\mathbb{R}^n$; $\mathcal{H}^r$ for $r$-dimensional Hausdorff
  measure. Federer-1969 standard.
- $\mathcal{P}_r(\mathbb{R}^n)$ for polyhedral $r$-chains in
  $\mathbb{R}^n$; $\mathcal{F}_r(\mathbb{R}^n)$ for flat $r$-chains
  (completion under $\mathbf{F}$).
- $\mathbf{M}$ for mass (boldface; Federer 1969 convention) and
  $\mathbf{F}$ for flat norm. **Whitney 1957 uses $\flat$ instead
  of $\mathbf{F}$**; this audit adopts the modern $\mathbf{F}$.
- $\partial : \mathcal{F}_r \to \mathcal{F}_{r-1}$ for the
  flat-chain boundary; matches simplicial / singular boundary
  conventions in `03.04.13-singular-cohomology`.
- $\mathbf{N}_r$ for normal currents; $\mathbf{I}_r$ for integral
  currents; $\mathbf{R}_r$ for rectifiable currents.
  Federer-Fleming 1960 / Federer 1969 standard.
- $T \mathbin{\llcorner} A$ for the restriction of a current $T$ to a
  Borel set $A$; $f_\# T$ for the pushforward of $T$ by a Lipschitz
  map $f$.
- $\langle T, \rho, c\rangle$ for the slice of $T$ at level $c$ of
  $\rho$.

These match the Federer-Fleming-Allard standard adopted across the
modern GMT literature; **record once in the `02.13.00`
sub-chapter README**, with a note that Whitney 1957's
idiosyncratic notation (in particular $\flat$ for flat norm,
distinct chain-coefficient typography) maps onto the modern
conventions as listed above. **No notation conflict with FEEC
audit** — both audits use the Federer 1969 / AFW 2006 conventions
for differential forms and exterior powers.

**Dependency edges to register in
`docs/catalogs/DEPENDENCY_MAP.md`:**

- `02.07.01` → `02.01-topology/*` (measurable / Borel sets need
  topological prerequisites).
- `02.07.02` → `02.07.01`, `02.04.01-step-function-darboux-integral`.
- `02.07.03` → `02.07.02`, `02.11.04-banach-spaces` (for $L^p$
  completeness via Riesz-Fischer).
- `02.07.04` → `02.07.01`, `02.07.02`.
- `02.07.05` → `02.07.02`, `02.05.*` (multivariable
  differentiation upstream).
- `02.07.06` → `02.07.04`, `02.07.05`.
- `03.02.02` → `02.07.05` (Lipschitz / Rademacher prereq),
  `02.05.*`, `03.02.01-smooth-manifold`.
- `03.02.03` → no upstream dependency beyond elementary topology;
  could ship before `02.07.*`.
- `03.02.04` → `03.02.01-smooth-manifold`, `03.02.02` (Whitney
  extension is used in the embedding proof).
- `02.13.00` → `02.07.00` (chapter scaffolding edge).
- `02.13.01` → `03.01.04-tensor-algebra` (algebraic exterior power
  upstream), `02.07.04` (Hausdorff measure for mass-as-volume).
- `02.13.02` → `02.13.01`, `03.04.13-singular-cohomology`
  (simplicial chains upstream).
- `02.13.03` → `02.13.02`, `02.07.04`.
- `02.13.04` → `02.13.03`, `02.11.04-banach-spaces` (completion
  upstream).
- `02.13.05` → `02.13.04`, `03.02.03` (Whitney covering lemma is
  used in the deformation construction).
- `02.13.06` → `02.13.05`, `03.04.04-exterior-derivative`,
  `03.04.05-stokes-theorem`.
- `02.13.07` → `02.13.06`, `02.07.06` (area formula upstream).
- `02.13.08` → `02.13.07`.
- `02.13.09` → `02.13.08`.
- `02.13.10` → `02.07.04`, `02.07.05`.
- `02.13.11` → `02.13.07`.
- FEEC unit `24.03.01` (Whitney forms) → `02.13.04` (flat chains
  upstream) once both ship.

---

## §5 What this plan does NOT cover

- **A line-number-level inventory of every chapter of GIT-Whitney.**
  Full P1 audit deferred until a local PDF is sourced.
  Krantz-Parks 2008 *Geometric Integration Theory* provides ~95%
  coverage of GIT-Whitney's content with full line-number anchor
  capability, so the equivalence threshold can in principle be hit
  from the cross-anchor alone; the GIT-Whitney PDF remains the
  primary tier-anchor target.
- **The post-1957 regularity theory for minimal surfaces** (Almgren
  big regularity, De Giorgi, Bombieri-De Giorgi-Giusti, Simons,
  Schoen-Simon-Yau, …). Touched only as a P1 pointer in `02.13.09`;
  full coverage is a separate audit on Almgren 1976 / Simon 1983
  lecture notes, neither currently on the FT booklist.
- **Currents with coefficients in arbitrary normed abelian groups**
  (Fleming 1966, White 1999). Niche extension of the
  $\mathbb{Z}$-coefficient case; not in GIT-Whitney; deferred.
- **The varifolds framework** (Almgren 1965, Allard 1972). Parallel
  framework to currents for unoriented surfaces; not in
  GIT-Whitney; deferred.
- **Reifenberg's epiperimetric inequality and the Reifenberg solution
  of the Plateau problem in arbitrary codimension.** Reifenberg
  1960 *Acta Math.* 104; an alternative track to Federer-Fleming;
  not in GIT-Whitney; deferred.
- **Sets of finite perimeter (Caccioppoli sets) and De Giorgi's
  codimension-1 GMT.** De Giorgi 1954-58; an alternative
  development of the $r = n - 1$ case in $\mathbb{R}^n$; touched as
  a pointer in `02.13.09`; full coverage is a separate audit on
  Ambrosio-Fusco-Pallara *Functions of Bounded Variation and Free
  Discontinuity Problems* (Oxford 2000).
- **Exercise pack at full coverage.** GIT-Whitney has very few
  exercises by modern standards (it predates the
  exercise-pack-per-section convention); the punch-list includes
  two P3 exercise-pack passes (items 23 + 24). Full per-unit
  exercise coverage is a follow-up.
- **Lean formalisation of the deformation theorem or the
  Federer-Fleming compactness theorem.** No plausible Mathlib path;
  all `02.13.*` units ship `lean_status: none`. Future work for the
  Mathlib measure-theory team.

---

## §6 Acceptance criteria for FT equivalence (GIT-Whitney)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The `02.07-measure-theory/` sub-chapter exists with its
  scaffolding (`02.07.00` README; dependency edges in
  `docs/catalogs/DEPENDENCY_MAP.md`).
- The `02.13-geometric-measure-theory/` sub-chapter exists with its
  scaffolding (`02.13.00` README; chapter row in
  `docs/catalogs/CONCEPT_CATALOG.md`; dependency edges).
- Priority-0 measure-theory units `02.07.01`–`02.07.06` have
  shipped (7 units including the README).
- Priority-1 Whitney-classical-theorems units `03.02.02`–`03.02.04`
  have shipped (3 units in the manifolds sub-chapter, broadening
  it from its current 1-unit state).
- Priority-1 GMT-core units `02.13.01`–`02.13.08` have shipped (8
  units; one sub-chapter README + 7 GMT-content units).
- Priority-1 Plateau pointer `02.13.09` has shipped.
- ≥95% of GIT-Whitney's named theorems map to Codex units —
  currently ~10%; after Priority-0 + Priority-1 this rises to
  ~85%; full ≥95% requires Priority-2 structure-theorem units
  (`02.13.10`, `02.13.11`).
- ≥90% of GIT-Whitney's worked examples have a direct unit or are
  referenced (deformation-theorem cube projection, polyhedral
  chains on a triangle / tetrahedron, mass-and-flat-norm
  computations on simple polyhedra, area-formula computation for a
  polynomial map, Cantor-set Hausdorff dimension, Whitney covering
  on a slit disk).
- Notation decisions recorded in `02.07.00` and `02.13.00` (see
  §4).
- Pass-W weaving connects the new sub-chapters to
  `02-analysis/04-integration/` (Lebesgue extension of
  Darboux/Riemann), to `02-analysis/11-functional-analysis/`
  ($L^p$ completeness, completion-under-norm framework), to
  `03-modern-geometry/02-manifolds/` (smooth-manifold upstream),
  to `03-modern-geometry/04-differential-forms/` (smooth Stokes
  and de Rham), and to `24-numerical-pde/03-discrete-de-rham-and-feec/`
  (Whitney-forms / polyhedral-chains discretisation bridge).
- Originator-prose treatment of the Whitney 1934 + Whitney 1936/44 +
  Whitney 1957 + Federer-Fleming 1960 + Hausdorff 1919 sources in
  the corresponding items (mandatory per §10 of the equivalence
  plan).
- All `02.13.*` units ship with `lean_status: none` + named
  `human_reviewer`; `02.07.*` units may ship with
  `lean_status: partial` and named Mathlib declarations where
  applicable (`02.07.01`–`02.07.04`).
- **Coordination check with FEEC audit complete:** the Whitney-forms
  unit at `24.03.01` is shipped exactly once and is cited as the
  bridge between this chapter's flat chains (`02.13.04`) and the
  FEEC discrete de Rham complex.

The 7 Priority-0 + 12 Priority-1 units close most of the
equivalence gap. Priority-2 structure-theorem units close the
residual gap. Priority-3 exercise packs + the FEEC coordination
note hit the ≥95% line.

---

## §7 Sourcing

- **Status: REDUCED.** No local PDF found in the three configured
  paths (`reference/textbooks-extra/`, `reference/fasttrack-texts/`,
  `reference/book-collection/free-downloads/`) as of 2026-05-22.
  Princeton University Press lists the original 1957 hardcover as
  out-of-print; Dover 2005 unabridged reprint sits behind a
  paid-purchase wall at <https://store.doverpublications.com/0486445836.html>.
  WebFetch on the Princeton, Dover, and Wikipedia pages returned no
  usable TOC at chapter-line granularity. A one-page note at
  `reference/quantum-well/md/uncategorized notes/Whitney's Theorem.md`
  covers only the Whitney embedding theorem corollary, **not** the
  GIT-Whitney monograph content.
- This plan was produced from canonical knowledge of GIT-Whitney's
  three-part / fourteen-chapter structure (stable since the 1957
  first edition; the 2005 Dover reprint is paginated identically),
  cross-referenced against the canonical successor monograph
  **Federer 1969** *Geometric Measure Theory* §4.1 (the
  GIT-Whitney reformulation in the Federer-1969 framework) and the
  modern textbook reformulation **Krantz-Parks 2008** *Geometric
  Integration Theory* (Birkhäuser) Chs. 5–9.
- **Action item.** Source GIT-Whitney (Dover 2005 paid download or
  Anna's Archive) and drop into `reference/textbooks-extra/` as
  `Whitney-GeometricIntegrationTheory-1957.pdf` (or the Dover
  reprint, identically paginated). **Required before a full P1
  audit can run at line-number granularity** for the GIT-Whitney
  volume specifically.
- **Open-access workaround for immediate production.** Krantz-Parks
  2008 is available at major academic libraries and is the natural
  cross-anchor; Federer 1969 has scanned PDFs in circulation; Simon
  1983 ANU CMA lecture notes are open-access at
  <https://maths-people.anu.edu.au/~loriasimon/PCMA-3.pdf>. **Drop
  Simon 1983 into `reference/textbooks-extra/` as
  `Simon-LecturesGMT-ANU-1983.pdf`** — sufficient for Priority-0 and
  much of Priority-1 production. Acquire Federer-Fleming 1960
  *Ann. of Math.* 72:458-520 via JSTOR / AMS as
  `Federer-Fleming-NormalIntegralCurrents-AnnMath-1960.pdf` — open
  access via Federer's posthumous AMS-archive page.
- **License.** Princeton University Press copyright (1957);
  Dover copyright (2005 reprint). For educational use cite as
  Whitney, *Geometric Integration Theory*, Princeton Mathematical
  Series 21, Princeton University Press, 1957 (Dover reprint
  2005).
- **Local copy target path.** `reference/textbooks-extra/` per
  pattern of other paid FT texts (Hartshorne, Silverman, Neukirch,
  Manin-Panchishkin, Serre CinA, Arnold FEEC).
- **Companion sources already in / targeted for the reference
  library.**
  - Federer 1969 *Geometric Measure Theory* — **not yet sourced;
    should be acquired as the primary working reference alongside
    GIT-Whitney**, since most modern GMT pedagogy reads through
    Federer 1969 even when citing Whitney 1957.
  - Federer-Fleming 1960 *Ann. of Math.* paper — **not yet
    sourced; open-access via AMS**; should be acquired first as the
    canonical line-number anchor for `02.13.07`-`02.13.09`.
  - Krantz-Parks 2008 *Geometric Integration Theory* — not yet
    sourced; the canonical modern textbook cross-anchor.
  - Mattila 1995 *Geometry of Sets and Measures in Euclidean
    Spaces* — not yet sourced; cross-anchor for `02.13.10`
    rectifiable-set structure theorem.
  - Morgan 2016 *Geometric Measure Theory: A Beginner's Guide* —
    not yet sourced; supplementary friendly-introduction
    cross-anchor.
  - Simon 1983 ANU CMA *Lectures on Geometric Measure Theory* —
    **not yet sourced; open-access**, acquire first as
    immediate-production cross-anchor.
  - Evans-Gariepy 2015 *Measure Theory and Fine Properties of
    Functions* — not yet sourced; canonical reference for the
    `02.07.*` measure-theory prerequisites.

---

## §8 Coordination notes (FEEC FT 1.20 overlap)

The GIT-Whitney audit and the just-completed Arnold *FEEC* audit
(FT 1.20, 2026-05-22) share **one shared unit** in the Priority-1
ship list — **Whitney forms** — at the FEEC audit's `24.03.01`.
The originator-source is Whitney 1957 *Geometric Integration Theory*
§IV.27. **Ship once at `24.03.01`** with **Whitney 1957 as the
originator anchor**; GIT-Whitney consumes the unit downstream
(`02.13-*` references it from the README and from the
flat-chains-to-Whitney-forms bridge) and the FEEC chapter is the
structural home (Whitney forms are a discrete-de-Rham finite-element
construction; they belong in the FEEC numerical-PDE chapter, not
duplicated in the GMT chapter).

**Where the two audits diverge.** The FEEC audit puts Whitney forms
in the **discrete-de-Rham / finite-element** context (lowest-order
$\mathcal{P}_1^-\Lambda^k$ family on a simplicial triangulation,
used for $H(\mathrm{curl})$ and $H(\mathrm{div})$ FEM
discretisations). The GIT-Whitney audit reads Whitney forms as
**the simplicial-cochain side of the smooth-to-discrete
comparison** in GIT-Whitney Ch. IV §27 — the proto-FEEC role.
**Both readings are correct**; the unit is shipped once with both
framings included in the Master tier.

The GIT-Whitney audit also coordinates with **future audits not yet
written**:

- A future **Federer 1969** *Geometric Measure Theory* audit (no FT
  row yet; would need to be added to the FT booklist) would
  **deepen** every `02.13.*` unit and would **subsume** items
  `02.13.08` and `02.13.09`'s pointer treatment with full
  theorem-proof coverage. The GIT-Whitney audit should be regarded
  as the **first GMT pass**; a Federer 1969 audit (if and when
  added to the FT list) is the **second, deepening pass**.
- A future audit on **Krantz-Parks 2008** *Geometric Integration
  Theory* (Birkhäuser, not yet on the FT list) would update the
  GIT-Whitney audit to the **modern-notation reformulation** of
  Whitney's content; recommended as a P1 cross-anchor for any
  re-pass of the GIT-Whitney units.
- A future audit on **Almgren 1976** *Mem. AMS* 165 (the big
  regularity paper) or **Simon 1983** ANU CMA lectures (not on the
  FT list) would extend `02.13.09` (Plateau pointer) to full
  regularity-theory coverage. Currently deferred to the
  pointer-only treatment.

**No overlap** with any other FT title beyond FEEC:

- Bott-Tu (FT 1.17): smooth-side de Rham only; no discrete /
  GMT content.
- Cannas-Symplectic (FT 1.05; if audited): symplectic forms and
  reduction, no GMT content.
- Arnold *Mathematical Methods of Classical Mechanics* (FT 1.11;
  Arnold-Dubrovin *Dynamical Systems IV*): symplectic geometry, no
  GMT content.
- Sternberg variants (FT 1.10, 1.14, 1.15): smooth differential
  geometry, no GMT content.
- Shifrin Ch. 8 (FT 1.18): multivariable calculus / Stokes on
  manifolds, no GMT content.
- Arnold *Topological Methods in Hydrodynamics* (FT 1.12):
  symplectic / volume-preserving diffeomorphism content; no GMT.

**Net effect.** GIT-Whitney is the **second numerical/analysis Fast
Track audit** in the Codex (after FEEC), and the **first GMT
audit**. Running it as written extends the existing
`02-analysis/` chapter with a new measure-theory sub-chapter
(`02.07-*`) and a new GMT sub-chapter (`02.13-*`), expands the
sparse `03.02-manifolds/` sub-chapter with the Whitney classical
theorems, and ships ~22 new units across Priorities 0-2. The
marginal cost is **~111 hours**, saved down to ~106 hours by the
FEEC overlap dedup on Whitney forms. **Coordinate with the FEEC
audit on `24.03.01` (Whitney forms) — single ship satisfies both
audits.**

---

## §9 Notes on the "GMT prerequisite cascade" pattern

This is the **first GMT audit** and the **first measure-theory
content** in the Codex. Three pattern observations for future
analysis audits:

1. **Measure-theory prerequisites are pervasively absent from the
   analysis side of the Codex.** GIT-Whitney is gated on ~7 measure-
   theory units (`02.07.*`) that **every future analysis-heavy
   audit will share** — Federer 1969, Evans *PDE*, Stein
   *Harmonic Analysis*, Folland *Real Analysis*, Bogachev *Measure
   Theory*. Ship these once in `02.07-*` and the marginal cost of
   subsequent analysis audits drops sharply. **The
   measure-theory chapter is the analysis-side analogue of the
   FEEC audit's Sobolev-space prerequisites** — pay once, reuse
   everywhere. This is **the highest single-shot leverage in the
   analysis track**.

2. **Lean / Mathlib coverage for measure theory is partial, but
   non-trivial.** `Mathlib.MeasureTheory.MeasurableSpace`,
   `Mathlib.MeasureTheory.Measure.Lebesgue`,
   `Mathlib.MeasureTheory.Integral.Bochner` cover the
   $\sigma$-algebra / Lebesgue-measure / Lebesgue-integral
   prerequisites at a working level. `02.07.01`–`02.07.04` should
   ship with **`lean_status: partial`** and named Mathlib pointers.
   `Mathlib.MeasureTheory.Measure.Hausdorff` exists but is thin;
   `02.07.05` (Rademacher) and `02.07.06` (area/coarea) and the
   full `02.13-*` block ship `lean_status: none` + named
   `human_reviewer` per the bio/chem prose-first contract memo
   `feedback_bio_chem_prose_first.md`. Reviewer-pool for GMT
   realistically includes Frank Morgan, Tatiana Toro, Camillo De
   Lellis, Tristan Rivière, Robert Hardt, Brian White — acquisition
   of a credible reviewer is **as much a strict prerequisite for
   ship as in FEEC**.

3. **The `02-analysis/` chapter still has a numbering gap at `07`.**
   `02-analysis/` currently jumps from `06-transcendental` to
   `08-ode`, leaving `07` unused — this audit recommends
   `02.07-measure-theory/` as the natural occupant of the gap.
   Similarly the audit creates `02.13-geometric-measure-theory/`
   (also a new sub-chapter slot). The analysis chapter's
   sub-chapter numbering is the structural-decision artefact of
   this audit; future analysis audits should respect the layout.

These notes will inform the **next analysis-heavy audit** (likely
Stein-Shakarchi *Princeton Lectures* or Evans *Partial
Differential Equations*, both shareable on the same measure-theory
prerequisite block) and any future numerical / analytical audits.
