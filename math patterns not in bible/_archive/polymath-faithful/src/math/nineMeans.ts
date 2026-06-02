// The "Nine Generative Means" of a triangle (a, b, c). All nine are real
// closed-form expressions; the genuine algebra is that three of them form
// nested similar right triangles. Tier: STANDARD (algebra) / GRANT CONSTRUCT
// (the "generative" significance he assigns them).

import type { Triple } from "./triples";

export type Mean = { key: string; name: string; value: number; formula: string };

/**
 * Compute all nine means for a triple. Definitions per the Grant Projection
 * Theorem (a = short leg, b = long leg, c = hypotenuse).
 */
export function nineMeans(t: Triple): Mean[] {
  const { a, b, c } = t;
  return [
    { key: "DHM", name: "Doubled harmonic", value: (a * b) / c, formula: "ab / c" },
    { key: "DM", name: "Difference", value: a, formula: "a" },
    { key: "DQM", name: "Doubled quadratic", value: (a * c) / b, formula: "ac / b" },
    { key: "HM", name: "Harmonic", value: (b * b) / c, formula: "b² / c" },
    { key: "GM", name: "Geometric", value: b, formula: "b" },
    { key: "AM", name: "Arithmetic", value: c, formula: "c" },
    { key: "QM", name: "Quadratic", value: (c * c) / b, formula: "c² / b" },
    { key: "LBM", name: "Lower bound", value: (b * b) / a, formula: "b² / a" },
    { key: "LGM", name: "Logarithmic", value: c * Math.sqrt(b), formula: "c√b" },
  ];
}

/**
 * The genuinely-true nested-similar-triangle relation: the ratio c/b carries
 * one nested triple to the next, so HM·(c/b) = GM·(c/b)... collapses to a single
 * scale factor. Returns that common ratio (c/b) and the three nested values it
 * relates, so a page can show the nesting is exact.
 */
export function nestedRatio(t: Triple): { ratio: number; nested: number[] } {
  const r = t.c / t.b;
  // HM=b²/c, GM=b, AM=c form a geometric progression with ratio c/b:
  // HM·r = b²/c · c/b = b = GM; GM·r = b · c/b = c = AM.
  return { ratio: r, nested: [(t.b * t.b) / t.c, t.b, t.c] };
}
