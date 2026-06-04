# Gel'fand–Vilenkin–Shilov–Graev, *Generalized Functions* Vols. 2–6 — deepening gap audit

**Books:** FT 2.05–2.09 (Vols. 2–6). Vol. 1 (2.04) was audited as part of the
combined plan `plans/fasttrack/gelfand-vilenkin-generalized-functions-combined.md`.

**Method note.** The 2026-05-18 combined plan reported ~0% coverage of the
entire six-volume series and proposed ~61 new units. That assessment is now
**stale**: the `02-analysis/` chapter has since acquired full measure-theory
(`02.07.*`), harmonic-analysis (`02.10.*`), PDE (`02.13.*`), and
microlocal-analysis (`02.14.*`) sub-chapters, plus a large symmetric-space
rep-theory block (`07.04.*`) and a numerical-PDE chapter (`24-numerical-pde`).
This deepening pass grep-verified each volume's headline content against the
**live** corpus per the new-audit brief (assume-covered-until-proven-absent).
The bulk of Vols. 1–4 distribution theory, the Fourier/Plancherel/Bochner
material, the kernel theorem, Paley–Wiener–Schwartz, fundamental solutions
(Malgrange–Ehrenpreis), Sobolev spaces, and elliptic/parabolic/hyperbolic
classification is **already covered**. The genuine residual gaps are four
Soviet-school distinctives, listed below.

---

## Genuine gaps (4)

### GAP 1 — Rigged Hilbert space (Gel'fand triple) and the nuclear spectral theorem

- **proposed id:** `02.14.05` (free slot; `02.14.01–04` occupied)
- **title:** "Rigged Hilbert space (Gel'fand triple) and the nuclear spectral theorem"
- **spec:** The Gel'fand triple $\Phi \subset \mathcal{H} \subset \Phi'$ with
  $\Phi$ a nuclear test-function space; statement and proof sketch of the
  nuclear (Gel'fand–Maurin) spectral theorem — a self-adjoint operator with a
  cyclic vector admits a complete system of *generalized eigenfunctions* in
  $\Phi'$, giving a direct-integral diagonalization. This is the rigorous
  foundation of the Dirac bra-ket "$|x\rangle$, $|p\rangle$" calculus.
- **prereqs:** `02.14.04` (distributions / Schwartz kernel theorem; nuclear
  spaces), `02.11.03` (unbounded self-adjoint operators; spectral theorem),
  `02.10.04` (Fourier transform / Schwartz space), `02.07.08` (Radon–Nikodym
  / direct integrals)
- **chapter dir:** `content/02-analysis/14-microlocal-analysis/`;
  frontmatter `section: analysis`, `chapter: microlocal-analysis`
- **why a gap:** `12.02.01` and `12.02.02` *mention* the rigged Hilbert space /
  Gel'fand triple as the rigorous home for Dirac's improper eigenstates, but
  only as a physics-level pointer (`[ref: TODO_REF Hall Ch. 6]`,
  `de la Madrid 2005`). No unit *states* the Gel'fand triple construction or
  the generalized-eigenfunction (nuclear) spectral theorem. This is the Vol. 4
  headline and the load-bearing rigorous foundation silently invoked by
  `12.02.01`, `12.02.02`, and `12.13.01` (the $\delta(p-p')$ normalization).

### GAP 2 — Bochner–Minlos theorem and characteristic functionals on nuclear spaces

- **proposed id:** `02.10.06` (free slot; `02.10.01,04,05` occupied)
- **title:** "The Bochner–Minlos theorem and characteristic functionals on nuclear spaces"
- **spec:** Minlos' extension of Bochner's theorem from $\mathbb{R}^n$ to a
  nuclear space $\Phi$: a continuous positive-definite functional on $\Phi$
  with $L(0)=1$ is the characteristic functional of a unique probability
  (cylinder) measure on the dual $\Phi'$. Application: construction of Gaussian
  measure / the free field on $\mathcal{S}'(\mathbb{R}^n)$ — the measure-theoretic
  backbone of constructive (Euclidean) QFT.
- **prereqs:** `02.10.04` (Fourier transform; Bochner's theorem on $\mathbb{R}^n$
  is stated there), `02.14.04` (nuclear spaces, $\mathcal{S}'$), `02.07.07`
  (product measures), `08.14.01` (Wiener measure / Brownian path integral — the
  prototype $\Phi'$-measure)
- **chapter dir:** `content/02-analysis/10-harmonic/`; frontmatter
  `section: analysis`, `chapter: harmonic`
- **why a gap:** Bochner's theorem on $\mathbb{R}^n$ is covered (`02.10.04`,
  Originator §). The *nuclear-space* extension (Minlos) and the
  characteristic-functional construction of measures on $\mathcal{S}'$ are
  genuinely absent — grep for `Minlos`/`characteristic functional`/`cylinder
  measure` returns nothing in `02.*`, `08.14.01`, or `12.*`. This is a Vol. 4
  distinctive and a stated prerequisite of the constructive-QFT track.

### GAP 3 — The Radon transform and integral geometry

- **proposed id:** `02.10.07` (free slot)
- **title:** "The Radon transform: inversion, Plancherel, and the range theorem"
- **spec:** The Radon transform $Rf(\omega,p)=\int_{\langle x,\omega\rangle=p} f$
  on $\mathbb{R}^n$; the projection-slice (Fourier-slice) theorem; the inversion
  formula (the $n$ odd vs. $n$ even / Hilbert-transform dichotomy via the
  backprojection $R^\#$ and $(-\Delta)^{(n-1)/2}$); the Plancherel identity; the
  Helgason–Ludwig range/moment conditions. Mention the X-ray/John transform and
  the Funk transform on $S^2$ as the integral-geometry family.
- **prereqs:** `02.10.04` (Fourier transform / Plancherel), `02.07.11`
  (coarea formula — integration over level sets), `02.13.02` (Riesz potentials
  / fractional Laplacian), `02.14.04` (distributions)
- **chapter dir:** `content/02-analysis/10-harmonic/`; frontmatter
  `section: analysis`, `chapter: harmonic`
- **why a gap:** The mathematical Radon transform / integral geometry is
  entirely absent — grep finds only seismic/medical *tomography* in physics
  chapters (`27.*`, `29.*`, `10.05.02`) and the coarea formula. This is the
  Vol. 5 headline (the originating source for Helgason's integral-geometry
  programme, per the combined plan §1).

### GAP 4 — The unitary dual of $SL(2,\mathbb{R})$: principal, discrete, and complementary series

- **proposed id:** `07.07.10` (free slot; `07.07.01–09` occupied, sits directly
  after the Lorentz / Wigner unit `07.07.09`)
- **title:** "The unitary dual of $SL(2,\mathbb{R})$: principal, discrete, and complementary series"
- **spec:** Bargmann's classification of the irreducible unitary representations
  of $SL(2,\mathbb{R})$: the (spherical and non-spherical) principal series via
  parabolic induction, the holomorphic/antiholomorphic discrete series realized
  on the upper half-plane, the complementary series, and the two limits of
  discrete series; statement of the $SL(2,\mathbb{R})$ Plancherel formula
  (Harish-Chandra) with the $\lambda\tanh$ / $\lambda\coth$ Plancherel densities.
  Pointer to $SL(2,\mathbb{C})$ (Gel'fand–Naimark).
- **prereqs:** `07.07.09` (finite-dim non-unitary $(j_1,j_2)$ reps of
  $SL(2,\mathbb{C})$; states the infinite-dim unitary reps exist but does not
  build them), `07.04.12` (spherical functions on $G/K$; spherical *principal*
  series and the spherical-Plancherel measure are covered there), `07.04.09`
  (Iwasawa decomposition), `07.07.03` (Haar measure), `07.07.07` (Mackey
  induced representations)
- **chapter dir:** `content/07-representation-theory/07-compact-lie/`
  (the de-facto "non-finite-dim / Lie-group reps" chapter — holds Wigner,
  Mackey, Lorentz); frontmatter `section: representation-theory`,
  `chapter: harmonic-analysis` (matching `07.07.04`'s existing convention)
- **why a gap:** `07.07.09` covers only the *finite-dimensional non-unitary*
  $(j_1,j_2)$ reps and explicitly cites Bargmann/Naimark for the unitary ones
  without constructing them. `07.04.12` covers the *spherical* principal series
  and the bi-$K$-invariant Plancherel measure only. The full unitary dual
  (discrete + complementary + non-spherical principal) and the group Plancherel
  decomposition of $L^2(SL(2,\mathbb{R}))$ are absent. This is the Vol. 5/6
  rep-theory headline and the canonical non-compact-semisimple example.

---

## COVERED (not gaps)

- **Test functions, $\mathcal{D},\mathcal{D}',\mathcal{E},\mathcal{E}',\mathcal{S},\mathcal{S}'$, distributional derivative, support, order, multiplication, convolution, tensor product** (Vol. 1–2 core) — `02.14.04` (comprehensive distributions unit).
- **Dirac delta, principal value $\mathrm{p.v.}(1/x)$, Sokhotski–Plemelj, Hadamard finite part** (Vol. 1) — `02.14.04` (body: 12× p.v., Sokhotski, Hadamard).
- **Schwartz kernel theorem; nuclear spaces (Grothendieck)** (Vol. 2 headline) — `02.14.04` (23× "kernel theorem", 18× "nuclear").
- **Paley–Wiener–Schwartz theorem** (Vol. 2/4) — `02.14.04` (6× Paley-Wiener).
- **Schwartz space $\mathcal{S}$, tempered distributions $\mathcal{S}'$** (Vol. 2) — `02.14.04`, `02.10.04`.
- **Wave-front set, pseudodifferential operators, propagation of singularities** (post-Vol. 3 microlocal successor) — `02.14.01`, `02.14.02`, `02.14.03`.
- **Fourier transform on $L^1,L^2,\mathcal{S},\mathcal{S}'$; Plancherel; Riemann–Lebesgue; Hausdorff–Young** (Vol. 4) — `02.10.01`, `02.10.04`.
- **Bochner's theorem on $\mathbb{R}^n$ (positive-definite ⇔ FT of a positive measure)** (Vol. 4) — `02.10.04` (Originator §, line 719).
- **Fundamental solutions; Malgrange–Ehrenpreis existence theorem** (Vol. 3 headline) — `02.13.02` (Theorem 7, full statement + Originator §).
- **Newtonian potential, heat kernel, d'Alembert/spherical means/Huygens, Laplace maximum principle** (Vol. 3 fundamental-solutions worked examples) — `02.13.01–04`.
- **Elliptic/parabolic/hyperbolic classification of 2nd-order linear PDE; well-posedness; Cauchy problem** (Vol. 3 — Petrowsky-correctness content) — `02.13.04` (classification trichotomy stated), `02.13.03` (heat/parabolic well-posedness, Lions–Malgrange backward uniqueness).
- **Sobolev spaces $H^s$, $W^{k,p}$; weak/variational solutions; elliptic regularity** (Vol. 3) — `24.01.01`, `24.01.02`, `24.01.03`, `02.14.02` (elliptic regularity via $\Psi$DO).
- **Spectral theorem (unbounded self-adjoint), PVM, continuous spectrum** (Vol. 4 base) — `02.11.03`, `12.02.02`.
- **Spherical functions on $G/K$, Harish-Chandra $c$-function, spherical-transform Plancherel for $L^2(G/K)$, Harish-Chandra isomorphism** (Vol. 5 symmetric-space side) — `07.04.11`, `07.04.12`.
- **Haar measure, Peter–Weyl, Weyl integration, induced representations (Mackey), Wigner's Poincaré classification** (Vol. 5 rep-theory machinery) — `07.07.02–07`.
- **Finite-dim $(j_1,j_2)$ reps of the Lorentz group $SL(2,\mathbb{C})$; non-unitarity of finite-dim reps of non-compact groups** (Vol. 6 Lorentz) — `07.07.09`.
- **$p$-adic numbers, adeles, ideles, Tate's thesis, automorphic forms, Hecke/$L$-functions, modular forms, local/global Langlands** (Vol. 6 number-theory side) — `21.02.*`, `21.04.*` (`21.04.01` modular forms on $SL_2(\mathbb{Z})$, `21.04.03` Eichler–Shimura), `21.06.*`, `21.10.01` (Langlands philosophy survey: principal series, Satake, discrete series of $GL_2(\mathbb{R})$). The combined-plan §3 Vol. 6 punch-list (items 44–51) is now substantially covered by the existing `21-number-theory` chapter.

## OUT OF SCOPE

- **Gel'fand–Shilov spaces $\mathcal{S}_\alpha^\beta$, $K\{M_p\}$, ultradistributions.** Soviet-school refinement of Schwartz with no theorem-level payoff beyond what `02.14.04` already delivers; the combined plan itself ranks this Master-only pointer and puts the successor (Sato hyperfunctions) out of scope (§5). Notation crosswalk to Schwartz $\mathcal{D},\mathcal{S}$ already adopted corpus-wide.
- **Horocycle transform / the full Harish-Chandra Plancherel for general semisimple $G$** (Vol. 5 deep apparatus). Large technical machinery; the $SL(2,\mathbb{R})$ case (GAP 4) plus the spherical-Plancherel in `07.04.12` is the FT-appropriate payoff. General horocycle-transform theory is Helgason-monograph scope.
- **Whittaker models / multiplicity-one; adelic $GL_2$ automorphic representations beyond the Langlands survey.** `21.10.01` already carries the survey-level statement; full Whittaker-model development is Bump-monograph / FT-2.09-deep scope and not a single-unit gap.
- **Full constructive QFT ($\phi^4_{2,3}$ from Bochner–Minlos).** A Vol. 4 *application*; GAP 2 supplies the Bochner–Minlos foundation, but the Glimm–Jaffe construction itself is FT-out-of-scope per the combined plan §5.
