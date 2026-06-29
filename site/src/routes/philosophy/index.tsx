import { getCollection } from "@neutron-build/core";
import { renderInline } from "../../lib/inline-math";

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
      </section>

      <section class="page-narrow">
        <a
          href="/synthesis"
          style="
            display: block;
            text-decoration: none;
            color: inherit;
            padding: 1.25rem 1.5rem;
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 6px;
            background: rgba(255,255,255,0.02);
            margin-top: 0.5rem;
          "
        >
          <div style="font-size: 0.85rem; opacity: 0.7; letter-spacing: 0.04em; text-transform: uppercase; margin-bottom: 0.35rem;">
            Companion project →
          </div>
          <div style="font-size: 1.25rem; font-weight: 600; margin-bottom: 0.35rem;">
            Synthesis
          </div>
          <div style="opacity: 0.8; line-height: 1.5;">
            The synthesizing frame — the four-pyramid axial model, symbols across contemplative
            traditions, and six chapters on reflexivity, disclosure, and practice. Held alongside
            the academic discipline, not under it.
          </div>
        </a>
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
                      <code>{u.id}</code> — <span dangerouslySetInnerHTML={{ __html: renderInline(u.title) }} />
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
