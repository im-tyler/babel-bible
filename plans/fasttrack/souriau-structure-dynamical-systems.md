# Souriau — *Structure of Dynamical Systems: A Symplectic View of Physics* (Fast Track 2.11) — Audit + Gap Plan

**Book:** Jean-Marie Souriau, *Structure of Dynamical Systems: A Symplectic
View of Physics*, Progress in Mathematics 149 (Birkhäuser, Boston 1997,
xxxiv + 406 pp.). English translation by C.-H. Cushman-de Vries; original
French *Structure des systèmes dynamiques*, Dunod, Paris 1970; reissued
by Éditions Jacques Gabay 2008.

**Fast Track entry:** 2.11 on the booklist (`docs/catalogs/FASTTRACK_BOOKLIST.md`
line 71, listed as "BUY"; statistical-physics block alongside Landau-Lifshitz
2.10 and Baxter 2.12). The book is also called out in the `FASTTRACK_COVERAGE_ROADMAP.md`
§2 endgame batch and in the `FASTTRACK_EQUIVALENCE_PLAN.md` stat-physics
list.

**PDF status — REDUCED PASS.** No local PDF in
`reference/fasttrack-texts/`, `reference/book-collection/free-downloads/`,
or `~/Downloads`. Birkhäuser / Springer page returned 404 from WebFetch;
the title is BUY-only and not freely posted. This plan is produced from
canonical background knowledge of Souriau's book (the standard reference
treatment in Marsden-Ratiu, Guillemin-Sternberg, Abraham-Marsden,
Woodhouse — all of which cite Souriau extensively chapter-by-chapter)
plus the existing Codex symplectic-chapter inventory. A full P1
line-number inventory is deferred until a copy is acquired.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
units to write **and** existing units to deepen so that *Structure of
Dynamical Systems* is covered to the equivalence threshold (≥95% effective
coverage of theorems, key examples, exercise pack, notation, sequencing,
intuition, applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§3.4).

The audit surface is **smaller than Cannas or Hatcher in raw new-unit
count** but **conceptually distinctive**: Souriau's book is the
*originator-text* for the modern moment-map / coadjoint-orbit / geometric-
quantisation / symplectic-statistical-mechanics package. Most of its
*modern* content has already been shipped via the Cannas-anchored
`05-symplectic/` chapter (21 units across 7 sub-chapters), the
Marsden-Weinstein-anchored reduction audit (Cycle 4-7), and adjacent
KAM / integrable / contact units. What is **missing** is Souriau's
*originator-distinctive* content: (i) the Souriau cocycle and non-equivariant
moment maps, (ii) the symplectic / Lie-group formulation of Gibbs
statistical mechanics, (iii) the *original* classification of elementary
particles by coadjoint orbits of Galilei and Poincaré, and (iv) the
Bose-Fermi alternative read off from the topology of the spin coadjoint
orbit. These four blocks are the Souriau-specific deepenings and small
new-unit additions this plan tracks.

---

## §1 What Souriau's book is for

Souriau's *Structure of Dynamical Systems* (SDS hereafter) is the
**originator-text for the modern symplectic-geometric formulation of
physics**. Where Arnold *Mathematical Methods of Classical Mechanics*
(FT 1.0a) gives the mechanics-first, KAM-friendly symplectic textbook,
and Cannas da Silva (FT 1.11) gives the modern lecture-note synthesis,
Souriau gives the *philosophical-foundational* treatment in which the
phase space of *every* physical system — classical particle, classical
spin, classical or quantum elementary particle, statistical-mechanics
state — is a symplectic (or pre-symplectic) manifold with a Hamiltonian
action of a Lie group, and physical observables are recovered as the
moment map.

The historical importance is hard to overstate. Souriau introduced the
**moment map** (he called it the "moment géométrique") independently of
Kostant and earlier than the modern Marsden-Weinstein 1974 formulation;
he introduced the **Souriau cocycle** that measures the failure of
equivariance of a Hamiltonian action and showed that it classifies the
central extensions of the Lie algebra needed for a faithful
representation on phase space; he classified the **elementary classical
systems** of the Galilei and Poincaré groups as coadjoint orbits, with
mass and spin emerging as Casimir invariants of the orbit, **before**
the quantum-mechanical Wigner / Bargmann classification was rephrased
symplectically; he gave the **symplectic-statistical-mechanics**
framework in which a Gibbs state on a symplectic manifold with a
Hamiltonian $G$-action is determined by a generalised temperature
$\beta \in \mathfrak{g}$ (a Lie-algebra element, not just a real number);
and he derived the **Bose-Fermi alternative** for the spin coadjoint
orbit from the geometric prequantisation condition on the spin orbit,
giving a *classical-symplectic* origin for the spin-statistics
distinction.

Distinctive contributions, in roughly the order SDS develops them
(reconstructed from chapter listings cited in Marsden-Ratiu and
Guillemin-Sternberg):

1. **Pre-symplectic manifolds.** Souriau works in the more general
   pre-symplectic category (closed 2-form, possibly with kernel) and
   recovers symplectic geometry as the quotient by the characteristic
   foliation. This is the *natural* setting for constrained systems and
   for the reduced phase space of a Lie-group action with a non-trivial
   stabiliser. Babel Bible's symplectic chapter is *exclusively* symplectic;
   pre-symplectic is absent.
2. **The moment map** (introduced here under the name *moment* — French
   "moment cinétique" → English "momentum map"). Souriau's definition is
   the same as the modern one: a $G$-equivariant map $\mu : M \to
   \mathfrak{g}^*$ with $d\mu^X = \iota_{X^\sharp}\omega$ for every
   $X \in \mathfrak{g}$. Codex `05.04.01` ships this.
3. **The Souriau cocycle.** When a Hamiltonian $G$-action does *not*
   admit an equivariant moment map, the failure-of-equivariance is
   measured by a Lie-algebra 2-cocycle $\sigma : \mathfrak{g} \times
   \mathfrak{g} \to \mathbb{R}$, the **Souriau cocycle**. It is a
   central extension of $\mathfrak{g}$ — the *moment-map extension* —
   and classifies the non-equivariant case. This is Souriau-original;
   it is the basis for Marsden-Ratiu's treatment of non-equivariant
   reduction in *Introduction to Mechanics and Symmetry* §12. **Codex
   has no coverage of the cocycle or of non-equivariant moment maps.**
4. **Coadjoint orbits as the classical configuration space of an
   elementary system.** Souriau classifies the connected, transitive
   $G$-Hamiltonian symplectic manifolds (for $G$ a connected Lie group)
   as covers of coadjoint orbits of the cocycle-extended central
   extension $\widetilde{G}$. For $G$ the Galilei group, the elementary
   systems are parametrised by mass $m > 0$ (the central charge) and
   spin $s \geq 0$ (a Casimir of the rotation subgroup); for $G$ the
   Poincaré group, mass and spin again. This is the *symplectic-classical*
   analogue of the Wigner classification of irreducible unitary
   representations. Codex `05.03.01` ships *coadjoint orbits* as
   symplectic manifolds (with the Kirillov-Kostant-Souriau form) but
   does not develop the classification-of-elementary-systems direction.
5. **Geometric formulation of statistical mechanics on a symplectic
   $G$-space.** Souriau replaces the canonical-ensemble Gibbs state
   $\rho \propto e^{-\beta H}$ with the generalised
   $\rho_\beta \propto e^{-\langle \beta, \mu(x)\rangle}$ where
   $\beta \in \mathfrak{g}$ is a Lie-algebra-valued *generalised
   temperature* and $\mu : M \to \mathfrak{g}^*$ is the moment map. The
   partition function $Z(\beta) = \int_M e^{-\langle \beta, \mu\rangle}\,
   \omega^n / n!$ is a function on $\mathfrak{g}$; its first and second
   derivatives recover the mean of the moment and its covariance.
   When $G = \mathbb{R}$ acting by time translations and $\mu = H$ the
   energy, the classical Gibbs ensemble is recovered. **This is a
   uniquely-Souriau framework**; it has been picked up in the modern
   *information-geometric* literature (Barbaresco, Marle) but the
   originator-statement is Souriau Chapter IV. Codex `11.04.01`
   ships the canonical-ensemble Gibbs state on phase space; the
   Lie-group / moment-map generalisation is absent.
6. **Prequantisation and the integrality condition.** Souriau states
   the prequantisation condition independently of Kostant (1970): a
   symplectic $(M, \omega)$ admits a prequantum line bundle with
   connection of curvature $\omega/\hbar$ iff $[\omega/(2\pi\hbar)] \in
   H^2(M, \mathbb{Z})$ is integral. Souriau Chapter V develops
   prequantisation, polarisations, and geometric quantisation in
   parallel with Kostant's *Quantization and Unitary Representations*
   (Springer LNM 170, 1970). The full geometric-quantisation programme
   has its own FT entry (Woodhouse, FT 3.09) and is deferred there;
   Souriau's contribution here is to give the prequantisation condition
   simultaneously with Kostant. Codex has no prequantisation unit.
7. **The Bose-Fermi alternative from coadjoint-orbit topology.**
   Souriau Chapter V applies geometric quantisation to the spin
   coadjoint orbit $S^2$ (with KKS form $s \cdot \omega_{S^2}$) and
   shows that the integrality / prequantisation condition forces the
   spin $s$ to be a half-integer. The connected component of the
   identity in the prequantisation group then has *two* connected
   components depending on whether $s$ is integer (single-valued
   representation = Bose statistics) or half-integer (double-valued =
   Fermi statistics). This is the **classical-symplectic origin of the
   spin-statistics distinction**, independent of the full
   relativistic-QFT spin-statistics theorem. Codex has no unit on this.
8. **Galilei and Poincaré symmetry as the structural axiom.** Souriau
   treats the Galilei group (for non-relativistic systems) and the
   Poincaré group (for relativistic systems) as the *primary*
   structural data — the phase space is built *from* the symmetry, not
   imposed on top of it. The Galilei group's Souriau-cocycle central
   charge is the mass; the Poincaré group has no analogous non-trivial
   cocycle (it is its own universal central extension), so mass appears
   instead as a Casimir of the orbit. This is the cleanest single
   statement of why Galilean and Poincaré mechanics look structurally
   different. Babel Bible's `05.00.06` Galilean-Newtonian setup is a
   templated stub; no Poincaré-symplectic unit exists.

SDS is **not** a first introduction to symplectic geometry or to
classical mechanics; it assumes ease with manifolds, Lie groups,
Lie-algebra cohomology, and Hamiltonian mechanics in the Arnold sense.
It is the canonical originator-text once a reader is past Cannas / Arnold
and wants the originator-flavour of the moment-map / coadjoint-orbit /
prequantisation programme. Its modern downstream is **Marsden-Ratiu**
(*Introduction to Mechanics and Symmetry*, 2nd ed. Springer 1999, the
standard modern reference, which cites Souriau on essentially every
chapter), **Guillemin-Sternberg** (*Symplectic Techniques in Physics*,
Cambridge 1984, which builds on Souriau-Kostant geometric quantisation),
**Abraham-Marsden** (*Foundations of Mechanics* 2nd ed. 1978, the
historical companion volume), and **Woodhouse** (*Geometric
Quantization* 2nd ed. 1991, FT 3.09 — the standard reference for the
Souriau-Kostant programme on the quantum side).

---

## §2 Coverage table (Babel Bible vs Souriau)

Cross-referenced against the 50 shipped units in `05-symplectic/` (per
the v0.5 Strand-B production, plus the Cycle 4-7 deepenings of the
moment map and reduction units), the partition-function unit
`11.04.01` (canonical ensemble), and the Fock-space unit `12.03.01`.
✓ = covered at Souriau-equivalent depth, △ = topic present but Codex
unit shallower than SDS's chapter (typically a Cannas-anchored modern
treatment lacking the Souriau-originator framing), ✗ = not covered.
The symplectic chapter retains the templated-prose problem flagged in
the Cannas plan: the Master "Key theorem with proof" on many units is
a generic Cartan-formula calculation, so several △ entries below
reflect *Souriau-distinctive* depth gaps on top of the modern-depth
gaps the Cannas plan already tracks.

### Chapter I — Differential geometry foundations (manifolds, forms, Lie groups)

| Souriau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Smooth manifold, tangent / cotangent bundle, differential forms | `03.01.*`, `03.02.*` | ✓ | Standard foundations; covered fully in `03-modern-geometry/`. |
| Lie group, Lie algebra, exponential map | `03.03.*`, `03.04.*` | ✓ | Covered in `03-modern-geometry/03-lie/`. |
| Lie-algebra cohomology (low degrees: $H^1, H^2$) | — | ✗ | **Gap.** Required for the Souriau cocycle. The cohomology infrastructure exists in the `03-modern-geometry/` chapter but the specifically Lie-algebraic case at $H^2$ has no dedicated unit. Souriau-distinctive prerequisite. |

### Chapter II — Symplectic geometry (pre-symplectic, symplectic, Hamiltonian actions)

| Souriau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Symplectic manifold, Darboux | `05.01.02`, `05.01.04` | △ | Topic present; Darboux proof is templated. Same gap as Cannas plan item 2. |
| **Pre-symplectic manifold** (closed 2-form, kernel = characteristic foliation, symplectic reduction $M / \ker\omega$) | — | ✗ | **Gap (Souriau-distinctive).** Souriau's natural framework for constrained systems and reduced phase spaces; modern symplectic books drop it. No Babel Bible unit. |
| Hamiltonian vector field, Poisson bracket | `05.02.01`, `05.02.02` | ✓ | Covered. |
| Symplectic action of a Lie group | `05.04.01` (mention) | △ | Setup-level fact appears in passing in the moment-map unit; not its own unit. |
| **Moment map** (Souriau-original definition) | `05.04.01` | △ | Modern Cannas-anchored unit; Souriau's *naming* and historical priority not flagged. Add a sentence in the Master section + originator citation. |
| **Souriau cocycle** (non-equivariant moment map; $\sigma : \mathfrak{g} \times \mathfrak{g} \to \mathbb{R}$ measuring failure of equivariance; central extension of $\mathfrak{g}$) | — | ✗ | **Gap (high priority — Souriau-distinctive).** The single most-load-bearing missing piece for any honest Souriau equivalence claim. Used as foundational machinery in Marsden-Ratiu §12. |
| Equivariant moment maps and the obstruction to equivariance | `05.04.01` (partial) | △ | Equivariance is assumed in the current Codex moment-map unit; the obstruction theorem (when can the cocycle be killed by adding a constant) is not stated. |
| **Marsden-Weinstein-Meyer reduction** (regular case) | `05.04.02` | △ | Modern reduction unit; the Cycle 4-7 deepening fixed the proof template; Souriau-originator citation needed. |
| Coadjoint action, coadjoint orbit, **Kirillov-Kostant-Souriau form** | `05.03.01` | △ | KKS form covered; Souriau's name in the eponym appears but the originator framing (every transitive Hamiltonian $G$-space is a cover of a coadjoint orbit) is not built out. |
| **Classification of homogeneous symplectic $G$-spaces** (Kirillov-Kostant-Souriau theorem: connected transitive Hamiltonian $G$-actions on symplectic manifolds correspond to coadjoint orbits of the cocycle-extension $\widetilde{G}$) | — | ✗ | **Gap (Souriau-distinctive).** The classification half of the KKS triple is not stated. Codex covers what coadjoint orbits *are* but not that they are *the* classical objects. |

### Chapter III — Mechanics (Galilei / Poincaré symmetry, elementary systems)

| Souriau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Galilei group, Galilei algebra, central extension by mass (Bargmann extension) | `05.00.06` (stub) | △ | The Galilean-Newtonian setup unit exists but is templated; the Bargmann central extension and the Souriau-cocycle origin of mass are not covered. |
| Poincaré group, Poincaré algebra | — | ✗ | **Gap.** No symplectic-Poincaré unit. Some adjacent SR content in `10-em-sr/`. |
| **Elementary classical system = coadjoint orbit of the (extended) symmetry group** | — | ✗ | **Gap (high priority — Souriau-distinctive).** The classification-of-particles story symplectically. Galilei elementary systems classified by $(m, s)$; Poincaré by $(m, s)$ + sign of energy. |
| Classical spin as the $S^2$ coadjoint orbit of $\mathrm{SO}(3)$ with the area form scaled by $s$ | `05.03.01` (general coadjoint orbits) | △ | $S^2$ as the canonical coadjoint orbit appears as the headline example in `05.03.01` Intermediate section but not as a *classical spin* model. |
| Charged particle in an electromagnetic field as a Hamiltonian system on $T^*\mathbb{R}^3$ with twisted symplectic form $\omega + \pi^* F$ | — | ✗ | **Gap.** Souriau's geometric model of magnetic coupling via the "minimally-coupled" symplectic form. Cross-link to `10-em-sr/` electromagnetism. |
| Time-dependent Hamiltonian systems via the extended pre-symplectic phase space $T^*Q \times \mathbb{R}_t$ | — | ✗ | **Gap.** Souriau's natural setting for non-autonomous mechanics; modern texts split this off into contact geometry. |

### Chapter IV — Statistical mechanics on a symplectic $G$-space (Souriau-distinctive)

| Souriau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Canonical Gibbs ensemble on phase space, partition function $Z(\beta)$ | `11.04.01` canonical-ensemble | ✓ | Covered at the standard Landau-Lifshitz / Pathria level. |
| **Souriau Gibbs state $\rho_\beta \propto e^{-\langle \beta, \mu(x)\rangle}$ on a symplectic $G$-space**, generalised temperature $\beta \in \mathfrak{g}$ | — | ✗ | **Gap (high priority — Souriau-distinctive).** The headline Chapter-IV result. The generalised-temperature framework. |
| **Souriau partition function $Z : \mathfrak{g} \to \mathbb{R}$**, mean moment $\bar\mu = -d\log Z / d\beta$, covariance / Fisher information $-d^2 \log Z / d\beta^2$ | — | ✗ | **Gap.** The Souriau-information-geometric framework picked up by Barbaresco and Marle in the 2010s. |
| Recovery of the canonical ensemble as the $G = \mathbb{R}$ time-translation case | — | ✗ | **Gap (low priority — a remark in the new unit).** |
| Recovery of relativistic Gibbs / Jüttner ensemble from the Poincaré-group case | — | ✗ | **Gap (low priority — Master section in the new unit).** |

### Chapter V — Quantum mechanics (prequantisation, geometric quantisation, Bose-Fermi)

| Souriau topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Prequantum line bundle, connection of curvature $\omega/\hbar$, prequantisation map $f \mapsto -i\hbar \nabla_{X_f} + f$ | — | ✗ | **Gap.** Pointer unit at FT-equivalence; full development is FT 3.09 Woodhouse. |
| **Souriau-Kostant integrality condition** $[\omega/(2\pi\hbar)] \in H^2(M, \mathbb{Z})$ | — | ✗ | **Gap (medium priority — Souriau-distinctive originator share with Kostant).** Stub-level unit suffices for FT-equivalence; depth deferred to Woodhouse. |
| Polarisations (real, complex, Kähler), geometric quantisation | — | ✗ | Deferred to FT 3.09 Woodhouse. |
| **Quantisation of the spin coadjoint orbit $S^2$**, integrality forces $s \in \frac{1}{2}\mathbb{Z}_{\geq 0}$ | — | ✗ | **Gap (Souriau-distinctive).** The classical-symplectic origin of half-integer spin. |
| **Bose-Fermi alternative from the spin orbit prequantisation** ($s$ integer ⇒ Bose; $s$ half-integer ⇒ Fermi; double-valued representation of the prequantum group) | — | ✗ | **Gap (high priority — Souriau-distinctive headline result of Chapter V).** No comparable Babel Bible content. |
| Spin-statistics theorem at the QFT level | — | ✗ | Cross-strand to QFT; not Souriau's territory. Defer to Weinberg QFT (FT 2.17). |
| Bose / Fermi Fock spaces, second quantisation | `12.03.01` bosonic-fock-space | △ | Bosonic case shipped; Fermi case stub-only; the Souriau-cocycle origin of the Bose-Fermi distinction is not the framing. |

### Topics Souriau covers as remarks / pointers (no Codex equivalence-coverage required)

| Souriau topic | Status | Note |
|---|---|---|
| Quantisation of the harmonic oscillator and the hydrogen atom (Chapter V worked examples) | — | Pointer-only in Souriau (the headline examples in the Kostant programme); defer to Woodhouse FT 3.09. |
| Symplectic geometry of fluid mechanics (Arnold-Khesin programme) | — | Souriau touches it; defer to Arnold-Khesin *Topological Methods in Hydrodynamics* (not yet on FT). |
| Diffeology (post-1970 Souriau extension framework) | — | Not in *Structure of Dynamical Systems*; in Souriau's 1980s-90s papers. Defer entirely. |

### Aggregate coverage estimate

**Theorem layer**: ~70% of SDS's named theorems map to Babel Bible units at
the *topic level* (modern Cannas-anchored versions); only ~45% are at
Souriau-distinctive *originator-framing depth*. The remaining 30%
(Souriau cocycle, non-equivariant moment maps, KKS classification
theorem, pre-symplectic framework, elementary-system classification
for Galilei / Poincaré, Souriau Gibbs state and partition function,
prequantisation integrality, Bose-Fermi alternative) are **absent at
any depth** and are concentrated in Chapters III-V.

After the priority-1 punch-list below, theorem-level coverage rises
to ~90% and originator-framing depth to ~75%; after priority-1+2 to
~95% theorem-level and ~85% framing; priority-3 brings framing to
~92%.

**Exercise layer**: not separately audited. SDS has fewer formal
"exercises" than a modern textbook; it has worked examples and remarks
that function pedagogically as exercises. Defer to a dedicated pass
after the priority-1 batch.

**Worked-example layer**: ~30% covered. SDS's lead examples ($S^2$
coadjoint orbit as classical spin, charged particle in $F$, Galilei /
Poincaré elementary systems, Souriau Gibbs ensemble for rotation /
translation actions) are mostly absent from the corresponding Codex
units. The Cycle 4-7 deepening of `05.04.01` / `05.04.02` partially
fixed the moment-map / reduction worked-example slot but not the
Galilei-Poincaré / statistical-mechanics ones.

**Notation layer**: ~60% aligned. Souriau's notation is idiosyncratic
(French-Bourbaki Cartan-calculus conventions, distinctive symbols for
the moment $\mu$ vs. modern $J$, the cocycle $\sigma$ or $\theta$, the
generalised temperature $\beta \in \mathfrak{g}$). A `notation/souriau.md`
crosswalk is recommended for the new Chapter-III / IV units.

**Sequencing layer**: ~70%. Souriau's "symmetry-first" DAG (Lie group →
coadjoint orbit → mechanics) is the reverse of Babel Bible's current
"manifold-first → symplectic-form-first → Hamiltonian → moment map → orbit"
DAG. The DAG itself does not need to change; the *exposition* in
Master sections should add a Souriau-style symmetry-first
recapitulation paragraph for the new Chapter-III / IV units.

**Intuition layer**: ~45%. Souriau's distinctive "every elementary
system is a coadjoint orbit" intuition is the headline missing
intuition; needs to land in `05.03.01` (deepening) and in the new
Galilei / Poincaré elementary-system units.

**Application layer**: ~60%. Souriau's downstream applications
(classification of relativistic particles, classical spin, magnetic
coupling, Souriau-Gibbs statistical mechanics, Bose-Fermi from
prequantisation) are the *primary* differentiator from Cannas. Closing
the punch-list closes most of the application gap.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The Codex symplectic chapter is mature in *modern* topic coverage
(50 shipped units; the Cycle 4-7 reduction-batch deepenings already
fixed the load-bearing-technique gaps Cannas was tracking). Most of
the Souriau-specific work below is **new units in Chapters III-V
territory** (Souriau cocycle, KKS classification, Galilei / Poincaré
elementary systems, Souriau Gibbs state, prequantisation, Bose-Fermi)
plus **deepenings** of existing Cannas-anchored units to add
Souriau-originator framing. The recommended slot ranges are:

- New Souriau-cocycle / non-equivariant-moment-map content: `05.04.07-08`
  (extending the moment-reduction sub-chapter).
- New KKS classification and elementary-system content: `05.03.02-04`
  (extending the coadjoint sub-chapter).
- New Galilei / Poincaré symplectic-mechanics content: `05.00.07`,
  `05.00.09-10` (extending the lagrangian-mechanics sub-chapter, with a
  Galilei / Poincaré symplectic-mechanics sub-block).
- New Souriau-Gibbs / symplectic-statistical-mechanics content:
  `11.04.02-04` (extending the partition-functions sub-chapter of
  `11-stat-mech-physics/`).
- New prequantisation / Bose-Fermi content: a small `05.11-geometric-quantisation/`
  stub sub-chapter (`05.11.01-03`), explicitly marked as pointer-level
  with depth deferred to Woodhouse FT 3.09.

### Priority 1 — Souriau-distinctive load-bearing content

These items are the Souriau-originator content that the Cannas /
Marsden-Weinstein modern-symplectic batches **do not** cover. Without
them the symplectic chapter cannot honestly claim Souriau-equivalence.

1. **`05.04.07` Souriau cocycle and non-equivariant moment maps.**
   Definition of the cocycle $\sigma(X, Y) = \{\mu^X, \mu^Y\} -
   \mu^{[X,Y]}$, its closedness (Jacobi identity), the cohomology class
   in $H^2(\mathfrak{g}, \mathbb{R})$, the central extension
   $\widetilde{\mathfrak{g}} = \mathfrak{g} \oplus_\sigma \mathbb{R}$,
   the equivariance obstruction theorem (the cocycle is a coboundary
   iff there exists a constant shift of $\mu$ making the action
   equivariant). Souriau §11 anchor; Marsden-Ratiu §12.3-12.6 as
   modern reference. Three-tier; ~1800 words. **Highest priority —
   load-bearing for items 2, 3, 5 below.**

2. **`05.03.02` Kirillov-Kostant-Souriau classification of homogeneous
   symplectic $G$-spaces.** Statement and proof: every connected
   simply-connected transitive Hamiltonian $G$-action on a symplectic
   manifold is equivariantly symplectomorphic to a coadjoint orbit of
   the cocycle-extended group $\widetilde{G}$, equipped with the KKS
   symplectic form. Souriau Chapter II (§13-§14) anchor; Kirillov 1962
   *Unitary representations of nilpotent Lie groups*, Kostant 1970
   *Quantization and unitary representations*, Souriau 1970 as the
   three independent originators. Three-tier; ~2000 words. Prerequisite:
   `05.04.07` (cocycle) and `05.03.01` (coadjoint orbits — deepened).

3. **`05.03.03` Elementary classical system (Souriau definition)**:
   a connected simply-connected transitive Hamiltonian $G$-space; by
   item 2 = a coadjoint orbit of $\widetilde{G}$; for the Galilei group
   parametrised by $(m, s)$, mass and spin; for the Poincaré group by
   $(m, s, \epsilon)$ with energy sign. Souriau Chapter III headline
   result. Three-tier; ~1800 words. Worked examples: massive Galilei
   particle, massless Galilei (no analogue at $m=0$), Souriau classical
   spin from the $S^2$ orbit, Poincaré massive spin-$\frac{1}{2}$
   particle, Poincaré massless helicity states.

4. **`05.00.07` Galilei group and Bargmann central extension.**
   Definition of the Galilei group $G$, the algebra
   $\mathfrak{g}$ (generators: $H, P_i, K_i, J_i$ with the
   Galilei commutators), the **Bargmann cocycle** $\sigma([K_i,
   P_j]) = m\, \delta_{ij}$ giving the mass-shifted bracket
   $[K_i, P_j] = m\, \delta_{ij}$ in the extension. Souriau §12 anchor;
   Bargmann 1954 *On unitary ray representations of continuous groups*
   as parallel originator on the quantum side. Three-tier; ~1500 words.
   Foundational for items 3 and 5.

5. **`11.04.02` Souriau Gibbs state on a symplectic $G$-space.**
   Definition: $\rho_\beta = e^{-\langle \beta, \mu\rangle} / Z(\beta)$
   with $\beta \in \mathfrak{g}$ a generalised inverse temperature.
   Partition function $Z(\beta) = \int_M e^{-\langle \beta, \mu\rangle}\,
   \omega^n / n!$; first moments $\bar\mu = -d\log Z / d\beta$;
   covariance / Fisher information $-d^2 \log Z / d\beta^2 \succeq 0$.
   Souriau Chapter IV anchor; Marsden-Ratiu §12.7 (modern reference);
   Marle 2014-2016 and Barbaresco 2014-2020 as modern information-
   geometric follow-ups. Three-tier; ~2000 words. Master section:
   recovery of canonical Gibbs for $G = \mathbb{R}_t$; recovery of
   Jüttner relativistic Gibbs for $G = \mathrm{Poincaré}$. **Souriau's
   headline Chapter-IV result; uniquely-Souriau framework.**

### Priority 2 — Souriau-distinctive depth deepenings on existing units

6. **Deepen `05.04.01` moment-map.** Add Souriau-originator framing in
   the Master section: the historical note that Souriau (1969-70)
   introduced the moment map independently and earlier than the
   Marsden-Weinstein 1974 modern formulation; the *moment* terminology;
   the connection to the cocycle (forward-reference to `05.04.07`).
   No new unit ID; rewrite of the Master "Originator note" paragraph.

7. **Deepen `05.03.01` coadjoint-orbit.** Add the Souriau-originator
   half of the KKS triple in the Master section: every coadjoint orbit
   is symplectic with the KKS form, *and* every transitive Hamiltonian
   $G$-space is (a cover of) a coadjoint orbit of the extended group
   (forward-reference to `05.03.02`). The current Cycle-7 deepening
   gave the KKS-form-is-symplectic half; this adds the classification
   half. No new unit ID.

8. **`05.04.08` Equivariance obstruction and reduction in the
   non-equivariant case.** Souriau §11; Marsden-Ratiu §12.6 modern
   reference. When the cocycle is non-trivial, the reduced space is
   the quotient by the *affine* action of $G$ on $\mathfrak{g}^*$
   (shifted by the cocycle). Three-tier; ~1500 words. Cross-link to
   `05.04.02` symplectic-reduction.

9. **`05.00.09` Poincaré group and the relativistic symplectic
   particle.** Three-tier; ~1500 words. The relativistic-mechanics
   companion of `05.00.07`. Mass-shell constraint as a pre-symplectic
   manifold; reduction to the symplectic mass-shell. Souriau Chapter
   III §13. Worked example: massive spinless Poincaré particle =
   $T^*\mathbb{R}^3$ with the modified symplectic form.

10. **`05.00.10` Charged particle in an electromagnetic field
    (Souriau twisted symplectic form).** Three-tier; ~1500 words.
    Twisted form $\omega + \pi^* F$ on $T^*\mathbb{R}^3$ for $F$ the
    field 2-form; Hamiltonian flow recovers the Lorentz force. Souriau
    §13 worked example. Cross-link to `10-em-sr/`.

### Priority 3 — Geometric-quantisation stub block (pointer-only, FT 3.09 Woodhouse handoff)

These items are pointer-level units that close the Souriau-Chapter-V
coverage gap *without* duplicating the FT 3.09 Woodhouse equivalence
work. Each is Master-only, ~800-1200 words, with a pointer to the
upcoming Woodhouse audit for the full development.

11. **`05.11.01` Prequantum line bundle and the Souriau-Kostant
    integrality condition.** Souriau Chapter V §18; Kostant 1970 (joint
    originator). Statement of the integrality condition; pointer to
    Woodhouse FT 3.09 for the proof and the full prequantisation
    construction.

12. **`05.11.02` Prequantisation of the spin coadjoint orbit.**
    Souriau Chapter V §19. Half-integer spin from integrality. Pointer
    to Woodhouse FT 3.09 for the full quantisation.

13. **`05.11.03` Bose-Fermi alternative from the spin orbit
    prequantisation.** Souriau Chapter V §20 — the headline classical-
    symplectic origin of spin statistics. Pointer to QFT (FT 2.17
    Weinberg) for the full spin-statistics theorem and to FT 3.09
    Woodhouse for the geometric-quantisation depth.

### Priority 4 — Optional pre-symplectic and Lie-algebra-cohomology stubs

These items are completist; they round out Souriau's preferred
framework but are not load-bearing for FT-equivalence.

14. **`05.01.06` Pre-symplectic manifold and its characteristic
    foliation.** Souriau §1-§2 (foundational chapter). Three-tier;
    ~1200 words. Definition: closed 2-form, possibly with kernel;
    characteristic foliation = leaves tangent to $\ker\omega$;
    quotient by the foliation is symplectic when smooth. Cross-link
    to `05.10.01` contact-manifold (the odd-dim companion).

15. **`03.04.05` Lie-algebra cohomology in low degrees ($H^1, H^2$,
    central extensions).** Tucked into `03-modern-geometry/03-lie/`
    rather than `05-symplectic/`. Three-tier; ~1500 words. Standard
    Chevalley-Eilenberg construction; the $H^2$-classifies-central-
    extensions theorem. Foundational for `05.04.07` Souriau cocycle.
    Cite Knapp / Weibel as anchors; Chevalley-Eilenberg 1948 as
    originator.

16. **`11.04.03` Souriau partition function as a moment-generating
    function and Fisher-information geometry.** Master-only deepening
    of item 5; the information-geometric reformulation
    (Barbaresco-Marle programme). ~1000 words. Optional unless the
    information-geometry / Riemannian-stat-mech direction is being
    pursued separately.

17. **`11.04.04` Recovery of the canonical and relativistic Jüttner
    ensembles from the Souriau framework.** Master-only worked-example
    deepening; expands the recovery argument from item 5's Master
    section into its own short unit. ~800 words. Optional.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Souriau-equivalence batch** = priority 1 only (items 1-5):
5 new units (`05.04.07`, `05.03.02`, `05.03.03`, `05.00.07`,
`11.04.02`). Realistic production estimate (mirroring earlier
Cannas / Marsden-Weinstein / Bott-Tu batches):

- ~3-4 hours per new unit (research + draft + validate at 27/27 + Lean
  stub + Bridge / Synthesis prose). Souriau units skew higher because
  the originator-prose framing requires citing the 1970 Dunod text and
  the parallel Kostant / Kirillov / Bargmann literature.
- Priority 1 totals: 5 new × ~3.5 h = ~17-18 hours.
- Priority 1+2 totals: 5 priority-1 new + 2 deepenings (in-place
  rewrites) + 3 priority-2 new = ~30 hours. Fits a focused
  3-4 day window with 2-3 production agents in parallel.
- Priority 1+2+3: add 3 pointer-only units = ~33 hours total.
- Priority 1-4 (full Souriau-equivalence): add 4 completist units =
  ~42 hours. Optional; not required for sign-off.

**Originator-prose targets** (per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10). Souriau is himself the originator of the modern moment-map /
coadjoint-orbit / symplectic-statistical-mechanics package; the
priority-1 units must carry originator-prose treatment citing:

- **J.-M. Souriau, *Structure des systèmes dynamiques*, Dunod, Paris
  1970** (and the 1997 Birkhäuser English translation *Structure of
  Dynamical Systems*) — the book itself, the originator-text for
  items 1, 2, 5.
- **A. A. Kirillov, "Unitary representations of nilpotent Lie groups,"
  Russian Math. Surveys 17 (1962) 53-104** — independent originator
  of the coadjoint-orbit method on the representation-theory side
  (parallel originator citation for item 2).
- **B. Kostant, "Quantization and unitary representations,"
  Lectures in Modern Analysis and Applications III, Lecture Notes in
  Mathematics 170 (Springer 1970) 87-208** — independent originator of
  geometric quantisation and the prequantisation integrality condition
  (parallel originator citation for items 2, 11).
- **V. Bargmann, "On unitary ray representations of continuous groups,"
  Ann. Math. 59 (1954) 1-46** — parallel originator of the Galilei
  central extension on the quantum side (citation for item 4).
- **J. E. Marsden and A. Weinstein, "Reduction of symplectic manifolds
  with symmetry," Rep. Math. Phys. 5 (1974) 121-130** — *later*
  systematic modern formulation, cited as the modern reference rather
  than as the originator (Souriau predates).
- **J. E. Marsden and T. S. Ratiu, *Introduction to Mechanics and
  Symmetry*, 2nd ed., Texts in Applied Mathematics 17, Springer 1999**
  — modern textbook reference, anchor for items 1, 5, 8.
- **V. Guillemin and S. Sternberg, *Symplectic Techniques in Physics*,
  Cambridge UP 1984** — modern textbook reference for the
  representation-theory side, anchor for items 2, 3.
- **R. Abraham and J. E. Marsden, *Foundations of Mechanics*, 2nd ed.,
  Benjamin/Cummings 1978** — historical companion reference.
- **N. M. J. Woodhouse, *Geometric Quantization*, 2nd ed., Oxford 1991**
  — FT 3.09 forward-reference for items 11-13.

Each priority-1 unit's Master section should cite Souriau 1970 (the
originator) **and** the modern textbook anchor (Marsden-Ratiu or
Guillemin-Sternberg) explicitly.

**Notation crosswalk.** Souriau's notation is the largest single
notation-decision the symplectic chapter has had to make:

- Moment map: Souriau writes $\mu$ (modern Codex matches). Cannas
  also uses $\mu$. ✓ already aligned.
- Souriau cocycle: Souriau writes $\Theta$ or $\sigma$; Marsden-Ratiu
  uses $\sigma$. Recommend $\sigma$ for `05.04.07`.
- Generalised temperature: Souriau writes $\beta \in \mathfrak{g}$
  (Lie-algebra-valued, distinct from the scalar $\beta = 1/(kT)$ in
  `11.04.01`). Recommend keeping $\beta$ in `11.04.02` but explicitly
  flagging the Lie-algebra-valued nature in the Notation paragraph and
  cross-referencing the scalar case in `11.04.01`.
- Coadjoint action: Souriau writes $\mathrm{Ad}^*$ (modern Codex
  matches). ✓ already aligned.
- Elementary system: Souriau-specific terminology with no modern
  equivalent; introduce the term and flag the Wigner-classification
  analogue in `05.03.03`.

Record these decisions in a short `notation/souriau.md` file alongside
the existing notation crosswalks; mirror in the Master "Notation"
paragraphs of items 1, 3, 5.

**DAG edges to add.** New prerequisites arrows for the priority-1+2
batch:

- `05.04.07` (Souriau cocycle) ← {`03.04.05` Lie-algebra cohomology
  (item 15, priority 4 — block this with a TODO stub in the
  prerequisites field if item 15 ships late), `05.04.01` moment-map,
  `03.04.01` Lie-algebra (shipped)}
- `05.03.02` (KKS classification) ← {`05.04.07`, `05.03.01`
  coadjoint-orbit, `05.04.01` moment-map}
- `05.03.03` (elementary system) ← {`05.03.02`, `05.00.07` Galilei
  group / `05.00.09` Poincaré group}
- `05.00.07` (Galilei group) ← {`03.03.01` Lie group, `05.04.07` for
  the Bargmann-cocycle framing}
- `05.00.09` (Poincaré group) ← {`03.03.01`, `10-em-sr/` cross-link
  for the SR adjacency}
- `11.04.02` (Souriau Gibbs state) ← {`05.04.01` moment-map,
  `11.04.01` canonical-ensemble (modern Gibbs), `03.03.01` Lie group}
- `05.11.01-03` (prequantisation stubs) → forward-reference Woodhouse
  FT 3.09 (will be encoded once that audit ships).

**Composite Souriau + Marsden-Ratiu batch recommendation.** Because
Marsden-Ratiu §12 (Hamiltonian actions and momentum maps) is the
canonical *modern* statement of Souriau's Chapter II-III content,
producing the Souriau priority-1+2 batch alongside the (yet-to-be-
audited) Marsden-Ratiu per-book plan would yield a composite of
~10-12 units that closes both books' moment-map / cocycle /
reduction gaps simultaneously. Recommended execution path once
Marsden-Ratiu is audited.

**Composite Souriau + Landau-Lifshitz 2.10 + Baxter 2.12 batch.** The
three §2 stat-physics endgame books overlap on the canonical Gibbs
ensemble. The Souriau-Gibbs unit (`11.04.02`, item 5) is the unique
Souriau-contribution; Landau-Lifshitz 2.10 and Baxter 2.12 cover the
standard canonical / grand-canonical / lattice-model territory.
Sequencing recommendation: produce Souriau item 5 *after* the
Landau-Lifshitz per-book audit ships its canonical-ensemble baseline.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in Souriau's
  ~400 pages. (Would require a copy of the book; deferred unless the
  priority-1+2 punch-list expands. **REDUCED-PASS caveat applies.**)
- The full Souriau exercise / worked-example pack. Souriau has fewer
  formal exercises than a modern textbook and many worked examples are
  embedded in chapter prose; the dedicated example-densification pass
  is deferred.
- **The full Woodhouse FT 3.09 geometric-quantisation programme.**
  Items 11-13 are pointer-only stubs; the Souriau-Kostant prequantisation
  proof, polarisations, BKS pairing, metaplectic correction, and the
  Borel-Weil construction are all deferred to the Woodhouse per-book
  plan. Souriau's Chapter V is treated at headline-statement depth
  only; the full development is Woodhouse territory.
- The relativistic spin-statistics theorem. Souriau Chapter V gives
  the classical-symplectic *origin* of the Bose-Fermi distinction;
  the QFT-level Pauli-Lüders spin-statistics theorem is Weinberg
  *Quantum Theory of Fields* Vol. 1 (FT 2.17) territory.
- Souriau's post-1970 diffeology programme (his 1980s-90s
  generalisation of differential geometry). Not in *Structure of
  Dynamical Systems*; defer entirely.
- The Arnold-Khesin *Topological Methods in Hydrodynamics*
  symplectic-fluid-mechanics direction. Souriau touches it in remarks;
  the full programme is its own book (not currently on the FT booklist).
- Information-geometry depth beyond the basic Fisher-information
  identity in item 5. The Barbaresco-Marle 2010s programme is a
  modern Souriau-descendant but its own line of research; treat as
  optional priority-4 (item 16) unless a dedicated information-geometry
  audit is opened.
- Modern moduli-space and Donaldson-Thomas applications of the
  moment-map framework. Cannas / McDuff-Salamon / Donaldson-Kronheimer
  territory; not Souriau's.

---

## §6 Acceptance criteria for FT equivalence (Souriau)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Souriau's named theorems map to Babel Bible units **at
  Souriau-equivalent depth** (currently ~45%; after priority-1
  this rises to ~80%; after priority-1+2 to ~92%; after priority-3
  pointer stubs to ~95%).
- ≥90% of Souriau's headline worked examples (Galilei elementary
  systems, Poincaré elementary systems, classical spin from $S^2$
  orbit, charged particle in $F$, Souriau Gibbs ensemble for
  rotation / translation, $S^2$-prequantisation half-integer-spin
  derivation) are reproduced in some Babel Bible unit (currently ~10%;
  the priority-1+2 batch brings this to ~80%).
- The notation alignment is recorded in `notation/souriau.md` and
  mirrored in the new units' Notation paragraphs.
- The DAG chain `03.04.05 → 05.04.07 → 05.03.02 → 05.03.03` is
  unbroken (priority-1 dependency chain).
- The DAG chain `05.04.01 → 11.04.02` (Souriau-Gibbs state depends on
  moment map) crosses the symplectic ↔ stat-physics chapter boundary
  cleanly.
- Pass-W weaving connects the new units (`05.04.07-08`, `05.03.02-03`,
  `05.00.07/09/10`, `11.04.02`, `05.11.01-03`) to the existing
  `05.02-hamiltonian/`, `05.03-coadjoint/`, `05.04-moment-reduction/`,
  `05.10-contact/`, `11-stat-mech-physics/04-partition-functions/`,
  and `12-quantum/03-fock-spaces/` units via lateral connections.

The 5 priority-1 items close the Souriau-distinctive load-bearing
content gap. The 5 priority-2 items close the deepening / equivariance-
obstruction / Galilei-Poincaré-charged-particle gaps. The 3 priority-3
items close the Chapter-V Bose-Fermi gap at pointer-depth (full depth
deferred to FT 3.09 Woodhouse). The 4 priority-4 items are
completist; they bring originator-framing coverage from ~92% to ~95%+
but are not strictly required for sign-off.

**Honest scope.** Souriau's *Structure of Dynamical Systems* is the
**originator-text** for the moment-map / coadjoint-orbit / symplectic-
statistical-mechanics package that the modern Codex symplectic chapter
already covers in Cannas-anchored modern form. The work in this plan
is dominated by **originator-framing additions** (Souriau cocycle,
KKS classification theorem, elementary-system classification, Souriau-
Gibbs state) and small numbers of **new units in the Galilei /
Poincaré symplectic-mechanics adjacency**, not by wholesale new-chapter
production. The modern-symplectic and reduction infrastructure
shipped via the Cannas and Marsden-Weinstein audits (Cycle 4-7)
already provides ~70% topic-level coverage; the punch-list closes the
remaining 30% concentrated in Souriau-distinctive Chapters III-V.

**Reduced-pass caveat.** This plan is produced *without* a local copy
of the Birkhäuser 1997 PDF. The chapter listing, theorem set, and
notation conventions cited above are reconstructed from canonical
secondary sources (Marsden-Ratiu, Guillemin-Sternberg, Abraham-Marsden,
Woodhouse) and from the existing Codex symplectic-chapter inventory.
A full P1 line-number audit and an exercise / worked-example
inventory pass require acquiring the book (BUY on the FT booklist).
The priority-1 punch-list above is robust under any reasonable
revision once a copy is in hand; the priority-3+4 items may shift
slightly in scope. Re-audit at full depth when the book is acquired.

---

## §7 Sourcing

- **Status:** BUY on `docs/catalogs/FASTTRACK_BOOKLIST.md` line 71. Not
  freely available; the 1997 Birkhäuser English translation is the
  canonical edition for citation.
- **Original.** Jean-Marie Souriau, *Structure des systèmes dynamiques*,
  Dunod, Paris 1970 (in French; the original publication). Reissued
  by Éditions Jacques Gabay, Paris 2008.
- **English translation.** *Structure of Dynamical Systems: A
  Symplectic View of Physics*, translated by C.-H. Cushman-de Vries,
  Progress in Mathematics 149, Birkhäuser, Boston 1997, ISBN
  978-0-8176-3695-1. The canonical English citation.
- **Local copy.** Not present in `reference/fasttrack-texts/` or
  `reference/book-collection/free-downloads/` or `~/Downloads`. When
  acquired, file under `reference/fasttrack-texts/02-quantum-stat/`
  as `Souriau-StructureOfDynamicalSystems.pdf` to mirror the pattern
  of other §2 stat-physics texts.
- **Free secondary sources used for this reduced pass.**
  Marsden-Ratiu *Introduction to Mechanics and Symmetry* (2nd ed.,
  Springer 1999); Guillemin-Sternberg *Symplectic Techniques in
  Physics* (Cambridge UP 1984); Abraham-Marsden *Foundations of
  Mechanics* (2nd ed., Benjamin/Cummings 1978, currently free at
  CaltechAUTHORS); Woodhouse *Geometric Quantization* (2nd ed.,
  Oxford 1991, partial free preview); Marle "From tools in symplectic
  and Poisson geometry to J.-M. Souriau's theories of statistical
  mechanics and thermodynamics" (Entropy 18 (2016) 370, free); the
  Souriau Wikipedia article and the Marsden archive at Caltech.
- **Re-audit trigger.** Re-run this plan at full P1 depth once the
  Birkhäuser 1997 PDF is acquired and filed under
  `reference/fasttrack-texts/02-quantum-stat/`. Expect priority-1
  punch-list to remain stable; priority-3+4 items may shift.
