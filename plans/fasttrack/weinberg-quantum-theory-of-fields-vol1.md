# Weinberg — *The Quantum Theory of Fields, Vol. 1: Foundations* (Fast Track 2.17) — Audit + Gap Plan

**Book:** Steven Weinberg, *The Quantum Theory of Fields, Volume 1: Foundations*
(Cambridge University Press 1995, 609 + xxvi pp.). Trade ISBN 0-521-55001-7.

**Fast Track entry:** 2.17 (the canonical mathematical-physics QFT slot of the
Quantum-Theory-and-Statistical-Physics strand; sequel to Woit 2.02 / Chatterjee
2.03 on the free-field side, and partner to Peskin-Schroeder on the interacting
side). Weinberg Vol 2 is FT 2.18 (modern applications / non-Abelian gauge);
Vol 3 is FT 2.19 (supersymmetry).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite
of the orchestration protocol). Output is a concrete punch-list of new units to
write so that Weinberg Vol 1 (WQTFV1 hereafter) is covered to the equivalence
threshold (≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit notice.** No local PDF of Weinberg Vol 1 was located. The three
candidate paths checked — `reference/textbooks-extra/`,
`reference/fasttrack-texts/02-quantum-stat/`, and
`reference/book-collection/free-downloads/` — contain Chatterjee, Sternberg,
Woit, Freed, Landau-Lifshitz Vol 2, and a `weinberg-notes.pdf` (jimmyqin's
notes, not the textbook itself). The Cambridge book is in copyright and is
not offered as a free download by the author. This audit therefore works from
the publisher's chapter-level TOC (via Cambridge Core / Google Books), the
standard physics-canonical section structure of WQTFV1 (well-documented in
review literature and pedagogical references that derive from it — Peskin-
Schroeder, Schwartz, Srednicki), and Weinberg's own published preface remarks.
A full P1 inventory at line-number granularity is deferred to a future pass
once a copy is procured.

This pass is intentionally not a full P1 audit. WQTFV1 is a 609-page
graduate-research treatise that has been the field-defining reference for
thirty years; a complete line-number audit is a multi-week job and is deferred.
This plan works from the published TOC, the preface's explicit programmatic
statement ("The point of view of this book is that quantum field theory is the
way it is because… it is the only way to reconcile the principles of quantum
mechanics with those of special relativity"), and the well-canonised structure
of the central chapters 2–7, produces the gap punch-list, and stops there.

The audit surface here is **comparable to Woit FT 2.02** in scope, with a
critical difference: Woit covers QM-via-rep-theory up through *free* fields;
Weinberg Vol 1 starts at relativistic free fields and ends at one-loop QED
renormalization plus bound-state QED. The shipped Section 2 chapter
(`12-quantum/`) covers Stern-Gerlach (`12.01.02`), Hilbert-space formalism
(`12.02.01`, Cycle 9) and bosonic Fock space (`12.03.01`, Cycle 10) — i.e.
the *non-relativistic* QM substrate and the most elementary half of WQTFV1
Ch. 4–5. **The relativistic, Poincaré-rep-theoretic, S-matrix, renormalization
sides are ~0% covered** in the Codex as of 2026-05-17. Coordinate the
Weinberg unit production with the Woit 2.02 punch-list, since several
critical-priority units — Poincaré-group representations, Wigner
classification, free Dirac / Klein-Gordon quantization — are claimed by both
plans and should be written **once**, anchored to whichever text gives the
cleaner presentation per unit (typically Woit for the rep-theoretic units;
Weinberg for the S-matrix / cluster-decomposition / renormalization units).

---

## §1 What WQTFV1 is for

WQTFV1 is the canonical mathematical-physics QFT text and the field-defining
reference for the post-1980 *axiomatic-Lagrangian* programme. Its central
editorial claim — stated in the preface and executed across chapters 2–5 — is
that **quantum field theory is uniquely determined, up to choice of fields, by
the requirement that one have a quantum mechanical theory consistent with
special relativity and the cluster decomposition principle.** Canonical
quantization is not foundational; it is a derived consequence. Where every
prior generation of QFT text (Bjorken-Drell, Itzykson-Zuber [2]) starts from
the Lagrangian and the canonical commutation relations and motivates fields
as "operator-valued distributions because that's what we get when we quantize
$\phi$," Weinberg inverts the order: build the Poincaré-irreducible one-particle
states first (chapter 2); show that $S$-matrix Lorentz invariance plus cluster
decomposition *forces* the existence of creation/annihilation operators and
hence Fock space (chapters 3–4); show that the *only* way to assemble these
operators into Lorentz-covariant local interactions is the free-field
operator $\psi(x) = \sum (a\, u + a^\dagger v^*)$, with the precise spin /
field-type correspondence (Wigner-Bargmann, plus the spin-statistics theorem)
falling out as a theorem (chapter 5). The Lagrangian, canonical formalism, and
path integral arrive only in chapters 7 and 9, as alternative computational
tools for the *already-derived* theory.

Distinctive contributions, in roughly the order WQTFV1 develops them:

1. **Historical introduction with explicit credit-where-due** (chapter 1).
   Weinberg's Ch. 1 is the canonical reference for who-did-what in QFT
   1925–1949 (Dirac's 1927 radiation theory, Jordan-Wigner 1928 fermion
   quantization, Heisenberg-Pauli 1929–30 covariant QFT, Tomonaga-Schwinger-
   Feynman-Dyson 1947–49 QED renormalization). Distinct from the rest of the
   book in being a 48-page history-of-physics essay; cited across the
   discipline.
2. **Poincaré group representation theory and one-particle states**
   (chapter 2). Wigner's 1939 classification [5] reconstructed with modern
   notation. Little groups for massive ($SO(3)$), massless ($ISO(2)$),
   space-like ($SO(2,1)$), and zero-energy / vacuum orbits; explicit
   construction of massive spin-$j$ and massless helicity-$h$ representations;
   the no-continuous-spin pragmatic exclusion; CPT and Wigner's anti-unitary
   time-reversal.
3. **$S$-matrix from in / out states; Lorentz invariance** (chapter 3).
   Defines the $S$-matrix as the inner product between in and out states
   constructed as wave packets of one-particle states; derives the Lorentz-
   invariance condition $US U^\dagger = S$; introduces the LSZ-style
   asymptotic-condition perspective without canonical quantization machinery;
   crossing symmetry, $CPT$ theorem at the $S$-matrix level. The interaction
   picture and Dyson series for $S$ in chapter 3.5.
4. **Cluster decomposition principle as an independent axiom** (chapter 4).
   Weinberg's central pedagogical innovation: cluster decomposition is the
   requirement that distant experiments factorise. He proves that this
   requirement *forces* the $S$-matrix to be a sum of connected diagrams and
   *forces* the interaction Hamiltonian to be a polynomial in creation /
   annihilation operators — i.e. cluster decomposition produces Fock space
   as a *theorem*, not a postulate. This is the Weinberg-distinctive
   axiomatic move. No other textbook foregrounds it this way; the closest
   peer treatment is Streater-Wightman [4] in the algebraic / Wightman-axiom
   framework, with different machinery.
5. **Quantum fields and antiparticles, derived** (chapter 5). Given Poincaré
   reps (Ch. 2) and Fock space from cluster decomposition (Ch. 4), Weinberg
   constructs the unique Lorentz-covariant local field operators
   $\psi_\ell(x) = \sum_{\sigma, n} [u_\ell(x; p, \sigma, n)\, a(p,\sigma,n)
   + v_\ell(x; p, \sigma, n)\, a^\dagger(p, \sigma, \bar n)]$ by direct
   construction, with antiparticles appearing as a *consequence* of Lorentz
   covariance plus locality (microscopic causality), not as a separate
   postulate. The free scalar, Dirac, and Maxwell fields drop out as the
   $j = 0, 1/2, 1$ cases. Spin-statistics theorem proved as a theorem of
   the construction.
6. **Feynman rules from Dyson series** (chapter 6). Diagrams derived from
   the cluster-decomposition expansion of the $S$-matrix, not from path-
   integral or canonical perturbation. Verifies equivalence with the standard
   rules but emphasises the operator origin.
7. **Canonical formalism as derivation, not foundation** (chapter 7). Only
   here does the Lagrangian / Hamiltonian formalism enter, presented as a
   *recipe* for guaranteeing Lorentz covariance and locality of the
   field-operator construction of Ch. 5 — i.e. canonical quantization is
   *justified* by the axiomatic construction, not assumed.
8. **One-loop QED with renormalization foregrounded** (chapters 11–14).
   Full Ch. 12 on the structure of renormalization (the Bogoliubov-Parasiuk-
   Hepp-Zimmermann theorem appears as the Ch. 12 culmination), Ch. 13 on
   infrared divergences (Bloch-Nordsieck, Kinoshita-Lee-Nauenberg), Ch. 14
   on bound-state QED (Lamb shift, hyperfine, Bethe-Salpeter equation).
   This four-chapter renormalization-and-applications coda is the deepest
   non-Itzykson-Zuber graduate treatment in print.

WQTFV1 is **not** a first introduction to QFT. It assumes the rep-theoretic
machinery covered in Woit 2.02 (FT 2.02) and Sternberg 1.15, the analysis-on-
manifolds machinery covered in `02-analysis/` and `05-symplectic/`, and a
working command of non-relativistic QM. It moves at the pace of a
late-graduate / early-postdoc reference. It is the canonical entry point to
the *axiomatic-Lagrangian* programme — distinct from the *path-integral first*
programme of Peskin-Schroeder [1], the *Wightman-axiomatic* programme of
Streater-Wightman [4], and the *rep-theoretic-Hamiltonian* programme of Woit
[6]. The Fast Track explicitly chains Woit 2.02 → Chatterjee 2.03 → Weinberg
2.17–2.19 as the canonical mathematical-physics QFT path, with Peskin-
Schroeder as the standard-physicist parallel.

Peer sources triangulating Weinberg's distinctive editorial move:

- **[1]** M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum
  Field Theory* (Addison-Wesley 1995) — the dominant graduate physics QFT
  text, contemporary with Weinberg; reverses Weinberg's order by starting
  with canonical quantization of the Klein-Gordon field, then deriving
  Poincaré covariance. Peskin-Schroeder is the canonical "physicist's
  comparison" and is widely paired with Weinberg in graduate curricula.
- **[2]** C. Itzykson and J.-B. Zuber, *Quantum Field Theory* (McGraw-Hill
  1980; Dover reprint 2006) — the canonical pre-Weinberg graduate text;
  Lagrangian-canonical first, with rigorous renormalization treatment. The
  text Weinberg's Vol 1 was explicitly meant to supersede.
- **[3]** S. Weinberg, *Lectures on Quantum Mechanics*, 2nd ed. (Cambridge
  2015) — the prerequisite Weinberg himself wrote; covers the
  Stone-von-Neumann / Heisenberg / scattering material that WQTFV1 assumes.
- **[4]** R. F. Streater and A. S. Wightman, *PCT, Spin and Statistics, and
  All That* (Benjamin 1964; Princeton Landmarks reprint 2000) — the
  rigorous-axiomatic counterpart to Weinberg's pragmatic-axiomatic
  programme; proves the spin-statistics and PCT theorems from the Wightman
  axioms (operator-valued distributions on a Poincaré-covariant vacuum)
  whereas Weinberg proves them constructively from Poincaré reps + cluster
  decomposition. Reading both in parallel is the canonical mathematical-
  physics path.
- **[5]** E. P. Wigner, "On unitary representations of the inhomogeneous
  Lorentz group," *Ann. Math.* 40 (1939) 149–204 — the originator of
  WQTFV1 Ch. 2. Weinberg's notation closely follows Wigner's 1939 paper.
- **[6]** P. Woit, *Quantum Theory, Groups and Representations: An
  Introduction* (Springer 2017) — FT 2.02, the math-facing alternative
  derivation of QFT-as-rep-theory; covers the non-relativistic side
  comprehensively, ends at the door of Weinberg-style Poincaré reps and
  Wigner classification (Woit Ch. 42). Direct prerequisite for WQTFV1.
- **[7]** M. Srednicki, *Quantum Field Theory* (Cambridge 2007) — the
  pedagogically modernised Weinberg-style text; preserves the Poincaré-rep-
  first ordering but with shorter, more student-facing exposition. Hosted
  free as a pre-publication draft by the author at UCSB.

---

## §2 Coverage table (Codex vs WQTFV1)

Cross-referenced against the current corpus as of 2026-05-17. The shipped
`12-quantum/` chapter contains three units: `12.01.02` (Stern-Gerlach),
`12.02.01` (Hilbert-space formalism, Cycle 9), and `12.03.01` (bosonic Fock
space, Cycle 10 per task brief — note: filesystem at audit time shows only
`12.01.02` and `12.02.01`; `12.03.01` is presumed in-flight or recently
landed and not yet committed). Cross-referenced also against the WQGR
(Woit FT 2.02) punch-list; where Woit and Weinberg both claim a unit, the
unit ID below uses the Woit `09.*` namespace if the punch-list already
exists, or the new `12.*` extension namespace if the Section 2 chapter
re-routing has taken effect. **Coordinate ID assignment with Woit audit
during P3 planning.**

✓ = covered, △ = partial / different framing, ✗ = not covered.

| WQTFV1 chapter / topic | Codex unit(s) | Status | Note |
|---|---|---|---|
| **Ch. 1** — Historical introduction (Dirac 1927, Jordan-Wigner 1928, Heisenberg-Pauli 1929–30, Fermi 1932, Tomonaga-Schwinger-Feynman-Dyson 1947–49) | — | ✗ | **Gap.** Optional / historical; possible chapter intro. |
| **Ch. 2.1** — Inhomogeneous Lorentz group / Poincaré group; Lie algebra | `03.03.03-orthogonal-group`, `03.04.01-lie-algebra` adjacent | △ | Orthogonal/Lie machinery present; the Poincaré group as a semi-direct product $ISO(3,1) = \mathbb{R}^{1,3} \rtimes O(3,1)$ not a unit. **Shared with Woit Ch. 40.** |
| **Ch. 2.2–2.4** — One-particle states; massive and massless reps via the little group | — | ✗ | **Gap (CRITICAL).** Wigner 1939 classification. Shared with Woit Ch. 42. |
| **Ch. 2.5–2.6** — Space inversion and time reversal; Wigner's anti-unitary $T$ | — | ✗ | **Gap.** |
| **Ch. 2.7** — Projective representations and central extensions | `07.07.01-compact-lie-group-representation` adjacent | △ | Projective-rep concept absent; Bargmann 1954 result not a unit. |
| **Ch. 3.1–3.3** — In and out states; $S$-matrix; Lorentz invariance of $S$ | — | ✗ | **Gap (CRITICAL).** |
| **Ch. 3.4** — Interaction picture and Dyson series for $S$ | — | ✗ | **Gap.** Weinberg's version is operator-theoretic; standard treatment also in Peskin-Schroeder Ch. 4. |
| **Ch. 3.5–3.7** — Implications of unitarity; partial waves; resonances | — | ✗ | **Gap.** Optical theorem; partial-wave decomposition. |
| **Ch. 3.8** — Crossing symmetry | — | ✗ | **Gap.** |
| **Ch. 4** — Cluster decomposition principle; connected $S$-matrix; creation/annihilation operators *forced* | `12.03.01-bosonic-fock-space` (presumed Cycle 10) | △ | Bosonic Fock space landed (per task brief); the *cluster-decomposition derivation* of $a, a^\dagger$ — Weinberg's signature axiomatic move — is not the framing of `12.03.01`, which is presumed to follow the standard "given Hilbert space $H$, define $\mathcal{F}(H) = \bigoplus_n \mathrm{Sym}^n H$" route. A dedicated cluster-decomposition unit is the load-bearing Weinberg-Vol-1-specific gap. |
| **Ch. 5.1–5.3** — Constructing Lorentz-covariant fields from creation/annihilation operators; coefficient functions $u, v$ | — | ✗ | **Gap (CRITICAL).** |
| **Ch. 5.4–5.5** — Causal scalar field; antiparticles from microscopic causality | — | ✗ | **Gap (CRITICAL).** |
| **Ch. 5.6** — Spin-statistics connection (constructive proof) | — | ✗ | **Gap.** Streater-Wightman provides the axiomatic-proof companion. |
| **Ch. 5.7** — Causal Dirac field; $\gamma$-matrices in Weinberg conventions | `03.09.08-dirac-operator`, `03.09.02-clifford-algebra` | △ | Geometric Dirac operator on a spin manifold ✓; the quantum *Dirac field* as a Lorentz-covariant operator-valued distribution is not. Shared with Woit Ch. 47. |
| **Ch. 5.8** — General irreducible representations; massless particles | — | ✗ | **Gap.** |
| **Ch. 5.9** — Causal vector fields; the photon and the Proca field | — | ✗ | **Gap.** Shared with Woit Ch. 46. |
| **Ch. 6** — Feynman rules from Dyson series; momentum-space rules; external lines; propagators | — | ✗ | **Gap (CRITICAL — entry to perturbation theory).** |
| **Ch. 7** — Canonical formalism; equal-time commutators; Lagrangian and Hamiltonian densities; constrained quantization | `05.00.04-noether-theorem`, `08.07.01-path-integral` adjacent | △ | Classical Noether + path-integral shipped in stat-mech / classical context; the QFT-specific equal-time canonical commutator structure not a unit. |
| **Ch. 8** — Electrodynamics; gauge invariance; quantization of EM field in Coulomb gauge; soft photons | `03.07.05-yang-mills-action` adjacent | △ | Yang-Mills action at the geometric level ✓; QED-specific quantization not. Shared with Woit Ch. 46. |
| **Ch. 9** — Path-integral methods; functional integrals for bosonic and fermionic fields; Faddeev-Popov for gauge fields | `08.07.01-path-integral` | △ | Stat-mech path integral shipped; the *field-theoretic* path integral and Faddeev-Popov ghost machinery not. |
| **Ch. 10** — Non-perturbative methods; Schwinger-Dyson; pole structure; dispersion relations | — | ✗ | **Gap.** |
| **Ch. 11** — One-loop QED radiative corrections: electron self-energy, vertex, vacuum polarization; anomalous magnetic moment $(g - 2)$ | — | ✗ | **Gap.** The $(g-2)$ calculation is iconic. |
| **Ch. 12** — General renormalization theory; degree of divergence; BPHZ theorem; renormalizability classification | — | ✗ | **Gap (CRITICAL — defines what "renormalizable" means).** |
| **Ch. 13** — Infrared effects; Bloch-Nordsieck; Kinoshita-Lee-Nauenberg | — | ✗ | **Gap.** |
| **Ch. 14** — Bound states in external fields; Bethe-Salpeter equation; Lamb shift; hyperfine structure | — | ✗ | **Gap.** Bethe 1947 Lamb-shift originator-citation. |

**Aggregate coverage estimate:** **~5% of WQTFV1 has corresponding Codex units**
(partial credit on Ch. 2.1, 5.7, 7, 8, 9 via the geometric / rep-theoretic
prerequisites, plus the freshly-landed `12.03.01` covering the *output* of
Weinberg Ch. 4 even if not its *derivation*). The relativistic, S-matrix,
renormalization, and bound-state sides — chapters 2–6 and 10–14, i.e.
~470 of 609 pages — are **~0% covered**. Coverage at the chapter-level is
far below the 80% "already shipped" threshold — this is **not** a
flag-as-mostly-done book; it is one of the two largest open Section 2 gaps
(the other being Woit FT 2.02, with which this audit's punch-list heavily
overlaps).

**Overlap with Woit FT 2.02 punch-list — coordination required:** The Woit
plan (`woit-quantum-theory-groups-representations.md`) §3 enumerates 34
gap units, of which the following are **substantively the same unit** as a
Weinberg gap below and must be written **once**, not twice:

- Woit `09.05.01` Poincaré group / Lie algebra ≡ Weinberg gap "Ch. 2.1".
- Woit `09.05.02` Wigner classification ≡ Weinberg gap "Ch. 2.2–2.4".
- Woit `09.05.03` Lorentz rep / Dirac $\gamma$ ≡ Weinberg gap "Ch. 2 + 5.7".
- Woit `09.06.01` Klein-Gordon free scalar field ≡ Weinberg gap "Ch. 5.4".
- Woit `09.06.02` Dirac equation / spin-1/2 fields ≡ Weinberg gap "Ch. 5.7".
- Woit `09.06.03` second quantization / multi-particle ≡ Weinberg gap "Ch. 4"
  (different framing — see below).
- Woit `09.06.05` $U(1)$ gauge / photon quantization ≡ Weinberg gap "Ch. 8".

These seven shared units should be written with a "Master tier anchored on
Woit Ch. N; alternate Master section anchored on Weinberg Ch. N" structure,
so that both readings are supported by the same unit. The seven Weinberg-
specific units that have **no Woit counterpart** are the load-bearing
distinctively-Weinberg additions: cluster decomposition derivation (Ch. 4),
$S$-matrix theory (Ch. 3), Feynman rules from Dyson series (Ch. 6),
non-perturbative methods (Ch. 10), one-loop QED (Ch. 11), general
renormalization theory (Ch. 12), infrared / Bloch-Nordsieck (Ch. 13), and
bound-state QED (Ch. 14).

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

**Priority 0 — structural / prerequisite:**

- **The Section 2 chapter directory `content/12-quantum/` exists** (Cycles
  9–10 unblock). Most new units below land here. A few belong in
  `07-representation-theory/` (the Poincaré-rep units) or `03-modern-geometry/`
  (the Minkowski-space / Lorentz-group units).
- **Coordinate ID assignment with the Woit FT 2.02 punch-list** before
  writing the seven shared units above. The Woit plan assumes a new
  `09-quantum-mechanics/` directory; the Codex has since shipped `12-quantum/`
  instead. Decide whether the seven shared units land at `09.*` or `12.*`,
  retrofit the Woit plan accordingly. (Recommendation: use `12.*` to match
  the shipped directory.)
- **Procure a Weinberg Vol 1 reference copy** for the production team before
  writing the renormalization chapters (Ch. 11–14 in particular). The
  one-loop and BPHZ material is technical enough that a TOC-only audit cannot
  reliably guide unit-level structure. Without a PDF, Ch. 11–14 punch-list
  items below are *placeholders only*.

**Priority 1 — high-leverage, captures Weinberg's central content (12 units):**

1. **`12.05.01` Poincaré group and its Lie algebra.** Semi-direct product
   structure, Lie-algebra commutators, Casimir invariants ($P^2$, $W^2$).
   WQTFV1 §2.4 + Woit §40 anchor. **Shared with Woit `09.05.01`.**
2. **`12.05.02` Wigner classification of unitary irreducible representations
   of the Poincaré group: little groups and orbits in momentum space.**
   Massive ($SO(3)$), massless ($ISO(2)$, helicity quantization), space-like
   ($SO(2,1)$), zero-momentum. WQTFV1 §2.5 + Woit §42 anchor. CRITICAL.
   **Shared with Woit `09.05.02`.**
3. **`12.05.03` Space inversion and time reversal; anti-unitary
   representations; CPT.** WQTFV1 §2.6–2.7 anchor. Master-only treatment of
   Wigner's anti-unitary $T$.
4. **`12.05.04` Free Klein-Gordon scalar quantum field.** Construction from
   one-particle states; mode expansion; equal-time commutators; propagator.
   WQTFV1 §5.2 + Woit §43 anchor. **Shared with Woit `09.06.01`.**
5. **`12.05.05` Free Dirac spin-1/2 quantum field.** $\gamma$-matrices in
   Weinberg conventions, $u, v$ spinors, anticommutators, antiparticles.
   WQTFV1 §5.5 + Woit §47 anchor. **Shared with Woit `09.06.02`.**
6. **`12.05.06` Free Maxwell / massive vector fields; photon and Proca.**
   Polarization vectors, gauge fixing at the free-field level, Stuckelberg.
   WQTFV1 §5.9 + Woit §46 anchor. **Shared with Woit `09.06.05`.**
7. **`12.06.01` $S$-matrix: in and out states; definition; Lorentz invariance
   condition $USU^\dagger = S$.** WQTFV1 §3.1–3.3 anchor. CRITICAL —
   foundational for everything after. **Weinberg-distinctive.**
8. **`12.06.02` Cluster decomposition principle; connected $S$-matrix;
   creation and annihilation operators forced by cluster decomposition.**
   WQTFV1 Ch. 4 anchor. **The signature Weinberg-Vol-1 unit.** This is the
   one unit that no other Section 2 audit produces. Master-tier required,
   Intermediate tier covers the *statement* of the principle and the
   *conclusion* (Fock space forced); Beginner tier sketches the cluster
   principle by analogy with classical statistical mechanics
   (`08-stat-mech` cluster expansion). **Weinberg-distinctive.**
9. **`12.06.03` Spin-statistics theorem: constructive proof from causal
   field construction.** WQTFV1 §5.7 anchor with Streater-Wightman §4
   axiomatic-proof companion as alternate Master section. CRITICAL.
10. **`12.06.04` Crossing symmetry; CPT theorem at the $S$-matrix level.**
    WQTFV1 §3.8 + §5.8 anchor. The constructive CPT theorem; cite Lüders
    1954, Pauli 1955 as originators.
11. **`12.06.05` Feynman rules from the Dyson series; momentum-space rules;
    propagators; external-line wave functions.** WQTFV1 Ch. 6 anchor. The
    operator-origin derivation, paired with Peskin-Schroeder Ch. 4 as the
    Lagrangian-origin alternate.
12. **`12.06.06` Interaction picture and Dyson series for $S$;
    time-ordered products and Wick's theorem.** WQTFV1 §3.5 anchor. Often
    folded into 11 above; keep separate for prerequisite chaining from
    `12.02.01`.

**Priority 2 — canonical formalism, path integrals, QED basics (8 units):**

13. **`12.07.01` Canonical formalism for free fields: equal-time
    commutators; Lagrangian and Hamiltonian densities; constrained
    quantization (constraint surface, Dirac brackets).** WQTFV1 Ch. 7
    anchor. Bridges to `05-symplectic/` constraint-surface machinery.
14. **`12.07.02` Field-theoretic path integral: bosonic and fermionic
    integrals; Berezin integration; Gaussian QFT.** WQTFV1 §9.1–9.4 anchor.
    Extends `08.07.01-path-integral` (stat-mech) to field theory.
15. **`12.07.03` Faddeev-Popov gauge-fixing and ghost fields for
    non-Abelian gauge theory.** WQTFV1 §9.5 anchor (introductory) +
    forward pointer to Weinberg Vol 2 Ch. 15 (the full treatment) at FT
    2.18.
16. **`12.07.04` Quantization of the EM field; photon propagator;
    Coulomb gauge vs covariant gauge.** WQTFV1 Ch. 8 anchor. **Shared with
    Woit `09.06.05`.**
17. **`12.07.05` Soft photons and the eikonal / Bloch-Nordsieck phenomenon
    (preview).** WQTFV1 §8.4 anchor; full treatment deferred to unit 23.
18. **`12.07.06` Non-perturbative methods: Schwinger-Dyson equations;
    Källén-Lehmann spectral representation; dispersion relations.**
    WQTFV1 Ch. 10 anchor. Master-tier; Intermediate tier covers the
    Källén-Lehmann statement only.
19. **`12.08.01` One-loop QED: electron self-energy and mass
    renormalization; the photon self-energy and charge renormalization;
    vertex correction; anomalous magnetic moment $(g-2)$ at one loop.**
    WQTFV1 Ch. 11 anchor. **The iconic Schwinger 1948 calculation.**
    Originator: Schwinger 1948 *Phys. Rev.* 73, 416.
20. **`12.08.02` General renormalization theory: power counting and degree
    of divergence; renormalizability classification (super-renormalizable,
    renormalizable, non-renormalizable); BPHZ theorem statement.** WQTFV1
    Ch. 12 anchor. CRITICAL conceptual unit. Originators: Bogoliubov-
    Parasiuk 1957, Hepp 1966, Zimmermann 1969.

**Priority 3 — depth / completion (6 units):**

21. **`12.06.07` Optical theorem and unitarity bounds; partial-wave
    decomposition.** WQTFV1 §3.6 anchor.
22. **`12.07.07` Effective field theory perspective: Weinberg's "folk
    theorem" that all QFTs are EFTs.** WQTFV1 preface + Weinberg 1979
    *Physica A* 96, 327 ("Phenomenological Lagrangians"). A Codex-flavored
    survey unit; pointer toward FT 2.18 / Vol 2.
23. **`12.08.03` Infrared divergences: Bloch-Nordsieck cancellation;
    Kinoshita-Lee-Nauenberg theorem.** WQTFV1 Ch. 13 anchor.
24. **`12.08.04` Bound states in external fields: Bethe-Salpeter equation;
    Lamb shift; hyperfine structure of hydrogen.** WQTFV1 Ch. 14 anchor.
    Bethe 1947 *Phys. Rev.* 72, 339 originator-citation for the Lamb-shift
    calculation.
25. **`12.05.07` Projective representations of the Poincaré group;
    Bargmann's theorem; central extensions and the role of $\mathrm{Spin}(3,1)
    = SL(2,\mathbb{C})$.** WQTFV1 §2.7 anchor + Bargmann 1954 *Ann. Math.*
    59, 1 originator.
26. **`12.06.08` Historical introduction unit: Dirac 1927 radiation theory,
    Jordan-Wigner 1928 fermion quantization, Heisenberg-Pauli 1929–30
    covariant QFT, Tomonaga-Schwinger-Feynman-Dyson 1947–49 renormalization.**
    WQTFV1 Ch. 1 anchor; intentionally written as a survey/history unit
    to anchor originator-citations for the rest of the chapter.

**Priority 4 — survey pointers (Master-only, optional, 3 units):**

27. **`12.09.01` Pointer to Streater-Wightman axioms; Wightman functions
    and reconstruction theorem.** Bridges to the mathematical-physics
    axiomatic-QFT track.
28. **`12.09.02` Pointer to algebraic QFT (Haag-Kastler) and modular
    theory.** Survey only.
29. **`12.09.03` Pointer to constructive QFT (Glimm-Jaffe, Osterwalder-
    Schrader); forward pointer to FT 2.18 (Vol 2 / non-Abelian gauge) and
    FT 2.19 (Vol 3 / SUSY).** Survey only.

**Total new-unit punch-list count: 29 units** (12 priority-1 +
8 priority-2 + 6 priority-3 + 3 priority-4). Of these, **7 are shared with
the Woit FT 2.02 punch-list** and must be written exactly once. Net new
Weinberg-distinctive units: **22.** Comparable in scale to Woit (34) and
larger than Brown-Higgins-Sivera (10).

**Notation crosswalk requirements** (record as §Notation paragraphs in the
new units):

- Weinberg uses $\eta_{\mu\nu} = \mathrm{diag}(-1, +1, +1, +1)$ (mostly-plus
  metric). Peskin-Schroeder and Woit use $\eta_{\mu\nu} = \mathrm{diag}(+1,
  -1, -1, -1)$ (mostly-minus). The Codex must pick *one* and provide a
  conversion box in `12.05.01`. Recommend mostly-plus (Weinberg + Misner-
  Thorne-Wheeler + most GR texts) to match the `04-relativity/` chapter
  forthcoming convention. Add a §Notation paragraph in `12.05.01` and a
  forward-pointer footnote in every relativistic-physics unit thereafter.
- Weinberg writes $a(p, \sigma, n)$ for the annihilation operator with
  three-momentum $p$, spin/helicity label $\sigma$, and particle-species
  label $n$. Woit and Peskin-Schroeder use $a_p$ with implicit other labels.
  Adopt Weinberg's three-label notation; document in `12.06.02`.
- Weinberg's $\gamma$-matrices: $\{\gamma^\mu, \gamma^\nu\} = -2\eta^{\mu\nu}$
  in mostly-plus, so $(\gamma^0)^2 = +1$ and $(\gamma^i)^2 = -1$. The
  Codex spin-geometry chapter `03-modern-geometry/09-spin/` uses
  $\{\gamma^a, \gamma^b\} = 2\delta^{ab}$ (Euclidean). Add a Wick-rotation
  paragraph in `12.05.05`.

---

## §4 Implementation sketch (P3 → P4)

For a full WQTFV1 coverage pass, items 1–12 (priority-1) are the minimum
set, contingent on (a) the Woit FT 2.02 punch-list being run in parallel
or in sequence (to share the seven joint units) and (b) procuring a Vol 1
PDF or print copy for the production team. Realistic production estimate:

- **~4–5 hours per unit** for the relativistic-rep-theoretic and
  free-field units (1–6) — they require careful Wigner-notation alignment,
  three-tier presentation, and worked examples (massive spin-$j$ for
  $j = 0, 1/2, 1$; massless helicity-$h$ for $h = 1$ photon, $h = 2$
  graviton).
- **~5–6 hours per unit** for the cluster-decomposition / $S$-matrix /
  Feynman-rules units (7–12) — these are Weinberg's signature material
  and have no clean precedent in the corpus; Master tier requires the
  operator-origin derivation.
- **~3–4 hours per unit** for the canonical / path-integral / QED units
  (13–17, 19) — closer to standard physics texts; bridge cleanly to
  Peskin-Schroeder.
- **~6–8 hours per unit** for the renormalization-theory units (18, 20, 23) —
  these are deep technical material; BPHZ in particular requires careful
  Master-tier treatment.
- **~3 hours per unit** for the survey / pointer units (24–29).

Total priority-1 ≈ 50–60 hours of focused production. Plus priority-2
≈ 35–40 hours. Plus priority-3 ≈ 30 hours. Plus priority-4 ≈ 10 hours.
**Full pass ≈ 130–140 hours**; the 7 shared-with-Woit units save ≈ 30
hours of duplicate work, netting ≈ 100–110 hours of Weinberg-specific
production. Fits a focused 3–4 week window with the production team that
has been shipping Section 2 in Cycles 9–10.

**Originator-prose targets.** WQTFV1 has multiple originator-prose anchors;
the Codex should carry originator-prose treatment per
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §10 in the following:

- Units 1, 2, 25 — anchor on Wigner 1939 *Ann. Math.* 40, 149 (Poincaré
  reps + little-group classification). The Wigner paper is the canonical
  originator-prose anchor for Ch. 2 of WQTFV1.
- Units 7, 8, 9, 10 — anchor on Weinberg himself: WQTFV1 is the
  originator-prose source for the cluster-decomposition derivation of QFT;
  use direct quotation from WQTFV1 preface and §4.1 in the §Originator
  paragraphs.
- Unit 4 — anchor on Dirac 1927 *Proc. Roy. Soc. A* 114, 243 (radiation
  theory; first quantum field).
- Unit 5 — anchor on Jordan-Wigner 1928 *Z. Phys.* 47, 631 (fermion
  anticommutation).
- Unit 19 — anchor on Schwinger 1948 *Phys. Rev.* 73, 416 (electron $g-2$);
  Tomonaga 1946 *Prog. Theor. Phys.* 1, 27; Feynman 1949 *Phys. Rev.* 76,
  769; Dyson 1949 *Phys. Rev.* 75, 486.
- Unit 20 — anchor on Bogoliubov-Parasiuk 1957 *Acta Math.* 97, 227; Hepp
  1966 *Comm. Math. Phys.* 2, 301; Zimmermann 1969 *Comm. Math. Phys.* 15,
  208 (BPHZ).
- Unit 24 — anchor on Bethe 1947 *Phys. Rev.* 72, 339 (Lamb shift).
- Unit 23 — anchor on Bloch-Nordsieck 1937 *Phys. Rev.* 52, 54;
  Kinoshita 1962 *J. Math. Phys.* 3, 650; Lee-Nauenberg 1964 *Phys. Rev.*
  133, B1549.

---

## §5 What this plan does NOT cover

- A line-number-level inventory of every named theorem and equation in
  WQTFV1 (full P1 audit; deferred until a PDF/print copy is procured for
  the production team — see Priority 0 above).
- **Weinberg Vol 2: Modern Applications** (1996). Non-Abelian gauge
  theory, spontaneous symmetry breaking, anomalies, lattice gauge theory.
  Deferred to **FT 2.18 audit** (separate audit cycle).
- **Weinberg Vol 3: Supersymmetry** (2000). SUSY algebras, super-fields,
  SUSY gauge theory, supergravity. Deferred to **FT 2.19 audit**.
- The full BPHZ proof at the algebraic-graph-theoretic level. Unit 20
  carries the *statement* and the power-counting / degree-of-divergence
  machinery; the forest-formula proof is a Master-tier-deepening that can
  be added as a §Master section in a later cycle without a new unit.
- The Bethe-Salpeter equation in full generality. Unit 24 carries the
  hydrogen Lamb-shift application; the bound-state formalism for
  arbitrary external fields is a Vol 1 Ch. 14 deepening that can be
  added later.
- Exercise-pack production. WQTFV1 contains no exercises (Weinberg's
  preface notes: "I have given no exercises… exercises and worked
  examples in the textbook genre that this book is not"). The Codex
  exercise pack for these units should be drawn from Peskin-Schroeder
  problems and Srednicki problems, both of which are well-aligned with
  the WQTFV1 chapter order from chapter 5 onward.
- A comparison with Bjorken-Drell *Relativistic Quantum Mechanics* /
  *Relativistic Quantum Fields* (McGraw-Hill 1964–65). Bjorken-Drell is
  the prior generation's canonical text and is not on the Fast Track.
- A comparison with Folland *Quantum Field Theory: A Tourist Guide for
  Mathematicians* (AMS 2008), which would be a natural mathematician-
  facing companion to WQTFV1 but is not on the Fast Track as of 2026-05-17
  (candidate for future addition).

---

## §6 Acceptance criteria for FT equivalence (WQTFV1)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- A Vol 1 print/PDF copy is available to the production team (Priority 0
  prereq).
- The Woit FT 2.02 punch-list priority-1 units have shipped (strict
  prereq for the seven shared units).
- The Codex `12-quantum/` chapter contains `12.03.01` (bosonic Fock
  space) as a deployed unit, not just in-flight (current uncertainty per
  filesystem audit).
- ≥95% of WQTFV1's named theorems and worked calculations in chapters
  2–6 map to Codex units (currently ~0%; after priority-1 units this
  rises to ~75%; after priority-1+2 to ~88%; full ≥95% requires
  priority-3 + selective priority-4).
- ≥90% of WQTFV1's worked computations in chapters 2–11 have a direct
  unit or are referenced from a unit that covers them. Note: chapters
  12–14 (renormalization, infrared, bound states) are the deepest
  technical material; acceptance threshold for these chapters is
  relaxed to ≥80% (full coverage requires substantial Vol 2 / Vol 3
  context that arrives at FT 2.18 / 2.19).
- Notation decisions (metric signature, $\gamma$-conventions, operator
  labels) are recorded — see §3 Notation crosswalk.
- Pass-W weaving connects the new units to:
  - `12-quantum/02-formalism/` (Hilbert-space, Schrödinger, Fock) for
    the QM substrate;
  - `07-representation-theory/` (compact-Lie reps, Lie-algebra reps)
    for the rep-theoretic substrate;
  - `03-modern-geometry/09-spin/` (Clifford / Spin / Dirac operator)
    for the geometric Dirac substrate;
  - `05-symplectic/` (constraint surfaces, moment map) for the
    constrained-quantization substrate;
  - the Woit FT 2.02 punch-list for the shared seven units;
  - forward-pointers to Weinberg Vol 2 (FT 2.18) and Vol 3 (FT 2.19) at
    the chapter-end of Master tiers.
- Cross-references to Peskin-Schroeder, Srednicki, and Streater-Wightman
  in every Master tier of priority-1 units (these are the three canonical
  parallel readings).

The 12 priority-1 units close most of the equivalence gap, contingent on
the Woit prereqs being in place. Priority-2 closes the canonical /
path-integral / QED-basics side. Priority-3+4 are deepenings.

---

## §7 Sourcing

- **Cost.** WQTFV1 is in copyright (Cambridge University Press 1995). New
  hardcover ~$95 USD; paperback ~$60 USD; Cambridge Core institutional
  e-book access via subscription.
- **License.** All rights reserved, Cambridge University Press.
- **Local copy.** None currently. The three candidate paths
  (`reference/textbooks-extra/`, `reference/fasttrack-texts/02-quantum-stat/`,
  `reference/book-collection/free-downloads/`) contain Chatterjee, Sternberg,
  Woit, Freed, Landau-Lifshitz Vol 2, and a `weinberg-notes.pdf`
  (jimmyqin's lecture notes, **not** the textbook). Cover image at
  `reference/fast-track/images/Weinberg-Fields-Vol1-712x1024__9566917e4d.jpg`.
- **Procurement.** Add to the production team's required-reference list;
  procure print copy or institutional Cambridge Core access before
  beginning priority-1 unit production. Until then, this audit is
  REDUCED (TOC + canonical-section-structure + secondary-source
  derivation only).
- **Open-access alternatives for cross-reference** (legally free):
  - **Srednicki**, *Quantum Field Theory* (Cambridge 2007) — pre-publication
    draft hosted at <https://web.physics.ucsb.edu/~mark/qft.html>. Same
    Poincaré-reps-first ordering as WQTFV1.
  - **Peskin-Schroeder errata and notes** at
    <https://www.slac.stanford.edu/~mpeskin/QFT.html>.
  - **Tong's QFT lecture notes** at
    <https://www.damtp.cam.ac.uk/user/tong/qft.html>.
  - **Coleman's lecture notes** (transcribed) at the arXiv (1110.5013).
  None of these *replaces* WQTFV1 for the cluster-decomposition / S-matrix
  / Feynman-from-Dyson material — that material is genuinely
  Weinberg-distinctive — but they suffice as Master-tier alternate anchors
  for the free-field and one-loop-QED units while Vol 1 is being procured.
