# Brown — *Topology and Groupoids* (Fast Track 1.05) — Audit + Gap Plan

**Book:** Ronald Brown, *Topology and Groupoids* (3rd ed., BookSurge 2006; expanded
edition of *Elements of Modern Topology*, McGraw-Hill 1968 / *Topology*,
Ellis-Horwood 1988). Hosted free by the author.

**Fast Track entry:** 1.05.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite
of the orchestration protocol). Output is a concrete punch-list of new units
to write so that *Topology and Groupoids* is covered to the equivalence
threshold (≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally not a full P1 audit (which would inventory every
named theorem in the book at the line-number level). It works from the book's
canonical topic list and Brown's distinctive editorial choices, produces the
gap punch-list, and stops there. A full P1 audit of the same book would
sharpen the punch-list but would not change which units need writing.

---

## §1 What Brown's book is for

Brown is the canonical source for the **fundamental-groupoid** framing of
algebraic topology. Where Hatcher / Munkres / May organise the subject around
the fundamental *group* of a pointed space, Brown organises it around the
fundamental *groupoid* on a *set* of base points. The reformulation is not
cosmetic: the groupoid version of the Seifert-van Kampen theorem applies
without connectivity hypotheses, gives a clean treatment of unions of two
open sets meeting in disconnected pieces (e.g.\ the circle), and lifts
naturally to higher-dimensional algebraic topology.

Distinctive contributions, in roughly the order Brown develops them:

1. **Identification (quotient) topology** with the universal property treated
   first, then concrete examples (cones, suspensions, mapping cones, mapping
   cylinders, adjunction spaces, CW skeleta). Brown is the originator-text
   for the universal-property-first treatment of these constructions in a
   standard textbook.
2. **Compactly generated function spaces** (the cartesian-closed category).
   The exponential law $C(X \times Y, Z) \cong C(X, C(Y, Z))$ as a clean
   theorem, with the modification of the topology that makes it work.
3. **Cofibrations and the homotopy extension property**, treated alongside
   identification topology rather than deferred to a "homotopy theory"
   chapter.
4. **Fundamental groupoid** $\pi_1(X, A)$ on a set $A \subseteq X$ of base
   points. Higher-than-Hatcher abstraction level early.
5. **Seifert-van Kampen theorem for the fundamental groupoid.** Brown's
   signature contribution. Applies to $X = U \cup V$ with no connectivity
   assumptions on $U \cap V$.
6. **Covering spaces** treated as a representation theory of the fundamental
   groupoid — Brown's framing makes the Galois correspondence explicit.
7. **Orbit spaces, group actions, and the equivariant fundamental groupoid.**
8. **Higher-dimensional algebraic topology** via crossed modules,
   double / cubical groupoids — a glimpse of the further programme.

The book ends before bringing in homology / cohomology, which puts it
squarely in the algebraic-topology-via-homotopy track.

---

## §2 Coverage table (Babel Bible vs Brown)

Cross-referenced against the current 213-unit corpus. ✓ = covered, △ =
partial / different framing, ✗ = not covered.

| Brown topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Topological space (definition, examples) | `02.01.01` topological-space | ✓ | Codex has this. |
| Continuous map | `02.01.02` continuous-map | ✓ | |
| Metric space | `02.01.05` metric-space | ✓ | |
| Identification / quotient topology | — | ✗ | **Gap.** Universal-property treatment of quotients, mapping cones, mapping cylinders, adjunction spaces. |
| CW complex | — | ✗ | **Gap.** Standard prerequisite for cellular cohomology / Eilenberg-MacLane spaces (`03.12.05`) but not actually shipped as its own unit. |
| Compactly-generated spaces | — | ✗ | **Gap.** Function-space exponential law. Brown is one of few textbook anchors. |
| Compact-open topology | — | ✗ | **Gap.** Foundational for function spaces and CW pairs. |
| Cofibration / HEP | — | ✗ | **Gap.** Used implicitly throughout `03.12-homotopy/` but never given its own unit. |
| Fibration (Hurewicz / Serre) | — | ✗ | **Gap.** `03.13.02` (Leray-Serre) assumes this without a host unit. |
| Path-connectedness, components | — | △ | Mentioned in `02.01.01` but not its own unit. |
| Homotopy of maps and paths | `03.12.01` homotopy | ✓ | Codex covers homotopy. |
| **Fundamental group $\pi_1(X, x_0)$** | — | ✗ | **Gap (high priority).** Codex jumps straight to higher homotopy / Eilenberg-MacLane without the basic $\pi_1$ unit. |
| **Fundamental groupoid $\pi_1(X, A)$** | — | ✗ | **Gap (high priority — Brown's signature contribution).** |
| Seifert-van Kampen (group version) | — | ✗ | **Gap.** Foundational computational tool. |
| **Seifert-van Kampen (groupoid version)** | — | ✗ | **Gap (high priority — Brown's signature theorem).** |
| Covering space | `03.12.02` covering-space | ✓ | Codex has the unit; Brown's groupoid framing of the Galois correspondence is a deepening, not a new unit. |
| Galois correspondence for covering spaces | `03.12.02` (partial) | △ | Currently a remark inside the covering-space unit; could be its own unit if punch-list grows. |
| Orbit space / group action on space | `03.12.02` (partial) | △ | Brown's treatment is more thorough; partial coverage is fine for FT equivalence. |
| Crossed module | — | ✗ | **Gap (low priority — foundational for HDT but not load-bearing for the rest of the curriculum).** |
| Cubical / double groupoid | — | ✗ | **Gap (low priority — pointer in §1 §8 of Brown is enough for FT equivalence).** |

**Aggregate coverage estimate:** ~30% of Brown's book has corresponding
Babel Bible units. The gap is concentrated in early-and-middle chapters: $\pi_1$
and the groupoid version, Seifert-van Kampen, identification topology,
function spaces and fibration / cofibration. The end-of-book HDT material
is correctly out of FT scope (Brown himself flags it as a survey).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 1 — high-leverage, fills load-bearing prerequisite gaps:**

1. **`02.01.06` Quotient and identification topology.** Universal property,
   examples (cone, suspension, mapping cone, mapping cylinder, wedge,
   smash, adjunction space). Brown §4 is canonical anchor; Hatcher §0 also
   anchors. Three-tier unit, all tiers present, ~1500 words.
2. **`02.01.07` Compact-open topology and function spaces.** Exponential
   law, when it holds (compactly-generated case), Brown §5 anchor.
   Three-tier; the master tier should give the cartesian-closed category
   statement.
3. **`02.01.08` Cofibration and homotopy extension property.** Brown §7;
   Hatcher §0; May *Concise Course* §6. Used implicitly by
   `03.12-homotopy/` units already.
4. **`02.01.09` Fibration (Hurewicz / Serre).** Foundational for the
   Leray-Serre spectral sequence in `03.13.02`. Brown §13 anchor; Hatcher
   §4.2; Bott-Tu §17.
5. **`03.12.00` Fundamental group.** Currently the Babel Bible homotopy chapter
   skips $\pi_1$. Brown §6; Hatcher §1.1. Three-tier; Beginner uses
   loops-on-circle pictures.
6. **`03.12.0a` Fundamental groupoid $\pi_1(X, A)$.** Brown §6 (his
   distinctive contribution). Originator-prose treatment crediting Brown
   directly. Three-tier.
7. **`03.12.0b` Seifert-van Kampen theorem (group + groupoid versions).**
   Both forms in one unit, with the worked example showing why the
   connectedness-free groupoid version is the "right" form. Brown §6.7 as
   originator-anchor for the groupoid version.

**Priority 2 — fills CW / cellular gaps:**

8. **`03.12.0c` CW complex.** Definition (skeleta + attaching maps),
   topology, mapping-cylinder reformulation, basic examples. Hatcher §0
   anchor; Brown §4 covers via identification topology.
9. **`03.12.0d` Cellular approximation theorem.** Used silently by
   `03.12.05` Eilenberg-MacLane and `03.12.07` Whitehead tower. Hatcher
   §4.1 anchor.

**Priority 3 — Brown-distinctive deepenings (not strictly required for FT
equivalence but high-value):**

10. **Deepening of `03.12.02` covering-space:** add a Master section on
    the Galois correspondence in the language of $\pi_1$-sets and
    fundamental-groupoid representations (Brown §10).

**Priority 4 — survey-level pointer, optional:**

11. **`03.12.0e` Crossed module and pointer to higher-dimensional algebraic
    topology.** Brown §11 onwards. Likely Master-only, ~1000 words. Acts
    as a launchpad to Brown-Higgins-Sivera *Nonabelian Algebraic Topology*
    if Codex ever expands in that direction.

---

## §4 Implementation sketch (P3 → P4)

For a full Brown coverage pass, items 1–7 are the minimum set. Realistic
production estimate (mirroring earlier Lawson-Michelsohn / Bott-Tu batches):

- ~3 hours per unit (research + draft + validate at 27/27 + Lean stub if
  applicable + Bridge / Synthesis paragraphs in real prose, not the
  templated form).
- 7 priority-1 units × 3 hours = ~21 hours of focused production. With one
  agent doing the production in parallel and the operator doing the
  weave+verify passes, this fits in a 2–3 day window.

**Originator-prose target.** Ronald Brown is the *originator* for the
groupoid framing of Seifert-van Kampen, the textbook treatment of
identification topology with the universal property first, and (with
Higgins) higher-dimensional algebraic topology. Units 5, 6, 7 should carry
originator-prose treatment per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, citing Brown 1967 ("Groupoids and van Kampen's theorem", *Proc. London
Math. Soc.* 17) and Brown 2006 (the book itself). Unit 1 should cite the
Brown 1968 *Elements of Modern Topology* in addition to the 2006 expansion.

**Notation crosswalk.** Brown writes $\pi X$ for the fundamental groupoid
on the entire space and $\pi_1(X, A)$ for the groupoid on a chosen subset
$A$. Some sources write $\Pi_1$. The Babel Bible notation decision (per
`docs/specs/UNIT_SPEC.md` §11) is: use $\pi_1(X, A)$ for the groupoid on
$A$ and $\pi_1(X, x_0)$ for the group at a basepoint. The new unit on
fundamental groupoids should record this in a §Notation paragraph.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in Brown
  (would take the full P1 audit; deferred unless punch-list expands).
- Exercise-pack production. Brown's exercises are extensive; an exercise
  pack unit (`02.01.E1` or similar) is a P3-priority-3 follow-up.
- Higher-dimensional algebraic topology beyond the survey-level pointer
  unit.
- Notation-crosswalk file. The crosswalk decisions in §4 are sufficient
  for FT equivalence; a standalone `notation/brown.md` is not needed
  unless a downstream agent needs it for cross-book consistency.

---

## §6 Acceptance criteria for FT equivalence (Brown)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Brown's named theorems map to Babel Bible units (currently ~30%; after
  priority-1 units this rises to ~85%; after priority-1+2 to ~95%).
- ≥90% of Brown's worked examples have either a direct unit or are
  referenced from a unit that covers them.
- Notation decisions are recorded.
- Pass-W weaving connects the new units to the existing `03.12-homotopy/`
  units via lateral connections.

The 7 priority-1 units alone close most of the equivalence gap. Priority-2
units close the CW gap. Priority-3+4 are deepenings.
