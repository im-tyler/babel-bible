# Weinberg, *QTF Vol. 1: Foundations* (FT 2.17) — Deepening gap file

**Slug:** `weinberg-quantum-theory-of-fields-vol1`
**Re-audited:** 2026-06-02 against the live ~1319-unit corpus.

## Verdict

The original audit (2026-05-17) was written when `12-quantum/` held only three
units and estimated **~5% coverage / 29 units to write**. The corpus has since
grown dramatically: `12-quantum/` now has ~70 units across 18 chapters, plus the
Itzykson QFT block (`08.10.*`), the rep-theory block (`07.07.*`), and the
algebraic-QFT-in-curved-spacetime block (`13.09.*`). **Nearly every priority-1
and priority-2 item from the original punch-list has shipped.** After grepping,
only **2 genuine gaps** remain — both Weinberg-distinctive structural results that
appear in the corpus only as name-drops or as one axiom among several, never as
their own stated/proved subject.

---

## Genuine gaps (2)

### GAP 1 — Cluster decomposition principle and the connected S-matrix

- **proposed id:** `12.13.03` (free; `13-fock-spaces` dir holds `.01` bosonic, `.02` fermionic)
- **title:** "Cluster decomposition and the structure of the S-matrix"
- **spec:** State the cluster decomposition principle (distant experiments
  factorise); prove that it forces the connected part of the S-matrix to contain
  a single momentum-conserving delta function (linked-cluster structure), and
  that this in turn forces the interaction to be built as a polynomial in
  creation/annihilation operators — i.e. Fock space + a local interaction
  density are *derived*, not postulated. This is Weinberg Vol 1 Ch. 4, the
  book's signature axiomatic move, and the one piece of its central argument
  with no home in the corpus.
- **chapter dir:** `content/12-quantum/13-fock-spaces/`; frontmatter
  `section: quantum`, `chapter: fock-spaces`
- **prereqs (verified exist):** `12.13.01` (bosonic Fock space + creation/annihilation
  operators), `12.06.04` (S-matrix, in/out states, Lorentz invariance
  $USU^\dagger=S$), `08.10.03` (Dyson series / linked-cluster in stat-field
  framing)
- **why genuine:** `cluster decomposition` appears in the corpus only (a) as one
  of the six Wightman-reconstruction axioms in `12.05.04` line 452, (b) as a
  bibliography phrase in `12.12.01`, and (c) in unrelated curved-spacetime
  contexts (`13.09.02`). The *connected-S-matrix / forces-a-and-a-dagger*
  derivation — Weinberg's actual content — exists nowhere. `12.13.01` (bosonic
  Fock) builds Fock space the standard $\bigoplus_n \mathrm{Sym}^n H$ way, not
  the cluster-decomposition way. `linked-cluster` appears only in stat-mech
  cumulant framing (`08.10.03`), not as the S-matrix connectedness theorem.

### GAP 2 — General renormalization theory: power counting and renormalizability classification

- **proposed id:** `12.16.06` (free; `16-qed-radiative-corrections` dir holds `.01`–`.05`)
- **title:** "Power counting, the superficial degree of divergence, and renormalizability classification"
- **spec:** Define the superficial degree of divergence $D$ of a graph from the
  mass dimensions of fields and couplings; derive the classification of
  interactions as super-renormalizable, renormalizable, and non-renormalizable
  from the mass dimension $[g]$ of the coupling; state the BPHZ theorem (a
  renormalizable theory's divergences are removed to all orders by a finite set
  of local counterterms via Zimmermann's forest formula). Weinberg Vol 1 Ch. 12.
- **chapter dir:** `content/12-quantum/16-qed-radiative-corrections/`;
  frontmatter `section: quantum`, `chapter: qed-radiative-corrections`
- **prereqs (verified exist):** `12.16.01` (electron self-energy, one-loop
  power-counting instance, $Z_2$), `08.10.06` (one-loop φ⁴ renormalisation, BPHZ
  name-drop), `12.12.01` (Feynman rules, LSZ)
- **why genuine:** power-counting and BPHZ are touched only as *instances* —
  `08.10.06` (single φ⁴ bubble) and `12.16.01` Lemma 1 (one self-energy graph).
  No unit states the general $D$-formula, the $[g]$-mass-dimension
  classification (super-/renormalizable/non-renormalizable), or BPHZ as a
  standalone theorem. `08.08.03-effective-field-theory` covers the *Wilsonian*
  relevant/marginal/irrelevant picture (stat-mech RG framing) but explicitly not
  the QFT degree-of-divergence classification. This is the conceptual unit that
  "defines what renormalizable means," and it is absent.

---

## COVERED (not gaps) — verified with evidence

Every other item the original punch-list proposed is now covered:

- **Wigner classification of Poincaré irreps / little groups** → `07.07.06`
  (dedicated unit, "Wigner's classification of the unitary irreducible
  representations of the Poincaré group"). Also `07.07.09` (Lorentz $SL(2,\mathbb C)$
  reps), `07.07.07` (Mackey induced reps / imprimitivity).
- **Poincaré group / Lie algebra, Casimirs $P^2,W^2$** → `07.07.06`, `07.07.09`;
  relativistic kinematics `10.05.02`, `10.05.03`.
- **Projective reps / central extensions / $SL(2,\mathbb C)$ double cover** →
  `07.07.05` (double cover, Spin, projective reps); Bargmann central extension
  `05.00.07`.
- **S-matrix: in/out states, Lorentz invariance $USU^\dagger=S$** → `12.06.04`
  (Formal definition section explicitly defines $\mathcal H_{\text{in}}$,
  $\mathcal H_{\text{out}}$, the S-matrix, and $U(\Lambda,a)SU(\Lambda,a)^\dagger=S$).
- **Crossing symmetry** → `12.06.04` (titled unit).
- **CPT theorem (S-matrix level)** → `12.06.04`; also `12.11.05` (Lüders-Pauli).
- **Spin-statistics theorem (constructive + axiomatic proof)** → `08.10.09`
  (full Pauli-1940 / Burgoyne-1958 proof sketch from Wightman positivity),
  `12.05.05` (constructive spin-½ proof from microcausality+positivity),
  `08.10.10`, `12.09.01`.
- **LSZ reduction formula** → stated in `12.12.01` (line 395), `12.05.05`
  (spin-½ LSZ theorem, line 584), `08.10.03` (LSZ setup, line 503); applied
  throughout `12.12.03/04/05`, `12.16.01`.
- **Interaction picture / Dyson series / time-ordered products / Wick** →
  `12.12.01` (interaction picture + Dyson series), `08.10.03` (Dyson series),
  `08.10.04` (Wick's theorem for operator products), `12.03.01`.
- **Feynman rules / propagators** → `12.12.01`, `08.10.05` (Feynman propagator),
  `08.10.03`; QED applications `12.12.03/04/05/06`.
- **Free Klein-Gordon scalar quantum field** → `12.05.04` (titled unit, anchored
  on Weinberg §5.2).
- **Free Dirac spin-½ quantum field; antiparticles from causality** → `12.05.05`
  (titled unit; full microcausality+positivity derivation of CAR and
  antiparticles, Weinberg §5.5–5.7).
- **Free Maxwell / massive vector (photon + Proca)** → `12.05.06` (titled unit).
- **Canonical formalism / equal-time commutators / EM quantization / gauges** →
  `12.12.01` (canonical QFT), `12.12.02` (Coulomb vs Lorenz gauge).
- **Path integral (field-theoretic)** → `12.10.01` (path-integral formulation);
  stat-field `08.07.01`, `08.09.01` (Wick rotation).
- **Faddeev-Popov / non-Abelian gauge** → deferred to FT 2.18 (Vol 2) per the
  original plan; `12.18.*` block (Higgs, asymptotic freedom, anomaly, θ-vacua,
  OPE) already covers most Vol-2 entry material.
- **One-loop QED: self-energy, vacuum polarization, vertex, $(g-2)$, Lamb shift** →
  `12.16.01`, `12.16.02` (vertex + anomalous moment), `12.16.03` (vacuum
  polarization + Uehling), `12.16.04` (Lamb shift).
- **Infrared / Bloch-Nordsieck** → `12.16.05` (titled unit). KLN is referenced
  there; full KLN is a master-section deepening, not a missing unit.
- **Bound-state QED (Lamb shift, hydrogen)** → `12.16.04`, `12.11.03` (Dirac in
  Coulomb field), `12.06.01` (hydrogen bound states).
- **Optical theorem / unitarity / partial waves** → `12.08.03` (partial-wave
  expansion + phase shifts), `12.06.04`, `12.08.01/02`.
- **Relativistic cross-sections / phase space** → `12.12.03` (Klein-Nishina),
  `12.12.04` (Møller), `12.12.05` (Bhabha), `12.12.06` (Bethe-Heitler).
- **Källén-Lehmann / Schwinger-Dyson / non-perturbative** → spectral
  representation and Haag's theorem in `12.05.04`; `08.10.07` (Wightman axioms +
  reconstruction); `13.09.07` (time-ordered products, Hollands-Wald).
- **Space inversion / time reversal / Wigner anti-unitary T** → `12.15.01`
  (time-reversal + Kramers), `12.15.02` (parity + Wigner-Eckart).
- **CCR/Weyl algebra, Stone-von-Neumann** → `12.14.01`, `12.14.02`.
- **Effective field theory** → `08.08.03` (Wilsonian framing; complements but
  does not replace GAP 2's QFT renormalizability classification).

**Not pursued as gaps (intentional):**

- **Historical introduction (Vol 1 Ch. 1).** Originator-prose for QFT history
  (Dirac 1927, Jordan-Wigner 1928, Tomonaga-Schwinger-Feynman-Dyson) is already
  distributed across `08.10.*` and `12.16.01` historical sections. A standalone
  history unit is low-value and not corpus-style; skip.
- **Streater-Wightman / Haag-Kastler / constructive-QFT pointer units.** The
  Wightman axioms (`08.10.07`) and reconstruction (`12.05.04`) are already
  shipped; dedicated survey-pointer units are marginal — skip.

---

## Counts

- **Genuine gaps: 2** (`12.13.03` cluster decomposition; `12.16.06` general
  renormalization theory / power counting)
- **COVERED-verified topics: ~25** (enumerated above with ids)
