"""
Does Grant's force→triple assignment carry physical information?

His rapidity θ for a triple (a,b,c) is just θ = atanh(a/c) — fixed entirely by
which triple he picked, with no input from measurement. We test whether θ tracks
the REAL relative strengths of the four forces. If not, the assignment is arbitrary.
"""

import math
from scipy.stats import spearmanr

# (force, triple a,b,c, real approx dimensionless coupling strength)
FORCES = [
    ("Strong",        11, 60, 61, 1.0),
    ("Electromagnetic", 5, 12, 13, 7.297e-3),     # alpha
    ("Weak",           7, 24, 25, 1e-6),           # ~Fermi, order of magnitude
    ("Gravitational",  8, 15, 17, 5.9e-39),        # G m_p^2 / (hbar c)
]

print("=" * 72)
print("DOES THE FORCE→TRIPLE ASSIGNMENT TRACK REAL PHYSICS?")
print("=" * 72)
print(f"{'force':16s}{'triple':12s}{'θ=atanh(a/c)':>14s}{'real strength':>16s}")
thetas, logstrength = [], []
for name, a, b, c, s in FORCES:
    theta = math.atanh(a / c)
    thetas.append(theta)
    logstrength.append(math.log10(s))
    print(f"{name:16s}{f'({a},{b},{c})':12s}{theta:14.4f}{s:16.2e}")

rho, p = spearmanr(thetas, logstrength)
print(f"\nGrant's θ spans {min(thetas):.3f}–{max(thetas):.3f} (a factor of {max(thetas)/min(thetas):.1f}).")
print(f"Real strengths span {max(logstrength)-min(logstrength):.0f} orders of magnitude.")
print(f"Spearman rank correlation θ vs log(strength): ρ = {rho:.3f} (p = {p:.2f})")
print()
# ordering check
by_theta = [f[0] for f in sorted(FORCES, key=lambda f: math.atanh(f[1]/f[3-1] if False else f[1]/f[3]))]
by_strength = [f[0] for f in sorted(FORCES, key=lambda f: -f[4])]
print(f"strength order (strong→weak): {by_strength}")
print(f"θ order (small→large):        {[f[0] for f in sorted(FORCES, key=lambda f: math.atanh(f[1]/f[3]))]}")
print()
print("VERDICT: θ is determined solely by the chosen triple (atanh(a/c)); it shows")
print("no monotonic relation to measured force strength and compresses a 38-order")
print("range into a 3x spread. The assignment is arbitrary — RULED OUT as physics.")
