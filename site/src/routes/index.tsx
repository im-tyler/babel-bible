import { getCollection } from "@neutron-build/core";
import {
  SECTION_BY_KEY,
  DOMAINS,
  type DomainKey,
  sectionLabel,
  sectionOrder,
} from "../lib/sections";

export function head() {
  return {
    title: "Babel Bible — A three-tier curriculum from foundations to mastery",
    description:
      "A self-contained curriculum spanning the sciences and humanities — math, physics, chemistry, biology, philosophy, language, and the social world. Every unit speaks at three levels: Beginner for intuition, Intermediate for formal proofs, Master for graduate-level depth with primary-source citations.",
  };
}

interface SectionSummary {
  key: string;
  label: string;
  anchor: string;
  order: number;
  count: number;
}

interface DomainGroup {
  key: DomainKey | "other";
  label: string;
  blurb: string;
  total: number;
  sections: SectionSummary[];
}

export async function loader() {
  const units = await getCollection("units");
  const totalUnits = units.length;

  const sectionCounts = new Map<string, number>();
  units.forEach((u: any) => {
    const key = u.data.section || "unsectioned";
    sectionCounts.set(key, (sectionCounts.get(key) || 0) + 1);
  });

  const sections: SectionSummary[] = Array.from(sectionCounts.entries())
    .map(([key, count]) => ({
      key,
      label: sectionLabel(key),
      anchor: SECTION_BY_KEY.get(key)?.anchor ?? key,
      order: sectionOrder(key),
      count,
    }))
    .sort((a, b) => a.order - b.order);

  // Group by domain in the canonical DOMAINS order. Any section whose
  // key isn't registered in sections.ts falls into an "other" bucket so
  // we can spot orphans on the homepage instead of silently dropping them.
  const groupsByKey = new Map<DomainKey | "other", DomainGroup>();
  for (const d of DOMAINS) {
    groupsByKey.set(d.key, { key: d.key, label: d.label, blurb: d.blurb, total: 0, sections: [] });
  }
  for (const s of sections) {
    const info = SECTION_BY_KEY.get(s.key);
    const domainKey: DomainKey | "other" = info?.domain ?? "other";
    let group = groupsByKey.get(domainKey);
    if (!group) {
      group = { key: "other", label: "Other", blurb: "Sections not yet assigned to a domain.", total: 0, sections: [] };
      groupsByKey.set("other", group);
    }
    group.sections.push(s);
    group.total += s.count;
  }
  const domainGroups: DomainGroup[] = [
    ...DOMAINS.map((d) => groupsByKey.get(d.key)!).filter((g) => g.sections.length > 0),
    ...(groupsByKey.get("other")?.sections.length ? [groupsByKey.get("other")!] : []),
  ];

  return { totalUnits, sections, domainGroups };
}

export default function HomePage({ data }: { data: { totalUnits: number; sections: SectionSummary[]; domainGroups: DomainGroup[] } }) {
  return (
    <article>
      <section class="hero">
        <div class="hero-eyebrow">A curriculum, not a textbook</div>
        <h1>Walk the path from foundations to mastery — three times.</h1>
        <p class="lede">
          One source, the sciences and humanities together. Every unit speaks at three levels.{" "}
          <strong>Beginner</strong> for the intuitive picture.{" "}
          <strong>Intermediate</strong> for the formal definition with proofs and exercises.{" "}
          <strong>Master</strong> for graduate-level depth, with primary-source citations.
        </p>
        <div class="cta-row">
          <a href="/units" class="cta cta--primary">Browse {data.totalUnits} units</a>
          <a href="/about" class="cta cta--secondary">How Babel Bible works</a>
        </div>
      </section>

      <section class="page-narrow" style="text-align:center; padding-top: 0;">
        <h2 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 500; margin-top: 0;">
          The full curriculum
        </h2>
        <p class="muted" style="margin-top: 0.4rem;">
          {data.domainGroups.length} domains · {data.sections.length} sections · {data.totalUnits} units
        </p>
      </section>

      {data.domainGroups.map((group) => (
        <section class="domain-group">
          <header class="domain-group__header">
            <h3 class="domain-group__title">{group.label}</h3>
            <span class="domain-group__count">
              {group.sections.length} {group.sections.length === 1 ? "section" : "sections"} · {group.total} units
            </span>
          </header>
          <p class="domain-group__blurb">{group.blurb}</p>
          <div class="sections-grid">
            {group.sections.map((s) => (
              <a href={`/units?section=${encodeURIComponent(s.key)}`} class="section-card">
                <div class="section-card-name">{s.label}</div>
                <div class="section-card-meta">{s.count} {s.count === 1 ? "unit" : "units"}</div>
              </a>
            ))}
          </div>
        </section>
      ))}

      <section class="page-narrow section-framed">
        <span class="section-frame section-frame--left" aria-hidden="true">
          <svg viewBox="0 0 40 100" width="40" height="100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 18 L36 34 L20 50 L4 34 Z" fill="none" stroke="currentColor" stroke-width="1.2" />
            <line x1="4" y1="34" x2="36" y2="34" stroke="currentColor" stroke-width="1.2" />
            <path d="M20 50 L36 66 L20 82 L4 66 Z" fill="none" stroke="currentColor" stroke-width="1.2" />
            <line x1="4" y1="66" x2="36" y2="66" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </span>
        <span class="section-frame section-frame--right" aria-hidden="true">
          <svg viewBox="0 0 40 100" width="40" height="100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 18 L36 34 L20 50 L4 34 Z" fill="none" stroke="currentColor" stroke-width="1.2" />
            <line x1="4" y1="34" x2="36" y2="34" stroke="currentColor" stroke-width="1.2" />
            <path d="M20 50 L36 66 L20 82 L4 66 Z" fill="none" stroke="currentColor" stroke-width="1.2" />
            <line x1="4" y1="66" x2="36" y2="66" stroke="currentColor" stroke-width="1.2" />
          </svg>
        </span>
        <h2>What this is</h2>
        <p>
          A self-contained curriculum across the sciences and humanities — math, physics,
          chemistry, biology, philosophy, language, and the social world. The same concept three
          times: an intuitive picture for the curious, a formal treatment with exercises for the
          rigorous, and a deep treatment with original-source citations for graduate readers.
        </p>
        <p>
          Every unit anchors on the canonical literature of its field and contextualises the
          original conception alongside the modern synthesis. Cross-references are validated at
          build time. Where Mathlib covers a result, Lean formalisation status is tracked
          per-unit. The whole thing builds clean.
        </p>
      </section>
    </article>
  );
}
