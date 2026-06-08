# Spine 12 — Theoretical Computer Science · PRODUCTION PLAN (collision-checked)

Section `content/47-theoretical-cs` (prefix 47, NEW section, spine id `theoretical-cs`).
Field: NEW `theoretical-cs` (field_map order 18, domain `other` / computing).
Section key for sections.ts: `theoretical-cs`, domain `computing`, order 19.95.
Source books: Sipser 2013, Arora-Barak 2009, Cormen et al. (CLRS) 2022.

## SETUP CHECKLIST (complete before any production)

1. **Section dir**: `mkdir -p content/47-theoretical-cs/{01-formal-languages,02-complexity-fundamentals,03-advanced-complexity,04-algorithms-analysis,05-randomized-algorithms,06-cryptographic-foundations}`
2. **field_map.yaml**: add under `sections:` → `theoretical-cs: { area: other, field: theoretical-cs }`; add under `fields:` → `theoretical-cs: { label: "Theoretical Computer Science", order: 18 }`
3. **validate_unit.py**: add `"47": "other"` to `DOMAIN_BY_PREFIX` AND add `"47"` to `formal_gap_required` set (the complexity + automata results are Lean-formalizable; units still use `lean_status: none` with a substantive gap note).
4. **sections.ts**: add `{ key: "theoretical-cs", order: 19.95, label: "Theoretical computer science", anchor: "theoretical-cs", domain: "computing" }`
5. **lenses/theoretical-cs.yaml**: create with `id: theoretical-cs`, `label: Theoretical Computer Science`, `seed: { field_in: [theoretical-cs] }`, `group_by: field`
6. **Smoke-test**: `python3 scripts/build_lenses.py` — confirm 0 dangling, lens appears.

## Collision check — existing coverage to CROSS-REF, not redo

**From 42-mathematical-logic / 04-computability-degrees (FULLY COVERED — do not duplicate):**
All of the following are shipped and authoritative for computability. Cross-ref them:
- `42.04.01`: Models of computation, Church-Turing thesis → the TM model Spine 12 uses
- `42.04.02`: Halting problem and undecidability → standard reductions starting point
- `42.04.03-07`: CE sets, Turing reducibility, arithmetical hierarchy, priority method
- `42.04.08`: Kolmogorov complexity → if raised in 47.03, cross-ref do not re-expose

**IMPORTANT NOTE for Sipser content**: Sipser Ch.3-6 (decidability, reducibility, recursion theorem) is already covered in 42.04.01-07. Skip those chapters; produce only content that is genuinely NEW:
- Sipser Ch.1-2: finite automata, context-free grammars → fully new (Chapter 01 here)
- Sipser Ch.7-9: time/space complexity classes → new; TMs used are already in 42.04.01

**From 25-computer-science (survey level — go deeper but cross-ref):**
- `25.03.01`: Algorithmic complexity and Big-O notation → cross-ref; 47.02 goes to P/NP proofs
- `25.02.01`: Data structures survey → cross-ref; 47.04 covers amortized analysis and advanced structures

**From 21-number-theory / 01-elementary:**
- `21.01.01`: Euclidean algorithm → prereq for RSA unit 47.06.02; do not re-prove
- `21.01.03`: CRT and ring structure → prereq for modular arithmetic in 47.06
- `21.01.04`: Fermat/Euler/Wilson → prereq for primality and RSA

**From 40-combinatorics:**
- `40.04.*`: Graph theory (connectivity, matchings) → cross-ref from network flow unit 47.04.03
- `40.07.01`: Probabilistic method → cross-ref from randomized algorithms 47.05.*

## Peer units to match for quality

Dispatch producers with TWO peers:
- **Logic/theory peer**: `content/42-mathematical-logic/04-computability-degrees/42.04.02-halting-problem-undecidability-recursion-theorem.md` (rigorous formal, similar complexity-theory flavor)
- **Algorithms peer**: `content/44-optimization-control/03-unconstrained-optimization/44.03.01-gradient-descent-convergence-rates.md` (algorithmic rigor, proof-with-analysis style)

Both are ~6500-7500 words, 27/27 passing. For ch04 (algorithms) match the analysis depth of CLRS proofs — every claim should have a proof or a cited theorem, not just an assertion.

## Unit list

### ch01 formal-languages-automata (6 units)
`47.01.01` Deterministic finite automata: states, transitions, and accepted languages
`47.01.02` Nondeterministic finite automata and the subset construction (NFA = DFA)
`47.01.03` Regular expressions and the Kleene-Rabin-Scott theorem (DFA = regex)
`47.01.04` Pumping lemma for regular languages and non-regular languages
`47.01.05` Context-free grammars, parse trees, and pushdown automata (CFG = PDA)
`47.01.06` Pumping lemma for context-free languages and the CYK parsing algorithm

### ch02 complexity-fundamentals (7 units)
`47.02.01` Time-complexity classes P and NP: definitions, polynomial reductions
`47.02.02` NP-completeness: Cook-Levin theorem (SAT is NP-complete)
`47.02.03` Classic NP-complete problems: 3-SAT, vertex cover, Hamiltonian path, TSP, graph coloring
`47.02.04` Polynomial hierarchy: Σₚ, Πₚ, Δₚ, oracles, and oracle collapses
`47.02.05` Space complexity: PSPACE, Savitch's theorem, and PSPACE-completeness (TQBF)
`47.02.06` L, NL, and the Immerman-Szelepcsényi theorem (NL = coNL)
`47.02.07` #P and counting complexity: permanent, Toda's theorem (#P-hardness)

### ch03 advanced-complexity (6 units)
`47.03.01` Randomized complexity: BPP, RP, ZPP, and the Schwartz-Zippel lemma
`47.03.02` Circuit complexity: P/poly, the Karp-Lipton theorem (if NP ⊆ P/poly, PH collapses)
`47.03.03` AC⁰ and TC⁰: parity lower bounds (Håstad's switching lemma), majority in TC⁰
`47.03.04` Interactive proofs: IP = PSPACE (Shamir's theorem)
`47.03.05` Probabilistically checkable proofs (PCP theorem) and the PCP characterization of NP
`47.03.06` Hardness of approximation: inapproximability of MAX-3-SAT and vertex cover from PCP

### ch04 algorithms-analysis (8 units)
`47.04.01` Amortized analysis: aggregate, accounting (tokens), and potential-function methods
`47.04.02` Self-balancing trees: red-black trees, rotations, and O(log n) amortized bounds
`47.04.03` Network flow: the Ford-Fulkerson method and the max-flow min-cut theorem
`47.04.04` Bipartite matching: Hall's theorem, the augmenting-path characterization, and Hungarian method
`47.04.05` All-pairs shortest paths: Floyd-Warshall (DP), Johnson's (reweighting), and Bellman-Ford
`47.04.06` Minimum spanning trees in depth: Kruskal's (union-find), Prim's (Fibonacci heap)
`47.04.07` String algorithms: the KMP failure function, suffix arrays, and Aho-Corasick automata
`47.04.08` Approximation algorithms: vertex cover (2-approx), metric TSP (Christofides), set cover (ln n)

### ch05 randomized-algorithms (5 units)
`47.05.01` Universal hashing, perfect hashing, and load-balancing analysis
`47.05.02` Randomized algorithms in practice: quicksort analysis, skip lists, and treaps
`47.05.03` Miller-Rabin primality and the Solovay-Strassen test
`47.05.04` Randomized approximation: FPRAS for counting problems (#DNF) and importance sampling
`47.05.05` Derandomization: pairwise-independent hashing, expander graphs, and the method of conditional expectations

### ch06 cryptographic-foundations (4 units)
`47.06.01` One-way functions, pseudorandom generators, and the hardness assumption
`47.06.02` Public-key cryptography: RSA, discrete logarithm, and security reductions
`47.06.03` Zero-knowledge proofs: interactive and non-interactive protocols, graph isomorphism
`47.06.04` Digital signatures, collision-resistant hash functions, and the random oracle model

**Total: 36 units** (before completeness rounds)

## Dependency waves

- **W1 (7)**: 47.01.01, 47.01.03, 47.02.01, 47.03.01, 47.04.01, 47.04.03, 47.05.01
  *(independent foundations: DFA, regex, P/NP def, BPP, amortized, flow, hashing)*
- **W2 (7)**: 47.01.02, 47.01.05, 47.02.02, 47.03.02, 47.04.02, 47.04.05, 47.05.02
  *(NFA, CFG, Cook-Levin, circuit complexity, balanced trees, APSP, randomized DS)*
- **W3 (7)**: 47.01.04, 47.01.06, 47.02.03, 47.02.04, 47.03.03, 47.04.04, 47.05.03
  *(pumping lemmas, NP-hard problems, PH, AC⁰, matching, Miller-Rabin)*
- **W4 (6)**: 47.02.05, 47.02.06, 47.02.07, 47.03.04, 47.04.06, 47.04.07
  *(PSPACE/L/NL, #P, IP, MST, string algorithms)*
- **W5 (5)**: 47.03.05, 47.03.06, 47.04.08, 47.05.04, 47.06.01
  *(PCP, hardness of approx, approx algorithms, FPRAS, OWF)*
- **W6 (4)**: 47.05.05, 47.06.02, 47.06.03, 47.06.04
  *(derandomization, RSA, ZK proofs, signatures)*

## Prereq map (verified shipped cross-refs)

- computability `42.04.01` (Church-Turing; use as the TM model, not re-introducing TMs), `42.04.02` (halting/undecidability)
- logic `42.01.09` (Gödel incompleteness; cross-ref from Cook-Levin context if needed)
- combinatorics `40.04.01-04` (graph theory: connectivity, coloring, matchings), `40.07.01` (probabilistic method)
- number theory `21.01.01` (Euclidean algorithm), `21.01.03` (CRT), `21.01.04` (Fermat/Euler), `21.01.05` (primitive roots)
- probability `37.01.01` (probability spaces), `37.02.01` (LLN for randomized analysis)
- statistics `45.07.01` (PAC learning; cross-ref from complexity of learning)
- CS survey `25.03.01` (Big-O notation; this is the intro-level anchor)

## Source_books frontmatter values

Every produced unit stamps `source_books` with one or more of:
- `sipser-2013` (Sipser — Introduction to the Theory of Computation, 3rd ed.)
- `arora-barak-2009` (Arora & Barak — Computational Complexity: A Modern Approach)
- `clrs-2022` (Cormen, Leiserson, Rivest & Stein — Introduction to Algorithms, 4th ed.)

AND stamps `source_curriculum: theoretical-cs`.

## Critical notes for producers

1. **Do NOT re-introduce Turing machines**. The TM model is defined in `42.04.01`. Every
   Spine 12 unit that needs TMs should say "a Turing machine (as defined in [42.04.01])" and
   move on. Do not re-derive the Church-Turing thesis.

2. **Formal languages are genuinely new**. Ch.01 (DFA/NFA/CFG/PDA) has ZERO corpus overlap;
   do not search for cross-refs in ch01 other than using 25.03.01 as the survey anchor.

3. **Algorithm units require asymptotic proofs**. Every algorithm in ch04 must carry a complete
   worst-case (or amortized) analysis with a matching proof or cited theorem, not just an
   assertion of O(...). Match CLRS chapter-proof style.

4. **Crypto units**: reference `21.01.04` (Fermat/Euler) and `21.01.01` (GCD) as prereqs;
   do not re-prove modular arithmetic. Focus on the security reduction argument (what hardness
   assumption makes RSA/DLP hard).
