# Spine 11 — Information & Coding Theory · PRODUCTION PLAN (collision-checked)

Section `content/46-information-theory` (prefix 46, NEW section, spine id `information-theory`).
Field: NEW `information-theory` (field_map order 17, domain `math`).
Section key for sections.ts: `information-theory`, domain `mathematics`, order 8.95.
Source books: Cover-Thomas 2006, MacWilliams-Sloane 1977 (+ Gallager 1968, Blahut 2003 as
supplementary references for channel coding and coding algorithms).

## SETUP CHECKLIST (complete before any production)
Run each step and verify before dispatching producers.

1. **Section dir**: `mkdir -p content/46-information-theory/{01-information-measures,02-source-coding,03-channel-capacity,04-information-statistics,05-side-information,06-network-information,07-algebraic-coding-advanced,08-modern-codes}`
2. **field_map.yaml**: add under `sections:` → `information-theory: { area: math, field: information-theory }`; add under `fields:` → `information-theory: { label: "Information Theory & Coding", order: 17 }`
3. **validate_unit.py**: add `"46": "math"` to `DOMAIN_BY_PREFIX` AND add `"46"` to `formal_gap_required` set (~line 461).
4. **sections.ts**: add `{ key: "information-theory", order: 8.95, label: "Information theory & coding", anchor: "information-theory", domain: "mathematics" }`
5. **lenses/information-theory.yaml**: create with `id: information-theory`, `label: Information Theory & Coding`, `seed: { field_in: [information-theory] }`, `group_by: field`
6. **Chapter skeleton**: `touch` placeholder files in each chapter dir (or just create dirs — integrate_unit.py handles file creation). The chapter dirs from step 1 are sufficient.
7. **Smoke-test**: `python3 scripts/build_lenses.py` — confirm 0 new dangling, `information-theory` lens appears.

## Collision check — existing coverage to CROSS-REF, not redo

**From 40-combinatorics / 06-design-coding-theory (avoid duplicating):**
- `40.06.06`: Linear codes, parity-check matrices, Hamming/Singleton/GV bounds → cross-ref; 46.07.01 extends with weight enumerators, not re-proves bounds
- `40.06.07`: Perfect codes (Hamming, Golay) → cross-ref; not reproduced
- `40.06.08`: Cyclic codes, BCH, Reed-Solomon, Reed-Muller → cross-ref; 46.07.03 extends to list decoding RS only

**From 37-probability (cross-ref, do not duplicate):**
- `37.02.01`: LLN → the AEP unit 46.02.01 rests on it; cite and cross-ref
- `37.07.02`: Cramér's theorem / Sanov's theorem → 46.04.03 (method of types) must cross-ref this as the large-deviations parent; present the information-theoretic angle without re-proving Cramér
- `37.07.06`: Donsker-Varadhan variational formula → cross-ref from KL divergence unit 46.01.02

**From 42-mathematical-logic:**
- `42.04.08`: Kolmogorov complexity and algorithmic randomness → 46.02.04 focuses on LZ and practical universal coding; if the topic of Kolmogorov complexity arises, cross-ref 42.04.08 and do not re-expose the recursion-theoretic depth

**From 45-mathematical-statistics:**
- `45.01.05`: Fisher information and Cramér-Rao → cross-ref from 46.04.04 (Fisher information / I-projection); do not re-derive Cramér-Rao
- `45.02.01`: Neyman-Pearson → cross-ref from 46.04.01 (Stein's lemma); the IT angle (exponent = KL) is new

## Peer units to match for quality

Dispatch producers with TWO peers:
- **Near-peer in the corpus**: `content/37-probability/07-large-deviations/37.07.02-cramers-theorem-legendre-fenchel.md` (analytic, formal, similar audience)
- **Algorithm-flavored peer**: `content/44-optimization-control/03-unconstrained-optimization/44.03.01-gradient-descent-convergence-rates.md`

Both are ~6500-7500 words, 27/27 passing, rigorous. Match their depth and Intermediate+ formalism.

## Unit list

### ch01 information-measures (5 units)
`46.01.01` Entropy, joint entropy, conditional entropy, and the chain rule
`46.01.02` Mutual information, KL divergence, and variational characterizations (Donsker-Varadhan)
`46.01.03` Information inequalities: log-sum inequality, subadditivity, and Pinsker's inequality
`46.01.04` Differential entropy, the maximum-entropy Gaussian, and the entropy-power inequality
`46.01.05` Entropy rates of stationary processes and the entropy of Markov chains

### ch02 source-coding (6 units)
`46.02.01` The asymptotic equipartition property (AEP) and strongly typical sequences
`46.02.02` Shannon's source coding theorem: optimal lossless rates and the Kraft inequality
`46.02.03` Huffman codes: construction, optimality, and the redundancy bound
`46.02.04` Arithmetic coding and Lempel-Ziv universal source coding
`46.02.05` Rate-distortion theory: the rate-distortion function R(D) and Shannon's lossy theorem
`46.02.06` The method of types and Sanov's theorem (information-theoretic formulation)

### ch03 channel-capacity (7 units)
`46.03.01` Discrete memoryless channels, mutual information maximization, and channel capacity
`46.03.02` Shannon's noisy channel coding theorem: achievability via random coding
`46.03.03` Fano's inequality and the converse to the channel coding theorem
`46.03.04` Binary symmetric channel and binary erasure channel: capacity and sphere-packing
`46.03.05` The Gaussian channel: capacity, bandwidth, and the water-filling allocation
`46.03.06` Feedback does not increase capacity: the Shannon and Wolfowitz results
`46.03.07` Joint source-channel coding and the separation theorem

### ch04 information-statistics (4 units)
`46.04.01` Hypothesis testing and Stein's lemma: the KL divergence as the error exponent
`46.04.02` Chernoff information and the symmetric Chernoff bound
`46.04.03` The method of types: large deviations for empirical distributions (IT perspective; cross-ref 37.07.02)
`46.04.04` The I-projection, Pythagorean identity, and iterative proportional fitting (Blahut-Arimoto)

### ch05 side-information (4 units)
`46.05.01` Slepian-Wolf coding: distributed lossless compression without a shared channel
`46.05.02` Wyner-Ziv coding: rate-distortion with side information at the decoder
`46.05.03` Gelfand-Pinsker theorem and Costa's dirty-paper coding
`46.05.04` Common information: Wyner's and Gács-Körner definitions and their operational meanings

### ch06 network-information (4 units)
`46.06.01` Multiple-access channel: achievable rates, superposition, and the capacity region
`46.06.02` Broadcast channel: degraded broadcast capacity and Marton's inner bound
`46.06.03` Relay channel: decode-and-forward, compress-and-forward, and the cut-set bound
`46.06.04` Interference channel: the Han-Kobayashi bound and the Gaussian interference channel

### ch07 algebraic-coding-advanced (4 units)
[All cross-ref 40.06.06-08 for linear code foundations; units here add what is absent there]
`46.07.01` Weight enumerators, the MacWilliams identity, and the linear-programming bound
`46.07.02` Algebraic geometry codes: the Goppa construction and the Tsfasman-Vladut-Zink bound
`46.07.03` List decoding: the Sudan and Guruswami-Sudan algorithms for Reed-Solomon codes
`46.07.04` Expander codes, LDPC bipartite graphs, and Sipser-Spielman linear-time decoding

### ch08 modern-codes (4 units)
`46.08.01` LDPC codes, Tanner graphs, belief propagation, and density evolution analysis
`46.08.02` Turbo codes: parallel concatenated convolutional codes and iterative decoding
`46.08.03` Polar codes: Arıkan's channel polarization phenomenon and successive cancellation
`46.08.04` Capacity-achieving code families: a unified view through polarization and LDPC

**Total: 38 units** (before completeness rounds)

## Dependency waves

The chapter structure is almost entirely the right dependency order; the waves below
handle the handful of cross-chapter dependencies.

- **W1 (8)**: 46.01.01, 46.01.02, 46.01.05, 46.02.01, 46.03.01, 46.04.01, 46.07.01, 46.08.01
  *(foundations and independent topics that rely only on 37.* prereqs)*
- **W2 (7)**: 46.01.03, 46.01.04, 46.02.02, 46.03.02, 46.04.02, 46.07.02, 46.08.02
  *(builds on W1 entropy/capacity definitions)*
- **W3 (7)**: 46.02.03, 46.02.06, 46.03.03, 46.03.04, 46.04.03, 46.07.03, 46.08.03
  *(needs source coding + channel converse)*
- **W4 (6)**: 46.02.04, 46.02.05, 46.03.05, 46.04.04, 46.07.04, 46.08.04
  *(needs AEP, Huffman, capacity)*
- **W5 (5)**: 46.03.06, 46.03.07, 46.05.01, 46.05.02, 46.06.01
  *(needs full channel capacity + R(D))*
- **W6 (5)**: 46.05.03, 46.05.04, 46.06.02, 46.06.03, 46.06.04
  *(needs Slepian-Wolf + network framework)*

## Prereq map (verified shipped cross-refs)

Every unit in this spine may prereq the following already-shipped units. Producers
choose the minimum relevant subset:
- probability `37.01.01` (probability spaces), `37.02.01` (LLN), `37.03.01` (CLT)
- large deviations `37.07.02` (Cramér/Sanov), `37.07.06` (Donsker-Varadhan)
- Markov chains `37.05.01`, `37.05.02`
- combinatorics/coding `40.06.06` (linear codes), `40.06.07` (perfect codes), `40.06.08` (cyclic codes)
- mathematical-statistics `45.01.05` (Fisher info), `45.02.01` (Neyman-Pearson)
- algorithmic randomness `42.04.08`
- convex optimization `44.02.01` (duality), `44.06.01` (proximal/iterative methods)
- linear algebra `01.01.01` (vector spaces), `01.01.03` (inner product spaces)

## Source_books frontmatter values

Every produced unit stamps `source_books` with one or more of:
- `cover-thomas-2006` (Cover & Thomas — Elements of Information Theory, 2nd ed.)
- `macwilliams-sloane-1977` (MacWilliams & Sloane — Theory of Error-Correcting Codes)
- `gallager-1968` (Gallager — Information Theory and Reliable Communication) [ch03 supplement]
- `blahut-2003` (Blahut — Algebraic Codes for Data Transmission) [ch07 supplement]

AND stamps `source_curriculum: information-theory`.
