import {
  key,
  uploadImage,
  replaceDoc,
  heading,
  para,
  paraWithLink,
} from "./lib.mjs";

/**
 * /services/restaurant-cleaning — migrated from the hand-coded page now
 * parked at /services/restaurant-cleaning-original.
 *
 * All copy is verbatim. Placement decisions:
 *  - "Who Needs Restaurant and Commercial Kitchen Cleaning" was a short intro
 *    sentence plus a flat tag list, with no section type of its own, so it
 *    became a 7th card appended to the What's Included section (title, body,
 *    items) rather than inventing a second section.
 *  - "Why Choose Mint Sanitary" was a flat list of single-sentence bullets
 *    (no title/body pairs like the pilot pages had), so forcing it into
 *    whyChoose would mean inventing titles. It became Rich Text instead —
 *    one paragraph per bullet, verbatim — with the trailing North Vancouver
 *    cross-link paragraph kept as a real link via paraWithLink.
 *  - This page has no image otherwise usable for a Why Choose section, so
 *    richText was the correct call independent of the title/body issue too.
 */

const includedItems = [
  ["Hood and Exhaust System Cleaning", "NFPA 96 requires commercial kitchen hoods to be cleaned every 1 to 3 months, depending on cooking volume. We remove grease, soot, and buildup from the hood face, ductwork, and dampers, and provide NFPA 96-compliant documentation for fire inspectors."],
  ["Grease Trap and Drain Cleaning", "Grease traps get cleaned and flushed quarterly or as needed to prevent backups, odors, and drain failures before they shut down service."],
  ["Equipment Degreasing", "Ovens, fryers, grills, range tops, and flat-top cookers get degreased with food-safe products that cut through baked-on grease without leaving a residue behind on cooking surfaces."],
  ["Surface Sanitization", "Counters, walls, and backsplashes get sanitized with eco-friendly, food-safe products that are safe to use in an active kitchen."],
  ["Floor and Wall Cleaning", "A deep clean removes the buildup standard mopping misses and clears the slip hazards that standing water and grease leave on kitchen floors."],
  ["Ceiling and Light Fixture Cleaning", "Grease and dust collect overhead too. We clean ceilings, light fixtures, and ventilation components as part of a full deep clean, not as an afterthought."],
];

const whoNeedsItems = [
  "Restaurants and cafes",
  "Catering companies",
  "Hotels and resorts",
  "Food trucks",
  "Institutional kitchens, including schools, hospitals, and corporate cafeterias",
  "Takeout and delivery-only kitchens",
];

const processSteps = [
  ["Pre-Assessment and Custom Plan", "We walk the kitchen, check grease buildup on hoods and equipment, and map traffic patterns before building a cleaning plan around your space and your schedule."],
  ["After-Hours Scheduling", "Cleaning happens early morning before you open or late evening after you close, 7 days a week. If an inspection is coming up fast, we offer same-day or next-day booking."],
  ["Deep Cleaning Execution", "Cleaning runs top to bottom: hood and exhaust first, then equipment, then walls and floors, all with eco-friendly food-safe products."],
  ["Final Inspection and Documentation", "Before we leave, we do a final walkthrough, take photos, and hand over a completion report you can keep on file for your next health or fire inspection."],
];

const pricingTiers = [
  ["One-Time Deep Clean", "From $600", "Smaller kitchens start at $600, and pricing scales up for larger operations with more equipment and hood systems."],
  ["Quarterly Service Plans", "15% off regular pricing", "Most restaurants benefit from a deep clean every 3 months. Service plan clients get 15% off regular pricing plus priority scheduling."],
  ["Monthly Maintenance Cleans", "Custom pricing", "Built for high-volume kitchens, and these typically cost less than a full deep clean since less buildup accumulates between visits."],
];

const whyChoose = [
  "7-day-a-week availability, including evenings and weekends",
  "Eco-friendly, food-safe products that are non-toxic and biodegradable",
  "NFPA 96-compliant hood cleaning with certified documentation",
  "Working knowledge of health inspection standards across the region",
  "Free estimates and transparent, upfront pricing",
  "10% off your first clean with code MINT26",
  "Rapid response for pre-inspection cleans, including same-day service when needed",
  "Bonded, insured, and background-checked staff, backed by a 24-hour satisfaction guarantee",
];

const faqItems = [
  ["How much does restaurant cleaning cost?", "Small takeout kitchens start around $600. Full-service restaurants with multiple hoods and extensive equipment may range from $1,500 to $3,500 or more, depending on size and buildup. Quarterly service plan clients get 15% off regular pricing."],
  ["How often does NFPA 96 require hood cleaning?", "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume. High-volume kitchens generally need cleaning at the shorter end of that range."],
  ["What's included in a commercial kitchen deep clean?", "A deep clean covers hood and exhaust cleaning, grease trap and drain service, equipment degreasing, surface sanitization, floor and wall cleaning, and ceiling and light fixture cleaning."],
  ["Do you clean grease traps?", "Yes. Grease traps get cleaned and flushed quarterly or as needed to prevent backups and drain failures."],
  ["Can you clean during business hours or only after close?", "Cleaning is scheduled early morning before you open or late evening after you close, 7 days a week, so your kitchen is never out of service during operating hours."],
  ["Do you provide documentation for health and fire inspectors?", "Yes. Every clean includes photos and a completion report, and hood cleaning comes with NFPA 96-compliant documentation you can hand directly to a fire inspector."],
  ["What products do you use?", "We use eco-friendly, non-toxic, biodegradable, food-safe products throughout the kitchen, including on equipment, counters, and floors."],
  ["How long does a restaurant deep clean take?", "A small kitchen typically takes 3 to 4 hours. A full-service restaurant with multiple hood systems typically takes 6 to 8 hours."],
  ["Do you offer recurring service plans?", "Yes. Quarterly service plans get 15% off regular pricing plus priority scheduling, and monthly maintenance cleans are available for high-volume kitchens at custom pricing."],
  ["What areas do you serve?", "We clean restaurants and commercial kitchens across North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge."],
  ["Do you work with food trucks and institutional kitchens?", "Yes. We clean restaurants, cafes, catering companies, hotels, food trucks, and institutional kitchens like schools, hospitals, and corporate cafeterias."],
  ["Is Mint Sanitary insured?", "Yes. Our team is bonded, insured, and background-checked, and every clean is backed by a 24-hour satisfaction guarantee."],
];

console.log("→ /services/restaurant-cleaning");

const heroImage = await uploadImage(
  "/commercial-kitchen-cleaning-north-vancouver.jpg",
  "Restaurant and commercial kitchen cleaning in Greater Vancouver"
);

const whyChooseBody = whyChoose.map((item) => para(item));
whyChooseBody.push(
  paraWithLink(
    "Mint Sanitary serves restaurants and commercial kitchens across North Vancouver, West Vancouver, Vancouver, Burnaby, New Westminster, and Maple Ridge. If your kitchen is based in North Vancouver, see our page on ",
    "restaurant cleaning in North Vancouver",
    "/north-vancouver/restaurant-cleaning",
    " for details on the neighborhoods we cover there, including Lower Lonsdale and Lynn Valley."
  )
);

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Restaurant and Commercial Kitchen Cleaning",
    cards: [
      ...includedItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
      {
        _key: key("card"),
        title: "Who Needs Restaurant and Commercial Kitchen Cleaning",
        body: "Any operation with a working kitchen and a health inspector on the calendar benefits from a scheduled, documented cleaning plan.",
        items: whoNeedsItems,
      },
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "We offer free estimates for every kitchen, so you know what a clean will cost before you book it.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Choose Mint Sanitary",
    body: whyChooseBody,
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(([question, answer]) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Get Your Free Restaurant Cleaning Quote",
    body: "Whatever kind of kitchen you run, a scheduled cleaning plan keeps it ready for inspection year round. Get a free estimate for hood cleaning, grease trap service, or a full deep clean, and use code MINT26 for 10% off your first visit.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "restaurant-cleaning", {
  title: "Restaurant and Commercial Kitchen Cleaning",
  name: "Restaurant Cleaning",
  tileDescription:
    "Degreasing, hood cleaning, and floor sanitization for restaurants and commercial kitchens that need to meet health department standards every single day.",
  tileImage: heroImage,
  hasOwnPage: true,
  heroHeading: "Restaurant and Commercial Kitchen Cleaning",
  heroIntro:
    "A commercial kitchen carries more regulatory weight than almost any other part of a food service business. Health inspectors check surfaces, temperatures, and grease buildup. Fire safety auditors check hood systems, ductwork, and exhaust components. Mint Sanitary provides restaurant and commercial kitchen cleaning across Greater Vancouver, covering hood and exhaust cleaning, grease trap service, equipment degreasing, and full deep cleans, with documentation you can hand directly to an inspector.",
  heroImage,
  metaTitle: "Restaurant & Commercial Kitchen Cleaning | Mint Sanitary",
  metaDescription:
    "Restaurant and commercial kitchen cleaning across Greater Vancouver. NFPA 96 hood cleaning, grease trap service, food-safe deep cleans. Free estimates.",
  sections,
  published: true,
});

console.log("\n✓ Restaurant cleaning migrated");
