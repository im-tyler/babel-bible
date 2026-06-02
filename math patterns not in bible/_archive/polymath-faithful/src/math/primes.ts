// Real prime-counting π(x) vs the logarithmic integral Li(x). Both are standard;
// the point of the page is that these are the genuine objects, while Grant's
// "proof of the Riemann Hypothesis" and "zero-variance prime prediction" are not.

/** Sieve of Eratosthenes: boolean isPrime up to and including max. */
export function sieve(max: number): boolean[] {
  const is = new Array(max + 1).fill(true);
  is[0] = is[1] = false;
  for (let p = 2; p * p <= max; p++) {
    if (is[p]) for (let m = p * p; m <= max; m += p) is[m] = false;
  }
  return is;
}

/** Li(x) = ∫₂ˣ dt/ln t via Simpson's rule. */
export function li(x: number, steps = 2000): number {
  if (x <= 2) return 0;
  const a = 2;
  const h = (x - a) / steps;
  const f = (t: number) => 1 / Math.log(t);
  let s = f(a) + f(x);
  for (let i = 1; i < steps; i++) {
    s += (i % 2 === 0 ? 2 : 4) * f(a + i * h);
  }
  return (h / 3) * s;
}

export type PrimePoint = { x: number; pi: number; li: number };

/** π(x) and Li(x) sampled at `points` values up to max. */
export function primeSeries(max = 1000, points = 40): PrimePoint[] {
  const is = sieve(max);
  const prefix = new Array(max + 1).fill(0);
  for (let n = 1; n <= max; n++) prefix[n] = prefix[n - 1] + (is[n] ? 1 : 0);
  const out: PrimePoint[] = [];
  for (let i = 1; i <= points; i++) {
    const x = Math.round((max * i) / points);
    out.push({ x, pi: prefix[x], li: li(x) });
  }
  return out;
}
