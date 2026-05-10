import { getCollection } from "@neutron-build/core";
import { SECTIONS, SECTION_BY_KEY, sectionLabel, sectionOrder } from "../lib/sections";

export function head() {
  return {
    title: "Codex — A three-tier curriculum from foundations to mastery",
    description:
      "A self-contained pathway through modern mathematics and physics. Every unit speaks at three levels: Beginner for intuition, Intermediate for formal proofs, Master for graduate-level depth with primary-source citations and Lean formalization status.",
  };
}

interface SectionSummary {
  key: string;
  label: string;
  anchor: string;
  order: number;
  count: number;
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

  return { totalUnits, sections };
}

export default function HomePage({ data }: { data: { totalUnits: number; sections: SectionSummary[] } }) {
  return (
    <article>
      <div class="pilot-banner">
        <strong>v0.1 pilot.</strong> Apex-first content, foundations backfilling.
        Every unit ships through a 27-point automated rubric; human-reviewer
        attestation is rolling. Citations marked <em>pending</em> resolve as
        primary sources are wired in.
      </div>

      <section class="hero">
        <div class="hero-eyebrow">A curriculum, not a textbook</div>
        <h1>Walk the path from algebra to mastery — three times.</h1>
        <p class="lede">
          Every unit speaks at three levels. <strong>Beginner</strong> for the geometric picture.{" "}
          <strong>Intermediate</strong> for the formal definition with proofs and exercises.{" "}
          <strong>Master</strong> for graduate-level depth, with original-paper citations and Lean
          formalization status.
        </p>
        <div class="cta-row">
          <a href="/units" class="cta cta--primary">Browse {data.totalUnits} units</a>
          <a href="/about" class="cta cta--secondary">How Codex works</a>
        </div>
      </section>

      <div class="stats-row">
        <div class="stat-card">
          <div class="stat-number">{data.totalUnits}</div>
          <div class="stat-label">Validated units</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">{data.sections.length}</div>
          <div class="stat-label">Sections</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">3</div>
          <div class="stat-label">Tiers per unit</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">27/27</div>
          <div class="stat-label">Quality checks</div>
        </div>
      </div>

      <section class="page-narrow" style="text-align:center; padding-top: 0;">
        <h2 style="font-family: var(--font-serif); font-size: 1.5rem; font-weight: 500; margin-top: 0;">
          The full curriculum
        </h2>
      </section>

      <div class="sections-grid">
        {data.sections.map((s) => (
          <a href={`/units#${s.anchor}`} class="section-card">
            <div class="section-card-name">{s.label}</div>
            <div class="section-card-meta">{s.count} {s.count === 1 ? "unit" : "units"}</div>
          </a>
        ))}
      </div>

      <section class="page-narrow">
        <h2>What this is</h2>
        <p>
          A self-contained pathway through modern mathematics and physics, from precalculus through
          statistical field theory, symplectic geometry, algebraic geometry, and representation
          theory. The same concept, three times: an intuitive picture for the curious, a formal
          treatment with exercises for the rigorous, and a deep treatment with original-source
          citations for graduate readers.
        </p>
        <p>
          Each unit is anchored on the canonical literature — Riemann's <em>Theorie der Abelschen
          Functionen</em>, Cartan-Serre's <em>Faisceaux Algébriques Cohérents</em>, Frobenius's
          character theory papers, Hodge's harmonic-integrals monograph, Mumford's{" "}
          <em>Geometric Invariant Theory</em>. Master-tier prose contextualises the original
          conception alongside the modern textbook synthesis.
        </p>
        <p>
          Every unit ships through a 27-point automated quality rubric. Mathlib formalization
          status is tracked per unit. Cross-references are validated. The whole thing builds clean.
        </p>
      </section>
    </article>
  );
}
