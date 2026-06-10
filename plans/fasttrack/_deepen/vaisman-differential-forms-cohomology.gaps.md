# Deepening audit — Izu Vaisman, *Cohomology and Differential Forms* (Fast Track 3.46)

First audit. Classical text; verified each headline against the live corpus.
Result: **1 genuine gap**, near-fully covered otherwise.

---

## GENUINE GAPS (1)

### 1. Godbillon-Vey class / secondary characteristic classes of foliations

- **proposed id:** `03.06.21`  (free slot; 03.06.20 occupied, 03.06.23 occupied, 21/22/25 open)
- **title:** Godbillon-Vey class and secondary characteristic classes of foliations
- **spec:** For a transversely-orientable codimension-1 foliation given by a 1-form ω with dω = ω∧η, the 3-form η∧dη is closed and its de Rham class GV(F) = [η∧dη] ∈ H³(M;ℝ) is a well-defined invariant independent of the choices; state Bott vanishing (Pontryagin classes of the normal bundle vanish above degree 2·codim) as the source of secondary classes, compute GV for the Roussarie/Reeb-type example showing it is non-trivial and varies continuously, and place GV as the first class of the Gelfand-Fuks / WO_q secondary characteristic algebra.
- **prereqs:** `48.02.04` (Frobenius theorem — foliations, leaves, involutive distributions), `03.04.04` (exterior derivative), `03.04.06` (de Rham cohomology), `03.06.06` (Chern-Weil homomorphism), `03.06.07` (Chern-Simons and transgression — secondary/transgressed classes)
- **chapter dir:** `content/03-modern-geometry/06-characteristic-classes/`
- **frontmatter:** chapter 06 (characteristic classes), section "secondary classes / foliations"

**Why this is a real gap.** `grep -rliE "godbillon"` returns nothing. The Frobenius unit (48.02.04) defines foliations and proves the local/global integrability theorem but stops at the integrability structure — no characteristic-class content. The secondary-class machinery exists in the corpus only for flat bundles via Chern-Simons/differential characters (03.06.07), and Bott vanishing is not stated anywhere (`grep -rliE "bott vanishing"` → only incidental hits, no theorem). The Godbillon-Vey class is the canonical theorem-level payoff of foliation theory (continuous moduli of a topological invariant — Thurston) and is a distinctive headline of Vaisman. Genuine high-value addition.

---

## COVERED (not gaps) — due-diligence evidence

- **Sheaf theory & sheaf cohomology** — `04.03.01` (sheaf cohomology, derived-functor + Čech), `04.01.01` (sheaf), `06.04.07` (sheaf cohomology survey).
- **Čech cohomology** — `04.03.03` (Čech for schemes), `06.04.02` (Čech cohomology & line bundles), `03.04.11` (Čech-de Rham double complex).
- **Abstract / sheaf-theoretic de Rham theorem (fine / acyclic resolution computes sheaf cohomology; constant sheaf ℝ resolved by Ω^•)** — `04.03.01` states and uses exactly this; `06.04.07` gives the Dolbeault analogue via fine resolution.
- **De Rham theorem (de Rham ≅ Čech / singular with ℝ coefficients)** — `03.04.11` (Čech-de Rham collapse, sharp form on a good cover), `03.04.13` (singular cohomology and the de Rham theorem, ℤ coefficients).
- **Poincaré lemma / closed-and-exact forms** — `03.04.21`.
- **Mayer-Vietoris** — `03.04.07`. **Künneth** — `03.04.12`. **Good cover** — `03.04.10`.
- **Spectral sequence of a filtered / double complex (incl. exact couples)** — `03.13.01` (exact couples, filtered & double complexes), `04.03.14` (spectral sequence of a filtered complex).
- **Leray spectral sequence of a map** — `04.03.15` (general form), `04.03.13` (Grothendieck SS), `04.03.07` (higher direct images & base change). Topological Leray-Serre at `03.13.02`.
- **Characteristic classes via Chern-Weil / the Weil homomorphism** — `03.06.06` (Chern-Weil homomorphism, invariant-polynomial-of-curvature construction), `03.06.05` (invariant polynomial), `03.06.04` (Chern/Pontryagin classes).
- **Harmonic forms / Hodge theory** — `03.04.15` (Hodge Laplacian, codifferential, elliptic Hodge theorem on compact oriented Riemannian manifolds, harmonic representatives = de Rham classes), `04.09.01` (Hodge decomposition), `06.04.03` (Hodge decomposition on curves).
- **Frobenius theorem / foliations as a structure (leaves, involutive distributions, local+global Frobenius)** — `48.02.04`. (The *characteristic-class* layer on top of this is the gap above.)
- **Thom class / global angular form, compactly-supported cohomology** — `03.04.09`.

---

## OUT OF SCOPE / borderline (1)

- **De Rham's theory of currents (distributional forms; forms-vs-currents duality as the route to the de Rham theorem).** Not covered as a dedicated unit. Judged borderline-out-of-scope: in Vaisman currents function mainly as the analytic apparatus for proving the de Rham duality theorem, and the corpus already establishes that theorem by two independent routes (fine/acyclic resolution at `04.03.01`, Čech-de Rham double complex at `03.04.11`). No additional theorem-level payoff would be unlocked by a standalone currents unit; it would be a technical-apparatus unit. Flag only — do not manufacture.
