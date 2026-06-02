# Griffiths-Morgan, *Rational Homotopy Theory and Differential Forms* — Deepening gap file (Phase 2)

**Slug:** `griffiths-morgan-rational-homotopy` · **FT entry:** 1.19
**Re-audited against live corpus 2026-06-02.** First-pass audit (`plans/fasttrack/griffiths-morgan-rational-homotopy.md`, dated 2026-05-25) proposed five net-new units at ids `03.12.50`–`03.12.54`. **Those ids are now all occupied** by unrelated units (relative homotopy group, filtered space, crossed module, Massey products, etc.), and one proposed unit — Massey products + formality — has since SHIPPED as `03.12.51`. This pass re-verifies each first-pass proposal against the grown corpus and isolates the genuine remaining gaps.

**Recommended chapter:** `03-modern-geometry/12-homotopy/` (frontmatter `section: modern-geometry`, `chapter: homotopy`). Verified-free ids in `03.12.*`: **44, 47, 50** (and 60+). Ids 50/51/52/53/54 from the first-pass audit are no longer free.

---

## Genuine gaps (2)

### Gap 1 — `03.12.50` Cartan algorithm: minimal models of homogeneous spaces $G/H$

- **id:** `03.12.50` (verified free; `03.12.50*` does not exist)
- **title:** Cartan algorithm: minimal models of homogeneous spaces
- **spec:** For a closed connected subgroup $H\subseteq G$ of a compact connected Lie group, the Sullivan model of $G/H$ is the Koszul complex of the restriction $i^\*:H^\*(BG;\mathbb Q)\to H^\*(BH;\mathbb Q)$ on classifying spaces, namely $\big(H^\*(BH)\otimes\Lambda(\bar y_1,\dots,\bar y_r),\,d\bar y_i=i^\*(y_i)\big)$ with $\deg\bar y_i=\deg y_i-1$; deduce formality of $G/H$ and run worked examples $SU(2)/T=S^2$, $\mathbb{C}P^n=U(n{+}1)/(U(n)\times U(1))$, and the flag manifold $U(n)/T^n$ via the Borel presentation.
- **prereqs (verified exist):** `03.12.06` (Sullivan minimal models), `03.08.04` (classifying space), `03.06.20` (Borel-Hirzebruch cohomology of $G/T$), `03.13.02` (Leray-Serre)
- **chapter dir:** `content/03-modern-geometry/12-homotopy/` · **section/chapter:** `modern-geometry` / `homotopy`
- **why genuine:** grep across `content/` for `cartan.{0,10}algorithm`, `koszul.{0,30}homogeneous`, `minimal model of.{0,15}(G/H|homogeneous)` returns **nothing**. `03.06.20-borel-hirzebruch-cohomology-g-t` gives the Borel presentation $H^\*(G/T;\mathbb Q)=\mathbb Q[t_i]/(\text{sym}^+)$ but never the Sullivan/Cartan **minimal model** of $G/H$ as a Koszul complex, never the differential $d\bar y_i=i^\*(y_i)$, and never the formality-of-homogeneous-spaces theorem. `03.12.06` covers Lie-group minimal models (exterior algebra on odd primitives) but stops there. This is the single uncovered named construction from Griffiths-Morgan Ch X §10.2. Intermediate-tier dominant, ~2000 words.

### Gap 2 — `03.12.44` Mixed Hodge structures on rational homotopy of smooth varieties (Morgan 1978)

- **id:** `03.12.44` (verified free; `03.12.44*` does not exist)
- **title:** Mixed Hodge structures on rational homotopy (Morgan 1978)
- **spec:** State Morgan's 1978 extension of DGMS: for a smooth complex quasi-projective variety $U=X\setminus D$ ($X$ smooth projective, $D$ a normal-crossings divisor), the minimal model of $A_{PL}(U)\otimes\mathbb C$ carries a canonical functorial mixed Hodge structure (weight filtration $W_\bullet$ from the order of poles along $D$, Hodge filtration $F^\bullet$), so $\pi_n(U)\otimes\mathbb Q$ inherits a mixed Hodge structure extending Deligne's MHS on $H^\*(U)$; quasi-projective varieties are generally **not** formal, but the MHS is the canonical replacement. Worked example: $\mathbb P^1\setminus\{0,1,\infty\}$ — $\pi_1$ free on two weight-2 generators, pro-unipotent completion connecting to Drinfeld-Ihara and motivic $\zeta(n)$.
- **prereqs (verified exist):** `03.12.06` (Sullivan minimal models), `04.09.05` (ddbar-lemma + DGMS formality), `04.09.01` (Hodge decomposition — carries the only existing mixed-Hodge-structure exposition, in a pointer paragraph)
- **chapter dir:** `content/03-modern-geometry/12-homotopy/` · **section/chapter:** `modern-geometry` / `homotopy`
- **why genuine:** No unit in the corpus is **titled** mixed Hodge structure (`find` returns nothing); mixed Hodge structures appear only as forward-pointer paragraphs in `04.09.01` (lines 467/503/509/563), `04.09.05` (lines 579/653), `04.09.08`, `04.09.09`. The Morgan-1978 result — MHS on the **minimal model / rational homotopy groups** — has **zero** coverage anywhere. This is the largest Griffiths-Morgan-distinctive gap (Ch IX) and the unique uncovered named theorem of the book. **Frontier / partially gated:** the prerequisite mixed-Hodge-structure unit is itself only a pointer; a T1-class session should either (a) write this unit self-contained, building the MHS definition inline, or (b) sequence it after a dedicated Deligne mixed-Hodge unit. Master-tier dominant, ~2600 words.

---

## COVERED (not gaps) — due-diligence trailer

Each first-pass proposal / major book theorem re-verified against the live corpus:

- **Massey products + formality condition** (Ch VII; first-pass proposed `03.12.51`) — **SHIPPED** as `03.12.51-massey-products-and-the-formality-condition.md` (beginner/intermediate/master, status `shipped`). Contains the triple-Massey definition with indeterminacy ideal $a\cdot H^\*+H^\*\cdot c$, the formality definition + equivalent characterisations, the **Borromean-rings** canonical example, and a full worked **Heisenberg-nilmanifold** $N^3=\Gamma\backslash H_3(\mathbb R)$ non-formality computation with the $\langle[\alpha],[\beta],[\alpha]\rangle\neq0$ calculation and the Thurston symplectic-non-Kähler corollary. Fully closes first-pass punch-list item #2.

- **Halperin-Stasheff perturbation algorithm for a fibration** (Ch VI; first-pass proposed `03.12.50`) — **COVERED** in `03.12.06` Exercise 6 (the twisted-tensor model $M_B\otimes\Lambda V_F$, perturbation $\tau:V_F\to M_B\otimes\Lambda V_F$, the Maurer-Cartan $d_E^2=0$ condition, the **Halperin-Stasheff 1979** existence/minimality theorem, and the Leray-Serre transgression identification, lines 318-337 + connection note line 538) and applied to the **Hopf fibration** $S^1\to S^3\to S^2$ in `03.12.E1` Exercise 5. The named theorem and its worked example are present; only the principal-$G$-bundle / Chern-Weil-transgression variant is absent (a deepening, not a frontier gap). Not proposed.

- **Smooth-manifold $A_{PL}\otimes\mathbb R\xrightarrow{\sim}\Omega^\*$ comparison / on-ramp** (Ch I-II; first-pass proposed `03.12.52`) — **COVERED** as the rational-de-Rham comparison, stated and cross-linked in `03.12.06` at lines 158, 489 (full $A_{PL}$ construction $\mathbb Q[t_i,dt_i]/(\sum t_i-1,\sum dt_i)$), 530, and 544 (`conn:448.minimal-model-de-rham`). This is a Beginner-tier *framing/on-ramp* item, not a missing theorem; the first-pass audit itself flagged it as "a small punch-list item." Not a genuine gap.

- **DGMS 1975 formality of compact Kähler manifolds** (Ch VIII) — **COVERED** at Master tier in `04.09.05-ddbar-lemma` (full $dd^c$-lemma, the formality zigzag $\Omega^\*\leftarrow\ker d^c\to H^\*$, the Iwasawa counterexample) and again in `03.12.06` Exercise 8 and `03.12.51` master section.

- **Sullivan minimal-model existence + uniqueness + lifting lemma** (Ch III) — **COVERED** in `03.12.06` (full inductive existence proof lines 174-204, lifting lemma proof at line 515 / Exercise 4).

- **Main theorem of rational homotopy** $V^n\cong\mathrm{Hom}(\pi_n,\mathbb Q)$ (Ch IV) — **COVERED** in `03.12.06` (Theorem 2, line 204) with minimal models of $S^n$, $\mathbb{C}P^n$ in `03.12.06` + `03.12.E1` Exercises 1-3.

- **Rational Hurewicz theorem** (Ch V) — **COVERED** in `03.12.07-whitehead-tower` (Master tier) + `03.12.E1`.

- **Sullivan-Serre solution to $\pi_\*(S^n)\otimes\mathbb Q$** (Ch X §10.1) — **COVERED** in `03.12.E1` Exercise 7 (hard, full proof).

- **Minimal model of a compact Lie group as exterior algebra on odd primitives; Lie groups are formal** (Ch X §10.2) — **COVERED** in `03.12.06` Master ("minimal model of a Lie group"). (The $G/H$ Cartan extension is the genuine residue — Gap 1.)

- **Arithmetic square / integral fracture; Sullivan-Friedlander profinite completion** (Ch X §10.3) — **COVERED** in `03.12.45-arithmetic-square-integral-fracture`.

- **Operadic / $L_\infty$ formality, configuration-space formality** (2013 Tu introduction) — pointer-covered: `03.12.51` master section names Tamarkin-Kontsevich-Hinich operadic formality + Kontsevich 1994 configuration spaces; `04.03.21-hochschild-kostant-rosenberg-theorem` carries the Kontsevich-2003 deformation-quantisation pointer. No standalone-unit gap at FT tier.

---

## Result

- **Genuine gaps: 2** (`03.12.50` Cartan algorithm for $G/H$; `03.12.44` Morgan-1978 mixed Hodge on rational homotopy — frontier/partially gated on a mixed-Hodge prerequisite).
- **COVERED-verified topics: 11.**
- This is a low-residue book: the Bott-Tu Pass-4 production batch plus the subsequently-shipped `03.12.51` Massey/formality unit closed all but two of the first-pass proposals.
