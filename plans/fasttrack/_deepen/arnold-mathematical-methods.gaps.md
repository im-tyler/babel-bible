# Arnold — *Mathematical Methods of Classical Mechanics* — deepening gap file (Phase 2)

**Slug:** `arnold-mathematical-methods`
**Re-audited against:** live corpus (1319 units; symplectic `05-*` = 88 units + `09-classical-mech` = 17 units).
**Verdict:** the first-pass audit (`plans/fasttrack/arnold-mathematical-methods.md`, written against a 235-unit corpus) is now **essentially fully delivered**. Every priority-1 and priority-2 punch-list item, plus most priority-3/4 items, has shipped — the entire proposed `05.00-lagrangian-mechanics/` chapter, the `05.09-*` perturbation chapter (KAM, adiabatic, Birkhoff, Williamson, Euler-Arnold, Nekhoroshev), and the Hamilton-Jacobi / Liouville-volume / Poincaré-recurrence / Poincaré-Cartan extensions all exist. There is in addition a redundant classical-mechanics treatment in `09-classical-mech/`.

After heavy grepping, **1 genuine gap** remains: Hamiltonian monodromy (the global obstruction to action-angle coordinates), which is *mentioned* in one synthesis clause of `05.02.04` but never stated or proved anywhere. Everything else the brief flagged as a "likely gap" — KAM, adiabatic invariants/averaging, Arnold diffusion, Arnold-Liouville, generating functions, etc. — is COVERED, with ids below.

---

## Genuine gaps (1)

### GAP 1 — Hamiltonian monodromy and the obstruction to global action-angle coordinates

- **id:** `05.02.12` (FREE — `05.02.*` occupied through `05.02.11-maupertuis-principle.md`; `05.02.12` unused)
- **title:** Hamiltonian monodromy and the spherical pendulum
- **spec:** The Arnold-Liouville theorem builds action-angle coordinates only *locally*; global integration is obstructed by the monodromy of the torus bundle over the regular-value set when singular fibres are present. State Duistermaat's 1980 result: for an integrable system with a focus-focus singular fibre, parallel transport of a homology basis of the Liouville torus around a loop enclosing the singular value returns a non-trivial matrix in $SL(n,\mathbb{Z})$ (the monodromy), so no globally single-valued action variables exist. Worked example: the spherical pendulum (Duistermaat's original), with the $\begin{psmallmatrix}1&1\\0&1\end{psmallmatrix}$ monodromy around the unstable equilibrium; the "champagne-bottle" / focus-focus model. This is the precise statement of the obstruction that `05.02.04`'s synthesis only gestures at ("the torus bundle over the action space may have singular fibres").
- **prereqs (verified exist):** `05.02.04` action-angle-coordinates (Arnold-Liouville, proved); `05.02.03` integrable-system; `05.02.05` cotangent-bundle.
- **chapter dir:** `content/05-symplectic/hamiltonian/`
- **frontmatter:** chapter `05`, section `05.02` (hamiltonian) — same section as the action-angle unit it completes.
- **originator/anchors:** Duistermaat 1980 *On global action-angle coordinates* (Comm. Pure Appl. Math. 33) — originator, mandatory; Nekhoroshev 1972 (local action-angle); Cushman-Bates *Global Aspects of Classical Integrable Systems*; Arnold §49-§50 (local theorem this globalises).
- **why genuine, not marginal:** load-bearing for the integrable-systems strand — it is the exact mathematical content `05.02.04` defers, it is the standard "global Arnold-Liouville" follow-up, and it bridges to the SYZ / torus-fibration material in `04.12-tropical/` (which discusses focus-focus and monodromy from the mirror-symmetry side but never states the mechanics theorem). Single well-defined theorem with a canonical worked example; not a manufactured unit.

---

## COVERED (not gaps) — due-diligence evidence

Every item below was a "to write" entry in the first-pass audit's §3 punch-list or a brief-flagged candidate. All are now present, most at master depth.

### Lagrangian foundation (audit's proposed `05.00-*` chapter — fully built)
- Lagrangian on the tangent bundle $L:TM\to\mathbb{R}$ — **COVERED** `05.00.01-lagrangian-on-tm`.
- Hamilton's principle of least action — **COVERED** `05.00.02-hamilton-principle`; also `09.02.01-action-principle-variational-calculus`.
- Legendre transform / fibre derivative $TM\to T^*M$ — **COVERED** `05.00.03-legendre-transform`; also `09.04.01-legendre-transform-lagrangian-to-hamiltonian`.
- Noether's theorem — **COVERED** `05.00.04-noether-theorem`; also `09.03.01-noethers-theorem`; Noether's *second* theorem `05.05.08-noethers-second-theorem-and-the-bianchi-identity`.
- Euler-Lagrange equations — **COVERED** `09.02.02-euler-lagrange-equations` + `03.04.08` variational-calculus.
- Galilean group / Newtonian setup — **COVERED** `05.00.06-galilean-newtonian-setup`, `05.00.07-galilei-bargmann-central-extension`; Newtonian chapter `09.01.01-04`.
- Mechanical similarity / virial theorem — **COVERED** `05.00.08-mechanical-similarity-virial-theorem`.
- Worked Lagrangian examples (oscillator, Kepler, rigid body) — **COVERED** `05.00.09-worked-lagrangian-examples`.
- Scattering / Rutherford — **COVERED** `05.00.10-scattering-rutherford`; `09.01.04-two-body-kepler-rutherford`.
- Small oscillations / normal modes — **COVERED** `05.00.11-small-oscillations-normal-modes`.
- Non-inertial frames / Coriolis — **COVERED** `05.00.14-non-inertial-frame-coriolis`.

### Hamiltonian core (audit's `05.02-*` extensions — fully built)
- Hamiltonian vector field $\iota_{X_H}\omega=dH$ — **COVERED** `05.02.01-hamiltonian-vector-field`.
- Poisson bracket / Jacobi identity — **COVERED** `05.02.02-poisson-bracket`.
- Integrable system (Liouville) — **COVERED** `05.02.03-integrable-system`.
- **Arnold-Liouville theorem** (compact connected level set ⇒ $n$-torus; local action-angle) — **COVERED, FULLY PROVED** `05.02.04-action-angle-coordinates` (theorem stated and proved in three steps, lines 140-167).
- Cotangent bundle / Liouville form — **COVERED** `05.02.05-cotangent-bundle`.
- Geodesic flow as Hamiltonian flow — **COVERED** `05.02.06-geodesic-flow-hamiltonian`.
- Liouville's theorem (phase-volume preservation) — **COVERED** `05.02.07-liouville-volume`.
- Poincaré recurrence — **COVERED** `05.02.08-poincare-recurrence`.
- Integral invariants of Poincaré-Cartan — **COVERED** `05.02.09-poincare-cartan-invariants`.
- Routhian (cyclic-coordinate reduction) — **COVERED** `05.02.10-routhian`.
- Maupertuis principle — **COVERED** `05.02.11-maupertuis-principle`.

### Canonical transformations / Hamilton-Jacobi
- Canonical transformations & generating functions — **COVERED** `05.05.03-generating-functions`; `09.05.01-canonical-transformations`.
- **Hamilton-Jacobi equation** $\partial_t S + H(q,\partial_q S,t)=0$, complete integrals, separation of variables — **COVERED** `05.05.04-hamilton-jacobi`; `09.05.02-hamilton-jacobi-equation`; WKB bridge `12.07.04-wkb-and-bohr-sommerfeld`.

### Perturbation / KAM block (audit's `05.09-*` chapter — fully built)
- **KAM theorem** (Kolmogorov-Arnold-Moser; Diophantine condition, Newton iteration, small-divisor bounds, positive-measure surviving tori) — **COVERED, APEX UNIT SHIPPED** `05.09.01-kam-theorem`; also `09.08.01-kam-theorem-and-chaos`.
- **Adiabatic invariants** + **averaging principle** (one-frequency averaging, Neishtadt exponential precision, Kapitza pendulum) — **COVERED** `05.09.02-adiabatic-invariants` (averaging principle stated and applied here — no separate "averaging" unit needed); exponential-accuracy companion `05.09.07-exponential-accuracy-adiabatic`.
- Birkhoff normal form / perturbation theory / Lindstedt — **COVERED** `05.09.03-birkhoff-normal-form` (Lindstedt also `02.12.14`).
- Williamson's normal form (quadratic Hamiltonians) — **COVERED** `05.09.04-williamson-normal-form`.
- Euler-Arnold equations; geodesics on Lie groups; ideal fluid as geodesic on $\mathrm{Diff}_{\mathrm{vol}}$; rigid body / Euler top / heavy top / stability of axes — **COVERED** `05.09.05-euler-arnold-equations` (incl. Manakov SO(n) integrability, semidirect-product heavy top).
- **Nekhoroshev estimates** AND **Arnold diffusion** (heteroclinic chains of whiskered tori, Mather variational proof, open conjecture) — **COVERED** `05.09.06-nekhoroshev` (Arnold diffusion treated at master depth here and in `05.09.01`; resonances / small denominators throughout). No separate Arnold-diffusion unit warranted.
- Integrable-hierarchy extensions (infinite-dim Poisson, finite-gap, KP/Sato, master symmetries, Casimirs) — **COVERED** `05.09.08`–`05.09.12`.

### Symplectic-linear / Darboux / contact (audit Part III + Appendix 4)
- Symplectic vector space / group / manifold — **COVERED** `05.01.01`, `05.01.03`, `05.01.02`.
- Darboux theorem + Moser trick — **COVERED** `05.01.04-darboux-theorem`, `05.01.05-moser-trick`.
- Contact structures / symplectisation (App. 4) — **COVERED** `05.10.01-contact-manifold`, `05.10.02-symplectisation`, `05.10.03-gray-theorem`.

### Moment map / reduction (Appendix 5)
- Moment map; symplectic reduction; convexity; Delzant; Duistermaat-Heckman — **COVERED** `05.04.01`–`05.04.05`; coadjoint orbits `05.03.01-03`.

### Pointer / remark-level material (no equivalence-coverage required)
- Arnold conjecture / Floer — **COVERED** `05.08.01-arnold-conjecture`, `05.08.02-floer-homology`, Maslov `05.12.01`, `05.08.03`.
- Gromov non-squeezing / symplectic capacity — **COVERED** `05.07.01-non-squeezing`, `05.07.02-symplectic-capacity`.
- Riemannian curvature (App. 1) — **COVERED** `03-modern-geometry/*` curvature units.

---

## Report

- **Genuine gaps:** 1 (`05.02.12` Hamiltonian monodromy / spherical pendulum).
- **COVERED-verified topics:** 40+ distinct topics confirmed present (every audit punch-list item 1-21 and every brief-flagged candidate), with ids.
- **Conclusion:** Arnold is at or above the ≥95% effective-coverage threshold; the original §3 punch-list is closed. The single remaining gap is the *global* refinement of the (already-proved) Arnold-Liouville theorem.
