# Besse, *Einstein Manifolds* (FT 3.48) — Deepening pass (Phase 2)

**Verdict:** The original audit's "~0% covered / the gap is total" is badly
stale. Since it was written the corpus grew to 1319 units and the
Einstein-metrics neighbourhood is now **substantially covered**: the Einstein
condition $\mathrm{Ric}=\lambda g$, the $O(n)$ curvature decomposition
(Weyl + traceless-Ricci + scalar), the Bochner-Weitzenböck technique, the full
Berger holonomy list with which holonomies force Einstein/Ricci-flat,
Calabi-Yau / hyperkähler / quaternion-Kähler definitions and their Ricci
properties, the Calabi conjecture + Yau's theorem, the Fano / Aubin-Yau /
Yau-Tian-Donaldson story, the Kähler/Ricci form with $[\rho]=2\pi c_1$, and the
Riemannian-symmetric-space construction (Killing-form metric) all exist.

What remains genuinely uncovered is the **moduli / variational / homogeneous**
core of EM (its Chs. 4, 7, 12) plus the **Yamabe** problem — content that lives
inside no existing unit. Four genuine, high-value gaps below. All placed in
`03-differential-geometry/02-manifolds/` (free slots 48.02.26, .29, .32, .33),
where the sibling Einstein/Weyl/Bochner units already sit; a separate
`13.07-einstein-metrics/` subchapter was considered and rejected as redundant —
these are pure-Riemannian, and the existing `13.04.02` is firmly Lorentzian
(Carroll/Wald spacetime framing), so the natural home is the Riemannian
differential-geometry chapter, cross-linked to 13.04.02.

---

## Genuine gaps (4)

### Gap 1 — Variational characterization of Einstein metrics (Riemannian)
- **id:** `48.02.26`
- **title:** "Einstein metrics as critical points of the total scalar curvature"
- **spec:** The normalized total scalar curvature $\mathcal{S}(g)=\mathrm{Vol}(g)^{(2-n)/n}\int_M R_g\,d\mathrm{vol}_g$ on the space of Riemannian metrics; its Euler-Lagrange equation is the trace-free Einstein operator $\mathring{r}=\mathrm{Ric}-\tfrac{R}{n}g=0$, so unit-volume critical metrics of $\mathcal{S}$ restricted to a conformal class give constant scalar curvature (Yamabe) and unconstrained critical metrics are exactly Einstein; second variation / Hilbert 1915.
- **why a gap:** `13.04.02` derives the field equations from the Einstein-Hilbert action in *Lorentzian spacetime* (Carroll, Wald, Appendix E). The **Riemannian** framing — critical metrics of the total scalar curvature on the cone of metrics, the unit-volume constraint, the trace-free Einstein operator as the gradient, and the split into the Yamabe (conformal) and Einstein (full) variational problems — appears in no unit. `48.02.05` states $\mathrm{Ric}=\lambda g$ and Schur but gives no variational origin.
- **prereqs:** `48.02.05` (Ricci/scalar curvature, Einstein condition), `48.02.16` (trace-free Ricci $\mathring{r}$, curvature decomposition), `13.04.02` (Lorentzian Einstein-Hilbert, cross-link)
- **chapter:** dir `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **anchor:** EM Ch. 4 (§4.17–4.47); Hilbert 1915.

### Gap 2 — Homogeneous Einstein metrics on $G/H$
- **id:** `48.02.29`
- **title:** "Homogeneous Einstein metrics and the scalar-curvature functional on invariant metrics"
- **spec:** $G$-invariant metrics on a compact homogeneous $G/H$ parameterised by $\mathrm{Ad}(H)$-invariant inner products on $\mathfrak{m}=T_{eH}(G/H)$; the Einstein equation becomes a finite polynomial system in the metric eigenvalues; invariant Einstein metrics are critical points of the scalar curvature restricted to unit-volume invariant metrics (Wang-Ziller variational principle); normal homogeneous and naturally reductive cases; isotropy-irreducible spaces are automatically Einstein; statement of the Wang-Ziller obstruction and the Alekseevsky conjecture.
- **why a gap:** `grep -rliE "homogeneous einstein|wang-ziller|naturally reductive"` returns nothing. `07.04.07` builds the Killing-form metric on a *symmetric* space and constructs sectional curvature but never states it is Einstein, and homogeneous (non-symmetric) Einstein metrics — EM's Ch. 7 core, Berger 1961 / Wang-Ziller 1985 — are absent entirely.
- **prereqs:** `07.04.07` (Riemannian symmetric space, isotropy, Killing form, $\mathfrak{g}=\mathfrak{k}\oplus\mathfrak{p}$), `48.02.05` (Einstein condition), `48.02.26` (scalar-curvature variational characterization — Gap 1)
- **chapter:** dir `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **anchor:** EM Ch. 7; Berger 1961 *Ann. Sc. Norm. Sup. Pisa*; Wang-Ziller 1985.

### Gap 3 — Infinitesimal Einstein deformations, the Lichnerowicz Laplacian on 2-tensors, and Koiso rigidity
- **id:** `48.02.32`
- **title:** "Moduli of Einstein metrics: Lichnerowicz Laplacian, infinitesimal deformations, Koiso obstruction"
- **spec:** The Lichnerowicz Laplacian $\Delta_L h=\nabla^*\nabla h-2\mathring{R}h+\mathrm{Ric}\cdot h$ on symmetric 2-tensors (distinct from the Hodge/spinor Lichnerowicz objects); the splitting $S^2T^*M = (\text{trace}) \oplus (\text{Lie-derivative}) \oplus (\text{TT})$; the space of infinitesimal Einstein deformations $\varepsilon(g)=\{h \in TT : \Delta_L h = 2\lambda h\}$; second-order obstruction (Koiso 1983) and the resulting (real-analytic, possibly singular) premoduli space; rigidity of the round sphere and of $\mathbb{C}P^n$ (no nontrivial deformations).
- **why a gap:** every "Lichnerowicz" hit in the corpus is the *spinor* formula $D^2=\nabla^*\nabla+\tfrac14 S$ or the eigenvalue bound on functions (`48.02.15`, `03.09.*`, `13.04.01`); the **Lichnerowicz Laplacian on symmetric 2-tensors** and the entire Einstein-deformation / Koiso-obstruction / moduli-rigidity apparatus (EM Ch. 12) is genuinely absent. `grep -rliE "koiso|einstein deformation|moduli of einstein|infinitesimal einstein"` → empty.
- **prereqs:** `48.02.15` (Bochner-Weitzenböck, rough Laplacian), `48.02.16` (curvature decomposition, $\mathring{r}$), `48.02.26` (Einstein as critical metric — Gap 1)
- **chapter:** dir `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **anchor:** EM Ch. 12 (§12.28–12.49); Koiso 1983 *Osaka J. Math.* 20.

### Gap 4 — The Yamabe problem
- **id:** `48.02.33`
- **title:** "The Yamabe problem: constant scalar curvature in a conformal class"
- **spec:** Existence of a constant-scalar-curvature metric in every conformal class on a compact manifold; the conformal Laplacian $L_g=\tfrac{4(n-1)}{n-2}\Delta_g + R_g$ and the subcritical Yamabe equation; the Yamabe invariant / functional and its sign; Yamabe 1960, Trudinger's gap, Aubin's positive-mass-free cases, Schoen's 1984 resolution via the positive mass theorem. This is the conformally-constrained sibling of Gap 1 (Einstein = unconstrained critical metric; Yamabe = critical within a conformal class).
- **why a gap:** `grep -rliE "yamabe"` → empty across the whole corpus. EM Ch. 4.G; load-bearing for the variational picture and a standard cross-reference from Schoen's spin-geometry positive-mass unit (`03.09.17`).
- **prereqs:** `48.02.16` (scalar curvature, conformal rescaling, Weyl/Schouten), `48.02.05` (Ricci/scalar curvature), `48.02.26` (variational total-scalar-curvature setup — Gap 1)
- **chapter:** dir `content/03-differential-geometry/02-manifolds/`; frontmatter `section: differential-geometry`, `chapter: manifolds`
- **anchor:** EM Ch. 4.G; Yamabe 1960; Trudinger 1968; Aubin 1976; Schoen 1984.

---

## COVERED (not gaps) — verified against the live corpus

| EM topic (from §2/§3 of original audit) | Existing unit(s) | Evidence |
|---|---|---|
| Einstein condition $\mathrm{Ric}=\lambda g$, definition + first examples (sphere, flat, $\mathbb{C}P^n$, Schur) | `48.02.05` | Theorem 3 "Einstein manifolds": $\mathrm{Ric}=\lambda g$, traceless-Ricci vanishing, $S=n\lambda$, Schur; round-sphere example $\lambda=n-1$. |
| Ricci tensor and scalar curvature | `48.02.05` | Full unit; sectional → Ricci → scalar hierarchy, contracted Bianchi. (Audit's "upstream blocker" is closed.) |
| Curvature decomposition under $O(n)$ (Weyl + traceless-Ricci + scalar); $g$ Einstein iff $\mathring{r}=0$ | `48.02.16` | Theorem 1 (Ricci decomposition) gives the three irreducible $O(n)$ summands explicitly; Einstein $\iff \mathring{r}=0$. |
| Weyl tensor, conformal flatness, Petrov | `48.02.16`, `48.02.18` | Weyl-Schouten theorem; Petrov classification of Lorentzian 4-curvature in 48.02.18. |
| Bochner / Weitzenböck technique, vanishing theorems | `48.02.15` | Weitzenböck formula, Bochner vanishing for harmonic 1-forms under positive Ricci, Lichnerowicz eigenvalue bound. |
| Berger holonomy classification; which holonomies force Einstein/Ricci-flat | `03.09.18`, `48.05.18`, `48.02.09`(acs) | 03.09.18 Theorem + table: $\mathrm{SU}(n),\mathrm{Sp}(n)$ Ricci-flat; $\mathrm{Sp}(n)\mathrm{Sp}(1)$ Einstein $S\neq0$; $G_2,\mathrm{Spin}(7)$ Ricci-flat. |
| Calabi-Yau manifold (Ricci-flat Kähler, $c_1=0$, holonomy $\mathrm{SU}(n)$, K3, quintic) | `03.09.18`, `48.05.18` | "Calabi-Yau is Ricci-flat" proof; K3, CY threefolds; holonomy reduction $\mathrm{U}(n)\to\mathrm{SU}(n)$. |
| Hyperkähler manifold (holonomy $\mathrm{Sp}(n)$, Ricci-flat, K3) | `03.09.18` | Exercise + theorem: parallel $I,J,K$, stabiliser $\mathrm{Sp}(n)$, Ricci-flat. |
| Quaternion-Kähler (holonomy $\mathrm{Sp}(n)\mathrm{Sp}(1)$, Einstein $\lambda\neq0$) | `03.09.18` | Distinguished from hyperkähler; "scalar curvature non-zero", Einstein. |
| $G_2$ / $\mathrm{Spin}(7)$ holonomy, Ricci-flat, Joyce 1996 | `03.09.18`, `48.05.18`, `03.09.19` | Joyce gluing construction; Bryant 1987 local existence; calibrations. |
| Calabi conjecture (statement) | `03.09.18`, `48.05.18`, `48.02.11` | Calabi 1957 conjecture stated verbatim; "every Kähler class with $c_1=0$ has unique Ricci-flat metric." |
| Yau's theorem (Calabi conjecture, $c_1\le0$ / Ricci-flat Kähler) | `03.09.18`, `48.05.18`, `04.10.13` | Yau 1977/78 cited and used; existence of CY metric. |
| Aubin-Yau / Kähler-Einstein $c_1<0$ + Fano $c_1>0$ (YTD) | `04.10.13` | K-stability and the Yau-Tian-Donaldson conjecture: Fano KE existence, Tian/Donaldson/CDS; Aubin-Yau negative case referenced. |
| Kähler form, Ricci form $\rho=-i\partial\bar\partial\log\det g$, $[\rho]=2\pi c_1$ | `48.02.11` | Exercise + Theorem: $\rho$ closed $(1,1)$, local formula, Fubini-Study $\rho=(n+1)\omega_{FS}$. |
| Kähler identities, Hodge decomposition on Kähler manifolds | `48.02.12` | Dedicated unit. |
| Riemannian symmetric spaces (Cartan, Killing-form metric, $\mathfrak g=\mathfrak k\oplus\mathfrak p$) | `07.04.07`, `07.04.14` | Construction of metric from Killing form; explicitly cites Besse Ch. 7. (Note: the *Einstein* property of symmetric spaces is folded into Gap 2.) |
| Einstein-Hilbert action, variational derivation (Lorentzian) | `13.04.02`, `13.04.01`, `13.04.04` | Variational derivation, cosmological constant $\mathrm{Ric}=\Lambda g$ (de Sitter), stress-energy as functional derivative. (Riemannian critical-metric framing is Gap 1.) |
| Anti-self-dual / twistor / ASD-Einstein 4-manifolds | `03.07.09`, `03.07.11`, `03.07.14` | ASD moduli space, Penrose twistor space, Ward correspondence, Penrose transform. |
| Calibrated geometry (special-holonomy calibrations) | `03.09.19` | Harvey-Lawson calibrations from parallel spinors. |
| Strominger-Yau-Zaslow / mirror symmetry (CY application) | `04.12.10`, `04.12.07` | SYZ conjecture; toric degeneration of CY. |

**Counts:** 4 genuine gaps; 20 COVERED-verified topic rows (covering ~25 distinct EM theorems/constructions the original audit listed as ✗).
