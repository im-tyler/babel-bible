# Harris-Morrison *Moduli of Curves* (FT 3.30) — deepening-audit gap file (Phase 2)

**Verdict.** The original audit (`plans/fasttrack/joe-harris-moduli-of-curves.md`)
was written *before* the moduli strand grew, when only `04.10.01` and
`06.08.03` existed and the punch-list estimated ~5% anchor coverage. Since
then the corpus has shipped a dense Harris-Morrison strand — `04.10.20`,
`04.10.22`, `04.10.26`, `04.10.29`, `04.10.30`, `04.10.32`, `04.10.34`,
`04.10.35` — plus a full fixed-curve Brill-Noether chapter in `04.04`.
Grep-verification shows **almost the entire P1/P2/P3 punch-list is now
COVERED**, frequently at a depth (full theorem statements, GRR proofs,
worked low-genus examples) exceeding what the audit proposed. Mumford's
relation, the stable-reduction theorem, dual graphs, boundary divisors,
the tautological ring with string/dilaton/Witten-Kontsevich, the
Brill-Noether existence/non-existence theorem, the general-type-for-g≥24
theorem, admissible covers, Hurwitz numbers, ELSV, the Torelli morphism,
and the GIT/tri-canonical construction all have anchor units.

This leaves a **short, genuine residue**: Harris-Morrison's two
signature topics that the corpus describes only by dimension-count /
GIT-quotient slogans, never by their actual defining invariants or
parameter-space structure.

**Genuine gaps: 2. COVERED-verified topics: 24.**

---

## Genuine gaps

### Gap 1 — `04.10.33` Low-genus explicit models: $\mathcal{M}_2$ (Igusa-Clebsch) and $\mathcal{M}_3$ (Aronhold / plane quartics)

- **id:** `04.10.33` (free slot; `04.10.31`, `04.10.33`, `04.10.36` all open)
- **title:** Explicit low-genus moduli: Igusa-Clebsch invariants for $\mathcal{M}_2$ and the plane-quartic model of $\mathcal{M}_3$
- **spec:** The ring of $\mathrm{SL}_2$-invariants of binary sextics
  ($I_2, I_4, I_6, I_{10}$, Igusa-Clebsch 1960) realising $\mathcal{M}_2$
  as the weighted projective $\mathrm{Proj}$ of that invariant ring with the
  discriminant $I_{10}\neq0$ open locus; the Aronhold/Dixmier-Ohno
  invariants of ternary quartics realising the non-hyperelliptic part of
  $\mathcal{M}_3$ as $\{$smooth plane quartics$\}/\mathrm{PGL}_3$ with the
  hyperelliptic locus as the $\mathrm{Sym}^8\mathbb{P}^1/\mathrm{PGL}_2$
  codimension-one stratum. Worked computation of at least the $I_2,\dots,I_{10}$
  generators and the genus-2 → invariant-tuple map.
- **why a gap:** The corpus repeatedly states $\mathcal{M}_2 \cong
  \mathrm{Sym}^6\mathbb{P}^1/\mathrm{PGL}_2$ (`04.10.01` Ex., `04.10.02`,
  `04.10.03`, `04.10.08`) and $\dim\mathcal{M}_3=6$ via plane quartics
  (`04.10.20`, `04.08.02`), but **no unit ever writes down the Igusa-Clebsch
  invariant ring or the Aronhold invariant** — the actual coordinates that
  make these moduli spaces *computable*, which is precisely HM's signature
  pedagogical contribution (HM Ch. 1-2 worked examples). The grep for
  `Igusa|Clebsch|Aronhold` over `04.10` returns only Schottky-problem
  (`04.10.34`) and log-geometry (`04.12.14`) hits — none on curve moduli
  invariants.
- **prereqs (verified to exist):** `04.10.01` (moduli of curves),
  `04.10.02` (GIT), `04.10.03` (Hilbert-Mumford numerical criterion),
  `04.04.09` (Clifford / hyperelliptic), `04.08.02` (canonical sheaf;
  plane quartic = canonical genus-3 model)
- **chapter dir:** `content/04-algebraic-geometry/10-moduli/`
  frontmatter `section: algebraic-geometry`, `chapter: moduli`
- **originator prose:** Igusa, J. (1960) *Arithmetic variety of moduli for
  genus two*, Ann. of Math. 72, 612-649; Clebsch (1872); Dixmier (1987)
  / Ohno for ternary-quartic invariants.

### Gap 2 — `04.10.31` Severi varieties of plane curves and their irreducibility (Harris 1986)

- **id:** `04.10.31` (free slot)
- **title:** Severi varieties of nodal plane curves and the Harris irreducibility theorem
- **spec:** The Severi variety $V_{d,\delta}\subset\mathbb{P}^{N}$ (with
  $N=\binom{d+2}{2}-1$) parametrising reduced plane curves of degree $d$
  with exactly $\delta$ nodes and no further singularities; its expected
  dimension $\dim V_{d,\delta}=\frac{d(d+3)}{2}-\delta$; the **Severi
  problem** (smoothness and that $V_{d,\delta}$ is non-empty of the
  expected dimension); **Harris's 1986 theorem that $V_{d,\delta}$ is
  irreducible**; the map $V_{d,\delta}\dashrightarrow\mathcal{M}_g$ to the
  moduli of curves of geometric genus $g=\binom{d-1}{2}-\delta$; pointer
  to the Caporaso-Harris recursion for the Severi *degrees*.
- **why a gap:** The corpus has Severi *degrees* (the enumerative counts)
  only inside the tropical chapter — `04.12.05` (Mikhalkin), `04.12.06`,
  `04.12.15`, and `04.12.05` references Caporaso-Harris. **Nowhere is the
  Severi *variety* itself introduced as a parameter space**, nor its
  irreducibility (Harris 1986, the resolution of Severi's claim), nor its
  role as the bridge from plane-curve degenerations to $\mathcal{M}_g$.
  This is a distinct HM topic (HM Ch. 1 parameter-space examples; the
  Diaz-Harris / Caporaso-Harris programme) — the irreducibility theorem
  and the parameter-variety viewpoint are genuinely unanchored.
- **prereqs (verified to exist):** `04.10.01` (moduli of curves),
  `04.04.02` (Riemann-Hurwitz), `04.10.05` (Hilbert scheme),
  `04.05.06` (intersection pairing), `04.12.05` (Mikhalkin /
  Severi degrees — lateral, for the enumerative side)
- **chapter dir:** `content/04-algebraic-geometry/10-moduli/`
  frontmatter `section: algebraic-geometry`, `chapter: moduli`
- **originator prose:** Severi, F. (1921) *Vorlesungen über algebraische
  Geometrie*; Harris, J. (1986) *On the Severi problem*, Invent. Math. 84,
  445-461 (irreducibility); Caporaso-Harris (1998) Invent. Math. 131
  (recursion, already cited in `04.12.05`).

---

## COVERED (not gaps) — verified against the live corpus

Each topic the original punch-list proposed, with the existing unit that
covers it:

1. **Deformation theory of smooth curves** ($H^1(C,T_C)=\mathrm{Ext}^1$,
   Kodaira-Spencer, $3g-3$ count, Schlessinger) — **`04.10.20`** (dedicated
   unit; the audit's proposed `04.10.20` was shipped).
2. **Deformation theory of nodal curves / smoothing of nodes** ($xy=t$,
   $\mathrm{Ext}^1$, node-smoothing parameters) — **`04.10.20`** §formal +
   **`04.10.22`** (tangent space $\mathrm{Ext}^1(\Omega^1_C,\mathcal{O}_C)$
   at stable curves, dim $3g-3$ unobstructed).
3. **Stable curve / Deligne-Mumford stability** (nodal, finite Aut,
   $\omega_C$ ample, three characterisations, the stack) — **`04.10.22`**
   (dedicated unit, the audit's proposed `04.10.22`).
4. **Stable-reduction theorem** (DVR, finite base change, unique stable
   extension; properness of $\overline{\mathcal{M}}_g$) — **`04.10.22`**
   (full theorem statement + Lipman/Castelnuovo proof sketch, valuative
   criterion).
5. **Dual graph of a stable curve / boundary stratification** — **`04.10.22`**
   (worked example enumerating genus-2 stable types by dual graph;
   arithmetic-genus-from-graph formula).
6. **Boundary divisors $\Delta_0,\dots,\Delta_{\lfloor g/2\rfloor}$ and
   $\delta=\sum\Delta_i$** — **`04.10.22`** (definition, separating/
   non-separating, $\dim\Delta_i=\dim\mathcal{M}_{i,1}+\dim\mathcal{M}_{g-i,1}$
   worked for $\overline{\mathcal{M}}_3$).
7. **Irreducibility of $\mathcal{M}_g$ (Deligne-Mumford 1969)** — **`04.10.22`**
   §full-proof (Hurwitz-space + reduction-mod-$p$ sketch); **`06.08.03`**
   (historical prose).
8. **Hodge bundle $\mathbb{E}=\pi_*\omega$** — **`04.10.22`**, **`04.10.26`**
   (definition), **`04.10.32`** (Hodge integrals), **`06.08.03`**.
9. **$\psi$-classes on $\overline{\mathcal{M}}_{g,n}$ + string/dilaton
   equations** — **`04.10.26`** (definition $\psi_i=c_1(\mathbb{L}_i)$,
   string equation, multinomial genus-0 formula, splitting axiom).
10. **$\kappa$-classes (Mumford-Morita-Miller)** — **`04.10.26`**
    ($\kappa_a=\pi_*\psi_{n+1}^{a+1}$, forgetful comparison
    $\pi^*\kappa_a=\kappa_a-\psi^a$).
11. **$\lambda$-classes** — **`04.10.26`** ($\lambda_j=c_j(\mathbb{E})$);
    **`04.10.22`**, **`06.08.03`**.
12. **Mumford's relation $12\lambda_1=\kappa_1+\delta$** — **`04.10.22`**
    (full GRR-on-universal-family proof + Noether-formula analogue);
    **`06.08.03`** ($\lambda=\kappa_1/12$); **`04.10.32`** (ch$_{2k}(\mathbb{E})=0$).
13. **Tautological ring $R^*(\overline{\mathcal{M}}_{g,n})$ +
    Faber-Pandharipande / Faber conjectures / Pixton relations** —
    **`04.10.26`** (closure under push/pull, Faber-Pandharipande 2003
    theorem); **`04.10.22`** (Faber Gorenstein-with-socle conjecture).
14. **Forgetful & gluing/clutching morphisms; Knudsen
    contraction-stabilisation; universal curve $=\overline{\mathcal{M}}_{g,n+1}$**
    — **`04.10.26`** (dedicated unit, the audit's proposed `04.10.26`).
15. **Limit linear series (Eisenbud-Harris 1986)** — **`04.10.29`**
    (dedicated unit: compatibility inequality, smoothing theorem,
    chain-of-elliptic-curves proof).
16. **Brill-Noether existence/non-existence theorem** ($\rho$,
    Kempf/Kleiman-Laksov/Griffiths-Harris) — **`04.10.29`** (full theorem
    + numerical verifications); fixed-curve theory in **`04.04`** chapter.
17. **Gieseker-Petri theorem / Petri map** — **`04.04.08`** (dedicated
    unit `04.04.08-petri-map-gieseker-petri`); Petri-conjecture
    chain-of-elliptics proof also in **`04.10.29`**.
18. **Harris-Mumford: $\overline{\mathcal{M}}_g$ of general type for
    $g\geq24$; $K=13\lambda-2\delta$; slope inequality** — **`04.10.29`**
    (full Eisenbud-Harris-Harris-Mumford theorem + slope-of-Brill-Noether-
    divisor proof outline, Farkas $g=22,23$); **`04.10.22`** (Cornalba-Harris
    slope inequality); **`04.10.01`** (prose).
19. **Hurwitz numbers & the Hurwitz scheme** — **`04.10.30`** (dedicated
    unit: character formulas, scheme dimension/smoothness).
20. **Admissible covers (Harris-Mumford compactification)** — **`04.10.30`**
    (definition + Harris-Mumford 1982 theorem + smoothness sketch);
    **`04.10.32`** (branch-morphism extension).
21. **ELSV formula (Hurwitz ↔ Hodge integrals)** — **`04.10.32`**
    (dedicated unit, the audit's proposed `04.10.32`).
22. **Witten-Kontsevich / KdV / Mirzakhani / Okounkov-Pandharipande** —
    **`04.10.26`** (Witten conjecture + Kontsevich ribbon-graph proof +
    Mirzakhani + O-P statements); **`04.10.01`** Ex.; **`05.09.10`**
    (KP/tau-function side).
23. **Torelli morphism $\mathcal{M}_g\to\mathcal{A}_g$ + Torelli theorem +
    Schottky** — **`04.10.34`** (dedicated unit); **`06.06.03`**
    (Jacobian), **`06.06.08`** (Schottky).
24. **GIT / tri-canonical / Hilbert-scheme construction of
    $\mathcal{M}_g$** — **`04.10.01`** (M1-M3 proof outline), **`04.10.02`**,
    **`04.10.04`**, **`04.10.05`** (Hilbert scheme); $\mathcal{M}_2$ as
    $\mathbb{P}(V_6)/\mathrm{SL}_2$ in **`04.10.03`**, **`04.10.08`**
    (Kirwan Poincaré polynomial of $\mathcal{M}_2$).

**Also covered (audit P4 pointer items):** Moduli of stable maps /
Gromov-Witten — **`04.10.35`**; modular curve $\overline{\mathcal{M}}_{1,1}$
/ modular forms — **`04.10.01`** prose + number-theory chapter;
Mumford conjecture / Madsen-Weiss — **`04.10.01`** Ex.6 (remains pointer-
only, audit explicitly scoped this as deferred topology-track work, **not**
counted as a curve-moduli gap).

---

## Note on un-shipped reserved IDs

The audit reserved `04.10.20-36`. Of these, the central P1 batch
(`20,22,26`), the limit-linear-series / Hurwitz / ELSV / Torelli batch
(`29,30,32,34`), and `35` shipped. The reserved-but-unused IDs
`04.10.21,23,24,25,27,28` were **absorbed**: their content (nodal
deformation, boundary divisors, $\psi$, $\kappa/\lambda$, MMM relations,
Harris-Mumford general type) was folded into the broader shipped units
`04.10.22`, `04.10.26`, and `04.10.29` rather than split out. Those are
therefore **not** gaps — splitting them now would duplicate existing
anchor content. The only genuinely missing HM-distinctive material is the
two parameter-space / explicit-invariant topics above.
