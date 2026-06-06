# Katok-Hasselblatt — *Introduction to the Modern Theory of Dynamical Systems* — COMPLETENESS re-audit

- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **date:** 2026-06-05
- **context:** Re-audit after Spine 4 (dynamical systems) was fully produced. The
  prior `katok-hasselblatt.gaps.md` listed 9 gaps against an **empty** `38-dynamics`
  skeleton. All 9 are now SHIPPED (see "Prior gaps — now CLOSED"). This pass checks
  the **larger** corpus for any K-H headline theorem STILL genuinely absent.

## Method

Enumerated K-H's headline theorems chapter by chapter and grepped each against
`content/38-dynamics/` and the whole `content/` tree (filename + body). The shipped
38.* spine is dense and cross-referenced; nearly every K-H headline now has a home,
often as a named theorem inside a sibling unit. Deferred items from the first audit
(twist maps / Aubry-Mather; KAM, which lives in the symplectic spine `05.09.*`) are
NOT re-proposed, per brief.

## Prior gaps — now CLOSED (verification)

| prior gap | shipped unit |
|---|---|
| rotation number / Poincaré classification + Denjoy | `38.01.05` |
| hyperbolic sets / Anosov / Axiom-A / Smale spectral decomposition | `38.03.01` |
| Smale horseshoe + Smale-Birkhoff homoclinic theorem | `38.03.02` |
| Hadamard-Perron stable/unstable manifold theorem | `38.03.03` |
| shadowing + structural stability | `38.03.04` |
| Oseledets multiplicative ergodic theorem / Lyapunov exponents | `38.07.01` |
| Pesin theory + entropy formula (with Margulis-Ruelle inequality) | `38.07.02` |
| Hopf argument (geodesic / Anosov ergodicity) | `38.07.03` |

## Additional K-H headlines confirmed COVERED on the larger corpus (not gaps)

- **Markov partitions / symbolic coding of hyperbolic sets (Bowen-Sinai)** — stated
  as a named theorem inside `38.03.01` (finite-to-one SFT semiconjugacy on each basic
  set; transports entropy, the variational principle, equilibrium states, SRB to the
  transition matrix). Not a standalone unit, but present as a headline statement.
- **Curtis-Hedlund-Lyndon theorem** — full theorem + "global half" proposition in
  `38.02.01`.
- **Gottschalk-Hedlund coboundary theorem** (continuous coboundary over a minimal
  base) — named theorem + easy-direction proposition in `38.01.02`.
- **Anosov closing lemma; expansiveness; local product structure** — `38.03.01`,
  `38.03.04`.
- **Variational principle, topological pressure, equilibrium / Gibbs states, SRB
  measures, measure of maximal entropy** — `38.06.04` (variational principle as
  Theorem 1; pressure cohomology-invariance), with SRB threaded through `38.03.*`,
  `38.07.02`.
- **Topological entropy, Kolmogorov-Sinai entropy + generator theorem, Shannon-
  McMillan-Breiman** — `38.06.01`-`38.06.03`.
- **Perron-Frobenius for SFTs; entropy = log spectral radius; Sturmian / Morse-
  Hedlund complexity** — `38.02.03`, `38.02.01`.
- **Mixing hierarchy; spectral theory; Halmos-von Neumann (discrete-spectrum
  classification)** — `38.05.01`-`38.05.02`.
- **Smooth-conjugacy / small-divisor cohomological equation for circle maps
  (Herman-Yoccoz thread, Arnold tongues / mode locking)** — `38.01.05`, `38.01.04`.
- **KAM / Nekhoroshev / Birkhoff normal form / action-angle** — symplectic spine
  `05.09.*`, `09.08.01` (out of scope per brief; not re-proposed).

---

## NEW GENUINE GAP (1)

### 38.07.04 — The Livšic theorem (cohomological rigidity for hyperbolic systems)

- **id:** `38.07.04`  (FREE — next slot in `07-smooth-ergodic-theory/`)
- **title:** The Livšic theorem — periodic-orbit obstruction and cohomological rigidity over Anosov systems
- **spec:** Let $f$ be a topologically transitive Anosov diffeomorphism (or the
  restriction to a locally maximal transitive hyperbolic set) and $\varphi$ a Hölder
  (or $C^1$) real-valued function. **Livšic's theorem:** $\varphi$ is a Hölder
  coboundary, $\varphi = h\circ f - h$ for some Hölder $h$, **if and only if** the
  periodic-orbit sum vanishes on every periodic point, i.e.
  $\sum_{k=0}^{n-1}\varphi(f^k p)=0$ whenever $f^n p = p$. The periodic-orbit data is
  therefore a complete obstruction to solving the cohomological equation. Proof via
  the shadowing/closing lemma and Hölder control along stable/unstable manifolds
  (the transfer function is built on a dense orbit and extended by Hölder
  estimates). Corollaries: two Hölder potentials are cohomologous iff their periodic
  sums agree (hence Gibbs/equilibrium-state and SRB rigidity, the marked-length-
  spectrum / smooth-classification program for Anosov and geodesic flows); the
  measurable-rigidity strengthening (a measurable solution is automatically Hölder).
  Contrast explicitly with `38.01.02` Gottschalk-Hedlund (continuous coboundary over
  a **minimal**, non-hyperbolic base, criterion = bounded Birkhoff sums) and with the
  small-divisor cohomological equation of `38.01.05`/`38.01.04` (rotations, Diophantine
  obstruction): Livšic is the **hyperbolic** cohomology theorem, where the obstruction
  is the discrete set of periodic-orbit averages rather than boundedness or arithmetic.
- **prereqs:** `38.03.01` (transitive Anosov / hyperbolic sets), `38.03.04`
  (shadowing / closing lemma — the engine of the proof), `38.07.03` (Hopf argument /
  Hölder regularity along the foliations — sibling Anosov-ergodicity machinery);
  cross-ref `38.01.02` (Gottschalk-Hedlund, the minimal-base contrast) and `38.06.04`
  (pressure cohomology-invariance / equilibrium states the rigidity feeds).
- **chapter:** `smooth-ergodic-theory`; `section: dynamics`
- **source_book:** katok-hasselblatt
- **source_curriculum:** dynamics
- **why a gap:** K-H Ch. 19 §19.2 (Theorem 19.2.1, the Livšic cohomology theorem),
  the foundational result of the smooth-rigidity program. Body grep for
  `Livsic|Livšic|Livshitz` over the **entire** `content/` tree returns zero hits.
  The corpus carries three *adjacent but distinct* cohomology results — Gottschalk-
  Hedlund over a minimal base (`38.01.02`), the small-divisor rotation equation
  (`38.01.04`/`38.01.05`), and pressure cohomology-invariance (`38.06.04`) — but **none**
  states the periodic-orbit obstruction over a hyperbolic system, which is the
  mechanism behind equilibrium-state/SRB rigidity, the marked-length-spectrum
  results, and smooth classification of Anosov systems. Genuinely absent, of real
  value, and distinct from everything shipped.

---

## NOT proposed (considered and rejected)

- **Sharkovskii's theorem / period-forcing for interval maps** — genuinely absent
  from the corpus, but **not a Katok-Hasselblatt headline**: K-H does not develop
  one-dimensional combinatorial period-forcing (it belongs to Devaney / de Melo-van
  Strien interval dynamics, a different book). Out of scope for THIS book's audit.
- **Anosov-Katok approximation-by-conjugation** — a K-H-flavored construction but a
  research technique, not a textbook headline theorem; low curriculum value, skip.
- **Twist maps / Aubry-Mather** — deferred per brief; KAM lives in `05.09.*`.

## DRY?

DRY — 1 new genuine gap: `38.07.04` Livšic cohomological-rigidity theorem (K-H Ch. 19); all other K-H headline theorems are now COVERED by the produced 38.* spine.
