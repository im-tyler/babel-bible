# Babel Bible — Agent Production Playbook

**Audience:** an AI agent (or a less-experienced human) producing one Babel Bible unit. Read this top-to-bottom before writing anything. It is self-contained: if you follow this playbook plus your dispatch brief, you can produce any unit to **27/27 first-pass** without needing the orchestrator to think strategically for you.

**This playbook captures the operating recipe distilled from 50+ shipped production units across 12 cycles (Cycles 1-12, 2026-05-17 → 2026-05-18). Every recommendation below has empirical backing — it's what actually worked.**

Read alongside:
- `docs/specs/UNIT_SPEC.md` — the canonical format
- `docs/specs/QUALITY_RUBRIC.md` — the 27 validator checks
- `docs/plans/AGENTIC_EXECUTION_PLAN.md` — the no-compromise quality contract

This playbook does NOT duplicate those documents. It tells you **how to use them under time pressure to produce a passing unit on the first try.**

---

## §1 What you are doing

You are writing **one curriculum unit** — one concept, one theorem cluster, or one technique — at three pedagogical tiers (Beginner / Intermediate / Master) in a single markdown file. Your unit:

- Lives at `content/<section>/<chapter>/<id>-<slug>.md`.
- Closes a specific gap identified in a Fast Track audit (`plans/fasttrack/<book-slug>.md`).
- Must pass **27/27 automated validator checks** before integration.
- Should aim for **Lawson-Michelsohn / Hörmander prose calibre at Master tier** — declarative, structurally honest, no metacommentary.
- Cites originators with primary-source dates and venues.
- Cross-references peer units that are already shipped or registered as pending.

**You are not writing a textbook chapter.** You are writing one *atomic* unit that builds on shipped peers and feeds shipped successors. The granularity target is ~20-50 minutes of Master-tier reading time. If your unit feels like it wants to be three units, split your dispatch brief and stop.

---

## §2 The pipeline you're in

```
Audit agent  →  Punch-list bullet  →  YOU (producer)  →  Validator  →  Integrator  →  Pass W (weaver)
   produces       at priority P1-P4    write the unit    27/27 gate    catalog +     reciprocal
   the plan       in the audit         to 27/27          (automated)   deps.json     cross-stitches
   stub                                                                edits         to peer units
```

**Your inputs:**
1. A dispatch brief telling you *which* unit to write (id, title, target path, source audit, content guidance, mandatory connections).
2. The unit's plan stub at `plans/fasttrack/<book-slug>.md` — read the relevant section (your audit's §3 punch-list bullet for your unit id).
3. The peer units listed in your brief — read at least one for **calibre matching**.
4. This playbook.

**Your output:**
1. A markdown file at the target path that passes `python3 scripts/validate_unit.py <path>` at 27/27 (or 28/28 if `hooks_out` is required).
2. One catalog entry appended to `docs/catalogs/CONCEPT_CATALOG.md` (you may need to add this yourself — see §6.3).
3. **Nothing else.** Do not edit `manifests/deps.json`. Do not edit other unit files. Do not modify spec docs.

---

## §3 The seven-step production procedure

Follow these in order. Do not skip ahead.

### Step 1 — Read your inputs (≤10 minutes)

```
1a. Read this playbook in full (you're doing it now).
1b. Read your dispatch brief carefully — note the EXACT target file path,
    unit id, title, source audit, and the list of mandatory connections.
1c. Open the source audit at `plans/fasttrack/<book-slug>.md` and read
    the §3 punch-list bullet for your unit. This is your content seed.
1d. Read at least ONE peer unit named in your brief (or pick a recent
    27/27 shipped unit from the same chapter). This sets your calibre.
1e. If your unit references already-shipped peers in `Connections`,
    spot-check that they exist via `find content -name "<peer-id>-*.md"`.
```

### Step 2 — Plan the unit structure (≤5 minutes)

Write a one-paragraph internal outline:
- **Beginner tier:** what intuition + one worked example with concrete numbers
- **Intermediate tier:** what formal definition + which Key Theorem to prove + 5-10 exercises
- **Master tier:** which 5-8 advanced results + which originator citations + 3+ Connections

**If you can't articulate this outline in one paragraph, you don't have enough material — re-read the punch-list bullet.**

### Step 3 — Write the frontmatter first (≤5 minutes)

Use the template in §5.1 below. Fields that bite repeatedly:

- `prerequisites:` — only list shipped peers OR ids registered in `deps.json` pending. If your brief tells you to reference an in-flight peer, put it in `## Connections [Master]` instead of `prerequisites:`. The validator's `_unit_with_id_exists` check requires `status: shipped` to resolve a prereq; a unit your brief says is "in flight this batch" almost certainly is not yet shipped, so listing it as prereq breaks 27/27.
- `concept_catalog_id:` — pick a clean namespace.id slug (e.g., `k-theory.adams-operations`, `complex-analysis.runge-approximation-on-rs`, `toric-geometry.affine-toric-variety`). It does NOT need to exist in the catalog when you write the frontmatter — you'll append the entry to `CONCEPT_CATALOG.md` in Step 6.
- `lean_status:` — almost always `none` for FT material. Then `lean_mathlib_gap:` is a required string ≥30 words. Write a real description of the Mathlib gap, not a placeholder.
- `tiers_present: [beginner, intermediate, master]` — three-tier is the default. Master-only is allowed for pointer / survey units but you must explicitly justify it.
- `status: shipped` — yes, write `shipped` as the producer. Validator wants this.
- `produced_by: claude-opus-4-7 (autonomous production driver)` — or your equivalent. The pipeline reads this field for cost-attribution.

### Step 4 — Write the body, top-to-bottom (~60-90 minutes)

In order:

1. **Intuition [Beginner]** — 1-3 paragraphs, ≤120 words each. Plain English; no formal notation beyond `+ − × ÷ = < >`. Use prose like "the tensor product" instead of `\otimes`. End with the one-sentence answer to "why does this concept exist?"
2. **Visual [Beginner]** — one `![alt](/img/<slug>-placeholder.svg)` and a short prose description of what the picture shows. The placeholder SVG will be auto-generated later by `scripts/gen_placeholders.py`.
3. **Worked example [Beginner]** — concrete numbers. State the correct setup *directly*. Do not stage your own confusion or walk through wrong attempts. End with "what this tells us: ..."
4. **Check your understanding [Beginner]** — 2-4 exercises in `<aside class="exercise">` blocks. Types restricted to `multiple-choice`, `true-false`, `numeric`. No `\partial`, `\otimes`, `\sum`, `\int`, `\prod`, `\nabla`, `\forall`, `\exists` symbols anywhere in Beginner.
5. **Formal definition [Intermediate+]** — the standard definition. Notation comes in here for the first time. Include a `### Counterexamples to common slips` subsection if there are pedagogically useful failure modes (this is encouraged at Intermediate, *prohibited at Master*).
6. **Key theorem with proof [Intermediate+]** — one signature theorem. Full proof, no `[…]` placeholders, no proof-sketch escape hatches at this tier. End with a `**Bridge.**` paragraph (see §7 for the pattern phrases).
7. **Exercises [Intermediate+]** — 5-10 problems, **distribution: ≥2 easy, ≥3 medium, ≥2 hard**. Include at least one `numeric` or `symbolic` exercise (pure multiple-choice fails). Each in an `<aside class="exercise">` block with `data-difficulty` and `data-type`. Provide `<details class="exercise__hint">` and `<details class="exercise__answer">` for each.
8. **Advanced results [Master]** — 5-8 named theorems. State each carefully. End with a `**Synthesis.**` paragraph (≥4 continuity patterns — see §7).
9. **Full proof set [Master]** — at least one `**Proposition.**`/`*Proof.*`/`$\square$` block. More if the Advanced results have multiple claims.
10. **Connections [Master]** — ≥3 bullets, **each its own paragraph (blank-line separated)**, each linking via `[NN.NN.NN]` syntax to peer unit IDs. The "blank-line separated" matters — `<li>` without blank lines fails.
11. **Historical & philosophical context [Master]** — at least one paragraph, at least one primary-source citation via `[ref: TODO_REF Author year]` syntax with matching entry in frontmatter `references[]`. Cite, attribute, stop. **No valedictory closing.** No "the philosophical point is..." sentences.
12. **Bibliography [Master]** — bibtex-formatted entries for everything cited in the unit. Include the originator papers plus modern anchors.

### Step 5 — Validate (≤5 minutes)

```bash
python3 scripts/validate_unit.py <your-unit-path>
```

If you see `27/27 checks passed` (or `28/28` for units with `hooks_out`), proceed to Step 6.

If you see anything less, read the `[✗]` lines and fix what they tell you. See §8 below for the common failures and their fixes — every one of them is fixable in <5 minutes.

**Iterate validator → fix → validator until 27/27.** Do not ship at 26/27 hoping the integrator will fix it; the integrator will reject your unit and a human will have to look at it.

### Step 6 — Add the catalog entry (≤2 minutes)

Open `docs/catalogs/CONCEPT_CATALOG.md` and append a minimal entry for your unit's `concept_catalog_id` if it isn't already there:

```markdown
### <namespace>.<your-cid>

- **title**: <your title>
- **unit**: `<your unit id>`
- **prerequisites**: <list any shipped catalog entries that are prereqs>
- **tier_anchors**:
  - master: <the master-tier originator anchor>
  - intermediate: <the intermediate anchor>
  - beginner: <the beginner anchor>
- **notes**: <one paragraph synopsizing the unit's content + key theorems + originator chain>
```

The validator's `concept_catalog_id` check is a **substring match against CONCEPT_CATALOG.md** — your slug just needs to appear somewhere in the file. The structured entry above is the right pattern, but if the catalog has been reorganized and you're not sure where your entry should slot, a minimal `### namespace.cid` heading plus a one-line description is enough to pass validation. You can also append to a `## Recovery Entries` section at the end of the file.

### Step 7 — Report (≤2 minutes)

Return a ≤200-word status:

- File path written
- 27/27 (or 28/28) validator result — copy the exact final line
- Word count
- Catalog edits (slug added, position)
- Anything notable (iteration fixes you made, surprises in the content, peer cross-refs you couldn't resolve)

**Do NOT report inflated success — if you ended at 26/27 because you ran out of budget, say so.** The integrator will catch any false-positive 27/27 claim during re-validation; honesty in the agent report is faster.

---

## §4 The five hard constraints (memorize these)

These are the constraints that bite producers most often, in order of how often I've seen them fail in this session's 50+ units:

### §4.1 No prohibited phrasings (any tier)

**Forbidden as case-insensitive whole-word regex matches:**

```
\bobviously\b      \bclearly\b       \bit is easy to see\b
\bas we will see\b \btrivial(?:ly)?\b \bnow,?\s+let'?s\s+consider\b
```

**Crucial gotcha: `\btrivial(?:ly)?\b` ALSO catches `non-trivial`** because the hyphen is a word boundary. **Replace with one of:**

| Forbidden | Replace with (context-dependent) |
|---|---|
| `trivial` | `identity`, `plain`, `vacuum`, `vanishing`, `the simple case`, `evident-in-context` |
| `trivial bundle` | `product bundle`, `identity bundle` |
| `trivial fibration` (model categories) | `acyclic fibration` (this is the actual standard term) |
| `non-trivial` | `substantive`, `non-degenerate`, `non-vanishing`, `non-identity`, `non-flat` |
| `non-trivially` | `substantively`, `non-degenerately` |
| `trivially` | `by definition`, `directly`, `at once` |
| `obviously` / `clearly` | delete or rewrite the surrounding sentence |
| `as we will see` | `appears again in [NN.NN.NN]`, `builds toward` |
| `it is easy to see` | rewrite: state the conclusion or prove it |

### §4.2 No Master-tier hedged futures

In addition to §4.1, **at Master tier only**:

```
"we will see", "we will rely on", "we do not state",
"a subtlety worth noting", "the right organising principle",
"the structural fact that organises", "the philosophical point is",
"the deeper philosophical content"
```

These are LM-prose failure modes. At Master, **state or omit**. Pattern:
- Bad: "We will see in §3 that…"
- Good: "Appears again in [03.07.09] as the moduli-dimension formula."
- Bad: "A subtlety worth noting is that the action is not free."
- Good: "The action fails to be free at the fixed-point stratum; see Proposition 4 below for the precise stratification."

### §4.3 Beginner-tier symbol ban

Beginner sections **must not contain** these LaTeX commands:

```
\nabla   \otimes   \sum   \int   \prod   \partial   \forall   \exists
```

Rewrite as prose:
- `\otimes` → "tensor product", "the formal product"
- `\partial` → "the boundary"
- `\sum` → "the sum" or expand the first few terms ($a_1 + a_2 + \cdots$)
- `\int` → "the total of X across Y", "the integral" in prose only

Allowed at Beginner: `$x$`, `$2 + 3$`, `$\mathbb{R}^2$`, basic arithmetic, simple subscripts/superscripts. The validator's allowed-character regex is `[\d\s+\-*/=<>().\[\]a-zA-Z_]{0,40}`.

### §4.4 Paragraph length ceilings

- **Beginner paragraph:** ≤ 120 words.
- **Any paragraph (anywhere):** ≤ 250 words.

If a paragraph runs long, **split at a natural pivot**. Insert a blank line. The validator counts words per blank-line-separated block. Common offenders: Bridge paragraphs (after Key theorem), Synthesis paragraphs (after Advanced results), Historical & philosophical context (often overflows when stating a multi-decade lineage).

**Pattern for splitting Synthesis without losing continuity-pattern density:** the Synthesis needs ≥4 patterns total across all its paragraphs. So you can split a 320-word Synthesis into one 180-word paragraph (with 2-3 patterns) and one 140-word paragraph (with 2-3 patterns) and still pass.

### §4.5 Connections section format

The `## Connections [Master]` check looks for:

1. **≥3 bullets**
2. **Each bullet is its own paragraph (blank-line separated)** — NOT a tight `- item / - item / - item` block
3. **Each bullet contains at least one `[NN.NN.NN]` link** to a peer unit id

**Format that passes:**

```markdown
## Connections [Master]

- **<Peer title> [03.09.10].** <Prose explaining how this unit connects to that peer.>

- **<Another peer> [03.07.05].** <More prose.>

- **<Third peer> [04.11.01].** <More prose.>
```

**Format that fails (no blank lines between bullets):**

```markdown
## Connections [Master]

- **A.** Prose
- **B.** Prose
- **C.** Prose
```

The blank lines matter.

---

## §5 Templates (copy-paste, then modify)

### §5.1 Frontmatter template

```yaml
---
id: NN.NN.NN
title: <Title in Title Case>
slug: <kebab-case-slug-matching-filename>
section: <section-name>
chapter: <chapter-name>
concept_catalog_id: <namespace>.<your-slug>
prerequisites:
  - <only-shipped-peer-ids>
  - <or-deps.json-pending-registered-ids>
successors: []
tier_anchors:
  beginner: "<canonical Beginner anchor, e.g. 'Hatcher §X informal' or '3Blue1Brown video Z'>"
  intermediate: "<canonical Intermediate anchor>"
  master: "<canonical Master originator + modern anchor>"
tiers_present: [beginner, intermediate, master]
pending_prereqs: false
references:
  - source: TODO_REF
    path: "<author> — <title>"
    locator: "<chapter/section>"
  - source: TODO_REF
    path: "<another reference>"
    locator: "<locator>"
lean_status: none
lean_mathlib_gap: |
  <30+ word description of what Mathlib lacks for this unit. Name the specific
  modules / theorems / types that would need to ship in Mathlib. The aggregated
  lean_mathlib_gap fields form an upstream-contribution roadmap, so write this
  as if a Mathlib contributor will read it.>
human_reviewer: "TBD"
estimated_time:
  beginner: 15m
  intermediate: 35m
  master: 70m
status: shipped
produced_by: claude-opus-4-7 (autonomous production driver)
reviewed_by: []
---
```

### §5.2 Section templates

Beginner Intuition:

```markdown
## Intuition [Beginner]

<First paragraph, ≤120 words, plain English. Answer "why does this concept exist?">

<Second paragraph, ≤120 words. Build on the first with a concrete analogy from everyday experience.>

<Third paragraph optional, ≤120 words. End with the one-sentence takeaway.>
```

Beginner Visual:

```markdown
## Visual [Beginner]

<One short paragraph describing what the picture shows.>

![<descriptive alt text>](/img/<your-slug>-placeholder.svg)

<Optional follow-up paragraph linking the picture to the next section.>
```

Beginner Worked Example:

```markdown
## Worked example [Beginner]

<Set up a concrete instance with specific numbers. State the correct setup directly.>

Step 1. <First computation step.>

Step 2. <Second step.>

Step 3. <Final step, arriving at the answer.>

What this tells us: <one sentence on the takeaway>.
```

Beginner Check Your Understanding:

```markdown
## Check your understanding [Beginner]

<aside class="exercise" data-difficulty="easy" data-type="multiple-choice" markdown="1">

**Exercise (easy, multiple choice).**

<Question text.>

A. <Option A>
B. <Option B>
C. <Option C>
D. <Option D>

<details class="exercise__hint"><summary>Hint</summary>

<Hint text.>

</details>

<details class="exercise__answer"><summary>Answer</summary>

**<Correct option letter>.** <Explanation. Feedback-correct: <why right>. Feedback-wrong: <common confusion>.>

</details>

</aside>

<aside class="exercise" data-difficulty="easy" data-type="true-false" markdown="1">

**Exercise (easy, true-false).**

<Question.>

<details class="exercise__hint"><summary>Hint</summary>

<Hint.>

</details>

<details class="exercise__answer"><summary>Answer</summary>

**True / False.** <Explanation.>

</details>

</aside>

<aside class="exercise" data-difficulty="easy" data-type="numeric" markdown="1">

**Exercise (easy, numeric).**

<Compute X. State the answer as a single number.>

<details class="exercise__hint"><summary>Hint</summary>

<Hint.>

</details>

<details class="exercise__answer"><summary>Answer</summary>

**<Numeric answer>.** <Brief explanation.>

</details>

</aside>
```

Intermediate Formal Definition:

```markdown
## Formal definition [Intermediate+]

<Standard definition with full notation, cited to the Intermediate anchor.>

**Definition.** <Precise statement.>

<Brief follow-up if the definition needs context.>

### Counterexamples to common slips [Intermediate+]

- *<Slip 1>.* <Explanation.>
- *<Slip 2>.* <Explanation.>
```

Intermediate Key Theorem:

```markdown
## Key theorem with proof [Intermediate+]

**Theorem (<name>).** <Precise statement.>

*Proof.* <Full proof, no placeholders. Use display math `$$...$$` for centred equations.>

<More steps as needed.>

$\square$

**Bridge.** <Paragraph hitting these continuity patterns: `builds toward`, `appears again in`, plus 2+ of: `the foundational reason`, `this is exactly`, `generalises`, `is dual to`, `the central insight`, `putting these together`, `identifies X with Y`, `the bridge is`. Reference forward to where this theorem reappears.>
```

Intermediate Exercises:

```markdown
## Exercises [Intermediate+]

<aside class="exercise" data-difficulty="easy" data-type="numeric" markdown="1">

**Exercise 1 (easy, numeric).**

<Question.>

<details class="exercise__hint"><summary>Hint</summary>...</details>
<details class="exercise__answer"><summary>Answer</summary>...</details>

</aside>

<!-- Need: ≥2 easy, ≥3 medium, ≥2 hard. Include at least one numeric or symbolic. -->
```

Master Advanced Results:

```markdown
## Advanced results [Master]

**Theorem 1.** <Statement.>

<Brief proof or sketch with cite.>

**Theorem 2.** <Statement.>

<Brief proof or sketch with cite.>

<5-8 results total, alternating named theorem statements and one-paragraph commentaries.>

**Synthesis.** <Paragraph hitting ≥4 continuity patterns from: `builds toward`, `appears again in`, `the foundational reason`, `this is exactly`, `generalises`, `is dual to`, `the central insight`, `putting these together`, `identifies X with Y`, `the bridge is`, `pattern recurs`. If oversize, split at a natural pivot — both halves can carry the pattern density together.>
```

Master Full Proof Set:

```markdown
## Full proof set [Master]

**Proposition 1.** <Restated from Advanced results.>

*Proof.* <Full proof.> $\square$

**Proposition 2.** <Another.>

*Proof.* <Full proof.> $\square$
```

Master Connections:

```markdown
## Connections [Master]

- **<Peer title> [NN.NN.NN].** <Why this connects. What flows from this unit to that one or vice versa.>

- **<Peer title> [NN.NN.NN].** <Why this connects.>

- **<Peer title> [NN.NN.NN].** <Why this connects.>

<!-- ≥3 bullets, each its own blank-line-separated paragraph, each with at least one [NN.NN.NN] link. -->
```

Master Historical:

```markdown
## Historical & philosophical context [Master]

<<Author> <year> introduced <concept> [ref: TODO_REF AuthorYear]; the modern formulation crystallised with <Author2> <year2> [ref: TODO_REF Author2Year]; the bridge to <neighbouring field> is due to <Author3> <year3>.>

<Optional second paragraph with more lineage detail. Stop here — no valedictory.>
```

Master Bibliography:

```markdown
## Bibliography [Master]

```bibtex
@article{AuthorYear,
  author = {<Author Surname, First>},
  title = {<Title>},
  journal = {<Journal>},
  volume = {<Vol>},
  year = {<Year>},
  pages = {<Pages>},
}

@book{Author2Year2,
  author = {<Author2>},
  title = {<Book title>},
  publisher = {<Publisher>},
  year = {<Year2>},
}
```
```

---

## §6 The validator catalog — passing each of the 27 checks

The validator runs ~27 checks (28 if your unit has `hooks_out:`). I list every one with the specific failure-pattern and the fix.

### §6.1 Frontmatter checks

1. **Frontmatter YAML valid** — use the §5.1 template. Common gotcha: `tier_anchors.beginner` value must be a quoted string, not bare YAML. Use `beginner: "Foo §1"`, not `beginner: Foo §1`.
2. **`id` matches filename pattern** — `01.02.03` and filename `01.02.03-slug.md`. Don't mix up `01.2.03` or `1.02.03`.
3. **`concept_catalog_id` exists in catalog** — substring match. Append entry in Step 6.
4. **`tiers_present` is non-empty subset** — always `[beginner, intermediate, master]` unless you have a *very* explicit reason to omit.
5. **Each present tier has a `[<Tier>]` section marker** — auto-satisfied if you use the §5.2 templates.
6. **Tier markers don't leak content for absent tiers** — only relevant if you set `tiers_present: [master]` etc.
7. **Prerequisites resolve** — every id in `prerequisites:` must (a) be a shipped unit, or (b) be in `deps.json['pending']`. **The orchestrator owns deps.json; if your brief lists a prereq that isn't shipped, move it to Connections instead.** Do not edit deps.json yourself.
8. **References at least 1 non-pending** — your `references:` list must have at least one entry without `pending: true`. The default `source: TODO_REF` entries pass this.
9. **No orphan `[ref: source]` cites** — every inline `[ref: foo something]` must have `source: foo` somewhere in frontmatter `references[]`. If you cite a TODO_REF, you must have a `source: TODO_REF` line in references.
10. **No orphan `[NN.NN.NN]` cross-refs** — every cross-ref must point to a shipped unit. If it points to an in-flight peer, you can still pass IF the in-flight id is registered as `pending` in deps.json. Safest: only cross-ref shipped peers.
11. **`lean_status` consistency** — if `none`, `lean_mathlib_gap` is non-empty ≥30 words and `lean_module` is absent. If `full` or `partial`, the `lean/` path file must exist (rare for FT material).

### §6.2 Body-content checks

12. **No tier-content leakage** — Master claims inside Beginner sections fail. Don't talk about "ℤ-graded ring spectra" in the Beginner intuition.
13. **All notation in `_meta/NOTATION.md` or defined inline** — usually auto-satisfied if you use standard mathematical notation. If you introduce custom symbols (e.g., $\rho(X)$ for the Picard number), define inline.
14. **Beginner paragraphs ≤ 120 words** — count words; split if necessary.
15. **Any paragraph ≤ 250 words** — same.
16. **No prohibited phrasings** — see §4.1, §4.2. Master-tier prohibitions are stricter than Beginner/Intermediate.
17. **No close paraphrase** — 12+ consecutive verbatim words from any `reference/` file fail. Rephrase, don't copy.

### §6.3 Beginner tier (if `beginner` in `tiers_present`)

18. **No advanced formal notation** — see §4.3. `\nabla`, `\otimes`, `\sum`, `\int`, `\prod`, `\partial`, `\forall`, `\exists` all banned. Use prose.
19. **No proof language** — no "Proof.", "QED", "∎", "Suppose ", "It follows that", "Hence,". Don't use formal-discourse markers.
20. **At least one image reference** — `![alt](/img/<slug>-placeholder.svg)` in Visual.
21. **At least one worked example with concrete numbers** — auto-satisfied if you write the Worked Example section.
22. **Check your understanding has 2-4 questions** — count `<aside class="exercise">` blocks in the CYU section.
23. **CYU question types restricted** — only `multiple-choice`, `true-false`, `numeric` in CYU. No `symbolic` or `short-answer` at Beginner CYU.

### §6.4 Intermediate tier

24. **Formal definition section present** — auto-satisfied with §5.2 template.
25. **Key theorem with full proof** — your `*Proof.* … $\square$` must be a real proof, no `[…]` placeholders.
26. **Exercises 5-10 problems, difficulty distribution ≥2/3/2 easy/medium/hard** — count carefully. Eight exercises with 2 easy + 4 medium + 2 hard is the sweet spot.
27. **At least one numeric or symbolic exercise** — pure multiple-choice exercise sets fail at Intermediate.

### §6.5 Master tier

28. **Advanced results, Connections, Bibliography, Historical sections present** — auto-satisfied with §5.2 template.
29. **Connections ≥3 bullets each with `[NN.NN.NN]` link, blank-line separated** — see §4.5.
30. **Bibliography has ≥1 primary-literature entry** — at least one bibtex entry beyond the reference archive.
31. **Historical has ≥1 cited primary source** — `[ref: TODO_REF Author Year]` plus matching `references[]` entry.
32. **`lean_mathlib_gap` ≥30 words if `lean_status: none`** — write a real description.

### §6.6 The "no hooks_out" check (if applicable)

Some recent units have `hooks_out:` frontmatter listing downstream units that will reference back. This adds one validator check (28/28 total). If your dispatch brief tells you to add `hooks_out:`, do so; otherwise skip.

---

## §7 The continuity-pattern phrase library

Bridge and Synthesis paragraphs are checked by the validator's continuity-metric scan (and reinforced by Pass W weaving later). To pass on first try, use these patterns liberally.

### §7.1 Bridge paragraph (after Key theorem [Intermediate+])

**Required:** at least 2 of the patterns below. **Hit 3-4 to be safe.**

Pattern bank:
- `builds toward [NN.NN.NN]` — forward-promise
- `appears again in [NN.NN.NN]` — forward-promise
- `the foundational reason` — synthesis
- `this is exactly` — synthesis
- `generalises` — synthesis
- `is dual to` — synthesis
- `the central insight` — synthesis
- `putting these together` — synthesis
- `identifies <X> with <Y>` — synthesis
- `the bridge is` — synthesis

**Example Bridge paragraph (Casimir element unit):**

> **Bridge.** The Casimir's centrality builds toward [07.06.11] $\mathfrak{sl}_2$ representations, where it acts as the scalar $n(n+2)/2$ on $V_n$, and appears again in [07.06.12] $\mathfrak{sl}_3$, where the adjoint representation $V_{1,1}$ has Casimir eigenvalue $6$. The foundational reason is that the Casimir is a quadratic Casimir derived from the Killing form, and this is exactly the bridge to Weyl's complete-reducibility theorem [07.06.07]: every finite-dimensional representation is a direct sum of irreducibles because the Casimir distinguishes them by distinct scalar eigenvalues.

### §7.2 Synthesis paragraph (after Advanced results [Master])

**Required:** at least 4 patterns. **Hit 5-6 to be safe.** Can span multiple paragraphs (split if over 250 words).

**Example Synthesis paragraph (Quillen model category unit):**

> **Synthesis.** The Quillen framework is the foundational reason that abstract homotopy theory unifies across topology, chain complexes, and simplicial sets. The central insight is that the three classes — weak equivalences, fibrations, cofibrations — interact through M3 lifting and M4 factorisation so that the localisation $\mathcal{C}[W^{-1}]$ is concretely modelled by cofibrant-fibrant objects modulo homotopy. Putting these together with the Quillen adjunction calculus, every classical functorial construction descends to the homotopy category as a derived functor whose well-definedness is automatic. This is exactly the structure that identifies algebraic and topological homotopy theory: the bridge is between $\mathbf{Top}$ with Serre fibrations and $\mathbf{sSet}$ with Kan fibrations via the Quillen equivalence $|{-}| \dashv \mathrm{Sing}$, and the pattern generalises to chain complexes via Dold-Kan, to derived categories of rings, and through the entire $(\infty, 1)$-categorical framework.

That paragraph hits 7 patterns: `the foundational reason`, `the central insight`, `putting these together`, `this is exactly`, `the bridge is`, `generalises`, plus implicit "identifies X with Y" via the Quillen equivalence.

### §7.3 Connections bullet phrasings

Don't repeat the same phrase across all bullets. Vary:

- **<Peer> [NN.NN.NN].** Builds toward …
- **<Peer> [NN.NN.NN].** The downstream specialisation in …
- **<Peer> [NN.NN.NN].** Provides the prerequisite framework for …
- **<Peer> [NN.NN.NN].** Generalises in …
- **<Peer> [NN.NN.NN].** Dual to the construction in …
- **<Peer> [NN.NN.NN].** The chapter-closing synthesis appears in …
- **<Peer> [NN.NN.NN].** The non-linear / non-abelian extension is …

---

## §8 Common failures and 5-minute fixes

Distilled from the iteration logs of 50+ this-session units. If your validator returns <27/27, check these in order:

| Failure | Fix |
|---|---|
| `[✗] no prohibited phrasings — found: {'trivial'}` | Grep for `\btrivial(ly)?\b` and `non-trivial`. Replace per §4.1 table. |
| `[✗] Beginner uses no advanced formal notation — found symbols: {'otimes'}` | Grep for `\\otimes` in the Beginner section; rewrite as prose ("tensor product"). |
| `[✗] no paragraph exceeds 250 words — oversize paragraphs (word counts): [N]` | Find the offending paragraph; split at a natural pivot with a blank line. |
| `[✗] Beginner paragraphs ≤ 120 words` | Same as above but Beginner has a tighter limit. |
| `[✗] concept_catalog_id 'foo.bar' not found` | Append a `### foo.bar` entry to `docs/catalogs/CONCEPT_CATALOG.md`. |
| `[✗] all prerequisites resolve OR are pending-registered — unresolved: ['NN.NN.NN']` | Either (a) the peer isn't shipped yet — move it to Connections instead of prerequisites, or (b) the peer is user-seeded as `status: draft` — the orchestrator needs to add it to `deps.json` pending. Note this in your report. |
| `[✗] Master Connections has ≥3 bullets each with [NN.NN.NN] link` | Add more bullets; ensure blank lines between them; verify each has `[NN.NN.NN]` syntax. |
| `[✗] Master Historical has primary source` | Add a `[ref: TODO_REF Author Year]` cite and a matching `source: TODO_REF` entry in frontmatter `references[]`. |
| `[✗] Intermediate exercises have ≥2 easy, ≥3 medium, ≥2 hard` | Audit your `data-difficulty` attributes; add or relabel exercises. |
| `[✗] Intermediate exercises include at least one numeric or symbolic` | Add at least one `data-type="numeric"` or `data-type="symbolic"` exercise. |
| `[✗] Beginner uses proof language — found: 'Hence'` | Rewrite the offending sentence without `Suppose`, `It follows that`, `Hence`, `QED`, `Proof.`, `∎`. |
| `[✗] hooks_out fields valid` | If your brief asked for `hooks_out:`, check the YAML structure. If not, you may have accidentally added the field; remove it. |

**General principle:** the validator's failure messages are literal. The check name tells you what failed; the `found:` or `unresolved:` line tells you the specific item. Fix the specific item, re-run, repeat.

---

## §9 Originator citations — the canonical patterns

Master-tier prose lives or dies by primary-source citations. Here's the recipe:

### §9.1 Pattern: who introduced this concept?

For most theorems, ask: who is the first published statement? Common patterns:

- **Algebraic geometry:** Grothendieck papers (1957 Tôhoku, 1961-67 EGA series, 1962-69 SGA), Hartshorne 1977, Mumford 1965/1970, Serre 1955 FAC.
- **Algebraic topology:** Hatcher 2002, Milnor papers (1956-1965 in *Annals of Math*), May 1967/1975, Quillen 1967 (Homotopical Algebra LNM 43).
- **Spin geometry / index theory:** Lawson-Michelsohn 1989, Atiyah-Singer 1963 *Ann. Math.* 87, Atiyah-Bott 1967/68, Bismut 1985-89 *Invent. Math.* / *Comm. Math. Phys.*
- **K-theory:** Atiyah 1961-1968 (papers and the K-Theory book), Adams 1962-66 (J(X) papers I-IV in *Topology*).
- **Symplectic geometry:** Arnold 1974/1989 *Mathematical Methods*, Marsden-Weinstein 1974, Kirwan 1984.
- **Rep theory:** Cartan 1894 thesis, Killing 1888-90 *Math. Ann.*, Weyl 1925-26 *Math. Z.* four-part paper, Casimir 1931 Leiden thesis, Harish-Chandra 1951+ *Trans. AMS*.
- **Differential geometry:** Cartan 1922-28 (moving frames), Ehresmann 1950 (connections), Kobayashi-Nomizu Vol 1-2 (1963/69), Sternberg 1964.
- **Mechanics / classical physics:** Lagrange 1788 *Mécanique Analytique*, Hamilton 1834-35, Jacobi 1843, Noether 1918 *Nachr. Königl. Ges. Wiss. Göttingen*.
- **QM / QFT:** Dirac 1927/1930, von Neumann 1932 *Mathematische Grundlagen*, Born 1926, Stone 1932, Wigner 1939 *Ann. Math.*, Bogoliubov-Shirkov 1959.

### §9.2 Pattern: cite the journal + year

Master-tier originator citations should include venue when available:

- ✅ "Kirillov 1962 *Russ. Math. Surveys* 17"
- ✅ "Atiyah-Singer 1963 *Ann. Math.* 87"
- ✅ "Quillen 1967 *Homotopical Algebra* LNM 43"
- ❌ "Kirillov 1962"
- ❌ "Atiyah's index theorem"

### §9.3 Pattern: modern anchor

After the originator, cite a modern monograph anchor for the canonical exposition:

- "Lawson-Michelsohn 1989" (spin geometry)
- "Hatcher 2002" (algebraic topology)
- "Hartshorne 1977" (algebraic geometry)
- "Berline-Getzler-Vergne 1992" (heat kernels)
- "Fulton 1993" (toric varieties)
- "Marsden-Ratiu 1999" (symplectic / classical mechanics)
- "Hovey 1999" (model categories)
- "Goerss-Jardine 1999" (simplicial homotopy)

### §9.4 Master-tier "Historical & philosophical context" template

```markdown
## Historical & philosophical context [Master]

<Originator> <year> [ref: TODO_REF AuthorYear] introduced <concept> in the
context of <historical problem>. The modern <theorem|construction>
crystallised with <Author2> <year2> [ref: TODO_REF Author2Year], who
proved <key result>. <Application or extension> is due to
<Author3> <year3> [ref: TODO_REF Author3Year], whose <paper / monograph>
remains the canonical reference.

<Optional second paragraph: the lineage continues with <Author4>'s
<later development>, and the connection to <neighbouring field> via
<Author5> <year> closes a loop opened by <originator>.>
```

**Stop after two paragraphs.** Do not editorialize about "the lesson" or "the philosophical point."

---

## §10 What to do if you get stuck

Five common stuck states and their resolutions:

### §10.1 "I don't know what content to write"

Re-read the source audit's §3 punch-list bullet for your unit. The audit agent has already specified the mathematical content; you just have to expand it into a unit. If the punch-list bullet is too sparse, also read the audit's §1 (what the book is for) and §4 (originator citations + notation crosswalk).

### §10.2 "The validator keeps failing"

Don't iterate blindly. Print the entire validator output:

```bash
python3 scripts/validate_unit.py <your-path> 2>&1 | grep -B1 -A2 "✗"
```

Read every `[✗]` line. Each has a specific `found:` or `unresolved:` payload telling you the exact issue. Fix the specific items, not the general category.

### §10.3 "I have a peer I want to reference but it's not shipped yet"

Two options:
1. **If your brief explicitly says the peer is in flight this same batch:** put it in `## Connections [Master]` instead of `prerequisites:`. The validator's prereq check fails on non-shipped ids; Connections only requires the `[NN.NN.NN]` syntactic format.
2. **If the peer is not in flight:** drop the cross-reference. Don't manufacture forward-pointers to units that may never exist.

### §10.4 "The catalog doesn't have my namespace"

Append a minimal `### <namespace>.<your-slug>` entry to `docs/catalogs/CONCEPT_CATALOG.md`. The substring match is all the validator checks. Pattern in §6.3 above.

### §10.5 "My unit is over 12,000 words"

That's fine for Master-heavy gauge-theory or rep-theory units (e.g., Adams operations was 14k words). The validator has no upper word limit, only paragraph-level ceilings.

If individual paragraphs are oversize, split them. If the whole unit has 4× the typical 3000-9000 word range, consider whether you've accidentally written two units; split your output into two if so (but only if your dispatch brief permits — usually it doesn't, so just keep the unit big and clean).

---

## §11 The producer's no-compromise contract

You are subject to the same no-compromise contract the orchestrator follows. The 10 rules from `docs/plans/AGENTIC_EXECUTION_PLAN.md` §8 distilled for producers:

1. **Never disable a 27/27 check** to ship faster. If a check is wrong, write a bug report to the orchestrator; do not patch the validator.
2. **Never ship a unit at 26/27** hoping someone else fixes it. Either fix it or report the issue honestly.
3. **Never write `\otimes` or `\partial` or `\sum` or `\int` in a Beginner section** to save typing. Use prose.
4. **Never use `trivial` or `non-trivial`** anywhere. Use the §4.1 substitutes.
5. **Never write "we will see..." or other hedged futures** in a Master section. Use `appears again in [NN.NN.NN]` or `builds toward`.
6. **Never paraphrase 12+ consecutive words** from a reference. Rewrite.
7. **Never claim 27/27 if you didn't reach 27/27.** The integrator re-validates; lying wastes everyone's time.
8. **Never edit deps.json or other shared files.** The orchestrator owns those.
9. **Never silently drop a punch-list item** from the audit's specification. If the audit says to include the Adams conjecture proof and you can't fit it, write a clear note in your report.
10. **Never write a master-tier valedictory** ("the philosophical point is..."). Cite, attribute, stop.

---

## §12 The 10-minute checklist before reporting

Before you write your status report, run through this checklist mentally:

- [ ] File at the correct path (`content/<section>/<chapter>/<id>-<slug>.md`).
- [ ] Frontmatter has all 16 required fields (§5.1 template).
- [ ] `status: shipped` set.
- [ ] All three tiers present and clearly separated by `[Tier]` markers.
- [ ] Beginner Worked Example uses concrete numbers and states the correct setup directly.
- [ ] Beginner CYU has 2-4 exercises, all `multiple-choice`/`true-false`/`numeric`.
- [ ] Intermediate Key Theorem has a full proof ending in `$\square$`.
- [ ] Intermediate Exercises: 5-10 problems, ≥2 easy, ≥3 medium, ≥2 hard, ≥1 numeric/symbolic.
- [ ] Bridge paragraph hits ≥3 continuity patterns.
- [ ] Synthesis paragraph hits ≥4 continuity patterns.
- [ ] Master Connections ≥3 bullets, blank-line separated, each with `[NN.NN.NN]`.
- [ ] Master Historical cites primary sources with `[ref: TODO_REF Author Year]`.
- [ ] Bibliography has bibtex entries.
- [ ] Zero instances of `trivial`, `non-trivial`, `obviously`, `clearly`, `it is easy to see`, `as we will see`.
- [ ] Zero `\nabla \otimes \sum \int \prod \partial \forall \exists` in Beginner sections.
- [ ] Catalog entry appended to `docs/catalogs/CONCEPT_CATALOG.md` (if not already there).
- [ ] `python3 scripts/validate_unit.py <path>` returns `27/27 checks passed.` (or `28/28`).

If every box is ticked, write your report and submit.

---

## §13 Appendix: a worked dispatch-to-unit example

To illustrate the playbook, here's a complete worked example for a hypothetical dispatch:

**Dispatch brief (received from orchestrator):**

> Write unit `03.08.13: Atiyah-Bott Lefschetz fixed-point theorem in K-theory`.
> Target: `content/03-modern-geometry/08-k-theory/03.08.13-atiyah-bott-lefschetz-k-theory.md`.
> Source audit: `plans/fasttrack/atiyah-k-theory.md` §3 P3.
> Mandatory connections: `[03.08.01]` K-theory, `[03.08.10]` Equivariant K-theory, `[03.09.10]` Atiyah-Singer.
> Catalog: add `k-theory.atiyah-bott-lefschetz-fixed-point`.

**Producer's procedure:**

1. **Read** the Atiyah K-theory audit's §3 P3 entry for Atiyah-Bott Lefschetz. The audit specifies: "Atiyah-Bott 1967 *Ann. Math.* 86, equivariant Lefschetz for an elliptic operator $D$ on a compact manifold $M$ with a self-map $f : M \to M$ having isolated fixed points; localisation of the equivariant index to a sum over fixed points." Read peer `03.08.10` Equivariant K-theory for calibre.
2. **Plan:** Beginner = the fixed-point-locality picture for a rotation of $S^2$ with two fixed poles; Intermediate = formal statement + 4-step proof via the localisation of the equivariant Chern character; Master = generalisation to Atiyah-Bott for elliptic complexes, application to the Weyl character formula via $G/T$, Atiyah-Bott-Patodi heat-kernel proof.
3. **Frontmatter:** id `03.08.13`, prereqs `[03.08.01, 03.08.10, 03.09.10]` (all shipped), catalog id `k-theory.atiyah-bott-lefschetz-fixed-point`, references with Atiyah-Bott 1967 + 1968 (Quart. J. Math. 19) + Atiyah-Singer 1968 (Ann. Math. 87).
4. **Body:** write top-to-bottom following §5.2 templates. Beginner is plain prose about rotations of $S^2$ counting two fixed poles. Intermediate proves the simplest version (isolated fixed points, Lefschetz number = sum of local contributions). Master extends to elliptic complexes, derives the Weyl character formula as a corollary, and notes the Atiyah-Bott-Patodi heat-kernel proof.
5. **Validate:** run `validate_unit.py`. Suppose initial result is 25/27 with failures (a) `trivial bundle` in Master Advanced results, (b) Bridge paragraph at 268 words. Fix: rewrite "trivial bundle" → "product bundle"; split Bridge at a natural pivot. Re-run → 27/27.
6. **Catalog:** append `### k-theory.atiyah-bott-lefschetz-fixed-point` block to CONCEPT_CATALOG.md.
7. **Report:** "Unit shipped. 27/27 after one iteration (fixed `trivial bundle` and 268-word Bridge). ~9,200 words. Catalog appended. Notable: derived Weyl character formula as Master Theorem 5, cross-referencing to the existing `07.06.07` Weyl character formula unit."

That's the recipe. Every unit follows the same procedure. The mathematical content varies; the procedural rigour does not.

---

## §14 Maintenance

This playbook is a living document. After every batch of 10-20 units shipped, the orchestrator should:

1. Add new common-failure patterns to §8 if observed.
2. Update §9 originator-citation lists if new domains come online.
3. Update §5.2 templates if validator rules change.
4. Add new continuity patterns to §7 if Pass W weavers identify productive new phrases.

The current revision is **2026-05-18, based on Cycles 1-12 (50+ units, zero quality-gate failures).** Future revisions should be additive — don't drop guidance that has empirical backing without strong reason.

---

## §15 The one-sentence summary

**Pick your unit via `produce_next.py` (or accept the dispatch brief), use the §5.2 templates, avoid the §4 traps, hit the §7 continuity patterns, validate to 27/27, append the catalog entry, report honestly.**

If you do those seven things, you ship a passing unit on the first try.

Welcome to the production line. Get to work.

---

## §16 Self-dispatch — pick your own next unit

When the orchestrator isn't writing your dispatch brief by hand (or when you're running autonomously to drain the production queue), use the project's built-in next-unit selector. **This is how a producer agent works through every remaining FT unit without supervision.**

### §16.1 The selector script

```bash
python3 scripts/produce_next.py
```

This picks the next queued unit from `manifests/production/plan.json` (which is built from every audit's `§3 Gap punch-list` deduplicated and topologically sorted by dependencies) and prints a complete agent brief to stdout.

The brief contains:

- **Target file path** (where to write the unit)
- **Frontmatter scaffold** (which fields to fill in, with the canonical id / slug / section / chapter pre-resolved)
- **Source audit pointer** (`plans/fasttrack/<book-slug>.md` — read its §3 entry for content guidance)
- **Audit spec excerpt** (the punch-list bullet for this unit, ~600 char preview)
- **Peer references** (2 recent shipped units in the same chapter; read at least one for calibre matching)
- **Hard constraints** (prohibited phrasings, beginner-tier symbol bans, continuity-metric requirements — duplicates §4-§7 of this playbook so you have both views)
- **Lean status guidance**
- **Validation command** to run before reporting

### §16.2 Targeting a specific unit

If the orchestrator's dispatch brief names a specific unit id, use:

```bash
python3 scripts/produce_next.py --id 03.07.14
```

This prints the brief for that unit even if it's not at the queue head. Useful when the orchestrator wants you to work on a non-default unit (e.g., closing a fresh audit's P1 directly, or recovering from a parallel agent's failure).

### §16.3 Project-root path

The project root is `/Users/tyler/Documents/Code Projects/B.I.B.L.E/`. Use this for `cd` or absolute paths:

```
/Users/tyler/Documents/Code Projects/B.I.B.L.E/
```

(Historical note: through 2026-05-19 the repo was nested at `B.I.B.L.E/Codex/`. It was flattened to the project root on 2026-05-20; earlier `produce_next.py` / `audit_next_book.py` brief templates referenced the pre-flatten path and have been updated to match.)

### §16.4 The autonomous production loop

Run this loop yourself if you're operating as an autonomous producer:

```
while production_queue_not_empty AND budget_remaining:
  1. brief = run("python3 scripts/produce_next.py")
  2. Parse brief: extract target_path, audit_pointer, mandatory_connections.
  3. Read the audit_pointer file's §3 entry for your unit.
  4. Read 1 peer unit from the brief's "Read first" list for calibre.
  5. Write the unit at target_path following §3 seven-step procedure of this playbook.
  6. Validate: run("python3 scripts/validate_unit.py <target_path>")
  7. If <27/27: read [✗] lines, fix per §8 of this playbook, re-validate. Max 5 iterations.
  8. If still <27/27 after 5 iterations: write a brief failure note and stop.
  9. Append catalog entry for your concept_catalog_id (see §6.3, §10.4).
  10. Report ≤200 words (see §3 step 7).
  11. Sleep 30 seconds (gives orchestrator a window to interrupt).
  12. Loop back to step 1.
```

This is the canonical autonomous workflow. A producer running it will work through the queue at ~4-6 units/hour at full pace.

### §16.5 When to stop

End the loop and report cumulative results when any of these conditions hits:

- **Queue empty:** `produce_next.py` returns no brief or returns a no-op message. Report total units shipped this run.
- **Hard time limit:** You've been running >4 hours (your single-invocation budget). Report progress and exit.
- **Repeated 27/27 failures:** 3 consecutive units where you couldn't reach 27/27 in 5 iterations. Stop and report — something structural is wrong (likely a validator regression or a catalog issue). Don't burn budget on more units until the orchestrator investigates.
- **Cost ceiling:** You've consumed >2M tokens in this run. Report and exit.
- **Substantive blocker:** A unit's audit has a `[DEFERRED]` or `[OUT-OF-SCOPE]` tag, or the punch-list bullet explicitly says the unit can't ship until a P0 prereq lands. Skip to the next unit (run `produce_next.py` again to pick a different one).

### §16.6 Avoiding collisions with parallel agents

If multiple producer agents are running in parallel, they can race on:

1. **Picking the same unit id** — `produce_next.py` is not transactional; two simultaneous calls return the same queue head. Mitigation: the orchestrator dispatches `--id <id>` to each agent explicitly, OR each agent claims a unit by writing the file path immediately (the second agent will see the file exists and pick a different unit).
2. **Editing `CONCEPT_CATALOG.md` simultaneously** — append-only writes generally don't conflict, but rapid-fire parallel writes can. Mitigation: if your catalog append throws, retry once with a 5-second delay. If the second attempt also fails, write your entry to a separate scratch file and note it in your report; the orchestrator will merge.
3. **Editing `manifests/deps.json` simultaneously** — **never edit deps.json yourself.** The integrator owns it. This avoids the collision entirely.

For two-agent parallel dispatch, the orchestrator typically uses `--id` to pre-pick distinct units, avoiding queue-head collision.

### §16.7 The brief's content seed is canonical

The brief that `produce_next.py` emits contains an "Audit spec excerpt" — a ~600-character preview of the audit's §3 punch-list bullet. **That excerpt is canonical for your unit's content.** It names the originator, the key theorems to prove, the notation crosswalk, and the master-tier reach. If your unit's content disagrees with the audit's specification, the audit wins.

If the excerpt is too sparse (the audit was a `reduced` pass), open `plans/fasttrack/<book-slug>.md` and read §1 (what the book is for) and §4 (originator citations + notation crosswalk) for additional context. You may also read peer audits in the same chapter for cross-references.

### §16.8 Cumulative reporting

If you're running the autonomous loop and producing N units in a single invocation, your final report should aggregate:

- Total units shipped
- Total validator passes (should equal total units shipped if 27/27 on each)
- Catalog entries added (cid + position)
- Any units skipped (reason + audit pointer)
- Any iteration patterns observed (e.g., "5 of 8 units needed a Beginner-tier symbol fix" — flags a doc gap)
- Token usage if your runtime gives you that telemetry
- Cumulative wall-clock

This aggregate is what the orchestrator reads to confirm the cycle worked. Be honest about iteration counts and skipped units; the orchestrator's job is to fix the doc gap, not to grade you.

### §16.9 The closed loop

With this section in place, the full self-sufficient producer workflow is:

```
Producer agent reads: this playbook (once).
Producer agent does: loop in §16.4 until §16.5 stop condition.
Producer agent reports: per §16.8.
Orchestrator does: integrate (validate + deps.json + Pass W weave).
Orchestrator dispatches: producer agent again, next cycle.
```

The producer never needs the orchestrator to write a per-unit brief; the brief comes from `produce_next.py`. The orchestrator's responsibilities reduce to:

- Strategic decisions (when to rebuild plan.json, when to run Pass V continuity verification, when to start a new audit batch)
- Cross-cycle coordination (Pass W batching, integration drain rate)
- Quality-gate operator approvals (§3 hand-off gates from AGENTIC_EXECUTION_PLAN)
- Recovery from agent failures (§16.5 stop conditions)

That's the full division of labour. With this playbook + `produce_next.py` + `validate_unit.py`, an autonomous producer can drain the entire remaining FT queue without per-unit orchestrator dispatch.

---

## §17 Think before you write — the quality-of-content contract

The 27/27 validator catches **form**, not **mathematical content**. A unit that says

> "Theorem: every Banach space is finite-dimensional. Proof: by induction on dimension. ∎"

passes the validator if its frontmatter is clean, sections are present, paragraphs are sized correctly, and no prohibited phrasings appear. It's also mathematically wrong, and shipping it would degrade the corpus. **The validator is necessary but not sufficient. You are the sufficient gate.**

This section is the discipline that distinguishes a unit you should ship from a unit that mechanically passes validation. Read it carefully — it's where producer agents fail invisibly.

### §17.1 The five places where shallow units leak past the validator

1. **Proof steps that say "by standard arguments"** — the validator cannot tell that "standard arguments" is hand-waving. A real proof states the steps, names the lemmas, and chains the inferences. If the proof you would write at Master tier reduces to a one-line citation or "the proof is straightforward," either the theorem is too elementary for Master or you don't actually know how to prove it. Either way, do not paper over it.

2. **Made-up citations** — `Smith 1962, J. Wonderful Math. 47, 234-251` looks identical to `Atiyah 1961, Bull. Amer. Math. Soc. 67, 422-433` to the validator. The first might not exist. **Cite only references you can verify** — either by recognising them from your training data, or by checking the audit's `§4 Originator citations` block (which an audit agent has typically curated against real sources), or by searching the web if your runtime allows. **Hallucinated citations are the single highest-frequency Master-tier failure for less-capable models.**

3. **Wrong worked examples** — a unit that computes $\chi(S^2) = 3$ in the Beginner section, or shows $V \otimes V = \mathrm{Sym}^2 V \oplus \Lambda^2 V$ via a basis that doesn't span, will pass form but mislead readers. Always cross-check numerical / dimensional / index computations against a second method (different basis, alternative formula, known result). If the second method disagrees, the unit is wrong; fix before shipping.

4. **Theorems with the wrong hypotheses** — "Theorem: Every compact manifold admits a Riemannian metric" is true; "Theorem: Every smooth manifold admits a Riemannian metric" is **only** true with paracompactness (otherwise it fails for the long line). Hypotheses matter; the validator doesn't check them. Verify your theorem statement against the audit's anchor citation.

5. **Master-tier prose that's "around" the math, not "on" it** — confident-sounding sentences like "The Chern character is the canonical bridge from K-theory to rational cohomology and reflects the universal property of additivity over short exact sequences" pass the validator's prohibited-phrasing scan and the Bridge/Synthesis pattern check, but say nothing precise. **Master prose is *declarative about specifics*: name the theorem, state the map, prove it preserves the structure.** Vagueness disguised as fluency is the most insidious quality leak.

### §17.2 The pre-writing thinking checklist

Before you start writing the unit body, work through these five questions explicitly. **Write your answers in scratch notes** (don't commit them to the unit; they're for your own discipline). If you can't answer a question, the unit isn't ready to write yet — go back to the audit's punch-list for more guidance.

1. **What is the one central theorem of this unit?** Name it. State it precisely (with hypotheses). Identify the originator + year + journal/venue.
2. **What is the proof's load-bearing argument?** In one sentence. (e.g., "Bombieri-style integration by parts on the bilinear form against a compactly supported test function." Or "Reduction to the rank-1 case via the splitting principle, then Bott periodicity.") If you can't name the technique, you don't know the proof.
3. **What is the simplest non-trivial example?** (Worked example for Beginner / Intermediate.) Compute it. If you can't compute it, you don't yet understand the theorem operationally.
4. **What is the canonical generalisation or specialisation?** This is what your Connections section will point to. If you don't know the canonical generalisation, the audit's §1 (what the book is for) usually names it.
5. **What does a working researcher in this subfield know that a beginner doesn't?** This is your Master-tier reach. (e.g., "On a Stein manifold the Cousin I problem is trivially solvable, and the obstruction theory only becomes interesting on non-Stein domains" is the kind of fact a researcher knows.)

If your answers feel thin, your unit will be thin. Re-read the audit, peer units, or stop and report that you need more guidance.

### §17.3 The proof-writing standard

A Master-tier proof is at the calibre of *Lawson-Michelsohn*, *Hörmander*, *Kato*. The audit's `§4 Originator citations` will name the canonical source; your proof should mirror its rigor. Concrete rules:

- **Every step is named.** "By the dominated convergence theorem (Hörmander I.4.1)" is fine. "By straightforward analysis" is not.
- **No `[…]` placeholders.** If you can't fill in a step, the proof isn't ready.
- **Display equations for non-trivial algebra.** Don't bury computations in run-on prose.
- **Use the standard notation of the audit's anchor.** If Lawson-Michelsohn writes $\slashed{D}$ for the Dirac operator, you write $\slashed{D}$, not $D$ or $\mathfrak{D}$.
- **End with $\square$ (or QED, ∎).** The validator doesn't check this, but it's the Master-tier convention.

If the audit's anchor text gives a half-page proof, your proof should not be one paragraph. If the anchor text gives a one-paragraph sketch, do not invent a half-page proof — the anchor's sketch is probably the entire argument and you'd be padding.

### §17.4 The citation-verification standard

**Master-tier citations must be real.** A citation has three load-bearing components:

- **Author surname** — must match the actual author
- **Year** — must match the actual publication year (±1 for translation lag)
- **Venue + volume** — must match the actual journal/publisher

**If you are confident in all three components** (i.e., you recognise the citation from your training data and can place it in context), cite it freely.

**If you are uncertain about any component**, do one of:

1. Drop the venue/volume and cite "Author Year" only — less precise but not fabricated
2. Use a more general anchor citation you do recognise (e.g., the modern monograph reference instead of the originator paper)
3. Use the placeholder `[ref: TODO_REF AuthorYear]` and let a domain reviewer fill in the precise venue later
4. Search the web if your runtime allows

**Do NOT**: invent journal names, fabricate volume numbers, or paraphrase real citations with plausible-sounding fakes. Every fabricated citation is detected eventually (during Pass V continuity sweeps or domain-reviewer audits), and a corpus with even 5% fabricated citations is unusable for research.

### §17.5 The "if you're not confident" escape valve

If, after the §17.2 thinking checklist, you realise you cannot produce the unit at Master-tier calibre — for example, because the topic is at the edge of your training (recent research areas, very specialised subfields) — you have three honourable options:

1. **Downgrade the master tier ambition** — write the Master section as a *clean survey* with statements and citations, not full proofs. Note in the unit's frontmatter that Master is `survey-level` and add `human_reviewer: TBD` to flag for expert verification.
2. **Skip the unit and pick a different queue item** — `python3 scripts/produce_next.py --id <different-id>`. Report which unit you skipped and why.
3. **Write a partial unit at lower tiers only** — `tiers_present: [beginner, intermediate]`, with `tier_anchors.master: deferred`. The validator accepts this. Note in the report so the orchestrator knows Master-tier work remains for this unit.

**None of these is failure.** Honest under-promising beats overconfident shipping. A unit with `tiers_present: [beginner, intermediate]` plus a flagged Master gap is a fine partial result; a unit with `tiers_present: [beginner, intermediate, master]` and a hallucinated Master section is corpus-damaging.

### §17.6 The "smart enough to write Babel Bible" gate

Some FT topics require expertise beyond what a less-capable model can produce reliably. Concrete examples from this session's corpus (with my honest assessment):

| Topic class | Producer model capability needed |
|---|---|
| **Undergraduate-core math** (linear algebra, basic topology, basic group theory, calculus, real analysis foundations) | Most modern instruction-tuned models can produce these at 27/27 with the playbook. |
| **Graduate-standard math** (commutative algebra, Galois theory, basic algebraic geometry à la Hartshorne Ch. I-II, basic algebraic topology à la Hatcher Ch. 1-2, basic rep theory) | Frontier-class models (Claude Opus, GPT-5-class) reliably; mid-tier open-weight models (GLM-5.x, Llama-3.x, Qwen-2.x) sometimes, with elevated hallucination risk on citations. |
| **Frontier graduate research** (gerbes + Deligne cohomology, BGV index theory, K-theory of operator algebras, Brylinski loop-space program, Hodge theory à la Voisin, advanced gauge theory) | Frontier-class models only. Mid-tier models will produce surface-level "encyclopedia-style" prose that passes form but does not match Master calibre. |
| **Specialised physics** (Wightman axioms, exact lattice models, statistical field theory, anomalies, supersymmetric path integrals, twistor theory) | Frontier-class models only. Even frontier models hallucinate convention sign-flips here; expect iteration. |

If you are operating as a producer agent and you encounter a unit whose subject matter is beyond your reliable reach, **use §17.5's escape valve and report**. Do not produce a unit you would not trust for your own research.

The orchestrator's job is to match producer-agent capability to unit difficulty. The producer's job is to be honest about which units they can produce at Master calibre.

### §17.7 The post-writing sanity check

Before you report your unit, do this 60-second check:

1. Re-read your Master Theorem statement. **Can you imagine a textbook giving this hypothesis set?** If the hypotheses feel too clean or too messy, double-check against the audit's anchor.
2. Re-read your proof's load-bearing argument. **Can you reconstruct the proof from memory in 10 minutes?** If you can't, the proof is either wrong or templated; suspect that.
3. Re-read your worked example numerics. **Did you sanity-check the answer?**
4. Re-read your citations. **Are you confident in author + year + venue for each?**
5. Re-read your Synthesis paragraph. **Does it say something specific, or is it confident-sounding fluency?**

If anything fails this sanity check, fix it before reporting. The five minutes you spend here saves a domain reviewer an hour and a corpus an embarrassment.

### §17.8 The one-paragraph summary of §17

**The validator catches form, not content. You are the content gate. Before writing, work through the §17.2 thinking checklist to make sure you actually understand what you're writing about. Don't invent citations, don't hand-wave proofs, don't produce confident-sounding fluency disguised as Master prose. If you're not capable of the unit, use §17.5's escape valves and report honestly. A 60-second §17.7 sanity check before reporting catches most of the leaks.**

That's the quality-of-content contract. It is not enforceable by the validator; it's enforceable by the producer's professional discipline. **Be the disciplined producer.**

---

## §18 Capability-tier triage — which units to claim vs. which to skip

Not every unit in the queue is at the same difficulty tier, and not every producer agent is at the same capability tier. **The right play for a non-frontier producer is to claim only the units they can reliably ship at Master calibre, and skip the rest** (using `produce_next.py --id` to jump past frontier-research items, or the §17.5 escape valves to ship partial units).

This section is the explicit triage map.

### §18.1 The three capability tiers

| Tier | Models | What they can reliably produce |
|---|---|---|
| **T1 — Frontier** | Claude Opus 4.7+, GPT-5.2+, Gemini 3.1 Pro+ — anything benchmarking ≥92% GPQA Diamond | Every unit in the FT corpus at Master calibre, including frontier-research clusters (BGV, Brylinski, advanced K-theory, Voisin Hodge, gauge theory) |
| **T2 — Near-frontier** | GLM 5.1, Kimi K2.6, DeepSeek 3.x-class — benchmarking 85-92% GPQA Diamond | Undergraduate + graduate-standard units (Hartshorne Ch. I-II, Hatcher Ch. 1-3, basic Lang/Aluffi, Fulton-Harris basics, Forster Riemann surfaces, Section 0-1 foundations). Elevated citation-hallucination risk on frontier-research material. |
| **T3 — Mid-tier** | Llama-3.x 70B-class, GLM-4.x, Qwen-2.x 72B and below | Beginner/Intermediate sections at decent quality; Master sections at "survey level" only — i.e., statement + citation, no full proofs. |

**You may not know your exact tier.** A safe heuristic: if your training included graduate-level mathematics and you can reproduce proofs of (say) the Hahn-Banach theorem, Zorn's lemma equivalents, and the snake lemma from memory without external prompting, you're at least T2. If you can additionally produce the standard proof of Atiyah-Singer for the Dirac operator and reproduce the Bismut superconnection heat-kernel argument's load-bearing steps, you're T1.

If in doubt, **assume T2 and apply the §18.2 triage rules.**

### §18.2 The cluster-by-cluster triage map

For the current Babel Bible corpus structure (post-Cycle-12 state, 273 queued units), here's the per-cluster guidance:

#### Clusters safe for T2 producers (claim freely)

These clusters contain units a T2 producer can ship at full Master calibre with the playbook + §17 discipline. Roughly **60-70% of the remaining queue**.

| Cluster | Chapter path | Why safe |
|---|---|---|
| Section 0 prereqs | `00-precalc/`, `01-foundations/` | Undergraduate-core; well-documented in any analysis text. |
| Real / functional analysis foundations | `02-analysis/01-topology/`, `02-analysis/02-real-numbers/`, `02-analysis/03-sequences-series/`, `02-analysis/05-multivariable-differentiation/`, `02-analysis/11-functional-analysis/` (basic Banach/Hilbert) | Standard graduate-textbook material. |
| Arnold ODE chapter | `02-analysis/12-ode/` | Already mostly shipped; remaining items (`02.12.13/14/17` deepenings) are straightforward. |
| Basic algebraic geometry | `04-algebraic-geometry/01-sheaves/`, `04-algebraic-geometry/02-schemes/` (Hartshorne Ch. I-II level units only) | Standard Hartshorne / Vakil material. Avoid the §V surface-theory and §III.12 base-change items — those tip into T1. |
| Riemann surfaces foundations | `06-riemann-surfaces/01-complex-analysis/`, basic `06.04-cohomology/` | Forster / Donaldson level. |
| Symplectic mechanics basics | `05-symplectic/lagrangian-mechanics/`, `05-symplectic/symplectic-linear/`, basic moment-map units | Marsden-Ratiu level. |
| Rep theory basics | `07-representation-theory/01-foundations/`, `07-representation-theory/02-character/`, `07-representation-theory/05-symmetric/` (excluding Diaconis-style probability units) | Serre LRFG / FH undergraduate level. |
| Classical mechanics + EM (user-seeded chapters) | `09-classical-mech/`, `10-em-sr/` (excluding the GR / Lorentz-signature deep dives) | Goldstein / Jackson level. |
| Physical / organic / inorganic chemistry stubs | `14-genchem-pchem/`, `15-orgchem/`, `16-inorgchem/` | Atkins / Clayden / Housecroft undergraduate level. |
| Cell / organismal / population biology stubs | `17-mol-cell-bio/`, `18-organismal-bio/`, `19-eco-evo-bio/` | Standard undergraduate-text level. |

#### Clusters T2 producers should approach with elevated care (claim but verify carefully)

These are graduate-standard but not yet frontier — citations matter more, proofs are less standardised. **Apply §17.4 citation verification aggressively, and consider §17.5 partial-tier escape if the audit doesn't pre-curate the citations.**

| Cluster | Why elevated care |
|---|---|
| `03-modern-geometry/02-manifolds/` | Connections/curvature on principal bundles; cite KN-I directly. |
| `03-modern-geometry/03-lie/` | Standard Lie theory but easy to get bracket conventions wrong. |
| `03-modern-geometry/04-differential-forms/` | Stokes / de Rham / hypercohomology levels — vary in difficulty. |
| `03-modern-geometry/05-bundles/` | Principal-bundle connections + Chern-Weil. |
| `03-modern-geometry/12-homotopy/` (CW / simplicial / fundamental group / covering space) | The non-model-category-non-spectral-sequence units are safe. Model categories (`03.12.31-32`) trip into T1 territory. |
| `04-algebraic-geometry/03-cohomology/` | Standard sheaf cohomology; cite Hartshorne III directly. |
| `04-algebraic-geometry/11-toric/` (first ~6 units) | Fulton ITV foundations are well-documented. |
| `06-riemann-surfaces/03-riemann-surfaces/`, `06.05-divisors-bundles/`, `06.06-jacobians/` | Standard Forster / Donaldson material. |
| `07-representation-theory/06-lie-algebraic/` ($\mathfrak{sl}_2$, $\mathfrak{sl}_3$, semisimple basics) | Standard FH / Humphreys material. |
| `12-quantum/01-foundations/` (Stern-Gerlach + Hilbert formalism + uncertainty + spin coupling) | Standard graduate QM. |
| Basic stat-mech (canonical / grand-canonical ensembles, partition functions, mean-field) in `08-stat-mech/` and `11-stat-mech-physics/` | Standard Reif / Kardar undergraduate-to-graduate. |

#### Clusters T2 producers should SKIP (or downgrade to survey-level Master)

These are frontier-research clusters where T2 producers consistently hallucinate citations or produce surface-level Master content that passes form but not domain review. **If you're a T2 producer, use `produce_next.py --id` to skip past these queue items, OR ship them with `tiers_present: [beginner, intermediate]` only and `tier_anchors.master: deferred`.** Report what you skipped.

| Cluster | Why frontier-only |
|---|---|
| `03-modern-geometry/06-characteristic-classes/` (advanced: Chern-Weil-Brylinski, Kostant-Weil, Dixmier-Douady, gerbes, smooth Deligne complex) | Brylinski-track requires gerbe-theoretic + smooth-Deligne-complex fluency that T2 models commonly fluff. |
| `03-modern-geometry/07-gauge-theory/` (Yang-Mills moduli, ADHM, Donaldson polynomials, twistor space, Penrose transform) | Atiyah's monograph is concise; T2 producers reproduce "facts about gauge theory" without the precise theorems. |
| `03-modern-geometry/08-k-theory/` (Adams operations, AHSS, equivariant K-theory, J(X) / J-homomorphism, KR-theory) | Adams J(X) papers and Atiyah K-theory are technical; reproducing the splitting-principle arguments + Bernoulli-denominator computations correctly is hard. |
| `03-modern-geometry/09-spin-geometry/` (Bismut superconnection, eta invariant + APS, Kirillov character formula, Mathai-Quillen, advanced Dirac material) | BGV-track index theory is the FT corpus's hardest cluster. T2 producers can write the *statements* but the *proofs* require frontier capability. |
| `03-modern-geometry/12-homotopy/` (model categories `03.12.31-35`, Bousfield-Kan SS, Postnikov simplicial, simplicial groups) | Goerss-Jardine / May-Ponto rigor; T2 producers tend toward survey prose. |
| `03-modern-geometry/13-spectral-sequences/` (AHSS, Serre, Eilenberg-Moore, advanced) | Same comment. |
| `04-algebraic-geometry/05-divisors/`, `04.05-surfaces/` past the basics (Hodge index, surface Riemann-Roch, Castelnuovo, Bogomolov-Miyaoka-Yau, K3) | Hartshorne Ch. V + Beauville level. |
| `04-algebraic-geometry/09-hodge/` (Voisin Vol I full course, especially Lefschetz decompositions, Hodge-Riemann bilinear relations, hard Lefschetz) | Voisin's calibre is frontier-research. |
| `04-algebraic-geometry/10-moduli/` (Mumford GIT past basics, ACGH Brill-Noether, Joe Harris moduli, Witten-Kontsevich) | Frontier algebraic geometry. |
| `04-algebraic-geometry/11-toric/` past `04.11.04` (mirror symmetry, Gross-Siebert program, tropical geometry, scattering diagrams) | Frontier and rapidly developing. |
| Gel'fand-Vilenkin track (`02-analysis/13-distributions/`, `14-pde/`, `15-fourier-analysis/`, `16-adeles-p-adic/` once those open) — Vols 5-6 material | Adeles + automorphic forms + integral geometry are graduate-research. |
| `08-stat-mech/` advanced lattice / RG / Wilson-Fisher / exact-solvable models (Baxter / Itzykson-Drouffe level) | Frontier statistical-field theory. |
| `12-quantum/` past foundations (Wightman axioms, $\phi^4$ renormalisation, gauge-theory QFT, Yang-Mills gauge fixing, BRST, Faddeev-Popov) | Frontier QFT. |
| `13-gr-cosmology/` deep GR (Schwarzschild beyond statement, Kerr, FLRW with perturbation theory, Penrose-Hawking singularity theorems) | Wald / MTW frontier. |
| Any unit anchored on Weinberg QFT Vol 2/3 (gauge theory, supersymmetry), DeWitt *Global Approach to QFT*, Gérard *Microlocal Analysis*, Brylinski Loop Spaces deep chapters | All frontier-research. |

### §18.3 Decision rule for an unknown unit

Before claiming a unit from `produce_next.py`, ask yourself the §18.3 decision tree:

1. **Is the unit's source audit in the "skip" cluster above?** → Skip (run `produce_next.py --id <next>` to advance the queue head past it) OR downgrade to `tiers_present: [beginner, intermediate]`. Report which.
2. **Is the unit in the "elevated care" cluster?** → Claim it, but apply §17.4 citation verification rigorously. If you can't cite the originator paper with confidence in venue + year, use `[ref: TODO_REF AuthorYear]` and flag for review.
3. **Is the unit in the "safe" cluster?** → Claim it confidently; standard §3 procedure.

**If you don't know which cluster the unit is in**: read the audit's §1 (what the book is for) and see if it names frontier-research topics like "moduli spaces", "elliptic genera", "twistor", "Mathai-Quillen", "gerbe", "Deligne cohomology", "Hodge structure", "elliptic operator", "spectral asymmetry", "$\eta$-invariant", "Floer homology", "BV/BRST quantization", "renormalization group flow". Presence of two or more of those terms in the §1 → flag as frontier-research and apply §18.2's skip rule.

### §18.4 Reporting skipped units

When you skip a unit per §18.3, you must do **two** things:

**A. Append to the persistent skip log** at `manifests/skipped_units.md` (create the file if it doesn't exist). Format:

```markdown
## <YYYY-MM-DD> — <producer tier> session (<model name>)

- **<unit-id>**: <unit title>. Reason: <cluster> flagged §18.2 skip; reassign to T1 producer.
- **<unit-id>**: <unit title>. Reason: <specific concern, e.g., "audit's Bismut superconnection proof needs full heat-kernel argument; T2 producer cannot reliably reproduce.">.
```

This file is the **canonical T1-only backlog**. Any future orchestrator session (frontier-model or human) can read it to see exactly what was deferred, by whom, and why. **Never overwrite — only append.**

**B. Include the same skip list in your §16.8 cumulative report**, mirroring the file. Example report stanza:

```
Skipped 4 units (logged to manifests/skipped_units.md):
  - 03.09.27 Bismut-Lott analytic torsion (BGV cluster, T2 cannot reproduce variation formula)
  - 03.07.15 Donaldson polynomial invariants (Yang-Mills frontier)
  - 03.08.13 KR-theory advanced applications (Adams operations chain)
  - 04.09.04 Hodge-Riemann bilinear relations (Voisin frontier)
```

This gives the orchestrator (i) a persistent record they can review at leisure, (ii) the immediate session-end summary, and (iii) a clean handoff list for the next T1 cycle.

**Skipping is not a failure mode.** It's the correct play when the unit exceeds your capability tier. The orchestrator's job is to match the producer to the unit; the skip log is how you communicate that match-need across sessions.

### §18.4a Reading the skip log in future sessions

If you are a future orchestrator session (T1-class) starting a new cycle:

1. **Read `manifests/skipped_units.md` first.** It's the canonical T1-only backlog.
2. Prioritise these over default `produce_next.py` queue head when you have T1 capability available — they've been waiting longer and are the gating items for downstream dependencies.
3. **As you produce each skipped unit, strike it out in the file** (don't delete — preserve the audit trail):

   ```markdown
   - ~~**03.09.27**: Bismut-Lott analytic torsion. Reason: …~~ **PRODUCED 2026-MM-DD by Claude Opus 4.7 at 27/27.**
   ```

4. The skip log is also a feedback signal: if a cluster shows up repeatedly in skip lists from different producer sessions, the orchestrator should consider commissioning external domain-expert curation rather than waiting for more frontier-model cycles.

### §18.5 What changes if you're a T3 producer

If you're at the T3 tier (mid-tier open-weight model — Llama-3.x 70B and below, older GLM-4.x, smaller Qwen variants):

- **Default to `tiers_present: [beginner, intermediate]`** on every unit. Don't attempt Master tier.
- **Use only safe-cluster units** from §18.2 first table. Skip everything else.
- **Cite the audit's pre-curated citations verbatim**; never invent new ones. If the audit doesn't curate citations for your unit, skip the unit.
- **Hard cap of ~5 minutes per validator iteration**; if you can't fix a 26/27 failure in 5 iterations, ship at 26/27 with explicit failure notes and let the orchestrator clean up.

T3 producers are still useful — they can produce undergraduate-foundation units at decent quality, freeing T1/T2 producers for the harder material. But honesty about your tier matters.

### §18.6 The one-sentence summary of §18

**Know your tier. Claim units within your tier (§18.2 "safe" + "elevated-care" clusters). Skip units above your tier (§18.2 "skip" clusters) and report. Don't fake graduate-research expertise — orchestrators downgrade their trust in your output rapidly when they catch hallucinations.**
