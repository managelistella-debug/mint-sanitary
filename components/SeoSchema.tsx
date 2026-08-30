const SITE_URL = "https://www.mintsanitary.com";

interface FaqItem {
  question: string;
  answer: string;
}

interface BreadcrumbItem {
  name: string;
  /** Path relative to site root, e.g. "/north-vancouver/carpet-cleaning/" */
  path: string;
}

function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

/** FAQPage structured data — renders nothing if there are no FAQ items. */
export function FaqSchema({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />;
}

/** BreadcrumbList structured data. Always starts from Home. */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />;
}

/**
 * Service structured data — tells search engines exactly what service is
 * offered where, distinct from the sitewide LocalBusiness block in
 * Footer.tsx (which describes the business itself, not a specific service).
 * `provider` intentionally repeats just enough LocalBusiness identity to be
 * self-contained per Google's guidance, rather than relying on cross-page
 * entity resolution.
 */
export function ServiceSchema({
  serviceType,
  description,
  areaServed,
  path,
}: {
  /** e.g. "Carpet Cleaning" */
  serviceType: string;
  description?: string;
  /** City names, e.g. ["North Vancouver"] or all four service cities. */
  areaServed: string[];
  /** Path relative to site root, e.g. "/services/carpet-cleaning" */
  path: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    ...(description ? { description } : {}),
    provider: {
      "@type": "LocalBusiness",
      name: "Mint Sanitary",
      telephone: "+12366883248",
      url: `${SITE_URL}/`,
    },
    areaServed: areaServed.map((name) => ({ "@type": "City", name })),
    url: `${SITE_URL}${path}`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />;
}
