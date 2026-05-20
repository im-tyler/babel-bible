# Codex — Chemistry Plan

**Drafted 2026-05-17.** Per-domain plan for the Chemistry axis of the five-domain expansion. Sibling of `PHYSICS_PLAN.md` (just drafted) and (forthcoming) `BIOLOGY_PLAN.md`. Subordinate to `BIBLE_EXPANSION_PLAN.md`. Drafted in parallel with `BIOLOGY_PLAN.md` per the umbrella §6 sequence; both will be revised after Physics Wave 1 retro feeds back into the cross-domain link contract.

**Status:** Draft. Locks the three-section structure, hybrid (units + essays) mode, tier anchors, mastery endpoints, math/physics prereq cone, exclusions, coverage scaffold (since no Fast Track equivalent exists), and the seed slate.

Read before this plan: `OVERVIEW.md`, `BIBLE_EXPANSION_PLAN.md` (esp. §2.3 chem exclusions and §3 cross-domain contract), `PHYSICS_PLAN.md` (chem's biggest inbound dependency).

---

## §1 What this plan does

1. **Decomposes chemistry into three top-level sections** §14–16: general + physical chem (§14), organic chem (§15), inorganic chem (§16). Allocates internal chapter ordering within each.
2. **Defines hybrid mode operationally** for chem — what becomes a tiered unit, what becomes a synthesis essay, with concrete examples in each category.
3. **Specifies the coverage scaffold** — what chem-as-a-curriculum needs to include, since (unlike math/physics) no Fast Track equivalent exists. Builds the analog from ACS undergrad standards + canonical grad textbook chapter lists.
4. **Names Wave 1 seeds** — 3 units + 1 synthesis essay, validating the link contract on the chem axis.

It does not:
- Produce units (gated on `BIBLE_EXPANSION_PLAN.md` §10 patches + Physics Wave 1 retro).
- Re-derive exclusions (those are locked in `BIBLE_EXPANSION_PLAN.md` §2.3).
- Decide whether biochem mechanism's home stays in §15 or grows its own §17 sibling (deferred to §8 below).

---

## §2 Chemistry scope

### 2.1 In scope (v1)

Mainstream chemistry covering: atomic structure and the periodic table, chemical bonding (Lewis through MO theory), stoichiometry, states of matter, chemical equilibrium, chemical kinetics, acid-base chemistry, redox / electrochemistry, chemical thermodynamics, statistical mechanics of molecular systems, quantum chemistry (atoms and molecules), spectroscopy, organic structure and mechanism, organic synthesis principles, coordination chemistry, organometallic chemistry, descriptive inorganic chemistry, biochemistry **mechanism** (enzyme catalysis as kinetics, redox biochemistry, polymer chemistry of biopolymers, photochemistry of biomolecules).

### 2.2 Out of scope (v1) — explicit exclusions

From `BIBLE_EXPANSION_PLAN.md` §2.3 (verbatim, restated for navigability):

| Out of v1 | Goes to |
|---|---|
| Materials science (solid-state device physics, semiconductor properties, mechanical properties of materials) | Physics — condensed-matter subarea of §09–13 |
| Geochemistry, atmospheric chem, cosmochemistry, environmental chem | Not in v1 |
| Nuclear chem (decay modes, fission/fusion, radiochemistry of isotope production) — overlap with particle physics | Physics §12 / not v1 |
| Biochemistry **as it operates in specific organisms or pathways** (e.g., the citric acid cycle in *S. cerevisiae*, ribosome biology, organism-specific lipid metabolism) | Biology |
| Chemical engineering / process scale-up / reaction-engineering optimization | Not in v1 |
| Pharmaceutical chemistry as drug development (medicinal chem of specific therapeutic classes, ADMET as applied pharmacology) | Not in v1 |
| Analytical chemistry as a discipline-with-its-own-spine (chromatography theory, mass spec methodology as separate from spectroscopy fundamentals) | Folded into the other branches as application chapters; no standalone §14–16 chapter |

**Boundary rules:**
- *Biochemistry boundary* (recurring source of confusion): if the question is "what is the mechanism of this enzyme reaction, treated as a chemical event" → chem §15. If the question is "what is the role of this enzyme in *E. coli*'s glycolysis pathway" → bio. Wave-1 chem seed unit on enzyme kinetics is in chem; the citric-acid-cycle pathway is in bio.
- *Materials boundary*: if the question is "what governs this material's electronic / magnetic / mechanical behavior at the many-body level" → physics. If the question is "how do we synthesize a coordination compound with these properties" → chem §16. Solid-state chemistry (zeolites, framework solids) lives in §16; solid-state physics (band theory, Fermi liquid) lives in §12 / §11.
- *Quantum chem / atomic structure boundary*: atomic structure of *isolated atoms* (hydrogen, multi-electron with Hartree-Fock-level treatment) → §14.04 quantum chemistry. Atomic physics as relativistic / many-body QM → §12. The chem-side treatment cites *into* §12; the §12 treatment doesn't cite *into* chem.

### 2.3 What about "the rest of chem"?

Chemistry-as-discipline has many subspecialties not listed above (polymer science, surface chem, photochem-as-discipline, supramolecular, food chem, etc.). v1 treats these as **applications** of the three main branches, addressed as cross-link essays or single-unit summaries within the appropriate section. Standalone subsections deferred to v2+.

---

## §3 The three branches (or: why three, not five)

Unlike physics (where 5 branches map to 5 historically-distinct sub-disciplines with separable methodologies), chemistry breaks cleanly into **3** because the historical sub-disciplines (organic / inorganic / physical / biochem / analytical) overlap heavily and have been re-organized in modern pedagogy. The split below follows the standard modern undergrad-to-grad progression:

- **§14 General + Physical Chemistry** — atomic/molecular structure, bonding (through MO theory), states of matter, thermodynamics, kinetics, statistical mechanics, quantum chemistry, spectroscopy. The conceptual + computational spine that organic and inorganic both depend on.
- **§15 Organic Chemistry** — structure, mechanism, reaction classes, synthesis, biochem mechanism (chem-side).
- **§16 Inorganic Chemistry** — symmetry / group theory in chem, coordination chemistry, organometallic, descriptive inorganic.

The soft-DAG nature of chem is *internal* to each section: §14 can be entered from atomic structure, bonding, or thermo (three valid starting points); §15 has bond-and-mechanism vs structure-and-spectroscopy entry paths; §16 typically enters via symmetry/group theory or via coordination compounds.

---

### 3.1 §14 General + Physical Chemistry

**Internal ordering (loose; reflects standard pchem textbook structure but enterable from multiple points):**

| Chapter | Topic | Entry-point candidate? |
|---|---|---|
| 14.01 | Atomic structure — electron configurations, periodic trends | ✓ entry |
| 14.02 | Chemical bonding I — Lewis, VSEPR, valence bond | ✓ entry |
| 14.03 | Stoichiometry, gas laws, real gases | ✓ entry |
| 14.04 | Quantum chemistry of atoms — H atom, multi-electron via Hartree-Fock | (needs 14.01 + §12.06) |
| 14.05 | Chemical bonding II — MO theory, hybridization, diatomics through polyatomics | (needs 14.04) |
| 14.06 | Thermodynamics — laws, state functions, free energy, equilibrium | ✓ entry |
| 14.07 | Statistical mechanics of molecular systems — partition functions, ensembles applied to chem | (needs 14.06 + §11.04) |
| 14.08 | Chemical kinetics — rate laws, Arrhenius, transition state theory | (needs 14.06) |
| 14.09 | Solutions and phase equilibria — colligative properties, Raoult, eutectics | (needs 14.06) |
| 14.10 | Acid-base chemistry — Brønsted, Lewis, hard-soft, pKa systematics | (needs 14.02) |
| 14.11 | Redox / electrochemistry — half-reactions, Nernst, electrochemical cells, corrosion | (needs 14.06 + 14.10) |
| 14.12 | Spectroscopy I — UV-Vis, IR, NMR fundamentals (cross-refs §12.07 perturbation, §10 EM) |  |
| 14.13 | Spectroscopy II — mass spectrometry, X-ray, advanced NMR |  |

**Math / physics prereq cone:**

| From | Why |
|---|---|
| math §01 foundations | linear algebra (for MO theory matrix diagonalization) |
| math §02 analysis | calculus, ODEs (for kinetics) |
| math §07 rep theory | character tables, symmetry-adapted linear combinations (for 14.05, full force in §16) |
| physics §10 EM | light-matter interaction (for spectroscopy in 14.12–13) |
| physics §11 stat mech | statistical-mech foundations (for 14.07) |
| physics §12 QM | full QM foundations for quantum chemistry (for 14.04 onward) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Tro *Chemistry: A Molecular Approach*; Khan Academy / Crash Course Chemistry; Atkins *Chemistry: A Very Short Introduction* |
| Intermediate | Atkins & de Paula *Physical Chemistry*; Engel & Reid *Physical Chemistry* (alt); Oxtoby *Principles of Modern Chemistry* (gen-chem heavy) |
| Master | McQuarrie *Quantum Chemistry*; Levine *Quantum Chemistry*; McQuarrie *Statistical Mechanics*; Steinfeld-Francisco-Hase *Chemical Kinetics and Dynamics* |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Predict the polarity of a molecule from Lewis structure; balance equations and do stoichiometric calculations; identify what kind of reaction is occurring (acid-base, redox, precipitation) |
| Intermediate | Work Atkins problems including thermo state-function calculations, equilibrium with K and Q, rate-law derivation, MO diagrams for diatomics; predict NMR/IR spectra qualitatively |
| Master | Work McQuarrie / Levine problems; perform Hartree-Fock by hand on small systems; derive partition functions for chemical equilibrium; treat transition state theory rigorously; read a *J. Chem. Phys.* or *J. Phys. Chem.* paper and identify the technique |

**Outbound hooks (taxonomy):**
- → Biology: enzyme kinetics (chem-side) → metabolic regulation (bio-side); chemical thermodynamics → bioenergetics; spectroscopy → biological imaging / NMR of proteins
- → Philosophy: the bond as a non-classical object (orbital ontology); emergence of chemical properties from quantum mechanics; reduction vs autonomy of chemistry

---

### 3.2 §15 Organic Chemistry

**Internal ordering:**

| Chapter | Topic |
|---|---|
| 15.01 | Structure of organic molecules — hybridization, geometry, conformation, stereochemistry |
| 15.02 | Functional groups and nomenclature |
| 15.03 | Acids and bases in organic chem; pKa-based reasoning |
| 15.04 | Substitution and elimination — SN1 / SN2 / E1 / E2 mechanisms |
| 15.05 | Addition reactions to alkenes and alkynes |
| 15.06 | Aromatic chemistry — Hückel rule, EAS, NAS |
| 15.07 | Carbonyl chemistry — nucleophilic addition, condensation, enolates |
| 15.08 | Radical reactions and pericyclic reactions |
| 15.09 | Organometallic methods in synthesis — Grignard, cross-couplings (overlap with §16) |
| 15.10 | Retrosynthetic analysis and synthesis design |
| 15.11 | Spectroscopy of organic molecules — NMR (1D and 2D), MS, IR (cross-refs §14.12–13) |
| 15.12 | Biomolecules I — amino acids, peptides, proteins (chem-side: structure + mechanism) |
| 15.13 | Biomolecules II — carbohydrates, lipids, nucleic acids (chem-side) |
| 15.14 | Enzyme mechanism — catalysis from a chemical-mechanism standpoint (boundary with bio) |
| 15.15 | Polymers — synthetic + biopolymer chemistry |
| 15.16 | Photochemistry of organic molecules (cross-refs §12 QM, §10 EM) |

**Math / physics prereq cone:**

| From | Why |
|---|---|
| §14.02 | Lewis structures, valence bond, hybridization |
| §14.05 | MO theory (for advanced understanding of aromaticity, pericyclics) |
| §14.08 | Kinetics (for mechanism analysis) |
| §14.10 | pKa systematics (for acid-base reasoning) |
| §14.12 | Spectroscopy foundations |
| physics §12 QM | for orbital symmetry / Woodward-Hoffmann at master |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Klein *Organic Chemistry as a Second Language*; Crash Course / Khan; Vollhardt-Schore (beginner-tier sections) |
| Intermediate | Clayden, Greeves, Warren *Organic Chemistry* (gold standard); Vollhardt-Schore *Organic Chemistry* (alt); Bruice (alt) |
| Master | Carey-Sundberg *Advanced Organic Chemistry* Parts A + B; March's *Advanced Organic Chemistry*; Anslyn-Dougherty *Modern Physical Organic Chemistry*; Hartwig *Organotransition Metal Chemistry* |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Identify functional groups; predict whether a reaction will proceed and what its product is for simple substrates; draw Lewis structures correctly |
| Intermediate | Predict mechanism and product for arbitrary problems from Clayden including stereochemistry; push curly arrows correctly; analyze 1D NMR / IR / MS to identify a small unknown; perform a multi-step retrosynthesis at the level of a Clayden end-of-chapter problem |
| Master | Work Carey-Sundberg / Anslyn problems; design a multi-step synthesis with stereocontrol; analyze 2D NMR (COSY, HSQC, NOESY) on a complex molecule; read a JACS *Org. Lett.* or *Angew.* paper and identify the disconnection logic and key step |

**Outbound hooks:**
- → Biology: amino acid chemistry → protein folding; nucleic acid chemistry → genetic biology; enzyme mechanism (§15.14) → enzyme biology in specific systems
- → Philosophy: chemical structure as informational vs as physical (the question of how the *formula* relates to the *reality*); the Lewis bond as a fictional vs real entity

---

### 3.3 §16 Inorganic Chemistry

**Internal ordering:**

| Chapter | Topic |
|---|---|
| 16.01 | Atomic and ionic structure across the periodic table — periodic trends quantified |
| 16.02 | Symmetry and group theory in chemistry — point groups, character tables (heavy cross-ref to math §07) |
| 16.03 | Crystal field theory and ligand field theory — d-orbital splitting, spectrochemical series |
| 16.04 | Coordination chemistry — geometries, isomerism, stability constants, kinetics |
| 16.05 | Organometallic chemistry — bonding (16-electron / 18-electron rules), reactivity, catalysis |
| 16.06 | Bioinorganic chemistry — metalloenzymes, electron-transfer proteins (chem-side; cross-refs bio) |
| 16.07 | Solid-state chemistry — ionic, covalent, metallic solids; band structure intro (boundary with physics §11/§12) |
| 16.08 | Main-group chemistry — descriptive coverage of s- and p-block |
| 16.09 | Transition-metal descriptive chemistry — d-block characteristic reactivity |
| 16.10 | Lanthanides, actinides, and f-block |
| 16.11 | Spectroscopy of inorganic compounds — Mössbauer, EPR, advanced NMR (cross-refs §14.13) |

**Math / physics prereq cone:**

| From | Why |
|---|---|
| §14.04–05 | atomic and molecular orbital theory |
| math §07 rep theory | symmetry-adapted linear combinations, character tables, full force at master |
| physics §12 QM | crystal field theory (16.03) needs full QM foundations |
| physics §11 stat mech / §12 condensed matter | for 16.07 solid-state |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Atkins / Shriver *Chemistry: A Very Short Introduction* (Beginner sections); Crash Course relevant episodes |
| Intermediate | Housecroft-Sharpe *Inorganic Chemistry*; Miessler-Fischer-Tarr *Inorganic Chemistry* (alt) |
| Master | Cotton-Wilkinson *Advanced Inorganic Chemistry*; Hartwig *Organotransition Metal Chemistry*; Crabtree *The Organometallic Chemistry of the Transition Metals*; Lippard-Berg *Principles of Bioinorganic Chemistry* |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Identify common coordination geometries; recognize what kind of compound (covalent solid vs metallic vs ionic) something is; predict simple periodic trends |
| Intermediate | Work Housecroft / Miessler problems on coordination geometry, isomerism, d-orbital splitting, organometallic e-counting; apply character tables to molecular symmetry |
| Master | Cotton-Wilkinson problems; ligand-field-theory-based predictions of spectra and magnetism; rationalize organometallic catalytic cycles mechanistically; read a JACS *Inorg. Chem.* or *Organometallics* paper |

**Outbound hooks:**
- → Biology: metalloenzymes (§16.06) → biological electron transfer, oxygen handling, photosynthesis center chemistry; bioinorganic models
- → Physics: solid-state chem (§16.07) ↔ condensed-matter physics (§12.17); molecular magnetism ↔ quantum magnetism
- → Philosophy: structural realism in molecular ontology; the chemistry-physics reduction question (does crystal field theory "reduce" to QM, or is it autonomous?)

---

## §4 Hybrid mode — what's a unit vs an essay in chemistry

`BIBLE_EXPANSION_PLAN.md` §2.6 locks the general criteria. Concretely, in chem:

### 4.1 Tiered units (most of chem)

Chemistry has a high unit-to-essay ratio because most chemical content **has** a testable endpoint, clear prereq tree, and 20–50min scope:
- *Mechanisms* — predict product / explain selectivity / push arrows.
- *Theoretical concepts* — derive MO diagram / apply group theory / compute thermo quantities.
- *Reaction classes* — recognize, predict, design.
- *Spectroscopy interpretation* — identify a structure from a spectrum.

### 4.2 Synthesis essays (sparingly)

Topics that span chapters or are interpretive rather than mechanism-teaching:

| Candidate essay | Why an essay, not a unit |
|---|---|
| "What reactivity *is*, structurally" | Cuts across orbital theory (14.05), kinetics (14.08), thermo (14.06), and pKa systematics (14.10) — no single prereq tree |
| "The chemical bond — many-body phenomenon vs effective two-center object" | Interpretive; treats the bond ontology question across Lewis / VB / MO / DFT framings |
| "What chemistry inherits from physics, and what is autonomous" | Cross-domain philosophical synthesis; pairs with phil §20 |
| "Periodic-table conceptual unity — why does the table work" | Synthesis across §14.01, atomic structure, and the historical / pedagogical question of why the table predicts so much |
| "Synthesis as a discipline — what makes a good retrosynthesis" | Meta-pedagogical; not teaching one mechanism |
| "Spectroscopy as inverse problem" | Spans the three sections; treats the conceptual identity of identifying structure from observation |

**Initial essay budget:** start with ≤ 5 essays across the chem axis. Earn more case-by-case. Essays without a clear "this couldn't be a unit because X" justification get rejected at review.

### 4.3 Where they live in the file tree

Locked (per `UNIT_SPEC.md` §2.2):

- **Tiered chem units** live at `content/14-genchem-pchem/`, `content/15-orgchem/`, `content/16-inorgchem/` per the standard unit layout.
- **Essays** live at `site/src/content/chemistry/NN-slug.md` with frontmatter:
  ```yaml
  id: <14|15|16>.essays.NN
  applies_to: [<section-numbers>]   # list of sections it synthesizes
  ```
- An essay's `id` uses the **primary section** prefix — the section the essay most belongs to. Cross-section synthesis essays declare every section they span in `applies_to:`. E.g., "The chemical bond" essay synthesizes §14 (gen+phys chem) and §15 (organic), with potential reach into phil §20 — its ID is `14.essays.01` (primary), `applies_to: [14, 15, 20]`.

---

## §5 Coverage scaffold — what to include, given no Fast Track equivalent

Chemistry has no canonical equivalent of the Fast Track booklist. Three sources combine to form the chem coverage scaffold:

### 5.1 ACS undergraduate-curriculum standards (the spine)

The American Chemical Society publishes guidelines that define what a B.S. chem curriculum includes. v1 chem covers every topic the ACS guidelines name as core for the four sub-disciplines (general / organic / physical / inorganic), at Beginner + Intermediate tiers. Specifically:

- **Foundation topics** (anything in a first-year gen-chem course): §14.01–03, §14.06, §14.09, §14.10, §15.01–02, §16.01.
- **Core breadth** (the 2nd–3rd year courses): rest of §14, §15.01–11, §16.01–05, §16.08–09.
- **Capstone topics** (4th year electives): §15.12–16, §16.06–07, §16.10–11, §14.13.

### 5.2 Graduate-textbook chapter lists (the master tier)

For the Master tier, use the canonical grad-tier textbooks' chapter lists as the topic spec:

| Section | Master-tier spec source |
|---|---|
| §14 quantum chem | McQuarrie *Quantum Chemistry* chapter list |
| §14 stat mech | McQuarrie *Statistical Mechanics* chapter list |
| §14 kinetics | Steinfeld-Francisco-Hase chapter list |
| §15 organic | Carey-Sundberg Parts A + B combined chapter list |
| §15 phys organic | Anslyn-Dougherty chapter list |
| §16 organometallic | Hartwig / Crabtree chapter list |
| §16 inorganic | Cotton-Wilkinson chapter list |
| §16 bioinorganic | Lippard-Berg chapter list |

A unit exists at Master tier when its corresponding grad-textbook chapter (or coherent chapter-cluster) is covered.

### 5.3 Where to source reference material from

`reference/` archive must be expanded for chem. Currently it has math/physics-focused notes (Tong, quantum-well, etc.). For chem we'll need (sourcing TBD per per-unit production):
- Open-access chem texts where they exist (some ACS publications, OpenStax Chemistry).
- Lecture notes from MIT OCW, Stanford Online, etc. for chem courses (license-permitting).
- Primary-literature pulls for Master-tier units (J. Chem. Phys., JACS, Inorg. Chem.).

**Sourcing is a Wave 1 chem deliverable.** Same posture as the math/physics `NEED_TO_SOURCE.md` — chem will have its own.

---

## §6 First wave — three seed units + one synthesis essay

Purpose: validate the link contract on chem material with both unit and essay forms exercised.

| Branch | Seed unit / essay | Why this one |
|---|---|---|
| §14 PChem | **14.05.02 Molecular orbital theory for homonuclear diatomics** | Clean cite to §14.02, §12 QM (orbital reps), math §01 linear algebra; hooks out to bio (oxygen biochemistry depends on O2 MO diagram), phil (orbital ontology); MO theory is the chem-side concept that most directly emerges from physics QM, so it stress-tests cross-domain prereqs and confirmed-hook semantics |
| §15 OChem | **15.04.02 SN1 vs SN2 mechanism** | Canonical intermediate-tier organic unit; tests kinetics + stereochemistry + mechanism; well-anchored in Clayden; hooks out to bio (enzymatic SN reactions in DNA / RNA chemistry), phil (mechanism as scientific-realism case study) |
| §16 InorgChem | **16.03.02 Crystal field splitting in octahedral complexes** | Cleanly tests math §07 rep theory cross-cite; hooks out to bio (metalloenzyme active sites), physics §12 (CFT as application of QM angular momentum) |
| §14 essay | **"The chemical bond — many-body phenomenon vs effective two-center object"** | Cuts across 14.02, 14.05, and §12 QM; pairs with phil §20; exercises essay-with-cross-references shape |

**Sequence:** 14.05.02 → 15.04.02 → 16.03.02 → essay.

Rationale for order:
- **MO theory first** because it's the strongest physics-side dependency (clean cross-domain prereq to §12 QM); validates the link contract under the heaviest dependency.
- **SN1/SN2 second** because it's mostly self-contained within chem; calibrates the chem-side mechanism rubric.
- **Crystal field third** because it brings in math §07 (rep theory) — different prereq axis.
- **Essay last** because it benefits from the three units already existing — it can cite them.

### 6.1 Success criteria (Wave 1 chem)

The wave succeeds if:

- [ ] All 3 units exist in `content/1{4..6}-<slug>/` per `UNIT_SPEC.md` with `hooks_out` populated.
- [ ] The synthesis essay exists at `site/src/content/chemistry/01-the-chemical-bond.md` with ID `14.essays.01` and frontmatter compatible with the cross-domain link contract.
- [ ] All `hooks_out` to physics (`§09–13`) land on units that either exist (e.g., `12.01.02` if Physics Wave 1 shipped) or are explicitly pending per the `pending_prereqs` mechanism.
- [ ] At least one `hooks_out → bio` and one `hooks_out → 20.essays.NN` exist across the wave.
- [ ] The synthesis essay declares `applies_to: [14, 15, 20]` (or chosen frontmatter shape) so the cross-domain audit can find it.
- [ ] Reviewer attestation logged for the units; reviewer for the essay is the chem-side editorial reviewer.
- [ ] Retro into `docs/pilot-lessons.md`.

The wave *fails* if:

- The MO unit ships without a `prerequisites` entry into §12 QM. (Would mean we didn't actually exercise cross-domain prereqs on the chem axis.)
- The essay's cross-refs into §14 / §15 units don't resolve (validator should fail the build).
- More than ~2 hours per unit production once the pattern is established — would suggest chem rubric needs adjustment before scaling.
- No outbound hooks to bio across the 3 units — chem→bio is the densest expected hook surface; an empty result is a strong signal something's off.

### 6.2 Production strategy

| Item | Strategy | Notes |
|---|---|---|
| 14.05.02 MO theory | **Manual** | Pattern-setter for chem; first unit gets one human hand-pass |
| 15.04.02 SN1/SN2 | Agent-drafted + editorial pass | Standard textbook content; agent should perform |
| 16.03.02 Crystal field | Agent-drafted + editorial pass | Same |
| 14.essays.01 essay | Manual | Essay-mode is new — first one gets full human authorship before establishing a template |

---

## §7 Reviewer roster

Tyler's chem background is **not assumed** at expert level (cf. PHYSICS_PLAN where gauge-theory expertise is named). Default posture: outside reviewer recruitment is a **harder problem for chem than for physics**, because there is no obvious researcher overlap with the math/physics roster.

| Branch | Tyler-solo? | Outside reviewer needed |
|---|---|---|
| §14 gen + phys chem | Yellow at beginner/intermediate; Red at master (quantum chem, stat mech of molecular systems) | Quantum chemist (master-tier 14.04–05); physical chemist (master-tier 14.06–08) |
| §15 organic chem | Yellow at beginner; Red at intermediate/master (Clayden+ depth) | Organic chemist (intermediate/master across 15.04–11); synthesis specialist (15.10, master) |
| §16 inorganic chem | Yellow with rep-theory grounding from math §07; Red at master (Cotton-Wilkinson + Hartwig depth) | Inorganic chemist (master across 16.03–05, 16.08–10); bioinorganic specialist (16.06) |

**Recruitment priority (before Wave 2):**
1. **Organic chemist** — single highest-bandwidth need; §15 has the most chapters at intermediate+master and the least Tyler-solo coverage.
2. **Quantum chemist** — covers the master-tier of §14 and physical-organic depth.
3. **Inorganic / bioinorganic chemist** — covers §16 and the bio cross-overs.

**LLM-augmented review** (per `REVIEWER_PLAN.md`) is more relied-on for chem than physics because the gap between Tyler's expertise and the rubric's demands is wider. Honest acknowledgment: LLM review catches "did the author make a basic mechanism error" but not "is the master-tier treatment of this Cotton-Wilkinson chapter actually publication-quality." Master-tier chem units should be flagged for human review and held in draft until a reviewer is available.

---

## §8 Open questions (deferred)

| Question | Deferred to | Why now is wrong |
|---|---|---|
| Does biochem mechanism stay in §15.12–14 + §16.06, or grow its own §17 section? | After Wave 2, when biochem-mechanism unit count is measurable | Premature; can't predict the volume without producing |
| Should "analytical chemistry" become its own section once spectroscopy and electrochemistry units accumulate? | After Wave 3 at earliest | Treat as application chapters first; consolidate later if mass justifies it |
| How does v1 handle topics that are neither cleanly chem nor cleanly anything else (e.g., chemical biology — the "small molecules in cells" subdiscipline)? | Per-unit, as those units come up | Most v1 production won't hit this until biology gets going |
| Does v1 ship any nuclear / radiochemistry coverage? | Per per-unit production demand; default no | Out of scope per umbrella |
| Whether to formalize an "essay budget" cap (e.g., ≤ 8 essays per domain in v1) | After Wave 2, when essay accumulation rate is observable | Premature limit-setting; criteria in `BIBLE_EXPANSION_PLAN.md` §2.6 should self-regulate |

---

## §9 Risks

| Risk | Mitigation |
|---|---|
| Reviewer recruitment for chem stalls; Wave 2+ master-tier units accumulate in draft without sign-off | Recruitment is named in §7 as a Wave-2-blocker. If unrecruited by then, restrict chem production to Beginner+Intermediate tiers and defer Master to v0.x→v1 transition. |
| The MO theory seed unit (14.05.02) needs §12 QM units that don't exist yet (Physics Wave 1 ships §12.01.02 Stern-Gerlach, but MO theory needs more) | Use `pending_prereqs: true` on the prereq edges into §12; register pending edges in `manifests/deps.json`. Same posture as math waves. |
| Chem essay accumulation degrades into a "chem blog" rather than a curriculum | §4.2 essay candidate list is finite (≤ 5 for Wave 1+2); each new essay needs explicit "couldn't be a unit because X" justification at review. |
| Boundary creep: biochem-in-organism units sneak into §15 because authors don't enforce the chem-vs-bio split | Reviewers check §2.2 boundary rules per unit; specifically the citric-acid-cycle test (chem if mechanism only; bio if pathway-in-organism). |
| Coverage scaffold (ACS + grad chapter lists) is more porous than Fast Track — gaps go undetected | `manifests/production/plan.json` (per `FASTTRACK_COVERAGE_ROADMAP.md` analog) extended with `chem-coverage` view: each scaffold-source chapter mapped to one-or-more Codex units. Unmapped → gap. Audit deliverable. |

---

## §10 Decision log entries (to be added to `OVERVIEW.md` §12 on the same date)

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-17 | Chem decomposes into three sections §14 (gen + pchem), §15 (organic), §16 (inorganic), not the historical five (separating biochem and analytical) | Biochem mechanism folds into §15; analytical methods fold into the spectroscopy chapters of §14/§15/§16. Reduces section count; matches modern undergrad/grad pedagogy. |
| 2026-05-17 | Coverage scaffold = ACS undergrad standards (Beginner + Intermediate) + canonical grad textbook chapter lists (Master) | No Fast Track equivalent; needed an explicit source-of-truth for what chem coverage looks like. Avoids "arbitrary holes" risk. |
| 2026-05-17 | Boundary rules locked: biochem-mechanism → chem §15.14; biochem-in-organism → bio. Materials → physics. Crystal-field-theory → chem §16.03 (cites into physics §12 QM, doesn't relocate). Solid-state chem → §16.07; solid-state physics → §12.17 | Without explicit boundaries, chem scope balloons during production and creates duplication with bio and physics. |
| 2026-05-17 | Hybrid-mode essay budget capped to ≤ 5 across chem v1 (initial); essay-list-of-candidates fixed | Essays accumulate worse than units because no validator gates proliferation. Hard initial budget forces discipline. |
| 2026-05-17 | Wave 1 chem: 3 units + 1 essay (14.05.02 MO theory → 15.04.02 SN1/SN2 → 16.03.02 crystal field → essay on the chemical bond) | Validates link contract under the heaviest physics dependency (MO theory ← §12 QM) first; calibrates chem-side mechanism rubric on standard material; ends with the essay form |
| 2026-05-17 | Chem reviewer recruitment is gated as a Wave-2 blocker; master-tier production restricted otherwise | Honest about reviewer-bandwidth being the limiting factor for chem specifically (Tyler's chem expertise is less than math/physics). |

---

## §11 Next immediate actions

Gated on `BIBLE_EXPANSION_PLAN.md` §10 patches AND Physics Wave 1 retro:

1. **Sourcing pass** — populate `reference/_meta/SOURCES.md` extensions for chem; identify license-permissive primary sources for the first chem units. Same posture as math/physics `NEED_TO_SOURCE.md`.
2. **Coverage-scaffold manifest** — create `manifests/production/chem-coverage.json` mapping ACS scaffold + grad chapter lists to (eventually) Codex unit IDs. Empty initially; populated as units ship.
3. **Reviewer recruitment** — start outreach for the three named reviewer roles (§7). Bandwidth target: 1 hire by start of Wave 2.
4. **Produce 14.05.02 MO theory manually** — the chem-side equivalent of pilot-unit-#1. Surfaces chem-specific spec gaps before scaling.
5. **Retro on 14.05.02** — what worked, what's missing in the spec, what the chem-side production rubric needs.
6. **Produce 15.04.02 + 16.03.02** agent-drafted with editorial pass.
7. **Produce the synthesis essay** manually; establishes the essay-mode template for non-philosophy domains.
8. **Cross-domain audit** on Wave 1 chem: review the `hooks_out → bio` and `hooks_out → phil` proposals; harvest the `hooks_in from physics` to verify which physics units are needed sooner.

*This plan is the canonical reference for the chemistry axis. When uncertain about chem section structure, branch boundaries, or coverage scaffold, check here. When updating, propagate to `OVERVIEW.md` §12 and `BIBLE_EXPANSION_PLAN.md` §6 the same day.*
