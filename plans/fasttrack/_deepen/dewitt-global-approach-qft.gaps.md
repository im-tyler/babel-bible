# DeWitt *The Global Approach to Quantum Field Theory* (FT 3.44) — first-audit gaps

**Book:** Bryce DeWitt, *The Global Approach to Quantum Field Theory*,
Vols. 1–2 (Oxford 2003). SLUG `dewitt-global-approach-qft`. No prior audit.

**Headline finding.** The corpus is already very strong on DeWitt's
machinery via two independent strands: (i) the Bismut/BGV/Getzler heat-kernel
strand in `03-modern-geometry/09-spin-geometry/` covers the Seeley-DeWitt /
Minakshisundaram-Pleijel coefficients, the small-$t$ asymptotic expansion,
Mehler's formula and the proper-time method at theorem depth; (ii) the
microlocal-QFT-in-curved-spacetime chapter `13-gr-cosmology/09-…/` (11 units)
covers Hadamard states, the renormalised stress-energy tensor by
point-splitting, particle creation via Bogoliubov coefficients, the trace
anomaly, and — crucially — the causal propagator $E = E^- - E^+$ together
with the **covariant symplectic form on the space of solutions** (the free-field
covariant phase space). The one-loop effective action via the proper-time /
heat-kernel representation and functional determinants (Gelfand-Yaglom,
zeta-regularisation) are covered in the path-integral and QED units. After
verification, essentially all of DeWitt's mathematical payload is present.
The single genuine residual gap is the **Peierls bracket for an interacting
theory** — DeWitt's signature construction, which the corpus builds only for
the free (linear) field and never names or extends to the nonlinear case.

Verified against the live corpus on 2026-06-04. Note: the brief's referenced
homes `content/13-gravity/` and `content/13.09` map to the actual dirs
`content/13-gr-cosmology/` and `content/13-gr-cosmology/09-microlocal-qft-curved-spacetimes/`.

---

## Genuine gaps (1)

### Gap 1 — The Peierls bracket and the covariant Poisson structure on the (interacting) solution space

- **id:** `13.09.12` (free — confirmed; highest occupied in the chapter is `13.09.11`).
- **title:** The Peierls bracket and the covariant phase space of an interacting field theory
- **spec:** Define the Peierls bracket $\{A, B\} = D_A^- B - D_A^+ B$ of two on-shell observables via the advanced/retarded effect of perturbing the action by $\epsilon A$ (Green's operators $\tilde G^\pm$ of the Jacobi / linearised field operator $S''[\phi]$ on the solution manifold); prove antisymmetry and the Jacobi identity, exhibit the equivalence with the canonical Poisson/Dirac bracket on a Cauchy slice, and identify the free-scalar case with the Pauli-Jordan kernel $E$ already built in `13.09.02`. This is the manifestly covariant, gauge-invariant Poisson structure underlying DeWitt's global formalism (Vols. 1–2, Chs. 3–4).
- **prereqs (verified to exist):**
  - `13.09.02` (Klein-Gordon on a globally hyperbolic spacetime; constructs $E^\pm$, the causal propagator $E = E^- - E^+$, and the antisymmetric kernel — the free-field special case),
  - `13.09.03` (Hadamard states via wave-front set; upgrades $E$ to the symplectic form on Cauchy-data phase space),
  - `05.02.02` (Poisson bracket and Poisson manifold — the structure to be reproduced covariantly),
  - `09.02.02` (Euler-Lagrange equations / classical field action — the $S[\phi]$ being perturbed),
  - `12.12.01` (canonical QFT — the canonical-quantisation picture the Peierls bracket reproduces without a $3+1$ split).
- **chapter dir:** `content/13-gr-cosmology/09-microlocal-qft-curved-spacetimes/`; frontmatter `section: gr-cosmology`, `chapter: microlocal-qft-curved-spacetimes`.
- **Evidence it is absent:** `grep -rliE "peierls bracket|covariant phase space"` over `content/` returns **zero** hits (the only `Peierls` matches are condensed-matter Peierls distortions in `16.04.02` and substring false-positives in stat-mech). The free-field covariant symplectic structure IS built — `13.09.02:652` and `13.09.03` define the symplectic form $\sigma$ on $\mathcal S = E(C_c^\infty(M))$ via the Pauli-Jordan kernel — but (a) it is never called the Peierls bracket, and (b) it is restricted to the **linear** Klein-Gordon field; DeWitt's construction for an **interacting** action (perturbing $S$ by $\epsilon A$, using the retarded-minus-advanced response of the linearised operator $S''$) is nowhere in the corpus. The unit should be framed as "name + interacting generalisation of the structure 13.09.02/03 already build for the free field," not as new free-field material.
- **Scope note:** genuinely theorem-level (antisymmetry, Jacobi identity, equivalence-to-canonical-bracket are real propositions) and well-supported by existing prereqs, so this clears the bar where the broader DeWitt apparatus does not. Recommend Master-tier-forward depth with `lean_status: none` (Mathlib has no Lorentzian Green's-operator infrastructure, per the Lean section of `13.09.02`).

---

## COVERED (not gaps) — due-diligence trailer

Each DeWitt headline below was checked and found already covered; not proposed.

| DeWitt topic | Existing unit(s) | Evidence |
|---|---|---|
| Causal propagator $E = E^- - E^+$ (Pauli-Jordan); advanced/retarded Green's operators | `13.09.02` | full construction on a globally hyperbolic spacetime (lines 116, 142, 203, 284); $PE=0$, antisymmetry proved as exercises |
| Covariant symplectic form on the space of solutions (free field) | `13.09.02` (line 652), `13.09.03` | symplectic form $\sigma$ on $\mathcal S = E(C_c^\infty(M))$ and on Cauchy-data space; the free-field covariant phase space (the *interacting* lift is Gap 1) |
| Seeley-DeWitt / Minakshisundaram-Pleijel heat-kernel coefficients $a_j(x)$ | `03.09.20` (lines 168–174, 387; Gilkey invariant theory), `03.09.22` (Seeley complex powers + zeta) | covered at index-theorem / spectral-geometry depth |
| DeWitt-Schwinger proper-time / heat-kernel method | `03.09.20` (small-$t$ diagonal asymptotic, Getzler rescaling), `02.13.03` (heat kernel, Duhamel; names the Schwinger-DeWitt expansion), `12.11.04` (Schwinger proper-time effective action) | proper-time apparatus fully present |
| One-loop effective action via proper time / functional determinant | `12.11.04` (lines 777+, Schwinger pair-production rate from the one-loop effective action / fermionic functional determinant), `12.10.01` (effective action by integrating out modes) | shipped |
| Functional determinants (measure / fluctuation determinant) | `12.10.01` (Gelfand-Yaglom theorem, lines 860–880; zeta-regularisation), `12.04.02` (oscillator fluctuation determinant), `03.09.22` (zeta-regularised determinant) | shipped with proof |
| QFT in curved spacetime — Hadamard states | `13.09.03` (wave-front-set / Radzikowski criterion), `13.09.04` (existence via FNW deformation), `13.09.05` (pseudo-differential construction) | three full units |
| Renormalised stress-energy tensor / point-splitting (Hadamard subtraction) | `13.09.06` (Wick polynomials, point-splitting), `13.04.04` ($T_{\mu\nu}$ as functional derivative) | shipped; Wald 1977 prescription |
| Particle creation in curved spacetime (Bogoliubov coefficients) | `13.09.03` (Hawking-spectrum application), `13.09.05` (in/out states, Bogoliubov transformation), `13.09.10` (Hartle-Hawking/Unruh on Schwarzschild) | covered |
| Trace / conformal anomaly | `13.09.07` (Hollands-Wald), `13.09.06`, `13.09.08` (de Sitter) | shipped |
| Unruh effect | `13.09.09` (Bisognano-Wichmann) | shipped |
| Semiclassical Einstein equation / back-reaction | `13.09.06`, `13.09.07` | shipped |
| Wightman / algebraic-QFT axioms (the global field algebra) | `08.10.07` (Wightman W1–W7), `12.14.*` (algebraic QFT) | shipped |
| Faddeev-Popov / ghost determinant / BRST (gauge measure) | `12.10.01` (lines 798, 934, 958), `03.07.31` (BRST cohomology + Faddeev-Popov) | shipped; DeWitt-Faddeev-Popov lineage named |
| Effective action as Legendre transform of $W[J]$ (1PI generating functional) | `12.10.01` (effective action by mode integration), `08.14.03` (large-$N$ effective action) | present as construction, though no single dedicated "1PI effective action" unit — see OUT OF SCOPE |

---

## OUT OF SCOPE — judged outside curriculum scope (3)

- **Vilkovisky-DeWitt unique (reparametrisation-invariant) effective action.** `grep -rliE "vilkovisky|unique effective action"` returns no genuine hits (only Batalin-Vilkovisky/BFV-BRST substring matches in `12.10.01`). This is a deep, specialised frontier construction — a connection and metric on the infinite-dimensional field-configuration manifold to make the off-shell effective action gauge- and field-parametrisation-independent. It has little theorem-level payoff at curriculum depth, depends on apparatus (the configuration-space DeWitt metric, geodesic field coordinates) that the corpus does not build, and is genuinely a research-monograph technique. Do not manufacture a unit.
- **Schwinger quantum action principle** (the variational equation $\delta\langle\text{out}|\text{in}\rangle = (i/\hbar)\langle\text{out}|\delta S|\text{in}\rangle$ as the generating axiom of QFT). Absent (`grep` for "quantum action principle"/"Schwinger action principle" returns only classical-mechanics action-principle false positives in `09.02.02`, `05.00.08`). This is a heuristic *formulation* of dynamics equivalent to the path integral already covered in `12.10.01`; as a standalone it carries low independent theorem-level content and is largely physics-formalism. Could at most be a deepening paragraph in `12.10.01`; not a standalone gap.
- **DeWitt's global condensed (DeWitt-index) notation and the full configuration-space functional apparatus** (Vol. 1, Chs. 1–2): the compressed-index summation/integration convention, functional differentiation conventions, and the supermanifold of fields as a standalone formalism. This is ~100+ pages of notational/technical machinery with no theorem-level payoff of its own; its concrete outputs (the bracket, the effective action, the heat-kernel expansion) are exactly the items handled above. Out of scope as a unit.

---

**Summary:** 1 genuine gap (`13.09.12` Peierls bracket / interacting covariant
phase space); 14 candidate topics verified COVERED; 3 topics judged OUT OF
SCOPE. DeWitt is near-fully covered at FT-equivalence depth via the BGV
heat-kernel strand and the 11-unit microlocal-QFT-in-curved-spacetime chapter;
the residual gap is the narrow "name-it-and-lift-to-interacting" Peierls-bracket
unit.
