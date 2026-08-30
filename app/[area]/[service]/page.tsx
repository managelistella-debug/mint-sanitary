import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAreaServiceBySlugs,
  listPublishedAreaServiceParams,
  getSiteGlobals,
} from "@/lib/cms/queries";
import {
  RESERVED_AREA_SLUGS,
  AREAS_WITH_BLOCKING_STATIC_SUBTREE,
} from "@/lib/cms/reservedSlugs";
import { imageUrl } from "@/lib/cms/sanity";
import CmsPageShell from "@/components/cms/CmsPageShell";
import SectionStack from "@/components/cms/SectionStack";
import { ServiceSchema } from "@/components/SeoSchema";

const SITE_URL = "https://www.mintsanitary.com";

export const revalidate = 300;

export async function generateStaticParams() {
  const params = await listPublishedAreaServiceParams();
  return params
    .filter((p) => !AREAS_WITH_BLOCKING_STATIC_SUBTREE.has(p.area))
    .map(({ area, service }) => ({ area, service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; service: string }>;
}): Promise<Metadata> {
  const { area, service } = await params;
  const page = await getAreaServiceBySlugs(area, service);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | Mint Sanitary`,
    description: page.metaDescription,
    alternates: { canonical: `/${area}/${service}` },
  };
}

export default async function AreaServicePage({
  params,
}: {
  params: Promise<{ area: string; service: string }>;
}) {
  const { area, service } = await params;

  // North Vancouver's static folder still owns every path under it — see
  // reservedSlugs.ts. This 404s cleanly rather than rendering something
  // unreachable in production.
  if (RESERVED_AREA_SLUGS.has(area) && AREAS_WITH_BLOCKING_STATIC_SUBTREE.has(area)) {
    notFound();
  }

  const page = await getAreaServiceBySlugs(area, service);
  if (!page) notFound();

  const globals = await getSiteGlobals();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: page.area.name,
        item: `${SITE_URL}/${area}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${SITE_URL}/${area}/${service}`,
      },
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
      <ServiceSchema
        serviceType={page.cleaningType.name}
        description={page.metaDescription}
        areaServed={[page.area.name]}
        path={`/${area}/${service}`}
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
          serviceName={page.cleaningType.name}
          serviceSlug={page.cleaningType.slug}
        />
      </CmsPageShell>
    </>
  );
}
