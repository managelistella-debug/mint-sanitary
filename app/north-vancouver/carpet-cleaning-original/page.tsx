import type { Metadata } from "next";
import CarpetCleaningCategoryPageClient from "./CarpetCleaningCategoryPageClient";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/carpet-cleaning-original
// so the CMS version at /north-vancouver/carpet-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Carpet Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional carpet, area rug, and stain removal cleaning in North Vancouver. Eco-friendly products, 7-day service, free estimates. Call 236-688-3248.",
  robots: { index: false, follow: false },
};

export default function CarpetCleaningNorthVancouverPage() {
  return <CarpetCleaningCategoryPageClient />;
}
