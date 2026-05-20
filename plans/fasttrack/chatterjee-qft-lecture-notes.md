# Chatterjee — *Introduction to Quantum Field Theory for Mathematicians* (Fast Track 2.03) — Audit + Gap Plan

**Book:** Sourav Chatterjee, *Introduction to Quantum Field Theory for
Mathematicians* — Lecture notes for Math 273, Stanford, Fall 2018 (130 pp.,
29 lectures, based on a forthcoming textbook by Michel Talagrand). Hosted
freely by the author at his Stanford page; local copy at
`reference/fasttrack-texts/02-quantum-stat/Chatterjee-QFTLectureNotes.pdf`.

**Fast Track entry:** 2.03 (Tier 2 — Quantum / Statistical Mechanics block).
Confirmed in `docs/catalogs/FASTTRACK_BOOKLIST.md` as the free Stanford
entry for second quantization and basic QFT.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units to write so that Chatterjee is covered to the equivalence
threshold (≥95% effective coverage of theorems, key examples, exercise
pack, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally not a full P1 audit. Chatterjee is short (130
pp.) but the entire QFT track is essentially absent from the Codex: the
existing `08-stat-mech/` chapter is **classical** statistical field theory
(Ising, RG, lattice gauge as a stat-mech object, Wick *rotation* as a tool
for stat-mech path integrals — not Wick's theorem for Gaussian fields and
operator-product contractions). A full P1 inventory at line-number
granularity is therefore not productive yet; we work from Chatterjee's
table of contents, identify the load-bearing constructions, and stop there.

---

## §1 What Chatterjee is for

Chatterjee is the **rigorous-as-possible mathematicians' on-ramp** to
Lagrangian / canonical QFT, written in a probabilist's voice rather than
a high-energy-physicist's voice. Where Peskin-Schroeder, Weinberg, and
Itzykson-Zuber assume the reader is comfortable with the physicists'
heuristic apparatus — operator-valued objects evaluated at points, naked
delta-functions, divergent integrals one renormalises by force — Chatterjee
stops at every such step, asks "what does this actually mean as a
mathematical object?", and either gives the rigorous definition
(operator-valued distribution, Fock space construction, Schwartz-class
smearing) or flags the step as an *open problem* that physicists handle by
formal manipulation. The result is a 130-page lecture set that gets the
reader to one-loop renormalisation of $\phi^4$ theory, the Dirac field,
introductory QED, and the Wightman axioms — all explicitly marked as
mathematically rigorous, mathematically incomplete, or mathematically open.

Distinctive contributions, in roughly the order Chatterjee develops them:

1. **Postulates of quantum mechanics as a five-axiom list (P1–P5).** Lecture
   2 collects the framework — separable Hilbert space, Hermitian
   observables, eigenvalue-as-measurement-outcome, expectation via Born
   rule, projective time evolution — as a *closed* set of postulates that
   the rest of the notes build on, rather than the diffuse axiomatics in
   physics texts. Compare Weinberg [W] vol. 1 §1.4 (which mixes axioms with
   particle-physics motivation) and Reed-Simon [RS] vol. 1, which has the
   functional-analytic content but no postulate framing.
2. **Operator-valued distributions as the rigorous meaning of $a(p)$,
   $a^\dagger(p)$, $\phi(x)$.** Lectures 7–8 and 12. Chatterjee defines $A$
   and $A^\dagger$ as maps $H \to L(\mathcal{B}_0, \mathcal{B})$ on the
   bosonic Fock space, then exhibits $a(x)$, $a^\dagger(x)$ as the formal
   point-evaluations $A(\delta_x)$, $A^\dagger(\delta_x)$. This is where
   physics classes begin; Chatterjee gets here in lecture 7 with full
   functional-analytic justification. Sternberg [S] gives a similar
   distributional treatment in his semiclassical analysis lectures but
   without the Fock space construction.
3. **Special relativity and the Poincaré group as Hilbert-space input,
   not background.** Lectures 9–10 build $X_m = \{p \in \mathbb{R}^{1,3} :
   p^2 = m^2, p^0 > 0\}$ as a manifold, the Lorentz-invariant measure
   $d\lambda_m$, and $L^2(X_m, d\lambda_m)$ as the one-particle space.
   Massless and massive treatments split cleanly. Compare Folland's
   *Quantum Field Theory: A Tourist Guide for Mathematicians* [F] §2.
4. **Five postulates of QFT (P1–P5 for fields).** Lecture 11 lifts the QM
   postulates: Hilbert space + unitary Poincaré representation + locality +
   spectrum condition + cyclic vacuum. This is essentially the Wightman
   axioms in postulate form; Chatterjee returns to the Wightman version
   in lecture 29.
5. **The massive scalar free field $\phi$ as an operator-valued
   distribution on $\mathbb{R}^{1,3}$.** Lecture 12. Chatterjee gives the
   explicit formula
   $$\phi(t, x) = \int \frac{d^3 p}{(2\pi)^3 \sqrt{2\omega_p}} \big( e^{-it\omega_p + ix \cdot p} a(p) + e^{it\omega_p - ix \cdot p} a^\dagger(p) \big)$$
   and shows it satisfies the Klein-Gordon equation formally and the
   Wightman locality axiom rigorously. This is the load-bearing example.
6. **$\phi^4$ theory as a *training* interacting theory.** Lectures 13,
   18, 21, 22. Chatterjee is explicit that $\phi^4$ describes no real
   particle but exhibits "many of the complexities of quantum field
   theories that describe real particles". The pedagogical move — work
   out one-loop renormalisation in detail on a fictitious theory before
   touching QED — is shared with Folland [F] and Talagrand's forthcoming
   text but stands in sharp contrast to Peskin-Schroeder [PS], which
   interleaves QED motivation with $\phi^4$ machinery from the start.
7. **Wick's theorem as a moment-calculation tool.** Lecture 17. The
   physicists' diagrammatic Wick theorem becomes a precise statement
   about contractions of $A, A^\dagger$ in the vacuum expectation, with
   a clean inductive proof. Compare Glimm-Jaffe [GJ] §6, which gives the
   constructive-field-theory version, and Salmhofer's *Renormalization*
   [Sa] for the rigorous perturbative treatment.
8. **One-loop and two-loop renormalisation of $\phi^4$ as
   cutoff-independent extraction of finite predictions.** Lectures 20–22.
   The "problem of infinities" is presented as the integral
   $\int d^4 p / [(-p^2 + m^2 - i\epsilon)(-(p_1 + p_2 - p)^2 + m^2 - i\epsilon)]$
   diverging like $|p|^{-4}$ at infinity. The renormalisation procedure
   is the subtraction at a reference momentum so that $\lim_{R \to \infty}
   (\widetilde{M} - \widetilde{M}_*)$ exists and is independent of the
   cutoff function $\theta$. This is the BPHZ idea, presented stripped
   of formalism. Compare Salmhofer [Sa] for the Wilsonian-RG
   reformulation in a rigorous setting.
9. **QED as $B \otimes F \otimes F'$ — photon bosons, electron fermions,
   positron fermions.** Lectures 23–28. The interaction Hamiltonian
   density is $\mathcal{H}(x) = e :\bar\psi(x) \gamma^\mu \psi(x) A_\mu(x):$.
   Anomalous magnetic moment of the electron computed to fifth order
   matches experiment to 10 decimal places — Chatterjee gives this as the
   triumph that justifies the entire fanciful machinery.
10. **Wightman axioms as the rigorous closing chapter.** Lecture 29.
    Seven axioms (Hilbert space + unitary Poincaré + smeared field +
    Lorentz covariance + locality + cyclic vacuum + spectrum). Includes
    the open problem: construct an interacting scalar QFT on
    $\mathbb{R}^{1,3}$ satisfying these axioms. Compare Streater-Wightman
    [SW] *PCT, Spin and Statistics, and All That*, the canonical
    reference, which Chatterjee implicitly tracks.

Chatterjee is **not** a substitute for a working physicist's QFT course
(no path-integral approach beyond mention; no gauge theory beyond
Gupta-Bleuler photons; no non-abelian Yang-Mills; no renormalisation
group flow; no anomalies; no spontaneous symmetry breaking beyond a
nod). It is the canonical free entry point to *what QFT actually means
as mathematics*. Sit it next to Peskin-Schroeder (which Chatterjee will
not replace), Weinberg vol. 1 (for the high-energy physics framing), and
Glimm-Jaffe / Streater-Wightman (for the constructive / axiomatic
programme).

Peer / supplementary sources cross-referenced for this audit:
[W] S. Weinberg, *The Quantum Theory of Fields*, vol. 1 (Cambridge 1995) — FT 2.17.
[PS] M. Peskin & D. Schroeder, *An Introduction to Quantum Field Theory* (Westview 1995).
[F] G. Folland, *Quantum Field Theory: A Tourist Guide for Mathematicians* (AMS 2008).
[GJ] J. Glimm & A. Jaffe, *Quantum Physics: A Functional Integral Point of View* (Springer 1987).
[SW] R. Streater & A. Wightman, *PCT, Spin and Statistics, and All That* (Princeton 1964/2000).
[Sa] M. Salmhofer, *Renormalization: An Introduction* (Springer 1999).
[RS] M. Reed & B. Simon, *Methods of Modern Mathematical Physics*, vol. 1–2 (Academic 1980).
[S] S. Sternberg, *Semi-Classical Analysis* lecture notes (related-only free text; not on the canonical FT booklist per `reference/fasttrack-texts/README.md`).
[T] M. Talagrand, *What is a Quantum Field Theory?* (Cambridge 2022) — the forthcoming textbook these notes are based on; now in print.

---

## §2 Coverage table (Codex vs Chatterjee)

Cross-referenced against the current 313-unit corpus via
`find content -name "*.md"` and grep on `fock`, `wightman`, `dyson`,
`feynman`, `dirac field`, `qed`, `quantum electrodynamics`,
`operator-valued distribution`, `creation and annihilation`, `wick`,
`poincaré`, `klein-gordon`, `scattering`, `propagator`. The Codex
`08-stat-mech/` chapter matches on stat-mech terms (path integral,
Wick rotation, lattice gauge, RG, mean-field, Ising) but **none of
its 22 units treats the QFT objects Chatterjee builds**. The matches in
`05-symplectic/`, `06-riemann-surfaces/`, `04-algebraic-geometry/` are
incidental (one uses "Fock" as a moduli-space adjective, another mentions
"Dirac" in a function-theoretic context).

✓ = covered, △ = partial / different framing, ✗ = not covered.

| Chatterjee topic (lecture) | Codex unit(s) | Status | Note |
|---|---|---|---|
| Five postulates of QM (L2) | — | ✗ | **Gap.** No Codex unit lists the QM axioms as a closed framework. |
| Position / momentum operators, essential self-adjointness, Stone's theorem in flight (L3, L4) | — | ✗ | **Gap.** Spectral theorem / unbounded operators are foundations the Codex doesn't yet have an analysis-track unit for. |
| Heisenberg uncertainty principle (L4) | — | ✗ | **Gap.** |
| Simple harmonic oscillator, Hermite basis (L4) | — | ✗ | **Gap.** |
| Tensor product of Hilbert spaces, symmetric tensor power (L5–L6) | — | △ | Tensor algebra of vector spaces is in `03.01-tensor-algebra/` but the **Hilbert-space** completion and symmetric/antisymmetric variants are not. |
| Bosonic Fock space, second quantisation (L6) | — | ✗ | **Gap.** Foundational and load-bearing for everything that follows. |
| Creation/annihilation operators $a_k$, $a_k^\dagger$, commutation relations (L7) | — | ✗ | **Gap.** |
| Operator-valued distributions $a(x)$, $a^\dagger(x)$ as $A(\delta_x)$ (L7) | — | ✗ | **Gap.** |
| Time evolution on Fock space, free Hamiltonian as $\int dx\, a^\dagger(x)(-\Delta/2m) a(x)$ (L8) | — | ✗ | **Gap.** |
| Lorentz group $\mathrm{SO}^\uparrow(1,3)$, Poincaré group $P$, special relativity (L9) | — | ✗ | **Gap.** Codex has Lorentz scattered in symplectic/contact units but no dedicated SR unit. |
| Mass shell $X_m$, Lorentz-invariant measure $d\lambda_m$ (L10) | — | ✗ | **Gap.** |
| Five postulates of QFT (L11) | — | ✗ | **Gap.** Same status as QM postulates. |
| Massive scalar free field $\phi(t,x)$, Klein-Gordon equation (L12) | — | ✗ | **Gap.** Central object. |
| $\phi^4$ theory: formal Hamiltonian, why it's a toy (L13) | — | ✗ | **Gap.** |
| Scattering, $S$-matrix, in/out states (L14) | — | ✗ | **Gap.** |
| Born approximation (L15) | — | ✗ | **Gap.** |
| Hamiltonian densities, Dyson series (L16) | — | ✗ | **Gap.** |
| Wick's theorem (operator-product version), Wick ordering $:\!\!\cdot\!\!:$, contractions (L17) | △ | △ | `08-stat-mech/wick/08.09.01-wick-rotation.md` covers Wick *rotation* (Minkowski → Euclidean) but not Wick's *theorem* for operator products. Different object with the same name. |
| First-order $\phi^4$ scattering, Feynman diagrams (L18) | — | ✗ | **Gap.** |
| Feynman propagator $\Delta_F(x)$, contour-integral form (L19) | — | ✗ | **Gap.** |
| Problem of infinities, UV divergences (L20) | △ | △ | `08-stat-mech/critical/08.05.01-critical-exponents.md` touches RG divergences in a stat-mech framing; not the QFT version. |
| One-loop renormalisation in $\phi^4$, BPHZ subtraction at reference momentum (L21) | — | ✗ | **Gap.** |
| Two-loop renormalisation (L22) | — | ✗ | **Gap (Master-tier deepening).** |
| Free-photon Hilbert space, Gupta-Bleuler quotient, $B_\mathrm{phys} = B^0 / B_\mathrm{null}$ (L23) | — | ✗ | **Gap.** |
| Quantised EM four-potential $A^\mu$, field-strength $F_{\mu\nu}$, Lorenz gauge condition, classical Maxwell recovery (L24) | — | ✗ | **Gap.** |
| Free-electron model, $\mathrm{SL}(2,\mathbb{C})$ double cover of $\mathrm{SO}^\uparrow(1,3)$, projective representations (L25) | △ | △ | Some Clifford / spin material in `03-modern-geometry/09-spin-geometry/` (esp. `03.09.03-spin-group.md`, `03.09.13-triality.md`) overlaps the algebra but not the Hilbert-space construction. |
| Fermionic Fock space, Pauli exclusion, anticommutators (L25–L26) | — | ✗ | **Gap.** |
| Dirac field $\psi(x)$ with Fock spaces $F \otimes F'$ (L26) | — | ✗ | **Gap.** |
| Pauli matrices $\sigma_\mu$, Dirac matrices $\gamma^\mu$, Dirac adjoint $\bar\psi = \psi^\dagger \gamma^0$ (L27) | △ | △ | Pauli matrices appear inside Clifford-algebra units in `03.09.02-clifford-algebra.md`. Dirac matrices and $\bar\psi$ do not. |
| QED interaction Hamiltonian $\mathcal{H}_I = e :\!\bar\psi \gamma^\mu \psi A_\mu\!:$ (L27) | — | ✗ | **Gap.** |
| Electron scattering, Dirac propagator, photon propagator, Coulomb potential from non-relativistic limit (L28) | — | ✗ | **Gap.** |
| Anomalous magnetic moment to 5th order (L28) | — | ✗ | **Gap (Master-tier pointer).** |
| Wightman axioms (L29) | — | ✗ | **Gap.** Final axiomatic chapter; load-bearing for FT-equivalence. |
| Osterwalder-Schrader axioms, Euclidean → Wightman reconstruction (L29) | — | ✗ | **Gap.** Connects to the Wick-rotation unit and to constructive QFT. |
| Open problem: interacting QFT on $\mathbb{R}^{1,3}$ (L29) | — | ✗ | Pointer only. |

**Aggregate coverage estimate:** ~0% of Chatterjee has corresponding Codex
units. The only adjacent material (`08-stat-mech/` Wick *rotation*, lattice
gauge, RG; `03-modern-geometry/09-spin-geometry/` Clifford and spin
groups) covers the *mathematical* background but not the QFT
construction. Chatterjee is **not** a "deepening-only" book — the entire
QFT track is unaddressed.

**This means the audit is NOT reduced**: the PDF is fully readable, the
TOC is complete, all 29 lectures were skimmed for content. The
"Chatterjee deepening-only" hypothesis from the audit prompt is **not**
supported by the evidence; the book is foundational for the QFT track
that the Codex doesn't yet have.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — analysis-track prerequisites that block Chatterjee
production:** Chatterjee assumes (i) the spectral theorem for unbounded
self-adjoint operators, (ii) Stone's theorem on one-parameter unitary
groups, (iii) the tempered-distributions calculus on $\mathbb{R}^n$ and
$\mathbb{R}^{1,3}$, (iv) Schwartz functions and the Fourier transform on
$\mathcal{S}(\mathbb{R}^n)$. The Codex's `02-analysis/` chapter is
not yet at the level required. **Recommendation:** the Sternberg
*Semi-Classical Analysis* audit (related-only free text, not on the canonical FT list) should be sequenced **before**
Chatterjee production; Sternberg's lectures cover much of the
distribution-theory machinery and would close the prerequisite gap.
Also: Woit *Quantum Theory, Groups and Representations* (FT 2.02, also
in this batch directory) is a likely sibling for the Lie-group / Poincaré
content of L9–L10 and L25.

**Priority 1 — high-leverage, captures Chatterjee's central content:**

1. **`08.10.01` Bosonic Fock space and second quantisation.** Definition
   $B = \bigoplus_n H_\mathrm{sym}^{\otimes n}$, vacuum $|0\rangle$,
   creation/annihilation operators $a_k$, $a_k^\dagger$, canonical
   commutation relations $[a_k, a_l^\dagger] = \delta_{kl} \mathbf{1}$.
   Chatterjee L6–L7 anchor. Three-tier, ~1500 words. Beginner tier:
   occupation-number basis intuition; Intermediate: rigorous Hilbert-space
   construction; Master: basis-independence of $A(f)$ via integral
   formula, operator-valued distributions $a(x) = A(\delta_x)$.
2. **`08.10.02` Massive scalar free field and the Wightman locality
   axiom.** The operator-valued distribution
   $\phi(t,x) = \int d^3p / [(2\pi)^3 \sqrt{2\omega_p}] (e^{-it\omega_p + ix\cdot p} a(p) + \text{h.c.})$,
   verification of Klein-Gordon $(\Box + m^2)\phi = 0$ formally and
   $[\phi(f), \phi(g)] = 0$ for spacelike-separated supports rigorously.
   Chatterjee L11–L12 anchor. Three-tier, ~1500 words.
3. **`08.10.03` $\phi^4$ theory and the Dyson series.** Interaction
   Hamiltonian $H_I = (g/4!)\int :\!\phi^4\!:$, Dyson series for $S$ on
   Fock space, first-order scattering computation
   $\langle p_3 p_4 | S | p_1 p_2 \rangle = -ig(2\pi)^4 \delta^{(4)}(\sum p_i) / \sqrt{16 \omega_1 \omega_2 \omega_3 \omega_4} + O(g^2)$,
   conservation of 4-momentum as a $\delta^{(4)}$. Chatterjee L13, L16,
   L18 anchor. Three-tier, ~1500 words.
4. **`08.10.04` Wick's theorem for operator products.** Statement,
   contraction expansion of $\langle 0 | T \prod \phi(x_i) | 0 \rangle$,
   Wick ordering $:\!\!\cdot\!\!:$, inductive proof. **Crosswalk note:**
   the existing `08.09.01-wick-rotation.md` is Wick *rotation*; this is
   Wick's *theorem*. Add a "notation distinguishes from L1 unit" pointer.
   Chatterjee L17 anchor. Intermediate + Master only (the contraction
   machinery is too involved for Beginner tier); ~1800 words.
5. **`08.10.05` Feynman propagator and the contour-integral representation.**
   $\Delta_F(x) = i \int d^3p / [(2\pi)^3 2\omega_p] e^{-i|t|\omega_p + ip\cdot x}$,
   the alternative form $\Delta_F(x) = \lim_{\epsilon \to 0^+} \int d^4p / (2\pi)^4 \cdot e^{-i(x,p)} / (-p^2 + m^2 - i\epsilon)$,
   $i\epsilon$-prescription via contour integration. Chatterjee L19 anchor.
   Three-tier, ~1500 words.
6. **`08.10.06` One-loop renormalisation in $\phi^4$.** The divergent
   second-order integral, the subtraction $L = \lim_{R\to\infty}
   (\widetilde{M} - \widetilde{M}_*)$, cutoff-independence of the
   subtracted result, finite predictions in terms of one measured
   reference amplitude $A_*$. Chatterjee L20–L21 anchor. **Highest
   pedagogical value** of any unit in this list — it's where the QFT
   programme actually delivers a number. Three-tier; Beginner gets the
   toy example (L21 §1) only. ~2000 words.
7. **`08.10.07` Wightman axioms (W1–W7).** Hilbert space + unitary
   Poincaré + smeared-field map + Lorentz covariance + spacelike locality
   + cyclic vacuum + spectrum condition. Verification that the free field
   satisfies them; the open problem on $\mathbb{R}^{1,3}$; brief mention
   of Osterwalder-Schrader reconstruction. Chatterjee L29 anchor; Streater-
   Wightman [SW] is the originator-prose source. Three-tier; Beginner
   tier states the axioms and the open problem only; ~1800 words.

**Priority 2 — Dirac field and QED side:**

8. **`08.10.08` Special relativity and the Poincaré group as quantum
   inputs.** Lorentz group $\mathrm{SO}^\uparrow(1,3)$, Poincaré group
   $P = \mathbb{R}^{1,3} \rtimes \mathrm{SO}^\uparrow(1,3)$, mass shell
   $X_m$, Lorentz-invariant measure $d\lambda_m$. Chatterjee L9–L10.
   Cross-strand with Woit FT 2.02 (representation-theory framing).
   Intermediate + Master. ~1500 words.
9. **`08.10.09` Fermionic Fock space, Pauli exclusion, anticommutators.**
   $H_\mathrm{anti}^{\otimes n}$, anticommutation $\{a_k, a_l^\dagger\} =
   \delta_{kl}\mathbf{1}$, the sign correction in the action of $a_k^\dagger$.
   Chatterjee L25–L26. Intermediate + Master. ~1200 words.
10. **`08.10.10` Dirac field $\psi$ and the Dirac adjoint $\bar\psi$.**
    Projective representation of $P$ via $\mathrm{SL}(2,\mathbb{C})$
    double cover, pure boost $V_p$, four-component spinor field, Pauli
    matrices, Dirac matrices $\gamma^\mu$, $\bar\psi = \psi^\dagger
    \gamma^0$. **Crosswalk:** depends on `03.09.02-clifford-algebra.md`
    and `03.09.03-spin-group.md` for the algebraic background.
    Chatterjee L25–L27. Intermediate + Master. ~1800 words.
11. **`08.10.11` Quantum electrodynamics: interaction Hamiltonian and
    Feynman diagrams.** $\mathcal{H}_I = e :\!\bar\psi \gamma^\mu \psi
    A_\mu\!:$, electron-photon-positron Fock space $B \otimes F \otimes
    F'$, second-order electron-electron scattering via photon exchange,
    Dirac propagator, photon propagator, non-relativistic limit reduces
    to Coulomb $V(x) = 1/(4\pi|x|)$. Chatterjee L23–L24, L27–L28. The
    QED triumph (anomalous magnetic moment) sits in a Master-tier
    closing paragraph. ~2200 words.

**Priority 3 — analysis-prerequisite units (must ship before Priority 1):**

12. **`02.XX.YY` Spectral theorem for unbounded self-adjoint operators
    + Stone's theorem.** Already on the Sternberg *Semi-Classical Analysis* (related free text, not a canonical FT entry; see `reference/fasttrack-texts/README.md`) punch-list;
    confirm scheduling.
13. **`02.XX.YY` Schwartz space $\mathcal{S}(\mathbb{R}^n)$ and tempered
    distributions $\mathcal{S}'(\mathbb{R}^n)$.** Also on the Sternberg
    *Semi-Classical Analysis* punch-list. Fourier-transform conventions matter — see §4.
14. **`02.XX.YY` Bosonic and fermionic symmetric/antisymmetric tensor
    powers of a Hilbert space.** Currently `03.01-tensor-algebra/` covers
    the algebraic version; needs the completed-Hilbert-space variant.
    Could be folded into `08.10.01` as a Master-tier appendix.

**Priority 4 — deepenings (Master-tier, not strictly required for FT
equivalence):**

15. **Two-loop renormalisation in $\phi^4$.** Chatterjee L22. Add as a
    Master section to `08.10.06` rather than a new unit.
16. **Osterwalder-Schrader axioms and reconstruction.** Add as a Master
    section to `08.10.07`. Pointer to constructive QFT literature.
17. **Anomalous magnetic moment of the electron to 5th order.** Add as
    a Master-tier closing paragraph to `08.10.11`. The 10-decimal-place
    agreement with experiment is the *point* of QED and worth recording.

---

## §4 Implementation sketch (P3 → P4)

For a full Chatterjee coverage pass, items 1–7 are the minimum set (with
the Sternberg / Woit prerequisites in place). Realistic production
estimate (mirroring earlier Brown / Lawson-Michelsohn / Bott-Tu batches):

- ~3–4 hours per unit. Chatterjee units skew slightly higher than the
  corpus average because the Master tier requires careful operator-valued-
  distribution notation and the Wick / renormalisation / propagator
  units have unavoidable contour-integral and combinatorial content.
- 7 priority-1 units × ~3.5 hours = ~24 hours of focused production.
  4 priority-2 units × ~3 hours = ~12 hours. Total Chatterjee
  production: ~36 hours, fits a focused 5–7 day window.
- Add ~10–15 hours for the priority-3 analysis prerequisites (already
  on the Sternberg punch-list, so absorbed there if Sternberg ships
  first).

**Originator-prose target.** Chatterjee is a *pedagogical* originator
(the rigorous-as-possible mathematicians' on-ramp), not a research
originator. For the Codex's QFT track, originator-prose treatment per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10 should cite:

- A. Wightman & L. Gårding, "Fields as operator-valued distributions in
  relativistic quantum theory," *Arkiv för Fysik* 28 (1964) 129–184 —
  originating the operator-valued-distribution formalism.
- R. Streater & A. Wightman, *PCT, Spin and Statistics, and All That*
  (Princeton 1964) — originator of the Wightman axioms as `08.10.07`
  is currently scoped.
- F. Dyson, "The S-Matrix in Quantum Electrodynamics," *Phys. Rev.* 75
  (1949) 1736 — originating the Dyson series.
- N. Bogoliubov & O. Parasiuk, K. Hepp, W. Zimmermann (BPHZ) — the
  rigorous renormalisation programme that `08.10.06` reflects.
- K. Osterwalder & R. Schrader, "Axioms for Euclidean Green's functions
  I, II," *Comm. Math. Phys.* 31 (1973), 42 (1975) — originating the
  Euclidean axioms cited in the L29 closing material.
- M. Talagrand, *What is a Quantum Field Theory?* (Cambridge 2022) —
  the textbook these notes prefigure; consult for definitive
  consolidation of Chatterjee's pedagogy.

**Notation crosswalk.** Chatterjee uses **physicist conventions** on
several points where the Codex's mathematician conventions differ; these
need to be recorded explicitly in each new unit's §Notation paragraph:

| Object | Chatterjee | Codex mathematician convention | Resolution |
|---|---|---|---|
| Inner product on $H$ | $(f,g)$, **antilinear in first argument, linear in second** | usually antilinear in second, linear in first (Codex spin-geometry units `03.09.*` follow this) | Chatterjee's convention is the physicists' Dirac-bra-ket convention; record at top of `08.10.01`. Adopt Chatterjee's convention for the QFT track and flag the difference at the boundary with spin-geometry. |
| Adjoint | $A^\dagger$ | $A^*$ in `02-analysis/` | Use $A^\dagger$ throughout the QFT track; flag the synonymy. |
| Fourier transform | $\hat f(p) = \int dx\, e^{-ixp} f(x)$ (no $1/(2\pi)$ prefactor; sign convention $-ixp$) | Codex `02-analysis/` and `03-differential-forms` use the symmetric $(2\pi)^{-n/2}$ convention | Chatterjee's convention pushes $(2\pi)^3$ factors into the measure and the delta function. Adopt Chatterjee's for the QFT track and record the conversion factor explicitly in `08.10.01`. |
| Metric signature | $(+,-,-,-)$ "mostly minus" | physics-side variable | Record signature in `08.10.08`; mention $(-,+,+,+)$ "mostly plus" as an alternative used by some texts (Misner-Thorne-Wheeler, e.g.). |
| Units | $\hbar = c = 1$ | unstated | Record at top of every QFT track unit. |
| Wick *rotation* vs Wick's *theorem* | both abbreviated "Wick" in Chatterjee | distinguished by usage | Use the full word in unit titles: `08.09.01-wick-rotation.md` already exists; new unit is `08.10.04-wick-theorem.md`. Cross-link explicitly. |
| Mass shell measure | $d\lambda_m(p) = d^3p / [(2\pi)^3 2\omega_p]$ on $X_m \subset \mathbb{R}^{1,3}$ | unstated | Define in `08.10.08`; this is the Lorentz-invariant measure adopted throughout. |

Notation decisions for the QFT track must be recorded in a §Notation
paragraph of every Priority-1 unit, per `docs/specs/UNIT_SPEC.md` §11.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every numbered lemma / theorem in
  Chatterjee (full P1 audit). The 29 lectures yield perhaps 60–80 named
  results; a complete enumeration is deferred. The skim was content-
  oriented, not theorem-counting.
- The path-integral formulation of QFT. Chatterjee mentions it briefly
  in L29 (Osterwalder-Schrader) but does not develop it. A separate
  audit of Salmhofer [Sa] or Glimm-Jaffe [GJ] would fill this; not
  scoped here.
- Non-abelian gauge theory and Yang-Mills. Chatterjee covers QED only.
  Yang-Mills is in `03-modern-geometry/07-gauge-theory/` at the
  classical-action level but the quantised version is out of scope.
- Renormalisation-group flow in the Wilsonian sense. Chatterjee gives
  cutoff-subtraction renormalisation but not the RG. Connects to the
  existing `08-stat-mech/rg/` units; cross-reference, do not duplicate.
- Anomalies, spontaneous symmetry breaking in the QFT sense, the
  Higgs mechanism, electroweak unification, QCD, supersymmetry,
  string theory. All out of scope for Chatterjee specifically; some
  are in scope for Weinberg FT 2.17 and Deligne-et-al FT 3.43.
- Exercise-pack production. Chatterjee has occasional exercises stated
  inline but no formal exercise set. An exercise pack would be a
  P3-priority-3 follow-up after the priority-1 units ship; we mirror
  the NAT plan's deferral here.
- Lean formalisation. The Codex's `08-stat-mech/` chapter has
  `lean_status: none` and `lean_mathlib_gap` notes acknowledging
  Mathlib's absence of statistical-mechanics infrastructure. The same
  applies double for QFT — no Mathlib QFT library exists. All new
  units will ship with `lean_status: none`.

---

## §6 Acceptance criteria for FT equivalence (Chatterjee)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- Sternberg *Semi-Classical Analysis* (related free text, not a canonical FT entry; see `reference/fasttrack-texts/README.md`) (or equivalent analysis-track unit set) has shipped
  the spectral theorem, Stone's theorem, Schwartz / tempered-distribution
  prerequisites. **Strict prereq.**
- Woit FT 2.02 (or equivalent) has shipped the Poincaré-group
  representation theory used in L9–L10 and L25. **Soft prereq —
  Chatterjee can ship the Hilbert-space side first.**
- ≥95% of Chatterjee's named theorems / constructions in L1–L29 map to
  Codex units. (Currently 0%; after Priority-1 units this rises to
  ~70% — the scalar QFT track is closed. After Priority-1 + Priority-2
  to ~90% — Dirac + QED closed. Full ≥95% requires Priority-4
  deepenings.)
- ≥90% of Chatterjee's worked computations (first-order $\phi^4$
  scattering, one-loop renormalisation, Feynman-propagator contour
  integral, electron-electron scattering, non-relativistic Coulomb
  recovery) have a direct unit or are referenced from a unit that covers
  them.
- Notation decisions are recorded per §4 (inner-product convention,
  Fourier convention, metric signature, units, Wick distinction).
- Pass-W weaving connects the new `08.10.*` units to (a) the existing
  `08-stat-mech/` chapter via Wick-rotation / partition-function /
  Gaussian-field bridges; (b) `03-modern-geometry/09-spin-geometry/`
  via Clifford algebra → Pauli/Dirac matrices in `08.10.10`; (c)
  `03-modern-geometry/07-gauge-theory/` via the classical-EM-recovery
  paragraph in `08.10.11`; (d) the prerequisite Sternberg / Woit units.

The 7 priority-1 units close most of the equivalence gap for the scalar
QFT track. Priority-2 closes the Dirac/QED track. Priority-3 are
prerequisite (handled by Sternberg). Priority-4 are deepenings.

---

## §7 Sourcing

- **Free.** Author-hosted PDF at Sourav Chatterjee's Stanford page;
  the notes are explicitly posted as Math 273 course materials.
- **License.** Author has placed the PDF freely available as course
  notes; for educational use cite as Chatterjee, *Introduction to
  Quantum Field Theory for Mathematicians* (Stanford Math 273 lecture
  notes, Fall 2018, based on a forthcoming textbook by Michel
  Talagrand). The Talagrand textbook (*What is a Quantum Field
  Theory?*, Cambridge 2022) is now in print and should be cited
  alongside for the consolidated treatment.
- **Local copy.** Already present at
  `reference/fasttrack-texts/02-quantum-stat/Chatterjee-QFTLectureNotes.pdf`
  (130 pp., 784 KB, pdfTeX 1.40.16, 2018-12-15). Sibling files in the
  same directory:
  - `Sternberg-SemiClassicalAnalysis.pdf` (related-only free text; not on the canonical FT list per `reference/fasttrack-texts/README.md`) — analysis-track
    prerequisites.
  - `Woit-QuantumTheoryGroupsRepresentations.pdf` (FT 2.02) — Poincaré-
    group representation theory.
- **Audit completeness:** full (`audit_completeness: full`). PDF was
  readable, all 29 lectures skimmed, table of contents complete.
  No reduced-audit flag needed.
