# Gérard — *Microlocal Analysis of Quantum Fields on Curved Spacetimes* (Fast Track 3.45) — Audit + Gap Plan

**Book:** Christian Gérard, *Microlocal Analysis of Quantum Fields on
Curved Spacetimes*, ESI Lectures in Mathematics and Physics (European
Mathematical Society / EMS Press, Zürich, 2019). vii + 358 pp.
ISBN 978-3-03719-094-4 (print); DOI 10.4171/094.

**Fast Track entry:** 3.45 (Tier 3 — Advanced QFT / curved-spacetime
block). Catalogued in `docs/catalogs/FASTTRACK_BOOKLIST.md` line 129 as
"Microlocal Analysis of QF on Curved Spacetimes / Christian Gérard /
Distribution theory for QFT / BUY". Sits in the same Tier 3 group as
Deligne-et-al *Quantum Fields and Strings* (3.43), DeWitt *Global
Approach to QFT* (3.44), Vaisman *Differential Forms and Cohomology*
(3.46), and Brylinski *Loop Spaces* (3.47).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write so that Gérard is covered to the
equivalence-coverage threshold of
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4. The book is the
canonical modern entry to **algebraic QFT on globally hyperbolic
Lorentzian manifolds** — distinct from the Wightman / canonical / path-
integral entries already partially covered by Chatterjee (FT 2.03,
audit shipped) and Weinberg (FT 2.17). It is **not** a substitute for
Bär-Ginoux-Pfäffle's *Wave Equations on Lorentzian Manifolds*
(complementary classical-PDE companion) or for Hollands-Wald's
*Quantum Field Theory in Curved Spacetime* review (the
renormalisation-theoretic companion). Gérard's distinctive contribution
is to **make microlocal analysis (Hörmander's wave-front-set calculus
and pseudo-differential operators on manifolds) the central technical
tool** for the existence and characterisation of Hadamard states.

**Audit mode:** REDUCED. No local PDF of Gérard 2019 is present under
`reference/fasttrack-texts/03-advanced-qft/`. EMS Press hosts a free
abstract / TOC at <https://ems.press/books/elm/206>; the full PDF is
paywalled (EMS open-access for some volumes, this title is BUY).
WebFetch on EMS-Press returns the table of contents only. Plan is
written from the published TOC (10 chapters, 358 pp.) plus
Gérard's own preprint *Hadamard States via Pseudo-Differential
Calculus* (`arXiv:1209.2604`) and Gérard-Wrochna 2014 *Comm. Math.
Phys.* 325 713 ("Construction of Hadamard states by pseudo-differential
calculus"), both of which substantively previewed the book's central
machinery. Local PDF acquisition is the first P2 follow-up — see §7.

---

## §1 What Gérard is for

Gérard's book is the **modern algebraic / microlocal entry point to
quantum field theory on curved spacetimes**, written for a mathematical
audience that has seen functional analysis at the level of Reed-Simon
but has not necessarily done QFT. Where Birrell-Davies (1982) and
Wald's earlier *Quantum Field Theory in Curved Spacetime and Black Hole
Thermodynamics* (1994) approach the subject from the physicists' side
(mode expansions, particle interpretation, Hawking effect), Gérard
inverts the development: the **wave-front set of a two-point function**
is taken as the *definition* of a Hadamard state, and the entire
existence theory is reduced to Hörmander-style microlocal analysis of
the Klein-Gordon operator on a globally hyperbolic Lorentzian manifold.
This is the post-Radzikowski-1996 paradigm that has driven the field
since the late 1990s; Gérard 2019 is its canonical textbook
consolidation.

Distinctive contributions, in roughly the order Gérard's 10 chapters
develop them:

1. **Wave-front set as the central microlocal invariant.** Hörmander
   1971 (*Acta Math.* 127). The wave-front set $\mathrm{WF}(u) \subset
   T^*M \setminus 0$ of a distribution $u$ on $M$ records both *where*
   $u$ fails to be smooth and *in which conormal directions*. Gérard
   develops it from scratch in Ch. 1–2 because the entire Hadamard
   programme rests on it. Compare Friedlander-Joshi *Introduction to
   the Theory of Distributions* (Cambridge 1998) for a parallel
   prose-first presentation.
2. **Pseudo-differential calculus on a manifold.** Symbols
   $a(x,\xi) \in S^m$, principal symbol, composition formula, the
   Hörmander class $\Psi^m(M)$. Gérard Ch. 2–3. This is the technical
   machinery that powers every subsequent existence theorem; the
   Codex's existing `03-modern-geometry/09-spin-geometry/` units
   (`03.09.*`) reference $\Psi^m$ symbolically (per the CONCEPT_CATALOG
   note on Sobolev spaces and elliptic parametrices) but do not develop
   the symbol calculus.
3. **Symplectic geometry of the cotangent bundle and geodesic
   Hamiltonian flow.** Gérard Ch. 4. The principal symbol of $\Box + m^2$
   on a Lorentzian manifold is $p(x,\xi) = g^{\mu\nu}(x)\xi_\mu\xi_\nu + m^2$;
   its Hamiltonian flow on $T^*M$ is the geodesic flow restricted to
   the null-cone (massless) or mass-shell hyperboloid (massive). The
   wave-front set propagates along this Hamiltonian flow (Hörmander's
   propagation-of-singularities theorem). **Crosswalk:**
   `05.02.06-geodesic-flow-hamiltonian.md` already covers the
   Riemannian case; the Lorentzian generalisation is missing.
4. **Globally hyperbolic Lorentzian manifolds.** Gérard Ch. 5.
   Definition via existence of a Cauchy surface; Bernal-Sánchez 2005
   smooth-splitting theorem $M \cong \mathbb{R} \times \Sigma$ with
   metric $-N^2 dt^2 + h_t$. This is the geometric setting in which
   the Klein-Gordon Cauchy problem is well-posed and quantisation
   proceeds. The Codex's `13-gr-cosmology/` chapter has Schwarzschild
   and FLRW but **does not** state the globally-hyperbolic axiom or
   the Bernal-Sánchez splitting.
5. **Klein-Gordon equation on a globally hyperbolic spacetime.** Gérard
   Ch. 5–6. Well-posedness of the classical Cauchy problem: for
   $(\phi_0, \phi_1) \in C_c^\infty(\Sigma) \oplus C_c^\infty(\Sigma)$
   there is a unique smooth solution $\phi$ of $(\Box_g + m^2)\phi = 0$
   with these Cauchy data, and $\phi$ depends continuously on them.
   Advanced and retarded fundamental solutions $E^\pm$;
   Pauli-Jordan distribution $E = E^+ - E^-$. Causal propagator.
6. **CCR / Weyl algebra and quasi-free states.** Gérard Ch. 6. The
   classical symplectic phase space $(\mathcal{S}, \sigma)$ of
   Cauchy data quantises to a CCR algebra; Araki-Woods construction of
   the GNS representation for a quasi-free state determined by a
   covariance form $\eta$. Pre-Hadamard formulation: the choice of
   *which* quasi-free state to use is the central question.
7. **Hadamard states defined via wave-front set (Radzikowski
   criterion).** Gérard Ch. 7. **Radzikowski 1996** (*Comm. Math.
   Phys.* 179 529): a quasi-free state $\omega$ is Hadamard iff its
   two-point function $\omega_2 \in \mathcal{D}'(M \times M)$ has
   wave-front set
   $$\mathrm{WF}(\omega_2) = \{((x_1,\xi_1), (x_2,-\xi_2)) : (x_1,\xi_1) \sim (x_2,\xi_2), \xi_1 \in V^+_{x_1}\},$$
   where $\sim$ is the null-geodesic-strip relation. **This is the
   central definition of the book**; everything before it is
   technical preparation, everything after it is application.
   Equivalent to the original Kay-Wald 1991 "Hadamard form"
   asymptotic expansion of $\omega_2$ near the diagonal, but cleaner.
8. **Existence of Hadamard states: the FNW deformation argument and
   the Junker / Olbermann constructions.** Gérard Ch. 8.
   **Fulling-Narcowich-Wald 1981** (*Ann. Phys.* 136 243): deform any
   globally hyperbolic spacetime to one that is *ultrastatic* outside a
   compact region, pull back the static Hadamard state by the
   deformation. **Junker 1996** / **Olbermann 2007**: explicit
   constructions via pseudo-differential approximation of the
   ground-state covariance. Gérard's preferred approach (his own
   research, c. 2012–2014): construct Hadamard states directly by
   pseudo-differential symbols built from the geometry, no deformation
   needed.
9. **Renormalisation on curved spacetime (Hollands-Wald).** Gérard
   Ch. 9. Wick polynomials :phi^n: defined via Hadamard parametrix
   subtraction (Brunetti-Fredenhagen-Köhler 1996); time-ordered
   products and their existence (Hollands-Wald 2001 *Comm. Math.
   Phys.* 223 289 and 2002 *Comm. Math. Phys.* 231 309 *Comm. Math.
   Phys.* 237 123 — the trio of papers establishing perturbative
   algebraic QFT on a general curved background). Renormalisation
   ambiguities classified by a finite-dimensional family of local
   covariant counterterms.
10. **Cosmological and black-hole applications.** Gérard Ch. 10.
    **Bunch-Davies state on de Sitter** as the unique de-Sitter-
    invariant Hadamard state (Bunch-Davies 1978 *Proc. R. Soc. A* 360
    117; Allen 1985 *Phys. Rev. D* 32 3136). **Hartle-Hawking and
    Unruh states on Schwarzschild**; rigorous **Unruh effect** via
    Bisognano-Wichmann 1976 (modular automorphism of a wedge algebra =
    boost). Quantum energy inequalities (Fewster 2000); Hawking effect
    as a corollary in the appropriate scaling limit.

Gérard is **not** a substitute for: (a) a classical-PDE treatment of
the wave equation on Lorentzian manifolds (Bär-Ginoux-Pfäffle, *Wave
Equations on Lorentzian Manifolds and Quantization*, ESI 2007, is the
companion); (b) the physicist-side treatment with explicit Hawking /
Unruh / cosmological-particle-production computations (Birrell-Davies
1982, Wald 1994); (c) the locally-covariant-functor categorical
framework of Brunetti-Fredenhagen-Verch 2003 (*Comm. Math. Phys.* 237
31), which Gérard mentions but does not develop. It **is** the canonical
single-volume entry to the microlocal / Hadamard-state side.

Peer / supplementary sources cross-referenced for this audit:

- C. Bär, N. Ginoux, F. Pfäffle, *Wave Equations on Lorentzian Manifolds
  and Quantization*, ESI Lectures (EMS 2007). Free PDF at
  <https://arxiv.org/abs/0806.1036>.
- M. Radzikowski, "Micro-local approach to the Hadamard condition in
  quantum field theory on curved space-time," *Comm. Math. Phys.* 179
  (1996) 529.
- S. Hollands, R. Wald, "Quantum fields in curved spacetime,"
  *Phys. Rep.* 574 (2015) 1 (modern review co-anchor).
- B. Kay, R. Wald, "Theorems on the uniqueness and thermal properties of
  stationary, nonsingular, quasifree states on spacetimes with a
  bifurcate Killing horizon," *Phys. Rep.* 207 (1991) 49.
- L. Hörmander, *The Analysis of Linear Partial Differential Operators*
  vols. I–IV (Springer 1983–85). Vols. I (distributions, WF sets) and
  III (pseudo-differential operators) are the technical anchor Gérard
  cites throughout.
- R. Brunetti, K. Fredenhagen, M. Köhler, "The microlocal spectrum
  condition and Wick polynomials of free fields on curved spacetimes,"
  *Comm. Math. Phys.* 180 (1996) 633.
- R. Brunetti, K. Fredenhagen, R. Verch, "The generally covariant
  locality principle — a new paradigm for local quantum field theory,"
  *Comm. Math. Phys.* 237 (2003) 31.
- J. Bisognano, E. Wichmann, "On the duality condition for a Hermitian
  scalar field," *J. Math. Phys.* 16 (1975) 985.
- C. Fewster, "A general worldline quantum inequality," *Class. Quant.
  Grav.* 17 (2000) 1897.
- C. Gérard, M. Wrochna, "Construction of Hadamard states by
  pseudo-differential calculus," *Comm. Math. Phys.* 325 (2014) 713.

---

## §2 Coverage table (Codex vs Gérard)

Cross-referenced against the current corpus, focusing on
`08-stat-mech/10-qft/` (10 units: Fock spaces, $\phi^4$, Wick's
theorem, Feynman propagator, one-loop renormalisation, Wightman axioms,
Langevin / Fokker-Planck, Dirac field, Pauli-exclusion fermionic Fock),
`12-quantum/` (13 subsections through Fock spaces), `13-gr-cosmology/`
(8 subsections: equivalence principle, manifold formalism, curvature,
Einstein equations, Schwarzschild, black holes, gravitational waves,
FLRW cosmology), and `05-symplectic/02-hamiltonian/`
(`05.02.06-geodesic-flow-hamiltonian.md`). Note: Wightman locality
on Minkowski is covered (`08.10.07-wightman-axioms-w1w7.md`), but the
Hadamard-state / wave-front-set framing on a *curved* background is
entirely absent.
✓ = covered, △ = partial / different framing, ✗ = not covered.

| Gérard topic (chapter) | Codex unit(s) | Status | Note |
|---|---|---|---|
| Schwartz space, tempered distributions $\mathcal{S}'$ (Ch. 1 prereq) | — | ✗ | **Gap (prereq).** Flagged in Chatterjee audit P3; Sternberg lectures cover this. |
| Wave-front set $\mathrm{WF}(u)$ of a distribution (Ch. 1–2) | — | ✗ | **Gap (Priority 1 foundational).** No Codex unit defines WF. |
| Pseudo-differential operators $\Psi^m(M)$, symbol calculus, principal symbol (Ch. 2–3) | △ | △ | CONCEPT_CATALOG.md mentions $\Psi^m$ in the context of Sobolev embedding + elliptic parametrices on closed manifolds (cited from Hörmander vol. III); no dedicated symbol-calculus unit. |
| Propagation of singularities along Hamiltonian flow of principal symbol (Ch. 4) | — | ✗ | **Gap (Priority 1).** Hörmander's theorem; central technical input to the Hadamard programme. |
| Geodesic flow on the cotangent bundle (Ch. 4) | `05.02.06-geodesic-flow-hamiltonian.md` | △ | Covered for Riemannian case; Lorentzian (null-cone + mass-shell) extension needed but could be folded as a Master-tier section in the existing unit. |
| Globally hyperbolic Lorentzian manifold; Cauchy surface; Bernal-Sánchez splitting (Ch. 5) | — | ✗ | **Gap (Priority 1).** Foundational geometric object; not in `13-gr-cosmology/` despite chapter coverage of Schwarzschild + FLRW. |
| Klein-Gordon Cauchy problem on a globally hyperbolic spacetime; advanced + retarded fundamental solutions $E^\pm$ (Ch. 5–6) | — | ✗ | **Gap (Priority 1).** No general curved-spacetime KG unit; flat-space free KG handled in `08.10.02` (and at the operator-valued-distribution level in Chatterjee output). |
| CCR algebra of a symplectic phase space; Weyl algebra (Ch. 6) | △ | △ | Bosonic Fock space at the Hilbert-space level is `08.10.01` (flat-space Chatterjee unit). The **algebraic** $C^*$-algebra framework — phase-space $(\mathcal{S}, \sigma)$, Weyl elements $W(f)$, CCR relations — is not. |
| Quasi-free states and Araki-Woods GNS construction (Ch. 6) | — | ✗ | **Gap (Priority 1).** |
| Hadamard state via wave-front-set criterion (Radzikowski 1996) (Ch. 7) | — | ✗ | **Gap (Priority 1 — central theorem of the book).** |
| Hadamard form / Kay-Wald asymptotic expansion (Ch. 7) | — | ✗ | **Gap.** Equivalent to Radzikowski; Master-tier deepening of the Radzikowski unit. |
| FNW deformation argument for existence of Hadamard states (Ch. 8) | — | ✗ | **Gap (Priority 1).** |
| Junker / Olbermann / Gérard-Wrochna pseudo-differential constructions of Hadamard states (Ch. 8) | — | ✗ | **Gap (Priority 2 — distinctive contribution).** |
| Wick polynomials via Hadamard parametrix subtraction; Brunetti-Fredenhagen-Köhler 1996 (Ch. 9) | — | ✗ | **Gap (Priority 2).** |
| Time-ordered products and Hollands-Wald 2001/2002 (Ch. 9) | — | ✗ | **Gap (Priority 2).** Renormalisation in curved spacetime. |
| Bunch-Davies state on de Sitter (Ch. 10) | — | ✗ | **Gap (Priority 2).** Cosmology / inflation interface. |
| Hartle-Hawking + Unruh states on Schwarzschild (Ch. 10) | — | ✗ | **Gap (Priority 3 — black-hole specialist).** |
| Unruh effect via Bisognano-Wichmann (Ch. 10) | — | ✗ | **Gap (Priority 2).** |
| Quantum energy inequalities (Fewster) (Ch. 10) | — | ✗ | **Gap (Priority 3).** |
| Hawking effect (pointed-to, not derived) (Ch. 10) | — | ✗ | Pointer only; not in scope for Gérard. |
| Locally-covariant-functor framework BFV 2003 (Ch. 10 pointer) | — | ✗ | Pointer; out of scope. |

**Aggregate coverage estimate:** **~0%** of Gérard's central content
maps to existing Codex units. The adjacent material — symplectic
Riemannian geodesic flow (`05.02.06`), flat-space Fock space and
Wightman axioms (`08.10.01`, `08.10.07`), GR-cosmology basics
(`13.01`–`13.08`) — covers the *components* but not the
**curved-spacetime QFT synthesis**. Gérard is foundational for an
entirely new Codex sub-chapter, tentatively
`13-gr-cosmology/09-qft-curved/`, with prerequisite microlocal-analysis
units in `02-analysis/14-microlocal/` (new) and CCR/algebraic-state
units in `12-quantum/14-algebraic-qft/` (new).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — analysis-track prerequisites that block Gérard
production:** Gérard assumes (i) the Schwartz / tempered-distribution
calculus on $\mathbb{R}^n$ at the level of Hörmander vol. I; (ii) the
spectral theorem for unbounded self-adjoint operators; (iii) Sobolev
spaces $H^s(M)$ on a manifold. Items (i)–(ii) are already on the
Sternberg / Chatterjee P3 prerequisite list. Item (iii) sits with the
CONCEPT_CATALOG.md Sobolev / pseudo-differential note (currently
notes-only, no unit). **Recommendation:** schedule a `02-analysis/`
Sobolev / distributions block *before* Gérard production; flag for the
analysis-chapter lead. Not produced by this audit.

**Priority 1 — high-leverage, captures Gérard's central content:**

1. **`02.14.01` Wave-front set of a distribution.** [NEW] Definition
   $\mathrm{WF}(u) \subset T^*M \setminus 0$ via failure of localised
   Fourier decay in conormal directions; equivalent characterisations
   (smooth-cutoff non-decay, FBI / wave-packet decomposition);
   wave-front set of $\delta_0$ on $\mathbb{R}^n$ as the example.
   Originator: L. Hörmander, "Fourier integral operators I," *Acta
   Math.* 127 (1971) 79–183. Anchor: Gérard Ch. 1–2; Hörmander vol. I
   §8. Three-tier, ~1800 words. Beginner tier states the
   characterisation via "fails to be smooth at $x$ in direction
   $\xi$"; Intermediate gives the precise non-decay definition; Master
   covers the Hörmander cone-topology and the link to operator
   wave-front set $\mathrm{WF}'(A)$.
2. **`02.14.02` Pseudo-differential operators on a manifold.** [NEW]
   Symbols $a(x,\xi) \in S^m$, the Hörmander class $\Psi^m(M)$, principal
   symbol, composition formula
   $a \# b = ab + \tfrac{1}{i}\{a,b\}/2 + O(\text{lower})$, elliptic
   parametrix construction. **Crosswalk:** CONCEPT_CATALOG.md already
   has a Sobolev + pseudo-diff parametrix note citing Hörmander vol.
   III; this unit upgrades that note to a full three-tier unit.
   Originator: Kohn-Nirenberg 1965 *Comm. Pure Appl. Math.* 18 269;
   Hörmander 1965 *Comm. Pure Appl. Math.* 18 501. Anchor: Gérard
   Ch. 2–3; Hörmander vol. III §18. Three-tier, ~2000 words.
3. **`02.14.03` Propagation of singularities along Hamiltonian flow.**
   [NEW] Hörmander's theorem: for $P \in \Psi^m(M)$ with real principal
   symbol $p$, if $Pu = f$ then
   $\mathrm{WF}(u) \setminus \mathrm{WF}(f) \subset p^{-1}(0)$ is
   invariant under the Hamiltonian flow of $p$. Statement, proof
   sketch via commutator argument, the Lorentzian example
   $p(x,\xi) = g^{\mu\nu}\xi_\mu\xi_\nu$ with null-geodesic flow.
   Originator: Hörmander 1971 GFQI; Duistermaat-Hörmander 1972 *Acta
   Math.* 128 183. Anchor: Gérard Ch. 4; Hörmander vol. III §26.
   Three-tier (Beginner = statement + Lorentzian example only),
   ~2000 words. **This is the load-bearing technical theorem for the
   Hadamard programme.**
4. **`13.09.01` Globally hyperbolic Lorentzian manifolds.** [NEW]
   Definitions: causal structure, achronal sets, Cauchy surface,
   global hyperbolicity ($J^+(p) \cap J^-(q)$ compact for all $p, q$,
   plus strong causality). **Bernal-Sánchez 2005** smooth-splitting
   theorem $M \cong \mathbb{R} \times \Sigma$ with metric
   $-N^2 dt^2 + h_t$. Examples: Minkowski, Schwarzschild exterior,
   FLRW, de Sitter. Non-examples: Gödel, Reissner-Nordström interior,
   Kerr inside the Cauchy horizon. **Crosswalk:** depends on
   `13.02.01-tensors-smooth-manifolds.md` for tensor formalism and
   `13.05.01-schwarzschild-solution.md` for the canonical example.
   Originators: Leray 1953 (causal-domain notion); Geroch 1970 *J.
   Math. Phys.* 11 437; Bernal-Sánchez 2003/2005 (smooth splitting).
   Anchor: Gérard Ch. 5; Bär-Ginoux-Pfäffle §1; Wald *General
   Relativity* §8. Three-tier, ~1800 words.
5. **`13.09.02` Klein-Gordon equation on a globally hyperbolic spacetime.** [NEW] Well-posedness of the classical Cauchy problem:
   $(\Box_g + m^2)\phi = 0$ with $(\phi|_\Sigma, n^\mu \nabla_\mu
   \phi|_\Sigma) = (\phi_0, \phi_1) \in C_c^\infty \oplus C_c^\infty$
   has a unique smooth solution $\phi$ with $\mathrm{supp}\, \phi
   \subset J(K)$ for $K = \mathrm{supp}\,\phi_0 \cup
   \mathrm{supp}\,\phi_1$ (causal propagation, finite speed). Advanced
   and retarded fundamental solutions $E^\pm$; Pauli-Jordan
   distribution $E = E^+ - E^-$ as the causal propagator. Anchor:
   Gérard Ch. 5–6; Bär-Ginoux-Pfäffle §3 (free PDF on arXiv —
   excellent free supplement). Originators: Leray 1953; Choquet-Bruhat
   1952 (existence/uniqueness for hyperbolic systems on a Lorentzian
   manifold). Three-tier, ~2000 words. **Depends on `13.09.01`.**
6. **`12.14.01` CCR algebra, Weyl algebra, and quasi-free states.**
   [NEW] Symplectic phase space $(\mathcal{S}, \sigma)$; CCR
   $\ast$-algebra generated by elements $\phi(f)$ subject to
   $[\phi(f), \phi(g)] = i\sigma(f,g)\mathbf{1}$; Weyl algebra
   generated by unitaries $W(f) = e^{i\phi(f)}$ with
   $W(f)W(g) = e^{-i\sigma(f,g)/2} W(f+g)$. **Quasi-free state**
   determined by a real bilinear form $\eta$ on $\mathcal{S}$ with
   $\eta \geq \tfrac{1}{4}\sigma^2$ (purity / Hadamard condition).
   **Araki-Woods 1963** *Publ. RIMS Kyoto* construction of the GNS
   representation: $\eta$ determines a one-particle Hilbert space and
   a bosonic Fock representation. **Crosswalk:** depends on
   `08.10.01-bosonic-fock-space-and-second-quantisation.md` for the
   Hilbert-space-side Fock construction; this is the **algebraic** /
   $C^*$-side. Originators: Segal 1947 *Proc. NAS* 33 (originating
   CCR); Araki-Woods 1963; Manuceau 1968 *Ann. IHP* 8 139 (Weyl-
   algebra $C^*$-completion). Anchor: Gérard Ch. 6; Bratteli-Robinson
   *Operator Algebras and Quantum Statistical Mechanics* vol. 2 §5.2.
   Three-tier, ~2200 words.
7. **`13.09.03` Hadamard states via the wave-front-set criterion (Radzikowski).** [NEW] **Definition (Radzikowski 1996):** a
   quasi-free state $\omega$ on the CCR algebra of $(\mathcal{M}, g)$
   is Hadamard iff
   $\mathrm{WF}(\omega_2) = \{((x_1,\xi_1),(x_2,-\xi_2)) :
   (x_1,\xi_1) \sim_g (x_2,\xi_2),\ \xi_1 \in \overline{V^+_{x_1}}\}$,
   where $\sim_g$ relates points connected by a null geodesic with
   $\xi$ the parallel transport of the cotangent. **Equivalence to
   Kay-Wald Hadamard form** (Master tier). Microlocal spectrum
   condition (BFK 1996) as the generalisation to higher $n$-point
   functions. Originators: M. Radzikowski 1996 *Comm. Math. Phys.*
   179 529 (originating the WF criterion); Kay-Wald 1991 *Phys. Rep.*
   207 49 (originating the Hadamard form). Anchor: Gérard Ch. 7.
   Three-tier; Beginner states the criterion only; Intermediate
   relates to the Kay-Wald form; Master gives the BFK microlocal
   spectrum condition. ~2200 words. **Depends on `02.14.01` +
   `02.14.03` + `12.14.01` + `13.09.02`.** This is the central unit
   for the entire chapter.
8. **`13.09.04` Existence of Hadamard states via the FNW deformation argument.** [NEW] **Fulling-Narcowich-Wald 1981** *Ann. Phys.* 136
   243. Strategy: deform $(\mathcal{M}, g)$ to a globally hyperbolic
   $(\mathcal{M}', g')$ that is ultrastatic outside a compact region;
   the ground state of the ultrastatic part is Hadamard; pull back
   along the deformation; show Hadamard property is preserved by the
   deformation (uses propagation-of-singularities + characterisation
   of $\mathrm{WF}$ under the causal propagator). Anchor: Gérard Ch. 8;
   FNW 1981. Three-tier (Beginner = statement only). ~1800 words.
   **Depends on `13.09.03`.**

**Priority 2 — Hollands-Wald renormalisation and pseudo-differential
constructions:**

9. **`13.09.05` Hadamard states by pseudo-differential calculus (Gérard-Wrochna).** [NEW] Direct construction: choose a Cauchy
   surface $\Sigma$, pick a $\Psi^1$-pseudo-differential approximation
   $\epsilon$ of the operator $\sqrt{-\Delta_h + m^2 + V}$ on $\Sigma$
   (with appropriate sign on the "particle" / "antiparticle" wave-
   front-set components), reconstruct the Hadamard two-point function
   from $(\epsilon, \sigma)$. Originator: C. Gérard, M. Wrochna 2014
   *Comm. Math. Phys.* 325 713; refined in Gérard-Wrochna 2017 *Amer.
   J. Math.* 139 1463. Anchor: Gérard Ch. 8 (his own approach).
   Intermediate + Master; ~2000 words. **Distinctive contribution of
   Gérard's textbook**; complements the FNW deformation approach.
10. **`13.09.06` Wick polynomials in curved spacetime via Hadamard parametrix subtraction.** [NEW] **Brunetti-Fredenhagen-Köhler
    1996** *Comm. Math. Phys.* 180 633. Renormalised Wick power
    $:\!\phi^n(x)\!:_\omega$ defined by point-splitting and subtraction
    of the Hadamard parametrix $H(x,y)$ (a local, geometry-determined
    quantity independent of the state $\omega$). **Local covariance**
    of the resulting Wick polynomials (Brunetti-Fredenhagen-Verch
    2003). Originators: BFK 1996; BFV 2003. Anchor: Gérard Ch. 9;
    Hollands-Wald *Phys. Rep.* 574 (2015) 1. Three-tier; Beginner =
    motivation + statement; Master = local-covariance functor.
    ~2000 words. **Depends on `13.09.03`.**
11. **`13.09.07` Time-ordered products and Hollands-Wald renormalisation on curved spacetimes.** [NEW] **Hollands-Wald
    2001/2002** *Comm. Math. Phys.* 223 289 / 231 309 / 237 123.
    Inductive Epstein-Glaser construction of time-ordered products
    $T(\phi^{n_1}(x_1) \cdots \phi^{n_k}(x_k))$ as a hierarchy of
    distributions extending across the diagonal; existence theorem
    via Hadamard parametrix scaling-degree arguments; classification
    of renormalisation freedom by a finite-dimensional family of
    local covariant counterterms. Originators: Hollands-Wald 2001/2002;
    Epstein-Glaser 1973 *Ann. IHP* 19 211 (originating the flat-space
    inductive construction). Anchor: Gérard Ch. 9. Intermediate +
    Master only (Beginner deferred — too much prerequisite); ~2400
    words. **Depends on `13.09.06`.**
12. **`13.09.08` Bunch-Davies state on de Sitter spacetime.** [NEW]
    de Sitter as the maximally symmetric Lorentzian manifold with
    positive cosmological constant; conformal embedding into the
    Einstein static universe; **Bunch-Davies state** as the unique
    de-Sitter-invariant Hadamard state for the massive Klein-Gordon
    field; explicit mode-sum / hypergeometric construction;
    relevance to inflationary cosmology (primordial perturbations).
    Originators: T. S. Bunch, P. C. W. Davies 1978 *Proc. R. Soc. A*
    360 117; B. Allen 1985 *Phys. Rev. D* 32 3136. Anchor: Gérard
    Ch. 10; Birrell-Davies §5.4. Three-tier, ~1800 words. **Depends
    on `13.09.03`.** **Connects to `13.08.01-flrw-cosmology` via the
    inflation pointer.**
13. **`13.09.09` Unruh effect via the Bisognano-Wichmann theorem.**
    [NEW] **Bisognano-Wichmann 1975/1976** *J. Math. Phys.* 16 985,
    17 303: for the vacuum representation of a Wightman QFT, the
    modular automorphism of the von Neumann algebra of a Rindler wedge
    is the boost subgroup. **Unruh effect (rigorous):** a uniformly
    accelerated observer in Minkowski sees the Minkowski vacuum as
    a KMS (thermal) state at temperature $T = a/(2\pi)$, with the
    boost playing the role of time translation. Sewell 1982
    *Ann. Phys.* 141 201 packaged this into the modern statement.
    Originators: Unruh 1976 *Phys. Rev. D* 14 870 (heuristic);
    Bisognano-Wichmann 1975/1976 (modular structure); Sewell 1982
    (rigorous Unruh). Anchor: Gérard Ch. 10. Three-tier (Beginner =
    statement + thermal-Rindler intuition; Master = full modular
    theory). ~2000 words.

**Priority 3 — specialist applications (Master-tier, not strictly
required for FT equivalence):**

14. **`13.09.10` Hartle-Hawking and Unruh states on Schwarzschild.**
    [NEW] **Hartle-Hawking state** (Hartle-Hawking 1976 *Phys. Rev. D*
    13 2188) as the unique Hadamard state on Kruskal extension
    invariant under the bifurcate Killing horizon flow; **Unruh state**
    (Unruh 1976) as the state appropriate to gravitational collapse;
    **Kay-Wald uniqueness theorem** (1991 *Phys. Rep.* 207 49) on the
    bifurcate Killing horizon. Anchor: Gérard Ch. 10; Kay-Wald 1991.
    Master-only, ~1800 words. **Depends on `13.09.03` and
    `13.06.01-black-holes.md`.**
15. **`13.09.11` Quantum energy inequalities (Fewster).** [NEW]
    Statement: for a Hadamard state $\omega$ and a smooth timelike
    worldline $\gamma$, the smeared expectation value of the
    point-split stress-energy tensor satisfies
    $\int |g(\tau)|^2 \omega(T_{ab}(\gamma(\tau)) \dot\gamma^a
    \dot\gamma^b)\, d\tau \geq -C(\gamma, g)$, where $C$ depends only
    on the geometry and the test function $g$, not on $\omega$.
    Originator: C. Fewster 2000 *Class. Quant. Grav.* 17 1897.
    Anchor: Gérard Ch. 10. Master-only, ~1500 words. **Depends on
    `13.09.06`.**

**Priority 4 — deepenings and pointers (Master-tier sections, fold
into existing units):**

16. **`05.02.06` Lorentzian extension of geodesic-flow Hamiltonian.** [DEEPEN] Add a Master-tier section to `05.02.06-geodesic-flow-hamiltonian.md` covering the Lorentzian case: principal symbol $p = g^{\mu\nu}\xi_\mu\xi_\nu$, restriction to the null cone for the massless Klein-Gordon operator, restriction to the mass shell for the massive case. Cross-link to `02.14.03` and `13.09.02`.
17. **Locally covariant QFT functor (BFV 2003).** [DEFERRED]
    Brunetti-Fredenhagen-Verch 2003 categorical reformulation:
    QFT as a covariant functor from the category of globally
    hyperbolic spacetimes (with isometric embeddings) to the category
    of $C^*$-algebras (with $\ast$-homomorphisms). Mentioned by
    Gérard in Ch. 10 as the modern framework but not developed.
    Could be added as a Master-tier section to `13.09.03` or as a
    separate unit if Vaisman / Brylinski audits require it. Defer.
18. **Hawking effect.** [OUT OF SCOPE] Gérard sketches but does not
    derive the Hawking effect. Belongs in a separate audit
    (Wald 1994 *Quantum Field Theory in Curved Spacetime* — not
    currently on FT booklist; flag for FT expansion).

---

## §4 Implementation sketch (P3 → P4)

For a full Gérard coverage pass, items 1–8 (Priority 1) are the
minimum set, with the Sternberg / Chatterjee analysis prerequisites
and the `13.05` / `13.06` GR units already in place. Realistic
production estimate (mirroring earlier Chatterjee + Parisi-Wu batches):

- **~4–5 hours per unit.** Gérard units skew **higher** than the
  corpus average because (a) Master-tier microlocal-analysis notation
  requires care (wave-front-set cone topology, symbol-asymptotic
  expansions), (b) several units cite chains of papers (Radzikowski +
  Kay-Wald + BFK; Hollands-Wald trio; Bisognano-Wichmann + Sewell),
  and (c) the Lorentzian-causal-structure prerequisites need to be
  set up explicitly in `13.09.01` rather than borrowed wholesale.
- 8 Priority-1 units × ~4.5 hours = **~36 hours** of focused
  production.
- 5 Priority-2 units × ~4 hours = **~20 hours**.
- 2 Priority-3 units × ~3 hours each (Master-only, shorter) =
  **~6 hours**.
- 1 Priority-4 deepening × ~2 hours = **~2 hours**.
- **Total: ~64 hours focused production** for full FT-equivalence
  coverage. Fits a focused 9–10 day window with care.

Prereq dependencies that must be flagged separately to chapter leads:

- **`02-analysis/` Schwartz + tempered distributions block.** Hard
  prereq for all Priority-1 microlocal units. Already on the
  Sternberg / Chatterjee punch-list; confirm scheduling before
  Gérard production begins. ~2 units, ~6 hours.
- **`02-analysis/14-microlocal/` new subsection.** Three new units
  (`02.14.01`–`02.14.03`) form the microlocal toolkit. These are
  prerequisite for the entire `13.09.*` series but stand on their own
  as analysis content. Flag for the analysis-chapter lead — if a
  parallel analysis-track audit (e.g. Hörmander vols. I/III) is on the
  roadmap, fold into that; otherwise produce as part of the Gérard
  batch.
- **`12-quantum/14-algebraic-qft/` new subsection.** One new unit
  (`12.14.01` CCR / Weyl / quasi-free / Araki-Woods) opens the
  algebraic-QFT subchapter. Could be expanded to ~4 units by a
  follow-up Bratteli-Robinson audit; for the Gérard pass one unit
  suffices.
- **GR chapter expansion: `13-gr-cosmology/09-qft-curved/`.** The
  ten units `13.09.01`–`13.09.11` are all new and form a coherent
  sub-chapter. They depend back on the existing
  `13.01`–`13.08` GR-cosmology base.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, originator-prose
treatment should cite, in addition to Gérard 2019 as the consolidated
textbook:

- L. Hörmander, "Fourier integral operators I," *Acta Math.* 127
  (1971) 79–183 — originating the modern wave-front-set / FIO
  calculus.
- M. J. Radzikowski, "Micro-local approach to the Hadamard condition
  in quantum field theory on curved space-time," *Comm. Math. Phys.*
  179 (1996) 529 — originating the WF-criterion definition of
  Hadamard states.
- B. S. Kay, R. M. Wald, "Theorems on the uniqueness and thermal
  properties of stationary, nonsingular, quasifree states on
  spacetimes with a bifurcate Killing horizon," *Phys. Rep.* 207
  (1991) 49 — originating the Hadamard-form definition and the
  uniqueness theorem on bifurcate Killing horizons.
- S. A. Fulling, F. J. Narcowich, R. M. Wald, "Singularity structure
  of the two-point function in quantum field theory in curved
  spacetime, II," *Ann. Phys.* 136 (1981) 243 — originating the
  deformation argument for existence of Hadamard states.
- R. Brunetti, K. Fredenhagen, M. Köhler, "The microlocal spectrum
  condition and Wick polynomials of free fields on curved spacetimes,"
  *Comm. Math. Phys.* 180 (1996) 633 — originating renormalised Wick
  polynomials via Hadamard parametrix subtraction.
- S. Hollands, R. M. Wald, "Local Wick polynomials and time ordered
  products of quantum fields in curved spacetime," *Comm. Math.
  Phys.* 223 (2001) 289; "Existence of local covariant time ordered
  products of quantum fields in curved spacetime," 231 (2002) 309;
  "On the renormalization group in curved spacetime," 237 (2003)
  123 — originating the rigorous perturbative renormalisation
  programme on curved backgrounds.
- R. Brunetti, K. Fredenhagen, R. Verch, "The generally covariant
  locality principle — a new paradigm for local quantum field
  theory," *Comm. Math. Phys.* 237 (2003) 31 — originating the
  locally-covariant-functor framework.
- J. J. Bisognano, E. H. Wichmann, "On the duality condition for a
  Hermitian scalar field," *J. Math. Phys.* 16 (1975) 985 and "On
  the duality condition for quantum fields," 17 (1976) 303 —
  originating the modular-boost identification used in the rigorous
  Unruh effect.
- T. S. Bunch, P. C. W. Davies, "Quantum field theory in de Sitter
  space: renormalization by point-splitting," *Proc. R. Soc. A* 360
  (1978) 117 — originating the Bunch-Davies state.
- C. J. Fewster, "A general worldline quantum inequality," *Class.
  Quant. Grav.* 17 (2000) 1897 — originating quantum energy
  inequalities at the level required for the curved-spacetime
  treatment.
- A. N. Bernal, M. Sánchez, "Smoothness of time functions and the
  metric splitting of globally hyperbolic spacetimes," *Comm. Math.
  Phys.* 257 (2005) 43 — originating the smooth Cauchy-surface
  splitting theorem.
- C. Gérard, M. Wrochna, "Construction of Hadamard states by
  pseudo-differential calculus," *Comm. Math. Phys.* 325 (2014) 713 —
  originating the direct pseudo-differential construction Gérard
  features in Ch. 8.

**Notation crosswalk.** Gérard uses several physics-track conventions
that need explicit recording in each new unit's §Notation paragraph:

| Object | Gérard | Codex convention | Resolution |
|---|---|---|---|
| Metric signature | $(-,+,+,+)$ "mostly plus" | physics-side: variable; flat-space QFT (Chatterjee output) is $(+,-,-,-)$ "mostly minus" | Adopt Gérard's $(-,+,+,+)$ for the entire `13.09.*` series (matches the modern Lorentzian-PDE literature including Bär-Ginoux-Pfäffle); record at top of `13.09.01` and `13.09.02`, and flag the boundary with the $(+,-,-,-)$ flat-space units `08.10.*`. |
| Wave-front set | $\mathrm{WF}(u) \subset T^*M \setminus 0$, conic in $\xi$ | new to Codex | Adopt Gérard's notation as canonical. Use $\mathrm{WF}'$ for operator wave-front set (image under involution $(x,\xi) \mapsto (x,-\xi)$). |
| d'Alembertian | $\Box_g = g^{\mu\nu}\nabla_\mu\nabla_\nu$ | absent from Codex (only $\Delta$ on Riemannian manifolds) | Use $\Box_g$ throughout `13.09.*`; flag the sign convention (Gérard's $(-,+,+,+)$ signature gives $\Box_g = -\partial_t^2 + \Delta$ in normal coordinates, opposite of the $(+,-,-,-)$ convention). |
| Klein-Gordon mass parameter | $m^2 \geq 0$ | $m^2 > 0$ in Chatterjee | Allow $m = 0$ (massless case is geometrically natural via null geodesics); record at top of `13.09.02`. |
| Causal propagator | $E = E^+ - E^-$ (advanced minus retarded) | absent from Codex | Adopt; note sign-convention disagreement with some sources (e.g. Bär-Ginoux-Pfäffle use $E = E^- - E^+$ in some sections). |
| CCR commutator | $[\phi(f), \phi(g)] = i\sigma(f,g)\mathbf{1}$ | $[\phi(f), \phi(g)] = i E(f,g)\mathbf{1}$ (causal-propagator form) | They agree: $\sigma(f,g) = \int E(f,g)\, d\mathrm{vol}_g$. Record the conversion in `12.14.01`. |
| State / functional | $\omega : \mathcal{A} \to \mathbb{C}$, linear positive normalised | absent from Codex (Codex has vacuum vectors, not states-as-functionals) | Adopt the algebraic-state convention for the entire algebraic-QFT subchapter; flag the boundary with the Hilbert-space-vector formulation in `08.10.*`. |
| Two-point function | $\omega_2(x,y) = \omega(\phi(x)\phi(y))$ as a distribution in $\mathcal{D}'(M \times M)$ | flat-space: vacuum expectation $\langle 0|\phi(x)\phi(y)|0\rangle$ | Equivalent; adopt distributional notation throughout `13.09.*`. |
| Pseudo-differential symbol class | $S^m_{1,0}$ (Hörmander class with $(\rho,\delta) = (1,0)$) | absent | Adopt; record at top of `02.14.02`. |

Notation decisions for the curved-spacetime QFT track must be
recorded in a §Notation paragraph of every Priority-1 unit, per
`docs/specs/UNIT_SPEC.md` §11.

**Lean status.** All new units ship with `lean_status: none`. Mathlib
has no microlocal-analysis library and no algebraic-QFT library;
formalisation is open (would be a significant research project in
its own right). The Lean-gap note matches the existing `08-stat-mech/`
and `12-quantum/` chapters' `lean_status: none` precedent.

---

## §5 What this plan does NOT cover

- **Bär-Ginoux-Pfäffle in detail.** The classical-PDE companion (free
  PDF on arXiv) covers the Cauchy-problem and Green's-function
  material of Gérard Ch. 5–6 in greater depth. If a separate
  Bär-Ginoux-Pfäffle audit is run, it should consolidate the
  `13.09.02` Klein-Gordon-Cauchy unit and the FNW deformation
  argument. Flag for FT roadmap.
- **Wald 1994 *Quantum Field Theory in Curved Spacetime and Black
  Hole Thermodynamics*.** The physicist-side companion (Hawking
  effect, particle creation, black-hole thermodynamics). Not on
  current FT booklist; flag for FT expansion. Would consolidate
  the `13.09.10`–`13.09.11` black-hole / Unruh material.
- **Path-integral / Euclidean approach to curved-spacetime QFT.**
  Gérard is operator-algebraic / canonical. The Euclidean side
  (Glimm-Jaffe-style + Osterwalder-Schrader on curved manifolds) is
  out of scope here; partly handled by the Parisi-Wu audit and the
  `08-stat-mech/10-qft/` flat-space units.
- **String theory and Riemann-surface CFT on curved spacetime.**
  Out of scope; lives with Deligne-et-al FT 3.43 and the
  algebraic-geometry / Riemann-surfaces chapters.
- **Locally covariant QFT functor (BFV 2003) developed in full.**
  Pointer only (P4 item 17); developing the category-theoretic
  framework requires the categorical-algebra prereqs in chapter 1.
  Defer.
- **Hawking effect as a derived theorem.** Out of scope (P4
  item 18); Gérard sketches but does not derive.
- **A line-number-level inventory of every named theorem in
  Gérard's 10 chapters.** Full P1 audit deferred; this pass works
  from the published TOC + preprint co-anchors. After local PDF
  acquisition, a follow-up P1-full audit may add a few specialist
  units or rebalance Priority-2 vs Priority-3 ordering. Adjustments
  expected to be cosmetic.
- **Exercise-pack production.** Gérard 2019 is a textbook with end-of-
  chapter exercises (per EMS TOC); an exercise pack would be a
  P3-priority-3 follow-up after the Priority-1 units ship.
- **Lean formalisation.** As noted in §4, `lean_status: none`
  throughout.

---

## §6 Acceptance criteria for FT equivalence (Gérard)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The analysis-chapter Schwartz / tempered-distribution prereqs have
  shipped (strict prereq — shared with Chatterjee / Sternberg).
- The three microlocal-analysis units (`02.14.01`–`02.14.03`) have
  shipped (strict prereq for the `13.09.*` series).
- The CCR / Weyl / quasi-free-state unit (`12.14.01`) has shipped
  (strict prereq for `13.09.03` and onward).
- ≥95% of Gérard's named theorems in Ch. 1–9 map to Codex units
  (currently 0%; after Priority-1 units this rises to ~70% — the
  microlocal + globally-hyperbolic + Radzikowski-criterion + FNW
  existence track is closed; after Priority-1 + Priority-2 to ~90% —
  pseudo-differential construction + Hollands-Wald renormalisation +
  Bunch-Davies + Unruh closed; full ≥95% requires the Priority-3
  black-hole units).
- ≥90% of Gérard's worked computations (KG well-posedness on a
  globally hyperbolic background; Araki-Woods Fock construction
  from a quasi-free state; the Bunch-Davies mode sum; the
  Bisognano-Wichmann modular-boost identification) have a direct
  unit or are referenced from a unit that covers them.
- Notation decisions are recorded per §4 (signature, wave-front
  set, $\Box_g$, CCR commutator, distributional two-point function).
- Pass-W weaving connects the new `13.09.*` units to (a) the
  existing `13.01`–`13.08` GR-cosmology base via the Cauchy-surface
  + Schwarzschild + FLRW + de-Sitter pointers; (b) the existing
  `08.10.*` flat-space QFT units via the
  Wightman-axiom-on-Minkowski / Radzikowski-on-curved boundary; (c)
  the existing `05.02.06-geodesic-flow-hamiltonian.md` via the
  Lorentzian-extension deepening; (d) the new `02.14.*` microlocal
  units; (e) the new `12.14.*` algebraic-QFT subchapter.

The 8 Priority-1 units close most of the equivalence gap for the
curved-spacetime QFT core. Priority-2 closes the
renormalisation / cosmology / Unruh track. Priority-3 closes the
black-hole specialist track. Priority-4 are deepenings / pointers.

---

## §7 Sourcing

- **Gérard 2019 EMS.** Not free. EMS Press hosted at
  <https://ems.press/books/elm/206>; print ISBN 978-3-03719-094-4;
  DOI 10.4171/094. Library Genesis copies of the EMS PDF circulate.
  Not currently on disk under `reference/fasttrack-texts/`. **P2
  acquisition follow-up:** institutional download or purchase; add
  to `reference/fasttrack-texts/03-advanced-qft/Gerard-MicrolocalQFTonCurvedSpacetimes.pdf`
  to mirror the existing Tier-2 layout.
- **Bär-Ginoux-Pfäffle 2007 ESI.** Free PDF on arXiv at
  <https://arxiv.org/abs/0806.1036>. Companion classical-PDE volume;
  download and add to
  `reference/fasttrack-texts/03-advanced-qft/Baer-Ginoux-Pfaffle-WaveEquationsLorentzian.pdf`.
  Useful as an authoritative free secondary anchor for `13.09.01`
  and `13.09.02`.
- **Radzikowski 1996 *Comm. Math. Phys.*.** Springer-paywalled. The
  paper is short (~30 pp.) and circulates as a scanned PDF; cite
  from the published version.
- **Hollands-Wald *Phys. Rep.* 574 (2015).** Elsevier-paywalled, but
  Hollands has an author-hosted preprint at
  <https://arxiv.org/abs/1401.2026> ("Quantum fields in curved
  spacetime"). Free arXiv version is the most-quoted modern review
  on the subject; **download** to
  `reference/fasttrack-texts/03-advanced-qft/Hollands-Wald-QFTCurvedSpacetime-2015.pdf`.
  Together with Bär-Ginoux-Pfäffle this gives a free secondary-anchor
  pair that lets Priority-1 units be drafted *without* waiting for
  Gérard PDF acquisition.
- **Kay-Wald 1991 *Phys. Rep.* 207.** Elsevier-paywalled. Author-
  hosted preprints exist on some Wald-group pages; cite from the
  published version.
- **Hörmander vols. I + III.** Springer; library access. Already
  cited extensively in `docs/catalogs/CONCEPT_CATALOG.md`. Used as
  background reference, not as a primary anchor.
- **Originator papers (Bunch-Davies, Bisognano-Wichmann, FNW,
  Hollands-Wald 2001/2002, BFK, BFV, Gérard-Wrochna).** All are
  archival journal papers; APS / Springer / Elsevier paywalls
  apply, but Gérard-Wrochna and the more recent Hollands-Wald papers
  have arXiv versions (the BFV 2003 paper is `arXiv:math-ph/0112041`;
  Hollands-Wald 2001 is `arXiv:gr-qc/0103074`; Gérard-Wrochna 2014 is
  `arXiv:1209.2604`). Cite by reference; arXiv links suffice for the
  modern items.
- **License note.** Gérard 2019 itself is paywalled. The most
  important *free* anchors are Bär-Ginoux-Pfäffle 2007 (free PDF on
  arXiv) and Hollands-Wald 2015 review (free preprint on arXiv).
  Acquiring these two locally is the highest-leverage P2 follow-up;
  Gérard PDF acquisition is second priority.

**Audit-mode note.** This plan is marked REDUCED. The chapter-by-
chapter punch-list maps onto Gérard 2019's standard 10-chapter
structure (microlocal preliminaries → pseudo-diff calculus → symplectic
/ Hamiltonian flow → globally hyperbolic spacetimes → Klein-Gordon
Cauchy problem → CCR / Weyl / quasi-free → Hadamard states / Radzikowski
criterion → existence of Hadamard states → Wick polynomials + Hollands-
Wald renormalisation → applications). Once the Gérard PDF is acquired,
a follow-up P1-full audit should verify chapter numbering and
named-theorem counts, and may rebalance the Priority-2 / Priority-3
split (in particular, the Hartle-Hawking / Kay-Wald uniqueness material
may merit promotion to Priority-2 depending on how prominently Gérard
treats it). Adjustments expected to be cosmetic.
