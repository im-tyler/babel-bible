# May, *Simplicial Objects in Algebraic Topology* (3.40) — Deepening gap file

**SLUG:** `may-simplicial-objects`
**Date:** 2026-06-02

## Summary

The first-pass audit (`plans/fasttrack/may-simplicial-objects.md`, written when SOAT
coverage was ~5%) is now almost entirely superseded. Between the two homotopy
chapters — `03-modern-geometry/12-homotopy/` and `03-differential-geometry/12-homotopy-theory/`
(they share the `03.12.*` id space, no collisions) — the corpus has shipped dedicated
units for essentially every P1-P3 item the audit proposed: simplicial sets and the
category $\Delta$ with the simplicial identities and Eilenberg-Zilber normal form,
geometric realisation and the $|{-}| \dashv \mathrm{Sing}$ adjunction, Kan complexes /
Kan fibrations / the extension condition, minimal complexes and minimal fibrations,
simplicial groups with the Moore complex and the $\overline{W}$ classifying functor,
the Dold-Kan correspondence, and the simplicial Postnikov tower with $k$-invariants.

Three SOAT topics remain genuinely uncovered as stated/proved units. Each is currently
invoked across the corpus as a **black box** (cited but never constructed/proved), which
is exactly the FT-equivalence gap deepening is meant to catch.

---

## Genuine gaps (3)

### Gap 1 — Acyclic models theorem and the Eilenberg-Zilber chain equivalence

- **proposed id:** `03.12.34`  (FREE; `03-modern-geometry/12-homotopy/`)
- **title:** Acyclic models and the Eilenberg-Zilber theorem
- **spec:** State and prove the Eilenberg-MacLane acyclic-models theorem (existence and
  uniqueness up to chain homotopy of natural transformations of functors that are free
  and acyclic on models); derive the Eilenberg-Zilber chain equivalence
  $C_\bullet(K \times L) \simeq C_\bullet(K) \otimes C_\bullet(L)$ with the explicit
  Alexander-Whitney map (one homotopy inverse) and shuffle map (the other), and note the
  Künneth/cup-cap consequences.
- **prereqs:** `03.12.11` (singular-homology), `03.12.22` (delta-complex / semi-simplicial),
  `03.12.25` (simplicial-sets-and-geometric-realization), `01.02.35` (dold-kan-correspondence)
- **chapter:** dir `03-modern-geometry/12-homotopy/`; frontmatter section `modern-geometry`,
  chapter `homotopy`
- **why a gap:** the acyclic-models theorem and the EZ chain equivalence with explicit
  AW/shuffle maps are *invoked* in `03.12.17` (cap-product, "by the acyclic-models theorem
  of Eilenberg-Mac Lane, any two natural diagonal approximations… are chain-homotopic"),
  `03.12.11`, `03.12.22`, `03.04.12` (kunneth), and `01.02.35` — but no unit *states or
  proves* the acyclic-models method or the EZ theorem itself. SOAT §28-29. High leverage:
  it is the single classical theorem the diagonal-approximation, Künneth, cup/cap and
  Dold-Kan-Eilenberg-Zilber arguments all silently rely on.

### Gap 2 — Twisted cartesian products and the classification of principal fibrations

- **proposed id:** `03.12.41`  (FREE; `03-modern-geometry/12-homotopy/`)
- **title:** Twisted cartesian product and simplicial fibre bundles
- **spec:** Define a twisting function $\tau : B_n \to G_{n-1}$ for a simplicial group $G$
  and the twisted cartesian product $E = F \times_\tau B$; prove a TCP is a Kan fibration
  with fibre $F$; state the classification of principal $G$-fibrations as homotopy classes
  $B \to \overline{W}G$, identifying the universal TCP $G \times_\tau \overline{W}G = WG$.
- **prereqs:** `03.12.39` (simplicial-group-wbar-classifying-functor),
  `03.12.25` (simplicial-sets-and-geometric-realization),
  `03.08.05` (universal-bundle) — lateral comparison anchor
- **chapter:** dir `03-modern-geometry/12-homotopy/`; frontmatter section `modern-geometry`,
  chapter `homotopy`
- **why a gap:** "twisted cartesian product" / "twisting function" appears *only* as a
  passing mention in `03.12.25` (one line in the originator-prose) and nowhere else; the
  string "twisting function" returns zero unit bodies. `03.12.39` builds $\overline{W}G$
  and the universal bundle $WG \to \overline{W}G$ but does **not** develop the TCP /
  twisting-function machinery or the fibrewise classification theorem. SOAT §17-21 — the
  simplicial origin of the Serre spectral sequence and of classifying-space theory for
  principal bundles. Genuine standalone construction.

### Gap 3 — Simplicial homotopy groups and the long exact sequence of a Kan fibration

- **proposed id:** `03.12.42`  (FREE; `03-modern-geometry/12-homotopy/`)
- **title:** Simplicial homotopy groups and the Kan-fibration long exact sequence
- **spec:** Construct $\pi_n(K, *)$ combinatorially for a Kan complex via the relation
  $x \sim x'$ on $K_n$ (vertices/edges agreeing on the boundary), show $\sim$ is an
  equivalence relation and the group structure on $\pi_n$ uses horn-filling; prove the
  long exact sequence $\cdots \to \pi_n(F) \to \pi_n(E) \to \pi_n(B) \to \pi_{n-1}(F) \to \cdots$
  of a Kan fibration $E \to B$; record the comparison $\pi_n^{\mathrm{simp}}(K) \cong \pi_n(|K|)$.
- **prereqs:** `03.12.25` (simplicial-sets-and-geometric-realization),
  `03.12.33` (kan-quillen-model-structure-on-sset),
  `03.12.52` (relative-homotopy-group) — topological LES comparison
- **chapter:** dir `03-modern-geometry/12-homotopy/`; frontmatter section `modern-geometry`,
  chapter `homotopy`
- **why a gap:** the *facts* are cited as established — `03.12.25` states "the simplicial
  homotopy groups… are well-defined (Kan 1957)" and quotes the comparison theorem as
  May 16.1, and `03.12.33` lists "weak equivalences = maps inducing isomorphisms on
  simplicial homotopy groups" — but no unit *constructs* $\pi_n(K,*)$ from the $\sim$
  relation on $K_n$ or *proves* the LES of a Kan fibration. The topological LES of a pair
  lives in `03.12.52` and the topological fibration LES in `03.12.28` (Puppe), but the
  combinatorial $\pi_n$ and the simplicial fibration LES — SOAT §3-7, the book's central
  construction — are nowhere built. Slightly lower confidence than Gaps 1-2 (a fair amount
  of this material is *used* inside `03.12.25`), but the dedicated construction is genuinely
  absent and is the keystone SOAT result.

---

## COVERED (not gaps) — verified

| SOAT topic (§) | Existing unit(s) | Evidence |
|---|---|---|
| Simplicial category $\Delta$, face/degeneracy, simplicial identities, normal form (§1) | `03.12.24` simplicial-set-delta | "These satisfy the **simplicial identities**…"; full functor definition $\Delta^{op}\to\mathbf{Set}$ |
| Simplicial set / simplicial object in a category (§2) | `03.12.24`, `03.12.25`, `01.02.35` | def of $\mathbf{sSet}=\mathbf{Fun}(\Delta^{op},\mathbf{Set})$; `01.02.35` does general simplicial object in additive $\mathcal{A}$ |
| Eilenberg-Zilber **lemma** (unique non-degenerate decomposition) (§2) | `03.12.24`, `03.12.25` | "Every simplex $x$… unique $x=\alpha^*\tilde x$, $\tilde x$ non-degenerate" |
| Kan complex / extension condition (§3) | `03.12.25`, `03.12.33`, `03.12.40` | horn-filling def; $\mathrm{Sing}(X)$ is Kan (proof in `03.12.25`) |
| Simplicial homotopy ($\sim$ on $K_n$) as equivalence relation (§3) | partial: `03.12.25`, `03.12.30` | $\sim$ used in minimal-complex def; **construction of $\pi_n$ from it is Gap 3** |
| Function complex $\mathrm{Map}(K,L)$ (§6) | `03.12.35` simplicial-model-category-and-function-complex | internal hom / function-complex unit exists |
| Kan fibration, horn right-lifting (§7) | `03.12.25`, `03.12.33` | "fibrations are Kan fibrations… RLP against horn inclusions $\Lambda^n_k\hookrightarrow\Delta^n$" |
| Realisation of a Kan fibration is a Serre fibration | `03.12.33`, `03.12.25` | Quillen-equivalence statement; LES **of the fibration itself is Gap 3** |
| Postnikov system, simplicial (§8) + $k$-invariants (§24) | `03.12.40` postnikov-tower-kan-complex | $P_nX$, $\mathrm{cosk}_n$, $k_n\in H^{n+1}(P_{n-1}X;\pi_nX)$ |
| Minimal complex / minimal fibration (§9-10) | `03.12.30` minimal-complex-minimal-fibration | existence of minimal subcomplex as deformation retract; factorisation theorem; uniqueness |
| Geometric realisation $|K|=T(K)$, CW structure, product preservation (§14) | `03.12.25` simplicial-sets-and-geometric-realization | coend def, one cell per non-degenerate simplex, $|K\times L|\cong|K|\times|L|$ via shuffle |
| $(T,S)=|{-}|\dashv\mathrm{Sing}$ adjunction (§15) | `03.12.25` | adjunction is the unit's technical heart |
| Comparison $|\mathrm{Sing}(X)|\to X$ weak equivalence (§16) | `03.12.25`, `03.12.26` (functorial-cw-approximation $\Gamma X=|S_*X|$) | proof sketch citing May 16.1 |
| Simplicial group, every simplicial group is Kan (§4, §17) | `03.12.39` simplicial-group-wbar-classifying-functor | def $G:\Delta^{op}\to\mathbf{Grp}$; horn-filling via multiplication |
| Moore / normalised complex of a simplicial group (§22) | `03.12.39`, `01.02.35` | $N(G)_n=\bigcap\ker d_i$, $\pi_n(|G|)=H_n(N(G))$ |
| Classifying $\overline{W}G$, $BG$, $WG$, loop-group $G(X)$ (§21, §25-26) | `03.12.39`, `03.12.25` | $\overline{W}(G)$, $G\simeq\Omega|\overline{W}G|$, Kan loop group $G(X)$, $|N(G)|=BG$ |
| Dold-Kan correspondence + normalisation (§22) | `01.02.35` dold-kan-correspondence, `03.12.32` | full $N\dashv K$ equivalence $s\mathrm{Ab}\simeq\mathrm{Ch}_{\ge0}$, EM splitting, normalisation |
| Eilenberg-MacLane simplicial complex $K(\pi,n)$ (§22-23) | `01.02.35`, `03.12.05`, `03.12.40` | Dold-Kan: $K(\mathbb{Z},n)\leftrightarrow\mathbb{Z}[n]$; EM Kan complex as Postnikov fibre |
| Acyclic-models *invocation* / diagonal approximation | `03.12.17` cap-product | uniqueness of diagonal approx by acyclic models — but **statement+proof is Gap 1** |
| Bisimplicial sets / diagonal / realisation lemma | `03.12.36` bisimplicial-set-diagonal-realisation-lemma | used in $\overline{W}$-preserves-weak-equivalences proof |
| Weak homotopy type / Whitehead (§12), Hurewicz (§13) | `03.12.20`, `03.12.19` | topological versions; SOAT simplicial forms are deepenings, not gaps |

**Counts:** 3 genuine gaps; 19 COVERED-verified topic rows (covering ~all of the
original audit's P1-P3 punch-list).
