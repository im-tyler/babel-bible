# Olver — *Applications of Lie Groups to Differential Equations* (FT 1.16) — Deepening gap file

**SLUG:** `olver-lie-groups-differential-equations`
**Re-audit date:** 2026-06-02
**Verdict:** The original audit's entire 15-item punch-list has since been **produced and shipped**. After grepping the live corpus, only **1 genuine remaining gap** survives — a topic Olver develops (differential invariants and the moving-frame / Cartan equivalence method) that the first-pass audit never punch-listed and that the corpus mentions only in passing. Everything else the audit proposed (jet bundle, prolongation + symmetry criterion, group-invariant solutions, Noether-2 / Bianchi, generalised symmetries + recursion operators, Lie classification of ODEs, infinite-dim Poisson / bi-Hamiltonian / Magri, Lax pair, master symmetries, Casimirs, the Noether-1-PDE and Hamilton-Jacobi deepenings) is now COVERED with verified ids — see the trailer.

This is the **valid "essentially fully covered" outcome** the brief allows: 1 high-value gap, not a manufactured list.

---

## GENUINE GAPS (1)

### G1 — `05.05.11` Differential invariants and the moving-frame (Cartan equivalence) method

- **id:** `05.05.11` (free slot; `05.05.05`–`05.05.10` occupied, next free is `.11`)
- **title:** Differential invariants and the moving-frame method
- **chapter dir:** `content/05-symplectic/lagrangian/`
- **frontmatter section/chapter:** section `05` (symplectic), chapter `05.05` (lagrangian / jet-bundle symmetry-of-DE block)
- **spec:** For a Lie group $G$ acting on the jet bundle $J^k(X,U)$, construct its **differential invariants** — functions on $J^k$ unchanged by the prolonged action $\mathrm{pr}^{(k)}G$ — and the **invariant differentiation operators** that generate the whole differential-invariant algebra from a finite fundamental set (Lie–Tresse theorem). Develop Cartan's **moving-frame / equivalence method** in the modern Fels–Olver equivariant formulation: a (local) cross-section to the group orbits gives a moving frame $\rho:J^k\to G$, invariantisation $\iota$ sends any function to a differential invariant, and the recurrence relations between invariantised derivatives produce the structure of the invariant algebra. Master tier: signature curves and the solution of the equivalence problem for curves/surfaces under a transformation group; relation to Olver's prolongation criterion ($G$-symmetry of $\Delta=0$ iff $\Delta$ is expressible in differential invariants of $G$).
- **prereqs (verified to exist):**
  - `05.05.05` jet-bundle-and-total-derivative — supplies $J^k$, the total derivative, the contact ideal
  - `05.05.06` prolongation-of-vector-fields-and-the-infinitesimal-symmetry-criterion — supplies $\mathrm{pr}^{(k)}\mathbf v$ and the prolonged group action
  - `03.03.02` group-action — supplies the abstract $G$-action, orbits, isotropy
  - `48.05.12` reduction-structure-group — supplies the structure-group / frame language for the moving frame
- **why this is a genuine gap (evidence):** grep `differential invariant` / `moving frame` / `equivalence method` over `content/` returns only passing mentions: `05.05.10` cites Tresse's 1896 relative invariants in one history paragraph; `05.05.06` uses "moving frame" only as physical imagery for the heat-equation Galilean symmetry; `48.02.14` (Gauss-Codazzi) and `09.01.01` use "moving frame" in the unrelated orthonormal-frame sense. No unit states the Lie–Tresse generation theorem, defines invariantisation $\iota$ / the moving frame $\rho$, or solves an equivalence problem via a signature. This is Olver's *signature* contribution (Ch. 4 of the 1986 edition; the centrepiece of his follow-on *Equivalence, Invariants, and Symmetry*, Cambridge 1995, and the Fels–Olver 1998–99 *Acta Appl. Math.* papers) and is explicitly listed as a candidate in the deepening brief.
- **originator/anchor:** Lie 1884 + Tresse 1894 (differential invariants); Cartan (method of moving frames / repère mobile); Fels–Olver 1998–1999 (modern equivariant moving-frame reformulation — Olver-canonical). Joint anchor with Olver 1995.

---

## COVERED (not gaps) — due-diligence trailer

Every other audit punch-list item (and the brief's other candidates) was checked against the live corpus and found already shipped. Ids verified by `find`/`grep`.

| Audit item / brief candidate | Existing unit (id) | Evidence |
|---|---|---|
| Jet bundle $J^k$ + total derivative + contact ideal (item 1) | `05.05.05` jet-bundle-and-total-derivative | dedicated unit; Master section also covers the **variational bicomplex + Euler operator** (closes deferred item 15) |
| Prolongation formula + infinitesimal symmetry criterion (item 2) | `05.05.06` prolongation-…-symmetry-criterion | full prolongation recursion $\phi^\alpha_J=D_JQ+\xi^iu^\alpha_{J,i}$, criterion $\mathrm{pr}^{(k)}v[\Delta]=0$, **worked heat-equation 6-dim algebra** |
| Group-invariant / similarity solutions + symmetry reduction (item 3) | `05.05.07` group-invariant-solutions-and-symmetry-reduction | reduced equation, optimal systems, **KdV travelling-wave + heat Gaussian**, plus the **nonclassical (Bluman–Cole) method** |
| Noether's second theorem + Bianchi identity (item 4) | `05.05.08` noethers-second-theorem-and-the-bianchi-identity | adjoint identity; EM, GR ($\nabla_\mu G^{\mu\nu}\equiv0$), Yang–Mills worked |
| Generalised (Lie–Bäcklund) symmetries + recursion operators (item 5) | `05.05.09` generalised-symmetries-lie-backlund-and-recursion-operators | characteristic-form algebra, **KdV recursion operator**, Bäcklund/contact origin |
| Lie classification of 2nd-order ODEs + reduction of order (item 10) | `05.05.10` lies-classification-of-second-order-odes | classification table, reduction of order by a symmetry |
| Infinite-dim Poisson / Hamiltonian evolution eqns (item 6) | `05.09.08` infinite-dimensional-poisson-manifolds-and-hamiltonian-evolution-equations | $K=\mathcal D\,\delta\mathcal H/\delta u$, functional Poisson bracket, KdV as Hamiltonian |
| Bi-Hamiltonian structure + Magri pair (item 7) | `05.09.08` (same unit) | 9× "bi-Hamiltonian", 14× "Magri", recursion operator $\mathcal R=\mathcal D_2\mathcal D_1^{-1}$, compatibility |
| Lax pairs + isospectral deformation (item 8) | `05.09.09` finite-gap-integration-and-theta-function-solutions | full KdV Lax pair $L=-\partial_x^2+u$, $A=-4\partial_x^3+6u\partial_x+3u_x$; $L_t=[A,L]$ verified; bridge to inverse scattering |
| Master symmetries / Fuchssteiner construction (item 9) | `05.09.11` master-symmetries-and-the-fuchssteiner-construction | dedicated unit |
| Casimir functions of degenerate Poisson structures (item 14) | `05.09.12` casimir-functions-of-degenerate-poisson-structures | dedicated unit |
| Variational bicomplex (deferred item 15) | `05.05.05` (Master section) | Euler operator, $d_H/d_V$ bicomplex, fundamental theorem, Vinogradov $\mathcal C$-spectral sequence |
| Deepen Noether-1 to full PDE prolongation proof (item 11) | `05.00.04` noether-theorem | field-theory Noether theorem on $J^1(M,F)$, prolongation $X^{(1)}$, stress-energy worked, inverse-Noether |
| Method of characteristics for 1st-order PDE (item 12) | `05.05.04` hamilton-jacobi | dedicated subsection + exercise pairing characteristics with the Hamiltonian flow |
| `09.03.01` duplicate re-target (item 13) | `09.03.01` noethers-theorem (exists) | physicist point-particle Noether retained; PDE/generalised treatment lives in `05.05.08/09` — duplication is intentional cross-section, not a gap |
| Contact transformations / Bäcklund | `05.10.01` contact-manifold; `05.05.09` | contact 1-form on $J^1$; Lie-vs-Bäcklund higher-order tangent transformations |
| Conservation-law characteristics / inverse Noether bijection | `05.00.04`; `05.05.05` | every conservation law of a regular variational problem ↔ a (generalised) symmetry characteristic $Q$ |
| Calculus of variations / Euler–Lagrange | `03.04.08` variational-calculus; `09.02.01/02`; `05.00.01/02` | shipped |
| KdV soliton / similarity Gaussian / wave conformal worked examples | `05.05.06`, `05.05.07`, `05.09.09` | shipped as Master-tier worked computations |
| Finite-gap / KP–Sato extra integrable structure (beyond Olver) | `05.09.09`, `05.09.10` | corpus exceeds Olver's Ch. 7 scope here |

**Notes on slot divergence:** the corpus's `05.09.09`/`05.09.10` are finite-gap and KP/Sato (richer than the audit's proposed Lax/master-symmetry slots), with the audit's Lax and Magri material folded into `05.09.08`/`05.09.09` rather than getting standalone slots. Verified the content is present, so no gap — only an id-mapping difference from the original plan.

---

## Counts

- **Genuine gaps:** 1 (`05.05.11` differential invariants + moving-frame method)
- **COVERED-verified topics:** 19
