# Souriau, *Structure of Dynamical Systems* (FT 2.11) — deepening gap file

**Verdict: nearly fully covered.** The original audit (`plans/fasttrack/souriau-structure-dynamical-systems.md`) was written before the `05-symplectic/` chapter grew to its current ~80 units and explicitly anticipated most of its priority-1 punch-list as "to write". Live-corpus grep shows the overwhelming majority of those items have **since shipped** — including the four the audit flagged as the load-bearing Souriau-distinctive gaps (cocycle, Lie-group thermodynamics, Galilei/Bargmann, prequantisation/Bose-Fermi). Two genuine gaps remain, both structural rather than topical.

Grep keys used: `souriau|cocycle|moment-map|coadjoint|kostant|kirillov|marsden-weinstein|geometric-quantization|presymplectic|classical-spin|maxwell|juttner|twisted symplectic|homogeneous symplectic|elementary system|Lorentz force`.

---

## GENUINE GAPS (2)

### Gap 1 — Classification of homogeneous symplectic G-spaces (KKS exhaustion theorem)

- **proposed id:** `05.03.03` (free; coadjoint dir holds only 05.03.01, 05.03.02)
- **title:** Classification of homogeneous symplectic manifolds (Kirillov-Kostant-Souriau)
- **spec:** State and prove the *converse/exhaustion* half of the orbit method: every connected transitive Hamiltonian action of a Lie group $G$ on a symplectic manifold is, up to covering and the affine cocycle shift, equivariantly symplectomorphic to a coadjoint orbit of the cocycle-extended group $\widetilde{G}$ with its KKS form — so coadjoint orbits of central extensions *exhaust* the homogeneous symplectic manifolds.
- **prereqs:** `05.03.01` (coadjoint orbit / KKS form), `05.04.07` (Souriau cocycle, affine coadjoint action), `05.04.01` (moment map)
- **chapter dir:** `content/05-symplectic/coadjoint/`; frontmatter `section: symplectic`, `chapter: coadjoint`
- **why genuine:** Grep for `transitive Hamiltonian | homogeneous symplectic manifold...coadjoint | covering of a coadjoint orbit | classification of homogeneous symplectic | conversely...exhaust` across `content/` returns **zero** statements of the classification theorem. Existing units state only the *forward* direction — that a coadjoint orbit **is** a symplectic manifold (05.03.01 KKS form; 05.11.05 Borel-Weil for the integral compact case). `05.04.07` builds the affine coadjoint orbit but does not assert it exhausts the transitive case. `05.00.07` mentions "classification of elementary systems by coadjoint orbits" only in a closing Bridge sentence, with no theorem. This exhaustion statement is Souriau's structural headline (Chapter III): the claim that coadjoint orbits are not just examples but *the* classical phase spaces of elementary systems. Genuinely absent at theorem depth.

### Gap 2 — Charged particle and the twisted (magnetic) symplectic form

- **proposed id:** `05.00.05` (free; lagrangian-mechanics holds 01-04, 06-11, 14)
- **title:** Charged particle in an electromagnetic field via the twisted symplectic form
- **spec:** On $T^*Q$ replace the canonical $\omega_0$ by the **twisted form** $\omega_F = \omega_0 + q\,\pi^*F$ for the field 2-form $F$; show the Hamiltonian flow of the free kinetic energy under $\omega_F$ reproduces the Lorentz force, and that for closed but **non-exact** $F$ (the Dirac magnetic monopole) no global vector potential exists so the twisted-form description is essential — the Souriau-distinctive point that minimal coupling is intrinsically a deformation of the symplectic structure, not of the Hamiltonian.
- **prereqs:** `05.02.05` (cotangent bundle, canonical $\omega_0$), `05.02.01` (Hamiltonian vector field), `05.01.02` (symplectic manifold)
- **chapter dir:** `content/05-symplectic/lagrangian-mechanics/`; frontmatter `section: symplectic`, `chapter: lagrangian-mechanics`
- **why genuine:** The charged particle is currently treated **only in Lagrangian / Euler-Lagrange form**: `05.00.09` (worked-lagrangian-examples) does the helical motion via minimal coupling $q\mathbf{A}\cdot\dot r$, and `05.00.14` (Coriolis) draws the Coriolis-as-Lorentz analogy — but its Bridge **forward-references "[05.00.09] ... minimal-coupling term"**, which is mislabelled (05.00.09 has no twisted-symplectic-form content). A broad grep for `twisted symplectic | omega + ... F | magnetic two-form | magnetic monopole...symplectic` over `content/05-symplectic/` and `content/03-modern-geometry/` returns no unit building $\omega_0 + q\pi^*F$ as a symplectic structure or deriving the Lorentz force as its Hamiltonian flow; the only "magnetic" hits are plasma adiabatic-invariant and MHD-dynamo units. Souriau's geometric model of magnetic coupling (Structure §13) has no home unit, and the dangling cross-reference confirms the gap was intended but never filled.

---

## COVERED (not gaps) — verified against live corpus

| Audit-proposed topic | Status | Existing unit(s) (evidence) |
|---|---|---|
| Souriau cocycle / non-equivariant moment map / affine coadjoint action / Bargmann central charge | COVERED (full 3-tier, with proofs) | `05.04.07-souriau-cocycle` |
| Souriau Gibbs state on a symplectic G-space, generalised temperature $\beta\in\mathfrak g$ | COVERED **twice** | `05.03.02-souriau-gibbs-state` (coadjoint) **and** `11.04.02-souriau-gibbs-state-on-a-symplectic-g-space` (partition-functions) |
| Souriau partition function, mean moment, Fisher-information / covariance, free-energy convexity | COVERED | `05.03.02` (free-energy convexity prop) + `11.04.02` (Souriau-Fisher metric, Barbaresco) |
| Recovery of canonical Gibbs ($G=\mathbb R_t$) and relativistic Jüttner / Maxwell-Boltzmann ensembles | COVERED | `11.04.02` (explicit Maxwell-Boltzmann + Jüttner + rotating-ensemble recovery, Marle 2016) |
| Galilei group, Galilei algebra, Bargmann cocycle $[K_i,P_j]=m\delta_{ij}$, mass superselection | COVERED (full 3-tier) | `05.00.07-galilei-bargmann-central-extension` |
| Galilean-Newtonian symplectic setup | COVERED | `05.00.06-galilean-newtonian-setup` |
| Coadjoint orbit + Kirillov-Kostant-Souriau symplectic form (forward direction) | COVERED | `05.03.01-coadjoint-orbit` |
| Prequantum line bundle, connection of curvature $\omega/\hbar$, Souriau-Kostant integrality condition | COVERED | `05.11.01-prequantum-line-bundle-and-the-integrality-condition` |
| Prequantisation of the spin $S^2$ coadjoint orbit; integrality forces $s\in\tfrac12\mathbb Z$ | COVERED | `05.11.02-prequantisation-spin-coadjoint` |
| Polarisations, half-densities, metaplectic correction; geometric quantisation of coadjoint orbits / Borel-Weil | COVERED | `05.11.03`, `05.11.05-geometric-quantization-of-coadjoint-orbits-and-borel-weil` |
| Bose-Fermi / half-integer-spin alternative from spin-orbit prequantisation | COVERED | `05.11.02` (half-integer spin from integrality) + `05.11.05` (spin-$j$ rep, $2j+1$ sections); QFT spin-statistics deferred to FT 2.17 as the audit intended |
| Groenewold-van Hove no-go (quantisation obstruction) | COVERED | `05.11.04-the-groenewold-van-hove-no-go-theorem` |
| Poincaré-group elementary system; relativistic massive particle as coadjoint orbit; mass-shell as presymplectic, reduction to symplectic | COVERED | `05.11.09-quantization-of-the-relativistic-particle` (presymplectic mass-shell, Poincaré orbit $\mathcal O_{m,0}$, Wigner/Souriau) |
| Wigner classification of unitary irreps of the Poincaré group (mass + spin/helicity) | COVERED | `07.07.06-wigners-classification...poincare-group`; `07.07.09` (Lorentz $SL(2,\mathbb C)$ reps) |
| Elementary system / free particle as orbit of $E(3)$; mass and spin as labels | COVERED | `09.03.03-quantum-free-particle-as-a-representation-of-e-3`; `03.14.01-quantum-free-particle-e3`; Mackey imprimitivity `07.07.07` |
| Classical spin as the $S^2$ coadjoint orbit | COVERED | `05.03.01` (headline coadjoint-orbit example) + `05.11.02`/`05.11.05` (spin-$j$ realisation) |
| Lie-algebra cohomology $H^1$/$H^2$, central extensions (Chevalley-Eilenberg), $H^2$ classifies extensions | COVERED | `05.04.07` (infinitesimal cocycle in $C^1(\mathfrak g,\mathfrak g^*)$, central-extension Jacobi proof) + `05.00.07` ($H^2(\mathfrak{gal})\cong\mathbb R$); no separate `03.04.05` needed |
| Presymplectic manifold / characteristic foliation / reduction | COVERED (as used) | `05.11.09` (presymplectic mass-shell + $\ker\sigma$ quotient); `05.09.12-casimir-functions-of-degenerate-poisson-structures`; degenerate-form machinery present where load-bearing |
| Marsden-Weinstein-Meyer symplectic reduction | COVERED | `05.04.02-symplectic-reduction` |
| Moment map (Souriau-original) | COVERED | `05.04.01-moment-map` |

**Notes on duplication / placement drift (not gaps, flag for housekeeping):** the audit proposed the Souriau-Gibbs state at `11.04.02`; it shipped at **both** `05.03.02` and `11.04.02` (apparent cross-chapter duplicate — worth a dedup review, but coverage is complete either way). The audit's proposed `05.04.07` / `05.00.07` ids were used exactly as planned and shipped at full depth.

---

**Counts:** genuine gaps = **2**; COVERED-verified topics = **20** (rows above, several backed by multiple units).
