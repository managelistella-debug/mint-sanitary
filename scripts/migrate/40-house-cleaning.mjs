import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  para,
  paraWithLink,
  customTile,
} from "./lib.mjs";

/**
 * /services/house-cleaning — migrated from the hand-coded page now parked at
 * /services/house-cleaning-original. This page was the original design
 * template every CMS section component was built to match (several
 * components' code comments still say "Reference: /services/house-cleaning"),
 * but per the client it should now be a normal CMS-driven page like the other
 * 34 — the section components stay as the shared template either way.
 *
 * All copy verbatim. Placement decisions:
 *  - "What's Included" cards + "What's Not Included" map directly onto
 *    whatsIncluded's own fields. exclusionsBody is a plain string and can't
 *    carry the "Deep Cleaning" link that sat inside that sentence, so the
 *    body keeps the exact original wording as plain text, and a short
 *    follow-up Rich Text paragraph repeats the same original clause —
 *    "Appliance interiors are part of our Deep Cleaning service." — as a
 *    real link, so nothing is silently flattened.
 *  - "Types of House Cleaning We Offer" is 7 tiles, but 2 (Standard,
 *    Recurring) have no href and 5 point at other services' pages. This
 *    page's tiles carry their OWN images/descriptions, distinct from each
 *    linked service's own established tile copy elsewhere on the site, so
 *    all 7 became serviceTiles' `customTiles` (verbatim images/copy/hrefs)
 *    rather than refs, which would have pulled in different generic copy.
 *  - "Why Choose Mint Sanitary" maps directly onto whyChoose.
 *  - Google Reviews render globally on every ServicePageLayoutV2 page
 *    regardless of page content (same convention used for every other
 *    ServicePageLayout-based migration), so a plain testimonials section is
 *    included even though this file has no explicit reviews block.
 *  - The closing "House and Apartment Cleaning Services Across Greater
 *    Vancouver" city-bubble row is exactly what the `areas` section type
 *    renders: North Vancouver (live link), West Vancouver and Vancouver
 *    (dimmed, no page). Burnaby was a 4th dimmed chip in the original with
 *    no Area doc anywhere on the site and no static page of its own — rather
 *    than invent a new public /burnaby route to hold it, it was dropped from
 *    this bubble row only; "Burnaby" already appears verbatim in this page's
 *    own hero copy, so the place name isn't lost.
 */

const checklistCards = [
  {
    title: "Living Areas",
    items: [
      "Dust all surfaces, shelves, and furniture",
      "Vacuum carpets and rugs, sweep and mop hard floors",
      "Wipe light switches, door handles, and baseboards",
      "Remove cobwebs",
      "Clean mirrors and glass surfaces",
      "Empty trash and replace liners",
    ],
  },
  {
    title: "Kitchen",
    items: [
      "Wipe and sanitize countertops and backsplash",
      "Clean the exterior of all appliances (fridge, oven, microwave, dishwasher)",
      "Scrub and sanitize the sink and faucet",
      "Wipe cabinet fronts and drawer handles",
      "Sweep and mop the floor",
      "Clean the stovetop and range hood exterior",
    ],
  },
  {
    title: "Bathrooms",
    items: [
      "Scrub and sanitize the toilet, including the base and behind it",
      "Clean and sanitize the sink, faucet, and countertop",
      "Scrub the tub and shower walls, door, and fixtures",
      "Clean mirrors",
      "Wipe cabinet fronts and towel bars",
      "Sweep and mop the floor",
    ],
  },
  {
    title: "Bedrooms",
    items: [
      "Dust all surfaces, nightstands, and dressers",
      "Vacuum carpets or sweep and mop hard floors",
      "Make beds and tuck linens (linen changes available on request)",
      "Wipe light switches and door handles",
      "Remove cobwebs",
    ],
  },
  {
    title: "General",
    items: [
      "Dust ceiling fan blades within reach",
      "Wipe window sills and ledges",
      "Vacuum stairs and hallways",
      "Spot-clean marks on walls",
      "Wipe railings and banisters",
    ],
  },
];

const cleaningTypes = [
  {
    title: "Standard Cleaning",
    image: "/standard-cleaning-kitchen-north-vancouver.jpg",
    description:
      "Our core service for regular upkeep, covering every room using the checklist above. Works as a one-time clean or the base for a recurring schedule.",
  },
  {
    title: "Recurring Cleaning",
    image: "/recurring-cleaning-kitchen-north-vancouver.jpg",
    description:
      "Weekly, biweekly, monthly, or custom visits. No contracts, and you can pause, adjust, or cancel your schedule anytime.",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    image: "/move-in-cleaning-north-vancouver-apartment.jpg",
    description:
      "A thorough clean for empty units, built for tenants, landlords, and homeowners closing out a lease or a sale.",
    href: "/services/move-in-move-out-cleaning",
  },
  {
    title: "Deep Cleaning",
    image: "/deep-cleaned-kitchen-north-vancouver.jpg",
    description:
      "A more intensive clean that reaches inside appliances, behind furniture, and into buildup a standard clean doesn't touch.",
    href: "/services/deep-cleaning",
  },
  {
    title: "Vacation Rental Cleaning",
    image: "/vacation-rental-cleaning-north-vancouver.jpg",
    description: "Turnover cleaning for Airbnb and short-term rental hosts.",
    href: "/services/vacation-rental-cleaning",
  },
  {
    title: "Drapes & Curtains Cleaning",
    image: "/drapes-curtains-cleaning-north-vancouver.webp",
    description: "On-site cleaning for drapes and curtains that collect dust and odors.",
    href: "/services/drapes-curtains-cleaning",
  },
  {
    title: "Upholstery Cleaning",
    image: "/upholstery-cleaning-north-vancouver-sofa.jpg",
    description: "Deep cleaning for sofas, chairs, and other upholstered furniture.",
    href: "/services/upholstery-cleaning",
  },
];

const whyChooseItems = [
  { title: "Eco-friendly products", body: "Plant-based, non-toxic, safe around kids and pets." },
  {
    title: "HEPA-filter vacuums",
    body: "Capture fine dust and allergens instead of pushing them back into the air.",
  },
  {
    title: "Vetted, insured staff",
    body: "Every cleaner is background-checked, bonded, and insured.",
  },
  { title: "7-day availability", body: "We schedule cleanings every day of the week." },
  { title: "Transparent pricing", body: "Free estimates with no hidden fees." },
  {
    title: "24-hour satisfaction guarantee",
    body: "If something's missed, tell us within 24 hours and we'll make it right.",
  },
  {
    title: "Consistent teams",
    body: "Where possible, we assign the same cleaner or team to your home.",
  },
];

const faqItems = [
  {
    question: "What's included in a standard house cleaning?",
    answer:
      "A standard clean covers living areas, kitchen, bathrooms, and bedrooms: dusting, vacuuming, mopping, sanitizing sinks and countertops, cleaning mirrors, emptying trash, and wiping down surfaces like light switches, door handles, and baseboards.",
  },
  {
    question: "How much does house cleaning cost?",
    answer:
      "Pricing depends on the size of your home. Standard cleaning starts around $220 for a 500 to 600 square foot property and increases with square footage, since most jobs are quoted by size rather than a flat rate. Visit our rates page for a real-time quote.",
  },
  {
    question: "Do you offer recurring cleaning plans?",
    answer:
      "Yes. Weekly, biweekly, monthly, or a custom schedule. No contracts, and you can pause, adjust, or cancel your plan anytime.",
  },
  {
    question: "Are your cleaning products safe for kids and pets?",
    answer: "Yes. We use eco-friendly, non-toxic, plant-based products throughout every clean.",
  },
  {
    question: "What's not included in a standard clean?",
    answer:
      "Inside ovens, refrigerators, and dishwashers, interior or exterior window washing, moving heavy furniture, deep carpet shampooing or stain treatment, garage or attic cleaning, and laundry or dishwashing. Several are available as add-ons or covered under our deep cleaning service.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Most clients aren't home during their scheduled clean and provide access instructions in advance. Our staff are background-checked, bonded, and insured.",
  },
  {
    question: "What's the difference between standard and deep cleaning?",
    answer:
      "Standard cleaning covers regular upkeep of visible surfaces. Deep cleaning goes further, reaching inside appliances and other areas that build up over time.",
  },
  {
    question: "Do you clean apartments and condos, not just houses?",
    answer:
      "Yes. We clean apartments, condos, and rental units in addition to detached houses, using the same checklist and standards.",
  },
  {
    question: "What areas do you serve?",
    answer: "We're based in North Vancouver and also serve West Vancouver, Vancouver, Burnaby, and surrounding areas.",
  },
  {
    question: "Is there a discount for new customers?",
    answer: "Yes. New customers get 10% off their first clean with code MINT26.",
  },
  {
    question: "What if I'm not happy with the clean?",
    answer: "We offer a 24-hour satisfaction guarantee. Let us know within 24 hours and we'll come back to fix it.",
  },
  {
    question: "How do I book a cleaning?",
    answer: "Request a free estimate on our rates page or contact us directly by phone or email.",
  },
];

console.log("→ /services/house-cleaning");

const cleaningTypeTiles = [];
for (const item of cleaningTypes) {
  cleaningTypeTiles.push(await customTile(item));
}

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in a House Cleaning",
    intro: "Our standard house and apartment cleaning covers every main living space in your home.",
    cards: checklistCards.map(({ title, items }) => ({ _key: key("card"), title, items })),
    exclusionsTitle: "What's Not Included",
    exclusionsBody:
      "A standard clean does not cover the inside of ovens, refrigerators, or dishwashers, interior or exterior window washing, moving heavy furniture, deep carpet shampooing or stain treatment, garage, attic, or storage area cleaning, or laundry and dishwashing. Most of these are available as add-ons, and appliance interiors are part of our Deep Cleaning service. Linen changes can also be added on request.",
  },
  {
    // The one link inside the exclusions paragraph above, since exclusionsBody
    // is plain text and can't carry a real link mark.
    _key: key("sec"),
    _type: "richText",
    body: [
      paraWithLink(
        "Appliance interiors are part of our ",
        "Deep Cleaning",
        "/services/deep-cleaning",
        " service."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Types of House Cleaning We Offer",
    intro:
      "We offer one-time cleaning, recurring service, and specialty cleaning for move-outs and deep cleans.",
    tiles: [],
    customTiles: cleaningTypeTiles,
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary",
    image: await uploadImage(
      "/house-cleaning-bedroom-north-vancouver.jpg",
      "Freshly cleaned bedroom in a North Vancouver home"
    ),
    items: whyChooseItems.map(({ title, body }) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "areas",
    heading: "House and Apartment Cleaning Services Across Greater Vancouver",
    intro: "Mint Sanitary is based in North Vancouver and cleans homes across Greater Vancouver.",
    areas: [refTo("area", "north-vancouver"), refTo("area", "west-vancouver"), refTo("area", "vancouver")],
  },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(({ question, answer }) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Ready to Book Your Cleaning?",
    body: "Get a free, transparent quote for your home on our rates page. You can also reach us directly at 236-688-3248 or hello@mintsanitary.com.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "house-cleaning", {
  title: "House & Apartment Cleaning Services | Mint Sanitary",
  name: "House Cleaning",
  // Verbatim from the tile grid other pages already use for this slug.
  tileDescription:
    "Our core service for regular upkeep, covering every room using a consistent checklist. Works as a one-time clean or the base for a recurring schedule.",
  tileImage: await uploadImage(
    "/professional-cleaning-services-north-vancouver.jpg",
    "House cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "House Cleaning Services in Greater Vancouver",
  heroIntro:
    "Mint Sanitary provides house and apartment cleaning for homeowners, renters, and property managers across Greater Vancouver. Whether you live in a downtown Vancouver condo, a Burnaby townhome, a West Vancouver house, or a North Vancouver rental, our team handles the cleaning so you don't have to. Every job uses eco-friendly, non-toxic products and a checklist built for consistency.",
  heroImage: await uploadImage(
    "/professional-cleaning-services-north-vancouver.jpg",
    "House cleaning in Greater Vancouver"
  ),
  metaTitle: "House & Apartment Cleaning Services | Mint Sanitary",
  metaDescription:
    "Professional house and apartment cleaning across Greater Vancouver. Eco-friendly products, background-checked staff, flexible scheduling. Get a free quote.",
  sections,
  published: true,
});

console.log("\n✓ House cleaning migrated");
