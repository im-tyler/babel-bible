import { getCollection } from "@neutron-build/core";
import { sectionLabel, sectionOrder, SECTION_BY_KEY } from "../lib/sections";
import { renderInline } from "../lib/inline-math";

export function head() {
  return {
    title: "Lean formalization | Math STEM",
    description:
      "Formalization status across the curriculum. Each unit declares its Lean module and a Mathlib-coverage status: full, partial, none, or stub.",
  };
}

interface Row {
  id: string;
  title: string;
  section: string;
  lean_status: string;
  lean_module?: string;
  lean_mathlib_gap?: string;
  human_reviewer?: string;
}

interface SectionGroup {
  key: string;
  label: string;
  order: number;
  rows: Row[];
  counts: Record<string, number>;
}

export async function loader() {
  const units = await getCollection("units");
  const rows: Row[] = units.map((u: any) => ({
    id: u.data.id,
    title: u.data.title,
    section: u.data.section || "unsectioned",
    lean_status: u.data.lean_status || "unspecified",
    lean_module: u.data.lean_module,
    lean_mathlib_gap: u.data.lean_mathlib_gap,
    human_reviewer: u.data.human_reviewer,
  }));

  const totals: Record<string, number> = { full: 0, partial: 0, none: 0, stub: 0, unspecified: 0 };
  for (const r of rows) totals[r.lean_status] = (totals[r.lean_status] || 0) + 1;

  const grouped = new Map<string, SectionGroup>();
  for (const r of rows) {
    if (!grouped.has(r.section)) {
      grouped.set(r.section, {
        key: r.section,
        label: sectionLabel(r.section),
        order: sectionOrder(r.section),
        rows: [],
        counts: { full: 0, partial: 0, none: 0, stub: 0, unspecified: 0 },
      });
    }
    const g = grouped.get(r.section)!;
    g.rows.push(r);
    g.counts[r.lean_status] = (g.counts[r.lean_status] || 0) + 1;
  }
  const sections = Array.from(grouped.values())
    .map((g) => ({ ...g, rows: g.rows.sort((a, b) => a.id.localeCompare(b.id)) }))
    .sort((a, b) => a.order - b.order);

  const gapsCount = rows.filter((r) => r.lean_mathlib_gap && r.lean_mathlib_gap.trim().length > 0).length;

  return { totals, total: rows.length, sections, gapsCount };
}

const STATUSES = ["full", "partial", "none", "stub"] as const;

export default function LeanPage({ data }: { data: any }) {
  const t = data.totals;
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Lean formalization</h1>
        <p class="lede">
          Each Math STEM unit declares a Lean status. <strong>full</strong> means the proof is checked
          end-to-end. <strong>partial</strong> means statements compile but Mathlib gaps gate the
          proofs. <strong>none</strong> means Mathlib coverage is too thin to state the theorem
          formally; the unit ships with a named human reviewer.
        </p>
        <div class="stats-row" style="margin-top: 1rem;">
          <div class="stat-card">
            <div class="stat-number">{t.full || 0}</div>
            <div class="stat-label">full</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{t.partial || 0}</div>
            <div class="stat-label">partial</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{t.none || 0}</div>
            <div class="stat-label">none</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{data.gapsCount}</div>
            <div class="stat-label">Mathlib gaps</div>
          </div>
        </div>
      </section>

      {data.sections.map((s: SectionGroup) => (
        <section class="lean-section">
          <h2>{s.label}</h2>
          <p class="muted">
            {s.rows.length} units &nbsp;·&nbsp;{" "}
            {STATUSES.map((st, i) => (
              <>
                {i > 0 && " · "}
                <span class={`lean-pill lean-pill--${st}`}>{st}: {s.counts[st] || 0}</span>
              </>
            ))}
          </p>
          <table class="lean-table">
            <thead>
              <tr>
                <th class="ft-id">id</th>
                <th>title</th>
                <th class="status-col">status</th>
                <th>module</th>
              </tr>
            </thead>
            <tbody>
              {s.rows.map((r: Row) => (
                <tr>
                  <td class="ft-id"><a href={`/u/${r.id}`}><code>{r.id}</code></a></td>
                  <td dangerouslySetInnerHTML={{ __html: renderInline(r.title) }} />
                  <td class="status-col">
                    <span class={`lean-pill lean-pill--${r.lean_status}`}>{r.lean_status}</span>
                  </td>
                  <td class="muted">{r.lean_module ? <code>{r.lean_module}</code> : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </article>
  );
}
