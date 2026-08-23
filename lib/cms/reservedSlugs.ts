/**
 * Slugs already claimed by hand-coded static folders. Next.js always lets a
 * literal folder win over a same-level dynamic segment, so these URLs are
 * already safe at runtime — this list exists purely to keep
 * generateStaticParams from asking Next to pre-render a path a static route
 * already owns, which is the one thing that *can* cause a build error.
 *
 * Once a page in this list is migrated (its static folder deleted), remove
 * its slug here and the CMS-driven version takes over immediately — no other
 * code change needed.
 */
export const RESERVED_SERVICE_SLUGS = new Set([
  // MIGRATED — the live page is now CMS-driven. These are the temporary
  // side-by-side comparison copies of the old hand-coded versions; remove
  // both the folder and the entry here once each is signed off.
  "house-cleaning-original",
  "strata-cleaning-original",
  "commercial-cleaning-original",
  "carpet-cleaning-original",
  "church-cleaning-original",
  "deep-cleaning-original",
  "drapes-curtains-cleaning-original",
  "gutter-cleaning-original",
  "gym-cleaning-original",
  "industrial-cleaning-original",
  "move-in-move-out-cleaning-original",
  "office-cleaning-original",
  "post-construction-cleaning-original",
  "pressure-washing-original",
  "restaurant-cleaning-original",
  "school-cleaning-original",
  "upholstery-cleaning-original",
  "vacation-rental-cleaning-original",
  "window-cleaning-original",
]);

export const RESERVED_AREA_SLUGS = new Set([
  "north-vancouver",
  "west-vancouver",
  "vancouver",
]);

/**
 * North Vancouver's own static folder currently covers all 18 of its
 * services, so /north-vancouver/[anything-not-in-that-folder] 404s rather
 * than falling through to /[area]/[service] — Next.js commits to a matched
 * literal segment and doesn't back out of it for children. West Vancouver,
 * Vancouver, and any brand-new area have no such subtree, so CMS-created
 * area-service pages under them work immediately. North Vancouver's
 * CMS-driven pages start working the moment its static folder is removed
 * (Phase 3 of the migration) — no code change needed then either.
 */
export const AREAS_WITH_BLOCKING_STATIC_SUBTREE = new Set(["north-vancouver"]);
