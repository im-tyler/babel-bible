import { getCollection } from "@neutron-build/core";

export function head() {
  return {
    title: "Philosophy — Babel Bible",
    description:
      "The academic discipline of philosophy: epistemology, ethics, aesthetics, consciousness, philosophy of science and mathematics, democratic theory, and eastern philosophy.",
  };
}

export async function loader() {
  const units = await getCollection("units");
  const philUnits = units
    .filter((u: any) => {
      const id = u.data.id ?? "";
      return id.startsWith("20.") && !id.includes("essays");
    })
    .map((u: any) => ({
      id: u.data.id,
      title: u.data.title,
      chapter: u.data.chapter,
      tiers_present: u.data.tiers_present,
      status: u.data.status,
    }))
    .sort((a: any, b: any) => a.id.localeCompare(b.id));

  const byChapter = new Map<string, typeof philUnits>();
  for (const u of philUnits) {
    const key = u.chapter || "uncategorized";
    if (!byChapter.has(key)) byChapter.set(key, []);
    byChapter.get(key)!.push(u);
  }
  const chapters = Array.from(byChapter.entries())
    .map(([key, units]) => ({ key, units }))
    .sort((a, b) => (a.units[0]?.id ?? "").localeCompare(b.units[0]?.id ?? ""));

  return { chapters, total: philUnits.length };
}

function prettyChapter(key: string): string {
  if (!key) return "Uncategorized";
  return key
    .replace(/^phil-of-/i, "philosophy of ")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function PhilosophyIndex({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Philosophy</h1>
        <p class="lede">
          The academic discipline — epistemology, ethics, aesthetics, consciousness, philosophy of
          science and mathematics, democratic theory, and the eastern traditions read as
          philosophy rather than religion. Each unit speaks at three levels: Beginner for
          intuition, Intermediate for the formal arguments, Master for graduate-level depth with
          primary-source citations.
        </p>
        <p class="muted">
          Looking for the synthesizing project — the four-pyramid axial model, the symbols across
          contemplative traditions, the six chapters on reflexivity and disclosure? That lives at{" "}
          <a href="/synthesis">/synthesis</a>.
        </p>
      </section>

      {data.chapters.length > 0 && (
        <section class="page-narrow">
          <h2>Units</h2>
          <p class="muted">{data.total} philosophy units, grouped by chapter.</p>
          {data.chapters.map((ch: any) => (
            <div style="margin-top: 1.5rem;">
              <h3 style="margin-bottom: 0.5rem;">{prettyChapter(ch.key)}</h3>
              <ol class="unit-list">
                {ch.units.map((u: any) => (
                  <li>
                    <a href={`/u/${u.id}`}>
                      <code>{u.id}</code> — {u.title}
                    </a>
                    {u.status && (
                      <>
                        {" "}
                        <span class={`badge badge--${u.status}`}>{u.status}</span>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </section>
      )}

      <section class="page-narrow">
        <h2>Coverage</h2>
        <p>
          Ten chapters following the standard analytic / continental / comparative breakdown — see{" "}
          <a href="/plans/PHILOSOPHY_PLAN">the philosophy plan</a> for the chapter-by-chapter
          roadmap and primary-source spine.
        </p>
      </section>
    </article>
  );
}
