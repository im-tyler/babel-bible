# Voisin, *Hodge Theory and Complex Algebraic Geometry I* (FT 3.27) — Deepening pass (Phase 2)

**SLUG:** `voisin-hodge-theory-volume-1`
**Verdict: ESSENTIALLY FULLY COVERED. 0 genuine gaps.**

The first-pass audit (`plans/fasttrack/voisin-hodge-theory-volume-1.md`, REDUCED
mode, written 2026-05-18 before the corpus grew) proposed a ~17-item punch-list
(priorities 0–4). Re-verified against the live corpus: **every priority-0,
priority-1, priority-2, and priority-3 unit it proposed has since shipped** —
mostly in the new `04-algebraic-geometry/09-hodge/` chapter and the
`03-differential-geometry/02-manifolds/` + `05-fibre-bundles/` complex/Kähler
prereq layer. The first-pass "~25–35% covered" estimate is obsolete; effective
coverage of the VHCAG-I Kähler package is now **≥95%**. The audit's own framing
("treat 'to write' as INFLATED") is correct: nothing genuine remains.

No new units proposed. Manufacturing marginal units here would duplicate shipped
material. The only VHCAG-I-adjacent material still absent is explicitly **Vol II
scope** (mixed Hodge structures as a standalone unit, period domains as
standalone, full VHS over a general base) which the first-pass audit §5 already
defers to a future Vol II audit (FT 3.27b) — out of scope for this Vol I pass.

---

## COVERED (not gaps) — due-diligence evidence

Each first-pass punch-list item, with the existing unit that covers it (verified
by reading frontmatter + bodies, not just filename match).

### Priority-0 prerequisite chain (was "shared with KN-II audit")
- Almost-complex structure (proposed `03.02.09`) — **COVERED** `03.02.09-almost-complex-structure.md`.
- Complex manifold + Dolbeault complex (proposed `03.02.10`) — **COVERED** `03.02.10-complex-manifold-dolbeault.md` (states Dolbeault's theorem / Dolbeault isomorphism).
- Holomorphic vector bundle (proposed `03.05.19`) — **COVERED** `03.05.19-holomorphic-vector-bundle.md`.
- Hermitian metric + Chern connection (proposed `03.05.20`) — **COVERED** `03.05.20-hermitian-metric-chern-connection.md`.
- Hermitian manifold + Kähler form (proposed `03.02.11`) — **COVERED** `03.02.11-hermitian-kahler-form.md`.
- Kähler identities + Kähler Hodge decomposition (proposed `03.02.12`) — **COVERED** `03.02.12-kahler-identities-hodge-decomposition.md` (full proof of the identities $[\Lambda,\bar\partial]=-i\partial^*$ etc., the Laplacian proportionality $\Delta_d = 2\Delta_{\bar\partial}=2\Delta_\partial$, the $(p,q)$ Hodge decomposition, and Hodge symmetry $H^{p,q}=\overline{H^{q,p}}$).

### Priority-1 Kähler-package core
- **PDE foundation / real Hodge theorem on a compact Riemannian manifold** (proposed `04.09.03`) — **COVERED** `03.04.15-hodge-laplacian-on-a-riemannian-manifold.md`: states the Hodge theorem (compact boundaryless), the orthogonal $L^2$ decomposition, $\Delta$ elliptic + self-adjoint + finite-dimensional kernel, via Gårding/elliptic regularity. This is exactly the proposed Ch. 5 content.
- **Kähler identities + Hodge decomposition proof** (proposed `04.09.04`) — **COVERED** `03.02.12-kahler-identities-hodge-decomposition.md` (see above). The statement-level version also lives in `04.09.01-hodge-decomposition.md`.
- **$\partial\bar\partial$-lemma** (proposed `04.09.05`) — **COVERED** `04.09.05-ddbar-lemma.md`.
- **Lefschetz operator $L$, adjoint $\Lambda$, $\mathfrak{sl}_2$-triple, primitive cohomology, Lefschetz decomposition** (proposed `04.09.06`) — **COVERED** inside `04.09.07-hard-lefschetz-theorem.md`: defines $L$, $\Lambda$, the triple $(L,\Lambda,H)$ with $[L,\Lambda]=H$, primitive cohomology $P^\ell=\ker L^{n-\ell+1}$, the bidegree refinement $P^{p,q}$, and the Lefschetz decomposition $H^k=\bigoplus_r L^r P^{k-2r}$. A standalone `04.09.06` would be redundant.
- **Hard Lefschetz theorem** (proposed `04.09.07`) — **COVERED** `04.09.07-hard-lefschetz-theorem.md`.
- **Hodge-Riemann bilinear relations** (proposed `04.09.08`) — **COVERED** `04.09.08-hodge-riemann-bilinear-relations.md` (HR1 orthogonality + HR2 positivity, plus the abstract polarised-Hodge-structure distillation).

### Priority-2 Part III applications
- **Lefschetz $(1,1)$-theorem** (proposed `04.09.09`) — **COVERED** `04.09.09-lefschetz-1-1-theorem.md`.
- **Akizuki-Nakano vanishing** + **Bochner-Kodaira-Nakano identity** (proposed `04.09.10`) — **COVERED** `04.09.10-akizuki-nakano-vanishing.md` (states & proves the BKN identity in Step 2, plus the vector-bundle Nakano-1955 version; open-domain analogue in `06.10.04-dbar-equation-hormander-l2-estimates.md`).
- **Kodaira embedding theorem** (proposed `04.09.11`) — **COVERED** `04.09.11-kodaira-embedding-theorem.md`.
- **Kodaira vanishing** (already-shipped in first pass) — **COVERED** `04.09.02-kodaira-vanishing.md`.

### Priority-3 Hodge-structure formalism
- **Hodge structure of weight $k$ + polarised Hodge structure (abstract)** (proposed `04.09.12`) — **COVERED** `04.09.08-hodge-riemann-bilinear-relations.md`: gives the full abstract definition $V_{\mathbb C}=\bigoplus_{p+q=k}V^{p,q}$ with $\overline{V^{p,q}}=V^{q,p}$, the filtration form $V^{p,q}=F^p\cap\overline{F^q}$, the polarisation $Q$ satisfying HR1/HR2, and notes that polarised Hodge structures form a category and are the local models for VHS. A standalone `04.09.12` would duplicate this.

### Other VHCAG-I theorems the brief flagged for cross-check
- **Hodge decomposition (statement, diamond, examples)** — **COVERED** `04.09.01-hodge-decomposition.md`.
- **Hodge index theorem** — **COVERED** `04.05.09-hodge-index-theorem.md`.
- **Dolbeault isomorphism** — **COVERED** `03.02.10-complex-manifold-dolbeault.md` (Dolbeault's theorem) + survey `06.04.07-sheaf-cohomology-survey.md`; the curve case `06.04.03/05`.
- **Sheaf cohomology + Leray spectral sequence** — **COVERED** `04.03.01-sheaf-cohomology.md`, `04.03.15-sheaf-cohomology-leray-spectral-sequence-general-form.md`, `03.13.02-leray-serre.md`.
- **Lefschetz hyperplane theorem** — **COVERED** `03.02.25-lefschetz-hyperplane-theorem-via-morse.md`.
- **Chern classes via curvature / Chern-Weil** — **COVERED** `03.06.04-pontryagin-chern-classes.md`, `03.06.06-chern-weil-homomorphism.md`.
- **Newlander-Nirenberg integrability** — **COVERED** `05.06.03-newlander-nirenberg.md` (+ `03.02.09`).
- **Hodge decomposition on a compact Riemann surface / Riemann bilinear relations / $\bar\partial$ Hilbert-space PDE (curve case)** — **COVERED** `06.04.03-hodge-decomposition-curves.md`, `06.06.07-riemann-bilinear.md`, `06.04.05-dbar-hilbert-pde.md`.
- **Variation of Hodge structure / Gauss-Manin / period mapping / Griffiths transversality (curve & general base)** — **COVERED** `06.08.01-gauss-manin.md`, `06.08.02-vhs-jacobian.md`, `06.08.03-moduli-of-riemann-surfaces.md`.
- **Mixed Hodge structures (Deligne)** — definitional treatment present in `06.04.03-hodge-decomposition-curves.md` (weight filtration $W_\bullet$ + Hodge filtration, pure graded pieces), with Saito mixed Hodge modules in `04.03.19-perverse-sheaves-perv-x.md` and limit MHS in `06.08.01-gauss-manin.md`. **Vol II scope per first-pass audit §5 — not a Vol I gap.**

---

## Note for the maintainer
The shipped `04.09.*` chapter renumbered relative to the first-pass proposal:
the first pass's `04.09.03/04/06/12` were never created as separate ids because
their content landed in `03.04.15`, `03.02.12`, `04.09.07`, and `04.09.08`
respectively. Slots `04.09.03`, `04.09.04`, `04.09.06`, `04.09.12` are free but
should NOT be filled — the material is covered elsewhere. The five
first-pass `TODO_REF` blocks (in `04.09.01`, `04.09.02`, `04.05.09`,
`06.04.03`, `06.04.05`) are a copyedit/reference-resolution task, not a
coverage gap.

**Genuine gaps: 0. COVERED-verified topics: 27.**
