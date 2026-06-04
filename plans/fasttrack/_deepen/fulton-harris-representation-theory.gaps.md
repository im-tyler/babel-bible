# Fulton-Harris *Representation Theory: A First Course* (FT 3.11) — Phase-2 deepening gaps

Re-audit of the Phase-1 stub (`plans/fasttrack/fulton-harris-representation-theory.md`)
against the live corpus. The corpus has grown enormously since the stub was
written (the `07-representation-theory/` chapter is now ~80 units, not 26), and
**almost every "gap" the stub proposed has since shipped**. The stub's two
flagship Priority-1 units (`07.06.11 sl2`, `07.06.12 sl3`) and its
Priority-1/2/3 items (`07.05.04 schur-weyl-duality` — which also fully absorbs
the Schur-functor / polynomial-GL_n / Littlewood-Richardson / Jacobi-Trudi
material; `07.06.10 casimir-element`; `07.07.04 weyl-integration-formula`;
`07.06.14 engel-lie-theorem`) are all present. Freudenthal's multiplicity
formula — the stub's Steinberg/Kostant item — is also stated and worked
(`07.06.12`, `07.06.10`, `07.07.04`).

What survives are the **classical-group worked constructions of FH Part III**
that no abstract highest-weight unit reproduces. FH builds the irreducibles of
$\mathfrak{sp}_{2n}$ and $\mathfrak{so}_n$ *by hand* (traceless tensors,
primitive parts of exterior powers) before invoking the general theory — this
is the load-bearing pedagogical content of FH §§17–19, and it has no home in
the corpus. The $G_2$ explicit construction (FH §22) is the only other genuine
gap. Both are genuine; everything else checked out as COVERED.

---

## Genuine gaps

### GAP 1 — Weyl construction of the classical-group irreducibles ($\mathfrak{sp}_{2n}$, $\mathfrak{so}_n$)

- **id:** `07.06.25`
- **title:** The Weyl construction: irreducible representations of $\mathfrak{sp}_{2n}\mathbb{C}$ and $\mathfrak{so}_n\mathbb{C}$
- **spec:** Build the irreducibles of the symplectic and orthogonal Lie algebras
  by the Weyl construction — apply Young symmetrisers to $V^{\otimes n}$ (the
  standard rep), then cut to the *primitive* / *traceless* part by contracting
  against the invariant form. Key worked facts: for $\mathfrak{sp}_{2n}$ the
  exterior powers $\Lambda^k V$ are **not** irreducible (contraction with the
  symplectic form splits off $\Lambda^{k-2}V$), so the fundamental reps are the
  *primitive* $\Lambda^k_0 V$; for $\mathfrak{so}_n$ the analogous trace-free
  decomposition produces the fundamental reps $\Lambda^k_0 V$ up to the
  spin-rep cutoff, with the top $\Lambda^n$ splitting for $D_n$. Identify the
  fundamental weights against the $B_n/C_n/D_n$ Dynkin labels and give the
  dimension of the standard reps. This is the explicit cross-strand companion
  to the abstract `07.05.04` Schur-Weyl story and to the `03.09.03` spinor
  half of $\mathfrak{so}_n$.
- **prereqs:** `07.05.04` (Schur-Weyl duality / Schur functors), `07.06.05`
  (Dynkin diagram, $B_n/C_n/D_n$), `07.03.01` (highest-weight rep),
  `07.06.08` (Weyl dimension formula), `07.01.06` (tensor product of reps)
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/`
- **frontmatter:** chapter `07-representation-theory`, section `06-lie-algebraic`
- **anchor:** FH §17 (Weyl construction), §16 ($\mathfrak{sp}_{2n}$), §§18–19
  ($\mathfrak{so}_{2n+1}$, $\mathfrak{so}_{2n}$); Weyl 1939 *The Classical
  Groups*. **High value** — this is FH's signature Part-III worked-example
  content, and the corpus covers $\mathfrak{sl}_2$/$\mathfrak{sl}_3$ explicitly
  but nothing for $\mathfrak{sp}$/$\mathfrak{so}$.

### GAP 2 — Explicit construction of the exceptional Lie algebra $G_2$

- **id:** `07.06.26`
- **title:** Construction of $G_2$ via the octonions and its $7$-dimensional representation
- **spec:** Construct $\mathfrak{g}_2$ concretely as the derivation algebra
  $\mathrm{Der}(\mathbb{O})$ of the octonions (equivalently the Lie algebra of
  $\mathrm{Aut}(\mathbb{O})$), realise its $7$-dimensional fundamental rep on
  the imaginary octonions, derive the $G_2$ root system (six long + six short
  roots, the triple-edge Dynkin diagram) from the octonion multiplication /
  the Cayley algebra, and identify the two fundamental weights with the
  $7$-dim and $14$-dim (adjoint) representations. FH presents this as the one
  exceptional algebra a first course can build explicitly.
- **prereqs:** `07.04.01` (Cartan-Weyl classification, which *names* $G_2$ as
  $\mathrm{Aut}(\mathbb{O})$ but never builds it), `07.06.03` (root system),
  `07.06.05` (Dynkin diagram), `07.06.19` (Cartan matrix)
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/`
- **frontmatter:** chapter `07-representation-theory`, section `06-lie-algebraic`
- **anchor:** FH §22 (the explicit $G_2$ construction). **Medium value** — the
  corpus states "$G_2$ = automorphism group of the octonions" in `07.04.01`
  (lines 466) but never constructs it; this is the only exceptional algebra FH
  builds, and the octonion connection is independently load-bearing.

---

## COVERED (not gaps) — verified against the live corpus

Every stub Priority-1/2/3 item below was grep-verified present.

- **$\mathfrak{sl}_2\mathbb{C}$ reps (stub P1 #1)** — COVERED `07.06.11`
  (`representations-of-mathfrak-sl-2-mathbb-c`): $V_n=\mathrm{Sym}^n$, ladder
  operators, character $\chi_n$, Casimir, Clebsch-Gordan $V_m\otimes V_n$.
- **$\mathfrak{sl}_3\mathbb{C}$ reps + hexagonal weight pictures (stub P1 #2,
  "single largest gap")** — COVERED `07.06.12`
  (`representations-of-mathfrak-sl-3-mathbb-c`): hexagonal weight diagram, two
  fundamental reps $V,V^*$, adjoint = "the 8", dimension formula
  $(a{+}1)(b{+}1)(a{+}b{+}2)/2$, Freudenthal multiplicity worked.
- **Schur-Weyl duality (stub P1 #3)** — COVERED `07.05.04`
  (`schur-weyl-duality`): full double-commutant proof, bimodule decomposition.
- **Schur functor / polynomial reps of $\mathrm{GL}_n$ / Jacobi-Trudi (stub P2
  #5)** — COVERED `07.05.04` (Weyl module / Schur functor definition,
  polynomial-functor theorem, character = Schur polynomial, Jacobi-Trudi
  derivation, Schur algebra). No separate unit needed.
- **Littlewood-Richardson rule (stub P2)** — COVERED `07.05.04` (LR decomposition
  of $\mathbb{S}^\lambda V\otimes\mathbb{S}^\mu V$ stated and derived);
  also `07.06.12`, `07.05.10`.
- **Weyl integration formula (stub P2 #6)** — COVERED `07.07.04`
  (`weyl-integration-formula`).
- **Casimir element (stub P2 #7)** — COVERED `07.06.10` and `07.06.21`
  (`casimir-element`, two units): $\Omega$ central, scalar
  $\langle\lambda,\lambda+2\rho\rangle$, Freudenthal strange formula.
- **Frobenius character formula for $S_n$ (stub P3 #8)** — COVERED `07.05.01`,
  `07.05.02`, `07.05.04`, `07.05.10` (`murnaghan-nakayama-rule`).
- **Steinberg / Kostant / Freudenthal multiplicity (stub P3 #11)** — COVERED:
  Freudenthal's recursion stated and worked in `07.06.12`, `07.06.10`,
  `07.07.04`; Kostant partition function in `05.04.05`. (Kostant's and
  Steinberg's *named* multiplicity formulas are not separately stated, but
  Freudenthal solves the same weight-multiplicity problem and is fully present
  — not worth a standalone unit.)
- **Spin / half-spin representations of $\mathfrak{so}_n$ via Clifford (stub
  P3 #10)** — COVERED `03.09.02` (clifford-algebra), `03.09.03` (spin-group:
  spinor rep as Lie-algebra map, half-spin splitting via the volume element,
  bivector-Clifford identification of $\mathfrak{spin}(n)$), `03.09.13`
  (triality), `03.09.27` (pure spinors). The FH §20 *algebraic* half-spin
  content is here; GAP 1 deliberately scopes to the tensor/traceless
  $\mathfrak{sp}$/$\mathfrak{so}$ reps and cross-links to `03.09.03` for spin.
- **Engel / Lie / Jordan decomposition (App E, stub)** — COVERED `07.06.14`
  (`engel-lie-theorem`), `07.06.16` (`cartan-criterion`).
- **Cartan-Weyl classification + 5 exceptionals (stub coverage table)** —
  COVERED `07.04.01`; full machinery in `07.06.16`–`07.06.20`
  (Cartan criterion, subalgebra, root-space decomposition, Cartan matrix,
  Serre relations).
- **Compact real forms $\mathrm{SU}(n),\mathrm{SO}(n),\mathrm{Sp}(n)$ (stub
  P3 #9)** — COVERED `07.04.02` (`compact-real-form`), `07.04.05`
  (`real-forms-of-a-complex-semisimple-lie-algebra`).
- **Multilinear algebra refresher (App A)** — COVERED `01.01.*` linear-algebra
  strand (tensor/exterior powers).
- **Character-table worked examples ($S_3,S_4,S_5,A_4,A_5$; stub P4 #14)** —
  the dimension/character machinery and individual computations are COVERED in
  `07.05.01` (worked $S_4$ dims $1,3,2,3,1$; $S_5$ partition count;
  $\chi^{(3,1)}$ computed) and `07.01.04` (orthogonality). Full printed tables
  are an exercise-pack nicety, not a unit gap — not proposed.
- **Mackey restriction-induction (stub P4 #15)** — COVERED `07.01.07`
  (induced-representation), `07.01.08` (frobenius-reciprocity), `07.07.07`
  (mackey-theory-of-induced-representations).

---

## Summary

- **Genuine gaps: 2** — `07.06.25` (Weyl construction of $\mathfrak{sp}_{2n}$ /
  $\mathfrak{so}_n$ irreps; high value), `07.06.26` ($G_2$ via octonions;
  medium value).
- **COVERED-verified topics: 19** (grouped above).

The stub's pessimistic "~65% covered" estimate is now obsolete: with the
chapter grown to ~80 units, FH is **~95%+ covered**. The two remaining gaps are
both FH-Part-III worked-construction items that the abstract highest-weight
units do not reproduce.
