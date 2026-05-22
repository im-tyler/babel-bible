# Hirzebruch, Berger, Jung — *Manifolds and Modular Forms* (Fast Track 3.26) — Audit + Gap Plan

**Book:** Friedrich Hirzebruch, Thomas Berger, Rainer Jung,
*Manifolds and Modular Forms* (Aspects of Mathematics, Vol. E20,
Vieweg / Friedr. Vieweg & Sohn, Braunschweig 1992; English edition
translated by P. S. Landweber from the 1992 German lectures held at the
Max-Planck-Institut für Mathematik, Bonn). xii + 211 pp. ISBN
3-528-06414-5. Appendix I by Nils-Peter Skoruppa, Appendix II by
Paul Baum. The volume is the published version of Hirzebruch's
1987–88 / 1988 Bonn lecture course on elliptic genera and modular forms.

**Fast Track entry:** 3.26. Direct sequel to FT 3.25 (Hirzebruch,
*Topological Methods in Algebraic Geometry*). Algebraic-Geometry strand
crossing the Characteristic-Class strand (FT 3.08 Milnor-Stasheff), the
spin-geometry / index-theory strand (FT 3.10 Lawson-Michelsohn,
FT 3.11 Atiyah), and a *new* number-theory / modular-forms strand not
covered by any currently audited Fast Track book.

**Source PDF:** **NOT in `reference/textbooks-extra/`** as of 2026-05-18.
Springer / Vieweg Aspects-of-Mathematics page redirects to authenticated
SSO. Ranicki's archive at
`webhomes.maths.ed.ac.uk/~v1ranick/papers/` does not host this title
(confirmed by WebFetch 2026-05-18; `hirzmod.pdf` returns 404). Anna's
Archive / library-genesis copies exist but were not exercised here per
license caution; cite by ISBN.

This audit works from (i) the well-documented standard structure of the
book — eight numbered Bonn lectures + Appendices I (Skoruppa, modular
forms) and II (Baum, Dirac operators / elliptic genera) — (ii) the four
cited peer sources in §1, (iii) the sibling Hirzebruch *Topological
Methods* audit (`hirzebruch-topological-methods.md`), and (iv) the
Milnor-Stasheff and Lawson-Michelsohn audits whose multiplicative-
sequence and Dirac-operator content is the **shared substrate** with
this plan.

**Audit type:** P1-lite + P2 gap pass + P3-lite punch-list, mirroring
`brown-higgins-sivera-nonabelian-algebraic-topology.md`,
`hirzebruch-topological-methods.md`, and
`milnor-stasheff-characteristic-classes.md`. Not a line-number P1
inventory.

**Plan status:** `reduced` — single audit pass over book structure
without a full line-number P1 inventory (PDF not locally accessible;
1992 monograph). Sufficient to drive the production punch-list to
FT-equivalence. Full P1 deferred to a focused PDF-access pass.

---

## §1 What *Manifolds and Modular Forms* is for

Hirzebruch–Berger–Jung's *Manifolds and Modular Forms* is the **canonical
exposition** of the **elliptic genus** programme. Where Hirzebruch's 1956
*Topological Methods* (FT 3.25) showed that the $L$-genus and Todd-genus
are multiplicative sequences attached to specific formal power series
$Q(x)$ and identified the signature, $\hat A$-genus, and arithmetic
genus as such, the present book extends the formalism one decisive step
further: it allows the power series $Q(x)$ to be **a modular form** — or
more precisely, the logarithm of $Q(x)$ to be expressible via the
Weierstrass $\wp$-function / Jacobi theta functions on an elliptic
curve. The resulting genus takes values in a **ring of modular forms**
rather than in $\mathbb{Q}$, and recovers the signature and the
$\hat A$-genus in the two cuspidal limits.

This is the originating-style monograph for: the
**Ochanine elliptic genus** $\varphi_{\mathrm{Och}}$ (the level-2 elliptic
genus, valued in modular forms for $\Gamma_0(2) \subset \mathrm{SL}_2(\mathbb{Z})$);
the **Witten genus** $\varphi_W$ (the level-1 elliptic genus on
string manifolds, with the loop-space / sigma-model interpretation);
the **Bott-Taubes rigidity theorem** (for spin manifolds with $S^1$-action,
the equivariant elliptic genus is rigid — constant in the equivariant
parameter); and the **modularity** of these genera, the key feature that
distinguishes them from all previously known characteristic-class genera.

Hirzebruch frames the project as the convergence of three lines:

(a) **Topology / characteristic classes:** the multiplicative-sequence
machinery of *Topological Methods* extended to take values in graded
rings of modular forms.

(b) **Number theory / modular forms:** the classical theory of
$\mathrm{SL}_2(\mathbb{Z})$, congruence subgroups $\Gamma_0(N)$ and
$\Gamma(N)$, holomorphic modular forms of weight $k$, Eisenstein series,
Jacobi forms, and the explicit examples (the elliptic genus is determined
by its values on $\mathbb{HP}^n$ in the spin case and by the modular
"level-$N$" condition).

(c) **Mathematical physics (Witten heuristic):** the elliptic genus is
the partition function of a two-dimensional supersymmetric sigma model
whose target is the manifold $M$; equivalently, an index-theoretic
formula on the *loop space* $\mathcal{L}M = \mathrm{Map}(S^1, M)$.
The rigidity theorem is then "explained" as $S^1$-equivariance of the
sigma-model partition function.

Distinctive contributions, in roughly the order the eight Bonn lectures
develop them:

1. **Lecture 1: Background on characteristic classes and genera.**
   Recap of *Topological Methods*: multiplicative sequences, signature
   theorem, $\hat A$-genus, $\mathrm{ch}$ and $\mathrm{td}$. Sets the
   stage by exhibiting all three classical genera as values of the
   characteristic-class machine at specific formal power series.

2. **Lecture 2: Modular forms (basics).** Lattices, the modular group
   $\mathrm{SL}_2(\mathbb{Z})$, the upper half-plane $\mathbb{H}$ as
   moduli of complex elliptic curves with chosen basis, congruence
   subgroups $\Gamma_0(N)$ and $\Gamma(N)$, level-$N$ structures.
   Modular forms of weight $k$ for $\Gamma$, the ring
   $M_*(\Gamma)$, Eisenstein series $E_{2k}$, cusps and cusp forms,
   the discriminant $\Delta$.

3. **Lecture 3: Elliptic curves and the Weierstrass $\wp$-function.**
   $\wp(z; \tau) = z^{-2} + \sum_{\omega \neq 0} [(z-\omega)^{-2} -
   \omega^{-2}]$. Jacobi theta functions $\theta_1, \theta_2, \theta_3,
   \theta_4$. The Weierstrass equation $y^2 = 4x^3 - g_2 x - g_3$.
   These are the building blocks of the elliptic-genus power series.

4. **Lecture 4: The Ochanine elliptic genus** $\varphi_{\mathrm{Och}}$.
   Definition via the formal power series $Q(x) = (x/2)/\sinh(x/2)
   \cdot \prod_n \big[(1-q^n)^2 / (1-q^n e^x)(1-q^n e^{-x})\big]$, or
   equivalently via the Jacobi theta function $\theta_1$. Multiplicativity,
   normalisation, and the theorem (Ochanine 1987) that
   $\varphi_{\mathrm{Och}}(M) \in M_*(\Gamma_0(2))$ for $M$ closed spin
   oriented $4k$-manifold — the level-2 elliptic genus takes values
   in modular forms for $\Gamma_0(2)$.

5. **Lecture 5: The Witten genus** $\varphi_W$. The level-1 specialisation;
   defined on **string manifolds** (manifolds with $\frac{p_1}{2} = 0$);
   values in $M_*(\mathrm{SL}_2(\mathbb{Z}))$. Connection to the formal
   group law of $E_*$ elliptic cohomology in the cuspidal limit
   $q \to 0$: $\varphi_W \to \hat A$.

6. **Lecture 6: Modularity and integrality.** Statement and proof
   sketch of the modularity theorem (Hirzebruch, Zagier, Landweber-Stong):
   $\varphi_{\mathrm{Och}}$ is a modular form for $\Gamma_0(2)$ of weight
   $2k$. Integrality of $q$-expansion coefficients on spin manifolds.
   Cuspidal limits: at $\tau = i\infty$, $\varphi_{\mathrm{Och}} \to
   \hat A$; at $\tau = 0$, $\varphi_{\mathrm{Och}} \to L$ (signature).
   **This is the central topological-meets-number-theory result of the
   book.**

7. **Lecture 7: Equivariant elliptic genus and the Bott-Taubes rigidity
   theorem.** For a closed spin manifold $M^{4k}$ with $S^1$-action, the
   $S^1$-equivariant elliptic genus
   $\varphi_{\mathrm{Och}}^{S^1}(M) \in R(S^1) \otimes M_*(\Gamma_0(2))$
   is **rigid**: it is independent of the $S^1$-action parameter. This
   is the Atiyah-Hirzebruch-style fixed-point computation extended to
   modular-form values. Originator-citation: Bott-Taubes 1989, "On the
   rigidity theorems of Witten," *J. Amer. Math. Soc.* 2 (1989), 137–186,
   following Witten's 1987 conjecture.

8. **Lecture 8: Witten heuristic — Dirac operator on loop space.**
   The genus $\varphi_W(M)$ is formally the equivariant index of a Dirac
   operator on the free loop space $\mathcal{L}M$ with respect to the
   natural $S^1$-action by loop rotation. Localization to constant loops
   recovers $\hat A(M) \cdot \prod_n (1 + q^n \cdots)$ — the
   characteristic power series of $\varphi_W$. This is **not** a
   rigorous theorem (the loop-space index has no rigorous Atiyah-Singer
   foundation as of 1992) but the heuristic motivating the entire
   programme. Originator-citation: Witten 1987 "The index of the Dirac
   operator in loop space," *LNM* 1326 (1988), 161–181.

9. **Appendix I (Skoruppa): Modular forms — more.** Self-contained
   second pass on modular forms, Eisenstein series, $\eta$-function,
   Hecke operators, and the explicit ring structure of
   $M_*(\Gamma_0(2)) = \mathbb{C}[\delta, \epsilon]$ used in the genus
   computations.

10. **Appendix II (Baum): Dirac operator and characteristic classes.**
    Concise treatment of the analytic side: spin manifolds, Dirac
    operator $\not\!\!D$, Atiyah-Singer index $\mathrm{ind}(\not\!\!D)
    = \hat A(M)$, and the twisted-Dirac formulation
    $\mathrm{ind}(\not\!\!D \otimes E) = \hat A(M) \cdot \mathrm{ch}(E)$
    used to build the elliptic genus as the index of the Dirac operator
    twisted by a formal sum of symmetric / exterior powers of the tangent
    bundle.

The book is **not** a first text on characteristic classes (Milnor-Stasheff,
Bott-Tu, Hirzebruch 1956 are the first texts) and **not** a first text
on modular forms (Serre's *Cours d'arithmétique* Ch. VII, Koblitz
*Introduction to Elliptic Curves and Modular Forms* are first texts).
It is the canonical text at the **meeting point** of those two strands
— the place where one learns how characteristic classes can take values
in modular forms and how this expands the index-theory programme.

**Peer cross-references** (four cited peer sources used in this audit):

- **Ochanine, S., "Sur les genres multiplicatifs définis par des
  intégrales elliptiques,"** *Topology* 26 (1987), 143–151. **The
  originating paper of the elliptic genus.** Defines $\varphi_{\mathrm{Och}}$
  via the formal power series associated to an elliptic integral, proves
  multiplicativity, and announces the modularity. Hirzebruch–Berger–Jung
  is the textbook redaction of this paper plus the subsequent
  developments. **Originator citation for the entire programme.**

- **Witten, E., "The index of the Dirac operator in loop space,"**
  in *Elliptic Curves and Modular Forms in Algebraic Topology*
  (P. S. Landweber, ed.), Lecture Notes in Math. 1326, Springer 1988,
  161–181. The Witten heuristic: $\varphi_W = \mathrm{ind}_{S^1}(\not\!\!D_{\mathcal{L}M})$.
  Also: Witten, E., "Elliptic genera and quantum field theory,"
  *Comm. Math. Phys.* 109 (1987), 525–536 — the physics-side companion
  identifying $\varphi_{\mathrm{Och}}$ with a 2-D sigma-model partition
  function. **Originator citation for the loop-space / physics heuristic.**

- **Bott, R. & Taubes, C., "On the rigidity theorems of Witten,"**
  *J. Amer. Math. Soc.* 2 (1989), 137–186. **The rigidity theorem.**
  For $M^{4k}$ closed spin with $S^1$-action, the equivariant elliptic
  genus $\varphi^{S^1}_{\mathrm{Och}}(M, q)$ is constant in the
  $S^1$-parameter $t$. The Atiyah-Bott / Atiyah-Singer fixed-point
  formula plus a careful modular-form argument identifies the
  equivariant genus with a modular form of the right weight whose only
  pole is forbidden by holomorphicity. **Originator citation for Lecture
  7.** Simplified later by Liu (below).

- **Liu, K., "On modular invariance and rigidity theorems,"**
  *J. Differential Geom.* 41 (1995), 343–396. Gives a clean
  modular-invariance-based proof of Bott-Taubes rigidity, recovering and
  extending the original argument via Jacobi-form modular transformations.
  **The modern reference for the rigidity proof.** Also: Liu, "Modular
  invariance and characteristic numbers," *Comm. Math. Phys.* 174
  (1995), 29–42.

- **Segal, G. B., "Elliptic cohomology,"** *Séminaire Bourbaki*
  Exposé 695, *Astérisque* 161–162 (1988), 187–201. The
  **elliptic-cohomology** programme: Segal proposes that the
  Ochanine / Witten genera are the genera attached to a generalised
  cohomology theory $\mathrm{Ell}^*(-)$ whose coefficient ring is a ring
  of modular forms — formalising the genus into a homotopy-theoretic
  invariant. **Originator citation for the elliptic-cohomology arc.**
  Made rigorous by Landweber-Ravenel-Stong (next entry).

- **Landweber, P. S., Ravenel, D. C. & Stong, R. E., "Periodic
  cohomology theories defined by elliptic curves,"** *Contemp. Math.*
  181 (1995), 317–337 (continuation of Landweber 1988, "Elliptic
  cohomology and modular forms," *LNM* 1326). Construct elliptic
  cohomology rigorously as a Landweber-exact functor on $\mathrm{MU}_*$.
  **Originator citation for elliptic cohomology** as a generalised
  cohomology theory.

Two additional originator-prose anchors (cited in §4):

- **Atiyah, M. F. & Singer, I. M.** — the Atiyah-Singer index theorem
  framework on which the rigorous (non-loop-space) side of the
  elliptic genus is built. Already shipped in Babel Bible `03.09.10`.

- **Hirzebruch, F.,** *Topological Methods in Algebraic Geometry*
  (FT 3.25). Strict prerequisite for the multiplicative-sequence
  machinery of Lectures 1, 4, 5. Coordinate with
  `plans/fasttrack/hirzebruch-topological-methods.md` audit.

---

## §2 Coverage table (Babel Bible vs *Manifolds and Modular Forms*)

Cross-referenced against the current 313-unit Babel Bible. Relevant areas:
`03-modern-geometry/06-characteristic-classes/` (4 shipped units),
`03-modern-geometry/08-k-theory/` (7 shipped units),
`03-modern-geometry/09-spin-geometry/` (22 shipped units including the
Atiyah-Singer index theorem `03.09.10` and family-equivariant index
`03.09.21`), `04-algebraic-geometry/04-curves/04.04.03-elliptic-curves.md`,
and the Riemann-surfaces theta-function unit
`06-riemann-surfaces/06-jacobians/06.06.05-theta-function.md`.

✓ = covered, △ = partial / different framing, ✗ = not covered.

| H-B-J topic | Lecture / App | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| Multiplicative sequences (recap from FT 3.25) | L1 | — | ✗ | **Gap.** Already on Hirzebruch (3.25) plan as shared Priority-1 unit `03.06.15` and on Milnor-Stasheff plan as Priority-3. **Shared / blocked by sibling.** |
| Signature, $L$-genus, $\hat A$-genus, Todd genus (recap) | L1 | partial | △ | Named throughout `03.06.04`, `03.09.10`, `04.05.08`. Standalone definitional unit is the shared `03.06.15`. **Shared with FT 3.25 plan.** |
| Chern character $\mathrm{ch}$, Todd $\mathrm{td}$ — twisted Dirac index | L1, App II | partial | △ | Twisted index $\hat A \cdot \mathrm{ch}(E)$ stated in `03.09.10`; Chern character standalone unit is on the FT 3.25 plan as Priority-1 unit `03.06.18`. **Shared.** |
| Modular group $\mathrm{SL}_2(\mathbb{Z})$ action on $\mathbb{H}$ | L2 | partial | △ | Möbius-transformation generalities in `06.01.08-mobius-transformations`; no unit framing $\mathrm{SL}_2(\mathbb{Z}) \curvearrowright \mathbb{H}$ as moduli of elliptic curves. **Gap.** |
| Congruence subgroups $\Gamma_0(N)$, $\Gamma(N)$; level structure | L2 | — | ✗ | **Gap (foundational for the modular-form side).** |
| Modular forms of weight $k$; ring $M_*(\Gamma)$ | L2 | — | ✗ | **Gap (foundational — no current Babel Bible unit on modular forms).** |
| Eisenstein series $E_{2k}$; discriminant $\Delta$ | L2 | — | ✗ | **Gap.** |
| Cusps, cusp forms, $q$-expansion | L2 | — | ✗ | **Gap.** |
| Weierstrass $\wp$-function and elliptic curves analytically | L3 | partial | △ | Elliptic curves as projective varieties in `04.04.03-elliptic-curves`; no unit on $\wp$ as a doubly-periodic function and Weierstrass equation $y^2 = 4x^3 - g_2 x - g_3$ derivation. **Gap.** |
| Jacobi theta functions $\theta_1, \ldots, \theta_4$ | L3 | partial | △ | Theta-function unit `06.06.05-theta-function` exists (Riemann theta function on Jacobians); standard four Jacobi thetas on $\mathbb{H}$ not separately treated. **Gap (delta).** |
| Ochanine elliptic genus $\varphi_{\mathrm{Och}}$ | L4 | — | ✗ | **Gap (high priority — the book's central object).** |
| Witten genus $\varphi_W$ on string manifolds | L5 | — | ✗ | **Gap (high priority — the cohomological / loop-space companion).** |
| String manifolds ($\tfrac{p_1}{2} = 0$ condition) | L5 | — | ✗ | **Gap.** Whitehead tower up to $\mathrm{String} = \tau_{\geq 7} \mathrm{Spin}$ is in `03.12.07-whitehead-tower` but the string-manifold condition is not isolated as a unit. |
| Modularity theorem: $\varphi_{\mathrm{Och}}(M) \in M_*(\Gamma_0(2))$ | L6 | — | ✗ | **Gap (high priority — central theorem).** |
| Cuspidal limits: $q \to 0$ gives $\hat A$; $\tau \to 0$ gives $L$ | L6 | — | ✗ | **Gap.** |
| Equivariant elliptic genus | L7 | partial | △ | Equivariant index unit `03.09.21-family-equivariant-index` shipped; equivariant *elliptic* genus is a downstream specialisation, not yet a unit. **Gap.** |
| Bott-Taubes rigidity theorem | L7 | — | ✗ | **Gap (high priority — central rigidity result).** |
| Liu's modular-invariance rigidity proof | L7 cont. (post-1992) | — | ✗ | **Gap.** Modern proof; deepening. |
| Witten heuristic: Dirac operator on $\mathcal{L}M$ | L8 | partial | △ | Loop-space mentioned in `02.01.09-compact-open-topology` and `03.10.02-cft-basics`; no unit on the heuristic Dirac-operator-on-loop-space formulation of the Witten genus. **Gap.** |
| Sigma-model / 2-D SCFT partition-function interpretation | L8 | partial | △ | Generic CFT in `03.10.02-cft-basics` and `03.11.03-virasoro-algebra`; supersymmetric sigma model on $M$ as elliptic-genus partition function not isolated. **Gap (Master-tier only).** |
| Modular-form theory deepening (Hecke operators, $\eta$, $\Delta$, $j$) | App I | — | ✗ | **Gap.** Belongs to the modular-forms-foundations arc. |
| Twisted Dirac and characteristic-class identity (App II) | App II | `03.09.10`, `03.09.14`, `03.09.15` | ✓ | Covered via the Atiyah-Singer + Dirac-bundle units. |
| Elliptic cohomology (Landweber-Ravenel-Stong / Segal) | (post-1992) | — | ✗ | **Gap (pointer-only at FT equivalence; full treatment a deferred Master-tier survey).** |
| Topological modular forms TMF / Hopkins-Miller | (post-2002) | — | ✗ | **Explicit non-goal of this plan** — see §5. |

**Aggregate coverage estimate.** Counting the ~23 top-level H-B-J topics
in the table:

- ✓ covered: 1 (the Dirac-side App II content, via existing spin-geometry units)
- △ partial: 7 (recap items + Whitehead tower + theta function + equivariant index)
- ✗ gap: 15

Coverage is roughly **~10–15%** weighted by load-bearing, **~5%** by raw
topic count of original H-B-J content. The recap material (Lecture 1)
overlaps the FT 3.25 sibling-audit punch-list; the new material — modular
forms, elliptic genera, modularity, rigidity, the loop-space heuristic —
is **almost entirely uncovered**. This is the expected finding for a
research-level sequel monograph on an originating-topic line: the gap is
substantial and the modular-forms strand is essentially a **green-field
addition** to the Babel Bible.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites / shared with sibling audits:**

- **FT 3.25 Hirzebruch *Topological Methods* Priority-1 batch** must
  ship: `03.06.15` (multiplicative sequences and the $L, \hat A, \mathrm{td}$
  genera) and `03.06.18` (Chern character) are direct prerequisites for
  Lecture 1's recap and Lectures 4–5's elliptic-genus construction. The
  signature theorem (`03.06.11`) and oriented bordism (`03.06.13`) are
  also prerequisites for the cuspidal-limit statements in Lecture 6.
  **Coordinate production batches; do not start this plan's
  Priority-1 batch until the FT 3.25 Priority-1 batch is in flight or
  shipped.**

- **Milnor-Stasheff Priority-1** characteristic-numbers and bordism
  units (`03.06.07`–`03.06.13`) — likewise prerequisite. Already on
  the M-S audit.

- **String manifolds ($\tfrac{p_1}{2} = 0$) as a separate definitional
  beat** — the Whitehead-tower unit `03.12.07` should be extended (not
  duplicated) with a short Master section explicitly naming the
  string-cobordism condition. This is a **shared deepening item** with
  the FT 3.10 Lawson-Michelsohn audit and the FT 3.08 Milnor-Stasheff
  audit. Cheap: ~1 hour deepening.

**Priority 1 — high-leverage, captures H-B-J's central new content
(modular forms + elliptic genera + modularity):**

1. **`04.11.01` Modular forms of weight $k$ for $\mathrm{SL}_2(\mathbb{Z})$
   (foundations).** New chapter `04.11-modular-forms/` opened under
   `04-algebraic-geometry/`. Lattices in $\mathbb{C}$, $\mathrm{SL}_2(\mathbb{Z})$
   action on $\mathbb{H}$, fundamental domain, modular forms and cusp forms,
   $q$-expansion, Eisenstein series $E_{2k}$, the discriminant $\Delta =
   E_4^3 - E_6^2$ up to constant, the ring isomorphism
   $M_*(\mathrm{SL}_2(\mathbb{Z})) = \mathbb{C}[E_4, E_6]$. Three-tier;
   Beginner gives definitions + the fundamental domain picture;
   Intermediate proves the dimension formula for $M_k$; Master proves
   the ring-structure theorem. Anchors: H-B-J Lecture 2 + Appendix I;
   Serre *Cours d'arithmétique* Ch. VII; Diamond-Shurman *A First Course
   in Modular Forms* Ch. 1–3. ~2200 words. **Originator-prose** treatment
   citing Klein, Hurwitz, and the classical 19th-century formulation.

2. **`04.11.02` Congruence subgroups $\Gamma_0(N)$, $\Gamma(N)$ and
   modular forms with level structure.** $\Gamma_0(2)$ specifically
   featured for the Ochanine genus. Modular forms for $\Gamma_0(N)$,
   the ring $M_*(\Gamma_0(2)) = \mathbb{C}[\delta, \epsilon]$ in Skoruppa's
   appendix notation. Anchors: H-B-J Appendix I; Diamond-Shurman Ch. 1.
   ~1500 words.

3. **`04.04.04` Weierstrass $\wp$-function and the analytic theory
   of elliptic curves.** *(Companion / deepening of existing
   `04.04.03-elliptic-curves.md`.)* Doubly-periodic functions,
   $\wp(z; \tau) = z^{-2} + \sum_{\omega \neq 0} [(z-\omega)^{-2} - \omega^{-2}]$,
   $\wp'$, the differential equation $(\wp')^2 = 4\wp^3 - g_2 \wp - g_3$,
   the analytic-algebraic correspondence $\mathbb{C}/\Lambda \cong E$.
   Master tier: modularity of $g_2, g_3$ as modular forms of weight $4, 6$.
   Anchors: H-B-J Lecture 3; Silverman *Arithmetic of Elliptic Curves*
   Ch. VI; Serre *Cours d'arithmétique* Ch. VII. ~1800 words.

4. **`06.06.09` Jacobi theta functions $\theta_1, \theta_2, \theta_3,
   \theta_4$ on $\mathbb{H}$.** *(Companion to existing
   `06.06.05-theta-function`.)* The four classical Jacobi thetas, their
   modular and quasi-periodicity transformation laws, the Jacobi triple
   product, and $\theta_1'(0)$ relating to the discriminant. Anchors:
   H-B-J Lecture 3; Mumford *Tata Lectures on Theta I*; Whittaker-Watson
   *Modern Analysis* Ch. 21. ~1500 words. **Cross-link** to `04.04.04`
   (the $\wp$-function) and the existing Riemann-theta unit.

5. **`03.06.21` The Ochanine elliptic genus** $\varphi_{\mathrm{Och}}$.
   New chapter section under `03.06-characteristic-classes/`. Definition
   via the multiplicative sequence attached to the formal power series
   $Q(x, q) = (x/2)/\sinh(x/2) \cdot \prod_{n \geq 1}
   [(1 - q^n)^2 / (1 - q^n e^x)(1 - q^n e^{-x})]$; equivalent
   formulation via $\theta_1$; multiplicativity on oriented bordism;
   computation on $\mathbb{CP}^2$ and on a K3 surface as worked
   examples; statement that $\varphi_{\mathrm{Och}}(M)$ is integral on
   spin manifolds. Anchors: H-B-J Lectures 4 + 6; Ochanine 1987 *Topology*.
   **Originator-prose** treatment citing Ochanine 1987. Three-tier with
   the modularity statement deferred to unit 7 (`03.06.23`). ~2400 words.

6. **`03.06.22` The Witten genus** $\varphi_W$. Definition on string
   manifolds ($\tfrac{p_1}{2} = 0$) via the formal power series
   $Q(x, q) = (x/2)/\sinh(x/2) \cdot \prod_{n \geq 1}
   [(1 - q^n)^2 / ((1 - q^n e^x)(1 - q^n e^{-x}))]$ specialised to the
   level-1 case (alternatively, via $\theta_1' / \theta_1$); values in
   $M_*(\mathrm{SL}_2(\mathbb{Z}))$ for string $M$; the cuspidal limit
   $q \to 0$ recovering $\hat A(M)$. Anchors: H-B-J Lecture 5; Witten
   1987 *CMP* 109. Master-only treatment of the full integrality / modularity.
   ~1800 words.

7. **`03.06.23` Modularity of the elliptic genus.** Theorem
   (Hirzebruch-Zagier; Landweber-Stong): $\varphi_{\mathrm{Och}}(M)
   \in M_*(\Gamma_0(2))$ for $M^{4k}$ closed spin; $\varphi_W(M) \in
   M_*(\mathrm{SL}_2(\mathbb{Z}))$ for $M$ closed string. Cuspidal-limit
   table: at $\tau = i\infty$ both recover $\hat A$; at $\tau = 0$
   $\varphi_{\mathrm{Och}}$ recovers $L$. Anchors: H-B-J Lecture 6;
   Hirzebruch-Berger-Jung Appendix I. **Originator-prose** treatment
   citing Ochanine 1987, Hirzebruch 1988 ("Elliptic genera of level $N$
   for complex manifolds," in *Differential Geometric Methods in
   Theoretical Physics*, Reidel 1988), and Landweber-Stong 1988.
   ~2200 words. Master-tier only.

8. **`03.06.24` Bott-Taubes rigidity theorem.** For $M^{4k}$ closed
   spin with $S^1$-action, the equivariant elliptic genus
   $\varphi^{S^1}_{\mathrm{Och}}(M, q, t)$ is constant in the
   $S^1$-parameter $t$. Proof sketch via Atiyah-Bott fixed-point
   formula + modular-invariance argument (Liu's modern proof).
   Anchors: H-B-J Lecture 7; Bott-Taubes 1989 *JAMS*; Liu 1995 *JDG*.
   **Originator-prose** treatment citing Witten 1987 (conjecture),
   Bott-Taubes 1989 (theorem), Liu 1995 (modern proof). Cross-reference
   `03.09.21-family-equivariant-index`. ~2400 words. Master-tier only.

**Priority 2 — Witten heuristic and elliptic-cohomology pointer
(Master-tier survey, not strict FT-equivalence requirements but
load-bearing for the *originating* story):**

9. **`03.06.25` Witten heuristic: Dirac operator on the free loop
   space.** The Witten genus $\varphi_W(M)$ is formally
   $\mathrm{ind}_{S^1}(\not\!\!D_{\mathcal{L}M})$ — the $S^1$-equivariant
   index of a Dirac operator on $\mathcal{L}M = \mathrm{Map}(S^1, M)$
   with respect to loop rotation. Localization to constant loops
   recovers the characteristic power series. **Explicitly heuristic:**
   no rigorous Atiyah-Singer foundation for the loop-space Dirac
   operator exists. Anchors: H-B-J Lecture 8; Witten 1988 *LNM* 1326
   §1. Cross-reference `03.10.02-cft-basics` and `03.11.03-virasoro`
   for the sigma-model side. Master-only, ~1800 words.
   **Originator-prose** treatment citing Witten 1987 *CMP* and 1988
   *LNM* 1326.

10. **`03.06.26` Pointer: elliptic cohomology.** Master-only **survey**
    unit (definition + statement only): the elliptic cohomology
    theory $\mathrm{Ell}^*(-)$ as the generalised cohomology theory
    whose genus is $\varphi_W$, in the Landweber-Ravenel-Stong /
    Segal formulation. Pointer to the modern programme (topological
    modular forms, Hopkins-Miller) without development — **see §5**.
    Anchors: H-B-J Lecture 5 closing remark; Landweber 1988 *LNM* 1326;
    Segal 1988 *Astérisque* 161-162; Landweber-Ravenel-Stong 1995
    *Contemp. Math.* 181. ~1200 words.

**Priority 3 — modular-forms deepening (Skoruppa Appendix I material;
useful for FT-equivalence but not on the critical path):**

11. **`04.11.03` Hecke operators on modular forms.** Definition,
    eigenforms, Petersson inner product, the Hecke algebra
    $\mathbb{T}_N$, multiplicativity of Fourier coefficients. Anchors:
    H-B-J Appendix I; Diamond-Shurman Ch. 5; Serre Ch. VII. Master-only,
    ~1800 words. Adds modular-forms depth needed for both this audit
    and any future modular-forms-strand audits (e.g. Diamond-Shurman,
    Lang *Introduction to Modular Forms*).

12. **`04.11.04` $\eta$-function, $j$-invariant, and the modular
    discriminant $\Delta$.** Explicit identities, $\eta^{24} = \Delta$,
    $j = E_4^3 / \Delta$ up to normalisation. Anchors: H-B-J App I;
    Serre *Cours d'arithmétique* Ch. VII. ~1200 words. Master-only.

**Priority 4 — deepenings (optional, Master-tier sections, not
standalone units):**

13. **(Add as a Master section to `03.06.21`.)** Worked elliptic-genus
    computations: $\varphi_{\mathrm{Och}}(\mathbb{HP}^n)$ for the
    quaternionic projective spaces (the case Hirzebruch uses to pin
    down the elliptic genus on the spin polynomial generators), and
    $\varphi_{\mathrm{Och}}(\mathrm{K3})$ at the cuspidal limits.

14. **(Add as a Master section to `03.06.24`.)** Liu's modular-invariance
    proof outline of rigidity (vs the original Bott-Taubes argument).
    Cite Liu 1995 *JDG* and the closing remarks of H-B-J Lecture 7.

---

## §4 Implementation sketch (P3 → P4)

**Hour estimates** (mirroring the FT 3.25 / Milnor-Stasheff / Bott-Tu
batch averages; H-B-J units skew significantly above average because
they require both the multiplicative-sequence formalism *and* a careful
modular-form treatment, much of which is new green-field content for
the Codex):

- Priority-1 batch (8 units: 1–8) × ~3.5 hours/unit = **~28 hours**.
  Largest of any single audit punch-list to date; reflects that the
  modular-forms strand is essentially a new chapter.
- Priority-2 batch (2 survey units: 9–10) × ~2 hours/unit = **~4 hours**.
- Priority-3 batch (2 deepening units: 11–12) × ~2.5 hours/unit =
  **~5 hours**.
- Priority-4 deepening sections (13–14) × ~1 hour each = **~2 hours**.

**Total: ~39 hours** of focused production. **Shared overlap with FT 3.25
audit:** Lecture 1 recap is fully handled by FT 3.25 `03.06.15` and
`03.06.18`; hours are charged to FT 3.25, not double-counted here.
**Net new production for FT 3.26: ~39 hours.** Plus Pass-W weaving and
Pass-V continuity (~6 hours combined). Fits a focused 6–7 day production
batch.

**Strict prerequisite blockers:**

- **FT 3.25 Priority-1 batch** (`03.06.11`, `03.06.13`, `03.06.15`,
  `03.06.18`, `04.05.10`) — the multiplicative-sequence machine,
  Chern character, and bordism background. **Hard prereq.**
- **Milnor-Stasheff Priority-1 batch** (`03.06.07`–`03.06.13`) — the
  characteristic-numbers and Thom-bordism backbone. **Hard prereq.**
- **Existing Babel Bible units:** `03.09.10` (Atiyah-Singer index theorem,
  shipped), `03.09.21` (family/equivariant index, shipped) — both
  prereq for Bott-Taubes rigidity (unit 8).
- **New `04.11-modular-forms/` chapter spine:** must open chapter
  before Priority-1 units 1–2 can ship. Modest one-time setup cost
  (~1 hour for `_meta.json`, chapter index, and Pass-W weaving registry).

**Coordination with sibling audit FT 3.25** (the *Topological Methods*
audit): Lecture 1 of H-B-J explicitly references the multiplicative-
sequence machinery developed in *Topological Methods* and the
signature / $\hat A$ / Todd genera. The FT 3.25 audit Priority-1 units
`03.06.15` (multiplicative sequences) and `03.06.18` (Chern character)
are the **shared substrate** with this plan. They are *blocking*
prerequisites for FT 3.26 Priority-1 units 5, 6, 7 (the Ochanine genus,
the Witten genus, the modularity theorem). **Sequence the FT 3.25
batch first.**

**Originator-prose targets.** Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10, the units carrying originator-prose treatment should be:

- **`03.06.21` (Ochanine elliptic genus):** S. Ochanine, "Sur les
  genres multiplicatifs définis par des intégrales elliptiques,"
  *Topology* 26 (1987), 143–151. The originating paper.

- **`03.06.22` (Witten genus):** E. Witten, "Elliptic genera and
  quantum field theory," *Comm. Math. Phys.* 109 (1987), 525–536;
  E. Witten, "The index of the Dirac operator in loop space," in
  *Elliptic Curves and Modular Forms in Algebraic Topology*
  (P. S. Landweber, ed.), Lecture Notes in Math. 1326, Springer
  1988, 161–181.

- **`03.06.23` (modularity theorem):** S. Ochanine, *Topology* 26
  (1987); F. Hirzebruch, "Elliptic genera of level $N$ for complex
  manifolds," in *Differential Geometric Methods in Theoretical Physics*
  (K. Bleuler & M. Werner, eds.), NATO ASI Series C 250, Reidel 1988,
  37–63; P. S. Landweber & R. E. Stong, "Circle actions on spin
  manifolds and characteristic numbers," *Topology* 27 (1988), 145–161.

- **`03.06.24` (Bott-Taubes rigidity):** Witten 1987 (conjecture);
  R. Bott & C. Taubes, "On the rigidity theorems of Witten,"
  *J. Amer. Math. Soc.* 2 (1989), 137–186 (theorem); K. Liu, "On
  modular invariance and rigidity theorems," *J. Differential Geom.*
  41 (1995), 343–396 (modern proof).

- **`03.06.25` (Witten heuristic / loop-space Dirac):** Witten 1988
  *LNM* 1326 §1; also pointer to Witten, "Index theorems on loop
  spaces," *Comm. Math. Phys.* 87 (1982), 451–500 (the prior
  supersymmetric-QM origin).

- **`03.06.26` (elliptic cohomology pointer):** G. Segal, "Elliptic
  cohomology," *Séminaire Bourbaki* Exposé 695, *Astérisque*
  161–162 (1988), 187–201; P. S. Landweber, "Elliptic cohomology and
  modular forms," in *Elliptic Curves and Modular Forms in Algebraic
  Topology*, *LNM* 1326 (1988), 55–68; P. S. Landweber, D. C. Ravenel,
  R. E. Stong, "Periodic cohomology theories defined by elliptic
  curves," *Contemp. Math.* 181 (1995), 317–337.

**Notation crosswalk.** H-B-J uses: $\varphi_{\mathrm{Och}}$ (or just
$\varphi$ in context) for the Ochanine elliptic genus, $\varphi_W$ for
the Witten genus, $E_{2k}$ for normalised Eisenstein series, $\Delta$
for the discriminant, $j$ for the $j$-invariant, $\theta_1, \theta_2,
\theta_3, \theta_4$ for the four Jacobi thetas (note: H-B-J follows the
standard Whittaker-Watson / Mumford convention), $\Gamma_0(N)$ and
$\Gamma(N)$ for congruence subgroups, $M_k(\Gamma)$ for weight-$k$
modular forms, $S_k(\Gamma)$ for cusp forms, and $q = e^{2\pi i \tau}$
for the standard $q$-expansion variable. Codex new units should preserve
this notation. The existing Codex theta-function unit
`06.06.05-theta-function` uses $\Theta$ (capital, multivariable Riemann
theta on Jacobians) — different object, different notation; no conflict
and a Pass-V continuity note should clarify the distinction in
`06.06.09` (the new Jacobi-theta unit).

---

## §5 What this plan does NOT cover

- A line-number P1 inventory of every named theorem in H-B-J at
  proof-detail granularity. PDF not locally accessible and 1992
  monograph; full P1 audit deferred to a focused PDF-access pass.
- Exercise-pack production. H-B-J is a lecture-notes volume with sparse
  exercises; exercise content for the new units should be drawn from
  Diamond-Shurman *A First Course in Modular Forms* (for modular forms)
  and the FT 3.25 / FT 3.10 / FT 3.11 sibling units (for the topology
  side).
- **Topological modular forms (TMF) and the Hopkins-Miller / Hopkins-Mahowald
  theorem.** TMF post-dates H-B-J (Hopkins-Miller 1994 unpublished;
  formally Hopkins ICM 2002; Goerss-Hopkins-Miller obstruction theory
  late 1990s). It is the natural continuation of the elliptic-cohomology
  arc (unit 10 above) but the homotopy-theoretic / obstruction-theory
  machinery (structured ring spectra, Goerss-Hopkins obstruction theory,
  the Lurie / Behrens stack-of-derived-elliptic-curves treatment) is a
  separate research-level programme. **Explicit non-goal.** Future
  audit: a TMF-focused plan citing Hopkins ICM 2002, Behrens *Notes on
  the construction of $\mathrm{tmf}$*, and Douglas-Francis-Henriques-Hill
  (eds.) *Topological Modular Forms* (AMS Math. Surveys 201, 2014).
- **Elliptic cohomology deep technical content.** Pointer-only at
  `03.06.26`; the full Landweber-exact-functor proof, the formal-group-law
  approach, and the Hopkins-Miller refinement are deferred. Belongs in
  a future Ravenel-deepening or TMF audit.
- **Loop-space Dirac operator rigorous foundations.** As of 2026 the
  rigorous Atiyah-Singer index theorem on $\mathcal{L}M$ remains an open
  problem (Stolz-Teichner programme works on a related conjecture
  identifying TMF with a category of supersymmetric Euclidean field
  theories; no rigorous loop-space index exists). Unit 9 is **explicitly
  heuristic** and labels itself as such.
- **Hirzebruch genera of level $N$ for complex manifolds** (the
  Hirzebruch 1988 NATO-ASI paper). Specialised content; a Master-tier
  deepening of unit 7 if needed. Defer.
- **Connections to Moonshine, Mathieu Moonshine, K3 elliptic genus and
  twisted partition functions.** Post-1993 developments (Eguchi-Ooguri-Tachikawa
  2010 Mathieu Moonshine for K3). Defer to a future $K3$ / Moonshine
  audit.
- **The Stolz conjecture** ($\varphi_W = 0$ obstructs positive Ricci
  curvature on string manifolds) and its consequences. Defer to the
  Lawson-Michelsohn PSC-obstruction unit `03.09.16` for any
  cross-reference; full treatment is a non-goal here.

---

## §6 Acceptance criteria for FT equivalence (Hirzebruch-Berger-Jung)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The **FT 3.25 Hirzebruch *Topological Methods* Priority-1 batch** has
  shipped (strict prereq for the multiplicative-sequence + Chern-character
  + cobordism backbone of Lectures 1, 4–7).
- The **Milnor-Stasheff Priority-1 batch** has shipped (strict prereq for
  the characteristic-numbers + bordism backbone).
- A `04.11-modular-forms/` chapter has been opened and at least
  Priority-1 units 1–2 (`04.11.01` modular forms, `04.11.02` congruence
  subgroups) have shipped.
- ≥95% of H-B-J's named theorems in Lectures 1–8 + Appendices I–II map
  to Babel Bible units. Current: ~10%; after Priority-1 batch: ~75%; after
  Priority-1+2: ~88%; full ≥95% requires Priority-3 + selective
  Priority-4.
- ≥90% of H-B-J's worked computations in Lectures 4–7 have a direct unit
  or worked example covering them. After units 5 + 7 + 13 this rises
  from ~5% to ~85%.
- Notation crosswalk (§4) is preserved in every new unit; the
  Jacobi-theta vs Riemann-theta distinction is explicitly noted in
  `06.06.09`.
- Pass-W weaving connects the new units to:
  - the existing `03.06.03`–`03.06.06` characteristic-class chapter
    spine,
  - `03.09.10` (Atiyah-Singer index theorem) and `03.09.21`
    (family-equivariant index) for the rigidity-theorem (unit 8) and
    the heuristic loop-space-index unit (unit 9),
  - `03.12.07` (Whitehead tower) for the string-manifold condition,
  - `04.04.03-elliptic-curves` and the new `04.04.04` ($\wp$-function)
    for the analytic-elliptic-curves arc,
  - `06.06.05-theta-function` for the Jacobi-theta vs Riemann-theta
    distinction (`06.06.09`),
  - the FT 3.25 Priority-1 units once shipped (multiplicative-sequence
    and Chern-character arc),
  - `03.10.02-cft-basics` and `03.11.03-virasoro-algebra` for the
    sigma-model / CFT side of the Witten heuristic.
- Pass-V continuity holds on the H-B-J-restricted scope (modular-forms
  side cross-checked against `04.04.03` and `06.06.05`; topology side
  cross-checked against `03.06.04`, `03.09.10`, `03.09.21`).
- Originator-prose treatment present in units `03.06.21`–`03.06.26`
  per §4 above.

The Priority-1 batch (units 1–8, ~28 hours) closes the master-tier gap
on the book's central content — modular forms, the Ochanine and Witten
elliptic genera, the modularity theorem, and Bott-Taubes rigidity.
Priority-2 (units 9–10) closes the Witten-heuristic and elliptic-
cohomology-pointer survey. Priority-3+4 are modular-forms deepenings
and worked-computation sections.

---

## §7 Sourcing

- **Local copy.** Not present in `reference/textbooks-extra/` as of
  2026-05-18; not present in `reference/fasttrack-texts/`.
- **License.** Vieweg / Springer Aspects-of-Mathematics edition (1992,
  ISBN 3-528-06414-5) is in print and copyrighted. Cite as
  Hirzebruch, F., Berger, T., Jung, R., *Manifolds and Modular Forms*,
  Aspects of Mathematics E20, Vieweg, Braunschweig 1992 (English ed.,
  trans. P. S. Landweber).
- **Free academic copy.** No canonical free legal mirror identified
  (Ranicki's archive at `webhomes.maths.ed.ac.uk/~v1ranick/papers/`
  does not host this title — confirmed 2026-05-18; Springer Link page
  is SSO-gated). Anna's Archive / library-genesis copies exist; per
  FT sourcing convention these are not the canonical citation.
  **Recommendation:** acquire the Aspects-of-Mathematics paperback
  (~€60 retail; widely held at graduate libraries) for the production
  batch.
- **Add to local mirror.** When acquired, place in
  `reference/fasttrack-texts/04-algebraic-geometry/` as
  `Hirzebruch-Berger-Jung-ManifoldsAndModularForms.pdf` to mirror the
  FT-text pattern.
- **Secondary references consulted for this audit pass:**
  - Ochanine, S., "Sur les genres multiplicatifs définis par des
    intégrales elliptiques," *Topology* 26 (1987), 143–151
    (originating paper of the elliptic genus).
  - Witten, E., "Elliptic genera and quantum field theory,"
    *Comm. Math. Phys.* 109 (1987), 525–536.
  - Witten, E., "The index of the Dirac operator in loop space," in
    Landweber (ed.), *Elliptic Curves and Modular Forms in Algebraic
    Topology*, LNM 1326, Springer 1988, 161–181.
  - Bott, R. & Taubes, C., "On the rigidity theorems of Witten,"
    *J. Amer. Math. Soc.* 2 (1989), 137–186.
  - Liu, K., "On modular invariance and rigidity theorems,"
    *J. Differential Geom.* 41 (1995), 343–396.
  - Segal, G. B., "Elliptic cohomology," *Séminaire Bourbaki* Exposé
    695, *Astérisque* 161–162 (1988), 187–201.
  - Landweber, P. S., "Elliptic cohomology and modular forms," in
    *Elliptic Curves and Modular Forms in Algebraic Topology*, LNM
    1326, Springer 1988, 55–68.
  - Landweber, P. S., Ravenel, D. C. & Stong, R. E., "Periodic
    cohomology theories defined by elliptic curves," *Contemp. Math.*
    181 (1995), 317–337.
  - Diamond, F. & Shurman, J., *A First Course in Modular Forms*,
    Springer GTM 228, 2005 (modern modular-forms textbook for the
    new `04.11-modular-forms/` chapter).
  - Serre, J.-P., *A Course in Arithmetic*, Springer GTM 7, 1973,
    Chapter VII (concise modular-forms primer).
- **Codex internal references.** `plans/fasttrack/hirzebruch-topological-methods.md`
  (sibling audit; **shared Priority-1 substrate** for Lecture 1 recap
  + the multiplicative-sequence machine; production must precede this
  plan's Priority-1 batch), `plans/fasttrack/milnor-stasheff-characteristic-classes.md`,
  `plans/fasttrack/lawson-michelsohn-spin-geometry.md`,
  `plans/fasttrack/ravenel-complex-cobordism.md` (elliptic-cohomology
  pointer; if a future Ravenel deepening adds the Landweber-exact-functor
  treatment of elliptic cohomology, coordinate via unit `03.06.26`),
  `plans/fasttrack/brown-higgins-sivera-nonabelian-algebraic-topology.md`
  (audit-format mirror), and the existing units
  `03.06.03`–`03.06.06`, `03.09.10`, `03.09.21`, `03.12.07`, `04.04.03`,
  `06.06.05`.
