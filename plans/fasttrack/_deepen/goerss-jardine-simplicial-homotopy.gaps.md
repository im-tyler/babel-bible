# Deepening gaps — Goerss & Jardine, *Simplicial Homotopy Theory* (FT 3.41)

**SLUG:** `goerss-jardine-simplicial-homotopy`
**Deepened:** 2026-06-02. Re-audited against the live `03-modern-geometry/12-homotopy/`
chapter after the model-category superstructure (03.12.31-35, 37, 38, 40, 48)
and the simplicial bookshelf (03.12.41/42 + the diff-geom mirror 03.12.36/39)
shipped. The original audit's entire P1-P3 punch-list (§3) has effectively
been produced; almost every "✗ gap" in the §2 coverage table is now COVERED.

**Result: 1 genuine gap.** The book itself is essentially fully covered to the
FT equivalence threshold. The single remaining genuine gap is the
GJ→Lurie *frontier* bridge — quasi-categories and the Joyal model structure as
a standalone unit — which the original audit (§5) explicitly deferred as
"pointer only" and which the deepening brief flags as the likely frontier gap.
It currently exists only as Synthesis/Advanced pointers inside 03.12.33, not as
its own stated-and-developed unit.

---

## Genuine gaps (1)

### G1 — Quasi-categories and the Joyal model structure on sSet

- **proposed id:** `03.12.43` (FREE — verified: 03.12.43/44/47/50 all unoccupied
  in `content/03-modern-geometry/12-homotopy/`)
- **title:** Quasi-categories and the Joyal model structure
- **spec:** The second model structure on $\mathbf{sSet}$ (Joyal): cofibrations =
  monomorphisms, fibrant objects = quasi-categories (inner-horn fillers
  $\Lambda^n_k \hookrightarrow \Delta^n$, $0<k<n$); the nerve of a category as a
  quasi-category; Kan complexes = $\infty$-groupoids vs quasi-categories =
  $(\infty,1)$-categories; the homotopy category and equivalences of
  quasi-categories; pointer to the homotopy-coherent nerve and Lurie HTT. This is
  the standalone development of what 03.12.33 only sketches as a Synthesis
  sibling, and the explicit GJ→Lurie bridge the audit §5 deferred.
- **prereqs:** `03.12.33` (Kan-Quillen model structure on sSet — verified exists),
  `03.12.31` (Quillen model category — verified), `03.12.25`
  (simplicial sets and geometric realisation — verified), `03.12.42`
  (combinatorial simplicial homotopy groups — verified)
- **chapter dir:** `content/03-modern-geometry/12-homotopy/`
- **frontmatter:** `section: modern-geometry`, `chapter: homotopy`
- **note:** Strictly this is the Lurie HTT / Joyal frontier (the FT lists Lurie
  HTT as a separate deferred audit). Propose as a *bridge* unit only: state the
  Joyal structure, characterise quasi-categories, and point forward — do NOT
  attempt the full $(\infty,1)$-categorical machinery (straightening, complete
  Segal spaces, $\infty$-topoi), which belongs to the Lurie audit. Lean toward
  producing only if the Lurie HTT audit is not imminent; otherwise this content
  is the natural opening unit of that audit.

---

## COVERED (not gaps) — verified due diligence

Every item below was a "✗ gap" or candidate in the original audit and/or the
deepening brief; each is now covered by an existing unit (id given).

**Model-category foundations (GJ Ch II / audit P1):**
- Quillen model-category axioms, homotopy category $\mathrm{Ho}(\mathcal{M})$,
  left/right derived functors — `03.12.31` (full M1-M5 statement, Ho construction,
  derived functors).
- Cofibrantly generated model categories + **small-object argument** (full
  transfinite statement AND proof, smallness hypothesis, relative cell complexes)
  — `03.12.31` (Step at L458-468) and `03.12.33`. Brief's "small object argument
  likely a gap" → COVERED.
- Quillen functor / Quillen adjunction / Quillen equivalence — `03.12.32`.
- Kan-Quillen model structure on $\mathbf{sSet}$ (cofibrations = monos, fib =
  Kan fibrations, anodyne extensions, existence via SOA) — `03.12.33`.
- $|\cdot|\dashv\mathrm{Sing}$ as a Quillen equivalence
  $\mathbf{sSet}\simeq_{\mathrm{Qu}}\mathbf{Top}$ — `03.12.32` + `03.12.33` (Advanced).
- Simplicial model category (SM7 / pushout-product axiom) + the function
  complex $\mathrm{Hom}(K,L)$ — `03.12.35`.
- Standard examples $\mathbf{Top}$, $\mathbf{Ch}_{\geq0}(R)$, $\mathbf{sSet}$ —
  `03.12.31` and `03.12.33` (Quillen-Serre on Top with full M1-M5 proof).

**Homotopy (co)limits (GJ Ch IV / brief "likely genuine gap"):**
- **Homotopy colimit** (Bousfield-Kan bar construction $B(*,I,F)$, two-sided bar
  $B(W,I,X)$, hocolim as left-derived functor on the projective structure,
  homotopy pushout, mapping telescope) — `03.12.37`. Brief's hocolim/holim flag
  → COVERED.
- **Homotopy limit / holim** — covered as the dual in `03.12.37` AND concretely as
  $\mathrm{Tot}(X^\bullet)=\mathrm{holim}_\Delta X^\bullet$ in `03.12.38`. Not a
  standalone unit but stated with its construction; default to COVERED.
- Bisimplicial sets, diagonal, realisation lemma — `03.12.36`
  (diff-geom mirror `03-differential-geometry/12-homotopy-theory/`).
- **Reedy model structure** (Reedy categories, latching/matching, Reedy
  fibrations on cosimplicial objects) — `03.12.38` (Reedy fibration defined,
  L193-204) and `03.12.31`. Not standalone but stated; COVERED.

**Cosimplicial / Bousfield-Kan (GJ Ch VII / VIII):**
- **Cosimplicial spaces**, totalisation $\mathrm{Tot}$, cobar — `03.12.38`
  (defined directly; §IX-X anchor).
- **Bousfield-Kan spectral sequence**
  $E_2^{s,t}=\pi^s\pi_t\Rightarrow\pi_{t-s}\mathrm{Tot}$, $\lim^1$ obstruction,
  unstable Adams SS — `03.12.38`.

**Localization / Dwyer-Kan (brief candidates):**
- **Left AND right Bousfield localisation**, $S$-local objects/equivalences,
  existence (Hirschhorn), universal property, **left/right proper** model
  categories, cellular/combinatorial, monoidal localisation, cellularisation
  (Farjoun) — `03.12.48`. Brief's "proper model categories" and "left/right
  Bousfield localization" → COVERED.
- **Dwyer-Kan simplicial / hammock localisation** $L^H\mathcal{C}$ (the
  function-complex comparison theorem, derived mapping space) — stated as a
  theorem in `03.12.35` (Dwyer-Kan 1980) and `03.12.48` (hammock def L197);
  cited in `03.12.31`, `03.12.32`. Not standalone but the content is stated;
  COVERED.

**Simplicial groups / Postnikov (GJ Ch V / VI):**
- Simplicial group, $W\bar{G}$ classifying functor, principal-$G$ classification —
  `03.12.39` (diff-geom mirror).
- Twisted cartesian products, simplicial fibre bundles — `03.12.41`.
- Postnikov tower of a Kan complex, $k$-invariants — `03.12.40`.

**Chapter I/III combinatorial (GJ + MS-overlap):**
- Simplicial sets, $\Delta$, presheaves, geometric realisation as a coend,
  $|\cdot|\dashv\mathrm{Sing}$, density/Yoneda — `03.12.25`.
- Kan complexes, extension condition, simplicial homotopy groups, Kan fibration
  LES — `03.12.42` (+ `03.12.30` minimal complex/fibration in diff-geom mirror).
- Acyclic models + Eilenberg-Zilber + shuffle — `03.12.34`.
- $\Delta$-complex / semi-simplicial set — `03.12.22`; simplicial-set $\Delta$ —
  diff-geom `03.12.24`.
- Eilenberg-MacLane $K(\pi,n)$ — `03.12.05`.

**Frontier siblings (already pointed-to, not standalone — informational):**
- Joyal model structure / quasi-categories — pointers in `03.12.33` (Cisinski
  lattice, inner vs outer horns, Theorem 7) and `03.12.32`. This is exactly the
  thin coverage that motivates gap **G1** above (standalone unit absent).
- $\infty$-groupoids = Kan complexes, $(\infty,1)$-categories = quasi-categories
  — asserted in `03.12.33` Synthesis. Stated, not developed.
- Simplicial presheaves / sheaves / Jardine local model structure (GJ Ch VIII) —
  genuinely absent BUT explicitly out of scope per audit §5 (motivic-homotopy
  pass; Morel-Voevodsky). Not proposed — deferred by design, not an oversight.

---

**Gap count: 1. COVERED-verified topics: 24.**
