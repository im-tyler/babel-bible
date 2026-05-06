import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkTierSections from "./plugins/remark-tier-sections.mjs";

export default defineConfig({
  site: "https://codex.local",
  integrations: [preact(), sitemap()],
  markdown: {
    remarkPlugins: [remarkMath, remarkTierSections],
    rehypePlugins: [[rehypeKatex, { strict: "ignore" }]],
    shikiConfig: {
      theme: "github-dark",
    },
  },
  vite: {
    server: {
      fs: {
        allow: [".."],
      },
    },
  },
});
