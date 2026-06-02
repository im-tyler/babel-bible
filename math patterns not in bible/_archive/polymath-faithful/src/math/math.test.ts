import { describe, it, expect } from "vitest";
import {
  euclid,
  consecutiveLeg,
  consecutiveLegFamily,
  legFactors,
  isPythagorean,
} from "./triples";
import { tripleToHyperbola, hyperbolaResidual, upperBranch } from "./hyperbola";
import { nineMeans, nestedRatio } from "./nineMeans";
import { piGrant, piMachin, sqrt10Codex, sqrt10True, agreement } from "./constants";
import { metallicMean, metallicRapidity, metallicResidual } from "./metallic";
import {
  convexCounts,
  stellatedCounts,
  eulerCharacteristic,
  fibonacciSphere,
} from "./projection";
import { carryMultiply, shortLegFusion, corridorStep } from "./construction";
import { partial, omega, chi, epsilonInfinity } from "./newNumbers";
import { electronShells } from "../data/elements";
import Decimal from "decimal.js";

describe("triples", () => {
  it("Euclid's formula produces valid triples", () => {
    const t = euclid(2, 1);
    expect(t).toEqual({ a: 3, b: 4, c: 5 });
    expect(isPythagorean(t.a, t.b, t.c)).toBe(true);
  });

  it("consecutive-leg family matches the known sequence", () => {
    expect(consecutiveLeg(1)).toEqual({ a: 3, b: 4, c: 5 });
    expect(consecutiveLeg(2)).toEqual({ a: 5, b: 12, c: 13 });
    expect(consecutiveLeg(3)).toEqual({ a: 7, b: 24, c: 25 });
    expect(consecutiveLeg(4)).toEqual({ a: 9, b: 40, c: 41 });
    expect(consecutiveLeg(5)).toEqual({ a: 11, b: 60, c: 61 });
  });

  it("every family member is a real Pythagorean triple", () => {
    for (const t of consecutiveLegFamily(20)) {
      expect(isPythagorean(t.a, t.b, t.c)).toBe(true);
    }
  });

  it("factor rule: c−a = 2n² and c+a = 2(n+1)²", () => {
    for (let n = 1; n <= 10; n++) {
      const { cMinusA, cPlusA } = legFactors(consecutiveLeg(n));
      expect(cMinusA).toBe(2 * n * n);
      expect(cPlusA).toBe(2 * (n + 1) * (n + 1));
    }
  });

  it("c−a reproduces the electron-shell capacities 2,8,18,32,50,72", () => {
    const caps = consecutiveLegFamily(6).map((t) => legFactors(t).cMinusA);
    expect(caps).toEqual([2, 8, 18, 32, 50, 72]);
  });

  it("rejects invalid inputs", () => {
    expect(() => euclid(1, 1)).toThrow();
    expect(() => consecutiveLeg(0)).toThrow();
  });
});

describe("unit hyperbola", () => {
  it("every triple lands exactly on x² − y² = 1", () => {
    for (const t of consecutiveLegFamily(25)) {
      const p = tripleToHyperbola(t);
      expect(Math.abs(hyperbolaResidual(p))).toBeLessThan(1e-9);
    }
    // also non-family triples via Euclid
    for (let m = 2; m <= 12; m++) {
      for (let n = 1; n < m; n++) {
        const p = tripleToHyperbola(euclid(m, n));
        expect(Math.abs(hyperbolaResidual(p))).toBeLessThan(1e-9);
      }
    }
  });

  it("upper branch points satisfy the identity", () => {
    for (const p of upperBranch(10, 50)) {
      expect(Math.abs(hyperbolaResidual(p))).toBeLessThan(1e-9);
    }
  });
});

describe("nine means", () => {
  it("returns nine labelled means with DM=a, GM=b, AM=c", () => {
    const t = consecutiveLeg(2); // (5,12,13)
    const means = nineMeans(t);
    expect(means).toHaveLength(9);
    const by = Object.fromEntries(means.map((m) => [m.key, m.value]));
    expect(by.DM).toBe(5);
    expect(by.GM).toBe(12);
    expect(by.AM).toBe(13);
  });

  it("the nested-similar-triangle relation is exact: HM·r=GM, GM·r=AM", () => {
    for (const t of consecutiveLegFamily(8)) {
      const { ratio, nested } = nestedRatio(t);
      const [hm, gm, am] = nested;
      expect(hm * ratio).toBeCloseTo(gm, 9);
      expect(gm * ratio).toBeCloseTo(am, 9);
    }
  });
});

describe("constants (high precision)", () => {
  it("Grant's 4·(arctan½+arctan⅓) equals π to 50+ digits", () => {
    expect(agreement(piGrant(), piMachin(), 50)).toBeGreaterThanOrEqual(50);
  });

  it("both π formulas match the known value", () => {
    const ref = new Decimal("3.14159265358979323846264338327950288");
    expect(agreement(piMachin(), ref)).toBeGreaterThanOrEqual(30);
  });

  it("the Codex √10 ≈ (π+10/π)/2 is NOT an identity — diverges by ~5 digits", () => {
    const agree = agreement(sqrt10Codex(), sqrt10True());
    expect(agree).toBeGreaterThanOrEqual(3); // close enough to look impressive
    expect(agree).toBeLessThan(6); // but provably not equal
  });
});

describe("metallic means", () => {
  it("the closed form solves x² − nx − 1 = 0", () => {
    for (let n = 1; n <= 8; n++) {
      expect(Math.abs(metallicResidual(n))).toBeLessThan(1e-12);
    }
  });

  it("the golden ratio is the n=1 metallic mean", () => {
    expect(metallicMean(1)).toBeCloseTo(1.618033988749895, 12);
  });

  it("Grant's rapidity form e^arcsinh(n/2) equals the metallic mean", () => {
    for (let n = 1; n <= 8; n++) {
      expect(metallicRapidity(n)).toBeCloseTo(metallicMean(n), 12);
    }
  });
});

describe("Grant projection", () => {
  it("convex counts match the paper's table", () => {
    // n=1 (3,4,5): V=16, E=42, F=28 ; n=2 (5,12,13): V=42, E=120, F=80
    expect(convexCounts({ a: 3, b: 4, c: 5 })).toEqual({ V: 16, E: 42, F: 28 });
    expect(convexCounts({ a: 5, b: 12, c: 13 })).toEqual({ V: 42, E: 120, F: 80 });
  });

  it("stellated counts: V=2c, E=b², F=E−V+2", () => {
    expect(stellatedCounts({ a: 5, b: 12, c: 13 })).toEqual({ V: 26, E: 144, F: 120 });
  });

  it("Euler V−E+F = 2 ALWAYS — it is forced, not a discovery", () => {
    for (const t of consecutiveLegFamily(12)) {
      expect(eulerCharacteristic(convexCounts(t))).toBe(2);
      expect(eulerCharacteristic(stellatedCounts(t))).toBe(2);
    }
  });

  it("fibonacci sphere returns V unit-length points (placeholder topology)", () => {
    const pts = fibonacciSphere(42);
    expect(pts).toHaveLength(42);
    for (const [x, y, z] of pts) {
      expect(Math.sqrt(x * x + y * y + z * z)).toBeCloseTo(1, 6);
    }
  });
});

describe("construction rules", () => {
  it("Carry & Multiply: (3,4,5) → (5,12,13)", () => {
    expect(carryMultiply({ a: 3, b: 4, c: 5 })).toEqual({ a: 5, b: 12, c: 13 });
  });
  it("Short-Leg Fusion: 3,5 → (8,15,17)", () => {
    expect(shortLegFusion(3, 5)).toEqual({ a: 8, b: 15, c: 17 });
  });
  it("Corridor Step: (3,4,5) → (5,12,13)", () => {
    expect(corridorStep({ a: 3, b: 4, c: 5 })).toEqual({ a: 5, b: 12, c: 13 });
  });
});

describe("new numbers", () => {
  it("∂ + ω = χ = 10 to high precision", () => {
    expect(chi().toPrecision(20)).toBe(new Decimal(10).toPrecision(20));
  });
  it("∂ ≈ 3.6602540 and ω ≈ 6.3397460", () => {
    expect(partial().toPrecision(8)).toBe("3.6602540");
    expect(omega().toPrecision(8)).toBe("6.3397460");
  });
  it("identity 10/ω − 1 = 1/√3", () => {
    const { fromOmega, fromRoot3 } = epsilonInfinity();
    expect(fromOmega.toPrecision(20)).toBe(fromRoot3.toPrecision(20));
  });
});

describe("electron shells", () => {
  it("matches known shell structures", () => {
    expect(electronShells(2)).toEqual([2]); // He
    expect(electronShells(10)).toEqual([2, 8]); // Ne
    expect(electronShells(18)).toEqual([2, 8, 8]); // Ar
    expect(electronShells(20)).toEqual([2, 8, 8, 2]); // Ca
  });
});
