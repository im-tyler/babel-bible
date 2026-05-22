# Landau, Lifshitz — *Statistical Physics, Part 1* (Fast Track 2.10) — Audit + Gap Plan

**Book:** L. D. Landau, E. M. Lifshitz, *Statistical Physics, Part 1*
(Volume 5 of the *Course of Theoretical Physics*).

- Russian original: *Statisticheskaya Fizika*, Nauka, Moscow, 1937 (1st);
  revisions 1951, 1964, 1976.
- 3rd English edition: translated by J. B. Sykes and M. J. Kearsley,
  revised and enlarged by E. M. Lifshitz and L. P. Pitaevskii,
  Pergamon / Butterworth-Heinemann, 1980; reprinted continuously
  (xvii + 544 pp.). Pagination and section references in this plan
  follow the 3rd English edition (Part 1 only; the quantum-liquid and
  superfluid material extracted into Vol. 9 *Statistical Physics, Part 2*
  is **outside** the scope of this plan — Vol. 9 is not a Fast Track
  entry).
- ISBN (3rd ed.): 0 7506 3372 7.

**Fast Track entry:** 2.10 — the classical-statistical-mechanics anchor
of Section 2 of the booklist. Sits between 2.09 (Goldenfeld
*Lectures on Phase Transitions and the Renormalization Group*) and
2.11 (Souriau / dynamical-systems track). Catalog status: **BUY**
(under active copyright; Pergamon / Butterworth-Heinemann commercial
title).

**Audit completeness: reduced.** Per AGENTIC_EXECUTION_PLAN.md §6.6 —
no local PDF available. `reference/textbooks-extra/` holds Vols 1, 2,
6, 8 of the Course of Theoretical Physics, but **not** Vol 5. WebFetch
attempts on archive.org and standard mirrors were not pursued under
the 3-hour time budget; this plan is constructed from the canonical
Sykes-Kearsley table of contents (which is stable across all editions
since 1958) together with cross-references in the four cited peer
sources (Reif, Kardar Vol I, Goldenfeld, Pathria) — each of which
treats Landau Vol 5 as a primary reference and reproduces its
sectioning and worked examples. Section-by-section line numbers in
this plan refer to Landau-Lifshitz section numbers (§1, §2, …, §150),
**not** to PDF page numbers. P5 verification cannot mark this book
`equivalence-covered` until a full audit replaces the reduced one
(§6.6 hard rule).

**Section-2 structural note.** Landau Vol 5 is **classical** statistical
physics — Gibbs ensembles, fluctuations, classical and quantum ideal
gases (the latter treated by quantum statistics without quantum-field-
theory machinery), classical and quantum-statistical phase transitions
including the Landau phenomenological theory. It is **not** quantum
statistical mechanics in a QFT sense. So this audit does **not** depend
on the pending Section-2 P0 structural decision (operator item A) —
Landau Vol 5 lives naturally in `content/08-stat-mech/`, which already
ships 22 units (partition function block, mean-field, RG, gaussian
field, Onsager solution, Wick rotation, path integral, lattice gauge).
Cross-reference with those 22 units is **the** dominant editorial
finding of this audit.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite).
Output is a punch-list of new units and existing-unit deepenings so
that *Statistical Physics, Part 1* is covered to the FT-equivalence
threshold (≥95% effective coverage; see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit
under the reduced-completeness constraint.

---

## §1 What Landau Vol 5 is for

Landau-Lifshitz Vol 5 is **the physicist-canonical reference for
classical equilibrium statistical mechanics** in the Russian-school
tradition: terse, foundational, derivation-first, with worked examples
that are themselves load-bearing physics results (Debye theory of
specific heats, Landau phenomenological theory of second-order
phase transitions, Einstein-Smoluchowski fluctuation theory, the
fluctuation-dissipation theorem in its early form). Its distinctive
editorial choice is the **microcanonical-first derivation**: Vol 5
opens at §1 with Liouville's theorem and the statistical distribution
of a closed system, derives the microcanonical ensemble from the
equal-a-priori-probability postulate in §4, and obtains the canonical
and grand-canonical distributions in §28 and §35 **as subsystem
distributions** of a microcanonical mother system — the small system
in contact with a much larger reservoir. This is the *physically
correct* sequencing (Gibbs 1902 *Elementary Principles in Statistical
Mechanics* is the originator), and it is the sequencing that Reif,
Kardar Vol I, and Pathria all follow — but it is **the opposite of
the modern probabilistic / measure-theoretic sequencing** (Ruelle,
Israel) that starts from Gibbs measures on infinite-volume lattices
and defines ensembles abstractly. Landau is uninterested in
measure-theoretic foundations; he wants the *physics intuition*
(fluctuations, response, phase transitions) extracted from minimal
postulates as quickly as possible.

Density: ~150 numbered sections in 544 pp., spanning XII chapters from
fundamentals (§§1–7) through thermodynamic quantities (§§8–27),
Gibbs distribution (§§28–34), ideal gases (§§37–52), Fermi and Bose
gases (§§53–62), non-ideal gases (§§71–84), phase transitions
including the Landau theory (§§143–148), and fluctuations
(§§110–128). Like Vol 1, Landau Vol 5 is **extremely terse**;
arguments compress what Reif spends a chapter motivating into a
single page, and most of the worked-example density lives in the
~250 chapter-end Problems (most with solutions).

Distinctive contributions, in roughly the order Vol 5 develops them:

1. **Microcanonical-first sequencing with Liouville's theorem as
   foundation** (§§1–7). Statistical distribution function
   $\rho(p, q)$, Liouville's theorem $d\rho/dt = 0$ along Hamiltonian
   flow, equal-a-priori-probability over an energy shell, and the
   *role of macroscopic vs. microscopic* time scales — the
   ergodic / mixing assumption is invoked phenomenologically, not
   proved. **Landau-canonical**: Reif §3 follows the same sequencing
   but is less terse; Kardar Vol I §4 is closely parallel; Pathria
   Chs. 2–3 also microcanonical-first. The mathematical-physics
   alternative (Khinchin, Ruelle) is acknowledged but not adopted.

2. **Subsystem derivation of the canonical and grand-canonical
   ensembles** (§§28–35). The Gibbs distribution
   $\rho_n = e^{(F - E_n)/T}$ (canonical) and
   $\rho_{n,N} = e^{(\Omega - \mu N - E_{n,N})/T}$ (grand-canonical)
   are derived as the marginal distributions of a small subsystem
   in equilibrium with a much larger heat / particle reservoir.
   This is the *only* derivation that makes the temperature $T$ and
   chemical potential $\mu$ emerge as Lagrange multipliers tied to
   conservation laws — Gibbs 1902 originated it. **Landau Vol 5 §28
   is the standard physicist-citation for this derivation.**

3. **Thermodynamic potentials and the Maxwell relations from the
   first and second law** (§§9–27). Free energy
   $F = -T \ln Z$, Gibbs free energy $\Phi = F + PV$, enthalpy
   $W = E + PV$, grand potential $\Omega = -PV$, with full
   Legendre-transform structure and Maxwell relations derived
   coordinate-by-coordinate. **Physicist-canonical; the four-tier
   Born-square / thermodynamic-square mnemonic is implicit in
   Landau's tables.**

4. **Specific-heat applications from the partition function**
   (§§39–52). Equipartition theorem
   $\langle\tfrac{1}{2} m v_i^2\rangle = \tfrac{1}{2}T$, classical
   ideal gas
   $C_V = \tfrac{3}{2}N$, anharmonic and rotational
   contributions for molecular gases, and the
   **Debye theory of specific heats of solids** (§63-§66):
   phonon partition function, Debye $T^3$ law at low temperature,
   Dulong-Petit limit at high temperature. **Landau-distinctive
   treatment** of the Debye-Einstein crossover.

5. **Fermi and Bose ideal gases** (§§53–62). Fermi-Dirac
   distribution $\bar{n}_\epsilon = (e^{(\epsilon-\mu)/T} + 1)^{-1}$,
   Bose-Einstein distribution
   $\bar{n}_\epsilon = (e^{(\epsilon-\mu)/T} - 1)^{-1}$,
   **degenerate electron gas** (Sommerfeld expansion,
   $C_V = \tfrac{\pi^2}{2} N T / T_F$), **Bose-Einstein condensation**
   in the ideal gas — derived from the grand-partition function with
   the condensation transition at
   $T_c = (2\pi\hbar^2/m)(n/\zeta(3/2))^{2/3}$. **Landau-canonical;
   though the deepest Bose-Einstein-superfluid material is deferred
   to Vol 9.**

6. **Real (non-ideal) gases and the virial expansion** (§§71–84).
   Mayer cluster expansion, second virial coefficient $B_2(T)$, the
   van der Waals equation derived from the partition function with
   pair potential, isotherm structure with the Maxwell construction
   for the liquid-gas transition. **Physicist-canonical; deferred
   to Vol 9 for the rigorous Lee-Yang treatment of phase transitions
   as zeros of the grand partition function.**

7. **Fluctuations** (Ch. XII, §§110–128). Einstein-Smoluchowski
   theory: equilibrium fluctuations $\langle (\Delta x_i)(\Delta x_k)
   \rangle = T \cdot (\partial^2 S / \partial x_i \partial x_k)^{-1}$,
   density fluctuations of an ideal gas, energy fluctuations
   $\langle (\Delta E)^2 \rangle = T^2 C_V$, **fluctuation-dissipation
   theorem** in its early Landau-Lifshitz form (response function
   $\alpha(\omega)$ and noise spectrum
   $\langle |x(\omega)|^2 \rangle = (2T/\omega) \mathrm{Im}\, \alpha(\omega)$).
   **Landau is a co-originator of the modern FDT framework**
   (Landau-Lifshitz 1957, *Sov. Phys. JETP* 5:512; Callen-Welton 1951
   gave the canonical quantum FDT independently). This is one of two
   sections where **mandatory originator-prose** applies.

8. **Landau phenomenological theory of second-order phase
   transitions** (§§143–148). The order parameter $\eta$, the
   expansion of the free energy
   $F = F_0 + a(T) \eta^2 + b \eta^4 + \cdots$ near $T_c$ with
   $a(T) = \alpha (T - T_c)$, the critical exponents at mean-field
   level ($\beta = 1/2$, $\delta = 3$, $\gamma = 1$, $\alpha = 0$),
   the Ginzburg criterion for the breakdown of mean-field theory
   near $T_c$ in dimensions $d < 4$, classification of phase
   transitions by symmetry-group structure. **Landau 1937 is the
   originator** (*Phys. Z. Sowjet.* 11:26; *Zh. Eksp. Teor. Fiz.* 7:19);
   **mandatory originator-prose** with citation to the 1937 papers.

These eight contributions are the distinctive Landau-canonical
material that the Babel Bible `08-stat-mech/` chapter must capture to
reach FT-equivalence for Vol 5. The book also covers two further
strands deferred to Vol 9:

- **Quantum statistical mechanics of liquids and superfluidity**
  (Vol 9 chapters; not in scope for this audit).
- **Plasma and dilute-gas kinetic theory** (covered in Vol 10
  *Physical Kinetics*; not in scope).

Density of theorem layer vs. existing Codex `08-stat-mech/` chapter:
the **22 shipped Babel Bible units** are weighted heavily toward
**field-theoretic / lattice / RG** topics (Wilson-Fisher RG,
beta function, block-spin decimation, Wick rotation, lattice gauge,
path integral, gaussian field, conformal criticality). Landau Vol 5
is weighted heavily toward **thermodynamic / kinetic / fluctuation**
topics — exactly the complement. Overlap of named topics is **~30%**
(partition function, free energy, Boltzmann distribution, mean-field,
Ising, critical exponents, spontaneous symmetry breaking) but the
**Landau editorial framing** — microcanonical-first, subsystem
derivation, fluctuation-dissipation, Landau phenomenological theory —
is **almost entirely absent** from the shipped units, which take the
Kardar / partition-function-first viewpoint. **The dominant editorial
finding: the gap is one of *framing and worked examples*, not of
topic-area coverage.** Most punch-list items are deepenings of
existing units; a smaller new-unit set covers the four
Landau-distinctive applications (Debye, Bose-Fermi gases,
fluctuation-dissipation, Landau phenomenological theory).

The book ends before non-equilibrium kinetics (Vol 10) and before
quantum-liquid theory (Vol 9). It also stops short of the modern
rigorous statistical-mechanics programme (Ruelle, Israel, Lanford,
Dobrushin) — those are 1960s–70s developments not in Landau's
territory.

---

## §2 Coverage table (Babel Bible vs Landau Vol 5)

Cross-referenced against the current 22-unit `08-stat-mech/` chapter
plus the broader corpus. ✓ = covered at Landau-equivalent depth, △ =
topic present but Landau-distinctive framing / worked examples not
captured, ✗ = not covered.

### Chapter I — The Fundamental Principles of Statistics (§§1–7, ~30 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Statistical distribution function $\rho(p,q)$ (§1) | — | ✗ | **Gap.** No phase-space-density unit exists; the shipped `partition` block jumps directly to Boltzmann weights. Foundational for the microcanonical-first sequencing. |
| Liouville's theorem (§3) | `05.02.07-liouville-volume` (Vol 1 shipped) | △ | **Cross-chapter shipped** in symplectic mechanics; needs lateral reference from a new stat-mech unit. Landau's *statistical-mechanics* application (probability density preserved along the flow) is the new context. |
| Microcanonical ensemble / energy shell (§4) | — | ✗ | **Gap (Landau-foundational).** Equal-a-priori-probability postulate; entropy $S = \ln \Delta\Gamma$ as state count. |
| Macroscopic-time / mixing assumption (§5) | — | ✗ | **Gap.** Ergodic hypothesis treated phenomenologically; pointer to Khinchin / Sinai for rigour. |
| Entropy from statistical weight (§7) | (touched in `08.01.04-free-energy`) | △ | Boltzmann formula $S = \ln W$ acknowledged but not isolated; needs Landau-framing anchor. |

### Chapter II — Thermodynamic Quantities (§§8–27, ~50 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Temperature, pressure as derivatives of entropy (§§9–10) | — | ✗ | **Gap.** $1/T = \partial S/\partial E$; thermodynamic-quantities-as-Lagrange-multipliers framing absent. |
| Adiabatic process and adiabatic invariant connection (§11) | (`05.09.02-adiabatic-invariants` Vol 1 shipped) | △ | Cross-chapter reference; thermodynamic-adiabatic distinct from mechanical-adiabatic; needs disambiguating unit. |
| Free energy $F = E - TS = -T \ln Z$ (§15) | `08.01.04-free-energy` | △ | **Shipped**; Landau's thermodynamic-Legendre-transform derivation worth an explicit Beginner-tier anchor. |
| Gibbs free energy $\Phi$, enthalpy $W$ (§§14, 16) | — | ✗ | **Gap.** The Legendre-transform square (Born square) is not in the Babel Bible. |
| Maxwell relations (implicit §16) | — | ✗ | **Gap.** Cross-derivative identities; mnemonic / Born-square deferred but useful. |
| Thermodynamic inequalities and stability (§§21–22) | — | ✗ | **Gap.** $C_V > 0$, $(\partial P/\partial V)_T < 0$ from concavity of $F$. Landau-distinctive: stability criteria as second-derivative conditions. |
| Nernst's theorem / Third law (§23) | — | ✗ | **Gap.** $S \to 0$ as $T \to 0$ for quantum systems with non-degenerate ground state. |
| Work and heat at finite-$T$ inequalities (§§13–14) | — | ✗ | **Gap.** Maximum work theorem. |

### Chapter III — The Gibbs Distribution (§§28–36, ~30 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Canonical Gibbs distribution from subsystem (§28) | `08.01.03-boltzmann-distribution` | △ | **Shipped** as Boltzmann distribution and canonical ensemble; Landau's *subsystem-of-a-microcanonical-bath* derivation is the canonical originator-derivation and is not in the Master tier of the shipped unit. |
| Maxwell distribution of molecular velocities (§29) | — | ✗ | **Gap.** Worked example; physicist-foundational. |
| Partition function (§31) | `08.01.01-partition-function` | △ | **Shipped**; Landau-anchor in master tier needs explicit citation. |
| Grand canonical Gibbs distribution (§35) | — | ✗ | **Gap (Landau-distinctive).** $\rho \propto e^{(\Omega + \mu N - E)/T}$; needed for Bose / Fermi gas treatment. |
| Calculation by Gibbs phase-space integral (§36) | — | ✗ | **Gap.** Continuum / quantum-state-counting bridge. |

### Chapter IV — Ideal Gases (§§37–52, ~35 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Boltzmann distribution of independent particles (§37) | (covered) | ✓ | Touched in `08.01.03`. |
| Equipartition theorem (§44) | — | ✗ | **Gap.** Each quadratic degree of freedom contributes $\tfrac{1}{2}T$ to $\langle E \rangle$. |
| Classical ideal monatomic gas — $E = \tfrac{3}{2}NT$, $PV = NT$ (§§40–41) | — | ✗ | **Gap.** The textbook physicist worked example absent from Babel Bible. |
| Diatomic / polyatomic rotational and vibrational degrees of freedom (§§44–49) | — | ✗ | **Gap.** Temperature-dependent specific heat from internal modes. |
| Chemical reactions in gases — law of mass action (§§101–106; in Ch. IX) | — | ✗ | **Gap.** Equilibrium constant from $\mu_i = 0$ summed with stoichiometric coefficients. Physicist-canonical, mathematician-absent. |

### Chapter V — The Fermi and the Bose Distributions (§§53–62, ~25 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Quantum-statistical state counting (§53) | — | ✗ | **Gap.** Indistinguishability postulate and the two statistics. |
| Fermi-Dirac distribution (§55) | — | ✗ | **Gap (Landau-canonical, FT-foundational).** |
| Bose-Einstein distribution (§54) | — | ✗ | **Gap (Landau-canonical, FT-foundational).** |
| Degenerate electron gas — Sommerfeld expansion (§§57–58) | — | ✗ | **Gap.** $C_V \propto T / T_F$; metals, white dwarfs. |
| Bose-Einstein condensation in ideal gas (§62) | — | ✗ | **Gap.** Macroscopic-occupation singularity at $T_c$; Landau-distinctive — full superfluid treatment deferred to Vol 9 but the ideal-gas BEC is Vol 5. |

### Chapter VI — Solids (§§63–70, ~30 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Debye theory of specific heats (§§64–66) | — | ✗ | **Gap (Landau-canonical).** $T^3$ law at low temperature; Debye temperature; phonon partition function. Originator: Debye 1912. |
| Einstein model of crystalline solid (§64) | — | ✗ | **Gap.** Predecessor to Debye; Einstein 1907. |
| Thermal expansion (§67) | — | ✗ | **Gap.** Grüneisen relation. |

### Chapter VII — Non-Ideal Gases (§§71–84, ~40 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Virial expansion / Mayer cluster expansion (§§74–76) | — | ✗ | **Gap.** Second virial coefficient $B_2(T)$ from pair potential. |
| Van der Waals equation (§76 + §82) | — | ✗ | **Gap (Landau-canonical).** Liquid-gas isotherms, Maxwell construction. |
| Liquid-gas critical point (§83) | (touched in `08.05.01-critical-exponents`) | △ | Codex has critical exponents at universality-class abstraction; Landau-specific liquid-gas worked example absent. |

### Chapter VIII — Phases of Matter / Chapter IX — Solutions (§§81–110, ~50 pp.)

Phase equilibrium, Clausius-Clapeyron, triple point, solutions, osmotic pressure, mass-action. **All ✗ in Babel Bible.** These are physicist-thermodynamics topics with no analogue in the field-theory-flavored `08-stat-mech/` chapter. Most are below FT-equivalence priority (Goldenfeld / Reif cover them; Kardar Vol I does not isolate them as load-bearing). Treated as Priority-4 deepenings only.

### Chapter XII — Fluctuations (§§110–128, ~50 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Gaussian fluctuation distribution (§§110–112) | (touched in `08.06.01-gaussian-field`) | △ | Codex has Gaussian *field*; Landau has Gaussian *thermodynamic-fluctuation*. Related but distinct framings. |
| Density and energy fluctuations of an ideal gas (§§114–115) | — | ✗ | **Gap.** Worked example: $\langle (\Delta N)^2 \rangle = N$ (Poisson). |
| Fluctuations of fundamental thermodynamic quantities (§§111–113) | — | ✗ | **Gap.** $\langle (\Delta T)^2 \rangle = T^2/C_V$ etc. |
| Generalised susceptibility and response function (§123) | — | ✗ | **Gap.** $x(\omega) = \alpha(\omega) f(\omega)$; bridge to FDT. |
| **Fluctuation-dissipation theorem** (§§124–126) | — | ✗ | **Gap (Landau-originator, mandatory originator-prose).** |
| Spectral density of fluctuations / Nyquist formula (§§118–119) | — | ✗ | **Gap.** Johnson noise; Nyquist 1928 originator with Landau-Lifshitz consolidation. |

### Chapter XIV — Phase Transitions of the Second Kind (§§143–148, ~30 pp.)

| Landau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Order parameter and symmetry classification (§§142–143) | (touched in `08.02.02-spontaneous-symmetry-breaking`) | △ | SSB unit covers the Goldstone-mode side; Landau-symmetry-classification (allowed transitions by little-group analysis) is distinct and Landau-distinctive. |
| **Landau phenomenological expansion** $F = F_0 + a(T)\eta^2 + b\eta^4 + \cdots$ (§144) | (touched in `08.02.01-mean-field`) | △ | **Mean-field unit shipped**; Landau's *expansion-in-the-order-parameter* framing is the *originator* of mean-field, and the unit cites Onsager but not the 1937 Landau paper. Originator-prose anchor needed. |
| Critical exponents at mean-field level (§§145–146) | `08.05.01-critical-exponents` | △ | **Shipped**; Landau mean-field values $\beta=1/2$, $\gamma=1$, $\delta=3$, $\alpha=0$ are the comparison point but the Landau-distinctive *derivation* from the expansion is not in the unit. |
| **Ginzburg criterion** for breakdown of mean-field (§146) | — | ✗ | **Gap (Landau-Ginzburg).** $|\tau| > \tau_G \sim (b^2/(\alpha^4 \xi_0^d))^{2/(4-d)}$ inequality; bridges to Wilson-Fisher RG. |
| Symmetry-allowed transitions by group theory (§§145–147) | — | ✗ | **Gap (Landau-distinctive).** When can a second-order transition occur? Landau-Lifshitz criterion using the cubic invariant. |
| Effect of an external field on a transition (§148) | — | ✗ | **Gap.** Field-dependent free energy and rounding of the transition. |

### Aggregate coverage estimate (Landau Vol 5)

- **Theorem layer:** ~30% topic-level coverage, ~15% at Landau-
  equivalent framing-depth. The shipped `08-stat-mech/` chapter is
  heavily weighted toward RG / lattice / field-theoretic content;
  Landau's thermodynamic / kinetic / fluctuation backbone is mostly
  absent.
- **Worked-example layer:** ~10%. Landau's ~250 Problems are largely
  absent (Maxwell distribution, ideal-gas thermodynamics, Sommerfeld
  expansion, Debye $T^3$, virial coefficients, van der Waals,
  fluctuation Poisson distribution, Nyquist formula) — not present
  in Babel Bible.
- **Notation layer:** ~60%. Major crosswalk concerns:
  - Landau writes $T$ for temperature in energy units (i.e. $k_B = 1$);
    Codex follows this convention in some units, uses $\beta = 1/(k_B T)$
    elsewhere. Pin a chapter-wide note.
  - Landau writes $E$ (not $U$) for internal energy; the convention
    flips between physicists. Pin Master-tier disambiguation.
  - Order parameter symbol: Landau uses $\eta$; Codex SSB unit uses
    $\phi$. Cross-reference table.
  - $\Omega = -PV$ (Landau's grand potential symbol) collides with
    $\Omega$ as state count in §7. Landau distinguishes by context;
    pin a Master-tier note.
- **Sequencing layer:** ~25%. Codex orders partition-function → mean-
  field → Onsager → RG → Gaussian-field; Landau orders microcanonical
  → ensembles → ideal gas → quantum gas → real gas → fluctuations →
  phase transitions. The two orderings reflect different editorial
  intents (field-theoretic-RG vs. thermodynamic-physicist) — neither
  is wrong, but the Babel Bible sequencing **does not motivate** the
  ensembles from physical subsystem arguments, which is the
  Landau-distinctive pedagogical move.
- **Intuition layer:** ~20%. Physicist-intuition (fluctuation around
  equilibrium, response to perturbation, phase-stability via second-
  derivative inequalities, Landau-vs-Onsager critical exponents) is
  almost entirely absent from the geometer-flavored shipped chapter.
- **Application layer:** ~10%. Debye, Einstein, Sommerfeld,
  Bose-Einstein condensation, Nyquist, van der Waals — none of these
  Landau-canonical applications has a Babel Bible unit.

After priority-1 batch: theorem layer ~55%, framing-depth ~45%,
application ~50%. After priority-1+2: ~80% / ~75% / ~75%. Priority-3
brings to ~90% / ~88% / ~85%. Full ≥95% requires a dedicated
Landau-style Problem pack — deferred per the reduced-audit constraint.

---

## §3 Gap punch-list (priority-ordered)

The Codex `08-stat-mech/` chapter is mature on the **RG / field-
theoretic / lattice** side (22 units shipped, including Wilson-Fisher,
Wick, Onsager, lattice gauge) but exposes substantial gaps on (a) the
**microcanonical → subsystem-derivation** sequencing, (b) the
**physicist-thermodynamics** layer (Maxwell relations, stability,
Nernst), (c) the **Landau-canonical applications** (Debye, Bose-Fermi
gases, Bose-Einstein condensation, Sommerfeld expansion, van der Waals,
Maxwell distribution), and (d) the **fluctuation / FDT / Landau-phase-
transition** axis (the two mandatory-originator-prose items).

Recommended slot ranges:
- **Extend `08.01-partition/`** with the microcanonical-first prequel
  and the canonical-as-subsystem deepening.
- **New `08.10-thermodynamics/`** (or `08.10-fluctuations/`) for the
  Landau Ch. II + Ch. XII material.
- **New `08.11-quantum-gases/`** for Fermi-Bose-Debye.
- **Extend `08.02-mean-field/`** with the Landau 1937 originator-
  prose anchor and Ginzburg criterion.

### Priority 1 — Landau-load-bearing additions (mandatory for FT-equivalence) (5 items)

1. **`08.01.05` Microcanonical ensemble and Liouville's theorem in
   statistical mechanics.** Landau §§1–7 anchor; Gibbs 1902 originator
   (*Elementary Principles in Statistical Mechanics*, Yale UP). Three-
   tier; ~2000 words. Beginner: equal-a-priori-probability over an
   energy shell; entropy as $\ln$ of state count. Intermediate:
   Liouville's theorem $d\rho/dt = 0$ along Hamiltonian flow, lateral
   reference to `05.02.07-liouville-volume`; macroscopic-vs-microscopic
   time scales and the mixing assumption. Master: derivation of
   canonical and grand-canonical as **subsystem distributions** of a
   microcanonical mother system (Landau §28, §35). **Originator-prose
   target**: paraphrase Gibbs 1902 Ch. I directly. **The single most
   important deepening in this audit** — it provides the
   microcanonical-first scaffolding the Babel Bible chapter currently
   lacks.

2. **`08.10.01` Thermodynamic potentials and Maxwell relations.**
   Landau Ch. II §§9–22 anchor; Gibbs 1875–78 *On the Equilibrium of
   Heterogeneous Substances* (*Trans. Conn. Acad. Arts Sci.*)
   originator. Three-tier; ~1800 words. Beginner: $S = \ln \Omega$,
   $1/T = \partial S/\partial E$; first/second laws. Intermediate:
   Legendre transforms $F = E - TS$, $\Phi = F + PV$, $W = E + PV$,
   $\Omega = F - \mu N$; thermodynamic-square / Born-square mnemonic.
   Master: Maxwell relations from $d^2F$ symmetry, **thermodynamic
   stability inequalities** $C_V > 0$, $(\partial P/\partial V)_T < 0$
   from concavity of $F$ and convexity of $E(S,V)$, **Nernst's third
   law** $S \to 0$ as $T \to 0$. Foundational for everything
   downstream. **Codex-absent across all 22 shipped units.**

3. **`08.11.01` Quantum ideal gases — Bose-Einstein and Fermi-Dirac
   distributions.** Landau Ch. V §§53–62 anchor; Bose 1924
   (*Z. Phys.* 26:178) for photon-counting derivation, Einstein 1924
   (*Sitz. Preuss. Akad.*) for the matter-gas extension, Fermi 1926
   (*Z. Phys.* 36:902) for the fermion case. Three-tier; ~2200 words.
   Beginner: indistinguishability postulate; the two statistics from
   state-counting on occupation-number Fock space. Intermediate:
   distribution formulae $\bar{n}_\epsilon = (e^{(\epsilon-\mu)/T} \pm
   1)^{-1}$, classical-gas limit when $e^{-\mu/T} \gg 1$.
   Master: **degenerate electron gas with Sommerfeld expansion**
   $C_V = \tfrac{\pi^2}{2} N T / T_F + O(T^3)$, and **Bose-Einstein
   condensation in the ideal gas** with the macroscopic occupation
   singularity at
   $T_c = (2\pi\hbar^2/m) (n / \zeta(3/2))^{2/3}$. **Foundational
   physicist-canonical worked example; Codex-absent.**

4. **`08.12.01` Fluctuation-dissipation theorem (Landau-Callen-Welton).**
   Landau Ch. XII §§124–126 anchor; **Landau-Lifshitz 1957
   (*Sov. Phys. JETP* 5:512) is co-originator** with
   Callen-Welton 1951 (*Phys. Rev.* 83:34) and Kubo 1957
   (*J. Phys. Soc. Japan* 12:570). Three-tier; ~2200 words.
   Beginner: equilibrium fluctuations are constrained by linear
   response; intuition via Brownian motion and Einstein 1905.
   Intermediate: Generalised susceptibility $\alpha(\omega)$, response
   to perturbation $x(\omega) = \alpha(\omega) f(\omega)$. Master:
   FDT statement
   $\langle |x(\omega)|^2 \rangle = (2T/\omega) \mathrm{Im}\, \alpha(\omega)$
   (classical limit) with Landau-Lifshitz contour-integration
   derivation, quantum form
   $\langle |x(\omega)|^2 \rangle = \hbar \coth(\hbar\omega/2T)
    \mathrm{Im}\, \alpha(\omega)$ (Callen-Welton), and the Nyquist
   formula $\langle V^2 \rangle = 4TR\, \Delta f$ as application.
   **Originator-prose mandatory** — paraphrase Landau-Lifshitz §125
   directly with explicit 1957 *Sov. Phys. JETP* citation alongside
   Callen-Welton 1951. **One of two apex units in this audit.**

5. **`08.02.04` Landau phenomenological theory of second-order phase
   transitions.** Landau Ch. XIV §§142–147 anchor; **Landau 1937
   (*Phys. Z. Sowjet.* 11:26; *Zh. Eksp. Teor. Fiz.* 7:19) is the
   originator** of the entire mean-field / order-parameter /
   phenomenological-Landau-theory programme. Three-tier; ~2000 words.
   Beginner: order parameter $\eta$ identifies the broken-symmetry
   phase; expansion of free energy near $T_c$
   $F = F_0 + a(T)\eta^2 + b\eta^4 + \cdots$ with $a(T) = \alpha(T -
   T_c)$. Intermediate: critical exponents at mean-field level
   $\beta = 1/2$, $\gamma = 1$, $\delta = 3$, $\alpha = 0$ derived
   directly from the expansion; comparison with Onsager $\beta = 1/8$
   for the 2D Ising. Master: **Ginzburg criterion** for the
   breakdown of mean-field theory in $d < 4$, **symmetry-allowed
   transitions** by the Landau cubic-invariant criterion. Anchors and
   deepens `08.02.01-mean-field` and `08.05.01-critical-exponents`
   without duplication — both shipped units cite Onsager 1944 but
   neither cites Landau 1937. **Originator-prose mandatory** —
   paraphrase Landau 1937 directly. **Second apex unit in this
   audit.**

### Priority 2 — Landau-canonical worked-example layer (4 items)

6. **`08.11.02` Debye theory of specific heats of solids.** Landau
   Ch. VI §§63–66 anchor; Debye 1912 (*Ann. Phys.* 39:789) and
   Einstein 1907 (*Ann. Phys.* 22:180) originators. Three-tier;
   ~1600 words. Beginner: solids as collections of harmonic oscillators
   (Einstein model). Intermediate: phonon partition function with
   Debye cutoff $\omega_D$. Master: **$T^3$ law** at low temperature,
   Dulong-Petit limit at high temperature, Debye temperature as
   material parameter. **Landau-canonical; physicist-foundational;
   Codex-absent.**

7. **`08.01.06` Maxwell-Boltzmann distribution of molecular
   velocities.** Landau §29 anchor; Maxwell 1860 (*Phil. Mag.* 19:19)
   originator. Three-tier; ~1500 words. Beginner: most probable speed,
   mean speed, rms speed; relations to temperature. Intermediate:
   Boltzmann's derivation as canonical-ensemble marginal in momentum.
   Master: equipartition theorem proof from
   $\langle p_i \partial H/\partial p_j \rangle = \delta_{ij} T$.
   **Physicist-foundational; Codex-absent.**

8. **`08.11.03` Real gases — virial expansion and van der Waals.**
   Landau Ch. VII §§74–84 anchor; Mayer 1937 (*J. Chem. Phys.* 5:67)
   for the cluster expansion, van der Waals 1873 *Over de Continuiteit
   van den Gas- en Vloeistoftoestand* for the original equation of
   state. Three-tier; ~1800 words. Beginner: ideal-gas limit and
   deviations. Intermediate: second virial coefficient
   $B_2(T) = -\tfrac{1}{2} \int (e^{-U(r)/T} - 1)\, d^3r$ from the
   partition function with pair potential. Master: van der Waals
   equation $(P + a/v^2)(v - b) = T$ derived from $B_2$ at finite
   density; **liquid-gas critical point and Maxwell construction
   for coexistence**. **Codex-absent (the existing
   `08.05.01-critical-exponents` is universality-class abstraction
   without the worked van-der-Waals derivation).**

9. **`08.12.02` Equilibrium fluctuations of thermodynamic quantities.**
   Landau Ch. XII §§110–115 anchor; Einstein 1910
   (*Ann. Phys.* 33:1275) originator. Three-tier; ~1600 words.
   Beginner: Gaussian-fluctuation picture around equilibrium.
   Intermediate: $\langle (\Delta x_i)(\Delta x_k) \rangle = T \cdot
   (\partial^2 S / \partial x_i \partial x_k)^{-1}$; Einstein 1910
   formula. Master: $\langle (\Delta E)^2 \rangle = T^2 C_V$,
   $\langle (\Delta T)^2 \rangle = T^2/C_V$, $\langle (\Delta N)^2
   \rangle = T (\partial N/\partial \mu)_{T,V}$; **density
   fluctuations as Poisson for ideal gas**; **Nyquist formula**
   $\langle V^2 \rangle = 4TR\, \Delta f$ as foreshadowing of FDT.
   **Codex-absent.**

### Priority 3 — deepenings of existing units (3 items)

10. **Deepen `08.01.03-boltzmann-distribution`.** Add a Master-tier
    section anchored to Landau §28 — the **subsystem derivation**
    of the canonical distribution from a microcanonical mother system.
    Currently the unit defines the canonical ensemble axiomatically;
    Landau-Gibbs derive it. Pin the originator citation to Gibbs
    1902 Ch. IV alongside the existing Boltzmann citation. No new ID.

11. **Deepen `08.02.01-mean-field` and `08.05.01-critical-exponents`.**
    Add originator-prose paragraphs citing Landau 1937 (already
    folded into item 5 as a separate unit; this is the deepening
    that *anchors* item 5 to the existing shipped units). Pin
    `08.02.04` Landau-phenomenological as the canonical reference
    from both shipped units. No new IDs.

12. **Deepen `08.06.01-gaussian-field`.** Add a Beginner-tier section
    that distinguishes Landau's **Gaussian thermodynamic fluctuations**
    (Ch. XII) from the **Gaussian field theory** the shipped unit
    treats. Lateral reference to `08.12.02`. Pin to Einstein 1910 as
    originator of the thermodynamic-Gaussian-fluctuation picture.
    No new ID.

### Priority 4 — survey-level pointers (1 item; deferable)

13. **`08.10.02` Phase equilibrium and the Clausius-Clapeyron
    relation.** Landau Ch. VIII §§81–95 anchor; Clausius 1850 / Clapeyron
    1834 originators. Master-only; ~1400 words. $dP/dT = L/(T \Delta V)$
    relation between latent heat and isotherm slope; triple point;
    phase rule. **Physicist-canonical but mathematician-curriculum-
    absent. Deferable; included for FT-equivalence completeness only.**

---

## §4 Implementation sketch

**Minimum Landau-equivalence batch** = priority 1 only (items 1–5):
5 new units (1 deepening anchor + 4 originator-prose targets, two of
which are apex units). Estimates:

- ~3.5 hours per typical new unit. Items 4 and 5
  (fluctuation-dissipation; Landau phenomenological theory) are apex
  originator-prose units requiring substantial historical research
  and Landau-prose paraphrase — ~5–6 hours each.
- Priority 1: 3 typical × 3.5 h + 2 apex × 5.5 h = ~21–22 hours.
- Priority 1+2: ~22 + 4 new × 3 h = ~34 hours.
- Priority 1+2+3 (deepenings 10–12): ~34 + 3 deepenings × 1.5 h =
  ~38–39 hours.
- Full punch-list including item 13: ~41 hours. **Fits a focused
  5–7 day window** in line with the Vol 1 Landau batch.

**Originator-prose targets.** Landau Vol 5 is **partial originator**.
Mandatory originator-prose items:

- **Item 4** (`08.12.01` fluctuation-dissipation): Landau-Lifshitz 1957
  (*Sov. Phys. JETP* 5:512) — **co-originator with Callen-Welton 1951
  and Kubo 1957**. Apex unit; cite all three.
- **Item 5** (`08.02.04` Landau phenomenological theory): Landau 1937
  (*Phys. Z. Sowjet.* 11:26 + *Zh. Eksp. Teor. Fiz.* 7:19) — **sole
  originator** of the entire phenomenological mean-field / order-
  parameter programme. Apex unit; foundational for FT 2.09
  Goldenfeld and FT 2.13 Itzykson-Drouffe downstream.

Joint originator-citations:

- **Item 1 (microcanonical/Liouville):** Gibbs 1902.
- **Item 2 (thermodynamic potentials):** Gibbs 1875–78; Nernst 1906
  (Nachr. König. Ges. Wiss. Göttingen).
- **Item 3 (Bose-Fermi gases):** Bose 1924 / Einstein 1924 / Fermi
  1926 / Sommerfeld 1928 (*Z. Phys.* 47:1).
- **Item 6 (Debye):** Debye 1912 / Einstein 1907.
- **Item 7 (Maxwell distribution):** Maxwell 1860 / Boltzmann 1872.
- **Item 8 (virial / vdW):** Mayer 1937 / van der Waals 1873.
- **Item 9 (Einstein fluctuations):** Einstein 1910 / Smoluchowski 1908.

**Notation crosswalk concerns (Landau Vol 5-specific).** Recorded
inline in the Master sections of each new unit:

- **Temperature in energy units:** Landau Vol 5 sets $k_B = 1$
  throughout, writes $T$ for $k_B T$. Codex 22-shipped units are
  inconsistent — some carry $\beta$, some $T$. Pin a chapter-wide
  note in `08.01.05` Master section: Landau convention is $k_B = 1$,
  Codex convention varies by unit, with explicit conversion.
- **Internal energy symbol:** Landau $E$ vs. American physicist $U$.
  Pin Master-tier disambiguation in `08.10.01`.
- **Order parameter:** Landau $\eta$, Codex SSB unit
  `08.02.02-spontaneous-symmetry-breaking` uses $\phi$. Pin
  cross-reference table in `08.02.04`.
- **Grand potential:** Landau $\Omega = -PV$ collides with $\Omega$
  for state-count in §7. Pin disambiguation in `08.10.01`.
- **Action vs. entropy collision:** Landau writes $S$ for entropy
  (Vol 5 convention); Vol 1 wrote $S$ for action. Pin a cross-volume
  reminder in `08.10.01` Master.
- **Free energy notation:** Landau $F$ for Helmholtz, $\Phi$ for
  Gibbs (P,T-natural); American convention $G$ for Gibbs. Pin
  conversion in `08.10.01`.

**DAG edges.** New prerequisites for priority-1+2 (assumes all current
22 `08-stat-mech/` units are shipped):

- `08.01.05` (microcanonical) ← {`05.02.07` Liouville Vol 1,
  `00.02.05` probability prereq already there} → enables everything else.
- `08.10.01` (thermodynamic potentials) ← {`08.01.04` free energy
  shipped, `00.02.05` probability}; → `08.10.02`, `08.11.01–03`,
  `08.12.01–02`.
- `08.11.01` (quantum gases) ← {`08.10.01`, `08.01.05`};
  → `08.11.02` Debye, eventually `2.10`'s sibling FT 2.14 / 3.x
  topics on superfluids if Vol 9 is later added.
- `08.11.02` (Debye) ← `08.11.01`.
- `08.11.03` (real gases / vdW) ← `08.10.01`.
- `08.01.06` (Maxwell distribution) ← `08.01.03`.
- `08.12.01` (FDT) ← {`08.10.01`, `08.12.02`}.
- `08.12.02` (thermodynamic fluctuations) ← `08.10.01`.
- `08.02.04` (Landau phenomenological theory) ← {`08.02.01` mean-
  field shipped, `08.05.01` critical exponents shipped}; deepens
  both without duplicating.

**Chapter structure.** Adds two new sub-chapters to `08-stat-mech/`:

- **`08.10-thermodynamics/`** — items 2, 13 (Maxwell relations,
  Clausius-Clapeyron). Optional alias `08.10-foundations/`.
- **`08.11-quantum-gases/`** — items 3, 6, 8 (Bose-Fermi, Debye,
  van der Waals).
- **`08.12-fluctuations/`** — items 4, 9 (FDT, Einstein fluctuations).

Extends:
- **`08.01-partition/`** — item 1, 7 (microcanonical, Maxwell
  distribution).
- **`08.02-mean-field/`** — item 5 (Landau phenomenological theory).

**Composite with shipped 22-unit chapter.** Most efficient production
order: because the 22-unit shipped chapter is **field-theoretic-RG
heavy**, the Landau Vol 5 punch-list is **purely complementary** —
no re-production of mean-field-Onsager-Wilson-Fisher-Wick-lattice-
gauge material. The 9 new units of priority-1+2 (items 1–9) plus 3
deepenings of existing units = **~30% overlap with shipped Codex
content, ~70% net-new physicist-thermodynamics material**.

**Apex unit designations.** Items 4 and 5 are both **apex units**
(originator-prose, paraphrasing Landau-Lifshitz 1957 §125 and
Landau 1937 directly). Item 1 is **near-apex** for the Gibbs-1902
microcanonical sequencing (foundational across the chapter but not
originator-prose-mandatory). All three warrant extended budget
(5–6 h each rather than the typical 3.5 h).

---

## §5 What this plan does NOT cover

- **Quantum statistical mechanics in a QFT sense.** Landau Vol 5 stops
  at quantum statistics for distinguishable / Bose / Fermi particles
  on configuration-space wavefunctions; thermal field theory is FT
  2.13 (Itzykson-Drouffe *Statistical Field Theory*). Codex
  `08.05–08.09` material — Wilson-Fisher RG, conformal criticality,
  lattice gauge — is **already shipped** and not duplicated.
- **Superfluidity and Bose / Fermi liquids.** Deferred to Vol 9
  *Statistical Physics, Part 2* (not on Fast Track at present).
  Ideal-gas BEC is in scope (item 3 Master); the Landau two-fluid
  model and roton spectrum are out of scope.
- **Non-equilibrium kinetic theory.** Deferred to Vol 10
  *Physical Kinetics* (not on FT). Boltzmann equation, transport
  coefficients out of scope.
- **Critical-phenomena Wilson RG and ε-expansion.** Already shipped
  in `08.04-rg/` and is the territory of FT 2.13 Itzykson-Drouffe
  (Goldenfeld serves as bridge text at FT 2.09). This audit
  references Landau-Ginzburg as the *predecessor* but does not
  duplicate the RG treatment.
- **Critical-phenomena RG as a separate FT entry.** Critical-phenomena
  RG belongs to FT 2.13 Itzykson-Drouffe and its dedicated audit
  plan; this plan stays on the Landau Vol 5 side of the bridge.
- **Measure-theoretic / rigorous statistical mechanics.** Ruelle,
  Israel, Lanford, Dobrushin are not in Landau's territory and
  not in scope. If a future FT entry adds a rigorous
  statistical-mechanics text (Friedli-Velenik *Statistical Mechanics
  of Lattice Systems*), separate audit.
- **Line-number Problem inventory.** Landau's ~250 Problems form a
  separate per-section problem corpus. Inventory deferred under the
  reduced-audit constraint.
- **Russian original.** Translation differences (Sykes-Kearsley vs.
  Russian) not catalogued; physicist-conventions track the English
  edition. Pre-1989 Soviet text — copyright nontrivial; English
  edition remains commercial.
- **Statistical Physics Part 2 (Vol 9).** Not a FT entry; if added
  later, separate plan covering Bose / Fermi liquids, BCS
  superconductivity, hydrodynamic fluctuations.

---

## §6 Acceptance criteria for FT equivalence (Landau Vol 5)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9,
*Statistical Physics, Part 1* is at equivalence-coverage when:

- ≥95% of Landau's named results (and worked formulae) in
  Chapters I–IX, XII, XIV map to Babel Bible units **at Landau-equivalent
  pedagogical depth** (currently ~30%; after priority-1 ~55%; after
  priority-1+2 ~80%; after priority-1+2+3 ~90%; after priority-4
  ~95%). Items 4 (FDT), 5 (Landau 1937 phenomenological theory),
  and 3 (quantum gases) are the highest-leverage individual gaps.
- ≥80% of Landau's Problems have a Codex equivalent worked example
  (currently ~10%; closing requires a dedicated Landau-Vol-5-
  problem-pack pass — analogous to the proposed Vol 1 pass — out of
  scope for this audit).
- ≥90% of Landau's worked examples appear in a unit (currently ~10%;
  priority-1+2 brings to ~70%; remainder needs dedicated worked-
  example densification).
- Notation crosswalk pinned in Master sections per §4. No standalone
  `notation/landau-vol-5.md` needed (the per-unit Master-tier
  paragraphs suffice).
- DAG: for every microcanonical → canonical → grand-canonical → ideal
  gas → Bose/Fermi gas chain in Landau Chs. I–V, an unbroken
  prerequisite chain in Babel Bible's DAG. Currently breaks at `08.01.05`
  (microcanonical) — item 1 closes it.
- Pass-W weaving connects new units to existing `08.01-*`, `08.02-*`,
  `08.05-*`, `08.06-*`, and laterally to `05.02.07` Liouville Vol 1
  (Hamiltonian mechanics → statistical mechanics).
- **Originator-prose units shipped**: items 4 (`08.12.01` FDT) and 5
  (`08.02.04` Landau 1937) both require explicit paraphrase of
  Landau-Lifshitz primary sources with `[ref:]` citations.

**Reduced-audit caveat.** Per AGENTIC_EXECUTION_PLAN.md §6.6 hard
rule, P5 verification cannot mark Landau Vol 5 as
`equivalence-covered` until a **full audit replaces this reduced
one** (PDF acquired or canonical local TOC inventory at section-by-
section depth). The reduced status applies even if all 13 punch-list
items ship.

**Prerequisite alert.** Landau Vol 5 sits at FT 2.10 — **after**
the Section 1 mathematics + classical-mechanics anchors (Apostol Vols I–II,
Lang, Landau Vol 1 mechanics, Arnold MM, Landau Vol 2 Classical
Fields, Cannas symplectic). Codex must keep the QM-foundations
chain intact: introductory probability / measure theory (currently
in `00-foundations` and `04-analysis`) must be present for items 1,
2, 4, 9; Landau Vol 1 §46 Liouville (already shipped at
`05.02.07-liouville-volume`) is lateral-cited from item 1. This
Landau Vol 5 plan does not re-audit those prerequisites.

**Honest scope.** Mid-sized equivalence gap. The Codex
`08-stat-mech/` chapter is mature on the field-theoretic / RG side
(22 units shipped, of which 7 are at Landau-equivalent depth on
shared topics: partition function, free energy, Boltzmann
distribution, Ising, mean-field, critical exponents, spontaneous
symmetry breaking) — but the **Landau-canonical physicist-
thermodynamics + fluctuations + worked-example layer** (microcanonical
sequencing, Maxwell relations, Bose/Fermi gases, Debye, fluctuation-
dissipation, Landau 1937 phenomenological theory, van der Waals) is
substantially uncaptured. Priority-1+2 batch is **9 new units + 3
deepenings** — comparable to the Landau Vol 1 batch in scope but
with a different center of mass (Vol 1 added Lagrangian-physics
worked examples; Vol 5 adds physicist-thermodynamics + fluctuation /
FDT / Landau-phase-transition material).

---

## §7 Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md`.
- **Local copy:** **NOT RESOLVED.**
  `reference/textbooks-extra/` holds Vols 1, 2, 6, 8 of the Course
  of Theoretical Physics but **not** Vol 5. This is the dominant
  factor making the audit `reduced`. Recommended remediation:
  acquire a personal copy (legal Pergamon / Butterworth-Heinemann
  edition) or scan into `reference/textbooks-extra/` as
  `Vol 5 - Landau, Lifshitz - Statistical Physics Part 1 (3rd ed,
  1980).pdf` to mirror the Vol 1 / Vol 2 / Vol 6 / Vol 8 pattern.
  Promote audit to `full` after.
- **WebFetch fallback under the 3-hour budget:** not pursued in this
  pass — the section-by-section TOC of Vol 5 is stable across all
  editions since 1958 and is reproduced in detail in all four peer
  sources cited below, which is sufficient for a `reduced` plan stub.
  A subsequent `full` audit pass should pull the PDF if a legal
  source is available.
- **Citation form:** L. D. Landau, E. M. Lifshitz, *Statistical
  Physics, Part 1*, 3rd ed., revised and enlarged by E. M. Lifshitz
  and L. P. Pitaevskii, translated from the Russian by J. B. Sykes
  and M. J. Kearsley, Course of Theoretical Physics Volume 5
  (Pergamon / Butterworth-Heinemann, Oxford, 1980; reprinted
  continuously). ISBN 0 7506 3372 7.
- **Russian original:** *Statisticheskaya Fizika*, Nauka, Moscow,
  1937 (1st); 1951 (2nd); 1964 (3rd); 1976 (4th). Pre-1989 Soviet
  text — copyright nontrivial; English Pergamon / Butterworth
  edition remains commercial.
- **Peer sources cited in this audit (peer-anchors for §1, ≥3
  required):**
  - F. Reif, *Fundamentals of Statistical and Thermal Physics*
    (McGraw-Hill, 1965; reprinted Waveland 2009) — American
    undergraduate physicist-thermodynamics canonical companion to
    Landau; treats microcanonical-first like Landau but at greater
    pedagogical density.
  - M. Kardar, *Statistical Physics of Particles*
    (Cambridge UP, 2007) — graduate-level companion; Vol I (Particles)
    parallels Landau Vol 5 directly chapter-by-chapter at MIT
    graduate level. **Most direct modern equivalent.**
  - N. Goldenfeld, *Lectures on Phase Transitions and the
    Renormalization Group* (Westview / Frontiers in Physics, 1992)
    — modern bridge text between Landau-Ginzburg phenomenological
    theory and Wilson-Fisher RG; cites Landau 1937 as originator
    and reproduces the Ginzburg criterion in detail. **The
    canonical reference for items 5 and 11.**
  - R. K. Pathria, P. D. Beale, *Statistical Mechanics*, 3rd ed.
    (Academic Press / Elsevier, 2011) — comprehensive physicist
    reference; treats both microcanonical-first and partition-
    function-first sequencings; covers virial expansion and
    Bose-Einstein condensation at the same depth as Landau.
- **Additional originator references** (cited in §3 punch-list):
  J. W. Gibbs, *Elementary Principles in Statistical Mechanics*
  (Yale UP, 1902); J. W. Gibbs, "On the Equilibrium of Heterogeneous
  Substances" (*Trans. Conn. Acad. Arts Sci.* 3:108, 343 (1875–78));
  J. C. Maxwell, "Illustrations of the dynamical theory of gases"
  (*Phil. Mag.* 19:19 (1860)); L. Boltzmann, "Weitere Studien über
  das Wärmegleichgewicht unter Gasmolekülen" (*Wien. Ber.* 66:275
  (1872)); A. Einstein, "Die Plancksche Theorie der Strahlung und
  die Theorie der spezifischen Wärme" (*Ann. Phys.* 22:180 (1907));
  P. Debye, "Zur Theorie der spezifischen Wärmen" (*Ann. Phys.*
  39:789 (1912)); S. N. Bose, "Plancks Gesetz und Lichtquanten-
  hypothese" (*Z. Phys.* 26:178 (1924)); A. Einstein, "Quantentheorie
  des einatomigen idealen Gases" (*Sitz. Preuss. Akad.* (1924));
  E. Fermi, "Zur Quantelung des idealen einatomigen Gases"
  (*Z. Phys.* 36:902 (1926)); J. E. Mayer, "The statistical
  mechanics of condensing systems" (*J. Chem. Phys.* 5:67 (1937));
  J. D. van der Waals, *Over de Continuiteit van den Gas- en
  Vloeistoftoestand* (Leiden, 1873); A. Einstein, "Theorie der
  Opaleszenz von homogenen Flüssigkeiten und Flüssigkeits-
  gemischen in der Nähe des kritischen Zustandes" (*Ann. Phys.*
  33:1275 (1910)); H. Nyquist, "Thermal agitation of electric
  charge in conductors" (*Phys. Rev.* 32:110 (1928));
  L. D. Landau, "On the theory of phase transitions" (*Phys. Z.
  Sowjet.* 11:26 (1937); *Zh. Eksp. Teor. Fiz.* 7:19 (1937));
  L. D. Landau, E. M. Lifshitz, "Statistical fluctuations and
  generalized susceptibility" (*Sov. Phys. JETP* 5:512 (1957));
  H. B. Callen, T. A. Welton, "Irreversibility and generalized
  noise" (*Phys. Rev.* 83:34 (1951)); R. Kubo, "Statistical-
  mechanical theory of irreversible processes I" (*J. Phys. Soc.
  Japan* 12:570 (1957)).
- **Local copy retention.** If acquired in the future, store at
  `reference/textbooks-extra/Vol 5 - Landau, Lifshitz - Statistical
  Physics Part 1 (3rd ed, 1980).pdf` — mirroring the Vol 1 / 2 / 6 /
  8 paths and not promoting into `reference/fasttrack-texts/02-quantum-stat/`,
  which is reserved for free-license / public-domain texts.
