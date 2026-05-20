# Codex — Physics Plan

**Drafted 2026-05-17.** Per-domain plan for the Physics axis of the five-domain expansion. Sibling of (forthcoming) `CHEMISTRY_PLAN.md`, `BIOLOGY_PLAN.md`, `PHILOSOPHY_PLAN.md`. Subordinate to `BIBLE_EXPANSION_PLAN.md` for cross-domain mechanics. Companion to `FASTTRACK_COVERAGE_ROADMAP.md` — that plan tracks Fast Track booklist coverage on the math/physics axis; this plan structures the physics-proper namespace it feeds into.

**Status:** Draft. Locks the five-branch structure, section numbers, tier anchors, mastery endpoints, math prereq cone, and the seed-unit slate. Does not produce units (production happens after the validator + UNIT_SPEC patches in `BIBLE_EXPANSION_PLAN.md` §10 land).

Read in this order before this plan: `OVERVIEW.md` (canonical); `BIBLE_EXPANSION_PLAN.md` (cross-domain contract); `FASTTRACK_COVERAGE_ROADMAP.md` (math/physics depth push). This plan does not restate them — it builds on them.

---

## §1 What this plan does

Three things and only three:

1. **Locks the five-branch decomposition** of physics-proper into top-level sections §09–13, with internal ordering, tier anchors, mastery endpoints, math prereq cones, and outbound-hook taxonomies to chem/bio/phil per branch.
2. **Defines the first wave** — five seed units, one per branch — to validate the cross-domain link contract (`hooks_out`, cross-domain pending prereqs) on real material before chem and bio plans are drafted.
3. **Specifies the relationship** between this plan's physics-proper namespace and (a) the existing math-physics border units in §03, (b) the existing math-flavor §08 stat-mech section, and (c) the Fast Track coverage push.

It does not:
- Produce units (production gated on `BIBLE_EXPANSION_PLAN.md` §10 patches).
- Choose specific anchor *editions* or chapter-level reading lists — that's per-unit work in production.
- Decide whether §08 math-stat-mech eventually merges with §11 physics-stat-mech (deferred to §8 below).
- Override `OVERVIEW.md` invariants 1–5, 7, 8. All carry forward.

---

## §2 Physics scope

### 2.1 In scope (v1)

Mainstream physics covering: classical mechanics (Newtonian → Lagrangian → Hamiltonian → symplectic), electromagnetism (Maxwell + classical EM applications), special relativity (kinematics, dynamics, covariant formulation), statistical mechanics and thermodynamics (kinetic theory → ensembles → phase transitions → RG), quantum mechanics (non-relativistic + relativistic + many-body), quantum field theory (canonical + path-integral + gauge theory + intro renormalization), general relativity (manifold-based + Einstein eq + Schwarzschild + cosmological models).

Subareas treated as advanced extensions of the above, in v1:
- **Condensed matter physics** — as an application stack on top of QM + stat mech (e.g., band theory, Fermi liquid, BCS, topological phases). Lives in §12 (QM extensions) and §11 (stat-mech extensions) with cross-refs, not its own §.
- **Plasma physics, classical fluid dynamics** — as applications of classical mech + EM. Lives in §09 / §10 with cross-refs.
- **Cosmology** — as an application of GR. Lives in §13.
- **Particle physics** — as an application of QFT + gauge theory. Lives in §12.
- **Optics** — as an application of EM (and QM for quantum optics). Lives in §10 and §12.

### 2.2 Out of scope (v1)

- **Experimental technique pedagogy** (lab methods, instrumentation, measurement uncertainty as a craft) — physics-as-laboratory-practice is its own teaching tradition; not what this curriculum is doing.
- **Engineering physics** (specific applications to specific industries — aeronautics, nuclear engineering, semiconductor device physics as engineering).
- **Astrophysics-as-survey** (stellar structure, galactic dynamics, etc., as observational catalogs). The physics methods behind these *are* in scope (radiation transport in §10, stellar structure derivations in §11–13); the catalog itself is not.
- **Geophysics, atmospheric physics, oceanography** — out of v1 entirely.
- **History of physics as primary content** — historical context appears in unit prose where useful, but no dedicated history units.

### 2.3 Exclusions (lives in another domain)

- Chemical thermodynamics → chem (the apparatus comes from physics §11; the application is chem).
- Spectroscopy methods applied to molecules → chem.
- Biomechanics applications → bio.
- Quantum biology, biological electrochemistry → bio (the underlying physics → §10, §12).
- Philosophy of physics (interpretation, simultaneity, time, determinism) → phil (with `hooks_out` from the physics units to it).
- Materials science as applied condensed-matter chemistry → chem (boundary is fuzzy; default rule: if the question is "what does this material *do*?" → chem; if the question is "what governs the *underlying many-body state*?" → physics).

---

## §3 The five branches

Each branch gets one top-level section in §09–13. Branch entries below specify: section number, internal ordering, math prereq cone, anchor literature per tier, mastery endpoints per tier, and the dominant `hooks_out` targets to chem / bio / phil.

### 3.1 §09 Classical Mechanics (variational + symplectic)

**Internal ordering** (chapters):

| Chapter | Topic |
|---|---|
| 09.01 | Newtonian mechanics — kinematics, forces, conservation laws |
| 09.02 | Lagrangian mechanics — variational principle, Euler-Lagrange |
| 09.03 | Symmetries and conservation — Noether's theorem |
| 09.04 | Hamiltonian mechanics — Legendre transform, Hamilton's eq, Poisson brackets |
| 09.05 | Canonical transformations and Hamilton-Jacobi theory |
| 09.06 | Integrable systems and action-angle variables |
| 09.07 | Continuum mechanics and field theory (warm-up to §10, §12) |
| 09.08 | Chaos, KAM theorem, modern dynamical systems |
| 09.09 | Geometric mechanics — symplectic / Poisson manifolds, momentum maps |

**Math prereq cone:**

| From math | Why |
|---|---|
| §00 precalc | basic functions |
| §02 analysis | ODEs, calculus of variations, vector calculus |
| §03 modern geometry | manifolds, tangent / cotangent bundles (for ch 09 onward) |
| §05 symplectic | symplectic forms, Poisson structures, momentum maps (for 09.04 onward) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Susskind & Hrabovsky *The Theoretical Minimum: Classical Mechanics*; Feynman Lectures Vol I (selected chapters) |
| Intermediate | Taylor *Classical Mechanics*; Marion-Thornton *Classical Dynamics* (alt) |
| Master | Arnold *Mathematical Methods of Classical Mechanics*; Marsden-Ratiu *Mechanics and Symmetry*; Abraham-Marsden *Foundations of Mechanics* |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain conservation of energy / momentum / angular momentum in plain language; predict qualitatively the motion of a planet / pendulum / collision system |
| Intermediate | Derive the Lagrangian for a mechanical system; solve Hamilton's equations for standard problems (oscillators, central forces, rigid bodies) from Taylor's exercise sets cold |
| Master | Prove integrability of a Hamiltonian system using Liouville-Arnold; apply geometric-mechanics framework (momentum maps, symplectic reduction) to a problem with continuous symmetry; follow a paper in modern geometric mechanics or KAM theory |

**Outbound hooks (taxonomy, not exhaustive):**
- → Chemistry: molecular dynamics simulation foundations (e.g., classical Hamiltonians for force-field methods); classical limit of quantum molecular dynamics
- → Biology: biomechanics (e.g., muscle as a mechanical system); classical population-dynamics models that share the Hamiltonian / dissipative structure
- → Philosophy: determinism, free will, classical vs quantum boundary, the nature of time in Hamiltonian flow, the role of the action principle

**Math-physics border units already in §03 that this branch should cross-ref:** Yang-Mills action (`03.07.05`), Hamiltonian formulation pieces inside Chern-Weil / Bott periodicity territory.

---

### 3.2 §10 Electromagnetism + Special Relativity

**Internal ordering:**

| Chapter | Topic |
|---|---|
| 10.01 | Electrostatics — Coulomb, Gauss, Laplace eq, boundary value problems |
| 10.02 | Magnetostatics — Biot-Savart, Ampère, vector potential |
| 10.03 | Electrodynamics — Faraday, Maxwell's equations (integral form) |
| 10.04 | Maxwell's equations in differential form; wave equation; EM radiation |
| 10.05 | Special relativity — postulates, Lorentz transformations, kinematics, dynamics |
| 10.06 | Covariant electrodynamics — Faraday tensor, four-potential, gauge invariance |
| 10.07 | Radiation reaction, Liénard-Wiechert, Larmor formula |
| 10.08 | Macroscopic media — polarization, dielectrics, magnetic materials, optics |
| 10.09 | Classical field theory — Lagrangian for EM, conservation laws via Noether |
| 10.10 | Plasma physics primer (application stack) |

**Math prereq cone:**

| From math | Why |
|---|---|
| §02 analysis | vector calculus, PDE, Green's functions |
| §03 modern geometry | differential forms (10.04 onward), Minkowski geometry (10.05 onward) |
| §07 rep theory | Lorentz group reps (10.06 onward, soft prereq — most intro books skip) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Susskind & Friedman *Special Relativity and Classical Field Theory*; Feynman Lectures Vol II (selected) |
| Intermediate | Griffiths *Introduction to Electrodynamics*; Purcell-Morin *Electricity and Magnetism* (alt) |
| Master | Jackson *Classical Electrodynamics*; Landau-Lifshitz Vol 2 *The Classical Theory of Fields*; Zangwill *Modern Electrodynamics* (alt) |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain Maxwell's equations in plain language; identify what each one says physically; explain why c is invariant and what time dilation / length contraction mean |
| Intermediate | Solve boundary-value problems from Griffiths (capacitors, waveguides, antennas); work problems on relativistic kinematics and dynamics from a standard SR problem set |
| Master | Work Jackson chapter problems; derive radiation patterns for arbitrary charge distributions; treat radiation reaction with the full Abraham-Lorentz-Dirac apparatus; read a paper in classical plasma physics or accelerator physics |

**Outbound hooks:**
- → Chemistry: spectroscopy foundations (light-matter interaction at the classical level); ionic systems; dielectric response of molecular media
- → Biology: vision (the EM signal side; the photo-receptor biochem belongs to bio); photosynthesis (the EM input side); medical imaging physics (MRI is QM, EEG/ECG are bioelectromagnetic); bioelectric signaling
- → Philosophy: simultaneity (the canonical SR problem); ontology of fields (are fields "real"? — the long-running debate); causality in relativistic settings

---

### 3.3 §11 Statistical Mechanics + Thermodynamics (physics-flavor)

**Important boundary note.** Math has §08 stat-mech already (Onsager, RG, lattice gauge, path integrals, mean field, etc.) — that section's flavor is *mathematical physics*: rigorous treatments, exact solutions, theorems. This new §11 is *physical*: phenomenological derivations, computation, predictions, applications. Cross-references go both ways heavily. The §11 chapters below should cite into §08 wherever §08 has the rigorous version of the result.

**Internal ordering:**

| Chapter | Topic |
|---|---|
| 11.01 | Thermodynamics — laws, state functions, free energies, thermodynamic potentials |
| 11.02 | Kinetic theory — equation of state, Maxwell-Boltzmann distribution, transport |
| 11.03 | Statistical ensembles — microcanonical, canonical, grand canonical |
| 11.04 | Partition functions and thermodynamic quantities |
| 11.05 | Quantum statistics — Bose-Einstein, Fermi-Dirac, photon gas, electron gas |
| 11.06 | Phase transitions — Ising model (phenomenological), Landau theory |
| 11.07 | Critical phenomena and the renormalization group (physics-side; cross-refs §08 RG) |
| 11.08 | Non-equilibrium stat mech — linear response, fluctuation-dissipation, Onsager (cross-refs §08) |
| 11.09 | Statistical biophysics primer — polymer chains, membrane mechanics (cross-refs bio) |

**Math prereq cone:**

| From math | Why |
|---|---|
| §02 analysis | probability theory, measure theory, complex analysis (for saddle-point methods) |
| §07 rep theory | for symmetry classification of phases (soft prereq) |
| §08 math-stat-mech | rigorous results that §11 cites |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Schroeder *Introduction to Thermal Physics* (Beginner-tier sections); Susskind & Hrabovsky *Statistical Mechanics: Theoretical Minimum* (forthcoming/selected lectures) |
| Intermediate | Schroeder *Introduction to Thermal Physics*; Reif *Fundamentals of Statistical and Thermal Physics* (alt) |
| Master | Landau-Lifshitz Vol 5 *Statistical Physics Part 1*; Reichl *A Modern Course in Statistical Physics*; Goldenfeld *Lectures on Phase Transitions and the RG* |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain entropy and the second law in plain language; predict qualitatively whether a process is spontaneous |
| Intermediate | Derive partition function for systems in Schroeder; solve problems on Bose / Fermi gases; compute thermodynamic quantities from a Hamiltonian |
| Master | Work Landau-Lifshitz problems; apply RG to a non-trivial system (cross-cites §08); read a paper in modern stat mech (e.g., active matter, glass transition, biophysics of folding) and identify the technique used |

**Outbound hooks:**
- → Chemistry: chemical thermodynamics (Gibbs free energy in reactions, equilibrium constants, phase equilibria); statistical mechanics of solutions; partition functions for molecular systems
- → Biology: entropy production in living systems; statistical biophysics of biopolymers / membranes / molecular motors; kinetic models of metabolism
- → Philosophy: arrow of time, second-law universality, the question of fluctuations and Boltzmann brains, time-reversal symmetry vs observed irreversibility

---

### 3.4 §12 Quantum Mechanics + Quantum Field Theory

The deepest branch. Hosts the longest internal ordering because QM → QFT spans more conceptual ground than any other branch.

**Internal ordering:**

| Chapter | Topic |
|---|---|
| 12.01 | Foundations — Stern-Gerlach, two-state systems, complex amplitudes |
| 12.02 | Hilbert-space formalism — states, operators, observables, measurement |
| 12.03 | Schrödinger / Heisenberg / interaction pictures; time evolution |
| 12.04 | One-dimensional problems — well, barrier, harmonic oscillator |
| 12.05 | Angular momentum and spin — rep theory of SU(2), Clebsch-Gordan |
| 12.06 | Central force problems — hydrogen atom |
| 12.07 | Perturbation theory — time-independent, time-dependent |
| 12.08 | Scattering theory — Born approximation, partial waves, Lippmann-Schwinger |
| 12.09 | Identical particles, second quantization, many-body QM |
| 12.10 | Path integrals — formulation, free particle, oscillator, semiclassical limit |
| 12.11 | Relativistic QM — Dirac equation, Klein-Gordon (cross-refs §03 Dirac operator) |
| 12.12 | Canonical QFT — scalar field, Dirac field, photon field |
| 12.13 | Interactions and Feynman diagrams — QED at tree level |
| 12.14 | Renormalization — divergences, regularization, RG (cross-refs §08, §11) |
| 12.15 | Non-Abelian gauge theory — Yang-Mills, Higgs mechanism (cross-refs §03.07.05) |
| 12.16 | Effective field theory primer |
| 12.17 | Condensed-matter applications (band theory, Fermi liquid, BCS, topological matter) |

**Math prereq cone:**

| From math | Why |
|---|---|
| §01 foundations | linear algebra (Hilbert spaces at finite-dim level) |
| §02 analysis | functional analysis, distributions, Lebesgue integration |
| §03 modern geometry | manifolds, principal bundles (for 12.15) |
| §07 rep theory | reps of Lie groups (SU(2), Lorentz, SU(N)) — central to 12.05, 12.12 onward |
| §08 math-stat-mech | path integral / RG rigor (cross-refs 12.10, 12.14) |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Susskind & Friedman *Quantum Mechanics: Theoretical Minimum*; Feynman Lectures Vol III |
| Intermediate | Griffiths *Introduction to Quantum Mechanics*; Sakurai *Modern Quantum Mechanics* (mid-to-upper intermediate) |
| Master | Sakurai *Modern* (advanced sections) + Sakurai *Advanced Quantum Mechanics*; Peskin & Schroeder *Introduction to QFT*; Weinberg *Quantum Theory of Fields* Vols I–III; Polchinski *String Theory* (selected QFT background); Coleman *Aspects of Symmetry* |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain superposition, measurement, and the uncertainty principle in plain language; trace what happens in a two-slit / Stern-Gerlach experiment |
| Intermediate | Solve Griffiths and Sakurai problems including angular momentum, hydrogen atom, perturbation theory, scattering; do simple second-quantized many-body problems |
| Master | Compute amplitudes from Peskin-Schroeder; renormalize a non-trivial diagram; treat gauge theory at the level of Coleman or Weinberg; read a recent QFT or condensed-matter theory paper and identify the EFT structure / RG flow / symmetry-breaking pattern |

**Outbound hooks:**
- → Chemistry: atomic structure (hydrogen + multi-electron atoms); molecular orbital theory; bonding; spectroscopy mechanisms; reaction barriers and tunneling
- → Biology: quantum biology (photosynthesis coherence, magnetoreception, vision at the photoreceptor); NMR foundations
- → Philosophy: interpretation (Copenhagen, many-worlds, Bohmian, QBism, etc.); measurement problem; quantum nonlocality and Bell inequalities; ontology of quantum fields

**Math-physics border units in §03 that this branch should cross-ref heavily:** Clifford algebra (`03.09.02`), Spin structure (`03.09.04`), Dirac operator (`03.09.08`), Fredholm operators (`03.09.06`), Yang-Mills action (`03.07.05`), Atiyah-Singer (`03.09.10`), CFT basics (`03.10.02`).

---

### 3.5 §13 General Relativity + Cosmology

**Internal ordering:**

| Chapter | Topic |
|---|---|
| 13.01 | From SR to GR — equivalence principle, why curved spacetime |
| 13.02 | Manifold formalism — metric, connection, geodesics, parallel transport |
| 13.03 | Curvature — Riemann tensor, Ricci, Einstein tensor |
| 13.04 | Einstein field equations — vacuum solutions, with matter |
| 13.05 | Schwarzschild solution — orbits, light bending, gravitational redshift |
| 13.06 | Black holes — Kerr, charged solutions, horizons |
| 13.07 | Linearized GR and gravitational waves |
| 13.08 | Cosmological models — FLRW, expansion, dark energy / dark matter at the field-eq level |
| 13.09 | Modern cosmology — inflation, CMB physics, structure formation |
| 13.10 | Singularity theorems and global structure (Penrose-Hawking) |

**Math prereq cone:**

| From math | Why |
|---|---|
| §02 analysis | calculus of variations (for the action principle approach to GR) |
| §03 modern geometry | manifolds, tensor calculus, Riemannian geometry, connections — this is where §03 most directly powers physics |

**Anchor literature:**

| Tier | Anchor |
|---|---|
| Beginner | Susskind *General Relativity: Theoretical Minimum*; Hartle *Gravity* (Beginner-tier sections) |
| Intermediate | Schutz *A First Course in General Relativity*; Hartle *Gravity*; Carroll *Spacetime and Geometry* (mid sections) |
| Master | Wald *General Relativity*; MTW *Gravitation*; Carroll *Spacetime and Geometry* (advanced sections); Weinberg *Gravitation and Cosmology* (alt for cosmology emphasis) |

**Mastery endpoints:**

| Tier | Endpoint |
|---|---|
| Beginner | Explain why mass curves spacetime; describe time dilation in gravitational fields; explain what an event horizon is qualitatively |
| Intermediate | Solve standard GR problems (Schwarzschild orbits, gravitational redshift, geodesics on simple metrics); derive the Friedmann equations |
| Master | Work Wald problems; treat the singularity theorems and global structure; read a current paper in modern cosmology (CMB analysis, inflation models, dark-sector physics) or numerical relativity and identify the technique used |

**Outbound hooks:**
- → Chemistry: minimal (gravity is too weak to matter at chemical scales; one possible hook is to philosophy-of-chemistry questions about supervenience)
- → Biology: minimal direct hooks; cosmological / planetary conditions appear as boundary conditions for origin-of-life questions (which live in bio §17 or phil §20)
- → Philosophy: spacetime ontology (substantivalism vs relationalism); the hole argument; fine-tuning of cosmological constants; eternal vs evolving universe; whether time exists fundamentally; observational cosmology and the limits of empirical access

---

## §4 Existing physics-adjacent units already shipped

Inventory (snapshot 2026-05-17) of units that are physics-flavored but live outside the §09–13 namespace. These are accessed by physics readers via cross-domain hooks, not by relocation. From the 313-units count in `FASTTRACK_COVERAGE_ROADMAP.md`, the physics-relevant ones cluster here:

### 4.1 §03 modern-geometry math-physics border (from pilot + waves)

| Unit ID | Title | Branch served |
|---|---|---|
| 03.07.05 | Yang-Mills action | §12 QFT (gauge theory) |
| 03.09.02 | Clifford algebra | §12 QM (spin), §13 GR (spinors) |
| 03.09.04 | Spin structure | §12 QM, §13 GR |
| 03.09.06 | Fredholm operators | §12 QM (functional-analytic foundations) |
| 03.09.08 | Dirac operator | §12 (relativistic QM, QFT) |
| 03.09.10 | Atiyah-Singer index theorem | §12 QFT (anomalies, instantons) |
| 03.10.02 | CFT basics | §12 QFT (conformal field theory) |
| 03.06.04 | Pontryagin and Chern classes | §12 QFT (topological field theory) |
| 03.06.06 | Chern-Weil homomorphism | §12 QFT (gauge invariants) |
| 03.08.07 | Bott periodicity | §12 (K-theory in physics) |

**Rule:** these stay in §03. The first physics unit in each affected §09–13 chapter that *needs* one of these declares the cross-ref via `prerequisites` (the math-side units are the prereq for the physics-side context).

### 4.2 §08 stat-mech (mathematical flavor)

Subdirectories (per existing tree): `critical`, `gaussian`, `lattice-gauge`, `mean-field`, `onsager`, `partition`, `path-integral`, `rg`, `wick`. These are the *rigorous mathematical* treatments. §11 chapters cross-cite into them where the rigorous version of a result is the canonical reference.

### 4.3 No physics-proper units exist yet in §09–13

The five branches are empty in `content/`. This plan's job is to seed them.

---

## §5 First wave — five seed units, one per branch

Purpose: validate the cross-domain link contract on real physics material before chem and bio plans are drafted. Each seed is chosen for:

1. **Well-defined math prereq** — exercises cross-domain prereqs against the existing math corpus.
2. **Plausible `hooks_out` to at least two of {chem, bio, phil}** — exercises the new field.
3. **Standard textbook anchor at all three tiers** — low content risk; pilot stress-tests the *system*, not the *material*.
4. **Self-contained scope** — each fits the 20–50 min Master-tier window cleanly.

| Branch | Seed unit ID | Title | Why this one |
|---|---|---|---|
| §09 | `09.04.02` | Hamilton's equations | Clean cite to §05 symplectic; hooks out to chem (MD foundations), phil (determinism in Hamiltonian flow); anchored in Taylor + Arnold |
| §10 | `10.04.01` | Maxwell's equations in differential form | Clean cite to §03 differential forms; hooks out to chem (light-matter), bio (vision/photosynthesis), phil (field ontology); anchored in Griffiths + Jackson |
| §11 | `11.04.01` | Canonical ensemble and partition function | Clean cite to §02 probability + §08 partition; hooks out to chem (chemical thermo), bio (statistical biophysics), phil (arrow of time); anchored in Schroeder + Landau-Lifshitz |
| §12 | `12.01.02` | Stern-Gerlach and spin-1/2 | Clean cite to §01 linear algebra and §07 SU(2) reps; hooks out to chem (atomic spin), phil (measurement); anchored in Sakurai + Griffiths; cross-refs `03.09.02` Clifford algebra |
| §13 | `13.05.01` | Schwarzschild solution | Clean cite to §03 Riemannian geometry; hooks out to phil (event horizons, time dilation); anchored in Schutz + Wald |

**Sequence:** §09 → §13 → §10 → §11 → §12.

Rationale for the order:
- **§09 first** because classical mech is the most concretely anchored to existing math (symplectic §05) and the link-contract check is cleanest there.
- **§13 second** because GR's math dependence is on §03 (already heavily populated by the pilot) and the unit set is small enough to stress-test a different math axis quickly.
- **§10 third** because EM introduces a new math dependence (differential forms in §03) that the prior two don't.
- **§11 fourth** because it stress-tests the cross-cite to *another physics section* (§08), not just math → physics.
- **§12 last** because QM's prereq footprint is the largest (foundations + analysis + rep theory + sometimes §03), and putting it last lets the link contract be calibrated on simpler cases first.

### 5.1 Success criteria (Wave 1 physics)

The wave succeeds if, by end of production:

- [ ] All 5 units exist in `content/0{9..13}-<slug>/` per `UNIT_SPEC.md` with full frontmatter including `hooks_out`.
- [ ] All `hooks_out` entries have `kind: proposed` (no confirmations expected on wave 1 because chem/bio/phil aren't producing yet).
- [ ] All `prerequisites` resolve to shipped math units OR to math units explicitly registered as `pending_prereqs: true` in `manifests/deps.json`. Cross-domain pending prereqs are allowed per `BIBLE_EXPANSION_PLAN.md` §3.4.
- [ ] All reference citations resolve to real files in `reference/`. Where no `reference/` material covers a topic, the citation may be `pending+pointer:` to a future addition per `UNIT_SPEC.md` §5 (existing convention).
- [ ] Validator passes (existing 19 automated checks + new `hooks_out` validation).
- [ ] At least one `hooks_out → chem` and one `hooks_out → bio` exist across the wave (otherwise the link contract has not actually been exercised against non-existent target domains).
- [ ] At least one `hooks_out → 20.essays.NN` exists across the wave (validates the philosophy-essay-ID retrofit).
- [ ] Pilot-lessons style retro written into `docs/pilot-lessons.md` — what worked, what didn't, what the chem/bio/phil plans should change as a result.

The wave *fails* (not "succeeds with caveats") if:

- Any unit ships without a populated `hooks_out` field (even an empty list counts as populated; the validator should require the key, not non-empty content — but the wave's purpose is to exercise the field, so each wave-1 unit should have ≥ 2 outbound hooks).
- Any cross-domain `hooks_out` target uses a section number outside the locked prefix table.
- The validator's `hooks_out` extension is buggy enough to require a hotfix during the wave (suggests the spec needs revision *before* wave 2).
- Production time per unit exceeds 1.5× the math-pilot median (current ~2 min agent-drafted, ~2.5 h manual) — would suggest physics production has unanticipated friction worth investigating before scaling.

### 5.2 Production strategy per unit

| Unit | Strategy | Notes |
|---|---|---|
| 09.04.02 Hamilton's eq | **Manual** first | Establishes the physics-side production pattern; one human-hand pass before scaling |
| 13.05.01 Schwarzschild | Agent-drafted + LM-editorial pass | Math dependence is on §03 (already shipped), so RAG should be productive |
| 10.04.01 Maxwell-forms | Agent-drafted + LM-editorial pass | Same as above |
| 11.04.01 Canonical ensemble | Agent-drafted + LM-editorial pass | Cross-cite to §08 stress-tests RAG retrieval against the math-side §08 content |
| 12.01.02 Stern-Gerlach + spin-1/2 | Agent-drafted + LM-editorial pass | Cross-ref to `03.09.02` Clifford stress-tests pre-existing-unit citations in a new section |

---

## §6 Reviewer roster sketch

Per `REVIEWER_PLAN.md`'s convention, each unit needs a named mathematical / domain reviewer. Inferred from Tyler's known competencies (gauge theory, spin geometry, classical math-physics border, RG); flagged where outside reviewer recruitment will be needed.

| Branch | Tyler-solo confidence | Outside reviewer needed for |
|---|---|---|
| §09 classical mech | Green at intermediate; Yellow at master (geometric mechanics depth) | Master-tier geometric-mechanics units (09.09) if Marsden-Ratiu coverage is required |
| §10 EM + SR | Yellow (radiative reaction, plasma); Green elsewhere | Master-tier 10.07 (radiation reaction) and 10.10 (plasma primer) |
| §11 stat mech (phys) | Green for foundational chapters (11.01–11.04); Yellow for 11.07 RG crossing § 08; Red for 11.09 statistical biophysics | Master-tier 11.09 (biophysics overlap) needs a biophysics reviewer; cross-domain recruit |
| §12 QM + QFT | Green for foundations; Yellow for QFT renormalization at master; Red for advanced gauge / EFT / condensed matter | Multiple outside reviewers: one for renormalization / EFT, one for condensed-matter applications (12.17) |
| §13 GR + cosmology | Green for GR foundations; Yellow for singularity theorems; Red for modern cosmology / numerical relativity | Master-tier 13.09 (modern cosmology), 13.10 (singularity theorems if Penrose-Hawking depth) |

**Recruitment priority (before §12 wave starts):**
1. **QFT / renormalization reviewer** — single highest-leverage outside reviewer; covers most Yellow / Red in §12 and the 11.07 / 11.08 crossings.
2. **Condensed-matter theorist** — covers §12.17 and the application stack.
3. **Cosmologist / numerical relativist** — covers §13.09–10.

Cross-domain reviewer attestation for `hooks_out` to chem/bio (per `BIBLE_EXPANSION_PLAN.md` §3.2 — the `confirmed_by:` field) is *not* the same as the physics-side mathematical reviewer; the cross-domain confirmation comes from a reviewer credentialed on the *receiving* side. For Wave 1 we don't expect any `confirmed` hooks because the receiving domains aren't producing yet — all hooks stay at `proposed`.

---

## §7 Coverage strategy and Fast Track integration

Physics coverage in v1 has two complementary tracks:

### 7.1 Track A: Fast Track equivalence (depth on canonical anchors)

`FASTTRACK_COVERAGE_ROADMAP.md` governs depth. Per current memory, **Fast Track §2 Quantum is the biggest gap** with **Chatterjee 2.03 as the lowest-friction next audit**. The §12 branch of this plan is where the §2-Quantum push lands — chapters 12.01–12.16 are the physics-proper home for everything FT §2 audits will produce. FT auditing produces units that go *into* the §12 (and §11) namespace; PHYSICS_PLAN.md gives those units a structural home.

### 7.2 Track B: Coherent branch-completion (breadth across all five branches)

Independent of Fast Track. The point of Track B is that physics in v1 should not be "100% of §12 Quantum, 0% of §09 Classical Mech because FT happens to weight quantum." The five branches should fill in roughly proportionally so that the cross-domain link contract has hooks-out from *all* of physics into chem/bio/phil, not just from the deepest branch.

**Target ratio for v1:** at least 5 units in *every* branch before any branch exceeds 50 units. Soft target, revisited every wave.

### 7.3 What gets done first

| Phase | Track A (FT depth) | Track B (branch coverage) |
|---|---|---|
| Wave 1 (this plan) | none — wave 1 is link-contract validation | 1 seed unit per branch (5 total) |
| Wave 2 | Resume FT §2 Quantum push (Chatterjee 2.03 + downstream) | Each branch grows by 3–5 units |
| Wave 3+ | Continue FT booklist march | Continue branch fill |

Track A and Track B will overlap: a single physics unit can simultaneously satisfy "audited from Chatterjee" and "fills branch §12 chapter 4." The two tracks are *bookkeeping* views of the same physical unit production, not separate work streams.

---

## §8 Open questions (deferred)

| Question | Deferred to | Why now is wrong |
|---|---|---|
| Does §08 math-stat-mech eventually merge with §11 physics-stat-mech, or do they stay parallel forever? | After Wave 2 completes, when cross-cite frequency between them is measurable | Premature to decide before we see the actual citation pattern |
| Does §03 math-physics border get reorganized once §09–13 are populated? (E.g., do Yang-Mills / Dirac operator move to §12?) | Probably never — `BIBLE_EXPANSION_PLAN.md` §3.1 already locked "no renumber" | Listed here for completeness; the answer is no |
| Should "condensed matter" become its own §14 section? | After §12 reaches ~30 units and §11 reaches ~15 — if condensed-matter weight justifies it | Premature; treat as application stack inside §11 + §12 for now |
| Whether to introduce a "computational physics" subsection or units | After Wave 3 at earliest | Tooling pedagogy is a different teaching mode; decide later |
| How to handle physics topics that have *no* mainstream textbook at master tier (e.g., research-frontier topological QFT, holography) | Per-unit, when those units come up | Most v1 production won't hit this — the apex Codex pilot already explored that territory in §03 |

---

## §9 Risks

| Risk | Mitigation |
|---|---|
| Physics production stalls on the math prereq cone (an §09 unit needs an §02 math unit that doesn't exist yet) | Cross-domain prereqs can be `pending_prereqs: true` per `BIBLE_EXPANSION_PLAN.md` §3.4. Production continues; math axis catches up; pending edges resolve. |
| QFT renormalization and condensed-matter content stalls on reviewer recruitment | Recruitment is sequenced (§6) — start before §12 wave, not after the wave stalls. |
| Wave 1 produces 5 units but none has meaningful `hooks_out` because authors default to "I don't know what chem cares about" | §5.1 success-criteria-as-failure-criterion: minimum 2 outbound hooks per unit, ≥ 1 to chem AND ≥ 1 to bio across the wave. Reviewers enforce. |
| Physics-side stat-mech (§11) duplicates math-side stat-mech (§08) without enough cross-cite, creating a parallel curriculum problem | §3.3 locks §11 as physical-flavor with explicit cross-cites *into* §08. Wave-1 §11 seed unit (canonical ensemble) must demonstrate this. |
| Production rate slows compared to math axis because physics units have no Lean equivalent — every unit needs human reviewer attestation | Acknowledged in `BIBLE_EXPANSION_PLAN.md` §5; physics reviewer-bandwidth is *the* throughput constraint at master tier. No mitigation other than reviewer roster expansion. |
| Five branches of physics share so much (e.g., the action principle threads through 09, 10, 12, 13) that the namespace allocation creates a unit-redundancy problem (Noether's theorem in §09.03 and §12.12 and §10.09 and §13.04?) | One canonical unit per concept; the other locations cross-ref it. The unit "lives" in the branch whose internal ordering needs it first — likely §09.03 for Noether. The other branches `prerequisites: [09.03.NN]` rather than restating. |
| Potential prereq cycle: physics §12 declares math §07 rep theory as a prerequisite (for SU(2), Lorentz, gauge group reps); but math §07 rep theory pedagogy often *uses* spin-1/2 / QM as motivating examples and may declare `hooks_out` back to §12. If a math §07 unit ever upgrades its motivation into a `prerequisites` edge, the DAG cycles | The discipline is one-way: §07 rep theory is mathematically self-contained (Lie groups → reps → characters); QM examples in math §07 are motivational only and must stay as `hooks_out` (informational), never `prerequisites` (blocking). Reviewers enforce this asymmetry on math §07 units. |

---

## §10 Decision log entries (to be added to `OVERVIEW.md` §12 on the same date)

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-17 | Physics branches locked: §09 classical mech, §10 EM+SR, §11 stat-mech (phys), §12 QM+QFT, §13 GR+cosmology | Five branches cover the "all mechanisms of physics needed to understand the universe" goal; further subdivision (e.g., condensed matter as §14) deferred until usage warrants. |
| 2026-05-17 | Physics-side §11 stat-mech created parallel to math-side §08 stat-mech; the two cross-cite rather than merge | §08 is rigorous-mathematical-stat-mech; §11 is phenomenological / applied / computational. Merging would either lose rigor (§08 flavor) or lose accessibility (§11 flavor). |
| 2026-05-17 | Math-physics border units in §03 stay in §03; physics branches cite *into* them rather than relocating | Per `BIBLE_EXPANSION_PLAN.md` §3.1 routing rule. ~10 already-shipped units, ~50+ cross-refs, not worth the churn. |
| 2026-05-17 | Two-track coverage strategy: Track A (Fast Track depth push, especially §2 Quantum) + Track B (proportional branch breadth) | Avoids "all of §12, none of §09" pathology that pure Fast Track ordering would create. Tracks are bookkeeping views of the same production. |
| 2026-05-17 | Wave 1 physics: 5 seed units (one per branch) in order §09 → §13 → §10 → §11 → §12 | Each unit chosen for clean math prereqs, plausible cross-domain hooks, low content risk. Order escalates from cleanest math dependence to deepest prereq footprint. |
| 2026-05-17 | Wave 1 success requires ≥ 2 outbound hooks per unit and ≥ 1 hook each into chem, bio, phil across the wave | Without minimum-hook requirements, "validate the link contract" degrades to "we shipped some physics." |
| 2026-05-17 | One canonical unit per cross-cutting physics concept (e.g., Noether's theorem in §09.03 only; other branches cross-ref) | Prevents quadruple-duplication across branches that all use the action principle. Branch where concept first appears in internal ordering owns the canonical version. |

---

## §11 Next immediate actions

Gated on `BIBLE_EXPANSION_PLAN.md` §10 actions 1–4 (UNIT_SPEC + validator + OVERVIEW patches + philosophy essay ID retrofit) being complete. Once unblocked:

1. **Produce 09.04.02 Hamilton's equations manually** — the physics-side equivalent of pilot-unit-#1 Clifford algebra. Establishes the production pattern; surfaces spec gaps before scaling.
2. **Retro on 09.04.02** — what worked, what's missing in the spec, what needs to change for agent-drafted units in this branch. Update `docs/pilot-lessons.md`.
3. **Produce the remaining 4 seed units (13.05.01, 10.04.01, 11.04.01, 12.01.02)** — agent-drafted with LM-editorial pass.
4. **Cross-domain audit on Wave 1** — review `manifests/connections.json` for the proposed `hooks_out` edges. Are the hooks plausible? Are any glaringly missing?
5. **Write the chem and bio plans** informed by Wave-1 retro. Cross-domain audit feeds into them (each per-domain plan absorbs its `hooks_out → its domain` proposals as backlog per `BIBLE_EXPANSION_PLAN.md` §3.6).
6. **Begin Wave 2 physics** — Fast Track resume + branch breadth fill, in parallel with chem/bio plan drafting.

*This plan is the canonical reference for the physics axis. When uncertain about physics-section structure, branch ordering, or seed-unit selection, check here. When updating, propagate to `OVERVIEW.md` §12 and `BIBLE_EXPANSION_PLAN.md` §6 the same day.*
