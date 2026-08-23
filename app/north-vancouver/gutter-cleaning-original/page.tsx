import type { Metadata } from "next";
import GutterCleaningCategoryPageClient from "./GutterCleaningCategoryPageClient";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/gutter-cleaning-original
// so the CMS version at /north-vancouver/gutter-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Gutter Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional gutter cleaning in North Vancouver. Debris removal, downspout flushing, and full inspection for Lonsdale, Lynn Valley, Deep Cove, and beyond.",
  robots: { index: false, follow: false },
};

export default function GutterCleaningNorthVancouverPage() {
  return <GutterCleaningCategoryPageClient />;
}
