# Lean build status

**VERIFIED.** `lake build` completes successfully (8476 jobs, exit 0), warning-free,
no `sorry`/`admit`. Lean 4.30.0 + Mathlib (rev v4.30.0).

All statements in `Audit.lean` are machine-checked:

| Theorem | Status |
|---|---|
| `family_pythagorean` — consecutive-leg family is always Pythagorean | ✓ proved (`ring`) |
| `factor_c_sub_a` — c − a = 2n² | ✓ proved (`ring`) |
| `factor_c_add_a` — c + a = 2(n+1)² | ✓ proved (`ring`) |
| `unit_hyperbola` — every triple is on x²−y²=1 | ✓ proved (`field_simp`, `linarith`) |
| `nine_means_nesting` — HM·(c/b)=GM, GM·(c/b)=AM | ✓ proved (`field_simp`) |
| `euler_is_forced` — V−E+F=2 under the projection defs | ✓ proved (`ring`) — **tautology by design** |
| `kepler_golden` — φ²=φ+1 | ✓ proved (`nlinarith`) |

Reproduce: `cd lean && lake exe cache get && lake build`.
