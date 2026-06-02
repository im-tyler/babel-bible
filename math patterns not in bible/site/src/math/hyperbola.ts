// The unit hyperbola x² − y² = 1 and why every Pythagorean triple lands on it.
// Tier: STANDARD — this identity is forced algebra, not a discovery.

import type { Triple } from "./triples";

export type Point = { x: number; y: number };

/**
 * Map a triple (a, b, c) to the point (c/b, a/b). It ALWAYS satisfies
 * x² − y² = 1, because (c² − a²)/b² = b²/b² = 1 (since a² + b² = c²).
 */
export function tripleToHyperbola(t: Triple): Point {
  return { x: t.c / t.b, y: t.a / t.b };
}

/**
 * Residual of the unit-hyperbola identity at a point: (x² − y²) − 1.
 * For any real triple this is 0 up to floating-point error.
 */
export function hyperbolaResidual(p: Point): number {
  return p.x * p.x - p.y * p.y - 1;
}

/** Points on the upper branch y = √(x²−1) for x in [1, xMax], `steps` samples. */
export function upperBranch(xMax: number, steps = 200): Point[] {
  const pts: Point[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = 1 + ((xMax - 1) * i) / steps;
    pts.push({ x, y: Math.sqrt(x * x - 1) });
  }
  return pts;
}

/** Hyperbolic angle (rapidity) of a point on the hyperbola: θ = atanh(y/x). */
export function rapidity(p: Point): number {
  return Math.atanh(p.y / p.x);
}
