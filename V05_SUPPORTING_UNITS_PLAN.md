# v0.5 Supporting Units — Comprehensive Scaffold

The v0.5 apex units (Strands A, C, D shipped by claude; B, E by gpt-codex) name many concepts they don't formally define — "divisor", "Picard group", "root system", "Weyl group", "Hodge decomposition", "theta function", "Verma module", and many more. This document scaffolds the supporting units beneath those apexes, anchoring each on the **best modern textbook** and citing the **original paper(s)** where the concept was conceived. The pedagogical goal is to convey not only the modern formalism but the intelligence of the geniuses who first made these ideas precise.

Read alongside `CURRICULUM_V0_5_PLAN.md` (apex strand plan), `FASTTRACK_BOOKLIST.md` (master booklist), `CONCEPT_CATALOG.md` (registered concepts), `QUALITY_RUBRIC.md` (the validator gate). Every unit follows the Phase 3.2 LM-prose template (three-tier, 27/27 validator).

---

## 1. Source-pairing principle

Each supporting unit cites two reference layers:

- **Original-author tier** — the paper(s) that *introduced* the concept. Where readable in 2026 (Riemann's dissertations, Cartan's 1894 thesis, Hodge's 1941 monograph, Serre's FAC), Master-tier prose mines the original prose for conceptual phrasing. Where the original is opaque (Killing's 1888-90, Grothendieck's EGA), modern translations do the work.
- **Modern-textbook tier** — the canonical contemporary reference, ideally drawn from the Fast Track booklist (Hartshorne, Forster, Donaldson, Griffiths-Harris, Voisin, Fulton-Harris, Humphreys, Bourbaki, Knapp, Mumford). Intermediate-tier prose synthesises these.

Where the Fast Track lists the original-author text directly (e.g., Serre *Complex Semisimple Lie Algebras*, Mumford *Curves and their Jacobians*, Donaldson *Riemann Surfaces*), it serves both layers.

**Genius-prose principle.** Master-tier sections of supporting units quote or paraphrase the original conception. For Riemann's genus, the prose channels Riemann's 1857 *Theorie der Abelschen Functionen*. For Cartan's classification, the prose sits in Cartan's 1894 dissertation and Killing's earlier (often-criticised) papers. The reader leaves understanding *why* these ideas seemed inevitable to the people who first saw them.

---

## 2. Strand A — Algebraic Geometry (22 supporting units)

Apex shipped (4): `04.01.01 Sheaf`, `04.02.01 Scheme`, `04.03.01 Sheaf cohomology`, `04.04.01 Riemann-Roch theorem for curves`.

Chapter expansion: existing 04.01–04.04 plus new 04.05 (Divisors and line bundles), 04.06 (Coherent sheaves), 04.07 (Projective geometry), 04.08 (Differentials and duality), 04.09 (Hodge theory), 04.10 (Moduli).

### 04.01 Sheaves (3 supporting)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.01.02 | Stalk of a sheaf | Leray 1946 (in prison camp); Cartan seminar 1948–54 | Hartshorne II.1; Vakil §2.4; Bredon Ch I |
| 04.01.03 | Sheafification | Cartan-Serre 1948–55 | Hartshorne II.1; Vakil §2.4 |
| 04.01.04 | Direct and inverse image of sheaves | Grothendieck *Tôhoku* 1957 | Hartshorne II.1; Vakil §2.6; Iversen *Cohomology of Sheaves* |

### 04.02 Schemes (3 supporting)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.02.02 | Affine scheme Spec(R) | Grothendieck-Dieudonné EGA I, 1960 | Hartshorne II.2; Vakil §3–5 |
| 04.02.03 | Projective scheme Proj(S) | Grothendieck EGA II, 1961 | Hartshorne II.2, II.5; Vakil §4–5 |
| 04.02.04 | Morphism of schemes | Grothendieck EGA I–IV | Hartshorne II.3; Vakil §6–9 |

### 04.05 Divisors and line bundles (5 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.05.01 | Weil divisor on a scheme | André Weil *Foundations of Algebraic Geometry*, 1946 | Hartshorne II.6; Vakil §14 |
| 04.05.02 | Picard group | Émile Picard 1895 (analytic); Grothendieck (algebraic, 1962) | Hartshorne II.6; Vakil §14; Mumford *Abelian Varieties* |
| 04.05.03 | Line bundle / invertible sheaf | Cartan-Serre FAC 1955 | Hartshorne II.6; Vakil §14 |
| 04.05.04 | Cartier divisor | Pierre Cartier 1957–58 | Hartshorne II.6; Vakil §14 |
| 04.05.05 | Ample and very ample line bundle | Serre 1955; Grothendieck EGA II 1961 | Hartshorne II.7; Vakil §15–16; Lazarsfeld *Positivity* |

### 04.06 Coherent sheaves (2 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.06.01 | Quasi-coherent sheaf | Serre FAC 1955 | Hartshorne II.5; Vakil §13 |
| 04.06.02 | Coherent sheaf | Cartan-Serre coherence theorems 1953; Serre FAC 1955 | Hartshorne II.5; Vakil §13; Cartan seminar exposés |

### 04.07 Projective geometry (2 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.07.01 | Projective space ℙⁿ | Grassmann (1844 nineteenth-century synthetic), Grothendieck (modern functorial) | Hartshorne II.4–5; Vakil §4; Eisenbud-Harris *3264 and All That* |
| 04.07.02 | Blowup | Zariski 1944; Hironaka 1964 (resolution of singularities) | Hartshorne II.7; Vakil §22; Kollár *Lectures on Resolution of Singularities* |

### 04.08 Differentials and duality (3 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.08.01 | Sheaf of differentials Ω¹_{X/Y} | Grothendieck EGA IV, 1967 | Hartshorne II.8; Vakil §21 |
| 04.08.02 | Canonical sheaf ω_X | Implicit in Riemann (1857); formalised by Grothendieck | Hartshorne II.8, III.7; Vakil §21 |
| 04.08.03 | Serre duality | Serre 1955 *Un théorème de dualité* | Hartshorne III.7; Vakil §30; Hartshorne *Residues and Duality* |

### 04.09 Hodge theory (2 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.09.01 | Hodge decomposition (Kähler manifolds) | W. V. D. Hodge 1941 *Theory and Applications of Harmonic Integrals* | Voisin Vol I Ch 6 (Fast Track 3.27); Griffiths-Harris Ch 0; Wells *Differential Analysis on Complex Manifolds* |
| 04.09.02 | Kodaira vanishing theorem | Kunihiko Kodaira 1953 | Voisin Vol I; Griffiths-Harris Ch 1; Lazarsfeld *Positivity* |

### 04.10 Moduli (2 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 04.10.01 | Moduli space of curves M_g | Riemann 1857 (idea, dim = 3g−3); Mumford 1965 (rigorous via GIT) | Harris-Morrison *Moduli of Curves* (Fast Track 3.30); Mumford-Fogarty-Kirwan |
| 04.10.02 | Geometric invariant theory (GIT) | David Mumford *GIT*, 1965 | Mumford-Fogarty-Kirwan *GIT* (Fast Track 3.31); Newstead *Lectures on Introduction to Moduli Problems and Orbit Spaces*; Thomas *Notes on GIT* |

---

## 3. Strand C — Riemann Surfaces & Complex Analysis (18 supporting units)

Apex shipped (3): `06.01.01 Holomorphic function`, `06.03.01 Riemann surface`, `06.04.01 Riemann-Roch for compact Riemann surfaces`.

Chapter expansion: existing 06.01, 06.03, 06.04 plus new 06.02 (Branch points), 06.05 (Divisors and bundles on RS), 06.06 (Jacobians and abelian differentials), 06.07 (Several complex variables).

### 06.01 Complex analysis (5 supporting)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 06.01.02 | Cauchy integral formula | Cauchy 1825 *Mémoire sur les intégrales définies prises entre des limites imaginaires* | Ahlfors *Complex Analysis* §4 (Fast Track 1.04); Stein-Shakarchi Vol II §2 |
| 06.01.03 | Residue theorem | Cauchy 1826 *Mémoire sur les Intégrales définies* | Ahlfors §4–5; Stein-Shakarchi Vol II §3 |
| 06.01.04 | Analytic continuation | Weierstrass 1841– (lectures published 1894) | Ahlfors §8; Conway Ch IX |
| 06.01.05 | Meromorphic function | Riemann 1851 *Grundlagen für eine allgemeine Theorie der Functionen einer veränderlichen complexen Grösse* | Ahlfors §4; Forster §1 |
| 06.01.06 | Riemann mapping theorem | Riemann 1851 (with Dirichlet principle); Koebe 1907 (rigorous proof) | Ahlfors §6; Stein-Shakarchi Vol II §8; Conway Ch VII |

### 06.02 Branch points (1 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 06.02.01 | Branch point and ramification | Riemann 1851 dissertation | Forster §1; Donaldson Ch 1 (Fast Track 1.07); Miranda Ch II |

### 06.03 Riemann surfaces (2 supporting)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 06.03.02 | Genus of a Riemann surface | Riemann 1857 *Theorie der Abelschen Functionen* | Forster §16; Donaldson Ch 3; Farkas-Kra Ch I |
| 06.03.03 | Uniformization theorem | Koebe 1907; Poincaré 1907 | Forster §IV–V; Donaldson Ch 6 (Fast Track 1.07); Ahlfors-Sario *Riemann Surfaces* (Fast Track 1.06) |

### 06.05 Divisors and bundles on Riemann surfaces (3 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 06.05.01 | Divisor on a Riemann surface | Riemann 1857 (implicit); Klein 1882 (explicit) | Forster §16; Miranda Ch IV; Farkas-Kra Ch III |
| 06.05.02 | Holomorphic line bundle on a Riemann surface | Cartan-Serre 1953–55 | Forster §29; Donaldson Ch 8; Griffiths-Harris Ch 2 |
| 06.05.03 | Riemann-Hurwitz formula | Hurwitz 1891 *Über Riemann'sche Flächen mit gegebenen Verzweigungspunkten* | Forster §17; Miranda Ch II; Donaldson Ch 4 |

### 06.06 Jacobians and abelian differentials (5 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 06.06.01 | Holomorphic 1-form / abelian differential | Riemann 1857; Klein 1882 *Über Riemann's Theorie der algebraischen Functionen* | Forster §17; Farkas-Kra Ch II; Springer *Riemann Surfaces* |
| 06.06.02 | Period matrix | Riemann 1857 (introduces period relations) | Farkas-Kra Ch III; Griffiths-Harris Ch 2; Mumford *Curves and their Jacobians* |
| 06.06.03 | Jacobian variety | Jacobi 1829 (elliptic case); Riemann 1857 (general); Weierstrass | Mumford *Curves and their Jacobians*; Farkas-Kra Ch VI; Birkenhake-Lange *Complex Abelian Varieties* |
| 06.06.04 | Abel-Jacobi map | Abel 1826 *Mémoire sur une propriété générale d'une classe très-étendue de fonctions transcendantes*; Jacobi 1832 | Mumford; Griffiths-Harris Ch 2; Forster §21 |
| 06.06.05 | Theta function | Jacobi 1828 *Fundamenta Nova Theoriae Functionum Ellipticarum*; Riemann 1866 (theta with characteristics) | Mumford *Tata Lectures on Theta* I–III; Farkas-Kra Ch VI; Igusa *Theta Functions* |

### 06.07 Several complex variables (2 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 06.07.01 | Holomorphic functions of several variables | Hartogs 1906 *Zur Theorie der analytischen Functionen mehrerer unabhängiger Veränderlicher* | Krantz *Function Theory of Several Complex Variables* (Fast Track 3.23); Gunning-Rossi *Analytic Functions of Several Complex Variables* (Fast Track 3.24) |
| 06.07.02 | Hartogs phenomenon | Hartogs 1906 | Krantz; Hörmander *Introduction to Complex Analysis in Several Variables* |

---

## 4. Strand D — Representation Theory (22 supporting units)

Apex shipped (4): `07.01.01 Group representation`, `07.01.02 Schur's lemma`, `07.03.01 Highest weight representation`, `07.04.01 Cartan-Weyl classification`.

Chapter expansion: existing 07.01, 07.03, 07.04 plus new 07.02 (Character theory), 07.05 (Symmetric groups and Young tableaux), 07.06 (Lie-algebraic structure), 07.07 (Compact Lie groups).

### 07.01 Foundations (6 supporting)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 07.01.03 | Character of a representation | Frobenius 1896 *Über die Charaktere endlicher Gruppen* | Serre §2 (Fast Track 3.15); Fulton-Harris §2 (3.11); James-Liebeck |
| 07.01.04 | Character orthogonality | Frobenius 1896; Schur 1905 (refined) | Serre §2; Fulton-Harris §2 |
| 07.01.05 | Regular representation | Frobenius 1898 | Serre §1–2; Fulton-Harris §2 |
| 07.01.06 | Tensor product of representations | Schur 1901; Weyl 1925 | Fulton-Harris §1.1 |
| 07.01.07 | Induced representation | Frobenius 1898 *Über Relationen zwischen den Charakteren einer Gruppe und denen ihrer Untergruppen* | Serre §7; Fulton-Harris §3 |
| 07.01.08 | Frobenius reciprocity | Frobenius 1898 | Serre §7; Fulton-Harris §3 |

### 07.02 Character theory (1 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 07.02.01 | Maschke's theorem | Heinrich Maschke 1899 | Serre §1 (Fast Track 3.15); Fulton-Harris §1.1; Lang *Algebra* (3.01) |

### 07.05 Symmetric groups and Young tableaux (3 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 07.05.01 | Symmetric group representation | Frobenius 1900; Young 1900–1933 | Fulton-Harris §4–6 (Fast Track 3.11); Sagan *The Symmetric Group* |
| 07.05.02 | Young diagram and tableau | Alfred Young 1900–1933 *On Quantitative Substitutional Analysis* | Fulton *Young Tableaux*; Fulton-Harris §4; Sagan |
| 07.05.03 | Specht module | Wilhelm Specht 1935 | Sagan; James *The Representation Theory of the Symmetric Groups* |

### 07.06 Lie-algebraic structure (9 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 07.06.01 | Lie algebra representation | Cartan 1894 | Humphreys §6 (Fast Track 3.12-equivalent); Fulton-Harris §9 (3.11) |
| 07.06.02 | Universal enveloping algebra | Poincaré 1900; Birkhoff 1937; Witt 1937 (PBW theorem) | Humphreys §17; Dixmier *Enveloping Algebras*; Bourbaki Ch I |
| 07.06.03 | Root system | Wilhelm Killing 1888–90 *Die Zusammensetzung der stetigen endlichen Transformationsgruppen* I–IV; Cartan 1894 | Bourbaki Ch VI (Fast Track 3.12); Humphreys §8–10; Serre *Complex Semisimple Lie Algebras* (3.12) |
| 07.06.04 | Weyl group | Hermann Weyl 1925–26 *Theorie der Darstellung kontinuierlicher halb-einfacher Gruppen* | Bourbaki Ch VI; Humphreys §10; Hiller *Geometry of Coxeter Groups* |
| 07.06.05 | Dynkin diagram | Eugene Dynkin 1947 *Classification of simple Lie algebras* | Humphreys §11; Bourbaki Ch VI |
| 07.06.06 | Verma module | Daya-Nand Verma 1968 (PhD thesis) | Humphreys *Representations of Semisimple Lie Algebras in the BGG Category O*; Dixmier; Knapp Ch V |
| 07.06.07 | Weyl character formula | Weyl 1925–26 (the four landmark papers) | Fulton-Harris §24 (Fast Track 3.11); Humphreys §24; Knapp Ch V |
| 07.06.08 | Weyl dimension formula | Weyl 1925 | Fulton-Harris §24 |
| 07.06.09 | Borel-Weil theorem | Armand Borel 1954 (Bourbaki seminar); Bott 1957 (extended to higher cohomology) | Knapp Ch VI; Tu *Differential Geometry*; Wallach *Real Reductive Groups* I |

### 07.07 Compact Lie groups (3 supporting; new chapter)

| ID | Title | Originator | Modern anchor |
|----|-------|------------|---------------|
| 07.07.01 | Compact Lie group representation | Weyl 1925–26 (the unitarian trick) | Knapp Ch IV (Fast Track 3.11-anchor adjacent); Bröcker-tom Dieck *Representations of Compact Lie Groups*; Sepanski *Compact Lie Groups* |
| 07.07.02 | Peter-Weyl theorem | Peter & Weyl 1927 *Die Vollständigkeit der primitiven Darstellungen einer geschlossenen kontinuierlichen Gruppe* | Knapp Ch IV; Bröcker-tom Dieck; Folland *A Course in Abstract Harmonic Analysis* |
| 07.07.03 | Haar measure | Alfréd Haar 1933 *Der Massbegriff in der Theorie der kontinuierlichen Gruppen* | Knapp Ch VIII; Folland *Real Analysis*; Bourbaki *Intégration* |

---

## 5. Production order (highest leverage first)

The 62 units divide into three priority bands. Each band is internally orderable, but units within a band can be produced in parallel without prerequisite collisions (one session per strand, as for v0.5 apex).

### Band 1 — Foundational dependencies (28 units)

Cited explicitly by ≥2 apex units; should land before any further v0.6 work.

**Strand A — divisors, line bundles, projective geometry (10):**
04.07.01 Projective space; 04.05.01 Weil divisor; 04.05.03 Line bundle; 04.05.04 Cartier divisor; 04.05.02 Picard group; 04.06.01 Quasi-coherent sheaf; 04.06.02 Coherent sheaf; 04.02.02 Affine scheme Spec(R); 04.02.03 Projective scheme Proj(S); 04.05.05 Ample / very ample.

**Strand C — divisors, bundles, key transforms (8):**
06.01.05 Meromorphic function; 06.05.01 Divisor on a Riemann surface; 06.05.02 Holomorphic line bundle on RS; 06.06.01 Holomorphic 1-form; 06.01.02 Cauchy integral formula; 06.01.03 Residue theorem; 06.05.03 Riemann-Hurwitz; 06.02.01 Branch point and ramification.

**Strand D — character theory and Lie-algebraic core (10):**
07.01.03 Character; 07.02.01 Maschke's theorem; 07.01.04 Character orthogonality; 07.01.05 Regular representation; 07.01.06 Tensor product of reps; 07.06.01 Lie algebra rep; 07.06.03 Root system; 07.06.04 Weyl group; 07.06.05 Dynkin diagram; 07.06.07 Weyl character formula.

### Band 2 — Synthesis dependencies (20 units)

Needed for the deeper Master-tier connections; not blocking apex traversability.

**Strand A (7):** 04.01.02 Stalk; 04.01.03 Sheafification; 04.01.04 Direct/inverse image; 04.02.04 Morphism of schemes; 04.07.02 Blowup; 04.08.01 Sheaf of differentials; 04.08.02 Canonical sheaf.

**Strand C (5):** 06.01.04 Analytic continuation; 06.01.06 Riemann mapping theorem; 06.03.02 Genus of a Riemann surface; 06.06.02 Period matrix; 06.03.03 Uniformization theorem.

**Strand D (8):** 07.01.07 Induced representation; 07.01.08 Frobenius reciprocity; 07.06.02 Universal enveloping algebra; 07.06.06 Verma module; 07.06.08 Weyl dimension formula; 07.07.01 Compact Lie group rep; 07.07.02 Peter-Weyl; 07.07.03 Haar measure.

### Band 3 — Advanced topics (14 units)

Apex-adjacent; full breadth of Fast Track parity.

**Strand A (5):** 04.08.03 Serre duality; 04.09.01 Hodge decomposition; 04.09.02 Kodaira vanishing; 04.10.01 Moduli of curves; 04.10.02 GIT.

**Strand C (5):** 06.06.03 Jacobian variety; 06.06.04 Abel-Jacobi; 06.06.05 Theta function; 06.07.01 Several complex variables; 06.07.02 Hartogs phenomenon.

**Strand D (4):** 07.05.01 Symmetric group representation; 07.05.02 Young diagram; 07.05.03 Specht module; 07.06.09 Borel-Weil.

---

## 6. Cross-strand sharing notes

Several units sit at the boundary of two strands. We produce one canonical unit per concept and cross-reference rather than duplicating.

- **Divisor.** `04.05.01 Weil divisor on a scheme` (algebraic) and `06.05.01 Divisor on a Riemann surface` (analytic) are *separate* units: the analytic version is what the Riemann-Roch apex uses, the algebraic version is what the schemes apex uses. GAGA is the bridge, and each unit's Master-tier section names it.
- **Line bundle.** `04.05.03 Line bundle / invertible sheaf` (algebraic, on a scheme) and `06.05.02 Holomorphic line bundle on a Riemann surface` (analytic) — same pattern.
- **Picard group.** Single unit `04.05.02 Picard group` defined in scheme-theoretic terms; Master-tier addresses the analytic case via GAGA. The Riemann-surface apex cites this rather than spawning a duplicate.
- **Period matrix / Hodge decomposition.** `06.06.02 Period matrix` for Riemann surfaces is the genus-1+ rank-1 case of `04.09.01 Hodge decomposition`; both units cross-link, with Hodge being the general Kähler-manifold statement.
- **Jacobian.** `06.06.03 Jacobian variety` is both an analytic complex torus and a smooth projective abelian variety; one unit, two perspectives in Master tier.
- **Lie algebra representation.** `07.06.01` is the Lie-algebra-side of `07.01.01 Group representation`; we shipped the group-side first (apex), and the Lie-algebra-side derives from it via differentiation.
- **Root system, Weyl group, Dynkin diagram.** All three are buried inside the Cartan-Weyl apex (`07.04.01`). Standalone units make them accessible to the symplectic strand (Lie-theoretic moment maps), the algebraic-geometry strand (toric varieties, flag varieties), and physics units.

---

## 7. Validation cadence

Same as v0.5 apex: each unit runs `scripts/validate_unit.py` to 27/27, then `scripts/validate_all.py` to confirm green at the manifest level. Lean stubs follow Mathlib status (`partial` if Mathlib has the concept but not the named lemma; `none` only if Mathlib has nothing related).

The `lean_status: stub` value is **not** validator-acceptable — use `partial` whenever there's any Mathlib infrastructure the unit can build on (which there always is for these units).

---

## 8. Final unit count after v0.5 supporting

- v0.x core: 66 units
- v0.5 apex (claude A/C/D + gpt-codex B): 32 units shipped, total 98 currently
- v0.5 apex (gpt-codex E): ~12 units pending → ~110
- v0.5 supporting (this scaffold): 62 units → ~172
- Adjacent gaps post-supporting (homological algebra, Morse theory, TQFT/cobordism — Fast Track 3.02–3.07): ~20 units pencilled for v0.6

Estimated total at v0.5 close: **~172 units**, achieving roughly 65–70% Fast Track coverage at apex level and ≥80% within Strands A, C, D themselves.

Per Tyler's directive: "**base this on the literal all time best literature** and **convey the intelligence of writing from the original geniuses who conceived the work**" — the original-author column above is load-bearing, not decorative. Master-tier prose for each unit should quote and contextualise the original conception alongside the modern synthesis.
