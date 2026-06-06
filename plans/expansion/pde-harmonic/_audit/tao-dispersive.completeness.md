# Completeness re-audit — Tao, *Nonlinear Dispersive Equations: Local and Global Analysis* (02.21)

SLUG: `tao-dispersive`
SOURCE CURRICULUM: `pde-harmonic` · SECTION: `analysis` · CHAPTER: `dispersive-strichartz`
Re-audited 2026-06-05 against the **now-larger** corpus, after Spine 2 shipped the full
`content/02-analysis/21-dispersive-strichartz/` chapter (6 units, `02.21.01`–`02.21.06`).

The first audit (`tao-dispersive.gaps.md`) ran against an **empty** target chapter and proposed
exactly the 6 theorem-level payoff units that were then produced. This pass checks Tao's headline
theorems/estimates against those shipped units plus the harmonic-analysis prerequisites
(`02.16` Sobolev, `02.19`/`02.20` Littlewood–Paley/interpolation) to find anything **still**
genuinely absent.

**Result: 0 new gaps.** The shipped chapter not only covers the 6 proposed payoffs, it also folds
in — at survey/statement level — several items the first audit explicitly deferred as OUT OF SCOPE.

---

## Headline-theorem ledger (Tao ToC → shipped id)

### Linear theory (Tao Ch. 2)
- **Dispersion relation, group velocity, wave-packet propagation** — COVERED `02.21.01` (Prop 1).
- **Free Schrödinger propagator $e^{it\Delta}$, explicit kernel** — COVERED `02.21.01` (Def + Thm).
- **Pointwise dispersive decay $\|e^{it\Delta}f\|_{L^\infty}\lesssim|t|^{-n/2}\|f\|_{L^1}$ and $L^{p'}\to L^p$ interpolation** — COVERED `02.21.01` (Key Theorem; sharpness Prop 2).
- **Stationary phase / curved-surface oscillatory-integral decay** — COVERED `02.21.01` (two theorems), reusing the method from `02.14.01/02`.
- **Wave/Klein–Gordon decay at the degenerate rate $(n-1)/2$; Knapp obstruction** — COVERED `02.21.01` (Thm + Prop 3).
- **Strichartz estimates, admissibility $2/q+n/r=n/2$, homogeneous + retarded** — COVERED `02.21.02` (main Thm; Props 2,5,6).
- **$TT^*$ method reducing Strichartz to dispersive decay** — COVERED `02.21.01` (Prop 4) + `02.21.02`.
- **Christ–Kiselev lemma for the retarded estimate** — COVERED `02.21.02` (Prop 4).
- **Endpoint (Keel–Tao) abstract theorem; failure of $(2,\infty)$ in $n=2$** — COVERED `02.21.02` (two theorems).
- **Restriction/Tomas–Stein dual route (paraboloid extension)** — COVERED `02.21.02` (Thm "Strichartz from restriction-extension").

### Nonlinear local theory (Tao Ch. 3 §3.1–3.3)
- **Semilinear NLS/NLW; scaling-critical $s_c=n/2-2/(p-1)$; sub/critical/super trichotomy** — COVERED `02.21.03`.
- **Duhamel contraction in a Strichartz space; subcritical + critical small-data LWP + scattering** — COVERED `02.21.03` (Ginibre–Velo/Kato Thm; Cazenave–Weissler Thm).
- **Fractional-Leibniz / Moser product estimate that closes the contraction** — COVERED `02.21.03` (Prop 2).
- **Persistence of regularity, blowup criterion, continuous dependence** — COVERED `02.21.03` (Thm + Props 4,6).
- **Supercritical ill-posedness (sharpness of $s_c$)** — COVERED `02.21.03` (Thm).
- **NLW parallel and the half-derivative shift** — COVERED `02.21.03` (Thm).

### Conservation laws & global theory (Tao Ch. 3 §3.4–3.5, Ch. 5)
- **Mass/energy (momentum) conservation; $H^1$-subcritical defocusing GWP** — COVERED `02.21.04` (Key Thm; Props 1–3).
- **Energy-critical defocusing GWP + scattering (Bourgain radial; CKSTT general)** — COVERED `02.21.04` (two theorems).
- **Induction-on-energy / concentration-compactness, interaction Morawetz** — COVERED `02.21.04` (stated inside Bourgain/CKSTT/Kenig–Merle theorems; survey altitude — was OUT OF SCOPE item, now folded in correctly).
- **Kenig–Merle concentration-compactness/rigidity road map; focusing dichotomy vs. Aubin–Talenti $W$** — COVERED `02.21.04` (two theorems).

### Bourgain $X^{s,b}$ method (Tao §2.6, Ch. 4)
- **$X^{s,b}$ norm adapted to $\tau=h(\xi)$; Hilbert-space structure** — COVERED `02.21.05` (Prop 1).
- **Transference/embedding $X^{s,b}\hookrightarrow C_tH^s$ for $b>1/2$; sharpness at $b=1/2$** — COVERED `02.21.05` (Thm + Prop 2).
- **Time-localization + Duhamel modulation-gain lemmas** — COVERED `02.21.05` (Props 3,4).
- **KdV bilinear estimate (Kenig–Ponce–Vega), resonance identity $3\xi\xi_1(\xi-\xi_1)$, sharp indices** — COVERED `02.21.05` (KPV Thm; Prop 5; sharp-index Thm). *Was OUT OF SCOPE in first audit; shipped as a stated headline.*
- **Bourgain periodic $L^4$ / arithmetic Strichartz on $\mathbb T$** — COVERED `02.21.05` (Thm). *Was OUT OF SCOPE; folded in.*
- **$I$-method / almost-conservation (CKSTT)** — COVERED `02.21.05` (Thm). *Was OUT OF SCOPE; folded in.*

### Virial, blowup, solitons (Tao Ch. 3 §3.5–3.6)
- **Virial/Morawetz identity $V''=8\int|\nabla u|^2-\tfrac{4n(p-1)}{p+1}\int|u|^{p+1}$; Glassey blowup** — COVERED `02.21.06` (Key Thm; Props 1,2) and `02.21.04` (Prop 5).
- **Pseudoconformal symmetry and explicit minimal-mass blowup** — COVERED `02.21.06` (Def + Prop 4).
- **Sharp Gagliardo–Nirenberg constant (Weinstein), ground state $Q$, mass threshold $\|Q\|_{L^2}$** — COVERED `02.21.06` (Thm + Prop 3).
- **Ground-state uniqueness/non-degeneracy (Kwong); spectral hypothesis for stability** — COVERED `02.21.06` (Thm). *Sharper than the first audit's survey-level "stability dichotomy"; the GSS spectral apparatus, deferred as OUT OF SCOPE, is now present at statement level.*
- **Orbital stability/instability dichotomy (Weinstein; Grillakis–Shatah–Strauss), $d''(\omega)$ criterion** — COVERED `02.21.06` (Thm + Props 5,6; worked $d''(\omega)$ computation).

---

## Items checked and confirmed NOT a new gap

- **Scattering theory as a standalone chapter (wave/scattering operators, asymptotic completeness)** — Tao treats nonlinear scattering as the long-time limit attached to GWP, not a separate development. The corpus states scattering as part of the Cazenave–Weissler critical theorem (`02.21.03`) and the energy-critical theorems (`02.21.04`), with the `Definition (scattering)` made explicit in `02.21.04`. The stationary/spectral wave-operator viewpoint lives separately in QM `12.08.01`. No theorem-level scattering result is absent at curriculum altitude.
- **Profile decomposition (Bahouri–Gérard / linear-flow bubble extraction)** — stated inside the Kenig–Merle theorem (`02.21.04`). The standalone profile-decomposition lemma is research-monograph apparatus the first audit deferred; its *use* is captured. Not a gap.
- **Interaction Morawetz / Morawetz inequalities as standalone estimates** — stated inside the CKSTT/Kenig–Merle theorems (`02.21.04`); the local virial monotonicity is in `02.21.06`. Gronwall-type a-priori machinery exists corpus-wide. Not a gap.
- **Finite propagation speed / domain of dependence for NLW** — classical hyperbolic theory, COVERED `02.13.04`; correctly not re-derived in the dispersive chapter. Not a gap.
- **Local smoothing / Kato smoothing / Carleson pointwise-convergence maximal estimates** — Tao mentions local smoothing only in passing; `02.21.01`'s synthesis flags it as adjacent. Carleson's a.e.-convergence theorem is COVERED in Fourier-series `02.10.01`. The Schrödinger-maximal/Carleson-problem circle is a separate research program, not a Tao headline. Not a gap.
- **Galilean / scaling / pseudoconformal symmetry group as a unit** — the load-bearing symmetry (pseudoconformal) is developed in `02.21.06`; scaling drives `02.21.03`. No separate symmetry unit is warranted.

---

## DRY?

**DRY — verdict: yes, dry. 0 new gaps.** The shipped `02.21.*` chapter covers every Tao headline
theorem/estimate at appropriate curriculum altitude and additionally absorbs (at survey/statement
level) the KdV bilinear estimate, periodic $L^4$, $I$-method, Kenig–Merle, interaction-Morawetz, and
GSS spectral non-degeneracy that the first audit had deferred as OUT OF SCOPE. The remaining
unstated apparatus (full concentration-compactness bookkeeping, complete linearized-operator
spectral analysis, Schrödinger-maximal/Carleson program) is research-monograph depth correctly left
out. No still-absent headline theorem of real curriculum value remains.
