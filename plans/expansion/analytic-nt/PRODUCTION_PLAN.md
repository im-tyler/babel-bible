# Spine 3 (analytic-nt) — collision-checked production plan

EXTENDS `content/21-number-theory` (section `number-theory`, field `number-theory`;
`source_curriculum: analytic-nt`). 26 units across chapters 21.11-21.16, 5 dependency-ordered
waves. Complex analysis lives in `06.01.*` (residues 06.01.03, analytic continuation 06.01.04,
gamma 06.01.15, zeta 06.01.16, argument principle 06.01.13, max-modulus 06.01.12). Existing
`21.03.*` (zeta/Dirichlet-L/characters/density) + `06.01.16` already prove the boundary
zero-free region & state PNT — gaps are the analytic PROOFS. Peers: 21.03.01, 21.03.02, 06.01.16.

## Dedup / collision resolution
- Perron's formula: Davenport(21.12.02) + MV(21.11.04) → ONE unit at 21.11.04 (general tool).
- 21.11.03 collision (MV summatory vs Apostol Chebyshev): MV's summatory/hyperbola MERGED into
  Apostol's 21.11.02 (average orders); 21.11.03 = Apostol Chebyshev/Bertrand/Mertens.
- 21.14.01 collision (MV large sieve vs IK Selberg sieve): MV keeps 21.14.01 (large sieve);
  IK's combinatorial/Selberg sieve → 21.14.04.
- Chebyshev θ/ψ split: elementary bounds+Mertens = 21.11.03 [Apostol]; the von Mangoldt /
  −ζ'/ζ analytic bridge = 21.12.01 [Davenport].

## Master unit list (id → title → book)
21.11 dirichlet-series-arithmetic-functions:
- 21.11.01 Arithmetic functions, Dirichlet convolution, Möbius inversion [Apostol]
- 21.11.02 Average orders & the summation toolkit (Abel/Euler-Maclaurin/hyperbola) [Apostol+MV]
- 21.11.03 Chebyshev θ/ψ bounds, Bertrand, Mertens [Apostol]
- 21.11.04 Perron's formula & Mellin inversion [Davenport+MV]
- 21.11.05 The Selberg-Delange method [MV]
21.12 prime-number-theorem:
- 21.12.01 Von Mangoldt Λ, ψ(x), and −ζ'/ζ [Davenport]
- 21.12.02 PNT via contour integration [Davenport]
- 21.12.03 Effective zero-free region for ζ and the error term [Davenport]
- 21.12.04 The Riemann-von Mangoldt explicit formula [Davenport]
21.13 dirichlet-l-functions-characters:
- 21.13.01 Zero-free regions for L(s,χ) & exceptional (Siegel) zeros [Davenport]
- 21.13.02 Siegel's theorem (lower bound for L(1,χ)) [Davenport]
- 21.13.03 PNT in arithmetic progressions / Siegel-Walfisz [Davenport]
- 21.13.04 The Polya-Vinogradov inequality [Davenport]
- 21.13.05 Approximate functional equation, analytic conductor, convexity bound [IK]
21.14 sieve-methods-large-sieve:
- 21.14.01 The large sieve inequality (+ Brun-Titchmarsh) [MV]
- 21.14.02 The Bombieri-Vinogradov theorem [MV]
- 21.14.03 Mean values of multiplicative functions (Halász-Wirsing) [MV]
- 21.14.04 Combinatorial sieve: Brun & Selberg [IK]
- 21.14.05 Kloosterman sums & the Kuznetsov spectral formula [IK]
21.15 exponential-sums:
- 21.15.01 Poisson & Voronoi summation [IK]
- 21.15.02 Weyl sums, Weyl differencing & equidistribution [IK]
- 21.15.03 van der Corput's method (A/B processes) [IK]
- 21.15.04 Gauss, Jacobi, Kloosterman & Salié sums; the Weil bound [IK]
- 21.15.05 The Vinogradov mean value theorem [IK]
21.16 partitions-circle-method:
- 21.16.01 The partition function, generating function, pentagonal number theorem [Apostol]
- 21.16.02 Hardy-Ramanujan-Rademacher asymptotics via the circle method [Apostol]

## Wave schedule (same-wave prereqs → Connections, not frontmatter)
- WAVE 1: 21.11.01, 21.11.04, 21.15.01, 21.15.04, 21.13.04, 21.13.05
- WAVE 2: 21.11.02, 21.11.05, 21.15.02, 21.16.01, 21.14.05, 21.11.03(→21.11.02 in Conn)
- WAVE 3: 21.14.01, 21.14.03, 21.15.03, 21.16.02, 21.12.01, 21.14.04
- WAVE 4: 21.12.02, 21.12.03, 21.15.05, 21.13.01(→21.12.03 in Conn)
- WAVE 5: 21.12.04, 21.13.02, 21.13.03(→21.13.02 in Conn), 21.14.02(→21.13.03 in Conn)

## Status
- [x] W1  [x] W2  [ ] W3  [ ] W4  [ ] W5  [ ] COMPLETENESS (loop-until-dry)
