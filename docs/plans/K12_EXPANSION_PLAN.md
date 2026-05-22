# Babel Bible — K-12 Expansion Plan

**Drafted 2026-05-20.** Extends Babel Bible from a post-high-school math/physics curriculum into a complete K-12+ education. Adds three new top-level domains: Language, World, Philosophy. Read `OVERVIEW.md` and `BRIEF.md` first.

**Status:** Draft. Defines content structure, neutrality principles, section numbering, and concept DAGs. Production follows this plan.

---

## 1. What this plan does

Extends the curriculum from 5 domains (Math, Physics, Chemistry, Biology, Philosophy) to 7 by adding:

- **Language** (section 22) — grammar, writing, literature techniques (tiered units) + reading guides (essays)
- **World** (section 23) — economics, civics, geography (tiered units) + history (essays)

Philosophy (section 20) absorbs history essays and normative civics essays as it grows.

**Site nav becomes:**

```
Math | Physics | Chemistry | Biology | Language | World | Philosophy
```

---

## 2. Neutrality principles

Content must be honest. These are non-negotiable.

### 2.1 Descriptive, not prescriptive

Grammar describes how English works, not how it "should" work. Economics describes how markets behave under different models, not how they "should" be structured. Civics describes how governments work, not which one is best. The reader learns what IS and draws their own conclusions about what OUGHT TO BE.

### 2.2 Multiple perspectives on contested ground

Where genuine disagreement exists — economic schools, historical interpretation, constitutional meaning, literary criticism — present the major positions without endorsing one. Name the schools. Name their arguments. Name their critics. The reader decides.

### 2.3 Comparative, not provincial

Civics covers multiple systems (parliamentary, presidential, federal, unitary), not just one country's. Economics covers multiple schools (neoclassical, Keynesian, institutional, behavioral, Austrian, Marxian), not just the dominant one. Geography covers the whole world. Literature draws from multiple traditions and periods.

### 2.4 No false balance

Presenting "both sides" when 97% of evidence supports one position is itself a bias. Climate change is real. Evolution is real. Germ theory is real. These are facts, not perspectives. The honest approach is to distinguish what's settled from what's genuinely contested. Section 20 essays handle the contested parts.

### 2.5 Source transparency

Every claim cites its source. If a claim is contested, the sources show that. If a claim is consensus, the sources show that too. The reference archive and `[ref:]` citation system carry forward unchanged.

### 2.6 Acknowledge the observer

History is told by someone. Every historical account has a perspective. The history essays are transparent about whose perspective they present and what evidence supports each reading. No essay pretends to be the definitive account.

---

## 3. Section numbering

Existing sections are locked (00-08 math, 09-13 physics, 14-16 chemistry, 17-19 biology, 20 philosophy, 21 number theory). New sections:

| Prefix | Domain | Subsections |
|---|---|---|
| `22.01` | Language — Grammar | Parts of speech through punctuation |
| `22.02` | Language — Writing | Sentences through revision |
| `22.03` | Language — Literature techniques | Metaphor through unreliable narration |
| `23.01` | World — Economics | Scarcity through development economics |
| `23.02` | World — Civics | Government through international organizations |
| `23.03` | World — Geography | Maps through environmental geography |
| `20.essays` | Philosophy — expanded | History, normative civics, new philosophy |

Essay IDs follow the existing pattern: `22.essays.NN` (reading guides), `23.essays.NN` (history), `20.essays.NN` (philosophy, normative civics).

---

## 4. Content types

### Tiered units (sections 22.01-22.03, 23.01-23.03)

Same `UNIT_SPEC.md`. Same frontmatter schema. Same validator. Differences from STEM units:

- `lean_status: none` on all units (no Mathlib coverage for grammar/economics/civics)
- `human_reviewer` required on all units
- Exercise types skew toward `multiple-choice`, `short-answer`, `open-ended`
- No `symbolic` or `lean-proof` exercise types
- Master tier is "the deeper truth behind the procedure" rather than "graduate research readiness"
  - Grammar Master: linguistic theory, Chomsky, universal grammar, why English does what it does
  - Economics Master: mathematical formalization of the model, its limits, alternative models
  - Civics Master: comparative political theory, constitutional philosophy
  - Geography Master: geospatial analysis, GIS concepts, statistical geography

### Essays (sections 20, 22.essays, 23.essays)

Same format as existing philosophy and chemistry essays. Frontmatter:

```yaml
title: "..."
slug: "..."
order: N
subtitle: "..."
id: 23.essays.01
applies_to: [23]
```

No validator. No prerequisites. No tier markers. Multi-perspective synthesis.

---

## 5. Concept DAG — Language

### 5.1 Grammar (22.01)

```
22.01.01 Nouns
22.01.02 Verbs
22.01.03 Sentences (subject + predicate)
  ← 22.01.01, 22.01.02
22.01.04 Pronouns
  ← 22.01.01
22.01.05 Adjectives
  ← 22.01.01
22.01.06 Adverbs
  ← 22.01.02
22.01.07 Prepositions
22.01.08 Conjunctions (coordinating, subordinating, correlative)
22.01.09 Interjections
22.01.10 Noun phrases and verb phrases
  ← 22.01.01, 22.01.02
22.01.11 Subject-verb agreement
  ← 22.01.03, 22.01.04
22.01.12 Verb tense (present, past, future)
  ← 22.01.02
22.01.13 Perfect and progressive aspects
  ← 22.01.12
22.01.14 Active and passive voice
  ← 22.01.03, 22.01.12
22.01.15 Clauses (independent and dependent)
  ← 22.01.03, 22.01.08
22.01.16 Compound and complex sentences
  ← 22.01.15
22.01.17 Relative clauses
  ← 22.01.15, 22.01.04
22.01.18 Punctuation: end marks, commas
  ← 22.01.03
22.01.19 Punctuation: semicolons, colons, dashes
  ← 22.01.16, 22.01.18
22.01.20 Apostrophes and quotation marks
  ← 22.01.03
22.01.21 Common errors (fragments, run-ons, dangling modifiers)
  ← 22.01.16, 22.01.18
22.01.22 Parallel structure
  ← 22.01.16
22.01.23 Pronoun case and reference
  ← 22.01.04, 22.01.17
22.01.24 Capitalization conventions
  ← 22.01.03
```

### 5.2 Writing (22.02)

```
22.02.01 Writing a clear sentence
  ← 22.01.03 (sentences)
22.02.02 Paragraph structure
  ← 22.02.01
22.02.03 Transitions and flow
  ← 22.02.02
22.02.04 Thesis statement
  ← 22.02.02
22.02.05 Structuring an argument
  ← 22.02.04
22.02.06 Using evidence
  ← 22.02.05
22.02.07 Counterargument and rebuttal
  ← 22.02.05
22.02.08 Introduction and conclusion
  ← 22.02.04
22.02.09 Citation and attribution
  ← 22.02.06
22.02.10 Revision and editing
  ← 22.02.01
22.02.11 Style and voice
  ← 22.02.10
```

### 5.3 Literature techniques (22.03)

```
22.03.01 Literal vs figurative language
  ← 22.01.01 (nouns, basic vocabulary)
22.03.02 Metaphor and simile
  ← 22.03.01
22.03.03 Symbolism and allegory
  ← 22.03.02
22.03.04 Irony (verbal, situational, dramatic)
  ← 22.03.01
22.03.05 Foreshadowing and suspense
  ← 22.03.01
22.03.06 Point of view (first, second, third person)
  ← 22.01.03 (sentences)
22.03.07 Tone and mood
  ← 22.03.06
22.03.08 Theme
  ← 22.03.01
22.03.09 Motif and repetition
  ← 22.03.08
22.03.10 Unreliable narration
  ← 22.03.06, 22.03.04
22.03.11 Satire and parody
  ← 22.03.04
22.03.12 Imagery and sensory detail
  ← 22.03.01
22.03.13 Allusion
  ← 22.03.01
22.03.14 Personification
  ← 22.03.02
22.03.15 Hyperbole and understatement
  ← 22.03.01
```

---

## 6. Concept DAG — World

### 6.1 Economics (23.01)

```
23.01.01 Scarcity and choice
23.01.02 Opportunity cost
  ← 23.01.01
23.01.03 Supply and demand
  ← 23.01.01
23.01.04 Market equilibrium
  ← 23.01.03
23.01.05 Elasticity
  ← 23.01.04
23.01.06 Price controls (ceilings and floors)
  ← 23.01.04
23.01.07 Consumer and producer surplus
  ← 23.01.04
23.01.08 Costs of production (fixed, variable, marginal)
  ← 23.01.01
23.01.09 Perfect competition
  ← 23.01.04, 23.01.08
23.01.10 Monopoly
  ← 23.01.09
23.01.11 Oligopoly and monopolistic competition
  ← 23.01.10
23.01.12 Profit maximization
  ← 23.01.08, 23.01.09
23.01.13 Labor markets and wages
  ← 23.01.04
23.01.14 Money and banking
  ← 23.01.01
23.01.15 Inflation and deflation
  ← 23.01.14
23.01.16 GDP and economic measurement
  ← 23.01.01
23.01.17 Unemployment
  ← 23.01.16
23.01.18 Fiscal policy (taxes and spending)
  ← 23.01.16
23.01.19 Monetary policy (interest rates, central banks)
  ← 23.01.15, 23.01.16
23.01.20 International trade and comparative advantage
  ← 23.01.02
23.01.21 Exchange rates
  ← 23.01.14, 23.01.20
23.01.22 Game theory basics (prisoner's dilemma, Nash equilibrium)
  ← 23.01.01
23.01.23 Externalities and public goods
  ← 23.01.09
23.01.24 Income inequality and redistribution
  ← 23.01.16
23.01.25 Behavioral economics: biases and heuristics
  ← 23.01.01
23.01.26 Market failures
  ← 23.01.09, 23.01.23
23.01.27 Economic systems (market, command, mixed)
  ← 23.01.01
23.01.28 Development economics
  ← 23.01.16, 23.01.20
23.01.29 Personal finance: budgeting, saving, compound interest
  ← 23.01.14
23.01.30 Personal finance: credit, debt, investing
  ← 23.01.29
```

Math prerequisites from existing sections:
- 23.01.03 (supply/demand) ← `00.03.01` (linear equations)
- 23.01.05 (elasticity) ← `00.03.02` (quadratic formula for calculus-adjacent thinking)
- 23.01.08 (costs) ← `00.03.01` (linear equations)
- 23.01.29 (compound interest) ← `00.05.01` (exponentials/logarithms, when it exists)

### 6.2 Civics (23.02)

```
23.02.01 What is government
23.02.02 Types of government (democracy, monarchy, authoritarian, theocratic, oligarchic)
  ← 23.02.01
23.02.03 What is a constitution
  ← 23.02.01
23.02.04 Separation of powers
  ← 23.02.03
23.02.05 The legislature
  ← 23.02.04
23.02.06 The executive
  ← 23.02.04
23.02.07 The judiciary
  ← 23.02.04
23.02.08 How a law is made
  ← 23.02.05, 23.02.06
23.02.09 Electoral systems (plurality, proportional, ranked choice, mixed)
  ← 23.02.02
23.02.10 Political parties and interest groups
  ← 23.02.09
23.02.11 Rights and civil liberties
  ← 23.02.03
23.02.12 Federalism and local government
  ← 23.02.04
23.02.13 International organizations (UN, EU, AU, ASEAN, WTO)
  ← 23.02.01
23.02.14 Treaties and international law
  ← 23.02.13
23.02.15 Citizenship and civic participation
  ← 23.02.01
```

Comparative by design. Unit 23.02.05 (legislature) covers US Congress, UK Parliament, German Bundestag, Indian Parliament — not just one model. Same for every structural unit.

### 6.3 Geography (23.03)

```
23.03.01 Maps and map projections
23.03.02 Latitude, longitude, and coordinate systems
  ← 23.03.01
23.03.03 Continents and oceans
23.03.04 Landforms (mountains, rivers, deserts, plains, coasts)
23.03.05 Climate zones and biomes
23.03.06 Population distribution and density
23.03.07 Urbanization and settlement
23.03.08 Natural resources and their distribution
  ← 23.03.04, 23.03.05
23.03.09 Cultural geography (language families, religion, ethnicity)
23.03.10 Political geography (borders, territories, disputed regions)
23.03.11 Human migration
  ← 23.03.06, 23.03.09
23.03.12 Environmental geography (sustainability, climate change)
  ← 23.03.05, 23.03.08
```

---

## 7. Essays

Essays live in `site/src/content/` collections, not in `content/` unit files.

### 7.1 History essays (23.essays)

Multi-perspective synthesis. Not "here's what happened." Instead: "here's what multiple historians argue happened, and here's why they disagree."

Candidates (not all produced immediately):

1. "How do we know what happened? Sources, bias, and historiography"
2. "Why did Rome fall? Five historians, five answers"
3. "The Silk Road: trade route or cultural exchange network?"
4. "Who started the Industrial Revolution, and who paid for it?"
5. "Colonialism: extractive economy, civilizing mission, or both?"
6. "How the printing press changed who got to tell history"
7. "Oral traditions vs written records — what counts as a source?"
8. "Revolutions that succeeded and revolutions that didn't"
9. "How different groups experienced the same war"
10. "The nation-state: invention, natural category, or trap?"
11. "Why empires fall — and whether that's even the right question"
12. "How disease shaped history more than any general"
13. "Was the 20th century the most violent in history?"
14. "Decolonization: what happened, what didn't, what's still happening"
15. "The Cold War from three continents"

### 7.2 Literature reading guides (22.essays)

Not "here's what it means." Instead: "Here are things to notice. Here are questions to ask. Here's what critics have argued."

Candidates drawn from works commonly taught across English-speaking education:

1. Homer — The Odyssey
2. Sophocles — Oedipus Rex
3. Dante — Inferno
4. Shakespeare — Hamlet
5. Shakespeare — Macbeth
6. Austen — Pride and Prejudice
7. Dickens — A Tale of Two Cities
8. Shelley — Frankenstein
9. Twain — Adventures of Huckleberry Finn
10. Orwell — 1984
11. Orwell — Animal Farm
12. Lee — To Kill a Mockingbird
13. Achebe — Things Fall Apart
14. Golding — Lord of the Flies
15. Bradbury — Fahrenheit 451
16. Morrison — Beloved
17. Atwood — The Handmaid's Tale
18. Salinger — The Catcher in the Rye
19. Fitzgerald — The Great Gatsby
20. Hemingway — The Old Man and the Sea

### 7.3 Philosophy / normative civics expansion (20.essays)

Extends the existing 6 essays. Candidates:

7. "What is knowledge, and how do we know we have it?"
8. "What is justice?"
9. "What rights should people have?"
10. "Freedom vs security — is there a right balance?"
11. "Is democracy the best system?"
12. "What is consciousness?"
13. "Can machines think?"
14. "What is beauty?"
15. "The trolley problem and why it won't go away"
16. "What is the good life?"
17. "Philosophy of science: how do we know science works?"
18. "Philosophy of mathematics: do numbers exist?"

---

## 8. Unit counts

| Section | Tiered units | Essays |
|---|---|---|
| 22.01 Grammar | 24 | 0 |
| 22.02 Writing | 11 | 0 |
| 22.03 Literature techniques | 15 | 0 |
| 22.essays Reading guides | 0 | 20 |
| 23.01 Economics | 30 | 0 |
| 23.02 Civics | 15 | 0 |
| 23.03 Geography | 12 | 0 |
| 23.essays History | 0 | 15 |
| 20.essays Philosophy expansion | 0 | 12 |
| **Total new** | **107** | **47** |

Combined with existing 699 units and 8 essays, total curriculum reaches ~806 units and ~55 essays.

---

## 9. Production order

Grammar first because it has the clearest prerequisite chain, is the most testable, and is the foundation for writing and literature.

| Wave | Content | Units | Est. time |
|---|---|---|---|
| 1 | Grammar (22.01) | 24 | 2-3 weeks |
| 2 | Writing (22.02) | 11 | 1-2 weeks |
| 3 | Literature techniques (22.03) | 15 | 1-2 weeks |
| 4 | Economics (23.01) | 30 | 2-3 weeks |
| 5 | Civics (23.02) | 15 | 1-2 weeks |
| 6 | Geography (23.03) | 12 | 1 week |
| Ongoing | Essays (history, guides, philosophy) | — | parallel |

Waves 1-3 are sequential (each builds on the last). Waves 4-6 are independent of each other and can run parallel with Waves 1-3. Essays can be written at any time.

---

## 10. Cross-domain hooks

New sections hook into existing STEM sections:

- Economics (23.01) → Math (00.03 linear equations, 00.05 exponentials)
- Geography (23.03) → Biology (17-19 biome/ecology units)
- Literature techniques (22.03) → Philosophy (20, aesthetics, meaning)
- History essays (23.essays) → Physics (history of science), Biology (history of medicine)
- Civics (23.02) → Economics (23.01, fiscal/monetary policy)
- Grammar (22.01) → Math (00.01, formal systems, set theory — structural parallels)

These hooks use the existing `hooks_out` mechanism from `BIBLE_EXPANSION_PLAN.md`.

---

## 11. What's locked vs open

### Locked

- Seven-domain scope: Math, Physics, Chemistry, Biology, Language, World, Philosophy
- Section numbering: 22 (Language), 23 (World), 20 expanded (Philosophy)
- Neutrality principles (section 2)
- Unit spec applies to all tiered units (22.01-22.03, 23.01-23.03)
- Essay format applies to all essay content
- No Lean in new sections (`lean_status: none` everywhere)
- Comparative, not nation-specific (civics, economics, geography)
- History is essay-only, not tiered units

### Open

- Specific essay list (candidates in section 7, not all produced immediately)
- Literature reading guide list (expands over time)
- K-8 math extension (separate from this plan, extends section 00)
- Site infrastructure changes (separate from this plan)
- Self-tracking UX (separate from this plan)

---

## 12. Decision log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-20 | Three new domains: Language, World, Philosophy expansion | Replaces 5-6 separate sections with clean nav items |
| 2026-05-20 | Plain English names, not classical | Visitors understand "Language" and "World" instantly; classical names are insider language |
| 2026-05-20 | History as essays, not units | History is interpretation, not fact; essay model is honest about this |
| 2026-05-20 | Comparative civics, not nation-specific | Avoids provincial bias; teaches how systems work, not one system |
| 2026-05-20 | Economics presents multiple schools | No single economic model is truth; present models as models |
| 2026-05-20 | Grammar is the first production wave | Clearest prerequisite chain, most testable, foundation for writing/literature |

---

*This plan is the canonical reference for the K-12 expansion. When uncertain, check here first.*
