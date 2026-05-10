import { listDocs, PLANS_DIR, type DocSummary } from "../../lib/md-docs";

export function head() {
  return {
    title: "Plans | Math STEM",
    description: "Curriculum production plans, reviewer plan, site plan, project plan.",
  };
}

export async function loader() {
  return { docs: listDocs(PLANS_DIR) };
}

export default function PlansIndex({ data }: { data: { docs: DocSummary[] } }) {
  return (
    <article class="page-narrow">
      <h1>Plans</h1>
      <p class="lede">
        Production plans, reviewer process, project state, wave-by-wave roll-outs. These document
        decisions about what gets built next and why.
      </p>
      <ul class="doc-list">
        {data.docs.map((d) => (
          <li>
            <a href={`/plans/${d.slug}/`}>{d.title}</a>
            <code class="muted"> {d.slug}.md</code>
          </li>
        ))}
      </ul>
    </article>
  );
}
