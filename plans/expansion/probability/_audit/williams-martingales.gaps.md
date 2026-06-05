# Audit: Williams — *Probability with Martingales*

Audited against `content/` on 2026-06-05. Spine `probability` (`content/37-probability/`),
with measure-theoretic foundations under `content/02-analysis/07-measure-theory/` and
continuous-time martingale-adjacent material under `content/02-analysis/15-stochastic-analysis/`.

**Verdict.** Williams' measure-theory foundations (π-systems / monotone class, Caratheodory
extension, independence as product measure, Borel-Cantelli, Fatou/MCT/DCT, L^p, product
measures, Radon-Nikodym) are all COVERED in the mature `02-analysis/07-measure-theory`
chapter. The genuine gaps are the **discrete-time martingale theory** that is the book's
spine (Chapters 10-14): it exists in the corpus only as *mentions* and proof-outlines —
Doob's martingale convergence appears as a Radon-Nikodym corollary in 02.07.08 (stated, not
developed); Doob's L^2 / maximal inequality and BDG appear in the *continuous-time* Ito unit
02.15.02. No unit develops the discrete-time machine: filtrations/stopping times in discrete
time, the upcrossing lemma, the optional-stopping theorem, Doob's L^p inequalities, uniform
integrability of martingales, and the martingale routes to SLLN and the 0-1 law. The target
chapter `37.04` is an empty skeleton. These are the 3 gaps below.

NOTE FOR PRODUCER (Durrett dedup): all three gaps are **core discrete-time martingale theory**
and overlap heavily with a Durrett audit running in parallel. If Durrett proposes the same
units in 37.04, dedupe to a single id per topic — these are not Williams-specific. Williams'
distinctive emphases (the upcrossing proof of convergence, optional stopping as the organizing
theorem, UI as the bridge to L^1 convergence and the SLLN proof via the reversed/backward
martingale) should be preserved whichever book's spec wins.

---

## GENUINE GAPS

### 37.04.01 — Discrete-time martingales, stopping times, and the optional-stopping theorem
- **id:** `37.04.01`
- **title:** Discrete-Time Martingales, Stopping Times, and Optional Stopping
- **spec:** Filtrations, adapted/predictable processes, (sub/super)martingales in discrete time; the martingale transform ("you can't beat the system"); stopping times and the stopped process; Doob's optional-stopping theorem under the three standard boundedness conditions, with the gambler's-ruin / simple-random-walk applications.
- **prereqs:** `02.07.08` (conditional expectation as Radon-Nikodym derivative; tower/Jensen/L^2-projection properties), `02.07.05` (Fatou, dominated convergence), `26.02.01` (probability axioms, conditional probability)
- **chapter dir:** `content/37-probability/04-conditional-expectation-martingales/`
- **frontmatter:** `section: probability` · `chapter: 04-conditional-expectation-martingales` · `source_book: williams-martingales` · `source_curriculum: probability`
- **dedup flag:** core martingale theory (Durrett overlap)

### 37.04.02 — The martingale convergence theorem via Doob's upcrossing inequality
- **id:** `37.04.02`
- **title:** Doob's Upcrossing Inequality and the Almost-Sure Martingale Convergence Theorem
- **spec:** Doob's upcrossing lemma bounding expected upcrossings of an interval by an L^1-bounded supermartingale; the a.s. convergence theorem (every L^1-bounded martingale converges a.s. to an integrable limit); contrast with the gap between a.s. and L^1 convergence (limit need not satisfy `M_n = E[M_inf | F_n]` without uniform integrability). The corpus currently states this result only as a proof-outline corollary of Radon-Nikodym in 02.07.08; this unit gives the standalone upcrossing proof.
- **prereqs:** `37.04.01` (martingales, stopping times), `02.07.05` (Fatou's lemma), `02.07.08` (conditional expectation)
- **chapter dir:** `content/37-probability/04-conditional-expectation-martingales/`
- **frontmatter:** `section: probability` · `chapter: 04-conditional-expectation-martingales` · `source_book: williams-martingales` · `source_curriculum: probability`
- **dedup flag:** core martingale theory (Durrett overlap)

### 37.04.03 — Doob's inequalities, uniform integrability, and L^p / L^1 convergence
- **id:** `37.04.03`
- **title:** Doob's Maximal and L^p Inequalities, Uniform Integrability, and L^p-Bounded Martingales
- **spec:** Uniform integrability (UI) and the Vitali / Dunford-Pettis characterization of L^1 convergence; UI martingales and the closure identity `M_n = E[M_inf | F_n]`; Doob's submartingale maximal inequality and the L^p maximal inequality (`p > 1`); convergence of L^p-bounded martingales in L^p; the discrete-time statements underlying the continuous-time Doob/BDG bounds used in 02.15.02. Concludes with the martingale proof of Kolmogorov's strong law of large numbers and the 0-1 law via the tail/backward martingale.
- **prereqs:** `37.04.02` (a.s. convergence), `02.07.06` (L^p spaces, Holder/Minkowski), `02.07.08` (conditional expectation), `02.07.07` (independence as product measure — for the SLLN application)
- **chapter dir:** `content/37-probability/04-conditional-expectation-martingales/`
- **frontmatter:** `section: probability` · `chapter: 04-conditional-expectation-martingales` · `source_book: williams-martingales` · `source_curriculum: probability`
- **dedup flag:** core martingale theory (Durrett overlap)

---

## COVERED (not gaps)

- **σ-algebras, Borel sets, monotone class / π-λ (Dynkin) lemma** — `02.07.01` (Theorem 8, monotone class theorem = generated σ-algebra; π-system uniqueness used throughout 02.07.07).
- **Caratheodory extension / outer measure (construction of P)** — `02.07.02`.
- **Measurable functions; convergence (a.e., in measure); Egorov/Lusin** — `02.07.03`.
- **Lebesgue integral, Monotone Convergence Theorem** — `02.07.04`.
- **Fatou's lemma, Dominated Convergence Theorem** — `02.07.05`.
- **L^p spaces, Holder, Minkowski, completeness** — `02.07.06`.
- **Product measures, Fubini-Tonelli; independence ⇔ product law; E[fg]=E[f]E[g]** — `02.07.07` (Prop 10 + expectation-factorisation).
- **Radon-Nikodym theorem** — `02.07.08`.
- **Conditional expectation (existence/uniqueness; tower, linearity, monotonicity, Jensen, L^2-projection)** — `02.07.08` (Theorem 8, Prop 9). *Stated and properties proven, but as an application of Radon-Nikodym with the existence proof deferred to an exercise; the 37.04 units above take this as a verified prereq rather than re-deriving it. Not a gap.*
- **Doob's martingale convergence theorem (statement)** — `02.07.08` (Theorem 9, Prop 10). *Present only as a Radon-Nikodym corollary with a proof outline; 37.04.02 gives the standalone upcrossing development. The statement-level content is covered.*
- **Borel-Cantelli lemmas (I and II)** — `26.02.01` (advanced section) + used in `02.07.03`, `02.07.05`.
- **Probability axioms (Kolmogorov), conditional probability, Bayes, inclusion-exclusion** — `26.02.01`.
- **Characteristic functions / CLT** — `26.04.01` (sampling/CLT, elementary); deeper Fourier-analytic CLT machinery lives in `02.10.*` (harmonic analysis). Williams' Ch. 16-18 CLT-via-char.-functions is at the corpus's elementary-CLT + harmonic-analysis boundary, not a martingale gap; targeted at spine `37.03` which is out of this book's primary scope.
- **Continuous-time martingales, Doob's L^2 / maximal inequality, Burkholder-Davis-Gundy, exponential martingale, Girsanov** — `02.15.01`, `02.15.02` (these are the continuous-time analogues; Williams is discrete-time, but the named inequalities appear here).

---

## OUT OF SCOPE

- **Kolmogorov 0-1 law / SLLN as standalone non-martingale units** — folded into 37.04.03 as the martingale-method application (Williams' signature). A separate classical-method SLLN unit belongs to spine `37.02` and to any Durrett/Billingsley audit, not here.
- **Radon-Nikodym proof machinery (Hahn-Jordan, Lebesgue decomposition, von Neumann Hilbert-space proof)** — fully developed in `02.07.08`; not re-proposed.
- **Girsanov / change of measure, mathematical finance (Black-Scholes)** — continuous-time, downstream of `02.15.*`; out of Williams' discrete-time scope.
- **Regular conditional probability / disintegration** — beyond Williams' treatment; would belong to an advanced measure-theory or Markov-chain (`37.05`) unit if ever pursued.
