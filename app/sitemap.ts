import type { MetadataRoute } from "next";

const DEFAULT_SITE_URL = "https://mintsanitary.com";

function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.endsWith("/") ? raw.slice(0, -1) : raw;
}

// Public marketing routes listed explicitly for `/sitemap.xml`.
const PUBLIC_PATHS: string[] = [
  "/",
  "/about",
  "/north-vancouver/commercial-cleaning",
  "/north-vancouver/church-cleaning",
  "/north-vancouver/commercial-kitchen-cleaning",
  "/north-vancouver/gym-cleaning",
  "/north-vancouver/office-cleaning",
  "/north-vancouver/school-cleaning",
  "/north-vancouver/strata-cleaning",
  "/north-vancouver/carpet-cleaning",
  "/north-vancouver/area-rug-cleaning",
  "/north-vancouver/carpet-stain-removal",
  "/north-vancouver/carpet-steam-cleaning",
  "/north-vancouver/drapes-curtains-cleaning",
  "/north-vancouver/upholstery-cleaning",
  "/north-vancouver/house-cleaning",
  "/north-vancouver/deep-cleaning",
  "/north-vancouver/move-in-cleaning",
  "/north-vancouver/move-out-cleaning",
  "/north-vancouver/post-construction-cleaning",
  "/north-vancouver/recurring-cleaning",
  "/north-vancouver/standard-cleaning",
  "/north-vancouver/vacation-rental-cleaning",
  "/contact",
  "/gallery",
  "/north-vancouver/gutter-cleaning",
  "/north-vancouver/pressure-washing",
  "/north-vancouver/deck-patio-cleaning",
  "/north-vancouver/driveway-pressure-washing",
  "/north-vancouver/fence-washing",
  "/north-vancouver/house-washing",
  "/privacy-policy",
  "/rates",
  "/service-areas",
  "/terms-of-service",
  "/north-vancouver/window-cleaning",
  "/north-vancouver/commercial-window-cleaning",
  "/north-vancouver/post-construction-window-cleaning",
  "/north-vancouver/residential-window-cleaning",
  "/north-vancouver/window-screen-cleaning",
  "/blog",
  "/blog/seven-ways-to-get-your-home-ready-for-spring",
  "/blog/how-to-choose-a-house-cleaning-service-north-vancouver",
  "/blog/move-out-cleaning-north-vancouver",
  "/blog/carpet-cleaning-north-vancouver-guide",
  "/blog/office-cleaning-north-vancouver",
  "/blog/pressure-washing-north-vancouver-guide",
  "/blog/apartment-cleaning-north-vancouver",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  return PUBLIC_PATHS.map((path) => {
    const isHome = path === "/";
    const isLegal =
      path === "/privacy-policy" || path === "/terms-of-service";
    const url = `${baseUrl}${path === "/" ? "/" : path}`;

    return {
      url,
      lastModified: now,
      changeFrequency: isLegal ? "yearly" : "weekly",
      priority: isHome ? 1 : isLegal ? 0.3 : 0.8,
    } satisfies MetadataRoute.Sitemap[number];
  });
}
