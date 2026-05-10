import { listDocs, renderDoc, SPECS_DIR } from "../../lib/md-docs";

export async function getStaticPaths() {
  return listDocs(SPECS_DIR).map((d) => ({ params: { slug: d.slug } }));
}

export async function loader({ params }: { params: { slug: string } }) {
  const r = renderDoc(SPECS_DIR, params.slug);
  if (!r) throw new Response("Spec not found", { status: 404 });
  return r;
}

export function head({ data }: { data: any }) {
  return {
    title: `${data.title} | Codex specs`,
    description: `Codex spec: ${data.title}.`,
  };
}

export default function SpecPage({ data }: { data: any }) {
  return (
    <article class="prose audit-page">
      <p class="muted">
        <a href="/specs/">← all specs</a>
      </p>
      <h1>{data.title}</h1>
      <div class="audit-body" dangerouslySetInnerHTML={{ __html: data.html }} />
    </article>
  );
}
