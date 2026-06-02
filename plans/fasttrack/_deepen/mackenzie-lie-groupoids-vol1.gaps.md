# Deepening gaps — Mackenzie, *Lie Groupoids and Lie Algebroids in Differential Geometry* (FT 1.08)

**Slug:** `mackenzie-lie-groupoids-vol1`
**Date:** 2026-06-02
**Method:** Re-audited the first-pass plan (`plans/fasttrack/mackenzie-lie-groupoids-vol1.md`) §2 coverage table and §3 punch-list against the live corpus.

## Headline

The first-pass audit was written when the corpus had **zero** groupoid/algebroid units. Since then the **entire priority-1, priority-2, and priority-3 NEW punch-list shipped**: `03.03.10` (Lie groupoid), `03.03.11` (action groupoid/algebroid), `03.03.12` (bisection group), `03.03.13` (groupoid as small category), `03.04.16` (Lie algebroid), `03.04.17` (Lie functor), `03.04.18` (Pradines integration + transitive integrability), `03.04.19` (cotangent algebroid of a Poisson manifold), `03.05.21` (gauge groupoid + Mackenzie correspondence), `03.05.22` (Atiyah algebroid), `03.05.23` (connection as splitting of the Atiyah sequence). The deepenings into `03.05.07/.09`, `03.07.18`, `03.04.01`, `03.03.06`, `03.12.08` are also reflected (curvature-as-bracket-defect, flat-connection-as-bracket-homomorphism, isotropy=structure-group, etc.).

After verification the book is **~90%+ covered**. Only **2 genuine gaps** remain — both are constructions the first-pass audit mentioned only *inside* other units (as the home of the integration obstruction and as a Ch. III/V pointer) but never broke out as standalone units. Each is a load-bearing Mackenzie-1.08 object with no equivalent anywhere in the corpus.

---

## Genuine gaps (2)

### GAP 1 — Lie algebroid cohomology and the algebroid de Rham differential complex

- **proposed id:** `03.04.22`  (free; `03.04` occupied through `.21`)
- **title:** Lie algebroid cohomology: the de Rham differential complex of a Lie algebroid
- **spec:** For a Lie algebroid $A \to M$, build the differential $d_A$ on $\Gamma(\Lambda^\bullet A^*)$ by the Chevalley-Eilenberg / de Rham formula (anchor on functions, bracket on sections); show $d_A^2 = 0$; define $H^\bullet(A)$; recover de Rham ($A=TM$), Lie-algebra cohomology ($A=\mathfrak g$ over a point), and foliated cohomology ($A=$ integrable distribution); identify the integration obstruction of [03.04.18] as a class in $H^2(A;\ker\rho)$.
- **prereqs:** `03.04.16` (Lie algebroid: anchor, bracket, Leibniz) [verified exists]; `03.04.06` (de Rham cohomology) [verified]; `03.04.01` (Lie algebra) [verified]; `03.04.18` (Pradines integration — the obstruction's home) [verified].
- **chapter dir:** `content/03-modern-geometry/04-differential-forms/`; frontmatter `chapter: differential-forms`, section 03.04.
- **why genuine:** `grep -rliE "Lie algebroid cohomology|Chevalley-Eilenberg differential of (a|the) algebroid|algebroid de Rham|d_A"` over `content/` returns **nothing**. `03.04.18` *states* the obstruction "sits in the second Lie-algebroid cohomology $H^2(A;\ker\rho)$" but never constructs the complex; `03.04.16` defines the bracket/anchor but stops before the dual differential. The CE/de Rham complex of an algebroid is Mackenzie Ch. III (the cohomology theory the 2005 preface flags as fixed by the 1987 book — see `03.04.16` originator note "the Atiyah-sequence picture of connections, and the cohomology theory") and is the technical object underlying the entire Cluster IV integration story. High-value, foundational, absent.

### GAP 2 — Representations of Lie algebroids and flat A-connections

- **proposed id:** `03.04.23`  (free)
- **title:** Representations of a Lie algebroid: flat A-connections on a vector bundle
- **spec:** Define a representation of a Lie algebroid $A$ on a vector bundle $E \to M$ as a flat $A$-connection $\nabla:\Gamma(A)\times\Gamma(E)\to\Gamma(E)$ with $\nabla_{f\sigma}=f\nabla_\sigma$, $\nabla_\sigma(fe)=f\nabla_\sigma e+(\rho(\sigma)f)e$, and curvature $R(\sigma,\tau)=[\nabla_\sigma,\nabla_\tau]-\nabla_{[\sigma,\tau]}=0$; recover flat vector bundles / $\pi_1$-representations ($A=TM$), Lie-algebra representations ($A=\mathfrak g$), and the adjoint/isotropy representation of a transitive algebroid; relate to the $A$-de Rham complex with coefficients of GAP 1.
- **prereqs:** `03.04.16` (Lie algebroid) [verified]; `03.05.04` (vector bundle connection) [verified]; `03.05.23` (connection as splitting / flat = bracket homomorphism — the principal-bundle special case) [verified]; `03.04.22` (algebroid de Rham, for coefficient cohomology) [proposed above].
- **chapter dir:** `content/03-modern-geometry/04-differential-forms/`; frontmatter `chapter: differential-forms`, section 03.04.
- **why genuine:** `grep -rliE "representation of a Lie algebroid|A-connection|flat A-connection|algebroid connection"` over `content/` returns only an unrelated Levi-Civita hit (`03.02.27`). The corpus covers *principal-bundle* connections and the *flat-splitting = bracket-homomorphism* picture (`03.05.23`, `03.05.22`) but never the **general representation of an arbitrary Lie algebroid on a vector bundle** (Mackenzie Ch. III §2 / Ch. V), the natural target category for the algebroid cohomology of GAP 1 and the gateway to representations-up-to-homotopy. Standalone construction; absent.

---

## COVERED (not gaps) — verified due diligence

Every priority-1/2/3 NEW item from the first-pass punch-list is shipped; verified by filename + body grep.

- **Lie groupoid (source/target/units, smooth composition, source-fibre as submanifold)** — COVERED `03.03.10-lie-groupoid-source-target-smooth-composition.md` (defines $G\rightrightarrows M$, submersions $s,t$, source fibre $s^{-1}(x)$ embedded, isotropy-groups-are-Lie-groups theorem with proof).
- **Pair groupoid / action groupoid / fundamental Lie groupoid examples** — COVERED `03.03.10` (pair groupoid worked example) + `03.03.11` (action groupoid) + `03.12.08-fundamental-groupoid.md`.
- **Transitive vs intransitive; orbits; orbit foliation; holonomy & monodromy groupoids of a foliation** — COVERED `03.03.10` §"Orbits, the anchor, and the orbit foliation" (names holonomy/monodromy groupoids at pointer depth, appropriate for 1987 scope).
- **Groupoid as small category with invertible morphisms; isotropy/vertex group; morphisms** — COVERED `03.03.13-groupoid-as-a-small-category-with-invertible-morphisms.md`.
- **Gauge groupoid $(P\times P)/G$; Mackenzie structural classification (every transitive Lie groupoid is a gauge groupoid)** — COVERED `03.05.21-gauge-groupoid-of-a-principal-bundle.md` §"Mackenzie's correspondence" (both directions, isotropy = structure group, reductions ↔ wide transitive subgroupoids).
- **Bisection group; gauge transformations as bisections; $\mathrm{Aut}(P)$** — COVERED `03.03.12-bisection-group-of-a-lie-groupoid.md` (+ `03.07.18` framing).
- **Lie algebroid (anchor, bracket, Leibniz, Jacobi); $TM$, $\mathfrak g$, action algebroid, integrable distribution, Atiyah algebroid as examples** — COVERED `03.04.16-lie-algebroid-anchor-bracket-leibniz-law.md` (all five examples present, incl. Atiyah and Poisson/Koszul).
- **Transitive algebroid; short exact sequence $0\to L\to A\to TM\to 0$; isotropy bundle** — COVERED `03.04.16` + `03.05.22` (Atiyah sequence with $\mathrm{ad}(P)$ kernel).
- **Atiyah algebroid $\mathrm{At}(P)=TP/G$; trivial-bundle splitting; flat connection as the canonical split** — COVERED `03.05.22-atiyah-algebroid-of-a-principal-bundle.md`.
- **Lie functor $G\mapsto A(G)=\ker(ds)|_M$; right-invariant fields; $A(M\times M)=TM$, $A(G\ltimes M)=\mathfrak g\ltimes M$, $A((P\times P)/G)=\mathrm{At}(P)$** — COVERED `03.04.17-lie-functor-differentiating-a-lie-groupoid.md` + `03.04.16` §"The Lie functor".
- **Pradines integration problem; local-integration theorem; Mackenzie/Almeida-Molino non-integrable counterexample; transitive integrability; monodromy groups; Crainic-Fernandes Weinstein groupoid of $A$-paths** — COVERED `03.04.18-pradines-integration-and-transitive-integrability.md` (Weinstein groupoid $\mathcal G(A)$, $A$-homotopy, monodromy $\mathcal N_x(A)\subseteq Z(\mathfrak g_x)$, the criterion).
- **Connection as splitting $\gamma:TM\to\mathrm{At}(P)$; algebroid curvature $R_\gamma=[\gamma X,\gamma Y]-\gamma[X,Y]$; dictionary to KN-I $\omega,\Omega$; flat = bracket homomorphism; Atiyah-Bott moment-map picture** — COVERED `03.05.23-connection-as-splitting-of-the-atiyah-algebroid.md` (+ `03.05.21` §"Connections as splittings").
- **Cotangent algebroid of a Poisson manifold (anchor $\pi^\sharp$, Koszul bracket); linear Poisson on $\mathfrak g^*$; symplectic foliation / leaves; integration to a symplectic groupoid (multiplicative $\Omega$, Lagrangian graph); Weinstein/Coste-Dazord-Weinstein/Karasev; Crainic-Fernandes 2004 Poisson criterion** — COVERED `03.04.19-cotangent-algebroid-of-a-poisson-manifold.md` (full symplectic-groupoid pointer at the depth Mackenzie 1987 itself uses; deeper theory is correctly parked for FT 1.09).
- **Poisson bracket / Poisson manifold; coadjoint orbit; symplectic manifold** — COVERED `05.02.02-poisson-bracket.md`, `05.03.01-coadjoint-orbit.md` (per brief; cotangent-algebroid framing in `03.04.19`).
- **Lie's third theorem (classical Lie-group analogue of integration)** — COVERED `03.03.06-lie-third-theorem.md` (algebroid analogue/failure woven into `03.04.18`).
- **Frobenius / integrable distribution** — COVERED `03.02.04-frobenius-theorem.md` (algebroid framing in `03.04.16`).
- **Principal bundle, principal-bundle connection, curvature, frame bundle, holonomy, reduction of structure group** — COVERED `03.05.01`, `03.05.07`, `03.05.09`, `03.05.15`, `03.05.16/.17/.18`, `03.05.12`.
- **Symplectic groupoid as a standalone unit / multiplicative symplectic form** — checked: only pointer mentions exist (`03.04.19`, `05.02.02`, `05.11.03`). NOT proposed as a gap: Mackenzie 1987 itself does not develop symplectic-groupoid theory (it is the post-1987 Coste-Dazord-Weinstein / Mackenzie-Xu material the first-pass audit and §6 explicitly hand off to **FT 1.09**). Belongs to the vol-2 audit, not here.
- **Courant algebroids, Lie bialgebroids, double Lie groupoids, Poisson groupoids, VB-groupoids** — checked: absent, but all **post-1987** and out of scope per first-pass §6; deferred to FT 1.09. Not gaps for this book.

---

## Report

- **Genuine gaps:** 2 (`03.04.22` Lie algebroid cohomology / de Rham complex; `03.04.23` representations of Lie algebroids / flat A-connections).
- **COVERED-verified topics:** 19 topic clusters (all priority-1/2/3 NEW units from the first-pass punch-list confirmed shipped, plus deferred-to-1.09 items confirmed out of scope).
- **Gap file:** `plans/fasttrack/_deepen/mackenzie-lie-groupoids-vol1.gaps.md`
