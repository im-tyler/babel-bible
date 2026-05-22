# Besse — *Einstein Manifolds* (Fast Track 3.48) — Audit + Gap Plan

**Book:** Arthur L. Besse, *Einstein Manifolds* (Springer-Verlag,
Ergebnisse der Mathematik und ihrer Grenzgebiete, 3. Folge, Band 10,
1987; corrected reprint in *Classics in Mathematics* series 2008,
xii + 510 pp.; ISBN 978-3-540-15279-8 / 978-3-540-74120-6). "Arthur
L. Besse" is the well-known pseudonym for a collective of geometers
centred on the Arthur-Besse seminar in Paris (Berger, Berard,
Gallot, Hulin, Lafontaine, and others) — a sister volume to *Manifolds
all of whose Geodesics are Closed* (Ergebnisse 93, 1978). Commercial
title (BUY in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.48).

**Fast Track entry:** 3.48. The canonical encyclopaedic reference for
**Riemannian Einstein metrics** — metrics satisfying
$\mathrm{Ric}(g) = \lambda g$ for some $\lambda \in \mathbb{R}$ — and
the standing top-of-the-stack monograph on the existence, uniqueness,
and moduli of such metrics across the Kähler, homogeneous,
quaternion-Kähler, and special-holonomy classes. Besse hereafter = **EM**.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2
+ P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write so that EM is covered to the equivalence threshold
(≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit.** No local PDF: searched
`reference/textbooks-extra/`, `reference/fasttrack-texts/03-modern-geometry/`,
`reference/jimmyqin/raw/pdfs/` (only `bessel-functions.pdf` and Wald's
Einstein-equation lecture-notes turn up). Springer commercial title;
not author-hosted; behind the Springer IDP redirect for the official
landing page; the Ranicki preprint mirror returns 404; Google Books
preview behind a geo-redirect we can't follow. This audit works from
(a) the **canonical TOC structure** of EM (Chapters 0–16, well-documented
in the citation record across Joyce 2000, Tian 2000, Petersen 2016,
Berger 2003), (b) the Babel Bible's existing Riemannian-geometry footprint
(currently 1 unit in `03-modern-geometry/02-manifolds/`, 1 unit in
`13-gr-cosmology/05-schwarzschild/`), and (c) the originator literature
(Einstein 1915–16; Calabi 1954/57; Yau 1977/78; Aubin 1976/78;
Berger 1961; Wang-Ziller 1985; Joyce 1996). A line-number-precise pass
requires the book on hand and is deferred. **Promote to full P1 audit
when PDF is local.** Consistent with the audit-stub convention used for
Helgason (FT 3.17) and Brown-Higgins-Sivera (FT 1.05a).

---

## §1 What EM is for

EM is the **definitive encyclopaedic treatment of Einstein metrics on
compact Riemannian manifolds**. Where Petersen *Riemannian Geometry*
(GTM 171, Springer 3rd ed. 2016) gives the comparison-theoretic toolkit
and Jost *Riemannian Geometry and Geometric Analysis* (Springer 7th ed.
2017) pushes into harmonic-map / parabolic analysis, EM stays squarely
inside the **fixed-curvature-condition** subject: metrics whose Ricci
tensor is a constant multiple of the metric itself. Berger's
*Panoramic View of Riemannian Geometry* (Springer 2003) calls EM "the
bible of the subject" — the standing reference that every subsequent
text (Joyce, Tian, Salamon, LeBrun) cites as the consolidated background
[ref: Berger, *A Panoramic View of Riemannian Geometry*, Springer 2003,
§11.4]. The pseudonym authorship is itself an editorial choice: EM is
collectively-written from a Paris seminar circa 1979–86, with each
chapter polished by multiple hands, giving the book a uniformity of
notation and a depth-of-coverage no single-author monograph at this
size achieves.

EM's distinctive contributions, in roughly the order the book develops
them:

1. **Riemannian geometry primer (Ch. 0–1).** Self-contained chapters on
   connections, curvature tensors, the Bianchi identities, and the
   Ricci/scalar curvature decomposition. The unusual choice: Besse
   organises the basic Riemannian-geometry chapter around the
   **decomposition of the curvature tensor under $O(n)$** (Weyl + Ricci-
   traceless + scalar pieces), which is the natural language for the
   Einstein condition $W^- = 0$ in 4D and for the conformal-Einstein
   problem. Petersen does this in Ch. 3; Jost does not centre the
   decomposition. [ref: Petersen, *Riemannian Geometry* GTM 171, 3rd
   ed. 2016, §3.1.]

2. **Einstein condition $\mathrm{Ric} = \lambda g$ as a variational
   problem (Ch. 4).** EM derives the Einstein condition as the
   Euler-Lagrange equation of the **total scalar curvature functional**
   $\mathcal{S}(g) = \int_M R_g \, \mathrm{dvol}_g$ restricted to
   unit-volume metrics, originally due to Hilbert 1915. This is the
   Riemannian descendant of Einstein 1915–16 vacuum field equations
   $G_{\mu\nu} = 0$ — same equation, Wick-rotated. Besse's framing is
   the **Riemannian-functional-analytic** one (Yamabe problem,
   second-variation operator, Lichnerowicz Laplacian) rather than the
   Lorentzian / PDE-of-evolution one.

3. **Kähler-Einstein metrics (Chs. 2, 11).** The complex-geometric
   case: $(M, J, g)$ Kähler with $\mathrm{Ric}(g) = \lambda \omega_g$,
   equivalently $c_1(M) = \lambda [\omega_g] / 2\pi$. EM consolidates:

   - **Calabi conjecture** (Calabi 1954/57): for compact Kähler $M$ and
     any representative $\rho \in c_1(M)$, there exists a unique Kähler
     metric $g'$ in the same Kähler class with $\mathrm{Ric}(g') = \rho$.
   - **Yau's theorem** (Yau 1977/78, *Comm. Pure Appl. Math.*): solution
     of the Calabi conjecture in the $c_1 < 0$ and $c_1 = 0$ cases,
     yielding the existence of **Calabi-Yau metrics** (Ricci-flat
     Kähler) on every compact Kähler $M$ with $c_1(M) = 0$.
   - **Aubin-Yau theorem** (Aubin 1976; Yau 1977): existence of
     Kähler-Einstein metrics on compact Kähler manifolds with
     $c_1(M) < 0$.
   - The $c_1(M) > 0$ (Fano) case is left open in EM and is treated by
     Tian / Donaldson decades later [ref: Tian, *Canonical Metrics in
     Kähler Geometry*, Birkhäuser 2000, §§5–7].

4. **Homogeneous Einstein metrics (Ch. 7).** $G$-invariant Einstein
   metrics on compact homogeneous spaces $G/H$. EM consolidates Berger's
   1961 thesis, the Wang-Ziller obstruction (Wang-Ziller 1985,
   *Invent. Math.*), and the catalogue of known homogeneous Einstein
   metrics through 1985. The **Alekseevsky conjecture** (every
   non-compact homogeneous Einstein manifold is a solvmanifold) is
   stated; settled later by Böhm-Lafuente 2023.

5. **Riemannian symmetric spaces are Einstein (Ch. 7).** Every
   irreducible Riemannian symmetric space carries a canonical Einstein
   metric (Cartan's metric, from the Killing form). EM cross-references
   the Cartan classification covered by Helgason DGLGSS (FT 3.17).

6. **Compact quaternion-Kähler manifolds (Ch. 14).** Manifolds with
   holonomy in $\mathrm{Sp}(n) \cdot \mathrm{Sp}(1)$; automatically
   Einstein with $\lambda \neq 0$ (Berger 1965). EM gives the LeBrun
   1989 / Salamon 1982 twistor characterisation as a master-tier
   pointer.

7. **Special holonomy and Einstein (Chs. 10, 14).** Berger's holonomy
   list (Berger 1955); the seven possible non-symmetric irreducible
   holonomies and which force the metric to be Einstein:
   $\mathrm{SU}(n)$ (Calabi-Yau, Ricci-flat), $\mathrm{Sp}(n)$
   (hyperkähler, Ricci-flat), $\mathrm{Sp}(n) \cdot \mathrm{Sp}(1)$
   (quaternion-Kähler, Einstein), $G_2$ and $\mathrm{Spin}(7)$
   (Ricci-flat). The $G_2$ and $\mathrm{Spin}(7)$ existence problems
   are open in EM and resolved by Joyce 1996 in *Invent. Math.* and
   *J. Differential Geom.* [ref: Joyce, *Compact Manifolds with
   Special Holonomy*, Oxford 2000, Chs. 11–13].

8. **Moduli, deformation theory, and the Bochner technique (Chs. 12–13).**
   The Lichnerowicz Laplacian, infinitesimal deformations of Einstein
   metrics, the obstruction at second order (Koiso 1983), rigidity of
   the round sphere.

EM is **not** a first course in Riemannian geometry. It assumes basic
manifolds, connections, curvature (Petersen Chs. 1–4, do Carmo,
Lee, or — in the Babel Bible — Jost FT 3.28); for Chs. 2 and 11 it assumes
basic complex geometry (Huybrechts, Griffiths-Harris); for Chs. 7 and
14 it assumes Lie-group structure theory (Helgason DGLGSS, Knapp). EM
is the canonical entry point if the goal is the **landscape of
Riemannian Einstein metrics** rather than the parabolic-flow / Ricci-flow
programme that grew out of it after 1982.

**Note on the GR connection (load-bearing for §3).** EM's "Einstein
manifold" is **Riemannian** — positive-definite metric, no time
dimension, no causal structure. The Einstein-Hilbert action and the
vacuum equation $\mathrm{Ric} = \lambda g$ are formally the same as
their Lorentzian counterpart, but the analysis is utterly different
(elliptic vs hyperbolic). EM cites Einstein 1915–16 as the originator
because the **equation** $G_{\mu\nu} = 0$ is his, but the
**Riemannian-mathematical subject** of Einstein metrics is Berger-Calabi-
Yau-Aubin's, not Einstein's. The Codex must respect this split: see §3.

---

## §2 Coverage table (Babel Bible vs EM)

Cross-referenced against the current corpus (Jost / Helgason / KN-I
audits as upstream baselines). ✓ = covered, △ = partial / different
framing, ✗ = not covered.

| EM topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Riemannian manifold, Levi-Civita connection, curvature tensor | `03.02.01-smooth-manifold.md` | △ (1 of ~12 expected units) | Per Jost FT 3.28 punch-list — the entire Riemannian-foundations gap is upstream. EM is unreadable without it. |
| Ricci tensor and scalar curvature | — | ✗ | **Gap (upstream blocker).** On Jost FT 3.28 punch-list. |
| Curvature decomposition under $O(n)$ (Weyl + Ricci-traceless + scalar) | — | ✗ | **Gap.** EM Ch. 1.G; needed for the 4D Einstein characterisation and the Yamabe problem. |
| Einstein condition $\mathrm{Ric} = \lambda g$ — definition + first examples | — | ✗ | **Gap (P1 — the book's titular object).** |
| Einstein-Hilbert functional $\mathcal{S}(g) = \int R_g \,\mathrm{dvol}$ as variational origin | — | ✗ | **Gap (P1).** Cross-references the Lorentzian version in `13-gr-cosmology/`. |
| Ricci-flat metrics — definition + obstruction theorems | — | ✗ | **Gap.** |
| Kähler manifold — definition, Kähler form, Ricci form | — | ✗ (likely; check 06-riemann-surfaces / 04-algebraic-geometry) | **Gap (upstream blocker for Chs. 2, 11).** May overlap with planned Griffiths-Harris / Voisin units; reconcile during P3. |
| Calabi conjecture (statement) | — | ✗ | **Gap (P1).** |
| Yau's theorem on the Calabi conjecture ($c_1 \leq 0$) | — | ✗ | **Gap (P1).** Originator: Yau 1977 *Proc. Nat. Acad. Sci.* + 1978 *Comm. Pure Appl. Math.* |
| Aubin-Yau theorem ($c_1 < 0$, Kähler-Einstein) | — | ✗ | **Gap (P1).** |
| Calabi-Yau manifold — Ricci-flat Kähler, $c_1 = 0$ | — | ✗ | **Gap (P1).** Foundational for `05-symplectic/` mirror-symmetry, `04-algebraic-geometry/` moduli units, and string-theory units in `12-quantum/`. |
| Fano / Kähler-Einstein $c_1 > 0$ problem | — | ✗ | **Gap (P2 — beyond EM, Tian/Donaldson era).** EM treats only the open-problem statement. |
| Homogeneous Einstein metric on $G/H$ — Berger 1961 framework | — | ✗ | **Gap (P2).** |
| Wang-Ziller obstruction to homogeneous Einstein | — | ✗ | **Gap (P3 — master tier).** |
| Symmetric spaces are Einstein (Cartan) | — | ✗ | **Gap.** Cross-reference Helgason FT 3.17 punch-list. |
| Quaternion-Kähler manifold — definition + Einstein property | — | ✗ | **Gap (P2).** |
| Hyperkähler manifold — definition + Ricci-flatness | — | ✗ | **Gap (P2).** Cross-reference symplectic 4-manifold units. |
| Berger holonomy list — non-symmetric irreducible holonomies | — | ✗ | **Gap (P1).** Master organising theorem for the whole book. |
| $G_2$ and $\mathrm{Spin}(7)$ holonomy — Einstein/Ricci-flat | — | ✗ | **Gap (P3 — pointer, Joyce 1996).** |
| Sasakian-Einstein manifold | — | ✗ | **Gap (P3 — pointer).** EM Add. C; consolidated post-EM by Boyer-Galicki. |
| Bochner technique (Bochner-Weitzenböck on harmonic forms) | — | ✗ | **Gap.** May overlap with Lawson-Michelsohn spin-geometry units. |
| Lichnerowicz Laplacian on symmetric 2-tensors | — | ✗ | **Gap.** |
| Infinitesimal Einstein deformations + Koiso obstruction | — | ✗ | **Gap (P3 — master tier).** |
| Yamabe problem | — | ✗ | **Gap (P3).** Cross-reference Jost FT 3.28 (harmonic-maps neighbourhood). |
| Connection to Lorentzian Einstein equation (Wick rotation, signature) | △ (Schwarzschild unit only) | △ | **Gap.** The single `13.05.01-schwarzschild-solution.md` unit is a Lorentzian *solution*, not a treatment of the Riemannian-Lorentzian correspondence. |
| Compact 4-manifolds with $W^+ = 0$ (anti-self-dual Einstein) | — | ✗ | **Gap (P3).** EM Ch. 13; load-bearing for Donaldson/Atiyah gauge-theory units. |
| Twistor space of quaternion-Kähler manifold (Salamon-LeBrun) | — | ✗ | **Gap (P3 — pointer).** |

**Aggregate coverage estimate:** ~0% of EM has corresponding Codex
units. The gap is total. As with Helgason DGLGSS and Brown-Higgins-Sivera
NAT, this is unsurprising: EM is a research-monograph consolidation, and
the upstream Riemannian-geometry foundation (Jost FT 3.28 punch-list) is
itself nearly empty in the Babel Bible. Closing Jost's punch-list is a hard
prerequisite for any meaningful EM coverage.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — upstream prerequisites, blocked by other audits:**

- **Jost FT 3.28 punch-list** (the basic Riemannian-geometry chapter:
  Levi-Civita connection, geodesics, exponential map, Hopf-Rinow,
  curvature tensor, Ricci/scalar/sectional curvature, Jacobi fields,
  comparison theorems). EM is unreadable without it. ~10 units, ~30
  hours.
- **Kobayashi-Nomizu I (FT 3.18) punch-list** for the principal-bundle
  / connection-on-vector-bundle reformulation used in EM Chs. 1, 10.
- **Helgason DGLGSS (FT 3.17) punch-list** items: at minimum the
  Cartan decomposition $\mathfrak{g} = \mathfrak{k} \oplus \mathfrak{p}$,
  Killing form, classification of irreducible symmetric spaces.
  Required for EM Ch. 7 (homogeneous Einstein metrics).
- **Basic Kähler geometry** (Kähler form, Ricci form, $c_1$). May
  ship via Griffiths-Harris or Huybrechts audit; reconcile.

**Recommended chapter placement.** New EM-driven units split between:

- `03-modern-geometry/02-manifolds/` — pure-Riemannian content (Einstein
  condition, curvature decomposition, Bochner, Lichnerowicz).
- A **new sub-chapter** under `13-gr-cosmology/`, e.g.
  `13.06-riemannian-einstein/` or `13.07-einstein-metrics/`, that holds
  the **bridge** units explicitly tagged as Riemannian-Einstein-metric
  rather than Lorentzian GR. This keeps the Lorentzian Schwarzschild
  /cosmology track unmuddled and gives Kähler-Einstein, Calabi-Yau,
  Joyce $G_2$, and quaternion-Kähler their natural home. The Riemannian
  units cross-link to Schwarzschild and to the Einstein-Hilbert action.
- `04-algebraic-geometry/` and/or `05-symplectic/` — Calabi-Yau,
  hyperkähler, special-holonomy units that interact with mirror
  symmetry and the algebraic side. Resolve placement during P3.

**Priority 1 — high-leverage, captures EM's central content:**

1. **Einstein metric: definition and first examples.** $\mathrm{Ric}(g)
   = \lambda g$, $\lambda$ the Einstein constant; round sphere, flat
   torus, hyperbolic space, complex projective space with Fubini-Study,
   compact Lie groups with bi-invariant metric. Beginner: definition +
   round sphere. Intermediate: full example list. Master: variational
   characterisation. Anchor: EM §0.1–0.4 + Ch. 1.K. ~1500 words.
2. **Einstein-Hilbert functional and the variational origin of
   $\mathrm{Ric} = \lambda g$.** $\mathcal{S}(g) = \int_M R_g \,
   \mathrm{dvol}_g$ on unit-volume metrics; Euler-Lagrange computation;
   Hilbert 1915 originator-prose treatment. Cross-link to the
   Lorentzian version implicit in `13.05.01-schwarzschild-solution.md`.
   EM Ch. 4. ~1800 words.
3. **Curvature decomposition under $O(n)$ (Weyl + Ricci-traceless +
   scalar).** Irreducible decomposition of the algebraic curvature
   tensor; the Weyl tensor $W$; the trace-free Ricci $\mathring{r}$;
   characterisation: $g$ is Einstein iff $\mathring{r} = 0$. EM §1.G.
   ~1500 words.
4. **Kähler-Einstein metrics: statement of the existence/uniqueness
   problem.** Kähler metric, Kähler form $\omega$, Ricci form
   $\rho_g = -i \partial \bar\partial \log \det(g_{i\bar j})$, the
   identity $[\rho_g] = 2\pi c_1(M)$. Statement of the Calabi
   conjecture. EM Ch. 2. ~2000 words; assumes basic Kähler geometry.
5. **Yau's theorem (Calabi conjecture for $c_1 \leq 0$).** Statement;
   sketch of the continuity method; consequences for Calabi-Yau
   manifolds ($c_1 = 0$, Ricci-flat). Originator-prose: Yau 1977
   *Proc. Nat. Acad. Sci. USA* 74; Yau 1978 *Comm. Pure Appl. Math.*
   31. EM Ch. 11. ~2200 words; master-tier sketch of the $C^0$ /
   $C^2$ estimates, intermediate-tier statement only.
6. **Calabi-Yau manifold.** Definition; equivalent characterisations
   ($c_1 = 0$ Kähler $\iff$ holonomy $\subseteq \mathrm{SU}(n)$ $\iff$
   trivial canonical bundle, in the simply-connected case); examples
   (K3, quintic 3-fold). Cross-link to Joyce FT-pointer and to mirror
   symmetry. EM Chs. 11, 14. ~1800 words.
7. **Berger holonomy classification.** The seven non-symmetric
   irreducible holonomy groups; which force Einstein/Ricci-flat.
   Originator: Berger 1955 *Bull. Soc. Math. France* 83. EM Ch. 10.
   ~1800 words; master-tier organising unit.
8. **Aubin-Yau theorem (Kähler-Einstein for $c_1 < 0$).** Statement;
   relation to Yau's theorem; consequences for canonically-polarised
   varieties. Originators: Aubin 1976 *C.R. Acad. Sci. Paris* 283;
   Yau 1977/78. EM Ch. 11. ~1500 words.

**Priority 2 — homogeneous and special-holonomy content:**

9. **Homogeneous Einstein metric on $G/H$.** Berger's framework:
   $G$-invariant metrics parameterised by $\mathrm{Ad}(H)$-invariant
   inner products on $\mathfrak{m} = T_{eH}(G/H)$; the Einstein
   equation becomes a system of polynomial equations in the metric
   eigenvalues. Originator: Berger 1961 *Ann. Sc. Norm. Sup. Pisa*.
   EM Ch. 7. ~2000 words.
10. **Quaternion-Kähler manifold.** Holonomy in $\mathrm{Sp}(n) \cdot
    \mathrm{Sp}(1)$; automatically Einstein with $\lambda \neq 0$;
    Wolf-space examples. EM Ch. 14. ~1500 words.
11. **Hyperkähler manifold.** Holonomy in $\mathrm{Sp}(n)$; Ricci-flat;
    examples (K3 surface, Hilbert schemes of points, gravitational
    instantons). EM Ch. 14. ~1500 words.
12. **Bochner technique and the Lichnerowicz Laplacian.** $\Delta_L
    h = \nabla^* \nabla h - 2 \mathring{R} h + \mathrm{Ric} \cdot h$
    on symmetric 2-tensors; vanishing theorems for harmonic forms
    on positive-Ricci manifolds (Bochner 1946). EM Ch. 1.I + Ch. 12.
    ~1500 words.

**Priority 3 — master-tier deepenings and pointers:**

13. **Wang-Ziller obstruction.** Topological obstruction to existence
    of homogeneous Einstein metrics. Originator: Wang-Ziller 1985
    *Invent. Math.* 84. EM Ch. 7.G. Master-tier section to attach to
    Priority-2 unit #9.
14. **Infinitesimal Einstein deformations and Koiso obstruction.**
    Tangent space at an Einstein metric in the moduli of unit-volume
    metrics; second-order obstruction (Koiso 1983 *Osaka J. Math.* 20).
    EM Ch. 12. ~1500 words, master-tier.
15. **Yamabe problem.** Existence of constant-scalar-curvature metrics
    in a conformal class. Originator: Yamabe 1960; gap closed by
    Trudinger 1968 / Aubin 1976 / Schoen 1984. EM Ch. 4.G. ~1500
    words; cross-link to Jost FT 3.28 (harmonic-maps neighbourhood).
16. **$G_2$ and $\mathrm{Spin}(7)$ holonomy — pointer.** Statement of
    the Joyce existence theorem (Joyce 1996 *Invent. Math.* 123 +
    *J. Differential Geom.* 43); examples via the desingularisation
    of $T^7/\Gamma$. EM Ch. 10 + Add. A. Master-only, ~1500 words.
    Cross-link to Joyce *Compact Manifolds with Special Holonomy*
    (Oxford 2000).
17. **Sasakian-Einstein manifold — pointer.** Definition; the
    Sasaki-Einstein cone is Calabi-Yau. EM Add. C. Master-only, ~1200
    words; pointer to Boyer-Galicki *Sasakian Geometry* (Oxford 2008).
18. **Anti-self-dual Einstein 4-manifolds.** $W^+ = 0$; relation to
    twistor theory and Donaldson invariants. EM Ch. 13. Master-only,
    ~1500 words; cross-link to gauge-theory units in `03.07-gauge-theory/`.

---

## §4 Implementation sketch (P3 → P4)

For a full EM coverage pass, items 1–8 are the minimum set (with the
Jost FT 3.28, Kobayashi-Nomizu I, and Helgason DGLGSS punch-lists as
strict prerequisites). Realistic production estimate (mirroring earlier
Helgason / Jost / Brown-Higgins-Sivera batches):

- **Per-unit hours.** EM units skew high (~3.5–4.5 h/unit) because the
  master tier requires careful tensor-decomposition + originator-prose
  treatment for Calabi/Yau/Aubin/Berger.
- **Priority 1 (8 units).** 8 × ~4 h = ~32 h focused production.
- **Priority 2 (4 units).** 4 × ~3.5 h = ~14 h.
- **Priority 3 (6 units + sections).** 6 × ~3 h = ~18 h.
- **Total for full EM coverage: ~64 h.** Plus upstream Jost FT 3.28
  punch-list (~30 h) and Helgason DGLGSS structural prereqs (~12 h),
  and Kähler-geometry prereqs (~8 h). End-to-end realistic budget:
  ~115 h of focused work, ~3 weeks of dedicated time.

**Originator-prose target.** Priority-1 units 5, 6, 7, 8 should carry
originator-prose treatment per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10. Canonical originator citations:

- **Einstein 1915–16.** A. Einstein, "Die Feldgleichungen der
  Gravitation," *Sitzungsber. Preuss. Akad. Wiss.* 1915, 844–847; "Die
  Grundlage der allgemeinen Relativitätstheorie," *Ann. Phys.* 49 (1916)
  769–822. Originator of the **equation** $G_{\mu\nu} = 8\pi T_{\mu\nu}$;
  the Riemannian Einstein metrics are its vacuum-Euclidean descendant.
- **Hilbert 1915.** D. Hilbert, "Die Grundlagen der Physik," *Nachr.
  Ges. Wiss. Göttingen* 1915. Originator of the variational
  derivation via $\mathcal{S}(g) = \int R \, \mathrm{dvol}$.
- **Calabi 1954/57.** E. Calabi, "The space of Kähler metrics,"
  *Proc. Int. Congress Math. Amsterdam* 1954, II, 206–207; "On Kähler
  manifolds with vanishing canonical class," *Algebraic Geometry and
  Topology — A Symposium in Honor of S. Lefschetz*, Princeton 1957,
  78–89. Originator of the Calabi conjecture.
- **Yau 1977/78.** S.-T. Yau, "Calabi's conjecture and some new
  results in algebraic geometry," *Proc. Nat. Acad. Sci. USA* 74
  (1977) 1798–1799; "On the Ricci curvature of a compact Kähler
  manifold and the complex Monge-Ampère equation, I," *Comm. Pure
  Appl. Math.* 31 (1978) 339–411. Resolution of the Calabi conjecture.
- **Aubin 1976.** T. Aubin, "Équations du type Monge-Ampère sur les
  variétés Kähleriennes compactes," *C.R. Acad. Sci. Paris* 283
  (1976) 119–121. Parallel resolution of the $c_1 < 0$ case.
- **Berger 1955/61.** M. Berger, "Sur les groupes d'holonomie homogène
  des variétés à connexion affine et des variétés Riemanniennes,"
  *Bull. Soc. Math. France* 83 (1955) 279–330 (holonomy list); "Les
  variétés Riemanniennes homogènes normales simplement connexes à
  courbure strictement positive," *Ann. Sc. Norm. Sup. Pisa* 15 (1961)
  179–246 (homogeneous Einstein).
- **Wang-Ziller 1985.** M. Wang, W. Ziller, "On normal homogeneous
  Einstein manifolds," *Ann. Sci. École Norm. Sup.* 18 (1985) 563–633;
  *Invent. Math.* 84 (1986) 177–194.
- **Joyce 1996.** D. Joyce, "Compact Riemannian 7-manifolds with
  holonomy $G_2$, I & II," *J. Differential Geom.* 43 (1996) 291–328
  & 329–375; "Compact 8-manifolds with holonomy $\mathrm{Spin}(7)$,"
  *Invent. Math.* 123 (1996) 507–552.

**Notation crosswalk.** EM uses: $\mathrm{Ric}$ or $r$ for the Ricci
tensor; $R$ for the full Riemann tensor *and* for the scalar curvature
(disambiguated by argument); $W$ for the Weyl tensor; $\mathring{r}$
for the trace-free Ricci; $\rho_g$ for the Ricci form of a Kähler
metric. The Babel Bible notation decision (per `docs/specs/UNIT_SPEC.md`
§11) should: use $\mathrm{Ric}$ for Ricci, $R$ only for scalar curvature
(disambiguating from the Riemann tensor, which we write $\mathrm{Rm}$
following Petersen), $W$ for Weyl, $\rho$ for the Ricci form. Record in
a §Notation paragraph of Priority-1 unit #1.

---

## §5 What this plan does NOT cover

- **Ricci flow / Perelman 2002–2003.** EM predates Hamilton's
  full Ricci-flow programme (Hamilton 1982 is referenced but not
  central) and predates Perelman's 2002–03 entropy/$\mathcal{W}$
  functional papers by 16 years. Ricci-flow coverage is deferred to a
  future audit anchored on Chow-Knopf, Chow-Lu-Ni, and Brendle, with
  Perelman 2002/03 originator-prose.
- **Geometric flows generally** (mean curvature flow, harmonic-map
  heat flow). Some appear in Jost FT 3.28 punch-list; not duplicated
  here.
- **Lorentzian Einstein metrics** beyond the cross-link. Schwarzschild,
  Kerr, FLRW cosmology stay in `13-gr-cosmology/`. EM's Riemannian
  story is a sibling, not a subset.
- **Kähler-Einstein on Fano manifolds (Tian-Donaldson era).** EM
  states only the open problem. Coverage of the K-stability /
  Yau-Tian-Donaldson conjecture is deferred to a dedicated Tian
  *Canonical Metrics in Kähler Geometry* audit.
- **Exercise-pack production.** EM has limited explicit exercises;
  the relevant problem-set production is deferred to P3-priority-3
  follow-ups after the priority-1 units ship.
- **Full line-number P1 inventory** of every named theorem (deferred
  pending PDF acquisition).

---

## §6 Acceptance criteria for FT equivalence (EM)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Jost FT 3.28, Kobayashi-Nomizu I, and Helgason DGLGSS priority-1
  punch-lists have shipped (strict prereq).
- A Kähler-geometry chunk (Kähler form, Ricci form, $c_1$, Hodge
  decomposition on Kähler manifolds) has shipped via Griffiths-Harris
  or Huybrechts audit.
- ≥95% of EM's named theorems in Chs. 0, 1, 2, 4, 7, 10, 11 map to
  Babel Bible units (currently 0%; after priority-1 units this rises to
  ~70%; after priority-1+2 to ~88%; full ≥95% requires priority-3
  plus the holonomy-pointer master sections).
- ≥90% of EM's worked examples (round sphere, $\mathbb{C}P^n$,
  Calabi-Yau quintic, K3, Wolf spaces, $G/H$ catalogue) have a
  direct unit or are referenced from a unit that covers them.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects new units across `03.02-manifolds/`, the
  proposed `13.06-riemannian-einstein/` (or wherever the Riemannian-
  Einstein sub-chapter lives), `04-algebraic-geometry/` (Calabi-Yau,
  K3), and `03.07-gauge-theory/` (anti-self-dual Einstein, twistor).

The 8 priority-1 units close most of the equivalence gap given the
upstream Riemannian and Lie/Kähler prereqs are in place. Priority-2
closes the homogeneous and quaternion-Kähler gaps. Priority-3 are
master-tier deepenings and out-of-EM-era pointers (Joyce 1996,
Boyer-Galicki).

---

## §7 Sourcing

- **Commercial.** Springer-Verlag, *Einstein Manifolds*, Ergebnisse der
  Mathematik 10, 1987; corrected reprint in the *Classics in
  Mathematics* paperback series, 2008. ISBN 978-3-540-15279-8
  (hardcover, 1987) / 978-3-540-74120-6 (Classics reprint, 2008).
- **Local copy status.** Not present in
  `reference/textbooks-extra/` nor
  `reference/fasttrack-texts/03-modern-geometry/`. The only Besse-
  adjacent file in the corpus is `reference/jimmyqin/raw/pdfs/bessel-
  functions.pdf` (unrelated — Bessel functions, not Besse). **Acquire
  before promoting to full P1 audit.** When acquired, place at
  `reference/fasttrack-texts/03-modern-geometry/Besse-EinsteinManifolds.pdf`
  to mirror the pattern of other FT modern-geometry references.
- **Reduced-audit basis.** This plan was built without the PDF, using
  the canonical TOC as it is reproduced in Joyce *Compact Manifolds
  with Special Holonomy* (Oxford 2000) §0, Tian *Canonical Metrics in
  Kähler Geometry* (Birkhäuser 2000) §§5–7, Petersen *Riemannian
  Geometry* (GTM 171, 3rd ed. 2016) §3 and §11, and Berger *A
  Panoramic View of Riemannian Geometry* (Springer 2003) §11.4. Each
  of these is itself a peer-reviewed standard reference; collectively
  they pin down EM's chapter structure to a precision sufficient for
  the priority-1 punch-list.
- **Peer references cited in §1.** Joyce 2000; Tian 2000; Berger
  2003; Petersen 2016. (Four — the §1 ≥3 requirement is satisfied.)
- **License.** Standard Springer commercial; cite as Besse,
  *Einstein Manifolds*, Springer Ergebnisse 10, 1987 / Classics in
  Mathematics 2008.
