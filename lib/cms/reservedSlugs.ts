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
 * An area whose literal static folder (app/<area>/) has any subtree beneath
 * it — a [service] route, or old *-original service folders — needs its own
 * dedicated app/<area>/[service]/page.tsx rather than relying on the
 * top-level /[area]/[service] catch-all. Next.js commits to a matched
 * literal segment and doesn't back out of it for children, so
 * /north-vancouver/[anything] or /vancouver/[anything] 404s instead of
 * falling through to the catch-all. West Vancouver and any brand-new area
 * with no subtree of their own still work immediately via the catch-all.
 */
export const AREAS_WITH_BLOCKING_STATIC_SUBTREE = new Set(["north-vancouver", "vancouver"]);
