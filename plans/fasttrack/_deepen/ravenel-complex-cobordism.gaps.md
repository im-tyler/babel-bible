# Ravenel, *Complex Cobordism and Stable Homotopy Groups of Spheres* — deepening gap file

**Book:** Ravenel (the "Green Book"), Fast Track 3.42. **Slug:** `ravenel-complex-cobordism`.

**Method.** The first-pass audit (`plans/fasttrack/ravenel-complex-cobordism.md`) was written
against a ~313-unit corpus and listed ~23 "to write" units, almost all marked ✗. The corpus has
since grown to 1319 units and a large fraction of that punch-list is now **already covered** —
chromatic / stable-homotopy material accreted into the Bousfield-Kan SS unit (`03.12.38`), the
elliptic-cohomology pointer (`03.06.26`), the spectrum unit (`03.12.04`), the formal-group-law unit
(`48.03.04`), the arithmetic-square unit (`03.12.45`), and the Steenrod-squares unit (`03.06.14`).
Each candidate below was grepped against the live corpus (filenames + bodies) before being called a
gap. After verification, **5 genuine gaps remain** — all load-bearing chapters of Ravenel that no
existing unit states or proves. Verified-covered topics are listed in the trailer with the unit id
that covers them.

Recommended chapter for all five: `03-modern-geometry/13-spectral-sequences/`
(dir `content/03-modern-geometry/13-spectral-sequences/`, frontmatter `section: modern-geometry`,
`chapter: spectral-sequences`). Free ids verified: `03.13.05`–`03.13.09` are all unoccupied
(current occupied: `.01`–`.04`, plus `.E1`). Gap 4's natural home is instead
`03-modern-geometry/12-homotopy/` (free id `03.12.41`); see its entry.

---

## Genuine gaps

### Gap 1 — Brown-Peterson spectrum $BP$ and the structure of $BP_*BP$
- **id:** `03.13.05`
- **chapter dir:** `content/03-modern-geometry/13-spectral-sequences/`
  · frontmatter `section: modern-geometry`, `chapter: spectral-sequences`
- **title:** "Brown-Peterson spectrum BP and BP_*BP"
- **spec:** Quillen-idempotent splitting $MU_{(p)} \simeq \bigvee_i \Sigma^{?} BP$ off the $p$-local
  complex-cobordism spectrum; coefficient ring $BP_* = \mathbb{Z}_{(p)}[v_1, v_2, \ldots]$ with
  $|v_n| = 2(p^n-1)$ ($p$-typical formal group law, Hazewinkel vs Araki generators); Hopf-algebroid
  structure $(BP_*, BP_*BP)$ with $BP_*BP = BP_*[t_1, t_2, \ldots]$, the right unit $\eta_R$ and the
  $v_n$; this is the $E_2$-input object for the Adams-Novikov spectral sequence. (Ravenel Ch. 4.)
- **prereqs (verified to exist):** `48.03.04` (formal group law / Lazard / $p$-typicality / Quillen),
  `03.12.04` (spectrum, $MU$), `03.12.38` (Bousfield-Kan / ANSS as cobar SS at $BP$),
  `03.06.26` (elliptic-cohomology pointer: Landweber, $BP_*$ Hazewinkel generators).
- **why genuine:** `BP` and `BP_*BP` appear only as one-line *context* inside `03.12.38` (the ANSS
  is "the BK SS at $R = BP$") and a passing mention in `03.06.26`/`03.06.16`. No unit states the
  Quillen-idempotent splitting, the coefficient ring $\mathbb{Z}_{(p)}[v_n]$, or the Hopf-algebroid
  structure of $BP_*BP$. This is the algebraic backbone of Ravenel Ch. 4 and is load-bearing for
  Gaps 2 and 3.

### Gap 2 — Chromatic spectral sequence (Miller-Ravenel-Wilson)
- **id:** `03.13.06`
- **chapter dir:** `content/03-modern-geometry/13-spectral-sequences/`
  · `section: modern-geometry`, `chapter: spectral-sequences`
- **title:** "Chromatic spectral sequence"
- **spec:** The *algebraic* chromatic spectral sequence of Miller-Ravenel-Wilson 1977: the chromatic
  resolution $BP_* \to M^0 \to M^1 \to \cdots$ obtained by iterating localisation $v_n^{-1}$ and
  quotient by the invariant ideals $I_n = (p, v_1, \ldots, v_{n-1})$, giving an exact couple whose
  derived spectral sequence has $E_1^{n,*} = \operatorname{Ext}_{BP_*BP}(BP_*, M^n)$ and converges to
  the Adams-Novikov $E_2$-page $\operatorname{Ext}_{BP_*BP}(BP_*, BP_*)$. Separates $\pi_*^s$ into
  chromatic layers indexed by height $n$. **Ravenel's signature construction (Ch. 5).**
- **prereqs (verified to exist):** `03.13.05` (Gap 1, $BP_*BP$), `03.12.38` (ANSS $E_2$ as
  $\operatorname{Ext}_{BP_*BP}$), `03.13.01` (spectral sequence / exact couple),
  `48.03.04` (formal group law height).
- **why genuine:** grep for `"chromatic spectral sequence"` returns **zero** hits anywhere in the
  corpus. The *chromatic filtration / tower of localisations* $L_n$ is covered conceptually
  (`03.12.04`, `03.12.45`, `03.12.48`), but the algebraic chromatic SS that computes the ANSS
  $E_2$-page — the object the Green Book is built around — is entirely absent.

### Gap 3 — Greek-letter elements ($\alpha$, $\beta$, $\gamma$ families)
- **id:** `03.13.07`
- **chapter dir:** `content/03-modern-geometry/13-spectral-sequences/`
  · `section: modern-geometry`, `chapter: spectral-sequences`
- **title:** "Greek-letter elements and periodic families"
- **spec:** The Greek-letter naming/construction of ANSS $E_2$ classes via the chromatic
  resolution: $\alpha$-family $\alpha_{t} \in \operatorname{Ext}^1$ (image of $J$ / $v_1$-periodic),
  $\beta$-family $\beta_{s} \in \operatorname{Ext}^2$ ($v_2$-periodic), $\gamma$-family in
  $\operatorname{Ext}^3$; their construction as connecting-homomorphism images
  $\operatorname{Ext}^0(M^n) \to \operatorname{Ext}^n(BP_*)$ in the chromatic SS, divisibility/order
  bookkeeping, and which classes survive to detect non-trivial families in the stable stems.
  (Ravenel Ch. 5; Miller-Ravenel-Wilson, Ravenel-Wilson.)
- **prereqs (verified to exist):** `03.13.06` (Gap 2, chromatic SS), `03.13.05` (Gap 1, $BP_*BP$),
  `03.08.11` (image of $J$ — anchors the $\alpha$-family), `03.12.38` (ANSS).
- **why genuine:** grep for `"greek-letter"`, `"alpha family"`, `"beta family"`, `\alpha_t` returns
  **zero** hits. The $\alpha$-family's height-1 shadow (image of $J$) exists at `03.08.11`, but the
  Greek-letter bookkeeping itself — the canonical contribution of the Green Book — has no unit.

### Gap 4 — Hopkins-Smith periodicity theorem and the thick-subcategory theorem
- **id:** `03.12.41`  *(homotopy chapter, sits beside the nilpotence theorem at `03.12.45`)*
- **chapter dir:** `content/03-modern-geometry/12-homotopy/`
  · `section: modern-geometry`, `chapter: homotopy`
- **title:** "Periodicity and thick-subcategory theorems"
- **spec:** Type-$n$ finite $p$-local spectra (those with $K(m)_*X = 0$ for $m<n$, $\neq 0$ for
  $m \geq n$); existence and asymptotic uniqueness of a $v_n$-self-map
  $f : \Sigma^d X \to X$ inducing an isomorphism on $K(n)_*$ and zero on $K(m)_*$ for $m \neq n$
  (Hopkins-Smith periodicity theorem, *Ann. Math.* 148, 1998); the thick-subcategory theorem
  classifying thick subcategories of finite $p$-local spectra by type. Companion to the nilpotence
  theorem (already at `03.12.45`).
- **prereqs (verified to exist):** `03.12.45` (Devinatz-Hopkins-Smith nilpotence theorem, Morava
  $K(n)$), `03.12.48` (Bousfield localisation / chromatic tower), `03.12.04` (spectrum, Morava
  $K$-theory).
- **why genuine:** the periodicity theorem and thick-subcategory theorem are named *only in prose*
  in `03.12.48` (historical paragraph: "Hopkins-Smith 1998 ... proved the nilpotence theorem and the
  periodicity theorem") and `03.12.38` (one clause). Neither is **stated** anywhere. By contrast the
  nilpotence theorem *is* stated as a theorem at `03.12.45:576` — so this is the matching missing
  half of the Hopkins-Smith picture, not a duplicate.

### Gap 5 — Telescope conjecture (statement, history, 2023 resolution)
- **id:** `03.13.08`
- **chapter dir:** `content/03-modern-geometry/13-spectral-sequences/`
  · `section: modern-geometry`, `chapter: spectral-sequences`
- **title:** "Telescope conjecture"
- **spec:** Ravenel's telescope conjecture: for a type-$n$ finite spectrum $X$ with $v_n$-self-map
  $f$, the telescope $T(n) = f^{-1}X$ has the same Bousfield localisation as $K(n)$, i.e.
  $L_{T(n)} = L_{K(n)}$; equivalently the finite (telescopic) and the $K(n)$-local monochromatic
  layers agree. State the conjecture, its role in Ravenel Ch. 6–8, and the
  Burklund-Hahn-Levy-Schlank-Yuan 2023 **disproof** at heights $n \geq 2$.
- **prereqs (verified to exist):** `03.12.48` (Bousfield localisation / Bousfield class / chromatic
  tower), `03.12.41` (Gap 4, $v_n$-self-maps / type-$n$ spectra), `03.12.45` (Morava $K(n)$,
  chromatic convergence).
- **why genuine:** grep for `"telescope conjecture"` / `"telescope"` returns **zero** topology hits
  (only telescoping-sum false positives). The conjecture Ravenel posed and organised his later
  chapters around is entirely absent; its 2023 resolution is a headline recent result worth
  recording.

---

## COVERED (not gaps) — verified due-diligence trailer

Each first-pass "to write" item below was grepped against the live corpus and found already covered;
do **not** re-propose.

- **Formal group law; Lazard ring; Lazard's theorem; logarithm.** COVERED — `48.03.04`
  (full beginner→master unit: definition, Lazard comparison lemma with proof, $L \cong
  \mathbb{Z}[t_n]$, isomorphisms/logarithm).
- **Height of a FGL; Honda formal groups; $p$-typicality; Cartier idempotent.** COVERED — `48.03.04`
  (Master: Honda classification by height, Cartier module, $p$-typical normal form; height worked
  for $\hat{\mathbb{G}}_m$).
- **Quillen's theorem $\pi_*(MU) = L$ (universal FGL on $MU$).** COVERED — `48.03.04` (Master Thm 1)
  and `03.06.26` (Quillen 1969 stated with surjectivity/injectivity proof sketch).
- **Landweber exact-functor theorem.** COVERED — `03.06.26` (stated with proof idea + the
  $v_n$-regularity criterion, plus the additive-law counterexample proof).
- **Steenrod algebra $\mathcal{A}_p$; Adem relations; Cartan formula; Milnor Hopf-algebra
  structure.** COVERED — `03.06.14` (mod-2 Steenrod squares, Adem + Cartan stated and proved,
  Milnor 1958 dual). (Odd-primary $\mathcal{A}_p$ is the only sliver not made explicit — judged
  marginal, not proposed.)
- **Classical Adams spectral sequence (construction + $E_2 = \operatorname{Ext}_{\mathcal{A}_p}$ +
  convergence to $\pi_*^s{}^{\wedge}_p$).** COVERED — `03.12.38` (Master: identified as the BK SS of
  the cobar resolution $C^\bullet(H\mathbb{F}_p; X)$, $E_2$-page and convergence proved as a
  Proposition) and stated in `03.12.04`.
- **Generalised / Adams-Novikov spectral sequence ($E_2 = \operatorname{Ext}_{BP_*BP}$,
  convergence).** COVERED — `03.12.38` (Master Proposition: ANSS as BK SS at $R = BP$, $E_2$ and
  convergence to $\pi_{t-s}(S^{\wedge}_p)$).
- **Hopf algebroid; cobar complex $C^*(A,\Gamma;M)$.** COVERED — `03.12.38` (cobar construction for a
  ring spectrum, $R_*R$ Hopf algebroid, $\operatorname{Ext}$ over comodules). NOTE: the *general
  reference-grade* Hopf-algebroid definition (Ravenel App. A1) is thin — judged adequately covered
  for FT-equivalence; not proposed.
- **Chromatic filtration / chromatic tower / chromatic convergence.** COVERED — `03.12.04`
  (chromatic filtration by Morava $K(n)$), `03.12.45` (Hopkins-Ravenel chromatic convergence theorem
  named), `03.12.48` (chromatic tower of Bousfield classes $\langle E(n)\rangle$). *Note:* the
  *topological* chromatic tower is covered; the *algebraic* chromatic spectral sequence is Gap 2.
- **Morava $K$-theory $K(n)$ and Morava $E$-theory $E_n$.** COVERED — `03.12.04` (coefficient ring
  $\mathbb{F}_p[v_n^{\pm1}]$, height correspondence), `03.06.26` (height-2 / supersingular),
  `03.12.45` / `03.12.38`.
- **Morava stabiliser group $\mathbb{S}_n$ + change-of-rings (Lubin-Tate ring).** COVERED —
  `03.12.38` (Master: $K(n)$-local $E_2$ = continuous cohomology of $\mathbb{G}_n$ acting on the
  Lubin-Tate ring $E_n^*$) and `03.06.26` (Lubin-Tate deformation). Stated, not separately proved —
  judged adequately covered; not proposed.
- **Nilpotence theorem (Devinatz-Hopkins-Smith) + chromatic convergence.** COVERED — `03.12.45`
  (stated as a Theorem at line 576) and `03.06.26`, `03.12.38` (named).
- **$J$-homomorphism; image of $J$; Adams conjecture.** COVERED — `03.08.11` ($J(X)$, $\operatorname{Im}J$,
  Adams conjecture with Quillen and Sullivan proof sketches).
- **Thom spectra $MO$, $MSO$, $MU$; complex/oriented/unoriented bordism; Pontryagin-Thom.** COVERED —
  `03.06.12` ($MO$, Thom's theorem, Adams SS computation of $\pi_*MO$), `03.06.13` ($MSO$,
  Pontryagin-Thom), `03.12.04` (bordism spectra listed). *Note:* a dedicated "$MU$ as the universal
  complex-orientable cohomology theory" unit does not exist, but $MU$'s defining content (Thom
  construction, $\pi_*MU = L$, complex-orientation FGL) is split across `48.03.04` + `03.06.26` +
  `03.06.12-13` + `03.12.04` — judged covered in aggregate; not proposed.
- **Hopf-invariant-one theorem; Bott periodicity; Hurewicz / Freudenthal / Serre finiteness.**
  COVERED — `03.08.07` (Bott periodicity), `03.12.19` (Hurewicz), `03.12.21` (Blakers-Massey /
  Freudenthal), Hopf-invariant-one referenced in `03.12.07` / `03.12.38`.
- **Nishida nilpotence theorem.** Treated as COVERED-equivalent: subsumed by the
  Devinatz-Hopkins-Smith nilpotence theorem at `03.12.45` (Nishida's $\pi_*^s$-nilpotence is the
  classical precursor). Judged marginal as a standalone unit; not proposed.

---

## Counts
- **Genuine gaps:** 5 (ids `03.13.05`, `03.13.06`, `03.13.07`, `03.12.41`, `03.13.08`).
- **COVERED-verified topics:** 16 topic clusters, each with the existing unit id above.
