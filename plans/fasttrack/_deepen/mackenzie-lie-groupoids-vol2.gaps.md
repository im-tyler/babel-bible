# Deepening gaps — Mackenzie, *General Theory of Lie Groupoids and Lie Algebroids* (FT 1.09, vol 2)

**Slug:** `mackenzie-lie-groupoids-vol2`
**Book:** Kirill C. H. Mackenzie, *General Theory of Lie Groupoids and Lie
Algebroids*. London Mathematical Society Lecture Note Series 213, Cambridge
University Press 2005. xxxviii + 501 pp. ISBN 978-0-521-49928-6. The
comprehensive 2005 sequel to the 1987 LMS LNS 124 monograph (FT 1.08), which
broadens scope from the transitive case to (a) the general non-transitive
theory, (b) the integrability theory (Crainic-Fernandes / monodromy), (c)
Poisson groupoids and Lie bialgebroids with Mackenzie-Xu duality, and (d)
double Lie groupoids, double Lie algebroids, LA-groupoids and VB-groupoids.
**Date:** 2026-06-04
**Method:** First audit of FT 1.09. Per the new-audit brief, treated as a
deepening pass: assume covered until proven absent. Cross-read the already-
shipped vol-1 audit (`plans/fasttrack/mackenzie-lie-groupoids-vol1.md`) and its
deepen file (`mackenzie-lie-groupoids-vol1.gaps.md`), which shipped the entire
groupoid/algebroid foundation (`03.03.10-13`, `03.04.16-19`, `03.04.22-23`,
`03.05.21-23`) and explicitly handed off the **post-1987** double-structure and
bialgebroid material to this vol-2 audit. Grep-verified every vol-2 headline
against the live corpus before calling anything a gap.

## Headline

The vol-2-distinctive content splits into four strands, of which **two are now
fully covered** and **two are genuinely absent**:

1. **Integrability (Crainic-Fernandes / monodromy)** — COVERED in depth.
   `03.04.18` proves the Crainic-Fernandes criterion with the Weinstein
   groupoid $\mathcal G(A)$, $A$-paths, $A$-homotopy, and the monodromy groups
   $\mathcal N_x(A)\subseteq Z(\mathfrak g_x)$, full proof. The vol-1 deepen
   already wove this in.
2. **Symplectic groupoids / Poisson integrability** — COVERED in depth.
   `03.04.19` builds the cotangent algebroid, defines the symplectic groupoid
   (multiplicative form, Lagrangian graph), and proves the integrability
   equivalence (Weinstein / Coste-Dazord-Weinstein / Karasev / Cattaneo-Felder
   / Crainic-Fernandes 2004), full proof.
3. **Poisson groupoids and Lie bialgebroids (Mackenzie-Xu duality)** — ABSENT.
   `grep -rliE "Lie bialgebroid|Poisson groupoid|Mackenzie.{0,3}Xu|cobracket|Poisson.?Lie group"`
   over `content/` returns **nothing** relevant (the only `Lie bialgebra` hit is
   Etingof-Kazhdan quantisation inside the HKR unit `04.03.21`, a quantum-algebra
   context, not the geometric bialgebroid theory; all `matched pair` hits are
   unrelated). **GAP 1.**
4. **Double Lie groupoids / double Lie algebroids / VB-(al)gebroids** — ABSENT.
   `grep -rliE "double Lie groupoid|double Lie algebroid|LA-groupoid|VB-groupoid|double vector bundle"`
   returns **nothing** except a single one-line VB-algebroid *pointer*
   (Gracia-Saz-Mehta) inside `03.04.23`. **GAP 2.**

After verification the book is the **least-covered of the two Mackenzie volumes
on its distinctive strands**, but only because **the entire 1987 foundation plus
the two post-1987 strands that touch Poisson/integrability are already shipped**.
The residual is **2 genuine gaps**, both load-bearing vol-2 chapters (the
Mackenzie-Xu duality theory and the double-structure theory) with no equivalent
anywhere in the corpus.

---

## Genuine gaps (2)

### GAP 1 — Lie bialgebroids and Poisson groupoids: the Mackenzie-Xu duality

- **proposed id:** `03.04.24`  (free; `03.04` occupied through `.23`)
- **title:** Lie bialgebroids and Poisson groupoids: the Mackenzie-Xu duality
- **spec:** Define a **Lie bialgebroid** $(A, A^*)$ as a pair of Lie algebroids
  in duality whose differentials are compatible (the Drinfeld double / Courant
  condition: $d_{A^*}$ is a derivation of $[\,,\,]_A$, equivalently the big
  bracket on $\Lambda^\bullet(A\oplus A^*)$ squares to zero). Recover the rank-0
  base case (**Lie bialgebra** $(\mathfrak g,\mathfrak g^*)$, Poisson-Lie group)
  and the cotangent case (**$(TM, T^*M)$ of a Poisson manifold**, bridging
  `03.04.19`). State **Mackenzie-Xu's theorem**: the Lie algebroid $A$ of a
  **Poisson groupoid** $(\mathcal G\rightrightarrows M, \pi)$ — a Lie groupoid
  with a multiplicative Poisson tensor — and its dual $A^*$ form a Lie
  bialgebroid, and conversely an integrable Lie bialgebroid integrates to a
  Poisson groupoid; the symplectic groupoid of `03.04.19` is the non-degenerate
  special case. Master tier: the **Courant algebroid** $A\oplus A^*$ of a Lie
  bialgebroid (Liu-Weinstein-Xu) as the obstruction-carrying double; pointer to
  the modular class of the bialgebroid.
- **prereqs:** `03.04.16` (Lie algebroid) [verified]; `03.04.19` (cotangent
  algebroid of a Poisson manifold, the motivating case + symplectic-groupoid
  bridge) [verified]; `03.04.22` (Lie algebroid cohomology / $d_A$, for the
  compatibility differential) [verified]; `05.02.02` (Poisson bracket /
  manifold) [verified]; `03.03.10` (Lie groupoid, for "multiplicative tensor")
  [verified].
- **chapter dir:** `content/03-modern-geometry/04-differential-forms/`;
  frontmatter `chapter: differential-forms`, section 03.04.
- **why genuine:** the single most-cited contribution distinctive to vol 2 over
  vol 1; Mackenzie 2005 Part III. The corpus has the cotangent algebroid and the
  symplectic groupoid (`03.04.19`) but never the **duality** $(A,A^*)$, the
  **Poisson** (as opposed to symplectic) **groupoid**, or the **Lie bialgebroid**
  compatibility condition. No `Poisson groupoid` / `Lie bialgebroid` / `cobracket`
  / `Poisson-Lie group` hit anywhere in `content/`. High-value, foundational,
  absent.

### GAP 2 — Double Lie groupoids, double Lie algebroids, and VB-groupoids

- **proposed id:** `03.04.25`  (free)
- **title:** Double Lie groupoids, double Lie algebroids, and VB-groupoids
- **spec:** Introduce the double-structure theory underpinning the
  Mackenzie-Xu duality. Define a **double Lie groupoid** as a groupoid object in
  the category of Lie groupoids (a square with two horizontal and two vertical
  groupoid structures, the canonical example being the **pair / cotangent
  double** $T^*\mathcal G$ of a Poisson groupoid). Define a **VB-groupoid** (a
  vector-bundle object in Lie groupoids; e.g. $TA \to A$, $T\mathcal G \to
  \mathcal G$) and a **VB-algebroid**, and a **double Lie algebroid** as the
  result of applying the Lie functor twice. State the **double Lie functor**: a
  double Lie groupoid differentiates (in either direction) to an **LA-groupoid**,
  and an LA-groupoid differentiates to a double Lie algebroid; the **cotangent
  double** $T^*A \cong T^*A^*$ is the geometric source of the $(A,A^*)$ duality
  of GAP 1 (Mackenzie's $\mathcal R$ / "duality of double vector bundles").
  Master tier: the matched-pair description of a double structure; the
  **tangent and cotangent doubles of a Poisson groupoid** as the bridge that
  makes the Mackenzie-Xu theorem a statement about double structures.
- **prereqs:** `03.04.16` (Lie algebroid) [verified]; `03.04.17` (Lie functor)
  [verified]; `03.03.10` (Lie groupoid) [verified]; `03.04.24` (Lie
  bialgebroids / Poisson groupoids — the application these doubles serve)
  [proposed above]; `03.05.22` (Atiyah algebroid, an example of a transitive
  VB-algebroid setting) [verified].
- **chapter dir:** `content/03-modern-geometry/04-differential-forms/`;
  frontmatter `chapter: differential-forms`, section 03.04.
- **why genuine:** Mackenzie 2005 Parts I-II (Chs. 9-11) — the double-category
  apparatus that is the technical heart of the 2005 book and the reason it is
  three times the length of the 1987 volume. The corpus has **only** a single
  one-line VB-algebroid pointer (Gracia-Saz-Mehta) inside `03.04.23`; no double
  Lie groupoid, double Lie algebroid, LA-groupoid, VB-groupoid, or double vector
  bundle is defined anywhere. Standalone construction; absent. (Scope-trimmed to
  one consolidating unit rather than four: the full Chs. 9-11 apparatus is a
  large technical machine, and a single Master-tier unit that defines the
  objects and states the double Lie functor + cotangent-double bridge is the
  right curriculum altitude — the finer VB-algebroid superconnection theory is
  research-frontier and parked.)

---

## COVERED (not gaps) — verified due diligence

The two vol-2 strands that overlap Poisson/integrability geometry were shipped
during the vol-1 production wave and verified here by filename + body grep:

- **Crainic-Fernandes integrability theorem; Weinstein groupoid $\mathcal G(A)$;
  $A$-paths and $A$-homotopy; monodromy groups $\mathcal N_x(A)\subseteq
  Z(\mathfrak g_x)$; the local-uniform-discreteness criterion; Almeida-Molino
  non-integrable counterexample; Lie I/III for algebroids** — COVERED
  `03.04.18-pradines-integration-and-transitive-integrability.md` (full theorem
  + proof). This is the headline "Weinstein's problem / Crainic-Fernandes
  obstruction / monodromy" item from the brief.
- **Symplectic groupoid (multiplicative symplectic form, Lagrangian graph in
  $\Sigma\times\Sigma\times\bar\Sigma$); integrability of a Poisson manifold =
  integrability of $T^*M$; Weinstein 1987 / Coste-Dazord-Weinstein / Karasev /
  Cattaneo-Felder construction; Crainic-Fernandes 2004 Poisson criterion** —
  COVERED `03.04.19-cotangent-algebroid-of-a-poisson-manifold.md` (definition,
  integrability equivalence, full proof).
- **Cotangent Lie algebroid $T^*M$ of a Poisson manifold (anchor $\pi^\sharp$,
  Koszul bracket); symplectic foliation; linear Poisson on $\mathfrak g^*$** —
  COVERED `03.04.19`.
- **Transitive case + Atiyah sequence $0\to\mathrm{ad}(P)\to\mathrm{At}(P)\to
  TM\to 0$; transitive integrability** — COVERED `03.05.22` +
  `03.04.16` + `03.04.18` (the brief flagged this as "likely covered"; it is).
- **Connection theory in the groupoid setting (connection as splitting of the
  Atiyah algebroid; algebroid curvature $R_\gamma=[\gamma X,\gamma Y]-\gamma
  [X,Y]$; flat = bracket homomorphism; dictionary to KN-I $\omega,\Omega$)** —
  COVERED `03.05.23-connection-as-splitting-of-the-atiyah-algebroid.md` +
  `03.05.21`.
- **Lie algebroid cohomology / Chevalley-Eilenberg $d_A$; van Est map; modular
  class (pointer) in $H^1(A)$** — COVERED `03.04.22-lie-algebroid-cohomology-and-
  the-chevalley-eilenberg-differential.md` (modular class is a deliberate
  pointer; the brief did not list a standalone modular-class unit and Mackenzie
  treats it lightly).
- **Representations of Lie algebroids; flat $A$-connections; Poisson modules;
  secondary characteristic classes; representations up to homotopy (pointer);
  VB-algebroid superconnection picture (one-line pointer)** — COVERED
  `03.04.23-representations-of-a-lie-algebroid-and-flat-a-connections.md`.
- **Lie groupoid foundation (source/target/units, smooth composition, source
  fibre as submanifold); pair / action / fundamental groupoids; gauge groupoid
  $(P\times P)/G$ + Mackenzie structural classification; bisection group;
  groupoid as small category** — COVERED `03.03.10`, `03.03.11`, `03.03.12`,
  `03.03.13`, `03.05.21` (the entire 1987 foundation, already shipped per the
  vol-1 deepen).
- **Lie functor $\mathcal G\mapsto A(\mathcal G)$; $A(M\times M)=TM$,
  $A(G\ltimes M)=\mathfrak g\ltimes M$, $A((P\times P)/G)=\mathrm{At}(P)$** —
  COVERED `03.04.17` + `03.04.16`.
- **Poisson bracket / Poisson manifold; coadjoint orbit; symplectic manifold** —
  COVERED `05.02.02`, `05.03.01`, `05.01.02`.

---

## OUT OF SCOPE

- **Full four-unit double-vector-bundle / VB-algebroid superconnection
  apparatus** (Mackenzie 2005 Chs. 9-11 in their entirety, incl. the
  Gracia-Saz-Mehta superconnection theory and the duality of double vector
  bundles at full generality). Research-frontier technical machinery with the
  theorem-level payoff (the cotangent double and the double Lie functor) already
  captured by the single consolidating GAP 2 unit; expanding to four units would
  be gold-plating a 200-page apparatus beyond curriculum altitude.
- **Courant algebroids as a standalone development** (Dirac structures,
  generalised complex geometry, the Courant bracket and its Jacobiator). Touched
  as a Master-tier pointer inside GAP 1 ($A\oplus A^*$ of a bialgebroid). A full
  Courant-algebroid / generalised-geometry chapter is a separate research
  programme (Hitchin-Gualtieri) only marginally inside Mackenzie 2005's remit and
  is not a vol-2-distinctive gap.
- **Modular class as a standalone unit.** Mackenzie treats it lightly; it is
  already a pointer in `03.04.22`/`03.04.23`. Not proposed.

---

## Report

- **Genuine gaps:** 2 (`03.04.24` Lie bialgebroids + Poisson groupoids /
  Mackenzie-Xu duality; `03.04.25` double Lie groupoids, double Lie algebroids,
  VB-groupoids).
- **COVERED-verified topics:** 10 topic clusters (including the two big vol-2
  strands — Crainic-Fernandes integrability and symplectic groupoids / Poisson
  integrability — confirmed shipped with full proofs, plus the entire 1987
  foundation).
- **OUT-OF-SCOPE:** 3 (full VB-algebroid superconnection apparatus; standalone
  Courant-algebroid / generalised-geometry chapter; standalone modular-class
  unit).
- **Gap file:** `plans/fasttrack/_deepen/mackenzie-lie-groupoids-vol2.gaps.md`
