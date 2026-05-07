# Cannas da Silva — *Lectures on Symplectic Geometry* (Fast Track 1.11) — Audit + Gap Plan

**Book:** Ana Cannas da Silva, *Lectures on Symplectic Geometry*
(Springer Lecture Notes in Mathematics 1764, 2001; corrected reprint 2008).
Hosted free by the author at her ETH Zürich page
(`https://people.math.ethz.ch/~acannas/Papers/lsg.pdf`).

**Fast Track entry:** 1.11 (the symplectic-geometry slot of the
Dynamical-Systems-IV / symplectic-geometry strand on the booklist; Cannas
is paired there with Arnold *Mathematical Methods of Classical Mechanics*
and McDuff-Salamon *Introduction to Symplectic Topology* as the
free open-access companion to the strand).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list
of new units to write — and, more importantly here, a list of *existing
units to deepen* — so that *Lectures on Symplectic Geometry* is covered
to the equivalence threshold (≥95% effective coverage of theorems, key
examples, exercise pack, notation, sequencing, intuition, applications —
see `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

This pass is intentionally not a full P1 audit (which would inventory
every numbered Homework problem in Cannas's 30 lectures at the
line-number level). It works from the book's lecture-by-lecture topic
list and Cannas's distinctive editorial choices, produces the gap
punch-list, and stops there.

The audit surface here is **smaller than Brown or Hatcher**: Cannas is
already cited as a primary anchor on 18 of the 21 shipped Codex symplectic
units (`tier_anchors` field), so coverage at the topic level is high. The
real gaps are at the *depth* level — the templated v0.5 Strand-B
production passed the prose validator but never actually delivered Cannas's
signature proofs (Moser's trick, Weinstein neighbourhood, Arnold-Liouville,
Atiyah-Guillemin-Sternberg convexity, Marsden-Weinstein in the regular
case, Delzant's classification of toric manifolds). This plan punches up
those depth gaps and adds the genuinely missing Cannas-specific topics
(blow-up, symplectic cut, symplectic fibrations, contact-symplectic
adjacency, generating functions).

---

## §1 What Cannas's book is for

Cannas is the canonical lecture-note treatment of symplectic geometry
at the bridge between classical mechanics, modern symplectic topology,
and equivariant geometry. Where Arnold (1.0a / *Mathematical Methods*)
anchors the **mechanics-first** perspective — phase space, action-angle,
KAM — and McDuff-Salamon (3.46-adjacent) anchors the **topology-first**
perspective — pseudoholomorphic curves, Floer, Gromov-Witten — Cannas
sits squarely in the middle. The book is organised as 30 short lectures
(typically 5-8 pages each), grouped into six parts:

- **Part I — Symplectic Manifolds** (Lectures 1-6): linear symplectic
  geometry, symplectic manifolds, symplectomorphisms.
- **Part II — Symplectomorphisms** (Lectures 7-9): Lagrangian
  submanifolds, generating functions, fixed-point Arnold conjecture
  (statement-level).
- **Part III — Local Forms** (Lectures 10-12): isotopies and vector
  fields, **Moser's trick**, **Darboux-Moser-Weinstein theorem**,
  Weinstein's Lagrangian neighbourhood theorem, Weinstein tubular
  neighbourhood.
- **Part IV — Contact Manifolds** (Lectures 13-14): contact forms, Reeb
  vector fields, contactisation, symplectisation. Cannas is the rare
  symplectic textbook that integrates the contact half cleanly into the
  same pedagogical arc.
- **Part V — Compatible Almost Complex Structures** (Lectures 15-17):
  compatible triples $(\omega, J, g)$, polar decomposition,
  pseudoholomorphic curves at the introductory level, applications to
  Kähler manifolds.
- **Part VI — Kähler Manifolds** (Lectures 18-21): complex projective
  spaces, Hodge identities, Kähler reduction. (Briefer than the rest;
  the strand handoff to Voisin / Griffiths-Harris.)
- **Part VII — Hamiltonian Mechanics** (Lectures 22-24): Hamiltonian
  vector fields, integrable systems, Arnold-Liouville theorem (genuinely
  proved here, not just stated).
- **Part VIII — Hamiltonian Group Actions** (Lectures 25-30): symplectic
  and Hamiltonian actions, **moment maps**,
  **Marsden-Weinstein-Meyer reduction** in the regular case,
  **Atiyah-Guillemin-Sternberg convexity**, **symplectic toric
  manifolds and Delzant's theorem**, **Duistermaat-Heckman**.

Distinctive Cannas choices, in roughly the order she develops them:

1. **Moser's trick first.** Lecture 7 develops the path-method (Moser's
   trick) as a stand-alone *technique*, then derives Darboux's theorem,
   the relative Darboux theorem, the Weinstein Lagrangian neighbourhood
   theorem, and the Weinstein tubular neighbourhood theorem all as
   parallel applications of the same path-of-symplectic-forms argument.
   This deformation-theoretic framing is Cannas's signature pedagogical
   move and is what makes the "local forms" section feel uniformly
   organised. Codex's existing Darboux unit (`05.01.04`) does *not*
   currently use Moser's trick — it gives a generic Cartan-formula
   sketch — and the Weinstein theorems are not present at all.
2. **Generating functions before Arnold conjecture.** Lecture 9 shows
   how the graph of a Hamiltonian symplectomorphism on a cotangent
   bundle is generated by a function $S$ on the base, which gives the
   geometric setup for Arnold's conjecture (fixed points = critical
   points of $S$). Codex has the Arnold conjecture unit (`05.08.01`)
   but not the generating-function bridge.
3. **Contact manifolds inside the symplectic narrative.** Cannas treats
   contact geometry as the odd-dimensional cousin of symplectic
   geometry, with symplectisation $S(M) = M \times \mathbb{R}$ and
   contactisation as paired functors. Codex has zero contact units
   today; this is the largest topic-level gap.
4. **Toric symplectic geometry as the climax.** Part VIII culminates
   in Delzant's theorem: every compact symplectic toric $2n$-manifold
   is determined up to equivariant symplectomorphism by its Delzant
   polytope. This is a complete classification result, the only such
   in symplectic geometry, and is the showcase example of how the
   moment-map framework buys a global theorem. Codex has the moment
   map and reduction units (`05.04.01`, `05.04.02`) but no toric or
   Delzant unit.
5. **Atiyah-Guillemin-Sternberg convexity proved.** Lecture 27 walks
   through the convexity-of-image proof for moment maps of compact-torus
   actions. Codex's moment-map unit mentions convexity in passing but
   doesn't prove it.
6. **Marsden-Weinstein-Meyer in the regular case.** Lecture 23 / 26 of
   the Hamiltonian-actions part proves the regular reduction theorem
   carefully — symplectic structure descends to $M /\!/ G = \mu^{-1}(0) / G$
   when $0$ is a regular value of $\mu$ and $G$ acts freely on
   $\mu^{-1}(0)$. Codex's reduction unit (`05.04.02`) states the result
   but the proof is the templated generic Cartan-formula argument.
7. **Duistermaat-Heckman.** Lecture 30 ends with the
   Duistermaat-Heckman theorem on the variation of symplectic volume
   in reduced spaces, and the equivariant cohomology / localisation
   formula. This is the canonical bridge into equivariant symplectic
   geometry. Codex has nothing.
8. **J-holomorphic curves at the introductory level.** Lecture 17
   states the Cauchy-Riemann equation for a smooth map
   $u : (\Sigma, j) \to (M, J)$ and gives the energy-area identity.
   Cannas does *not* develop the moduli space; she points to
   McDuff-Salamon for that. Codex's pseudoholomorphic-curve unit
   (`05.06.02`) is currently at Cannas's level (statement-only, no
   moduli) and that's appropriate; the deepening would be McDuff-Salamon
   territory, not Cannas.
9. **Examples-first throughout.** Each lecture leads with concrete
   examples ($T^*X$, $S^2$ as Kähler, $\mathbb{C}P^n$, coadjoint orbits)
   before the general theory. Codex's units mostly follow the
   reverse order; the "Worked example [Beginner]" sections are
   currently templated and could be replaced with Cannas's actual
   examples.

The book ends before serious symplectic *topology* (no Floer, no
Gromov-Witten beyond the energy-area identity, no Hofer geometry).
Cannas points the reader to McDuff-Salamon for those — so the Floer
strand of Codex (`05.08.*`) is *not* a Cannas equivalence target;
it's covered by the McDuff-Salamon entry whenever that book is audited.

---

## §2 Coverage table (Codex vs Cannas)

Cross-referenced against the 21-unit Codex symplectic chapter and the
220-unit total corpus. ✓ = covered at Cannas-equivalent depth,
△ = topic present but Codex unit shallower than Cannas's lecture
(typically the templated v0.5 Strand-B prose),
✗ = not covered. The symplectic chapter has a uniform v0.5 Strand-B
templated-prose problem: the "Key theorem with proof" in nearly every
unit is the same generic Cartan-formula calculation regardless of the
unit's stated theorem. Where the topic itself appears at the right
*scope* but the templated proof doesn't actually prove the named
theorem, the entry below is △.

### Part I — Symplectic Manifolds (Lectures 1-6)

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Symplectic linear algebra ($V$, $\omega$, isotropic / coisotropic / Lagrangian / symplectic subspaces, symplectic bases) | `05.01.01` symplectic-vector-space | △ | Definitions present; Cannas's full subspace-classification table (the four types) and the standard-basis existence proof are not built out; Master section is templated. |
| Symplectic manifold (definition, $T^*X$ as canonical example, $\omega = -d\theta$, Liouville form $\theta = p\,dq$) | `05.01.02` symplectic-manifold; `05.02.05` cotangent-bundle | △ | Both units exist; cotangent-bundle unit covers $T^*X$ but doesn't actually compute $\omega = \sum dp_i \wedge dq_i$ as the canonical Darboux model; the Liouville one-form is mentioned but its naturality property ($\alpha^*\theta = \alpha$ for any 1-form $\alpha:X \to T^*X$) is missing. |
| Symplectomorphism group | `05.01.03` symplectic-group | △ | Linear case treated; the diffeomorphism-group $\mathrm{Symp}(M, \omega)$ is mentioned but not developed. |
| Compatible triples $(\omega, J, g)$, polar decomposition | `05.06.01` almost-complex | △ | Unit titled "almost-complex structure on a symplectic manifold"; existence of compatible $J$ is *stated as theorem* but the proof is the generic Cartan-formula template; polar decomposition argument missing. |

### Part II — Symplectomorphisms (Lectures 7-9)

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Lagrangian submanifold (definition, half-dim isotropic) | `05.05.01` lagrangian-submanifold | △ | Definition present; the canonical examples (zero section of $T^*X$, graph of a closed 1-form, graph of a symplectomorphism in $M^- \times M$) are not all worked. |
| Graph criterion: $\alpha:X \to T^*X$ is a section, $\alpha$ is Lagrangian iff $d\alpha = 0$ | `05.05.01` (mention) | △ | Stated as the unit's "Key theorem" but the templated proof doesn't carry it out. |
| Generating function for a symplectomorphism | — | ✗ | **Gap.** Cannas Lecture 9. The generating-function-on-the-base construction $\phi_S(x, dS_x) = (x', \xi')$ that gives the bridge to Arnold's conjecture is missing entirely. |
| Arnold conjecture (statement, fixed-point version on a cotangent bundle) | `05.08.01` arnold-conjecture | ✓ | Statement-level coverage matches Cannas's depth; deeper Floer-theoretic version is in `05.08.02`. |

### Part III — Local Forms (Lectures 10-12) — **Cannas's signature section**

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Isotopies and time-dependent vector fields, $\frac{d}{dt}\rho_t^*\omega_t = \rho_t^*(\mathcal{L}_{V_t}\omega_t + \frac{d\omega_t}{dt})$ | — | ✗ | **Gap.** Cannas Lecture 10. The base identity Moser's trick rests on. Used silently in `05.01.04` Darboux but never stated as its own lemma. |
| **Moser's trick** (path method): given a path $\omega_t$ of symplectic forms with $\frac{d\omega_t}{dt} = d\beta_t$ exact, find $V_t$ with $\iota_{V_t}\omega_t + \beta_t = 0$, integrate to get $\rho_t^*\omega_t = \omega_0$ | — | ✗ | **Gap (high priority).** Cannas Lecture 11. **The most-load-bearing missing technique in the whole symplectic chapter.** Used implicitly in (and mis-proved by) the Darboux unit. |
| **Darboux theorem via Moser's trick** | `05.01.04` darboux-theorem | △ | The unit *exists* but the proof is the generic Cartan-formula template — it does not actually carry out Moser's path argument or land in the standard form $\omega_0 = \sum dq_i \wedge dp_i$. **Depth-gap, high priority.** |
| Relative Darboux / Darboux-Moser-Weinstein | — | ✗ | **Gap.** Cannas Lecture 11. Two symplectic forms agreeing on a submanifold $X$ are equivalent on a neighbourhood. |
| **Weinstein Lagrangian neighbourhood theorem** | — | ✗ | **Gap (high priority).** Cannas Lecture 12. A neighbourhood of a Lagrangian $L \subset M$ is symplectomorphic to a neighbourhood of the zero section in $T^*L$. **Load-bearing for Floer / Lagrangian Floer / generating-function constructions.** |
| **Weinstein tubular neighbourhood theorem** (general symplectic submanifold) | — | ✗ | **Gap.** Cannas Lecture 12. Generalisation of the Lagrangian case using the symplectic normal bundle. |

### Part IV — Contact Manifolds (Lectures 13-14)

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Contact form, contact structure $\xi = \ker \alpha$, $\alpha \wedge (d\alpha)^n \neq 0$ | — | ✗ | **Gap (high priority — entire missing topic).** No contact unit anywhere in Codex. |
| Reeb vector field $R_\alpha$ | — | ✗ | **Gap.** |
| Symplectisation $(M \times \mathbb{R}, d(e^t \alpha))$ | — | ✗ | **Gap.** |
| Contactisation $M \times \mathbb{R}$ for an exact symplectic $M$ | — | ✗ | **Gap.** |
| Darboux for contact, Gray's theorem (contact analogue of Moser) | — | ✗ | **Gap.** |

### Part V — Compatible Almost Complex Structures (Lectures 15-17)

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Compatible $J$ exists, contractibility of $\mathcal{J}(\omega)$ | `05.06.01` almost-complex | △ | **Existence stated, contractibility not.** Polar decomposition proof not carried out. |
| Integrable $J$, Newlander-Nirenberg statement | — | ✗ | **Gap.** Cannas Lecture 16. Standard cross-strand topic; Codex's complex-geometry chapter (`04.*`) may cover Newlander-Nirenberg but it's not currently linked from the symplectic side. |
| Pseudoholomorphic curve, Cauchy-Riemann equation $du \circ j = J \circ du$, energy-area identity | `05.06.02` pseudoholomorphic-curve | △ | Definition present; energy-area identity stated as the "Key theorem" but proof is templated. Cannas's depth here is exactly statement-level + energy identity, so this unit *could* be at Cannas-equivalent depth with a non-templated rewrite. |
| Kähler manifold, Hodge identities, Kähler form | `04.05.*` (complex geometry strand, cross-link) | △ | Cannas's Part VI is brief; the substantive Kähler exposition lives in Voisin / Griffiths-Harris and the Codex `04.*` strand. Cross-link rather than dedicated symplectic-Kähler unit suffices for Cannas equivalence. |

### Part VII — Hamiltonian Mechanics (Lectures 22-24)

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Hamiltonian vector field, $\iota_{X_H}\omega = dH$, conservation of energy | `05.02.01` hamiltonian-vector-field | △ | Definition + identity present; the worked example is templated. |
| Poisson bracket, Jacobi identity, $\{H, \cdot\} = X_H$ derivation | `05.02.02` poisson-bracket | △ | Definition present; Jacobi is stated, derivation property worked. |
| Integrable system (Liouville integrability: $n$ Poisson-commuting independent integrals on $M^{2n}$) | `05.02.03` integrable-system | △ | Definition present; depth roughly Cannas's. |
| **Arnold-Liouville theorem** (compact connected level set is a torus, action-angle coordinates exist on a tubular neighbourhood) | `05.02.04` action-angle-coordinates | △ | **Title is "action-angle coordinates," theorem is named "Liouville-Arnold local normal form" — but the proof is the generic Cartan-formula template.** The actual Arnold-Liouville statement (compact level set ⇒ torus, period lattice gives the action coordinates, Hamilton-Jacobi gives the angle coordinates) is not carried out. **Depth-gap, high priority.** |

### Part VIII — Hamiltonian Group Actions (Lectures 25-30) — **Cannas's largest section**

| Cannas topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Symplectic and Hamiltonian $G$-action, fundamental vector field | `05.04.01` moment-map (mention); `05.03.01` coadjoint-orbit (mention) | △ | The setup-level facts (action by symplectomorphisms, fundamental vector field $X^\sharp$) appear in passing across these two units but are not developed cleanly. |
| Moment map (definition, three conditions: $d\mu^X = \iota_{X^\sharp}\omega$, equivariance, additivity) | `05.04.01` moment-map | △ | Definition present; the three-condition characterisation is stated as the "Key theorem" but the templated proof does not actually establish the equivariance or the additivity-of-moments-of-Hamiltonians lemma. |
| Coadjoint orbit, Kirillov-Kostant-Souriau form | `05.03.01` coadjoint-orbit | △ | Topic present; KKS form mentioned; the proof that KKS is symplectic and the moment map for the $G$-action on $\mathcal{O}_\xi$ is the inclusion is templated. |
| **Marsden-Weinstein-Meyer reduction (regular case)**: $0$ regular value of $\mu$, $G$ acts freely on $\mu^{-1}(0)$, then $M /\!/ G = \mu^{-1}(0) / G$ is symplectic with the descended form | `05.04.02` symplectic-reduction | △ | The unit exists; the **regular** case is what Cannas actually proves (vs. the singular case which needs stratifications). The current Codex unit's proof is templated. **Depth-gap, high priority.** |
| Reduction examples ($S^2$ from $\mathbb{C}^2$, $\mathbb{C}P^n$ from $\mathbb{C}^{n+1}$, complex Grassmannians) | — | △ | Cannas's worked examples in Lecture 26 are absent from the reduction unit. The Beginner "Worked example" slot in `05.04.02` is the templated phase-plane example. |
| **Atiyah-Guillemin-Sternberg convexity theorem**: image of moment map for compact-torus action on a connected compact symplectic $M$ is the convex hull of the images of the fixed points | — | ✗ | **Gap (high priority).** Cannas Lecture 27. One of the two named global theorems in Hamiltonian-actions (the other is Delzant). |
| **Symplectic toric manifold**: compact symplectic $2n$-manifold with effective Hamiltonian $T^n$-action; the moment polytope | — | ✗ | **Gap (high priority).** Cannas Lectures 28-29. |
| **Delzant's theorem**: compact symplectic toric manifolds are classified by Delzant polytopes | — | ✗ | **Gap (high priority).** Cannas Lecture 29. Cannas's headline theorem; the showcase example of how the moment-map framework yields a complete classification. |
| **Duistermaat-Heckman theorem**: variation of symplectic volume in reduced spaces is polynomial of degree $n$ on regular values, with the equivariant-cohomology localisation formula as corollary | — | ✗ | **Gap.** Cannas Lecture 30. |

### Topics Cannas covers as remarks / pointers (no Codex equivalence-coverage required)

| Cannas topic | Status | Note |
|---|---|---|
| KAM theorem (mentioned as motivation in §22) | — | Pointer-only in Cannas; Arnold is the primary reference. Defer to Arnold's per-book plan. |
| Floer homology (mentioned as the proof tool for Arnold conjecture, §9 / §17) | `05.08.02` floer-homology | △ | Cannas only states; depth here is McDuff-Salamon. The Codex Floer chapter exists but is McDuff-Salamon / Floer-paper-anchored, not Cannas-anchored. |
| Gromov non-squeezing (mentioned in §17 as the headline rigidity theorem) | `05.07.01` non-squeezing; `05.07.02` symplectic-capacity | △ | Cannas only states; Codex units are McDuff-Salamon-anchored. Cross-link sufficient for Cannas equivalence. |

### Aggregate coverage estimate

**Theorem layer**: ~75% of Cannas's named theorems map to Codex units at
the *topic level*; but only ~40% are at Cannas-equivalent *proof depth*.
The remaining 25% (Moser's trick, Weinstein neighbourhoods, Arnold-Liouville
proof, Atiyah-Guillemin-Sternberg, Delzant, Duistermaat-Heckman, contact
geometry block) are absent at any depth. After the priority-1 punch-list
below, the topic-level coverage rises to ~95% and the proof-depth coverage
rises to ~80%; after priority-2 to ~90% proof-depth.

**Exercise layer**: not separately audited. Cannas's "Homework" sections
(typically 4-6 problems per lecture, ~150 total) are standard symplectic
exercises (compute moment map for an action, verify Jacobi identity, work
out the integrable system on $T^*S^n$). Codex's symplectic exercise pack
is the same templated 7-question block on every unit (the "what is the
dimension if $n=4$" / "rewrite $\Phi^*\omega = \omega$" / "Cartan formula"
set repeated 21 times); the actual Cannas-style exercises are not
shipped. Defer to a dedicated symplectic-exercise-pack pass after the
priority-1+2 batch lands.

**Worked-example layer**: ~25% covered. Cannas leads each lecture with a
worked example; Codex's units share a single templated phase-plane example
across all 21 units. **The worked-example layer is the single largest
exercise/example gap in the symplectic chapter.**

**Notation layer**: ~80% aligned. Cannas writes $\omega$ for the
symplectic form, $\theta$ for the Liouville one-form, $X^\sharp$ for the
fundamental vector field of a $G$-action, $\mu$ for the moment map,
$M /\!/ G$ for symplectic reduction, $\Delta$ for the moment polytope.
Codex's units mostly match. A `notation/cannas.md` crosswalk is
optional given the mostly-aligned conventions.

**Sequencing layer**: ~85%. The Codex DAG follows Cannas's prerequisite
flow (linear → manifold → Hamiltonian VFs → moment map → reduction)
faithfully. Missing edges: Moser's trick → Darboux, Weinstein
neighbourhood → Floer setup, contact prerequisites for any future
contact unit.

**Intuition layer**: ~50%. Cannas's lecture-style intuition is
under-reproduced; the templated "phase space is paired" Beginner sections
across all 21 units don't capture Cannas's lecture-by-lecture motivation.

**Application layer**: ~70%. Cannas's applications (geodesic flow as
Hamiltonian on $T^*M$, $\mathbb{C}P^n$ as toric, the Hopf bundle as
symplectic reduction, integrable systems on Lie groups) are partially
covered via the Floer / Atiyah-Singer downstream units, but not as
dense inline applications.

---

## §3 Gap punch-list (P3-lite — units to write or deepen, priority-ordered)

The Codex symplectic chapter is mature in topic coverage. Most of the
work below is **deepening existing units to Cannas-proof-depth**, plus a
small number of genuinely new units (Moser, Weinstein neighbourhood,
contact, Delzant, Duistermaat-Heckman). The recommended slot range is
`05.09.*` for new units and `05.10.*` for the contact block, leaving the
existing `05.01.*-05.08.*` numbering stable. Where a deepening replaces
the templated proof on an existing unit, no new ID is needed.

### Priority 1 — load-bearing technique gaps and signature theorems

These items either provide infrastructure used silently elsewhere
(Moser's trick, Weinstein neighbourhood, isotopies-and-vector-fields
identity) or are Cannas's headline classification theorems (Delzant,
Atiyah-Guillemin-Sternberg). Without them the symplectic chapter cannot
honestly claim Cannas-equivalence.

1. **`05.01.05` Moser's trick (path method).** Cannas Lecture 10-11
   anchor; Moser 1965 *On the volume elements on a manifold* as
   originator-text. Three-tier; ~1800 words. The Master section gives
   the path-of-symplectic-forms statement, the cohomological
   primitivity hypothesis, and the integration of $V_t$ to get the
   isotopy. Used as a black box in items 2, 3, 7. **Highest
   priority — every other item in this punch-list builds on it.**

2. **Deepen `05.01.04` Darboux's theorem.** Replace the templated
   "Key theorem with proof" with the actual Moser-trick proof: take
   $\omega_0$ to be $\omega$ at $p$ in arbitrary coordinates, $\omega_1$
   to be the standard form $\sum dq_i \wedge dp_i$ in the chosen
   Darboux chart, the path $\omega_t = (1-t)\omega_0 + t\omega_1$ is
   symplectic on a small neighbourhood, apply Moser. Cannas Lecture 8.
   No new unit ID; rewrite of the Intermediate "Key theorem" and Master
   "Full proof" sections.

3. **`05.05.02` Weinstein Lagrangian neighbourhood theorem.** Cannas
   Lecture 12 anchor; Weinstein 1971 *Symplectic manifolds and their
   Lagrangian submanifolds* as originator-text. Three-tier; ~2000 words.
   Master section gives the proof: pick a metric, identify $T^*L$ with
   the symplectic-orthogonal complement of $TL$ in $TM|_L$, apply the
   relative Moser theorem. Load-bearing for Floer setup (`05.08.02`),
   Lagrangian Floer (any future Lagrangian-intersection unit), and
   generating-function constructions.

4. **Deepen `05.04.02` symplectic-reduction (Marsden-Weinstein-Meyer,
   regular case).** Replace the templated proof with the actual
   regular-case argument: $0$ a regular value ⇒ $\mu^{-1}(0)$ is a
   smooth submanifold; $G$-equivariance ⇒ $G$ acts on $\mu^{-1}(0)$;
   if the action is free, the quotient is smooth; the reduced form
   $\omega_{\mathrm{red}}$ on $M /\!/ G$ is uniquely characterised by
   $\pi^*\omega_{\mathrm{red}} = \iota^*\omega$. Cannas Lecture 23
   anchor; Marsden-Weinstein 1974 *Reduction of symplectic manifolds
   with symmetry* and Meyer 1973 as joint originator-citations. No new
   unit ID; rewrite of the Intermediate and Master sections.

5. **`05.04.03` Atiyah-Guillemin-Sternberg convexity.** Cannas Lecture
   27 anchor; Atiyah 1982 *Convexity and commuting Hamiltonians* and
   Guillemin-Sternberg 1982 *Convexity properties of the moment map*
   as joint originator-citations. Three-tier; ~1800 words. Statement:
   for a Hamiltonian $T^k$-action on a connected compact symplectic
   $M$, the image $\mu(M)$ is a convex polytope, equal to the convex
   hull of the images of the fixed points. Master section gives the
   proof via the Morse-theoretic argument on the components of $\mu$.

6. **`05.04.04` Symplectic toric manifold and Delzant's theorem.**
   Cannas Lectures 28-29 anchor; Delzant 1988 *Hamiltoniens
   périodiques et image convexe de l'application moment* as
   originator-text. Three-tier; ~2200 words. Statement: compact
   symplectic toric $2n$-manifolds with effective Hamiltonian
   $T^n$-action are classified up to equivariant symplectomorphism
   by Delzant polytopes. Master section sketches the symplectic-cut /
   reduction-from-$\mathbb{C}^d$ construction. **The signature global
   theorem of Cannas's book.**

7. **Deepen `05.02.04` action-angle-coordinates (Arnold-Liouville
   theorem).** Replace the templated "Liouville-Arnold local normal
   form" with the actual statement and proof: a regular compact
   connected level set of an integrable system is a Lagrangian torus;
   on a tubular neighbourhood there exist coordinates $(I, \theta)$ on
   $D \times T^n$ with $\omega = \sum dI_i \wedge d\theta_i$ and the
   Hamiltonian flows are linear on the torus. Cannas Lecture 24
   anchor; Liouville 1855 + Arnold 1963 as originator-citations.
   No new unit ID; rewrite of the Intermediate and Master sections.

### Priority 2 — Cannas-distinctive depth gaps on existing units, plus the contact block

These items either replace templated content with Cannas-anchored prose
on existing units, or introduce the contact-symplectic adjacency block
that Cannas treats as integral to the subject but Codex omits entirely.

8. **`05.05.03` Generating functions and Hamiltonian
   symplectomorphisms.** Cannas Lecture 9 anchor. Three-tier; ~1500
   words. The graph $\mathrm{gr}(\phi) \subset M^- \times M$ of a
   symplectomorphism is Lagrangian; for $\phi$ Hamiltonian and isotopic
   to identity, the graph is generated by a function $S$ on the base.
   Bridge to `05.08.01` Arnold conjecture (fixed points = critical
   points of $S$). Master section gives the cotangent-bundle case in
   full.

9. **`05.10.01` Contact manifold.** New chapter (`05.10-contact/`).
   Cannas Lectures 13-14 anchor; Cartan / Reeb originator-citations.
   Three-tier; ~1800 words. Definitions: contact form $\alpha$ on
   $M^{2n+1}$ with $\alpha \wedge (d\alpha)^n \neq 0$, contact
   structure $\xi = \ker \alpha$, Reeb vector field $R_\alpha$
   characterised by $\iota_{R_\alpha} d\alpha = 0$ and
   $\alpha(R_\alpha) = 1$. Worked example: $S^{2n+1} \subset
   \mathbb{C}^{n+1}$ with the standard contact structure as the
   kernel of $\alpha = \frac{1}{2}\sum (x_i\, dy_i - y_i\, dx_i)$.

10. **`05.10.02` Symplectisation and contactisation.** Cannas Lecture
    14 anchor. Three-tier; ~1500 words. Symplectisation
    $S(M, \alpha) = (M \times \mathbb{R}, d(e^t \alpha))$ as a functor
    from contact to symplectic. Contactisation
    $C(M, \omega) = (M \times \mathbb{R}, dt + \theta)$ for $\omega = d\theta$
    exact symplectic. Worked examples: $S(S^{2n+1}) = \mathbb{C}^{n+1}\setminus\{0\}$,
    $C(T^*X) = T^*X \times \mathbb{R}$ with the canonical contact
    structure for the jet bundle interpretation.

11. **`05.10.03` Gray's theorem (contact stability).** Cannas Lecture
    13 (in passing) + Gray 1959 originator-citation. Three-tier;
    ~1200 words. The contact analogue of Moser: a smooth path of
    contact structures on a compact $M$ is generated by a contact
    isotopy. Mirror Moser's-trick proof via the contact-form path
    method.

12. **Deepen `05.06.01` almost-complex (compatible $J$ existence and
    contractibility).** Replace the templated proof with the actual
    polar-decomposition argument: pick any Riemannian metric $g_0$ on
    $M$; $\omega$ and $g_0$ together give an automorphism $A$ of $TM$;
    polar decompose $A = J|A|$ with $J$ orthogonal and $J^2 = -I$;
    show $J$ is compatible. Contractibility of $\mathcal{J}(\omega)$
    via the Cayley-transform / convex-combination argument. Cannas
    Lecture 15. No new unit ID.

13. **Deepen `05.04.01` moment-map.** Replace the templated proof with
    the actual three-condition derivation: equivariance from
    differentiating the $G$-action, additivity from the Hamiltonian
    bracket. Add Cannas's worked examples: rotation on $S^2$,
    $T^n$-action on $\mathbb{C}^n$, coadjoint-orbit case. Cannas
    Lectures 22, 25-26. No new unit ID.

14. **Deepen `05.03.01` coadjoint-orbit.** Replace the templated proof
    with the actual KKS-form construction: $\omega_\xi(X^\sharp,
    Y^\sharp) = \xi([X, Y])$ on the orbit, prove nondegeneracy from
    the kernel of $\mathrm{ad}^*_\xi$ being the stabiliser, prove
    closedness from Jacobi. Cannas Lecture 14 (footnote in §V),
    Kirillov 1962, Kostant 1970, Souriau 1970. No new unit ID.

### Priority 3 — Cannas-distinctive optional units (depth-completing)

These items round out Cannas's headline content but are not strictly
required for FT equivalence: items 15-16 are showcase global theorems
that round out the moment-map block; item 17 is a depth-completion
on the cotangent-bundle unit; items 18-19 are Cannas-specific
pedagogical units that don't have a single named theorem but matter
for the exercise/example layer.

15. **`05.04.05` Duistermaat-Heckman theorem.** Cannas Lecture 30
    anchor; Duistermaat-Heckman 1982 *On the variation in the
    cohomology of the symplectic form of the reduced phase space* as
    originator-text. Three-tier; ~1800 words. Statement: for a
    Hamiltonian $T^k$-action with proper moment map, the pushforward
    of the Liouville measure on a regular reduced level set is
    polynomial in the moment-map value. Master section sketches the
    equivariant-cohomology localisation derivation
    (Atiyah-Bott / Berline-Vergne).

16. **`05.04.06` Symplectic blow-up and symplectic cut.** Cannas
    Lectures 28-29 (treated as construction tools for toric
    manifolds) + Lerman 1995 *Symplectic cuts* as originator-citation.
    Three-tier; ~1500 words. Symplectic blow-up replaces a point with
    a copy of $\mathbb{C}P^{n-1}$; symplectic cut is the
    reduction-by-$S^1$-action construction that yields blow-up as a
    special case. Used as the building block in the Delzant proof
    (item 6 above), so produce **alongside** item 6.

17. **`05.02.06` Cotangent bundle (deepening of `05.02.05`).**
    Replace the templated proof with the actual computation
    $\omega = -d\theta$, the naturality property
    $\alpha^*\theta = \alpha$, and the worked examples of the
    geodesic flow on $T^*M$ as a Hamiltonian system. Cannas Lecture
    2 anchor. No new unit ID; rewrite of `05.02.05`.

18. **`05.05.04` Lagrangian fibration.** Cannas Lecture 29 (as
    backbone of toric manifolds) anchor. Three-tier; ~1500 words. A
    proper map $\pi : M \to B$ whose fibres are Lagrangian. Key
    examples: $T^*X \to X$ (cotangent projection), the moment-map of
    a toric manifold $\mu : M \to \Delta$ over the interior. Bridge
    to mirror symmetry literature (SYZ conjecture). **Optional —
    the abstract concept matters but the headline theorems are in
    Gross / Hitchin downstream.**

### Priority 4 — Survey / pointer items, optional

19. **`05.10.04` Survey of contact topology and Reeb dynamics.**
    Master-only, ~900 words. Pointer to Geiges *An Introduction to
    Contact Topology*, the Weinstein conjecture, recent
    Hofer-Wysocki-Zehnder. Deferred unless Codex expands into contact
    homology.

20. **`05.06.03` Newlander-Nirenberg integrability.** Cannas Lecture
    16 mentions; the actual treatment lives in the Codex complex
    geometry chapter. Optional cross-link unit; Master-only,
    ~700 words. Could be filed as `04.05.*` instead; depends on where
    the cross-strand DAG settles.

---

## §4 Implementation sketch (P3 → P4)

**Minimum Cannas-equivalence batch** = priority 1 only (items 1-7):
3 new units (`05.01.05`, `05.05.02`, `05.04.03`, `05.04.04`) plus
4 deepenings (Darboux, reduction, action-angle, two more in priority 2
list). Realistic production estimate (mirroring earlier
Lawson-Michelsohn / Bott-Tu / Brown-Hatcher batches):

- ~3 hours per new unit (research + draft + validate at 27/27 + Lean
  stub + Bridge / Synthesis prose).
- ~1.5 hours per deepening (replace templated section with
  Cannas-anchored prose; no new frontmatter / DAG edges in most cases).
- Priority 1 totals: 4 new × 3 h + 4 deepenings × 1.5 h = ~18 hours.
- Priority 1+2 totals: 4 new + 4 contact-block new + 1 generating-fn
  new + 4 priority-1 deepenings + 3 priority-2 deepenings =
  ~36 hours of focused production. At 4-6 production agents in
  parallel, this fits in a 2-3 day window with one integration agent
  stitching outputs.

**Smaller surface than Brown / Hatcher.** The Brown punch-list shipped
~7 priority-1 units and the Hatcher punch-list shipped 10 priority-1+2
units; this Cannas plan ships **3-4 new units at priority-1** and the
balance of the work is depth deepening on already-shipped units. The
production cost is comparable but the integration-agent load is lower
because most deepenings are in-place rewrites of existing
`content/05-*/*.md` files, not new files needing CONCEPT_CATALOG and
deps.json edits.

**Originator-prose targets.** Cannas is herself a *modern lecture-note
synthesis* in the Brown / Hatcher sense — the originator citations for
the new priority-1 units are:

- **Moser's trick** (item 1): Moser 1965, *On the volume elements on a
  manifold*, Trans. AMS 120, 286-294. Cannas Lecture 11 cites Moser
  directly.
- **Weinstein Lagrangian neighbourhood** (item 3): Weinstein 1971,
  *Symplectic manifolds and their Lagrangian submanifolds*, Adv. Math.
  6, 329-346.
- **Marsden-Weinstein-Meyer reduction** (item 4 deepening):
  Marsden-Weinstein 1974 *Reduction of symplectic manifolds with
  symmetry*, Rep. Math. Phys. 5, 121-130; Meyer 1973 *Symmetries and
  integrals in mechanics* (independently).
- **Atiyah-Guillemin-Sternberg convexity** (item 5): Atiyah 1982
  *Convexity and commuting Hamiltonians*, Bull. LMS 14;
  Guillemin-Sternberg 1982 *Convexity properties of the moment
  mapping*, Invent. Math. 67. Cite both.
- **Delzant's theorem** (item 6): Delzant 1988 *Hamiltoniens
  périodiques et image convexe de l'application moment*, Bull. SMF
  116, 315-339.
- **Arnold-Liouville theorem** (item 7 deepening): Liouville 1855 (as
  the $L = \{f_i = c_i\}$ tori-foliation observation); Arnold 1963
  (action-angle coordinate theorem in *Mathematical Methods*); cite
  both.
- **Duistermaat-Heckman** (item 15): Duistermaat-Heckman 1982,
  Invent. Math. 69.
- **Symplectic cut** (item 16): Lerman 1995, Math. Res. Lett. 2.
- **Contact-form** (item 9): Sophus Lie 1872 (jet bundles); Cartan
  1899-1909 contact transformations; Reeb 1952 *Sur certaines
  propriétés topologiques des trajectoires des systèmes dynamiques*.
- **Gray's theorem** (item 11): Gray 1959 *Some global properties of
  contact structures*, Ann. Math. 69.

Each priority-1 unit's Master section should cite the originator paper
in addition to Cannas.

**Notation crosswalk.** Cannas's notation is mostly aligned with Codex
already (per §2 above). A `notation/cannas.md` file is *not* needed as a
separate artifact; the existing `tier_anchors` field on each
Cannas-anchored unit (citing `Cannas da Silva §N`) is sufficient. The
one notation choice worth pinning down is the moment-map sign convention
— Cannas uses $d\mu^X = \iota_{X^\sharp}\omega$ (matching the Codex
Hamiltonian-vector-field convention $\iota_{X_H}\omega = dH$). Record
this in the rewritten `05.04.01` Master section.

**DAG edges to add.** New prerequisites arrows for the priority-1+2
batch:

- `05.01.05` (Moser) ← {`05.01.04` Darboux, `05.05.02` Weinstein,
  `05.10.03` Gray}
- `05.01.04` (Darboux, after deepening) → still has its existing
  successors; no new arrows.
- `05.05.02` (Weinstein Lagrangian nbhd) ← {`05.08.02` Floer
  homology, any future Lagrangian Floer unit}
- `05.05.03` (generating fns) ← {`05.08.01` Arnold conjecture}
- `05.04.03` (AGS convexity) ← `05.04.04` Delzant
- `05.04.04` (Delzant) ← `05.04.06` symplectic cut (priority-3 item 16)
- `05.04.06` (sympl. cut) ← `05.04.04` Delzant (so this is a co-batch
  pair, see §6)
- `05.10.01` (contact mfd) → {`05.10.02` symplectisation,
  `05.10.03` Gray}

**Composite Cannas+Arnold batch recommendation.** The Cannas
Hamiltonian-mechanics block (Lectures 22-24, items 7 and 13 above) and
the Arnold *Mathematical Methods* per-book plan (when produced) will
share the action-angle / integrable-systems content. Defer the Arnold
audit to the same campaign window so that the Arnold-Liouville
deepening (item 7) covers both books with one rewrite.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and Homework
  problem in Cannas's 30 lectures. (Would take the full P1 audit;
  deferred unless the priority-1+2 punch-list expands.)
- The Cannas Homework / exercise pack (~150 problems across 30
  lectures). Currently the Codex symplectic exercise pack is the
  templated 7-question block on every unit. A dedicated
  `05.E1`/`05.E2` Cannas-exercise-pack family is a P3-priority follow-up
  after the priority-1+2 theorem-layer batch closes.
- McDuff-Salamon territory: the moduli space of $J$-holomorphic curves,
  Gromov compactness with bubbling, Floer homology beyond the
  setup-level, Hofer geometry, symplectic topology beyond Gromov
  non-squeezing. Cannas points to McDuff-Salamon for these and so do
  we; that book gets its own per-book plan.
- Arnold's *Mathematical Methods of Classical Mechanics*: the
  KAM-theorem part, the variational principles, the rigid-body
  examples. The Cannas/Arnold overlap in Hamiltonian mechanics
  (Lectures 22-24) is covered by the items 7, 13 deepenings;
  Arnold-only material (KAM, Hamilton-Jacobi PDE, rigid body, geodesic
  flow as a worked Hamiltonian system) is deferred to the Arnold
  per-book plan.
- Voisin / Griffiths-Harris Kähler material. Cannas's Part VI Kähler
  block is brief; Codex's `04.05.*` complex-geometry chapter is the
  primary equivalence target. Cross-link rather than duplicate.
- Equivariant cohomology beyond the Duistermaat-Heckman corollary.
  The general theory (Atiyah-Bott / Berline-Vergne localisation,
  $K$-theoretic versions) is Atiyah Yang-Mills (FT 3.20) territory,
  not Cannas's.
- Floer homology depth gap. The shipped `05.08.01-04` Floer block is
  templated (same proof template across all four units); fixing this
  is **not Cannas's job** — it's McDuff-Salamon's. Defer to the
  McDuff-Salamon audit.
- Worked-example densification across the existing 21 units. The
  templated phase-plane "Worked example [Beginner]" sections are a
  curriculum-wide v0.5-Strand-B pattern; replacing them with Cannas's
  actual lecture-opening examples ($T^*X$ canonical 1-form,
  $S^2 \subset \mathbb{R}^3$ as area-form, $\mathbb{C}P^n$ from
  reduction, etc.) is a large but optional pass. Only the priority-1
  / priority-2 unit deepenings carry mandatory worked-example
  rewrites.

---

## §6 Acceptance criteria for FT equivalence (Cannas)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 and §9, the book is
at equivalence-coverage when:

- ≥95% of Cannas's named theorems map to Codex units **at
  Cannas-equivalent proof depth** (currently ~40%; after priority-1
  this rises to ~75%; after priority-1+2 to ~92%; after priority-3
  deepenings to ~95%).
- ≥80% of Cannas's Homework problems have a Codex equivalent (currently
  ~5% — the templated 7-problem block; closing this requires the
  dedicated Cannas-exercise-pack pass per §5).
- ≥90% of Cannas's worked examples are reproduced in some Codex unit
  (currently ~25%; the priority-1+2 batch's required worked-example
  rewrites bring this to ~60%; the remainder requires the optional
  worked-example densification pass).
- The notation alignment is recorded inline in the rewritten Master
  sections (no separate `notation/cannas.md` needed).
- For every chapter dependency in Cannas (Part I → III → VII → VIII;
  V → III; II → III), there is a corresponding `prerequisites` arrow
  chain in Codex's DAG. The Moser-Weinstein-reduction-toric chain in
  particular must be unbroken after the priority-1 batch.
- Pass-W weaving connects the new units (`05.01.05`, `05.05.02`,
  `05.04.03`, `05.04.04`, `05.10.01-03`) to the existing
  `05.02-hamiltonian/`, `05.04-moment-reduction/`,
  `05.05-lagrangian/`, `05.06-almost-complex/`, and `05.08-floer/`
  units via lateral connections.

The 7 priority-1 items (items 1-7) close the load-bearing-technique and
signature-theorem gap. The 7 priority-2 items (items 8-14) close the
contact block and the Cannas-distinctive depth gaps on existing units.
The 6 priority-3+4 items (items 15-20) are depth-completion and survey
pointers; they bring proof-depth coverage from ~92% to ~95%+ but are
not strictly required for sign-off.

**Composite Cannas + Arnold batch recommendation.** Because Cannas
Lectures 22-24 (Hamiltonian mechanics) and Arnold's Hamiltonian-mechanics
Part III overlap on the Arnold-Liouville theorem and the Hamilton-Jacobi
machinery, **producing the Cannas priority-1 batch and the (yet-to-be-
written) Arnold per-book plan's priority-1 batch together yields a
Cannas+Arnold composite of ~10-12 units** that closes both books'
mechanics gaps simultaneously. This is the recommended execution path
once Arnold is audited.

**Honest scope.** Cannas's *Lectures on Symplectic Geometry* is the
smallest equivalence-gap book on the Tier-α-adjacent FT booklist:
the symplectic chapter is already 21 units and the topic-level
coverage is ~75%. The work in this plan is dominated by *depth*
rewrites, not by new-unit production. The new units are concentrated
in the contact block (`05.10.*` — entirely missing) and in the
moment-map climax (`05.04.03-06` — the Atiyah-Guillemin-Sternberg /
Delzant / Duistermaat-Heckman global theorems). Everything else is
in-place deepening of templated v0.5-Strand-B prose.
