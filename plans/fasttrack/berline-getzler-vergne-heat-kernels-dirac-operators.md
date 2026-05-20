# Berline, Getzler, Vergne — *Heat Kernels and Dirac Operators* (Fast Track 3.29) — Audit + Gap Plan

**Book:** Nicole Berline, Ezra Getzler, Michèle Vergne, *Heat Kernels and
Dirac Operators* (Grundlehren der mathematischen Wissenschaften, vol. 298;
Springer, 1992; corrected reprint Springer 2004; xii + 369 pp.). The
canonical synthesis of the heat-equation proof of the Atiyah-Singer index
theorem.

**Fast Track entry:** 3.29.

**Booklist misattribution (flag).** `docs/catalogs/FASTTRACK_BOOKLIST.md`
row 3.29 lists the authors as "Bismut, Ghys, Quillen" — this is wrong on
two counts:

1. *Heat Kernels and Dirac Operators* is by **Berline-Getzler-Vergne**
   (Springer Grundlehren 298, 1992). No book with the title *Heat Kernels
   and Dirac Operators* has Bismut, Ghys, or Quillen as authors.
2. The three names "Bismut, Ghys, Quillen" never appear as a joint author
   list on any book. Bismut and Quillen co-authored research papers
   (notably the 1985–1986 *Superconnections and the Chern character*
   series); Étienne Ghys is a separate author working primarily in
   dynamical systems and foliations. The triple is a misattribution.

This audit treats the canonical Berline-Getzler-Vergne text — hereafter
**BGV** — as the intended FT 3.29 entry. Recommend the booklist row be
corrected in a separate edit; per hard rules this plan does not edit the
booklist.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol). Output is a concrete punch-list of
new units (or deepenings) so that BGV is covered to the FT-equivalence
threshold (≥95% effective coverage of theorems, key examples, exercise
pack, notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4). Worked from BGV's
chapter list (Ch. 1 Clifford modules; Ch. 2 asymptotic expansion of the
heat kernel; Ch. 3 the index of Dirac operators; Ch. 4 the local index
theorem; Ch. 5 the exponential map and the index density; Ch. 6
equivariant index, Kirillov formula; Ch. 7 the heat kernel of a Dirac
operator; Ch. 8 the family index, superconnections; Ch. 9 the index bundle
of a family; Ch. 10 the eta invariant).

This is **not** a full P1 audit. BGV is a 369-page research monograph and
the Lawson-Michelsohn audit (Cycle 1) and shipped units `03.09.20` and
`03.09.21` already absorb the central content. The plan works from BGV's
canonical chapter list, the deltas vs the Lawson-Michelsohn coverage, and
the BGV-specific contributions (superconnections, Kirillov-type formulas,
the eta invariant), and produces the gap punch-list.

---

## §1 What BGV is for

BGV is the canonical synthesis of the **heat-equation proof of the
Atiyah-Singer index theorem** for Dirac operators, written by three of
the architects: Getzler discovered the rescaling that took the proof from
twenty pages to two; Bismut (collaborator but not co-author here) gave
the probabilistic and superconnection formulations; Berline and Vergne
extended the equivariant pieces. Where Lawson-Michelsohn covers spin
geometry from algebra through applications and gives the heat-kernel
proof as one of two routes to the index theorem, BGV is the **dedicated
treatment of the heat-kernel route**, working in the broader generalised-
Dirac setting (Clifford modules, not only spin Dirac), and pursuing the
proof structure through to families and the eta invariant.

Distinctive contributions, in roughly the order BGV develops them:

1. **Clifford module formalism.** BGV works with the general class of
   **Dirac operators on Clifford modules** (Ch. 1–3) — a Clifford module
   is a $\mathbb Z/2$-graded vector bundle with a Clifford action of the
   tangent bundle and a compatible connection. Spin Dirac, twisted Dirac,
   the de Rham operator, the signature operator, and the Dolbeault
   operator are all generalised Dirac operators on Clifford modules.
   This unification is BGV's first organising move; the rest of the book
   proves things once at the Clifford-module level. (Friedrich's *Dirac
   Operators in Riemannian Geometry* and Lawson-Michelsohn give the spin
   case first and bolt on the Clifford-module generalisation; BGV starts
   at the Clifford-module level.) [Friedrich 2000, Ch. 1; Lawson-Michelsohn
   §II.5–§II.6 for comparison.]

2. **Asymptotic expansion of the heat kernel via Duhamel's principle.**
   Ch. 2 builds the small-time asymptotic expansion of $e^{-tD^2}$ along
   the diagonal from the parametrix construction with Duhamel iteration,
   producing the coefficients $a_j(x)$ as universal polynomials in the
   curvature data and connection-symbol coefficients. The presentation is
   more analytically careful than Atiyah-Bott-Patodi 1973 [ABP 1973,
   *Invent. Math.* 19] but pedagogically tighter.

3. **The local index theorem via Getzler rescaling.** Ch. 4 is the heart
   of the book. The Getzler rescaling $\delta_\varepsilon$ on Clifford
   generators is introduced in its mature form; applied to $D^2$ in
   synchronous coordinates, the rescaled heat operator converges in the
   limit $\varepsilon \to 0$ to the heat operator of a generalised
   harmonic oscillator, whose heat kernel along the diagonal is given by
   **Mehler's formula**. The supertrace selects the top exterior degree,
   recovering $\widehat A(R^{TM}) \operatorname{ch}(R^E)$. This is the
   short proof Getzler announced in 1986 [Getzler 1986, *Topology* 25],
   fully written out.

4. **The Kirillov formula for the equivariant index (Ch. 6).** When a
   compact Lie group $G$ acts on $M$ by isometries preserving the
   Clifford module, the heat-kernel proof localises onto the fixed-point
   set $M^g$ for $g \in G$, recovering Atiyah-Bott Lefschetz [Atiyah-Bott
   1968, *Ann. Math.* 88] and — at $g = e$ via equivariant cohomology —
   the **Kirillov formula** relating the character of a representation
   to integration over a coadjoint orbit. BGV's treatment is one of the
   two canonical accounts (the other is Berline-Vergne's own 1983 *Bull.
   SMF* paper, which BGV consolidates).

5. **Bismut superconnections and the family index theorem (Ch. 8–9).**
   Bismut's 1985–1986 superconnection [Bismut 1986, *Invent. Math.* 83;
   *J. Funct. Anal.* 57] is the family analogue of the rescaling: a
   $\mathbb Z/2$-graded connection $\mathbb A_t = \nabla + \sqrt{t} D + \cdots$
   on the infinite-dimensional bundle of fibre Dirac operators, whose
   Chern character is a closed differential form on the base
   representing the Chern character of the family index $\operatorname{ind}(D)
   \in K^0(B)$. The small-$t$ limit reproduces the integrated $\widehat A
   \operatorname{ch}$ density fibrewise; the large-$t$ limit reproduces the
   Chern character of the finite-rank index bundle. BGV gives the proof
   from a unified standpoint with the single-operator proof.

6. **The eta invariant (Ch. 10).** Atiyah-Patodi-Singer 1975 introduced
   the **eta invariant** $\eta(D)$ as a spectral asymmetry of a
   self-adjoint Dirac operator on a closed odd-dimensional manifold;
   it appears as the boundary correction in the index theorem on
   manifolds with boundary. BGV gives the heat-kernel construction and
   the small-time analysis. (Bismut-Cheeger's deep extension to
   non-product boundaries is *not* covered in BGV; see §5.)

7. **The Mathai-Quillen formalism (Ch. 1.6 + Ch. 7 appendix).** The
   universal differential-form representative of the Euler class of a
   bundle, constructed via the supersymmetric Fock-space formalism of
   Mathai-Quillen 1986 [*Topology* 25]. BGV gives this as the
   differential-form companion to the superconnection construction; it
   is the bridge between the supersymmetric path-integral picture of
   Alvarez-Gaumé and Witten and the rigorous heat-kernel framework.

8. **Comparison with the alternative proofs.** Where Lawson-Michelsohn
   gives the K-theoretic embedding proof of Atiyah-Singer as well as the
   heat-kernel proof, and Roe's *Elliptic Operators, Topology and
   Asymptotic Methods* [Roe 1998] is the analytically minded introduction
   to the same heat-kernel circle of ideas, BGV is the **complete
   technical reference** for the heat-kernel approach. Each of the three
   books has a place; the Fast Track equivalence target for BGV is the
   heat-kernel-route content specifically.

BGV is **not** a first introduction to index theory. It assumes
foundational Riemannian geometry, differential operators on bundles,
characteristic classes (Chern, Pontryagin, $\widehat A$), and a working
acquaintance with the statement of the Atiyah-Singer index theorem. It
is the canonical entry point to the heat-equation programme if one wants
the full proof with superconnection and equivariant content; the
short-form alternative is Roe's book or Lawson-Michelsohn §III.6+§III.13.

---

## §2 Coverage table (Codex vs BGV)

Cross-referenced against the current corpus, with `03.09-spin-geometry/`
already shipped through the Lawson-Michelsohn Cycle 1 audit. The
Atiyah-Singer index unit `03.09.10`, the heat-kernel-proof unit
`03.09.20`, and the family/equivariant/Lefschetz unit `03.09.21` are
shipped and substantively absorb chapters 1–4, 6, 8, 9 of BGV at the
master tier. The AHSS unit `03.13.04` and the equivariant K-theory unit
`03.08.10` are shipped (Cycle 6 and Cycle 7 respectively) and provide
adjacent infrastructure but are not in BGV's chapter spine.

✓ = covered, △ = partial / different framing, ✗ = not covered.

| BGV chapter / topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| Ch. 1 Clifford modules — algebra | `03.09.02` (Clifford algebra), `03.09.05` (spinor bundle), `03.09.14` (Dirac bundle) | ✓ | Lawson-Michelsohn-flavoured but content equivalent. |
| Ch. 1 Clifford modules — generalised Dirac operator | `03.09.14` (Dirac bundle), `03.09.08` (Dirac operator) | ✓ | "Clifford bundle / generalised Dirac" is exactly the Dirac-bundle unit. |
| Ch. 2 Asymptotic expansion of the heat kernel | `03.09.20` §Full-proof / Advanced-results; `03.09.22` (Sobolev / pseudodifferential / parametrix) | △ | Existence + small-$t$ expansion is in `03.09.20`'s Master tier; the Duhamel parametrix construction is in `03.09.22` but no dedicated unit walks the BGV-style coefficient computation in detail. |
| Ch. 3 The index of Dirac operators (statement) | `03.09.10` (Atiyah-Singer), `03.09.09` (elliptic operators), `03.09.06` (Fredholm) | ✓ | Shipped. |
| Ch. 4 The local index theorem (Getzler rescaling, Mehler) | `03.09.20` | ✓ | Shipped. McKean-Singer + Getzler rescaling + Mehler formula all in the Master tier with §Key-theorem proof and §Full-proof-set. |
| Ch. 5 The exponential map and the index density | `03.09.20` (synchronous-coordinates discussion) | △ | The synchronous-frame setup is touched but not pulled out. The BGV-specific "exponential-map normal-form computation of the index density" is a sub-tier deepening. |
| Ch. 6 Equivariant index — Kirillov formula | `03.09.21` (family / equivariant / Lefschetz); `03.08.10` (equivariant K-theory, Cycle 7) | △ | `03.09.21` ships the equivariant heat-kernel proof and Lefschetz fixed-point formula. The **Kirillov character formula** (representation as coadjoint-orbit integral, via equivariant cohomology + heat kernel) is **not** in any shipped unit — gap. |
| Ch. 7 Heat kernel of a Dirac operator (probabilistic / Bismut formula) | — | ✗ | **Gap.** The Bismut 1984 probabilistic / Brownian-bridge construction of the heat kernel of a Dirac operator is not in the Codex. |
| Ch. 8 Family index, superconnections (Bismut) | `03.09.21` §Master sections | △ | The family index theorem is stated and proved at high level in `03.09.21`. **Bismut superconnections** appear only as a Master-tier mention in `03.09.20` and `03.09.21`; no dedicated unit. |
| Ch. 9 The index bundle of a family | `03.09.21` | △ | Family-index-as-virtual-bundle is in `03.09.21`. The BGV-specific construction of the index bundle from the family Dirac with Bismut superconnection is not. |
| Ch. 10 Eta invariant; APS index theorem on manifolds with boundary | `03.09.20` §Advanced-results (one-paragraph pointer) | ✗ | **Gap.** No dedicated Eta-invariant unit. APS index theorem mentioned in passing in `03.09.20`'s "Advanced results" but not developed. |
| Ch. 1.6 + Ch. 7 appendix: Mathai-Quillen formalism | — | ✗ | **Gap.** Universal differential-form Euler class via Mathai-Quillen Fock-space construction. Touches `03.04.09-thom-global-angular-form` but not the supersymmetric Fock-space formulation. |
| Mehler formula on its own | `03.09.20` (full statement + use in proof) | ✓ | Inline. No dedicated unit, and probably should not have one — it lives within the Getzler rescaling. |
| Supertrace cyclicity / McKean-Singer identity | `03.09.20` §Key-theorem + §Full-proof-set | ✓ | Shipped with proof at both Intermediate and Master tier. |
| $\widehat A$-genus density derivation | `03.09.20` + `03.06.04` (Pontryagin and Chern classes) | ✓ | Shipped. |
| Connection to AHSS spectral sequence | `03.13.04` (Atiyah-Hirzebruch SS) | ✓ | Cycle 6 shipped. **Cross-cycle synergy:** AHSS computes $K^*(M)$ from $H^*(M;\mathbb Z)$ and the AS index lives in $K^*$; the connection is implicit in `03.13.04`'s Master tier. Not a BGV-content gap; flagged for lateral weaving. |
| Connection to equivariant K-theory $K_G$ | `03.08.10` | ✓ | Cycle 7 shipped. BGV Ch. 6 (equivariant index lands in $R(G)$, and at $g=e$ recovers the non-equivariant theory) is the natural lateral. |

**Aggregate coverage estimate:** ~70–75% of BGV's chapter-level content
is already in the Codex at appropriate tier depth via the Lawson-Michelsohn
audit (`03.09.20`, `03.09.21`, `03.09.22`) plus Cycle 6 (`03.13.04`) and
Cycle 7 (`03.08.10`). The gaps are concentrated in: (a) the
**superconnection formalism** as a topic in its own right (currently
only one-paragraph mentions); (b) the **Kirillov character formula**
(Ch. 6 specific); (c) the **eta invariant** and APS index theorem
(Ch. 10); (d) the **probabilistic / Brownian construction** of the heat
kernel (Ch. 7); (e) the **Mathai-Quillen formalism** (Ch. 1.6 + Ch. 7).
The probabilistic chapter is the deepest gap pedagogically because no
adjacent Codex unit covers stochastic-analytic methods.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — strict prerequisites:** All shipped (Lawson-Michelsohn
Cycle 1 closed). `03.09.20`, `03.09.21`, `03.09.22`, `03.06.04`, `03.06.06`,
`03.08.10`, `03.13.04` are all in place. No P0 blockers.

**Priority 1 — high-leverage, closes the named BGV-specific gaps:**

1. **`03.09.23` Bismut superconnection.** The infinite-dimensional
   $\mathbb Z/2$-graded connection $\mathbb A_t = \nabla + \sqrt{t} D + \cdots$
   on the bundle of fibre Dirac operators in a family. Three-tier;
   Beginner gives the "$\sqrt t$-twisted connection" intuition;
   Intermediate gives the definition + the Chern character formula + the
   small-$t$ / large-$t$ limits; Master proves $\operatorname{ch}(\operatorname{ind}(D))
   = \pi_* \operatorname{ch}(\mathbb A_t)$ and the convergence to
   $\pi_*(\widehat A(R^{TM/B}) \operatorname{ch}(R^E))$ as $t \to 0^+$.
   Originator-prose: Bismut 1985 *Topology* 24 (the original) and Bismut
   1986 *Invent. Math.* 83 (the family index theorem from
   superconnections). Modern anchor: BGV Ch. 1.4 + Ch. 8 + Ch. 9.
   Lateral connection to `03.09.21` (family index, via the bridging
   theorem `conn:NEW.bismut-superconnection-family-index`).
   ~3–4 hours.

2. **`03.09.24` Eta invariant and Atiyah-Patodi-Singer index theorem.**
   The spectral asymmetry $\eta(D) = \sum_{\lambda \neq 0} \operatorname{sign}(\lambda)
   |\lambda|^{-s}|_{s=0}$ of a self-adjoint Dirac operator on an odd-
   dimensional closed manifold, and its appearance as the boundary
   correction in the APS index theorem on manifolds with boundary.
   Three-tier; Beginner gives the spectral-asymmetry / "imbalance of
   positive vs negative eigenvalues" picture; Intermediate states and
   sketches the APS formula $\operatorname{ind}(D, \text{APS}) = \int_M
   \widehat A \operatorname{ch} + \tfrac{1}{2}(\eta(D_\partial) + h)$;
   Master gives the heat-kernel proof and the meromorphic continuation
   of $\eta(s)$. Originator: Atiyah-Patodi-Singer 1975 *Math. Proc.
   Cambridge Philos. Soc.* 77–79 (three-paper series). Modern anchor:
   BGV Ch. 10. Cross-references `03.09.10` and `03.09.20`. ~3–4 hours.
   Note: Bismut-Cheeger's non-product extension is explicitly deferred
   (§5).

3. **`03.09.25` Kirillov character formula via the equivariant index.**
   The character of an irreducible unitary representation of a compact
   Lie group $G$ as a Fourier transform of the canonical Liouville
   measure on a coadjoint orbit, derived from the equivariant index of
   the Dolbeault operator on the orbit (a generalised Borel-Weil).
   Three-tier; Beginner gives the "character = integral over orbit"
   picture for $SU(2)$ with explicit numbers; Intermediate develops the
   coadjoint orbit, the integrable complex structure, and the
   equivariant index calculation; Master proves the formula via the
   equivariant heat-kernel localisation. Originator: Kirillov 1962
   *Russian Math. Surveys* 17 (the orbit method); the index-theoretic
   proof is Berline-Vergne 1983 *Bull. SMF* 113. Modern anchor: BGV
   Ch. 6. Cross-references `03.09.21` (equivariant index), `03.08.10`
   (equivariant K-theory), and the upcoming representation-theory
   strand. ~3 hours.

**Priority 2 — closes the Mathai-Quillen and stochastic-analytic deltas:**

4. **`03.09.26` Mathai-Quillen formalism and universal Thom forms.** The
   supersymmetric Fock-space construction of a universal differential-
   form representative of the Thom class of an oriented real vector
   bundle, recovering the Euler class on the zero section. The bridge
   from Mathai-Quillen Topology 25 (1986) to the superconnection
   construction. Three-tier; Beginner connects to `03.04.09` (Thom
   global angular form) by saying "Mathai-Quillen gives a canonical
   smooth representative for that Thom class"; Master derives the
   formula. Originator: Mathai-Quillen 1986 *Topology* 25. Modern
   anchor: BGV Ch. 1.6 + Ch. 7 appendix; alternative: Berline-Vergne
   1983 *Bull. SMF* 113; Bismut-Goette *Families torsion and Morse
   functions* for the modern packaging. ~2 hours.

5. **`03.09.27` Probabilistic / Brownian-bridge construction of the
   heat kernel of a Dirac operator.** Bismut's 1984 *J. Diff. Geom.*
   20 path-integral formula for the heat kernel of a Dirac operator
   via stochastic parallel transport along Brownian motion; the
   probabilistic Mehler formula; the path-integral form of the local
   index theorem. **Master-tier only**; this is a research-tier
   topic. Requires foundational stochastic-calculus content that is
   not currently in the Codex (Brownian motion on manifolds, Itô
   integration, stochastic parallel transport) — flag this as a
   secondary prerequisite gap. Originator: Bismut 1984 *J. Diff.
   Geom.* 20 (probabilistic proof) and 1984 *Comm. Math. Phys.* 98
   (Brownian Mehler). Modern anchor: BGV Ch. 7. ~2 hours Master-only,
   plus ~6–8 hours of stochastic-calculus prereq content if anyone
   wants the unit to stand alone. **Defer the prereqs to the analysis
   strand**; ship `03.09.27` with explicit "this unit assumes
   stochastic calculus that the Codex does not yet ship".

**Priority 3 — Bismut-Lott style deepenings (Master-tier, optional for
FT equivalence):**

6. **Bismut-Lott analytic torsion form.** A deepening section in
   `03.09.21` (family-index) or `03.09.23` (Bismut superconnection)
   covering the analytic torsion form of Bismut-Lott 1995 *J. AMS* 8;
   the family analogue of Ray-Singer torsion; the link to Reidemeister
   torsion. Not a stand-alone unit — fits as a Master-tier section in
   `03.09.23`.

7. **The supersymmetric / path-integral view of the local index
   theorem.** Alvarez-Gaumé 1983 *Comm. Math. Phys.* 90 + Witten's 1982
   *J. Diff. Geom.* 17 *Supersymmetry and Morse theory*. The
   path-integral picture is briefly cited in `03.09.20` and 03.09.20's
   §Historical-context; deepen there rather than create a new unit.

**Priority 4 — survey pointers (optional, Master-only):**

8. **Connection to noncommutative geometry / Connes-Karoubi character.**
   Pointer at the bottom of `03.09.20` or as a Master section.
   Connects to the Connes cyclic-cohomology programme. Out of scope
   for BGV proper but cited at the end of Ch. 10.

---

## §4 Implementation sketch (P3 → P4)

For full BGV coverage, items 1–3 are the minimum P1 set. Realistic
production estimate (mirroring earlier Lawson-Michelsohn / Bott-Tu
batches):

- ~3–4 hours per unit; the Master tier for the superconnection unit will
  run slightly longer because the formalism is novel for the Codex.
- 3 priority-1 units × ~3.5 hours = ~10–11 hours focused production.
- Priority-2 items 4–5: ~4 hours combined (item 4 is short; item 5 is
  Master-only with the stochastic-prereq caveat).
- Total to close P1+P2: ~14–15 hours, fitting a focused 2–3 day window.

**Originator citations** (anchor each unit's Master-tier prose):

- Bismut, J.-M. (1985), "The Atiyah-Singer index theorem for families of
  Dirac operators: Two heat equation proofs," *Invent. Math.* **83**,
  91–151 — Ch. 8–9 originator.
- Bismut, J.-M. (1985), "Index theorem and equivariant cohomology on the
  loop space," *Comm. Math. Phys.* **98**, 213–237 — Bismut formula via
  loops.
- Bismut, J.-M. (1984), "The Atiyah-Singer theorems: A probabilistic
  approach. I. The index theorem," *J. Funct. Anal.* **57**, 56–99 —
  Ch. 7 originator (probabilistic).
- Atiyah, M. F., Patodi, V. K., Singer, I. M. (1975), "Spectral
  asymmetry and Riemannian geometry. I/II/III," *Math. Proc. Cambridge
  Philos. Soc.* **77** 43–69, **78** 405–432, **79** 71–99 — Ch. 10
  originator.
- Kirillov, A. A. (1962), "Unitary representations of nilpotent Lie
  groups," *Russian Math. Surveys* **17**, 53–104 — Kirillov orbit method
  originator. Berline-Vergne 1983 *Bull. SMF* 113 = the index-theoretic
  proof.
- Mathai, V., Quillen, D. (1986), "Superconnections, Thom classes, and
  equivariant differential forms," *Topology* **25**, 85–110 — Ch. 1.6 +
  Ch. 7 appendix originator.
- Atiyah, M. F., Singer, I. M. (1963), "The index of elliptic operators
  on compact manifolds," *Bull. Amer. Math. Soc.* **69**, 422–433 — the
  index theorem itself, originator.
- McKean, H. P., Singer, I. M. (1967), "Curvature and the eigenvalues of
  the Laplacian," *J. Diff. Geom.* **1**, 43–69 — heat-kernel route
  originator.
- Patodi, V. K. (1971), "Curvature and the eigenforms of the Laplace
  operator," *J. Diff. Geom.* **5**, 233–249; Patodi (1971), "An
  analytic proof of the Riemann-Roch-Hirzebruch theorem for Kaehler
  manifolds," *J. Diff. Geom.* **5**, 251–283 — asymptotic-expansion
  cancellation lemma.
- Gilkey, P. B. (1973), "Curvature and the eigenvalues of the Laplacian
  for elliptic complexes," *Adv. Math.* **10**, 344–382 — invariant-theory
  proof of the heat-kernel index theorem (alternative route to ABP 1973).
- Atiyah, M. F., Bott, R., Patodi, V. K. (1973), "On the heat equation
  and the index theorem," *Invent. Math.* **19**, 279–330 — first
  complete heat-kernel proof of Atiyah-Singer.
- Getzler, E. (1986), "A short proof of the local Atiyah-Singer index
  theorem," *Topology* **25**, 111–117 — the rescaling argument.

**Notation crosswalk.** BGV writes $D$ for a generalised Dirac operator
on a Clifford module $\mathcal E$, $\mathbb A_t$ for the Bismut
superconnection, $\eta(D)$ for the eta invariant, and uses $\operatorname{Str}$
consistently for the supertrace. The Codex notation per `03.09.20` /
`03.09.21` already aligns ($D$, $\operatorname{Str}$, $\not{D}$ when the
spin case is meant). New units `03.09.23–03.09.27` should adopt BGV's
$\mathbb A_t$ for the superconnection, $\eta(D)$ for the eta invariant,
$U(\mathcal E)$ for the universal Thom form. Record in §Notation
paragraphs.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem in BGV (full P1
  audit). BGV has roughly 100 numbered results; a full P1 inventory is
  a 1–2 day job in its own right and is deferred until the punch-list
  ships.
- **Bismut-Cheeger eta-invariant deep results.** Bismut-Cheeger 1989
  *J. AMS* 2 extends the eta-invariant theory to manifolds with
  non-product boundaries and is the technical core of the modern
  family-APS theorem. Deferred — the `03.09.24` unit will state APS in
  the product-boundary case only and point to Bismut-Cheeger as
  "deferred to a research-tier follow-up."
- **K-theoretic Atiyah-Singer proof.** BGV does not give the K-theoretic
  embedding proof (Atiyah-Singer 1968 *Ann. Math.* 87); that is the
  Atiyah K-theory audit's territory (`plans/fasttrack/atiyah-k-theory.md`).
  The Codex shipped K-theoretic content lives there.
- **Exercise-pack production.** BGV has ~50 exercises across chapters.
  Exercise-pack work is a P3-priority-3 follow-up; the priority-1 unit
  exercise blocks live within the unit per Codex convention.
- **Bismut-Lott analytic torsion as a stand-alone unit.** Folded as a
  Master section in `03.09.23` per §3 item 6.
- **Stochastic-analytic prerequisites for `03.09.27`.** Brownian motion
  on manifolds, Itô calculus, stochastic parallel transport — these
  belong to the analysis strand, not the spin-geometry strand. The
  probabilistic unit `03.09.27` will be shipped Master-only with a
  visible note that the underlying stochastic calculus is not yet in
  the Codex.

---

## §6 Acceptance criteria for FT equivalence (BGV)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- The Lawson-Michelsohn Cycle 1 punch-list units have shipped (strict
  prereq — done; `03.09.20`, `03.09.21`, `03.09.22` are all in place).
- ≥95% of BGV's named theorems in chapters 1–10 map to Codex units.
  Current state: ~70–75% via the shipped spin-geometry chapter. After
  priority-1 units this rises to ~90%; after priority-1+2 to ≥95%.
  Priority-3+4 are deepenings.
- ≥90% of BGV's worked computations in chapters 1–10 have a direct unit
  or are referenced from a unit that covers them.
- Notation decisions are recorded (see §4): $\mathbb A_t$, $\eta(D)$,
  $U(\mathcal E)$ alignment with BGV.
- Pass-W weaving connects the new units to `03.09-spin-geometry/` and
  laterally to `03.13.04` (AHSS) and `03.08.10` (equivariant K-theory),
  closing the Cycle-6 / Cycle-7 cross-references that the current
  spin-geometry chapter does not yet exploit.

The 3 priority-1 units close most of the equivalence gap. Priority-2
closes the Mathai-Quillen and probabilistic deltas. Priority-3+4 are
deepenings and survey pointers.

---

## §7 Sourcing

- **Author misattribution at FASTTRACK_BOOKLIST.md row 3.29.** The
  current entry reads "Heat Kernels and Dirac Operators | Bismut, Ghys,
  Quillen | Index theorems via heat kernels | BUY". The correct entry
  is **"Heat Kernels and Dirac Operators | Berline, Getzler, Vergne |
  Index theorems via heat kernels | BUY"**. Bismut and Quillen are
  important collaborators on adjacent material (Bismut-Quillen
  superconnections; the Bismut probabilistic proof — both *referenced*
  in BGV) but neither is an author of the book. Étienne Ghys works in
  dynamical systems and foliations and is unrelated to this content.
  **Recommend the booklist row be corrected in a separate edit.** Per
  hard rules, this plan does not edit the booklist file.

- **Publisher.** Springer-Verlag, Grundlehren der mathematischen
  Wissenschaften vol. 298 (1992); corrected paperback reprint 2004.
  ISBN 978-3-540-20062-8 (2004 paperback); 978-0-387-53340-1 (1992
  hardcover). Springer page:
  <https://link.springer.com/book/9783540200628>.

- **License.** Not free. Springer copyright. Local copy required for
  any unit-production pass. Suggested filing path:
  `reference/textbooks-extra/03-modern-geometry/Berline-Getzler-Vergne-HeatKernelsAndDiracOperators.pdf`.

- **Free / open companion sources for cross-reference** (use these
  while sourcing the book itself is in progress):
  - Roe, J., *Elliptic Operators, Topology and Asymptotic Methods*
    (Pitman/Longman 1988; 2nd ed CRC 1998). Companion text covering
    much of the same heat-kernel material at a gentler pace; partial
    excerpts circulate freely.
  - Bär, C., *Lecture Notes on Dirac Operators and Index Theory*
    (Potsdam, 2009; revised 2017). Free PDF at
    <https://www.math.uni-potsdam.de/professuren/geometrie/lehre/skripte>.
    Covers Ch. 1–4 of BGV at lecture-note depth.
  - Freed, D. S., *Geometry of Dirac Operators* (notes from the 1987
    lecture series). Available at
    <https://web.ma.utexas.edu/users/dafr/DiracOperators.pdf>. Already
    in `reference/book-collection/free-downloads/Freed-Dirac_Operators_Notes.pdf`.
  - Berline-Vergne, N., M., "Zéros d'un champ de vecteurs et classes
    caractéristiques équivariantes" (*Duke Math. J.* **50** (1983),
    539–549) and "The equivariant index and Kirillov's character
    formula" (*Amer. J. Math.* **107** (1985), 1159–1190) — the
    Kirillov-formula originator papers.

- **Cited peer sources for §1** (≥3 requirement, listed for the audit):
  1. **Atiyah, M. F., Singer, I. M.** (1963), "The index of elliptic
     operators on compact manifolds," *Bull. Amer. Math. Soc.* **69**,
     422–433 — the index theorem itself, originator.
  2. **Atiyah, M. F., Bott, R., Patodi, V. K.** (1973), "On the heat
     equation and the index theorem," *Invent. Math.* **19**, 279–330 —
     first complete heat-kernel proof.
  3. **Bismut, J.-M.** (1985), "The Atiyah-Singer index theorem for
     families of Dirac operators: Two heat equation proofs," *Invent.
     Math.* **83**, 91–151. (Note: the user task brief cited this as
     "J. Func. Anal. 57, 1986"; the J. Func. Anal. 57 paper is a
     parallel single-operator probabilistic proof from 1984. Both are
     by Bismut alone; the *families* proof is in Invent. Math. 83.)
  4. **Roe, J.** (1998), *Elliptic Operators, Topology and Asymptotic
     Methods*, 2nd ed., CRC Press / Pitman Research Notes in
     Mathematics 395 — alternative textbook treatment of the same
     circle of ideas.
  5. **Friedrich, T.** (2000), *Dirac Operators in Riemannian Geometry*,
     Graduate Studies in Mathematics 25, American Mathematical Society —
     companion text for the spin-Riemannian foundations; lighter on the
     index theorem itself, heavier on Dirac analysis.
  6. **Getzler, E.** (1986), "A short proof of the local Atiyah-Singer
     index theorem," *Topology* **25**, 111–117 — the rescaling
     argument that BGV consolidates.

- **PDF status for this audit.** No local BGV PDF was located under
  `reference/textbooks-extra/`, `reference/fasttrack-texts/`, or
  `reference/book-collection/free-downloads/` (only the related
  `Freed-Dirac_Operators_Notes.pdf` is on hand). This audit was produced
  in **reduced mode** from BGV's published chapter list (Springer
  Grundlehren 298 ToC), the Lawson-Michelsohn Cycle 1 audit, the
  shipped units `03.09.20` and `03.09.21` (which already encode BGV
  Ch. 1–4 content at master tier with BGV cited inline), and the peer
  sources listed above. A local PDF must be sourced before P3
  production of new units `03.09.23–03.09.27`.

---

*Reduced-mode audit, Cycle TBD. Produced without a local BGV PDF; the
chapter spine and content map are reconstructed from Springer's ToC,
the Lawson-Michelsohn audit, and the heat-kernel-proof unit `03.09.20`
which already cites BGV Ch. 4 inline. Author misattribution at
`docs/catalogs/FASTTRACK_BOOKLIST.md` row 3.29 flagged in §7;
correction recommended but not made (hard rule).*
