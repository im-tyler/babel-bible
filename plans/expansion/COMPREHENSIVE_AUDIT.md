# B.I.B.L.E Comprehensive Curriculum Audit

*Generated 2026-06-15. Pure analysis — no content files were modified. This is the master planning document for all future development.*

---

## Methodology

This audit was produced by exhaustively walking the live `content/` tree (sections 00–50). For every section it records:

1. **Existing chapters** with unit counts (counted as `*.md` files directly inside each chapter directory).
2. **Numbering anomalies** — duplicate chapter numbers (e.g. two `04-*` dirs), gaps in the numbering sequence, empty directories, and slug-only (un-numbered) chapters mixed with numbered ones.
3. **Missing chapters** — standard topics a comprehensive curriculum should carry as their own chapter, benchmarked against: (a) standard university curricula for the subject, (b) the tier_anchors and reference books actually cited inside the units, and (c) the spine audits already recorded under `plans/expansion/<spine>/_audit/*.gaps.md`.
4. **Missing topics** — sub-topics that should live inside existing chapters but have no unit.
5. **Coverage rating** — Strong / Good / Adequate / Thin / Chaotic, with a one-line justification.

Sources cross-checked: `OVERVIEW.md`, `BIBLE_EXPANSION_PLAN.md`, `plans/expansion/BACKLOG.md` (the spine-completion log for spines 1–12 + Tier C), the `docs/plans/*_PLAN.md` domain plans, and the `plans/fasttrack/` book-equivalence plans. Where the BACKLOG records that a section already converged "loop-until-dry" against its anchor books, that is honored — the audit flags **only gaps the book audits would not catch** (i.e. structural / curricular / cross-domain holes, not per-book theorem gaps).

Total corpus at audit time: **51 sections, 2,397 units, ~360 chapters**.

**Severity conventions used below:**
- `[BLOCKER]` — redundancy, empty dirs, or numbering collisions that break the DAG/validator or actively confuse navigation. Fix before adding content.
- `[GAP]` — a standard chapter or topic that should exist but does not.
- `[THIN]` — chapter exists but is under-resourced (typically 1 unit) for its curricular weight.
- `[NOTE]` — observation, not necessarily action.

---

## Section-by-Section Analysis

### Section 00: Precalculus  ·  27 units / 13 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-numbers (4) · 02-set-and-function (1) · 03-equations-lines (3) · 04-inequalities (1) · 05-exp-log (3) · 06-trig-right (3) · 07-trig-unit-circle (2) · 08-trig-identities (2) · 09-coordinate-geom (1) · 10-conics (1) · 11-polar-parametric (2) · 12-induction-combinatorics (2) · 13-geometry (2).

**Missing chapters:**
- `[GAP]` **Sequences and series** (arithmetic, geometric, limits of sequences) — the standard bridge into calculus. Currently folded nowhere; calculus assumes it.
- `[GAP]` **Complex numbers basics** (rectangular/polar form, De Moivre) — required prerequisite for several §02 and §06 units and for §12 quantum.
- `[GAP]` **Vectors in 2D/3D** — appears only deep inside §01 linear algebra; a pre-calc vector chapter is the expected on-ramp.
- `[GAP]` **Systems of equations & matrices (intro)** — only systems live implicitly in 03-equations-lines.

**Missing topics:** binomial theorem (partly in 12-induction-combinatorics but not its own unit); partial fractions (needed for integration); function transformations/parent-graphs.

**Coverage:** Solid for the trigonometry + functions spine; the gaps are the four standard "algebra II" topics (sequences, complex numbers, vectors, systems) that a calculus-bound curriculum expects.

---

### Section 01: Foundations  ·  45 units / 3 chapters  ·  Rating: **Thin (critical gap)**

**Existing chapters (units):** 01-linear-algebra (20) · 02-algebra (2) · 02-groups (23).

**Anomalies:**
- `[BLOCKER]` Two chapters share number `02` (`02-algebra` and `02-groups`). Collision.

**Missing chapters — this is the single biggest structural hole in the math corpus:**
- `[GAP]` **Rings & modules** — no chapter. Graduate algebra cannot proceed without it.
- `[GAP]` **Fields & Galois theory** — no chapter. Galois appears only downstream in 21-number-theory (galois-reps) and 42-mathematical-logic, never built up from first principles.
- `[GAP]` **Commutative algebra** — no chapter. §04 algebraic geometry and §21 number theory both silently depend on it.
- `[GAP]` **Homological algebra** — no chapter (the derived-functor machinery is referenced across §03, §04, §41 but never taught).
- `[GAP]` **Multilinear & advanced linear algebra** (tensor/exterior algebra proper) — 03-modern-geometry/01-tensor-algebra carries some, but it is not in "foundations."
- `[THIN]` `02-algebra` has only 2 units — effectively a stub.

**Coverage:** Linear algebra and group theory are strong; the rest of a standard graduate-algebra sequence (rings → modules → fields → Galois → commutative → homological) is absent as organized chapters. This is the highest-leverage math build-out remaining.

---

### Section 02: Analysis  ·  122 units / 21 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-topology (9) · 02-real-numbers (1) · 03-sequences-series (2) · 04-integration (4) · 05-multivariable-differentiation (6) · 06-transcendental (5) · 07-measure-theory (12) · 08-ode (2) · 09-complex (1) · 10-harmonic (6) · 11-functional-analysis (9) · 12-ode (10) · 13-pde (9) · 14-microlocal-analysis (5) · 15-stochastic-analysis (5) · 16-sobolev-weak-solutions (5) · 17-elliptic-regularity (9) · 18-parabolic-hyperbolic (6) · 19-calderon-zygmund-singular-integrals (5) · 20-littlewood-paley-interpolation (5) · 21-dispersive-strichartz (6).

**Anomalies:**
- `[BLOCKER]` **Duplicate ODE chapter:** `08-ode` (2 units) and `12-ode` (10 units). The 2-unit `08-ode` is a leftover stub; merge or delete.
- `[NOTE]` `09-complex` (1 unit) is a stub — the real complex-analysis mass lives in §06-riemann-surfaces/01-complex-analysis (32 units). Reconcile.

**Missing chapters:**
- `[GAP]` **Single-variable differentiation** as a dedicated chapter — there is integration (04) and multivariable differentiation (05) but the univariate derivative chapter is implicitly inside 02-real-numbers/03-sequences-series. Worth checking whether the rigorous derivative definition + mean-value theory has a home.
- `[GAP]` **Fractional calculus / variational calculus** — minor.

**Coverage:** Among the deepest sections in the corpus (Spine 2 expanded it). The graduate PDE/harmonic tail (ch 14–21) is exceptional. Only cleanup needed (ODE dup, complex stub).

---

### Section 03: Modern Geometry  ·  243 units / 16 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-tensor-algebra (5) · 02-manifolds (1) · 03-lie (7) · 03.15-morse-homology (13) · 04-differential-forms (27) · 05-bundles (12) · 06-characteristic-classes (22) · 07-gauge-theory (28) · 08-k-theory (14) · 09-spin-geometry (30) · 10-conformal-field-theory (4) · 11-infinite-dim-lie (5) · 12-homotopy (58) · 13-spectral-sequences (9) · 14-quantum-representations (2) · 16-tqft (6).

**Anomalies:**
- `[NOTE]` Chapter `15` is missing (jumps 14 → 16). Either intentional gap or a renumbering artifact.
- `[THIN]` `02-manifolds` (1 unit) — yet §48-differential-geometry/02-manifolds has 45 units. These overlap and should be reconciled (see §48).

**Missing chapters:**
- `[GAP]` **Riemannian geometry** as a named chapter (connection, curvature, geodesics, comparison theorems). Currently smeared across §03-manifolds and §48. The canonical grad course (do Carmo / Lee / Petersen) has no single home.
- `[GAP]` **Algebraic topology** (fundamental group, homology, cohomology beyond spectral sequences) — `12-homotopy` is large (58) but homology theory proper is thin.

**Coverage:** The mathematical-physics geometry spine (spin, gauge, characteristic classes, K-theory, CFT, TQFT) is world-class. Classical differential/Riemannian geometry organization is the gap.

---

### Section 04: Algebraic Geometry  ·  135 units / 14 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-sheaves (4) · 02-schemes (6) · 03-cohomology (23) · 04-curves (12) · 04-riemann-roch (1) · 05-divisors (10) · 05-surfaces (3) · 06-coherent (2) · 07-projective (4) · 08-differentials (3) · 09-hodge (9) · 10-moduli (25) · 11-toric (16) · 12-tropical (17).

**Anomalies:**
- `[BLOCKER]` Duplicate numbers: `04-curves`/`04-riemann-roch` and `05-divisors`/`05-surfaces`. Riemann–Roch is a theorem, not a sibling chapter of "curves" — should fold into 04-curves or 03-cohomology.

**Missing chapters:**
- `[GAP]` **Étale cohomology & ℓ-adic methods** — no chapter; central to modern AG and to the Langlands bridge in §21.
- `[GAP]` **Abelian varieties** — only in §06-riemann-surfaces/06-jacobians; no AG-side chapter.
- `[GAP]` **Birational geometry / Minimal Model Program** — no chapter.
- `[GAP]` **Intersection theory** — partly in divisors but not developed (Fulton).
- `[GAP]` **Deformation theory** — no chapter.
- `[GAP]` **Derived algebraic geometry** — no chapter.
- `[THIN]` `06-coherent` (2 units) — coherent sheaves deserve more.

**Coverage:** Strong on schemes/cohomology/curves/moduli/toric. Missing the étale/abelian/birational/intersection tier that a Hartshorne-then-Grothendieck curriculum expects.

---

### Section 05: Symplectic  ·  98 units / 16 chapters  ·  Rating: **Good (chaotic naming)**

**Existing chapters (units):** 09-kam (6) · 11-geometric-quantization (6) · 12-singularities (3) · 14-topological-hydrodynamics (8) · 15-optimal-transport (2) · almost-complex (3) · coadjoint (3) · contact (4) · floer (4) · gromov (3) · hamiltonian (13) · integrable (6) · lagrangian-mechanics (13) · lagrangian (11) · moment-reduction (7) · symplectic-linear (6).

**Anomalies:**
- `[BLOCKER]` **No chapters 01–08.** Numbered chapters start at 09; everything foundational (symplectic-linear, lagrangian, hamiltonian, almost-complex) lives under un-numbered slug dirs. The ordering is invisible to a reader. Renumber.
- `[BLOCKER]` `lagrangian-mechanics` vs `lagrangian` — ambiguous split (one is mechanics-flavored, one is the Lagrangian submanifold theory). Disambiguate by name.

**Missing chapters:**
- `[GAP]` **Mirror symmetry** — no chapter; the symplectic-side counterpart to §04's AG side. High research salience.
- `[GAP]` **Poisson geometry** — no chapter.

**Coverage:** Substantive and research-grade content; the problem is purely organizational (no low-numbered chapters, ambiguous sibling slugs).

---

### Section 06: Riemann Surfaces  ·  100 units / 13 chapters  ·  Rating: **Strong (cleanup needed)**

**Existing chapters (units):** 01-complex-analysis (32) · 02-branch-points (2) · 02-coverings (1) · 03-riemann-surfaces (5) · 04-cohomology (5) · 04-riemann-roch-rs (1) · 05-divisors-bundles (3) · 06-jacobians (9) · 07-several-variables (2) · 08-vhs (3) · 09-stein (8) · 10-several-complex-variables (23) · 11-open-surfaces (6).

**Anomalies:**
- `[BLOCKER]` Duplicate numbers: `02-branch-points`/`02-coverings`, `04-cohomology`/`04-riemann-roch-rs`.
- `[BLOCKER]` **`07-several-variables` and `10-several-complex-variables` overlap** — two chapters for the same subject (the 23-unit one is the real content).

**Missing chapters:**
- `[GAP]` **Teichmüller theory** — no chapter (central to moduli of RS).
- `[GAP]` **Kleinian groups / uniformization depth** — thin.

**Coverage:** Deep (01-complex-analysis alone is 32 units). Reconciliation of the several-variables duplication and the Riemann–Roch mini-chapter is the main debt.

---

### Section 07: Representation Theory  ·  90 units / 9 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-foundations (13) · 02-character (6) · 03-highest-weight (1) · 04-classification (1) · 04-symmetric (12) · 05-symmetric (17) · 06-lie-algebraic (30) · 07-compact-lie (9) · 07-harmonic-analysis (1).

**Anomalies:**
- `[BLOCKER]` Duplicate numbers: `04-classification`/`04-symmetric` and two "symmetric" chapters (`04-symmetric`, `05-symmetric`) — almost certainly a split of symmetric-function/symmetric-group material that was never reconciled.
- `[BLOCKER]` `07-compact-lie`/`07-harmonic-analysis` collide.
- `[THIN]` `03-highest-weight` and `04-classification` have 1 unit each.

**Missing chapters:**
- `[GAP]` **Representation theory of finite groups** as a developed chapter (some in foundations, but no dedicated treatment à la Serre).
- `[GAP]` **Vertex algebras / affine Lie algebras** — no chapter.
- `[GAP]` **Representations of algebraic groups / D-modules** — no chapter.

**Coverage:** Lie-algebraic representation theory (06, 30 units) is excellent. The symmetric-function duplication and several 1-unit chapters need resolution.

---

### Section 08: Stat Mech (mathematical-physics flavor)  ·  61 units / 17 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 10-qft (15) · 13-exactly-solved-models (7) · critical (2) · fluctuations (1) · gaussian (2) · lattice-gauge (4) · linear-response (1) · mean-field (3) · onsager (2) · partition (4) · path-integral (1) · quantum-gases (1) · real-gases (1) · rg (5) · statistical-field-theory (8) · topological-defects (3) · wick (1).

**Anomalies:**
- `[NOTE]` No numbered chapters 01–09 or 11–12; all slug-named. Acceptable here since the subject is non-linear, but inconsistent with §11.
- `[NOTE]` **Overlaps §11-stat-mech-physics** — the OVERVIEW/BIBLE_EXPANSION_PLAN flags re-homing §08 under §11 as an open decision. This duplication is a known open item, not a new finding.

**Missing chapters:**
- `[THIN]` Many 1-unit chapters (fluctuations, linear-response, path-integral, quantum-gases, real-gases, wick) — consolidatable.

**Coverage:** Strong on the math-phys side (lattice gauge, exactly solved, RG, stat field theory). Decide §08 vs §11 consolidation.

---

### Section 09: Classical Mechanics  ·  46 units / 8 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-newtonian (8) · 02-lagrangian (6) · 03-symmetries-noether (5) · 04-hamiltonian (9) · 05-canonical (5) · 06-integrable (4) · 07-continuum (4) · 08-chaos (5).

**Missing chapters:**
- `[GAP]` **Rigid-body dynamics** (Euler angles, tops, inertia tensor) — usually its own chapter in Goldstein/Taylor; folded into newtonian?
- `[GAP]` **Celestial mechanics / few-body problem** — no chapter (ties to §13 GR and §28 astronomy).
- `[GAP]` **Continuum mechanics depth** — 07-continuum has 4 units; elasticity, fluid mechanics, Navier–Stokes could expand.

**Coverage:** Full undergraduate + graduate CM. Built out via the classical-mechanics expansion plan.

---

### Section 10: Electromagnetism & SR  ·  37 units / 8 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-electrostatics (5) · 02-magnetostatics (5) · 03-electrodynamics (5) · 04-maxwell-fields (5) · 05-special-relativity (3) · 06-covariant-em (4) · 07-radiation (5) · 08-advanced-electrodynamics (5).

**Missing chapters:**
- `[GAP]` **Optics** (geometric + physical: reflection/refraction, interference, diffraction, polarization) — **entirely absent from the curriculum.** Standard physics EM courses and Griffiths cover it. This is a corpus-wide gap (also absent from §13, §28).
- `[GAP]` **EM in matter** (dielectrics, magnetization, bound charges) — may live in 04-maxwell-fields; verify it is not just vacuum.

**Coverage:** Excellent for vacuum/covariant EM + SR. **Optics is the headline missing topic.**

---

### Section 11: Stat Mech (physics flavor)  ·  36 units / 8 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-thermodynamics (6) · 02-kinetic-theory (4) · 03-ensembles (4) · 04-partition-functions (5) · 05-quantum-stats (6) · 06-phase-transitions (6) · 07-renormalization (3) · 07-rg (2).

**Anomalies:**
- `[BLOCKER]` `07-renormalization` and `07-rg` duplicate (RG = renormalization group). Merge.

**Coverage:** Standard undergrad+grad stat mech. Thermodynamics has its own chapter here (answering the audit question: yes, thermo is separate from stat mech, at ch 01). Reconcile with §08.

---

### Section 12: Quantum  ·  88 units / 19 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-foundations (5) · 02-formalism (4) · 03-time-evolution (3) · 04-one-dim-problems (4) · 05-angular-momentum (7) · 06-central-force (4) · 07-perturbation (7) · 08-scattering (4) · 09-identical-particles (5) · 10-path-integral (3) · 11-relativistic-qm (5) · 12-canonical-qft (6) · 13-fock-spaces (3) · 14-algebraic-qft (2) · 15-discrete-symmetry (2) · 16-qed-radiative-corrections (6) · 17-quantum-information (4) · 18-gauge-and-symmetry (8) · 19-supersymmetry (6).

**Missing chapters:**
- `[GAP]` **Standard Model / electroweak theory / QCD** — beyond QED (ch 16). No chapter on the full gauge theory of the SM.
- `[GAP]` **Condensed-matter / many-body QM** — no chapter (Fermi liquid, superconductivity, Hubbard model). This connects to the missing condensed-matter physics subject.
- `[GAP]` **QFT in curved spacetime** — lives in §13.09 (12 units); fine, but worth a cross-link.
- `[THIN]` `14-algebraic-qft` and `15-discrete-symmetry` (2 units each).

**Coverage:** Excellent and deep for QM foundations → QED → SUSY. The post-QED phenomenological/theory tier (SM, many-body) is the gap.

---

### Section 13: GR & Cosmology  ·  31 units / 9 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-equivalence (1) · 02-manifold-formalism (3) · 03-curvature (1) · 04-einstein-eq (4) · 05-schwarzschild (4) · 06-black-holes (3) · 07-gravitational-waves (2) · 08-cosmology (1) · 09-microlocal-qft-curved-spacetimes (12).

**Anomalies:**
- `[THIN]` Three foundational chapters (equivalence, curvature, cosmology) have **1 unit each** — these are load-bearing and under-resourced.

**Missing chapters:**
- `[GAP]` **Numerical relativity** — no chapter.
- `[GAP]` **Early-universe cosmology** (inflation, nucleosynthesis, CMB) — folded into the 1-unit cosmology chapter; needs expansion.
- `[GAP]` **Structure formation / large-scale structure** — no chapter.

**Coverage:** Good on exact solutions + the microlocal-QFT-on-curved frontier (ch 09 is rich). The intro chapters (01, 03, 08) are too thin for a first-course backbone.

---

### Section 14: GenChem / PChem  ·  47 units / 12 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-atomic-structure (3) · 02-bonding-lewis (4) · 03-stoichiometry (3) · 04-quantum-chem (4) · 05-bonding-mo (4) · 06-thermo (4) · 07-stat-mech (4) · 08-kinetics (4) · 09-solutions-phase (4) · 10-acid-base (4) · 11-redox-electrochem (4) · 12-spectroscopy (5).

**Missing chapters:**
- `[GAP]` **Descriptive/main-group chemistry** — no chapter (periodic chemistry of the elements).
- `[GAP]` **Nuclear chemistry** — no chapter (split with physics, but the chem-side treatment is absent).
- `[GAP]` **Coordination chem intro** — lives in §16; cross-link only.

**Coverage:** Strong Atkins/McQuarrie-aligned gen+physical chem. Spectroscopy is present (answering the audit question).

---

### Section 15: Organic Chemistry  ·  41 units / 14 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-structure (4) · 02-functional-groups (3) · 03-acid-base-organic (2) · 04-substitution-elimination (3) · 05-addition (3) · 06-aromatic (4) · 07-carbonyl (5) · 08-radical-pericyclic (3) · 09-organometallic-synthesis (3) · 10-retrosynthesis (3) · 11-spectroscopy-organic (3) · 12-biomolecules-aa-protein (2) · 13-biomolecules-na (1) · 14-enzyme-mechanism (2).

**Audit questions answered:**
- Pericyclic reactions: **present** (bundled in `08-radical-pericyclic`; consider splitting pericyclic into its own chapter — it is a large grad topic).
- Spectroscopy: **present** (`11-spectroscopy-organic`).
- Retrosynthesis: **present** (`10-retrosynthesis`).

**Missing chapters:**
- `[GAP]` **Heterocyclic chemistry** — no chapter (huge in pharma/biochem).
- `[GAP]` **Protecting-group strategy** — no chapter (part of synthesis).
- `[GAP]` **Natural products** (terpenes, alkaloids, steroids) — no chapter.
- `[GAP]` **Polymer chemistry** — no chapter.
- `[GAP]` **Organocatalysis** (separate from organometallic) — no chapter.
- `[GAP]` **Photochemistry** — bundled? No standalone.
- `[THIN]` `13-biomolecules-na` (1 unit).

**Coverage:** Strong Clayden/McMurry-aligned core. The advanced-synthesis tier (heterocycles, natural products, polymers, organocatalysis) is the gap.

---

### Section 16: Inorganic Chemistry  ·  24 units / 7 chapters  ·  Rating: **Adequate**

**Existing chapters (units):** 01-periodic-trends (3) · 02-symmetry-group-theory (3) · 03-crystal-field (4) · 04-coordination (4) · 05-organometallic (3) · 06-bioinorganic (3) · 07-solid-state (4).

**Missing chapters:**
- `[GAP]` **Main-group chemistry** (detailed s- and p-block) — no chapter beyond periodic-trends.
- `[GAP]` **Transition-metal chemistry** beyond crystal/ligand field — reaction mechanisms of coordination complexes.
- `[GAP]` **Lanthanides & actinides** — no chapter.
- `[GAP]` **Cluster chemistry / metal-metal bonding** — no chapter.
- `[GAP]` **Catalysis** (homogeneous/heterogeneous) — no chapter.

**Coverage:** The thinnest chemistry section. Miessler/Shriver-Atkins cover more (main-group, f-block, catalysis) than is represented.

---

### Section 17: Mol/Cell Biology  ·  43 units / 10 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-biomolecules (4) · 02-membranes (4) · 03-cell-organization (4) · 04-energy-metabolism (6) · 05-gene-expression (5) · 06-molecular-genetics (4) · 07-signaling (4) · 08-cell-cycle (4) · 09-cellular-neuroscience (4) · 10-immunology (4).

**Missing chapters:**
- `[GAP]` **Cytoskeleton & cell motility** — no chapter.
- `[GAP]` **Cell junctions & extracellular matrix** — no chapter.
- `[GAP]` **Techniques** ( microscopy, PCR, sequencing, CRISPR, Western blot, crystallography) — no methods chapter. Alberts treats this; conspicuous by absence.
- `[GAP]` **DNA replication / repair / recombination** — may be inside 06-molecular-genetics; verify it is not just genetics.

**Coverage:** Strong Alberts/Lodish-aligned core. Methods and cytoskeleton are the gaps.

---

### Section 18: Organismal Biology  ·  34 units / 11 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-body-plans (2) · 02-cardiovascular (4) · 03-respiratory (3) · 04-musculoskeletal (4) · 05-nervous-system (4) · 06-digestive (3) · 07-endocrine (3) · 08-renal (3) · 09-reproductive (3) · 10-immunology (2) · 11-development (3).

**Missing chapters:**
- `[GAP]` **Integumentary system** (skin) — no chapter.
- `[GAP]` **Sensory systems** (vision, hearing, vestibular, olfaction, gustation) — partly in nervous-system but usually its own chapter.
- `[GAP]` **Plant physiology** — entirely absent; this section is animal-only. A comprehensive curriculum needs plant physiology (transport, photosynthesis, reproduction, hormones).
- `[THIN]` `01-body-plans` and `10-immunology` (2 units).

**Coverage:** Good animal-physiology coverage (Sherwood/Sadava). Plant physiology is a structural absence.

---

### Section 19: Eco/Evo Biology  ·  40 units / 18 chapters  ·  Rating: **Adequate (messy)**

**Existing chapters (units):** 01-mendelian (3) · 02-pop-genetics (5) · 03-selection (3) · 04-drift (3) · 05-quantitative-genetics (3) · 06-speciation (3) · 07-phylogenetics (3) · 08-macroevolution (3) · 09-population-ecology (3) · 10-community-ecology (3) · 11-ecosystem-ecology (1) · 11-ecosystem (1) · 12-biogeochemistry (1) · 12-biogeography (1) · 13-coevolution (1) · 13-conservation-biology (1) · 14-conservation (1) · 15-origin-of-life (1).

**Anomalies:**
- `[BLOCKER]` Duplicate numbers: `11-ecosystem-ecology`/`11-ecosystem`; `12-biogeochemistry`/`12-biogeography` (different topics, same number); `13-coevolution`/`13-conservation-biology`.
- `[BLOCKER]` `13-conservation-biology` and `14-conservation` overlap semantically.
- `[THIN]` Chapters 11–15 are all **1-unit** — the entire ecology tail is stub-grade.

**Missing chapters:**
- `[GAP]` **Behavioral ecology** — no chapter.
- `[GAP]` **Human evolution** — no chapter.
- `[GAP]` **Microbial ecology** — no chapter.

**Coverage:** Evolution half is solid; ecology half is fragmented and thin. Consolidate the duplicate-numbered chapters and expand the 1-unit ecology tail.

---

### Section 20: Philosophy  ·  33 units / 10 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-epistemology (3) · 02-ethics (9) · 03-phil-of-physics (3) · 04-aesthetics (1) · 05-phil-of-biology (3) · 06-consciousness (3) · 07-democracy (1) · 08-phil-of-science (3) · 09-phil-of-math (3) · 10-eastern-philosophy (4).

**Missing chapters:**
- `[GAP]` **Metaphysics** — no chapter (existence, identity, causation, modality, time, free will). One of the four core pillars of philosophy (alongside epistemology, ethics, logic).
- `[GAP]` **Philosophy of language** — no chapter (Frege, Russell, Wittgenstein, Kripke, speech acts). Heavily cited by §22 language.
- `[GAP]` **Philosophy of mind** — only `06-consciousness`; the broader mind track (functionalism, physicalism, qualia, intentionality) needs its own chapter.
- `[GAP]` **Political philosophy** — `07-democracy` is too narrow; need a chapter covering justice, authority, rights, liberalism/communitarianism (Rawls, Nozick, etc.).
- `[GAP]` **History of philosophy** (ancient, medieval, modern, continental, phenomenology, existentialism) — `10-eastern-philosophy` covers one tradition; Western history is absent.
- `[THIN]` `04-aesthetics` and `07-democracy` (1 unit each).

**Coverage:** Good on the phil-of-X branches (physics, biology, science, math). The core-theoretical pillars (metaphysics, language, mind, political) and history-of-philosophy are the gaps.

---

### Section 21: Number Theory  ·  61 units / 15 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-elementary (8) · 02-quadratic-forms-local-fields (9) · 03-l-functions (4) · 04-modular-forms (5) · 05-galois-reps (1) · 06-modularity-bsd (2) · 07-iwasawa (2) · 09-arakelov-faltings (3) · 10-langlands (1) · 11-dirichlet-series-arithmetic-functions (5) · 12-prime-number-theorem (4) · 13-dirichlet-l-functions-characters (5) · 14-sieve-methods-large-sieve (5) · 15-exponential-sums (5) · 16-partitions-circle-method (2).

**Anomalies:**
- `[NOTE]` Chapter `08` is missing (jumps 07 → 09).
- `[THIN]` `05-galois-reps`, `10-langlands` (1 unit each) — these are apex topics; thinness is expected but flagged.

**Missing chapters:**
- `[GAP]` **Algebraic number theory** (number fields, rings of integers, Dedekind domains, ideal class group, units) — only partially in `02-quadratic-forms-local-fields`. A dedicated ANT chapter is standard (Neukirch/Marcus).
- `[GAP]` **Class field theory** — no standalone chapter (the crown jewel of ANT; referenced by Langlands/Iwasawa but never built).
- `[GAP]` **Computational number theory** — no chapter.
- `[GAP]` **Transcendental number theory** — no chapter.

**Coverage:** Excellent on analytic NT (Spine 3) and arithmetic-geometry-flavored NT. Classical algebraic NT and class field theory are the structural gaps (and they circle back to the §01 missing-algebra problem).

---

### Section 22: Language  ·  54 units / 4 chapters  ·  Rating: **Good (for ELA; linguistics absent)**

**Existing chapters (units):** 01-grammar (24) · 02-writing (11) · 03-literature (15) · 04-reading-guides (4).

**Missing chapters:**
- `[GAP]` **Linguistics** (phonetics, phonology, morphology, syntax theory, semantics, pragmatics) — entirely absent. This section is English-language-arts, not the science of language. See "Missing Subjects" below.
- `[GAP]` **Rhetoric & composition theory** — partly in 02-writing but not developed as classical rhetoric.
- `[GAP]` **Creative writing** — no chapter.
- `[GAP]` **World literatures / literary theory** — 03-literature exists but breadth unverified.

**Coverage:** Strong for grammar/writing/literature pedagogy. **Scientific linguistics is the corpus-wide absence** (only anthropological linguistics exists in §31.05).

---

### Section 23: World  ·  57 units / 3 chapters  ·  Rating: **Adequate (catch-all)**

**Existing chapters (units):** 01-economics (30) · 02-civics (15) · 03-geography (12).

**Anomalies:**
- `[NOTE]` This is a three-strand catch-all (economics / civics / geography). Economics is essay-rich (30 units) but is "essays," not a tiered micro/macro/econometrics curriculum. Per BIBLE_EXPANSION_PLAN §2.7 these are tiered units + essays.

**Missing chapters / structural:**
- `[GAP]` **Standalone economics section** — microeconomics, macroeconomics, econometrics, game theory, international trade, behavioral economics deserve a full section, not a single chapter of essays. See "Missing Subjects."
- `[GAP]` **Standalone political science** — civics (15) covers citizenship/government basics but not political theory, comparative politics, international relations, public policy. See "Missing Subjects."
- `[GAP]` **Law / legal studies** — entirely absent from civics. See "Missing Subjects."

**Coverage:** Rich as an essay collection; weak as structured curricula in econ/political-science/law.

---

### Section 24: Numerical PDE  ·  22 units / 4 chapters  ·  Rating: **Strong (niche)**

**Existing chapters (units):** 01-sobolev-and-weak-pdes (5) · 02-classical-fem (2) · 03-discrete-de-rham-and-feec (7) · 04-applications (8).

**Coverage:** Specialized FEEC (finite element exterior calculus) section. Pairs with §43 numerical analysis. Complete for its (narrow) scope. `[THIN]` `02-classical-fem` (2 units) is light vs. its importance.

---

### Section 25: Logic  ·  4 units / 4 chapters  ·  Rating: **Thin (redundant)**

**Existing chapters (units):** 01-propositional-logic (1) · 02-predicate-logic (1) · 03-informal-fallacies (1) · 04-deductive-reasoning (1).

**Anomalies:**
- `[BLOCKER]` **Triple redundancy.** §25-logic, §49-logic, and §42-mathematical-logic all cover logic. §25 and §49 share their first four chapter slugs *identically* (verified: `propositional-logic-truth-tables` appears in both). The BACKLOG records that the prefix-25 collision with (then) 25-computer-science forced formal logic into §42; §25-computer-science was renamed to §50. **§25-logic is now a dead/redundant stub** — its 4 units are duplicated by §49 (which has 8 chapters, a superset). Recommend deprecating §25 in favor of §49, or merging.

**Coverage:** Adequate content, wrong redundancy level. Collapse into §49.

---

### Section 26: Statistics  ·  10 units / 10 chapters  ·  Rating: **Adequate (survey)**

**Existing chapters (units):** 01-descriptive-stats (1) · 02-probability (1) · 03-random-variables (1) · 04-sampling (1) · 05-hypothesis-testing (1) · 06-regression (1) · 07-bayesian (1) · 08-nonparametric (1) · 09-experimental-design (1) · 10-statistical-literacy (1).

**NOTE:** This is the **elementary/introductory survey** (Moore-McCabe tier). The rigorous mathematical statistics lives in §45-mathematical-statistics (68 units, Spine 10). The two intentionally share the `statistics` field. This is sound, not a gap — §26 serves the Beginner/literacy profile, §45 serves Intermediate/Master.

**Coverage:** Adequate for its stated survey role. Each chapter being 1 unit is by design (breadth-first literacy), not under-resourcing.

---

### Section 27: Earth Science  ·  25 units / 8 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-plate-tectonics (3) · 02-minerals-rocks (3) · 03-earthquakes-volcanoes (3) · 04-atmosphere-weather (3) · 05-oceanography (3) · 06-hydrology (3) · 07-climate-change (4) · 08-earth-history (3).

**Missing chapters:**
- `[GAP]` **Structural geology** — no chapter (folds, faults, mountain-building beyond plate tectonics).
- `[GAP]` **Soil science / pedology** — no chapter.
- `[GAP]` **GIS / remote sensing methods** — no chapter.

**Coverage:** Good Tarbuck/Grotzinger-aligned coverage.

---

### Section 28: Astronomy  ·  19 units / 6 chapters  ·  Rating: **Adequate**

**Existing chapters (units):** 01-solar-system (3) · 02-stars (4) · 03-galaxies (3) · 04-cosmology (4) · 05-exoplanets (3) · 06-space-exploration (2).

**Missing chapters:**
- `[GAP]` **Interstellar medium & star formation** — no chapter.
- `[GAP]` **High-energy astrophysics** (neutron stars, pulsars, black holes, AGN, gamma-ray bursts) — no chapter.
- `[GAP]` **Observational astronomy / instrumentation** (telescopes, detectors, spectroscopy techniques) — no chapter.
- `[GAP]` **Astrobiology** — no chapter (ties to §19.15-origin-of-life).

**Coverage:** Adequate broad survey. The astrophysics depth (ISM, high-energy, instrumentation) is thin.

---

### Section 29: Psychology  ·  39 units / 13 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-intro-methods (3) · 01-introduction (0) · 02-neuroscience (4) · 03-sensation-perception (3) · 04-learning-memory (4) · 05-cognition-intelligence (3) · 06-development (4) · 07-social-psychology (4) · 08-personality (3) · 09-psychological-disorders (4) · 10-therapy-treatment (3) · 11-motivation-emotion (3) · 12-cross-cultural-indigenous (1).

**Anomalies:**
- `[BLOCKER]` **Empty directory:** `01-introduction` has **0 units** (verified). Delete or populate.
- `[BLOCKER]` `01-intro-methods` and `01-introduction` collide on chapter number 01.

**Audit question answered — testing/measurement:**
- `[GAP]` **Psychological testing & measurement (psychometrics)** — **MISSING.** No chapter on test construction, reliability/validity, IQ testing, personality assessment. Standard psych curricula (Myers, Gleitman) include this.

**Missing chapters:**
- `[GAP]` **History of psychology** — no chapter.
- `[GAP]` **Industrial-organizational psychology** — no chapter.
- `[GAP]` **Health psychology** — no chapter.
- `[GAP]` **Forensic psychology** — no chapter.
- `[THIN]` `12-cross-cultural-indigenous` (1 unit).

**Coverage:** Good Myers-aligned breadth. The empty intro dir and the missing psychometrics chapter are the action items.

---

### Section 30: Sociology  ·  25 units / 8 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-sociological-imagination-methods (3) · 02-culture (3) · 03-socialization (3) · 04-social-stratification (4) · 05-institutions (3) · 06-deviance-social-control (3) · 07-globalization-social-movements (3) · 08-urbanization-demography (3).

**Missing chapters:**
- `[GAP]` **Race & ethnicity** — no chapter (usually its own in Giddens/Macionis).
- `[GAP]` **Gender & sexuality** — no chapter.
- `[GAP]` **Sociology of religion** — no chapter.
- `[GAP]` **Economic sociology / work** — no chapter.
- `[GAP]` **Family sociology** — no chapter (may be in institutions).
- `[GAP]` **Environmental sociology** — no chapter.

**Coverage:** Solid theoretical/methodological core. The identity-and-inequality chapters (race, gender) and specialty chapters (religion, family, environment) are standard and missing.

---

### Section 31: Anthropology  ·  18 units / 6 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-intro-four-fields (2) · 02-cultural-anthropology (4) · 03-archaeology (3) · 04-biological-anthropology (3) · 05-linguistic-anthropology (3) · 06-applied-anthropology (3).

**Missing chapters:**
- `[GAP]` **Anthropological theory / history of anthropological thought** — no chapter.
- `[GAP]` **Forensic anthropology** — no chapter.
- `[THIN]` `01-intro-four-fields` (2 units).

**Coverage:** Standard four-field structure (Kottak/Haviland). Good.

---

### Section 32: World History  ·  34 units / 26 chapters  ·  Rating: **Adequate (broad, shallow)**

**Existing chapters (units):** 01-prehistory (2) · 02-mesopotamia (1) · 03-egypt-nubia (1) · 04-indus-valley (1) · 05-ancient-china (1) · 06-classical-greece (2) · 07-roman-empire (2) · 08-classical-india (1) · 09-americas-pre-columbian (1) · 10-islamic-golden-age (2) · 11-medieval-europe-crusades (1) · 12-sub-saharan-africa (1) · 13-mongol-empire (1) · 14-age-of-exploration (2) · 15-colonialism-imperialism (1) · 16-atlantic-slave-trade (1) · 17-enlightenment-revolutions (2) · 18-industrial-revolution (2) · 19-meiji-qing-scramble-africa (1) · 20-world-war-one (2) · 21-interwar-totalitarianism (1) · 22-world-war-two (1) · 23-decolonization (1) · 24-cold-war (1) · 25-globalization (1) · 26-twenty-first-century (1).

**Anomalies:**
- `[THIN]` **20 of 26 chapters have 1 unit.** Breadth is excellent (every major era/civilization represented) but depth is uniformly ~1 unit/chapter.

**Missing chapters / topics:**
- `[GAP]` **Southeast Asia** (Vietnam, Indonesia, Khmer) — no chapter.
- `[GAP]` **Korea** — no chapter (folded into 05/19?).
- `[GAP]` **Oceania / Australia / Pacific** — no chapter.
- `[GAP]` **Renaissance** (separate from medieval Europe) — no chapter.
- `[GAP]` **Protestant Reformation** — no chapter.
- `[GAP]` **Pre-colonial Americas detail** (Maya, Aztec, Inca beyond the 1-unit 09).
- `[GAP]` **Economic history as a thread** — no chapter.

**Coverage:** Best breadth of any section (26 chapters spanning all continents and eras). Worst depth (1.3 units/chapter average). Expand priority chapters.

---

### Section 33: History of Science  ·  16 units / 8 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-ancient-science (2) · 02-islamic-medieval (2) · 03-scientific-revolution (2) · 04-industrial-revolution-science (2) · 05-relativity-quantum (2) · 06-genetics-molecular-bio (2) · 07-digital-revolution (2) · 08-contemporary-science (2).

**Coverage:** Clean, evenly-resourced (2 units each). Good Cohen/Bowler-Morus alignment. No major gaps.

---

### Section 34: Music & Art  ·  16 units / 8 chapters  ·  Rating: **Adequate**

**Existing chapters (units):** 01-music-fundamentals (3) · 02-music-history (3) · 03-visual-art-elements (2) · 04-art-history (2) · 05-film-photography (1) · 06-architecture-design (2) · 07-aesthetics-theory (2) · 08-digital-media-art (1).

**Missing chapters:**
- `[GAP]` **Theater & drama** — no chapter.
- `[GAP]` **Dance** — no chapter.
- `[GAP]` **Music theory depth** (harmony, counterpoint, form) — partly in 01.
- `[THIN]` `05-film-photography`, `08-digital-media-art` (1 unit).

**Coverage:** Adequate breadth across major arts.

---

### Section 35: Health & Medicine  ·  25 units / 8 chapters  ·  Rating: **Good**

**Existing chapters (units):** 01-human-body (2) · 02-infectious-disease (4) · 03-chronic-disease (4) · 04-nutrition (3) · 05-mental-health (3) · 06-public-health (3) · 07-pharmacology (3) · 08-future-medicine (3).

**NOTE:** BACKLOG marks this `[ ]` (not done), but 25 units exist on disk — effectively produced. Update BACKLOG status.

**Missing chapters:**
- `[GAP]` **Medical diagnostics / imaging** (radiology, pathology, lab medicine) — no chapter.
- `[GAP]` **Surgery / emergency medicine** — no chapter.
- `[GAP]` **Medical genetics** — no chapter.
- `[GAP]` **Reproductive/women's health depth** — partly in 18.09.

**Coverage:** Good for a health-literacy section (not a clinical track, per scope).

---

### Section 36: Media Literacy  ·  12 units / 6 chapters  ·  Rating: **Adequate**

**Existing chapters (units):** 01-media-foundations (2) · 02-news-journalism (2) · 03-propaganda (2) · 04-digital-literacy (2) · 05-visual-literacy (2) · 06-media-ethics (2).

**Coverage:** Evenly resourced (2 units each). Adequate Postman/McChesney alignment. Complete for its scope.

---

### Section 37: Probability  ·  46 units / 8 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-measure-foundations (1) · 02-independence-laws-of-large-numbers (3) · 03-clt-characteristic-functions (3) · 04-conditional-expectation-martingales (4) · 05-markov-chains (12) · 06-brownian-motion-stochastic-calculus (3) · 07-large-deviations (11) · 08-random-matrices (9).

**NOTE:** Spine 1, converged loop-until-dry. `[THIN]` `01-measure-foundations` (1 unit) is the only light spot.

**Coverage:** Strong (Durrett/Williams/Norris/Dembo-Zeitouni/AGZ).

---

### Section 38: Dynamics  ·  24 units / 7 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-topological-dynamics (5) · 02-symbolic-dynamics (3) · 03-hyperbolicity-structural-stability (4) · 04-ergodic-theorems (2) · 05-mixing-spectral (2) · 06-entropy (4) · 07-smooth-ergodic-theory (4).

**Coverage:** Spine 4, converged. Katok-Hasselblatt/Walters/Brin-Stuck aligned. Strong.

---

### Section 39: Operator Algebras  ·  34 units / 7 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-c-star-algebras-basics (4) · 02-af-algebras-k-theory (3) · 03-von-neumann-algebras (5) · 04-tomita-takesaki-modular (4) · 05-nuclearity-exactness (10) · 06-spectral-triples-ncg (6) · 07-cyclic-cohomology (2).

**Coverage:** Spine 5, converged. Davidson/Takesaki/Brown-Ozawa/Connes aligned. Strong.

---

### Section 40: Combinatorics  ·  59 units / 8 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-enumeration-generating-functions (7) · 02-posets-lattices (3) · 03-symmetric-functions-rsk (8) · 04-graph-theory-core (11) · 05-extremal-ramsey (4) · 06-design-coding-theory (10) · 07-probabilistic-method (9) · 08-analytic-combinatorics-asymptotics (7).

**Coverage:** Spine 6, converged. Stanley EC1+2/Diestel/van-Lint-Wilson/Alon-Spencer/Flajolet-Sedgewick aligned. Strong.

---

### Section 41: Category Theory  ·  13 units / 7 chapters  ·  Rating: **Good (thin)**

**Existing chapters (units):** 01-categories-functors-natural-transformations (2) · 02-limits-colimits (2) · 03-adjunctions (2) · 04-yoneda-representability (2) · 05-monads-algebras (2) · 06-kan-extensions (2) · 07-monoidal-categories (1).

**Missing chapters:**
- `[GAP]` **Topos theory** — no chapter.
- `[GAP]` **Higher category theory / ∞-categories** — no chapter.
- `[GAP]` **Enriched category theory** — no chapter.
- `[GAP]` **Algebraic theories / Lawvere theories** — no chapter.
- `[THIN]` Every chapter is 1–2 units.

**Coverage:** Spine 7. Core Mac Lane/Riehl material present but uniformly thin. The higher/functorial frontier (topoi, ∞-categories) is absent.

---

### Section 42: Mathematical Logic  ·  38 units / 5 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-first-order-logic-completeness (10) · 02-model-theory (9) · 03-set-theory-forcing (10) · 04-computability-degrees (8) · 05-proof-theory (1).

**Anomalies:**
- `[THIN]` `05-proof-theory` (1 unit).

**Coverage:** Spine 7. Enderton/Marker/Kunen/Soare aligned. Strong on the four pillars; proof theory is light.

---

### Section 43: Numerical Analysis  ·  44 units / 11 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-floating-point-conditioning (3) · 02-nonlinear-equations (3) · 03-direct-linear-solvers (4) · 04-least-squares-qr (2) · 05-svd-low-rank (1) · 06-eigenvalue-algorithms (7) · 07-iterative-krylov-methods (5) · 08-interpolation-approximation (5) · 09-numerical-quadrature (3) · 10-numerical-odes (6) · 11-finite-difference-pdes (5).

**Coverage:** Spine 8, converged. Trefethen-Bau/Golub-Van Loan/Süli-Mayers/LeVeque aligned. Strong.

---

### Section 44: Optimization & Control  ·  47 units / 8 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-convex-sets-functions (5) · 02-convex-duality-kkt (5) · 03-unconstrained-optimization (10) · 04-constrained-nonlinear (4) · 05-conic-semidefinite (4) · 06-first-order-large-scale (9) · 07-optimal-control-pontryagin (4) · 08-dynamic-programming (6).

**Coverage:** Spine 9, converged. Boyd-Vandenberghe/Nocedal-Wright/Rockafellar/Bertsekas aligned. Strong.

---

### Section 45: Mathematical Statistics  ·  68 units / 8 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-decision-theory-estimation (7) · 02-hypothesis-testing-confidence (5) · 03-bayesian-inference (5) · 04-asymptotic-statistics (11) · 05-empirical-processes-nonparametric (9) · 06-high-dimensional-regularization (10) · 07-statistical-learning-theory (9) · 08-learning-methods (12).

**Coverage:** Spine 10, converged. Casella-Berger/van der Vaart/Wasserman/HTF/Shalev-Shwartz-Ben-David aligned. Strong.

---

### Section 46: Information Theory  ·  40 units / 9 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-information-measures (5) · 02-source-coding (6) · 03-channel-capacity (7) · 04-information-statistics (4) · 05-side-information (4) · 06-network-information (4) · 07-algebraic-coding-advanced (4) · 08-modern-codes (4) · 09-convolutional-classical (2).

**Coverage:** Spine 11, converged. Cover-Thomas/MacWilliams-Sloane aligned. Strong.

---

### Section 47: Theoretical CS  ·  36 units / 6 chapters  ·  Rating: **Strong**

**Existing chapters (units):** 01-formal-languages-automata (6) · 02-complexity-fundamentals (7) · 03-advanced-complexity (6) · 04-algorithms-analysis (8) · 05-randomized-algorithms (5) · 06-cryptographic-foundations (4).

**Missing chapters:**
- `[GAP]` **Type theory & programming-language theory** — no chapter (lambda calculus, type systems, denotational semantics).
- `[GAP]` **Formal verification / model checking** — no chapter.
- `[GAP]` **Distributed computing theory** — no chapter (consensus, FLP, etc.; distinct from §50.11 applied distributed systems).
- `[GAP]` **Computational geometry** — no chapter.
- `[GAP]` **Data structures (theoretical)** — lives in §50.02 (applied); no theory-of-DS chapter here.

**Coverage:** Spine 12, converged. Sipser/Arora-Barak/CLRS aligned. Strong on the core; the PL-theory/distributed/verification frontier is absent.

---

### Section 48: Differential Geometry  ·  70 units / 4 chapters  ·  Rating: **Chaotic (overlaps §03)**

**Existing chapters (units):** 02-manifolds (45) · 03-lie-groups (4) · 05-fibre-bundles (12) · 12-homotopy-theory (9).

**Anomalies:**
- `[BLOCKER]` **Severe overlap with §03-modern-geometry.** `02-manifolds` (45 units here) vs `03-modern-geometry/02-manifolds` (1 unit) vs `48.02` and `03.02` — the manifold content is split across two sections with no clear home. `03-lie-groups` (4 units) overlaps `03-modern-geometry/03-lie` (7 units). `12-homotopy-theory` (9 units) overlaps `03-modern-geometry/12-homotopy` (58 units). `05-fibre-bundles` (12 units) overlaps `03-modern-geometry/05-bundles` (12 units).
- `[NOTE]` Chapters skip 01, 04, 06–11 — non-contiguous numbering suggesting it is a partial/alternate organization.
- `[BLOCKER]` No `01-*` chapter at all.

**Missing chapters:**
- `[GAP]` **Riemannian geometry** (metric, Levi-Civita, geodesics, curvature tensors, comparison theorems) — the single most important DG topic has no named home anywhere; it is presumably smeared inside `02-manifolds` (45 units) but not findable as a chapter.

**Coverage:** Substantial raw content (70 units) but organizationally broken — this section and §03 must be reconciled. Decide: merge §48 into §03, or carve §48 as "classical differential/Riemannian geometry" and §03 as "modern/geometric topology & gauge." Right now a learner cannot find Riemannian geometry.

---

### Section 49: Logic  ·  8 units / 8 chapters  ·  Rating: **Adequate (redundant with §25)**

**Existing chapters (units):** 01-propositional-logic (1) · 02-predicate-logic (1) · 03-informal-fallacies (1) · 04-deductive-reasoning (1) · 05-inductive-reasoning (1) · 06-decision-theory (1) · 07-cognitive-biases (1) · 08-critical-thinking-practice (1).

**Anomalies:**
- `[BLOCKER]` **First four chapters duplicate §25-logic exactly** (same slugs/titles). §49 is a superset (adds inductive reasoning, decision theory, cognitive biases, critical-thinking practice).

**Coverage:** This is the **critical-thinking / informal-logic** track (distinct from §42's formal mathematical logic). Content is adequate; **deprecate §25 and keep §49 as the single informal-logic home** to kill the redundancy.

---

### Section 50: Computer Science  ·  12 units / 12 chapters  ·  Rating: **Adequate (survey)**

**Existing chapters (units):** 01-computational-thinking (1) · 02-data-structures (1) · 03-complexity (1) · 04-programming-paradigms (1) · 05-operating-systems (1) · 06-networks (1) · 07-databases (1) · 08-security (1) · 09-ai-ml (1) · 10-software-engineering (1) · 11-distributed-systems (1) · 12-ethics-society (1).

**NOTE:** This is the **applied/practical CS survey** (distinct from §47 theoretical CS). Each chapter is a comprehensive standalone survey unit (~600 lines, three tiers), not a stub. This mirrors §26-statistics's relationship to §45.

**Missing chapters:**
- `[GAP]` **Computer architecture** (CPU, memory hierarchy, instruction sets) — no chapter.
- `[GAP]` **Compilers** — no chapter.
- `[GAP]` **Programming languages** (concepts, paradigms depth beyond 04) — no chapter.
- `[GAP]` **Web development / internet systems** — no chapter.
- `[GAP]` **Human-computer interaction** — no chapter.
- `[GAP]` **Computer graphics** — no chapter.
- `[GAP]` **Parallel & concurrent computing** — no chapter.

**Coverage:** Adequate as a literacy survey. The hardware/systems depth (architecture, compilers) is absent. Prefix-25 collision (noted in BACKLOG) was resolved by the rename to §50.

---

## Missing Subjects (not in any section)

Subjects a comprehensive curriculum should carry that have **no dedicated section**. Ranked by curricular weight.

### Tier 1 — Should arguably be first-class sections

1. **Economics (structured).** Currently only `23-world/01-economics` (30 essay-style units). A serious economics curriculum needs separate treatment of: **microeconomics** (consumer/producer theory, market structures, general equilibrium), **macroeconomics** (national income, growth, business cycles, monetary/fiscal policy), **econometrics**, **game theory** (strategic/coalitional, mechanism design), **international trade & finance**, **behavioral economics**, **economic history**. Game theory is currently scattered (some in §44 optimization, some in §23 essays, some in §47). *Recommend: a dedicated economics section, or expand §23/01 into a full multi-chapter tiered track.*

2. **Linguistics.** §22 is English-language-arts (grammar/writing/literature). The **scientific study of language** is absent: phonetics, phonology, morphology, syntax (generative & non-generative theories), semantics, pragmatics, historical/comparative linguistics, sociolinguistics, psycholinguistics, computational linguistics / NLP. Only `31-anthropology/05-linguistic-anthropology` touches it (3 units, anthropological flavor). *Recommend: a dedicated linguistics section.*

3. **Law / Legal Studies.** Entirely absent. Constitutional law, international law, contracts, property, criminal law, jurisprudence/legal philosophy, comparative law. §23/02-civics covers citizenship/government structure but not law as a discipline. *Recommend: at minimum a jurisprudence chapter under philosophy (§20) and a civics expansion; a full legal-studies section is a candidate v2 domain.*

4. **Political Science (standalone).** §23/02-civics (15 units) is civic literacy, not political science. Missing: **political theory/philosophy** (justice, authority, rights — overlaps §20), **comparative politics**, **international relations**, **public policy & administration**, **political economy**. *Recommend: split out of §23 into its own section or substantially expand civics.*

5. **Business / Management.** Absent. Accounting, finance, management, marketing, operations management, entrepreneurship. *Candidate v2 domain; flag for scope decision.*

### Tier 2 — Standard academic subjects with partial or no coverage

6. **Condensed-matter / solid-state physics.** No physics branch covers it. §16-inorgchem/07-solid-state is chemistry-flavored (crystal structures, bonding). Condensed-matter **physics** (band theory, superconductivity, magnetism, topological phases, many-body theory) is a standard physics graduate track and is absent. The BIBLE_EXPANSION_PLAN routes materials science → physics, but the receiving section does not exist.

7. **Optics.** Absent corpus-wide (flagged under §10). Geometric optics, physical optics, wave optics, lasers, Fourier optics. Standard in Griffiths-level EM and in standalone courses.

8. **Neuroscience (cognitive / systems).** Cellular/molecular neuroscience lives in §17.09 (4 units). Systems neuroscience (neural circuits, sensory/motor systems) and cognitive neuroscience (attention, memory, language, consciousness) have no home beyond psychology. A dedicated neuroscience section would bridge §17, §29, §20.06.

9. **Materials Science.** Absent (BIBLE_EXPANSION_PLAN defers to physics condensed-matter, which is also absent).

10. **Astrophysics (as distinct from astronomy).** §28 is astronomy (descriptive). Astrophysics (radiative transfer, stellar structure & evolution, accretion, dynamical astronomy) needs more depth than §28's 19 units provide.

11. **Statistics — STATUS: covered.** §26 (elementary survey) + §45 (rigorous, 68 units) + §37 (probability) + §38 (ergodic/dynamics). This audit question is answered: statistics is substantively present. The only nuance is that §26's 1-unit-per-chapter is a literacy layer by design.

### Tier 3 — Subjects present but with structural questions

12. **Logic — over-covered / fragmented.** Three logic sections (§25, §42, §49) plus logic content in §01-foundations. Consolidation needed: §42 = formal mathematical logic; §49 = informal/critical-thinking logic; **deprecate §25** (pure duplicate of §49's first half).

13. **Differential geometry — split.** §48 vs §03. See §48 analysis. Reconciliation is a structural prerequisite.

14. **Education / Pedagogy.** Absent. Not a priority for a "Babel Bible" of scientific/theoretical mastery, but a standard university faculty. Flag as explicit v2+ exclusion.

15. **Religious studies / comparative religion.** Absent. §20/10-eastern-philosophy touches Eastern thought. Comparative religion as a humanities discipline is absent. Flag as scope decision.

16. **Classics (Latin/Greek, classical civilization).** Absent. Flag as scope decision.

---

## Cross-Cutting Structural Issues (fix before further expansion)

These recur across multiple sections and are not subject-specific.

1. **Duplicate chapter numbers within a section.** Confirmed in: §01 (02-algebra / 02-groups), §02 (08-ode / 12-ode), §04 (04-curves / 04-riemann-roch; 05-divisors / 05-surfaces), §06 (02, 04 dups; 07/10 several-variables), §07 (04 dups; 04-symmetric / 05-symmetric; 07 dups), §11 (07-renormalization / 07-rg), §19 (11, 12, 13 dups), §29 (01 dups). **~10 sections affected.** These break any chapter-number-based routing and confuse the validator's chapter uniqueness assumption.

2. **Slug-only chapters mixed with numbered chapters.** §05 (no 01–08), §08 (no 01–09, 11–12), §19 (tail is slug-ish), §48 (non-contiguous). Pick a convention: either every chapter is `NN-slug` with `NN` monotonically increasing from 01, or document why a section is exempt.

3. **Empty directories.** Confirmed: `29-psychology/01-introduction/` (0 units). Sweep for others.

4. **Cross-section content duplication.** (a) §03 vs §48 differential geometry; (b) §08 vs §11 stat mech; (c) §25 vs §49 logic; (d) §02.09 vs §06.01 complex analysis. Each needs a documented "home" decision and cross-refs rather than parallel content.

5. **Many 1-unit chapters in breadth sections.** §26, §49, §50 are *intentional* literacy surveys (acceptable). But §19 (eco/evo tail), §13 (GR intro chapters), §32 (world history, 20/26 chapters) are *not* meant to be surveys — their 1-unit chapters are under-resourced. Distinguish "survey by design" from "under-built."

---

## Summary Statistics

| Metric | Value |
|---|---|
| Total sections | 51 |
| Total units | 2,397 |
| Total chapters (approx) | ~360 |
| Sections rated Strong | 18 (00-partial; 02, 03, 06, 08, 09, 12, 14, 15, 17, 21, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47) |
| Sections rated Good | 14 |
| Sections rated Adequate | 11 |
| Sections rated Thin / Chaotic | 5 (01, 25, 48, +…) |
| Largest section | §03-modern-geometry (243 units) |
| Smallest (non-survey) | §25-logic (4 units, redundant) |
| Sections with duplicate chapter numbers | ~10 |
| Empty directories found | ≥1 (29-psychology/01-introduction) |
| Tier 1 missing subjects | 5 (Economics-structured, Linguistics, Law, Political-Science, Business) |
| Tier 2 missing subjects | 5 (Condensed-matter phys, Optics, Neuroscience, Materials, Astrophysics) |

### Highest-leverage next builds (ranked)

1. **§01 algebra gap** — rings, modules, fields, Galois, commutative, homological algebra. Unblocks §04, §21, §41. (Biggest math hole.)
2. **Reconcile §48 ↔ §03** and establish a Riemannian-geometry home. (Navigation is currently broken.)
3. **Fix duplicate chapter numbers** across ~10 sections (mechanical, unblocks clean routing).
4. **Linguistics section** (new) — fill the science-of-language void.
5. **Economics as a structured section** (new or §23 expansion) — micro/macro/econometrics/game theory.
6. **Condensed-matter physics + optics** — fill the two standard physics-branch gaps.
7. **Deprecate §25-logic** (merge into §49) — kill the redundancy.
8. **§20 philosophy gaps** — metaphysics, philosophy of language, political philosophy, history of philosophy.
9. **Psychometrics chapter in §29** + delete empty `01-introduction`.
10. **§32 world-history depth** — expand the 20 one-unit chapters.

---

*End of audit. This document is the planning source-of-truth for curriculum expansion. Update the per-section ratings here when gaps are closed.*
