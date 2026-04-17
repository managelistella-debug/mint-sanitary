import type { Metadata } from "next";
import WindowCleaningCategoryPageClient from "./WindowCleaningCategoryPageClient";

export const metadata: Metadata = {
  title: "Window Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional window cleaning in North Vancouver. Eco-friendly services, 7-day availability, 10% off first clean with MINT25. Free estimates.",
  alternates: {
    canonical: "/window-cleaning-north-vancouver/",
  },
};

export default function WindowCleaningNorthVancouverPage() {
  return <WindowCleaningCategoryPageClient />;
}
