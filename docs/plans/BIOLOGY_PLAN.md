# Codex — Biology Plan

**Drafted 2026-05-17.** Per-domain plan for the Biology axis of the five-domain expansion. Sibling of `PHYSICS_PLAN.md` and `CHEMISTRY_PLAN.md`. Subordinate to `BIBLE_EXPANSION_PLAN.md`. Drafted in parallel with chem per the umbrella §6 sequence; both revised after Physics Wave 1 retro.

**Status:** Draft. Locks the three-section structure (matching the three-tree-DAG biology actually has), hybrid mode, tier anchors per tree, mastery endpoints, the cross-domain prereq cone (heavy: chem + physics + math), exclusions, three-spine coverage scaffold, and the Wave 1 seed slate.

Read before this plan: `OVERVIEW.md`, `BIBLE_EXPANSION_PLAN.md` (esp. §2.4 bio exclusions and §3 cross-domain contract), `CHEMISTRY_PLAN.md` (the densest chem→bio hook surface).

---

## §1 What this plan does

1. **Decomposes biology into three top-level sections** §17–19 matching the three weakly-connected entry trees biology actually has: molecular/cellular (§17), organismal/physiological (§18), and ecological/evolutionary (§19). These three are more independent of each other than the five physics branches or the three chemistry sections — a learner can master §19 without ever touching §17, which is *not* true of physics or chem.
2. **Defines hybrid mode for bio** — units for mechanisms and specific systems; essays for the higher-level questions ("what is life," "what is consciousness in cellular terms," "evolution as algorithmic process") that span trees and reach into phil.
3. **Builds the three-spine coverage scaffold** (Alberts MBoC + Campbell + Futuyma) since no single canonical roadmap exists; each spine governs one of the three sections.
4. **Names Wave 1 seeds** — 3 units + 1 essay, with the §17 unit (action potential) deliberately chosen because it stress-tests the *most* cross-domain prereqs at once (chem ion channels + physics electrochem + math ODEs).

It does not:
- Produce units (gated on `BIBLE_EXPANSION_PLAN.md` §10 patches + Physics Wave 1 retro).
- Decide where in v1 vs v2 various excluded subareas (medicine, psych, etc.) land — those are out of v1 per umbrella.
- Lock the question of whether neuroscience eventually splits into a dedicated section (deferred to §8).

---

## §2 Biology scope

### 2.1 In scope (v1)

| Tree | Topics in scope |
|---|---|
| §17 Molecular & Cellular | Biomolecule function (proteins, nucleic acids, lipids, carbohydrates — *biology side*; the chem-side is in §15.12–13); membrane structure and transport; cell structure (organelles); cell division; signaling; gene expression and regulation; molecular genetics; molecular evolution at the sequence level; cellular neuroscience (action potentials, synapses, neural cell biology); immunology mechanism (molecular + cellular); cell-cycle and cancer biology; stem-cell biology basics |
| §18 Organismal & Physiological | Anatomy of major systems (cardiovascular, nervous, musculoskeletal, respiratory, digestive, endocrine, reproductive, immune); physiology and homeostasis; development (embryology, morphogenesis); physiology of specific organisms (model systems: *E. coli*, *S. cerevisiae*, *C. elegans*, *D. melanogaster*, *M. musculus*, *A. thaliana*, human); comparative physiology; behavior (animal behavior — the ethology side; cognitive aspects defer to phil) |
| §19 Ecology & Evolution | Population genetics (Hardy-Weinberg, drift, selection coefficients); quantitative genetics; evolutionary theory (natural / sexual / kin selection; neutral theory; molecular evolution); phylogenetics; speciation; macroevolution; ecology (population, community, ecosystem); biogeography; conservation biology basics; coevolution; origin of life (mechanistic side; the philosophical / cosmological side → phil) |

### 2.2 Out of scope (v1) — explicit exclusions

From `BIBLE_EXPANSION_PLAN.md` §2.4 (restated):

| Out of v1 | Goes to |
|---|---|
| Biochemistry **mechanism** (treated as chemistry of biomolecules in isolation) | Chem §15 |
| Biochemistry **as it operates in specific organisms / pathways** | Bio (§17) — but the *mechanism* lives in chem; bio cross-refs |
| Medicine, pharmacology, clinical applications | Not v1 |
| Psychology, cognitive science (empirical) | Not v1 (phil-of-mind covers conceptual overlap) |
| Neuroscience: cellular/molecular | Bio §17 |
| Neuroscience: cognitive / computational / consciousness | Phil §20 + v2+ |
| Bioinformatics methods (sequence alignment, phylogenetic inference, statistics of biology) | Math (probability, graph theory, dyn-sys) |
| Bioinformatics-specific software / tools | Not v1 |
| Public-health / epidemiology models | Math (probability, dyn-sys) for the methods; domain-specific epi → v2+ |
| Detailed clinical anatomy (surgical-detail anatomy) | Not v1 (gross anatomy at the descriptive-physiology level is in scope) |

**Boundary rules:**
- *Biochem boundary* (cross-references §15.14 chem-side enzyme mechanism): if the question is "what does this enzyme *do* chemically?" → chem §15.14. If the question is "how does this enzyme function in cellular metabolism / a specific pathway / a specific organism?" → bio §17. The citric-acid-cycle worked example: each individual enzyme's mechanism is chem; the cycle-as-a-cellular-process is bio.
- *Neuroscience boundary*: action potentials, synaptic transmission, neuroplasticity at the molecular/cellular level → bio §17. Computational neuroscience, theory of cognition, theory of consciousness → phil §20 + v2+.
- *Bioinformatics boundary*: a unit on "how Bayesian phylogenetic inference works as a method" → math. A unit on "using phylogenetics to test a specific evolutionary hypothesis on a specific clade" → bio §19. Tools (BLAST, Bowtie, etc.) → not v1.
- *Origin of life boundary*: prebiotic chemistry mechanisms → chem §15 + cross-ref. Plausibility analysis under various cosmological / geological scenarios → bio §19 + phil §20. The *fact* that life began under particular conditions on Earth → bio §19. The metaphysics of "what does it mean for non-life to become life" → phil.

### 2.3 What about psychology / cognitive science?

Honest acknowledgment: v1 punts on a contentious boundary. The cellular/molecular substrate of cognition is bio §17. The information-processing / computational / phenomenological aspect is phil §20 (or v2+). Where exactly the line falls between these is genuinely contested in the actual scientific literature, and forcing a clean split is part of why this plan can ship at all. v2 may relax the constraint.

---

## §3 The three trees (or: why "tree" not "branch")

Physics had five branches with internal ordering each; chem had three sections with softer DAGs each. Bio has **three trees**, which is structurally weaker than either:

- The **molecular/cellular tree** descends from atoms → molecules → cells → tissues, with chemistry as the heavy prereq dependency.
- The **organismal/physiological tree** treats systems and organisms as integrated wholes — it *can* be entered from cellular biology, but the standard intro-bio undergrad pedagogy starts an organismal student from anatomy/physiology directly without requiring molecular fluency.
- The **eco/evo tree** is the most independent of the three; it has its own math prereqs (population genetics is its own probability discipline) and minimal direct cellular-biology dependency in most of its content. A learner can master Hardy-Weinberg, drift, selection, and phylogenetics without ever doing a cell-biology unit.

This three-tree structure is not arbitrary — it matches how biology is *actually* taught at the undergraduate and graduate level (separate molecular-bio, physiology, and ecology curricula at most universities). v1 honors this.

---

### 3.1 §17 Molecular & Cellular Biology

**Internal ordering (loose; tree-shaped, multiple entry points):**

| Chapter | Topic | Entry? |
|---|---|---|
| 17.01 | Biomolecules at the cellular scale — proteins, nucleic acids, lipids, carbs in their biological role | ✓ |
| 17.02 | Membrane structure and dynamics — bilayers, transport, signaling at membranes |  |
| 17.03 | Cellular organization — organelles, cytoskeleton, compartmentalization | ✓ |
| 17.04 | Energy and metabolism in cells — cellular respiration, photosynthesis, lipid + carbohydrate metabolism (the *cellular* side; chem-side is §15) |  |
| 17.05 | Gene expression — DNA replication, transcription, translation, regulation |  |
| 17.06 | Molecular genetics — mutation, recombination, repair, mobile elements |  |
| 17.07 | Cell signaling — receptors, kinase cascades, GPCRs, second messengers |  |
| 17.08 | Cell cycle and division — mitosis, meiosis, cancer biology basics |  |
| 17.09 | Cellular neuroscience — action potentials, synapses, neural cell biology |  |
| 17.10 | Immunology mechanism — innate + adaptive immunity at the molecular + cellular level |  |
| 17.11 | Stem cells and developmental potency basics |  |
| 17.12 | Molecular evolution — sequence evolution, neutral theory at the molecular level |  |

**Cross-domain prereq cone:**

| From | Why |
|---|---|
| chem §15.12–14 | biomolecule structure and mechanism (chem-side) |
| chem §16.06 | metalloenzymes (chem-side) |
| chem §14.08 | kinetics (for enzyme kinetics in cellular metabolism) |
| chem §14.06 | thermodynamics (for bioenergetics) |
| physics §10 | electromagnetism (for 17.09 action potentials) |
| physics §11 | stat mech (for biopolymer physics, 17.02 membrane transport at equilibrium) |
| physics §11.09 | statistical biophysics primer (cross-cited heavily) |
| physics §12 | QM (for photosynthesis at master tier) |
| math §02 | ODEs (for kinetic models), probability (for molecular dynamics, mutation) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Crash Course Biology; Khan Academy; *Why Evolution Is True* (Coyne, for the molecular evolution sections); *The Vital Question* (Lane) |
| Intermediate | Alberts et al. *Molecular Biology of the Cell* (textbook tier sections); Lodish *Molecular Cell Biology* (alt); Karp *Cell and Molecular Biology* (alt) |
| Master | Alberts *MBoC* (advanced sections); Phillips et al. *Physical Biology of the Cell*; Nelson *Biological Physics: Energy, Information, Life*; primary lit (Cell, Nature, Science) by subarea |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain (with correct causal direction) a mechanism like the action potential, transcription, or muscle contraction; name what's in a cell and what it does at a coarse level |
| Intermediate | Read experimental figures from MBoC end-of-chapter material and identify the controls / conclusions; predict a mutation's phenotype; work problems on kinetics of metabolism, membrane transport, signaling cascades |
| Master | Read a primary paper in molecular / cellular biology and (a) identify the methods used, (b) assess confounds, (c) predict what would change under alternative hypotheses; treat a biophysics problem at the *Physical Biology of the Cell* level |

**Outbound hooks:**
- → Chemistry: most of §17 has heavy *inbound* chem cites; outbound is rarer (a biological context can sometimes inform chem essay synthesis but units rarely)
- → Philosophy: computation in neural signaling (17.09); information in gene expression (17.05); life as a thermodynamic phenomenon (17.04 + 17.02); origin of life (also §19)

---

### 3.2 §18 Organismal & Physiological Biology

**Internal ordering:**

| Chapter | Topic | Entry? |
|---|---|---|
| 18.01 | Body plans and organization — tissues, organs, integrated systems | ✓ |
| 18.02 | Cardiovascular physiology — heart, vessels, blood, regulation |  |
| 18.03 | Respiratory physiology |  |
| 18.04 | Musculoskeletal — actin-myosin, joint mechanics, locomotion (cross-refs physics §09) |  |
| 18.05 | Nervous system — gross anatomy, brain regions, system-level neuroscience (cellular side in §17.09) |  |
| 18.06 | Digestive physiology and nutrition |  |
| 18.07 | Endocrine — hormones and integrated regulation |  |
| 18.08 | Renal physiology and homeostasis |  |
| 18.09 | Reproductive biology |  |
| 18.10 | Immunology — system-level (cellular/molecular side in §17.10) |  |
| 18.11 | Development — embryology, morphogenesis, organogenesis | ✓ |
| 18.12 | Animal behavior (ethology) — fixed action patterns, instinct, learning at the behavioral level (not cognition) |  |
| 18.13 | Model organism biology — *E. coli*, yeast, worm, fly, mouse, *Arabidopsis*, human as integrated wholes |  |
| 18.14 | Plant physiology — photosynthesis at the plant level (cellular side in §17.04); water relations; growth |  |
| 18.15 | Comparative physiology — physiology across taxa; adaptive variation |  |

**Cross-domain prereq cone:**

| From | Why |
|---|---|
| bio §17 (selected) | cellular substrate (action potential for nervous system, etc.) |
| physics §09 | mechanics (for musculoskeletal, fluid dynamics in cardiovascular) |
| physics §11 | thermodynamics + transport (for renal, respiratory, thermoregulation) |
| chem §14.06 | thermodynamics |
| chem §15 | biochem (for nutrition, metabolism at the organismal level) |
| math §02 | ODEs (for physiological models — compartmental, pharmacokinetic) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Crash Course Anatomy & Physiology; Campbell *Biology* (intro chapters) |
| Intermediate | Campbell *Biology* (full); Sadava *Life: The Science of Biology*; Hill *Animal Physiology*; Knut Schmidt-Nielsen *Animal Physiology* (alt) |
| Master | Boron-Boulpaep *Medical Physiology* (the most rigorous integrated physiology text); Eckert *Animal Physiology*; Squire et al. *Fundamental Neuroscience* (for systems neuroscience); primary lit (J. Physiol., Nature Neuroscience, Cell) |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Name the major systems and explain in plain language what each does; predict what happens when one system fails (e.g., what dehydration does at the kidney level) |
| Intermediate | Work Campbell / Sadava end-of-chapter problems; analyze experimental data (e.g., from a physiology lab) and identify what's being measured; predict how a perturbation propagates across systems |
| Master | Boron-Boulpaep + Eckert problems; read a J. Physiol. or Nature Neuroscience paper and assess the methodology; integrate cross-system perturbations (e.g., how does a respiratory acidosis propagate through renal, cardiovascular, and nervous responses) |

**Outbound hooks:**
- → Philosophy: agency and goal-directedness in behavior (18.12); free will and the brain (18.05); the unity of an organism — what makes something one biological individual (cross-refs §17 and §19); development as a constructive vs informational process (18.11)
- → Chemistry: nutrition (18.06) cross-refs back into chem §15 metabolism
- → Physics: biomechanics (18.04) cross-refs back into §09

---

### 3.3 §19 Ecology, Evolution & Population Biology

**Internal ordering:**

| Chapter | Topic | Entry? |
|---|---|---|
| 19.01 | Mendelian genetics and inheritance | ✓ |
| 19.02 | Hardy-Weinberg equilibrium and basic population genetics | ✓ |
| 19.03 | Selection — natural, sexual, kin |  |
| 19.04 | Genetic drift and the neutral theory |  |
| 19.05 | Quantitative genetics — heritability, breeder's equation, response to selection |  |
| 19.06 | Speciation — modes (allopatric, sympatric), reproductive isolation |  |
| 19.07 | Phylogenetics — tree reconstruction, molecular clocks, gene-tree vs species-tree |  |
| 19.08 | Macroevolution — clade dynamics, mass extinctions, key innovations |  |
| 19.09 | Population ecology — growth models, Lotka-Volterra, life-history theory |  |
| 19.10 | Community ecology — interactions, food webs, succession |  |
| 19.11 | Ecosystem ecology — energy flow, nutrient cycling |  |
| 19.12 | Biogeography — historical + ecological |  |
| 19.13 | Coevolution — host-parasite, mutualism, sexual conflict |  |
| 19.14 | Conservation biology basics — population viability, extinction risk modeling |  |
| 19.15 | Origin of life — mechanistic + scenario analysis (cross-refs chem prebiotic + phil) |  |

**Cross-domain prereq cone:**

| From | Why |
|---|---|
| math §02 | probability and statistics (heavy: pop gen is essentially applied probability) |
| math §02 | ODEs and dynamical systems (for ecology models, evolutionary game theory) |
| math (graph theory) | for phylogenetics (location TBD — possibly §03 modern-geometry adjacent or math expansion) |
| bio §17.12 | molecular evolution at the sequence level (for §19.04, §19.07) |
| chem §15 | basic biochem (for origin of life §19.15) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | *Why Evolution Is True* (Coyne); Crash Course Ecology + Biology evolution episodes; Dawkins *The Selfish Gene* (popular) |
| Intermediate | Futuyma *Evolution*; Begon et al. *Ecology: From Individuals to Ecosystems*; Hartl-Clark *Principles of Population Genetics* |
| Master | Charlesworth *Elements of Evolutionary Genetics*; Walsh-Lynch *Evolution and Selection of Quantitative Traits*; Felsenstein *Inferring Phylogenies*; primary lit (*Evolution*, *Am. Nat.*, *Ecology*, *Molecular Biology and Evolution*) |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain natural selection without teleology; recognize what evidence supports evolution; predict qualitatively whether a population is at Hardy-Weinberg |
| Intermediate | Work Hartl-Clark / Futuyma problems including selection coefficients, drift, F-statistics, fitness landscapes; work Begon ecology problems; interpret a phylogenetic tree (rooted/unrooted, bootstrap, branch length meaning) |
| Master | Work Charlesworth / Walsh-Lynch problems; assess primary lit on quantitative genetics or molecular evolution; reconstruct a phylogeny computationally and assess methodological choices; treat origin-of-life scenarios rigorously |

**Outbound hooks:**
- → Philosophy: teleology vs evolution (the canonical phil-of-bio question); design inference and its failures; the unit-of-selection problem (gene vs individual vs group); the nature of fitness; species as natural kinds vs nominalist; origin of life as scientific vs metaphysical question
- → Chemistry: origin of life (19.15) cross-refs prebiotic chem
- → Math: dynamical systems applied to ecology / coevolution

---

## §4 Hybrid mode — units vs essays in biology

Bio has a *higher* essay-to-unit ratio than chem because of the synthesis-heavy questions at the boundary with philosophy:

### 4.1 Tiered units (majority)

Units cover: specific mechanisms (action potential, transcription), specific systems (cardiovascular, immune), specific principles (Hardy-Weinberg, selection coefficients), specific organisms (model systems).

### 4.2 Synthesis essays (more here than in chem)

| Candidate essay | Why an essay |
|---|---|
| "What life is — the biology between physics and intentionality" | Spans §17 + §18 + §19; interpretive; pairs with phil |
| "Information in biology — gene as message, gene as switch, gene as nothing-of-the-kind" | The DNA-as-information question is one of the most contested in phil-of-bio; cuts across §17 + phil |
| "Evolution as algorithmic process — what does and doesn't reduce to a search algorithm" | Cross-disciplinary; touches §19, computer-science / algorithms questions, phil |
| "Agency at biological scales — from chemotaxis to behavior" | §17.07 + §18.12 + phil; what does it mean for a cell, an organism, a colony, to *do* something |
| "Consciousness from the brain stem up" | §17.09 + §18.05 + phil; the cellular substrate side of the consciousness question |
| "Reductionism in biology — what counts as a biological explanation" | Phil-of-bio meta; pairs with phil-of-science |
| "Origin of life as scientific question — the necessary vs the contingent" | §19.15 + chem prebiotic + phil; how do we know we'd recognize it if we found it elsewhere |

**Initial essay budget:** ≤ 7 across the bio axis (slightly higher than chem's 5 because bio→phil hook surface is denser).

### 4.3 Where they live

Locked (per `UNIT_SPEC.md` §2.2):

- **Tiered bio units** live at `content/17-mol-cell-bio/`, `content/18-organismal-bio/`, `content/19-eco-evo-bio/`.
- **Essays** live at `site/src/content/biology/NN-slug.md` with frontmatter:
  ```yaml
  id: <17|18|19>.essays.NN
  applies_to: [<section-numbers>]
  ```
- Primary-section rule applies (cf. `CHEMISTRY_PLAN.md` §4.3): essay's `id` uses its primary section's prefix, `applies_to:` lists every section it spans. E.g., a "What life is" essay spanning §17/§18/§19 + phil §20 might carry `id: 17.essays.01`, `applies_to: [17, 18, 19, 20]`.

---

## §5 Coverage scaffold — three spines

Bio has **no** Fast-Track-style canonical roadmap; even more than chem, the field is heterogeneous. Three spines combine to scaffold coverage:

### 5.1 Spine 1 — Alberts *Molecular Biology of the Cell* (drives §17)

MBoC is the gold-standard molecular/cellular biology reference at intermediate and master. Its chapter list defines the molecular/cellular coverage. v1 maps every MBoC chapter (or coherent chapter-cluster) to at least one §17 unit at intermediate tier; master tier follows where MBoC depth merits.

### 5.2 Spine 2 — Campbell *Biology* + Boron-Boulpaep *Medical Physiology* (drives §18)

Campbell defines the **organismal** intermediate-tier coverage; Boron-Boulpaep defines the **master-tier** integrated physiology. The Campbell + Boron-Boulpaep chapter unions provide the §18 coverage spec.

### 5.3 Spine 3 — Futuyma *Evolution* + Begon *Ecology* + Hartl-Clark *Pop Gen* (drives §19)

Three smaller spines compose into §19. Futuyma covers evolutionary theory; Begon covers ecological theory; Hartl-Clark covers the quantitative population-genetics core. Their unions provide §19 coverage.

### 5.4 Reference archive expansion

Like chem, bio needs `reference/` expansion. Candidate license-permissive sources: OpenStax Biology / Anatomy & Physiology / Microbiology; iBiology lectures (where licensable); NCBI Bookshelf for some primary references. Sourcing is a Wave 1 deliverable.

### 5.5 Coverage manifest

`manifests/production/bio-coverage.json` (analog of `chem-coverage.json`, per `CHEMISTRY_PLAN.md` §11) maps the three-spine chapter unions to (eventually) Codex unit IDs. Empty initially.

---

## §6 First wave — three seed units + one synthesis essay

Purpose: stress-test the cross-domain link contract on the **densest cross-domain prereq node in any of the five domains** — biology's action-potential unit cites chem, physics, AND math simultaneously.

| Tree | Seed | Why this one |
|---|---|---|
| §17 mol/cell | **17.09.02 The action potential — ionic basis** | Maximum cross-domain prereq density: chem §15 (ion channels = proteins), physics §10 (electrochemical potentials), physics §11 (Nernst equation from stat mech), math §02 (Hodgkin-Huxley = coupled ODEs). Hooks out to phil §20 (information processing in neurons). Anchored in Hille *Ion Channels of Excitable Membranes* + MBoC ch. 11. Single best test of the link contract on bio. |
| §18 organismal | **18.04.02 Muscle contraction — actin-myosin cycle** | Cross-domain prereqs: physics §09 mechanics, chem §15 ATP-driven catalysis. Hooks out to phil §20 (mechanism vs purposive action). Anchored in Boron-Boulpaep ch. on muscle + MBoC ch. 16. |
| §19 eco/evo | **19.02.01 Hardy-Weinberg equilibrium** | Cleanest math-side dependence on bio's axis (probability §02); minimal chem/physics cross-deps; hooks out to phil (chance, contingency, fitness as latent variable). Anchored in Hartl-Clark ch. 2 + Futuyma ch. on selection. |
| Essay | **"What life is — biology between physics and intentionality"** (`17.essays.01` or pan-bio essay slot) | Spans all three trees, pairs with phil §20; exercises essay-mode with cross-tree references |

**Sequence:** 19.02.01 → 18.04.02 → 17.09.02 → essay.

Rationale for order:
- **Hardy-Weinberg first** because it has the *fewest* cross-domain prereqs (essentially just math probability). Establishes the bio production pattern on the lightest cross-deps so we can isolate bio-specific friction before piling on cross-domain complexity.
- **Muscle contraction second** because it brings in physics §09 and chem §15 — two cross-domain prereqs, not yet the maximum.
- **Action potential third** because it's the *hardest* test case: chem + physics + math + bio-internal prereqs simultaneously. If the link contract survives the action potential, it survives anything bio will throw at it.
- **Essay last** because it can reference the three units already shipped.

### 6.1 Success criteria (Wave 1 bio)

- [ ] All 3 units exist in `content/1{7,8,9}-<slug>/` per spec, with `hooks_out`.
- [ ] The essay exists at `site/src/content/biology/01-what-life-is.md` with ID `17.essays.01` (or pan-bio scheme TBD).
- [ ] The action potential unit declares cross-domain prereqs to chem §15 (ion channels), physics §10 (electromagnetism), physics §11 (Nernst from stat mech), math §02 (ODEs). At least 3 of these are cross-domain pending if the targets don't exist yet.
- [ ] All `hooks_out` to phil land on either `20.essays.NN` or `20.NN.NN` analytic-phil unit targets, with `kind: proposed` until the phil-side reviewer attests them (no special `20.pending` placeholder — the `proposed` state in the umbrella §3.2 contract is the "target may not exist yet" mechanism).
- [ ] At least one `hooks_out → chem` exists somewhere in the wave (the cellular biology side does cite into chem-mechanism units; cross-direction hook for the bidirectional graph).
- [ ] Reviewer attestation logged; bio-side reviewer recruited or flagged.
- [ ] Retro into `docs/pilot-lessons.md` — explicitly diagnose whether action-potential's cross-domain prereqs strained the contract.

The wave *fails* if:

- Action potential ships with fewer than 3 cross-domain prereqs (cells-only treatment would defeat the stress-test purpose).
- Any `pending_prereqs` edge into chem or physics fails to resolve to a planned future unit (would mean the chem/physics plans don't actually cover what bio needs).
- The essay's cross-refs across the three bio sections don't resolve.
- Reviewer recruitment for bio has zero progress by wave end.

### 6.2 Production strategy

| Item | Strategy | Notes |
|---|---|---|
| 19.02.01 Hardy-Weinberg | **Manual** | Pattern-setter for bio; lightest cross-deps |
| 18.04.02 Muscle contraction | Agent-drafted + editorial pass | Standard textbook content |
| 17.09.02 Action potential | **Manual** | Densest cross-domain prereq node; benefits from human-author judgment on cross-cite choices |
| Essay | Manual | Synthesis-mode; spans trees |

---

## §7 Reviewer roster

Bio reviewer recruitment is **even harder** than chem because:
1. Tyler's bio background is not assumed at expert level (cf. PHYSICS_PLAN where gauge-theory expertise grounds the math/physics side).
2. Bio sub-fields are more siloed than chem — a Hodgkin-Huxley reviewer is not the same person as a population-genetics reviewer.
3. Three trees → at least three reviewer specialties needed.

| Tree | Tyler-solo? | Outside reviewers needed |
|---|---|---|
| §17 mol/cell | Yellow at beginner; Red at intermediate/master | Mol-bio / biochem PhD (general 17.01–07); cellular neuroscientist (17.09); cell-cycle/cancer specialist (17.08); immunologist (17.10) — likely overlapping with one reviewer covering 17.01–07 |
| §18 organismal | Yellow at beginner; Red at intermediate/master | Physiologist (general); developmental biologist (18.11); animal behavior researcher (18.12) |
| §19 eco/evo | Yellow with math-probability grounding from math §02; Red at master | Evolutionary biologist (pop gen + quantitative); ecologist; phylogeneticist |

**Recruitment priority:**
1. **Molecular / cellular biologist** — covers most of §17 and the cellular sides of §18. Single highest-leverage hire.
2. **Evolutionary biologist** — covers §19, has lightest overlap with other domains so requires a dedicated hire.
3. **Physiologist** — covers §18 and the system-level side.

**Three reviewers minimum** before Wave 2 ships any master-tier unit. (Chem needed three reviewers also; bio likely needs the same number but with different specialties.)

**LLM-augmented review** is even more relied-on for bio than for chem at intermediate tier. Master tier requires named human review without exception — "predict a mutation phenotype" and "assess a primary paper's methods" are not LLM-checkable mastery endpoints.

---

## §8 Open questions (deferred)

| Question | Deferred to | Why now is wrong |
|---|---|---|
| Does neuroscience eventually split out into its own section (e.g., §21 if expanded) given how much it spans §17 + §18 + phil? | After v1 ships; v2+ scope discussion | Premature; v1 distributes neuroscience across §17.09, §18.05, phil §20 |
| Does v1 include any computational / systems biology as a coherent subsection, or remain distributed? | After Wave 2 | Treat as distributed for now (Boolean networks, dynamical-systems models live in §17 / §19 chapters as application material) |
| How are the increasingly important AI-and-biology topics handled (protein folding via deep learning, AlphaFold-class results, ML for genomics)? | Per-unit; default no until clearly load-bearing | The *underlying biology* is in scope; the AI methods are not v1 chem/bio |
| What happens to "synthetic biology" as a discipline — distributed across §17 + §18 + chem, or its own subsection? | After Wave 2 | Premature; treat as application chapters in §17 |
| Does v1 include any sociobiology / evolutionary psychology? | Per-unit; default no | Contested; defer rather than commit to a take |

---

## §9 Risks

| Risk | Mitigation |
|---|---|
| The action-potential seed unit fails because the prereqs in chem / physics / math aren't yet shipped, and the cross-domain pending machinery isn't ready | Action potential is sequenced *third* in Wave 1 specifically so that Hardy-Weinberg and muscle contraction can debug the cross-domain pending machinery first |
| Reviewer recruitment for bio takes longer than for chem (it likely will), delaying Master-tier production | Restrict bio to Beginner+Intermediate until ≥ 1 reviewer of each specialty is named |
| The bio→phil hook surface is so dense that the essay budget (7) is exceeded by Wave 2 | Hard cap at 7 enforced via reviewer rejection unless a strong "couldn't be a unit because X" justification |
| Boundary creep: pharm / clinical / cognitive content sneaks into bio because authors don't enforce exclusions | Reviewers check §2.2 boundary rules per unit; the test case for §17 is "is this about how the cell does it, or about how the drug fixes it" — only the first is bio v1 |
| Three-spine coverage scaffold has more gaps than ACS / Fast Track because the three spines don't intersect cleanly | Coverage manifest (`bio-coverage.json`) tracks each spine's chapter coverage independently. Gap audit happens after Wave 2. |
| Origin-of-life unit (19.15) becomes a magnet for philosophical controversy that doesn't belong in a science curriculum | The unit covers *mechanistic scenarios* (RNA world, hydrothermal vents, lipid worlds, etc.) and explicit evidential standards; the metaphysical question lives in phil §20 with cross-ref |

---

## §10 Decision log entries (to be added to `OVERVIEW.md` §12 on the same date)

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-17 | Bio decomposes into three sections §17 (mol/cell), §18 (organismal/physiological), §19 (eco/evo), matching the three independent trees biology actually has at the curricular level | The three trees are more independent than physics branches or chem sections — a learner can master §19 without §17; pretending otherwise would force false dependencies |
| 2026-05-17 | Three-spine coverage scaffold: Alberts MBoC drives §17; Campbell + Boron-Boulpaep drive §18; Futuyma + Begon + Hartl-Clark drive §19 | No single canonical roadmap exists; three spines covering three trees keeps coverage decidable |
| 2026-05-17 | Boundary rules: biochem mechanism → chem §15.14, biochem-in-organism → bio §17. Action potentials → bio §17.09; computational/cognitive neuroscience → phil + v2+. Bioinformatics methods → math; tools → not v1. Origin-of-life mechanism → bio §19.15; metaphysics of life-emergence → phil | Without explicit boundaries, bio scope balloons (medicine, psych, bioinfo, etc. all try to enter); explicit rules prevent it |
| 2026-05-17 | Hybrid-mode essay budget ≤ 7 across bio v1 (vs ≤ 5 for chem) | Bio→phil hook surface is denser than chem→phil; explicit higher budget reflects this |
| 2026-05-17 | Wave 1 bio: 3 units + 1 essay, sequenced 19.02.01 Hardy-Weinberg → 18.04.02 muscle contraction → 17.09.02 action potential → essay. Action potential is the densest cross-domain prereq node in any domain | Sequencing escalates cross-domain prereq density; action potential is the link-contract stress test for bio |
| 2026-05-17 | Bio reviewer recruitment is gated as a Wave-2 blocker for master tier; three reviewer specialties needed minimum (mol/cell, evo, physiology) | Three independent trees → three reviewer specialties; no overlap possible |
| 2026-05-17 | v1 punts on the cog-sci / phil-of-mind boundary; cellular and systems neuroscience are bio, cognition is phil + v2+. Honest acknowledgment that this is a forced split contested in real research | Forcing a clean split is part of why v1 can ship; v2 may relax |

---

## §11 Next immediate actions

Gated on `BIBLE_EXPANSION_PLAN.md` §10 patches AND Physics Wave 1 retro:

1. **Sourcing pass** — populate `reference/_meta/SOURCES.md` extensions for bio; identify license-permissive sources for the first units.
2. **Coverage-scaffold manifest** — create `manifests/production/bio-coverage.json` with three-spine chapter lists; empty unit-IDs until Wave 1 ships.
3. **Reviewer recruitment** — start outreach for three specialties (mol-cell, evo, physiology). Bandwidth target: ≥ 1 hire of each kind before Wave 2 master-tier production.
4. **Produce 19.02.01 Hardy-Weinberg manually** — the lightest-cross-deps seed; establishes the bio production pattern on bio-internal content first.
5. **Retro on Hardy-Weinberg** — diagnose bio-specific spec gaps before scaling.
6. **Produce 18.04.02 muscle contraction** agent-drafted with editorial pass.
7. **Produce 17.09.02 action potential manually** — the densest cross-domain prereq node; human author judgment on cross-cite choices.
8. **Cross-domain audit on action potential specifically**: did the link contract survive? Any pending edges fail to resolve? Any essential cross-domain dependencies missed? This is the wave-defining test.
9. **Produce the essay** manually after the three units ship; cross-references the trees.
10. **Coordinate with chem plan** — bio's chem prereqs (§15.14 enzyme mechanism, §15.12–13 biomolecules) need to be in chem's near-term backlog; revisit `CHEMISTRY_PLAN.md` §11 to align.

*This plan is the canonical reference for the biology axis. When uncertain about bio section structure, tree boundaries, or coverage spines, check here. When updating, propagate to `OVERVIEW.md` §12 and `BIBLE_EXPANSION_PLAN.md` §6 the same day.*
