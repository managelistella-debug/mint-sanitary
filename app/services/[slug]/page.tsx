import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCleaningTypeBySlug,
  listPublishedCleaningTypeSlugs,
  getSiteGlobals,
} from "@/lib/cms/queries";
import { RESERVED_SERVICE_SLUGS } from "@/lib/cms/reservedSlugs";
import { imageUrl } from "@/lib/cms/sanity";
import CmsPageShell from "@/components/cms/CmsPageShell";
import SectionStack from "@/components/cms/SectionStack";

const SITE_URL = "https://www.mintsanitary.com";

// Revalidate periodically so CMS edits show up without a redeploy.
export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await listPublishedCleaningTypeSlugs();
  return slugs.filter((s) => !RESERVED_SERVICE_SLUGS.has(s)).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await getCleaningTypeBySlug(slug);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | Mint Sanitary`,
    description: page.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function CleaningTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // A matching static folder always wins at the router level; this is just
  // a defensive backstop in case that ever changes.
  if (RESERVED_SERVICE_SLUGS.has(slug)) notFound();

  const page = await getCleaningTypeBySlug(slug);
  if (!page) notFound();

  const globals = await getSiteGlobals();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.title, item: `${SITE_URL}/services/${slug}` },
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
        <SectionStack
          sections={page.sections}
          globals={globals}
          serviceName={page.name || page.title}
          serviceSlug={page.slug}
        />
      </CmsPageShell>
    </>
  );
}
