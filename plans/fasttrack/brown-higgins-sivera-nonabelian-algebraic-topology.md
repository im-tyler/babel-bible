# Brown, Higgins, Sivera — *Nonabelian Algebraic Topology* (Fast Track 1.05a) — Audit + Gap Plan

**Book:** Ronald Brown, Philip J. Higgins, Rafael Sivera, *Nonabelian Algebraic
Topology: Filtered Spaces, Crossed Complexes, Cubical Homotopy Groupoids*
(EMS Tracts in Mathematics Vol. 15, European Mathematical Society 2011,
xxxvi + 668 pp.). Hosted free by the author at
<https://groupoids.org.uk/pdffiles/NAT-book.pdf>.

**Fast Track entry:** 1.05a (Brown's sequel to 1.05 *Topology and Groupoids*).
Added to the catalog 2026-05-17 — previously omitted from
`docs/catalogs/FASTTRACK_BOOKLIST.md` although linked from the Fast Track
source page inside the §1.05 Brown toggle as "his sequel book."

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite
of the orchestration protocol). Output is a concrete punch-list of new units
to write so that *Nonabelian Algebraic Topology* (NAT hereafter) is covered
to the equivalence threshold (≥95% effective coverage of theorems, key
examples, exercise pack, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally not a full P1 audit. NAT is a 668-page research
monograph; a complete P1 inventory at line-number granularity is a multi-week
job and is deferred to a dedicated audit pass. This plan works from NAT's
canonical topic list and the authors' distinctive editorial choices, produces
the gap punch-list, and stops there.

---

## §1 What NAT is for

NAT is the **higher-dimensional sequel** to Brown's *Topology and Groupoids*.
Where *Topology and Groupoids* (1.05) extends classical algebraic topology
from fundamental *groups* to fundamental *groupoids* — gaining the
disconnectedness-tolerant Seifert-van Kampen theorem — NAT extends the
programme one dimension further, replacing groupoids with **strict cubical
ω-groupoids** and **crossed complexes**. The payoff: explicit, computable
nonabelian higher analogues of relative homotopy groups, with a higher-dim
Seifert-van Kampen theorem (HvKT) that *actually computes* second relative
homotopy groups in cases standard algebraic topology cannot.

Distinctive contributions, in roughly the order NAT develops them:

1. **Filtered spaces** as the right ambient category for higher Seifert-van
   Kampen. Replaces pairs and triads.
2. **Crossed complex** $C(X_*)$ of a filtered space — a non-abelian chain
   complex carrying the second and higher relative homotopy groups together
   with the boundary operators that link them.
3. **Higher Homotopy Seifert-van Kampen Theorem (HvKT).** Brown-Higgins
   1981; the central theorem of the book. Lets one compute crossed complexes
   of pushouts of filtered spaces — the higher-dim analogue of the
   group-theoretic SvKT — and hence calculate higher relative homotopy
   groups in concrete examples (relative $\pi_2$ of mapping cones with
   nontrivial $\pi_1$, etc.).
4. **Cubical ω-groupoid $\rho(X_*)$** of a filtered space, and the
   equivalence of categories with crossed complexes (Brown-Higgins). Cubical
   methods are essential to the proof of HvKT because cubes compose in all
   directions; simplices do not.
5. **Tensor product and homotopies of crossed complexes** — gives the
   monoidal closed structure that lets one form function objects and prove
   the cubical equivalence.
6. **Free crossed resolutions** of groups and groupoids; the
   identities-among-relations problem.
7. **Higher Whitehead products** computed via the crossed complex framework
   (where classical methods stall).
8. **Connections to nonabelian cohomology, classifying spaces of crossed
   complexes**, and pointer toward the further programme (∞-groupoid
   models, Grothendieck's *Pursuing Stacks*, homotopy type theory).

NAT is **not** a first introduction to algebraic topology. It assumes
*Topology and Groupoids* (1.05), basic homotopy theory (mapping cones,
fibrations, CW), and standard homological algebra. It is the canonical
entry point to higher-dim algebraic topology if one wants the *computable,
strict-ω-groupoid* programme rather than the ∞-categorical /
Joyal-Lurie / quasi-category programme. The two programmes are equivalent
in their content but very different in style; the Fast Track explicitly
chooses NAT.

---

## §2 Coverage table (Babel Bible vs NAT)

Cross-referenced against the current 313-unit corpus.
✓ = covered, △ = partial / different framing, ✗ = not covered.

| NAT topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Fundamental groupoid $\pi_1(X, A)$ | — | ✗ | **Gap** — already on the Brown 1.05 punch-list (`03.12.0a`); NAT depends on it. |
| Seifert-van Kampen for groupoids (group + groupoid) | — | ✗ | **Gap** — already on Brown 1.05 punch-list (`03.12.0b`). NAT prerequisite. |
| Filtered space | — | ✗ | **Gap.** Definition + standard examples (CW filtration, skeletal filtration). |
| Mapping-cone construction | △ | △ | Touched in `03.12-homotopy/` but not its own unit; called out in Brown 1.05 punch-list as `02.01.06` quotient-topology dependency (already shipped). |
| Relative homotopy group $\pi_n(X, A, x_0)$ | — | ✗ | **Gap.** Foundational and *load-bearing* for NAT. |
| Whitehead's crossed module of a pair $\Pi_2(X, A, x_0) \to \pi_1(A, x_0)$ | — | ✗ | **Gap.** This is the 2-dim object NAT generalises to all dimensions. |
| Crossed complex of a filtered space | — | ✗ | **Gap (high priority — NAT's central object).** |
| Cubical singular complex / cubical ω-groupoid | — | ✗ | **Gap.** Cubical methods are absent from the Babel Bible; need a dedicated stub even if Codex doesn't follow the cubical track further. |
| Equivalence: crossed complexes ≃ cubical ω-groupoids | — | ✗ | **Gap.** Brown-Higgins theorem; pointer unit only at FT-equivalence. |
| Higher Homotopy Seifert-van Kampen (HvKT) | — | ✗ | **Gap (high priority — NAT's central theorem).** |
| Worked computation: $\pi_2$ of the mapping cone $S^1 \cup_2 D^2$ | — | ✗ | **Gap.** The signature demonstration that HvKT *computes* where classical methods don't. |
| Free crossed resolution of a group | — | ✗ | **Gap.** Connects to identities-among-relations and group cohomology. |
| Tensor product of crossed complexes | — | ✗ | **Gap (low priority — internal machinery, not load-bearing for FT-equivalence).** |
| Higher Whitehead product via crossed complexes | — | ✗ | **Gap (Master-tier deepening).** |
| Classifying space $B(\mathcal{C})$ of a crossed complex | — | ✗ | **Gap (low priority — survey-level pointer).** |
| Pointer to ∞-groupoid models / Grothendieck *Pursuing Stacks* | — | ✗ | **Gap (low priority — Master-tier connection only).** |

**Aggregate coverage estimate:** ~0% of NAT has corresponding Babel Bible units.
The gap is total. This is unsurprising — NAT is a research-monograph
extension of Brown 1.05, and Brown 1.05 itself is only ~30% covered.
Closing the Brown 1.05 punch-list is a hard prerequisite for any
meaningful NAT coverage.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — blocked by Brown 1.05 punch-list:** Items 5, 6, 7 of
`plans/fasttrack/brown-topology-and-groupoids.md` (fundamental group,
fundamental groupoid, Seifert-van Kampen) must ship before NAT units can be
written. NAT inherits all 1.05 prereqs.

**Priority 1 — high-leverage, captures NAT's central content:**

1. **`03.12.10` Relative homotopy group $\pi_n(X, A, x_0)$.** Standard
   definition, action of $\pi_1(A)$, long exact sequence of a pair. Hatcher
   §4.1 anchor; NAT §B.1.6 anchor. Three-tier, ~1500 words. Foundational
   for HvKT.
2. **`03.12.11` Whitehead's crossed module $\Pi_2(X, A, x_0) \to \pi_1(A, x_0)$
   of a pair.** Brown-Higgins notation. Includes the worked example of
   $\pi_2$ of a mapping cone in the simply-connected vs non-simply-connected
   cases (the latter being where classical methods stall). NAT §2.1 anchor.
3. **`03.12.12` Filtered space.** Definition (sequence $X_0 \subseteq X_1
   \subseteq \cdots$), standard examples (CW skeletal filtration, $n$-skeleta).
   NAT §B.7 anchor. Short unit (~1000 words); mostly definitional.
4. **`03.12.13` Crossed complex of a filtered space.** The central object.
   Construction $C(X_*)_n = \pi_n(X_n, X_{n-1}, *)$ for $n \geq 2$, $C(X_*)_1
   = \pi_1(X_1)$ (a groupoid), boundary operators. NAT §7.1 anchor. Master
   tier required; Intermediate tier covers the definition; Beginner tier
   gives the 2-truncation picture.
5. **`03.12.14` Higher Homotopy Seifert-van Kampen Theorem (HvKT).**
   Statement, sketch of the proof via cubical methods, and the canonical
   worked computation: $\pi_2$ of $S^1 \cup_2 D^2$ (Möbius band /
   real-projective-plane mapping cone). Brown-Higgins 1981 *Proc. London
   Math. Soc.* as originator-citation; NAT §8.1 anchor. Three-tier;
   Beginner section gives only the statement and the worked computation
   without proof.

**Priority 2 — cubical side and resolutions:**

6. **`03.12.15` Cubical singular complex / cubical ω-groupoid $\rho(X_*)$.**
   Pointer unit at FT-equivalence: definition and statement of the
   Brown-Higgins equivalence with crossed complexes. NAT §6 anchor.
   Master-only, ~1500 words.
7. **`03.12.16` Free crossed resolution of a group.** Identities-among-
   relations problem; connection to group cohomology via the bar resolution
   comparison. NAT §10 anchor. Intermediate + Master.

**Priority 3 — Brylinski-style deepenings (Master-tier, not strictly
required for FT equivalence):**

8. **Tensor product and monoidal closed structure on crossed complexes.**
   NAT §9. Add as a Master section to `03.12.13` rather than a new unit;
   referenced in passing.
9. **Higher Whitehead products via crossed complexes.** Add as a Master
   section to `03.12.10` or `03.12.13`.

**Priority 4 — survey pointers (optional, Master-only):**

10. **`03.12.17` Classifying space of a crossed complex.** Pointer unit.
    Connects to the further programme (∞-groupoid models, Grothendieck,
    homotopy type theory). NAT §11 anchor.

---

## §4 Implementation sketch (P3 → P4)

For a full NAT coverage pass, items 1–5 are the minimum set (with the
Brown 1.05 punch-list as a strict prerequisite). Realistic production
estimate (mirroring earlier Brown / Lawson-Michelsohn / Bott-Tu batches):

- ~3–4 hours per unit. NAT units skew higher than the corpus average
  because the master tier requires careful crossed-complex notation and
  worked computations are nontrivial.
- 5 priority-1 units × ~3.5 hours = ~17–18 hours of focused production.
  Plus the Brown 1.05 priority-1 prereqs (~21 hours). Total ~40 hours.
  Fits a focused 5–7 day window.

**Originator-prose target.** Ronald Brown (with Higgins, with Loday) is
the *originator* of the higher-dim Seifert-van Kampen programme. Units 4
and 5 should carry originator-prose treatment per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, citing:

- R. Brown, P. J. Higgins, "Colimit theorems for relative homotopy groups,"
  *J. Pure Appl. Algebra* 22 (1981) 11–41 — originating HvKT for
  crossed complexes.
- R. Brown, P. J. Higgins, "On the algebra of cubes," *J. Pure Appl.
  Algebra* 21 (1981) 233–260 — originating the cubical ω-groupoid /
  crossed complex equivalence.
- R. Brown, P. J. Higgins, R. Sivera (2011) — the book itself, definitive
  consolidation.

**Notation crosswalk.** NAT uses both $\Pi_n(X, A, x_0)$ (Brown-Higgins
crossed-module form) and $\pi_n(X, A, x_0)$ (classical relative homotopy
group) — they are the same set, but $\Pi$ carries the crossed-module action
in the notation. NAT also writes $\rho(X_*)$ for the cubical ω-groupoid
and $C(X_*)$ for the crossed complex. The Babel Bible notation decision (per
`docs/specs/UNIT_SPEC.md` §11) should: use $\pi_n(X, A, x_0)$ for the
relative homotopy group as a set, use $\Pi_2(X, A, x_0) \to \pi_1(A, x_0)$
explicitly when the crossed-module structure is invoked, and adopt NAT's
$\rho(X_*)$ and $C(X_*)$ for the cubical and crossed-complex functors. Record
in a §Notation paragraph of `03.12.11` and `03.12.13`.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in NAT (full P1
  audit; deferred — NAT is 668 pp.).
- Exercise-pack production. NAT exercises are extensive and often open-ended;
  exercise pack is a P3-priority-3 follow-up after the priority-1 units ship.
- The cubical track beyond the single pointer unit `03.12.15`. The Codex
  is not committing to a parallel cubical curriculum.
- Connections to ∞-groupoid models / quasi-categories / Lurie. Pointer
  only in `03.12.17`.

---

## §6 Acceptance criteria for FT equivalence (NAT)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Brown 1.05 punch-list priority-1 units have shipped (strict prereq).
- ≥95% of NAT's named theorems in chapters 1–10 map to Babel Bible units
  (currently 0%; after priority-1 units this rises to ~70%; after
  priority-1+2 to ~90%; full ≥95% requires priority-3 + selective
  priority-4).
- ≥90% of NAT's worked computations in chapters 1–10 have a direct unit
  or are referenced from a unit that covers them.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new units to `03.12-homotopy/` and to the
  Brown 1.05 priority-1 units via lateral connections.

The 5 priority-1 units close most of the equivalence gap given the Brown
1.05 prereqs are in place. Priority-2 closes the cubical and free-resolution
gaps. Priority-3+4 are deepenings.

---

## §7 Sourcing

- **Free.** Author-hosted PDF at <https://groupoids.org.uk/pdffiles/NAT-book.pdf>.
- **License.** Author has placed the PDF freely available; for educational
  use cite as Brown, Higgins, Sivera, *Nonabelian Algebraic Topology*, EMS
  Tracts in Mathematics 15, European Mathematical Society 2011.
- **Local copy.** Add to `reference/fasttrack-texts/01-fundamentals/` as
  `Brown-Higgins-Sivera-NonabelianAlgebraicTopology.pdf` to mirror the
  pattern of other free FT texts.
