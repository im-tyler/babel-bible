# Weinberg — *The Quantum Theory of Fields, Vol. 2: Modern Applications* (Fast Track 2.18) — Audit + Gap Plan

**Book:** Steven Weinberg, *The Quantum Theory of Fields, Volume 2: Modern
Applications* (Cambridge University Press 1996, 489 + xxi pp.). Trade ISBN
0-521-55002-5.

**Fast Track entry:** 2.18 (the non-Abelian-gauge / modern-applications volume
of the canonical mathematical-physics QFT slot; direct sequel to Vol 1 = FT
2.17; followed by Vol 3 / supersymmetry = FT 2.19). Partner texts: Peskin-
Schroeder Part III, Schwartz Part IV, Coleman *Aspects of Symmetry*.

**Plan status:** audited / gap-analysed (REDUCED).

**Purpose of this plan:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite
of the orchestration protocol). Output is a concrete punch-list of new units to
write so that Weinberg Vol 2 (WQTFV2 hereafter) is covered to the equivalence
threshold (≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**REDUCED audit notice.** No local PDF of Weinberg Vol 2 was located; the same
three candidate paths checked for the Vol 1 audit
(`reference/textbooks-extra/`, `reference/fasttrack-texts/02-quantum-stat/`,
`reference/book-collection/free-downloads/`) hold Chatterjee, Sternberg, Woit,
Freed, Landau-Lifshitz, and `weinberg-notes.pdf` (jimmyqin's notes), none of
which is the Vol 2 textbook. The Cambridge book is in copyright. This audit
works from the publisher's chapter-level TOC (Cambridge Core / Google Books),
the well-canonised structure of chapters 15–23 (documented across Peskin-
Schroeder, Schwartz, Coleman, Tong's gauge-theory and standard-model notes),
and Weinberg's own preface remarks. A full P1 line-number inventory is deferred
until a copy is procured.

**Material difference from the Vol 1 audit.** The Vol 1 audit (2026-05-17) was
written when `content/12-quantum/` held three units and Section 2 was ~5%
covered. **The corpus has since grown substantially.** As of this audit
(2026-06-01) `12-quantum/` has 17 chapter-directories and ~60 units, and —
critically for Vol 2 — the **geometry side already carries a large fraction of
WQTFV2's load-bearing content**: BRST/Faddeev-Popov, anomalies-via-index-
theorem, the full instanton / ASD / theta-sector machinery, lattice gauge
theory, the Wilsonian RG, and spontaneous symmetry breaking are all shipped, in
`03-modern-geometry/07-gauge-theory/`, `08-stat-mech/`, and `11-stat-mech-
physics/`. **Vol 2 is therefore the best-covered of the three Weinberg volumes
at audit time** — but the coverage is *geometric / statistical-mechanical in
framing*, not Weinberg's *QFT-Lagrangian-in-a-Lorentzian-spacetime* framing,
and several genuinely load-bearing QFT-specific items (the Higgs mechanism, the
operator product expansion, asymptotic freedom as a gauge-coupling beta
function, theta-vacua as a QFT vacuum-angle, monopoles/solitons as quantum
soliton sectors) are **genuine gaps**. This audit honestly separates the two.

---

## §1 What WQTFV2 is for

WQTFV2 is the canonical graduate treatment of the *modern* (post-1971) content
of quantum field theory: everything that turns the free-and-perturbative
machinery of Vol 1 into the Standard Model. Where Vol 1 derives QFT from
Poincaré symmetry + cluster decomposition, Vol 2 takes the machinery as given
and builds the four pillars of modern gauge theory:

1. **The renormalization group, Wilsonian** (Ch. 18). Weinberg's RG chapter is
   the field-theoretic (as opposed to critical-phenomena) presentation: the
   running of couplings with scale, the Callan-Symanzik equation, the
   Gell-Mann-Low function, fixed points, and — the iconic result —
   **asymptotic freedom of non-Abelian gauge theories** (the negative beta
   function, Gross-Wilczek-Politzer 1973). The Wilsonian effective-action
   perspective (integrate out high momenta, flow the couplings) is the
   conceptual frame.

2. **Non-Abelian gauge theories and their quantization** (Ch. 15, 17). The
   construction of Yang-Mills theory from local gauge invariance; the
   gauge-field Lagrangian $-\tfrac14 F^a_{\mu\nu}F^{a\,\mu\nu}$; the problem
   that naive path-integral quantization overcounts gauge-equivalent
   configurations; the **Faddeev-Popov** resolution (gauge-fixing determinant
   as a ghost-field integral); the resulting **ghost** Feynman rules; and the
   residual **BRST symmetry** (Becchi-Rouet-Stora-Tyutin) that survives gauge
   fixing, with the nilpotent BRST charge $Q$, $Q^2 = 0$, and physical states
   as BRST cohomology. This is the technical heart of the volume.

3. **Spontaneously broken symmetry** (Ch. 19–21). Global SSB and the
   **Goldstone theorem** (one massless boson per broken generator); the
   effective-Lagrangian / current-algebra treatment of pions as
   pseudo-Goldstone bosons; and — the centrepiece — the **Higgs mechanism**:
   when a *gauge* symmetry is spontaneously broken, the would-be Goldstone
   bosons are eaten and the gauge bosons acquire mass, with no physical
   massless scalars (Anderson 1963, Englert-Brout 1964, Higgs 1964,
   Guralnik-Hagen-Kibble 1964). The electroweak $SU(2)\times U(1)$ application
   and the $R_\xi$-gauge quantization of broken gauge theories.

4. **Anomalies** (Ch. 22). The **Adler-Bell-Jackiw (chiral/axial) anomaly**:
   a classical symmetry broken by quantization, computed from the triangle
   diagram; the non-renormalization (Adler-Bardeen) theorem; the connection to
   the **Atiyah-Singer index theorem** (the anomaly is the index density of the
   Dirac operator); 't Hooft anomaly matching; and **gauge-anomaly
   cancellation** as a consistency condition on the Standard Model fermion
   content. The $\pi^0 \to \gamma\gamma$ decay rate is the iconic application.

5. **Extended field configurations** (Ch. 23). Non-perturbative,
   topologically-protected objects: **solitons** (kinks, domain walls in 1+1),
   **vortices** (Nielsen-Olesen / Abrikosov), **magnetic monopoles**
   ('t Hooft-Polyakov), and **instantons** (Euclidean tunneling solutions,
   the BPST instanton, the **theta-vacuum** and the strong-CP problem, the
   role of instantons in the $U(1)_A$ problem). Bogomolny bounds and BPS
   states. This chapter is where topology enters QFT physically.

WQTFV2's distinctive editorial stance, as in Vol 1, is **derivation-first and
symmetry-first**: gauge invariance is the organizing principle, the path
integral is justified rather than assumed, and the modern apparatus (RG,
anomalies, instantons) is presented as the logical completion of the Vol-1
programme rather than as a grab-bag of techniques. It assumes Vol 1 throughout.

Peer sources triangulating WQTFV2's content:

- **[1]** M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field
  Theory* (Addison-Wesley 1995), Part III (Ch. 15–20: non-Abelian gauge,
  quantization, RG, anomalies). The standard physicist's parallel.
- **[2]** S. Coleman, *Aspects of Symmetry* (Cambridge 1985) — the canonical
  reference for solitons, instantons, and theta-vacua (Coleman's Erice
  lectures); Weinberg Ch. 23 closely parallels Coleman's "Classical lumps and
  their quantum descendants" and "The uses of instantons."
- **[3]** M. D. Schwartz, *Quantum Field Theory and the Standard Model*
  (Cambridge 2014), Part IV — modern, student-facing treatment of the same
  material with explicit Standard-Model focus.
- **[4]** L. D. Faddeev and V. N. Popov, "Feynman diagrams for the Yang-Mills
  field," *Phys. Lett. B* 25 (1967) 29 — originator of the ghost
  quantization (WQTFV2 §15.5–15.6).
- **[5]** C. Becchi, A. Rouet, R. Stora, "Renormalization of gauge theories,"
  *Ann. Phys.* 98 (1976) 287; I. V. Tyutin (1975, Lebedev preprint) —
  originators of BRST symmetry (WQTFV2 §15.7).
- **[6]** S. L. Adler, "Axial-vector vertex in spinor electrodynamics,"
  *Phys. Rev.* 177 (1969) 2426; J. S. Bell and R. Jackiw, *Nuovo Cimento A*
  60 (1969) 47 — originators of the chiral anomaly (WQTFV2 Ch. 22).
- **[7]** D. J. Gross and F. Wilczek, *Phys. Rev. Lett.* 30 (1973) 1343;
  H. D. Politzer, *ibid.* 1346 — asymptotic freedom (WQTFV2 §18.7).
- **[8]** G. 't Hooft, "Magnetic monopoles in unified gauge theories,"
  *Nucl. Phys. B* 79 (1974) 276; A. M. Polyakov, *JETP Lett.* 20 (1974) 194 —
  the 't Hooft-Polyakov monopole (WQTFV2 §23.3).
- **[9]** A. A. Belavin, A. M. Polyakov, A. S. Schwartz, Yu. S. Tyupkin,
  *Phys. Lett. B* 59 (1975) 85 — the BPST instanton (WQTFV2 §23.5), already
  the anchor of Babel Bible `03.07.07`.

---

## §2 Coverage table (Babel Bible vs WQTFV2)

Cross-referenced against the corpus as of **2026-06-01** via `find content`.
All unit IDs below are **verified to exist on the filesystem** (or marked GAP).
The relevant shipped clusters are:

- `content/03-modern-geometry/07-gauge-theory/03.07.05`–`03.07.32` — the
  geometric gauge-theory chapter (Yang-Mills, instantons/ASD, BPST, ADHM,
  BRST, anomalies-via-descent, U(1) Yang-Mills, Aharonov-Bohm).
- `content/08-stat-mech/` — RG (`08.04.02` Wilson-Fisher, `08.04.03` beta
  function), Wilsonian EFT (`08.08.03`), lattice gauge (`08.08.01`–`08.08.02`),
  SSB (`08.02.02`), one-loop $\phi^4$ renormalization (`08.10.06`).
- `content/11-stat-mech-physics/07-rg/11.07.01` — critical phenomena & RG.
- `content/12-quantum/12-canonical-qft/`, `…/16-qed-radiative-corrections/`,
  `…/14-algebraic-qft/` — the QFT side (canonical QFT, gauges, one-loop QED,
  CCR/Weyl algebra).

**Note on `03.20`:** the audit brief's `03.20.*` probe (Atiyah, *Geometry of
Yang-Mills Fields*) returns **no gauge-theory unit** — `find` matches only
`04.03.20-hochschild-homology`. Atiyah's Yang-Mills monograph (FT 3.20) is **not
separately shipped**; its content is absorbed into the `03.07.*` instanton/ADHM
cluster. Flag for the FT 3.20 audit, not this one.

✓ = covered · △ = partial / different framing (geometric or stat-mech, not
Weinberg's QFT framing) · ✗ = not covered.

| WQTFV2 chapter / topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| **Ch. 15.1–15.2** — Gauge invariance; non-Abelian gauge transformations; the Yang-Mills field strength $F^a_{\mu\nu}$ and Lagrangian | `03.07.05-yang-mills-action`, `03.07.29-electromagnetism-as-u1-yang-mills` | △ | Yang-Mills action shipped at the **geometric** (connection/curvature) level; the QFT Lagrangian-in-Minkowski framing with explicit $\partial_\mu - igA_\mu$ covariant derivative and the physicist's index notation is not a unit. |
| **Ch. 15.3–15.4** — Path-integral quantization of gauge fields; gauge-orbit overcounting | `08.07.01-path-integral` (adjacent), `12.10.01-path-integral-formulation` | △ | Path integral shipped (QM + stat-mech); the gauge-orbit-volume problem is set up qualitatively inside `03.07.31` but not as a standalone QFT quantization unit. |
| **Ch. 15.5–15.6** — Faddeev-Popov gauge-fixing determinant; ghost fields and ghost Feynman rules | `03.07.31-brst-cohomology-and-faddeev-popov-ghost-quantisation` | △ | **Substantively covered** — FP ghosts treated, anchored on Tong + Sternberg Ch. 12 + **Weinberg QFT Vol. II §15** explicitly. Framing is cohomological; the momentum-space **ghost Feynman rules** (the computational payload) are not worked. |
| **Ch. 15.7** — BRST symmetry; nilpotent charge $Q$, $Q^2=0$; physical states as BRST cohomology | `03.07.31` (BRST cohomology) | ✓ | Covered, geometric/cohomological framing; anchors Becchi-Rouet-Stora 1976 + Henneaux-Teitelboim. The QFT operator-charge / Slavnov-Taylor-identity payload is light. |
| **Ch. 16** — External-field methods; the quantum effective action $\Gamma[\phi]$; 1PI generating functional; effective potential | — | ✗ | **Gap.** The Legendre-transform effective action, 1PI vertices, and Coleman-Weinberg effective potential are absent. (Coleman-Weinberg 1973 originator.) |
| **Ch. 17** — Renormalization of gauge theories; Slavnov-Taylor / BRST identities; the background-field method; gauge-coupling renormalization | — | ✗ | **Gap.** Ward-Slavnov-Taylor identities and the proof of renormalizability of YM are not units. |
| **Ch. 18.1–18.5** — The renormalization group; Callan-Symanzik equation; running couplings; fixed points; Gell-Mann-Low | `08.04.03-beta-function`, `08.04.02-wilson-fisher`, `11.07.01-critical-phenomena-and-renormalization-group`, `08.10.06-one-loop-renormalisation-in-phi-4` | △ | RG **shipped on the statistical-mechanics side** (Wilson-Fisher, beta function, critical exponents). The **QFT** Callan-Symanzik / Gell-Mann-Low framing (running of a *coupling constant* with energy scale, not a critical temperature) is not a dedicated unit. |
| **Ch. 18.6** — Wilsonian effective field theory; integrating out high momenta | `08.08.03-effective-field-theory` | △ | Wilsonian EFT shipped (anchored Wilson-Kogut 1974 + Polchinski). Stat-mech framing; the QFT "tower of irrelevant operators / EFT power-counting" framing is partial. |
| **Ch. 18.7** — **Asymptotic freedom** of non-Abelian gauge theory; the negative beta function | — | ✗ | **Gap (load-bearing).** The Gross-Wilczek-Politzer 1973 computation of $\beta(g) = -\tfrac{g^3}{16\pi^2}\big(\tfrac{11}{3}C_2(G) - \tfrac{4}{3}T(R)\big)$ — the result that makes QCD a theory — has no unit. The shipped `08.04.03` beta function is the scalar/Ising-class one. |
| **Ch. 19** — Spontaneously broken global symmetries; the **Goldstone theorem** | `08.02.02-spontaneous-symmetry-breaking` | △ | SSB shipped at the **stat-mech / Landau** level (order parameter, mean field). The relativistic **Goldstone theorem** (one massless scalar per broken generator, proved from the current algebra) is not the framing and is a genuine gap. |
| **Ch. 19.5–19.7** — Effective Lagrangians for Goldstone bosons; current algebra; pions; the sigma model | — | ✗ | **Gap.** Chiral Lagrangians, PCAC, soft-pion theorems absent. |
| **Ch. 21** — **The Higgs mechanism**; broken gauge symmetry; gauge-boson masses; $R_\xi$ gauges; electroweak $SU(2)\times U(1)$ | — | ✗ | **Gap (load-bearing, CRITICAL).** The Higgs mechanism — the single most physically important result in Vol 2 — has **no unit anywhere in the corpus.** Anderson-Englert-Brout-Higgs-Guralnik-Hagen-Kibble 1963–64. |
| **Ch. 20** — Operator product expansion (OPE); short-distance behaviour; Wilson coefficients | — | ✗ | **Gap.** Wilson's OPE (Wilson 1969) is absent. `08.10.04-wick-s-theorem-for-operator-products` is Wick contraction, **not** the short-distance OPE. |
| **Ch. 22.1–22.3** — The **Adler-Bell-Jackiw chiral/axial anomaly**; triangle diagram; $\pi^0\to\gamma\gamma$ | `03.07.32-anomalies-via-descent-equations-and-the-index-theorem` | △ | Anomalies **covered geometrically** — descent equations + index theorem, anchored Alvarez-Gaumé-Ginsparg + Atiyah-Singer + Tong's standard-model notes (which include the chiral anomaly and anomaly cancellation). The **triangle-diagram QFT computation** and the explicit $\pi^0\to\gamma\gamma$ rate are not worked. |
| **Ch. 22.4** — Anomaly and the Atiyah-Singer index theorem | `03.07.32` | ✓ | Directly covered — this is the unit's title and anchor. |
| **Ch. 22.5** — Adler-Bardeen non-renormalization; 't Hooft anomaly matching | `03.07.32` (mentions descent/consistency) | △ | Anomaly-cancellation-as-consistency is referenced via Tong's standard-model notes; Adler-Bardeen and 't Hooft matching are not separately developed. |
| **Ch. 23.1** — Solitons; kinks and domain walls; Bogomolny bound | `03.07.07-bpst-instanton-and-the-bogomolny-bound` (partial) | △ | The **Bogomolny bound** is shipped (in the instanton unit). 1+1-D **kink/domain-wall** solitons and their quantum quantization are a gap. |
| **Ch. 23.2** — Vortices (Nielsen-Olesen / Abrikosov) | — | ✗ | **Gap.** No vortex/flux-tube unit. |
| **Ch. 23.3** — Magnetic monopoles ('t Hooft-Polyakov); Dirac quantization | `03.07.30-aharonov-bohm-effect-and-holonomy` (adjacent), `03.07.28-monopole-instanton-floer-equivalence` (Floer, different sense of "monopole") | ✗ | **Gap.** The Babel Bible "monopole" unit is Seiberg-Witten/Floer-theoretic, not the **'t Hooft-Polyakov** soliton. Dirac monopole quantization is touched via Aharonov-Bohm holonomy only. |
| **Ch. 23.4–23.5** — Instantons; BPST solution; finite-action Euclidean configs | `03.07.07-bpst-instanton`, `03.07.08-conformal-compactification-and-finite-action-instantons`, `03.07.09-moduli-space-of-asd`, `03.07.10-adhm-construction` | ✓ | **Strongly covered** — BPST, finite-action compactification, ASD moduli, ADHM are all shipped. This is the best-covered Ch. 23 topic. Anchored BPST 1975. |
| **Ch. 23.6** — **Theta-vacua**; the vacuum angle $\theta$; instanton-induced tunneling; strong-CP | — | ✗ | **Gap (load-bearing).** Despite the rich instanton coverage, the QFT **theta-vacuum** $\lvert\theta\rangle = \sum_n e^{in\theta}\lvert n\rangle$, the $\theta F\tilde F$ term, and the **strong-CP problem** are absent. The instanton units cover the *geometry* (winding number, moduli) but not the *vacuum-structure physics*. |
| **Ch. 23.6** — Instantons and the $U(1)_A$ problem; 't Hooft vertex | — | ✗ | **Gap.** The resolution of the $\eta'$ mass via instantons is not covered. |

**Aggregate coverage estimate:** **~40% of WQTFV2 has corresponding Babel Bible
units** — by far the highest of the three Weinberg volumes (Vol 1 was ~5% at its
audit; Vol 3 SUSY is ~0%). The **instanton/ASD machinery (Ch. 23.4–23.5),
BRST/Faddeev-Popov (Ch. 15.5–15.7), and the anomaly-index connection (Ch. 22.4)
are genuinely well-covered (✓)**, and RG / Wilsonian EFT / SSB / Yang-Mills are
**partially covered (△) in a geometric or statistical-mechanics framing**. But
the coverage has a characteristic shape: **the topology and the geometry are
present; the QFT physics is missing.** The five load-bearing QFT-specific gaps
are:

1. **The Higgs mechanism** (Ch. 21) — CRITICAL, zero coverage.
2. **Asymptotic freedom / the gauge-coupling beta function** (Ch. 18.7) —
   load-bearing, zero coverage (only the stat-mech beta function exists).
3. **The Goldstone theorem** in its relativistic form (Ch. 19) — only the
   stat-mech SSB picture exists.
4. **The operator product expansion** (Ch. 20) — zero coverage.
5. **Theta-vacua and strong-CP** (Ch. 23.6) — zero coverage despite rich
   instanton geometry.

Plus the quantum-effective-action / 1PI / effective-potential machinery
(Ch. 16) and the 't Hooft-Polyakov monopole + vortices (Ch. 23.2–23.3).

This is **not** a flag-as-done book — it is a flag-as-**half-done** book: the
geometric scaffolding is in place, and the remaining work is to add the
QFT-physics layer on top of it, much of which can *cross-reference* the
existing `03.07.*` geometry units rather than rebuild them.

**Crucial coordination note.** The new QFT units below should **anchor on and
cross-link to the existing `03.07.*` geometry units**, not duplicate them. A
`12.18.*` "theta-vacuum and strong-CP" unit, for instance, should prerequisite
`03.07.07` (BPST) and `03.07.08` (finite-action instantons) and build the
*vacuum-angle physics* on top, rather than re-deriving the BPST solution. This
is the inverse of the Vol-1 situation (where almost everything was new); here
the leverage is in *connective* units.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered)

New units land in a new `content/12-quantum/18-gauge-and-symmetry/` chapter
directory (the next free `12.18.*` slot; existing `12-quantum/` tops out at
chapter `17-quantum-information`). IDs verified non-colliding against the §2
filesystem scan. A few RG units may alternately extend `08-stat-mech/` if the
production team prefers to keep all RG material together; recommendation below
is to put the **QFT-coupling** RG in `12.18.*` and cross-link the stat-mech RG.

**Priority 0 — structural / prerequisite:**

- Create `content/12-quantum/18-gauge-and-symmetry/`. Most P1–P2 units land
  here.
- **Procure a Weinberg Vol 2 PDF / print copy** before the renormalization-of-
  gauge-theories (Ch. 17) and OPE (Ch. 20) units; the TOC-only audit cannot
  reliably guide Master-tier structure for those two.
- **Cross-link, do not duplicate, the `03.07.*` cluster.** Every new gauge /
  instanton / anomaly unit prerequisites the corresponding geometry unit.

**Priority 1 — load-bearing QFT physics absent from the corpus (6 units):**

1. **`12.18.01` The Higgs mechanism: spontaneously broken gauge symmetry.**
   Would-be Goldstone bosons eaten; gauge-boson mass generation; the Abelian
   Higgs model first, then $SU(2)\times U(1)$ electroweak; $R_\xi$ gauges and
   the unitary-gauge limit. WQTFV2 Ch. 21 anchor. **CRITICAL — the single
   highest-leverage gap in Vol 2.** Originators: Anderson 1963 *Phys. Rev.*
   130, 439; Englert-Brout 1964 *PRL* 13, 321; Higgs 1964 *PRL* 13, 508;
   Guralnik-Hagen-Kibble 1964 *PRL* 13, 585. Prereqs: `08.02.02` (SSB),
   `03.07.05` (Yang-Mills). [NEW]

2. **`12.18.02` The Goldstone theorem and effective Goldstone Lagrangians.**
   Relativistic Goldstone theorem (one massless scalar per broken generator);
   the linear and nonlinear sigma models; pions as pseudo-Goldstone bosons;
   PCAC and soft-pion theorems. WQTFV2 Ch. 19 anchor. Originators: Goldstone
   1961 *Nuovo Cim.* 19, 154; Goldstone-Salam-Weinberg 1962 *Phys. Rev.* 127,
   965. Prereq: `08.02.02`. [NEW]

3. **`12.18.03` Asymptotic freedom and the running gauge coupling.** The
   non-Abelian beta function $\beta(g) = -\tfrac{g^3}{16\pi^2}(\tfrac{11}{3}
   C_2(G) - \tfrac43 T(R)\,n_f)$; the sign and its meaning; the running of
   $\alpha_s$; confinement heuristic; the Callan-Symanzik equation in the QFT
   (energy-scale) framing. WQTFV2 §18.7 anchor. **Load-bearing.** Originators:
   Gross-Wilczek 1973 *PRL* 30, 1343; Politzer 1973 *PRL* 30, 1346. This is
   the gauge-coupling beta function, distinct from the stat-mech `08.04.03`.
   Prereqs: `08.04.03` (cross-link), `03.07.05`. [NEW]

4. **`12.18.04` Theta-vacua, the vacuum angle, and the strong-CP problem.**
   The $\theta$-vacuum $\lvert\theta\rangle = \sum_n e^{in\theta}\lvert n\rangle$;
   instanton-induced tunneling between topological sectors; the $\theta F\tilde
   F$ term and its physical effects; the strong-CP problem and the
   neutron EDM bound; the Peccei-Quinn / axion resolution (pointer). WQTFV2
   §23.6 anchor. **Builds on existing instanton geometry — prereqs
   `03.07.07` (BPST), `03.07.08` (finite-action instantons).** Originators:
   't Hooft 1976 *PRL* 37, 8 & *PRD* 14, 3432; Jackiw-Rebbi 1976; Callan-Dashen-
   Gross 1976. [NEW]

5. **`12.18.05` The chiral (Adler-Bell-Jackiw) anomaly from the triangle
   diagram; $\pi^0\to\gamma\gamma$.** The QFT computation (triangle graph,
   regularization, the anomalous divergence $\partial_\mu j^{\mu5} =
   \tfrac{e^2}{16\pi^2}\epsilon^{\mu\nu\rho\sigma}F_{\mu\nu}F_{\rho\sigma}$);
   the $\pi^0$ decay rate; Adler-Bardeen non-renormalization; gauge-anomaly
   cancellation as a Standard-Model consistency condition. WQTFV2 Ch. 22
   anchor. **Cross-links `03.07.32` (anomaly-via-index-theorem) as the
   geometric companion.** Originators: Adler 1969 *PR* 177, 2426; Bell-Jackiw
   1969 *NC A* 60, 47. [NEW / DEEPEN of the geometry pairing] [NEW]

6. **`12.18.06` Operator product expansion and short-distance behaviour.**
   Wilson's OPE $A(x)B(y) \sim \sum_n C_n(x-y)\mathcal{O}_n(\tfrac{x+y}2)$;
   Wilson coefficients and their RG running; application to deep-inelastic
   scattering / sum rules. WQTFV2 Ch. 20 anchor. Originator: Wilson 1969
   *PR* 179, 1499; Wilson-Zimmermann 1972. **Requires Vol 2 PDF.** [NEW]

**Priority 2 — quantization apparatus & effective action (5 units):**

7. **`12.18.07` Non-Abelian gauge theory in the QFT Lagrangian framing;
   covariant derivative, $F^a_{\mu\nu}$, gauge-fixing.** The physicist's
   index-notation companion to the geometric `03.07.05`; covariant derivative
   $D_\mu = \partial_\mu - igA^a_\mu T^a$; the YM Lagrangian and its gauge
   transformations; setting up path-integral quantization (gauge-orbit
   overcounting). WQTFV2 §15.1–15.4 anchor. **Cross-links `03.07.05`,
   `03.07.29`.** [ENRICH/NEW] [NEW]

8. **`12.18.08` Faddeev-Popov ghosts and the ghost Feynman rules; BRST
   Slavnov-Taylor identities.** The momentum-space ghost propagator and
   vertices (the computational payload missing from `03.07.31`); Slavnov-Taylor
   identities from BRST invariance; gauge independence of the $S$-matrix.
   WQTFV2 §15.5–15.8 anchor. **DEEPEN-paired with `03.07.31` (cross-link the
   cohomological treatment; add the Feynman-rule computation here).**
   Originators: Faddeev-Popov 1967; Becchi-Rouet-Stora 1976. [DEEPEN/NEW]

9. **`12.18.09` The quantum effective action $\Gamma[\phi]$, 1PI generating
   functional, and the Coleman-Weinberg effective potential.** Legendre
   transform of $W[J]$; 1PI vertices; the loop expansion of the effective
   potential; radiative symmetry breaking. WQTFV2 Ch. 16 anchor. Originators:
   Jona-Lasinio 1964; Coleman-Weinberg 1973 *PRD* 7, 1888. [NEW]

10. **`12.18.10` Renormalization of non-Abelian gauge theories;
    renormalizability and the BRST/Slavnov-Taylor proof; background-field
    method.** WQTFV2 Ch. 17 anchor. **Requires Vol 2 PDF.** Originators:
    'tHooft-Veltman 1972 *NPB* 44, 189 (dimensional regularization &
    renormalizability). [NEW]

11. **`12.18.11` Wilsonian RG for gauge theories and the QFT Callan-Symanzik
    equation.** The QFT-framing companion to the stat-mech `08.04.02/03` and
    `08.08.03`: running couplings with energy scale, anomalous dimensions,
    fixed points, the Callan-Symanzik equation $[\mu\partial_\mu + \beta
    \partial_g + \gamma]\,\Gamma^{(n)} = 0$. WQTFV2 Ch. 18.1–18.6 anchor.
    **Cross-links `08.04.02`, `08.04.03`, `08.08.03`, `11.07.01`.**
    Originators: Callan 1970, Symanzik 1970; Gell-Mann-Low 1954. [ENRICH/NEW]
    [NEW]

**Priority 3 — extended objects / completion (4 units):**

12. **`12.18.12` Solitons and kinks: 1+1-D domain walls, the Bogomolny bound,
    BPS states, and semiclassical quantization.** WQTFV2 §23.1 anchor.
    **Cross-links the Bogomolny content already in `03.07.07`.** Originator:
    Coleman *Aspects of Symmetry* Ch. 6; Dashen-Hasslacher-Neveu 1974. [NEW]

13. **`12.18.13` Vortices (Nielsen-Olesen / Abrikosov flux tubes).** WQTFV2
    §23.2 anchor. Originators: Abrikosov 1957 *JETP* 5, 1174; Nielsen-Olesen
    1973 *NPB* 61, 45. [NEW]

14. **`12.18.14` Magnetic monopoles: 't Hooft-Polyakov soliton, Dirac
    quantization, BPS monopole.** WQTFV2 §23.3 anchor. **Distinct from the
    Floer-theoretic `03.07.28`** — flag the naming collision in the unit's
    §Notation. Originators: 't Hooft 1974 *NPB* 79, 276; Polyakov 1974;
    Dirac 1931 *Proc. Roy. Soc. A* 133, 60; Bogomolny 1976; Prasad-Sommerfield
    1975. [NEW]

15. **`12.18.15` Instantons in QFT: the $U(1)_A$ problem, the 't Hooft vertex,
    and tunneling amplitudes.** The QFT-physics layer on the existing instanton
    geometry. WQTFV2 §23.5–23.6 anchor. **Prereqs `03.07.07`, `03.07.10`
    (ADHM), `12.18.04` (theta-vacua).** Originator: 't Hooft 1976 *PRD* 14,
    3432. [NEW]

**Priority 4 — survey pointers (Master-only, optional, 2 units):**

16. **`12.18.16` Lattice gauge theory and confinement (QFT pointer).** Wilson
    loop, area law, strong-coupling expansion. **Cross-links the existing
    `08.08.01-wilson-lattice-gauge` and `08.08.02-wilson-action`** (stat-mech
    framing) into the QFT confinement narrative. WQTFV2 §15.9 + Coleman.
    Originator: Wilson 1974 *PRD* 10, 2445. [ENRICH/pointer]

17. **`12.18.17` Forward pointer to Vol 3 (supersymmetry, FT 2.19) and to the
    Standard Model as the assembled theory.** Survey only; ties the Vol-2
    machinery (gauge + Higgs + anomaly-cancellation + asymptotic freedom) into
    the Glashow-Weinberg-Salam electroweak theory and QCD. [pointer]

**Total new-unit punch-list: 17 units** (6 priority-1 + 5 priority-2 +
4 priority-3 + 2 priority-4). **Net new vs Vol 1 (29):** smaller, because Vol 2
benefits from the heavy existing `03.07.*` geometry coverage — roughly **8 of
the 17 are connective / cross-linking units** that build QFT physics on top of
shipped geometry rather than green-field new material. The genuinely
green-field load-bearing units are the Higgs mechanism (1), the Goldstone
theorem (2), asymptotic freedom (3), the OPE (6), the effective action /
Coleman-Weinberg (9), and vortices/monopoles (13, 14).

**Notation crosswalk requirements** (record as §Notation paragraphs):

- Metric signature: **inherit the `12.05.01` decision** (mostly-plus, Weinberg's
  $\eta = \mathrm{diag}(-,+,+,+)$). Every new Vol-2 unit forward-references that
  box.
- Gauge-coupling sign convention: Weinberg uses $D_\mu = \partial_\mu - igA_\mu$
  with $A_\mu = A^a_\mu t_a$; the geometry chapter `03.07.*` uses the
  mathematician's $d_A = d + A$ with $A$ an $\mathfrak{g}$-valued 1-form and no
  explicit $g$. Add an explicit $A_\mu^{\text{phys}} = \tfrac1g A^{\text{geom}}$
  crosswalk in `12.18.07`.
- "Monopole" collision: `03.07.28` (Floer / Seiberg-Witten monopole equations)
  vs `12.18.14` ('t Hooft-Polyakov classical soliton). Disambiguate in both.
- $F\tilde F$ / instanton-number normalization: align `12.18.04`'s
  $\tfrac{1}{32\pi^2}\int F\tilde F = n$ with the winding-number normalization
  already used in `03.07.07`/`03.07.08`.

---

## §4 Implementation sketch (P3 → P4)

The Vol-2 punch-list splits cleanly by leverage:

- **Connective units (7, 8, 11, 12, 15, 16)** — ~3–4 hours each. These
  cross-link shipped `03.07.*` / `08.*` geometry & stat-mech units into the QFT
  framing. Lower cost because the hard derivations already exist; the work is
  the QFT-physics overlay, the notation crosswalk, and the §Connections weave.
- **Green-field load-bearing units (1, 2, 3, 6, 9)** — ~5–6 hours each. The
  Higgs mechanism, Goldstone theorem, asymptotic freedom, OPE, and effective
  action have *no* corpus precedent and need full three-tier treatment with
  worked computations (Abelian Higgs mass spectrum; one-loop non-Abelian beta
  function; Coleman-Weinberg potential).
- **Renormalization-of-gauge-theories + OPE (6, 10)** — ~6–8 hours, **gated on
  procuring the Vol 2 PDF**; deepest technical material.
- **Extended-object units (13, 14)** — ~4–5 hours; vortices and 't Hooft-
  Polyakov monopoles are self-contained classical-soliton + semiclassical
  quantization computations.
- **Pointer units (17)** — ~2–3 hours.

Total ≈ **70–85 hours** of focused production for the full pass; priority-1
alone (the six load-bearing gaps) ≈ 30–35 hours and closes most of the
equivalence gap. The connective discount (vs Vol 1's all-green-field 130 hours)
is the payoff of the geometry chapter being already shipped.

**Bio/chem/applied-physics prose-first carve-out does not apply** — this is
frontier mathematical QFT; all units are Lean-optional but Master-tier
formalization-aware (the anomaly/index-theorem and instanton-moduli units can
reference the already-formalized `03.07.*` Lean stubs).

**Originator-prose targets** (per `FASTTRACK_EQUIVALENCE_PLAN.md` §10):

- Unit 1 (Higgs) — quote Higgs 1964 *PRL* 13, 508 and Englert-Brout 1964.
- Unit 3 (asymptotic freedom) — Gross-Wilczek and Politzer 1973 *PRL* 30.
- Unit 4 (theta-vacua) — 't Hooft 1976 *PRD* 14, 3432 (the $\theta$-vacuum and
  the $U(1)_A$ resolution in 't Hooft's own words).
- Unit 5 (chiral anomaly) — Adler 1969 *PR* 177, 2426; Bell-Jackiw 1969.
- Unit 6 (OPE) — Wilson 1969 *PR* 179, 1499.
- Unit 8 (FP ghosts) — Faddeev-Popov 1967 *Phys. Lett. B* 25, 29.
- Unit 14 (monopole) — 't Hooft 1974 *NPB* 79, 276; Dirac 1931.

---

## §5 What this plan does NOT cover

- A line-number theorem/equation inventory of WQTFV2 (full P1 audit; deferred
  until a PDF/print copy is procured — see Priority 0).
- **Weinberg Vol 1** (FT 2.17, audited 2026-05-17, separate plan) and **Vol 3:
  Supersymmetry** (FT 2.19, separate audit cycle — SUSY algebras, superfields,
  SUSY gauge theory, supergravity).
- **Atiyah, *Geometry of Yang-Mills Fields* (FT 3.20).** The `find 03.20.*`
  probe confirms no dedicated unit; its instanton/ADHM content is absorbed into
  `03.07.07`–`03.07.11`. A separate FT 3.20 audit should decide whether the
  twistor / Ward-correspondence material (`03.07.11`, `03.07.14`) suffices.
- **The full BPHZ / Slavnov-Taylor renormalizability proof** at the algebraic
  level. Unit 10 carries the statement and the background-field method; the
  forest-formula and Zinn-Justin-equation proofs are Master-tier deepenings.
- **Electroweak phenomenology** beyond the Higgs-mechanism mass spectrum
  (precision EW, CKM, neutrino mass). These are Standard-Model-phenomenology
  topics beyond Weinberg Vol 2's field-theoretic scope; pointer only in 17.
- **The geometric re-derivation of instantons / ADHM / anomalies** — already
  shipped in `03.07.*`; the Vol-2 units cross-link rather than rebuild.
- **Exercise-pack production.** WQTFV2, like Vol 1, contains no exercises
  (Weinberg's preface). Codex exercise packs for these units draw on Peskin-
  Schroeder Part III, Schwartz Part IV, and Coleman *Aspects of Symmetry*
  problems, all chapter-aligned with WQTFV2 from Ch. 15 onward.

---

## §6 Acceptance criteria for FT equivalence (WQTFV2)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, the book is at
equivalence-coverage when:

- A Vol 2 print/PDF copy is available to the production team (Priority 0
  prereq for the Ch. 16, 17, 20 units).
- The **five load-bearing gaps are closed**: Higgs mechanism (`12.18.01`),
  Goldstone theorem (`12.18.02`), asymptotic freedom (`12.18.03`), OPE
  (`12.18.06`), theta-vacua/strong-CP (`12.18.04`). After these five, Vol-2
  coverage rises from ~40% to ~75%.
- Every new gauge / instanton / anomaly unit **explicitly cross-links its
  `03.07.*` geometric companion** (prerequisite arrow in `deps.json` + a
  §Connections paragraph), so the geometry and the QFT-physics readings are
  one connected DAG.
- ≥95% of WQTFV2's named theorems in Ch. 15–22 map to Babel Bible units
  (currently ~40%; after priority-1 ~75%; after priority-1+2 ~88%; full ≥95%
  requires priority-3 + selective priority-4).
- ≥90% of WQTFV2's worked computations (Abelian Higgs spectrum, one-loop
  non-Abelian beta function, triangle anomaly, BPST action, 't Hooft-Polyakov
  mass) have a direct unit or are referenced from one. Note: Ch. 17 (gauge
  renormalization) and Ch. 20 (OPE) are the deepest technical material;
  acceptance threshold for these two chapters is relaxed to ≥80%.
- Notation decisions recorded (§3 crosswalk): metric inherited from `12.05.01`;
  gauge-coupling $A^{\text{phys}}$ vs $A^{\text{geom}}$ crosswalk; "monopole"
  disambiguation; $F\tilde F$ normalization aligned with `03.07.07`.
- Pass-W weaving connects the new units to:
  - `03-modern-geometry/07-gauge-theory/` (Yang-Mills, BRST, anomalies-index,
    BPST/ADHM instantons) — the geometric substrate, **heavily reused**;
  - `08-stat-mech/` (RG, beta function, Wilsonian EFT, lattice gauge, SSB) —
    the statistical-mechanics substrate, cross-linked into the QFT framing;
  - `12-quantum/12-canonical-qft/`, `…/16-qed-radiative-corrections/` — the
    perturbative-QFT substrate;
  - forward-pointer to Vol 3 (FT 2.19) and the assembled Standard Model.
- Cross-references to Peskin-Schroeder Part III, Schwartz Part IV, and Coleman
  *Aspects of Symmetry* in every Master tier of the priority-1 units.

The six priority-1 units close most of the equivalence gap; priority-2 closes
the quantization-apparatus / effective-action / gauge-RG side; priority-3
closes the extended-objects (solitons / vortices / monopoles) side; priority-4
are pointers. **Because the geometry chapter is already shipped, Vol 2 is the
cheapest of the three Weinberg volumes to bring to equivalence** — an estimated
70–85 hours, against ~130 for Vol 1.

---

## §7 Sourcing

- **Cost.** WQTFV2 in copyright (CUP 1996). New hardcover ~$95 USD; paperback
  ~$60 USD; Cambridge Core institutional e-book via subscription. The three-
  volume set is commonly sold together.
- **License.** All rights reserved, Cambridge University Press.
- **Local copy.** None. Same candidate paths as the Vol 1 audit hold no Vol 2
  PDF. Cover image, if needed, mirrors the Vol 1 path convention under
  `reference/fast-track/images/`.
- **Procurement.** Add to the production team's required-reference list; procure
  before the Ch. 16 / 17 / 20 units (effective action, gauge renormalization,
  OPE). The instanton, anomaly, BRST, RG, SSB, and Higgs units can proceed from
  the open-access cross-references below plus the shipped `03.07.*` geometry.
- **Open-access alternatives for cross-reference** (legally free):
  - **Tong's lecture notes** — *Gauge Theory*
    (<https://www.damtp.cam.ac.uk/user/tong/gaugetheory.html>) and *Standard
    Model* (<https://www.damtp.cam.ac.uk/user/tong/standardmodel.html>);
    already the anchor of `03.07.31` and `03.07.32`. Cover Faddeev-Popov, BRST,
    the chiral anomaly, anomaly cancellation, the Higgs mechanism, and
    asymptotic freedom directly.
  - **Coleman, *Aspects of Symmetry*** — the canonical solitons / instantons /
    theta-vacua reference; widely available; the natural Master anchor for
    units 4, 12, 15.
  - **Srednicki, *Quantum Field Theory*** (UCSB draft) — non-Abelian gauge,
    BRST, anomalies, RG in the same ordering.
  - **Peskin-Schroeder errata/notes** (<https://www.slac.stanford.edu/~mpeskin/QFT.html>).
  None *replaces* WQTFV2 for the effective-action (Ch. 16), gauge-
  renormalization (Ch. 17), and OPE (Ch. 20) material — genuinely Weinberg-
  distinctive — but they suffice as Master-tier alternate anchors for the Higgs,
  Goldstone, asymptotic-freedom, anomaly, instanton, and theta-vacuum units
  while Vol 2 is being procured.
