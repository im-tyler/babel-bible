# Atiyah — *Geometry of Yang-Mills Fields* (Fast Track 3.20) — Audit + Gap Plan

**Book:** Michael F. Atiyah, *Geometry of Yang-Mills Fields* (Lezioni
Fermiane). Accademia Nazionale dei Lincei / Scuola Normale Superiore,
Pisa, 1979. iv + 99 pp. (Edizioni della Normale; reprinted as
*Publications of the Scuola Normale Superiore*, ISBN 978-88-7642-303-1.)

**Fast Track entry:** 3.20. Modern-Geometry strand (B), gauge-theory
slot. Sits between Kobayashi-Nomizu Vol. 2 (FT 3.19, sibling audit
running this cycle) and Donaldson's *Floer Homology Groups in Yang-Mills
Theory* (FT 3.06). It is the canonical concise launchpad text for the
geometric / algebraic-bundle side of four-dimensional gauge theory and
the historical entry point to Donaldson theory.

**Source PDF:** Not present in `reference/textbooks-extra/`. Cover image
is archived at
`reference/fast-track/images/Atiyah-Yang-Mills-Fields-742x1024__05da96f1d2.jpg`
(already cited from `03.07.05-yang-mills-action.md`). The book itself
is sold by Edizioni della Normale (Scuola Normale Superiore Pisa); a
scanned copy circulates on academic mirrors (Ranicki / Edinburgh maths)
but is not bundled with the Babel Bible. WebFetch of the canonical Ranicki
mirror returned a 404 in this audit pass; the chapter structure used
below is reconstructed from the table-of-contents excerpts surfaced by
WebSearch (researchgate, semanticscholar, scribd, inspirehep) and
cross-checked against Donaldson-Kronheimer (1990) §3 + Freed-Uhlenbeck
(1991) §3 + Atiyah-Hitchin-Drinfeld-Manin 1978 *Phys. Lett. A* 65
(the ADHM paper Atiyah's Pisa lectures are designed to present).

**Audit type:** P1-lite audit + P2 gap pass + P3-lite punch-list,
mirroring `brown-higgins-sivera-nonabelian-algebraic-topology.md` and
`milnor-stasheff-characteristic-classes.md`.

**Plan status:** `reduced` — no direct PDF access in this pass.
Audit works from the book's published table of contents and the
well-documented ADHM construction that the book exists to present.
Sufficient to drive the production punch-list to FT-equivalence.
Full P1 line-number inventory deferred pending direct PDF access.

---

## §1 What Atiyah's *Geometry of Yang-Mills Fields* is for

Atiyah's Pisa lectures are the **canonical concise monograph**
presenting the 1977–1978 geometric reformulation of four-dimensional
SU(2) instantons. Where Yang-Mills theory had begun in 1954 as a
physics theory of non-abelian gauge fields, by 1975 Belavin, Polyakov,
Schwartz and Tyupkin had discovered the first finite-action solution
(the BPST instanton on $S^4$), and by 1978 Atiyah, Drinfeld, Hitchin
and Manin had reduced the problem of constructing **all** instantons
on $S^4$ to a problem in linear algebra (the ADHM construction). The
Pisa lectures crystallise this entire programme in roughly 100 pages,
written by Atiyah while the dust was still settling.

The book is *the* launchpad text for Donaldson theory: Donaldson's
1983 thesis and the 1990 Donaldson-Kronheimer book both build directly
on the moduli-of-instantons picture Atiyah presents here.

Distinctive contributions, in roughly the order the seven chapters
develop them:

1. **Physics background and the field equations (Ch. 1).** From
   Yang-Mills 1954 to the self-dual / anti-self-dual decomposition in
   four dimensions. The Yang-Mills Lagrangian $\tfrac12\|F_A\|^2$, the
   action minimisers in a fixed topological sector
   $c_2 = k \in \mathbb{Z}$, and the Bogomolny / Belavin-Polyakov-
   Schwartz-Tyupkin 1975 lower bound
   $\mathrm{YM}(A) \geq 8\pi^2 |k|$ with equality precisely on
   (anti-)self-dual connections. Asymptotic conditions justifying the
   one-point conformal compactification $\mathbb{R}^4 \to S^4$.
2. **Instantons on $S^4$ (Ch. 2).** Quaternionic description of the
   basic BPST instanton, its $\mathrm{SU}(2)$-bundle on $S^4$ with
   $c_2 = 1$, and the conformal-invariance / quaternionic-multiplication
   structure that makes the instanton equation tractable. Geometrical
   interpretation via $\mathbb{HP}^1 \cong S^4$.
3. **Penrose twistor space (Ch. 3).** The Penrose correspondence
   $S^4 \leftarrow \mathbb{P}^3(\mathbb{C})$ — twistor space of $S^4$
   is $\mathbb{CP}^3$ — and its real structure. Twistor lines as the
   fibres of $\mathbb{CP}^3 \to S^4$. This is the bridge to algebraic
   geometry: ASD connections on a bundle over $S^4$ pull back to
   holomorphic structures on bundles over $\mathbb{CP}^3$.
4. **Holomorphic-bundle reformulation / Ward correspondence (Ch. 4).**
   The Atiyah-Ward theorem: ASD $\mathrm{SU}(2)$-connections on $S^4$
   correspond bijectively to rank-2 holomorphic bundles on
   $\mathbb{CP}^3$ that are trivial on twistor lines and carry a real
   structure. Complex coordinates on $\mathbb{R}^4$, holomorphic
   versus unitary gauges, the twistor interpretation of instantons.
   Bundles over $\mathbb{P}^1(\mathbb{C})$ as the local model.
5. **Construction of algebraic bundles / Horrocks–ADHM (Ch. 5).**
   The *signature theorem of the book*. The Horrocks monad construction
   for algebraic bundles on $\mathbb{CP}^3$; the linear-algebraic data
   (a quadruple of matrices satisfying a quadratic ADHM constraint)
   from which every $k$-instanton is reconstructed. Quaternionic
   reformulae. This is the **Atiyah-Drinfeld-Hitchin-Manin
   construction** (1978).
6. **Linear field equations in a Yang-Mills background (Ch. 6).**
   The Penrose transform at linear level: spinor / Dirac fields in an
   instanton background. Bundles and sheaf cohomology
   ($H^1(\mathbb{CP}^3, \mathcal{O}(-2)) \to$ massless fields on $S^4$).
   The 't Hooft ansatz as a special case. Relation with the Radon
   transform.
7. **Theorems on algebraic bundles (Ch. 7).** Cohomology of the
   Horrocks construction; Barth's theorem on rank-2 bundles on
   $\mathbb{CP}^3$; the reality constraints that pick out
   $\mathrm{SU}(2)$- versus $\mathrm{SL}(2,\mathbb{C})$-bundles.
   Closes the loop: every ASD $\mathrm{SU}(2)$-instanton on $S^4$ is
   ADHM, and every ADHM datum gives an instanton.

The book is **not** a first introduction to bundles or Yang-Mills.
It assumes Kobayashi-Nomizu-level differential geometry (principal
bundles, connections, curvature, Chern classes), basic algebraic
geometry over $\mathbb{CP}^n$ (sheaf cohomology, line bundles
$\mathcal{O}(n)$), and physicist-level Yang-Mills vocabulary. It is
the canonical bridge from the differential-geometric and physics
sides into the algebraic-geometric / twistor reformulation.

**Peer cross-references** (the four cited reference texts and where
they overlap Atiyah's Pisa lectures):

- **Donaldson, Kronheimer, *The Geometry of Four-Manifolds* (Oxford,
  1990).** §2 (Yang-Mills, ASD equations), §3 (the moduli space of
  instantons), §6 (ADHM construction). Donaldson-Kronheimer is the
  definitive *modern* treatment; Atiyah's Pisa lectures are the
  *original launchpad* that Donaldson-Kronheimer §3 and §6 expand and
  rigorise. Codex anchor: `03.07.05` cites Donaldson-Kronheimer §2 as
  a Master-tier source.
- **Freed, Uhlenbeck, *Instantons and Four-Manifolds* (MSRI
  Publications 1, Springer, 1984; 2nd ed. 1991).** §3 (the ADHM
  construction), §4 (the moduli space). Freed-Uhlenbeck is the most
  pedagogical complement to Atiyah's Pisa lectures: the bare minimum
  prerequisites are spelled out and ADHM is constructed with full proofs.
- **Bleecker, *Gauge Theory and Variational Principles* (Addison-Wesley
  1981; Dover reprint 2005).** Ch. 3–4. Bleecker treats the
  differential-geometric foundations of Yang-Mills (principal bundles
  with connection, curvature, the action) in detail; complements
  Atiyah by filling in the bundle-theoretic prerequisites Atiyah
  assumes.
- **Atiyah, Hitchin, Drinfeld, Manin, "Construction of instantons,"
  *Physics Letters A* 65 (1978) 185–187.** The four-page paper that
  the Pisa lectures expand into a book. The originating ADHM citation.

Two further critical originator citations:

- **Yang, C. N. and Mills, R. L., "Conservation of isotopic spin and
  isotopic gauge invariance," *Physical Review* 96 (1954) 191–195.**
  The action functional Atiyah's book studies.
- **Belavin, A. A., Polyakov, A. M., Schwartz, A. S., Tyupkin, Yu. S.,
  "Pseudoparticle solutions of the Yang-Mills equations," *Physics
  Letters B* 59 (1975) 85–87.** The original BPST one-instanton.

---

## §2 Coverage table (Babel Bible vs Atiyah Pisa lectures)

Cross-referenced against the current corpus. The
`03-modern-geometry/07-gauge-theory/` chapter has **exactly one shipped
unit**: `03.07.05-yang-mills-action.md`. The `05-bundles/` chapter
covers principal bundles, connections, curvature (`03.05.01`,
`03.05.07`, `03.05.09`). The `06-characteristic-classes/` chapter
covers Pontryagin / Chern classes (`03.06.04`) and Chern-Weil
(`03.06.06`). The Riemann-surfaces chapter (Ch. 6) has the
Atiyah-Bott Riemann-surface picture sketched in `03.07.05`'s Master tier
but no dedicated unit. The four-manifold / instanton / ADHM machinery
is essentially **absent** from the Babel Bible.

✓ = covered, △ = partial / different framing, ✗ = not covered.

| Atiyah topic | Chapter | Babel Bible unit(s) | Status | Note |
|---|---|---|---|---|
| Yang-Mills Lagrangian $\tfrac12\|F_A\|^2$ | 1 | `03.07.05` | ✓ | Shipped at all three tiers; gauge invariance proved. |
| Euler-Lagrange equation $d_A^* F_A = 0$ | 1 | `03.07.05` | ✓ | Derived in Master-tier proof set. |
| Bianchi identity $d_A F_A = 0$ | 1 | `03.05.09` | ✓ | Master tier of curvature unit. |
| Self-dual / anti-self-dual decomposition $\Omega^2 = \Omega^2_+ \oplus \Omega^2_-$ on 4-manifolds | 1 | `03.07.05` (Master) | △ | Stated and used; no dedicated unit on the Hodge-* eigenspace decomposition in dimension 4. |
| ASD equation $F_A^+ = 0$ | 1 | `03.07.05` (Master, Exercise 6) | △ | Proved to be Yang-Mills; not its own unit. |
| Topological charge $c_2(E) = \tfrac{1}{8\pi^2}\int \mathrm{tr}(F \wedge F)$ | 1 | `03.05.09` + `03.06.04` | △ | Closedness of $\mathrm{tr}(F \wedge F)$ shown; quantisation $\in \mathbb{Z}$ and normalisation $8\pi^2$ stated in `03.07.05` Master Synthesis but not derived. |
| Bogomolny / BPST bound $\mathrm{YM}(A) \geq 8\pi^2 \|c_2(E)\|$ | 1 | `03.07.05` (Master) | △ | Stated in Synthesis; no proof unit. |
| Asymptotic conditions, conformal compactification $\mathbb{R}^4 \to S^4$ | 1 | — | ✗ | **Gap.** Foundational for the instanton moduli space (finite-action solutions extend). |
| BPST one-instanton (1975) | 2 | — | ✗ | **Gap.** No worked unit on the explicit $k=1$ instanton; mentioned only in `03.07.05` Historical context. |
| Quaternionic description of $S^4 \cong \mathbb{HP}^1$ | 2 | — | ✗ | **Gap.** $\mathbb{HP}^1$ is mentioned in `09-spin-geometry` triality unit but not as the conformal compactification of $\mathbb{R}^4$. |
| Conformal invariance of Yang-Mills in dim 4 | 1–2 | — | ✗ | **Gap.** Foundational: explains why finite action on $\mathbb{R}^4$ ⇔ extension to $S^4$. |
| Penrose twistor space $\mathbb{CP}^3 \to S^4$ | 3 | — | ✗ | **Gap.** Twistor theory is essentially absent from the Babel Bible. |
| Real structure on $\mathbb{CP}^3$ (twistor) | 3 | — | ✗ | **Gap.** |
| Ward correspondence (ASD bundles on $S^4$ ↔ holomorphic bundles on $\mathbb{CP}^3$ trivial on lines) | 4 | — | ✗ | **Gap (high priority — the central theorem of Ch. 3–4).** |
| Holomorphic vs unitary gauge | 4 | — | ✗ | **Gap.** |
| Holomorphic bundles on $\mathbb{CP}^1$ (Grothendieck splitting) | 4 | `04.05.03` (line bundle, alg-geom side) | △ | Line bundles covered; Grothendieck's splitting theorem $E = \bigoplus \mathcal{O}(a_i)$ not in a dedicated unit. |
| Horrocks monad construction on $\mathbb{CP}^3$ | 5 | — | ✗ | **Gap.** Pure algebraic-geometry input to ADHM. |
| ADHM construction (Atiyah-Drinfeld-Hitchin-Manin 1978) | 5 | — | ✗ | **Gap (high priority — the apex theorem of the book).** |
| ADHM quadratic constraint | 5 | — | ✗ | **Gap.** |
| Moduli space $\mathcal{M}_k(S^4)$ of $k$-instantons | 5–7 | — | ✗ | **Gap (high priority).** Dimension formula $\dim \mathcal{M}_k = 8k - 3$ for $\mathrm{SU}(2)$. |
| Penrose transform at linear level | 6 | — | ✗ | **Gap.** Master-tier survey. |
| Sheaf cohomology $H^1(\mathbb{CP}^3, \mathcal{O}(-2))$ → massless fields | 6 | `04.06.02` + adjacent | △ | Sheaf cohomology machinery present in alg-geom chapter; the *Penrose-transform* application is absent. |
| 't Hooft ansatz | 6 | — | ✗ | **Gap.** Worked instanton family. |
| Radon transform relation | 6 | — | ✗ | **Gap (low priority — survey pointer only).** |
| Barth's theorem on rank-2 bundles on $\mathbb{CP}^3$ | 7 | — | ✗ | **Gap.** |
| Reality constraints (real structure picks out $\mathrm{SU}(2)$-instantons) | 7 | — | ✗ | **Gap.** |
| Atiyah-Bott Yang-Mills over Riemann surfaces | — | `03.07.05` (Master) | △ | Referenced in `03.07.05` Master Historical context; not in Atiyah's Pisa book (later 1983 paper) and not in this audit's scope. |

**Aggregate coverage estimate.** Counting the ~25 top-level Atiyah
topics in the table:

- ✓ covered: 3
- △ partial: 6
- ✗ gap: 16

Coverage is roughly **~15–20%** weighted by load-bearing, **~12%** by
raw topic count. The Yang-Mills *action* side is in good shape thanks
to the single shipped `03.07.05` unit; the **instanton** side, the
**twistor / Ward** side, and the **ADHM** apex are essentially absent.
This is consistent with the chapter having only one shipped unit
overall.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites in the corpus or in sibling
audits.** The principal-bundle / connection / curvature / Chern-class
backbone (`03.05.01`, `03.05.07`, `03.05.09`, `03.06.04`,
`03.06.06`) is already shipped; the Kobayashi-Nomizu Vol. 2 sibling
audit (FT 3.19, running this cycle) will refine the curvature-form
and Chern-Weil treatment at master tier, which several P1 units below
depend on for the topological-charge derivation. **Soft blocker:** the
Kobayashi-Nomizu punch-list must not regress the
`03.05.09 / 03.06.04 / 03.06.06` API surface.

**Priority 1 — high-leverage, captures Atiyah's central content:**

1. **`03.07.06` Anti-self-dual (ASD) equation $F_A^+ = 0$ on a
   4-manifold.** Hodge-* eigenspace decomposition
   $\Omega^2(M; \mathfrak{g}) = \Omega^2_+ \oplus \Omega^2_-$ in
   dimension 4. Statement of the ASD equation; proof that ASD
   connections are Yang-Mills (already a Master exercise in
   `03.07.05`, promoted to standalone unit). Three-tier, ~1500 words.
   Atiyah Ch. 1 anchor; Donaldson-Kronheimer §2.1 anchor;
   Freed-Uhlenbeck §3 anchor.

2. **`03.07.07` BPST instanton and the Bogomolny bound.** Explicit
   $k=1$ instanton on $\mathbb{R}^4$:
   $A = \mathrm{Im}(\bar{q}\,dq)/(1 + |q|^2)$ in quaternionic
   coordinates; finite-action extension to $S^4$; computation
   $\int_{S^4} \tfrac{1}{8\pi^2}\mathrm{tr}(F \wedge F) = 1$;
   Bogomolny lower bound
   $\mathrm{YM}(A) \geq 8\pi^2 |c_2(E)|$ with equality on
   (anti-)self-dual connections. Three-tier, ~1500 words.
   Atiyah Ch. 1–2 anchor; Belavin-Polyakov-Schwartz-Tyupkin 1975
   originator citation.

3. **`03.07.08` Conformal compactification $\mathbb{R}^4 \to S^4 \cong
   \mathbb{HP}^1$ and finite-action solutions.** Stereographic
   projection, conformal invariance of Yang-Mills in dimension 4,
   $\mathbb{HP}^1$ as quaternionic projective line, and the theorem:
   finite-action ASD connections on $\mathbb{R}^4$ extend (after a
   gauge transformation) to smooth connections on $S^4$ (Uhlenbeck
   removable-singularities, 1982). Intermediate + Master.
   Atiyah Ch. 1 anchor; Uhlenbeck 1982 cited.

4. **`03.07.09` Moduli space of ASD connections $\mathcal{M}_k(S^4)$.**
   Definition (gauge-equivalence classes of irreducible ASD
   connections of charge $k$); slice theorem; deformation complex
   $0 \to \Omega^0(\mathfrak{g}_E) \to \Omega^1(\mathfrak{g}_E)
   \to \Omega^2_+(\mathfrak{g}_E) \to 0$; the dimension formula
   $\dim \mathcal{M}_k(S^4, \mathrm{SU}(2)) = 8k - 3$ via
   Atiyah-Singer index theorem applied to this complex; reducibility
   and singular strata. Master-tier; Intermediate sketch only.
   Atiyah Ch. 5–7 anchor; Donaldson-Kronheimer §3 anchor;
   Freed-Uhlenbeck §4 anchor. **Cross-link to `03.09.10`
   (Atiyah-Singer)** — the dimension formula is its first
   gauge-theoretic application.

5. **`03.07.10` ADHM construction (Atiyah-Drinfeld-Hitchin-Manin).**
   The apex unit. Statement of the ADHM data: a quadruple of matrices
   $(B_1, B_2, I, J)$ with $B_i \in \mathrm{End}(\mathbb{C}^k)$,
   $I \in \mathrm{Hom}(\mathbb{C}^2, \mathbb{C}^k)$,
   $J \in \mathrm{Hom}(\mathbb{C}^k, \mathbb{C}^2)$, satisfying the
   real and complex ADHM equations; explicit construction of the
   instanton from the ADHM datum via the Dirac operator on the
   trivial $\mathbb{C}^{2k+2}$-bundle; the Atiyah-Drinfeld-Hitchin-
   Manin theorem (1978): every $\mathrm{SU}(2)$ $k$-instanton on
   $S^4$ arises from an ADHM datum, unique up to $\mathrm{U}(k)$
   action. Master-tier full proof sketch; Intermediate tier states
   the result and exhibits the $k=1$ specialisation (recovers BPST).
   Atiyah Ch. 5–7 anchor; Atiyah-Hitchin-Drinfeld-Manin 1978
   *Phys. Lett. A* 65 originator citation; Donaldson-Kronheimer §3
   and §6 cross-references.

**Priority 2 — twistor / Ward bridge (essential to Atiyah's framing):**

6. **`03.07.11` Penrose twistor space and the Ward correspondence.**
   Twistor space $\mathbb{CP}^3 \to S^4$ with real structure; twistor
   lines; the Atiyah-Ward theorem: ASD $\mathrm{SU}(2)$-bundles on
   $S^4$ correspond bijectively to rank-2 holomorphic bundles on
   $\mathbb{CP}^3$ trivial on twistor lines and carrying a real
   structure. Master-tier survey unit; Intermediate tier states the
   correspondence and gives one worked direction. Atiyah Ch. 3–4
   anchor; Atiyah-Ward 1977 originator citation.

7. **`03.07.12` Horrocks monad and rank-2 bundles on
   $\mathbb{CP}^3$.** The algebraic-geometry input: every rank-2
   bundle on $\mathbb{CP}^3$ with $c_1 = 0$ arises from a monad
   $\mathcal{O}(-1)^k \to \mathcal{O}^{2k+2} \to \mathcal{O}(1)^k$
   modulo the monad-equivalence relation; ties to Barth's theorem.
   Connects `03.07.10` (ADHM) to standard algebraic geometry of
   $\mathbb{CP}^n$. Master-only, ~1500 words. Atiyah Ch. 5 + 7 anchor.

**Priority 3 — Master-tier deepenings:**

8. **`03.07.13` Grothendieck's splitting theorem on
   $\mathbb{CP}^1$.** Every holomorphic vector bundle on
   $\mathbb{CP}^1$ splits as $\bigoplus \mathcal{O}(a_i)$. Used by
   Atiyah Ch. 4 ("Bundles over $\mathbb{P}^1(\mathbb{C})$") as the
   local twistor-line model. Standalone short unit (~1200 words);
   could also be sited in `04-algebraic-geometry/05-divisors/` if
   the editorial choice favours that chapter. Grothendieck 1957
   originator citation.

9. **`03.07.14` Penrose transform at linear level.** Massless field
   equations on $S^4$ ↔ $H^1(\mathbb{CP}^3, \mathcal{O}(-2))$ etc.
   Atiyah Ch. 6 anchor. Master-only pointer unit. Includes the
   't Hooft ansatz as the worked example.

**Priority 4 — survey pointers (Master-only, not load-bearing):**

10. **`03.07.15` Barth's theorem and reality constraints on
    $\mathbb{CP}^3$.** Pointer unit closing the algebraic-geometry
    loop. Atiyah Ch. 7 anchor. Optional; not required for
    FT-equivalence.

11. **Master section to `03.07.05`** on the Atiyah-Bott Riemann-surface
    picture as the dimension-2 analogue. Already partially shipped
    (Synthesis paragraph); upgrade to a dedicated Master subsection
    rather than a new unit.

---

## §4 Implementation sketch (P3 → P4)

For Atiyah-Pisa coverage to reach FT-equivalence, items 1–5 are the
minimum set. Realistic production estimate (mirroring
Lawson-Michelsohn and Milnor-Stasheff batches):

- ~3.5–4 hours per unit. Atiyah-Pisa units skew higher than the corpus
  average because the master tier requires careful coordination across
  differential geometry (curvature, Hodge-*), algebraic geometry
  (sheaf cohomology, monads), and index theory
  (deformation-complex dimension formula).
- **Priority 1: 5 units × ~3.75 hours = ~19 hours.**
- **Priority 2: 2 units × ~3.5 hours = ~7 hours.**
- **Priority 3: 2 units × ~3 hours = ~6 hours.**
- **Priority 4: ~2 hours total.**
- **Total: ~34 hours of focused production.** Fits a focused 5-day
  window.

**Originator-prose target.** Atiyah is *himself* an originator of the
key results in chapters 4–7 (Ward correspondence with Ward; ADHM with
Drinfeld, Hitchin, Manin). Units 5 and 6 should carry originator-prose
treatment per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, citing:

- C. N. Yang, R. L. Mills, "Conservation of isotopic spin and isotopic
  gauge invariance," *Physical Review* 96 (1954) 191–195 — originating
  the Yang-Mills action; already cited from `03.07.05`.
- A. A. Belavin, A. M. Polyakov, A. S. Schwartz, Yu. S. Tyupkin,
  "Pseudoparticle solutions of the Yang-Mills equations," *Physics
  Letters B* 59 (1975) 85–87 — originating the BPST instanton.
- M. F. Atiyah, R. S. Ward, "Instantons and algebraic geometry,"
  *Comm. Math. Phys.* 55 (1977) 117–124 — originating the twistor
  / Ward reformulation.
- M. F. Atiyah, V. G. Drinfeld, N. J. Hitchin, Yu. I. Manin,
  "Construction of instantons," *Physics Letters A* 65 (1978)
  185–187 — originating the ADHM construction.
- M. F. Atiyah, *Geometry of Yang-Mills Fields*, Lezioni Fermiane,
  Scuola Normale Superiore Pisa, 1979 — the consolidated monograph.

**Notation crosswalk.** Atiyah uses $A$ for the connection and $F$
for the curvature (matching the Babel Bible's `03.05.07`–`03.05.09`
convention). Twistor-side uses $\mathbb{P}^3 = \mathbb{CP}^3$ over
$\mathbb{C}$ with the standard real structure
$\sigma : [z_0, z_1, z_2, z_3] \mapsto [\bar{z}_1, -\bar{z}_0,
\bar{z}_3, -\bar{z}_2]$ (quaternionic conjugation); ADHM data
typically written $(B_1, B_2, I, J)$ in the modern (Nakajima)
convention, or as $(\alpha, \beta, a, b)$ in Atiyah's notation —
record both in the §Notation paragraph of `03.07.10`. Quaternionic
coordinates $q = x_1 + x_2 i + x_3 j + x_4 k \in \mathbb{H}$
identify $\mathbb{R}^4$ with $\mathbb{H}$; the BPST instanton is
$A = \mathrm{Im}(\bar{q}\,dq) / (1 + |q|^2)$ in this convention.

---

## §5 What this plan does NOT cover

- **Donaldson invariants** of smooth 4-manifolds. The
  moduli-of-instantons machinery feeds them, but the invariants
  themselves and the orientability / compactification arguments are
  deferred to **FT 3.06 Donaldson Floer audit** (separate plan stub).
- **Seiberg-Witten theory.** Deferred to a later wave; not in the
  Atiyah-Pisa book at all (post-dates it by ~15 years).
- **Floer homology in gauge theory.** FT 3.06 territory.
- A line-number-level exercise inventory of Atiyah's lectures. The
  book has no formal exercise sections; this audit treats the worked
  examples in chapters 2 + 5 as the implicit "exercise pack" and
  reproduces them in the master tier of the punch-list units.
- The Atiyah-Bott Yang-Mills-over-Riemann-surfaces story (1983 paper,
  post-dates Pisa). Touched in `03.07.05` Master tier; a dedicated
  Atiyah-Bott audit is appropriate at FT entry to be determined.
- **Hyperkähler / quiver-variety modern reformulation of ADHM**
  (Nakajima, 1990s). Pointer in `03.07.10` Master Connections only.

---

## §6 Acceptance criteria for FT equivalence (Atiyah Pisa)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Kobayashi-Nomizu Vol. 2 sibling audit has not regressed
  `03.05.09` / `03.06.04` / `03.06.06` (soft prereq).
- ≥95% of Atiyah's named theorems in chapters 1–7 map to Babel Bible units
  (currently ~15–20%; after priority-1 units rises to ~65%; after
  priority-1+2 to ~85%; full ≥95% requires priority-1+2+3 +
  selective priority-4).
- ≥90% of Atiyah's worked computations (BPST one-instanton in Ch. 2,
  Horrocks monad in Ch. 5, ADHM construction in Ch. 5–7, 't Hooft
  ansatz in Ch. 6) appear directly in a unit or are referenced by a
  unit covering them.
- Notation decisions are recorded (see §4) in `03.07.10` and
  `03.07.11`.
- Pass-W weaving connects the new units to `03.07.05` (Yang-Mills
  action), `03.05.09` (curvature, Bianchi), `03.06.04` (Chern
  classes), and `03.09.10` (Atiyah-Singer, for the moduli dimension
  formula).

The 5 priority-1 units close the load-bearing equivalence gap on the
differential-geometric and ADHM sides. Priority-2 closes the twistor
bridge. Priority-3+4 are deepenings.

---

## §7 Sourcing

- **Print.** Edizioni della Normale (Scuola Normale Superiore Pisa),
  ISBN 978-88-7642-303-1. Available from the publisher and the usual
  resellers. Status in
  `docs/catalogs/FASTTRACK_BOOKLIST.md`: **BUY**.
- **PDF mirror.** A scanned copy is widely linked from academic
  mirrors (Edinburgh / Ranicki archive; researchgate;
  inspirehep #150867). Not bundled with the Babel Bible; not licensed for
  redistribution. Add to `reference/textbooks-extra/` as
  `Atiyah-GeometryOfYangMillsFields-Pisa1979.pdf` if a clean copy is
  obtained, mirroring the pattern of Lawson-Michelsohn and similar
  monographs in `reference/textbooks-extra/`.
- **Companion texts (free or already in the corpus).** Tong's gauge
  theory lectures
  (`reference/tong/md/pages/gaugetheory.md`, already cited from
  `03.07.05`) for physics-style background; Donaldson-Kronheimer
  *The Geometry of Four-Manifolds* (1990) and Freed-Uhlenbeck
  *Instantons and Four-Manifolds* (1991) as the standard modern
  companions — both flagged for the corpus and cross-referenced
  from `03.07.05`.
- **License.** Atiyah-Pisa is a commercial publication; cite by
  ISBN. Free academic copies on Edinburgh and researchgate mirrors
  are for individual reading only.

---

*Reduced audit pass (no direct PDF access in this cycle). Chapter
structure reconstructed from the published table of contents and the
canonical companion texts. Full P1 line-number inventory deferred
pending direct PDF access. Soft prerequisite: Kobayashi-Nomizu Vol. 2
sibling audit running this cycle must not regress the curvature /
Chern-Weil API.*
