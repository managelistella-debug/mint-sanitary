import type { Metadata } from "next";
import CommercialCleaningCategoryPageClient from "./CommercialCleaningCategoryPageClient";

export const metadata: Metadata = {
  title: "Commercial Cleaning North Vancouver | Mint Sanitary",
  description:
    "Professional commercial cleaning in North Vancouver. Eco-friendly, WorkSafeBC compliant. Offices, kitchens, strata. Free estimate. 7 days/week.",
};

export default function CommercialCleaningNorthVancouverPage() {
  return <CommercialCleaningCategoryPageClient />;
}
