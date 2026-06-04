# May, *A Concise Course in Algebraic Topology* (FT 3.38) — Deepening-audit gap file

**Re-audit date:** 2026-06-04. **Method:** every candidate unit/topic from the
first-pass audit (`plans/fasttrack/may-concise-algebraic-topology.md` §2–§3) was
grep-verified against the live `content/` corpus before being called a gap. The
corpus has grown substantially since the first pass: the chapter-12 homotopy
strand is now split across two physical directories that share the `03.12.*` id
namespace —
`content/03-modern-geometry/12-homotopy/` (51 units) and
`content/03-differential-geometry/12-homotopy-theory/` (9 units). **Almost all of
the first-pass priority-1/priority-2 punch-list has since been written.** The
result is a near-fully-covered book: only **2 genuine gaps** remain, both
low-to-medium value.

Free `03.12.*` slots (verified across both directories): `03.12.47`, `03.12.60`.
Free `02.01.*` slots: `02.01.10`+.

---

## Genuine gaps

### GAP 1 — HELP: the Homotopy Extension and Lifting Property (the May unification)

- **proposed id:** `03.12.47` (free; verified across both chapter-12 directories)
- **title:** HELP and the unified Whitehead / cellular-approximation theorem
- **spec:** State HELP for a relative CW pair $(X,A)$ and an $n$-equivalence
  $e\colon Y\to Z$ (the single diagram-lifting statement May Ch. 10), then derive
  **both** Whitehead's theorem and the cellular-approximation theorem as one-line
  corollaries; contrast with the skeleton-by-skeleton obstruction proof currently
  used in `03.12.20`.
- **prereqs:** `03.12.10` (CW complex, where $n$-equivalence / weak equivalence is
  defined), `03.12.20` (whitehead-theorem), `03.12.01` (homotopy), `02.01.08`
  (cofibration / HEP)
- **chapter dir:** `content/03-modern-geometry/12-homotopy/`;
  frontmatter `section: modern-geometry`, `chapter: homotopy`
- **why genuine:** corpus-wide grep for `homotopy extension and lifting`,
  `\bHELP\b`, `H.E.L.P` returns **zero hits** in `content/`. The Whitehead unit
  (`03.12.20`) names May Ch. 10 as a sourcing anchor but proves Whitehead via the
  Hatcher-style inductive obstruction argument and proves cellular approximation
  separately; neither is presented as a HELP corollary. This is May's single most
  distinctive organizational move (first-pass item 1) and it is the one P1 item
  that was never written. ~1500 words, three-tier. Originator prose: J.H.C.
  Whitehead 1949 *Combinatorial homotopy I, II*; May 1999 Ch. 10 for the HELP
  synthesis.

### GAP 2 — Dold's theorem: fibre homotopy equivalence over a paracompact base

- **proposed id:** `02.01.10` (free; sits beside `02.01.07` fibration / `02.01.08`
  cofibration where May Chs. 6–7 material lives)
- **title:** Fibre homotopy equivalence and Dold's theorem
- **spec:** Fibrewise (fibre-preserving) maps and homotopies; fibre homotopy
  equivalence; **Dold's theorem** — a map of fibrations over a paracompact base
  that is a homotopy equivalence on total spaces is a fibre homotopy equivalence;
  the corollary that a fibration over a contractible base is fibre-homotopy-trivial,
  and the "change of fibre" action.
- **prereqs:** `02.01.07` (fibration, HLP, mapping path space $Nf$), `03.12.01`
  (homotopy), `03.12.20` (whitehead-theorem)
- **chapter dir:** `content/02-analysis/01-topology/`;
  frontmatter `section: analysis`, `chapter: topology`
- **why genuine:** `fibrewise homotopy equivalence` appears in the corpus **only**
  inside the K-theory $J$-homomorphism unit (`03.08.11`), where it is used in the
  specialized stable-sphere-bundle / $J$-equivalence sense (Atiyah 1961). The
  general fibration theorem of May Ch. 7 — Dold's theorem and the change-of-fibre
  machinery, including the $\pi_1(B)$ / $\Omega B$ action on the homotopy fibre —
  is **not stated as a theorem anywhere** (corpus grep for `Dold('s)? theorem`,
  `change of fib` returns no topology-side hit). First-pass §2 Ch. 6–7 row and item
  flagged "change of fiber" as an open deepening; it is a genuine standalone gap.
  Medium-low value. ~1200 words, three-tier. Originator prose: A. Dold 1963
  *Partitions of unity in the theory of fibrations* (Ann. Math. 78); May 1999 Ch. 7.

---

## COVERED (not gaps) — verified due diligence

Every other first-pass §2/§3 candidate was found already covered. Evidence (unit
id + where confirmed):

- **Simplicial sets, face/degeneracy operators, $|-|\dashv S_*$ adjunction**
  (first-pass items 2, P1) — COVERED: `03.12.24` simplicial-set-delta, `03.12.25`
  simplicial-sets-and-geometric-realization, `03.12.22` delta-complex.
- **Functorial CW approximation $\Gamma X=|S_*X|$; $\gamma\colon\Gamma X\to X$ a weak
  equivalence** (item 3, P1) — COVERED: `03.12.26` functorial-cw-approximation
  ($\Gamma=|\mathrm{Sing}(-)|$, unit a weak equivalence, Milnor's theorem).
- **Puppe cofiber sequence $X\to Y\to Cf\to\Sigma X\to\cdots$** (item 8, P2) —
  COVERED: `03.12.27` puppe-cofiber-sequence.
- **Puppe fiber sequence $\cdots\to\Omega Y\to Ff\to X\to Y$; $\Sigma\dashv\Omega$
  linkage** (item 9, P2) — COVERED: `03.12.28` puppe-fiber-sequence.
- **Thom space and Thom isomorphism $H^k(B)\cong\tilde H^{k+n}(M\xi)$** (item 10,
  P2) — COVERED: `03.12.29` thom-space-thom-isomorphism; also `03.08.03`
  thom-isomorphism-in-k-theory, `03.04.09` thom-global-angular-form.
- **Iterated bar construction $K(\pi,n)=\bar W^{\,n}(G)$** (item 7, P1 deepening) —
  COVERED: `03.12.39` simplicial-group-wbar-classifying-functor (states
  $\bar W^{\,n}(G)=K(G,n)$ and $BG=|NG|$); `03.12.05` eilenberg-maclane synthesis.
- **Van Kampen as a colimit/pushout of groupoids $\Pi(X)\cong\mathrm{colim}\,\Pi(U)$**
  (item 4, P1 deepening) — COVERED: `03.12.09` seifert-van-kampen (Brown groupoid
  pushout form, drops path-connectedness of $U\cap V$); `03.12.56`
  higher-homotopy-van-kampen.
- **Eilenberg-Steenrod axioms; cellular homology as *the* construction; uniqueness**
  (item 5, P1 deepening) — COVERED: `03.12.15` eilenberg-steenrod, `03.12.13`
  cellular-homology.
- **Homotopy excision / Blakers-Massey via excisive triads** (item 6) — COVERED:
  `03.12.21` blakers-massey; `03.12.14` excision.
- **Index (signature) of an oriented $4k$-manifold; intersection form** (item 11) —
  COVERED: `03.06.19` signature-4k-manifold-intersection-form; `03.06.11`
  hirzebruch-signature-theorem; `03.06.19` (Hodge index `04.05.09`).
- **Poincaré-Lefschetz duality (manifolds with boundary); relative fundamental
  class** (item 11) — COVERED: `03.12.16` poincare-duality (states Lefschetz
  duality and the relative fundamental class $[M,\partial M]$ explicitly).
- **$\lim^1$ and the Milnor exact sequence** (item 16) — COVERED: `03.12.45`
  arithmetic-square-integral-fracture (Milnor $\lim^1$ short exact sequence, full
  Mittag-Leffler vanishing argument); `03.13.01` spectral-sequence.
- **Fundamental theorem of algebra (degree/homotopy proof)** (item 13) — COVERED:
  `03.04.E1` mv-degree-exercises.
- **Borsuk-Ulam; antipodal degree $(-1)^{n+1}$** (item 13) — COVERED: `03.12.00`
  fundamental-group (statement + higher-degree note pointing to `03.12.01`).
- **Three Hopf bundles $S^3\to S^2$, $S^7\to S^4$, $S^{15}\to S^8$** (item 13) —
  COVERED (multiply): `03.12.07` whitehead-tower, `03.12.E1`
  rational-homotopy-exercises, `03.08.11` j-x-and-j-homomorphism, `03.08.02`
  adams-operations (Hopf-invariant-one), `03.13.E1` spectral-sequence-exercises.
- **Postnikov systems; cohomology operations / Steenrod algebra** (Ch. 22) —
  COVERED: `03.12.40` postnikov-tower-kan-complex, `03.12.05` eilenberg-maclane
  (Steenrod / $k$-invariants), `03.12.04` spectrum.
- **$n$-equivalence / weak homotopy equivalence (clean definition)** (Ch. 9 §6) —
  COVERED: `03.12.10` cw-complex (weak homotopy equivalence defined; HEP-as-
  cofibration master theorem), plus model-category framing in `03.12.31`.
- **Compactly-generated weak-Hausdorff spaces, exponential law** (Ch. 5) — COVERED:
  `02.01.09` compact-open-topology (master section).
- **Eilenberg-Zilber / acyclic models** (used in May Ch. 16 machinery) — COVERED:
  `03.12.34` acyclic-models-and-the-eilenberg-zilber-theorem.
- **Stable homotopy groups $\pi_*^s$; Freudenthal suspension** — COVERED:
  `03.12.03` suspension, `03.08.06`-strand stable homotopy.
- **K-theory, Bott periodicity, Chern character, Adams operations** (Ch. 24) —
  COVERED / out-of-scope-but-present: `03.08.*` k-theory strand (`03.08.02`
  adams-operations, `03.08.03` thom-iso-in-K, `03.08.09` worked-k-theory,
  `03.08.11` J-homomorphism) — well beyond May's sketch chapter; first-pass
  correctly deferred these and they are now written elsewhere.
- **Cobordism $\mathcal N_*$, Pontryagin-Thom** (Ch. 25) — COVERED: `03.06.12`
  unoriented-bordism-thoms-theorem, `03.06.13` oriented-bordism-pontryagin-thom.

---

## Verdict

May's *Concise Course* is now **essentially fully covered** at the FT-equivalence
theorem layer. The first-pass audit's large P1/P2 punch-list (simplicial sets,
functorial CW approximation, both Puppe sequences, Thom isomorphism, the bar
construction $K(\pi,n)$, the groupoid van Kampen, signature/Lefschetz, $\lim^1$)
has been written into the corpus since that pass. Only **2 genuine gaps** remain,
both modest: the **HELP unification** (the one truly distinctive May P1 item never
written) and **Dold's fibre-homotopy-equivalence theorem**. Neither is high-stakes;
HELP is the higher-value of the two for capturing May's pedagogical signature.
