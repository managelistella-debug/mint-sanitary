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
  "/commercial-cleaning",
  "/commercial-cleaning-north-vancouver",
  "/commercial-cleaning-north-vancouver/church-cleaning",
  "/commercial-cleaning-north-vancouver/commercial-kitchen-cleaning",
  "/commercial-cleaning-north-vancouver/gym-cleaning",
  "/commercial-cleaning-north-vancouver/office-cleaning",
  "/commercial-cleaning-north-vancouver/school-cleaning",
  "/commercial-cleaning-north-vancouver/strata-cleaning",
  "/carpet-cleaning-north-vancouver",
  "/carpet-cleaning-north-vancouver/area-rug-cleaning",
  "/carpet-cleaning-north-vancouver/carpet-stain-removal",
  "/carpet-cleaning-north-vancouver/carpet-steam-cleaning",
  "/carpet-cleaning-north-vancouver/drapes-curtains-cleaning",
  "/carpet-cleaning-north-vancouver/upholstery-cleaning",
  "/cleaning-services-north-vancouver",
  "/cleaning-services-north-vancouver/deep-cleaning",
  "/cleaning-services-north-vancouver/move-in-cleaning",
  "/cleaning-services-north-vancouver/move-out-cleaning",
  "/cleaning-services-north-vancouver/post-construction-cleaning",
  "/cleaning-services-north-vancouver/recurring-cleaning",
  "/cleaning-services-north-vancouver/standard-cleaning",
  "/cleaning-services-north-vancouver/vacation-rental-cleaning",
  "/contact",
  "/gallery",
  "/gutter-cleaning-north-vancouver",
  "/pressure-washing-north-vancouver",
  "/pressure-washing-north-vancouver/deck-patio-cleaning",
  "/pressure-washing-north-vancouver/driveway-pressure-washing",
  "/pressure-washing-north-vancouver/fence-washing",
  "/pressure-washing-north-vancouver/house-washing",
  "/privacy-policy",
  "/rates",
  "/residential-cleaning",
  "/service-areas",
  "/strata-cleaning",
  "/terms-of-service",
  "/window-cleaning-north-vancouver",
  "/window-cleaning-north-vancouver/commercial-window-cleaning",
  "/window-cleaning-north-vancouver/post-construction-window-cleaning",
  "/window-cleaning-north-vancouver/residential-window-cleaning",
  "/window-cleaning-north-vancouver/window-screen-cleaning",
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
