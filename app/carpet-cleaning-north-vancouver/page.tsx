import type { Metadata } from "next";
import CarpetCleaningCategoryPageClient from "./CarpetCleaningCategoryPageClient";

export const metadata: Metadata = {
  title: "Professional Carpet Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Expert carpet cleaning in North Vancouver with eco-friendly products, 7-day availability, and fast turnaround times. Free estimates. Call (604) 671-6252.",
};

export default function CarpetCleaningNorthVancouverPage() {
  return <CarpetCleaningCategoryPageClient />;
}
