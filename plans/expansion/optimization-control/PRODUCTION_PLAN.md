# Spine 9 — Optimization & Control · PRODUCTION PLAN (collision-checked)

Section `content/44-optimization-control` (prefix 44, field `optimization`, spine id
`optimization-control`). Reconciles 4 parallel audits (Boyd-Vandenberghe / Nocedal-Wright /
Rockafellar / Bertsekas) into 36 units, deduped across 4 id collisions, sequenced into 5
dependency waves. ch06 (first-order/large-scale) had no audited anchor → seeded from
Beck *First-Order Methods in Optimization* + Nesterov *Lectures on Convex Optimization*.

Peer units producers should match:
- THEORY flavor: `37.07.03` (Legendre-Fenchel) + `02.11.02` (Hahn-Banach Master tier).
- ALGORITHM flavor: `43.02.03` (Newton/secant convergence) + `43.07.04` (conjugate gradient).

## Collisions resolved
- 44.01.01: Boyd convex-sets vs Rockafellar Carathéodory → Boyd keeps 01.01; Rockafellar → 01.02, 01.03.
- 44.02.01: Boyd Lagrange-duality vs Rockafellar Farkas → Boyd keeps 02.01; Farkas → 02.04.
- 44.02.02: Boyd KKT vs Rockafellar subdifferential vs N-W KKT/CQ → merge Boyd+N-W KKT (incl. constraint qualifications + 2nd-order) at 02.02; Rockafellar subdifferential calculus → 02.05.
- 44.03.01: Boyd Newton vs N-W line-search → N-W line-search keeps 03.01; Newton-for-optimization (Boyd+N-W) merged at 03.03.

---

## Wave 1 (6) — foundations, no intra-spine prereqs
| id | title | book | prereqs (on disk) |
|----|-------|------|-------------------|
| 44.01.01 | Convex sets & functions; convexity-preserving operations (epigraph, perspective, log-sum-exp, quasiconvexity) | boyd-vandenberghe | 01.01.* , 02.05.05 |
| 44.01.02 | Carathéodory's theorem & relative interior of convex sets | rockafellar | 01.01.08 |
| 44.02.04 | Farkas' lemma & theorems of the alternative | rockafellar | 01.01.* , 02.11.02 |
| 44.03.08 | Derivative computation: finite differences & automatic differentiation | nocedal-wright | 02.05.05 , 43.01.* |
| 44.07.02 | Linear-quadratic regulator: differential & algebraic Riccati equations | bertsekas | 02.06.03 , 43.06.12 |
| 44.08.01 | Finite-horizon dynamic programming & the principle of optimality | bertsekas | 37.05.01 |

## Wave 2 (6) — convexity on ch01 + duality + first algorithms
| id | title | book | prereqs |
|----|-------|------|---------|
| 44.01.03 | Recession cones & polyhedral convexity (Minkowski-Weyl) | rockafellar | 44.01.01, 44.01.02 |
| 44.02.01 | Lagrangian duality, weak/strong duality, Slater's condition | boyd-vandenberghe | 44.01.01 |
| 44.02.05 | Subdifferential calculus (Moreau-Rockafellar, chain rule, Danskin, Fermat) | rockafellar | 44.01.01, 37.07.03 |
| 44.03.01 | Line-search methods: Wolfe conditions, Zoutendijk, global convergence | nocedal-wright | 44.01.01, 02.05.05 |
| 44.03.02 | Trust-region methods: Cauchy point & dogleg | nocedal-wright | 44.01.01, 02.05.05 |
| 44.08.02 | Infinite-horizon discounted DP: Bellman contraction, value & policy iteration | bertsekas | 44.08.01, 02.01.05 |

## Wave 3 (7) — KKT, Newton, subgradient, control
| id | title | book | prereqs |
|----|-------|------|---------|
| 44.02.02 | KKT optimality conditions: constraint qualifications & second-order conditions | boyd-vandenberghe + nocedal-wright | 44.02.01, 44.01.01 |
| 44.02.03 | Fenchel duality & the conjugate as a modeling tool | boyd-vandenberghe | 44.02.01 (Conn: 44.02.05) |
| 44.03.03 | Newton's method for optimization (unconstrained & equality-constrained) | nocedal-wright + boyd-vandenberghe | 44.03.01, 01.01.13 |
| 44.03.06 | Nonlinear conjugate gradient (Fletcher-Reeves, Polak-Ribière) | nocedal-wright | 44.03.01, 43.07.04 |
| 44.06.01 | Subgradient methods for nonsmooth convex optimization | beck | 44.02.05 |
| 44.07.01 | Pontryagin's maximum principle for constrained optimal control | bertsekas | 09.02.02, 02.18.04 |
| 44.08.03 | Markov decision processes & stochastic dynamic programming | bertsekas | 44.08.02, 37.05.01 |

## Wave 4 (8) — algorithms on Newton/KKT + conic + proximal + control
| id | title | book | prereqs |
|----|-------|------|---------|
| 44.03.04 | Quasi-Newton methods: BFGS, DFP, SR1 & convergence | nocedal-wright | 44.03.03 |
| 44.03.07 | Gauss-Newton & Levenberg-Marquardt for nonlinear least squares | nocedal-wright | 44.03.03, 43.04.* |
| 44.04.01 | Active-set methods for quadratic programming | nocedal-wright | 44.02.02 |
| 44.05.01 | Conic optimization: LP, second-order cone & semidefinite programs | boyd-vandenberghe | 44.02.01 |
| 44.05.02 | Linear-programming duality & the simplex method | boyd-vandenberghe | 44.02.04 (Conn: 44.05.01) |
| 44.06.02 | Proximal operator, Moreau envelope & proximal-gradient (ISTA) | beck | 44.06.01, 44.02.05 |
| 44.07.03 | Bang-bang & minimum-time optimal control | bertsekas | 44.07.01 |
| 44.07.04 | Hamilton-Jacobi-Bellman equation & the verification theorem | bertsekas | 44.08.02, 09.05.02, 02.18.05 |

## Wave 5 (9) — advanced algorithms
| id | title | book | prereqs |
|----|-------|------|---------|
| 44.03.05 | Limited-memory L-BFGS & inexact (truncated) Newton-CG | nocedal-wright | 44.03.04 |
| 44.04.02 | Penalty & augmented-Lagrangian methods (LANCELOT) | nocedal-wright | 44.02.02 |
| 44.04.03 | Sequential quadratic programming (SQP) | nocedal-wright | 44.04.01, 44.02.02 |
| 44.04.04 | Interior-point methods for nonlinear programming | nocedal-wright | 44.02.02 |
| 44.05.03 | Geometric programming | boyd-vandenberghe | 44.05.01 |
| 44.05.04 | Interior-point / barrier methods: central path & primal-dual | boyd-vandenberghe | 44.05.01 |
| 44.06.03 | Accelerated gradient methods (Nesterov, FISTA) & optimal complexity | nesterov | 44.06.02 |
| 44.06.04 | Operator splitting: ADMM & Douglas-Rachford | beck | 44.06.02 |
| 44.06.05 | Stochastic gradient & mirror descent | beck | 44.06.01 |

Total: 36 units.
