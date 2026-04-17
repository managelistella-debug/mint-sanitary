import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Services North Vancouver | Mint Sanitary",
  description:
    "Professional cleaning services in North Vancouver. Residential, commercial, and industrial cleaning with eco-friendly products. Free estimates. Call (604) 671-6252.",
};

export default function CleaningServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
