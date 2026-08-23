import {
  key,
  uploadImage,
  replaceDoc,
  refTo,
  heading,
  para,
  paraWithLink,
  imageBlock,
} from "./lib.mjs";

/**
 * /services/strata-cleaning — migrated from the hand-coded page now parked at
 * /services/strata-cleaning-original.
 *
 * All copy is verbatim. Two placement decisions worth knowing:
 *  - "Why Common Area Cleaning Matters" was a card grid with no matching
 *    section type, so it became a Rich Text section (heading + paragraph per
 *    item), which is what that section exists for.
 *  - The service-van photo, which sat inside the process section on the old
 *    page, is reused as the Why Choose image — that section requires one and
 *    the old page had none. Nothing invented, nothing dropped.
 */

const commonAreas = [
  ["Lobbies and Main Entrances", "The lobby is the first impression for residents, guests, and prospective buyers. Daily cleaning keeps floors, glass doors, baseboards, and seating areas free of dirt and debris."],
  ["Hallways and Corridors", "High-traffic hallways collect dust, footprints, and debris throughout the day. Regular cleaning keeps floors and walls looking cared for between resident move-ins and move-outs."],
  ["Elevators and Elevator Lobbies", "Elevators are among the highest-touch surfaces in any building. Buttons, handrails, and mirrors need frequent attention to stay free of fingerprints and smudges."],
  ["Stairwells and Emergency Exits", "Stairwells matter for daily use and for safety. Clean, clear stairwells and emergency exits support both cleanliness standards and building safety requirements."],
  ["Parkades and Underground Garages", "Parkades take a beating from dirt, salt residue, and automotive fluids, especially through winter weather. Routine cleaning helps extend the life of the concrete and keeps the space presentable."],
  ["Amenity Rooms", "Fitness centers, lounges, meeting rooms, and pool areas all need consistent attention to stay usable and sanitary for residents."],
  ["Recycling and Garbage Areas", "Waste and recycling rooms can quickly turn into a source of odors and pests without regular cleaning and disinfecting. Consistent service prevents contamination and keeps these areas under control."],
  ["Restrooms and Common Washrooms", "Common washrooms require toilet cleaning, sink sanitizing, and consistent restocking of supplies so they stay ready for residents and guests."],
  ["Exterior Common Spaces", "Balconies, patios, and courtyards benefit from pressure washing and seasonal leaf cleanup to stay presentable throughout the year."],
  ["Windows and Glass Surfaces", "Interior and exterior glass, lobby doors, and mailroom windows all need regular attention to keep the building looking sharp from the street and from inside."],
];

// Old page stored these as one string each ("Title. Body."); split on the
// first sentence so they fit the timeline's title/body shape. Wording intact.
const processSteps = [
  ["Initial Consultation and Site Assessment", "We walk the property and look at building size, occupancy, and traffic patterns before recommending a plan."],
  ["Customized Cleaning Plan", "Every building gets a schedule built around its layout and around resident schedules, not a generic template."],
  ["Eco-Friendly Product Selection", "We use non-toxic, environmentally responsible products throughout common areas."],
  ["High-Touch Surface Focus", "Elevator buttons, handrails, door handles, and light switches get extra attention on every visit."],
  ["Flexible Scheduling", "Service is available seven days a week, including weekends and holidays, to fit around building activity."],
  ["Documentation and Reporting", "Property managers receive cleaning logs and reports so the strata council has a clear record of service."],
  ["Quality Assurance", "We inspect completed work and fix any issues right away, rather than waiting for the next scheduled visit."],
];

const whyItMatters = [
  ["Legal Compliance", "The BC Strata Property Act, Section 72, requires strata corporations to maintain common property. Residents can file complaints with the strata council if cleaning standards aren't met, which puts pressure on property managers to keep a consistent program in place."],
  ["Resident Satisfaction", "Clean common areas play a direct role in how residents feel about where they live. Buildings that stay consistently clean tend to see higher resident satisfaction and lower turnover."],
  ["Property Value", "Well-maintained buildings command higher resale values. A clean lobby, hallway, and parkade signal to buyers and appraisers that the building is cared for."],
  ["Liability Protection", "Documented, regular cleaning creates a paper trail that helps protect strata councils and property managers against slip-and-fall claims."],
  ["Asset Life Extension", "Regular cleaning extends the life of flooring, carpet, and elevators, which reduces long-term capital repair and replacement costs for the strata corporation."],
];

const whyChoose = [
  ["Local Expertise Across Greater Vancouver", "We work with many different building types across the region, including older walk-up buildings and newer high-rise towers."],
  ["Seven-Day Availability", "Cleaning is available every day of the week, including evenings, weekends, and holidays."],
  ["Eco-Friendly Products", "Our products are non-toxic and biodegradable, which matters for residents with allergies or sensitivities."],
  ["Bonded, Insured, and Registered", "Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every team member is background-checked."],
  ["Free Estimates and Consultations", "We walk the property and provide a written estimate before any commitment."],
  ["First Clean Discount", "New strata clients get 10% off their first clean with code MINT26."],
  ["Flexible Service Frequency", "Daily, twice-weekly, or bi-weekly service, based on what the building needs."],
  ["Same-Day Response", "Urgent cleaning needs, like a spill in the lobby or a mess in the parkade, get a same-day response whenever possible."],
];

// Old tiers carried both frequencies in one prose line rather than a single
// headline price, so `range` is left blank instead of inventing one. The
// pricing card hides an empty range.
const pricingTiers = [
  ["Small Buildings (30–50 units)", "Twice-weekly: $600 – $1,200/mo. Daily: $1,500 – $2,500/mo."],
  ["Medium Buildings (50–150 units)", "Twice-weekly: $1,200 – $2,000/mo. Daily: $2,500 – $4,500/mo."],
  ["Larger Buildings (150+ units)", "Twice-weekly: $2,000 – $5,000+/mo. Daily: $5,000 – $10,000+/mo."],
];

const faqItems = [
  ["How much does strata cleaning cost?", "Pricing depends on building size and service frequency. Small buildings (30 to 50 units) typically run $600 to $1,200 per month for twice-weekly service, or $1,500 to $2,500 per month for daily service. Medium and larger buildings run higher, based on amenities and parkade size. See the pricing section above for full tiers, or request a free estimate for your building."],
  ["What common areas do you clean in strata buildings?", "We clean lobbies, hallways, elevators, stairwells, parkades, amenity rooms, recycling and garbage areas, restrooms, exterior common spaces, and windows and glass surfaces."],
  ["Are you insured to work in our building?", "Yes. Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every staff member is background-checked before starting work."],
  ["Do you offer daily cleaning for high-traffic buildings?", "Yes. We offer daily, twice-weekly, and bi-weekly service, depending on building size, occupancy, and traffic."],
  ["Can you provide cleaning logs for our strata council?", "Yes. We provide documentation and reporting after each visit so the property manager and strata council have a clear record of the work performed."],
  ["What products do you use in common areas?", "We use eco-friendly, non-toxic, and biodegradable products throughout, which is safer for residents with allergies or sensitivities."],
  ["Do you offer a discount for new strata clients?", "Yes. New clients get 10% off their first clean with code MINT26."],
  ["How quickly can you start service?", "After a free consultation and site walkthrough, most buildings can start service within a short timeframe. Urgent requests can often get a same-day response."],
  ["Do you clean parkades and underground garages?", "Yes. Parkade cleaning is part of our standard strata service, including dirt, salt residue, and automotive fluid buildup, which matters most through winter months."],
  ["What areas of Greater Vancouver do you serve?", "We serve strata buildings throughout Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, and Burnaby."],
];

console.log("→ /services/strata-cleaning");

const whyMattersBody = [];
for (const [title, body] of whyItMatters) {
  whyMattersBody.push(heading(title), para(body));
}

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Common Areas We Clean in Strata Buildings",
    cards: commonAreas.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Strata Cleaning Process",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Property Managers and Strata Councils Choose Mint Sanitary",
    image: await uploadImage(
      "/mint-sanitary-service-van-north-vancouver.jpg",
      "Mint Sanitary service van arriving for a strata cleaning appointment"
    ),
    items: whyChoose.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Common Area Cleaning Matters for Strata Buildings",
    body: whyMattersBody,
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Strata Cleaning Pricing for Buildings Across Greater Vancouver",
    intro:
      "Pricing depends on building size, unit count, amenity mix, and how often the building needs service. Here is what strata cleaning typically costs for buildings across Greater Vancouver.",
    tiers: pricingTiers.map(([title, body]) => ({ _key: key("tier"), title, range: "", body })),
    notes: [
      "Pricing factors include building square footage, number of units, amenity mix, service frequency, specific cleaning requirements, and parkade size and condition. For an accurate quote for your building, request a free estimate and site walkthrough.",
    ],
  },
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "Related Services",
    intro:
      "Mint Sanitary also provides commercial cleaning services, office cleaning services, and post-construction cleaning services for buildings across Greater Vancouver.",
    tiles: [
      refTo("cleaningType", "commercial-cleaning"),
      refTo("cleaningType", "office-cleaning"),
      refTo("cleaningType", "post-construction-cleaning"),
    ],
  },
  {
    _key: key("sec"),
    _type: "faq",
    heading: "Frequently Asked Questions",
    items: faqItems.map(([question, answer]) => ({ _key: key("faq"), question, answer })),
  },
  {
    _key: key("sec"),
    _type: "finalCta",
    heading: "Get a Free Strata Cleaning Estimate",
    body: "Request a free walkthrough and a written estimate for your building. New clients get 10% off their first clean with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "strata-cleaning", {
  title: "Strata Cleaning Services for Condo and Townhouse Buildings",
  name: "Strata Cleaning",
  tileDescription:
    "Lobbies, hallways, elevators, underground parking, and common areas kept clean and presentable for residents, owners, and visiting guests.",
  tileImage: await uploadImage("/strata-cleaning-north-vancouver.jpg", "Strata cleaning in Greater Vancouver"),
  hasOwnPage: true,
  heroHeading: "Strata Cleaning Services for Condo and Townhouse Buildings",
  heroIntro:
    "If you manage a condo building, townhouse complex, or multi-unit residential property, you already know how demanding it is to keep common areas spotless. Lobbies get dirty fast. Elevators accumulate fingerprints and smudges. Parkades collect dust, salt, and debris that tracks in with every vehicle. Mint Sanitary provides strata cleaning for buildings across Greater Vancouver, with service plans built around each property's size, amenities, and resident traffic patterns.",
  heroImage: await uploadImage(
    "/strata-cleaning-north-vancouver.jpg",
    "Strata cleaning in Greater Vancouver"
  ),
  metaTitle: "Strata Cleaning Services | Greater Vancouver",
  metaDescription:
    "Strata cleaning for condo and townhouse buildings across Greater Vancouver. Eco-friendly products, flexible scheduling, and free estimates.",
  sections,
  published: true,
});

console.log("\n✓ Strata cleaning migrated");
