import {
  key,
  refTo,
  para,
  multiLinkPara,
  replaceAreaServiceDoc,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "restaurant-cleaning";

/**
 * Source: vancouver-content/vancouver-pages/restaurant-cleaning.md
 * (verbatim copy, already approved). Placement decisions:
 *  - Pricing tiers each carry a short headline price ("From $600", "15% off
 *    regular pricing", "Custom pricing") separable from the descriptive
 *    sentence, so the headline lives in `range` and the description in
 *    `body`, matching how 29-nv-restaurant-cleaning.mjs handles this exact
 *    tier shape.
 *  - The Final CTA source sentence ends with a markdown link ("View our
 *    [rates](/rates) for full pricing details."); finalCta.body is a plain
 *    string with no rich-text support, so the link is kept as plain words
 *    with the CTA button still pointing at /rates.
 */

const includedCards = [
  ["Hood and Exhaust System Cleaning in Vancouver", "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume, and Vancouver kitchens are held to the same standard as anywhere else in the region. We remove grease, soot, and buildup from the hood face, ductwork, and dampers, and provide NFPA 96-compliant documentation your Vancouver fire inspector can review on the spot."],
  ["Grease Trap and Drain Cleaning for Vancouver Restaurants", "Grease traps get cleaned and flushed quarterly or as needed to prevent backups, odors, and drain failures in Vancouver kitchens, many of which run older plumbing that clogs faster under heavy grease loads."],
  ["Equipment Degreasing in Vancouver Kitchens", "Ovens, fryers, grills, range tops, and flat-top cookers across Vancouver get degreased with food-safe products that cut through baked-on grease without damaging cooking surfaces."],
  ["Surface Sanitization for Vancouver Kitchens", "Counters, walls, and backsplashes in Vancouver restaurants get sanitized with eco-friendly, food-safe products, safe to use around active food prep."],
  ["Floor and Wall Cleaning in Vancouver Restaurants", "A deep clean removes the buildup standard mopping misses and clears slip hazards that standing water and grease leave behind, a common issue in busy Vancouver kitchens with high foot traffic during dinner service."],
  ["Ceiling and Light Fixture Cleaning", "Grease and dust collect overhead too. We clean ceilings, light fixtures, and ventilation components as part of every full deep clean in Vancouver."],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const processSteps = [
  ["Pre-Assessment and Custom Plan", "We walk the kitchen, check grease buildup on hoods and equipment, and map traffic patterns before building a cleaning plan around your Vancouver location and schedule."],
  ["After-Hours Scheduling Across Vancouver", "Cleaning happens early morning before you open or late evening after you close, 7 days a week, across every Vancouver neighbourhood we serve. Because our crews travel from North Vancouver, we recommend booking ahead rather than assuming a same-day slot is open, especially for kitchens further from the bridges like Kitsilano or Point Grey."],
  ["Deep Cleaning Execution", "Cleaning runs top to bottom: hood and exhaust first, then equipment, then walls and floors, using eco-friendly food-safe products throughout your Vancouver kitchen."],
  ["Final Inspection and Documentation", "Before we leave your Vancouver kitchen, we do a final walkthrough, take photos, and hand over a completion report you can keep on file for your next Vancouver Coastal Health or fire inspection."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["7-Day-a-Week Availability", "Cleaning scheduled across Vancouver, including evenings, weekends, and holidays, booked ahead of your preferred slot rather than same-day."],
  ["Eco-Friendly, Food-Safe Products", "Non-toxic and biodegradable, safe to use around active food prep."],
  ["NFPA 96-Compliant Hood Cleaning", "Certified documentation for Vancouver kitchens, ready for your next fire inspection."],
  ["Vancouver Coastal Health Knowledge", "Working knowledge of inspection standards as they apply to Vancouver restaurants."],
  ["Strata and Building Coordination", "For restaurants inside Yaletown, Downtown, or West End condo towers, we work with building management on freight elevator bookings and loading dock windows so a hood or grease trap job doesn't stall at the front desk."],
  ["Commercial Strip Awareness", "On Commercial Drive and along Kitsilano's main corridors, we schedule around narrow loading zones and shared walls with neighboring businesses, keeping noise and odor contained during service hours."],
  ["Free Estimates and Transparent Pricing", "No surprises, no hidden fees, upfront pricing before any work begins."],
  ["10% Off Your First Clean", "New clients save with code MINT26."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const pricingTiers = [
  ["One-Time Deep Clean", "From $600", "Smaller Vancouver kitchens start at $600, and pricing scales up for larger Vancouver operations with more equipment and hood systems."],
  ["Quarterly Service Plans", "15% off regular pricing", "Most Vancouver restaurants benefit from a deep clean every 3 months. Service plan clients get 15% off regular pricing plus priority scheduling."],
  ["Monthly Maintenance Cleans", "Custom pricing", "Built for high-volume Vancouver kitchens, and these typically cost less than a full deep clean since less buildup accumulates between visits."],
].map(([title, range, body]) => ({ _key: key("tier"), title, range, body }));

const faqItems = [
  ["How much does restaurant cleaning cost in Vancouver?", "Small takeout kitchens in Vancouver start around $600. Full-service restaurants in Vancouver with multiple hoods and extensive equipment may range from $1,500 to $3,500 or more. Quarterly service plan clients in Vancouver get 15% off regular pricing."],
  ["How often does NFPA 96 require hood cleaning for Vancouver restaurants?", "NFPA 96 requires hood cleaning every 1 to 3 months, depending on cooking volume, and Vancouver restaurants are held to that same standard by local fire inspectors."],
  ["What's included in a commercial kitchen deep clean in Vancouver?", "A deep clean for a Vancouver kitchen covers hood and exhaust cleaning, grease trap and drain service, equipment degreasing, surface sanitization, floor and wall cleaning, and ceiling and light fixture cleaning."],
  ["Do you clean grease traps in Vancouver restaurants?", "Yes. Grease traps in Vancouver restaurants get cleaned and flushed quarterly or as needed to prevent backups and drain failures, which matters most in older buildings on stretches like Commercial Drive with aging plumbing."],
  ["Can Vancouver restaurants book after-hours cleaning?", "Yes. Cleaning is scheduled early morning before you open or late evening after you close, 7 days a week, for restaurants across Vancouver. Because crews travel over from North Vancouver, after-hours slots fill faster on short notice, so booking a day or two ahead helps."],
  ["Do you provide documentation for Vancouver Coastal Health inspections?", "Yes. Every clean in Vancouver includes photos and a completion report, and hood cleaning comes with NFPA 96-compliant documentation for fire inspectors covering Vancouver."],
  ["What products does Mint Sanitary use for restaurant cleaning in Vancouver?", "We use eco-friendly, non-toxic, plant-based, food-safe products in every Vancouver kitchen we clean, including on equipment, counters, and floors."],
  ["How long does a restaurant deep clean take in Vancouver?", "A small Vancouver kitchen typically takes 3 to 4 hours. A full-service Vancouver restaurant with multiple hood systems typically takes 6 to 8 hours."],
  ["Do you offer quarterly service plans for Vancouver restaurants?", "Yes. Quarterly service plans for Vancouver restaurants get 15% off regular pricing plus priority scheduling."],
  ["Is Mint Sanitary insured to clean commercial kitchens in Vancouver?", "Yes. Our team is background-checked, bonded, and insured for every restaurant cleaning job in Vancouver, backed by a 24-hour satisfaction guarantee and WorkSafeBC coverage."],
  ["Do you offer a discount for first-time restaurant cleaning customers in Vancouver?", "Yes. First-time customers in Vancouver get 10% off their first clean with code MINT26."],
  ["What's the difference between a one-time deep clean and a monthly plan for Vancouver kitchens?", "A one-time deep clean in Vancouver starts at $600 and covers a full top-to-bottom clean. Monthly maintenance cleans for high-volume Vancouver kitchens are custom priced and typically cost less per visit since buildup stays lower between cleans."],
  ["Do you clean food trucks operating in Vancouver?", "Yes. We clean food trucks that operate in Vancouver alongside restaurants, cafes, hotels, and institutional kitchens, and can schedule around whichever commissary or lot they're parked at."],
  ["Is same-day emergency cleaning available before an inspection in Vancouver?", "We prioritize inspection-driven requests, but same-day service in Vancouver isn't guaranteed the way it is closer to our North Vancouver base. Call 236-688-3248 as soon as you know an inspection is coming and we'll fit you into the fastest available slot given bridge travel time."],
  ["Which Vancouver neighbourhoods does Mint Sanitary serve for restaurant cleaning?", "We serve restaurants throughout Vancouver, including Commercial Drive, Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Fairview, Kerrisdale, Point Grey, and Dunbar."],
  ["Can you clean a restaurant inside a Yaletown or Downtown condo tower?", "Yes. We coordinate with building management on freight elevator bookings and loading dock access, which most ground-floor restaurants in Yaletown and Downtown towers need for hood cleaning equipment to get in and out."],
  ["Do you clean restaurants on Commercial Drive?", "Yes. Commercial Drive's restaurant strip is one of the areas we serve most, and we plan hood and grease trap visits around the shared walls and narrow loading access common to older buildings there."],
  ["How does scheduling work for a Kitsilano or West End restaurant given Mint Sanitary is based in North Vancouver?", "Our crews travel from North Vancouver over the Lions Gate or Ironworkers Memorial Bridge, so appointment windows for Kitsilano and West End restaurants are built around realistic travel time rather than promised as instant availability. Calling ahead at 236-688-3248 gets you the earliest slot that fits your schedule."],
  ["Do you clean institutional kitchens in Vancouver, like schools and hospitals?", "Yes. We clean institutional kitchens across Vancouver, including schools, hospitals, and corporate cafeterias, alongside independent restaurants and cafes."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Restaurant Cleaning in Vancouver",
      cards: includedCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("A Commercial Drive kitchen and a Yaletown tower restaurant show grease buildup differently, and it's worth knowing which signs apply where. On the Drive, many restaurants sit in older two- and three-storey commercial buildings with shared walls and exhaust risers that predate current fire code, so a hood that's overdue for cleaning shows up fast as odor bleeding into the espresso bar or vintage shop next door. In Yaletown and Downtown, restaurants are more often ground-floor tenants inside residential condo towers, where hood exhaust runs through shared building ductwork and any grease buildup becomes a strata concern, not just a kitchen one."),
        para("Kitsilano's beachfront cafes and restaurants see seasonal spikes, with patio and takeout volume climbing through summer and putting extra load on hoods, fryers, and grease traps that were sized for a quieter shoulder season. Older plumbing under Commercial Drive and Mount Pleasant kitchens backs up faster than newer installations once grease traps go past their service window. Standing grease film on floors near the flat-top or fryer line, visible soot at the hood face, and slow floor drains are the three signs that show up first regardless of neighborhood, and they're the ones a Vancouver Coastal Health inspector notices immediately."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Restaurant Cleaning Prices",
      tiers: pricingTiers,
      notes: [
        "We offer free estimates for every Vancouver kitchen, so you know what a clean will cost before you book it.",
      ],
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How Our Vancouver Restaurant Cleaning Process Works",
      checklistItems: [],
      steps: processSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Businesses Choose Mint Sanitary",
      items: whyChooseItems,
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
    { _key: key("sec"), _type: "testimonials" },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Why Vancouver's Climate and Market Make This Different",
      body: [
        para("Vancouver packs a wider range of kitchen setups into a smaller radius than most cities its size, and that changes how restaurant cleaning gets scheduled and executed. A Commercial Drive kitchen in a converted storefront runs its exhaust through original 1970s and 1980s ductwork shared with the units next door, so hood cleaning has to account for grease migration between businesses in a way a standalone building never does. A few kilometres away, a Yaletown or Downtown restaurant sits inside a high-rise strata building where the hood system, grease interceptor, and even the loading dock schedule are governed by the building's bylaws, not just the restaurant's lease, so a job that would take an hour to book in a standalone North Shore building can take a week of coordination with property management. Kitsilano's coastal exposure and patio-driven summer volume add another variable: grease traps and hood systems built for a steady year-round pace get pushed harder in July and August than they would be in a location without a beach two blocks away. None of this changes the pricing, but it does change how far ahead a Vancouver restaurant should book, particularly one relying on us to travel over from North Vancouver."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Commercial Cleaning in Vancouver", "/vancouver/commercial-cleaning"]]),
        multiLinkPara(["", ["Office Cleaning in Vancouver", "/vancouver/office-cleaning"]]),
        multiLinkPara(["", ["Post-Construction Cleaning in Vancouver", "/vancouver/post-construction-cleaning"]]),
        multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Restaurant Cleaning in Vancouver",
      body: [
        para("Mint Sanitary provides restaurant cleaning throughout Vancouver, including Commercial Drive, Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Fairview, Kerrisdale, Point Grey, and Dunbar. Commercial Drive's restaurant strip, the cafes and patios of Kitsilano, Yaletown's ground-floor towers, and Downtown's dining density are where most of our restaurant work concentrates, and we serve the smaller neighbourhood cafes and takeout kitchens across the rest of the city too."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Restaurant Cleaning in Vancouver?",
      body: "Restaurant cleaning in Vancouver keeps your kitchen ready for Vancouver Coastal Health and fire inspections year round. Call 236-688-3248 for a free estimate on hood cleaning, grease trap service, or a full deep clean at your Vancouver kitchen, and use code MINT26 for 10% off your first visit. View our rates for full pricing details.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Restaurant Cleaning in Vancouver",
    heroHeading: "Restaurant Cleaning in Vancouver",
    heroIntro: "Commercial Drive's restaurant strip, Kitsilano's cafes, Yaletown's patios, and the dining density of Downtown Vancouver all answer to the same inspector. Mint Sanitary provides restaurant cleaning in Vancouver covering hood and exhaust cleaning, grease trap service, equipment degreasing, and full kitchen deep cleans, rated 5 out of 5 across 50+ Google reviews. Vancouver Coastal Health conducts over 16,000 food facility inspections annually across the North Shore and Lower Mainland, and Vancouver kitchens are part of that count every year. Our crews travel from our North Vancouver base across the Lions Gate or Ironworkers Memorial Bridge, so same-day booking isn't guaranteed the way it is closer to home, but new customers still save 10% off their first clean with code MINT26.",
    metaTitle: "Restaurant Cleaning in Vancouver | Hood, Grease Trap & Deep Clean | Mint Sanitary",
    metaDescription: "Restaurant cleaning in Vancouver from Mint Sanitary: NFPA 96 hood and exhaust cleaning, grease trap service, and full kitchen deep cleans. Call 236-688-3248.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
