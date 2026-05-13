import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cleaning Services North Vancouver | Mint Sanitary",
  description:
    "Professional cleaning services in North Vancouver. Residential, commercial, and industrial cleaning with eco-friendly products. Free estimates. Call 236-688-3248.",
};

export default function CleaningServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
