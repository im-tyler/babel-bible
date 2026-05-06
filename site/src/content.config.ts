import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const units = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "../content",
  }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    slug: z.string(),
    section: z.string(),
    chapter: z.string().optional(),
    concept_catalog_id: z.string(),
    prerequisites: z.array(z.union([z.string(), z.number()])).default([]),
    successors: z.array(z.union([z.string(), z.number()])).default([]),
    tier_anchors: z.record(z.string()).optional(),
    tiers_present: z
      .array(z.enum(["beginner", "intermediate", "master"]))
      .default(["master"]),
    pending_prereqs: z.boolean().default(false),
    references: z
      .array(
        z.object({
          source: z.string().optional(),
          path: z.string().optional(),
          locator: z.string().optional(),
          pending: z.boolean().optional(),
          pointer: z.string().optional(),
        })
      )
      .default([]),
    lean_module: z.string().optional(),
    lean_status: z.enum(["full", "partial", "none", "stub"]).optional(),
    lean_mathlib_gap: z.string().optional(),
    human_reviewer: z.string().optional(),
    estimated_time: z.record(z.string()).optional(),
    status: z.string().optional(),
    produced_by: z.string().optional(),
    reviewed_by: z.array(z.string()).default([]),
  }),
});

export const collections = { units };
