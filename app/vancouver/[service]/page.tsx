import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAreaServiceBySlugs,
  listPublishedAreaServiceParams,
  getSiteGlobals,
} from "@/lib/cms/queries";
import { imageUrl } from "@/lib/cms/sanity";
import CmsPageShell from "@/components/cms/CmsPageShell";
import SectionStack from "@/components/cms/SectionStack";
import { ServiceSchema } from "@/components/SeoSchema";

const SITE_URL = "https://www.mintsanitary.com";
const AREA = "vancouver";

/**
 * Dedicated sibling to app/vancouver/page.tsx (the area landing page,
 * untouched, still fully static). Next.js resolves "vancouver" as a literal
 * segment and then descends only inside this folder — it never falls back
 * out to the top-level /[area]/[service] catch-all — so Vancouver needs its
 * own [service] route rather than reusing that one, exactly like
 * app/north-vancouver/[service]/page.tsx.
 */
export const revalidate = 300;

export async function generateStaticParams() {
  const params = await listPublishedAreaServiceParams();
  return params.filter((p) => p.area === AREA).map(({ service }) => ({ service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const page = await getAreaServiceBySlugs(AREA, service);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | Mint Sanitary`,
    description: page.metaDescription,
    alternates: { canonical: `/${AREA}/${service}` },
  };
}

export default async function VancouverServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  const page = await getAreaServiceBySlugs(AREA, service);
  if (!page) notFound();

  const globals = await getSiteGlobals();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: page.area.name, item: `${SITE_URL}/${AREA}` },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${SITE_URL}/${AREA}/${service}`,
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
        path={`/${AREA}/${service}`}
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
