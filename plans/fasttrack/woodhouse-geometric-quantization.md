# Woodhouse — *Geometric Quantization* (Fast Track 3.09) — Audit + Gap Plan

**Book:** N. M. J. Woodhouse, *Geometric Quantization*, 2nd ed., Oxford
Mathematical Monographs (Oxford University Press / Clarendon, 1992,
xi + 307 pp.). The 2nd edition substantially reorganises and expands the
1980 1st edition, adding the time-dependent / relativistic chapters and
the systematic half-form / metaplectic treatment.

**Fast Track entry:** 3.09 on the booklist
(`docs/catalogs/FASTTRACK_BOOKLIST.md` line 94, listed as "BUY";
the geometric-quantization slot of the §3 modern-geometry block,
adjacent to the Souriau §2.11 statistical-mechanics origin-text and
Woit 2.02 on the QM-via-representation-theory side). Woodhouse is the
**modern canonical reference** for the Kostant-Souriau geometric-
quantization programme; Souriau (2.11) is the originator-text on the
classical-mechanics side, and the two share an originator/synthesis
relationship analogous to Riemann↔Forster on the Riemann-surface side.

**PDF status — REDUCED PASS.** No local PDF in
`reference/fasttrack-texts/`, `reference/book-collection/free-downloads/`,
or `~/Downloads`. The book is BUY-only and not freely posted; the OUP
page returns a paywall. This plan is produced from canonical background
knowledge of Woodhouse's book (the standard reference, cited
chapter-by-chapter in Bates-Weinstein *Lectures on the Geometry of
Quantization*, Kirillov *Lectures on the Orbit Method*, Guillemin-
Sternberg *Geometric Asymptotics* and *Symplectic Techniques in
Physics*, and Hall *Quantum Theory for Mathematicians*) plus the
already-shipped Codex geometric-quantization chapter
(`05.11.*`, 3 units) and the surrounding symplectic / quantum-
representation infrastructure. The shipped Codex GQ units already cite
Woodhouse 1992 Ch. 5-9 by chapter in their `tier_anchors`, so the
chapter-level structure below is robust; a full P1 line-number theorem /
exercise inventory is deferred until a copy is acquired.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of units to write **and** existing units to deepen so that *Geometric
Quantization* is covered to the equivalence threshold (≥95% effective
coverage of theorems, key examples, exercise pack, notation, sequencing,
intuition, applications — see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§3.4 / §9).

The audit surface here is **the smallest of any §3 book audited so far
in raw new-unit terms.** The reason: the Souriau 2.11 audit's priority-3
"geometric-quantisation stub block" (`05.11.01-03`) was not produced as
pointer-stubs — it was produced at **full Woodhouse depth**, three-tier,
~6000+ words each, anchored explicitly on Woodhouse 1992 Ch. 5-9, Kostant
1970, Souriau 1970, Blattner 1973, Bates-Weinstein 1997, and Guillemin-
Sternberg 1977. As a result the prequantum line bundle, the integrality
condition, the polarisation framework (real + Kähler), the half-density
correction, the metaplectic correction, the half-form / Maslov
obstruction, the Blattner-Kostant-Sternberg pairing, and the spin-orbit
worked example are **already shipped at Woodhouse-equivalent depth**. The
remaining gaps are at the *worked-application* and *operator-quantization-
map* levels: a standalone unit for the Kostant-Souriau quantization map
$f \mapsto \hat f$ as a programme (currently embedded in `05.11.01`'s
exercises and proofs), a dedicated cotangent-bundle quantization unit
recovering Schrödinger QM, a harmonic-oscillator-via-GQ worked unit
recovering the $\tfrac12\hbar$ zero-point energy, a standalone BKS-pairing /
Stone-von Neumann unit, and Woodhouse's distinctive time-dependent /
relativistic and Kostant-Souriau-on-$T^*Q$ material.

---

## §1 What Woodhouse's book is for

Woodhouse's *Geometric Quantization* is the **canonical modern textbook
for the Kostant-Souriau quantization programme**: the systematic
construction that turns a symplectic manifold $(M,\omega)$ — the phase
space of a classical mechanical system — into a Hilbert space and an
algebra of operators, geometrically, without writing $L^2$ by hand.
Where Souriau *Structure of Dynamical Systems* (FT 2.11) is the
**originator-text** that introduced prequantization, the integrality
condition, and the polarisation idea in the language of classical
mechanics and Lie-group symmetry, and Kostant 1970 is the parallel
originator in the representation-theory language, Woodhouse is the
**reference synthesis**: the book a working mathematician or
mathematical physicist opens to find the prequantization theorem, the
polarisation classification, the half-form correction, and the
Blattner-Kostant-Sternberg pairing stated cleanly with proofs.

The book's arc, by chapter (2nd ed.):

- **Ch. 1-2 — Classical mechanics and symplectic geometry.** Hamiltonian
  mechanics on symplectic manifolds, Poisson brackets, the cotangent
  bundle as the canonical phase space with $\omega = -d\theta$, the
  Liouville one-form $\theta = p\,dq$, symplectomorphisms, Hamiltonian
  group actions and moment maps. Woodhouse's review chapter; substantial
  Codex coverage already in `05.01.*`, `05.02.*`, `05.04.*`.
- **Ch. 3 — Hamilton-Jacobi theory.** The Hamilton-Jacobi equation,
  complete integrals, the role of Lagrangian submanifolds of $T^*Q$ as
  graphs of $dS$, generating functions, the WKB/short-wave connection.
  This is Woodhouse's bridge from classical to quantum: the H-J equation
  is the $\hbar \to 0$ limit of Schrödinger.
- **Ch. 4 — Complex polarizations and Kähler manifolds** (foundation for
  later chapters): compatible almost-complex structures, Kähler
  manifolds, positive polarisations.
- **Ch. 5-6 — Polarizations, half-forms, the metaplectic correction.**
  Real and complex polarisations, the leaf space, half-densities,
  half-forms, the metaplectic group $\mathrm{Mp}(2n)$ and metaplectic
  structures, the canonical / half-canonical bundle $K^{1/2}$.
  **Woodhouse's signature technical core.**
- **Ch. 7 — The Blattner-Kostant-Sternberg pairing.** Pairing of
  polarised section spaces, the BKS kernel, unitarity for transverse
  polarisations, the geometric Fourier transform, the Stone-von Neumann
  theorem realised geometrically.
- **Ch. 8 — Prequantization.** The prequantum line bundle, curvature
  $= -i\omega/\hbar$, the integrality condition $[\omega/2\pi\hbar] \in
  H^2(M;\mathbb{Z})$, the Kostant-Souriau prequantum representation
  $\hat f = -i\hbar\nabla_{X_f} + f$, the prequantum Hilbert space.
- **Ch. 9 — Quantization.** Cutting the prequantum space down by a
  polarisation; the quantization of observables compatible with the
  polarisation; the cotangent-bundle case recovering Schrödinger QM;
  the harmonic oscillator with the metaplectic $\tfrac12\hbar$ shift;
  quantization of coadjoint orbits and the Borel-Weil construction.
- **Ch. 10-11 (2nd ed. additions) — Time-dependent and relativistic
  systems; the quantization of fields / functoriality questions.** The
  presymplectic "evolution space," time as a parameter, the relativistic
  particle, and the obstructions to a fully functorial quantization
  (the Groenewold-van Hove no-go theorem).

Distinctive Woodhouse choices, in roughly the order he develops them:

1. **Hamilton-Jacobi first, as the classical shadow of quantization.**
   Woodhouse Ch. 3 develops H-J theory before prequantization, framing
   the wavefunction phase $S/\hbar$ as the generating function of a
   Lagrangian submanifold and the WKB approximation as the leading term.
   This makes the polarisation idea (later) feel inevitable: a real
   polarisation *is* a foliation by the Lagrangian level sets of a
   complete integral. Codex has Hamilton-Jacobi (`05.05.04`) and
   generating functions (`05.05.03`) but does not currently frame them
   as the classical-limit scaffold for quantization.
2. **Polarisation and half-form before prequantization.** Unusually,
   Woodhouse develops the polarisation/half-form/metaplectic machinery
   (Ch. 5-7) *before* the prequantum line bundle (Ch. 8), because the
   half-form bundle and the BKS pairing are the harder technical core and
   the prequantum bundle is comparatively elementary. Codex's chapter
   order is the reverse (prequantum `05.11.01` → spin example `05.11.02`
   → polarisation/half-form/metaplectic `05.11.03`), which is the
   Bates-Weinstein order; both are pedagogically valid.
3. **The metaplectic correction as mandatory, not optional.** Woodhouse
   treats the half-form / metaplectic correction as an integral part of
   quantization (not a bolt-on), because without it the harmonic
   oscillator ground state comes out at $0$ instead of $\tfrac12\hbar$
   and the BKS pairing fails to be unitary. Codex's `05.11.03` covers
   this correctly, including the $\tfrac12\hbar$ shift in its Exercise 6.
4. **The BKS pairing as the engine of representation-independence.**
   Woodhouse Ch. 7 makes the Blattner-Kostant-Sternberg pairing the
   central technical theorem: it shows the quantization is independent of
   the polarisation chosen (Schrödinger position ≅ momentum ≅ Bargmann-
   Fock), realising Stone-von Neumann geometrically and producing the
   Fourier transform as the canonical intertwiner. Codex's `05.11.03`
   states the BKS pairing as part (iv) of its key theorem and works the
   position↔momentum Fourier kernel in Exercise 7 — but there is no
   **standalone** BKS / Stone-von Neumann unit.
5. **Cotangent-bundle quantization recovers Schrödinger QM.** Woodhouse
   Ch. 9 carries out the vertical-polarisation quantization of $T^*Q$ in
   full, recovering $\mathcal H = L^2(Q)$, the position operator as
   multiplication, the momentum operator as $-i\hbar\partial_q$, and the
   energy operator with the correct ordering. Codex has the prequantum
   operator on $\mathbb R^{2n}$ (`05.11.01` Ex. 10) and the polarised
   reduction to Schrödinger (`05.11.03` Ex. 10) — but scattered in
   exercises, not a dedicated worked unit.
6. **Quantization of observables and the operator-ordering / Groenewold-
   van Hove obstruction.** Woodhouse Ch. 9-10 addresses *which* classical
   observables can be quantized compatibly with a given polarisation
   (those whose Hamiltonian flow preserves the polarisation, quantized
   directly; others need the BKS infinitesimal pairing), and states the
   Groenewold-van Hove no-go theorem (no quantization map is a full
   Poisson-bracket homomorphism on all polynomials beyond degree 2).
   Codex has the prequantum representation as a *Lie-algebra*
   homomorphism (`05.11.01`) but nothing on the polarisation-compatible
   restriction or the no-go obstruction.
7. **Time-dependent and relativistic quantization via the evolution
   space.** Woodhouse Ch. 10-11 (2nd-ed. additions) treats non-autonomous
   and relativistic systems by quantizing the presymplectic "evolution
   space" $T^*Q \times \mathbb R_t$ (or the relativistic mass-shell),
   connecting to the contact / presymplectic framework. Codex has contact
   geometry (`05.10.*`) and the Souriau presymplectic pointer but no
   GQ-of-time-dependent-systems unit.
8. **The Borel-Weil construction as quantization of coadjoint orbits.**
   Woodhouse Ch. 9 closes the loop with the orbit method: integral
   coadjoint orbits prequantize, the Kähler polarisation selects
   holomorphic sections, and Borel-Weil identifies these with the
   irreducible representation. Codex covers this thoroughly — the
   spin-orbit worked example (`05.11.02`) and the general Borel-Weil
   statement inside `05.11.01`'s Master proof set.

Woodhouse is **not** a first course in symplectic geometry or quantum
mechanics; it assumes Hamiltonian mechanics (Arnold-level), manifolds,
Lie groups, line bundles with connection, and basic functional analysis.
Its downstream is Bates-Weinstein (the friendlier lecture-note companion),
Hall *Quantum Theory for Mathematicians* (the analysis-heavy version),
Kirillov *Lectures on the Orbit Method* (the representation-theory
direction), and Guillemin-Sternberg *Geometric Asymptotics* (the
semiclassical / Fourier-integral-operator direction). On the originator
side it sits directly downstream of Souriau 2.11 and Kostant 1970.

---

## §2 Coverage table (Codex vs Woodhouse)

Cross-referenced against the 3 shipped geometric-quantization units in
`content/05-symplectic/11-geometric-quantization/`, the Maslov /
Lagrangian-Grassmannian singularity units (`05.12.01`,`05.12.03-04`), the
Hamilton-Jacobi / generating-function units (`05.05.03-04`), the
characteristic-class prequantum unit (`03.06.08`), the quantum-
representation units (`03.14.01-02`), and the surrounding symplectic /
quantum chapters. ✓ = covered at Woodhouse-equivalent depth,
△ = topic present but Codex shallower than Woodhouse's chapter or only
embedded in another unit's exercises/proofs, ✗ = not covered.

### Ch. 1-2 — Classical mechanics & symplectic geometry (review)

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Symplectic manifold, Darboux, $\omega = \sum dq\wedge dp$ | `05.01.02`, `05.01.04`, `05.01.05` | ✓ | Darboux + Moser shipped (Cannas audit). |
| Cotangent bundle $T^*Q$, Liouville form $\theta = p\,dq$, $\omega = -d\theta$ | `05.02.05`, `05.02.06` | ✓ | Cotangent-bundle + geodesic-flow units shipped. |
| Poisson bracket, Hamiltonian vector field | `05.02.01`, `05.02.02` | ✓ | Shipped. |
| Moment map, Hamiltonian $G$-action | `05.04.01` | ✓ | Deepened (Cannas/Souriau audits). |
| Coadjoint orbit, KKS form | `05.03.01` | ✓ | Shipped + deepened. |

### Ch. 3 — Hamilton-Jacobi theory (classical shadow of quantization)

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Hamilton-Jacobi equation, complete integral | `05.05.04` hamilton-jacobi | △ | H-J equation shipped; the **WKB / $\hbar\to0$ framing as the classical limit of Schrödinger** (Woodhouse's bridge motif) is not present. |
| Generating function $S$, graph of $dS$ as Lagrangian submanifold | `05.05.03` generating-functions; `05.05.01` lagrangian-submanifold | ✓ | Shipped (Cannas audit). |
| Lagrangian submanifolds of $T^*Q$, caustics, wavefronts | `05.12.03` legendrian-singularities-wave-front | △ | Wavefront/caustic geometry shipped on the singularity side; not linked to the quantization WKB amplitude/phase. |

### Ch. 4-6 — Polarizations, half-forms, metaplectic correction (Woodhouse's core)

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Compatible almost-complex structure, Kähler polarisation, positivity | `05.06.01` almost-complex; `05.11.03` | ✓ | Compatible-$J$ shipped; Kähler polarisation in `05.11.03`. |
| Complex polarisation (Lagrangian integrable distribution in $T_\mathbb{C}M$), real polarisation, mixed | `05.11.03` | ✓ | Definition, real/Kähler/mixed classification all in `05.11.03` Formal-definition section. |
| Polarised sections $\Gamma_\mathcal P(L)$ | `05.11.03` | ✓ | Shipped. |
| Half-density bundle on the leaf space, finite inner product | `05.11.03` | ✓ | Shipped (Formal-definition + Key-theorem (i)-(ii)). |
| Half-forms, half-canonical bundle $K^{1/2}$ | `05.11.03` | ✓ | Covered; $K_M^{1/2}$ appears in Key-theorem (iii) and Ex. 5. |
| Metaplectic group $\mathrm{Mp}(2n)$, metaplectic structure, $w_2$ obstruction | `05.11.03` | ✓ | Key-theorem (iii) + Ex. 8 ($\pi_1(\mathrm{Sp})=\mathbb Z$, double cover). |
| Universal Maslov class as the half-form obstruction | `05.12.01`; `05.11.03` | ✓ | Lagrangian-Grassmannian + universal Maslov class unit shipped; linked from `05.11.03`. |
| Maslov index / Conley-Zehnder | `05.08.03`, `05.08.04` | ✓ | Shipped (Floer chapter). |

### Ch. 7 — The Blattner-Kostant-Sternberg pairing

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| BKS pairing between two polarisations, integral kernel | `05.11.03` | △ | Stated as Key-theorem part (iv) and worked for position↔momentum in Ex. 7; **no standalone BKS unit** with the general kernel construction, the half-form pairing, and the non-transverse / Maslov-corrected case (Ex. 9 touches the caustic case). |
| Unitarity of BKS for transverse polarisations; geometric Fourier transform | `05.11.03` Ex. 7 | △ | Position↔momentum Fourier kernel worked; the general unitarity theorem is asserted not proved. |
| Stone-von Neumann theorem realised geometrically | `12.14.01` (CCR/Weyl algebra); `05.11.03` (hook_out) | △ | CCR/Weyl-algebra unit exists; Stone-von Neumann is referenced as the target of the BKS hook but **not stated as a theorem in a GQ unit**. |
| Shale-Weil (metaplectic) representation on $L^2(\mathbb R^n)$ | `05.11.03` (mention); `03.14.02` | △ | Mentioned in `05.11.03` Bridge; the Segal-Bargmann / metaplectic-representation machinery is in `03.14.02` (squeezed states) but not assembled as the GQ Shale-Weil unit. |

### Ch. 8 — Prequantization

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Prequantum line bundle $(L,\nabla,h)$, $F^\nabla = -i\omega/\hbar$ | `05.11.01`; `03.06.08` | ✓ | Full three-tier unit + characteristic-class companion (Kostant-Weil). |
| Integrality condition $[\omega/2\pi\hbar]\in H^2(M;\mathbb Z)$, existence theorem | `05.11.01` | ✓ | Souriau-Kostant-Weil theorem proved (Čech construction). |
| Prequantum representation $\hat f = -i\hbar\nabla_{X_f}+f$, Lie-algebra homomorphism | `05.11.01` | △ | Proved as a Lie-algebra homomorphism (Full-proof-set Prop. 2) — but **not packaged as the Kostant-Souriau "quantization map / dictionary" unit** with the observable-by-observable rules. |
| Moduli of prequantum bundles = $H^1(M;U(1))$-torsor | `05.11.01` | ✓ | Shipped. |
| Bohr-Sommerfeld leaves, Dirac monopole, Aharonov-Bohm as integrality | `05.11.01` (Master) | ✓ | All three in Master/Advanced-results + Ex. 8. |

### Ch. 9 — Quantization (cut by polarisation; worked systems)

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Quantization = polarised sections of $L\otimes K^{1/2}$ | `05.11.03` | ✓ | Hilbert space $\mathcal H_\mathcal P$ defined. |
| Cotangent-bundle quantization → Schrödinger $L^2(Q)$, $\hat q,\hat p$ | `05.11.01` Ex. 10; `05.11.03` Ex. 10 | △ | The reduction to $L^2(Q)$, $\hat q=q\cdot$, $\hat p=-i\hbar\partial_q$ is worked **only in exercises**; **no dedicated cotangent-bundle-quantization unit**. |
| Harmonic oscillator via Kähler (Bargmann-Fock) polarisation, $\tfrac12\hbar$ zero-point shift from $K^{1/2}$ | `05.11.03` Ex. 6; `03.14.02` | △ | The $\tfrac12\hbar$ metaplectic shift is in `05.11.03` Ex. 6 and the Bargmann-Fock space in `05.11.03` Ex. 3 / `03.14.02`; **no standalone harmonic-oscillator-via-GQ worked unit** assembling the full computation. |
| Quantizable observables (flow preserves polarisation); direct vs BKS quantization of $\hat f$ | — | ✗ | **Gap.** Woodhouse Ch. 9's central operational content: which $f$ act on $\mathcal H_\mathcal P$ directly, which need the infinitesimal BKS pairing. Codex has nothing on the polarisation-compatible operator restriction. |
| Groenewold-van Hove no-go theorem | — | ✗ | **Gap.** No quantization map is a Poisson homomorphism on all of $C^\infty$; the obstruction beyond degree-2 polynomials. Codex has nothing. |
| Quantization of coadjoint orbits, Borel-Weil | `05.11.02`; `05.11.01` (Master) | ✓ | Spin-orbit worked + general Borel-Weil in `05.11.01` Full-proof-set. |

### Ch. 10-11 (2nd-ed.) — Time-dependent, relativistic, functoriality

| Woodhouse topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Presymplectic evolution space $T^*Q\times\mathbb R_t$, time-dependent quantization | `05.10.01` (contact, partial) | ✗ | **Gap.** Contact / presymplectic geometry shipped, but no GQ-of-time-dependent-systems unit. |
| Relativistic particle, mass-shell quantization | `05.00.09` (Souriau audit, planned) | ✗ | **Gap.** The Poincaré symplectic particle is planned in the Souriau audit; its *quantization* is Woodhouse-specific and not covered. |
| Functoriality / failure of functorial quantization | — | ✗ | **Gap (low priority).** Pointer-level; ties to Groenewold-van Hove. |

### Topics Woodhouse covers as remarks / pointers (no Codex equivalence-coverage required)

| Woodhouse topic | Status | Note |
|---|---|---|
| Geometric asymptotics / Fourier integral operators (full semiclassical theory) | — | Pointer-only in Woodhouse; the full theory is Guillemin-Sternberg / Hörmander territory. `05.12.03` covers the wavefront side. Defer. |
| Field-theoretic quantization (infinite dimensions) | `12.14.01`, `12.13.01` | Woodhouse only gestures; algebraic-QFT / Fock-space chapters are the equivalence target. Cross-link sufficient. |
| Kostant's representation-theoretic orbit method in full generality | `05.11.01-02`; rep-theory chapter `07.*` | Borel-Weil shipped; the full Kirillov character formula is `03.09.25`. Cross-link sufficient. |

### Aggregate coverage estimate

**Theorem layer**: ~80% of Woodhouse's named theorems map to Codex units
at Woodhouse-equivalent depth. The prequantization existence theorem,
the polarisation/half-form/metaplectic key theorem, the Maslov-class
obstruction, the spin-orbit Borel-Weil theorem, and the integrality /
Bohr-Sommerfeld / Dirac material are all shipped at full depth in the
three `05.11.*` units (a direct consequence of the Souriau audit having
produced the GQ block at Woodhouse depth rather than as pointer stubs).
The missing ~20% is concentrated in **Ch. 9's operational quantization-
map content** (quantizable observables, Groenewold-van Hove) and **Ch. 10-
11's time-dependent / relativistic quantization**, plus the **standalone
packaging** of the BKS / Stone-von Neumann theorem and the cotangent-
bundle / harmonic-oscillator worked systems that currently live only
inside exercises.

After the priority-1 punch-list below, theorem-level coverage rises to
~93%; after priority-1+2 to ~97%; priority-3+4 to ~98%+.

**Exercise layer**: ~40% effective. The three `05.11.*` units carry
30 substantive exercises (10 each) at Intermediate+/hard difficulty,
covering integrality computations, the prequantum commutator, the BKS
Fourier kernel, the metaplectic $\pi_1$ computation, and the harmonic-
oscillator $\tfrac12\hbar$ shift — these *are* Woodhouse-style exercises.
Woodhouse's own end-of-chapter problems (operator-ordering exercises,
quantization of specific systems, polarisation-change computations) are
~60% reachable from the shipped exercise pack; the cotangent-bundle and
harmonic-oscillator dedicated units (items 2-3 below) would close most of
the remainder.

**Worked-example layer**: ~55% covered. $S^2$/spin-orbit (`05.11.02`),
$\mathbb R^{2n}$ prequantum bundle, $T^2$ prequantization, Bargmann-Fock
on $\mathbb C$, position↔momentum Fourier pairing are all worked. Missing
as *dedicated* worked units: full cotangent-bundle → Schrödinger, full
harmonic-oscillator → $\tfrac12\hbar$, the relativistic particle.

**Notation layer**: ~85% aligned. Codex's GQ units explicitly adopt
"Woodhouse-Kostant conventions" ($F^\nabla = -i\omega/\hbar$, $\hat f =
-i\hbar\nabla_{X_f}+f$, $K^{1/2}$ for the half-canonical bundle,
$\mathrm{Mp}(2n)$, $\mathcal P$ for polarisation). A `notation/woodhouse.md`
crosswalk is **optional** — the conventions are already pinned inline in
the `05.11.*` Notation-conventions blocks. The one item worth recording
is Woodhouse's Ch. 5-8-before-Ch. 8 ordering vs Codex's prequantum-first
ordering (a sequencing note, not a notation conflict).

**Sequencing layer**: ~80%. Woodhouse's H-J → polarisation → BKS →
prequantum → quantization chapter order differs from Codex's prequantum →
spin-example → polarisation order. The DAG prerequisite chain
(`05.01.02` → `05.03.01` → `05.11.01` → `05.11.02`/`05.11.03`,
with `05.12.01` Maslov feeding `05.11.03`) is faithful to the logical
dependencies; the chapter-narrative-order difference is cosmetic.
Missing edges: H-J (`05.05.04`) → prequantum (`05.11.01`) as the
classical-limit motivation; cotangent-bundle quantization (new) ←
`05.11.03` + `05.02.05`.

**Intuition layer**: ~85%. The `05.11.*` Beginner sections are strong
(the "hair on the sphere" prequantum picture, the "cut the section space
in half" polarisation picture, the Schrödinger-from-vertical-polarisation
walk-through). Woodhouse's distinctive H-J-as-classical-shadow intuition
is the main missing framing (item 5 deepening).

**Application layer**: ~75%. Spin quantization, Dirac monopole,
Aharonov-Bohm, Bohr-Sommerfeld, Borel-Weil/orbit-method, Bargmann-Fock
are all present. Missing applications: full Schrödinger recovery as a
*headline* worked unit, harmonic oscillator, the relativistic particle,
and the Stone-von Neumann/Fourier-transform-as-intertwiner as a
standalone result.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The Codex geometric-quantization chapter is **already mature** — the
three `05.11.*` units shipped at Woodhouse depth via the Souriau audit's
GQ block. Most of the work below is **new worked-application units** that
extract content currently buried in exercises into standalone units
(cotangent-bundle quantization, harmonic oscillator, BKS/Stone-von
Neumann) plus a small number of **genuinely missing topics** (quantizable-
observables / Groenewold-van Hove, time-dependent quantization). The
recommended slot range is `05.11.04-09` for new GQ units, leaving the
existing `05.11.01-03` numbering stable.

### Priority 1 — Woodhouse-headline operational content currently missing or exercise-only

These items either cover Woodhouse Ch. 9's central operational theorems
(quantizable observables, Groenewold-van Hove) or promote Woodhouse's
headline worked systems (Schrödinger from $T^*Q$, BKS/Stone-von Neumann)
from exercise-embedded to standalone units. Without them the GQ chapter
cannot honestly claim to *carry out* quantization the way Woodhouse Ch. 9
does — it can currently state the framework but the worked recovery of
ordinary QM lives only in exercise answers.

1. **`05.11.04` Kostant-Souriau quantization map and quantizable
   observables.** Woodhouse Ch. 8-9 anchor; Kostant 1970 §3-§5 and
   Souriau 1970 Ch. V as originators. Three-tier; ~2200 words. The
   prequantum operator $\hat f = -i\hbar\nabla_{X_f}+f$ (recap from
   `05.11.01`); the restriction to observables whose Hamiltonian flow
   *preserves the polarisation* $\mathcal P$ (these descend directly to
   $\mathcal H_\mathcal P$); the infinitesimal-BKS prescription for
   observables that don't; the resulting partial quantization map and its
   failure to be a global Poisson homomorphism. Master section states the
   **Groenewold-van Hove no-go theorem**: there is no linear map
   $f\mapsto\hat f$ on all of $C^\infty(\mathbb R^{2n})$ that is a
   Poisson-bracket homomorphism, reduces to Schrödinger on $\{q_i,p_i\}$,
   and is irreducible — the obstruction appears at cubic order. **The
   single most-load-bearing missing theorem; it is the honest statement
   of what geometric quantization can and cannot do.**

2. **`05.11.05` Quantization of the cotangent bundle and the Schrödinger
   representation.** Woodhouse Ch. 9 anchor. Three-tier; ~1800 words.
   Take $M = T^*Q$ with the vertical (real) polarisation by the cotangent
   fibres; the leaf space is $Q$; polarised sections tensored with the
   half-form bundle give $\mathcal H = L^2(Q,|dq|)$; the position
   operator $\hat q^i = q^i\cdot$, the momentum operator
   $\hat p_i = -i\hbar\,\partial/\partial q^i$, the energy operator with
   the metaplectic-corrected ordering. **The headline worked recovery of
   ordinary Schrödinger QM from the geometry** — currently only in
   `05.11.01` Ex. 10 + `05.11.03` Ex. 10. Worked example: the free
   particle and the particle in a potential on $Q = \mathbb R^n$.

3. **`05.11.06` Quantization of the harmonic oscillator and the
   metaplectic zero-point shift.** Woodhouse Ch. 9 anchor; Bargmann 1961
   for the Segal-Bargmann space. Three-tier; ~1800 words. The 1D
   oscillator on $\mathbb R^2$ via the Kähler polarisation
   $z = (q+ip)/\sqrt{2\hbar}$; polarised sections = holomorphic functions
   = Bargmann-Fock space; the prequantum energy operator
   $\hbar\,z\partial_z$ with spectrum $\{n\hbar\}$; the half-form
   correction shifting to $\hbar(z\partial_z + \tfrac12)$ with spectrum
   $\{(n+\tfrac12)\hbar\}$, recovering the physical zero-point energy.
   **The showcase that the metaplectic correction is physically
   mandatory** — currently only `05.11.03` Ex. 6. Cross-link to the
   physicist-side oscillator (`12.04.02`) and squeezed-states unit
   (`03.14.02`).

### Priority 2 — standalone packaging of the BKS / Stone-von Neumann theorem and the H-J bridge

4. **`05.11.07` The Blattner-Kostant-Sternberg pairing and the geometric
   Stone-von Neumann theorem.** Woodhouse Ch. 7 anchor; Blattner 1973 and
   Sternberg 1975 as originators. Three-tier; ~2200 words. The general
   BKS pairing kernel between two polarisations via integration over the
   leaves of $\mathcal P_1\cap\overline{\mathcal P_2}$ with the half-form
   pairing; the unitarity theorem for transverse polarisations; the
   position↔momentum case recovering the Fourier transform (promote
   `05.11.03` Ex. 7 to the worked core); the Bargmann transform
   (position↔Kähler); the **Stone-von Neumann theorem** stated and
   proved geometrically as the consequence that all polarisations give
   unitarily-equivalent quantizations; the Shale-Weil / metaplectic
   representation as the projective $\mathrm{Sp}(2n)$-action on the
   common Hilbert space. Cross-link to `12.14.01` (CCR/Weyl algebra) and
   `03.14.02` (Segal-Bargmann). **Woodhouse's central technical theorem;
   currently only stated as part (iv) of `05.11.03`'s key theorem.**

5. **Deepen `05.05.04` Hamilton-Jacobi (WKB / classical-limit framing).**
   Add the Woodhouse Ch. 3 framing in the Master section: the H-J
   equation as the $\hbar\to0$ limit of the Schrödinger equation, the
   wavefunction phase $S/\hbar$ as the generating function of a Lagrangian
   submanifold $\{(q,dS_q)\}\subset T^*Q$, the WKB amplitude-transport
   equation on the half-form, and the Maslov phase at caustics
   (cross-link `05.12.03`). No new unit ID; rewrite of the Master section
   plus a new "Connections" bullet to `05.11.05`. This is the missing
   *classical-shadow-of-quantization* intuition that frames the whole GQ
   chapter the way Woodhouse Ch. 3 does.

6. **Deepen `05.11.01` prequantum line bundle (Woodhouse chapter-order +
   functoriality note).** Add a short Master "Sequencing & functoriality"
   paragraph: Woodhouse develops half-forms (Ch. 5-7) before prequantum
   (Ch. 8) because the metaplectic correction is the hard part; flag the
   forward-reference to the Groenewold-van Hove obstruction (`05.11.04`)
   so the reader knows the prequantum representation is *not* the final
   quantization. No new unit ID. Also fix the `TODO_REF` reference
   placeholders to proper Woodhouse-1992 / Kostant-1970 citations during
   this pass.

### Priority 3 — Woodhouse 2nd-ed. additions (time-dependent / relativistic)

7. **`05.11.08` Time-dependent quantization and the presymplectic
   evolution space.** Woodhouse Ch. 10 anchor. Three-tier; ~1600 words.
   The non-autonomous system on the presymplectic evolution space
   $T^*Q\times\mathbb R_t$ with the closed 2-form $\omega - dH\wedge dt$;
   the characteristic foliation as classical time-evolution; quantization
   producing the time-dependent Schrödinger equation. Cross-link to
   contact geometry (`05.10.01`) and the Souriau presymplectic pointer.
   Prerequisite: `05.11.05`.

8. **`05.11.09` Quantization of the relativistic particle.** Woodhouse
   Ch. 11 anchor. Three-tier; ~1600 words. The mass-shell as a
   presymplectic constraint surface in $T^*\mathbb R^{3,1}$; reduction
   to the symplectic mass-shell; quantization recovering the Klein-Gordon
   / single-particle relativistic wave equation. Cross-link to the Souriau
   audit's planned Poincaré-particle unit (`05.00.09`) and to the
   Klein-Gordon field unit (`12.05.04`). **Produce alongside the Souriau
   `05.00.09` so the classical and quantum relativistic-particle units
   ship together.**

### Priority 4 — survey / pointer items, optional

9. **`05.11.10` Survey: geometric asymptotics, Fourier integral
   operators, and the Maslov correction.** Master-only, ~900 words.
   Pointer to Guillemin-Sternberg *Geometric Asymptotics*, Hörmander
   FIO theory, the $\tfrac14$-Maslov WKB phase at caustics (cross-link
   `05.12.03`, `05.11.07`). Deferred unless Codex expands into
   semiclassical microlocal analysis.

10. **Pointer note on field-theoretic / functorial quantization.**
    Master-only paragraph appended to `05.11.04` or a short standalone
    `05.11.11`; pointer to the obstructions to quantizing infinite-
    dimensional symplectic manifolds (fields), cross-linking the
    algebraic-QFT chapter (`12.14.01`). Optional.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Woodhouse-equivalence batch** = priority 1 only (items 1-3):
3 new units (`05.11.04`, `05.11.05`, `05.11.06`). Realistic production
estimate (mirroring the Cannas / Souriau / Bott-Tu batches):

- ~3-4 hours per new unit (research + draft + validate at 27/27 + Lean
  `lean_status: none` per the bio/chem/applied-physics-style prose-first
  policy — GQ units ship Lean-optional given Mathlib's total absence of
  prequantization infrastructure, documented in the `05.11.*`
  `lean_mathlib_gap` fields — + Bridge / Synthesis prose).
- Priority 1 totals: 3 new × ~3.5 h = ~10-11 hours.
- Priority 1+2 totals: 3 priority-1 new + 1 priority-2 new (`05.11.07`) +
  2 in-place deepenings (`05.05.04`, `05.11.01`) = ~18-20 hours. Fits a
  focused 2-day window with 2-3 production agents in parallel and one
  integration agent.
- Priority 1+2+3: add 2 relativistic/time-dependent units = ~26 hours.
- Priority 1-4 (full Woodhouse-equivalence): add 1-2 survey/pointer
  units = ~30 hours. Optional; not required for sign-off.

**Smaller surface than Cannas or Souriau.** The Cannas punch-list shipped
~7 priority-1 items (new contact block + signature theorems) and the
Souriau punch-list shipped 5 priority-1 new units; this Woodhouse plan
ships **3 new priority-1 units**, all of which *extract and assemble*
content the GQ chapter already covers in exercises rather than introduce
wholly new theory. The integration-agent load is correspondingly low.

**Why the surface is small.** Unusually for a Tier-γ §3 book, the core
theory is *already shipped at depth* because the Souriau 2.11 audit's
priority-3 "geometric-quantisation stub block" was produced at full
Woodhouse depth (three-tier, ~6000+ words, Woodhouse-Ch.-5-9-anchored)
rather than as the planned pointer-stubs. The shipped `05.11.01-03` units
already deliver: prequantum line bundle + integrality (Ch. 8), the
prequantum representation as a Lie-algebra homomorphism (Ch. 8),
polarisations real+Kähler (Ch. 4-5), half-densities + half-forms +
metaplectic correction (Ch. 5-6), the universal-Maslov-class obstruction
(linked to `05.12.01`), the BKS pairing key-theorem statement + Fourier
worked case (Ch. 7), and the spin-orbit Borel-Weil example (Ch. 9). This
plan closes the *operational* and *worked-system* remainder.

**Originator-prose targets** (per `FASTTRACK_EQUIVALENCE_PLAN.md` §10).
Woodhouse is a *modern reference synthesis*, so the originator citations
for the new units are the same Kostant/Souriau/Blattner/Sternberg layer
the shipped units already cite:

- **Kostant-Souriau quantization map / Groenewold-van Hove** (item 1):
  Kostant 1970 *Quantization and unitary representations*, LNM 170,
  §3-§5; Souriau 1970 Ch. V; Groenewold 1946 *On the principles of
  elementary quantum mechanics*, Physica 12; van Hove 1951.
- **Cotangent-bundle / Schrödinger** (item 2): Woodhouse 1992 Ch. 9;
  Kostant 1970.
- **Harmonic oscillator / Bargmann-Fock** (item 3): Bargmann 1961 *On a
  Hilbert space of analytic functions*, Comm. Pure Appl. Math. 14;
  Woodhouse 1992 Ch. 9.
- **BKS pairing / Stone-von Neumann** (item 4): Blattner 1973
  *Quantization in representation theory*, Proc. Symp. Pure Math. 26;
  Sternberg 1975; Stone 1930 / von Neumann 1931 for Stone-von Neumann;
  Shale 1962 / Weil 1964 for the metaplectic representation.
- **Hamilton-Jacobi / WKB** (item 5): Woodhouse 1992 Ch. 3; Maslov 1965.
- **Time-dependent / relativistic** (items 7-8): Woodhouse 1992 Ch. 10-11;
  Souriau 1970 Ch. III.

Each new unit's Master section should cite Woodhouse 1992 (the reference
synthesis) **and** the originator paper (Kostant/Souriau/Blattner/
Bargmann) explicitly, matching the citation pattern already established
in `05.11.01-03`.

**Notation crosswalk.** *Not needed as a separate artifact.* The shipped
`05.11.*` units already pin the Woodhouse-Kostant conventions inline
($F^\nabla = -i\omega/\hbar$, $\hat f = -i\hbar\nabla_{X_f}+f$,
$K^{1/2}$, $\mathrm{Mp}(2n)$, $\mathcal P$, $\mathcal H_\mathcal P$). New
units inherit these. Record one sequencing note (Woodhouse's Ch. 5-7-
before-Ch. 8 half-forms-before-prequantum order vs Codex's prequantum-
first order) in the `05.11.04` Master section.

**Reference-cleanup task.** The shipped `05.11.01` and `05.11.03` units
carry `TODO_REF` placeholders in their `references:` blocks and inline
`[ref: TODO_REF ...]` citations. The priority-2 deepening pass (item 6)
should resolve these to proper Woodhouse-1992 / Kostant-1970 / Souriau-
1970 / Blattner-1973 citations, since the Woodhouse audit is the natural
moment to finalise the GQ-chapter bibliography.

**DAG edges to add.** New prerequisites arrows for the priority-1+2 batch:

- `05.11.04` (quantization map / Groenewold-van Hove) ← {`05.11.01`
  prequantum, `05.11.03` polarisation}
- `05.11.05` (cotangent-bundle quantization) ← {`05.11.03`,
  `05.02.05` cotangent-bundle, `05.11.04`}
- `05.11.06` (harmonic oscillator GQ) ← {`05.11.03`, `05.11.05`};
  lateral to `03.14.02` squeezed-states, `12.04.02` oscillator
- `05.11.07` (BKS / Stone-von Neumann) ← {`05.11.03`, `05.11.05`};
  lateral to `12.14.01` CCR/Weyl
- `05.05.04` (Hamilton-Jacobi, after deepening) → `05.11.05` as the
  classical-limit motivation edge
- `05.11.08` (time-dependent) ← {`05.11.05`, `05.10.01` contact}
- `05.11.09` (relativistic particle) ← {`05.11.05`, `05.00.09` Poincaré
  particle (Souriau audit), `12.05.04` Klein-Gordon}

**Composite Woodhouse + Souriau batch recommendation.** The Souriau 2.11
audit already shipped the GQ block (`05.11.01-03`) and *planned* the
Poincaré symplectic particle (`05.00.09`). The Woodhouse relativistic-
particle quantization (item 8) depends on that classical unit, so the two
should ship together: produce Souriau's `05.00.09` and Woodhouse's
`05.11.09` in the same batch. More broadly, Woodhouse and Souriau form a
synthesis/originator pair on geometric quantization the way Forster and
Riemann do on Riemann surfaces — the Master sections of the new Woodhouse
units should cite Souriau as the classical-mechanics originator and
Woodhouse as the reference synthesis.

**Composite Woodhouse + Woit 2.02 batch.** Woit *Quantum Theory, Groups
and Representations* (FT 2.02, already audited at
`plans/fasttrack/woit-quantum-theory-groups-representations.md`) covers
geometric quantization on the QM-via-rep-theory side and overlaps on the
metaplectic representation, the Bargmann-Fock space, and the harmonic
oscillator. The harmonic-oscillator GQ unit (item 3) and the BKS /
Stone-von Neumann unit (item 4) close gaps for *both* books; check the
Woit plan's punch-list for overlap before producing to avoid duplicate
units.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and end-of-chapter
  problem in Woodhouse's ~300 pages. (Would require a copy of the book;
  deferred unless the priority-1+2 punch-list expands. **REDUCED-PASS
  caveat applies.**)
- The full Woodhouse exercise pack. The shipped `05.11.*` units carry 30
  Woodhouse-style exercises; a dedicated Woodhouse-exercise-pack pass
  (operator-ordering problems, quantization of specific systems) is a
  P3-priority follow-up after the priority-1+2 theorem-layer batch lands.
- **The full semiclassical / geometric-asymptotics programme.** Woodhouse
  gestures at Fourier integral operators and the $\tfrac14$-Maslov WKB
  phase; the full theory is Guillemin-Sternberg *Geometric Asymptotics*
  and Hörmander territory. Item 9 is a pointer-only stub; the depth is
  deferred to a future microlocal-analysis audit.
- **Field-theoretic (infinite-dimensional) geometric quantization.**
  Woodhouse only gestures at it; the algebraic-QFT / Fock-space chapters
  (`12.13.*`, `12.14.*`) are the equivalence target. Cross-link, not
  duplicate.
- **The deep Kähler-quantization / Toeplitz-operator / Berezin-
  quantization machinery.** Woodhouse touches Kähler quantization;
  the Berezin-Toeplitz deformation-quantization direction is a separate
  research line (Bordemann-Meinrenken-Schlichenmaier) not on the FT
  booklist. Defer entirely.
- **Souriau's classical-mechanics originator content** (the cocycle,
  the symplectic statistical mechanics, the elementary-system
  classification). That is the Souriau 2.11 audit's territory
  (`plans/fasttrack/souriau-structure-dynamical-systems.md`); Woodhouse's
  job is the *quantization* side, and the two plans share the
  `05.11.01-03` units.
- **Brylinski 3.47 higher-cohomology / gerbe geometric quantization.**
  The loop-space / Dixmier-Douady / gerbe-prequantization generalisation
  is Brylinski's territory (`plans/fasttrack/brylinski-loop-spaces.md`,
  cross-linking `03.06.09`); Woodhouse stays at the line-bundle level.

---

## §6 Acceptance criteria for FT equivalence (Woodhouse)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Woodhouse's named theorems map to Codex units **at Woodhouse-
  equivalent depth** (currently ~80%; after priority-1 this rises to
  ~93%; after priority-1+2 to ~97%; after priority-3 to ~98%+).
- ≥80% of Woodhouse's end-of-chapter problems have a Codex equivalent
  (currently ~40% effective via the shipped 30-exercise GQ pack; the
  cotangent-bundle and harmonic-oscillator units bring this to ~75%;
  full closure requires the dedicated exercise-pack pass per §5).
- ≥90% of Woodhouse's headline worked systems are reproduced in some
  Codex unit (currently ~55% — spin orbit, $\mathbb R^{2n}$, $T^2$,
  Bargmann-Fock, position↔momentum Fourier; the priority-1 batch's
  cotangent-bundle → Schrödinger and harmonic-oscillator → $\tfrac12\hbar$
  worked units bring this to ~90%).
- The notation alignment is recorded inline in the new units' Notation
  paragraphs (no separate `notation/woodhouse.md` needed; the
  Woodhouse-Kostant conventions are already pinned in `05.11.01-03`).
- For every chapter dependency in Woodhouse (Ch. 1-2 → Ch. 8 → Ch. 9;
  Ch. 3 → Ch. 9; Ch. 4-6 → Ch. 7 → Ch. 9), there is a corresponding
  `prerequisites` arrow chain in Codex's DAG. The H-J → prequantum →
  quantization → BKS chain in particular must be unbroken after the
  priority-1+2 batch.
- The `TODO_REF` reference placeholders in `05.11.01` and `05.11.03` are
  resolved to proper citations (priority-2 item 6).
- Pass-W weaving connects the new units (`05.11.04-09`) to the existing
  `05.11.01-03` GQ units, the `05.05-lagrangian/` H-J / generating-
  function units, the `05.12-singularities/` Maslov units, the
  `12.14-algebraic-qft/` CCR unit, and the `03.14-quantum-
  representations/` Bargmann-Fock unit via lateral connections.

The 3 priority-1 items (1-3) close the operational quantization-map and
worked-system gap that is the difference between *stating* the GQ
framework and *carrying out* quantization the way Woodhouse Ch. 9 does.
The 3 priority-2 items (4-6) close the standalone BKS / Stone-von Neumann
packaging, the Hamilton-Jacobi classical-limit framing, and the
reference cleanup. The priority-3 items (7-8) add Woodhouse's 2nd-edition
time-dependent / relativistic chapters. The priority-4 items (9-10) are
survey pointers; they bring coverage from ~97% to ~98%+ but are not
strictly required for sign-off.

**Honest scope.** Woodhouse's *Geometric Quantization* is the
**lowest-new-unit-count §3 book audited to date** — not because it is
shallow (it is the canonical reference for the entire programme) but
because the Souriau 2.11 audit's GQ block was produced at full Woodhouse
depth rather than as the planned pointer-stubs, pre-shipping the
prequantum / polarisation / half-form / metaplectic / BKS / Maslov /
Borel-Weil core (~80% theorem coverage). The work in this plan is
dominated by **promoting exercise-embedded worked systems to standalone
units** (cotangent-bundle → Schrödinger, harmonic-oscillator →
$\tfrac12\hbar$, BKS → Stone-von Neumann) and adding the **two genuinely
missing operational theorems** (Groenewold-van Hove no-go, time-dependent
/ relativistic quantization). New-unit production is 3 (priority-1) to 5
(priority 1-3); everything else is in-place deepening of shipped
`05.11.*` and `05.05.04` content.

**Reduced-pass caveat.** This plan is produced *without* a local copy of
the OUP 1992 PDF. The chapter listing, theorem set, and notation
conventions cited above are reconstructed from canonical secondary
sources (Bates-Weinstein, Kirillov, Guillemin-Sternberg, Hall) and from
the already-shipped Codex GQ chapter, which itself cites Woodhouse
1992 Ch. 5-9 by chapter. The priority-1 punch-list is robust under any
reasonable revision once a copy is in hand; the priority-3+4 items
(the exact 2nd-edition Ch. 10-11 organisation) may shift slightly in
scope. Re-audit at full P1 depth when the book is acquired and filed
under `reference/fasttrack-texts/03-modern-geometry/` as
`Woodhouse-GeometricQuantization.pdf`.
