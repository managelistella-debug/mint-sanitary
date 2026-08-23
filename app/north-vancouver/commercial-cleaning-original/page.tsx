import type { Metadata } from "next";
import CommercialCleaningCategoryPageClient from "./CommercialCleaningCategoryPageClient";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/commercial-cleaning-original
// so the CMS version at /north-vancouver/commercial-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Commercial Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional commercial cleaning in North Vancouver. Eco-friendly, WorkSafeBC compliant. Offices, kitchens, strata. Free estimate. 7 days/week.",
  robots: { index: false, follow: false },
};

export default function CommercialCleaningNorthVancouverPage() {
  return <CommercialCleaningCategoryPageClient />;
}
