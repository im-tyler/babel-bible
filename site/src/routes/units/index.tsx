import { getCollection } from "@neutron-build/core";
import { sectionLabel, sectionOrder } from "../../lib/sections";
import { renderInline } from "../../lib/inline-math";
import lensData from "../../data/lenses.json";

export function head() {
  return {
    title: "All units | Babel Bible",
    description: "Browse every Babel Bible unit. Filter by lens, section, or search by title / id.",
  };
}

interface UnitRow {
  id: string;
  title: string;
  section: string;
  chapter: string;
  tiers_present: string[];
  status: string;
  lenses: string; // space-separated lens ids that include this unit
}

// id -> [lens ids] (core ∪ supporting), built once at module load.
const LENS_MEMBERSHIP: Record<string, string[]> = {};
for (const lz of (lensData as any).lenses) {
  for (const id of [...lz.core, ...lz.supporting]) {
    (LENS_MEMBERSHIP[id] ||= []).push(lz.id);
  }
}
// Lens picker buttons (skip the broad "all" — the cleared state already shows
// everything; the named lenses are the useful filters).
const LENS_BUTTONS = (lensData as any).lenses
  .filter((l: any) => l.id !== "all")
  .map((l: any) => ({ id: l.id, label: l.label, count: l.counts.total }));

export async function loader() {
  const units = await getCollection("units");
  const sorted = [...units].sort((a: any, b: any) =>
    a.data.id.localeCompare(b.data.id),
  );
  const rows: UnitRow[] = sorted.map((u: any) => ({
    id: u.data.id,
    title: u.data.title,
    section: u.data.section,
    chapter: u.data.chapter,
    tiers_present: u.data.tiers_present,
    status: u.data.status,
    lenses: (LENS_MEMBERSHIP[u.data.id] || []).join(" "),
  }));
  // Sections, ordered canonically and decorated with their display label.
  const sectionKeys = Array.from(new Set(rows.map((r) => r.section)));
  const sections = sectionKeys
    .map((k) => ({ key: k, label: sectionLabel(k), order: sectionOrder(k) }))
    .sort((a, b) => a.order - b.order);
  return { units: rows, sections, lenses: LENS_BUTTONS };
}

const FILTER_INIT = `
(function () {
  function getFilters() {
    var params = new URLSearchParams(location.search);
    return {
      lens: params.get('lens') || '',
      section: params.get('section') || '',
      q: (params.get('q') || '').toLowerCase(),
    };
  }
  function setFilter(key, value) {
    var params = new URLSearchParams(location.search);
    if (value) params.set(key, value); else params.delete(key);
    var qs = params.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    apply();
  }
  function apply() {
    var f = getFilters();
    document.querySelectorAll('[data-filter]').forEach(function (sel) {
      var k = sel.getAttribute('data-filter');
      if (k && k !== 'q') sel.value = f[k] || '';
    });
    document.querySelectorAll('[data-lens-set]').forEach(function (b) {
      b.classList.toggle('lens-toggle__btn--active',
        b.getAttribute('data-lens-set') === f.lens);
    });
    var qInput = document.getElementById('filter-q');
    if (qInput && document.activeElement !== qInput) qInput.value = f.q;
    var visible = 0;
    document.querySelectorAll('tr[data-unit-row]').forEach(function (tr) {
      var section = tr.dataset.section || '';
      var lenses = ' ' + (tr.dataset.lenses || '') + ' ';
      var text = (tr.dataset.search || '').toLowerCase();
      var ok = (!f.lens || lenses.indexOf(' ' + f.lens + ' ') !== -1)
        && (!f.section || section === f.section)
        && (!f.q || text.indexOf(f.q) !== -1);
      tr.style.display = ok ? '' : 'none';
      if (ok) visible++;
    });
    var counter = document.getElementById('filter-count');
    if (counter) counter.textContent = visible + ' shown';
  }
  document.addEventListener('change', function (e) {
    var t = e.target;
    if (!t || !t.getAttribute) return;
    var key = t.getAttribute('data-filter');
    if (key && key !== 'q') setFilter(key, t.value);
  });
  document.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'filter-q') setFilter('q', e.target.value);
  });
  document.addEventListener('click', function (e) {
    var lb = e.target && e.target.closest && e.target.closest('[data-lens-set]');
    if (lb) { setFilter('lens', lb.getAttribute('data-lens-set')); return; }
    if (e.target && e.target.id === 'filter-clear') {
      history.replaceState(null, '', location.pathname);
      apply();
    }
  });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else { apply(); }
})();
`;

export default function UnitsIndex({ data }: { data: any }) {
  return (
    <article class="units-index">
      <h1>All units</h1>
      <p class="muted">
        {data.units.length} units total · <span id="filter-count">{data.units.length} shown</span>
      </p>

      <div class="lens-toggle" role="group" aria-label="Lens">
        <button type="button" class="lens-toggle__btn" data-lens-set="">Everything</button>
        {data.lenses.map((l: any) => (
          <button type="button" class="lens-toggle__btn" data-lens-set={l.id} title={`${l.count} units`}>
            {l.label}
          </button>
        ))}
      </div>

      <div class="unit-filters">
        <input
          id="filter-q"
          type="search"
          placeholder="Search title or id…"
          class="unit-filters__search"
          autocomplete="off"
          aria-label="Search units"
        />
        <select data-filter="section" class="unit-filters__select" aria-label="Filter by section">
          <option value="">All sections</option>
          {data.sections.map((s: any) => (
            <option value={s.key}>{s.label}</option>
          ))}
        </select>
        <button id="filter-clear" type="button" class="btn unit-filters__clear">Clear</button>
      </div>

      <table class="unit-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {data.units.map((u: UnitRow) => (
            <tr
              data-unit-row
              data-section={u.section}
              data-lenses={u.lenses}
              data-search={`${u.id} ${u.title}`}
            >
              <td><code>{u.id}</code></td>
              <td><a href={`/u/${u.id}`} dangerouslySetInnerHTML={{ __html: renderInline(u.title) }} /></td>
              <td>{sectionLabel(u.section)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <script dangerouslySetInnerHTML={{ __html: FILTER_INIT }} />
    </article>
  );
}
