"""
Null-model falsification of Grant's "constant derivations."

The claim under test: formulas like 6*pi^5 = m_p/m_e are derivations "with no free
parameters." The null hypothesis: a near-hit to ~4-6 digits is what you EXPECT by
chance, given a menu of constants/integers and a few operations — because the set
of simple closed-form values is dense enough near any O(1)-O(1e3) target.

Two independent tests, each only able to CONFIRM-against-chance or RULE-OUT:

  A. Exhaustive enumeration of single-term forms (p/q)*B^k  — exact counts.
  B. Monte Carlo over a richer expression grammar           — robustness.

Decoy control: the same procedure is run against random "decoy" targets of similar
magnitude. If the physical constant is hit no more often than random decoys, the
"derivation" carries no information beyond coincidence.
"""

import math
import numpy as np
from fractions import Fraction

PHI = (1 + 5 ** 0.5) / 2
BASES = {
    "pi": math.pi, "e": math.e, "phi": PHI,
    "sqrt10": 10 ** 0.5, "sqrt2": 2 ** 0.5, "sqrt3": 3 ** 0.5, "sqrt5": 5 ** 0.5,
    "2": 2.0, "3": 3.0, "5": 5.0, "6": 6.0, "7": 7.0, "10": 10.0,
}
POWERS = [-3, -2, -1, 1, 2, 3, 4, 5]
COEFS = sorted({Fraction(p, q) for p in range(1, 13) for q in range(1, 13)})

TARGETS = {
    "m_p/m_e": dict(value=1836.15267389, grant="6*pi^5", grant_value=6 * math.pi ** 5),
    "alpha^-1": dict(value=137.035999084, grant="100*(e^(-pi/sqrt10)+1)",
                     grant_value=100 * (math.exp(-math.pi / 10 ** 0.5) + 1)),
    "Omega_Lambda": dict(value=0.6847, grant="493/720", grant_value=493 / 720),
}


def rel_err(a, b):
    return abs(a - b) / abs(b)


# ---------- Test A: exhaustive single-term enumeration ----------
def single_term_values():
    """All (p/q)*B^k. Returns array of finite positive values."""
    vals = []
    for B in BASES.values():
        for k in POWERS:
            try:
                bk = B ** k
            except (OverflowError, ValueError):
                continue
            for c in COEFS:
                v = float(c) * bk
                if math.isfinite(v) and v > 0:
                    vals.append(v)
    return np.array(vals)


def best_digits(values, target):
    """Best agreement (significant digits) any expression achieves for target."""
    err = np.min(np.abs(values - target) / abs(target))
    return -math.log10(err) if err > 0 else 99.0


def test_exhaustive(rng):
    values = single_term_values()
    print(f"[A] exhaustive single-term grammar (p/q)*B^k: {len(values):,} expressions\n")
    for name, t in TARGETS.items():
        grant_digits = -math.log10(rel_err(t["grant_value"], t["value"]))
        real_best = best_digits(values, t["value"])
        decoys = t["value"] * np.exp(rng.uniform(math.log(0.5), math.log(2.0), 500))
        decoy_best = np.array([best_digits(values, d) for d in decoys])
        pct = float(np.mean(decoy_best >= real_best) * 100)
        print(f"  {name}  (grant: {t['grant']})")
        print(f"      Grant's formula agrees to        : {grant_digits:.2f} digits")
        print(f"      Best the menu does for the const : {real_best:.2f} digits")
        print(f"      Best the menu does for decoys    : median {np.median(decoy_best):.2f}, "
              f"90th pct {np.percentile(decoy_best, 90):.2f} digits")
        print(f"      P(random decoy matched this well): {pct:.1f}%")
        verdict = ("CHANCE — the menu hits random targets about as well"
                   if pct >= 5 else "stands out beyond the decoy distribution")
        print(f"      -> {verdict}\n")


# ---------- Test B: Monte Carlo over a richer grammar ----------
def random_value(rng):
    """Random expression: atom combined with up to 3 more via +,-,*,/,^."""
    atoms = list(BASES.values())
    v = atoms[rng.integers(len(atoms))]
    for _ in range(rng.integers(0, 4)):
        op = rng.integers(5)
        o = atoms[rng.integers(len(atoms))]
        try:
            if op == 0: v = v + o
            elif op == 1: v = v - o
            elif op == 2: v = v * o
            elif op == 3: v = v / o if o != 0 else v
            else:
                if v > 0 and abs(o) <= 6: v = v ** o   # base>0 avoids complex
        except (OverflowError, ValueError, ZeroDivisionError):
            return None
        if isinstance(v, complex) or not math.isfinite(v):
            return None
    return v


def test_montecarlo(rng, n=600_000):
    vals = np.array([x for x in (random_value(rng) for _ in range(n))
                     if x is not None])
    print(f"[B] Monte Carlo grammar: {len(vals):,} finite real expressions\n")
    for name, t in TARGETS.items():
        eps = rel_err(t["grant_value"], t["value"])
        frac = np.mean(np.abs(vals - t["value"]) / abs(t["value"]) <= eps)
        decoys = t["value"] * np.exp(rng.uniform(math.log(0.5), math.log(2.0), 300))
        dfracs = np.array([np.mean(np.abs(vals - d) / abs(d) <= eps) for d in decoys])
        ratio = frac / dfracs.mean() if dfracs.mean() > 0 else float("inf")
        print(f"  {name}  (Grant agrees to {-math.log10(eps):.1f} digits, eps={eps:.1e})")
        print(f"      P(random expr within eps of constant) = {frac:.3%}")
        print(f"      P(random expr within eps of decoy)    = {dfracs.mean():.3%}  (avg, 300 decoys)")
        print(f"      ratio constant/decoy = {ratio:.2f}  "
              f"-> {'CHANCE (≈1)' if ratio < 3 else 'elevated, investigate'}\n")


if __name__ == "__main__":
    rng = np.random.default_rng(20260601)
    print("=" * 72)
    print("NULL-MODEL FALSIFICATION OF GRANT'S CONSTANT 'DERIVATIONS'")
    print("=" * 72)
    test_exhaustive(rng)
    test_montecarlo(rng)
    print("\nInterpretation: if real constants are hit about as often as random")
    print("decoys, the formulas are coincidences from a dense menu — not derivations.")
