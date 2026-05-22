import { getCollection } from "@neutron-build/core";

export function head() {
  return {
    title: "Language — Babel Bible",
    description:
      "Grammar, writing, and literature: how English works, how to use it clearly, and how to recognise what great writers are doing.",
  };
}

export async function loader() {
  const essays = await getCollection("language");
  const units = await getCollection("units");
  const languageUnits = units
    .filter((u: any) => {
      const sec = u.data.section || "";
      return sec === "grammar" || sec === "writing" || sec === "literature";
    })
    .map((u: any) => ({
      id: u.data.id,
      title: u.data.title,
      section: u.data.section,
      chapter: u.data.chapter,
      tiers_present: u.data.tiers_present,
      status: u.data.status,
    }))
    .sort((a: any, b: any) => a.id.localeCompare(b.id));

  const sortedEssays = [...essays].sort((a: any, b: any) => a.data.order - b.data.order);

  return {
    essays: sortedEssays.map((e: any) => ({
      slug: e.data.slug,
      order: e.data.order,
      title: e.data.title,
      subtitle: e.data.subtitle ?? null,
    })),
    units: languageUnits,
  };
}

export default function LanguageIndex({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Language</h1>
        <p class="lede">
          How English works, how to use it clearly, and how to recognise what writers are doing when
          they use it well. Grammar is the machinery. Writing is the craft. Literature is the art
          that results when craft meets purpose.
        </p>
      </section>

      {data.units.length > 0 && (
        <section class="page-narrow">
          <h2>Units</h2>
          <p class="muted">
            Three tiers per unit. Beginner for the core idea. Intermediate for the formal rule with
            exercises. Master for the linguistic theory underneath.
          </p>
          <ol class="unit-list">
            {data.units.map((u: any) => (
              <li>
                <a href={`/u/${u.id}`}>
                  <code>{u.id}</code> — {u.title}
                </a>
                {" "}
                <span class={`badge badge--${u.status}`}>{u.status}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {data.essays.length > 0 && (
        <section class="page-narrow">
          <h2>Reading guides</h2>
          <p class="muted">
            Not "here's what it means." Instead: things to notice, questions to ask, what critics
            have argued. The reader brings their own reading.
          </p>
          <ol class="unit-list">
            {data.essays.map((e: any) => (
              <li>
                <a href={`/language/${e.slug}`}>
                  <strong>Guide {e.order}.</strong> {e.title}
                </a>
                {e.subtitle && <span class="muted"> — {e.subtitle}</span>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section class="page-narrow">
        <h2>Three strands</h2>
        <p>
          <strong>Grammar</strong> (section 22.01) — parts of speech, sentence structure,
          agreement, punctuation, clauses. Every unit is testable: identify the noun, fix the
          comma splice, diagram the sentence.
        </p>
        <p>
          <strong>Writing</strong> (section 22.02) — clear sentences, paragraph structure, thesis
          construction, evidence, counterargument, revision. Builds on grammar prerequisites.
        </p>
        <p>
          <strong>Literature techniques</strong> (section 22.03) — metaphor, symbolism, irony,
          point of view, theme, unreliable narration. The toolkit for reading literature
          attentively. Builds on grammar and writing.
        </p>
      </section>

      {data.units.length === 0 && data.essays.length === 0 && (
        <section class="page-narrow">
          <p class="muted">
            Content is being produced. Units will appear here as they are written.
          </p>
        </section>
      )}
    </article>
  );
}
