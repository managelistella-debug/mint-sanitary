import { key, uploadImage, replaceDoc, refTo, heading, para, paraWithLink, imageBlock } from "./lib.mjs";

/**
 * /north-vancouver/restaurant-cleaning — migrated from the hand-coded page
 * now parked at /north-vancouver/restaurant-cleaning-original.
 *
 * All copy verbatim. Placement decisions:
 *  - "Who We Clean For" (a plain intro + list of client types) sat directly
 *    above "Our Process" on the old page. processChecklist has a sticky
 *    checklist column built for exactly this shape, so the two are combined
 *    into one processChecklist section: the numbered steps on the left, the
 *    client-type list as the checklist on the right. Nothing is dropped,
 *    just consolidated into the section type built for a steps+checklist
 *    pairing.
 *  - The three "Related Services" cards link to other /north-vancouver/...
 *    pages, not the general /services/... pages, so serviceTiles (which only
 *    holds cleaningType references) doesn't fit. They become a heading +
 *    linked paragraph per card in Rich Text instead, preserving the real
 *    hrefs as portable-text link marks.
 */

const includedItems = [
  ["Hood and Exhaust System Cleaning in North Vancouver", "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume, and North Vancouver kitchens are held to the same standard as anywhere else in the region. We remove grease, soot, and buildup from the hood face, ductwork, and dampers, and provide NFPA 96-compliant documentation your North Vancouver fire inspector can review on the spot."],
  ["Grease Trap and Drain Cleaning for North Vancouver Restaurants", "Grease traps get cleaned and flushed quarterly or as needed to prevent backups, odors, and drain failures in North Vancouver kitchens, many of which run older plumbing that clogs faster under heavy grease loads."],
  ["Equipment Degreasing in North Vancouver Kitchens", "Ovens, fryers, grills, range tops, and flat-top cookers across North Vancouver get degreased with food-safe products that cut through baked-on grease without damaging cooking surfaces."],
  ["Surface Sanitization for North Vancouver Kitchens", "Counters, walls, and backsplashes in North Vancouver restaurants get sanitized with eco-friendly, food-safe products, safe to use around active food prep."],
  ["Floor and Wall Cleaning in North Vancouver Restaurants", "A deep clean removes the buildup standard mopping misses and clears slip hazards that standing water and grease leave behind, a common issue in busy North Vancouver kitchens with high foot traffic during dinner service."],
  ["Ceiling and Light Fixture Cleaning", "Grease and dust collect overhead too. We clean ceilings, light fixtures, and ventilation components as part of every full deep clean in North Vancouver."],
];

const whoNeedsItems = [
  "Restaurants and cafes across the city, from waterfront spots in Lower Lonsdale to neighborhood cafes in Lynn Valley",
  "Catering companies based in North Vancouver",
  "Hotels and resorts",
  "Food trucks operating in North Vancouver",
  "Institutional kitchens, including schools, hospitals, and corporate cafeterias",
  "Takeout and delivery-only kitchens in North Vancouver",
];

const processSteps = [
  ["Pre-Assessment and Custom Plan", "We walk the kitchen, check grease buildup on hoods and equipment, and map traffic patterns before building a cleaning plan around your North Vancouver location and schedule."],
  ["After-Hours Scheduling Across North Vancouver", "Cleaning happens early morning before you open or late evening after you close, 7 days a week, across every North Vancouver neighborhood we serve. If a North Vancouver kitchen needs a pre-inspection clean fast, we offer same-day or next-day booking."],
  ["Deep Cleaning Execution", "Cleaning runs top to bottom: hood and exhaust first, then equipment, then walls and floors, using eco-friendly food-safe products throughout your North Vancouver kitchen."],
  ["Final Inspection and Documentation", "Before we leave your North Vancouver kitchen, we do a final walkthrough, take photos, and hand over a completion report you can keep on file for your next Vancouver Coastal Health or fire inspection."],
];

const whyChooseItems = [
  ["7-Day-a-Week Availability", "Cleaning scheduled across North Vancouver, including evenings, weekends, and holidays."],
  ["Eco-Friendly, Food-Safe Products", "Non-toxic and biodegradable, safe to use around active food prep."],
  ["NFPA 96-Compliant Hood Cleaning", "Certified documentation for North Vancouver kitchens, ready for your next fire inspection."],
  ["Vancouver Coastal Health Knowledge", "Working knowledge of inspection standards as they apply to North Vancouver restaurants."],
  ["Free Estimates and Transparent Pricing", "No surprises, no hidden fees, upfront pricing before any work begins."],
  ["10% Off Your First Clean", "New clients save with code MINT26."],
  ["Local North Shore Expertise", "North Vancouver kitchens cleaned in Lower Lonsdale, Lynn Valley, and Edgemont Village."],
  ["Rapid Response for Pre-Inspection Cleans", "Same-day service available when a North Vancouver inspection is coming up fast."],
];

const pricingTiers = [
  ["One-Time Deep Clean", "From $600", "Smaller North Vancouver kitchens start at $600, and pricing scales up for larger North Vancouver operations with more equipment and hood systems."],
  ["Quarterly Service Plans", "15% off regular pricing", "Most North Vancouver restaurants benefit from a deep clean every 3 months. Service plan clients get 15% off regular pricing plus priority scheduling."],
  ["Monthly Maintenance Cleans", "Custom pricing", "Built for high-volume North Vancouver kitchens, and these typically cost less than a full deep clean since less buildup accumulates between visits."],
];

const relatedServices = [
  ["Commercial Cleaning", "/north-vancouver/commercial-cleaning/"],
  ["Office Cleaning", "/north-vancouver/office-cleaning/"],
  ["Post-Construction Cleaning", "/north-vancouver/post-construction-cleaning/"],
];

const faqItems = [
  ["How much does restaurant cleaning cost in North Vancouver?", "Small takeout kitchens in North Vancouver start around $600. Full-service restaurants in North Vancouver with multiple hoods and extensive equipment may range from $1,500 to $3,500 or more. Quarterly service plan clients in North Vancouver get 15% off regular pricing."],
  ["How often does NFPA 96 require hood cleaning for North Vancouver restaurants?", "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume, and North Vancouver restaurants are held to that same standard by local fire inspectors."],
  ["What's included in a commercial kitchen deep clean in North Vancouver?", "A deep clean for a North Vancouver kitchen covers hood and exhaust cleaning, grease trap and drain service, equipment degreasing, surface sanitization, floor and wall cleaning, and ceiling and light fixture cleaning."],
  ["Do you clean grease traps in North Vancouver?", "Yes. Grease traps in North Vancouver restaurants get cleaned and flushed quarterly or as needed to prevent backups and drain failures."],
  ["Can North Vancouver restaurants book after-hours cleaning?", "Yes. Cleaning is scheduled early morning before you open or late evening after you close, 7 days a week, for restaurants across North Vancouver."],
  ["Do you provide documentation for Vancouver Coastal Health inspections in North Vancouver?", "Yes. Every clean in North Vancouver includes photos and a completion report, and hood cleaning comes with NFPA 96-compliant documentation for fire inspectors covering North Vancouver."],
  ["What products does Mint Sanitary use for restaurant cleaning in North Vancouver?", "We use eco-friendly, non-toxic, biodegradable, food-safe products in every North Vancouver kitchen we clean, including on equipment, counters, and floors."],
  ["How long does a restaurant deep clean take in North Vancouver?", "A small North Vancouver kitchen typically takes 3 to 4 hours. A full-service North Vancouver restaurant with multiple hood systems typically takes 6 to 8 hours."],
  ["Do you offer quarterly service plans for North Vancouver restaurants?", "Yes. Quarterly service plans for North Vancouver restaurants get 15% off regular pricing plus priority scheduling."],
  ["Which North Vancouver neighborhoods does Mint Sanitary serve?", "We serve restaurants throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights."],
  ["Do you clean food trucks based in North Vancouver?", "Yes. We clean food trucks operating in North Vancouver alongside restaurants, cafes, hotels, and institutional kitchens."],
  ["Can Mint Sanitary handle a same-day emergency clean before an inspection in North Vancouver?", "Yes. We offer rapid response and same-day or next-day booking for North Vancouver kitchens facing an upcoming inspection."],
  ["Is Mint Sanitary insured to clean commercial kitchens in North Vancouver?", "Yes. Our team is bonded, insured, and background-checked for every restaurant cleaning job in North Vancouver, backed by a 24-hour satisfaction guarantee."],
  ["Do you offer a discount for first-time restaurant cleaning customers in North Vancouver?", "Yes. First-time customers in North Vancouver get 10% off their first clean with code MINT26."],
  ["What's the difference between a one-time deep clean and a monthly plan for North Vancouver kitchens?", "A one-time deep clean in North Vancouver starts at $600 and covers a full top-to-bottom clean. Monthly maintenance cleans for high-volume North Vancouver kitchens are custom priced and typically cost less per visit since buildup stays lower between cleans."],
  ["Do you clean institutional kitchens in North Vancouver, like schools and hospitals?", "Yes. We clean institutional kitchens across North Vancouver, including schools, hospitals, and corporate cafeterias."],
  ["How far in advance should a North Vancouver restaurant book a hood cleaning?", "NFPA 96 sets a 1 to 3 month cleaning window depending on volume, so most North Vancouver restaurants book on a recurring schedule rather than waiting until an inspection is due. Rapid response is available for North Vancouver kitchens that need a faster turnaround."],
  ["Does Mint Sanitary serve areas near North Vancouver too?", "Yes. Alongside restaurant cleaning in North Vancouver, we also serve West Vancouver, Vancouver, and Burnaby."],
];

console.log("→ /north-vancouver/restaurant-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What's Included in Restaurant Cleaning in North Vancouver",
    cards: includedItems.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Process for Restaurant Cleaning in North Vancouver",
    intro: "Mint Sanitary provides restaurant cleaning in North Vancouver for:",
    steps: processSteps.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistHeading: "Who We Clean For in North Vancouver",
    checklistItems: whoNeedsItems,
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Choose Mint Sanitary for Restaurant Cleaning in North Vancouver",
    image: await uploadImage(
      "/commercial-kitchen-cleaning-north-vancouver.webp",
      "Restaurant and commercial kitchen cleaning in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing for Restaurant Cleaning in North Vancouver",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: ["We offer free estimates for every North Vancouver kitchen, so you know what a clean will cost before you book it."],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "North Vancouver Neighborhoods We Serve",
    body: [
      para(
        "Mint Sanitary provides restaurant cleaning throughout North Vancouver, including Lower Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, and Seymour Heights. We also serve nearby West Vancouver, Vancouver, and Burnaby for restaurants that operate in more than one location."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Services",
    body: relatedServices.flatMap(([title, href]) => [
      heading(title),
      paraWithLink("", "Learn more", href, ""),
    ]),
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
    heading: "Get Your Free North Vancouver Restaurant Cleaning Quote",
    body: "Restaurant cleaning in North Vancouver keeps your kitchen ready for Vancouver Coastal Health and fire inspections year round. Get a free estimate for hood cleaning, grease trap service, or a full deep clean at your North Vancouver kitchen, and use code MINT26 for 10% off your first visit.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "restaurant-cleaning", {
  title: "Restaurant Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "restaurant-cleaning"),
  heroHeading: "Restaurant Cleaning in North Vancouver",
  heroIntro:
    "Your North Vancouver kitchen is the heart of your food service business. It's also one of the most heavily inspected and regulated spaces you operate. Mint Sanitary provides restaurant cleaning in North Vancouver for kitchens from Lower Lonsdale to Lynn Valley to Edgemont Village, covering hood and exhaust cleaning, grease trap service, equipment degreasing, and full deep cleans. Vancouver Coastal Health conducts over 16,000 food facility inspections annually across the North Shore and Lower Mainland, and North Vancouver restaurants are part of that count every year.",
  heroImage: await uploadImage(
    "/commercial-kitchen-cleaning-north-vancouver.jpg",
    "Commercial kitchen cleaning in North Vancouver"
  ),
  metaTitle: "Restaurant Cleaning in North Vancouver | Mint Sanitary",
  metaDescription:
    "NFPA 96 hood cleaning, grease trap service, and food-safe deep cleans for restaurants in North Vancouver. Free estimates, 7 days a week.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver restaurant cleaning migrated");
