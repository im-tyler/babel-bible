import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export function head() {
  return {
    title: "Production | Codex",
    description:
      "Live production state from manifests/production/plan.json — shipped, queued, audits done, next-up.",
  };
}

interface AuditDone {
  slug: string;
  path: string;
  punch_list_count: number;
  p1: number; p2: number; p3: number; p4: number;
}

interface BookUnaudited {
  ft_entry: string;
  title: string;
  author: string;
}

interface QueuedUnit {
  id: string;
  title: string;
  source_audits: string[];
  spec_excerpt?: string;
  prereqs?: string[];
  audit_position?: number;
}

const PLAN_PATH = resolve(import.meta.dirname, "../../../manifests/production/plan.json");

export async function loader() {
  let plan: any = null;
  try { plan = JSON.parse(readFileSync(PLAN_PATH, "utf-8")); }
  catch (e) { return { plan: null, error: String(e) }; }

  const counts = plan.counts || {};
  const queueIds: string[] = plan.queue_topo_order || [];
  const queue: QueuedUnit[] = queueIds.slice(0, 25).map((id: string) => {
    const u = plan.units?.[id] || {};
    return {
      id,
      title: u.title || id,
      source_audits: u.source_audits || [],
      spec_excerpt: u.spec_excerpt,
      prereqs: u.prereqs || [],
      audit_position: u.audit_position,
    };
  });

  const auditsDone: AuditDone[] = Object.entries(plan.audits_done || {}).map(([slug, v]: any) => ({
    slug,
    path: v.path,
    punch_list_count: v.punch_list_count || 0,
    p1: v.p1 || 0, p2: v.p2 || 0, p3: v.p3 || 0, p4: v.p4 || 0,
  })).sort((a, b) => a.slug.localeCompare(b.slug));

  const booksUnaudited: BookUnaudited[] = plan.books_unaudited || [];

  const generatedAt = plan.generated_at || "";
  const sessionsRemaining = Math.ceil(
    (counts.queued || 0) / 4 +
    (counts.books_unaudited || 0) * 3   // ~3 units per audit avg + 1 audit-batch
  );

  return {
    plan: { counts, queue, auditsDone, booksUnaudited, generatedAt, sessionsRemaining },
  };
}

export default function ProductionPage({ data }: { data: any }) {
  if (!data.plan) {
    return (
      <article class="page-narrow">
        <h1>Production</h1>
        <p class="muted">No production plan available.</p>
      </article>
    );
  }
  const c = data.plan.counts;
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Production</h1>
        <p class="lede">
          Live readout of <code>manifests/production/plan.json</code>. {c.shipped} units shipped,{" "}
          {c.queued} queued, {c.audits_done} of {c.books_total} books audited.
        </p>
        <p class="muted">
          Generated: {data.plan.generatedAt || "(unknown)"} &nbsp;·&nbsp;{" "}
          Estimated sessions remaining: ~{data.plan.sessionsRemaining}
        </p>
        <div class="stats-row" style="margin-top: 1rem;">
          <div class="stat-card">
            <div class="stat-number">{c.shipped}</div>
            <div class="stat-label">shipped</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{c.queued}</div>
            <div class="stat-label">queued</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{c.audits_done}/{c.books_total}</div>
            <div class="stat-label">audits</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{c.books_unaudited}</div>
            <div class="stat-label">books unaudited</div>
          </div>
        </div>
      </section>

      <section class="page-narrow">
        <h2>Next up — top of queue</h2>
        <p class="muted">
          Topologically ordered by prereqs. Shown: first 25 of {c.queued}.
        </p>
        {data.plan.queue.length === 0 ? (
          <p class="muted">Queue empty. Run an audit to add new gap units.</p>
        ) : (
          <ol class="queue-list">
            {data.plan.queue.map((q: QueuedUnit) => (
              <li>
                <code>{q.id}</code> {q.title}
                {q.source_audits.length > 0 && (
                  <span class="muted">
                    {" — from "}
                    {q.source_audits.map((a: string, i: number) => (
                      <>
                        {i > 0 && ", "}
                        <a href={`/sources/${a}/`}>{a}</a>
                      </>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>

      <section class="page-narrow">
        <h2>Audits done ({data.plan.auditsDone.length})</h2>
        <table class="audit-table">
          <thead>
            <tr>
              <th>Audit</th>
              <th class="num">Punch-list</th>
              <th class="num">P1</th>
              <th class="num">P2</th>
              <th class="num">P3</th>
              <th class="num">P4</th>
            </tr>
          </thead>
          <tbody>
            {data.plan.auditsDone.map((a: AuditDone) => (
              <tr>
                <td><a href={`/sources/${a.slug}/`}>{a.slug}</a></td>
                <td class="num">{a.punch_list_count}</td>
                <td class="num">{a.p1}</td>
                <td class="num">{a.p2}</td>
                <td class="num">{a.p3}</td>
                <td class="num">{a.p4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section class="page-narrow">
        <h2>Books unaudited ({data.plan.booksUnaudited.length})</h2>
        <p class="muted">
          The next audits to run. <a href="/sources/">Full booklist</a>.
        </p>
        <ul class="unaudited-list">
          {data.plan.booksUnaudited.slice(0, 30).map((b: BookUnaudited) => (
            <li>
              <code>FT {b.ft_entry}</code> {b.title} <span class="muted">— {b.author}</span>
            </li>
          ))}
        </ul>
        {data.plan.booksUnaudited.length > 30 && (
          <p class="muted">… {data.plan.booksUnaudited.length - 30} more.</p>
        )}
      </section>
    </article>
  );
}
