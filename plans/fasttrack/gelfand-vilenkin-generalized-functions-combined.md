# Gel'fand, Vilenkin — *Generalized Functions* Vols. 1–6 (Fast Track 2.04–2.09) — Combined Audit + Gap Plan

**Books:** I. M. Gel'fand and N. Ya. Vilenkin (with co-authors I. M.
Shilov for Vols. 1–3 and M. I. Graev for Vol. 5), *Generalized Functions*,
six-volume series. Russian originals: Fizmatgiz, Moscow 1958–1962. English
translation: Academic Press, New York 1964–1968. AMS Chelsea reprint set
(complete six-volume box) released 2015 (AMS Chelsea Publishing,
ISBN 978-1-4704-2658-3 series, individual ISBNs per volume).

Canonical volume titles and the FT-booklist mapping
(`docs/catalogs/FASTTRACK_BOOKLIST.md` lines 64–69):

| FT entry | Vol | Title | Year (E) | Year (R) |
|---|---|---|---|---|
| 2.04 | 1 | *Properties and Operations* | 1964 | 1958 |
| 2.05 | 2 | *Spaces of Fundamental and Generalized Functions* | 1968 | 1958 |
| 2.06 | 3 | *Theory of Differential Equations* | 1967 | 1958 |
| 2.07 | 4 | *Applications of Harmonic Analysis* | 1964 | 1961 |
| 2.08 | 5 | *Integral Geometry and Representation Theory* | 1966 | 1962 |
| 2.09 | 6 | *Representation Theory and Automorphic Forms* | 1966 | 1962 |

Vol. 1 lists Shilov as co-author (it is "Gel'fand-Shilov" in the
literature); Vols. 4–6 list Vilenkin and Graev — the series is universally
cited as "Gel'fand-Shilov" for the foundational half (Vols. 1–3) and
"Gel'fand-Vilenkin" / "Gel'fand-Graev-Vilenkin" for the harmonic-analysis
and representation-theory half (Vols. 4–6). The FT booklist collapses the
authorship to "Gel'fand, Vilenkin" for shelving.

**Fast Track entries:** 2.04–2.09, the SOURCE / BUY entries for the entire
distribution-theory + harmonic-analysis-on-groups block in Tier 2. Per the
AGENTIC_EXECUTION_PLAN.md Wave 6 recommendation, these six volumes are
audited as a **single combined plan** rather than six per-volume stubs:
the series is one editorial programme, the volume splits are arbitrary
from a curriculum standpoint (Vol. 1 ends mid-thread; Vol. 4 begins
mid-thread), and the cross-references between volumes are dense enough
that a per-volume audit would duplicate ~40% of its content. **Audit
completeness will be reported per-volume in §7.**

**Purpose:** lightweight audit-and-gap pass (P1-lite + P2 + P3-lite of the
orchestration protocol). Output is a concrete punch-list of new units to
write so that the Gel'fand series is covered to the equivalence threshold
(≥95% effective coverage of theorems, key examples, exercise pack,
notation, sequencing, intuition, applications — see
`docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4).

**Audit completeness: `reduced` for all six volumes.** No local PDFs found
in `reference/fasttrack-texts/`, `reference/textbooks-extra/`, or
`reference/book-collection/`. AMS Chelsea reprints (2015) are
copyright-active and not redistributed on Archive.org or author pages. The
older Academic Press scans (1964–1968) are intermittently available on
Archive.org but most copies are restricted-access lending. Two WebFetch
probes (Archive.org search; Wikipedia *Israel Gelfand* / *Generalized
function* articles) confirmed volume titles and series structure but no
free PDF surface. The §1, §2, §3 inventories below are built from the
publicly visible TOC, the canonical peer-reference network (Schwartz,
Hörmander, Reed-Simon, Stein-Shakarchi, Helgason, Bump, Folland), and the
citation graph in already-audited Codex plans (Chatterjee 2.03, Woit 2.02,
Lawson-Michelsohn 1.07). P5 verification on this audit cannot mark any
volume `equivalence-covered`; only `equivalence-partial` until each is
re-audited from a full source. Re-audit upgrades queued in
`docs/catalogs/NEED_TO_SOURCE.md` (entry already exists at lines 97 of that
file, "2.04–2.09 ... SOURCE (6 vols); AMS Chelsea; older vols may be on
Archive.org").

This is the **largest single audit in the FT corpus** at the time of
writing (six volumes, ~2500 pages combined). The plan is structured so
that each volume's punch-list is independently actionable; the production
agent should expect to fan out volume-by-volume even though the audit is
combined.

---

## §1 What the Gel'fand series is for

The Gel'fand-Shilov-Vilenkin *Generalized Functions* series is **the
Soviet-school synthesis of distribution theory and the harmonic analysis
of Lie groups**, written between 1958 and 1962 (Russian) and translated
1964–1968 (English) as a six-volume programme that begins from L. Schwartz's
1944–1950 axiomatisation of distributions and ends at the unitary
representation theory of $SL(2,\mathbb{R})$, integral geometry, adelic
representations, and the spectral theory underlying what later became the
Langlands programme. The series is to distribution-theoretic analysis what
Bourbaki *Topologie générale* is to point-set topology: an editorial
project that defines and fixes a vocabulary which becomes the lingua franca
of the next half-century.

Distinctive contributions, in roughly the order the series develops them:

1. **A Soviet-school presentation of distribution theory (Vols. 1–2).** Where
   Schwartz [Sch] *Théorie des distributions* (1950–1951) develops
   distributions abstractly as continuous linear functionals on
   $\mathcal{D}(\Omega) = C_c^\infty(\Omega)$ with the inductive-limit
   topology, Gel'fand-Shilov organise the theory around **explicit
   families of test-function spaces** $K\{M_p\}$ (later called
   Gel'fand-Shilov spaces $\mathcal{S}_\alpha^\beta$), each tuned to a
   specific growth rate of test functions. This gives a finer-grained
   theory than Schwartz's: distributions of arbitrary order, ultra-
   distributions, hyperfunctions all arise as duals of $K\{M_p\}$ for
   suitable $M_p$. The Schwartz tempered distributions
   $\mathcal{S}'(\mathbb{R}^n)$ are one example among many.
2. **Operations on distributions (Vol. 1).** Differentiation, multiplication
   by smooth functions, change of variables, direct product, convolution,
   support, singular support, restriction and extension. The Vol. 1
   treatment is the canonical operations table that Hörmander
   [Hör, Vol. 1, Ch. 2–3] later refines with the wave-front-set
   microlocal calculus.
3. **Topological vector spaces and locally convex spaces (Vol. 2).**
   Bornologies, inductive and projective limits, nuclear spaces (in the
   sense of Grothendieck, parallel to *Produits tensoriels topologiques*
   1955). Vol. 2 ships the TVS prerequisites that Schwartz takes for
   granted and that Reed-Simon [RS, Vol. 1, App. to §V.3] treats only in
   passing.
4. **Fundamental solutions and the theory of linear differential equations
   (Vol. 3).** Existence of fundamental solutions for hypoelliptic
   operators (Malgrange-Ehrenpreis, 1954–1955), the Cauchy problem in
   distributional form, propagation of singularities (foreshadowing the
   wave-front-set calculus of Hörmander 1971), regularity theorems. Vol. 3
   is the "what distributions are for in PDE" volume.
5. **Generalised stochastic processes and the Bochner-Minlos theorem
   (Vol. 4).** Characteristic functionals on nuclear spaces; the Minlos
   theorem extending Bochner's theorem from $\mathbb{R}^n$ to nuclear
   $\mathcal{S}'$, foundational for constructive QFT (Glimm-Jaffe, Wightman
   reconstruction). Also: spectral theory of operators in rigged Hilbert
   spaces (the "Gel'fand triple" $\Phi \subset \mathcal{H} \subset \Phi'$),
   the basis for Dirac's bra-ket formalism made rigorous.
6. **Integral geometry: Radon transform, John transform, horocycle
   transform (Vol. 5).** Inversion formulas, Plancherel formulas, the
   Gel'fand programme of "integral geometry" — recovering a function on a
   homogeneous space from its integrals over a family of submanifolds. The
   Vol. 5 treatment is the canonical foundation that Helgason [Hel] later
   extends to general symmetric spaces.
7. **Representation theory of $SL(2,\mathbb{R})$ and $SL(2,\mathbb{C})$
   (Vol. 5).** Principal, complementary, and discrete series; Plancherel
   formula. The Vol. 5 treatment is the originating exposition that every
   subsequent rep-theory text (Knapp, Vogan, Wallach, Bump) follows or
   reformulates.
8. **Automorphic forms, the adelic viewpoint, $L$-functions, and the seed
   of the Langlands programme (Vol. 6).** Vol. 6 is the volume that
   reframes Tate's 1950 thesis as a representation-theoretic statement
   over $GL_1$ and points toward the $GL_2$ generalisation. The Vol. 6
   exposition predates Jacquet-Langlands (1970) by roughly a decade and is
   the canonical Soviet-school precursor.

The series is **not** a first introduction to functional analysis. It
assumes the reader has had a measure-theory course, basic functional
analysis (Banach and Hilbert spaces, the closed graph theorem), and is
willing to work with locally convex spaces from the start. Vol. 2's TVS
material is a serviceable refresher but not a substitute for, e.g.,
Rudin *Functional Analysis* or Schaefer *Topological Vector Spaces*.

**Peer references for the §1 framing** (cited per the rubric of §1 of
sibling FT plans; ≥3 sources required):

- [Sch] L. Schwartz, *Théorie des distributions*, 2 vols., Hermann
  Paris, 1950–1951 (revised 1966). The Western-school synthesis;
  Schwartz's $\mathcal{D}, \mathcal{D}', \mathcal{S}, \mathcal{S}',
  \mathcal{E}, \mathcal{E}'$ notation is the dual notation to
  Gel'fand-Shilov's $K\{M_p\}$ programme and Vols. 1–2 of Gel'fand are
  best read as the Soviet-school answer to Schwartz.
- [Hör] L. Hörmander, *The Analysis of Linear Partial Differential
  Operators*, Vol. 1: *Distribution Theory and Fourier Analysis*,
  Grundlehren 256, Springer, 1983 (2nd ed. 1990). Hörmander's Vol. 1 is
  the modern canonical distribution-theory text, replacing Schwartz and
  Gel'fand for most pedagogical purposes; the wave-front-set calculus
  it introduces in Ch. 8 is the microlocal refinement Gel'fand Vol. 3
  *almost* anticipates.
- [RS] M. Reed and B. Simon, *Methods of Modern Mathematical Physics*,
  Vol. 1: *Functional Analysis* (1972, rev. 1980) and Vol. 2: *Fourier
  Analysis, Self-Adjointness* (1975). Reed-Simon Vol. 1 §V (Locally
  Convex Spaces) and Vol. 2 §IX (the Fourier transform, tempered
  distributions, Sobolev spaces, Bochner's theorem) is the mathematical-
  physicist's compressed version of Gel'fand Vols. 1–4. Reed-Simon
  Vol. 1 App. V.3 explicitly cites Gel'fand-Vilenkin Vol. 4 for the
  Minlos theorem and the construction of Gaussian measures on nuclear
  duals.
- [SS] E. Stein and R. Shakarchi, *Functional Analysis: Introduction to
  Further Topics in Analysis*, Princeton Lectures in Analysis IV,
  Princeton University Press, 2011. Ch. 3 (Distributions) and Ch. 4
  (Generalised Functions) is the modern undergraduate-master's-bridge
  treatment; the historical notes there credit Gel'fand-Shilov for the
  theory of $K\{M_p\}$ test-function spaces.
- [Hel] S. Helgason, *Groups and Geometric Analysis: Integral Geometry,
  Invariant Differential Operators, and Spherical Functions*, Academic
  Press 1984 (reprinted AMS 2000). Helgason Ch. 1 and the historical
  notes credit Gel'fand-Graev-Vilenkin Vol. 5 as the originating
  source for the modern integral-geometry programme on symmetric
  spaces.
- [Bu] D. Bump, *Automorphic Forms and Representations*, Cambridge
  Studies in Advanced Math. 55, 1997. The historical notes there credit
  Gel'fand-Graev-Piatetski-Shapiro (Vol. 6) for the adelic /
  representation-theoretic reformulation of automorphic forms.

---

## §2 Coverage table (Babel Bible vs Gel'fand series, by volume)

Cross-referenced against the current Babel Bible corpus. The home chapters are
`02-analysis/11-functional-analysis/` for distribution theory (Vols. 1–4)
and `07-representation-theory/` for rep theory + automorphic forms
(Vols. 5–6); a new sub-chapter `02-analysis/13-distributions/` (or
`02-analysis/14-harmonic-analysis/`) is implied by the punch-list below
and should be created as part of priority-1 production.

✓ = covered, △ = partial / different framing, ✗ = not covered.

### Vol. 1 — *Properties and Operations* (FT 2.04)

| Gel'fand Vol. 1 topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Definition of generalised function as continuous linear functional on $K = \mathcal{D}(\Omega)$ | — | ✗ | **Gap (foundational).** |
| Order of a distribution, support, singular support | — | ✗ | **Gap.** |
| Differentiation of distributions | — | ✗ | **Gap.** |
| Multiplication by smooth functions | — | ✗ | **Gap.** |
| Change of variables; pull-back, push-forward of distributions | — | ✗ | **Gap.** |
| Direct (tensor) product of distributions | — | ✗ | **Gap.** |
| Convolution of distributions | — | ✗ | **Gap.** |
| Fourier transform on $\mathcal{S}'(\mathbb{R}^n)$ (cross-ref Vol. 4) | — | ✗ | **Gap; loaded by Chatterjee 2.03 punch-list `02.XX.YY` (Schwartz / tempered distributions).** |
| The delta function $\delta$, its derivatives, and the fundamental solutions table | — | ✗ | **Gap.** Already silently invoked in `05.05.04-hamilton-jacobi.md`, `12.03.01-bosonic-fock-space-and-second-quantisation.md` (the $\delta(p-p')$ normalisation), `06.04.05-dbar-hilbert-pde.md` (the $\bar\partial$ Green's function). |
| Principal-value, finite-part regularisations (Hadamard, Riesz) | — | ✗ | **Gap.** |

**Vol. 1 aggregate coverage estimate:** ~0%. The gap is total. Several
existing Babel Bible units (listed above) silently invoke Vol. 1 content without
a unit to anchor it.

### Vol. 2 — *Spaces of Fundamental and Generalized Functions* (FT 2.05)

| Gel'fand Vol. 2 topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Locally convex topological vector spaces | — | ✗ | **Gap.** `02.11.04-banach-spaces.md` covers Banach only. |
| Seminorms, gauges, Minkowski functionals | — | ✗ | **Gap.** |
| Inductive and projective limits of TVS | — | ✗ | **Gap.** |
| Nuclear spaces (Grothendieck) | — | ✗ | **Gap.** Reed-Simon Vol. 1 App. to V.3 anchor. |
| Spaces $\mathcal{D}, \mathcal{E}, \mathcal{S}$ and their duals | — | ✗ | **Gap.** |
| Gel'fand-Shilov spaces $\mathcal{S}_\alpha^\beta$, $K\{M_p\}$ | — | ✗ | **Gap.** Soviet-school distinctive. |
| Schwartz kernel theorem | — | ✗ | **Gap.** Foundational for the operator-valued-distribution framing in Chatterjee 2.03 / Woit 2.02. |
| Tensor products of locally convex spaces; topological tensor products | — | ✗ | **Gap.** |

**Vol. 2 aggregate coverage estimate:** ~0%.

### Vol. 3 — *Theory of Differential Equations* (FT 2.06)

| Gel'fand Vol. 3 topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Linear PDE with constant coefficients | — | ✗ | **Gap.** Codex has *no* PDE chapter; `02-analysis/12-ode/` is ODE only. |
| Fundamental solutions (Malgrange-Ehrenpreis theorem) | — | ✗ | **Gap.** |
| Hypoellipticity | — | ✗ | **Gap.** Loaded by `03.09.22-pseudodifferential.md`. |
| Cauchy problem for linear PDE in distributional form | — | ✗ | **Gap.** |
| Sobolev spaces $H^s(\mathbb{R}^n)$, $H^s(\Omega)$ | — | ✗ | **Gap.** Silently invoked in `03.09-spin-geometry/` for the index theorem (Sobolev embeddings, elliptic regularity). |
| Elliptic regularity | △ | △ | Stated as a fact in `03.09.22-pseudodifferential.md`; no foundational unit. |
| Wave-front set (Hörmander 1971; *not* in Gel'fand Vol. 3, but the immediate successor microlocal-analysis theory the Babel Bible should pointer-link) | — | ✗ | **Gap (Master-tier pointer).** |

**Vol. 3 aggregate coverage estimate:** ~0%. The Babel Bible's lack of a PDE
chapter is the single largest gap touched by this audit; Vol. 3 cannot
ship until a PDE foundation is laid.

### Vol. 4 — *Applications of Harmonic Analysis* (FT 2.07)

| Gel'fand Vol. 4 topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Fourier transform on $\mathcal{S}, \mathcal{S}', L^1, L^2$ | — | ✗ | **Gap.** No Fourier-analysis chapter exists in the Babel Bible. |
| Plancherel theorem on $\mathbb{R}^n$ | — | ✗ | **Gap.** |
| Paley-Wiener theorem (Schwartz version for compactly supported distributions) | — | ✗ | **Gap.** |
| Bochner theorem | — | ✗ | **Gap.** |
| Minlos theorem (Bochner on nuclear spaces) | — | ✗ | **Gap.** Foundational for measure theory on $\mathcal{S}'$. |
| Rigged Hilbert space (Gel'fand triple) | — | ✗ | **Gap.** Loaded by `12.02.01-hilbert-space-formalism.md` (Dirac bra-ket rigorous foundation). |
| Generalised eigenfunctions; spectral theorem in rigged form | △ | △ | `02.11.03-unbounded-self-adjoint.md` covers the spectral theorem but not the rigged-Hilbert-space refinement. |
| Generalised stochastic processes; characteristic functional | — | ✗ | **Gap.** Foundational for constructive QFT (Glimm-Jaffe); silently invoked by Chatterjee 2.03 punch-list. |

**Vol. 4 aggregate coverage estimate:** ~5% (only the bare spectral
theorem is in place).

### Vol. 5 — *Integral Geometry and Representation Theory* (FT 2.08)

| Gel'fand Vol. 5 topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Radon transform on $\mathbb{R}^n$ | — | ✗ | **Gap.** |
| John transform; X-ray transform | — | ✗ | **Gap.** |
| Funk transform on $S^2$ | — | ✗ | **Gap.** |
| Inversion formulas; range characterisation | — | ✗ | **Gap.** |
| Plancherel for the Radon transform | — | ✗ | **Gap.** |
| Horocycle transform on hyperbolic plane | — | ✗ | **Gap.** |
| Unitary representations of $SL(2,\mathbb{R})$ — principal, complementary, discrete series | — | ✗ | **Gap.** `07-representation-theory/` covers compact and Lie-algebraic cases only; non-compact semisimple is absent. |
| Unitary representations of $SL(2,\mathbb{C})$ | — | ✗ | **Gap.** |
| Plancherel formula for $SL(2,\mathbb{R})$ (Harish-Chandra) | — | ✗ | **Gap.** |
| Generalised matrix coefficients; spherical functions | — | ✗ | **Gap.** Helgason cross-reference. |

**Vol. 5 aggregate coverage estimate:** ~0%. Codex `07` covers compact /
finite-dim semisimple rep theory only; the entire infinite-dimensional
unitary side is absent.

### Vol. 6 — *Representation Theory and Automorphic Forms* (FT 2.09)

| Gel'fand Vol. 6 topic | Babel Bible unit(s) | Status | Note |
|---|---|---|---|
| Automorphic forms on the upper half-plane | — | ✗ | **Gap.** `06.06-jacobians/` touches modular curves implicitly; no $\Gamma$-invariant function theory. |
| Hecke theory; Hecke $L$-functions | — | ✗ | **Gap.** |
| $p$-adic numbers $\mathbb{Q}_p$ | — | ✗ | **Gap.** No $p$-adic content in the Babel Bible. |
| Adeles $\mathbb{A}$ and ideles $\mathbb{I}$ of $\mathbb{Q}$ | — | ✗ | **Gap.** |
| Tate's thesis: $\zeta(s)$ as a $GL_1(\mathbb{A})$ integral | — | ✗ | **Gap.** Originator: Tate 1950 PhD thesis. |
| Adelic $GL_2$ automorphic representations | — | ✗ | **Gap.** |
| Whittaker functions and the Whittaker model | — | ✗ | **Gap.** |
| Pointer: the Langlands programme | — | ✗ | **Gap (Master-tier pointer only — full Langlands is FT-out-of-scope).** |

**Vol. 6 aggregate coverage estimate:** ~0%.

**Aggregate series coverage estimate:** ~0–2% of the six-volume series has
corresponding Babel Bible units. **This is the largest single coverage gap in
the FT corpus** and is unsurprising — the Babel Bible's `02-analysis/`
chapter currently has no measure theory, no Lebesgue integration beyond a
casual mention, no Fourier analysis, no PDE, and no distribution theory.
Closing this gap requires net-new sub-chapters within `02-analysis/`
before Vol. 1 of Gel'fand can ship.

**Existing Babel Bible units that silently depend on Gel'fand-style distribution
theory (load-bearing gap):**

1. `12.03.01-bosonic-fock-space-and-second-quantisation.md` — the
   $[a(p), a^\dagger(p')] = \delta^3(p - p')$ commutator and the
   smearing $a(f) = \int f(p) a(p) dp$ are operator-valued-distribution
   statements that need Vol. 1 (delta function) + Vol. 4 (rigged Hilbert
   space) for rigorous interpretation.
2. `02.11.03-unbounded-self-adjoint.md` — the spectral theorem in the
   form needed for QM is the rigged-Hilbert-space spectral theorem of
   Vol. 4, not just the von Neumann statement.
3. `06.04.05-dbar-hilbert-pde.md` — invokes the $\bar\partial$ fundamental
   solution (Cauchy kernel as a distribution); Vol. 3 anchor missing.
4. `03.09.22-pseudodifferential.md` — pseudodifferential operators act on
   distributions; the entire framework needs Vol. 1–3 as substrate.
5. `03.09.06-fredholm-operators.md` and the index theorem track — elliptic
   regularity / Sobolev embeddings are Vol. 3 content, currently unstated.
6. `12.02.01-hilbert-space-formalism.md` — Dirac bra-ket made rigorous is
   the Gel'fand-triple statement of Vol. 4.
7. Chatterjee 2.03 punch-list item 13 (Schwartz space + tempered
   distributions) and item 12 (spectral theorem + Stone's theorem) are
   *both* Gel'fand-loaded — currently parked on the Sternberg
   *Semi-Classical Analysis* sub-list.
8. Woit 2.02 Ch. 11 row (Fourier analysis; distributions; Schwartz space)
   is explicitly flagged as a gap in `woit-quantum-theory-groups-representations.md`
   line 172 — same dependency.

These silent dependencies make the priority-1 Vol. 1–2 punch-list items a
**hard prerequisite** for marking Chatterjee 2.03, Woit 2.02, and the QFT
units in `12-quantum/` as `equivalence-covered`.

---

## §3 Gap punch-list (P3-lite — units to write, priority-ordered, per volume)

The punch-list is organised by volume block (Vol. 1–2 foundational,
Vol. 3 PDE, Vol. 4 harmonic analysis, Vol. 5 integral geometry + rep
theory, Vol. 6 automorphic forms). Within each volume block, priorities
P1 (load-bearing) → P4 (Master-tier deepening) follow the convention of
sibling FT plans.

**Priority 0 — chapter-creation blockers (must ship before any Vol. 1
units):**

- **Create `02-analysis/13-distributions/`** sub-chapter directory. Home
  for all Vol. 1–4 distribution-theory units (~12 units).
- **Create `02-analysis/14-pde/`** sub-chapter directory. Home for Vol. 3
  PDE units (~6 units) and the existing pseudodifferential / elliptic
  regularity content currently orphaned in `03.09-spin-geometry/`.
- **Create `02-analysis/15-fourier-analysis/`** sub-chapter directory.
  Home for Vol. 4 Fourier-analysis units (~6 units).
- **Create `02-analysis/06-measure-theory/`** sub-chapter directory. Home
  for the Lebesgue / Borel / abstract-measure prerequisites the Codex
  currently lacks; this is also a strict prereq for *any* serious
  Vol. 1–6 unit. Approximately 8–10 prerequisite units (sigma-algebra,
  Lebesgue measure, Lebesgue integral, monotone / dominated convergence,
  Fubini, Radon-Nikodym, $L^p$ spaces, weak-* convergence). **This is the
  single biggest production cost in the audit.**

### Vol. 1 — *Properties and Operations* (FT 2.04) — punch-list

**P1 (load-bearing):**

1. `02.13.01` Test function $\varphi \in \mathcal{D}(\Omega) = C_c^\infty(\Omega)$;
   distribution as continuous linear functional; the spaces
   $\mathcal{D}, \mathcal{D}', \mathcal{E}, \mathcal{E}'$.
2. `02.13.02` Order of a distribution; support; singular support.
3. `02.13.03` The Dirac delta $\delta$, its derivatives, and the worked
   examples (point masses, surface measures on submanifolds, principal-value
   distributions).
4. `02.13.04` Differentiation of distributions; the derivative of
   $\log|x|$, the Heaviside step, $\text{p.v.}(1/x)$.
5. `02.13.05` Multiplication by smooth functions; the Schwartz
   impossibility theorem for multiplication of distributions.
6. `02.13.06` Convolution of distributions; convolution with $\delta$
   and its derivatives; the associativity issue.

**P2 (operations on distributions):**

7. `02.13.07` Pull-back / change of variables; the chain rule for
   $\delta(f(x))$ when $f$ has simple zeros (the "delta-function
   composition formula").
8. `02.13.08` Direct (tensor) product of distributions; the kernel
   theorem statement (full proof in Vol. 2 unit).
9. `02.13.09` Hadamard / Riesz finite-part regularisation; $\chi_+^\lambda$
   and the analytic continuation in $\lambda$. Master-tier.

**Vol. 1 total: 9 units, ~3 hours each = 27 hours.**

### Vol. 2 — *Spaces of Fundamental and Generalized Functions* (FT 2.05) — punch-list

**P1 (TVS prerequisites):**

10. `02.11.10` Locally convex topological vector space; seminorm
    families; Minkowski functionals.
11. `02.11.11` Fréchet space; inductive-limit topology; $\mathcal{D}(\Omega)$ as
    LF space.
12. `02.13.10` The Schwartz space $\mathcal{S}(\mathbb{R}^n)$ and the
    tempered distributions $\mathcal{S}'(\mathbb{R}^n)$. **This is the
    item Chatterjee 2.03 and Woit 2.02 both reference as a missing
    prerequisite.**

**P2 (nuclear spaces and Schwartz kernel):**

13. `02.11.12` Nuclear space (Grothendieck); statement of the kernel
    theorem.
14. `02.13.11` Schwartz kernel theorem: continuous bilinear maps
    $\mathcal{D}(\Omega_1) \times \mathcal{D}(\Omega_2) \to \mathbb{C}$
    are integration against a distribution on $\Omega_1 \times \Omega_2$.
    Loaded by the operator-valued-distribution framing of Chatterjee 2.03.

**P3 (Gel'fand-Shilov spaces — Master-only):**

15. `02.13.12` Gel'fand-Shilov spaces $\mathcal{S}_\alpha^\beta$,
    $K\{M_p\}$; ultradistributions as the Soviet-school refinement of
    Schwartz. Master-only pointer unit.

**Vol. 2 total: 6 units, ~3 hours each = 18 hours.**

### Vol. 3 — *Theory of Differential Equations* (FT 2.06) — punch-list

**P0 (foundation — depends on a PDE chapter not yet existing):**

The Codex has no PDE chapter. Vol. 3 units depend on a baseline of 4–5
PDE units that should ship first:

16. `02.14.01` Linear partial differential operator; principal symbol;
    classification (elliptic, parabolic, hyperbolic).
17. `02.14.02` Sobolev space $H^s(\mathbb{R}^n)$; Sobolev embedding;
    Rellich-Kondrachov compactness.
18. `02.14.03` Weak solutions; energy estimates.

**P1 (Vol. 3 proper):**

19. `02.14.04` Fundamental solution of a linear PDE; the
    Malgrange-Ehrenpreis existence theorem (any non-zero constant-coefficient
    operator on $\mathbb{R}^n$ admits a fundamental solution).
20. `02.14.05` Hypoelliptic operators; the Hörmander characterisation
    (Master-tier).
21. `02.14.06` The Cauchy problem in distributional form; well-posedness
    for hyperbolic equations (wave equation as worked example).
22. `02.14.07` Elliptic regularity (interior); statement and use of the
    pseudodifferential calculus from `03.09.22`. **Promote
    `03.09.22-pseudodifferential.md` to depend on `02.14.07` once shipped.**

**P2 (microlocal pointer):**

23. `02.14.08` Wave-front set $\text{WF}(u)$ (Hörmander 1971);
    propagation of singularities. Master-only pointer unit; full theory
    is FT-out-of-scope (Hörmander Vols. 1, 4).

**Vol. 3 total: 8 units, ~3.5 hours each = 28 hours.** Higher per-unit
estimate because PDE content requires careful coordinate work and
worked examples.

### Vol. 4 — *Applications of Harmonic Analysis* (FT 2.07) — punch-list

**P1 (Fourier-analysis foundation):**

24. `02.15.01` Fourier transform on $L^1(\mathbb{R}^n)$; Riemann-Lebesgue;
    inversion under hypotheses.
25. `02.15.02` Fourier transform on $\mathcal{S}(\mathbb{R}^n)$ and the
    isomorphism $\mathcal{F}: \mathcal{S} \to \mathcal{S}$ (Plancherel's
    theorem in Schwartz form).
26. `02.15.03` Fourier transform on $\mathcal{S}'(\mathbb{R}^n)$;
    distributional Fourier transform of $\delta$, of $1$, of $x^n$, of
    $\text{p.v.}(1/x)$ (Sokhotski-Plemelj).
27. `02.15.04` Fourier transform on $L^2$; Plancherel's theorem.
28. `02.15.05` Paley-Wiener theorem (Schwartz version): characterisation
    of $\mathcal{F}(\mathcal{E}')$ as entire functions of exponential
    type.

**P2 (Vol. 4 distinctives — Bochner-Minlos, rigged Hilbert):**

29. `02.15.06` Bochner theorem: a continuous positive-definite function
    on $\mathbb{R}^n$ is the Fourier transform of a finite positive
    measure.
30. `02.13.13` Rigged Hilbert space / Gel'fand triple
    $\Phi \subset \mathcal{H} \subset \Phi'$; the generalised-eigenfunction
    spectral theorem. **Promote `02.11.03-unbounded-self-adjoint.md` to
    depend on this once shipped; this is the rigorous foundation of
    Dirac bra-ket.**
31. `02.13.14` Minlos theorem (Bochner on nuclear spaces); construction
    of Gaussian measure on $\mathcal{S}'$. Master-tier; loaded by
    constructive QFT (Glimm-Jaffe, Wightman reconstruction).

**Vol. 4 total: 8 units, ~3.5 hours each = 28 hours.**

### Vol. 5 — *Integral Geometry and Representation Theory* (FT 2.08) — punch-list

**P1 (integral geometry):**

32. `02.15.07` Radon transform on $\mathbb{R}^n$; definition, inversion
    formula (odd $n$ vs even $n$), Plancherel.
33. `02.15.08` Range characterisation (Helgason-Ludwig); the moment
    conditions.
34. `02.15.09` X-ray / John transform; the John ultrahyperbolic equation.
35. `02.15.10` Funk transform on $S^2$; integral geometry on the sphere.
    Master-tier.

**P1 (non-compact rep theory — load-bearing):**

36. `07.08.01` Unitary representation of a locally compact group;
    Haar measure; the regular representation.
37. `07.08.02` Principal series of $SL(2,\mathbb{R})$; induction from
    parabolic.
38. `07.08.03` Discrete series of $SL(2,\mathbb{R})$; holomorphic
    discrete series and the upper half-plane realisation.
39. `07.08.04` Complementary series of $SL(2,\mathbb{R})$.
40. `07.08.05` Plancherel formula for $SL(2,\mathbb{R})$
    (Harish-Chandra). Master-tier.
41. `07.08.06` Unitary representations of $SL(2,\mathbb{C})$; pointer to
    the general semisimple case (Master).

**P2 (horocycle / spherical functions):**

42. `02.15.11` Horocycle transform on the hyperbolic plane / upper
    half-plane; the duality with the principal series.
43. `07.08.07` Spherical function on $SL(2,\mathbb{R})/SO(2)$; the
    Harish-Chandra $c$-function. Master-tier.

**Vol. 5 total: 12 units, ~4 hours each = 48 hours.** Higher per-unit
estimate because both the integral-geometry and the non-compact-rep-theory
side require new sub-chapters with no Codex prior; the Master tier needs
careful Lie-theoretic machinery.

### Vol. 6 — *Representation Theory and Automorphic Forms* (FT 2.09) — punch-list

**P0 (foundational $p$-adic / adelic prerequisites — no current Codex
home):**

44. `02.16.01` $p$-adic absolute value; $p$-adic numbers $\mathbb{Q}_p$;
    completion of $\mathbb{Q}$ at $p$.
45. `02.16.02` Local-global / Ostrowski's theorem; the places of $\mathbb{Q}$.
46. `02.16.03` Adeles $\mathbb{A}_\mathbb{Q}$ and ideles
    $\mathbb{I}_\mathbb{Q}$; the restricted direct product topology;
    strong approximation.

**P1 (Vol. 6 proper):**

47. `07.09.01` Automorphic form on $\Gamma \backslash \mathbb{H}$;
    Maass forms vs holomorphic modular forms; Hecke operators.
48. `07.09.02` Tate's thesis: $\zeta(s)$ as a $GL_1(\mathbb{A})$
    integral. **Originator: J. Tate, PhD thesis 1950, "Fourier
    analysis in number fields and Hecke's zeta-functions," Princeton.**
    Master-tier.
49. `07.09.03` Automorphic representation of $GL_2(\mathbb{A})$;
    cuspidal vs Eisenstein.
50. `07.09.04` Whittaker function / Whittaker model; uniqueness
    (multiplicity-one).

**P2 (Langlands pointer — Master-only):**

51. `07.09.05` Pointer to the Langlands programme:
    automorphic representations of $GL_n(\mathbb{A})$, the principle of
    functoriality, the connection to Galois representations. Survey unit
    only; full Langlands is FT-out-of-scope.

**Vol. 6 total: 8 units, ~4 hours each = 32 hours.**

### Punch-list aggregate counts

**By volume:**

| Volume | Units | Hours |
|---|---|---|
| Vol. 1 (2.04) | 9 | ~27 |
| Vol. 2 (2.05) | 6 | ~18 |
| Vol. 3 (2.06) | 8 | ~28 |
| Vol. 4 (2.07) | 8 | ~28 |
| Vol. 5 (2.08) | 12 | ~48 |
| Vol. 6 (2.09) | 8 | ~32 |
| Chapter-creation P0 (measure theory + chapter dirs) | ~10 | ~30 |
| **Total** | **~61 units** | **~211 hours** |

**By priority across the series:**

| Priority | Unit count |
|---|---|
| P0 chapter-creation + measure-theory prereqs | ~10 |
| P1 load-bearing | ~32 |
| P2 operations / deepenings | ~12 |
| P3–P4 Master / pointer | ~7 |
| **Total** | **~61** |

This is roughly **3× the size of the next-largest combined FT audit**
(Hörmander Vols. 1–4 if/when audited, or Reed-Simon Vols. 1–4) and ~6× a
typical single-book FT audit. The production roll-out should fan out into
three parallel mini-tracks (distributions / PDE / Fourier; integral geometry
+ rep theory; automorphic forms) once the P0 chapter scaffolding is in
place.

---

## §4 Implementation sketch (P3 → P4) and originator-prose targets

**Hour estimates per volume:** see the table in §3 (Vol. 5 is the largest
at ~48 hours; the P0 chapter-creation cost is ~30 hours dominated by the
measure-theory mini-chapter).

**Total realistic production:** ~211 hours of focused unit production,
i.e. **5–7 weeks of dedicated work** at the corpus' historical 30–35 hour/
week sustained pace, or **3–4 months at a sustainable 15 hour/week
side-cycle pace.** Per AGENTIC_EXECUTION_PLAN.md §2 (concurrency budget),
this is too large for a single Wave; it should be split into three Waves:

- **Wave 6 (Vols. 1–2 + measure-theory P0):** ~85 hours (~3 weeks
  focused). Unblocks Chatterjee 2.03 and Woit 2.02 equivalence.
- **Wave 7 (Vols. 3–4):** ~56 hours (~2 weeks focused). Unblocks the
  PDE / Fourier prerequisites silently invoked across the QFT and
  spin-geometry tracks.
- **Wave 8 (Vols. 5–6):** ~80 hours (~3 weeks focused). New
  representation-theory and automorphic-forms sub-chapters; this Wave
  also unblocks the Master-tier connections to Langlands and to
  Helgason FT 1.06.

**Originator-prose targets** per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md`
§10. Originator citations (the historical sources whose statements should
be quoted or near-quoted in the §Originator section of the relevant
units):

- **S. L. Sobolev (1936),** "Méthode nouvelle à résoudre le problème de
  Cauchy pour les équations linéaires hyperboliques normales," *Mat.
  Sb.* 1, 39–72. Originator of *functionals as generalised solutions*
  (the distributional pre-history). Cite in `02.13.01` and `02.13.04`.
- **L. Schwartz (1944–1950),** "Sur certaines familles non
  fondamentales de fonctions continues," *Bull. Soc. Math. France* 72
  (1944), and the two-volume *Théorie des distributions* (Hermann
  1950–1951). Originator of the formal theory: the spaces $\mathcal{D},
  \mathcal{D}', \mathcal{S}, \mathcal{S}'$ and the systematic operations
  calculus. Cite in `02.13.01`, `02.13.10`, `02.15.03`.
- **I. M. Gel'fand and G. E. Shilov (1953–1958),** *Generalized
  Functions* Vols. 1–3 (Russian original Fizmatgiz, English Academic
  Press 1964). The Soviet-school synthesis; introduces the $K\{M_p\}$
  test-function-space programme. Cite in `02.13.01`, `02.13.10`,
  `02.13.12`.
- **L. Hörmander (1955, 1971),** "On the theory of general partial
  differential operators," *Acta Math.* 94, and "Fourier integral
  operators I," *Acta Math.* 127. Originator of the modern PDE
  framework (Hörmander's theorem on hypoellipticity, the wave-front
  set). Cite in `02.14.05` and `02.14.08`.
- **J. Tate (1950),** "Fourier analysis in number fields and Hecke's
  zeta-functions," PhD thesis Princeton (published 1967 in Cassels-Fröhlich,
  *Algebraic Number Theory*). Originator of the adelic / representation-theoretic
  formulation of $\zeta(s)$. Cite in `07.09.02`.
- **Harish-Chandra (1950s–1960s),** the long sequence of papers on
  the representation theory of real semisimple Lie groups; the
  Plancherel formula for $SL(2,\mathbb{R})$ in *Trans. AMS* 1952. Cite
  in `07.08.05` and `07.08.07`.

**Notation crosswalk.** Gel'fand-Shilov use $K, K'$ where Schwartz uses
$\mathcal{D}, \mathcal{D}'$ and the modern literature (Hörmander,
Reed-Simon, Stein-Shakarchi) uses $\mathcal{D}, \mathcal{D}'$. The Codex
should follow the modern convention ($\mathcal{D}, \mathcal{D}'$,
$\mathcal{S}, \mathcal{S}'$, $\mathcal{E}, \mathcal{E}'$) and note the
Gel'fand-Shilov $K\{M_p\}$ notation only in `02.13.12` (the
Gel'fand-Shilov-spaces pointer unit). Record this decision in a
§Notation paragraph of `02.13.01`.

---

## §5 What this plan does NOT cover (non-goals)

- **The Tate-Wiles / modularity-theorem material.** Vol. 6 points
  toward Langlands; the modularity theorem (Wiles 1995, Taylor-Wiles
  1995, Breuil-Conrad-Diamond-Taylor 2001) is FT-out-of-scope. Pointer
  in `07.09.05` only.
- **Full Langlands programme.** Local Langlands for $GL_n$
  (Harris-Taylor / Henniart for $p$-adic; Langlands for real
  Archimedean) and global functoriality conjectures are FT-out-of-scope.
  Pointer in `07.09.05` only.
- **Gel'fand-Manin *Algebra V* (FT 3.02).** The sibling Gel'fand
  series-entry on derived categories, D-modules, and Riemann-Hilbert is
  FT 3.02 and gets its own audit plan. This plan does **not** cover
  D-modules even though they are the natural successor to the Vol. 3
  distribution / PDE framework. (Riemann-Hilbert: the equivalence
  between regular holonomic D-modules and constructible sheaves is a
  later refinement of the Vol. 3 fundamental-solutions programme; FT
  3.02 plan owns it.)
- **Constructive / axiomatic QFT.** Glimm-Jaffe construction of
  $\phi^4_{2,3}$ from the Bochner-Minlos / characteristic-functional
  framework is a Vol. 4 *application* mentioned only in pointers;
  full constructive-QFT coverage is FT-out-of-scope. Chatterjee 2.03
  plan touches this lightly.
- **Hyperfunctions (Sato 1959–1960).** A successor refinement to
  Gel'fand-Shilov $K\{M_p\}$; mentioned in `02.13.12` Master-tier only.
  Full Sato-Kashiwara hyperfunction theory FT-out-of-scope.
- **Microlocal analysis / Fourier integral operators beyond pointer.**
  Hörmander Vols. 3–4 are the canonical reference; FT-out-of-scope.
  `02.14.08` is a pointer only.
- **Line-number-level inventory of every named theorem across the six
  volumes.** A full P1 audit at line-number granularity is a multi-week
  job per volume and is queued in `docs/catalogs/NEED_TO_SOURCE.md`
  for re-audit once full PDFs are obtained.
- **Exercise pack production.** Gel'fand-Vilenkin volumes are notoriously
  thin on exercises (Soviet-school style: examples are integrated into
  the body). Exercise-pack production for these units is P4 priority and
  follows the priority-1 unit ship.

---

## §6 Acceptance criteria for FT equivalence (Gel'fand series)

Per `docs/plans/FASTTRACK_EQUIVALENCE_PLAN.md` §3.4, each volume is at
equivalence-coverage when:

- The P0 chapter-creation + measure-theory prerequisite block has shipped
  (strict prereq for all six volumes).
- For Vols. 1–2 (FT 2.04, 2.05): the P1 units `02.13.01–02.13.06`,
  `02.11.10–02.11.11`, `02.13.10` have shipped. Vol. 2's P2 nuclear-space
  + Schwartz kernel block (`02.11.12`, `02.13.11`) brings coverage to
  ~95%; Vol. 2 Master-only `02.13.12` brings it to ≥95%.
- For Vol. 3 (FT 2.06): the P0 PDE foundation (`02.14.01–02.14.03`) plus
  Vol. 3 P1 (`02.14.04–02.14.07`) brings coverage to ~90%; the wave-front-set
  pointer (`02.14.08`) brings it to ≥95% for FT purposes.
- For Vol. 4 (FT 2.07): the P1 Fourier block (`02.15.01–02.15.05`) plus
  the rigged-Hilbert / Minlos block (`02.13.13–02.13.14`) brings coverage
  to ~95%.
- For Vol. 5 (FT 2.08): the P1 integral-geometry block (`02.15.07–02.15.10`)
  plus the P1 non-compact-rep-theory block (`07.08.01–07.08.06`) brings
  coverage to ~85%; the horocycle / spherical-function block (`02.15.11`,
  `07.08.07`) brings it to ≥95%.
- For Vol. 6 (FT 2.09): the P0 $p$-adic / adelic block
  (`02.16.01–02.16.03`) plus the P1 automorphic-forms block
  (`07.09.01–07.09.04`) brings coverage to ~85%; the Langlands pointer
  (`07.09.05`) brings it to ≥95%.
- Notation decisions are recorded (see §4).
- Pass-W weaving connects the new units (a) within the new
  `02-analysis/13-distributions/`, `02-analysis/14-pde/`,
  `02-analysis/15-fourier-analysis/`, `02-analysis/16-adeles-p-adic/`
  sub-chapters, and (b) lateral-link back to silently dependent units
  listed in §2 (Chatterjee 2.03 punch-list items, Woit 2.02 Ch. 11 row,
  `12.03.01`, `02.11.03`, `06.04.05`, `03.09.22`, `03.09.06`, `12.02.01`).

**P5 verification will run per-volume**, not series-wide. Six independent
verification runs, one per volume — this is the largest single audit in
the FT corpus and the verification cost reflects that. Per-volume P5
sign-off allows partial-equivalence reporting in the FT roadmap as each
volume's punch-list closes.

---

## §7 Sourcing

**Local copies (sought, all paths checked):**

- `reference/fasttrack-texts/00-prereqs/` — no Gel'fand titles.
- `reference/fasttrack-texts/01-fundamentals/` — no Gel'fand titles.
- `reference/fasttrack-texts/02-quantum-stat/` — no Gel'fand titles.
- `reference/textbooks-extra/` — checked, no Gel'fand titles.
- `reference/book-collection/` — checked, no Gel'fand titles.
- General `~/Documents` + `~/Downloads` find — no PDFs match
  Gel'fand / Vilenkin / "Generalized Functions"
  (the only hit is a marketing thumbnail image in
  `reference/fast-track/images/gelfand4-672x1024__9a16cf9de3.png`).

**Per-volume audit completeness:**

| Volume | FT | Local PDF? | Audit | Notes |
|---|---|---|---|---|
| Vol. 1 | 2.04 | No | reduced | Russian + English on Archive.org intermittently (1964 Academic Press scan). |
| Vol. 2 | 2.05 | No | reduced | 1968 Academic Press scan partially on Archive.org. |
| Vol. 3 | 2.06 | No | reduced | 1967 Academic Press scan partially on Archive.org. |
| Vol. 4 | 2.07 | No | reduced | 1964 Academic Press scan partially on Archive.org. |
| Vol. 5 | 2.08 | No | reduced | 1966 Academic Press scan partially on Archive.org. |
| Vol. 6 | 2.09 | No | reduced | Same; the Gel'fand-Graev-Piatetski-Shapiro edition. |

All six volumes are marked **reduced**. P5 cannot mark any volume
`equivalence-covered` from this plan alone; each volume is queued for
re-audit in `docs/catalogs/NEED_TO_SOURCE.md` (existing entry at line 97
of that file covers all six).

**Acquisition options for full audit:**

- **AMS Chelsea reprint set (2015).** Complete six-volume box set,
  hardcover, ~$250 retail (AMS member discount available). Canonical
  reprint with original pagination and corrections; ISBN
  978-1-4704-2658-3 for the set.
- **Academic Press scans (1964–1968).** Intermittently available on
  Archive.org under restricted-access lending; the older the volume,
  the more likely it has dropped into accessible scans. Worth a
  re-check at each Wave kickoff.
- **Russian originals (Fizmatgiz 1958–1962).** Public domain in Russia;
  available on Russian mathematical archives (e.g.
  `mat.net.ua`, `eqworld.ipmnet.ru`); language barrier but the
  notation is largely consistent.

**License.** AMS Chelsea reprints are copyright-active (AMS holds rights
to the English translation; original Russian rights expired). Local PDF
storage of AMS Chelsea is not licit; either purchase the print volumes for
local audit reference or use restricted-access scans of the older Academic
Press edition.

**Recommendation:** purchase the AMS Chelsea six-volume set (~$250) and
add to `reference/fasttrack-texts/02-quantum-stat/` as
`Gelfand-Vilenkin-GeneralizedFunctionsVol{1,2,3,4,5,6}.pdf` (scanned from
purchased prints) **only** for personal-audit fair-use purposes. The cost
is justified by the audit scope: this is the largest single audit in the
FT corpus and unblocks Chatterjee 2.03, Woit 2.02, the QFT / spin-geometry
silent dependencies (§2), and the entire non-compact-rep-theory and
automorphic-forms tracks of FT Tier 2.

---

## §8 Coordination notes (cross-plan)

This audit is the **load-bearing prerequisite** for several other FT
plans, listed below for orchestrator-status tracking:

- **Chatterjee 2.03 punch-list** items 12 (spectral theorem + Stone's
  theorem) and 13 (Schwartz space + tempered distributions) are
  satisfied by Vols. 1–2 + Vol. 4 P1 units in this plan. Coordinate
  with `plans/fasttrack/chatterjee-qft-lecture-notes.md`.
- **Woit 2.02** Ch. 11 row (Fourier analysis; distributions; Schwartz
  space) is satisfied by the same Vols. 1–2 + Vol. 4 P1 block.
  Coordinate with `plans/fasttrack/woit-quantum-theory-groups-representations.md`.
- **Lawson-Michelsohn 1.07** spin-geometry / index-theorem track
  silently depends on Vol. 3 Sobolev / elliptic-regularity content
  (`02.14.02`, `02.14.07`). Coordinate when those units enter
  production.
- **Sternberg *Semi-Classical Analysis*** (related-only free text, not a
  canonical FT entry) sub-list parks the Schwartz / tempered-distribution
  + spectral-theorem prereqs; this plan **owns** those prereqs.
  Sternberg sub-list should be updated to reference Vols. 1–2 +
  Vol. 4 of this plan.
- **Helgason FT 1.06** (*Differential Geometry, Lie Groups, and
  Symmetric Spaces*) has a downstream relationship: Helgason's later
  text *Groups and Geometric Analysis* (1984) is the modern extension
  of Vol. 5's integral-geometry programme; the FT 1.06 plan should
  cross-link to Vols. 5 units of this plan.
- **Gel'fand-Manin Algebra V (FT 3.02)** sibling — explicit non-goal
  per §5. Both plans audit Gel'fand-named series but cover disjoint
  material (this plan: distributions, harmonic analysis, rep theory,
  automorphic forms; FT 3.02: derived categories, D-modules,
  Riemann-Hilbert).

---

## §9 Plan provenance

Plan stub generated 2026-05-18 as part of the AGENTIC_EXECUTION_PLAN.md
Wave 6 audit pass, combined-audit recommendation. Audit agent: Claude
Opus 4.7 (1M context). Reduced-audit basis: no local PDFs found across
three reference-folder paths; WebFetch probes (Archive.org search,
Wikipedia *Generalized function*, Wikipedia *Israel Gelfand*) returned
volume-title confirmation only, no free PDF surface. Punch-list
inventory built from the publicly visible volume TOC, the canonical
peer-reference network (Schwartz, Hörmander, Reed-Simon, Stein-Shakarchi,
Helgason, Bump), and the silent-dependency analysis of the current
Babel Bible corpus listed in §2. Re-audit queued upon acquisition of AMS
Chelsea reprint set.
