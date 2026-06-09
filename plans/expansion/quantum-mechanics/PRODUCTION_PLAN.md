# Section 12 — Quantum Mechanics (gap-fill) · PRODUCTION PLAN (collision-checked)

Section `content/12-quantum-mechanics` (prefix 12, EXISTING section, spine id `quantum-mechanics`).
Field: `quantum` (order 21, domain `physics`).
Source books: Griffiths-Schroeter 2018, Sakurai-Napolitano 2021, Shankar 2012, Cohen-Tannoudji 1977.

**Note**: Quantum (prefix 12) is the MOST complete physics section (~76 units). This plan
targets only identified thin chapters — do NOT re-audit every chapter, only those below.

## Thin chapters requiring gap-fill

Run `ls content/12-quantum-mechanics/*/` to confirm counts, then produce only the listed units.

| Chapter | Current count | Gap-fill target |
|---|---|---|
| 01-wave-mechanics | needs audit | WKB, probability current, spreading of wave packets |
| 04-angular-momentum | needs audit | Wigner D-matrices, Clebsch-Gordan tables |
| 08-identical-particles | needs audit | Fock space formalism, creation/annihilation operators |
| 18-open-quantum-systems | needs audit | Lindblad equation, decoherence, quantum error |

Because quantum already has 76 units, **do not produce these until you have verified the chapter
is genuinely sparse** (`ls content/12-quantum-mechanics/<chapter>/` returns < 3 units).
If any chapter turns out to have ≥ 4 units, skip it for quantum.

## Unit list (conditional — verify chapter is sparse before producing)

### ch01 wave-mechanics (conditional)

`12.01.05` WKB approximation: tunneling, Bohr-Sommerfeld quantization, and connection formulas
`12.01.06` Probability current, continuity equation, and the flow interpretation of the wavefunction
`12.01.07` Spreading of the free Gaussian wave packet: group velocity and dispersion

### ch04 angular-momentum (conditional)

`12.04.07` Wigner D-matrices and rotation operators in the spin-j representation
`12.04.08` Clebsch-Gordan coefficients: tables, recursion relations, and the triangle rule

### ch08 identical-particles (conditional)

`12.08.04` Second quantization: Fock space, creation and annihilation operators, and the number operator
`12.08.05` Many-body Hamiltonian in second quantization: kinetic and interaction terms

### ch18 open-quantum-systems (conditional)

`12.18.01` Density matrix formalism: mixed states, reduced density matrix, and the partial trace
`12.18.02` Lindblad master equation: Markovian open systems and quantum jumps
`12.18.03` Decoherence: pointer states, preferred basis, and the quantum-to-classical transition
`12.18.04` Quantum error correction: stabilizer codes, the Knill-Laflamme conditions

**Total: up to 12 conditional units** (only produce those for sparse chapters)

## Source_books frontmatter values

- `griffiths-qm-2018` (Griffiths & Schroeter — Introduction to Quantum Mechanics, 3rd ed.)
- `sakurai-2021` (Sakurai & Napolitano — Modern Quantum Mechanics, 3rd ed.)
- `shankar-2012` (Shankar — Principles of Quantum Mechanics, 2nd ed.)
- `cohen-tannoudji-1977` (Cohen-Tannoudji, Diu & Laloë — Quantum Mechanics)

AND stamps `source_curriculum: quantum-mechanics`.
