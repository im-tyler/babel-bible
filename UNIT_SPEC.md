# Codex — Unit Specification

The canonical format for a Codex learning unit. Every produced unit must conform. Used by content producers (human or AI) and by reviewers (rubric keys directly off this spec).

Read `BRIEF.md` first for audience, tier, and mastery definitions.

---

## 1. Core concept

A **unit** is the smallest shippable piece of curriculum: one concept, one theorem cluster, or one technique. A unit contains content at all three tiers in a single markdown source file. UI tier filters determine what each learner sees.

- **Granularity target:** ~20 to 50 minutes of Master-tier reading time (including exercises). Too small = unit fragmentation; too big = unit gets unwieldy.
- **Atomicity rule:** one unit has one primary concept. "Vector space" is one unit. "Vector space, linear map, basis" is three units that link to each other.

---

## 2. File location & naming

```
content/<section>/<chapter>/<unit-id>-<slug>.md

# Example
content/01-fundamentals/01-linear-algebra/01.01.03-vector-space.md
```

- `<unit-id>` is dotted triple: `section.chapter.ordinal` (e.g., `01.01.03`).
- `<slug>` is kebab-case, derived from title.
- Lean artifact lives in `lean/Codex/<Section>/<Chapter>/<Slug>.lean` with the same hierarchy.

---

## 3. Required file structure

```markdown
---
id: 01.01.03
title: Vector space
slug: vector-space
section: fundamentals
chapter: linear-algebra
concept_catalog_id: linalg.vector-space  # from CONCEPT_CATALOG.md
prerequisites:
  - 00.02.05  # function
  - 01.01.01  # field
  - 01.01.02  # scalar
successors:
  - 01.01.04  # subspace
  - 01.01.05  # linear combination
tier_anchors:
  beginner: "3Blue1Brown — 'Essence of Linear Algebra' Ch. 1"
  intermediate: "Axler — Linear Algebra Done Right §1.A"
  master: "Lang — Algebra Ch. III §1"
tiers_present: [beginner, intermediate, master]  # subset actually filled in
references:
  - source: quantum-well
    path: "Mathematical foundations/Algebra/Linear Algebra and Matrix Theory/Vector space.md"
  - source: shilov
    path: "Shilov-LinearAlgebra.pdf"
    locator: "Ch. 1, §1.1"
  - source: tong
    path: "raw/pdfs/vc/vc.pdf"
    locator: "Ch. 1"
lean_module: Codex.LinearAlgebra.VectorSpace
lean_status: full  # full | partial | none
lean_mathlib_gap:   # required iff lean_status: none
human_reviewer:     # required iff lean_status: none at Intermediate+
estimated_time:
  beginner: 15m
  intermediate: 30m
  master: 60m
status: draft  # draft | review | approved | shipped
produced_by: agent-producer-v1
reviewed_by: []
---

## Intuition [Beginner]
...

## Visual [Beginner]
...

## Worked example [Beginner]
...

## Check your understanding [Beginner]
...

## Formal definition [Intermediate+]
...

## Key theorem with proof [Intermediate+]
...

## Exercises [Intermediate+]
...

## Lean formalization [Intermediate+]
...

## Advanced results [Master]
...

## Full proof set [Master]
...

## Connections [Master]
...

## Historical & philosophical context [Master]
...

## Bibliography [Master]
...
```

---

## 4. Frontmatter fields — spec

| Field | Required | Notes |
|---|---|---|
| `id` | yes | dotted triple, globally unique |
| `title` | yes | human-readable, title-case |
| `slug` | yes | kebab-case, derives filename |
| `section`, `chapter` | yes | match directory structure |
| `prerequisites` | yes | list of unit IDs; every listed ID must exist as a published unit at time of this unit shipping. Integrator enforces. **Apex / top-down production exception:** if `pending_prereqs: true` is set, listed IDs may reference not-yet-produced units; they go into the next-wave production queue and the integrator records the dependency edge in `manifests/deps.json` with state `pending`. Do not use `pending_prereqs: true` outside top-down production waves. |
| `pending_prereqs` | no (default `false`) | when `true`, prereq IDs may point at not-yet-produced units. Used during apex-first production. |
| `successors` | no | populated by Integrator; producers leave empty |
| `tier_anchors` | yes | name the specific anchor source per tier. Accepted values per tier: a string naming the anchor (e.g. `"Lawson-Michelsohn §I.1"`) **or** the literal `deferred` (without quotes is a YAML tag; quoted `"deferred"` works) when that tier is not in `tiers_present`. |
| `references` | yes | ≥1 entry. By default each `path` must resolve in `reference/` at build time. An entry may instead set `pending: true` with `pointer:` linking to `NEED_TO_SOURCE.md` (e.g. `pointer: "NEED_TO_SOURCE.md#75"`) to declare a citation that will resolve once the source is acquired. Pending citations count toward `≥1` but a unit may not have *only* pending citations — at least one resolved citation is required. |
| `lean_module` | yes if Mathlib covers | canonical Lean module path |
| `lean_status` | yes | see §7 |
| `lean_mathlib_gap` | yes if `lean_status: none` | short note on *why* Mathlib doesn't cover (names the gap; feeds upstream-contribution roadmap) |
| `human_reviewer` | yes if `lean_status: none` at Intermediate+ | name of the domain expert who signed off on correctness |
| `tiers_present` | yes | subset of `[beginner, intermediate, master]` actually written in this unit; rubric only runs on present tiers |
| `concept_catalog_id` | yes | unique id from `CONCEPT_CATALOG.md` canonical list; prevents two producers declaring the same concept differently |
| `estimated_time` | yes | guides learner pacing; Beginner 10–20m, Intermediate 20–45m, Master 45–90m typical |
| `status` | yes | drives the pipeline (see §12) |

---

## 5. Sections — detailed spec

Every section heading carries a tier marker in square brackets. The marker is load-bearing: the UI filter keys off it.

### `## Intuition [Beginner]`
- **Length:** 1–3 short paragraphs (≤ 120 words per paragraph).
- **Goal:** convey why this concept exists and what it captures *before* any formal definition.
- **Rules:**
  - No undefined formal notation.
  - No proofs, no QED, no "Let X be...".
  - One concrete analogy from everyday experience minimum.
  - Must answer: "Why do we bother with this?"

### `## Visual [Beginner]`
- **Content:** one embedded image, animation, or interactive widget; or a reference to a 3Blue1Brown video (acceptable as a stopgap for pilot units; must be replaced with original content before v1.0).
- **Alt text required** for accessibility and RAG retrieval.

### `## Worked example [Beginner]`
- **Length:** fully worked, with specific numbers (not variables).
- **Goal:** a concrete instance the reader can compute along with.
- **Rules:**
  - All steps shown, nothing "obvious".
  - End with "what this tells us" — the takeaway.

### `## Check your understanding [Beginner]`
- 2–4 questions.
- Answer types allowed at this tier: multiple-choice, true/false, one-number numeric.
- Each question declares `answer`, `hint`, `feedback-correct`, `feedback-wrong` (see §6 interactivity schema).

### `## Formal definition [Intermediate+]`
- The standard definition as it would appear in the Intermediate anchor text.
- Notation introduced here must be listed in the notation glossary (auto-linked).
- Counter-examples or non-examples included where helpful.

### `## Key theorem with proof [Intermediate+]`
- One signature theorem for the unit.
- Full proof, written to the standard of the Intermediate anchor text.
- Proof uses **Lean syntax-compatible notation** where possible (so Lean formalization below mirrors 1:1).

### `## Exercises [Intermediate+]`
- 5–10 problems, difficulty ladder: 2 easy, 3–5 medium, 2–3 hard.
- Answer types allowed: numeric, symbolic, multiple-choice, short-answer-with-rubric.
- Each problem tagged with difficulty, topic, and solution rubric (see §6).

### `## Lean formalization [Intermediate+]`
- Inline Lean 4 code block showing the statement and (where Mathlib covers) the proof.
- Full formalization lives in the `lean_module` path; this section is the "readable" view.

### `## Advanced results [Master]`
- Additional theorems, harder problems, non-obvious perspectives.
- No upper limit on length, but coherence required — this is not a dumping ground.

### `## Full proof set [Master]`
- Formal proofs of everything in "Advanced results" that can be proved.
- Preferred: Lean-verified. Otherwise human-reviewed, flagged.

### `## Connections [Master]`
- How this concept shows up later in the curriculum.
- Cross-references to downstream graduate-level units.

### `## Historical & philosophical context [Master]`
- Where did this idea come from? Who mattered? What's the modern generalization?
- Not required to be long. Required to be accurate. Cite primary sources in bibliography.

### `## Bibliography [Master]`
- Primary-literature references beyond the Codex reference archive.
- BibTeX or similar structured format preferred.

---

## 6. Interactivity — exercise schema

Exercises are structured, not freeform. They ship as static-renderable markdown today, and as interactive widgets once the platform supports it. Same source, both render paths.

**v0.1 production format — semantic HTML.** Neutron's `marked` engine doesn't process Pandoc-style fenced divs (`:::`), so exercises use `<aside class="exercise">` HTML blocks with structured `data-*` attributes. Marked passes raw HTML through unchanged; the renderer styles them via CSS; future interactivity can read the `data-*` attributes.

```html
<aside class="exercise" data-difficulty="medium" data-type="numeric">
<p class="exercise__label"><strong>Exercise (medium, numeric).</strong></p>
<p>Given the vector $v = (3, 4)$ in $\mathbb{R}^2$, compute $\|v\|$.</p>
<details class="exercise__hint"><summary>Hint</summary>
Remember the definition of the Euclidean norm.
</details>
<details class="exercise__answer"><summary>Answer</summary>
<p><strong>$5$.</strong> $\sqrt{9 + 16} = 5$.</p>
</details>
</aside>
```

Future format (once Neutron's `marked` extension pipeline is wired): `:::` Pandoc-style fenced divs with YAML-like fields, parsed by a remark-directive plugin into the same HTML structure. Both the canonical UNIT_SPEC and the producer agents should target the v0.1 HTML format until that plugin is in place.

### Supported `type` values

| `type` | Answer shape | Auto-checkable |
|---|---|---|
| `multiple-choice` | one of N options | yes |
| `true-false` | boolean | yes |
| `numeric` | number + tolerance | yes |
| `symbolic` | SymPy-parseable expression | yes (server-side) |
| `short-answer` | text matched against regex OR rubric | partial — regex auto, rubric human/LLM |
| `lean-proof` | Lean 4 tactic script | yes (Lean compiler) |
| `open-ended` | prose answer | human/LLM review only |

### Required fields per exercise (v0.1 HTML mapping)

| Logical field | HTML representation |
|---|---|
| `type` | `data-type="…"` on outer `<aside>` |
| `difficulty` | `data-difficulty="easy" \| "medium" \| "hard"` on outer `<aside>` |
| `prompt` | first `<p>` after `.exercise__label` |
| `options` (multiple-choice only) | `<ol class="exercise__options" type="A">` |
| `hint` | `<details class="exercise__hint"><summary>Hint</summary>…</details>` |
| `answer` | `<details class="exercise__answer"><summary>Answer</summary>…</details>` |
| `feedback-correct`, `feedback-wrong` | merged into the answer details paragraph; will be split when interactive renderer arrives |

---

## 7. Lean integration

### `lean_status` values

- **`full`**: theorem and all proofs formalized in Mathlib-compatible Lean 4. Compiles clean. The `lean_module` path must exist and be wired into the Codex Lean build.
- **`partial`**: **the theorem statements must compile** (no missing imports, no syntax errors), but proofs may be `sorry`-gated or partial. The `lean_module` path must exist. The named `human_reviewer` verifies the proof gap is actually believed-true.
- **`none`**: Mathlib doesn't cover this material (common at frontier: spin geometry, QFT, advanced algebraic geometry). Unit ships *without* a `lean_module` path; `lean_mathlib_gap` text describes the specific Mathlib coverage missing; `human_reviewer` is named as the correctness gate. The aggregated `lean_status: none` units form the upstream Mathlib contribution roadmap.

### `lean_module` path verification

- If `lean_status` is `full` or `partial`, the path declared in `lean_module:` must correspond to an existing file in `lean/` and that file must successfully `lake build` as part of the Codex Lean project.
- If `lean_status: none`, the `lean_module:` field must be absent or empty; declaring a path is a build error.

### Formalization rules

- Unit must declare `lean_module` if `lean_status != none`.
- Lean module must build as part of the Codex Lean project. CI enforces.
- Lean module is not a replacement for the Master-tier proof prose — it is a verification companion.
- Tactic proofs preferred over term-mode where readability differs.

### When Mathlib doesn't cover

`lean_status: none` is an **accepted state**, not a failure. At the top of Fast Track, expect this to dominate. Requirements:
- `lean_mathlib_gap` field in frontmatter names the specific gap (e.g., "Mathlib lacks `CliffordAlgebra.spinStructure`").
- `human_reviewer` field names the domain expert who verified correctness.
- Aggregated gaps feed a contribution roadmap upstream to Mathlib — every `lean_status: none` is a formalization target.

This reflects the honest state of Mathlib coverage as of 2026: extensive for undergraduate core, thin-to-absent for graduate physics and advanced geometry. Lean is a correctness accelerator where it applies, not a universal quality gate.

---

## 8. Reference citations

Every `## Key theorem`, `## Formal definition`, and `## Advanced results` section must cite at least one source from the `reference/` archive.

Citation syntax (inline):

```markdown
The formal definition follows Shilov [ref: shilov Ch. 1 §1.1].
```

Where `shilov` maps to an entry in frontmatter `references` with `source: shilov`. Renderer resolves to a click-through.

**Citation must resolve to a real file in `reference/`.** Automated check at build time: any unresolved `[ref: …]` fails the build.

---

## 9. Cross-references to other units

Inline:

```markdown
A [vector space][01.01.03] is a set with two operations...
```

Renderer resolves `[01.01.03]` to the unit's page at the learner's current tier. Integrator agent validates all cross-refs at integration time.

Broken cross-refs fail the build.

---

## 10. Notation glossary

All formal notation introduced in Intermediate+ sections must appear in the project-wide notation glossary at `_meta/NOTATION.md`. Auto-linkable: first use of a symbol in a unit links to its glossary entry.

Producer adds new entries when introducing notation not already present. Integrator agent checks for unregistered symbols and flags.

---

## 11. Style rules

### Voice

- Second-person ("you") for Beginner intuition sections; third-person impersonal for Intermediate+ formal content.
- Emulate the *rigor* of the anchor text, not the literal prose. Do not copy sentences. Do not paraphrase closely. Rewrite.
- **Master-tier prose standard**: Lawson-Michelsohn, Hörmander, Kato — declarative, structurally honest, sparing with motivation, generous with the precise statement of universal properties, confident in categorical and functorial language without ostentation. Six prose failure modes are explicitly disallowed at Master tier and checked by the rubric (`QUALITY_RUBRIC.md` §M):
  1. No section-level metacommentary (don't narrate what a section is doing — enact structure through theorem ordering).
  2. No "Counterexamples to common slips" bullet lists at Master tier — fold into running prose. (Encouraged at Intermediate as a `### Counterexamples to common slips` subsection; prohibited at Master.)
  3. No hedged futures or apologies for omission ("we will see…", "we do not state…").
  4. No valedictory closing paragraphs in Historical & philosophical context — cite, attribute, stop.
  5. No real-time error correction in worked examples — compute correctly the first time.
  6. No triplicate emphasis or rhetorical italics — italics are for definitions and proper names.

### Notation

- Consistent across units. Glossary (§10) is authoritative.
- LaTeX for all math: `$...$` inline, `$$...$$` display.
- No Unicode-only math (except in prose where appropriate).

### Length ceilings

- Beginner intuition paragraph: ≤ 120 words.
- Any single paragraph anywhere: ≤ 250 words.
- Proof: no limit — but must be continuous, not bulleted.

### Prohibited phrasings (case-insensitive)

Two classes — see `QUALITY_RUBRIC.md` §0 for the full list and tier-specific application:

- **Slop (any tier)**: "obviously", "clearly", "it is easy to see", "as we will see", "now, let's consider", "trivial(ly)".
- **Hedged futures and LM-failure-mode phrases (Master tier only)**: "we will see", "we will rely on", "we do not state", "a subtlety worth noting", "the right organising principle", "the structural fact that organises", "the philosophical point is", "the deeper philosophical content".

Beginner and Intermediate tiers may use the second-class phrasings pedagogically (e.g., "we will see" as a forward pointer in Beginner intuition is fine).

### Other prohibited

- Unattributed analogies from other sources.
- Forward references to un-shipped units (use `pending_prereqs: true` and a `pending` cross-ref instead).

---

## 12. Lifecycle & status field

The `status` frontmatter field drives the pipeline. Producer writes `draft`. Reviewer changes to `review`. On pass, Integrator changes to `approved`. Publishing pipeline promotes to `shipped`.

| status | Meaning |
|---|---|
| `draft` | Producer output; not yet reviewed |
| `review` | In reviewer queue |
| `approved` | Passed all reviews; ready to ship |
| `shipped` | Live; changes require re-review |

---

## 13. Example: minimal pilot-grade unit

A complete, tier-complete unit for `01.01.03 — Vector Space` will be written during the pilot as the worked example of this spec. It lives at `content/01-fundamentals/01-linear-algebra/01.01.03-vector-space.md` once produced.

Before writing that unit, every item in this spec must have an unambiguous interpretation. If producing the pilot unit reveals a spec gap, that's a signal to revise UNIT_SPEC.md first — not to patch in the unit.
