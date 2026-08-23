/**
 * Mint Sanitary content model.
 *
 * Sanity is used purely as a headless store — there is no Sanity Studio.
 * Every write goes through the authenticated /api/admin/* routes, which hold
 * the only copy of the write token. These types are the contract shared by
 * the admin UI, the API layer, and the public page renderers.
 *
 * Three collections:
 *   area         → /[city]                    e.g. /north-vancouver
 *   cleaningType → /services/[slug]           e.g. /services/house-cleaning
 *   areaService  → /[city]/[service]          e.g. /north-vancouver/house-cleaning
 *
 * A cleaningType doubles as the source for service tiles. One with
 * `hasOwnPage: false` still renders as a tile, just without a "Learn More"
 * link — that's how Standard Cleaning and Recurring Cleaning behave today.
 */

/* ─── Primitives ──────────────────────────────────────────────── */

export interface SanityRef {
  _type: "reference";
  _ref: string;
}

export interface CmsImage {
  _type: "image";
  asset: SanityRef;
  alt?: string;
  /** Resolved at query time for rendering; not stored. */
  url?: string;
}

/** Portable Text block — paragraphs, headings, lists, links, inline images. */
export interface PortableTextBlock {
  _type: "block" | "image";
  _key: string;
  [key: string]: unknown;
}

export type PublishState = "draft" | "published";

/* ─── Sections ────────────────────────────────────────────────── */

/**
 * Every section carries `_type` + `_key`. `heading` is always optional and
 * always overridable — the CMS shows the section's canonical name, the editor
 * types whatever headline they actually want on the page.
 *
 * An omitted/empty section renders nothing at all on the frontend.
 */
export interface SectionBase {
  _key: string;
  /** Editor-facing override for the on-page H2. Falls back to a per-type default. */
  heading?: string;
  /** Short paragraph under the heading. */
  intro?: string;
  /**
   * Optional HTML id on the section's wrapping element, for mid-page jump
   * links (e.g. "area-rug-cleaning"). Needed when migrating pages that
   * merged several sub-services onto one URL via #anchors that existing
   * redirects or cross-links depend on — leave unset otherwise.
   */
  anchorId?: string;
}

/** Checklist of what the service covers. Reference: /services/house-cleaning */
export interface WhatsIncludedSection extends SectionBase {
  _type: "whatsIncluded";
  /**
   * A card can carry a prose `body`, a bulleted `items` list, or both —
   * source pages use both shapes (house-cleaning is bulleted, strata's
   * common-area cards are paragraphs).
   */
  cards: Array<{ _key: string; title: string; body?: string; items: string[] }>;
  /** Optional "What's Not Included" callout below the cards. */
  exclusionsTitle?: string;
  exclusionsBody?: string;
}

/**
 * Scroll-driven process timeline + sticky checklist.
 * Reference: /services/post-construction-cleaning
 * Both present → two columns. One present → that one centered. Neither → hidden.
 */
export interface ProcessChecklistSection extends SectionBase {
  _type: "processChecklist";
  steps: Array<{ _key: string; title: string; body: string }>;
  checklistHeading?: string;
  checklistItems: string[];
}

/**
 * Image tiles picked from the cleaningType collection. Reusable — the same
 * type backs both "Types of Cleaning We Offer" and "Related Services".
 * A referenced type with no page of its own renders without a Learn More link.
 */
export interface ServiceTilesSection extends SectionBase {
  _type: "serviceTiles";
  tiles: SanityRef[];
  /**
   * Manually-authored tiles, for sub-services that have no cleaningType doc of
   * their own — the carpet/window/pressure-washing pages each merge several
   * sub-services onto one URL, so their tiles point at in-page #anchors rather
   * than a /services/* page. Rendered in the same grid, after `tiles`.
   */
  customTiles?: Array<{
    _key: string;
    title: string;
    description?: string;
    image?: CmsImage;
    /** Omit for a non-clickable tile (no "Learn More" link), matching hasOwnPage: false. */
    href?: string;
  }>;
}

/** Image left, accordion right. Reference: /services/house-cleaning */
export interface WhyChooseSection extends SectionBase {
  _type: "whyChoose";
  image?: CmsImage;
  items: Array<{ _key: string; title: string; body: string }>;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Google reviews. Pulls the global review set unless overridden here. */
export interface TestimonialsSection extends SectionBase {
  _type: "testimonials";
}

/**
 * Free-form rich text with inline images, centered single column.
 * Reference: the "Post-Construction Window Cleaning" section.
 */
export interface RichTextSection extends SectionBase {
  _type: "richText";
  body: PortableTextBlock[];
}

/** Sample schedules. Reference: /services/commercial-cleaning */
export interface SchedulesSection extends SectionBase {
  _type: "schedules";
  items: Array<{ _key: string; title: string; body: string }>;
}

/** Sample pricing tiers. Reference: /services/post-construction-cleaning */
export interface PricingSection extends SectionBase {
  _type: "pricing";
  tiers: Array<{ _key: string; title: string; range: string; body: string }>;
  /** Centered paragraphs under the tier grid. */
  notes?: string[];
}

export interface FaqSection extends SectionBase {
  _type: "faq";
  items: Array<{ _key: string; question: string; answer: string }>;
}

/**
 * Service-area bubbles. The heading auto-substitutes the page's cleaning type
 * name ("{Service} Services Across Greater Vancouver") unless overridden.
 * An area links out only when that area+service page exists and is published;
 * otherwise it renders as a dimmed, non-clickable bubble.
 */
export interface AreasSection extends SectionBase {
  _type: "areas";
  areas: SanityRef[];
}

export interface FinalCtaSection extends SectionBase {
  _type: "finalCta";
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

/** Grid of standalone project photos, no captions. Reference: North Vancouver category pages. */
export interface GallerySection extends SectionBase {
  _type: "gallery";
  images: Array<{ _key: string; image: CmsImage }>;
}

/**
 * Bubbles listing the neighbourhood docs inside one area — e.g. Lower
 * Lonsdale, Lynn Valley within North Vancouver. Reference: /north-vancouver
 * "Neighborhoods We Serve". Neighbourhoods don't have live pages yet, so
 * unlike the `areas` section these always render as plain, non-clickable
 * bubbles regardless of `hasOwnPage` — that flag is reserved for when
 * neighbourhood pages actually exist.
 */
export interface NeighborhoodsSection extends SectionBase {
  _type: "neighborhoods";
  neighborhoods: SanityRef[];
}

/**
 * A single, larger-format map image — its own section rather than an image
 * inside Rich Text, so it can be sized to match the rest of the page instead
 * of the narrow single-column Rich Text width. Reference: /north-vancouver
 * service-area map.
 */
export interface MapSection extends SectionBase {
  _type: "map";
  image?: CmsImage;
  ctaLabel?: string;
  ctaHref?: string;
}

export type PageSection =
  | WhatsIncludedSection
  | ProcessChecklistSection
  | ServiceTilesSection
  | WhyChooseSection
  | TestimonialsSection
  | RichTextSection
  | SchedulesSection
  | PricingSection
  | FaqSection
  | AreasSection
  | FinalCtaSection
  | GallerySection
  | NeighborhoodsSection
  | MapSection;

export type SectionType = PageSection["_type"];

/* ─── Shared page shape ───────────────────────────────────────── */

/** Fields every public page carries, regardless of collection. */
export interface PageBase {
  _id: string;
  _type: string;
  title: string;
  slug: string;
  /** H1. Falls back to `title`. */
  heroHeading?: string;
  heroIntro?: string;
  heroImage?: CmsImage;
  metaTitle?: string;
  metaDescription?: string;
  sections: PageSection[];
  published: boolean;
  _updatedAt?: string;
}

/* ─── Collections ─────────────────────────────────────────────── */

/** A city. Renders /[slug], and is selectable in the areas section. */
export interface Area extends PageBase {
  _type: "area";
  /** Display name, e.g. "North Vancouver". */
  name: string;
}

/**
 * A cleaning service. Renders /services/[slug] when `hasOwnPage` is true,
 * and is always available as a service tile.
 */
export interface CleaningType extends PageBase {
  _type: "cleaningType";
  name: string;
  /** Tile copy — short, distinct from heroIntro. */
  tileDescription?: string;
  tileImage?: CmsImage;
  /** False → tile only, no page, no Learn More link. */
  hasOwnPage: boolean;
}

/** A service in a city. Renders /[area]/[cleaningType]. */
export interface AreaService extends PageBase {
  _type: "areaService";
  area: SanityRef;
  cleaningType: SanityRef;
}

/**
 * A sub-area within a city — e.g. Lower Lonsdale within North Vancouver.
 * Today these are tile/bubble-only (`hasOwnPage: false`), listed by an
 * area's `neighborhoods` section; the full PageBase shape (hero, sections)
 * is here so a neighbourhood can grow into its own page later without a
 * schema change.
 */
export interface Neighborhood extends PageBase {
  _type: "neighborhood";
  area: SanityRef;
  name: string;
  tileDescription?: string;
  tileImage?: CmsImage;
  /** False → bubble only, no page. Not yet wired to a route either way. */
  hasOwnPage: boolean;
}

export type CmsDocument = Area | CleaningType | AreaService | Neighborhood;
export type CollectionName = "area" | "cleaningType" | "areaService" | "neighborhood";

/* ─── Globals (shared across every page) ──────────────────────── */

/**
 * Content that is identical site-wide. Kept as a singleton so it's edited
 * once rather than repeated on 40+ pages.
 */
export interface SiteGlobals {
  _id: "siteGlobals";
  _type: "siteGlobals";
  /** Right-hand box in the What's Included section. */
  everyCleanHeading: string;
  everyCleanItems: Array<{ _key: string; icon: string; text: string }>;
  /** "Trusted by Local Organizations" logo strip. */
  clientsHeading: string;
  clientLogos: Array<{ _key: string; name: string; image: CmsImage }>;
  /** Google reviews used by every testimonials section. */
  reviewsHeading: string;
  reviewsRating: string;
  reviewsCount: string;
  reviews: Array<{
    _key: string;
    name: string;
    rating: number;
    date: string;
    text: string;
  }>;
  phone: string;
  email: string;
  promoCode?: string;
}
