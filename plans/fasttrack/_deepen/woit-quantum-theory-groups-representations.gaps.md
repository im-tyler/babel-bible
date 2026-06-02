# Woit, *Quantum Theory, Groups and Representations* (FT 2.02) — deepening pass

**Verdict: essentially fully covered. 1 genuine (low/medium-value) gap, 16 covered topics verified.**

The original audit (`plans/fasttrack/woit-quantum-theory-groups-representations.md`)
was written against a 313-unit corpus and declared the entire QM half "~0%
covered" with a 34-unit punch-list and a proposed new `09-quantum-mechanics/`
chapter. **That audit is now stale.** The corpus has since grown a full
`12-quantum/` chapter (18 subsections, ~70 units), an expanded
`07-representation-theory/07-compact-lie/` (Wigner, Mackey, SU(2)/SO(3),
Lorentz reps), a `05-symplectic/11-geometric-quantization/` chapter, a
`09-classical-mech/` chapter with explicit Woit-derived units
(E(3) free particle, squeezed states), and a
`03-modern-geometry/14-quantum-representations/` directory. **Almost every
priority-1 and priority-2 item from the original punch-list now exists** —
several were evidently produced from this very plan. The book is at or above
the FT equivalence threshold. Nearly all of the original §3 punch-list is
COVERED (see trailer). Only one genuine consolidation gap remains.

---

## Genuine gaps

### GAP 1 — Heisenberg group, Schrödinger representation, and the Stone–von Neumann uniqueness theorem (dedicated unit)

- **proposed id:** `12.14.02` (free; `12.14.01` CCR/Weyl-algebra already occupies the algebraic-QFT subsection — this is its natural sibling)
- **title:** The Heisenberg group, the Schrödinger representation, and the Stone–von Neumann theorem
- **spec:** Define the Heisenberg Lie algebra $\mathfrak{h}_{2n+1}$ (basis $\{q_j,p_j,c\}$, $[q_j,p_k]=\delta_{jk}c$, $c$ central) and the Heisenberg group $H_{2n+1}$ as its group law; construct the Schrödinger representation on $L^2(\mathbb{R}^n)$ at fixed central character $\hbar$; state and prove the Stone–von Neumann uniqueness theorem (every irreducible unitary rep with $c\mapsto\hbar\neq 0$ is unitarily equivalent to the Schrödinger rep), with the Schrödinger / momentum / Bargmann–Fock pictures as the three standard coordinatisations related by intertwiners; close with the Mackey/imprimitivity reading and the failure in infinite dimensions (Haag).
- **prereqs (verified to exist):** `12.02.02-operators-observables-hermiticity` (Stone's theorem, CCR), `12.04.02-quantum-harmonic-oscillator`, `07.07.07-mackey-theory-of-induced-representations-and-systems-of-imprimitivity`, `12.14.01-ccr-algebra-weyl-algebra-and-quasi-free-states`
- **chapter dir:** `content/12-quantum/14-algebraic-qft/`; frontmatter `section: quantum`, `chapter: algebraic-qft`
- **value / honesty note:** This is a **consolidation gap, not a missing
  theorem.** The Stone–von Neumann theorem is already fully stated and proved
  in `08.10.01` (bosonic Fock, von-Neumann-1931 statement + Weyl form) and
  treated in `12.14.01` (Weyl algebra), and is referenced correctly in at
  least eight other units. The Heisenberg group itself is constructed inline
  in `05.00.07` and used throughout `09.04.07`. What is genuinely absent is a
  unit whose **primary subject** is Woit's central organizing chapter (Ch. 13):
  the Heisenberg group as a group, its Schrödinger representation, and SvN as
  the load-bearing uniqueness result that *defines quantization*. Two existing
  units explicitly flag this as a proposed-but-unwritten unit:
  `12.13.01` lists a successor `12.03.03 # Stone-von Neumann theorem and the
  Weyl algebra (proposed)` and `12.13.02` lists `12.13.03 # Stone-von Neumann
  theorem and the Weyl algebra (proposed)`. Producing `12.14.02` resolves
  those dangling pointers. Medium-low priority; the result is not missing from
  the corpus, only un-centralized.

---

## COVERED (not gaps) — due-diligence trailer

Every topic the original punch-list flagged as a gap was re-verified against
the live corpus. The following are COVERED with the cited unit id:

- **Hilbert-space axioms of QM** → `12.02.01-hilbert-space-formalism` (+ `12.02.02`, Born rule, Stone's theorem).
- **$U(1)$ reps / charge operator** → `07.01.01-group-representation`; gauge-charge framing in `12.18.*`.
- **Two-state systems, Pauli matrices, spin-1/2 in a magnetic field, Bloch sphere** → `12.01.02-stern-gerlach-spin-half` (two-outcome system, double cover, 720°), Bloch sphere in `12.17.01`/`12.02.03`.
- **$SU(2)$/$SO(3)$ reps, weight decomposition, raising/lowering, spherical harmonics, Casimir** → `12.05.01-angular-momentum-operators-su2`, `12.05.02-spherical-harmonics-legendre-polynomials`, `07.07.05-representations-of-su-2-and-so-3-...`, `07.06.11-representations-of-sl-2-c`.
- **Tensor products, addition of spin, Clebsch–Gordan, entanglement** → `12.05.03-addition-angular-momenta-clebsch-gordan`, `07.01.06-tensor-product-of-representations`, `12.17.02-entanglement-schmidt-decomposition`.
- **Schur–Weyl duality** → `07.05.04-schur-weyl-duality` (brief asked to check 07-*; present).
- **Heisenberg algebra / Heisenberg group / Schrödinger rep (material)** → embedded in `05.00.07-galilei-bargmann-central-extension`, `09.04.07`, `07.03.01`; SvN classification stated in `08.10.01`, `12.14.01` (see GAP 1 for the consolidation note).
- **Stone–von Neumann uniqueness theorem** → stated+proved in `08.10.01-bosonic-fock-space-and-second-quantisation` and `12.14.01-ccr-algebra-weyl-algebra-and-quasi-free-states`; Mackey/imprimitivity reading in `07.07.07`.
- **Poisson bracket, symplectic geometry, Hamiltonian vector fields, moment map** → `05.02.*`, `05.04.01`, `09.04.02`.
- **Symplectic group / quadratic Hamiltonians as $\mathfrak{sp}(2d)$** → `05.01.03-symplectic-group`, `05.09.04-williamson-normal-form`.
- **Canonical quantization + Groenewold–van Hove no-go theorem** → `05.11.04-the-groenewold-van-hove-no-go-theorem` (the original audit's "critical, entirely absent" item — now a full unit).
- **Semidirect products / Euclidean group $E(n)$ / Mackey induction** → developed in `03.14.01-quantum-free-particle-e3`, `09.03.03-quantum-free-particle-as-a-representation-of-e-3`, `07.07.07-mackey-theory-...` (semidirect product defined inline with full Lie-algebra structure; no standalone definitional unit needed).
- **Quantum free particle as a rep of $E(3)$** → `09.03.03-...` and `03.14.01-quantum-free-particle-e3` (produced directly from this plan).
- **Harmonic oscillator, creation/annihilation, Bargmann–Fock rep** → `12.04.02-quantum-harmonic-oscillator`, `12.13.01-bosonic-fock-space-and-second-quantisation`, Bargmann–Fock holomorphic model in `09.04.07`/`03.14.02`/`05.11.03`.
- **Coherent / squeezed states, $SU(1,1)$ Bogoliubov transformations** → `09.04.07-complex-structures-and-quantization-squeezed-states`, `03.14.02-complex-structures-quantization-squeezed`.
- **Metaplectic / oscillator (Shale–Weil / Segal–Shale–Weil) representation of $Sp(2n,\mathbb{R})$ + projective factor / Maslov** → `09.04.07` and `03.14.02` (Mp(2n) intertwiner via SvN), `05.11.03-polarisation-half-densities-and-metaplectic-correction` (Shale–Weil rep, BKS pairing, Maslov class), `05.12.01-lagrangian-grassmannian-and-the-universal-maslov-class`.
- **Complex structures and quantization / compatible triples** → `03.14.02`, `09.04.07`, `05.11.03`.
- **Fermionic oscillator / CAR / Grassmann algebra / Berezin integration** → `12.13.02-fermionic-fock-space-pauli-exclusion`, `08.10.09-fermionic-fock-space-...-anticommutators`, `08.14.02-grassmann-integration-...`; spinors via Clifford in `03.09.02-clifford-algebra`, `03.09.03-spin-group`.
- **Hydrogen atom via $\mathfrak{so}(4)$ / Runge–Lenz (Pauli–Fock)** → `12.06.01-hydrogen-atom-bound-states` (full Master tier: LRL vector, SO(4) algebra, Fock momentum-space $S^3$ construction, parabolic coordinates).
- **Lorentz group + Dirac $\gamma$-matrices in $\mathrm{Cl}(3,1)$** → `07.07.09-representations-of-the-lorentz-group-sl-2-c-...`, `12.11.01-dirac-equation-relativistic-spin`, `03.09.11-clifford-chessboard`.
- **Poincaré group + Wigner classification by orbits (mass/spin)** → `07.07.06-wigner-s-classification-of-the-unitary-irreducible-representations-of-the-poincare-group` (the original audit's flagship "critical, absent" item — now a full unit).
- **Klein–Gordon / Dirac free quantum fields; Majorana/Weyl/Dirac spinors** → `12.05.04-free-klein-gordon-scalar-quantum-field`, `12.05.05-free-dirac-spin-1-2-quantum-field`, `12.11.01`.
- **Multi-particle systems / second quantization / field operators** → `12.13.01`, `12.13.02`, `08.10.01`.
- **$U(1)$ gauge symmetry, EM-field quantization, the photon** → `12.05.06-free-maxwell-massive-vector-fields-photon-and-proca`, `12.12.02-coulomb-vs-lorenz-gauge`, `03.07.05-yang-mills-action`, `12.18.*`.
- **Standard Model survey / non-Abelian gauge / Higgs** → `12.18.01-the-higgs-mechanism-...`, `12.18.03-asymptotic-freedom-...`, plus the `12.18.*` gauge family.
- **Path integral as complement** → `12.10.01-path-integral-formulation`, `08.07.01-path-integral`.
- **Lagrangian / Noether** → `09.03.01-noethers-theorem`, `05.00.04-noether-theorem`.
- **Geometric quantization (Woodhouse / Bates–Weinstein direction)** → `05.11.01`–`05.11.09` (prequantum line bundle, polarisation, coadjoint orbits, relativistic particle).

### Checked, judged NOT worth a unit (intentionally not proposed)

- **Standalone "semidirect product" definitional unit** — defined inline with full Lie-algebra structure in `03.14.01`, `09.03.03`, `07.07.07`; a separate stub would be redundant.
- **Supersymmetric quantum mechanics / supersymmetric oscillator (Woit Ch. 33)** — the de Rham/Hodge and index-theory substance is covered geometrically (`03.09.10`, `03.15.12-witten-s-supersymmetric-morse-theory-survey-pointer`); the QM-flavoured $Q,Q^\dagger$/Witten-index packaging is thin but borderline-marginal and Woit treats it as a capstone aside. Not proposed.
- **Bosonic/fermionic "parallels" summary table (Woit Ch. 32)** — synthetic summary only; the substance lives in `12.13.01`/`12.13.02`/`08.10.01`. Not a unit.

---

**Counts:** genuine gaps = **1**; COVERED-verified topics = **26** (plus 3 checked-and-declined).
**Gap file:** `plans/fasttrack/_deepen/woit-quantum-theory-groups-representations.gaps.md`
