# Skipped Units — T1-Only Backlog

**Purpose:** persistent record of FT units that a non-frontier producer (T2 / T3) deliberately skipped per `docs/plans/AGENT_PRODUCTION_PLAYBOOK.md` §18.2 capability triage. This is the canonical backlog of units waiting for a T1-class (Claude Opus, GPT-5, Gemini Pro tier) producer or human-expert curation.

**Append-only.** When a future orchestrator session produces a previously-skipped unit, strike it through and append `**PRODUCED <date> by <model> at <validator score>**` rather than deleting the line. Preserve the audit trail.

**Producer agents:** append your skip entries here per playbook §18.4. Format below.

**Orchestrator sessions:** read this file at the start of every cycle. Prioritise T1-only backlog over default queue when a T1 producer is available (per §18.4a).

---

## Skip-entry format

```markdown
## YYYY-MM-DD — <producer tier> session (<model name>)

- **<unit-id>**: <unit title>. Reason: <cluster reference + specific concern>.
```

---

<!-- Append session entries below this line. -->

## 2026-05-18 — T2 session (GLM 5.1)

- ~~**03.06.07**: Chern-Simons / transgression form. Reason: characteristic-classes cluster flagged §18.2 skip (Brylinski gerbe/Chern-Weil advanced); reassign to T1 producer.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 at 27/27 (Cycle 5 math T1, characteristic-classes T1 cluster; transgression d-cocycle identity, gauge-variation integrality, TQFT pointer to Witten 1989; Lean stub at `lean/Codex/Modern/CharClasses/ChernSimonsTransgression.lean`).**
- ~~**03.06.10**: Stiefel-Whitney and Pontryagin numbers. Reason: characteristic-classes advanced; T2 cannot reliably reproduce Thom's bordism arguments.~~ — shipped 2026-05-20 (Cycle 5 math T1, Opus 4.7); 27/27.
- ~~**03.06.11**: Hirzebruch signature theorem (master-tier rewrite). Reason: characteristic-classes advanced; multiplicative-sequence proof requires T1.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 (Cycle 5 math T1, characteristic-classes cluster, Lean partial module `Codex.Modern.CharClasses.HirzebruchSignature`).**
- ~~**03.06.12**: Unoriented bordism and Thom's theorem. Reason: characteristic-classes advanced; bordism exact-sequence arguments.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 (Cycle 5 math T1, characteristic-classes cluster, ~6672 words, Lean partial module `Codex.Modern.CharClasses.UnorientedBordismThom`).**
- **03.06.13**: Oriented bordism and Pontryagin-Thom. Reason: characteristic-classes advanced; Pontryagin-Thom construction.
- ~~**03.06.14**: Steenrod squares and the Wu formula. Reason: characteristic-classes advanced.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 — closes Cycle-3 pending_approvals item Q (Milnor-Stasheff P0 cross-plan dependency).**
- **03.06.15**: Multiplicative sequences and the L-, A-, Todd genera. Reason: characteristic-classes advanced; Hirzebruch multiplicative-sequence proofs.
- **03.06.16**: Whitney duality and immersion obstructions. Reason: characteristic-classes advanced.
- **03.06.17**: Combinatorial Pontryagin classes and exotic 7-spheres. Reason: characteristic-classes advanced; Milnor exotic-sphere construction.
- ~~**03.06.18**: Chern character ch(E) as a ring homomorphism. Reason: characteristic-classes advanced.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 at 27/27 (Cycle 5 Track A math T1 frontier, characteristic-classes cluster).**
- **03.06.19**: Signature of a 4k-manifold and the intersection form. Reason: characteristic-classes advanced.
- **03.06.20**: Borel-Hirzebruch and the cohomology of G/T. Reason: characteristic-classes advanced.
- **03.06.23**: Modularity of the elliptic genus. Reason: characteristic-classes advanced; elliptic genus proofs.
- **03.06.24**: Bott-Taubes rigidity theorem. Reason: characteristic-classes advanced.
- **03.06.26**: Pointer: elliptic cohomology. Reason: characteristic-classes advanced; survey but anchored on frontier material.
- ~~**03.08.12**: KR-theory (K-theory with reality). Reason: K-theory cluster flagged §18.2 skip (Adams operations, Atiyah KR-theory); T2 cannot reliably reproduce splitting-principle arguments.~~ **PRODUCED 2026-05-19 by Claude Opus 4.7 at 27/27.**
- ~~**03.12.33**: Kan-Quillen model structure on sSet. Reason: homotopy model-category cluster flagged §18.2 skip; Goerss-Jardine rigor required.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 at 27/27 (Cycle 6 Track A math T1 frontier, homotopy advanced cluster).**
- ~~**03.12.35**: Simplicial model category and the function complex. Reason: homotopy model-category cluster flagged §18.2 skip.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 (Cycle 6 math T1 frontier, homotopy advanced cluster, ~11358 words; SM0/SM6/SM7 axioms; function-complex Kan-theorem (Quillen 1967 §II.2 Prop 3) via horn-filling + pushout-product; pullback-power dual on cotensor side; Map preserves weak equivalences in both variables via Ken Brown; π_n RMap(X,Y) ≅ [S^n ⊗ X, Y]; examples sSet / simplicial groups / Bousfield-Gugenheim cdga / Dold-Kan / symmetric spectra; relation to homotopy-coherent diagrams + Bergner-Joyal Quillen equivalence; Lean partial module `Codex.Modern.Homotopy.SimplicialModelCategory` stating SM7 + Kan-complex theorem with `sorry` proof bodies).**
- ~~**03.12.37**: Homotopy colimit (Bousfield-Kan construction). Reason: advanced homotopy; Bousfield-Kan construction is frontier.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 (Cycle 6 math T1 frontier, homotopy advanced cluster; Bousfield-Kan bar construction $B(*, I, X)$ + realisation formula + pushout-as-double-mapping-cylinder + sequential-hocolim-as-mapping-telescope + classifying-space-as-nerve + projective/Reedy model structures + homotopy left Kan extension + Bousfield-Friedlander diagonal lemma; Lean partial module `Codex.Modern.Homotopy.HomotopyColimitBK`).**
- ~~**03.12.38**: Bousfield-Kan spectral sequence. Reason: advanced homotopy; spectral-sequence arguments.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 (Cycle 6 math T1 frontier, homotopy advanced cluster; cosimplicial spaces + Tot + $E_2 = \pi^s \pi_t(X^{\bullet})$ + conditional convergence + Adams BK at ring spectra + chromatic specialisations; Lean partial module `Codex.Modern.Homotopy.BousfieldKanSpectralSequence`).**
- ~~**03.12.40**: Postnikov tower of a Kan complex. Reason: advanced homotopy; Postnikov-classification arguments.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 at 27/27.**
- ~~**03.12.45**: Arithmetic square and integral fracture theorems. Reason: advanced homotopy; fracture-theorem proofs.~~ **PRODUCED 2026-05-20 by Claude Opus 4.7 (1M context) at 27/27 (Cycle 6 math T1 frontier, homotopy advanced cluster; Bousfield-Kan p-completion + rationalisation + Sullivan arithmetic square as homotopy pullback + integral fracture theorem with Milnor short exact sequence and $\lim^1$ vanishing + sphere worked example + chromatic-fracture extension via Hovey-Strickland; Lean partial module `Codex.Modern.Homotopy.ArithmeticSquare`).**
- **03.12.48**: Bousfield localisation of a model category. Reason: advanced homotopy; model-category localisation.
- **04.05.10**: Hirzebruch-Riemann-Roch theorem (general dimension). Reason: surface/divisor cluster past basics flagged §18.2 skip; HRR proof requires T1.
- **04.05.11**: Worked Hirzebruch-Riemann-Roch computations. Reason: surface/divisor cluster past basics.
- **04.05.12**: Pointer: Grothendieck-Riemann-Roch (GRR). Reason: surface/divisor cluster past basics.
- **04.09.05**: d-bar-d-bar-lemma. Reason: Hodge/Voisin cluster flagged §18.2 skip.
- **04.09.07**: Hard Lefschetz theorem. Reason: Hodge/Voisin cluster flagged §18.2 skip.
- **04.09.08**: Hodge-Riemann bilinear relations. Reason: Hodge/Voisin cluster flagged §18.2 skip.
- **04.09.09**: Lefschetz (1,1)-theorem. Reason: Hodge/Voisin cluster flagged §18.2 skip.
- **04.09.10**: Akizuki-Nakano vanishing theorem. Reason: Hodge/Voisin cluster flagged §18.2 skip.
- **04.09.11**: Kodaira embedding theorem. Reason: Hodge/Voisin cluster flagged §18.2 skip.
- **04.10.03**: Hilbert-Mumford numerical criterion. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.04**: Kempf-Ness theorem and GIT-symplectic dictionary. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.05**: Hilbert scheme Hilb^P_X. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.06**: Moduli of vector bundles on a curve; slope stability. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.08**: Kirwan stratification of the unstable locus. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.09**: Variation of GIT (VGIT). Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.11**: Gieseker stability and moduli of sheaves. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.12**: Bridgeland stability conditions. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.13**: K-stability and Yau-Tian-Donaldson conjecture. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.14**: Non-reductive GIT. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.15**: Derived GIT and magic windows. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.20**: Deformation theory of smooth curves. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.22**: Stable curve and Deligne-Mumford stability. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.26**: Forgetful and gluing morphisms on M-bar_{g,n}. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.29**: Limit linear series (Eisenbud-Harris). Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.30**: Hurwitz numbers and the Hurwitz scheme. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.32**: ELSV formula: Hurwitz numbers as Hodge integrals. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.10.34**: Torelli morphism and Torelli theorem. Reason: moduli/GIT cluster flagged §18.2 skip.
- **04.11.05**: Smoothness and completeness via fans. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.06**: Orbit-cone correspondence. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.07**: Toric resolution of singularities. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.08**: Toric divisor and support function. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.09**: Toric Picard group. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.10**: Polytope-fan dictionary; the line bundle L_P. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.11**: Algebraic moment map and the polytope. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.12**: Cohomology of a smooth complete toric variety. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.13**: Toric intersection theory and mixed volumes. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.14**: Bernstein-Kushnirenko theorem. Reason: toric past basics cluster flagged §18.2 skip.
- **04.11.16**: Reflexive polytope and Batyrev mirror duality (pointer). Reason: toric past basics cluster flagged §18.2 skip.
- **04.12.01**: Tropical semiring and tropical polynomial. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip; frontier and rapidly developing.
- **04.12.02**: Tropical curve (balanced rational metric graph). Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.03**: Kapranov's theorem. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.04**: Newton polytope and non-archimedean amoeba. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.05**: Mikhalkin's correspondence theorem. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.06**: Nishinou-Siebert correspondence. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.07**: Toric degeneration of a Calabi-Yau variety. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.08**: Dual intersection complex; tropical manifold B. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.09**: Gross-Siebert reconstruction theorem (statement). Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.10**: Strominger-Yau-Zaslow (SYZ) conjecture. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.11**: Slab function and structure of a tropical manifold. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.12**: Theta function of a polarised tropical manifold. Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.13**: Period integral and the mirror map (pointer). Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **04.12.15**: Log Gromov-Witten invariants (pointer). Reason: tropical/mirror-symmetry cluster flagged §18.2 skip.
- **08.10.01**: Bosonic Fock space and second quantisation. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.02**: Fokker-Planck equation and equilibrium distribution. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- ~~**08.10.03**: phi^4 theory and the Dyson series. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.~~ **PRODUCED 2026-05-19 by Claude Opus 4.7 at 27/27 (Cycle 4 Track A, opens stat-side QFT entry strand at `content/08-stat-mech/10-qft/`).**
- **08.10.04**: Wick's theorem for operator products. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.05**: Feynman propagator and the contour-integral representation. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.06**: One-loop renormalisation in phi^4. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.07**: Wightman axioms (W1-W7). Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.08**: Langevin updates and lattice numerics. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.09**: Fermionic Fock space, Pauli exclusion, anticommutators. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.10.10**: Dirac field psi and the Dirac adjoint. Reason: frontier stat-mech/QFT cluster flagged §18.2 skip.
- **08.11.02**: Debye theory of specific heats of solids. Reason: frontier stat-mech cluster flagged §18.2 skip.
- **08.11.03**: Real gases — virial expansion and van der Waals. Reason: frontier stat-mech cluster flagged §18.2 skip.
- **08.12.01**: Fluctuation-dissipation theorem (Landau-Callen-Welton). Reason: frontier stat-mech cluster flagged §18.2 skip.
- **08.12.02**: Equilibrium fluctuations of thermodynamic quantities. Reason: frontier stat-mech cluster flagged §18.2 skip.
- **12.05.01**: Poincare group and its Lie algebra. Reason: QFT past foundations cluster flagged §18.2 skip.
- **12.05.04**: Free Klein-Gordon scalar quantum field. Reason: QFT past foundations cluster flagged §18.2 skip.
- **12.05.05**: Free Dirac spin-1/2 quantum field. Reason: QFT past foundations cluster flagged §18.2 skip.
- **12.05.06**: Free Maxwell / massive vector fields; photon and Proca. Reason: QFT past foundations cluster flagged §18.2 skip.
- **12.06.04**: Crossing symmetry; CPT theorem at the S-matrix level. Reason: QFT past foundations cluster flagged §18.2 skip.
- **21.02.01**: Finite fields F_q — structure and squares. Reason: number-theory graduate-research cluster; modular forms, Langlands, Iwasawa theory beyond T2 reliable reach.
- **21.02.02**: Quadratic reciprocity via Gauss sums. Reason: number-theory graduate-research cluster.
- **21.02.03**: p-adic numbers Q_p and Z_p. Reason: number-theory graduate-research cluster.
- **21.02.04**: Hensel's lemma. Reason: number-theory graduate-research cluster.
- **21.02.05**: Hilbert symbol (a,b)_v and the product formula. Reason: number-theory graduate-research cluster.
- **21.02.08**: Hasse-Minkowski theorem. Reason: number-theory graduate-research cluster.
- **21.03.01**: Riemann zeta function zeta(s). Reason: number-theory graduate-research cluster.
- **21.03.02**: Dirichlet L-functions L(s,chi). Reason: number-theory graduate-research cluster.
- **21.03.03**: Dedekind zeta function, Hecke L, Artin L. Reason: number-theory graduate-research cluster.
- **21.03.04**: Dirichlet density. Reason: number-theory graduate-research cluster.
- **21.04.01**: Modular forms on SL_2(Z). Reason: number-theory graduate-research cluster.
- **21.04.02**: Hecke operators and Hecke algebra. Reason: number-theory graduate-research cluster.
- **21.04.03**: Eichler-Shimura correspondence. Reason: number-theory graduate-research cluster.
- **21.04.05**: Ramanujan tau-function and Ramanujan conjectures. Reason: number-theory graduate-research cluster.
- **21.05.01**: l-adic Galois representations. Reason: number-theory graduate-research cluster.
- **21.06.01**: Modularity theorem (statement) and BSD. Reason: number-theory graduate-research cluster.
- **21.06.02**: Sato-Tate conjecture. Reason: number-theory graduate-research cluster.
- **21.07.01**: Z_p-extensions and Iwasawa theory. Reason: number-theory graduate-research cluster.
- **21.07.02**: p-adic L-functions and Main Conjecture. Reason: number-theory graduate-research cluster.
- **21.09.01**: Arakelov geometry / arithmetic surfaces (survey). Reason: number-theory graduate-research cluster.
- **21.09.02**: Faltings / Mordell theorem. Reason: number-theory graduate-research cluster.
- **21.10.01**: Langlands philosophy survey. Reason: number-theory graduate-research cluster.
