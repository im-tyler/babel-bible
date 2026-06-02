// The three "construction rules" by which Grant generates every force triangle
// from the (3,4,5) seed. All deterministic arithmetic. Tier: GRANT CONSTRUCT
// (real as arithmetic; "this is how forces arise" is his framing).

import type { Triple } from "./triples";

/** Rule 1 — Carry & Multiply: (a,b,c) → (c, a·b, √(c²+(ab)²)). */
export function carryMultiply(t: Triple): Triple {
  const a = t.c;
  const b = t.a * t.b;
  const c = Math.sqrt(a * a + b * b);
  return { a: Math.min(a, b), b: Math.max(a, b), c };
}

/** Rule 2 — Short-Leg Fusion: two short legs → (aᵢ+aⱼ, aᵢ·aⱼ, √…). */
export function shortLegFusion(ai: number, aj: number): Triple {
  const a = ai + aj;
  const b = ai * aj;
  const c = Math.sqrt(a * a + b * b);
  return { a: Math.min(a, b), b: Math.max(a, b), c };
}

/** Rule 3 — Corridor Step: (a,b,b+1) → (a+2, b+2a+2, b+2a+3). */
export function corridorStep(t: Triple): Triple {
  return { a: t.a + 2, b: t.b + 2 * t.a + 2, c: t.b + 2 * t.a + 3 };
}
