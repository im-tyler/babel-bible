# Arnold-Khesin — *Topological Methods in Hydrodynamics* (Fast Track 1.12) — Audit + Gap Plan

**Book:** V. I. Arnold and B. A. Khesin, *Topological Methods in
Hydrodynamics*.

- 1st English edition: Springer, *Applied Mathematical Sciences* Vol.
  125, 1998. ISBN 978-0-387-94947-5 (hardcover) / 0-387-94947-1.
  xv + 374 pp.
- 2nd English edition: Springer, *Applied Mathematical Sciences* Vol.
  125, 2021. Expanded ~400 → ~530 pp. with new material on the
  Camassa-Holm and Hunter-Saxton equations, Korteweg and Madelung
  fluids, optimal transport / Wasserstein geometry of $\mathrm{Diff}_{
  \mathrm{vol}}$, the diffeomorphism-group / EPDiff perspective on
  hydrodynamic PDE, and updated references on Beltrami fields,
  knotted vortex tubes, and topology-changing flows. **Chapter and
  section references in this plan are to the 2nd edition**, with
  1st-edition equivalents flagged where the structure shifted.

**Fast Track entry:** 1.12. Sourcing: BUY (Springer hardcover or 2021
softcover; no fully free PDF circulates legally). Marked `BUY` on
`docs/catalogs/FASTTRACK_BOOKLIST.md` line 42.

**Summary.** This is the canonical research-monograph reference for the
**geometric / topological picture of ideal-fluid hydrodynamics** —
Arnold's signature 1966 observation, written up by him with Khesin a
generation later. The Euler equations of an ideal incompressible fluid
are interpreted as geodesic flow on the group $\mathrm{SDiff}(M) =
\mathrm{Diff}_{\mathrm{vol}}(M)$ of volume-preserving diffeomorphisms
with the right-invariant $L^2$ metric; the same Euler-Arnold machinery
gives the **Korteweg-de Vries** equation from the Bott-Virasoro group,
the **Camassa-Holm** equation from $H^1$ on Bott-Virasoro, and many
other PDE of hydrodynamic type. The topological side studies
**helicity** $\mathcal{H}(v) = \int v \wedge dv$ as the integrated
**asymptotic linking number** of vortex lines, the **Hopf invariant**
as the prototype topological obstruction, **MHD / frozen-in magnetic
fields**, **Arnold stability** of steady flows via the energy-Casimir
method, and the **fast dynamo** problem. The 2nd-edition additions
include optimal-transport / Wasserstein geometry on
$\mathrm{Diff}_{\mathrm{vol}}$, the EPDiff framework, Korteweg /
Madelung quantum-hydrodynamic equations, and refined treatments of
Beltrami flows.

**Purpose of this plan:** lightweight P1-lite audit-and-gap pass
mirroring the Arnold-Dubrovin and Arnold-Mech audits. The volume is
**research-monograph density** — statement-heavy, examples-rich,
proof-sketch level — so the equivalence target is **expository-coverage
plus originator-prose anchoring**, not full proof-depth on every named
theorem. Where Babel Bible already has the Euler-Arnold unit
(`05.09.05`), Lie-Poisson and coadjoint-orbit infrastructure
(`05.03.01`, `05.04.01-02`), Virasoro (`03.11.03`), and basic
continuum-mechanics setup (`09.07.01`), the gap is concentrated in
the **topological-fluid-mechanics block** (helicity, asymptotic linking,
Hopf invariant, MHD, Arnold stability, fast dynamo, knotted flux tubes)
which is **entirely absent from Codex** and which is the book's
distinctive contribution.

**Tier δ designation in FASTTRACK_EQUIVALENCE_PLAN §6.** Arnold-Khesin
is currently listed as Tier δ (deferrable; content largely captured
by Tier α/β if equivalence-covered). This audit re-evaluates: the
volume is *only partly* a follow-on to Arnold-Mech Appendix 2 — the
topological-hydrodynamics half (asymptotic-linking, helicity,
Hopf-invariant obstructions, MHD topology, Arnold stability) is its
own subject which has no other anchor in the Fast Track. The honest
recommendation is **Tier γ-low**: the algebro-geometric half overlaps
heavily with Arnold-Mech / Arnold-Dubrovin / Marsden-Ratiu, but the
topological-fluid block is worth a 3-4 unit minimum batch to capture
the originator-prose layer.

---

## §1 What Arnold-Khesin is for

Arnold's 1966 paper *Sur la géométrie différentielle des groupes de
Lie de dimension infinie et ses applications à l'hydrodynamique des
fluides parfaits* (Ann. Inst. Fourier 16) proposed a single geometric
framework that unifies:

- the **rigid body equations** on $\mathrm{SO}(3)$,
- the **Euler equations of an ideal incompressible fluid** on
  $\mathrm{SDiff}(M)$,
- (later additions, in Khesin co-authorship) the **KdV** equation on
  the Bott-Virasoro group,
- the **Camassa-Holm** and **Hunter-Saxton** equations on the
  Virasoro group with different metrics,
- a long catalogue of hydrodynamic PDE arising from different choices
  of (group, right-invariant metric).

The 1998 book worked out this framework with all of its examples,
together with the **topological-hydrodynamics** programme: when ideal
fluids are studied geometrically, *topological* invariants of the
velocity field — most importantly the **helicity**
$\mathcal{H}(v) = \int_M v \wedge dv$ where $v$ is the velocity
1-form — emerge as conserved quantities. Helicity is Hopf-like: it
measures the average asymptotic linking of pairs of flow lines, and
gives the integrated version of the Gauss linking integral for
turbulent ergodic vortex configurations. The 2nd edition (2021) added
new content on optimal transport / Otto's calculus on
$\mathrm{Diff}_{\mathrm{vol}}$, the EPDiff family of PDE, Korteweg /
Madelung quantum-hydrodynamic equations, and updated topology-of-
flows material.

Distinctive Arnold-Khesin contributions:

1. **Euler-Arnold theorem in full generality.** Ch. I §3-§5: for a Lie
   group $G$ with right-invariant metric defined by a positive
   self-adjoint inertia operator $A : \mathfrak{g} \to \mathfrak{g}^*$,
   the geodesic equation projects to $\dot m = -\mathrm{ad}^*_{A^{-1}m}
   m$ on $\mathfrak{g}^*$. Specializing $G$ and $A$ produces the
   rigid-body equations, ideal-fluid Euler, KdV, Camassa-Holm, etc.
   The Codex unit `05.09.05` captures this at the rigid-body and
   schematic-fluid level; the *catalogue of specializations* is
   Arnold-Khesin-distinctive.

2. **Ideal incompressible fluid as geodesic on
   $\mathrm{SDiff}(M)$.** Ch. I §6-§9: the configuration space of an
   ideal fluid in a domain $M$ is the group $\mathrm{SDiff}(M)$ of
   volume-preserving diffeomorphisms; the kinetic energy is the
   right-invariant $L^2$ metric; the Euler equation $\partial_t u +
   (u \cdot \nabla) u = -\nabla p$ with $\mathrm{div}\, u = 0$ is the
   geodesic equation on this infinite-dimensional manifold. The
   coadjoint orbits of $\mathrm{SDiff}(M)$ are **isovorticity classes**
   — diffeomorphism-equivalent vorticity 2-forms. **Originator-author
   exposition.**

3. **Helicity as integrated asymptotic linking.** Ch. III §1-§3: for
   a divergence-free vector field $v$ on a simply-connected closed
   3-manifold, helicity $\mathcal{H}(v) = \int_M v \wedge dv = \int_M
   v \cdot \mathrm{curl}^{-1} v\, d\mathrm{vol}$ is the integral of
   the **asymptotic Gauss linking number** of pairs of orbits in the
   ergodic-mean sense (Arnold's 1973 *Asymptotic Hopf invariant*).
   Helicity is a Casimir of the Lie-Poisson structure, conserved by
   the Euler flow, and gives the prototype obstruction to unknotting
   vortex tubes by ideal-fluid evolution.

4. **Hopf invariant and topological obstructions.** Ch. III §4: the
   Hopf invariant of a map $S^3 \to S^2$ is the helicity of the
   pull-back of an area form on $S^2$ along the gradient of the map.
   Generalises to Borromean / triple-linking via Massey products
   (Ch. III §6 — Khesin-distinctive 2nd-edition expansion).

5. **Magnetohydrodynamics and frozen-in fields.** Ch. II §1-§5: a
   magnetic field $B$ in an ideal conductor is a 2-form whose flux
   through any material surface is conserved by the flow
   (Alfvén's frozen-flux theorem). The Casimirs of MHD are the
   magnetic-flux invariants and *magnetic helicity*
   $\int A \wedge dA$. Equilibrium / steady MHD has Beltrami fields
   ($\mathrm{curl}\, B = \lambda B$) as universal models.

6. **Energy-Casimir / Arnold stability.** Ch. II §6-§8: a steady
   solution of Euler / MHD is **nonlinearly stable** if the
   second variation of energy plus a Casimir is sign-definite on the
   tangent space of its isovorticity class. The Arnold 1965-66 method
   gives explicit conditions (e.g., 2D shear flows with monotone
   vorticity profile). **Arnold's hydrodynamic stability theorem,
   originator-prose mandatory.**

7. **Fast dynamo problem.** Ch. V §1-§5: in a conducting fluid with
   small magnetic diffusivity $\eta$, does the magnetic energy grow
   at a rate bounded away from zero as $\eta \to 0$? Equivalently:
   does the flow stretch magnetic flux faster than diffusion
   smooths it? Arnold's cat-map dynamo on $T^3$ is the canonical
   exactly-solvable model. Connects to ergodic theory, chaotic
   dynamics, Anosov flows.

8. **Beltrami fields and chaotic streamlines.** Ch. IV: a Beltrami
   field $v$ satisfies $\mathrm{curl}\, v = \lambda v$; equivalently,
   $v$ is an eigenfunction of the curl operator. ABC flows
   (Arnold-Beltrami-Childress) on $T^3$ have chaotic streamlines,
   Hopf-like helicity, and are the simplest models of "topologically
   intricate" steady fluid motion. Connects to the dynamo problem
   (item 7) and to KAM (Arnold-Mech App. 8).

9. **KdV and Camassa-Holm as Euler-Arnold equations.** Ch. VII §1-§4
   (2nd-ed. expansion): KdV is Euler-Arnold for the Bott-Virasoro
   group with $L^2$ metric; Camassa-Holm is the same group with $H^1$
   metric; Hunter-Saxton with degenerate-$H^1$. The same Euler-Arnold
   machinery reduces the integrable structure of these PDE to the
   geometry of the Virasoro coadjoint orbits.

10. **Optimal transport / Otto's Wasserstein calculus** (2nd-ed.
    addition, Ch. VIII): Brenier's polar factorisation and
    Otto's geometric formulation of the Wasserstein metric on
    probability measures *is* a Riemannian metric on the homogeneous
    space $\mathrm{Diff}/\mathrm{SDiff}$. Gives a geometric framing for
    porous-medium / Fokker-Planck PDE, and connects fluid-mechanics
    to the Monge-Kantorovich problem.

11. **Korteweg and Madelung fluids** (2nd-ed. addition): quantum
    hydrodynamics via the Madelung transform $\psi \mapsto
    (|\psi|^2, \mathrm{arg}\,\psi)$; Korteweg's capillary-stress
    fluid as a Hamiltonian system on a Wasserstein-like manifold.
    Bridge to quantum mechanics and to Bohmian / pilot-wave
    interpretations of QM.

12. **EPDiff family of equations** (2nd-ed. consolidation):
    Euler-Poincaré equations on diffeomorphism groups, a uniform
    formalism for KdV, Camassa-Holm, surface-tension waves,
    averaged-Euler (Euler-$\alpha$), Vlasov-Poisson, and template-
    matching in computational anatomy. Marsden-Holm-Ratiu
    Euler-Poincaré machinery is the modern packaging.

13. **Originator-text status.** Arnold is the originator of essentially
    every result in Parts I-IV; Khesin is the principal author of
    Parts V-VI and the 2nd-edition additions. **Mandatory originator-
    prose** for Arnold's 1966 Lie-group framework, Arnold's 1973
    asymptotic-Hopf-invariant paper, Arnold's 1965-66 stability
    method, and the cat-map fast-dynamo construction.

The book is **not** a textbook on hydrodynamics in the analyst's sense.
It does **not** treat regularity, weak solutions, the Beale-Kato-Majda
blow-up criterion, the Navier-Stokes existence problem, or
boundary-layer theory in detail. It treats hydrodynamic PDE as
geometric / topological objects on infinite-dimensional manifolds.
Constantin-Foias / Temam own the analytical PDE side; Arnold-Khesin
owns the geometric / topological side.

---

## §2 Babel Bible coverage map (Arnold-Khesin ↔ Codex)

Cross-referenced against the current symplectic / classical-mech /
modern-geometry chapters. ✓ = covered at Arnold-Khesin-equivalent
depth (survey-or-textbook depth, not necessarily proof-depth);
△ = topic present but Codex unit shallower or differently anchored;
✗ = not covered.

### Part I — Group and Hamiltonian setting (Chs. I-II of 1st ed. / Chs. I-III of 2nd ed.)

| Arnold-Khesin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Right-invariant metric on a Lie group, geodesic equation | `05.09.05` Euler-Arnold equations | ✓ | Anchored against Arnold-Khesin in `tier_anchors`. |
| Rigid body Euler equations on $\mathrm{SO}(3)$ | `05.09.05` (worked example, beginner tier) | ✓ | Covered. |
| Lie-Poisson bracket on $\mathfrak{g}^*$ | `05.03.01` coadjoint-orbit; `05.04.01-02` moment-map / reduction | △ | Coadjoint-orbit symplectic form (KKS) is in `05.03.01`; the **general Lie-Poisson formalism on $\mathfrak{g}^*$** (linear Poisson manifold, symplectic-leaf identification with orbits) is not its own unit. **Small gap.** |
| Marsden-Weinstein-Meyer symplectic reduction | `05.04.02` symplectic-reduction | ✓ | Covered. |
| Euler-Poincaré equations / Lagrangian reduction | `05.00.01-04` Lagrangian foundation; `05.09.05` | △ | Lagrangian-on-$TM$ and Hamilton-Jacobi present; the **Euler-Poincaré reduction** $T^*G \to \mathfrak{g}^*$ as the bridge from Lagrangian to Eulerian description is not isolated. **Gap.** |
| Configuration space $\mathrm{SDiff}(M)$, volume-preserving diffeomorphism group | — | ✗ | **Gap.** No unit. |
| Ideal-fluid Euler equation $\partial_t u + (u \cdot \nabla) u = -\nabla p$ as geodesic on $\mathrm{SDiff}(M)$ | `05.09.05` master tier (mention) | △ | Mentioned in passing; **not developed**. The single most-famous result in the book; Codex has it only as a pointer. **Priority-1 gap.** |
| Vorticity 2-form $\omega = du$, isovorticity classes as coadjoint orbits | — | ✗ | **Gap.** |
| Casimir functions on $\mathfrak{g}^*$, conserved under Euler-Arnold | — | ✗ | **Gap.** General theory + helicity as principal example. |

### Part II — Topological hydrodynamics (Chs. III-IV of 2nd ed.)

| Arnold-Khesin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Helicity** $\mathcal{H}(v) = \int v \wedge dv$ as Casimir of ideal-fluid Euler | — | ✗ | **Gap (highest priority — book's signature topic).** |
| **Asymptotic linking number** of orbits of a divergence-free flow (Arnold 1973) | — | ✗ | **Gap (priority-1).** |
| Helicity as integrated asymptotic linking — Arnold's theorem | — | ✗ | **Gap (priority-1).** Originator-text status. |
| Gauss linking integral; classical linking number of two closed curves in $\mathbb{R}^3$ | `06.01.28` index-winding-number (loosely related) | ✗ | **Gap.** Gauss linking is not in `06.01.28`. |
| **Hopf invariant** of a map $S^3 \to S^2$ and helicity interpretation | — | ✗ | **Gap (priority-1).** |
| Borromean / triple-linking via Massey products | — | ✗ | **Gap (priority-3).** |
| Knotted vortex tubes, vortex-line topology preservation under Euler flow | — | ✗ | **Gap.** |
| Beltrami fields / curl eigenfunctions; ABC flows on $T^3$ | — | ✗ | **Gap (priority-2).** |

### Part III — Magnetohydrodynamics (Ch. II / V of 2nd ed.)

| Arnold-Khesin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Frozen-flux / Alfvén theorem in ideal MHD | — | ✗ | **Gap.** |
| Magnetic helicity $\int A \wedge dA$ | — | ✗ | **Gap.** |
| Force-free / Beltrami-equilibrium magnetic fields | — | ✗ | **Gap.** |
| **Fast dynamo problem** | — | ✗ | **Gap (priority-2).** |
| Arnold cat-map dynamo on $T^3$ | — | ✗ | **Gap (priority-3).** Worked example. |

### Part IV — Energy-Casimir stability (Ch. II §6-§8)

| Arnold-Khesin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Arnold's nonlinear stability theorem for steady Euler flows** (energy-Casimir method) | — | ✗ | **Gap (priority-1).** Originator-text. |
| Second-variation sign-definiteness on isovorticity tangent space | — | ✗ | **Gap.** |
| 2D shear-flow stability criterion (Rayleigh / Arnold) | — | ✗ | **Gap (priority-3).** Worked example. |

### Part V — Specialisations / PDE family (Chs. VI-VII of 2nd ed.)

| Arnold-Khesin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Virasoro algebra and its Bott central extension | `03.11.03` virasoro-algebra; `03.11.01` central-extension | ✓ | Covered. |
| **KdV equation as Euler-Arnold on Bott-Virasoro with $L^2$ metric** | `05.09.05` (pointer); `05.09.09` finite-gap-integration | △ | KdV finite-gap integration via theta-functions is in `05.09.09` (algebro-geometric side); KdV as **geodesic equation on Bott-Virasoro** is the **Arnold-Khesin distinctive framing** and is not isolated. **Priority-2 gap.** |
| **Camassa-Holm equation** as Euler-Arnold on Virasoro with $H^1$ metric | — | ✗ | **Gap (priority-2).** |
| Hunter-Saxton equation as degenerate-$H^1$ Virasoro Euler-Arnold | — | ✗ | **Gap (priority-3).** |
| EPDiff family / Euler-Poincaré on $\mathrm{Diff}$ | — | ✗ | **Gap (priority-3).** |
| Korteweg / Madelung quantum hydrodynamics (2nd ed. addition) | — | ✗ | **Gap (priority-4).** |

### Part VI — Optimal transport / Wasserstein geometry (Ch. VIII of 2nd ed., new in 2021)

| Arnold-Khesin topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Wasserstein metric on probability measures | — | ✗ | **Gap.** |
| Brenier polar factorisation $\mathrm{Diff} = \mathrm{SDiff} \cdot \mathrm{Grad}$ | — | ✗ | **Gap.** |
| Otto's formal Riemannian structure; porous-medium / Fokker-Planck as Wasserstein gradient flows | — | ✗ | **Gap (priority-3).** |

### Supporting infrastructure (mostly already present)

| Topic | Babel Bible unit | Status |
|---|---|---|
| Lie group, Lie algebra, exp map | `03.03.01` lie-group + ch. 03.03 | ✓ |
| Coadjoint orbit, KKS form | `05.03.01` coadjoint-orbit | ✓ |
| Moment map, symplectic reduction | `05.04.01-02` | ✓ |
| Liouville volume preservation | `05.02.07` liouville-volume | ✓ |
| Poincaré recurrence | `05.02.08` poincare-recurrence | ✓ |
| Hamilton's principle of least action | `05.00.02` hamilton-principle | ✓ |
| Noether's theorem | `05.00.04` noether-theorem | ✓ |
| Differential forms, Stokes, Cartan magic formula | `03.04.*` differential-forms chapter | ✓ |
| Continuum mechanics (Eulerian / Lagrangian description) | `09.07.01` continuum-mechanics-field-theory | △ Templated, no fluid-specific master tier. |

### Aggregate coverage estimate

- **Theorem layer:** ~20% topic-level. The general Euler-Arnold theorem
  and supporting Lie-Poisson / coadjoint-orbit infrastructure (Ch. I)
  are present; everything topological (Chs. III-V), the stability
  theorem, the PDE specialisations (Chs. VI-VII), and the optimal-
  transport block (Ch. VIII) are absent.
- **Worked-example layer:** ~10%. Rigid body and (lightly) KdV present
  via `05.09.05`; helicity examples, ABC flow, cat-map dynamo,
  2D shear stability, Camassa-Holm peakons — all absent.
- **Notation layer:** ~70% aligned. Standard Arnold conventions
  ($\omega$ for vorticity 2-form, $v$ for velocity 1-form,
  $\mathrm{ad}^* / \mathrm{Ad}^*$ for coadjoint action,
  $\mathrm{SDiff}$ for volume-preserving diffeo group) match Codex.
  Helicity notation $\mathcal{H}$ and asymptotic-linking notation
  $\lambda(\gamma_1, \gamma_2)$ to be introduced.
- **Sequencing layer:** ~50%. The chain Lie-group →
  Lie-Poisson → coadjoint-orbit → Euler-Arnold → ideal-fluid Euler is
  represented at the upstream end (`03.03 → 05.03 → 05.09.05`); the
  downstream (helicity, stability, dynamo) is missing.
- **Intuition layer:** ~30%. The mechanics-first geometric framing is
  in `05.09.05`; the topological-fluid intuition (linking, knottedness
  preservation, helicity-as-Casimir) is absent.
- **Application layer:** ~25%. KdV present (algebro-geometric framing
  in `05.09.09`); MHD, dynamo, optimal transport absent.

**Composite estimate:** ~25% topic-coverage. The single largest deficit
is the **topological-fluid-mechanics block** (helicity, asymptotic
linking, Hopf invariant, Arnold stability, MHD topology, fast dynamo)
— ~5-6 units worth of content with no Codex anchor and no other Fast
Track book covering the material.

---

## §3 Gap punch-list (priority-ordered)

The Codex symplectic chapter has the Euler-Arnold infrastructure
(`05.09.05`) and coadjoint / Lie-Poisson backbone; Arnold-Khesin
exposes gaps in (a) the topological-fluid block — entirely new
sub-chapter; (b) the Euler-equation-on-$\mathrm{SDiff}$ block — one
load-bearing unit promoting `05.09.05`'s pointer to a real treatment;
(c) the PDE-specialisation catalogue (Bott-Virasoro / KdV / Camassa-
Holm); (d) the optional optimal-transport block from the 2nd edition.

Recommended slot ranges:

- New `05.14-topological-hydrodynamics/` sub-chapter (helicity,
  asymptotic linking, Hopf invariant, Arnold stability, MHD, dynamo,
  knotted vortex tubes). Six units across priority-1 and priority-2.
- Extensions to existing `05.09-integrable/`: KdV-as-Bott-Virasoro
  geodesic (priority-2), Camassa-Holm-as-Virasoro (priority-2 / 3).
- Deepenings to `05.09.05` Euler-Arnold-equations: full
  $\mathrm{SDiff}(M)$ ideal-fluid treatment.
- Optional `05.15-optimal-transport/` sub-chapter (Brenier /
  Wasserstein / Otto, priority-3 / 4).

### Priority 1 — load-bearing topological-fluid content (book's signature topics)

1. **`05.14.01` Ideal-fluid Euler equation as geodesic on
   $\mathrm{SDiff}(M)$.** Arnold-Khesin Ch. I §6-§9 anchor; Arnold
   1966 (Ann. Inst. Fourier 16) originator-text, **mandatory
   originator-prose**. Three-tier; ~2000 words. State the right-
   invariant $L^2$ metric on $\mathrm{SDiff}(M)$; derive the geodesic
   equation as Euler's equation $\partial_t u + (u \cdot \nabla) u =
   -\nabla p$ with $\mathrm{div}\, u = 0$; identify the dual space
   $\mathfrak{X}^*_{\mathrm{vol}}$ with vorticity 2-forms and the
   coadjoint action with vorticity transport. Worked example: 2D Euler
   on a domain with boundary, vorticity-stream-function formulation.
   **Promotes `05.09.05`'s ideal-fluid pointer to a real load-bearing
   unit; required prerequisite for items 2-5.**

2. **`05.14.02` Helicity as Casimir invariant of the ideal-fluid
   Euler equation.** Arnold-Khesin Ch. III §1-§2 anchor; Moffatt 1969
   *The degree of knottedness of tangled vortex lines* (J. Fluid Mech.
   35, originator of helicity-as-knottedness-measure) and Moreau 1961
   (originator of $\int v \wedge dv$ conservation), with Arnold 1973
   *Asymptotic Hopf invariant* (Sel. Math. Sov. 5, originator of
   asymptotic-linking interpretation). Three-tier; ~1800 words.
   Define $\mathcal{H}(v) = \int_M v \wedge dv$ for $v$ a velocity
   1-form on a 3-manifold; prove it is a Casimir of the Lie-Poisson
   structure (vanishes on isovorticity orbits); deduce conservation
   by ideal-fluid Euler. Master tier: $\mathcal{H}$ is well-defined
   up to a gauge / globalisation choice; helicity of an MHD magnetic
   field and its frozen-flux conservation. **Anchor unit for the
   topological-fluid block.**

3. **`05.14.03` Asymptotic linking number and Arnold's
   helicity-as-linking theorem.** Arnold-Khesin Ch. III §3 anchor;
   Arnold 1973 *Asymptotic Hopf invariant* originator-text,
   **mandatory originator-prose**. Three-tier; ~1800 words. Define
   the asymptotic linking $\lambda(x_1, x_2) = \lim_{T_1, T_2 \to
   \infty} \frac{1}{T_1 T_2} \mathrm{lk}(\Phi_t^{T_1}(x_1),
   \Phi_t^{T_2}(x_2))$ between two long orbit-segments closed up
   short. State Arnold's theorem: for a volume-preserving flow with
   ergodic invariant measure, the helicity equals the average
   asymptotic linking over all orbit pairs:
   $\mathcal{H}(v) = \int_{M \times M} \lambda(x_1, x_2)\, dx_1 dx_2$.
   Worked example: helicity of a Hopf-fibration-flow as the linking
   number of two generic fibres. **Arnold's signature theorem in
   topological hydrodynamics.**

4. **`05.14.04` Hopf invariant and topological obstructions to
   un-knotting vortex tubes.** Arnold-Khesin Ch. III §4-§5 anchor;
   Hopf 1931 *Über die Abbildungen der dreidimensionalen Sphäre auf
   die Kugelfläche* originator-text. Three-tier; ~1700 words.
   Construct the Hopf invariant $H(f) \in \mathbb{Z}$ of a smooth map
   $f : S^3 \to S^2$ via the linking number of two generic pre-
   images, equivalently via $H(f) = \int_{S^3} f^*\omega \wedge
   \alpha$ where $d\alpha = f^*\omega$ and $\omega$ is an area form
   on $S^2$. Identify with helicity of the gradient vector field of
   $f$ for the appropriate metric. **Topological obstruction: a
   vortex configuration with nonzero helicity cannot be deformed by
   ideal-fluid evolution to one with zero helicity.** Worked example:
   the Hopf fibration as the canonical helicity-1 configuration.

5. **`05.14.05` Arnold's nonlinear stability theorem
   (energy-Casimir method).** Arnold-Khesin Ch. II §6-§8 anchor;
   Arnold 1965 *Conditions for nonlinear stability of stationary
   plane curvilinear flows of an ideal fluid* (Dokl. Akad. Nauk SSSR
   162) + Arnold 1966 *On an a priori estimate in the theory of
   hydrodynamical stability* (Izv. Vyssh. Uchebn. Zaved. Mat. 54),
   **mandatory originator-prose**. Three-tier; ~2200 words. Steady
   solutions of Euler are critical points of energy on each
   isovorticity orbit (because the Casimirs include all
   $\int F(\omega)\,d\mathrm{vol}$ for $F$ smooth); the second
   variation $\delta^2 (E + C)$ on the tangent space to the
   isovorticity orbit gives a Lyapunov function when sign-definite.
   Worked example: 2D shear flow $v = (U(y), 0)$ with monotone
   vorticity profile is stable (Arnold's 1st theorem). Master tier:
   relationship to Rayleigh's inflection-point criterion. **Apex
   topological-hydrodynamics theorem; cited downstream in plasma
   physics, MHD-equilibrium stability, geophysical fluid dynamics.**

### Priority 2 — Arnold-Khesin extensions: MHD, dynamo, ABC, PDE specialisations

6. **`05.14.06` Magnetohydrodynamics, frozen-flux, and magnetic
   helicity.** Arnold-Khesin Ch. II §1-§5 (and Ch. V) anchor; Alfvén
   1942 *Existence of electromagnetic-hydrodynamic waves* (Nature 150,
   originator of frozen-flux), Woltjer 1958 *A theorem on
   force-free magnetic fields* (Proc. Nat. Acad. Sci. 44, originator
   of force-free / Beltrami equilibrium). Three-tier; ~1800 words.
   Ideal-MHD equations as a Lie-Poisson system on a semidirect
   product $\mathfrak{X}_{\mathrm{vol}}(M) \ltimes \Omega^2(M)$;
   frozen-flux theorem; magnetic helicity $\int A \wedge dA$ as a
   Casimir. Worked example: ABC magnetic equilibrium on $T^3$.

7. **`05.14.07` Beltrami fields, ABC flows, and chaotic streamlines.**
   Arnold-Khesin Ch. IV anchor; Arnold 1965 *Sur la topologie des
   écoulements stationnaires des fluides parfaits* (C. R. Acad. Sci.
   Paris 261) originator. Three-tier; ~1600 words. A Beltrami field
   $v$ on $T^3$ satisfies $\mathrm{curl}\, v = \lambda v$; the
   ABC field $v = (A \sin z + C \cos y, B \sin x + A \cos z, C
   \sin y + B \cos x)$ is the canonical 3-parameter example. For
   generic $(A, B, C)$ the streamlines are chaotic (no invariant
   foliation), giving the simplest mixing steady fluid flow.
   Connects to KAM at $A, B \neq 0, C = 0$ (integrable limit) and to
   item 8 (fast dynamo).

8. **`05.14.08` Fast dynamo problem and Arnold cat-map dynamo.**
   Arnold-Khesin Ch. V §1-§5 anchor; Arnold-Zeldovich-Ruzmaikin-
   Sokoloff 1981 *A magnetic field in a stationary flow with
   stretching in Riemannian space* (Soviet Phys. JETP 54) originator.
   Three-tier; ~1700 words. The fast-dynamo question: for a smooth
   incompressible flow $v$ on a closed 3-manifold, does the magnetic
   field $B$ satisfying $\partial_t B + \mathcal{L}_v B = \eta
   \Delta B$ grow exponentially with rate bounded below as $\eta \to
   0$? Cat-map model: $v = (2x + y, x + y)$ on $T^2$ lifted to a
   ${T^3}$ suspension produces a fast dynamo via the exponential
   stretching of the cat map's unstable eigenvector. **Connects
   hydrodynamics to ergodic / hyperbolic dynamical systems and to
   the astrophysical origin of galactic / solar magnetic fields.**

9. **`05.14.09` KdV as Euler-Arnold equation on the Bott-Virasoro
   group.** Arnold-Khesin Ch. VII §1-§2 anchor; Khesin-Misiolek 2003
   *Euler equations on homogeneous spaces and Virasoro orbits* (Adv.
   Math. 176) consolidating reference; Ovsienko-Khesin 1987 originator
   for Bott-Virasoro framing. Three-tier; ~1700 words. The
   Bott-Virasoro group is the central extension of $\mathrm{Diff}(S^1)$
   by $\mathbb{R}$ at the Gelfand-Fuchs cocycle; with the right-
   invariant $L^2$ metric the Euler-Arnold equation is the KdV
   equation $u_t = 6uu_x - u_{xxx}$. Worked example: derivation
   from Virasoro Lie-Poisson. Cross-link to `05.09.09` (finite-gap)
   and `05.09.05` (general Euler-Arnold).

10. **`05.14.10` Camassa-Holm equation as Euler-Arnold on
    Virasoro with $H^1$ metric.** Arnold-Khesin Ch. VII §3 anchor;
    Camassa-Holm 1993 *An integrable shallow water equation with
    peaked solitons* (Phys. Rev. Lett. 71) originator; Misiolek 1998
    *A shallow water equation as a geodesic flow on the Bott-Virasoro
    group* (J. Geom. Phys. 24) originator of the Euler-Arnold
    interpretation. Three-tier; ~1700 words. Change the metric from
    $L^2$ to $H^1 = \int (u^2 + u_x^2)\, dx$; the resulting Euler-
    Arnold equation on Bott-Virasoro is the Camassa-Holm equation.
    Peakon solutions $u(x, t) = c\, e^{-|x - ct|}$ as geodesics
    that lose smoothness in finite time. Bridge to the inverse-
    scattering integrability of CH.

### Priority 3 — depth gaps, examples, secondary specialisations

11. **`05.14.11` Knotted vortex tubes and the conservation of
    topological vortex invariants.** Arnold-Khesin Ch. III §5-§6
    anchor; Moffatt 1969 originator. Three-tier; ~1500 words.
    Vortex-tube topology (knot type, linking, framing) is preserved
    under ideal-fluid evolution by Helmholtz's vortex-line theorem.
    Worked example: trefoil vortex tube on $\mathbb{R}^3$ has
    helicity equal to its self-linking. Cross-link to `06.01.28`
    index-winding-number (winding-number-like construction). Bridge
    to knot-theory applications in DNA / plasma physics.

12. **`05.14.12` Borromean rings, Massey products, and higher-order
    linking.** Arnold-Khesin Ch. III §6 (2nd-ed. expansion) anchor;
    Massey 1958 originator; Khesin-collaborators 2010s extensions.
    Master-only; ~1500 words. The Borromean rings have pairwise zero
    linking but nonzero **triple-linking number** computed by the
    Massey-product cohomology operation. Hydrodynamic interpretation:
    a configuration with pairwise zero helicity-contribution can
    still have nonzero higher-order helicity. Cross-link to the
    Bott-Tu cohomology chapter.

13. **`05.04.08` Lie-Poisson bracket on $\mathfrak{g}^*$ as a
    self-contained unit.** Arnold-Khesin Ch. I §3 anchor;
    Marsden-Ratiu *Introduction to Mechanics and Symmetry* §13
    consolidating reference. Three-tier; ~1500 words. The
    linear Poisson manifold $\mathfrak{g}^*$ with bracket
    $\{F, G\}(\mu) = \mu([dF, dG])$ where $dF, dG \in \mathfrak{g}$;
    symplectic leaves are coadjoint orbits. Promotes the coadjoint-
    orbit / KKS material in `05.03.01` from the orbit-level to the
    ambient-Poisson-manifold level. **Foundational for `05.14.01-02`
    and for cleaner statement of the general Euler-Arnold theorem
    in `05.09.05`.**

14. **`05.14.13` Hunter-Saxton equation and degenerate-$H^1$
    Virasoro Euler-Arnold.** Arnold-Khesin Ch. VII §4 (2nd-ed.
    addition) anchor; Hunter-Saxton 1991 originator; Khesin-Misiolek
    2003 Euler-Arnold framing. Master-only; ~1300 words. Replace
    the $H^1$ metric on Virasoro by the degenerate form $\int u_x^2
    \,dx$ (kills the zero-mode); the resulting Euler-Arnold equation
    is the Hunter-Saxton equation $(u_t + uu_x)_x = \tfrac{1}{2}
    u_x^2$ describing nematic-liquid-crystal director-field waves.

15. **`05.14.14` Euler-Poincaré reduction $T^*G \to \mathfrak{g}^*$
    and the abstract EPDiff framework.** Arnold-Khesin Ch. I §5
    (general theory) + Holm-Marsden-Ratiu 1998 *The Euler-Poincaré
    equations and semidirect products* (Adv. Math. 137) consolidating
    reference. Three-tier; ~1700 words. The general reduction-by-
    symmetry framework that produces Euler-Arnold equations from
    Lagrangians on $TG$ via the body-frame symmetry. Worked example:
    rigid body Lagrangian → rigid body Euler equation. **Bridge
    from `05.00-*` Lagrangian foundation to `05.09.05` Euler-Arnold;
    fills a Cannas-Arnold-Mech sequencing gap.**

16. **`05.14.15` 2D shear flow stability — Rayleigh / Arnold
    comparison.** Arnold-Khesin Ch. II §8 anchor; Rayleigh 1880
    *On the stability of certain fluid motions* originator;
    Arnold 1965 originator of the nonlinear theorem.
    Master-only; ~1300 words. Detailed worked example deepening
    `05.14.05`: 2D parallel shear flow $v = (U(y), 0)$ in
    a strip; Rayleigh's linear inflection-point criterion vs
    Arnold's nonlinear monotone-vorticity criterion; explicit
    Lyapunov-function construction. **Optional; closes the
    "worked-example" gap on item 5.**

### Priority 4 — Optimal-transport / Wasserstein block (2nd-ed. additions, optional)

17. **`05.15.01` Wasserstein metric and Otto's calculus.**
    Arnold-Khesin Ch. VIII §1-§3 (2nd-ed. addition) anchor;
    Brenier 1991 *Polar factorization and monotone rearrangement
    of vector-valued functions* (Comm. Pure Appl. Math. 44)
    originator; Otto 2001 *The geometry of dissipative evolution
    equations: the porous medium equation* (Comm. Partial Diff.
    Eqs. 26) originator of the Riemannian framing. Master-tier;
    ~1700 words. The Wasserstein-2 metric on probability measures;
    Otto's formal Riemannian structure on the space of densities;
    the porous-medium equation and the Fokker-Planck equation as
    Wasserstein gradient flows. Bridge to fluid mechanics
    (Brenier polar factorisation $\mathrm{Diff} = \mathrm{SDiff}
    \cdot \mathrm{Grad}$).

18. **`05.15.02` Korteweg / Madelung quantum hydrodynamics.**
    Arnold-Khesin Ch. VIII §4 (2nd-ed. addition) anchor; Madelung
    1927 *Quantentheorie in hydrodynamischer Form* (Z. Phys. 40)
    originator; Korteweg 1901 capillary-stress originator.
    Master-tier; ~1500 words. The Madelung transform
    $\psi \mapsto (|\psi|^2, \mathrm{arg}\,\psi)$ rewrites the
    Schrödinger equation as a Korteweg-fluid equation with quantum-
    pressure term. Bridge to Bohmian mechanics and quantum-foundations
    chapter `20.03.*`. **Optional; pointer-density only.**

19. **`05.14.16` Average-vortex stretching and turbulence
    interpretations.** Arnold-Khesin Ch. III §7 anchor; Arnold-
    Khesin chapter survey of K41 / Kolmogorov 1941 turbulence
    cascade through topological lens. Master-only; ~1200 words.
    Pointer-stub interpretation; full Kolmogorov-1941 turbulence
    treatment is out of scope for this audit.

20. **Deepen `05.09.05` Euler-Arnold equations.** Master-tier
    addition: explicit `SDiff(M)` Euler-equation derivation
    referencing `05.14.01`; KdV-as-Bott-Virasoro reference
    pointing to `05.14.09`; Camassa-Holm pointer to `05.14.10`.
    **No new ID — in-place deepening once Priority-1 / Priority-2
    block lands.**

---

## §4 Implementation sketch

**Minimum equivalence-batch** = priority 1 only (items 1-5): **5 new
units** opening the new `05.14-topological-hydrodynamics/` sub-chapter.
Estimates:

- Items 1, 2, 3, 5 — ~3 hours each; item 4 (Hopf invariant) ~2.5h
  given existing cohomology infrastructure (`06.01.28` and
  `03.04.*`). Priority-1 total: ~14 hours.
- Priority 1+2 (items 1-10): +5 new units × 3h ≈ ~14h additional.
  Total ~28 hours.
- Priority 1+2+3 (items 1-16): +6 new units × ~2.5h + 1 deepening
  ≈ ~16h additional. Total ~44 hours.
- Priority 4 (items 17-20): optional ~10h.

At 4-6 production agents in parallel, the priority-1 batch fits in 2-3
days with one integration agent. The book's apex unit is
item 5 (Arnold stability theorem) — the originator-prose synthesis
spans Arnold 1965 + Arnold 1966 + the modern energy-Casimir
formulation; allocate extended budget.

**Batch structure.**

- **Batch A (topological-fluid block, items 1, 2, 3, 4, 5, ~14h):**
  opens the new `05.14-topological-hydrodynamics/` chapter. Internal
  cross-references heavy; produce together. Item 1 must precede
  items 2-5. Items 2 and 4 should be produced jointly (helicity and
  Hopf-invariant share the asymptotic-linking thread). Item 5 is
  the apex unit; produce last in the batch.
- **Batch B (MHD + dynamo + ABC, items 6, 7, 8, ~9h):** extends the
  topological-fluid block; runs after Batch A (item 6 cites item 2;
  item 7 cites item 1; item 8 cites items 7 and 2).
- **Batch C (PDE specialisations, items 9, 10, 13, 14, 15, ~13h):**
  extends `05.09-integrable/` and the new `05.14-*` chapter; cross-
  links into `03.11.03` Virasoro. Item 9 is the Bott-Virasoro / KdV
  anchor; items 10, 14 are second-tier; items 13, 15 are
  abstract-framework supports. Can run partly in parallel with
  Batch B.
- **Optional Batch D (priority-3 + priority-4, items 11, 12, 16,
  17, 18, 19, 20, ~14h):** depth-completion. Item 16 is a worked-
  example deepening of item 5; items 11, 12 add Hopf-invariant
  cohomology depth; items 17, 18 open the optional Wasserstein
  sub-chapter `05.15-*`; item 20 is in-place deepening of
  `05.09.05`.

**Originator-prose targets.** Arnold-Khesin is **deeply originator-
text** — Arnold authored or co-authored essentially every result in
Parts I-V. Mandatory originator-prose citations:

- **Euler-Arnold framework + ideal fluid** (item 1): Arnold 1966
  (Ann. Inst. Fourier 16). **Mandatory.**
- **Helicity** (item 2): Moffatt 1969 (J. Fluid Mech. 35), Moreau 1961,
  Arnold 1973 (Sel. Math. Sov. 5). Joint citation; Moffatt for the
  knottedness-measure interpretation, Arnold for the asymptotic-
  Hopf-invariant interpretation. **Mandatory.**
- **Asymptotic linking number** (item 3): Arnold 1973. **Mandatory.**
- **Hopf invariant** (item 4): Hopf 1931 (Math. Annalen 104).
  **Mandatory.**
- **Arnold stability theorem** (item 5): Arnold 1965 (Dokl. Akad.
  Nauk SSSR 162) + Arnold 1966 (Izv. Vyssh. Uchebn. Zaved. Mat. 54).
  **Mandatory; apex unit.**
- **Frozen-flux** (item 6): Alfvén 1942 (Nature 150); Woltjer 1958
  (Proc. Nat. Acad. Sci. 44) for force-free / Beltrami equilibrium.
- **ABC flows** (item 7): Arnold 1965 (C. R. Acad. Sci. Paris 261);
  Childress 1970 originator of the 3-parameter family.
- **Fast dynamo** (item 8): Arnold-Zeldovich-Ruzmaikin-Sokoloff 1981
  (Soviet Phys. JETP 54). **Mandatory for the cat-map model.**
- **KdV as Bott-Virasoro Euler-Arnold** (item 9): Ovsienko-Khesin
  1987; Khesin-Misiolek 2003 (Adv. Math. 176).
- **Camassa-Holm** (item 10): Camassa-Holm 1993 (Phys. Rev. Lett. 71);
  Misiolek 1998 (J. Geom. Phys. 24).
- **Hunter-Saxton** (item 14): Hunter-Saxton 1991.
- **Euler-Poincaré reduction** (item 15): Holm-Marsden-Ratiu 1998
  (Adv. Math. 137); Poincaré 1901 *Sur une forme nouvelle des
  équations de la mécanique* (C. R. Acad. Sci. Paris 132)
  originator-text.
- **Wasserstein / Otto** (item 17): Brenier 1991 (Comm. Pure Appl.
  Math. 44); Otto 2001 (Comm. Partial Diff. Eqs. 26).
- **Madelung / Korteweg** (item 18): Madelung 1927 (Z. Phys. 40);
  Korteweg 1901.

**Notation crosswalk.** Arnold-Khesin use:

- $v$ for velocity 1-form (using musical isomorphism to vector field
  via the metric); $u$ also seen for velocity vector field.
- $\omega = dv$ for vorticity 2-form; in 3D identified with vorticity
  vector $\mathrm{curl}\, v$ via Hodge star.
- $\mathrm{SDiff}(M) = \mathrm{Diff}_{\mathrm{vol}}(M)$ for the
  volume-preserving diffeomorphism group; $\mathfrak{X}_{
  \mathrm{vol}}(M) = \mathrm{Vect}_{\mathrm{vol}}(M)$ for its Lie
  algebra.
- $\mathcal{H}(v) = \int v \wedge dv$ for helicity. Magnetic helicity
  $\mathcal{H}_B = \int A \wedge dA$.
- $\lambda(\gamma_1, \gamma_2)$ or $\mathrm{lk}(\gamma_1, \gamma_2)$
  for linking number; asymptotic linking $\lambda(x_1, x_2)$ between
  points (ergodic average over orbits).
- $A : \mathfrak{g} \to \mathfrak{g}^*$ for inertia operator (often
  $I$ in finite-dim contexts).

These match Codex conventions where they apply. Record per-unit in
§Notation paragraphs; **no separate `notation/arnold-khesin.md`
crosswalk file needed** (per Cannas / Arnold-Mech / Arnold-Dubrovin
precedent).

**DAG edges to add.** New prerequisites arrows for priority-1+2:

- `05.14.01` ← {`05.09.05` Euler-Arnold, `05.04.02` symplectic
  reduction, `03.04.04` Lie derivative}
- `05.14.02` ← {`05.14.01`, `03.04.03` differential forms,
  `05.03.01` coadjoint orbit}
- `05.14.03` ← {`05.14.02`, `03.04.04` Lie derivative}
- `05.14.04` ← {`05.14.02`, `03.12.05` Eilenberg-MacLane or other
  cohomology base unit}
- `05.14.05` ← {`05.14.01`, `05.14.02`, `05.04.02` reduction}
- `05.14.06` ← {`05.14.01`, `05.14.02`, `10.04.01` Maxwell-in-forms}
- `05.14.07` ← {`05.14.01`, `05.09.01` KAM} (relates ABC integrable
  limit to KAM perturbation regime)
- `05.14.08` ← {`05.14.06`, `05.14.07`}
- `05.14.09` ← {`05.09.05`, `03.11.03` Virasoro, `03.11.01`
  central extension}
- `05.14.10` ← `05.14.09`
- `05.04.08` (Lie-Poisson) ← `05.03.01` coadjoint orbit; successor
  of `05.04.02` reduction.

**Chapter structure.** One new sub-chapter, one optional new
sub-chapter, plus extensions:

- New `05.14-topological-hydrodynamics/`: items 1-12, 16, 19.
- Optional new `05.15-optimal-transport/`: items 17, 18.
- Extension of existing `05.04-moment-reduction/`: item 13.
- Extension of existing `05.09-integrable/`: items 9, 10, 14, 15.
- In-place deepening of `05.09.05`: item 20.

**Composite Arnold-Mech + Arnold-Dubrovin + Arnold-Khesin batch.**
The three plans together form the Arnold-symplectic-mechanics arc.
Sequencing recommendation:

1. Arnold-Mech priority-1+2 (Lagrangian foundation + KAM + HJ +
   Liouville-recurrence + Noether + geodesic-flow) — already
   shipped as `05.00.*` and `05.09.01-03` per current corpus.
2. Arnold-Dubrovin priority-1+2 (orbit method + Lagrangian
   singularities + sub-Riemannian) — partly shipped (`05.12.01`,
   `05.11.01`) per current corpus.
3. **Arnold-Khesin priority-1 (this plan, items 1-5)** — closes
   the topological-hydrodynamics gap that neither of the prior
   audits touches.
4. Arnold-Khesin priority-2 (MHD + dynamo + PDE specialisations)
   — runs after step 3.
5. Arnold-Khesin priority-3+4 — depth completion, optional.

---

## §5 What this plan does NOT cover

- Line-number Theorem inventory across the 2nd-edition's eight
  chapters. Defer unless punch-list expands.
- The book has **no formal Problem section**; problem-pack production
  is not applicable. (Worked examples are integrated into the prose;
  items 1-10 reproduce them.)
- Navier-Stokes analytical theory: existence (Leray), uniqueness,
  Beale-Kato-Majda blow-up criterion, Onsager conjecture, Clay
  Millennium statement. Owned by future `09.07-continuum/` analytical
  fluid-PDE pass; Arnold-Khesin treats these only as asides.
- Turbulence theory: Kolmogorov K41, energy cascade, intermittency,
  anomalous dissipation. Item 19 is a pointer-stub.
- Boundary-layer theory, Prandtl asymptotics. Out of scope.
- Compressible-fluid Euler equations and shock theory. Out of scope.
- Plasma physics beyond ideal MHD: kinetic / Vlasov-Maxwell, two-fluid
  models, MHD instabilities in tokamak / astrophysical geometry.
  Out of scope; cross-link only.
- Statistical hydrodynamics: Onsager equilibrium vortex theory,
  point-vortex models. Light cross-link from item 11.
- General-relativistic hydrodynamics. Cross-link from `13-gr-cosmology/`.
- Symplectic-topology-of-fluids advances post-Khesin 2021 (e.g.,
  contact-topology / open-book applications to fluid mechanics).
  Out of scope.
- Full Wasserstein / optimal-transport theory: Monge formulation,
  duality, Sinkhorn algorithms, displacement convexity, McCann's
  theorem. Items 17 / 18 are pointer-density; full coverage needs a
  dedicated Villani-Ambrosio audit (FT non-listed).
- Sub-Riemannian / Carnot-Carathéodory geometry — owned by the
  Arnold-Dubrovin `05.13-nonholonomic/` block (see that plan).
- `notation/arnold-khesin.md` standalone file. Per-unit §Notation
  paragraphs suffice (per Cannas / Arnold-Mech / Arnold-Dubrovin
  precedent).

---

## §6 Acceptance criteria for FT equivalence (Arnold-Khesin)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- ≥95% of Arnold-Khesin named theorems map to Babel Bible units
  (currently ~20%; after priority-1 → ~60%; after priority-1+2 →
  ~82%; after priority-1+2+3 → ~92%; after priority-4 → ~95%). Item
  5 (Arnold stability) is the single largest contributor; item 1
  (ideal fluid on $\mathrm{SDiff}$) is the load-bearing prerequisite.
- ≥80% of named worked examples reproduced (currently ~10%;
  priority-1 → ~50%; priority-1+2 → ~80%).
- Notation alignment recorded inline in Master sections; no separate
  `notation/arnold-khesin.md`.
- Sequencing: the chain Lie-group → Lie-Poisson →
  $\mathrm{SDiff}(M)$ → ideal-fluid Euler → helicity → asymptotic
  linking → Hopf invariant → topological obstruction is unbroken
  after priority-1 lands. The Bott-Virasoro → KdV / Camassa-Holm
  branch is unbroken after priority-2.
- Pass-W weaving connects the new `05.14-topological-hydrodynamics/`
  units to the existing `05.03-coadjoint/`, `05.04-moment-reduction/`,
  `05.09-integrable/`, `03.11-infinite-dim-lie/`, `09.07-continuum/`,
  and (for MHD) `10.04-maxwell-fields/` chapters via lateral
  connections.

The 5 priority-1 new units (items 1-5) close the topological-
hydrodynamics gap and ship Arnold's stability theorem as an apex
unit. The 5 priority-2 items (6-10) close MHD, dynamo, ABC, and the
two main PDE specialisations (KdV-as-geodesic, Camassa-Holm). The 6
priority-3 items (11-16) close depth gaps and add a Lie-Poisson
self-contained foundation unit. The 4 priority-4 items (17-20) open
the optional Wasserstein / Madelung block from the 2nd edition.

**Apex unit designation.** Item 5 (`05.14.05` Arnold's nonlinear
stability theorem via energy-Casimir method) is designated an
**apex unit** — originator-research synthesis across two 1965-66
Arnold papers, second-variation calculus on infinite-dimensional
constrained submanifolds, and the modern energy-Casimir packaging
of Holm-Marsden-Ratiu. Item 8 (`05.14.08` fast dynamo) is a
**secondary apex unit** — requires synthesis of the Arnold-
Zeldovich-Ruzmaikin-Sokoloff originator paper with the modern
chaotic-dynamics interpretation, and bridges to ergodic-theory
material the curriculum does not yet have. Both warrant extended
agent budgets per `docs/specs/ORCHESTRATION_PROTOCOL.md` §8.

**Honest scope.** Arnold-Khesin is a **specialty research monograph**.
Per FASTTRACK_EQUIVALENCE_PLAN §6, it was tagged Tier δ
("optional / out of strict scope, content largely captured by Tier
α/β if those are equivalence-covered"). This audit re-evaluates: the
**topological-hydrodynamics half** (helicity, asymptotic linking,
Hopf-invariant obstruction, Arnold stability, MHD topology, fast
dynamo) is **not captured by any other Fast Track book** and is
Arnold's signature contribution to mathematical physics. The honest
recommendation is **Tier γ-low priority** with a minimum priority-1
batch of 5 units to preserve the originator-prose layer. The
analytical / specialisation half (Wasserstein, Camassa-Holm,
Hunter-Saxton) can remain deferred as priority-3+4.

**Composite batch recommendation.** Run priority-1 (5 units, ~14h)
as a single Arnold-Khesin batch that closes the topological-fluid-
mechanics gap. Defer priority-2 (MHD, dynamo, PDE specialisations,
5 units, ~14h) to a second batch once the apex stability unit is
verified; this second batch can be coordinated with `10.04-maxwell-
fields/` (for MHD) and `03.11-infinite-dim-lie/` (for KdV / CH).
Priority-3+4 (10 items, ~24h) remains depth-completion / optional.
**The priority-1 batch alone graduates Arnold-Khesin from "not
covered" (~20%) to "topological-hydrodynamics-equivalent" (~60%)
and closes the originator-prose audit obligation.**
