// Metallic means — the family of ratios solving x² − nx − 1 = 0.
// n=1 gold (φ), n=2 silver, n=3 bronze, … All STANDARD mathematics.

/** The nth metallic mean: (n + √(n² + 4)) / 2, the positive root of x² − nx − 1 = 0. */
export function metallicMean(n: number): number {
  return (n + Math.sqrt(n * n + 4)) / 2;
}

/**
 * The hyperbolic form λₙ = e^{arcsinh(n/2)}. This is exactly equal to the
 * metallic mean, because sinh(θ) = n/2 ⇒ e^θ = sinh θ + cosh θ = n/2 + √(n²/4+1)
 * = (n + √(n²+4))/2. Returned so a page can show the two agree.
 */
export function metallicRapidity(n: number): number {
  return Math.exp(Math.asinh(n / 2));
}

/** Residual of x² − nx − 1 at the metallic mean (≈ 0 confirms it's the root). */
export function metallicResidual(n: number): number {
  const x = metallicMean(n);
  return x * x - n * x - 1;
}

export type MetallicRow = {
  n: number;
  name: string;
  closed: string;
  value: number;
  rapidity: number;
  residual: number;
};

const NAMES = ["", "Golden", "Silver", "Bronze", "Copper", "Nickel"];

export function metallicTable(count: number): MetallicRow[] {
  return Array.from({ length: count }, (_, i) => {
    const n = i + 1;
    return {
      n,
      name: NAMES[n] ?? `n = ${n}`,
      closed: `(${n} + √${n * n + 4}) / 2`,
      value: metallicMean(n),
      rapidity: metallicRapidity(n),
      residual: metallicResidual(n),
    };
  });
}
