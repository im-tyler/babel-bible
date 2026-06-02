// Spectral "chords": real emission frequencies dropped by N octaves (÷2^N) into
// the audible range. The octave reduction is exact arithmetic; the emission
// lines are real physics. Tier: STANDARD (the audio mapping is well-defined).

const C = 299_792_458; // speed of light, m/s
export const OCTAVE_DROP = 40; // ~40 octaves takes optical light to audible

/** Wavelength in nm → frequency in Hz. */
export function wavelengthToFreq(nm: number): number {
  return C / (nm * 1e-9);
}

/** Drop an optical frequency by `octaves` octaves into the audible band. */
export function toAudible(opticalHz: number, octaves = OCTAVE_DROP): number {
  return opticalHz / Math.pow(2, octaves);
}

export type SpectralLine = { nm: number; color: string; opticalThz: number; audibleHz: number };

function line(nm: number, color: string): SpectralLine {
  const opticalHz = wavelengthToFreq(nm);
  return {
    nm,
    color,
    opticalThz: opticalHz / 1e12,
    audibleHz: toAudible(opticalHz),
  };
}

/** Hydrogen Balmer series — the canonical visible emission lines. */
export const HYDROGEN_BALMER: SpectralLine[] = [
  line(656.3, "#e0584f"), // H-alpha (red)
  line(486.1, "#4aa3df"), // H-beta (cyan)
  line(434.0, "#7b6cf0"), // H-gamma (violet)
  line(410.2, "#9b5de5"), // H-delta (violet)
];
