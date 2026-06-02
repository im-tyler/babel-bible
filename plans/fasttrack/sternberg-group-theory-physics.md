# Sternberg — *Group Theory and Physics* (Fast Track 1.15) — Audit + Gap Plan

**Book:** Shlomo Sternberg, *Group Theory and Physics*, Cambridge
University Press, Cambridge 1994. xiv + 429 pp. ISBN 0-521-24870-1
(hardcover), 0-521-55885-9 (paperback, 1995 reprint). Commercial title
(**BUY** in `docs/catalogs/FASTTRACK_BOOKLIST.md` row 1.15, "Rep theory,
quantum mechanics").

**Fast Track entry:** 1.15. Tier β (per `FASTTRACK_EQUIVALENCE_PLAN.md`
§6, "§1 supplements: ... Sternberg Group Theory (1.15)"). The
**representation-theory-applied-to-physics** member of Sternberg's
three-book Fast Track triple, deliberately separate from his *Lectures
on Differential Geometry* (FT 1.10, the moving-frame / $G$-structures
differential-geometry text, audited at
`plans/fasttrack/sternberg-lectures-differential-geometry.md`) and his
*Curvature in Mathematics and Physics* (FT 1.14, the gauge-theory + GR
application layer, audited at
`plans/fasttrack/sternberg-curvature-mathematics-physics.md`). The three
Sternberg audits partition his pedagogical output as
**geometry / curvature / symmetry**; this book is the **symmetry** volume.

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 +
P3-lite of the orchestration protocol), mirroring the
Sternberg-Curvature and Serre-LRFG peer audits. Output is a concrete
punch-list so that *Group Theory and Physics* (GTP hereafter) is covered
to the equivalence threshold. **The decisive question for this audit is
overlap management.** GTP's rep-theory core — finite-group character
theory, Schur's lemma, orthogonality, induced representations,
compact-group / SU(2)/SO(3) representation theory, the Peter-Weyl
theorem, tensor products and Clebsch-Gordan decomposition — is
**already shadow-covered** by the union of the Serre-LRFG (FT 3.15),
Fulton-Harris (FT 3.11), and Woit (FT 2.02) audits and the shipped
`07-representation-theory/` and `12-quantum/05-angular-momentum/`
corpora. The genuinely **GTP-distinctive** content is concentrated in
the **physics-applications layer**: (a) crystallographic point groups
and space groups as named finite groups with worked character tables;
(b) molecular-vibration normal-mode analysis and spectroscopic
selection rules *via* symmetry-adapted reduction; (c) the
representation theory of the full rotation, Lorentz, and Poincaré
groups, culminating in Wigner's classification of relativistic
particles; (d) Sternberg's signature "physics through representation
theory" voice (the Mendeleev-table-as-rep-theory motif, the
Stern-Gerlach / Zeeman / Wigner-theorem framing).

**Audit mode: REDUCED.** No local PDF in
`reference/fasttrack-texts/01-fundamentals/` at audit time; working from
the well-documented public TOC + peer-source crosswalks (Woit, Hall
*Quantum Theory for Mathematicians*, Tinkham *Group Theory and Quantum
Mechanics*, Cotton *Chemical Applications of Group Theory*) + in-Codex
evidence (the 32 shipped `07-representation-theory/` units, the
`12-quantum/05-angular-momentum/` and `12-quantum/15-discrete-symmetry/`
units, and the chemistry symmetry / crystal-field units
`16.02.01`, `16.03.*`, `16.04.02`). Chapter numbering below follows the
1994 CUP hardcover. Promote to full P1 when a PDF is local.

---

## §1 What *Group Theory and Physics* is for

GTP is Sternberg's graduate text on **the use of group representation
theory in physics**, written from the conviction (stated in the
preface, paraphrasing Wigner and Weyl) that the deepest structural facts
of quantum mechanics — the periodic table, atomic and molecular spectra,
the classification of elementary particles — are *consequences of
symmetry*, and that representation theory is the correct language for
that symmetry. Where Tinkham *Group Theory and Quantum Mechanics* (1964)
is the physicist's classic at lower mathematical precision, where Hamermesh
*Group Theory and its Application to Physical Problems* (1962) is the
encyclopaedic reference, and where Weyl's *The Theory of Groups and
Quantum Mechanics* (1928/1931) is the founding monograph, **GTP is the
modern mathematically-rigorous-but-physics-motivated graduate text**:
it proves the representation-theoretic theorems cleanly (Schur, Maschke,
orthogonality, Peter-Weyl, Frobenius reciprocity, Wigner's theorem) and
then deploys them on the canonical physics problems.

Distinctive contributions, in the order GTP develops them:

1. **Part I — Finite groups and their representations (Chs. 1–3).**
   Basic group theory; group actions; the regular representation;
   Maschke's theorem; Schur's lemma; characters and the orthogonality
   relations; the decomposition of a representation into irreducibles
   *via* the reduction formula $a_i = \tfrac{1}{|G|}\sum_g
   \overline{\chi_i(g)}\,\chi(g)$. **Sternberg's distinctive pedagogical
   move:** every theorem is immediately exercised on a **physically
   relevant finite group** — the dihedral groups $D_n$, the tetrahedral
   $T$, octahedral $O$, and icosahedral $I$ groups (the molecular point
   groups), and the crystallographic point groups. Worked character
   tables of these groups are the load-bearing concrete content.

2. **Part II — Molecular and crystallographic applications (Chs. 3–4).**
   **Crystallographic point groups** (the 32 crystal classes) and the
   beginning of **space-group** theory (Bravais lattices, the 230 space
   groups as extensions of point groups by lattice translations).
   **Molecular vibrations**: the $3N$-dimensional displacement
   representation of an $N$-atom molecule, its reduction into
   irreducible normal-mode symmetry species, and the resulting
   prediction of **infrared- and Raman-active modes** (spectroscopic
   **selection rules**) directly from the character table — the
   "great orthogonality theorem in action." This is the chapter that
   makes GTP indispensable to chemists and condensed-matter physicists,
   and it is the **most GTP-distinctive material relative to the
   pure-math rep-theory audits**.

3. **Part III — Compact groups, SU(2) and SO(3) (Chs. 5–7).** Haar
   measure on a compact group; the **Peter-Weyl theorem**; the
   representation theory of **SU(2)** (the spin-$j$ irreducibles
   $D^{(j)}$ of dimension $2j+1$) and its relation to **SO(3)** via the
   **two-to-one covering** $\mathrm{SU}(2) \to \mathrm{SO}(3)$ (the
   origin of half-integer spin and the projective representations of
   $\mathrm{SO}(3)$). Tensor products and the **Clebsch-Gordan series**
   $D^{(j_1)} \otimes D^{(j_2)} = \bigoplus_{j=|j_1-j_2|}^{j_1+j_2}
   D^{(j)}$; **Clebsch-Gordan coefficients**; the **Wigner-Eckart
   theorem** for matrix elements of irreducible tensor operators.
   Application to **atomic spectra**, the **Zeeman effect**, and the
   **addition of angular momenta**.

4. **Part IV — The full rotation group, Lorentz group, and Wigner's
   theorem (Chs. 8–9).** **Wigner's theorem** (every symmetry of a
   quantum system is implemented by a unitary or anti-unitary operator,
   unique up to phase — hence the appearance of **projective**
   representations and the **central-extension / covering-group**
   philosophy). The **Lorentz group** $\mathrm{O}(3,1)$, its identity
   component $\mathrm{SO}^+(3,1)$, and the covering
   $\mathrm{SL}(2,\mathbb{C}) \to \mathrm{SO}^+(3,1)$. The **Poincaré
   group** as the semidirect product
   $\mathbb{R}^{1,3} \rtimes \mathrm{SO}^+(3,1)$.

5. **Part V — Induced representations, Mackey theory, and Wigner's
   classification (Chs. 9–10).** **Induced representations** for
   non-compact and locally-compact groups; **Mackey's theory of induced
   representations / systems of imprimitivity / the Mackey machine**;
   **Wigner's 1939 classification of the unitary irreducible
   representations of the Poincaré group** by orbits in momentum space
   and the **little group** of each orbit (massive: little group
   $\mathrm{SU}(2)$, label = spin; massless: little group $\mathrm{ISO}(2)$,
   label = helicity). This is the **representation-theoretic foundation
   of relativistic particle physics** and the apex of the book.

6. **Editorial signature.** Three threads make GTP distinctive against
   Serre, Fulton-Harris, and Woit:
   - **Physics motivation drives the mathematics.** Sternberg
     repeatedly frames a representation-theoretic theorem as the answer
     to a *physical* question ("why does the periodic table have the
     shape it does?", "why are there selection rules?", "why is spin
     half-integer?"). The "intelligence of writing from the original
     geniuses" directive applies: Wigner, Weyl, Bethe, and Mackey are
     present as originators, not just citations.
   - **Finite + compact + non-compact in one arc.** GTP is unusual in
     covering finite-group character theory, compact-group Peter-Weyl
     theory, *and* the Mackey-machine non-compact (Poincaré) theory in
     a single uniform notation — the same arc the Codex
     `07-representation-theory/` chapter follows but with the physics
     applications interleaved.
   - **Crystallography and molecular spectroscopy as first-class
     rep-theory applications**, not afterthoughts — the chapter on
     point groups, space groups, and vibrational selection rules is the
     part with the **least overlap** with any other Fast Track book.

GTP is **not** a first course in abstract algebra (Lang 3.01 / the
`01-foundations/02-groups/` chapter is the prerequisite), is **not** the
place for the modular representation theory of finite groups (Serre LRFG
Part III, audited separately), and is **not** a QFT textbook (Woit 2.02,
Weinberg 2.17–2.19 are the follow-ups; GTP stops at the *single-particle*
Wigner classification and does not build the field theory). The canonical
"after GTP" sequence is Woit *Quantum Theory, Groups and Representations*
(FT 2.02) for the systematic Lie-theoretic QM, and Weinberg *The Quantum
Theory of Fields Vol. I* (FT 2.17) Ch. 2 for the field-theoretic use of
the Wigner classification.

**Cited peer sources (≥3, per stub spec):**
- E. P. Wigner, *Group Theory and its Application to the Quantum
  Mechanics of Atomic Spectra* (Academic Press, English ed. 1959; German
  orig. *Gruppentheorie ...*, Vieweg 1931). The founding monograph; GTP
  is its modern successor. **Already cited in shipped units `12.05.01`,
  `12.15.02`, `16.02.01` Master tiers.**
- M. Tinkham, *Group Theory and Quantum Mechanics* (McGraw-Hill 1964;
  Dover reprint 2003). The physicist's standard companion; the canonical
  source for molecular-vibration and crystal-field character-table
  applications.
- B. C. Hall, *Quantum Theory for Mathematicians* (Springer GTM 267,
  2013). The modern rigorous mathematician's QM; Ch. 16–17 cover SU(2),
  the Mackey machine for $E(n)$, and the projective-rep / covering-group
  philosophy GTP develops. **Already cited in shipped unit `09.03.03`.**
- P. Woit, *Quantum Theory, Groups and Representations* (Springer 2017;
  FT 2.02). The Fast Track sibling text covering the same SU(2)/SO(3) +
  Poincaré-rep arc; **already audited / shadow-covered via the
  `12-quantum/05-angular-momentum/` and `09.03.03` units.**
- F. A. Cotton, *Chemical Applications of Group Theory*, 3rd ed.
  (Wiley 1990). The canonical chemistry-side source for point-group
  character tables and vibrational selection rules. **Already cited
  (pending source) in shipped unit `16.02.01`.**

---

## §2 Coverage table (Babel Bible vs GTP)

Cross-referenced against the current 32 shipped units of
`content/07-representation-theory/`, the `12-quantum/05-angular-momentum/`
and `12-quantum/15-discrete-symmetry/` units, and the chemistry symmetry
/ crystal-field units (`16.02.01`, `16.03.*`, `16.04.02`).
✓ = covered at GTP-equivalent depth, △ = topic present but Codex unit
shallower / differently anchored / lives in a physics or chemistry
chapter rather than a math-side rep-theory unit, ✗ = not covered.

### Part I — Finite groups and their representations (Chs. 1–3)

| GTP topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Groups, subgroups, cosets, quotients, isomorphism theorems | `01.02.02` | ✓ | Shipped. |
| Group actions, orbit-stabiliser, class equation, conjugacy classes | `01.02.03` | ✓ | Shipped. |
| Group representation, equivalence, sub/quotient reps | `07.01.01` | ✓ | Master tier cites Serre §1. |
| Maschke's theorem (complete reducibility, char 0) | `07.02.01` | ✓ | Maschke 1899 originator-prose present. |
| Schur's lemma | `07.01.02` | ✓ | Shipped. |
| Characters; first and second orthogonality relations | `07.01.03`, `07.01.04` | ✓ | Frobenius 1896 originator-prose. |
| Regular representation; Artin-Wedderburn decomposition | `07.01.05` | ✓ | Shipped. |
| Reduction formula $a_i=\tfrac1{|G|}\sum\overline{\chi_i(g)}\chi(g)$; number of irreps = number of classes | △ (in `07.01.04` Master tier) | △ | The reduction (multiplicity) formula is the *operational* heart of every physics application; stated in `07.01.04` but **not isolated as a worked-procedure unit aimed at the physics use-case**. Candidate: §Master/§Worked-example deepening or new finite-group-reduction unit. |
| Tensor product of representations; $\chi_{V\otimes W}=\chi_V\chi_W$ | `07.01.06` | ✓ | Shipped. |
| **Worked character tables: $C_n,D_n,T_d,O_h,I_h$, small crystal groups** | △ (chemistry side `16.02.01`) | △ | **Gap (medium — defining GTP content).** Point-group character tables exist on the *chemistry* side (`16.02.01` Master tier) but there is **no math-side character-table pack** in `07-*`. The Serre-LRFG audit independently flagged the same gap and proposed `07.02.E1`. Candidate: ship `07.02.E1`. |

**Part I status:** **~90% covered** — all theorems shipped via
`07.01.01–06` + `07.02.01`. The gaps are pedagogical-completeness
(worked character tables, the reduction formula as a physics-facing
procedure), not structural.

### Part II — Molecular and crystallographic applications (Chs. 3–4)

| GTP topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Molecular point groups ($C_{nv},D_{nh},T_d,O_h,$ etc.); Schoenflies notation | `16.02.01` | △ | Covered on the chemistry side (point-group assignment, Schoenflies symbols). Adequate for the *chemistry* use; the **math-side framing as finite subgroups of $\mathrm{O}(3)$** is not isolated. |
| **Crystallographic point groups (32 crystal classes)** | △ (`16.02.01` mentions) | △ | **Gap (medium).** The classification of the 32 crystallographic point groups (those compatible with a lattice — the crystallographic restriction theorem) is mentioned but not developed as its own unit. |
| **Space groups (230); Bravais lattices; the crystallographic restriction theorem** | — | ✗ | **Gap (high — GTP-distinctive).** The extension of point groups by lattice translations to the 230 space groups, the 14 Bravais lattices, and the crystallographic restriction theorem ($n$-fold rotational symmetry of a lattice forces $n\in\{1,2,3,4,6\}$) appear **nowhere in Codex**. This is a signature GTP / solid-state-physics topic. |
| **Molecular vibrations: $3N$ displacement rep, reduction into normal-mode species** | △ (mechanical version `05.00.11`) | △ | **Gap (high — GTP-distinctive).** `05.00.11-small-oscillations-normal-modes` gives the *mechanical* eigenvalue normal-mode theory; the **symmetry-adapted (group-theoretic) reduction of the $3N$ displacement representation** that predicts the symmetry species of vibrational modes is **not** done. `16.02.01` gestures at it on the chemistry side. |
| **Spectroscopic selection rules from character tables (IR/Raman activity)** | △ (`12.07.02`, `12.15.02`, `14.12.01`, `16.02.01`) | △ | **Gap (medium).** The physics machinery exists — Fermi golden rule (`12.07.02`), Wigner-Eckart (`12.15.02`), spectroscopy fundamentals (`14.12.01`) — but the **group-theoretic selection rule "the matrix element vanishes unless the integrand contains the totally symmetric representation"** is not isolated as a rep-theory unit. |
| Crystal-field splitting of $d$/$f$ orbitals by point-group symmetry (Bethe 1929) | `16.03.01`, `16.03.02`, `16.04.02` | △ | Covered on the *chemistry* side (octahedral/tetrahedral CFT splitting); the **rep-theoretic derivation via subduction of $\mathrm{SO}(3)$ irreps to the point group** is implicit, not isolated. |

**Part II status:** **~45% covered**, almost entirely on the chemistry
side (`16.*`). The **space-group / crystallographic-restriction block**
and the **symmetry-adapted molecular-vibration reduction** are the two
genuine GTP-distinctive structural gaps; the **selection-rule-as-
rep-theory** unit is a medium gap that ties them together.

### Part III — Compact groups, SU(2), SO(3) (Chs. 5–7)

| GTP topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Haar measure on a compact group | `07.07.03` | ✓ | Shipped. |
| Peter-Weyl theorem | `07.07.02` | ✓ | Peter-Weyl 1927 originator-prose. |
| Compact-group representation generalities | `07.07.01` | ✓ | Shipped. |
| **Representations of SU(2): spin-$j$ irreps $D^{(j)}$, dimension $2j+1$** | `12.05.01`; `07.06.11` | ✓ | `12.05.01-angular-momentum-operators-su2` builds the $D^{(j)}$ explicitly from ladder operators; `07.06.11` gives the $\mathfrak{sl}_2(\mathbb{C})$ algebraic version. |
| **SU(2)→SO(3) two-to-one cover; projective reps; half-integer spin** | `03.05.05`, `03.09.03`, `03.03.03`; `12.01.02` | △ | The double cover (`03.05.05`), spin group (`03.09.03`), and orthogonal group (`03.03.03`) are shipped; the **explicit $\mathrm{SU}(2)\to\mathrm{SO}(3)$ rep-theoretic packaging** ("why $\mathrm{SO}(3)$ has only integer-spin true reps and half-integer spins are projective") is touched in `12.01.02`/`12.05.01` but **not isolated as an SU(2)/SO(3) representation-theory unit**. |
| Tensor products; Clebsch-Gordan series $D^{(j_1)}\otimes D^{(j_2)}=\bigoplus D^{(j)}$ | `12.05.03` | ✓ | `12.05.03-addition-angular-momenta-clebsch-gordan` covers the series + coefficients. |
| Clebsch-Gordan coefficients; $3j$ symbols | `12.05.03` | ✓ | Shipped. |
| **Wigner-Eckart theorem; irreducible tensor operators** | `12.15.02` | ✓ | `12.15.02-...-wigner-eckart-theorem` covers it. |
| Application: atomic spectra, LS-coupling, Zeeman effect | `12.09.04`, `12.07.05` | ✓ | `12.09.04` (LS coupling, multi-electron structure), `12.07.05` (Stark/Zeeman). |
| Spherical harmonics as $\mathrm{SO}(3)$ irreps on $L^2(S^2)$ | `12.05.02` | ✓ | Shipped. |

**Part III status:** **~90% covered.** SU(2)/SO(3) rep theory, Peter-Weyl,
Haar measure, Clebsch-Gordan, Wigner-Eckart, and the atomic-spectra
applications are all shipped (mostly in `12-quantum/05-angular-momentum/`
plus `07.07.*`). The single marginal gap is a **clean SU(2)/SO(3)
representation-theory unit** consolidating the double-cover /
half-integer-spin / projective-rep story in one place (currently
scattered across `12.01.02`, `12.05.01`, `03.05.05`, `03.09.03`).

### Part IV–V — Lorentz/Poincaré groups, Wigner's theorem, induced reps (Chs. 8–10)

| GTP topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Lorentz transformations; $\mathrm{O}(3,1)$, components | `10.05.01` | △ | `10.05.01` covers the *transformations* and the postulates; the **group structure of $\mathrm{O}(3,1)$ and its four components** is light. |
| **$\mathrm{SL}(2,\mathbb{C})\to\mathrm{SO}^+(3,1)$ cover; $(j_1,j_2)$ finite-dim reps; Weyl/Dirac spinors** | △ (`12.11.01`, `12.05.05`, `03.09.*`) | △ | **Gap (medium-high).** Dirac/Weyl spinors are shipped (`12.11.01`, `12.05.05`), and the Clifford/spin machinery is in `03.09.*`, but the **rep-theory of the Lorentz group itself** — the $(j_1,j_2)$ finite-dimensional non-unitary reps via $\mathrm{SL}(2,\mathbb{C})$ — is **not isolated**. |
| **Wigner's theorem (symmetries ⇒ unitary/anti-unitary up to phase); projective reps and central extensions** | △ (`12.15.01`, `05.00.07`) | △ | **Gap (medium).** The projective-rep / central-extension philosophy is present for the **Galilean** group (`05.00.07-galilei-bargmann-central-extension`) and anti-unitary time reversal (`12.15.01`); **Wigner's theorem as a named result** and its general statement are **not isolated**. |
| **Induced representations / Mackey theory for non-compact groups; systems of imprimitivity** | △ (`07.01.07`, `09.03.03`) | △ | **Gap (high).** `07.01.07` covers *finite-group* induction; `09.03.03` applies the **Mackey machine to $E(3)$** (the non-relativistic free particle). The **general Mackey theory of induced representations / imprimitivity for semidirect products** is exercised but **not stated as its own theorem-of-record unit**. |
| **Wigner's 1939 classification of Poincaré irreps: orbits, little groups, mass + spin/helicity** | — | ✗ | **Gap (HIGH — book's apex, entirely absent).** The classification of the unitary irreps of the Poincaré group by momentum-space orbits and little groups (massive ↔ $\mathrm{SU}(2)$ ↔ spin; massless ↔ $\mathrm{ISO}(2)$ ↔ helicity; tachyonic / vacuum orbits) appears **nowhere in Codex**. This is the single largest GTP-distinctive structural gap. The non-relativistic analogue (`09.03.03`, $E(3)$) is the closest existing scaffold. |
| Application: relativistic particles as Poincaré irreps; spin-statistics pointer | △ (`12.05.04–06`, `13.07.01`) | △ | The free scalar/Dirac/Maxwell fields (`12.05.04–06`) are the *field-theoretic realisations* of the massive/massless Poincaré irreps; the **"a particle = a Poincaré irrep" dictionary** is not anchored. |

**Part IV–V status:** **~30% covered.** The component facts (Lorentz
transformations, Dirac spinors, Galilean central extension, $E(3)$
Mackey machine) are shipped scattered across `10.05.*`, `12.11.*`,
`03.09.*`, `05.00.07`, `09.03.03`, but the **rep-theoretic spine** —
Wigner's theorem, the $\mathrm{SL}(2,\mathbb{C})$ Lorentz reps, general
Mackey theory, and above all the **Wigner classification of Poincaré
irreps** — is the **largest gap in the entire audit**.

### Aggregate coverage estimate

- **Part I (finite-group character theory):** **~90%** — all theorems
  shipped; gaps = worked character tables (`07.02.E1`) and the
  reduction-formula physics procedure.
- **Part II (crystallography + molecular vibrations + selection rules):**
  **~45%** — chemistry-side coverage strong (`16.*`); space groups,
  symmetry-adapted vibration reduction, and selection-rules-as-rep-theory
  are genuine gaps.
- **Part III (compact groups, SU(2)/SO(3), Clebsch-Gordan, Wigner-Eckart):**
  **~90%** — shipped in `12.05.*` + `07.07.*`; marginal SU(2)/SO(3)
  consolidation gap.
- **Part IV–V (Lorentz/Poincaré, Wigner's theorem, Mackey machine,
  Wigner classification):** **~30%** — component facts present, spine
  absent; Wigner classification entirely missing.

**Composite estimate: ~65% topic-coverage at present.** The book is
**substantially shadow-covered** for its rep-theory core (Parts I, III)
by the Serre/Fulton-Harris/Woit audits and the `07-*` + `12.05.*`
corpora. The **net GTP-distinctive contribution** to the punch-list is
~7–9 units, concentrated in (i) the **Wigner classification of Poincaré
irreps** + general Mackey theory (Part V); (ii) the **crystallography /
space-group / molecular-vibration / selection-rule** physics-applications
block (Part II); (iii) marginal consolidation units (SU(2)/SO(3) rep
unit, Wigner's-theorem unit, character-table pack). After Priority-1 the
estimate rises to ~82%; after Priority-1+2 to ~92%.

---

## §3 Gap punch-list (priority-ordered)

**Coordination note.** Parts I and III are essentially covered — the
only Part-I/III items are the character-table pack (shared with the
Serre-LRFG audit), a finite-group-reduction physics deepening, and an
SU(2)/SO(3) consolidation unit. The Part-V Wigner-classification block
and the Part-II crystallography/vibration block carry the bulk of the
genuinely GTP-distinctive work. Every item is flagged **[NEW]**,
**[DEEPEN]**, or **[ENRICH]**. Slot ranges target existing chapters so
production agents avoid invented sub-chapter numbering; all IDs verified
non-colliding against `find content` (last shipped: `07.01.12`,
`07.02.06`, `07.07.04`, `12.05.06`).

**Priority 1 — GTP-distinctive book-apex content (Wigner classification + crystallography physics):**

1. **`07.07.05` Representations of SU(2) and SO(3): the double cover, spin, and projective representations.** [NEW] Anchor GTP Chs. 5–6 +
   Woit Chs. 8–10 + Hall *Quantum Theory for Mathematicians* Ch. 16–17.
   Three-tier; ~2000 words. Consolidate in one place: the spin-$j$
   irreps $D^{(j)}$ of $\mathrm{SU}(2)$ ($\dim = 2j+1$) on homogeneous
   polynomials of degree $2j$; the two-to-one covering homomorphism
   $\mathrm{SU}(2)\to\mathrm{SO}(3)$ with kernel $\{\pm I\}$; the
   consequence that **integer-$j$ reps descend to true reps of
   $\mathrm{SO}(3)$ while half-integer-$j$ reps are only projective**
   (the origin of half-integer spin). Worked example: the $j=1/2$ rep
   and the rotation-by-$2\pi$-equals-$-1$ sign. **Bridges** `12.05.01`
   (the physics ladder-operator construction), `03.05.05` (double cover),
   `03.09.03` (spin group), `07.06.11` ($\mathfrak{sl}_2$ reps).
   **Originator-prose:** Weyl *Gruppentheorie und Quantenmechanik* (1928);
   Cartan's spinor construction (1913).

2. **`07.07.06` Wigner's classification of the unitary irreducible representations of the Poincaré group.** [NEW] Anchor GTP Chs. 9–10
   + Weinberg *QFT Vol. I* §2.5 + Woit Ch. 42 + Wigner 1939. Three-tier
   (Master-dominant); ~2500 words. The Poincaré group
   $\mathcal{P}=\mathbb{R}^{1,3}\rtimes\mathrm{SO}^+(3,1)$; the
   **Mackey-machine / orbit-and-little-group** method applied to the
   translation-character momentum space; the orbit classification by
   $p^2=m^2$ and $\mathrm{sgn}(p^0)$ (massive $m>0$, massless $m=0$,
   tachyonic $m^2<0$, vacuum $p=0$); the **little groups** (massive:
   $\mathrm{SU}(2)$, label = spin $s\in\tfrac12\mathbb{Z}_{\ge0}$;
   massless: $\mathrm{ISO}(2)\cong E(2)$, label = helicity
   $h\in\tfrac12\mathbb{Z}$). The induced representation
   $\mathrm{Ind}_{G_p}^{\mathcal{P}}$ realises each particle type.
   Worked examples: the massive spin-$\tfrac12$ irrep (electron); the
   massless helicity-$\pm1$ irrep (photon) and why it has only two
   polarisations. **Bridges** `09.03.03` (the $E(3)$ non-relativistic
   analogue, the closest existing scaffold), `07.01.07` (induced reps),
   `12.05.04–06` (the field realisations), `10.05.01` (Lorentz
   transformations). **Originator-prose mandatory:** Wigner 1939,
   *On unitary representations of the inhomogeneous Lorentz group*,
   Ann. Math. 40, 149–204 — the single most-cited paper in the
   representation theory of physics.

3. **`07.07.07` Mackey theory of induced representations and systems of imprimitivity.** [NEW] Anchor GTP Ch. 9 + Mackey 1949–1952 +
   Hall Ch. 17 + Folland *A Course in Abstract Harmonic Analysis* Ch. 6.
   Three-tier; ~2200 words. Induced representations
   $\mathrm{Ind}_H^G$ for a closed subgroup $H$ of a locally compact
   group $G$; **systems of imprimitivity** and the **imprimitivity
   theorem** (an induced rep ⇔ a rep equipped with a projection-valued
   measure on $G/H$ intertwining correctly); the **Mackey machine** for
   regular semidirect products $G=N\rtimes H$ with $N$ abelian: irreps
   are induced from the little group (stabiliser) of a character orbit
   in $\widehat{N}$. Worked example: $E(2)$ and $E(3)$ via the machine
   (recovering `09.03.03`). **Foundational** — this is the general
   theorem of which the Wigner classification (`07.07.06`) and the
   $E(3)$ free particle (`09.03.03`) are instances. **Originator-prose:**
   Frobenius 1898 (finite induction), Mackey 1949/1951/1952 (the
   locally-compact theory). **Already partially cited** in `09.03.03`
   ("Mackey machine for $E(n)$").

4. **`07.02.E1` Worked character tables of finite groups (exercise/worked-example pack).** [NEW] Anchor GTP Chs. 2–3 + Serre LRFG
   Ch. 5 + Cotton App. + Tinkham App. ~2000 words. Exercise-pack file
   (not a full three-tier unit) presenting the canonical character
   tables: $C_n$, $D_n$, $Q_8$, $A_4\cong T$, $S_4\cong O$, $A_5\cong I$,
   plus the chemically central point groups $C_{2v}$, $C_{3v}$, $T_d$,
   $O_h$. Each table is *derived* (not just displayed) via orthogonality
   + the reduction formula. **Shared deliverable with the Serre-LRFG
   audit**, which independently proposed `07.02.E1` (and the
   Fulton-Harris audit also flagged the gap). Ship once; cite from both
   plans. **Bridges** `16.02.01` (chemistry point groups) and the new
   Part-II vibration unit (item 5).

5. **`12.05.07` Molecular vibrations and spectroscopic selection rules via symmetry.** [NEW] Anchor GTP Chs. 3–4 + Tinkham Ch. 4 +
   Cotton Chs. 6, 10 + Bishop *Group Theory and Chemistry*. Three-tier;
   ~2200 words. The $3N$-dimensional Cartesian displacement
   representation $\Gamma_{\mathrm{tot}}$ of an $N$-atom molecule under
   its point group; its reduction $\Gamma_{\mathrm{tot}}=\bigoplus_i
   a_i\,\Gamma_i$ via the reduction formula, using the character
   $\chi(R)=(\text{atoms unmoved by }R)\times(\pm1+2\cos\theta_R)$;
   subtraction of translations ($\Gamma_{x,y,z}$) and rotations
   ($\Gamma_{R_x,R_y,R_z}$) to get the **vibrational normal-mode symmetry
   species**; the **selection rule** that a transition moment integral
   $\langle\psi_f|\hat\mu|\psi_i\rangle$ vanishes unless $\Gamma_f\otimes
   \Gamma_{\hat\mu}\otimes\Gamma_i$ contains the totally symmetric
   representation — hence **IR activity** (mode transforms as $x,y,z$)
   and **Raman activity** (mode transforms as a quadratic $x^2,xy,\dots$).
   Worked examples: $\mathrm{H_2O}$ ($C_{2v}$, $3$ modes, all IR+Raman
   active); $\mathrm{CO_2}$ ($D_{\infty h}$, the symmetric stretch
   IR-inactive). **Bridges** `05.00.11` (mechanical normal modes),
   `16.02.01` (chemistry symmetry), `12.07.02` (Fermi golden rule /
   transition rates), `14.12.01` (IR/Raman spectroscopy). **The single
   most GTP-distinctive applied unit; load-bearing for chemistry and
   condensed-matter readers.** **Originator-prose:** Wigner 1930;
   Bethe 1929 (*Termaufspaltung in Kristallen*).

**Priority 2 — Part-II crystallography + Part-IV Lorentz/Wigner-theorem spine:**

6. **`07.07.08` Crystallographic point groups, space groups, and the crystallographic restriction theorem.** [NEW] Anchor GTP Ch. 4 +
   Tinkham Ch. 9 + Hahn *International Tables for Crystallography Vol. A*.
   Three-tier; ~2000 words. Finite subgroups of $\mathrm{O}(3)$; the
   **crystallographic restriction theorem** (a rotation in the point
   group of a lattice has order $\in\{1,2,3,4,6\}$, proved via the trace
   of the rotation in the integer basis being an integer); the **32
   crystallographic point groups** (crystal classes); the **14 Bravais
   lattices**; **space groups** as extensions $1\to T\to S\to P\to 1$ of
   a point group $P$ by the translation lattice $T$, symmorphic vs.
   non-symmorphic (screw axes, glide planes); the count **230**. Worked
   example: the crystallographic restriction proof; a symmorphic vs.
   non-symmorphic example. **Bridges** `16.02.01`, `16.07.01`
   (solid-state), `01.02.20` (group presentations / extensions).
   **Originator-prose:** Fedorov 1891 + Schoenflies 1891 (independent
   derivations of the 230 space groups); Bravais 1850.

7. **`07.07.09` Representations of the Lorentz group: $\mathrm{SL}(2,\mathbb{C})$, the $(j_1,j_2)$ reps, and Wigner's theorem.** [NEW] Anchor
   GTP Chs. 8–9 + Weinberg §2.7 + Woit Ch. 40. Three-tier; ~2200 words.
   The four components of $\mathrm{O}(3,1)$; the universal cover
   $\mathrm{SL}(2,\mathbb{C})\to\mathrm{SO}^+(3,1)$ (two-to-one); the
   **finite-dimensional non-unitary irreps** labelled $(j_1,j_2)$,
   $j_1,j_2\in\tfrac12\mathbb{Z}_{\ge0}$, dimension $(2j_1+1)(2j_2+1)$,
   built from $\mathrm{SL}(2,\mathbb{C})\cong\mathrm{SU}(2)_{\mathbb{C}}$;
   left/right Weyl spinors $(\tfrac12,0)$ and $(0,\tfrac12)$, the Dirac
   spinor $(\tfrac12,0)\oplus(0,\tfrac12)$, the 4-vector $(\tfrac12,
   \tfrac12)$. **Wigner's theorem** (every quantum symmetry is unitary
   or anti-unitary up to phase) as the reason physical Lorentz reps must
   be **projective unitary** ⇒ true unitary reps of the cover, and the
   reason **infinite-dimensional** unitary reps are required for
   physical states (the finite-dim reps being non-unitary). **Bridges**
   `12.11.01` (Dirac), `12.05.05` (Dirac field), `03.09.*` (Clifford/spin),
   `12.15.01` (anti-unitary time reversal), `10.05.01` (Lorentz
   transformations). **Originator-prose:** Wigner 1931/1939; Bargmann
   1947 (irreps of $\mathrm{SL}(2,\mathbb{R})$).

**Priority 3 — Master-tier deepenings (close to ≥95%; not strictly required):**

8. **§Worked-example deepening of `07.01.04`: the reduction (multiplicity) formula as a physics procedure.** [DEEPEN] ~500 words.
   Promote $a_i=\tfrac1{|G|}\sum_g\overline{\chi_i(g)}\chi(g)$ from a
   stated corollary to a worked computational procedure with a small
   point-group example (e.g. reducing a reducible 6-dim rep of $C_{2v}$),
   the form every physics application uses. Cross-link to `07.02.E1`,
   `12.05.07`, `16.02.01`. **No new unit ID.**

9. **§Master deepening of `16.03.01`/`16.03.02`: crystal-field splitting as subduction $\mathrm{SO}(3)\downarrow G$.** [DEEPEN] ~500 words.
   Add the rep-theoretic derivation: the $(2\ell+1)$-dim $\mathrm{SO}(3)$
   irrep $D^{(\ell)}$ restricted (subduced) to a point group $G$
   decomposes into $G$-irreps, giving the crystal-field level splitting
   (Bethe 1929). Cross-link to `07.07.05`, `07.07.08`, `12.07.05`.
   **No new unit ID.**

**Priority 4 — enrichment / pointers (optional):**

10. **§Originator-prose ENRICH of `12.05.01`, `12.05.03`, `12.15.02`:
    cite Sternberg GTP as a peer pedagogical anchor.** [ENRICH] ~150
    words each. Note GTP Chs. 5–7 as the rigorous-but-physics-motivated
    companion to the existing Sakurai/Wigner anchors; no new content.
    **No new unit ID.**

11. **§Pointer in `07.07.06` Master tier: spin-statistics and the
    particle ↔ Poincaré-irrep dictionary.** [ENRICH] ~400 words. Note
    that the free fields `12.05.04–06` are the field-theoretic
    realisations of the massive/massless Poincaré irreps, and point to
    the spin-statistics theorem (Weinberg §5) as the bridge to QFT.
    **No new unit ID.**

---

## §4 Implementation sketch (P3 → P4)

**Realistic production estimate** (mirroring Serre-LRFG, Sternberg-Curvature
batches):

- Priority 1 (5 deliverables: 4 new units + 1 exercise pack):
  ~3.5–4 hours each = **~18–20 hours.** `07.07.05` SU(2)/SO(3),
  `07.07.06` Wigner-classification, `07.07.07` Mackey-theory,
  `07.02.E1` character-table pack, `12.05.07` molecular-vibrations.
- Priority 2 (2 new units): ~3.5 hours each = **~7 hours.**
  `07.07.08` crystallographic/space groups, `07.07.09` Lorentz reps.
- Priority 3 (2 master deepenings): ~45 min each = **~1.5 hours.**
- Priority 4 (enrichment/pointers): ~2 hours.

**Total: ~28–30 hours for full FT-equivalence coverage of GTP.** Fits a
4–6 day window. **Priority 1 alone (~20 hours, ~2.5 days) raises
effective coverage from ~65% to ~82%** by closing the book's apex
(Wigner classification + Mackey machine) and the two most-distinctive
applied units (molecular vibrations, character-table pack). The
Wigner-classification unit `07.07.06` is the single highest-leverage
deliverable — it is the representation-theoretic foundation of
relativistic particle physics and is referenced (without anchor) wherever
the free fields `12.05.04–06` appear.

**Chapter placement.** The new Part-III/IV/V rep-theory units land in a
new `07-representation-theory/08-physics-applications/` sub-chapter (IDs
`07.07.05–09` continue the existing `07.07.*` harmonic-analysis numbering;
if the renderer prefers a fresh sub-chapter, renumber to `07.08.01–05`
at integration — flag for the integration agent). The molecular-vibration
unit `12.05.07` lands in the existing `12-quantum/05-angular-momentum/`
chapter (or a new `12-quantum/symmetry/` sub-chapter). The
character-table pack `07.02.E1` lands in `07-representation-theory/02-character/`.

**Originator-prose targets** (per `FASTTRACK_EQUIVALENCE_PLAN.md` §10):
- **Wigner 1931/1939** — *Gruppentheorie ...* (Vieweg 1931); *On unitary
  representations of the inhomogeneous Lorentz group* (Ann. Math. 40,
  1939). The founding texts; mandatory in `07.07.06`, `07.07.09`.
  Already cited in `12.05.01`, `12.15.02`, `16.02.01`.
- **Mackey 1949/1951/1952** — the imprimitivity theorem and induced-rep
  machine. Mandatory in `07.07.07`. Already partially cited in `09.03.03`.
- **Weyl 1928** — *Gruppentheorie und Quantenmechanik*. Mandatory in
  `07.07.05`, `07.07.09`.
- **Bethe 1929** — *Termaufspaltung in Kristallen*. For `12.05.07`,
  `07.07.08`, and the `16.03.*` deepening. Already cited (pending) in
  `16.02.01`.
- **Fedorov 1891 / Schoenflies 1891 / Bravais 1850** — the 230
  space groups and 14 Bravais lattices. For `07.07.08`.

**Notation crosswalk.** GTP uses **physics rep-theory notation**:
$D^{(j)}$ for the spin-$j$ $\mathrm{SU}(2)$ irrep (vs. Codex
$V_n$/$L(n)$ for the $\mathfrak{sl}_2$ highest-weight module — record the
$D^{(j)}\leftrightarrow V_{2j}$ correspondence in a §Notation paragraph
of `07.07.05`); Schoenflies symbols ($C_{nv}$, $D_{nh}$, $T_d$, $O_h$)
for point groups (vs. the math-side abstract isomorphism types $A_4$,
$S_4$, $A_5$ — record the crosswalk in `07.02.E1` and `07.07.08`);
Mulliken symbols ($A_1$, $E$, $T_2$, ...) for irreducible-representation
labels in character tables; $(j_1,j_2)$ for Lorentz reps. The new units
should adopt GTP's physics notation while cross-referencing the existing
math-side notation.

**Cross-strand weaving (Pass-W).** New units link laterally to:
- `07.01.07-induced-representation` → `07.07.06`, `07.07.07` are the
  locally-compact continuation; rewrite the finite-group forward-reference.
- `09.03.03-quantum-free-particle-e3` → becomes a worked instance of the
  general Mackey theory `07.07.07` and the non-relativistic shadow of
  `07.07.06`; rewrite its "Mackey machine for $E(n)$" pointer to cite
  the anchor units.
- `12.05.04–06` (free fields) → cite `07.07.06` as the rep-theoretic
  origin of the massive/massless particle content.
- `16.02.01`, `16.03.*`, `16.04.02` (chemistry symmetry / crystal field)
  → cite `07.02.E1`, `12.05.07`, `07.07.08` as the math-side anchors,
  closing the chemistry→math dependency that currently dangles.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and exercise in
  GTP (full P1 audit; deferred until a local PDF is acquired). Coverage
  estimates in §2 are based on GTP's well-documented part structure plus
  spot-checks of the shipped `07-*`, `12.05.*`, and `16.*` units.
- **The pure-math rep-theory core** (finite-group character theory,
  Schur, Maschke, orthogonality, Peter-Weyl, Clebsch-Gordan,
  Wigner-Eckart). Already shipped and covered by the **Serre-LRFG
  (3.15)**, **Fulton-Harris (3.11)**, and **Woit (2.02)** audits and
  the existing `07-representation-theory/` + `12-quantum/05-*` corpora.
  This plan adds only the **physics-application** and **non-compact-group**
  layers GTP is distinctive for.
- **The modular representation theory of finite groups** (Serre LRFG
  Part III — Brauer characters, blocks, the cde-triangle). Shipped via
  the LRFG audit (`07.02.02–06`); orthogonal to GTP, which is entirely
  characteristic-0.
- **Quantum field theory proper** (second quantisation, the
  spin-statistics theorem in full, interacting fields, renormalisation).
  GTP stops at the *single-particle* Wigner classification. The QFT
  realisation is the domain of the **Woit (2.02)**, **Weinberg
  (2.17–2.19)** audits and the shipped `12-quantum/12-canonical-qft/` and
  `08-stat-mech/10-qft/` chapters.
- **Geometric quantisation / coadjoint-orbit method** (Kirillov-Kostant-
  Souriau). The orbit method is the symplectic-geometry cousin of the
  Mackey machine and is shipped via the `05-symplectic/11-geometric-
  quantization/` and `05-symplectic/coadjoint/` chapters and the
  Kirillov character formula (`03.09.25`); GTP touches it only in passing.
- **The detailed crystallography of `International Tables`** (all 230
  space groups individually, Wyckoff positions, systematic absences).
  `07.07.08` gives the classification and the restriction theorem;
  exhaustive tabulation is a reference-data task, not a curriculum unit.
- **Infinite-dimensional unitary reps of non-compact semisimple groups**
  (the Harish-Chandra / Knapp programme, principal/discrete series). GTP
  treats only the Poincaré case via the Mackey machine; the general
  non-compact harmonic analysis is deferred to a hypothetical Knapp /
  Helgason (3.17) audit.

---

## §6 Acceptance criteria for FT equivalence (GTP)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4 / §9, the book is at
equivalence-coverage when:

- The 5 Priority-1 deliverables have shipped (`07.07.05` SU(2)/SO(3),
  `07.07.06` Wigner-classification-of-Poincaré-irreps, `07.07.07`
  Mackey-theory, `07.02.E1` character-table-pack, `12.05.07`
  molecular-vibrations-and-selection-rules). These close the book's apex
  (Part V) and the most-distinctive applied content (Part II).
- ≥95% of GTP's named theorems map to a Babel Bible unit (currently
  ~65%; after Priority-1 ~82%; after Priority-1+2 ~92%; full ≥95%
  requires the Priority-3 deepenings).
- ≥90% of GTP's worked computations have a unit or are cross-referenced:
  specifically the **small-group/point-group character tables** in
  `07.02.E1`, the **$\mathrm{H_2O}$/$\mathrm{CO_2}$ vibrational reduction**
  in `12.05.07`, the **massive-electron and massless-photon Poincaré
  irreps** in `07.07.06`, and the **crystallographic restriction proof**
  in `07.07.08`.
- The **dangling chemistry→math dependency** is closed: the chemistry
  symmetry / crystal-field units `16.02.01`, `16.03.*`, `16.04.02`
  acquire math-side anchors (`07.02.E1`, `12.05.07`, `07.07.08`, the
  `16.03.*` subduction deepening). This is the only acceptance criterion
  requiring edits to existing shipped units (a Pass-W task).
- Notation crosswalk recorded (§4) in `07.07.05` ($D^{(j)}\leftrightarrow
  V_{2j}$), `07.02.E1` (Schoenflies ↔ abstract types), and `07.07.09`
  ($(j_1,j_2)$ Lorentz labels).
- Originator-prose sections (Wigner 1931/1939, Mackey 1949–52, Weyl 1928,
  Bethe 1929, Fedorov/Schoenflies 1891) appear in the relevant new-unit
  Master tiers.

**Equivalence verification protocol** (per §4 of the equivalence plan):
- **4.1 Book-as-input self-check.** Sample 5 random theorem statements
  from GTP; for each, identify the Babel Bible unit. Stress-test Part V
  (the Poincaré-classification sample, the largest gap).
- **4.2 Exercise reproducibility.** Sample 5 GTP exercises, biased toward
  Ch. 3 (character-table reduction), Ch. 4 (vibrational modes), and
  Ch. 10 (Poincaré little groups) to spot-check the punch-list units.
- **4.3 Notation comprehension.** Sample fragments of GTP prose (one per
  part); paraphrase into Codex notation via the §4 crosswalk, checking
  the $D^{(j)}$, Schoenflies, Mulliken, and $(j_1,j_2)$ conventions.

---

## §7 Sourcing

- **Local PDF status.** Not present in
  `reference/fasttrack-texts/01-fundamentals/` at audit time. GTP is a
  commercial CUP title (1994, ISBN 0-521-24870-1 hardcover /
  0-521-55885-9 paperback) and is not author-hosted. **BUY** per the
  Fast Track booklist (row 1.15).
- **Commercial source.** Cambridge University Press; print + CUP ebook.
  Target local placement
  `reference/fasttrack-texts/01-fundamentals/Sternberg-GroupTheoryPhysics.pdf`
  to mirror the pattern of other commercial FT texts.
- **Open-access alternatives covering ~70% of GTP:**
  - P. Woit, *Quantum Theory, Groups and Representations* (free author
    PDF at `www.math.columbia.edu/~woit/QM/qmbook.pdf`; FT 2.02). Covers
    the SU(2)/SO(3) + Poincaré-classification arc rigorously.
  - B. C. Hall, *Quantum Theory for Mathematicians* (Springer GTM 267) —
    Ch. 16–17 cover SU(2) and the Mackey machine for $E(n)$.
  - M. Tinkham, *Group Theory and Quantum Mechanics* (Dover reprint) —
    the canonical source for the molecular-vibration and crystal-field
    character-table applications.
  - J. F. Cornwell, *Group Theory in Physics* (Academic Press) — broad
    coverage of point groups, space groups, and the Poincaré classification.
- **Reduced-audit flag.** This plan was produced *without* a local GTP
  PDF. Coverage estimates in §2 should be re-verified once a PDF is
  acquired, particularly for the Part IV–V chapters (Lorentz/Poincaré
  reps, Mackey theory, the Wigner classification) where the structural
  detail (orbit-and-little-group bookkeeping, the imprimitivity theorem
  statement) is the load-bearing pedagogical content. **Promote to full
  P1 audit when PDF is local.**
