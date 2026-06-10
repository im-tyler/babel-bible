# Deepening gaps — Penrose & Rindler, *Spinors and Space-Time, Vol. 1: Two-Spinor Calculus and Relativistic Fields* (Fast Track 3.36)

First audit (no prior). Method: built the headline-construction list for Vol. 1, grep-verified each against the live corpus (`content/03-modern-geometry/09-spin-geometry/`, `content/03-differential-geometry/02-manifolds/`, `content/13-gr-cosmology/`, `content/12-quantum/`, `content/07-representation-theory/`) before calling anything a gap. Default was COVERED; only genuinely absent theorem-level material is proposed below.

Headline finding: the book is **near-fully covered at the level of its individual payoffs** — the SL(2,C)↔SO⁺(3,1) double cover, the (j₁,j₂) decomposition, the van der Waerden ε/dotted-undotted index calculus, the Weyl-spinor factorisation, the Petrov classification, principal null directions, Goldberg-Sachs, peeling, and the massless-field/helicity dictionary all appear. The genuine residual gaps are **the unifying apparatus presented "as such"**: (1) the abstract two-spinor calculus with the full spinor↔tensor dictionary, (2) the zero-rest-mass spin-s field equations as a single result subsuming Maxwell/Weyl/Dirac in spinor form, and (3) the Newman-Penrose spin-coefficient formalism, which is invoked by name in the Petrov unit but never built. These are the three things a reader of Vol. 1 would expect as standalone foundations.

---

## GENUINE GAPS (3)

### Gap 1 — The two-spinor calculus and the spinor–tensor dictionary

- **proposed id:** `48.02.41`
- **title:** The two-spinor calculus: $\varepsilon$-spinors, abstract indices, and the spinor–tensor dictionary
- **spec:** Build SL(2,C) two-spinor space with the symplectic $\varepsilon_{AB}$ metric (raising/lowering, $\xi^A\xi_A=0$), the complex-conjugate primed space, the soldering form $\sigma^a{}_{AA'}$ realising the real isomorphism $T_p M_{\mathbb C}\cong \mathbb S\otimes\bar{\mathbb S}$ ($V^a\leftrightarrow V^{AA'}$), and the symmetric-spinor decomposition of an arbitrary spinor into totally symmetric parts times $\varepsilon$'s; prove the spinor↔tensor dictionary (a real null vector is $\xi^A\bar\xi^{A'}$, an antisymmetric 2-form $F_{ab}=\phi_{AB}\varepsilon_{A'B'}+\bar\phi_{A'B'}\varepsilon_{AB}$) in Penrose's abstract-index notation.
- **prereqs:** `07.07.09` (SL(2,C)→SO⁺(3,1) double cover, X↦AXA†, the (j₁,j₂) reps), `03.09.05` (spinor bundle), `13.02.03` (Cartan tetrad / spin connection — the frame the soldering form lives on)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **why a gap:** The double cover and the Pauli identification $X=x^\mu\sigma_\mu$ are in `07.07.09`; the van der Waerden ε/dotted-undotted conventions appear as a single callout box inside the SUSY unit `12.19.01`; the Weyl-spinor factorisation appears inside the Petrov unit `48.02.18`. But **no unit establishes the calculus itself** — the $\varepsilon$-spinor as the fundamental object, the general $V^a\leftrightarrow V^{AA'}$ soldering, and the symmetric-spinor decomposition theorem (every spinor = sum of symmetrised parts) that is the engine of the entire book. This is the central Vol. 1 apparatus (Penrose-Rindler Vol. 1, Chs. 2–3).

### Gap 2 — Zero-rest-mass field equations and the spinor form of Maxwell/Weyl/Dirac

- **proposed id:** `48.02.42`
- **title:** Zero-rest-mass field equations and the spinor form of Maxwell, Weyl, and Dirac fields
- **spec:** State the spin-$s$ zero-rest-mass field equation $\nabla^{A A'}\phi_{AB\cdots L}=0$ for a totally symmetric spinor field $\phi_{AB\cdots L}$ ($2s$ indices); recover (a) the source-free Maxwell equations as the $s=1$ case via the Maxwell spinor $\phi_{AB}=\phi_{(AB)}$ with $F_{ab}=\phi_{AB}\varepsilon_{A'B'}+\text{c.c.}$, (b) the Weyl neutrino equation $\nabla^{AA'}\phi_A=0$ as $s=\tfrac12$, (c) the massive Dirac equation as the coupled pair $\nabla^{AA'}\phi_A=\mu\,\chi^{A'}$, $\nabla_{AA'}\chi^{A'}=\mu\,\phi_A$; classify by helicity and state the curved-space consistency (Buchdahl) condition for $s>1$.
- **prereqs:** `48.02.41` (the two-spinor calculus / dictionary — Gap 1), `12.11.01` (Dirac equation, 4-spinor/chiral form), `12.05.06` (free Maxwell / massive vector field)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **why a gap:** Massless helicity-$n/2$ fields appear as the *output* of the Penrose transform in `03.07.14`, and the Weyl equation appears in 4-component/chiral form in `12.11.01` and `12.19.01`. But the **unifying spin-$s$ equation $\nabla^{AA'}\phi_{AB\cdots L}=0$ as a single object, the Maxwell spinor $\phi_{AB}$, and the Dirac equation written as a coupled primed/unprimed spinor pair** are nowhere stated. This is the "Relativistic Fields" half of the book's title (Penrose-Rindler Vol. 1, Ch. 5) and the natural payoff of Gap 1.

### Gap 3 — The Newman-Penrose spin-coefficient formalism

- **proposed id:** `48.02.43`
- **title:** The Newman-Penrose spin-coefficient formalism
- **spec:** Fix a null tetrad $(\ell^a,n^a,m^a,\bar m^a)$ adapted to a spin frame $(o^A,\iota^A)$; define the twelve complex spin coefficients ($\kappa,\sigma,\rho,\tau,\nu,\lambda,\mu,\pi,\epsilon,\gamma,\beta,\alpha$) as the components of the spinor connection, the four directional derivatives $D,\Delta,\delta,\bar\delta$, the five Weyl scalars $\Psi_0\ldots\Psi_4$ and Ricci scalars $\Phi_{ij},\Lambda$; state the NP equations (Ricci/spin-coefficient + Bianchi) and read off the optical scalars (expansion $\rho$, shear $\sigma$, twist) of a null congruence.
- **prereqs:** `48.02.41` (two-spinor calculus — Gap 1), `13.02.03` (tetrad / spin connection), `48.02.18` (Petrov classification — the $\Psi_n$ and Goldberg-Sachs statement that this formalism makes computational)
- **chapter dir:** `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **why a gap:** "Newman-Penrose" / "spin coefficient" greps return only the Petrov unit `48.02.18`, which *names* the NP scalars $\Psi_0\ldots\Psi_4$ and uses $\kappa=\sigma=0$ in its Goldberg-Sachs statement but **never defines the formalism** — no null tetrad, no twelve spin coefficients, no directional derivatives, no NP equations. The optical scalars (expansion/shear/twist) likewise appear only by allusion. This is the standard computational engine of relativity (Penrose-Rindler Vol. 1, Ch. 4 §4.5; Newman-Penrose 1962) and is currently a named-but-undefined dependency.

---

## COVERED (not gaps) — due-diligence evidence

- **SL(2,C) ↔ SO⁺(3,1) double cover** (X↦AXA† on Hermitian matrices, kernel ±I, two-to-one universal cover) — `07.07.09` (full proposition + proof).
- **Pauli identification of Minkowski space with Hermitian 2×2 matrices** ($X=x^\mu\sigma_\mu$, $\det X=$ Minkowski norm) — `07.07.09`.
- **(j₁,j₂) finite-dim reps; Weyl spinors $(\tfrac12,0)/(0,\tfrac12)$; four-vector $(\tfrac12,\tfrac12)$; $\mathfrak{so}(1,3)_{\mathbb C}\cong\mathfrak{sl}(2)\oplus\mathfrak{sl}(2)$; non-unitarity of finite-dim reps** — `07.07.09`.
- **van der Waerden dotted/undotted index calculus, ε raising/lowering with conventions, σ^μ intertwiner = four-vector** — established in a callout box in `12.19.01` (SUSY algebra) and used throughout `12.19.02`; conjugation $(\tfrac12,0)\leftrightarrow(0,\tfrac12)$ in `07.07.09`. (Gap 1 still stands: these are physics-side fragments, not the geometric two-spinor calculus "as such," but the index bookkeeping itself is covered.)
- **Petrov classification of the Weyl tensor (types I, II, D, III, N, O); self-dual Weyl operator as symmetric trace-free 3×3 complex matrix; invariants I, J, speciality $I^3=27J^2$** — `48.02.18` (full theorem + proof + Segre/Jordan dictionary).
- **Weyl spinor $\Psi_{ABCD}=\Psi_{(ABCD)}$ and its factorisation into four principal spinors $\alpha_{(A}\beta_B\gamma_C\delta_{D)}$** — `48.02.18` (key theorem, proof via the quartic $P(z)$).
- **Principal null directions and their multiplicity structure** — `48.02.18` (formal definition + worked Schwarzschild/Kerr/pp-wave cases).
- **Goldberg-Sachs theorem** (vacuum algebraically special ⇔ shear-free null geodesic congruence) — `48.02.18` (Master, Advanced results).
- **Peeling theorem** ($\Psi_n\sim 1/r,\,1/r^2,\dots$, type N→III→II→I along outgoing null rays) — `48.02.18` (Master).
- **Bel-Robinson tensor / gravitoelectric-gravitomagnetic split** — `48.02.18` (Master).
- **Weyl tensor and conformally flat metrics (type O)** — `48.02.16`.
- **Dirac equation; chiral projectors $P_{L,R}$; massless decoupling into Weyl equations; $(\tfrac12,0)\oplus(0,\tfrac12)$ structure of the Dirac spinor** — `12.11.01` (4-component/chiral form).
- **Spin-½ coupling to gravity requires the tetrad; spinor covariant derivative $D_\mu=\partial_\mu+\tfrac14\omega_{\mu ab}\gamma^{ab}$; Spin(1,3) as double cover of SO(1,3)↑** — `13.02.03` (Cartan tetrad / spin connection).
- **Spin group, spinor bundle, spin structure, Clifford algebra (general-dimension machinery)** — `03.09.02`–`03.09.05`.
- **Zero-rest-mass fields as helicity-$n/2$ outputs of the twistor contour integral; spinor-helicity** — `03.07.14` (Penrose transform at linear level), `03.07.11` (Ward correspondence). (Gap 2 still stands: the field equations themselves, the Maxwell spinor, and the spinor Dirac pair are not stated as primary objects.)
- **Penrose diagrams / null infinity $\mathscr I^\pm$ (Schwarzschild, Kerr)** — `13.06.01` (Penrose conformal diagram), `13.09.01` (conformal boundary of AdS, global hyperbolicity).
- **Geodesic deviation / focusing / optical-scalar allusions** — `13.02.02`, `13.03.01`, `48.02.19` (Jacobi fields). (The full NP optical-scalar machinery is Gap 3.)
- **Wigner classification of Poincaré irreps (mass/helicity labels for relativistic fields)** — `07.07.06`.

---

## OUT OF SCOPE (2)

- **Twistor space and the full twistor programme of Vol. 1's sequel.** Twistors are the subject of Vol. 2, not Vol. 1; and the corpus already has `03.07.11` (twistor space + Ward) and `03.07.14` (Penrose transform). No residual gap for this volume.
- **The conformal-rescaling / asymptotic-simplicity apparatus ($\tilde g=\Omega^2 g$ attaching $\mathscr I$, conformal Killing spinors, the Vol. 1 §6 conformal machinery as a 60-page technical layer).** This is primarily a Vol. 2 (asymptotics, Bondi-Sachs) payoff; the corpus covers conformal flatness (`48.02.16`), the conformal Laplacian/Yamabe (`48.02.33`), and uses Penrose diagrams already. Building a standalone conformal-rescaling unit would be a thin, mostly-definitional addition with its theorem-level payoff (peeling, BMS) deferred to Vol. 2 — not worth a unit for Vol. 1 alone.

---

## Counts

- **Genuine gaps:** 3 (`48.02.41`, `48.02.42`, `48.02.43`)
- **Covered topics logged:** 18
- **Out-of-scope items:** 2
