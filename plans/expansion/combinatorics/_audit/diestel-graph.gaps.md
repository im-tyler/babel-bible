# Audit — Diestel, *Graph Theory* (5th ed.) vs live corpus

- **source_book:** `diestel2017` (Diestel, R., *Graph Theory*, 5th ed., GTM 173, Springer, 2017)
- **source_curriculum:** `combinatorics` (Spine 6)
- **spine owner of chapters:** 40.04 `graph-theory-core` (full), 40.05 `extremal-ramsey` (graph-theoretic share)
- **date:** 2026-06-06

## Corpus state (greenfield)

`content/40-combinatorics/` is a NEW section: every chapter dir holds only `.gitkeep`.
There is **no structural graph theory anywhere in the corpus**. The only graph-adjacent
unit is `25.02.01` *Data structures: arrays, trees, and graphs* (CS section, **algorithmic
data structures** — adjacency lists/matrices, BFS/DFS as ADTs; NOT structural graph theory:
no Menger, Hall, Tutte, Turán, colouring theory). Body greps for "Menger / Ramsey / Turán /
removal lemma" hit only Carl Menger (Austrian economics, ch. 23) and Frank Ramsey (optimal
taxation, ch. 23) — both irrelevant. So every Diestel headline below is a **genuine gap**.

Because this is greenfield, I scope a lean spine: the core invariants are **folded into one
fundamentals unit** rather than spread across many thin units (per scope-judgement guidance);
the deep theorems each get their own ~6000-word unit.

Frontmatter convention (matches `25.02.01`): `section: combinatorics`; `chapter:` = the
chapter dir slug minus numeric prefix (e.g. `graph-theory-core`, `extremal-ramsey`).

---

## GENUINE GAPS

### Chapter 40.04 `graph-theory-core`  (section: combinatorics · chapter: graph-theory-core)

#### 40.04.01 — Graphs, basic invariants, and the foundational lemmas
- **spec:** Graphs/multigraphs, degree and the handshake lemma, paths/cycles/trees and the
  characterizations of trees, bipartiteness ⟺ no odd cycle, the basic invariants
  (δ, Δ, average degree, girth, χ, α, ω, connectivity κ, edge-connectivity λ) and their
  elementary inequalities; sets up notation for the rest of the spine.
- **prereqs:** none (entry unit of the spine)
- **co-produced within-spine prereqs:** none
- **dependency level:** 0 (root)
- **diestel:** Ch. 1

#### 40.04.02 — Matchings I: König's theorem and Hall's marriage theorem
- **spec:** Augmenting paths and Berge's criterion; matchings in bipartite graphs —
  König's min-max (max matching = min vertex cover) and Hall's marriage condition, with the
  defect form and the equivalence/derivations between them.
- **prereqs:** 40.04.01
- **dependency level:** 1
- **diestel:** Ch. 2.1

#### 40.04.03 — Matchings II: Tutte's 1-factor theorem and the Tutte–Berge formula
- **spec:** Perfect matchings in general graphs — Tutte's odd-component (1-factor) theorem,
  the Tutte–Berge formula for the maximum matching size, Petersen's theorem on 3-regular
  bridgeless graphs as a corollary.
- **prereqs:** 40.04.01, 40.04.02
- **dependency level:** 2
- **diestel:** Ch. 2.2

#### 40.04.04 — Connectivity: Menger's theorem and the structure of 2- and 3-connected graphs
- **spec:** k-connectivity and k-edge-connectivity; Menger's theorem (vertex, edge, local,
  global, directed Fan-version); the global/Whitney edge form; ear decompositions of
  2-connected graphs; Tutte's wheel theorem / the structure of 3-connected graphs.
- **prereqs:** 40.04.01
- **dependency level:** 1
- **diestel:** Ch. 3

#### 40.04.05 — Planar graphs: Euler's formula, Kuratowski's and Wagner's theorems
- **spec:** Plane vs planar graphs, Euler's formula and the edge bound, K5 and K3,3 as
  obstructions; Kuratowski's theorem (topological minors) and Wagner's theorem (minors);
  planar duality, Whitney's theorem, and MacLane's planarity criterion (statements).
- **prereqs:** 40.04.01, 40.04.04
- **dependency level:** 2
- **diestel:** Ch. 4

#### 40.04.06 — Vertex colouring: greedy bounds, Brooks' theorem, the chromatic polynomial
- **spec:** Chromatic number, greedy/degeneracy bounds (χ ≤ Δ+1), Brooks' theorem; the
  chromatic polynomial via deletion–contraction and its combinatorial interpretation;
  perfect-graph framing as context (statement of the perfect graph theorem).
- **prereqs:** 40.04.01
- **dependency level:** 1
- **diestel:** Ch. 5.1–5.2

#### 40.04.07 — Edge and list colouring: Vizing's theorem and list-chromatic number
- **spec:** Edge-chromatic number, Vizing's theorem (χ′ ∈ {Δ, Δ+1}) with the fan/Kempe-chain
  proof and König's edge-colouring theorem for bipartite graphs; list colouring, the
  list-chromatic number, and the Galvin / Alon–Tarsi list-edge-colouring results (statements).
- **prereqs:** 40.04.06
- **dependency level:** 2
- **diestel:** Ch. 5.3–5.4

#### 40.04.08 — Map colouring: the five-colour theorem and the four-colour theorem
- **spec:** Proof of the five-colour theorem via Kempe chains; statement and discharging /
  reducible-configuration outline of the four-colour theorem (Appel–Haken, Robertson et al.);
  relation to planar duality and to the chromatic invariants of 40.04.05–06.
- **prereqs:** 40.04.05, 40.04.06
- **dependency level:** 3
- **diestel:** Ch. 5.1 (5-colour) + ch. 5/12 context (4-colour)

#### 40.04.09 — Flows: max-flow–min-cut and nowhere-zero flows
- **spec:** Network flows and the max-flow–min-cut theorem (Ford–Fulkerson), its equivalence
  to Menger; group-valued and k-flows, the flow polynomial, Tutte's duality of flows and
  colourings on planar graphs; statements of Tutte's 3-, 4-, 5-flow conjectures and
  Seymour's 6-flow theorem.
- **prereqs:** 40.04.01, 40.04.04
- **dependency level:** 2
- **diestel:** Ch. 6
- **note:** the max-flow–min-cut *algorithmics* live nowhere in corpus; this unit owns the
  structural/duality statement. Cross-ref 25.02.01 for the data-structure substrate only.

#### 40.04.10 — Graph minors and the Robertson–Seymour theorem
- **spec:** Minors, topological minors, tree-width and tree-decompositions, the grid /
  Erdős–Pósa-type structure; statement of the Graph Minor Theorem (graphs well-quasi-ordered
  under the minor relation) and its consequence (every minor-closed class has a finite
  obstruction set); Kuratowski–Wagner as the genus-0 instance.
- **prereqs:** 40.04.05
- **dependency level:** 3
- **diestel:** Ch. 12

---

### Chapter 40.05 `extremal-ramsey`  (section: combinatorics · chapter: extremal-ramsey)
**(graph-theoretic share — coordinate with the Alon–Spencer auditor who owns the
probabilistic-method / 40.07 angle; see collision note below)**

#### 40.05.01 — Extremal graph theory: Turán's theorem and Erdős–Stone–Simonovits
- **spec:** The Turán problem ex(n, H); Turán's theorem (the Turán graph maximizes edges
  with no K_{r+1}) with the Zykov-symmetrization and Motzkin–Straus proofs; the
  Erdős–Stone–Simonovits theorem fixing the asymptotic extremal density at
  (1 − 1/(χ(H)−1)); supersaturation as a corollary.
- **prereqs:** 40.04.01
- **dependency level:** 1
- **diestel:** Ch. 7.1–7.2

#### 40.05.02 — Bipartite extremal problems: the Kővári–Sós–Turán theorem
- **spec:** The degenerate / bipartite extremal regime where Erdős–Stone gives only o(n²);
  the Kővári–Sós–Turán bound ex(n, K_{s,t}) = O(n^{2−1/s}); the Zarankiewicz problem; matching
  constructions (incidence / norm graphs) for s = 2, 3; even-cycle bounds ex(n, C_{2k}).
- **prereqs:** 40.05.01
- **dependency level:** 2
- **diestel:** Ch. 7.1 + bipartite-extremal supplement

#### 40.05.03 — The Szemerédi regularity lemma and the triangle removal lemma
- **spec:** ε-regular pairs and the regularity partition; statement and proof of the
  regularity lemma; the counting/embedding lemma; the triangle removal lemma and its
  derivation of Roth's theorem on 3-APs as a flagship application.
- **prereqs:** 40.04.01, 40.05.01
- **dependency level:** 2
- **diestel:** Ch. 7.4–7.5

#### 40.05.04 — Ramsey theory for graphs: Ramsey's theorem and Ramsey numbers
- **spec:** Ramsey's theorem (finite and infinite), upper/lower bounds on R(s, t) via the
  Erdős–Szekeres recursion, induced and canonical Ramsey theorems; the diagonal/off-diagonal
  asymptotics as currently known (statements). The **probabilistic lower-bound** R(k,k) > 2^{k/2}
  is *attributed here but proved in the Alon–Spencer probabilistic-method unit* — cross-ref,
  do not reprove.
- **prereqs:** 40.04.01
- **dependency level:** 1
- **diestel:** Ch. 9
- **cross-ref:** Alon–Spencer probabilistic lower bound (40.07.xx) — see collision note.

---

## 40.05 / 40.07 COLLISION NOTE (for the Alon–Spencer auditor)

I (Diestel) propose these **40.05 graph-theoretic** units: **40.05.01 Turán/Erdős–Stone**,
**40.05.02 Kővári–Sós–Turán (bipartite)**, **40.05.03 regularity + removal lemma**,
**40.05.04 graph-Ramsey numbers**.

- The **probabilistic method** itself (first/second moment, Lovász Local Lemma, deletion,
  alteration, concentration) is **NOT** claimed here — it belongs to Alon–Spencer (40.07).
- The **probabilistic R(k,k) > 2^{k/2} lower bound** is *referenced* by my 40.05.04 but should
  be **owned and proved** in the Alon–Spencer 40.07 first-moment unit; 40.05.04 cross-refs it.
- The **probabilistic existence of high-girth high-chromatic graphs** (Erdős) and **random-graph
  threshold** results are Alon–Spencer/40.07 territory — not proposed here.
- If Alon–Spencer also proposes a regularity-lemma or removal-lemma unit, **40.05.03 should win**
  (it is the structural graph-theoretic home); A–S should instead own any *sparse-regularity /
  hypergraph-removal* or *property-testing* angle if desired.
- Spectral/expander material: I propose **no spectral unit** here. If one is created, scope it to
  the graph-theoretic Cheeger inequality / eigenvalue-interlacing side and coordinate with
  probability's random-matrix spine (37.08.x) — out of Diestel's core scope.

---

## COVERED (not gaps)

- **Adjacency lists/matrices, BFS/DFS, trees as a data structure** — `25.02.01`
  *Data structures: arrays, trees, and graphs* (algorithmic ADT view; complements, does not
  overlap, the structural units above).

## OUT OF SCOPE

- **Infinite graphs / the topological cycle space / end theory** (Diestel Ch. 8) — specialist
  apparatus with little theorem-level payoff for the curriculum; omit unless a later request.
- **Hamilton cycles (Chvátal–Erdős, Dirac, Ore)** (Diestel Ch. 10) — borderline; a single unit
  could be justified later, but it is a thinner topic than the above and is deferred to keep the
  core spine lean. Flag for the completeness re-audit rather than the first pass.
- **Sublinear / property-testing and algorithmic regularity** — belongs to CS/algorithms or the
  Alon–Spencer probabilistic spine, not Diestel's structural core.
- **The probabilistic method machinery** — owned by Alon–Spencer (40.07); see collision note.
