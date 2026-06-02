# Deepening pass — Atiyah, *Geometry of Yang-Mills Fields* (FT 3.20)

**Slug:** `atiyah-geometry-yang-mills-fields`
**Date:** 2026-06-02
**Verdict:** Book is now ~90% covered. The original audit's Priority-1 and
Priority-2 punch-list (ASD equation, BPST + Bogomolny, conformal
compactification, moduli space + $8k-3$, ADHM, Ward correspondence,
Penrose transform) has all been **produced** since the first-pass audit was
written — see the `03.07.06`–`03.07.14` block. The remaining genuine gaps are
the three pure **algebraic-geometry inputs** to ADHM (Ch. 5 + Ch. 7) that the
gauge units *use* but never independently establish: monads on projective
space, Barth's theorem on rank-2 bundles on $\mathbb{CP}^3$, and the
Grothendieck splitting theorem on $\mathbb{CP}^1$.

**Genuine gaps: 3. COVERED-verified topics: 16.**

Recommended placement: `04-algebraic-geometry/` (these are alg-geom theorems,
not gauge theory; the gauge units `03.07.10`/`03.07.11` should then cite them
as prerequisites rather than re-deriving the monad machinery inline). Free
slots verified by `find content -name "04.07.*"` (only `04.07.01`, `04.07.02`
occupied) and `find content -name "04.10.*"`.

---

## Gap 1 — Monads on projective space and the cohomology bundle (Horrocks/Beilinson)

- **proposed id:** `04.07.03` (chapter `07-projective`; `04.07.01`, `04.07.02` occupied — `.03` free)
- **title:** Monads on $\mathbb{CP}^n$ and the Beilinson resolution
- **spec:** A monad $\mathcal{O}(-1)^a \xrightarrow{\alpha} \mathcal{O}^b \xrightarrow{\beta} \mathcal{O}(1)^c$ with $\beta\alpha=0$, $\alpha$ injective, $\beta$ surjective; its cohomology bundle $\ker\beta/\operatorname{im}\alpha$; the Horrocks/Beilinson theorem that every bundle on $\mathbb{CP}^n$ with prescribed intermediate cohomology arises this way, via Beilinson's resolution of the diagonal $H^i(\mathbb{CP}^n,\mathcal{E}(j))$.
- **prereqs (verified exist):** `04.06.02` (coherent sheaf), `04.03.04` (cohomology of projective space), `04.05.03` (line bundle / $\mathcal{O}(n)$), `04.03.01` (sheaf cohomology)
- **chapter dir:** `content/04-algebraic-geometry/07-projective/` — frontmatter `section: algebraic-geometry`, `chapter: projective`
- **why a gap:** the Beilinson monad is the single algebraic-geometric mechanism the ADHM construction rests on; `03.07.10` and `03.07.11` invoke it by name (lines 204, 425, 460; Ward unit lines 263, 431, 557) but no unit ever *states or proves* the monad theorem itself. This is Atiyah Pisa Ch. 5 ("Construction of algebraic bundles"), the signature chapter. Load-bearing and currently only embedded as a black box inside two gauge units.

## Gap 2 — Barth's theorem on rank-2 bundles on $\mathbb{CP}^3$

- **proposed id:** `04.07.04` (chapter `07-projective`; next free after Gap 1)
- **title:** Rank-two bundles on $\mathbb{CP}^3$ and Barth's theorem
- **spec:** Cohomological classification of rank-2 (semistable) holomorphic bundles on $\mathbb{CP}^3$ with $c_1=0$; Barth's restriction/jumping-line theorem and the Barth-Hulek monad normal form; the reality constraint that cuts the instanton bundles out of all rank-2 bundles.
- **prereqs (verified exist):** `04.07.03` (Gap 1, monads), `04.06.02` (coherent sheaf), `04.03.05` (Serre vanishing/finiteness), `04.08.03` (Serre duality)
- **chapter dir:** `content/04-algebraic-geometry/07-projective/` — frontmatter `section: algebraic-geometry`, `chapter: projective`
- **why a gap:** Atiyah Pisa Ch. 7 ("Theorems on algebraic bundles") is built around Barth's theorem; it closes the ADHM loop (every plain-on-lines rank-2 bundle is a monad cohomology bundle). The only `barth` hits in the corpus are the **Barth-Larsen connectedness** theorem (`04.04.15`) — a different result — plus unrelated prose matches. Barth's rank-2/jumping-line theorem is genuinely absent.

## Gap 3 — Grothendieck splitting theorem on $\mathbb{CP}^1$

- **proposed id:** `04.10.10` (chapter `10-moduli`; `04.10.09` occupied, `04.10.10` free — sits with `04.10.06` moduli of bundles on a curve and `04.10.11` Gieseker)
- **title:** Grothendieck's splitting theorem for vector bundles on $\mathbb{CP}^1$
- **spec:** Every holomorphic vector bundle on $\mathbb{CP}^1$ splits as $\bigoplus_i \mathcal{O}(a_i)$ with the splitting type $(a_1\ge\dots\ge a_r)$ a complete invariant; proof via the Birkhoff factorisation / cohomology vanishing; the trivial case $a_i=0 \Leftrightarrow \mathcal{E}\cong\mathcal{O}^{\oplus r}$, and the jumping-line application to the Ward correspondence.
- **prereqs (verified exist):** `04.05.03` (line bundle), `04.03.04` (cohomology of projective space), `06.01.07` (Riemann sphere)
- **chapter dir:** `content/04-algebraic-geometry/10-moduli/` — frontmatter `section: algebraic-geometry`, `chapter: moduli`
- **why a gap:** Atiyah Pisa Ch. 4 uses "bundles over $\mathbb{P}^1(\mathbb{C})$" as the local twistor-line model; the plain-on-lines condition in `03.07.11` (lines 343, 503, 545) *is* Grothendieck splitting with all $a_i=0$. The theorem is currently only **stated in passing** in three units (`03.07.11`, `04.10.06` line 378, `06.01.07`) and never given a dedicated treatment. Marginal but load-bearing and editorially clean; lowest priority of the three — defensible to fold into `04.10.06` instead of a new unit if editorial preference favours that.

---

## COVERED (not gaps) — verified against the live corpus

| Atiyah topic (chapter) | Existing unit(s) | Evidence |
|---|---|---|
| Yang-Mills Lagrangian, EL equation $d_A^*F=0$, Bianchi (Ch. 1) | `03.07.05`, `03.05.09` | shipped unit + curvature master tier |
| Self-dual / ASD decomposition $\Omega^2_+\oplus\Omega^2_-$; ASD equation $F_A^+=0$ (Ch. 1) | `03.07.06` | **dedicated unit now produced** (was △ in first audit) |
| Topological charge $c_2=\frac1{8\pi^2}\int\operatorname{tr}(F\wedge F)\in\mathbb{Z}$; Bogomolny bound $\mathrm{YM}\ge 8\pi^2|k|$ (Ch. 1) | `03.07.07`, `03.06.04` | `03.07.07` proves the bound + quantisation |
| BPST one-instanton, quaternionic $A=\operatorname{Im}(\bar q\,dq)/(1+|q|^2)$ (Ch. 2) | `03.07.07` | 57k dedicated unit |
| 't Hooft / Jackiw-Rebbi multi-instanton ansatz (Ch. 6) | `03.07.07` (thm, lines 498-503), `03.07.10` | $5k$-param family stated + placed in $8k-3$ moduli |
| $\mathbb{HP}^1\cong S^4$; conformal invariance of YM in dim 4; finite-action $\Rightarrow$ extends to $S^4$ (Ch. 1-2) | `03.07.08` | dedicated conformal-compactification unit |
| Uhlenbeck removable-singularities theorem (Ch. 1) | `03.07.08` (lines 87, 146-163), `03.07.20` | stated + applied; cylinder version separate |
| Penrose twistor space $\mathbb{CP}^3\to S^4$, twistor lines, real structure $\sigma$ (Ch. 3) | `03.07.11` (lines 105, 218) | full unit, explicit $\sigma$ involution |
| Reality constraints: quaternionic structure picks $\mathrm{SU}(2)$ inside $\mathrm{SL}(2,\mathbb{C})$ (Ch. 7) | `03.07.11` (lines 218, 235, 259, 461) | $\hat\sigma^2=-1$ refinement proved — **was listed as gap, now covered** |
| Ward / Atiyah-Ward correspondence (ASD bundles $S^4$ ↔ holo bundles $\mathbb{CP}^3$ plain on lines) (Ch. 4) | `03.07.11` | central theorem + general-$G$ extension |
| Holomorphic vs unitary gauge; Newlander-Nirenberg descent of $\bar\partial_A$ (Ch. 4) | `03.07.11` (line 503), `05.06.03` | integrability=ASD proof; NN unit exists |
| ADHM construction + quadratic constraint $\mu_\mathbb{C}=\mu_\mathbb{R}=0$, data $(B_1,B_2,I,J)$, $\mathrm{U}(k)$ action (Ch. 5) | `03.07.10` | 62k apex unit, monad reformulation incl. |
| Moduli space $\mathcal{M}_k(S^4)$, slice/deformation complex, $\dim=8k-3$ via Atiyah-Singer (Ch. 5-7) | `03.07.09` (lines 86, 214-256), `03.09.10` | full index computation, AHS 1978 dimension thm |
| Atiyah-Hitchin-Singer self-duality / twistor almost-complex / self-dual Weyl (Ch. 3) | `03.07.11` (line 515), `03.07.09` | AHS 1978 cited as originator, integrability proof |
| Penrose transform at linear level; $H^1(\mathbb{CP}^3,\mathcal{O}(-2))$ ↔ massless fields (Ch. 6) | `03.07.14` | dedicated unit, helicity/cohomology dictionary |
| Sheaf cohomology of $\mathcal{O}(n)$ on $\mathbb{CP}^3$ (Ch. 6-7 machinery) | `04.03.04`, `04.06.02`, `04.03.01` | cohomology-of-projective-space + coherent sheaf units |
| Nahm equations / BPS monopoles | `03.07.11` (line 495, mention only) | **NOT a gap relative to this book** — monopoles/Nahm are in the *later* Atiyah-Hitchin 1988 monograph, not the 1979 Pisa lectures; Pisa is purely instantons on $S^4$. Out of scope. |

**Notes on conservative calls:**
- The first-pass audit proposed ~11 units; 7 of those (`03.07.06`-`.11`, `.14`)
  are now produced, so they are removed from the gap list. Only the three pure
  alg-geom Ch.5/Ch.7 inputs survive as genuine gaps.
- Horrocks (Gap 1), Barth (Gap 2), Grothendieck-splitting (Gap 3) are sited in
  `04-algebraic-geometry` rather than `03.07.12/.13/.15` because they are
  general projective-geometry theorems, not gauge theory; the gauge units
  already cite them inline and would gain clean prereq links. If editorial
  policy prefers keeping the whole Atiyah arc inside `03.07`, the free gauge
  slots `03.07.12`, `03.07.13`, `03.07.15` are available as an alternative home.
