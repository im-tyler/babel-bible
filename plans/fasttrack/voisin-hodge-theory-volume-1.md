# Voisin — *Hodge Theory and Complex Algebraic Geometry I* (Fast Track 3.27) — Audit + Gap Plan

**Book:** Claire Voisin, *Hodge Theory and Complex Algebraic Geometry, I*
(translated by Leila Schneps). Cambridge Studies in Advanced Mathematics 76,
Cambridge University Press 2002. xi + 322 pp. (Translation of *Théorie de
Hodge et géométrie algébrique complexe*, Cours Spécialisés 10, SMF 2002.)
ISBN 0-521-80260-1. The canonical modern English-language reference for
**Hodge theory on smooth projective complex / compact Kähler manifolds**:
the Kähler-package proofs — harmonic theory, the Kähler identities, the
$\partial\bar\partial$-lemma, the Hodge decomposition, the Lefschetz
decomposition, hard Lefschetz, Hodge-Riemann bilinear relations, the
Hodge index theorem — written by an originator of the modern subject
and structured as the strict prerequisite for Voisin Vol II (Hodge classes,
the Hodge conjecture, mixed Hodge structures, Noether-Lefschetz).

**Fast Track entry:** 3.27. Listed in
`docs/catalogs/FASTTRACK_BOOKLIST.md` as "Hodge theory via complex
geometry" alongside FT 3.28 (Jost, *Riemannian Geometry and Geometric
Analysis*) which serves as the differential-analysis companion. Sibling
to FT 3.18 / 3.19 (Kobayashi-Nomizu Vol I + Vol II, audits shipped Cycles
4 + 5 respectively — see `plans/fasttrack/kobayashi-nomizu-foundations-vol1.md`
and `plans/fasttrack/kobayashi-nomizu-foundations-vol2.md`). The KN-II
audit explicitly flagged Voisin Vol I as a **forward dependency** for
the Kähler-Hodge package; this plan picks up that thread.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units to write so that *Hodge Theory and Complex Algebraic Geometry I*
(VHCAG-I hereafter) is covered to the equivalence threshold (≥95% effective
coverage of theorems, key examples, exercise pack, notation, sequencing,
intuition, applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Audit mode: REDUCED.** No local PDF is available
(`reference/textbooks-extra/` and `reference/fasttrack-texts/03-modern-geometry/`
checked; VHCAG-I is under active CUP / SMF copyright and was not
retrieved within the 3-hour time budget). This pass works from the
canonical VHCAG-I table of contents (Parts I–III, Chs. 1–11 + appendices,
well-attested across the modern Hodge-theoretic literature), the
peer-source crosswalks below (Griffiths-Harris, Wells, Huybrechts,
Demailly), the Fast Track entry's editorial framing, the in-Codex
evidence that VHCAG-I is already cited as a master anchor in at least
five shipped units (`04.09.01-hodge-decomposition.md`,
`04.09.02-kodaira-vanishing.md`, `04.05.09-hodge-index-theorem.md`,
`06.04.03-hodge-decomposition-curves.md`, `06.04.05-dbar-hilbert-pde.md`),
and the KN-II audit (Cycle 5) findings for the differential-geometric
prerequisite layer. A full P1 line-number inventory is deferred to the
production pass when a local copy is on disk.

---

## §1 What VHCAG-I is for

VHCAG-I is the **definitive modern reference** for Hodge theory on smooth
projective complex manifolds. Where Griffiths-Harris *Principles of
Algebraic Geometry* (1978) Ch. 0 gives the foundational sketch and Wells
*Differential Analysis on Complex Manifolds* (GTM 65, 1980) gives the
hard-PDE treatment, Voisin assembles a single self-contained, modern
presentation that is **simultaneously** (i) rigorous about the PDE input
(harmonic theory, ellipticity, regularity), (ii) systematic about the
Kähler-package theorems and their interrelations, and (iii) explicitly
structured as a prerequisite for Voisin Vol II (mixed Hodge structures,
Hodge classes, the Hodge conjecture, normal functions, Noether-Lefschetz).
The book is written by an originator of the modern subject — Voisin's
own work on the Hodge conjecture, the integral Hodge conjecture
counterexamples, decomposition of the diagonal, and rational equivalence
of zero-cycles forms much of the contemporary Hodge-theoretic landscape
that Vol II surveys — and the choices of emphasis throughout Vol I reflect
which inputs Vol II will need.

Distinctive content, organised by the three parts of the volume:

1. **Part I (Chs. 1–4) — Preliminaries: complex manifolds and holomorphic
   bundles.** Complex manifolds, holomorphic vector bundles, sheaves and
   sheaf cohomology, connections and curvature, Chern classes via curvature.
   Voisin's Part I is denser and more efficient than the parallel material
   in Griffiths-Harris Ch. 0 or Wells Chs. I–III, with explicit signposting
   of which preliminaries are load-bearing for the Hodge-theoretic core.
   The Dolbeault complex $(\Omega^{p, \bullet}, \bar\partial)$ and the
   Dolbeault isomorphism $H^q(X; \Omega^p) \cong H^{p, q}_{\bar\partial}(X)$
   are developed here as the bridge between sheaf cohomology and the
   later harmonic-form representatives [ref: D. Huybrechts, *Complex
   Geometry: An Introduction* (Universitext, Springer 2005) Ch. 2 — the
   modern accessible parallel; R. O. Wells, *Differential Analysis on
   Complex Manifolds* (GTM 65, Springer 3rd ed. 2008) Chs. I–III — the
   classical hard-analysis parallel].
2. **Part II (Chs. 5–7) — Harmonic theory and the Hodge decomposition.**
   The technical heart of the volume. Ch. 5 develops the **PDE foundation**:
   the formal adjoint $d^*$ on a compact Riemannian manifold, the
   Laplace-Beltrami operator $\Delta = dd^* + d^*d$ as a self-adjoint
   elliptic operator, the Hodge theorem (every de Rham class has a unique
   harmonic representative), the Hodge orthogonal decomposition $\Omega^k(X)
   = \mathcal{H}^k \oplus d\Omega^{k-1} \oplus d^*\Omega^{k+1}$. Voisin
   gives the **PDE input explicitly** — Gårding's inequality, elliptic
   regularity, Fredholm theory of self-adjoint elliptic operators on
   compact manifolds — rather than black-boxing it as Griffiths-Harris
   does. Ch. 6 develops the **Kähler identities**
   $[\Lambda, \bar\partial] = -i\partial^*$, $[\Lambda, \partial] = i\bar\partial^*$
   and their consequence $\Delta_d = 2\Delta_\partial = 2\Delta_{\bar\partial}$
   on a Kähler manifold, then the **Hodge decomposition** $H^k(X; \mathbb{C})
   = \bigoplus_{p + q = k} H^{p, q}(X)$ on a compact Kähler manifold, the
   Hodge symmetry $\overline{H^{p, q}} = H^{q, p}$, and the
   **$\partial\bar\partial$-lemma**: on a compact Kähler manifold, every
   $d$-exact $(p, q)$-form is $\partial\bar\partial$-exact. Ch. 7 develops
   the **Lefschetz decomposition**: with $L = \omega \wedge$ and $\Lambda$
   its adjoint, the operators $(L, \Lambda, H)$ form an $\mathfrak{sl}_2$
   action on $H^*(X; \mathbb{C})$, giving the **primitive decomposition**
   $H^k = \bigoplus_r L^r P^{k - 2r}$ and the **hard Lefschetz theorem**
   $L^k : H^{n - k}(X) \xrightarrow{\sim} H^{n + k}(X)$. The **Hodge-Riemann
   bilinear relations** on primitive cohomology give positivity, leading
   to the **Hodge index theorem**. This is the canonical statement of
   the Kähler package; the K3-surface signature analog from Hartshorne
   *Algebraic Geometry* V Theorem 1.9 is the surface-Néron-Severi
   specialisation [ref: P. Griffiths, J. Harris, *Principles of Algebraic
   Geometry* (Wiley 1978) Ch. 0 §6–§7 — the classical sketch parallel;
   J.-P. Demailly, *Complex Analytic and Differential Geometry*
   (OpenContent monograph, current online edition) Chs. VI + VIII — the
   most rigorous PDE-side parallel].
3. **Part III (Chs. 8–11) — Applications and structure theory.** Ch. 8
   develops the Lefschetz $(1, 1)$-theorem identifying $\mathrm{NS}(X)
   \otimes \mathbb{R}$ with $H^{1, 1}(X; \mathbb{R}) \cap H^2(X; \mathbb{Z})$
   on a smooth projective $X$; Ch. 9 develops Kodaira vanishing
   ($H^q(X; K_X \otimes L) = 0$ for $L$ ample and $q > 0$) via the
   Akizuki-Nakano-Bochner identity on a Kähler manifold; Ch. 10 develops
   Kodaira's embedding theorem (compact Kähler $X$ with an integral Kähler
   class is projective) — the bridge from Kähler manifolds to projective
   algebraic varieties; Ch. 11 develops the basic Hodge structures on
   $H^k$ as a setup for Vol II [ref: Huybrechts §3.3 + §5; Demailly Ch. VII;
   K. Kodaira, "On Kähler varieties of restricted type," *Annals of
   Math.* 60 (1954) 28–48 — the originating paper for the embedding
   theorem]. Voisin Vol II then takes off from these — mixed Hodge
   structures on non-compact / singular varieties, Hodge classes and the
   Hodge conjecture, variations of Hodge structure and the period map,
   Noether-Lefschetz theory.
4. **Calabi-Yau / Kähler-Einstein pointer.** VHCAG-I touches the
   **Calabi-Yau / Kähler-Einstein** literature only by pointer: a compact
   Kähler manifold with $c_1(K_X) = 0$ admits a Ricci-flat Kähler metric
   (Yau 1977 — solution of the Calabi conjecture, *Comm. Pure Appl. Math.*
   31, 339–411) and is then called Calabi-Yau in the strict differential-
   geometric sense. Voisin states this as a pointer to the much more
   substantial Yau / Aubin / Tian deep PDE theory and defers it; the
   Codex follows the same convention (see §5 below).
5. **Editorial signature.** VHCAG-I is uncompromisingly **PDE-first**
   inside the Kähler package: every theorem in Part II flows from the
   harmonic-theoretic ingredient established in Ch. 5, and the PDE input
   is made explicit rather than imported as a black box. This is the
   **opposite** stylistic choice from Griffiths-Harris (which keeps the
   PDE technical machinery in the background and emphasises the algebraic-
   geometric corollaries) and the **same** choice as Wells and Demailly.
   Among the modern English-language Hodge-theoretic references it is
   the **only** one that combines (a) full PDE rigour in the harmonic-
   theoretic core, (b) a systematic Kähler-package presentation, and (c)
   the explicit Vol-II-prerequisite framing. Huybrechts *Complex Geometry*
   (Universitext 2005) is the accessible-but-less-rigorous alternative;
   Demailly *Complex Analytic and Differential Geometry* is the
   rigorous-but-encyclopedic alternative; Griffiths-Harris is the
   classical-but-dated alternative. Voisin is the modern default
   [ref: Huybrechts Preface — "an alternative to Griffiths-Harris and
   Voisin for readers wanting a less compressed entry"; Demailly Preface
   — "a comprehensive treatment overlapping with Voisin and Wells, with
   more weight on the analysis"].
6. **Peer-source crosswalk.** The Voisin-Griffiths-Harris-Wells-Huybrechts-
   Demailly cluster is the modern canonical entry to Hodge theory; the
   Codex Fast Track lists Voisin (3.27) as the recommended primary text.
   Among these, the peer-source agreement on **what the Kähler package
   is** (Hodge decomposition + $\partial\bar\partial$-lemma + Lefschetz
   decomposition + hard Lefschetz + Hodge-Riemann + Kodaira vanishing +
   Kodaira embedding) is essentially complete; the disagreements are
   stylistic, pedagogical, and notational.
7. **VHCAG-I is *not* a first textbook on complex manifolds** (Huybrechts
   serves that role at a more accessible pace), **not a first textbook on
   harmonic analysis on manifolds** (Warner, Wells, or Jost serve that
   role), and **not a survey of contemporary Hodge theory** (Voisin Vol II
   is that book). The canonical "before VHCAG-I" sequence is
   Griffiths-Harris Ch. 0 → Wells → VHCAG-I, or
   Huybrechts → VHCAG-I directly. The canonical "after VHCAG-I" sequence
   is VHCAG-I → Voisin Vol II → mixed Hodge modules (Saito) or →
   Donaldson-Kronheimer (four-manifold gauge theory) or → Joyce
   (special holonomy / Calabi-Yau deep theory).

---

## §2 Coverage table (Babel Bible vs VHCAG-I)

Cross-referenced against the current Babel Bible corpus.
✓ = covered, △ = partial / different framing, ✗ = not covered.
VHCAG-I material maps primarily to `04-algebraic-geometry/09-hodge/`,
`04-algebraic-geometry/05-surfaces/` + `05-divisors/`,
`06-riemann-surfaces/04-cohomology/` + `08-vhs/`,
and the missing complex / Kähler differential-geometric prereq layer in
`03-modern-geometry/02-manifolds/` + `05-bundles/` flagged by the KN-II
audit.

| VHCAG-I topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Part I (Chs. 1–4) — preliminaries** | | | |
| Complex manifold (atlas, transition functions) | △ | △ | Touched in `06.01.*` (one-variable complex) and `06.07.01` (several variables) without a manifold-level anchor outside the RS chapter. KN-II audit punch-list item `03.02.10` (Complex manifold + Dolbeault complex) shared. |
| Holomorphic vector bundle | — | ✗ | **Gap (shared with KN-II audit, punch-list `03.05.19`).** Cited without anchor in `04.09.02-kodaira-vanishing.md` and `06.04.02-cech-cohomology-line-bundles.md`. |
| Hermitian metric, Chern connection | — | ✗ | **Gap (shared with KN-II punch-list `03.05.20`).** Load-bearing for the curvature formulas in Ch. 9 + Ch. 4. |
| Dolbeault complex $(\Omega^{p, \bullet}, \bar\partial)$ and Dolbeault cohomology | △ (curve case only) | △ | `06.04.05-dbar-hilbert-pde.md` covers the $\bar\partial$ operator and its Hilbert-space PDE setup on a Riemann surface. The general $(p, q)$ Dolbeault complex on a complex manifold has no anchor (KN-II punch-list `03.02.10`). |
| Sheaf cohomology + Dolbeault isomorphism $H^q(X; \Omega^p) \cong H^{p,q}_{\bar\partial}$ | △ | △ | `04.03.01-sheaf-cohomology.md` covers sheaf cohomology; the Dolbeault isomorphism specifically is stated in `04.09.01-hodge-decomposition.md` Step 4 of the proof outline without a dedicated unit. |
| Chern classes via curvature | △ | △ | `03.06.06-chern-weil-homomorphism.md` + `03.06.04-pontryagin-chern-classes.md` cover the construction; KN-II audit punch-list `03.05.20` + `03.06.07` closes remaining gaps. |
| **Part II (Chs. 5–7) — harmonic theory + Hodge package** | | | |
| **Ch. 5 — PDE foundation: $d^*$, $\Delta$, ellipticity, Hodge theorem (real)** | △ | △ | `06.04.05-dbar-hilbert-pde.md` (Riemann surface) gives the Hilbert-space PDE for $\bar\partial$ specifically with `lean_mathlib_gap` notes for the elliptic-regularity layer; no anchor for the **general compact Riemannian** Hodge theorem. **Gap (high priority).** Cited in `04.09.01-hodge-decomposition.md` Step 1 without a dedicated unit. |
| Compact Kähler manifold (Kähler form, $d\omega = 0$, equivalent definitions) | — | ✗ | **Gap (shared with KN-II punch-list `03.02.11`).** This is the central object of the entire volume. Cited in five shipped units (Hodge decomposition, Kodaira vanishing, Hodge index, Hodge decomposition on curves, Newlander-Nirenberg) without a dedicated unit. |
| **Ch. 6 — Kähler identities + Hodge decomposition (complex case)** | `04.09.01-hodge-decomposition.md` | △ | A `hodge-decomposition` unit ships covering the **statement** of the Hodge decomposition, the Hodge diamond, the symmetries (H1–H4), examples ($\mathbb{P}^n$, curves, K3, quintic), the construction via harmonic forms, and a sketch of the proof. The **Kähler identities themselves** are stated in the Master tier "Step 2 — Kähler identities" but are not proved in detail and have no dedicated unit; the **$\partial\bar\partial$-lemma** is not mentioned. KN-II audit punch-list `03.02.12` (Kähler identities + Kähler Hodge decomposition) is shared. |
| $\partial\bar\partial$-lemma | — | ✗ | **Gap (high priority).** Load-bearing for formality of compact Kähler manifolds, for the Lefschetz $(1, 1)$-theorem proof, and for the cohomological framework on Kähler manifolds. KN-II audit also flagged this. |
| Dolbeault Laplacian $\Delta_{\bar\partial} = \bar\partial \bar\partial^* + \bar\partial^* \bar\partial$ as self-adjoint elliptic operator | △ | △ | Mentioned in `04.09.01` Master tier; the operator-theoretic setup is partial in `06.04.05-dbar-hilbert-pde.md` for the $L$-valued $(0, q)$-forms on a Riemann surface. **Gap** for the general complex-manifold case. |
| Hodge theorem (Dolbeault version): $H^q(X; \Omega^p) \cong \mathcal{H}^{p, q}(X)$ | △ | △ | Stated as Step 4 in `04.09.01` proof outline. **Gap** for a dedicated theorem-unit. |
| **Ch. 7 — Lefschetz decomposition + hard Lefschetz** | | | |
| Lefschetz operator $L = \omega \wedge$ and adjoint $\Lambda$ | — | ✗ | **Gap.** Cited in `04.09.01` Advanced-results section and in `04.05.09-hodge-index-theorem.md` Master tier without a dedicated unit. |
| $\mathfrak{sl}_2$-action $(L, \Lambda, H)$ on $H^*(X; \mathbb{C})$ | — | ✗ | **Gap.** The structural backbone of the Lefschetz decomposition. |
| Primitive cohomology $P^{k} = \ker \Lambda \cap H^k$ | — | ✗ | **Gap.** |
| Lefschetz decomposition $H^k = \bigoplus_r L^r P^{k - 2r}$ | — | ✗ | **Gap.** |
| Hard Lefschetz $L^k : H^{n-k}(X) \xrightarrow{\sim} H^{n+k}(X)$ | △ | △ | Stated in `04.09.01-hodge-decomposition.md` Master tier "Hard Lefschetz theorem" as a one-line summary. No proof; no dedicated unit. **Gap (high priority).** KN-II audit also flagged this. |
| Hodge-Riemann bilinear relations | △ | △ | Stated in `04.09.01` Master + `04.05.09` (Hodge index Master). No dedicated unit; no proof. **Gap (high priority — load-bearing for hard Lefschetz and Hodge index).** |
| Hodge index theorem on a smooth projective surface | `04.05.09-hodge-index-theorem.md` | ✓ | Shipped with both algebraic-geometric (Hartshorne V.1.9) and cohomological (Voisin Ch. 6) framings; master anchor cites VHCAG-I §6.3 with `TODO_REF`. Single-paragraph weaving + `TODO_REF` resolution needed. |
| **Part III (Chs. 8–11) — applications and structure theory** | | | |
| Lefschetz $(1, 1)$-theorem on smooth projective $X$ | △ | △ | Cited in `04.05.09-hodge-index-theorem.md` Master tier as load-bearing for the cohomological Hodge index theorem (identifying $\mathrm{NS}(X) \otimes \mathbb{R}$ with rational Hodge classes in $H^{1, 1}$). No dedicated unit. **Gap.** |
| Kodaira vanishing $H^q(X; K_X \otimes L) = 0$ for $L$ ample, $q > 0$ | `04.09.02-kodaira-vanishing.md` | ✓ | Shipped; master anchor Kodaira 1953 + Voisin Vol I §9 cited. The Voisin-style **Akizuki-Nakano-Bochner** route to the proof (which sits inside Ch. 9 of VHCAG-I) is mentioned but not at full proof granularity. |
| Akizuki-Nakano vanishing $H^q(X; \Omega^p \otimes L) = 0$ for $p + q > n$, $L$ ample | △ | △ | Mentioned in `04.09.02-kodaira-vanishing.md` Intermediate tier as a generalisation. No dedicated unit; **Gap (Master-tier deepening).** |
| Kodaira embedding theorem (Kähler $X$ with integral Kähler class ⇒ projective) | — | ✗ | **Gap (high priority).** Bridge from compact Kähler manifolds to smooth projective varieties; cited in essentially every algebraic-geometry text without a Codex anchor. Originator citation: Kodaira 1954 *Annals*. |
| Hodge structures of weight $k$ (definition, examples, polarisation) | △ | △ | `04.09.01-hodge-decomposition.md` Exercise 7 (hard) walks through the definition of a **polarised Hodge structure** with examples; this is the only treatment. **Gap** for a dedicated unit (load-bearing for Vol II — see §5). |
| Variation of Hodge structure | △ | △ | `06.08.01-gauss-manin.md`, `06.08.02-vhs-jacobian.md` cover the curve case. **Gap** for a general-base unit; deferred to Vol II audit per §5. |
| **Curve case (one-dimensional Kähler)** | | | |
| Hodge decomposition on a compact Riemann surface | `06.04.03-hodge-decomposition-curves.md` | ✓ | Shipped; master anchor "Hodge 1941 + Griffiths-Harris §0.6–§0.7 + Voisin Vol I §5–§6" cited with `TODO_REF`. Excellent coverage of the one-dim case. |
| Riemann's bilinear relations | △ | △ | `06.06.07-riemann-bilinear.md` covers the period-matrix bilinear relations on a Riemann surface (the curve specialisation of the Hodge-Riemann bilinear relations); ships with Riemann 1857 + Voisin citations. |
| $\bar\partial$ Hilbert-space PDE (one-dim) | `06.04.05-dbar-hilbert-pde.md` | ✓ | Shipped with master anchor "Hörmander 1965 + Andreotti-Vesentini 1965 + Hodge 1941 + Demailly + Voisin §5"; covers the one-variable PDE foundation that VHCAG-I Ch. 5 lays out in general. |

**Aggregate coverage estimate:** ~30–35% of VHCAG-I has corresponding
Babel Bible units. **Part I (preliminaries)** is **~30% covered**: sheaf
cohomology + Chern-Weil + Chern classes are shipped; complex manifold,
holomorphic vector bundle, Hermitian metric / Chern connection, and the
general Dolbeault complex are all gaps shared with the KN-II audit
punch-list. **Part II (harmonic theory + Hodge package)** is **~25%
covered**: the **statement** of the Hodge decomposition ships in
`04.09.01-hodge-decomposition.md` with examples and a proof outline; the
**PDE input** (Ch. 5), the **Kähler identities** (Ch. 6), the
**$\partial\bar\partial$-lemma** (Ch. 6), the **Lefschetz decomposition**
and **hard Lefschetz** and **Hodge-Riemann bilinear relations** (Ch. 7)
are all gaps. The **curve case** is **~80% covered** by the
`06.04.03` + `06.04.05` + `06.06.07` cluster — this is the load-bearing
in-Codex evidence that the Hodge programme on Riemann surfaces is
well-developed, and the gap is for the general-dimensional Kähler case.
**Part III (applications + structure theory)** is **~40% covered**:
**Kodaira vanishing** ships; the **Hodge index theorem** ships; the
**Lefschetz $(1, 1)$-theorem**, **Akizuki-Nakano**, **Kodaira embedding**,
and the general theory of **Hodge structures** and **VHS** are gaps.

**Silent VHCAG-I dependencies in the Babel Bible.** Five shipped units cite
VHCAG-I as a master anchor; in each case the load-bearing structural
fact from Vol I is invoked but not anchored:

1. **`04.09.01-hodge-decomposition.md`** — Master anchor cites Voisin
   Vol I; cites the **Kähler identities**, the **$\partial\bar\partial$-lemma**
   (not by name, but implicitly via the harmonic-form construction), and
   **hard Lefschetz** + **Hodge-Riemann** in the Advanced-results section.
   None of these have dedicated units. `references[].source: TODO_REF`
   for the Voisin citation.
2. **`04.09.02-kodaira-vanishing.md`** — Master anchor cites Voisin
   Vol I §9; the **Akizuki-Nakano-Bochner identity** is the load-bearing
   PDE input to the Kodaira-vanishing proof and is mentioned only in
   passing. `references[].source: TODO_REF` for the Voisin citation.
3. **`04.05.09-hodge-index-theorem.md`** — Master anchor explicitly cites
   "Voisin *Hodge Theory and Complex Algebraic Geometry* I §6.3" with
   `TODO_REF`; the **Hodge-Riemann bilinear relations** and the
   **Lefschetz $(1, 1)$-theorem** are the load-bearing inputs to the
   cohomological Hodge index theorem and have no anchor.
4. **`06.04.03-hodge-decomposition-curves.md`** — Master anchor cites
   Voisin Vol I §5–§6 with `TODO_REF`. The curve case is well-covered
   in-Codex but the upstream general-dim Kähler-package framing is the
   gap.
5. **`06.04.05-dbar-hilbert-pde.md`** — Master anchor cites Voisin
   Vol I §5 with `TODO_REF`. The curve case of the $\bar\partial$ PDE
   is shipped; the general Kähler-manifold version (VHCAG-I Ch. 5 +
   Ch. 9 for $L$-valued forms) is the gap.

Net effect: the existing Codex `04-algebraic-geometry/09-hodge/` chapter
covers ~50% of the relevant material by stating Hodge decomposition + Kodaira
vanishing + Hodge index in self-contained units; the **proof-route**
machinery (PDE foundation, Kähler identities, $\partial\bar\partial$-lemma,
Lefschetz decomposition, hard Lefschetz, Hodge-Riemann) is essentially
**absent** as dedicated units and is only sketched inside the existing
statement-units. The `06-riemann-surfaces/04-cohomology/` chapter
develops the curve case rigorously; the gap is the lift from curves to
general compact Kähler manifolds. The VHCAG-I audit is therefore
**load-bearing across two chapters** — `04-algebraic-geometry/09-hodge/`
(new Kähler-package units) and `03-modern-geometry/02-manifolds/` /
`05-bundles/` (the complex / Kähler differential-geometric prereq layer
shared with the KN-II punch-list).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — prerequisite chain shared with the KN-II audit:**

These are listed here because VHCAG-I assumes them; they are already on
the KN-II punch-list (FT 3.19, priority 1) and the KN-I punch-list
(FT 3.18). Ship once, cite from both audits.

- **`03.02.09` Almost-complex structure (manifold-level)** (KN-II
  punch-list priority 1) — load-bearing for VHCAG-I Ch. 2.
- **`03.02.10` Complex manifold and the Dolbeault complex** (KN-II
  punch-list priority 1) — load-bearing for VHCAG-I Chs. 2–3 and Ch. 5.
- **`03.05.19` Holomorphic vector bundle** (KN-II punch-list priority 1)
  — load-bearing for VHCAG-I Ch. 3 + Ch. 9 ($L$-valued forms in Kodaira
  vanishing).
- **`03.05.20` Hermitian metric on a complex bundle; Chern connection**
  (KN-II punch-list priority 1) — load-bearing for VHCAG-I Ch. 4 + Ch. 9.
- **`03.02.11` Hermitian manifold and the Kähler form** (KN-II
  punch-list priority 1) — load-bearing for VHCAG-I Ch. 6 onwards. This
  is the **central object** of VHCAG-I; without it no Vol-I material
  beyond Part I can be properly stated.
- **`03.02.12` Kähler identities and the Hodge decomposition (Kähler
  version)** (KN-II punch-list priority 1) — load-bearing for VHCAG-I
  Ch. 6 + Ch. 7. The KN-II punch-list ships this as a single unit; the
  Voisin audit recommends splitting it into two for full Vol-I coverage
  (see priority-1 below).

**Priority 1 — Part II / Kähler-package core (PDE foundations + Hodge
decomposition proof + Lefschetz decomposition):**

1. **`04.09.03` PDE foundation: harmonic theory on a compact Riemannian
   manifold.** The Hodge theorem in its real form: on a compact
   Riemannian $(X, g)$, the Laplacian $\Delta = dd^* + d^*d$ is a
   self-adjoint elliptic operator, $\ker \Delta = \mathcal{H}^k(X)$ is
   finite-dimensional, and $\Omega^k(X) = \mathcal{H}^k \oplus d\Omega^{k-1}
   \oplus d^*\Omega^{k+1}$ (the **Hodge orthogonal decomposition**).
   Proof via Gårding's inequality, elliptic regularity, and Fredholm
   theory of self-adjoint elliptic operators on compact manifolds. VHCAG-I
   §5 anchor; Wells §IV secondary; Demailly Ch. VI secondary. ~2000 words.
   Master-tier dominant; Intermediate gives the statement and the use of
   harmonic representatives; Beginner gives the slogan "every cohomology
   class has a unique harmonic representative". **Closes the silent gap
   behind `04.09.01-hodge-decomposition.md` Step 1 + `06.04.05-dbar-hilbert-pde.md`
   (lifts the curve case to the general case).** Originator-prose
   citation: W. V. D. Hodge, *The Theory and Applications of Harmonic
   Integrals* (Cambridge 1941; rigorous PDE proof Weyl 1943, simplified
   Kodaira-Spencer 1953).
2. **`04.09.04` Kähler identities and the Hodge decomposition (general
   compact Kähler manifold; the proof).** This is the Voisin Ch. 6
   centrepiece. The Kähler identities $[\Lambda, \bar\partial] = -i\partial^*$,
   $[\Lambda, \partial] = i\bar\partial^*$; the consequence $\Delta_d =
   2\Delta_\partial = 2\Delta_{\bar\partial}$ on a Kähler manifold; the
   **proof of the Hodge decomposition** $H^k(X; \mathbb{C}) =
   \bigoplus_{p + q = k} H^{p, q}(X)$ on a compact Kähler manifold. The
   Hodge symmetry $\overline{H^{p, q}} = H^{q, p}$ as a corollary. VHCAG-I
   §6 anchor; Griffiths-Harris §0.6–§0.7 secondary; Huybrechts §3.2
   secondary; Demailly Ch. VI secondary. ~2200 words. Master-tier
   dominant. **Sharpens `04.09.01-hodge-decomposition.md` with the full
   differential-geometric proof.** Shared with KN-II punch-list `03.02.12`;
   ship as a Hodge-chapter unit referenced from the KN-II Kähler section.
3. **`04.09.05` $\partial\bar\partial$-lemma.** On a compact Kähler
   manifold, every $d$-exact, $\partial$-closed, $\bar\partial$-closed
   $(p, q)$-form is $\partial\bar\partial$-exact: $\alpha = \partial\bar\partial\beta$
   for some $(p - 1, q - 1)$-form $\beta$. Consequences: formality of
   compact Kähler manifolds (Deligne-Griffiths-Morgan-Sullivan 1975, *Real
   homotopy theory of Kähler manifolds*); independence of the Hodge
   filtration from choice of Kähler metric. VHCAG-I §6.1.5 anchor;
   Griffiths-Harris §0.7 secondary; Huybrechts §3.A secondary;
   Deligne-Griffiths-Morgan-Sullivan 1975 *Invent. Math.* 29 originator
   citation. ~1500 words. Master-tier dominant. **Closes the silent gap
   in `04.09.01-hodge-decomposition.md` and is load-bearing for the
   Lefschetz $(1, 1)$-theorem.**
4. **`04.09.06` Lefschetz operator $L$, dual $\Lambda$, and the
   $\mathfrak{sl}_2$-decomposition.** With $\omega$ the Kähler form on a
   compact Kähler $X$, the Lefschetz operator $L = \omega \wedge$ on
   $\Omega^\bullet(X)$, its adjoint $\Lambda = $ contraction with $\omega$,
   and the counting operator $H = [L, \Lambda]$ form an $\mathfrak{sl}_2$-
   representation on $H^*(X; \mathbb{C})$. The **primitive cohomology**
   $P^k = \ker \Lambda \cap H^k(X)$ (for $k \leq n$) and the **Lefschetz
   decomposition** $H^k = \bigoplus_r L^r P^{k - 2r}$. VHCAG-I §7.1 anchor;
   Griffiths-Harris §0.7 secondary; Demailly Ch. VI secondary. ~1800 words.
   Master-tier dominant; Intermediate gives the statement of the
   $\mathfrak{sl}_2$-action and the primitive decomposition.
5. **`04.09.07` Hard Lefschetz theorem.** On a compact Kähler manifold
   $X$ of complex dimension $n$ with Kähler form $\omega$, the cup-product
   map $L^k : H^{n - k}(X; \mathbb{C}) \xrightarrow{\sim} H^{n + k}(X; \mathbb{C})$
   is an isomorphism for $0 \leq k \leq n$. Proof via the Kähler
   identities + the Lefschetz $\mathfrak{sl}_2$-decomposition (representation-
   theoretic argument from `04.09.06`). VHCAG-I §7.1.2 anchor;
   Griffiths-Harris §0.7 secondary; Huybrechts §3.3 secondary. ~1500
   words. Master-tier dominant; Intermediate gives the statement. **Closes
   the silent gap in `04.09.01-hodge-decomposition.md` Advanced-results
   section.**
6. **`04.09.08` Hodge-Riemann bilinear relations.** For a compact Kähler
   manifold of dimension $n$ with Kähler class $\omega$ and primitive
   cohomology $P^{p, q} = P^k \cap H^{p, q}$ with $p + q = k \leq n$:
   the **first bilinear relation** $Q(\alpha, \beta) = 0$ for
   $\alpha \in P^{p, q}, \beta \in P^{p', q'}$ with $(p, q) \neq (q', p')$;
   the **second bilinear relation** $i^{p - q} (-1)^{k(k-1)/2}
   Q(\alpha, \bar\alpha) > 0$ for $0 \neq \alpha \in P^{p, q}$, where
   $Q(\alpha, \beta) = \int_X \omega^{n - k} \wedge \alpha \wedge \beta$.
   Corollaries: the Hodge index theorem (surface case = `04.05.09`);
   polarised Hodge structures of weight $k$. VHCAG-I §7.1.3 + §7.2 anchor;
   Griffiths-Harris §0.7 secondary; Riemann 1857 *Theorie der Abel'schen
   Functionen* originator citation (the period-relations origin); Hodge
   1941 + Weil 1958 *Variétés Kählériennes* originator citations (the
   higher-dim Kähler synthesis). ~2000 words. Master-tier dominant.
   **Closes the silent gap in `04.05.09-hodge-index-theorem.md` Master
   tier and `04.09.01-hodge-decomposition.md` Advanced-results section.**

**Priority 2 — Part III applications (embedding + vanishing deepening +
Lefschetz $(1, 1)$):**

7. **`04.09.09` Lefschetz $(1, 1)$-theorem.** On a smooth projective
   variety $X$, the cycle-class map $\mathrm{NS}(X) \otimes \mathbb{Q}
   \xrightarrow{\sim} H^{1, 1}(X; \mathbb{Q}) \cap H^2(X; \mathbb{Q})$
   is an isomorphism (Lefschetz 1924). Bridge from algebraic divisors to
   Hodge classes; the $(1, 1)$ case of the Hodge conjecture, which is
   the only fully-proved case. VHCAG-I §11.3 anchor; Griffiths-Harris §1.2
   secondary; Lefschetz 1924 *L'analysis situs et la géométrie algébrique*
   originator citation. ~1500 words. Master-tier dominant. **Closes the
   silent gap in `04.05.09-hodge-index-theorem.md` and provides the bridge
   to Vol II Hodge-conjecture material.**
8. **`04.09.10` Akizuki-Nakano vanishing theorem.** $H^q(X; \Omega^p_X
   \otimes L) = 0$ for $L$ ample on a smooth projective $X$ of dimension
   $n$ and $p + q > n$. Generalises Kodaira vanishing (the $p = n$ case);
   uses the Akizuki-Nakano-Bochner identity on a Kähler manifold. VHCAG-I
   §9 anchor; Akizuki-Nakano 1954 *Proc. Japan Acad.* 30 originator citation
   ("Note on the elliptic character of a sheaf cohomology and proper
   K-extension"). ~1500 words. Master-tier dominant. **Deepens
   `04.09.02-kodaira-vanishing.md`.**
9. **`04.09.11` Kodaira embedding theorem.** A compact Kähler manifold
   $X$ admits a holomorphic embedding into $\mathbb{P}^N$ for some $N$
   iff $X$ carries an integral Kähler class — equivalently, iff $X$
   carries a positive holomorphic line bundle. Bridge from compact
   Kähler manifolds to smooth projective varieties. VHCAG-I §10 anchor;
   Kodaira 1954 *Annals of Math.* 60 originator citation. ~2000 words.
   Three-tier. **High-leverage; ties together the Kähler-manifold theory
   with smooth projective varieties.**

**Priority 3 — Hodge structures formalism (foundation for Vol II
audit):**

10. **`04.09.12` Hodge structure of weight $k$ and polarised Hodge
    structure.** Definition: a $\mathbb{Q}$-Hodge structure of weight $k$
    on a finite-dim $\mathbb{Q}$-vector space $V$ is a decomposition
    $V_{\mathbb{C}} = \bigoplus_{p + q = k} V^{p, q}$ with
    $\overline{V^{p, q}} = V^{q, p}$. Equivalently, a decreasing filtration
    $F^\bullet$ on $V_{\mathbb{C}}$ with $V^{p, q} = F^p \cap \overline{F^q}$.
    **Polarisation:** a $\mathbb{Q}$-bilinear form $Q : V \times V \to
    \mathbb{Q}$ satisfying the Hodge-Riemann bilinear relations. The
    cohomology of a compact Kähler manifold is the motivating example;
    abstract Hodge structures abstract this. VHCAG-I §11 anchor;
    Griffiths-Harris §3.1 secondary; Deligne 1971–72 originator citations
    (the mixed Hodge case, deferred to Vol II audit). ~1800 words.
    Three-tier. **Sets up the Vol II audit.**

**Priority 4 — survey pointers (Master-only, weaving edits to existing
units):**

11. **Pointer in `04.09.01-hodge-decomposition.md`** to the new
    `04.09.03` (PDE foundation), `04.09.04` (Kähler identities + Hodge
    decomposition proof), `04.09.05` ($\partial\bar\partial$-lemma), and
    resolve the Voisin `TODO_REF` to VHCAG-I Ch. 6 with concrete section
    locators. Single-paragraph weaving edit per linked unit; resolves the
    audit-flagged TODO_REF.
12. **Pointer in `04.09.02-kodaira-vanishing.md`** to `04.09.10`
    (Akizuki-Nakano) as the natural generalisation, to the new
    `03.05.20` (Chern connection) as the prerequisite layer, and to
    `04.09.11` (Kodaira embedding) as the application-direction
    companion. Resolve the Voisin `TODO_REF` to VHCAG-I Ch. 9.
13. **Pointer in `04.05.09-hodge-index-theorem.md`** to `04.09.08`
    (Hodge-Riemann) and `04.09.09` (Lefschetz $(1, 1)$) as the
    load-bearing structural inputs. Resolve the Voisin `TODO_REF` to
    VHCAG-I §6.3.
14. **Pointer in `06.04.03-hodge-decomposition-curves.md`** to
    `04.09.04` (general Kähler Hodge decomposition) as the upstream
    framing of which the curve case is the dim-1 specialisation. Resolve
    the Voisin `TODO_REF` to VHCAG-I §5–§6.
15. **Pointer in `06.04.05-dbar-hilbert-pde.md`** to `04.09.03` (general
    PDE foundation) and the new `03.02.10` (Dolbeault complex). Resolve
    the Voisin `TODO_REF` to VHCAG-I §5.
16. **Pointer in `04.09.07` (new hard Lefschetz unit)** to the existing
    `04.05.09-hodge-index-theorem.md` as the surface specialisation
    application of the Hodge-Riemann positivity input.
17. **Pointer in `04.10.01-moduli-of-curves.md`** and `06.08.*` (VHS
    chapter on Riemann surfaces) to `04.09.12` (Hodge structures) as the
    abstract framework. Single-paragraph weaving.

---

## §4 Implementation sketch (P3 → P4)

For a full VHCAG-I coverage pass, priority-0 + priority-1 are the
minimum set and close the Kähler-package proof-route gaps that the
existing Codex statement-units silently depend on. Realistic production
estimate (mirroring earlier KN-I / KN-II / Milnor / Bott-Tu batches):

- ~3.5–4 hours per unit. VHCAG-I units skew above the corpus average
  because the Master tier requires (i) the PDE technical machinery from
  Ch. 5, (ii) the Kähler-identities computation from Ch. 6, and
  (iii) the $\mathfrak{sl}_2$-representation-theoretic bookkeeping from
  Ch. 7 — all of which are not casual material.
- **Priority 0:** 6 units shared with the KN-II + KN-I punch-lists
  (do not double-count); flagged here for prerequisite tracking only.
  Already in those audits' production estimates (~21 hours in the KN-II
  audit).
- **Priority 1:** 6 units × ~4 hours = **~24 hours**. Heart of the
  audit; closes the Kähler-package proof-route gaps across the
  algebraic-geometry Hodge chapter and supplies the upstream framing
  for the Riemann-surface case.
- **Priority 2:** 3 units × ~3.5 hours = **~10.5 hours**. Closes the
  Lefschetz $(1, 1)$, Akizuki-Nakano, and Kodaira embedding gaps; brings
  Part III to FT-equivalence.
- **Priority 3:** 1 unit × ~3.5 hours = **~3.5 hours**. Sets up the
  Vol II audit.
- **Priority 4:** 7 weaving edits × ~30 min = **~3.5 hours**. Resolves
  five `TODO_REF` blocks and connects new units to existing units.
- **Total for full coverage: ~42 hours**, roughly a focused 6–8 day
  window. Priority-0 (carried by the KN-II audit) + priority-1 alone is
  ~24 hours and closes the load-bearing Kähler-package proof-route gaps;
  with priority-2 (~10.5 hours more) Part III reaches FT-equivalence.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **W. V. D. Hodge**, *The Theory and Applications of Harmonic Integrals*
  (Cambridge University Press 1941; 2nd ed. 1952) — originating monograph
  for the harmonic-form approach to cohomology of complex manifolds and
  for the Hodge decomposition itself. **Cite in `04.09.03`** (PDE
  foundation — the Hodge theorem in real form), **`04.09.04`** (Kähler
  Hodge decomposition), and confirm in the existing
  `04.09.01-hodge-decomposition.md` (Historical context already cites it).
- **K. Kodaira**, "On a differential-geometric method in the theory of
  analytic stacks," *Proc. Nat. Acad. Sci. USA* 39 (1953) 1268–1273 —
  originating paper for the Kodaira vanishing theorem. Already cited in
  `04.09.02-kodaira-vanishing.md`.
- **K. Kodaira**, "On Kähler varieties of restricted type," *Annals of
  Math.* 60 (1954) 28–48 — originating paper for the Kodaira embedding
  theorem. **Cite in `04.09.11`** (new Kodaira embedding unit).
- **A. Weil**, *Introduction à l'étude des variétés kählériennes*
  (Actualités Sci. Ind. 1267, Hermann, Paris 1958) — the foundational
  modern systematic monograph on Kähler manifolds, synthesising the Hodge
  / Chern / Kodaira programme. **Cite in `04.09.04`** (Kähler identities
  + Hodge decomposition) and `04.09.08` (Hodge-Riemann bilinear relations).
- **Y. Akizuki, S. Nakano**, "Note on the elliptic character of a sheaf
  cohomology and proper K-extension," *Proc. Japan Acad.* 30 (1954)
  266–272 — originating paper for the Akizuki-Nakano vanishing theorem.
  **Cite in `04.09.10`**.
- **S. Lefschetz**, *L'analysis situs et la géométrie algébrique*
  (Gauthier-Villars, Paris 1924) — originating monograph for the
  Lefschetz $(1, 1)$-theorem and the original (topological / monodromy)
  proof of hard Lefschetz. **Cite in `04.09.07`** (hard Lefschetz) and
  `04.09.09` (Lefschetz $(1, 1)$).
- **P. Deligne, P. Griffiths, J. Morgan, D. Sullivan**, "Real homotopy
  theory of Kähler manifolds," *Invent. Math.* 29 (1975) 245–274 —
  originating paper for formality of compact Kähler manifolds via the
  $\partial\bar\partial$-lemma. **Cite in `04.09.05`** as the canonical
  consequence-of-$\partial\bar\partial$-lemma reference.
- **C. Voisin**, *Hodge Theory and Complex Algebraic Geometry I*
  (Cambridge SAM 76, CUP 2002) — the book itself, as the definitive
  modern systematic English-language treatment. **Cite throughout
  priority-1 + priority-2 units** as the master anchor.
- **Forward pointer to Vol II:** P. Deligne, "Théorie de Hodge I, II, III"
  (ICM 1970; *Publ. Math. IHES* 40 (1971) 5–57; 44 (1974) 5–77) — for
  the mixed Hodge structures programme. Cited as a pointer-only in the
  new `04.09.12` (Hodge structures) unit's "see Voisin Vol II" closing
  note.

**Notation crosswalk.** VHCAG-I uses $L$ for the Lefschetz operator and
$\Lambda$ for its adjoint (the contraction-with-$\omega$ operator); the
Codex `04.09.01-hodge-decomposition.md` already uses these conventions.
VHCAG-I writes $H^{p, q}(X)$ for the Hodge components and $\mathcal{H}^{p, q}$
for harmonic-form representatives; the Babel Bible follows. VHCAG-I uses
$\Omega^p$ ambiguously for both the sheaf of holomorphic $p$-forms and
smooth $(p, 0)$-forms; the Babel Bible unit specs (per `docs/specs/UNIT_SPEC.md`
§11) should consistently write $\Omega^p_X$ for the sheaf and
$\mathcal{A}^{p, q}$ for the sheaf of smooth $(p, q)$-forms. VHCAG-I's
$P^k$ for primitive cohomology is standard. Record these in §Notation
paragraphs of `04.09.04`, `04.09.06`, and `04.09.08`.

---

## §5 What this plan does NOT cover

- **Voisin Vol II** (*Hodge Theory and Complex Algebraic Geometry, II*,
  Cambridge SAM 77, CUP 2003) is deferred to its own audit (Fast Track
  3.27b — not yet on the FT booklist; recommend adding as a sibling
  entry). Vol II covers: mixed Hodge structures (Deligne 1971–74), the
  Hodge conjecture, variations of Hodge structure and the period map
  (Griffiths 1968–72; Schmid 1973), Noether-Lefschetz theory,
  algebraic cycles and the Bloch-Beilinson conjectures, normal functions.
  Vol I priority-3 unit `04.09.12` (Hodge structures) is the **only**
  unit in this audit that touches Vol-II-flavoured material, and it does
  so as setup only.
- **Calabi-Yau / Kähler-Einstein deep theory.** The Calabi conjecture
  (Yau 1977; *Comm. Pure Appl. Math.* 31, 339–411), Aubin's work on the
  negative-curvature case, Tian's stability programme, and the
  Donaldson-Tian-Yau / K-stability theory of Kähler-Einstein metrics on
  Fano manifolds are deferred to a dedicated future audit. VHCAG-I itself
  defers this material to a pointer; the Babel Bible follows. A future
  *Joyce — Compact Manifolds with Special Holonomy* audit or
  *Tian — Canonical Metrics in Kähler Geometry* audit is the natural
  home for the Calabi-Yau / Kähler-Einstein punch-list.
- **The four-manifold / Donaldson / Seiberg-Witten programme.** Connects
  to VHCAG-I's Kähler-package via the Kähler-surface special case but is
  a separate research programme; deferred to a dedicated future audit
  (Donaldson-Kronheimer, *The Geometry of Four-Manifolds*, OUP 1990;
  or Salamon, *Spin Geometry and Seiberg-Witten Invariants*, ETH 2000).
- **A line-number-level inventory of every named theorem in VHCAG-I**
  (full P1 audit; deferred — VHCAG-I is 322 pp. with hundreds of named
  results). The production pass should do this when a local PDF is on
  disk.
- **Exercise-pack production.** VHCAG-I has substantial exercise sections;
  the Babel Bible exercise-pack production is P3-priority-3 follow-up after
  the priority-1 + priority-2 units ship.
- **Saito's mixed Hodge modules and the derived-category Hodge-theoretic
  framework.** Deferred to the Vol II audit + a possible dedicated
  Saito-mixed-Hodge-modules audit.
- **$p$-adic Hodge theory** (Fontaine, Faltings, Tsuji, Scholze) — this
  is a different programme entirely and is **not** in scope for the
  VHCAG-I audit.

---

## §6 Acceptance criteria for FT equivalence (VHCAG-I)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The KN-II priority-1 units have shipped (strict prereq — the
  Kähler-manifold definition and the complex-bundle / Hermitian / Chern-
  connection layer must exist).
- ≥95% of VHCAG-I's named theorems in Chs. 5–10 map to Babel Bible units
  (currently ~25%; after priority-1 units this rises to ~75%; after
  priority-1 + priority-2 to ~90%; full ≥95% requires priority-3 +
  selective priority-4).
- ≥90% of VHCAG-I's worked computations in Chs. 5–10 have a direct unit
  or are referenced from a unit that covers them.
- The five existing `TODO_REF` blocks citing VHCAG-I (in `04.09.01`,
  `04.09.02`, `04.05.09`, `06.04.03`, `06.04.05`) are resolved with
  concrete section locators.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new units to `04-algebraic-geometry/09-hodge/`,
  `06-riemann-surfaces/04-cohomology/`, and `04-algebraic-geometry/05-surfaces/`
  via lateral connections.

The 6 priority-1 units close most of the equivalence gap given the
KN-II prereqs are in place. Priority-2 closes Part III (Lefschetz $(1, 1)$
+ Akizuki-Nakano + Kodaira embedding). Priority-3 sets up the Vol II audit.
Priority-4 are weaving edits.

---

## §7 Sourcing

- **Local copy.** Not available in `reference/textbooks-extra/` or
  `reference/fasttrack-texts/03-modern-geometry/` as of 2026-05-18.
  VHCAG-I is under active CUP / SMF copyright and was not retrieved
  within the time budget. Recommend obtaining a copy (BUY per FT booklist
  entry 3.27) before the production pass; add to
  `reference/textbooks-extra/` as
  `Voisin-HodgeTheoryAndComplexAlgebraicGeometry-Volume-I.pdf` when
  available.
- **Translation note.** The English edition (Schneps translation, CUP 2002)
  is the canonical Codex reference; the French original (*Théorie de
  Hodge et géométrie algébrique complexe*, Cours Spécialisés 10, SMF 2002)
  is contemporaneous and content-equivalent. Cite the English edition by
  default.
- **License.** Under active CUP copyright. For educational use cite as
  C. Voisin, *Hodge Theory and Complex Algebraic Geometry I*
  (translated by L. Schneps), Cambridge Studies in Advanced Mathematics
  76, Cambridge University Press 2002.
- **Peer-source fallbacks for the production pass when the local PDF is
  delayed:**
  - D. Huybrechts, *Complex Geometry: An Introduction* (Universitext,
    Springer 2005) — most accessible parallel; Chs. 2–5 cover
    essentially the same material at a slightly less dense pace.
  - R. O. Wells, *Differential Analysis on Complex Manifolds* (GTM 65,
    Springer 3rd ed. 2008, with appendix by O. García-Prada) — classical
    hard-analysis parallel; Chs. I–V.
  - P. Griffiths, J. Harris, *Principles of Algebraic Geometry* (Wiley
    1978; reprinted Wiley Classics 1994) — classical algebraic-geometry-
    flavoured parallel; Chs. 0–1.
  - J.-P. Demailly, *Complex Analytic and Differential Geometry*
    (OpenContent monograph, current online edition at
    <https://www-fourier.ujf-grenoble.fr/~demailly/manuscripts/agbook.pdf>)
    — encyclopedic PDE-rigorous parallel; Chs. VI–X. **Free.** Strongest
    free fallback for the harmonic-theoretic / PDE / Bochner-Kodaira-
    Nakano material.

---

**Audit mode flag.** This plan was produced in **REDUCED** mode (no local
PDF). Production-pass agents should treat the priority-1 + priority-2
section locators (VHCAG-I §5, §6, §7.1.2, §7.1.3, §9, §10, §11.3) as
canonical-but-unverified and confirm against the local PDF when
available. The TOC-level structure used here is well-attested across
Huybrechts, Wells, Griffiths-Harris, and Demailly, but exact section
numbering within VHCAG-I should be verified at production time.
