import AccordionWithImage from "@/components/AccordionWithImage";
import type { WhyChooseSection as Section } from "@/lib/cms/types";
import { imageUrl } from "@/lib/cms/sanity";

/** Reference: /services/house-cleaning "Why Choose Mint Sanitary". */
export default function WhyChooseSection({ section }: { section: Section }) {
  const img = imageUrl(section.image);
  if (!img) return null; // AccordionWithImage requires an image

  return (
    <div id={section.anchorId}>
      <AccordionWithImage
        heading={section.heading || "Why Choose Mint Sanitary"}
        intro={section.intro}
        image={img}
        imageAlt={section.heading || "Mint Sanitary team at work"}
        items={section.items.map((i) => ({ title: i.title, body: i.body }))}
        ctaHref={section.ctaHref}
        ctaLabel={section.ctaLabel}
        hideAccent
      />
    </div>
  );
}
