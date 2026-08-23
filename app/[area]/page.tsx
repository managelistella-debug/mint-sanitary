import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAreaBySlug, listPublishedAreaSlugs, getSiteGlobals } from "@/lib/cms/queries";
import { RESERVED_AREA_SLUGS } from "@/lib/cms/reservedSlugs";
import { imageUrl } from "@/lib/cms/sanity";
import CmsPageShell from "@/components/cms/CmsPageShell";
import SectionStack from "@/components/cms/SectionStack";

// City page design hasn't been settled yet — this renders the same section
// stack as every other CMS page so a new Area is never blank, but nobody
// should assume the layout here is final.
export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await listPublishedAreaSlugs();
  return slugs.filter((s) => !RESERVED_AREA_SLUGS.has(s)).map((area) => ({ area }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  const page = await getAreaBySlug(area);
  if (!page) return {};
  return {
    title: page.metaTitle || `${page.title} | Mint Sanitary`,
    description: page.metaDescription,
    alternates: { canonical: `/${area}` },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  if (RESERVED_AREA_SLUGS.has(area)) notFound();

  const page = await getAreaBySlug(area);
  if (!page) notFound();

  const globals = await getSiteGlobals();

  return (
    <CmsPageShell
      title={page.heroHeading || page.title}
      heroIntro={page.heroIntro}
      heroImage={imageUrl(page.heroImage) ?? undefined}
      globals={globals}
    >
      <SectionStack
        sections={page.sections}
        globals={globals}
        serviceName={page.name}
        serviceSlug=""
      />
    </CmsPageShell>
  );
}
