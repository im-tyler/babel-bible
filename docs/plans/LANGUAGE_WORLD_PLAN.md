# Babel Bible — Language and World Plan

**Drafted 2026-05-22.** Per-domain plan for the two non-STEM expansion axes already present in the live content tree: Language (§22) and World (§23). Subordinate to `OVERVIEW.md` and sibling to the chemistry, biology, and philosophy plans.

**Status:** Active catch-up plan. The repo already contains broad draft coverage in both domains; this plan describes how to harden it into Babel Bible-grade curriculum without forcing humanities and social-science material through a mathematics-only theorem/proof spec.

---

## §1 What this plan does

1. Makes §22 and §23 first-class v1 domains instead of informal draft appendices.
2. Defines what counts as rigor in language, literature, writing, economics, civics, geography, and history-facing world essays.
3. Names the structural debt visible in the current draft corpus: placeholder references, thin visuals, inconsistent exercise schema, and Master sections that often summarize instead of analyzing.
4. Gives producer agents a decision rule for when to add units, when to write essays, and when to stop and source-harden instead.

---

## §2 Section Map

| Prefix | Domain | Current role |
|---|---|---|
| `22.01.NN` | Grammar | Parts of speech, syntax, punctuation, usage, common errors |
| `22.02.NN` | Writing | Sentences, paragraphs, argument, evidence, revision, style |
| `22.03.NN` | Literature | Figurative language, narrative devices, critical lenses |
| `22.essays.NN` | Language/literature essays | Long-form source-guided readings of works, authors, genres, and critical traditions |
| `23.01.NN` | Economics | Micro, macro, policy, personal finance, economic systems |
| `23.02.NN` | Civics | Government, constitutions, institutions, lawmaking, rights, participation |
| `23.03.NN` | Geography | Cartography, physical geography, human geography, environmental geography |
| `23.essays.NN` | World essays | History-facing and social-science synthesis essays |

This namespace is locked for v1. Do not move these units into philosophy. Philosophy can analyze the foundations of these fields; §22 and §23 teach the fields themselves.

---

## §3 Rigor By Domain

The shared Babel Bible standard remains: clear prerequisites, tiered explanation, exercises, sources, and human review. What changes is the object being reviewed.

| Domain | Intermediate evidence | Master evidence |
|---|---|---|
| Grammar | Correct syntactic classification, diagnostics, counterexamples, usage contrasts | Competing grammatical theories, cross-linguistic comparison, historical change, source-grounded linguistics |
| Writing | Revision exercises, argument structure, evidence use, style diagnosis | Rhetorical theory, genre conventions, transfer across disciplines, source-aware composition pedagogy |
| Literature | Close reading, device identification, theme/structure analysis | Critical traditions, interpretive disagreement, historical context, translation/form questions |
| Economics | Model use, graph/quantity interpretation, policy tradeoff analysis | School-level disagreement, empirical limits, formal model assumptions, institutional context |
| Civics | Institution mapping, constitutional/legal process, comparative cases | Political-theory frames, institutional failure modes, comparative constitutionalism, source-grounded history |
| Geography | Map/projection/datum reasoning, spatial pattern analysis | GIS/geodesy foundations, critical geography, environmental systems, spatial-data limitations |
| World essays | Source comparison, causal pluralism, historiographic disagreement | Historiography, primary/secondary source distinction, evidence weighting, contested narratives |

---

## §4 Unit Form vs Essay Form

Use a **tiered unit** when the learner can practice a bounded skill or concept:

- identify the head of a noun phrase;
- revise a paragraph for flow;
- distinguish verbal, dramatic, and situational irony;
- compute opportunity cost;
- trace how a bill becomes law;
- read latitude/longitude and explain datum dependence.

Use a **synthesis essay** when the topic is best handled as an extended guided reading or interpretive dispute:

- a whole literary work, author, or genre;
- a historical question with multiple schools of explanation;
- a civics question whose answer depends on constitutional tradition and comparative evidence;
- a world-history pattern that spans regions or centuries.

Tiebreaker: choose the tiered unit if there is a clear exerciseable skill; choose the essay if the topic's value is the comparison of interpretations.

---

## §5 Required Hardening Before Promotion

The current §22/§23 corpus is useful draft material, not shipping-grade curriculum. Promotion from `draft` requires:

- Replace `TODO_REF` with real sources or mark them `pending: true` with a pointer into `docs/catalogs/NEED_TO_SOURCE.md`.
- Replace `human_reviewer: "TBD"` with a named reviewer or keep `status: draft`.
- Add at least one real visual, table, map, diagram, excerpt frame, or source facsimile reference in Beginner sections. ASCII diagrams can remain as draft scaffolds but are not the final visual standard.
- Normalize exercise blocks to `<aside class="exercise" data-difficulty="..." data-type="...">` with prompt, hint where pedagogically useful, and answer/details.
- Add a domain-appropriate Intermediate evidence section. It need not be titled `Key theorem with proof`; acceptable headings include `Key analysis`, `Key argument`, `Key model`, `Case study`, `Diagnostics`, `Close reading`, and `Comparative framework`.
- Add a substantive Master section beyond history and bibliography. Acceptable headings include `Linguistic theory`, `Critical theory`, `Academic perspectives`, `Political theory`, `Geographic theory`, `Historiography`, and `Advanced model`.

---

## §6 Source Standards

Language and world units need more source discipline than the current drafts show.

Preferred anchors:

- Grammar and linguistics: Huddleston & Pullum, Quirk et al., Cambridge/Oxford grammars, standard linguistics handbooks, primary papers where claims are theoretical.
- Writing and rhetoric: Williams, Graff/Birkenstein, Booth/Colomb/Williams, classical rhetoric where historically relevant, discipline-specific writing studies.
- Literature: primary texts, reputable translations, Norton/Cambridge/Oxford critical editions, major critical essays, and named schools of interpretation.
- Economics: Mankiw or CORE for beginner/intermediate, plus Smith, Ricardo, Marshall, Keynes, Hayek, Friedman, Ostrom, Sen, Piketty, and empirical sources where claims are quantitative.
- Civics: constitutional texts, court cases, legislative rules, comparative politics texts, Federalist/Anti-Federalist papers where relevant, official institutional sources.
- Geography: geodesy/GIS references, IPCC/NOAA/NASA/USGS where factual Earth-system claims are made, plus critical geography sources for power/space claims.
- World essays: primary sources where possible; otherwise at least two major historians or social scientists representing distinct interpretations.

Avoid anonymous web summaries as anchors except for beginner orientation. Current, unstable factual claims require dated sources and should be revisited periodically.

---

## §7 Expansion Priorities

1. **Source-hardening beats more volume.** Do not add another 50 language/world drafts until the current 107 units have real references and reviewer status.
2. **Normalize exercises mechanically.** The existing drafts already contain prompts; convert them into the canonical exercise schema before adding more.
3. **Upgrade visuals.** Grammar can use parse trees and phrase-structure diagrams; literature can use timeline/source/context panels; economics needs graphs; civics needs institution-flow diagrams; geography needs maps/projection illustrations.
4. **Deepen Master sections.** The current Master sections often summarize a theory. They need to stage disagreement, name assumptions, and cite representative sources.
5. **Create missing breadth only after hardening.** Candidate later additions: history methods, world religions as historical/cultural study, international relations, anthropology, sociology, media literacy, statistics for citizens.

---

## §8 Review Bottleneck

§22/§23 cannot be reviewed by a single generic "humanities reviewer." Minimum reviewer lanes:

- grammar/linguistics;
- writing/rhetoric/composition;
- literature/classics/translation where needed;
- economics;
- civics/comparative politics/law;
- geography/GIS/environmental systems;
- history/historiography for world essays.

Until reviewers exist, units may remain useful drafts, but they should not be promoted to shipped solely because the prose reads well.

---

## §9 Decision Log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-22 | §22 and §23 are v1 domains, not ancillary notes | The live content tree already contains 50 language units and 57 world units plus essays; specs must match reality |
| 2026-05-22 | Humanities/social-science rigor is checked through diagnostics, argument, source, model, case, and interpretive analysis rather than theorem/proof sections | The math unit template is structurally useful but its proof object is discipline-specific |
| 2026-05-22 | Source-hardening and exercise normalization are the first priority for §22/§23 | The current draft corpus is broad enough; quality now depends on references, review, visuals, and schema consistency |

---

*When a producer is unsure whether a language/world addition belongs as a unit, essay, or later-domain expansion, check this plan first.*
