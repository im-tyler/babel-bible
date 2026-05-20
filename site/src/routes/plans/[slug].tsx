import { listDocs, renderDoc, PLANS_DIR } from "../../lib/md-docs";

export async function getStaticPaths() {
  return listDocs(PLANS_DIR).map((d) => ({ params: { slug: d.slug } }));
}

export async function loader({ params }: { params: { slug: string } }) {
  const r = renderDoc(PLANS_DIR, params.slug);
  if (!r) throw new Response("Plan not found", { status: 404 });
  return r;
}

export function head({ data }: { data: any }) {
  return {
    title: `${data.title} | Babel Bible plans`,
    description: `Babel Bible plan: ${data.title}.`,
  };
}

export default function PlanPage({ data }: { data: any }) {
  return (
    <article class="prose audit-page">
      <p class="muted">
        <a href="/plans/">← all plans</a>
      </p>
      <h1>{data.title}</h1>
      <div class="audit-body" dangerouslySetInnerHTML={{ __html: data.html }} />
    </article>
  );
}
