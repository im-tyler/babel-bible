import { listAudits, renderAudit } from "../../lib/audits";

export async function getStaticPaths() {
  const audits = listAudits();
  return audits.map((a) => ({ params: { slug: a.slug } }));
}

export async function loader({ params }: { params: { slug: string } }) {
  const rendered = renderAudit(params.slug);
  if (!rendered) {
    throw new Response("Audit not found", { status: 404 });
  }
  return { slug: params.slug, title: rendered.title, html: rendered.html };
}

export function head({ data }: { data: any }) {
  return {
    title: `${data.title} | Math STEM`,
    description: `Math STEM audit and gap-unit punch-list for ${data.title}.`,
  };
}

export default function AuditPage({ data }: { data: any }) {
  return (
    <article class="prose audit-page">
      <p class="muted">
        <a href="/sources/">← all sources</a>
      </p>
      <h1>{data.title}</h1>
      <div class="audit-body" dangerouslySetInnerHTML={{ __html: data.html }} />
    </article>
  );
}
