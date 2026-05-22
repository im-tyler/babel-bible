# Babel Bible — Agentic Execution Plan

Drafted 2026-05-17. Operational sibling to `FASTTRACK_COVERAGE_ROADMAP.md`
(which says *what* to cover next) and `FASTTRACK_EQUIVALENCE_PLAN.md`
(which says *what equivalence means*). This document says **how to
agentically execute** the corpus build at maximum throughput **without
compromising any quality gate** that the existing orchestration protocol
defines.

This is not a new model. It composes the existing roles (audit / gap-
analysis / production-plan / production / integration / verification /
weaving / continuity-verification / quality-sampling / flow / watchdog —
see `docs/specs/ORCHESTRATION_PROTOCOL.md`) into a sustainable pipeline,
fills the seven policy gaps the existing docs left open, and gives the
operator a concrete dispatch protocol.

Read alongside:
- `docs/specs/ORCHESTRATION_PROTOCOL.md` — agent role definitions, file-write discipline, phase model P1–P5.
- `docs/specs/QUALITY_RUBRIC.md` — the 27/27 validator and tier-content gates.
- `docs/specs/UNIT_SPEC.md` — three-tier unit format.
- `docs/specs/CONTINUITY_SCAFFOLD.md` — Pass W weaving and Pass V continuity verification.
- `docs/specs/FASTTRACK_FLOW_SCAFFOLD.md` — flow phases PA–PE.
- `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` — seven-layer equivalence model.
- `docs/plans/FASTTRACK_COVERAGE_ROADMAP.md` — wave-by-wave book sequencing.

---

## §1 Mission

Push the Babel Bible corpus toward Fast Track equivalence-completeness on all 93
books at the **highest sustainable throughput** consistent with **zero
relaxation** of the existing quality gates. Specifically:

- 27/27 validator must pass on every shipped unit (no exceptions).
- All 7 equivalence layers must verify per book (no shortcuts to "topic
  overlap only").
- Pass W and Pass V must run on every batch (no skipping the seam-stitching).
- Quality-sampling 5% spot-check runs every batch (no silent drift).
- Every substitute text and every BUY-only fallback must be logged and
  justified against the new rules in §6 below.

If throughput and quality conflict, throughput yields. The throughput
target is *high*, not *maximum*: maximum throughput would require
relaxing gates, which is forbidden.

---

## §2 Concurrency budget (the throughput envelope)

The existing protocol (`ORCHESTRATION_PROTOCOL.md` §5.1) allows unlimited
parallel production agents because they write to disjoint unit paths.
The actual bottleneck is the **integration agent** (single-threaded) and
the **operator's review bandwidth**. The concurrency budget below is
calibrated so neither becomes a queue:

| Role / pass | Max parallel | Sustained pace | Bottleneck check |
|---|---|---|---|
| Audit (P1) | **12** | 6/day | Operator review of audit §1 output |
| Gap-analysis (P2) | **6** | 4/day | Reads shipped corpus — context-heavy |
| Production-plan (P3) | **4** | 4/day | Operator sign-off on punch-list before P4 |
| Production (P4) | **8** per batch, **2 batches/day** | 16 units/day | Integration drain rate |
| Integration | **1** (mandatory single) | 16 units/day | Single-threaded; budget 10 min/unit |
| Verification (P5) | **2** | 1 book/day | Per-book equivalence audit |
| Pass W (weaving) | **1 per batch** | 1 batch/day | Runs after each P4 batch |
| Pass V (continuity verify) | **1 weekly** | weekly | Curriculum-wide; serialized |
| Quality-sampling | **1 per batch** | 5% of P4 output | Concurrent, read-only |
| Flow (PA–PE) | **4** | 2 flows/day | Independent of unit pipeline |
| Watchdog | **1** continuous | hourly tick | Stuck-book alerts |

**Sustained daily throughput at these limits:** ~6 audits (P1), ~16
shipped units (P4), ~1 verified book (P5), ~2 flow updates. Weekly: ~30
audits, ~80 units, ~5 books verified.

**Why not more.** Two reasons. (1) Integration is single-threaded by
design — the only writer to shared files (`CONCEPT_CATALOG.md`,
`deps.json`, `connections.json`). Pushing P4 above 16 units/day fills the
integration queue. (2) Pass W and Pass V are serial quality gates.
Bypassing them to "catch up" is the exact compromise this plan forbids.

---

## §3 Phase hand-off protocol (auto vs. manual)

`ORCHESTRATION_PROTOCOL.md` §3.3 names the phases but does not specify
hand-off triggers. Fill that gap explicitly:

| Hand-off | Trigger | Auto / manual | Operator action |
|---|---|---|---|
| P1 → P2 | Audit §1 written + ≥3 sources cited | **Auto** dispatch P2 agent | Spot-check audit §1 within 1 day |
| P2 → P3 | §2 coverage scorecard populated for all 7 layers | **Manual** approval | Operator reviews gap report; can reject and re-run |
| P3 → P4 | §3 punch-list complete + dependencies declared | **Manual** approval | Operator confirms unit decomposition; rejects if punch-list compresses tiers |
| P4 → Integration | Producer commits unit at expected path | **Auto** queue | Integration agent picks up FIFO |
| Integration → 27/27 | Integration script writes frontmatter + edges | **Auto** validator runs | Failure routes back to producer with defect list |
| 27/27 pass → ship | Validator returns all-pass | **Auto** flip status `draft` → `approved` → `shipped` | None unless quality-sampling flags |
| Batch complete → Pass W | All P4 units in batch shipped | **Auto** dispatch Pass W | Operator reads `weaving_report.md` post-hoc |
| Pass W → Pass V | Weekly cron OR ≥3 batches since last Pass V | **Auto** dispatch Pass V | Operator reads continuity report; addresses deficits |
| Per-book Pass W+V both clear | Triggers P5 | **Auto** dispatch P5 | Operator signs off `verified` status |
| P5 verify → `equivalence-covered` | All 7 layers ≥ threshold | **Manual** approval | Operator signs off in `manifests/campaign.json` |

**Operator-only gates (3):** P2→P3, P3→P4, and P5→`equivalence-covered`.
Everything else autopilot. The three manual gates are where quality is
most defensible: gap fidelity, punch-list scope, and book-level closure.

---

## §4 Daily / weekly operator loop

The operator (Tyler or a designated driver agent) runs this loop:

**Morning (~30 min):**
1. Read overnight `watchdog_report.md` and `quality_sampling_report.md`.
2. Resolve any stuck-book alerts (>4h owner lock; see
   `ORCHESTRATION_PROTOCOL.md` §5.3).
3. Review yesterday's `weaving_report.md`. Flag any forced-anchor-phrase
   insertions that look mechanical (drift signal).

**Mid-day (~60 min):**
4. Read any P2 gap reports pending approval. Approve or send back.
5. Read any P3 punch-lists pending approval. Approve or send back.
6. Dispatch next day's audit batch (queue up to 12 P1 agents for tomorrow).

**End of day (~30 min):**
7. Read `campaign.json` rollup: how many audits closed, units shipped,
   books verified.
8. Sign off any books reaching `verified` state.
9. Update `MEMORY.md` if a feedback pattern emerged.

**Weekly (~2 hours):**
10. Read full `continuity_report.md` from Pass V. Address any metric below
    threshold by queueing a targeted Pass-W run.
11. Re-read `FASTTRACK_COVERAGE_ROADMAP.md` and adjust Wave priorities
    based on actual throughput vs. plan.
12. Sample 10 random shipped units for prose-density read (master tier
    only); confirm Lawson-Michelsohn / Hörmander calibre maintained.
13. Commit the `_archive` of the week's reports.

**Total operator time:** ~2 hours/day + 2 hours/week = ~12 hours/week.
This is the human-in-the-loop budget. Anything beyond this means the
pipeline is over-dispatching and must be throttled.

---

## §5 Wave 5 execution schedule (next 14 days)

Concretely sequenced against the throughput envelope in §2. Targets the
Wave 5 audit list from `FASTTRACK_COVERAGE_ROADMAP.md` §3.

**Day 1 (today, kickoff):**
- Dispatch P1-audit batch: **2.03 Chatterjee, 2.02 Woit, 3.38 May, 3.40 May Simplicial, 3.42 Ravenel.** All FREE; PDFs already in `reference/fasttrack-texts/`. Five parallel agents.
- Operator: read the existing Brown 1.05 punch-list and dispatch a P4-production batch of the 7 priority-1 units (one batch of 4 agents on units `02.01.06` is shipped — skip; `02.01.07` compact-open, `02.01.08` cofibration, `02.01.09` fibration, `03.12.00` fundamental group).

**Day 2:**
- Receive Day 1 audits. Operator reviews each audit §1 briefly (15 min × 5 = 75 min).
- Auto-dispatch P2 gap-analysis for all 5. (6 max — comfortable.)
- Receive P4 batch from Day 1 + Pass W on the batch. Quality-sampling pulls 1 unit.
- Dispatch next P4 batch: `03.12.0a` fundamental groupoid, `03.12.0b` Seifert-van Kampen, plus 2 production agents on Apostol Vol I priority-1 (any of its 18 punch-list items not yet started).

**Day 3:**
- Receive Day 2 P2 reports. Operator manual-approves each (5 min × 5 = 25 min).
- Auto-dispatch P3 production-plan agents. (Note: these update the per-book plan stub's §3 punch-list — they are not the punch-list itself; the punch-list was already in the Wave 5 audit's §1.)
- Dispatch P1-audit batch: **2.01 Landau QM, 2.10 Landau Stat Phys 1, 0.4 Arnold ODE, 1.02 Landau Mechanics, 1.03 Landau Classical Fields.** Five more parallel agents. (All BUY — see §6 fallback rule.)

**Days 4–7:**
- P3 punch-lists from Day 1's audits land; operator approves; P4 production begins on top-priority items from each new book.
- Continued P4 batches at 2/day × 8 units = 16/day target.
- Pass W after each batch; quality-sampling on each batch.
- Day 7 weekly checkpoint: Pass V continuity run.

**Days 8–14 (Wave 5 closeout):**
- Wave 5 P1 audits complete (10 books). All 10 should be at "plan-stub
  with priority-1 punch-list" state by Day 10.
- P4 production active on at least 3 of those 10 books in parallel
  (different sections → no integration collision).
- Wave 5 first books reach P5 verification by Day 12 (Chatterjee is
  short — realistic).
- Day 14: Wave 5 complete. `audits_done` rises from 13 → 23.
  `books_unaudited` 48 → 38.

**Wave 5 success criterion:** 10 audits closed, ≥80 units shipped, ≥1
book at `verified` state, zero quality-gate failures, zero stuck-book
alerts unresolved.

If by Day 7 the pace is materially below this, throttle audit dispatch
and route capacity to integration / weaving until the queue drains.
Speed is never an excuse to compress quality.

---

## §6 The seven policy gaps — explicit fills

The Explore audit (2026-05-17) found seven operational gaps in the
existing specs. This plan fills each:

### 6.1 Substitute-text policy

**Rule.** A plan stub may anchor against a substitute text *only* if:

1. The FT-listed canonical text is genuinely inaccessible (out of print,
   no library availability, no acceptable scan) **and**
2. The substitute covers ≥80% of the canonical text's theorem inventory
   (verified by a side-by-side TOC diff in the plan stub's §1) **and**
3. The substitute's notation crosswalk is recorded so a reader can move
   between texts.

The four existing substitute plans (Hatcher for May 3.38; Cannas da
Silva for parts of Sternberg 1.10 and Woodhouse 3.09; Forster for
Ahlfors-Sario 1.06; Arnold Mathematical Methods for Arnold ODE 0.4 and
Sternberg 1.10) **do not satisfy this rule** and must be supplemented
with canonical-text plan stubs as part of Waves 5–10.

**Naming.** Substitute plans are renamed `<author>-<topic>--substitute-for-<ft-entry>.md`
so the file name itself flags the substitution.

### 6.2 Continuity metric thresholds (Pass V)

`CONTINUITY_SCAFFOLD.md` defines six metrics but leaves several thresholds
informal. Lock them at:

- backward-reference density ≥ **8 / 1000 words** (Master+Intermediate avg)
- forward-promise density ≥ **3 / 1000 words** (Master only)
- lateral-connections ≥ **3 / unit** (Master only)
- synthesis-claims: ≥ **2 / Intermediate unit**, ≥ **4 / Master unit**
- registered anchor-phrase reuse ≥ **95%** of cross-references
- throughline-coverage = **100%** (no chapter starts without an inbound
  connection registered)

A unit failing any metric in Pass V does not lose `shipped` status, but
it enters the Pass-W rework queue.

### 6.3 Per-unit token / cost budget

Defer to a thinking-budget posture, not a hard ceiling. Hard ceilings
encourage cutting corners. Instead:

- Beginner sections target ~600–900 words. Hard cap: 1500.
- Intermediate sections target ~1200–2000 words.
- Master sections target ~1500–3000 words.
- Each unit's production agent is given a thinking budget of "as much as
  needed; the rubric is the gate." Cost ledger (per
  `ORCHESTRATION_PROTOCOL.md` §9) records actuals.

If a unit exceeds 4× the upper-target word count, it is split into
multiple units rather than published as a monolith.

### 6.4 Review bottleneck resolution

`REVIEWER_PLAN.md` flags expert review as the scaling constraint. This
plan resolves it as follows:

- **27/27 validator is the primary gate** for production units. Human
  review beyond that is *optional, sampled*.
- **Quality-sampling agent** (5%/batch) is the routine human-substitute.
- **Operator manual review** is reserved for: every P2 gap report, every
  P3 punch-list, every P5 equivalence verification, and any unit the
  quality-sampler flagged in the prior 7 days.
- **Expert (human, external) review** is NOT in the critical path. It
  runs as a separate audit lane, in arrears, on a sample of `verified`
  books — *not* per unit. The expert's job is to catch *systemic* drift
  the validator misses, not to gate ship.

### 6.5 Flow-update triggers

When a unit changes, its parent flows must be re-validated. Trigger:

- Any edit to a `shipped` unit's body or frontmatter sets `flow_dirty: true`
  in `manifests/connections.json` for every flow containing that unit.
- Flow-PD agent (verification, see `FASTTRACK_FLOW_SCAFFOLD.md` §5) wakes
  on the next flow batch and re-runs verification on `flow_dirty: true`
  flows.
- Pass W on the unit's batch must clear before `flow_dirty` is cleared.

### 6.6 BUY-only book fallback

For books unobtainable via the project's existing channels (purchase,
library, ILL, institutional access), an audit agent may produce a
**reduced audit** with the following constraints:

- §1.1 (theorem inventory) is built from publicly available TOC,
  preface, sample chapter, and citation network (Google Scholar
  references to the text).
- §1.2 (exercise inventory) is omitted; replaced with a note "exercises
  inventoried after sourcing — see NEED_TO_SOURCE.md".
- §1.3 (worked examples) populated from any sample chapter or
  publisher preview.
- §1.7 (distinctive perspective) populated from peer reviews,
  bibliography essays, and citation context.
- The audit is marked `audit_completeness: reduced` in
  `manifests/production/plan.json`.
- A reduced audit can still trigger P2 / P3 / P4 — the punch-list
  proceeds against the partial inventory. Re-audit upgrade is queued
  in `NEED_TO_SOURCE.md`.

**Hard rule:** P5 verification on a `reduced`-audit book cannot mark the
book `equivalence-covered`. It can only mark it `equivalence-partial`.
The book must be re-audited from a full source before final closure.

### 6.7 Master-tier prose calibre enforcement

The existing rubric prohibits sloppy phrasings but does not name a
positive standard. Codify: **master-tier prose must be at the calibre of
Lawson-Michelsohn *Spin Geometry* and Hörmander *The Analysis of Linear
Partial Differential Operators*.** Specifically:

- Declarative sentences. No hedged futures ("we will see", "the right
  thing to do is").
- No metacommentary ("Note that…", "It is interesting that…").
- No real-time error correction in prose ("Actually, what I meant was…").
- No valedictory closing ("We have now completed our discussion of…").
- No rhetorical italics for emphasis.
- Honest structural signposting: a paragraph that says "We prove X" must
  prove X immediately after.

Quality-sampling agent scores master-tier prose against this standard;
units scoring < 4/5 enter the Pass-W rework queue.

---

## §7 Campaign ledger format (`manifests/campaign.json`)

The existing campaign.json is sparse. Extend it (without breaking
existing readers) to carry the per-book state machine this plan needs:

```json
{
  "books": {
    "1.05a": {
      "title": "Nonabelian Algebraic Topology",
      "author": "Brown, Higgins, Sivera",
      "audit_completeness": "full",
      "phase": "P1-done",
      "owner": null,
      "owner_locked_at": null,
      "audit_path": "plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md",
      "punch_list_count": 10,
      "p1_units_shipped": 0,
      "p1_units_total": 5,
      "p2_units_shipped": 0,
      "p2_units_total": 2,
      "p5_verified": false,
      "blocked_by": ["1.05"]
    }
  },
  "wave": 5,
  "wave_started": "2026-05-17",
  "next_review_at": "2026-05-24"
}
```

The integration agent updates this on every state transition. The
watchdog agent reads it to detect stuck books (owner_locked_at older
than 4h with no progress).

---

## §8 Quality enforcement: the no-compromise contract

Restated as a contract the operator can point to when an agent (or
themselves under pressure) is tempted to relax:

1. **Never disable a 27/27 check.** If a unit can't pass, fix the unit;
   do not patch the validator.
2. **Never ship a unit without registered prereqs.** Use `pending_prereqs: true`
   and queue the prereq unit instead of letting an edge dangle.
3. **Never close a P5 verification without all 7 layers above threshold.**
   Use `equivalence-partial` for partial closure and queue the gap.
4. **Never skip Pass W on a batch.** Skipping it creates a weaving debt
   that compounds across batches.
5. **Never skip the weekly Pass V.** This is the only metric that
   catches global drift.
6. **Never let a substitute-text plan masquerade as a canonical one.**
   §6.1 naming convention is enforced at audit-agent dispatch.
7. **Never mark a `reduced`-audit book as `equivalence-covered`.** §6.6.
8. **Never let watchdog alerts sit overnight.** A stuck book is a
   pipeline-blocker.
9. **Never let quality-sampling reports go unread.** Drift caught at 5%
   is recoverable; drift caught at 50% is a rewrite.
10. **Never trade master-tier prose calibre for throughput.** §6.7 is
    enforced at quality-sampling.

---

## §9 Failure modes and recovery

| Failure | Symptom | Recovery |
|---|---|---|
| Integration queue overflow | P4 units sitting in `draft` >4h | Pause P4 dispatch; let integration drain; investigate per-unit time |
| 27/27 false-positive (validator passes a bad unit) | Quality-sampling catches it | Patch validator; re-run on shipped corpus; identify all affected units |
| Pass-W introduces forced anchor phrases (mechanical drift) | `weaving_report.md` shows >20% identical sentence templates | Pause Pass W; investigate weaving prompt; rerun with diversified phrasing |
| Substitute-text drift (no canonical plan written) | Audit ledger shows substitutes outnumbering canonical | Block new substitute audits; route capacity to the canonical text being substituted for |
| Stuck book (owner_locked_at >4h) | Watchdog alert | Operator inspects last agent transcript; resets owner; re-dispatches with bug-fix prompt |
| Author voice drift on flows | Flow-PD verification scores <4/5 on author voice | Run Pass W with explicit author-voice corrective; re-verify |
| Cost ledger spike | Daily token spend >2× sustained average | Throttle dispatch; investigate which agent / book is the cost driver |

---

## §10 Success metrics (review weekly)

- **Throughput:** units shipped this week ≥ 80; books closed this week ≥ 5.
- **Quality:** 27/27 first-pass rate ≥ 90%; quality-sampling avg score
  ≥ 4.2/5; Pass V all six metrics above threshold.
- **Queue health:** integration queue ≤ 16 units; no stuck books; no
  unread reports.
- **Coverage:** weekly delta in `audits_done` ≥ 6; weekly delta in shipped
  units ≥ 80.
- **Cost:** sustained token spend within 1.5× the prior-month average.

If three consecutive weeks meet all five, increase concurrency budget
(§2) by 25%. If any week misses two metrics, decrease by 25%.

---

## §11 First concrete dispatch (executable today)

To start: queue exactly this batch.

**P1 audit batch (5 agents, parallel, dispatched together):**

| Agent | Book | Source | Output path |
|---|---|---|---|
| audit-a | 2.03 Chatterjee QFT | FREE PDF in `reference/fasttrack-texts/02-quantum-stat/Chatterjee-QFTLectureNotes.pdf` | `plans/fasttrack/chatterjee-qft-lecture-notes.md` |
| audit-b | 2.02 Woit Quantum Theory | FREE PDF in `reference/fasttrack-texts/02-quantum-stat/Woit-QuantumTheoryGroupsRepresentations.pdf` | `plans/fasttrack/woit-quantum-theory-groups-representations.md` |
| audit-c | 3.38 May Concise Algebraic Topology | FREE PDF in `reference/fasttrack-texts/03-modern-geometry/May-ConciseAlgebraicTopology.pdf` | `plans/fasttrack/may-concise-algebraic-topology.md` |
| audit-d | 3.40 May Simplicial Objects | FREE PDF in `reference/fasttrack-texts/03-modern-geometry/May-SimplicialObjects.pdf` | `plans/fasttrack/may-simplicial-objects.md` |
| audit-e | 3.42 Ravenel Complex Cobordism | FREE Green Book (author PDF) | `plans/fasttrack/ravenel-complex-cobordism.md` |

Each audit agent's prompt template:

```
Subject: P1 audit of <book> (FT entry <#>)

Read <PDF path>. Produce a plan stub at <output path> following the
template in plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md.

Required sections:
  §1 What the book is for — distinctive perspective, 5-8 numbered points
  §2 Coverage table — every named theorem/concept mapped to a Babel Bible unit
     or "GAP" with priority
  §3 Gap punch-list — priority-ordered new units to write, with three-
     tier estimates and notation crosswalk requirements
  §4 Implementation sketch — realistic hour estimate, originator-prose
     citations, notation crosswalk
  §5 What this plan does NOT cover — explicit non-goals
  §6 Acceptance criteria — per-book threshold for FT equivalence
  §7 Sourcing — local PDF path and license note

Do NOT write any content/ units. Audit only. Cite ≥3 sources beyond
the primary text. Hard limit: 3 hours of agent time.

When done, return:
  - path to written plan stub
  - punch-list count by priority (P1/P2/P3/P4)
  - any books that should block this one (e.g., prereq audits not done)
  - flag if substitute-text per §6.1 of AGENTIC_EXECUTION_PLAN
  - flag if reduced-audit per §6.6 of AGENTIC_EXECUTION_PLAN
```

**P4 production batch (4 agents, parallel, dispatched concurrent with P1
audit batch):**

| Agent | Unit | Source plan |
|---|---|---|
| prod-a | `02.01.07` Compact-open topology and function spaces | brown-topology-and-groupoids.md §3 P1 #2 |
| prod-b | `02.01.08` Cofibration and homotopy extension property | brown-topology-and-groupoids.md §3 P1 #3 |
| prod-c | `02.01.09` Fibration (Hurewicz / Serre) | brown-topology-and-groupoids.md §3 P1 #4 |
| prod-d | `03.12.00` Fundamental group | brown-topology-and-groupoids.md §3 P1 #5 |

Each production agent's prompt template:

```
Subject: P4 production of unit <id> — <title>

Source plan: <plan path> §3 entry <#>.
Write the unit at content/<section>/<chapter>/<id>-<slug>.md per
UNIT_SPEC.md §4. Three tiers required (Beginner / Intermediate /
Master) marked [Beginner] / [Intermediate+] / [Master].

Quality contract:
  - master-tier prose at Lawson-Michelsohn / Hörmander calibre
    (AGENTIC_EXECUTION_PLAN.md §6.7)
  - declarative sentences; no hedged futures, metacommentary,
    real-time error correction, valedictory closings, rhetorical italics
  - all named theorems proven (no [...] placeholders)
  - ≥3 cross-references in Master Connections, each classified by
    connection type per CONTINUITY_SCAFFOLD.md §3
  - ≥1 primary-literature reference beyond reference archive
  - Lean module if applicable; lean_mathlib_gap ≥30 words if not

After writing, run scripts/validate_unit.py on the unit. If 27/27 does
not pass, fix and re-run. Return the unit path and 27/27 result.

Hard limit: 4 hours of agent time.
```

Both batches run in parallel today. If both clear cleanly, the pipeline
is calibrated and Wave 5 proceeds per §5 schedule.

---

## §12 What this plan is NOT

- Not a content production guide. Production-agent prompts deepen the
  punch-list units; this plan just orchestrates them.
- Not a replacement for `FASTTRACK_EQUIVALENCE_PLAN.md` — it implements
  it.
- Not a substitute for operator judgement. The three manual hand-off
  gates (P2→P3, P3→P4, P5→`equivalence-covered`) require a human (or
  driver agent acting in operator role) to read and approve.
- Not a one-shot artifact. As Waves close and metrics arrive, this plan
  is amended (especially §2 concurrency budget and §10 success metrics).

---

## §13 Open questions for the operator

Before kickoff, Tyler should decide:

1. **Driver agent or self-drive?** Does Tyler want to be the operator
   each day, or should this plan also specify a "driver" agent that
   performs the operator loop (§4) under sampled human review?
2. **Concurrency budget calibration.** §2 numbers are conservative
   first-pass estimates. After Wave 5 closes they should be re-calibrated
   against actual integration drain rate.
3. **External expert review cadence.** §6.4 puts expert review in arrears.
   Is there an actual expert (mathematician, physicist) to engage, and on
   what cadence?
4. **BUY-only sourcing escalation.** §6.6 specifies the reduced-audit
   fallback. Is there a budget line for purchasing the BUY-only physics
   texts (Landau-Lifshitz set, Weinberg set, etc.) to avoid running on
   reduced audits indefinitely?
5. **Substitute-text remediation backlog.** §6.1 says the 4 existing
   substitutes need canonical-text companions. Should those be inserted
   into Wave 5 (delaying Section 2 unblock by ~5 days) or deferred to
   Wave 7?

These questions do not block dispatch of the §11 first batch; they shape
Wave 6 onward.
