# Serre — *Complex Semisimple Lie Algebras* (Fast Track 3.12) — Audit + Gap Plan

**Book:** Jean-Pierre Serre, *Complex Semisimple Lie Algebras* (Springer
Monographs in Mathematics, English translation by G. A. Jones 1987 of the
French original *Algèbres de Lie semi-simples complexes*, W. A. Benjamin
1966, ≈ 75 pp.). Commercial title (BUY in
`docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.12). ISBN 3-540-67827-1
(softcover reprint 2001).

**Fast Track entry:** 3.12. The canonical *shortest* monograph deriving the
full classification of complex semisimple Lie algebras — Serre's slim
Bourbaki-style monograph that proves in 75 pages what Humphreys takes 170
pages and Bourbaki Ch. VI–VIII takes 600 pages to do. Distinguished from
the Fast Track's other Lie / rep-theory slots (3.10 Hall, 3.11 Fulton-Harris,
3.13 *Lie Algebras and Lie Groups* sibling, 3.15 *Linear Representations of
Finite Groups*) by the **Serre-relations generators-and-relations
presentation** of semisimple Lie algebras — a presentation distinct from
Humphreys' Chevalley-basis approach and absent from Fulton-Harris.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
deepenings + a small set of new units so that *Complex Semisimple Lie
Algebras* (CSLA hereafter) is covered to the equivalence threshold
(≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit.** No local PDF in `reference/textbooks-extra/` (only the
cover image at
`reference/fast-track/images/Serre-Lie-Algebras-Lie-Groups-712x1024__dd9fad6ce3.jpg`,
which the Fast Track source page reuses across multiple Serre slots). The
1966 French original is not author-hosted; Springer 1987/2001 reprint is
commercial. This audit works from (a) the well-documented public TOC of
CSLA, (b) the Codex's 26 shipped `07-representation-theory/` units (which
already cite Serre 1966 by name in `07.04.01` and `07.06.05`), and (c) the
canonical secondary literature (Humphreys, Bourbaki, Carter, Knapp). A
full line-number audit is deferred until a PDF is acquired. This is
consistent with the audit-stub convention used for Brown-Higgins-Sivera
1.05a and Fulton-Harris 3.11.

---

## §1 What CSLA is for

CSLA is the **crystalline minimal monograph** on the classification of
complex semisimple Lie algebras. Where Humphreys' *Introduction to Lie
Algebras and Representation Theory* (1972) is the standard graduate
textbook treatment in 170 pages, where Bourbaki *Groupes et algèbres de
Lie* Ch. IV–VIII is the encyclopaedic 600-page treatise, where
Fulton-Harris is the example-first 550-page pedagogical sweep, and where
Knapp *Lie Groups Beyond an Introduction* is the real-form structure-theoretic
monograph — CSLA is the **shortest rigorous self-contained proof of the
classification.** Serre extracted his 1965 Algebra Collège de France
lectures into 75 pages by stripping everything to its functorial spine.
The book is famously the gold standard of mathematical economy.

Distinctive contributions, in the order CSLA develops them:

1. **Nilpotent and solvable Lie algebras (CSLA Ch. I).** Engel's theorem,
   Lie's theorem (over $\mathbb{C}$), the *radical* $\mathrm{rad}(\mathfrak{g})$.
   Compact 8-page treatment; serves only to define "semisimple" =
   "$\mathrm{rad} = 0$" in passing.

2. **Semisimple Lie algebras and the Killing form (CSLA Ch. II).**
   Cartan's criterion for semisimplicity ($\kappa$ non-degenerate iff
   $\mathfrak{g}$ semisimple), Weyl's complete-reducibility theorem (via
   the Casimir element), Levi-Malcev decomposition stated. This chapter
   establishes that semisimple Lie algebras are exactly the ones with a
   non-degenerate Killing form.

3. **Cartan subalgebras (CSLA Ch. III).** Definition (a nilpotent
   self-normalising subalgebra), existence and conjugacy via *regular
   elements*. Serre's proof of conjugacy uses the connectedness of the
   open dense set of regular elements in $\mathfrak{g}$ — a Lie-theoretic
   Zariski-density argument that is much shorter than Humphreys' detailed
   inductive proof. This is one of CSLA's hallmark economies.

4. **Root-space decomposition (CSLA Ch. IV).** For semisimple
   $\mathfrak{g}$ with Cartan subalgebra $\mathfrak{h}$,
   $\mathfrak{g} = \mathfrak{h} \oplus \bigoplus_{\alpha \in R}
   \mathfrak{g}_\alpha$ where $R \subset \mathfrak{h}^* \setminus \{0\}$
   is the **root system.** The standard sequence: $\mathfrak{g}_\alpha$ is
   1-dimensional, $\alpha \in R \Rightarrow -\alpha \in R$,
   $[\mathfrak{g}_\alpha, \mathfrak{g}_{-\alpha}] = \mathbb{C} H_\alpha$,
   the copy of $\mathfrak{sl}_2$ inside $\mathfrak{g}$ for each root.
   $\mathfrak{sl}_2$-theory used as the indispensable computational
   engine — every root-string property is derived from
   $\mathfrak{sl}_2$ representation theory.

5. **Root systems abstractly (CSLA Ch. V).** Axiomatic definition of a
   *root system* in a Euclidean space (independent of Lie algebras):
   $R$ finite, spans $V$, $\alpha \in R \Rightarrow -\alpha \in R$,
   reflection $s_\alpha$ preserves $R$, $\langle \alpha, \beta^\vee\rangle
   \in \mathbb{Z}$. Weyl group $W$ generated by reflections. Simple
   roots, positive roots, fundamental chamber, Cartan matrix, Coxeter
   element, Dynkin diagrams. Classification of irreducible root systems:
   **$A_n, B_n, C_n, D_n, E_6, E_7, E_8, F_4, G_2$** — the entire
   classification proved by the combinatorial Dynkin argument in ~12
   pages.

6. **Structure theorem via Serre relations (CSLA Ch. VI).** **THIS IS
   THE BOOK'S SIGNATURE CONTRIBUTION.** Given a Cartan matrix
   $(a_{ij})$, the Lie algebra $\mathfrak{g}(A)$ defined by generators
   $E_i, F_i, H_i$ ($1 \leq i \leq \ell$) and the *Serre relations*:
   - $[H_i, H_j] = 0$
   - $[H_i, E_j] = a_{ji} E_j$, $[H_i, F_j] = -a_{ji} F_j$
   - $[E_i, F_j] = \delta_{ij} H_i$
   - $(\mathrm{ad}\, E_i)^{1 - a_{ji}} E_j = 0$ for $i \neq j$
   - $(\mathrm{ad}\, F_i)^{1 - a_{ji}} F_j = 0$ for $i \neq j$
   
   is finite-dimensional and is *the* simple Lie algebra with that
   Cartan matrix. This **generators-and-relations presentation** is
   absent from Fulton-Harris and from most pedagogical treatments;
   Humphreys gives it as a final theorem after the Chevalley-basis
   construction has been done explicitly. Serre puts it at the centre,
   making it the *definition* of the simple Lie algebra once the root
   system is classified. The reader leaves CSLA knowing that "$E_8$"
   is the algebra defined by *these specific 248 generators-and-relations*.

7. **Linear representations of semisimple Lie algebras (CSLA Ch. VII).**
   The theorem of the highest weight: irreducible finite-dimensional
   representations are in bijection with dominant integral weights.
   Verma modules constructed (briefly) and their unique irreducible
   quotient $L(\lambda)$. Weyl character formula stated; proof
   *referred to Bourbaki* — Serre does not reproduce the full Weyl proof.

8. **Compactness and the Weyl unitarian trick (CSLA Ch. VIII, the
   shortest chapter).** Each complex semisimple Lie algebra has a
   *compact real form* $\mathfrak{u}$, and representations of the
   complex algebra correspond to unitary representations of the compact
   real form. Bridge to the compact-Lie-group programme without
   developing it.

CSLA is **not** a first introduction to Lie algebras (no $\mathfrak{sl}_2$
worked example in the Fulton-Harris sense; no matrix-explicit computations
in the Hall sense). It is **not** a treatment of real forms (Knapp is the
sequel). It is **not** a treatment of Kac-Moody or infinite-dimensional Lie
algebras (Kac *Infinite-Dimensional Lie Algebras* is the modern extension
of the Serre-relations programme to the affine and indefinite cases).
CSLA is the **densest possible** statement of the finite-dimensional
classification — and the *only* short text that puts the Serre-relations
presentation at the centre.

**Cited peer sources (≥3, per stub spec):**
- **J. E. Humphreys**, *Introduction to Lie Algebras and Representation
  Theory* (Springer GTM 9, 1972, corrected reprint 1978). The standard
  graduate text. ~170 pp. Uses the Chevalley-basis approach explicitly;
  Serre relations stated as Theorem 18.3. Direct competitor to CSLA at
  longer page-length.
- **N. Bourbaki**, *Groupes et algèbres de Lie* Ch. IV–VIII (Hermann
  1968–1975, Springer reprint 2002–2008). The encyclopaedic treatment;
  Serre's 1966 monograph was written in part to consolidate the Bourbaki
  programme into a teachable size. Bourbaki Ch. VIII §4 is the
  Serre-relations theorem in full generality. **Cited by Serre as the
  fallback for the Weyl character proof he omits.**
- **A. W. Knapp**, *Lie Groups Beyond an Introduction* (Birkhäuser 2nd
  ed. 2002). The real-form-and-structure-theoretic sequel. CSLA is its
  $\mathbb{C}$-only prereq. Knapp uses the Serre-relations presentation
  in Ch. II §6.
- **R. W. Carter**, *Lie Algebras of Finite and Affine Type* (Cambridge
  Studies in Advanced Mathematics 96, 2005). The modern unified
  treatment putting the Serre-relations presentation at the centre and
  extending it to affine Kac-Moody. Carter §7 reproduces Serre Ch. VI
  in expanded form and shows how the same generators-and-relations
  philosophy yields all of affine Lie theory. **Direct intellectual
  descendant of CSLA.**

---

## §2 Coverage table (Codex vs CSLA)

Cross-referenced against the current 26 shipped units of
`content/07-representation-theory/`. ✓ = covered, △ = partial /
different framing, ✗ = not covered.

| CSLA topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Lie algebra; bracket; structure constants | `03.04.01` lie-algebra | ✓ | Foundational unit in 03 differential-forms strand. |
| Subalgebra, ideal, derived series, lower central series | `03.04.01` (and `07.06.01`) | △ | Touched but no standalone solvable / nilpotent unit. **Gap (low).** |
| Engel's theorem | — | ✗ | **Gap (medium).** Standard prereq for Cartan's criterion. Candidate: `07.06.14` engel-theorem. |
| Lie's theorem (solvable Lie algebra over $\mathbb{C}$) | — | ✗ | **Gap (medium).** Standard prereq. Candidate: `07.06.15` lie-theorem. |
| Solvable radical $\mathrm{rad}(\mathfrak{g})$; semisimple = $\mathrm{rad} = 0$ | △ (mentioned in `07.04.01`) | △ | **Gap (low).** Folded into prose; no standalone unit. |
| Levi-Malcev decomposition | — | ✗ | **Gap (low).** CSLA states without proof; Codex omits entirely. Master deepening candidate. |
| **Killing form $\kappa(X, Y) = \mathrm{tr}(\mathrm{ad}\, X \circ \mathrm{ad}\, Y)$** | — (referenced in `07.06.03`, `07.06.04`, `07.04.01`, `07.03.01`) | △ | **Gap (HIGH).** Killing form is referenced in 4+ units but has *no standalone unit*. CSLA Ch. II is built on it. Candidate: `07.06.10` killing-form. |
| Cartan's criterion for semisimplicity ($\kappa$ non-degenerate ⇔ ss) | — | ✗ | **Gap (HIGH).** Cornerstone result; no Codex unit. Candidate: §Master section of `07.06.10` or new unit `07.06.16` cartan-criterion-semisimplicity. |
| Weyl complete-reducibility theorem | — | △ | **Gap (medium).** Referenced inside `07.03.01` highest-weight and `07.06.06` verma-module but no standalone proof unit. CSLA Ch. II §6 anchor. |
| Casimir element | — | △ | **Gap (medium).** Same as Fulton-Harris audit punch-list item 7 (`07.06.10` slot — note: see notation collision below). |
| **Cartan subalgebra (CSA): definition, existence, conjugacy** | — (mentioned in `07.06.03`, `07.04.01`) | △ | **Gap (HIGH).** CSLA Ch. III is the *whole* CSA story; Codex has no standalone CSA unit. Candidate: `07.06.17` cartan-subalgebra. |
| Regular elements; conjugacy of CSAs via regular elements | — | ✗ | **Gap (HIGH).** Serre's distinctive proof — Zariski-density of regular elements. No Codex coverage. Master section of `07.06.17`. |
| Root-space decomposition $\mathfrak{g} = \mathfrak{h} \oplus \bigoplus \mathfrak{g}_\alpha$ | △ (stated in `07.06.03` and `07.04.01`) | △ | **Gap (medium-high).** Stated; not derived as its own unit. Candidate: §Master deepening of `07.06.03` OR new unit `07.06.18` root-space-decomposition. |
| Root system (abstract, in Euclidean space) | `07.06.03` root-system | ✓ | Direct correspondent. |
| Weyl group | `07.06.04` weyl-group | ✓ | |
| Simple roots, positive roots, base, fundamental chamber | △ (touched in `07.06.03`, `07.06.04`) | △ | **Gap (low-medium).** No standalone "simple system / base" unit. Master deepening of `07.06.03`. |
| Cartan matrix | △ (mentioned in `07.06.05`, `07.04.01`) | △ | **Gap (medium).** No standalone unit. Candidate: §Intermediate/Master deepening of `07.06.05` or new unit `07.06.19` cartan-matrix. |
| Dynkin diagram; ADE classification | `07.06.05` dynkin-diagram | ✓ | |
| Cartan-Weyl classification | `07.04.01` cartan-weyl-classification | ✓ | Lists all of $A_n, B_n, C_n, D_n, E_6, E_7, E_8, F_4, G_2$. Already cites Serre 1966 by name. |
| **Serre relations and Serre's theorem (presentation by generators-and-relations)** | △ (mentioned in passing in `07.04.01`, `07.06.05`) | △ | **Gap (VERY HIGH — this is CSLA's signature contribution).** Currently stated as a sentence in `07.04.01`; no standalone unit. Candidate: `07.06.20` serre-relations. |
| Chevalley basis | — | ✗ | **Gap (medium).** Not in CSLA proper (CSLA uses Serre relations *instead* of Chevalley basis) but is the Humphreys-side counterpart. Master deepening of `07.06.20`. |
| Theorem of the highest weight | `07.03.01` highest-weight-representation | ✓ | |
| Verma module; irreducible quotient $L(\lambda)$ | `07.06.06` verma-module | ✓ | |
| Weyl character formula | `07.06.07` weyl-character-formula | ✓ | |
| Compact real form; Weyl's unitarian trick | △ (touched in `07.07.01`) | △ | **Gap (low-medium).** Compact-real-form correspondence not its own unit. Same as Fulton-Harris item 9. |

**Aggregate coverage estimate (REDUCED audit basis).**
- **Ch. I (nilpotent/solvable):** ~10% — Engel, Lie missing.
- **Ch. II (Killing form, semisimplicity criterion, Weyl reducibility):**
  ~15% — Killing form referenced everywhere but no standalone unit, no
  Cartan's criterion unit, Weyl complete reducibility folded inside
  other units.
- **Ch. III (Cartan subalgebras, conjugacy):** ~10% — CSA mentioned in
  passing only. Conjugacy proof entirely absent.
- **Ch. IV (root-space decomposition):** ~40% — stated in `07.06.03` and
  `07.04.01` but not derived as its own programme.
- **Ch. V (root systems, Weyl group, Dynkin diagrams, classification):**
  **~90%** — `07.06.03`, `07.06.04`, `07.06.05`, `07.04.01` cover almost
  everything; minor gaps in simple-system / Cartan-matrix detail.
- **Ch. VI (Serre relations, structure theorem):** ~10% — referenced
  by name; no standalone unit. **The signature CSLA content is
  underrepresented in the Codex.**
- **Ch. VII (highest-weight reps, Weyl character formula):** ~85% —
  Codex has `07.03.01`, `07.06.06`, `07.06.07`, `07.06.08` all shipped.
- **Ch. VIII (compact real forms, unitarian trick):** ~30% — touched
  only.

**Overall: ~55% of CSLA covered.** Higher than the 0% Brown-Higgins-Sivera
baseline because the Codex's `07-representation-theory/` already covers
the *output* of CSLA's classification programme (root systems, Weyl
group, Dynkin diagrams, highest-weight reps). Lower than the 65%
Fulton-Harris coverage because CSLA's *foundational chapters* (Killing
form, Cartan subalgebra conjugacy, Serre relations) — the proofs that
make the classification a theorem rather than a list — are notably
underrepresented. The gap pattern is **infrastructural** (foundational
proofs missing) rather than **pedagogical** (FH's gap is missing worked
examples; CSLA's gap is missing supporting theorems).

---

## §3 Gap punch-list (priority-ordered)

**Priority 1 — high-leverage, captures CSLA's foundational and signature content:**

1. **`07.06.10` Killing form.** Standalone unit (~1500 words). Definition
   $\kappa(X, Y) = \mathrm{tr}(\mathrm{ad}\, X \circ \mathrm{ad}\, Y)$;
   associativity / $\mathrm{ad}$-invariance; computation for
   $\mathfrak{sl}_2, \mathfrak{sl}_3, \mathfrak{so}_n, \mathfrak{sp}_n$;
   *Cartan's criterion for semisimplicity*: $\mathfrak{g}$ semisimple iff
   $\kappa$ is non-degenerate. CSLA Ch. II anchor; Humphreys §5 anchor;
   Bourbaki Ch. I §6 anchor. Intermediate + Master tiers (Master: full
   proof of Cartan's criterion via Cartan's criterion for solvability).
   **Foundational — referenced by `07.06.03`, `07.06.04`, `07.04.01`,
   `07.03.01` without a home unit.** Note: also resolves the
   Fulton-Harris audit's Casimir-element gap if folded together — but
   keep Casimir as its own unit (`07.06.21` proposed below) to avoid
   over-loading.

2. **`07.06.17` Cartan subalgebra.** Definition (nilpotent self-normalising
   subalgebra; equivalently, a maximal toral subalgebra for semisimple
   $\mathfrak{g}$); existence; **conjugacy via regular elements**
   (Serre's distinctive Zariski-density proof); the abstract Cartan
   subalgebra. CSLA Ch. III anchor; Humphreys §15 anchor (different
   proof); Carter §7.1 anchor. Three-tier; Master tier reproduces
   Serre's proof. **Foundational — Cartan subalgebras are referenced in
   `07.06.03` and `07.04.01` without a home.** ~2000 words.

3. **`07.06.20` Serre relations and Serre's theorem.** **The signature
   CSLA unit.** Given a Cartan matrix $A = (a_{ij})$ of an irreducible
   root system, define $\mathfrak{g}(A)$ by generators $E_i, F_i, H_i$
   and the Serre relations (listed in §1 item 6 above). **Serre's
   Theorem.** $\mathfrak{g}(A)$ is finite-dimensional, simple, has
   Cartan matrix $A$, and every finite-dim simple complex Lie algebra
   arises this way. CSLA Ch. VI anchor; Humphreys §18 anchor; Carter §7
   anchor; Kac *Infinite-Dim Lie Algebras* §1.3 anchor (the same
   presentation extended to Kac-Moody). Three-tier; Master tier
   includes the existence-and-uniqueness proof. ~2500 words. **This is
   the Codex's single largest *intellectual* gap on the Lie-algebra
   side — the Serre presentation is *cited* in `07.04.01` and `07.06.05`
   but never written out.** Originator-prose section citing Serre 1966
   directly.

4. **`07.06.18` Root-space decomposition.** Standalone unit
   reorganising material currently scattered across `07.06.03`,
   `07.06.04`, `07.04.01`. For semisimple $\mathfrak{g}$ with CSA
   $\mathfrak{h}$: $\mathfrak{g} = \mathfrak{h} \oplus \bigoplus_{\alpha
   \in R} \mathfrak{g}_\alpha$; $\dim \mathfrak{g}_\alpha = 1$;
   $[\mathfrak{g}_\alpha, \mathfrak{g}_\beta] \subseteq \mathfrak{g}_{\alpha
   + \beta}$; the copy of $\mathfrak{sl}_2$ for each root; root-string
   formulae. CSLA Ch. IV anchor; Humphreys §8 anchor. Three-tier;
   Master tier includes full proofs. ~1800 words. **High — currently
   stated as result-without-derivation across multiple units.**

**Priority 2 — fills medium-priority CSLA content:**

5. **`07.06.19` Cartan matrix.** Short standalone unit (~1200 words).
   Definition $a_{ij} = \langle \alpha_i, \alpha_j^\vee\rangle$; integer
   entries; diagonal = 2, off-diagonal $\leq 0$; rank, determinant,
   positive-definiteness; relation to Dynkin diagram. CSLA Ch. V anchor.
   Intermediate + Master. **Medium — currently embedded inside
   `07.06.05` and `07.04.01`.**

6. **`07.06.14` Engel's theorem + `07.06.15` Lie's theorem.** Two short
   units (~1000 words each), or one combined unit. Engel: a Lie algebra
   of nilpotent endomorphisms acts with a common eigenvector;
   equivalent characterisation of nilpotent Lie algebras. Lie: for a
   solvable Lie algebra over $\mathbb{C}$ acting on a finite-dim
   vector space, there is a common eigenvector (equivalently, upper-
   triangularisation in some basis). CSLA Ch. I anchor; Humphreys §3
   anchor. **Medium — these are prereqs for the Killing-form unit
   (Cartan's criterion uses Lie's theorem).**

7. **`07.06.16` Cartan's criterion for solvability and semisimplicity.**
   Standalone unit (~1500 words). Combines the two Cartan criteria
   (for solvability: $\kappa(\mathfrak{g}, [\mathfrak{g}, \mathfrak{g}])
   = 0$ ⇔ solvable; for semisimplicity: $\kappa$ non-degenerate ⇔
   semisimple). CSLA Ch. II §5 anchor; Humphreys §5 anchor. Master tier
   includes full proofs. **Medium-high — central theorem of CSLA Ch. II.**
   Could be folded into `07.06.10` as a Master section; recommend
   separate unit for clarity.

8. **`07.06.22` Weyl complete-reducibility theorem.** Statement and
   Casimir-element proof. CSLA Ch. II §6 anchor; Humphreys §6 anchor.
   Currently referenced inside `07.06.06` verma-module and elsewhere
   without a home. ~1200 words.

**Priority 3 — Master-tier deepenings (not strictly required for FT
equivalence):**

9. **`07.06.21` Casimir element.** *(Shared with Fulton-Harris audit
   item 7.)* Short standalone unit. For semisimple $\mathfrak{g}$ with
   Killing form $\kappa$, the Casimir $\Omega = \sum X_i X^i \in
   U(\mathfrak{g})$; centrality; action as scalar
   $\langle \lambda, \lambda + 2\rho\rangle$ on $L(\lambda)$. CSLA
   Ch. II + Humphreys §6 + Fulton-Harris §14 anchor. ~1200 words.
   **Already enumerated in Fulton-Harris audit; assigning the same unit
   slot here.**

10. **§Master deepening of `07.06.20` (Serre relations): Chevalley
    basis.** ~700 words added. Cross-references Humphreys §25.2 for the
    Chevalley-basis construction (the alternative integral form, used
    for Chevalley groups and modular reps).

11. **§Master deepening of `07.06.10` (Killing form): Levi-Malcev
    decomposition.** ~500 words added. $\mathfrak{g} = \mathfrak{r}
    \rtimes \mathfrak{s}$ where $\mathfrak{r} = \mathrm{rad}(\mathfrak{g})$
    and $\mathfrak{s}$ is semisimple. Statement + reference to
    Bourbaki for proof.

12. **§Master deepening of `07.07.01`: compact real form and Weyl's
    unitarian trick.** *(Shared with Fulton-Harris audit item 9.)*
    ~500 words added. Weyl's unitarian trick: complex reps of
    $\mathfrak{g}_\mathbb{C}$ ↔ unitary reps of compact real form
    $\mathfrak{u}$. CSLA Ch. VIII anchor.

13. **§Master deepening of `07.06.18` (root-space decomposition): root
    strings and the $\mathfrak{sl}_2$ subalgebra for each root.** ~600
    words. Already implicit in `07.06.03`; promote to explicit master
    section here.

**Priority 4 — survey pointers (optional, Master-only):**

14. **§Pointer in `07.06.20`: extension to Kac-Moody and affine Lie
    algebras via the same generators-and-relations philosophy.** ~300
    words. Statement only; full development deferred to a hypothetical
    Kac *Infinite-Dimensional Lie Algebras* audit.

---

## §4 Implementation sketch (P3 → P4)

**Realistic production estimate** (mirroring earlier Brown / Fulton-Harris
audit batches):

- Priority 1 (4 new units): ~3 hours each = **~12 hours.**
  `07.06.10 killing-form`, `07.06.17 cartan-subalgebra`,
  `07.06.20 serre-relations`, `07.06.18 root-space-decomposition`.
- Priority 2 (4 new units, some short): ~2.5 hours each = **~10 hours.**
- Priority 3 (5 master deepenings + 1 unit): ~45 min each = **~4 hours.**
- Priority 4 (pointer): ~30 min.

**Total: ~26–27 hours of focused production for full FT-equivalence
coverage of CSLA.** Fits a 4-day window. Priority 1 alone (~12 hours, 1.5
days) closes the foundational gap and raises effective coverage from
~55% to ~85%.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, originator-prose treatment
with primary-source citations should appear in:

- **Killing 1888–1890** — Wilhelm Killing, "Die Zusammensetzung der
  stetigen endlichen Transformationsgruppen, I–IV," *Math. Ann.* 31, 33,
  34, 36 (1888–1890). Originated the classification programme (with
  errors that Cartan corrected). Originated the *Killing form* itself.
  **Cite in `07.06.10` and `07.04.01` Master sections.**
- **Cartan 1894** — Élie Cartan, *Sur la structure des groupes de
  transformations finis et continus*, thèse, Paris 1894. Corrected and
  completed Killing's classification; introduced Cartan subalgebras
  and the rigorous semisimplicity criterion. **Cite in `07.06.10`,
  `07.06.17`, `07.06.16`, `07.04.01`.**
- **Weyl 1925/1926** — Hermann Weyl, "Theorie der Darstellung
  kontinuierlicher halb-einfacher Gruppen durch lineare
  Transformationen, I–IV," *Math. Z.* 23–24 (1925–1926). Compact-form
  integration; complete reducibility; character formula. **Cite in
  `07.06.22` and `07.06.07` Master sections.**
- **Chevalley 1955** — C. Chevalley, "Sur certains groupes simples,"
  *Tôhoku Math. J.* 7 (1955) 14–66. The Chevalley basis; integral
  forms; Chevalley groups. **Cite in `07.06.20` Master deepening
  (Chevalley-basis section).**
- **Serre 1966** — J.-P. Serre, *Algèbres de Lie semi-simples
  complexes*, W. A. Benjamin, New York 1966. Cited as the originator of
  the *Serre-relations* presentation. **Cite in `07.06.20` (this is
  the originator citation for the unit) and as the book-anchor for
  every Priority-1 unit.**

**Notation crosswalk.** CSLA uses $\mathfrak{g}$ for the Lie algebra,
$\mathfrak{h}$ for the Cartan subalgebra, $R$ for the root system,
$R^+$ for positive roots, $\Pi = \{\alpha_1, \dots, \alpha_\ell\}$ for
the simple roots, $W$ for the Weyl group, $H_i, E_i, F_i$ for the Serre
generators, $\langle \beta, \alpha^\vee\rangle = 2(\beta, \alpha)/(\alpha,
\alpha)$ for the Cartan pairing (with $\alpha^\vee$ the coroot). Codex
matches CSLA on $\mathfrak{g}, \mathfrak{h}, R, W$ (per `07.06.03`,
`07.06.04`); the simple-root notation in `07.06.05` is $\alpha_i$
matching CSLA. **The principal notation concern is the Serre vs
Fulton-Harris vs Humphreys split for the Cartan-Weyl generators:**
- **CSLA / Serre:** $E_i, F_i, H_i$ for the Chevalley-Serre generators
  attached to *simple roots only*; for each root $\alpha$, the
  $\mathfrak{sl}_2$-triple is $(e_\alpha, f_\alpha, h_\alpha)$.
- **Fulton-Harris:** $X_\alpha, Y_\alpha, H_\alpha$ for the
  $\mathfrak{sl}_2$-triple attached to root $\alpha$; no special
  notation for simple-root generators (because FH does not centre the
  Serre presentation).
- **Humphreys:** $x_\alpha, y_\alpha, h_\alpha$ for the Chevalley basis;
  $e_i, f_i, h_i$ for the Serre generators in §18.
- **Carter:** $e_i, f_i, h_i$ for Serre generators throughout
  (lowercase) to match the Kac-Moody literature.

**Codex notation decision.** Adopt the Serre / CSLA / Carter convention:
$e_i, f_i, h_i$ for the Serre generators attached to simple roots
$\alpha_i$ (lowercase to match Kac-Moody convention and to disambiguate
from group elements). For the $\mathfrak{sl}_2$-triple attached to a
general root $\alpha$, write $(e_\alpha, f_\alpha, h_\alpha)$. Record
this in a §Notation paragraph of `07.06.20` and cross-reference in
`07.06.18`, `07.06.10`, `07.06.17`. **This is a deliberate departure
from Fulton-Harris notation** (where $X_\alpha, Y_\alpha$ are used) —
the Codex follows the modern Carter / Kac convention which is the de
facto standard for current Lie-theory research.

**Cross-strand weaving (Pass-W).** New units should link laterally to:

- `03.04.01 lie-algebra` (basic Lie-algebra definitions) — strict prereq
  for `07.06.10, 07.06.14, 07.06.15, 07.06.16, 07.06.17`.
- Fulton-Harris audit punch-list items (`07.06.11 sl2`, `07.06.12 sl3`):
  both depend on `07.06.10 killing-form` and `07.06.17 cartan-subalgebra`,
  so ordering matters — ship CSLA Priority-1 units *before* FH
  Priority-1 worked-example units.
- `physics/quantum-mechanics/` angular momentum strand — `07.06.10`
  Killing form on $\mathfrak{su}(2)$ is the inner product on physical
  angular momentum.
- `02.02 quantum-theory-groups-representations` audit (Woit, FT 2.02) —
  Woit Ch. 8–10 uses the Serre presentation implicitly for
  $\mathfrak{su}(3)$; cross-link to `07.06.20`.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in CSLA (full P1
  audit; deferred until a local PDF is acquired). Coverage estimates in
  §2 are based on CSLA's well-known chapter structure (the 8-chapter
  organisation is canonical and reproduced in every secondary source)
  plus spot-checks of the 26 Codex units.
- **Serre's *Lie Algebras and Lie Groups* (FT 3.13 sibling).** Per the
  stub spec, deferred to its own dedicated audit. Note that 3.13 covers
  *p-adic Lie groups* and *Campbell-Hausdorff homological algebra* —
  topics orthogonal to 3.12; the sibling audit is therefore independent
  rather than overlapping.
- **Serre's *Linear Representations of Finite Groups* (FT 3.15).**
  Different book; covered by its own audit. CSLA does not overlap with
  finite-group representation theory.
- **Serre's *A Course in Arithmetic* (FT 3.14).** Different book; its
  rep-theory fragment is a fraction of FT 3.15 and is anchored there.
- **Infinite-dimensional Kac-Moody Lie algebras** (Kac, *Infinite-Dim
  Lie Algebras*, 3rd ed. 1990). CSLA is the *finite-dim* progenitor of
  the Kac programme; the affine and indefinite extensions are deferred
  to a hypothetical future Kac audit. Pointer only in `07.06.20`
  Priority-4.
- **Real forms and structure theory** (Knapp *Beyond an Introduction*).
  Knapp is the real-form sequel to CSLA's complex-form-only treatment.
  Deferred to a Knapp audit if/when promoted.
- **Quantum groups and Hopf-algebraic deformations** (Drinfeld 1985,
  Jimbo 1985, Lusztig). The Serre relations admit a $q$-deformed form
  $U_q(\mathfrak{g})$; this is the modern descendant of CSLA's
  presentation but is deferred to a category-theory / quantum-group
  audit.
- **Algebraic groups and Chevalley groups in positive characteristic**
  (Steinberg lectures; Jantzen *Representations of Algebraic Groups*).
  Chevalley basis briefly addressed as a Master deepening in
  `07.06.20`; the full positive-characteristic theory is out of scope.
- **Exercise-pack production.** CSLA has very few exercises (Serre's
  monographs are uniformly exercise-light). The exercise pack for
  `07-representation-theory/` will mostly draw from Humphreys and
  Fulton-Harris rather than CSLA.

---

## §6 Acceptance criteria for FT equivalence (CSLA)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The 4 Priority-1 new units have shipped (`07.06.10 killing-form`,
  `07.06.17 cartan-subalgebra`, `07.06.20 serre-relations`,
  `07.06.18 root-space-decomposition`). These close the foundational
  gap.
- ≥95% of CSLA's named theorems in Ch. I–VIII map to a Codex unit
  (currently ~55%; after Priority-1 this rises to ~85%; after
  Priority-1+2 to ~92%; full ≥95% requires Priority-3 master
  deepenings).
- ≥90% of CSLA's structure proofs (Cartan criteria, Weyl reducibility,
  CSA conjugacy via regular elements, Serre's theorem) have a direct
  unit covering them.
- Notation crosswalk recorded — in particular, the
  $e_i, f_i, h_i$ Serre-generator convention is adopted across the
  Lie-algebraic strand. See §4.
- Pass-W weaving connects the new units to `03.04 lie-algebra`, to the
  Fulton-Harris audit punch-list, and to the Woit FT 2.02 audit.
- Originator-prose sections (Killing 1888, Cartan 1894, Weyl 1925,
  Chevalley 1955, Serre 1966) appear in the relevant Master tiers.

**Equivalence verification protocol** (per `FASTTRACK_EQUIVALENCE_PLAN.md`
§4):

- **4.1 Book-as-input self-check.** Sample 5 random theorem statements
  from CSLA (e.g., Engel's theorem, Cartan's criterion for
  semisimplicity, CSA conjugacy, Serre's theorem, Weyl character
  formula); for each, identify the Codex unit that proves it.
- **4.2 Exercise reproducibility.** CSLA is exercise-light — sample
  exercises should be drawn from the Humphreys / Fulton-Harris
  exercise corpus on the same topics. For each, identify the Codex
  unit(s) sufficient to solve it.
- **4.3 Notation comprehension.** Sample 5 fragments of CSLA prose;
  paraphrase each into the Codex notation system (per §4 crosswalk).
  Particular attention to the Serre-generator notation in CSLA Ch. VI.

---

## §7 Sourcing

- **Local PDF status.** Not present in `reference/textbooks-extra/`
  (verified — only the cover image at
  `reference/fast-track/images/Serre-Lie-Algebras-Lie-Groups-712x1024__dd9fad6ce3.jpg`
  is local, and that image is shared with the FT 3.13 *Lie Algebras and
  Lie Groups* slot). CSLA is a commercial Springer Monographs in
  Mathematics title and is not author-hosted.
- **Commercial source.** Springer Monographs in Mathematics. Print +
  Springer eBook available at
  `link.springer.com/book/10.1007/978-3-642-56884-8`. ISBN
  3-540-67827-1 (softcover 2001 reprint), 0-8053-8633-5 (1966 Benjamin
  original).
- **Library-mirror sources.** Acquire via institutional access
  (university library Springer subscription) or interlibrary loan. The
  1966 Benjamin original is out of print but available via inter-library
  loan in major research libraries; the 1987 Jones translation is the
  Springer text in circulation. For the local copy, target placement is
  `reference/textbooks-extra/Serre-Complex-Semisimple-Lie-Algebras.pdf`
  to mirror the pattern of other commercial-source FT texts.
- **Companion / supplementary materials.**
  - **J. E. Humphreys**, *Introduction to Lie Algebras and Representation
    Theory* (Springer GTM 9, 1972). The standard graduate textbook;
    longer treatment of the same material. Often easier to acquire than
    CSLA.
  - **N. Bourbaki**, *Groupes et algèbres de Lie* Ch. IV–VIII (Hermann
    1968–1975; Springer reprint 2002–2008). Encyclopaedic.
  - **R. W. Carter**, *Lie Algebras of Finite and Affine Type* (Cambridge
    2005). Modern unified treatment in 600 pages; reproduces CSLA Ch. VI
    in expanded form.
  - **A. W. Knapp**, *Lie Groups Beyond an Introduction* (Birkhäuser 2nd
    ed. 2002). The real-form sequel.
- **Open-access alternatives covering ~80% of CSLA:**
  - **B. C. Hall**, *Lie Groups, Lie Algebras, and Representations*
    (Springer GTM 222) — substantial preview on Google Books; covers
    root systems, Weyl group, classification at a gentler pace.
  - **Various lecture notes** — Erdmann-Wildon *Introduction to Lie
    Algebras* (Springer SUMS 2006, ~250 pp.) is the canonical
    undergraduate companion; Etingof et al. *Introduction to Lie
    Algebras* (free MIT 18.745 notes) covers similar ground.
- **Reduced-audit flag.** This plan was produced *without* a local CSLA
  PDF. Coverage estimates in §2 should be re-verified once a PDF is
  acquired, particularly for Ch. VI (Serre relations) where the proof
  detail is the load-bearing content. **Promote to full P1 audit when
  PDF is local.**
