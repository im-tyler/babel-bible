// High-precision evaluation of standard constant identities.
// The point of the page that uses this: COMPUTE each expression to many digits
// so the reader can confirm for themselves that it is an exact identity, rather
// than taking the equality on faith.

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

/** π via the Machin-type identity 4·(arctan ½ + arctan ⅓). */
export function piMachinType(): Decimal {
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

export type ConstantCheck = {
  symbol: string;
  identity: string;
  computed: string;
  reference: string;
  /** Number of leading significant digits that agree with the reference. */
  agreeingDigits: number;
  exact: boolean;
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
  const piMT = piMachinType();
  const ph = phi();
  const phRef = new Decimal("1.6180339887498948482045868343656381177203");

  return [
    {
      symbol: "π",
      identity: "4·(arctan ½ + arctan ⅓)",
      computed: piMT.toPrecision(displayDigits),
      reference: piRef.toPrecision(displayDigits),
      agreeingDigits: agreement(piMT, piRef),
      exact: true,
      note: "A genuine Machin-type identity — equals π exactly, cross-checked against the classic Machin formula.",
    },
    {
      symbol: "φ",
      identity: "(1 + √5) / 2",
      computed: ph.toPrecision(displayDigits),
      reference: phRef.toPrecision(displayDigits),
      agreeingDigits: agreement(ph, phRef),
      exact: true,
      note: "Definition of the golden ratio.",
    },
  ];
}
