import { client } from "./lib.mjs";

/**
 * Site-wide review stat update: 4.9/5 from 120+ reviews → 5/5 from 50+
 * reviews, per the client's explicit instruction. Touches:
 *   - siteGlobals.reviewsRating / reviewsCount (the fields TestimonialsSection
 *     actually renders on every CMS page)
 *   - Every cleaningType/areaService/area doc whose migrated prose repeated
 *     the old stat verbatim (found via a full-text scan across all docs)
 *
 * Numeric substitution only — surrounding sentences are left exactly as
 * migrated. The two "4.9/5" slash-notation instances become "5 out of 5"
 * rather than "5/5", since the client's own phrasing ("5 Out of 5 Stars")
 * is the target style and "5/5" reads oddly for a perfect score.
 */

const REVIEW_DOC_IDS = [
  "area-north-vancouver",
  "areaService-deep-cleaning",
  "areaService-house-cleaning",
  "areaService-industrial-cleaning",
  "areaService-steam-cleaning",
  "areaService-upholstery-cleaning",
  "areaService-vacation-rental-cleaning",
  "cleaningType-carpet-cleaning",
  "cleaningType-drapes-curtains-cleaning",
  "cleaningType-gutter-cleaning",
  "cleaningType-industrial-cleaning",
  "cleaningType-pressure-washing",
  "cleaningType-steam-cleaning",
  "cleaningType-upholstery-cleaning",
];

function applyReplacements(text) {
  return text
    .replace(/4\.9\/5/g, "5 out of 5")
    .replace(/4\.9 out of 5/g, "5 out of 5")
    .replace(/120\+/g, "50+")
    .replace(/120 Google review/g, "50 Google review")
    .replace(/120 review/g, "50 review")
    .replace(/more than 120/g, "more than 50")
    .replace(/from 120/g, "from 50")
    .replace(/across 120/g, "across 50");
}

console.log("→ siteGlobals");
await client
  .patch("siteGlobals")
  .set({ reviewsRating: "5 out of 5", reviewsCount: "based on 50+ reviews" })
  .commit();
console.log("   updated reviewsRating/reviewsCount");

for (const id of REVIEW_DOC_IDS) {
  const doc = await client.fetch(`*[_id == $id][0]`, { id });
  if (!doc) {
    console.log(`   SKIP ${id} — not found`);
    continue;
  }
  const before = JSON.stringify(doc);
  const after = applyReplacements(before);
  if (before === after) {
    console.log(`   ${id} — no change needed`);
    continue;
  }
  const patched = JSON.parse(after);
  // Strip system fields before re-submitting the whole doc back.
  delete patched._rev;
  await client.createOrReplace(patched);
  console.log(`   updated ${id}`);
}

console.log("\n✓ Review stats updated to 5 out of 5, 50+ reviews");
