import { getCollection } from "@neutron-build/core";
import { renderInline } from "../../lib/inline-math";

export function head() {
  return {
    title: "Biology — Babel Bible",
    description:
      "Biology built on chemistry built on physics: molecular machines, energetics, information, evolution, dynamics, and cognition — every claim citing the chemistry and math underneath.",
  };
}

export async function loader() {
  const essays = await getCollection("biology");
  const units = await getCollection("units");
  const sortedEssays = [...essays].sort((a: any, b: any) => a.data.order - b.data.order);
  const bioUnits = units
    .filter((u: any) => {
      const id = u.data.id ?? "";
      const n = parseInt(id.slice(0, 2), 10);
      return n >= 17 && n <= 19 && !id.includes("essays");
    })
    .map((u: any) => ({
      id: u.data.id,
      title: u.data.title,
      section: u.data.section,
      tiers_present: u.data.tiers_present,
      status: u.data.status,
    }))
    .sort((a: any, b: any) => a.id.localeCompare(b.id));
  return {
    essays: sortedEssays.map((e: any) => ({
      slug: e.data.slug,
      order: e.data.order,
      title: e.data.title,
      subtitle: e.data.subtitle ?? null,
    })),
    units: bioUnits,
  };
}

export default function BiologyIndex({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Biology</h1>
        <p class="lede">
          Biology is the most layered of the disciplines — molecular machinery on chemistry, on
          thermodynamics, on statistical mechanics, on probability and dynamics. The point of the
          unified curriculum is that each layer's claims trace back to the layer below it.
        </p>
      </section>

      {data.units.length > 0 && (
        <section class="page-narrow">
          <h2>Units</h2>
          <ol class="unit-list">
            {data.units.map((u: any) => (
              <li>
                <a href={`/u/${u.id}`}>
                  <code>{u.id}</code> — <span dangerouslySetInnerHTML={{ __html: renderInline(u.title) }} />
                </a>
                {" "}
                <span class={`badge badge--${u.status}`}>{u.status}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {data.essays.length > 0 && (
        <section class="page-narrow">
          <h2>Synthesis essays</h2>
          <p class="muted">
            Pan-bio questions that span sections — what life is, agency from chemotaxis up,
            information in biology. Lighter than tiered units; not graded for mastery.
          </p>
          <ol class="unit-list">
            {data.essays.map((e: any) => (
              <li>
                <a href={`/biology/${e.slug}`}>
                  <strong>Essay {e.order}.</strong> {e.title}
                </a>
                {e.subtitle && <span class="muted"> — {e.subtitle}</span>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section class="page-narrow">
        <h2>Coverage roadmap</h2>
        <p>
          Three top-level sections matching biology's three weakly-connected entry trees: §17
          molecular &amp; cellular biology (Alberts MBoC spine); §18 organismal &amp; physiological
          biology (Campbell + Boron-Boulpaep spine); §19 ecology, evolution &amp; population biology
          (Futuyma + Begon + Hartl-Clark spine). See{" "}
          <a href="/plans/BIOLOGY_PLAN">the biology plan</a> for tree-by-tree detail.
        </p>
      </section>
    </article>
  );
}
