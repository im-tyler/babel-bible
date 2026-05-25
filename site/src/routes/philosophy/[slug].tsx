// The contemplative "Synthesis" chapters moved to /synthesis/[slug] in the
// /philosophy → academic-discipline / /synthesis → contemplative-frame split.
// This route is kept as a no-op so the old collection-based static-paths
// generator doesn't try to render anything against an empty `philosophy`
// collection. Any direct hits 404.

import { getCollection } from "@neutron-build/core";

export async function getStaticPaths() {
  return [];
}

export async function loader() {
  throw new Response("Not found — moved to /synthesis/", { status: 404 });
}

export default function PhilosophySlugFallback() {
  return null;
}
