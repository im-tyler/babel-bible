# Fast Track Full-Coverage Scoping Report

**Compiled:** 2026-05-22
**Audit basis:** Booklist `docs/catalogs/FASTTRACK_BOOKLIST.md` (92 entries) cross-referenced against `plans/fasttrack/*.md` (58 audit plans, excluding `_template.md`). FT-number matching by header parse + manual reconciliation for combined plans (e.g. Gel'fand-Vilenkin Vols. 1–6 in one file) and YAML-frontmatter plans (Lawson-Michelsohn). Coverage overlap assessed against `manifests/production/plan.json` (918 shipped units) and the directory survey of `content/`.

---

## Summary

- **Total Fast Track entries:** 92
- **Audited (have audit plan):** 62 entries (58 plan files; Gel'fand-Vilenkin combined covers 6 entries)
- **Un-audited (no audit plan):** **30 entries**
- **Priority tally:**
  - **P1 (high-value, low-overlap):** 9 books — ~110 new units
  - **P2 (medium):** 11 books — ~95 new units
  - **P3 (low-value, heavy overlap):** 7 books — ~25 new units
  - **DROP (alternate volume / subsumed):** 3 books — 0 new units
- **Total estimated new units for full P1+P2 coverage:** **~205 units**

Two of the un-audited books overlap heavily with already-audited peers (Mackenzie Vol. 2 with Vol. 1, Itzykson-Drouffe Vol. 2 with Vol. 1, Sternberg *Curvature* / *Group Theory* with the already-audited *Lectures on Differential Geometry*) and are flagged DROP or P3 accordingly. The biggest absolute gap is **Section 2 Quantum**: 6 of the 30 un-audited books (2.01, 2.12, 2.13, 2.14, 2.15, 2.20) cluster there, and shipped QM/QFT coverage is thin (1 unit per major chapter in `content/12-quantum/`).

---

## P1 — High-value, low-overlap (audit first)

### 1.01 — Linear Algebra (Georgiy Shilov)

**TOC snapshot:** (1) Determinants; (2) Linear spaces; (3) Systems of linear equations; (4) Linear functions of a vector argument; (5) Coordinate transformations; (6) The canonical form of the matrix of a linear operator; (7) Bilinear and quadratic forms; (8) Euclidean spaces; (9) Unitary spaces; (10) Quadratic forms in Euclidean and unitary spaces; (11) Finite-dimensional algebras and their representations.

**Estimated new units:** ~10. Shipped: 9 units in `content/01-foundations/01-linear-algebra/` (field, vector space, basis, rank-nullity, determinant, eigenvalues, Jordan, SVD, bilinear form). Gaps Shilov hits that we don't: systems-of-linear-equations canonical theory (Kronecker-Capelli), coordinate transformations as primary objects, Smith / rational canonical form, dual / annihilator, quotient space, polar decomposition, normal-operator spectral theorem, Hermitian-form signature (Sylvester's law), the "finite-dimensional algebra" classification chapter.

**Overlap:** Shipped `01.01.07-determinant`, `01.01.08-eigenvalue-eigenvector`, `01.01.11-jordan-canonical-form`, `01.01.12-singular-value-decomposition`, `01.01.15-bilinear-quadratic-form` cover ≈ 55%.

**Audit priority:** **P1.** Shilov is the textbook half the Fast Track presupposes; the missing canonical-form and inner-product-space machinery is load-bearing for everything in Section 1+.

**Gap if un-audited:** Sylvester's law of inertia, polar/Cholesky decomposition, dual spaces & annihilators, simultaneous diagonalization, primary-decomposition theorem.

---

### 1.13 — Geometric Integration Theory (Hassler Whitney)

**TOC snapshot:** Part I — Classical theory: (I) Grassmann algebra; (II) Differential forms; (III) Riemann integration theory; (IV) The general Stokes' theorem. Part II — Theory of polyhedral chains and cochains: (V) Abstract integration theory; (VI) Flat cochains and differential forms; (VII) Lipschitz mappings. Part III — Cellular and indefinite integration: (VIII) Chains and cochains in open sets; (IX) Integration on manifolds; (X) Sharp norms.

**Estimated new units:** ~8. Whitney is the foundational reference for **flat / sharp chains**, **integration of forms on singular subspaces**, and **stratified manifolds**; almost none of this is in Codex. We have differential forms (`03.04.02`), exterior derivative (`03.04.04`), Stokes (`03.04.05`), de Rham (`03.04.06`) but nothing on chain/cochain duality at the **flat-norm** level, geometric measure theory, or the Whitney extension theorem.

**Overlap:** ≈ 20% (basic forms / Stokes).

**Audit priority:** **P1.** Whitney is the canonical bridge between differential forms and geometric measure theory; this is the foundation modern GMT (Federer, Almgren, varifolds) cites.

**Gap if un-audited:** Flat / sharp norms on polyhedral chains, Whitney extension theorem, geometric integration on stratified spaces, the proof of Stokes via cochain methods, Lipschitz-graph integration.

---

### 1.16 — Applications of Lie Groups to Differential Equations (Peter Olver)

**TOC snapshot:** (1) Lie groups; (2) Symmetry groups of differential equations; (3) Group-invariant solutions; (4) Symmetry groups and conservation laws (Noether's theorem); (5) Generalized symmetries; (6) Finite-dimensional Hamiltonian systems; (7) Hamiltonian methods for evolution equations.

**Estimated new units:** ~12. We have variational calculus (`03.04.08`), Noether's theorem fragments in classical mechanics, and Lie groups (`03.03.01`), but **no** dedicated content on prolongation of vector fields, Lie symmetries of PDEs, classical/generalized infinitesimal generators, group-invariant solution reductions, or Olver's Hamiltonian-on-PDEs formalism.

**Overlap:** ≈ 15%.

**Audit priority:** **P1.** This is the canonical text for prolongation methods; no other audited book covers PDE Lie-symmetry analysis. It also feeds 1.20 (Arnold FEEC), Souriau (2.11), and Olver-style integrability.

**Gap if un-audited:** Prolongation formula, Lie-symmetry classification of PDEs (heat, wave, KdV), characteristic method via symmetry, generalized symmetries and the Magri-Lenard recursion, infinite-dim Hamiltonian PDE structure.

---

### 1.20 — Finite Element Exterior Calculus (Douglas N. Arnold)

**TOC snapshot:** (1) The Hilbert complex framework; (2) Polynomial differential forms; (3) Polynomial spaces and degrees of freedom; (4) The Koszul complex; (5) Bounded cochain projections; (6) Hodge Laplacian and mixed formulations; (7) Convergence and error estimates; (8) Applications: Maxwell, Stokes-Darcy, elasticity.

**Estimated new units:** ~8. **Zero shipped numerical-analysis content.** Sobolev spaces are absent. Codex has no finite-element machinery at all.

**Overlap:** ≈ 5% (de Rham complex `03.04.06`, exterior derivative).

**Audit priority:** **P1.** FEEC is the only computational-PDE / numerical-analysis entry in the whole Fast Track. Skipping it leaves a strand gap rather than a unit gap.

**Gap if un-audited:** Sobolev de Rham complex, Whitney / Nédélec / Raviart-Thomas finite elements, the Hilbert-complex abstract framework, bounded cochain projections, mixed formulations of Hodge Laplacian, FEEC error estimates.

---

### 2.01 — Quantum Mechanics: Non-Relativistic Theory (Landau, Lifshitz)

**TOC snapshot:** (I) Basic concepts; (II) Energy and momentum; (III) Schrödinger equation; (IV) Angular momentum; (V) Motion in central field (hydrogen); (VI) Perturbation theory; (VII) Quasi-classical case (WKB); (VIII) Spin; (IX) Identity of particles; (X) Atom; (XI) Diatomic molecule; (XII) Theory of symmetry; (XIII) Polyatomic molecules; (XIV) Addition of angular momenta; (XV) Motion in magnetic field; (XVI) Nuclear structure; (XVII) Elastic collisions; (XVIII) Inelastic collisions.

**Estimated new units:** ~22. Shipped QM (`content/12-quantum/`) has one unit per major chapter — sparse coverage. Hilbert-space formalism (`12.02.01`), Schrödinger picture (`12.03.01`), particle-in-box (`12.04.01`), harmonic oscillator (`12.04.02`), hydrogen (`12.06.01`), perturbation theory (`12.07.01`, `12.07.02`), scattering (`12.08.01`), identical particles (`12.09.01`) — total ~13 units across 13 chapters. Landau-Lifshitz QM has **~80 sections** of dense content.

**Overlap:** ≈ 25% (single-section coverage of most chapters).

**Audit priority:** **P1.** This is the **canonical Russian QM** reference; the Fast Track explicitly anchors Section 2 on it. The fact that 2.01 is un-audited while 2.10 / 2.20 are partially audited is an inconsistency in the audit history.

**Gap if un-audited:** WKB / quasi-classical Bohr-Sommerfeld, Landau levels (motion in B-field), spin precession & magnetic-resonance, scattering amplitude / partial waves / phase shifts, polyatomic-molecule symmetry analysis, nuclear bound states, addition-of-angular-momenta Clebsch-Gordan tables.

---

### 2.20 — Quantum Electrodynamics (Landau, Lifshitz)

**TOC snapshot:** (I) Photons; (II) Bosons; (III) Fermions; (IV) Particles in external fields; (V) Radiation; (VI) Scattering of radiation; (VII) Atomic radiation; (VIII) Pair production / annihilation; (IX) Interaction of electrons; (X) Photons interacting with electrons (Compton, bremsstrahlung); (XI) Exact propagators / vertex parts; (XII) Radiative corrections; (XIII) Asymptotics; (XIV) Hadronic and weak corrections (later editions).

**Estimated new units:** ~18. Shipped relativistic-QM content is exactly **one unit** (`12.11.01-dirac-equation-relativistic-spin`). No QED process unit (no Compton, no Bhabha, no electron-positron annihilation, no bremsstrahlung). The Weinberg Vol. 1 audit covers QED-as-axiom-system; LL QED is **applied / process-based QED**, which is a different gap.

**Overlap:** ≈ 10% (Dirac equation + bosonic Fock).

**Audit priority:** **P1.** This is the canonical reference for actual QED cross-section calculations. Skipping it leaves the practical/computational side of QFT empty.

**Gap if un-audited:** Compton-scattering cross-section, Klein-Nishina formula, Bhabha & Møller scattering, Lamb shift, anomalous magnetic moment to one loop, bremsstrahlung, photon-photon scattering, electron-photon vertex one-loop computation.

---

### 3.02 — Homological Algebra (Gel'fand, Manin) [VINITI Algebra V]

**TOC snapshot:** (1) Simplicial objects & complexes; (2) Spectral sequences; (3) Triangulated categories; (4) Derived categories and derived functors; (5) Mixed Hodge structures (sketch); (6) D-modules; (7) Perverse sheaves; (8) The Riemann-Hilbert correspondence.

**Estimated new units:** ~14. We have `04.03.06-derived-functors-and-ext`, `04.10.15-derived-git-and-magic-windows`, spectral-sequences chapter (`content/03-modern-geometry/13-spectral-sequences/`), but **no** dedicated triangulated-category unit, no D-module units, no perverse sheaves, no Riemann-Hilbert correspondence as a curriculum object.

**Overlap:** ≈ 20%.

**Audit priority:** **P1.** This is the canonical Soviet-style abstract-homological-algebra survey; it's the gateway to every modern paper on derived categories, geometric Langlands, and intersection cohomology. The Voisin plan (3.27) references it explicitly.

**Gap if un-audited:** Triangulated category axioms, t-structures, perverse sheaves, holonomic D-modules, Riemann-Hilbert (analytic D-modules ↔ constructible sheaves), mixed Hodge modules, derived-category formalism for the six functors.

---

### 3.06 — Floer Homology Groups in Yang-Mills Theory (S.K. Donaldson)

**TOC snapshot:** (1) ASD connections and the energy functional; (2) The Chern-Simons functional; (3) The Floer equations; (4) Transversality and gluing; (5) The Floer chain complex; (6) Floer homology of homology 3-spheres; (7) Surgery formula; (8) Cup products and operations; (9) Relation to Casson invariants.

**Estimated new units:** ~10. We have `05.08.02-floer-homology` (symplectic Floer), Arnold conjecture (`05.08.01`), Maslov index (`05.08.03`), Conley-Zehnder (`05.08.04`), and gauge-theory units (`03.07.05-yang-mills-action`, `03.07.07-bpst-instanton`, `03.07.09-moduli-asd-connections`, `03.07.10-adhm`). But the **gauge-theory Floer homology side** — instanton Floer for 3-manifolds, Chern-Simons functional, Casson invariant — is entirely absent.

**Overlap:** ≈ 30%.

**Audit priority:** **P1.** Donaldson's Floer book is the canonical reference for instanton Floer; it connects 4-manifold gauge theory to 3-manifold topology. Sits one tier below Atiyah-Yang-Mills (3.20, audited).

**Gap if un-audited:** Instanton Floer homology, Chern-Simons functional and its critical points, Casson invariant via gauge theory, Floer chain complex for 3-manifolds, gluing/transversality for ASD connections, surgery formula, Donaldson's TQFT structure on Floer homology.

---

### 3.45 — Microlocal Analysis of QF on Curved Spacetimes (Christian Gérard)

**TOC snapshot:** (1) Free Klein-Gordon fields on Minkowski; (2) Quantization on curved spacetimes; (3) Hadamard states; (4) Microlocal analysis (wavefront sets); (5) The Hadamard condition via wavefront sets; (6) Quasi-free states; (7) Pseudodifferential calculus on manifolds; (8) Spacetime deformation arguments; (9) Construction of Hadamard states (Sorkin-Johnston, Hadamard parametrix); (10) Linearized gravity.

**Estimated new units:** ~12. Codex has **no** microlocal-analysis content (no wavefront sets, no pseudodifferential calculus beyond `03.09.22-pseudodifferential`, no Hadamard states, no QFT-on-curved-spacetime). The shipped pseudodifferential unit is symbol-of-operator level for index theorems, not for QFT.

**Overlap:** ≈ 5%.

**Audit priority:** **P1.** This is the only Fast Track entry for the mathematical-QFT-on-curved-spacetime program (algebraic-QFT / Brunetti-Fredenhagen-Verch / Hollands-Wald style). No other audited book overlaps.

**Gap if un-audited:** Wavefront-set calculus, Hadamard states and the Hadamard condition, two-point function distributions on curved spacetimes, Sorkin-Johnston construction, microlocal spectrum condition, propagation of singularities for the Klein-Gordon operator, algebraic QFT (CCR / Weyl algebra net) on globally hyperbolic spacetimes.

---

## P2 — Medium value, partial overlap

### 1.06 — Riemann Surfaces (Ahlfors, Sario)

**TOC snapshot:** (I) Surface topology (triangulation, fundamental group, homology); (II) Riemann surfaces (abstract, branch points); (III) Functions on Riemann surfaces (Dirichlet problem, harmonic functions, Green's functions); (IV) Differentials and their periods; (V) Existence theorems via Dirichlet principle; (VI) Uniformization.

**Estimated new units:** ~6. We have rich Riemann-surface coverage from the Donaldson and Forster audits (`content/06-riemann-surfaces/` has ~30 units across 9 subchapters). Ahlfors-Sario is **harmonic-analytic-first** in style — Dirichlet principle, harmonic functions on RS, Green's functions on RS, abstract triangulated-surface topology — which is mostly missing.

**Overlap:** ≈ 60%. Shipped: `06.01.11-harmonic-functions-plane`, `06.01.24-dirichlet-problem-perron`, `06.03.01-riemann-surface`, `06.03.03-uniformization-theorem`, `06.04.05-dbar-hilbert-pde`.

**Audit priority:** **P2.** Mostly overlaps Donaldson/Forster; adds analytic Dirichlet-principle existence proofs that the modern audits skip.

**Gap if un-audited:** Dirichlet-principle proof of uniformization, Green's functions on open Riemann surfaces, capacity / extremal length on RS, Sario's structure theory of bordered surfaces.

---

### 1.08 — Lie Groupoids and Lie Algebroids in Differential Geometry (Mackenzie, 1987)

**TOC snapshot:** (1) Topological groupoids; (2) Differentiable groupoids; (3) Lie algebroids; (4) Cohomology; (5) Connections and curvature; (6) Integration of Lie algebroids (Pradines / Crainic-Fernandes). [Smaller / older volume than the 2005 *General Theory*.]

**Estimated new units:** ~6. **Zero shipped Lie-groupoid / algebroid content.** `content/03-modern-geometry/03-lie/` has only `lie-group`, `group-action`, `orthogonal-group`.

**Overlap:** ≈ 0%.

**Audit priority:** **P2.** Adds a strand currently empty in Codex. Same coverage gap as Mackenzie Vol. 2 (1.09) — see DROP.

**Gap if un-audited:** Lie groupoid / Lie algebroid definitions, anchor map, Lie functor, integrability (Pradines, Crainic-Fernandes obstruction), groupoid cohomology.

---

### 1.09 — General Theory of Lie Groupoids and Lie Algebroids (Mackenzie, 2005)

**TOC snapshot:** Comprehensive monograph (xxxviii + 501 pp.). (1) Lie groupoids; (2) Lie algebroids; (3) Cohomology of Lie groupoids; (4) Connections in vector bundles; (5) Principal Lie groupoid bundles; (6) Generalized morphisms; (7) Double Lie algebroids; (8) Symplectic groupoids; (9) Poisson groupoids; (10) The Drinfeld double.

**Estimated new units:** would add ~3 above 1.08. Supersedes 1.08 in content.

**Overlap:** ≈ 95% with 1.08.

**Audit priority:** **P2 (combine with 1.08).** Treat 1.08 + 1.09 as a single combined audit — Mackenzie Vol. 2 is the same material extended. Net new units across both: ~9.

**Gap if un-audited:** Double Lie algebroids, symplectic / Poisson groupoids, Drinfeld doubles in the Lie-groupoid setting.

---

### 1.14 — Curvature in Mathematics and Physics (Sternberg, 2012)

**TOC snapshot:** (1) Affine connections; (2) Riemannian geometry; (3) Curvature and topology (Bonnet-Myers, Synge); (4) Cartan's method of moving frames; (5) Gauge theory; (6) The Yang-Mills functional; (7) Cartan geometry; (8) Conformal geometry; (9) Projective geometry; (10) The Kaluza-Klein construction; (11) General relativity.

**Estimated new units:** ~5. Sternberg LDG (1.10, audited) already covers Cartan structural equations, moving frames, $G$-structures. Curvature/topology theorems (Bonnet-Myers, Synge, Hadamard) are absent. Cartan / projective / conformal geometry as a curriculum object is absent.

**Overlap:** ≈ 50%.

**Audit priority:** **P2.** Adds Cartan-style projective + conformal + Kaluza-Klein material that Codex lacks. Half-overlaps Sternberg LDG.

**Gap if un-audited:** Cartan geometry (effective parabolic geometries), conformal Cartan connection, projective Cartan connection, Kaluza-Klein dimensional reduction as a geometric construction, Bonnet-Myers / Synge with proofs.

---

### 1.15 — Group Theory and Physics (Sternberg, 1994)

**TOC snapshot:** (1) Basic group theory; (2) Representations; (3) Compact Lie groups; (4) Wigner's theorem; (5) Group theory of the hydrogen atom; (6) Group theory of crystals; (7) Symmetric and orthogonal groups; (8) Particle physics: SU(3), SU(2)×U(1), GUTs.

**Estimated new units:** ~8. Substantial overlap with shipped `content/07-representation-theory/` (basic rep theory, characters, highest-weight). Gap: physics-application chapters — hydrogen-via-O(4) hidden symmetry, crystallographic groups, eightfold way, GUT representations.

**Overlap:** ≈ 60%.

**Audit priority:** **P2.** Physics-applied rep theory; complements (does not duplicate) Fulton-Harris (3.11) and Serre-LRFG (3.15) audits.

**Gap if un-audited:** Hydrogen atom as $O(4)$-orbit / Runge-Lenz vector, crystallographic point groups & space groups, Gell-Mann eightfold way, GUT representation content (SU(5), SO(10)), Wigner's theorem on quantum symmetries.

---

### 1.19 — Rational Homotopy Theory and Differential Forms (Griffiths, Morgan)

**TOC snapshot:** (1) Differential forms and de Rham cohomology; (2) Sullivan's polynomial de Rham forms; (3) Minimal models; (4) Formal spaces; (5) Massey products; (6) Rational homotopy groups; (7) Applications: symplectic / Kähler manifolds are formal.

**Estimated new units:** ~5. We have `03.12.06-sullivan-minimal-models`, `03.12.E1-rational-homotopy-exercises`. Missing: explicit Sullivan polynomial-form construction, formality theorem (Deligne-Griffiths-Morgan-Sullivan), Massey products, rational vs integral comparison.

**Overlap:** ≈ 50%.

**Audit priority:** **P2.** The canonical "rational-homotopy via forms" text — pairs well with May-Ponto (3.39, audited).

**Gap if un-audited:** Sullivan polynomial-form CDGA, formality of compact Kähler manifolds (DGMS theorem), Massey triple products as obstructions to formality, $\pi_*(X) \otimes \mathbb{Q}$ via minimal models.

---

### 2.12 — Exactly Solved Models in Statistical Mechanics (Baxter)

**TOC snapshot:** (1) Basic statistical mechanics; (2) The 1D Ising model; (3) The 2D Ising model (Onsager); (4) Transfer matrix; (5) The square lattice eight-vertex model; (6) The six-vertex model; (7) Triangular and honeycomb lattices; (8) Star-triangle relation / Yang-Baxter equation; (9) The hard hexagon model; (10) Correlation functions; (11) Bethe ansatz.

**Estimated new units:** ~10. Shipped stat-mech has Ising (`08.01.02`, `11.06.01`), Onsager (`08.03.01`), transfer matrix (`08.03.02`). Missing: Yang-Baxter / star-triangle, six- and eight-vertex models, Bethe ansatz, hard hexagon, integrable-stat-mech connection to quantum-integrable systems.

**Overlap:** ≈ 25%.

**Audit priority:** **P2.** Baxter is the canonical "integrable lattice models" reference; gateway to quantum-group rep theory. No other Fast Track entry covers Yang-Baxter / vertex models.

**Gap if un-audited:** Yang-Baxter equation, vertex models (6V, 8V), Bethe ansatz (algebraic & coordinate), hard-hexagon exact solution, corner-transfer-matrix method, R-matrix / quantum-group connection.

---

### 2.13 — Statistical Field Theory Vol. 1 (Itzykson, Drouffe)

**TOC snapshot:** Vol. 1: (1) From Brownian motion to Euclidean field theory; (2) Grassmann variables, fermions; (3) Spontaneous symmetry breaking & mean field; (4) Transfer matrices; (5) Renormalization group; (6) Lattice gauge theories; (7) Fermions on the lattice.

**Estimated new units:** ~7. Shipped `content/08-stat-mech/` has mean-field (`08.02.01`), partition function, Ising, Onsager, RG (`08.04.01` Wilson-Fisher, beta-function, block-spin), lattice gauge (`08.08.01` Wilson). Itzykson-Drouffe is the canonical "stat-field-theory as Euclidean QFT" text — fermions on the lattice, Grassmann path integrals, lattice gauge with full proofs, are partial gaps.

**Overlap:** ≈ 65%.

**Audit priority:** **P2.** Heavy overlap with existing audits (Kardar, Weinberg V1), but adds the fermion / Grassmann side that's missing.

**Gap if un-audited:** Grassmann-variable path integral derivation, fermion doubling on the lattice, Nielsen-Ninomiya theorem, transfer-matrix derivation of stat-field-theory measures, Migdal-Kadanoff lattice RG.

---

### 3.04 — Morse Homology (Schwarz)

**TOC snapshot:** (1) Riemannian Morse theory revisited; (2) The Morse complex (Witten / Floer / Schwarz construction); (3) Morse homology = singular homology theorem; (4) Continuation maps; (5) Functoriality and TQFT structure; (6) Equivariant Morse homology.

**Estimated new units:** ~6. **Zero shipped Morse-theory content** — no Morse lemma, no Morse index, no Morse complex. The Milnor *Morse Theory* audit (3.03) exists but is reduced and its punch-list of new units is not yet shipped. Schwarz is the **modern** (Morse-complex / Floer-style) presentation; Milnor's is the classical (handle-attachment) presentation.

**Overlap:** ≈ 5%. (Floer-symplectic units `05.08.0x` are downstream applications, not Morse-homology foundations.)

**Audit priority:** **P2.** Pairs with Milnor 3.03 audit; would supply the *modern* foundations chapter that Donaldson 3.06 and Floer-symplectic units already presuppose.

**Gap if un-audited:** Smale transversality, Morse-Smale flow, the Morse complex differential as moduli of gradient trajectories, Morse homology = singular homology theorem, continuation invariance, TQFT structure on Morse homology.

---

### 3.07 — Lectures on the H-Cobordism Theorem (Milnor)

**TOC snapshot:** (1) Cobordism; (2) Morse functions on cobordisms; (3) Rearrangement of critical points; (4) Cancellation of critical points; (5) The Whitney trick; (6) Statement and proof of the h-cobordism theorem; (7) Applications (high-dim Poincaré conjecture).

**Estimated new units:** ~5. Codex has unoriented / oriented bordism in characteristic classes (`03.06.12`, `03.06.13`) but **no h-cobordism, no Whitney trick, no handle calculus.**

**Overlap:** ≈ 15%.

**Audit priority:** **P2.** Short canonical reference (~100 pp.); supplies handle-calculus material that Schwarz 3.04 and Donaldson 3.06 cite as black box.

**Gap if un-audited:** Whitney trick (canonical statement & proof), handle decomposition of cobordisms, h-cobordism theorem, $s$-cobordism refinement (Whitehead torsion), high-dimensional Poincaré conjecture via h-cob.

---

### 3.09 — Geometric Quantization (Woodhouse)

**TOC snapshot:** (1) Hamiltonian mechanics & symplectic geometry; (2) Prequantization line bundle; (3) Polarizations (real, complex, Kähler); (4) Quantum operators (BKS construction); (5) Half-densities and half-forms; (6) Metaplectic correction; (7) The Bogoliubov / pair-of-pants; (8) Hamilton-Jacobi theory.

**Estimated new units:** ~8. Shipped `05.11.02-prequantisation-spin-coadjoint`, `03.06.08-kostant-weil-prequantum-line-bundle` are the only geometric-quantization units. Woodhouse covers polarizations, metaplectic correction, BKS pairing, half-form construction — all absent.

**Overlap:** ≈ 15%.

**Audit priority:** **P2.** Pairs with Brylinski (3.47, audited) and Woit (2.02, audited); the canonical geometric-quantization monograph.

**Gap if un-audited:** Real / complex / Kähler polarizations, BKS pairing operator, half-density / half-form quantum measure, metaplectic correction & the Maslov index in quantization, Hamilton-Jacobi as semi-classical limit, vertical / horizontal polarization comparison.

---

### 3.23 — Function Theory of Several Complex Variables (Krantz)

**TOC snapshot:** (1) Holomorphic functions of several variables; (2) Hartogs phenomenon; (3) Domains of holomorphy & pseudoconvexity; (4) $\bar\partial$-Neumann problem; (5) Plurisubharmonic functions; (6) Bergman & Szegő kernels; (7) Real-analysis interface; (8) Boundary behavior on strictly pseudoconvex domains; (9) Several-variable harmonic analysis.

**Estimated new units:** ~9. Shipped: `06.07.01-holomorphic-several-variables`, `06.07.02-hartogs-phenomenon`, `06.09.0x` Stein-theory units (Theorems A & B, Behnke-Stein, Cousin I & II, etc.). Krantz adds the analytic / PDE side: $\bar\partial$-Neumann, plurisubharmonic functions, Bergman kernel, pseudoconvex-domain boundary regularity.

**Overlap:** ≈ 45%.

**Audit priority:** **P2.** Companion to Gunning (3.24). The analytic SCV side; Gunning is the algebraic SCV side.

**Gap if un-audited:** Pseudoconvex domains via plurisubharmonic exhaustion, $\bar\partial$-Neumann problem & Kohn estimates, Bergman / Szegő reproducing kernels, Levi problem solution, $\bar\partial$ on strictly pseudoconvex domains, Henkin-Ramirez integral kernels.

---

## P3 — Heavy overlap / lower-yield

### 1.18 — Multivariable Mathematics Ch. 8 (Shifrin)

**TOC snapshot:** Ch. 8 only: (8.1) Differential forms on $\mathbb{R}^n$; (8.2) Line integrals & 1-forms; (8.3) Surface integrals & 2-forms; (8.4) Stokes / divergence / Green; (8.5) Closed and exact forms.

**Estimated new units:** ~2. We have differential forms (`03.04.02`), exterior derivative (`03.04.04`), Stokes (`03.04.05`), de Rham cohomology (`03.04.06`), integration on manifolds (`03.04.03`). Shifrin Ch. 8 is undergraduate-level forms on $\mathbb{R}^n$.

**Overlap:** ≈ 85%.

**Audit priority:** **P3.** Possibly a Beginner-tier didactic anchor for the forms chapter, but no new conceptual material.

**Gap if un-audited:** Beginner-tier numerical computation pack for forms on $\mathbb{R}^3$; line/surface-integral exercises in physics notation.

---

### 2.14 — Statistical Field Theory Vol. 2 (Itzykson, Drouffe)

**TOC snapshot:** (8) Conformal field theory; (9) Two-dim CFT (Belavin-Polyakov-Zamolodchikov); (10) Minimal models; (11) Coulomb gas; (12) Strings; (13) Random surfaces; (14) Matrix models.

**Estimated new units:** ~6. We have CFT entries (`03.10` conformal field theory chapter, `08.06.02-conformal-criticality`, `08.05.02-correlation-functions`). Itzykson-Drouffe Vol. 2 covers 2D-CFT minimal models, Coulomb-gas representation, random surfaces / matrix models — partially covered.

**Overlap:** ≈ 55%.

**Audit priority:** **P3.** Most novel content (matrix models, random surfaces) is duplicated by the (un-audited but lower-priority) Deligne-Quantum-Fields-and-Strings book; would mostly extend the existing CFT chapter rather than open a new strand.

**Gap if un-audited:** Coulomb-gas Vertex operators, minimal-model character formulae, Liouville theory background, Penner / Kontsevich matrix-model expansion of moduli space.

---

### 2.15 — MIT OCW: Statistical Mechanics II (Kardar et al)

**TOC snapshot:** Kardar Vol. 2 — *Fields*: (1) Collective behavior, from particles to fields; (2) Statistical fields; (3) Fluctuations; (4) Perturbative RG; (5) Lattice systems; (6) Series expansions; (7) Beyond spin waves.

**Estimated new units:** ~3. Shipped: full RG chapter, mean-field, Ising. Kardar is **textbook-quality** but content-overlapped with Itzykson-Drouffe Vol. 1 (P2 above) and the existing RG/critical units.

**Overlap:** ≈ 80%.

**Audit priority:** **P3.** Kardar's free MIT OCW status makes him a useful citation anchor, but the content is in the curriculum already.

**Gap if un-audited:** Cumulant expansion, Wilson momentum-shell RG with explicit calculation, $\epsilon$-expansion exercises at the level of Kardar's problem sets.

---

### 3.24 — Introduction to Holomorphic Functions of Several Variables (Gunning)

**TOC snapshot:** Three volumes: (Vol. I) Function theory: Hartogs, domains of holomorphy, sheaves; (Vol. II) Local theory: rings of germs, coherent sheaves, local rings of analytic sets; (Vol. III) Homological theory: analytic spaces, Stein manifolds, Cartan theorems A & B.

**Estimated new units:** ~5. Shipped `06.09.02-theorems-a-b`, `06.09.03-behnke-stein`, `06.09.08-survey-cartan-serre-stein-theory`. Gunning is the **algebraic / sheaf** SCV side; complements Krantz (3.23, P2). Coherence-of-sheaves, local-ring theory of analytic germs are partial gaps.

**Overlap:** ≈ 60%.

**Audit priority:** **P3.** Most overlap with Krantz P2 plus the existing Stein-theory units; net new = mostly local-rings of analytic germs.

**Gap if un-audited:** Local rings $\mathcal{O}_n$ of holomorphic germs at a point, Weierstrass preparation & division theorems in $n$ variables, coherent analytic sheaves (Oka coherence theorem), Remmert proper-mapping theorem.

---

### 3.36 — Spinors and Space-Time Vol. 1 (Penrose, Rindler)

**TOC snapshot:** Vol. 1 — Two-spinor calculus and relativistic fields: (1) The geometry of world-vectors and spinors; (2) Abstract-index calculus for spinors; (3) Spinors and tensors; (4) Differentiation and curvature; (5) Fields in space-time; (6) Spinor-form of Maxwell, Dirac, Einstein equations; (7) The Goldberg-Sachs theorem; (8) Petrov classification.

**Estimated new units:** ~6. Shipped: spin geometry chapter (`03.09`), Penrose-twistor units (`03.07.11`, `03.07.14`), Dirac equation (`12.11.01`). Penrose-Rindler is **2-spinor abstract-index notation** as a primary calculus — this notation as a curriculum object is absent.

**Overlap:** ≈ 45%.

**Audit priority:** **P3.** Most of Penrose-Rindler Vol. 1 content is covered by the Lawson-Michelsohn (3.35) and Atiyah-YM (3.20) audits in different notation; Penrose-Rindler's distinctive contribution is the 2-spinor abstract-index style itself.

**Gap if un-audited:** 2-spinor abstract-index calculus, spinor decomposition of Riemann curvature (Weyl + Ricci spinors), Petrov classification of Weyl tensor, Goldberg-Sachs theorem, principal null directions.

---

### 3.37 — Spinors and Space-Time Vol. 2 (Penrose, Rindler)

**TOC snapshot:** Vol. 2 — Spinor and twistor methods: (1) Twistors as elements of the dual Klein quadric; (2) Massless fields & twistor wave functions; (3) Penrose transform; (4) Twistor diagrams; (5) Active twistor space; (6) Asymptotic structure of space-times; (7) Conformal infinity.

**Estimated new units:** ~5. Shipped twistor units `03.07.11-penrose-twistor-space`, `03.07.14-penrose-transform-linear`. Most of Vol. 2 is covered at survey level.

**Overlap:** ≈ 55%.

**Audit priority:** **P3 (combine with 3.36).** Treat 3.36 + 3.37 as a single combined audit; net new units across both ≈ 8.

**Gap if un-audited:** Twistor space of Minkowski with metric/conformal structure, twistor cohomology methods for massless fields, conformal compactification / Penrose diagrams as primary objects, $\mathscr{I}$-structure, twistor diagrams.

---

### 3.46 — Differential Forms and Cohomology (Vaisman)

**TOC snapshot:** (1) Differential forms on manifolds; (2) Integration & Stokes; (3) Sheaves & Čech cohomology; (4) De Rham theorem; (5) Hodge theory; (6) Spectral sequences; (7) Characteristic classes.

**Estimated new units:** ~2. Vaisman is a compact survey; all material is covered by the audited Bott-Tu (1.17), Kobayashi-Nomizu (3.18/19), Voisin (3.27), and Hirzebruch (3.25) audits.

**Overlap:** ≈ 90%.

**Audit priority:** **P3.** Mostly a Beginner-tier anchor candidate — no novel content.

**Gap if un-audited:** Vaisman's expository style on Čech-de Rham comparison; no theorem-level gaps.

---

## DROP — Alternate volume, subsumed, or genuinely lower-yield

### 1.09 — General Theory of Lie Groupoids and Lie Algebroids (Mackenzie 2005)

Already counted with 1.08 under combined P2 audit. As a standalone audit: **DROP** — Vol. 2 is an extension of Vol. 1, not an independent volume.

### 1.13 — Geometric Integration Theory (Whitney)

Listed P1 above. (Not DROP.)

### 3.43 — Quantum Fields and Strings Vols. 1-2 (Deligne, Kazhdan, Etingof, Morgan, Freed, Morrison, Jeffrey, Witten)

**TOC snapshot:** IAS-1996 program lectures. Vol. 1: classical field theory, QFT for mathematicians, Riemannian geometry of strings, vertex algebras, perturbative QFT, conformal field theory. Vol. 2: dynamics of QFT, supersymmetry, $\mathcal{N}=2$ gauge theory, four-manifolds, mirror symmetry, lectures on duality.

**Estimated new units if audited:** ~12. **Overlap is heavy** with the audited Weinberg (2.17/2.18/2.19), Freed (3.05), Atiyah-YM (3.20), Mumford-GIT (3.31), Gross-mirror (3.33), Voisin (3.27) plans. Distinctive content: vertex-operator-algebra units, $\mathcal{N}=2$ super-Yang-Mills computations à la Seiberg-Witten, mirror symmetry via vertex algebras.

**Audit priority:** **DROP** (or P3-deferred). The IAS lectures are anchored across so many other audited plans that a standalone audit would mostly produce duplicates. The vertex-algebra and Seiberg-Witten chapters could be picked up as standalone units without a Quantum-Fields-and-Strings-anchored audit.

**Gap if un-audited:** Vertex-operator-algebra formalism as a curriculum object, $\mathcal{N}=2$ Seiberg-Witten low-energy effective action, Witten's interpretation of Donaldson invariants as supersymmetric path integrals.

### 3.44 — The Global Approach to Quantum Field Theory Vols. 1-2 (DeWitt)

**TOC snapshot:** Two-volume monograph on the "global" / covariant approach to QFT — DeWitt's lifework. (1) Geometry of configuration space; (2) Functional integration; (3) Background-field method; (4) Effective action; (5) Anomalies; (6) Gravity & quantum gravity; (7) Black-hole radiation; (8) Asymptotic structure.

**Estimated new units:** ~10. Highly idiosyncratic content (DeWitt-style configuration-space machinery is not industry-standard). Overlaps with audited Weinberg, Freed, Atiyah-YM at concept level; entirely distinct in style.

**Audit priority:** **DROP** (or deferred P3). Mathematical content is largely accessible from other (already-audited) entries in more readable form; DeWitt's notation and presentation are non-standard.

**Gap if un-audited:** DeWitt's configuration-space functional integral, Vilkovisky-DeWitt covariant effective action, Schwinger-DeWitt expansion of heat kernel for the effective action.

---

## Recommendation

To reach full Fast Track coverage, run audits on:

- **9 P1 books** (high-value, low-overlap): 1.01 Shilov LA, 1.13 Whitney GIT, 1.16 Olver, 1.20 Arnold FEEC, 2.01 Landau-Lifshitz QM, 2.20 Landau-Lifshitz QED, 3.02 Gel'fand-Manin Hom-Alg, 3.06 Donaldson Floer/YM, 3.45 Gérard microlocal QFT. **Estimated ~110 new units.**
- **11 P2 books** (medium, partial overlap, combined where appropriate): 1.06 Ahlfors-Sario, 1.08+1.09 Mackenzie (combined), 1.14 Sternberg *Curvature*, 1.15 Sternberg *Group Theory*, 1.19 Griffiths-Morgan, 2.12 Baxter, 2.13 Itzykson-Drouffe V1, 3.04 Schwarz Morse, 3.07 Milnor h-cob, 3.09 Woodhouse, 3.23 Krantz. **Estimated ~95 new units.**

**Total P1 + P2: 20 audits, ~205 new units.**

The **P3 books** (Shifrin Ch.8, Itzykson-Drouffe V2, Kardar OCW, Gunning, Penrose-Rindler V1+V2 combined, Vaisman) can stay un-audited or be promoted to combined / didactic-anchor audits if the corresponding shipped chapters need a Beginner-tier presentation pass. Total P3 cost if all picked up: ~25 units across 7 books, mostly exposition/exercise material.

The **DROP books** (Deligne-Kazhdan QFT-Strings IAS, DeWitt Global QFT, plus Mackenzie Vol. 2 standalone) are subsumed by audited peers and should not be run as independent audits; specific desired content from each (vertex algebras from 3.43, configuration-space machinery from 3.44) can be picked up as standalone units within already-audited chapters.

**Suggested audit order** (highest yield-to-effort first, by tier-bridging value):

1. 1.01 Shilov LA — unblocks every Section 1 audit-gap proof
2. 2.01 Landau-Lifshitz QM — unblocks the entire `12-quantum/` chapter expansion
3. 3.02 Gel'fand-Manin Hom-Alg — unblocks D-modules / perverse sheaves strand
4. 1.16 Olver Lie-PDE — unblocks the Lie-symmetry-of-PDE strand
5. 3.06 Donaldson Floer/YM — bridges audited Atiyah-YM + the existing symplectic-Floer
6. 1.20 Arnold FEEC — opens the numerical-analysis strand from zero
7. 2.20 Landau-Lifshitz QED — opens process-level QED with cross-section calculations
8. 3.45 Gérard microlocal QFT — opens the algebraic-QFT-on-curved-spacetimes strand
9. 1.13 Whitney GIT — bridges to geometric measure theory
10. [Then run the 11 P2 audits in any order — they're roughly equal-priority and combine well in pairs (1.08+1.09, 3.36+3.37 if reclassified, 1.14+1.15, 3.23+3.24).]

---

**Cross-reference:** `docs/plans/FASTTRACK_COVERAGE_ROADMAP.md` for the two-track strategy and the partially-aligned earlier coverage plan; this scoping report supersedes the booklist-coverage gap section of that document.
