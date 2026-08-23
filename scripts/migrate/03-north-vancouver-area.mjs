import { replaceDoc } from "./lib.mjs";

/**
 * The "North Vancouver" Area doc. It carries no sections and renders no page
 * of its own — "north-vancouver" is in RESERVED_AREA_SLUGS, so the existing
 * static app/north-vancouver/page.tsx (the area landing page) keeps serving
 * that bare URL untouched, exactly as instructed, regardless of this doc's
 * `published` value.
 *
 * `published` must be TRUE here though: it's what every other page's Areas
 * section checks before showing "North Vancouver [Service]" as a bubble.
 * Its individual service pages (/north-vancouver/house-cleaning etc.) are
 * real, live AreaService docs — only the bare /north-vancouver URL is
 * special-cased, and that's handled entirely by the reserved-slug guard, not
 * by this flag.
 */
await replaceDoc("area", "north-vancouver", {
  title: "North Vancouver",
  name: "North Vancouver",
  published: true,
  sections: [],
});

console.log("✓ North Vancouver area doc ready");
