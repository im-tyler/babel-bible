# Codex — Project Plan

Version 0.1 · 2026-04-18

---

## 1. Vision

A single resource that takes a self-taught learner from a minimal prerequisite (high-school algebra + basic functions) to graduate-level mastery across mathematics and physics — with a per-unit rigor toggle so the same corpus serves a curious 15-year-old on Beginner, an undergrad on Intermediate, and a PhD-track learner on Master. Built to supersede every existing roadmap (Fast Track, 't Hooft, Rigetti, Tong's notes) by being structurally better in ways books physically cannot be: cross-linked concept graph, Lean-verified proof practice, progressive rigor disclosure, mastery-gated progression.

---

## 2. Audience & Scope

### Primary learner profile

- Knows high-school algebra, functions, basic geometry
- May or may not have calculus exposure
- Self-directed; no institutional support
- Motivated by either curiosity (Beginner path) or career/research ambition (Master path)

### Tiers (progressive disclosure — see §3)

| Tier | Anchor literature | Endpoint |
|---|---|---|
| **Beginner** | 3Blue1Brown, Strogatz *Infinite Powers* | Scientific literacy; can read popular-science writing with real comprehension |
| **Intermediate** | Axler *Linear Algebra Done Right*, Apostol, Griffiths | Undergrad-textbook mastery; can work exercises, follow derivations |
| **Master** | Lang *Algebra*, Hartshorne, Weinberg, Bott-Tu | Graduate research readiness; can open follow-on research papers |

### Scope v1 (math + physics)

- Fast Track spine (Sections 1–3) + pre-calc ramp for pre-FT entry
- ~80 canonical texts' worth of material, reorganized into ~1000–2000 atomic units
- Each atomic unit covers one concept/theorem/technique across all three tiers

### Explicitly out of scope for v1

- Chemistry, biology, CS (defer to v2+)
- K-8 arithmetic (require basic-algebra entry level; build separate "Codex Foundations" later if needed)
- Credentialing, grading, cohort-style features

---

## 3. Unit Architecture — Progressive Disclosure

Each unit is **one source document** with tier markers. UI filters on tier; the content is single-source-of-truth.

### Required unit structure

```markdown
---
id: 01.01.03
title: Vector space
prerequisites: [01.01.01, 01.01.02]
references:
  - quantum-well: "Mathematical foundations/Algebra/Linear Algebra and Matrix Theory/Vector space.md"
  - tong: "raw/pdfs/vc/vc.pdf#ch1"
  - shilov: "Shilov-LinearAlgebra.pdf#ch1"
lean_module: Codex.LinearAlgebra.VectorSpace
---

## Intuition [Beginner]
Plain-language "what is this and why does it matter" — one or two paragraphs,
heavy on analogy. No formal notation beyond what's already in prior units.

## Visual [Beginner]
Diagram, animation, or 3Blue1Brown-style geometric picture.

## Worked example [Beginner]
A concrete, fully-worked example using everyday quantities.

## Formal definition [Intermediate+]
Axioms, notation, counterexamples. Minimum viable rigor.

## Key theorem with proof [Intermediate+]
The one theorem a reader of Axler would remember. Full proof.

## Exercises [Intermediate+]
3–8 problems. Difficulty ladder.

## Lean formalization [Intermediate+]
Statement + proof in Lean 4 / Mathlib; link to compiled module.

## Advanced results [Master]
Harder theorems, unusual perspectives, connections to deep theory.

## Full proof set [Master]
Formal proofs of advanced results; additional Lean artifacts.

## Historical & philosophical context [Master]
Where did this idea come from? Which mathematicians mattered? What's the
modern generalization?

## Bibliography [Master]
References to primary literature beyond the Codex reference archive.
```

### Tier filter rules

- **Beginner view**: shows only `[Beginner]` sections
- **Intermediate view**: shows `[Beginner]` + `[Intermediate+]`
- **Master view**: shows everything

### Cross-reference system

Every `[concept-X]` inline reference becomes a clickable link to unit `X` (which opens at the reader's current tier). Cross-references span the whole graph — linking from a QFT unit back to the vector-space unit is routine.

---

## 4. Agent Orchestration

Agents are roles, not people. Each role has explicit input/output contracts so any agent swarm can execute.

### Roles

| Role | Input | Output | Tools |
|---|---|---|---|
| **Scanner** | Unit spec (id, concept, prerequisites) | Ranked list of relevant passages from `reference/` archive | RAG retrieval over archive |
| **Producer** | Unit spec + top-N passages from Scanner | Draft unit (all tiers, all sections) | Large-context LLM |
| **Mathematical reviewer** | Draft unit | Pass/fail + flagged errors | Large-context LLM; Lean compiler |
| **Pedagogical reviewer** | Draft unit | Pass/fail + flagged issues against rubric | LLM rated against rubric |
| **Integrator** | Approved unit + neighbor units | Final unit with cross-references resolved, dependency-graph-updated | LLM + graph tooling |
| **Copy editor** | Final unit | Polished unit | LLM for prose quality |

### Handoff contracts

All inter-role handoffs use a canonical manifest (JSON):

```json
{
  "unit_id": "01.01.03",
  "phase": "producer_output" | "review_pending" | "integrated",
  "status": "pass" | "revise" | "fail",
  "flags": [ { "section": "...", "issue": "...", "severity": "..." } ],
  "artifacts": { "md_path": "...", "lean_path": "..." }
}
```

### Parallelization

Units with non-overlapping prerequisites can be produced concurrently. The dependency graph drives scheduling. Initial pilot is serial (10 units, prove the pipeline); production scales via topological-sort batching.

---

## 5. Quality System

### Per-tier rubrics (Machine-checkable where possible)

**Beginner rubric (sample):**
- [ ] No undefined formal notation
- [ ] At least one visual or diagram reference
- [ ] At least one worked example with concrete numbers
- [ ] Reading level ≤ grade 10 (automated check)
- [ ] No proof language (no "∴", "QED", "Proof:")
- [ ] Paragraph length ≤ 120 words

**Intermediate rubric (sample):**
- [ ] Formal definition present and correct
- [ ] At least one theorem with complete proof
- [ ] All proofs either Lean-verified or reviewed by mathematical reviewer
- [ ] Exercise set includes easy/medium/hard
- [ ] References Shilov/Apostol/Axler-level source

**Master rubric (sample):**
- [ ] Coverage of advanced results comparable to the unit's Master-tier anchor text
- [ ] All Master-tier proofs in Lean where Mathlib coverage exists; flagged if not
- [ ] Historical/context section has primary-literature citations
- [ ] Cross-references to downstream graduate topics present

### Correctness verification

- **Lean 4 / Mathlib**: any theorem at Intermediate+ that can be formalized must be formalized. Lean compile = ground truth.
- **Human mathematical review**: domain expert reviews anything Lean can't cover. Budget per unit: ~30 minutes expert time.
- **Automated reference check**: every `[reference: ...]` cite must resolve to an existing file in the archive.

### Consistency checks

- Notation consistency across units (automated: shared notation glossary)
- Prerequisite-chain integrity (every prerequisite listed must be a published unit)
- Tier-section separation (no `[Master]` content leaking into `[Beginner]`)

---

## 6. Pipeline Stages (revised 2026-04-23)

### Phase 0 — Reference archive (DONE)

1 GB archive across 11 sources. `reference/_meta/SOURCES.md`, `TOPIC_INDEX.md` in place.

### Phase 1 — Scaffolding (CURRENT)

1. `OVERVIEW.md` ✓
2. `BRIEF.md` ✓
3. `UNIT_SPEC.md` ✓
4. `PROJECT_PLAN.md` (this document) ✓
5. `DEPENDENCY_MAP.md` — pending
6. `PILOT_PLAN.md` — pending
7. `REVIEWER_PLAN.md` ✓
8. `CONCEPT_CATALOG.md` ✓ (seed entries only for pilot subjects)

**Note on revised ordering:** `QUALITY_RUBRIC.md` is *not* a Phase 1 deliverable. It is distilled after pilot unit #1 produces real failure modes to capture. See Phase 2b below.

### Phase 1.5 — RAG layer (NEW)

Build embeddings + vector store + retrieval API over `reference/` so the Scanner agent role can actually function. Without this, agent production cannot begin. `TOPIC_INDEX.md` keyword-matching is too coarse for per-unit reference selection.

Deliverables:
- Embedding pipeline for all `reference/**/*.md` and PDF text layers
- Vector store (probably local: LanceDB / Chroma / pgvector)
- Retrieval API that Scanner calls with a concept and returns top-N passages with provenance

### Phase 2a — Pilot unit #1 (NEW, manual)

Produce one pilot unit end-to-end manually (no agents). Use the scaffold exactly as-is. The purpose is to surface real failure modes of the spec.

Candidate unit: named in `PILOT_PLAN.md` when that file is written. Likely an apex unit (e.g., Clifford algebra, Master tier only).

### Phase 2b — Distill QUALITY_RUBRIC.md

After unit #1 exists, catalogue what went wrong or required judgment. Those become the rubric's checklist items. Per-tier rubrics written now, grounded in real output.

### Phase 2c — 9 more pilot units

Produce 9 more (mix of manual + agent-assisted using the rubric). By end of pilot:
- All 10 units shipped with review manifests
- Spec gaps identified and either accepted or filed as open issues
- First real measurements on production time and review time

**Pilot success criteria (revised):**

- For units that include Master tier: mathematical reviewer rates ≥9 of 10 as "publication-quality"
- For units with `lean_status: full`: Lean proofs compile
- For units with `lean_status: none`: `lean_mathlib_gap` and `human_reviewer` both populated; human review attested
- All cross-refs resolve
- All reference citations resolve
- For units that include Beginner tier: a naive reader completes the Beginner section in ≤ 20 min with correct retention check
- Production time per unit ≤ X hours (X recorded, not targeted — we're measuring)

### Phase 3 — Iterate

Revise specs based on Phase 2 findings. Expect non-trivial changes to UNIT_SPEC and QUALITY_RUBRIC.

### Phase 4 — Scale

Parallel agent swarms. Topological-sort dependency graph. Target ~1500 units over 12–18 months.

---

## 7. Data Layer

### Directory structure

```
codex/
├── PROJECT_PLAN.md
├── BRIEF.md
├── UNIT_SPEC.md
├── QUALITY_RUBRIC.md
├── DEPENDENCY_MAP.md
├── PILOT_PLAN.md
├── FASTTRACK_BOOKLIST.md
├── NEED_TO_SOURCE.md
├── reference/                    # scanned external material (Phase 0)
├── content/                      # produced units (Phase 2+)
│   ├── 00-prereqs/
│   ├── 01-fundamentals/
│   ├── 02-quantum-stat/
│   └── 03-modern-geometry/
├── lean/                         # Lean 4 project — Codex.* modules
├── scripts/                      # orchestration tooling
└── manifests/                    # per-unit status JSON; dependency graph
```

### Dependency graph format

`manifests/deps.json`: JSON adjacency list. Every edge is a declared prerequisite. Topological sort feeds the scheduler.

### Reference index

`reference/_meta/TOPIC_INDEX.md`: topic → archive files mapping (already built; regenerated on archive changes).

---

## 8. Success Metrics

**Pilot (10 units):**
- Beginner-tier unit readable by naive human in ≤ 20 min with full comprehension
- Master-tier unit rated "publication quality" by domain expert
- Lean proofs compile 100%
- Cross-references resolve 100%

**v1 (500–800 units, math + physics through mid-Section-2):**
- 1 independent learner completes Beginner path for all 500 units
- 1 undergrad-background learner completes Intermediate path
- Master path reviewed by 3+ domain experts per section

**Long-term:**
- Peer-reviewable content quality (some units publishable standalone as pedagogy papers)
- Learner outcome data (testable via embedded assessments in pilot)

---

## 9. Risks & Mitigations (revised 2026-04-23)

| Risk | Mitigation |
|---|---|
| AI producers drift without spec adherence | Tight rubric + automated checks; reject-and-regenerate loop |
| Mathematical errors compound across dependent units | Lean where Mathlib covers; named human reviewer where not; integration phase explicitly checks prereq chain |
| Pilot succeeds but doesn't generalize | Pilot deliberately covers three very different concepts to stress the spec |
| Scope creep into other sciences | Hard gate: math + physics only in v1; written into OVERVIEW invariants |
| Burnout on specs, never produce | Pilot unit #1 is the hard stop — produce it before writing QUALITY_RUBRIC.md |
| Over-engineering agent orchestration | Pilot unit #1 is manual; agent orchestration only after rubric distilled |
| **Reviewer bandwidth (new, critical)** | `REVIEWER_PLAN.md`; LLM-augmented review with human spot-check; recruit 1–3 collaborators before Master scaling |
| **Lean coverage collapses at FT top (new)** | Accept `lean_status: none` with `lean_mathlib_gap` + named `human_reviewer`; feed gaps as Mathlib contribution roadmap |
| **DAG partial-order freedom (new)** | `CONCEPT_CATALOG.md` as canonical concept source; two producers cannot declare different prereqs for the same concept |
| **v0.x audience ≠ advertised audience (new)** | Own it in product communications: apex-first pilot = graduate reference; Beginner/Intermediate served at v1+ when prereq chains fill |
| **No RAG = no Scanner = no agent production (new)** | Phase 1.5 explicitly builds embeddings + retrieval before any agent work begins |

---

## 10. Immediate next actions (revised 2026-04-23)

1. `OVERVIEW.md` ✓
2. `BRIEF.md` ✓
3. `UNIT_SPEC.md` ✓ (revised with `tiers_present`, `concept_catalog_id`, `lean_mathlib_gap`, `human_reviewer`)
4. `REVIEWER_PLAN.md` ✓
5. `CONCEPT_CATALOG.md` ✓ (seed only)
6. Write `DEPENDENCY_MAP.md` — seed apex units, pulled-prereq DAG
7. Write `PILOT_PLAN.md` — 10 apex units (Master-only)
8. Build RAG layer (Phase 1.5)
9. Produce pilot unit #1 manually — stress-test spec
10. Distill `QUALITY_RUBRIC.md` from unit #1's failure modes
11. Produce 9 more pilot units
12. Only then invoke parallel agent orchestration.
