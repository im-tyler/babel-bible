# Fast Track Texts — Need to Source

Of ~76 Fast Track texts, **6 exact + 7 related-by-same-author** have been downloaded from legitimate free sources. See `reference/fasttrack-texts/README.md` for what's in the archive.

Everything below needs to be sourced independently. For each: try library (including Archive.org controlled lending), institutional access, used-book markets, or direct purchase. I did not crawl piracy mirrors.

## Suggested sourcing order

**A. Try Archive.org first** — it has a legal "controlled digital lending" system where many of these are borrowable for free (1-hour or 2-week loans). Old out-of-print books especially.
**B. University library / ILL** — free if you have any access.
**C. Used marketplaces** (AbeBooks, Better World Books) — typically $5–30 for older texts.
**D. New purchase** — last resort; modern texts often $60–150+.
**E. Author homepages** — worth a direct check for recent texts; some authors post drafts.

---

## Citation-impact ranking — what's blocking currently-shipped units

Generated 2026-04-28 by grepping `TODO_REF` source paths and citing-unit lists across `content/`. Tiering = how many shipped units would have their `TODO_REF` placeholders resolvable once the source is in `reference/`. Sourcing in tier order maximizes citation-resolution velocity.

### Tier A — high impact (≥4 shipped units)

| Source | Citing units | Booklist # |
|---|---|---|
| **Lawson-Michelsohn, *Spin Geometry*** | Clifford algebra (`03.09.02`), Spin structure (`03.09.04`), Fredholm operators (`03.09.06`), Dirac operator (`03.09.08`), Atiyah-Singer (`03.09.10`), Spin group (`03.09.03`), Bott periodicity (`03.08.07`), bilinear/quadratic form (`01.01.15`) — **8 units** | §3.35 |
| **Milnor-Stasheff, *Characteristic Classes*** | Vector bundle (`03.05.02`), Vector-bundle connection (`03.05.04`), Pontryagin/Chern (`03.06.04`), Chern-Weil (`03.06.06`) — **4 units** | §3.08 |
| **Kobayashi-Nomizu, *Foundations of Differential Geometry* (Vol. I + II)** | Principal bundle (`03.05.01`), Principal-bundle connection (`03.05.07`), Vector-bundle connection (`03.05.04`), Pontryagin/Chern (`03.06.04`), Chern-Weil (`03.06.06`) — **5 units** | §3.18–§3.19 |

**Sourcing these three resolves ~17 units' worth of TODO_REF placeholders**, including the entire spin-geometry strand (which is the core of the pilot) and the bundle/curvature/characteristic-class chain. Highest-leverage targets.

### Tier B — medium impact (2–3 shipped units)

| Source | Citing units | Booklist # |
|---|---|---|
| Reed-Simon, *Methods of Modern Mathematical Physics* Vol. I | Fredholm operators, Hilbert space, Banach spaces, Bounded operators (likely after Phase 2.3 ships) — **3+ units** | not in §0–3; standard analysis text |
| Steenrod, *The Topology of Fibre Bundles* | Principal bundle, Principal-bundle connection — **2 units** | not in §3 list; classical |
| Husemoller, *Fibre Bundles* | Principal bundle, Vector bundle — **2 units** | not in §3 list; standard |
| Friedrich, *Dirac Operators in Riemannian Geometry* | Spin structure, Dirac operator — **2 units** | adjacent to §3.35 |
| Conway, *A Course in Functional Analysis* | Banach spaces, Hilbert space — **2 units** | standard analysis text |
| Atiyah, *K-Theory* | Vector bundle, Bott periodicity — **2 units** | §3.10 |

### Tier C — singleton citations (1 unit each)

Atiyah-Bott-Shapiro *Clifford Modules* (Topology 1964), Atiyah-Singer Annals 1968 papers I/III, Atiyah-Bott *Yang-Mills over Riemann surfaces* (Phil. Trans. 1983), Berline-Getzler-Vergne *Heat Kernels and Dirac Operators* (§3.29), Bott *stable homotopy of classical groups* (Annals 1959), Bott-Tu *Differential Forms in Algebraic Topology* (§1.17), Borel-Hirzebruch *Characteristic Classes and Homogeneous Spaces*, Chern *Topics in Differential Geometry*, de Rham original 1931 paper, Di Francesco-Mathieu-Sénéchal *CFT*, Donaldson-Kronheimer *Geometry of Four-Manifolds*, Halmos *Finite-Dimensional Vector Spaces*, Hoffman-Kunze *Linear Algebra*, Lang *Algebra* (§3.01), Lichnerowicz *Spineurs harmoniques* (1963), Madsen-Tornehave *From Calculus to Cohomology*, Milnor *Spin Structures on Manifolds* (Enseign. Math. 1963), Polchinski *String Theory* Vol. 1, Atkinson 1951 paper, Serre *A Course in Arithmetic* (§3.14), Spivak *Comprehensive Introduction* Vol. I.

### Sourcing recommendation

**Phase A (highest leverage):** acquire Lawson-Michelsohn, Milnor-Stasheff, Kobayashi-Nomizu Vols I+II. These are all in §0–§3 of the booklist below (Tier-A entries) and unblock 17 unit-citations. Lawson-Michelsohn alone unblocks the entire spin-geometry strand.

**Phase B:** the Tier B group is mostly standard analysis (Reed-Simon, Conway) and bundle theory (Steenrod, Husemoller, Friedrich, Atiyah K-Theory). Reed-Simon and Conway should be Archive.org-borrowable; Atiyah K-Theory is §3.10.

**Phase C:** singletons — many are journal papers (Atiyah-Singer Annals 1968, ABS 1964, Atkinson 1951, Lichnerowicz 1963, Milnor 1963, Bott 1959). These are typically free via JSTOR institutional access or via the Annals of Mathematics open archive (post-1923 papers are public domain in the US).

---

## 0. Prerequisites — all need sourcing

| # | Title | Author | Notes |
|---|-------|--------|-------|
| 0.1 | Basic Mathematics | Lang | Archive.org likely has (lending) |
| 0.2 | Calculus Vol 1 | Apostol | In print (Wiley) |
| 0.3 | Calculus Vol 2 | Apostol | In print (Wiley) |
| 0.4 | Ordinary Differential Equations | Arnold | Springer; Archive.org |

## 1. Fundamentals — 1 ✓ / 1 partial-relative / 18 to source

| # | Title | Author | Status | Notes |
|---|-------|--------|--------|-------|
| 1.01 | Linear Algebra | Shilov | **SOURCE** | Dover; Archive.org has PD/lending |
| 1.02 | Mechanics | Landau/Lifshitz | **SOURCE** | Elsevier |
| 1.03 | Classical Theory of Fields | Landau/Lifshitz | **SOURCE** | Elsevier |
| 1.04 | Complex Analysis | Ahlfors | **SOURCE** | McGraw-Hill |
| 1.05 | Topology and Groupoids | Brown | ✓ HAVE | groupoids.org.uk |
| 1.06 | Riemann Surfaces | Ahlfors/Sario | **SOURCE** | Princeton (old, Archive.org may have) |
| 1.07 | Riemann Surfaces (modern) | Donaldson | **SOURCE** | Oxford |
| 1.08 | Lie Groupoids and Lie Algebroids in DG | Mackenzie | **SOURCE** | Cambridge |
| 1.09 | General Theory of Lie Groupoids and Algebroids | Mackenzie | **SOURCE** | Cambridge |
| 1.10 | Lectures on Differential Geometry | Sternberg | **SOURCE** (but ~ *Advanced Calculus* + *Semi-Riemannian Geometry* by Sternberg available free) |
| 1.11 | Dynamical Systems IV (Symplectic) | Arnol'd/Dubrovin | **SOURCE** | Springer Encycl. |
| 1.12 | Topological Methods in Hydrodynamics | Arnol'd | **SOURCE** | Springer |
| 1.13 | Geometric Integration Theory | Whitney | **SOURCE** | Dover reprint of 1957 original |
| 1.14 | Curvature in Math and Physics | Sternberg | **SOURCE** (but ~ Sternberg free works available) |
| 1.15 | Group Theory and Physics | Sternberg | **SOURCE** (but ~ Sternberg *Lie Algebras* + *Semi-Classical Analysis* free) |
| 1.16 | Applications of Lie Groups to Differential Equations | Olver | **SOURCE** | Springer GTM — Olver's homepage has lecture notes but not this book |
| 1.17 | Differential Forms in Algebraic Topology | Bott/Tu | **SOURCE** | Springer GTM 82 — high priority for curriculum |
| 1.18 | Multivariable Mathematics (Ch. 8) | Shifrin | **SOURCE** | Wiley |
| 1.19 | Rational Homotopy Theory and Differential Forms | Griffiths/Morgan | **SOURCE** | Birkhäuser |
| 1.20 | Finite Element Exterior Calculus | D. Arnold | partial ✓ (paper version) / **SOURCE** book | SIAM CBMS book |

## 2. Quantum & Stat Phys — 2 ✓ / 1 partial-relative / 17 to source

| # | Title | Author | Status | Notes |
|---|-------|--------|--------|-------|
| 2.01 | QM: Non-Relativistic Theory | Landau/Lifshitz | **SOURCE** | Elsevier |
| 2.02 | Quantum Theory, Groups and Representations | Woit | ✓ HAVE | Columbia |
| 2.03 | QFT Lecture Notes | Chatterjee | ✓ HAVE | Stanford |
| 2.04–2.09 | Generalized Functions Vol 1–6 | Gel'fand/Vilenkin | **SOURCE** (6 vols) | AMS Chelsea; older vols may be on Archive.org |
| 2.10 | Statistical Physics 1 | Landau/Lifshitz | **SOURCE** | Elsevier |
| 2.11 | Structure of Dynamical Systems | Souriau | **SOURCE** (but ~ Sternberg *Semi-Classical Analysis* free covers adjacent material) |
| 2.12 | Exactly Solved Models in Stat Mech | Baxter | **SOURCE** | Academic Press |
| 2.13–2.14 | Statistical Field Theory Vol 1–2 | Itzykson/Drouffe | **SOURCE** | Cambridge |
| 2.15 | MIT OCW Statistical Mechanics II | Kardar et al. | **FREE** — download course materials directly from ocw.mit.edu/courses/8-334-statistical-mechanics-ii-statistical-physics-of-fields-spring-2014/ |
| 2.16 | Stochastic Quantization | Parisi et al. | **SOURCE** | Westview/Frontiers |
| 2.17–2.19 | Quantum Theory of Fields Vol 1–3 | Weinberg | **SOURCE** (3 vols) | Cambridge |
| 2.20 | Quantum Electrodynamics | Landau/Lifshitz | **SOURCE** | Elsevier |

## 3. Modern Geometry / Topology — 3 ✓ / 3 partial-relative / ~40 to source

### Have (exact)
- May, *Concise Course in Algebraic Topology* ✓
- May, *Simplicial Objects in Algebraic Topology* ✓

### Have (related by same author — does NOT substitute for the FT text)
- Bott, *Lectures on Morse Theory* (not Bott-Tu, but Bott on related topic)
- Freed, *Aspects of Field Theory* (not *Lectures on Field Theory and Topology*)

### Need to source
| # | Title | Author | Notes |
|---|-------|--------|-------|
| 3.01 | Algebra | Lang | Springer GTM |
| 3.02 | Homological Algebra (Algebra V) | Gel'fand/Manin | Springer Encycl. |
| 3.03 | Morse Theory | Milnor | Princeton (Annals of Math Studies) |
| 3.04 | Morse Homology | Schwarz | Birkhäuser |
| 3.05 | Lectures on Field Theory and Topology | Freed | AMS CBMS (partial: *Aspects* by same author is free) |
| 3.06 | Floer Homology Groups in Yang-Mills | Donaldson | Cambridge |
| 3.07 | Lectures on the H-Cobordism Theorem | Milnor | Princeton |
| 3.08 | Characteristic Classes | Milnor/Stasheff | Princeton |
| 3.09 | Geometric Quantization | Woodhouse | Oxford |
| 3.10 | K Theory | Atiyah | Benjamin/CRC |
| 3.11 | Representation Theory: A First Course | Fulton/Harris | Springer GTM 129 |
| 3.12 | Complex Semisimple Lie Algebras | Serre | Springer |
| 3.13 | Lie Algebras and Lie Groups | Serre | Springer LNM |
| 3.14 | A Course in Arithmetic | Serre | Springer GTM 7 |
| 3.15 | Linear Representations of Finite Groups | Serre | Springer GTM 42 |
| 3.16 | Probability and Rep Theory | Diaconis | Notes — check statweb.stanford.edu/~diaconis |
| 3.17 | Differential Geometry, Lie Groups, Symmetric Spaces | Helgason | AMS |
| 3.18–3.19 | Foundations of Diff Geometry Vol 1–2 | Kobayashi/Nomizu | Wiley (2 vols) |
| 3.20 | Geometry of Yang-Mills Fields | Atiyah | SNS Pisa (sometimes circulated) |
| 3.21 | Algebraic Geometry | Hartshorne | Springer GTM 52 |
| 3.22 | Geometry of Algebraic Curves | Griffiths/Harris | Springer Grundlehren |
| 3.23 | Function Theory of Several Complex Variables | Krantz | AMS |
| 3.24 | Introduction to Holomorphic Functions of Several Variables | Gunning | AMS |
| 3.25 | Topological Methods in Algebraic Geometry | Hirzebruch | Springer Classics |
| 3.26 | Manifolds and Modular Forms | Hirzebruch | Vieweg |
| 3.27 | Hodge Theory and Complex Algebraic Geometry | Voisin | Cambridge Studies |
| 3.28 | Riemannian Geometry and Geometric Analysis | Jost | Springer Universitext |
| 3.29 | Heat Kernels and Dirac Operators | Berline/Getzler/Vergne (FT credits Bismut/Ghys/Quillen) | Springer Grundlehren |
| 3.30 | Moduli of Curves | Harris (with Morrison) | Springer GTM |
| 3.31 | Geometric Invariant Theory | Mumford | Springer Ergebnisse |
| 3.32 | Introduction to Toric Varieties | Fulton | Princeton |
| 3.33 | Tropical Geometry and Mirror Symmetry | Gross | AMS CBMS |
| 3.34 | Introduction to Modern Number Theory | Manin (with Panchishkin) | Springer Encycl. |
| 3.35 | Spin Geometry | Lawson/Michelsohn | Princeton |
| 3.36–3.37 | Spinors and Space-Time Vol 1–2 | Penrose/Rindler | Cambridge |
| 3.39 | More Concise Algebraic Topology | May/Ponto | UChicago Press (free copy not located) |
| 3.41 | Simplicial Homotopy Theory | Goerss/Jardine | Birkhäuser |
| 3.42 | Complex Cobordism and Stable Homotopy Groups of Spheres | Ravenel | Green Book — author hosts at Rochester (server timed out on attempt; retry) |
| 3.43 | Quantum Fields and Strings Vol 1–2 | Deligne et al. | AMS — IAS may host PDF chapters |
| 3.44 | Global Approach to QFT Vol 1–2 | DeWitt | Oxford |
| 3.45 | Microlocal Analysis of QF on Curved Spacetimes | Gérard | Springer |
| 3.46 | Differential Forms and Cohomology | Vaisman | Marcel Dekker |
| 3.47 | Loop Spaces, Characteristic Classes, Geometric Quantization | Brylinski | Birkhäuser |
| 3.48 | Einstein Manifolds | Besse | Springer Classics |

## Retry candidates (intermittent/slow servers)

These returned timeouts on attempt; retry later:

- **Ravenel's Green Book** — `https://people.math.rochester.edu/faculty/doug/mybooks/ravenel.pdf` — author-hosted; Rochester server was slow. Worth retrying.
- **Ranicki archive** (Edinburgh) — `https://www.maths.ed.ac.uk/~v1ranick/` hosts many classic topology texts; specific Milnor / Milnor-Stasheff URLs not found yet but the archive is extensive — worth browsing manually.

## Further legitimate avenues to try

- **AMS Open Math Notes** — https://www.ams.org/open-math-notes — has some Milnor and Serre material.
- **IAS publications** — Deligne, Freed, and others have IAS talks hosted.
- **arXiv** — some authors post book-form preprints (search by author + keyword).
- **Archive.org lending** — most Dover, Princeton, and older Springer texts are borrowable free.
- **Cambridge Open Access** — a subset of Cambridge math books are OA.
- **Your local library / ILL** — free, usually fast.
