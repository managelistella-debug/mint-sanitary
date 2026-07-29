import type { Metadata } from "next";
import CarpetCleaningCategoryPageClient from "./CarpetCleaningCategoryPageClient";

export const metadata: Metadata = {
  title: "Professional Carpet Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Expert carpet cleaning in North Vancouver with eco-friendly products, 7-day availability, and fast turnaround times. Free estimates. Call 236-688-3248.",
  alternates: {
    canonical: "/north-vancouver/carpet-cleaning/",
  },
};

export default function CarpetCleaningNorthVancouverPage() {
  return <CarpetCleaningCategoryPageClient />;
}
