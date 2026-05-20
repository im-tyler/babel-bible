import { getCollection } from "@neutron-build/core";
import { MATH_SECTION_KEYS, sectionLabel, sectionOrder } from "../lib/sections";

export function head() {
  return {
    title: "Mathematics — Babel Bible",
    description:
      "The spine of the curriculum. From precalculus through analysis, geometry, algebraic geometry, and representation theory.",
  };
}

export async function loader() {
  const units = await getCollection("units");
  const mathUnits = units.filter((u: any) => MATH_SECTION_KEYS.has(u.data.section));
  const sectionCounts = new Map<string, number>();
  mathUnits.forEach((u: any) => {
    sectionCounts.set(u.data.section, (sectionCounts.get(u.data.section) || 0) + 1);
  });

  return {
    unitCount: mathUnits.length,
    sections: Array.from(sectionCounts.entries())
      .map(([key, count]) => ({ key, label: sectionLabel(key), count }))
      .sort((a, b) => sectionOrder(a.key) - sectionOrder(b.key)),
  };
}

export default function MathLanding({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Mathematics</h1>
        <p class="lede">
          The spine of Babel Bible. Math is what every other section reaches back to — proofs in
          physics, models in chemistry, dynamics in biology, and the formal structures philosophy
          cites when it talks about what can be said exactly.
        </p>
      </section>

      <section class="page-narrow">
        <h2>What's in here</h2>
        <p>
          Three depths per unit (Beginner / Intermediate / Master) in a single source. The toggle in
          the header changes which depth renders. Mathlib-verified where coverage exists.
        </p>
        <p class="muted">
          {data.unitCount} units across precalculus, foundations, analysis, modern geometry,
          algebraic geometry, symplectic geometry, Riemann surfaces, and representation theory.
        </p>
      </section>

      <section class="page-narrow">
        <h2>Math sections</h2>
        <ol class="unit-list">
          {data.sections.map((s: any) => (
            <li>
              <a href={`/units?section=${s.key}`}>{s.label}</a>
              {" "}
              <span class="muted">{s.count} {s.count === 1 ? "unit" : "units"}</span>
            </li>
          ))}
        </ol>
      </section>

      <div class="hub-grid">
        <a href="/units" class="hub-card">
          <div class="hub-card-name">All units</div>
          <div class="hub-card-meta">Filterable by tier, section, status.</div>
        </a>
        <a href="/concepts" class="hub-card">
          <div class="hub-card-name">Concepts</div>
          <div class="hub-card-meta">Canonical concept catalog — every concept maps to at most one unit.</div>
        </a>
        <a href="/dag" class="hub-card">
          <div class="hub-card-name">Dependency map</div>
          <div class="hub-card-meta">The curriculum as a directed graph.</div>
        </a>
      </div>
    </article>
  );
}
