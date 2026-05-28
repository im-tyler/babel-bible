// Sidebar metadata for a unit: prereqs, references, lean module, etc.

// Internal pointers (`docs/…`, `NEED_TO_SOURCE.md#…`) must never surface as
// a reader-facing citation.
const isInternalPath = (s: string) =>
  /NEED_TO_SOURCE|docs\//.test(s) || /\.md(#|$)/.test(s);
const cleanRef = (s: string | undefined): string | null =>
  s && !isInternalPath(s) ? s : null;

// The locator field sometimes carries internal sourcing notes like
// "§I.1 (canonical anchor — pending in docs/catalogs/NEED_TO_SOURCE.md #75)".
// Strip those parentheticals; if nothing reader-useful is left, hide locator.
function cleanLocator(s: string | undefined): string | null {
  if (!s) return null;
  const cleaned = s
    .replace(/\s*\([^)]*(?:NEED_TO_SOURCE|docs\/catalogs|docs\/plans|pending in archive)[^)]*\)/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return cleaned || null;
}

// Strip internal scheduling jargon from the rendered `lean_mathlib_gap`
// (multi-line YAML often contains "per X_PLAN §N" pointers).
function cleanLeanGap(s: string | undefined): string | null {
  if (!s) return null;
  const cleaned = s
    .replace(/\s*per\s+`?[A-Z][A-Z_]*_PLAN(?:\.md)?`?\s*§?[\d.]*\.?/g, ".")
    .replace(/\s*per\s+`?docs\/plans\/[^\s`]+`?\s*§?[\d.]*\.?/gi, ".")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+\./g, ".")
    .trim();
  return cleaned || null;
}

export default function UnitMeta({ unit }: { unit: any }) {
  return (
    <aside class="unit-meta">
      <section>
        <h3>Prerequisites</h3>
        {unit.prerequisites.length === 0 ? (
          <p class="muted">none — this is a leaf unit</p>
        ) : (
          <ul>
            {unit.prerequisites.map((pid: string) => (
              <li key={pid}>
                <code>{pid}</code>{" "}
                {unit.pending_prereqs && (
                  <span class="badge badge--pending">pending</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      {unit.successors.length > 0 && (
        <section>
          <h3>Used in</h3>
          <ul>
            {unit.successors.map((sid: string) => (
              <li key={sid}>
                <code>{sid}</code>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h3>Tier anchors</h3>
        <dl class="anchor-list">
          {(["beginner", "intermediate", "master"] as const).map((t) => (
            <>
              <dt>{t}</dt>
              <dd>
                {unit.tier_anchors[t] === "deferred" ? (
                  <span class="muted">deferred</span>
                ) : (
                  <em>{unit.tier_anchors[t]}</em>
                )}
              </dd>
            </>
          ))}
        </dl>
      </section>

      {unit.references.length > 0 && (
        <section>
          <h3>References</h3>
          <ul class="ref-list">
            {unit.references.map((r: any, i: number) => {
              // Lead with the human-readable citation. `r.source` is an
              // internal key (e.g. "mcclellan2015", "TODO_REF") and is not
              // shown to readers; nor are internal pointers like
              // `docs/catalogs/NEED_TO_SOURCE.md#…` that sit in `path`.
              const cite = cleanRef(r.pointer) || cleanRef(r.path)
                || (r.source && r.source !== "TODO_REF" ? r.source : null);
              const loc = cleanLocator(r.locator);
              return (
                <li key={i}>
                  {cite ? <span>{cite}</span> : <span class="muted">Source pending</span>}
                  {loc && <span class="muted"> · {loc}</span>}
                  {r.pending && <span class="muted"> · source being verified</span>}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {unit.lean_module && (
        <section>
          <h3>Lean module</h3>
          <code>{unit.lean_module}</code>
          {unit.lean_status === "partial" && cleanLeanGap(unit.lean_mathlib_gap) && (
            <details>
              <summary>Mathlib gap</summary>
              <pre class="lean-gap">{cleanLeanGap(unit.lean_mathlib_gap)}</pre>
            </details>
          )}
        </section>
      )}

      {unit.estimated_time && (
        <section>
          <h3>Estimated time</h3>
          <ul>
            {Object.entries(unit.estimated_time).map(([t, v]) => (
              <li key={t}>
                <strong>{t}:</strong> {v as string}
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  );
}
