import { loadBooklist, statusCounts, totalBooks, type Chapter, type Book } from "../../lib/booklist";
import { listAudits, type AuditSummary } from "../../lib/audits";

export function head() {
  return {
    title: "Sources | Math STEM",
    description:
      "The Fast Track booklist — 92 primary texts that anchor the curriculum, with sourcing status and per-book audit punch-lists.",
  };
}

interface PageData {
  chapters: Chapter[];
  total: number;
  counts: Record<string, number>;
  audits: AuditSummary[];
  auditsByFt: Record<string, string>; // ftId -> slug
  auditsByAuthorKey: Record<string, string>; // lowercased "<author-lastname>" -> slug
}

function lastName(author: string): string {
  // "Landau, Lifshitz" -> "landau"; "Tom M. Apostol" -> "apostol"
  const trimmed = author.split(",")[0].trim();
  const parts = trimmed.split(/\s+/);
  return parts[parts.length - 1].toLowerCase().replace(/[^a-z]/g, "");
}

export async function loader(): Promise<PageData> {
  const chapters = loadBooklist();
  const audits = listAudits();
  const auditsByFt: Record<string, string> = {};
  const auditsByAuthorKey: Record<string, string> = {};
  for (const a of audits) {
    if (a.ftEntry) auditsByFt[a.ftEntry] = a.slug;
    // slug like "arnold-mathematical-methods" — first segment is the
    // author-lastname; index for fallback matching.
    const first = a.slug.split("-")[0];
    if (first) auditsByAuthorKey[first] = a.slug;
  }
  return {
    chapters,
    total: totalBooks(chapters),
    counts: statusCounts(chapters),
    audits,
    auditsByFt,
    auditsByAuthorKey,
  };
}

function auditLink(book: Book, data: PageData): string | null {
  const direct = data.auditsByFt[book.ftId];
  if (direct) return direct;
  const ln = lastName(book.author);
  if (ln && data.auditsByAuthorKey[ln]) return data.auditsByAuthorKey[ln];
  return null;
}

export default function SourcesPage({ data }: { data: PageData }) {
  return (
    <article>
      <section class="page-narrow" style="padding-top: 0;">
        <h1>Sources</h1>
        <p class="lede">
          The Fast Track booklist. <strong>{data.total}</strong> primary texts anchor the
          curriculum. Each shipped Master-tier unit cites at least one of these books, with
          page references in the bibliography.
        </p>
        <div class="stats-row" style="margin-top: 1rem;">
          <div class="stat-card">
            <div class="stat-number">{data.counts.FREE || 0}</div>
            <div class="stat-label">Free / open</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{data.counts.PD || 0}</div>
            <div class="stat-label">Public domain</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{data.counts.BUY || 0}</div>
            <div class="stat-label">Acquire</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">{data.audits.length}</div>
            <div class="stat-label">Audits done</div>
          </div>
        </div>
      </section>

      <section class="page-narrow">
        <h2>Audits available</h2>
        <p class="muted">
          Audits derive a punch-list of curriculum gap-units from the book's table of contents.
          Each new audit expands the queue. {data.audits.length} of {data.total} books audited
          so far.
        </p>
        <ul class="audit-list">
          {data.audits.map((a) => (
            <li>
              <a href={`/sources/${a.slug}/`}>{a.title}</a>
              {a.ftEntry && <span class="muted"> · FT {a.ftEntry}</span>}
            </li>
          ))}
        </ul>
      </section>

      {data.chapters.map((c) => (
        <section class="booklist-chapter">
          <h2 id={`ch-${c.number}`}>{c.number}. {c.title}</h2>
          <table class="booklist-table">
            <thead>
              <tr>
                <th class="ft-id">FT</th>
                <th>Title</th>
                <th>Author</th>
                <th class="topic-col">Topic</th>
                <th class="status-col">Status</th>
                <th class="audit-col">Audit</th>
              </tr>
            </thead>
            <tbody>
              {c.books.map((b) => {
                const slug = auditLink(b, data);
                return (
                  <tr>
                    <td class="ft-id"><code>{b.ftId}</code></td>
                    <td>{b.title}</td>
                    <td>{b.author}</td>
                    <td class="topic-col muted">{b.topic}</td>
                    <td class="status-col">
                      <span class={`status-badge status-badge--${b.status.toLowerCase()}`}>
                        {b.status}
                      </span>
                    </td>
                    <td class="audit-col">
                      {slug ? <a href={`/sources/${slug}/`}>open</a> : <span class="muted">—</span>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      ))}
    </article>
  );
}
