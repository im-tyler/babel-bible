# Audit: Stanley — *Enumerative Combinatorics, Volume 1* (2nd ed.)

`source_book: stanley-ec1`
`source_curriculum: combinatorics`
`section: combinatorics` (new section `content/40-combinatorics/`)

Chapters owned by this book: `40.01 enumeration-generating-functions`,
`40.02 posets-lattices`. Both chapter dirs are currently empty scaffolds, so the
audit verifies each Stanley headline topic against the WHOLE live corpus (not just
section 40) to avoid duplicating material that lives in number theory, representation
theory, or stat-mech. The enumerative/algebraic-combinatorial core of EC1 is genuinely
absent from the corpus: the corpus carries the *analytic* partition theory (circle
method, pentagonal number theorem) in `21-number-theory`, the *arithmetic* Möbius
function in `21.11`, and *physics* transfer matrices in `08`/`11`, but none of these
states the combinatorial enumeration apparatus (twelvefold way, the poset Möbius
function and Möbius inversion, the exponential formula, the transfer-matrix *method* as
enumeration, permutation statistics, q-binomials, distributive lattices / Birkhoff,
Eulerian posets and characteristic polynomials). These are the genuine gaps below.

Cross-references are explicit so producers stamp them rather than re-deriving covered
material. Symmetric functions / RSK are deliberately left to the separate chapter
`40.03-symmetric-functions-rsk` (EC2 territory) and are NOT proposed here.

---

## GENUINE GAPS

### 40.01.01 — Basic counting and the twelvefold way
- **id:** `40.01.01`
- **title:** Basic counting and the twelvefold way
- **spec:** Sets, multisets, words, and the four sampling rules; binomial and multinomial coefficients and their identities; the Stirling numbers of the first and second kind and Bell numbers; Rota's twelvefold way as the unifying table of functions f: N→K counted up to symmetry on domain/codomain (injective/surjective/arbitrary × labeled/unlabeled). Stanley EC1 §1.1–§1.9.
- **prereqs:** none in-spine (L0). Cross-ref `00-precalc` binomial-theorem material if present.
- **chapter:** `01-enumeration-generating-functions` — `section: combinatorics`, `chapter: 01-enumeration-generating-functions`
- **level:** L0

### 40.01.02 — Sieve methods, inclusion–exclusion, and the permanent/derangement applications
- **id:** `40.01.02`
- **title:** Inclusion–exclusion, the sieve, and its enumerative applications
- **spec:** The inclusion–exclusion principle and its sign-reversing-involution proof; the general sieve / Bonferroni inequalities; derangements and the problème des ménages; permanents and the rook-polynomial / hit-polynomial reformulation; the principle as the prototype Möbius inversion on the boolean lattice (forward pointer to 40.02.02). Stanley EC1 §2.1–§2.4.
- **prereqs:** `40.01.01` (basic counting, binomials)
- **co-produced (in-spine):** forward-references `40.02.02` (poset Möbius function)
- **chapter:** `01-enumeration-generating-functions` — `section: combinatorics`, `chapter: 01-enumeration-generating-functions`
- **level:** L1
- **cross-ref:** the *analytic* sieve (Brun/Selberg) is `21.14.04`; this unit is the elementary/combinatorial sieve, distinct.

### 40.01.03 — Ordinary and exponential generating functions and the exponential formula
- **id:** `40.01.03`
- **title:** Generating functions: ordinary, exponential, and the exponential formula
- **spec:** The ring of formal power series and ordinary generating functions (sum/product/composition dictionary, Catalan and other classical sequences); exponential generating functions and the product/composition rules for labeled structures; the exponential formula relating the EGF of connected structures to that of all structures; the compositional and Lagrange inversion formulas. Stanley EC1 §1.1, §5.1–§5.5 (EGF core).
- **prereqs:** `40.01.01` (basic counting)
- **chapter:** `01-enumeration-generating-functions` — `section: combinatorics`, `chapter: 01-enumeration-generating-functions`
- **level:** L1
- **cross-ref:** the *analytic* partition generating function / pentagonal number theorem / circle method is `21.16.01`; this unit is the formal-power-series enumeration calculus, not the asymptotic/modular side.

### 40.01.04 — Rational generating functions, the transfer-matrix method, and P-partitions
- **id:** `40.01.04`
- **title:** Rational generating functions, the transfer-matrix method, and P-partitions
- **spec:** Linear recurrences and rational generating functions; the transfer-matrix method for counting walks/words in a digraph and the determinant formula for the generating function; lattice-path and tiling enumeration; the theory of P-partitions and the fundamental quasi-symmetric expansion; Stanley reciprocity for order polynomials. Stanley EC1 §4.1–§4.7, §3.15 (P-partitions).
- **prereqs:** `40.01.03` (generating functions), `40.02.01` (posets — for P-partitions)
- **chapter:** `01-enumeration-generating-functions` — `section: combinatorics`, `chapter: 01-enumeration-generating-functions`
- **level:** L2
- **cross-ref:** the *physics* transfer matrix (Ising/Onsager) is `08.03.02` / `11.06.01`; this is the combinatorial enumeration method, distinct.

### 40.01.05 — Permutation statistics: descents, the major index, and Eulerian polynomials
- **id:** `40.01.05`
- **title:** Permutation statistics: descents, major index, and the (q-)Eulerian polynomials
- **spec:** Descents, the descent set and major index, inversions; the equidistribution of inv and maj (MacMahon's theorem, Mahonian statistics); the Eulerian polynomials A_n(t) counting permutations by descents and their recurrence / exponential generating function; the q-Eulerian (maj-des) refinement and Carlitz's q-Eulerian polynomials; cycle structure and the Stirling/Eulerian connection. Stanley EC1 §1.3–§1.4.
- **prereqs:** `40.01.01` (basic counting), `40.01.03` (generating functions)
- **chapter:** `01-enumeration-generating-functions` — `section: combinatorics`, `chapter: 01-enumeration-generating-functions`
- **level:** L2

### 40.01.06 — q-analogues, Gaussian binomial coefficients, and the q-binomial theorem
- **id:** `40.01.06`
- **title:** q-analogues, Gaussian binomial coefficients, and the combinatorial theory of partitions
- **spec:** The q-integer/q-factorial, the Gaussian (q-)binomial coefficient and its lattice-path / subspace-counting interpretations; the q-binomial theorem and q-Vandermonde / q-Pascal recurrences; Young/Ferrers diagrams, conjugation, and partition bijections (distinct = odd parts, Durfee square) treated combinatorially; the Gaussian polynomial as generating function for partitions in a box; subspaces of F_q^n. Stanley EC1 §1.7–§1.8.
- **prereqs:** `40.01.01` (basic counting), `40.01.03` (generating functions)
- **chapter:** `01-enumeration-generating-functions` — `section: combinatorics`, `chapter: 01-enumeration-generating-functions`
- **level:** L2
- **cross-ref:** Young diagrams/tableaux in the rep-theory context are `07.05.02`; the analytic partition generating function and pentagonal/Jacobi-triple-product identities are `21.16.01`. This unit owns the *combinatorial* q-binomial / partition-bijection theory and cross-refs both.

### 40.02.01 — Posets, lattices, and Birkhoff's representation theorem
- **id:** `40.02.01`
- **title:** Posets, lattices, distributive lattices, and Birkhoff's theorem
- **spec:** Partial orders, Hasse diagrams, chains/antichains and Dilworth's / Mirsky's theorems; order ideals, the lattice J(P) of order ideals; lattices, modular and distributive lattices; the fundamental theorem of finite distributive lattices (Birkhoff: every finite distributive lattice is J(P) for a unique poset P of join-irreducibles); semimodular and geometric lattices. Stanley EC1 §3.1–§3.4, §3.9.
- **prereqs:** `40.01.01` (basic counting); set/relation basics from `01-foundations` if present.
- **chapter:** `02-posets-lattices` — `section: combinatorics`, `chapter: 02-posets-lattices`
- **level:** L1

### 40.02.02 — The incidence algebra, the Möbius function, and Möbius inversion
- **id:** `40.02.02`
- **title:** The incidence algebra, the Möbius function of a poset, and Möbius inversion
- **spec:** The incidence algebra of a locally finite poset, the zeta and Möbius functions, and the Möbius inversion formula; computation of μ for chains, boolean lattices (recovering inclusion–exclusion), divisor lattices (recovering the arithmetic μ), and the partition lattice; Weisner's theorem and the cross-cut/homology (order complex / Euler characteristic) interpretation of μ; product posets. Stanley EC1 §3.6–§3.10.
- **prereqs:** `40.02.01` (posets/lattices), `40.01.02` (inclusion–exclusion as the prototype)
- **chapter:** `02-posets-lattices` — `section: combinatorics`, `chapter: 02-posets-lattices`
- **level:** L2
- **cross-ref:** the *arithmetic* Möbius function / Dirichlet convolution is `21.11.01`; the divisor-lattice computation here recovers it as the special case and cross-refs it.

### 40.02.03 — Eulerian posets, face lattices, and the characteristic polynomial
- **id:** `40.02.03`
- **title:** Eulerian posets, face lattices, and the characteristic polynomial of a geometric lattice
- **spec:** Graded/ranked posets and the rank-generating function; Eulerian posets and the Eulerian relation (μ = (−1)^{rank}); face lattices of polytopes and the Euler–Poincaré / Dehn–Sommerville relations; the characteristic polynomial of a graded poset / geometric lattice, the Whitney numbers, and Whitney's theorem; the characteristic polynomial of a hyperplane arrangement and the finite-field method (region counting via Möbius). Stanley EC1 §3.11–§3.14.
- **prereqs:** `40.02.02` (Möbius function), `40.02.01` (lattices)
- **chapter:** `02-posets-lattices` — `section: combinatorics`, `chapter: 02-posets-lattices`
- **level:** L3

---

## COVERED (not gaps)

- **Arithmetic Möbius function, Dirichlet convolution, Möbius inversion over divisors** — `21.11.01`. The *poset* Möbius function (gap `40.02.02`) generalizes it; the divisor-lattice case recovers it and is cross-referenced, not duplicated.
- **The partition function p(n), its analytic generating function, the pentagonal number theorem, Jacobi triple product, circle-method asymptotics** — `21.16.01`. The *combinatorial* q-binomial / partition-bijection theory (gap `40.01.06`) is disjoint and cross-refs the analytic side.
- **Brun / Selberg analytic sieve** — `21.14.04`. The elementary combinatorial inclusion–exclusion / sieve (gap `40.01.02`) is the prototype, distinct from the number-theoretic sieve.
- **Young diagrams and tableaux (representation-theoretic)** — `07.05.02`; broader RSK / symmetric-function machinery (`07.05.07`, `07.05.10`, `07.05.11`, `07.05.13`) lives in rep theory and is the planned home of the separate chapter `40.03-symmetric-functions-rsk` — not audited or duplicated here.
- **Transfer matrix (physics: Ising / Onsager / hard hexagon)** — `08.03.02`, `08.13.05`, `08.13.07`, `11.06.01`. The combinatorial transfer-matrix *method* for word/walk enumeration (gap `40.01.04`) is distinct.
- **Perron–Frobenius / transition-matrix growth for subshifts of finite type** — `38.02.02`, `38.02.03`. Related linear algebra, but the enumerative generating-function packaging is the gap `40.01.04`.

## OUT OF SCOPE

- **Combinatorial species (Joyal) as a category-theoretic apparatus** — Stanley EC1 treats the exponential formula / labeled-structure calculus directly (folded into gap `40.01.03`) rather than the full species formalism; the categorical species machinery (Bergeron–Labelle–Leroux) is a separate apparatus with limited theorem-level payoff at this tier and is not proposed as its own unit.
- **Basic graph definitions / spanning-tree and matching theory** — belong to the Diestel chapter `40.04-graph-theory-core`, not to EC1's enumeration/poset chapters.
- **Catalan-number "exercise zoo"** — the 200+ Catalan interpretations are exercise/appendix material, not a standalone theorem-level unit; the Catalan generating function itself is folded into gap `40.01.03`.
