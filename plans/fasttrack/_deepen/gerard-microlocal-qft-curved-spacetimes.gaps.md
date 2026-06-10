# Gérard, *Microlocal Analysis of Quantum Fields on Curved Spacetimes* (FT 3.45) — deepening gap file

**Slug:** `gerard-microlocal-qft-curved-spacetimes`. Re-audit against the live corpus (2026-06-02).

The first-pass audit (`plans/fasttrack/gerard-microlocal-qft-curved-spacetimes.md`)
was a REDUCED pass written before the swarm built out the curved-spacetime QFT
track. It estimated **~0% coverage** and proposed a 15-item priority punch-list
(items 1–15) plus deepenings. **That is now stale: the ENTIRE punch-list has
shipped.** Three whole sub-chapters now exist that did not when the audit ran:

- `content/02-analysis/14-microlocal-analysis/` — `02.14.01` (wave-front set),
  `02.14.02` (pseudo-differential operators), `02.14.03` (propagation of
  singularities). Audit items 1–3.
- `content/12-quantum/14-algebraic-qft/` — `12.14.01` (CCR/Weyl/quasi-free
  states), `12.14.02` (Heisenberg group + Stone–von Neumann). Audit item 6.
- `content/13-gr-cosmology/09-microlocal-qft-curved-spacetimes/` — `13.09.01`
  through `13.09.11`: globally hyperbolic manifolds, KG Cauchy problem,
  Radzikowski/Hadamard criterion, FNW deformation, Gérard-Wrochna
  pseudo-differential construction, Wick polynomials, Hollands-Wald time-ordered
  products, Bunch-Davies, Unruh/Bisognano-Wichmann, Hartle-Hawking, Fewster
  QEIs. Audit items 4–5, 7–15.

After grepping the live corpus for every keyword in the brief
(`wavefront-set|microlocal|pseudodifferential|hadamard|hadamard-state|wick-rotation|
distribution|fourier-integral-operator|propagation-of-singularities|klein-gordon|
quasi-free-state|wightman|bogoliubov|globally-hyperbolic|particle-creation|unruh|
hawking|reeh-schlieder|araki-woods|bisognano|kms|tomita|schwartz-kernel`), every
central Gérard theorem maps to an existing unit. The book is **essentially fully
covered.** The only remaining genuine gap is a single foundational-consolidation
unit on the theory of distributions itself — the Priority-0 prerequisite that the
first-pass audit explicitly flagged but explicitly did **not** produce.

**Genuine gaps: 1 (borderline foundational). COVERED-verified topics: 20.**

---

## Genuine gaps

### Gap 1 (borderline foundational) — The space of distributions $\mathcal{D}'$, $\mathcal{S}'$ and the distributional calculus
- **id:** `02.14.04` (free slot; `02.14` holds .01–.03 only) — alternatively `02.13.06` (the `02.13-pde` chapter has .06 free), but the microlocal chapter is the better home as it is the only consumer.
- **title:** Distributions, tempered distributions, and the distributional calculus
- **spec:** The space $\mathcal{D}'(X)$ of distributions on an open $X\subseteq\mathbb{R}^n$ as the continuous dual of $C_c^\infty(X)$ (inductive-limit topology); order and local structure; the singular support; distributional derivative, multiplication by $C^\infty$ functions, tensor product, and convolution; tempered distributions $\mathcal{S}'(\mathbb{R}^n)$ as the dual of Schwartz space and the Fourier transform on $\mathcal{S}'$; the Schwartz kernel theorem ($\mathcal{D}'(X\times Y)\cong L(C_c^\infty(Y),\mathcal{D}'(X))$); fundamental solutions as distributions. Worked examples: $\delta_0$, principal value $\mathrm{p.v.}\,1/x$, the Heaviside-jump derivative.
- **prereqs:** `02.10.04` (Fourier transform / Schwartz space — already defines $\mathcal{S}$), `02.11.06` (normed/topological vector spaces), `02.13.02` (fundamental solution of the Laplacian, the motivating example)
- **chapter dir:** `content/02-analysis/14-microlocal-analysis/`; frontmatter `section: analysis`, `chapter: microlocal-analysis`
- **why borderline-genuine:** Gérard develops distribution theory from scratch in Ch. 1 as the foundation for the wave-front set. In the corpus the *tools* exist but are scattered and presumed rather than developed: Schwartz space $\mathcal{S}$ is defined inside `02.10.04` (Fourier transform unit); $\mathcal{D}'(X)$ as a continuous linear functional on $C_c^\infty(X)$ is *recalled in one sentence* at `02.14.01` line 179; the distributional product and pullback (Hörmander criteria) are theorems inside `02.14.01`; the Schwartz kernel theorem is *used* in `02.14.02` (lines 201, 213, 401–407, 497) but never stated/proved. No unit develops the distributional calculus (derivative, convolution, structure theorem, $\mathcal{S}'$ Fourier transform, kernel theorem) as a coherent foundation. This is the one Priority-0 prereq the audit (§3) named and explicitly deferred ("Not produced by this audit"). **Propose only if a standalone distribution-theory foundation is wanted; the consuming microlocal units are already self-contained via their inline recalls, so this is genuine-but-low-leverage. Listed as the single gap and flagged borderline accordingly.**

---

## COVERED (not gaps) — verified with existing unit ids

- **Wave-front set $\mathrm{WF}(u)\subset T^*X\setminus 0$; Fourier-decay characterisation; $\mathrm{WF}(\delta_0)$** (audit item 1, Priority 1) — `02.14.01-wave-front-set-of-a-distribution`. Also contains the Hörmander **product theorem** ($\mathrm{WF}(u)+\mathrm{WF}(v)$ misses zero section) and the **pullback theorem** (conormal condition), so the distributional product/pullback calculus is covered here.
- **Pseudo-differential operators $\Psi^m(M)$, symbols $S^m_{1,0}$, principal symbol, composition, elliptic parametrix, pseudolocality, smoothing operators** (audit item 2, Priority 1) — `02.14.02-pseudo-differential-operators-on-a-manifold`. Schwartz kernel smooth off the diagonal (Hörmander Vol. III §18) used throughout.
- **Propagation of singularities along the Hamiltonian flow of the real principal symbol (Hörmander's theorem)** (audit item 3, Priority 1) — `02.14.03-propagation-of-singularities-along-hamiltonian-flow`, with the Lorentzian null-bicharacteristic example.
- **Globally hyperbolic Lorentzian manifolds; Cauchy surface; Bernal-Sánchez splitting** (audit item 4, Priority 1) — `13.09.01-globally-hyperbolic-lorentzian-manifolds`. Also independently covered at `48.02.17-lorentzian-hopf-rinow-and-global-hyperbolicity`.
- **Klein-Gordon Cauchy problem on a globally hyperbolic spacetime; advanced/retarded $E^\pm$; causal propagator $E=E^+-E^-$** (audit item 5, Priority 1) — `13.09.02-klein-gordon-equation-on-a-globally-hyperbolic-spacetime`. Flat-space free KG also at `12.05.04-free-klein-gordon-scalar-quantum-field`.
- **CCR / Weyl $C^*$-algebra of a symplectic phase space; quasi-free states; Araki-Woods GNS construction** (audit item 6, Priority 1) — `12.14.01-ccr-algebra-weyl-algebra-and-quasi-free-states`. Stone–von Neumann / Heisenberg-group side at `12.14.02`.
- **Hadamard states via the wave-front-set criterion (Radzikowski 1996); microlocal spectrum condition; Kay-Wald Hadamard-form equivalence** (audit item 7, Priority 1 — book centrepiece) — `13.09.03-hadamard-states-via-the-wave-front-set-criterion`. The Kay-Wald **Hadamard form/parametrix** equivalence and the **locally covariant (BFV 2003) functor** appear here and across `13.09.06`/`.07` as the audit's P4 folded sections, not standalone gaps.
- **Existence of Hadamard states via FNW deformation** (audit item 8, Priority 1) — `13.09.04-existence-of-hadamard-states-fnw-deformation`.
- **Hadamard states by pseudo-differential calculus (Gérard-Wrochna 2014/2017)** (audit item 9, Priority 2 — Gérard's distinctive contribution) — `13.09.05-hadamard-states-by-pseudo-differential-calculus`, incl. in/out states and the Bogoliubov transformation between asymptotic frames.
- **Wick polynomials via Hadamard parametrix subtraction (BFK 1996); local covariance** (audit item 10, Priority 2) — `13.09.06-wick-polynomials-in-curved-spacetime`.
- **Time-ordered products; Hollands-Wald 2001/2002 renormalisation on curved backgrounds; Epstein-Glaser induction** (audit item 11, Priority 2) — `13.09.07-time-ordered-products-hollands-wald`.
- **Bunch-Davies state on de Sitter; uniqueness as the de-Sitter-invariant Hadamard state; Allen-Mottola $\alpha$-vacua** (audit item 12, Priority 2) — `13.09.08-bunch-davies-state-on-de-sitter`.
- **Unruh effect via Bisognano-Wichmann modular theory; KMS/thermal Rindler wedge** (audit item 13, Priority 2) — `13.09.09-unruh-effect-via-the-bisognano-wichmann-theorem`. Tomita-Takesaki/KMS machinery present.
- **Hartle-Hawking and Unruh states on Schwarzschild; Kay-Wald uniqueness on a bifurcate Killing horizon** (audit item 14, Priority 3) — `13.09.10-hartle-hawking-and-unruh-states-on-schwarzschild`.
- **Quantum energy inequalities (Fewster 2000)** (audit item 15, Priority 3) — `13.09.11-quantum-energy-inequalities-fewster`.
- **Reeh-Schlieder theorem** (brief flagged) — **stated AND proved** at `08.10.07-wightman-axioms-w1w7` (Theorem, line 528; Proposition with cyclicity argument, line 548); its curved-spacetime analogue referenced from `13.09.03`. Not a gap.
- **Wightman axioms (W1–W7) on Minkowski; spectrum condition; Haag-Kastler net; Osterwalder-Schrader** (brief flagged) — `08.10.07-wightman-axioms-w1w7`. The Radzikowski criterion is explicitly cross-walked to the Wightman spectrum condition there.
- **Bogoliubov transformation between (inequivalent) Fock representations; particle creation** (brief flagged) — inequivalent CCR representations + thermodynamic-limit Bogoliubov transform at `08.10.01-bosonic-fock-space-and-second-quantisation` (line 449); curved-spacetime in/out-state Bogoliubov coefficients and particle creation at `13.09.05`, `13.09.08`, `13.09.09`, `13.09.10`.
- **Wick rotation / Euclidean–Lorentzian** (brief flagged) — `08.09.01-wick-rotation`.
- **Sobolev spaces $H^s$, $W^{k,p}$ on a manifold** (audit Priority-0 prereq iii) — `24.01.01-sobolev-spaces-h-s-and-w-k-p` (plus `24.01.02` for forms). COVERED; not the open prereq the audit feared.
- **Schwartz space $\mathcal{S}(\mathbb{R}^n)$ and tempered distributions $\mathcal{S}'$ (Fourier-transform foundation)** (audit Priority-0 prereq i) — **defined** at `02.10.04-fourier-transform-plancherel` (Definition, line 200; $\mathcal{S}'$ as Fourier target). The *space-of-distributions calculus* built on it is the lone Gap 1; the Schwartz space itself is covered.
- **Spectral theorem for unbounded self-adjoint operators** (audit Priority-0 prereq ii) — `02.11.03-unbounded-self-adjoint`.

### Notes for the integrator
- The audit's three P4 items are correctly resolved as folded sections, not units: the **Lorentzian geodesic-flow extension** (item 16) lives in `02.14.03`'s Lorentzian-symbol example; the **BFV locally-covariant functor** (item 17) is a pointer carried in `13.09.03`/`.06`; the **Hawking effect** (item 18) is out of scope here and is covered physicist-side at `13.06.04-hawking-radiation`.
- If Gap 1 is declined, the book reaches FT-equivalence as-is: every Ch. 1–10 named theorem in Gérard maps to a shipped unit. Gap 1 is a foundational-analysis nicety (a canonical "theory of distributions" entry) rather than a missing Gérard result, and is the only reason this is not a clean 0-gap result.
