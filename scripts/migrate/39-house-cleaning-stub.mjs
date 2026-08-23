import { uploadImage, replaceDoc } from "./lib.mjs";

/**
 * Permanent tile-only stub for "house-cleaning". /services/house-cleaning is
 * the hand-coded design template and is never migrated, so this doc never
 * gains sections — it exists only so weak references to it resolve (e.g.
 * north-vancouver/house-cleaning's `cleaningType.name`) and so other pages'
 * tile grids can link to /services/house-cleaning. See the matching entry
 * (and its full rationale) in 00-globals-and-stubs.mjs's STUBS array — this
 * is a standalone re-run of just that one entry, since re-running
 * 00-globals-and-stubs.mjs wholesale would blow away the 6 other stubs that
 * have since become real, fully-migrated cleaningType docs.
 */
await replaceDoc("cleaningType", "house-cleaning", {
  title: "House Cleaning",
  name: "House Cleaning",
  tileImage: await uploadImage(
    "/professional-cleaning-services-north-vancouver.jpg",
    "House Cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  published: true,
  sections: [],
});

console.log("✓ house-cleaning stub ready");
