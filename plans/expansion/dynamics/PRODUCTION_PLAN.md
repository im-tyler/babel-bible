# Spine 4 (dynamics) — collision-checked production plan

NEW section `content/38-dynamics` (section `dynamics`, field `dynamics`, prefix 38;
`source_curriculum: dynamics`). 23 units across 7 chapters, 4 dependency-ordered waves.
The ergodic theorems (Birkhoff/von Neumann/Kingman) are ALREADY at `37.02.03` — referenced,
never re-proposed. Prereqs: 02.12-ode, 02.01-topology, 02.07-measure, 02.11-functional, 03-diffgeo
(geodesic flows), 37.02.03. Peers: 37.02.03, 02.12-ode units, 21.15.02 (equidistribution).

## Dedup / collision resolution
- 38.01 topological dynamics: Brin-Stuck OWNS (5 units); K-H's rotation-number/Denjoy MERGED into
  38.01.05.
- 38.02 symbolic dynamics: Brin-Stuck owns; subshift topological entropy folded into 38.02.03
  (Perron-Frobenius growth rate); GENERAL topological entropy → 38.06.01.
- Entropy disambiguation: KS entropy (38.06.02) is of a TRANSFORMATION; distinct from Boltzmann/
  Gibbs (08.*/11.*) and relative entropy (37.07.06). Top. entropy 38.06.01.
- 38.03/38.07 (hyperbolicity, smooth ergodic): K-H owns. 38.04/05/06 (ergodic/mixing/entropy): Walters.

## Master unit list
38.01 topological-dynamics [Brin-Stuck]:
- 38.01.01 Dynamical systems, orbits, and limit sets
- 38.01.02 Minimality and recurrence
- 38.01.03 Topological transitivity, mixing, and Devaney chaos
- 38.01.04 Circle rotations and unique ergodicity
- 38.01.05 The Poincaré rotation number and Denjoy's theorem
38.02 symbolic-dynamics [Brin-Stuck]:
- 38.02.01 Shift spaces and subshifts
- 38.02.02 Shifts of finite type, transition matrices, and coding
- 38.02.03 Perron-Frobenius, SFT growth rate, and subshift entropy
38.03 hyperbolicity-structural-stability [Katok-Hasselblatt]:
- 38.03.01 Hyperbolic sets, Anosov & Axiom-A, Smale spectral decomposition
- 38.03.02 The Smale horseshoe and the Smale-Birkhoff homoclinic theorem
- 38.03.03 The Hadamard-Perron stable/unstable manifold theorem
- 38.03.04 Shadowing and structural stability
38.04 ergodic-theorems [Walters] (the theorems themselves are at 37.02.03):
- 38.04.01 Measure-preserving systems, Poincaré recurrence, and the Kac formula
- 38.04.02 Ergodicity, unique ergodicity, and equidistribution
38.05 mixing-spectral [Walters]:
- 38.05.01 The mixing hierarchy (mixing, weak mixing, ergodic)
- 38.05.02 Spectral theory of dynamical systems; Halmos-von Neumann
38.06 entropy [Walters + topological-entropy home]:
- 38.06.01 Topological entropy (Bowen / Adler-Konheim-McAndrew)
- 38.06.02 Kolmogorov-Sinai entropy and the generator theorem
- 38.06.03 The Shannon-McMillan-Breiman theorem
- 38.06.04 Topological pressure, the variational principle, and equilibrium states
38.07 smooth-ergodic-theory [Katok-Hasselblatt]:
- 38.07.01 The Oseledets multiplicative ergodic theorem and Lyapunov exponents
- 38.07.02 Pesin theory and the entropy formula (Margulis-Ruelle)
- 38.07.03 The Hopf argument for ergodicity of geodesic/Anosov flows

## Wave schedule (same-wave prereqs → Connections)
- WAVE 1: 38.01.01, 38.04.01
- WAVE 2: 38.01.02, 38.02.01, 38.04.02, 38.03.01, 38.06.02, 38.07.01
- WAVE 3: 38.01.03, 38.01.04, 38.02.02, 38.05.01, 38.03.03, 38.06.03, 38.07.02
- WAVE 4: 38.01.05, 38.02.03, 38.05.02, 38.03.02, 38.03.04, 38.06.01, 38.07.03, 38.06.04(→38.06.01 Conn)

## Status
- [x] W1  [x] W2  [ ] W3  [ ] W4  [ ] COMPLETENESS (loop-until-dry)
