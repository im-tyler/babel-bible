# Lang — *Basic Mathematics* (Fast Track 0.1) — Audit + Gap Plan

**Book:** Serge Lang, *Basic Mathematics* (Springer, corrected reprint 1988;
originally Addison-Wesley, 1971). ISBN 978-0-387-96787-7.

**Fast Track entry:** 0.1 — the *first* book on the Fast Track booklist,
in the §0 Prerequisites tier. Lang sits before Apostol Vol. 1 (0.2) /
Vol. 2 (0.3) and Arnold ODEs (0.4) as the proof-flavoured precalculus
foundation a Fast Track reader is assumed to control before opening
Apostol. Assigned to **Tier β** in the equivalence campaign (per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §6: "§0 prereqs: Lang Basic
Math, Arnold ODEs"); v0.9 target.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write so that *Basic Mathematics* is covered to the
equivalence threshold (≥95% effective coverage of theorems, key
examples, exercise pack, notation, sequencing, intuition, applications —
see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

The audit surface here is **the largest of any audited book to date** in
absolute new-unit count: section 00-precalc currently contains exactly
one unit (`00.02.05-function`, Strand-A Wave-4 Beginner-tier function
unit). The §0 prerequisite layer is intentionally thin per the apex-first
strategy — the Fast Track campaign builds Tier α first (graduate-level
canonical books) and only fills in the precalculus floor once the apex
strands are stable. Lang is the canonical single source for that floor.
Almost every line of his book maps to a missing Babel Bible unit.

This pass is intentionally not a full P1 audit (which would inventory
every numbered exercise across Lang's ~470 pages). It works from the
book's part-and-chapter structure and Lang's distinctive editorial
choices, produces the gap punch-list, and stops there. A full P1 audit
would sharpen the exercise-pack scope but would not change which units
need writing.

---

## §1 What Lang's book is for

Lang is the canonical *proof-flavoured* precalculus textbook in English.
Where Stewart, Larson, and the standard American precalculus textbooks
present mechanical procedures (factor a quadratic, solve a triangle,
graph a parabola) without justifying them, Lang treats precalculus as a
*foundations* course: arithmetic of integers / rationals / reals stated
as axioms; the distributive law explicitly invoked when expanding
$(a+b)(c+d)$; trigonometric identities derived from the unit-circle
definitions and the angle-addition formulas, not memorised; conic
sections derived from the focus-directrix definitions, not declared.
The book's pedagogical bet is that a student who understands *why*
$(a+b)^2 = a^2 + 2ab + b^2$ — because $\cdot$ distributes over $+$ —
will be ready for Apostol's epsilon-delta calculus without remediation.

The Codex equivalence target inherits Lang's bet: the §0 precalculus
units should justify their procedures, not catalog them. A reader who
has worked through the Babel Bible 00-precalc strand should be able to open
Apostol Vol. 1 Ch. 1 (the integers and the real-number axioms) and
recognise the territory.

The book has **five Parts** plus a brief introduction-to-calculus
appendix. Lang explicitly tells the reader Parts I-IV are required and
Part V is "extra" trigonometry / complex-number material.

- **Part I — Algebra (Ch. 1-5).** Number systems with order axioms
  and absolute value; linear and quadratic equations; binomial
  theorem with Pascal's triangle; rational and real exponentiation;
  logarithms as inverses of exponentials; basic algebraic identities
  and factoring. Distinctive: rational-roots test, quadratic formula
  by completing the square, and AM-GM as worked examples, not
  one-line summaries.
- **Part II — Intuitive Geometry (Ch. 6-8).** Distance, angles, area
  and volume from elementary considerations (Cavalieri's principle
  unnamed; $\pi r^2$ as limit of inscribed polygons). Distinctive: $\pi$
  defined as circumference/diameter ratio with the constancy
  *sketched*; numerical computation deferred to calculus.
- **Part III — Coordinate Geometry (Ch. 9-13).** Cartesian and polar
  coordinates, distance formula, line equations, parabola, circle,
  ellipse and hyperbola from focus definitions, the general conic
  $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$ with the $B^2 - 4AC$
  discriminant. Distinctive: derives conics from their geometric
  loci, then *verifies* the algebra (reverse of the standard
  American order). Polar form of conics $r = \ell/(1 + e\cos\theta)$
  and parametric curves close Part III.
- **Part IV — Miscellaneous (Ch. 14-15).** Functions ($f : A \to B$
  notation, domain, codomain, graph, composition, inverse); induction
  (statement plus worked applications); basic combinatorics ($\binom{n}{k}$
  counting subsets). Lang places induction here because he uses the
  function-as-predicate framing to state it cleanly.
- **Part V — Trigonometry (Ch. 16-19).** Right-triangle trig (six
  ratios, Pythagorean identity, complementary-angle); unit-circle
  trig (radian measure, periodicity, parity); addition formulas
  $\sin(x+y), \cos(x+y)$ from the $\mathbb{R}^2$ rotation matrix
  acting on $(1, 0)$; double / half-angle, sum-to-product,
  product-to-sum identities; inverse trig with domain restrictions;
  brief complex numbers and Euler $e^{i\theta} = \cos\theta + i\sin\theta$
  (stated, full proof deferred). Closes with conic parametrisations
  and line-conic intersection.
- **Appendix block.** Short "What is calculus about?" chapter
  (informal limits, derivative as instantaneous slope), a proof-technique
  chapter, a notation index. Pointer to Apostol or Lang's own *A
  First Course in Calculus* for the rigorous calculus.

**Distinctive Lang choices** (in roughly the order he develops them):

1. **Field axioms first.** Ch. 1 states the field axioms (closure,
   associativity, commutativity, identity, inverse, distributive) as
   the rules for $\mathbb{Q}$ and $\mathbb{R}$ before any specific
   calculation. This makes Lang a *foundations* book rather than a
   *procedures* book. Babel Bible's `01.01.01-field` covers the same axioms
   for arbitrary fields; a precalc-tier presentation specialising to
   $\mathbb{R}$ does not exist.
2. **Order axioms and absolute value as a chapter.** Ch. 2 develops
   the ordering on $\mathbb{R}$, $|x|$, the triangle inequality $|x+y|
   \leq |x| + |y|$, and the distance interpretation — the foundation
   for the eventual epsilon-delta limit in Apostol. No Babel Bible unit
   covers this.
3. **Quadratic formula proved by completing the square.** Ch. 3
   derives $x = (-b \pm \sqrt{b^2 - 4ac})/(2a)$ from
   $ax^2 + bx + c = a(x + b/(2a))^2 - (b^2 - 4ac)/(4a)$; the
   discriminant then *classifies* the roots.
4. **Inequalities as their own chapter.** Ch. 4 develops sign-chart
   solutions for linear and quadratic inequalities — the foundation
   of epsilon-delta technique that American precalc textbooks skip.
5. **Exponentials extended rationals → reals via continuity.** Ch. 5
   defines $a^{p/q} = (a^{1/q})^p$ for rational exponents, extends to
   $\mathbb{R}$ by continuity (stated, proof deferred), then defines
   logarithms as inverses of exponentials. Codex has no foundational
   real-exp / log unit — existing log/exp content lives in the
   calculus / functional-analysis strand and assumes calculus.
6. **Conic sections derived from focus definitions.** Ch. 11 derives
   the standard equations from the locus definitions, then *verifies*
   the algebra matches — reverse of the standard American order. This
   makes conics conceptually load-bearing for later projective and
   algebraic geometry.
7. **Trigonometric identities derived from rotation.** Ch. 17 obtains
   the addition formulas by writing the rotation matrix $R_\theta$ and
   using $R_{x+y} = R_x R_y$ to read off $\cos(x+y)$ and $\sin(x+y)$ —
   identities feel inevitable, not memorised. Codex has no unit on
   trigonometric identities.
8. **Polar coordinates in Part III, not Part V.** Lang places polar
   coords with coordinate geometry, not trigonometry, because the
   conversion $x = r\cos\theta$, $y = r\sin\theta$ depends only on
   the right-triangle definitions already in Ch. 6. Codex has no
   precalc unit on polar / parametric coordinates.
9. **Function notation in Ch. 14, after coordinate geometry.** Lang
   delays $f : A \to B$ until graphs in the plane are available.
   Babel Bible's existing `00.02.05-function` matches this — the chapter
   slug `02-set-and-function` is already reserved.
10. **Induction by worked examples first.** Ch. 15 walks through five
    or six induction proofs (sum of first $n$ integers, $2^n > n$,
    binomial theorem) before stating the general principle.
11. **Brief, calibrated exercise sets.** ~20-40 per chapter; the
    load-bearing ones ask for proofs, routine ones ask for
    computations. The exercise layer is part of the curriculum.

---

## §2 Coverage table (Babel Bible vs Lang)

Cross-referenced against the current 00-precalc chapter (1 unit) and the
220-unit total corpus. ✓ = covered, △ = partial / different framing or
depth, ✗ = not covered. **Tier-α-overlap** flags items where the gap
overlaps with a graduate-tier Babel Bible unit at higher abstraction (e.g.
field axioms in `01.01.01`); the precalc unit would be a tier-restricted
re-presentation, not a duplicate.

### Part I — Algebra (Chapters 1-5)

| Lang topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Field axioms for $\mathbb{Q}$, $\mathbb{R}$ (closure, associativity, commutativity, identity, inverse, distributive) | `01.01.01` field | △ | **Tier-α-overlap.** Babel Bible's field unit covers arbitrary fields at the algebra-strand depth. A precalc-tier unit specialising to $\mathbb{R}$, with worked examples of how each axiom is used in elementary algebra, does not exist. |
| Integers, rationals, reals (number-system construction, density of $\mathbb{Q}$ in $\mathbb{R}$, irrationality of $\sqrt{2}$) | — | ✗ | **Gap (high priority).** Lang Ch. 1. Codex assumes $\mathbb{R}$ throughout; no foundational construction. |
| Order axioms, absolute value, triangle inequality $|x+y| \leq |x| + |y|$ | — | ✗ | **Gap (high priority).** Lang Ch. 2. Foundation for limit machinery; nothing in Babel Bible. |
| Linear equations $ax + b = c$ in one variable; systems of two linear equations in two variables | — | ✗ | **Gap.** Lang Ch. 3. No Babel Bible unit. |
| Quadratic equations; quadratic formula proved by completing the square; discriminant classification | — | ✗ | **Gap (high priority).** Lang Ch. 3. Load-bearing for everything downstream. |
| Inequalities: linear, quadratic, sign-chart method | — | ✗ | **Gap (high priority).** Lang Ch. 4. |
| Distributive law / FOIL / $(a+b)^2$, $(a+b)(a-b)$, sum/difference of cubes | — | ✗ | **Gap.** Lang Ch. 1-3. |
| Binomial theorem, Pascal's triangle, $\binom{n}{k}$ | — | ✗ | **Gap.** Lang Ch. 3 + Ch. 15. Codex has no combinatorics unit at all. |
| Integer / rational / real exponents; $a^{x+y} = a^x a^y$, $(a^x)^y = a^{xy}$ | — | ✗ | **Gap (high priority).** Lang Ch. 5. |
| Logarithms as inverses of exponentials; change-of-base formula | — | ✗ | **Gap (high priority).** Lang Ch. 5. |
| Rational expressions, partial fractions (introductory) | — | ✗ | **Gap.** Lang Ch. 3 (in passing). |

### Part II — Intuitive Geometry (Chapters 6-8)

| Lang topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Distance, angle measure (degrees and radians), parallel / perpendicular lines | — | ✗ | **Gap.** Lang Ch. 6. |
| Area formulas (rectangle, triangle, circle, polygon by triangulation); $\pi r^2$ as limit | — | ✗ | **Gap.** Lang Ch. 7. |
| Volume formulas (parallelepiped, pyramid, cone, sphere); Cavalieri's principle (informal) | — | ✗ | **Gap.** Lang Ch. 8. |
| Pythagorean theorem (proof by area decomposition) | — | ✗ | **Gap.** Lang Ch. 6. Foundational — used everywhere downstream. |
| $\pi$ as ratio of circumference to diameter; constancy across circles | — | ✗ | **Gap.** Lang Ch. 7. |

### Part III — Coordinate Geometry (Chapters 9-13)

| Lang topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Cartesian coordinates in $\mathbb{R}^2$; distance formula | — | ✗ | **Gap (high priority).** Lang Ch. 9. |
| Lines: slope, point-slope form $y - y_0 = m(x - x_0)$, slope-intercept, two-point, parallel / perpendicular conditions | — | ✗ | **Gap (high priority).** Lang Ch. 9. |
| Parabola $y = ax^2 + bx + c$; standard form $y - k = a(x-h)^2$; vertex, axis | — | ✗ | **Gap.** Lang Ch. 10. |
| Circle $(x-h)^2 + (y-k)^2 = r^2$; centre-radius; intersection with lines | — | ✗ | **Gap.** Lang Ch. 11. |
| Ellipse from focus-sum definition; standard form $x^2/a^2 + y^2/b^2 = 1$; eccentricity | — | ✗ | **Gap.** Lang Ch. 11. |
| Hyperbola from focus-difference definition; standard form $x^2/a^2 - y^2/b^2 = 1$; asymptotes | — | ✗ | **Gap.** Lang Ch. 11. |
| General conic $Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0$; discriminant $B^2 - 4AC$ classification | — | ✗ | **Gap.** Lang Ch. 12. |
| Polar coordinates $(r, \theta)$; conversion $x = r\cos\theta$, $y = r\sin\theta$ | — | ✗ | **Gap (high priority).** Lang Ch. 13. Used in residue theorem, Fourier analysis, complex analysis units downstream. |
| Polar form of conics $r = \ell/(1 + e\cos\theta)$ | — | ✗ | **Gap.** Lang Ch. 13. |
| Parametric form of curves (line, circle, ellipse, cycloid) | — | ✗ | **Gap.** Lang Ch. 13. |

### Part IV — Miscellaneous (Chapters 14-15)

| Lang topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Function $f : A \to B$, domain, codomain, range, graph | `00.02.05` function | ✓ | The single shipped 00-precalc unit. Beginner-tier framing matches Lang Ch. 14. |
| Composition $f \circ g$, identity function, inverse function | `00.02.05` (mention) | △ | Mentioned in the function unit's Master section; not its own unit. Lang Ch. 14 develops composition as a chapter-level topic. |
| Mathematical induction principle; induction proofs (sum formulas, $2^n > n$, binomial theorem) | — | ✗ | **Gap (high priority).** Lang Ch. 15. Foundation for every later proof in calculus / algebra. |
| Combinatorics: $n!$, $\binom{n}{k}$, counting subsets / permutations | — | ✗ | **Gap.** Lang Ch. 15. |

### Part V — Trigonometry (Chapters 16-19)

| Lang topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Right-triangle trigonometry: $\sin$, $\cos$, $\tan$, $\csc$, $\sec$, $\cot$; SOH-CAH-TOA; complementary-angle | — | ✗ | **Gap (high priority).** Lang Ch. 16. |
| Pythagorean identity $\sin^2\theta + \cos^2\theta = 1$ from right-triangle | — | ✗ | **Gap.** Lang Ch. 16. |
| Unit-circle definitions of $\sin$, $\cos$ for arbitrary $\theta$; periodicity, parity ($\sin(-\theta) = -\sin\theta$, $\cos(-\theta) = \cos\theta$) | — | ✗ | **Gap (high priority).** Lang Ch. 17. |
| Radian measure; arc-length $s = r\theta$ | — | ✗ | **Gap.** Lang Ch. 17. |
| Addition formulas: $\sin(x+y) = \sin x \cos y + \cos x \sin y$, $\cos(x+y) = \cos x \cos y - \sin x \sin y$; rotation-matrix derivation | — | ✗ | **Gap (high priority).** Lang Ch. 17. |
| Double-angle, half-angle, sum-to-product, product-to-sum identities | — | ✗ | **Gap.** Lang Ch. 17. |
| Inverse trigonometric functions $\arcsin$, $\arccos$, $\arctan$ with domain restrictions | — | ✗ | **Gap.** Lang Ch. 18. |
| Law of sines, law of cosines | — | ✗ | **Gap.** Lang Ch. 18. |
| Complex numbers, $i^2 = -1$, polar form $z = r(\cos\theta + i\sin\theta)$, Euler identity $e^{i\theta} = \cos\theta + i\sin\theta$ | `06.01.01` holomorphic-function (uses) | △ | **Tier-α-overlap.** Codex assumes complex numbers in the complex-analysis strand. A precalc-tier introductory unit on complex arithmetic and polar form does not exist. |
| Parametrisation of conics via trigonometry; line-conic intersection | — | ✗ | **Gap.** Lang Ch. 19. |

### Appendix block — Functions and limits (introductory)

| Lang topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Informal limit / continuity / instantaneous-slope motivation | — | ✗ | **Gap (low priority).** Lang Appendix. Sketch-level; Apostol Vol. 1 does this rigorously. Could be a survey-tier pointer unit; not load-bearing. |

### Aggregate coverage estimate

**Theorem layer**: ~3% of Lang's named results (he is sparing with named
theorems — quadratic formula, binomial theorem, Pythagoras, addition
formulas, induction principle, change-of-base, law of sines / cosines,
discriminant classification — call it ~12 named results) map to Codex
units. After the priority-1 punch-list below, this rises to ~80%; after
priority-1+2 to ~95%.

**Exercise layer**: ~0% of Lang's ~600+ exercises have a Codex equivalent.
Only the function unit (`00.02.05`) ships exercises; all other Lang
chapters are absent. Closing this requires per-chapter exercise packs,
deferred to a dedicated `00.*.E1` exercise-pack pass.

**Worked-example layer**: ~5% covered. Lang's worked examples
(quadratic-formula derivation, completing the square, binomial expansion,
addition-formula derivation, conic-equation-from-foci derivation, $\sqrt{2}$
irrationality) are absent.

**Notation layer**: ~50% aligned. Lang writes $f : A \to B$ for functions
(matches Codex), $\mathbb{R}, \mathbb{Q}, \mathbb{Z}, \mathbb{N}$ for
number systems (matches), $|x|$ for absolute value (matches), $\binom{n}{k}$
for binomial coefficients (matches). His angle convention is *radian by
default* in trig identities, *degrees as alternate* in geometric
applications — Babel Bible's convention here is undeclared because there are
no precalc trig units. A `notation/lang-basic-mathematics.md` crosswalk
becomes useful once the trig units land.

**Sequencing layer**: ~10%. Lang's prerequisite chain (algebra → geometry →
coordinate geometry → functions → trigonometry → calculus pointer) is
the canonical precalc DAG. Babel Bible's 00-precalc DAG is essentially empty.

**Intuition layer**: ~5%. Lang's distinctive intuition (axioms-first
framing, geometry-from-axioms, identities-from-rotation) is entirely
absent from Babel Bible.

**Application layer**: ~30%. Lang's applications (the geometric series
sum via algebra, the $\pi r^2$ via inscribed polygons, the conic
sections from focus loci) implicitly underpin many Codex tier-α units
(geometric series in functional-analysis, $\pi$ in residue theorem,
ellipse / hyperbola in symplectic / Hamiltonian-mechanics units), but
the *precalc-tier* presentation that Lang gives is not in Babel Bible.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

The 00-precalc section currently has one unit; this audit's punch-list
is dominated by `[NEW]` items. New chapter slugs introduced below (the
existing `02-set-and-function` is reserved for `00.02.05-function`):

`01-algebra-numbers` (Ch. 1-2), `03-algebra-equations` (Ch. 3),
`04-inequalities` (Ch. 4), `05-exp-log` (Ch. 5), `06-trig-right` (Ch. 16),
`07-trig-unit-circle` (Ch. 17), `08-trig-identities` (Ch. 17 cont.),
`09-coordinate-geom` (Ch. 9-10), `10-conics` (Ch. 11-12),
`11-polar-parametric` (Ch. 13), `12-induction-combinatorics` (Ch. 15),
`13-geometry` (Ch. 6-8), `14-functions-limits` (Appendix, optional).

### Priority 1 — load-bearing precalc foundations

These are the units a Fast Track reader must control before opening
Apostol. Without them, every later Babel Bible unit that says "for $x \in
\mathbb{R}$" has an unmoored prerequisite. **Highest priority.**

1. **`00.01.01` Real numbers, integers, rationals.** [NEW] Lang Ch. 1
   anchor. Three-tier; ~1500 words. Master section: the field axioms
   and order axioms for $\mathbb{R}$, density of $\mathbb{Q}$ in
   $\mathbb{R}$, irrationality of $\sqrt{2}$ proved. Pythagoras-style
   contradiction proof in the Beginner / Intermediate tiers.
   Originator citation: Dedekind 1872 *Stetigkeit und irrationale
   Zahlen*.

2. **`00.01.02` Absolute value and the triangle inequality.** [NEW]
   Lang Ch. 2 anchor. Three-tier; ~1200 words. Master section: $|x|$
   as distance, $|x+y| \leq |x| + |y|$ proved by case analysis,
   $|xy| = |x||y|$, the inequality $|x| < a \iff -a < x < a$. Bridge
   to metric-space machinery in `02.01.05`.

3. **`00.03.01` Linear equations and the line.** [NEW] Lang Ch. 3
   anchor. Three-tier; ~1200 words. Master: $ax + b = 0$ with $a \neq
   0$ has unique solution $x = -b/a$; systems of two linear equations
   in two unknowns; the matrix-form preview $A\mathbf{x} = \mathbf{b}$
   pointing forward to `01.01.03`.

4. **`00.03.02` Quadratic equations and the quadratic formula.** [NEW]
   Lang Ch. 3 anchor. Three-tier; ~1500 words. Master: completing the
   square, derivation of $x = (-b \pm \sqrt{b^2 - 4ac})/(2a)$, the
   discriminant classification (real distinct / real repeated /
   complex conjugate). Originator citation: al-Khwārizmī ~820
   *al-jabr*; Cardano 1545 *Ars Magna* for the cubic-bumping context.
   **Load-bearing for every conic-sections unit downstream.**

5. **`00.04.01` Inequalities (linear and quadratic).** [NEW] Lang Ch. 4
   anchor. Three-tier; ~1200 words. Master: sign-chart method;
   $x^2 < a^2 \iff |x| < a$; quadratic inequalities by factoring;
   AM-GM inequality $\sqrt{ab} \leq (a+b)/2$ proved as worked example.
   **Foundation for epsilon-delta technique in `02.01.*`.**

6. **`00.05.01` Real exponents and exponential function.** [NEW] Lang
   Ch. 5 anchor. Three-tier; ~1500 words. Master: $a^{p/q}$ defined
   for $a > 0$, $p/q \in \mathbb{Q}$; extension to $\mathbb{R}$ by
   continuity (stated, proof deferred); the laws $a^{x+y} = a^x a^y$,
   $(a^x)^y = a^{xy}$. Worked examples: $2^{1/2}$ via the irrationality
   of $\sqrt{2}$, $a^0 = 1$ from the law $a^x \cdot a^{-x} = 1$.

7. **`00.05.02` Logarithms as inverses of exponentials.** [NEW] Lang
   Ch. 5 anchor. Three-tier; ~1200 words. Master: $\log_a$ as inverse
   of $a^x$; the laws $\log_a(xy) = \log_a x + \log_a y$,
   $\log_a(x^p) = p \log_a x$, $\log_b x = \log_a x / \log_a b$
   (change-of-base). Originator citation: Napier 1614 *Mirifici
   logarithmorum canonis descriptio*.

8. **`00.09.01` Cartesian coordinates and distance in the plane.** [NEW]
   Lang Ch. 9 anchor. Three-tier; ~1000 words. Master: distance
   formula from Pythagoras; midpoint formula; the line equations
   (point-slope, slope-intercept, two-point); parallel-perpendicular
   conditions. Originator citation: Descartes 1637 *La Géométrie*.

9. **`00.06.01` Right-triangle trigonometry.** [NEW] Lang Ch. 16
   anchor. Three-tier; ~1500 words. Master: the six ratios
   ($\sin$, $\cos$, $\tan$, $\csc$, $\sec$, $\cot$); the Pythagorean
   identity from the right-triangle hypotenuse; complementary-angle
   relations; SOH-CAH-TOA mnemonic. Worked examples: 30-60-90 and
   45-45-90 special triangles tabulated.

10. **`00.07.01` Unit-circle trigonometry.** [NEW] Lang Ch. 17 anchor.
    Three-tier; ~1500 words. Master: extension of $\sin$ and $\cos$
    from acute angles to all of $\mathbb{R}$ via the unit circle;
    radian measure; arc-length $s = r\theta$; periodicity ($\sin(\theta
    + 2\pi) = \sin\theta$); parity ($\sin$ odd, $\cos$ even). Worked
    example: $\sin(\pi/6) = 1/2$, $\cos(\pi/6) = \sqrt{3}/2$ via the
    30-60-90 triangle inside the unit circle.

11. **`00.08.01` Trigonometric identities (addition formulas).** [NEW]
    Lang Ch. 17 anchor. Three-tier; ~1500 words. Master: derivation of
    $\sin(x+y)$ and $\cos(x+y)$ from the rotation matrix in
    $\mathbb{R}^2$; double-angle ($\sin 2x = 2\sin x \cos x$,
    $\cos 2x = \cos^2 x - \sin^2 x$); half-angle, sum-to-product,
    product-to-sum derived as corollaries. Worked example: derive
    $\cos 3x$ from the addition formulas.

12. **`00.11.01` Polar coordinates and parametric curves.** [NEW] Lang
    Ch. 13 anchor. Three-tier; ~1500 words. Master: $(r, \theta)$
    representation; conversion $x = r\cos\theta$, $y = r\sin\theta$;
    polar form of conics $r = \ell/(1 + e\cos\theta)$; parametric form
    of line, circle, ellipse, cycloid. **Load-bearing for residue
    theorem, Fourier analysis, classical-mechanics units downstream.**

### Priority 2 — Lang-distinctive completion

These complete the Lang content but are slightly less load-bearing than
priority 1 (their downstream Codex consumers can defer them or work
around them).

13. **`00.10.01` Conic sections (parabola, ellipse, hyperbola).** [NEW]
    Lang Ch. 10-12 anchor. Three-tier; ~2000 words. Master: derivation
    of standard equations from the focus / focus-directrix definitions;
    eccentricity $e$; the general conic $Ax^2 + Bxy + Cy^2 + Dx + Ey +
    F = 0$ and the discriminant $B^2 - 4AC$ classification. Originator
    citations: Apollonius *Conics* ~200 BC; Kepler 1609 *Astronomia
    Nova* for the planetary-orbits motivation. **Bridge to projective
    geometry in `04.07.*`.**

14. **`00.06.02` Inverse trigonometric functions.** [NEW] Lang Ch. 18
    anchor. Three-tier; ~1200 words. Master: $\arcsin$, $\arccos$,
    $\arctan$ with their canonical domain restrictions; the
    derivative formulas (stated, deferred to calculus); the
    composition $\sin(\arcsin x) = x$ on the restricted domain.
    Worked example: solve $\sin\theta = 1/2$ for $\theta \in [0,
    2\pi)$.

15. **`00.06.03` Law of sines and law of cosines.** [NEW] Lang Ch. 18
    anchor. Three-tier; ~1000 words. Master: derivation from area
    formulas; SAS / SSS / ASA / SSA cases of triangle resolution.

16. **`00.12.01` Mathematical induction.** [NEW] Lang Ch. 15 anchor.
    Three-tier; ~1500 words. Master: the induction principle
    (statement: $P(1) \wedge \forall n.\, (P(n) \Rightarrow P(n+1))
    \Rightarrow \forall n.\, P(n)$); strong induction; well-ordering;
    worked applications (sum of first $n$ integers, sum of first $n$
    squares, $2^n > n$ for $n \geq 1$, AM-GM inequality, Bernoulli
    inequality, fundamental theorem of arithmetic sketch).
    Originator citation: Pascal 1654 *Traité du triangle arithmétique*.

17. **`00.12.02` Binomial theorem and Pascal's triangle.** [NEW] Lang
    Ch. 3 + Ch. 15 anchor. Three-tier; ~1200 words. Master: $(a+b)^n =
    \sum_{k=0}^n \binom{n}{k} a^{n-k} b^k$ proved by induction;
    Pascal's recurrence $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$;
    counting interpretation. Originator citation: Pascal 1654; Newton
    1665 (general binomial).

18. **Deepening of `00.02.05-function`.** [DEEPEN] Add a chapter-level
    Master section on **composition and inverse functions** matching
    Lang Ch. 14. The current unit covers the $f : A \to B$ definition;
    the composition $f \circ g$ and the inverse $f^{-1}$ on bijections
    are mentioned in passing but not developed. Add: composition is
    associative, identity is a two-sided unit, $f$ has an inverse iff
    bijective, $(f \circ g)^{-1} = g^{-1} \circ f^{-1}$. ~600-word
    addition. **Cite Lang Ch. 14 in `tier_anchors` and references.**

### Priority 3 — Lang-distinctive completion (less load-bearing)

19. **`00.01.03` Polynomials and rational expressions.** [NEW] Lang
    Ch. 3 anchor. Three-tier; ~1200 words. Master: polynomial
    arithmetic; division algorithm $f(x) = q(x) g(x) + r(x)$ with
    $\deg r < \deg g$; rational expressions $f(x)/g(x)$; partial
    fractions (introductory: distinct linear factors only). Bridge
    to `01.01.*` for the algebra-strand polynomial-ring depth.

20. **`00.13.01` Plane geometry (distance, area, $\pi$).** [NEW] Lang
    Ch. 6-7 anchor. Three-tier; ~1500 words. Master: Pythagorean
    theorem proved by area decomposition (the standard
    inside-and-outside-the-square proof); area formulas for triangle,
    parallelogram, circle (as limit of inscribed polygons);
    definition of $\pi$ as circumference/diameter ratio.
    Originator citations: Euclid *Elements* Books I, IV, XII;
    Archimedes *Measurement of a Circle*.

21. **`00.13.02` Solid geometry (volume).** [NEW] Lang Ch. 8 anchor.
    Three-tier; ~1200 words. Master: parallelepiped, prism, pyramid,
    cone, sphere volumes via Cavalieri's principle (informal);
    surface-area formulas. Originator citations: Euclid *Elements*
    Book XII; Archimedes *On the Sphere and Cylinder*.

22. **`00.05.03` Complex numbers (introductory).** [NEW] Lang Ch. 19
    anchor. Three-tier; ~1500 words. Master: $\mathbb{C}$ as ordered
    pairs $(a, b)$ with $i^2 = -1$; modulus, argument, polar form
    $z = r(\cos\theta + i\sin\theta)$; multiplication geometrically
    as rotation-and-scaling; Euler identity $e^{i\theta} = \cos\theta
    + i\sin\theta$ stated; de Moivre's formula. Originator citations:
    Bombelli 1572; Wessel 1797; Argand 1806; Hamilton 1837 for the
    $(a, b)$-formalism. **Load-bearing for `06.01.*` complex-analysis
    strand.**

23. **`00.11.02` Conic-section parametrisations and intersections.**
    [NEW] Lang Ch. 19 anchor. Three-tier; ~1000 words. Master:
    parametric form of conics via trigonometry (ellipse: $x = a\cos
    t$, $y = b\sin t$; hyperbola: $x = a\sec t$, $y = b\tan t$);
    line-conic intersection by substitution; tangent line at a point.

### Priority 4 — Bibliography-only / survey items

24. **`[ENRICH]` `01.01.01-field`.** Add Lang Ch. 1 to
    `tier_anchors.beginner` and `references` as the precalc-tier
    presentation of the field axioms. Cross-link from the Beginner
    section: "for the same axioms applied to $\mathbb{R}$ specifically,
    see `00.01.01`."

25. **`[ENRICH]` `02.01.05-metric-space`.** Add Lang Ch. 2 to
    `tier_anchors.beginner` and `references` as the precalc-tier
    introduction to absolute value as distance on $\mathbb{R}$. The
    triangle inequality on the line is the single-source ancestor of
    the metric-space triangle inequality.

26. **`[ENRICH]` `06.01.01-holomorphic-function`.** Add Lang Ch. 19 to
    `tier_anchors.beginner` and `references` as the precalc-tier
    introduction to complex arithmetic and polar form. Cross-link to
    new `00.05.03` if produced.

27. **`[ENRICH]` `00.02.05-function`.** Add Lang Ch. 14 to
    `tier_anchors.beginner` (currently lists "Strogatz-style
    input-output machine" only). The function unit's existing prose
    should cite Lang as the canonical precalc anchor — currently it
    cites Halmos and Bourbaki at the Master tier but no precalc
    anchor at the Beginner tier.

28. **`[NEW]` `00.14.01` Functions and limits (informal preview).**
    Optional pointer unit; Lang Appendix anchor. Master-only; ~700
    words. Informal limit, derivative as instantaneous slope, area as
    integral — pointer to Apostol Vol. 1. Defer unless the §0 strand
    expands or a "what is calculus" survey unit is requested.

29. **Notation crosswalk (`notation/lang-basic-mathematics.md`).** Worth
    producing once priority-1 units land. Records: $\mathbb{R}, \mathbb{Q},
    \mathbb{Z}, \mathbb{N}$ usage; $|x|$ for absolute value; $\binom{n}{k}$
    for binomials; radian as default angle unit in Part V; degree as
    alternate in Part II. Defer until trig units (priority-1 items 9-11)
    are integrated.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Lang-equivalence batch** = priority 1 only (items 1-12): 12
new units across 9 chapter slugs. Realistic production estimate
(mirroring earlier batches):

- ~2.5 hours per typical precalc unit (research + draft + validate at
  27/27 + Lean stub + Bridge / Synthesis prose). Precalc units are
  *shorter* than tier-α units (~1200-1500 words vs 1800-2500), but
  the Beginner-tier prose density matters more.
- Priority 1 totals: 12 × 2.5 h = ~30 hours.
- Priority 1+2 totals: 12 + 6 new units × 2.5 h + 1 deepening × 1.5 h
  = ~46.5 hours.
- Priority 1+2+3 totals: 12 + 6 + 5 × 2.5 h + 1.5 h = ~59 hours.

At 4-6 production agents in parallel, priority-1 fits in a 2-3 day
window with one integration agent stitching outputs.

**Batch structure.**

- **Batch A (algebra core, items 1-7, ~17.5 h):** opens
  `01-algebra-numbers`, `03-algebra-equations`, `04-inequalities`,
  `05-exp-log`. Item 7 depends on 6; item 4 depends on 1; otherwise
  parallel. 5-6 agents, one per chapter slug.
- **Batch B (trigonometry, items 9-11, ~7.5 h):** opens `06-trig-right`,
  `07-trig-unit-circle`, `08-trig-identities`. Items 10, 11 depend on
  9; serial within batch.
- **Batch C (coordinate geometry, items 8 + 12, ~5 h):** opens
  `09-coordinate-geom`, `11-polar-parametric`. Item 12 depends on
  Batch B.
- **Batch D (priority 2, items 13-18, ~13 h):** conics, inverse trig,
  law of sines/cosines, induction, binomial, function-deepening.
  Runs after A-C land.
- **Batch E (priority 3, items 19-23, ~12 h):** polynomials, plane and
  solid geometry, complex numbers, conic parametrisations. Optional.

**Originator-prose targets** (priority-1 unit Master sections cite
originator + Lang). Most ancient-arc topics in Lang have multi-author
provenance; the canonical first-hits are:

- Real numbers (1): Dedekind 1872, Cantor 1872. Quadratic formula (4):
  al-Khwārizmī ~820; Cardano 1545 (cubic context). Logarithms (7):
  Napier 1614; Euler 1748 *Introductio* for the inverse-exp formulation.
- Cartesian coordinates (8): Descartes 1637 *La Géométrie*; Fermat 1636.
- Right-triangle trig (9): Hipparchus ~150 BC; Ptolemy *Almagest*.
  Unit-circle trig (10): Euler 1748 (modern real-variable form).
- Addition formulas (11): Ptolemy (chord form); Vieta 1591 (modern
  algebraic form). Polar coordinates (12): Newton 1671 manuscript;
  Bernoulli 1691; Euler 1748.

The full citation list is recorded per-unit in `tier_anchors` and
`references` at production time.

**Notation crosswalk.** Lang's notation is the *canonical American
precalc* notation: $f : A \to B$ for functions; $f(x)$ for values;
$\mathbb{R}, \mathbb{Q}, \mathbb{Z}, \mathbb{N}$ for number systems
($\mathbb{N}$ as positive integers, not including 0 — Lang's
convention, matching the Bourbaki "natural numbers from 1" tradition,
not the modern set-theoretic "natural numbers from 0" tradition); $|x|$
absolute value; $[a, b]$ closed interval; $(a, b)$ open interval (Lang
uses parentheses, not the European $]a, b[$); $\binom{n}{k}$ binomial
coefficient; $\sin, \cos, \tan, \cot, \sec, \csc$ trig functions; radian
as default in Part V. The $\mathbb{N}$-from-1 convention is the only
notation point that needs flagging in the crosswalk file —
Codex-elsewhere uses $\mathbb{N} = \{0, 1, 2, \ldots\}$.

**DAG edges to add.** New prerequisites for the priority-1+2 batch:

- `00.01.01` (real numbers) ← {} (root of 00-precalc)
- `00.01.02` (absolute value) ← `00.01.01`
- `00.03.01` (linear equations) ← `00.01.01`
- `00.03.02` (quadratic formula) ← {`00.01.01`, `00.03.01`}
- `00.04.01` (inequalities) ← {`00.01.02`, `00.03.02`}
- `00.05.01` (real exponents) ← `00.01.01`
- `00.05.02` (logarithms) ← `00.05.01`
- `00.06.01` (right-triangle trig) ← {`00.01.01`, `00.13.01`}
- `00.07.01` (unit-circle trig) ← `00.06.01`
- `00.08.01` (trig identities) ← `00.07.01`
- `00.09.01` (Cartesian coordinates) ← {`00.01.01`, `00.13.01`}
- `00.11.01` (polar / parametric) ← {`00.07.01`, `00.09.01`}
- `00.10.01` (conic sections) ← {`00.09.01`, `00.03.02`}
- `00.12.01` (induction) ← `00.01.01`
- `00.12.02` (binomial theorem) ← `00.12.01`
- `00.02.05` (function — existing) — add explicit link from
  `00.01.01` as prerequisite

Successor edges from §0 to §1+:

- `00.01.01` → `01.01.01-field` (Babel Bible's algebra-strand field unit)
- `00.04.01` → `02.01.05-metric-space` (the triangle-inequality
  ancestor)
- `00.05.03` (complex numbers, priority-3) → `06.01.01-holomorphic-function`
- `00.07.01` → tier-α units that assume unit-circle trig (e.g.
  `06.01.03-residue-theorem`)
- `00.11.01` → `06.01.03-residue-theorem` (polar form for contour
  integrals)

---

## §5 What this plan does NOT cover

- Line-number-level inventory of every named result and exercise
  across Lang's ~470 pages. Defer unless priority-1+2 expands.
- Lang's ~600+ exercises. The exercise layer is ~0% covered; closing
  it requires per-chapter exercise packs (`00.01.E1`, `00.03.E1`,
  etc.). Dedicated precalc-exercise-pack pass is a P3 follow-up.
- **Apostol Vol. 1 overlap.** Apostol Ch. 1 re-covers Lang's Part I
  (real numbers, induction) at calculus depth. The Lang priority-1
  units serve as the *precalc-tier prerequisite* layer; Apostol's
  per-book plan should cite Lang's units in `prerequisites` rather
  than re-derive the real-number construction.
- **Stewart / Larson-style applied word problems** (loans, exponential
  growth in epidemiology, navigation with law of cosines). Codex
  follows Lang's proof-foundations framing; applied-problem density
  is deprioritised.
- **Special-angle memorisation tables** ($\sin 30° = 1/2$, etc.) are
  derived in items 9-10 rather than catalogued. A separate cheat-sheet
  artifact is out of scope here.
- **Calculus.** Anything past Lang's Appendix preview lives in
  `02.*` (Apostol territory).
- **Number theory at the precalc tier** (divisibility, GCD, primes,
  modular arithmetic). Lang touches these only in passing. Defer
  unless an arithmetic-foundations sub-strand is added.
- **Set theory at the precalc tier** (union, intersection, Venn
  diagrams). Lang assumes minimal set theory. Defer unless a §0
  set-foundations sub-strand is added.

---

## §6 Acceptance criteria for FT equivalence (Lang)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, *Basic
Mathematics* is at equivalence-coverage when:

- ≥95% of Lang's named results map to Babel Bible units (currently ~3%; after
  priority-1 this rises to ~80%; after priority-1+2 to ~95%; after
  priority-3 deepenings to ~98%).
- ≥80% of Lang's exercises have a Codex equivalent (currently ~0%;
  closing this requires the dedicated precalc-exercise-pack pass per
  §5).
- ≥90% of Lang's worked examples are reproduced in some Babel Bible unit
  (currently ~5%; the priority-1+2 batch's required worked-example
  inclusions bring this to ~80%; full coverage requires
  worked-example densification across the new units).
- A `notation/lang-basic-mathematics.md` crosswalk exists (priority-4
  item 29; defer until priority-1 trig units land).
- For every chapter dependency in Lang (Part I → Part II → Part III →
  Part IV → Part V → Appendix), there is a corresponding
  `prerequisites` arrow chain in Babel Bible's DAG. The
  `00.01.01 → 00.03.02 → 00.10.01` (real numbers → quadratic formula →
  conic sections) and `00.01.01 → 00.06.01 → 00.07.01 → 00.08.01 →
  00.11.01` (real numbers → right-triangle trig → unit-circle trig →
  identities → polar coords) chains are the load-bearing ones.
- Pass-W weaving connects the new 00-precalc units to the existing
  `00.02.05-function` and forward to `01.01.01-field`,
  `02.01.05-metric-space`, `06.01.01-holomorphic-function`, and
  `06.01.03-residue-theorem` via lateral connections — the precalc
  strand becomes the *prerequisite floor* for the algebra, analysis,
  and complex-analysis strands.

The 12 priority-1 units alone close most of the theorem-layer
equivalence gap and produce the load-bearing precalc DAG. Priority-2
items round out Lang's content and close the function-unit deepening.
Priority-3 items handle the geometry and complex-number bridges.
Priority-4 items are bibliography-only enrichments plus the optional
notation crosswalk and Apostol-bridge survey.

**Honest scope.** The largest absolute new-unit count of any audited
book to date — 00-precalc is intentionally near-empty per the
apex-first strategy, and Lang is the canonical single source for
filling it. Most of the work is *new content* at the precalc tier,
not depth rewrites. The priority-1 batch (12 new units, ~30 hours) is
the minimum viable §0 strand and is the prerequisite for auditing
Apostol Vol. 1 honestly — without the Lang precalc floor, Apostol's
"for $x \in \mathbb{R}$" goes unanswered in Babel Bible.

**Composite Lang + Apostol-Vol-1 recommendation.** Defer Apostol Vol. 1's
audit until the Lang priority-1 batch lands; Apostol's per-book plan
then cites Lang's items 1, 2, 5, 16, 9-11 as prerequisites instead of
re-deriving them.

**Largest single Lang-distinctive gap:** the trigonometry block (items
9-11). Codex has zero precalc trigonometry; addition formulas,
unit-circle definitions, and identities are silently assumed in every
downstream unit that uses Fourier analysis, residue theorem, or
classical mechanics.
