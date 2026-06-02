// High-precision evaluation of Grant's "conic identities" for constants.
// The point of the page that uses this: COMPUTE each expression to many digits
// so the reader can see for themselves which are exact identities (STANDARD) and
// which are merely near-coincidences dressed as identities (UNVERIFIED CLAIM).

import Decimal from "decimal.js";

Decimal.set({ precision: 70 });

/** arctan(x) via Taylor series; converges for |x| < 1. */
function arctan(x: Decimal): Decimal {
  const x2 = x.times(x);
  let term = x;
  let sum = x;
  let k = 1;
  // Stop when the term no longer affects the working precision.
  while (term.abs().gt("1e-65")) {
    term = term.times(x2).neg();
    sum = sum.plus(term.div(2 * k + 1));
    k++;
  }
  return sum;
}

/** π via Grant's stated identity 4·(arctan ½ + arctan ⅓) — a real Machin-type identity. */
export function piGrant(): Decimal {
  return new Decimal(4).times(arctan(new Decimal(1).div(2)).plus(arctan(new Decimal(1).div(3))));
}

/** π via the classic Machin formula 16·arctan(1/5) − 4·arctan(1/239) — independent cross-check. */
export function piMachin(): Decimal {
  return new Decimal(16).times(arctan(new Decimal(1).div(5)))
    .minus(new Decimal(4).times(arctan(new Decimal(1).div(239))));
}

/** The golden ratio φ = (1 + √5) / 2. */
export function phi(): Decimal {
  return new Decimal(5).sqrt().plus(1).div(2);
}

/** The Codex "wave matrix" expression for √10:  (π + 10/π) / 2.  NOT exact. */
export function sqrt10Codex(): Decimal {
  const pi = piMachin();
  return pi.plus(new Decimal(10).div(pi)).div(2);
}

/** True √10 at working precision. */
export function sqrt10True(): Decimal {
  return new Decimal(10).sqrt();
}

export type ConstantCheck = {
  symbol: string;
  identity: string;
  computed: string;
  reference: string;
  /** Number of leading significant digits that agree with the reference. */
  agreeingDigits: number;
  exact: boolean;
  tier: "real" | "his" | "claim";
  note: string;
};

/** How many leading significant digits two positive decimals share. */
export function agreement(a: Decimal, b: Decimal, max = 40): number {
  for (let d = 1; d <= max; d++) {
    if (a.toPrecision(d) !== b.toPrecision(d)) return d - 1;
  }
  return max;
}

/** The table the constants page renders. Computed at request/render time. */
export function constantChecks(displayDigits = 24): ConstantCheck[] {
  const piRef = piMachin();
  const piG = piGrant();
  const s10c = sqrt10Codex();
  const s10t = sqrt10True();
  const ph = phi();
  const phRef = new Decimal("1.6180339887498948482045868343656381177203");

  return [
    {
      symbol: "π",
      identity: "4·(arctan ½ + arctan ⅓)",
      computed: piG.toPrecision(displayDigits),
      reference: piRef.toPrecision(displayDigits),
      agreeingDigits: agreement(piG, piRef),
      exact: true,
      tier: "real",
      note: "A genuine Machin-type identity — equals π exactly.",
    },
    {
      symbol: "φ",
      identity: "(1 + √5) / 2",
      computed: ph.toPrecision(displayDigits),
      reference: phRef.toPrecision(displayDigits),
      agreeingDigits: agreement(ph, phRef),
      exact: true,
      tier: "real",
      note: "Definition of the golden ratio.",
    },
    {
      symbol: "√10",
      identity: "(π + 10/π) / 2",
      computed: s10c.toPrecision(displayDigits),
      reference: s10t.toPrecision(displayDigits),
      agreeingDigits: agreement(s10c, s10t),
      exact: false,
      tier: "claim",
      note: "The Codex 'wave matrix' expression. Agrees to ~4 digits then diverges — a near-coincidence, not an identity.",
    },
  ];
}
