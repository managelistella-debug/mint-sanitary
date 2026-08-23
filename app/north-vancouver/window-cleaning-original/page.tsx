import type { Metadata } from "next";
import WindowCleaningCategoryPageClient from "./WindowCleaningCategoryPageClient";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/window-cleaning-original
// so the CMS version at /north-vancouver/window-cleaning can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Window Cleaning in North Vancouver | Mint Sanitary",
  description:
    "Residential, commercial & screen window cleaning in North Vancouver. Eco-friendly, insured, 7-day availability. 10% off first clean with MINT26.",
  robots: { index: false, follow: false },
};

export default function WindowCleaningNorthVancouverPage() {
  return <WindowCleaningCategoryPageClient />;
}
