# Codex Production Runbook

**For AI agents producing curriculum units. Read this fully ONCE per session. Almost everything you need is here.**

You are producing tiered curriculum units for the Codex (Babel Bible) project at `/Users/tyler/Documents/Code Projects/B.I.B.L.E/`. Your job: write the next units in the queue (§7), validate them, and report back. Don't deviate from this runbook unless explicitly instructed.

---

## §1 Mission and scope

**The project.** A five-domain curriculum: math (§00–08, 313 units shipped — don't touch these), physics (§09–13), chemistry (§14–16), biology (§17–19), philosophy (§20). Each tiered unit covers one concept across Beginner / Intermediate / Master tiers in a single markdown file.

**Your scope.** Produce tiered units in §09–19 (and occasionally §20 analytic-phil units). Match the quality of the existing pattern-setter unit at:

```
content/09-classical-mech/04-hamiltonian/09.04.02-hamiltons-equations.md
```

This is your **gold reference unit**. Read it at least once before producing anything. Match its tier-marker convention (`## Heading [Beginner]`, `[Intermediate+]`, `[Master]`), frontmatter shape, references format, and prose register.

**Hard target.** Each unit you produce must pass `python3 scripts/validate_unit.py <path>` at **28/28 checks**. Anything less is incomplete.

---

## §2 What a unit is

A unit is one markdown file at:

```
content/<section>/<chapter>/<unit-id>-<slug>.md
```

Examples:

```
content/09-classical-mech/04-hamiltonian/09.04.02-hamiltons-equations.md
content/14-genchem-pchem/05-bonding-mo/14.05.02-mo-theory-homonuclear-diatomics.md
content/17-mol-cell-bio/09-cellular-neuroscience/17.09.02-action-potential-ionic-basis.md
```

The `<unit-id>` is a dotted triple `section.chapter.ordinal` (e.g. `09.04.02`). The `<slug>` is kebab-case from the title.

A unit contains:

1. **YAML frontmatter** with metadata (see §3).
2. **Beginner tier sections** (`[Beginner]` markers) — intuition + visual + worked example + check-your-understanding.
3. **Intermediate tier sections** (`[Intermediate+]` markers) — formal definition + key theorem with proof + exercises + Lean formalization.
4. **Master tier sections** (`[Master]` markers) — advanced results + connections + historical/philosophical context + bibliography.

Each tier has prose word-count targets (see §4 templates), structure rules (see §5), and forbidden patterns (see §6).

---

## §3 Frontmatter template (COPY-PASTE this, then customize)

Every unit's frontmatter follows this exact shape. Fields with `<...>` are placeholders.

```yaml
---
id: <NN.NN.NN>
title: <Human-readable title>
slug: <kebab-case-slug>
section: <kebab-case section name, must match parent directory after strip-prefix>
chapter: <kebab-case chapter name>
concept_catalog_id: <domain>.<slug>   # PROPOSE in your report; consolidator adds to catalog
prerequisites:
  - <prereq-id>   # comment: what this prereq is for
  # ...more prereqs
pending_prereqs: <true | false>   # true if any prereq is not a shipped unit
successors: []   # leave empty; Integrator populates
tier_anchors:
  beginner: "<Anchor citation for Beginner tier>"
  intermediate: "<Anchor citation for Intermediate tier>"
  master: "<Anchor citation for Master tier>"
tiers_present: [beginner, intermediate, master]   # subset; usually all three
references:
  - source: pending+pointer
    pointer: "<Author Year, Title>; pointer to NEED_TO_SOURCE.md once added"
  # ...more refs; AT LEAST ONE NON-PENDING reference required
  # If reference/<source>/<path> file exists, use:
  # - source: <source-name>
  #   path: "<relative path within reference/source/>"
  #   locator: "<chapter/section/page>"
lean_module: Codex.<Section>.<Chapter>.<Slug>   # only if lean_status != none
lean_status: none   # almost always 'none' for §09+ units (Mathlib gap)
lean_mathlib_gap: "<one-sentence description of what Mathlib lacks>"
human_reviewer: "Tyler (pending external <subject> reviewer per <PLAN_NAME> §6)"
estimated_time:
  beginner: <NNm>
  intermediate: <NNm>
  master: <NNm>
status: draft   # ALWAYS 'draft' — never set to 'shipped' or 'review'; Tyler does that
produced_by: claude-<model>-runbook-Wave-<N>
reviewed_by: []
hooks_out:
  - target: <NN.NN.NN or NN.essays.NN>
    kind: proposed   # ALWAYS 'proposed', never 'confirmed' — confirmation requires receiving-domain reviewer
    why: "<≥30-char justification for why this hook is meaningful>"
  # ...more hooks; AT LEAST ONE hooks_out entry per unit (see §6 rules)
---
```

**Reference-handling rule:** the validator wants ≥1 reference, and at least ONE must be non-pending. If the project's `reference/` archive has nothing relevant (typical for chem/bio), find ONE existing source — usually `reference/tong/` has math/physics notes that match. Use it as your one non-pending citation; mark everything else `pending+pointer`. If you can't find ONE real source, write `source: TODO_REF` for one entry — that's accepted by the validator as a non-pending placeholder, same as existing pilot units.

**Cross-domain prereq rule:** if a prereq is from another section (e.g. physics unit citing math, or chem unit citing physics), set `pending_prereqs: true` and the consolidator will register the edge in `manifests/deps.json`. If the prereq is in another domain but **shipped**, you don't need `pending_prereqs: true` — but check by running validator after writing. If unresolved, set pending.

---

## §4 Section structure inside the unit body

Match this exact section ordering. The validator checks for section markers per tier.

```markdown
## Intuition [Beginner]
600–900 words. Plain language. Why this concept exists. No formal notation.
Avoid: \nabla, \otimes, \sum, \int, \prod, \partial, \forall, \exists.
Avoid: "obviously", "clearly", "easy to see", "trivial", "as we will see".

## Visual [Beginner]
Either: reference to a real image/diagram in reference/, OR a "described visual"
paragraph (one paragraph describing what a visualization would show). The validator
checks for SOME visual reference — `![alt](path)` syntax or `*Figure:*` prose works.

## Worked example [Beginner]
A concrete computation or worked scenario with specific numbers. End with "what
this tells us." 200–400 words.

## Check your understanding [Beginner]
2–4 questions. Multiple-choice, true/false, one-number numeric. Each has answer
+ short explanation.

## Formal definition [Intermediate+]
The definition as it appears in the Intermediate anchor textbook. Notation
introduced is project-level (consolidator adds to NOTATION.md). 400–800 words.

## Key theorem with proof [Intermediate+]
One signature theorem. Full proof. Intermediate-anchor quality. 400–700 words.

## Exercises [Intermediate+]
8–12 exercises total. Distribution: ≥2 easy, ≥3 medium, ≥2 hard. Each exercise
clearly stated with optional hints; brief solution sketches for medium/hard.
This section is the bulk word-count of the Intermediate tier.

## Lean formalization [Intermediate+]
ONE short paragraph (~100–200 words). If `lean_status: none`, state explicitly
that Mathlib does not cover this and what the gap is. If `lean_status: partial`,
name the Mathlib lemmas that exist plus what's missing.

## Advanced results [Master]
800–1500 words. Master-level depth. Theorems beyond the central one. Connection
to research-front material. Forbid: "trivial" anywhere; do not use the
counterexamples-to-common-slips subsection at Master (Intermediate only).

## Connections [Master]
List unit IDs this unit links to with one-line justification per. Use unit-ref
syntax `[NN.NN.NN]` inline. 200–500 words.

## Historical & philosophical context [Master]
300–500 words. Brief history of the concept, originator papers, key intellectual
moves. Cites primary literature (Bohr, Einstein, Hamilton, etc. depending on
topic). No valedictory closing language ("This beautiful result...").

## Bibliography [Master]
~10–20 references. Primary literature + anchor textbooks. Mix of pending+pointer
and any resolved sources you found in `reference/`.
```

---

## §5 Step-by-step per unit

Follow these steps for EACH unit you produce. Don't skip or reorder. **Step 5.5 is critical and is the most common skip — don't.**

1. **Pick the next unit from §7 queue.** Look at the queue table, find the first unit with status `TODO`. Note its ID, title, target chapter directory. **Take the FIRST TODO in pedagogical order** — see §7.0 dependency reasoning. Don't cherry-pick.

2. **Read the per-domain plan section for this chapter.** For a §09–13 unit, read `docs/plans/PHYSICS_PLAN.md` §3.X for the relevant branch. For §14–16, read `docs/plans/CHEMISTRY_PLAN.md` §3.X. For §17–19, `docs/plans/BIOLOGY_PLAN.md` §3.X. Read ONLY the relevant subsection (`§3.1` for §09, `§3.4` for §12, etc.). Don't re-read the whole plan.

3. **Check the gold reference unit.** Open `content/09-classical-mech/04-hamiltonian/09.04.02-hamiltons-equations.md`. Skim its frontmatter and the structure of its tier sections. This is your model. If you've already done one unit this session and remember the pattern, you can skip this step.

4. **Check existing siblings.** Run:
   ```bash
   ls content/<section>/ 2>/dev/null
   ls content/<section>/<chapter>/ 2>/dev/null
   ```
   If any siblings exist, peek at one to confirm sub-conventions.

5. **Choose prereqs.** From the plan's prereq cone for this chapter, identify:
   - Already-shipped math units (search `content/00-` through `content/08-` directories)
   - Already-shipped Wave 1 physics units (`09.04.02`, `10.04.01`, `11.04.01`, `12.01.02`, `13.05.01`)
   - Already-shipped chem/bio Wave 1 units (see §7 queue header)
   - Pending units (anything not yet shipped — set `pending_prereqs: true`)

5.5. **Run the §5.5 quality-discipline gate.** Answer the 7 pre-write questions in §5.5 in your scratch / report. If you can't answer any of them, you're not ready to write — go back to step 2 (re-read plan) or step 4 (read sibling) for more context. **This is the single highest-leverage step to skip — don't.** Generic unit content is the #1 quality failure of past production agents.

6. **Write the unit file.** Create the directory if it doesn't exist. Write the full unit content. Follow §3 frontmatter and §4 section structure exactly. Match the gold reference unit's voice. While writing, keep the §5.5 anti-filler rules in front of you.

7. **Validate.** Run:
   ```bash
   cd "/Users/tyler/Documents/Code Projects/B.I.B.L.E"
   python3 scripts/validate_unit.py <path-to-your-new-unit>
   ```
   Expect 26/28 or 27/28 on first run. The two "expected" failures are:
   - `concept_catalog_id exists in CONCEPT_CATALOG.md` — your catalog ID doesn't exist there yet (consolidator handles)
   - `all prerequisites resolve OR are pending-registered` — pending prereqs aren't in `manifests/deps.json` yet (consolidator handles)

   If ANY OTHER check fails (e.g. forbidden phrasings, paragraph too long, missing section marker), **fix your file** before reporting. Iterate until the only failures are those two expected ones.

8. **Mark queue entry as ✓ DRAFT.** In your report, name the queue table row you just processed.

9. **Report back** in the format in §11.

---

## §5.5 Quality discipline — THINK BEFORE YOU WRITE

A unit that passes the validator can still be low-quality. The validator catches structure, not depth. Tyler's review pass at the end *will* reject a unit that's structurally correct but pedagogically empty.

**Before you write a single line of prose**, answer these seven questions in your head (and put 1–2 sentences each in your scratch / report so Tyler can audit your thinking):

1. **Why does this concept exist?** What problem does it solve that older concepts didn't? If you can't answer in one sentence, you don't understand it well enough to write the unit yet — read more from the anchor texts.
2. **What's the one-sentence summary of this unit?** Write it down. Every paragraph in the unit should be in service of explaining or evidencing this sentence. If a paragraph isn't, cut it.
3. **What's the central worked example?** Pick BEFORE writing. Use real numbers, a named physical system, or a specific molecule/organism. "An object of mass m" is filler; "A 70 kg person on a bicycle" is concrete. Filler examples are a leading failure mode.
4. **What's the key theorem / mechanism / law?** Name it explicitly. The Intermediate-tier `## Key theorem with proof` section must center on it. If there's no central theorem (e.g., a pure-mechanism unit), the analogue is "the central derivation" or "the central mechanism statement."
5. **What are the 3 most common misconceptions about this concept?** These become the `### Counterexamples to common slips` subsection at Intermediate tier. If you can't think of three, you're working from a textbook rephrasing rather than from understanding what beginners actually get wrong.
6. **What are the genuine cross-domain hooks?** Don't make them up to satisfy the validator. A hook is real only if you can complete this sentence: "This unit's [specific claim] is what [other-domain unit] actually relies on when it talks about [specific phenomenon]." If you can't, leave that hook out.
7. **What's the historical context for the Master tier?** Identify ≥1 originator paper (Hodgkin-Huxley 1952, Hamilton 1834, Schwarzschild 1916, etc.) with the year. The Master tier's `## Historical & philosophical context` section must cite primary literature, not just textbooks.

### Anti-filler rules

These are how units fail quality even when they pass the validator. **Do not violate these**:

- **No filler paragraphs.** Every paragraph must do work — define, demonstrate, contrast, contextualize, or transition. A paragraph that just rephrases the previous one is filler. Cut it.
- **No symbolic theater.** Don't use `\mathcal{H}`, `\mathfrak{g}`, `\nabla \cdot`, or other dressed notation unless it earns its keep. If the same idea reads more clearly in prose, write prose.
- **Concrete > abstract** at every tier. Beginner: "70 kg on a bicycle" beats "an object of mass m." Intermediate: "the H₂ molecule's σ_g MO" beats "a homonuclear diatomic." Master: "Hodgkin & Huxley's 1952 squid axon recordings" beats "experimental measurements."
- **Anchor citations name a specific chapter, not just a book.** "Griffiths *Introduction to Electrodynamics* Ch. 7 §7.2" beats "Griffiths." If you don't know the specific chapter, look it up before claiming an anchor.
- **Cross-references add value or don't appear.** Don't link `[03.09.02]` from a §17 unit unless you'd actually expect a reader to *go read it* and benefit. The validator doesn't gate this; reviewers do.
- **Exercises have answers or hints**, not just question text. Easy exercises need an answer; medium/hard need at least a hint and a one-line solution sketch. An exercise with no answer is half a question.
- **Visual sections describe SOMETHING.** A `*Figure: A schematic*` line with no detail is filler. Describe what the schematic *shows* — what's labeled, what's varying, what the reader should notice.

### Quality bar from existing shipped Wave 1 units

If you're unsure whether your draft is good enough, compare against:

- `content/09-classical-mech/04-hamiltonian/09.04.02-hamiltons-equations.md` — physics gold standard
- `content/03-modern-geometry/09-spin-geometry/02-clifford-algebra.md` — math/border gold standard
- `content/17-mol-cell-bio/09-cellular-neuroscience/17.09.02-action-potential-ionic-basis.md` — bio gold standard (heaviest cross-domain prereqs)

Your unit should feel like these in voice, density, and care. If it feels thinner, it's not done.

### One concrete trigger: STOP if any of these is true

Pause writing and ask the orchestrator if:

- You can't name a specific anchor chapter for any tier
- Your worked example is generic ("for a system X with parameters a, b, c…")
- You can't think of any cross-domain hook that survives the "completes this sentence" test in question 6
- The validator passes but you'd be embarrassed if a domain expert read this

Better to halt and clarify than to ship a low-quality draft that gets rejected at human review.

---

## §6 Race-safety rules (CRITICAL — violations break parallel agents)

You are one of several agents that may be running concurrently. To avoid race conditions:

- ✅ **DO** create/modify your unit file at `content/<section>/<chapter>/<id>-<slug>.md`.
- ❌ **DO NOT** modify `_meta/NOTATION.md` — list proposed additions in your report.
- ❌ **DO NOT** modify `docs/catalogs/CONCEPT_CATALOG.md` — list proposed entry in your report.
- ❌ **DO NOT** modify `manifests/deps.json` — list proposed edges in your report.
- ❌ **DO NOT** modify `manifests/connections.json` — DO NOT run validator with `--emit-connections`.
- ❌ **DO NOT** modify any other unit file in `content/` (except your new one).
- ❌ **DO NOT** modify any of the 5 plans in `docs/plans/`.
- ❌ **DO NOT** modify `OVERVIEW.md`, `UNIT_SPEC.md`, `QUALITY_RUBRIC.md`, or scripts.

A separate consolidation pass (run by the orchestrator after your batch) merges proposed NOTATION/CATALOG/deps additions and emits connections rows.

---

## §7 Work queue

Each row is one unit. **The order matters — it's the pedagogical learning order, not just an arbitrary list.** Process top-to-bottom within each domain. If you skip ahead, note why in your report.

Status legend: `TODO` (not started), `WIP` (an agent is producing now), `✓ DRAFT` (file exists, status=draft, awaits Tyler review), `SHIPPED` (Tyler reviewed).

### §7.0 Why this order — dependency reasoning per branch

**Physics §09 Classical Mechanics — strict spine** (later concepts genuinely require earlier ones; do not skip):

```
09.01.01 Kinematics  →  09.01.02 Newton's laws  →  09.01.03 Conservation laws
                                                        ↓
                              09.02.01 Action principle (also requires math §02 calculus of variations)
                                                        ↓
                                            09.02.02 Euler-Lagrange
                                                ↓                    ↘
                              09.03.01 Noether's theorem    09.04.01 Legendre transform
                              (CANONICAL — §10, §12, §13 cross-ref)              ↓
                                                                    09.04.02 Hamilton's eq ✓ SHIPPED
                                                                                ↓
                                                                   09.05.01 Canonical transformations
                                                                                ↓
                                                                   09.05.02 Hamilton-Jacobi
                                                                                ↓
                                                                   09.06.01 Action-angle variables
                                                                                ↓
                                                                   09.08.01 KAM + chaos
```

**Physics §10 EM+SR — two parallel sub-spines that merge**:

```
EM sub-spine:     10.01.01 Coulomb/Gauss → 10.01.02 Laplace/BVPs → 10.02.01 Biot-Savart/Ampère
                                                                              ↓
                                                              10.03.01 Faraday → 10.04.01 Maxwell-in-forms ✓ SHIPPED
                                                                              ↓
                                                              10.04.02 EM waves → 10.07.01 Radiation
SR sub-spine:     10.05.01 Lorentz transformations → 10.05.02 Relativistic dynamics
                                                              ↓
                                              10.06.01 Faraday tensor (merges EM + SR sub-spines)
```

**Physics §11 Stat Mech — entry-tolerant DAG** (multiple valid starts):

```
Entry: 11.01.01 Thermo laws  OR  11.02.01 MB distribution
                ↓                          ↓
        11.01.02 Potentials       11.03.01 Microcanonical
                ↓                          ↓
                       11.04.01 Partition function ✓ SHIPPED  ← (these all converge)
                                       ↓
                                  11.05.01 / 11.05.02 quantum statistics
                                       ↓
                              11.06.01 Ising → 11.07.01 RG (physics-side; cross-ref §08 RG)
```

**Physics §12 QM+QFT — long spine; produce in order, don't skip**:

```
12.01.01 Wave-particle duality → 12.01.02 Stern-Gerlach ✓ SHIPPED → 12.02.01 Hilbert formalism
                                                                              ↓
                                                                      12.02.02 Operators
                                                                              ↓
                                                                      12.03.01 Pictures
                                                                              ↓
                                                       12.04.01 Particle in box → 12.04.02 Harmonic oscillator
                                                                              ↓
                                                                12.05.01 Angular momentum (uses math §07)
                                                                              ↓
                                                                      12.06.01 Hydrogen atom
                                                                              ↓
                                                              12.07.01 Perturbation theory
                                                                              ↓
                                                              12.10.01 Path integrals → 12.11.01 Dirac eq
```

**Physics §13 GR+Cosmology — strict spine** (each requires prior):

```
13.01.01 Equivalence principle → 13.02.01 Tensors → 13.02.02 Geodesics → 13.03.01 Riemann curvature
                                                                                        ↓
                                              13.04.01 Einstein FE ← (math §03 Riemannian geom)
                                                                                        ↓
                                                              13.05.01 Schwarzschild ✓ SHIPPED → 13.05.02 Orbits
                                                                                        ↓
                                                              13.07.01 Linearized GR + GW → 13.08.01 FLRW cosmology
```

**Chemistry §14–16 — soft DAG with multiple entries**:

```
§14 spine: 14.01.01 Atomic structure → 14.02.01 Lewis/VSEPR → 14.02.02 Hybridization
                                                                       ↓
                                                              14.05.02 MO theory ✓ SHIPPED (Wave 1 jumped ahead)
14.04.01 H atom QM (needs §12.06.01) — parallel entry from physics side
14.06.01 Thermo (entry-tolerant) → 14.08.01 Kinetics → 14.10.01 Acid-base
14.12.01 Spectroscopy (needs §10.04 EM + §12 QM)

§15: 15.01.01 Structure/stereochem → 15.02.01 Functional groups → 15.03.01 Acid-base organic
                                                                            ↓
                                                              15.04.02 SN1/SN2 ✓ SHIPPED (Wave 1 jumped ahead)
                                                                            ↓
                                              15.05.01 Alkene addition → 15.06.01 Aromatic → 15.07.01 Carbonyl
                                                                            ↓
                                                              15.10.01 Retrosynthesis (needs many priors)
15.12–14 biomolecules — needs structural priors

§16: 16.01.01 Periodic trends → 16.02.01 Symmetry/group theory (uses math §07)
                                                              ↓
                                              16.03.01 Crystal field fundamentals → 16.03.02 ✓ SHIPPED (Wave 1)
                                                              ↓
                                              16.04.01 Coordination → 16.05.01 Organometallic
                                                              ↓
                                                      16.06.01 Bioinorganic (hooks bio §17)
```

**Biology §17–19 — three weakly-connected trees** (per BIOLOGY_PLAN §3):

```
§17 mol-cell — strict spine within tree:
17.01.01 Biomolecules → 17.02.01 Membranes → 17.02.02 Transport → 17.03.01 Organelles
                                                                          ↓
                                                  17.03.02 Cytoskeleton → 17.04.01 Glycolysis
                                                                          ↓
                                              17.04.02 OxPhos → 17.04.03 Photosynthesis
                                                                          ↓
                                              17.05.01 DNA replication → 17.05.02 Transcription → 17.05.03 Translation
                                                                          ↓
                                                  17.06.01 Mutation/repair → 17.07.01 Signaling
                                                                          ↓
                                                          17.09.01 Resting potential → 17.09.02 Action potential ✓ SHIPPED
                                                                          ↓
                                                                  17.10.01 Immunology

§18 organismal — entry-tolerant (multiple entry points):
Standard order is anatomical/physiological progression, but each chapter can be entered independently
once §17 cellular substrate is roughly in place:
18.02.01 Cardiovascular  |  18.03.01 Respiratory  |  18.04.01 Muscle physiology → 18.04.02 ✓ SHIPPED
18.05.01 Nervous system  |  18.07.01 Endocrine  |  18.08.01 Renal  |  18.11.01 Development

§19 eco-evo — strict spine within tree:
19.01.01 Mendelian → 19.02.01 Hardy-Weinberg ✓ SHIPPED → 19.03.01 Natural selection
                                                                ↓
                                              19.03.02 Sexual + 19.03.03 Kin selection
                                                                ↓
                                              19.04.01 Drift → 19.05.01 Quantitative genetics
                                                                ↓
                                              19.06.01 Speciation → 19.07.01 Phylogenetics
                                                                ↓
                                              19.09.01 Population ecology → 19.10.01 Community
                                                                ↓
                                                          19.15.01 Origin of life (synthesizes all priors)
```

### §7.0.1 If you're tempted to skip ahead

Don't. The order is dependency-correct. Earlier units in a spine give later units the concepts, notation, and worked-example precedents they need. A §12.06.01 Hydrogen atom unit written before §12.05.01 Angular momentum will end up restating SU(2) reasoning that the §12.05 unit was supposed to own — and creating duplication that consolidators have to clean up. **Skip only if** the orchestrator explicitly assigns out-of-order, OR a prereq unit is genuinely blocked (e.g., requires a math unit that doesn't exist) and the dependent unit can ship with `pending_prereqs: true` legitimately.

### §7.0.2 Cross-domain ordering note

Some units across domains have implicit dependencies:

- **Chem §14.04.01 Hydrogen QM** wants physics `§12.06.01` Hydrogen atom (which doesn't exist yet). Order: produce `§12.06.01` first, OR ship `§14.04.01` with `pending_prereqs: true` and have it cite `§12.06.01` as pending.
- **Bio §17.04.02 OxPhos** wants chem `§16.06.01` Bioinorganic (cytochromes, Fe-S clusters). Same handling.
- **Bio §17.05.01 DNA replication** wants chem `§15.13.01` Nucleic acid chemistry.
- **Bio §17.09.01 Resting potential** wants physics `§11.04.01` ✓ SHIPPED (Nernst from canonical ensemble) — good.

When the cross-domain prereq is shipped, cite it directly. When it isn't, set `pending_prereqs: true` and note it in your report.

---

**Already shipped Wave 1 (reference these as cross-domain prereqs):**

| ID | Title | Domain |
|---|---|---|
| `09.04.02` | Hamilton's equations | physics §09 |
| `10.04.01` | Maxwell in differential form | physics §10 |
| `11.04.01` | Canonical ensemble | physics §11 |
| `12.01.02` | Stern-Gerlach + spin-1/2 | physics §12 |
| `13.05.01` | Schwarzschild solution | physics §13 |
| `14.05.02` | MO theory for homonuclear diatomics | chem §14 |
| `15.04.02` | SN1 vs SN2 | chem §15 |
| `16.03.02` | Crystal field splitting in octahedral complexes | chem §16 |
| `17.09.02` | Action potential — ionic basis | bio §17 |
| `18.04.02` | Muscle contraction — actin-myosin | bio §18 |
| `19.02.01` | Hardy-Weinberg equilibrium | bio §19 |
| `20.03.01` | Measurement problem in QM | phil §20.03 |
| `20.05.02` | Unit of selection | phil §20.05 |

**Wave 2 queue — physics §09–13:**

| Status | ID | Title | Chapter dir | Primary anchor |
|---|---|---|---|---|
| TODO | `09.01.01` | Kinematics — position, velocity, acceleration | `09-classical-mech/01-newtonian/` | Taylor Ch. 1; Susskind TM:CM Lec 1–2 |
| TODO | `09.01.02` | Newton's laws of motion | `09-classical-mech/01-newtonian/` | Taylor Ch. 1–2 |
| TODO | `09.01.03` | Conservation laws — energy / momentum / angular momentum | `09-classical-mech/01-newtonian/` | Taylor Ch. 4 |
| TODO | `09.02.01` | The action principle and variational calculus | `09-classical-mech/02-lagrangian/` | Taylor Ch. 6 |
| TODO | `09.02.02` | Euler-Lagrange equations | `09-classical-mech/02-lagrangian/` | Taylor Ch. 7 |
| TODO | `09.03.01` | Noether's theorem (CANONICAL home; other branches cross-ref) | `09-classical-mech/03-symmetries-noether/` | Arnold §20; Goldstein Ch. 2.6 |
| TODO | `09.04.01` | Legendre transform from Lagrangian to Hamiltonian | `09-classical-mech/04-hamiltonian/` | Taylor Ch. 13.1 |
| TODO | `09.05.01` | Canonical transformations | `09-classical-mech/05-canonical/` | Goldstein Ch. 9 |
| TODO | `09.05.02` | Hamilton-Jacobi equation | `09-classical-mech/05-canonical/` | Goldstein Ch. 10 |
| TODO | `09.06.01` | Action-angle variables | `09-classical-mech/06-integrable/` | Arnold §50 |
| TODO | `09.08.01` | KAM theorem and chaos | `09-classical-mech/08-chaos/` | Arnold §52 |
| TODO | `10.01.01` | Coulomb's law and Gauss's law | `10-em-sr/01-electrostatics/` | Griffiths Ch. 2 |
| TODO | `10.01.02` | Laplace equation and boundary value problems | `10-em-sr/01-electrostatics/` | Griffiths Ch. 3; Jackson Ch. 2 |
| TODO | `10.02.01` | Biot-Savart law and Ampère's law | `10-em-sr/02-magnetostatics/` | Griffiths Ch. 5 |
| TODO | `10.03.01` | Faraday's law and induction | `10-em-sr/03-electrodynamics/` | Griffiths Ch. 7 |
| TODO | `10.04.02` | EM waves and the wave equation | `10-em-sr/04-maxwell-fields/` | Griffiths Ch. 9 |
| TODO | `10.05.01` | Special relativity — postulates and Lorentz transformations | `10-em-sr/05-special-relativity/` | Griffiths Ch. 12; Susskind & Friedman |
| TODO | `10.05.02` | Relativistic kinematics and dynamics | `10-em-sr/05-special-relativity/` | Griffiths Ch. 12; Taylor & Wheeler |
| TODO | `10.06.01` | Covariant electrodynamics — Faraday tensor | `10-em-sr/06-covariant-em/` | Jackson Ch. 11 |
| TODO | `10.07.01` | Radiation from accelerating charges; Larmor formula | `10-em-sr/07-radiation/` | Jackson Ch. 14 |
| TODO | `11.01.01` | First and second laws of thermodynamics | `11-stat-mech-physics/01-thermodynamics/` | Schroeder Ch. 1–3 |
| TODO | `11.01.02` | Thermodynamic potentials and Legendre transforms | `11-stat-mech-physics/01-thermodynamics/` | Schroeder Ch. 5; Callen |
| TODO | `11.02.01` | Maxwell-Boltzmann distribution from kinetic theory | `11-stat-mech-physics/02-kinetic-theory/` | Schroeder Ch. 6 |
| TODO | `11.03.01` | Microcanonical ensemble | `11-stat-mech-physics/03-ensembles/` | Reichl Ch. 2 |
| TODO | `11.05.01` | Bose-Einstein distribution | `11-stat-mech-physics/05-quantum-stats/` | Schroeder Ch. 7 |
| TODO | `11.05.02` | Fermi-Dirac distribution and electron gas | `11-stat-mech-physics/05-quantum-stats/` | Schroeder Ch. 7; Landau-Lifshitz |
| TODO | `11.06.01` | Ising model and phase transitions | `11-stat-mech-physics/06-phase-transitions/` | Reichl Ch. 4 |
| TODO | `11.07.01` | Critical phenomena and renormalization group | `11-stat-mech-physics/07-rg/` | Goldenfeld; cross-cites §08 RG |
| TODO | `12.01.01` | Wave-particle duality and the double-slit | `12-quantum/01-foundations/` | Feynman III Ch. 1; Susskind QM |
| TODO | `12.02.01` | Hilbert spaces, kets, and bras | `12-quantum/02-hilbert-formalism/` | Sakurai Ch. 1 |
| TODO | `12.02.02` | Operators, observables, and Hermiticity | `12-quantum/02-hilbert-formalism/` | Sakurai Ch. 1 |
| TODO | `12.03.01` | Schrödinger and Heisenberg pictures | `12-quantum/03-time-evolution/` | Sakurai Ch. 2 |
| TODO | `12.04.01` | Particle in a box | `12-quantum/04-one-dim-problems/` | Griffiths QM Ch. 2 |
| TODO | `12.04.02` | Quantum harmonic oscillator | `12-quantum/04-one-dim-problems/` | Griffiths QM Ch. 2; Sakurai Ch. 2 |
| TODO | `12.05.01` | Angular momentum operators and SU(2) reps | `12-quantum/05-angular-momentum/` | Sakurai Ch. 3 |
| TODO | `12.06.01` | Hydrogen atom — bound states | `12-quantum/06-central-force/` | Griffiths QM Ch. 4; Sakurai Ch. 3 |
| TODO | `12.07.01` | Time-independent perturbation theory | `12-quantum/07-perturbation/` | Sakurai Ch. 5 |
| TODO | `12.10.01` | Path integral formulation of QM | `12-quantum/10-path-integral/` | Feynman-Hibbs; Sakurai Ch. 2 |
| TODO | `12.11.01` | Dirac equation and relativistic spin | `12-quantum/11-relativistic-qm/` | Peskin-Schroeder Ch. 3 |
| TODO | `13.01.01` | The equivalence principle | `13-gr-cosmology/01-equivalence/` | Schutz Ch. 5; Hartle Ch. 6 |
| TODO | `13.02.01` | Tensors on smooth manifolds | `13-gr-cosmology/02-manifold-formalism/` | Schutz Ch. 3; Carroll Ch. 2 |
| TODO | `13.02.02` | Geodesics and parallel transport | `13-gr-cosmology/02-manifold-formalism/` | Carroll Ch. 3 |
| TODO | `13.03.01` | Riemann curvature tensor | `13-gr-cosmology/03-curvature/` | Carroll Ch. 3 |
| TODO | `13.04.01` | Einstein field equations | `13-gr-cosmology/04-einstein-eq/` | Wald Ch. 4; Carroll Ch. 4 |
| TODO | `13.05.02` | Orbits in Schwarzschild geometry | `13-gr-cosmology/05-schwarzschild/` | Schutz Ch. 11; Carroll Ch. 5 |
| TODO | `13.07.01` | Linearized GR and gravitational waves | `13-gr-cosmology/07-gravitational-waves/` | Schutz Ch. 9 |
| TODO | `13.08.01` | FLRW cosmology and Friedmann equations | `13-gr-cosmology/08-cosmology/` | Carroll Ch. 8; Hartle Ch. 18 |

**Wave 2 queue — chemistry §14–16:**

| Status | ID | Title | Chapter dir | Primary anchor |
|---|---|---|---|---|
| TODO | `14.01.01` | Atomic structure and electron configurations | `14-genchem-pchem/01-atomic-structure/` | Tro Ch. 7; Atkins Ch. 8 |
| TODO | `14.02.01` | Lewis structures and VSEPR | `14-genchem-pchem/02-bonding-lewis/` | Tro Ch. 9; Atkins Ch. 2 |
| TODO | `14.02.02` | Hybridization and valence bond | `14-genchem-pchem/02-bonding-lewis/` | Tro Ch. 10; Clayden Ch. 4 |
| TODO | `14.03.01` | Stoichiometry and gas laws | `14-genchem-pchem/03-stoichiometry/` | Tro Ch. 4–5 |
| TODO | `14.04.01` | Hydrogen atom quantum chemistry | `14-genchem-pchem/04-quantum-chem/` | McQuarrie Ch. 6; Levine Ch. 6 |
| TODO | `14.06.01` | Chemical thermodynamics — free energies and equilibrium | `14-genchem-pchem/06-thermo/` | Atkins Ch. 3 |
| TODO | `14.08.01` | Chemical kinetics — rate laws and Arrhenius | `14-genchem-pchem/08-kinetics/` | Atkins Ch. 22 |
| TODO | `14.10.01` | Acid-base chemistry — Brønsted, Lewis, pKa | `14-genchem-pchem/10-acid-base/` | Tro Ch. 16; Clayden Ch. 8 |
| TODO | `14.11.01` | Electrochemistry — Nernst equation and electrochemical cells | `14-genchem-pchem/11-redox-electrochem/` | Atkins Ch. 7 |
| TODO | `14.12.01` | UV-Vis, IR, NMR fundamentals | `14-genchem-pchem/12-spectroscopy/` | Atkins Ch. 12–14 |
| TODO | `15.01.01` | Structure of organic molecules — stereochemistry | `15-orgchem/01-structure/` | Clayden Ch. 14–16 |
| TODO | `15.02.01` | Functional groups and nomenclature | `15-orgchem/02-functional-groups/` | Clayden Ch. 2 |
| TODO | `15.03.01` | Acids and bases in organic chemistry | `15-orgchem/03-acid-base-organic/` | Clayden Ch. 8 |
| TODO | `15.05.01` | Electrophilic addition to alkenes | `15-orgchem/05-addition/` | Clayden Ch. 19 |
| TODO | `15.06.01` | Aromatic chemistry — EAS, Hückel | `15-orgchem/06-aromatic/` | Clayden Ch. 22 |
| TODO | `15.07.01` | Carbonyl chemistry — nucleophilic addition | `15-orgchem/07-carbonyl/` | Clayden Ch. 6, 9 |
| TODO | `15.10.01` | Retrosynthetic analysis | `15-orgchem/10-retrosynthesis/` | Clayden Ch. 28 |
| TODO | `15.11.01` | NMR spectroscopy of organic molecules | `15-orgchem/11-spectroscopy-organic/` | Clayden Ch. 13 |
| TODO | `15.12.01` | Amino acids and protein chemistry | `15-orgchem/12-biomolecules-aa-protein/` | Clayden Ch. 42 |
| TODO | `15.13.01` | Nucleic acid chemistry | `15-orgchem/13-biomolecules-na/` | Clayden Ch. 42; Voet |
| TODO | `15.14.01` | Enzyme mechanism (chem-side; bio context in §17) | `15-orgchem/14-enzyme-mechanism/` | Carey-Sundberg; Voet |
| TODO | `16.01.01` | Periodic trends quantified | `16-inorgchem/01-periodic-trends/` | Housecroft Ch. 1 |
| TODO | `16.02.01` | Symmetry and group theory in chemistry | `16-inorgchem/02-symmetry-group-theory/` | Cotton; Housecroft Ch. 4 |
| TODO | `16.03.01` | Crystal field theory — fundamentals | `16-inorgchem/03-crystal-field/` | Housecroft Ch. 19 |
| TODO | `16.04.01` | Coordination chemistry — geometries and isomerism | `16-inorgchem/04-coordination/` | Housecroft Ch. 7, 19 |
| TODO | `16.05.01` | Organometallic chemistry — 16/18-electron rules | `16-inorgchem/05-organometallic/` | Crabtree Ch. 1–4 |
| TODO | `16.06.01` | Bioinorganic chemistry — metalloenzymes | `16-inorgchem/06-bioinorganic/` | Lippard-Berg |
| TODO | `16.07.01` | Solid-state chemistry — ionic, covalent, metallic solids | `16-inorgchem/07-solid-state/` | Housecroft Ch. 6 |

**Wave 2 queue — biology §17–19:**

| Status | ID | Title | Chapter dir | Primary anchor |
|---|---|---|---|---|
| TODO | `17.01.01` | Biomolecules in cells — overview | `17-mol-cell-bio/01-biomolecules/` | Alberts MBoC Ch. 2 |
| TODO | `17.02.01` | Cell membranes — structure | `17-mol-cell-bio/02-membranes/` | Alberts MBoC Ch. 10 |
| TODO | `17.02.02` | Membrane transport — passive and active | `17-mol-cell-bio/02-membranes/` | Alberts MBoC Ch. 11 |
| TODO | `17.03.01` | Cellular organization — organelles | `17-mol-cell-bio/03-cell-organization/` | Alberts MBoC Ch. 12–13 |
| TODO | `17.03.02` | Cytoskeleton and contractile proteins | `17-mol-cell-bio/03-cell-organization/` | Alberts MBoC Ch. 16 |
| TODO | `17.04.01` | Cellular respiration — glycolysis and citric acid cycle | `17-mol-cell-bio/04-energy-metabolism/` | Alberts MBoC Ch. 14 |
| TODO | `17.04.02` | Oxidative phosphorylation and ATP synthesis | `17-mol-cell-bio/04-energy-metabolism/` | Alberts MBoC Ch. 14 |
| TODO | `17.04.03` | Photosynthesis — light and dark reactions | `17-mol-cell-bio/04-energy-metabolism/` | Alberts MBoC Ch. 14 |
| TODO | `17.05.01` | DNA replication | `17-mol-cell-bio/05-gene-expression/` | Alberts MBoC Ch. 5 |
| TODO | `17.05.02` | Transcription | `17-mol-cell-bio/05-gene-expression/` | Alberts MBoC Ch. 6 |
| TODO | `17.05.03` | Translation | `17-mol-cell-bio/05-gene-expression/` | Alberts MBoC Ch. 6 |
| TODO | `17.06.01` | Mutation and repair | `17-mol-cell-bio/06-molecular-genetics/` | Alberts MBoC Ch. 5 |
| TODO | `17.07.01` | Cell signaling — receptors and GPCRs | `17-mol-cell-bio/07-signaling/` | Alberts MBoC Ch. 15 |
| TODO | `17.08.01` | Cell cycle and mitosis | `17-mol-cell-bio/08-cell-cycle/` | Alberts MBoC Ch. 17 |
| TODO | `17.09.01` | Resting membrane potential and ion channels | `17-mol-cell-bio/09-cellular-neuroscience/` | Hille Ch. 1–2; Kandel |
| TODO | `17.10.01` | Innate immunity at the molecular level | `17-mol-cell-bio/10-immunology/` | Janeway / Alberts MBoC Ch. 24 |
| TODO | `18.02.01` | Cardiovascular physiology — the heart | `18-organismal-bio/02-cardiovascular/` | Boron-Boulpaep Ch. 21–24 |
| TODO | `18.03.01` | Respiratory physiology — gas exchange | `18-organismal-bio/03-respiratory/` | Boron-Boulpaep Ch. 26–32 |
| TODO | `18.04.01` | Skeletal muscle physiology | `18-organismal-bio/04-musculoskeletal/` | Boron-Boulpaep Ch. 9 |
| TODO | `18.05.01` | Nervous system — gross anatomy and systems | `18-organismal-bio/05-nervous-system/` | Kandel; Boron-Boulpaep Ch. 11–17 |
| TODO | `18.07.01` | Endocrine — hormones and regulation | `18-organismal-bio/07-endocrine/` | Boron-Boulpaep Ch. 47–55 |
| TODO | `18.08.01` | Renal physiology — homeostasis | `18-organismal-bio/08-renal/` | Boron-Boulpaep Ch. 33–40 |
| TODO | `18.11.01` | Embryology and morphogenesis | `18-organismal-bio/11-development/` | Gilbert *Developmental Biology* |
| TODO | `19.01.01` | Mendelian genetics — segregation and dominance | `19-eco-evo-bio/01-mendelian/` | Hartl-Clark Ch. 1; Futuyma Ch. 4 |
| TODO | `19.03.01` | Natural selection — directional, stabilizing, disruptive | `19-eco-evo-bio/03-selection/` | Futuyma Ch. 10–11 |
| TODO | `19.03.02` | Sexual selection | `19-eco-evo-bio/03-selection/` | Futuyma Ch. 12 |
| TODO | `19.03.03` | Kin selection and Hamilton's rule | `19-eco-evo-bio/03-selection/` | Futuyma Ch. 13 |
| TODO | `19.04.01` | Genetic drift | `19-eco-evo-bio/04-drift/` | Hartl-Clark Ch. 7 |
| TODO | `19.05.01` | Quantitative genetics — heritability and breeder's equation | `19-eco-evo-bio/05-quantitative-genetics/` | Walsh-Lynch Ch. 1–7 |
| TODO | `19.06.01` | Speciation — allopatric and sympatric | `19-eco-evo-bio/06-speciation/` | Futuyma Ch. 17–18 |
| TODO | `19.07.01` | Phylogenetics — tree reconstruction | `19-eco-evo-bio/07-phylogenetics/` | Felsenstein |
| TODO | `19.09.01` | Population ecology — Lotka-Volterra | `19-eco-evo-bio/09-population-ecology/` | Begon Ch. 5–6 |
| TODO | `19.10.01` | Community ecology — interactions and food webs | `19-eco-evo-bio/10-community-ecology/` | Begon Ch. 8–11 |
| TODO | `19.15.01` | Origin of life — mechanistic scenarios | `19-eco-evo-bio/15-origin-of-life/` | Maynard Smith-Szathmáry; Lane |

**Order of work.** Don't skip around. Process queue rows top-to-bottom within each domain. The domain order doesn't matter — pick whichever interests the orchestrator. The internal order WITHIN a domain matters because later units may depend on earlier ones.

---

## §8 Forbidden patterns (validator will fail)

### At every tier

These regexes are flagged by the validator. **Do not use them anywhere:**

- `\bobviously\b`, `\bclearly\b`
- `\bit is easy to see\b`
- `\bas we will see\b`
- `\btrivial(?:ly)?\b`
- `\bnow,?\s+let'?s\s+consider\b`

Any paragraph longer than **250 words** fails.

### At Beginner tier specifically

These notations are forbidden in `[Beginner]` sections:

- `\nabla`, `\otimes`, `\sum`, `\int`, `\prod`, `\partial`, `\forall`, `\exists`

Express the same concept in prose: instead of `\partial f / \partial x`, write "the rate of change of f with respect to x" or "the slope of f in the x direction." Instead of `\sum_i x_i`, write "the sum of all the x values" or describe the sum in concrete numbers.

These proof-language tokens are forbidden in `[Beginner]`:

- `Proof.`, `QED`, `∎`, `Suppose `, `It follows that`, `Hence,`, `Hence `

Any paragraph longer than **120 words** at Beginner tier fails.

Beginner tier must include at least one image or `*Figure:*` description.

### At Master tier

The Intermediate-tier subsection `### Counterexamples to common slips` is **not allowed** at Master tier. Reserve it for Intermediate only.

---

## §9 Common failure modes (from past production)

These have hit earlier agents:

1. **Forgetting `pending_prereqs: true`** when citing a unit that doesn't exist yet. Validator says "prerequisites: unresolved". Fix: set the flag to true, register pending edges in your report.

2. **`status: shipped`** by mistake. Always `status: draft` — Tyler flips to shipped after review.

3. **`kind: confirmed` on a hooks_out entry.** Always `kind: proposed`. Confirmation requires a receiving-domain reviewer attestation — which only Tyler can authorize.

4. **Beginner section uses `\partial` or `\sum`.** Rewrite in prose. The validator will catch this.

5. **Trying to use the same concept catalog id as another unit** (unless they're genuinely the same concept, e.g., math-flavor and physics-flavor versions). When in doubt, propose a new catalog id with a domain-specific prefix.

6. **Editing NOTATION.md / CATALOG.md / deps.json / connections.json.** Race-condition territory. Always defer to consolidator.

7. **Going off-topic in the Master tier.** Stay focused on the unit's primary concept. Cross-references to other units go in the `## Connections [Master]` section, not in the body of `## Advanced results`.

8. **Cross-domain prereq cycle risk:** if you're writing a §12 QM unit citing math §07 rep theory, the §07 unit should NOT cite §12 as a prerequisite. Math §07 stands alone; physics §12 cites in. Don't accidentally create a cycle.

---

## §10 How to find shipped units to cite

Use these queries:

```bash
# All shipped units in a math section:
ls "/Users/tyler/Documents/Code Projects/B.I.B.L.E/content/01-foundations/"
ls "/Users/tyler/Documents/Code Projects/B.I.B.L.E/content/02-analysis/"
ls "/Users/tyler/Documents/Code Projects/B.I.B.L.E/content/07-representation-theory/"

# Search for a specific concept by title:
find "/Users/tyler/Documents/Code Projects/B.I.B.L.E/content" -name "*.md" -exec grep -l "ODE\|differential equation" {} \;

# Verify a unit ID exists with status: shipped:
grep -l "^id: 02.12.01" "/Users/tyler/Documents/Code Projects/B.I.B.L.E/content/02-analysis/12-ode/"*.md && \
  grep "^status:" "/Users/tyler/Documents/Code Projects/B.I.B.L.E/content/02-analysis/12-ode/02.12.01-"*.md
```

If a unit ID isn't shipped, set `pending_prereqs: true` and use that ID anyway — the consolidator handles the registration.

---

## §11 Reporting back to the orchestrator

After producing each unit, report in this exact format:

```markdown
## Unit produced: <ID> <Title>

**Path:** <absolute path>

**Word counts (prose, excluding exercise asides):**
- Beginner: ~NNN
- Intermediate: ~NNN
- Master: ~NNN

**Exercises:** N total (N easy + N medium + N hard at Intermediate+; N at Beginner CYU)

**Validator output:**
```
<paste full validator output>
```

**Expected failures (2):** concept_catalog_id pending + cross-domain prereq pending. All other 26 checks pass.

**Proposed NOTATION.md additions:** <list any new symbols you used, or "none beyond existing">

**Proposed CONCEPT_CATALOG.md entry:**
```markdown
### <namespace>.<slug>
- **title**: ...
- **unit**: `<ID>`
- **prerequisites**: ...
- **tier_anchors**: ...
- **notes**: ...
```

**Proposed deps.json edges:**
```json
{"from": "<prereq-id>", "to": "<this-id>", "state": "shipped|pending"}
```

**Proposed deps.json pending additions:** <list any unit IDs your unit cites that aren't shipped>

**Queue row processed:** <copy the row from §7 with status flipped to ✓ DRAFT>

**Choices that need Tyler review:**
- <specific judgment calls you made, especially around anchor edition selection, pedagogical framing, or ambiguous content boundaries>

**§5.5 quality-discipline answers (audit trail):**
1. Why does this concept exist? <one sentence>
2. One-sentence unit summary: <one sentence>
3. Central worked example chosen: <specific system/molecule/experiment with concrete numbers>
4. Key theorem / mechanism / law: <named>
5. Three common misconceptions: <three concrete misconceptions>
6. Real cross-domain hooks (passes the "completes this sentence" test): <list with the completed sentence per hook>
7. Historical context — originator paper(s): <author year, with primary-lit citation>
```

---

## §12 When you finish a batch

After producing 3–5 units, **stop and report back**. Do not continue indefinitely. Each batch of 3–5 lets the orchestrator:

- Run the consolidator (merge NOTATION/CATALOG/deps additions)
- Run validator with `--emit-connections` on your new units
- Check that nothing else broke
- Decide whether to continue, pause, or redirect

If you've produced 5 units and they all pass 28/28 with only the expected 2 failures, you've done a successful batch. Report and wait.

---

## §13 Files you may need to read (and when)

Don't read these every time. Read them once per session if you don't already know them, or when you genuinely need clarification.

| File | When to read |
|---|---|
| `content/09-classical-mech/04-hamiltonian/09.04.02-hamiltons-equations.md` | First unit of session; checking style |
| `docs/specs/UNIT_SPEC.md` | If frontmatter shape isn't clear |
| `docs/specs/QUALITY_RUBRIC.md` | If a specific validator check is unclear |
| `docs/plans/PHYSICS_PLAN.md` | When picking up §09–13 unit; read only the relevant §3.X subsection |
| `docs/plans/CHEMISTRY_PLAN.md` | §3.X subsection for §14–16 |
| `docs/plans/BIOLOGY_PLAN.md` | §3.X subsection for §17–19 |
| `docs/plans/BIBLE_EXPANSION_PLAN.md` §3 | If cross-domain link contract questions come up |

**Do NOT read** unless absolutely needed:
- `OVERVIEW.md` (long, mostly historical)
- `BRIEF.md` (you have the picture)
- The full plan documents end-to-end (the §3.X subsections are enough)
- Other shipped units (one gold reference is enough)

---

## §14 Edge cases and clarifications

**Q: What if I can't find an anchor citation for a tier?**
A: Use `deferred` for that tier_anchor and mark the tier missing from `tiers_present`. Don't fake an anchor.

**Q: What if all my references are pending?**
A: Find ONE source from `reference/tong/` (math/physics notes that cover lots of topics). If nothing fits, use `source: TODO_REF` for one entry — it counts as non-pending.

**Q: My unit cites a unit that doesn't exist yet AND doesn't have a slot in the queue.**
A: Make up a sensible ID and add `pending_prereqs: true`. The consolidator will register the pending edge. Note this in your report.

**Q: Two units I'm producing in the same batch reference each other.**
A: Pick one as the canonical home; have the other declare it as a prereq with `pending_prereqs: true` (until your batch ships). After your batch ships and the consolidator runs, the prereq will resolve.

**Q: I want to add a new section that's not in the template.**
A: Don't. Stick to the standard section ordering. If you need a new subsection inside one of the standard tier sections, use `###` (level 3); the validator allows this.

**Q: Should I write a "Visual [Beginner]" section even if I can't make an image?**
A: Yes. Use prose: `*Figure: A schematic of <thing> showing <features>.*` The validator accepts this as a visual reference. Don't skip the section.

**Q: How do I know I'm done?**
A: When the validator says `28/28 checks passed.` (Or `26/28` with only the catalog-id and pending-prereq failures, which are expected.)

---

## §15 What the orchestrator does between your batches

When you finish a batch and report back, the orchestrator (human or AI):

1. Reads your reports
2. Merges your proposed NOTATION/CATALOG/deps additions into the shared files
3. Updates the queue (§7) to mark your units as ✓ DRAFT
4. Runs `python3 scripts/validate_unit.py <unit> --emit-connections` on each new unit to populate `manifests/connections.json`
5. Optionally re-runs the validator across the whole batch to confirm 28/28 across all
6. Sends you the next batch assignment OR pauses for Tyler review

You don't need to do any of this. Focus on producing high-quality units.

---

**Last updated:** 2026-05-18 (after Wave 1 completion). When this runbook is revised, update the date here and note major changes at the end of this file.
