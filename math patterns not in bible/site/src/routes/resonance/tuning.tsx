import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import { MathInline } from "../../components/MathBlock";
import TonePlayer from "../../components/islands/TonePlayer";
import type { PlayItem } from "../../components/islands/TonePlayer";
import { intervalTable, majorTriad, BASE_A } from "../../math/music";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Just intonation",
    description:
      "Just intonation, with intervals as small-integer ratios — the same ratios that underlie the simplest consonances. Anchored at A = 432 Hz so you can play them.",
  };
}

export default function Tuning() {
  const intervals = intervalTable(BASE_A);
  const rows = intervals.map((i) => [i.label, `${i.ratio[0]}:${i.ratio[1]}`, i.freq.toFixed(2)]);

  const items: PlayItem[] = [
    ...intervals.map((i) => ({
      label: i.label,
      detail: `${i.freq.toFixed(1)} Hz`,
      freqs: [BASE_A, i.freq],
    })),
    { label: "Just major triad (1 · 5/4 · 3/2)", detail: "chord", freqs: majorTriad(BASE_A) },
  ];

  return (
    <article>
      <PageHeader
        kicker="Resonance"
        title="Just intonation"
        tier="standard"
        lede="Standard just intonation, anchored here at A = 432 Hz so the intervals are audible. Every interval is a ratio of small integers — and those ratios (3:2, 4:3, 5:4) are the same ones that show up as Pythagorean-triple leg relationships."
      />

      <Island component={TonePlayer} client="only" items={items} />

      <DataTable
        columns={["interval", "ratio", "frequency (Hz)"]}
        rows={rows}
        caption="Just-intonation intervals on A = 432 Hz."
      />

      <p style="max-width:var(--prose-max);color:var(--text-dim);margin-top:var(--space-6)">
        The mathematics here is just the ratios: a perfect fifth <MathInline tex="3:2" /> is exactly the ratio
        underlying the simplest consonances, and just intonation builds every interval from such small-integer
        ratios. The choice of A = 432 Hz as the anchor is an aesthetic convention, not a mathematical claim —
        any anchor scales the whole table.
      </p>
    </article>
  );
}
