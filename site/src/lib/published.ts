// Publication predicate for the units collection.
//
// A unit is published on the static site only when it has shipped. Draft,
// review, approved, and stub units are never published. Every public
// surface that enumerates units (static paths, indexes, counts, listings)
// must go through this module — no direct getCollection("units") consumer
// bypasses it. (Draft browsing in dev mode is out of scope by decision;
// the predicate filters everywhere.)

export function isPublished(unit: any): boolean {
  return unit?.data?.status === "shipped";
}

export function published(units: any[]): any[] {
  return units.filter(isPublished);
}
