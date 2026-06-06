# Audit gaps — Tao, *Nonlinear Dispersive Equations: Local and Global Analysis* (02.21)

SLUG: `tao-dispersive`
SOURCE CURRICULUM: `pde-harmonic` · SECTION: `analysis` · CHAPTER: `dispersive-strichartz`
Audited 2026-06-05 against the live corpus. Target chapter `content/02-analysis/21-dispersive-strichartz/` is **empty** (only `.gitkeep`); free ids run sequentially from `02.21.01`.

The corpus has a strong **classical** PDE spine (heat `02.13.03`, wave `02.13.04`, Laplace/Poisson `02.13.01/02`) and a microlocal chapter (`02.14`), plus the Fourier transform (`02.10.04`). The decisive finding is that **dispersive PDE theory is genuinely absent**: the entire machinery Tao builds — quantitative dispersive decay, the $TT^*$/Strichartz estimates, local well-posedness by contraction in Strichartz / $X^{s,b}$ spaces, conservation-law-driven global well-posedness, the energy-critical induction-on-energy / concentration-compactness program, and virial blowup — has **zero theorem-level presence** anywhere in `content/`.

The single trap: the classical wave-equation unit `02.13.04` *names* "Strichartz estimates" as its Theorem 9 and references them repeatedly in bridges/synthesis, but the statement there is a one-line gloss ("for appropriate exponent pairs $(p,q)$… there is $C$ such that…") with **no proof, no admissibility condition, no $TT^*$ argument, no decay estimate, and no nonlinear application**. It is a survey pointer, not a development. Dispersive theory is correctly treated as a gap.

A second trap: the corpus has substantial **KdV** and **NLS** content under symplectic/integrable-systems (`05.09.*`, `05.15.02`) and a QM **scattering** unit (`12.08.01`). All of these are the *integrable / Lax-pair / inverse-scattering / stationary-spectral* viewpoint — orthogonal to Tao's *low-regularity well-posedness and harmonic-analysis* viewpoint. Marked COVERED-elsewhere-but-different and kept out of these gaps.

Scope discipline: I propose the **6 theorem-level payoff units** that carry the book's load-bearing results, and push the KdV-specific local theory, the bilinear-estimate apparatus, and pure research-monograph asymptotics (modified scattering, Iaks/ I-method bookkeeping) to OUT OF SCOPE. Prereqs into the empty sibling chapters `02.16` (Sobolev) and `02.20` (Littlewood–Paley/interpolation) are flagged **sibling, may be co-produced**.

Result: **6 genuine gaps**, **11 COVERED-verified topics**, **6 OUT OF SCOPE**.

---

## Genuine gaps (propose to write)

### 1. `02.21.01` — Dispersion, the fundamental solution, and pointwise dispersive decay
- **title:** Dispersive decay estimates for the free Schrödinger and wave/Klein–Gordon propagators
- **spec:** The dispersive relation and group velocity; the free Schrödinger propagator $e^{it\Delta}$ with explicit kernel $(4\pi i t)^{-n/2}e^{i|x-y|^2/4t}$ and the **pointwise dispersive (decay) estimate** $\|e^{it\Delta}f\|_{L^\infty} \lesssim |t|^{-n/2}\|f\|_{L^1}$, interpolating with $L^2$ conservation to the full $L^{p'}\to L^p$ dispersive bound; the analogous wave/Klein–Gordon decay via **stationary phase** on the (degenerate) cone/hyperboloid, including the loss of derivatives from curvature degeneracy; Hadamard-type parametrices as the geometric-optics backbone. This is Tao Ch. 2 §2.1–2.4, the linear input to everything downstream.
- **prereqs:** `02.10.04` (Fourier transform & Plancherel), `02.14.02` / `02.14.01` (stationary phase, used there for $\Psi$DO composition — reuse the method), `02.13.03` (heat kernel/Duhamel, classical analogue for contrast)
- **chapter:** `dispersive-strichartz` · `section: analysis` · `source_book: tao-dispersive` · `source_curriculum: pde-harmonic`
- **why a gap:** `grep -riE "dispersive (decay|estimate)|e\^\{it\\\\Delta\}|t\^\{-n/2\}"` over `content/` → 0 theorem-level hits. Stationary phase exists (`02.14`) but is only applied to pseudodifferential symbol calculus and wave-front sets, never to derive a free-evolution decay rate. The Schrödinger propagator and its $|t|^{-n/2}$ decay appear nowhere. Genuinely absent.

### 2. `02.21.02` — Strichartz estimates for Schrödinger and wave (the $TT^*$ method)
- **title:** Strichartz estimates via the $TT^*$ argument and the admissibility condition
- **spec:** Admissible exponent pairs ($\tfrac{2}{q}+\tfrac{n}{r}=\tfrac n2$ for Schrödinger, the wave analogue with the dimensional shift), the homogeneous estimate $\|e^{it\Delta}f\|_{L_t^qL_x^r}\lesssim\|f\|_{L^2}$, the dual/inhomogeneous (retarded) Strichartz estimate via the **Christ–Kiselev lemma**, and the **$TT^*$ method** deriving Strichartz from the dispersive decay (gap #1) plus the Hardy–Littlewood–Sobolev inequality; statement of the endpoint (Keel–Tao) case and why $q=2$ is delicate. This is Tao Ch. 2 §2.3 — the central estimate of the whole book and the thing the chapter is named for.
- **prereqs:** `02.21.01` (dispersive decay, the input to $TT^*$), `02.10.04` (Fourier/Plancherel), `02.07.06` (L^p / Hölder / interpolation foundations), `02.20.*` (Littlewood–Paley & real-interpolation / HLS — **sibling, may be co-produced**), `02.16.*` (Sobolev spaces $H^s$ — **sibling, may be co-produced**)
- **chapter:** `dispersive-strichartz` · `section: analysis` · `source_book: tao-dispersive` · `source_curriculum: pde-harmonic`
- **why a gap:** `grep -riE "tomas.?stein|christ.?kiselev|keel.?tao|admissible (pair|exponent)|TT\^\*"` → 0 hits. `02.13.04`'s "Theorem 9 (Strichartz)" is a bare inequality with no admissibility set, no $TT^*$, no endpoint, no proof. The estimate is genuinely undeveloped. Restriction/Tomas–Stein (the dual route) is also absent corpus-wide (`grep -riE "fourier restriction|restriction (estimate|conjecture)"` → 0).

### 3. `02.21.03` — Local well-posedness of semilinear Schrödinger/wave by contraction
- **title:** Local well-posedness for semilinear NLS/NLW via Strichartz contraction and the scaling heuristic
- **spec:** The semilinear Schrödinger equation $iu_t+\Delta u=\mu|u|^{p-1}u$ and semilinear wave equation; the **scaling-critical Sobolev exponent** $s_c=\tfrac n2-\tfrac{2}{p-1}$ and the subcritical/critical/supercritical trichotomy; Duhamel's formula as a fixed point, **local well-posedness by the contraction mapping principle in a Strichartz space** ($H^s$ subcritical and $\dot H^{s_c}$ critical small-data), the **Strichartz / fractional-Leibniz product (Moser) estimates** that close the contraction, and persistence of regularity, blowup criterion, and continuous dependence (the full Hadamard well-posedness package). Tao Ch. 3 §3.1–3.3.
- **prereqs:** `02.21.02` (Strichartz estimates), `02.01.05` (contraction mapping / Banach fixed point — already in the metric-space unit), `02.16.*` (Sobolev embedding $H^s$, fractional chain rule — **sibling, may be co-produced**), `02.20.*` (Littlewood–Paley for the fractional-Leibniz/Moser estimate — **sibling, may be co-produced**)
- **chapter:** `dispersive-strichartz` · `section: analysis` · `source_book: tao-dispersive` · `source_curriculum: pde-harmonic`
- **why a gap:** `grep -riE "well.?posed|local well.?posedness|scaling.?critical|s_c|duhamel.*contraction"` over `content/` → the only PDE "well-posed" mentions are GR/Hadamard-state framings (`13.09.*`, classical Hadamard ill-posedness in `02.13.04`); no semilinear-evolution LWP exists. The contraction principle is present (`02.01.05`) but never applied to a dispersive PDE. Genuinely absent.

### 4. `02.21.04` — Conservation laws and global well-posedness; the energy-critical problem
- **title:** Mass/energy conservation, global well-posedness, and the energy-critical defocusing problem
- **spec:** Conservation of **mass** $\int|u|^2$, **momentum**, and **energy** $\int\tfrac12|\nabla u|^2+\tfrac{\mu}{p+1}|u|^{p+1}$ for NLS (and the wave energy); how an a-priori conserved quantity at the critical/subcritical regularity upgrades local to **global well-posedness** (defocusing $H^1$-subcritical GWP, mass-conservation $L^2$ theory); statement of the **energy-critical** problem $p=\tfrac{n+2}{n-2}$, the role of the Strichartz norm becoming critical, and the (defocusing) global-existence-and-scattering theorem (Bourgain / Colliander–Keel–Staffilani–Takaoka–Tao) at the survey-of-the-result level. Tao Ch. 3 §3.4–3.5 + Ch. 5.
- **prereqs:** `02.21.03` (LWP), `02.21.02` (Strichartz), `02.13.04` (classical wave energy method, for contrast), `02.16.*` (Sobolev / Gagliardo–Nirenberg energy bounds — **sibling, may be co-produced**)
- **chapter:** `dispersive-strichartz` · `section: analysis` · `source_book: tao-dispersive` · `source_curriculum: pde-harmonic`
- **why a gap:** `grep -riE "energy.critical|global well.?posedness|conserv.*(mass|energy).*schrodinger"` → 0 hits. Mass/energy conservation in the corpus is the QM probability-current (`12.03.*`) or classical-field-theory Noether (`09.07.01`), never the dispersive-PDE a-priori-bound-to-GWP mechanism. Energy-critical NLS/NLW theory is entirely absent.

### 5. `02.21.05` — Bourgain $X^{s,b}$ spaces and low-regularity well-posedness
- **title:** Bourgain (dispersive Sobolev) $X^{s,b}$ spaces and the bilinear-estimate method
- **spec:** Definition of the $X^{s,b}$ norm $\| \langle\xi\rangle^s\langle\tau-h(\xi)\rangle^b\,\widehat u\|_{L^2_{\tau,\xi}}$ adapted to the dispersion relation $\tau=h(\xi)$; the linear and **transference/embedding** estimates $X^{s,b}\hookrightarrow C_tH^s$ for $b>\tfrac12$ and $X^{s,b}\hookrightarrow$ Strichartz; the **time-localization** lemmas; and how a single **bilinear/multilinear $X^{s,b}$ estimate** drives local well-posedness *below* the Strichartz-contraction threshold (the periodic and low-regularity gains Bourgain spaces are built for). This is Tao §2.6 + §4.1 — the technique that distinguishes the monograph from a first course.
- **prereqs:** `02.21.02` (Strichartz, the comparison norm), `02.10.04` (space-time Fourier transform), `02.20.*` (Littlewood–Paley, frequency localization — **sibling, may be co-produced**), `02.16.*` (Sobolev $H^s$ — **sibling, may be co-produced**)
- **chapter:** `dispersive-strichartz` · `section: analysis` · `source_book: tao-dispersive` · `source_curriculum: pde-harmonic`
- **why a gap:** `grep -riE "bourgain space|x\^\{s,b\}|x_\{s,b\}|dispersive sobolev"` over `content/` → **0 hits**. No frequency-restricted space-time norm exists anywhere. Central and genuinely absent.

### 6. `02.21.06` — Virial identities, blowup, and the soliton/stability outlook
- **title:** Virial/Glassey blowup for focusing NLS and the soliton-stability outlook
- **spec:** The **virial (Morawetz-type) identity** $\tfrac{d^2}{dt^2}\int|x|^2|u|^2 = 8\,(\text{Hamiltonian-type quantity})$ and **Glassey's theorem**: negative-energy finite-variance focusing $H^1$ data blow up in finite time; the pseudoconformal symmetry and explicit blowup solution; the **ground-state soliton** $e^{it}Q$, the sharp Gagliardo–Nirenberg constant fixing the mass threshold, and the **orbital stability** (Weinstein / Grillakis–Shatah–Strauss criterion) vs. instability dichotomy — stated at the survey level as the book's closing outlook. Tao Ch. 3 §3.5–3.6.
- **prereqs:** `02.21.04` (conservation laws / energy), `02.21.03` (LWP, the blowup-criterion input), `02.16.*` (sharp Gagliardo–Nirenberg — **sibling, may be co-produced**), `09.07.01` (Noether/Hamiltonian structure, optional context)
- **chapter:** `dispersive-strichartz` · `section: analysis` · `source_book: tao-dispersive` · `source_curriculum: pde-harmonic`
- **why a gap:** `grep -riE "virial|glassey|orbital stability|pseudoconformal|ground.?state soliton"` over `content/` → 0 hits (the only "soliton"/"solitary wave" entries are integrable-systems Lax/theta-function constructions in `05.09.*`, a different object and method). Focusing-NLS blowup theory and the variational soliton-stability circle are absent.

---

## COVERED (not gaps) — verified with existing unit ids

- **The Fourier transform & Plancherel** — **COVERED** `02.10.04`. (Tao Ch. 1.) The space-time Fourier transform needed for $X^{s,b}$ is the same object; only its dispersive *use* is new (gap #5).
- **Stationary phase / oscillatory integrals** — **COVERED** as method in `02.14.01`, `02.14.02` (used for wave-front sets and $\Psi$DO composition). Reused, not re-derived, in gap #1; the dispersive *decay-rate* output is what is new.
- **Contraction mapping / Banach fixed-point principle** — **COVERED** `02.01.05` (metric-space unit). The abstract theorem is present; its application to Duhamel iteration in a Strichartz space is gap #3.
- **Classical wave equation: d'Alembert, Kirchhoff/Poisson, spherical means, finite propagation speed, energy method, Duhamel** — **COVERED** `02.13.04`. This is the *classical* hyperbolic theory; the dispersive a-priori-estimate theory is genuinely different (gaps #1–6). The unit's one-line "Theorem 9 (Strichartz)" is a survey pointer, not the estimate.
- **Heat equation, heat kernel, Duhamel principle (parabolic)** — **COVERED** `02.13.03`. Parabolic smoothing is the contrast case to dispersive spreading.
- **Klein–Gordon equation (on Lorentzian/curved background)** — **COVERED** `13.09.02` (and `12.11.*` relativistic QM). This is the geometric/QFT framing; the flat-space dispersive decay of $\square+m^2$ is folded into gap #1.
- **Sobolev spaces $H^s$, $W^{k,p}$, and Sobolev embedding** — **COVERED (partial / elsewhere)** `24.01.01` (numerical-PDE chapter defines $H^s$/$W^{k,p}$ and embedding). The dedicated analysis chapter `02.16` is **empty** and is the sibling audit's job; gaps #2–6 cite `02.16.*` as **sibling, may be co-produced**.
- **L^p spaces, Hölder, Minkowski, interpolation foundations** — **COVERED** `02.07.06`. Real/complex interpolation and HLS at the level Strichartz needs land in the sibling `02.20`.
- **Schrödinger equation (quantum-mechanical / spectral framing); scattering theory** — **COVERED-but-different** `12.03.01` (Schrödinger/Heisenberg pictures), `12.08.01` (stationary scattering theory, wave operators, cross-sections). This is the spectral/stationary viewpoint; Tao's time-dependent low-regularity Cauchy theory is the gap.
- **KdV / NLS as integrable systems (Lax pairs, inverse scattering, finite-gap, theta-function solitons)** — **COVERED-but-different** `05.09.08/09/10/11`, `05.15.02`, `05.14.06`. The integrable-systems viewpoint; Tao's harmonic-analysis LWP for KdV is a different method (see OUT OF SCOPE).
- **Hamiltonian / Noether conservation-law structure of field theories** — **COVERED** `09.07.01` (continuum field theory), `05.05.*` (Lagrangian field theory). The abstract conservation-law machinery; its dispersive-GWP exploitation is gap #4.

## OUT OF SCOPE

- **KdV-specific local theory (the $X^{s,b}$ bilinear estimate for $\partial_x(u^2)$, Tao Ch. 4)** — the *method* ($X^{s,b}$) is captured generically in gap #5; the KdV-specific bilinear computation is monograph apparatus and overlaps the existing integrable-systems KdV units (`05.09.*`). Skip to avoid duplication.
- **The energy-critical concentration-compactness / Kenig–Merle road-map and induction-on-energy bookkeeping** — beyond theorem-level payoff; gap #4 states the energy-critical *result* and its mechanism, which is the right altitude for a curriculum unit.
- **Morawetz interaction estimates and the I-method / almost-conservation laws (CKSTT)** — research-monograph technique; the global-theory *payoff* is stated in gap #4. The interaction-Morawetz apparatus itself is too specialized.
- **Modified scattering / long-range asymptotics and wave-operator construction for NLS** — past the book's core and overlaps the QM scattering framing (`12.08.01`); not a theorem-level curriculum unit.
- **Periodic (torus) dispersive estimates and the arithmetic of $L^p$ eigenfunction / Strichartz-on-$\mathbb T^n$ number theory** — Bourgain's periodic theory is gestured at in gap #5; the lattice-point/number-theoretic refinements are out of scope.
- **Detailed orbital-stability spectral analysis (Grillakis–Shatah–Strauss linearized-operator spectral theory in full)** — gap #6 states the stability dichotomy and criterion at survey level; the full linearized-operator spectral apparatus is monograph-depth and out of scope.
