# Codex — Orchestration Protocol (Layer 5)

The execution layer. Specifies the state machine, integration mechanics, failure recovery, batch coordination, quality sampling, cost ledger, and watchdog protocols that turn the four-layer scaffold (units / DAG / equivalence / flows / continuity) into a *running* autonomous system. Without this layer, the scaffolds remain plans; with it, they become executable across the 64-book Fast Track campaign without human intervention.

Read after `FASTTRACK_EQUIVALENCE_PLAN.md`, `FASTTRACK_FLOW_SCAFFOLD.md`, `CONTINUITY_SCAFFOLD.md`.

---

## 1. The orchestration model

The orchestrator is **a long-running operator** that holds campaign state and dispatches agent work. In the current setup, the operator is the conversation-level claude (this assistant). In a fully-automated future setup, it would be a driver agent loop continuously dispatched by a cron or watchdog. The protocols below are written to work for either model — they're operator-agnostic.

The operator's responsibilities:

- Maintain the **campaign ledger** (`manifests/campaign.json`) — a single source of truth for every book's pass status, last-run timestamp, owning agent, and outstanding deliverables.
- Watch the ledger for state transitions and dispatch the appropriate next-pass agent.
- Receive returned agent outputs, run integration (Section 4) before any subsequent agent reads shared state.
- Run watchdog checks (Section 7) periodically.
- Run quality sampling (Section 8) every batch.
- Track cost (Section 9) and enforce budget tier ceilings.
- Sign off final transitions (`equivalence-covered`, `continuity-verified`) only when all gates pass.

**The operator does not write content.** It dispatches and integrates. Content is produced by the per-pass agents specified in Layers 2–4.

---

## 2. The campaign ledger

Single artifact at `manifests/campaign.json`. Holds every book and flow's lifecycle state. Append-only audit log in a sibling file `manifests/campaign.log.jsonl` records every state transition with timestamp and rationale.

Schema:

```json
{
  "version": 1,
  "books": {
    "lawson-michelsohn-spin-geometry": {
      "tier": "α",
      "fasttrack_entry": "3.35",
      "status": "audited",
      "passes": {
        "P1_audit":          { "status": "completed",  "agent": "agent-a1",  "started": "...", "completed": "...", "cost_usd": 0.18 },
        "P2_gap":            { "status": "pending",    "blocked_by": [] },
        "P3_plan":           { "status": "pending" },
        "P4_production":     { "status": "pending" },
        "P5_verification":   { "status": "pending" }
      },
      "current_owner": null,
      "plan_path": "plans/fasttrack/lawson-michelsohn-spin-geometry.md",
      "outstanding_deliverables": []
    },
    "hartshorne-algebraic-geometry": {
      "tier": "α",
      "fasttrack_entry": "3.21",
      "status": "draft",
      ...
    }
  },
  "flows": {
    "lawson-michelsohn-pt1": {
      "kind": "author",
      "source_book": "lawson-michelsohn-spin-geometry",
      "status": "draft",
      "passes": {
        "PA_trajectory":      { "status": "pending" },
        "PB_bridges":         { "status": "pending" },
        "PC_pauses":          { "status": "pending" },
        "PD_verification":    { "status": "pending" },
        "PE_weaving":         { "status": "pending" }
      },
      "flow_path": "flows/lawson-michelsohn-pt1.md"
    }
  },
  "totals": {
    "books_total": 64,
    "books_equivalence_covered": 0,
    "flows_total": 0,
    "flows_attenuation_verified": 0,
    "cost_usd_total": 0.0,
    "agent_invocations_total": 0
  }
}
```

The ledger is the operator's working memory. Every state transition touches it. The append-only log lets any future operator reconstruct the entire campaign history.

---

## 3. The state machine

### 3.1 Per-book states

```
draft
   │
   ▼
audited           ◄── Pass 1 complete
   │
   ▼
gap-analysed      ◄── Pass 2 complete
   │
   ▼
production-ready  ◄── Pass 3 complete (plan written)
   │
   ▼
in-production     ◄── Pass 4 dispatched (agents running)
   │
   ▼
production-complete ◄── Pass 4 all units validated 27/27
   │
   ▼
verified          ◄── Pass 5 complete (per-book equivalence sign-off)
   │
   ▼
woven             ◄── Pass W complete (continuity weaving on this book's batch)
   │
   ▼
equivalence-covered ◄── final sign-off; book contributes to v0.x.0 release
```

Each transition has explicit pre/post conditions and a triggering agent, specified in §3.3.

### 3.2 Per-flow states

```
draft → trajectory-extracted → bridged → paused → verified → woven → attenuation-verified
       (PA)                  (PB)      (PC)     (PD)        (PW global)  (PV)
```

### 3.3 Transition table

| From → To | Trigger | Pre-condition | Agent dispatched | Post-condition |
|---|---|---|---|---|
| `draft → audited` | Operator includes book in active batch | `book.passes.P1_audit.status == "pending"` | Audit agent (FASTTRACK_EQUIVALENCE_PLAN §4 Pass 1) | `plan_path/§1.1–1.7` filled; ≥3 sources cited |
| `audited → gap-analysed` | Operator detects `audited` status | Plan §1 complete; `CONCEPT_CATALOG.md`, `deps.json`, `connections.json` accessible | Gap-analysis agent (Pass 2) | `plan_path/§2` filled; scorecard populated |
| `gap-analysed → production-ready` | Operator detects `gap-analysed` status | Plan §2 complete | Production-plan agent (Pass 3) | `plan_path/§3` filled; agent decomposition specified |
| `production-ready → in-production` | Operator dispatches production batch | Plan §3 lists ≥1 unit to produce; budget available | Production agent batch (Pass 4 — N parallel agents) | New unit/Lean files exist; pending integration |
| `in-production → production-complete` | Operator processes returned outputs | All Pass-4 agents returned successfully | (operator runs integration §4) | All produced units validate 27/27; CONCEPT_CATALOG/deps integrated |
| `production-complete → verified` | Operator detects `production-complete` | Pass-4 outputs integrated | Verification agent (Pass 5) | `plan_path/§4` filled; all 7 layer scorecards ≥ thresholds |
| `verified → woven` | Operator detects `verified` AND batch of related books all verified | Production-complete on adjacent books; weaving threshold met | Connection-weaving agent (Pass W on the batch) | Continuity gaps stitched; weaving_report exists |
| `woven → equivalence-covered` | Pass V continuity verification clears | Continuity metrics ≥ thresholds | Continuity-verification agent (Pass V) | Book signed off; ledger updated |

### 3.4 Failure transitions

Any pass can fail. Fail states are explicit:

| From | Fail trigger | Action |
|---|---|---|
| Any pass | Agent returns error or timeout | Status: `<pass>.status = "failed"`; operator inspects log; retry or escalate per §6 |
| Pass 4 | Unit fails 27/27 validation after 3 retry attempts | Status `failed`; route to "production-needs-rework" with specific defect list |
| Pass 5 | Layer scorecard < threshold | Status `failed`; route back to `production-ready` with specific gap list |
| Pass V | Continuity metrics below threshold | Route back to `woven` for further weaving; if 2nd weaving also fails, escalate |

---

## 4. The integration agent

When parallel production agents return outputs, **shared-resource serialization is mandatory**. The integration agent is a dedicated, single-threaded role that:

1. Reads each returned agent's output (proposed CONCEPT_CATALOG entries, deps.json registrations, new unit files at known paths).
2. Validates each new unit individually with `scripts/validate_unit.py`. Rejects (routes back to production) any that fail 27/27.
3. Integrates accepted CONCEPT_CATALOG entries by inserting at the correct alphabetic / namespace position. Reads file fresh before each edit (no stale caches).
4. Integrates deps.json `nodes[]` and `_notes{}` entries. Adds DAG edges per the production plan §3.5.
5. Integrates connection annotations: reads each unit's `connections:` frontmatter block, writes them into `manifests/connections.json` (proposing new entries via `connection_proposals.md` for orchestrator review if not already registered).
6. Re-runs `scripts/validate_all.py` after each batch's integration to confirm global validity.
7. Updates the campaign ledger.

The integration agent is **always single-threaded across batches**. Multiple production agents can run in parallel; only one integration agent runs at a time. This is the lock mechanism for shared resources without filesystem-level locks.

In the current setup (claude as operator), the integration role is filled by the operator manually editing the shared files. In an automated setup, it's a dedicated agent task with prompt template:

```
You are the integration agent for Codex.
Inputs:
- A batch of recently-returned agent outputs at <paths>
- The campaign ledger at manifests/campaign.json
- Current shared files: CONCEPT_CATALOG.md, manifests/deps.json, manifests/connections.json

For each returned output:
1. Validate the unit with ./.venv/bin/python scripts/validate_unit.py <path>
2. If validation fails (not 27/27), record failure in campaign log; do not integrate
3. If validation passes, insert proposed CONCEPT_CATALOG entry at the correct namespace/alphabetic position
4. Insert proposed deps.json node entry into nodes[] and _notes{} blocks
5. Add connection annotations to manifests/connections.json
6. Append unregistered connections to manifests/connection_proposals.md for orchestrator review

After all outputs processed:
7. Run ./.venv/bin/python scripts/validate_all.py
8. If 100% pass, update campaign ledger; else file rollback report

Output: integration_report.md listing every action taken and any failures.
```

---

## 5. Per-batch coordination

### 5.1 Locking semantics

- **Production agents** can run in unlimited parallel — they write to their own unit files in disjoint paths (`content/<section>/<chapter>/<id>-<slug>.md`). They never touch shared files directly.
- **Integration agent** is the sole writer to shared files. Runs single-threaded.
- **Watchdog and quality-sampling agents** are read-only; can run concurrent with anything.
- **Verification and weaving agents** modify per-unit / per-flow files but coordinate via the campaign ledger (only one weaving agent runs per book at a time; recorded as `current_owner`).

### 5.2 Batch composition

A batch is the unit of orchestrator dispatch. Sized empirically:

- **Production batch**: 4–8 parallel production agents, all working on units within the same per-book plan or related plans. Sized so the integration step takes ≤ 10 minutes after batch return.
- **Audit batch**: up to 12 parallel audit agents on different books (Tier α can be one batch; Tier β can be three).
- **Verification batch**: typically 1 per book, single-threaded.

### 5.3 Inter-batch sequencing

The state machine enforces sequencing per book (audit → gap → plan → production → verify → weave). Across books, batches can interleave. The campaign ledger holds the truth.

---

## 6. Failure recovery protocols

Each pass has explicit recovery rules. The operator detects failures via the ledger and runs the recovery.

### Pass 1 — Audit failure

- **Symptom**: Agent returns "insufficient public sources" or audit §1 sections incomplete after timeout.
- **Recovery**: 
  - Tier α/β: dispatch a second audit agent with explicitly broader source list (course pages, PhD theses, reviews on JSTOR). Allow 2x normal token budget.
  - Tier γ: if second audit also fails, mark book as `audit-degraded` — proceed with reduced expectations (topic-equivalent only, no reproduction-equivalent).
- **Escalation**: Human review at 3rd failure.

### Pass 2 — Gap analysis failure

- **Symptom**: Agent can't reconcile audit theorem inventory against shipped Codex.
- **Recovery**:
  - Most often resolved by operator-side regrep (the agent missed a unit). Operator manually grep the codebase, re-dispatch with hint.
  - If genuinely no Codex coverage: this is the *expected* state for unfilled books; not a failure.
- **Escalation**: only if Codex grep shows clear coverage but agent's gap report doesn't reflect it (agent reading failure).

### Pass 3 — Production plan failure

- **Symptom**: Agent produces decomposition that's poorly sized (one agent gets 30 units, others get 2).
- **Recovery**: Re-dispatch with explicit size guidance: "each sub-agent gets 4–8 units."
- **Escalation**: If 2nd attempt also imbalanced, operator manually re-balances.

### Pass 4 — Production failure

- **Symptom**: Unit fails 27/27 validation.
- **Recovery**:
  - Common: prohibited-phrasings, lean_status: stub, Beginner symbols, missing Master sections. Re-dispatch agent with specific defect list and 1.5x token budget.
  - 2nd failure: reduce scope (instead of producing the full unit, produce just the failing section).
  - 3rd failure: escalate to operator. Often a sign the unit topic is genuinely outside agent training-data range.
- **Escalation**: After 3rd failure, operator manually drafts the unit (or marks as deferred to v1.x).

### Pass 5 — Verification failure

- **Symptom**: Layer scorecard below threshold (e.g., theorem coverage < 95%).
- **Recovery**:
  - Verification agent emits specific gap list: "theorems X, Y, Z not covered in any unit."
  - Operator routes back to `production-ready` with gap list as additional Pass 4 input.
  - Re-runs Pass 4, Pass 5.
- **Escalation**: If 2nd verification still fails, accept reduced threshold for this book and document deferral.

### Pass W — Weaving failure

- **Symptom**: Agent returns "no continuity gaps found" but continuity metrics still below threshold.
- **Recovery**: Re-dispatch with specific metric failures highlighted; agent must address each named metric.
- **Escalation**: Multiple repeated weavings without metric improvement → operator inspects manually.

### Pass V — Continuity verification failure

- **Symptom**: Continuity metrics below threshold despite weaving.
- **Recovery**: Loop weaving + verification up to 3 times. Then escalate to operator.
- **Escalation**: Operator may add explicit per-unit synthesis_claims that the weaving missed; re-runs Pass V.

---

## 7. The watchdog agent

A periodic agent that audits the campaign ledger for stuck books, dropped batches, and integration drift. Runs every ~12 hours (or every batch boundary) in autonomous mode.

**Watchdog tasks:**

1. Identify books with `current_owner` set but no progress for > 4 hours → likely stuck agent. Reset owner; re-dispatch.
2. Identify books in `in-production` for > 24 hours without batch return → orphaned batch. Investigate.
3. Identify newly-created connection proposals in `manifests/connection_proposals.md` → flag for orchestrator integration.
4. Compare `validate_all.py` output to ledger's `equivalence-covered` count; flag discrepancies.
5. Identify books that have been at `verified` for > 7 days without weaving → schedule weaving.
6. Compute total cost vs. budget tier ceiling; alert if approaching threshold.
7. Identify quality-sampling reports flagging drift; schedule rework on flagged units.

**Output**: `manifests/watchdog_report.md` — list of issues + recommended actions.

The operator (or driver script) reads the watchdog report and acts on its recommendations.

---

## 8. Quality sampling

Continuity verification (Pass V) catches structural defects but not subtle quality issues. The quality-sampling agent reads random samples of recent production and flags drift.

**Quality-sampling agent**:
- Samples 5% of recently-shipped units (random selection from last 7 days).
- For each sampled unit, checks:
  - **Prose density** — does the Master section feel synthesized or list-y?
  - **Genius-prose presence** — is the originator's framing actually quoted/contextualised, not just cited?
  - **Bridge coherence** (for flow steps) — does the bridge advance an argument, or just announce the next topic?
  - **Connection invocation** — are registered connections actually invoked in the prose, with anchor phrases?
  - **Tier appropriateness** — is the Beginner section actually accessible, the Master section actually deep?
- Produces `manifests/quality_report.md` with sampled units, scores per dimension (1–5), and specific defects.

**Threshold**: average sampled score ≥ 4.0/5 across dimensions. Below 4.0 → trigger rework on flagged units; investigate systematic causes.

The quality-sampling agent does not have authority to edit. It only reports. The operator decides on rework.

---

## 9. Cost ledger

Every agent invocation logs to `manifests/cost_ledger.jsonl`:

```json
{"timestamp": "2026-04-29T15:23:00Z", "book": "lawson-michelsohn-spin-geometry", "pass": "P1_audit", "agent_id": "agent-a1", "model": "claude-opus-4-7", "input_tokens": 8500, "output_tokens": 3200, "cost_usd": 0.18, "duration_s": 215}
```

Aggregated rolling totals are reported in the campaign ledger's `totals` block. The watchdog watches for budget tier overruns:

| Tier | Budget ceiling per book | Total tier budget |
|---|---|---|
| α | $50 USD | $600 (12 books) |
| β | $30 USD | $720 (24 books) |
| γ | $20 USD | $560 (28 books) |
| **Total campaign budget** | | **~$1880 + 20% buffer = $2256** |

Real numbers depend on model pricing and batch sizes; calibrated empirically from the Lawson-Michelsohn pilot. Tiers above their ceiling either pause for operator review or auto-defer to a later phase.

---

## 10. Convergence criteria

The campaign converges when:

- All Tier α books are `equivalence-covered` AND `continuity-verified`.
- All Tier α flows are `attenuation-verified`.
- Strand flows for all 9 strands are `attenuation-verified`.
- The synthesis flow `fasttrack-canonical` is `attenuation-verified`.
- Continuity metrics across the curriculum meet thresholds globally.

Per-tier convergence:

- **Tier α complete** = condition for v0.7 release
- **Tier β complete** = condition for v0.9 release  
- **Tier γ complete** = condition for v1.0 release

Tier δ optional per the equivalence plan.

---

## 11. The pilot — Lawson-Michelsohn

The first end-to-end autonomous run. Goal: validate the entire 7-pass protocol (P1 audit → P2 gap → P3 plan → P4 production → P5 verify → PW weave → PV continuity) on one book, end-to-end, with the operator (claude in this conversation) running each transition manually but *without external intervention*.

Why Lawson-Michelsohn:
- Tier α
- Codex already covers ~80% (the v0.x spin-geometry pilot strand)
- Estimated ~10 new units to produce, smaller than e.g. Hartshorne's 50+
- Subject is well-represented in agent training data
- The book is widely available; even web research can pull from solution sets, course pages, reviews

### 11.1 Pilot pass schedule

| Pass | Estimated time | Notes |
|---|---|---|
| P1 audit | 30–60 min | Background agent; web research |
| P2 gap analysis | 30 min | Read audit + Codex; produce coverage diff |
| P3 production plan | 30 min | Decompose into 2–4 production agents |
| P4 production (parallel) | 1–2 hours | 2–4 agents producing ~10 units total |
| P5 verification | 30 min | Per-book equivalence sign-off |
| PW weaving | 30 min | Stitch seams across new + existing |
| PV continuity verification | 30 min | Six metrics + samples |
| **Total wall time** | **~6 hours** | Operator-active |

### 11.2 What the pilot validates

- Whether Pass 1 audit can produce a usable §1 from web sources alone (no book PDF)
- Whether Pass 4 production agents respect the connection brief and continuity scaffolding
- Whether the integration agent (operator) handles parallel returns cleanly
- Whether Pass V continuity metrics actually reflect quality
- Where the failure points are — informs failure-recovery refinement before scale

### 11.3 Pilot success criteria

- All 7 passes complete; book reaches `equivalence-covered` AND `continuity-verified`
- New units produced validate 27/27
- Continuity metrics meet thresholds
- Total cost < $50 (Tier α budget)
- Total wall time < 8 hours operator-active
- Quality-sample score ≥ 4.0/5 on the produced units

If all criteria met → protocol scales to Hartshorne next, then the rest of Tier α in batches.
If any fail → patch the gap, re-pilot before scaling.

---

## 12. The full stack — final

```
╔═════════════════════════════════════════════════════════════════════╗
║              Layer 5: Orchestration ← THIS DOCUMENT                 ║
║   Campaign ledger · State machine · Integration agent · Watchdog    ║
║   Failure recovery · Quality sampling · Cost ledger                 ║
║   ↓ executes the layers below autonomously                          ║
╠═════════════════════════════════════════════════════════════════════╣
║              Layer 4: Continuity & connection scaffold              ║
║   Connection registry · Per-unit / per-flow annotations · Briefs    ║
║   ↓ binds parallel agent output into continuous teaching            ║
╠═════════════════════════════════════════════════════════════════════╣
║              Layer 3: Flows                                         ║
║   Author · Strand · Synthesis · Themed                              ║
╠═════════════════════════════════════════════════════════════════════╣
║              Layer 2: Equivalence plans                             ║
║   Per-book audit + coverage + production                            ║
╠═════════════════════════════════════════════════════════════════════╣
║              Layer 1: DAG                                           ║
║   manifests/deps.json                                               ║
╠═════════════════════════════════════════════════════════════════════╣
║              Layer 0: Units                                         ║
║   Three-tier reference articles                                     ║
╚═════════════════════════════════════════════════════════════════════╝
```

Layer 5 is the executive. With it, the campaign runs autonomously across 64 books, with the operator intervening only for escalations the watchdog surfaces. Without it, the layers below are well-designed but stationary.

The pilot starts with Lawson-Michelsohn, runs through the 7 passes operator-driven (claude as operator), produces an `equivalence-covered`, `continuity-verified` Lawson-Michelsohn equivalent, and informs every subsequent book's run with the empirical lessons. From there, Tier α, β, γ in turn — bounded by budget, watchdog'd for stalls, sampled for quality, audit-logged for accountability.

---

*Plan v1. To be refined after Lawson-Michelsohn pilot conclusion.*
