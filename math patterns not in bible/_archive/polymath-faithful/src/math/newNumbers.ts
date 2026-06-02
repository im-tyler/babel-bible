// The "BFN" new numbers. Internally-consistent constructions — they reproduce
// exactly, so we compute them to high precision. Tier: GRANT CONSTRUCT.

import Decimal from "decimal.js";

Decimal.set({ precision: 60 });

/** ∂ (Fo/Theo) = 5(√3 − 1) ≈ 3.6602540 */
export function partial(): Decimal {
  return new Decimal(3).sqrt().minus(1).times(5);
}

/** ω (Ce) = ∂²/10 + 5 ≈ 6.3397460 */
export function omega(): Decimal {
  const d = partial();
  return d.times(d).div(10).plus(5);
}

/** χ (chi) = ∂ + ω = 10 ("9.999̄", his superposition of 9 and 10). */
export function chi(): Decimal {
  return partial().plus(omega());
}

/** Identity check: 10/ω − 1 should equal 1/√3 ≈ 0.57735 (ε∞). */
export function epsilonInfinity(): { fromOmega: Decimal; fromRoot3: Decimal } {
  return {
    fromOmega: new Decimal(10).div(omega()).minus(1),
    fromRoot3: new Decimal(1).div(new Decimal(3).sqrt()),
  };
}
