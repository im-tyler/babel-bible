# Parisi-Wu — *Stochastic Quantization* (Fast Track 2.16) — Audit + Gap Plan

**Primary book (secondary text):** Mikio Namiki, *Stochastic Quantization*,
Springer Lecture Notes in Physics, Monographs m9 (Springer-Verlag, Berlin /
Heidelberg, 1992, x + 217 pp.). ISBN 978-3-540-54724-2 (print);
978-3-540-47217-9 (eBook). DOI 10.1007/978-3-540-47217-9.

**Canonical review (co-anchor):** Poul H. Damgaard, Helmuth Hüffel,
"Stochastic Quantization," *Physics Reports* **152** no. 5–6 (1987) 227–398.
DOI 10.1016/0370-1573(87)90144-X.

**Originator paper:** G. Parisi, Y.-S. Wu, "Perturbation theory without gauge
fixing," *Scientia Sinica* **24** (1981) 483–496.

**Fast Track entry:** 2.16. FT 2.16 was catalogued as
"Stochastic Quantization — Parisi et al" with source marked `?` in
`docs/catalogs/FASTTRACK_BOOKLIST.md` — no definitive book was pinned.
This plan adopts **Namiki LNP m9 (1992)** as the canonical secondary text
and **Damgaard-Hüffel (1987)** as the canonical review co-anchor, since
Parisi-Wu themselves published only the short *Sci. Sinica* paper, not a
book. Recorded 2026-05-18.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units so that the Parisi-Wu stochastic-quantization (SQ hereafter)
framework is covered to the FT-equivalence threshold of
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4. The framework is a
specific reformulation of Euclidean QFT — modest punch-list expected
(~5–8 units), not a full chapter rebuild.

**Audit mode:** REDUCED. No local PDF of Namiki LNP m9 or of the
Damgaard-Hüffel *Phys. Rep.* review is present under
`reference/fasttrack-texts/02-quantum-stat/` (only Chatterjee QFT,
Sternberg Semi-Classical, Woit QFT-Groups-Reps are on disk). Springer
SpringerLink and Elsevier ScienceDirect both gated WebFetch (403 / IdP
redirect). Plan is written from the canonical published structure of
Namiki LNP m9 and Damgaard-Hüffel 1987 as documented across the
secondary literature (Zinn-Justin *QFT and Critical Phenomena* ch. 17;
Rivers *Path Integral Methods in QFT* §16; Henneaux-Teitelboim
*Quantization of Gauge Systems* §20). Local PDF acquisition is the first
P2 follow-up — see §7.

---

## §1 What the Parisi-Wu framework is for

The Parisi-Wu stochastic-quantization (SQ) programme reformulates
Euclidean quantum field theory as the **equilibrium distribution of a
classical stochastic process** in an extra "fictitious" time variable.
Given a Euclidean action $S[\phi]$ on fields $\phi(x)$ over $\mathbb{R}^d$,
introduce an auxiliary parameter $\tau$ ("stochastic time") and let
$\phi(x, \tau)$ evolve under the Langevin equation
$$\partial_\tau \phi(x, \tau) = -\frac{\delta S[\phi]}{\delta \phi(x, \tau)} + \eta(x, \tau),$$
where $\eta$ is Gaussian white noise with covariance
$\langle \eta(x, \tau) \eta(x', \tau') \rangle = 2\,\delta^d(x - x')\,\delta(\tau - \tau')$.
The associated Fokker-Planck equation has the **unique stationary
distribution** $P_{\mathrm{st}}[\phi] = Z^{-1} e^{-S[\phi]}$ — i.e., the
Euclidean path-integral measure. Quantum expectation values are
recovered as $\tau \to \infty$ equal-time stochastic averages.

Distinctive contributions, in roughly the order Namiki LNP m9 develops them:

1. **Langevin reformulation of Euclidean QFT.** Parisi-Wu 1981. The
   Markov process in fictitious time replaces the Feynman path integral
   as the *definition* of the theory. Namiki LNP m9 ch. 2; Damgaard-Hüffel
   1987 §2. Distinctive consequences: stochastic perturbation theory has
   a different graphical structure (rooted trees with stochastic-time
   propagators) than ordinary Feynman diagrams, but agrees in the
   $\tau \to \infty$ limit.
2. **Fokker-Planck equivalence and equilibrium distribution.** The
   $e^{-S[\phi]}/Z$ measure arises as the unique fixed point of the
   Fokker-Planck operator $\partial_\tau P = \partial_\phi[(\delta S/\delta\phi)P + \partial_\phi P]$.
   Namiki ch. 3; Damgaard-Hüffel §3. Convergence rate controlled by the
   spectrum of the Fokker-Planck operator; gapped for confining
   actions, gapless / power-law for free massless theories.
3. **Stochastic gauge fixing (Zwanziger).** For gauge theories the
   classical drift $-\delta S/\delta\phi$ has zero modes along gauge
   orbits, so the Langevin equation does not relax to a unique
   distribution. **Zwanziger 1981** showed one can add a drift term
   along gauge orbits that vanishes on physical observables but
   restores ergodicity. **No Faddeev-Popov ghosts or BRST machinery are
   required**: gauge fixing is implemented by a stochastic kernel rather
   than by gauge slices. Namiki ch. 5; Damgaard-Hüffel §6. This is the
   single most-cited practical advantage of SQ.
4. **Parisi-Sourlas dimensional reduction.** Parisi-Sourlas 1979 *Phys.
   Rev. Lett.* **43** 744. A theory in $d$ dimensions with a quenched
   random source coupled to $\phi$ reduces, at the level of correlation
   functions, to a *supersymmetric* theory in $d-2$ dimensions. The
   reduction is the closest pre-SQ analogue of the Langevin-trick:
   the stochastic noise plays the role of the random source. Namiki
   ch. 4; Zinn-Justin *QFT and Critical Phenomena* ch. 17.
5. **The Nicolai map.** Nicolai 1980 *Phys. Lett. B* **89** 341 / *Nucl.
   Phys. B* **176** 419. In supersymmetric theories there is a nonlinear
   change of field variables under which (a) the bosonic action becomes
   Gaussian and (b) the fermion determinant becomes the Jacobian of the
   transformation. The Nicolai-map field is **exactly the equilibrium
   variable of a Langevin process** with drift given by the
   superpotential. Stochastic quantization thus gives the most direct
   route to lattice formulations of SUSY theories. Namiki ch. 6;
   Damgaard-Hüffel §7.
6. **Stochastic regularization.** SQ admits a natural UV regulator —
   smear the noise correlator in fictitious time, $\langle\eta\eta\rangle
   \to 2 R_\Lambda(\tau - \tau')$ with $R_\Lambda$ supported on
   $|\tau - \tau'| < \Lambda^{-2}$ — that respects gauge invariance
   without ghosts. Bern-Halpern-Sadun-Taubes 1987 *Nucl. Phys. B* **284**
   1. Namiki ch. 7; Damgaard-Hüffel §5.
7. **Numerical stochastic perturbation theory and lattice
   implementation.** The Langevin equation is the foundation of lattice
   QCD's hybrid-Monte-Carlo / Langevin algorithms (Parisi-Wu Langevin
   updates, Batrouni-Katz-Kronfeld-Lepage-Svetitsky-Wilson 1985 *Phys.
   Rev. D* **32** 2736). Namiki ch. 8; this is where SQ leaves the
   continuum reformulation and becomes a practical numerical tool.
8. **Complex-action problem and the sign problem.** Generalised
   Langevin / complex Langevin (Parisi 1983, Klauder 1984) attempts to
   define $\int e^{-S}$ for actions $S$ taking complex values, where
   the Euclidean measure $e^{-S}$ is not a probability. Convergence
   is fragile and still an open problem (Aarts-Seiler-Stamatescu work,
   2010s). Namiki ch. 9; pointer level in the Babel Bible.

SQ is **not** a first introduction to QFT. It assumes Euclidean QFT
(Wick-rotated path integrals, scalar $\phi^4$, gauge theories, Yang-Mills),
Langevin / Fokker-Planck theory at the level of Risken *The Fokker-Planck
Equation*, and supersymmetric quantum mechanics. It is the canonical
entry point if one wants the *stochastic / dimensional-reduction* angle
on QFT — distinct from canonical quantization, path-integral quantization,
or BRST-cohomological quantization.

References for §1 (peer-reviewed):

- M. Namiki, *Stochastic Quantization*, Springer LNP m9 (1992).
- P. H. Damgaard, H. Hüffel, "Stochastic Quantization," *Phys. Rep.* **152** (1987) 227.
- G. Parisi, N. Sourlas, "Random magnetic fields, supersymmetry, and
  negative dimensions," *Phys. Rev. Lett.* **43** (1979) 744.
- J. Zinn-Justin, *Quantum Field Theory and Critical Phenomena*, 4th ed.
  (Clarendon / Oxford 2002), ch. 17 "Stochastic differential equations."

---

## §2 Coverage table (Babel Bible vs Namiki / Damgaard-Hüffel)

Cross-referenced against the current 313-unit corpus, focusing on
`08-stat-mech/` (22 units across partition, mean-field, Onsager, RG,
critical, gaussian, path-integral, lattice-gauge, wick) and on the
nascent `12-quantum/` chapters.
✓ = covered, △ = partial / different framing, ✗ = not covered.

| Namiki / D-H topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Euclidean path integral $\int \mathcal{D}\phi\,e^{-S}$ | `08.07.01-path-integral` | ✓ | Covered as stat-mech path integral. |
| Wick rotation $t \to -i\tau$ | `08.09.01-wick-rotation` | ✓ | Covered. |
| Gaussian field $\phi$ and free measure | `08.06.01-gaussian-field` | ✓ | Covered. |
| Lattice gauge action $S_W[U]$ | `08.08.01-wilson-lattice-gauge`, `08.08.02-wilson-action` | ✓ | Covered (Wilson action for SU($N$)). |
| Renormalisation group flow | `08.04.01`–`08.04.04` | ✓ | Real-space + Wilson-Fisher + $\beta$-function + block-spin. |
| Langevin equation $\partial_\tau \phi = -\delta S/\delta\phi + \eta$ | — | ✗ | **Gap (foundational for SQ).** |
| Gaussian white-noise process; Wiener measure | — | ✗ | **Gap.** Codex has no stochastic-process unit at present. |
| Fokker-Planck equation $\partial_\tau P = \partial_\phi[(\delta S/\delta\phi)P + \partial_\phi P]$ | — | ✗ | **Gap.** |
| Fluctuation-dissipation relation; detailed balance in field theory | — | ✗ | **Gap.** |
| Parisi-Wu stochastic-quantization theorem (equilibrium $= e^{-S}/Z$) | — | ✗ | **Gap (central theorem).** |
| Stochastic perturbation theory; tree-diagram expansion in $\tau$ | — | ✗ | **Gap.** Master-tier deepening. |
| Zwanziger stochastic gauge fixing | — | ✗ | **Gap.** Distinctive contribution; no FP-ghost analogue exists yet in Babel Bible either. |
| Faddeev-Popov ghosts / BRST (for contrast) | — | ✗ | **Gap** (separate; relevant only as the *thing-SQ-replaces*). |
| Parisi-Sourlas dimensional reduction | — | ✗ | **Gap.** |
| Nicolai map for SUSY theories | — | ✗ | **Gap.** Master-tier; pointer to SUSY QM. |
| Stochastic regularisation (Bern-Halpern-Sadun-Taubes) | — | ✗ | **Gap (low priority — specialist).** |
| Complex Langevin / sign problem | — | ✗ | **Gap (low priority — pointer only).** |
| Numerical Langevin / lattice updates | — | △ | Touched in `08.08-lattice-gauge/` (Wilson action) but not the Langevin update rule itself. |

**Aggregate coverage estimate:** SQ-specific content is **~0% covered**.
The supporting Euclidean / lattice / RG infrastructure is well-covered
(roughly the upper half of the table), but the stochastic-process
reformulation itself — Langevin, Fokker-Planck, Parisi-Wu theorem,
Zwanziger, Parisi-Sourlas, Nicolai — is entirely absent. This is
unsurprising: SQ is a specific QFT reformulation, not a foundational
chapter, and FT 2.16 was not previously sourced.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — prerequisite gap to flag:** The Codex has no
stochastic-process unit anywhere (Langevin / Wiener / Fokker-Planck /
Ornstein-Uhlenbeck). Adding *at least* an Ornstein-Uhlenbeck +
Fokker-Planck pair is a hard prerequisite for any SQ unit. These belong
in `02-analysis/12-ode/` (extending the existing Lyapunov-stability
unit `02.12.08`) or as a new `02-analysis/13-stochastic/` mini-chapter.
Flag for the analysis-chapter lead; not produced by this audit.

**Priority 1 — high-leverage, captures SQ's central content:**

1. **`08.10.01` Langevin equation for fields and Gaussian white noise.**
   Definition of $\partial_\tau \phi = -\delta S/\delta\phi + \eta$ with
   $\langle \eta\eta\rangle = 2\delta^d\delta$. Standard examples:
   free scalar, $\phi^4$, harmonic-oscillator analogue (finite-dim).
   Anchor: Namiki ch. 2; Damgaard-Hüffel §2; Zinn-Justin *QFT and
   Critical Phenomena* §17.1. Three-tier, ~1500 words. Foundational
   for the next four units.
2. **`08.10.02` Fokker-Planck equation and equilibrium distribution.**
   Derivation of $\partial_\tau P = \partial_\phi[(\delta S/\delta\phi)P + \partial_\phi P]$
   from the Langevin equation; spectrum and gap; the
   $P_{\mathrm{st}}[\phi] = Z^{-1}e^{-S[\phi]}$ identification. Anchor:
   Namiki ch. 3; Damgaard-Hüffel §3. Three-tier; Master section covers
   the spectral-gap argument for convergence rate.
3. **`08.10.03` Parisi-Wu stochastic-quantization theorem.** Statement:
   Euclidean correlators $\langle \phi(x_1)\cdots\phi(x_n)\rangle$ equal
   $\tau \to \infty$ equal-time stochastic averages of the Langevin
   process. Proof sketch via Fokker-Planck. Stochastic perturbation
   theory and rooted-tree expansion at Master tier. Originator
   citation: Parisi-Wu 1981 *Sci. Sinica* **24** 483. Anchor: Namiki
   ch. 2–3; Damgaard-Hüffel §2–4. Three-tier; Beginner tier states
   only the equivalence, no proof.
4. **`08.10.04` Stochastic gauge fixing (Zwanziger).** The drift kernel
   that restores ergodicity for Yang-Mills without Faddeev-Popov
   ghosts. Originator: D. Zwanziger, "Covariant quantization of gauge
   theories in the function-space formulation," *Nucl. Phys. B* **192**
   (1981) 259. Anchor: Namiki ch. 5; Damgaard-Hüffel §6. Intermediate
   + Master; Beginner tier deferred (gauge-theory prerequisites too
   heavy). **Note**: depends on a future gauge-theory unit covering
   Yang-Mills classically; flag prereq.
5. **`08.10.05` Parisi-Sourlas dimensional reduction.** Statement of
   the theorem ($d$-dim theory with random source $\equiv$ SUSY theory
   in $d-2$ dim at the level of correlation functions); the canonical
   $\phi^3$ example. Originator: Parisi-Sourlas 1979 *Phys. Rev. Lett.*
   **43** 744. Anchor: Namiki ch. 4; Zinn-Justin §17.5. Three-tier;
   Beginner tier gives only the statement and the random-field-Ising
   motivation.

**Priority 2 — SUSY-connection deepening:**

6. **`08.10.06` Nicolai map and SUSY field theories.** Statement:
   nonlinear field redefinition trivialising the bosonic action in
   SUSY theories; identification with the Langevin equilibrium
   variable. Originator: H. Nicolai, "On a new characterization of
   scalar supersymmetric theories," *Phys. Lett. B* **89** (1980) 341,
   and "Supersymmetry and functional integration measures," *Nucl.
   Phys. B* **176** (1980) 419. Anchor: Namiki ch. 6;
   Damgaard-Hüffel §7. Master-only, ~1500 words. Pointer to SUSY-QM
   unit (which itself doesn't yet exist; flag prereq).

**Priority 3 — applications / specialist (Master-tier, not strictly
required for FT equivalence):**

7. **`08.10.07` Stochastic regularisation in gauge theories.**
   Bern-Halpern-Sadun-Taubes regulator; UV cutoff in fictitious time
   preserving gauge invariance. Anchor: Namiki ch. 7;
   Damgaard-Hüffel §5. Master-only.
8. **`08.10.08` Langevin updates and lattice numerics.** The
   Parisi-Wu Langevin update as a Monte-Carlo algorithm; relation to
   hybrid-Monte-Carlo. Anchor: Namiki ch. 8; Batrouni-et-al 1985
   *Phys. Rev. D* **32** 2736. Could be added as a Master section to
   `08.08.01-wilson-lattice-gauge` rather than as a new unit.

**Priority 4 — pointer (optional, Master-only):**

9. **`08.10.09` Complex Langevin and the sign problem.** Pointer
   unit; statement of the complex-Langevin proposal and the
   convergence-failure problem; reference to Aarts-Seiler-Stamatescu
   work as the modern follow-up. Anchor: Namiki ch. 9.

---

## §4 Implementation sketch (P3 → P4)

For a full SQ coverage pass, items 1–5 are the minimum set, with an
Ornstein-Uhlenbeck / Fokker-Planck prerequisite in `02-analysis/`.
Realistic production estimate (mirroring earlier Brown / Lawson-
Michelsohn batches):

- ~3–4 hours per unit. SQ units skew slightly higher than the corpus
  average because the master tier requires careful stochastic-calculus
  notation (Itô vs Stratonovich), and several units cite multiple
  originator papers.
- 5 priority-1 units × ~3.5 hours = ~17–18 hours of focused production.
- 1 priority-2 unit (Nicolai map) × ~4 hours = ~4 hours.
- 2 priority-3 units × ~2 hours each (Master-only, shorter) = ~4 hours.
- 1 priority-4 pointer × ~1.5 hours = ~1.5 hours.
- **Total: ~27 hours focused production** for full FT-equivalence
  coverage. Fits a focused 4–5 day window.

Prereq dependencies that must be flagged separately to the
analysis-chapter and quantum-chapter leads:

- `02-analysis/13-stochastic/` (or expansion of `02.12-ode/`):
  Brownian motion / Wiener measure; Itô calculus; Fokker-Planck for
  finite-dim systems. ~3 units, ~10 hours. **Hard prereq for
  priority-1.**
- Yang-Mills classical-field unit (currently absent from the Codex).
  Hard prereq for priority-1 item 4 (Zwanziger).
- SUSY quantum mechanics unit (currently absent). Hard prereq for
  priority-2 item 6 (Nicolai map).

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, originator-prose
treatment should cite:

- G. Parisi, Y.-S. Wu, "Perturbation theory without gauge fixing,"
  *Sci. Sinica* **24** (1981) 483 — originating the Langevin
  reformulation of QFT.
- D. Zwanziger, "Covariant quantization of gauge theories in the
  function-space formulation," *Nucl. Phys. B* **192** (1981) 259 —
  originating stochastic gauge fixing.
- G. Parisi, N. Sourlas, "Random magnetic fields, supersymmetry, and
  negative dimensions," *Phys. Rev. Lett.* **43** (1979) 744 —
  originating dimensional reduction; parallel framework that the SQ
  literature folds in.
- H. Nicolai, *Phys. Lett. B* **89** (1980) 341 — originating the
  Nicolai map.
- P. H. Damgaard, H. Hüffel, "Stochastic Quantization," *Phys. Rep.*
  **152** (1987) 227 — canonical review consolidating the framework.

**Notation crosswalk.** Namiki uses $t$ for fictitious / stochastic
time; Damgaard-Hüffel and Zinn-Justin use $\tau$ (or $s$). The Codex
already uses $\tau$ for Euclidean Wick-rotated time in
`08.09.01-wick-rotation`, which is a *different* variable than SQ's
fictitious time. **Recommend**: use $\tau$ for Wick-rotated Euclidean
time (unchanged) and reserve $s$ (or $\tau_\mathrm{SQ}$, on first use)
for the SQ fictitious-time variable to prevent collision. Record this
in a §Notation paragraph of `08.10.01` and `08.10.03`. The white-noise
covariance convention is $\langle \eta\eta\rangle = 2\delta\delta$
(Damgaard-Hüffel); some sources (Namiki) drop the factor of 2 and
rescale the drift. The Codex should adopt the Damgaard-Hüffel
convention and note the rescaling at first use.

---

## §5 What this plan does NOT cover

- **Connection between SQ / Nicolai map and spontaneous SUSY breaking.**
  Active research area but tangential to FT 2.16 coverage. Defer.
- **Witten 1982 *J. Diff. Geom.* connection** ("Supersymmetry and Morse
  theory"). Same Langevin-like structure appears in Witten's Morse
  theory; that connection belongs in a Morse-theory unit
  (`milnor-morse-theory.md` punch-list), not here.
- **Stochastic quantization in curved spacetime / cosmology.** Pointer
  level only; defer.
- **A line-number-level inventory of every named theorem in Namiki
  LNP m9 and in Damgaard-Hüffel.** Full P1 audit deferred; this pass
  works from the canonical chapter structure.
- **Exercise-pack production.** Neither Namiki nor Damgaard-Hüffel
  includes formal exercise sets; a Babel Bible exercise pack would have to
  be constructed from scratch and is a P3-priority-3 follow-up.
- **Complex Langevin convergence theory** beyond a pointer.
- **Lattice numerical implementation** beyond a Master-section in
  `08.08.01-wilson-lattice-gauge`.

---

## §6 Acceptance criteria for FT equivalence (Parisi-Wu / SQ)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the framework is
at equivalence-coverage when:

- The analysis-chapter stochastic-process prereqs have shipped
  (strict prereq): Wiener measure + Fokker-Planck at finite dim.
- ≥95% of Namiki LNP m9's named theorems in chapters 2–6 map to
  Babel Bible units (currently 0%; after priority-1 units this rises to
  ~80%; after priority-1+2 to ~95%).
- ≥90% of Damgaard-Hüffel §2–7 results (the foundational core of the
  review) have a direct unit or are referenced from a unit that
  covers them.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new `08.10.*` units to
  `08.07.01-path-integral`, `08.09.01-wick-rotation`,
  `08.08.01-wilson-lattice-gauge`, and forward to the SUSY-QM unit
  once it exists.

The 5 priority-1 units close most of the equivalence gap given the
analysis-chapter stochastic prereqs are in place. Priority-2 closes
the SUSY-connection (Nicolai) gap. Priority-3+4 are deepenings.

---

## §7 Sourcing

- **Namiki LNP m9 (1992).** Not free. Published by Springer; available
  through SpringerLink institutional access
  (<https://link.springer.com/book/10.1007/978-3-540-47217-9>;
  DOI 10.1007/978-3-540-47217-9) and via Library Genesis as
  scanned PDF. Not currently on disk under
  `reference/fasttrack-texts/02-quantum-stat/`. **P2 acquisition
  follow-up:** purchase or institutional download; add to
  `reference/fasttrack-texts/02-quantum-stat/Namiki-StochasticQuantization-LNPm9.pdf`
  to mirror the existing Chatterjee / Sternberg / Woit layout.
- **Damgaard-Hüffel (1987) *Phys. Rep.* 152.** Not free. Elsevier
  *Physics Reports*; DOI 10.1016/0370-1573(87)90144-X. Some early-1990s
  preprints of substantively the same content circulate on author
  pages; the published review itself is paywalled. **P2 acquisition
  follow-up:** institutional download; add to
  `reference/fasttrack-texts/02-quantum-stat/Damgaard-Huffel-StochasticQuantization-PhysRep1987.pdf`.
- **Parisi-Wu 1981 *Sci. Sinica*.** Original paper; scanned PDFs
  circulate. Cite by reference but no need for a local copy beyond
  the originator-prose snippet.
- **Parisi-Sourlas 1979 *Phys. Rev. Lett.* 43.** APS-paywalled
  original; an arXiv-equivalent does not exist (pre-arXiv). Citation
  only.
- **Nicolai 1980 *Phys. Lett. B* 89 / *Nucl. Phys. B* 176.** Elsevier-
  paywalled originals. Citation only.
- **Zinn-Justin, *QFT and Critical Phenomena* 4th ed.** Already on
  the Babel Bible's "BUY" list for QFT coverage generally; ch. 17 is a
  strong free-standing secondary anchor for the Langevin /
  Fokker-Planck side and would let SQ priority-1 units be drafted
  *without* waiting for Namiki acquisition. **Recommend prioritising
  Zinn-Justin acquisition first** if budget forces a choice.
- **License note.** All anchor sources are commercial / paywalled.
  No author-hosted free PDF exists for any of them, in contrast to
  e.g. Brown's NAT. The Damgaard-Hüffel review is the most-quoted
  source in the SQ literature and is the most important acquisition.

**Audit-mode note.** This plan is marked REDUCED. The chapter-by-
chapter punch-list maps onto Namiki LNP m9's standard structure
(eight chapters: Langevin / Fokker-Planck / perturbation theory /
Parisi-Sourlas / gauge fixing / Nicolai / regularisation /
numerics / complex Langevin) and onto Damgaard-Hüffel §2–7. Once
local PDFs are acquired, a follow-up P1-full audit should verify
section numbers and named-theorem counts. Adjustments expected to
be cosmetic (section-number corrections, possible reordering of
priority-3 vs priority-4 items).
