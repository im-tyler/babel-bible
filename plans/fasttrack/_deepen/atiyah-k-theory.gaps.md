# Atiyah — *K-Theory* (FT 3.10) — Deepening pass (genuine gaps)

**Audit slug:** `atiyah-k-theory` (distinct from `atiyah-geometry-yang-mills-fields`).
**Recommended chapter:** `content/03-modern-geometry/08-k-theory/`
(frontmatter `section: modern-geometry`, `chapter: k-theory`).
**Occupied ids:** 03.08.{01,02,03,04,05,06,07,10,11,12,20}.
**Free slots:** 03.08.{08,09,13–19}.

The first-pass audit (`plans/fasttrack/atiyah-k-theory.md`) proposed ~12
units. Since it was written, the swarm shipped most of them: Adams
operations (03.08.02, which *also* fully develops the $\lambda^k$ /
$\lambda$-ring story the audit wanted as a separate unit), the Thom
isomorphism (03.08.03), equivariant K-theory + $R(G)$ (03.08.10), $J(X)$
+ $J$-homomorphism (03.08.11), $KR$-theory (03.08.12), and the AHSS
(03.13.04). The Chern character ring-iso $K(X)\otimes\mathbb{Q}\cong
H^{\mathrm{even}}$ lives at 03.06.18. The clutching-function proof of Bott
periodicity is in 03.08.07/03.08.03. **The book is now ~90% covered.**
Only one high-value gap survives, plus one borderline structural gap.

---

## GENUINE GAP 1 (high value) — worked K-theory computations

- **id:** `03.08.09`
- **title:** Computations of $K^*(X)$: spheres, projective spaces, tori, real projective spaces
- **spec:** Systematic worked computations — $\widetilde K(S^{2n})=\mathbb{Z}$ and $\widetilde K(S^{2n+1})=0$ from Bott; $K^*(\mathbb{C}P^n)=\mathbb{Z}[t]/(t^{n+1})$ with $t=[H]-1$; $K^*(T^n)=\Lambda^*\mathbb{Z}^n$ via the external product; and the Adams-obstruction computation $\widetilde K(\mathbb{R}P^n)\cong\mathbb{Z}/2^{f(n)}$ via $\psi^k$ acting on the realification of the Hopf line bundle (the input to the vector-fields-on-spheres count).
- **why a gap:** These are Atiyah §2.5 and the canonical examples every K-theory text drills (Hatcher *VB&K* §2.1). The $\mathbb{C}P^n$ and $S^{2n}$ answers currently appear only as scattered *problem statements* inside 03.08.02 (line 289/386); $K^*(T^n)$, $K^*(\mathbb{R}P^n)$, and Stiefel-manifold K-theory are absent corpus-wide (grep confirms: no $K^*(\mathbb{R}P^n)$ / torus-K / Stiefel-K computation anywhere — only twisted-K and Stiefel-*Whitney* references). No dedicated computational unit exists; this is the load-bearing example base the index-theorem chapter implicitly relies on.
- **prereqs:** `03.08.01` (topological K-theory), `03.08.02` (Adams operations $\psi^k$), `03.08.07` (Bott periodicity), `03.08.03` (Thom iso, for the $\mathbb{R}P^n$ Thom-space argument).
- **chapter dir:** `content/03-modern-geometry/08-k-theory/`; frontmatter `section: modern-geometry`, `chapter: k-theory`. Three-tier; beginner does $S^2$ and $\mathbb{C}P^1$, Master records the $\mathbb{R}P^n$/Radon-Hurwitz obstruction. Atiyah §2.5 anchor.

---

## GENUINE GAP 2 (borderline / lower confidence) — K* as a cohomology theory in the K-theory chapter

- **id:** `03.08.08`
- **title:** K-theory as a generalised cohomology theory: relative $K(X,A)$ and the six-term exact sequence
- **spec:** State and prove that complex K-theory is a generalised (Eilenberg-Steenrod-minus-dimension) cohomology theory: relative group $K(X,A)$, the long exact sequence of a pair, excision/homotopy/wedge axioms, the connecting map, and — combined with Bott periodicity — the collapse to the **six-term exact sequence** $K^0(X,A)\to K^0(X)\to K^0(A)\to K^1(X,A)\to K^1(X)\to K^1(A)\to$. Mayer-Vietoris as a corollary.
- **why a (weak) gap:** Atiyah §2.4 makes this its own structural milestone, and the six-term sequence is *used* in 03.08.03 and 03.08.07 but never *stated/proved as the structural fact* inside the K-theory chapter. **Caveat:** the abstract axioms ARE stated generically in 03.13.04 (AHSS, "Definition: generalised cohomology theory") and 03.12.15 (Eilenberg-Steenrod), with K-theory as the running instance — so a reader can assemble it. Propose only if the deepening budget allows a chapter-local consolidation; otherwise a Master-tier block in 03.08.01 ("Cohomology-theory properties of $K^*$") closes it without a new unit. Marked borderline by design.
- **prereqs:** `03.08.01`, `03.08.07` (Bott periodicity for the 2-periodic collapse), `03.12.15` (Eilenberg-Steenrod axioms).
- **chapter dir:** `content/03-modern-geometry/08-k-theory/`; same frontmatter. Atiyah §2.4 anchor.

---

## COVERED (not gaps) — verified against the live corpus

- **Grothendieck group $K(X)$ / reduced $\widetilde K(X)$ / relative $K(X,A)$** — `03.08.01-topological-k-theory` (defs, reduced, Bott, external products; lines 312–340).
- **Clutching construction** — `03.08.07-bott-periodicity` and `03.08.03-thom-isomorphism-in-k-theory` (clutching functions central to both).
- **Bott periodicity $\widetilde K(S^{n+2})\cong\widetilde K(S^n)$, incl. clutching-function proof** — `03.08.07-bott-periodicity`; Atiyah §2.2 clutching argument also reproduced in `03.08.03` (line 557, rank-one base case).
- **Thom isomorphism / Thom class in K-theory ($\lambda_E=\sum(-1)^i\Lambda^iE^*$)** — `03.08.03-thom-isomorphism-in-k-theory` (full unit; Koszul/excision construction, projective-bundle proof).
- **Chern character $\mathrm{ch}:K(X)\otimes\mathbb{Q}\to H^{\mathrm{even}}(X,\mathbb{Q})$ as a ring iso** — `03.06.18-chern-character-ring-homomorphism` (Theorem, Atiyah-Hirzebruch 1959, line 461–464). Also stated in `03.08.01` synthesis.
- **Atiyah-Hirzebruch spectral sequence** — `03.13.04-atiyah-hirzebruch-spectral-sequence` (full unit, generalised-cohomology framing, $K^*(\mathbb{C}P^n)$ worked, real AHSS).
- **Adams operations $\psi^k$ (Newton identities, $\psi^k\psi^l=\psi^{kl}$, $\psi^k(L)=L^{\otimes k}$)** — `03.08.02-adams-operations-psi-k` (full unit).
- **Exterior-power operations $\lambda^k$ and the $\lambda$-ring structure** — COVERED inside `03.08.02` (Cartan formula line 187, $\lambda_t$ generating function line 191, special $\lambda$-ring Atiyah-Tall theorem line 470, $\gamma$-filtration line 474). The audit's proposed separate `03.08.08 λ-ring` unit is **redundant** — do not produce it.
- **Representation ring $R(G)=K_G(\mathrm{pt})$ / equivariant K-theory** — `03.08.10-equivariant-k-theory-k-g-x-and-r-g` (incl. $R(\mathbb{Z}/n)$, Atiyah-Segal completion).
- **$K^*(\mathbb{C}P^n)=\mathbb{Z}[t]/(t^{n+1})$ statement** — appears as problems in `03.08.02` (lines 289, 386) and worked in `03.13.04`; but no *systematic* computational unit (see GAP 1).
- **$J(X)$ and the $J$-homomorphism** — `03.08.11-j-x-and-j-homomorphism`.
- **Vector-fields-on-spheres / Radon-Hurwitz / Hopf-invariant-one** — `03.08.02`, `03.08.11`, `03.08.12`, `03.09.E2-applications-exercises` (line 486, full Adams argument).
- **$KR$-theory (K-theory with reality)** — `03.08.12-kr-theory-k-theory-with-reality` and `03.09.12-kr-theory`.
- **Fredholm-operator model $K^0(X)=[X,\mathrm{Fred}(H)]$ (Atiyah-Jänich)** — `03.09.06-fredholm-operators` (Appendix topic; audit's Master-tier note).
- **Atiyah-Singer topological index in K-theory** — `03.09.10-atiyah-singer-index-theorem` (Thom-iso symbol-class argument, fed by `03.08.03`).
- **Splitting principle in K-theory** — used in `03.08.02`/`03.08.03`; cohomological version in `03.13.03-leray-hirsch-splitting`, `03.06.04-pontryagin-chern-classes`.

---

**Result: 1 high-value genuine gap (03.08.09 computations) + 1 borderline structural gap (03.08.08 six-term sequence, possibly an in-place Master edit to 03.08.01 instead). 16 topics verified COVERED with unit ids.** The book is essentially fully covered; the original 12-item punch-list has been almost entirely shipped.
