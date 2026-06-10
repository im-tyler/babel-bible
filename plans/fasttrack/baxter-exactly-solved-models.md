# Baxter — *Exactly Solved Models in Statistical Mechanics* (Fast Track 2.12) — Audit + Gap Plan

**Book:** R. J. Baxter, *Exactly Solved Models in Statistical Mechanics*
(Academic Press, London / New York, 1982; xii + 486 pp.). Reprinted by
Dover Publications, 2007 (ISBN 978-0-486-46271-4). Pagination and
chapter references in this plan follow the original 1982 Academic Press
edition, whose 15-chapter structure is preserved unchanged in the Dover
reprint.

**Fast Track entry:** 2.12 — the **lattice-exactly-solved-models /
integrable-statistical-mechanics** anchor of Section 2 of the booklist.
Sits between 2.11 (Souriau / dynamical-systems track) and the
field-theoretic statistical-mechanics entries (2.09 Goldenfeld,
2.13 Itzykson-Drouffe). Catalog status: **BUY** (Academic Press / Dover
commercial title; under active copyright).

**Audit completeness: reduced.** Per AGENTIC_EXECUTION_PLAN.md §6.6 —
**no local PDF available.** `reference/textbooks-extra/` and
`reference/fasttrack-texts/` hold no copy of Baxter; the
`reference/` tree was searched (`find reference -iname "*baxter*"`
returns nothing). This plan is constructed from the canonical Baxter
table of contents (stable across the 1982 Academic Press printing and
the 2007 Dover reprint) together with cross-references in the standard
companion sources that treat Baxter as their primary reference for
the exactly-solved-models programme: Lieb-Mattis *Mathematical Physics
in One Dimension*, Gaudin *La fonction d'onde de Bethe*, Jimbo-Miwa
*Algebraic Analysis of Solvable Lattice Models*, and the integrable-
systems chapters of Kardar Vol I. Chapter references in this plan
(Ch. 1, …, Ch. 15) are **Baxter chapter numbers**, not PDF page
numbers. **P5 verification cannot mark this book `equivalence-covered`
until a full audit replaces this reduced one** (§6.6 hard rule) — the
Dover reprint should be acquired into `reference/textbooks-extra/` to
promote the audit to `full`.

**Section-2 structural note.** Baxter is **lattice statistical
mechanics in the transfer-matrix / commuting-transfer-matrix /
Yang-Baxter tradition** — the polar opposite editorial center of mass
from Landau Vol 5 (2.10, thermodynamics + fluctuations) and from
Goldenfeld / Itzykson-Drouffe (RG / field theory). Its natural home in
the corpus is the existing **`content/08-stat-mech/`** chapter (which
already ships the Ising model, the transfer matrix, and the Onsager
solution — exactly the three load-bearing prerequisites Baxter builds
on), with the integrable-systems machinery laterally connected to
`content/05-symplectic/` (`05.02.03-integrable-system`,
`05.09.*` integrable block). It does **not** belong in
`content/11-stat-mech-physics/` (the undergraduate thermodynamics /
quantum-stats chapter), though that chapter's Ising unit
(`11.06.01`) is a lateral reference.

**Purpose:** lightweight audit-and-gap pass (P1 + P2 + P3-lite per
orchestration protocol). Output is a punch-list of new units and
existing-unit deepenings so that *Exactly Solved Models* reaches the
FT-equivalence threshold (≥95% effective coverage of named results;
see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Not a full P1
audit (no line-number-level problem inventory) under the
reduced-completeness constraint.

---

## §1 What Baxter's book is for

Baxter's *Exactly Solved Models* is **the canonical reference for the
two-dimensional lattice models of classical statistical mechanics that
can be solved exactly**, and for the algebraic machinery — the
transfer matrix, the **commuting-transfer-matrix / Yang-Baxter
(star-triangle) relation**, the **Bethe ansatz**, and the **corner
transfer matrix** — that makes those solutions possible. It is
written by the physicist who *solved the eight-vertex model* (Baxter
1971) and the *hard-hexagon model* (Baxter 1980), and the book's
distinctive editorial choice is to present each model **through the
machinery that solves it**, building from the simplest case (1D Ising)
to the apex (eight-vertex + hard-hexagon via corner transfer matrices).
Where Onsager 1944 solved the 2D Ising model by a *tour de force* of
Clifford-algebra / spinor manipulation, Baxter's reorganisation around
**commuting transfer matrices** revealed the structural principle —
the Yang-Baxter equation — that unifies the entire field and seeds
quantum groups, integrable quantum field theory, and the algebraic
Bethe ansatz.

The book is organised as 15 chapters:

- **Ch. 1 — Basic statistical mechanics.** Partition function, free
  energy, correlation functions, critical exponents and scaling — the
  thermodynamic background.
- **Ch. 2 — The one-dimensional Ising model.** The transfer-matrix
  method introduced in its simplest setting; the $2\times2$ transfer
  matrix, largest eigenvalue, free energy, correlation length, absence
  of a finite-temperature transition in 1D.
- **Ch. 3 — The mean-field model.** Bragg-Williams / Curie-Weiss
  approximation and its critical exponents, as a foil to the exact
  results.
- **Ch. 4 — Ising model on the Bethe lattice.** Exact solution on the
  Cayley tree; the mean-field-like behaviour and the Bethe-Peierls
  approximation.
- **Ch. 5 — The spherical model.** The Berlin-Kac spherical model,
  exactly solved in all dimensions; dimensionality dependence of
  critical behaviour.
- **Ch. 6 — Duality and star-triangle relations for the square,
  triangular and honeycomb Ising models.** Kramers-Wannier duality,
  the **star-triangle (Y-Δ) transformation**, and the location of $T_c$
  by duality.
- **Ch. 7 — The two-dimensional Ising model.** Baxter's transfer-matrix
  solution of the square-lattice Ising model; the dispersion relation,
  free energy, spontaneous magnetisation (Yang 1952), and the
  Onsager-Kaufman spinor approach.
- **Ch. 8 — The six-vertex (ice-type) model.** Lieb's solution of
  square ice, KDP and F models; the **Bethe ansatz** for the transfer
  matrix; ice entropy; the line of critical points; frozen ferroelectric
  / antiferroelectric phases.
- **Ch. 9 — The eight-vertex model.** Baxter's 1971 solution — the apex
  of the classical theory. **Commuting transfer matrices and the
  Yang-Baxter / star-triangle relation**; the parametrisation by
  elliptic theta functions; the $TQ$ relation and Baxter's $Q$-operator;
  free energy via the inversion relation; non-universal critical
  exponents depending continuously on the anisotropy.
- **Ch. 10 — Ising-model spontaneous magnetisation and correlation
  functions.** The magnetisation $M = (1 - k^{-2})^{1/8}$ via the corner
  transfer matrix; spin-spin correlations and the Wu-McCoy-Tracy-Barouch
  scaling functions / Painlevé connection.
- **Ch. 11 — The corner transfer matrix (CTM).** Baxter's signature
  method: the partition function as a product of four corner transfer
  matrices; the variational / star-triangle property; the spectrum as a
  geometric (equally-spaced) sequence; the CTM as the tool that computes
  order parameters for the eight-vertex and hard-hexagon models.
- **Ch. 12 — The chiral Potts / Ashkin-Teller / general vertex models
  and further results.** (In the 1982 edition, the later-chapter
  material on the Potts model, the Kelland / staggered models, and the
  $\mathbb{Z}_n$ generalisations.)
- **Ch. 13 — The hard-hexagon and related models.** Baxter's 1980
  solution of the hard-hexagon lattice gas via the corner transfer
  matrix; the order parameter as a Rogers-Ramanujan / theta-function
  identity; connection to the Rogers-Ramanujan continued fraction.
- **Ch. 14 — The Kagome lattice / dimer-type and elliptic-function
  appendices.** The elliptic-function machinery (theta functions,
  modular transformations) used throughout Chs. 9-13.
- **Ch. 15 — Appendices.** Elliptic functions, the inversion relation
  method, and conjectured generalisations.

Distinctive Baxter choices:

1. **Transfer-matrix-first, machinery-driven exposition.** Every model
   is solved by *exhibiting the operator whose largest eigenvalue is
   the free energy*. The book is a graded sequence of harder transfer
   matrices, each demanding a new tool. **The corpus has the transfer
   matrix (`08.03.02`) but only as the Ising-solution device; Baxter's
   general framework (commuting families, inversion relation, $TQ$) is
   absent.**

2. **The Yang-Baxter / star-triangle equation as the organising
   principle.** Ch. 9's central insight: two transfer matrices commute
   iff their Boltzmann weights satisfy the star-triangle relation;
   commutation gives an infinite family of conserved quantities, hence
   integrability. **This is the single most important Baxter-distinctive
   gap — the corpus has zero coverage of the Yang-Baxter equation, in
   either the statistical-mechanics (star-triangle) or the quantum
   ($R$-matrix) form.** Baxter 1972 (*Ann. Phys.* 70:193) is the
   originator on the lattice side, with C. N. Yang 1967 on the quantum
   many-body side — a mandatory-originator-prose item.

3. **The Bethe ansatz.** Ch. 8 solves the six-vertex model by the
   coordinate Bethe ansatz for the transfer-matrix eigenvector. **The
   corpus has zero Bethe-ansatz coverage** despite shipping an Ising /
   transfer-matrix block — a foundational FT gap. Bethe 1931 (*Z. Phys.*
   71:205) is the originator (Heisenberg chain), Lieb 1967 the
   six-vertex application.

4. **The corner transfer matrix.** Ch. 11's signature method computes
   order parameters (magnetisation, hard-hexagon density) that the
   ordinary row-to-row transfer matrix cannot easily reach. The
   geometric spectrum of the CTM is Baxter's deepest structural
   discovery and the seed of the Affleck-Kennedy-Lieb-Tasaki /
   matrix-product-state connection. **Corpus coverage: zero** (the
   transfer-matrix unit `08.03.02` mentions the CTM by name in one
   synthesis sentence but develops nothing).

5. **The eight-vertex model.** Ch. 9 — Baxter's own 1971 solution, the
   apex of the entire classical theory and the first model with
   **continuously-varying (non-universal) critical exponents**, which
   foreshadows the $c=1$ conformal-field-theory line. **Corpus coverage:
   zero.** Baxter 1971 (*Phys. Rev. Lett.* 26:832; *Ann. Phys.* 70:193,
   70:323) is the originator.

6. **The six-vertex / ice-type models.** Ch. 8 — Lieb's residual entropy
   of ice and the KDP / F ferroelectric transitions. **Corpus coverage:
   zero.**

7. **The hard-hexagon model.** Ch. 13 — Baxter's 1980 solution, whose
   order parameter is a Rogers-Ramanujan identity. **Corpus coverage:
   zero.** Baxter 1980 (*J. Phys. A* 13:L61) is the originator. This is
   the unit that connects exactly-solved lattice models to the
   Rogers-Ramanujan number theory in the corpus (if any) and to
   conformal field theory.

8. **Duality and star-triangle for the Ising lattices.** Ch. 6 —
   Kramers-Wannier duality (which *locates* $T_c$ without solving the
   model) and the star-triangle (Y-Δ) transformation between square,
   triangular and honeycomb lattices. **Corpus coverage: zero** (the
   Onsager unit `08.03.01` uses the result of Kramers-Wannier duality
   — $\sinh 2K \sinh 2K^* = 1$ — but does not derive duality).

9. **Elliptic-function parametrisation.** Chs. 9-15 — the Boltzmann
   weights of the eight-vertex and hard-hexagon models are
   parametrised by Jacobi theta functions / elliptic functions, and the
   star-triangle relation becomes a theta-function addition formula. The
   corpus has elliptic-function / theta-function coverage in the
   Riemann-surfaces chapter (`06.06.05-theta-function`) — a lateral
   reference, not a duplication.

10. **The spherical and Bethe-lattice models.** Chs. 4-5 — exactly
    solvable in all dimensions, used to probe the dimensionality
    dependence of critical behaviour that the 2D models cannot show.
    **Corpus coverage: zero** (mean-field `08.02.01` is the closest
    analogue but solves neither exactly).

Baxter's book stops before the *algebraic* Bethe ansatz / quantum
inverse scattering method (Faddeev-Sklyanin-Takhtajan, 1979 onward) and
before quantum groups (Drinfeld-Jimbo, 1985) — those are the *sequel*
to Baxter, the abstraction of his star-triangle relation into Hopf
algebra. They are out of scope for a Baxter-equivalence audit but are
flagged as the natural downstream (FT entries beyond 2.12, if added).

**Density of theorem layer vs. existing corpus.** The shipped
`08-stat-mech/` chapter (32 `.md` files, including a `_new/` staging
folder of 4 Landau-Vol-5 units) is weighted toward (a) the
**field-theoretic / RG** axis (Wilson-Fisher, beta function, block-spin,
Gaussian field, conformal criticality, lattice gauge, Wick rotation,
path integral, a 10-unit `10-qft/` second-quantisation block) and (b) a
**thermodynamics / fluctuations** axis newly added from the Landau Vol 5
audit. **The exactly-solved-lattice-models axis Baxter occupies is
almost entirely absent** apart from the three shared anchors —
Ising model (`08.01.02`), transfer matrix (`08.03.02`), Onsager
solution (`08.03.01`). Overlap of *named topics* with Baxter is **~10%**
(Ising + transfer matrix + Onsager + the thermodynamic background of
Ch. 1, which `08.01.*` covers). The eight-vertex, six-vertex,
hard-hexagon, Yang-Baxter, Bethe-ansatz, corner-transfer-matrix,
duality / star-triangle, spherical and Bethe-lattice topics — the
**entire technical content Baxter exists to teach** — are net-new.
**The dominant editorial finding: this is a low-coverage book with a
large net-new production requirement, NOT a framing / deepening pass
like Landau Vol 5 or Donaldson.**

---

## §2 Coverage table (Babel Bible vs Baxter)

Cross-referenced against the 32-file `content/08-stat-mech/` chapter
plus the `content/11-stat-mech-physics/` Ising unit and the
`content/05-symplectic/` integrable-systems block. Verified actual
unit ids via `find content -name "*.md" | sort` and content grep for
`yang-baxter|bethe|star-triangle|corner transfer|hard-hexagon|
eight-vertex|six-vertex`. ✓ = covered at Baxter-equivalent depth,
△ = topic present but Baxter-distinctive machinery / depth not
captured, ✗ = not covered.

### Ch. 1 — Basic statistical mechanics

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Partition function, free energy | `08.01.01-partition-function`, `08.01.04-free-energy` | ✓ | Shipped. Baxter Ch. 1 is background. |
| Boltzmann distribution / canonical ensemble | `08.01.03-boltzmann-distribution`; `11.04.01-canonical-ensemble` | ✓ | Shipped (two chapters). |
| Correlation functions, correlation length | `08.05.02-correlation-functions` | ✓ | Shipped. |
| Critical exponents, scaling | `08.05.01-critical-exponents` | ✓ | Shipped (universality-class abstraction). Baxter's *non-universal* exponents (eight-vertex) are the distinctive case — see Ch. 9 row. |

### Ch. 2 — The one-dimensional Ising model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| 1D Ising model, no finite-$T$ transition | `08.01.02-ising-model`; `11.06.01-ising-model-and-phase-transitions` | ✓ | Both shipped; `11.06.01` carries the explicit $2\times2$ transfer-matrix solution of the 1D chain. |
| Transfer-matrix method (Ising) | `08.03.02-transfer-matrix` | ✓ | Shipped at Baxter-equivalent depth for the Ising case; the **general commuting-family framework** is the gap (Ch. 9). |

### Ch. 3 — The mean-field model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Bragg-Williams / Curie-Weiss mean field | `08.02.01-mean-field` | ✓ | Shipped. Baxter Ch. 3 is a foil. |

### Ch. 4 — Ising model on the Bethe lattice

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Exact Ising solution on the Cayley tree / Bethe lattice; Bethe-Peierls approximation | — | ✗ | **Gap.** No Bethe-lattice unit. Below FT-equivalence priority (P3); mean-field-like, pedagogically secondary. |

### Ch. 5 — The spherical model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Berlin-Kac spherical model, exact in all $d$; dimensionality dependence of criticality | — | ✗ | **Gap (P3).** No spherical-model unit. A clean exactly-solved model in all dimensions; Baxter Ch. 5; Berlin-Kac 1952 originator. Secondary to the apex vertex/CTM block. |

### Ch. 6 — Duality and star-triangle for Ising lattices

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Kramers-Wannier duality; $\sinh 2K \sinh 2K^* = 1$; location of $T_c$ | `08.03.01-onsager-solution` (uses result) | △ | **Depth gap.** The Onsager unit *uses* the dual coupling to locate $T_c$ but does not derive Kramers-Wannier duality. No dedicated duality unit. Baxter Ch. 6; Kramers-Wannier 1941 originator. |
| Star-triangle (Y-Δ) transformation for square / triangular / honeycomb Ising | — | ✗ | **Gap (P2).** The *Ising-lattice* star-triangle relation; predecessor to the general Yang-Baxter equation (Ch. 9). |

### Ch. 7 — The two-dimensional Ising model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Square-lattice Ising free energy (transfer-matrix / spinor solution) | `08.03.01-onsager-solution` | ✓ | Shipped. Baxter Ch. 7 reproduces Onsager-Kaufman; corpus has the Onsager solution. |
| Spontaneous magnetisation $M = (1-k^{-2})^{1/8}$ (Yang 1952) | — (touched in `08.05.01` via $\beta=1/8$) | △ | **Depth gap.** The exponent $\beta=1/8$ appears in `08.05.01-critical-exponents` and `11.06.01`; the *exact magnetisation formula* and Yang's 1952 derivation are not carried out. Closed by the CTM unit (Ch. 10/11). |

### Ch. 8 — The six-vertex (ice-type) model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Six-vertex / ice-type model; square ice, KDP, F models | — | ✗ | **Gap (P1).** Net-new. Lieb 1967 originator. |
| Residual entropy of ice (Lieb) | — | ✗ | **Gap (P1).** Worked result $W = (4/3)^{3/2}$. |
| **Bethe ansatz** for the transfer-matrix eigenvector | — | ✗ | **Gap (P1, Baxter-foundational).** Zero corpus coverage. Bethe 1931 originator; Lieb 1967 application. Mandatory-originator-prose. |
| Line of critical points / ferroelectric phases | — | ✗ | **Gap (P2).** |

### Ch. 9 — The eight-vertex model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Eight-vertex model exact solution | — | ✗ | **Gap (P1, apex).** Baxter 1971. The whole point of the book. |
| **Commuting transfer matrices ⇔ star-triangle / Yang-Baxter relation** | — | ✗ | **Gap (P1, apex, mandatory-originator-prose).** Zero corpus coverage. Baxter 1972 (lattice), C. N. Yang 1967 (quantum). The organising principle of integrable lattice models. |
| Elliptic-theta parametrisation of the Boltzmann weights | `06.06.05-theta-function` (lateral) | △ | Theta functions exist in the Riemann-surfaces chapter; the *use* in vertex-model weights is net-new and laterally references `06.06.05`. |
| $TQ$ relation and Baxter's $Q$-operator | — | ✗ | **Gap (P1/P2).** The functional-equation method for the free energy. |
| **Non-universal (continuously varying) critical exponents** | `08.05.01-critical-exponents` | △ | **Conceptual gap.** The shipped exponents unit assumes universality; the eight-vertex model is the counterexample (exponents depend continuously on anisotropy). Master-tier deepening flagged. |

### Ch. 10-11 — Ising correlations and the corner transfer matrix

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Corner transfer matrix (CTM)** method; geometric spectrum | (named once in `08.03.02` synthesis) | ✗ | **Gap (P1, Baxter-signature).** The transfer-matrix unit name-drops the CTM in one synthesis sentence; develops nothing. Baxter 1976-78 originator. |
| Spontaneous magnetisation via CTM | — | ✗ | **Gap (P1).** Folded into the CTM unit. |
| Ising correlation functions; Wu-McCoy-Tracy-Barouch / Painlevé scaling | — | ✗ | **Gap (P3).** Deep; the Painlevé-VI connection is below FT-equivalence priority (advanced; deferable per playbook §18). |

### Ch. 12 — Potts / Ashkin-Teller / general vertex models

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| $q$-state Potts model, Ashkin-Teller, staggered vertex models | — | ✗ | **Gap (P3).** Potts generalises Ising; not exactly solved in general but the duality / critical-point results are Baxter-canonical. Secondary. |

### Ch. 13 — The hard-hexagon model

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Hard-hexagon lattice gas exact solution | — | ✗ | **Gap (P1, apex).** Baxter 1980. |
| Order parameter as Rogers-Ramanujan identity | — | ✗ | **Gap (P1).** Folded into the hard-hexagon unit; laterally connects exactly-solved models to the Rogers-Ramanujan number theory. |

### Ch. 14-15 — Elliptic functions, inversion relation, appendices

| Baxter topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Jacobi theta / elliptic functions | `06.06.05-theta-function` (lateral) | △ | Theta-function definition exists in Riemann-surfaces; the *elliptic-function machinery as used in vertex-model weights* is net-new but can lateral-reference `06.06.05`. |
| Inversion-relation method for the free energy | — | ✗ | **Gap (P2).** Folded into the eight-vertex / $TQ$ unit. |

### Aggregate coverage estimate (Baxter)

- **Theorem layer:** ~12% topic-level, ~10% at Baxter-equivalent
  machinery-depth. The shipped chapter covers the *thermodynamic
  background* (Ch. 1) and the *three shared anchors* (1D + 2D Ising,
  transfer matrix, Onsager) at full depth — but the **entire
  exactly-solved-lattice-models apparatus** (six-vertex, eight-vertex,
  hard-hexagon, Yang-Baxter / star-triangle, Bethe ansatz, corner
  transfer matrix, duality, spherical, Bethe lattice) is absent.
- **Worked-example layer:** ~8%. Ice entropy, eight-vertex free energy,
  hard-hexagon order parameter, CTM magnetisation, Bethe-ansatz
  equations — none present.
- **Notation layer:** ~25%. Major crosswalk concerns (Baxter-specific):
  - Baxter uses $K = J/k_BT$ for the dimensionless coupling; corpus
    Ising units use $\beta J$ and $K$ inconsistently. Pin a note.
  - Baxter's elliptic-function modulus $k$, nome $q$, and the
    crossing parameter / spectral parameter $u$ (or $\lambda$) need a
    crosswalk to the Riemann-surfaces theta-function conventions in
    `06.06.05`.
  - Vertex-model weights $a, b, c, d$ (eight-vertex) and the
    star-triangle relation's three rapidities — pin in the
    Yang-Baxter Master section.
  - $Q$ for the auxiliary operator (Baxter $Q$-operator) collides with
    nothing in the corpus but must be introduced cleanly.
- **Sequencing layer:** ~15%. The corpus has Ising → transfer matrix →
  Onsager; Baxter continues transfer matrix → commuting transfer
  matrices → Yang-Baxter → Bethe ansatz / CTM → eight-vertex →
  hard-hexagon. The continuation is entirely net-new.
- **Intuition layer:** ~15%. Integrability-as-commuting-conserved-
  quantities, the geometric CTM spectrum, non-universal exponents — all
  absent.
- **Application layer:** ~5%. Ice models, ferroelectrics, hard-hexagon
  lattice gas — none present.

After P1: theorem layer ~55%, machinery-depth ~50%. After P1+P2:
~80% / ~78%. After P1+P2+P3: ~92% / ~90%. Full ≥95% requires the
deferred Potts / spherical / Bethe-lattice / Painlevé-correlation
units and a dedicated Baxter problem pack — deferred per the
reduced-audit constraint.

---

## §3 Gap punch-list (priority-ordered)

The `08-stat-mech/` chapter is mature on the field-theoretic / RG side
and has the three Baxter anchors (Ising, transfer matrix, Onsager), but
exposes a **near-total gap on the exactly-solved-lattice-models
apparatus**. Recommended slot allocation: open a new sub-chapter
**`08.13-exactly-solved-models/`** (or extend the existing
`08.03-onsager/` block, which already holds the transfer matrix). The
Yang-Baxter / commuting-transfer-matrix unit is the load-bearing root;
the six-vertex (Bethe ansatz), eight-vertex, corner-transfer-matrix and
hard-hexagon units build on it.

Non-colliding ids are assigned in a fresh `08.13.*` range (verified
unused: no `08.13.*` exists in `content/`).

### Priority 1 — Baxter-load-bearing apparatus (mandatory for FT-equivalence) (5 items)

1. **`08.13.01` Star-triangle / Yang-Baxter equation and commuting
   transfer matrices.** [NEW] Baxter Ch. 9 anchor; **Baxter 1972
   (*Ann. Phys.* 70:193) is the lattice originator; C. N. Yang 1967
   (*Phys. Rev. Lett.* 19:1312) is the quantum-many-body originator**;
   McGuire 1964 predecessor. Three-tier; ~2400 words. Beginner: two
   transfer matrices on the same lattice; when do they commute?
   Intermediate: the **star-triangle relation** on Boltzmann weights as
   the sufficient condition; the spectral / rapidity parameter; commuting
   family ⇒ infinitely many conserved quantities ⇒ integrability.
   Master: the $R$-matrix form $R_{12}R_{13}R_{23} = R_{23}R_{13}R_{12}$,
   the parametrised solution, lateral reference to
   `05.02.03-integrable-system` (commuting Hamiltonians) and to the
   braid-group / quantum-group downstream. **Mandatory originator-prose**
   — paraphrase Baxter 1972 §2 and Yang 1967 directly with explicit
   `[ref:]` citations. **The single most important unit in this audit —
   the root the rest of the chapter hangs on.** Apex unit.

2. **`08.13.02` The six-vertex (ice-type) model and the Bethe ansatz.**
   [NEW] Baxter Ch. 8 anchor; **Bethe 1931 (*Z. Phys.* 71:205) is the
   originator of the (coordinate) Bethe ansatz; Lieb 1967 (*Phys. Rev.
   Lett.* 18:1046, 19:108) solved the six-vertex model; Pauling 1935 for
   ice entropy.** Three-tier; ~2400 words. Beginner: the ice rule and the
   six allowed vertex configurations; residual entropy of ice. Intermediate:
   the transfer matrix; the **coordinate Bethe ansatz** for its
   eigenvector (one-magnon, two-magnon, $n$-magnon); the Bethe equations.
   Master: Lieb's solution — KDP / F / disordered phases, the line of
   critical points, the residual entropy $W = (4/3)^{3/2}$ of square ice.
   **Mandatory originator-prose** — paraphrase Bethe 1931 directly.
   Prereq: `08.03.02-transfer-matrix`, `08.13.01`. Apex-adjacent.

3. **`08.13.03` The eight-vertex model (Baxter 1971).** [NEW] Baxter
   Ch. 9 anchor; **Baxter 1971 (*Phys. Rev. Lett.* 26:832; *Ann. Phys.*
   70:193, 70:323) is the originator.** Three-tier; ~2400 words.
   Beginner: the eight-vertex generalisation of six-vertex; the weights
   $a,b,c,d$. Intermediate: the star-triangle relation satisfied by the
   weights, solved by **elliptic-theta parametrisation** (lateral
   reference `06.06.05-theta-function`); the $TQ$ relation and Baxter's
   $Q$-operator. Master: the free energy via the inversion relation;
   **continuously-varying (non-universal) critical exponents** depending
   on the anisotropy $\mu$, and the foreshadowing of the $c=1$ CFT line.
   **Mandatory originator-prose** — paraphrase Baxter 1971 directly.
   Prereq: `08.13.01`, `08.13.02`. **Apex unit** — the headline result
   of the book.

4. **`08.13.04` The corner transfer matrix.** [NEW] Baxter Ch. 10-11
   anchor; **Baxter 1976-78 (*J. Stat. Phys.* 15:485; 19:461) is the
   originator.** Three-tier; ~2000 words. Beginner: partition function
   as a product of four corner transfer matrices; why corners (not rows)
   reach the order parameter. Intermediate: the variational /
   star-triangle property of the CTM; the **geometric (equally-spaced)
   spectrum** $\propto x^n$. Master: computing the spontaneous
   magnetisation $M = (1-k^{-2})^{1/8}$ of the Ising model and the
   eight-vertex order parameter; lateral note to the
   matrix-product-state / DMRG connection. Prereq: `08.03.02`,
   `08.13.01`. Near-apex.

5. **`08.13.05` The hard-hexagon model (Baxter 1980).** [NEW] Baxter
   Ch. 13 anchor; **Baxter 1980 (*J. Phys. A* 13:L61) is the
   originator.** Three-tier; ~2000 words. Beginner: the hard-hexagon
   lattice gas (nearest-neighbour exclusion on the triangular lattice).
   Intermediate: solution by the corner transfer matrix (uses `08.13.04`);
   the order parameter. Master: the order-parameter expression as a
   **Rogers-Ramanujan identity** and the Rogers-Ramanujan continued
   fraction; the critical fugacity. **Mandatory originator-prose** —
   paraphrase Baxter 1980 directly. Prereq: `08.13.04`. Apex-adjacent —
   the second headline Baxter result.

### Priority 2 — Baxter-distinctive depth and the duality / inversion layer (3 items)

6. **`08.13.06` Kramers-Wannier duality and the star-triangle
   transformation for Ising lattices.** [NEW] Baxter Ch. 6 anchor;
   **Kramers-Wannier 1941 (*Phys. Rev.* 60:252) originator;** Wegner 1971
   for the lattice-gauge generalisation. Three-tier; ~1800 words.
   Beginner: high-/low-temperature expansions and the self-dual point.
   Intermediate: the duality relation $\sinh 2K \sinh 2K^* = 1$ and the
   exact location of $T_c$ *without solving the model*. Master: the
   **star-triangle (Y-Δ) transformation** between square, triangular and
   honeycomb Ising lattices, as the Ising-specific predecessor of the
   general Yang-Baxter relation (`08.13.01`). Deepens / supplies the
   derivation the Onsager unit `08.03.01` currently assumes. Prereq:
   `08.01.02-ising-model`. Connects to `08.08.*` lattice-gauge duality.

7. **`08.13.07` The spherical model (Berlin-Kac).** [NEW] Baxter Ch. 5
   anchor; **Berlin-Kac 1952 (*Phys. Rev.* 86:821) originator.**
   Three-tier; ~1600 words. Beginner: the spherical constraint as a
   tractable relaxation of the Ising constraint. Intermediate: exact
   solution via the saddle-point / Lagrange-multiplier method in general
   dimension $d$. Master: the dimensionality dependence of critical
   behaviour ($d_c = 4$, no transition for $d \le 2$), as the cleanest
   exactly-solved illustration of upper / lower critical dimension;
   lateral note to `08.04.02-wilson-fisher`. Prereq:
   `08.01.01-partition-function`.

8. **Deepen `08.05.01-critical-exponents`.** [ENRICH] Add a Master-tier
   section on **non-universal critical exponents**, anchored to the
   eight-vertex model (`08.13.03`): the eight-vertex exponents vary
   *continuously* with the anisotropy, the canonical counterexample to
   naive universality, resolved by the weak-universality picture
   (Suzuki 1974) and the $c=1$ CFT line. Pin Baxter 1971 alongside the
   existing universality references. No new id.

### Priority 3 — secondary exactly-solved models and correlation depth (3 items)

9. **`08.13.08` The Ising model on the Bethe lattice.** [NEW] Baxter
   Ch. 4 anchor; Bethe 1935 / Bethe-Peierls originator. Master-tier
   focus; ~1400 words. Exact solution on the Cayley tree, the
   Bethe-Peierls approximation, and why tree-like geometry gives
   mean-field-like exponents. Prereq: `08.01.02-ising-model`,
   `08.02.01-mean-field`. Deferable.

10. **`08.13.09` The $q$-state Potts model — duality and critical
    points.** [NEW] Baxter Ch. 12 anchor; Potts 1952 originator; Baxter
    1973 for the critical-point / first-order-transition results.
    Master-tier; ~1600 words. The Potts generalisation of Ising, its
    self-dual critical point $e^{K_c} = 1 + \sqrt{q}$, the
    first-order / continuous transition boundary at $q=4$, and the
    Fortuin-Kasteleyn random-cluster representation. Prereq:
    `08.13.06`. Deferable.

11. **Deepen `08.05.02-correlation-functions`.** [ENRICH] Add a
    Master-tier section on the **2D Ising spin-spin correlation
    function** and its scaling form — the Wu-McCoy-Tracy-Barouch result
    and the **Painlevé-III / VI** connection (Baxter Ch. 10). Flag as
    advanced / deferable per playbook §18 (frontier-only). Pin
    Wu-McCoy-Tracy-Barouch 1976 (*Phys. Rev. B* 13:316). No new id.

### Priority 4 — survey / pointer items (deferable) (2 items)

12. **`08.13.10` Pointer: the algebraic Bethe ansatz and the quantum
    inverse scattering method.** [NEW] Pointer / survey, Master-only;
    ~900 words. Faddeev-Sklyanin-Takhtajan 1979 abstraction of Baxter's
    commuting-transfer-matrix method; the Yang-Baxter relation as the
    intertwiner of an $R$-matrix; bridge from `08.13.01` to quantum
    groups (Drinfeld-Jimbo 1985). Pointer to a future FT entry beyond
    2.12. Deferable.

13. **Notation crosswalk pin (no standalone file).** [ENRICH] Pin the
    Baxter coupling / elliptic-modulus / rapidity / vertex-weight
    notation in the Master sections of `08.13.01`-`08.13.05` per §2,
    with explicit crosswalk to `06.06.05-theta-function`. No standalone
    `notation/baxter.md` needed.

---

## §4 Implementation sketch

**Minimum Baxter-equivalence batch** = priority 1 only (items 1-5):
5 new units, all net-new (one apex root + two apex headline results +
two near-apex). Estimates (mirroring the Landau Vol 5 batch):

- ~4 hours per typical new unit (research + draft + validate 27/27 +
  Lean stub + Bridge / Synthesis prose).
- The apex / originator-prose units (item 1 Yang-Baxter, item 3
  eight-vertex, item 5 hard-hexagon) require substantial historical
  research and primary-source paraphrase — ~5-6 hours each.
- Priority 1: 2 typical × 4 h + 3 apex × 5.5 h = ~24-25 hours.
- Priority 1+2: ~25 + 2 new × 3.5 h + 1 deepening × 1.5 h = ~34 hours.
- Priority 1+2+3: ~34 + 2 new × 3 h + 1 deepening × 1.5 h = ~42 hours.
- Full punch-list including P4: ~44 hours. **Fits a focused 6-8 day
  window**, comparable to the Landau Vol 5 batch but with a higher
  net-new fraction (all P1 items are NEW, vs. Landau's mix of new +
  deepenings).

**Batch structure.**

- **Batch A (the root + Bethe ansatz, items 1, 2, ~11 h):** opens
  `08.13-exactly-solved-models/`. Item 1 (Yang-Baxter) is the
  load-bearing root; item 2 (six-vertex / Bethe ansatz) is its first
  application. Produce together.
- **Batch B (apex models, items 3, 4, 5, ~16 h):** depends on Batch A.
  Eight-vertex (3) needs Yang-Baxter (1); CTM (4) needs the transfer
  matrix (`08.03.02`, shipped) + Yang-Baxter; hard-hexagon (5) needs
  the CTM (4).
- **Batch C (duality / spherical / exponents, items 6, 7, 8, ~9 h):**
  duality (6) is largely independent (needs only `08.01.02`); spherical
  (7) is independent; the critical-exponents deepening (8) needs the
  eight-vertex unit (3) from Batch B.
- **Optional Batch D (P3+P4, items 9-13, ~10 h):** after P1+P2 lands.

**Originator-prose targets.** Baxter is **himself the originator** for
the eight-vertex, corner-transfer-matrix, hard-hexagon, and
commuting-transfer-matrix results — so this book triggers the
author-as-originator clause of FASTTRACK_EQUIVALENCE_PLAN.md §(originator
layer). Mandatory originator-prose items:

- **Item 1** (`08.13.01` Yang-Baxter): Baxter 1972 + C. N. Yang 1967 —
  co-originators (lattice + quantum). Apex; cite both.
- **Item 2** (`08.13.02` six-vertex / Bethe ansatz): Bethe 1931 (sole
  originator of the ansatz) + Lieb 1967 (six-vertex application).
- **Item 3** (`08.13.03` eight-vertex): **Baxter 1971 — sole
  originator.** Apex.
- **Item 5** (`08.13.05` hard-hexagon): **Baxter 1980 — sole
  originator.** Apex-adjacent.

Each `08.13.*` Master section must paraphrase Baxter's own prose (the
book *is* the originator text), not only the modern synthesis.

Joint originator-citations:

- **Item 4 (CTM):** Baxter 1976-78.
- **Item 6 (duality):** Kramers-Wannier 1941; Wegner 1971.
- **Item 7 (spherical):** Berlin-Kac 1952.
- **Item 9 (Bethe lattice):** Bethe 1935; Peierls.
- **Item 10 (Potts):** Potts 1952; Fortuin-Kasteleyn 1972.
- **Item 11 (Ising correlations):** Wu-McCoy-Tracy-Barouch 1976.

**Notation crosswalk concerns (Baxter-specific).** Recorded inline in
the Master sections of each new unit:

- **Coupling:** Baxter $K = J/k_BT$; corpus Ising units mix $\beta J$
  and $K$. Pin in `08.13.01`.
- **Elliptic modulus / nome / spectral parameter:** Baxter $k$, $q$,
  $u$ (or $\lambda$); crosswalk to `06.06.05-theta-function`
  conventions. Pin in `08.13.03`.
- **Vertex weights:** eight-vertex $a,b,c,d$; star-triangle rapidities.
  Pin in `08.13.01`/`08.13.03`.
- **$Q$-operator:** Baxter's auxiliary $Q$. Introduce cleanly in
  `08.13.03`.

**DAG edges.** New prerequisites for P1+P2 (assumes the shipped
`08-stat-mech/` units, including `08.01.02`, `08.03.01`, `08.03.02`,
`08.05.01`, `08.05.02`, are present, and laterally
`05.02.03-integrable-system`, `06.06.05-theta-function`):

- `08.13.01` (Yang-Baxter) ← {`08.03.02` transfer matrix,
  `05.02.03` integrable system (lateral)}; → everything else in `08.13`.
- `08.13.02` (six-vertex / Bethe) ← {`08.03.02`, `08.13.01`}.
- `08.13.03` (eight-vertex) ← {`08.13.01`, `08.13.02`,
  `06.06.05` theta (lateral)}; → `08.05.01` deepening.
- `08.13.04` (CTM) ← {`08.03.02`, `08.13.01`}.
- `08.13.05` (hard-hexagon) ← `08.13.04`.
- `08.13.06` (duality / star-triangle) ← `08.01.02`; relates to
  `08.08.*` lattice gauge.
- `08.13.07` (spherical) ← `08.01.01`.
- `08.13.08` (Bethe lattice) ← {`08.01.02`, `08.02.01`}.
- `08.13.09` (Potts) ← `08.13.06`.

**Lean status.** Per the bio/chem/applied-physics prose-first memory
and playbook, these lattice-physics units are **prose-first**:
`lean_status: none` is appropriate for all `08.13.*` units (the
shipped `08.03.*` Onsager / transfer-matrix units already carry
`lean_status: none`). The contract lift is multi-section Master prose +
originator paraphrase, not formalisation.

**Chapter structure.** Adds one new sub-chapter:

- **`08.13-exactly-solved-models/`** — items 1-10 (Yang-Baxter,
  six-vertex, eight-vertex, CTM, hard-hexagon, duality, spherical,
  Bethe lattice, Potts, pointer). Optional alias
  `08.13-integrable-lattice-models/`.

Extends:
- **`08.05-critical/`** — item 8 (non-universal exponents), item 11
  (Ising correlation depth).

**Composite note.** Unlike the Donaldson + Forster composite, Baxter has
**no near-neighbour FT book to share a batch with** — it is the unique
exactly-solved-models entry. The Yang-Baxter unit (item 1) will,
however, be **the load-bearing prerequisite for any future
quantum-groups / integrable-QFT FT entry** beyond 2.12, so it should be
produced at apex depth even though only Baxter currently consumes it.

---

## §5 What this plan does NOT cover

- **The algebraic Bethe ansatz / quantum inverse scattering method.**
  Faddeev-Sklyanin-Takhtajan (1979+) abstract Baxter's commuting-
  transfer-matrix method into the $R$-matrix / monodromy-matrix
  formalism. Item 12 is a pointer only; full coverage is a *sequel* to
  Baxter (a future FT entry beyond 2.12).
- **Quantum groups (Drinfeld-Jimbo Hopf algebras).** The abstraction of
  the star-triangle relation into $U_q(\mathfrak{g})$ — Drinfeld 1985,
  Jimbo 1985 — is downstream of Baxter and out of scope. The corpus has
  `48.12.49-bialgebra-hopf-milnor-moore` (Hopf algebras in topology) but
  no quantum-group unit; that is a separate FT campaign.
- **Conformal field theory of the critical models.** The $c=1$ line
  (eight-vertex / Ashkin-Teller) and the Ising $c=1/2$ minimal model
  belong to the CFT track (`08.06.02-conformal-criticality` exists as a
  stub). This plan flags the connection (item 8 Master) but does not
  build the CFT correspondence.
- **The Painlevé / isomonodromy theory of Ising correlations.**
  Wu-McCoy-Tracy-Barouch and the Painlevé-III/VI connection (Baxter
  Ch. 10) is flagged P3-deferable (item 11) per playbook §18
  frontier-only rule; the full isomonodromic-deformation theory is out
  of scope.
- **Non-equilibrium / stochastic exactly-solved models.** ASEP,
  KPZ, the Razumov-Stroganov correspondence — modern descendants of the
  Yang-Baxter machinery, not in Baxter 1982. Out of scope.
- **Higher-dimensional and quantum lattice models.** Baxter is strictly
  2D classical (equivalently 1D quantum via the transfer matrix). The
  3D exactly-solved attempts (Zamolodchikov tetrahedron equation) are a
  pointer at most; out of scope.
- **Line-number problem inventory.** Baxter's chapter-end problems form
  a separate corpus; inventory deferred under the reduced-audit
  constraint.
- **Field-theoretic / RG statistical mechanics.** Already shipped in
  `08.04-rg/`, `08.06-gaussian/`, `08.08-lattice-gauge/`,
  `08.09-wick/`, `08.10-qft/` and owned by FT 2.09 Goldenfeld / 2.13
  Itzykson-Drouffe — not duplicated.
- **Thermodynamics / fluctuations.** Owned by FT 2.10 Landau Vol 5
  (audit + `08._new/` units); Baxter Ch. 1 background only — not
  re-audited here.

---

## §6 Acceptance criteria for FT equivalence (Baxter)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, *Exactly
Solved Models in Statistical Mechanics* is at equivalence-coverage
when:

- ≥95% of Baxter's named results (and the worked free-energy / order-
  parameter formulae) in Chs. 2, 6-13 map to Babel Bible units **at
  Baxter-equivalent machinery depth** (currently ~12%; after P1 ~55%;
  after P1+P2 ~80%; after P1+P2+P3 ~92%; full ≥95% requires the
  deferred Potts / Bethe-lattice / Painlevé-correlation units). Items 1
  (Yang-Baxter), 3 (eight-vertex), 2 (six-vertex / Bethe), 4 (CTM), 5
  (hard-hexagon) are the highest-leverage individual gaps.
- ≥80% of Baxter's problems have a Codex equivalent worked example
  (currently ~5%; closing requires a dedicated Baxter problem-pack pass
  — out of scope for this reduced audit).
- ≥90% of Baxter's worked examples (ice entropy, eight-vertex free
  energy, CTM magnetisation, hard-hexagon order parameter, Bethe
  equations) appear in a unit (currently ~8%; P1+P2 brings to ~75%).
- Notation crosswalk pinned in Master sections per §4 (coupling $K$,
  elliptic modulus / nome / spectral parameter, vertex weights,
  $Q$-operator), with explicit crosswalk to `06.06.05-theta-function`.
  No standalone `notation/baxter.md` needed.
- DAG: an unbroken prerequisite chain
  Ising → transfer matrix → Yang-Baxter → {Bethe ansatz, CTM} →
  {eight-vertex, hard-hexagon}. Currently breaks immediately after the
  transfer matrix (`08.03.02`) — item 1 (`08.13.01`) is the missing
  root.
- Pass-W weaving connects the new `08.13.*` units to the shipped
  `08.01.02` Ising, `08.03.01` Onsager, `08.03.02` transfer matrix,
  `08.05.01-02` critical, and laterally to `05.02.03-integrable-system`
  (commuting Hamiltonians → commuting transfer matrices) and
  `06.06.05-theta-function` (elliptic parametrisation).
- **Originator-prose units shipped:** items 1 (`08.13.01` Yang-Baxter),
  2 (`08.13.02` Bethe ansatz), 3 (`08.13.03` eight-vertex), 5
  (`08.13.05` hard-hexagon) all require explicit paraphrase of the
  primary sources — and because Baxter *is himself the originator* of
  the eight-vertex, CTM and hard-hexagon results, the author-as-
  originator clause (§ originator layer) applies: the `08.13.*` Master
  sections must paraphrase Baxter's own 1971 / 1972 / 1976 / 1980 prose,
  not only the modern textbook synthesis.

**Reduced-audit caveat.** Per AGENTIC_EXECUTION_PLAN.md §6.6 hard rule,
P5 verification cannot mark Baxter as `equivalence-covered` until a
**full audit replaces this reduced one** (Dover reprint acquired into
`reference/textbooks-extra/` or a section-by-section local TOC
inventory). The reduced status applies even if all 13 punch-list items
ship.

**Prerequisite alert.** Baxter sits at FT 2.12 — after the Section 1
mathematics anchors and after the Section 2 stat-mech foundations
(2.09 Goldenfeld RG, 2.10 Landau Vol 5). The corpus must keep the
elliptic-function / theta machinery (`06.06.05-theta-function`,
Riemann-surfaces chapter) and the integrable-systems block
(`05.02.03`, `05.09.*`) available as lateral references for items 1, 3,
5. This plan does not re-audit those prerequisites.

**Honest scope.** **Large equivalence gap — the largest net-new
production requirement of any Section-2 stat-mech audit so far.** Unlike
Landau Vol 5 (a framing / deepening pass on a mature chapter) or
Donaldson (mostly depth rewrites on 21 shipped units), Baxter's
technical core — Yang-Baxter, Bethe ansatz, six-/eight-vertex, corner
transfer matrix, hard-hexagon, duality, spherical — is **almost
entirely absent** from the corpus. Only the thermodynamic background
(Ch. 1) and the three shared anchors (Ising, transfer matrix, Onsager)
are shipped. The P1 batch is **5 new units, all net-new, three of them
apex / originator-prose** (Baxter is his own originator for the headline
results). P1+P2 is **7 new units + 2 deepenings**. This is a focused but
substantial campaign — the chapter's single most important addition is
the Yang-Baxter / commuting-transfer-matrix root (`08.13.01`), which
also unlocks any future quantum-groups / integrable-QFT FT entry.

---

## §7 Sourcing

- **Status:** BUY per `docs/catalogs/FASTTRACK_BOOKLIST.md` (entry 2.12).
- **Local copy:** **NOT RESOLVED.** `reference/` was searched
  (`find reference -iname "*baxter*"` and `*exactly*solved*` — no
  hits). This is the dominant factor making the audit `reduced`.
  Recommended remediation: acquire the **Dover 2007 reprint**
  (ISBN 978-0-486-46271-4 — inexpensive, in print) and scan into
  `reference/textbooks-extra/` as `Baxter - Exactly Solved Models in
  Statistical Mechanics (Dover 2007 reprint of Academic Press 1982).pdf`.
  Promote audit to `full` after.
- **Citation form:** R. J. Baxter, *Exactly Solved Models in Statistical
  Mechanics* (Academic Press, London, 1982; reprinted Dover, Mineola
  NY, 2007). ISBN 978-0-486-46271-4 (Dover).
- **Peer / companion sources (peer-anchors for §1):**
  - E. H. Lieb, D. C. Mattis (eds.), *Mathematical Physics in One
    Dimension* (Academic Press, 1966) — the source collection for the
    six-vertex / Bethe-ansatz results Baxter Ch. 8 builds on.
  - M. Gaudin, *La fonction d'onde de Bethe* (Masson, 1983; Eng. trans.
    *The Bethe Wavefunction*, CUP 2014) — the canonical Bethe-ansatz
    companion to Baxter.
  - M. Jimbo, T. Miwa, *Algebraic Analysis of Solvable Lattice Models*
    (AMS / CBMS 85, 1995) — the modern quantum-group reformulation of
    Baxter's corner-transfer-matrix and Yang-Baxter machinery.
  - M. Kardar, *Statistical Physics of Fields* (CUP, 2007) — graduate
    companion; its exactly-solved-models / transfer-matrix chapters
    parallel Baxter Chs. 2, 7, 8 at MIT graduate level.
- **Originator references** (cited in §3-§4 punch-list):
  H. A. Kramers, G. H. Wannier, "Statistics of the two-dimensional
  ferromagnet I" (*Phys. Rev.* 60:252 (1941)); H. Bethe, "Zur Theorie
  der Metalle I" (*Z. Phys.* 71:205 (1931)); T. H. Berlin, M. Kac,
  "The spherical model of a ferromagnet" (*Phys. Rev.* 86:821 (1952));
  E. H. Lieb, "Residual entropy of square ice" / "Exact solution of the
  problem of the entropy of two-dimensional ice" (*Phys. Rev.* 162:162;
  *Phys. Rev. Lett.* 18:1046 (1967)); C. N. Yang, "Some exact results
  for the many-body problem in one dimension with repulsive delta-
  function interaction" (*Phys. Rev. Lett.* 19:1312 (1967));
  R. J. Baxter, "Eight-vertex model in lattice statistics"
  (*Phys. Rev. Lett.* 26:832 (1971)) and "Partition function of the
  eight-vertex lattice model" (*Ann. Phys.* 70:193 (1972));
  R. J. Baxter, "Variational approximations for square lattice models in
  statistical mechanics" / corner-transfer-matrix papers
  (*J. Stat. Phys.* 15:485 (1976); 19:461 (1978)); R. J. Baxter,
  "Hard hexagons: exact solution" (*J. Phys. A* 13:L61 (1980));
  R. B. Potts, "Some generalized order-disorder transformations"
  (*Proc. Camb. Phil. Soc.* 48:106 (1952)); T. T. Wu, B. M. McCoy,
  C. A. Tracy, E. Barouch, "Spin-spin correlation functions for the
  two-dimensional Ising model" (*Phys. Rev. B* 13:316 (1976));
  L. Pauling, "The structure and entropy of ice" (*J. Am. Chem. Soc.*
  57:2680 (1935)).
- **Local copy retention.** If acquired, store at
  `reference/textbooks-extra/Baxter - Exactly Solved Models in
  Statistical Mechanics (Dover 2007).pdf` — not in
  `reference/fasttrack-texts/`, which is reserved for free-license /
  public-domain texts (Baxter is commercial).
