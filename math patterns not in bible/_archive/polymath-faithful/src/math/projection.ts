// Grant Projection Theorem — generate a polyhedron's (V, E, F) from a triple.
// Ported from Robert Edward Grant's public-domain (attribution-required) Python
// in "The Grant Projection Theorem" (Dec 2025). Tier: GRANT CONSTRUCT.
//
// TWO honesty caveats, true by the math itself and surfaced in the UI:
//  1. Euler's V − E + F = 2 is NOT proven here — F and E are DEFINED from V and k
//     so the relation always holds. It is forced, not discovered.
//  2. The rendered "solids" are convex hulls of golden-spiral point scatters that
//     preserve the vertex COUNT but not the claimed face/edge connectivity.

import type { Triple } from "./triples";

export type Projection = "convex" | "stellated";
export type Counts = { V: number; E: number; F: number };

/** k = 6 − (count of integers among a, b, c). 3 ints → triangles (k=3). */
export function faceType(t: Triple): number {
  const ints = [t.a, t.b, t.c].filter((x) => Number.isInteger(x)).length;
  return 6 - ints;
}

/** Convex projection: V = a + 2b + c, then E and F from k (k=3 ⇒ E=3V−6, F=2V−4). */
export function convexCounts(t: Triple): Counts {
  const V = t.a + 2 * t.b + t.c;
  const k = faceType(t);
  const F = (2 * (V - 2)) / (k - 2);
  const E = (k * F) / 2;
  return { V, E, F };
}

/** Stellated (factor-swapped) projection: V = 2c, E = b², F = E − V + 2. */
export function stellatedCounts(t: Triple): Counts {
  const V = 2 * t.c;
  const E = t.b * t.b;
  const F = E - V + 2;
  return { V, E, F };
}

export function counts(t: Triple, projection: Projection): Counts {
  return projection === "convex" ? convexCounts(t) : stellatedCounts(t);
}

/** The Euler characteristic V − E + F. Always 2 here — by construction, not proof. */
export function eulerCharacteristic(c: Counts): number {
  return c.V - c.E + c.F;
}

/**
 * Golden-spiral (Fibonacci) point distribution on the unit sphere — the exact
 * placeholder vertex generator Grant's visualization uses. Preserves the vertex
 * COUNT only; it does not realize the claimed (V, E, F) connectivity.
 */
export function fibonacciSphere(n: number): [number, number, number][] {
  const pts: [number, number, number][] = [];
  const golden = Math.PI * (3 - Math.sqrt(5)); // ≈ 2.39996, the golden angle
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / Math.max(1, n - 1)) * 2; // 1 → −1
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    pts.push([Math.cos(theta) * r, y, Math.sin(theta) * r]);
  }
  return pts;
}
