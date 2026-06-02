// Just intonation anchored at A = 432 Hz. Intervals are ratios of small
// integers — the same ratios that appear as Pythagorean-triple leg relationships
// (3:2, 4:3, 5:4). All STANDARD music theory.

export const BASE_A = 432;

export type Interval = { label: string; ratio: [number, number]; freq: number };

const INTERVALS: Array<{ label: string; ratio: [number, number] }> = [
  { label: "Unison 1:1", ratio: [1, 1] },
  { label: "Major third 5:4", ratio: [5, 4] },
  { label: "Perfect fourth 4:3", ratio: [4, 3] },
  { label: "Perfect fifth 3:2", ratio: [3, 2] },
  { label: "Major sixth 5:3", ratio: [5, 3] },
  { label: "Octave 2:1", ratio: [2, 1] },
];

export function intervalFreq(ratio: [number, number], base = BASE_A): number {
  return (base * ratio[0]) / ratio[1];
}

export function intervalTable(base = BASE_A): Interval[] {
  return INTERVALS.map((i) => ({ ...i, freq: intervalFreq(i.ratio, base) }));
}

/** A just-intonation major triad on the base: root, major third, fifth. */
export function majorTriad(base = BASE_A): number[] {
  return [base, intervalFreq([5, 4], base), intervalFreq([3, 2], base)];
}
