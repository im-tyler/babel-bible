# Spine 5 (operator-algebras) — collision-checked production plan

NEW section `content/39-operator-algebras` (section/field `operator-algebras`, prefix 39;
`source_curriculum: operator-algebras`). 33 units across 7 chapters, 7 dependency-level waves.
Greenfield: no operator-algebra theory existed. Cross-refs: topological K-theory 03.08.* (distinct
from operator K-theory), Atiyah-Singer 03.09.*, ALGEBRAIC cyclic homology 04.03.22 (39.07 is the
analytic version), functional analysis 02.11.*. Peers: 02.11.03/08, 01.01.13, 03.09.10.

## Dedup / collision resolution
- No id collisions — the 4 audits cleanly partition chapters: Davidson 39.01/02, Takesaki 39.03/04,
  Brown-Ozawa 39.05, Connes 39.06/07.
- Operator K-theory (39.02) is DISTINCT from topological K-theory (03.08) — cross-ref, don't dup.
- Analytic cyclic cohomology (39.07) cross-refs the algebraic SBI sequence at 04.03.22, doesn't redo it.
- Local index formula (39.06.06) cross-refs Atiyah-Singer 03.09.10 (commutative model).

## Master unit list
39.01 c-star-algebras-basics [Davidson]: 01 axioms/spectrum/continuous functional calculus · 02 commutative C*=C_0(X)/Gelfand duality · 03 states/GNS/Gelfand-Naimark · 04 Toeplitz/Cuntz algebras/extensions
39.02 af-algebras-k-theory [Davidson]: 01 AF algebras/Bratteli/irrational rotation A_θ · 02 operator K-theory K_0/K_1 · 03 six-term exact sequence/Bott/AF classification
39.03 von-neumann-algebras [Takesaki]: 01 bicommutant/operator topologies · 02 predual/normal states · 03 Kaplansky density · 04 comparison of projections/types I-II-III · 05 traces/dimension/II_1 factor
39.04 tomita-takesaki-modular [Takesaki]: 01 standard form/cyclic-separating vector · 02 Tomita's theorem (Δ,J) · 03 modular automorphism group/KMS · 04 Connes type III_λ classification (S/T-invariants)
39.05 nuclearity-exactness [Brown-Ozawa]: 01 CP maps/Stinespring · 02 operator systems/Arveson/Choi-Effros · 03 min/max tensor norms · 04 nuclearity/CPAP · 05 exactness/nuclear-embeddability · 06 amenable groups/Følner/Tarski · 07 group C*-algebras/amenability-nuclearity · 08 quasidiagonality · 09 group approx properties/Connes embedding
39.06 spectral-triples-ncg [Connes]: 01 spectral triples/reconstruction · 02 Connes distance formula · 03 Fredholm modules/index pairing · 04 noncommutative torus · 05 Dixmier trace/NC integral · 06 Connes-Moscovici local index formula
39.07 cyclic-cohomology [Connes]: 01 analytic cyclic cohomology/pairing with K-theory · 02 Chern character in K-homology

## Wave schedule (dependency levels — all frontmatter prereqs land before the wave that needs them)
- WAVE 1 (L0): 39.01.01, 39.05.06
- WAVE 2 (L1): 39.01.02, 39.03.01, 39.06.01
- WAVE 3 (L2): 39.01.03, 39.03.02, 39.03.03, 39.06.02, 39.06.05
- WAVE 4 (L3): 39.01.04, 39.02.01, 39.03.04, 39.04.01, 39.05.01
- WAVE 5 (L4): 39.02.02, 39.03.05, 39.04.02, 39.05.02, 39.05.03, 39.06.04
- WAVE 6 (L5): 39.02.03, 39.04.03, 39.05.04, 39.06.03, 39.07.01
- WAVE 7 (L6-L7): 39.04.04, 39.05.05, 39.05.07, 39.05.08, 39.06.06, 39.07.02, 39.05.09

## Status
- [x] W1  [ ] W2  [ ] W3  [ ] W4  [ ] W5  [ ] W6  [ ] W7  [ ] COMPLETENESS (loop-until-dry)
