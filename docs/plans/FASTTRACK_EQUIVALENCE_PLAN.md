# Codex — Fast Track Equivalence Plan

A scaffold-of-scaffolds. Specifies how Codex achieves *equivalent information transfer* with every book on the Fast Track booklist — not just topic overlap, but full pedagogical equivalence: a Codex reader should be able to do everything a Fast Track reader could do without ever opening the book.

This document does not produce curriculum content directly. It produces the **system** by which curriculum content for each Fast Track book is planned, scaffolded, and verified — so that the work can be tackled agentically across the 72-book corpus.

Read alongside `docs/catalogs/FASTTRACK_BOOKLIST.md`, `docs/plans/CURRICULUM_V0_5_PLAN.md`, `docs/plans/V05_SUPPORTING_UNITS_PLAN.md`, `docs/specs/QUALITY_RUBRIC.md`, `docs/specs/UNIT_SPEC.md`.

---

## 1. Mission statement

For every book *B* on the Fast Track, produce a subset *C(B)* of Codex units such that a learner who completes *C(B)* — at the appropriate tier — has **equivalent operational ability** to a learner who completed *B* itself: they can state and prove the book's theorems, solve the book's exercises, recognize the book's notation, apply the book's tools to new problems, and possess the conceptual map the author intended to convey.

The metric is not "what fraction of *B*'s topics appear in Codex." That metric is too coarse. The metric is: **can a Codex reader pick up where a *B* reader leaves off, inside *B*'s native subject and adjacent ones, without surprises?**

If the answer is yes, *B* is **equivalence-covered**. The Fast Track is *equivalence-complete* when all 72 books are equivalence-covered.

---

## 2. The layered equivalence model

A book transfers information at seven distinct layers. Equivalence requires capturing all seven. Most "online curriculum" projects only cover layers 1 and 6 (the named theorems and a softened intuition); they fail on the rest. Codex must cover all seven explicitly.

| # | Layer | What the book transfers | How Codex captures it | Equivalence test |
|---|---|---|---|---|
| 1 | **Theorem layer** | Every named theorem, proposition, lemma, definition | Each ≥1 Codex unit at Intermediate or Master tier | Reader can state and prove every theorem in the book's TOC |
| 2 | **Exercise layer** | Each numbered exercise, with the difficulty and the role it plays in later proofs | Codex unit's `## Exercises [Intermediate+]` block + inline answers | Reader can solve every exercise in the book using only Codex content |
| 3 | **Worked-example layer** | Concrete computations the author works through | Codex `## Worked example [Beginner]` or inline computations in Intermediate | Reader can reproduce every concrete computation the book performs |
| 4 | **Notation layer** | The author's notation conventions, often distinctive | Per-book notation crosswalk in `notation/<book>.md`; mentions in unit Master sections | Reader can read any subsequent paper that uses the book's notation |
| 5 | **Sequencing layer** | What the author builds in chapter *k* and uses in chapter *k+n* | Codex DAG (`manifests/deps.json`) reflects the book's prerequisite chain | Reader can traverse the same prerequisite path Codex provides |
| 6 | **Intuition layer** | Prose-level insights that justify why the math is the *right* math, not just *correct* math | Codex `## Intuition [Beginner]` and Master `## Historical & philosophical context` sections | Reader can explain *why* a definition takes the form it does, not just *what* it is |
| 7 | **Application layer** | The book's worked applications, examples beyond the core theory | Codex Master `## Connections` sections and dedicated application units | Reader can apply the theory to the same problems the book applies it to |

**Equivalence is reached** when all seven layers are demonstrably captured, per book, per chapter.

---

## 3. The per-book plan template

Every book *B* gets exactly one planning document at `plans/fasttrack/<book-slug>.md`, structured as follows. The template is rigid so coverage can be tracked uniformly.

```markdown
# <Book-slug> — Fast Track Equivalence Plan

**Book:** <Author>, *<Title>* (<Year>)
**Fast Track entry:** <booklist#>
**Pages:** <count> · **Chapters:** <count> · **Exercises:** <count>
**Subject:** <primary subject area>
**Strand assignment:** <one of A/B/C/D/E/F/...>
**Plan status:** <draft|audited|gap-analysed|production|verified|equivalence-covered>

---

## §1. Book audit

### 1.1 Table of contents
[Chapter and section breakdown — every section listed]

### 1.2 Theorem inventory
[Every named theorem/proposition/lemma/definition with chapter location]

### 1.3 Exercise inventory
[Every exercise with chapter location, difficulty estimate, role:
 "load-bearing" (used in later proofs), "applied" (concrete computation),
 "extension" (open-ended exploration)]

### 1.4 Worked-example inventory
[Every worked example with chapter location and what it illustrates]

### 1.5 Notation conventions
[Distinctive notation, reading conventions, sign conventions]

### 1.6 Sequencing graph
[Chapter dependency arrows — "Ch 4 uses Ch 2 §3 and Ch 3"]

### 1.7 Author's distinctive perspective
[What this book offers that peer texts don't — what makes Fast Track include it]

---

## §2. Codex coverage diff

### 2.1 Theorem coverage
[Table: book theorem → Codex unit (or "GAP")]

### 2.2 Exercise coverage
[Table: book exercise → Codex exercise location (or "GAP")]

### 2.3 Worked-example coverage
[Table: book example → Codex location (or "GAP")]

### 2.4 Notation coverage
[Crosswalk: book notation → Codex notation]

### 2.5 Sequencing coverage
[Codex DAG paths matching book's chapter dependencies]

### 2.6 Intuition coverage
[Per chapter: is the book's framing captured in some Codex Beginner/Master section?]

### 2.7 Application coverage
[Per book application: is it covered in a Codex Connections or applied unit?]

### 2.8 Coverage scorecard
| Layer | Captured | Total | % | Status |
|---|---|---|---|---|
| Theorems | xx | yy | nn% | ✓/△/✗ |
| Exercises | xx | yy | nn% | ✓/△/✗ |
| ... |

---

## §3. Production plan

### 3.1 New units to produce
[List of new Codex unit IDs, titles, parent strand, prerequisites, originator/anchor]

### 3.2 Existing units to deepen
[For each existing unit: what theorems, exercises, examples to add]

### 3.3 Exercise packs
[For exercises that don't fit cleanly into existing units' exercise sections,
 produce per-chapter exercise-collection units]

### 3.4 Notation crosswalk file
[Path to `notation/<book>.md` with the conventions captured]

### 3.5 DAG edges to add
[New `prerequisites` arrows in deps.json reflecting book sequencing]

### 3.6 Agent decomposition
[Production split among parallel agents — typically 2–6 agents per book]

---

## §4. Equivalence verification

### 4.1 Book-as-input self-check
[A test: present the book's TOC to an evaluator agent;
 ask "is everything there in Codex?"; require yes per layer]

### 4.2 Exercise reproducibility check
[Sample 10% of book exercises; verify a reader using only Codex
 can solve them]

### 4.3 Notation comprehension check
[Sample passages of the book; verify Codex reader can parse the notation]

### 4.4 Equivalence sign-off
[Plan transitions to status `equivalence-covered` when 4.1, 4.2, 4.3 all pass]
```

This template is a contract. Every book gets one. Coverage is tracked uniformly across all 72 books.

---

## 4. Agent orchestration — how each per-book plan is produced

Each book takes **5 distinct agent passes**, in dependency order. Within a pass, agents on different books run in parallel; across passes, work is serial per book.

### Pass 1 — **Audit agent** (one per book, parallel-safe)

**Input:** Book identity (author, title, year, ISBN, Fast Track entry).
**Tools:** WebSearch, WebFetch (for TOCs, reviews, syllabus pages, MathOverflow discussions, Wikipedia, Goodreads of academic books, university course pages that use the book).
**Task:** Produce §1 of the per-book plan: TOC, theorem inventory, exercise inventory, worked-example inventory, notation, sequencing, distinctive perspective.
**Output:** `plans/fasttrack/<book-slug>.md` with §1 filled in; status `audited`.

**Agent prompt template:**
> You are auditing the book *<Title>* by *<Author>* (year *<Year>*) for the Codex curriculum. Use WebSearch and WebFetch to assemble: full TOC; named theorems/propositions/lemmas with chapter location; exercise count per chapter with difficulty range; named worked examples; distinctive notation; chapter-to-chapter dependency graph. Your inventory does not need to be exhaustive at the typo level — but it must be complete at the *named-result* level. Use review articles (Bull. AMS, MAA Reviews) and university course pages that adopt the book. Cite every source. Produce §1 of `plans/fasttrack/<book-slug>.md`.

**Stop condition:** §1 sections 1.1–1.7 all populated; ≥3 sources cited; plan status set to `audited`.

### Pass 2 — **Gap-analysis agent** (one per book, parallel-safe after Pass 1)

**Input:** The Pass-1 audit + current `manifests/deps.json` + current `docs/catalogs/CONCEPT_CATALOG.md`.
**Tools:** Read, Grep, Glob (codebase analysis only; no web).
**Task:** Produce §2 of the per-book plan: theorem coverage table, exercise coverage table, worked-example coverage, notation crosswalk, sequencing diff, intuition coverage, applications coverage, scorecard.
**Output:** §2 filled in; status `gap-analysed`.

**Agent prompt template:**
> You have an audit of *<Title>* at `plans/fasttrack/<book-slug>.md` §1. Open `manifests/deps.json`, `docs/catalogs/CONCEPT_CATALOG.md`, and grep `content/` for relevant theorem and concept names. For each item in the audit's theorem inventory, find a Codex unit that covers it (cite by ID and section heading); for items with no match, mark `GAP`. Repeat for exercises, worked examples, notation, sequencing, intuition, applications. Produce §2 of the per-book plan with the seven coverage tables and the scorecard.

**Stop condition:** §2 scorecard filled with per-layer percentages; status set to `gap-analysed`.

### Pass 3 — **Production-plan agent** (one per book, parallel-safe after Pass 2)

**Input:** §1 + §2 of the per-book plan.
**Tools:** Read, Grep (codebase reference); no Web; no Write to content/ yet.
**Task:** Produce §3 of the per-book plan: list of new units, list of existing units to deepen, exercise packs to add, notation crosswalk file, DAG edges, agent decomposition.
**Output:** §3 filled in; status `production` (planned but not produced).

**Agent prompt template:**
> Convert the gap analysis at `plans/fasttrack/<book-slug>.md` §2 into a concrete production plan §3. Group gaps into ~5–8 unit-sized pieces. For each new unit, specify ID, title, target strand, originator citation, modern anchor, prerequisites. For existing units that need theorem/exercise additions, specify the unit ID and the exact additions. Decompose the production into 2–6 parallel agent jobs.

**Stop condition:** §3 has a concrete agent-decomposition table; status set to `production`.

### Pass 4 — **Production agents** (multiple per book, parallel-safe within a book and across books)

**Input:** §3 of the per-book plan.
**Tools:** Read, Write, Edit, Bash (validate_unit.py).
**Task:** Produce the new units and unit-deepenings specified in §3. Same protocol as the v0.5 supporting-unit batches: write content + Lean stub, validate to 27/27, return proposed CONCEPT_CATALOG and deps.json entries.
**Output:** New unit files in `content/`, Lean stubs in `lean/`, proposed registration entries returned to the orchestrator (claude) for sequential integration.

**Agent prompt template:** Same as `docs/batches/V05_GPT_BATCH_SUPPORTING.md` template — already proven on 30 supporting units. Adapt the unit list per book.

**Stop condition:** All new and deepened units validate at 27/27.

### Pass 5 — **Equivalence-verification agent** (one per book, after Pass 4)

**Input:** §1–§4 of the per-book plan + the produced units.
**Tools:** Read, Bash (validate_all.py), and explicit equivalence tests.
**Task:** Run §4 of the per-book plan: book-as-input self-check, exercise reproducibility check, notation comprehension check. Sign off with status `equivalence-covered` if all pass, else flag specific failures and route back to Pass 3.
**Output:** §4 filled in; status `equivalence-covered` (or `production` if returned).

**Agent prompt template:**
> The per-book plan at `plans/fasttrack/<book-slug>.md` declares N new units shipped. Run the three equivalence verifications (4.1, 4.2, 4.3 in §4 of the per-book plan template). For each, present concrete evidence: e.g., for 4.2, sample 5 random exercises from the book; for each, find the Codex unit that would let a reader solve it; quote the exact paragraph from the unit. If any verification fails, list the specific gap and revert plan status to `production`.

**Stop condition:** All three verifications pass; status `equivalence-covered`.

---

## 5. Coverage tracking — the master matrix

A single artifact at `manifests/fasttrack_coverage.md` tracks all 72 books across all five passes:

```markdown
| # | Book | Audit | Gap | Plan | Production | Verified | Layer scorecard |
|---|---|---|---|---|---|---|---|
| 1.04 | Ahlfors Complex Analysis | ✓ | ✓ | ✓ | ✓ | ✓ | T:95 E:80 W:90 N:100 S:90 I:90 A:85 |
| 1.05 | Brown Topology and Groupoids | ✓ | ✓ | ✓ | ⏳ | — | — |
| 3.21 | Hartshorne Algebraic Geometry | ✓ | ✓ | ✓ | ⏳ | — | — |
| ... |
```

The matrix is the single source of truth for what's done and what's not. The site's `/fasttrack` route renders this for public visibility.

---

## 6. Book prioritization — which books first

Not all books have equal leverage. We tier the 72 books by impact:

### Tier α (12 books) — **Foundational and high-impact, do first**

These books anchor entire strands. Producing per-book plans for these unblocks ~60% of the remaining work because subsequent books re-use the same units.

1. **Apostol Vol 1** (1.0.2) — single-variable calculus, foundation
2. **Apostol Vol 2** (1.0.3) — multivariable, linear algebra intro
3. **Lang Algebra** (3.01) — abstract algebra
4. **Shilov Linear Algebra** (1.01) — linear algebra fundamentals
5. **Ahlfors Complex Analysis** (1.04) — complex analysis canonical
6. **Bott-Tu Differential Forms** (1.17) — algebraic topology + DG bridge
7. **Sternberg Differential Geometry** (1.10) — DG canonical
8. **Hartshorne Algebraic Geometry** (3.21) — AG canonical
9. **Fulton-Harris Representation Theory** (3.11) — rep theory canonical
10. **Lawson-Michelsohn Spin Geometry** (3.35) — spin canonical (already strong in Codex)
11. **Voisin Hodge Theory Vol I** (3.27) — Hodge canonical
12. **Mumford Curves and their Jacobians** — Riemann surfaces canonical

Tier α target: equivalence-covered by **end of v0.7**.

### Tier β (24 books) — **Strand-completing, do second**

Fill out Strands A–E to full equivalence.

- §0 prereqs: Lang Basic Math, Arnold ODEs (4 books total in §0)
- §1 supplements: Brown Topology (1.05), Sternberg Curvature (1.14), Sternberg Group Theory (1.15), Bott-Tu, Whitney (1.13), Shifrin (1.18), Olver (1.16), Donaldson Riemann Surfaces (1.07), Ahlfors-Sario (1.06), Symplectic (1.11)
- §3 supplements: Serre ×4 (3.12, 3.13, 3.14, 3.15), Milnor-Stasheff (3.08), Atiyah K-theory (3.10), Helgason (3.17), Kobayashi-Nomizu ×2 (3.18, 3.19), Griffiths-Harris (3.22), Mumford GIT (3.31), Harris Moduli (3.30)

Tier β target: equivalence-covered by **end of v0.9**.

### Tier γ (28 books) — **Specialty and applied, do third**

Specialty texts that fill specific niches. Produce after the foundation is set.

- Quantum/QFT: Landau QM (2.01), Weinberg ×3 (2.17–2.19), Woit (2.02), Landau QED (2.20)
- Stat physics: Gel'fand ×6 (2.04–2.09), Souriau (2.11), Stochastic Quantization (2.16)
- Adjacent: Gel'fand-Manin (3.02), Morse ×2 (3.03, 3.04), Freed TQFT (3.05), Donaldson Floer (3.06), Milnor h-cobord (3.07), Atiyah Yang-Mills (3.20), Hirzebruch ×2 (3.25, 3.26), Krantz/Gunning SCV (3.23, 3.24), Jost (3.28), Bismut-Ghys-Quillen (3.29), Fulton Toric (3.32), Gross Tropical (3.33), Manin Number Theory (3.34), Penrose-Rindler ×2 (3.36, 3.37), May ×3 (3.38–3.40), Goerss-Jardine (3.41), Ravenel (3.42), Deligne et al. QFTS (3.43), DeWitt ×2 (3.44), Gérard (3.45), Vaisman (3.46), Brylinski (3.47), Besse (3.48)
- Mackenzie ×2 (1.08, 1.09), Mackenzie-style classics
- Diaconis (3.16), Probability and Rep Theory

Tier γ target: equivalence-covered by **end of v1.0**.

### Tier δ (8 books) — **Optional / out of strict scope**

These can be deferred indefinitely; their content is largely captured by Tier α/β if those are equivalence-covered.

- FE Exterior Calculus (1.20), Topological Methods in Hydrodynamics (1.12), MIT OCW (2.15) — already digital, not a book per se
- Selected sub-volumes of multi-volume works that mostly repeat earlier content

---

## 7. Phase plan

### Phase 1 — Tier α scaffolding (now → v0.6)

For each of the 12 Tier-α books:
- Pass 1: audit (12 agents, parallel)
- Pass 2: gap analysis (12 agents, parallel; serial after Pass 1 per book)
- Pass 3: production plan (12 agents)

End-state: 12 fully-planned per-book documents at `plans/fasttrack/`.

### Phase 2 — Tier α production (v0.6 → v0.7)

Pass 4 production runs for each Tier-α book. Estimated 30–80 new units per book (some books like Hartshorne or Lang need many; others like Lawson-Michelsohn we already have ≥80% of).

Estimated total new units: 200–400.
Estimated agent invocations: 60–120 production agents (5–10 per book, parallel).

End-state: Tier α books all `equivalence-covered`. Codex doubles in size to ~400 units.

### Phase 3 — Tier α verification (v0.7)

Pass 5 verification for each Tier-α book.

End-state: 12 books at `equivalence-covered` status with public sign-off.

### Phase 4 — Tier β scaffolding (v0.7 → v0.8)

Same as Phase 1 but for 24 Tier-β books.

### Phase 5 — Tier β production (v0.8 → v0.9)

Same as Phase 2.

### Phase 6 — Tier β verification (v0.9)

Same as Phase 3.

### Phase 7 — Tier γ scaffolding (v0.9 → v1.0-rc1)

Same as Phase 1 but for 28 Tier-γ books.

### Phase 8 — Tier γ production (v1.0-rc1 → v1.0-rc4)

Same as Phase 2.

### Phase 9 — Tier γ verification (v1.0-rc4 → v1.0)

Same as Phase 3.

### Phase 10 — Final v1.0 release

`fasttrack_coverage.md` shows green status across all Tier α/β/γ books. Tier δ optional, deferred to v1.1.

End-state: Codex equivalence-covers ≥64 of 72 Fast Track books. Estimated total units: ~700–900. The full Fast Track is a Codex pathway.

---

## 8. Agent fleet topology

The total agent invocations across all phases:
- Audit: 64 agents (parallelizable in batches of 8–12)
- Gap analysis: 64 agents (per book, after audit)
- Production-plan: 64 agents
- Production: ~250 agents (5–10 per book × 64 books)
- Verification: 64 agents

**Total: ~500 agent invocations across the full Fast Track equivalence campaign.**

Each phase parallelises by book; the orchestrator (claude) integrates per-book outputs sequentially, just as in the v0.5 supporting-unit batch (where 4 agents produced 24 units in parallel and claude integrated registrations).

---

## 9. Coverage definition: when is a book "equivalence-covered"?

A book *B* transitions to status `equivalence-covered` when, simultaneously:

1. **Theorem layer**: ≥95% of named theorems in *B* are stated and proved in some Codex unit, with explicit citation back to *B*.
2. **Exercise layer**: ≥80% of *B*'s exercises have a Codex equivalent (either an exercise in a unit, or a worked example, or a deferral to a known reference for "compute by hand using technique X").
3. **Worked-example layer**: ≥90% of *B*'s worked examples are reproduced in some Codex unit's `## Worked example` or Intermediate computation.
4. **Notation layer**: A `notation/<book>.md` crosswalk exists, mapping every distinctive notation in *B* to Codex notation (or asserting they coincide).
5. **Sequencing layer**: For every chapter dependency `<i> → <j>` that *B* uses, there is a corresponding `prerequisites` arrow in Codex's DAG between the unit ranges that cover Ch *i* and Ch *j*.
6. **Intuition layer**: For every chapter, there exists a Codex unit whose Beginner or Master section explains *why* the chapter's concepts are formulated as they are, in language a reader of *B*'s preface would recognize.
7. **Application layer**: ≥80% of *B*'s applications and worked-out examples-in-the-large are referenced in some Codex Connections section or applied unit.

The Pass-5 verification agent checks all seven thresholds and signs off, or flags specific deficits.

---

## 10. Author-prose preservation principle

The "intelligence of writing from the original geniuses" directive (per Tyler) extends here: where a Fast Track book is *itself* the originator's text (Riemann's *Theorie der Abelschen Functionen* — not Fast Track-listed but referenced; Cartan's 1894 dissertation; Frobenius's papers; Hodge's *Harmonic Integrals* — referenced; Mumford's *GIT*), the book serves both layers: original-genius and modern-textbook.

For these author-as-originator books, equivalence requires more than topic coverage — it requires preserving the original conceptual framing. Every Codex unit citing the originator must *paraphrase or quote* the original prose, not only the modern textbook synthesis.

This is captured in the per-book plan §1.7 ("Author's distinctive perspective") and verified at Pass 5.

---

## 11. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Audit agent can't access book PDFs (copyright) | Use WebSearch + university course pages + reviews + Wikipedia; the TOC and theorem list is almost always public |
| Audit underspecifies exercises | Cross-reference student notes and homework solutions hosted publicly; many Apostol/Hartshorne exercises have public solution sets |
| Different Fast Track books cover the same concept differently | Each book gets its own crosswalk; conflicting conventions become explicit notation crosswalks |
| Production agents miss the originator-prose layer | Verification agent (Pass 5) checks Master Historical sections for explicit originator citations |
| 500 agent invocations is expensive | Run in phases over months; Tier α first delivers 80% of pedagogical value at 18% of total cost |
| New Codex units conflict with existing units | Same approach as v0.5 supporting batch: agents write disjoint chapters; claude integrates CONCEPT_CATALOG and deps.json sequentially |
| Equivalence threshold too strict (95% / 80% / 90%) | Per-book negotiation in Pass 3: if a chapter is genuinely out of scope (e.g., Hartshorne's Ch IV §6 cohomology bound for surfaces with $p_g = 0$ is highly specific and its absence doesn't break later use), document the deferral and don't block on it |
| Reader can't actually replicate book's exercises | Pass-5 random sampling test; if it fails, route back to Pass 3 with specific exercise call-outs |

---

## 12. The first concrete step

Before scaling to 64 books, prove the protocol on **one** book end-to-end. Pick **Lawson-Michelsohn *Spin Geometry*** because:
- It's Tier α
- Codex already has ≥80% coverage (the Wave-1 spin geometry strand)
- The remaining gap is small (~10 units) so Pass 4 is cheap
- We can verify equivalence on a book where success is achievable, calibrating the protocol before scaling

**Single-book pilot timeline (proposed):**
- Day 1: Pass 1 (audit) — 1 agent, 30 min
- Day 1: Pass 2 (gap analysis) — 1 agent, 30 min
- Day 2: Pass 3 (production plan) — 1 agent, 30 min, returns to claude for review
- Day 3–5: Pass 4 (production) — 2–4 agents in parallel, ~10 new units
- Day 6: Pass 5 (verification) — 1 agent, 30 min
- Day 6: book marked `equivalence-covered` in master matrix

If the pilot succeeds, the protocol scales to all 64 books across Phases 1–9.

---

## 13. Why this is a system, not a backlog

A naive backlog of "produce 200 more units" would be a thousand-page spreadsheet with no calibration: no way to know if a unit is *necessary*, no way to know when a topic is *covered*, no way to integrate parallel work without conflicts. This document replaces that with:

- A **per-book plan template** so coverage is assessed uniformly.
- A **5-pass agent protocol** so production is reproducible and parallelisable.
- A **scorecard** so coverage is quantitative.
- A **prioritization** so the highest-leverage books come first.
- A **sign-off threshold** so completion has a definition.

Without the system, "make Codex equivalent to Fast Track" is a vague aspiration. With the system, it's a 500-agent, 9-phase, ~12-month campaign with verifiable per-book deliverables.

---

*Plan v1. Update as patterns emerge from the Lawson-Michelsohn pilot.*
