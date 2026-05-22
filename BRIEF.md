# Babel Bible — Brief

One page. Read this first. Everything downstream references it.

---

## What Babel Bible is

A single curriculum that takes a self-taught learner from minimal prerequisites to graduate-level mastery across mathematics and physics. Every unit exists at three depths (Beginner, Intermediate, Master) in a single source document with progressive disclosure. Units are cross-linked into a prerequisite graph. Proofs at Intermediate+ are Lean-verified where Mathlib covers them. Exercises are interactive — answers can be input and checked.

Built to supersede existing roadmaps (Fast Track, 't Hooft, Rigetti, Tong) by being structurally better in ways printed books physically cannot be.

## Who it's for

**Entry requirement:** high-school algebra, basic functions, elementary geometry. Anyone who finished a standard high-school math sequence can start. No calculus assumed.

**Three learner profiles:**

| Profile | Tier primary use | Endpoint |
|---|---|---|
| Curious adult, high-school student exploring | Beginner | Scientific literacy — can read popular science writing with real comprehension |
| Undergrad, self-taught adult aiming at rigor | Intermediate | Undergrad-textbook mastery — can work exercises, follow derivations |
| PhD-track learner, career-changer into research | Master | Graduate research readiness — can open a follow-on research paper and read it |

A single learner can use different tiers for different units (e.g., Beginner on topology, Master on linear algebra). The tier is per-unit per-session.

## The three tiers

**Anchored to real existing literature** so "what goes in each tier" is concrete, not vibes:

- **Beginner** ≈ 3Blue1Brown / Steven Strogatz *Infinite Powers* / Khan Academy level. Intuition + visuals + worked examples with everyday numbers. No formal proofs. Minimal notation beyond what's already introduced.
- **Intermediate** ≈ Sheldon Axler *Linear Algebra Done Right* / Apostol *Calculus* / Griffiths *Introduction to Electrodynamics* level. Definitions, key proofs, exercises, Lean puzzles with scaffolded tactics. The standard undergrad-textbook tier — where most serious learners actually live.
- **Master** ≈ Lang *Algebra* / Hartshorne *Algebraic Geometry* / Weinberg *QFT* / Bott-Tu *Differential Forms* level. Full proofs, advanced results, connections to deep theory, historical context, open-ended research-adjacent problems.

If a reviewer ever asks "what tier is this?", the answer is "point at the anchor book — does this section feel like that?" Concrete target, not taste.

## What mastery means, operationalized per tier

- **Beginner tier complete**: The learner can read a popular-science article on the topic and correctly explain the core ideas to another person.
- **Intermediate tier complete**: The learner can work the end-of-chapter problems of the corresponding anchor textbook without solution-peeking, and produce a correct, readable write-up.
- **Master tier complete**: The learner can open a research paper that depends on the topic and, within a reasonable reading time, follow the argument and identify which parts are novel vs. background.

These are *testable*. Every unit's exercises and assessments are designed to evidence the corresponding endpoint.

## Pedagogical philosophy

1. **Rigor-when-you-want-it, not forced.** The same unit serves all three tiers; users escalate depth on demand.
2. **Multiple explanation modes per concept.** Geometric, algebraic, computational, physical. Books can't afford the page count; we can.
3. **Lean as ground truth for proofs.** Where Mathlib covers, formalize. Machine-verified correctness replaces "trust me" authority.
4. **Do, don't just read.** Interaction is core, not optional. Every unit has exercises with answer-checking; advanced tiers have Lean proof practice.
5. **Mastery-gated, not time-gated.** Users advance by demonstrating they can, not by sitting through a fixed schedule.
6. **Cross-linked graph, not linear.** Concepts reference each other across the entire curriculum — the learner's path through is personal.

## Scope v1

**In scope:**
- Mathematics: linear algebra, analysis, complex analysis, algebra, topology, differential geometry, algebraic topology, algebraic geometry, number theory, probability.
- Physics: classical mechanics, EM, SR, GR, quantum mechanics, statistical mechanics, QFT, gauge theory, symplectic geometry, spin geometry.
- Chemistry: general chemistry, physical chemistry, organic chemistry, inorganic chemistry, spectroscopy, electrochemistry, and chemistry-side biochemistry mechanisms.
- Biology: molecular/cellular biology, organismal physiology, ecology, evolution, population genetics, and mechanistic origin-of-life biology.
- Philosophy: synthesis essays plus tiered analytic units in epistemology, ethics, philosophy of science, philosophy of physics, philosophy of biology, and related domains.
- Language: grammar, writing, literature, rhetoric, and source-grounded literary study.
- World: economics, civics, geography, history-facing world essays, and social-science foundations.
- Spine: augmented Fast Track (prereqs + 3 sections).
- Target size: ~1500–3000 atomic units across all three tiers, plus a smaller number of synthesis essays where unit form is the wrong tool.

**Out of scope v1:**
- K–8 arithmetic (require basic algebra entry; build "Babel Bible Foundations" separately if demand emerges).
- Computer science as a standalone sixth technical domain (defer to v2+, though math-adjacent logic/computation may appear where needed).
- Medicine, clinical pharmacology, empirical psychology, software-tool tutorials, and current-events/news coverage.
- Credentialing, cohorts, grading, forums, tutor marketplace.
- Translation / localization (English v1).

## What Babel Bible is *not*

- Not a Khan Academy replacement. Khan is K–12-focused and intentionally simple. Codex goes past where Khan stops and maintains rigor.
- Not a textbook replacement at Master tier. Codex supplements Lang / Hartshorne with interactivity and Lean-verified proofs; serious learners still want the original texts as reference.
- Not an AI tutor. There is no chat interface. Content is curated, produced, and reviewed with human judgment + AI support. AI generates drafts; humans and formal verifiers gate what ships.
- Not a degree. No credential. Learner outcomes are the only thing that matters.

## Entry prerequisites for authors/reviewers

Authors and reviewers producing or gating content must be able to:
- Read at least the Intermediate-tier anchor text fluently for the unit's topic.
- Write Lean 4 / Mathlib proofs at the level of the unit (or pair with a Lean-fluent reviewer).
- Evaluate whether a Beginner-tier section actually conveys the intuition it claims to (not just restates the formal definition in easier words).

## Versioning

- v0.1 — this scaffold + 10 pilot units (Shilov §1.1–§1.3 territory).
- v0.5 — full Section 1 (fundamentals) all three tiers.
- v1.0 — cross-domain mastery spine: math/physics depth plus first-class chemistry, biology, philosophy, language, and world sections.
- v2+ — standalone computer science, medicine/clinical tracks, psychology/cognitive science, K–8 foundations, localization, and credentialing.
