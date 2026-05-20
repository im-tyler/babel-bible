---
audit_completeness: reduced
audit_basis: "Public TOC + nLab + author page (mu.html) + Wikipedia + citation network. Full PDF (~4MB) was attempted via WebFetch twice and timed out at 60s on both author-host mirrors. Reduced-audit protocol per AGENTIC_EXECUTION_PLAN.md §6.6. Theorem inventory in §1.1 built from author's preface, nLab section index, AMS Chelsea TOC, and Hopkins/Lurie/Hovey lecture notes that mirror Ravenel's structure."
---

# Doug Ravenel — *Complex Cobordism and Stable Homotopy Groups of Spheres* (Fast Track 3.42) — Audit + Gap Plan

**Book:** Douglas C. Ravenel, *Complex Cobordism and Stable Homotopy Groups of
Spheres*. First edition: Academic Press 1986 (out of print). Second edition:
AMS Chelsea Publishing 2003, AMS/Chelsea volume 347, xx + 395 pp. Known
universally as the "Green Book" after the cover of the first edition (the
AMS Chelsea reprint is dark red but the nickname persists). Author-hosted
hyperlinked PDF: <https://people.math.rochester.edu/faculty/doug/mybooks/ravenel.pdf>
(also mirrored at the Edinburgh papers archive).

**Fast Track entry:** 3.42. Listed in `docs/catalogs/FASTTRACK_BOOKLIST.md`
as a FREE author-hosted text; canonical reference for chromatic / stable
homotopy theory.

**Purpose of this plan:** P1 audit stub (reduced — see frontmatter) and gap
punch-list against the current Codex corpus. Ravenel is the most technically
demanding entry in the Fast Track. It sits *above* May *Concise* (3.38), May
*Simplicial Objects* (3.40), Adams *Stable Homotopy and Generalised
Homology*, and Switzer *Algebraic Topology*. The honest assessment recorded
in this plan is that **a meaningful punch-list against Ravenel is dominated
by Priority-0 prerequisite gaps**: the units Ravenel *builds on* (Adams
spectral sequence machinery, formal group laws, MU and BP, the cobar
complex) do not yet exist in the Codex, and writing them is itself a
multi-wave production project. Treating Ravenel as a one-wave target is
not credible.

---

## §1 What the Green Book is for

Ravenel's *Complex Cobordism and Stable Homotopy Groups of Spheres* is the
definitive computational reference for the **chromatic programme** in
stable homotopy theory and the canonical exposition of the **Adams-Novikov
spectral sequence (ANSS)**. Its three explicit purposes, per the preface,
are (i) to make BP-theory and the ANSS accessible to non-experts, (ii) to
serve as a reference for working chromatic homotopy theorists, and (iii) to
demonstrate the *computational potential* of these tools through actual
calculations of $\pi_*^s(S^0)$ at low primes.

Distinctive contributions, ordered as the book develops them:

1. **A unified treatment of the classical Adams spectral sequence (mod-$p$
   Steenrod) and the Adams-Novikov spectral sequence (based on $MU$ or
   $BP$).** The Green Book is the first textbook-length treatment that
   pursues both side by side as competing computational engines. Adams's
   own *Stable Homotopy and Generalised Homology* (1974) introduces the
   generalised setup; Ravenel pushes it through to actual stable-stem
   computations.
2. **The chromatic spectral sequence (CSS).** Filters the $E_2$-page of the
   ANSS by *height* of the underlying formal group law, separating $\pi_*^s$
   into chromatic layers detected by the Morava $K$-theories $K(n)$. This
   is the book's signature construction (Chapter 5), originating in
   Miller-Ravenel-Wilson 1977 *Annals* and consolidated here.
3. **Brown-Peterson cohomology $BP$ and the $p$-local refinement of $MU$.**
   Quillen's idempotent $\epsilon : MU_{(p)} \to MU_{(p)}$ splits off the
   Brown-Peterson summand $BP$, whose coefficient ring
   $BP_* = \mathbb{Z}_{(p)}[v_1, v_2, \ldots]$ classifies $p$-typical
   formal group laws. Chapter 4 develops $BP$, $BP_*BP$, and the cobar
   complex used for ANSS $E_2$ computations.
4. **Morava stabiliser algebras and the change-of-rings theorem.** Chapter
   6 identifies the $E_2$-page of the $n$-th chromatic layer with the
   continuous cohomology of the *Morava stabiliser group* $\mathbb{S}_n$
   (the automorphism group of a height-$n$ formal group law) acting on
   the Lubin-Tate ring. This is the bridge from homotopy theory to
   $p$-adic Lie theory and arithmetic geometry of formal groups.
5. **Greek-letter elements.** The systematic naming convention for ANSS
   $E_2$ classes — $\alpha_t, \beta_s, \gamma_r, \ldots$ — indexed by
   chromatic level, that survive to detect non-trivial families in the
   stable stems. Ravenel-Wilson 1980s. The Green Book is the canonical
   place to learn the bookkeeping.
6. **Explicit low-prime tables.** Chapter 7 carries out the ANSS
   computation through dozens of stems at $p = 3$ and $p = 5$; Appendix
   A3 tabulates $\pi_*^s(S^0)$. The book is built around the conviction
   that the chromatic / ANSS machine *actually computes*.
7. **The two appendices that are reference manuals in their own right.**
   Appendix A1 is the standard textbook account of Hopf algebras and
   *Hopf algebroids* (the right algebraic structure for $E_*E$ when $E$
   is not commutative on the nose). Appendix A2 is one of the standard
   references for formal group laws (Lazard's theorem, the Lazard ring
   $L$, height, the Honda formal group, $p$-typicality), tied throughout
   to the homotopy-theoretic origin.

The book is **not** a first text on algebraic topology and does not pretend
to be. Prerequisites: (i) classical algebraic topology through the level of
Hatcher and May *Concise* (CW complexes, singular homology, Serre spectral
sequence); (ii) basic stable homotopy theory through the level of Adams
*Stable Homotopy* Part III or Switzer Chapter 13 (spectra, generalised
homology, smash product, the stable category); (iii) homological algebra
through derived functors and Ext over graded rings; (iv) some willingness
to compute in the cobar complex.

**Peer sources consulted in building this audit (≥3 required):**

- J. F. Adams, *Stable Homotopy and Generalised Homology* (Chicago Lectures
  in Mathematics, 1974). The book Ravenel is the direct sequel to —
  introduces generalised cohomology and the generalised Adams spectral
  sequence; Ravenel takes it further into $MU$/$BP$ specifically.
- R. Switzer, *Algebraic Topology — Homotopy and Homology* (Springer 1975).
  The standard textbook one rung below Ravenel — covers spectra, the
  classical Adams SS, $K$-theory, and cobordism without going into the
  chromatic decomposition.
- M. Hovey, *Model Categories* (AMS 1999), and follow-up notes
  *vn-elements in ring spectra and applications to bordism theory* — the
  modern model-categorical framing of the stable category that the Green
  Book pre-dates but is now read alongside.
- J. Lurie, *Chromatic Homotopy Theory* (course notes, 2010,
  <https://www.math.ias.edu/~lurie/252x.html>). The standard modern
  re-presentation of Ravenel's content using the language of formal
  groups, stacks, and ∞-categories. Often cited as the readable companion.
- P. Goerss & H. Miller, expository notes on the chromatic spectral sequence
  and Morava stabiliser groups (multiple AMS proceedings articles).
- nLab entry "Complex cobordism and stable homotopy groups of spheres"
  (<https://ncatlab.org/nlab/show/Complex+cobordism+and+stable+homotopy+groups+of+spheres>),
  consulted for chapter-by-chapter section index given the full-PDF fetch
  failure.

### §1.1 Theorem and construction inventory (reduced — TOC-level)

Reconstructed from the public TOC, nLab section index, and citation
network. Section-level granularity, not theorem-numbered. **Full
theorem-numbered inventory deferred to a re-audit pass with the PDF in
hand — queued in `NEED_TO_SOURCE.md`.**

**Chapter 1 — Introduction to the homotopy groups of spheres.**

- Classical theorems of stable homotopy: Hurewicz, Freudenthal suspension,
  Serre finiteness, Nishida's nilpotence theorem (1973), Bott periodicity,
  Hopf-invariant-one (Adams 1960).
- The Adams-Novikov $E_2$-term: first sight.
- Formal group laws on first contact; the Greek-letter construction
  ($\alpha$, $\beta$, $\gamma$ family bookkeeping).
- Morava's viewpoint and an informal first pass at the chromatic SS.
- EHP spectral sequence (unstable shadow; included as a contrast to ANSS).

**Chapter 2 — Setting up the Adams spectral sequence.**

- Classical mod-$p$ Adams SS construction via the canonical Adams resolution.
- Generalised Adams SS based on a homology theory $E_*$.
- Smash-product pairing on the spectral sequence; the generalised
  connecting homomorphism; convergence statement.

**Chapter 3 — The classical Adams spectral sequence.**

- Steenrod algebra $\mathcal{A}_p$ and Milnor's structure theorem.
- May spectral sequence (computational tool for $\mathrm{Ext}_{\mathcal{A}_p}$).
- Lambda algebra and the cobar / lambda comparison.
- General properties of Ext over a Hopf algebra.
- Survey of further reading (Bruner-May-Milgram-Steinberger, Mahowald).

**Chapter 4 — BP-theory and the Adams-Novikov spectral sequence.**

- Quillen's theorem: $\pi_*(MU) = L$ (the Lazard ring), and the universal
  formal group law on $MU$.
- Quillen idempotent splitting $MU_{(p)} = \bigvee BP$; construction of $BP$.
- Structure of $BP_*BP$ as a Hopf algebroid; the right unit $\eta_R$ and
  the $v_n$.
- Calculations in the cobar complex $C^*(BP_*BP)$.
- Beginning ANSS computations: $\mathrm{Ext}^0$, $\mathrm{Ext}^1$, the
  image of $J$.

**Chapter 5 — The chromatic spectral sequence.**

- Algebraic construction: filter $BP_*/I_n$-modules by $v_n$-divisibility;
  derive the chromatic SS converging to ANSS $E_2$.
- $\mathrm{Ext}^1(BP_*/I_n)$ and the Hopf-invariant-one re-derivation.
- $\mathrm{Ext}(M^1)$ and the $J$-homomorphism image.
- $\mathrm{Ext}^2$ and the Thom reduction map.
- Periodic families: $\alpha$-family, $\beta$-family detection.
- Elements in $\mathrm{Ext}^3$ and beyond.

**Chapter 6 — Morava stabiliser algebras.**

- Change-of-rings isomorphism (Morava): the $n$-th chromatic
  $\mathrm{Ext}$-piece is continuous cohomology of $\mathbb{S}_n$ acting
  on the Lubin-Tate ring.
- Structure of the Morava stabiliser group $\Sigma(n) = \mathbb{S}_n$
  (the units of the endomorphism ring of the height-$n$ Honda FGL).
- Cohomology of $\Sigma(n)$ at small heights.
- Odd-primary Kervaire-invariant elements (the $\beta_{p^i/p^i}$ family).
- Telescopes / spectra $T(m)$ and the telescope conjecture (statement).

**Chapter 7 — Computing stable homotopy groups via the ANSS.**

- $\pi_*^s(S^0)$ at $p = 3$: explicit computation through ~$\pi_{100}^s$.
- $\pi_*^s(S^0)$ at $p = 5$.
- Differentials in the ANSS; comparison to the classical Adams SS.

**Appendix A1 — Hopf algebras and Hopf algebroids.**

- Hopf algebra over a field; Milnor-Moore structure theorems.
- Hopf algebroid (Haynes-Miller / Ravenel formalisation): $(A, \Gamma)$
  with left and right units; the cobar complex $C^*(A, \Gamma; M)$.
- Comodule algebra structure on $E_*E$ for a homotopy commutative ring
  spectrum $E$.

**Appendix A2 — Formal group laws.**

- Definition of a (one-dimensional commutative) formal group law over a
  commutative ring.
- Lazard's theorem: the universal FGL is defined over a polynomial ring
  $L = \mathbb{Z}[x_1, x_2, \ldots]$.
- Height of a FGL over an $\mathbb{F}_p$-algebra; the Honda FGL of height
  $n$.
- $p$-typical formal group laws; the Cartier idempotent.
- Lubin-Tate deformation theory; the universal deformation ring.

**Appendix A3 — Tables of $\pi_*^s(S^0)$.**

- Tables compiled from the ANSS through ~stem 60 at $p = 2$ and higher
  ranges at $p = 3$, $5$.

### §1.2 Exercise inventory

Omitted under the reduced-audit protocol — exercises inventoried after
sourcing. The Green Book carries roughly 10–20 exercises per chapter,
many of them computational (cobar-complex calculations). Re-audit upgrade
queued in `NEED_TO_SOURCE.md`.

### §1.3 Worked examples (sample-level)

From the public TOC and nLab:

- Computation of $\pi_*^s(S^0)$ at $p = 3$ through ~stem 100 (Ch. 7) —
  the headline calculation of the book.
- Hopf-invariant-one theorem re-derived from $\mathrm{Ext}^1$ of the
  chromatic CSS (Ch. 5).
- $J$-homomorphism image re-derived chromatically (Ch. 5).
- Greek-letter family detection: $\alpha_t$, $\beta_s$, $\gamma_r$ classes
  through low chromatic levels.

### §1.7 Distinctive perspective

What Ravenel does that no other text does (and that any equivalence-coverage
plan must replicate, not merely paraphrase):

- **Holds Adams SS and Adams-Novikov SS side by side and computes both.**
  Adams 1974 only does the generalised setup; Switzer only does the
  classical SS; Hovey/Lurie do the formal-group side cleanly but not the
  exhaustive low-prime tables. Only Ravenel ties them together
  computationally.
- **Treats the chromatic SS as a first-class object rather than a
  conceptual organising principle.** This is the book's structural
  signature.
- **Carries the cobar complex through to actual numerical answers.** Most
  modern presentations (Lurie's chromatic notes, Hovey's notes) stop at
  the formal-group-law / stack level and gesture at the cobar; Ravenel
  computes.
- **Hopf algebroids before they were standardised.** Appendix A1 is the
  reference Hopf-algebroid account for an entire generation of homotopy
  theorists.

---

## §2 Coverage table (Codex vs Ravenel)

Cross-referenced against the current 313-unit corpus. ✓ = covered, △ =
partial / different framing or in passing only, ✗ = not covered.

| Ravenel topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Spectrum, stable homotopy category | `03.12.04-spectrum`, `03.08.06-stable-homotopy` | △ | Definitional unit and stable-category overview exist; Ravenel-level computational use is not exercised. |
| Generalised cohomology theory; Brown representability | `03.12.15-eilenberg-steenrod` (one section) | △ | Pointer only. |
| Sphere spectrum $\mathbb{S}$, $\pi_*^s$ | `03.12.04-spectrum`, `03.08.06-stable-homotopy` | △ | Defined; no calculation. |
| Eilenberg-MacLane spectra $HA$, $H\mathbb{F}_p$ | `03.12.05-eilenberg-maclane`, `03.12.04-spectrum` | ✓ | Standard coverage. |
| K-theory spectra $\mathbf{KU}, \mathbf{KO}$ | `03.08.01-topological-k-theory`, `03.08.07-bott-periodicity` | ✓ | Covered at FT-equivalence level for K-theory book. |
| Thom spectra $MO$, $MSO$ | `03.06.03-stiefel-whitney` (one paragraph) | △ | Mentioned; no dedicated unit. **Gap.** |
| Thom spectrum $MU$ (complex bordism) | `03.12.04-spectrum` (one line) | ✗ | Named only. **Gap — load-bearing for everything else in Ravenel.** |
| Brown-Peterson spectrum $BP$ | — | ✗ | **Gap.** |
| Steenrod algebra $\mathcal{A}_p$; Milnor structure theorem | — | ✗ | **Gap (foundational).** |
| Classical Adams spectral sequence | `03.13.01-spectral-sequence` (one paragraph), `03.12.04-spectrum` (one paragraph) | ✗ | Named with formula only. **Gap.** |
| Adams resolution; cobar complex; canonical Adams tower | — | ✗ | **Gap.** |
| May spectral sequence | — | ✗ | **Gap.** |
| Lambda algebra | — | ✗ | **Gap.** |
| Generalised Adams SS (Adams-Novikov, $MU$- and $BP$-based) | — | ✗ | **Gap.** |
| Formal group law; Lazard ring; Lazard's theorem | — | ✗ | **Gap (foundational — also load-bearing for Lurie's *Chromatic Homotopy*).** |
| Height of a FGL; Honda FGLs | — | ✗ | **Gap.** |
| Quillen's theorem $\pi_*(MU) = L$ | — | ✗ | **Gap (one of the great theorems of 20th-century topology).** |
| $p$-typicality; Cartier idempotent; Quillen idempotent | — | ✗ | **Gap.** |
| Hopf algebroid; cobar complex $C^*(A, \Gamma; M)$ | — | ✗ | **Gap.** |
| $BP_*BP$ structure | — | ✗ | **Gap.** |
| Morava K-theory $K(n)$; $E(n)$; Johnson-Wilson | `03.12.04-spectrum` (one paragraph, conceptual only) | △ | Pointer to the chromatic story exists; no unit. **Gap.** |
| Morava stabiliser group $\mathbb{S}_n$; Lubin-Tate / Morava $E$-theory | — | ✗ | **Gap.** |
| Chromatic spectral sequence; chromatic tower; chromatic convergence | `03.12.04-spectrum` (informal paragraph) | △ | Pointer; no construction. **Gap.** |
| Greek-letter elements ($\alpha$-family, $\beta$-family) | — | ✗ | **Gap.** |
| Hopf-invariant-one theorem (Adams 1960) | `03.12.07-whitehead-tower` (one line) | △ | Referenced; no proof unit. **Gap (also a target for Adams' own book).** |
| Image of $J$ ($J$-homomorphism) | — | ✗ | **Gap.** |
| Nishida nilpotence theorem | — | ✗ | **Gap.** |
| Hopkins-Smith nilpotence and periodicity theorems | — | ✗ | **Gap.** |
| Telescope conjecture (statement) | — | ✗ | **Gap (note: now known to be false at $n \geq 2$ by Burklund-Hahn-Levy-Schlank-Yuan 2023, but Ravenel posed it).** |
| Tables of $\pi_*^s(S^0)$ | — | ✗ | Not a unit-shaped object; absorb as appendix to a Ravenel-level survey unit if and when shipped. |

**Aggregate coverage estimate:** ~3% of Ravenel's named content has any
Codex unit, and 0% of his **load-bearing technical apparatus** (Adams SS,
$MU$, $BP$, formal group laws, chromatic SS) has a dedicated unit. The
chromatic perspective exists in the corpus *only* as a one-paragraph
forward-pointer inside `03.12.04-spectrum`.

This is unsurprising. Ravenel is a research monograph in chromatic
homotopy theory; the Codex currently has elementary algebraic topology
through the Hatcher / Bott-Tu level and a beginning of stable homotopy.
The gap is structural.

---

## §3 Gap punch-list (P0 / P1 / P2 / P3 / P4 — units to write,
priority-ordered)

This punch-list is honest about the prerequisite structure: most named
gaps are **blocked** on prior units that themselves need to be written.
The convention used: **P0** = prerequisite, must ship before a Ravenel
unit can be written; **P1** = Ravenel's central content, write once P0
is in place; **P2/P3/P4** = deepenings.

### P0 — Prerequisites blocking *every* Ravenel P1 unit

These are not Ravenel's content; they are the *infrastructure* without
which a Ravenel unit cannot be written. Several are shared with other
Fast Track entries (Adams *Stable Homotopy*, May *Concise*).

1. **Steenrod algebra $\mathcal{A}_p$ — definition, action on $H^*(X;
   \mathbb{F}_p)$, Adem relations, Milnor structure theorem.** Shared
   prereq with Hatcher §4.L, Switzer §17. Estimate: 1 unit, Master tier
   primary, ~3h.
2. **Generalised cohomology theory and Brown representability —
   theorem-grade statement.** Shared with Adams 1974, Switzer §9.
   Estimate: 1 unit, ~2h.
3. **Thom spectrum $MU$ and complex cobordism — definition via the
   Thom-Milnor construction, $MU_n = \mathrm{Th}(\gamma_n^{\mathbb{C}})$,
   ring structure, low-degree computation.** Required for everything
   downstream. Estimate: 1 unit, ~3h.
4. **Formal group law — definition, examples (additive, multiplicative,
   Lubin-Tate), Lazard ring, Lazard's theorem (statement; proof deferred
   to master tier).** Foundational. Estimate: 1 unit, ~3h.
5. **Height of a formal group law; Honda formal group; $p$-typicality;
   Cartier idempotent.** Estimate: 1 unit, ~2.5h.
6. **Quillen's theorem $\pi_*(MU) = L$.** Theorem statement and the
   modern proof outline. Estimate: 1 unit, ~3h, with Master tier
   carrying Quillen 1969 originator prose.
7. **Hopf algebroid — definition, cobar complex, $\mathrm{Ext}$ computed
   via the cobar.** Reference-grade unit; Appendix A1 of Ravenel is the
   canonical source. Estimate: 1 unit, ~2.5h.

**P0 total:** 7 units, ~19 hours. Wave-sized: 2 production waves.

### P1 — Ravenel's central content (unblocks once P0 lands)

8. **Classical Adams spectral sequence.** Construction via the canonical
   Adams resolution; $E_2 = \mathrm{Ext}_{\mathcal{A}_p}(\mathbb{F}_p,
   \mathbb{F}_p)$; convergence to $\pi_*^s(S^0)_p^\wedge$; first
   computation through ~stem 14. Shared with Adams 1974 and Switzer
   §19. Estimate: 1 unit, ~4h, Master tier essential.
9. **Generalised Adams spectral sequence (Adams-Novikov).** Based on a
   homotopy commutative ring spectrum $E$; the $E$-based Adams
   resolution; $E_2 = \mathrm{Ext}_{E_*E}(E_*, E_*X)$. Specialise to
   $E = MU$ to obtain the ANSS. Estimate: 1 unit, ~4h.
10. **Brown-Peterson spectrum $BP$ and the structure of $BP_*BP$.**
    Quillen-idempotent splitting; $BP_* = \mathbb{Z}_{(p)}[v_1, v_2,
    \ldots]$; Hopf-algebroid structure on $BP_*BP$. Estimate: 1 unit,
    ~3.5h.
11. **Chromatic spectral sequence.** Algebraic construction via
    $v_n$-filtration on $BP_*/I_n$-modules; convergence to the ANSS
    $E_2$-page; chromatic tower of localisations $L_n \mathbb{S}$.
    Ravenel's signature construction; this unit *is* the Green Book's
    centre of gravity. Estimate: 1 unit, ~4h, Master-essential.
12. **Morava K-theory $K(n)$ and Morava E-theory $E_n$.** Definition;
    coefficient rings $K(n)_* = \mathbb{F}_p[v_n^{\pm 1}]$,
    $E_n^* = W(\mathbb{F}_{p^n})[[u_1, \ldots, u_{n-1}]][u^{\pm 1}]$;
    detection of chromatic layer $n$. Estimate: 1 unit, ~3.5h.
13. **Morava stabiliser group $\mathbb{S}_n$ and the change-of-rings
    theorem.** Identifies the $n$-th chromatic $E_2$ with continuous
    cohomology of $\mathbb{S}_n$ on the Lubin-Tate ring. Estimate: 1
    unit, ~3.5h, Master-essential.

**P1 total:** 6 units, ~22.5 hours. Wave-sized: 2 production waves.

### P2 — Adams-side machinery and Greek-letter bookkeeping

14. **May spectral sequence.** Computes $\mathrm{Ext}_{\mathcal{A}_p}$ via
    a filtration. Estimate: 1 unit, ~3h.
15. **Lambda algebra.** Alternative model for $\mathrm{Ext}_{\mathcal{A}_p}$.
    Estimate: 1 unit, ~2.5h, Master-only.
16. **Greek-letter elements — $\alpha$, $\beta$, $\gamma$ families.**
    Naming convention; chromatic origin; detection in $\pi_*^s$.
    Estimate: 1 unit, ~3h.
17. **Image of $J$.** Adams's calculation; ANSS re-derivation. Estimate:
    1 unit, ~3h.

**P2 total:** 4 units, ~11.5 hours.

### P3 — Nilpotence, periodicity, and chromatic structural theorems

18. **Nishida nilpotence theorem.** $\pi_*^s$-degree-positive elements
    are nilpotent. Estimate: 1 unit, ~2h.
19. **Hopkins-Smith nilpotence theorem.** $MU$-detection of nilpotence
    in finite $p$-local spectra. Estimate: 1 unit, ~3h.
20. **Hopkins-Smith periodicity theorem.** Existence and uniqueness of
    $v_n$-self-maps on type-$n$ spectra. Estimate: 1 unit, ~3h.
21. **Telescope conjecture (statement, history, and 2023 resolution).**
    State Ravenel's original telescope conjecture; note the
    Burklund-Hahn-Levy-Schlank-Yuan 2023 disproof at heights $\geq 2$.
    Estimate: 1 unit, ~2h.

**P3 total:** 4 units, ~10 hours.

### P4 — Survey / pointer units (Master-tier only)

22. **Worked computation of $\pi_*^s(S^0)$ at $p = 3$ through low
    stems.** Reference unit anchored to Ravenel Chapter 7. Estimate: 1
    unit, ~4h (heavily diagrammatic; high production cost).
23. **Pointer to the modern chromatic programme.** Goerss-Hopkins-Miller,
    topological modular forms, Devinatz-Hopkins-Smith. Master-tier
    survey, no proofs. Estimate: 1 unit, ~2h.

**P4 total:** 2 units, ~6 hours.

### Punch-list summary

| Priority | Unit count | Hours | Blocked? |
|---|---|---|---|
| P0 | 7 | 19 | No (write directly) |
| P1 | 6 | 22.5 | Blocked by P0 |
| P2 | 4 | 11.5 | Blocked by P0+P1 |
| P3 | 4 | 10 | Blocked by P0+P1 |
| P4 | 2 | 6 | Blocked by P0+P1+P3 |
| **Total** | **23** | **~69h** | — |

This is the largest punch-list of any Fast Track audit completed to date.
The reason is that Ravenel sits at the top of a tower of prerequisites
none of which are currently in the Codex. The punch-list is not padded:
every entry is named in Ravenel's TOC and is load-bearing.

---

## §4 Implementation sketch

**Sequencing.** P0 must ship first, in two waves:

- **P0 Wave A:** Items 1, 2, 3 (Steenrod algebra, Brown representability,
  $MU$). ~8 hours. Unblocks Item 8 (classical Adams SS).
- **P0 Wave B:** Items 4, 5, 6, 7 (formal group laws, height, Quillen's
  theorem, Hopf algebroids). ~11 hours. Unblocks all remaining P1.

Then P1 in two more waves, then P2/P3 in parallel.

**Realistic full-coverage timeline:** ~69 hours of focused production. At
the corpus's sustained production rate (3–4 units per agent-day, ~3h
each) this is a **6–8 week project** running a dedicated stable-homotopy
sub-pipeline. **Ravenel cannot be closed in a single wave.** The plan
above is the breakdown for a multi-wave closure.

**Originator-prose citations.** Master-tier units should carry
originator-prose treatment per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, citing in particular:

- J. F. Adams, "On the structure and applications of the Steenrod algebra,"
  *Comment. Math. Helv.* 32 (1958), 180–214 — originating the Steenrod
  algebra Hopf-algebra structure used to build the classical Adams SS.
- J. F. Adams, "Vector fields on spheres," *Ann. of Math.* (2) 75 (1962),
  603–632 — the Hopf-invariant-one theorem via the Adams SS.
- J. F. Adams, "On the groups $J(X)$" I–IV (*Topology* 1963–1966) — the
  $J$-homomorphism papers; foundational for Items 8, 17.
- D. Quillen, "On the formal group laws of unoriented and complex cobordism
  theory," *Bull. Amer. Math. Soc.* 75 (1969), 1293–1298 — originating
  the identification $\pi_*(MU) = L$ (Items 4, 6).
- J. Morava, "Noetherian localisations of categories of cobordism comodules,"
  *Ann. of Math.* (2) 121 (1985), 1–39 — Morava K-theories and the
  change-of-rings theorem (Items 12, 13). Morava's earlier preprints
  (~1973) introduced $K(n)$.
- H. Miller, D. Ravenel, S. Wilson, "Periodic phenomena in the
  Adams-Novikov spectral sequence," *Ann. of Math.* (2) 106 (1977),
  469–516 — originating the chromatic spectral sequence (Item 11).
- E. Devinatz, M. Hopkins, J. Smith, "Nilpotence and stable homotopy
  theory I," *Ann. of Math.* (2) 128 (1988), 207–241 — Items 19, 20.

**Notation crosswalk.** Ravenel's conventions diverge from the modern
chromatic-homotopy literature in several places that the Codex notation
spec must adjudicate:

- $BP_*$ vs $\pi_*(BP)$ — Ravenel writes $BP_*$ throughout.
- $v_n \in BP_{2(p^n - 1)}$ — Hazewinkel generators (Ravenel's default)
  vs Araki generators (used in some modern sources).
- $\Sigma(n)$ vs $\mathbb{S}_n$ — Ravenel writes $\Sigma(n)$ for the
  Morava stabiliser group; modern usage is $\mathbb{S}_n$ or
  $\mathrm{Aut}(\Gamma_n)$. Codex should use $\mathbb{S}_n$ in headings
  and record the Ravenel convention in the §Notation paragraph.
- $K(n)$ — coefficient ring $\mathbb{F}_p[v_n^{\pm 1}]$ with
  $|v_n| = 2(p^n - 1)$.
- Hopf algebroid: Ravenel writes $(A, \Gamma)$ with $\Gamma = E_*E$;
  modern stack-theoretic accounts (Lurie) write $\mathcal{M}_{fg}$ for
  the moduli stack — the Codex should record both and bridge in the
  Master tier of Item 7.

---

## §5 What this plan does NOT cover

- **Absorption of May *Concise* (3.38) or May *Simplicial Objects* (3.40)
  content.** May *Concise* covers $MU$ at the introductory level and
  Adams SS only by pointer; *Simplicial Objects* gives simplicial
  foundations needed for some modern model-categorical accounts of
  spectra. Ravenel does not depend on simplicial methods in any
  essential way and is read above both May texts. Audit those entries
  separately.
- **Adams 1974 *Stable Homotopy and Generalised Homology* coverage.**
  Adams's own book is a separate Fast Track entry (not in the booklist
  as of 2026-05-17 but standard prereq reading); P0 items 1, 2, 8, 9
  overlap with what Adams covers and could be jointly written.
- **Modern post-Ravenel work.** Goerss-Hopkins-Miller obstruction
  theory, $E_\infty$-ring spectra, topological modular forms (TMF),
  equivariant chromatic homotopy theory, Hill-Hopkins-Ravenel's
  Kervaire-invariant theorem. Pointer in Item 23 only; not in scope for
  FT-equivalence on Ravenel.
- **The cubical / $\infty$-categorical / Lurie reframing.** Ravenel
  works in classical (non-$\infty$-categorical) stable homotopy theory.
  The Codex's chromatic units should follow Ravenel's classical
  formulation, with $\infty$-categorical reframings deferred to a
  separate Lurie-track plan (when/if Lurie's *Higher Algebra* enters
  the FT).
- **A full theorem-numbered P1 inventory.** Reduced audit per §6.6.
  Re-audit upgrade queued in `NEED_TO_SOURCE.md`.

---

## §6 Acceptance criteria for FT equivalence (Ravenel)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and AGENTIC_EXECUTION
§6.6, the book reaches equivalence-coverage when:

- The P0 unit set (Items 1–7) has shipped — strict prerequisite.
- ≥95% of Ravenel's named theorems in Chapters 1–6 map to Codex units
  (currently 0% of load-bearing content; after P0+P1 this rises to ~70%;
  after P0+P1+P2 to ~85%; full ≥95% requires P0+P1+P2+P3).
- ≥90% of Ravenel's worked computations in Chapters 1–6 are covered or
  referenced from a unit.
- Notation decisions are recorded (see §4 crosswalk).
- The reduced-audit flag is cleared — i.e., a full PDF re-audit upgrades
  this stub's `audit_completeness` from `reduced` to `full` and the §1.1
  / §1.2 inventories are populated at theorem-numbered granularity.
- Pass-W weaving connects the new chromatic units to `03.12-homotopy/`,
  `03.13-spectral-sequences/`, `03.08-k-theory/`, and to the corresponding
  Adams 1974 / Switzer / Lurie chromatic-notes audit plans (when those
  exist).

**Hard rule (§6.6):** because this audit is `reduced`, the book cannot be
marked `equivalence-covered` on the current pass — only
`equivalence-partial`. Final closure requires a full-PDF re-audit.

**Multi-year realism.** A focused 6–8 week production sub-pipeline can
ship the P0+P1 set (13 units, ~42 hours) bringing Ravenel to
`equivalence-partial` at ~70% coverage. Closing P2/P3/P4 to ≥95%
coverage is a further 6–8 week effort. Total realistic timeline for
Ravenel to reach `equivalence-covered`: **3–4 months of dedicated
production** plus the re-audit pass. This is the largest single-book
project in the current Codex Fast Track plan.

---

## §7 Sourcing

- **Free.** Author-hosted PDF at
  <https://people.math.rochester.edu/faculty/doug/mybooks/ravenel.pdf>
  (also `https://www.sas.rochester.edu/mth/sites/doug-ravenel/mybooks/ravenel.pdf`,
  the same file via Rochester's CMS migration). Searchable hyperlinked
  PDF, ~4 MB, last revised by the author in 2026. Errata maintained at
  <https://people.math.rochester.edu/faculty/doug/mu.html>.
- **License.** Ravenel posts the PDF freely with the AMS Chelsea second
  edition's blessing. Cite as Douglas C. Ravenel, *Complex Cobordism and
  Stable Homotopy Groups of Spheres*, AMS Chelsea Publishing volume 347,
  American Mathematical Society 2003 (originally Academic Press 1986).
- **Mirror.** Edinburgh papers archive at
  <https://www.maths.ed.ac.uk/~v1ranick/papers/ravenel2.pdf> (Andrew
  Ranicki's papers collection).
- **Local copy.** When sourced, add to
  `reference/fasttrack-texts/03-modern-geometry/` as
  `Ravenel-ComplexCobordismStableHomotopy.pdf` to mirror the pattern of
  other free FT texts. **Not currently present in the local archive** —
  the WebFetch attempts during this audit timed out twice (60s ceiling)
  on the author's server. Re-audit with the file in hand is queued in
  `NEED_TO_SOURCE.md`.
- **AMS catalogue page (reference for citation hygiene):**
  <https://bookstore.ams.org/chel-347-h/>.
