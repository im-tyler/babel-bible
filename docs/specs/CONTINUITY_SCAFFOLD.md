# Codex — Continuity & Connection Scaffold

A fifth-layer scaffold above flows. Specifies the connective-tissue infrastructure that lets parallel agents produce curriculum content while preserving continuity of thought between ideas — the moments where one concept dissolves into another, where two seemingly distinct results turn out to be the same theorem in different clothing, where a chapter ends with the reader feeling that the next chapter is *necessary*, not merely next.

This is the substitute for the single editorial mind that real books have. Without this scaffold, agents working in parallel produce a competent anthology of independent units. With this scaffold, they produce a continuous teaching where every part is in conversation with every other part.

Read after `docs/specs/FASTTRACK_FLOW_SCAFFOLD.md`, `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`, `docs/specs/UNIT_SPEC.md`.

---

## 1. The continuity problem

Real authors hold a whole subject in their head while writing. A chapter on schemes is written by someone who already knows what the chapter on cohomology will say, and so chooses framings, examples, and notation that pre-load the cohomology chapter. Conversely, the cohomology chapter is written by the same person who built up affine schemes earlier, and references those examples by name, by page, by the *exact phrasing* used previously. The continuity emerges because one mind ran the whole production.

Parallel agent production is structurally different. Agent 1 writes the schemes unit. Agent 2 writes the cohomology unit. They do not see each other's work. Each does an excellent job in isolation. But:

- Agent 1's schemes unit doesn't pre-load Agent 2's cohomology chapter, because Agent 1 doesn't know what framings Agent 2 chose.
- Agent 2's cohomology unit doesn't reach back into Agent 1's affine examples by name, because Agent 2 doesn't know which specific examples Agent 1 emphasised.
- The connections that would naturally appear in single-author writing (the "as we saw in §3, …" sentences, the "this is the same situation as …" recognitions) are absent or generic.

The output is technically correct, comprehensively covered, and pedagogically thin. The reader feels they are reading a reference, not a book. This is the **edited-anthology failure mode**.

The scaffold below prevents this failure mode by externalising what a single author's mind does internally: tracking every connection, broadcasting the relevant context to every agent, and running an editorial pass that explicitly weaves seams.

---

## 2. What continuity looks like — concrete

**Connection-poor (anthology mode):**

> *Cohomology unit*: "The sheaf cohomology of $\mathcal{F}$ on $X$ is defined as the right-derived functor of global sections. The first-cohomology group $H^1(X; \mathcal{F})$ classifies torsors, with applications to line bundles."

**Connection-rich (continuity mode):**

> *Cohomology unit*: "Recall from §4.02.02 that on an affine scheme $X = \mathrm{Spec}(R)$, the global-sections functor $\Gamma$ recovered the original module: $\Gamma(\mathrm{Spec}(R), \widetilde{M}) = M$. That equality is exact for affines and is one of the reasons affine schemes are computationally tractable. *On non-affine schemes the equality fails*. The failure is precisely measured by the higher-cohomology groups $H^i(X; \mathcal{F})$, the right-derived functors of $\Gamma$ — which is why, even though we never needed cohomology to do algebra over a single ring, we cannot avoid it when our scheme is glued from multiple affines. The first-cohomology group $H^1(X; \mathcal{F})$ then classifies precisely the $\mathcal{F}$-torsors that fail to glue from local sections — and as we will see in §4.05.02, line bundles are exactly the $\mathcal{O}^\times$-torsors, so this is also the genus of all line-bundle calculations."

The second passage is twice as long. It carries three explicit backward-references (to `04.02.02`, the affine vanishing fact), two forward-promises (the line bundle / Picard connection), one synthesis claim (cohomology measures the failure of an equality the reader already knew), and one motivational arc (why we couldn't avoid this even though we hoped to). None of that is decorative. Each move is *what makes the reader's mind track continuously through the topic.*

The cost: more words, more cross-references, more synthesis sentences. **This is the work the scaffold authorises and requires.** Agents must not abbreviate it.

---

## 3. The connection taxonomy

Agents must recognise nine kinds of connection between ideas. Each has its own prose pattern, its own signalling vocabulary, its own scaffolding cue.

| # | Connection | Prose pattern | Example |
|---|---|---|---|
| 1 | **Generalisation** | "X generalises Y by relaxing condition Z." | Ringed space generalises affine variety by allowing nilpotents |
| 2 | **Specialisation / instance** | "Y is the X-instance where Z holds." | A line bundle is a vector bundle of rank 1 |
| 3 | **Analogy** | "X and Y share the pattern P, with role-substitution Z." | Riemann-Roch on curves : Atiyah-Singer index theorem :: dim formula : analytical index |
| 4 | **Dual** | "X is the dual of Y under transformation T." | Spec turns rings into spaces; Γ turns spaces back into rings (anti-equivalence) |
| 5 | **Foundation-of** | "X is the substrate Y is built on." | Injective resolutions are the substrate sheaf cohomology is built on |
| 6 | **Limit / colimit** | "X is what Y becomes when Z is taken." | The stalk is the colimit of $\mathcal{F}(U)$ over $U \ni x$ |
| 7 | **Equivalence** | "X and Y are equivalent through T." | Algebraic and analytic categories on smooth projective variety, via GAGA |
| 8 | **Recurrence** | "We have seen this pattern before — in P, with the roles played by Q." | Functoriality of cohomology recurs in topology, AG, group cohomology |
| 9 | **Bridging theorem** | "Theorem T identifies X with Y under hypotheses H." | Hodge decomposition links algebra (Dolbeault) and topology (singular) |

Every Codex unit's `## Connections [Master]` section should classify each connection it draws by these nine types. Every flow's `bridge_after` field should explicitly invoke one or more of them. The taxonomy is the agent's vocabulary for talking about how ideas hang together — without it, agents fall back on "this relates to that" which carries no information.

---

## 4. The connection registry

A single artifact at `manifests/connections.json` records every connection between every pair of concepts. Maintained by the orchestrator (claude); read by every agent before they begin work.

Schema:

```json
{
  "version": 1,
  "connections": [
    {
      "id": "conn:002.scheme-affine-cover",
      "from": "alg-geom.scheme",
      "to": "alg-geom.affine-scheme",
      "type": "specialisation",
      "strength": "load-bearing",
      "anchor_phrase": "Every scheme is locally an affine scheme",
      "appears_in_units": ["04.02.01", "04.02.02"],
      "appears_in_flows": ["hartshorne-ch2", "vakil-ch3-5", "strand-a-from-zero"],
      "synthesis_note": "The affine-cover characterisation makes schemes a sheaf-theoretic generalisation of varieties; Spec is the foundation, the scheme is the gluing."
    },
    {
      "id": "conn:045.cohomology-affine-vanishing",
      "from": "alg-geom.sheaf-cohomology",
      "to": "alg-geom.affine-scheme",
      "type": "bridging-theorem",
      "strength": "load-bearing",
      "anchor_phrase": "Sheaf cohomology vanishes on affine schemes",
      "appears_in_units": ["04.03.01", "04.06.01"],
      "appears_in_flows": ["hartshorne-ch3", "strand-a-from-zero"],
      "synthesis_note": "Serre's theorem; the foundational reason affine geometry is module theory in disguise. Anchor for the entire 'vanishing on affines' theme."
    },
    {
      "id": "conn:108.sheaf-cohomology-line-bundles",
      "from": "alg-geom.line-bundle-scheme",
      "to": "alg-geom.sheaf-cohomology",
      "type": "instance",
      "strength": "load-bearing",
      "anchor_phrase": "Line bundles classified by H^1(O^×)",
      "appears_in_units": ["04.05.03", "04.03.01"],
      "appears_in_flows": ["hartshorne-ch3", "voisin-vol1-ch6"],
      "synthesis_note": "Picard group as a sheaf-cohomology computation. Foundational for both AG (Picard scheme) and complex geometry (exponential sequence)."
    }
  ]
}
```

Every connection is registered with a stable ID. Multiple units, flows, and bridges can refer to the same connection by ID — and *do*, when they're talking about the same thing. This is how agents working on different units make sure they're using the same vocabulary for the same idea.

The connection registry is what a single author has internally as "the things I will have already built up by chapter 5." Agents reach for it explicitly.

---

## 5. Per-unit connection annotations

Every unit's frontmatter gains explicit connection slots:

```yaml
connections:
  in:                # backward connections — what earlier units this builds on
    - conn:002.scheme-affine-cover
    - conn:045.cohomology-affine-vanishing
  out:               # forward promises — what later units pick this up
    - conn:108.sheaf-cohomology-line-bundles
    - conn:267.dolbeault-from-sheaf-cohomology
  lateral:           # off-prereq-chain connections — analogies, recurrences, duals
    - conn:301.singular-cohomology-analogy
    - conn:412.group-cohomology-recurrence
  synthesis_claims:  # explicit "putting it together" claims this unit makes
    - "Cohomology measures local-to-global obstruction"
    - "Vanishing on affines = local triviality of derived structure"
```

The Master `## Connections` section then enumerates these by ID and prose-elaborates each. The agent producing the unit cannot just write "this relates to" — it must:

1. Look up the relevant connection in `manifests/connections.json`
2. Use the registered `anchor_phrase`
3. Reproduce the registered `synthesis_note` framing
4. Add unit-specific elaboration

This way, when Unit A and Unit B both claim "cohomology measures local-to-global obstruction," they say so in the same words, anchored to the same registered connection. The connection becomes a *named object* that recurs throughout the curriculum, building up reader recognition.

---

## 6. Per-flow throughline tracking

Each flow gains structural fields for its argumentative throughline:

```yaml
throughline:
  central_question: |
    "How do we measure the obstructions to gluing local data into global
    objects in algebraic geometry?"
  recurring_concepts:
    - sheaf
    - cohomology
    - vanishing-on-affines
    - line-bundle
  synthesis_beats:
    - after_step: 5
      claim: "We now have schemes; the question becomes how local data on a scheme glues globally."
    - after_step: 11
      claim: "Sheaf cohomology is exactly the failure of local-to-global gluing."
    - after_step: 18
      claim: "Vanishing-on-affines means the question is purely about non-affine schemes."
    - after_step: 23
      claim: "All of this culminates in Riemann-Roch — a precise dimension formula for the cohomology of line bundles."
  closing_synthesis: |
    The chapter has built schemes, defined sheaves on them, derived their
    cohomology, and proved Riemann-Roch as the foundational dimension
    formula. The thread connecting all of these is the obstruction-to-gluing
    motif: schemes are global objects from local data; sheaves package
    such data; cohomology measures when gluing fails; line bundles realise
    the simplest non-trivial gluing-failure; Riemann-Roch counts it.
```

Flows now have an explicit *argument*, not just a sequence. The bridges between steps are arguments-in-progress. Pause moments are where the argument consolidates. The closing synthesis names the throughline that animated the whole flow.

Agents producing bridges (Pass B in the flow protocol) read the throughline first. Each bridge's prose advances the argument by one step, using the recurring-concepts vocabulary and explicitly hooking into the synthesis_beats schedule.

---

## 7. The agent connection brief

Before any agent — audit, gap-analysis, production, flow-extraction, bridge-prose, verification — begins work, it receives a **connection brief** assembled from the registry, the throughline of any flow it touches, the relevant per-book §1.7, and adjacent units' connection annotations.

The brief contains:

```markdown
# Agent Connection Brief — <task>

## What this task touches
- Units in scope: 04.05.01, 04.05.02, 04.05.03, 04.05.04
- Flows in scope: hartshorne-ch3, strand-a-from-zero
- Source book §: Hartshorne II.6

## Connections you must use
- conn:002.scheme-affine-cover (from 04.02.01 ← 04.02.02)
- conn:108.sheaf-cohomology-line-bundles (from 04.05.03 → 04.03.01)
- conn:152.divisor-line-bundle-correspondence (from 04.05.01 ↔ 04.05.03)

## Anchor phrases for this scope
- "Every scheme is locally an affine scheme"
- "Picard group classified by H^1(O^×)"
- "Cartier and Weil divisors agree on locally factorial schemes"

## Throughlines you are advancing
- "Obstructions to gluing" — your unit must connect to the obstruction motif
- "Local factoriality" — recurrent regularity hypothesis on schemes

## Recently completed work in adjacent units
- 04.02.01 (Scheme): emphasises Spec/Γ adjunction, locally-ringed-space definition
- 04.02.02 (Affine scheme): Hartshorne II.1 framing, generic-point intuition
- 04.03.01 (Sheaf cohomology): right-derived-functor definition; vanishing on affines
- 04.06.01 (Quasi-coherent sheaf): module-sheaf equivalence on affines

## Author voice (from §1.7 of audit)
- Hartshorne writes in dense, definitive prose with minimal hedging
- Heavy use of universal-property characterisations
- Examples deferred until after the abstract definition

## What you must NOT do
- Do not introduce new connections not in the registry without flagging
  them for orchestrator addition
- Do not paraphrase anchor phrases — use them verbatim
- Do not claim a unit is the "definitive" treatment of a concept
  unless that unit is the apex unit per docs/catalogs/CONCEPT_CATALOG.md
```

The brief is what gives the agent the *cognitive context* a single author would have internally. Without it, the agent works in isolation. With it, the agent's output is shaped by the surrounding curriculum even though the agent didn't author it.

---

## 8. The connection-weaving pass

A dedicated agent pass runs after each batch of parallel production. Its sole job: read the produced units/flows together, find every place where continuity is broken, and weave the seams.

**Pass W — Connection-weaving agent**

**Input:** A batch of recently-produced units or flow steps.
**Tools:** Read, Edit, Bash (validate_unit.py / flow validators).
**Task:**
1. Read each produced unit/flow step in the batch.
2. For every pair of items that share a connection (by registry lookup), verify the explicit prose mention of that connection in both directions.
3. Where missing, edit prose to insert the missing reference using the registered anchor phrase and synthesis note.
4. Verify forward-promises ("we will see in §X") match registered forward connections.
5. Verify backward-references ("recall from §Y") match registered backward connections.
6. Add `synthesis_claims` to unit frontmatter and bridge `synthesis_beats` to flow files where missing.

**Output:** Updated units/flows with continuity gaps filled. A `weaving_report.md` listing every edit and its rationale.

This pass is what a real editor does when reading two consecutive chapters by different ghostwriters: notes the seam and stitches it. It is essential. Without it, parallel agent production *will* leak continuity.

---

## 9. Editorial voice document

A single document at `style/editorial-voice.md` defines the unified prose style every agent must respect. Without it, parallel agents produce stylistically inconsistent prose.

Captures:

- **Sentence-level conventions**: paragraph length, equation framing, definition style.
- **Reference patterns**: "as we saw in" vs "by §X.X" vs "(cite)"; how forward-promises are phrased.
- **Synthesis vocabulary**: when to say "this is the same as," "this generalises," "this is dual to," etc. — the prose patterns matched to the connection taxonomy.
- **Originator-voice integration**: how to weave a Cartan or Riemann or Hartshorne phrase into modern prose without being faux-historical.
- **Hedging / certainty calibration**: when to say "we sketch," "we prove," "we observe" — load-bearing vocabulary for the reader's certainty level.
- **Cadence**: short sentences for definitions, long sentences for synthesis — patterns that recur and accumulate signal.

The editorial voice document is part of every agent's system prompt — appended to the connection brief.

---

## 10. Continuity metrics

Continuity must be measurable to be enforceable. Six metrics:

1. **Backward-reference density** — number of explicit references to earlier units per 1000 words, per unit. Target: ≥ 8.
2. **Forward-promise density** — explicit "we will see" / "this builds toward" phrasings per 1000 words. Target: ≥ 3.
3. **Lateral-connection count** — number of off-prereq-chain connections invoked per unit. Target: ≥ 3 per unit's Master section.
4. **Synthesis-claim count** — explicit named throughline claims per unit. Target: ≥ 2 per Intermediate section, ≥ 4 per Master section.
5. **Anchor-phrase reuse** — fraction of registered anchor phrases used verbatim when their connections are invoked. Target: ≥ 95%.
6. **Throughline-coverage rate** — for each flow, percentage of synthesis beats explicitly hit by some bridge. Target: 100%.

`scripts/measure_continuity.py` runs these metrics across the curriculum, produces `manifests/continuity_report.md`, and fails the build if any metric drops below threshold.

---

## 11. Verification — when has continuity been preserved?

The continuity verification pass is a sixth pass after Pass W (weaving). It runs on the curriculum as a whole, not on individual units, because continuity is global.

**Pass V — Continuity verification agent**

**Input:** All units, flows, and the connection registry.
**Tools:** Read, Bash (`measure_continuity.py`).
**Task:**
1. Run all six continuity metrics across all units and flows. Verify thresholds.
2. Sample 10 random pairs of connected units (per the registry); read both; verify the connection is explicit and bidirectional in the prose of both.
3. Sample 5 random flows; for each, read the throughline and verify the synthesis_beats are actually hit by the corresponding bridges.
4. Sample 10 random units' Master Connections sections; verify each connection is classified by one of the nine taxonomy types.
5. Read 3 random consecutive-step bridges in flows; verify they read as a continuous argument, not as independent paragraphs.
6. Identify any specific seam (between two units, between two flow steps) where continuity is broken. Either route to weaving for repair, or flag as a curriculum-level continuity defect.

**Output:** Sign-off as `continuity-verified` or specific deficit list. Updates to `manifests/continuity_report.md`.

Continuity verification is run as part of every release gate. Curriculum cannot ship without it.

---

## 12. The five-layer stack — finalised

Codex's full architecture, with continuity as the binding agent:

```
╔═════════════════════════════════════════════════════════════════════╗
║                Layer 4: Continuity & connection scaffold            ║
║   Connection registry + per-unit annotations + per-flow throughline ║
║   + agent connection briefs + weaving pass + editorial voice        ║
║   ↓ binds the layers below; substitutes for single-author mind      ║
╠═════════════════════════════════════════════════════════════════════╣
║                Layer 3: Flows                                       ║
║   Author flows · Strand · Synthesis · Themed                        ║
║   ↓ specifies ordered traversals + bridges + pauses                 ║
╠═════════════════════════════════════════════════════════════════════╣
║                Layer 2: Equivalence plans                           ║
║   Per-book audit + coverage diff + production plan                  ║
║   ↓ ensures content equivalence per book                            ║
╠═════════════════════════════════════════════════════════════════════╣
║                Layer 1: DAG                                         ║
║   manifests/deps.json — partial-order prereq graph                  ║
║   ↓ ensures no traversal is broken                                  ║
╠═════════════════════════════════════════════════════════════════════╣
║                Layer 0: Units                                       ║
║   182 (currently) three-tier reference articles                     ║
║   ↓ atomic curriculum content                                       ║
╚═════════════════════════════════════════════════════════════════════╝
```

Layer 4 binds the other four. Without Layer 4, parallel agent production yields edited-anthology output — competent in pieces, fractured in totality. With Layer 4, every unit is in conversation with every other unit, every bridge advances a flow's argument, every connection is a named object recurring through the curriculum. This is the prerequisite for Tyler's directive: agents can work autonomously, in parallel, across the 64-book Fast Track corpus, without intervention — *and produce a continuous teaching*.

---

## 13. Agent operations — what changes

When the equivalence and flow plans are run agentically, every agent task gains four new requirements:

1. **Read the connection brief** before producing any content. The brief is generated by the orchestrator from the registry + relevant flow throughlines + adjacent units' annotations.
2. **Produce explicit connection annotations** in unit frontmatter and flow steps — not just prose. Every output is registry-traceable.
3. **Use registered anchor phrases verbatim.** If a phrase is registered, it must appear; if a connection is registered, the prose must invoke it. Agents may extend, but not paraphrase.
4. **Flag novel connections.** When an agent identifies a new connection not in the registry, it adds a proposal to `manifests/connection_proposals.md` for the orchestrator to integrate. Agents do not unilaterally add to the registry.

The orchestrator (claude in the current setup) holds the registry. After every batch of parallel work, the orchestrator runs Pass W (weaving) and Pass V (verification) before integrating registrations into `docs/catalogs/CONCEPT_CATALOG.md` and `deps.json`.

---

## 14. Production protocol — how Layer 4 gets built

Layer 4 is not built once and frozen. It is built incrementally as the curriculum grows. Each tier of book production extends it:

### Phase 1 — Bootstrap the registry from existing units

Run one agent over all 182 currently-shipped units. Task: read each Master `Connections` section, identify each invoked connection, classify by type, register in `connections.json`. Establish the initial registry of ~400–600 connections.

This is a one-time pass. Estimated 1–2 agent-hours.

### Phase 2 — Add connection annotations to existing unit frontmatter

For each shipped unit, an agent adds the `connections:` block to frontmatter, populated from the registry. Works in parallel batches.

Estimated 4–6 agent-hours total across all 182 units.

### Phase 3 — Write the editorial voice document

A senior agent (claude in the current setup) reads ~10 representative shipped units (Cartier divisor, Schur's lemma, sheaf cohomology, Hodge decomposition) and synthesises the prose patterns into `style/editorial-voice.md`. Reviewed and refined before finalisation.

Estimated 1–2 agent-hours plus human review.

### Phase 4 — Bootstrap the throughlines for existing flows

When the first flows are produced (Lawson-Michelsohn pilot, then Tier α flows), each flow's `throughline` block is written explicitly. The Pass-A trajectory-extraction agent gains the throughline-writing responsibility.

Estimated 30 minutes per flow; folded into flow production cost.

### Phase 5 — Run the weaving pass on all existing units

After connection annotations are added (Phase 2), Pass W runs over the entire shipped corpus, identifying every continuity gap and stitching seams.

Estimated 4–8 agent-hours, broken into per-strand batches.

### Phase 6 — Continuous integration

From this point forward, every batch of new units (Tier α/β/γ books) automatically gets:
- Connection brief generation before agent dispatch (orchestrator)
- Pass W after each batch of parallel work
- Pass V at every release gate

Layer 4 maintains itself.

---

## 15. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Agents over-cite, producing prose dense with cross-references that hurt readability | Continuity metrics have *minimum* thresholds; readability metrics enforce *maximums* (max ~12 backward-references per 1000 words). Style document specifies the elegant deployment of references. |
| Connection registry bloats into a meaningless pile of "X relates to Y" entries | Connections must be `load-bearing` or `synthesis` strength to register; weaker affinities don't enter the registry. The taxonomy enforces classification. |
| Editorial voice document becomes a straitjacket that stifles agent prose variety | Voice document specifies *invariants* (cadence patterns, vocabulary for connection types) but leaves micro-choices to agents. Reviewed quarterly. |
| Weaving pass introduces inconsistencies because it edits in isolation | Weaving pass operates on full batch context, not individual units. Validates after editing. |
| Continuity metrics fail in early Phase-2 (before backfill complete) | Phased thresholds: shipped pre-Layer-4 units get a 6-month grace period; new production must hit thresholds immediately. |
| New connections proposed by agents flood the proposal file | Proposals batched weekly for orchestrator review; only `load-bearing` proposals integrate. |
| Throughlines for synthesis flows (`fasttrack-canonical`) become impossibly long | Multi-tier throughlines: each strand has its own throughline, and the synthesis flow stitches strand throughlines together via meta-throughlines. |

---

## 16. Why this is what makes the autonomy work

The Tyler directive is: agents work through all units without intervention. That is achievable when the agents have, externally, what a single author has internally — a held picture of the whole and the granular memory of every connection. Layer 4 is that held picture, externalised into:

- The registry (the connection memory)
- Per-unit / per-flow annotations (the local connection markers)
- The connection brief (what each agent receives before working)
- The editorial voice (how the whole sounds in one voice)
- The weaving pass (how seams are repaired)
- The continuity metrics (how completeness is measured)
- The verification pass (how completeness is signed off)

With this scaffold, an agent producing the 47th unit in a 200-unit batch is not working blind. It has, in its connection brief, the explicit framings of units 1–46 it must connect to, the explicit promises of units 48+ it must pre-load, the lateral resonances across strands, the anchor phrases that maintain shared vocabulary, the throughline of the flow that this unit advances by one step. Every choice the agent makes is shaped by the cumulative production state.

The output is not a 200-unit anthology. It is a continuous teaching, produced by parallel agents, that reads as if a single mathematician held the whole subject in their head and wrote it out — because every agent had access to the externalised version of that single mind.

That is the work of this scaffold: to make autonomous, parallel, agent-driven curriculum production produce *continuous teaching*. Without it, Codex would be a competent reference. With it, Codex teaches.

---

*Plan v1. Phase 1 (registry bootstrap) is the first executable step; estimated 1–2 hours of orchestrated agent work to establish the initial registry from 182 shipped units.*
