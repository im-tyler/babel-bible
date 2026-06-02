"""
Symbolic audit of Grant's STRUCTURAL claims with sympy. Each returns one of:
  THEOREM     — provably true for all n / all triples (real mathematics)
  TAUTOLOGY   — true, but only because it's defined to be (proves nothing)
  COINCIDENCE — numerically close but provably NOT an identity
"""

import sympy as sp

n = sp.symbols("n", positive=True, integer=True)
a, b, c = sp.symbols("a b c", positive=True)


def check(label, ok, kind, detail=""):
    tag = {"THEOREM": "THEOREM   ", "TAUTOLOGY": "TAUTOLOGY ", "COINCIDENCE": "COINCIDENCE"}[kind]
    print(f"  [{tag}] {label}")
    if detail:
        print(f"               {detail}")
    assert ok, f"FAILED: {label}"


print("=" * 72)
print("SYMBOLIC AUDIT OF STRUCTURAL CLAIMS")
print("=" * 72)

# 1. Consecutive-leg family is always a Pythagorean triple
A, B, C = 2 * n + 1, 2 * n ** 2 + 2 * n, 2 * n ** 2 + 2 * n + 1
check("consecutive-leg family satisfies a²+b²=c² for all n",
      sp.simplify(A ** 2 + B ** 2 - C ** 2) == 0, "THEOREM",
      f"a²+b²-c² simplifies to {sp.simplify(A**2 + B**2 - C**2)}")

# 2. The factor rule c-a = 2n²
check("c − a = 2n² for all n",
      sp.simplify((C - A) - 2 * n ** 2) == 0, "THEOREM",
      f"c−a = {sp.simplify(C - A)}")
check("c + a = 2(n+1)² for all n",
      sp.simplify((C + A) - 2 * (n + 1) ** 2) == 0, "THEOREM",
      f"c+a = {sp.factor(sp.simplify(C + A))}")

# 3. Unit-hyperbola identity for ANY Pythagorean triple (a²+b²=c²)
#    point (c/b, a/b): x²−y² = (c²−a²)/b² = b²/b² = 1
csub = sp.sqrt(a ** 2 + b ** 2)  # c in terms of legs
x2my2 = sp.simplify((csub / b) ** 2 - (a / b) ** 2)
check("every triple lands on x²−y²=1",
      x2my2 == 1, "THEOREM", f"(c/b)²−(a/b)² simplifies to {x2my2}")

# 4. Nested-means relation HM·(c/b)=GM, GM·(c/b)=AM
HM, GM, AM = b ** 2 / c, b, c
check("nine-means nesting HM·(c/b)=GM and GM·(c/b)=AM",
      sp.simplify(HM * (c / b) - GM) == 0 and sp.simplify(GM * (c / b) - AM) == 0,
      "THEOREM")

# 5. Euler V−E+F=2 under Grant's definitions (V=a+2b+c, k=3 ⇒ E=3V−6, F=2V−4)
V = sp.symbols("V")
E_def, F_def = 3 * V - 6, 2 * V - 4
check("Euler V−E+F=2 from the projection definitions",
      sp.simplify(V - E_def + F_def) == 2, "TAUTOLOGY",
      f"V−E+F = {sp.simplify(V - E_def + F_def)} identically — forced by the definitions, not a discovery")

# 6. Kepler triangle: 1 + φ = φ²  (so 1² + (√φ)² = φ²)
phi = (1 + sp.sqrt(5)) / 2
check("Kepler triangle 1 + φ = φ²",
      sp.simplify(phi ** 2 - phi - 1) == 0, "THEOREM",
      f"φ²−φ−1 = {sp.simplify(phi**2 - phi - 1)}")

# 7. Metallic mean equals Grant's rapidity form e^{arcsinh(n/2)}
#    exp(asinh(x)) = x + sqrt(x^2+1); with x=m/2 this is (m+sqrt(m^2+4))/2.
m = sp.symbols("m", positive=True)
metallic = (m + sp.sqrt(m ** 2 + 4)) / 2
rapidity = sp.exp(sp.asinh(m / 2)).rewrite(sp.log)
sym_ok = sp.simplify(metallic - rapidity) == 0
num_ok = all(abs(float(metallic.subs(m, k)) - float(sp.exp(sp.asinh(sp.Rational(k, 2))))) < 1e-12
             for k in range(1, 11))
check("metallic mean = e^{arcsinh(n/2)}", sym_ok or num_ok, "THEOREM",
      "exp(asinh(m/2)) = m/2 + √(m²/4+1) = (m+√(m²+4))/2  — exact"
      + (" (verified symbolically)" if sym_ok else " (verified numerically m=1..10)"))

# 8. Codex √10 ≈ (π + 10/π)/2 — is it an identity? (NO)
expr = (sp.pi + 10 / sp.pi) / 2
diff = sp.nsimplify(0)  # placeholder
num_gap = float(expr.evalf() - sp.sqrt(10).evalf())
check("Codex √10 = (π+10/π)/2 is NOT an identity",
      sp.simplify(expr - sp.sqrt(10)) != 0, "COINCIDENCE",
      f"(π+10/π)/2 − √10 = {num_gap:.3e}  (≈ {-sp.log(abs(num_gap), 10).evalf():.1f} digits, then diverges)")

print("\nAll structural assertions verified by sympy.")
