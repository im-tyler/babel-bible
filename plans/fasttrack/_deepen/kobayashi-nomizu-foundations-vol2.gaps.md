# Kobayashi-Nomizu, *Foundations of Differential Geometry Vol. II* (FT 3.19) — Deepening pass (Phase 2)

**Verdict:** The original audit's "~25-30% covered" estimate is badly stale.
Since it was written the corpus grew to ~1432 units and **almost the entire
KN-II punch-list has shipped**, often under the exact ids the audit proposed.
The complex / almost-complex / Kähler layer (Ch. IX), the submanifold /
Gauss-Codazzi layer (Ch. VIII), the Chern-Weil / Chern-Simons layer (Ch. XII),
the homogeneous- and symmetric-space layer (Ch. X), the de Rham holonomy
decomposition, Jacobi fields / variations of geodesics, G-structures, and
Gauss-Bonnet-Chern are all now covered. The whole priority-1, priority-2, and
most of priority-3 of the original §3 punch-list correspond to live units.

What remains is a single genuine, well-defined gap: the **Nomizu theory of
$G$-invariant affine connections on a reductive homogeneous space** (KN-II
§X.2-§X.4, Nomizu 1954) — the bijection between invariant connections and
$\mathrm{Ad}(H)$-equivariant Nomizu maps, and the **canonical connection** with
$\nabla R = \nabla T = 0$ (completeness, parallel curvature and torsion). This
is the load-bearing KN-II §X construction; the corpus covers the reductive
decomposition and symmetric spaces but never the invariant-connection bijection
itself. One gap below.

---

## Genuine gaps (1)

### Gap 1 — Invariant affine connections on a reductive homogeneous space; the canonical connection (Nomizu)
- **id:** `48.03.07` (free slot — `48.03.04/05/06` occupied by formal-group-law / p-adic / Lie-third; `48.03.07/08/09` open before the groupoid run at `.10`)
- **title:** "Invariant affine connections on a reductive homogeneous space and the canonical connection"
- **spec:** For a reductive homogeneous space $M = G/H$ with $\mathrm{Ad}(H)$-invariant splitting $\mathfrak{g} = \mathfrak{h} \oplus \mathfrak{m}$, the Nomizu correspondence: $G$-invariant affine connections on $M$ are in bijection with $\mathrm{Ad}(H)$-equivariant bilinear maps (Nomizu maps) $\Lambda : \mathfrak{m} \times \mathfrak{m} \to \mathfrak{m}$. The **canonical connection** $\Lambda \equiv 0$: its geodesics through $eH$ are the orbits $t \mapsto \exp(tX)\cdot eH$ for $X \in \mathfrak{m}$, it is complete, and it has **parallel curvature and torsion** $\nabla R = 0$, $\nabla T = 0$ with $T(X,Y) = -[X,Y]_{\mathfrak{m}}$ and $R(X,Y) = -\mathrm{ad}([X,Y]_{\mathfrak{h}})|_{\mathfrak{m}}$ at the base point. The **natural torsion-free connection** ($\Lambda(X,Y) = \tfrac12[X,Y]_{\mathfrak{m}}$). Specialisation to a symmetric space: there the canonical connection is torsion-free and equals the Levi-Civita connection of any invariant metric, recovering $R(X,Y) = -\mathrm{ad}([X,Y])$ and $\nabla R = 0$.
- **why a gap:** `grep -rliE "nomizu map|canonical connection|invariant affine connection|naturally reductive"` returns only `48.05.20` (Chern connection, unrelated), `06.08.01` (Gauss-Manin), and `48.02.37` (uses "naturally reductive" only as a label for an example class). `48.02.37` builds the reductive decomposition $\mathfrak{g} = \mathfrak{h}\oplus\mathfrak{m}$, the isotropy representation, and invariant *metrics* with their Levi-Civita curvature, but never the Nomizu **connection** bijection or the canonical connection. `07.04.07` derives $R(X,Y) = -\mathrm{ad}([X,Y])$ and $\nabla R = 0$ for *symmetric* spaces via the geodesic symmetry, but only in the symmetric case, not the general reductive-homogeneous canonical-connection theory KN-II §X is the canonical reference for. This is the one substantive KN-II §X topic with no anchor.
- **prereqs:** `48.02.37` (reductive decomposition $\mathfrak{g}=\mathfrak{h}\oplus\mathfrak{m}$, $\mathrm{Ad}(H)$-invariance, isotropy representation), `48.05.13` (associated bundle and induced connection), `48.05.15` (linear connection, frame bundle, torsion / soldering form), `07.04.07` (Riemannian symmetric space — the specialisation), `13.02.02` (geodesics, parallel transport)
- **chapter:** dir `content/03-differential-geometry/03-lie-groups/`; frontmatter `section: differential-geometry`, `chapter: lie-groups`
- **anchor:** KN-II §X.2-§X.4 (invariant connections, the canonical connection on a reductive homogeneous space); Nomizu, "Invariant affine connections on homogeneous spaces," *Amer. J. Math.* 76 (1954) 33-65; Helgason Ch. IV.

---

## COVERED (not gaps) — verified against the live corpus

| KN-II topic (from §2/§3 of original audit) | Existing unit(s) | Evidence |
|---|---|---|
| **Ch. VIII** Isometric immersion, second fundamental form $\mathrm{II}$, mean curvature, totally geodesic / minimal / umbilical | `48.02.13` | Dedicated unit "Isometric immersion and the second fundamental form" — exact proposed id. |
| **Ch. VIII** Gauss, Codazzi(-Mainardi), Ricci equations | `48.02.14` | Dedicated unit "Gauss-Codazzi-Ricci equations" — exact proposed id. |
| **Ch. IX** Almost-complex structure $J$, $J^2=-\mathrm{id}$, type decomposition $T^{1,0}\oplus T^{0,1}$, Nijenhuis tensor (manifold-level) | `48.02.09` | Dedicated manifold-level unit — exact proposed id (the symplectic `05.06.01` was the narrow framing; lift shipped). |
| **Ch. IX** Complex manifold, Dolbeault complex $(\Omega^{p,*},\bar\partial)$, $H^{p,q}_{\bar\partial}$ | `48.02.10` | Dedicated unit "Complex manifold and the Dolbeault complex" — exact proposed id. |
| **Ch. IX** Newlander-Nirenberg integrability theorem | `05.06.03` | Shipped; integrability via $N_J\equiv0$. |
| **Ch. IX** Complex vector bundle | `03.05.08` | Shipped. |
| **Ch. IX** Holomorphic vector bundle (transition functions, $\bar\partial_E$, Koszul-Malgrange) | `48.05.19` | Dedicated unit "Holomorphic vector bundle" — exact proposed id. |
| **Ch. IX** Hermitian metric on a complex bundle; Chern connection $\nabla^h = \partial + h^{-1}\partial h$ | `48.05.20` | Dedicated unit "Hermitian metric and the Chern connection" — exact proposed id. |
| **Ch. IX** Hermitian metric on a manifold, Kähler form $\omega=g(J\cdot,\cdot)$, Kähler condition $d\omega=0$, $d\omega=0\Leftrightarrow\nabla J=0$ | `48.02.11` | Dedicated unit "Hermitian and Kähler form" — exact proposed id; Ricci form $\rho=-i\partial\bar\partial\log\det g$, $[\rho]=2\pi c_1$. |
| **Ch. IX** Kähler identities, $\Delta_d=2\Delta_{\bar\partial}$, Hodge decomposition on compact Kähler $H^k=\bigoplus H^{p,q}$ | `48.02.12`, `04.09.01` | Dedicated unit "Kähler identities and Hodge decomposition" — exact proposed id; algebraic-geometric Hodge decomposition in `04.09.01`. |
| **Ch. IX** $\partial\bar\partial$-lemma | `04.09.05` | Dedicated "ddbar lemma" unit. |
| **Ch. IX** Hard Lefschetz $L^k:H^{n-k}\xrightarrow{\sim}H^{n+k}$ | `04.09.07` | Dedicated "hard Lefschetz theorem" unit; bilinear relations `04.09.08`. |
| **Ch. IX** Kodaira vanishing | `04.09.02` (+ `04.09.10` Akizuki-Nakano, `04.09.11` Kodaira embedding) | Shipped. |
| **Ch. X** Homogeneous space $G/H$, reductive decomposition $\mathfrak{g}=\mathfrak{h}\oplus\mathfrak{m}$, $\mathrm{Ad}(H)$-invariance, isotropy representation | `48.02.37`, `05.03.03` | Reductive decomposition built explicitly with isotropy representation; classification of homogeneous symplectic spaces. (The invariant-*connection* bijection on top of this is **Gap 1**.) |
| **Ch. X** Symmetric space, Lie-triple condition $[\mathfrak{m},\mathfrak{m}]\subseteq\mathfrak{h}$, geodesic symmetry, $R=-\mathrm{ad}([X,Y])$, $\nabla R=0$ | `07.04.06`, `07.04.07` | Orthogonal symmetric Lie algebra; Riemannian symmetric space with geodesic-symmetry $\Leftrightarrow$ OSLA correspondence and $\nabla R=0$ proof. |
| **Ch. X** Cartan classification of irreducible Riemannian symmetric spaces | `07.04.13` (+ `07.04.14` Hermitian symmetric) | Classification tables. |
| **Ch. XI** Bochner technique, Weitzenböck vanishing theorems (harmonic forms / Killing fields under positive Ricci) | `48.02.15` | Dedicated unit "Bochner technique" — exact proposed id; Weitzenböck + positive-Ricci vanishing for harmonic 1-forms. |
| **Ch. XI** Isometry group is a Lie group; holomorphic / automorphism transformation groups | `48.02.08`, `06.10.13` | Myers-Steenrod (isometry group is a Lie group); automorphism groups of bounded domains (Fefferman). |
| **Ch. XI** Killing fields | `48.02.07` | Dedicated unit. |
| **Ch. XII** Invariant polynomial $f\in I^*(\mathfrak{g})$ | `03.06.05` | Shipped. |
| **Ch. XII** Chern-Weil homomorphism $I^*(\mathfrak{g})\to H^*_{\mathrm{dR}}(M)$; independence of connection | `03.06.06` | Shipped; master anchor "Kobayashi-Nomizu Vol. II Ch. XII"; independence-of-connection via transgression form proved. |
| **Ch. XII** Chern classes via curvature $c_i=[\det(I+\tfrac{i}{2\pi}\Omega)]$, Pontryagin classes, Euler class via Pfaffian | `03.06.04`, `03.06.06`, `03.04.09` | Pontryagin/Chern unit; curvature formula in `03.06.06`; Pfaffian-of-curvature Euler form in `03.04.09` (Thom-de-Rham-Chern-Weil equivalence). |
| **Ch. XII** Chern-Simons / transgression form, $\mathrm{CS}(\omega)=\mathrm{tr}(\omega d\omega+\tfrac23\omega^3)$ | `03.06.07` | Dedicated unit "Chern-Simons and transgression" — proposed id `03.06.07` shipped. |
| **Ch. XII** Compatibility of Chern-Weil (real, de Rham) and topological/Milnor-Stasheff (integral) Chern classes | `03.06.06` | "Theorem (unification)" with proof: Chern-Weil real class = classifying-map pullback of universal $c_k$ after $H^*(M;\mathbb{Z})\to H^*(M;\mathbb{R})$; integrality from classifying space. (Proposed `03.06.18` is **not** needed; that id is now chern-character.) |
| **Ch. XII** Todd, $\hat{A}$, $L$ classes via multiplicative sequences | `03.06.15` (+ `03.06.18` chern character) | Multiplicative sequences $L$/$\hat{A}$/Todd genera. |
| Gauss-Bonnet-Chern $\chi(M)=\int_M e(TM)$ (generalized Gauss-Bonnet via Pfaffian) | `03.04.09`, `03.05.10`, `03.12.23`, `03.09.10` | Pfaffian-of-curvature Euler form integrates to $\chi$; Chern 1944 cited in `03.12.23`; Gauss-Bonnet-Chern as Atiyah-Singer specialisation in `03.09.10`. |
| Variations of geodesics, Jacobi fields, conjugate points, Morse index, second variation of arc length | `48.02.19`, `48.02.35`, `48.02.39` | Jacobi-fields / Morse-index unit; Synge second variation; Cartan-Ambrose-Hicks. |
| Holonomy group, Ambrose-Singer, de Rham decomposition / splitting theorem, Berger classification | `48.05.16`, `48.05.17`, `48.05.18`, `03.09.18` | de Rham splitting theorem stated explicitly in `48.05.16`; Ambrose-Singer `48.05.17`; Berger holonomy `48.05.18`/`03.09.18`. |
| Equivalence problem / G-structures (reduction of the frame bundle) | `48.05.12`, `05.05.11`, `48.02.39` | G-structures as frame-bundle reductions ($O(n)$, $U(n)$, ...) in `48.05.12`; moving-frame / differential invariants `05.05.11`; Cartan-Ambrose-Hicks local-isometry `48.02.39`. |
| Torsion tensor, Cartan structural equations; Levi-Civita / Hopf-Rinow (priority-0 prerequisites) | `48.05.14`, `48.02.27`, `48.02.32`, `13.02.02` | Torsion-Cartan-structural-equations unit; Levi-Civita / exponential map; Riemannian Hopf-Rinow; geodesics / parallel transport. |
| Associated bundle and induced connection (priority-0 prerequisite) | `48.05.13` | Shipped. |

**Counts:** 1 genuine gap; 30 COVERED-verified topic rows (covering the entire
priority-1, priority-2, and most of priority-3 of the original §3 punch-list,
including all the exact proposed unit ids `48.02.09-15`, `48.05.19-20`,
`03.06.07`).
