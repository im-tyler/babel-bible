# Polymath Audit — does the math hold up?

A rigorous, falsification-first re-examination of every checkable claim in Robert
Edward Grant's framework. The goal is the opposite of the faithful reproduction
(`../site/`): not to present his claims, but to **test** them with real tooling and
keep only what survives. This is the foundation the original product is built on.

**Guiding rule:** every test can only *confirm-against-chance* or *rule out*. None
can manufacture validity. If a claim isn't better than a null model, it's out.

## Layout

| File | What it does | Tooling |
|---|---|---|
| `null_model.py` | "No free parameters" derivations vs. a dense menu hitting random decoys | numpy |
| `structural.py` | Symbolic check of the structural/symmetry claims → theorem / tautology / coincidence | sympy |
| `forces.py` | Does the force→triple θ assignment track real physics? | scipy |
| `lean/Audit.lean` | Machine-checked proofs of the genuine theorems (+ the Euler tautology) | Lean 4 + Mathlib |
| `RESULTS.md` | **The verdicts** — what survives, what's ruled out, what carries over | — |

## Run

```bash
python3 null_model.py     # constant-derivation null models
python3 structural.py     # symbolic theorem/tautology/coincidence audit
python3 forces.py         # force-assignment correlation

cd lean && lake exe cache get && lake build   # formal proofs
```

## Headline findings (see RESULTS.md for full detail)

- **Real theorems** (keep): the consecutive-leg family, c−a=2n², the unit-hyperbola
  identity, nine-means nesting, the Kepler triangle, metallic = e^{arcsinh(n/2)}.
- **Notable coincidence** (keep, labelled): 6π⁵ ≈ mₚ/mₑ stands out beyond chance —
  but has no mechanism and predicts nothing.
- **Ruled out** (chance / tautology / arbitrary): the α⁻¹ and Ω_Λ "derivations",
  the Euler "proof" (forced by definition), the √10 "identity", the force→triple
  physics, the Riemann proof, galaxy = element.
- **Under-specified** (untestable from public sources): Madelung-from-means, Kai,
  the 60/61 isotope factor's independent contribution, the galaxy correlation.
