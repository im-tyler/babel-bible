# Babel Bible — Philosophy Plan

**Drafted 2026-05-17; updated 2026-05-22.** Per-domain plan for philosophy in the cross-domain expansion. Sibling of `PHYSICS_PLAN.md`, `CHEMISTRY_PLAN.md`, `BIOLOGY_PLAN.md`, and `LANGUAGE_WORLD_PLAN.md`. Subordinate to `BIBLE_EXPANSION_PLAN.md`. Philosophy is mostly a *receiver* of cross-domain hooks, so it benefits from seeing what shape the other domains want to point at it.

**Status:** Active. Locks the **hybrid mode decision** (philosophy gets *both* synthesis essays AND tiered units), the subsection allocation under §20, anchor literature, mastery endpoints, inbound-hook taxonomy, and essay-ID retrofit. Live production has already added epistemology and ethics units, so ethics and general epistemology are now admitted §20 material rather than future exclusions.

Read before this plan: `OVERVIEW.md`; `BIBLE_EXPANSION_PLAN.md` (esp. §2.5 phil mode + §3 contract); the 6 existing essays at `site/src/content/philosophy/01-reflexivity` … `06-realization`; `PHYSICS_PLAN.md`, `CHEMISTRY_PLAN.md`, `BIOLOGY_PLAN.md` outbound-hook taxonomies (they tell us what phil needs to land).

---

## §1 What this plan does

1. **Resolves the mode question** (open per umbrella): philosophy adopts **hybrid mode**, with two distinct content registers running parallel: synthesis essays (existing) + tiered analytic-philosophy units (new). Both forms have legitimate roles; neither subsumes the other.
2. **Retrofits the 6 existing essays with IDs** `20.essays.01` … `20.essays.06` so cross-refs from other domains resolve. This was a hard requirement from `BIBLE_EXPANSION_PLAN.md` §10 step 4.
3. **Allocates subsections under §20** for analytic philosophy of science — one subsection per scientific domain we mirror, plus logic, phil-of-science-general, and phil-of-mind.
4. **Names Wave 1 seeds**: complete the essay retrofit + produce analytic units chosen because they are the highest-leverage inbound-hook targets across the other domains.
5. **Specifies the cross-domain return surface** — how phil emits "see also" hooks *back into* science units (the reverse direction of the dominant hook flow).

It does not:
- Lock the long-term shape of `20.essays` (more essays will be added; this plan locks the format, not the count).
- Decide whether `phil` eventually splits into multiple top-level sections (it stays at §20 for v1).
- Override the existing 6 essays' content — those are kept verbatim; only frontmatter is touched.
- Pretend Tyler has analytic-phil expertise; reviewer recruitment is even more important here than in chem or bio.

---

## §2 What philosophy is for in this project

Two complementary roles, both load-bearing:

### 2.1 Role A — synthesis and orientation (the existing essays do this)

The 6 existing essays (reflexivity, geometry-of-disclosure, perfected-figure, what-passes-between, practice, realization) are **foundational orienting documents**. Their function is to provide a *stance* from which the rest of the curriculum can be read. They are not philosophy-of-science in the analytic sense; they are wisdom-tradition synthesis with structural awareness — Vedanta-meets-Sufi-meets-mathematics-meets-contemplative-practice.

They serve a learner approaching the project who needs to **see what shape of knowing the project assumes** before stepping into math/physics/chem/bio. They will continue to exist, be added to over time, and be cross-linkable from any unit in the project.

### 2.2 Role B — analytic philosophy of science (new in this plan)

When a physics unit on the measurement problem hooks out to phil, what does it hook *to*? Not a synthesis essay — the physics unit wants a specific analytic treatment of "what the measurement problem is, what positions exist, what the canonical arguments are." That requires tiered analytic-philosophy units alongside the essays.

Role B fills this gap. Each tiered unit covers a specific analytic-phil topic at three depths, anchored to the standard analytic-phil literature, with operationalized mastery endpoints. These are the natural landing places for `hooks_out` from physics §10/12/13, chem §14/15/16, bio §17–19, and math §00–08.

### 2.3 Why two modes, not one

Could the synthesis-mode subsume the analytic mode (everything as essays)? No — analytic phil-of-science arguments have testable mastery endpoints (reconstruct the argument, identify the hidden premise, produce a counterexample) that the contemplative/synthesis mode does not. Forcing them into the same form would either reduce essays to argument-reconstruction practice (losing what makes them essays) or reduce units to free-form synthesis (losing the testability that justifies units).

Could the analytic mode subsume the synthesis mode (everything as tiered units)? No — the existing 6 essays would not survive being broken into prereq-graph atoms; their power comes from the integrative arc.

Two modes is the right answer; the umbrella's hybrid decision is right; this plan operationalizes it.

---

## §3 §20 subsection allocation

Philosophy occupies a single top-level section (§20) per the umbrella prefix table. Within §20:

| ID prefix | Subsection | Role |
|---|---|---|
| `20.essays.NN` | Synthesis essays | Role A; existing 6 + future additions |
| `20.01.NN` | Epistemology, logic, and formal methods | Tiered units; knowledge, justification, truth, propositional / first-order / modal logic, formal semantics, computability foundations |
| `20.02.NN` | Ethics and value theory | Tiered units; rights, liberty, moral dilemmas, well-being, flourishing, applied moral frameworks |
| `20.03.NN` | Philosophy of physics | Tiered units; interpretation of QM, classical-quantum boundary, spacetime ontology, the arrow of time |
| `20.04.NN` | Aesthetics and philosophy of language/literature | Reserved for future §22-facing philosophy units; no forced production in v1 |
| `20.05.NN` | Philosophy of biology | Tiered units; species, units of selection, fitness, teleology, life, agency, the gene concept |
| `20.06.NN` | Philosophy of mind | Tiered units; consciousness (hard problem), intentionality, computationalism, embodiment |
| `20.07.NN` | Political philosophy and democracy | Tiered units; legitimacy, authority, rights, civic order, democracy-facing concepts |
| `20.08.NN` | General philosophy of science | Tiered units; explanation, theory choice, evidence, scientific realism vs anti-realism, methodology |
| `20.09.NN` | Philosophy of mathematics | Tiered units; Platonism, structuralism, formalism, intuitionism, indispensability, set-theoretic foundations |

**Locked.** This is the §20 layout.

The `20.essays.NN` subsection is a single flat namespace; essays don't subdivide by topic because their integrative arc spans multiple. The `20.01–09` subsections subdivide because tiered philosophy has distinct sub-disciplines that map onto other domains' content.

**Addressing-semantics note.** §20 uses the same dotted-triple `section.chapter.unit` form as math/physics/chem/bio, *but with a semantic asymmetry*: in math/physics/chem/bio, level-2 is a chapter inside one section. In §20, level-2 is a **sub-discipline** (logic / phil-of-math / phil-of-physics / etc.) — there is no "chapter of philosophy" the way there is "chapter of QM". The validator regex (`^\d{2}\.\d{2}\.\d{2}$`) treats both forms identically; the asymmetry is in human-readable interpretation only. Cross-domain `hooks_out` targets like `20.03.01` parse as section=20, sub-discipline=03 (phil-of-physics), unit=01 — not as section=20, chapter=03 in the math sense. Document this so authors don't conflate the two readings.

### 3.1 Why these subsections, not more or fewer

Not more: history-of-philosophy survey and broad metaphysics-as-a-standalone-spine remain out of v1. Ethics, epistemology, and political philosophy are now in scope because live §20 units already depend on them and §23 world/civics needs principled hooks into rights, liberty, legitimacy, and evidence.

Not fewer: collapsing epistemology, ethics, phil-of-physics, phil-of-biology, and political philosophy into one "general philosophy" bucket would make cross-domain hooks useless. Keeping them distinct makes the contract clean: physics hooks to 20.03, biology to 20.05/20.06, world/civics to 20.02/20.07, language to 20.04, math to 20.09.

---

## §4 The hybrid mode operationally

`BIBLE_EXPANSION_PLAN.md` §2.6 locks the general unit-vs-essay criteria. Specific to phil:

### 4.1 When to write a synthesis essay (the `20.essays.NN` slot)

- The content is **integrative across multiple sub-disciplines of philosophy and/or across multiple traditions** (analytic / continental / wisdom-tradition / contemplative). Cannot be anchored to a single prereq tree.
- The content is **interpretive or orienting** — its job is to make a stance visible, not to teach an argument.
- The author wants to draw a **structural analogy** across traditions (e.g., the 01-reflexivity essay drawing the same structure from Vedanta, Sufism, and mathematics).
- There is no operationalized mastery endpoint — the essay is intended to *change how the reader sees*, not to be tested.

### 4.2 When to write a tiered analytic unit (under `20.01` … `20.09`)

- The content is **a position, an argument, or a concept** with a definable scope.
- It has **standard literature anchors** at Intermediate / Master (textbook canonical articles + primary papers).
- It has a **testable mastery endpoint** — reconstruct, identify, counterexample.
- It is **the natural landing target** for a `hooks_out` from a science unit.

### 4.3 Default in ambiguous cases

Default to **tiered unit** when ambiguous — same default as `BIBLE_EXPANSION_PLAN.md` §2.6. Essays accumulate worse than units; phil already has 6 essays and adding 20 more without discipline would shift the section's character.

### 4.4 Essay budget for v1

The 6 existing essays form an initial cluster. New essays are added one-at-a-time with explicit justification ("couldn't be a unit because X"). **Soft cap: 12 essays total** by end of v1, allowing for ~1 essay every couple of waves. Hard cap: 20.

---

## §5 Tier anchors

### 5.1 Essays (`20.essays.NN`)

No tier system. Essays are written at a single register — accessible-but-substantial prose, comparable to *The Hedgehog Review* or a long-form *Aeon* essay. Reading-time scope: 20–60 minutes per essay.

### 5.2 Tiered units (`20.01–09`)

Anchored to analytic-philosophy literature at three tiers, per subsection.

#### `20.01` Logic and formal methods

| Tier | Anchor |
|---|---|
| Beginner | Tomassi *Logic*; Velleman *How to Prove It*; *Logicomix* (popular but rigorous structural intro) |
| Intermediate | Boolos-Burgess-Jeffrey *Computability and Logic*; Mendelson *Introduction to Mathematical Logic* |
| Master | Shoenfield *Mathematical Logic*; Marker *Model Theory*; Kanamori *The Higher Infinite* (set theory at master); Lean / Mathlib formalization of foundational results (cross-cites math §01) |

**Lean status note.** `20.01` is the *one* phil subsection where Lean has direct purchase — propositional and first-order logic are exactly what formal verification handles. Master-tier units in `20.01` should aim for `lean_status: full` where Mathlib's logic libraries cover the result.

#### `20.09` Philosophy of mathematics

| Tier | Anchor |
|---|---|
| Beginner | Russell *Introduction to Mathematical Philosophy*; Hofstadter *Gödel, Escher, Bach* (popular but structurally serious) |
| Intermediate | Shapiro *Thinking About Mathematics: An Introduction to the Philosophy of Mathematics*; Brown *Philosophy of Mathematics: A Contemporary Introduction to the World of Proofs and Pictures* |
| Master | Shapiro *Philosophy of Mathematics: Structure and Ontology*; Maddy *Realism in Mathematics* + *Naturalism in Mathematics*; Benacerraf-Putnam *Philosophy of Mathematics* anthology (Benacerraf's "What Numbers Could Not Be" and "Mathematical Truth" are canonical); Field *Science Without Numbers*; Linnebo *Philosophy of Mathematics* |

#### `20.03` Philosophy of physics

| Tier | Anchor |
|---|---|
| Beginner | Maudlin *Philosophy of Physics: Space and Time*; Albert *Quantum Mechanics and Experience* (early chapters) |
| Intermediate | Albert *Quantum Mechanics and Experience*; Sklar *Philosophy of Physics*; Maudlin *Philosophy of Physics: Quantum Theory* |
| Master | Wallace *The Emergent Multiverse* (Everettian QM); Bell *Speakable and Unspeakable in Quantum Mechanics*; Earman *Bangs, Crunches, Whimpers, and Shrieks* (singularity / GR phil); primary lit (*Studies in Hist. & Phil. of Modern Physics*) |

#### `20.04` Aesthetics and philosophy of language/literature

This subsection is reserved for §22-facing philosophy: interpretation, meaning, aesthetic value, literature as knowledge, and philosophy of language where it directly supports language/literature units. It is not a first-wave production target.

#### `20.08` Philosophy of chemistry and general philosophy of science

Philosophy of chemistry is treated as a sublane of general philosophy of science for v1 because the live content pressure is currently lighter than physics, biology, ethics, and epistemology.

| Tier | Anchor |
|---|---|
| Beginner | Bensaude-Vincent & Stengers *A History of Chemistry* (philosophical history) |
| Intermediate | Hendry, Needham, Woody (eds.) *Philosophy of Chemistry* (Handbook of the Philosophy of Science, vol. 6) — the canonical reference |
| Master | Scerri *The Periodic Table: Its Story and Its Significance*; primary lit (*Foundations of Chemistry*) |

#### `20.05` Philosophy of biology

| Tier | Anchor |
|---|---|
| Beginner | Sober *Philosophy of Biology* (intro); Godfrey-Smith *Philosophy of Biology* (Princeton intro) |
| Intermediate | Sober *Philosophy of Biology* (full); Godfrey-Smith *Darwinian Populations and Natural Selection* |
| Master | Sober *Evidence and Evolution*; Okasha *Evolution and the Levels of Selection*; Wilson & Sober *Unto Others*; primary lit (*Biology & Philosophy*, *Studies in HPS-C*) |

#### `20.06` Philosophy of mind

| Tier | Anchor |
|---|---|
| Beginner | Searle *Mind: A Brief Introduction*; Chalmers *The Conscious Mind* (intro chapters) |
| Intermediate | Chalmers *The Conscious Mind* (full); Dennett *Consciousness Explained*; Block *Imagery* / *Consciousness, Function, and Representation* (collected papers) |
| Master | Chalmers (collected papers); primary lit (*Journal of Consciousness Studies*, *Mind & Language*); contemporary debates (Tegmark / Tononi IIT vs higher-order theories vs global-workspace) |

#### `20.08` General philosophy of science

| Tier | Anchor |
|---|---|
| Beginner | Okasha *Philosophy of Science: A Very Short Introduction*; Chalmers *What Is This Thing Called Science?* |
| Intermediate | Curd-Cover-Pincock *Philosophy of Science: The Central Issues* (anthology); Kuhn *Structure of Scientific Revolutions*; Hempel selected papers |
| Master | Salmon *Scientific Explanation and the Causal Structure of the World*; Cartwright *How the Laws of Physics Lie* + *The Dappled World*; van Fraassen *The Scientific Image*; Stanford *Exceeding Our Grasp*; primary lit (*Philosophy of Science*, *Synthese*, *British Journal for the Philosophy of Science*) |

---

## §6 Mastery endpoints per tier

### 6.1 Essays

No mastery endpoint. The reader emerges with a stance — testable only over years, not over a chapter.

### 6.2 Tiered units (across `20.01–09`)

| Tier | Endpoint |
|---|---|
| Beginner | Read and accurately summarize the argument in an intro-philosophy paragraph; identify the position being argued for; recognize obvious objections |
| Intermediate | Reconstruct a formal argument from a canonical paper (e.g., Putnam's "What Theories Are Not", Lewis's "How to Define Theoretical Terms", Bell's *Speakable*); identify hidden premises; produce a counterexample to a stated position; write a paragraph-length defense or critique |
| Master | Read a contemporary primary phil paper (post-2010), assess its argument, identify its place in the existing literature, and write a paragraph-length original response that engages with both the argument and at least one alternative position; do this consistently across the subsection (`20.0N`)'s scope |

These mirror the math/physics/chem/bio mastery endpoints in structure (testable, evidence-able) while honoring philosophy's specific cognitive moves.

### 6.3 Machine-verifiability

Per `BIBLE_EXPANSION_PLAN.md` §5: phil at I/M tier is **very low** machine-verifiable. Argument reconstruction at intermediate tier can be partially LLM-checked ("does the reconstruction preserve premise-conclusion structure"); at master tier, only human review counts.

**Exception**: `20.01` Logic and formal methods at Master tier where Lean covers the formal results — that subset is machine-verifiable like math. This makes `20.01` the easiest analytic-phil subsection to ship at scale.

---

## §7 Cross-domain link contract — phil-specific specifics

### 7.1 Inbound hooks (the dominant direction)

Phil receives `hooks_out` from the other domains. The expected target distribution (rough, to be updated after Wave 2):

| Source domain | Likely target subsections |
|---|---|
| Math | `20.01` logic, `20.09` phil-of-math |
| Physics | `20.03` phil-of-physics (heaviest landing site, esp. from §12 QM and §13 GR); also `20.08` for explanation / theory questions |
| Chemistry | `20.08` phil-of-chem / general phil-of-science (sparse) |
| Biology | `20.05` phil-of-biology (heavy, esp. from §19 eco/evo); `20.06` phil-of-mind (from §17.09 + §18.05) |
| Language | `20.04` aesthetics / philosophy of language and literature |
| World | `20.02` ethics, `20.07` political philosophy, `20.08` general philosophy of science/evidence |

### 7.2 Outbound hooks (the rare direction)

Phil can emit `hooks_out` *back into* science units. Examples:
- A unit on `20.03.01 The measurement problem in QM` may hook back to physics `12.01.02 Stern-Gerlach` ("see also: the experimental setup this debate centers on").
- A unit on `20.05.02 Units of selection` may hook back to bio `19.03.NN` natural selection units.
- An essay may hook back to multiple units across multiple domains as "where this view shows up empirically."

Validator treats phil's outbound hooks identically — `proposed`/`confirmed`, `why ≥ 30 chars`, etc.

### 7.3 The "see also" footer convention (UI-level, not contract-level)

Per `BIBLE_EXPANSION_PLAN.md` §2.5: every science unit that hooks into a phil target should, when rendered, display a "Philosophical questions this raises" footer linking to the phil targets. This is a *rendering* convention — site-side — not a frontmatter contract; the data is already in `hooks_out`.

### 7.4 Pending-hook absorption for phil

Per `BIBLE_EXPANSION_PLAN.md` §3.6 step 1: this plan's Wave 1 backlog is informed by harvesting `manifests/connections.json` for `kind: proposed` edges with `target` in §20. At this writing, that backlog is **empty** (no physics/chem/bio units have shipped yet under the new contract). It will populate as those Wave 1 units ship. The phil plan revisits its seed-unit choices once that backlog is non-empty.

---

## §8 First wave — essay retrofit + 2 tiered seed units

Three deliverables, executed in this order:

### 8.1 Essay ID retrofit (mandatory)

Required by `BIBLE_EXPANSION_PLAN.md` §10 step 4. Adds `id: 20.essays.NN` frontmatter to each existing essay:

| File | Assigned ID |
|---|---|
| `01-reflexivity.md` | `20.essays.01` |
| `02-geometry-of-disclosure.md` | `20.essays.02` |
| `03-perfected-figure.md` | `20.essays.03` |
| `04-what-passes-between.md` | `20.essays.04` |
| `05-practice.md` | `20.essays.05` |
| `06-realization.md` | `20.essays.06` |

Each essay also gets an `applies_to:` frontmatter field listing the section numbers it can be cross-referenced from (likely `[20]` for all 6 since they're integrative; deferred per-essay to retrofit-time).

### 8.2 Two tiered seed units

Chosen because they are the **highest-leverage inbound-hook targets** — the topics that the other domains' Wave-1 units will most likely want to hook into:

| Seed | ID | Subsection | Why this one |
|---|---|---|---|
| **The measurement problem in QM** | `20.03.01` | Phil-of-physics | Physics §12 Wave 1 ships Stern-Gerlach (`12.01.02`). Every QM interpretation question hooks here. Most-densely-anticipated phil target. Anchored in Albert + Maudlin + Wallace. |
| **The unit of selection** | `20.05.02` | Phil-of-biology | Bio §19 Wave 1 ships Hardy-Weinberg (`19.02.01`). Every "what is selection acting on" question hooks here. Anchored in Sober + Okasha. |

Two units, not more, because: (a) Wave 1's purpose is to validate the contract on canonical analytic-phil topics; (b) reviewer recruitment for phil is itself a bottleneck (§9); (c) the backlog from other domains is still empty at draft time, so seeding more than two without those signals is premature.

### 8.3 Sequence

`20.essays` retrofit (all 6, batch) → `20.03.01` measurement problem → `20.05.02` unit of selection.

Rationale:
- **Retrofit first** because it's blocking other plans' validators and is mechanical (no content change).
- **Measurement problem second** because phil-of-physics has the densest hook surface and is the cleanest analytic-phil topic to start with.
- **Unit of selection third** because it tests `hooks_out` to bio at the same time as `hooks_in` from bio, exercising bidirectional cross-domain edges.

### 8.4 Success criteria (Wave 1 phil)

- [ ] All 6 essays carry `id: 20.essays.NN` and `applies_to:` frontmatter; validator resolves cross-refs into them.
- [ ] `20.03.01` and `20.05.02` exist in `content/20-philosophy/`, structured as tiered units with B/I/M sections, frontmatter `hooks_out`, anchored references.
- [ ] `20.03.01` declares `hooks_out → 12.01.02` Stern-Gerlach (`kind: proposed` regardless of target ship state — promotion to `confirmed` requires a physics-side reviewer's semantic-correctness attestation per umbrella §3.2, which is not part of Wave 1).
- [ ] `20.05.02` declares `hooks_out → 19.02.01` Hardy-Weinberg (`kind: proposed`, same rule).
- [ ] Validator resolves all phil cross-refs in the site build.
- [ ] At least one science unit from physics/bio Wave 1 references `20.03.01` or `20.05.02` directly (closes the inbound-hook loop on those targets).
- [ ] Retro in `docs/pilot-lessons.md` — what worked, what didn't, what the analytic-phil rubric needs.

The wave *fails* if:

- The essay retrofit breaks the existing site's rendering of philosophy essays. (Validators must be additive, not breaking.)
- The bidirectional hook on `20.05.02 ↔ 19.02.01` doesn't actually resolve in `connections.json`.

(The Lean-anchor expectation applies to `20.01` Logic and formal methods only, not to `20.03` phil-of-physics — see §6.3 machine-verifiability note.)

### 8.5 Production strategy

| Item | Strategy | Notes |
|---|---|---|
| Essay retrofit | **Automation + spot-check** | Mechanical frontmatter addition; one script + visual check; not authoring |
| `20.03.01` measurement problem | **Manual** | First analytic-phil unit; needs human author judgment on philosophical-position rendering |
| `20.05.02` unit of selection | **Manual** | Same; ships before agent-drafted phil is attempted |

Agent-drafted phil units are deferred to Wave 2 at earliest. Manual gives us the rubric calibration we need — and analytic phil has a higher prose-craft demand than mechanism-explanation does.

---

## §9 Reviewer roster

The hardest reviewer-recruitment problem in the project. Phil reviewers:
- Cannot be the same people as the science reviewers (different training).
- Are not typically integrated into the cross-disciplinary review processes the science domains use.
- Cover sub-disciplines that are themselves siloed (phil-of-physics ≠ phil-of-biology in practitioner pool).

| Subsection | Tyler-solo? | Outside reviewer needed |
|---|---|---|
| `20.essays` | Yellow (synthesis writing is a Tyler-strength based on the existing 6 essays) | Optional external read for new essays |
| `20.01` logic | Yellow with Lean grounding | Logician for Master-tier (where Mathlib doesn't cover) |
| `20.02` ethics/value theory | Yellow / Red | Ethics specialist for I/M |
| `20.03` phil-of-physics | Yellow / Red | Phil-of-physics specialist (with physics-side credentialing) for I/M |
| `20.04` aesthetics / phil-of-language | Red | Language/literature-facing philosophy reviewer |
| `20.05` phil-of-bio | Yellow / Red | Phil-of-bio specialist for I/M |
| `20.06` phil-of-mind | Red | Phil-of-mind specialist for I/M (this is one of the most contested subfields in philosophy) |
| `20.07` political philosophy | Yellow / Red | Political philosophy / democratic theory reviewer |
| `20.08` general phil-of-science / phil-of-chem | Yellow / Red | Phil-of-science generalist for I/M; phil-of-chem commissioned when needed |
| `20.09` phil-of-math | Yellow with math grounding | Phil-of-math specialist for Master |

**Recruitment priority (in order):**

1. **Phil-of-physics + phil-of-biology specialist OR generalist phil-of-science specialist with strong cross-domain reading** — covers the densest hook landing sites (20.03 + 20.05). Single highest-leverage hire.
2. **Phil-of-math + logic specialist** — covers 20.01 + 20.09 + the formal side of 20.08.
3. **Phil-of-mind specialist** — covers 20.06; can't easily be substituted.

The phil-of-chem part of 20.08 is small enough that commissioning a one-off review for each Master-tier unit is acceptable in v1; no dedicated reviewer required.

**Tyler-as-essay-reviewer.** The synthesis-essay role is the one place where Tyler is plausibly the right reviewer — the existing 6 essays demonstrate the project's voice. New essays go through Tyler review by default. Tiered units do not, except in `20.essays.NN`.

**LLM-augmented review** is least reliable here. LLMs can catch obvious argument errors and bad citations; they cannot adjudicate live philosophical disputes. Master-tier phil units should be held in draft until a human reviewer is named.

---

## §10 Open questions (deferred)

| Question | Deferred to | Why now is wrong |
|---|---|---|
| Should history of philosophy or broad metaphysics get a dedicated subsection? | v2 scope discussion | v1 now admits ethics/political/aesthetics where live content needs them, but not a full historical/metaphysical survey |
| Does `20.essays` need internal sub-organization (e.g., a `20.essays.philosophical/`, `20.essays.contemplative/`) once it grows past ~10? | After essay count exceeds 10 | Premature with 6 essays |
| Should `20.06` phil-of-mind absorb a "cognitive science" interface as bio fills in §17.09 + §18.05? | After Wave 2 bio | Premature; bio sets the agenda for what the phil side wants to absorb |
| Whether to introduce a "history of science" subsection as v1 grows | Probably v2; lean against | Not a sub-discipline of phil-of-science proper; would distort §20 scope |
| How essays handle citation — same `[ref: source]` system as units, or freer narrative referencing? | Per-essay; default to the same system | Forcing strict citation may not survive the essay's voice (the existing 6 use a different reference style) |
| Does the synthesis-mode register need *its own* style guide separate from `style/editorial-voice.md`? | After 3 new essays accumulate | Premature; revisit when the pattern is observable |

---

## §11 Risks

| Risk | Mitigation |
|---|---|
| Reviewer recruitment for phil stalls completely; master-tier phil units accumulate in draft | Restrict phil to Beginner+Intermediate until ≥ 1 of each priority-reviewer-role is named. Synthesis essays can ship under Tyler review without external phil credentials. |
| The two registers (essays + analytic units) feel like different products on the same site | Site rendering treats them differently but visibly related — `/philosophy` route shows both, with the essay arc as featured content and the tiered units as a search-and-browse catalog. UI work for `BIBLE_EXPANSION_PLAN.md` site phase. |
| Analytic phil-of-physics or phil-of-bio units default to one position (e.g., Everettian QM, or gene-selectionism) and present it as canonical | Mastery rubric requires that each unit *covers the position space*, not advocates for one; reviewer enforces. This is a known failure mode in popular analytic-phil teaching. |
| Essay accumulation pace becomes unsustainable as more essays seem warranted | Soft cap 12, hard cap 20 (§4.4) enforces discipline. Each new essay requires explicit "couldn't be a unit because X" justification at review. |
| Cross-domain hook flow becomes uneven — physics dumps 30 hooks into 20.03 while chem barely touches 20.08 | Acceptable; this is real. Phil-of-chem will be smaller than 20.03 phil-of-physics because the underlying analytic-phil subfield is. No artificial balancing. |
| The 6 existing essays' style conflicts with the analytic-unit style and the project looks tonally inconsistent | Style guide for `20.01–09` follows `style/editorial-voice.md`; `20.essays.NN` continues its existing voice. The two registers are visibly different — by design — and the site treats them as such. |
| Phil-of-mind (20.06) becomes a magnet for fringe content (panpsychism, simulation theory, etc.) at master tier | Master-tier sources are the gatekeeping — Chalmers, Block, Dennett are the standard; popular and fringe positions appear only insofar as they are responded to in the canonical literature. |

---

## §12 Decision log entries (to be added to `OVERVIEW.md` §12 on the same date)

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-17 | Philosophy adopts **hybrid mode**: existing synthesis essays continue at `20.essays.NN`; new tiered analytic-philosophy units initially planned for the first seven analytic subsections | Essays cannot subsume analytic argument-reconstruction (no testable endpoint); tiered units cannot subsume the integrative arc of essays. Two registers, both load-bearing. Superseded by the 2026-05-22 allocation below. |
| 2026-05-17 | §20 subsection allocation initially locked as `20.essays` plus logic, phil-of-math, phil-of-physics, phil-of-chem, phil-of-bio, phil-of-mind, and general phil-of-science | Superseded by the 2026-05-22 allocation after live content expanded into ethics, aesthetics/language, political philosophy, and world/civics hooks. |
| 2026-05-22 | §20 allocation revised to match live content: `20.01` epistemology/logic, `20.02` ethics, `20.03` phil-of-physics, `20.04` aesthetics/phil-of-language, `20.05` phil-of-bio, `20.06` phil-of-mind, `20.07` political philosophy, `20.08` general phil-of-science/phil-of-chem, `20.09` phil-of-math | Live units already include epistemology and ethics; world/civics needs political philosophy; language needs aesthetics/meaning hooks |
| 2026-05-17 | Essay retrofit: 6 existing essays get IDs `20.essays.01` … `20.essays.06` | Required by umbrella §10 step 4; mechanical change; unblocks cross-refs from other domains |
| 2026-05-17 | Initial essay budget: soft cap 12, hard cap 20 by end of v1 | Essays accumulate without validator discipline; explicit caps prevent register drift |
| 2026-05-17 | `20.01` is the one phil subsection that targets `lean_status: full` at master tier where Mathlib covers | Propositional + first-order logic + parts of computability are exactly what Mathlib covers; this is the bridge between phil and the math/Lean pipeline |
| 2026-05-17 | Wave 1 phil: essay retrofit + 2 tiered seed units (`20.03.01` measurement problem, `20.05.02` unit of selection) | Highest-leverage hook landing sites for physics and bio Wave 1; calibrates analytic-phil rubric on canonical topics; reviewer recruitment gates more |
| 2026-05-17 | Tyler is the default reviewer for `20.essays.NN`; tiered units require outside reviewers per §9 priority list | Synthesis writing is a demonstrated Tyler strength (the 6 existing essays); analytic phil is not — be honest about this |
| 2026-05-17 | Master-tier phil units held in draft if no named human reviewer is available; LLM-augmented review explicitly not sufficient for master | Phil mastery endpoints (assess primary lit, write original response) are the least machine-verifiable in the whole project |

---

## §13 Next immediate actions

Gated on `BIBLE_EXPANSION_PLAN.md` §10 patches (UNIT_SPEC + validator + OVERVIEW patches) AND chem/bio Wave 1 retros so the phil-side seed slate can be adjusted if the inbound-hook taxonomy from those waves differs from this plan's prediction:

1. **Essay retrofit pass** — write `scripts/retrofit_essay_ids.py` (mechanical: parse the 6 essay files, prepend `id:` and `applies_to:` to frontmatter, idempotent). Run; spot-check rendering of `/philosophy/01-reflexivity` etc. for regressions; commit.
2. **Reviewer recruitment** — start outreach for the three priority reviewer roles (§9). This is the longest-pole item for phil, so start immediately.
3. **Sourcing pass** — `reference/_meta/SOURCES.md` extensions for phil. Phil sourcing is harder than science sourcing because much canonical phil is in copyrighted anthologies; identify which works have open / fair-use accessible versions.
4. **Coverage manifest** — `manifests/production/phil-coverage.json` mapping the §20 subsection anchor literature to (eventually) Babel Bible unit IDs.
5. **Harvest pending-hook backlog** — once Physics + Chemistry + Biology Wave 1 units have shipped, query `manifests/connections.json` for `kind: proposed` edges targeting §20; absorb each into the phil-side backlog per `BIBLE_EXPANSION_PLAN.md` §3.6.
6. **Produce `20.03.01` measurement problem** manually — first analytic-phil unit; establishes the analytic-phil rubric.
7. **Retro on `20.03.01`** — what's missing in the analytic-phil pedagogy spec; update the rubric.
8. **Produce `20.05.02` unit of selection** manually.
9. **Cross-domain audit** on Wave 1 phil: did the bidirectional hooks (`20.03.01 ↔ 12.01.02` and `20.05.02 ↔ 19.02.01`) resolve? Are there obvious missing hooks from the other domains?
10. **Update the existing `philosophy.tsx` route** and the `_layout.tsx` philosophy nav-link to expose both registers — essays as the featured arc, tiered units as a browse catalog. (Site work — coordinate with whoever is doing site updates after `BIBLE_EXPANSION_PLAN.md` §10 step 4.)

*This plan is the canonical reference for the philosophy axis. When uncertain about phil mode, subsection allocation, or essay-vs-unit decisions, check here. When updating, propagate to `OVERVIEW.md` §12 and `BIBLE_EXPANSION_PLAN.md` §6 the same day.*

---

*The broader cross-domain planning surface now includes the umbrella plan, technical-domain plans, and `LANGUAGE_WORLD_PLAN.md`.*
