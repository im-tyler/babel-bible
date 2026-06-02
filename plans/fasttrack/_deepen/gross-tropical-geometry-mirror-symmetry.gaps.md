# Gross, *Tropical Geometry and Mirror Symmetry* (FT 3.33) — deepening gap file

**SLUG:** `gross-tropical-geometry-mirror-symmetry`
**Re-audited against the live corpus 2026-06-02.**

## Situation

The first-pass audit (`plans/fasttrack/gross-tropical-geometry-mirror-symmetry.md`)
estimated **~0% coverage** ("the gap is total") because it predated the
`04-algebraic-geometry/12-tropical/` chapter. That chapter now exists with
**14 units (04.12.01–04.12.13, 04.12.15)** and ships essentially the entire
priority-1/2/3 punch-list: the tropical semiring, tropical curves with the
balancing condition, Kapranov's theorem, Newton polytopes/amoebas, Mikhalkin's
correspondence, Nishinou-Siebert, toric degenerations, the dual intersection
complex/tropical manifold, the Gross-Siebert reconstruction theorem, SYZ, slab
functions **with a full scattering-diagram/wall-crossing formalism**, theta
functions, and the period/mirror-map pointer. Batyrev mirror duality is a full
unit at **04.11.16** (theorem + proof + Batyrev-Borisov + Kreuzer-Skarke), and
**tropical Riemann-Roch / Baker-Norine is fully covered inside 04.12.02**.

The book is therefore **largely covered**. What remains genuinely absent are
three structural foundations TGMS leans on but the corpus never gives a home of
its own: **log geometry (Kato)**, the **A-model/Gromov-Witten apparatus**, and a
**survey statement of the mirror conjecture proper**. These are real, high-value
gaps — every one is presupposed by units that already exist (04.12.07–09,
04.12.13, 04.12.15) but defined nowhere.

---

## Genuine gaps (4)

### Gap 1 — Log structures (Kato) and log smooth morphisms
- **id:** `04.12.14`
- **title:** Log structures and log smooth morphisms (Kato)
- **spec:** The Fontaine-Illusie/Kato log structure $\alpha:\mathcal{M}\to\mathcal{O}_X$ on a scheme; charts and fine saturated (fs) log structures; the log smooth morphism as the log-toric analogue of smoothness; the log Calabi-Yau / normal-crossings central fibre as the standard example. Statement-level (Master sketch of Kato's smoothness criterion).
- **prereqs:** `04.12.07` (toric degeneration of a Calabi-Yau), `04.08.02` (canonical sheaf), `04.11.04` (fan and $X_\Sigma$)
- **chapter dir:** `content/04-algebraic-geometry/12-tropical/`
- **frontmatter:** section "Algebraic Geometry", chapter "Tropical Geometry and Mirror Symmetry"
- **why a gap:** No dedicated unit defines a log structure anywhere in the corpus. "Log smooth", "log Calabi-Yau", and the Kato apparatus are invoked inside 04.12.07, 04.12.08, 04.12.09, and 04.12.15 (the log-GW pointer) but never constructed. TGMS Lecture 3 is unreadable without this; it is the single hard prerequisite the original audit flagged (P0a `04.12.00` + P3 `04.12.14`) that never got written. Folded into one unit (definition + log-smooth + log-CY example) rather than the audit's two marginal units.

### Gap 2 — Moduli of stable maps and Gromov-Witten invariants
- **id:** `04.10.35`
- **title:** Moduli of stable maps and Gromov-Witten invariants
- **spec:** Kontsevich stable maps; the moduli stack $\overline{\mathcal{M}}_{g,n}(X,\beta)$; the virtual fundamental class; genus-0 Gromov-Witten invariants $\langle\gamma_1,\dots,\gamma_n\rangle_{0,\beta}$ as integrals against it; the genus-0 three-point invariants and quantum cohomology product. Worked example: lines on the quintic / $\langle\mathrm{pt},\mathrm{pt},\mathrm{pt}\rangle$ on $\mathbb{P}^2$.
- **prereqs:** `04.10.22` (stable curve / Deligne-Mumford stability), `04.10.26` (forgetful and gluing morphisms on $\overline{\mathcal{M}}_{g,n}$), `04.05.10` (Hirzebruch-Riemann-Roch, general dimension)
- **chapter dir:** `content/04-algebraic-geometry/10-moduli/`
- **frontmatter:** section "Algebraic Geometry", chapter "Moduli Spaces"
- **why a gap:** The moduli chapter has stable curves, moduli of curves, forgetful/gluing morphisms, Hurwitz numbers, and ELSV — but no stable-maps space and no Gromov-Witten invariant definition. The existing **04.12.15 (log Gromov-Witten, pointer)** explicitly presupposes ordinary GW theory it never gets to lean on, and Mikhalkin's correspondence (04.12.05) and the A-model side of mirror symmetry both reduce to GW counts. This is the A-model foundation TGMS Lecture 2 surveys; it is absent corpus-wide.

### Gap 3 — A-model/B-model and the mirror symmetry conjecture (survey)
- **id:** `04.12.16`
- **title:** A-model, B-model, and the mirror symmetry conjecture
- **spec:** The physicists' mirror conjecture as the anchor for the whole chapter: the A-model (symplectic/Gromov-Witten side, quantum cohomology) and B-model (complex/period side, variation of Hodge structure) of a Calabi-Yau, the conjectural equivalence under the mirror map, and the Candelas-de la Ossa-Green-Parkes quintic prediction (genus-0 instanton numbers from a Picard-Fuchs period computation). Survey/pointer unit framing the targets of Lectures 2 and 7.
- **prereqs:** `04.10.35` (Gromov-Witten invariants — gap 2), `04.12.13` (period integral and the mirror map), `04.09.01` (Hodge decomposition)
- **chapter dir:** `content/04-algebraic-geometry/12-tropical/`
- **frontmatter:** section "Algebraic Geometry", chapter "Tropical Geometry and Mirror Symmetry"
- **why a gap:** The corpus has the period/mirror-map pointer (04.12.13) and the SYZ geometric reformulation (04.12.10) but no unit that states the original mirror conjecture or runs the quintic computation that motivates everything. The original audit flagged this ("mirror symmetry conjecture, physicists' form — survey-level pointer unit needed before any TGMS unit"); it remains unwritten. Distinct from SYZ (04.12.10, which is the *geometric reinterpretation*) and from the period pointer (04.12.13, which is *one side's machinery*).

### Gap 4 — Special Lagrangian fibrations and focus-focus singularities
- **id:** `04.12.17`
- **title:** Special Lagrangian torus fibrations and focus-focus singularities
- **spec:** Special Lagrangian submanifolds (calibrated by $\mathrm{Re}\,\Omega$) and special Lagrangian $T^n$-fibrations of a Calabi-Yau; the integral-affine structure induced on the base with singularities along the discriminant; the focus-focus (nodal) singularity and its monodromy $\binom{1\ 1}{0\ 1}$; the Gross-Wilson $K3$ fibration as the worked example. The differential-geometric substrate beneath SYZ.
- **prereqs:** `04.12.10` (SYZ conjecture), `04.12.08` (dual intersection complex / tropical manifold), `05.05.01` (Lagrangian submanifold)
- **chapter dir:** `content/04-algebraic-geometry/12-tropical/`
- **frontmatter:** section "Algebraic Geometry", chapter "Tropical Geometry and Mirror Symmetry"
- **why a gap:** SYZ (04.12.10) *states the conjecture* and references special Lagrangian fibrations, and the focus-focus monodromy appears glancingly in 04.12.08/04.12.10, but no unit constructs special Lagrangian fibrations, the induced singular integral-affine base, or the focus-focus singularity as its own object — the geometric origin of the tropical manifold's singular locus $\Delta$. The only "Lagrangian" unit (05.05.01) is the plain symplectic submanifold. Lower-confidence than gaps 1–3 (partially diffused across 04.12.08/10); included because the focus-focus/discriminant construction is a distinct, repeatedly-invoked object never given a home. Demote to COVERED if 04.12.08's affine-singularity treatment is judged sufficient on production review.

---

## COVERED (not gaps) — verified due diligence

| Topic | Existing unit(s) | Evidence |
|---|---|---|
| Tropical semiring $(\min,+)$, tropical polynomials/hypersurfaces | `04.12.01` | title "Tropical semiring and tropical polynomial" |
| Tropical curve, balancing condition, tropical degree/genus | `04.12.02` | title "Tropical curve as balanced rational metric graph" |
| **Tropical Riemann-Roch / Baker-Norine, chip-firing, tropical Clifford** | `04.12.02` | full Baker-Norine theorem statement, $g$-reduced-divisor proof outline, chip-firing equivalence, rank function, Clifford inequality, Mikhalkin-Zharkov history (lines 55, 502, 538, 547, 583, 633) — NOT a gap despite being absent from the original audit |
| Newton polytope; non-archimedean amoeba | `04.12.04` | title "Newton polytope and non-archimedean amoeba" |
| Kapranov's theorem (fundamental theorem of tropical geometry); Bieri-Groves | `04.12.03` | title "Kapranov's theorem (fundamental theorem of tropical geometry)" |
| Mikhalkin's correspondence theorem | `04.12.05` | title "Mikhalkin's correspondence theorem" |
| Nishinou-Siebert correspondence | `04.12.06` | title "Nishinou-Siebert correspondence theorem" |
| Toric degeneration of a Calabi-Yau; max-unipotent monodromy | `04.12.07` | title "Toric degeneration of a Calabi-Yau variety" |
| Dual intersection complex; tropical manifold; integral affine structure w/ singularities; polyhedral decomposition $\mathscr{P}$ | `04.12.08` | title "Dual Intersection Complex; Tropical Manifold B" |
| Gross-Siebert reconstruction theorem | `04.12.09` | title "Gross-Siebert Reconstruction Theorem (Statement)" |
| SYZ conjecture; dual special-Lagrangian fibrations; T-duality | `04.12.10` | title "Strominger-Yau-Zaslow (SYZ) Conjecture"; 100 hits on special-Lagrangian/T-duality/fibration |
| **Scattering diagram; walls; wall-crossing automorphism; consistency; KS scattering theorem** | `04.12.11` | full formal definition of wall + wall-crossing automorphism + consistency-of-structure theorem (Gross-Siebert 2010) with proof + KS scattering theorem — the audit's deferred P4 `04.12.16` is effectively delivered here |
| Slab functions; structure $\mathscr{S}$ | `04.12.11` | title "Slab function and structure of a tropical manifold" |
| Theta functions; broken-line construction; canonical $\mathbb{Z}$-basis | `04.12.12` | title "Theta function of a polarised tropical manifold" |
| Period integral; mirror map; Picard-Fuchs | `04.12.13` | title "Period integral and the mirror map (pointer)" |
| Log Gromov-Witten invariants | `04.12.15` | title "Log Gromov-Witten Invariants (pointer)" |
| Reflexive polytope; Batyrev mirror duality; Batyrev-Borisov; Kreuzer-Skarke; nef partitions | `04.11.16` | full unit (280 lines): reflexivity definition, facet-distance-one criterion, Batyrev Hodge-exchange theorem with proof, Batyrev-Borisov complete intersections, Kreuzer-Skarke classification — the audit's P4 `04.12.17` upgrade is already done |
| Calabi-Yau variety (trivial canonical bundle) | `04.08.02` (canonical sheaf) + used in `04.12.07`, K-stability/YTD unit | definition is elementary and introduced via the canonical sheaf and used pervasively; a standalone "CY definition" unit would be marginal — judged COVERED-adjacent, not a high-value gap |

---

## Summary
- **Genuine gaps: 4** (`04.12.14` log structures/log smooth; `04.10.35` stable maps & Gromov-Witten invariants; `04.12.16` A-model/B-model mirror conjecture survey; `04.12.17` special Lagrangian fibrations / focus-focus — gap 4 is lower-confidence).
- **COVERED-verified topics: 17** (the entire original-audit priority-1/2/3 punch-list plus Baker-Norine, scattering diagrams, and Batyrev — all shipped since the first pass).
- The original audit's "~0% coverage / total gap" verdict is **obsolete**: TGMS is now ~85–90% covered. The residual gaps are foundational substrates (log geometry, ordinary Gromov-Witten theory, the mirror conjecture statement) rather than tropical/Gross-Siebert content, which is essentially complete.
