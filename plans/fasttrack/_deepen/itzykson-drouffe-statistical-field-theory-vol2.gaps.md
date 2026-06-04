# Itzykson, Drouffe — *Statistical Field Theory, Vol. 2* (Fast Track 2.14) — first-audit gap plan

**Book:** C. Itzykson, J.-M. Drouffe, *Statistical Field Theory, Volume 2:
Strong Coupling, Monte Carlo Methods, Conformal Field Theory, and Random
Systems* (Cambridge Monographs on Mathematical Physics, CUP, 1989).
**Fast Track entry:** 2.14 — the vol-2 successor to the already-deepened
vol-1 (2.13, audited in `plans/fasttrack/itzykson-drouffe-statistical-field-theory-vol1.md`).
**Working dir:** `/Users/tyler/Documents/Code Projects/B.I.B.L.E`.
**No local PDF** (`reference/` has no `*itzykson*`/`*drouffe*`); audit built from the
canonical vol-2 table of contents (Chs. 7-11: strong coupling / Monte Carlo /
conformal invariance / 2D conformal field theory / disordered systems) and
verified grep-by-grep against the live corpus. Status therefore **reduced**.

## Method note

Per the new-audit brief: this is a deepening-style pass — assume covered until
proven absent. Every headline below was grep-verified against `content/`
(filename + body) before being classed. Vol-2's centre of mass is **massively
pre-covered** because (a) vol-1's own P1/P2 strands already shipped as
`08.14.01-07` + `08.08.04` + `12.18.16`, and (b) Baxter (`08.13.*`) owns the
integrable/Bethe-ansatz axis, and (c) a dedicated CFT chapter
(`03.10.*`, `03.11.*`) and a TQFT chapter (`03.16.*`) already exist. The
residual is a **tight cluster in 2D CFT** — the BPZ minimal-model machinery —
plus one continuum-gravity unit. **3 genuine gaps.**

---

## GENUINE GAPS (3)

### Gap 1 — Minimal models and the Kac determinant

- **proposed id:** `03.10.04` (verified free: `03.10` chapter holds only `.02`, `.03`)
- **title:** Minimal models, the Kac formula, and null vectors
- **spec:** The $c<1$ unitary discrete series $c = 1 - 6/[m(m+1)]$; degenerate
  Virasoro highest-weight representations; the Kac determinant formula and the
  conformal weights $h_{r,s}$ of degenerate primaries; null (singular) vectors;
  the finite Kac table and fusion of degenerate fields; identification of the
  $m=3$ minimal model as the critical 2D Ising universality class
  ($c=1/2$, $h\in\{0,1/16,1/2\}$).
- **prereqs:** `03.10.02` (CFT basics — Virasoro, primaries, OPE, central charge),
  `03.11.03` (Virasoro algebra), `07.06.06` (Verma module — the rep-theory frame
  for highest-weight modules and singular vectors), `08.06.02` (conformal
  criticality — the stat-mech identification it sharpens).
- **chapter dir:** `content/03-modern-geometry/10-conformal-field-theory/`;
  frontmatter `section: modern-geometry`, `chapter: conformal-field-theory`.
- **note:** `08.06.02` and `03.10.02` *mention* "minimal model" / Ising $c=1/2$
  only in a Synthesis sentence; neither states the Kac formula, the $h_{r,s}$
  table, the degenerate-representation/null-vector construction, or the unitary
  series. This is the single largest genuine hole vol-2 exposes. Originator:
  Belavin-Polyakov-Zamolodchikov 1984 (already in both units' bibliographies);
  Kac 1979 / Feigin-Fuchs for the determinant. `lean_status: none` (prose-first).

### Gap 2 — The Coulomb-gas (Dotsenko-Fateev) construction and BPZ bootstrap

- **proposed id:** `03.10.05` (verified free)
- **title:** The Coulomb gas, screening charges, and the conformal bootstrap
- **spec:** The free-boson / background-charge ("Coulomb gas") representation of
  minimal-model correlators: vertex operators, the background charge $\alpha_0$
  fixing $c = 1 - 24\alpha_0^2$, screening charges, and the Dotsenko-Fateev
  integral representation of conformal blocks; the BPZ second-order differential
  equation from the level-2 null vector, giving four-point functions as
  hypergeometric conformal blocks; crossing symmetry / associativity of the OPE
  as the **conformal bootstrap** closure condition.
- **prereqs:** `03.10.04` (minimal models / null vectors — the degenerate fields
  whose null-vector decoupling yields the BPZ equation), `03.10.02` (CFT basics),
  `08.06.01` (Gaussian free field — the free boson the Coulomb gas is built on).
- **chapter dir:** `content/03-modern-geometry/10-conformal-field-theory/`;
  same frontmatter as Gap 1.
- **note:** Distinct from the **electrostatic/KT Coulomb gas** of vortices
  (`08.15.01`, already shipped — that is the XY-model log gas, not the CFT
  screening-charge construction). "Conformal bootstrap" is named once in
  `08.06.02`'s Synthesis but never carried out; no crossing equation, no
  conformal block, no screening operator anywhere in the corpus (grep:
  `dotsenko|screening charge|background charge|null vector|bpz equation` →
  none in a CFT sense). Originators: Dotsenko-Fateev 1984; BPZ 1984.
  `lean_status: none`.

### Gap 3 — Liouville theory and the continuum approach to 2D quantum gravity

- **proposed id:** `08.14.08` (verified free: `08.14` chapter stops at `.07`)
- **title:** Liouville field theory and 2D quantum gravity (KPZ-DDK scaling)
- **spec:** The continuum/Liouville route to 2D quantum gravity, complementary
  to the matrix-model route already in `08.14.06`: the Polyakov conformal-anomaly
  origin of the Liouville action; the gravitational dressing of conformal weights;
  the **KPZ-DDK relation** (Knizhnik-Polyakov-Zamolodchikov 1988 /
  David, Distler-Kawai) between flat and gravitationally-dressed scaling
  dimensions and the **string-susceptibility exponent**
  $\gamma_{\mathrm{str}} = \tfrac{1}{12}\big(c-1-\sqrt{(c-1)(c-25)}\big)$,
  reproducing $\gamma_{\mathrm{str}}=-\tfrac12$ for pure gravity ($c=0$) found
  combinatorially in `08.14.06`.
- **prereqs:** `08.14.06` (matrix models / random surfaces — explicitly
  forward-points to "a dedicated entry on random surfaces / 2D quantum gravity";
  this is that entry's continuum half), `08.06.02` (conformal criticality),
  `03.10.02` (CFT basics — central charge / conformal weights), `08.06.01`
  (Gaussian free field — the Liouville mode).
- **chapter dir:** `content/08-stat-mech/statistical-field-theory/`;
  frontmatter `section: stat-mech`, `chapter: statistical-field-theory`.
- **note:** Name-collision guard — `08.14.07` "KPZ" is the
  **Kardar-Parisi-Zhang growth-interface** equation, a *completely different*
  KPZ. The *gravitational* KPZ (Knizhnik-Polyakov-Zamolodchikov dressing) is
  absent (grep: `liouville field theory|gravitational dressing|kpz exponent|
  dozz|distler|kawai` → none). `08.14.06` covers only the **matrix/combinatorial**
  side of 2D gravity and explicitly defers the continuum-gravity entry; this gap
  fills exactly that deferred slot. `lean_status: none`. Originators:
  Polyakov 1981; KPZ 1988; David 1988; Distler-Kawai 1989.

---

## COVERED (not gaps)

Each vol-2 headline checked against `content/` and found already present at
equivalent depth:

- **Strong-coupling / character expansion of lattice gauge theory; Wilson loop;
  area law; string tension; confinement.** COVERED — `12.18.16`
  (full Peter-Weyl character expansion, minimal-surface tiling, area law, string
  tension, Elitzur, asymptotic scaling) + `08.08.04` (roughening / confining
  string, Lüscher term). The vol-1 audit's proposed `08.08.04` confinement unit
  was explicitly superseded by `12.18.16`.
- **Roughening / deconfinement transition; confining-string fluctuations.**
  COVERED — `08.08.04`.
- **Large-N expansion (vector / O(n)); saddle becomes exact; gap equation;
  factorisation.** COVERED — `08.14.03` (the large-N limit).
- **Matrix models; 't Hooft genus expansion; ribbon/fat graphs; planar limit;
  BIPZ orthogonal-polynomial solution; string susceptibility $\gamma=-1/2$;
  double-scaling limit; Painlevé; random *triangulated* surfaces / matrix-model
  2D gravity.** COVERED — `08.14.06` (substantial, not a mere pointer: full
  genus-grading theorem, Catalan/semicircle, string equation, double scaling).
  *Only the **continuum Liouville** complement is missing → Gap 3.*
- **2D CFT foundations: conformal symmetry, Witt/Virasoro algebra, central
  charge, primary fields, OPE, radial quantization, state-operator
  correspondence, stress tensor.** COVERED — `03.10.02` (CFT basics).
- **The Ising model as free fermions / Grassmann-Pfaffian solution; recovery of
  Onsager free energy and $\beta=1/8$.** COVERED — `08.14.02`
  (Grassmann integration and the 2D Ising model as free fermions). The
  *CFT* identity Ising$=c\!=\!1/2$ minimal model is the new piece (Gap 1), but
  the free-fermion solution itself is shipped.
- **Fermions on the lattice; doubling problem; Nielsen-Ninomiya; Wilson /
  staggered fermions.** COVERED — `08.14.04` (lattice fermions and the doubling
  problem).
- **Pfaffian / dimer method; Kasteleyn.** COVERED — `08.14.05`
  (the Pfaffian and the dimer model).
- **Bethe ansatz (coordinate Bethe ansatz, Bethe equations, two-body scattering
  phase, thermodynamic-limit root density); integrable vertex models.**
  COVERED — `08.13.02` (six-vertex / Bethe ansatz, full derivation) +
  `08.13.01` (Yang-Baxter) + `08.13.03` (eight-vertex). Baxter (2.12) owns this
  axis per the vol-1 coordination note.
- **WZW model / affine Kac-Moody / Sugawara construction / central charge.**
  COVERED — `03.10.03` (the WZW action and level-k extension).
- **Fusion rules / Verlinde formula / modular data / conformal-block
  dimensions.** COVERED — `03.16.06` (Chern-Simons TQFT, Jones-RT — contains the
  Verlinde formula and fusion rules). Rational-CFT modular structure also sketched
  in `03.10.02` Master.
- **Kosterlitz-Thouless transition / 2D Coulomb gas of vortices / dual
  sine-Gordon.** COVERED — `08.15.01` (the KT transition / 2D XY model). This is
  the electrostatic log gas, *distinct* from the CFT Coulomb gas (Gap 2).
- **Disordered systems / random fields / replica / dimensional reduction.**
  COVERED at corpus scope — `08.10.13` (Parisi-Sourlas dimensional reduction and
  random-field supersymmetry); spin-glass replica is a separate FT entry's
  territory, not a vol-2-exposed hole.
- **Monte Carlo methods for lattice field theory (Metropolis, heat bath,
  importance sampling).** See OUT OF SCOPE.

## OUT OF SCOPE

- **Vol-2 Monte Carlo / simulation-algorithms chapter** (Metropolis, heat-bath,
  cluster, autocorrelation, finite-size-scaling-from-simulation). Numerical
  methodology with no theorem-level payoff; the curriculum carries the analytic
  results these algorithms estimate (confinement `12.18.16`, critical exponents
  `08.04.*`) but not simulation recipes. Manufacturing a unit here would be
  pure phenomenology. (Creutz's Monte-Carlo confinement *evidence* is already a
  pointer inside `08.08.04`.)
- **Spin-glass / replica-symmetry-breaking apparatus (Parisi RSB ansatz, full
  replica formalism).** A large technical edifice that belongs to a dedicated
  disordered-systems FT entry, not to this stat-field-theory audit; vol-2 only
  surveys it. `08.10.13` already covers the random-field/SUSY corner the
  corpus needs.
- **Finite-size scaling on the cylinder / Cardy's $c$-from-strip-free-energy.**
  A worthwhile micro-result but rides naturally inside Gap 1's minimal-model
  unit (the $c$-effective and corner/strip corrections) rather than a standalone
  unit; not split out to avoid manufacturing a marginal id.

---

**Counts:** genuine gaps = **3**; COVERED = **14**; OUT OF SCOPE = **3**.
**File:** `plans/fasttrack/_deepen/itzykson-drouffe-statistical-field-theory-vol2.gaps.md`
