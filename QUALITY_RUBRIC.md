# Codex — Quality Rubric

Per-tier pass/fail checklists. Distilled from `pilot-lessons.md` after pilot unit #1 (Clifford algebra). The checklist is the rubric — there is no "holistic vibes" gate. Reviewers tick boxes; failed boxes block ship.

Read `UNIT_SPEC.md` and `OVERVIEW.md` §3 first; this document keys off both.

---

## How to use

1. Reviewers receive a unit + this rubric.
2. For each present tier (per `tiers_present:` frontmatter), the reviewer runs the corresponding tier section.
3. **Automated checks** are run by the validator script (`scripts/validate_unit.py`) before human review even starts. A unit failing automated checks does not enter human review.
4. **Human-judgment checks** are mathematical / pedagogical and require a domain reviewer.
5. A unit ships only when all checks for all present tiers pass.

If a check is ambiguous in a specific case, write a comment in `manifests/units/<id>.json` under `flags[]` rather than ticking the box; the integrator decides.

---

## §0 Universal checks (run on every unit, regardless of tiers)

### Automated (validator script)

- [ ] Frontmatter YAML is valid; all required fields present per `UNIT_SPEC.md` §4.
- [ ] `id` matches filename pattern `<section>.<chapter>.<ordinal>` and `<id>-<slug>.md` filename.
- [ ] `concept_catalog_id` exists in `CONCEPT_CATALOG.md`.
- [ ] `tiers_present` is a non-empty subset of `[beginner, intermediate, master]`.
- [ ] For each `t ∈ tiers_present`: at least one section in the markdown body carries the `[<Tier>]` or `[<Tier>+]` marker that includes `t`.
- [ ] For each `t ∉ tiers_present`: `tier_anchors[t]` is `deferred` OR `null` OR absent. Tier-marked sections for `t` must be absent or empty.
- [ ] `prerequisites[]` IDs each exist as either (a) a `status: shipped` unit OR (b) listed in `manifests/deps.json` with `state: pending` AND this unit's frontmatter has `pending_prereqs: true`.
- [ ] Every `references[]` entry either resolves to an existing path in `reference/` OR has `pending: true` with `pointer:` linking to `NEED_TO_SOURCE.md`.
- [ ] At least one `references[]` entry is *not* pending.
- [ ] Every inline `[ref: source locator]` cite uses a `source` declared in frontmatter `references[]` (no orphan citations).
- [ ] Every inline `[<unit-id>]` cross-ref points to a `status: shipped` unit OR has been registered as a forward-ref in `manifests/deps.json`.
- [ ] `lean_status` consistency:
  - If `full` or `partial`: `lean_module` non-empty, file exists at `lean/<lean_module-as-path>.lean`, file compiles via `lake build`.
  - If `partial`: theorem-statement scan finds no syntax errors (statements compile even if proofs are `sorry`).
  - If `none`: `lean_module` absent/empty AND `lean_mathlib_gap` non-empty AND `human_reviewer` non-empty for any present tier ≥ Intermediate.
- [ ] No `[Master]`-marked content appears inside a `[Beginner]` or `[Intermediate+]` section (no leakage).
- [ ] All notation symbols used in formal sections (`\nabla`, `\otimes`, custom macros) appear in `_meta/NOTATION.md` OR are introduced inline with a definition.
- [ ] Reading-level: no `[Beginner]` paragraph exceeds 120 words; no paragraph anywhere exceeds 250 words.
- [ ] No prohibited phrasings (case-insensitive). Style-rule from UNIT_SPEC §11. Two classes:
  - **Slop** (any tier): `obviously`, `clearly`, `it is easy to see`, `as we will see`, `now, let's consider`, `trivial(ly)`.
  - **Hedged futures and apologies for omission** (Master tier only — Beginner/Intermediate may use them pedagogically): `we will see`, `we will rely on`, `we do not state`, `a subtlety worth noting`, `the right organising principle`, `the structural fact that organises`, `the philosophical point is`, `the deeper philosophical content`. These are LM-failure-mode phrases identified during Wave 1 editorial review; see §M prose standard.
- [ ] No close paraphrase / verbatim copying from any source in `reference/` longer than 12 consecutive words. (Checked by n-gram comparison against the archive — heuristic, but catches accidental near-quotes.)

### Human-judgment

- [ ] **Originality:** Prose is genuinely the producer's synthesis, not a paraphrase of an anchor text. Reviewer has read the relevant anchor section and confirms.
- [ ] **Cross-source coverage:** The unit cites at least 2 distinct sources for non-trivial claims, except where only one canonical source exists.
- [ ] **`reviewed_by` populated** with the reviewer's name and a timestamp in `manifests/units/<id>.json`.

---

## §B Beginner tier (`[Beginner]` sections)

Run only if `beginner ∈ tiers_present`.

### Automated

- [ ] No undefined formal notation. Allowed: `+`, `−`, `×`, `÷`, `=`, `<`, `>`, basic exponents, ordinary parentheses. Anything else (`\nabla`, `\otimes`, `\mathbb{R}`, summation, integration, set-builder) flagged.
- [ ] No proof language: no occurrence of "Proof.", "QED", "∎", "Let X be such that", "Suppose", "It follows that", "Hence" (formal-discourse markers).
- [ ] At least one image / diagram / animation reference present (`![…](…)` or external embed).
- [ ] At least one worked-example subsection with concrete numbers.
- [ ] `## Check your understanding [Beginner]` section exists with 2–4 questions, each with `answer`, `hint`, `feedback-correct`, `feedback-wrong`.
- [ ] Question types restricted to `multiple-choice`, `true-false`, `numeric` only.
- [ ] Reading level ≤ grade 10 (Flesch-Kincaid ≤ 10 or equivalent).

### Human-judgment

- [ ] **Intuition fidelity:** A reader who understands the prerequisites at Beginner-tier can correctly explain the core idea after reading once. Tested by handing the section to one such reader and asking them to summarise it without re-reading.
- [ ] **Anchor match:** The Beginner section feels comparable in level to the unit's `tier_anchors.beginner` (e.g., 3Blue1Brown / Strogatz). Reviewer has read the relevant anchor segment and confirms.
- [ ] **Single-question takeaway:** The Beginner sections collectively answer "Why does this concept exist and what does it capture?" in plain language. If a reader can't articulate that after reading, fail.

---

## §I Intermediate tier (`[Intermediate+]` sections)

Run only if `intermediate ∈ tiers_present`.

### Automated

- [ ] `## Formal definition [Intermediate+]` section present.
- [ ] At least one `## Key theorem with proof [Intermediate+]` section present with a complete proof (no `[…]` placeholders).
- [ ] `## Exercises [Intermediate+]` section with 5–10 problems, each with required exercise schema fields.
- [ ] Difficulty distribution: ≥2 `easy`, ≥3 `medium`, ≥2 `hard`.
- [ ] Exercise types include at least one `numeric` or `symbolic` (auto-checkable). Pure `multiple-choice` exercise sets are not acceptable at Intermediate+.
- [ ] If `lean_status: full` or `partial`: a `## Lean formalization [Intermediate+]` section exists with the relevant theorem statement.

### Human-judgment

- [ ] **Anchor match:** Intermediate sections feel comparable to `tier_anchors.intermediate` (e.g., Axler / Apostol / Griffiths). Reviewer confirms after reading the anchor section.
- [ ] **Proof correctness:** The proof in `## Key theorem` is mathematically correct (Lean-verified counts as automated; human reviewer otherwise).
- [ ] **Exercise quality:** Exercises *test the concept*, not memorisation. At least 2 exercises require synthesis beyond direct application of stated results.
- [ ] **Counterexample coverage:** Where the formal definition has common slip-up failure modes, they are flagged. **At Intermediate tier**, an explicit `### Counterexamples to common slips` subsection with bullet list is encouraged (pedagogically useful). **At Master tier**, fold into running prose with positive formulations — bullet lists at Master fail the LM prose standard (§M).

---

## §M Master tier (`[Master]` sections)

Run only if `master ∈ tiers_present`.

### Automated

- [ ] `## Advanced results [Master]` section present.
- [ ] `## Connections [Master]` section present, listing at least 3 cross-references to other units (may be `pending` IDs in apex-first mode).
- [ ] `## Bibliography [Master]` section present with at least 1 primary-literature entry beyond what's in `reference/`.
- [ ] `## Historical & philosophical context [Master]` section present (≥1 paragraph; ≥1 cited primary source).
- [ ] If `lean_status: none`: `lean_mathlib_gap` field non-empty and ≥30 words (must actually describe the gap).

### Human-judgment

- [ ] **Anchor match:** Master sections feel comparable to `tier_anchors.master`. Reviewer with research-level fluency confirms after spot-reading the anchor section.
- [ ] **Proof set integrity:** `## Full proof set [Master]` covers everything stated in `## Advanced results` either with a proof or an explicit "stated without proof — see [primary citation]" note.
- [ ] **Network coherence:** Cross-references in `## Connections` actually represent real curriculum dependencies — not just topical word association. The reviewer can articulate why each connection matters.
- [ ] **Historical accuracy:** Citations in `## Historical & philosophical context` are correct (year, journal, attribution). Reviewer spot-checks at least one.
- [ ] **Mathlib gap roadmap (if `lean_status: none`):** `lean_mathlib_gap` is precise enough that a Lean contributor could file an issue or PR against Mathlib using its language directly. Vague gaps fail.

### Master prose standard (LM-calibrated)

The standard at Master tier is the prose voice of Lawson-Michelsohn, Hörmander, Kato — declarative, structurally honest, sparing with motivation, generous with the precise statement of universal properties, confident in categorical and functorial language without ostentation. The six failure modes below were identified during Wave 1 editorial review and must be checked at Master tier. They do *not* apply to Beginner sections (where pedagogical scaffolding is the calibration) or to Intermediate sections (where some of these patterns are acceptable as bridges to Master).

- [ ] **No section-level metacommentary.** Sentences that name what a section is doing — "The structural fact that organises this entire subject is…", "The right organising principle is…", "Three reformulations of the same data, each useful in different settings…" — fail. Enact structure through theorem ordering; do not narrate it.
- [ ] **No "Counterexamples to common slips" bullet lists at Master tier.** Fold these into running prose with positive formulations. (See §I — encouraged at Intermediate, prohibited at Master.)
- [ ] **No hedged futures or apologies for omission.** Phrases like "we will see", "we will rely on whenever…", "we do not state the precise theorem here", "a subtlety worth noting" fail. State or omit; declarations of what is not stated are themselves a form of stating.
- [ ] **No valedictory closing paragraphs in Historical & philosophical context.** Cite, attribute, stop. Phrases like "the philosophical point is…", "the deeper philosophical content is…", "this is one of the great identifications in…", "what looks from a distance like X is, on inspection, Y…" fail. Two paragraphs of historical fact suffice; do not editorialize about the lesson.
- [ ] **No real-time error correction.** Do not stage your own confusion ("wait, this gives X — no, the convention is…"). Compute correctly the first time and present the result.
- [ ] **No triplicate emphasis or rhetorical italics.** Italics are reserved for definitions and proper names of structures, not for sentence emphasis. Constructions like "both sides are integers; both sides have meaning *as integers*; and the theorem says they coincide" fail.

The first three are partially automated via the prohibited-phrasings list (§0). The remaining three require human review.

---

## §X Cross-tier consistency (run if ≥2 tiers present)

Run only if `|tiers_present| ≥ 2`.

### Human-judgment

- [ ] **No contradiction across tiers.** A claim made informally at Beginner is sharpened — not contradicted — at Intermediate, and at Master. If the Beginner-tier intuition would mislead a reader who later reads the Master-tier formalisation, fail.
- [ ] **Cross-references resolve at every tier.** When unit A references unit B from a Beginner section, unit B has Beginner content (or is forward-flagged "pending Beginner tier").
- [ ] **Notation continuity.** A symbol introduced at one tier carries through to higher tiers without unannounced change. Symbol re-use with different meaning across tiers fails.

---

## Failure modes the rubric explicitly catches

### From pilot unit #1 (Wave 1, manual)

1. **Apex unit declares prereq IDs that don't exist** — caught by `pending_prereqs: true` requirement + `manifests/deps.json` registration.
2. **Tier anchor not specified for unfilled tier** — caught by `deferred` accepted-value rule.
3. **Citation to source not yet in archive** — caught by `pending: true` + `pointer:` rule, with the constraint that ≥1 non-pending citation must exist.
4. **Lean module declared but file doesn't exist** — caught by build-time path verification.
5. **`lean_status: partial` shipped without theorem statements** — caught by statement-compile gate.
6. **Cross-source paraphrase too close to anchor** — caught by 12-word n-gram heuristic + human originality check.
7. **Tier-content leakage** (Master content inside `[Beginner]` section) — caught automatically by section-marker scan.
8. **Unregistered notation** — caught by glossary-lookup automation.

### From Wave 1 editorial pass (LM-calibration of Master prose)

After dual-agent review of pilot units #1–#3 and an LM-editorial-writer benchmark against the Lawson-Michelsohn standard, six prose failure modes were identified and added to §M:

9. **Section-level metacommentary** — narrating what a section is doing instead of enacting it.
10. **"Counterexamples to common slips" bullet lists at Master tier** — pedagogically useful at Intermediate but un-LM at Master; fold into prose.
11. **Hedged futures and apologies for omission** — "we will see…", "we do not state…".
12. **Valedictory closing paragraphs** in Historical & philosophical context — essay rhetoric where LM cites and stops.
13. **Real-time error correction** — staging confusion in worked examples instead of computing correctly.
14. **Triplicate emphasis and rhetorical italics** — italics for sentence emphasis instead of for definitions.

Items 9–11 are partially automated via the expanded prohibited-phrasings list. Items 12–14 require human review at Master tier.

### From Wave 2 production (parallel-session foundational units)

The parallel-session reports across Phase 2.1–2.3 surfaced consistent failure modes for foundational pulled-prereq units:

15. **Hidden prerequisite leakage** — defining a foundational unit by silently invoking a not-yet-shipped prereq (e.g., defining Banach spaces with an undefined "norm" or vector bundles with an undefined "smooth manifold"). Catch: at production time, list the unit's pending prereqs explicitly in the introduction and define ad-hoc whatever's needed locally rather than hand-waving.
16. **Sign-convention drift across foundational units** — when one unit assumes LM convention and a downstream unit assumes the opposite, errors propagate silently. Catch: every unit that uses a sign convention must state it in its formal definition section.
17. **Theme duplication between adjacent units** — e.g., bilinear/quadratic-form material duplicated between `01.01.15` and Clifford `03.09.02`. Catch: the upstream foundational unit owns the basic theory; the downstream unit cites and specializes.
18. **Self-contained vs. pulled-prereq tension** — a foundational unit must be self-contained enough that a learner can read it without prior Codex units, but referenced enough that downstream units can cite it cleanly. Catch: the formal-definition section is self-contained; the connections/historical sections do the integration.

---

## What this rubric deliberately doesn't gate

- **Production time.** Some units take longer than estimated; that's data, not a fail.
- **Reading-level for Master tier.** Master content can be dense; the grade-10 cap is Beginner-only.
- **Every concept gets all three tiers.** Apex-first production explicitly accepts `tiers_present: [master]` only; the rubric runs only on present tiers.
- **Lean coverage of frontier topics.** `lean_status: none` is acceptable when justified.

---

*Revision policy: this rubric grows from pilot output. After every 5 units shipped, review and tighten. New failure modes observed → new checklist items added.*
