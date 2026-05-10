import { listDocs, SPECS_DIR, type DocSummary } from "../../lib/md-docs";

export function head() {
  return {
    title: "Specs | Codex",
    description: "Codex unit-format spec, quality rubric, continuity scaffold, and orchestration protocol.",
  };
}

export async function loader() {
  return { docs: listDocs(SPECS_DIR) };
}

export default function SpecsIndex({ data }: { data: { docs: DocSummary[] } }) {
  return (
    <article class="page-narrow">
      <h1>Specs</h1>
      <p class="lede">
        Canonical specifications for the curriculum machinery: unit format, quality rubric,
        continuity rules, and orchestration protocol. These are the rules every produced unit
        must satisfy.
      </p>
      <ul class="doc-list">
        {data.docs.map((d) => (
          <li>
            <a href={`/specs/${d.slug}/`}>{d.title}</a>
            <code class="muted"> {d.slug}.md</code>
          </li>
        ))}
      </ul>
    </article>
  );
}
