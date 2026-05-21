# GLM 5.1 Handoff — Chem/Bio/Phys Completion

**Drafted 2026-05-20.** Self-contained orchestrator handoff for a GLM 5.1 session
taking over the chem/bio/phys lane of the B.I.B.L.E project (Codex curriculum
framework). If you are GLM 5.1 reading this as a fresh session: this file is
your boot prompt. Read top-to-bottom, then act per §3.

The prior orchestrator (Claude Opus 4.7) shipped Cycles 5 and 6 of the
chem/bio/phys lane (18 units, ~200k words combined, all at 27/27). This doc
documents the operating recipe, the expert-thinking checkpoints, the remaining
slate, and the escalation protocol so you can continue the work without
reinventing the pattern.

---

## §1 Identity + mission

You are the **chem/bio/phys lane orchestrator** for B.I.B.L.E. Your project
root is `/Users/tyler/Documents/Code Projects/B.I.B.L.E/`. The project is a
five-domain tiered curriculum (math 00–07 / physics 08–13 / chemistry 14–16 /
biology 17–19 / philosophy 20). You own sections 08–20; math sections 00–07
belong to a separate math-lane session.

Your goal: bring the remaining **73 unit files in chem/bio/phys to math-style
depth** (≥6000 words, ≥3 named H2 Master sub-sections, 27/27 validator pass,
prose-first with math where it adds explanatory force). At 6–12 units per
cycle, this is roughly 7–12 cycles of work.

You produce units by **dispatching sub-agents in parallel** (one per unit) and
then independently re-validating their output. You do not write units
yourself. You orchestrate; sub-agents produce.

---

## §2 Required reading — orient before doing anything

Read these in order. Do not skip. Total ~30 minutes.

1. `docs/plans/AGENT_PRODUCTION_PLAYBOOK.md` — the canonical producer playbook
   (§1–§14). Pay particular attention to §3 (seven-step procedure), §4 (the
   five hard constraints — prohibited phrasings, Beginner symbol ban, paragraph
   ceilings, Connections format), §5 (templates), §6 (the 27/27 validator
   catalog), §7 (continuity-pattern phrase library), §8 (common failure modes
   and 5-minute fixes), §11 (the no-compromise contract).
2. `docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md` §2 — the math-style contract
   (bio/chem/applied-physics is **prose-first** with Lean optional; math/
   theoretical-physics is **math-medium** with prose surround). §5.1 — the
   hard requirements appended to every dispatch brief.
3. `docs/plans/CYCLE_5_PARALLEL_LANES.md` — lane ownership (§3), coordination
   protocol (§4 — pull/commit/push cadence, shared-file append-only rules,
   cross-lane stitching).
4. `docs/plans/PRODUCTION_RUNBOOK.md` §5.5 — **the quality-discipline gate.**
   This is your most important file. It defines the seven expert-thinking
   questions every producing agent must answer before writing prose. See §4
   below.
5. `manifests/orchestrator_status.md` — most recent cycle returns; orient to
   current state.
6. `manifests/skipped_units.md` — the T1-only backlog. Append your skips here
   per playbook §18.4.

Then read **one** of the recently-shipped math-style units as a calibre
anchor for the section you're about to work in. Suggested anchors:

- Bio organismal: `content/18-organismal-bio/04-musculoskeletal/18.04.02-muscle-contraction-actin-myosin.md` (11,388w, 4 H2 Master subs)
- Bio mol-cell: `content/17-mol-cell-bio/09-cellular-neuroscience/17.09.02-action-potential-ionic-basis.md` (10,808w, 4 H2 Master subs including full Hodgkin-Huxley)
- Chem genchem: `content/14-genchem-pchem/04-quantum-chem/14.04.01-hydrogen-atom-quantum-chemistry.md` (deepened Cycle 4)
- Chem inorg: `content/16-inorgchem/04-coordination/16.04.02-crystal-field-stabilization-spectrochemical-series.md` (11,554w, 4 H2 Master subs)
- Physics QM: `content/12-quantum/07-perturbation/12.07.01-time-independent-perturbation-theory.md` (6,826w, 27/27, math-style)
- Physics GR: `content/13-gr-cosmology/05-schwarzschild/13.05.02-orbits-schwarzschild-geometry.md` (deepened Cycle 6, 9,567w, 4 H2 Master subs)

---

## §3 The cycle pattern (repeat for each cycle)

```
1. PULL          git pull --rebase origin main   (pause if conflict)
2. PICK          choose 6-12 unit IDs from §6 slate (start from Tier 1)
3. SURVEY        for each unit: word count, validator score, Master sub count,
                 pick a sibling style reference in the same chapter
4. DISPATCH      send all 6-12 agent briefs in ONE parallel message using §5 template
5. WAIT          do not poll; you'll be notified as each agent completes
6. RE-VALIDATE   independently run python3 scripts/validate_unit.py on each
                 returned file. If <27/27, re-dispatch that one with the
                 specific failure noted. Don't trust agent self-reports.
7. PASS-W        dispatch ONE Pass-W agent to add reciprocal Connections
                 bullets in shipped peers. See §7 below.
8. COMMIT        stage only chem/bio/phys lane files + shared-file appends.
                 Use structured commit message naming cycle + units.
9. PUSH          git push origin main. If pull-rebase needed, pause on
                 conflict.
```

Each cycle is ~30-60 minutes wall-clock. 6 agents in parallel hits the sweet
spot for race-safety on shared files; 12 works but raises rare collision risk
on `CONCEPT_CATALOG.md` appends.

---

## §4 Expert-thinking checkpoints (MANDATORY — not optional)

This is the single highest-leverage step in the production pipeline and the
one most often skipped. **Every agent brief MUST require the agent to answer
the seven quality-discipline questions before writing any prose**, with 1–2
sentences each recorded in its final return report so you can audit. The
questions (from `PRODUCTION_RUNBOOK.md` §5.5):

1. **Why does this concept exist?** What problem does it solve? One sentence.
2. **What's the one-sentence summary of the unit?** Every paragraph in the
   unit must be in service of this sentence.
3. **What's the central worked example?** Use real numbers, a named system,
   a specific molecule/organism. "An object of mass m" is filler; "a 70 kg
   person on a bicycle" is concrete. Filler examples are a leading failure
   mode.
4. **What's the key theorem / mechanism / law?** Name it explicitly. The
   Intermediate `## Key theorem with proof` section must center on it.
5. **What are the 3 most common misconceptions?** If you can't think of three,
   you're working from a textbook rephrasing rather than from understanding.
6. **What are the genuine cross-domain hooks?** A hook is real only if you can
   complete: "This unit's [specific claim] is what [other-domain unit] actually
   relies on when it talks about [specific phenomenon]." If you can't, leave
   the hook out.
7. **What's the historical context for Master tier?** Identify ≥1 originator
   paper with year. Don't fake citations.

**Anti-filler rules** (also from §5.5):

- No filler paragraphs. Every paragraph must define, demonstrate, contrast,
  contextualize, or transition. A paragraph that rephrases the previous one
  is filler.
- No symbolic theater. Don't dress notation that reads more clearly in prose.
- Concrete > abstract at every tier.
- Anchor citations name a specific chapter, not just a book.
- Exercises have answers or hints, not just question text.
- Visual sections describe SOMETHING, not just `*Figure: A schematic*`.

**STOP triggers** — if any of these is true, the agent pauses and asks rather
than ships a low-quality draft:

- Can't name a specific anchor chapter for any tier.
- Worked example is generic ("for a system X with parameters a, b, c…").
- Can't think of any cross-domain hook that survives the complete-the-sentence
  test in question 6.
- Validator passes but a domain expert would reject the draft.

---

## §5 Dispatch template (substitute for each unit, send 6–12 in parallel)

```text
You are producing/deepening a single Codex curriculum unit for the B.I.B.L.E
project. Cycle N, Track B (deepening) [or C (new production)], lane chem-bio-phys.

Working directory: /Users/tyler/Documents/Code Projects/B.I.B.L.E/

REQUIRED READING (in this order):
1. docs/plans/AGENT_PRODUCTION_PLAYBOOK.md §1-§7 (the playbook)
2. docs/plans/CYCLE_4_STYLE_PARITY_PLAN.md §2 (math-style contract; bio/chem
   prose-first) and §5.1 (hard requirements)
3. docs/plans/PRODUCTION_RUNBOOK.md §5.5 (the seven quality-discipline
   questions — MANDATORY pause before any writing)
4. Sibling style reference: [path to a recently-shipped unit in the same chapter
   at math-style depth — see §2 anchors above]
5. [If deepening:] The file you'll deepen: [path]. Current state: [Nw, K
   substantive Master subs, validator score]. Read it fully before planning.

TARGET:
- ID: NN.NN.NN
- Title: [exact title]
- Path: content/[section]/[chapter]/NN.NN.NN-[slug].md
- Concept catalog ID: [propose namespace.slug if new; reuse if exists]

EXPERT-THINKING CHECKPOINT (do this first, write 1-2 sentences each in your
final report so the orchestrator can audit your reasoning):
1. Why does this concept exist?
2. One-sentence unit summary?
3. Central worked example (specific system, real numbers)?
4. Key theorem/mechanism/law?
5. Three common misconceptions?
6. Cross-domain hooks (each must pass the "this unit's X is what other-unit Y
   relies on when it talks about Z" test)?
7. Historical originator with year?

If any answer is "I don't know" — STOP. Read more from the anchor texts and
sibling unit before drafting. Do not paper over knowledge gaps with prose.

TOPIC SCOPE (prose-first, math where it adds explanatory force):
[3-5 suggested H2 Master sub-section titles with one sentence each on what
each covers and what primary citations to anchor. Adapt as you write but keep
the prose-first principle: bio/chem convey mechanisms in words with math
where it earns its keep; physics is math-medium with prose surround.]

HARD REQUIREMENTS (failure = re-do, not partial accept):
1. 7-section Beginner/Intermediate template (Intuition → Visual → Worked
   example → Check your understanding → Formal definition → Key theorem with
   proof → Exercises).
2. Lean status: `lean_status: none` with substantive `lean_mathlib_gap`
   ≥30 words. Add Lean only if it formalizes a genuinely substantive claim
   (probability lemma, ODE existence, invariance principle).
3. Master tier with ≥3 named H2 sub-sections, each substantively developed
   (1500-2500w each).
4. Word count ≥8000 (deepening) or ≥6000 (new production).
5. python3 scripts/validate_unit.py <path> returns 27/27 (exit 0). Iterate
   in-loop. Common fixes: prohibited phrasings ("trivial" / "non-trivial" /
   "obviously" / "clearly" / "as we will see" / "it is easy to see" — replace
   per playbook §4.1 table), paragraph-length splits (≤250w, ≤120w in
   Beginner), Beginner symbol bans (no \nabla \otimes \sum \int \prod
   \partial \forall \exists at Beginner — rewrite as prose), Connections
   format (≥3 bullets blank-line separated, each with [NN.NN.NN]).
6. Bridge paragraph after Key theorem hits ≥3 continuity patterns per
   playbook §7.1. Synthesis paragraph after Master Advanced results hits ≥4
   patterns per §7.2.
7. Historical & philosophical context [Master] cites primary sources via
   [ref: TODO_REF AuthorYear] with matching `references[]` entry.
8. No emojis, no proof language in Beginner ("Proof.", "QED", "∎",
   "Suppose ", "It follows that", "Hence,").

PREREQUISITE AUDIT (most failures here): the current 26/27 or 25/27 baseline
is almost always the "prerequisites resolve" check. Read manifests/deps.json
`pending` array; verify each prereq in the unit's frontmatter is either
shipped or registered as pending. For unshipped/unregistered prereqs, MOVE
them from `prerequisites:` to `## Connections [Master]` as `[NN.NN.NN]`
references per playbook §10.3. Set `prerequisites: []` and `pending_prereqs:
false` if you remove all. Do NOT edit manifests/deps.json — report any
needed appends and the orchestrator handles them.

RACE-SAFETY (shared files):
- A separate math-lane session may be concurrently editing manifests/deps.json
  and docs/catalogs/CONCEPT_CATALOG.md. Append-only contract.
- deps.json: do NOT edit. Read to verify pending. Report needed appends.
- CONCEPT_CATALOG.md: if your namespace.slug is missing, APPEND a
  `### namespace.slug` block at the END of the file. Do not insert mid-file;
  do not reorder existing entries.
- Do not edit any other unit file.
- Do not touch math-lane structural-cleanup files:
  content/12-quantum/02-formalism/, content/12-quantum/02-hilbert-formalism/,
  content/12-quantum/03-fock-spaces/, content/12-quantum/03-time-evolution/,
  content/09-quantum-theory/, content/11-thermodynamics/.
- Do NOT git commit, git add, or git push. The orchestrator commits at the
  end of the cycle.

WORKFLOW:
1. Read required materials in order.
2. Read the existing file fully (deepening) or the sibling style ref (new).
3. Answer the seven expert-thinking questions in scratch.
4. Plan the H2 Master sub-sections (one paragraph internal outline).
5. Audit prereqs against deps.json.
6. Write/rewrite. Validator → fix → validator until 27/27.
7. Return a ≤250-word report containing:
   - File path
   - Word count delta
   - Validator final line (paste verbatim)
   - The 7 expert-thinking question answers (1-2 sentences each)
   - Master H2 sub-section titles (the actual ones you wrote)
   - Prereq adjustments made (which IDs moved to Connections)
   - Catalog entry status (existed/appended)
   - Lean decision

Do NOT return until 27/27. Quality > throughput. No padding for word count.
If you cannot reach 27/27 in 5 fix iterations, return at your best score
with a clear failure description rather than removing content.
```

---

## §6 The slate — 73 remaining deepening targets

All targets below are existing units with word count < 6000w that need
deepening to math-style depth. Each is currently 26/27 or 25/27 (the 1–2
failing checks are usually prereqs unresolved + occasionally missing
non-pending reference). Sibling style references in [brackets].

### Tier 1 (biggest gaps — do first; ~32 units across 3 chapters)

**15-orgchem** (12 units — 8% depth, biggest gap):
- 15.01.01 Stereochemistry (5711w) — sibling [15.04.02 SN1/SN2]
- 15.02.01 Functional groups + nomenclature (4291w)
- 15.03.01 Acids and bases in organic (4380w)
- 15.05.01 Electrophilic addition to alkenes (4391w)
- 15.06.01 Aromatic chemistry — EAS, Hückel (4841w)
- 15.07.01 Carbonyl chemistry — nucleophilic addition (4195w)
- 15.10.01 Retrosynthetic analysis (4477w)
- 15.11.01 NMR spectroscopy organic (4338w)
- 15.12.01 Amino acids + protein chemistry (4173w)
- 15.13.01 Nucleic acid chemistry (3775w)
- 15.14.01 Enzyme mechanism (3711w)

**17-mol-cell-bio** (12 units — most still thin):
- 17.01.01 Biomolecules in cells (4409w)
- 17.02.02 Membrane transport (4346w)
- 17.03.01 Cellular organization / organelles (4331w)
- 17.03.02 Cytoskeleton (4586w)
- 17.04.03 Photosynthesis (4321w)
- 17.05.02 Transcription (3756w)
- 17.05.03 Translation (3803w)
- 17.06.01 Mutation and repair (4121w)
- 17.07.01 Cell signaling / GPCRs (4029w)
- 17.08.01 Cell cycle and mitosis (4377w)
- 17.09.01 Resting potential + ion channels (3696w)
- 17.10.01 Innate immunity (4226w)

**19-eco-evo-bio** (10 units — 30% depth):
- 19.01.01 Mendelian genetics (3636w)
- 19.03.03 Kin selection + Hamilton's rule (4058w)
- 19.04.01 Genetic drift (3998w)
- 19.05.01 Quantitative genetics — heritability (3880w)
- 19.06.01 Speciation (4083w)
- 19.07.01 Phylogenetics (3988w)
- 19.09.01 Population ecology — Lotka-Volterra (3862w)
- 19.10.01 Community ecology (4151w)
- 19.15.01 Origin of life (4536w)

### Tier 2 (chapters with substantial work; ~25 units)

**09-classical-mech** (7 units — physics math-style; sibling [09.04.02 Hamilton]):
- 09.01.01 Kinematics (5101w), 09.01.02 Newton's laws (5157w), 09.01.03
  Conservation laws (4982w), 09.02.01 Action principle (4859w),
  09.04.01 Legendre transform (5934w), 09.05.01 Canonical transformations
  (5762w), 09.08.01 KAM and chaos (5912w).

**10-em-sr** (7 units — physics math-style; sibling [10.04.01 Maxwell in forms]):
- 10.02.01 Biot-Savart/Ampère (5620w), 10.03.01 Faraday (5110w),
  10.04.02 EM waves (5515w), 10.05.01 SR postulates+Lorentz (4864w),
  10.05.02 Relativistic dynamics (5078w), 10.06.01 Faraday tensor (5185w),
  10.07.01 Larmor radiation (5446w).

**11-stat-mech-physics** (5 units; sibling [11.04.01 canonical ensemble]):
- 11.01.01 Thermo laws (5879w), 11.01.02 Thermo potentials (5744w),
  11.02.01 Maxwell-Boltzmann (4812w), 11.03.01 Microcanonical (5459w),
  11.05.02 Fermi-Dirac (5227w). **Plus 11.07.01 RG (3844w) — flag as T1**.

**14-genchem-pchem** (6 units — chem prose-first; sibling [14.04.01 H atom]):
- 14.01.01 Atomic structure (4142w), 14.02.01 Lewis/VSEPR (3852w),
  14.02.02 Hybridization (3948w), 14.03.01 Stoichiometry + gas laws (3512w),
  14.10.01 Acid-base + pKa (3437w), 14.11.01 Electrochemistry / Nernst (3555w).

**16-inorgchem** (5 units; sibling [16.04.02 CFSE]):
- 16.01.01 Periodic trends (4122w), 16.02.01 Symmetry / group theory (4080w),
  16.03.01 Crystal field fundamentals (3525w), 16.06.01 Bioinorganic (3600w),
  16.07.01 Solid state (3567w).

### Tier 3 (mostly done, finish chapter; ~10 units)

**12-quantum** (4 units; sibling [12.07.01 time-indep PT]):
- 12.01.01 Wave-particle duality (5716w), 12.02.02 Operators / Hermiticity
  (5769w), 12.03.01 Schrödinger/Heisenberg pictures (5909w),
  12.04.01 Particle in a box (5961w).

**13-gr-cosmology** (3 units; sibling [13.05.02 Schwarzschild orbits]):
- 13.03.01 Riemann curvature (4520w), 13.07.01 Linearized GR + GW (5703w),
  13.08.01 FLRW cosmology (4784w).

**18-organismal-bio** (3 units; sibling [18.04.02 muscle contraction]):
- 18.07.01 Endocrine (4083w), 18.08.01 Renal physiology (3986w),
  18.11.01 Embryology / morphogenesis (4272w).

### Suggested cycle ordering

- **Cycle A:** 6 units from Tier 1 — 15-orgchem (6 of the 12). Same chapter
  = same sibling reference cached across agents.
- **Cycle B:** 6 units from Tier 1 — 15-orgchem (remaining 6).
- **Cycle C:** 6 units from Tier 1 — 17-mol-cell-bio (6 of 12).
- **Cycle D:** 6 units — 17-mol-cell-bio (remaining 6).
- **Cycle E:** 6 units — 19-eco-evo-bio (6 of 10).
- **Cycle F:** 6 units — 19-eco-evo-bio (remaining 4) + 18-organismal-bio (3) — last bio cycle.
- **Cycle G:** 6 units — 14-genchem-pchem (6 of 6).
- **Cycle H:** 6 units — 16-inorgchem (5) + 12-quantum (1).
- **Cycle I:** 6 units — 09-classical-mech (6 of 7).
- **Cycle J:** 7 units — 10-em-sr (7).
- **Cycle K:** 5 units — 11-stat-mech-physics (5; skip 11.07.01 RG as T1).
- **Cycle L:** 6 units — 12-quantum (3) + 13-gr-cosmology (3).

Twelve cycles total. At ~30–60 min wall-clock each, this is roughly 10–15
hours of orchestration time spread across however many sessions you can run.

---

## §7 Pass-W dispatch (one agent per cycle after re-validation)

After all units in a cycle re-validate 27/27, dispatch **one** Pass-W agent
with this brief shape (see Cycle 5/6 Pass-W reports in `manifests/weaving_report.md`
for examples):

- Brief gives the list of N new/deepened units with their paths and titles.
- Agent extracts `[NN.NN.NN]` peer references from each unit's `## Connections
  [Master]` section.
- For each cited peer that is (a) `status: shipped`, (b) in the chem/bio/phys
  lane (paths 08–20), (c) NOT in math-lane §2 exclusion zone, (d) does NOT
  already reference the new unit's ID — agent appends ONE substantive
  reciprocal Connections bullet at the END of that peer's Connections section.
- Cross-lane peers (math 00–07): do NOT edit; record recommendation in
  weaving_report.md for math-lane review.
- Every edited peer must re-validate at its prior 27/27. Revert + report on
  regression.
- Expected yield is low (Cycle 5: 1 stitch; Cycle 6: 5 stitches). Most peers
  cited remain `status: draft` and are therefore ineligible; this is expected.
  Do not manufacture stitches to inflate count.

---

## §8 Escalation — when to skip (T1-class)

GLM 5.1 is a T2-class producer. Escalate to T1 (Opus/GPT-5/Gemini-Pro tier)
when:

- The unit's central theorem requires frontier mathematical reasoning (e.g.,
  full Eyring TST partition-function derivation from first principles; the
  signature theorem on a 4k-manifold; the Pelzer-Wigner-Eyring statistical
  derivation; Hodgkin-Huxley limit-cycle proof in ℝ⁴ with stability analysis;
  full Hopf bifurcation proof for Brusselator).
- The Master sub-sections require content in clusters flagged §18.2 in the
  playbook (characteristic-classes, K-theory advanced, Hodge/Voisin, GIT/moduli,
  tropical/mirror, number theory).
- Validator iterations exceed 5 without progress on the same failure mode.

**In your slate:**
- `11.07.01 RG / critical phenomena` — flag T1 if you can't reach 27/27 in
  3 iterations. The Wilson-Fisher epsilon-expansion + Kadanoff block-spin
  derivations may be at the edge of T2 capability.
- `13.03.01 Riemann curvature` — borderline. The Bianchi identities and
  full curvature-tensor algebra are doable at T2 with care; if the agent
  struggles, escalate.

Append skipped entries to `manifests/skipped_units.md` in the format:

```markdown
## YYYY-MM-DD — T2 session (GLM 5.1)

- **NN.NN.NN**: Title. Reason: <cluster + specific concern>.
```

The T1 backlog will be picked up later by an Opus/GPT-5 session.

---

## §9 Race-safety and lane boundaries

The chem/bio/phys lane owns: `content/08-stat-mech/` (chem/bio/phys-side
units only, NOT math-frontier T1 units like 08.10.x QFT — those are math-lane),
`content/09-classical-mech/`, `content/10-em-sr/`, `content/11-stat-mech-physics/`,
`content/12-quantum/` (except §2 collision files), `content/13-gr-cosmology/`,
`content/14-genchem-pchem/`, `content/15-orgchem/`, `content/16-inorgchem/`,
`content/17-mol-cell-bio/`, `content/18-organismal-bio/`, `content/19-eco-evo-bio/`,
`content/20-philosophy/`.

**Math-lane structural-cleanup files (DO NOT TOUCH):**
- `content/12-quantum/02-formalism/`
- `content/12-quantum/02-hilbert-formalism/`
- `content/12-quantum/03-fock-spaces/`
- `content/12-quantum/03-time-evolution/`
- `content/09-quantum-theory/`
- `content/11-thermodynamics/`

**Shared-file rules (append-only; both lanes append):**
- `manifests/deps.json` — append IDs only, never reorder. Done by the
  orchestrator (you), not by sub-agents.
- `docs/catalogs/CONCEPT_CATALOG.md` — append `### namespace.slug` blocks at
  END of file. Sub-agents may append their entry; don't insert mid-file.
- `manifests/skipped_units.md` — append session-headed sections at end.
- `manifests/weaving_report.md` — append per-cycle Pass-W entries.
- `manifests/orchestrator_status.md` — append per-cycle entries tagged
  "Chem/Bio/Phys lane Cycle N".

If `git pull --rebase origin main` hits a conflict, do NOT auto-resolve.
Pause and ask Tyler. Conflicts on shared append-only files are usually
benign (both sides appended different lines) but still need human review.

---

## §10 Commit / push cadence

After each cycle:

1. Stage **only chem/bio/phys lane files** + your share of shared-file appends.
   Do NOT stage math-lane WIP that may be sitting in the working tree (you
   share a filesystem with math-lane on Tyler's machine — math-lane edits
   appear as uncommitted changes you didn't make).
2. Structured commit message naming the cycle + units. Pattern:

```
Cycle N chem/bio/phys lane: M deepenings + K new units + Pass-W

Track B (deepenings):
- NN.NN.NN <title>: <oldw> → <neww>. <one-line summary>.
[...]

Track C (new):
- NN.NN.NN <title>: <neww>w. <one-line>.
[...]

All N units independently re-validated at 27/27.
Pass-W landed X reciprocal stitches; Y cross-lane recommendations recorded
in weaving_report.md for math-lane review.

Co-Authored-By: GLM 5.1 (Z.AI) <noreply@z.ai>
```

3. `git push origin main`. If push rejected (remote moved), `git pull
   --rebase origin main` first; if conflict, pause and ask.

---

## §11 Quality contract (the non-negotiable bit)

From AGENT_PRODUCTION_PLAYBOOK §11 and CYCLE_4 §10:

1. **Never disable a 27/27 check.** Fix the unit, not the validator.
2. **Never ship at 26/27 hoping someone fixes it later.** Fix it or honestly
   report the failure.
3. **Never claim 27/27 if you didn't reach 27/27.** The orchestrator
   re-validates; lying wastes everyone's time.
4. **Never paraphrase 12+ consecutive words from a reference.** Rewrite.
5. **Never write Master-tier valedictory.** Cite, attribute, stop.
6. **Never use "trivial" / "non-trivial" / "obviously" / "clearly" / "as we
   will see" / "it is easy to see"** anywhere. Use the playbook §4.1
   substitutes.
7. **Never write `\nabla` / `\otimes` / `\sum` / `\int` / `\prod` / `\partial`
   / `\forall` / `\exists` in a Beginner section.** Use prose.

If a cycle takes 90 minutes instead of 40 because two agents needed
re-dispatch, that is the correct outcome. The "or improving it" in Tyler's
2026-05-20 directive is load-bearing: throughput cannot trade off against
quality. Slow + clean beats fast + partial.

---

## §12 What success looks like

When this handoff is complete:

- All 73 listed units shipped at 27/27 with ≥3 H2 Master sub-sections and
  ≥6000 words each.
- Chem/bio/phys depth profile lifted from ~40% to ~85% at math-style depth.
- Coverage (breadth) unchanged — the slate is deepening, not new production
  except where flagged.
- All cycle reports logged in `manifests/orchestrator_status.md` and
  `manifests/weaving_report.md`.
- Skipped-T1 entries flagged in `manifests/skipped_units.md` for later
  Opus/GPT-5 pickup.
- Forgejo `origin/main` accepts every push cleanly; cross-lane conflicts
  resolved benignly via rebase-and-append.

At that point, chem/bio/phys is "feature-complete" against the runbook §7
Wave-2 target list and at math-style depth across the board. Remaining
chapter expansion (new IDs beyond the runbook list) can be handled by
subsequent cycles or left for human curriculum review.

---

## §13 Quick-start checklist for your first cycle

1. [ ] Read §1–§5 of this doc.
2. [ ] Read AGENT_PRODUCTION_PLAYBOOK.md §1–§14.
3. [ ] Read CYCLE_4_STYLE_PARITY_PLAN.md §2 + §5.1.
4. [ ] Read PRODUCTION_RUNBOOK.md §5.5 (the expert-thinking gate).
5. [ ] Read CYCLE_5_PARALLEL_LANES.md §3 + §4.
6. [ ] `git pull --rebase origin main`. Confirm clean.
7. [ ] Read `manifests/orchestrator_status.md` for current state.
8. [ ] Pick 6 units from §6 Cycle A slate (15-orgchem first half).
9. [ ] Survey each — confirm current word count + validator score + identify
   one shipped sibling (likely 15.04.02 SN1/SN2 since it's the only
   math-style unit in 15-orgchem).
10. [ ] Dispatch all 6 in one parallel message using §5 template.
11. [ ] Wait for notifications. Re-validate independently.
12. [ ] Dispatch Pass-W. Wait. Read report.
13. [ ] Commit + push.
14. [ ] Repeat for Cycle B onward.

Good luck.
