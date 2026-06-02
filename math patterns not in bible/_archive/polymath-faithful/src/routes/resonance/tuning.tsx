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
    title: "432 Hz tuning — Polymath",
    description:
      "Just intonation anchored at A = 432 Hz, with intervals as small-integer ratios — the same ratios that appear in Pythagorean triples. Play them.",
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
        title="432 Hz tuning"
        tier="real"
        lede="Standard just intonation, anchored at A = 432 Hz. Every interval is a ratio of small integers — and those ratios (3:2, 4:3, 5:4) are the same ones that show up as Pythagorean-triple leg relationships."
      />

      <Island component={TonePlayer} client="only" items={items} />

      <DataTable
        columns={["interval", "ratio", "frequency (Hz)"]}
        rows={rows}
        caption="Just-intonation intervals on A = 432 Hz."
      />

      <p style="max-width:var(--prose-max);color:var(--text-dim);margin-top:var(--space-6)">
        The connection Grant draws is real at this level: a perfect fifth <MathInline tex="3:2" /> is exactly
        the ratio underlying the simplest consonances, and just intonation builds every interval from such
        small-integer ratios. Whether 432 Hz specifically is "cosmically correct" is an aesthetic claim, not a
        mathematical one — the math here is simply the ratios.
      </p>
    </article>
  );
}
