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
 * /north-vancouver/strata-cleaning — migrated from the hand-coded page now
 * parked at /north-vancouver/strata-cleaning-original.
 *
 * This is North Vancouver's own, distinctly-localized version of strata
 * cleaning copy — separate from the general /services/strata-cleaning page
 * migrated earlier (01-strata-cleaning.mjs) — migrated fully and
 * independently here, sentence by sentence from this file's source.
 *
 * Placement decisions:
 *  - The "Our Strata Cleaning Process" section on the old page paired a
 *    service-van photo with the numbered steps. processChecklist has no
 *    image field, and the Why Choose accordion right after it already uses
 *    a different real photo (the strata building photo). Rather than invent
 *    a slot, the service-van photo is kept as its own headingless Rich Text
 *    image block immediately after the process section — same position on
 *    the page, nothing dropped.
 *  - The "Related Services" paragraph carries one link to the general
 *    /services/strata-cleaning page; the three cards below it link to other
 *    /north-vancouver/... pages, which don't fit serviceTiles (cleaningType
 *    refs only), so the whole block is Rich Text with real link marks.
 */

const commonAreas = [
  ["Lobbies and Main Entrances", "The lobby is the first impression for residents, guests, and prospective buyers in any North Vancouver building. Daily cleaning keeps floors, glass doors, baseboards, and seating areas free of dirt and debris."],
  ["Hallways and Corridors", "High-traffic hallways in North Vancouver buildings collect dust, footprints, and debris throughout the day. Regular cleaning keeps floors and walls looking cared for between resident move-ins and move-outs."],
  ["Elevators and Elevator Lobbies", "Elevators are among the highest-touch surfaces in any North Vancouver strata building. Buttons, handrails, and mirrors need frequent attention to stay free of fingerprints and smudges."],
  ["Stairwells and Emergency Exits", "Stairwells matter for daily use and for safety in North Vancouver buildings. Clean, clear stairwells and emergency exits support both cleanliness standards and building safety requirements."],
  ["Parkades and Underground Garages", "North Vancouver parkades take a beating from dirt, salt residue, and automotive fluids, especially through the wetter winter months common to the North Shore. Routine cleaning helps extend the life of the concrete and keeps the space presentable for residents."],
  ["Amenity Rooms", "Fitness centers, lounges, meeting rooms, and pool areas in North Vancouver buildings all need consistent attention to stay usable and sanitary for residents."],
  ["Recycling and Garbage Areas", "Waste and recycling rooms in North Vancouver strata buildings can quickly turn into a source of odors and pests without regular cleaning and disinfecting. Consistent service prevents contamination and keeps these areas under control."],
  ["Restrooms and Common Washrooms", "Common washrooms in North Vancouver buildings require toilet cleaning, sink sanitizing, and consistent restocking of supplies so they stay ready for residents and guests."],
  ["Exterior Common Spaces", "Balconies, patios, and courtyards on North Vancouver properties, including hillside buildings near Edgemont Village and Lynn Valley, benefit from pressure washing and seasonal leaf cleanup to stay presentable throughout the year."],
  ["Windows and Glass Surfaces", "Interior and exterior glass, lobby doors, and mailroom windows all need regular attention to keep a North Vancouver building looking sharp from the street and from inside."],
];

const whyItMatters = [
  ["Legal Compliance", "The BC Strata Property Act, Section 72, requires strata corporations, including those in North Vancouver, to maintain common property. Residents can file complaints with the strata council if cleaning standards aren't met, which puts pressure on North Vancouver property managers to keep a consistent program in place. The Province of BC's guidance on repairs and maintenance and resources from the Condominium Home Owners Association (CHOA) both cover this obligation in more detail."],
  ["Resident Satisfaction", "Clean common areas play a direct role in how residents in North Vancouver buildings feel about where they live. Buildings that stay consistently clean tend to see higher resident satisfaction and lower turnover."],
  ["Property Value", "Well-maintained buildings command higher resale values in North Vancouver's competitive housing market. A clean lobby, hallway, and parkade signal to buyers and appraisers that the building is cared for."],
  ["Liability Protection", "Documented, regular cleaning creates a paper trail that helps protect North Vancouver strata councils and property managers against slip-and-fall claims."],
  ["Asset Life Extension", "Regular cleaning extends the life of flooring, carpet, and elevators in North Vancouver buildings, which reduces long-term capital repair and replacement costs for the strata corporation."],
];

const processSteps = [
  ["Initial Consultation and Site Assessment", "We walk the North Vancouver property and look at building size, occupancy, and traffic patterns before recommending a plan."],
  ["Customized Cleaning Plan", "Every North Vancouver building gets a schedule built around its layout and around resident schedules, not a generic template."],
  ["Eco-Friendly Product Selection", "We use non-toxic, environmentally responsible products throughout common areas."],
  ["High-Touch Surface Focus", "Elevator buttons, handrails, door handles, and light switches get extra attention on every visit."],
  ["Flexible Scheduling", "Service is available seven days a week, including weekends and holidays, to fit around North Vancouver building activity."],
  ["Documentation and Reporting", "North Vancouver property managers receive cleaning logs and reports so the strata council has a clear record of service."],
  ["Quality Assurance", "We inspect completed work and fix any issues right away, rather than waiting for the next scheduled visit."],
];

const whyChooseItems = [
  ["Local North Vancouver Expertise", "Our teams are familiar with the different building types found across North Vancouver neighbourhoods, from older Lower Lonsdale walk-ups to newer towers near the waterfront."],
  ["Seven-Day Availability", "Cleaning is available every day of the week in North Vancouver, including evenings, weekends, and holidays."],
  ["Eco-Friendly Products", "Our products are non-toxic and biodegradable, which matters for North Vancouver residents with allergies or sensitivities."],
  ["Bonded, Insured, and Registered", "Mint Sanitary carries $2 million in liability insurance, is registered with WorkSafeBC, and every team member is background-checked."],
  ["Free Estimates and Consultations", "We walk the North Vancouver property and provide a written estimate before any commitment."],
  ["First Clean Discount", "New North Vancouver strata clients get 10% off their first clean with code MINT26."],
  ["Flexible Service Frequency", "Daily, twice-weekly, or bi-weekly service, based on what the North Vancouver building needs."],
  ["Same-Day Response", "Urgent cleaning needs in North Vancouver buildings, like a spill in the lobby or a mess in the parkade, get a same-day response whenever possible."],
];

const pricingTiers = [
  ["Small Buildings (30–50 units)", "Twice-weekly: $600 – $1,200/mo. Daily: $1,500 – $2,500/mo."],
  ["Medium Buildings (50–150 units)", "Twice-weekly: $1,200 – $2,000/mo. Daily: $2,500 – $4,500/mo."],
  ["Larger Buildings (150+ units)", "Twice-weekly: $2,000 – $5,000+/mo. Daily: $5,000 – $10,000+/mo."],
];

const relatedServices = [
  ["Commercial Cleaning", "/north-vancouver/commercial-cleaning"],
  ["Office Cleaning", "/north-vancouver/office-cleaning"],
  ["Post-Construction Cleaning", "/north-vancouver/post-construction-cleaning"],
];

const faqItems = [
  ["How much does strata cleaning cost in North Vancouver?", "Pricing for a North Vancouver strata building depends on size and service frequency. Small buildings (30 to 50 units) typically run $600 to $1,200 per month for twice-weekly service, or $1,500 to $2,500 per month for daily service. Medium and larger North Vancouver buildings run higher, based on amenities and parkade size."],
  ["What areas do you clean in North Vancouver strata buildings?", "In North Vancouver strata buildings, we clean lobbies, hallways, elevators, stairwells, parkades, amenity rooms, recycling and garbage areas, restrooms, exterior common spaces, and windows and glass surfaces."],
  ["Do you offer daily cleaning for North Vancouver condo buildings?", "Yes. For North Vancouver condo buildings, we offer daily, twice-weekly, and bi-weekly service, depending on building size, occupancy, and traffic."],
  ["Are you insured for strata cleaning in North Vancouver?", "Yes. Mint Sanitary carries $2 million in liability insurance for all strata cleaning work in North Vancouver, is registered with WorkSafeBC, and every staff member is background-checked."],
  ["Do you offer free estimates for strata cleaning in North Vancouver?", "Yes. We walk the North Vancouver property and provide a written estimate before any commitment, at no cost."],
  ["What is the first clean discount for North Vancouver strata properties?", "New North Vancouver strata clients get 10% off their first clean with code MINT26."],
  ["Do you clean parkades in North Vancouver strata buildings?", "Yes. Parkade cleaning is part of our standard service for North Vancouver strata buildings, covering dirt, salt residue, and automotive fluid buildup common through the North Shore's winter weather."],
  ["How do you handle high-touch surfaces in North Vancouver elevators?", "In North Vancouver elevators, we give extra attention to buttons, handrails, and mirrors on every visit, since these are among the highest-touch surfaces in the building."],
  ["Can you work around resident schedules in North Vancouver buildings?", "Yes. Every North Vancouver building we service gets a cleaning schedule built around resident schedules and building activity, not a generic template."],
  ["Do you provide cleaning logs for North Vancouver strata councils?", "Yes. North Vancouver strata councils and property managers receive cleaning logs and reports after each visit as part of our standard service."],
  ["What products do you use for North Vancouver strata cleaning?", "For strata cleaning in North Vancouver, we use eco-friendly, non-toxic, and biodegradable products throughout common areas, which is safer for residents with allergies or sensitivities."],
  ["Do you serve small and large buildings in North Vancouver?", "Yes. We serve North Vancouver buildings of all sizes, from small 30 to 50 unit properties to larger buildings with 150 or more units."],
  ["How quickly can you start strata cleaning service in North Vancouver?", "After a free consultation and site walkthrough, most North Vancouver buildings can start service within a short timeframe."],
  ["Do you clean on weekends and holidays in North Vancouver?", "Yes. Service is available seven days a week in North Vancouver, including evenings, weekends, and holidays."],
  ["What neighbourhoods in North Vancouver do you serve for strata cleaning?", "We provide strata cleaning throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights."],
  ["Is strata cleaning legally required in North Vancouver?", "The BC Strata Property Act, Section 72, requires strata corporations in North Vancouver and across the province to maintain common property, and residents can file complaints if cleaning standards aren't met. The Province of BC and CHOA both publish resources covering these maintenance obligations."],
  ["Do you offer same-day response for urgent cleaning needs in North Vancouver?", "Yes. Urgent needs at North Vancouver buildings, like a spill in the lobby or a mess in the parkade, get a same-day response whenever possible."],
  ["How do I switch cleaning companies for my North Vancouver strata building?", "We start with a free consultation and site walkthrough for your North Vancouver building, review your current pain points with the strata council, and build a plan and schedule around them before taking over service."],
];

console.log("→ /north-vancouver/strata-cleaning");

const whyMattersBody = whyItMatters.flatMap(([title, body]) => [heading(title), para(body)]);

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Common Areas We Clean in North Vancouver Strata Buildings",
    cards: commonAreas.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Common Area Cleaning Matters for North Vancouver Strata Corporations",
    body: whyMattersBody,
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Strata Cleaning Process in North Vancouver",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistItems: [],
  },
  {
    // The service-van photo sat inside the old process section; processChecklist
    // has no image field, so it's preserved here, same position on the page.
    _key: key("sec"),
    _type: "richText",
    body: [
      await imageBlock(
        "/mint-sanitary-service-van-north-vancouver.jpg",
        "Mint Sanitary service van arriving for a North Vancouver strata cleaning appointment"
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Property Managers and Strata Councils Choose Mint Sanitary",
    image: await uploadImage(
      "/strata-cleaning-north-vancouver.jpg",
      "Strata cleaning common areas in a North Vancouver building"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Strata Cleaning Pricing in North Vancouver",
    intro:
      "Pricing for North Vancouver strata buildings depends on building size, unit count, amenity mix, and how often the building needs service. Here is what strata cleaning typically costs for North Vancouver buildings.",
    tiers: pricingTiers.map(([title, body]) => ({ _key: key("tier"), title, range: "", body })),
    notes: [
      "Pricing for a North Vancouver building depends on square footage, number of units, amenity mix, service frequency, specific cleaning requirements, and parkade size and condition. For an accurate quote, request a free estimate and site walkthrough.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "A North Vancouver Success Story: Lower Lonsdale",
    body: [
      para(
        "I remember when we first started cleaning a 45-unit complex in Lower Lonsdale. The strata council had been cycling through contractors, frustrated with inconsistent quality. We took time to understand their specific concerns: the lobby tracked water during rainy season, the parkade smelled musty, and residents complained about elevator cleanliness. We adjusted our approach, focused on those pain points, and stuck with the same team for continuity. Two years later, we are still their contractor. That is the difference between a cleaning service and a cleaning partner."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Areas of North Vancouver We Serve",
    body: [
      para(
        "Mint Sanitary provides strata cleaning throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also serve strata buildings in West Vancouver, Vancouver, and Burnaby."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Services in North Vancouver",
    body: [
      para(
        "Mint Sanitary also provides commercial cleaning in North Vancouver, office cleaning in North Vancouver, and post-construction cleaning in North Vancouver."
      ),
      paraWithLink(
        "If your building is outside North Vancouver, see our ",
        "general strata cleaning services page",
        "/services/strata-cleaning",
        " for pricing that applies across Greater Vancouver."
      ),
      ...relatedServices.flatMap(([title, href]) => [
        heading(title),
        paraWithLink("", "Learn more", href, ""),
      ]),
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
    heading: "Get a Free Strata Cleaning Estimate in North Vancouver",
    body: "Request a free walkthrough and a written estimate for your North Vancouver building. New North Vancouver clients get 10% off their first clean with code MINT26.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "strata-cleaning", {
  title: "Strata Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "strata-cleaning"),
  heroHeading: "Strata Cleaning in North Vancouver",
  heroIntro:
    "If you manage a condo building, townhouse complex, or multi-unit residential property in North Vancouver, you know how demanding it is to keep common areas spotless. Lobbies get dirty fast. Elevators accumulate fingerprints and smudges. Parkades collect dust and debris. Mint Sanitary is based in North Vancouver and provides strata cleaning to condo buildings, townhouse complexes, and multi-unit properties throughout the city, from Lower Lonsdale to Lynn Valley to Deep Cove.",
  heroImage: await uploadImage(
    "/strata-cleaning-north-vancouver.jpg",
    "Strata cleaning in North Vancouver"
  ),
  metaTitle: "Strata Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "Strata cleaning in North Vancouver for condo and townhouse buildings. Eco-friendly products, seven-day scheduling, and free estimates. Call today.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver strata cleaning migrated");
