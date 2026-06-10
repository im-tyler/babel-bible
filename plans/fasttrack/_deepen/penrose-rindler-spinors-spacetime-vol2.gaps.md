# Deepening pass — Penrose & Rindler, *Spinors and Space-Time, Vol. 2: Spinor and Twistor Methods in Space-Time Geometry* (FT 3.37)

**Slug:** `penrose-rindler-spinors-spacetime-vol2`
**Date:** 2026-06-04
**Verdict:** The book is ~75% covered, surprisingly so for a frontier monograph.
The *analytic* heart of twistor theory — the incidence relation
$\omega^A = i x^{AA'}\pi_{A'}$, projective twistor space $\mathbb{PT}=\mathbb{CP}^3$,
twistor lines, the Penrose transform $H^1(\mathbb{PT}',\mathcal{O}(-2h-2))\cong$
massless fields, the helicity table, $SU(2,2)$ conformal invariance,
Bott-Borel-Weil — is fully developed in the Euclidean/instanton-driven block
`03.07.11`/`03.07.14`. The Petrov-Penrose classification, the Weyl-spinor
factorisation, Goldberg-Sachs, the peeling theorem, the Newman-Penrose $\Psi_n$
scalars, and the Bel-Robinson tensor all live (with proofs) in `48.02.18`. ADM
mass / positive mass is in `03.09.17`; conformal compactification appears as a
descriptive Penrose-diagram device in `13.06.01` and `13.02.01`.

What is genuinely **missing** is the part of Vol. 2 that is purely *geometric*
rather than analytic, and the part that is *gravitational asymptotics at the
theorem level* rather than at the cartoon level:

1. The **geometry of twistors** in Lorentz signature — $\alpha$-planes /
   $\beta$-planes, the point$\leftrightarrow$line and null-geodesic$\leftrightarrow$twistor
   correspondences, the Hermitian twistor norm $\Sigma_{\alpha\beta}Z^\alpha\bar
   Z^\beta$ with its $\mathbb{PT}^+\,/\,\mathbb{PN}\,/\,\mathbb{PT}^-$ split, and
   the Robinson congruence. The existing units hand you $\mathbb{CP}^3$ and the
   incidence relation but never the totally-null-plane geometry or the
   reality/helicity structure that *defines a twistor* (PR Vol. 2 Ch. 6, Ch. 9
   §9.3). Distinctive, load-bearing, absent.

2. **Asymptotic structure at $\mathscr{I}$ as a theorem**: conformal completion /
   asymptotic simplicity, the BMS group as the symmetry of null infinity, the
   news function, and the Bondi-Sachs mass-loss formula. Peeling is covered
   (`48.02.18` Master) and ADM mass is covered (`03.09.17`), but the BMS / Bondi
   / news apparatus — the signature content of PR Vol. 2 Ch. 9 — is nowhere
   stated as a result.

A borderline third item (the non-linear graviton) is **already a stated
theorem** inside `03.07.14`/`03.07.11`; I list it under OUT OF SCOPE with the
caveat that promoting it to a full construction unit is defensible.

**Genuine gaps: 2. COVERED-verified topics: 11. Out-of-scope: 2.**

---

## Gap 1 — The geometry of twistors: α/β-planes, the twistor norm, and the Robinson congruence

- **proposed id:** `03.07.12` (chapter `07-gauge-theory`; `03.07.11` and `03.07.14` occupied, `03.07.12`/`.13`/`.15` free — verified by `find content/03-modern-geometry/07-gauge-theory -name "03.07.1[235]*"` returning nothing)
- **title:** The geometry of twistors — null planes, the twistor norm, and the Robinson congruence
- **spec:** Over *Lorentzian/Minkowski* (not Euclidean $S^4$) spacetime: a twistor $Z^\alpha=(\omega^A,\pi_{A'})$ as the spinor data of a totally null self-dual $\alpha$-plane; the dual $\beta$-planes; the correspondence in which a spacetime point $\leftrightarrow$ a projective line $L_x\subset\mathbb{PT}$ and a *null geodesic / null twistor* $\leftrightarrow$ a point of the real hypersurface $\mathbb{PN}=\{\,\Sigma_{\alpha\beta}Z^\alpha\bar Z^\beta=0\,\}$; the Hermitian form of signature $(2,2)$ giving the helicity $s=\tfrac12\Sigma_{\alpha\beta}Z^\alpha\bar Z^\beta$ and the split $\mathbb{PT}=\mathbb{PT}^+\sqcup\mathbb{PN}\sqcup\mathbb{PT}^-$; the Robinson congruence as the family of null geodesics meeting a fixed non-null twistor (the "twistor" picture that names the theory); the Klein-quadric realisation of compactified complex Minkowski space as $\mathrm{Gr}(2,4)$ and the conformal group as $\mathrm{SU}(2,2)$.
- **prereqs (verified exist):** `03.07.11` (twistor space $\mathbb{CP}^3$, twistor lines), `03.07.14` (incidence relation, $\mathbb{PT}$, $SU(2,2)$ — stated there but the *geometry* is not), `48.02.18` (Weyl spinor / principal null directions, the spinor-PND language), `03.09.05` (spinor bundle)
- **chapter dir:** `content/03-modern-geometry/07-gauge-theory/` — frontmatter `section: modern-geometry`, `chapter: gauge-theory` (sits beside `03.07.11`/`03.07.14`; alternatively a new conformal/spinor home in `03-differential-geometry`, but the existing twistor arc is in `03.07`, so co-locating keeps prereq links clean)
- **why a gap:** `03.07.11` is built on the *Euclidean* Hopf/$S^4$ picture (instantons), and `03.07.14` introduces $\omega^A=ix^{AA'}\pi_{A'}$ and $\mathbb{PT}=\mathbb{CP}^3$ purely as the *substrate for the contour integral*. Neither unit ever defines an $\alpha$-plane, the twistor norm $\Sigma_{\alpha\beta}Z^\alpha\bar Z^\beta$, the $\mathbb{PT}^+/\mathbb{PN}/\mathbb{PT}^-$ reality split, helicity-as-norm, or the Robinson congruence — grep for `alpha-plane`, `beta-plane`, `Robinson congruence`, `twistor norm`, `PT^+`, `null twistor`, `Klein quadric` returns **zero** body hits anywhere in `content/`. This is the geometric core of PR Vol. 2 Ch. 6 (and the conformal/Klein-quadric material of Ch. 9 §9.2-9.3) — the content that makes a "twistor" a geometric object rather than a coordinate 4-tuple. Highest-value gap of the book.

## Gap 2 — Asymptotic structure at null infinity: conformal completion, the BMS group, the news function, and the Bondi mass-loss formula

- **proposed id:** `13.07.02` (chapter `07-gravitational-waves`; `13.07.01` occupied, `13.07.02` free — verified by `find content/13-gr-cosmology/07-gravitational-waves -name "13.07.02*"` returning nothing)
- **title:** Null infinity, the BMS group, and the Bondi-Sachs mass-loss formula
- **spec:** Penrose conformal completion $\hat g=\Omega^2 g$ with $\mathscr{I}^{\pm}=\{\Omega=0,\,d\Omega\neq0\}$ a null hypersurface; asymptotic simplicity / asymptotic flatness at null infinity; the universal structure of $\mathscr{I}$ (a degenerate $(0)\oplus(\text{spatial }S^2)$ geometry) and its symmetry group, the **Bondi-Metzner-Sachs group** $\mathrm{BMS}=\mathrm{SL}(2,\mathbb{C})\ltimes(\text{supertranslations})$, with the supertranslation obstruction to a canonical Poincaré subgroup; the **Bondi news function** $N=\dot\sigma^0$ built from the NP shear at $\mathscr{I}$; the **Bondi-Sachs mass-loss formula** $\dot m_B=-\tfrac{1}{4\pi}\oint|N|^2\,dS\le 0$ and its relation to the peeling-off $\Psi_n$ already established in `48.02.18`. Frame the result as: gravitational radiation is the news, and a radiating isolated system loses Bondi mass monotonically.
- **prereqs (verified exist):** `13.07.01` (linearized GR, gravitational waves, TT gauge, GW luminosity — already names Bondi/news in its history section), `48.02.18` (peeling theorem, NP $\Psi_n$, Weyl scalars — supplies the asymptotic Weyl falloff this formula reads), `13.06.01` (Penrose diagrams, $\mathscr{I}^\pm$ as null infinity, asymptotic flatness), `03.09.17` (ADM mass / positive mass, for the mass contrast: ADM is total, Bondi is the residual at retarded time), `13.02.01` (conformal invariance of the null cone, Penrose compactification motivation)
- **chapter dir:** `content/13-gr-cosmology/07-gravitational-waves/` — frontmatter `section: gr-cosmology`, `chapter: gravitational-waves`
- **why a gap:** Conformal infinity currently exists only as a *picture* — `13.06.01` draws the Carter-Penrose diagram and labels $\mathscr{I}^\pm$, `13.02.01` notes that conformal rescaling makes $\mathscr{I}$ "accessible as a finite boundary", and `13.07.01` mentions Bondi/news *only in its historical-context paragraph* (line 966) with no definition or formula. Grep confirms: no body unit defines the BMS group, the news function, or states the Bondi-Sachs mass-loss formula (`Bondi mass`, `news function`, `supertranslation`, `Bondi-Metzner-Sachs` return only the QED IR-divergence unit `12.16.05` and SUSY `12.19.02`, never a GR theorem). Peeling is proved (`48.02.18`) but it is the *premise* of the Bondi construction, not the construction itself. PR Vol. 2 Ch. 9 is the canonical reference for exactly this material; it is genuinely absent at theorem level and is the single biggest GR-asymptotics hole the book exposes.

---

## COVERED (not gaps) — verified against the live corpus

| Penrose-Rindler Vol. 2 topic (chapter) | Existing unit(s) | Evidence |
|---|---|---|
| Incidence relation $\omega^A = i x^{AA'}\pi_{A'}$; non-projective $\mathbb{T}=\mathbb{C}^4$; projective twistor space $\mathbb{PT}=\mathbb{CP}^3$ (Ch. 6) | `03.07.14` (lines 191-198) | explicit definition with $Z^\alpha=(\omega^A,\pi_{A'})$ |
| Twistor lines $L_x\subset\mathbb{CP}^3$ as holomorphic $\mathbb{CP}^1$; degree-one (Ch. 6) | `03.07.14` (lines 200-204), `03.07.11` | definition + parametrisation by $\pi_{A'}$ |
| Penrose transform $H^1(\mathbb{PT}',\mathcal{O}(-2h-2))\cong$ helicity-$h$ massless fields; contour-integral formula; well-definedness + zrm equation + bijectivity (Ch. 6) | `03.07.14` (full unit, Thm lines 243-267) | dedicated unit with proof, Eastwood-Penrose-Wells framework |
| Zero-rest-mass field equation $\partial^{AA_1'}\phi_{A_1'\cdots A_{2h}'}=0$; helicity table $h=0,\tfrac12,1,\tfrac32,2$ (Ch. 5-6) | `03.07.14` (lines 214-222, 269-279) | spinor zrm equation + helicity/line-bundle table |
| $\mathrm{SU}(2,2)$ as the conformal group; $\mathrm{PSU}(2,2)$ on $\mathbb{PT}$; conformal invariance of the transform (Ch. 6, Ch. 9) | `03.07.14` (Ex. 6, lines 415-429) | $SU(2,2)$ Hermitian-form-(2,2) equivariance stated (but NOT the norm geometry — see Gap 1) |
| Bott-Borel-Weil $H^k(\mathbb{CP}^3,\mathcal{O}(n))$; vanishing of global $H^1$ (machinery) | `03.07.14` (lines 528-534), `04.03.04` | full BBW table as $GL(4,\mathbb{C})$-reps |
| Weyl spinor $\Psi_{ABCD}=\Psi_{(ABCD)}$; factorisation into 4 principal spinors; Petrov-Penrose types I/II/D/III/N/O (Ch. 8) | `48.02.18` (Thm lines 222-232) | dedicated unit, spinor factorisation proof |
| Newman-Penrose Weyl scalars $\Psi_0,\dots,\Psi_4$; null tetrad $(\ell,n,m,\bar m)$ (Ch. 4, Ch. 8) | `48.02.18` (lines 224-226, Prop 3-4) | $\Psi_n$ defined; Schwarzschild $\Psi_2=-m/r^3$, Kerr, pp-wave $\Psi_4$ |
| Goldberg-Sachs theorem; shear-free null geodesic congruence $\leftrightarrow$ algebraic speciality; optical scalars $\kappa=\sigma=0$ (Ch. 7-8) | `48.02.18` (Master, lines 398) | stated with NP form $\Psi_0=\Psi_1=0$ |
| Peeling theorem: $\Psi_n\sim\Psi_n^{(N)}/r+\Psi_n^{(III)}/r^2+\cdots$ along outgoing null rays (Ch. 9) | `48.02.18` (Master, lines 400-404) | full peeling expansion + Bondi-Sachs mass-loss *named* as consequence (but formula/BMS not given — see Gap 2) |
| Bel-Robinson tensor, gravitational super-energy, gravito-electric/magnetic split (Ch. 9 adjacents) | `48.02.18` (Master, line 406) | $T_{abcd}$ + Bel criteria |
| ADM mass; positive-mass via spinors (Witten) — the mass at *spatial* infinity (related, contrasts with Bondi) | `03.09.17` | Lichnerowicz-Witten spinor proof |
| Self-dual linearised gravity (helicity-2 Penrose transform) (Ch. 6) | `03.07.14` (line 277, 555) | helicity table + linear non-linear-graviton statement |
| Conformal compactification $\mathbb{R}^4\to S^4$; conformal invariance of the null cone; $\mathscr{I}^\pm$ as null boundary (Ch. 9, descriptive) | `03.07.08`, `13.02.01` (Prop lines 598-600), `13.06.01` | conformal cone invariance proved; Penrose diagram drawn (but NO BMS/news/Bondi theorem — see Gap 2) |

## OUT OF SCOPE

- **The non-linear graviton / curved twistor theory (Penrose 1976) and the Plebański heaven (H-space) construction (PR Vol. 2 Ch. 9 §9.5 adjacents).** This is *already a stated theorem* in the corpus: `03.07.14` line 555 states the helicity-2 case and the Penrose-1976 deformation-of-complex-structure $\leftrightarrow$ self-dual Einstein metric correspondence, and `03.07.11` line 501 names the Plebański heaven theorem and the non-linear graviton as the gravitational analogue of Ward. Promoting it from a one-paragraph statement to a full unit (deformation theory $H^1(\mathbb{PT},\Theta)$, metric recovery, hyperKähler twistor space) is *defensible* and would be high-value, but per the brief's anti-manufacturing rule it does not clear the "no existing unit states it" bar — it is stated, not absent. Flag for a future dedicated-unit decision rather than counting as a residual gap.

- **A standalone two-component spinor calculus unit ($SL(2,\mathbb{C})$ spinor algebra, $\epsilon_{AB}$, soldering forms $\sigma^a_{AA'}$, abstract-index / van der Waerden notation — PR Vol. 1 carried into Vol. 2 Ch. 1-4).** This is foundational apparatus rather than a theorem-level payoff, and it is already used and partially established across `48.02.18` (Weyl spinor, $\epsilon^{AB}$ contraction, spin frame), `03.07.14` (spinor decomposition $\mathbb{C}^4=\mathbb{S}^A\otimes\mathbb{S}^{A'}$, zrm equation), `13.02.01` (abstract-index notation cited from PR Vol. 1), and `03.09.05` (Lorentzian spinor bundle). A dedicated unit would be a consolidation/refactor, not a coverage gap; it has no standalone theorem the way Gaps 1-2 do. Out of scope as a "gap" under the conservative default.
