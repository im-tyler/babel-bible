import { getCollection } from "@neutron-build/core";

export async function getStaticPaths() {
  const chapters = await getCollection("synthesis");
  return chapters.map((c: any) => ({ params: { slug: c.data.slug } }));
}

export async function loader({ params }: { params: { slug: string } }) {
  const all = await getCollection("synthesis");
  const match = all.find((c: any) => c.data.slug === params.slug);
  if (!match) {
    throw new Response("Chapter not found", { status: 404 });
  }
  const sorted = [...all].sort((a: any, b: any) => a.data.order - b.data.order);
  const idx = sorted.findIndex((c: any) => c.data.slug === params.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const { Content } = await match.render();
  return {
    chapter: match.data,
    Content,
    prev: prev ? { slug: prev.data.slug, title: prev.data.title, order: prev.data.order } : null,
    next: next ? { slug: next.data.slug, title: next.data.title, order: next.data.order } : null,
  };
}

export function head({ data }: { data: any }) {
  return {
    title: `Chapter ${data.chapter.order}: ${data.chapter.title} | Babel Bible`,
    description: data.chapter.subtitle ?? `Babel Bible synthesis, chapter ${data.chapter.order}.`,
  };
}

export default function SynthesisChapter({ data }: { data: any }) {
  const c = data.chapter;
  return (
    <article class="unit-page">
      <header class="unit-header">
        <p class="unit-breadcrumb">
          <a href="/synthesis">Synthesis</a> · Chapter {c.order}
        </p>
        <h1>{c.title}</h1>
        {c.subtitle && <p class="lede"><em>{c.subtitle}</em></p>}
      </header>

      <div class="unit-body-wrap">
        <div class="unit-body">
          <data.Content />
        </div>
      </div>

      <nav class="page-narrow" aria-label="Chapter navigation">
        <div class="hub-grid">
          {data.prev ? (
            <a href={`/synthesis/${data.prev.slug}`} class="hub-card">
              <div class="hub-card-meta">← Chapter {data.prev.order}</div>
              <div class="hub-card-name">{data.prev.title}</div>
            </a>
          ) : (
            <span />
          )}
          {data.next ? (
            <a href={`/synthesis/${data.next.slug}`} class="hub-card">
              <div class="hub-card-meta">Chapter {data.next.order} →</div>
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
