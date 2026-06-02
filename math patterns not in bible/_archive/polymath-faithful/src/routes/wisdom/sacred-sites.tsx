import { Island } from "@neutron-build/core/client";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import LeyMap from "../../components/islands/LeyMap";
import { SACRED_SITES } from "../../data/sacredSites";

export const config = { mode: "static" };

export function head() {
  return {
    title: "Sacred sites — Polymath",
    description:
      "An interactive map of well-known ancient sites with real coordinates. The map mechanics are real; the 'ley line' connections are folklore, labelled as such.",
  };
}

export default function SacredSites() {
  const rows = SACRED_SITES.map((s) => [s.name, s.lat.toFixed(4), s.lng.toFixed(4), s.note]);

  return (
    <article>
      <PageHeader
        kicker="Wisdom"
        title="Sacred sites & ley lines"
        tier="content"
        lede="A real, pannable map of famous ancient sites. The coordinates and the mapping are genuine; the connecting 'ley lines' are presented as the folklore they are."
      />

      <Island component={LeyMap} client="only" />

      <DataTable
        columns={["site", "latitude", "longitude", "note"]}
        rows={rows}
        caption="Site coordinates plotted on the map above."
      />

      <p style="max-width:var(--prose-max);margin-top:var(--space-6);color:var(--text-dim)">
        This is the "content" tier: there is nothing to compute or falsify here beyond the coordinates
        themselves, which are accurate. The idea that these sites lie on meaningful straight-line alignments
        ("ley lines") is a long-standing piece of folklore — visually suggestive on a flat map, but not a
        measured physical phenomenon. The map is real; the mysticism is labelled.
      </p>
    </article>
  );
}
