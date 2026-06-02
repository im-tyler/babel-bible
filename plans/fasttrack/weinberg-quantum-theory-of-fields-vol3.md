# Weinberg — *The Quantum Theory of Fields, Vol. 3: Supersymmetry* (Fast Track 2.19) — Audit + Gap Plan

**Book:** Steven Weinberg, *The Quantum Theory of Fields, Volume 3:
Supersymmetry* (Cambridge University Press 2000, 419 + xxii pp.). Trade ISBN
0-521-66000-9.

**Fast Track entry:** 2.19 (the third and final volume of the Weinberg QFT
trilogy on the mathematical-physics QFT track; sequel to Weinberg Vol 1
FT 2.17 — Foundations — and Vol 2 FT 2.18 — Modern Applications). This is
**frontier theoretical physics**: the canonical graduate reference for the
algebra, geometry, and phenomenology of supersymmetric quantum field theory.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite
of the orchestration protocol). Output is a concrete punch-list of new units to
write so that Weinberg Vol 3 (WQTFV3 hereafter) is covered to the equivalence
threshold (≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit notice.** No local PDF of Weinberg Vol 3 was located in the
reference tree (the candidate paths `reference/textbooks-extra/`,
`reference/fasttrack-texts/02-quantum-stat/`, and
`reference/book-collection/free-downloads/` hold Chatterjee, Sternberg, Woit,
Freed, Landau-Lifshitz, and jimmyqin's `weinberg-notes.pdf` — not the
textbook). The Cambridge book is in copyright. This audit works from the
publisher's chapter-level TOC (Cambridge Core / Google Books), the
well-canonised section structure of WQTFV3 (documented across the
supersymmetry-textbook literature it shares ground with — Wess-Bagger, Sohnius,
Terning, Martin's *SUSY Primer*, Bertolini's lecture notes), and Weinberg's own
preface. A full P1 inventory at line-number granularity is deferred until a copy
is procured. The structural conclusion below — **near-zero coverage** — is robust
to the missing PDF, because the corpus grep is exhaustive and unambiguous.

**Coordination with the rest of the trilogy.** Vol 3 *presupposes* the entire
Vol 1 / Vol 2 machinery (Poincaré reps, Wigner classification, the S-matrix,
spontaneous symmetry breaking, non-Abelian gauge theory, the renormalization
group). The Babel Bible has shipped a substantial Vol-1/Vol-2 substrate since
the Vol 1 audit (2026-05-17): the `12-quantum/` chapter now runs to 17
sub-chapters including free relativistic fields (`12.05.04–06`), canonical QFT
and tree-level QED (`12.12.*`), Fock spaces (`12.13.*`), algebraic QFT
(`12.14.*`), and one-loop QED radiative corrections (`12.16.*`); plus the
freshly-shipped Wigner Poincaré classification (`07.07.06`) and Lorentz /
$\mathrm{SL}(2,\mathbb{C})$ reps (`07.07.09`). **None of this touches
supersymmetry.** Vol 3's distinctive content — the SUSY extension of the
Poincaré algebra, superspace, supersymmetric Lagrangians, SUSY breaking, the
MSSM, supergraphs, SQCD/Seiberg duality, supergravity — is **0% covered**.

---

## §1 What WQTFV3 is for

WQTFV3 is the canonical mathematical-physics reference for **supersymmetry as a
quantum field theory**: the unique non-trivial extension of relativistic
spacetime symmetry beyond the Poincaré + internal-symmetry structure permitted
by the Coleman-Mandula theorem. Where Vol 1 derived QFT from Poincaré
invariance + cluster decomposition, and Vol 2 built the Standard Model from
gauge invariance + spontaneous symmetry breaking, Vol 3 asks: *what is the most
general symmetry a consistent S-matrix can have?* — and answers with the
**Haag-Łopuszański-Sohnius theorem** (1975): the only allowed extension is a
**graded** (super-)Lie algebra whose odd generators are spinorial
supercharges $Q_\alpha$ satisfying $\{Q_\alpha, \bar Q_{\dot\beta}\} =
2\sigma^\mu_{\alpha\dot\beta} P_\mu$.

Weinberg's editorial stance, stated in the Vol 3 preface, is **distinctively
historical and motivational**: he resists the "superspace-first" pedagogy of
Wess-Bagger and instead develops supersymmetry the way it was discovered — as a
constraint on the S-matrix (Ch. 24–25), then builds superfields and the
superspace formalism (Ch. 26–27) only once the algebra has motivated them. He is
candid that supersymmetry is, as of 2000, an **unobserved** symmetry of nature
whose appeal is theoretical (the hierarchy problem, gauge coupling unification,
a dark-matter candidate, and the near-inevitability of SUSY in any consistent
quantum theory of gravity / string theory).

Distinctive contributions, in roughly TOC order:

1. **History of supersymmetry** (Ch. 24). Weinberg's idiosyncratic credit-where-
   due chapter: the Gol'fand-Likhtman 1971 algebra, Volkov-Akulov 1972 nonlinear
   realization, Wess-Zumino 1974 four-dimensional model, and the Coleman-Mandula
   1967 no-go theorem that SUSY evades. The canonical reference for the
   pre-history.
2. **The supersymmetry algebra** (Ch. 25). Coleman-Mandula theorem; the
   Haag-Łopuszański-Sohnius theorem; the graded Lie algebra structure; $N=1$
   and extended ($N>1$) algebras; central charges; the BPS bound; massless and
   massive supermultiplets and their state content.
3. **Supermultiplets and the field content** (Ch. 25–26). Chiral, vector, and
   gravity multiplets; the equality of bosonic and fermionic degrees of freedom;
   the role of auxiliary fields ($F$, $D$).
4. **Superspace and superfields** (Ch. 26–27). Grassmann (anticommuting)
   coordinates $\theta, \bar\theta$; superspace $\mathbb{R}^{4|4}$; chiral and
   vector superfields; the superderivative $D_\alpha$; component expansions;
   Berezin integration; the $F$- and $D$-term constructions of supersymmetric
   actions.
5. **Supersymmetric Lagrangians** (Ch. 26–27). The Wess-Zumino model
   (chiral superfields, superpotential, the non-renormalization of the
   superpotential); supersymmetric gauge theories (super-Yang-Mills, the
   vector superfield, the Wess-Zumino gauge, the gauge kinetic $W^\alpha
   W_\alpha$ term).
6. **Spontaneous SUSY breaking** (Ch. 26–29). The Goldstino theorem;
   $F$-term (O'Raifeartaigh) and $D$-term (Fayet-Iliopoulos) breaking; the
   supertrace mass-sum rule; soft SUSY-breaking terms; the Witten index and
   the difficulty of dynamical SUSY breaking.
7. **The MSSM** (Ch. 28). The minimal supersymmetric Standard Model: the
   particle content (squarks, sleptons, gauginos, Higgsinos), $R$-parity, the
   $\mu$-problem, the superpotential, gauge coupling unification, the lightest
   supersymmetric particle as a dark-matter candidate, and the radiative
   electroweak-symmetry-breaking mechanism.
8. **Supergraphs and non-renormalization theorems** (Ch. 27). Feynman rules in
   superspace; the supergraph formalism; the **non-renormalization theorem** —
   the superpotential receives no perturbative corrections — proved via
   supergraph power-counting (the single most load-bearing technical result of
   SUSY perturbation theory).
9. **Supersymmetric QCD and Seiberg duality** (Ch. 29 + §29.6). The moduli
   space of supersymmetric vacua; holomorphy as a constraint on the effective
   superpotential; the Affleck-Dine-Seiberg superpotential; **Seiberg's
   electric-magnetic duality** for $N=1$ SQCD; the superconformal window; the
   $a$- and the NSVZ exact beta function. The deepest non-perturbative material
   in the book.
10. **Supergravity** (Ch. 31). Local supersymmetry; the gravitino;
    the supergravity multiplet; the super-Higgs mechanism; gravity-mediated
    SUSY breaking; $N=1$ supergravity coupled to matter (the Kähler potential
    / superpotential / gauge kinetic function data).
11. **Beyond $N=1$ / appendices** (Ch. 30, appendices). Saturation of the BPS
    bound; the geometry of extended SUSY ($N=2$ special Kähler, $N=4$
    finiteness); the appendices on the two-component spinor formalism and
    superspace integration are heavily used references in their own right.

WQTFV3 is **not** a first introduction to QFT, nor even to gauge theory — it is
a research-level reference assuming all of Vol 1 / Vol 2. It is the canonical
mathematical-physics entry to supersymmetric field theory, distinct from the
*superspace-first* pedagogy of Wess-Bagger [2] and the *phenomenology-first*
pedagogy of the SUSY-primer literature [5].

Peer sources triangulating Weinberg's treatment:

- **[1]** S. Weinberg, *The Quantum Theory of Fields, Vol. 1 / Vol. 2* (CUP
  1995/1996) — FT 2.17 / 2.18, the strict prerequisites. Vol 3 cross-references
  Vol 1 for the Coleman-Mandula / S-matrix machinery and Vol 2 for gauge theory
  and the renormalization group throughout.
- **[2]** J. Wess and J. Bagger, *Supersymmetry and Supergravity*, 2nd ed.
  (Princeton 1992) — the dominant superspace-first reference; the canonical
  source for two-component-spinor and superspace conventions. The standard
  "other notation" against which Weinberg's must be crosswalked.
- **[3]** M. F. Sohnius, "Introducing Supersymmetry," *Phys. Rep.* 128 (1985)
  39–204 — the canonical review; co-originator of the HŁS theorem.
- **[4]** P. C. West, *Introduction to Supersymmetry and Supergravity*
  (World Scientific 1990) — a rigorous algebra-first companion.
- **[5]** S. P. Martin, "A Supersymmetry Primer," arXiv:hep-ph/9709356
  (v7, 2016) — the free, canonical phenomenology-facing MSSM reference;
  the standard cross-read for Weinberg Ch. 28.
- **[6]** N. Seiberg, "Electric-Magnetic Duality in Supersymmetric Non-Abelian
  Gauge Theories," *Nucl. Phys. B* 435 (1995) 129 — the originator paper for
  the Ch. 29 duality material.
- **[7]** R. Haag, J. T. Łopuszański, M. Sohnius, "All possible generators of
  supersymmetries of the S-matrix," *Nucl. Phys. B* 88 (1975) 257 — the
  originator paper for the Ch. 25 algebra-classification result.

---

## §2 Coverage table (Babel Bible vs WQTFV3)

Cross-referenced against the current corpus as of 2026-06-01 via exhaustive
grep (`supersymmetr|superspace|superfield|wess-zumino|superpotential|MSSM|
seiberg|supergrav|haag.lopusza|gaugino|squark|gravitino|R-symmetry|...`). The
only SUSY-adjacent unit in the entire corpus is
`03.15.12-witten-s-supersymmetric-morse-theory-survey-pointer` — which uses
**supersymmetric quantum mechanics** (the $\mathbb{Z}_2$-graded Witten Laplacian)
as a heuristic for Morse homology, and is *not* SUSY field theory. All other
grep hits are incidental substring matches ("super space" in atlas charts,
"superalgebra" false positives, "Seiberg-Witten" gauge-theory invariants which
are a *4-manifold* tool, not Vol-3 SUSY).

✓ = covered, △ = partial / prerequisite-only / different framing, ✗ = not covered.

| WQTFV3 chapter / topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Ch. 24** — History of supersymmetry (Gol'fand-Likhtman 1971, Volkov-Akulov 1972, Wess-Zumino 1974) | — | ✗ | **Gap.** Optional / historical survey. |
| **Ch. 25.1** — Coleman-Mandula no-go theorem | — | ✗ | **Gap.** The theorem SUSY evades. Builds on S-matrix (`12.06.*` Vol-1 punch-list, not yet shipped) but no Coleman-Mandula unit exists. |
| **Ch. 25.2** — Haag-Łopuszański-Sohnius theorem; the SUSY algebra $\{Q,\bar Q\}=2\sigma^\mu P_\mu$; graded Lie algebra | `07.07.06-wigner-poincare`, `07.07.09-lorentz-sl2c`, `07.06.10-casimir-element` (Poincaré substrate only) | △ | **Gap (CRITICAL).** The Poincaré algebra it *extends* is shipped (`07.07.06`); the graded extension itself, and the notion of a Lie superalgebra, are absent. |
| **Ch. 25.3–25.5** — Supermultiplets; massless & massive reps of the SUSY algebra; central charges; BPS bound | — | ✗ | **Gap (CRITICAL).** Bose-Fermi degeneracy; the $N=1$ chiral / vector / gravity multiplets. |
| **Ch. 26.1–26.3** — Superspace; Grassmann coordinates $\theta,\bar\theta$; superfields; superderivatives $D_\alpha$ | Grassmann/Berezin appear only incidentally in `03.07.31-brst`, `03.09.26-mathai-quillen` | △ | **Gap (CRITICAL).** No dedicated Grassmann-number / Berezin-integration unit; no superspace unit. |
| **Ch. 26.4–26.7** — Chiral & vector superfields; component expansions; $F$- and $D$-terms; the Wess-Zumino model + superpotential | `12.05.04-klein-gordon-field`, `12.05.05-dirac-field` (the *components*, non-SUSY) | △ | **Gap (CRITICAL).** The scalar and spinor fields that assemble into a chiral multiplet are shipped individually; the supermultiplet that unifies them is not. |
| **Ch. 27.1–27.4** — Supersymmetric gauge theories; vector superfield; Wess-Zumino gauge; super-Yang-Mills; $W^\alpha W_\alpha$ | `03.07.05-yang-mills-action`, `12.12.01-canonical-qft`, `03.07.31-brst` (ordinary gauge theory only) | △ | **Gap (CRITICAL).** Ordinary Yang-Mills + BRST shipped; its supersymmetric extension absent. |
| **Ch. 27.5–27.9** — Supergraphs; superspace Feynman rules; the non-renormalization theorem | `12.16.*` one-loop QED (ordinary perturbation theory only) | △ | **Gap (CRITICAL).** The non-renormalization theorem is the load-bearing SUSY perturbation-theory result; no supergraph machinery exists. |
| **Ch. 28.1–28.4** — The MSSM; particle content; $R$-parity; $\mu$-problem; gauge unification; LSP dark matter | `12.16.*` (SM-side radiative corrections only) | ✗ | **Gap (CRITICAL — the phenomenological payload).** No sparticle spectrum, no MSSM superpotential, no soft terms. |
| **Ch. 29.1–29.3** — Spontaneous SUSY breaking: Goldstino; O'Raifeartaigh ($F$-term); Fayet-Iliopoulos ($D$-term); supertrace sum rule | `12.12.*`, Vol-2 SSB (Goldstone for ordinary SSB, not shipped as a unit either) | ✗ | **Gap.** The Goldstino theorem is the SUSY analogue of Goldstone. |
| **Ch. 29.4** — The Witten index; dynamical SUSY breaking | `03.15.12-witten-susy-morse-pointer` (Witten index in the Morse-theory sense, geometric) | △ | **Gap.** The geometric Witten index appears as a Morse-theory survey pointer; the *field-theory* Witten index $\mathrm{Tr}(-1)^F$ as an obstruction to SUSY breaking is not a unit. |
| **Ch. 29.5–29.6** — Supersymmetric QCD; moduli space of vacua; holomorphy; Affleck-Dine-Seiberg; **Seiberg duality**; superconformal window; NSVZ beta function | — | ✗ | **Gap (CRITICAL — the deepest non-perturbative content).** No SQCD, no Seiberg duality. Note: `03.07.*` Seiberg-**Witten** invariants are a distinct 4-manifold topology tool, NOT this material. |
| **Ch. 30** — Supersymmetry-breaking patterns / extended SUSY geometry ($N=2$ special Kähler, $N=4$) | `04.09.*` Kähler/Hodge (ordinary Kähler geometry) | △ | **Gap.** Special Kähler geometry of $N=2$ absent; ordinary Kähler shipped. |
| **Ch. 31** — Supergravity; local SUSY; the gravitino; super-Higgs; gravity-mediated breaking; $N=1$ SUGRA + matter | `13-gr-cosmology/*` (ordinary GR), `03.09.*` spin geometry | △ | **Gap.** GR and spin geometry shipped; their gauging-of-SUSY union (the gravitino, super-Higgs) absent. |
| **App. A–B** — Two-component spinor formalism; superspace integration conventions | `03.09.02-clifford-algebra`, `12.05.05-dirac-field` (four-component / geometric spinors) | △ | **Gap.** Weyl two-component conventions à la Weinberg/Wess-Bagger not recorded; needed as a notation anchor for every unit below. |

**Aggregate coverage estimate:** **~2% of WQTFV3 has corresponding Babel Bible
units**, and that 2% is *prerequisite substrate*, not Vol-3 content:
the Poincaré algebra (`07.07.06`), Lorentz/$\mathrm{SL}(2,\mathbb{C})$ reps
(`07.07.09`), Casimir elements (`07.06.10`), the individual scalar / spinor /
vector free fields that *assemble into* multiplets (`12.05.04–06`), fermionic
anticommutators and Fock space (`12.13.02`), ordinary Yang-Mills and BRST
(`03.07.05`, `03.07.31`), ordinary Kähler / spin geometry, and the geometric
Witten-index heuristic (`03.15.12`). **The supersymmetric content proper — the
SUSY algebra, superspace, superfields, supersymmetric Lagrangians, SUSY
breaking, the MSSM, supergraphs, SQCD/Seiberg duality, and supergravity — is
0% covered.** This is **not** a flag-as-mostly-done book; it is the single
largest open theoretical-physics gap on the Fast Track, comparable in
net-new-unit scale to the Woit / Weinberg-Vol-1 punch-lists but with **no
shared units** (nothing in the corpus duplicates SUSY content).

**Prerequisite-chain caveat.** Several Vol-3 gap units below have Vol-1/Vol-2
prerequisites that are *themselves* still on the punch-list (Coleman-Mandula
needs the S-matrix unit; the Goldstino needs ordinary spontaneous symmetry
breaking; supergraphs need the field-theoretic path integral). The Vol-3
production order must therefore either (a) wait on the Vol-1/Vol-2 punch-lists
clearing their CRITICAL items, or (b) self-contain the minimal prerequisite
statements inside the Master tier of the foundational SUSY units. Recommendation
(b) for the algebra units (state Coleman-Mandula as a cited black-box theorem),
(a) for the phenomenology units (the MSSM genuinely needs Vol-2 electroweak
SSB shipped first).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — structural / prerequisite:**

- **Create a new SUSY sub-chapter `content/12-quantum/19-supersymmetry/`** with
  the `12.19.*` ID namespace. Chapter 18 is free (the `12-quantum/` chapter
  currently ends at `17-quantum-information`). This is the natural home for the
  field-theory SUSY units (algebra, superspace, Lagrangians, breaking, MSSM,
  supergraphs, SQCD, SUGRA). Verified non-colliding 2026-06-01.
- **Add one Lie-superalgebra unit to representation theory** at
  `07.06.23` (next free ID in `07-representation-theory/06-lie-algebraic/`,
  which currently ends at `07.06.22-weyl-complete-reducibility`). This is the
  pure-algebra ($\mathbb{Z}_2$-graded Lie algebra) substrate that the SUSY
  algebra is a physical instance of; it lets the physics units cite it as a
  prerequisite rather than re-deriving graded-Jacobi.
- **Add a Grassmann-number / Berezin-integration unit.** Place at `12.19.02`
  (superspace coordinates) or factor as a standalone algebra unit; currently
  Grassmann/Berezin appear only incidentally inside `03.07.31-brst` and
  `03.09.26-mathai-quillen`. The superspace formalism needs a clean
  anticommuting-coordinate + Berezin-integral foundation.
- **Strict Vol-1/Vol-2 prerequisites.** The S-matrix / cluster-decomposition
  units (Vol-1 punch-list `12.06.*`) and ordinary spontaneous symmetry breaking
  / non-Abelian gauge units (Vol-2 punch-list) should ship before the
  Coleman-Mandula and MSSM units, respectively. Until then, state those results
  as cited black-boxes (see §2 caveat).
- **Procure a Vol 3 reference copy** before the supergraph (Ch. 27),
  SQCD/Seiberg-duality (Ch. 29), and supergravity (Ch. 31) units. These are
  technical enough that a TOC-only audit cannot reliably guide Master-tier
  structure; until procured, those punch-list items are *placeholders*.

**Priority 1 — load-bearing SUSY foundations (8 units):**

1. **[NEW] `07.06.23` Lie superalgebras ($\mathbb{Z}_2$-graded Lie algebras):
   graded Jacobi identity, the super-bracket, classification basics.** Pure
   algebra substrate. Anchor: Kac 1977; cross-read Frappat-Sciarrino-Sorba
   *Dictionary on Lie Superalgebras*. Prereq for unit 2. CRITICAL substrate.
2. **[NEW] `12.19.01` The supersymmetry algebra and the
   Haag-Łopuszański-Sohnius theorem.** The $N=1$ SUSY extension of the Poincaré
   algebra, $\{Q_\alpha,\bar Q_{\dot\beta}\}=2\sigma^\mu_{\alpha\dot\beta}P_\mu$;
   the Coleman-Mandula no-go theorem (stated, cited) and how the graded
   extension evades it; extended ($N>1$) algebras and central charges; the BPS
   bound. WQTFV3 §24–25 anchor. **The single load-bearing Vol-3 unit; written
   once, no corpus duplicate.** CRITICAL. Prereqs: `07.06.23`, `07.07.06`
   (Wigner Poincaré), `07.07.09` (Lorentz reps).
3. **[NEW] `12.19.02` Superspace and superfields: Grassmann coordinates,
   Berezin integration, the chiral / vector superfields, superderivatives
   $D_\alpha$.** The $\mathbb{R}^{4|4}$ formalism; component expansions;
   the $F$- and $D$-term projections. WQTFV3 §26 anchor. CRITICAL. Self-contains
   the Grassmann/Berezin foundation (or cite a separate `12.18` algebra unit).
4. **[NEW] `12.19.03` Supermultiplets: massless and massive representations of
   the SUSY algebra; Bose-Fermi degeneracy; the chiral, vector, and gravity
   multiplets.** WQTFV3 §25.4–25.5 anchor. CRITICAL. Prereq: unit 2.
5. **[NEW] `12.19.04` The Wess-Zumino model: chiral-superfield Lagrangian,
   the superpotential, the auxiliary $F$-field, and on-shell vs off-shell
   SUSY.** The simplest interacting SUSY field theory. WQTFV3 §26.4–26.8 anchor.
   CRITICAL. Originator: Wess-Zumino 1974 *Nucl. Phys. B* 70, 39. Prereq: unit 3.
6. **[NEW] `12.19.05` Supersymmetric gauge theory: the vector superfield,
   Wess-Zumino gauge, super-Yang-Mills, the gauge kinetic term
   $W^\alpha W_\alpha$.** WQTFV3 §27.1–27.4 anchor. CRITICAL. Prereqs: unit 3,
   `03.07.05-yang-mills-action`, `03.07.31-brst`.
7. **[NEW] `12.19.06` The non-renormalization theorem and supergraphs.**
   Superspace Feynman rules; the superpotential receives no perturbative
   corrections; holomorphy as the modern (Seiberg) proof. WQTFV3 §27.5–27.9
   anchor; cross-read Seiberg 1993. **The load-bearing SUSY perturbation-theory
   result.** CRITICAL. Prereqs: units 4–5; (soft) the field-theoretic path
   integral (Vol-1 punch-list `12.07.02`).
8. **[NEW] `12.19.07` Spontaneous supersymmetry breaking: the Goldstino
   theorem; $F$-term (O'Raifeartaigh) and $D$-term (Fayet-Iliopoulos) breaking;
   the supertrace mass sum rule; the Witten index $\mathrm{Tr}(-1)^F$ as an
   obstruction.** WQTFV3 §29.1–29.4 anchor. CRITICAL. Originators:
   O'Raifeartaigh 1975, Fayet-Iliopoulos 1974, Witten 1982 *Nucl. Phys. B*
   202, 253. Prereqs: units 4–5; cross-link to `03.15.12` (geometric Witten
   index).

**Priority 2 — phenomenology and non-perturbative structure (5 units):**

9. **[NEW] `12.19.08` The Minimal Supersymmetric Standard Model (MSSM):
   particle content (squarks, sleptons, gauginos, Higgsinos), the
   superpotential, $R$-parity, soft SUSY-breaking terms, the $\mu$-problem.**
   WQTFV3 §28 anchor; cross-read Martin *SUSY Primer*. The phenomenological
   payload. Prereqs: units 5, 7; (strict) Vol-2 electroweak SSB.
10. **[NEW] `12.19.09` Gauge coupling unification and the lightest
    supersymmetric particle: the MSSM running of couplings to a common scale;
    the neutralino as a dark-matter candidate.** WQTFV3 §28 (latter half)
    anchor. Prereq: unit 9; (soft) renormalization-group running (Vol-2).
11. **[NEW] `12.19.10` Supersymmetric QCD: the moduli space of vacua,
    holomorphy and the Affleck-Dine-Seiberg superpotential, the classical and
    quantum vacuum structure.** WQTFV3 §29.5 anchor. Prereqs: units 5–7.
12. **[NEW] `12.19.11` Seiberg duality for $N=1$ SQCD: electric-magnetic
    duality, the superconformal window, the NSVZ exact beta function.**
    WQTFV3 §29.6 anchor; originator Seiberg 1995 *Nucl. Phys. B* 435, 129.
    **The deepest non-perturbative SUSY content.** Master-tier. Prereq: unit 11.
13. **[NEW] `12.19.12` Supergravity basics: local supersymmetry, the
    gravitino, the supergravity multiplet, the super-Higgs mechanism, and
    gravity-mediated SUSY breaking.** WQTFV3 §31 anchor. Prereqs: units 2, 8;
    `13-gr-cosmology/04-einstein-eq/*` (Einstein equations),
    `03.09.05-spinor-bundle`.

**Priority 3 — depth / completion (3 units):**

14. **[NEW] `12.19.13` Extended supersymmetry: $N=2$ special Kähler geometry,
    BPS states and central-charge saturation, $N=4$ super-Yang-Mills and its
    finiteness.** WQTFV3 §30 anchor; cross-link `04.09.*` Kähler/Hodge. Master-
    tier survey. Prereqs: units 2, 6.
15. **[ENRICH] `12.19.14` Two-component spinor formalism and superspace
    conventions (Weinberg vs Wess-Bagger crosswalk).** WQTFV3 Appendices A–B
    anchor. The notation-anchor unit every SUSY unit footnotes; records the
    $\sigma^\mu / \bar\sigma^\mu$, $\epsilon_{\alpha\beta}$, and Berezin-measure
    conventions. Prereq: `03.09.02-clifford-algebra`.
16. **[NEW] `12.19.15` History of supersymmetry (survey): Gol'fand-Likhtman
    1971, Volkov-Akulov 1972 nonlinear realization, Wess-Zumino 1974, and the
    Coleman-Mandula 1967 no-go theorem.** WQTFV3 §24 anchor; written as an
    originator-citation survey unit anchoring the rest of the sub-chapter.

**Priority 4 — survey pointers (Master-only, optional, 2 units):**

17. **[NEW] `12.19.16` Pointer: supersymmetry and string theory; the
    near-inevitability of SUSY in consistent quantum gravity; forward pointer to
    the string-theory Fast Track entries.** Survey only.
18. **[NEW] `12.19.17` Pointer: the experimental status of supersymmetry
    (post-LHC); naturalness, the hierarchy problem, and split SUSY.** Survey
    only; honest accounting that SUSY is unobserved as of writing.

**Total new-unit punch-list count: 18 units** (8 priority-1 + 5 priority-2 +
3 priority-3 + 2 priority-4). Of these, **0 are shared** with any other Fast
Track audit (the SUSY content is genuinely Weinberg-Vol-3-distinctive; nothing
in the corpus or in the Woit / Vol-1 / Vol-2 punch-lists duplicates it). One
unit (`07.06.23` Lie superalgebras) lands in representation theory; the rest in
the new `12.19.*` SUSY sub-chapter.

**Notation crosswalk requirements** (record in unit 15 `12.19.14`, footnote in
every SUSY unit):

- Weinberg Vol 3 uses the **mostly-plus** metric $\eta_{\mu\nu} =
  \mathrm{diag}(-1,+1,+1,+1)$ (consistent with Vol 1 — see Vol-1 audit §3).
  Wess-Bagger and most SUSY literature use **mostly-minus**. The Codex must pick
  one and provide a conversion box. Recommend mostly-plus to match the Vol-1
  decision and the forthcoming `04-relativity/` convention.
- Weinberg's two-component (van der Waerden) spinor indices $\psi_\alpha,
  \bar\chi_{\dot\alpha}$ with $\epsilon^{12}=-\epsilon_{12}=+1$ (Weinberg's
  sign) differ from Wess-Bagger's. Record both, with the $\sigma^\mu_{\alpha
  \dot\beta}$, $\bar\sigma^{\mu\,\dot\alpha\beta}$ contraction conventions.
- The supercharge normalization $\{Q_\alpha,\bar Q_{\dot\beta}\} =
  2\sigma^\mu_{\alpha\dot\beta}P_\mu$ (Weinberg) vs the unit-coefficient
  convention elsewhere. Document in unit 2 (`12.19.01`).
- Berezin integration measure $\int d^2\theta\, \theta\theta = 1$ vs other
  normalizations; chiral-measure $d^2\theta$ vs full-superspace $d^4\theta$.
  Document in unit 3 (`12.19.02`).

---

## §4 Implementation sketch (P3 → P4)

For a full WQTFV3 coverage pass, items 1–8 (priority-1) are the minimum set,
contingent on (a) the Vol-1 punch-list's S-matrix and path-integral CRITICAL
items being either shipped or stated as black-boxes, and (b) procuring a Vol 3
reference copy for the supergraph / Seiberg-duality / supergravity units.
Realistic production estimate:

- **~6–8 hours per unit** for the algebra and superspace foundations (1–3) —
  these require careful graded-algebra and two-component-spinor setup, the
  Weinberg-vs-Wess-Bagger crosswalk, and three-tier presentation. The Beginner
  tier for SUSY is genuinely hard (there is no everyday analogue for a fermionic
  symmetry); these need a worked $N=1$ chiral-multiplet example end-to-end.
- **~6–8 hours per unit** for the Wess-Zumino / super-Yang-Mills / non-
  renormalization units (4–7) — Weinberg's signature material with no corpus
  precedent; Master tier requires the superfield Lagrangian construction in
  full.
- **~4–6 hours per unit** for the SUSY-breaking and MSSM phenomenology units
  (8–10) — closer to the SUSY-primer literature; bridge cleanly to Martin.
- **~8–10 hours per unit** for the SQCD / Seiberg-duality / supergravity units
  (11–13) — the deepest material; holomorphy, the NSVZ beta function, and the
  super-Higgs mechanism each need careful Master-tier treatment and a procured
  reference.
- **~3–4 hours per unit** for the depth/survey units (14–18).

Total priority-1 ≈ 50–60 hours. Plus priority-2 ≈ 30–40 hours. Plus priority-3
≈ 15–20 hours. Plus priority-4 ≈ 6 hours. **Full pass ≈ 100–125 hours.** No
shared-unit savings (unlike Vol 1's 7 shared-with-Woit units); every unit is
net-new. Fits a focused 3–4 week production window, but **should be sequenced
after the Vol-1/Vol-2 CRITICAL punch-lists** so the prerequisite chain is real
rather than black-boxed.

**Originator-prose targets** (per `FASTTRACK_EQUIVALENCE_PLAN.md` §10):

- Unit 2 (`12.19.01`) — anchor on Haag-Łopuszański-Sohnius 1975 *Nucl. Phys. B*
  88, 257 (the algebra classification) and Gol'fand-Likhtman 1971 (the
  originating algebra); Coleman-Mandula 1967 *Phys. Rev.* 159, 1251 (the no-go).
- Unit 4 (`12.19.04`) — anchor on Wess-Zumino 1974 *Nucl. Phys. B* 70, 39.
- Unit 6 (`12.19.06`) — anchor on Grisaru-Siegel-Roček 1979 (supergraph
  non-renormalization) and Seiberg 1993 *Phys. Lett. B* 318, 469 (holomorphy
  proof).
- Unit 7 (`12.19.07`) — anchor on O'Raifeartaigh 1975 *Nucl. Phys. B* 96, 331;
  Fayet-Iliopoulos 1974 *Phys. Lett. B* 51, 461; Witten 1982 *Nucl. Phys. B*
  202, 253 (the index).
- Unit 12 (`12.19.11`) — anchor on Seiberg 1995 *Nucl. Phys. B* 435, 129
  (electric-magnetic duality).
- Unit 13 (`12.19.12`) — anchor on Freedman-van Nieuwenhuizen-Ferrara 1976
  *Phys. Rev. D* 13, 3214 and Deser-Zumino 1976 (the discovery of supergravity).
- Unit 16 (`12.19.15`) — the history survey; anchors all originator citations.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and equation in WQTFV3
  (full P1 audit; deferred until a Vol 3 PDF/print copy is procured — see
  Priority 0).
- **Weinberg Vol 1 (Foundations, FT 2.17)** and **Vol 2 (Modern Applications,
  FT 2.18).** Their punch-lists are the strict prerequisites for this one and
  are tracked in `plans/fasttrack/weinberg-quantum-theory-of-fields-vol1.md`
  (and a forthcoming Vol-2 audit). This Vol-3 plan assumes those land first or
  black-boxes their results.
- **String theory and superstring SUSY.** Weinberg Vol 3 stops at point-particle
  field-theory SUSY (with a survey pointer toward strings in unit 17). The full
  superstring / supergravity-in-$D>4$ material belongs to the string-theory Fast
  Track entries, not here.
- **The full Seiberg-Witten solution of $N=2$ SQCD.** Unit 13/14 carry the
  $N=2$ special-Kähler geometry and BPS states at survey depth; the full
  Seiberg-Witten curve and its prepotential are a Master-tier deepening for a
  later cycle (and note: distinct from the `03.07.*` Seiberg-Witten *4-manifold*
  invariants already shipped, which are a topology tool).
- **The forest-formula / rigorous-renormalization details of supergraphs.**
  Unit 6 carries the non-renormalization *theorem* and the holomorphy proof; the
  full superspace-power-counting machinery is a deepening.
- **Exercise-pack production.** Like Vols 1–2, WQTFV3 contains essentially no
  exercises. The Codex exercise pack should be drawn from Martin's *SUSY Primer*
  problems, Terning *Modern Supersymmetry* problems, and Bertolini's lecture-note
  exercises, all well-aligned with the Weinberg chapter order.
- **A comparison with Wess-Bagger as a primary text.** Wess-Bagger is the
  superspace-first alternative and is the canonical notation crosswalk (unit 15),
  but it is not the FT 2.19 anchor; Weinberg Vol 3 is.

---

## §6 Acceptance criteria for FT equivalence (WQTFV3)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- A Vol 3 print/PDF copy is available to the production team (Priority 0 prereq
  for the Ch. 27 / 29 / 31 units).
- The new SUSY sub-chapter `content/12-quantum/19-supersymmetry/` exists and the
  `07.06.23` Lie-superalgebra unit has shipped (structural prereqs).
- The Vol-1 punch-list S-matrix / path-integral CRITICAL units have shipped (or
  are explicitly black-boxed in the relevant SUSY Master tiers), and the Vol-2
  electroweak-SSB substrate has shipped before the MSSM units (9–10).
- ≥95% of WQTFV3's named theorems and worked constructions in Ch. 24–29 map to
  Babel Bible units (currently ~0%; after priority-1 this rises to ~70%; after
  priority-1+2 to ~88%; full ≥95% requires priority-3 + selective priority-4).
- ≥90% of WQTFV3's worked computations in Ch. 25–29 have a direct unit or are
  referenced from one. Ch. 30–31 (extended SUSY, supergravity) are the deepest
  material; acceptance threshold for these chapters is relaxed to ≥80% (full
  coverage of supergravity-coupled-to-matter requires string-theory context off
  the current Fast Track).
- Notation decisions (metric signature, two-component-spinor conventions,
  supercharge normalization, Berezin measure) are recorded in unit 15
  (`12.19.14`) — see §3 Notation crosswalk.
- Pass-W weaving connects the new units to:
  - `07-representation-theory/06-lie-algebraic/` (Lie superalgebra, Casimir)
    and `07-compact-lie/` (Wigner Poincaré `07.07.06`, Lorentz reps `07.07.09`)
    for the algebra substrate;
  - `12-quantum/05-angular-momentum/` (free scalar/spinor/vector fields
    `12.05.04–06`) and `13-fock-spaces/` (anticommutators) for the
    component-field substrate;
  - `03-modern-geometry/07-gauge-theory/` (Yang-Mills `03.07.05`, BRST
    `03.07.31`) for the gauge substrate;
  - `03-modern-geometry/09-spin-geometry/` (spinor bundle `03.09.05`) and
    `13-gr-cosmology/` (Einstein equations) for the supergravity substrate;
  - `03.15.12` (geometric Witten index) cross-linked to the field-theory
    Witten index in unit 8;
  - forward-pointers to the string-theory Fast Track entries at the chapter-end
    of the Master tiers (units 17–18).
- Cross-references to Wess-Bagger, Martin's *SUSY Primer*, and Terning in every
  Master tier of priority-1 units (the three canonical parallel readings).

The 8 priority-1 units close most of the equivalence gap, contingent on the
Vol-1/Vol-2 prereqs being in place or black-boxed. Priority-2 closes the
phenomenology and non-perturbative side. Priority-3+4 are deepenings and
honest-status surveys.

---

## §7 Sourcing

- **Cost.** WQTFV3 is in copyright (Cambridge University Press 2000). New
  hardcover ~$110 USD; paperback ~$70 USD; Cambridge Core institutional e-book
  access via subscription. The three-volume set is commonly sold together.
- **License.** All rights reserved, Cambridge University Press.
- **Local copy.** None currently. The reference tree holds no Weinberg textbook
  (only jimmyqin's `weinberg-notes.pdf` lecture notes). Procure print copy or
  Cambridge Core access before the Ch. 27 / 29 / 31 units.
- **Open-access alternatives for cross-reference** (legally free):
  - **Martin**, "A Supersymmetry Primer," arXiv:hep-ph/9709356 — the canonical
    free MSSM / phenomenology reference; the standard cross-read for Ch. 28.
  - **Bertolini**, "Lectures on Supersymmetry," free at SISSA
    (<https://people.sissa.it/~bertmat/susycourse.pdf>) — a clean modern course
    covering the algebra, superspace, SUSY breaking, and Seiberg duality;
    excellent Master-tier alternate anchor for units 2–8, 11–12.
  - **Argyres**, "An Introduction to Global Supersymmetry" (Cornell lecture
    notes) — free; superspace-and-superfield-first.
  - **Sohnius**, "Introducing Supersymmetry," *Phys. Rep.* 128 (1985) — the
    canonical review by an HŁS co-originator.
  None of these *replaces* WQTFV3 for the S-matrix-motivated algebra derivation
  (Ch. 24–25) or the holomorphy / Seiberg-duality material (Ch. 29) — that
  framing is Weinberg-distinctive — but they suffice as Master-tier alternate
  anchors while Vol 3 is being procured.

---

*Audit v1 (REDUCED — TOC + canonical-structure + secondary-source derivation).
Produced 2026-06-01. Coverage finding (~2%, all prerequisite substrate; 0%
SUSY-proper) is robust to the missing PDF. 18-unit punch-list, 0 shared. To be
upgraded to full P1 once a Vol 3 copy is procured and the Vol-1/Vol-2 punch-lists
clear their CRITICAL items.*
