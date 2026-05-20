# J. Peter May — *Simplicial Objects in Algebraic Topology* (Fast Track 3.40) — Audit + Gap Plan

**Book:** J. Peter May, *Simplicial Objects in Algebraic Topology*
(Van Nostrand Mathematical Studies, D. Van Nostrand, 1967; reprinted in
the Chicago Lectures in Mathematics series, University of Chicago Press,
1982 / 1992; ISBN 0-226-51181-2). 161 pp. Author-hosted PDF distributed
freely; local copy at
`reference/fasttrack-texts/03-modern-geometry/May-SimplicialObjects.pdf`
(scanned 1982 reprint, 90 PDF pages = the 161-page reprint with two
book-pages per A4 scan).

**Fast Track entry:** 3.40, inside §3 Modern Geometry, between May
*Concise Course* (3.38), May-Ponto *More Concise* (3.39), and
Goerss-Jardine *Simplicial Homotopy Theory* (3.41).

**Purpose of this plan:** P1 audit + gap punch-list. Output is a
priority-ordered list of new units to write so that *Simplicial Objects*
(SOAT hereafter) is covered to the Fast Track equivalence threshold
(≥95% of named theorems, key examples, exercise pack, notation,
sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

SOAT is *the* foundational reference for the classical (pre-model-category)
simplicial-set machinery. It is short, dense, and now over half a century
old, but every later text — Goerss-Jardine, Lurie's *HTT*, the nLab —
points back to it for the canonical statements of the Kan-complex
homotopy theory, geometric realisation, twisted cartesian products, and
the simplicial Eilenberg-MacLane construction.

---

## §1 What SOAT is for

SOAT is the **classical foundation document** for simplicial sets as a
combinatorial model of homotopy types. Where Hatcher (Fast Track 3.x) and
May *Concise* (3.38) treat simplicial complexes and singular homology as
auxiliary tools, SOAT treats the simplicial category $\Delta^*$ and its
contravariant functors *as the primary objects*: spaces are reconstructed
from simplicial sets by geometric realisation $|K| = T(K)$, and homotopy
theory is done combinatorially on Kan complexes before being transported
back to topology.

Distinctive contributions, in roughly the order SOAT develops them:

1. **The simplicial category $\Delta$ (May's $\Delta^*$) and the
   face / degeneracy presentation.** SOAT §1 gives the canonical
   "simplicial identities" presentation and the unique normal form
   $\mu = \delta_{i_1}\cdots\delta_{i_s}\sigma_{j_1}\cdots\sigma_{j_t}$
   for every monotonic map. This is the technical bedrock for the rest
   of the book.
2. **Kan complexes and the extension condition** (SOAT §2-3). May's
   §3 proves the basic combinatorial homotopy theory: $\sim$ is an
   equivalence relation on $n$-simplices of a Kan complex, simplicial
   homotopy groups $\pi_n(K, *)$ are well-defined, function complexes
   are Kan when the target is.
3. **Postnikov systems combinatorially** (SOAT §8). The Postnikov tower
   is constructed directly inside the simplicial category, without
   passing through topology. This is one of SOAT's signature moves and
   is still the cleanest exposition.
4. **Minimal complexes and minimal fibrations** (SOAT §9-10). Two
   minimal complexes that are deformation retracts of the same Kan
   complex are isomorphic; every Kan fibration retracts onto a minimal
   fibration. This is the combinatorial analogue of Postnikov
   decomposition and underpins the homotopy classification of fibrations.
5. **Geometric realisation $T: \mathbf{sSet} \to \mathbf{Top}$ and its
   adjoint $S$** (SOAT §14-16). Theorem 14.1: $T(K)$ is a CW complex
   with one $n$-cell per non-degenerate $n$-simplex. Theorem 14.3:
   $T$ preserves finite products (after passing to $k$-spaces).
   $(T, S)$ is the canonical Quillen adjunction between simplicial sets
   and topological spaces.
6. **Twisted cartesian products (TCP) and principal fibrations**
   (SOAT §17-21). May's TCP machinery is the simplicial-set analogue of
   classifying spaces for principal bundles: a TCP with structure group
   a simplicial group $G$ and base $B$ is classified by a twisting
   function $\tau: B_n \to G_{n-1}$. This is the combinatorial source
   of the Serre spectral sequence in the simplicial setting.
7. **Eilenberg-MacLane simplicial complexes $K(\pi, n)$** (SOAT §22-23).
   Constructed as the simplicial abelian group whose normalised Moore
   complex is concentrated in degree $n$ with value $\pi$. Cohomology
   operations are read off as $[K(\pi, n), K(\rho, n+q)]$ via simplicial
   homotopy classes.
8. **The Dold-Kan correspondence** (SOAT §22). The category of
   simplicial abelian groups is equivalent to the category of
   non-negatively-graded chain complexes via the normalised Moore
   complex; SOAT proves both the equivalence and the normalisation
   theorem in §22.
9. **Acyclic models and Eilenberg-Zilber theorem** (SOAT §29). The
   classical Eilenberg-Zilber chain equivalence
   $C(K \times L) \simeq C(K) \otimes C(L)$ is proved by the
   acyclic-models method on simplicial sets, which is *the* general
   technique for proving chain-level natural equivalences.

SOAT is **not** a first course in algebraic topology. It assumes singular
homology (Eilenberg-Steenrod), basic homotopy groups, CW complexes, and
spectral sequences. It is the canonical *combinatorial-foundations*
reference; the modern *homotopical* / model-category foundations live in
Goerss-Jardine (3.41) and Hovey's *Model Categories*, both of which use
SOAT as their starting point. Curtis's 1971 *Advances in Mathematics*
survey "Simplicial homotopy theory" gives a contemporaneous reader's
guide and pinpoints SOAT as the standard reference.

Peer-source corroboration:

- **Goerss-Jardine, *Simplicial Homotopy Theory* (2009).** Cites SOAT
  as the canonical source for the simplicial identities (their §I.1),
  for Kan complexes and simplicial homotopy groups (their §I.6-7),
  and for the Dold-Kan correspondence (their §III.2).
- **May, *A Concise Course in Algebraic Topology* (1999).** May's own
  later text (Fast Track 3.38) defers to SOAT for the simplicial-set
  foundations and the proof of $|S(X)| \simeq X$ (May *Concise*
  §16.5).
- **E. B. Curtis, "Simplicial homotopy theory,"
  *Advances in Mathematics* 6 (1971) 107-209.** Survey article
  contemporaneous with SOAT; identifies SOAT and Lamotke's
  *Semisimpliziale algebraische Topologie* (1968) as the two standard
  references for simplicial-set foundations. SOAT is the more
  category-theoretic and concise of the two.

---

## §2 Coverage table (Codex vs SOAT)

Cross-referenced against the current `03-modern-geometry/12-homotopy/`
chapter (24 shipped units + `03.12.22-delta--complex-semi-simplicial-set`
currently in production / live queue).
✓ = covered, △ = partial / different framing, ✗ = not covered.

| SOAT topic (chapter, section) | Codex unit(s) | Status | Note |
|---|---|---|---|
| Simplicial category $\Delta^*$, face / degeneracy operators (§1) | `03.12.22` (in queue) | △ | The queued $\Delta$-complex unit covers semi-simplicial sets; the *full* simplicial category with degeneracies is a separate gap. |
| Simplicial identities and normal form $\mu = \delta_{i_1}\cdots\sigma_{j_t}$ (§1) | — | ✗ | **Gap.** Foundational; needed before anything else. |
| Simplicial object in a category, $\mathcal{C}^s = \mathrm{Fun}(\Delta^{\mathrm{op}}, \mathcal{C})$ (§2) | — | ✗ | **Gap.** The general notion (simplicial groups, simplicial modules, etc.) is currently absent. |
| Chain complex $C(K)$ of a simplicial set (§2) | `03.12.11`, `03.12.12` | △ | Singular homology covers $C(\mathrm{Sing}(X))$; simplicial homology covers the $\Delta$-complex case. The general $C(K)$ for a simplicial set is implicit but not its own unit. |
| Kan complex / Kan extension condition (§3) | — | ✗ | **Gap (P1, high-priority).** SOAT's central object. |
| Simplicial homotopy / homotopy of simplices (§3) | — | ✗ | **Gap.** $x \sim x'$ in $K_n$, well-defined on Kan complexes. |
| Simplicial homotopy groups $\pi_n(K, *)$ (§3-5) | — | ✗ | **Gap.** Combinatorial definition independent of topology. |
| Simplicial group $G$ (§4, §17) | — | ✗ | **Gap.** Every simplicial group is a Kan complex; foundational. |
| Function complex $\mathrm{Map}(K, L)$ (§6) | — | ✗ | **Gap.** Internal hom on $\mathbf{sSet}$. |
| Kan fibration (§7) | — | ✗ | **Gap (P1).** Right lifting against horn inclusions. |
| Postnikov system, simplicial construction (§8) | — | ✗ | **Gap.** Codex has Whitehead tower (`03.12.07`) which is *dual* to Postnikov; Postnikov itself is missing. |
| Minimal complex / minimal fibration (§9-10) | — | ✗ | **Gap.** Signature SOAT construction. |
| Fibre products / fibre bundles, simplicial (§11) | — | ✗ | **Gap.** |
| Weak homotopy type (§12) | △ | △ | Implicit in Whitehead theorem unit `03.12.20`; not its own unit. |
| Hurewicz theorem, simplicial form (§13) | `03.12.19` | △ | Hurewicz is covered topologically; simplicial version is a deepening. |
| Geometric realisation $T(K) = |K|$ (§14) | — | ✗ | **Gap (P1, high-priority).** SOAT's main bridge to topology. |
| Adjoint $(T, S)$: realisation vs total singular complex (§15) | — | ✗ | **Gap (P1).** $|K| \dashv \mathrm{Sing}$ adjunction. |
| Comparison theorem: $|S(X)| \to X$ is a weak equivalence (§16) | — | ✗ | **Gap.** The theorem justifying simplicial methods. |
| Twisted cartesian product (TCP) (§17-19) | — | ✗ | **Gap (P2).** Pre-history of classifying-space machinery. |
| Eilenberg subcomplexes (§20) | — | ✗ | **Gap.** |
| Classification theorem for principal fibrations (§21) | △ | △ | `03.08.05-universal-bundle` covers $BG$ topologically and mentions the simplicial bar construction; SOAT's TCP classification is the simplicial origin and is not its own unit. |
| Eilenberg-MacLane simplicial complex $K(\pi, n)$ (§22) | △ | △ | `03.12.05` covers $K(\pi, n)$ as a *space*; SOAT's simplicial-abelian-group construction is missing. |
| Dold-Kan correspondence (§22 normalisation theorem) | — | ✗ | **Gap (P1).** Currently only mentioned in passing in `03.12.11` and `03.12.12`. |
| Cohomology operations via $K(\pi, n)$ (§23) | — | ✗ | **Gap.** |
| $k$-invariants of Postnikov systems (§24) | — | ✗ | **Gap.** |
| Loop groups (§25-26) | — | ✗ | **Gap (P3).** Simplicial Kan loop-group functor $G$, $\bar{W}$ construction. |
| Acyclic models theorem (§28) | — | ✗ | **Gap (P2).** Method, not just statement. |
| Eilenberg-Zilber theorem (§29) | △ | △ | Mentioned in `03.12.11` Synthesis; not its own unit. The chain-level shuffle / Alexander-Whitney maps are missing. |

**Aggregate coverage estimate:** ~5% of SOAT has corresponding Codex units
(only the topological $K(\pi, n)$, topological Hurewicz, and partial
mentions of Dold-Kan / Eilenberg-Zilber). This is a near-total gap.
Closing it is the largest single piece of the simplicial-methods curriculum.

The flag in the task prompt is correct: **expect a big new-unit
punch-list. No deepening-only outcome.**

---

## §3 Gap punch-list — units to write, priority-ordered

**Priority 0 — prerequisite, already in flight:**

- `03.12.22-delta--complex-semi-simplicial-set` (currently in production
  queue). Ships the semi-simplicial side (face operators only, no
  degeneracies). All SOAT P1 units below sit on top of this and on top
  of the full simplicial category $\Delta$ — so `03.12.22` either needs
  expansion to cover the *full* simplicial category, or a sibling unit
  `03.12.22b-simplicial-set` needs to be written. Recommend the latter
  to keep `03.12.22` focused.

**Priority 1 — high-leverage core simplicial machinery (5 units):**

1. **`03.12.24` Simplicial set and the simplicial category $\Delta$.**
   Definition of $\Delta$ (objects $[n]$, morphisms order-preserving maps),
   face $\delta_i$ / degeneracy $\sigma_i$ generators, simplicial
   identities, unique normal-form factorisation
   $\mu = \delta_{i_1}\cdots\delta_{i_s}\sigma_{j_1}\cdots\sigma_{j_t}$.
   Definition of simplicial set $K: \Delta^{\mathrm{op}} \to \mathbf{Set}$
   and simplicial object in a general category. Anchor: SOAT §1-2;
   Goerss-Jardine §I.1. Three-tier, ~2000 words. Foundational —
   everything else in the SOAT punch-list assumes it.
2. **`03.12.25` Kan complex and the extension condition.** Definition
   via horn-filling, examples ($\mathrm{Sing}(X)$, simplicial groups,
   nerve of a groupoid), non-examples (nerve of a non-groupoid category).
   Simplicial homotopy as an equivalence relation on Kan complexes.
   Anchor: SOAT §3; Goerss-Jardine §I.3. Three-tier, ~2000 words.
3. **`03.12.26` Simplicial homotopy groups $\pi_n(K, *)$.** Combinatorial
   definition via $\sim$ on $K_n$ relative to the basepoint. Theorem:
   for $K = \mathrm{Sing}(X)$, $\pi_n^{\mathrm{simp}}(K) \cong \pi_n(X)$.
   Long exact sequence of a Kan fibration. Anchor: SOAT §3-5, §7;
   Goerss-Jardine §I.7. Three-tier, ~1800 words.
4. **`03.12.27` Geometric realisation $|K|$ and the $|\cdot| \dashv
   \mathrm{Sing}$ adjunction.** Definition of $|K|$ as the coend
   $\int^{[n]} K_n \times \Delta^n$ (or as the quotient construction May
   uses in §14). Theorem 14.1: $|K|$ is a CW complex with one $n$-cell
   per non-degenerate $n$-simplex. Theorem 14.3: $|K \times L| \cong
   |K| \times |L|$ in compactly-generated spaces. The adjunction
   $|\cdot| \dashv \mathrm{Sing}$. Anchor: SOAT §14-16;
   Goerss-Jardine §I.2. Master tier covers the $k$-space subtlety.
   Three-tier, ~2000 words.
5. **`03.12.28` Dold-Kan correspondence.** Normalised Moore complex
   $N(A_\bullet)$, equivalence of categories $\mathbf{sAb} \simeq
   \mathbf{Ch}_{\geq 0}(\mathbf{Ab})$, normalisation theorem
   ($N(A_\bullet)$ chain-homotopy equivalent to the alternating-sum
   complex). Application: simplicial homotopy groups of a simplicial
   abelian group are the homology of its Moore complex. Anchor:
   SOAT §22; Goerss-Jardine §III.2; Weibel §8.4. Master tier required
   for the full normalisation proof. Three-tier, ~2200 words.

**Priority 2 — fibrations, classifying-space pre-history, acyclic
models (4 units):**

6. **`03.12.29` Kan fibration.** Right lifting property against horn
   inclusions $\Lambda^n_k \hookrightarrow \Delta^n$. Long exact
   sequence. Theorem (Quillen): geometric realisation of a Kan fibration
   is a Serre fibration. Anchor: SOAT §7; Goerss-Jardine §I.7.
   Intermediate + Master.
7. **`03.12.30` Minimal complex and minimal fibration.** SOAT §9-10.
   Existence of minimal subcomplex as deformation retract;
   isomorphism-up-to-isomorphism of any two minimal models. This is the
   combinatorial Postnikov-tower input. Master tier; ~1800 words.
8. **`03.12.31` Twisted cartesian product (TCP) and the simplicial
   bar construction.** SOAT §17-21. TCPs $E = F \times_\tau B$ with
   twisting function $\tau: B_n \to G_{n-1}$; classifying simplicial
   set $\bar{W}G$; classification of principal $G$-fibrations as
   homotopy classes of maps $B \to \bar{W}G$. Connect to the existing
   `03.08.05-universal-bundle` unit with a lateral arrow. Anchor:
   SOAT §17-21; Goerss-Jardine §V.3. Master tier; ~2200 words.
9. **`03.12.32` Acyclic models theorem and Eilenberg-Zilber.** SOAT §28-29.
   Statement + proof outline of the acyclic-models theorem; application
   to Eilenberg-Zilber chain equivalence
   $C(K \times L) \simeq C(K) \otimes C(L)$ via shuffle and
   Alexander-Whitney maps. Anchor: SOAT §28-29;
   Mac Lane *Homology* §VIII.6. Intermediate + Master.

**Priority 3 — Postnikov + Eilenberg-MacLane combinatorial (2 units):**

10. **`03.12.33` Postnikov tower, simplicial construction.** SOAT §8,
    §24. Postnikov approximation of a Kan complex; $k$-invariants as
    cohomology classes $[k_n] \in H^{n+1}(P_{n-1}; \pi_n)$. Defer the
    full proof of $k$-invariant naturality to the Master tier. Connect
    to existing `03.12.07-whitehead-tower` (dual construction) with a
    lateral arrow + comparison paragraph. Intermediate + Master.
11. **`03.12.34` Eilenberg-MacLane simplicial complex $K(\pi, n)$
    and cohomology operations.** SOAT §22-23. Construction as the
    simplicial abelian group whose Moore complex is $\pi[n]$ (i.e.
    $\pi$ in degree $n$, zero elsewhere). Cohomology operations as
    $[K(\pi, n), K(\rho, n+q)]$. Connect to existing
    `03.12.05-eilenberg-maclane` (the space) with a lateral arrow:
    *same homotopy type, different category*. Master tier.

**Priority 4 — loop groups, deepenings, survey (1-2 units, optional):**

12. **`03.12.35` Simplicial loop group $G$ and the $G \dashv \bar{W}$
    adjunction.** SOAT §25-26. Kan's loop-group construction; adjunction
    with the bar construction. Master-only deepening; ~1500 words.
13. **Exercise pack `03.12.E2-simplicial-objects-exercises`.** SOAT is
    sparse on exercises (it is a *Lectures* volume) but a Codex exercise
    pack should include: the simplicial-set $\Delta^n$ and its
    non-degenerate simplices; computation of $\pi_n(\Delta^n / \partial\Delta^n)$;
    verification that $\mathrm{Sing}(X)$ is Kan; explicit
    Eilenberg-Zilber shuffle for $\Delta^1 \times \Delta^1$. Roughly 15-20
    exercises across the three tiers.

**Notation crosswalk** (record in the §Notation paragraph of each new unit):

- SOAT writes $\Delta^*$ for the simplicial category and $\Delta$ for
  its opposite. **Modern convention (Goerss-Jardine, nLab, Codex):**
  $\Delta$ is the simplicial category itself; simplicial sets are
  functors $\Delta^{\mathrm{op}} \to \mathbf{Set}$. Codex adopts the
  modern convention.
- SOAT writes $T(K)$ for geometric realisation; modern $|K|$.
  Codex uses $|K|$.
- SOAT writes $S(X)$ for the total singular complex; modern
  $\mathrm{Sing}(X)$. Codex uses $\mathrm{Sing}(X)$.
- SOAT writes $\partial_i, s_i$ for face / degeneracy; some sources
  use $d_i, s_i$. Codex uses $d_i, s_i$ to match Goerss-Jardine, with
  a one-line note in `03.12.24` mentioning SOAT's $\partial_i$.
- SOAT writes $C(K)$ for the unnormalised chain complex and $\bar{C}(K)$
  or $N(K)$ for the normalised. Codex uses $C(K)$ (unnormalised) and
  $N(K)$ (normalised) following Weibel.

**Three-tier scheduling.** All P1 units require all three tiers
(Beginner intuition + Intermediate definitions + Master proofs).
P2 fibration / acyclic-models units can omit the Beginner tier
(too technical for Strogatz-level analogy) but must keep
Intermediate + Master. P3-P4 units are Master-only unless flagged
otherwise.

---

## §4 Implementation sketch (P3 → P4)

For a full SOAT coverage pass, items 1-5 (P1) are the minimum set.
Realistic production estimate (mirroring earlier Hatcher / Bott-Tu
batches):

- **P1 (5 units):** ~3.5 hours each = ~17-18 hours. The Dold-Kan
  unit and the geometric-realisation unit will both run long because
  of the technical normalisation / $k$-space proofs.
- **P2 (4 units):** ~3 hours each = ~12 hours.
- **P3 (2 units):** ~2.5 hours each = ~5 hours.
- **P4 (loop group + exercise pack):** ~4 hours combined.

**Total: ~38-40 hours for full SOAT equivalence.** Fits a 5-7 day
focused window. The Brown-Higgins-Sivera and Lawson-Michelsohn batches
were similar in size.

**Strict prerequisite:** the queued `03.12.22-delta--complex-semi-simplicial-set`
must ship first. The P1.1 unit (`03.12.24` simplicial set) builds
directly on it.

**Originator-prose targets.** Per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10, the simplicial-set
machinery has clearly identified originators that should be cited:

- **Eilenberg, S., and Zilber, J. A.** "Semi-simplicial complexes and
  singular homology," *Annals of Mathematics* 51 (1950) 499-513.
  Originating paper for semi-simplicial sets (no degeneracies). Cite
  in `03.12.22` and `03.12.24`.
- **Eilenberg, S., and Zilber, J. A.** "On products of complexes,"
  *American Journal of Mathematics* 75 (1953) 200-204. Originating
  Eilenberg-Zilber theorem. Cite in `03.12.32`.
- **Kan, D. M.** "Abstract homotopy. I-IV," *Proceedings of the
  National Academy of Sciences* 41 (1955) 1092-1096; 42 (1956)
  255-258, 419-421, 542-544. Kan's foundational sequence.
- **Kan, D. M.** "Functors involving c.s.s. complexes,"
  *Transactions of the AMS* 87 (1958) 330-346. The canonical
  reference for Kan complexes, the extension condition, simplicial
  homotopy groups, and the loop-group functor. Cite in `03.12.25`,
  `03.12.26`, `03.12.35`.
- **Kan, D. M.** "A combinatorial definition of homotopy groups,"
  *Annals of Mathematics* 67 (1958) 282-312. Originating
  combinatorial $\pi_n$ via Kan complexes. Cite in `03.12.26`.
- **Dold, A.** "Homology of symmetric products and other functors of
  complexes," *Annals of Mathematics* 68 (1958) 54-80, and
  **Kan, D. M.** "Functors involving c.s.s. complexes," 1958 (above).
  Joint origin of the Dold-Kan correspondence. Cite in `03.12.28`.
- **May, J. P.** *Simplicial Objects in Algebraic Topology*. Van
  Nostrand 1967. The book itself, definitive consolidation of the
  pre-Quillen simplicial theory. Cite in *every* unit that lands on
  this punch-list.
- **Eilenberg, S., and MacLane, S.** "On the groups $H(\Pi, n)$,
  I-III," *Annals of Mathematics* 58 (1953) 55-106; 60 (1954)
  49-139, 513-557. Originating Eilenberg-MacLane spaces and the
  simplicial-abelian-group $K(\pi, n)$ construction. Cite in
  `03.12.34`.

---

## §5 What this plan does NOT cover

- **Model-category structure on $\mathbf{sSet}$** (Quillen's model
  structure, the trivial-cofibration / fibration factorisation, the
  proof that $|\cdot|$ is a Quillen equivalence to $\mathbf{Top}$).
  **Defer to the Goerss-Jardine 3.41 plan.** SOAT predates Quillen's
  model categories (Quillen *Homotopical Algebra*, Springer LNM 43,
  1967, appeared the same year) and treats simplicial homotopy theory
  *combinatorially*, not model-categorically. The Codex should follow
  SOAT's treatment for the combinatorial foundations and defer model
  structure to the dedicated Goerss-Jardine pass.
- **Quasi-categories / $\infty$-categories** (Joyal, Lurie). Out of
  scope; pointer only in the Synthesis section of `03.12.25` (Kan
  complexes as the $(\infty, 0)$-categorical case of $\infty$-categories).
- **Simplicial presheaves / sheaves.** Out of scope; pointer in
  `03.12.31` toward Jardine's later work.
- **Cubical sets / cubical homotopy theory.** Out of scope.
  See the Brown-Higgins-Sivera 1.05a plan for cubical pointer units
  (`03.12.15` in that plan).
- **Higher simplicial / multisimplicial objects.** Out of scope.
- **Operads and $E_\infty$ structures on simplicial chain complexes.**
  Out of scope; defer to May *Geometry of Iterated Loop Spaces* (if
  it lands on a future Fast Track entry).
- **Line-number-level inventory of every theorem in SOAT.** Done at the
  section-level above; deeper granularity is a P3-after-P2 follow-up.
- **Sullivan minimal models / rational homotopy via simplicial sets.**
  Already covered topologically in `03.12.06`; the simplicial-set
  presentation is a deepening of `03.12.06` rather than a new unit.

---

## §6 Acceptance criteria for FT equivalence (SOAT)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- `03.12.22-delta--complex-semi-simplicial-set` has shipped (strict
  prereq).
- **All 5 P1 units have shipped.** This alone raises SOAT coverage from
  ~5% to ~70%.
- **At least 3 of the 4 P2 units have shipped.** Brings coverage to
  ~85%. The Kan-fibration, geometric-realisation-adjunction, and
  Dold-Kan units are the highest-leverage of P2.
- **Both P3 units have shipped or are flagged with explicit pointers
  from `03.12.05` and `03.12.07`.** Brings coverage to ~92%.
- **Notation decisions are recorded** in each unit's §Notation paragraph
  per the crosswalk in §3 above.
- **Pass-W weaving** connects the new units to the existing
  `03.12-homotopy/` chapter (especially to `03.12.05`, `03.12.07`,
  `03.12.10-cw-complex`, `03.12.11-singular-homology`,
  `03.12.12-simplicial-homology`, `03.12.19-hurewicz-theorem`).
- **Originator-prose paragraph** is present in `03.12.25`, `03.12.27`,
  `03.12.28`, `03.12.34` per the citation list in §4.
- **Exercise pack `03.12.E2`** ships (P4) — required for the
  ≥95% threshold.

The 5 P1 units close most of the equivalence gap; the 4 P2 units close
the fibration / classifying-space / acyclic-models gaps; the 2 P3 units
close the Postnikov / cohomology-operations gaps; the P4 exercise pack
plus the loop-group deepening close the residual gap to ≥95%.

---

## §7 Sourcing

- **Free.** Author-hosted PDF of the 1982 Chicago reprint; redistributed
  in various places online with May's blessing.
- **Local copy.**
  `reference/fasttrack-texts/03-modern-geometry/May-SimplicialObjects.pdf`
  — 1982 reprint scan, 90 PDF pages = 161 printed pages.
  iLovePDF-produced, scanned image-only (no embedded text layer);
  audit done by page-image rendering at 110-150 dpi. Cite as
  May, J. P., *Simplicial Objects in Algebraic Topology*, Chicago
  Lectures in Mathematics, University of Chicago Press, 1967 / reprinted
  1982 / 1992 (ISBN 0-226-51181-2).
- **UChicago note.** May has hosted a clean PDF of the reprint on his
  University of Chicago faculty page for two decades; see
  <https://www.math.uchicago.edu/~may/> (book list). The Codex local
  copy is the canonical source for this plan.
- **Comparison reading.** When producing the P1-P2 units, consult
  Goerss-Jardine *Simplicial Homotopy Theory* (3.41) for the modern
  notation and Curtis (1971) "Simplicial homotopy theory,"
  *Advances in Mathematics* 6, 107-209 for a contemporaneous
  reader's-guide framing. Lamotke's *Semisimpliziale algebraische
  Topologie* (Springer 1968) is the alternative classical reference
  and is occasionally clearer than SOAT on TCPs but harder to obtain.
