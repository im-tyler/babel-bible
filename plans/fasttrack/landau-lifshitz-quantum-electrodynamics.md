# Berestetskii, Lifshitz, Pitaevskii — *Quantum Electrodynamics* (Fast Track 2.20) — Audit + Gap Plan

**Book:** V. B. Berestetskii, E. M. Lifshitz, L. P. Pitaevskii,
*Quantum Electrodynamics*, Volume 4 of the *Course of Theoretical
Physics*. Canonical English edition: 2nd English edition, translated
from the Russian by J. B. Sykes and J. S. Bell, Pergamon Press /
Butterworth-Heinemann, 1982 (reprinted through the 1980s and 1990s;
ISBN 0-08-026504-9). Russian *Kvantovaya Elektrodinamika*, Nauka,
Moscow, 1980. xiv + 652 pp., 12 chapters, ~250 Problems with solutions.
First Russian edition 1968 (Berestetskii, Lifshitz, Pitaevskii); the
1980 second edition is the basis of the 2nd English (1982) and is the
canonical reference.

**Fast Track entry:** 2.20 of `docs/catalogs/FASTTRACK_BOOKLIST.md` —
the LL-tradition QED slot of Section 2 (Quantum Theory and Statistical
Physics). Sibling entries 2.17 *Weinberg Vol 1: Foundations*, 2.18
*Weinberg Vol 2: Modern Applications*, and 2.19 *Weinberg Vol 3:
Supersymmetry* are audited at
`plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md` and ship
the post-1980 axiomatic-Lagrangian formulation of QFT; this LL Vol 4
plan picks up the **physicist-process-driven, cross-section-first**
layer that Weinberg deliberately drops in favour of the Wigner-Bargmann
construction. Section-2 prerequisites are Vol 3 *Quantum Mechanics*
(FT 2.01, audit plan `landau-lifshitz-quantum-mechanics.md`) and Vol 2
*Classical Theory of Fields* (FT 1.03, audit plan
`landau-lifshitz-classical-theory-of-fields.md`). Volume 4 itself
extends LL3 across the c/ħ → finite-c relativistic regime and
across the second-quantisation transition.

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite of
the orchestration protocol in `docs/plans/AGENTIC_EXECUTION_PLAN.md`).
Output is a concrete punch-list of new units to write so that
*Quantum Electrodynamics* (BLP hereafter) is covered to the
FT-equivalence threshold (≥95% effective coverage; see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1 audit
— BLP's ~250 Problems with worked solutions are inventoried at chapter
level only.

**Audit completeness: `reduced`** per AGENTIC_EXECUTION_PLAN §6.6. The
PDF is not in the local `reference/textbooks-extra/` archive (Vols 1,
2, 3, 6, 8 may be present; Vol 4 is not). BLP is BUY-only (Pergamon /
Butterworth-Heinemann holds rights; no author-hosted PDF, no
public-domain Internet Archive scan accessible at audit time). The §1
inventory below is built from the publicly visible Elsevier /
ScienceDirect TOC, peer-text cross-references (Bjorken-Drell,
Itzykson-Zuber, Peskin-Schroeder, Schwartz, Weinberg, Mandl-Shaw,
Greiner *QED*), and the citation network. P5 verification on this
audit cannot mark BLP `equivalence-covered`; only
`equivalence-partial` until re-audited from a full source. Re-audit
upgrade queued in `docs/catalogs/NEED_TO_SOURCE.md`.

**Substantial overlap with the Weinberg plan
(`plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md`).** BLP
and Weinberg Vol 1 cover the *same* canonical territory (relativistic
particle equations, QED interactions, S-matrix, lowest-order
processes, one-loop renormalization) through opposite editorial
choices (BLP: physicist-process-and-cross-section-first, no Wigner
classification, no cluster decomposition postulate, ~650 pp.;
Weinberg: rep-theory- and axiom-first, 609 pp.). **The Weinberg
batch (chapters 12.05.*-12.09.* of the punch-list at
`plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md`) covers
Poincaré-group representations, Wigner classification, free
Klein-Gordon / Dirac / Maxwell quantum fields, $S$-matrix, cluster
decomposition, Feynman rules from the Dyson series, canonical and
path-integral formalisms, one-loop QED at the axiomatic level, IR
divergences as Bloch-Nordsieck, and the renormalization-power-counting
theorem.** This BLP plan does *not* double-count those units; it
itemises **BLP-distinctive worked-process and external-field gaps**
that Weinberg deliberately skips: relativistic external-field bound
states (hydrogen via the Dirac equation, Klein paradox, Klein-Gordon
in Coulomb and magnetic fields), the canonical cross-section
calculations (Klein-Nishina Compton, Møller, Bhabha, Bethe-Heitler
bremsstrahlung and pair production), the explicit one-loop
results in process-language (self-energy / mass renormalization,
anomalous magnetic moment via vertex function, vacuum polarization
correction to the Coulomb potential, Lamb shift in the
Bethe-Welton-Feynman style), and BLP-canonical technique units
(Furry's theorem from charge conjugation, Coulomb-vs-Lorenz gauge
trade-off in QED, the BLP framing of IR cancellation).

---

## §1 What BLP is for

Berestetskii, Lifshitz, Pitaevskii Volume 4 is **the canonical
physicist's exposition of quantum electrodynamics in process and
cross-section idiom**: the entire content of textbook QED (relativistic
equations, lowest-order processes, one-loop radiative corrections,
renormalization, asymptotic-regime QED) is derived inside ~650 pages
from a single editorial premise — **QED as the operational theory of
electrons, positrons, and photons, with the Feynman rules taken as the
working definition and physical processes (Compton, Møller, Bhabha,
bremsstrahlung, pair production, anomalous magnetic moment, Lamb
shift) as the primary pedagogical mechanism.** Definitions are
minimal, arguments proceed by physical reasoning rather than
axiom-derivation, and every chapter ends with worked Problems whose
solutions are mini-chapters in their own right.

Density: ~280 named results in 652 pp.; ~250 Problems with worked
solutions. BLP is **extremely terse in prose but extremely dense in
worked computations**; the Problems are the canonical Russian-school
QED problem corpus, from which Greiner's *QED* and Itzykson-Zuber
borrow heavily. Reading BLP cold is famously hard; reading it as the
process-first companion to Weinberg's axiomatic Vol 1 is a multiplier.

Distinctive editorial framing, in roughly the order BLP develops it:

1. **Photon and Dirac field as starting equipment (Chs. I-II,
   §§1-26).** BLP opens with the photon (§§1-7, ~25 pp.) — the
   classical electromagnetic field is quantised by *fiat* into mode
   sums of creation / annihilation operators, the photon is the
   resulting one-particle state, polarisation vectors are tabulated in
   transverse gauges. No detour through Wigner classification, no
   little-group analysis. Ch. II (§§8-26, ~75 pp.) develops the Dirac
   equation: relativistic wave equation for spin-1/2 from the
   linearisation requirement, $\gamma$-matrix algebra, spinor
   structure, charge-conjugation and parity, the bilinear covariants
   $\bar\psi \Gamma \psi$, plane-wave solutions, the antiparticle
   interpretation via charge-conjugate spinors. **Compare Weinberg
   Ch. 5, where the Dirac field is derived from the Wigner spin-1/2
   irrep and the Lorentz-covariance constraint; BLP gives it as the
   physically motivated linear first-order equation.**
2. **Particles in external EM fields as the first interacting
   problems (Ch. III, §§27-37).** Before any QED Feynman diagram is
   drawn, BLP solves the relativistic wave equations in external
   classical EM fields: Klein-Gordon in a Coulomb field (§32),
   Klein-Gordon in a uniform magnetic field (§33), **Dirac equation
   in a Coulomb field** (§36 — *the* canonical relativistic
   hydrogen-atom calculation, giving the Sommerfeld fine-structure
   formula $E_{n,j} = m c^2 [1 + (\alpha / (n - j - 1/2 +
   \sqrt{(j+1/2)^2 - \alpha^2}))^2]^{-1/2}$), and **the Klein paradox**
   (§35 — apparent over-the-barrier transmission of a Dirac wave at a
   step potential exceeding $2 m c^2$, requiring the negative-energy
   sea or the pair-creation interpretation). **BLP-canonical pedagogy:
   external-field problems precede QED proper. Weinberg postpones
   external-field calculations to the bound-state appendix.**
3. **Scattering theory in relativistic idiom (Ch. IV, §§64-65).** Ch.
   IV develops the relativistic scattering matrix, cross-section
   $d\sigma = |M|^2 (2\pi)^4 \delta^4(\sum p) \prod d^3p / 2E /
   (2\pi)^3$, kinematic invariants ($s$, $t$, $u$ for two-to-two), the
   crossing relations between $s$- and $u$-channel processes. **Compare
   Weinberg Ch. 3 §§3.1-3.8: BLP derives the cross-section formula
   from invariant phase space and the in/out wavepacket overlap; no
   abstract $S$-matrix axiomatisation.**
4. **Radiation in the classical limit (Ch. V, §§66-71).** Bridge
   between classical radiation (LL Vol 2 Ch. 9) and QED:
   electric-dipole, magnetic-dipole, and electric-quadrupole radiation
   rates from the Hamiltonian dipole interaction
   $\hat H_\text{int} = -e \mathbf A \cdot \hat{\mathbf v}$,
   multipole expansion for atomic transitions, selection rules in QED
   form. **Sets up the dipole approximation used throughout Chs.
   VI-VII.**
5. **Lowest-order QED processes (Ch. VI, §§72-90).** The canonical
   process-by-process treatment that defines BLP:
   - **Compton scattering** ($\gamma + e^- \to \gamma + e^-$, §86):
     the Klein-Nishina formula
     $\frac{d\sigma}{d\Omega} = \frac{r_0^2}{2}
     \left(\frac{\omega'}{\omega}\right)^2
     \left[\frac{\omega}{\omega'} + \frac{\omega'}{\omega}
     - \sin^2\theta\right]$
     with $r_0 = e^2 / mc^2$ the classical electron radius, derived
     from the $s$- and $u$-channel tree amplitudes; Thomson limit
     recovered at $\omega \ll mc^2$. **Klein-Nishina 1929 is the
     historical originator paper; BLP §86 is the textbook canonical
     derivation.**
   - **Møller scattering** ($e^- + e^- \to e^- + e^-$, §81): t- and
     u-channel photon exchange between identical fermions; spin-summed
     unpolarised cross-section; the Lorentz-invariant Mandelstam-
     parametrised result. **Identical-fermion antisymmetrisation is
     mandatory and is the BLP-distinctive worked-example layer.**
   - **Bhabha scattering** ($e^+ + e^- \to e^+ + e^-$, §82):
     $s$-channel (annihilation) plus $t$-channel (exchange) amplitudes,
     crossing relation with Møller. **BLP keeps the spin sums explicit
     in matrix form; Peskin-Schroeder uses trace technology.**
   - **Bremsstrahlung** ($e^- + Z \to e^- + Z + \gamma$, §93): the
     **Bethe-Heitler formula** — soft- and hard-photon limits, the
     IR-divergent forward emission, the screened-nucleus correction.
     Bethe-Heitler 1934 is the originator paper; BLP §93 is the
     canonical textbook treatment.
   - **Pair production** ($\gamma + Z \to e^+ + e^- + Z$, §94):
     crossing relation with bremsstrahlung; the high-energy
     logarithm; nuclear-form-factor correction.
6. **Radiative corrections (Ch. VII, §§108-118).** One-loop QED in
   process language:
   - **Electron self-energy** $\Sigma(p)$ at one loop (§107-108): the
     mass shift $\delta m$ as the on-shell part of $\Sigma$, wave-
     function renormalization $Z_2$, the role of the UV cutoff.
     **BLP's renormalization is operational** — counterterms appear by
     necessity to absorb infinities; the modern dimensional-
     regularization treatment (Weinberg, Peskin-Schroeder) is not in
     BLP.
   - **Vacuum polarization** $\Pi(q^2)$ at one loop (§113-114): photon
     self-energy from a fermion loop, the Uehling potential
     $V_\text{Uehling}(r) = -\frac{\alpha}{r} \cdot \frac{2\alpha}{3\pi}
     \int_1^\infty \frac{e^{-2mr\xi}}{\xi^2}
     (1 + 1/2\xi^2)\sqrt{\xi^2 - 1}\, d\xi$
     as the one-loop correction to the Coulomb potential; running
     coupling $\alpha(q^2)$ at large $q^2$.
   - **Vertex function** $\Gamma^\mu(p, p')$ at one loop and the
     **anomalous magnetic moment** (§116-117): Schwinger's 1948 result
     $a_e = (g-2)/2 = \alpha / 2\pi$, obtained from the
     spin-coupling form factor $F_2(0)$ of the one-loop vertex.
     **Schwinger 1948 is the originator paper; BLP §117 is the
     canonical textbook derivation.**
   - **Lamb shift** (§123): $2S_{1/2}$-$2P_{1/2}$ hydrogen splitting
     from the combination of vertex, vacuum-polarization, and
     self-energy contributions; Bethe 1947 originator (non-relativistic
     log-divergent estimate); Welton 1948 zitterbewegung interpretation;
     Feynman-Schwinger-French 1949 full-QED calculation.
7. **Hadronic and high-energy phenomena (Chs. VIII-IX, §§125-150).**
   Heuristic application chapters: form factors of nucleons,
   deep-inelastic scattering kinematics, the Bethe-Heitler high-energy
   cross-section, photoproduction. **BLP's hadronic chapter is
   pre-QCD; it stops at the parton-model heuristics of the early
   1970s.**
8. **Operator techniques in QED (Ch. X, §§88-104).** The Furry
   picture, formal $S$-matrix in interaction representation, **Furry's
   theorem** (§80 — odd-photon-number Green's functions in pure-QED
   vacuum vanish, from charge-conjugation symmetry of the QED vacuum),
   the Ward-Takahashi identity in BLP idiom. **Furry 1937 originator;
   BLP §80 is the textbook canonical statement.**
9. **Renormalization (Ch. XI, §§110-112).** Power-counting,
   counterterm structure for QED, the dressed propagator and dressed
   vertex; the BLP treatment is the **1970s Russian-school style**
   (not BPHZ; not dim-reg). Sufficient to construct the renormalised
   theory but not modern.
10. **Asymptotic behaviour (Ch. XII, §§133-138).** The
    Gell-Mann-Low / Callan-Symanzik renormalization-group flow of the
    coupling, the **Landau pole** of QED at exponentially large
    momentum, $\alpha(Q^2) = \alpha_0 / [1 - (\alpha_0 / 3\pi)
    \log(Q^2 / m^2)]$ from the one-loop vacuum-polarization
    leading-log resummation. **Landau-Pomeranchuk 1955 originator;
    BLP §134 is the canonical exposition.**
11. **Gauge structure (scattered: §§4, 76-77, 102).** Coulomb gauge
    vs Lorenz gauge in QED: the Coulomb gauge keeps only the two
    transverse photon polarizations and makes the instantaneous
    Coulomb interaction explicit (BLP-preferred for atomic-physics
    applications); the Lorenz gauge $\partial_\mu A^\mu = 0$ keeps
    manifest Lorentz covariance at the cost of unphysical longitudinal
    and time-like polarizations (BLP-preferred for high-energy
    scattering processes). **BLP uses both throughout the book and
    requires explicit translation between them.**
12. **Infrared divergences in BLP framing (§§118-120).** The IR
    divergence in any one-loop electron amplitude is cancelled, at
    the level of physical cross-sections, by the bremsstrahlung
    cross-section for an unobserved soft photon — the **Bloch-Nordsieck
    1937** cancellation. BLP gives the explicit calculation, with the
    photon-mass regulator and the detector energy resolution $\Delta E$
    making the finite combination concrete. **Compare Weinberg
    §13.2-13.3: same physics, different framing — Weinberg derives the
    cancellation from the Bloch-Nordsieck theorem statement; BLP
    derives it from the explicit IR integrals matching term by term.**

BLP stops before non-Abelian gauge theory (Weinberg Vol 2), before
modern functional / path-integral renormalization (which BLP does not
use), before the operator-product expansion (Wilson 1969, Wilson-Zimmermann
1972), and before BPHZ renormalization. It also stops short of QCD,
electroweak unification, and any post-1980 development. As a result,
**BLP is the canonical reference for textbook QED through ~1975, in the
Russian-school tradition** — not the modern Wilsonian / effective-field-
theory reformulation.

BLP is **not** a first introduction to QED for the unprepared. The
prose density and process-driven calculations assume LL Vol 1
(Mechanics), Vol 2 (Classical Theory of Fields), Vol 3 (QM)
fluency, and a working command of trace algebra, $\gamma$-matrix
identities, and contour integration. The canonical alternative texts
cited throughout this §1 inventory and as audit cross-checks are:

- **S. Weinberg, *The Quantum Theory of Fields, Vol. 1: Foundations*
  (Cambridge UP, 1995).** The post-1980 axiomatic-Lagrangian
  counterpart. Weinberg's editorial premise (QFT is *forced* by QM
  plus special relativity plus cluster decomposition) is the
  diametric opposite of BLP's (QFT is *constructed* from process
  Feynman rules). Audit plan
  `plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md`.
- **M. E. Peskin, D. V. Schroeder, *An Introduction to Quantum Field
  Theory* (Westview / Addison-Wesley, 1995).** The Anglosphere
  graduate standard, ~840 pp.; covers QED through the
  Lehmann-Symanzik-Zimmermann reduction and one-loop renormalization
  in a hybrid path-integral and canonical-quantisation style. Closer
  in pedagogical idiom to BLP than to Weinberg, but with modern
  notation (dim reg, $\overline{\text{MS}}$, RG flow).
- **C. Itzykson, J.-B. Zuber, *Quantum Field Theory* (McGraw-Hill,
  1980; Dover 2005).** The Franco-Russian peer to BLP; same era,
  same coverage, slightly more functional-integral emphasis.
  Itzykson-Zuber and BLP are mutually citing.
- **W. Greiner, J. Reinhardt, *Quantum Electrodynamics*, 4th ed.
  (Springer, 2009).** The teaching companion that *follows* BLP's
  process-by-process pedagogy at undergraduate-friendly depth;
  Greiner's Compton, Møller, Bhabha, bremsstrahlung worked
  examples are line-by-line reproductions of BLP §§81-94.
- **F. Mandl, G. Shaw, *Quantum Field Theory*, 2nd ed. (Wiley, 2010).**
  The standard British undergraduate text; covers ~50% of BLP at
  half the depth and is the bridge for FT 2.20 readers coming from
  the British physics-major curriculum.
- **J. D. Bjorken, S. D. Drell, *Relativistic Quantum Mechanics* and
  *Relativistic Quantum Fields* (McGraw-Hill, 1964-65).** The
  pre-BLP American canonical reference; cited by BLP and by
  Weinberg as a historical comparison. The Bjorken-Drell "fill in
  the trace algebra" pedagogical style is the closest American
  counterpart to BLP's process-driven approach.

---

## §2 Prior art / cross-references

### Existing Babel Bible coverage (12-quantum / 10-em-sr, shipped units)

Cross-referenced against the current `content/12-quantum/` corpus
(18 units shipped: `12.01.01-02`, `12.02.01-02`, `12.03.01`,
`12.04.01-02`, `12.05.01`, `12.06.01`, `12.07.01-02`, `12.08.01`,
`12.09.01`, `12.10.01`, `12.11.01`, `12.12.01`, `12.13.01-02`) and
`content/10-em-sr/` corpus (10 units: `10.01-10.07`). ✓ = covered at
BLP-equivalent depth, △ = topic present but BLP-distinctive
worked-process layer or framing not captured, ✗ = not covered.

| BLP chapter / topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Ch. I — Photon (free EM field quantisation) | `12.13.01` bosonic Fock space, `10.04.02` EM waves | △ | Free-field mode quantisation shipped abstractly; BLP's photon polarisation tables and gauge fixing not isolated. |
| Ch. II — Dirac equation, $\gamma$-matrix algebra, antiparticles | `12.11.01` Dirac equation and relativistic spin | △ | Single shipped unit covers the equation, plane-wave solutions, and basic charge-conjugation; BLP's bilinear-covariant tabulation and Furry-theorem prerequisites not isolated. |
| Ch. III §§32-33 — Klein-Gordon in external EM field (Coulomb, magnetic) | — | ✗ | **Gap (BLP-canonical relativistic external-field calculation).** Not in Weinberg either. |
| Ch. III §35 — Klein paradox | — | ✗ | **Gap.** Weinberg drops this; modern QFT texts treat it heuristically. |
| Ch. III §36 — Dirac equation in Coulomb field (relativistic hydrogen, Sommerfeld fine structure) | — | ✗ | **Gap (BLP-canonical).** Hydrogen via LL3 §36 covers non-relativistic; Dirac-in-Coulomb is the relativistic upgrade. |
| Ch. IV — Relativistic scattering theory, cross-section formula | (touched in `12.08.01` scattering survey) | △ | Non-relativistic survey shipped; BLP's invariant-phase-space cross-section formula not isolated. |
| Ch. V — Radiation in classical limit (multipole) | `10.07.01` Larmor formula | △ | Larmor shipped; BLP's QED-multipole-selection-rules form not isolated. |
| Ch. VI §76-77 — Coulomb vs Lorenz gauge in QED | — | ✗ | **Gap (BLP-distinctive technique).** Crucial for translating between atomic-physics and high-energy idioms. |
| Ch. VI §80 — Furry's theorem | — | ✗ | **Gap (BLP-canonical originator-statement, Furry 1937).** Not isolated in Weinberg; appears as a corollary of CPT. |
| Ch. VI §81 — Møller scattering ($e^- e^-$) | — | ✗ | **Gap.** |
| Ch. VI §82 — Bhabha scattering ($e^+ e^-$) | — | ✗ | **Gap.** |
| Ch. VI §86 — Compton scattering, Klein-Nishina | — | ✗ | **Gap (BLP-originator-anchor, Klein-Nishina 1929).** |
| Ch. VI §93 — Bremsstrahlung, Bethe-Heitler | — | ✗ | **Gap (BLP-canonical; Bethe-Heitler 1934 originator).** |
| Ch. VI §94 — Pair production | — | ✗ | Gap (crossed bremsstrahlung). Combine with §93 unit. |
| Ch. VII §107-108 — Electron self-energy, mass renormalization | — | ✗ | **Gap (BLP-distinctive process-language treatment).** Weinberg covers this at axiomatic level; BLP's operational counterterm formulation is the textbook canonical. |
| Ch. VII §113-114 — Vacuum polarization, Uehling potential | — | ✗ | **Gap.** Running coupling at one loop. |
| Ch. VII §117 — Vertex function, anomalous magnetic moment ($g-2$) | — | ✗ | **Gap (originator-anchor, Schwinger 1948).** *The* canonical one-loop QED success story; mandatory unit. |
| Ch. VII §123 — Lamb shift | — | ✗ | **Gap (Bethe 1947 originator, Lamb-Retherford 1947 experimental).** |
| Ch. VII §118-120 — IR divergences, Bloch-Nordsieck cancellation | — | ✗ | **Gap (BLP-process-explicit framing).** Weinberg covers Bloch-Nordsieck at theorem level; BLP gives the explicit integral matching. |
| Chs. VIII-IX — Hadronic / high-energy QED | — | ✗ | Out of scope. Pre-QCD; defer to non-FT QCD reference. |
| Ch. X §§88-104 — Operator techniques (Furry picture, S-matrix) | (touched in `12.12.01` canonical QFT) | △ | Survey unit shipped; BLP's Furry-picture explicit treatment not isolated. |
| Ch. XI — Renormalization | — | ✗ | Defer to Weinberg-batch `12.08.02` (general renormalization theory). |
| Ch. XII §134 — Landau pole, RG asymptotic behaviour | — | ✗ | Defer to Weinberg / Peskin-Schroeder RG batch. |

### Weinberg Vol 1 (FT 2.17) overlap and explicit drops

Per `plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md`, the
Weinberg batch claims `12.05.*`-`12.09.*` slots and ships the
post-1980 axiomatic-Lagrangian formulation. **Explicitly dropped from
this BLP punch-list** to avoid double-count (the Weinberg plan is the
canonical anchor; BLP cites the same content from a process-driven
angle but does not warrant its own unit):

- **Poincaré-group rep theory and Wigner classification of
  one-particle states** (Weinberg `12.05.01-02`). BLP does not
  derive the photon and Dirac fields from Wigner; it postulates them.
  **Drop**; Weinberg is the canonical reference.
- **Cluster decomposition principle and the derivation of Fock space
  as theorem** (Weinberg `12.06.02`). BLP postulates Fock space;
  the Weinberg axiomatic move is not in BLP. **Drop.**
- **$S$-matrix axiomatic definition, in / out states, Lorentz
  invariance** (Weinberg `12.06.01`). BLP gives the operational
  cross-section formula in Ch. IV. The axiomatic $S$-matrix is
  Weinberg-canonical; **drop**.
- **Spin-statistics theorem from causal commutator analysis**
  (Weinberg `12.06.03`). BLP states spin-statistics as part of the
  Dirac-field setup, without the Weinberg microcausality derivation.
  **Drop.**
- **Crossing symmetry and CPT at $S$-matrix level** (Weinberg
  `12.06.04`). Same — BLP uses crossing in the Bhabha-from-Møller
  derivation but does not state the general CPT theorem.
- **Feynman rules from the Dyson series** (Weinberg `12.06.05`). BLP
  states Feynman rules operationally; the Dyson-series derivation is
  Weinberg-canonical. **Drop**; cite Weinberg `12.06.05` as
  prerequisite.
- **Field-theoretic path integral, Faddeev-Popov, ghost fields**
  (Weinberg `12.07.02-03`). BLP does not use path-integral
  quantisation; covered by Weinberg.
- **General renormalization theory, power counting, BPHZ**
  (Weinberg `12.08.02`). BLP's renormalization is operational-
  process-language; the BPHZ / Weinberg power-counting theorem is
  Weinberg-canonical.
- **One-loop QED at the axiomatic level (Weinberg `12.08.01`).**
  Weinberg's `12.08.01` is *the same physics* as the BLP one-loop
  punch-list items below but in axiomatic-renormalization framing.
  Coordination required: the actual produced unit may be a hybrid
  citing both Weinberg `12.08.01` and BLP §§107-108 as the canonical
  one-loop self-energy reference. **Decision**: ship the
  process-language one-loop unit anchored to BLP (this plan's
  `12.16.01`), and let the Weinberg `12.08.01` slot remain
  axiomatic-flavour. They are companions, not competitors.
- **IR divergences as the Bloch-Nordsieck theorem** (Weinberg
  `12.08.03`). BLP gives the same content but with the explicit
  process-by-process cancellation derivation. **Coordinate**: ship
  the BLP-process-explicit version (this plan's `12.16.05`) and let
  Weinberg `12.08.03` remain at theorem-level. They are companions.

### Adjacent textbook plans

- `plans/fasttrack/landau-lifshitz-quantum-mechanics.md` (FT 2.01,
  LL3): hard prerequisite for the relativistic generalisation BLP
  builds on. LL3's `12.11.01` Dirac unit (already shipped) is the
  direct prerequisite for BLP `12.11.02`-`12.11.05` external-field
  Dirac calculations.
- `plans/fasttrack/landau-lifshitz-classical-theory-of-fields.md`
  (FT 1.03, LL2): prerequisite for classical EM radiation (BLP Ch. V
  builds on LL2 Ch. 9), for the Lagrangian formulation of the photon
  field (BLP Ch. I builds on LL2 Ch. 4-5), and for the multipole
  expansion (BLP §§66-71 builds on LL2 §§67-71). Babel Bible's
  `10.04.01-maxwell-in-differential-forms`, `10.06.01-covariant-em`,
  `10.07.01-larmor-formula` cover the same material from a
  modern-geometry angle.
- `plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md` (FT
  2.17): covered above; co-anchor for QED at the axiomatic level.
- `plans/fasttrack/chatterjee-qft-lecture-notes.md` (FT 2.03):
  upstream — Chatterjee covers canonical quantisation of free fields,
  feeding into both Weinberg and BLP.

---

## §3 Gap punch-list (priority-ordered)

The Babel Bible 12-quantum chapter is mature on the non-relativistic
formalism / basic-bound-states side (`12.01-12.07` + `12.08.01`
scattering survey + `12.09.01` identical particles + `12.10.01`
path-integral pointer + `12.11.01` Dirac equation + `12.12.01`
canonical-QFT survey + `12.13.01-02` Fock spaces). The shipped
relativistic-QFT layer is thin: a single Dirac unit, a single
canonical-QFT survey, and the Fock-space pair. BLP exposes gaps on
**(a)** the relativistic-external-field layer (Klein-Gordon in EM,
Dirac in Coulomb, Klein paradox), **(b)** the lowest-order QED
process layer (Compton-Klein-Nishina, Møller, Bhabha, Bethe-Heitler
bremsstrahlung and pair production), **(c)** the one-loop
radiative-correction layer (self-energy / mass renormalization,
vertex / anomalous magnetic moment, vacuum polarization / Uehling,
Lamb shift, IR / Bloch-Nordsieck cancellation), and **(d)** BLP-
distinctive technique units (Furry's theorem, Coulomb-vs-Lorenz gauge
trade-off in QED).

Recommended slot ranges (avoiding LL3-plan reservations `12.02.03`,
`12.07.03-05`, `12.08.02-04`, `12.09.02-05`, `12.14.01`, `12.15.01-02`,
and avoiding the contested Weinberg-plan ranges `12.05.02-07`,
`12.06.02-08`, `12.07.01-07`, `12.08.01-04` which remain in punch-list
state):

- **Extend `12-quantum/11-relativistic-qm/`** with external-field
  Dirac and Klein-Gordon units, Klein paradox, and Furry's theorem
  (`12.11.02`-`12.11.05`).
- **Extend `12-quantum/12-canonical-qft/`** with the gauge-choice
  unit and the lowest-order process units (`12.12.02`-`12.12.06`).
- **New chapter `12-quantum/16-radiative-corrections/`** for the
  one-loop QED block (`12.16.01`-`12.16.05`). Section 16 is unused
  (LL3 takes 14, 15; this opens 16).

### Priority 1 — BLP-distinctive load-bearing additions (5 items)

1. **`12.16.02` One-loop QED vertex function and the anomalous magnetic moment.** BLP §§116-117 anchor; originator-prose required (Schwinger 1948 *Phys. Rev.* 73 — the original one-loop calculation $a_e = \alpha / 2\pi$). Three-tier; ~3200 words. Beginner: phenomenology — the Dirac equation predicts $g = 2$ exactly; experiment (Kusch-Foley 1947 *Phys. Rev.* 72) finds $g \neq 2$ with the deviation $a_e = (g-2)/2 \approx 1.16 \times 10^{-3}$. Intermediate: the one-loop vertex correction $\Gamma^\mu(p, p') = \gamma^\mu F_1(q^2) + i\sigma^{\mu\nu} q_\nu F_2(q^2) / 2m$ with $F_1, F_2$ the Dirac and Pauli form factors; $F_2(0)$ as the anomalous magnetic moment; Feynman parameterization and momentum-space integration. Master: explicit calculation of $F_2(0) = \alpha / 2\pi$, Ward identity $Z_1 = Z_2$, the spectacular agreement of QED with experiment ($a_e^\text{theory}$ accurate to $10^{-12}$, currently the most precisely tested prediction in physics). Originator-prose: paraphrase Schwinger 1948 directly. Bridge to `12.11.01` Dirac equation (prerequisite) and `12.16.01` self-energy (the renormalization context). **Apex unit; originator-prose mandatory.**

2. **`12.16.01` Electron self-energy and mass renormalization at one loop.** BLP §§107-108 anchor; originator-prose required (Schwinger 1948 *Phys. Rev.* 74 — covariant mass renormalization; Tomonaga 1946 *Prog. Theor. Phys.* 1 — independent; Feynman 1948-49; Dyson 1949 — unified treatment). Three-tier; ~3000 words. Beginner: motivation — the self-energy diagram is UV-divergent; the divergence must be absorbed into the physical electron mass. Intermediate: the one-loop self-energy $-i\Sigma(p) = (-ie)^2 \int d^4k/(2\pi)^4 \gamma^\mu \frac{i(\not p - \not k + m)}{(p-k)^2 - m^2} \gamma_\mu \frac{-i g_{\mu\nu}}{k^2}$; Pauli-Villars / cutoff regularization; mass shift $\delta m$ from $\Sigma(\not p = m)$; wavefunction renormalization $Z_2 = (1 - \partial \Sigma / \partial \not p)^{-1}$ at $\not p = m$. Master: the renormalised propagator $i / (\not p - m_R - \Sigma_R(\not p))$, the relation $m_R = m_0 + \delta m$ and its independence of the cutoff after renormalization; comparison with the dim-reg result (Weinberg-batch unit). **BLP-canonical; complementary to Weinberg-batch `12.08.01` (axiomatic flavour).**

3. **`12.16.03` Vacuum polarization at one loop and the Uehling potential.** BLP §§113-114 anchor; originator-prose required (Uehling 1935 *Phys. Rev.* 48 — the potential; Serber 1935 *Phys. Rev.* 48 — independent; Schwinger 1949 *Phys. Rev.* 75 — covariant treatment). Three-tier; ~2800 words. Beginner: physical picture — the QED vacuum is polarisable; a static charge is screened at distances $> \hbar / mc$ (the Compton wavelength). Intermediate: the one-loop photon self-energy $i \Pi^{\mu\nu}(q) = (-1)(-ie)^2 \int d^4k/(2\pi)^4 \text{tr}[\gamma^\mu \frac{i}{\not k - m} \gamma^\nu \frac{i}{\not k + \not q - m}]$; gauge invariance forcing $\Pi^{\mu\nu}(q) = (q^2 g^{\mu\nu} - q^\mu q^\nu) \Pi(q^2)$; renormalization of the photon propagator and the charge $Z_3$. Master: the **Uehling potential** $V(r) = -\alpha/r \cdot [1 + \frac{2\alpha}{3\pi} \int_1^\infty d\xi \, e^{-2mr\xi} (1 + 1/2\xi^2) \sqrt{\xi^2 - 1}/\xi^2]$ as the one-loop correction to the Coulomb potential; running coupling $\alpha(q^2) = \alpha_0 / [1 - (\alpha_0 / 3\pi) \log(-q^2 / m^2)]$ from the leading-log resummation; the Landau pole at $q^2 \sim m^2 e^{3\pi / \alpha_0}$. **BLP-canonical; required for `12.16.04` Lamb shift.**

4. **`12.11.03` Dirac equation in a Coulomb field; relativistic hydrogen and the Sommerfeld fine-structure formula.** BLP §36 anchor; originator-prose required (Sommerfeld 1916 *Annalen der Physik* 51 — the formula from the old quantum theory; Darwin 1928 *Proc. Roy. Soc.* A 118 / Gordon 1928 *Zeits. f. Physik* 48 — independent Dirac-equation derivations). Three-tier; ~3000 words. Beginner: motivation — the non-relativistic hydrogen levels (LL3 `12.06.01`) miss the fine structure observed by Michelson 1887 and explained kinematically by Sommerfeld 1916. Intermediate: the Dirac equation in a static Coulomb field $V = -Ze^2 / r$, separation of variables in spherical coordinates, the radial coupled-equations $(d/dr + (1 - \kappa)/r) F = (E + m + V) G$, $(d/dr + (1 + \kappa)/r) G = -(E - m + V) F$ with $\kappa = \mp(j + 1/2)$ for $j = \ell \pm 1/2$, polynomial solution as a generalised Laguerre-style series. Master: the Sommerfeld fine-structure formula $E_{n,j} = m c^2 \left[1 + \left(\frac{Z\alpha}{n - (j+1/2) + \sqrt{(j+1/2)^2 - Z^2\alpha^2}}\right)^2\right]^{-1/2}$, expansion to $O(\alpha^4)$ giving $\Delta E_{\text{fs}} = -\frac{(Z\alpha)^4 m c^2}{2 n^4} \left(\frac{n}{j+1/2} - \frac{3}{4}\right)$, level degeneracies (still $j$-degenerate; $2S_{1/2}$-$2P_{1/2}$ degeneracy *broken only by Lamb shift*); the failure mode at $Z > 1/\alpha \approx 137$ (the famous "$Z = 137$ catastrophe"). Bridge to `12.11.01` Dirac, `12.06.01` non-relativistic hydrogen, and `12.16.04` Lamb shift. **BLP-canonical; required for Lamb shift.**

5. **`12.12.03` Compton scattering and the Klein-Nishina formula.** BLP §86 anchor; originator-prose required (Klein and Nishina 1929 *Zeits. f. Physik* 52 — the formula; Compton 1923 *Phys. Rev.* 21 — the experimental phenomenon and the kinematic wavelength shift). Three-tier; ~2800 words. Beginner: kinematics — the Compton wavelength shift $\lambda' - \lambda = (h/mc)(1 - \cos\theta)$ from four-momentum conservation, with $h/mc \approx 2.43$ pm the Compton wavelength. Intermediate: the two tree-level diagrams ($s$- and $u$-channel virtual electron exchange), the invariant amplitude $\mathcal M = -ie^2 \bar u(p') [\not\epsilon'^* \frac{\not p + \not k + m}{(p+k)^2 - m^2} \not\epsilon + \not\epsilon \frac{\not p - \not k' + m}{(p-k')^2 - m^2} \not\epsilon'^*] u(p)$; spin and polarisation sums via trace technology and Casimir's trick. Master: the **Klein-Nishina formula** $\frac{d\sigma}{d\Omega} = \frac{r_0^2}{2} \left(\frac{\omega'}{\omega}\right)^2 \left[\frac{\omega}{\omega'} + \frac{\omega'}{\omega} - \sin^2 \theta\right]$ with $r_0 = e^2 / m c^2$; Thomson limit $\omega \ll mc^2$ recovers $d\sigma/d\Omega = r_0^2 (1 + \cos^2\theta)/2$; high-energy backward-scattering enhancement and the total cross-section $\sigma_\text{tot} \sim (\pi r_0^2 mc^2 / \omega) \log(2\omega/mc^2)$ at $\omega \gg mc^2$. Originator-prose: paraphrase Klein-Nishina 1929 directly. **BLP-canonical; first relativistic-process unit; gateway to all of Ch. VI.**

### Priority 2 — BLP-canonical process and external-field chapters (5 items)

6. **`12.12.04` Møller scattering ($e^- e^-$).** BLP §81 anchor; originator-prose (Møller 1932 *Annalen der Physik* 14 — the original non-relativistic limit; Bhabha 1936 *Proc. Roy. Soc.* A 154 — full relativistic via crossing). Three-tier; ~2400 words. Beginner: kinematics — identical-fermion two-to-two scattering; $s$, $t$, $u$ Mandelstam invariants with $s + t + u = 4m^2$. Intermediate: $t$- and $u$-channel virtual-photon exchange diagrams (no $s$-channel: charge conservation forbids it for like-sign particles); identical-particle antisymmetrisation; the unpolarised spin-summed amplitude squared $\overline{|\mathcal M|^2} = 2 e^4 [(s^2 + u^2)/t^2 + (s^2 + t^2)/u^2 + 2s^2 /(tu)]$. Master: the differential cross-section $\frac{d\sigma}{d\Omega}|_\text{CM} = \frac{\alpha^2}{4E^2} \left[\frac{(1 + \cos^4(\theta/2))}{\sin^4(\theta/2)} + \frac{(1 + \sin^4(\theta/2))}{\cos^4(\theta/2)} - \frac{1}{\sin^2(\theta/2)\cos^2(\theta/2)}\right]$ (high-energy limit); non-relativistic limit recovers the Mott formula (Coulomb scattering of identical electrons with exchange-interference correction); experimental verification (Bhabha-Hulme 1936). Bridge to `12.12.03` Compton (the $s/u$ crossing-related process). **BLP-canonical.**

7. **`12.12.05` Bhabha scattering ($e^+ e^-$).** BLP §82 anchor; originator-prose (Bhabha 1936 *Proc. Roy. Soc.* A 154 — the full QED calculation). Three-tier; ~2400 words. Beginner: kinematics — $e^+ e^- \to e^+ e^-$ as a particle-antiparticle two-to-two; both $s$-channel annihilation (intermediate virtual photon) and $t$-channel exchange (analog of Møller). Intermediate: amplitude $\mathcal M = \mathcal M_t + \mathcal M_s$, **crossing symmetry** with Møller ($s \leftrightarrow u$ in Møller gives Bhabha); spin-sum trace algebra; the polarisation-summed result $\overline{|\mathcal M|^2}$ as the sum of $t$-channel, $s$-channel, and their interference. Master: high-energy limit $s \gg m^2$ — $t$-channel dominates at small angle (Bhabha luminosity monitor at $e^+ e^-$ colliders), $s$-channel dominates at large angle; ratio Bhabha/Møller as the canonical crossing-symmetry test. **BLP-canonical; co-shipped with Møller.**

8. **`12.12.06` Bethe-Heitler bremsstrahlung and pair production.** BLP §§93-94 anchor; originator-prose required (Bethe and Heitler 1934 *Proc. Roy. Soc.* A 146 — both processes via crossing). Three-tier; ~2800 words. Beginner: kinematics — bremsstrahlung $e^- + Z \to e^- + Z + \gamma$ as inelastic Coulomb scattering with photon emission; pair production $\gamma + Z \to e^+ + e^- + Z$ as the crossed process by detailed balance. Intermediate: the matrix element at lowest order in $\alpha$ for the bremsstrahlung process; integration over the photon phase space; soft-photon factorisation $d\sigma_\text{brems} = d\sigma_\text{elastic} \cdot \frac{\alpha}{\pi} \frac{d\omega}{\omega} \log\frac{...}{...}$ (the IR-divergent logarithmic emission spectrum that motivates Bloch-Nordsieck). Master: the **Bethe-Heitler formula** $\frac{d\sigma}{d\omega} = \frac{4 Z^2 \alpha^3}{m^2 c^4} \frac{1}{\omega} \left[\frac{4}{3} - \frac{4}{3}\frac{\omega}{E} + (\frac{\omega}{E})^2\right] \log\frac{2 E E' / \omega}{mc^2}$ (high-energy ultrarelativistic limit); screened-nucleus correction (Thomas-Fermi screening); high-energy pair-production cross-section $\sigma_\text{pair} \to (28/9) Z^2 \alpha^3 / m^2 \cdot \log(E/mc^2)$; **radiation length** $X_0$ as the canonical material-property derived from bremsstrahlung. Originator-prose: paraphrase Bethe-Heitler 1934 directly. Bridge to `12.16.05` IR / Bloch-Nordsieck (the soft-photon limit is the IR divergence). **BLP-canonical.**

9. **`12.11.02` Klein-Gordon equation in external EM field; Coulomb and uniform-magnetic cases.** BLP §§32-33 anchor; originator-prose (Klein 1926 / Gordon 1926 — the equation; Sommerfeld 1916 fine-structure formula recovered for spin-0 by Schrödinger 1926 *Annalen der Physik* 80 in his relativistic preprint). Three-tier; ~2400 words. Beginner: minimal coupling $\partial_\mu \to \partial_\mu + ie A_\mu$, the Klein-Gordon equation $(D_\mu D^\mu + m^2)\phi = 0$ in external $A_\mu$. Intermediate: **Coulomb case** $A^0 = -Ze/r$ — radial equation, eigenvalues $E_{n,\ell} = m c^2 [1 + (Z\alpha / (n - \ell - 1/2 + \sqrt{(\ell + 1/2)^2 - Z^2\alpha^2}))^2]^{-1/2}$ (spin-0 Sommerfeld formula); the structural similarity to the Dirac case with $\kappa \mapsto (\ell + 1/2)$. **Uniform magnetic case** $\mathbf A = (0, Bx, 0)$ — relativistic Landau levels $E_n^2 = m^2 c^4 + c^2 p_z^2 + 2 n |e| B \hbar c$ (the relativistic upgrade of LL3 `12.14.01`). Master: the Klein-Gordon equation as a non-physical pion-like model — spin-0 charged particles experience the same fine-structure pattern as Dirac fermions modulo the half-integer shift; comparison with experiment (pionic atoms, $\pi^- + ^{4}\text{He}$). Bridge to `12.11.03` Dirac in Coulomb. **BLP-canonical; first external-field unit.**

10. **`12.11.04` Klein paradox.** BLP §35 anchor; originator-prose required (Klein 1929 *Zeits. f. Physik* 53 — the paradox, in its original form for the Dirac step potential). Three-tier; ~2200 words. Beginner: setup — a Dirac wave incident on a step potential $V(x) = V_0 \Theta(x)$ with $V_0 > 2 m c^2$; intuition suggests total reflection, but the explicit calculation gives a transmission coefficient $T > 0$ and a reflection coefficient $R > 1$ (!). Intermediate: matching plane-wave solutions across $x = 0$, the apparent paradox: positive-energy wave on the left, negative-energy wave on the right, with the "transmitted" current larger than the incident; resolution via charge-current continuity and the negative-energy-sea / pair-creation interpretation (Klein, Sauter 1931). Master: modern resolution — the Klein paradox is *not* paradoxical; the step potential with $V_0 > 2 m c^2$ creates particle-antiparticle pairs (Schwinger 1951 *Phys. Rev.* 82), and the negative-energy "transmitted" wave is the antiparticle going *back* into the step region; the calculation correctly reproduces the Schwinger pair-creation rate in the strong-field limit. **BLP-canonical; bridges single-particle Dirac to full QED.**

### Priority 3 — depth on technique and one-loop completion (4 items)

11. **`12.16.04` Lamb shift from one-loop QED.** BLP §123 anchor; originator-prose required (Bethe 1947 *Phys. Rev.* 72 — the original non-relativistic log-divergent estimate; Welton 1948 — zitterbewegung interpretation; French-Weisskopf 1949 / Kroll-Lamb 1949 / Feynman 1949 — full QED calculation; Lamb and Retherford 1947 *Phys. Rev.* 72 — the experiment). Three-tier; ~2800 words. Beginner: phenomenology — the Dirac equation predicts $2S_{1/2}$ and $2P_{1/2}$ hydrogen levels are degenerate (both $j = 1/2$); Lamb-Retherford 1947 measure a splitting $\Delta E_\text{Lamb} = 1057.85$ MHz. Intermediate: the three one-loop contributions — (a) vertex correction $\Gamma^\mu$ contributes through $F_2(0)$ to the anomalous magnetic moment and through $F_1$-derivative to the $2S_{1/2}$ level; (b) vacuum polarization contributes through the Uehling potential at short distance (relevant for $2S$ because of the non-zero wavefunction at origin); (c) self-energy contributes through the bound-state mass shift. Master: Bethe's 1947 non-relativistic log estimate as the dominant term — $\Delta E_{2S-2P} \approx (\alpha^5 m c^2 / 6\pi) \log(m c^2 / \langle E_\text{atomic}\rangle)$, finite when atomic-scale physics cuts off the log; full result $\Delta E^\text{theory}_\text{Lamb} = 1057.84(2)$ MHz agreeing with experiment to four significant figures. Originator-prose: paraphrase Bethe 1947 directly (the 9-month-old QED winning calculation). Bridge to `12.16.01` self-energy, `12.16.02` vertex, `12.16.03` vacuum polarization (all three are prerequisites), and `12.11.03` Dirac-in-Coulomb (the unperturbed hydrogen). **Apex unit; originator-prose mandatory.**

12. **`12.16.05` Infrared divergences and the Bloch-Nordsieck cancellation in QED.** BLP §§118-120 anchor; originator-prose required (Bloch and Nordsieck 1937 *Phys. Rev.* 52 — the cancellation theorem in non-covariant form; Yennie-Frautschi-Suura 1961 *Annals of Physics* 13 — the all-orders exponentiation). Three-tier; ~2400 words. Beginner: the IR problem — one-loop electron amplitudes diverge as $\log(\lambda_\gamma)$ for a fictitious photon mass $\lambda_\gamma \to 0$; this is a real divergence in the on-shell amplitude. Intermediate: physical observables must include unobserved soft-photon emission below the detector resolution $\Delta E$; the bremsstrahlung cross-section diverges in the same way; **the sum $\sigma_\text{virtual}(\lambda_\gamma) + \sigma_\text{real}(\lambda_\gamma, \Delta E)$ is $\lambda_\gamma$-independent** (Bloch-Nordsieck 1937). Master: explicit one-loop matching for elastic Coulomb scattering ($e^- + Z \to e^- + Z + \text{soft }\gamma$ vs the one-loop vertex contribution); the all-orders Yennie-Frautschi-Suura exponentiation $\sigma_\text{physical}(\Delta E) = \sigma_\text{Born} \cdot (\Delta E / m c^2)^{B(\theta)}$ with $B(\theta)$ a process-dependent positive function. **BLP-process-explicit; companion to Weinberg `12.08.03` (theorem-level statement).**

13. **`12.11.05` Furry's theorem and charge-conjugation symmetry of QED.** BLP §80 anchor; originator-prose required (Furry 1937 *Phys. Rev.* 51 — the theorem). Three-tier; ~2000 words. Beginner: motivation — naive QED calculation suggests certain Green's functions (three-photon vertex, five-photon vertex, etc.) might contribute; Furry's theorem proves they vanish to all orders. Intermediate: charge-conjugation $\hat C$ on the Dirac field $\psi \mapsto C \bar\psi^T$ with $C = i\gamma^2\gamma^0$, the QED Lagrangian's invariance $\hat C: A^\mu \mapsto -A^\mu, \, \bar\psi \gamma^\mu \psi \mapsto -\bar\psi \gamma^\mu \psi$ keeping the interaction $-e \bar\psi \not A \psi$ unchanged; the QED vacuum is $\hat C$-invariant. Master: **Furry's theorem** — the QED vacuum expectation of any product of an odd number of photon fields vanishes, $\langle 0 | T[A^{\mu_1}(x_1) \cdots A^{\mu_{2k+1}}(x_{2k+1})] | 0 \rangle = 0$, because the corresponding fermion loop changes sign under $\hat C$ and must equal its negative; consequence: the photon-photon scattering ($\gamma\gamma \to \gamma\gamma$) is *not* zero (even-photon-number), but the photon-photon-photon "triangle" diagram and the photon-tadpole all vanish to all orders. Originator-prose: paraphrase Furry 1937 directly. Bridge to `12.11.01` Dirac, `12.12.01` canonical QFT. **BLP-canonical technique unit.**

14. **`12.12.02` Coulomb gauge vs Lorenz gauge in QED.** BLP §§4, 76-77, 102 anchor; originator-prose (Coulomb 1773 — the static potential gauge; Lorenz 1867 *Phil. Mag.* 34 — the covariant gauge condition; Gupta 1950 *Proc. Phys. Soc.* A 63 / Bleuler 1950 *Helv. Phys. Acta* 23 — the indefinite-metric quantisation in Lorenz gauge). Three-tier; ~2200 words. Beginner: the EM gauge freedom $A^\mu \to A^\mu + \partial^\mu \chi$ and the need to fix it. Intermediate: **Coulomb gauge** $\nabla \cdot \mathbf A = 0$ — only two transverse photon polarizations are dynamical; the instantaneous Coulomb interaction is *explicit*; preferred for atomic-physics calculations. **Lorenz gauge** $\partial_\mu A^\mu = 0$ — manifestly Lorentz-covariant; four photon polarizations are quantised with indefinite metric (Gupta-Bleuler); time-like and longitudinal modes cancel in physical matrix elements; preferred for high-energy scattering. Master: the explicit gauge transformation between Coulomb and Lorenz photon propagators; the Ward identity as the QED expression of gauge invariance ensuring physical results are gauge-independent; the **Gupta-Bleuler condition** $(\partial_\mu A^{\mu+})|\psi\rangle = 0$ defining physical states in Lorenz gauge. **BLP-distinctive technique unit; required for navigating BLP's Chs. I, VI, VII, X simultaneously.**

---

## §4 Implementation sketch and sourcing notes

### Implementation

**Minimum BLP-equivalence batch** = priority 1 only (items 1-5): 5 new
units. Estimates:

- ~3 hours per typical new unit; items 1 (anomalous $g-2$), 2
  (self-energy), 3 (vacuum polarization), and 4 (Dirac-in-Coulomb)
  are ~4.5 h each given the originator-prose lift and the
  trace-algebra / Feynman-parameter computation. Item 5 (Compton /
  Klein-Nishina) is ~4 h given the trace-algebra and the
  high-energy / Thomson-limit dual derivation.
- Priority 1: 5 originator-or-computation-heavy × 4 h = ~22 hours.
- Priority 1+2: ~22 + 5 new × 3.5 h = ~40 hours.
- Priority 1+2+3: ~40 + 4 new × 4 h = ~56 hours (Lamb shift is
  apex-unit budget).

**Originator-prose targets.** BLP is **synthesizer** — none of the
chapter material is Berestetskii / Lifshitz / Pitaevskii's own
discovery in the sense Landau's 1930 magnetic levels are Landau's.
The originators are 1925-1950 QED's founders: Dirac, Klein, Gordon,
Pauli, Schwinger, Tomonaga, Feynman, Dyson, Bethe, Lamb,
Furry, Klein-Nishina, Møller, Bhabha, Bethe-Heitler. Originator-prose
mandatory for items anchored to these papers:

- **Item 1 (anomalous $g-2$):** **Schwinger 1948 — originator,
  mandatory originator-prose.** Co-anchor Kusch-Foley 1947 (experiment).
- **Item 2 (self-energy / mass renormalization):** Schwinger 1948 /
  Tomonaga 1946 / Feynman 1948-49 / Dyson 1949.
- **Item 3 (vacuum polarization, Uehling):** Uehling 1935 / Serber
  1935; Schwinger 1949 covariant.
- **Item 4 (Dirac in Coulomb):** **Darwin 1928 / Gordon 1928** —
  independent, both before Dirac formalism crystallised. Sommerfeld
  1916 prior (old quantum theory).
- **Item 5 (Compton / Klein-Nishina):** **Klein-Nishina 1929 —
  originator, mandatory originator-prose.** Co-anchor Compton 1923
  (experiment, wavelength shift).
- **Item 6 (Møller):** Møller 1932.
- **Item 7 (Bhabha):** **Bhabha 1936 — originator, mandatory
  originator-prose.**
- **Item 8 (Bethe-Heitler):** **Bethe-Heitler 1934 — originator,
  mandatory originator-prose.**
- **Item 9 (Klein-Gordon in external field):** Klein 1926 / Gordon
  1926; Schrödinger 1926 relativistic preprint.
- **Item 10 (Klein paradox):** **Klein 1929 — originator, mandatory
  originator-prose.** Sauter 1931 resolution; Schwinger 1951
  pair-creation rate.
- **Item 11 (Lamb shift):** **Bethe 1947 — originator (the
  9-month-old QED winning calculation), mandatory originator-prose.**
  Lamb-Retherford 1947 (experiment); French-Weisskopf 1949 / Kroll-Lamb
  1949 / Feynman 1949 (full QED).
- **Item 12 (IR / Bloch-Nordsieck):** **Bloch-Nordsieck 1937 —
  originator, mandatory originator-prose.** Yennie-Frautschi-Suura
  1961 (exponentiation).
- **Item 13 (Furry's theorem):** **Furry 1937 — originator,
  mandatory originator-prose.**
- **Item 14 (Coulomb vs Lorenz gauge):** Lorenz 1867; Gupta 1950 /
  Bleuler 1950 (indefinite metric).

**Notation crosswalk concerns (BLP-specific).** To be pinned inline
in Master sections of each new unit:

- **Metric signature:** BLP uses the East-coast (mostly-minus)
  convention $(+, -, -, -)$ — the LL standard. Babel Bible's
  `10.05-10.06` units also use $(+, -, -, -)$. **No conflict.**
  Weinberg uses West-coast $(-, +, +, +)$; cross-volume citations
  require sign-flip on each $g^{\mu\nu}$.
- **Gamma matrices:** BLP uses the **Dirac (standard) representation**
  $\gamma^0 = \text{diag}(I, -I)$, $\gamma^i = \begin{pmatrix} 0 &
  \sigma^i \\ -\sigma^i & 0 \end{pmatrix}$; Peskin-Schroeder uses
  the **Weyl (chiral) representation** $\gamma^0 = \begin{pmatrix} 0
  & I \\ I & 0 \end{pmatrix}$. Pin equivalence in master tier.
- **Slash notation:** BLP and Weinberg both write $\not p = \gamma^\mu
  p_\mu$. No conflict.
- **Units:** BLP uses **Gaussian-Heaviside** units (factor $4\pi$
  absorbed; $\alpha = e^2 / \hbar c$ without $4\pi\epsilon_0$). Babel
  Bible units are SI. Crosswalk: $\alpha^\text{BLP} = e^2 /
  \hbar c \approx 1/137$, $\alpha^\text{SI} = e^2 / (4\pi\epsilon_0 \hbar c)
  \approx 1/137$, numerically equal. In $\hbar = c = 1$ natural
  units the distinction collapses. State the unit convention
  explicitly in each master tier.
- **Electron charge sign:** BLP writes the QED vertex as $-ie\gamma^\mu$
  with $e > 0$ the proton charge (so $-e$ is the electron); some
  modern texts (Peskin-Schroeder) write $+ie$ with $e < 0$ the electron
  charge. Cross-volume citations need sign verification.
- **Fine-structure constant:** $\alpha = e^2 / \hbar c$ in BLP, the
  numerical value $\approx 1/137.036$ is convention-independent.
- **Compton wavelength:** BLP uses $\lambdabar = \hbar / mc$ (reduced
  Compton); Peskin-Schroeder uses $\lambda_C = h/mc = 2\pi \lambdabar$.
- **Cross-volume notation alert:** BLP uses $u(p, s)$ for the
  positive-energy Dirac spinor and $v(p, s)$ for the negative-energy
  (antiparticle); both normalised $\bar u u = 2m$, $\bar v v = -2m$.
  Weinberg uses the same notation with the same normalisation. No
  conflict.

### DAG edges

New prerequisites for priority-1+2:

- `12.11.02` (Klein-Gordon in external EM) ← {`12.11.01` Dirac,
  `10.06.01` covariant EM}
- `12.11.03` (Dirac in Coulomb) ← {`12.11.01`, `12.06.01`
  non-relativistic hydrogen}
- `12.11.04` (Klein paradox) ← `12.11.01`
- `12.11.05` (Furry's theorem) ← {`12.11.01`, `12.12.01` canonical QFT}
- `12.12.02` (Coulomb vs Lorenz gauge) ← {`12.04.01-02` Maxwell,
  `12.12.01` canonical QFT}
- `12.12.03` (Compton / Klein-Nishina) ← {`12.12.01`, `12.11.01`,
  `12.12.02` gauge choice}
- `12.12.04` (Møller) ← `12.12.03`
- `12.12.05` (Bhabha) ← {`12.12.04`, crossing-symmetry note}
- `12.12.06` (Bethe-Heitler) ← {`12.12.03`, `12.16.05` IR (forward
  reference for the soft-photon limit)}
- `12.16.01` (self-energy / mass renormalization) ← {`12.12.01`,
  `12.11.01`}
- `12.16.02` (vertex / anomalous $g-2$) ← `12.16.01`
- `12.16.03` (vacuum polarization / Uehling) ← `12.16.01`
- `12.16.04` (Lamb shift) ← {`12.11.03` Dirac-in-Coulomb, `12.16.01`,
  `12.16.02`, `12.16.03`}
- `12.16.05` (IR / Bloch-Nordsieck) ← {`12.16.01`, `12.12.06`
  bremsstrahlung}

### Chapter structure

One new chapter folder required:

- `content/12-quantum/16-radiative-corrections/` — opens with
  `12.16.01` self-energy, `12.16.02` vertex / $g-2$, `12.16.03`
  vacuum polarization, `12.16.04` Lamb shift, `12.16.05` IR /
  Bloch-Nordsieck.

Existing chapter extensions:

- `12-quantum/11-relativistic-qm/`: add `12.11.02` (KG in external
  EM), `12.11.03` (Dirac in Coulomb), `12.11.04` (Klein paradox),
  `12.11.05` (Furry's theorem).
- `12-quantum/12-canonical-qft/`: add `12.12.02` (gauge choice),
  `12.12.03` (Compton / Klein-Nishina), `12.12.04` (Møller),
  `12.12.05` (Bhabha), `12.12.06` (Bethe-Heitler).

No `10-em-sr/` extension warranted: the BLP relativistic-EM-kinematics
overlap with §10 is covered by the existing `10.05.02-relativistic-
kinematics-and-dynamics` and `10.06.01-covariant-electrodynamics-
faraday-tensor`; BLP-specific QED phase-space and cross-section
machinery lives more naturally in `12-quantum/`.

### Composite Weinberg + BLP batch

Because the Weinberg batch claims `12.05.*-12.09.*` slots at axiomatic
level and the existing `12.11-12.13` chapters ship the basic
relativistic-QM-and-second-quantisation core, this BLP batch is
**purely BLP-distinctive process-language and external-field
additions**: no re-production of Poincaré-irreps, Wigner classification,
cluster decomposition, S-matrix axioms, Feynman-rules-from-Dyson, or
the axiomatic renormalization theorem. The BLP plan adds the
**physicist's worked-process and external-field layer** that Weinberg
deliberately skips: external-field bound states, the explicit
process-by-process cross-section computations, and the one-loop
results stated in process language (rather than axiomatically).

The composite production order is then:
- Weinberg foundations (`12.05.*-12.06.*-12.07.*`) first — provides
  Poincaré-irreps, Fock space, S-matrix, Feynman rules.
- BLP external-field block (`12.11.02-05`) — applications of free
  Dirac to bound-state physics; orthogonal to Weinberg.
- BLP process block (`12.12.02-06`) — applies Weinberg Feynman rules
  to specific lowest-order QED processes.
- One-loop block: shared between Weinberg `12.08.01-04` (axiomatic
  framing) and BLP `12.16.01-05` (process framing); ship both as
  companions, with the process-language units anchored to BLP.

### Apex unit designations

Three apex units in the BLP sense:

- **Item 1 (`12.16.02` anomalous magnetic moment $g-2$)** — Schwinger
  1948 originator; the most precisely tested prediction in physics.
  Extended budget per unit (~5 h).
- **Item 11 (`12.16.04` Lamb shift)** — Bethe 1947 originator (the
  founding calculation of post-war QED). Extended budget per unit
  (~5 h).
- **Item 5 (`12.12.03` Compton / Klein-Nishina)** — Klein-Nishina
  1929 originator; the canonical first calculation in any QED
  textbook. Standard apex budget (~4.5 h).

### Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md` line 76
  (entry 2.20).
- **Local copy:** *not resolved.* `reference/textbooks-extra/` contains
  LL Vols 1, 2, 6, 8 (per the LL3 audit); Vol 3 was also not
  resolved; Vol 4 is similarly unresolved as of this audit pass.
  WebFetch fallback against Elsevier / ScienceDirect TOC was used to
  build the §1 inventory.
- **Re-audit upgrade queued:** add to
  `docs/catalogs/NEED_TO_SOURCE.md` for Vol 4 acquisition. Once a
  local PDF is available, re-audit upgrades this plan from
  `equivalence-partial` to `equivalence-covered` and the §3
  punch-list is verified against line-numbered BLP section references.
- **Citation form:** V. B. Berestetskii, E. M. Lifshitz, L. P.
  Pitaevskii, *Quantum Electrodynamics*, 2nd ed., translated from the
  Russian by J. B. Sykes and J. S. Bell, Course of Theoretical
  Physics Volume 4 (Pergamon Press / Butterworth-Heinemann, Oxford,
  1982; reprinted through the 1990s). ISBN 0-08-026504-9.
- **Russian original:** *Kvantovaya Elektrodinamika*, Nauka, Moscow,
  1980 (2nd ed.); 1st Russian edition 1968. Pre-1989 Soviet text —
  Pergamon / Butterworth holds the English commercial rights.
- **Peer sources cited in this audit (peer-anchor for §1):**
  - S. Weinberg, *The Quantum Theory of Fields, Vol. 1: Foundations*
    (Cambridge UP, 1995). FT 2.17; axiomatic-Lagrangian counterpart.
  - M. E. Peskin, D. V. Schroeder, *An Introduction to Quantum
    Field Theory* (Westview / Addison-Wesley, 1995). Anglosphere
    graduate standard.
  - C. Itzykson, J.-B. Zuber, *Quantum Field Theory* (McGraw-Hill,
    1980; Dover 2005). Franco-Russian peer to BLP; mutually citing.
  - W. Greiner, J. Reinhardt, *Quantum Electrodynamics*, 4th ed.
    (Springer, 2009). Teaching companion that follows BLP's
    process-by-process pedagogy at undergraduate-friendly depth.
  - F. Mandl, G. Shaw, *Quantum Field Theory*, 2nd ed. (Wiley, 2010).
    British undergraduate text; covers ~50% of BLP at half the depth.
  - J. D. Bjorken, S. D. Drell, *Relativistic Quantum Mechanics* and
    *Relativistic Quantum Fields* (McGraw-Hill, 1964-65). Pre-BLP
    American canonical reference.
  - M. Srednicki, *Quantum Field Theory* (Cambridge UP, 2007).
    Modern American graduate text with explicit Schwinger /
    Klein-Nishina / Lamb-shift derivations cross-citing BLP.
- **Additional originator references** (cited in §3 punch-list):
  Schwinger 1948 *Phys. Rev.* 73, 74, 75 (mass renormalization,
  anomalous magnetic moment, vacuum polarization covariant);
  Tomonaga 1946 *Prog. Theor. Phys.* 1 (independent renormalization);
  Feynman 1948-49 *Phys. Rev.* 74-76 (Feynman-diagram QED); Dyson
  1949 *Phys. Rev.* 75 (Tomonaga-Schwinger-Feynman unification);
  Uehling 1935 *Phys. Rev.* 48 (Uehling potential); Serber 1935
  *Phys. Rev.* 48 (vacuum polarization, independent);
  Klein-Nishina 1929 *Zeits. f. Physik* 52 (Compton formula);
  Compton 1923 *Phys. Rev.* 21 (wavelength shift); Klein 1929
  *Zeits. f. Physik* 53 (Klein paradox); Sauter 1931
  *Zeits. f. Physik* 69 (Klein-paradox resolution); Schwinger 1951
  *Phys. Rev.* 82 (pair-creation rate from strong field);
  Klein 1926 *Zeits. f. Physik* 37 / Gordon 1926 *Zeits. f. Physik*
  40 (Klein-Gordon equation); Darwin 1928 *Proc. Roy. Soc.* A 118 /
  Gordon 1928 *Zeits. f. Physik* 48 (Dirac in Coulomb); Sommerfeld
  1916 *Annalen der Physik* 51 (fine-structure formula from old
  quantum theory); Møller 1932 *Annalen der Physik* 14;
  Bhabha 1936 *Proc. Roy. Soc.* A 154; Bethe-Heitler 1934
  *Proc. Roy. Soc.* A 146 (bremsstrahlung + pair production);
  Furry 1937 *Phys. Rev.* 51 (Furry's theorem); Bloch-Nordsieck 1937
  *Phys. Rev.* 52 (IR cancellation); Yennie-Frautschi-Suura 1961
  *Annals of Physics* 13 (IR exponentiation); Bethe 1947
  *Phys. Rev.* 72 (Lamb shift); Lamb-Retherford 1947 *Phys. Rev.* 72
  (Lamb-shift experiment); French-Weisskopf 1949 / Kroll-Lamb 1949
  / Feynman 1949 (full-QED Lamb-shift calculation); Lorenz 1867
  *Phil. Mag.* 34 (Lorenz gauge); Gupta 1950 *Proc. Phys. Soc.* A
  63 / Bleuler 1950 *Helv. Phys. Acta* 23 (Gupta-Bleuler
  indefinite-metric quantisation).
- **Local copy retention.** Once acquired, retain at
  `reference/textbooks-extra/Vol 4 - Berestetskii Lifshitz
  Pitaevskii - Quantum Electrodynamics (2nd ed, 1982).pdf` alongside
  Vols 1, 2, 6, 8. Not promoted into `reference/fasttrack-texts/` —
  BLP remains commercial-copyright; the personal copy stays in the
  parking area.

---

## §5 What this plan does NOT cover

- **Non-Abelian gauge theory.** Out of scope — BLP is pure-QED
  (Abelian $U(1)$ gauge). QCD and electroweak unification are
  Weinberg Vol 2 (FT 2.18) and beyond.
- **Path-integral formulation of QED.** BLP does not use path
  integrals; covered by Weinberg `12.07.02` (path-integral) and
  `12.07.03` (Faddeev-Popov for non-Abelian, irrelevant for QED but
  documented for completeness).
- **Operator-product expansion, Wilsonian RG, effective field
  theory.** Post-1970 developments not in BLP; covered by Weinberg
  `12.07.07` (folk theorem) and the future Wilson / Polchinski plan
  if added to FT.
- **BPHZ renormalization (Bogoliubov-Parasiuk-Hepp-Zimmermann).** BLP
  uses operational counterterm renormalization; the BPHZ formalism
  is Weinberg `12.08.02` territory.
- **Dimensional regularization.** Not in BLP; Pauli-Villars and UV
  cutoff are the BLP regulators. Dim-reg is Peskin-Schroeder /
  Weinberg territory.
- **Two-loop and higher-order QED.** BLP Ch. VII stops at one-loop
  (with brief two-loop pointers in §117 for $g-2$, where the
  Sommerfield-Petermann two-loop calculation is cited but not
  derived). Future deepening plans only.
- **QED bound states beyond hydrogen.** BLP §96-100 covers
  positronium and muonium briefly; out of scope for this audit
  pass.
- **Strong-field QED beyond Klein paradox.** Schwinger pair production
  in constant fields and the Heisenberg-Euler effective Lagrangian
  (Heisenberg-Euler 1936, Schwinger 1951) are BLP §91 territory but
  are deferred. Future apex unit `12.16.06` candidate.
- **Hadronic and high-energy phenomena (BLP Chs. VIII-IX).** Out of
  scope; pre-QCD heuristics. Replaced in modern curricula by QCD
  factorisation theorems (Collins-Soper-Sterman 1985+).
- **Asymptotic behaviour and the Landau pole (BLP Ch. XII).** Out of
  scope; deferred to the renormalization-group track (Weinberg
  `12.07.07` folk theorem; Gell-Mann-Low 1954 originator).
- **Cosmological / astrophysical applications.** BLP touches on
  thermal-radiation cross-sections, plasma QED, etc.; deferred.
- **Modern precision QED (muon $g-2$, electron $g-2$ to $10^{-12}$
  precision).** Hadronic contributions, electroweak contributions,
  five-loop QED — all post-BLP. Future review-unit candidate but
  not in this batch.
- **Line-number Problem inventory.** BLP's ~250 Problems with worked
  solutions form a separate per-chapter problem corpus. Inventory
  deferred unless the punch-list expands into a dedicated
  BLP-exercise-pack pass (analogous to the proposed LL3 and Vol 1
  problem-packs — would be its own ~20-hour pass).
- **Russian-language original.** Translation differences (Sykes-Bell
  vs. Russian) not catalogued; physicist-conventions track the 2nd
  English edition.

---

## §6 Acceptance criteria for FT equivalence (BLP)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, *Quantum
Electrodynamics* (BLP) is at equivalence-coverage when:

- ≥95% of BLP's named results and worked formulae in Chapters I-VII
  + X-XI map to Babel Bible units **at BLP-equivalent pedagogical
  depth** (currently ~10%; after priority-1 ~35%; after priority-1+2
  ~65%; after priority-1+2+3 ~88%; final 7% closed by the
  exercise-pack pass per §5). Chapters VIII-IX (hadronic, high-energy
  heuristics) and Ch. XII (asymptotic / Landau pole) are
  out-of-scope; coverage % is reported against the in-scope
  Chs. I-VII + X-XI material only.
- ≥80% of BLP's Problems have a Codex equivalent worked example
  (currently <5%; closing requires the BLP-exercise-pack pass per §5).
- ≥90% of BLP's worked process calculations (cross-sections,
  one-loop computations) appear in a unit (currently ~5%;
  priority-1+2 brings to ~75%; priority-1+2+3 brings to ~92%).
- Notation crosswalk pinned in Master sections per §4. No standalone
  `notation/blp.md` needed (the crosswalk concerns are per-unit-local
  and notational, not foundational).
- DAG: for every Dirac → external-field-Dirac → QED-process →
  one-loop chain in BLP Chs. II-VII, an unbroken prerequisite chain
  in Babel Bible's DAG. Currently breaks at every step (`12.11.02-05`
  external-field block missing; `12.12.02-06` process block missing;
  `12.16.01-05` one-loop block missing). Items 1-14 close all chains.
- Pass-W weaving connects new units to existing `12.11.01` Dirac,
  `12.12.01` canonical QFT, `12.13.01-02` Fock spaces, `12.06.01`
  non-relativistic hydrogen (for fine-structure comparison),
  `12.04.02` QHO (for relativistic Landau levels), `10.05.02`
  relativistic kinematics, `10.06.01` covariant EM, and `10.07.01`
  Larmor (for the classical-radiation comparison).

The 5 priority-1 new units (items 1-5) close the BLP-distinctive
load-bearing gap given the existing Babel Bible 12-quantum corpus.
Priority-2 closes the lowest-order process layer (items 6-10).
Priority-3 closes the one-loop completion and BLP-distinctive
technique layer (items 11-14).

**Prerequisite alert.** BLP sits at FT 2.20 — **after** Vols 1
*Mechanics* (FT 1.02), 2 *Classical Theory of Fields* (FT 1.03), 3
*Quantum Mechanics* (FT 2.01); after Apostol Vols I-II (FT 0.1,
0.2), Shilov *Linear Algebra* (FT 1.01), Lang *Basic Mathematics*
(FT 0.3); and after Weinberg Vol 1 (FT 2.17) for the foundational
Feynman-rules apparatus. Babel Bible must keep those prerequisite
chains intact: LL3 `12.11.01` Dirac (already shipped) is the direct
prerequisite for BLP `12.11.02`-`12.11.05`; `12.12.01` canonical QFT
(already shipped) is the prerequisite for `12.12.02`-`12.12.06`;
Weinberg-batch units `12.05.04-06` (free quantum fields) and
`12.06.05` (Feynman rules) are the upstream prerequisites for the
process-language units `12.12.03-06` and the one-loop units
`12.16.01-05`. This BLP plan does not re-audit Weinberg or the LL3
prerequisites; it depends on those audits closing first (and in
practice, the BLP-process units can ship as soon as the
Babel Bible `12.12.01` canonical-QFT unit is mature enough to host
Feynman-rules statements).

**Honest scope.** Large equivalence gap. The Babel Bible 12-quantum
chapter is mature on the non-relativistic formalism / basic-bound-
states side (`12.01-12.07` + `12.08.01` scattering survey + `12.09.01`
identical particles + `12.10.01` path-integral pointer) and ships a
single Dirac unit (`12.11.01`), a single canonical-QFT survey unit
(`12.12.01`), and the Fock-space pair (`12.13.01-02`). The
**BLP-canonical process and one-loop layer** (external-field Dirac
and Klein-Gordon, Klein paradox, Furry's theorem, Coulomb-vs-Lorenz
gauge, Compton / Klein-Nishina, Møller, Bhabha, Bethe-Heitler
bremsstrahlung and pair production, one-loop self-energy and mass
renormalization, vertex function and anomalous magnetic moment,
vacuum polarization and Uehling potential, Lamb shift, IR /
Bloch-Nordsieck cancellation) is entirely uncaptured.
Priority-1+2+3 batch is **14 new units + 1 new chapter directory**
(`12-quantum/16-radiative-corrections/`) — comparable in scope to
the LL3 priority-1+2+3 batch (14 new units + 2 new chapter
directories) but with a center of mass on lowest-order QED process
calculations and one-loop radiative corrections rather than
approximate-methods QM and multi-electron atoms.
