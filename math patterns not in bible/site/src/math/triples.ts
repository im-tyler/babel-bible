// Pythagorean triples — standard, verifiable mathematics. Pure functions,
// no DOM, unit-tested.

/** A Pythagorean triple (a, b, c) with a < b < c and a² + b² = c². */
export type Triple = { a: number; b: number; c: number };

/** True iff a² + b² = c² exactly (integer check). */
export function isPythagorean(a: number, b: number, c: number): boolean {
  return a > 0 && b > 0 && c > 0 && a * a + b * b === c * c;
}

/**
 * Euclid's formula: for integers m > n > 0, (m²−n², 2mn, m²+n²) is a triple.
 * Returns the legs ordered a < b.
 */
export function euclid(m: number, n: number): Triple {
  if (!(m > n && n > 0)) {
    throw new RangeError("euclid requires m > n > 0");
  }
  const leg1 = m * m - n * n;
  const leg2 = 2 * m * n;
  const c = m * m + n * n;
  const a = Math.min(leg1, leg2);
  const b = Math.max(leg1, leg2);
  return { a, b, c };
}

/**
 * The consecutive-leg family (hypotenuse = long leg + 1):
 *   (a, b, c) = (2n+1, 2n²+2n, 2n²+2n+1)
 * n=1 → (3,4,5), n=2 → (5,12,13), n=3 → (7,24,25), …
 */
export function consecutiveLeg(n: number): Triple {
  if (!(Number.isInteger(n) && n >= 1)) {
    throw new RangeError("consecutiveLeg requires an integer n ≥ 1");
  }
  const a = 2 * n + 1;
  const b = 2 * n * n + 2 * n;
  const c = b + 1;
  return { a, b, c };
}

/**
 * The factor pair of the consecutive-leg family:
 *   c − a = 2n²   (the electron-shell capacity 2, 8, 18, 32, …)
 *   c + a = 2(n+1)²
 * Returned straight from a triple so callers can verify the identity holds.
 */
export function legFactors(t: Triple): { cMinusA: number; cPlusA: number } {
  return { cMinusA: t.c - t.a, cPlusA: t.c + t.a };
}

/** The first `count` members of the consecutive-leg family (n = 1..count). */
export function consecutiveLegFamily(count: number): Triple[] {
  return Array.from({ length: count }, (_, i) => consecutiveLeg(i + 1));
}
