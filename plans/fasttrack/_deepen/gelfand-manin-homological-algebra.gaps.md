# Gel'fand–Manin, *Methods of Homological Algebra* (FT 3.02) — deepening pass

**Verdict: essentially fully covered.** The first-pass audit's 18-unit
punch-list (§3) has been **almost entirely implemented** since it was
written. Every Priority-0, Priority-1, and Priority-2 unit it proposed
now exists in the corpus (verified by filename below). After grepping the
live corpus for every GM-HA chapter/appendix topic, **one** genuine
structural gap remains — the abstract **Verdier quotient** of a
triangulated category by a thick subcategory, a GM-HA Ch. III construction
that the corpus only has in its `D(A) = K(A)[qis⁻¹]` special case
(`04.03.11`) but never in general form. Everything else is covered.

This is a valid "book is done" result. 1 genuine gap proposed.

---

## Genuine gaps (1)

### 1. `04.03.23` — Verdier quotient of a triangulated category by a thick subcategory

- **title:** Verdier Quotient of a Triangulated Category by a Thick Subcategory
- **spec:** A thick (épaisse) triangulated subcategory $\mathcal{N} \subset \mathcal{T}$ defines the Verdier quotient $\mathcal{T}/\mathcal{N}$ by localizing at the class of morphisms whose cone lies in $\mathcal{N}$ (calculus of fractions on a triangulated category); $\mathcal{T}/\mathcal{N}$ is triangulated, with universal property "kills exactly $\mathcal{N}$," and recovers $D(\mathcal{A}) = K(\mathcal{A})/\mathcal{N}_{\mathrm{ac}}$ (quotient by acyclic complexes) and $D^b/D^b_{\mathrm{perf}}$ (the singularity category) as instances.
- **prereqs:** `04.03.10` (triangulated category, Verdier axioms TR1–TR4 + octahedral), `04.03.11` (derived category as localisation at qis), `01.02.32` (mapping cone / distinguished triangle)
- **chapter dir:** `content/04-algebraic-geometry/03-cohomology/`
- **frontmatter:** `section: algebraic-geometry`, `chapter: cohomology`
- **why genuine:** `grep -rliE "verdier quotient|thick subcateg|épaisse|quotient.*by a thick"` over `content/` returns only `03.12.46` (periodicity & thick-subcategory *theorems* — a stable-homotopy classification result, a different topic) and `03.13.08` (telescope conjecture). No unit constructs $\mathcal{T}/\mathcal{N}$, states its universal property, or proves it is triangulated. `04.03.11` performs the localization **only** for the specific multiplicative system of quasi-isomorphisms (`grep` for `thick|épaisse|null system|saturated` in `04.03.11`/`04.03.10` finds none of the general apparatus). The Verdier quotient is the abstract construction that GM-HA Ch. III states *before* specializing to $D(\mathcal{A})$, and it is the prerequisite for localizing subcategories, recollements (referenced in `04.03.19`), Bousfield localization in triangulated settings, and singularity categories. Three-tier; Master tier proves $\mathcal{T}/\mathcal{N}$ is triangulated and verifies the universal property. ~2000 words. Originator: Verdier 1963/1967 thesis (*Astérisque* 239, 1996), §II.2.
- **slot check:** `04.03.23` is free (`04.03.22` is the last occupied `04.03.2x`; `04.03.09` also free but the dependency runs forward from `.10`/`.11`, so a trailing slot is correct).

---

## COVERED (not gaps) — first-pass punch-list items now SHIPPED

The entire §3 punch-list of the first audit has been produced. Verified by
`find content -name "01.02.3*"` and `find content -name "04.03.1*/2*"`:

| First-pass item | Status | Existing unit id |
|---|---|---|
| 1. Chain complex in an abelian category | COVERED | `01.02.30-chain-complex-in-an-abelian-category` |
| 2. Chain homotopy + homotopy category $K(\mathcal{A})$ | COVERED | `01.02.31-chain-homotopy-and-the-homotopy-category-k-mathcal-a` |
| 3. Mapping cone + distinguished triangle | COVERED | `01.02.32-mapping-cone-of-a-chain-map-and-the-distinguished-triangle` |
| 4. Abelian category + Grothendieck axioms AB1–AB5 | COVERED | `01.02.33-abelian-category-and-grothendieck-axioms-ab1-ab5` |
| 5. Triangulated category, Verdier TR1–TR4, octahedral | COVERED | `04.03.10-triangulated-category-verdier-axioms-tr1-tr4-and-the-octahedral-axiom` |
| 6. Derived category $D(\mathcal{A})$ via qis-localization | COVERED | `04.03.11-derived-category-d-mathcal-a-localisation-at-quasi-isomorphisms` |
| 7. Derived functors $RF$/$LF$ via derived categories | COVERED | `04.03.12-derived-functors-rf-and-lf-via-derived-categories` |
| 8. Grothendieck spectral sequence | COVERED | `04.03.13-grothendieck-spectral-sequence` |
| 9. Spectral sequence of a filtered complex | COVERED | `04.03.14-spectral-sequence-of-a-filtered-complex` |
| 10. General Leray spectral sequence (sheaf form) | COVERED | `04.03.15-sheaf-cohomology-leray-spectral-sequence-general-form` |
| 11. Six-functor formalism (adjunctions, base change, Verdier duality) | COVERED | `04.03.16-six-functor-formalism-adjunctions-and-base-change` |
| 12. Derived tensor $\otimes^L$ and Tor | COVERED | `04.03.17-derived-tensor-product-otimes-l-and-tor-in-derived-categories` |
| 13. $t$-structure, heart, truncations | COVERED | `04.03.18-t-structure-on-a-triangulated-category-heart-and-truncations` |
| 14. Perverse sheaves (pointer) | COVERED | `04.03.19-perverse-sheaves-perv-x` |
| 15. Hochschild homology & cohomology + bar resolution | COVERED | `04.03.20-hochschild-homology-and-cohomology` |
| 16. Hochschild–Kostant–Rosenberg theorem | COVERED | `04.03.21-hochschild-kostant-rosenberg-theorem` |
| 17. Cyclic homology + Connes SBI long exact sequence | COVERED | `04.03.22-cyclic-homology-and-connes-long-exact-sequence` |
| 18. Dold–Kan correspondence | COVERED | `01.02.35-dold-kan-correspondence` |

## COVERED — additional GM-HA topics verified against the corpus

- **Snake lemma / five-lemma / Yoneda Ext** → `01.02.11-exact-sequence-snake-lemma`.
- **Simplicial sets, $\Delta$, geometric realisation** → `48.12.24-simplicial-set-delta`, `03.12.25-simplicial-sets-and-geometric-realization`; **simplicial homology** → `03.12.12`.
- **Sheaves / stalk / sheafification / direct & inverse image** → `04.01.01-sheaf`, `04.01.02-stalk`, `04.01.03-sheafification`, `04.01.04-direct-inverse-image`.
- **Sheaf cohomology $H^n(X,\mathcal F)=R^n\Gamma$** → `04.03.01-sheaf-cohomology`; **classical derived functors / Ext** → `04.03.06-derived-functors-and-ext`.
- **Čech cohomology + comparison** → `04.03.03-cech-schemes`, `06.04.02-cech-cohomology-line-bundles`.
- **Hypercohomology of a complex of sheaves** (incl. brutal/canonical truncation) → `03.04.14-hypercohomology-of-a-complex-of-sheaves`.
- **Higher direct images $R^if_*$ + base change** → `04.03.07-higher-direct-images-and-base-change`.
- **Spectral sequences (general, exact-couple, double-complex)** → `03.13.01-spectral-sequence`, `03.13.E1`; **Leray–Serre (fibration form)** → `03.13.02-leray-serre`.
- **Künneth / universal-coefficient (chain-complex form)** → `03.04.12-kunneth`, `03.12.18-universal-coefficient`.
- **Derived internal Hom $R\mathcal{H}om$** → defined and used in `04.03.16` (six functors, as $\otimes^L$-adjoint and dualising functor) and `04.03.17`; not a standalone gap.
- **Grothendieck/Verdier duality, dualising complex $\omega^\bullet$, $f^!=D\circ Lf^*\circ D$** → `04.03.16` (Master tier); **Serre duality** → `04.08.03-serre-duality`, `06.04.04-serre-duality-curves`.
- **Cartan–Eilenberg resolution / double complex / total complex** → developed across `03.13.01`, `04.03.13`, `04.03.14`.
- **Truncation functors $\tau_{\le n},\tau_{\ge n}$ + truncation triangle + $H^0_t$** → `04.03.18`.
- **Gerstenhaber bracket / cup product on $HH^*$, deformation interpretation** → `04.03.20`, `04.03.21`.
- **Hochschild–Serre / group-extension spectral sequence** → stated as a specialisation in `04.03.13` (Grothendieck SS).

## Out of scope (per first-pass §5) — not GM-HA gaps

- **DG-algebras / DG-categories / $A_\infty$** — explicitly out of GM-HA scope (Keller/Kontsevich audit). Only incidental corpus mentions (`03.12.06`, `03.12.51`); not proposed.
- **Group cohomology $H^n(G,M)=\mathrm{Ext}^n_{\mathbb Z[G]}(\mathbb Z,M)$ as a dedicated unit** — appears only as an *example* in GM-HA and `04.03.06`; a standalone group-cohomology unit is a **Weibel** gap (Weibel Ch. 6), not a GM-HA chapter. Defer to a Weibel audit, not this book.
- **D-modules / Riemann–Hilbert** — EMS Algebra-VI, not the Algebra-V volume (first-pass §5).
- **Tilting theory, $\infty$-categorical reformulation, full BBD/perverse theory** — downstream audits.

---

**Counts:** 1 genuine gap; 30+ topics verified COVERED (18 shipped punch-list
items + 12+ additional GM-HA topics); 4 out-of-scope clarifications.
