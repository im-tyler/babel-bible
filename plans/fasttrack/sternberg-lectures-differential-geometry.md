# Sternberg — *Lectures on Differential Geometry* (Fast Track 1.10) — Audit + Gap Plan

**Book:** Shlomo Sternberg, *Lectures on Differential Geometry*,
Prentice-Hall, Englewood Cliffs NJ 1964, xi + 390 pp. Reissued by Chelsea
Publishing 1983 (ISBN 0-8284-0316-3); now distributed by AMS / Chelsea
Series. Sternberg's first major textbook and the canonical 1960s American
exposition of differential geometry in the Cartan / invariant-theoretic
style.

**Fast Track entry:** 1.10. Distinct from Sternberg's later books on
*Curvature in Mathematics and Physics* (FT 1.14, Dover 2012) and *Group
Theory and Physics* (FT 1.15, CUP 1994) — those are separate audits and
are out of scope here.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write so that *Lectures on Differential Geometry* (LDG
hereafter) is covered to the equivalence threshold (≥95% effective
coverage of theorems, key examples, exercise pack, notation, sequencing,
intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Audit mode: REDUCED.** No local PDF is available. The author's
Harvard page (`people.math.harvard.edu/~shlomo/`) hosts six of
Sternberg's books — *Real Variables*, *Advanced Calculus*, *Dynamical
Systems*, *Lie Algebras*, *Semi-Riemannian Geometry*, *Semi-Classical
Analysis* — but **not** *Lectures on Differential Geometry*, which
remains under active Chelsea / AMS copyright. WebFetch on the Harvard
page confirmed the omission. The five Sternberg PDFs already in
`reference/fasttrack-texts/01-fundamentals/` and `02-quantum-stat/` and
`03-modern-geometry/` are the *later* Sternberg books (FT 1.04, 1.14,
1.15, 2.x adjacent); none is the 1964 LDG. A full P1 line-number
inventory is deferred to the production pass when a local copy is on
disk. This stub works from the canonical LDG table of contents (Chs.
I–VII / VIII depending on edition, well-attested across modern
differential-geometry references that cite LDG as an originator anchor —
Cartan structural equations, $G$-structures, Cartan's prolongation
algorithm, Spencer cohomology), the peer-source crosswalks below, and
the in-Codex evidence that LDG is the **most-cited 1960s source** for
the Cartan moving-frame side of differential geometry that KN-I does
not emphasise.

---

## §1 What LDG is for

LDG is the **Cartan-tradition** counterpart to Kobayashi-Nomizu Vol. I.
Where KN-I (FT 3.18, written almost simultaneously — KN-I 1963, LDG 1964)
organises differential geometry around **principal $G$-bundles** and the
**connection 1-form** $\omega \in \Omega^1(P; \mathfrak{g})$, Sternberg
organises the same material around the **moving frame** $(e_1, \ldots,
e_n)$ on the manifold itself together with its **dual coframe**
$(\theta^1, \ldots, \theta^n)$ and the resulting **Cartan structural
equations** $\mathrm{d}\theta^i = -\omega^i_j \wedge \theta^j + \Theta^i$,
$\mathrm{d}\omega^i_j = -\omega^i_k \wedge \omega^k_j + \Omega^i_j$. The
two presentations are mathematically equivalent (a principal-bundle
connection on the frame bundle $L(M)$ pulls back to a moving-frame
connection on $M$ via a local section), but the **editorial style** is
opposite: KN-I is uncompromisingly abstract and reads as a research
monograph; LDG is uncompromisingly geometric, written to be read
chapter-by-chapter, and is the canonical American 1960s differential-
geometry course text. Tu's *Differential Geometry: Connections,
Curvature, and Characteristic Classes* (GTM 275, Springer 2017) was
written specifically to be "Sternberg in modern notation"; the Preface
explicitly cites LDG as the source of the moving-frame examples
[ref: Tu *Differential Geometry* GTM 275 Preface; Sternberg LDG was the
textbook for Tu's course at Tufts in the 1980s].

Distinctive content, organised by the seven (or eight) chapters of the
book:

1. **Chapter I — The geometry of Euclidean space and the calculus of
   functions of several variables.** Sternberg's signature opening:
   develops differential calculus on $\mathbb{R}^n$ with the
   coordinate-free / multilinear-algebra perspective from the outset.
   Inverse and implicit function theorems with the Banach-space proof.
   Sard's theorem (Sard 1942) is **stated and proved early** — unusual
   for the era; most 1960s texts deferred Sard to a later chapter. The
   chapter ends with the existence-uniqueness theorem for ODEs and the
   smooth-dependence-on-initial-conditions theorem, setting up flows of
   vector fields. Compare Spivak Vol. I Chs. 1–3 (more pictures, slower
   pace) and Lang *Differential and Riemannian Manifolds* (GTM 160,
   Springer 1995) Chs. I–IV (Banach-manifold from the outset, the most
   abstract route) [ref: Spivak, *A Comprehensive Introduction to
   Differential Geometry Vol. I* (Publish or Perish 3rd ed. 1999)
   Chs. 1–3; Lang, *Differential and Riemannian Manifolds* GTM 160
   Springer 1995 Chs. I–IV].
2. **Chapter II — Differentiable manifolds.** Standard differentiable-
   manifold setup. Charts, atlases, smooth maps, **submersions and
   immersions**, the regular value theorem, partitions of unity,
   embedding theorems (Whitney 1936 — Sternberg gives the **easy**
   Whitney embedding $M^n \hookrightarrow \mathbb{R}^{2n+1}$, not the
   strong $M^n \hookrightarrow \mathbb{R}^{2n}$). **Tangent and
   cotangent bundles** introduced as derivations and as germs of
   functions. The chapter is short relative to LDG's chapter on Lie
   groups (Ch III) — Sternberg moves rapidly through manifold-layer
   foundations to get to the geometry that motivated the book.
3. **Chapter III — Integration of vector fields. Lie groups and Lie
   algebras (early treatment).** Sternberg's pedagogically distinctive
   choice: **Lie groups are introduced before differential forms.** Where
   KN-I introduces them as a special case of the bundle-and-connection
   formalism, and where Lee *Introduction to Smooth Manifolds* puts them
   late (Ch. 20+) after the manifold infrastructure is in place, LDG
   develops Lie groups in chapter III as the natural recipients of
   the **flow of a vector field** programme: a one-parameter subgroup
   $\mathbb{R} \to G$ is the integral curve of a left-invariant vector
   field. The **exponential map** $\exp: \mathfrak{g} \to G$ is then
   the time-1 flow. Cartan's theorem (closed subgroup of a Lie group
   is a Lie subgroup) is proved; the **Lie algebra ↔ Lie group**
   correspondence is developed up to **Lie's third theorem** (every
   finite-dim Lie algebra is the Lie algebra of a Lie group) for the
   simply-connected case. **Frobenius theorem** is proved here, as the
   integrability statement for distributions of vector fields. This
   ordering is **distinctive of LDG** and is preserved in only a few
   later texts (Warner, *Foundations of Differentiable Manifolds and
   Lie Groups* (GTM 94, Springer 1983) follows the same Lie-first
   ordering; do Carmo *Riemannian Geometry* and Lee do not)
   [ref: Warner, *Foundations of Differentiable Manifolds and Lie
   Groups* GTM 94, Springer 1983, Chs. 1–3].
4. **Chapter IV — The integral calculus of forms (differential forms +
   exterior derivative + Stokes' theorem).** Differential forms
   $\Omega^k(M)$ introduced via the exterior algebra $\Lambda^k T^*M$.
   The **exterior derivative** $\mathrm{d}: \Omega^k \to \Omega^{k+1}$
   characterised by the four axioms ($\mathbb{R}$-linearity, Leibniz
   $\mathrm{d}(\alpha \wedge \beta) = \mathrm{d}\alpha \wedge \beta +
   (-1)^k \alpha \wedge \mathrm{d}\beta$, agreement with $\mathrm{d}f$
   on 0-forms, $\mathrm{d}^2 = 0$) — Sternberg gives the axiomatic
   uniqueness proof, not just the coordinate formula. **Pullback**
   $f^*\alpha$ and its naturality with $\mathrm{d}$. **Integration**
   $\int_M \alpha$ on oriented manifolds (top-dim forms). **Stokes'
   theorem** $\int_{\partial M} \alpha = \int_M \mathrm{d}\alpha$ for
   oriented manifolds-with-boundary; the proof is the partition-of-unity
   + chart-by-chart reduction to Stokes on $\mathbb{R}^n_+$. The
   chapter ends with **de Rham cohomology** $H^k_{\mathrm{dR}}(M)$ as
   $\ker\mathrm{d}/\mathrm{im}\,\mathrm{d}$ and a sketch of the de Rham
   theorem $H^k_{\mathrm{dR}}(M) \cong H^k(M; \mathbb{R})$ (without the
   full sheaf-theoretic proof). Compare Bott-Tu *Differential Forms in
   Algebraic Topology* (GTM 82, Springer 1982) Chs. I–II [ref: Bott,
   Tu, *Differential Forms in Algebraic Topology* GTM 82, Springer 1982].
5. **Chapter V — Riemannian geometry, connections, and the Cartan
   structural equations.** The chapter that gives LDG its lasting
   reputation. **Riemannian metric** $g$ on $M$. The **Levi-Civita
   connection** is constructed via the unique torsion-free compatible
   covariant derivative; Sternberg gives **both** the abstract
   construction (as in KN-I) **and** the moving-frame construction
   (orthonormal frame $(e_1, \ldots, e_n)$, dual coframe $(\theta^i)$,
   connection 1-forms $\omega^i_j$ with $\omega^j_i = -\omega^i_j$ for
   $\mathrm{O}(n)$-reduction). **First structural equation**
   $\mathrm{d}\theta^i + \omega^i_j \wedge \theta^j = 0$ (torsion-free).
   **Second structural equation** $\mathrm{d}\omega^i_j + \omega^i_k
   \wedge \omega^k_j = \Omega^i_j$ (curvature). **Bianchi identities**
   in both algebraic ($R(X,Y)Z + R(Y,Z)X + R(Z,X)Y = 0$) and
   differential ($\mathrm{d}_\omega \Omega = 0$) form. **Sectional,
   Ricci, scalar curvature**. **Geodesics** as auto-parallels.
   **Exponential map** $\exp_p$ and normal coordinates. **Hopf-Rinow
   theorem** (geodesic completeness = Cauchy completeness = closed-
   bounded-compact). Where LDG diverges from KN-I: the **moving-frame
   calculus** is the *default* mode; the principal-bundle formalism is
   presented as a clean reformulation, not as the entry point.
6. **Chapter VI — The geometry of $G$-structures.** **The chapter
   without which LDG is not LDG.** A **$G$-structure** on $M$ is a
   reduction of the frame bundle $L(M) \to M$ to a principal $G$-
   subbundle, for $G \subseteq \mathrm{GL}(n, \mathbb{R})$. Examples:
   $\mathrm{O}(n)$-structure = Riemannian metric; $\mathrm{Sp}(2n)$-
   structure = almost-symplectic; $\mathrm{GL}(n, \mathbb{C})$ for $n$
   even = almost-complex; volume / orientation = $\mathrm{SL}(n)$-
   structure. **Integrability** of a $G$-structure: when is there a
   coordinate atlas in which the structure is the flat model? **Cartan's
   prolongation algorithm**: build the *first prolongation* $G^{(1)}
   \subseteq \mathfrak{g} \otimes (\mathbb{R}^n)^*$ via the Spencer
   cohomology of the inclusion $\mathfrak{g} \hookrightarrow
   \mathfrak{gl}(n, \mathbb{R})$, iterate. A $G$-structure is **of
   finite type** if some prolongation vanishes; **of infinite type**
   otherwise. Riemannian and conformal $G$-structures are of finite
   type (so the local geometry is determined by finitely many jets);
   symplectic and complex are of infinite type (which is why symplectic
   geometry has no local invariants — Darboux's theorem — and complex
   geometry depends on holomorphic data). The classification of
   finite-type $G$-structures is the **Sternberg / Guillemin / Singer
   theorem** [ref: V. Guillemin, S. Sternberg, "An algebraic model of
   transitive differential geometry," *Bull. AMS* 70 (1964) 16–47]. This
   chapter is essentially absent from KN-I and Lee, partial in Spivak
   Vol. II, and present in modern form only in Sternberg's own later
   work and in selected research monographs (Yano-Kon, Kobayashi
   *Transformation Groups in Differential Geometry*, and Guillemin-
   Sternberg *Geometric Asymptotics*). It is the **single most
   distinctive feature** of LDG and the strongest argument for a
   dedicated Sternberg audit beyond the KN-I overlap.
7. **Chapter VII — The classical mechanics of particles and rigid
   bodies. Symplectic structures, Hamiltonian flows, the principle of
   stationary action.** Differential geometry applied to classical
   mechanics. **Symplectic manifold** $(M^{2n}, \omega)$. **Hamiltonian
   vector field** $X_H$ defined by $\iota_{X_H} \omega = \mathrm{d}H$.
   **Poisson bracket** $\{f, g\}$ and the Lie-algebra structure on
   $C^\infty(M)$. **Liouville's theorem** ($\omega^n$ preserved by
   Hamiltonian flow). **Variational principles** — Hamilton's principle
   of stationary action; the **Euler-Lagrange** equations as the
   first-order conditions; the **Legendre transform** $TM \to T^*M$.
   This chapter foreshadows Sternberg's later geometric-mechanics
   programme (Marsden-Weinstein reduction, moment maps, Guillemin-
   Sternberg convexity, eventually FT 1.14 *Curvature in Math and
   Physics* and FT 1.15 *Group Theory and Physics*). Compare Arnold
   *Mathematical Methods of Classical Mechanics* (GTM 60, Springer 2nd
   ed. 1989) Chs. 7–9 [ref: Arnold, *Mathematical Methods of Classical
   Mechanics* GTM 60, Springer 2nd ed. 1989, Chs. 7–9].
8. **Editorial signature.** Three threads make LDG distinctive against
   KN-I:
   - **Lie groups before differential forms** (Ch III before Ch IV).
     Pedagogically motivates the exterior algebra as a tool for
     describing Lie-algebra-valued forms.
   - **Moving frames as the default mode** (Ch V). Principal-bundle
     formalism is a reformulation, not the entry point.
   - **$G$-structures and prolongation** (Ch VI). Almost no overlap
     with KN-I; the invariant-theoretic / Cartan-Spencer programme is
     LDG-only at this level.

LDG is **not** a first textbook on smooth manifolds — Chapter I is a
review, not a development. The canonical "before LDG" sequence is
Sternberg's own *Advanced Calculus* (which IS free at the Harvard page)
or Spivak *Calculus on Manifolds* → LDG. The canonical "after LDG"
sequence is KN-I (for the principal-bundle viewpoint) → KN-II (Chern-
Weil, characteristic classes) → Sternberg's own *Curvature in Math and
Physics* (FT 1.14) for the gauge-theory / GR application layer.

---

## §2 Coverage table (Babel Bible vs LDG)

Cross-referenced against the current Babel Bible corpus. ✓ = covered,
△ = partial / different framing, ✗ = not covered. LDG material maps
primarily to `03-modern-geometry/02-manifolds/`, `03-lie/`,
`04-differential-forms/`, `05-bundles/`, and `05-classical-mechanics/`.
**Heavy overlap with the KN-I (FT 3.18) audit is flagged explicitly**;
shared punch-list items should ship once.

| LDG topic | Babel Bible unit(s) | Status | Note (overlap with KN-I audit) |
|---|---|---|---|
| **Ch. I — calculus on $\mathbb{R}^n$ and ODE existence** | | | |
| Inverse / implicit function theorem | — | ✗ | **Gap.** Standard prerequisite; on the Apostol-multivariable audit. |
| Sard's theorem | — | ✗ | **Gap.** Cited downstream (Milnor MMT audit, transversality) without anchor. |
| Existence-uniqueness for ODEs; smooth dependence | △ | △ | Concept-catalog entry exists; no dedicated unit. Shared with Arnold-ODE audit. |
| Flow of a vector field | △ | △ | Concept-catalog entry; no dedicated unit. **Shared with KN-I priority-0 punch-list item 2.** |
| **Ch. II — differentiable manifolds** | | | |
| Smooth manifold, atlas, charts | `03.02.01-smooth-manifold.md` | ✓ | Single Codex manifold unit. Shared with KN-I §I; nothing to add. |
| Submersion / immersion / embedding | — | ✗ | **Gap.** On the Milnor MMT punch-list. |
| Tangent / cotangent bundle | — | ✗ | **Gap.** **Shared with KN-I priority-0 punch-list item 1** (`03.02.02`). |
| Regular value theorem | — | ✗ | **Gap.** Shared with the Milnor audit. |
| Partitions of unity | — | ✗ | **Gap.** Foundational; nothing in the Babel Bible. |
| Whitney embedding (weak, $M^n \hookrightarrow \mathbb{R}^{2n+1}$) | — | ✗ | **Gap.** Sternberg gives the easy version; strong Whitney $M^n \hookrightarrow \mathbb{R}^{2n}$ is a Milnor topic. Cite Whitney 1936 originator. |
| **Ch. III — vector fields, Lie groups (early)** | | | |
| Lie bracket $[X, Y]$, Lie derivative | — | ✗ | **Gap.** **Shared with KN-I priority-0 punch-list item 2** (`03.02.03`). |
| Frobenius theorem | — | ✗ | **Gap.** **Shared with KN-I priority-0 punch-list item 3** (`03.02.04`). |
| Lie group, Lie algebra | `03.03.01-lie-group.md`, `03.04.01-lie-algebra.md` | ✓ | Shipped (algebra unit lives in `04-differential-forms/` for historical reasons; flagged elsewhere). |
| Group action (free, transitive, proper) | `03.03.02-group-action.md` | ✓ | Shipped. |
| One-parameter subgroup, exponential map | — | ✗ | **Gap.** **Shared with KN-I priority-0 punch-list item 4** (`03.03.04`). |
| Maurer-Cartan form on $G$ | — | ✗ | **Gap.** Shared with KN-I. LDG's Ch III treatment is more leisurely than KN-I §I.4. |
| Cartan's closed-subgroup theorem | — | ✗ | **Gap.** Distinctive to LDG / Warner. Cite Cartan 1930. |
| Lie's third theorem (statement; simply-connected case) | — | ✗ | **Gap.** Cited from Lie-algebra units without anchor. |
| **Ch. IV — differential forms, exterior derivative, Stokes** | | | |
| Exterior algebra $\Lambda^k T^*M$ | △ | △ | Implicit in `03.04.02-differential-forms.md`; no dedicated multilinear-algebra unit. |
| Differential form $\alpha \in \Omega^k(M)$ | `03.04.02-differential-forms.md` | ✓ | Shipped. |
| Exterior derivative $\mathrm{d}$, axiomatic uniqueness | `03.04.04-exterior-derivative.md` | ✓ | Shipped. Master tier covers the axiomatic uniqueness proof; LDG is the canonical source. |
| Pullback $f^* \alpha$ | △ | △ | Covered in passing inside `03.04.02` / `03.04.04`; no dedicated unit but adequate. |
| Integration $\int_M \alpha$ | `03.04.03-integration-on-manifolds.md` | ✓ | Shipped. |
| Stokes' theorem | `03.04.05-stokes-theorem.md` | ✓ | Shipped. |
| de Rham cohomology | `03.04.06-de-rham-cohomology.md` | ✓ | Shipped. |
| de Rham theorem $H^k_{\mathrm{dR}} \cong H^k(M; \mathbb{R})$ | △ | △ | Covered in `03.04.11-cech-de-rham.md` via Čech-de Rham; LDG sketches a more direct singular-cohomology bridge. |
| **Ch. V — Riemannian connections and Cartan structural equations** | | | |
| Riemannian metric, Levi-Civita connection | — | ✗ | **Gap.** **Shared with KN-I priority-1 punch-list item 12** (`03.03.X1`). Single most-cited missing unit in the Babel Bible. |
| Moving frame / orthonormal coframe | — | ✗ | **Gap.** *Distinctive to LDG.* The KN-I audit punch-list does not separately call out the moving-frame construction; LDG's Ch. V is the canonical anchor. |
| Connection 1-forms $\omega^i_j$ in a moving frame | — | ✗ | **Gap.** *Distinctive to LDG.* |
| First structural equation $\mathrm{d}\theta^i + \omega^i_j \wedge \theta^j = \Theta^i$ | — | ✗ | **Gap.** **Shared with KN-I priority-1 punch-list item 10** (`03.05.14`, torsion + structural equations) and **punch-list item 11** (`03.05.15`, soldering form). The moving-frame side should be added to those units as the Beginner tier. |
| Second structural equation $\mathrm{d}\omega^i_j + \omega^i_k \wedge \omega^k_j = \Omega^i_j$ | `03.05.09-curvature.md` | △ | KN-I principal-bundle form is shipped; the moving-frame form is the natural Beginner-tier presentation and is missing. |
| Algebraic + differential Bianchi identities | △ | △ | Shared with KN-I priority-1 item 10. |
| Sectional, Ricci, scalar curvature | — | ✗ | **Gap.** **Shared with KN-I priority-2 punch-list item 13** (`03.02.05`). |
| Geodesic, exponential $\exp_p$, normal coordinates | — | ✗ | **Gap.** Shared with KN-I and Milnor audits (`03.03.X1`). |
| Hopf-Rinow theorem | — | ✗ | **Gap.** Shared with KN-I and Milnor. |
| **Ch. VI — $G$-structures and Cartan prolongation (LDG-distinctive)** | | | |
| $G$-structure on $M$ (reduction of $L(M)$ to $G \subseteq \mathrm{GL}(n)$) | △ | △ | The orthogonal frame bundle `03.05.03-orthogonal-frame-bundle.md` is the canonical example; the **general** $G$-structure unit is **absent** and is shared with KN-I priority-1 item 8 (`03.05.12`, reduction of structure group). |
| Integrability of a $G$-structure | — | ✗ | **Gap (LDG-only at this level).** When is a $G$-structure locally equivalent to the flat model? |
| Cartan's first prolongation $G^{(1)} \subseteq \mathfrak{g} \otimes (\mathbb{R}^n)^*$ | — | ✗ | **Gap (LDG-only).** Algebraic prerequisite for the prolongation algorithm. |
| Spencer cohomology of $\mathfrak{g} \hookrightarrow \mathfrak{gl}(n)$ | — | ✗ | **Gap (LDG-only).** |
| $G$-structures of finite vs infinite type | — | ✗ | **Gap (LDG-only).** Riemannian / conformal finite; symplectic / complex infinite. |
| Guillemin-Sternberg classification of finite-type $G$-structures | — | ✗ | **Gap (LDG-only; Master-tier pointer).** Guillemin-Sternberg 1964 originator. |
| **Ch. VII — symplectic structures and classical mechanics** | | | |
| Symplectic manifold $(M, \omega)$ | △ | △ | Covered in `05-classical-mechanics/` and in the Cannas-da-Silva audit (`cannas-da-silva-symplectic.md`); the Cannas audit is the canonical anchor. |
| Hamiltonian vector field $X_H$ | △ | △ | Covered in `05-classical-mechanics/`; **see also** the Cannas audit. |
| Poisson bracket $\{f, g\}$ | △ | △ | Same. |
| Liouville's theorem (volume preservation) | △ | △ | Covered in `05-classical-mechanics/`; flagged in concept catalog. |
| Hamilton's principle of stationary action; Euler-Lagrange | △ | △ | Covered in `05-classical-mechanics/` and in the Arnold-mechanics audit (FT 1.01). |
| Legendre transform $TM \to T^*M$ | △ | △ | Same. |
| Moment map / first traces of geometric mechanics | — | ✗ | **Out of scope for LDG audit.** Deferred to Cannas / Guillemin-Sternberg *Geometric Asymptotics* / FT 1.14. |

**Aggregate coverage estimate:** ~30–35% of LDG has corresponding Codex
units. Chapter IV (differential forms + Stokes + de Rham) is **the
best-covered chapter at ~85%** — `03.04.02` through `03.04.07` and
`03.04.11` together shadow LDG §§4.1–4.6 closely, and LDG is already
implicitly the master anchor for those units. Chapters I–II are
**~10% covered** at the manifold-prerequisite layer (shared gap with
KN-I and Milnor audits). Chapter III (Lie groups, early treatment) is
**~30% covered** — the Lie-group and Lie-algebra units are shipped,
but the load-bearing intermediate units (exponential map, Maurer-Cartan,
closed-subgroup theorem) are missing. Chapter V (Riemannian connections)
is **~10% covered** — the curvature unit ships in principal-bundle form
without the moving-frame side. Chapter VI ($G$-structures and
prolongation) is **~5% covered** — only the orthogonal-frame-bundle
specialisation. Chapter VII (symplectic / mechanics) is **~50% covered**
via the `05-classical-mechanics/` chapter and is **scoped out** of this
audit by the §5 non-goals (the canonical anchor is Cannas-da-Silva +
Arnold, not LDG).

**Overlap with KN-I (FT 3.18) audit.** Substantial — both books cover
the Riemannian-connection / curvature material of LDG Ch. V and KN-I
Chs. II–IV. Of the 12 KN-I priority-0+1 punch-list items, **9 are
shared with this LDG audit** at minimum:

| KN-I punch-list item | LDG counterpart | Shared verdict |
|---|---|---|
| `03.02.02` Tangent bundle | LDG Ch. II | **Ship once, cite both** as anchors. |
| `03.02.03` Lie bracket / Lie derivative | LDG Ch. III | **Ship once.** LDG provides the Lie-group-flavoured Beginner tier; KN-I provides the principal-bundle-flavoured Master tier. |
| `03.02.04` Frobenius | LDG Ch. III | **Ship once.** LDG is the canonical anchor (more leisurely than KN-I). |
| `03.03.04` Exponential / Maurer-Cartan | LDG Ch. III | **Ship once.** LDG is the canonical anchor. |
| `03.05.00` General fibre bundle | LDG Ch. VI (in $G$-structure form) | **Ship once.** LDG's Ch. VI is the natural Master-tier deepening. |
| `03.05.12` Reduction of structure group | LDG Ch. VI ($G$-structure) | **Ship once.** Add LDG Ch. VI as the master anchor; KN-I §II.7 as secondary. |
| `03.05.14` Torsion + structural equations | LDG Ch. V | **Ship once with two-anchor framing.** LDG gives the moving-frame Beginner tier; KN-I §III gives the principal-bundle Master tier. |
| `03.05.15` Soldering form / linear connection | LDG Ch. V | **Ship once with two-anchor framing.** Same as above. |
| `03.03.X1` Levi-Civita / exp / Hopf-Rinow | LDG Ch. V | **Ship once.** Also shared with Milnor MMT audit. |

Net effect: the LDG audit closes a small number of **LDG-distinctive**
gaps (Ch. VI prolongation algebra, Spencer cohomology, finite-type
classification, Cartan closed-subgroup theorem) but mostly **adds the
moving-frame Beginner tier** to units already on the KN-I punch-list.
The audit is therefore **moderate-sized as a standalone**, but with
heavy coordination cost against the KN-I audit.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Coordination note.** Every item below is flagged as either
**[LDG-only]** (no KN-I counterpart, ship from this audit) or
**[shared with KN-I item N]** (ship the unit once and cite both anchors).
Shared items are *not* duplicated production work; they appear here to
make the dependency explicit and to record the LDG framing that should
be added to the unit (typically as the Beginner tier or as a §Notation
moving-frame paragraph).

**Priority 0 — manifold-layer and Lie-group-layer prerequisites (all
shared with KN-I priority-0):**

1. **`03.02.02` Tangent bundle as a smooth vector bundle.**
   [shared with KN-I item 1] — KN-I §I.2 + LDG §II as joint master
   anchors. LDG's Beginner-tier framing (derivation at a point, germ of
   functions) is the more accessible entry.
2. **`03.02.03` Vector fields, Lie bracket, Lie derivative.**
   [shared with KN-I item 2] — KN-I §I.3 + LDG §III.1 joint master
   anchors. LDG also covers the **flow of a vector field** in this
   chapter; recommend folding the flow content here rather than a
   separate unit.
3. **`03.02.04` Frobenius theorem.** [shared with KN-I item 3] —
   LDG §III is the **canonical anchor**; KN-I §I.2 (Theorem 2.1) is
   secondary. The pedagogically distinctive Beginner-tier exposition
   (flow-of-vector-fields + Lie-bracket criterion) follows LDG.
4. **`03.03.04` Exponential map $\exp: \mathfrak{g} \to G$ and the
   Maurer-Cartan form.** [shared with KN-I item 4] — LDG §III is the
   **canonical anchor**; KN-I §I.4 is secondary; Warner Ch. 3 tertiary.
5. **`03.05.00` General fibre bundle.** [shared with KN-I item 5] —
   Steenrod §2–§3 as the master anchor; LDG §VI is the natural
   Master-tier deepening into the $G$-structure framing.

**Priority 1 — LDG-distinctive Ch. III + Ch. V additions:**

6. **`03.03.05` Cartan's closed-subgroup theorem.** [LDG-only]
   Every closed subgroup $H \subseteq G$ of a Lie group is a Lie
   subgroup (i.e. an embedded submanifold and a Lie group with the
   subspace topology). LDG §III anchor; Warner §3.21 secondary;
   originator Cartan 1930. ~1200 words. Intermediate + Master.
7. **`03.03.06` Lie's third theorem (statement, simply-connected case).**
   [LDG-only] Every finite-dim Lie algebra $\mathfrak{g}$ over
   $\mathbb{R}$ is the Lie algebra of a (unique, up to isomorphism)
   simply-connected Lie group $G$. LDG §III anchor; Lie's original
   1893 reference + Cartan 1930 + Serre *Lie Algebras and Lie Groups*
   FT 1.03 secondary anchors. ~1200 words. Master-dominant; Intermediate
   tier states without proof.
8. **`03.05.14` Torsion tensor and the two Cartan structural equations
   (moving-frame Beginner tier).** [shared with KN-I item 10] — LDG
   §V is the **canonical anchor** for the moving-frame Beginner tier.
   The KN-I principal-bundle Master tier remains primary. Notation
   crosswalk between $\theta^i$ / $\omega^i_j$ / $\Theta^i$ / $\Omega^i_j$
   (LDG) and $\theta$ / $\omega$ / $\Theta$ / $\Omega$ (KN-I) recorded
   in a §Notation paragraph.
9. **`03.05.15` Linear connection via the frame bundle and the
   soldering form (moving-frame Beginner tier).** [shared with KN-I
   item 11] — Same two-anchor framing as item 8.
10. **`03.03.X1` Levi-Civita connection, geodesics, exponential map,
    Hopf-Rinow.** [shared with KN-I item 12 and Milnor MMT punch-list]
    — KN-I §IV + LDG §V + Milnor MMT §10 joint master anchors. LDG
    provides the most pedagogical Beginner tier (moving-frame +
    explicit Christoffel symbols); KN-I provides the Master tier
    (principal-bundle + holonomy); Milnor provides the Morse-theoretic
    bridge to the index theorem.

**Priority 2 — LDG-distinctive Ch. VI ($G$-structures and prolongation,
the chapter that justifies the audit beyond KN-I):**

11. **`03.05.12` Reduction of structure group; $G$-structure on $M$.**
    [shared with KN-I item 8] — KN-I §II.7 + LDG §VI joint master
    anchors. LDG's $G$-structure framing as a reduction of $L(M)$ is
    pedagogically primary; the abstract reduction theorem from KN-I is
    the Master-tier statement.
12. **`03.05.X1` Integrability of a $G$-structure.** [LDG-only]
    Definition: a $G$-structure $P \subseteq L(M)$ is **integrable** if
    every $x \in M$ has a chart in which $P$ is the standard flat
    $G$-structure on $\mathbb{R}^n$. Examples: an
    $\mathrm{O}(n)$-structure (Riemannian metric) is integrable iff
    the metric is flat (Riemann curvature vanishes); a $\mathrm{GL}(n,
    \mathbb{C})$-structure (almost-complex structure) is integrable
    iff the Newlander-Nirenberg torsion vanishes. LDG §VI anchor;
    Sternberg-Guillemin 1964 *Bull. AMS* originator paper. ~1500 words.
    Intermediate + Master.
13. **`03.05.X2` First prolongation $G^{(1)}$ and Spencer cohomology.**
    [LDG-only] Define $G^{(1)} = (\mathfrak{g} \otimes (\mathbb{R}^n)^*)
    \cap (\mathbb{R}^n \otimes S^2 (\mathbb{R}^n)^*)$ where the
    intersection is taken inside the Spencer complex. Iteration
    $G \supseteq G^{(1)} \supseteq G^{(2)} \supseteq \cdots$.
    Spencer cohomology $H^{p, q}(\mathfrak{g})$ as the obstruction to
    further prolongation. LDG §VI anchor; Spencer 1962 (*Annals of
    Math.* 76) and Sternberg-Guillemin 1964 originators; Bryant et al.
    *Exterior Differential Systems* (Springer 1991) secondary anchor.
    ~2000 words. Master-dominant.
14. **`03.05.X3` $G$-structures of finite vs infinite type.**
    [LDG-only] Definition: $G$-structure is of **finite type** if
    some $G^{(k)} = 0$, **infinite type** otherwise. Riemannian
    ($\mathrm{O}(n)$), conformal ($\mathrm{CO}(n)$), and the projective
    structures are finite-type; symplectic ($\mathrm{Sp}(2n)$) and
    complex ($\mathrm{GL}(n, \mathbb{C})$) are infinite-type.
    Consequence: finite-type structures have finitely many local
    invariants determined by a finite jet of the structure; infinite-type
    structures have function-degree-of-freedom local data (whence
    Darboux's theorem for symplectic structures: no local invariants
    at all once $\dim M = 2n$ is fixed). LDG §VI anchor; Kobayashi
    *Transformation Groups in Differential Geometry* (Ergebnisse 1972)
    secondary. ~1500 words. Intermediate + Master.
15. **`03.05.X4` Guillemin-Sternberg classification of irreducible
    finite-type $G$-structures.** [LDG-only; pointer + Master-tier
    only] Statement of the classification (only $\mathrm{O}(n, p, q)$,
    $\mathrm{CO}(n, p, q)$, $\mathrm{GL}(n, \mathbb{R})$,
    $\mathrm{SL}(n, \mathbb{R})$, $\mathrm{Sp}(n, \mathbb{R})$ if we
    bend the definition of finite-type, and a few exceptional types).
    Guillemin-Sternberg 1964 *Bull. AMS* anchor. ~1000 words. Master-only
    pointer unit. The detailed classification proof is deferred to the
    research literature.

**Priority 3 — Ch. I + Ch. II foundational gaps shared with other
audits:**

16. **`03.02.X1` Submersions, immersions, and the regular value
    theorem.** [shared with Milnor MMT punch-list item 1] — Milnor's
    *Topology from the Differentiable Viewpoint* + LDG §II + Lee §5
    joint anchors. ~1500 words. Three-tier.
17. **`03.02.X2` Partitions of unity.** [LDG-only at this audit; also
    on the Lee audit when ready] — LDG §II + Lee §13 anchors. ~1000
    words. Intermediate + Master.
18. **`03.02.X3` Sard's theorem.** [shared with Milnor MMT punch-list]
    — Sard 1942 originator; Milnor *Topology from the Differentiable
    Viewpoint* §3 anchor; LDG §I secondary. ~1500 words. Three-tier.
19. **`03.02.X4` Whitney embedding theorem (weak,
    $M^n \hookrightarrow \mathbb{R}^{2n+1}$).** [LDG-only at this
    audit; could be a Milnor punch-list item] — LDG §II + Whitney
    1936 originator. ~1500 words. Intermediate + Master. The strong
    Whitney embedding ($M^n \hookrightarrow \mathbb{R}^{2n}$) is
    deferred to a Milnor *Topology from the Differentiable Viewpoint*
    audit.

**Priority 4 — survey pointers (optional, Master-only, mostly weaving
edits):**

20. **Pointer in `03.05.03-orthogonal-frame-bundle.md` to the new
    `03.05.12` and `03.05.X1` as the general $G$-structure context
    (with $\mathrm{O}(n)$-structure as the canonical example).**
    Single-paragraph weaving edit.
21. **Pointer in `cannas-da-silva-symplectic.md` audit and the
    `05-classical-mechanics/` chapter to `03.05.X3` for the
    *symplectic is infinite-type* explanation of Darboux's theorem.**
    Single-paragraph weaving edit.
22. **Pointer in the Sternberg later-book audits (FT 1.14 *Curvature
    in Math and Physics*, FT 1.15 *Group Theory and Physics*) to the
    Ch. VI prolongation units as the upstream Sternberg-tradition
    anchor.** Recorded so it is not forgotten in those audits.

---

## §4 Implementation sketch (P3 → P4)

For a full LDG coverage pass, priority-0+1 are the minimum set, but
priority-0+1 are **almost entirely shared with KN-I**; the LDG-only
production work begins at priority-1 items 6–7 and priority-2 items
12–15. Realistic production estimate:

- **Priority 0:** 5 units × ~2.5 hours = ~12 hours. **Shared with KN-I
  audit; do not double-count.** Counted toward the LDG audit only for
  the §Notation moving-frame additions and the §1-prose LDG anchor.
- **Priority 1:** 5 units × ~3.5 hours = ~17 hours, of which **3 units
  (Cartan closed-subgroup, Lie's third theorem; moving-frame additions
  to KN-I items 10/11; the joint Levi-Civita item) are LDG-distinctive
  net additions** = ~10 hours of LDG-only production.
- **Priority 2:** 5 units × ~4 hours = ~20 hours. **All LDG-only.**
  This is the chapter that justifies the Sternberg audit beyond the
  KN-I audit. Master-tier dominant because the Spencer-cohomology and
  prolongation algebra is technical.
- **Priority 3:** 4 units × ~2.5 hours = ~10 hours. Shared with Milnor
  and Lee audits.
- **Priority 4:** 3 weaving edits × ~30 min = ~1.5 hours.
- **LDG-only total (counting only net new units):** ~32 hours of
  focused production (priority-2 chapter + Cartan closed-subgroup +
  Lie's third + the moving-frame additions). Fits a focused 4–5 day
  window.
- **Full-coverage total (counting shared units once):** ~60 hours.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the following units
should carry originator-prose citations:

- **Élie Cartan**, "Sur la structure des groupes de transformations
  finis et continus," thèse, Paris 1894 — the *originator paper* for
  the moving-frame method and the structural equations. Cite in
  `03.05.14` and `03.05.15`.
- **Élie Cartan**, "Sur les variétés à connexion affine et la théorie
  de la relativité généralisée," *Annales scientifiques de l'É.N.S.*
  40 (1923) 325–412, *cont'd* 41 (1924) 1–25, 42 (1925) 17–88 — the
  development of affine connections via moving frames. Cite in
  `03.05.14`, `03.05.15` alongside the 1894 thesis. Shared with KN-I
  originator-citation list.
- **Élie Cartan**, "La théorie des groupes finis et continus et
  l'analysis situs," *Mémorial des sciences mathématiques* 42 (1930)
  — the closed-subgroup theorem; cite in `03.03.05`.
- **Hassler Whitney**, "Differentiable manifolds," *Annals of Math.*
  37 (1936) 645–680 — the weak embedding theorem $M^n \hookrightarrow
  \mathbb{R}^{2n+1}$; cite in `03.02.X4`.
- **Charles Ehresmann**, "Les connexions infinitésimales dans un
  espace fibré différentiable," *Colloque de topologie de Bruxelles*
  (1950) — formal connection on a principal bundle; shared with KN-I
  originator list. Cite in `03.05.07` and `03.05.11`.
- **Donald Spencer**, "Deformation of structures on manifolds defined
  by transitive, continuous pseudogroups," *Annals of Math.* 76 (1962)
  306–445 — Spencer cohomology; cite in `03.05.X2`.
- **Victor Guillemin, Shlomo Sternberg**, "An algebraic model of
  transitive differential geometry," *Bull. AMS* 70 (1964) 16–47 —
  the classification of finite-type irreducible $G$-structures; cite
  in `03.05.X2`, `03.05.X3`, `03.05.X4`.
- **Shlomo Sternberg**, *Lectures on Differential Geometry*,
  Prentice-Hall 1964 — the canonical consolidation; cite throughout
  as the in-Codex master anchor for Ch. V (moving-frame Beginner tier),
  Ch. VI ($G$-structures), and as a joint anchor with KN-I for the
  Riemannian-connection units.

**Notation crosswalk.** LDG writes:

- $(e_i)$, $(\theta^i)$ for moving frame and dual coframe on $M$
  (orthonormal when $G = \mathrm{O}(n)$); KN-I uses $(\theta)$ for
  the soldering 1-form and never names the frame field explicitly.
- $\omega^i_j$ for connection 1-forms in the moving frame; KN-I writes
  $\omega = (\omega^i_j) \in \Omega^1(L(M); \mathfrak{gl}(n))$ as the
  principal-bundle connection 1-form.
- $\Theta^i$ for the torsion 2-forms in the moving frame; $\Omega^i_j$
  for curvature 2-forms. KN-I uses $\Theta$ and $\Omega$ as the
  matrix / Lie-algebra-valued forms.
- LDG writes $G^{(k)}$ for the $k$-th prolongation of $\mathfrak{g}
  \subseteq \mathfrak{gl}(n, \mathbb{R})$; nothing analogous in KN-I.

The Babel Bible notation decision (per `docs/specs/UNIT_SPEC.md` §11) should:
**adopt KN-I's** $\omega$, $\Omega$, $\Theta$, $\theta$ verbatim as the
Master-tier presentation; **introduce LDG's** $\omega^i_j$, $\Omega^i_j$,
$\Theta^i$, $\theta^i$, $(e_i)$ as the Beginner-tier presentation in
the same units (`03.05.14`, `03.05.15`, `03.03.X1`); record the
correspondence in a §Notation paragraph stating that the principal-
bundle form is the pullback of the moving-frame form along a local
section $M \to L(M)$. For the prolongation units (`03.05.X1`–`03.05.X4`)
adopt LDG's $G^{(k)}$ notation verbatim — there is no KN-I counterpart.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in LDG (full
  P1 audit). **Deferred** until a local PDF is on disk in
  `reference/fasttrack-texts/01-fundamentals/Sternberg-LecturesOnDifferentialGeometry.pdf`
  (the natural location, since FT 1.10 is a §1 *fundamentals* entry).
  This stub works from canonical TOC knowledge + Codex internal
  evidence and is therefore **REDUCED**.
- **Sternberg, *Curvature in Mathematics and Physics*** — Fast Track
  1.14 (Dover 2012). Deferred to a separate audit. Covers GR + gauge
  theory at the geometric-mechanics level; the Ch. VI prolongation
  apparatus of LDG is its upstream anchor.
- **Sternberg, *Group Theory and Physics*** — Fast Track 1.15 (CUP
  1994). Deferred to a separate audit. Covers representation theory
  applied to quantum mechanics; partial overlap with Fulton-Harris
  and Woit audits.
- **Symplectic + Hamiltonian mechanics (LDG Ch. VII).** The canonical
  Codex anchor for the symplectic side is **Cannas-da-Silva**
  (`cannas-da-silva-symplectic.md`); for the Hamiltonian-mechanics side
  it is **Arnold *Mathematical Methods of Classical Mechanics***
  (FT 1.01). LDG Ch. VII is a preview; substantive coverage belongs
  to those audits.
- **Geometric mechanics in the Marsden-Weinstein / moment-map /
  reduction sense.** Deferred to Cannas-da-Silva + the future
  Marsden-Ratiu *Introduction to Mechanics and Symmetry* audit if
  catalogued.
- **Exterior differential systems / EDS (Bryant-Chern-Gardner-
  Goldschmidt-Griffiths).** LDG Ch. VI is the conceptual ancestor of
  EDS, but the modern EDS treatment is its own subject; deferred to a
  potential Bryant et al. audit, not on the current Fast Track list.
- **Riemannian comparison geometry, Ricci flow, geometric analysis.**
  Far downstream of LDG. Shared with the KN-I and Jost audits.
- **Pseudo-Riemannian / Lorentzian geometry.** LDG is positive-definite
  throughout. Pseudo-Riemannian belongs to the *Semi-Riemannian
  Geometry* Sternberg-PDF (FT-adjacent, locally available at
  `reference/fasttrack-texts/01-fundamentals/Sternberg-SemiRiemannianGeometry.pdf`)
  and to O'Neill's textbook; deferred.

---

## §6 Acceptance criteria for FT equivalence (LDG)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of LDG's named theorems in Chs. I–VI map to Babel Bible units. Ch.
  VII is **scoped out** (covered by Cannas + Arnold audits). Current
  ~30%; after priority-0+1 rises to ~75%; after priority-0+1+2 to
  ~93%; full ≥95% requires priority-3.
- ≥90% of LDG's worked examples in Chs. I–VI have either a direct
  unit or are referenced from a unit covering them. The canonical
  LDG worked examples are: the orthonormal-coframe computation on the
  round sphere $S^n \subseteq \mathbb{R}^{n+1}$ (Ch. V); the
  Maurer-Cartan form on $\mathrm{GL}(n, \mathbb{R})$ (Ch. III); the
  flat-model integrability check for each of the standard $G$-structures
  (Ch. VI).
- The moving-frame Beginner-tier additions are present in `03.05.09`,
  `03.05.14`, `03.05.15`, `03.03.X1` per §3 items 8–10.
- The Ch. VI prolongation chain (`03.05.X1`–`03.05.X4`) ships as a
  contiguous four-unit cluster, weaving back to `03.05.03-orthogonal-
  frame-bundle.md` and to the Cannas-da-Silva audit (per §3 priority-4
  weaving items).
- Notation decisions (moving-frame vs principal-bundle conventions)
  are recorded in `03.05.14`, `03.05.15`, `03.05.X1` per §4.
- Originator-prose citations of Cartan 1894 / 1923–25 / 1930, Whitney
  1936, Ehresmann 1950, Spencer 1962, Guillemin-Sternberg 1964, and
  Sternberg 1964 are present in the relevant units.
- Shared-with-KN-I items ship exactly once with joint anchor citations;
  the KN-I and LDG audits do not double-count production work.

The 5 priority-0 + 5 priority-1 units close the bulk of the shared
manifold + Lie-group + Riemannian-connection gap (most of which is
already on the KN-I punch-list). Priority-2 closes the **LDG-only
distinctive content** ($G$-structures + prolongation + Spencer
cohomology + Guillemin-Sternberg classification) — this is what makes
the audit worth doing as a separate pass rather than folding into KN-I.
Priority-3 closes the foundational Ch. I + Ch. II gaps shared with the
Milnor audit.

**What survives as Sternberg-only content after KN-I and Jost have
shipped?** The Ch. VI prolongation chain (items 12–15: integrability,
Spencer cohomology, finite vs infinite type, Guillemin-Sternberg
classification), the Cartan closed-subgroup theorem (item 6) and Lie's
third theorem (item 7) at the level developed in LDG Ch. III, and the
*moving-frame Beginner-tier presentation* of the Cartan structural
equations in `03.05.14`–`03.05.15` and `03.03.X1`. Everything else
either ships once on the KN-I punch-list or is scoped out to the
Cannas / Arnold / Milnor audits. The Ch. VI prolongation cluster is
the single strongest argument for a separate Sternberg audit; without
it, LDG would reduce to "the moving-frame Beginner tier of the KN-I
units" and the audit could fold into KN-I.

---

## §7 Sourcing

- **Not free.** LDG is under active Chelsea / AMS copyright (Chelsea
  reprint 1983, AMS-Chelsea Series, ISBN 0-8284-0316-3). The author's
  Harvard page (`people.math.harvard.edu/~shlomo/`) hosts six other
  Sternberg books — *Real Variables*, *Advanced Calculus* (the
  preferred LDG prerequisite), *Dynamical Systems*, *Lie Algebras*,
  *Semi-Riemannian Geometry*, *Semi-Classical Analysis* — but
  explicitly does **not** host *Lectures on Differential Geometry*.
  WebFetch on the Harvard page (2026-05-17) confirmed the omission.
  Print copies (AMS-Chelsea reprint) are readily available second-hand
  in the $40–80 range.
- **Local copy.** **Not present** in `reference/fasttrack-texts/01-fundamentals/`
  at the time of this audit. The five Sternberg PDFs already on disk
  are the later books (Advanced Calculus, Dynamical Systems, Lie
  Algebras, Semi-Riemannian, Semi-Classical) — none is LDG. A scanned
  copy should be added to
  `reference/fasttrack-texts/01-fundamentals/Sternberg-LecturesOnDifferentialGeometry.pdf`
  before the production pass on the priority-2 punch-list units, so
  line-number citations to LDG Ch. VI can be resolved.
- **Companion peer texts (cited in §1):**
  - **L. Tu**, *Differential Geometry: Connections, Curvature, and
    Characteristic Classes*, Graduate Texts in Mathematics 275,
    Springer 2017. The most accessible modern rewriting of the LDG
    Ch. V principal-bundle material in moving-frame and principal-
    bundle parallel form. Preferred secondary anchor for the shared
    KN-I priority-1 units.
  - **M. Spivak**, *A Comprehensive Introduction to Differential
    Geometry, Vols. I–II*, Publish or Perish (3rd ed. 1999). Vol. I
    Chs. 1–6 parallels LDG Chs. I–II at a slower pace with extensive
    figures; Vol. II Chs. 7–8 parallels LDG Ch. V (Cartan structural
    equations). The Spivak treatment of $G$-structures (Vol. II Ch. 9
    "what connections are good for") is the closest peer treatment
    of LDG Ch. VI in print.
  - **M. P. do Carmo**, *Riemannian Geometry*, Birkhäuser 1992. The
    standard graduate Riemannian-geometry text; covers LDG Ch. V at a
    more leisurely pace, with the moving-frame computation on $S^n$
    as a worked example. Peer anchor for `03.03.X1` Beginner tier.
  - **W. Boothby**, *An Introduction to Differentiable Manifolds and
    Riemannian Geometry*, Academic Press (2nd revised ed. 2003).
    Canonical American 1970s textbook that follows the LDG ordering
    (Lie groups before differential forms). Peer anchor for the
    shared priority-0 manifold and Lie-group units.
  - **F. W. Warner**, *Foundations of Differentiable Manifolds and
    Lie Groups*, Graduate Texts in Mathematics 94, Springer 1983.
    The other canonical American 1970s textbook in the LDG tradition;
    Ch. 3 is the cleanest exposition of the Cartan closed-subgroup
    theorem and Lie's third theorem at the level required for the
    priority-1 items 6–7.
  - **R. Bryant, S.-S. Chern, R. Gardner, H. Goldschmidt, P.
    Griffiths**, *Exterior Differential Systems*, MSRI Publications
    18, Springer 1991. The modern EDS treatment; Ch. III + Appendix A
    cover Spencer cohomology and the prolongation algorithm at full
    research depth. Cite as the master Master-tier anchor for
    `03.05.X2`.
  - **S. Kobayashi**, *Transformation Groups in Differential
    Geometry*, Ergebnisse der Mathematik 70, Springer 1972. Covers
    $G$-structures and the prolongation algorithm at a level between
    LDG Ch. VI and Bryant et al. EDS. Cite in `03.05.X1`–`03.05.X4`
    as a secondary anchor.
  - **Sternberg's own later works** (FT 1.04 *Advanced Calculus* —
    locally available; FT 1.14 *Curvature in Math and Physics* — to
    be sourced; FT 1.15 *Group Theory and Physics* — to be sourced)
    are the downstream Sternberg-tradition continuations.
- **Originator-paper archive locations:**
  - Cartan 1894 thèse — open access via NUMDAM / Œuvres complètes.
  - Cartan 1923–25 *Annales sci. ÉNS* — open access via NUMDAM.
  - Cartan 1930 *Mémorial sci. math.* — open access via NUMDAM.
  - Whitney 1936 *Annals of Math.* — JSTOR.
  - Ehresmann 1950 *Colloque de topologie de Bruxelles* — collected
    works; print only.
  - Spencer 1962 *Annals of Math.* — JSTOR.
  - Guillemin-Sternberg 1964 *Bull. AMS* — AMS open archive.
  - Sternberg 1964 LDG itself — AMS-Chelsea reprint; copyright; print
    only (and as the audit target, the priority sourcing item).
