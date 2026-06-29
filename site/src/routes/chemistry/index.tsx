import { getCollection } from "@neutron-build/core";
import { renderInline } from "../../lib/inline-math";

export function head() {
  return {
    title: "Chemistry — Babel Bible",
    description:
      "Chemistry treated as applied quantum mechanics and statistical mechanics: structure from orbitals, dynamics from rates, equilibrium from thermodynamics — each chapter citing the physics and math it depends on.",
  };
}

export async function loader() {
  const essays = await getCollection("chemistry");
  const units = await getCollection("units");
  const sortedEssays = [...essays].sort((a: any, b: any) => a.data.order - b.data.order);
  const chemUnits = units
    .filter((u: any) => {
      const id = u.data.id ?? "";
      const n = parseInt(id.slice(0, 2), 10);
      return n >= 14 && n <= 16 && !id.includes("essays");
    })
    .map((u: any) => ({
      id: u.data.id,
      title: u.data.title,
      section: u.data.section,
      tiers_present: u.data.tiers_present,
      status: u.data.status,
    }))
    .sort((a: any, b: any) => a.id.localeCompare(b.id));
  return {
    essays: sortedEssays.map((e: any) => ({
      slug: e.data.slug,
      order: e.data.order,
      title: e.data.title,
      subtitle: e.data.subtitle ?? null,
    })),
    units: chemUnits,
  };
}

export default function ChemistryIndex({ data }: { data: any }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Chemistry</h1>
        <p class="lede">
          Chemistry is where quantum mechanics, thermodynamics, and statistical mechanics produce
          the periodic table, bond energies, reaction rates, and phase behavior. The discipline is a
          rich applied corollary of physics — and the cross-references make that explicit.
        </p>
      </section>

      {data.units.length > 0 && (
        <section class="page-narrow">
          <h2>Units</h2>
          <ol class="unit-list">
            {data.units.map((u: any) => (
              <li>
                <a href={`/u/${u.id}`}>
                  <code>{u.id}</code> — <span dangerouslySetInnerHTML={{ __html: renderInline(u.title) }} />
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
          <h2>Synthesis essays</h2>
          <p class="muted">
            Cross-cutting questions that don't fit one chapter — the bond as ontology, what reactivity
            is, why the periodic table works. Lighter than tiered units; not graded for mastery.
          </p>
          <ol class="unit-list">
            {data.essays.map((e: any) => (
              <li>
                <a href={`/chemistry/${e.slug}`}>
                  <strong>Essay {e.order}.</strong> {e.title}
                </a>
                {e.subtitle && <span class="muted"> — {e.subtitle}</span>}
              </li>
            ))}
          </ol>
        </section>
      )}

      <section class="page-narrow">
        <h2>Coverage roadmap</h2>
        <p>
          Three top-level sections: §14 general &amp; physical chemistry (structure, bonding, thermo,
          kinetics, spectroscopy); §15 organic chemistry (mechanism, synthesis, biomolecule
          chemistry); §16 inorganic chemistry (coordination, organometallic, descriptive, solid-state
          foundations). See{" "}
          <a href="/plans/CHEMISTRY_PLAN">the chemistry plan</a> for the full roadmap and
          unit-vs-essay decision criteria.
        </p>
      </section>
    </article>
  );
}
