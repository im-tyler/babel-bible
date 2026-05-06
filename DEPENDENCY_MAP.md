# Codex — Dependency Map

Curriculum DAG. Apex-first construction: start from the ~10 apex units at the top of Fast Track, pull prerequisites as they surface. Each pulled prereq becomes its own future unit with its own prereqs. The graph grows downward.

**Authoritative source for prerequisites per concept:** `CONCEPT_CATALOG.md`. This document is the *drawing* of the DAG at v0.x; the catalog is the *definition* of what each concept requires.

---

## 1. How to read this

- **Apex** = units at the top of Fast Track; no successors declared yet.
- **Leaf** (at a given wave) = units whose prerequisites are all shipped or have themselves been added to the DAG.
- **Pulled prereq** = a concept that showed up as a prerequisite of an apex unit but doesn't exist as a unit yet. Pulled prereqs are the next wave's production queue.
- Arrow `A → B` means "A is a prerequisite of B".

## 2. The 10 apex units (Master-tier pilot)

| ID | Title | Section | Tier at pilot | Concept catalog ID |
|---|---|---|---|---|
| `03.09.10` | Atiyah-Singer index theorem | spin-geometry | Master-only | `spin-geometry.index.atiyah-singer` |
| `03.09.08` | Dirac operator on a spin manifold | spin-geometry | Master-only | `spin-geometry.dirac.dirac-operator` |
| `03.09.04` | Spin structure on an oriented Riemannian manifold | spin-geometry | Master-only | `spin-geometry.structure.spin-structure` |
| `03.09.02` | Clifford algebra (real, complex) | spin-geometry | Master-only | `spin-geometry.clifford.clifford-algebra` |
| `03.07.05` | Yang-Mills action | gauge-theory | Master-only | `gauge-theory.action.yang-mills` |
| `03.06.06` | Chern-Weil homomorphism | char-classes | Master-only | `char-classes.chern-weil.homomorphism` |
| `03.06.04` | Pontryagin and Chern classes | char-classes | Master-only | `char-classes.pontryagin-chern.definitions` |
| `03.08.07` | Bott periodicity | k-theory | Master-only | `k-theory.bott.periodicity` |
| `03.09.06` | Fredholm operators | functional-analysis | Master-only | `functional-analysis.fredholm.operators` |
| `03.10.02` | Conformal field theory — basics | cft | Master-only | `cft.basics.virasoro-primary-fields` |

Numbering convention: `<section>.<chapter>.<ordinal>`. Ordinals are not dense — gaps reserved for prerequisite units that will slot in.

## 3. Prerequisite pull — first layer

What each apex unit declares as its immediate prerequisites. Any ID marked `(not yet a unit)` goes into the next-wave production queue.

### `03.09.10` Atiyah-Singer index theorem

Requires:
- `03.09.08` Dirac operator *(in apex set)*
- `03.09.06` Fredholm operators *(in apex set)*
- `03.08.07` Bott periodicity *(in apex set)*
- `03.06.04` Pontryagin and Chern classes *(in apex set)*
- `03.09.09` Elliptic operators on a manifold *(not yet a unit)*
- `03.09.07` Symbol of a differential operator *(not yet a unit)*

### `03.09.08` Dirac operator on a spin manifold

Requires:
- `03.09.04` Spin structure *(in apex set)*
- `03.09.02` Clifford algebra *(in apex set)*
- `03.05.02` Vector bundle *(not yet a unit)*
- `03.05.04` Connection on a vector bundle *(not yet a unit)*
- `02.11.03` Unbounded self-adjoint operators *(not yet a unit)*

### `03.09.04` Spin structure on an oriented Riemannian manifold

Requires:
- `03.05.01` Principal bundle *(not yet a unit)*
- `03.09.03` Spin group (Spin(n)) *(not yet a unit)*
- `03.05.03` Orthogonal frame bundle *(not yet a unit)*
- `03.05.05` Double cover *(not yet a unit)*

### `03.09.02` Clifford algebra

Requires:
- `01.01.15` Bilinear form (quadratic form) *(not yet a unit)*
- `01.01.03` Vector space *(not yet a unit)*
- `03.01.04` Tensor algebra *(not yet a unit)*
- `03.01.05` Quotient algebra *(not yet a unit)*

### `03.07.05` Yang-Mills action

Requires:
- `03.05.07` Principal bundle with connection *(not yet a unit)*
- `03.05.09` Curvature of a connection *(not yet a unit)*
- `03.04.03` Integration on manifolds *(not yet a unit)*
- `03.04.08` Variational calculus on manifolds *(not yet a unit)*

### `03.06.06` Chern-Weil homomorphism

Requires:
- `03.05.07` Principal bundle with connection *(shared with Yang-Mills)*
- `03.05.09` Curvature of a connection *(shared)*
- `03.04.06` De Rham cohomology *(not yet a unit)*
- `03.06.05` Invariant polynomial on a Lie algebra *(not yet a unit)*

### `03.06.04` Pontryagin and Chern classes

Requires:
- `03.06.06` Chern-Weil homomorphism *(in apex set)*
- `03.05.02` Vector bundle *(shared with Dirac operator)*
- `03.05.08` Complex vector bundle *(not yet a unit)*

### `03.08.07` Bott periodicity

Requires:
- `03.08.01` Topological K-theory *(not yet a unit)*
- `03.08.04` Classifying space *(not yet a unit)*
- `03.08.06` Stable homotopy *(not yet a unit)*

### `03.09.06` Fredholm operators

Requires:
- `02.11.01` Bounded linear operators *(not yet a unit)*
- `02.11.05` Compact operators *(not yet a unit)*
- `02.11.04` Banach space fundamentals *(not yet a unit)*
- `01.01.03` Vector space *(shared with Clifford algebra)*

### `03.10.02` Conformal field theory — basics

Requires:
- `02.11.08` Hilbert space *(not yet a unit)*
- `03.11.03` Virasoro algebra *(not yet a unit)*
- `03.11.02` Infinite-dimensional Lie algebra representations *(not yet a unit)*
- `03.11.01` Central extension of a Lie algebra *(not yet a unit)*

## 4. Consolidated next-wave queue (second-layer production)

Prerequisites that appear across multiple apex units (higher leverage — produce these first in the next wave):

| Pulled ID | Title | Appears in | Priority |
|---|---|---|---|
| `03.05.02` | Vector bundle | Dirac, Pontryagin | **high** |
| `03.05.07` | Principal bundle with connection | Yang-Mills, Chern-Weil | **high** |
| `03.05.09` | Curvature of a connection | Yang-Mills, Chern-Weil | **high** |
| `01.01.03` | Vector space | Clifford, Fredholm | **high** |
| `03.05.01` | Principal bundle | Spin structure | medium |
| `03.05.04` | Connection on a vector bundle | Dirac | medium |
| `02.11.03` | Unbounded self-adjoint operators | Dirac | medium |
| `03.04.06` | De Rham cohomology | Chern-Weil | medium |
| `03.08.01` | Topological K-theory | Bott | medium |
| (all others — singleton appearances) | | | standard |

High-leverage units unblock multiple apex units at once. Standard-priority units unblock one each.

## 5. The DAG after wave 2

By the end of wave 2 (the 10 apex + the ~25 pulled prereqs), the DAG looks roughly like:

```
                   [apex: Atiyah-Singer]
                   /       |         \
            [Dirac]   [Fredholm]   [Bott periodicity]
             /   \         \           \
        [Spin]  [Clifford]  [Compact]  [K-theory]
         /        \           \          \
    [Principal  [Tensor       [Banach]   [Classifying
      bundle]    algebra]                  space]
       ...        ...           ...         ...
```

Wave 3 traces down another layer (principal-bundle prereqs = manifold, smooth map, Lie group action; tensor-algebra prereqs = tensor product, multilinear map). Wave N hits leaves when we reach basic algebra/analysis.

Estimate: ~5–7 waves from apex to leaf for spin-geometry branch. Similar depth for gauge-theory and K-theory branches.

## 6. Cross-branch convergence

Multiple apex branches converge on the same foundational units. For example:

- `01.01.03 Vector space` is needed by: Clifford algebra, Fredholm operators, and eventually almost everything downstream.
- `03.05.07 Principal bundle with connection` is needed by: Yang-Mills, Chern-Weil, eventually Spin structure (via principal-bundle).

Convergence means early production of foundational units unblocks many apex units simultaneously. Prioritize high-convergence-degree nodes in each wave.

## 7. What lives outside this map

- **Beginner and Intermediate tier units** for apex subjects do *not* get added as separate units — they are added *into* the same unit's source document when the prereq chain at those tiers exists. (See OVERVIEW §5, `tiers_present` field.)
- **Pre-calc ramp units** (arithmetic beyond high-school-algebra level, pre-calc functions, basic trig) are orthogonal to this apex-first DAG. They get produced in a parallel leaf-first wave once the apex path is validated — *or* never, if v0.x remains graduate-only.

## 8. Updates

This document is regenerated from `manifests/deps.json` after every production wave. The JSON is the source of truth; this markdown is a human-readable view.

Adding a new concept requires updating:
1. `CONCEPT_CATALOG.md` — the canonical prereqs of that concept
2. `manifests/deps.json` — the adjacency list
3. This document — regenerated view
