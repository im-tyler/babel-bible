# Codex — v0.5 Lateral Expansion Plan

**v0.x scope is complete**: 66 units, fully closed DAG, spin-geometry strand (Wave 1) traversable from leaf to apex with three tiers. **v0.5 is the first lateral expansion**: producing additional apex strands beyond spin geometry to reach Fast Track parity.

Read `docs/plans/PILOT_PLAN.md` (v0.x retrospective), `docs/plans/WAVE_3_PLAN.md` and `docs/plans/WAVE_4_PLAN.md` (depth-completion plans), `docs/pilot-lessons.md` (consolidated production lessons), `docs/specs/QUALITY_RUBRIC.md` (the validator gate).

---

## 1. v0.5 scope

Five additional apex strands selected for breadth, canonisation, and tractability. Each strand:

- Has 8–15 apex units culminating in a major synthesis theorem.
- Pulls in 10–25 supporting units, *most of whose foundations are already shipped* in v0.x (smooth manifold, vector bundle, Lie group, de Rham cohomology, etc.).
- Has well-defined Master-tier anchor texts from the Fast Track booklist.
- Produces in roughly the same footprint as the original spin-geometry pilot (~30–40 units total per strand) but at substantially faster cadence because the foundational prereq chain is already in place.

**The five strands:**

| # | Strand | Apex synthesis | Anchors | Est. units |
|---|---|---|---|---|
| A | **Algebraic geometry** | Riemann-Roch + Hodge decomposition + sheaf cohomology | Hartshorne; Griffiths-Harris; Voisin; Vakil | ~35 |
| B | **Symplectic geometry** | Moment map + symplectic reduction + Floer homology | Arnold; Audin; Cannas da Silva; Donaldson-Kronheimer | ~30 |
| C | **Riemann surfaces & complex analysis** | Riemann-Roch for curves + Abel-Jacobi + uniformisation | Donaldson *Riemann Surfaces*; Forster; Farkas-Kra; Ahlfors-Sario | ~25 |
| D | **Representation theory** | Borel-Weil-Bott + Peter-Weyl + classification of compact simple Lie groups | Fulton-Harris; Serre *Linear Reps*; Knapp; Bump | ~30 |
| E | **Statistical field theory & lattice models** | Onsager 2D Ising + RG flow + phase transitions | Baxter; Itzykson-Drouffe; Kardar (MIT OCW 8.334) | ~25 |

**Estimated total v0.5 production: ~145 units across 5 strands.** Combined with v0.x's 66 units, that's ~210 units total — roughly Fast Track parity for the full modern-geometry section.

## 2. Strand A — Algebraic geometry

**Apex synthesis**: Riemann-Roch, sheaf cohomology, Hodge theory.

### Apex units (Wave 1 equivalent)

1. `04.01.??` Sheaf — algebraic / topological foundation.
2. `04.01.??` Coherent sheaf on a scheme.
3. `04.02.??` Scheme — affine, gluing, examples.
4. `04.02.??` Morphism of schemes.
5. `04.03.??` Sheaf cohomology (Čech, derived functor).
6. `04.03.??` Serre's vanishing theorem.
7. `04.04.??` Divisor on a curve.
8. `04.04.??` **Riemann-Roch theorem** (curves, then surfaces).
9. `04.05.??` Hodge decomposition.
10. `04.05.??` Kähler manifold.
11. `04.06.??` Algebraic curve as Riemann surface (link to Strand C).

### Wave 2 supporting units (unique to AG)

- Commutative ring + ideal (extends our `03.01.02 / 03.01.03`)
- Localisation
- Tensor product over a ring
- Zariski topology
- Spectrum of a ring `Spec(A)`
- Quasi-coherent sheaf
- Locally free sheaf / vector bundle on scheme
- Étale topology (placeholder — full étale is v1+)
- Algebraic variety (classical)
- Projective space + projective scheme
- Line bundle on projective scheme (Picard group)
- Riemann's theorem on algebraic curves
- Ext / Tor functors

### Foundations already shipped (reuse)

- Topological space, continuous map, metric space
- De Rham cohomology, exterior derivative, Stokes' theorem
- Differential forms, smooth manifold
- Vector space, field, group, ring (function from gpt-codex's Wave 4 batch)
- Tensor product, tensor algebra, quotient algebra, ideal
- Homotopy, covering space

### Estimated breakdown

- Apex: 11 units
- New supporting: ~13 units
- Reused foundations: substantial (no new production needed)
- **Total new production: ~24 units**

### Owner: claude (one of three claude strands)

## 3. Strand B — Symplectic geometry

**Apex synthesis**: Moment map theory, symplectic reduction, applications to Hamiltonian dynamics and Floer homology.

### Apex units (Wave 1 equivalent)

1. `05.01.??` Symplectic vector space (linear algebra).
2. `05.01.??` Symplectic manifold.
3. `05.02.??` Hamiltonian vector field + symplectic vector field.
4. `05.02.??` Poisson bracket + Poisson manifold.
5. `05.03.??` Coadjoint orbit.
6. `05.04.??` Moment map.
7. `05.04.??` **Marsden-Weinstein symplectic reduction**.
8. `05.05.??` Lagrangian submanifold.
9. `05.06.??` Almost-complex structure on a symplectic manifold.
10. `05.07.??` **Gromov non-squeezing theorem**.
11. `05.08.??` **Arnold conjecture** (statement) → Floer homology setup.

### Wave 2 supporting units (unique to SG)

- Integrable system (Liouville-Arnold)
- Action-angle coordinates
- Cotangent bundle as canonical symplectic manifold
- Darboux's theorem
- Symplectic group $\mathrm{Sp}(2n, \mathbb{R})$ (Lie group; reuses `03.03.01`)
- Maslov index
- Pseudoholomorphic curve (J-holomorphic curve)
- Symplectic capacity
- Conley-Zehnder index
- Floer homology (Hamiltonian / instanton flavors)

### Foundations already shipped (reuse)

- Smooth manifold, differential forms, exterior derivative
- Lie group, Lie algebra, Lie group action
- Bilinear form (skew-symmetric variant for symplectic forms)
- De Rham cohomology
- Hamilton's principle and variational calculus

### Estimated breakdown

- Apex: 11 units
- New supporting: ~10 units
- **Total new production: ~21 units**

### Owner: gpt-codex (one of two gpt-codex strands)

## 4. Strand C — Riemann surfaces & complex analysis

**Apex synthesis**: Riemann-Roch for compact Riemann surfaces, Abel-Jacobi map, uniformisation theorem.

### Apex units (Wave 1 equivalent)

1. `06.01.??` Holomorphic function (single complex variable).
2. `06.01.??` Cauchy-Riemann equations + complex differentiability.
3. `06.02.??` Cauchy integral theorem + formula.
4. `06.02.??` Residue theorem.
5. `06.03.??` Riemann surface — definitions, examples.
6. `06.03.??` Sheaf of holomorphic functions.
7. `06.04.??` Divisor on a Riemann surface.
8. `06.04.??` **Riemann-Roch theorem** (for compact Riemann surfaces).
9. `06.05.??` Jacobian variety + Abel-Jacobi map.
10. `06.05.??` Theta function on a Riemann surface.
11. `06.06.??` **Uniformisation theorem** (Riemann mapping + uniformisation).
12. `06.07.??` Algebraic curve ↔ Riemann surface correspondence (link to Strand A).

### Wave 2 supporting units (unique to RS)

- Power series in one complex variable
- Holomorphic vector bundle on a Riemann surface
- Meromorphic function
- Branch point / branched covering
- Genus of a Riemann surface
- Hyperelliptic curve
- Kähler form on a Riemann surface
- Hodge theory for compact Riemann surfaces
- Mittag-Leffler theorem
- Weierstrass preparation theorem

### Foundations already shipped (reuse)

- Topological space, continuous map, metric space (for compactness)
- Smooth manifold (Riemann surfaces are 2-real-dim with extra structure)
- Differential forms, de Rham cohomology
- Covering space, double cover
- Lie group ($\mathrm{PSL}_2(\mathbb{C})$ via Möbius transformations)

### Estimated breakdown

- Apex: 12 units
- New supporting: ~10 units
- **Total new production: ~22 units**

### Owner: claude (one of three claude strands)

## 5. Strand D — Representation theory

**Apex synthesis**: Cartan-Weyl classification of finite-dimensional Lie algebra reps, Peter-Weyl theorem, Borel-Weil-Bott.

### Apex units (Wave 1 equivalent)

1. `07.01.??` Group representation (general).
2. `07.01.??` Schur's lemma.
3. `07.02.??` Character of a finite-group representation.
4. `07.02.??` Character orthogonality + decomposition.
5. `07.03.??` Highest weight representation of a complex semisimple Lie algebra.
6. `07.03.??` Weight lattice + root system + Weyl group.
7. `07.04.??` **Cartan-Weyl classification** of finite-dim irreducible reps.
8. `07.05.??` Compact Lie group + maximal torus.
9. `07.05.??` **Peter-Weyl theorem**.
10. `07.06.??` Flag variety.
11. `07.06.??` **Borel-Weil-Bott theorem**.
12. `07.07.??` Connection to physics: $\mathrm{SU}(2)$, $\mathrm{SU}(3)$ in particle physics.

### Wave 2 supporting units (unique to RT)

- Symmetric group $S_n$ representation
- Young tableau + Young symmetriser
- Cartan subalgebra + root space decomposition
- Verma module + highest-weight construction
- Universal enveloping algebra
- Casimir element
- Weyl character formula
- Killing form (already in Lie algebra unit, refine here)
- Schur-Weyl duality
- Bruhat decomposition / parabolic subgroup

### Foundations already shipped (reuse)

- Group, group action, Lie group, Lie algebra
- Vector space, bilinear form
- Compact (topology), Hilbert space (for Peter-Weyl on $L^2$)
- Tensor product, tensor algebra
- Spin group (already shipped as concrete Lie group example)

### Estimated breakdown

- Apex: 12 units
- New supporting: ~10 units
- **Total new production: ~22 units**

### Owner: claude (one of three claude strands)

## 6. Strand E — Statistical field theory & lattice models

**Apex synthesis**: Onsager solution of 2D Ising, renormalisation group flow, universality classes for phase transitions.

### Apex units (Wave 1 equivalent)

1. `08.01.??` Partition function (statistical mechanics).
2. `08.01.??` Ising model (definition + ferromagnetic / antiferromagnetic phases).
3. `08.02.??` Mean-field theory + Curie-Weiss.
4. `08.03.??` **Onsager solution of 2D Ising** (transfer matrix).
5. `08.04.??` Renormalisation group (real-space block decimation).
6. `08.04.??` **Wilson-Fisher fixed point + universality**.
7. `08.05.??` Critical exponents + scaling laws.
8. `08.06.??` Gaussian field theory + free boson.
9. `08.06.??` Conformal symmetry at criticality (link to existing CFT unit).
10. `08.07.??` Path integral formulation of statistical mechanics.
11. `08.08.??` **Wilson's lattice formulation of gauge theory**.
12. `08.09.??` Quantum-classical correspondence (Wick rotation).

### Wave 2 supporting units (unique to SFT)

- Boltzmann distribution + canonical ensemble
- Free energy + Helmholtz / Gibbs
- Correlation function (statistical mechanics)
- Transfer matrix (general)
- Spontaneous symmetry breaking
- Mermin-Wagner theorem
- Block-spin decimation
- Beta function (RG)
- Lattice gauge theory (Wilson action)
- Effective field theory

### Foundations already shipped (reuse)

- Hilbert space (for path-integral Hilbert spaces)
- Lie algebra (for gauge symmetries)
- Differential forms (for action functionals)
- CFT basics (already shipped as Wave 1 apex)
- Tensor product

### Estimated breakdown

- Apex: 12 units
- New supporting: ~10 units
- **Total new production: ~22 units**

### Owner: gpt-codex (one of two gpt-codex strands)

## 7. Production division of labor

**claude (3 strands)**: A. Algebraic geometry, C. Riemann surfaces & complex analysis, D. Representation theory.

These three strands are mathematically adjacent (commutative algebra + complex/algebraic geometry + Lie/rep theory) and lean heavily on prose-density material. They share substantial supporting infrastructure: schemes appear in AG and Riemann surfaces, Lie reps appear in Borel-Weil and connect to compact-Lie classifications.

**gpt-codex (2 strands)**: B. Symplectic geometry, E. Statistical field theory & lattice models.

These two strands are physics-flavored, computational, and somewhat self-contained. Symplectic geometry leans on Lie group + diffgeo foundations; SFT leans on CFT + Hilbert space. The gpt-codex session has shown strong production speed on physics-style technical content (CFT basics, Yang-Mills, Bott periodicity).

### Why this split

- **Mathematical adjacency**: claude's three strands form a connected sub-DAG (sheaf cohomology in AG ↔ holomorphic line bundles on Riemann surfaces ↔ characters of compact Lie groups → Borel-Weil). Producing them together lets cross-references resolve as production proceeds.
- **Prose density**: AG, RS, RT have heavy prose components (definitions of schemes, divisors, weight lattices). claude's Master-tier prose pace fits this.
- **Computational density**: SG and SFT have more action-functional / partition-function / commutator computation. gpt-codex has shown speed and accuracy on this style.
- **Independence**: SG and SFT can run completely independently of claude's three strands; collisions on shared files (`docs/catalogs/CONCEPT_CATALOG.md`, `manifests/deps.json`, `docs/pilot-lessons.md`) are the only coordination point.

### Estimated production time

Per strand: ~22 new units at the post-pilot scaffold cadence (~2–5 min per unit for the parallel session, ~15–30 min per unit for claude with full LM Master prose). 

- claude's 3 strands: ~66 units. At ~20 min/unit average, ~22 hours of focused work, distributable across multiple sessions.
- gpt-codex's 2 strands: ~44 units. At ~5 min/unit, ~3.5 hours.

Realistic calendar: **2–3 weeks of intermittent work** brings v0.5 to closure (with foundations already shipped, this is genuinely tractable).

## 8. Strand-batch files (paste-ready for gpt-codex)

The two gpt-codex strands need their own batch scaffolds. Written as separate files:

- `docs/batches/V05_GPT_BATCH_B_SYMPLECTIC.md` — Strand B (Symplectic geometry) Wave 1 apex queue.
- `docs/batches/V05_GPT_BATCH_E_SFT.md` — Strand E (Statistical field theory) Wave 1 apex queue.

Each file contains:
- Read-first list (PILOT_PLAN, QUALITY_RUBRIC, etc.)
- Production queue (~10 apex units in dependency order)
- Per-unit production protocol
- Hard conventions and prose standard
- Stop conditions

The claude-side strands (A, C, D) are produced from `docs/plans/CURRICULUM_V0_5_PLAN.md` directly — claude reads the strand definition above and produces from it.

## 9. Numbering convention

Existing v0.x uses sections `00–03`. v0.5 strands continue:

- **04** — Algebraic geometry (Strand A)
- **05** — Symplectic geometry (Strand B)
- **06** — Riemann surfaces & complex analysis (Strand C)
- **07** — Representation theory (Strand D)
- **08** — Statistical field theory & lattice models (Strand E)

Each strand has chapters `01–10` (subject to refinement during production). Apex units are roughly in the higher chapter numbers per strand; supporting units in lower numbers.

## 10. Success criteria (v0.5)

v0.5 succeeds if:

- [ ] All 5 strands ship at least 80% of their planned apex units (8 of ~10 each).
- [ ] Each strand's apex units have `pending_prereqs: false` (every prereq resolves).
- [ ] `validate_all.py` is green at unit count ≥ 200 (66 v0.x + ~135 v0.5).
- [ ] `pnpm build` clean, all unit pages render.
- [ ] Cross-strand cross-references work: a learner reading Strand A's Riemann-Roch can click through to Strand C's compact Riemann surface for the curve case.
- [ ] LM editorial review pass on each strand's Master tier catches no flagrant violations.
- [ ] No more than 2 units in the entire shipped DAG have `pending_prereqs: true`.

v0.5 fails if:

- Any strand stalls below 50% apex completion.
- Cross-strand references break (e.g., AG references a Strand C unit that was never produced).
- The Master-prose drift reappears (suggesting the rubric needs further tightening).
- The validator fails on more than 5 units after a strand reports.

## 11. Exit conditions

After v0.5 closes:

- **v1 launch readiness**: rendering polish (KaTeX + theme + tier filter UX), exercise interactivity (interactive widgets — Neutron-side work), RAG layer over `reference/`, reviewer attestation pass.
- **v0.6 lateral expansion**: 2–3 more strands beyond the v0.5 five (geometric quantization, number theory, advanced algebraic topology, etc.) — the same scaffold-driven pattern repeated.
- **Consolidation**: rubric evolution (v3 of docs/specs/QUALITY_RUBRIC.md); LM-editorial-writer agent review on all v0.5 Master prose; sourcing-acquisition pass to resolve TODO_REF placeholders.

The v0.5 plan's purpose is twofold: (1) bring Codex to Fast Track parity in modern-geometry breadth, (2) prove the lateral-expansion model works at scale.

---

*v0.5 Lateral Expansion Plan drafted 2026-04-28 immediately after Wave 5 closure. 5 strands, 2-session production split, ~145 new units, 2–3 week target window.*
