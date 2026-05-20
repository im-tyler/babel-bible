# Woit — *Quantum Theory, Groups and Representations* (Fast Track 2.02) — Audit + Gap Plan

**Book:** Peter Woit, *Quantum Theory, Groups and Representations: An
Introduction* (Springer 2017; revised-and-expanded "under construction"
draft dated 20 October 2025, 49 chapters + exercise appendix, ~580 pp.).
Hosted free by the author at Columbia
(`https://www.math.columbia.edu/~woit/QM/qmbook.pdf`).

**Fast Track entry:** 2.02 (the QM-via-representation-theory slot of the
Quantum-Theory-and-Statistical-Physics strand; paired with Sternberg
*Group Theory and Physics* (1.15) and Sourav Chatterjee *QFT Lecture Notes*
(2.03) as the free open-access bridge from classical mechanics into
non-relativistic and relativistic free-field QFT).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units — and, more critically here, an **entire new chapter directory**
— so that *Quantum Theory, Groups and Representations* (WQGR hereafter) is
covered to the equivalence threshold (≥95% effective coverage of theorems,
key examples, exercise pack, notation, sequencing, intuition, applications
— see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is **not** a full P1 audit. WQGR is a 49-chapter living draft;
a complete line-number inventory is a multi-week job and is deferred. This
plan works from the published TOC, the preface's explicit list of
"differences from standard physics presentations," and the first three
chapters (sampled directly), produces the gap punch-list, and stops
there.

The audit surface here is **larger than any prior Fast Track audit so
far.** The Codex has substantial machinery for the *pure-math half* of
WQGR (Lie groups, Lie algebras, representation theory, symplectic
geometry, Clifford algebras, spin geometry) — that infrastructure is at
~50% of what Woit assumes. But the Codex has **no chapter for the
quantum-mechanics half**: no Hilbert-space axioms, no Schrödinger
equation, no Heisenberg algebra, no Stone–von Neumann, no metaplectic
representation, no harmonic-oscillator quantization, no
canonical/anticanonical commutation relations, no Klein-Gordon, no Dirac
equation, no Wigner classification of Poincaré representations, no field
quantization. The QM-side gap is **total**.

---

## §1 What WQGR is for

WQGR is the canonical mathematician-facing introduction to quantum theory
**built around unitary representations of Lie groups from page one.**
Where Griffiths or Sakurai (and every standard physics text) introduces
QM by motivating the Schrödinger equation from classical mechanics and
treats group theory as a later "applications" chapter, Woit inverts the
order: the Lie group acting on phase space is the primary object, its
unitary representation on $\mathcal{H}$ is the quantum theory, and
"quantization" is the Stone–von Neumann passage from the classical
Heisenberg Lie algebra to the unique (up to unitary equivalence)
irreducible representation realising the canonical commutation relations.
This is Hermann Weyl's 1928 *Gruppentheorie und Quantenmechanik* programme
[1] — the "Gruppenpest" that physicists revolted against — updated with
ninety years of post-Wigner, post-Mackey, post-Kirillov hindsight.

Distinctive contributions, in roughly the order WQGR develops them:

1. **Quantization as the search for a unitary representation, not as a
   substitution rule.** The classical phase space carries a Heisenberg Lie
   algebra of linear functions under Poisson bracket; quantization is the
   passage to its unique irreducible unitary representation (Stone–von
   Neumann theorem). The Schrödinger and Bargmann–Fock pictures are then
   two coordinatisations of *the same* representation related by an
   intertwiner (the Bargmann transform).
2. **Spin from $SU(2)$ representation theory, before the Dirac equation.**
   Chapters 3–8 develop the entire $SU(2)$/$SO(3)$ rep-theoretic edifice
   (Pauli matrices, two-state systems, weight decomposition, raising and
   lowering operators, spherical harmonics, Casimir operator) before any
   wave-equation appears. The spin-1/2 particle in a magnetic field is
   computed as a representation-theoretic problem (chapter 7), not as a
   Pauli-equation problem.
3. **Symplectic geometry first, Lagrangian formalism last.** The Poisson
   bracket and moment map are introduced in chapters 14–15 as the natural
   language for classical mechanics; the Lagrangian formalism and Noether's
   theorem only appear in chapter 35, *after* most of the non-relativistic
   theory has been built. Woit's preface is explicit: "operators
   generating symmetry transformations are derived using the moment map…
   not by invoking Noether's theorem." This is the editorial move
   Sternberg [2] also makes; WQGR pushes it further.
4. **The Groenewold–van Hove no-go theorem, foregrounded.** Chapter 17
   states and discusses the obstruction to extending quantization beyond
   the Heisenberg subalgebra of polynomial observables — a result almost
   universally hidden in physics texts. This frames why
   geometric quantization (Woodhouse [3], Bates–Weinstein [4]) is needed at
   all.
5. **Semidirect products and Mackey-style induced representations.**
   Chapters 18–20 build the Euclidean group $E(n)$, its representations
   via Mackey's induction, and treats the non-relativistic free particle
   as a representation of $E(3)$. Chapter 42 then applies the identical
   machinery to the Poincaré group to recover Wigner's 1939 classification
   of relativistic particles by mass and spin. This is the cleanest
   parallel-construction of non-relativistic and relativistic QM in print.
6. **Metaplectic representation and Bogoliubov transformations.** Chapters
   20, 23–26 develop the metaplectic / oscillator representation of
   $Sp(2d, \mathbb{R})$ as the *projective* unitary representation arising
   from the symplectic action on the Heisenberg group, with the projective
   factor (the Maslov line bundle) tracked explicitly. Chapter 24 then
   identifies Bogoliubov transformations with $SU(1,1)$ symmetries of the
   oscillator phase space — making "squeezed states" a representation-
   theoretic identity rather than an *ad hoc* construction.
7. **Bosonic / fermionic parallelism via Clifford algebras and Lie
   superalgebras.** Chapters 27–32 develop the fermionic oscillator,
   anticommuting variables (Grassmann calculus), and the spinor
   representation as the *fermionic* analogue of Heisenberg/metaplectic,
   with Lie superalgebras as the unifying structure. This is Berezin's
   programme [5]; Woit's chapter 32 is an explicit "Parallels Between
   Bosonic and Fermionic Quantization" summary table.
8. **Lagrangian QFT only at the end, and only as a complement.** Chapters
   35–48 develop multi-particle quantum systems, field quantization,
   gauge symmetry, Klein-Gordon, Dirac, and the Standard Model in 13
   chapters — but the entire path uses the Hamiltonian/representation-
   theoretic framework already built, with the Lagrangian/path-integral
   picture introduced in chapter 35 as one viewpoint among others, not
   the foundational one.

WQGR is **not** a first introduction to QM. It assumes linear algebra and
multivariable calculus only (the preface is emphatic about this), but it
moves at graduate-mathematician pace. It is the canonical entry point to
QM-as-representation-theory if one wants the *Hamiltonian /
Stone–von-Neumann / Mackey* programme rather than the
*Lagrangian / path-integral / functional-integral* programme of Peskin–
Schroeder or Weinberg [6]. The two programmes are complementary; the Fast
Track explicitly chooses Woit as the entry, with Chatterjee 2.03 and
Weinberg 2.17 as the path-integral / interacting-QFT complement.

Peer sources triangulating Woit's distinctive editorial move:

- **[1]** H. Weyl, *Gruppentheorie und Quantenmechanik* (1928); English
  *The Theory of Groups and Quantum Mechanics* (Dover reprint 1950) — the
  originating text of QM-via-representation-theory.
- **[2]** S. Sternberg, *Group Theory and Physics* (Cambridge 1994; FT
  1.15) — the closest contemporary peer, sharing Woit's moment-map-first
  and Lie-superalgebra emphasis; differs in skipping the Stone–von Neumann
  theorem and going harder on crystallographic groups.
- **[3]** N. M. J. Woodhouse, *Geometric Quantization* (Oxford 1991) —
  the canonical reference for the polarization/half-density/Maslov
  refinements WQGR alludes to in chapter 17.5.
- **[4]** S. Bates and A. Weinstein, *Lectures on the Geometry of
  Quantization* (Berkeley Math Lecture Notes 1997) — the Weinstein-school
  geometric-quantization companion; freely hosted.
- **[5]** F. A. Berezin, *The Method of Second Quantization* (Academic
  Press 1966) — originating the Grassmann-calculus / fermionic-oscillator
  treatment Woit follows in chapters 27–30.
- **[6]** B. C. Hall, *Lie Groups, Lie Algebras, and Representations: An
  Elementary Introduction* (Springer GTM 222, 2nd ed. 2015) — the closest
  pure-math companion for the Lie-theoretic prerequisites; Hall and Woit
  cross-reference each other.

---

## §2 Coverage table (Codex vs WQGR)

Cross-referenced against the current 313-unit corpus.
✓ = covered, △ = partial / different framing, ✗ = not covered.

| WQGR chapter / topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Ch. 1 — Axioms of QM (state, observable, dynamics, Born rule) | — | ✗ | **Gap.** No Codex unit on Hilbert-space axioms. |
| Ch. 2 — $U(1)$ and its representations; charge operator | `07.01.01-group-representation` | △ | Group-rep definition present; $U(1)$ classification by integer weight + physical interpretation as charge — not covered. |
| Ch. 3 — Two-state systems; Pauli matrices; commutation relations | — | ✗ | **Gap.** Pauli matrices nowhere in Codex. |
| Ch. 4 — Linear algebra review (vector spaces, duals, inner products, orthogonal/unitary groups) | `01.01.*`, `03.03.03-orthogonal-group` | ✓ | Codex linear algebra and $O(n)$ coverage adequate. |
| Ch. 5 — Lie algebras and Lie algebra representations | `03.04.01-lie-algebra`, `07.06.01-lie-algebra-representation`, `07.06.02-universal-enveloping-algebra`, `05.01.01-symplectic-vector-space` (adjacent) | △ | Abstract Lie algebra + rep present; Woit's explicit complexification / skew-vs-self-adjoint dictionary not covered. |
| Ch. 6 — Rotation and spin groups in 3 and 4D; quaternions; $\mathrm{Spin}(3) \cong SU(2)$ | `03.09.03-spin-group`, `03.03.03-orthogonal-group` | △ | Spin group present at the abstract Clifford level; the explicit quaternion / $SU(2)$ double cover / 4D version not unit-level. |
| Ch. 7 — Spinor representation; spin-1/2 in a magnetic field; Bloch sphere; complex projective space | — | ✗ | **Gap.** Spinor rep at the rep-theoretic level (vs. spinor bundle in `03.09.05`) not covered; Bloch sphere absent. |
| Ch. 8 — Representations of $SU(2)$ and $SO(3)$; weight decomposition; raising/lowering; spherical harmonics; Casimir | `07.06.03-root-system`, `07.06.06-verma-module`, `07.06.07-weyl-character-formula` (general); — (specifically $SU(2)$) | △ | The general highest-weight theory is shipped; the explicit $SU(2)$ worked example with raising/lowering and spherical-harmonic decomposition of $L^2(S^2)$ is not. |
| Ch. 9 — Tensor products, entanglement, addition of spin; characters | `07.01.06-tensor-product-of-representations`, `07.01.03-character` | △ | Tensor-product-of-reps present; the QM-flavored entanglement / Clebsch-Gordan / addition-of-angular-momentum framing missing. |
| Ch. 10 — Momentum and the free particle; representations of $\mathbb{R}$ and $\mathbb{R}^3$ | — | ✗ | **Gap.** |
| Ch. 11 — Fourier analysis; distributions; Schwartz space | `02.*` partial | △ | Schwartz/tempered distributions not yet a Codex unit; Fourier transform on $\mathbb{R}^n$ partially covered in analysis chapter (verify). |
| Ch. 12 — Position operator; Dirac notation; Heisenberg uncertainty; propagators; Green's functions | — | ✗ | **Gap.** |
| Ch. 13 — **Heisenberg Lie algebra; Heisenberg group; Schrödinger representation** | — | ✗ | **Gap (CRITICAL — load-bearing for the entire Woit edifice).** |
| Ch. 14 — Poisson bracket and symplectic geometry; classical mechanics on phase space | `05.02.02-poisson-bracket`, `05.01.02-symplectic-manifold` | ✓ | Codex symplectic chapter covers this well. |
| Ch. 15 — Hamiltonian vector fields, moment map | `05.02.01-hamiltonian-vector-field`, `05.04.01-moment-map` | ✓ | Codex coverage adequate. |
| Ch. 16 — Quadratic polynomials and the symplectic group; $Sp(2d, \mathbb{R})$ | `05.01.03-symplectic-group` | △ | Symplectic group present; the explicit identification of quadratic Hamiltonians with $\mathfrak{sp}(2d,\mathbb{R})$ via the moment map is not. |
| Ch. 17 — **Canonical quantization; Groenewold–van Hove no-go theorem; quantization and symmetries** | — | ✗ | **Gap (CRITICAL — Woit's pedagogical pivot point).** No-go theorem entirely absent. |
| Ch. 18 — Semidirect products; Euclidean group $E(n)$; semidirect-product Lie algebras | — | ✗ | **Gap.** Codex covers product Lie groups but not semidirect products as a unit. |
| Ch. 19 — **Quantum free particle as a representation of $E(2), E(3)$** | — | ✗ | **Gap.** |
| Ch. 20 — Representations of semidirect products; intertwining operators; metaplectic representation introduced | — | ✗ | **Gap (CRITICAL — first appearance of the metaplectic rep).** |
| Ch. 21 — Central potentials; $\mathfrak{so}(4)$ symmetry of the Coulomb potential; hydrogen atom | — | ✗ | **Gap.** The Pauli–Fock $\mathfrak{so}(4)$ derivation of the hydrogen spectrum is iconic; absent from Codex. |
| Ch. 22 — Harmonic oscillator; creation / annihilation operators; Bargmann–Fock representation | — | ✗ | **Gap (CRITICAL).** |
| Ch. 23 — Coherent states; harmonic-oscillator propagator; Bargmann transform | — | ✗ | **Gap.** |
| Ch. 24–25 — Metaplectic representation in detail; $SU(1,1)$ and Bogoliubov transformations; arbitrary $d$ | — | ✗ | **Gap.** No metaplectic-rep machinery anywhere. |
| Ch. 26 — Complex structures and quantization; compatible triples | `05.08.01-compatible-triple` (verify), `05.07-almost-complex` partial | △ | Compatible-triple language exists in symplectic chapter; the quantization-from-complex-structure perspective is not. |
| Ch. 27 — Fermionic oscillator; CAR | — | ✗ | **Gap.** |
| Ch. 28 — Complex Weyl and Clifford algebras | `03.09.02-clifford-algebra` | △ | Clifford algebra present at the geometric level; Woit's "Weyl-and-Clifford as bosonic-vs-fermionic" parallel framing is not. |
| Ch. 29 — Clifford algebras and geometry; rotations as iterated reflections | `03.09.02-clifford-algebra`, `03.09.03-spin-group`, `03.09.11-clifford-chessboard` | ✓ | Adequately covered. |
| Ch. 30 — Anticommuting variables; Grassmann algebra; pseudo-classical mechanics | — | ✗ | **Gap.** Grassmann calculus / Berezin integration absent. |
| Ch. 31 — Fermionic quantization; spinors via Bargmann–Fock | — | ✗ | **Gap.** |
| Ch. 32 — Bosonic/fermionic parallels (summary chapter) | — | ✗ | **Gap (low priority — synthetic summary unit).** |
| Ch. 33 — Supersymmetric oscillator; SUSY QM and differential forms | — | ✗ | **Gap.** |
| Ch. 34 — Pauli equation and the Dirac operator (non-relativistic) | `03.09.08-dirac-operator` | △ | Geometric Dirac operator present; Pauli equation as a rep-theoretic object on $E(3)$ not covered. |
| Ch. 35 — **Lagrangian methods; Noether's theorem; path integral** | `05.00.04-noether-theorem`, `08.07.01-path-integral` | △ | Both shipped, but in classical / stat-mech context, not the QM context Woit uses. |
| Ch. 36–37 — Multi-particle systems; field quantization; second quantization | — | ✗ | **Gap.** |
| Ch. 38 — Symmetries and non-relativistic quantum fields; internal symmetries; spatial symmetries | — | ✗ | **Gap.** |
| Ch. 39 — Quantization of infinite-dimensional phase spaces; inequivalent representations; Schwinger term; spontaneous symmetry breaking; renormalization | — | ✗ | **Gap.** |
| Ch. 40 — Minkowski space; Lorentz group and its Lie algebra | — | ✗ | **Gap.** |
| Ch. 41 — Representations of the Lorentz group; Dirac $\gamma$-matrices in $\mathrm{Cl}(3,1)$ | `03.09.02-clifford-algebra`, `03.09.11-clifford-chessboard` | △ | Clifford signatures classified; the specific Lorentz-rep / Dirac-$\gamma$ presentation is not a unit. |
| Ch. 42 — **Poincaré group and its representations; Wigner classification by orbits** | — | ✗ | **Gap (CRITICAL — Wigner 1939 is foundational).** |
| Ch. 43 — Klein-Gordon equation; scalar quantum fields | — | ✗ | **Gap.** |
| Ch. 44 — Relativistic scalar quantum fields with internal/external symmetries | — | ✗ | **Gap.** |
| Ch. 45 — $U(1)$ gauge symmetry and EM fields; curvature; non-Abelian gauge | `03.07.05-yang-mills-action` | △ | Yang-Mills action shipped; the elementary $U(1)$-gauge-from-rep-theory derivation is not a separate unit. |
| Ch. 46 — Quantization of the EM field; the photon; Coulomb / covariant gauge | — | ✗ | **Gap.** |
| Ch. 47 — Dirac equation and spin-1/2 fields; Majorana, Weyl, Dirac spinors | `03.09.05-spinor-bundle`, `03.09.13-triality` | △ | Spinor bundle at the geometric level; the spinor *fields* of QFT not a unit. |
| Ch. 48 — Introduction to the Standard Model | — | ✗ | **Gap (low priority — survey chapter).** |
| Appendix A — Conventions | — | n/a | Notation crosswalk; see §4. |
| Appendix B — Exercise pack (≈300 exercises) | — | ✗ | **Gap.** Exercise production deferred. |

**Aggregate coverage estimate:** **~12% of WQGR has corresponding Codex
units** (mostly the pure-math prerequisites in chapters 4, 5, 9, 14, 15,
29, and partial credit on chapters 8 and 35). The QM half (chapters 1–3,
10–13, 17, 19–28, 30–48) is **~0% covered**. Coverage at the
chapter-level is below the 80% "already shipped" threshold — this is **not**
a flag-as-mostly-done book.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — structural prerequisite:** Open a new top-level chapter
directory `content/09-quantum-mechanics/` (or expand `08-stat-mech/` to a
combined `08-quantum-and-stat-mech/`). Woit's content does not fit naturally
into any of the existing eight chapters; about 35 of the units below are
QM/QFT proper and need their own home. This is a structural decision that
should be made before any unit-level work.

**Priority 1 — high-leverage, captures Woit's central content (15 units):**

1. **`09.01.01` Hilbert-space axioms of QM** (state vector, self-adjoint
   observables, Schrödinger dynamics, Born rule). WQGR §1.2 anchor.
2. **`09.01.02` $U(1)$ representations and the charge operator.** WQGR §2.
   Builds on `07.01.01`.
3. **`09.01.03` Two-state systems and Pauli matrices.** WQGR §3. Worked
   example: spin-1/2 in a magnetic field via $SU(2)$ rep theory. Worked
   example: Bloch sphere as $\mathbb{C}P^1$.
4. **`09.01.04` $SU(2)$ representations: weight decomposition, raising
   and lowering, spherical harmonics, Casimir.** WQGR §8. Specialisation
   of `07.06.06` to $SU(2)$; deserves its own unit because it is
   load-bearing for every later QM calculation.
5. **`09.02.01` The Heisenberg Lie algebra and Heisenberg group.** WQGR
   §13. CRITICAL — load-bearing.
6. **`09.02.02` Schrödinger representation and the Stone–von Neumann
   uniqueness theorem.** WQGR §13.3, with proof via Mackey / von Neumann
   1931. CRITICAL.
7. **`09.02.03` Canonical quantization and the Groenewold–van Hove no-go
   theorem.** WQGR §17. CRITICAL — frames why higher-degree quantization
   needs more machinery.
8. **`09.03.01` Semidirect product Lie groups and Lie algebras.** WQGR
   §18. Euclidean group $E(n)$ as the canonical example.
9. **`09.03.02` Mackey induction and representations of semidirect
   products with abelian normal factor.** WQGR §20.
10. **`09.03.03` Quantum free particle as a representation of $E(3)$.**
    WQGR §19.
11. **`09.04.01` Quantum harmonic oscillator: creation and annihilation
    operators; Bargmann–Fock representation; Bargmann transform as
    intertwiner.** WQGR §22–§23. CRITICAL.
12. **`09.04.02` Coherent states.** WQGR §23.
13. **`09.04.03` Metaplectic representation of $Sp(2d, \mathbb{R})$ and
    the projective factor.** WQGR §20, §24–§25. CRITICAL.
14. **`09.05.01` Poincaré group and its Lie algebra.** WQGR §42.1.
15. **`09.05.02` Wigner classification of irreducible representations of
    the Poincaré group by orbits in momentum space.** WQGR §42.2–§42.3.
    CRITICAL.

**Priority 2 — fermionic side, field quantization, Dirac (10 units):**

16. **`09.04.04` Fermionic oscillator; canonical anticommutation
    relations.** WQGR §27.
17. **`09.04.05` Grassmann algebra and pseudo-classical mechanics;
    Berezin integration.** WQGR §30.
18. **`09.04.06` Spinor representation via fermionic Bargmann–Fock;
    bosonic-fermionic parallels table.** WQGR §31–§32.
19. **`09.05.03` Lorentz group representations and Dirac
    $\gamma$-matrices in $\mathrm{Cl}(3,1)$.** WQGR §41.
20. **`09.06.01` Klein-Gordon equation and free scalar quantum field.**
    WQGR §43.
21. **`09.06.02` Dirac equation and free spin-1/2 quantum field; Majorana,
    Weyl, Dirac spinor fields.** WQGR §47.
22. **`09.06.03` Multi-particle systems and field operators; second
    quantization.** WQGR §36–§37.
23. **`09.06.04` Internal and spatial symmetries of non-relativistic
    quantum fields.** WQGR §38.
24. **`09.06.05` $U(1)$ gauge symmetry and EM fields; quantization of the
    photon in Coulomb / covariant gauge.** WQGR §45–§46.
25. **`09.06.06` Inequivalent irreducible representations in infinite
    dimensions; Schwinger term; spontaneous symmetry breaking.** WQGR §39.
    Pointer unit.

**Priority 3 — depth-completions and connecting tissue (6 units):**

26. **`09.01.05` Quantum dynamics in the Heisenberg picture; propagators
    in position and momentum space; Green's functions.** WQGR §12, §23.
27. **`09.02.04` Tensor product of representations and addition of spin;
    Clebsch–Gordan.** WQGR §9. Specialisation of `07.01.06`.
28. **`09.04.07` Complex structures and quantization; squeezed states.**
    WQGR §26.
29. **`09.04.08` Supersymmetric quantum mechanics and the de Rham
    complex.** WQGR §33.
30. **`09.05.04` Hydrogen atom via $\mathfrak{so}(4)$ symmetry of the
    Coulomb potential.** WQGR §21.
31. **Extend `05.04.01-moment-map`** (existing) with a Master section on
    the WQGR §15.3 perspective: moment map as the bridge from Lie-group
    actions to self-adjoint quantum operators.

**Priority 4 — survey pointers (Master-only, optional, 3 units):**

32. **`09.07.01` Path integral as a complement to Hamiltonian
    quantization.** WQGR §35.3–§35.4. Connects to `08.07.01-path-integral`.
33. **`09.07.02` Introduction to the Standard Model: non-Abelian gauge
    fields, fundamental fermions, Yukawa couplings, Higgs.** WQGR §48.
    Pointer unit only.
34. **`09.07.03` Pointer to geometric quantization (Woodhouse,
    Bates–Weinstein) and to deformation quantization (Kontsevich
    formality).** WQGR §17.5.

**Notation crosswalk requirements** (record as §Notation paragraphs in
the new units):

- WQGR uses $|\psi\rangle$ (Dirac ket) for state vectors and $\langle \cdot,
  \cdot \rangle$ (mathematician convention, linear in the second slot) for
  Hermitian inner products. Codex `01.01.*` uses standard
  mathematician notation with no kets. Adopt **physics ket notation in
  the `09-quantum-mechanics/` chapter only**, with a parenthetical
  $|\psi\rangle = \psi$ on first use.
- WQGR uses $\dagger$ for adjoint; Codex symplectic / Lie chapters use $*$.
  Adopt $\dagger$ within `09-*` and cross-reference to $*$ at chapter
  boundary.
- WQGR uses $\hbar$ explicitly and reserves the right to set $\hbar = 1$
  context-dependently. Codex convention should mirror.
- WQGR notation for the Heisenberg algebra: $\mathfrak{h}_{2d+1}$ with
  basis $\{q_j, p_j, c\}$ and central element $c$. Adopt this; record
  cross-reference to the (rare) Codex notation in `03.11.01-central-
  extension`.

---

## §4 Implementation sketch (P3 → P4)

For a full WQGR coverage pass, items 1–15 are the minimum set. Realistic
production estimate (mirroring earlier batches):

- **~4–5 hours per unit** for the QM-side units; these are higher than the
  corpus average because (a) each carries an explicit worked computation
  (hydrogen spectrum, harmonic-oscillator spectrum, Wigner orbits), (b)
  the notation/style is a hybrid of physics ket-notation and rigorous
  mathematician prose, and (c) the master tier needs the careful
  projective-representation / Maslov-line-bundle discussion.
- **15 priority-1 units × ~4.5 hours = ~70 hours of focused production.**
  Plus the priority-2 fermionic/field-quantization batch (~45 hours).
  Plus the priority-3 depth completions (~25 hours). Total ~140 hours
  for full FT equivalence. Fits a 3–4-week focused window.
- Lean formalisation is **deferred** for this strand — none of the QM
  units have current Mathlib analogues at the unit-spec depth.

**Originator-prose target.** WQGR's editorial choices (representation-
first, moment-map-first, Stone–von Neumann at the centre) trace back to:

- **Weyl (1928), *Gruppentheorie und Quantenmechanik*** — originator of
  the QM-via-rep-theory programme. Cite in `09.01.01`.
- **von Neumann (1931), "Die Eindeutigkeit der Schrödingerschen
  Operatoren," *Math. Ann.* 104, 570–578** — original Stone–von Neumann
  uniqueness proof. Cite in `09.02.02`.
- **Wigner (1939), "On unitary representations of the inhomogeneous
  Lorentz group," *Ann. Math.* 40, 149–204** — original classification.
  Cite in `09.05.02`.
- **Mackey (1968), *Induced Representations of Groups and Quantum
  Mechanics*** — induction machinery used in WQGR ch. 20.
- **Groenewold (1946) / van Hove (1951)** — no-go theorem originators.
  Cite in `09.02.03`.
- **Bargmann (1961), "On a Hilbert space of analytic functions and an
  associated integral transform," *Comm. Pure Appl. Math.* 14, 187–214** —
  Bargmann–Fock space and the Bargmann transform.
- **Berezin (1966), *The Method of Second Quantization*** — Grassmann
  calculus origin. Cite in `09.04.05`.

Woit himself is not the originator of these results — he is a synthesiser
in the Weyl tradition. Cite **Woit (2017)** as the modern consolidating
reference and as the FT canonical anchor. Supplement liberally with **Hall
(2015)** for Lie-theoretic prerequisites and **Sternberg (1994; FT 1.15)**
for the moment-map / Lie-superalgebra material — Sternberg has overlapping
coverage on roughly half the priority-1 units and should be cross-cited
where his treatment is cleaner (notably on the Heisenberg algebra and on
the spin-1/2 magnetic-field computation).

**Recommended sequencing.** Priority-1 units should ship in the order
listed; in particular `09.02.01` → `09.02.02` → `09.02.03` is a hard chain
(no skipping), and `09.03.01` → `09.03.02` → `09.03.03` likewise.
`09.04.01` (harmonic oscillator) is the pedagogical climax of the
non-relativistic half and should be staged as a wave terminal.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in WQGR (full P1
  audit; deferred — WQGR is ~580 pp. + 49 chapters).
- Exercise-pack production. WQGR appendix B carries ~300 exercises across
  21 sub-appendices, many of them substantial calculations (e.g.,
  derive the hydrogen spectrum from $\mathfrak{so}(4)$). Exercise pack is
  a P3-priority-4 follow-up after the priority-1 units ship.
- Decision on whether to open `content/09-quantum-mechanics/` as a new
  top-level chapter or expand the existing `08-stat-mech/`. Flagged in §3
  Priority 0; **not** decided here.
- Geometric quantization in the Woodhouse / Bates–Weinstein sense — only
  pointed at in `09.07.03`. A full geometric-quantization audit belongs
  to a separate plan (Woodhouse / Bates–Weinstein as their own Fast Track
  entry, currently uncatalogued).
- Interacting QFT, renormalisation, the BPHZ programme. WQGR explicitly
  punts to "for further reading" (chapter 49); the Fast Track defers this
  to Weinberg 2.17–2.19 / Chatterjee 2.03 / Costello.
- Path-integral formulation as a primary track. Covered as a complement
  pointer in `09.07.01` only.
- Crystallographic point groups and the finite-group rep-theory side of
  QM (Wigner's *Group Theory and Quantum Mechanics* 1931 / Tinkham). WQGR
  explicitly omits this; Sternberg 1.15 is the FT anchor for that
  material.

---

## §6 Acceptance criteria for FT equivalence (Woit)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Priority 0 structural decision (new chapter directory) is recorded.
- Priority-1 units 1–15 have all shipped.
- ≥95% of WQGR's named theorems in chapters 1–34 (non-relativistic half)
  map to Codex units (currently ~12%; after priority-1 units this rises
  to ~65%; after priority-1+2 to ~85%; full ≥95% requires priority-3 +
  selective priority-4).
- ≥80% of WQGR's chapters 35–48 (Lagrangian + relativistic + Standard
  Model survey) map to Codex units or are referenced from a pointer unit.
- ≥90% of WQGR's worked computations in chapters 1–34 have a direct unit
  or are exercised in a referenced unit. The signature computations —
  $SU(2)$ spectrum / spherical harmonics, harmonic-oscillator spectrum
  via raising/lowering, hydrogen via $\mathfrak{so}(4)$, Wigner's
  classification — all need explicit worked-example status.
- Notation decisions are recorded (see §3 crosswalk).
- Pass-W weaving connects the new `09-quantum-mechanics/` units laterally
  to `03.09-spin-geometry/`, `05-symplectic/`, `07-representation-theory/`,
  and to the new `09.05.*` Poincaré/Wigner units from the Klein-Gordon /
  Dirac directions.

The 15 priority-1 units close most of the equivalence gap. Priority-2
closes the fermionic/QFT half. Priority-3 fills the depth pieces.
Priority-4 is survey-pointer deepening only.

---

## §7 Sourcing

- **Free.** Author-hosted PDF at
  `https://www.math.columbia.edu/~woit/QM/qmbook.pdf` (and at
  `https://www.math.columbia.edu/~woit/QMbook/`). The "revised and
  expanded, under construction" draft (dated 20 October 2025) is the
  most recent version and supersedes the 2017 Springer edition for
  citation purposes. Page numbering used in §2 and §3 of this plan is
  drawn from the 20 October 2025 draft.
- **License.** Author retains copyright (©2021 Peter Woit, all rights
  reserved) but hosts the draft freely for educational use. Springer
  publishes the 2017 edition under standard textbook terms (ISBN
  978-3-319-64610-7). For Codex citation use the author's hosted PDF as
  the primary anchor and cite "Woit, *Quantum Theory, Groups and
  Representations: An Introduction*, Springer 2017 (revised draft,
  Columbia University, hosted free)."
- **Local copy.** Present at
  `reference/fasttrack-texts/02-quantum-stat/Woit-QuantumTheoryGroupsRepresentations.pdf`.
- **Audit completeness.** Full. TOC read, preface read, chapters 1–2
  sampled directly; remaining chapters audited at TOC granularity. No
  reduced-flag.
