import type { PageSection, SectionType } from "./types";

/**
 * The section registry — single source of truth for the admin UI's
 * "Add section" menu, the default order new pages are seeded in, and the
 * placeholder headline shown to editors.
 *
 * `name` is what the CMS calls the section. `exampleHeading` is what it might
 * look like on the page — editors override it per page via the heading field.
 */
export interface SectionDefinition {
  type: SectionType;
  /** CMS-facing name. */
  name: string;
  /** One line explaining what it renders and where to see it live. */
  description: string;
  /** Suggested on-page H2, shown as the heading field's placeholder. */
  exampleHeading: string;
  /** Can this type appear more than once on a page? */
  repeatable: boolean;
  /** Shape used when the editor adds a fresh one. */
  create: () => Omit<PageSection, "_key">;
}

export const SECTION_DEFINITIONS: SectionDefinition[] = [
  {
    type: "whatsIncluded",
    name: "What's Included",
    description:
      "Checklist cards on the left, the shared 'Every Mint Cleaning Includes' box sticky on the right.",
    exampleHeading: "What's Included in a House Cleaning",
    repeatable: false,
    create: () => ({ _type: "whatsIncluded", cards: [] }),
  },
  {
    type: "processChecklist",
    name: "Our Process & Checklist",
    description:
      "Scroll-driven numbered timeline on the left, sticky checklist on the right. Fill only one side and it centers instead.",
    exampleHeading: "Our Process",
    repeatable: false,
    create: () => ({
      _type: "processChecklist",
      steps: [],
      checklistItems: [],
    }),
  },
  {
    type: "serviceTiles",
    name: "Related Cleaning We Offer",
    description:
      "Image tiles picked from your Cleaning Types, plus any custom tiles you write by hand. Tiles without a link show no 'Learn More'.",
    exampleHeading: "Types of House Cleaning We Offer",
    repeatable: true,
    create: () => ({ _type: "serviceTiles", tiles: [], customTiles: [] }),
  },
  {
    type: "whyChoose",
    name: "Why Choose Mint Sanitary",
    description: "Photo on the left, expandable accordion points on the right.",
    exampleHeading: "Why Choose Mint Sanitary",
    repeatable: false,
    create: () => ({
      _type: "whyChoose",
      items: [],
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    }),
  },
  {
    type: "testimonials",
    name: "What Our Clients Say",
    description:
      "Google review cards. Pulls the shared review set from Site Settings — no per-page content needed.",
    exampleHeading: "What Our Clients Say",
    repeatable: false,
    create: () => ({ _type: "testimonials" }),
  },
  {
    type: "richText",
    name: "Rich Text",
    description:
      "Free-form centered section — headings, paragraphs, lists, and full-width images anywhere you want them.",
    exampleHeading: "Post-Construction Window Cleaning",
    repeatable: true,
    create: () => ({ _type: "richText", body: [] }),
  },
  {
    type: "schedules",
    name: "Cleaning Schedules",
    description: "Grid of sample schedule options, three across.",
    exampleHeading: "Flexible Commercial Cleaning Schedules",
    repeatable: false,
    create: () => ({ _type: "schedules", items: [] }),
  },
  {
    type: "pricing",
    name: "Sample Pricing",
    description:
      "Pricing tiers three across with a price range each, plus centered notes underneath.",
    exampleHeading: "Post-Construction Cleaning Pricing",
    repeatable: false,
    create: () => ({ _type: "pricing", tiers: [], notes: [] }),
  },
  {
    type: "faq",
    name: "Frequently Asked Questions",
    description:
      "Accordion of Q&As. Also emits FAQ schema markup for search engines.",
    exampleHeading: "Frequently Asked Questions",
    repeatable: false,
    create: () => ({ _type: "faq", items: [] }),
  },
  {
    type: "areas",
    name: "Service Areas",
    description:
      "Pill links to this service in each city you pick. Cities without a live page render dimmed and unclickable. Leave the heading blank to auto-generate it from the page's service name.",
    exampleHeading: "House and Apartment Cleaning Services Across Greater Vancouver",
    repeatable: false,
    create: () => ({ _type: "areas", areas: [] }),
  },
  {
    type: "finalCta",
    name: "Final CTA",
    description: "Closing call to action with estimate and phone buttons.",
    exampleHeading: "Ready to Book Your Cleaning?",
    repeatable: false,
    create: () => ({
      _type: "finalCta",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/contact",
    }),
  },
  {
    type: "gallery",
    name: "Photo Gallery",
    description: "Grid of standalone project photos, no captions.",
    exampleHeading: "See the Difference",
    repeatable: true,
    create: () => ({ _type: "gallery", images: [] }),
  },
  {
    type: "neighborhoods",
    name: "Neighborhoods",
    description: "Bubbles listing the neighborhoods inside this area. Not clickable yet.",
    exampleHeading: "Neighborhoods We Serve in North Vancouver",
    repeatable: false,
    create: () => ({ _type: "neighborhoods", neighborhoods: [] }),
  },
  {
    type: "map",
    name: "Map",
    description: "A single, larger service-area map image with an optional button.",
    exampleHeading: "",
    repeatable: false,
    create: () => ({ _type: "map" }),
  },
];

/** Canonical order used to seed new pages and to sort the add-section menu. */
export const DEFAULT_SECTION_ORDER: SectionType[] = SECTION_DEFINITIONS.map(
  (d) => d.type
);

export function getSectionDefinition(type: SectionType): SectionDefinition | undefined {
  return SECTION_DEFINITIONS.find((d) => d.type === type);
}

export function sectionDisplayName(type: SectionType): string {
  return getSectionDefinition(type)?.name ?? type;
}

/**
 * True when a section has no renderable content and should be omitted from
 * the page entirely. Mirrors the rule "if that section is blank, it just
 * won't appear on the frontend."
 */
export function isSectionEmpty(section: PageSection): boolean {
  switch (section._type) {
    case "whatsIncluded":
      return (
        section.cards.every((c) => !c.title?.trim() && c.items.length === 0) &&
        !section.exclusionsBody?.trim()
      );
    case "processChecklist":
      return section.steps.length === 0 && section.checklistItems.length === 0;
    case "serviceTiles":
      return section.tiles.length === 0 && (section.customTiles?.length ?? 0) === 0;
    case "whyChoose":
      return section.items.length === 0;
    case "testimonials":
      // Content comes from globals, so presence alone is enough.
      return false;
    case "richText":
      return section.body.length === 0;
    case "schedules":
      return section.items.length === 0;
    case "pricing":
      return section.tiers.length === 0 && (section.notes?.length ?? 0) === 0;
    case "faq":
      return section.items.length === 0;
    case "areas":
      return section.areas.length === 0;
    case "finalCta":
      return !section.heading?.trim() && !section.body?.trim();
    case "gallery":
      return section.images.length === 0;
    case "neighborhoods":
      return section.neighborhoods.length === 0;
    case "map":
      return !section.image;
    default:
      return true;
  }
}
