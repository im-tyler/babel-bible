// Layout shell. Static-site config; tier toggle and theme toggle are plain
// HTML + inline scripts so we don't fight SSR over tiny pieces of state.

import "../styles/global.css";
import { setActiveMarkdownConfig } from "@neutron-build/core";
import { codexMarkdownConfig, setShippedUnitIds } from "../lib/markdown-config.js";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Set the markdown config at SSR module-load time. Required because the SSR
// worker runs in a separate process from the CLI's `neutron.config.ts`
// evaluation; the module-level `activeMarkdownConfig` in @neutron-build/core
// isn't shared across processes. Idempotent.
setActiveMarkdownConfig(codexMarkdownConfig);

// Same scan as neutron.config.ts. Re-run here so SSR worker has the
// shipped-unit-id set used by the [NN.NN.NN] cross-ref renderer.
function collectShippedIds(root: string): string[] {
  const ids: string[] = [];
  const walk = (dir: string) => {
    let entries: string[];
    try { entries = readdirSync(dir); } catch { return; }
    for (const name of entries) {
      const path = join(dir, name);
      let s;
      try { s = statSync(path); } catch { continue; }
      if (s.isDirectory()) { walk(path); continue; }
      if (!name.endsWith(".md")) continue;
      let body: string;
      try { body = readFileSync(path, "utf-8"); } catch { continue; }
      const fmEnd = body.indexOf("\n---", 4);
      const fm = fmEnd > 0 ? body.slice(4, fmEnd) : "";
      const idMatch = /^id:\s*([\w.]+)\s*$/m.exec(fm);
      const statusMatch = /^status:\s*(\w+)\s*$/m.exec(fm);
      if (idMatch && statusMatch && statusMatch[1] === "shipped") {
        ids.push(idMatch[1]);
      }
    }
  };
  walk(root);
  return ids;
}
setShippedUnitIds(collectShippedIds("./src/content/units"));

export const config = { hydrate: false };

export function head() {
  return {
    headScripts: [
      {
        // Pre-paint: read tier + theme from localStorage and apply to <html>
        // so users don't see a flash of wrong theme/tier.
        content: `(function(){
          try {
            var t = localStorage.getItem('codex_tier');
            document.documentElement.dataset.tierActive =
              (t==='beginner'||t==='intermediate'||t==='master') ? t : 'master';
            var th = localStorage.getItem('codex_theme');
            document.documentElement.dataset.theme =
              (th==='dark'||th==='calm'||th==='light') ? th : 'dark';
          } catch (e) {
            document.documentElement.dataset.tierActive = 'master';
            document.documentElement.dataset.theme = 'dark';
          }
        })();`,
      },
    ],
  } as any;
}

const TOGGLE_INIT = `
(function () {
  function syncActive(group, value) {
    document.querySelectorAll('[data-' + group + '-set]').forEach(function (b) {
      b.classList.toggle(group + '-toggle__btn--active',
        b.getAttribute('data-' + group + '-set') === value);
    });
  }
  function setTier(v) {
    document.documentElement.dataset.tierActive = v;
    try { localStorage.setItem('codex_tier', v); } catch (e) {}
    syncActive('tier', v);
  }
  function setTheme(v) {
    document.documentElement.dataset.theme = v;
    try { localStorage.setItem('codex_theme', v); } catch (e) {}
    syncActive('theme', v);
  }
  document.addEventListener('click', function (e) {
    var tt = e.target && e.target.closest && e.target.closest('[data-tier-set]');
    if (tt) { setTier(tt.getAttribute('data-tier-set')); return; }
    var th = e.target && e.target.closest && e.target.closest('[data-theme-set]');
    if (th) { setTheme(th.getAttribute('data-theme-set')); return; }
  });
  // Sync initial active classes from doc-element flags set pre-paint.
  syncActive('tier', document.documentElement.dataset.tierActive || 'master');
  syncActive('theme', document.documentElement.dataset.theme || 'dark');
})();
`;

export default function RootLayout({ children }: { children: any }) {
  return (
    <>
      <header class="site-header">
        <div class="container">
          <a href="/" class="brand">Codex</a>
          <nav>
            <a href="/units">Units</a>
            <a href="/concepts">Concepts</a>
            <a href="/connections">Connections</a>
            <a href="/sources">Sources</a>
            <a href="/lean">Lean</a>
            <a href="/dag">DAG</a>
            <a href="/production">Production</a>
            <a href="/specs">Specs</a>
            <a href="/plans">Plans</a>
            <a href="/about">About</a>
          </nav>
          <div class="header-controls">
            <div class="theme-toggle" role="group" aria-label="Theme">
              <button type="button" class="theme-toggle__btn" data-theme-set="dark" title="Dark">D</button>
              <button type="button" class="theme-toggle__btn" data-theme-set="calm" title="Calm (sepia)">C</button>
              <button type="button" class="theme-toggle__btn" data-theme-set="light" title="Light">L</button>
            </div>
            <div class="tier-toggle" role="group" aria-label="Reading tier">
              <button type="button" class="tier-toggle__btn" data-tier-set="beginner">Beginner</button>
              <button type="button" class="tier-toggle__btn" data-tier-set="intermediate">Intermediate</button>
              <button type="button" class="tier-toggle__btn" data-tier-set="master">Master</button>
            </div>
          </div>
        </div>
      </header>
      <main id="main-content" class="container">
        {children}
      </main>
      <footer class="site-footer">
        <div class="container">
          <p>Codex — math &amp; physics curriculum, all tiers.</p>
          <p class="muted">v0.1 pilot. Apex-first. Master tier seeded; lower tiers backfilling.</p>
        </div>
      </footer>
      <script dangerouslySetInnerHTML={{ __html: TOGGLE_INIT }} />
      {/* Citation footnote panel — initialises on DOMContentLoaded. */}
      <script src="/js/citation-panel.js" defer></script>
      {/* Math is now server-rendered by marked-katex-extension; no client KaTeX needed.
          KaTeX CSS is loaded via @import in src/styles/global.css. */}
    </>
  );
}
