# Fulton, *Introduction to Toric Varieties* (FT 3.32) — deepening gap file

**Slug:** `fulton-toric-varieties`
**Re-audited against:** live corpus, chapter `04-algebraic-geometry/11-toric/`
(15 units shipped: 04.11.01–04.11.14 + 04.11.16).

**Verdict: essentially fully covered.** The first-pass audit's entire
punch-list (items 1–16, P1 through P4) was produced *except* its item 15
(Cox homogeneous coordinate ring / Demazure GIT-quotient construction),
whose slot `04.11.15` is empty. That single unit is the one genuine,
high-value gap: it is already referenced as a forward-pointer `[04.11.15]`
by four shipped units (04.11.04, 04.11.08, 04.11.09, 04.11.12) yet does
not exist, so the chapter currently dangles a dead cross-reference.

All other Fulton-distinctive content — affine toric varieties, fans, the
orbit-cone correspondence, smoothness/completeness, toric resolution,
toric divisors and support functions, the toric Picard group, the
polytope↔fan dictionary and $L_P$, the algebraic moment map, Stanley-
Reisner cohomology, mixed-volume intersection theory, Bernstein-
Kushnirenko, the canonical divisor $\sum D_\rho$, toric Riemann-Roch /
Ehrhart, and reflexive-polytope/Batyrev mirror duality — is present and,
in several cases, deeper than Fulton. Evidence in the COVERED trailer.

---

## GENUINE GAP (1)

### `04.11.15` — Cox homogeneous coordinate ring and the Demazure GIT-quotient construction
- **id:** `04.11.15` (FREE; the only unoccupied slot inside the produced
  04.11.01–04.11.16 run, and already named as `[04.11.15]` by four units).
- **title:** Cox homogeneous coordinate ring and the Demazure quotient construction
- **spec:** The total coordinate (Cox) ring
  $S=\mathbb{C}[x_\rho:\rho\in\Sigma(1)]$ graded by $\mathrm{Cl}(X_\Sigma)$
  via the toric divisor-class exact sequence; the irrelevant ideal
  $B(\Sigma)$ and the exceptional set $Z(\Sigma)=V(B)$; the quotient
  presentation $X_\Sigma=(\mathbb{C}^{\Sigma(1)}\setminus Z(\Sigma))/\!/G$
  where $G=\mathrm{Hom}(\mathrm{Cl}(X_\Sigma),\mathbb{C}^*)$ is the kernel
  of $(\mathbb{C}^*)^{\Sigma(1)}\!\to T$ dual to $e_i\mapsto v_{\rho_i}$;
  sheaves on $X_\Sigma$ as graded $S$-modules; worked cases $\mathbb{P}^n$
  ($S=\mathbb{C}[x_0,\dots,x_n]$, $G=\mathbb{C}^*$) and
  $\mathbb{P}^1\times\mathbb{P}^1$; the identification of this algebraic
  quotient with the symplectic-reduction shadow $\mathbb{C}^d/\!/K$ of the
  Delzant construction. Originator citations Cox 1995 and Demazure 1970.
- **prereqs (verified to exist):** `04.11.04` (fan and $X_\Sigma$),
  `04.11.08` (toric divisor / support function), `04.11.09` (toric Picard
  group / class group exact sequence), `04.11.10` (polytope-fan dictionary,
  $L_P$), `04.10.02` (GIT), `04.10.04` (Kempf-Ness GIT-symplectic
  dictionary), `05.04.04` (Delzant theorem).
- **chapter dir:** `content/04-algebraic-geometry/11-toric/`
- **frontmatter:** chapter `04-algebraic-geometry`, section `11-toric`.
- **note:** Master-tier (~2500 words). On ship, convert the four dangling
  `[04.11.15]` forward-pointers (04.11.04, 04.11.08, 04.11.09, 04.11.12)
  into live links and add the reciprocal Delzant back-pointer in
  `05.04.04`'s "algebraic-geometric counterpart" paragraph.

---

## COVERED (not gaps) — due-diligence evidence

Each first-pass punch-list item and each brief-flagged candidate, with the
existing unit id that covers it:

- Algebraic torus, character/cocharacter lattices $M,N$ — **04.11.01**.
- Rational polyhedral cone, dual cone, Gordan's lemma — **04.11.02**.
- Affine toric variety $U_\sigma=\mathrm{Spec}\,\mathbb{C}[S_\sigma]$ —
  **04.11.03**.
- Fan $\Sigma$ and $X_\Sigma$; gluing; separatedness/normality
  (Theorem 1.13) — **04.11.04**.
- Smoothness (regular cone) and completeness ($|\Sigma|=N_\mathbb{R}$)
  criteria; projectivity via normal fan — **04.11.05**.
- Orbit-cone correspondence; orbit closures as toric subvarieties —
  **04.11.06**.
- Toric resolution of singularities via fan refinement / star subdivision —
  **04.11.07**.
- Toric divisors $D_\rho$, $T$-Cartier divisors, support functions; the
  canonical/anticanonical divisor $\sum D_\rho$ and $-K_{\mathbb{P}^n}$
  worked example; toric Riemann-Roch / Demazure vanishing / Ehrhart /
  Hirzebruch-Riemann-Roch as lattice-point count (Brion-Vergne 1997) —
  all in **04.11.08**.
- Toric Picard group (PL functions mod linear); nef/ample/Mori cone;
  general Picard group — **04.11.09** (+ general **04.05.02**).
- Polytope↔fan dictionary (normal fan, projective toric from polytope) and
  the line bundle $L_P$ with $H^0=\bigoplus_{m\in P\cap M}\mathbb{C}\chi^m$ —
  **04.11.10**.
- Algebraic moment map; momentum polytope; Brion 1987 image theorem;
  explicit bridge to Delzant — **04.11.11** (symplectic side **05.04.04**,
  Duistermaat-Heckman **05.04.05**).
- Cohomology of smooth complete toric variety (Stanley-Reisner mod linear
  relations; Danilov-Jurkiewicz) — **04.11.12**.
- Toric intersection theory and mixed volumes ($D_P^n=n!\,\mathrm{Vol}$;
  Riemann-Roch leading-coefficient = Ehrhart volume) — **04.11.13**.
- Bernstein-Kushnirenko theorem (toric Bezout, mixed volume) — **04.11.14**.
- Reflexive polytope, polar duality $P\leftrightarrow P^\circ$, Gorenstein
  Fano condition, Batyrev mirror construction (pointer) — **04.11.16**.
- Toric MMP / Reid combinatorial flips, toroidal embeddings (Mumford 1973),
  full Batyrev mirror Hodge-number theory — **deferred by design** in the
  first-pass audit §5 (scope routed to FT 3.33 Gross / future deepenings);
  not counted as gaps.
- GIT and Kempf-Ness machinery used by the proposed 04.11.15 — **04.10.02**,
  **04.10.04** (so the gap is purely the toric specialisation, not the GIT
  foundation).

---

**Counts:** genuine gaps = **1**; COVERED-verified topics = **18** (16
punch-list/brief candidates + MMP/toroidal deferral group + GIT foundation).
