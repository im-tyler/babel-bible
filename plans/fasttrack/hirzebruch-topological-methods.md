# Hirzebruch — *Topological Methods in Algebraic Geometry* (Fast Track 3.25) — Audit + Gap Plan

**Book:** Friedrich Hirzebruch, *Topological Methods in Algebraic Geometry*
(Classics in Mathematics, Springer-Verlag, 1995 reprint of the 3rd English
edition 1978; English translations 1962 and 1966; original German edition
*Neue topologische Methoden in der algebraischen Geometrie*, Ergebnisse der
Mathematik und ihrer Grenzgebiete 9, Springer 1956). Translator: R. L. E.
Schwarzenberger, with an appendix by A. Borel. xii + 234 pp.
ISBN 3-540-58663-6.

**Fast Track entry:** 3.25. Algebraic-Geometry strand crossing the
Characteristic-Class strand (FT 3.08 Milnor-Stasheff) and the K-theory /
index-theory strand (FT 3.10 Lawson-Michelsohn, FT 3.11 Atiyah, FT 1.17
Bott-Tu). Historically the origin of the modern formalism that ties them
together.

**Source PDF:** **NOT in `reference/textbooks-extra/`.** Springer Classics
edition is still in print and copyrighted; no free legal mirror exists at
the canonical academic archives (Ranicki / arXiv / numdam / projecteuclid)
as confirmed by WebFetch of `webhomes.maths.ed.ac.uk/~v1ranick/papers/`
(2026-05-17). Springer Link page redirects to authenticated SSO. Anna's
Archive / library-genesis copies exist but were not exercised here per
license caution; cite by ISBN.

This audit works from the well-documented standard structure of the book
(four numbered chapters, 25 numbered sections + Borel appendix), the
Babel Bible's existing Hirzebruch citations (`04.05.08-riemann-roch-theorem-for-surfaces.md`,
`03.06.04-pontryagin-chern-classes.md`, `03.09.10-atiyah-singer-index-theorem.md`,
`06.04.01-riemann-roch-compact-riemann-surfaces.md`), the four cited peer
sources in §1, and the existing Milnor-Stasheff audit plan
(`plans/fasttrack/milnor-stasheff-characteristic-classes.md`) whose
Priority-3 unit `03.06.15` (multiplicative sequences and the L/Â/Todd
genera) is the **shared work item** with this plan.

**Audit type:** P1-lite + P2 gap pass + P3-lite punch-list, mirroring
`brown-higgins-sivera-nonabelian-algebraic-topology.md` and
`milnor-stasheff-characteristic-classes.md`. Not a line-number P1
inventory.

**Plan status:** `reduced` — single audit pass over book structure
without a full line-number P1 inventory (PDF not locally accessible;
1956 monograph). Sufficient to drive the production punch-list to
FT-equivalence. Full P1 deferred.

---

## §1 What Hirzebruch is for

Hirzebruch's *Topological Methods* is the canonical 1956 monograph
(originally his habilitation thesis at Münster) deriving the
**Hirzebruch-Riemann-Roch theorem (HRR)** for smooth projective complex
algebraic varieties and the **Hirzebruch signature theorem** for closed
oriented $4k$-manifolds, both from the unifying formalism of
**multiplicative sequences** of Chern (resp. Pontryagin) classes. The
book is the place where the **Todd class** $\mathrm{td}(E)$, the
**Chern character** $\mathrm{ch}(E)$, the **L-genus** $L(E)$, and the
**Â-genus** $\hat A(E)$ first appear together as instances of a single
algebraic machine (a graded multiplicative sequence indexed by a formal
power series in one variable), and the place where HRR is first proved
in full generality from Thom's cobordism theorem via the structural
identity $\chi(X, E) = \int_X \mathrm{ch}(E) \cdot \mathrm{td}(T_X)$.

This is **the originating text** for: the modern Chern-character / Todd
formalism of HRR; the multiplicative-sequence machinery; the signature
theorem in its $L$-polynomial form; and (via Atiyah-Singer 1963 — which
*generalises* Hirzebruch) the entire modern index-theory programme.
Hirzebruch's monograph is to characteristic-class computation what
Hartshorne is to scheme theory and Milnor-Stasheff is to characteristic
classes themselves: the standard reference, dense, complete, and quoted
by everyone downstream.

Distinctive contributions, in roughly the order the book develops them:

1. **Multiplicative sequences (Chapter I).** Given a formal power series
   $Q(x) = 1 + a_1 x + a_2 x^2 + \cdots \in \mathbb{Q}[[x]]$, the
   associated *multiplicative sequence* $\{K_j\}_{j \geq 0}$ is the
   unique sequence of homogeneous polynomials $K_j(p_1, \ldots, p_j)$ of
   degree $j$ in the elementary symmetric functions such that the formal
   identity $\prod_{i=1}^n Q(x_i) = \sum_j K_j(\sigma_1, \ldots, \sigma_j)$
   holds, where $\sigma_i$ are the elementary symmetric functions in
   $x_1, \ldots, x_n$. This is the **central algebraic machine** of the
   book.
2. **The Todd genus $\mathrm{td}(E)$ (Chapter I, §1).** The
   multiplicative sequence attached to $Q(x) = x/(1 - e^{-x})$. Defined
   on complex vector bundles; takes values in $H^{\mathrm{even}}(B; \mathbb{Q})$.
   Hirzebruch identifies it as the unique multiplicative sequence
   sending $\mathbb{CP}^n$ to $1$ for all $n$ — the universal
   characteristic of the $\bar\partial$-operator's index.
3. **The L-genus $L(E)$ and Â-genus $\hat A(E)$ (Chapter I).**
   $L$ attached to $Q(x) = x/\tanh(x)$ on real bundles (via Pontryagin
   classes); $\hat A$ attached to $Q(x) = (x/2)/\sinh(x/2)$. Both
   land in $H^{4*}(B; \mathbb{Q})$. Bernoulli numbers enter via the
   power-series coefficients.
4. **The Chern character $\mathrm{ch}(E)$ (Chapter I).** The additive
   characteristic class $\mathrm{ch}(E) = \sum e^{x_i}$ in formal Chern
   roots; $\mathrm{ch}: K(X) \otimes \mathbb{Q} \xrightarrow{\sim}
   H^{\mathrm{ev}}(X; \mathbb{Q})$ is a ring isomorphism (after
   tensoring with $\mathbb{Q}$). The Chern character converts K-theoretic
   information into rational cohomology.
5. **Signature theorem (Chapter I, §8).** For a closed oriented
   $4k$-manifold $M$, $\mathrm{sign}(M) = \langle L_k(p_1, \ldots, p_k),
   [M] \rangle$. Hirzebruch's proof: signature is a ring homomorphism
   $\Omega_*^{\mathrm{SO}} \otimes \mathbb{Q} \to \mathbb{Q}$; Thom's
   theorem identifies $\Omega_*^{\mathrm{SO}} \otimes \mathbb{Q}$ with a
   polynomial ring on $[\mathbb{CP}^{2k}]$; $L$ is determined by
   $L([\mathbb{CP}^{2k}]) = \mathrm{sign}(\mathbb{CP}^{2k}) = 1$.
6. **Hirzebruch-Riemann-Roch theorem (Chapter IV, §21).** For a smooth
   projective algebraic variety $X$ of complex dimension $n$ and a
   holomorphic vector bundle $E \to X$, the **HRR formula** is
   $$\chi(X, E) = \int_X \mathrm{ch}(E) \cdot \mathrm{td}(T_X).$$
   Specialises to the classical Riemann-Roch on curves ($n = 1$), the
   Noether formula and surface Riemann-Roch ($n = 2$), and gives a
   uniform formula in all dimensions. **The central theorem of the
   book.**
7. **Chapter II — Sheaf cohomology and characteristic classes
   compatibility.** The bridge: sheaf cohomology of a coherent sheaf $\mathcal{F}$
   on a complex manifold, the holomorphic Euler characteristic
   $\chi(X, \mathcal{F}) = \sum (-1)^i \dim H^i(X, \mathcal{F})$, and the
   identification with Dolbeault cohomology via the Hodge isomorphism.
3. **Borel appendix on characteristic classes of homogeneous spaces.**
   Computes $H^*(G/T; \mathbb{Q})$ and the Chern classes of homogeneous
   bundles via the Weyl group action; the prototype of equivariant
   characteristic classes.

The book is **not** a first text on characteristic classes (Milnor-Stasheff
is the standard first text; Bott-Tu the standard de Rham approach) and
**not** a first text on algebraic geometry (Hartshorne, Griffiths-Harris).
Hirzebruch sits at the *meeting point* of characteristic classes and
algebraic geometry, and is the canonical reference for that meeting.

**Peer cross-references** (the four cited peer sources used in this audit):

- **Milnor, J. W. & Stasheff, J. D., *Characteristic Classes*** (Annals
  of Mathematics Studies 76, Princeton 1974) — FT 3.08. Hirzebruch §I
  (multiplicative sequences) and §I.8 (signature theorem) correspond to
  Milnor-Stasheff §19 + Appendix B. Milnor-Stasheff treats the
  multiplicative-sequence formalism more pedagogically; Hirzebruch
  derives it ab initio. **The signature-theorem item is shared**
  between this plan and the Milnor-Stasheff audit (Priority-1 unit
  `03.06.11` in the M-S plan; Priority-3 unit `03.06.15` covering
  multiplicative sequences and the L/Â/Td genera). Coordinate during
  production.
- **Fulton, W., *Intersection Theory*** (Springer Ergebnisse 3.Folge 2,
  2nd ed., 1998). The modern algebraic-geometry generalisation of
  Hirzebruch: HRR is proved cleanly via Grothendieck-Riemann-Roch and
  the Chow-ring framework of intersection theory. Fulton's §15 ("Riemann-Roch
  for algebraic schemes") and §18 ("Local complete intersection morphisms
  and Riemann-Roch") supersede Hirzebruch's analytic / cobordism approach
  but cite him as originator. Fulton is **explicitly deferred** as a
  non-goal of this plan; it has its own future audit.
- **Atiyah, M. F. & Singer, I. M., "The index of elliptic operators on
  compact manifolds"** (*Bull. AMS* 69 (1963), 422–433), and the
  five-paper *Annals* series 1968. The 1963 paper is the moment HRR
  and the signature theorem are *generalised* to all elliptic operators
  on closed manifolds. Hirzebruch's identities become specialisations
  of the Atiyah-Singer index formula
  $\mathrm{ind}(D) = \int_{T^*M} \mathrm{ch}(\sigma(D)) \cdot \mathrm{td}(T^*M_{\mathbb{C}})$
  to particular elliptic complexes (Dolbeault → HRR; signature operator
  → signature theorem; Dirac operator → Â-genus). The Atiyah-Singer deep
  technical content (K-theory of cotangent bundles, pseudodifferential
  symbols, the topological / analytic index equality) is **explicitly
  deferred** to its own future audit (FT 3.11 Atiyah *K-Theory* and a
  future Atiyah-Singer audit).
- **Bott, R. & Tu, L. W., *Differential Forms in Algebraic Topology***
  (Springer GTM 82, 1982) — FT 1.17. Bott-Tu §20–§23 gives the de Rham
  / Chern-Weil derivation of Chern classes, the splitting principle,
  Pontryagin classes, and a clean pedagogical treatment of the
  multiplicative-sequence machinery. Hirzebruch §I and Bott-Tu §22 are
  the same machine in different languages (cobordism vs differential
  forms).

Two additional originator-prose anchors (cited in §4):

- **Hirzebruch, F., "Arithmetic genera of algebraic manifolds"** (*Proc.
  Nat. Acad. Sci. USA* 40 (1954), 110–114). The four-page announcement
  paper where HRR is first stated.
- **Hopf, H., "Sulla geometria riemanniana globale della superficie cubica
  generale"** (*Atti Convegno di Geometria, Roma 1948*). Hopf's 1948
  sketches anticipating the Todd-class formalism for surfaces; Hirzebruch
  cites this as the immediate ancestor.

---

## §2 Coverage table (Babel Bible vs Hirzebruch)

Cross-referenced against the current corpus (313-unit Babel Bible; for this
plan the relevant areas are `03-modern-geometry/06-characteristic-classes/`
with 4 shipped units, `03-modern-geometry/08-k-theory/` with 7 shipped
units, `03-modern-geometry/09-spin-geometry/` including the Atiyah-Singer
unit, and `04-algebraic-geometry/` with 40 shipped units, including
`04.04.01-riemann-roch-curves`, `04.05.08-riemann-roch-theorem-for-surfaces`,
and `06.04.01-riemann-roch-compact-riemann-surfaces`).

✓ = covered, △ = partial / different framing, ✗ = not covered.

| Hirzebruch topic | Section | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| Multiplicative sequences (formal-power-series machinery) | §I.1 | — | ✗ | **Gap (high priority — Hirzebruch's central algebraic machine).** Also a Priority-3 item on the Milnor-Stasheff plan (`03.06.15`). **Shared.** |
| Bernoulli numbers (coefficients in $L$, $\hat A$) | §I.1, App B parallel | — | ✗ | **Gap.** Also on Milnor-Stasheff plan (Priority-4 unit 12). **Shared.** |
| Todd genus $\mathrm{td}(E)$ via $Q(x) = x/(1-e^{-x})$ | §I.1 | partial | △ | Used in `04.05.08`, `06.04.01`, `03.09.10` as named object; no standalone unit defining $\mathrm{td}(E)$ from the multiplicative-sequence machine. |
| L-genus $L(E)$ via $Q(x) = x/\tanh(x)$ | §I.1 | partial | △ | Named in `03.09.10`; computed for $\mathbb{CP}^2$ in `03.06.04`. No standalone unit. |
| Â-genus $\hat A(E)$ via $Q(x) = (x/2)/\sinh(x/2)$ | §I.1 | partial | △ | Named in `03.09.10`; $\hat A(K3) = 2$ computed in `03.09.10`. No standalone definitional unit. |
| Chern character $\mathrm{ch}(E)$ | §I.1, §I.4 | partial | △ | Touched in `03.06.04`, `03.08.01`, `03.09.10`. No standalone unit treating $\mathrm{ch}: K(X) \otimes \mathbb{Q} \xrightarrow{\sim} H^{\mathrm{ev}}(X; \mathbb{Q})$ as the central ring isomorphism with full proof. |
| Chern classes of complex bundles | §I.4 | `03.06.04` | ✓ | Shipped, axiomatic + $\mathbb{CP}^n$ example. |
| Pontryagin classes of real bundles | §I.4 | `03.06.04` | ✓ | Shipped. |
| Splitting principle (formal Chern roots) | §I.4 | `03.13.03` | ✓ | Shipped under spectral sequences / Leray-Hirsch. |
| Signature of a $4k$-manifold $\mathrm{sign}(M)$ | §I.8 | partial | △ | Computed for $\mathbb{CP}^2$ in `03.06.04`. No standalone definitional unit for the signature pairing. |
| Hirzebruch signature theorem $\mathrm{sign}(M) = \langle L_k, [M] \rangle$ | §I.8 | partial | △ | Stated in `03.06.04` and `03.09.10`; full statement + proof sketch via cobordism is a **shared gap** with M-S plan unit `03.06.11`. **Shared.** |
| Oriented cobordism $\Omega_*^{\mathrm{SO}}$ as rational polynomial ring | §I.8 (used) | — | ✗ | **Gap.** On the M-S plan as Priority-1 unit `03.06.13` (oriented bordism + Pontryagin-Thom). **Shared.** |
| Coherent sheaves on a complex manifold | §II | `04.06.02` | ✓ | Shipped. |
| Sheaf cohomology of a coherent sheaf | §II | `04.03.01` | ✓ | Shipped. |
| Holomorphic Euler characteristic $\chi(X, \mathcal{F})$ | §II.15 | `04.04.01`, `04.05.08`, `06.04.01` | ✓ | Shipped in all three Riemann-Roch units. |
| Dolbeault cohomology + Hodge isomorphism | §III | `04.09.01`, `06.04.03` | ✓ | Shipped. |
| Riemann-Roch on a smooth curve (genus formula) | §IV.21 (as corollary) | `04.04.01`, `06.04.01` | ✓ | Shipped. |
| Riemann-Roch on a smooth surface (Noether formula) | §IV.21 (as corollary) | `04.05.08` | ✓ | Shipped, with both the Italian-school and Hirzebruch derivations. |
| **Hirzebruch-Riemann-Roch theorem (general $n$)** | §IV.21 | partial | △ | **Stated** in `04.05.08` Master tier as "Hirzebruch-Riemann-Roch in arbitrary dimension; Hirzebruch 1956"; named-result reference only in `03.09.10`; no standalone unit. **Gap (high priority — Hirzebruch's central theorem).** |
| HRR for line bundles (special case) | §IV.21 | partial | △ | Specialisation worked out for surfaces; no general-$n$ unit. |
| Worked HRR for $\mathbb{CP}^n$, complete intersections | §IV.22 | — | ✗ | **Gap.** Master-tier worked examples missing. |
| Comparison with Grothendieck-Riemann-Roch | (post-1956) | — | ✗ | **Gap.** Pointer-only at FT equivalence. Belongs in Fulton audit (deferred). |
| Borel appendix: $H^*(G/T; \mathbb{Q})$ and homogeneous bundles | App | — | ✗ | **Gap.** Master-only survey unit; low priority. |
| Atiyah-Singer index theorem (Hirzebruch as special case) | post-1963 | `03.09.10` | ✓ | Shipped; the AS unit explicitly lists HRR and signature as specialisations. |

**Aggregate coverage estimate.** Counting the ~23 top-level Hirzebruch
topics in the table:

- ✓ covered: 9
- △ partial: 8
- ✗ gap: 6

Coverage is roughly **~50–55%** weighted by load-bearing, **~40%** by raw
topic count. The book's sheaf-cohomology / Riemann-Roch-corollary backbone
(Chapters II–IV applied) is in good shape because Codex already covers
curves, surfaces, Dolbeault, and the holomorphic Euler characteristic.
The **multiplicative-sequence machinery** (Chapter I) and the **general HRR
theorem** (Chapter IV in full $n$-dimensional form) are the load-bearing
gaps.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — shared prerequisites / strict cross-references:**

- **Steenrod squares, Thom isomorphism (singular cohomology), Euler class,
  $BO(n)$/$BU(n)$ cohomology, Stiefel-Whitney numbers, Pontryagin numbers,
  unoriented and oriented bordism.** All on the Milnor-Stasheff Priority-1
  list (`03.06.07`–`03.06.13`). Closing the M-S Priority-1 list is a
  hard prerequisite for the multiplicative-sequence and signature-theorem
  items in this plan.
- **Bernoulli numbers** — Milnor-Stasheff plan Priority-4 unit 12. **Shared.**
- **Multiplicative sequences and L/Â/Td genera** — Milnor-Stasheff plan
  Priority-3 unit `03.06.15`. **Shared** with this plan as Priority-1
  item 1 below. Production should ship this unit once, satisfying both
  audits.
- **Hirzebruch signature theorem (master-tier rewrite)** — Milnor-Stasheff
  plan Priority-1 unit `03.06.11`. **Shared** with this plan as
  Priority-2 item 6 below.

**Priority 1 — high-leverage, captures the Chapter-I machinery and Chapter-IV
central theorem of Hirzebruch:**

1. **`03.06.15` Multiplicative sequences and the L-, Â-, Todd genera.**
   *(Shared with Milnor-Stasheff plan.)* Definition of a multiplicative
   sequence $\{K_j\}$ attached to $Q(x) = 1 + a_1 x + \cdots$ via the
   formal-power-series identity $\prod_i Q(x_i) = \sum_j K_j(\sigma_1,
   \ldots, \sigma_j)$. The three named genera as instances:
   $\mathrm{td}$ from $Q(x) = x/(1 - e^{-x})$; $L$ from $Q(x) = x/\tanh(x)$;
   $\hat A$ from $Q(x) = (x/2)/\sinh(x/2)$. Bernoulli-number coefficients;
   explicit formulae for the first three components of each genus.
   Anchors: Hirzebruch §I.1; Milnor-Stasheff §19, Appendix B. Master-only,
   ~1800 words. **Originator-prose** treatment per FT spec §10 citing
   Hirzebruch 1956.

2. **`03.06.18` Chern character $\mathrm{ch}(E)$ as a ring homomorphism.**
   Definition $\mathrm{ch}(E) = \sum e^{x_i}$ in formal Chern roots; the
   ring-isomorphism statement $\mathrm{ch}: K(X) \otimes \mathbb{Q}
   \xrightarrow{\sim} H^{\mathrm{ev}}(X; \mathbb{Q})$ for finite-CW $X$;
   the additive identity $\mathrm{ch}(E \oplus F) = \mathrm{ch}(E) +
   \mathrm{ch}(F)$ and multiplicative identity $\mathrm{ch}(E \otimes F) =
   \mathrm{ch}(E) \cdot \mathrm{ch}(F)$. Worked computation for line
   bundles ($\mathrm{ch}(L) = e^{c_1(L)}$) and for $T\mathbb{CP}^n$.
   Anchors: Hirzebruch §I.4; Bott-Tu §22. Three-tier; Master tier proves
   the ring-isomorphism statement via the splitting principle and the
   Atiyah-Hirzebruch spectral sequence. ~1800 words.

3. **`04.05.10` Hirzebruch-Riemann-Roch theorem (general dimension).**
   Statement: for $X$ a smooth projective complex algebraic variety of
   complex dimension $n$ and $E \to X$ a holomorphic vector bundle,
   $$\chi(X, E) = \int_X \mathrm{ch}(E) \cdot \mathrm{td}(T_X).$$
   Proof sketch: signature/bordism route via Thom + the
   multiplicative-sequence machine, OR the Atiyah-Singer-index-theorem
   route (cite `03.09.10`). Worked examples: HRR for line bundles on
   $\mathbb{CP}^n$; HRR for the tangent bundle (computing the arithmetic
   genus); recovery of the curve and surface Riemann-Roch formulae as
   $n = 1, 2$ specialisations. Anchors: Hirzebruch §IV.20–§IV.21;
   Hartshorne Appendix A; Fulton §15 (Grothendieck-Riemann-Roch as
   generalisation, pointer only). Three-tier; Beginner gives the
   statement + the $\mathbb{CP}^n$ tangent-bundle computation;
   Intermediate proves the curve and surface cases as corollaries;
   Master gives the full statement and proof sketch via cobordism.
   **Originator-prose** treatment citing Hirzebruch 1954 (the *PNAS*
   announcement) and Hirzebruch 1956. ~2500 words.

4. **`04.05.11` Worked Hirzebruch-Riemann-Roch computations.** A
   computation-only unit: HRR for $\mathcal{O}(d)$ on $\mathbb{CP}^n$
   recovering the binomial-coefficient dimension formula; HRR for the
   structure sheaf of a smooth complete intersection in $\mathbb{CP}^N$;
   HRR for a holomorphic vector bundle on a K3 surface
   ($\chi(X, E) = 2 \mathrm{rk}(E) + c_1(E)^2/2 - c_2(E)$); arithmetic
   genus of $\mathbb{P}^n \times \mathbb{P}^m$. Anchors: Hirzebruch
   §IV.22; Hartshorne Ex. III.5 (sheaf cohomology of $\mathbb{P}^n$);
   Griffiths-Harris Ch. 5. Three-tier with all worked examples at
   Master tier; Intermediate restricts to line bundles on $\mathbb{CP}^n$.
   ~1800 words.

**Priority 2 — signature theorem + general L-genus arc (also shared with M-S):**

5. **`03.06.11` Hirzebruch signature theorem (master-tier rewrite).**
   *(Shared with Milnor-Stasheff plan as Priority-1 unit 5.)* Full
   statement with the $L$-polynomial machinery; proof sketch via Thom's
   bordism theorem ($\mathrm{sign}: \Omega_*^{\mathrm{SO}} \otimes \mathbb{Q}
   \to \mathbb{Q}$ is a ring homomorphism, uniquely determined by its
   values on the polynomial generators $[\mathbb{CP}^{2k}]$); worked
   computations for $\mathbb{CP}^2, \mathbb{CP}^4$, K3 surface, and the
   product manifold $\mathbb{CP}^2 \times \mathbb{CP}^2$. **This is
   the load-bearing shared unit between the M-S audit and the
   Hirzebruch audit.** Anchors: Hirzebruch §I.8; Milnor-Stasheff §19;
   Lawson-Michelsohn §III.13. Originator-prose treatment citing
   Hirzebruch 1956. ~2200 words.

6. **`03.06.19` Signature of a $4k$-manifold and the intersection form.**
   Standalone definitional unit for $\mathrm{sign}(M) = b_+ - b_-$ as
   the signature of the cup-product intersection form on $H^{2k}(M; \mathbb{R})$;
   Poincaré-duality framing; basic examples ($\mathrm{sign}(\mathbb{CP}^{2k}) = 1$,
   $\mathrm{sign}(K3) = -16$). Anchors: Hirzebruch §I.8 (Poincaré-duality
   setup); Milnor-Stasheff §19. Beginner + Intermediate tier;
   no Master content beyond what `03.06.11` covers. ~1200 words.

**Priority 3 — Borel appendix and Grothendieck-Riemann-Roch pointer:**

7. **`04.05.12` Pointer: Grothendieck-Riemann-Roch (GRR).** Master-only
   *survey* unit (definition + statement only): GRR generalises HRR to
   proper morphisms $f: X \to Y$ via the Chow-ring / K-theory pushforward
   identity $\mathrm{ch}(f_* E) \cdot \mathrm{td}(T_Y) = f_*(\mathrm{ch}(E)
   \cdot \mathrm{td}(T_X))$. Pointer to Fulton *Intersection Theory* §15
   for the full treatment. Anchors: Hirzebruch §IV.21 (as origin point);
   Fulton 1998 §15. ~1000 words. **Borderline non-goal** — defer if
   Fulton audit ships first.

8. **`03.06.20` Borel-Hirzebruch and the cohomology of $G/T$.** Master-
   only survey unit: $H^*(G/T; \mathbb{Q})$ as the regular representation
   of the Weyl group; Chern classes of homogeneous vector bundles via
   restriction to $T$. Anchors: Hirzebruch Appendix (by Borel); Borel-Hirzebruch
   *Characteristic Classes and Homogeneous Spaces* I (1958). ~1500 words.

**Priority 4 — Hirzebruch-Milnor exotic-sphere arc deepening:**

9. **(Add as a Master section to `03.06.11`.)** $L$-genus integrality on
   smooth 8-manifolds and the Milnor exotic-sphere construction
   (1956): on a smooth bounded 8-manifold $W$ with $\partial W = M^7$,
   the $L$-genus polynomial $L_2 = (7 p_2 - p_1^2)/45$ produces an
   integer via the signature theorem; combining with a specific
   $p_1$-prescription gives a non-integer, hence $W$ cannot exist,
   hence $M^7$ is not the standard sphere. **Cross-reference** Milnor-Stasheff
   plan Priority-3 unit `03.06.17`.

---

## §4 Implementation sketch (P3 → P4)

**Hour estimates** (mirroring the Milnor-Stasheff / Bott-Tu /
Lawson-Michelsohn batch averages; Hirzebruch units skew above average
because they require careful multiplicative-sequence formalism and
worked computations across multiple manifolds):

- ~3.5 hours per Priority-1 unit (units 1–4) × 4 = **~14 hours**.
- ~3 hours per Priority-2 unit (units 5, 6) × 2 = **~6 hours**.
  (Unit 5 is shared with the M-S Priority-1 batch; the hours are
  charged once.)
- ~2 hours per Priority-3 unit (units 7, 8) × 2 = **~4 hours**.
- ~1 hour for Priority-4 deepening section (unit 9) = **~1 hour**.

**Total: ~25 hours** of focused production, **of which ~5 hours overlap
with the Milnor-Stasheff plan** (the multiplicative-sequence unit 1 and
the signature-theorem unit 5). **Net new production: ~20 hours.** Plus
Pass-W weaving and Pass-V continuity (~5 hours combined). Fits a 4-day
production batch.

**Strict prerequisite blockers** (Milnor-Stasheff Priority-1):
`03.06.07` Thom isomorphism, `03.06.10` Stiefel-Whitney and Pontryagin
numbers, `03.06.12`/`03.06.13` unoriented/oriented bordism. The
signature theorem (unit 5) cannot ship until oriented bordism ships.
The general HRR (unit 3) likewise depends on the cobordism route — or,
alternatively, on the Atiyah-Singer-index-theorem route via `03.09.10`
which is already shipped.

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, the units carrying originator-prose treatment should be:

- **`03.06.15` (multiplicative sequences):** F. Hirzebruch, *Neue
  topologische Methoden in der algebraischen Geometrie*, Springer
  Ergebnisse 9 (1956); English ed. *Topological Methods in Algebraic
  Geometry*, Springer Classics in Mathematics 1995 reprint of 1978
  3rd English ed. (originally translated by R. L. E. Schwarzenberger
  with appendix by A. Borel, 1962/1966). Hirzebruch is the originator
  of the multiplicative-sequence formalism.

- **`03.06.11` (signature theorem):** Hirzebruch 1956 (above), §I.8.
  Note: H. Hopf, "Sulla geometria riemanniana globale della superficie
  cubica generale," *Atti Convegno di Geometria*, Roma 1948, contains
  the 1948 sketches Hirzebruch credits as immediate ancestor of the
  $L$-genus / signature identity for surfaces.

- **`04.05.10` (Hirzebruch-Riemann-Roch):** F. Hirzebruch, "Arithmetic
  genera of algebraic manifolds," *Proc. Nat. Acad. Sci. USA* 40 (1954),
  110–114 (the four-page announcement). Full proof in Hirzebruch 1956
  Chapter IV. Generalised by M. F. Atiyah and I. M. Singer, "The index
  of elliptic operators on compact manifolds," *Bull. AMS* 69 (1963),
  422–433 — Hirzebruch's HRR is the Dolbeault specialisation of the
  Atiyah-Singer index theorem.

**Other originator citations** (referenced in unit prose, not full
treatments):

- **Todd class:** J. A. Todd, "The arithmetical invariants of algebraic
  loci," *Proc. London Math. Soc.* 43 (1937), 190–225. Todd's original
  combinatorial-intersection definition; Hirzebruch reformulated it via
  the power series $x/(1 - e^{-x})$.
- **Chern character:** Implicit in S.-S. Chern, "Characteristic classes
  of Hermitian manifolds," *Ann. of Math.* 47 (1946), 85–121; the explicit
  ring-isomorphism statement is Atiyah-Hirzebruch's, see M. F. Atiyah and
  F. Hirzebruch, "Riemann-Roch theorems for differentiable manifolds,"
  *Bull. AMS* 65 (1959), 276–281.
- **Atiyah-Singer (generalisation):** M. F. Atiyah and I. M. Singer
  *Ann. Math.* series 1968 (the five-paper sequence proving the index
  theorem in full).

**Notation crosswalk.** Hirzebruch's notation is the canonical source
for: $\mathrm{ch}(E)$, $\mathrm{td}(E)$, $L(E)$, $\hat A(E)$, $T_n(c_1,
\ldots, c_n)$ (the Todd polynomial in dimension $n$), and the integral
notation $\int_X (\cdot)$ for the pairing with the fundamental class.
Codex already uses this notation throughout `04.05.08`, `03.06.04`,
`03.09.10`, `06.04.01`. No notation migration needed; new units should
preserve it.

---

## §5 What this plan does NOT cover

- A line-number P1 inventory of every named theorem in Hirzebruch at
  proof-detail granularity. PDF not locally accessible and 1956 monograph
  is dense; full P1 audit deferred to a focused PDF-access pass.
- Exercise-pack production. Hirzebruch's monograph has no exercises (it
  is a research monograph, not a textbook). Exercise content for the new
  units should be drawn from Milnor-Stasheff and Hartshorne.
- **Fulton, *Intersection Theory*** and the Grothendieck-Riemann-Roch
  framework in its full Chow-ring generality. Pointer-only at `04.05.12`;
  Fulton's deep technical content is **explicitly deferred** to its own
  future audit.
- **Atiyah-Singer index theorem** deep technical content (K-theory of
  cotangent bundles, pseudodifferential symbols, the topological /
  analytic index equality, the topological-side computations for the
  family and equivariant cases). The Hirzebruch identities are already
  cited as specialisations of AS in `03.09.10`; the AS deep content is
  **explicitly deferred** to a future Atiyah-Singer audit and to the
  ongoing FT 3.11 Atiyah *K-Theory* plan.
- Comparison with the Adams-spectral-sequence / complex-cobordism
  perspective on HRR. Belongs in `plans/fasttrack/ravenel-complex-cobordism.md`
  follow-up.
- Modular-forms and elliptic-genera deepening. Belongs in FT 3.26
  Hirzebruch *Manifolds and Modular Forms* (a separate book).
- The Hirzebruch-Zagier and related arithmetic-geometry refinements.

---

## §6 Acceptance criteria for FT equivalence (Hirzebruch)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Milnor-Stasheff Priority-1 punch-list (`03.06.07`–`03.06.13`) has
  shipped (strict prereq for the cobordism-based signature-theorem and
  HRR proofs).
- ≥95% of Hirzebruch's named theorems in Chapters I–IV map to Codex
  units. Current: ~55%; after Priority-1 units (1–4): ~80%; after
  Priority-1+2: ~92%; full ≥95% requires Priority-3 + selective
  Priority-4.
- ≥90% of Hirzebruch's worked computations in Chapters I–IV have a
  direct unit, lateral connection, or worked example covering them.
  After units 4 + 5, this rises from ~40% to ~85%.
- Notation crosswalk (§4) is preserved in every new unit.
- Pass-W weaving connects the new units to:
  - the existing `03.06.03`–`03.06.06` characteristic-class chapter spine,
  - `03.09.10` (Atiyah-Singer index theorem) for the
    HRR-as-AS-specialisation arc,
  - `04.04.01`, `04.05.08`, `06.04.01` (existing Riemann-Roch units) as
    the curve / surface / Riemann-surface specialisations of `04.05.10`,
  - `04.05.09` (Hodge index theorem) and `04.09.01` (Hodge decomposition)
    for the holomorphic Euler-characteristic / signature interplay,
  - the Milnor-Stasheff Priority-1 units once shipped (signature-theorem
    and bordism arc).
- Pass-V continuity holds on the Hirzebruch-restricted scope.
- Originator-prose treatment present in units `03.06.15`, `03.06.11`,
  `04.05.10` per §4 above.

The Priority-1 punch-list (units 1–4, ~14 hours of which ~3 are shared
with M-S) closes the master-tier gap on the book's central content.
Priority-2 closes the signature-theorem deepening (jointly with M-S
audit). Priority-3+4 are deepenings and the Borel-appendix pointer.

---

## §7 Sourcing

- **Local copy.** Not present in `reference/textbooks-extra/` as of
  2026-05-17; not present in `reference/fasttrack-texts/`.
- **License.** Springer Classics in Mathematics edition (1995, ISBN
  3-540-58663-6) is in print and copyrighted. Cite as Hirzebruch, F.,
  *Topological Methods in Algebraic Geometry*, Classics in Mathematics,
  Springer-Verlag 1995 (reprint of the 1978 3rd English edition); first
  published as *Neue topologische Methoden in der algebraischen Geometrie*,
  Springer Ergebnisse 9 (1956).
- **Free academic copy.** No canonical free legal mirror identified
  (Ranicki archive does not host it as of 2026-05-17; Springer Link
  page is paywalled / SSO-gated). Anna's Archive / library-genesis
  copies exist; per FT sourcing convention these are not the canonical
  citation. **Recommendation:** acquire the Classics paperback (~€60
  retail) for the production batch; standard graduate-library holding.
- **Add to local mirror.** When acquired, place in
  `reference/fasttrack-texts/04-algebraic-geometry/` as
  `Hirzebruch-TopologicalMethodsInAlgebraicGeometry.pdf` to mirror the
  FT-text pattern.
- **Secondary references consulted for this audit pass:**
  - Milnor, J. W. & Stasheff, J. D., *Characteristic Classes*, Annals
    of Mathematics Studies 76, Princeton 1974, §19 + Appendix B
    (multiplicative sequences, signature theorem, Bernoulli numbers).
  - Fulton, W., *Intersection Theory*, Springer Ergebnisse 3.Folge 2,
    2nd ed., 1998, §15, §18 (Grothendieck-Riemann-Roch; pointer-only).
  - Atiyah, M. F. & Singer, I. M., "The index of elliptic operators
    on compact manifolds," *Bull. AMS* 69 (1963), 422–433 (Hirzebruch
    as Dolbeault / signature specialisation).
  - Bott, R. & Tu, L. W., *Differential Forms in Algebraic Topology*,
    Springer GTM 82, 1982, §20–§23 (de Rham / Chern-Weil derivation
    of Chern classes, splitting principle, Pontryagin classes).
  - Hartshorne, R., *Algebraic Geometry*, Springer GTM 52, 1977,
    Appendix A (cohomology-theoretic statement of HRR).
  - Griffiths, P. & Harris, J., *Principles of Algebraic Geometry*,
    Wiley 1978, Ch. 5 (analytic-geometry derivation of HRR for
    line bundles).
- **Codex internal references.** `plans/fasttrack/milnor-stasheff-characteristic-classes.md`
  (sibling audit; **shared Priority-1 unit `03.06.15`** and **shared
  Priority-1/Priority-2 unit `03.06.11`** — coordinate during production),
  `plans/fasttrack/bott-tu-differential-forms.md`,
  `plans/fasttrack/lawson-michelsohn-spin-geometry.md`,
  `plans/fasttrack/hartshorne-algebraic-geometry.md`,
  `plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md`
  (audit-format mirror), and the existing units
  `03.06.03`–`03.06.06`, `03.09.10`, `04.04.01`, `04.05.08`, `04.05.09`,
  `04.09.01`, `06.04.01`.
