// Grant's "constant derivations" — reproduced so the numbers are visible, then
// framed honestly. Each evaluates (by construction) close to its target; the
// point is that "no free parameters" is false: the CHOICE of expression is the
// parameter space. Tier: UNVERIFIED CLAIM.

export type Derivation = {
  target: string;
  formula: string;
  computed: number;
  measured: number;
  note: string;
};

export function derivations(): Derivation[] {
  return [
    {
      target: "mₚ / mₑ",
      formula: "6π⁵",
      computed: 6 * Math.PI ** 5,
      measured: 1836.15267,
      note: "A long-known recreational-math coincidence — 6π⁵ ≈ the proton/electron mass ratio to ~5 digits. No mechanism, just a near-hit.",
    },
    {
      target: "Ω_Λ (dark energy)",
      formula: "493 / 720",
      computed: 493 / 720,
      measured: 0.6847,
      note: "A ratio of two chosen integers landing near the measured dark-energy density. With freedom to pick the integers, near-hits are easy.",
    },
    {
      target: "α⁻¹ ÷ 100",
      formula: "e^(−π/√10) + 1",
      computed: Math.exp(-Math.PI / Math.sqrt(10)) + 1,
      measured: 1.37036,
      note: "The Codex 'harmonic collapse' value, ≈ 1.3703, read as the fine-structure constant 137.03. Depends entirely on the redefined imaginary unit.",
    },
  ];
}

/** Leading significant digits shared between two positive numbers. */
export function sharedDigits(a: number, b: number, max = 10): number {
  for (let d = 1; d <= max; d++) {
    if (a.toPrecision(d) !== b.toPrecision(d)) return d - 1;
  }
  return max;
}
