import { defineConfig, type Plugin } from "vite";
import preact from "@preact/preset-vite";
import { builtinModules } from "node:module";

// The site is static (`export const config = { hydrate: false }` on every
// route), so the client/CSS bundle's JavaScript is never executed in a
// browser -- Neutron only builds it to extract CSS. Several routes import node
// builtins (node:fs, node:path, ...) at module top-level for SSR data loading.
// On the client pass Vite externalizes those to a browser stub that has no
// named exports, so `import { readFileSync } from "node:fs"` fails to resolve.
//
// This plugin intercepts the CLIENT pass only and redirects node builtins to a
// generated shim that statically re-exports every real name as an inert no-op,
// so rollup resolves the named imports. The SSR pass (real node) is untouched.
function nodeBuiltinClientShim(): Plugin {
  const PREFIX = "\0node-shim:";
  return {
    name: "node-builtin-client-shim",
    enforce: "pre",
    apply: "build",
    resolveId(source, _importer, options) {
      if (options?.ssr) return null;
      const bare = source.startsWith("node:") ? source.slice(5) : source;
      if (!builtinModules.includes(bare)) return null;
      return PREFIX + bare;
    },
    async load(id) {
      if (!id.startsWith(PREFIX)) return null;
      const bare = id.slice(PREFIX.length);
      const real = await import(/* @vite-ignore */ "node:" + bare);
      const keys = Object.keys(real).filter((k) => k !== "default");
      const named = keys
        .map((k) => `export const ${k} = /* @__PURE__ */ (() => {});`)
        .join("\n");
      return `${named}\nexport default { ${keys.join(", ")} };\n`;
    },
  };
}

export default defineConfig({
  plugins: [nodeBuiltinClientShim(), preact()],
  build: {
    rollupOptions: {
      // fsevents is an optional native file-watcher (dev-only) pulled into the
      // graph via Vite's internals; rollup must not try to parse the .node
      // binary as JS. Keep it (and any native addon) external.
      external: [/(^|\/)fsevents$/, /\.node$/],
    },
  },
});
