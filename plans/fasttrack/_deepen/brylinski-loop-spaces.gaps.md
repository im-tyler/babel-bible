# Brylinski, *Loop Spaces, Characteristic Classes and Geometric Quantization* (FT 3.47) — deepening gap file

**Slug:** `brylinski-loop-spaces`. Re-audit against the live corpus (2026-06-02).

The first-pass audit (`plans/fasttrack/brylinski-loop-spaces.md`) was written
in a REDUCED pass and listed the book as ~5% covered with an "essentially
total" gap across Chs. 1, 4, 5, 6. **That is now stale.** Since then the
swarm shipped a deep gerbe/Deligne cluster — `03.04.14` (hypercohomology +
Deligne complex), `03.06.08` (Kostant-Weil + smooth Deligne $\mathbb{Z}(2)_D^\infty$
+ prequantum bundle), `03.06.09` (Dixmier-Douady, bundle gerbes, connective
structure + curving, WZW gerbe, twisted K-theory), `03.07.16` (B-field as
gerbe connection, transgression-to-loop-space theorem, Cheeger-Simons
characters), plus `05.11.01-03` (prequantisation). The bulk of the original
punch-list (items 1, 2, 3, 5, 6, 7, 9, 11) is **shipped**. What remains is a
tight loop-SPACE / loop-GROUP cluster (Brylinski Chs. 3, 6, 7) that the gerbe
units name in passing but never construct, plus one borderline differential-
cohomology consolidation unit.

**Genuine gaps: 4. COVERED-verified topics: 11.**

---

## Genuine gaps

### Gap 1 — Free loop space $LM$ and the transgression $H^{k+1}(M)\to H^{k}(LM)$
- **id:** `03.11.04` (free slot; chapter currently holds .01–.03)
- **title:** Free loop space and the transgression map
- **spec:** The free loop space $LM = C^\infty(S^1,M)$ as a Fréchet manifold with its smooth $S^1$-action and evaluation $\mathrm{ev}:S^1\times LM\to M$; the transgression $\tau = \int_{S^1}\mathrm{ev}^* : H^{k+1}(M)\to H^k(LM)$ at the level of de Rham complexes; the induced Kähler/symplectic form on $LM$ transgressed from a closed 3-form on $M$ (Brylinski Ch. 3 space-of-knots example as the worked case).
- **prereqs:** `03.04.06` (de Rham), `03.04.02` (differential forms), `03.04.20` (integration of forms), `03.11.01` (central extension), `05.01.02` (symplectic manifold)
- **chapter dir:** `content/03-modern-geometry/11-infinite-dim-lie/`; frontmatter `section: modern-geometry`, `chapter: infinite-dim-lie`
- **why genuine:** the transgression $H^3(M)\to H^2(LM)$ is *stated as one theorem* inside `03.07.16` (B-field unit) but $LM$ is never given a smooth structure, the general degree-$k$ transgression is never developed, and the Kähler-on-$LM$ / space-of-knots construction (Brylinski Ch. 3, his signature geometric example) is entirely absent. `03.06.23/24/26` mention "loop space" only for the elliptic-genus/Witten-genus heuristic, not as geometry.

### Gap 2 — Geometric central extension $\widetilde{LG}\to LG$ from the level-$k$ gerbe on $G$
- **id:** `03.11.05` (free slot)
- **title:** Loop group $LG$ and the geometric construction of $\widetilde{LG}\to LG$
- **spec:** $LG=C^\infty(S^1,G)$ as an infinite-dimensional Lie group; the level-$k$ generator of $H^3(G,\mathbb{Z})\cong\mathbb{Z}$ (the WZW gerbe of `03.06.09`) transgresses to the level-$k$ line bundle on $LG$, whose total space carries the group structure making $\widetilde{LG}\to LG$ the central extension; recovery of the Pressley-Segal/Kac affine cocycle of `03.11.01` as the Lie-algebra shadow. Worked case: $L\,\mathrm{SU}(2)$ at level $k$. Brylinski Ch. 7.
- **prereqs:** `03.11.01` (central extension, the algebraic cocycle), `03.11.02` (infinite-dim Lie reps), `03.06.09` (Dixmier-Douady / WZW gerbe), `03.11.04` (Gap 1, loop space + transgression)
- **chapter dir:** `content/03-modern-geometry/11-infinite-dim-lie/`; `section: modern-geometry`, `chapter: infinite-dim-lie`
- **why genuine:** `03.11.01-03` define the central extension purely as a Lie-*algebra* 2-cocycle (Kac §1 / Pressley-Segal §4); the geometric construction of the *group* extension from the gerbe is only named in passing in `03.07.16` lines 491/557 (and those name-drops carry a broken xref to `[03.06.11]`, which is actually Hirzebruch-signature). The loop group $LG$ as an infinite-dim Lie group, and $\widetilde{LG}$ as the total space of the transgressed line bundle, exist nowhere as a unit. This is the book's chapter-7 payoff.

### Gap 3 — WZW action and the level-$k$ extension via the Brylinski geometric construction
- **id:** `03.10.03` (free slot; chapter currently holds only .02)
- **title:** The WZW term and the level-$k$ central extension
- **spec:** The Wess-Zumino-Witten action with topological WZ term $\frac{1}{12\pi}\int_B \mathrm{tr}(g^{-1}dg)^3$; well-definedness mod $2\pi\mathbb{Z}$ as the integrality of the WZW gerbe 3-curvature on $G$ (`03.06.09`); the level $k\in H^3(G,\mathbb{Z})\cong\mathbb{Z}$; the resulting affine symmetry as the level-$k$ extension $\widetilde{LG}$ acting on the model. Cross-links the CFT side (`03.10.02`) to the gerbe/loop-group side. Brylinski Ch. 7 (cf.).
- **prereqs:** `03.10.02` (CFT basics), `03.06.09` (Dixmier-Douady / WZW gerbe), `03.11.05` (Gap 2), `03.06.07` (Chern-Simons & transgression)
- **chapter dir:** `content/03-modern-geometry/10-conformal-field-theory/`; `section: modern-geometry`, `chapter: conformal-field-theory`
- **why genuine:** `03.10.02-cft-basics` covers the Virasoro/central-charge side but does not connect to the WZW term, the gerbe, or the geometric level quantisation. The WZW *action* (as opposed to the WZW *gerbe 3-form*, which `03.06.09` has) is stated nowhere. Modest-priority connective unit; satisfies §3 audit item 10.

### Gap 4 (borderline) — Smooth Deligne cohomology $\hat H^p(M,\mathbb{Z})$ and Cheeger-Simons differential characters
- **id:** `03.06.21` (free slot; chapter holds .03–.20,.23,.24,.26)
- **title:** Differential cohomology and Cheeger-Simons differential characters
- **spec:** The smooth Deligne complex $\mathbb{Z}(p)_D^\infty$ and differential cohomology $\hat H^p(M,\mathbb{Z})$ as a single named object; the two structural short exact sequences (the curvature sequence $0\to H^{p-1}(M,\mathbb{R}/\mathbb{Z})\to\hat H^p\to \Omega^p_{cl,\mathbb{Z}}\to 0$ and the characteristic-class sequence); the Cheeger-Simons definition of a degree-$p$ differential character as $\chi:Z_{p-1}(M)\to\mathbb{R}/\mathbb{Z}$ with $\chi(\partial c)=\int_c\omega\bmod\mathbb{Z}$, and the isomorphism with $\hat H^p$. Brylinski Ch. 1 + Cheeger-Simons 1985.
- **prereqs:** `03.04.14` (hypercohomology + Deligne complex), `03.06.07` (Chern-Simons & transgression), `03.06.08` (Kostant-Weil, $\mathbb{Z}(2)_D^\infty$), `03.06.09` (Dixmier-Douady, $\mathbb{Z}(3)_D^\infty$)
- **chapter dir:** `content/03-modern-geometry/06-characteristic-classes/`; `section: modern-geometry`, `chapter: characteristic-classes`
- **why borderline-genuine:** the smooth Deligne complex is defined *per weight* and scattered across `03.04.14` ($p=1$), `03.06.08` ($p=2$, with the full theorem), `03.06.09` ($p=3$); differential characters are *defined* only inside a single exercise of `03.07.16` (lines 352–362) which itself flags an indexing confusion, and the two universal short exact sequences (curvature + char-class) of differential cohomology appear nowhere. A consolidating $\hat H^p$ unit with the two exact sequences and the Cheeger-Simons holonomy-functional theorem is a real, if lower-leverage, gap. **Propose only if a unifying differential-cohomology unit is wanted; otherwise the per-weight coverage is adequate.** Listed last and flagged borderline accordingly.

---

## COVERED (not gaps) — verified with existing unit ids

- **Hypercohomology of a complex of sheaves; Čech-hypercohomology spectral sequences** (audit item 1) — `03.04.14-hypercohomology-of-a-complex-of-sheaves`. Full unit incl. the two SS and the Deligne complex.
- **Smooth Deligne complex $\mathbb{Z}(p)_D^\infty$ / Deligne cohomology** (audit items 2, "high priority gap") — defined in `03.04.14` (general $p$, $p=1$), `03.06.08` (full $p=2$ theorem: line bundles with connection $\cong H^2_D(M,\mathbb{Z}(2)^\infty)$), `03.06.09` (the $p=3$ connective-gerbe theorem). Not a single gap; only optional consolidation (Gap 4).
- **Line bundles with connection $\leftrightarrow H^2(M,\mathbb{Z}(2)_D^\infty)$** (audit) — `03.06.08` Theorem (Brylinski 1993, Deligne reformulation), with the pullback-square classification and a dedicated exercise.
- **Kostant-Weil isomorphism + prequantum line bundle + integrality** (audit item 3) — `03.06.08-kostant-weil-prequantum-line-bundle` (8100 words) AND `05.11.01-prequantum-line-bundle-and-the-integrality-condition`. Souriau/Weil/Brylinski three-faces synthesis present.
- **Kostant-Souriau prequantisation on coadjoint orbits** — `05.11.02-prequantisation-spin-coadjoint`, `05.03.01-coadjoint-orbit`.
- **$H^3(M,\mathbb{Z})$ as classifying group; Dixmier-Douady class** (audit item 5, "high priority") — `03.06.09-dixmierdouady-class-and-h-3-m-mathbb-z`. Includes the $\mathrm{PU}(\mathcal H)$-bundle / continuous-trace originator picture (Exercise 7, Master theorem).
- **Bundle gerbe (Murray) + gerbe with band $U(1)$ (Brylinski) + Brylinski-Murray classification** (audit item 6, "highest priority / book centrepiece") — `03.06.09`. Full definition over a submersion, stable equivalence, classification theorem with proof, the WZW gerbe on a compact simple $G$ with $\int_{SU(2)}H_G=1$ worked.
- **Connective structure + curving on a gerbe; 3-curvature; $H^3(M,\mathbb{Z}(3)_D^\infty)$** (audit) — `03.06.09` (connection-and-curving definition + the Deligne-cohomology classification theorem).
- **$B$-field / Kalb-Ramond field as a gerbe connection; worldsheet holonomy** (audit item 9) — `03.07.16-b--field-as-a-gerbe-connection` (8576 words), incl. $\exp(2\pi i\int_\Sigma B)$ and the level-$k$ gerbe on $S^3$.
- **Transgression: gerbe on $M\to$ line bundle on $LM$** (audit item 7) — **stated** as a theorem in `03.07.16` (line 489, "Theorem (transgression to loop space; Brylinski 1993 Ch. 6)"). Counted COVERED-as-statement; the surrounding *loop-space geometry* it presumes is the genuine Gap 1, so Gap 1 is scoped to the $LM$-manifold + general transgression, not the single gerbe-transgression statement.
- **Twisted K-theory pointer (Freed-Hopkins-Teleman / Verlinde)** (audit item 11) — `03.06.09` Master theorem (BCMMS 2002 twisted K-theory) + `03.07.16` FHT/Verlinde synthesis paragraph. Pointer-level coverage present; no separate unit needed.

### Notes for the integrator
- `03.07.16` carries **broken cross-references**: its body cites `[03.06.10]` ("bundle gerbes") and `[03.06.11]` ("transgression to loop space"), but those ids are occupied by *Stiefel-Whitney-Pontryagin numbers* and *Hirzebruch signature theorem*. The intended targets are `03.06.09` (gerbes) and — for transgression-to-loop-space — a unit that does not exist. Repoint to `03.06.09`, and to `03.11.04` once Gap 1 ships. Worth fixing during weaving regardless of whether the gaps are produced.
- Deferred per first-pass audit and still correctly out of scope: continuous-trace $C^*$-algebra operator-theory proofs; higher ($n\geq2$) gerbes; Dijkgraaf-Witten / Chern-Simons TQFT (Freed FT 3.05 audit).
