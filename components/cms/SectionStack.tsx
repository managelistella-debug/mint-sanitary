import type { PageSection, SiteGlobals } from "@/lib/cms/types";
import { isSectionEmpty } from "@/lib/cms/sections";
import { resolveLiveAreaLinks } from "@/lib/cms/queries";

import WhatsIncludedSection from "./sections/WhatsIncludedSection";
import ProcessChecklistSection from "./sections/ProcessChecklistSection";
import ServiceTilesSection from "./sections/ServiceTilesSection";
import WhyChooseSection from "./sections/WhyChooseSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import RichTextSection from "./sections/RichTextSection";
import SchedulesSection from "./sections/SchedulesSection";
import PricingSection from "./sections/PricingSection";
import FaqSection from "./sections/FaqSection";
import AreasSection from "./sections/AreasSection";
import FinalCtaSection from "./sections/FinalCtaSection";
import GallerySection from "./sections/GallerySection";
import NeighborhoodsSection from "./sections/NeighborhoodsSection";
import MapSection from "./sections/MapSection";

/**
 * Renders a page's section stack in order, silently skipping anything empty.
 * The `areas` section needs one extra query (which cities have a live page
 * for this service) — resolved here, once, right before render.
 */
export default async function SectionStack({
  sections,
  globals,
  serviceName,
  serviceSlug,
}: {
  sections: PageSection[];
  globals: SiteGlobals | null;
  /** Display name + slug of the service this page is about, for the Areas section. */
  serviceName: string;
  serviceSlug: string;
}) {
  const visible = sections.filter((s) => !isSectionEmpty(s));

  return (
    <>
      {await Promise.all(
        visible.map(async (section) => {
          switch (section._type) {
            case "whatsIncluded":
              return (
                <WhatsIncludedSection key={section._key} section={section} globals={globals} />
              );
            case "processChecklist":
              return <ProcessChecklistSection key={section._key} section={section} />;
            case "serviceTiles":
              return <ServiceTilesSection key={section._key} section={section} />;
            case "whyChoose":
              return <WhyChooseSection key={section._key} section={section} />;
            case "testimonials":
              return (
                <TestimonialsSection key={section._key} section={section} globals={globals} />
              );
            case "richText":
              return <RichTextSection key={section._key} section={section} />;
            case "schedules":
              return <SchedulesSection key={section._key} section={section} />;
            case "pricing":
              return <PricingSection key={section._key} section={section} />;
            case "faq":
              return <FaqSection key={section._key} section={section} />;
            case "areas": {
              const areaIds = (section.areas as unknown as Array<{ _id: string }>).map(
                (a) => a._id
              );
              const liveAreaIds = await resolveLiveAreaLinks(areaIds, serviceSlug);
              return (
                <AreasSection
                  key={section._key}
                  section={section}
                  serviceName={serviceName}
                  serviceSlug={serviceSlug}
                  liveAreaIds={liveAreaIds}
                />
              );
            }
            case "finalCta":
              return <FinalCtaSection key={section._key} section={section} globals={globals} />;
            case "gallery":
              return <GallerySection key={section._key} section={section} />;
            case "neighborhoods":
              return <NeighborhoodsSection key={section._key} section={section} />;
            case "map":
              return <MapSection key={section._key} section={section} />;
            default:
              return null;
          }
        })
      )}
    </>
  );
}
