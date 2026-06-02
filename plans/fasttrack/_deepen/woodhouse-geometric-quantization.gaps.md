# Woodhouse, *Geometric Quantization* (FT 3.09) — deepening gap file

**Slug:** `woodhouse-geometric-quantization`. Re-audit against the live corpus (2026-06-02).

The first-pass audit (`plans/fasttrack/woodhouse-geometric-quantization.md`) was
a REDUCED pass (no local PDF) and already concluded the surface was "the
smallest of any §3 book audited" — the GQ core shipped at Woodhouse depth via
the Souriau 2.11 audit (`05.11.01-03`). Re-verifying its punch-list against the
*current* corpus, **most of it is now shipped or was always more-covered than
the audit credited**, because `05.11.03`'s Master + exercise layers are far
deeper than a typical unit:

- **P1 item 2 (cotangent → Schrödinger)** — fully worked in `05.11.03` Beginner
  Steps 1-3 (lines 111-115, $\mathcal H=L^2(\mathbb R_q)$) and Exercise (line 488,
  explicit $\hat p_\mathcal P=-i\hbar\partial_q$, $\hat q=q\cdot$, commutator
  verified). COVERED.
- **P1 item 3 (harmonic oscillator + $\tfrac12\hbar$ metaplectic shift)** —
  `05.11.03` Master (line 502, $n$-dim spectrum $(n_i+\tfrac12)\hbar$, zero-point
  energy, Casimir/Lamb) + Ex 6 (line 394). COVERED.
- **P2 item 4 (BKS / geometric Stone-von Neumann)** — `05.11.03` key-theorem (iv)
  + a full *proved* unitarity proposition (line 526), the position-momentum
  Fourier kernel (Ex 7, line 424), the Maslov-bundle/caustic correction (Ex 9),
  the Shale-Weil representation (Master line 498), and the category/functor view
  (line 500). Equivalence-depth coverage; a standalone unit is packaging, not a
  gap. COVERED.
- **P2 item 5 (Hamilton-Jacobi WKB / classical-limit framing)** — `05.05.04`
  already carries the named "Hamilton-Jacobi and the Schrödinger semiclassical
  limit" theorem (line 525). Deepening DONE. COVERED.
- **P3 item 8 (relativistic particle quantization)** — `05.11.09` shipped
  (mass-shell → Klein-Gordon, presymplectic reduction, Weyl-ordering
  proposition). COVERED.

What genuinely remains is narrower than the audit's punch-list: the
**Groenewold-van Hove no-go theorem** (the audit's own "single most
load-bearing missing theorem", confirmed absent), the **orbit-method GQ unit**
that `05.11.03` already forward-references as a *nonexistent* `05.11.04`, and a
borderline **time-dependent-evolution-space** quantization unit.

Free slots in `05.11.*`: **04, 05, 06, 07, 08** (only 01, 02, 03, 09 occupied).

**Genuine gaps: 2 (+1 borderline). COVERED-verified topics: 9.**

---

## Genuine gaps

### Gap 1 — Kostant-Souriau quantization map, quantizable observables, and the Groenewold-van Hove no-go theorem
- **id:** `05.11.04` (free slot; also resolves the dangling forward-ref below)
- **title:** The quantization map and the Groenewold-van Hove obstruction
- **spec:** The prequantum representation $\hat f=-i\hbar\nabla_{X_f}+f$ as a Lie-algebra homomorphism (recap from `05.11.01`); the restriction to observables whose Hamiltonian flow *preserves the polarisation* $\mathcal P$ (these descend directly to operators on $\mathcal H_\mathcal P$) versus those that need the infinitesimal-BKS prescription; and the **Groenewold-van Hove theorem**: no linear map $f\mapsto\hat f$ on all of $C^\infty(\mathbb R^{2n})$ can simultaneously be a Poisson-bracket homomorphism, restrict to the Schrödinger operators on $\{q_i,p_i,1\}$, and act irreducibly — the obstruction first appears at cubic order ($q^3,p^3,q^2p^2$). State the no-go precisely and exhibit the cubic-order failure.
- **prereqs:** `05.11.01` (prequantum representation, Lie-algebra homomorphism), `05.11.03` (polarisation, polarised sections, the polarisation-projector), `05.02.01` (Poisson bracket), `09.04.02` (Hamilton's equations — carries the one-line Groenewold mention to be expanded)
- **chapter dir:** `content/05-symplectic/11-geometric-quantization/`; frontmatter `section: symplectic`, `chapter: geometric-quantization`
- **why genuine:** Groenewold-van Hove appears in the corpus only as a *single passing sentence* in `09.04.02` (line 764: "Groenewold's theorem (1946) shows no homomorphism extends to all polynomial observables") and a glancing mention in `05.11.09`; it is **never stated or proved as a theorem**, and the cubic-order obstruction is shown nowhere. The audit (§3 P1 item 1) calls this "the single most-load-bearing missing theorem; the honest statement of what geometric quantization can and cannot do." The companion content — *which* observables are directly quantizable vs. BKS-corrected — is touched only in `05.11.03` Ex (line 488) for the single observable $\hat p$, with no general statement. This is the operational core of Woodhouse Ch. 9 and is genuinely missing as a unit.

### Gap 2 — Geometric quantization of integral coadjoint orbits and the Borel-Weil realisation
- **id:** `05.11.05` (free slot)
- **title:** Quantization of coadjoint orbits and Borel-Weil
- **spec:** For a compact Lie group $G$, an integral coadjoint orbit $\mathcal O_\lambda\subset\mathfrak g^*$ (integrality $\Leftrightarrow$ $\lambda$ a dominant weight) prequantises with the Kirillov-Kostant-Souriau form; the Kähler polarisation from the invariant complex structure selects holomorphic sections; **Borel-Weil** identifies $\mathcal H_{\mathcal O_\lambda}\cong V_\lambda$, the irreducible $G$-representation of highest weight $\lambda$, with $G$ acting by the prequantum operators. Worked case: $\mathrm{SU}(2)$, $\mathcal O_j\cong S^2$ of area $4\pi j\hbar$ giving the spin-$j$ representation (assembling the prequantum side from `05.11.02`). This is the GQ-chapter incarnation of the orbit method.
- **prereqs:** `05.11.02` (prequantisation of the spin coadjoint orbit), `05.11.03` (Kähler polarisation, polarised holomorphic sections), `05.03.01` (coadjoint orbit, KKS form), `07.06.09` (Borel-Weil theorem), `03.06.20` (Borel-Hirzebruch cohomology of $G/T$, optional lateral)
- **chapter dir:** `content/05-symplectic/11-geometric-quantization/`; `section: symplectic`, `chapter: geometric-quantization`
- **why genuine:** `05.11.03` **forward-references a nonexistent `05.11.04` as "the orbit method" twice** (hook target at line 81, Bridge at line 277) — a dangling reference. The constituent pieces exist scattered (`05.11.02` prequantises the spin orbit but stops short of the full Borel-Weil rep-identification; `07.06.09` proves Borel-Weil in pure rep-theory language with no GQ/polarisation framing; `03.09.25` is the Kirillov *character* formula via the index theorem, a different result), but **no GQ-chapter unit assembles integral orbit → Kähler-polarised holomorphic sections → irreducible $G$-rep**. The audit's §2 marks Borel-Weil "✓" as "general statement inside `05.11.01`'s proof set", but that is a remark, not the worked orbit-method unit Woodhouse Ch. 9 closes with. Producing it both fills the gap and repoints the dangling `05.11.04` references (which should be redirected to whichever id this ships under, or `05.11.05` if `05.11.04` is taken by Gap 1 — fix during weaving).

### Gap 3 (borderline) — Time-dependent quantization and the presymplectic evolution space
- **id:** `05.11.06` (free slot)
- **title:** Time-dependent quantization on the evolution space
- **spec:** The non-autonomous system on the extended/evolution space $T^*Q\times\mathbb R_t$ with the closed presymplectic 2-form $\omega-dH\wedge dt$; its characteristic foliation as classical time-evolution; quantization of the polarised sections producing the **time-dependent Schrödinger equation** $i\hbar\partial_t\psi=\hat H\psi$ as the analogue of the relativistic mass-shell reduction. Woodhouse Ch. 10.
- **prereqs:** `05.11.03` (polarisation, Schrödinger Hilbert space), `05.02.09` (Poincaré-Cartan invariants — already carries $\omega=dp\wedge dq-dH\wedge dt$ on extended phase space), `05.11.09` (relativistic-particle presymplectic-reduction template), `05.10.01` (contact geometry, lateral)
- **chapter dir:** `content/05-symplectic/11-geometric-quantization/`; `section: symplectic`, `chapter: geometric-quantization`
- **why borderline:** the *classical* extended-phase-space form $\omega-dH\wedge dt$ and its characteristic suspended flow are already worked in `05.02.09` (Poincaré-Cartan), the presymplectic *reduction*-to-quantization pattern is fully developed in `05.11.09` (relativistic particle), and the time-dependent Schrödinger equation is treated symplectically in `05.15.02` (Korteweg-Madelung). So the constituent machinery is all present; what is missing is the single unit that runs the GQ machine on the *time-dependent* evolution space to *derive* $i\hbar\partial_t\psi=\hat H\psi$. Given how close `05.02.09` + `05.11.09` already get, this is genuinely useful but low-leverage. **Propose only if the GQ chapter is being rounded out to full Woodhouse 2nd-ed. coverage; otherwise the autonomous + relativistic cases already exhibit the method.** Listed last and flagged borderline accordingly.

---

## COVERED (not gaps) — verified with existing unit ids

- **Prequantum line bundle $(L,\nabla,h)$, $F^\nabla=-i\omega/\hbar$, integrality $[\omega/2\pi\hbar]\in H^2(M;\mathbb Z)$, existence theorem** (audit §2 Ch. 8) — `05.11.01-prequantum-line-bundle-and-the-integrality-condition` (full three-tier, Čech existence proof) + `03.06.08-kostant-weil-prequantum-line-bundle` (characteristic-class companion).
- **Prequantum representation $\hat f=-i\hbar\nabla_{X_f}+f$ as a Lie-algebra homomorphism** (audit Ch. 8) — `05.11.01` (proved as a proposition). *Note:* the **quantizable-observable restriction and Groenewold no-go** built on top of it are NOT here — that is Gap 1.
- **Polarisations (real / Kähler / mixed), polarised sections, leaf space** (audit Ch. 4-6) — `05.11.03-polarisation-half-densities-and-metaplectic-correction` (Formal-definition + classification); compatible-$J$ in `05.06.01`/`almost-complex`.
- **Half-densities, half-forms, half-canonical bundle $K^{1/2}$, metaplectic group $\mathrm{Mp}(2n)$, $w_2$ obstruction, double cover $\pi_1(\mathrm{Sp})=\mathbb Z$** (audit Ch. 5-6, "Woodhouse's signature core") — `05.11.03` (Key-theorem (iii), Ex 8, Master proof at line 524).
- **Universal Maslov class as the half-form obstruction; Maslov / Conley-Zehnder index** (audit Ch. 5-6) — `05.12.01-lagrangian-grassmannian-and-the-universal-maslov-class`, `05.08.03-maslov-index`, `05.08.04-conley-zehnder-index`.
- **BKS pairing between polarisations, integral kernel, unitarity for transverse polarisations, geometric Fourier transform, geometric Stone-von Neumann, Shale-Weil / metaplectic representation** (audit Ch. 7, P2 item 4) — `05.11.03`: key-theorem (iv) + a *proved* unitarity proposition (line 526), position-momentum Fourier kernel (Ex 7), Maslov-corrected non-transverse case (Ex 9), Shale-Weil rep (Master line 498), Stone-von Neumann connection (line 542). Equivalence-depth; standalone packaging only. CCR/Weyl side in `12.14.01-ccr-algebra-weyl-algebra-and-quasi-free-states`.
- **Cotangent-bundle quantization → Schrödinger $L^2(Q)$, $\hat q=q\cdot$, $\hat p=-i\hbar\partial_q$** (audit Ch. 9, P1 item 2) — `05.11.03` Beginner Steps 1-3 (lines 111-115) + Ex (line 488, explicit operators + commutator). Worked at unit depth, not just stub.
- **Harmonic oscillator via Kähler/Bargmann-Fock polarisation, $\tfrac12\hbar$ metaplectic zero-point shift** (audit Ch. 9, P1 item 3) — `05.11.03` Master (line 502, $n$-dim, zero-point/Casimir/Lamb) + Ex 6 (line 394, ground-state $0\to\tfrac12\hbar$). Bargmann-Fock space also in `03.14.02-complex-structures-quantization-squeezed` and `09.04.07`.
- **Bohr-Sommerfeld / WKB quantization, $\oint p\,dq=2\pi\hbar(n+\tfrac12)$, Maslov $\tfrac14$-phase at turning points** (audit Ch. 3 / Ch. 8) — `12.07.04-wkb-and-bohr-sommerfeld` (full WKB derivation with the Maslov half-integer offset) + integrality/Bohr-Sommerfeld in `05.11.01` Master.
- **Hamilton-Jacobi as the $\hbar\to0$ classical shadow of Schrödinger; generating function = Lagrangian submanifold; WKB phase** (audit Ch. 3, P2 item 5 deepening) — `05.05.04-hamilton-jacobi` (named "Hamilton-Jacobi and the Schrödinger semiclassical limit" theorem, line 525), `05.05.03-generating-functions`, `05.05.01-lagrangian-submanifold`, wavefront/caustic side `05.12.03`.
- **Relativistic-particle quantization (mass-shell constraint → Klein-Gordon, presymplectic reduction, Weyl-ordering)** (audit Ch. 11, P3 item 8) — `05.11.09-quantization-of-the-relativistic-particle` (shipped; Weyl-ordered constraint proposition line 454).
- **Extended/evolution-space form $\omega-dH\wedge dt$, suspended Hamiltonian flow, Poincaré-Cartan invariant** (audit Ch. 10) — `05.02.09-poincare-cartan-invariants` (the classical machinery; the *quantization* of it is the borderline Gap 3).

### Notes for the integrator
- **Dangling forward-references in `05.11.03`:** the body cites `[05.11.04]` ("the orbit method") at lines 81 (hook target) and 277 (Bridge), but no `05.11.04` exists. If Gap 1 ships as `05.11.04` and Gap 2 as `05.11.05`, repoint both `[05.11.04]` orbit-method references to the Gap-2 id; otherwise assign Gap 2 to `05.11.04` to satisfy the existing references directly and Gap 1 to a different free slot. Resolve during weaving regardless of which gaps are produced.
- **`TODO_REF` cleanup (audit §4 / P2 item 6):** `05.11.01`, `05.11.03`, and `05.11.09` carry numerous `[ref: TODO_REF ...]` placeholders and `source: TODO_REF` bibliography stubs (Blattner 1973, Sternberg 1975, Weil 1964, Woodhouse 1992, Kostant 1970, Souriau 1970, Bates-Weinstein 1997). The Woodhouse audit is the natural moment to finalise the GQ-chapter bibliography; this is a deepening task, not a new unit.
- **Out of scope, correctly deferred** (unchanged from first-pass audit §5): full geometric-asymptotics / FIO programme (Guillemin-Sternberg / Hörmander territory; `05.12.03` covers the wavefront side); field-theoretic / infinite-dimensional GQ (`12.13.*`, `12.14.*` are the equivalence target, cross-link not duplicate); Berezin-Toeplitz deformation quantization (off the FT booklist); Brylinski gerbe/higher-prequantization (FT 3.47 territory, see `brylinski-loop-spaces.gaps.md`).
