# Spine 6 (combinatorics) — collision-checked production plan

NEW section `content/40-combinatorics` (section/field `combinatorics`, prefix 40;
`source_curriculum: combinatorics`). 54 units across 8 chapters, 7 dependency waves.
Greenfield: no enumerative/graph/design/probabilistic-method/analytic combinatorics existed.

## Dedup / collision resolution
- No id collisions — the 6 audits partition chapters cleanly: Stanley EC1 → 40.01/40.02,
  Stanley EC2 → 40.03, Diestel → 40.04 + 40.05, van Lint-Wilson → 40.06, Alon-Spencer → 40.07,
  Flajolet-Sedgewick → 40.08.
- 40.05 (extremal/Ramsey) is owned by DIESTEL. Alon-Spencer keeps only the PROBABILISTIC
  lower-bound technique in 40.07; the probabilistic R(k,k) lower bound proved in 40.07.01 is
  cross-ref'd (not reproved) by Diestel's 40.05.04 Ramsey unit.
- ORPHAN FILL: matrix-tree theorem / Cayley's formula / Lagrange inversion (flagged absent by
  EC2 and Flajolet, owned by neither) → added as 40.01.07 in the enumeration chapter; it is the
  prereq Flajolet's 40.08.05 tree-asymptotics unit cross-refs.
- CROSS-SPINE prereqs (already shipped, do NOT reproduce): arithmetic Möbius 21.11.01 / partitions
  21.16.* (40.02.02, 40.01.06 cross-ref); Young tableaux/Specht/Schur-Weyl/Murnaghan-Nakayama
  07.05.* (40.03.* cross-ref the rep-theory side via the Frobenius map); finite fields 21.02.01,
  Burnside 01.02.03, association schemes/Bose-Mesner 07.05.06 (40.06.*); martingales 37.04.01,
  Borel-Cantelli 37.02.01, Chernoff/Cramér 37.07.02 (40.07.* cross-ref, scope to combinatorial
  application); complex analysis 06.01.* residues/Cauchy/Stirling (40.08.* APPLY, don't reprove).

## Master unit list
40.01 enumeration-generating-functions [Stanley EC1]: 01 twelvefold way/basic counting · 02 inclusion-exclusion & the sieve · 03 generating functions (OGF/EGF/exponential formula) · 04 rational GF/transfer-matrix/P-partitions · 05 permutation statistics (descents/major index/Eulerian) · 06 q-analogues/Gaussian binomials/combinatorial partitions · 07 trees/Cayley/matrix-tree/Lagrange inversion [orphan-fill]
40.02 posets-lattices [Stanley EC1]: 01 posets/lattices/distributive/Birkhoff · 02 incidence algebra/Möbius function/Möbius inversion · 03 Eulerian posets/face lattices/characteristic polynomial
40.03 symmetric-functions-rsk [Stanley EC2]: 01 ring of symmetric functions & bases · 02 Schur functions (SSYT/Jacobi-Trudi) · 03 Cauchy identity/Hall inner product · 04 RSK correspondence · 05 Littlewood-Richardson/jeu de taquin · 06 Frobenius characteristic map
40.04 graph-theory-core [Diestel]: 01 graphs/invariants/foundational lemmas · 02 matchings I (König/Hall) · 03 matchings II (Tutte/Tutte-Berge) · 04 connectivity (Menger) · 05 planar (Euler/Kuratowski/Wagner) · 06 vertex colouring (Brooks/chromatic poly) · 07 edge/list colouring (Vizing) · 08 map colouring (five/four-colour) · 09 flows (max-flow-min-cut/nowhere-zero) · 10 graph minors/Robertson-Seymour
40.05 extremal-ramsey [Diestel]: 01 Turán/Erdős-Stone-Simonovits · 02 Kővári-Sós-Turán (bipartite) · 03 Szemerédi regularity/removal lemma · 04 Ramsey's theorem/Ramsey numbers
40.06 design-coding-theory [van Lint-Wilson]: 01 BIBD/Fisher inequality · 02 symmetric designs/Bruck-Ryser-Chowla · 03 projective-affine planes/MOLS/36-officers · 04 Steiner systems · 05 Hadamard matrices/Paley · 06 linear codes/Hamming-Singleton-GV bounds · 07 perfect codes/Hamming/Golay · 08 cyclic codes/RS-RM-BCH/Assmus-Mattson · 09 strongly regular graphs/design-graph dictionary · 10 Pólya-Redfield/cycle index
40.07 probabilistic-method [Alon-Spencer]: 01 first-moment/basic method · 02 linearity of expectation/deletion · 03 second-moment/G(n,p) thresholds · 04 Lovász Local Lemma/Moser-Tardos · 05 concentration (Azuma/bounded-differences) · 06 entropy method/Shearer · 07 correlation inequalities (FKG/Harris/Janson)
40.08 analytic-combinatorics-asymptotics [Flajolet-Sedgewick]: 01 symbolic method unlabelled (OGF) · 02 symbolic method labelled (EGF) · 03 meromorphic coefficient asymptotics · 04 singularity analysis/transfer theorems · 05 tree-family asymptotics · 06 saddle-point method · 07 limit laws/quasi-powers

## Wave schedule (dependency levels — all in-spine frontmatter prereqs land before the wave that needs them)
- WAVE 1 (roots, no in-spine prereqs): 40.01.01, 40.04.01, 40.06.05, 40.06.06, 40.06.10, 40.07.01, 40.07.02
- WAVE 2 (L1): 40.01.02, 40.01.03, 40.02.01, 40.04.02, 40.04.04, 40.04.05, 40.04.06, 40.06.01, 40.06.07
- WAVE 3 (L2): 40.01.04, 40.01.05, 40.01.06, 40.01.07, 40.02.02, 40.04.03, 40.04.07, 40.04.09
- WAVE 4 (L2-L3): 40.04.08, 40.04.10, 40.05.01, 40.05.04, 40.06.02, 40.06.03, 40.06.04, 40.06.09
- WAVE 5 (L3): 40.02.03, 40.03.01, 40.05.02, 40.05.03, 40.06.08, 40.07.03, 40.07.05, 40.08.01, 40.08.02
- WAVE 6 (L4): 40.03.02, 40.07.04, 40.07.06, 40.08.03, 40.08.06
- WAVE 7 (L4-L5): 40.03.03, 40.03.04, 40.03.05, 40.03.06, 40.07.07, 40.08.04, 40.08.05, 40.08.07

## Status
- [x] W1  [x] W2  [x] W3  [ ] W4  [ ] W5  [ ] W6  [ ] W7  [ ] COMPLETENESS (loop-until-dry)
