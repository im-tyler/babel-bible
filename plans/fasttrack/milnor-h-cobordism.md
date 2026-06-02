# Milnor — *Lectures on the h-Cobordism Theorem* (Fast Track 3.07) — Audit + Gap Plan

**Book:** John Milnor, *Lectures on the h-Cobordism Theorem*. Notes by
L. Siebenmann and J. Sondow. Princeton Mathematical Notes, Princeton
University Press, 1965. v + 116 pp. The standard short monograph proving
Smale's h-cobordism theorem by Morse theory on cobordisms. Free scan
hosted on the Ranicki archive at
<https://webhomes.maths.ed.ac.uk/~v1ranick/papers/hcobord.pdf>.

**Fast Track entry:** 3.07 (the canonical small monograph deriving the
generalised Poincaré conjecture in dimensions $\ge 5$ from handle theory
— sits in the differential-topology cluster between Milnor *Morse Theory*
(3.03) and the Floer / surgery chapter, and downstream of
Milnor-Stasheff characteristic classes (3.08)).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units so that *Lectures on the h-Cobordism Theorem* (LHC hereafter)
is covered to the equivalence threshold (≥95% effective coverage of
theorems, examples, exercises, notation, sequencing, intuition,
applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 / §9).

This is **not** a full P1 audit. LHC is short (~115 pp.), tightly
linear, and almost theorem-for-theorem identical to its TOC, so the TOC
plus the existing Codex units that *cite* the h-cobordism theorem by name
(`03.06.17` exotic 7-spheres, `03.02.01` smooth manifold) determine the
audit surface; the gap is the punch-list. This plan **coordinates with the
Milnor *Morse Theory* (3.03) audit** (`plans/fasttrack/milnor-morse-theory.md`),
which reserves the Morse-core slots `03.02.02`–`03.02.07` and a path-space
slot in `03.12-homotopy/`. LHC *consumes* that Morse machinery and adds
the cobordism-specific layer on top, so the LHC punch-list slots **above**
the reserved Morse block to avoid collision.

---

## §1 What LHC is for

LHC is the canonical short proof of the **h-cobordism theorem** of Smale
(1962): *if $(W; V_0, V_1)$ is a compact smooth cobordism of dimension
$n \ge 6$ that is an h-cobordism — meaning both inclusions $V_0
\hookrightarrow W$ and $V_1 \hookrightarrow W$ are homotopy equivalences
— and $W$, $V_0$, $V_1$ are simply connected, then $W$ is diffeomorphic
to the product $V_0 \times [0, 1]$.* The immediate corollary is the
**generalised Poincaré conjecture in dimensions $\ge 5$**: a smooth
homotopy $n$-sphere ($n \ge 5$) is homeomorphic (indeed, PL-homeomorphic)
to $S^n$. This is the theorem that opened high-dimensional differential
topology, and LHC is the book that made its proof teachable.

Milnor's strategy is to convert the topology of $W$ into the
combinatorics of a **handle decomposition** controlled by a Morse
function, then to algebraically cancel handles until none remain. The
distinctive content, organised by the eight sections of the book:

1. **§1 — Cobordism and the Morse function.** A **cobordism**
   $(W; V_0, V_1)$: compact $W$ with $\partial W = V_0 \sqcup V_1$. A
   **Morse function** $f: W \to [0,1]$ with $f^{-1}(0) = V_0$,
   $f^{-1}(1) = V_1$, all critical points non-degenerate and interior;
   existence of such $f$. $W$ is built from $V_0 \times I$ by attaching
   one handle per critical point — Milnor *Morse Theory* Part I (Thm 3.2:
   index-$\lambda$ critical point ⇒ $\lambda$-cell) upgraded from CW-cell
   to smooth **handle attachment**.
2. **§2 — Elementary cobordisms and surgery.** An **elementary cobordism**
   has one critical point; passing it = a **surgery** on the level set
   (remove $S^{\lambda-1} \times D^{n-\lambda}$, glue $D^\lambda \times
   S^{n-\lambda-1}$). The **handle** $D^\lambda \times D^{n-\lambda}$ —
   **core** $D^\lambda \times 0$, **belt sphere** $0 \times
   S^{n-\lambda-1}$, **attaching sphere** $S^{\lambda-1} \times 0$;
   gradient-like vector fields; ascending/descending (left/right-hand)
   spheres of the gradient flow.
3. **§3 — Rearrangement.** Handles with disjoint attaching/belt spheres can
   be **reordered** by index; hence a **self-indexing** Morse function
   (index-$\lambda$ critical points on level $\lambda + 1/2$). Sorts the
   decomposition by index — the combinatorial spine of the proof.
4. **§4 — First cancellation theorem.** A $\lambda$-handle and a
   $(\lambda+1)$-handle whose attaching/belt spheres meet **transversally
   in a single point** cancel (the cobordism across them is a product) —
   the elementary simplification move.
5. **§5 — Strong cancellation theorem.** Upgrades §4 from "geometrically
   one point" to **intersection number $\pm 1$**: the handles cancel after
   a preliminary isotopy. This is where the **Whitney trick** enters — in
   $n \ge 5$, complementary-dimension submanifolds with algebraic
   intersection $0$ isotope apart, and intersection $\pm 1$ reduces to a
   single geometric point, via an embedded Whitney disc whose
   embeddability is what **simple connectivity** buys.
6. **§6 — Cancellation in the middle dimensions.** The handle
   decomposition gives a free **Morse–Smale chain complex** $C_*$ with
   homology $H_*(W, V_0)$; for an h-cobordism this vanishes, so $C_*$ is
   acyclic. Handle trading (the "Smale moves") + the §5 cancellation
   reduce an acyclic complex to nothing under simple connectivity and
   $n \ge 6$, so $W \cong V_0 \times I$. **This is the proof.**
7. **§7 — Elimination of low/high handles.** Trading $0$- and $1$-handles
   (dually the top two indices) by connectivity, normalising to middle
   indices $2, \ldots, n-2$ where §5–§6 apply.
8. **§8 — The h-cobordism theorem; applications.** The theorem assembled.
   Corollaries: the **generalised Poincaré conjecture** ($n \ge 5$); the
   smooth-disc characterisation; Smale's structure-of-manifolds results;
   and the exotic-7-spheres application (h-cobordism is what upgrades the
   cohomological match to "homeomorphic to $S^7$").

Beyond the eight sections, two pieces of context Fast Track wants from
this book:

9. **The s-cobordism refinement (Whitehead torsion).** LHC proves the
   *simply connected* h-cobordism theorem. The non-simply-connected
   version — the **s-cobordism theorem** of Barden–Mazur–Stallings — says
   an h-cobordism with $\pi_1(V_0) \ne 1$ is a product **iff** its
   **Whitehead torsion** $\tau(W, V_0) \in \mathrm{Wh}(\pi_1 V_0)$
   vanishes, the obstruction living in the **Whitehead group**
   $\mathrm{Wh}(\pi) = K_1(\mathbb{Z}\pi)/(\pm \pi)$ — algebraic K-theory
   of the group ring. LHC does not develop torsion (it is simply connected
   throughout), but Fast Track 3.07 sits next to this refinement; Milnor's
   survey *Whitehead torsion* (Bull. AMS 72, 1966) is the canonical entry.
10. **Editorial signature.** Like *Morse Theory*, LHC is Milnor delivering
    a landmark theorem in a tiny book. Every subsequent treatment
    (Kosinski Ch. VI–IX; Ranicki; Lück) is structured around its handle
    calculus, and the book is the canonical prerequisite for **surgery
    theory** (Wall, Browder, Novikov) — the h-cobordism theorem is the
    base case on which the surgery exact sequence is built.

LHC is **not** an introduction to manifolds or to Morse theory. It
assumes Milnor *Morse Theory* Part I (Morse functions, indices, the
$\lambda$-cell attachment), transversality and isotopy (Sard, tubular
neighbourhoods, the isotopy extension theorem), and basic algebraic
topology (homology of pairs, the Hurewicz and Whitehead theorems). It is
the canonical entry point to **handle theory** and to **high-dimensional
differential topology**.

---

## §2 Coverage table (Babel Bible vs LHC)

Cross-referenced against the current Babel Bible corpus
(`find content -name "*.md" | sort`; greps for cobordism / handle /
Whitney-trick / Whitehead-torsion / Morse terms). ✓ = covered at
LHC-equivalent depth, △ = topic present but in a different framing or
only mentioned in passing, ✗ = not covered.

The headline finding: **the h-cobordism theorem is invoked by name in at
least two shipped Codex units but is anchored nowhere.** `03.06.17`
(exotic 7-spheres) uses "Smale's $h$-cobordism theorem 1962" three times
as a load-bearing step (with `[ref: TODO_REF Smale 1962]`), and
`03.02.01` (smooth manifold) cites it in its historical Master section.
Neither has a prerequisite unit that states or proves it. The entire
handle / surgery / Whitney-trick layer is absent, and the Morse-on-a-
cobordism prerequisite (the Milnor *Morse Theory* audit's reserved
`03.02.02`–`03.02.07` block) is itself **unproduced** — so LHC sits on
two stacked gaps.

| LHC topic (§) | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cobordism $(W; V_0, V_1)$ as a category (§1) | `03.06.12-unoriented-bordism-thoms-theorem`; `03.06.13-oriented-bordism-pontryagin-thom` | △ | Bordism is treated **homotopy-theoretically** (Thom spectra, Pontryagin–Thom, $\Omega^{SO}_*$) — the equivalence-relation/ring side. The **geometric cobordism-with-Morse-function** object LHC works with (handles, gradient flow, level sets) is absent. Different framing; no overlap on the handle calculus. |
| Morse function on a cobordism; one handle per critical point (§1) | — (Morse block `03.02.02`–`03.02.07` reserved by the 3.03 audit, **unproduced**) | ✗ | **Gap, and double gap.** Requires the Milnor *Morse Theory* Part I units to exist first. Currently no Morse-function unit anywhere in Codex; `03.02.01` and `03.04.08` only *mention* Morse theory. |
| Handle $D^\lambda \times D^{n-\lambda}$; core, cocore, attaching/belt sphere (§2) | — | ✗ | **Gap (foundational).** The basic object of the whole book. |
| Surgery as passing an elementary cobordism (§2) | `05.12.04-lagrangian-and-legendrian-cobordism` (different); `03.07.25-donaldson-floer-surgery-exact-triangle` (different) | ✗ | **Gap.** Existing "surgery" hits are Lagrangian-cobordism and the Floer surgery exact triangle — neither is Milnor handle-surgery on a level set. |
| Gradient-like vector field; ascending/descending spheres (§2) | partial in `03.04.08-variational-calculus` (gradient-flow remark only) | ✗ | **Gap.** Needed for the geometric handle picture. |
| Rearrangement; self-indexing Morse function (§3) | — | ✗ | **Gap.** The sorting step; no analogue anywhere. |
| First cancellation lemma (geometric single transverse point) (§4) | — | ✗ | **Gap (load-bearing).** |
| **Whitney trick** (isotope to remove algebraically-cancelling intersections; embed the Whitney disc) (§5) | — | ✗ | **Gap (the technical heart).** Not present in any Codex unit; the dimension $\ge 5$ / simple-connectivity hypothesis that the trick needs is exactly what gates the theorem. |
| Strong cancellation via intersection number $\pm 1$ (§5) | — | ✗ | **Gap.** Builds on the Whitney trick. |
| Morse–Smale chain complex of a self-indexing function; $H_*(W, V_0)$ (§6) | △ in `03.12.13-cellular-homology` (CW cellular complex); Floer/Morse-complex remarks in `05.08.02-floer-homology` | △ | The *cellular* chain complex of a CW structure is covered (`03.12.13`); the **handle / Morse–Smale** chain complex with its boundary-map-by-intersection-number is not. The Floer unit references "Morse homology" as an analogy but defines no finite-dim Morse complex. **Depth gap.** |
| Handle cancellation in the middle dimensions; acyclic-complex reduction (§6) | — | ✗ | **Gap (this *is* the proof).** |
| Elimination of low/high handles by connectivity (§7) | — | ✗ | **Gap.** |
| **h-cobordism theorem** statement + proof (§8) | cited unanchored in `03.06.17`, `03.02.01` | ✗ | **Gap (the title theorem).** Referenced by name as a black box in ≥2 shipped units; no anchor unit exists. **Highest priority.** |
| **Generalised Poincaré conjecture $n \ge 5$** (§8) | mentioned in `03.02.01` history; used implicitly in `03.06.17` | ✗ | **Gap.** Immediate corollary; deserves its own statement. |
| Application: exotic 7-spheres are homeomorphic (not diffeomorphic) to $S^7$ (§8) | `03.06.17-combinatorial-pontryagin-exotic-7-spheres` | △ | The exotic-sphere unit **uses** the h-cobordism corollary to get "homeomorphic to $S^7$" but cites it as `TODO_REF Smale 1962`. Once the h-cobordism unit exists, this citation should point in-Codex. The handle-cancellation argument for $\Theta_7$ inverses (Kervaire–Milnor) is also referenced here. |
| **s-cobordism theorem; Whitehead torsion $\tau \in \mathrm{Wh}(\pi_1)$** (refinement, not in LHC proper) | — | ✗ | **Gap.** No Whitehead-group / simple-homotopy / algebraic-$K_1$-of-a-group-ring unit exists anywhere in Codex (verified: no coverage in `03.08-k-theory/`, which is *topological* K-theory only). Pointer-level for LHC, but a genuine corpus hole. |
| Surgery theory as the downstream programme (Wall, Browder) | `03.07.25` (Floer exact triangle, different); surgery exact sequence — | ✗ | Pointer-level. Out of LHC's own scope but the natural successor. |

### Prerequisite / infrastructure check

LHC rests on differential-topology infrastructure Codex covers **only
partially**: transversality/Sard (Sard *named* in `03.02.01`, no
dedicated unit); tubular neighbourhoods / isotopy extension (absent);
Levi-Civita / exponential map / geodesics for the gradient flow (only
bundle-curvature framing in `03.05.09` — the same marginal gap the 3.03
Morse audit flags as its item `03.03.X1`). These are **shared
prerequisites** with the Milnor *Morse Theory* audit and should be
produced **once** for both books.

### Aggregate coverage estimate

- **Theorem layer:** ~5%. Bordism-as-equivalence-relation is covered
  (`03.06.12/13`) but that is a disjoint framing; the handle/surgery/
  Whitney-trick/cancellation theory that LHC actually proves has **zero**
  dedicated coverage. The title theorem is cited but unanchored.
- **Worked-example layer:** ~10%. The exotic-7-spheres example
  (`03.06.17`) is the one place an h-cobordism corollary is actually
  used; the canonical LHC examples (cancelling a $0$/$1$-handle pair on a
  trivial cobordism, the Whitney-disc picture, $W = S^{n-1} \times I$)
  are absent.
- **Notation layer:** ~0%. LHC's handle notation ($D^\lambda \times
  D^{n-\lambda}$, attaching/belt spheres, $\langle \cdot, \cdot \rangle$
  intersection numbers, self-indexing levels) is nowhere recorded.
- **Sequencing layer:** ~15%. The DAG has the algebraic-topology
  prerequisites (homology of pairs, Hurewicz, Whitehead theorem,
  cellular homology) but no Morse → handle → cobordism chain.
- **Intuition layer:** ~10%. The "build a manifold by attaching handles"
  picture appears informally in `03.06.17` and `03.02.01` history only.
- **Application layer:** ~20%. Exotic spheres (`03.06.17`) and the
  4-manifold signature story (`03.06.19`) gesture at the high-dim
  topology programme; the h-cobordism theorem's own applications
  (generalised Poincaré, disc characterisation, Smale's structure
  theorems) are not stated.

**Overall existing coverage: ~5–10%.** The h-cobordism theorem is one of
the most-*cited*-yet-*unanchored* results in the current corpus.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

Slotting convention. The Milnor *Morse Theory* (3.03) audit reserves
`03.02.02`–`03.02.07` (Morse-core) and a path-space unit in
`03.12-homotopy/`; those are LHC prerequisites and **must be produced by
that audit first or jointly**. To avoid collision, the LHC-specific
handle/cobordism units slot at **`03.02.20`+** (well clear of the
reserved Morse block, same `02-manifolds` chapter where the h-cobordism
theorem belongs as a differential-topology result), the Whitney-trick
unit shares that block, and the s-cobordism / Whitehead-torsion
refinement opens a small algebraic-$K_1$ pointer in the K-theory chapter
at `03.08.20`. IDs verified non-colliding against
`find content -name "*.md"`.

### Priority 1 — the handle calculus and the title theorem (LHC §§1–8 core)

1. **`03.02.20` Handles, surgery, and the cobordism category.** [NEW]
   LHC §§1–2 anchor. Three-tier; ~2200 words. Beginner: building a
   surface/solid by gluing handles (the height-function-on-a-torus
   picture upgraded to attaching $1$- and $2$-handles). Intermediate:
   cobordism $(W; V_0, V_1)$, Morse function $f: W \to [0,1]$ with
   boundary level sets, one handle $D^\lambda \times D^{n-\lambda}$ per
   index-$\lambda$ critical point; core, cocore, attaching sphere
   $S^{\lambda-1}$, belt sphere $S^{n-\lambda-1}$; surgery on a level set
   as the trace of an elementary cobordism. Master: gradient-like vector
   fields, ascending/descending spheres, existence of Morse functions on
   a cobordism (relative to the boundary). **Prereq: the Morse-core block
   `03.02.02`–`03.02.05` (3.03 audit). Foundational — unblocks the rest.**

2. **`03.02.21` Rearrangement and self-indexing Morse functions.** [NEW]
   LHC §3 anchor. Three-tier; ~1800 words. Independence of attaching/belt
   spheres ⇒ handles can be reordered by index; existence of a
   self-indexing Morse function (index-$\lambda$ critical points on level
   $\lambda + 1/2$). Master: the handle-decomposition-as-filtration and
   the induced Morse–Smale free chain complex computing $H_*(W, V_0)$,
   with the boundary map given by intersection numbers of ascending and
   descending spheres. **Prereq: `03.02.20`; cross-link to
   `03.12.13-cellular-homology`.**

3. **`03.02.22` The Whitney trick and handle cancellation.** [NEW]
   LHC §§4–5 anchor; **Whitney 1944** (*Ann. of Math.* 45,
   self-intersections) originator citation. Three-tier; ~2500 words (the
   longest in the punch-list — the technical heart). Beginner: why two
   curves on a surface that "should" cancel sometimes can't, and why an
   extra dimension fixes it. Intermediate: first cancellation lemma
   (single transverse intersection ⇒ handles cancel). Master: the Whitney
   trick — in $n \ge 5$, complementary-dimension submanifolds with
   algebraic intersection $0$ are isotoped apart via an embedded **Whitney
   disc**, whose embeddability is exactly what **simple connectivity**
   buys; hence the strong cancellation theorem at intersection number
   $\pm 1$. **Prereq: `03.02.20`, a transversality unit (item 7).**

4. **`03.02.23` The h-cobordism theorem.** [NEW]
   LHC §§6–8 anchor; **Smale 1962** (*Ann. of Math.* 74, "On the
   structure of manifolds"; *Amer. J. Math.* 84) originator citation.
   Three-tier; ~2200 words. Intermediate: statement — simply connected
   h-cobordism, $\dim \ge 6$ ⇒ product; the proof skeleton (self-index,
   cancel low/high handles by connectivity §7, reduce the acyclic
   middle-dimension complex by handle trading + the Whitney-trick
   cancellation §6). Master: the full handle-trading argument and the
   "algebraically cancellable ⇒ geometrically cancellable" step. **This is
   the anchor unit that closes the citations in `03.06.17` and
   `03.02.01`. Prereq: `03.02.21`, `03.02.22`.**

5. **`03.02.24` The generalised Poincaré conjecture in high dimensions.**
   [NEW] LHC §8 anchor; Smale 1961 (*Ann. of Math.* 74, "Generalized
   Poincaré conjecture in dimensions greater than four") originator.
   Three-tier; ~1600 words. The corollary: a smooth homotopy $n$-sphere,
   $n \ge 5$, is homeomorphic (and PL-homeomorphic) to $S^n$, via the
   h-cobordism theorem applied to $S^n$ minus two discs. Master: the
   contrast with $n = 3$ (Perelman) and $n = 4$ (Freedman topological /
   smooth open), and the disc-characterisation corollary. **Prereq:
   `03.02.23`.**

### Priority 2 — the worked example, the prerequisites, and the chain-complex deepening

6. **`03.02.25` Worked handle calculus: cancelling pairs and $S^{n-1}
   \times I$.** [NEW] LHC §§2–4 worked examples. Two-tier (Intermediate +
   Master); ~1500 words. The canonical concrete computations LHC runs:
   the trivial cobordism $V \times I$ has the empty handle decomposition;
   a $0$-handle/$1$-handle pair on a ball cancels; the explicit
   $\lambda$/$(\lambda+1)$ cancelling pair with a single transverse point.
   **Closes the worked-example-layer gap from §2. Prereq: `03.02.20`,
   `03.02.22`.**

7. **`03.02.26` Transversality, tubular neighbourhoods, and the isotopy
   extension theorem.** [NEW] Guillemin–Pollack / Hirsch
   *Differential Topology* anchor; Thom (transversality), Sard 1942
   originators. Three-tier; ~1800 words. The differential-topology
   plumbing both LHC and the 3.03 Morse audit need: Sard's theorem (Codex
   has it named only), transversality of maps, tubular neighbourhood
   theorem, isotopy extension theorem. **Shared prerequisite — produce
   once for 3.03 and 3.07. Prereq: `03.02.01-smooth-manifold`.**

8. **`03.02.27` Levi-Civita connection, exponential map, gradient flow.**
   [ENRICH→NEW] Mirrors the 3.03 Morse audit's item `03.03.X1`. do Carmo
   *Riemannian Geometry* anchor. ~1500 words. Supplies the Riemannian
   framing (Levi-Civita $\nabla$, $\exp_p$, gradient-like flows) that the
   handle picture's ascending/descending spheres rest on. **If the 3.03
   audit produces this, LHC cites it; do not duplicate.** Recorded here so
   it is not dropped.

9. **[ENRICH] `03.12.13-cellular-homology` — handle vs cellular chain
   complex.** Add a Master paragraph identifying the **handle chain
   complex** (Morse–Smale, boundary by sphere intersection numbers) with
   the cellular chain complex of the CW structure a handle decomposition
   induces, so the §6 acyclicity argument has an in-Codex home. No new
   unit ID; one Master-section addition + a `connections` edge to
   `03.02.21`.

### Priority 3 — the s-cobordism refinement and the surgery pointer

10. **`03.08.20` Whitehead group, Whitehead torsion, and the s-cobordism
    theorem.** [NEW] **Milnor 1966** (*Bull. AMS* 72, "Whitehead
    torsion") + Whitehead 1950 (*simple homotopy types*) +
    Barden–Mazur–Stallings (s-cobordism) anchors. Three-tier; ~2200
    words. The non-simply-connected refinement LHC's hypotheses exclude:
    the **Whitehead group** $\mathrm{Wh}(\pi) = K_1(\mathbb{Z}\pi)/(\pm
    \pi)$, **Whitehead torsion** $\tau(W, V_0) \in \mathrm{Wh}(\pi_1
    V_0)$, simple homotopy equivalence, and the **s-cobordism theorem**:
    an h-cobordism is a product iff $\tau = 0$. Master: algebraic $K_1$ of
    a group ring, the relation to Reidemeister torsion, $\mathrm{Wh}(1) =
    0$ (recovering the h-cobordism theorem as the $\pi = 1$ case).
    **Closes a genuine corpus hole: Codex has no algebraic-$K_1$ /
    simple-homotopy coverage at all. Prereq: `03.02.23`,
    `03.08.01-topological-k-theory` (for the $K_0$/$K_1$ analogy),
    `03.12.20-whitehead-theorem`.**

11. **[ENRICH] `03.06.17-combinatorial-pontryagin-exotic-7-spheres` —
    repoint the h-cobordism citation.** Replace the three
    `[ref: TODO_REF Smale 1962]` h-cobordism invocations and the
    Kervaire–Milnor handle-cancellation reference with in-Codex pointers
    to `03.02.23` (and `03.02.22` for the cancellation step). No new unit;
    citation + `connections` edits.

12. **[ENRICH] `03.02.01-smooth-manifold` — repoint the h-cobordism
    history.** The historical Master paragraph naming "Smale's
    $h$-cobordism theorem (1962)" gains a forward `connections` pointer to
    `03.02.23`. One-line weaving edit; recorded so Pass-W does not miss it.

### Priority 4 — survey / pointer units (optional, Master-only)

13. **`03.02.28` Pointer: surgery theory and the surgery exact sequence.**
    [NEW] Master-only; ~1000 words. Wall *Surgery on Compact Manifolds*,
    Browder, Novikov; the h-cobordism theorem as the base case of the
    surgery classification of manifolds. Pointer to Ranicki / Lück. **The
    natural downstream of LHC; optional for FT equivalence.**

14. **Notation crosswalk note in `03.02.20` and `03.02.23`.** Record LHC's
    handle notation ($D^\lambda \times D^{n-\lambda}$; attaching sphere
    $S^{\lambda-1}$, belt sphere $S^{n-\lambda-1}$; self-indexing levels
    $\lambda + 1/2$; intersection pairing $\langle S_a, S_b \rangle$),
    cross-referenced to the modern Gompf–Stipsicz / Kosinski conventions.
    Inline `§Notation`, not a separate file.

---

## §4 Implementation sketch (P3 → P4)

**Dependency on the 3.03 Morse audit.** LHC's Priority-1 block is
*gated* on the Milnor *Morse Theory* Morse-core units (`03.02.02`–
`03.02.05`) existing — the handle calculus is literally "Morse Theory
Part I, relative to a boundary, with handles instead of cells." The
recommended sequencing is to run the **3.03 Priority-1 batch first (or
jointly)**, then the LHC Priority-1 batch immediately after. Item 7
(transversality) and item 8 (Levi-Civita/exp) are **shared
prerequisites** — produce once, cite from both books.

Realistic production estimate (mirroring earlier Milnor / Donaldson
batches; ~3 h per typical three-tier unit, more for the technical ones):

- **Priority 1 (items 1–5):** the Whitney-trick unit (item 3, ~2500 w)
  and the h-cobordism unit (item 4) run above average. 5 units ≈
  **~17 hours.** Closes the title theorem and the two unanchored
  citations.
- **Priority 2 (items 6–9):** 1 worked-example unit + 2 prerequisite
  units (shared with 3.03) + 1 deepening ≈ **~10 hours** (less if items
  7–8 are charged to the 3.03 batch).
- **Priority 3 (items 10–12):** the Whitehead-torsion unit is large and
  load-bearing for a corpus hole (~2200 w); 2 enrich edits are cheap. ≈
  **~6 hours.**
- **Priority 4 (items 13–14):** survey + notation ≈ **~3 hours.**
- **Total for full coverage: ~36 hours** (or ~30 h net if items 7–8 are
  shared with 3.03). **Priority 1 alone (~17 h) is the minimal useful
  chunk: it anchors the h-cobordism theorem and repays the unanchored
  citations in `03.06.17` and `03.02.01`.**

**Batch structure.**

- **Batch A (handle calculus, items 1, 2, 7):** opens the handle/cobordism
  block in `03.02-manifolds`; item 7 (transversality) is the shared
  plumbing. Load-bearing for everything downstream. Coordinate start with
  the 3.03 Morse-core batch.
- **Batch B (the theorem, items 3, 4, 5):** depends on Batch A. The
  Whitney trick (3) → h-cobordism (4) → generalised Poincaré (5) chain.
- **Batch C (examples + deepening, items 6, 9):** depends on A/B; can
  run alongside B's tail.
- **Batch D (s-cobordism refinement, item 10):** independent of B/C
  except for the `03.02.23` pointer; opens the algebraic-$K_1$ corner of
  the K-theory chapter. Largest Priority-3 item.
- **Weaving (items 11, 12):** Pass-W edits after `03.02.23` lands.

**Originator-prose targets** (per `FASTTRACK_EQUIVALENCE_PLAN.md` §10,
each unit's Master section cites originator + Milnor LHC): Whitney 1944
*Ann. of Math.* 45 ("self-intersections of a smooth $n$-manifold") in
item 3; Smale 1961/1962 *Ann. of Math.* 74 + *Amer. J. Math.* 84 in items
4–5; Whitehead 1950 *Ann. of Math.* 52 + Milnor 1966 *Bull. AMS* 72 +
Barden–Mazur–Stallings (via Kervaire, *Comment. Math. Helv.* 40, 1965) in
item 10; Milnor LHC 1965 cited throughout.

**Notation crosswalk.** LHC writes the triad $(W; V_0, V_1)$ (semicolon
separating total space from its two ends); $D^\lambda \times D^{n-\lambda}$
for a $\lambda$-handle; attaching sphere $S^{\lambda-1} \times 0$, belt
sphere $0 \times S^{n-\lambda-1}$ (Milnor: "left/right-hand sphere" for
descending/ascending); self-indexing $f(p) = \mathrm{index}(p)$. Modern
texts (Kosinski, Gompf–Stipsicz, Ranicki) use "attaching/belt sphere" and
intersection-number $\langle a, b \rangle$. **Codex decision:** adopt
LHC's triad and handle notation verbatim, add the modern sphere terms,
record both in the `§Notation` blocks of `03.02.20` and `03.02.23`.

**DAG edges to add** (priority-1+2): `03.02.20` ← {Morse-core
`03.02.02`–`03.02.05`, `03.02.26` transversality}; `03.02.21` ←
`03.02.20` (cross-link `03.12.13`); `03.02.22` ← {`03.02.20`,
`03.02.26`}; `03.02.23` ← {`03.02.21`, `03.02.22`,
`03.12.19-hurewicz-theorem`, `03.12.20-whitehead-theorem`} and →
{`03.06.17`, `03.02.24`}; `03.02.24` ← `03.02.23`; `03.02.25` ←
{`03.02.20`, `03.02.22`}; `03.08.20` ← {`03.02.23`,
`03.08.01-topological-k-theory`, `03.12.20-whitehead-theorem`}.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every lemma in LHC (full P1 audit).
  Deferred; the TOC + punch-list suffice for a ~115-page monograph.
- **Milnor *Morse Theory* (3.03)** itself — the Morse-core units
  (`03.02.02`–`03.02.07`, path space). LHC *depends* on them; they are
  owned by `plans/fasttrack/milnor-morse-theory.md`. This plan only adds
  the cobordism/handle layer **on top** of that block and flags the
  dependency.
- **Full surgery theory** (Wall *Surgery on Compact Manifolds*, the
  surgery exact sequence, $L$-groups, the assembly map). Item 13 is a
  pointer stub only; the surgery programme is a separate multi-unit
  effort if Codex ever expands into it.
- **Kirby–Siebenmann theory** (the $\mathrm{TOP}/\mathrm{PL}$ obstruction,
  triangulation in dimension $\ge 5$). Adjacent to LHC's PL corollaries
  but its own topic; out of scope.
- **Low-dimensional exceptions** in depth: Freedman's topological
  4-dimensional h-cobordism / disc-embedding theorem, the smooth
  4-dimensional Poincaré conjecture (open), and Perelman's $n=3$. Item 5
  Master section names them; full treatment is the 4-manifolds /
  geometric-topology territory (`03.06.19` Scorpan/Gompf–Stipsicz lineage)
  and a separate audit.
- **The full Kervaire–Milnor computation of $\Theta_n$** beyond the $n=7$
  case already in `03.06.17`. The group-of-homotopy-spheres machinery
  (plumbing, the Kervaire invariant) is a separate effort.
- **Handlebody / Kirby-calculus presentations of 3- and 4-manifolds.**
  LHC is high-dimensional; Kirby calculus is its low-dimensional cousin
  and belongs with a Gompf–Stipsicz audit, not here.

---

## §6 Acceptance criteria for FT equivalence (LHC)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is at
equivalence-coverage when:

- ≥95% of LHC's named theorems map to Babel Bible units. Current ~5%;
  after Priority-1 (items 1–5) rises to ~70% (handle calculus + the title
  theorem + generalised Poincaré); after Priority-1+2 to ~88% (worked
  examples + the transversality/Riemannian prerequisites + chain-complex
  deepening); after Priority-1+2+3 to ≥95% (s-cobordism refinement).
  Priority-4 is optional survey/notation.
- The **h-cobordism theorem** has a dedicated anchor unit (`03.02.23`),
  and the unanchored `[ref: TODO_REF Smale 1962]` citations in
  `03.06.17-combinatorial-pontryagin-exotic-7-spheres` (×3) and the
  history of `03.02.01-smooth-manifold` are **repointed in-Codex** to it.
- ≥90% of LHC's worked examples (the trivial-cobordism empty
  decomposition, the $0$/$1$-handle cancelling pair, the Whitney-disc
  picture, $S^{n-1} \times I$, the exotic-$S^7$ application) have either a
  direct unit (`03.02.25`) or a referencing unit.
- The Morse → handle → cobordism → h-cobordism **sequencing chain** is an
  unbroken `prerequisites` path in the DAG, resting on the produced 3.03
  Morse-core block.
- LHC's handle/triad notation is recorded in the `§Notation` blocks of
  `03.02.20` and `03.02.23` (see §4).
- Originator-prose citations of Whitney 1944, Smale 1961/1962, and
  (for the refinement) Whitehead 1950 / Milnor 1966 are present in the
  relevant units.
- The **s-cobordism / Whitehead-torsion** unit (`03.08.20`) closes the
  algebraic-$K_1$ / simple-homotopy corpus hole flagged in §2 — a gap
  that several future surgery-theory and geometric-topology books will
  also need.

**Honest scope.** Large topic-level gap (~5–10% existing), but
*structurally* small: the work is one coherent handle-calculus block of
~5 new units culminating in the title theorem, plus a shared prerequisite
layer (transversality, Riemannian framing) charged jointly with the 3.03
Morse audit, plus one substantial refinement unit (Whitehead torsion).
The single highest-leverage deliverable is **`03.02.23` (the h-cobordism
theorem)**, which repays at least three unanchored citations already
shipped in the corpus. The single largest *new* corpus contribution is
**`03.08.20` (Whitehead torsion / s-cobordism)**, the only algebraic-$K_1$
/ simple-homotopy coverage in Codex.

---

## §7 Sourcing

- **Free.** The Ranicki archive hosts the full scan at
  <https://webhomes.maths.ed.ac.uk/~v1ranick/papers/hcobord.pdf>
  (~115 pp.), a free educational mirror of the 1965 Princeton
  Mathematical Notes edition; cite as Milnor, J. (notes by Siebenmann and
  Sondow), *Lectures on the h-Cobordism Theorem*, Princeton University
  Press, 1965.
- **Print.** Princeton University Press (Princeton Landmarks in
  Mathematics reissue, 2015; ISBN 978-0-691-07996-2).
- **Local copy.** Add to `reference/fasttrack-texts/03-modern-geometry/`
  as `Milnor-hCobordism.pdf`, mirroring the pattern of the other free
  Milnor texts (`Milnor-MorseTheory.pdf` per the 3.03 audit).
- **Companion peer texts:** Kosinski, *Differential Manifolds* (Ch.
  VI–IX, handle-theoretic proof); Ranicki, *Algebraic and Geometric
  Surgery* (Oxford 2002); Lück, *A Basic Introduction to Surgery Theory*
  (ICTP 2002, incl. Whitehead torsion); Wall, *Surgery on Compact
  Manifolds* (2nd ed. AMS 1999, the downstream programme).
- **Originator papers:** Whitney 1944 *Ann. of Math.* 45, Smale 1961/1962
  *Ann. of Math.* 74, Smale 1962 *Amer. J. Math.* 84, Whitehead 1950
  *Ann. of Math.* 52 (all JSTOR); Milnor 1966 *Bull. AMS* 72 (open access,
  Project Euclid).
