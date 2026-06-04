# Deepening gaps — Parisi & Wu / Damgaard-Hüffel / Namiki, *Stochastic Quantization* (Fast Track 2.16)

SLUG: `parisi-wu-stochastic-quantization`
Re-audited against the live 1319-unit corpus (2026-06-03). The original audit
(`plans/fasttrack/parisi-wu-stochastic-quantization.md`) was written at 313 units
and proposed a ~9-unit punch-list (08.10.01–08.10.09). **The SQ core is now built.**
Two units landed during batch-2 stat-field-theory production —
`08.10.02` (Fokker-Planck + equilibrium) and `08.10.08` (Langevin updates + lattice
numerics) — and between them they cover the audit's Priority-0 through Priority-4
items at full FT-equivalence depth: the **Parisi-Wu theorem** (field Langevin
$\partial_\tau\phi=-\delta S/\delta\phi+\eta$ → $e^{-S}/Z$ equilibrium, stated and
proved), the **Fokker-Planck equivalence** (spectral gap, log-Sobolev, H-theorem),
**Zwanziger stochastic gauge fixing** (full theorem + proof, no Faddeev-Popov / no
Gribov), **Onsager-Machlup** path-integral form, **stochastic regularisation**
(pointer), and **complex Langevin / sign problem** (Parisi 1983, Aarts-Seiler-Stamatescu,
theorem-level). Brownian/Wiener prereq is `08.14.01`.

What remains genuinely uncovered are the **SUSY-side payoffs** the audit flagged at
Priority 2 (Nicolai map, and its hard prereq Hamiltonian SUSY-QM), **Parisi-Sourlas
dimensional reduction** (Priority 1 item 5 — never built), the **Martin-Siggia-Rose
generating-functional** route (the dynamical-field-theory dual of the Langevin
formulation, absent corpus-wide), and the **stochastic-perturbation / rooted-tree
expansion** that the audit named at Master tier but neither 08.10.02 nor 08.10.08
develops. The **KPZ / stochastic-PDE** thread is also absent and is a natural
stat-field-theory unit. Free slots in chapter `08-stat-mech/10-qft/` begin at
`08.10.11` (occupied through `08.10.10`).

Result: **6 genuine gaps**, **9 COVERED-verified topics**.

---

## Genuine gaps (propose to write)

### 1. `08.10.11` — Supersymmetric quantum mechanics: superpotential, supercharges, Witten index
- **spec:** Hamiltonian SUSY-QM — partner Hamiltonians $H_\pm=-\tfrac12\partial_x^2+\tfrac12 W'^2\mp\tfrac12 W''$ from a superpotential $W(x)$, supercharges $Q,Q^\dagger$ with $\{Q,Q^\dagger\}=H$, exact ground state $e^{-W}$, the Witten index $\mathrm{tr}(-1)^F$, and SUSY breaking. This is the Hamiltonian/superpotential form, distinct from the $d_t$–$d_t^*$ Morse-theory reading in `03.15.12`.
- **prereqs:** `12.04.02` (quantum harmonic oscillator), `12.02.*`/`12.03.*` (QM formalism, exists), `08.10.02` (Langevin/Fokker-Planck — for the drift = $-W'$ identification)
- **chapter dir:** `content/08-stat-mech/10-qft/` · frontmatter `section: stat-mech`, `chapter: qft`
- **why a gap:** SUSY-QM exists in the corpus only as Witten's *Morse-theory* survey (`03.15.12`: supercharges as $d_t+d_t^*$, ground states = harmonic forms). The standard physicists' Hamiltonian SUSY-QM with a superpotential $W(x)$, partner potentials, and the Witten index — the hard prereq the audit flagged for the Nicolai map — is absent. Grep: `superpotential` → 0 hits; `supersymmetric quantum mechanic` → only Morse/index units.

### 2. `08.10.12` — The Nicolai map and the stochastic quantisation of SUSY theories
- **spec:** Nicolai's nonlinear field redefinition trivialising the bosonic action in SUSY theories (bosonic action → Gaussian, fermion determinant = Jacobian of the map); identification of the Nicolai variable with the equilibrium variable of a Langevin process whose drift is the superpotential gradient; the direct route to lattice SUSY.
- **prereqs:** `08.10.11` (SUSY-QM, this batch), `08.10.02` (Langevin equilibrium), `08.10.08` (Langevin / lattice), `08.14.02` (Grassmann integration / fermion determinant)
- **chapter dir:** `content/08-stat-mech/10-qft/` · `section: stat-mech`, `chapter: qft`
- **why a gap:** Audit Priority-2 item 6, never produced. Grep `nicolai map|nicolai transformation|nicolai variable` → 0 hits (the only "Nicolai" in the corpus is *Nicolai Reshetikhin* the person, in `03.16.06`). Genuinely absent.

### 3. `08.10.13` — Parisi-Sourlas dimensional reduction and supersymmetry of the random-field problem
- **spec:** Parisi-Sourlas 1979: a theory in $d$ dimensions with a quenched random source coupled to $\phi$ reduces, at the level of correlation functions, to a *supersymmetric* theory in $d-2$ dimensions; the random-field Ising motivation; the $\mathrm{OSp}$ superrotation and the dimensional-reduction theorem; relation to the Langevin/noise trick (noise ↔ random source).
- **prereqs:** `08.10.11` (SUSY-QM, this batch), `08.04.*` (RG, exists), `08.06.01` (Gaussian field), `08.10.02` (noise / Langevin)
- **chapter dir:** `content/08-stat-mech/10-qft/` · `section: stat-mech`, `chapter: qft`
- **why a gap:** Audit Priority-1 item 5, never produced. Grep `parisi-sourlas|random.field.*supersym|superrotation` → 0 relevant hits ("negative dimension" matches are power-counting/K-theory, unrelated). Genuinely absent.

### 4. `08.10.14` — The Martin-Siggia-Rose / Janssen-De Dominicis response-field formalism
- **spec:** Recasting a Langevin SDE as a field-theoretic generating functional by introducing a conjugate **response field** $\hat\phi$: $Z[J]=\int\mathcal D\phi\,\mathcal D\hat\phi\,e^{-S_{\mathrm{MSR}}[\phi,\hat\phi]}$ with the MSR action; the response/correlation propagators, the FDT as a Ward identity, the Jacobian/Itô-discretisation subtlety. The path-integral-of-the-dynamics dual to the operator Fokker-Planck of `08.10.02`.
- **prereqs:** `08.10.02` (Langevin/Fokker-Planck), `08.10.08` (Langevin), `08.07.01` (path integral), `08.12.01` (fluctuation-dissipation theorem)
- **chapter dir:** `content/08-stat-mech/10-qft/` · `section: stat-mech`, `chapter: qft`
- **why a gap:** The MSR/Janssen-De Dominicis doubled-field functional is the standard analytic engine for stochastic field theory (and the perturbative backbone of stochastic quantisation), but is absent corpus-wide. Grep `martin-siggia-rose|MSRJD|janssen|de.?dominicis|response.field formalism|doubled.field` → 0 hits. (The earlier "response field" filename hit was unrelated dielectric prose.) Genuinely absent.

### 5. `08.10.15` — Stochastic perturbation theory and the rooted-tree expansion
- **spec:** Perturbative solution of the field Langevin equation order-by-order in the coupling — iterative integral solution, the **rooted-tree** diagrammatic expansion with stochastic-time ($\tau$-ordered) propagators and noise vertices, equal-time $\tau\to\infty$ limit reproducing ordinary Euclidean Feynman amplitudes, and the Parisi-Wu fluctuation-dissipation propagator $D(\tau,\tau')$.
- **prereqs:** `08.10.02` (Fokker-Planck/equilibrium), `08.10.08` (Langevin), `08.10.03` ($\phi^4$ / Dyson series), `08.10.06` (one-loop renormalisation in $\phi^4$)
- **chapter dir:** `content/08-stat-mech/10-qft/` · `section: stat-mech`, `chapter: qft`
- **why a gap:** Audit calls for the "stochastic perturbation theory; tree-diagram expansion in $\tau$" at Master tier (items 1 & 3); neither 08.10.02 nor 08.10.08 develops the diagrammatics — they prove the equilibrium identity and the numerics but not the analytic rooted-tree expansion. Grep `stochastic perturbation` → only the *bibliography mention* in 08.10.02; no unit states/derives it. Genuine Master-tier gap.

### 6. `08.14.07` — The KPZ equation and dynamic scaling of growing interfaces
- **spec:** Kardar-Parisi-Zhang nonlinear stochastic PDE $\partial_t h=\nu\nabla^2 h+\tfrac\lambda2(\nabla h)^2+\eta$ for surface growth; dynamic exponents $z,\alpha,\beta$, the $1{+}1$d exact exponents ($\alpha=1/2,\beta=1/3$, KPZ universality), the Cole-Hopf map to a Langevin/directed-polymer problem, relation to Burgers and to the noisy-gradient (Langevin) framework.
- **prereqs:** `08.10.02` (Langevin/Fokker-Planck), `08.04.*` (RG, exists), `08.10.08` (Langevin), `08.14.01` (Brownian/Wiener)
- **chapter dir:** `content/08-stat-mech/statistical-field-theory/` · `section: stat-mech`, `chapter: statistical-field-theory`
- **why a gap:** The brief's "relation to KPZ / stochastic PDEs." A Parisi-coauthored cornerstone of stochastic-field-theory and a major stat-mech universality class, entirely absent. Grep `kardar.?parisi.?zhang|\bKPZ\b|surface growth|interface growth` → 0 hits. Genuinely absent; high value for the stat-field-theory chapter even beyond FT 2.16.

---

## COVERED (not gaps) — verified with existing unit ids

- **Parisi-Wu stochastic-quantisation theorem** (field Langevin $\partial_\tau\phi=-\delta S/\delta\phi+\eta$ → $e^{-S}/Z$ as $\tau\to\infty$ equilibrium; stated and *proved*) — **COVERED** `08.10.02` (Theorem "stochastic-quantisation of Euclidean field theory; Parisi-Wu 1981", §Advanced + Exercise) and again `08.10.08` (Master theorem). Audit Priority-1 items 1+3.
- **Fokker-Planck equation + equilibrium distribution $P_{\mathrm{st}}=e^{-S}/Z$** (drift-diffusion derivation, spectral gap, Bakry-Émery log-Sobolev, H-theorem) — **COVERED** `08.10.02`. Audit Priority-1 item 2.
- **Langevin field equation + Gaussian white noise** $\langle\eta\eta\rangle=2\delta^d\delta$ — **COVERED** `08.10.02` (Formal definition + field-theory exercise) and `08.10.08` (lattice form). Audit Priority-1 item 1.
- **Zwanziger stochastic gauge fixing** (drift along gauge orbits, no Faddeev-Popov ghosts, no Gribov ambiguity, Lorentz-covariant) — **COVERED** `08.10.08` (Master theorem "Zwanziger stochastic gauge fixing; Zwanziger 1981" with full proof). Audit Priority-1 item 4.
- **Onsager-Machlup path-integral / Girsanov weight of the Langevin process** — **COVERED** `08.10.02` (Master theorem "path-integral / Onsager-Machlup; Damgaard-Hüffel 1987").
- **Stochastic regularisation** (UV regulator via smeared noise in fictitious time, gauge-invariant) — **COVERED** (pointer depth) `08.10.02` §Advanced/Synthesis (Hüffel-Rumpf, Floratos-Iliopoulos). Audit Priority-3 item 7; not a standalone unit but adequately pointed.
- **Langevin updates / lattice numerics** (Euler-Maruyama, SU($N$) link Langevin with Haar drift, pseudofermions, HMC) — **COVERED** `08.10.08`. Audit Priority-3 item 8.
- **Complex Langevin and the sign problem** (Parisi 1983, holomorphic-drift criterion, Aarts-Seiler-Stamatescu) — **COVERED** `08.10.08` (Master theorem "complex Langevin"). Audit Priority-4 item 9.
- **Brownian motion / Wiener measure / Ornstein-Uhlenbeck prereq** — **COVERED** `08.14.01` (Brownian motion, the Wiener measure, and the path integral); OU process treated in `08.10.02`. Audit's Priority-0 prereq is satisfied.
