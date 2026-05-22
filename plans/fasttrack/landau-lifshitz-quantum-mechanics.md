# Landau, Lifshitz — *Quantum Mechanics: Non-Relativistic Theory* (Fast Track 2.01) — Audit + Gap Plan

**Book:** L. D. Landau, E. M. Lifshitz, *Quantum Mechanics: Non-Relativistic
Theory*, Volume 3 of the *Course of Theoretical Physics*. Canonical English
edition: 3rd revised English edition, translated from the Russian by J. B.
Sykes and J. S. Bell, Pergamon Press / Butterworth-Heinemann, 1977 (reprinted
through the 1980s and 1990s; ISBN 0-08-020940-8). Russian original 1st
edition 1948 (Landau and Lifshitz); the 4th Russian edition (1989) is the
basis of the 3rd revised English. xv + 677 pp., 18 chapters, ~700 Problems
with solutions.

**Fast Track entry:** 2.01 of `docs/catalogs/FASTTRACK_BOOKLIST.md` — the
QM-fundamentals slot of Section 2 (Quantum Theory and Statistical Physics).
Sibling entry 2.02 *Quantum Theory, Groups and Representations* (Woit) is
already audited at `plans/fasttrack/woit-quantum-theory-groups-representations.md`
and ships the mathematician-facing rep-theoretic half of QM; this Landau
plan picks up the **physicist-coordinate worked-example layer** that Woit
deliberately skips. Section-1 prerequisite is Vol 1 *Mechanics* (FT 1.02);
sibling Vol 2 *Classical Theory of Fields* (FT 1.03) shares the action-
principle editorial spine.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite of the
orchestration protocol in `docs/plans/AGENTIC_EXECUTION_PLAN.md`). Output is
a concrete punch-list of new units to write so that *Quantum Mechanics:
Non-Relativistic Theory* (LL3 hereafter) is covered to the FT-equivalence
threshold (≥95% effective coverage; see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit —
LL3's ~700 Problems with solutions are inventoried at chapter level only.

**Audit completeness: `reduced`** per AGENTIC_EXECUTION_PLAN §6.6. The PDF
is not in the local `reference/textbooks-extra/` archive (Vols 1, 2, 6, 8
are present; Vol 3 is not). LL3 is BUY-only (Pergamon / Butterworth-
Heinemann holds rights; no author-hosted PDF, no public-domain Internet
Archive scan accessible at audit time). The §1 inventory below is built
from the publicly visible Elsevier / ScienceDirect TOC, peer-text
cross-references (Sakurai-Napolitano, Cohen-Tannoudji-Diu-Laloë,
Griffiths-Schroeter, Messiah, Dirac, Weinberg *Lectures*), and the citation
network. P5 verification on this audit cannot mark LL3 `equivalence-covered`;
only `equivalence-partial` until re-audited from a full source. Re-audit
upgrade queued in `docs/catalogs/NEED_TO_SOURCE.md`.

**Substantial overlap with the Woit plan
(`plans/fasttrack/woit-quantum-theory-groups-representations.md`).** LL3 and
Woit cover the same canonical territory (Hilbert space, operators,
Schrödinger equation, angular momentum, hydrogen, identical particles)
through opposite editorial choices (LL3: physicist-coordinates-first,
worked-examples-driven, 677 pp.; Woit: rep-theory-first, theorem-driven,
580 pp.). **The Woit batch (chapters 09.\*, when shipped) covers Hilbert-
space axioms, $SU(2)$, Stone-von Neumann, the Heisenberg group, the
harmonic oscillator via creation/annihilation, semidirect-product free
particle, and Wigner classification.** The Babel Bible 12-quantum chapter
also ships pre-Woit units for the four-blade core: foundations (12.01),
formalism (12.02), Schrödinger picture (12.03), one-dimensional problems
(12.04), angular momentum (12.05), hydrogen (12.06), and time-independent
+ time-dependent perturbation theory (12.07). This Landau plan does not
double-count those units; it itemises **LL3-distinctive worked-example and
applied-method gaps** that neither Woit nor the existing 12-quantum corpus
captures: WKB / Bohr-Sommerfeld, Hartree-Fock SCF, multi-electron atom and
LS coupling, diatomic molecule and Born-Oppenheimer, Landau levels in a
magnetic field, density-matrix formalism, time-reversal and Kramers'
degeneracy, Stark-Zeeman effects in LL framing, variational
(Rayleigh-Ritz) method, exchange interaction and the helium atom,
quasi-classical matrix elements, and depth on Born approximation /
partial-wave / inelastic scattering beyond the survey unit
`12.08.01-scattering-theory.md`.

---

## §1 What LL3 is for

Landau-Lifshitz Volume 3 is **the canonical physicist's exposition of
non-relativistic quantum mechanics**: the entire content of the modern
QM curriculum (axioms, Schrödinger equation, central-field bound states,
perturbation theory, scattering, identical particles, multi-electron atoms,
molecules, magnetic-field problems) is derived inside ~677 pages from a
single editorial premise — **operator algebra on Hilbert space, with the
Schrödinger equation as the dynamical postulate and physical examples as
the primary pedagogical mechanism.** Definitions are minimal, arguments
proceed by physical reasoning rather than formal functional analysis, and
every chapter ends with a long Problem section whose solutions are
mini-chapters in their own right.

Density: ~250 named results in 677 pp.; ~700 Problems with worked
solutions. LL3 is **extremely terse** in prose but **extremely dense** in
worked computations; the Problems are the canonical physics problem
corpus from which Sakurai, Cohen-Tannoudji, Messiah, and virtually every
subsequent QM text borrow heavily. Reading LL3 cold is famously hard;
reading it as a second pass after Sakurai or Griffiths is a multiplier.

Distinctive editorial framing, in roughly the order LL3 develops it:

1. **Axioms in three pages, then straight to problems.** Ch. I §§1-7
   introduces the uncertainty principle, superposition, the wavefunction,
   operators, and the measurement postulate in 17 pages — half the
   page-budget Cohen-Tannoudji spends on the same material. Hilbert
   space is implicit (the wavefunction is a function on configuration
   space), not foregrounded; Dirac bra-ket notation is used sparingly.
   Compare Cohen-Tannoudji Ch. I-III (200+ pp. on the formalism alone)
   and Sakurai Ch. 1-2 (similar).
2. **Energy and momentum as operators before Schrödinger.** Ch. II §§8-15
   develops the Hamiltonian, stationary states, momentum operator, and
   the energy spectrum *before* writing down the Schrödinger equation
   in Ch. III §17. The Schrödinger equation is then derived as the
   evolution rule that makes $\hat H$ the generator of time
   translations. **Landau-distinctive sequencing.**
3. **One-dimensional motion as the testing ground (Ch. III).** Ch. III
   §§17-25 (60 pp.) covers 1D motion exhaustively: free particle,
   bound states in a well, reflection and transmission, transmission
   coefficient, the linear oscillator (both algebraic and Hermite-
   polynomial derivations), and the general theory of bound spectra
   in 1D (Sturm oscillation theorem). **LL3-canonical worked-example
   density: the Problems include parabolic-cylinder functions for the
   anharmonic oscillator, asymptotic behaviour of bound-state
   wavefunctions, and the WKB connection formulas applied to 1D
   tunnelling.**
4. **Angular momentum from commutators, not from $SU(2)$ representations.**
   Ch. IV §§26-30 derives the angular-momentum algebra
   $[\hat L_i, \hat L_j] = i \hbar \epsilon_{ijk} \hat L_k$ from the
   rotation generators on functions of $\mathbf r$, builds the
   spherical harmonics $Y_{\ell m}(\theta, \varphi)$ as eigenfunctions
   of $\hat L^2$ and $\hat L_z$, and tabulates the ladder $\hat L_\pm$
   action on $|\ell, m\rangle$. **LL3 does not use $SU(2)$ language;
   Woit's `09.01.04` covers the same content via $SU(2)$ rep theory.
   The result is identical; the framing is the opposite.**
5. **Centrally symmetric field and the Coulomb problem (Ch. V).**
   Ch. V §§31-36 covers the radial Schrödinger equation, the
   hydrogen atom by Laguerre polynomials, the continuous spectrum of
   Coulomb scattering, and the parabolic-coordinate separation that
   gives the Stark effect cleanly. **The Coulomb problem is solved
   twice — once in spherical, once in parabolic coordinates — to
   prepare for the Stark effect.** This is a LL3-distinctive choice.
6. **Perturbation theory in three flavours (Ch. VI).** Ch. VI §§38-43
   covers time-independent (non-degenerate and degenerate, with
   Wigner-Brillouin and Rayleigh-Schrödinger comparison), the
   *secular* perturbation theory for degenerate cases that arise from
   a symmetry, and time-dependent (transitions, periodic and constant
   perturbations, Fermi's golden rule). **The Wigner-Brillouin form
   is rarely taught modernly; LL3 retains it.**
7. **The quasi-classical case (Ch. VII).** Ch. VII §§46-53 develops
   the WKB approximation systematically: the semi-classical wavefunction
   $\psi \sim p^{-1/2} \exp\left(\tfrac{i}{\hbar} \int p \, dx\right)$,
   connection formulas at turning points, Bohr-Sommerfeld quantization
   $\oint p \, dq = 2\pi \hbar (n + 1/2)$, transmission through a
   barrier (Gamow factor), and the application to alpha decay.
   **The Maslov-index half-integer correction is implicit in LL3's
   connection-formula derivation; Arnold and modern symplectic texts
   make it explicit.** LL3-canonical.
8. **Spin from Pauli matrices, two-component spinors (Ch. VIII).**
   Ch. VIII §§54-60 introduces spin operationally — observed
   Stern-Gerlach splitting forces a two-valued internal degree of
   freedom — and builds the Pauli algebra $\hat\sigma_i \hat\sigma_j
   = \delta_{ij} + i \epsilon_{ijk} \hat\sigma_k$. Two-component
   spinors transform under $SU(2)$, but the group-theoretic framing
   is held implicit until Ch. XII (theory of symmetry). **LL3 ships
   spin twice: once in Ch. VIII as a two-component formalism, once
   in Ch. XII as a representation of $SU(2)$.**
9. **Identical particles and the exchange interaction (Ch. IX).**
   Ch. IX §§61-66 develops Bose / Fermi statistics, the
   (anti)symmetrisation postulate, and the **exchange interaction**
   in the helium atom — the energy splitting between para- and
   ortho-helium that has no classical analog and arises purely from
   the Slater-determinant structure. **Exchange interaction is
   LL3-canonical worked-example: hidden in modern texts behind
   second-quantised notation.**
10. **The atom (Ch. X).** Ch. X §§67-75 builds multi-electron atomic
    structure: Thomas-Fermi statistical model, the self-consistent
    field (Hartree and Hartree-Fock), LS / Russell-Saunders coupling,
    Hund's rules, the periodic table from the Aufbau principle and
    spin-orbit coupling. **LL3 derives Hund's rules from the
    exchange-energy argument**, not as empirical rules. The
    Thomas-Fermi treatment is one of LL3's signature pedagogical
    contributions.
11. **The diatomic molecule (Ch. XI).** Ch. XI §§77-83 covers the
    Born-Oppenheimer approximation, electronic terms of diatomic
    molecules, rotational and vibrational levels, and the symmetry
    classification by $C_{\infty v}$ / $D_{\infty h}$ point groups.
    **Born-Oppenheimer is derived from a $m_e / M_N$ small-parameter
    expansion**, not stated; LL3 is the canonical physicist's
    reference for the BO separation.
12. **Theory of symmetry (Ch. XII).** Ch. XII §§91-100 collects
    discrete-symmetry results: parity, time-reversal, **Kramers'
    degeneracy** for half-integer spin under time-reversal,
    selection rules from finite point groups, the Wigner-Eckart
    theorem for matrix elements of tensor operators between angular-
    momentum eigenstates. **LL3 ships the Wigner-Eckart theorem and
    Kramers' degeneracy in this chapter, after most applications are
    already done — a striking sequencing inversion compared to modern
    pedagogy (Sakurai introduces both in the angular-momentum chapter).**
13. **Polyatomic molecules (Ch. XIII).** Ch. XIII §§101-105 extends
    the molecular treatment: normal modes, vibrational spectra,
    rotational spectra of asymmetric tops, vibration-rotation
    coupling. **Application-heavy; few modern QM texts retain it
    at this depth.**
14. **Addition of angular momenta and Clebsch-Gordan (Ch. XIV).**
    Ch. XIV §§106-109 introduces Clebsch-Gordan coefficients,
    Racah's $6j$-symbols, and the explicit reduction of tensor
    products $D^{j_1} \otimes D^{j_2} = \bigoplus_{j=|j_1-j_2|}^{j_1+j_2}
    D^{j}$. **Woit `09.02.04` covers the rep-theoretic statement;
    LL3 gives explicit tabulations.**
15. **Motion in a magnetic field — Landau levels (Ch. XV).** Ch. XV
    §§110-115 quantises a charged particle in a uniform magnetic
    field. The spectrum
    $E_n = \hbar \omega_c (n + 1/2) + p_z^2 / 2m$ with cyclotron
    frequency $\omega_c = |e|B / mc$ — these are the **Landau
    levels**, named after the originator of this chapter. The
    degeneracy per area $eB / hc$ is derived from the gauge-fixed
    wavefunction. **Originator-prose mandatory: LL3 §111 is the
    Landau-paper exposition in textbook form.** Quantum Hall effect
    (post-1980) is later; LL3 stops at the bare spectrum.
16. **Nuclear structure (Ch. XVI).** Ch. XVI §§116-119 sketches the
    nuclear shell model, magic numbers, and basic isospin. **Shallow
    treatment; serves as a bridge to Vol 4 *Quantum Electrodynamics*
    and external nuclear-physics references.**
17. **Elastic collisions (Ch. XVII).** Ch. XVII §§121-130 covers
    scattering theory in physicist's idiom: the scattering amplitude
    $f(\theta)$ and cross-section $d\sigma / d\Omega = |f|^2$,
    partial-wave expansion with phase shifts $\delta_\ell$, low-energy
    expansion (scattering length $a$ and effective range $r_0$), the
    **Born approximation** as the first iterate of the
    Lippmann-Schwinger integral equation, and worked examples
    (square well, Yukawa, Coulomb — with the famous Coulomb
    logarithm pathology). **LL3's scattering chapter is the canonical
    physicist's reference; the existing Babel Bible unit
    `12.08.01-scattering-theory.md` covers this at survey depth only.**
18. **Inelastic collisions (Ch. XVIII).** Ch. XVIII §§131-150
    extends to inelastic processes: excitation, ionisation, the
    distorted-wave Born approximation, two-channel and multi-channel
    formalism. **Heaviest chapter in the book (~80 pp.); the modern
    bedrock for atomic and molecular collision physics.**

LL3 stops before relativistic QM (Vol 4 *Quantum Electrodynamics*),
before second quantisation (Vol 4 again, and Babel Bible's `12.13-fock-spaces`
covers it independently), and before formal scattering theory (Lax-
Phillips, abstract Hilbert-space scattering). It also stops short of
modern open-system QM (master equations, decoherence), measurement
theory beyond the projection postulate, and quantum information.

LL3 is **not** a first introduction to QM for the unprepared — its
prose density and example-driven derivations assume Vol 1 *Mechanics*
fluency and a working knowledge of linear algebra, special functions
(Hermite, Laguerre, Legendre, spherical harmonics), and ordinary
differential equations. The canonical alternative texts cited
throughout this §1 inventory and as audit cross-checks are:

- **J. J. Sakurai, J. Napolitano, *Modern Quantum Mechanics*, 2nd ed.
  (Cambridge UP, 2017).** The encyclopaedic American counterpart;
  ket-formalism-first, $SU(2)$-emphasised, with very explicit
  Wigner-Eckart and rotation-operator treatment. Sakurai is the
  Anglosphere standard.
- **C. Cohen-Tannoudji, B. Diu, F. Laloë, *Quantum Mechanics*, Vols
  I-II (Wiley, 1977).** The encyclopaedic French counterpart; ~1500
  pp. across two volumes, exhaustively pedagogical with
  "complement" sections at the end of each chapter providing
  alternative derivations and applications. Cohen-Tannoudji is the
  reference for *how* to teach a given topic; LL3 is the reference
  for *what* to teach.
- **D. J. Griffiths, D. F. Schroeter, *Introduction to Quantum
  Mechanics*, 3rd ed. (Cambridge UP, 2018).** The canonical
  undergraduate introduction; covers ~60% of LL3 at half the
  depth. Bridge text for FT 2.01 readers coming from physics-major
  undergraduate.
- **A. Messiah, *Quantum Mechanics*, Vols I-II (North-Holland, 1961;
  Dover reprint 1999).** The slightly-older European competitor to
  Cohen-Tannoudji; comparable in scope and depth to LL3 but with
  more attention to formal scattering theory (Ch. XIX-XXI of
  Messiah Vol II).
- **P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed.
  (Oxford UP, 1958).** The originator's text; ket-formalism source.
  LL3 cites Dirac as the canonical formalism reference; Woit cites
  Dirac as the originator of the rep-theoretic approach.

A sixth optional cross-check, useful for the QM-via-functional-analysis
bridge that LL3 deliberately avoids, is **G. Teschl, *Mathematical
Methods in Quantum Mechanics: With Applications to Schrödinger
Operators*, 2nd ed. (AMS GSM 157, 2014)** — the canonical
mathematician's reference for self-adjoint Schrödinger operators
on $L^2(\mathbb{R}^d)$.

---

## §2 Prior art / cross-references

### Existing Babel Bible coverage (12-quantum, 18 units shipped)

Cross-referenced against the current `content/12-quantum/` corpus.
✓ = covered at LL3-equivalent depth, △ = topic present but
LL3-distinctive worked-example layer or framing not captured,
✗ = not covered.

| LL3 chapter / topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Ch. I — Basic concepts (uncertainty, superposition, operators) | `12.01.01`, `12.01.02`, `12.02.01`, `12.02.02` | ✓ | Foundations covered (wave-particle, Stern-Gerlach, Hilbert space, operators). |
| Ch. II — Energy and momentum (Hamiltonian, stationary states) | `12.02.02`, `12.03.01` | △ | Hermiticity and Schrödinger/Heisenberg pictures shipped; LL3's *energy-and-momentum-before-Schrödinger* sequencing not isolated as a unit. |
| Ch. III — Schrödinger equation; 1D motion | `12.03.01`, `12.04.01`, `12.04.02` | △ | Particle-in-box and QHO shipped; LL3's general 1D theory (Sturm oscillation theorem, asymptotic behaviour, parabolic-cylinder functions for double-well) absent. |
| Ch. IV — Angular momentum | `12.05.01` | △ | Operators and $SU(2)$ ladder shipped (Woit framing); LL3's spherical-harmonics-on-$\mathbb{R}^3$ derivation not the master statement. |
| Ch. V — Centrally symmetric field, Coulomb | `12.06.01` | △ | Hydrogen bound states shipped; LL3's parabolic-coordinate solution (prerequisite for Stark) absent. |
| Ch. VI §§38-41 — Time-independent perturbation | `12.07.01` | △ | Non-degenerate + degenerate shipped; LL3's Wigner-Brillouin form not in master tier. |
| Ch. VI §§42-43 — Time-dependent perturbation, golden rule | `12.07.02` | ✓ | Fermi's golden rule shipped. |
| Ch. VII — Quasi-classical case (WKB, Bohr-Sommerfeld) | — | ✗ | **Gap (LL3-canonical).** Semi-classical wavefunction, connection formulas, Bohr-Sommerfeld, Gamow factor, alpha decay all absent. |
| Ch. VIII — Spin, Pauli matrices | `12.01.02`, `12.05.01` | △ | Stern-Gerlach + $SU(2)$ shipped; LL3's two-component spinor formalism not isolated. |
| Ch. IX — Identical particles, exchange interaction | `12.09.01` | △ | Bose / Fermi (anti)symmetrisation shipped; exchange interaction and the helium-atom singlet-triplet splitting absent. |
| Ch. X — The atom (Thomas-Fermi, Hartree-Fock, LS coupling) | — | ✗ | **Gap (LL3-canonical).** No SCF, no LS coupling, no Hund's rules unit. |
| Ch. XI — Diatomic molecule, Born-Oppenheimer | — | ✗ | **Gap.** No molecular-structure unit; Born-Oppenheimer absent. |
| Ch. XII — Theory of symmetry (parity, time-reversal, Wigner-Eckart) | — | ✗ | **Gap.** Discrete-symmetry chapter wholly absent; Kramers' degeneracy and Wigner-Eckart absent. |
| Ch. XIII — Polyatomic molecules | — | ✗ | Gap (low-priority — application-heavy). |
| Ch. XIV — Addition of angular momenta, Clebsch-Gordan | (touched in `12.05.01`) | △ | Tensor-product covered abstractly; explicit Clebsch-Gordan tables and $6j$-symbols absent. |
| Ch. XV — Motion in a magnetic field, Landau levels | — | ✗ | **Gap (LL3-originator).** Landau levels and degeneracy absent. |
| Ch. XVI — Nuclear structure | — | ✗ | Gap (deferred — bridges to non-FT nuclear physics). |
| Ch. XVII — Elastic collisions (Born, partial waves) | `12.08.01` | △ | Survey unit shipped; LL3's full treatment (Lippmann-Schwinger, Coulomb, scattering length / effective range) needs depth. |
| Ch. XVIII — Inelastic collisions | — | ✗ | **Gap.** Distorted-wave Born, two-channel formalism absent. |

### Woit (FT 2.02) overlap and explicit drops

Per `plans/fasttrack/woit-quantum-theory-groups-representations.md`, the
Woit batch ships at `09.*` chapter slots and is canonically the rep-theoretic
half. **Explicitly dropped from this LL3 punch-list** to avoid double-count:

- **Hilbert-space axioms** (Woit `09.01.01`; Babel Bible already at `12.02.01`).
- **$SU(2)$ rep-theory and ladder for spin** (Woit `09.01.04`; Babel Bible
  `12.05.01`). LL3 Ch. IV is the same content, opposite framing.
- **Stone-von Neumann and the Heisenberg group** (Woit `09.02.02`). LL3
  treats the canonical commutation relations operationally; no need to
  re-derive them.
- **Harmonic oscillator via creation/annihilation** (Woit `09.04.01`;
  Babel Bible `12.04.02`). LL3 Ch. III ships the Hermite-polynomial form;
  Babel Bible's QHO unit already has both.
- **Quantum free particle as $E(3)$ representation** (Woit `09.03.03`).
  LL3 treats the free particle operationally in Ch. III; no rep-theoretic
  redundancy needed.
- **Wigner classification of relativistic particles** (Woit `09.05.02`).
  LL3 is non-relativistic; orthogonal scope.
- **Metaplectic representation and Bogoliubov transformations** (Woit
  `09.04.03`). LL3 does not cover.
- **Hydrogen atom via $\mathfrak{so}(4)$ symmetry** (Woit `09.05.04`).
  LL3 Ch. V solves hydrogen in spherical and parabolic coordinates; the
  Runge-Lenz $\mathfrak{so}(4)$-symmetry treatment is the Pauli 1926
  derivation that Woit ships rep-theoretically. **Drop** the
  $\mathfrak{so}(4)$ derivation from this LL3 plan; LL3-canonical
  parabolic-coordinates derivation is the prerequisite for Stark
  (which *is* in this plan).
- **Dirac equation and relativistic spin** (Woit `09.05.03`; Babel Bible
  `12.11.01`). Orthogonal — LL3 is non-relativistic.

### Adjacent textbook plans

- `plans/fasttrack/landau-lifshitz-mechanics.md` (FT 1.02): hard
  prerequisite for the Lagrangian/Hamiltonian framing that opens LL3
  Ch. II; Maupertuis (§44 of Vol 1) is the bridge to WKB (Ch. VII of
  Vol 3). Cross-reference items P1.01 and P1.02 below.
- `plans/fasttrack/landau-lifshitz-classical-theory-of-fields.md`
  (FT 1.03): shares LL editorial idiom (action principle, terse prose,
  Problems with solutions). No content overlap with LL3.
- `plans/fasttrack/woit-quantum-theory-groups-representations.md` (FT
  2.02): covered above. Co-anchor for spin and angular momentum.
- `plans/fasttrack/chatterjee-qft-lecture-notes.md` (FT 2.03):
  downstream — Chatterjee assumes LL3-level non-relativistic QM as
  prerequisite for canonical-quantisation construction.

---

## §3 Gap punch-list (priority-ordered)

The 12-quantum chapter is mature on the foundations / formalism /
basic-bound-states side (`12.01-12.07`), and the survey scattering and
identical-particles units (`12.08.01`, `12.09.01`) frame the topic at
beginner-to-intermediate depth. LL3 exposes gaps on **(a)** the
LL3-canonical approximate-methods layer (WKB, variational), **(b)** the
multi-electron / molecular layer (Hartree-Fock, LS coupling, diatomic
Born-Oppenheimer), **(c)** the magnetic-field / Landau-levels chapter
which has no Babel Bible coverage, **(d)** the discrete-symmetry chapter
(parity, time-reversal, Kramers, Wigner-Eckart), and **(e)** depth on the
survey scattering and identical-particles units.

Recommended slot ranges:

- **Extend `12-quantum/02-formalism/`** with the density-matrix unit
  (`12.02.03`).
- **Extend `12-quantum/07-perturbation/`** with WKB, variational,
  Stark/Zeeman (`12.07.03`-`12.07.05`).
- **Extend `12-quantum/08-scattering/`** with Born-approximation depth,
  partial-wave depth, inelastic (`12.08.02`-`12.08.04`).
- **Extend `12-quantum/09-identical-particles/`** with exchange/helium,
  Hartree-Fock, LS-coupling/atomic-structure, diatomic/Born-Oppenheimer
  (`12.09.02`-`12.09.05`).
- **New chapter `12-quantum/14-magnetic-field/`** for Landau levels
  (`12.14.01`).
- **New chapter `12-quantum/15-discrete-symmetry/`** for time-reversal /
  Kramers (`12.15.01`) and parity / Wigner-Eckart (`12.15.02`).

### Priority 1 — LL3-distinctive load-bearing additions (5 items)

1. **`12.07.04` WKB approximation and Bohr-Sommerfeld quantisation.** LL3 Ch. VII §§46-53 anchor; originator-prose required (Wentzel 1926 *Zeits. f. Physik* 38, Kramers 1926 *ibid.* 39, Brillouin 1926 *Comptes Rendus* 183 — independent simultaneous derivations; Jeffreys 1923 prior asymptotic-expansion paper). Three-tier; ~3200 words. Beginner: heuristic semi-classical wavefunction $\psi \sim p^{-1/2} \exp(\tfrac{i}{\hbar} \int p \, dx)$ from the classical action and the eikonal limit. Intermediate: connection formulas at turning points via Airy-function matching, Bohr-Sommerfeld quantisation condition $\oint p \, dq = 2\pi\hbar(n + 1/2)$ with explicit Maslov half-integer offset. Master: Gamow tunnelling factor $T \approx \exp(-2 \int_a^b |p| \, dx / \hbar)$ and application to alpha decay (Gamow 1928); validity criterion $\hbar |dp/dx| \ll p^2$. Bridge to `05.05.04-hamilton-jacobi` (Hamilton-Jacobi as the $\hbar \to 0$ limit) and `05.02.04-action-angle-coordinates`. **LL3-canonical, originator-prose mandatory; Codex-absent.**

2. **`12.09.03` Hartree-Fock self-consistent field method.** LL3 Ch. X §§69-70 anchor; originator-prose required (Hartree 1927-28 *Proc. Camb. Phil. Soc.* 24; Fock 1930 *Zeits. f. Physik* 61 — antisymmetrisation upgrade; Slater 1929 *Phys. Rev.* 34 — determinantal wavefunction). Three-tier; ~3000 words. Beginner: the variational principle as the foundation of approximate methods, motivation for the single-particle ansatz. Intermediate: Slater-determinant trial wavefunction for $N$ electrons, derivation of the Hartree-Fock equations $[\hat h + \hat V_H(\mathbf r) - \hat K(\mathbf r)] \psi_i = \epsilon_i \psi_i$ from $\delta \langle \Psi | \hat H | \Psi \rangle = 0$, the exchange operator $\hat K$ as the LL3-canonical non-local potential. Master: Koopmans' theorem, SCF iteration, comparison with Hartree (no exchange) and post-HF methods (configuration interaction is a follow-up). Bridge to `12.09.02` exchange interaction (prerequisite). **LL3-canonical, Codex-absent.**

3. **`12.14.01` Landau levels: charged particle in a uniform magnetic field.** LL3 Ch. XV §§110-112 anchor; **Landau is the originator** (Landau 1930 *Zeits. f. Physik* 64; the chapter is named after this result). Three-tier; ~2800 words. Beginner: classical cyclotron motion, the Lorentz-force Hamiltonian $\hat H = (\hat{\mathbf p} - e\mathbf A / c)^2 / 2m$ with $\mathbf B = \nabla \times \mathbf A$. Intermediate: Landau gauge $\mathbf A = (0, Bx, 0)$, separation of variables, reduction to a shifted harmonic oscillator; the spectrum $E_n = \hbar \omega_c (n + 1/2) + p_z^2 / 2m$ with $\omega_c = |e|B / mc$. Master: degeneracy per unit area $eB / hc$, magnetic length $\ell_B = \sqrt{\hbar c / |e|B|}$, the symmetric-gauge wavefunctions and lowest-Landau-level holomorphic structure; Aharonov-Bohm bridge (no full unit). Originator-prose: paraphrase Landau §111 directly. Bridge to `12.04.02-quantum-harmonic-oscillator` (algebraic structure) and `12.13.01-bosonic-fock-space-and-second-quantisation` (LLL → Bargmann-Fock). **Apex unit; originator-prose mandatory.**

4. **`12.15.01` Time-reversal symmetry and Kramers' degeneracy.** LL3 Ch. XII §§95-96 anchor; originator-prose required (Wigner 1932 *Nachr. Ges. Wiss. Göttingen* 31 — antiunitary operators; Kramers 1930 *Proc. Acad. Sci. Amsterdam* 33 — the degeneracy theorem). Three-tier; ~2400 words. Beginner: time reversal as the operation $\hat T: t \mapsto -t$ on wavefunctions, the antiunitary property $\langle \hat T \phi | \hat T \psi \rangle = \langle \psi | \phi \rangle$. Intermediate: action on operators ($\hat T \hat{\mathbf r} \hat T^{-1} = \hat{\mathbf r}$, $\hat T \hat{\mathbf p} \hat T^{-1} = -\hat{\mathbf p}$, $\hat T \hat{\mathbf S} \hat T^{-1} = -\hat{\mathbf S}$), spin-1/2 representation $\hat T = i \hat\sigma_2 \hat K$ with $\hat T^2 = -1$. Master: Kramers' degeneracy — for half-integer spin and time-reversal-symmetric Hamiltonians, every energy level is at least doubly degenerate, with $|\psi\rangle$ and $\hat T |\psi\rangle$ linearly independent; selection rules from time-reversal. Bridge to `12.11.01-dirac-equation-relativistic-spin` and condensed-matter applications (Kramers pairs in topological insulators). **LL3-canonical; Codex-absent.**

5. **`12.09.05` Diatomic molecule and the Born-Oppenheimer approximation.** LL3 Ch. XI §§77-80 anchor; originator-prose required (Born and Oppenheimer 1927 *Annalen der Physik* 84). Three-tier; ~2800 words. Beginner: separation of electronic and nuclear motion, the small parameter $\sqrt[4]{m_e / M_N}$ that organises the BO expansion. Intermediate: BO ansatz $\Psi(\mathbf r, \mathbf R) = \chi(\mathbf R) \phi(\mathbf r; \mathbf R)$, electronic Schrödinger equation at fixed $\mathbf R$, the resulting nuclear effective potential $E_{\text{el}}(\mathbf R)$ and the equilibrium internuclear distance. Master: rotational and vibrational levels around the BO minimum (Morse potential as canonical model), term symbols for diatomics ($^1\Sigma$, $^3\Pi$, etc.), failure of BO at conical intersections (mentioned only). Bridge to `12.09.04` LS coupling (atomic limit) and `05.09.02-adiabatic-invariants` (the BO expansion is an adiabatic approximation). **LL3-canonical; Codex-absent.**

### Priority 2 — LL3-canonical worked-example chapters (5 items)

6. **`12.09.02` Exchange interaction and the helium atom.** LL3 Ch. IX §§62-66 anchor; originator-prose anchor (Heisenberg 1926 *Zeits. f. Physik* 38 — the "exchange resonance"; Dirac 1929 *Proc. Roy. Soc.* A 123 — the spin-exchange Hamiltonian form). Three-tier; ~2200 words. Beginner: the antisymmetrisation postulate and the singlet/triplet split of two-electron states. Intermediate: Slater determinant for two electrons, computation of the helium ground-state energy by first-order perturbation theory, the exchange integral $K = \int \phi_1^*(\mathbf r_1) \phi_2^*(\mathbf r_2) V(\mathbf r_1, \mathbf r_2) \phi_2(\mathbf r_1) \phi_1(\mathbf r_2) \, d^3 r_1 d^3 r_2$. Master: para- vs ortho-helium spectroscopy, the Dirac-Heisenberg spin-exchange Hamiltonian $\hat H_{\text{ex}} = -J \hat{\mathbf S}_1 \cdot \hat{\mathbf S}_2$ as the *form* of the exchange interaction; bridge to magnetism (the Heisenberg model is the same Hamiltonian). **LL3-canonical; deepens `12.09.01`.**

7. **`12.09.04` Multi-electron atomic structure and LS coupling.** LL3 Ch. X §§71-75 anchor; originator-prose (Russell and Saunders 1925 *Astrophys. J.* 61; Hund 1925-27 *Zeits. f. Physik* 33, 36, 40 — empirical rules; LL3 §73 derives Hund's rules from the exchange-energy argument). Three-tier; ~2600 words. Beginner: the central-field approximation as the zeroth-order single-electron picture, electron configuration $1s^2 2s^2 2p^k$ notation. Intermediate: total $\hat{\mathbf L} = \sum \hat{\mathbf l}_i$ and $\hat{\mathbf S} = \sum \hat{\mathbf s}_i$, the LS (Russell-Saunders) term symbol ${}^{2S+1}L_J$, fine-structure splitting from spin-orbit coupling. Master: **Hund's rules from exchange energetics** — maximum $S$ minimises Coulomb (exchange is attractive for parallel spins), maximum $L$ at fixed $S$ minimises angular correlation; $jj$ coupling at the heavy-element limit. Worked example: term symbols for carbon ($^3P_0, {}^1D_2, {}^1S_0$) and oxygen. Bridge to `12.09.03` (Hartree-Fock is the prerequisite single-particle picture). **LL3-canonical.**

8. **`12.07.03` Variational method (Rayleigh-Ritz) in quantum mechanics.** LL3 Ch. VI §44 anchor (LL3 treats variational as a §-long aside; the more sustained treatment is Cohen-Tannoudji XI complement and the LL3 *Problems*). Originator-prose (Rayleigh 1873; Ritz 1909 *J. reine angew. Math.* 135). Three-tier; ~2200 words. Beginner: the variational theorem $E[\Psi] = \langle \Psi | \hat H | \Psi \rangle / \langle \Psi | \Psi \rangle \geq E_0$ as an upper bound on the ground state. Intermediate: trial-wavefunction ansatz with parameters, optimisation by $\partial E / \partial \alpha_i = 0$; the helium ground-state estimate as the canonical worked example. Master: the linear variational (Rayleigh-Ritz) method — basis expansion $\Psi = \sum c_i \phi_i$, generalised eigenvalue problem $(H - E S) \mathbf c = 0$, MacDonald's theorem on interleaving of bounds. Bridge to `12.09.03` Hartree-Fock (which *is* a variational ansatz). **Codex-absent; prerequisite for Hartree-Fock (item 2).**

9. **`12.08.02` Born approximation and the Lippmann-Schwinger equation.** LL3 Ch. XVII §§125-127 anchor; originator-prose (Born 1926 *Zeits. f. Physik* 37, 38 — the approximation; Lippmann and Schwinger 1950 *Phys. Rev.* 79 — the integral-equation form). Three-tier; ~2400 words. Beginner: scattering amplitude $f(\theta)$ from the asymptotic form $\psi \sim e^{ikz} + f(\theta) e^{ikr}/r$, cross-section $d\sigma/d\Omega = |f|^2$. Intermediate: Lippmann-Schwinger equation $\psi = \phi + \hat G_0 V \psi$ with the outgoing-wave Green's function $\hat G_0$, first Born approximation $f_{\text{Born}}(\mathbf q) = -(m / 2\pi\hbar^2) \int V(\mathbf r) e^{i\mathbf q \cdot \mathbf r} d^3 r$ as the Fourier transform of the potential. Master: validity criterion $|V| \ll \hbar^2 / m a^2$, worked examples (Yukawa potential $V = V_0 e^{-\mu r} / r$ → $f \propto 1 / (q^2 + \mu^2)$ giving Rutherford in the $\mu \to 0$ Coulomb limit), second Born approximation, distorted-wave Born approximation as a teaser for inelastic. **Deepens `12.08.01`.**

10. **`12.08.03` Partial-wave expansion and phase shifts.** LL3 Ch. XVII §§122-124 anchor; originator-prose (Rayleigh 1894 *Theory of Sound* — partial waves for acoustic scattering; Faxén and Holtsmark 1927 *Zeits. f. Physik* 45 — quantum partial-wave analysis). Three-tier; ~2400 words. Beginner: spherical waves and the partial-wave expansion $\psi = \sum (2\ell + 1) i^\ell R_\ell(r) P_\ell(\cos\theta)$. Intermediate: asymptotic form $R_\ell(r) \sim \sin(kr - \ell\pi/2 + \delta_\ell) / kr$ defining the phase shift $\delta_\ell$; scattering amplitude $f(\theta) = (1/2ik) \sum (2\ell + 1) (e^{2i\delta_\ell} - 1) P_\ell(\cos\theta)$; total cross-section $\sigma = (4\pi / k^2) \sum (2\ell + 1) \sin^2 \delta_\ell$. Master: optical theorem $\sigma = (4\pi/k) \mathrm{Im} \, f(0)$, low-energy expansion $k \cot \delta_0 = -1/a + r_0 k^2 / 2 + \cdots$ defining scattering length $a$ and effective range $r_0$, the hard-sphere and square-well worked examples; Levinson's theorem $\delta_\ell(0) - \delta_\ell(\infty) = n_\ell \pi$. **Deepens `12.08.01`.**

### Priority 3 — depth on existing units, applications (4 items)

11. **`12.07.05` Stark and Zeeman effects in LL3 framing.** LL3 Ch. VI §§76-77 and Ch. V §37 anchor; originator-prose (Stark 1913 *Verh. d. Deut. Phys. Ges.* — discovery; Zeeman 1897 *Phil. Mag.* 43 — discovery; Schrödinger 1926 *Annalen der Physik* 80 — Stark via parabolic coords). Three-tier; ~2600 words. Beginner: phenomenology — atomic lines split in $E$ and $B$ fields. Intermediate: linear Stark in hydrogen via degenerate perturbation in parabolic coordinates (LL3-distinctive; requires `12.06.01` Coulomb-in-parabolic supplement), quadratic Stark for non-hydrogenic atoms. Master: normal Zeeman effect $\Delta E = \mu_B B m_\ell$ from the orbital magnetic moment, anomalous Zeeman with spin-orbit coupling and the Landé $g$-factor $g_J = 1 + [J(J+1) + S(S+1) - L(L+1)] / 2J(J+1)$, Paschen-Back limit at strong $B$. **LL3-canonical; deepens `12.07.01` and `12.06.01`.**

12. **`12.02.03` Density matrix and pure / mixed states.** LL3 Ch. II §14 anchor (LL3 treats density matrix briefly; longer treatment in Vol 5 *Statistical Physics*). Originator-prose (Landau 1927 *Zeits. f. Physik* 45 — Landau is the originator; von Neumann 1927 *Nachr. Ges. Wiss. Göttingen* — independent). Three-tier; ~2200 words. Beginner: motivation — quantum subsystems and ensemble averages require more than a state vector. Intermediate: definition $\hat\rho = \sum p_i |\psi_i\rangle \langle \psi_i|$ with $\mathrm{tr} \, \hat\rho = 1$, pure-vs-mixed criterion $\mathrm{tr} \, \hat\rho^2 \leq 1$ with equality for pure; expectation $\langle \hat A \rangle = \mathrm{tr}(\hat\rho \hat A)$; von Neumann equation $i\hbar \, \partial_t \hat\rho = [\hat H, \hat\rho]$. Master: reduced density matrix from partial trace $\hat\rho_A = \mathrm{tr}_B \hat\rho_{AB}$ as the bridge to entanglement, the canonical thermal density matrix $\hat\rho = e^{-\beta \hat H} / Z$ (cross-reference to forthcoming `13-statistical-mechanics`), and von Neumann entropy $S = -\mathrm{tr}(\hat\rho \log \hat\rho)$. **LL3-originator (Landau 1927); originator-prose mandatory.**

13. **`12.15.02` Parity, discrete-symmetry groups, and the Wigner-Eckart theorem.** LL3 Ch. XII §§91-94, §§107-109 anchor; originator-prose (Wigner 1927 *Zeits. f. Physik* 43 — parity; Wigner 1931 *Gruppentheorie* — Wigner-Eckart for $SU(2)$; Eckart 1930 *Rev. Mod. Phys.* 2 — independent derivation). Three-tier; ~2600 words. Beginner: parity $\hat P: \mathbf r \mapsto -\mathbf r$, $\hat P^2 = 1$, eigenvalues $\pm 1$; parity of spherical harmonics $\hat P Y_{\ell m} = (-1)^\ell Y_{\ell m}$. Intermediate: parity selection rules (electric-dipole transitions require $\Delta \ell = \pm 1$); finite point groups $C_n$, $D_n$, $T_d$, $O_h$ and character-table selection rules. Master: tensor operators of rank $k$ as $SU(2)$-irreducible objects, the Wigner-Eckart theorem $\langle \alpha' j' m' | \hat T^k_q | \alpha j m \rangle = \langle j m; k q | j' m'\rangle \langle \alpha' j' \| \hat T^k \| \alpha j\rangle$ separating geometry (CG coefficient) from physics (reduced matrix element); applications to selection rules for $E1$, $M1$, $E2$ transitions. **LL3-canonical; tightly coupled to item 4 (time-reversal) and items 6-7 (multi-electron atoms).**

14. **`12.08.04` Inelastic collisions and the distorted-wave Born approximation.** LL3 Ch. XVIII §§131-136 anchor; originator-prose (Massey and Mott 1933 *Theory of Atomic Collisions*; Bethe 1930 *Annalen der Physik* 5 — Bethe theory for inelastic). Three-tier; ~2400 words. Beginner: inelastic vs elastic — internal degrees of freedom of the target can be excited. Intermediate: multi-channel scattering, transition $T$-matrix $T_{fi} = \langle \phi_f | V | \psi_i^+ \rangle$ between asymptotic channels, the distorted-wave Born approximation as $\langle \chi_f^- | V | \chi_i^+ \rangle$ with elastic distortion. Master: Bethe sum rule for the generalised oscillator strength, applications to atomic excitation and ionisation by fast charged particles (the *Massey-Mott* fast-electron approximation). **LL3-canonical; closes the Ch. XVIII gap; deepens `12.08.01`.**

---

## §4 Implementation sketch and sourcing notes

### Implementation

**Minimum LL3-equivalence batch** = priority 1 only (items 1-5): 5 new
units. Estimates:

- ~3 hours per typical new unit; item 1 (WKB) and item 3 (Landau levels)
  are ~4 h given the originator-prose lift. Item 2 (Hartree-Fock) is
  ~4.5 h given the variational derivation and SCF iteration treatment.
- Priority 1: 3 typical × 3 h + 1 originator (Landau levels) × 4 h
  + 2 originator-heavy (WKB, Hartree-Fock) × 4 h = ~21 hours.
- Priority 1+2: ~21 + 5 new × 3.5 h = ~38 hours.
- Priority 1+2+3: ~38 + 4 new × 3.5 h = ~52 hours.

**Originator-prose targets.** LL3 is **partly originator** — Landau levels
(item 3) and density matrix (item 12) are Landau's own contributions; the
remaining items are LL3-synthesizer territory. Joint originator-citations:

- **Item 1 (WKB):** Wentzel 1926 / Kramers 1926 / Brillouin 1926; Jeffreys
  1923 prior. Bohr-Sommerfeld 1913-15.
- **Item 2 (Hartree-Fock):** Hartree 1927-28; Fock 1930; Slater 1929.
- **Item 3 (Landau levels):** **Landau 1930 — originator, mandatory
  originator-prose.**
- **Item 4 (time-reversal / Kramers):** Wigner 1932 (antiunitary); Kramers
  1930 (degeneracy).
- **Item 5 (Born-Oppenheimer):** Born and Oppenheimer 1927.
- **Item 6 (exchange / helium):** Heisenberg 1926; Dirac 1929.
- **Item 7 (LS coupling, Hund's rules):** Russell-Saunders 1925; Hund
  1925-27.
- **Item 8 (variational):** Rayleigh 1873; Ritz 1909.
- **Item 9 (Born / Lippmann-Schwinger):** Born 1926; Lippmann-Schwinger
  1950.
- **Item 10 (partial waves):** Rayleigh 1894; Faxén-Holtsmark 1927.
- **Item 11 (Stark / Zeeman):** Stark 1913; Zeeman 1897; Schrödinger 1926.
- **Item 12 (density matrix):** **Landau 1927 — originator, mandatory
  originator-prose; von Neumann 1927 independent.**
- **Item 13 (Wigner-Eckart):** Wigner 1927, 1931; Eckart 1930.
- **Item 14 (inelastic / DWBA):** Massey-Mott 1933; Bethe 1930.

**Notation crosswalk concerns (LL3-specific).** To be pinned inline in
Master sections of each new unit:

- **Wavefunction symbol:** LL3 uses $\psi$ for the wavefunction (a
  function on configuration space) and $\Psi$ for the time-dependent
  variant; Babel Bible / Woit use $|\psi\rangle$ in Dirac notation. Pin
  the equivalence $\psi(\mathbf r, t) = \langle \mathbf r | \psi(t) \rangle$.
- **Hamiltonian symbol:** LL3 $\hat H$ (with hat); Babel Bible same.
- **Angular momentum symbol:** LL3 $\hat{\mathbf l}$ for orbital,
  $\hat{\mathbf s}$ for spin, $\hat{\mathbf j} = \hat{\mathbf l} +
  \hat{\mathbf s}$ for total; Babel Bible uses $\hat{\mathbf L}$,
  $\hat{\mathbf S}$, $\hat{\mathbf J}$. No conflict; LL3 is lowercase by
  convention.
- **Units:** LL3 uses **Gaussian CGS** throughout (factor $1/c$ in
  magnetic coupling, factor $1/4\pi$ absent from Coulomb). Babel Bible
  units are SI. Crosswalk: $\omega_c^{\text{LL3}} = eB/mc$ vs
  $\omega_c^{\text{SI}} = eB/m$; in $\hbar = m = c = 1$ natural units
  both reduce to $eB$. State the unit convention explicitly in each
  master tier.
- **Spin matrices:** LL3 $\hat\sigma_x, \hat\sigma_y, \hat\sigma_z$
  for Pauli; Babel Bible same. The LL3 spinor convention is the same
  as Sakurai's.
- **Cross-volume notation alert:** LL3's $\hat\sigma$ for Pauli matrices
  reappears in Vol 4 as the relativistic Dirac matrices' index
  notation; disambiguate when citing Dirac material in `12.11.01`.

### DAG edges

New prerequisites for priority-1+2:

- `12.07.03` (variational) ← `12.07.01` (time-indep PT)
- `12.07.04` (WKB) ← {`12.04.02` (QHO), `05.05.04` (Hamilton-Jacobi),
  `06.01.13` (asymptotic expansions, contour integration)}
- `12.07.05` (Stark/Zeeman) ← {`12.07.01`, `12.06.01`}
- `12.08.02` (Born) ← `12.08.01`; → `12.08.04`
- `12.08.03` (partial waves) ← `12.08.01`; → `12.08.04`
- `12.08.04` (inelastic) ← {`12.08.02`, `12.08.03`}
- `12.09.02` (exchange) ← `12.09.01`
- `12.09.03` (Hartree-Fock) ← {`12.07.03`, `12.09.02`}
- `12.09.04` (LS coupling) ← {`12.09.03`, `12.05.01`}
- `12.09.05` (diatomic / BO) ← {`12.09.04`, `05.09.02` (adiabatic)}
- `12.14.01` (Landau levels) ← `12.04.02` (QHO)
- `12.15.01` (time-reversal) ← {`12.02.02`, `12.05.01`}
- `12.15.02` (parity / Wigner-Eckart) ← {`12.05.01`, `12.15.01`}
- `12.02.03` (density matrix) ← `12.02.02`

### Chapter structure

Two new chapter folders required:

- `content/12-quantum/14-magnetic-field/` — opens with `12.14.01`
  Landau levels.
- `content/12-quantum/15-discrete-symmetry/` — opens with `12.15.01`
  time-reversal and `12.15.02` parity / Wigner-Eckart.

Existing chapter extensions:

- `12-quantum/02-formalism/`: add `12.02.03` (density matrix).
- `12-quantum/07-perturbation/`: add `12.07.03`, `12.07.04`, `12.07.05`.
- `12-quantum/08-scattering/`: add `12.08.02`, `12.08.03`, `12.08.04`.
- `12-quantum/09-identical-particles/`: add `12.09.02`-`12.09.05`.

### Composite Woit + LL3 batch

Because the Woit batch ships the rep-theoretic foundations layer at
`09.*` slots and the existing 12-quantum chapter already ships the basic
formalism / Schrödinger / bound-state core at `12.01-12.07`, this LL3
batch is **purely LL3-distinctive additions**: no re-production of
Hilbert space, the operator algebra, the Heisenberg group, $SU(2)$
ladder, harmonic oscillator, or hydrogen-via-$\mathfrak{so}(4)$. The
LL3 plan adds the **physicist's applied-method and worked-example
layer** that Woit and the existing 12-quantum corpus deliberately
or accidentally skip.

### Apex unit designation

Item 3 (`12.14.01` Landau levels) and item 12 (`12.02.03` density matrix)
are **apex units** in the LL3 sense — both are Landau's own published
contributions; both require originator-prose; the density-matrix unit
also bridges to the forthcoming `13-statistical-mechanics` chapter
(thermal density matrix, von Neumann entropy) and to quantum information
(entanglement, Kramers pairs). Extended budget per unit (~5 h each).

### Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md` line 58.
- **Local copy:** *not resolved.* `reference/textbooks-extra/` contains
  LL Vols 1, 2, 6, 8 but **not Vol 3**. WebFetch fallback against
  Elsevier / ScienceDirect TOC was used to build §1 inventory.
- **Re-audit upgrade queued:** add to
  `docs/catalogs/NEED_TO_SOURCE.md` for Vol 3 acquisition. Once a
  local PDF is available, re-audit upgrades this plan from
  `equivalence-partial` to `equivalence-covered` and the §3 punch-list
  is verified against line-numbered LL3 section references.
- **Citation form:** L. D. Landau, E. M. Lifshitz, *Quantum Mechanics:
  Non-Relativistic Theory*, 3rd ed., translated from the Russian by
  J. B. Sykes and J. S. Bell, Course of Theoretical Physics Volume 3
  (Pergamon Press / Butterworth-Heinemann, Oxford, 1977; reprinted
  through the 1990s). ISBN 0-08-020940-8.
- **Russian original:** *Kvantovaya Mekhanika: Nerelyativistskaya
  Teoriya*, Nauka, Moscow, 1948 (1st ed.); 4th Russian edition 1989
  is the basis of the 3rd revised English. Pre-1989 Soviet text —
  Pergamon / Butterworth holds the English commercial rights.
- **Peer sources cited in this audit (peer-anchor for §1):**
  - J. J. Sakurai, J. Napolitano, *Modern Quantum Mechanics*, 2nd ed.
    (Cambridge UP, 2017). Ket-formalism Anglosphere standard.
  - C. Cohen-Tannoudji, B. Diu, F. Laloë, *Quantum Mechanics*, Vols
    I-II (Wiley, 1977). Encyclopaedic European reference; the natural
    pedagogical complement to LL3.
  - D. J. Griffiths, D. F. Schroeter, *Introduction to Quantum
    Mechanics*, 3rd ed. (Cambridge UP, 2018). Undergraduate parallel.
  - A. Messiah, *Quantum Mechanics*, Vols I-II (North-Holland, 1961;
    Dover 1999). LL3-contemporary European competitor.
  - P. A. M. Dirac, *The Principles of Quantum Mechanics*, 4th ed.
    (Oxford UP, 1958). Originator-text for ket formalism.
  - P. Woit, *Quantum Theory, Groups and Representations* (Springer
    2017 / 2025 living draft). FT 2.02; rep-theoretic counterpart.
- **Additional originator references** (cited in §3 punch-list):
  Wentzel 1926 / Kramers 1926 / Brillouin 1926 (WKB); Jeffreys 1923
  (asymptotic prior); Bohr 1913, Sommerfeld 1915 (Bohr-Sommerfeld);
  Hartree 1928 / Fock 1930 / Slater 1929 (Hartree-Fock); Landau 1930
  *Zeits. f. Physik* 64 (Landau levels — apex); Landau 1927 *Zeits.
  f. Physik* 45 (density matrix — apex); von Neumann 1927 (density
  matrix — independent); Wigner 1932 (antiunitary time-reversal);
  Kramers 1930 (Kramers degeneracy); Born and Oppenheimer 1927;
  Heisenberg 1926, Dirac 1929 (exchange interaction); Russell-Saunders
  1925; Hund 1925-27; Rayleigh 1873, Ritz 1909 (variational);
  Born 1926, Lippmann-Schwinger 1950 (Born / LS equation); Rayleigh
  1894, Faxén-Holtsmark 1927 (partial waves); Stark 1913, Zeeman
  1897, Schrödinger 1926 (Stark / Zeeman); Wigner 1927, 1931, Eckart
  1930 (Wigner-Eckart); Massey-Mott 1933, Bethe 1930 (inelastic /
  DWBA).
- **Local copy retention.** Once acquired, retain at
  `reference/textbooks-extra/Vol 3 - Landau, Lifshitz - Quantum
  Mechanics (3rd ed, 1977).pdf` alongside Vols 1, 2, 6, 8. Not
  promoted into `reference/fasttrack-texts/` — LL3 remains commercial-
  copyright; the personal copy stays in the parking area.

---

## §5 What this plan does NOT cover

- **Relativistic QM.** Deferred to LL Vol 4 *Quantum Electrodynamics*
  (not on Fast Track; partial coverage via Woit FT 2.02 and the
  existing `12.11.01-dirac-equation-relativistic-spin`).
- **Quantum field theory.** Deferred to LL Vol 4 and to Chatterjee FT
  2.03; second-quantisation coverage already in Babel Bible's
  `12.13-fock-spaces`.
- **Statistical mechanics / density-matrix thermodynamics.** Item 12
  introduces the density matrix in the QM context; thermal applications
  are deferred to LL Vol 5 *Statistical Physics* (FT 2.10 audit plan
  `landau-lifshitz-statistical-physics-1.md`).
- **Nuclear physics / shell model (LL3 Ch. XVI).** Out-of-scope; LL3
  Ch. XVI is a survey chapter for a non-FT topic.
- **Polyatomic molecules (LL3 Ch. XIII).** Deferred — application-heavy,
  low FT relevance. Could become a single survey unit in a future pass.
- **Modern open-system QM (master equations, decoherence).** Not in
  LL3; deferred to a separate plan if needed (Breuer-Petruccione is the
  canonical reference, not on FT).
- **Quantum information and measurement theory.** Not in LL3; deferred.
- **Line-number Problem inventory.** LL3's ~700 Problems with worked
  solutions form a separate per-section problem corpus. Inventory
  deferred unless the punch-list expands into a dedicated LL3-exercise-
  pack pass (analogous to the proposed Landau Vol 1 problem-pack —
  would be its own ~25-hour pass).
- **Mathematical-physics framing (Reed-Simon, Teschl).** LL3 deliberately
  avoids functional-analytic rigor for self-adjoint Schrödinger
  operators. The mathematician's track (essential self-adjointness,
  Kato-Rellich, spectral theorem for unbounded operators) is deferred
  to a dedicated functional-analysis plan; this LL3 plan stays in the
  physicist's idiom throughout.
- **Russian-language original.** Translation differences (Sykes-Bell
  vs. Russian) not catalogued; physicist-conventions track the 3rd
  English edition.

---

## §6 Acceptance criteria for FT equivalence (LL3)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, *Quantum
Mechanics: Non-Relativistic Theory* is at equivalence-coverage when:

- ≥95% of LL3's named results and worked formulae in Chapters I-XV +
  XVII-XVIII map to Babel Bible units **at LL3-equivalent pedagogical
  depth** (currently ~30%; after priority-1 ~55%; after priority-1+2
  ~78%; after priority-1+2+3 ~93%; small final gap closed by the
  exercise-pack pass, see §5).
- ≥80% of LL3's Problems have a Codex equivalent worked example
  (currently ~5%; closing requires the LL3-exercise-pack pass per §5).
- ≥90% of LL3's worked examples appear in a unit (currently ~15%;
  priority-1+2 brings to ~65%; remainder needs dedicated worked-example
  densification).
- Notation crosswalk pinned in Master sections per §4. No standalone
  `notation/landau-vol3.md` needed (the crosswalk concerns are
  per-unit-local and notational, not foundational).
- DAG: for every Schrödinger → spectrum → bound-states → perturbation
  → scattering chain in LL3 Chs. III-VII + XVII, an unbroken
  prerequisite chain in Babel Bible's DAG. Currently complete on the
  bound-states / formalism side; breaks at `12.08.02-04` (scattering
  depth) and `12.09.02-05` (multi-electron / molecular) — items 6-10
  close them.
- Pass-W weaving connects new units to existing `12.01-12.13` and
  laterally to `05.05.04` (Hamilton-Jacobi, for WKB), `05.09.02`
  (adiabatic, for Born-Oppenheimer), `06.01.13` (asymptotic expansions,
  for WKB connection formulas), and `03.03.*` (group actions, for
  parity / Wigner-Eckart).

The 5 priority-1 new units (items 1-5) close the LL3-distinctive
load-bearing gap given the Woit batch is shipped. Priority-2 closes
the worked-example layer (items 6-10). Priority-3 deepens existing
units and adds the discrete-symmetry chapter (items 11-14).

**Prerequisite alert.** LL3 sits at FT 2.01 — **after** Vol 1
*Mechanics* (FT 1.02, audit plan `landau-lifshitz-mechanics.md`),
Apostol Vols I-II (FT 0.1, 0.2), Shilov *Linear Algebra* (FT 1.01),
and Lang *Basic Mathematics* (FT 0.3). Babel Bible must keep those
prerequisite chains intact: Apostol Vol II calculus-of-variations
(Ch. 7) and linear algebra (Ch. 3-5) are load-bearing for items 1,
2, 8, 9 of this plan; the Vol 1 Hamilton-Jacobi unit
(`05.05.04-hamilton-jacobi` after the Vol 1 punch-list ships) is
load-bearing for WKB (item 1). This LL3 plan does not re-audit
Apostol or Vol 1; it depends on those audits closing first.

**Honest scope.** Mid-to-large equivalence gap. The Babel Bible 12-quantum
chapter is mature on the foundations / formalism / basic-bound-states
side (18 units shipped, of which ~12 cover LL3 Chs. I-VI material at
LL3-equivalent or better depth), but the **LL3-canonical worked-method
and applied layer** (WKB, Hartree-Fock, multi-electron atoms, diatomic
molecules, Landau levels, time-reversal / Kramers, density matrix,
deep scattering, exchange interaction) is almost entirely uncaptured.
Priority-1+2 batch is **10 new units**; priority-1+2+3 is **14 new
units + 2 new chapter directories** — comparable in scope to the
Vol 1 Landau priority-1+2 batch (10 new units + 4 deepenings) but
with a center of mass on applied physics and approximate-methods rather
than worked-example coordinate mechanics.
