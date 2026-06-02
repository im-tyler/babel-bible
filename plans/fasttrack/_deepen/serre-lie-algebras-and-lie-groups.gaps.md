# Serre — *Lie Algebras and Lie Groups* (FT 3.13) — Deepening gap file (Phase 2)

**Re-audit verdict.** The first-pass audit (written before the corpus reached
1319 units) listed ~14 "to write" items. The corpus has since grown a full
`03-differential-geometry/03-lie-groups/` strand and a much larger
`07-representation-theory/06-lie-algebraic/` chapter. Re-verification shows the
**entire Part II programme** (formal groups, $p$-adic analytic groups, Lazard's
equivalence, Lie's three theorems) is now **COVERED**, as are the nilpotent /
solvable / Engel / Lie / Cartan-criterion prereqs, PBW, the Casimir proof of
Weyl complete reducibility, and the Hopf-algebra/primitive-element machinery
(Milnor-Moore). What remains genuinely absent is the **Part I core that Serre
is most famous for**: the *free Lie algebra*, the *Campbell-Baker-Hausdorff
formula as a dedicated theorem*, and the *Chevalley-Eilenberg cohomology +
Whitehead-lemmas + Hochschild-Serre* package as standalone units (the CE
machinery currently exists only as a special-case recovery inside the
Lie-*algebroid* unit `03.04.22`).

**Genuine gaps: 4. COVERED-verified topics: 16.**

---

## GENUINE GAPS

### Gap 1 — Free Lie algebra, Hall basis, Magnus expansion
- **id:** `07.06.13` (verified free; ids 13 and 15 are the only gaps in the
  01–22 run)
- **title:** Free Lie algebra and the Magnus expansion
- **spec:** Construct the free Lie algebra $L(X)$ on a set $X$ via its universal
  property and as the primitive elements of the free associative algebra
  $T(X)$ under $\Delta(x)=x\otimes1+1\otimes x$; Friedrichs' criterion; Hall /
  Lyndon basis; the Magnus embedding $L(X)\hookrightarrow T(X)$. SLALG §III.
- **prereqs:** `07.06.02` (universal-enveloping-algebra, has PBW),
  `03.04.01` (lie-algebra), `03.12.49` (bialgebra-hopf-milnor-moore — supplies
  the primitive-element / $\Delta(x)=x\otimes1+1\otimes x$ apparatus)
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/`;
  frontmatter `section: representation-theory`, `chapter: lie-algebraic`
- **Evidence it is absent:** no file titled free-lie / magnus anywhere; the
  *only* body hit for "free lie algebra" in scope is `03.12.49`, whose own Lean
  gap explicitly records "(1) the free Lie algebra and its universal [property]
  is not developed." No Hall-basis or Lyndon-word unit exists.

### Gap 2 — Campbell-Baker-Hausdorff formula (dedicated theorem)
- **id:** `07.06.15` (verified free)
- **title:** The Campbell-Baker-Hausdorff formula and the Dynkin form
- **spec:** Statement of the universal Lie series
  $\log(\exp X\exp Y)=X+Y+\tfrac12[X,Y]+\tfrac1{12}([X,[X,Y]]+[Y,[Y,X]])+\cdots$;
  proof that the series lies in the free Lie algebra (Friedrichs criterion,
  depends on Gap 1); Dynkin's explicit coefficient formula; convergence over
  $\mathbb R$, $\mathbb C$, and $\mathbb Q_p$. SLALG §IV (the centrepiece of
  Part I).
- **prereqs:** `07.06.13` (Gap 1, free Lie algebra), `03.03.01` (lie-group,
  exponential map), `03.03.04` (formal-group-law — supplies the convergence /
  $p$-adic frame)
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/`;
  `section: representation-theory`, `chapter: lie-algebraic`
- **Evidence it is absent:** the BCH formula is *mentioned and first-terms-
  sketched* in ≥6 units (`03.03.01` lie-group Advanced section gives a 4-term
  sketch via $C'(s)=\frac{\mathrm{ad}}{\mathrm{ad}-1}Y$; `03.03.04`, `03.03.05`,
  `03.03.06` cite it as a black box; QM units use it operationally), but **no
  unit states it as a theorem, proves it, or gives the Dynkin explicit form**.
  Grep for "dynkin.{0,15}formula|dynkin series" returns zero hits; "Friedrichs"
  hits are all PDE/operator false positives. This is the single largest genuine
  gap and the formula the book is named for.

### Gap 3 — Lie-algebra cohomology $H^*(\mathfrak g,M)$ and Whitehead's lemmas
- **id:** `07.06.23` (next free; 23 is unused, max occupied is 22)
- **title:** Cohomology of a Lie algebra and Whitehead's lemmas
- **spec:** Chevalley-Eilenberg complex $C^n(\mathfrak g,M)=\mathrm{Hom}
  (\Lambda^n\mathfrak g,M)$ with the standard differential; low-degree
  interpretations ($H^0=M^{\mathfrak g}$, $H^1=$ derivations/inner,
  $H^2=$ central extensions); Whitehead's first and second lemmas
  ($H^1(\mathfrak g,M)=H^2(\mathfrak g,M)=0$ for $\mathfrak g$ semisimple,
  $M$ finite-dim); the **cohomological** proof of Weyl complete reducibility.
  Derived-functor identification $H^n=\mathrm{Ext}^n_{U(\mathfrak g)}(k,M)$ at
  Master. SLALG §V.
- **prereqs:** `07.06.02` (universal-enveloping-algebra), `03.04.01`
  (lie-algebra), `04.03.06` (derived-functors-and-ext), `07.06.22`
  (weyl-complete-reducibility — links the cohomological proof to the existing
  Casimir proof)
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/`;
  `section: representation-theory`, `chapter: lie-algebraic`
- **Evidence it is absent:** the CE *machinery* exists ONLY as a special-case
  recovery inside the Lie-**algebroid** unit
  `03.04.22-lie-algebroid-cohomology-and-the-chevalley-eilenberg-differential`
  (its Proposition: "for $A=\mathfrak g$ over a point... $H^\bullet(\mathfrak g)
  =H^\bullet_{CE}(\mathfrak g)$") — i.e. a one-line corollary, with no
  $g$-module differential, no low-degree dictionary, and no Whitehead lemmas.
  Whitehead's lemma is *named only as a closing-argument footnote* in
  `07.06.22` ("a refined argument using the Whitehead lemma provides the
  splitting") and `07.06.10` casimir, never stated or proved. No dedicated
  $H^*(\mathfrak g,M)$ unit.

### Gap 4 — Hochschild-Serre spectral sequence for a Lie-algebra ideal
- **id:** `07.06.24` (next free)
- **title:** The Hochschild-Serre spectral sequence for a Lie-algebra ideal
- **spec:** For $\mathfrak h\triangleleft\mathfrak g$, the filtration of the
  Chevalley-Eilenberg complex by $\mathfrak h$-degree giving
  $E_2^{p,q}=H^p(\mathfrak g/\mathfrak h,H^q(\mathfrak h,M))\Rightarrow
  H^{p+q}(\mathfrak g,M)$; the five-term inflation-restriction sequence;
  worked Heisenberg example with the centre as ideal. SLALG §VI.
- **prereqs:** `07.06.23` (Gap 3, lie-algebra cohomology), `03.13.01`
  (spectral-sequence), `04.03.14` (spectral-sequence-of-a-filtered-complex)
- **chapter dir:** `content/07-representation-theory/06-lie-algebraic/`;
  `section: representation-theory`, `chapter: lie-algebraic`
- **Evidence it is absent:** the five-term exact sequence is derived only at the
  **generic** SS level (`03.13.01` Exercise 7, `04.03.13`
  grothendieck-spectral-sequence §"Five-term exact sequence") and the
  *topological* Leray-Serre level (`03.13.02`); there is **no** Lyndon-
  Hochschild-Serre group-cohomology unit and **no** Lie-algebra-ideal
  specialisation. Grep for the Lie-algebra $E_2=H^p(\mathfrak g/\mathfrak h,
  H^q(\mathfrak h,M))$ pattern returns zero matches in any Lie unit.

---

## COVERED (not gaps) — verified with id evidence

| SLALG topic (first-pass "gap") | Covered by | Evidence |
|---|---|---|
| Lie algebra (defn, ideals, derivations, semidirect product) | `03.04.01` lie-algebra | shipped |
| Universal enveloping algebra $U(\mathfrak g)$ | `07.06.02` universal-enveloping-algebra | shipped |
| **PBW theorem** (the audit wanted a proof unit) | `07.06.02` (Synthesis + Advanced + Master: Poincaré 1900/Birkhoff 1937/Witt 1937, filtration/associated-graded); `03.12.49` (PBW as Hopf-coalgebra iso $S(\mathfrak g)\to U(\mathfrak g)$) | proved, not just stated |
| **Hopf-algebra / primitive-element structure of $U(\mathfrak g)$** | `03.12.49` bialgebra-hopf-milnor-moore | Milnor-Moore theorem; $P(U(\mathfrak g))=\mathfrak g$; $\Delta(x)=x\otimes1+1\otimes x$ primitives — this IS Serre's BCH apparatus |
| Solvable / nilpotent Lie algebras | `07.06.14` engel-lie-theorem; `01.02.05` solvable-nilpotent-jordan-holder | shipped |
| **Engel's theorem + Lie's theorem** | `07.06.14` engel-lie-theorem | title is literally "Engel's theorem + Lie's theorem" |
| **Cartan's criterion** (solvability/semisimplicity via Killing form) | `07.06.16` cartan-criterion-solvability-semisimplicity | shipped |
| Killing form / Cartan subalgebra / root-space decomposition | `07.06.17` cartan-subalgebra, `07.06.18` root-space-decomposition, `07.06.19` cartan-matrix, `07.06.20` serre-relations | shipped |
| **Weyl complete reducibility** (audit wanted the cohomological proof) | `07.06.22` weyl-complete-reducibility (Casimir proof) + `07.06.10`/`07.06.21` casimir-element | Casimir-van der Waerden proof shipped; only the *cohomological* re-proof + Whitehead lemmas remain (→ Gap 3) |
| **Formal group law** $F(X,Y)\in R[\![X,Y]\!]$ | `03.03.04` formal-group-law | full unit: axioms, Lazard ring, **height**, **Lubin-Tate** (10 hits), char-0 = $\hat{\mathbb G}_a$ equivalence, Quillen/MU pointer |
| Lie functor for formal groups (char-0 equivalence) | `03.03.04` | "over char 0 every commutative FGL $\cong$ additive; $\log_F$ gives the iso" |
| **$p$-adic Lie group + $p$-adic exponential** | `03.03.05` padics-lie-group | full unit: $\mathbb Q_p$, radius of convergence, $p$-adic BCH bracket, Lazard 1965 anchor |
| **Lazard's equivalence** ($p$-adic Lie groups ↔ $\mathbb Q_p$-Lie algebras; uniform pro-$p$) | `03.03.05` (Theorem 1: Lazard's theorem, uniform pro-$p$ of finite rank) + `03.03.06` | shipped; modern pro-$p$ (DSMS) cited |
| **Lie's three theorems** (Lie functor $\mathbf{SLG}\simeq\mathbf{LGA}$, integration) | `03.03.06` lie-third-theorem | Theorem 1 unified categorical statement, BCH-based construction |
| Exponential map $\exp:\mathfrak g\to G$ (real/complex) | `03.03.01` lie-group (Advanced: $d\exp_0=\mathrm{id}$, local diffeo, BCH sketch) + `02.06.03` matrix-exponential | shipped |
| Spectral sequence (general) + five-term exact sequence | `03.13.01` spectral-sequence (Ex. 7), `04.03.13` grothendieck-ss, `04.03.14` filtered-complex | general machinery; Lie-algebra specialisation is Gap 4 |
| Leray-Serre SS (topological, fibrations) | `03.13.02` leray-serre | shipped; algebraic Lie version is Gap 4 |

**Net change vs first-pass audit:** of the audit's 14 punch-list items, 10 are
now COVERED (the whole Part II $p$-adic/formal-group/Lie-functor arc plus the
solvable/Engel/Lie/Cartan/PBW/Weyl Part-I prereqs). The 4 genuine remaining
gaps are exactly Serre's Part-I cohomological/free-Lie/BCH signature — the
material no other Fast Track Lie book carries and which the corpus only touches
obliquely (BCH sketches; CE recovered as an algebroid special case).
