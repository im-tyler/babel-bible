# Serre — *Linear Representations of Finite Groups* (Fast Track 3.15) — Audit + Gap Plan

**Book:** Jean-Pierre Serre, *Linear Representations of Finite Groups*
(Springer Graduate Texts in Mathematics 42, English translation by Leonard
L. Scott 1977 of the French original *Représentations linéaires des groupes
finis*, Hermann 1967; 2nd French ed. Hermann 1971; ≈ x + 170 pp.). ISBN
0-387-90190-6 (hardcover), 0-387-90190-6 (softcover reprint). Commercial
title (BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.15).

**Fast Track entry:** 3.15. The canonical *shortest* graduate monograph on
finite-group representation theory. Distinguished from the Fast Track's
other rep-theory slots (3.10 Hall; 3.11 Fulton-Harris; 3.12 Serre CSLA;
3.13 Serre *Lie Algebras and Lie Groups*; 3.16 Diaconis) by being the
**slim crystalline finite-group treatment** that Fulton-Harris §§1–5
"fattens" into a 100-page worked-example tour. Three-part structure:
**Part I** (Chs. 1–5) character theory of finite groups over $\mathbb{C}$;
**Part II** (Chs. 6–11) representations in characteristic $0$ — induced
representations, Mackey's irreducibility criterion, Artin's and Brauer's
induction theorems, rationality, the Schur indicator;
**Part III** (Chs. 12–18) **modular representations** — Grothendieck
groups $R_K(G), R_k(G), P_k(G)$, the cde triangle, Brauer characters,
decomposition and Cartan matrices, blocks. Part III is the foundational
short-form treatment of Brauer's modular theory and has no Fast Track
analogue elsewhere.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of deepenings + new units so that *Linear Representations of Finite
Groups* (LRFG hereafter) is covered to the equivalence threshold (≥95%
effective coverage of theorems, key examples, exercise pack, notation,
sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit.** No local PDF in `reference/textbooks-extra/` (verified
— directory listing confirms no Serre LRFG; only the cover image
`reference/fast-track/images/Serre-Lie-Algebras-Lie-Groups-712x1024__dd9fad6ce3.jpg`
is local, and the Fast Track source page reuses that cover image across
multiple Serre slots — it does *not* correspond to LRFG). WebFetch on
Springer link (`link.springer.com/book/10.1007/978-1-4684-9458-7`) is
gated; Anna's Archive search yields hosted copies but acquisition is
deferred to a follow-up sourcing pass. This audit works from (a) the
well-documented public TOC of LRFG (three-part structure as above,
referenced verbatim in `07.01.07` exercise notes — "Serre §7.4",
"Serre, *Linear Representations of Finite Groups* Part III (Chapters
9–10)"); (b) the Codex's 26 shipped `07-representation-theory/` units,
of which 9 already cite Serre LRFG by name in their tier-anchor /
reference blocks; (c) the canonical secondary literature
(Curtis-Reiner, Isaacs, Alperin, James-Liebeck). A full line-number
audit is deferred until a PDF is acquired. This is consistent with the
audit-stub convention used for Brown-Higgins-Sivera 1.05a and
Fulton-Harris 3.11.

---

## §1 What LRFG is for

LRFG is the **canonical short graduate text on finite-group representation
theory**. Where Fulton-Harris §§1–5 (FT 3.11) gives the same Part-I
content as the warmup chapter of a 550-page Lie-algebra book, where
Curtis-Reiner *Methods of Representation Theory* (Vols. I–II, 1981/87) is
the encyclopaedic 2000-page reference, where Isaacs *Character Theory of
Finite Groups* (1976) is the 300-page character-theory monograph at the
same level, where James-Liebeck *Representations and Characters of Groups*
(1993/2001) is the gentle undergraduate-flavoured exposition, and where
Alperin *Local Representation Theory* (Cambridge Studies in Advanced
Mathematics 11, 1986) gives the modern modular treatment via local
methods (Brauer pairs, defect groups, Green correspondence) — **LRFG is
the shortest rigorous self-contained graduate textbook covering both the
ordinary and modular theory in 170 pages**. Like CSLA (FT 3.12), LRFG
extracts a lecture course (Serre, École Normale Supérieure 1962, ENSJF
1966) into its functorial spine, stripping commentary while keeping every
non-trivial proof. The book is the standard reference for finite-group
character theory among working algebraists, number theorists (Artin
$L$-functions, Galois representations), and group-theoretic physicists.

Distinctive contributions, in the order LRFG develops them:

1. **Part I: Character theory over $\mathbb{C}$ (Chs. 1–5, ~45 pp.).**
   Definitions, Maschke's theorem, Schur's lemma, characters and
   orthogonality, the regular representation, the canonical decomposition
   into isotypic components, induced representations, group of a
   product, tensor products. Serre's signature economy: the canonical
   decomposition is proved in 2 pages; the orthogonality relations are
   derived as immediate consequences of Schur's lemma applied to
   $\mathrm{Hom}_G(V, W)$. The whole of finite-group character theory
   over $\mathbb{C}$ is in 45 pages.

2. **Worked character tables (Ch. 5, ~10 pp.).** Serre works out the
   character tables of $C_n$, $D_n$, $A_4$, $S_4$, $A_5$, and (via
   §5.8) the Heisenberg group, in a sequence of $\approx$ 1-page
   computations. These canonical small-group tables are the
   load-bearing examples cited throughout the literature; they are
   notably **absent** from Fulton-Harris (which gives only $S_3, S_4,
   S_5$). This concrete-table material is the most-quoted-by-physicists
   part of LRFG.

3. **Part II: Subgroup representations (Chs. 6–11, ~50 pp.).** Induced
   representations, Frobenius reciprocity, Mackey's theorem and the
   irreducibility criterion (Ch. 7), examples (Ch. 8: $S_n, A_n,
   GL_2(\mathbb{F}_q)$), Artin's induction theorem (Ch. 9), Brauer's
   induction theorem (Ch. 10), rationality and the Schur index
   (Ch. 11–12). **Mackey's irreducibility criterion** (§7.4) and the
   **Artin–Brauer induction theorems** (Chs. 9–10) are the
   load-bearing theorems here — they have no analogous unit in the
   current Codex, despite being load-bearing for number-theoretic
   applications (Artin $L$-functions, the Brauer-Heller-Hasse
   conjecture).

4. **Artin's induction theorem (Ch. 9).** Every character of $G$ is a
   $\mathbb{Q}$-linear combination of characters induced from *cyclic*
   subgroups. Originator: Emil Artin, *Über eine neue Art von
   L-Reihen*, Abh. Math. Sem. Univ. Hamburg 3 (1923); refined in
   *Zur Theorie der L-Reihen mit allgemeinen Gruppencharakteren*,
   Abh. Math. Sem. Univ. Hamburg 8 (1930). The theorem's number-theoretic
   import: every Artin $L$-function is a $\mathbb{Q}$-linear combination
   of Hecke $L$-functions, but the *integrality* required for analytic
   continuation is what Brauer 1946 provides.

5. **Brauer's induction theorem (Ch. 10).** Every character of $G$ is a
   $\mathbb{Z}$-linear combination of characters induced from
   *elementary* subgroups (subgroups of the form $C \times P$ where
   $C$ is cyclic of order coprime to a prime $p$, $P$ is a $p$-group).
   Originator: Richard Brauer, *On Artin's L-series with general group
   characters*, Ann. Math. 48 (1947). This is the deep result powering
   Artin's conjecture on the holomorphy of $L$-functions; the
   $\mathbb{Z}$-linearity (vs. Artin's $\mathbb{Q}$-linearity) makes
   the difference between meromorphy and holomorphy modulo abelian
   parts.

6. **Part III: Modular representation theory (Chs. 12–18, ~50 pp.).**
   Serre's distinctive contribution and the part with **no Fast Track
   analogue**. Representations of $G$ over a *modular* field $k$ of
   characteristic $p \mid |G|$, where Maschke fails. The three
   Grothendieck groups $R_K(G), R_k(G), P_k(G)$ ($K$ the field of
   characteristic 0, $k$ residue, $K$-irreducible characters, modular
   characters, projective indecomposable characters), connected by the
   **cde-triangle**: $c: P_k(G) \to R_k(G)$ (Cartan map), $d: R_K(G)
   \to R_k(G)$ (decomposition map), $e: P_k(G) \to R_K(G)$ (lift of
   projectives). Brauer characters; the Cartan matrix $C = d \circ e^t$;
   the decomposition matrix $D$ relating $K$-characters to modular
   characters; the Fong-Swan theorem for $p$-solvable groups; blocks
   and the Brauer first/second/third main theorems are stated.

7. **The cde-triangle and Brauer's theorem on modular characters
   (Chs. 14–16).** Brauer's theorem: every irreducible modular
   character of a finite group $G$ in characteristic $p$ lifts to an
   ordinary character of an *elementary* subgroup, induced up. This is
   the modular analogue of Brauer's ordinary induction theorem and the
   foundation of Brauer's *modular representation theory*. Originator:
   Richard Brauer, sequence of papers 1935–1956 in Math. Ann., Math. Z.,
   Trans. AMS, culminating in *Number theoretical investigations on
   groups of finite order*, Proc. Int. Symp. Tokyo-Nikko 1955.

8. **Blocks (Ch. 17–18).** Definition of a block as an indecomposable
   two-sided ideal of $kG$; defect groups; the Brauer first main
   theorem (bijection between blocks of $G$ with defect group $D$ and
   blocks of $N_G(D)$ with defect group $D$). Serre states the main
   theorems and proves the easier ones (the first; the second is
   stated only). This material is the *gateway* to the modern theory
   (Alperin's weight conjecture, Broué's abelian-defect conjecture,
   the McKay conjecture — all referenced from `07.02.01-maschke-theorem`
   Master tier but with no anchor unit).

LRFG is **not** the place to learn Lie theory (Serre 3.12 CSLA and 3.13
*Lie Algebras and Lie Groups* are siblings), is **not** the place for
exhaustive worked examples in the Fulton-Harris sense (LRFG's worked
character tables are minimal and crystal-clear, not pedagogical), and
is **not** the place for the deep modular structure theory of
Curtis-Reiner Vol. II or Alperin's local methods (LRFG Part III is a
*foundational gateway* to that theory, not a comprehensive treatment).
The canonical follow-ups are Curtis-Reiner Vols. I–II for the
encyclopaedic ordinary + modular treatment; Isaacs for character theory
in depth; Alperin *Local Representation Theory* for the modular structure
theory; Navarro *Character Theory and the McKay Conjecture* (2018) for
the modern state of the art.

**Cited peer sources (≥3, per stub spec):**
- C. W. Curtis, I. Reiner, *Methods of Representation Theory, with
  Applications to Finite Groups and Orders*, Vols. I (1981) and II (1987)
  (Wiley-Interscience / AMS Chelsea reprint). The canonical encyclopaedic
  reference; Vol. I covers ordinary representation theory (corresponding
  to LRFG Parts I–II), Vol. II covers modular and integral representation
  theory (LRFG Part III + much more). Referenced 8 times in shipped
  Codex units (`07.01.05`, `07.01.07`, `07.01.08`, `07.02.01`).
- I. M. Isaacs, *Character Theory of Finite Groups* (Academic Press 1976;
  AMS Chelsea reprint 2006). The 300-page character-theory monograph at
  the same level as LRFG Parts I–II, with substantially more depth on
  Frobenius groups, $M$-groups, $p$-solvable groups, and the
  Brauer-Suzuki theorem. The Fast Track analogue / depth-deepening pair
  for LRFG Parts I–II.
- W. Fulton, J. Harris, *Representation Theory: A First Course* (Springer
  GTM 129, 1991) — Fast Track 3.11. Parts I (§§1–6) cover the same
  ordinary-character content as LRFG Parts I–II, "fattened" into a 100
  page worked-example tour. Already audited in
  `plans/fasttrack/fulton-harris-representation-theory.md`; that audit
  observes "Serre 3.15 is FH §§1–5 condensed" and defers the LRFG
  stub. **This plan completes that deferred stub.**
- J. L. Alperin, *Local Representation Theory: Modular Representations as
  an Introduction to the Local Representation Theory of Finite Groups*
  (Cambridge Studies in Advanced Mathematics 11, Cambridge University
  Press 1986). The canonical short modern monograph on Brauer's modular
  theory via local methods (Brauer pairs, defect groups, Green
  correspondence). The Fast-Track-style follow-up to LRFG Part III; its
  techniques are the modern toolkit (decomposition matrices, blocks,
  Green correspondence) for which LRFG Part III is the introductory
  text.
- (Optional fifth peer source.) G. James, M. Liebeck, *Representations
  and Characters of Groups* (Cambridge University Press, 2nd ed. 2001).
  The gentle undergraduate-flavoured exposition of LRFG Part I; cited
  3 times in shipped units (`07.01.03`, `07.01.04`, `07.01.05`).

---

## §2 Coverage table (Codex vs LRFG)

Cross-referenced against the current 26 shipped units of
`content/07-representation-theory/` (8 in `01-foundations/`, 1 in
`02-character/`, 1 in `03-highest-weight/`, 1 in `04-classification/`,
3 in `05-symmetric/`, 9 in `06-lie-algebraic/`, 3 in `07-compact-lie/`).
✓ = covered, △ = partial / different framing / present only as
commentary or exercise, ✗ = not covered.

| LRFG topic | Chapter | Codex unit(s) | Status | Note |
|---|---|---|---|---|
| **PART I — ORDINARY CHARACTERS** | | | | |
| Group representation, equivalence, sub/quotient | Ch. 1 | `07.01.01` | ✓ | Master tier cites Serre §1 as anchor. |
| Maschke's theorem (complete reducibility, char 0) | Ch. 1 | `07.02.01` | ✓ | Maschke 1899 originator-prose section present. |
| Schur's lemma | Ch. 2 | `07.01.02` | ✓ | Master tier cites Serre §2.2. |
| Character of a representation | Ch. 2 | `07.01.03` | ✓ | Master tier cites Serre §2; Frobenius 1896 originator-prose. |
| Character orthogonality relations (first and second) | Ch. 2 | `07.01.04` | ✓ | Master tier cites Serre §2; full proofs via Schur. |
| Canonical decomposition into isotypic components | Ch. 2 | △ (stated in `07.01.01` and `07.01.05`) | △ | **Gap (low).** No standalone unit; Serre §2.6 gives the explicit projector formula $p_i = (n_i/|G|) \sum \overline{\chi_i(g)}\, g$. Candidate: short §Master extension to `07.01.05`. |
| Regular representation | Ch. 2 | `07.01.05` | ✓ | Artin-Wedderburn decomposition derived. |
| Number of irreducibles = number of conjugacy classes | Ch. 2 | △ (in `07.01.04` Master tier) | △ | **Gap (low).** Standard fact, but no dedicated unit. Candidate: §Intermediate extension to `07.01.04`. |
| Tensor product of representations | Ch. 3 | `07.01.06` | ✓ | |
| Group of a product $G \times H$; reps as tensors | Ch. 3 | — | ✗ | **Gap (low).** Serre §3.2; cleanly stated theorem $\widehat{G \times H} = \widehat{G} \otimes \widehat{H}$. Candidate: §Master extension to `07.01.06`. |
| Symmetric and alternating squares; $\chi_{\mathrm{Sym}^2}, \chi_{\Lambda^2}$ formulae | Ch. 2 | △ (in `07.01.06`) | △ | **Gap (low).** Touched but explicit formulae missing. Master deepening. |
| Worked character tables: $C_n, D_n, A_4, S_4, A_5, Q_8, $ Heisenberg | Ch. 5 | — | ✗ | **Gap (medium — defining LRFG content).** No Codex unit. These tables are *the* most-quoted material in LRFG; their absence is a real gap that the Fulton-Harris audit also flagged. Candidate: dedicated `07.02.E1` exercise/worked-tables file (5–6 tables, ~1500 words). |
| **PART II — INDUCED REPS AND INDUCTION THEOREMS** | | | | |
| Induced representation $\mathrm{Ind}_H^G$ | Ch. 7 | `07.01.07` | ✓ | Comprehensive unit; cites Serre §7. |
| Frobenius reciprocity | Ch. 7 | `07.01.08` | ✓ | Categorical + character forms. |
| Induction in stages $\mathrm{Ind}_H^G = \mathrm{Ind}_K^G \circ \mathrm{Ind}_H^K$ | Ch. 7 | △ (in `07.01.07` Exercise 2) | △ | **Gap (low).** Proved as exercise; could be elevated. |
| Mackey's decomposition formula ($\mathrm{Res}_K^G \circ \mathrm{Ind}_H^G W$ over double cosets) | Ch. 7 | △ (in `07.01.07` Exercise 6) | △ | **Gap (medium).** **Present as Exercise 6** of `07.01.07` with full statement and proof sketch, but no standalone Mackey-theory unit. Candidate: promote to new unit `07.01.09 mackey-decomposition-formula`. |
| **Mackey's irreducibility criterion** | Ch. 7.4 | △ (commentary in `07.01.07` line 410) | △ | **Gap (medium-high).** Stated only as commentary at the end of `07.01.07`; no formal theorem-of-record, no proof. *Load-bearing for Part II.* Candidate: §Master section of the new `07.01.09` unit. |
| Worked examples: $S_n, A_n, GL_2(\mathbb{F}_q)$ via induction | Ch. 8 | △ (partial in `07.05.01`) | △ | **Gap (medium).** $S_n$ covered via Young symmetrisers (`07.05.01–03`) but not via Serre's induction-from-Young-subgroups approach; $GL_2(\mathbb{F}_q)$ entirely absent. Candidate: dedicated worked-example unit. |
| **Artin's induction theorem** | Ch. 9 | △ (commentary in `07.01.07`, `07.01.01`) | △ | **Gap (high — anchor missing).** Brauer's theorem is mentioned in `07.01.07` line 412 and `07.01.01` line 377 but Artin's $\mathbb{Q}$-linear version is **not** explicitly stated anywhere. The two are usually paired. Candidate: new unit `07.01.10 artin-induction-theorem`. |
| **Brauer's induction theorem** | Ch. 10 | △ (commentary only in `07.01.07` line 412, `07.01.01` line 377, `07.01.03` line 405) | △ | **Gap (high — anchor missing).** Stated but never proved; no dedicated unit. The depth of the theorem (integrality via algebraic-integer arguments) is acknowledged but not exposed. Candidate: new unit `07.01.11 brauer-induction-theorem`. |
| Rationality, the Schur index | Ch. 12 | — | ✗ | **Gap (medium-low).** Not in Codex. The Schur index $m(\chi)$ measures how far a $\mathbb{Q}$-irreducible character is from being $\mathbb{Q}$-representation-realisable. Candidate: short Master-tier unit. |
| Frobenius-Schur indicator | Ch. 13 | — | ✗ | **Gap (medium).** Not in Codex. The FS indicator $\nu(\chi) \in \{0, +1, -1\}$ classifies irreducibles into real / quaternionic / complex types; load-bearing for the unitary-group / orthogonal-group / symplectic-group cross-link. Candidate: new unit `07.01.12 frobenius-schur-indicator`. |
| **PART III — MODULAR REPRESENTATIONS** | | | | |
| Modular representations over $k$, $\mathrm{char}\, k = p \mid |G|$ | Ch. 14 | △ (commentary in `07.01.01`, `07.02.01`, `07.01.03`, `07.05.03`) | △ | **Gap (HIGH — foundational anchor missing).** Modular representation theory is referenced **9+ times across 5 shipped units** as a forward-pointer ("Brauer 1935 launched modular rep theory") but there is **no anchor unit** defining the basic setup ($k = \overline{\mathbb{F}_p}, K = $ field of fractions of Witt vectors, $\mathcal{O} = $ Witt vectors, the $p$-modular triple $(K, \mathcal{O}, k)$). This is the single largest structural gap in the chapter. Candidate: new unit `07.02.02 modular-representation`. |
| Grothendieck groups $R_K(G), R_k(G), P_k(G)$ | Ch. 14 | — | ✗ | **Gap (high).** The cde-triangle organisational backbone of LRFG Part III. No Codex unit. Candidate: `07.02.03 grothendieck-group-cde-triangle`. |
| Decomposition map $d: R_K(G) \to R_k(G)$ and decomposition matrix $D$ | Ch. 15 | △ (commentary in `07.02.01`, `07.05.03`) | △ | **Gap (high).** Decomposition matrices are referenced as exposition (`07.02.01` Master tier; `07.05.03` for $S_n$ specifically) but no anchor unit defining the construction. Candidate: §Master section of `07.02.03` or new unit. |
| Cartan map $c: P_k(G) \to R_k(G)$ and Cartan matrix $C$ | Ch. 15 | — | ✗ | **Gap (high).** No Codex unit. Cartan matrix $C = D^t D$ is the second pillar of the cde-triangle. Candidate: §Master section of `07.02.03`. |
| **Brauer characters** | Ch. 17 | △ (commentary in `07.01.03` line 415, `07.01.04` line 443, `07.02.01`) | △ | **Gap (HIGH — anchor missing).** Defined only as a sentence ("characters lifted from $p$-roots of unity to $\mathbb{Q}$, evaluated on $p$-regular elements"). No formal definition, no orthogonality relations, no examples. Candidate: new unit `07.02.04 brauer-character`. |
| Brauer's theorem on modular characters (lifting from elementary subgroups) | Ch. 17 | — | ✗ | **Gap (high).** Modular analogue of Brauer's ordinary induction theorem; no Codex unit. Candidate: §Master section of `07.02.04` or new `07.02.05 brauer-modular-induction`. |
| Fong-Swan theorem ($p$-solvable: every modular irrep lifts to char 0) | Ch. 17 | — | ✗ | **Gap (medium).** Bridges modular reps of $p$-solvable groups to ordinary reps. Candidate: pointer in `07.02.04` Master tier. |
| Blocks of $kG$; defect groups | Ch. 18 | △ (commentary in `07.02.01`) | △ | **Gap (medium).** Blocks defined only as a sentence in `07.02.01` Master tier ("decomposition of $kG$ into indecomposable two-sided ideals"); no Codex unit develops the theory. Candidate: new unit `07.02.06 block-theory`. |
| Brauer's first/second/third main theorems on blocks | Ch. 18 | — | ✗ | **Gap (medium — survey-level).** Referenced via Alperin's-weight-conjecture commentary in `07.02.01`. Candidate: §Master section of `07.02.06`; full proofs deferred to Alperin / Curtis-Reiner Vol. II audit. |

**Aggregate coverage estimate (REDUCED audit basis).**

- **Part I (LRFG Chs. 1–5, character theory over $\mathbb{C}$):** **~90%
  covered.** All theorems shipped via `07.01.01–08` + `07.02.01`. Gaps:
  worked character tables of small groups (Serre Ch. 5), the explicit
  canonical-decomposition projector formula, and minor details (group
  of a product, $\mathrm{Sym}^2/\Lambda^2$ character formulae). These
  are pedagogical-completeness gaps, not structural.
- **Part II (LRFG Chs. 6–13, induced reps and induction theorems):**
  **~50% covered.** `07.01.07–08` cover induction + Frobenius
  reciprocity comprehensively. Mackey's decomposition formula is
  present as Exercise 6 of `07.01.07`; Mackey's irreducibility
  criterion is mentioned in passing. **Artin's induction theorem,
  Brauer's induction theorem, the Schur index, and the Frobenius-Schur
  indicator are NOT anchored** — they appear only as forward-references
  in commentary blocks. This is the **largest structural gap in the
  ordinary-theory half**.
- **Part III (LRFG Chs. 14–18, modular representations):** **~10%
  covered.** Modular representation theory is referenced **9+ times
  across 5 shipped units** as a forward-pointer (Brauer 1935 originator
  citations, the McKay conjecture, decomposition matrices) but there
  is **no anchor unit anywhere in the Codex**. The Grothendieck-group
  cde-triangle, Brauer characters, blocks, defect groups, and the
  Brauer main theorems are all completely absent. **This is the
  single largest gap in the entire 07 chapter.**

**Overall: ~55% of LRFG covered by the 26 shipped units of
`07-representation-theory/`.** The gap is **structural**, not
pedagogical — unlike the Fulton-Harris audit (which found ~65%
coverage with the gap being worked examples), the LRFG audit finds
the gap concentrated in **Mackey theory, Artin-Brauer induction, and
the entirety of modular representations**. Closing these gaps would
also retroactively fix the **5 shipped units that silently depend on
modular-rep concepts** with no anchor (see §3 below).

**Silent-dependency findings (units that forward-reference unanchored
content):**

- `07.01.01-group-representation.md` line 377: states Brauer's
  induction theorem without anchor.
- `07.01.03-character.md` lines 405, 415: states Brauer's theorem on
  induced characters and modular (Brauer) characters without anchor.
- `07.01.04-character-orthogonality.md` line 443, 473: states modular
  orthogonality / Brauer 1935 without anchor.
- `07.01.07-induced-representation.md` lines 412, 432, 458, 463–464:
  states Brauer's induction theorem, Mackey 1949–52, Mackey's
  decomposition formula (as exercise), Mackey's irreducibility
  criterion without anchor units; cites "Serre §7.4" and "Serre,
  *Linear Representations of Finite Groups* Part III (Chapters
  9–10)" directly.
- `07.01.08-frobenius-reciprocity.md` line: cites Mackey projection
  formula; Mackey theory referenced as chapter-level content of
  Serre Part III.
- `07.02.01-maschke-theorem.md` (multiple lines): the entire Master
  tier is built around modular-rep theory as the *complement* of
  Maschke; cites Brauer 1935, decomposition matrices, blocks,
  defect groups, Alperin's weight conjecture, Broué's abelian-defect
  conjecture, McKay conjecture, Rickard equivalences — all forward
  pointers with no anchor.
- `07.05.03-specht-module.md` (multiple lines): modular Specht
  modules, decomposition matrices for $S_n$, Mullineux conjecture,
  Carter conjecture, Hecke algebras at roots of unity, KLR
  categorification — all built on a modular-rep foundation that has
  no Codex anchor.

This silent-dependency pattern means LRFG anchoring would resolve
**a lattice-wide hole** in the rep-theory chapter — not just a
local gap.

---

## §3 Gap punch-list (priority-ordered)

**Priority 1 — high-leverage, captures LRFG's distinctive content
*and* resolves silent-dependency holes elsewhere:**

1. **`07.02.02` Modular representation (over a $p$-modular triple
   $(K, \mathcal{O}, k)$).** Foundational anchor. Definition of the
   modular setup: $k$ field of characteristic $p$, $\mathcal{O}$
   complete DVR with residue field $k$, $K = \mathrm{Frac}(\mathcal{O})$
   of characteristic $0$; the three group algebras $KG, \mathcal{O}G,
   kG$; lifting and reduction-mod-$p$ functors. Statement (without
   proof) of Maschke's failure in characteristic $p \mid |G|$ and
   the resulting indecomposable-vs-irreducible distinction. Three-tier;
   ~1800 words. LRFG §14 anchor; Alperin Chs. 1–3 anchor; Curtis-Reiner
   Vol. II §6 anchor. **Foundational — closes the 9+ silent-dependency
   forward-references.**

2. **`07.02.03` Grothendieck groups and the cde-triangle.** The
   organisational spine of LRFG Part III. $R_K(G) = $ free abelian
   group on $K$-irreducible characters, $R_k(G) = $ on $k$-irreducible
   Brauer characters, $P_k(G) = $ on projective indecomposable
   modular characters. The maps: decomposition $d: R_K(G) \to R_k(G)$
   (reduce mod $p$), Cartan $c: P_k(G) \to R_k(G)$ (the natural
   inclusion of projectives), lift $e: P_k(G) \to R_K(G)$ (extend
   scalars to $K$). The commuting triangle $c = d \circ e$. The
   Cartan matrix $C = D^t D$ (where $D$ is the decomposition matrix);
   $\det(C)$ is a power of $p$. Three-tier; master tier requires the
   $C = D^t D$ derivation. ~2200 words. LRFG §§15–16 anchor.
   **High — the cde-triangle is the second pillar of LRFG Part III
   and is referenced (without name) in `07.05.03` for the $S_n$
   decomposition matrix.**

3. **`07.02.04` Brauer character.** Definition: for an irreducible
   $kG$-module $V$ with $k = \overline{\mathbb{F}_p}$, the Brauer
   character $\beta_V: G_{p'} \to \mathbb{C}$ on $p$-regular elements
   (those of order coprime to $p$) is $\beta_V(g) = \sum_i
   \widehat{\lambda_i}$ where $\{\lambda_i\}$ are eigenvalues of $g$
   on $V$ and $\widehat{\cdot}$ is the Teichmüller lift to roots of
   unity in $\overline{\mathbb{Q}_p} \subset \mathbb{C}$. Brauer
   orthogonality relations (analogue of $\chi$-orthogonality on
   $p$-regular elements). The number of irreducible modular
   characters equals the number of $p$-regular conjugacy classes
   (Brauer's theorem). Three-tier; ~2000 words. LRFG §17 anchor;
   Isaacs Ch. 15 anchor (modular character supplement). **High —
   anchors the 5+ forward-references in `07.01.03`, `07.01.04`,
   `07.02.01`, `07.05.03`.**

4. **`07.01.10` Artin's induction theorem.** Every character of a
   finite group $G$ over $\mathbb{C}$ is a $\mathbb{Q}$-linear
   combination of characters induced from one-dimensional characters
   of cyclic subgroups. Statement; proof via the integrality of the
   character table and a $\mathbb{Q}$-linear-algebra argument
   (Serre's elementary proof). Originator-prose section citing Artin
   1923. Three-tier; ~1500 words. LRFG §9 anchor. **High — currently
   *not anchored anywhere* despite being a textbook-standard theorem
   and the pair partner to Brauer's induction theorem.**

5. **`07.01.11` Brauer's induction theorem.** Every character of $G$
   over $\mathbb{C}$ is a $\mathbb{Z}$-linear combination of characters
   induced from one-dimensional characters of *elementary subgroups*
   (subgroups of the form $C \times P$, $C$ cyclic of order coprime
   to a prime $p$, $P$ a $p$-group). Statement; full proof requires
   ~10 pages of careful integrality-of-character-values arguments
   (Brauer 1946; Serre's exposition follows Brauer-Tate); the
   Codex unit should give the statement, the structure of the
   proof, and a one-page sketch of the integrality lemma. Originator-
   prose section citing Brauer 1946. Three-tier; ~2000 words. LRFG
   §10 anchor; cited 3 times in shipped Codex units as forward
   reference. **High — load-bearing for number-theoretic
   applications (Artin $L$-functions, the Brauer-Heller-Hasse
   conjecture).**

**Priority 2 — medium-priority new units / promotions of existing
exercise material:**

6. **`07.01.09` Mackey's decomposition formula and irreducibility
   criterion.** Promote Mackey's decomposition formula from
   `07.01.07` Exercise 6 (where it currently lives with full
   statement + proof sketch) to a standalone unit. Add Mackey's
   irreducibility criterion (1951) as the key theorem of the unit.
   Worked example: $\mathrm{Ind}_H^G W$ irreducible for $G = S_3,
   H = A_3, W = $ a non-trivial character; the non-irreducibility
   case via the FS-indicator-related obstruction. Three-tier; ~1800
   words. LRFG §§7.3–7.4 anchor. **Medium — currently buried as an
   exercise; standalone unit clarifies the structure and provides a
   citation target for `07.01.08` Master-tier "Mackey projection
   formula" line.**

7. **`07.01.12` Frobenius-Schur indicator.** Definition $\nu(\chi) =
   (1/|G|) \sum_{g \in G} \chi(g^2)$; classification of irreducibles
   over $\mathbb{R}$ into real ($\nu = +1$), quaternionic
   ($\nu = -1$), complex ($\nu = 0$). Worked examples: $S_n$ (all
   real), $Q_8$ (one quaternionic irrep). Cross-link to the
   $\mathrm{O}/U/\mathrm{Sp}$ trichotomy on the Lie side and to spin
   geometry. Three-tier; ~1500 words. LRFG §13 anchor. **Medium —
   the natural bridge between LRFG and the spin/orthogonal/symplectic
   real-form theory of `07.06.13` (FH §20) and `03.09.03 spin-group`.**

8. **`07.02.06` Block theory of $kG$.** Definition of a block as an
   indecomposable two-sided ideal of $kG$; defect groups via the
   $G$-conjugacy class of $p$-Sylow subgroups associated to the
   block; statement of Brauer's first main theorem (bijection between
   blocks of $G$ with defect group $D$ and blocks of $N_G(D)$ with
   defect group $D$); second and third main theorems stated only.
   Three-tier; master tier sketches the proof of the first main
   theorem via the *Brauer homomorphism*; ~2000 words. LRFG §18
   anchor; Alperin §§13–15 anchor. **Medium — the gateway to modern
   modular-rep theory (Alperin weight conjecture, Broué abelian
   defect conjecture). Resolves `07.02.01` Master-tier forward
   references.**

**Priority 3 — Master-tier deepenings (not strictly required for FT
equivalence, but close the gap to ≥95%):**

9. **§Master deepening of `07.01.05`: canonical decomposition projector
   formula.** Serre §2.6's explicit projector $p_i = (n_i/|G|) \sum
   \overline{\chi_i(g)} \rho(g)$. ~400 words added.

10. **§Master deepening of `07.01.06`: group of a product
    $\widehat{G \times H} = \widehat{G} \otimes \widehat{H}$ and the
    $\mathrm{Sym}^2/\Lambda^2$ character formulae.** ~500 words added.
    LRFG §3.2.

11. **§Master deepening of `07.01.07`: induction in stages (currently
    Exercise 2) and the projection formula
    $\mathrm{Ind}_H^G(W \otimes \mathrm{Res}_H^G V) = (\mathrm{Ind}_H^G
    W) \otimes V$.** Promote to numbered theorem. ~400 words added.

12. **§Master deepening of `07.02.04`: Fong-Swan theorem (every
    irreducible $\overline{\mathbb{F}_p}G$-module of a $p$-solvable
    group $G$ lifts to a $\overline{\mathbb{Q}_p}G$-module).** ~500
    words added. LRFG §17.

13. **§Master deepening of `07.01.11`: Schur index $m(\chi)$ and
    rationality (Brauer-Heller-Speiser theorem).** ~500 words added.
    LRFG §12.

**Priority 4 — survey / exercise-pack follow-ups (optional):**

14. **`07.02.E1` Worked character tables.** Exercise-pack file (not a
    full unit) with the 6 canonical small-group tables from LRFG
    Ch. 5: $C_n$, $D_n$, $A_4$, $S_4$, $A_5$, $Q_8$, plus the
    Heisenberg group $H_p$ of order $p^3$. ~2000 words. **Optional
    — high pedagogical value; the Fulton-Harris audit independently
    flagged the same gap (which it deferred to its own exercise
    pack).**

15. **§Pointer in `07.01.10` Master tier: Artin $L$-functions and the
    Artin holomorphy conjecture.** ~400 words. Notes that
    Brauer-induction gives meromorphy and that Artin's conjecture
    (every non-trivial Artin $L$-function is entire) is still open in
    general. Cross-links to a future `number-theory/` chapter.

16. **§Pointer in `07.02.06` Master tier: Alperin weight conjecture,
    Broué abelian defect conjecture, McKay conjecture.** Already
    sketched in `07.02.01` Master tier; consolidate the canonical
    statements in `07.02.06`. ~600 words.

---

## §4 Implementation sketch (P3 → P4)

**Realistic production estimate** (mirroring earlier Brown-Higgins-Sivera,
Lawson-Michelsohn, Fulton-Harris batches):

- Priority 1 (5 new units): ~3.5–4 hours each = **~18–20 hours.**
  `07.02.02 modular-representation`, `07.02.03 grothendieck-cde`,
  `07.02.04 brauer-character`, `07.01.10 artin-induction-theorem`,
  `07.01.11 brauer-induction-theorem`.
- Priority 2 (3 new units): ~3 hours each = **~9 hours.**
  `07.01.09 mackey-decomposition-irreducibility`, `07.01.12
  frobenius-schur-indicator`, `07.02.06 block-theory`.
- Priority 3 (5 master deepenings): ~45 min each = **~4 hours.**
- Priority 4 (exercise-pack additions and pointers): ~3 hours.

**Total: ~34–36 hours of focused production for full FT-equivalence
coverage of LRFG.** Fits a 5–7 day window. Priority 1 alone (~20
hours, ~2.5 days) would close the largest *structural* gap —
anchoring Mackey/Artin/Brauer ordinary induction theorems and
establishing the Brauer-character / cde-triangle modular foundation
— and would raise effective coverage from ~55% to ~85%. **Priority 1
*also* retroactively resolves the silent-dependency findings in §2**
(9+ forward-references across 5 shipped units).

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, originator-prose treatment with primary-source citations should
appear in:

- **Frobenius 1896** — Ferdinand Georg Frobenius, *Über
  Gruppencharaktere*, Sitzungsberichte Preuß. Akad. Wiss. Berlin (1896)
  985–1021; *Über die Primfaktoren der Gruppendeterminante*, ibid.
  (1896) 1343–1382; *Über die Charaktere endlicher Gruppen*, ibid.
  (1896) 1023–1043. Originates character theory entirely. **Already
  cited in `07.01.03`, `07.01.04` Master tier; no new citation needed
  for LRFG units.**
- **Schur 1904/1905** — Issai Schur, *Neue Begründung der Theorie der
  Gruppencharaktere*, Sitzungsberichte Preuß. Akad. Wiss. Berlin (1905)
  406–432. Reproved Frobenius's character theory via the orthogonality
  relations as immediate consequences of Schur's lemma — the proof
  technique LRFG Ch. 2 inherits directly. **Already cited in
  `07.01.04` Master tier.**
- **Burnside 1897/1904** — William Burnside, *Theory of Groups of
  Finite Order* (Cambridge 1897, 2nd ed. 1911); *On groups of order
  $p^\alpha q^\beta$*, Proc. London Math. Soc. (2) 1 (1904) 388–392.
  Burnside's $p^a q^b$ solvability theorem is a canonical
  early application of character theory. **Cite in
  `07.01.03` Master tier (already present as forward reference).**
- **Mackey 1949/1951/1952** — George W. Mackey, *Imprimitivity for
  representations of locally compact groups, I*, Proc. Natl. Acad.
  Sci. 35 (1949) 537–545; *On induced representations of groups*,
  Amer. J. Math. 73 (1951) 576–592; *Induced representations of
  locally compact groups, I*, Ann. Math. 55 (1952) 101–139, *II*,
  Ann. Math. 58 (1953) 193–221. **Cite in new `07.01.09 mackey-…`
  unit Master tier; already partially cited in `07.01.07`.**
- **Artin 1923/1930** — Emil Artin, *Über eine neue Art von
  L-Reihen*, Abh. Math. Sem. Univ. Hamburg 3 (1923) 89–108; *Zur
  Theorie der L-Reihen mit allgemeinen Gruppencharakteren*, Abh.
  Math. Sem. Univ. Hamburg 8 (1930) 292–306. Originates the Artin
  $L$-function and Artin's induction theorem (1930). **Cite in new
  `07.01.10` unit Master tier.**
- **Brauer 1935/1946/1947** — Richard Brauer, *Über die Darstellung
  von Gruppen in Galois'schen Feldern*, Math. Ann. 110 (1935) 686–699
  (modular rep theory); *On Artin's L-series with general group
  characters*, Ann. Math. 48 (1947) 502–514 (Brauer's induction
  theorem). The 1946 conference paper at the Princeton Bicentennial
  is the announcement; the 1947 *Annals* paper is the definitive
  publication. **Cite in new `07.01.11` and `07.02.02`/`07.02.04`
  unit Master tiers. Already partially cited in `07.02.01` and
  `07.01.03`.**

**Notation crosswalk.** LRFG uses **standard French-Bourbaki notation**:
$G$ for the group, $\rho: G \to \mathrm{GL}(V)$ for the representation,
$\chi_\rho$ or $\chi_V$ for the character, $\langle f, g \rangle_G =
(1/|G|) \sum_x f(x) \overline{g(x)}$ for the inner product,
$\mathrm{Ind}_H^G$ and $\mathrm{Res}_H^G$ for induction and restriction
(some editions use $f_*$ and $f^*$). For modular reps: $(K, \mathcal{O},
k)$ for the $p$-modular triple; $R_K(G), R_k(G), P_k(G)$ for the three
Grothendieck groups; $\beta_V$ for the Brauer character of $V$; $c, d, e$
for the cde-triangle maps. Codex already uses Serre's ordinary notation
(verified across `07.01.01–08`); the new modular units `07.02.02–06`
should adopt Serre's $(K, \mathcal{O}, k)$ notation verbatim and adopt
$R_K(G), R_k(G), P_k(G)$ with explicit definition in a §Notation
paragraph of `07.02.02`. The Brauer-character variable name $\beta$ (vs.
$\chi$ for ordinary characters) should be standardised in the new units
to disambiguate.

**Cross-strand weaving (Pass-W).** New units should link laterally to:

- `07.01.07-induced-representation` — `07.01.09–11` are direct
  follow-ups; rewrite the forward-reference commentary blocks at
  lines 412, 458, 463 in `07.01.07` to cite the new anchor units.
- `07.02.01-maschke-theorem` — `07.02.02–06` close the
  forward-reference loop that the Master tier of Maschke opens.
  Rewrite the Master-tier blocks to cite anchor units rather than
  external Curtis-Reiner / Alperin / Navarro.
- `07.05.03-specht-module` — modular Specht modules and the $S_n$
  decomposition matrix become well-defined once `07.02.02–04` ship;
  rewrite the modular-rep forward references.
- `number-theory/` (if/when shipped) — `07.01.10` Artin induction
  + `07.01.11` Brauer induction are the bridge to Artin
  $L$-functions and the local-global principles of class field
  theory.
- `physics/quantum-mechanics/` (small-group symmetry) — `07.02.E1`
  worked character tables of $A_4, S_4, A_5$ are exactly the
  point-group character tables used in crystallography and
  molecular physics.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in LRFG (full
  P1 audit; deferred until a local PDF is acquired). Coverage estimates
  in §2 are based on LRFG's well-known three-part chapter structure
  plus spot-checks of Codex units via the 9+ existing Serre LRFG
  citations.
- **Serre's two Lie-theoretic siblings** (FT 3.12 *Complex Semisimple
  Lie Algebras* CSLA; FT 3.13 *Lie Algebras and Lie Groups* LALG). Both
  audited in Cycle 5; the plans
  `plans/fasttrack/serre-complex-semisimple-lie-algebras.md` and
  `plans/fasttrack/serre-lie-algebras-and-lie-groups.md` exist. The
  Serre slot triangle (3.12, 3.13, 3.15) is now fully audit-covered.
- **Curtis-Reiner Vols. I–II** (canonical encyclopaedic reference).
  Deferred to a hypothetical future master-tier algebraic-groups /
  finite-group-theory audit. LRFG Parts I–III are a *foundational
  gateway* to Curtis-Reiner; closing the LRFG gap is the prerequisite
  for any Curtis-Reiner-scale audit.
- **Alperin *Local Representation Theory*** (modern modular structure
  theory). Deferred. LRFG Part III is the prerequisite anchor; once
  `07.02.02–06` ship, an Alperin audit becomes feasible as the
  Master-tier deepening to modular block theory (Brauer pairs, Green
  correspondence, the source algebra formalism, defect theory).
- **Isaacs *Character Theory of Finite Groups*** (depth-deepening of
  LRFG Parts I–II). Deferred. Isaacs covers Frobenius groups,
  $M$-groups, $p$-solvable groups, and the Brauer-Suzuki theorem in
  depth — material that LRFG mentions only in passing. An Isaacs
  audit is a natural follow-up to the LRFG Priority-1+2 punch-list.
- **Navarro *Character Theory and the McKay Conjecture* (2018).**
  Modern monograph on the modular-rep / McKay-conjecture programme.
  Already referenced from `07.02.01` Master tier. Deferred to a
  research-track audit.
- **Diaconis *Probability and Representation Theory* (FT 3.16).** Own
  audit; LRFG provides the finite-group foundation but Diaconis's
  random-walks-on-groups application is outside LRFG scope.
- **Modular representation theory of algebraic groups** (Jantzen
  *Representations of Algebraic Groups*; Steinberg tensor product
  theorem; Frobenius kernels). LRFG covers only abstract finite
  groups; algebraic-group modular reps are a separate research
  area. Deferred to a hypothetical `algebraic-groups/` chapter.
- **Hopf-algebraic and Tannakian formulations** of finite-group reps
  (Drinfel'd double, fusion categories, modular tensor categories).
  Deferred to the planned `05-category-theory/` strand.
- **Reductive $p$-adic group representation theory** (Bernstein-
  Zelevinsky, the local Langlands programme for $\mathrm{GL}_n$).
  LRFG provides the *finite-group* analogue but the $p$-adic theory
  is its own research area. Deferred to a future Bushnell-Henniart /
  Bump audit.

---

## §6 Acceptance criteria for FT equivalence (LRFG)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The 5 Priority-1 new units have shipped (`07.02.02
  modular-representation`, `07.02.03 grothendieck-cde-triangle`,
  `07.02.04 brauer-character`, `07.01.10 artin-induction-theorem`,
  `07.01.11 brauer-induction-theorem`). These close the largest
  structural gaps.
- ≥95% of LRFG's named theorems and worked examples in chapters
  1–18 map to a Codex unit (currently ~55%; after Priority-1 this
  rises to ~85%; after Priority-1+2 to ~92%; full ≥95% requires
  Priority-3 master deepenings plus the Priority-4 character-table
  pack).
- ≥90% of LRFG's worked computations have a direct unit or are
  cross-referenced from a unit that covers them. Specifically: the
  small-group character tables ($A_4, S_4, A_5, Q_8$, Heisenberg)
  should be in `07.02.E1`; the $GL_2(\mathbb{F}_q)$ rep-theory
  example (LRFG §8) should be in `07.01.09` or `07.01.10`; the
  $S_n$ rep-theory via Young subgroups (LRFG §8) is partially in
  `07.05.01–03` but the *induction-from-Young-subgroups* angle
  should be cross-referenced.
- The **silent-dependency forward-references** in `07.01.01`,
  `07.01.03`, `07.01.04`, `07.01.07`, `07.01.08`, `07.02.01`,
  `07.05.03` are rewritten to cite the new anchor units (Priority 1
  ships ⇒ this is automatic, but the rewrite is a separate Pass-W
  task). **This is the only acceptance criterion that requires
  editing existing shipped units, not just adding new ones.**
- Notation crosswalk recorded (see §4) in `07.02.02` §Notation
  paragraph.
- Originator-prose sections (Frobenius 1896, Schur 1905, Mackey
  1949–52, Artin 1923/1930, Brauer 1935/1946) appear in the
  relevant new-unit Master tiers; existing citations in
  `07.01.03`, `07.01.04`, `07.02.01` Master tiers should be
  consolidated and cross-referenced.

**Equivalence verification protocol** (per `FASTTRACK_EQUIVALENCE_PLAN.md`
§4):

- **4.1 Book-as-input self-check.** Sample 5 random theorem statements
  from LRFG; for each, identify the Codex unit that proves it.
  Particularly stress-test the Part III sample (modular section, which
  is the largest gap).
- **4.2 Exercise reproducibility.** Sample 5 random exercises from
  LRFG. LRFG exercises are short and computational (unlike Fulton-
  Harris); the sampling should bias toward Ch. 2 (orthogonality),
  Ch. 7 (Mackey decomposition), and Ch. 15 (decomposition matrices)
  to spot-check the punch-list units.
- **4.3 Notation comprehension.** Sample 5 fragments of LRFG prose
  (one per part: I, II, III; plus two boundary fragments); paraphrase
  each into the Codex notation system (per §4 crosswalk).

---

## §7 Sourcing

- **Local PDF status.** Not present in `reference/textbooks-extra/`
  (verified — directory listing confirms no Serre LRFG file; only
  the cover image
  `reference/fast-track/images/Serre-Lie-Algebras-Lie-Groups-712x1024__dd9fad6ce3.jpg`
  is local, and that cover image is shared across multiple Serre Fast
  Track slots and corresponds to *Lie Algebras and Lie Groups*, not
  LRFG). LRFG is a commercial Springer GTM (GTM 42, 1977 English
  translation by Leonard L. Scott of *Représentations linéaires des
  groupes finis*, Hermann 1967/2nd ed. 1971) and is not author-hosted.
- **Commercial source.** Springer GTM 42. Print + Springer eBook
  available at
  `link.springer.com/book/10.1007/978-1-4684-9458-7`. ISBN 0-387-90190-6
  (hardcover), 978-1-4684-9458-7 (eBook).
- **Library-mirror sources.** Acquire via institutional access
  (university library Springer subscription) or interlibrary loan.
  For the local copy, target placement is
  `reference/textbooks-extra/Serre-LinearRepresentationsFiniteGroups.pdf`
  to mirror the pattern of other commercial-source FT texts.
- **Anna's Archive.** A search at
  `annas-archive.org/search?q=serre+linear+representations+finite+groups`
  typically yields multiple OCR'd copies of GTM 42; acquisition is
  deferred to a follow-up sourcing pass (not done in this audit per
  the 3-hour time limit).
- **French original.** Serre, *Représentations linéaires des groupes
  finis*, Hermann (Collection Méthodes), Paris 1967; 2nd ed. 1971; 3rd
  ed. (revised) 1978. Bibliothèque Nationale de France hosts a digital
  copy of the 1st edition in restricted-access form. The 1977 English
  translation is the standard reference internationally.
- **Companion / supplementary materials.**
  - I. M. Isaacs, *Character Theory of Finite Groups* (Academic Press
    1976; AMS Chelsea reprint 2006). The depth-deepening of LRFG
    Parts I–II.
  - C. W. Curtis, I. Reiner, *Methods of Representation Theory* Vols.
    I (1981) and II (1987). Encyclopaedic.
  - J. L. Alperin, *Local Representation Theory* (Cambridge Studies in
    Advanced Mathematics 11, 1986). Modern modular treatment.
  - G. James, M. Liebeck, *Representations and Characters of Groups*
    (Cambridge, 2nd ed. 2001). Gentle undergraduate exposition of
    Part I.
  - G. Navarro, *Character Theory and the McKay Conjecture* (Cambridge
    Studies in Advanced Mathematics 175, 2018). Modern research-level
    sequel.
- **Open-access alternatives covering ~70% of LRFG:**
  - P. Etingof et al., *Introduction to Representation Theory* (AMS
    Student Mathematical Library 59, 2011; free PDF at
    `arxiv.org/abs/0901.0827`). Covers LRFG Parts I–II at gentler pace
    with cleaner category-theoretic spine; does not cover modular
    rep theory.
  - K. Conrad, *Notes on Representation Theory* (Yale lecture notes,
    free, hosted at `kconrad.math.uconn.edu/blurbs/`). Multiple notes
    covering Mackey theory, Brauer induction, and Artin induction at
    the LRFG Part-II level.
  - MIT OCW 18.715 (Pavel Etingof, *Introduction to Representation
    Theory*, free). Covers LRFG Parts I–II; modular section absent.
- **Reduced-audit flag.** This plan was produced *without* a local
  LRFG PDF. Coverage estimates in §2 should be re-verified once a
  PDF is acquired, particularly for the Part III chapters (LRFG
  §§14–18) where structural detail (the cde-triangle map definitions,
  the projective cover construction, the explicit statement and
  proof of Brauer's main theorems) is the load-bearing pedagogical
  content. **Promote to full P1 audit when PDF is local.**
