import type { Metadata } from "next";
import GutterCleaningCategoryPageClient from "./GutterCleaningCategoryPageClient";

export const metadata: Metadata = {
  title: "Gutter Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Professional gutter cleaning in North Vancouver. Prevent water damage. Book online or call 236-688-3248. 10% off first clean with code MINT26.",
  alternates: {
    canonical: "/gutter-cleaning-north-vancouver/",
  },
};

export default function GutterCleaningNorthVancouverPage() {
  return <GutterCleaningCategoryPageClient />;
}
