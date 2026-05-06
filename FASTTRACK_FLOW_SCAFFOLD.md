# Codex — Pedagogical Flow Scaffold

A second-order scaffold folded on top of the equivalence plan. Where `FASTTRACK_EQUIVALENCE_PLAN.md` captures *what* each Fast Track book teaches, this document captures *how* — the specific pedagogical sequence, the inter-chapter bridges, the pause-and-motivate moments, the difficulty ramps, the way each author attenuates a reader from foundations to apex.

A Codex unit is a reference object: definitions, theorems, exercises, examples, three tiers. A *flow* is a teaching object: an ordered traversal of units, annotated with the rhetorical scaffolding an author would use to bring a learner up the conceptual ladder. Multiple flows traverse the same underlying units; each preserves a distinct pedagogical voice.

Read alongside `FASTTRACK_EQUIVALENCE_PLAN.md`, `UNIT_SPEC.md`, `SITE_PLAN.md`.

---

## 1. The folded architecture

Codex now has four layers, each folded onto the layer beneath:

| Layer | Object | What it specifies |
|---|---|---|
| 0 | **Units** | Three-tier, content-rich reference articles — the atoms of the curriculum |
| 1 | **DAG** | Partial-order prerequisite graph between units (`manifests/deps.json`) |
| 2 | **Equivalence plans** | Per-book mappings: which units cover which book at which layer (theorem / exercise / notation / etc.) |
| 3 | **Flows** ← *this document* | Ordered traversals through the DAG, with bridges and pacing, that reproduce author teaching trajectories |

The DAG is a partial order — many valid linearisations exist. A flow is a specific linearisation chosen by an author, with the rhetorical material that turns "valid order" into "good teaching."

A unit appears in many flows. Each flow gives the unit a different framing: in the Hartshorne flow, an affine scheme is approached as the foundational object; in the Vakil flow, it appears later, after a long motivational walk through varieties; in the Strand-A synthesis flow, it sits at a different position than either author chose. The unit itself doesn't change — its surrounding flow does.

---

## 2. Why flow matters — the attenuation problem

Reading a graduate textbook for the first time is not just learning theorems. It is acclimatizing — building tolerance for new abstractions, internalizing intuitions, recognizing recurring patterns, growing the cognitive scaffolding that lets the next chapter feel reachable. Authors orchestrate this attenuation through dozens of small moves:

- *Motivating examples before abstractions* — Bott-Tu opens with the de Rham complex on $\mathbb{R}^n$ before introducing sheaf cohomology, so the reader has a concrete prototype.
- *Definitions deferred* — Hartshorne uses "scheme" informally for half of §I before defining it formally in §II, letting the reader's intuition lead the formalism.
- *Recurring threads* — Lawson-Michelsohn returns to the spinor representation in different guises (algebraic, geometric, analytic) so the reader sees the object from three sides.
- *Strategic redundancy* — Voisin reproves the Hodge decomposition in two ways (harmonic forms and spectral sequences) because the second proof is what generalizes.
- *Visible "we are now ready"* — Cartan-Serre's seminars build for chapters before stating coherent-sheaf vanishing; the cumulative-readiness moment is a major part of the experience.

These moves are invisible in a unit-level reference. They live entirely in the flow. **A curriculum that reproduces the units but not the flow is not the same curriculum.** It teaches the same theorems but transfers a fraction of the operational understanding.

The flow scaffold makes attenuation an explicit, externalisable artifact — recoverable from the books, replayable to readers, and combinable across authors.

---

## 3. Four kinds of flow

### 3.1 Author flows

Replicate a specific book's pedagogical trajectory. One flow per book chapter — or per book, for shorter books. The reader following the flow walks Codex units in the order the author chose, with bridge prose that reproduces the author's chapter-to-chapter transitions, pause moments at the same places the author would pause.

Examples:
- `flow:hartshorne-ch1` — Hartshorne Ch I (Varieties), the classical-variety pre-game before schemes
- `flow:hartshorne-ch2` — Hartshorne Ch II (Schemes), the foundational push
- `flow:voisin-vol1-ch6` — Voisin Vol I Ch 6 (Hodge decomposition), the harmonic-forms route
- `flow:lawson-michelsohn-pt1` — Lawson-Michelsohn Part I (Clifford algebras and spinors)
- `flow:bott-tu-pt1` — Bott-Tu Part I (de Rham theory), the differential-forms-first algebraic-topology route

**Goal**: a reader who completes an author flow has, as nearly as the medium allows, the experience of completing the corresponding book chapter.

### 3.2 Strand flows

Walk an entire Codex strand from foundations to apex, drawing the best pedagogical moves from multiple authors. These don't replicate any single book; they synthesize.

Examples:
- `flow:strand-a-from-zero` — algebraic geometry: rings → schemes → cohomology → Riemann-Roch → Hodge → moduli
- `flow:strand-c-from-zero` — Riemann surfaces: complex analysis → meromorphic functions → Riemann surfaces → divisors → Riemann-Roch → Jacobians → uniformisation
- `flow:strand-d-from-zero` — representation theory: groups → characters → Maschke → Schur → Lie algebras → highest weight → Cartan-Weyl

**Goal**: a reader new to the strand can traverse from prerequisites to mastery in a coherent sequence with synthesis-level bridges.

### 3.3 Synthesis flows (the Fast Track itself)

Walk across multiple strands to reproduce a meta-curriculum. The Fast Track booklist's ordering is itself a synthesis flow: it specifies a sequence of *books* across topics, with implicit cross-strand bridges (read Apostol II, *then* Sternberg, *then* Bott-Tu).

Codex's master synthesis flow is `flow:fasttrack-canonical` — the Fast Track translated into unit-level steps with bridges between books.

Examples:
- `flow:fasttrack-canonical` — the Fast Track booklist as a unit-level walk
- `flow:fasttrack-physics-track` — only the physics-relevant books, in dependency order
- `flow:fasttrack-arithmetic-geometry-track` — only books leading to modern arithmetic geometry

**Goal**: a reader can traverse the equivalent of "the Fast Track" without ever opening a book.

### 3.4 Themed flows

Pick a single thread and pull it across strands. The "canonical bundle" or "characteristic class" or "Riemann-Roch-style theorem" or "spinor representation" thread. Themed flows visit units in a strand-crossing order, building a cross-cutting understanding.

Examples:
- `flow:theme-canonical-bundle` — canonical bundle on curves, surfaces, complete varieties; canonical sheaf in scheme theory; canonical line bundle in symplectic geometry; relation to dualising sheaf
- `flow:theme-riemann-roch-family` — Riemann-Roch for curves, Hirzebruch-Riemann-Roch, Atiyah-Singer index theorem, Grothendieck-Riemann-Roch
- `flow:theme-character-variety` — character of a representation, character of a Lie algebra rep, Weyl character formula, Lefschetz character formula, Borel-Weil
- `flow:theme-genus` — genus on curves, of Riemann surfaces, arithmetic genus on schemes, geometric genus, irregularity, Hodge numbers as generalised genera

**Goal**: a reader interested in a specific concept can walk every Codex appearance of it, with the connective tissue that ties them together.

---

## 4. The flow data structure

Each flow lives at `flows/<flow-id>.md` (with optional YAML companion `flows/<flow-id>.yaml` for structured fields). Schema:

```yaml
flow:
  id: hartshorne-ch2
  title: "Hartshorne Ch II — Schemes"
  kind: author             # author | strand | synthesis | theme
  source: book
  source_book: "Hartshorne — Algebraic Geometry"
  source_section: "Chapter II"
  target_strand: A
  estimated_time: "60–90 focused hours"
  prerequisite_flows:
    - hartshorne-ch1
  prerequisite_units:
    - 04.01.01
    - 03.01.02
  outcome: |
    The reader can define schemes, morphisms, sheaves of modules,
    and Cartier divisors on schemes; can compute Spec for small rings;
    can recognise affine and projective schemes by their global sections.

steps:
  - n: 1
    unit: 04.02.02            # affine scheme Spec(R)
    tier: intermediate
    section_anchor: "II.1"     # which book section this step covers
    why: |
      Hartshorne opens Ch II §1 by motivating non-classical varieties:
      schemes generalise varieties to allow nilpotents (jet schemes),
      arbitrary base (arithmetic schemes), and infinite type (formal
      schemes). The affine scheme is the foundation. Hartshorne treats
      it axiomatically — locally ringed space + structure sheaf — rather
      than as a quotient of classical varieties, which is the modern
      Grothendieck framing.
    read_strategy: |
      Read the Beginner section once for the rings-and-geometry dictionary.
      Then read Intermediate cover-to-cover, focusing on the Spec/Γ
      adjunction. Skip the Master "advanced results" on first pass —
      they're motivating but not load-bearing for what comes next.
    bridge_after: |
      With Spec in hand, Hartshorne now builds the global object: a scheme
      is a locally ringed space whose every point has an open neighbourhood
      isomorphic to some Spec(R). He treats this as the working definition
      and proves the gluing-from-affines characterisation only later. The
      next step is the scheme proper.

  - n: 2
    unit: 04.02.01
    tier: intermediate
    section_anchor: "II.2"
    why: |
      The general scheme. Hartshorne's definition is by affine cover.
      Distinct from Vakil, who uses functor-of-points first. The cover
      definition is concrete — schemes are built from Spec the way
      manifolds are built from coordinate charts.
    bridge_after: |
      Once schemes exist, Hartshorne can define morphisms (II.3),
      varieties as schemes (II.4 — bridges back to classical AG; safely
      skipped on first read), and sheaves of modules (II.5). The next
      load-bearing step is morphisms, then quasi-coherent sheaves.
    pause:
      kind: consolidation
      motivation: |
        You have schemes. Before pushing further, work problems II.2.1
        through II.2.5 to confirm you can compute Spec on concrete rings
        — the dual numbers, $\mathbb{Z}$, $k[x,y]/(xy)$ — and recognise
        the Zariski topology in each. These are not optional; they are
        the moment scheme theory becomes operational rather than abstract.

  - n: 3
    unit: 04.02.04
    tier: intermediate
    section_anchor: "II.3"
    why: |
      ...
    bridge_after: |
      ...

  # ... continued through Ch II §1–§9

connections_outward:
  - flow: vakil-ch3-5
    relation: parallel
    note: |
      Vakil covers the same material with functor-of-points first.
      A reader who finishes this flow can begin Vakil's flow at §6.

  - flow: voisin-vol1-ch6
    relation: feeds
    note: |
      Hartshorne Ch II is a prerequisite for Voisin's Hodge theory
      treatment — though Voisin assumes only the language, not the
      proofs.
```

Each step has:
- **n**: position in the sequence
- **unit**: which Codex unit
- **tier**: which tier to engage at this position
- **section_anchor**: which part of the source book this step covers (for traceability)
- **why**: explicit motivational pose — *why does the author put this concept here?*
- **read_strategy**: which sections of the unit to focus on, which to skip on first pass
- **bridge_after**: the inter-step transition prose — what the author would have written between chapters
- **pause** (optional): explicit pause-and-consolidate moments, with motivation

The flow has overall fields for `prerequisite_flows`, `prerequisite_units`, `outcome` (what the reader can do at the end), and `connections_outward` (which other flows feed in/out).

The bridges are the rhetorical scaffolding the unit-level reference doesn't have. They are what makes the flow a *teacher* and not a *catalogue*.

---

## 5. Agent protocol for generating flows

A flow is generated from a per-book equivalence plan. The protocol mirrors the equivalence-plan protocol but produces flow-scaffold output instead of unit content.

### Pass A — Trajectory extraction agent

**Input:** Per-book equivalence plan (§1 audit + §2 coverage diff) + book source if accessible.
**Tools:** Read, WebSearch (for course pages that adopt the book and include their own ordering), WebFetch.
**Task:** Produce the ordered `steps` list for an author flow — which Codex units, in which order, at which tier, anchored to which book section.
**Output:** Skeleton of `flows/<book-slug>-ch<n>.md` with a populated `steps` list (no bridges yet, no pause annotations).

**Agent prompt template:**
> You have the per-book audit at `plans/fasttrack/<book>.md`. Read §1.6 (sequencing graph) and §2.1 (theorem coverage diff). For each chapter the audit identifies, produce an ordered list of Codex units that cover that chapter. The order matches the author's section sequence within the chapter, not the DAG-default order. For each step, specify the unit ID, the section_anchor (book chapter/section), and the tier. Output a YAML steps list. Do not write bridges or pause annotations — that's Pass B.

### Pass B — Bridge-prose agent

**Input:** Pass A skeleton + `§1.7` from the equivalence plan (distinctive perspective).
**Tools:** Read; book source if accessible.
**Task:** For each step, write the `why`, `read_strategy`, and `bridge_after` fields, in the voice of the source author as established by §1.7.
**Output:** Filled-in flow markdown.

**Agent prompt template:**
> You have a flow skeleton at `flows/<flow-id>.md` and the per-book audit at `plans/fasttrack/<book>.md`. For each step, write three fields: (1) `why` — why does the author put this concept here, in this order? Refer to §1.7 of the audit (distinctive perspective). (2) `read_strategy` — which parts of the Codex unit to focus on at this stage. (3) `bridge_after` — the prose transition to the next step, in the author's voice. Write 80–150 words per bridge. The bridge should answer "what is the reader now equipped to do, and what will the author build next?"

### Pass C — Pause-and-motivate agent

**Input:** Pass B output + the author's known pause patterns (chapter ends, exercise sets, "now we are ready" moments).
**Tools:** Read; book TOC and exercise list.
**Task:** Identify ~3–5 pause moments per flow. Annotate `pause` blocks with consolidation guidance (work these exercises, review this earlier unit, recognise this pattern before pressing on).
**Output:** Final flow markdown.

### Pass D — Flow verification agent

**Input:** Final flow + the per-book equivalence plan + Codex DAG.
**Tools:** Read, Bash (validate flow constraints).
**Task:** Verify (i) every step's `unit` references a shipped Codex unit; (ii) the order respects the DAG (no step requires a unit that comes later); (iii) every section_anchor in the source book is covered by some step; (iv) bridges actually transition (last bridge mentions next step's content).
**Output:** Sign-off or specific failure call-outs.

### Pass E — Cross-flow weaving agent

**Input:** All flows produced for a strand.
**Tools:** Read; Glob.
**Task:** Populate `connections_outward` on each flow — which flows feed into this one, which flows continue from it, which flows are parallel alternatives.
**Output:** Updated `connections_outward` blocks across the strand's flows.

---

## 6. Site rendering — the reader experience

The flow scaffold gets a first-class UI surface at `/flow/[id]`.

**Page structure:**

```
/flow/hartshorne-ch2

  ┌─────────────────────────────────────────────────────┐
  │ Hartshorne Ch II — Schemes                          │
  │ Author flow · Strand A · ~60–90 hours               │
  │ Prerequisites: hartshorne-ch1 (or equivalent)       │
  │ Outcome: define schemes, compute Spec, …            │
  └─────────────────────────────────────────────────────┘

  Step 1 of 23 — II.1 (Affine schemes)
  ┌─────────────────────────────────────────────────────┐
  │ Why: Hartshorne opens Ch II §1 by motivating       │
  │ non-classical varieties: schemes generalise         │
  │ varieties to allow nilpotents …                     │
  │                                                     │
  │ Read strategy: Read the Beginner section once for   │
  │ the rings-and-geometry dictionary. Then read        │
  │ Intermediate cover-to-cover …                       │
  │                                                     │
  │ ▶ Read unit 04.02.02 — Affine scheme [Intermediate]│
  └─────────────────────────────────────────────────────┘

  ↓ Bridge

  ┌─────────────────────────────────────────────────────┐
  │ With Spec in hand, Hartshorne now builds the global │
  │ object: a scheme is a locally ringed space whose    │
  │ every point has an open neighbourhood isomorphic to │
  │ some Spec(R) …                                      │
  └─────────────────────────────────────────────────────┘

  Step 2 of 23 — II.2 (Schemes)
  …

  ◆ Pause (after step 2)
  ┌─────────────────────────────────────────────────────┐
  │ You have schemes. Before pushing further, work      │
  │ problems II.2.1 through II.2.5 to confirm you can   │
  │ compute Spec on concrete rings …                    │
  └─────────────────────────────────────────────────────┘

  Step 3 of 23 …
```

Reader progress (current step, completed steps) persists in localStorage initially, in Nucleus once that's deployed.

**Per-step affordances:**
- Click "Read unit" to open the unit page; return-to-flow link in the unit page's sidebar
- "Mark step complete" — moves progress, advances to next step
- "Defer this step" — for steps the reader chooses to skip on first pass (the `read_strategy` may suggest this)
- "Show alternative paths" — surfaces parallel flows (Vakil's path through the same material)

**Strand-level surface**: `/strands/A` shows all flows that traverse Strand A — author flows for Hartshorne, Vakil, Eisenbud-Harris; the synthesis flow `strand-a-from-zero`; themed flows that pass through (`canonical-bundle`, `riemann-roch-family`).

---

## 7. Verification — when does a flow successfully attenuate?

A flow signs off as `attenuation-verified` when:

1. **Sequence test**: The order of steps, taken in isolation, presents no jump where the reader needs an unstated concept.
2. **Bridge test**: Reading only the bridges (without the units), a reader gets a coherent narrative through the chapter — bridges form a continuous prose throughline.
3. **Pause-effectiveness test**: At each pause, the consolidation activities are achievable from the flow up to that point — the reader is equipped to do them.
4. **Outcome test**: A reader who completes the flow can demonstrate the `outcome` field's claims — randomly sample 3 outcomes, verify the flow content supports them.
5. **Voice test (for author flows)**: The flow's bridges read as the source author's voice as defined by the audit's §1.7. A blind reader presented with the bridges and the source author should be able to recognise the match.

The Pass-D verification agent runs tests 1–4 mechanically. Test 5 is a soft check; for high-stakes flows (Tier α books) it benefits from a human spot-check.

---

## 8. The full picture — folded scaffold stack

```
╔══════════════════════════════════════════════════════════════╗
║                  Layer 3: Flows                              ║
║   Author flows · Strand flows · Synthesis · Themed           ║
║   ↓ specifies ordered traversals + bridges + pauses          ║
╠══════════════════════════════════════════════════════════════╣
║                  Layer 2: Equivalence plans                  ║
║   Per-book audit + coverage diff + production plan           ║
║   ↓ ensures content equivalence per book                     ║
╠══════════════════════════════════════════════════════════════╣
║                  Layer 1: DAG                                ║
║   manifests/deps.json — partial-order prereq graph           ║
║   ↓ ensures no traversal is broken                           ║
╠══════════════════════════════════════════════════════════════╣
║                  Layer 0: Units                              ║
║   182 (currently) three-tier reference articles              ║
║   ↓ atomic curriculum content                                ║
╚══════════════════════════════════════════════════════════════╝
```

Each layer constrains the layer above. Each layer is independently traceable. Adding a new book is: produce its equivalence plan (Layer 2), update DAG edges (Layer 1) if new units appear, and produce one or more flows (Layer 3) that reproduce the book's teaching trajectory.

A reader can now choose how they engage:
- **Reference mode**: browse `/units` and `/concepts`, look things up
- **DAG mode**: pick an apex unit, trace prerequisites backward
- **Equivalence mode**: pick a book, follow its equivalence plan to know what to read
- **Flow mode**: pick a flow, walk it as a guided experience with bridges

Most readers will use flow mode. The other modes serve different needs (research lookup, prerequisite tracing, book-equivalence claims).

---

## 9. Pilot — first flow to build

For the same reasons we'd pilot the equivalence plan on Lawson-Michelsohn, the first flow should be **`flow:lawson-michelsohn-pt1`** — Lawson-Michelsohn Part I (Clifford algebras and spinors).

Why:
- Lawson-Michelsohn is Tier α and we already have ≥80% of the unit content
- Codex's spin-geometry strand was the original Wave-1 pilot, so the unit set is well-developed
- Part I is the foundation; the flow scaffolding pattern proved here transfers to Parts II–IV directly
- We can verify "voice test" (test 5) since Lawson-Michelsohn has a well-known prose style

**Pilot timeline:**
- Day 1: Pass A (trajectory extraction) — 1 agent, 30 min
- Day 1: Pass B (bridge prose) — 1 agent, 60 min
- Day 2: Pass C (pause moments) — 1 agent, 30 min
- Day 2: Pass D (verification) — 1 agent, 30 min
- Day 3: site UI — render the flow at `/flow/lawson-michelsohn-pt1`
- Day 4: review the rendered flow end-to-end as a reader would experience it

If the pilot delivers an attenuation-verified flow that genuinely reads as a guided Lawson-Michelsohn-Part-I traversal, the protocol scales to all Tier α books (12 author flows, plus 5 strand flows, plus the master synthesis flow = 18 flows for v0.7).

---

## 10. Estimated production at full scale

For each Tier α/β/γ book, two flows on average (book-level + chapter-level for longer books):

| Tier | Books | Flows | Steps per flow | Total steps |
|---|---|---|---|---|
| α | 12 | 24 | 25 | 600 |
| β | 24 | 48 | 20 | 960 |
| γ | 28 | 28 | 15 | 420 |
| Strand | — | 9 | 40 | 360 |
| Synthesis | — | 3 | 100 | 300 |
| Themed | — | 12 | 15 | 180 |

**Total: ~125 flows, ~2800 step entries, ~2800 bridge prose blocks, ~400 pause annotations.**

At ~30 min per flow per pass × 4 passes per flow = 2 hours per flow × 125 flows = ~250 agent-hours.

In wall time (with parallelism, 8–12 agents at once): ~3–5 weeks of production work, slotted between v0.7 and v1.0.

---

## 11. Risks specific to the flow layer

| Risk | Mitigation |
|---|---|
| Bridge prose feels artificial or AI-flavored | Train the Pass-B agent on actual chapter-transition prose from the book; require it to cite source phrasings verbatim where possible (within fair-use limits) |
| Voice test (5) is hard to automate | Solo-author flows for Tier α get human spot-check; non-Tier-α get agent-only verification with disclosure |
| Multiple flows through the same units create maintenance burden | Use the unit ID as the source of truth; flows reference units, never duplicate content; if a unit is updated, flows automatically pick up the change |
| Reader gets "lost" in long flows (60–90 hour Hartshorne flow) | Step counter, progress bar, "where am I in the chapter" map, ability to bookmark and return |
| Flows go stale as units evolve | Flow-validation pass runs as part of `validate_all.py`; flows that reference removed/renamed units fail the build |
| Themed flows are non-trivial to design | Themed flows are post-Tier-α; produce them after author flows are proven |
| Author flows that conflict with author's actual sequence (because we have unit gaps) | Per-flow disclosure: "this flow approximates Hartshorne's order; deviations are: [list]" |

---

## 12. Why this is the move

A curriculum without flows is a textbook with chapter headings but no chapters — readable as a list, not as a teaching. The unit/DAG/equivalence layers give Codex a complete reference; the flow layer gives Codex a *teacher*. Together, they let a learner choose: I want the book's voice (author flow), I want the strand's coherence (strand flow), I want to follow the meta-curriculum (synthesis flow), I want to chase a thread (themed flow). All four serve different purposes; all four exist on top of the same units.

This is what the original authors were doing when they wrote the books — choosing one specific path through their domain's DAG and orchestrating attenuation along it. Codex's flow scaffold makes that choice explicit, multiplied across authors, combinable across themes, browsable on demand. **The flows are the bridge from "Codex has the right material" to "Codex teaches the way the great books teach."**

---

*Plan v1. To be refined after the Lawson-Michelsohn-Pt1 pilot.*
