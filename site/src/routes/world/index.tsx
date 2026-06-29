import { getCollection } from "@neutron-build/core";
import { renderInline } from "../../lib/inline-math";

export function head() {
  return {
    title: "World — Babel Bible",
    description:
      "Economics, civics, geography, and history: how societies organise resources, govern themselves, occupy territory, and understand their own past.",
  };
}

export async function loader() {
  const essays = await getCollection("world");
  const units = await getCollection("units");
  const worldUnits = units
    .filter((u: any) => {
      const sec = u.data.section || "";
      return sec === "economics" || sec === "civics" || sec === "geography";
    })
    .map((u: any) => ({
      id: u.data.id,
      title: u.data.title,
      section: u.data.section,
      chapter: u.data.chapter,
      tiers_present: u.data.tiers_present,
      status: u.data.status,
    }))
    .sort((a: any, b: any) => a.id.localeCompare(b.id));

  const sortedEssays = [...essays].sort((a: any, b: any) => a.data.order - b.data.order);

  return {
    essays: sortedEssays.map((e: any) => ({
      slug: e.data.slug,
      order: e.data.order,
      title: e.data.title,
      subtitle: e.data.subtitle ?? null,
    })),
    units: worldUnits,
  };
}

export default function WorldIndex({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>World</h1>
        <p class="lede">
          How societies organise resources, govern themselves, occupy territory, and understand
          their own past. Economics studies allocation. Civics studies governance. Geography
          studies space. History studies perspective.
        </p>
      </section>

      {data.units.length > 0 && (
        <section class="page-narrow">
          <h2>Units</h2>
          <p class="muted">
            Three tiers per unit. Beginner for the intuition. Intermediate for the formal model
            with exercises. Master for the theoretical depth and comparative perspective.
          </p>
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
          <h2>History essays</h2>
          <p class="muted">
            Not "here's what happened." Instead: multiple perspectives, named sources, honest
            about what we don't know. Every essay presents more than one reading.
          </p>
          <ol class="unit-list">
            {data.essays.map((e: any) => (
              <li>
                <a href={`/world/${e.slug}`}>
                  <strong>Essay {e.order}.</strong> {e.title}
                </a>
                {e.subtitle && <span class="muted"> — {e.subtitle}</span>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section class="page-narrow">
        <h2>Three strands + essays</h2>
        <p>
          <strong>Economics</strong> (section 23.01) — scarcity, supply and demand, market
          structures, money, trade, game theory, personal finance. Presents multiple schools
          (neoclassical, Keynesian, institutional, behavioural, Marxian) without endorsing one.
          Hooks into the math strand for functions, optimisation, and probability.
        </p>
        <p>
          <strong>Civics</strong> (section 23.02) — government, constitutions, separation of
          powers, electoral systems, rights, international organisations. Comparative, not
          nation-specific: covers parliamentary, presidential, federal, and unitary systems.
        </p>
        <p>
          <strong>Geography</strong> (section 23.03) — maps, landforms, climate, population,
          resources, migration, environmental change. Factual and spatial.
        </p>
        <p>
          <strong>History</strong> (essays) — multi-perspective synthesis. Every essay presents
          multiple interpretations and names its sources. The reader decides.
        </p>
      </section>

      {data.units.length === 0 && data.essays.length === 0 && (
        <section class="page-narrow">
          <p class="muted">
            Content is being produced. Units will appear here as they are written.
          </p>
        </section>
      )}
    </article>
  );
}
