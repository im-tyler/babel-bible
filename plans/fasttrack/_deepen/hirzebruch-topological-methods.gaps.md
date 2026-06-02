# Hirzebruch, *Topological Methods in Algebraic Geometry* (FT 3.25) — Deepening pass (Phase 2)

**Verdict: ESSENTIALLY FULLY COVERED. 0 genuine gaps.**

The original audit (`plans/fasttrack/hirzebruch-topological-methods.md`,
written when the corpus was ~313 units) proposed a 9-item punch-list
(units `03.06.11`, `03.06.15`, `03.06.18`, `03.06.19`, `03.06.20`,
`04.05.10`, `04.05.11`, `04.05.12`, plus a Master section on exotic
spheres). **Every one of those units has since shipped.** Re-verifying
each candidate and every major Hirzebruch theorem against the live
1319-unit corpus, no Chapter I–IV theorem, construction, or worked
computation lacks a corresponding unit. The book is at FT equivalence on
its load-bearing content; deeper integrality content (Atiyah-Hirzebruch
"Riemann-Roch for differentiable manifolds", Lichnerowicz vanishing, the
$\chi_y$-genus interpolation) is also already covered.

Per the brief, reporting 0 genuine gaps is a valid, valuable result. No
marginal units are manufactured to pad a count.

---

## Genuine gaps

**None.** (See the COVERED trailer for the evidence basis.)

A maximally conservative reading turned up two topics that are *mentioned*
rather than given a standalone unit, but on inspection both are treated to
full FT depth inside existing units, so neither is a gap:

- **The Borel appendix's deeper homogeneous-space characteristic-class
  theory** (Chern classes of homogeneous bundles via Weyl-group restriction
  to a maximal torus). Covered by `03.06.20` (Borel-Hirzebruch and the
  cohomology of $G/T$), which carries the $H^*(G/T;\mathbb Q)$ computation,
  the Weyl-group action, and prereqs into `07.06.04`/`07.06.07`/`07.06.09`
  (Weyl group, Weyl character formula, Borel-Weil). The deeper
  Borel-Hirzebruch I–III multiplicative-sequence-on-flag-variety material
  is post-1956 follow-up work, explicitly out of scope per the book's own
  appendix boundary.
- **The $\chi_y$-genus / generalized Todd genus $T_y$** (Hirzebruch §IV,
  §15, §III.5.5 — the one-parameter family interpolating arithmetic genus
  / signature / Euler characteristic). Not on the original audit's
  punch-list, so a candidate new gap — but it is given a full *Definition*,
  the $\mathrm{td}_y$ power series $Q_y(x)=x(1+ye^{-x})/(1-e^{-x})$, the
  three specialisations ($y=0$ HRR, $y=1$ signature, $y=-1$ Gauss-Bonnet),
  and multiple worked residue computations inside `04.05.11`
  (worked-HRR-computations). Standalone-unit promotion is unwarranted.

---

## COVERED (not gaps) — evidence of due diligence

Each original-audit punch-list item and every major Hirzebruch theorem,
with the shipped unit id that covers it:

| Hirzebruch topic | Status | Covering unit(s) |
|---|---|---|
| **Multiplicative sequences** (formal-power-series machine $\prod Q(x_i)=\sum K_j(\sigma)$) | COVERED | `03.06.15` (multiplicative-sequences-l-ahat-todd-genera) |
| **Todd genus** $\mathrm{td}$ from $Q(x)=x/(1-e^{-x})$ | COVERED | `03.06.15`; calibration $\int_{\mathbb{CP}^n}\mathrm{td}=1` worked |
| **L-genus** from $Q(x)=x/\tanh x$ | COVERED | `03.06.15`, `03.06.19`, `03.06.13` |
| **Â-genus** from $Q(x)=(x/2)/\sinh(x/2)$ | COVERED | `03.06.15` (worked on $\mathbb{CP}^2,\mathbb{HP}^2,K3$), `03.09.10` |
| **Bernoulli-number coefficients** of $L$, $\hat A$ | COVERED | `03.06.15` (denominators $3,45,945$ for $L$; $24,5760$ for $\hat A$) |
| **Chern character** $\mathrm{ch}(E)=\sum e^{x_i}$; ring iso $K(X)\otimes\mathbb Q\xrightarrow{\sim}H^{\mathrm{ev}}$ | COVERED | `03.06.18` (chern-character-ring-homomorphism) |
| **Chern / Pontryagin classes** | COVERED | `03.06.04` (pontryagin-chern-classes) |
| **Splitting principle** (formal Chern roots) | COVERED | `03.13.03`; used throughout `03.06.15`, `03.06.18` |
| **Signature of a $4k$-manifold** (intersection form $b_+-b_-$) | COVERED | `03.06.19` (signature-4k-manifold-intersection-form) |
| **Hirzebruch signature theorem** $\sigma(M)=\langle L_k,[M]\rangle$ | COVERED | `03.06.11` (hirzebruch-signature-theorem) |
| **Oriented bordism** $\Omega_*^{\mathrm{SO}}\otimes\mathbb Q$ polynomial ring + Thom | COVERED | `03.06.13` (oriented-bordism-pontryagin-thom); `03.06.12` unoriented |
| **Stiefel-Whitney / Pontryagin numbers** | COVERED | `03.06.10` (stiefel-whitney-pontryagin-numbers) |
| **Steenrod squares / Wu formula** | COVERED | `03.06.14` (steenrod-squares-and-wu-formula) |
| **Coherent sheaves on a complex manifold** | COVERED | `04.06.02` |
| **Sheaf cohomology of a coherent sheaf** | COVERED | `04.03.01`; `04.03.05` (Serre vanishing/finiteness) |
| **Serre duality** | COVERED | `04.08.03` (serre-duality), `06.04.04` (curves) |
| **Holomorphic Euler characteristic** $\chi(X,\mathcal F)$ | COVERED | `04.04.01`, `04.05.08`, `06.04.01` |
| **Dolbeault cohomology + Hodge isomorphism** | COVERED | `04.09.01`, `06.04.03` |
| **Riemann-Roch on curves** | COVERED | `04.04.01`, `06.04.01` |
| **Riemann-Roch on surfaces (Noether formula)** | COVERED | `04.05.08` (riemann-roch-theorem-for-surfaces) |
| **Hirzebruch-Riemann-Roch (general $n$)** $\chi=\int_X\mathrm{ch}(\mathcal F)\,\mathrm{td}(X)$ | COVERED | `04.05.10` (hirzebruch-riemann-roch-theorem-general-dimension) |
| **Worked HRR** ($\mathcal O(d)$ on $\mathbb{CP}^n$, tangent bundle, K3, Hirzebruch surfaces, $\chi_y$) | COVERED | `04.05.11` (worked-hirzebruch-riemann-roch-computations) |
| **$\chi_y$-genus** / generalized Todd $\mathrm{td}_y$ interpolation | COVERED | `04.05.11` (full definition + worked residues) |
| **Grothendieck-Riemann-Roch** (pushforward $\mathrm{ch}(f_*E)\mathrm{td}=f_*(\mathrm{ch}(E)\mathrm{td})$) | COVERED | `04.05.12` (pointer-grothendieck-riemann-roch-grr; SGA 6 + Fulton sourced) |
| **Borel appendix: $H^*(G/T;\mathbb Q)$, homogeneous bundles** | COVERED | `03.06.20` (borel-hirzebruch-cohomology-g-t) |
| **Atiyah-Singer index theorem** (HRR/signature/$\hat A$ as specialisations) | COVERED | `03.09.10` (atiyah-singer-index-theorem) |
| **Integrality theorems** (Todd integral on complex mfd; $\hat A$ integral on spin; Atiyah-Hirzebruch "RR for differentiable manifolds"; Lichnerowicz vanishing) | COVERED | `03.06.15` (theorems + worked $K3$, $\mathbb{HP}^2$), `03.09.10` |
| **Milnor exotic 7-spheres** (L-genus integrality obstruction) | COVERED | `03.06.17` (combinatorial-pontryagin-exotic-7-spheres) |
| **Elliptic genus / modularity** (downstream of $\hat A$, FT 3.26 territory) | COVERED | `03.06.23` (modularity-of-the-elliptic-genus), `03.06.24` (Bott-Taubes rigidity), `03.06.26` (pointer elliptic cohomology) |

**Topics checked: 28 — all COVERED.**

Free id slots noted during verification (in case future deepening finds a
gap): `03.06.21`, `03.06.22`, `03.06.25` open; `04.05.13` next in divisors.
None needed.

---

**Report:** 0 genuine gaps · 28 COVERED-verified topics ·
file: `plans/fasttrack/_deepen/hirzebruch-topological-methods.gaps.md`
