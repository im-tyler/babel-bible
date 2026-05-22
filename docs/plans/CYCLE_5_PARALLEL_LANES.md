# Cycle 5 — Parallel Lanes Orchestration

**Drafted 2026-05-20** for two Claude Code terminal sessions running concurrently in the B.I.B.L.E repo. This document is both the **coordination protocol** AND the **boot prompt** for the second session. If you are a Claude Code session that Tyler just opened and pointed at this file: **read this file fully, then act as the chem/bio/phys lane orchestrator described in §3.**

The math-lane session (started 2026-05-19) shipped Cycle 4 and the structural-cleanup pass; the second (chem/bio/phys) session is opening Cycle 5 on the chem/bio/phys axis. Both run agentically — each session is itself an orchestrator that dispatches sub-agents per the §6 dispatch protocol.

---

## §1 Project orientation (assume nothing — read in full)

You are working on the **B.I.B.L.E project (Babel Bible curriculum framework)**. Project root: `/Users/tyler/Documents/Code Projects/B.I.B.L.E/`. The project is a tiered, multi-domain mathematical-knowledge framework — every unit ships with Beginner / Intermediate / Master tiers, anchored to canonical textbooks, validated against a 27-point structural rubric (`scripts/validate_unit.py`), and (for math/theoretical-physics) accompanied by a Lean 4 formalization.

Before doing any work, read in this order:

1. `docs/plans/AGENT_PRODUCTION_PLAYBOOK.md` (the canonical playbook — tier definitions, 7-section template, no-compromise quality contract, dispatch protocol, sub-agent rules, validator gates).
2. `docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md` (the math-style contract — note §2 revised: bio/chem/applied-physics is **prose-first**, Lean optional, 6000+ words, multi-section Master).
3. `docs/plans/PRODUCTION_RUNBOOK.md` (operational checklist for producing a unit end-to-end).
4. `manifests/orchestrator_status.md` (most recent cycle returns — start of session orientation).
5. `manifests/skipped_units.md` (T1-only backlog — important for the math lane; less so for chem/bio/phys but still worth knowing).
6. `manifests/pending_approvals.md` (mostly historical; resolved 2026-05-20 bulk-mark).

**The math-style contract for your lane (chem/bio/phys, §2 revised):**

> - 7-section Beginner/Intermediate template present.
> - **Lean optional.** Declare `lean_status: none` + `lean_mathlib_gap` rationale + `human_reviewer: Tyler (pending external <domain> reviewer)`. Add Lean only when it formalizes a substantive claim (e.g., a Wright-Fisher u(p) inequality, a kinetic ODE existence). Do NOT shoehorn category theory into a chem unit.
> - **Master tier with ≥ 3 named H2 sub-sections**, each substantively developed prose. This is the primary style-parity lift — single-sub-section Master is the existing gap you're closing.
> - **Word count ≥ 6000 for new production; ≥ 8000 for deepening.**
> - `validate_unit.py` returns 27/27 (exit 0).
> - Bio/chem/applied-physics units are **prose-first**: words convey the mechanism, equations and Lean appear where they add explanatory force, not as decoration.

---

## §2 Current state of the corpus (verified 2026-05-20)

- **Total shipped units: 376+** (last logged in plan.json; corpus has grown since).
- **All 58 Fast Track books audited** (`books_unaudited: []`).
- **Cycle 4 just shipped** 6 units at 27/27 across math/bio/chem (KR-theory, φ⁴, natural selection deepened, hydrogen QM deepened, Wright-Fisher new, MAPK new).
- **Pass-W after Cycle 4** stitched 11 reciprocal cross-links with no regressions.
- **Layer-A cleanup (2026-05-20) done:** deps.json pending list backfilled, CONCEPT_CATALOG.md missing entries added, 17.07.01 reference flag fixed, 19/19 verified units pass 27/27.

**Structural collisions still open** (math-lane will handle, do not touch):

- `12-quantum/02-formalism/12.02.01-*.md` vs `12-quantum/02-hilbert-formalism/12.02.01-*.md` (duplicate ID, same topic, different lengths).
- `12-quantum/03-time-evolution/12.03.01-*.md` vs `12-quantum/03-fock-spaces/12.03.01-*.md` (duplicate ID, different topics).
- `09-quantum-theory/` (2 units, math-track Woit-style QM) shares Chapter 9 with `09-classical-mech/`.
- `11-thermodynamics/` (1 unit Souriau-Gibbs) shares Chapter 11 with `11-stat-mech-physics/`.

**Math-lane session owns these fixes.** Chem/bio/phys lane: avoid editing files in `12-quantum/02-formalism/`, `12-quantum/02-hilbert-formalism/`, `12-quantum/03-fock-spaces/`, `12-quantum/03-time-evolution/`, `09-quantum-theory/`, `11-thermodynamics/` until math-lane signals the cleanup commit has landed.

---

## §3 Lane ownership

| Lane | Owner | Content sections | Exemptions |
|---|---|---|---|
| **Math** | Session A (math-lane orchestrator) | `content/00-precalc/` through `content/07-representation-theory/` | All structural-cleanup files in §2 |
| **Chem/Bio/Phys** | Session B (you, if you're reading this as a freshly-opened terminal) | `content/08-stat-mech/`, `09-classical-mech/`, `10-em-sr/`, `11-stat-mech-physics/`, `12-quantum/` (except the §2 collision files), `13-gr-cosmology/`, `14-genchem-pchem/`, `15-orgchem/`, `16-inorgchem/`, `17-mol-cell-bio/`, `18-organismal-bio/`, `19-eco-evo-bio/`, `20-philosophy/` | Files explicitly excluded in §2 |

**Lean modules** follow content: math units' Lean lives in `lean/Codex/Foundations/`, `lean/Codex/Analysis/`, etc.; physics units in `lean/Codex/Quantum/`, `lean/Codex/ClassicalMech/`, etc. The Lean namespace `Babel Bible.*` is the project's Lean library name and stays globally consistent.

**Shared files** (both lanes append, conflicts resolved on commit-then-pull-rebase):

- `docs/catalogs/CONCEPT_CATALOG.md` — append entries for new concepts; both lanes add their entries.
- `manifests/deps.json` — append IDs to `pending` and `shipped` lists; let `scripts/integrate_unit.py` reconcile.
- `manifests/skipped_units.md` — append-only; strike-through when an item is produced (per playbook §18.4).
- `manifests/weaving_report.md` — append Pass-W reports per cycle.
- `manifests/orchestrator_status.md` — append cycle reports per lane; tag with "Math lane Cycle N" or "Chem/Bio/Phys lane Cycle N".
- `docs/catalogs/FASTTRACK_BOOKLIST.md` — read-only unless a booklist edit is needed.

---

## §4 Coordination protocol

### 4.1 Commit / pull / push cadence

- **Pull before starting a cycle.** `git pull --rebase origin main` before dispatching any agents.
- **Commit after each cycle.** A "cycle" = one batch dispatch (4–6 units) + their validator passes + Pass-W stitching.
- **Push immediately after commit.** Don't let local diverge from remote by more than one cycle.
- **If pull-rebase hits a conflict**, do NOT auto-resolve. Pause and ping Tyler with a short message naming the conflicting files. Conflicts will almost always be in the shared files (§3) — they're benign (both sides appended), but human review is faster than scripted reconciliation.

### 4.2 Shared-file editing rules

- **deps.json**: append IDs only; never reorder existing entries. JSON keys preserved.
- **CONCEPT_CATALOG.md**: append `### namespace.id` blocks at the end of the file. Don't insert mid-file (avoids merge conflicts).
- **skipped_units.md**: append session-headed sections at the end. Strike-through line edits OK for items your lane produces.
- **weaving_report.md**: append per-cycle entry at end.
- **orchestrator_status.md**: append per-cycle entry at end with lane tag.

### 4.3 Cross-lane stitching

Pass-W cross-links **across lanes** (e.g., a Math-lane unit citing a Chem-lane unit, or vice versa) are sometimes necessary. Rules:

- If your cycle's unit *cites* a unit in the other lane, that's fine — frontmatter `prerequisites:` or in-prose `[citation]` references are one-way and don't require touching the cited file.
- If your cycle's unit needs *reciprocal* outbound stitching from a unit in the other lane (i.e., the other-lane unit should add an "and see [your unit]" entry in its Connections section), include it in your Pass-W agent's brief but **flag the cross-lane edit** in the report. Wait to commit until you've verified the other-lane unit's owner has the latest pull.
- Or simpler: add the outbound stitch IF the file is unambiguously stable (no recent edits from the other lane), AND tag the commit with `cross-lane stitch` so the other lane reviews.

### 4.4 Naming new sub-chapters

If your lane needs to open a new sub-chapter (e.g., `19-eco-evo-bio/11-population-ecology/`), check first whether it already exists with a different slug. Use `ls content/<section>/` to scan. Avoid the structural collisions in §2.

---

## §5 Boot brief: what to do in your first Cycle 5 dispatch

If you are Session B opening Cycle 5 chem/bio/phys, here's the recommended slate. Dispatch all 4-6 in a single parallel-Agent message after orientation:

### 5.1 Track B — deepenings (existing thin units → math-style depth)

| Unit | Current state | Target |
|---|---|---|
| `19.01.01` Hardy-Weinberg | (check current state — likely 3000–4500w, Master single section) | 8000w, 3+ Master sub-sections (selection coupling, drift in finite populations, multi-locus extension, connection to Wright-Fisher 19.02.05) |
| `17.02.01` Cell membranes structure | (similar state) | 8000w, 3+ Master sub-sections (membrane proteins as 7TM/single-pass classes, lipid rafts and microdomains, mechanotransduction, membrane biogenesis) |
| `15.04.02` SN1 vs SN2 (already a sibling unit at 3500w-ish) | Single Master section | 8000w, 4 Master sub-sections (carbocation rearrangements, solvent effects in detail, neighboring-group participation, asymmetric variants with chiral auxiliaries) |

### 5.2 Track C — new production at math-style depth

| Unit | Where it lives | Why |
|---|---|---|
| `16.04.01` Coordination compounds (or next gap) | `16-inorgchem/04-coordination/` | Inorganic chem is the thinnest chapter family (8 units in 7 sub-chapters). Coordination chemistry is high-leverage — connects to crystal-field, bioinorganic, organometallic. |
| `18.05.01` Action potentials and the Hodgkin-Huxley model | `18-organismal-bio/05-nervous-system/` | Organismal bio has 8 units across 7 chapters — gaps everywhere. Hodgkin-Huxley is the highest cross-domain-density topic (ODE + ion electrochem + bio mechanism). |
| `12.07.02` Time-dependent perturbation theory and Fermi's golden rule | `12-quantum/07-perturbation/` | 12.07.01 (time-independent) shipped; the time-dependent companion is the natural deepening + standard QM textbook content. |

### 5.3 Dispatch each agent with the §5.1 contract from CYCLE_4

Each agent brief should include:
- Working dir: `/Users/tyler/Documents/Code Projects/B.I.B.L.E/`
- Required reading: `docs/plans/AGENT_PRODUCTION_PLAYBOOK.md` §1–§4, `docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md` §2 + §5.1
- Sibling-unit style reference (a 27/27-passing same-chapter unit)
- The hard requirements (7-section template, Lean optional per §2, ≥3 Master sub-sections, 6000+ words, 27/27 validator, prose-first)
- Run `python3 scripts/validate_unit.py <path>` until 27/27 before returning
- Report word count, validator status, Master sub-section list, catalog edits, Lean decision

### 5.4 After dispatch: re-validate, then Pass-W, then commit

1. **Independent re-validation.** Don't trust agent self-reports — run validator yourself on every returned file. If any fails 27/27, re-dispatch that agent with the specific failure.
2. **Pass-W.** Dispatch one Pass-W agent with the cross-stitch list you've identified. Cross-lane stitches per §4.3.
3. **Commit** with a structured message naming the cycle and units.
4. **Push to Forgejo origin/main.**

---

## §6 Dispatch protocol (sub-agent template)

The math-lane session uses this template; copy and adapt:

```text
You are producing a single Babel Bible unit for the B.I.B.L.E project. Cycle 5, Track B/C, lane chem-bio-phys.

Working directory: /Users/tyler/Documents/Code Projects/B.I.B.L.E/

Required reading:
1. docs/plans/AGENT_PRODUCTION_PLAYBOOK.md §1-§4
2. docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md §2 (note bio/chem prose-first) and §5.1
3. [sibling-unit style reference, full path]

Target unit:
- ID: NN.NN.NN
- Title: [title]
- Path: content/[section]/[chapter]/NN.NN.NN-[slug].md
- Section: [section], chapter: [chapter]
- Concept catalog ID: [namespace.id] (add to docs/catalogs/CONCEPT_CATALOG.md if missing — validator gate overrides "don't edit catalog" rule)

Topic anchor: [primary textbook references with chapter/page citations]

Hard requirements (failure = re-do, not partial accept):
1. 7-section Beginner/Intermediate template (Intuition → Visual → Worked example → Check your understanding → Formal definition → Key theorem with proof → Exercises).
2. Lean section: OPTIONAL for this lane. Default to `lean_status: none` with substantive `lean_mathlib_gap` + `human_reviewer: Tyler (pending external [domain] reviewer)`. Only add Lean if it formalizes a substantive claim non-decoratively.
3. Master tier with ≥ 3 named H2 sub-sections, prose-first.
4. Word count ≥ 6000 (new) or ≥ 8000 (deepening).
5. python3 scripts/validate_unit.py <path> returns 27/27 (exit 0). Fix in-loop, don't return until clean.
6. No emojis, no prohibited phrasings (obviously, clearly, trivially, simply, non-trivial, etc.), paragraphs ≤ 250w, Beginner paragraphs ≤ 120w with no proof language / no advanced formal notation, ≥1 image/diagram reference in Beginner.
7. Frontmatter mirrors [sibling-unit].

Workflow:
1. Read all required materials.
2. Draft unit at target path.
3. Add catalog entry if needed (append at end of CONCEPT_CATALOG.md).
4. Run validator until 27/27.
5. Return short report (word count, validator status, Master sub-section list, catalog edits, Lean decision).

Do NOT return until 27/27. Do NOT pad for length.
```

---

## §7 What success looks like for Cycle 5 (chem/bio/phys lane)

After this cycle ships:

- 3 thin bio/chem units brought to math-style depth (deepenings: 19.01.01, 17.02.01, 15.04.02 or substitutes).
- 3 new bio/chem/phys units shipped at full 6000+ word depth (16.04.01, 18.05.01, 12.07.02 or substitutes).
- Bio Master-sub-section depth: median 1 → 3+ across the lane (style-parity contract scaling).
- Chem 15-orgchem / 16-inorgchem coverage starts closing.
- Forgejo origin/main accepts the push cleanly with no cross-lane conflicts.
- Pass-W cross-stitches recorded in `weaving_report.md`.

If any agent returns with quality below the §5.1 contract, **re-dispatch that specific unit** with the failure noted — do NOT accept a half-depth ship. Quality contract beats throughput.

---

## §8 Session B boot script (copy into your terminal if you are Session B)

```text
Read docs/plans/CYCLE_5_PARALLEL_LANES.md fully. You own the chem/bio/phys lane (§08-20).
Pull origin/main, run dashboard to check current state, then dispatch your Cycle 5 batch per §5.
Validate everything 27/27 yourself before returning. Pass-W after. Commit + push when clean.
Don't touch the structural-cleanup files listed in §2 — math-lane handles those.
```

Tyler can paste that script into the second terminal and the session boots into the chem/bio/phys orchestrator role.

---

## §9 Math-lane (Session A) next steps

For reference, Session A will be working on:

- Layer A structural cleanup (12.02.01 dedupe; 12.03.01 renumber; 09-quantum-theory rename; 11-thermodynamics merge).
- Layer C math production: Cycle 5 math batch — characteristic-classes T1 cluster (03.06.07 Chern-Simons, 03.06.10 Stiefel-Whitney/Pontryagin numbers, 03.06.11 Hirzebruch signature, 03.06.12 unoriented bordism, 03.06.14 Steenrod squares).

Math-lane runs Pass-W on its own batch separately. Cross-lane stitches per §4.3.

---

## §10 Quality contract reminder

Per `AGENTIC_EXECUTION_PLAN.md` §8 (the no-compromise contract): **never compromise quality for throughput.** If an agent returns at 23/27 or with a missing Master sub-section, re-dispatch. If a cycle takes 60 minutes instead of 40 because two agents needed re-dispatch, that's the correct outcome. If you're moving "fast" but units come back partial — slow down.

Tyler 2026-05-20: "make sure we cover all these subjects in the style and fashion of math … faster while maintaining quality or improving it." The "or improving it" is load-bearing.
