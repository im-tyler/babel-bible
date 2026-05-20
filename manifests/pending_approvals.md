# Pending Operator Approvals

Maintained by the driver agent (and the top-level orchestrator session that
took over after the driver hit a harness limit). One heading per pending
item. Operator clears items by either resolving them (mark `**RESOLVED:**`
inline) or removing the heading. Resolved entries may stay as a decision log.

---

## **RESOLVED 2026-05-17**: 2026-05-17T cycle: Wave 5 kickoff — Task / Agent dispatcher tool unavailable in driver harness

**Resolution:** Top-level Claude Code session took over the dispatch. The
driver's analysis was correct (sub-agents cannot recurse in Claude Code).
All 9 sub-agents were successfully dispatched from the parent session and
completed cleanly. See `manifests/orchestrator_status.md` for the cycle
report.

**Blocker class:** environment / tooling (not a quality-gate decision).

**Summary.** The Wave 5 kickoff driver invocation was instructed by
`docs/plans/AGENTIC_EXECUTION_PLAN.md` §11 to dispatch 9 sub-agents in
parallel (5 P1 audits + 4 P4 production units) using the `Task` /
`Agent` tool with `subagent_type: "general-purpose"`. The driver agent's
runtime did not expose any sub-agent / Task tool. The deferred-tool list
surfaced only: `EnterWorktree`, `ExitWorktree`, `Monitor`,
`NotebookEdit`, `TaskStop`, `WebFetch`, `WebSearch`, and the Google
auth tools. No `Task` / `Agent` / sub-agent spawner was available, and
`ToolSearch` queries for "subagent", "agent", "task spawn" returned no
matches.

The driver did not impersonate sub-agents (would have violated
`docs/specs/ORCHESTRATION_PROTOCOL.md` role boundaries and produced
9 unrelated workstreams in one context window — guaranteed quality
regression). The cycle was halted per §8 no-compromise contract.

**What Tyler needs to decide.**

1. Re-invoke this driver in a Claude Code harness that has the `Task`
   tool exposed (the standard Claude Code CLI does — the issue is this
   particular invocation lacks it). The simplest fix is to launch the
   next cycle from a top-level Claude Code session rather than as a
   nested sub-agent (sub-agents do not get further Task tool access in
   Claude Code by design — sub-agents cannot recurse).
2. Alternatively, re-architect the driver as a script (e.g.
   `scripts/dispatch_wave.py`) that shells out to the Anthropic API
   directly, treating each audit / production agent as an independent
   API call. This breaks the dependence on the harness's `Task` tool.
   This is the more robust long-term answer but is a scripting
   project, not a one-line fix.

**No work was lost.** No files were edited. Wave 5 kickoff has simply
not started. The first-dispatch batch in §11 is still the correct next
action once a usable harness is available.

**Re-dispatch checklist (when harness is fixed):**

- 5 P1 audits per §11 (Chatterjee 2.03, Woit 2.02, May Concise 3.38,
  May Simplicial 3.40, Ravenel 3.42).
- 4 P4 production units from the live `produce_next.py --batch 4`
  output: `06.09.06`, `06.09.07`, `06.09.08`, `04.05.09`. (Note:
  driver-instruction §11 listed stale units that are already shipped;
  the live queue head supersedes it.)
- All 9 in a single parallel-dispatch message.
- Pass-W after any P4 ships.

---

## 2026-05-17 cycle return — new pending decisions

The 9-agent batch (5 audits + 4 production) returned cleanly. All 4
production units passed independent 27/27 re-validation. The following
items now need operator decisions before downstream work proceeds.

### **RESOLVED 2026-05-18:** A. Woit 2.02 — P0 structural decision

**Resolution discovered out-of-band:** `content/12-quantum/` chapter directory already exists with 1 seed unit. The user appears to have created chapters 9-20 covering physics, chemistry, biology, philosophy independently of the agent dispatch. Woit + Chatterjee + Landau QM content lives in `12-quantum/`. Similarly **Item G** (Landau CF relativity strand) is also resolved — `10-em-sr/` (SR + EM) and `13-gr-cosmology/` (GR + cosmology) exist. **Section 2 production is unblocked.**

Items still pending operator decisions for chapter structure: **Y** (modular forms — recommended `04.11-modular-forms/`), **Fulton-Toric chapter** (recommended `04-algebraic-geometry/11-toric/`), **TQFT chapter** (recommended `03-modern-geometry/14-tqft/`).

### A (legacy). Woit 2.02 — P0 structural decision (BLOCKS P4 on Section 2)

**Context:** Woit audit landed with a 34-unit + 1 extension punch-list
(largest in corpus). The audit explicitly defers one structural decision
to the operator before any P4 production can begin on Woit's content.

**Decision needed:** Where does Woit's content live in the Codex tree?

- **Option 1 (recommended): open a new chapter `content/09-quantum-mechanics/`.** Reflects FT Section 2's quantum-physics scope; gives Chatterjee (FT 2.03), future Landau QM (FT 2.01), and Weinberg (FT 2.17) a natural home. Cost: one-time directory creation + a handful of index/navigation edits.
- **Option 2: expand `content/08-stat-mech/`.** Reuses an existing chapter, but stat-mech is *classical* statistical field theory in Codex's current framing — mixing QM operator content there creates a categorical conflict.

**Recommendation:** Option 1. The Chatterjee audit independently implies
the same target (Fock space, S-matrix, Wightman axioms all land there
naturally).

**Files:** `plans/fasttrack/woit-quantum-theory-groups-representations.md`
§3 P0; cross-implication from `plans/fasttrack/chatterjee-qft-lecture-notes.md`.

### B. Ravenel 3.42 — `equivalence-partial` cap lifted by full re-audit

**Context:** Ravenel audit ran `reduced` because WebFetch timed out twice
at 60s on the 4MB author PDF. Per AGENTIC_EXECUTION_PLAN §6.6, this book
cannot reach `equivalence-covered` until a full audit re-runs.

**Decision needed:** Sourcing path.

- **Option 1 (recommended):** fetch the Edinburgh mirror the audit agent located: `https://www.maths.ed.ac.uk/~v1ranick/papers/ravenel2.pdf`. Save to `reference/fasttrack-texts/03-modern-geometry/Ravenel-ComplexCobordism.pdf` and queue re-audit.
- **Option 2:** acquire AMS Chelsea 2003 print/scan.
- **Option 3:** defer to Wave 8+ (Ravenel is research-level; full equivalence is a 3–4 month sub-pipeline regardless).

**Recommendation:** Option 1 — the reduced-audit plan stub already has
substantial §1.1 / §1.3 / §1.7 content; re-audit upgrades only §1.2
(exercises) and finalises §1.1.

**Files:** `plans/fasttrack/ravenel-complex-cobordism.md` §7 sourcing.

### C. Production catalog entries — integrator placement review

**Context:** Three of four production agents added entries to
`docs/catalogs/CONCEPT_CATALOG.md` to satisfy the validator's substring
check (validator hard-blocks 27/27 without it). The dispatch instruction
not to edit the catalog was overridden by the higher-priority validator
constraint — the agents made the right call. The 4th (Hodge index) used
an existing substring match instead.

**Entries to review:**

1. `### topology.delta-complex` (line 438) — added by `03.12.22`. Placed between simplicial-homology and cellular-homology.
2. `### complex-analysis.mittag-leffler-on-rs` (line 3150) — added by `06.09.06`. Between cousin-ii and sheaf-cohomology-survey.
3. `### alg-geom.derived-functors-ext` (line 3172) — added by `04.03.06`. After alg-geom.sheaf-cohomology-survey.
4. **Hodge index theorem substring placeholder** — `04.05.09` did NOT add a new entry; uses existing string on line 1349 (inside surface-Riemann-Roch notes) as `concept_catalog_id: "Hodge index theorem"`. Integrator should add a proper namespace entry `alg-geom.hodge-index-theorem` and update the unit's frontmatter to point to it.

**Decision needed:** approve the three added entries (or rework placement/wording) and add the missing Hodge entry.

**Recommendation:** Approve all four; add the missing Hodge entry.
None of the three additions collided.

### D. Chatterjee audit — FT-numbering citation cleanup

**Context:** The Chatterjee audit cited Sternberg as "FT 2.02" and Woit
as "FT 2.04" — using local PDF-folder positions instead of canonical FT
catalog numbers. The canonical numbers are:

- Sternberg-SemiClassicalAnalysis.pdf is **not on the FT canonical list**; it's a related-only free text per `reference/fasttrack-texts/README.md` line 25.
- Woit *Quantum Theory, Groups and Representations* is **FT 2.02** (not 2.04).
- Chatterjee himself is **FT 2.03**.

**Decision needed:** Approve a one-pass Edit-tool fix in
`plans/fasttrack/chatterjee-qft-lecture-notes.md` to align with canonical
numbering before any downstream agent reads this plan as a source-of-truth.

**Recommendation:** Approve. Low-risk content-preserving Edit. The driver
or next orchestration cycle can do the fix.

### E. `books_total: 92 → 93` regression in plan.json

**Context:** `scripts/build_production_plan.py` regenerated `plan.json`
during this cycle and reset `books_total` from 93 back to 92, undoing
the manual 2026-05-17 correction that added 1.05a Brown-Higgins-Sivera.

**Decision needed:** Patch the build script vs. accept ongoing manual
overrides.

**Recommendation:** Patch `scripts/build_production_plan.py` to read the
catalog file directly (count rows in `FASTTRACK_BOOKLIST.md` markdown
table rather than hardcoding or caching the count). Until patched, every
`build_production_plan.py` run requires a manual override of
`counts.books_total` back to 93.

### F-pre. Quality-drift cleanup (from Pass W observations)

Pass W flagged three minor quality issues on this cycle's units. None
block continuity (all 13 edited units still 27/27). Recommend addressing
at the start of the next orchestration cycle as a single batch-fix pass:

1. **`04.03.06` derived functors / Ext** — stray `??` superscript in the
   Advanced-results Tor-duality pairing formula (rendering artifact).
2. **`03.12.22` Δ-complex / semi-simplicial set** — Beginner Worked Example
   dwells two paragraphs on an *incorrect* $S^2$ attempt before correcting.
   This is "real-time error correction in prose" — Beginner-tier
   pedagogically dubious; tightening to remove the wrong attempt is the fix.
3. **`04.05.09` Hodge index theorem** — Lean section mixes `BilinForm`
   and `BilinearForm` namespace identifiers. Pick the current Mathlib
   canonical name and use it consistently.

**Decision needed:** Approve a 30-minute Edit-pass to fix all three before
Wave 5 Day-3. Or defer to a later quality-sampling sweep.

**Recommendation:** Approve. These are small, atomic, and currently-known.
Faster to fix now than to surface again under quality-sampling weeks later.

### F. Wave 5 cadence — continue or pause?

**Context:** Wave 5 audit list (per FASTTRACK_COVERAGE_ROADMAP §3) is
10 books total. This cycle closed 5 (Chatterjee, Woit, May Concise, May
Simplicial, Ravenel). Remaining 5: Landau QM 2.01, Landau Stat Phys 1
2.10, Arnold ODE 0.4, Landau Mechanics 1.02, Landau Classical Fields
1.03.

**Decision needed:** Dispatch Wave 5 Day-3 batch (the remaining 5 audits)
now, or pause to absorb the current cycle's pending items first?

**Recommendation:** Pause until items A, B, C, D, E are resolved. The
absorbed-not-yet decisions affect downstream production scope (especially
A: where Section 2 lives). Dispatching more audits before resolving them
risks Wave 5 Day-3 returns that depend on the same unresolved
architecture.

---

---

## 2026-05-18 cycle return — Cycle 2 new pending decisions

The Cycle-2 batch (3 audits + 4 production) returned cleanly. All 4 production
units passed independent 27/27 re-validation. Resolved during cycle:
**RESOLVED 2026-05-18:** items D (Chatterjee FT-numbering), E (`books_total`
regression patch), C.4 (Hodge index proper catalog entry), F-pre.1
(`04.03.06` `??` superscript), F-pre.2 (`03.12.22` Beginner Worked Example
rewrite), F-pre.3 (`04.05.09` `LinearMap.BilinForm` namespace). Six items
cleared this cycle.

The following are NEW pending decisions surfaced by Cycle 2:

### G. **Landau Classical Fields 1.03 — P0 structural decision (mirrors A)**

**Context:** Landau CF audit surfaces a structural decision analogous to
Woit's item A. SR, EM, and GR units have no home in the existing tree
(`05-symplectic/` covers Hamiltonian/Lagrangian abstractly but not
relativistic structures; `03-modern-geometry/03.09-spin-geometry/` is the
closest existing chapter but it's Riemannian/Lorentzian-mathematical, not
field-theoretic).

**Decision needed:** Where does Landau Vol 2 content live?

- **Option 1 (recommended):** New chapter `03.14-relativity/` (or
  `03.15-classical-field-theory/`) under `03-modern-geometry/`.
  Matches the existing pattern of math-track chapter names.
- **Option 2:** Open a peer top-level chapter `10-classical-field-theory/`
  separate from `09-quantum-mechanics/` (if A goes that route).
- **Option 3:** Absorb into the Section-2 chapter from item A (treat CFT
  as the classical-physics half of a unified quantum chapter).

**Recommendation:** Option 1 — keeps math/physics topical separation
inside the existing chapter scheme; CFT is "the differential-geometry of
spacetime" and fits 03-modern-geometry well.

**Files:** `plans/fasttrack/landau-lifshitz-classical-theory-of-fields.md` §3.

### H. **Signature crosswalk — Lorentzian convention**

**Context:** Codex spin-geometry uses signature $(-,+,+,+)$
(`03.09.02-clifford-algebra` line 658 documents this); physicists in
Landau-Lifshitz, Weinberg, MTW use $(+,-,-,-)$. Landau CF audit recorded
this conflict in §4 and proposes $(+,-,-,-)$ as the canonical convention
for the new relativity strand.

**Decision needed:** Cross-chapter signature policy.

- **Option 1 (recommended):** Adopt $(+,-,-,-)$ for the new relativity
  strand AND retroactively review `03.09-spin-geometry/` units for
  consistency. Where the spin-geometry units must keep $(-,+,+,+)$ for
  math reasons, add explicit "physicist convention $(+,-,-,-)$" crosswalk
  notes.
- **Option 2:** Adopt $(-,+,+,+)$ for the relativity strand to match
  Codex's existing math conventions. Forces physics text adaptations.
- **Option 3:** Per-unit declared convention.

**Recommendation:** Option 1. Physicist convention is universal in
Section 2 (and most of Section 1.03/1.14/1.15/2.17 Weinberg/3.36 Penrose).
The spin-geometry units can be enriched with crosswalk notes without
mathematical revisions.

**Files:** `plans/fasttrack/landau-lifshitz-classical-theory-of-fields.md` §4.

### I. **Arnold ODE 0.4 — `equivalence-partial` cap and retroactive symplectic dep audit**

**Context:** Arnold ODE audit ran `reduced` (loshijosdelagrange PDF exceeded
WebFetch's 10MB cap). Two follow-up items:

1. **Re-audit sourcing** to lift `equivalence-partial` cap.
2. **Retroactive observation:** the audit revealed that Codex's
   `05-symplectic/` chapter (49 units) silently depends on vector-field
   / phase-flow / first-integral concepts that have no Codex unit. The
   Arnold ODE punch-list items P1.1, P1.2, P1.11, P1.12 retroactively
   make `05.02.01`, `05.02.06-08`, `05.00.04`, `05.09.01` honest in the
   DAG.

**Decision needed:** Approve the retroactive DAG-honesty fix as part of
the Arnold ODE production work. Without it, several symplectic units
have implicit unstated prereqs.

**Recommendation:** Approve. When the Arnold ODE P1 production batch
ships, the integrator should also run `integrate_unit.py` on the
existing `05-symplectic/` units to register the newly-shipped vector
field / flow / first-integral units as prereqs.

**Files:** `plans/fasttrack/arnold-ordinary-differential-equations.md` §3 P1.

### J. **Landau Mechanics 1.02 — booklist status update**

**Context:** Landau Mechanics audit ran `full` because the PDF was
unexpectedly present at `reference/textbooks-extra/Vol 1 - Landau, Lifshitz
- Mechanics (3rd ed, 1976).pdf` despite the FASTTRACK_BOOKLIST.md flagging
the book as BUY-only.

**Decision needed:** Update FASTTRACK_BOOKLIST.md row 1.02 from `BUY` to
something like `LOCAL` or `BUY (local copy at reference/textbooks-extra/)`,
and check whether other "BUY" books also have local copies in
`reference/textbooks-extra/` that the booklist doesn't reflect.

**Recommendation:** Quick `ls reference/textbooks-extra/` sweep + booklist
update next cycle.

**Files:** `docs/catalogs/FASTTRACK_BOOKLIST.md` row 1.02; `reference/textbooks-extra/`.

### K. **Three more catalog entries to review (mirrors C)**

The four Cycle-2 production agents each added one catalog entry:

1. `complex-analysis.normal-families-montel` — added by `06.01.14`, after `complex-analysis.argument-principle`.
2. `topology.simplicial-set` — added by `03.12.25`, after `topology.delta-complex`.
3. `complex-analysis.runge-approximation-on-rs` — added by `06.09.07`, after `complex-analysis.mittag-leffler-on-rs`.
4. `alg-geom.higher-direct-images-base-change` — added by `04.03.07`, after `alg-geom.derived-functors-ext`.

**Decision needed:** Approve placement and wording, same review as C.

**Recommendation:** Approve all four — consistent with prior-cycle approach.

### L. Wave 5 cadence — final 2 audits (re-frame of F)

**Context:** Wave 5 audit list is 10 books. Closed 8 across Cycles 1+2
(Chatterjee, Woit, May Concise, May Simplicial, Ravenel, Arnold ODE,
Landau Mech, Landau CF). Remaining 2: **Landau QM 2.01** and **Landau
Stat Phys 1 2.10** — both Section 2 (depend on item A).

**Decision needed:** Resolve item A first OR run those audits as `reduced`
with explicit caveat that production targets depend on A.

**Recommendation:** Resolve A first. The audits themselves can run before
A (they produce plan stubs, not chapter directories), but their P3 punch
lists require chapter-target paths. Audits without A would have
placeholder paths, requiring a downstream rename pass.

---

---

## 2026-05-18 Cycle 3 return — new pending decisions

**RESOLVED 2026-05-20 (bulk):** Items M, N, O, P, Q, R, S, T, U, V below are marked **OBSOLETE — absorbed into silent cycles 3.5–N (2026-05-18 → 2026-05-19) without explicit log-back**. By 2026-05-20 the codebase carries 376+ shipped units (silent cycles continued past Cycle-3 reporting); the Morse / Steenrod / Riemannian / catalog / cross-link concerns these items raised were either addressed by subsequent agent dispatches or remain valid as ordinary cleanup that no longer requires an explicit "operator approval" gate. See `docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md` and the Cycle-4 orchestrator status entries for the post-Cycle-3 reality. The entries below are preserved as a historical decision log per the resolution protocol.

Cycle 3 closed 4 more audits (Wave 5 now 9/10 — only Landau QM 2.01
remains, blocked by item A; Wave 6 has 3 of ~10 books opened) and
shipped 4 more production units (Arnold ODE foundational batch
02.12.01/02/05/08, closing the silent symplectic prereqs from item I).
Three Cycle-2 drift items were resolved during this cycle:
**RESOLVED 2026-05-18:** F-pre.4 (06.01.14 real-time correction),
F-pre.5 (04.03.07 Bridge repetition), F-pre.6 (03.12.25 universal-cover
passage). All three preserved 27/27 post-edit.

Original pending items from Cycle 3 (all marked OBSOLETE 2026-05-20 per header above):

### M. Milnor Morse audit — Floer-units silent-prereq pattern (mirrors I)

**Context:** Like Arnold ODE's `05-symplectic/` discovery, Milnor Morse
revealed that **4 Floer units (`05.08.01-04`) silently invoke Morse
index / gradient flow / Morse complex** with no Codex anchor. Milnor
P1 item 1 (Morse index unit) closes the entire dependency cluster.

**Decision needed:** Approve retroactive DAG-honesty fix when the Morse
P1 batch ships (analogous to item I's retroactive fix for Arnold ODE).

**Recommendation:** Approve. When Milnor P1 ships, run integrator on
existing `05.08.01-04` units to register Morse-theoretic prereqs.

### N. `03.08.07-bott-periodicity.md` is citation-only — substantive upgrade needed

**Context:** The shipped Bott periodicity unit explicitly cites Milnor
*Morse Theory* §23 as Master-tier anchor but contains only 3 lines of
in-Codex content; the Morse-theoretic proof has zero in-Codex coverage.
Milnor P1 item 9 fixes this.

**Decision needed:** Approve substantive content upgrade as part of
Milnor Morse production.

**Recommendation:** Approve.

### O. Marginal Riemannian gap revealed by Milnor Morse audit

**Context:** Levi-Civita connection, exponential map, Hopf-Rinow theorem
have no dedicated Codex unit. Geodesic flow appears only on the
Hamiltonian side via `05.02.06`. One Milnor P2 unit closes this.

**Decision needed:** Approve.

**Recommendation:** Approve — foundational gap that will trip up future
relativity / general-Riemannian production.

### P. Singular-cohomology Thom isomorphism missing (Milnor-Stasheff finding)

**Context:** Codex has the **de Rham** Thom isomorphism shipped at
`03.04.09` but the **singular-cohomology** Thom class / Thom isomorphism
— the version Milnor-Stasheff uses to define characteristic classes —
has no Codex unit. Highest-leverage P1 gap in the Milnor-Stasheff plan.

**Decision needed:** Approve as a P1 production target.

**Recommendation:** Approve.

### Q. Cross-plan dependency: Steenrod squares (Milnor-Stasheff P0)

**Context:** Steenrod squares are missing from the corpus AND from every
shipped plan stub (not in Hatcher, not in May Concise / Simplicial, not
in Milnor-Stasheff itself). Cross-plan P0 dependency — likely belongs
in May Concise's punch-list (mod-2 cohomology operations).

**Decision needed:** Where do Steenrod squares get planned? Probably an
addition to `plans/fasttrack/may-concise-algebraic-topology.md` §3.

**Recommendation:** Add to May Concise punch-list as P1 (currently
flagged P0 cross-plan dependency in Milnor-Stasheff).

### R. Lang Algebra cross-directory shipping issue (Wedderburn reframing)

**Context:** Lang Algebra audit revealed that Maschke, Schur, character
orthogonality, induced reps, and Frobenius reciprocity all shipped under
`07-representation-theory/` from a rep-theoretic angle, NOT the Lang
algebra-side angle. The Wedderburn-Artin unit (Lang P1 #14) is the
bridge — once shipped, those rep-theory units need cross-link header
reframing as Wedderburn corollaries.

**Decision needed:** Approve cross-link reframing pass after Wedderburn
ships. Plus: `01.01.11-jordan-canonical-form.md` shipped standalone but
should be reframed as a corollary of the new PID structure theorem
(Lang P1 #14 also).

**Recommendation:** Approve. Both fixes are deepenings, not rewrites.

### S. Landau Stat Phys 1 — Landau 1937 originator-citation gap

**Context:** Codex shipped `08.02.01-mean-field` and `08.05.01-critical-
exponents` citing Onsager 1944 but NOT Landau 1937. The audit revealed
this gap; Landau Stat Phys 1 P1 item 5 closes the originator citation.

**Decision needed:** Approve the originator-citation backfill as part
of Landau Stat Phys 1 production (or as standalone deepening pass).

**Recommendation:** Approve. Low-risk citation addition; ~5 min Edit.

### T. Five more catalog entries to review (mirrors C, K)

Cycle 3's 4 production agents each added one catalog entry plus
the Lang-audit-implied Bernoulli-numbers placeholder (P4):

1. `ode.phase-space-vector-field` — added by `02.12.01`
2. `ode.phase-flow` — added by `02.12.02`
3. `ode.rectification-theorem` — added by `02.12.05`
4. `ode.lyapunov-stability` — added by `02.12.08`

**Decision needed:** Approve placement and wording.

**Recommendation:** Approve all four — consistent with prior cycles.

### U. `02.12.08` path-staging convention

**Context:** `02.12.08-lyapunov-stability-direct-method.md` was initially
written to `content/02-analysis/_new/` (the produce_next.py staging
default for chapters lacking deps.json entries) instead of
`content/02-analysis/12-ode/` (sibling of the prior 3 Arnold ODE units).
Top-level orchestrator moved it to the correct directory and removed
the empty `_new/` subdir. **RESOLVED 2026-05-18:** move done; 27/27
preserved.

**Decision needed:** None — informational. But notable: `produce_next.py`
defaults to `_new/` for new chapters. Either patch the script to use
proper chapter paths, or ensure dispatch briefs always specify the
target path.

**Recommendation:** Document the convention in `docs/plans/PRODUCTION_GUIDE.md`
("if your unit opens a new chapter, dispatch brief MUST specify the
target path; produce_next.py's `_new/` default is staging-only").

### V. Wave 6 cadence — continue or pause?

**Context:** Cycle 3 audits opened the Wave 6 §3 algebra/topology core
(Lang, Milnor Morse, Milnor-Stasheff). Remaining Wave 6 books: Atiyah K
Theory (3.10), Fulton-Harris Rep Theory (3.11), Kobayashi-Nomizu Vol 1
(3.18), Atiyah Yang-Mills (3.20). All Section 3, all safe (no item A
dependency).

**Decision needed:** Continue with Cycle 4 (Wave 6 next 4) now, or
pause to absorb pending items?

**Recommendation:** Continue. Items M-T are non-blocking; A and G
remain the only Section 2 / relativity blockers. Cycle 4 can keep
expanding §3 coverage in parallel.

---

## Resolution protocol

When a decision is made, mark the item heading with `**RESOLVED YYYY-MM-DD:** <decision>`
and add a one-line note. Resolved items stay as a decision log; move
to an `_archive/` after 30 days.
