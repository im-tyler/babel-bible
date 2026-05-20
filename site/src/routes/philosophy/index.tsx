import { getCollection } from "@neutron-build/core";

export function head() {
  return {
    title: "Philosophy — Babel Bible",
    description:
      "The synthesizing section. Where what the sciences have shown meets what the contemplative traditions have said, and the two get held in one frame.",
  };
}

export async function loader() {
  const chapters = await getCollection("philosophy");
  const sorted = [...chapters].sort((a: any, b: any) => a.data.order - b.data.order);
  return {
    chapters: sorted.map((c: any) => ({
      slug: c.data.slug,
      order: c.data.order,
      title: c.data.title,
      subtitle: c.data.subtitle ?? null,
    })),
  };
}

export default function PhilosophyIndex({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Philosophy</h1>
        <p class="lede">
          The final section. Math gives us what can be said exactly; the sciences give us how the
          world behaves; philosophy is where we ask what to do with that — what counts as knowing,
          what counts as a self, and what the contemplative traditions across cultures have been
          pointing at when they describe the same shape from different angles.
        </p>
      </section>

      <section class="page-narrow">
        <h2>Chapters</h2>
        <ol class="unit-list">
          {data.chapters.map((c: any) => (
            <li>
              <a href={`/philosophy/${c.slug}`}>
                <strong>Chapter {c.order}.</strong> {c.title}
              </a>
              {c.subtitle && <span class="muted"> — {c.subtitle}</span>}
            </li>
          ))}
        </ol>
      </section>

      <section class="page-narrow">
        <h2>Structure</h2>
        <p class="muted">
          The four-pyramid axial model. Illness and Reality share the same form — one inverted, one
          upright; stability is orientation, not shape. The Eightfold Path sits inside the Ego
          pyramid as eight footings between Reality and Life.
        </p>
      </section>

      <div
        style="
          position: relative;
          width: 100%;
          height: 82vh;
          margin-top: 1rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
          background: #08080d;
        "
      >
        <iframe
          src="/pyramid/index.html"
          title="Structure"
          style="width:100%;height:100%;border:0;display:block;"
          loading="lazy"
        />
      </div>

      <section class="page-narrow" style="margin-top: 2.5rem;">
        <h2>Symbols</h2>
        <p class="muted">
          The same structural shape encoded across the contemplative traditions. Swap between them
          using the buttons at the top of the viewer.
        </p>
      </section>

      <div
        style="
          position: relative;
          width: 100%;
          height: 82vh;
          margin-top: 1rem;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 4px;
          overflow: hidden;
          background: #08080d;
        "
      >
        <iframe
          src="/pyramid/symbols.html"
          title="Symbols"
          style="width:100%;height:100%;border:0;display:block;"
          loading="lazy"
        />
      </div>
    </article>
  );
}
