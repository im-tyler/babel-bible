# Serre — *Lie Algebras and Lie Groups* (Fast Track 3.13) — Audit + Gap Plan

**Book:** Jean-Pierre Serre, *Lie Algebras and Lie Groups: 1964 Lectures Given
at Harvard University* (W. A. Benjamin 1965; reprinted as Springer Lecture
Notes in Mathematics 1500, 1992; xvi + 168 pp.). Distillation of Serre's 1964
Harvard course. Two parts: **Part I — Lie Algebras** (Cartan-Killing-style
finite-dim semisimple theory, but presented as a *companion* to the standard
machinery and with the Campbell-Hausdorff formula at center) and **Part II —
Lie Groups** (formal groups, $p$-adic analytic groups via the exponential,
the cohomology of Lie algebras / Hochschild-Serre spectral sequence).

**Fast Track entry:** 3.13. Booklist row tag: *"p-adic, homological."* This
is **NOT** the same book as Serre's *Complex Semisimple Lie Algebras* (FT
3.12, booklist tag *"Semisimple classification"*) — that volume is the
classification primer (Cartan subalgebras, root systems, Cartan matrix, Serre
relations, classification of simple complex Lie algebras). FT 3.13 instead
covers the **formal-group / $p$-adic-analytic / Lie-algebra-cohomology** arc
that Serre developed in parallel and which is conspicuously absent from every
other Fast Track Lie slot (Fulton-Harris 3.11 is complex-only and
example-driven; Hall is matrix-only; Helgason 3.17 is real symmetric spaces;
Knapp is real semisimple structure). FT 3.13 is the **only** Fast Track entry
covering formal groups, the $p$-adic exponential, and the
Chevalley-Eilenberg / Hochschild-Serre cohomology programme.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol, per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`). Output is a concrete punch-list
of new units to write so that Serre's *Lie Algebras and Lie Groups* (henceforth
**SLALG** to avoid collision with Serre 3.12 "SCSLA") is covered to the
equivalence threshold (≥95% effective coverage of theorems, key examples,
exercise pack, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit.** No local PDF in `reference/textbooks-extra/` (verified —
only the cover image
`reference/fast-track/images/Serre-Lie-Algebras-Lie-Groups-712x1024__dd9fad6ce3.jpg`
is local). Springer LNM 1500 is gated; Anna's Archive / institutional mirrors
were not fetched in this audit window. This audit works from (a) the
**public TOC structure** of LNM 1500 (well-documented: Part I §§I–VI on Lie
algebras with Campbell-Hausdorff in §IV; Part II Lie groups split into LG
§§1–5 on general / formal groups and LG §§6–8 on analytic / $p$-adic groups +
cohomology), (b) the **Bourbaki *Groupes et algèbres de Lie* Chs. II–III**
crossreference (which Serre's lectures both predate and helped seed), (c) the
Codex's existing shipped units in `content/07-representation-theory/06-lie-
algebraic/`, `03-modern-geometry/03-lie/`, `03-modern-geometry/04-differential-
forms/03.04.01-lie-algebra.md`, and `03-modern-geometry/13-spectral-sequences/`,
and (d) the originator literature (Campbell 1898, Baker 1905, Hausdorff 1906,
Chevalley-Eilenberg 1948, Hochschild-Serre 1953, Lazard 1955/1965). A full
line-number audit is deferred until a PDF is acquired. This is consistent
with the audit-stub convention used for Brown-Higgins-Sivera (1.05a) and
Fulton-Harris (3.11).

---

## §1 What SLALG is for

SLALG is the **slim graduate companion** that takes the reader from the
abstract Lie-algebra definition through the Campbell-Hausdorff formula and
out the far side into two specifically Serre-flavoured extensions of the
standard theory: **formal groups** (a category in which one can do Lie theory
over *any* commutative ring, not just fields of characteristic zero) and the
**$p$-adic analytic groups** that arise when one runs the exponential
backwards in a $p$-adic setting. The third specifically-Serre element is the
**Chevalley-Eilenberg / Hochschild-Serre** development of the cohomology
$H^*(\mathfrak{g}, M)$ of a Lie algebra with coefficients in a module $M$,
and the associated spectral sequence for an ideal $\mathfrak{h} \triangleleft
\mathfrak{g}$.

Distinctive contributions, in roughly the order SLALG develops them:

1. **Lie-algebra basics done crisply but in Serre's idiosyncratic order.**
   Definitions of Lie algebra, ideal, semidirect product, derivations, the
   universal enveloping algebra $U(\mathfrak{g})$ with the
   Poincaré-Birkhoff-Witt theorem proved cleanly via filtrations. SLALG
   Part I §I–§II. Standard content but the PBW proof is the model treatment
   subsequent texts (e.g. Humphreys, Bourbaki) adopt.

2. **Free Lie algebras and the Magnus expansion.** SLALG §III. Constructs
   the free Lie algebra $L(X)$ on a set $X$ as the subspace of primitive
   elements in the free associative algebra under the comultiplication
   $\Delta(x) = x \otimes 1 + 1 \otimes x$. This Hopf-algebraic /
   primitive-element approach is **the** clean way to prove Campbell-Hausdorff
   and is what differentiates SLALG's treatment from textbook expositions
   that simply state the formula.

3. **The Campbell-Hausdorff formula.** SLALG §IV — the centrepiece of Part
   I. Statement: for $X, Y$ in a topologically complete Lie algebra (or
   formal Lie algebra), $\log(\exp X \cdot \exp Y) = X + Y +
   \tfrac{1}{2}[X, Y] + \tfrac{1}{12}([X, [X, Y]] + [Y, [Y, X]]) + \cdots$
   is a *universal* Lie series in $X, Y$ with rational coefficients.
   Originator citations: **J. E. Campbell** ("On a law of combination of
   operators bearing on the theory of continuous transformation groups,"
   *Proc. London Math. Soc.* 28 (1897), 381–390; ibid. 29 (1898), 14–32);
   **H. F. Baker** ("Alternants and continuous groups," *Proc. London
   Math. Soc.* (2) 3 (1905), 24–47); **F. Hausdorff** ("Die symbolische
   Exponentialformel in der Gruppentheorie," *Berichte Sächs. Akad. Wiss.*
   58 (1906), 19–48). Serre's exposition is the model: prove via the
   Friedrichs criterion that the BCH series lies in the free Lie algebra,
   then convergence over $\mathbb{Q}$ is automatic; convergence in real /
   $p$-adic settings reduces to a single estimate.

4. **Cohomology of Lie algebras $H^*(\mathfrak{g}, M)$.** SLALG Part I
   §§V–VI (after Campbell-Hausdorff). Chevalley-Eilenberg complex
   $C^n(\mathfrak{g}, M) = \mathrm{Hom}(\Lambda^n \mathfrak{g}, M)$ with
   differential $d$ given by the standard formula. Whitehead's lemmas:
   $H^1(\mathfrak{g}, M) = H^2(\mathfrak{g}, M) = 0$ for $\mathfrak{g}$
   finite-dimensional semisimple and $M$ finite-dimensional —
   semisimplicity / Weyl's theorem via cohomological vanishing.
   Originator citation: **C. Chevalley, S. Eilenberg**, "Cohomology theory
   of Lie groups and Lie algebras," *Trans. Amer. Math. Soc.* 63 (1948),
   85–124.

5. **Hochschild-Serre spectral sequence for an ideal.** SLALG Part I §VI
   (or sometimes given as an Appendix depending on edition). For
   $\mathfrak{h} \triangleleft \mathfrak{g}$, the filtration on the
   Chevalley-Eilenberg complex by $\mathfrak{h}$-degree yields a spectral
   sequence $E_2^{p, q} = H^p(\mathfrak{g}/\mathfrak{h}, H^q(\mathfrak{h},
   M)) \Rightarrow H^{p+q}(\mathfrak{g}, M)$. Originator citation: **G.
   Hochschild, J.-P. Serre**, "Cohomology of Lie algebras," *Ann. of Math.*
   (2) 57 (1953), 591–603. The Lie-algebra analogue of the Lyndon-
   Hochschild-Serre spectral sequence for group cohomology and the Serre
   spectral sequence for a fibration.

6. **Formal groups.** SLALG Part II LG §§1–5. A formal group law over a
   commutative ring $R$ is a power series $F(X, Y) \in R[\![X, Y]\!]$
   (or vector-valued $F \in R[\![X_1, \ldots, X_n, Y_1, \ldots, Y_n]\!]^n$
   in the higher-dimensional case) satisfying $F(X, 0) = X$, $F(0, Y) = Y$,
   $F(F(X, Y), Z) = F(X, F(Y, Z))$. Bridges the Lie-group / Lie-algebra
   correspondence: in characteristic 0, every formal group has an associated
   Lie algebra, and the Lie functor is an equivalence. In characteristic
   $p > 0$ the picture breaks (formal groups have more structure than their
   Lie algebras — height, $p$-typical type, etc.). Originator citation:
   **S. Bochner**, "Formal Lie groups," *Ann. of Math.* (2) 47 (1946),
   192–201; **M. Lazard**, "Sur les groupes de Lie formels à un paramètre,"
   *Bull. Soc. Math. France* 83 (1955), 251–274; *Lois de groupes et
   analyseurs*, Ann. Sci. ENS 72 (1955), 299–400. Comprehensive
   reformulation in **M. Hazewinkel**, *Formal Groups and Applications*
   (Academic Press 1978, reprinted AMS Chelsea 2012).

7. **$p$-adic analytic Lie groups.** SLALG Part II LG §§6–8. A
   $p$-adic Lie group is a group object in the category of $p$-adic
   analytic manifolds. Serre constructs the **exponential map**
   $\exp: \mathfrak{g} \to G$ as a power-series map convergent on a small
   neighbourhood of 0 in $\mathfrak{g}$ (the radius of convergence depends
   on $p$ via the standard estimate $|n!|_p \to 0$ slowly), and uses the
   Campbell-Hausdorff formula to define a *local* group structure on the
   image. The result: a $p$-adic Lie group of dimension $n$ is locally
   isomorphic (as a $p$-adic analytic manifold-with-group-law) to a
   neighbourhood of 0 in $\mathbb{Q}_p^n$ with multiplication given by
   the BCH series — provided one stays inside the radius of convergence.
   This is the **canonical bridge** between the algebraic (formal-group)
   and the analytic ($p$-adic-manifold) sides. Originator citation:
   **M. Lazard**, "Groupes analytiques $p$-adiques," *Publ. Math. IHES*
   26 (1965), 5–219 — the definitive treatment, which appeared the same
   year as Serre's Harvard lectures and which Serre cites repeatedly.

8. **The "Lie-algebra of a $p$-adic Lie group" functor and its analytic
   properties.** SLALG Part II LG §§7–8. The functor $G \mapsto
   \mathrm{Lie}(G)$ is fully faithful on the category of $p$-adic Lie
   groups, and (in the simply connected case) essentially surjective
   onto the category of finite-dim $\mathbb{Q}_p$-Lie algebras. This is
   the analogue of Lie's three theorems in the $p$-adic setting.

SLALG is **not** a first introduction to Lie theory — it assumes the standard
Cartan-Killing theory at the level of SCSLA (Serre 3.12) or
Bourbaki *GAL* Ch. I, and assumes basic homological algebra (derived
functors, double complexes) at the level of Cartan-Eilenberg or Weibel. It
is **not** an introduction to algebraic groups (use Borel or Springer);
**not** a treatment of root systems and classification (use SCSLA = Serre
3.12 or Humphreys); and **not** a treatment of compact / real Lie groups
(use Hall, Bump, or Helgason 3.17). It is **the** entry point if one needs:
(a) a textbook derivation of Campbell-Hausdorff in the Hopf-algebraic style,
(b) the foundational Chevalley-Eilenberg + Hochschild-Serre cohomology
package, (c) an honest introduction to formal groups, or (d) the bridge from
Lie algebras to $p$-adic analytic groups.

**Cited peer sources (≥3, per stub spec):**

- **N. Bourbaki, *Groupes et algèbres de Lie*, Chapitres II–III** (Hermann
  1972; English translation Springer 1989). Chapter II "Algèbres de Lie
  libres" is the canonical extended reference for Serre §III (free Lie
  algebras, Hall bases, Magnus expansion) and the Campbell-Hausdorff formula
  in §IV. Chapter III "Groupes de Lie" covers the formal-group / $p$-adic
  bridge at greater length than Serre. Cross-references SLALG on essentially
  every page of Chs. II–III.

- **G. Hochschild, *The Structure of Lie Groups*** (Holden-Day 1965;
  reprinted Dover 2015). Hochschild's own book, published the same year as
  SLALG. Covers the Hochschild-Serre cohomology package from Hochschild's
  perspective; complementary to SLALG's Serre-perspective treatment. Useful
  for a second pass on §V–§VI.

- **M. Hazewinkel, *Formal Groups and Applications*** (Academic Press 1978;
  reprinted AMS Chelsea 2012). The canonical comprehensive reference for the
  formal-group programme SLALG opens. SLALG Part II §§1–5 is roughly
  Hazewinkel Chs. 1–3 condensed to lecture form. Hazewinkel goes
  substantially further: Honda formal groups, the Cartier-Dieudonné
  classification, applications to algebraic topology (complex cobordism,
  Lubin-Tate).

- **S. Helgason, *Differential Geometry, Lie Groups, and Symmetric Spaces***
  (Academic Press 1978; reprinted AMS GSM 34, 2001). FT 3.17 sibling. Covers
  the real / complex Lie group + symmetric space side that SLALG explicitly
  pushes out of scope. Together SLALG + Helgason = the full Lie-theoretic
  picture short of structure theory of real semisimple groups (Knapp).

- **M. Lazard, "Groupes analytiques $p$-adiques," *Publ. Math. IHES* 26
  (1965)**. The same-year companion paper Serre cites repeatedly. Definitive
  for the $p$-adic analytic side. Goes beyond SLALG by introducing the
  **$p$-saturation** / *uniform pro-$p$ group* machinery that became the
  basis for Dixon-du Sautoy-Mann-Segal's modern treatment (*Analytic Pro-$p$
  Groups*, 2nd ed. CUP 1999).

---

## §2 Coverage table (Codex vs SLALG)

Cross-referenced against the current shipped units in:
- `content/07-representation-theory/06-lie-algebraic/` (9 units: Lie algebra
  rep, universal enveloping algebra, root system, Weyl group, Dynkin diagram,
  Verma module, Weyl character formula, Weyl dimension formula, Borel-Weil),
- `content/03-modern-geometry/03-lie/` (3 units: Lie group, group action,
  orthogonal group),
- `content/03-modern-geometry/04-differential-forms/03.04.01-lie-algebra.md`,
- `content/03-modern-geometry/13-spectral-sequences/` (4 files: spectral
  sequence, Leray-Serre, Leray-Hirsch, exercises).

✓ = covered, △ = partial / different framing, ✗ = not covered.

| SLALG topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Lie algebra (definition, ideals, derivations, semidirect product) | `03.04.01 lie-algebra` | ✓ | Standard definition shipped. |
| Solvable / nilpotent Lie algebras; Lie's theorem; Engel's theorem | — | ✗ | **Gap (medium).** Touched in `07.04.01 cartan-weyl-classification` but no dedicated unit. SLALG §II prereq for the cohomology vanishing arguments. |
| Universal enveloping algebra $U(\mathfrak{g})$ | `07.06.02 universal-enveloping-algebra` | ✓ | |
| Poincaré-Birkhoff-Witt theorem | △ (inside `07.06.02`) | △ | Stated and used in `07.06.02`; SLALG §I gives a model proof. Master-tier deepening candidate. |
| Free Lie algebra $L(X)$; Magnus expansion; primitive-element characterisation | — | ✗ | **Gap (high — SLALG §III centrepiece).** No Codex unit on free Lie algebras or the Hopf-algebraic primitive-element picture. |
| Friedrichs criterion (primitive iff $\Delta(x) = x \otimes 1 + 1 \otimes x$) | — | ✗ | **Gap (medium — depends on free Lie algebra unit).** Hopf-algebra machinery. |
| Campbell-Baker-Hausdorff formula | — | ✗ | **Gap (very high — SLALG §IV centrepiece).** Cited in passing in `03.03.01 lie-group` (exponential map) but no derivation, no statement of the universal formula, no convergence discussion. The single largest gap. |
| Cohomology of Lie algebras $H^*(\mathfrak{g}, M)$ | — | ✗ | **Gap (very high — SLALG §V centrepiece).** Chevalley-Eilenberg complex absent from the Codex. No dedicated unit. |
| Whitehead's lemmas ($H^1 = H^2 = 0$ for semisimple) | — | ✗ | **Gap (high).** Cohomological proof of Weyl's complete reducibility theorem; SLALG's pedagogical bridge from cohomology to representation theory. |
| Hochschild-Serre spectral sequence for an ideal | — | ✗ | **Gap (high).** Mentioned only at the *topological* Leray-Serre level in `03.13.02 leray-serre`; the *algebraic* Lie-algebra version is not its own unit. |
| Lie group (smooth manifold + group law) | `03.03.01 lie-group` | ✓ | |
| Lie-algebra of a Lie group ($T_e G$ with bracket) | △ (in `03.04.01 lie-algebra` + `03.03.01 lie-group`) | △ | Stated; the functor $G \mapsto \mathrm{Lie}(G)$ is sketched but Lie's three theorems are not their own unit. |
| Exponential map $\exp: \mathfrak{g} \to G$ (real / complex case) | △ (in `03.03.01 lie-group`) | △ | Mentioned at intermediate tier; SLALG's universal-power-series viewpoint is not the framing. **Gap (low-medium — frame deepening only).** |
| Formal group law $F(X, Y) \in R[\![X, Y]\!]^n$ | — | ✗ | **Gap (very high — SLALG Part II opening; the entire formal-group programme).** No Codex unit. |
| Lie functor for formal groups (char 0 equivalence) | — | ✗ | **Gap (high).** The bridge theorem; depends on formal-group unit. |
| Lubin-Tate formal groups; height; $p$-typical formal groups | — | ✗ | **Gap (low — Master-tier deepening; SLALG mentions but does not develop fully).** Belongs in a Master extension of the formal-group unit. |
| $p$-adic analytic manifold | — | ✗ | **Gap (medium — prereq for $p$-adic Lie group).** $\mathbb{Q}_p$ and analytic structure on $\mathbb{Q}_p^n$. |
| $p$-adic Lie group | — | ✗ | **Gap (very high — SLALG Part II centrepiece).** No Codex unit on $p$-adic Lie groups. |
| $p$-adic exponential and its radius of convergence | — | ✗ | **Gap (high).** The technical heart of SLALG Part II §§6–7. Depends on Campbell-Hausdorff and on $p$-adic analytic manifold. |
| Lazard's theorem: $p$-adic Lie group $\leftrightarrow$ $\mathbb{Q}_p$-Lie algebra equivalence | — | ✗ | **Gap (high — SLALG's punchline for Part II).** |
| Pro-$p$ groups (Lazard's later development; SLALG sketch) | — | ✗ | **Gap (low — Master-only pointer).** SLALG predates the uniform-pro-$p$ machinery; pointer unit at most. |
| Spectral sequence (general framework) | `03.13.01 spectral-sequence` | ✓ | General machinery shipped. Lie-algebra specialisation is the gap. |
| Leray-Serre spectral sequence (fibrations) | `03.13.02 leray-serre` | ✓ | Topological version. Algebraic Lie-algebra version (= Hochschild-Serre) is the gap. |

**Aggregate coverage estimate (REDUCED audit basis).**

- **SLALG Part I §§I–II** (Lie algebra basics, $U(\mathfrak{g})$, PBW):
  **~75%** covered via `03.04.01`, `07.06.02`. Gap: dedicated PBW proof
  unit, dedicated solvable/nilpotent + Lie's/Engel's theorem unit.
- **SLALG Part I §III** (free Lie algebra, Magnus expansion, primitive
  elements): **~0%** covered. Total gap.
- **SLALG Part I §IV** (Campbell-Hausdorff): **~5%** covered (one
  passing mention in `03.03.01`). Effectively a total gap and the single
  largest gap in this audit.
- **SLALG Part I §§V–VI** (cohomology, Hochschild-Serre): **~0%**
  covered. Total gap; only the topological Leray-Serre is in the Codex.
- **SLALG Part II §§1–5** (formal groups, formal Lie functor): **~0%**
  covered. Total gap.
- **SLALG Part II §§6–8** ($p$-adic analytic groups, $p$-adic exponential,
  Lazard's equivalence): **~0%** covered. Total gap.

**Overall: ~15% of SLALG is covered by the shipped Codex corpus.** The gap
is **substantial and distinct** — SLALG covers material that is *deliberately
absent* from the other Lie-strand Fast Track books (Fulton-Harris, Hall,
Helgason 3.17, Knapp). Closing this gap is the only way the Fast Track
"p-adic, homological" tag for row 3.13 becomes a substantive claim rather
than a label.

This is a **new-unit-heavy outcome**, the opposite of Fulton-Harris's
deepening-heavy outcome. SLALG introduces material that has no existing
Codex framing to deepen.

---

## §3 Gap punch-list (priority-ordered)

**Priority 0 — prereqs from other strands:** None blocking — `03.04.01
lie-algebra`, `07.06.02 universal-enveloping-algebra`, and `03.13.01
spectral-sequence` are all shipped. The $p$-adic units will need a brief
$\mathbb{Q}_p$ / $p$-adic absolute value prereq, but that can be folded
into the relevant unit as a short notation paragraph rather than a
dedicated prereq unit (the Codex does not currently have a number-theory
strand, and producing one for two units is overkill).

**Priority 1 — high-leverage, captures SLALG's distinctive content:**

1. **`07.06.10` Free Lie algebra and the Magnus expansion.** Definition of
   $L(X)$ on a set $X$, the universal property, the Hopf-algebraic
   characterisation as the primitive elements of the free associative
   algebra $T(X)$, the Friedrichs criterion. Three-tier; Master tier
   includes a Hall-basis construction. SLALG §III anchor; Bourbaki *GAL*
   Ch. II anchor. ~1800 words. **Foundational for the Campbell-Hausdorff
   unit.**

2. **`07.06.11` Campbell-Baker-Hausdorff formula.** Statement of the
   universal Lie series, proof via the free-Lie-algebra / primitive-element
   approach (relies on Priority 1 unit), discussion of convergence over
   $\mathbb{R}$, $\mathbb{C}$, and $\mathbb{Q}_p$. Worked computation of
   the first several BCH terms with explicit rational coefficients.
   SLALG §IV anchor; Bourbaki *GAL* Ch. II §6 anchor. Originator-prose
   section citing Campbell 1897/1898, Baker 1905, Hausdorff 1906. Three-
   tier; Master tier includes the Dynkin formula for the BCH coefficients.
   ~2200 words. **The single highest-priority unit in this plan.**

3. **`07.06.12` Cohomology of Lie algebras $H^*(\mathfrak{g}, M)$.**
   Chevalley-Eilenberg complex $C^n(\mathfrak{g}, M) = \mathrm{Hom}
   (\Lambda^n \mathfrak{g}, M)$, the differential, low-degree
   interpretations ($H^0 = M^{\mathfrak{g}}$ invariants; $H^1 = $ outer
   derivations modulo inner; $H^2 = $ central extensions classifying
   class). Whitehead's lemmas $H^1 = H^2 = 0$ for $\mathfrak{g}$ finite-dim
   semisimple, $M$ finite-dim. **Cohomological proof of Weyl's complete
   reducibility theorem.** SLALG §V anchor; Chevalley-Eilenberg 1948
   originator citation; Weibel *An Introduction to Homological Algebra*
   Ch. 7 cross-reference. Three-tier; Master tier handles the
   derived-functor interpretation $H^n(\mathfrak{g}, M) =
   \mathrm{Ext}^n_{U(\mathfrak{g})}(k, M)$. ~2200 words. **Pulls weight
   for the cohomology / homological algebra strand and is a prereq for
   any future BRST / gauge-cohomology material.**

4. **`07.06.13` Hochschild-Serre spectral sequence for a Lie-algebra
   ideal.** For $\mathfrak{h} \triangleleft \mathfrak{g}$, the filtration
   on the Chevalley-Eilenberg complex by $\mathfrak{h}$-degree;
   statement $E_2^{p, q} = H^p(\mathfrak{g}/\mathfrak{h}, H^q(\mathfrak{h},
   M)) \Rightarrow H^{p+q}(\mathfrak{g}, M)$; the five-term exact sequence
   in low degrees. Worked example: the Heisenberg Lie algebra cohomology
   computed by the spectral sequence with the centre as ideal. SLALG §VI
   anchor; Hochschild-Serre 1953 originator citation; cross-link to the
   topological `03.13.02 leray-serre` (the parallel statement for
   fibrations). Three-tier; Master tier includes the derivation of the
   inflation-restriction sequence. ~1800 words. **Closes the Lie-side of
   the spectral-sequence strand.**

5. **`03.03.04` Formal group law.** Definition over a commutative ring $R$:
   one-dim case $F(X, Y) \in R[\![X, Y]\!]$ with axioms; higher-dim
   vector-valued case. The associated formal Lie algebra
   $L(F) = (R^n, [\cdot, \cdot]_F)$ from the quadratic part of $F$. The
   Lie functor $F \mapsto L(F)$ is an equivalence in characteristic 0
   (Cartier; Serre's exposition). Statement-only of the
   characteristic-$p$ failure (height, $p$-typical forms). SLALG Part II
   §§1–5 anchor; Bochner 1946 + Lazard 1955 originator citations;
   Hazewinkel 1978 secondary anchor. Three-tier; Master tier sketches
   Lubin-Tate formal groups and their role in local class field theory.
   ~2000 words. **Foundational for `03.03.05` and a long-term hook for
   future algebraic-topology material (complex cobordism / formal-group
   law of $\mathrm{MU}$).**

**Priority 2 — completes the $p$-adic Lie group side:**

6. **`03.03.05` $p$-adic Lie group and the $p$-adic exponential.** Brief
   $\mathbb{Q}_p$ / $p$-adic absolute value paragraph; $p$-adic analytic
   manifold; group object in that category. The $p$-adic exponential
   $\exp: \mathfrak{g} \to G$ as a power-series map, radius of convergence
   $r = p^{-1/(p-1)}$ (the standard bound). The local group structure on
   $\exp(B_r(0))$ given by the Campbell-Hausdorff series (depends on
   Priority 1 unit 2). SLALG Part II §§6–7 anchor; Lazard 1965 originator
   citation; cross-reference Dixon-du Sautoy-Mann-Segal *Analytic Pro-$p$
   Groups* as the modern follow-up. Three-tier. ~2000 words.

7. **`03.03.06` Lazard's equivalence: $p$-adic Lie groups and
   $\mathbb{Q}_p$-Lie algebras.** Statement of the equivalence of
   categories on the simply-connected side; sketch of the proof using
   Priority 2 unit 6's $p$-adic exponential and the Campbell-Hausdorff
   formula. SLALG Part II §8 anchor; Lazard 1965 anchor. The $p$-adic
   analogue of Lie's three theorems. Intermediate + Master tiers. ~1500
   words.

**Priority 3 — closes Part I solvable/nilpotent prereqs:**

8. **`07.06.14` Solvable and nilpotent Lie algebras; Engel's theorem and
   Lie's theorem.** Standard content: $\mathfrak{g}^{(i)}$ derived series,
   $\mathfrak{g}_i$ lower central series, nilpotent / solvable definitions,
   Engel ($\mathfrak{g}$ nilpotent iff every ad is nilpotent), Lie (over
   $\mathbb{C}$, solvable acts in upper-triangular form). SLALG §II anchor;
   Humphreys *Lie Algebras* Ch. I anchor. Required prereq for the
   cohomological vanishing arguments in `07.06.12`. Intermediate + Master
   tiers. ~1500 words. **Medium priority — load-bearing prereq but
   currently sufficient at the implicit-reference level in `07.04.01`.**

**Priority 4 — Master-tier deepenings (not strictly required for FT
equivalence ≥95% but close the residual gap):**

9. **§Master deepening of `07.06.02 universal-enveloping-algebra`:
   PBW theorem with the filtration / associated-graded proof.** ~600 words
   added. SLALG §I anchor.

10. **§Master deepening of `03.03.01 lie-group`: Lie's three theorems,
    rigorously stated.** Currently sketched at intermediate; a 700-word
    master section codifies the functor $G \mapsto \mathrm{Lie}(G)$, the
    integration theorem (simply connected Lie group from a Lie algebra),
    and the local-isomorphism theorem. SLALG Part II §1–§2 anchor.

11. **§Master deepening of `07.06.10` (or new pointer unit
    `07.06.15`): Hall basis and Hall sets for the free Lie algebra.**
    ~500 words.

12. **§Master deepening of `03.03.04 formal-group-law` (new): Lubin-Tate
    formal groups, height of a formal group, and pointer to the
    Cartier-Dieudonné classification.** ~700 words. Hazewinkel
    Chs. 18–25 reference.

**Priority 5 — exercise / survey follow-ups (optional):**

13. **Exercise pack `07.06.E2 lie-algebra-cohomology-exercises`.** Worked
    computations: $H^*(\mathfrak{sl}_2, \mathbb{C})$, $H^*$ of the
    Heisenberg, $H^*$ of the abelian Lie algebra (= exterior algebra).
    ~5 worked exercises.

14. **Pointer paragraph in `07.06.13` cross-linking to BRST / gauge
    cohomology** (when/if a `physics/gauge-theory/` BRST unit is shipped).

---

## §4 Implementation sketch (P3 → P4)

**Realistic production estimate** (mirroring earlier Brown-Higgins-Sivera,
Fulton-Harris, and Lawson-Michelsohn batches):

- Priority 1 (5 new units, technical and dense): ~4 hours each = **~20
  hours.** `07.06.10 free-lie-algebra`, `07.06.11 campbell-hausdorff`,
  `07.06.12 lie-algebra-cohomology`, `07.06.13 hochschild-serre-ss`,
  `03.03.04 formal-group-law`. The Campbell-Hausdorff and Chevalley-
  Eilenberg units skew long because they need both clean statements and
  worked computations.
- Priority 2 (2 new units): ~3.5 hours each = **~7 hours.** `03.03.05
  p-adic-lie-group`, `03.03.06 lazard-equivalence`.
- Priority 3 (1 new unit): ~3 hours = **~3 hours.** `07.06.14
  solvable-nilpotent-lie-algebra`.
- Priority 4 (4 master deepenings): ~45 min each = **~3 hours.**
- Priority 5 (exercise pack + pointers): ~3 hours.

**Total: ~36–38 hours of focused production for full FT-equivalence
coverage of SLALG.** Fits a focused 5–6 day window. Priority 1 alone (~20
hours, 2.5–3 days) closes ~70% of the SLALG gap and raises effective
coverage from ~15% to ~70%. Priority 1+2 (~27 hours, 3.5 days) raises to
~88%. Priority 1+2+3 raises to ~92%. Priority 1+2+3+4 + the exercise
pack closes to ≥95%.

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, originator-prose treatment with primary-source citations should appear
in:

- **Lie 1880s** — Sophus Lie, *Theorie der Transformationsgruppen* I–III
  (with F. Engel, Teubner 1888–1893). Originates the entire Lie-group / Lie-
  algebra programme. **Cite in `03.03.01 lie-group` Master section** (and
  in the `03.04.01 lie-algebra` Master section if not already present).

- **Campbell 1897/1898, Baker 1905, Hausdorff 1906** — see §1 above for
  full citations. The three originators of the BCH formula. **Cite in
  `07.06.11 campbell-hausdorff` Master section.**

- **Chevalley-Eilenberg 1948** — C. Chevalley, S. Eilenberg, "Cohomology
  theory of Lie groups and Lie algebras," *Trans. AMS* 63 (1948), 85–124.
  Originates Lie-algebra cohomology. **Cite in `07.06.12
  lie-algebra-cohomology` Master section.**

- **Hochschild-Serre 1953** — G. Hochschild, J.-P. Serre, "Cohomology of
  Lie algebras," *Ann. of Math.* (2) 57 (1953), 591–603. **Cite in
  `07.06.13 hochschild-serre-ss` Master section.**

- **Lazard 1955/1965** — M. Lazard, "Sur les groupes de Lie formels à un
  paramètre," *Bull. Soc. Math. France* 83 (1955), 251–274; "Groupes
  analytiques $p$-adiques," *Publ. Math. IHES* 26 (1965), 5–219. **Cite
  in `03.03.04 formal-group-law`, `03.03.05 p-adic-lie-group`,
  `03.03.06 lazard-equivalence` Master sections.**

- **Bourbaki 1972** — *Groupes et algèbres de Lie*, Ch. II–III (Hermann
  1972). Encyclopedic reference; cite as Master-tier anchor in every new
  unit in this audit.

**Notation crosswalk.** SLALG uses Bourbaki notation throughout:
$U(\mathfrak{g})$ for the universal enveloping algebra (already Codex
notation); $\mathrm{Lib}(X)$ for the free Lie algebra on $X$ (Codex
default $L(X)$ is acceptable and is what `07.06.10` should adopt);
$H^*(\mathfrak{g}, M)$ for Lie-algebra cohomology (use as-is); $L(G)$
for the Lie algebra of a Lie group $G$ (Codex tends toward $\mathfrak{g}$
in lowercase fraktur for an abstract Lie algebra and $\mathrm{Lie}(G)$ or
$\mathfrak{g}$ for the Lie algebra of $G$ — keep current Codex
convention). For $p$-adic objects: write $\mathbb{Q}_p$ for the $p$-adic
rationals, $\mathbb{Z}_p$ for the $p$-adic integers, $|x|_p$ for the
$p$-adic absolute value, $\mathrm{ord}_p$ for the $p$-adic valuation.
Record in a §Notation paragraph of `07.06.11` (BCH series ring) and
`03.03.05` ($p$-adic Lie group).

**Cross-strand weaving (Pass-W).** New units should link laterally to:

- `03-modern-geometry/03-lie/` — the existing Lie-group machinery is the
  global-Lie-group complement to SLALG's local / formal / $p$-adic
  emphasis. `07.06.11 campbell-hausdorff` directly upgrades
  `03.03.01 lie-group` intermediate-tier exponential discussion.

- `03-modern-geometry/13-spectral-sequences/` — `07.06.13
  hochschild-serre-ss` is the algebraic Lie-algebra parallel to
  `03.13.02 leray-serre` (topological). Add a §See-also paragraph in
  both directions.

- `07-representation-theory/02-character/`, `07-representation-theory/
  04-classification/` — `07.06.12 lie-algebra-cohomology`'s
  Whitehead-lemmas section gives the cohomological proof of Weyl's
  complete reducibility, which is currently a black box in
  `07.02.01 maschke-theorem` (finite-group case) and `07.04.01
  cartan-weyl-classification`.

- A future `algebraic-topology/complex-cobordism/` strand (Ravenel 1.06
  audit punch-list candidate) — `03.03.04 formal-group-law` is the
  prereq for the formal-group law of $\mathrm{MU}$ and chromatic homotopy
  theory. Add a forward pointer.

- A future `number-theory/local-fields/` strand (Serre 3.14 *A Course in
  Arithmetic* audit candidate) — `03.03.05 p-adic-lie-group` shares the
  $\mathbb{Q}_p$ prereq paragraph.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in SLALG (full P1
  audit; deferred until a local PDF is acquired). Coverage estimates in
  §2 are based on the public TOC structure of LNM 1500 plus spot-checks
  of Codex units. Promote to full P1 audit when PDF is local.

- **Serre 3.12 *Complex Semisimple Lie Algebras*** — separate book, separate
  audit. SCSLA covers the classification arc (Cartan subalgebras, root
  systems, Cartan matrix, Serre relations); SLALG covers
  Campbell-Hausdorff / cohomology / formal-group / $p$-adic. The two
  books are disjoint in content and pedagogically complementary. The 3.12
  audit should pick up Cartan-Weyl classification deepenings that `07.04.01`
  partially covers; this 3.13 audit instead picks up the homological /
  $p$-adic gap that no other Codex unit fills.

- **Serre 3.14 *A Course in Arithmetic*** — separate book, separate audit.
  Covers Ostrowski, $\mathbb{Q}_p$, quadratic forms, modular forms. The
  $\mathbb{Q}_p$ paragraph in Priority 2 units 6 and 7 is intentionally
  thin and is *not* a substitute for a proper number-theory strand.

- **Serre 3.15 *Linear Representations of Finite Groups*** — separate
  book, separate audit. Disjoint content from SLALG.

- **Modern pro-$p$ group theory** (Dixon-du Sautoy-Mann-Segal *Analytic
  Pro-$p$ Groups*; uniform pro-$p$ groups; Lazard's "$p$-saturation"
  classification of analytic pro-$p$ groups). SLALG predates this material
  by 30 years and only sketches it. Pointer reference in Priority 2 unit
  6 Master section; full coverage deferred.

- **Algebraic groups / group schemes** (Borel, Springer, Milne *Algebraic
  Groups*). SLALG is *not* an algebraic-groups text; deferred to a future
  algebraic-groups audit (no current Fast Track row).

- **Chromatic homotopy theory** (Lubin-Tate spectra, Morava $E$- and
  $K$-theories, the Adams-Novikov spectral sequence). The formal-group
  prereq is what `03.03.04` ships; chromatic content is deferred to the
  Ravenel 1.06 audit + production pass.

- **Lie-algebroid / Lie-groupoid generalisations** (Mackenzie). Adjacent
  to SLALG only at the conceptual level; deferred to a future Mackenzie
  audit (Codex has local copies of both Mackenzie texts in
  `reference/textbooks-extra/`).

---

## §6 Acceptance criteria for FT equivalence (SLALG)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The 5 Priority-1 new units have shipped (`07.06.10 free-lie-algebra`,
  `07.06.11 campbell-hausdorff`, `07.06.12 lie-algebra-cohomology`,
  `07.06.13 hochschild-serre-ss`, `03.03.04 formal-group-law`). These
  close ~70% of the SLALG gap and the *entire* Part I cohomological half.

- ≥95% of SLALG's named theorems and major worked computations map to a
  Codex unit (currently ~15%; after Priority-1 this rises to ~70%;
  after Priority-1+2 to ~88%; after Priority-1+2+3 to ~92%; full ≥95%
  requires Priority-4 master deepenings + the exercise pack).

- ≥90% of SLALG's worked computations have a direct unit or are
  cross-referenced from a unit that covers them. The Heisenberg /
  $\mathfrak{sl}_2$ Lie-algebra cohomology computations and the explicit
  BCH-series terms should be present as worked examples in `07.06.11`,
  `07.06.12`, and the `07.06.E2` exercise pack.

- Notation crosswalk recorded (see §4): free-Lie-algebra notation, BCH
  ring, $p$-adic absolute value, $H^*(\mathfrak{g}, M)$.

- Pass-W weaving connects the new units to `03.13 spectral-sequences/`,
  to the future Ravenel chromatic strand, and to `03-lie/` Lie-group
  units.

- Originator-prose sections (Lie 1880s, Campbell 1897, Baker 1905,
  Hausdorff 1906, Chevalley-Eilenberg 1948, Hochschild-Serre 1953,
  Lazard 1955/1965, Bourbaki 1972) appear in the relevant Master tiers.

**Equivalence verification protocol** (per `FASTTRACK_EQUIVALENCE_PLAN.md`
§4):

- **4.1 Book-as-input self-check.** Sample 5 random theorem statements
  from SLALG (suggested loci: BCH universality in §IV, Whitehead's first
  lemma in §V, Hochschild-Serre five-term sequence in §VI, formal-Lie
  equivalence in Part II §3, $p$-adic exponential convergence in Part II
  §6); for each, identify the Codex unit that proves it.

- **4.2 Exercise reproducibility.** Sample 5 random exercises from SLALG;
  for each, identify the Codex unit(s) sufficient to solve it. SLALG
  exercises (where present in the LNM 1500 reprint) tend to be brief
  technical lemmas rather than open-ended; sampling protocol is
  straightforward.

- **4.3 Notation comprehension.** Sample 5 fragments of SLALG prose
  (with attention to the Bourbaki conventions and the $p$-adic
  exponential's convergence-radius bookkeeping); paraphrase each into
  Codex notation per the §4 crosswalk.

---

## §7 Sourcing

- **Local PDF status.** Not present in `reference/textbooks-extra/`
  (verified — only the cover image
  `reference/fast-track/images/Serre-Lie-Algebras-Lie-Groups-712x1024__dd9fad6ce3.jpg`
  is local). SLALG is a commercial Springer LNM (originally a Benjamin
  1965 hardback; the 1992 Springer LNM 1500 reprint is the canonical
  available form) and is not author-hosted.

- **Commercial source.** Springer Lecture Notes in Mathematics 1500
  (1992 reprint of the 1965 W. A. Benjamin original). Available via
  `link.springer.com/book/10.1007/b13134` and equivalent. ISBN
  3-540-55008-9 (softcover). The 1965 Benjamin original is long out of
  print but appears in university libraries.

- **Library-mirror sources.** Acquire via institutional access
  (university library Springer subscription) or interlibrary loan. For
  the local copy, target placement is
  `reference/textbooks-extra/Serre-LieAlgebrasAndLieGroups.pdf` to
  mirror the pattern of other commercial-source FT texts (e.g.
  `Sternberg-LieAlgebras.pdf` already in
  `reference/fasttrack-texts/03-modern-geometry/`).

- **Companion / supplementary materials.**
  - N. Bourbaki, *Groupes et algèbres de Lie*, Chs. II–III (Hermann
    1972; Springer English translation 1989). Encyclopedic companion.
  - G. Hochschild, *The Structure of Lie Groups* (Holden-Day 1965;
    Dover reprint 2015). Same-year complementary treatment of the
    cohomology side.
  - M. Hazewinkel, *Formal Groups and Applications* (Academic Press
    1978; AMS Chelsea 2012). The canonical extension of SLALG Part II
    §§1–5.
  - M. Lazard, "Groupes analytiques $p$-adiques," *Publ. Math. IHES*
    26 (1965). Open-access via numdam.org —
    `http://www.numdam.org/item/PMIHES_1965__26__5_0/`. The definitive
    $p$-adic Lie-group reference; freely available.
  - J. D. Dixon, M. P. F. du Sautoy, A. Mann, D. Segal, *Analytic
    Pro-$p$ Groups*, 2nd ed. (Cambridge Studies in Advanced Mathematics
    61, CUP 1999). The modern pro-$p$ extension.

- **Open-access alternatives covering portions of SLALG:**
  - Bourbaki Ch. II §6 (Campbell-Hausdorff section) circulates as PDF
    via standard mirrors. Covers SLALG §IV at greater length.
  - Lazard 1965 (numdam) covers SLALG Part II §§6–8 at much greater
    length.
  - Weibel, *An Introduction to Homological Algebra* Ch. 7 (CUP 1994)
    covers SLALG §§V–VI in textbook form. Open Springer eBook on most
    institutional subscriptions.

- **Reduced-audit flag.** This plan was produced *without* a local
  SLALG PDF. Coverage estimates in §2 should be re-verified once a PDF
  is acquired, particularly for Part II §§7–8 where the convergence
  estimates and the exact form of Lazard's equivalence statement are
  load-bearing and where Serre's notation differs subtly from Lazard's.
  **Promote to full P1 audit when PDF is local.** Numdam Lazard 1965
  may substitute for Part II coverage if a SLALG PDF remains
  unavailable; in that case rewrite Priority 2 units 6 and 7 with
  Lazard 1965 as primary anchor and SLALG as secondary.
