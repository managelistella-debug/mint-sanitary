import type { Metadata } from "next";
import PressureWashingCategoryPageClient from "./PressureWashingCategoryPageClient";

// TEMPORARY comparison copy of the pre-CMS page, kept at /north-vancouver/pressure-washing-original
// so the CMS version at /north-vancouver/pressure-washing can be reviewed side by side.
// noindex + no canonical so it never competes with the real page in search.
// Delete this whole folder once the CMS version is signed off.
export const metadata: Metadata = {
  title: "Pressure Washing in North Vancouver | Mint Sanitary",
  description:
    "Pressure washing and soft washing in North Vancouver: driveways, decks, house siding, and fences. Eco-friendly methods, free estimates, 7 days a week.",
  robots: { index: false, follow: false },
};

export default function PressureWashingNorthVancouverPage() {
  return <PressureWashingCategoryPageClient />;
}
