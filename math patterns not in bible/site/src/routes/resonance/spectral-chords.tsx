import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathBlock, MathInline } from "../../components/MathBlock";
import TonePlayer from "../../components/islands/TonePlayer";
import type { PlayItem } from "../../components/islands/TonePlayer";
import { HYDROGEN_BALMER, OCTAVE_DROP } from "../../math/spectra";
import styles from "./shared.module.css";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Spectral chords",
    description:
      "Real hydrogen emission lines dropped 40 octaves into the audible range and played as a chord. The octave reduction is exact; the lines are real physics.",
  };
}

export default function SpectralChords() {
  const lines = HYDROGEN_BALMER;
  const rows = lines.map((l) => [
    `${l.nm} nm`,
    l.opticalThz.toFixed(1),
    l.audibleHz.toFixed(1),
  ]);

  const items: PlayItem[] = [
    ...lines.map((l) => ({
      label: `${l.nm} nm line`,
      detail: `${l.audibleHz.toFixed(1)} Hz`,
      swatch: l.color,
      freqs: [l.audibleHz],
    })),
    {
      label: "Hydrogen spectral chord (all lines)",
      detail: "chord",
      freqs: lines.map((l) => l.audibleHz),
    },
  ];

  return (
    <article>
      <PageHeader
        kicker="Resonance"
        title="Spectral chords"
        tier="standard"
        lede="Take an element's real emission lines and drop them ~40 octaves into the audible range. The reduction is exact arithmetic; the lines are genuine physics. Here are hydrogen's Balmer lines."
      />

      <div class={styles.prose}>
        <p>Each optical frequency is halved 40 times to land in hearing range:</p>
        <MathBlock tex={`f_{\\text{audible}} = \\frac{f_{\\text{optical}}}{2^{${OCTAVE_DROP}}}.`} />
        <p>
          Hydrogen's red <MathInline tex="\text{H}\alpha" /> line at 656 nm becomes a tone near 415 Hz —
          close to concert pitch. Play the individual lines or the full chord:
        </p>
      </div>

      <Island component={TonePlayer} client="only" items={items} />

      <DataTable
        columns={["line", "optical (THz)", "audible (Hz)"]}
        rows={rows}
        caption={`Hydrogen Balmer lines reduced by 2^${OCTAVE_DROP} octaves.`}
      />

      <p class={styles.note}>
        <strong>What's real here:</strong> the emission wavelengths, the speed-of-light conversion, and the
        octave reduction are all standard. The chord you hear is a legitimate, reproducible mapping of
        hydrogen's spectrum to sound — and nothing more is claimed: it is an audible presentation of real
        data, not evidence of a hidden "harmonic" meaning. The idea of presenting a spectrum this way is drawn
        from R.&nbsp;E.&nbsp;Grant's framework; the arithmetic and the physics are ordinary.
      </p>
    </article>
  );
}
