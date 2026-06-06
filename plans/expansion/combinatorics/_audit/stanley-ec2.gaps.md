# Audit — Stanley, *Enumerative Combinatorics, Vol. 2* → chapter `40.03 symmetric-functions-rsk`

- **source_book**: `stanley-ec2`  (Stanley, *Enumerative Combinatorics*, Vol. 2, Cambridge Studies in Adv. Math. 62)
- **source_curriculum**: `combinatorics`  (Spine 6)
- **chapter dir**: `content/40-combinatorics/03-symmetric-functions-rsk/`
- **frontmatter**: `section: combinatorics`, `chapter: symmetric-functions-rsk`
- **id range audited**: `40.03.*` — all slots free (chapter is scaffold-only, .gitkeep). Proposed ids start at `40.03.01`.

## Audit context / scoping decision

The combinatorics section (`content/40-combinatorics`) is pure scaffold today (only `.gitkeep`).
But the **symmetric-function / S_n side already has heavy coverage in `07-representation-theory/05-symmetric`**,
built from the *representation-theoretic* angle (Sagan / Fulton-Harris). Per the audit brief and the
explicit task instruction, I scope the EC2 units to the **combinatorial / symmetric-function side** and
**cross-reference** the existing rep-theory units (Frobenius map, Schur-Weyl, Murnaghan-Nakayama) rather
than reproving the representation theory. Every unit below states explicitly which rep-theory unit it
bridges to.

What the rep-theory chapter already nails (do NOT re-derive): Young diagrams / SYT / SSYT / **hook-length
formula** (`07.05.02`), Specht modules (`07.05.03`), Schur-Weyl duality (`07.05.04`), Murnaghan-Nakayama
+ `s_λ`-in-power-sums (`07.05.10`), and the *statements* of the Schur-via-SSYT definition and the LR rule
(scattered in `07.05.01`/`07.05.02`). What is **named but never developed as a standalone, proof-bearing
unit anywhere**: the ring of symmetric functions and its five bases with transition matrices; Jacobi-Trudi
and the Cauchy identity as theorems with proofs; the **RSK correspondence** (Schensted insertion / symmetry
theorem / longest-increasing-subsequence) as its own bijection; the combinatorial **Littlewood-Richardson**
proof (jeu de taquin); and the **Frobenius characteristic map** as the explicit ring isomorphism
`R(S_•) ≅ Λ`. Those are the genuine gaps.

Within-spine co-produced prereqs (EC1 chapters, not yet produced — flag as pending in the producer pass):
- **`40.01.*` generating functions** (formal power series, the exponential formula) — needed by the
  symmetric-function units for the `λ`-ring / formal-power-series machinery.
- **`40.02.*` posets & lattices** (dominance order on partitions) — used as the partial order indexing the
  transition-matrix triangularity. Co-produced; cite as a soft within-spine prereq.

---

## GENUINE GAPS (proposed units)

### 40.03.01 — The ring of symmetric functions: the five bases
- **title**: The ring of symmetric functions and its bases (monomial, elementary, complete, power-sum)
- **spec**: Construct `Λ` as the inverse limit of symmetric polynomials, prove the monomial `m_λ`,
  elementary `e_λ`, complete-homogeneous `h_λ`, and power-sum `p_λ` families are each a basis of `Λ_ℚ`,
  and compute the transition matrices among them (incl. the `e`/`h` involution `ω` and the Newton identities
  relating `p`, `e`, `h`).
- **prereqs**: `01.02.01` (rings) or `01.01.*` (linear algebra / change of basis), `21.11.01` (arithmetic /
  partitions — partition combinatorics), within-spine `40.01.*` (formal power series), `40.02.*` (dominance order).
- **bridges (cross-ref, not re-proved)**: `07.05.01` (these bases are *listed* there but never constructed).
- **level**: foundational (entry point of the chapter).

### 40.03.02 — Schur functions: SSYT definition, Jacobi-Trudi, the Pieri rules
- **title**: Schur functions: the combinatorial (SSYT) definition and the Jacobi-Trudi determinant
- **spec**: Define `s_λ = Σ_{T ∈ SSYT(λ)} x^T`, prove it is symmetric and that `{s_λ}` is the orthonormal
  `ℤ`-basis of `Λ` dual to monomials under the Hall inner product; prove the **Jacobi-Trudi** determinant
  `s_λ = det(h_{λ_i - i + j})` (and the dual `e`-version) and the **Pieri rules** for `s_λ · h_r` / `s_λ · e_r`.
- **prereqs**: `40.03.01`, `07.05.02` (Young diagrams / SSYT — combinatorial scaffold), `01.01.07` (determinant).
- **bridges**: `07.05.02` *states* the SSYT formula and gives `{s_λ}` as a basis; this unit *proves*
  symmetry + Jacobi-Trudi + Pieri on the symmetric-function side.
- **level**: core.

### 40.03.03 — The Cauchy identity and the Hall inner product
- **title**: The Cauchy identity, dual bases, and the Hall inner product on `Λ`
- **spec**: Prove the **Cauchy identity** `∏_{i,j}(1 - x_i y_j)^{-1} = Σ_λ s_λ(x) s_λ(y)` (and the dual
  `∏(1 + x_i y_j) = Σ_λ s_λ(x) s_{λ'}(y)`), define the Hall inner product `⟨h_λ, m_μ⟩ = δ` / `⟨p_λ, p_μ⟩ = z_λ δ`,
  and show `{s_λ}` is self-dual — the algebraic shadow of RSK.
- **prereqs**: `40.03.01`, `40.03.02`.
- **bridges**: sets up the inner-product structure used implicitly by the Frobenius map (`07.05.01`).
- **level**: core.

### 40.03.04 — The RSK correspondence
- **title**: The Robinson-Schensted-Knuth correspondence: insertion, the symmetry theorem, longest increasing subsequences
- **spec**: Define **Schensted row-insertion** and the RSK bijection (matrices / words ↔ pairs of SSYT of the
  same shape; permutations ↔ pairs of SYT); prove the **symmetry theorem** (`σ ↔ (P,Q) ⟹ σ^{-1} ↔ (Q,P)`),
  derive the **bijective proof of the Cauchy identity** and `n! = Σ_λ (f^λ)^2`, and prove **Schensted's theorem**
  that the first row/column lengths give the longest increasing/decreasing subsequence (Ulam's problem).
- **prereqs**: `40.03.02`, `40.03.03`, `07.05.02` (SYT/SSYT).
- **bridges**: `07.05.01`/`07.05.02` *mention* RSK as a bijection but never develop insertion / symmetry /
  LIS. This is the standalone RSK unit. Asymptotic LIS (Vershik-Kerov / Baik-Deift-Johansson / Tracy-Widom)
  is cross-referenced, not derived here.
- **level**: core (the chapter's namesake result).

### 40.03.05 — The Littlewood-Richardson rule (combinatorial proof)
- **title**: The Littlewood-Richardson rule: skew Schur functions and jeu de taquin
- **spec**: Define skew Schur functions `s_{λ/μ}`, prove the **Littlewood-Richardson rule**
  `s_μ s_ν = Σ_λ c^λ_{μν} s_λ` with `c^λ_{μν} = #{LR skew tableaux of shape λ/μ, content ν}` via
  Schützenberger **jeu de taquin** / Knuth-equivalence, and establish symmetry / associativity of the
  coefficients.
- **prereqs**: `40.03.02`, `40.03.04` (Knuth equivalence from RSK).
- **bridges**: `07.05.02` *states* the LR rule and its rep-theory/Schubert meanings; `07.01.06` uses
  `c^λ_{μν}` as tensor-product multiplicities. This unit supplies the **combinatorial proof** (jeu de taquin)
  that those units defer to "Fulton, *Young Tableaux*".
- **level**: advanced.

### 40.03.06 — The Frobenius characteristic map
- **title**: The Frobenius characteristic map `R(S_•) ≅ Λ` and the symmetric-function dictionary
- **spec**: Define the characteristic map `ch: ⊕_n R(S_n) → Λ`, prove it is a **graded ring isomorphism**
  (induction-product ↔ multiplication, restriction ↔ comultiplication) sending the irreducible `χ^λ` to the
  Schur function `s_λ`, and read off the dictionary: LR rule ↔ induction multiplicities (cross-ref `40.03.05`),
  power-sum expansion of `s_λ` ↔ Murnaghan-Nakayama (cross-ref `07.05.10`), `f^λ` ↔ hook lengths
  (cross-ref `07.05.02`).
- **prereqs**: `40.03.01`, `40.03.02`, `40.03.03`, `07.05.01` (S_n irreducibles), `07.01.03`/`07.01.04`
  (characters / orthogonality).
- **bridges**: `07.05.01` and `07.05.10` *use* the characteristic map and the Frobenius character formula but
  never construct/prove the ring isomorphism standalone. Per the task instruction this unit scopes to the
  symmetric-function side and **cross-refs the rep theory rather than reproving Specht/irreducibility**.
- **level**: advanced (capstone bridge of the chapter).

---

## COVERED (not gaps) — checked, found already in corpus

- **Young diagrams, SYT, SSYT, the hook-length formula** — `07.05.02` (Frame-Robinson-Thrall + GNW hook-walk,
  fully proved). Schur-via-SSYT formula and the LR-rule *statement* also live here.
- **Specht modules / S_n irreducibles classification** — `07.05.03`, `07.05.01` (Frobenius-Young, Young symmetrisers).
- **Schur-Weyl duality / `GL_n` polynomial irreducibles** — `07.05.04` (double-commutant; Weyl modules `S^λ V`).
  GL_n side and Schur-Weyl explicitly cross-referenced, not re-derived.
- **Murnaghan-Nakayama rule + `s_λ`-in-power-sum expansion + Frobenius character formula (statement)** —
  `07.05.10` (border-strip recursion, proved).
- **Schur polynomial as a basis of symmetric polynomials in finitely many variables** — stated in `07.05.02`
  (`40.03.01`/`40.03.02` lift this to the inverse-limit ring `Λ` and prove Jacobi-Trudi, which `07.05.02` omits).
- **Tensor-product / LR multiplicities on the representation ring** — `07.01.06` (uses `c^λ_{μν}`; the
  *combinatorial proof* is the gap filled by `40.03.05`).
- **Asymptotic longest-increasing-subsequence law (Tracy-Widom / Baik-Deift-Johansson)** — random-matrix /
  KPZ connections referenced in `07.05.02` and `08.14.07`; not re-derived in `40.03.04` (cross-ref only).

## OUT OF SCOPE for chapter `40.03` (belong to sibling combinatorics chapters — flag for the EC1/EC2 trees+enumeration audit)

- **Matrix-tree theorem / Cayley's formula `n^{n-2}` / spanning-tree enumeration** — GENUINELY ABSENT from the
  whole corpus (verified: no `matrix-tree`, `kirchhoff` graph-Laplacian, or `cayley's formula` unit; the only
  `spanning tree` hit is a large-deviations aside in `37.07.11`). But this is a **trees / graph-enumeration**
  topic → belongs in `40.01-enumeration-generating-functions` or `40.04-graph-theory-core`, **not** `40.03`.
  Propose under the EC2-trees / Diestel audit, not here.
- **Lagrange inversion** — genuinely absent; belongs to `40.01` (formal power series / generating functions).
- **The exponential formula & combinatorial species** — belongs to `40.01` (per the task note, scope species to
  whichever of EC1/EC2 owns trees+labelled structures; it is NOT a symmetric-functions/RSK topic).
- **Hall-Littlewood / Macdonald / Jack polynomials, plethysm, the `(q,t)`-deformations** — named in the
  `07.05.01` synthesis as advanced extensions; deliberately deferred (a multi-unit apparatus beyond the
  ~6-unit core-chapter target). Skip for the first pass; revisit at the completeness round if warranted.

## Return summary
- **Genuine gaps**: 6 (`40.03.01`–`40.03.06`)
- **COVERED**: 7 topic-clusters (all in `07-representation-theory/05-symmetric` + `07.01.06`)
- **OUT OF SCOPE (this chapter)**: 4 (matrix-tree/Cayley, Lagrange inversion, exponential formula/species → sibling chapters; Hall-Littlewood/Macdonald → deferred)
