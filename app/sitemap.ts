import type { MetadataRoute } from "next";
import {
  listPublishedCleaningTypeSlugs,
  listPublishedAreaSlugs,
  listPublishedAreaServiceParams,
} from "@/lib/cms/queries";

const DEFAULT_SITE_URL = "https://www.mintsanitary.com";

function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

// Marketing/legal/blog routes that live outside the CMS — listed explicitly
// since there's no collection to query them from.
const STATIC_PATHS: string[] = [
  "/",
  "/about",
  "/contact",
  "/gallery",
  "/privacy-policy",
  "/rates",
  "/service-areas",
  "/terms-of-service",
  "/blog",
  "/blog/seven-ways-to-get-your-home-ready-for-spring",
  "/blog/how-to-choose-a-house-cleaning-service-north-vancouver",
  "/blog/move-out-cleaning-north-vancouver",
  "/blog/carpet-cleaning-north-vancouver-guide",
  "/blog/office-cleaning-north-vancouver",
  "/blog/pressure-washing-north-vancouver-guide",
  "/blog/apartment-cleaning-north-vancouver",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const [serviceSlugs, areaSlugs, areaServiceParams] = await Promise.all([
    listPublishedCleaningTypeSlugs(),
    listPublishedAreaSlugs(),
    listPublishedAreaServiceParams(),
  ]);

  const dynamicPaths = [
    ...areaSlugs.map((slug) => `/${slug}`),
    ...serviceSlugs.map((slug) => `/services/${slug}`),
    ...areaServiceParams.map(({ area, service }) => `/${area}/${service}`),
  ];

  const paths = [...new Set([...STATIC_PATHS, ...dynamicPaths])];

  return paths.map((path) => {
    const isHome = path === "/";
    const isLegal = path === "/privacy-policy" || path === "/terms-of-service";
    const url = `${baseUrl}${path === "/" ? "/" : path}`;

    return {
      url,
      lastModified: now,
      changeFrequency: isLegal ? "yearly" : "weekly",
      priority: isHome ? 1 : isLegal ? 0.3 : 0.8,
    } satisfies MetadataRoute.Sitemap[number];
  });
}
