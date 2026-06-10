# Lang, *Algebra* (FT 3.01) — Phase-2 deepening gap file

Re-audit against the live ~1432-unit corpus (the original audit was written at
~313 units and predicted ~25 new `01.02.*` units; the great majority of those
have since shipped, in `01-foundations/02-groups/`, `01-foundations/01-linear-algebra/`,
`21-number-theory/`, and `04-algebraic-geometry/`). Almost every P-1/P-2 item
from the first-pass punch-list is now COVERED. After aggressive grep-verification,
**4 genuine high-value gaps remain**, all field/structure-theory items that Lang
develops centrally but that the corpus only *invokes* downstream without ever
stating or proving at the algebra-foundations level.

Chapter dir for all four: `content/01-foundations/02-groups/`
(frontmatter `section: foundations`, `chapter: groups`).
Free `01.02.*` slots verified unoccupied: 09, 13, 14, 15, 18, 21, 23–29.

---

## Genuine gaps

### 1. `01.02.13` — Fundamental Theorem of Galois Theory (finite case)
- **spec:** The Galois correspondence for a finite Galois extension $E/F$: the
  inclusion-reversing bijection between subgroups $H \le \mathrm{Gal}(E/F)$ and
  intermediate fields $F \subseteq L \subseteq E$ via $H \mapsto E^H$ and
  $L \mapsto \mathrm{Gal}(E/L)$; Artin's theorem ($[E:E^H]=|H|$); normal
  subgroups $\leftrightarrow$ Galois (normal) intermediate extensions; the
  solvable-by-radicals criterion as the worked Master example (insolubility of
  the quintic, citing $S_n$ non-solvability already in `01.02.05`).
- **prereqs:** `01.02.12` (algebraic extension, degree, splitting field,
  separability — stops exactly at the door of the correspondence),
  `01.02.05` (solvable/nilpotent, simplicity of $A_n$),
  `01.02.04` (Sylow), `01.01.04` (basis/dimension for the degree=order count).
- **chapter:** dir `content/01-foundations/02-groups/`; `section: foundations`,
  `chapter: groups`.
- **Why a gap:** `01.02.12` develops extensions/normality/separability/primitive
  element/cyclotomic polynomials and *mentions* the Galois group informally, but
  never states the bijective correspondence, fixed fields, or Artin's theorem.
  `01.02.05` references "radical solvability corresponds to group solvability" in
  prose only. No unit anywhere states or proves the Fundamental Theorem (verified:
  `grep -riE "fundamental theorem of galois|inclusion-reversing.*intermediate|E\^H|Artin's theorem.*fixed"` — only Iwasawa `21.07.01` open-subgroup hits, not the finite FTGT). This is the single highest-value missing theorem of Lang Parts II.

### 2. `01.02.14` — Semisimple rings, the Artin–Wedderburn structure theorem, the Jacobson radical
- **spec:** Semisimple module/ring (Lang convention: zero module allowed);
  every semisimple ring is a finite product of matrix rings over division rings
  $\prod_i M_{n_i}(D_i)$ (Artin–Wedderburn), proved via the Jacobson density
  theorem and primitive idempotents; the Jacobson radical $J(R)$ as the
  obstruction to semisimplicity, $R/J(R)$ semisimple for Artinian $R$;
  nilradical vs. Jacobson-radical distinction (Lang's terminology). Master tier
  reframes the $\mathbb{C}G$ rep-theory decompositions as the special case.
- **prereqs:** `01.02.06` (ring, ideal, quotient), `01.02.10` (module, free
  module, direct sum), `01.01.11` (matrix algebras / module structure language),
  `07.01.02` (Schur's lemma — used in the density-theorem step).
- **chapter:** dir `content/01-foundations/02-groups/`; `section: foundations`,
  `chapter: groups`.
- **Why a gap:** Artin–Wedderburn is *stated and used* only in the special case
  $\mathbb{C}G \cong \prod M_{d_i}(\mathbb{C})$ in `07.02.01` (Maschke),
  `07.01.05` (regular rep), and mentioned in `03.01.02` (associative algebra) —
  always representation-flavoured, semisimple-group-algebra-only, and never
  proved as the general ring structure theorem. The standalone notions
  "semisimple ring," "Jacobson radical," and the general matrix-over-division-ring
  decomposition with the density-theorem proof have no unit (verified across
  `01-foundations`, `03-modern-geometry/01-tensor-algebra`, `07-*`). This is the
  algebra-side spine the rep-theory strand depends on (audit item 14).

### 3. `01.02.09` — Category, functor, natural transformation, universal property, adjunction (foundations)
- **spec:** Category, (covariant/contravariant) functor, natural transformation;
  initial/terminal objects, products/coproducts as universal objects; the
  universal-property *definition* pattern (free objects, tensor products) that
  Lang uses from Ch. I §11 onward; the Yoneda lemma (Master); adjoint functors
  with free–forgetful as the running example.
- **prereqs:** `01.02.01` (group), `01.02.06` (ring), `01.02.10` (module/tensor —
  the canonical universal-property example already in the corpus).
- **chapter:** dir `content/01-foundations/02-groups/`; `section: foundations`,
  `chapter: groups`.
- **Why a gap:** The corpus has many *advanced* category units (abelian
  `01.02.33`, triangulated/derived `04.03.10–04.03.18`, model/∞-categories in
  `03.12.*`) but **no foundational "what is a category/functor/universal
  property" unit**. Yoneda is only *invoked* (e.g. `04.02.01` scheme functor of
  points, `25.04.01`), never developed. Lang's editorial signature ("categories
  from page one") and the universal-property framing of tensor products
  (`01.02.10`) and free objects sit on this missing base. Audit P-1 item 1.
  Moderate-to-high value as the missing foundation, not a frontier topic.

### 4. `01.02.15` — Galois cohomology, Hilbert's Theorem 90, and the Brauer group of a field
- **spec:** $H^1(\mathrm{Gal}(L/F), L^\times)=0$ (Hilbert 90, cohomological and
  cyclic-Kummer forms); group cohomology of a finite/profinite Galois group;
  central simple algebras over a field, the Brauer group $\mathrm{Br}(F)$ as
  similarity classes under $\otimes_F$, $\mathrm{Br}(F)\cong H^2(\mathrm{Gal}(F^{sep}/F),
  (F^{sep})^\times)$; quaternion algebras as the order-two case. Master tier
  connects to the local invariant map already used in `21.02.05`.
- **prereqs:** `01.02.13` (Galois correspondence — the gap above, so this ships
  after it), `01.02.06` (ring/ideal), `01.02.10` (tensor product of modules /
  $\otimes_F$ of algebras), `03.01.02` (associative algebra).
- **chapter:** dir `content/01-foundations/02-groups/`; `section: foundations`,
  `chapter: groups`.
- **Why a gap:** Hilbert 90 appears *only* in its étale/cohomological-Picard form
  in `04.03.08` (étale cohomology); the Brauer group and central simple algebras
  appear *only* inside advanced number theory (`21.02.05` Hilbert symbol,
  `21.02.09` Brauer–Manin, `21.02.08` Hasse–Minkowski) as the global
  invariant-sum sequence — always assuming, never building, the field-level
  Galois-cohomology / Brauer-group machinery. The elementary algebra-side
  development (Hilbert 90 for a cyclic extension, $\mathrm{Br}(F)$ via CSAs) that
  Lang gives is genuinely absent. A Lang-distinctive item flagged in the brief.

---

## COVERED (not gaps) — verified against the live corpus

First-pass punch-list items and brief-flagged Lang-distinctive topics confirmed
already present (id of the covering unit in brackets):

**Groups (Lang Ch. I)**
- Subgroup, coset, quotient, isomorphism theorems — **[01.02.02]**.
- Group action, orbit–stabiliser, class equation, Burnside — **[01.02.03]**.
- Sylow theorems + simplicity criterion + classification of small-order groups — **[01.02.04]**.
- Solvable/nilpotent groups, Jordan–Hölder, derived/central series — **[01.02.05]**.
- Simplicity of $A_n$ ($n\ge5$), with proof — **[01.02.05]** (Theorem 1).
- Abel–Ruffini / solvability-by-radicals statement (prose) — **[01.02.05]**.
- Free group, free product, group presentation — **[01.02.20]**.

**Rings & modules (Lang Ch. II–III)**
- Ring, ideal, quotient ring, ring isomorphism theorems — **[01.02.06]**.
- Polynomial ring, UFD/PID/ED hierarchy, Gauss/Eisenstein — **[01.02.07]**.
- Localisation of a commutative ring — **[01.02.08]**.
- Module, submodule, free module, bilinear maps, direct sum — defined in **[01.02.10]**.
- Tensor product of modules (universal property + construction, tensor–hom adjunction) — **[01.02.10]**.
- Exact sequence, short five lemma, snake lemma — **[01.02.11]**.
- Chinese Remainder Theorem (general commutative ring, coprime ideals; cites Lang Ch. II §2) — **[21.01.03]**.

**Fields & Galois (Lang Ch. V–VIII)** — partial; see gaps 1 & 4
- Algebraic extension, degree, tower law, splitting field, separability, perfect
  field, primitive element theorem, cyclotomic polynomials/irreducibility — **[01.02.12]**.
- Transcendence basis / transcendence degree = Krull dimension of the function
  field — **[04.02.07]**.
- Ostrowski's theorem (classification of absolute values on $\mathbb{Q}$) — **[21.02.03]**.
- Real closed fields (model-theoretic: Tarski decidability, quantifier
  elimination) — **[02.02.01]**, **[24.02.01]** (note: the *algebraic*
  Artin–Schreier theory is thin; see "marginal" below).

**Commutative algebra (Lang Ch. IX–X)**
- Hilbert basis theorem, Noetherian rings/modules — **[01.02.17]**.
- Nakayama's lemma — **[01.02.16]**.
- Krull dimension, Krull principal ideal theorem (Hauptidealsatz) — **[01.02.22]**.
- Nullstellensatz (three forms, Zariski-lemma proof) — **[04.02.07]**.
- Noether normalisation (stated and used in the proof) — **[04.02.07]**.
- Integral extension, going-up / going-down (Cohen–Seidenberg) — **[04.02.07]**.
- Dedekind domain, unique factorisation of ideals, fractional ideals,
  ramification & discriminant — **[21.02.07]** (Lang Ch. VII ramification material).

**Linear & multilinear algebra (Lang Ch. XIII–XVI)**
- Structure theorem for f.g. modules over a PID (general statement + Smith normal
  form + f.g. abelian groups + module packaging) — **[01.01.11]**, **[01.01.16]**.
- Rational & Jordan canonical forms as corollaries of the PID structure theorem — **[01.01.11]**.
- Bilinear/quadratic forms; **Witt's theorem (cancellation + Witt decomposition)** — **[01.01.15]**, **[21.02.06]**.
- Tensor algebra, exterior algebra, symmetric algebra (graded, universal
  properties) — **[01.02.19]**.
- Determinant — **[01.01.07]**.

**Semisimple / representation (Lang Ch. XVII–XVIII)** — partial; see gap 2
- Artin–Wedderburn for $\mathbb{C}G$ (special case) — **[07.02.01]**, **[07.01.05]**.
- Maschke's theorem — **[07.02.01]**. Schur's lemma — **[07.01.02]**.
- Characters & orthogonality — **[07.01.03]**, **[07.01.04]**.
- Induced representations, Frobenius reciprocity — **[07.01.07]**, **[07.01.08]**.
- Group algebra $k[G]$, regular representation, Wedderburn decomposition (rep-side) — **[07.01.05]**.
- Jacobson radical of $kG$ (in modular block theory) — **[07.02.06]** (but the
  *general* ring-level radical + density-theorem proof is the gap, item 2).

**Homological coda (Lang Ch. XX–XXI)** — explicitly deferred to 3.02 Gel'fand–Manin;
the corpus now covers it richly: chain complexes **[01.02.30]**, homotopy category
**[01.02.31]**, mapping cone **[01.02.32]**, abelian categories **[01.02.33]**,
Dold–Kan **[01.02.35]**, derived functors/Ext **[04.03.06]**, Tor **[04.03.17]**.

**Galois cohomology fragments** — Hilbert 90 (cohomological Picard form) **[04.03.08]**;
Brauer group / central simple algebras (global invariant sequence) **[21.02.05]**,
**[21.02.09]**. These *use* the machinery; the field-level *development* is gap 4.

---

## Marginal / deliberately NOT proposed
These are genuinely absent but too low-value to justify a unit (Lang covers them
lightly; brief-flagged items checked for completeness):
- **Witt vectors / ring $W(k)$** — only an incidental $W_2(k)$ mention in Hodge
  `04.09.01`. Niche; Lang's treatment is brief; not worth a foundations unit.
- **Kummer theory & Artin–Schreier extensions** (cyclic $\mu_n$-/additive
  duality) — only incidental ("Kummer-cyclotomic fields" in `21.01.05`, an
  Artin–Schreier aside in `00.03.02`). A real Lang signature but Master-only and
  low-leverage; could fold into gap 1's unit as a Master-tier extension rather
  than a standalone unit.
- **Infinite Galois theory / Krull topology / profinite groups** — used in
  `21.07.01` (Iwasawa), `48.03.05` (p-adic Lie groups), `03.12.40` (profinite
  completions). The profinite-group/Krull-topology *foundation* is thin but the
  consuming units carry enough self-contained framing; borderline, not proposed.
- **Ordered field / real closure (algebraic Artin theory of formally real
  fields, Hilbert 17th)** — only the model-theoretic angle exists (`02.02.01`,
  `24.02.01`). Audit itself rated this low-priority Master-only.

---

**Result:** 4 genuine gaps; 40+ COVERED-verified topics.
