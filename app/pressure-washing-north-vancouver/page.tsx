import type { Metadata } from "next";
import PressureWashingCategoryPageClient from "./PressureWashingCategoryPageClient";

export const metadata: Metadata = {
  title: "Professional Pressure Washing in North Vancouver | Mint Sanitary",
  description:
    "Professional pressure washing and soft washing in North Vancouver, BC. Remove moss, algae & mold. Free estimates, eco-friendly methods, 7 days a week.",
};

export default function PressureWashingNorthVancouverPage() {
  return <PressureWashingCategoryPageClient />;
}
