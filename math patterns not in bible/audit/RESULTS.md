# Audit Results — what survives, what's ruled out

A rigorous re-examination of Grant's framework: every checkable claim run through
real tooling (Python null models + sympy + scipy; Lean for formal proof) to sort
it into **theorem**, **notable coincidence**, **chance / ruled-out**, **tautology**,
or **under-specified**. Methods are falsification-only — they can confirm-against-chance
or rule out, never manufacture validity.

Reproduce: `python3 null_model.py`, `python3 structural.py`, `python3 forces.py`;
Lean in `lean/` (`lake exe cache get && lake build`).

---

## 1. Constant "derivations" — null-model test (`null_model.py`)

For each claim: how well does Grant's formula agree, vs. how well a menu of equally
simple expressions (π, e, φ, √10, small integers, basic ops) hits **random decoy
targets** of the same magnitude. Exhaustive single-term grammar (9,464 forms) +
600k-sample Monte Carlo.

| Claim | Grant agrees to | Decoys matched that well | Verdict |
|---|---|---|---|
| **mₚ/mₑ = 6π⁵** | 4.73 digits | **0.8%** of decoys (MC ratio ~37×) | **NOTABLE COINCIDENCE** — beats chance, but no mechanism, predicts nothing |
| **α⁻¹ via e^(−π/√10)** | 4.32 digits | **60.8%** of decoys | **CHANCE — ruled out** |
| **Ω_Λ = 493/720** | 4.49 digits | **63.6%** of decoys | **CHANCE — ruled out** |

The headline finding: the harness *discriminates*. It does not blanket-dismiss —
`6π⁵ ≈ mₚ/mₑ` genuinely stands out (a long-known physics curiosity), while the α
and dark-energy "derivations" are exactly what a dense menu produces by accident.
"No free parameters" is false: the post-hoc choice of which formula to present **is**
the parameter, and for α/Ω_Λ that freedom fully explains the hit.

---

## 2. Structural / symmetry claims — symbolic (`structural.py`, sympy)

| Claim | Verdict |
|---|---|
| Consecutive-leg family is always Pythagorean | **THEOREM** |
| c − a = 2n²  and  c + a = 2(n+1)² | **THEOREM** (and 2n² genuinely = electron-shell capacities) |
| Every triple lands on x² − y² = 1 | **THEOREM** |
| Nine-means nesting HM·(c/b)=GM, GM·(c/b)=AM | **THEOREM** |
| Kepler triangle 1 + φ = φ² | **THEOREM** |
| Metallic mean = e^{arcsinh(n/2)} | **THEOREM** |
| Euler V − E + F = 2 from the projection defs | **TAUTOLOGY** — forced by definition; proves nothing |
| Codex √10 = (π + 10/π)/2 | **COINCIDENCE** — agrees to ~4.2 digits then diverges (gap 6.8×10⁻⁵) |

The real-math core is genuinely real and now machine-checkable. The two "impressive"
geometric claims collapse: Euler is a tautology, the √10 "resonance" is a near-miss.

---

## 3. Force → triple assignment — correlation (`forces.py`, scipy)

Grant's rapidity θ = atanh(a/c) is fixed entirely by the chosen triple, with no
measured input. Tested against the real relative strengths of the four forces:

- θ spans **0.18–0.51** (a 3× range); real strengths span **~38 orders of magnitude**.
- Spearman ρ(θ, log strength) = **−0.80** (p = 0.20) — if anything anti-correlated, not significant.
- Strength order (strong→EM→weak→gravity) ≠ θ order (strong→weak→EM→gravity).

**Verdict: arbitrary — ruled out as physics.**

---

## 4. Formal proofs — Lean 4 + Mathlib (`lean/Audit.lean`)

**VERIFIED** — `lake build` succeeds (8476 jobs, exit 0, no `sorry`). Machine-checked
statements of the genuine theorems (`family_pythagorean`, `factor_c_sub_a/add_a`,
`unit_hyperbola`, `nine_means_nesting`, `kepler_golden`) and `euler_is_forced` — the
last labelled as the tautology it is. Details in `lean/BUILD.md`.

---

## 5. Under-specified — cannot be tested from public sources

Not ruled out, not confirmed — Grant's public material doesn't pin them down enough:

- **Madelung from the Nine Means** — the exact sort key isn't specified.
- **Kai ≈ 8.88** — construction not given.
- **Isotope 60/61 factor "99.96%"** — the data is real, but the accuracy provably
  belongs to the standard semi-empirical mass formula; a fair test (does 60/61 beat
  the SEMF alone?) needs his exact pipeline. Argued, not yet Monte-Carlo'd.
- **Galaxy color–pitch r = −0.953** — needs his specific 50-galaxy sample.

---

## 6. Prior work, attribution & what's novel here

Most of this report — both Grant's claims and the skeptical verdicts — is **not new**.
Crediting prior work is part of the discipline, and we applied it to our own citations
too: arXiv:0710.3543 turned out to be Carter's *anthropic* coincidences (arguing the
opposite), so it is cited as related-but-distinct, not as support.

**The critique of Grant is already on record (security / skeptic community).**
His company Crown Sterling's cryptography ("quasi-primes break RSA," TIME AI) was widely
debunked in 2019 — Bruce Schneier called it "snake oil," cryptographer J.-P. Aumasson
listed every snake-oil hallmark, Black Hat pulled his talk (he sued), and RationalWiki
files Crown Sterling under numerology / pseudoscience. **Caveat:** that critique targeted
his *cryptography*; the *Codex Universalis* mathematics (force triangles, the constant
"derivations") had not been audited claim-by-claim. That gap is what this report fills.

**The "discoveries" are largely recycled — attribution:**

| Grant's claim | Actually originates as | Our verdict |
|---|---|---|
| `6π⁵ ≈ mₚ/mₑ` | Friedrich Lenz, *Phys. Rev.* 1951; skeptically revisited in *Nature* (1983), "The Temptations of Numerology" | notable coincidence (null model: 0.8%) |
| `√10 ≈ (π+10/π)/2` | generic constant-numerology near-miss | coincidence (diverges ~4 digits) |
| Pythagorean families, metallic means, Kepler triangle, nine-means nesting | standard textbook mathematics, centuries old, renamed | theorems (kept) |
| Euler V−E+F=2 "proof" | Euler's polyhedron formula (1750s); forced by the definitions | tautology |
| quasi-primes / digital-root-9 | base-10 modular-arithmetic folklore | real but trivial; no path to RH |
| "Proof of the Riemann Hypothesis" | RH is an open Clay Millennium Problem | not accepted |

**Our falsification method is orthodox, not novel.**
Distrusting numerology of constants is old: Eddington's "fundamental theory" (deriving
1/α and a proton count of the universe from pure number) is the canonical cautionary tale.
The statistical core of our null model is the **look-elsewhere / multiple-comparisons
effect** — with a large enough menu of constants and operations, near-hits to any target
are expected, and the post-hoc choice of formula is the hidden free parameter.

**What is genuinely ours.** Not the claims, and not the verdict that the framework is
mostly numerology — both pre-exist. The contribution is the *method applied to this
specific target, in full*:
1. **claim-by-claim**, not a blanket dismissal;
2. **quantified** — decoy-controlled null models give each "derivation" a chance
   probability, which *discriminated* `6π⁵` (real coincidence) from α⁻¹/Ω_Λ (chance);
3. **machine-verified** — Lean separates theorem from tautology from coincidence formally;
4. **reproducible** — every number regenerates from the scripts.

That consolidated, orthodox audit of the Codex framework did not previously exist.

---

## 7. Carryover — what goes into the original product

**Keep (real, survives scrutiny):**
- The whole THEOREM list above — the genuine mathematical core.
- 2n² ↔ electron-shell capacity (real identity, real significance).
- The metallic-means / Kepler / hyperbola / nine-means structure.

**Keep as honestly-framed curiosity (labelled):**
- `6π⁵ ≈ mₚ/mₑ` — present it as a famous coincidence with the null-model result
  attached, not as a derivation. The falsification *method itself* becomes a feature.

**Exclude as fact (ruled out / tautology / unprovable):**
- α⁻¹ and Ω_Λ "derivations" (chance), the force→triple physics (arbitrary),
  √10 "identity" (coincidence), Euler "proof" (tautology), the RH proof and
  zero-variance prime claim, galaxy = element.

The original product = the THEOREM core + the falsification harness as its
spine: *here is the real mathematics, and here is exactly how we tested the rest.*

---

## References

- F. Lenz, "The Ratio of Proton and Electron Masses," *Phys. Rev.* **82**, 554 (1951) — the original 6π⁵ observation.
- "The Temptations of Numerology," *Nature* editorial (1983) — skeptical treatment of the 6π⁵ ratio (as reported in Physics Today and the Wikipedia entry below).
- Proton-to-electron mass ratio — Wikipedia: https://en.wikipedia.org/wiki/Proton-to-electron_mass_ratio
- "A reminder of the powers of π" — Physics Today letters: https://physicstoday.aip.org/letters/a-reminder-of-the-powers-of-%CF%80
- B. Schneier, "The Doghouse: Crown Sterling" (2019): https://www.schneier.com/blog/archives/2019/09/the_doghouse_cr_1.html
- RationalWiki, "Crown Sterling": https://rationalwiki.org/wiki/Crown_Sterling
- DataBreaches.net, on Time AI / Crown Sterling (2019): https://databreaches.net/2019/11/07/if-robert-grant-didnt-like-having-time-ai-called-snake-oil-cryptography-hes-really-going-to-hate-what-hes-being-called-now/
- Secjuice, "Mystical Mathematics & Snake Oil": https://www.secjuice.com/whippy3/
- B. Carter, "The significance of numerical coincidences in nature," arXiv:0710.3543 (2007) — *related but distinct* (anthropic coincidences; argues some are meaningful). Cited to bound scope, not as support.
- A. Eddington, *Fundamental Theory* (1946) — the canonical cautionary example of constant-numerology over-reach.
