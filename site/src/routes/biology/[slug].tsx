import { getCollection } from "@neutron-build/core";

export async function getStaticPaths() {
  const essays = await getCollection("biology");
  return essays.map((e: any) => ({ params: { slug: e.data.slug } }));
}

export async function loader({ params }: { params: { slug: string } }) {
  const all = await getCollection("biology");
  const match = all.find((e: any) => e.data.slug === params.slug);
  if (!match) {
    throw new Response("Essay not found", { status: 404 });
  }
  const sorted = [...all].sort((a: any, b: any) => a.data.order - b.data.order);
  const idx = sorted.findIndex((e: any) => e.data.slug === params.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const { Content } = await match.render();
  return {
    essay: match.data,
    Content,
    prev: prev ? { slug: prev.data.slug, title: prev.data.title, order: prev.data.order } : null,
    next: next ? { slug: next.data.slug, title: next.data.title, order: next.data.order } : null,
  };
}

export function head({ data }: { data: any }) {
  return {
    title: `${data.essay.title} | Biology | Babel Bible`,
    description: data.essay.subtitle ?? `Biology essay ${data.essay.order}.`,
  };
}

export default function BiologyEssay({ data }: { data: any }) {
  const e = data.essay;
  return (
    <article class="unit-page">
      <header class="unit-header">
        <p class="unit-breadcrumb">
          <a href="/biology">Biology</a> · Essay {e.order}
          {e.id && <> · <code>{e.id}</code></>}
        </p>
        <h1>{e.title}</h1>
        {e.subtitle && <p class="lede"><em>{e.subtitle}</em></p>}
      </header>

      <div class="unit-body-wrap">
        <div class="unit-body">
          <data.Content />
        </div>
      </div>

      <nav class="page-narrow" aria-label="Essay navigation">
        <div class="hub-grid">
          {data.prev ? (
            <a href={`/biology/${data.prev.slug}`} class="hub-card">
              <div class="hub-card-meta">← Essay {data.prev.order}</div>
              <div class="hub-card-name">{data.prev.title}</div>
            </a>
          ) : (
            <span />
          )}
          {data.next ? (
            <a href={`/biology/${data.next.slug}`} class="hub-card">
              <div class="hub-card-meta">Essay {data.next.order} →</div>
              <div class="hub-card-name">{data.next.title}</div>
            </a>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </article>
  );
}
