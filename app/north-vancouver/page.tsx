import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAreaBySlug, getSiteGlobals } from "@/lib/cms/queries";
import { imageUrl } from "@/lib/cms/sanity";
import CmsPageShell from "@/components/cms/CmsPageShell";
import SectionStack from "@/components/cms/SectionStack";

const SITE_URL = "https://www.mintsanitary.com";
const AREA = "north-vancouver";

/**
 * Dedicated sibling to app/[area]/page.tsx (the generic CMS area route, used
 * for any newly-added city). "north-vancouver" is a literal folder that also
 * owns app/north-vancouver/[service]/ and 19 *-original comparison folders,
 * so — same reasoning as the [service] route right next to this file — Next
 * commits to this folder for the bare /north-vancouver path too and never
 * falls back to the generic [area] route. RESERVED_AREA_SLUGS already 404s
 * "north-vancouver" there for exactly this reason; this file is what
 * actually serves the URL.
 */
export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getAreaBySlug(AREA);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | Mint Sanitary`,
    description: page.metaDescription,
    alternates: { canonical: `/${AREA}` },
  };
}

export default async function NorthVancouverPage() {
  const page = await getAreaBySlug(AREA);
  if (!page) notFound();

  const globals = await getSiteGlobals();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.name, item: `${SITE_URL}/${AREA}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <CmsPageShell
        title={page.heroHeading || page.title}
        heroIntro={page.heroIntro}
        heroImage={imageUrl(page.heroImage) ?? undefined}
        globals={globals}
      >
        <SectionStack sections={page.sections} globals={globals} serviceName={page.name} serviceSlug="" />
      </CmsPageShell>
    </>
  );
}
