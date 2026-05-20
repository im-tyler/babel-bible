import { getCollection } from "@neutron-build/core";
import { sectionLabel, sectionOrder } from "../../lib/sections";
import { renderInline } from "../../lib/inline-math";

export function head() {
  return {
    title: "All units | Babel Bible",
    description: "Browse every Babel Bible unit. Filter by section or search by title / id.",
  };
}

interface UnitRow {
  id: string;
  title: string;
  section: string;
  chapter: string;
  tiers_present: string[];
  status: string;
}

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
  }));
  // Sections, ordered canonically and decorated with their display label.
  const sectionKeys = Array.from(new Set(rows.map((r) => r.section)));
  const sections = sectionKeys
    .map((k) => ({ key: k, label: sectionLabel(k), order: sectionOrder(k) }))
    .sort((a, b) => a.order - b.order);
  return { units: rows, sections };
}

const FILTER_INIT = `
(function () {
  function getFilters() {
    var params = new URLSearchParams(location.search);
    return {
      section: params.get('section') || '',
      q: (params.get('q') || '').toLowerCase(),
    };
  }
  function setFilter(key, value) {
    var params = new URLSearchParams(location.search);
    if (value) params.set(key, value); else params.delete(key);
    history.replaceState(null, '', '?' + params.toString());
    apply();
  }
  function apply() {
    var f = getFilters();
    document.querySelectorAll('[data-filter]').forEach(function (sel) {
      var k = sel.getAttribute('data-filter');
      if (k && k !== 'q') sel.value = f[k] || '';
    });
    var qInput = document.getElementById('filter-q');
    if (qInput && document.activeElement !== qInput) qInput.value = f.q;
    var visible = 0;
    document.querySelectorAll('tr[data-unit-row]').forEach(function (tr) {
      var section = tr.dataset.section || '';
      var text = (tr.dataset.search || '').toLowerCase();
      var ok = (!f.section || section === f.section)
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
