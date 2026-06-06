# Audit — van Lint & Wilson, *A Course in Combinatorics* (2nd ed., Cambridge 2001)

- **source_book:** `vanlint-wilson`
- **source_curriculum:** `combinatorics`
- **target chapter:** `content/40-combinatorics/06-design-coding-theory/`
  (frontmatter `section: combinatorics`; `chapter: design-coding-theory`; id format `40.06.NN`)
- **date:** 2026-06-06
- **ownership:** this audit owns chapter **40.06** (designs, codes, finite geometry, Pólya
  enumeration). Sibling audits in the same spine own 40.01 (enumeration/GF), 40.02
  (posets/lattices), 40.03 (symmetric functions/RSK), 40.04 (graph-theory core), 40.05
  (extremal/Ramsey), 40.07 (probabilistic method), 40.08 (analytic combinatorics).

## Verdict

Section `40-combinatorics` is a **freshly scaffolded, empty** chapter set — all eight chapter
dirs `01-enumeration-generating-functions … 08-analytic-combinatorics-asymptotics` contain only
`.gitkeep`. There is therefore **no existing combinatorial-design or coding-theory unit anywhere
in `content/`**. The genuine-gap question reduces to: which prerequisites does van Lint–Wilson's
design/code/finite-geometry material already have a home for elsewhere (to be **cross-referenced,
not reproved**), and which headline theorems are genuinely new?

Cross-spine homes confirmed by grep (reused as prereqs, **never reproposed**):

- **Finite fields** `\mathbb F_q`: `21.02.01` (*Finite fields: structure and squares*) — existence
  and uniqueness as the splitting field of `X^q - X`, cyclicity of `\mathbb F_q^\times`, the
  primitive element, Frobenius, and the index-two subgroup of squares for odd `q`. This is the
  finite-field engine for every construction below; **not reproved.**
- **Quadratic residues / Legendre symbol** `21.01.06`, **quadratic reciprocity** `21.01.07` /
  `21.02.02` (via Gauss sums) — the arithmetic behind the **Paley construction** of Hadamard
  matrices and conference matrices. Cross-ref, not reproved.
- **Group actions / orbit-stabiliser / Burnside (Cauchy–Frobenius) lemma** `01.02.03` — this unit
  **already states and proves Burnside's orbit-counting lemma** (its Theorem 1 / Proposition 1).
  The Pólya unit below therefore takes Burnside as a *cited prerequisite* and builds only the
  **cycle-index / weighted pattern-inventory** superstructure on top; it does **not** reprove the
  orbit-counting lemma or the group-action basics.
- **Association schemes & the Bose–Mesner algebra** `07.05.06` (rep-theory spine) — already covers
  the **Hamming and Johnson schemes**, **Krawtchouk/Hahn polynomials**, the eigenmatrices `P,Q`,
  and **Delsarte's LP bound** on codes. The SRG/association-scheme unit below is scoped to the
  **graph-combinatorial** object (strongly regular graphs, their eigenvalue/parameter feasibility,
  and the *design ↔ graph* dictionary) and **cross-refs** `07.05.06` for the Bose–Mesner /
  Delsarte-LP machinery rather than duplicating it.
- **Linear algebra over a field** `01.01.04` (subspace/basis/dimension), `01.01.06` (linear
  systems / rank), `01.01.01` (field) — the ambient vector-space language for linear codes and
  incidence matrices. Cross-ref.

**Information-theory disambiguation.** A corpus grep for `shannon | channel capacity | mutual
information | huffman | noiseless coding` finds **no information-theory unit** in `content/`
(matches are thermodynamic/relative entropy `37.07.06`, `08.*`, or unrelated prose). The Cover–
Thomas / MacWilliams–Sloane information-theory spine is **separately backlogged (Spine 11, not
started)**. Accordingly the coding units below own the **algebraic / combinatorial** coding side
(linear codes, bounds as *packing* statements, perfect codes, the design–code–graph triangle) and
state Shannon's noisy-channel theorem only as a **one-line pointer** to that future spine — they do
not develop channel capacity. No duplication risk exists today.

**Prereq convention.** Ids of the form `40.06.NN` other than a unit's own are **planned sibling
units defined in this same audit**; they are listed as prereqs so the producer can wire the DAG
once siblings land (co-produced within-spine prereqs are flagged "(within-spine)").

---

## GENUINE GAPS

### 40.06.01 — Balanced incomplete block designs, incidence matrices, and Fisher's inequality
- **spec:** Define a **`2-(v,k,\lambda)` design (BIBD)**: a `v`-point set with `b` blocks of size
  `k` such that every pair of points lies in exactly `\lambda` blocks. Derive the **counting
  identities** `r(k-1)=\lambda(v-1)` and `bk=vr`, build the **point–block incidence matrix** `N`
  with `NN^{\top}=(r-\lambda)I+\lambda J`, compute `\det(NN^{\top})=(r-\lambda)^{k-1}rk`, and prove
  **Fisher's inequality** `b\ge v` (equivalently `r\ge k`) via the nonsingularity of `NN^{\top}`.
  Worked small designs (the Fano `2-(7,3,1)`, `2-(11,5,2)` biplane) and the resolvable/`t`-design
  generalisation as a pointer.
- **prereqs:** `01.01.06` (rank/linear systems), `01.01.04` (dimension), `01.01.01` (field)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 1 (anchor unit, no within-spine prereq)

### 40.06.02 — Symmetric designs and the Bruck–Ryser–Chowla theorem
- **spec:** **Symmetric `2-(v,k,\lambda)` designs** (`b=v`): prove any two blocks meet in exactly
  `\lambda` points, that `N` is then a square matrix with `N N^{\top}=N^{\top}N=(k-\lambda)I+\lambda
  J`, and develop the **parameter `k-\lambda=n` (order)**. State and prove (rational-congruence /
  Hasse–Minkowski-style argument over `\mathbb Q`) the **Bruck–Ryser–Chowla theorem**: necessary
  number-theoretic conditions for existence (for `v` even, `n` is a perfect square; for `v` odd,
  the equation `z^2=n x^2+(-1)^{(v-1)/2}\lambda y^2` has a nontrivial integer solution). Apply it to
  rule out a projective plane of order 6.
- **prereqs:** `40.06.01` (within-spine), `21.01.06` (Legendre symbol), `21.02.01` (finite fields),
  `21.02.02`/`21.01.07` (quadratic reciprocity / Hilbert-symbol input)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 2

### 40.06.03 — Finite projective and affine planes, MOLS, and the Euler 36-officers problem
- **spec:** **Finite projective planes** as symmetric `2-(n^2+n+1,n+1,1)` designs and their
  axiomatic point/line duality; **affine planes** `2-(n^2,n,1)` and the projective↔affine
  completion. The **`\mathrm{PG}(2,q)` / `\mathrm{AG}(2,q)` coordinate construction** over a finite
  field (existence for every prime-power order). **Latin squares** and **mutually orthogonal Latin
  squares (MOLS)**: the bound `N(n)\le n-1`, the **equivalence "a complete set of `n-1` MOLS exists
  ⇔ a projective/affine plane of order `n` exists,"** and the field construction giving `n-1` MOLS
  for prime-power `n`. State **Euler's 36-officers conjecture** and its resolution (no two MOLS of
  order 6; Bose–Shrikhande–Parker: MOLS exist for all `n\ne 2,6`).
- **prereqs:** `40.06.01` (within-spine), `40.06.02` (within-spine — symmetric-design / order
  language and BRC nonexistence at `n=6`), `21.02.01` (finite fields)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 3

### 40.06.04 — Steiner systems, the Steiner triple systems, and the existence theorem
- **spec:** **Steiner systems `S(t,k,v)`** as `t`-designs with `\lambda=1`. Focus on **Steiner
  triple systems `STS(v)=S(2,3,v)`**: the divisibility necessary condition `v\equiv 1,3\pmod 6`,
  and the **Kirkman/Bose–Skolem existence theorem** that it is also sufficient (the Bose
  construction for `v\equiv3` and the Skolem construction for `v\equiv1\pmod6`). Worked Fano
  `STS(7)` and `STS(9)=AG(2,3)`; a pointer to **Kirkman's schoolgirl problem** (resolvable
  `STS(15)`) and to the large Steiner systems `S(5,6,12)`, `S(5,8,24)` that anchor the Golay codes
  in `40.06.07`.
- **prereqs:** `40.06.01` (within-spine), `40.06.03` (within-spine — `AG(2,3)` model)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 4

### 40.06.05 — Hadamard matrices, the Paley construction, and Hadamard designs
- **spec:** **Hadamard matrices** `H H^{\top}=nI`, the **order divisibility** `n\in\{1,2\}` or
  `4\mid n`, normalisation, and the **Kronecker/Sylvester doubling** construction. The **Paley
  construction** from the quadratic-residue (Jacobsthal) matrix over `\mathbb F_q` for `q\equiv3
  \pmod4` (and the conference-matrix variant for `q\equiv1`). The **equivalence Hadamard matrix of
  order `4t` ⇔ Hadamard `2-(4t-1,2t-1,t-1)` design** (and the `3-(4t,2t,t-1)` extension), tying
  Hadamard matrices back to symmetric designs. The **Hadamard conjecture** as an open frontier
  pointer.
- **prereqs:** `40.06.02` (within-spine — symmetric/Hadamard design link), `21.01.06`
  (quadratic residues / Legendre symbol), `21.02.01` (finite fields)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 3

### 40.06.06 — Linear codes: generator/parity-check matrices and the Hamming, Singleton, and Gilbert–Varshamov bounds
- **spec:** **Linear `[n,k,d]` codes over `\mathbb F_q`** as subspaces; **generator** and
  **parity-check** matrices, **dual code**, the **minimum distance = minimum weight** identity and
  its read-off from `H` (smallest number of dependent columns). The packing/covering bounds:
  **Singleton** `d\le n-k+1` (and **MDS** codes meeting it, e.g. Reed–Solomon as a pointer to
  `40.06.08`), the **Hamming/sphere-packing** bound, and the existence-side **Gilbert–Varshamov**
  bound. **Syndrome decoding**. One-line pointer to Shannon's noisy-channel theorem as the
  information-theory companion (Spine 11, not yet built) — this unit owns the *algebraic/packing*
  side only.
- **prereqs:** `01.01.04` (subspace/basis/dimension), `01.01.06` (rank, linear systems),
  `21.02.01` (finite fields)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 2

### 40.06.07 — Perfect codes: the Hamming codes, the Golay codes, and the Lloyd/van Lint–Tietäväinen theorem
- **spec:** **Perfect codes** (sphere-packing bound met with equality). Construct the **Hamming
  `[ (q^m-1)/(q-1), \, \cdot, \, 3]` codes** from all distinct projective columns and their
  single-error-correcting perfectness; the **binary/ternary Golay codes** `[23,12,7]` and
  `[11,6,5]`, their perfectness, and the **Steiner systems they carry** (`S(4,7,23)`,
  `S(5,6,12)`) — the cleanest instance of the code→design arrow. State the **classification of
  perfect codes** (Lloyd's theorem and the van Lint–Tietäväinen result: the only nontrivial
  perfect codes over `\mathbb F_q` are the Hamming-parameter and the two Golay codes).
- **prereqs:** `40.06.06` (within-spine), `40.06.04` (within-spine — Steiner systems carried by the
  Golay codes), `21.02.01` (finite fields)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 5

### 40.06.08 — Cyclic codes, Reed–Solomon/Reed–Muller/BCH, and the Assmus–Mattson design–code–graph triangle
- **spec:** **Cyclic codes** as ideals of `\mathbb F_q[x]/(x^n-1)`: generator polynomial, roots /
  defining set, and the **BCH bound** on minimum distance. **Reed–Solomon** codes (evaluation /
  MDS), **BCH** codes, and the **Reed–Muller** family (incl. the binary `\mathrm{RM}` recursion and
  its relation to affine geometry `AG(m,2)`). Close the **design–code–graph triangle**: the
  **Assmus–Mattson theorem** (the weight classes of a code whose dual has few weights support a
  `t`-design), illustrated on the Golay codes; cross-ref the **Delsarte LP bound / Bose–Mesner**
  algebraic-combinatorics view in `07.05.06`.
- **prereqs:** `40.06.06` (within-spine), `40.06.07` (within-spine — Golay illustration),
  `01.02.07` (polynomial ring / PID — ideals of `\mathbb F_q[x]`), `21.02.01` (finite fields),
  `07.05.06` (Bose–Mesner / Delsarte, cross-ref)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 6

### 40.06.09 — Strongly regular graphs, the design–graph dictionary, and integrality (feasibility) conditions
- **spec:** **Strongly regular graphs `srg(n,k,\lambda,\mu)`**: adjacency-matrix identity
  `A^2=kI+\lambda A+\mu(J-I-A)`, the **eigenvalues `r,s`** from the quadratic, multiplicity
  formulas, and the **integrality / feasibility conditions** (multiplicities must be nonnegative
  integers; the "half case"). The **design↔graph dictionary**: SRGs from symmetric designs
  (block/point graphs), the **Latin-square graphs** and **block graphs of Steiner systems**, and
  **conference graphs** from Paley/conference matrices (`40.06.05`). Position SRGs as the entry to
  algebraic combinatorics and **cross-ref `07.05.06`** for the association-scheme/Bose–Mesner
  packaging (a 2-class scheme) rather than re-deriving it.
- **prereqs:** `40.06.01` (within-spine), `40.06.05` (within-spine — conference/Paley graphs),
  `01.01.08` (eigenvalues/eigenvectors), `07.05.06` (association schemes, cross-ref)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 4

### 40.06.10 — Pólya–Redfield enumeration: the cycle index and counting under group action
- **spec:** Build the **Pólya–Redfield enumeration theorem** on top of the already-proved
  **Burnside (Cauchy–Frobenius) orbit-counting lemma `01.02.03`** (cited, not reproved). Define the
  **cycle index `Z_G(x_1,\dots,x_n)`** of a permutation group, prove the **unweighted Pólya count**
  (number of colourings up to `G`) and the **weighted pattern-inventory** form (substitute the
  figure-counting series for each `x_i`). Worked classics: **necklaces/bracelets**, colourings of
  the cube's faces, and **counting graphs on `n` vertices** up to isomorphism. Cross-ref the
  generating-function machinery in `40.01.*` (within-spine) for the figure series.
- **prereqs:** `01.02.03` (group action / orbit-stabiliser / Burnside's lemma — cross-ref &
  prereq), `40.01.01` (generating functions, within-spine, cross-ref)
- **chapter:** `design-coding-theory` · **section:** `combinatorics`
- **source_book:** `vanlint-wilson` · **source_curriculum:** `combinatorics`
- **level:** 2 (depends only on the existing group-action unit + within-spine GF)

---

## COVERED (not gaps) — checked, found a home, NOT reproposed

- **Burnside / Cauchy–Frobenius orbit-counting lemma** — `01.02.03` (states & proves it). Pólya
  unit `40.06.10` cites it; the *cycle-index theorem itself* is the genuine new content.
- **Finite fields `\mathbb F_q` (existence, uniqueness, `\mathbb F_q^\times` cyclic, Frobenius,
  primitive element)** — `21.02.01`. Reused as a prereq across the chapter; not reproved.
- **Quadratic residues / Legendre symbol / quadratic reciprocity** — `21.01.06`, `21.01.07`,
  `21.02.02`. Inputs to Paley/BRC; not reproved.
- **Association schemes, Bose–Mesner algebra, Hamming/Johnson schemes, Krawtchouk/Hahn polynomials,
  Delsarte LP bound** — `07.05.06` (rep-theory spine). The SRG unit `40.06.09` and the cyclic-code
  unit `40.06.08` **cross-ref** it; the algebraic-combinatorics packaging is *not* duplicated.
- **Galois theory / splitting fields / field-extension degree** — `01.02.12`, `01.02.13`. Ambient
  field theory; cross-ref where needed.
- **Linear-algebra substrate (subspace, basis, dimension, rank, eigenvalues)** — `01.01.04`,
  `01.01.06`, `01.01.08`. Reused, not reproved.

## OUT OF SCOPE

- **Information-theory side of coding (channel capacity, Shannon's noisy-channel theorem, entropy,
  Huffman/source coding)** — no unit exists in `content/` today, and this is **explicitly the
  Cover–Thomas / MacWilliams–Sloane "Information & Coding Theory" spine (Spine 11, not started)**
  per `plans/expansion/BACKLOG.md`. The `40.06` coding units own the **algebraic/combinatorial**
  side only and pointer-reference Shannon's theorem rather than developing it. Building channel
  capacity here would pre-empt and collide with Spine 11.
- **"Quantum teleportation and superdense coding"** (`12.17.07`) — physics; unrelated to classical
  block/error-correcting codes. Ignored per brief.
- **van Lint–Wilson chapters owned by sibling audits** — generating functions / partitions
  (40.01), posets & Möbius inversion / Dilworth (40.02), matchings & systems of distinct
  representatives, connectivity, colouring, planarity (40.04), Ramsey & extremal set systems
  (40.05), the probabilistic method (40.07). Out of scope for **this** chapter; flagged so the
  producer does not pull them into 40.06.
