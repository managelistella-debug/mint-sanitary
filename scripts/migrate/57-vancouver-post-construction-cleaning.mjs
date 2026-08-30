import {
  key,
  refTo,
  para,
  heading,
  multiLinkPara,
  replaceAreaServiceDoc,
} from "./vancouver-lib.mjs";

const CITY = "vancouver";
const SLUG = "post-construction-cleaning";

/**
 * Source: vancouver-content/vancouver-pages/post-construction-cleaning.md
 * (verbatim copy, already approved). Placement decisions:
 *  - The 12-item "Complete Post-Construction Cleaning Checklist" becomes a
 *    single whatsIncluded card (one card, `items` holding the checklist).
 *  - "Health and Safety Hazards Addressed on Vancouver Job Sites" is a
 *    second title+body card grid, so it becomes a SECOND whatsIncluded
 *    section, matching how 28-nv-post-construction-cleaning.mjs handles the
 *    identical content (whatsIncluded is used twice on that page too).
 *  - "Post-Construction Window Cleaning in Vancouver" is one long prose
 *    block with no card/list shape of its own, so it's a richText section.
 *  - The source has TWO numbered sequences under "How Our Vancouver
 *    Post-Construction Cleaning Process Works": the verbose 3-phase
 *    breakdown, and the short "How the Process Starts" 6-step list. Only one
 *    processChecklist section is used per page, so the 3-phase breakdown
 *    (longer paragraphs) becomes a richText heading/paragraph sequence, and
 *    "How the Process Starts" (short "Title: sentence" steps) becomes the
 *    processChecklist section — the same split 28-nv-post-construction-
 *    cleaning.mjs uses for this exact dual-list shape.
 *  - Pricing tiers pair a clean price figure with a description, so the
 *    figure lives in `range` and the description in `body`.
 */

const checklistCard = [
  {
    _key: key("card"),
    title: "Complete Post-Construction Cleaning Checklist for Vancouver Properties",
    items: [
      "Removal of all construction debris and waste",
      "HEPA-filtered vacuuming of fine dust",
      "Interior window cleaning, including tracks and frames",
      "Detailed cabinetry, shelving, and closet cleaning",
      "Light fixture and ceiling fan cleaning",
      "Baseboard, trim, and door frame detailing",
      "Tile, grout, and countertop scrubbing",
      "Paint overspray and adhesive residue removal",
      "Bathroom sanitizing",
      "Kitchen cleaning, including inside appliances",
      "Floor cleaning (vacuum, mop, and polish)",
      "Final walk-through inspection",
    ],
  },
];

const hazardCards = [
  ["Silica Dust", "Cutting concrete, stone, or brick produces fine silica dust that's often invisible. Breathing it in over time can contribute to respiratory disease, so it requires HEPA filtration to remove properly."],
  ["VOCs", "Fresh paint, adhesives, sealants, and new flooring off-gas volatile organic compounds common on Vancouver renovation sites. Exposure can cause headaches and nausea, with longer-term effects from prolonged contact."],
  ["Lead and Asbestos", "Many Vancouver homes, particularly older character homes in neighbourhoods like Kerrisdale and Dunbar, were built before 1990. Renovating these buildings can disturb lead-based paint or asbestos-containing materials, which requires specialized handling rather than standard cleaning methods."],
  ["Airborne Particles", "Construction dust can stay airborne for hours or days after work stops. If it isn't captured with HEPA filtration, it can settle into and contaminate HVAC systems throughout a Vancouver home or building."],
  ["Surface Damage Risk", "New countertops, fresh paint, and newly installed flooring are vulnerable during cleanup. Improper cleaning methods can scratch surfaces, damage paint, or dull flooring that was just installed."],
].map(([title, body]) => ({ _key: key("card"), title, body, items: [] }));

const phases = [
  ["Rough Clean and Debris Removal", "This first phase clears the Vancouver job site so detailed cleaning can begin safely. It includes removing large debris, scrap materials, and packaging; sweeping and shoveling bulk dust and drywall fragments; clearing adhesives, tape residue, and stickers; disposing of leftover materials; and an initial wipe-down of major surfaces."],
  ["General and Detailed Cleaning", "The second phase moves top to bottom through the space. It covers dusting of ceilings, walls, and trim; HEPA vacuuming of floors, vents, and ductwork; interior window and track cleaning; wiping down cabinetry, shelving, and fixtures; cleaning light fixtures, switch plates, and outlets; scrubbing tile, grout, and countertops; and removing paint overspray and caulking residue."],
  ["Final and Punch-List Clean", "The last phase is a final polish of hard surfaces, fixtures, and hardware; streak-free glass cleaning; sanitizing bathrooms and kitchens; final floor cleaning; touch-up detailing on trim, baseboards, and door frames; and a walk-through inspection before the Vancouver property is handed over."],
];

const processStartSteps = [
  ["Request Your Free Estimate", "Tell us about your Vancouver project and the space."],
  ["On-Site or Virtual Assessment", "We review the scope before scheduling."],
  ["Our Team Arrives Prepared", "HEPA equipment and surface-specific products, matched to the job."],
  ["Phase-by-Phase Cleaning", "Rough clean, detailed clean, and final punch-list clean, in that order."],
  ["Quality Walk-Through Inspection", "We check the work against the checklist before we call it done."],
  ["Move-In or Handover Ready", "Your Vancouver space is ready for occupancy, showing, or opening."],
].map(([title, body]) => ({ _key: key("step"), title, body }));

const whyChooseItems = [
  ["Eco-Friendly Products", "Used throughout every phase of the Vancouver clean."],
  ["7-Day Availability, Booked Ahead", "We're available 7 days a week including evenings and weekends. Because crews travel from North Vancouver, book your Vancouver post-construction clean around your contractor's handover date rather than expecting a same-day slot."],
  ["Background-Checked Teams", "On every job."],
  ["Free Estimates", "Before work begins."],
  ["24-Hour Satisfaction Guarantee", "After the final walk-through."],
  ["Residential, Commercial, and Industrial Scale", "We handle single-unit condos, multi-floor commercial buildouts, and industrial spaces across Vancouver."],
  ["Strata and Concierge Coordination", "Built around Vancouver's dense strata buildings, including freight elevator bookings, visitor parking limits, and concierge sign-in for debris bins."],
  ["Built for Both Infill Builds and Character-Home Renovations", "Crews who know the dust-heavy pace of a Mount Pleasant or Fairview infill project and the different demands of a Kerrisdale character-home gut renovation."],
].map(([title, body]) => ({ _key: key("why"), title, body }));

const pricingTiers = [
  ["Condos and Small Renovations", "500 to 1,000 dollars", "Single-room remodels, bathroom or kitchen renovations, and small Vancouver condo units, common in buildings around Yaletown and the West End."],
  ["Average Homes", "1,000 to 2,500 dollars", "Full home renovations, multi-room remodels, and standard new construction homes, common throughout Kerrisdale and Dunbar."],
  ["Large Homes and Commercial", "2,500 to 5,000 dollars or more", "Large custom homes, multi-unit projects, commercial tenant improvements, and industrial spaces."],
].map(([title, range, body]) => ({ _key: key("tier"), title, range, body }));

const faqItems = [
  ["How much does post-construction cleaning cost in Vancouver?", "Pricing runs $500 to $1,000 for condos and small renovations, $1,000 to $2,500 for average homes, and $2,500 to $5,000 or more for large homes and commercial projects. The final number depends on square footage and how much dust and debris the job left behind."],
  ["How long does a post-construction clean take in Vancouver?", "A small condo renovation usually takes 4 to 8 hours, a full home build typically runs 1 to 2 days, and large commercial projects can take 3 to 5 days or more. We confirm the estimate after reviewing your space."],
  ["What does post-construction cleaning in Vancouver include?", "The full checklist covers debris removal, HEPA-filtered dust vacuuming, interior window cleaning, cabinetry and shelving detailing, light fixture cleaning, baseboard and trim detailing, tile and grout scrubbing, paint overspray and adhesive removal, bathroom sanitizing, full kitchen cleaning including inside appliances, floor cleaning, and a final walk-through inspection."],
  ["What's the difference between the rough clean and the final clean?", "The rough clean is phase one: clearing large debris, sweeping bulk dust, and pulling tape and adhesive residue so it's safe to work in the space. The final clean is phase three, a polish pass on hard surfaces, glass, and fixtures followed by a walk-through inspection before handover. Most jobs also get a middle phase of detailed top-to-bottom cleaning between the two."],
  ["How do you remove fine construction dust from a Vancouver job site?", "We use HEPA-filtered vacuums that capture 99.97% of particles 0.3 microns and larger, which is what it takes to get silica and drywall dust out of floors, vents, and ductwork rather than just moving it around. That matters most on Mount Pleasant and Fairview infill sites, where drywall dust tends to be heaviest."],
  ["How soon before move-in or occupancy should I book the clean?", "Book as soon as you have a firm completion date from your contractor, ideally a week or two out. Because our crews travel from North Vancouver, locking in a slot ahead of your handover date gives you a much better shot at the time slot you need."],
  ["Does the clean cover the whole unit, or just the visibly dusty areas?", "It covers the whole space: inside cabinets and closets, inside appliances, light fixtures, baseboards, and window tracks included, not just the surfaces that look dusty. Construction dust settles into places you can't see from the doorway."],
  ["Is construction debris removal included, or do you only clean?", "Debris removal is part of the rough clean phase, where large scrap, packaging, and leftover materials get cleared before detailed cleaning starts. Large-volume waste bins or dumpster hauling for bigger projects are something we scope with you at the estimate stage."],
  ["Do you remove silica dust and handle VOCs on Vancouver renovation sites?", "Yes. Cutting concrete, stone, or brick produces fine silica dust that HEPA filtration removes, and fresh paint, adhesives, and sealants off-gas VOCs that our cleaning process addresses as part of the standard clean."],
  ["Do you handle lead and asbestos in older Vancouver homes, like renovations in Kerrisdale?", "Many Vancouver homes, including character homes in Kerrisdale and Dunbar, were built before 1990 and can contain lead-based paint or asbestos materials once walls are opened up. That requires specialized handling rather than standard cleaning, so let us know your home's age and renovation scope when you request an estimate."],
  ["How do you get a cleaning crew into a Vancouver strata or condo building?", "We coordinate with property managers and concierge desks the same way any trade would, booking elevator access, visitor parking, and building sign-in ahead of the job. Tell us the building's requirements when you book so we can plan the crew's arrival around them."],
  ["Do I need to book a freight elevator or loading dock for the crew?", "If your building requires one for trades and deliveries, yes, and we're used to working within those windows. Let us know the booking process for your Downtown, Yaletown, or West End building and we'll plan the cleaning day around it."],
  ["Can you schedule the clean around my contractor's handover date?", "Yes, that's the normal way these jobs get booked. Give us your expected completion date as early as possible so we can hold a slot, since Vancouver scheduling depends on crew travel time from North Vancouver."],
  ["Do you clean Mount Pleasant and Fairview infill and new-build projects?", "Yes. These are some of the most active rezoning and infill construction areas in Vancouver right now, and we regularly clean new multiplexes and low-rise builds there before occupancy."],
  ["Do you clean Kerrisdale renovation projects?", "Yes. Kerrisdale's character home renovations often involve older materials and full room rebuilds, and we clean them the same way we clean any post-construction site, checklist and HEPA filtration included."],
  ["Are you available 7 days a week for Vancouver post-construction jobs?", "We're available 7 days a week including evenings and weekends. Same-day booking isn't guaranteed in Vancouver the way it is closer to our North Vancouver base, so booking a day or two ahead gives you the best chance at your preferred time."],
  ["Is there a satisfaction guarantee for Vancouver post-construction cleaning?", "Yes, a 24-hour satisfaction guarantee applies after the final walk-through on every Vancouver post-construction job."],
  ["Is MINT26 available for Vancouver post-construction cleaning?", "Yes, use code MINT26 for 10% off your first Vancouver post-construction clean."],
  ["Do you clean commercial and industrial post-construction sites in Vancouver?", "Yes. We work at residential, commercial, and industrial scale, including single-unit condos, multi-floor commercial buildouts, and industrial or warehouse spaces across Vancouver."],
  ["Do you offer post-construction window cleaning in Vancouver?", "Yes. It's specialized glass and frame cleaning for renovation and new-build windows, addressing paint overspray, adhesive residue, and silica fabrication dust with tools matched to tempered and Low-E coated glass, typically running $200 to $500 or more."],
].map(([question, answer]) => ({ _key: key("faq"), question, answer }));

async function run() {
  const sections = [
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "What's Included in Post-Construction Cleaning in Vancouver",
      cards: checklistCard,
    },
    {
      _key: key("sec"),
      _type: "whatsIncluded",
      heading: "Health and Safety Hazards Addressed on Vancouver Job Sites",
      intro: "Construction leaves behind hazards beyond visible mess, and Vancouver's mix of older character homes and heavy infill activity means our teams see all five of these regularly.",
      cards: hazardCards,
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Post-Construction Window Cleaning in Vancouver",
      body: [
        para("New and renovated windows on Vancouver job sites carry paint overspray, protective stickers and adhesive labels, caulk and sealant drips, construction dust and drywall particles, tape residue, and silica or glass fabrication dust on tempered surfaces. Tempered glass is heat-treated during manufacturing, and microscopic silica particles fuse to the surface in that process, so careless scraping causes permanent scratches. Many Vancouver new-construction windows carry Low-E thermal coatings, installed to meet BC Building Code energy efficiency standards, and abrasive pads or acidic cleaners can permanently damage these coatings and void manufacturer warranties."),
        para("Mint Sanitary uses soft-bristle brushes and 0000 steel wool instead of metal blades, low-pressure scraping at shallow angles, and a wet glass method with warm soapy water and food-grade plastic scrapers. Stubborn paint overspray gets chemical softening with eco-friendly paint thinner before gentle scraping, and HEPA-filtered vacuum systems contain silica dust throughout, in line with WorkSafeBC guidance and International Window Cleaning Association technical standards. Post-construction window cleaning in Vancouver typically runs $200 to $500 or more depending on scope, and improper DIY cleaning risks $7,000 to $15,000 in window replacement costs on multi-window projects, with Low-E replacement windows running $300 to $800 each if scratched during cleanup."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Signs Vancouver Properties Need This Service",
      body: [
        para("Mount Pleasant and Fairview have some of the fastest-moving rezoning and infill construction in Vancouver right now, single-family lots turning into low-rise apartment buildings and multiplexes within a couple of years. Every one of those projects ends the same way: drywall dust coating every surface, adhesive residue from new flooring, paint overspray on glass, and a strata council or building inspector expecting a clean space before final sign-off."),
        para("Kerrisdale's renovation work looks different but creates a similar mess. Character homes built decades ago get gutted down to the studs for additions or full rebuilds, and older plaster, trim, and flooring throw off more fine dust than a typical new-build wall system does."),
        para("Watch for a fine gray film on countertops and window sills days after the trades leave, tape residue and stickers still stuck to windows, caulk drips on new flooring, or a building manager holding up occupancy until the unit passes a walkthrough. Any of those means it's time for a post-construction clean, not a regular one."),
      ],
    },
    {
      _key: key("sec"),
      _type: "pricing",
      heading: "Vancouver Post-Construction Cleaning Prices",
      tiers: pricingTiers,
      notes: [
        "Timing varies by project size. A small Vancouver condo renovation might take 4 to 8 hours, a full home build typically runs 1 to 2 days, and large commercial projects can take 3 to 5 days or more.",
        "Post-construction window cleaning in Vancouver typically runs $200 to $500 or more, depending on scope. Small residential projects (10 to 15 windows) take 2 to 4 hours, medium homes (20 to 30 windows) take 4 to 8 hours, and large commercial projects (50+ windows) take 1 to 3 days.",
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Our Three-Phase Post-Construction Cleaning Process for Vancouver Properties",
      body: phases.flatMap(([title, body]) => [heading(title), para(body)]),
    },
    {
      _key: key("sec"),
      _type: "processChecklist",
      heading: "How the Process Starts",
      checklistItems: [],
      steps: processStartSteps,
    },
    {
      _key: key("sec"),
      _type: "whyChoose",
      heading: "Why Vancouver Homeowners/Businesses Choose Mint Sanitary",
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
        para("Vancouver's infill boom changes the math on post-construction cleaning in ways a single detached lot in North Vancouver doesn't. A Mount Pleasant or Fairview multiplex project often sits between two or three other active sites on the same block, so dust and debris drift in from next door even after your unit's build is finished. Strata buildings add another layer: a post-construction clean in a Yaletown or Downtown tower usually needs a booked freight elevator window and a disposal plan for bins, not just a driveway to load a truck."),
        para("Kerrisdale cuts the other way. Its older housing stock means renovation projects run into pre-1990 materials more often than new infill builds do, so lead and asbestos questions come up more frequently. And Vancouver's wet season, roughly October through April, gives fine dust less time to settle and dry outdoors before a final walkthrough, so interior HEPA filtration carries more of the work than it would on a dry summer job site."),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Related Cleaning Services in Vancouver",
      body: [
        multiLinkPara(["", ["Carpet Cleaning in Vancouver", "/vancouver/carpet-cleaning"]]),
        multiLinkPara(["", ["Window Cleaning in Vancouver", "/vancouver/window-cleaning"]]),
        multiLinkPara(["", ["Move-In Move-Out Cleaning in Vancouver", "/vancouver/move-in-move-out-cleaning"]]),
        multiLinkPara(["", ["Strata Cleaning in Vancouver", "/vancouver/strata-cleaning"]]),
      ],
    },
    {
      _key: key("sec"),
      _type: "richText",
      heading: "Neighbourhoods We Serve for Post-Construction Cleaning in Vancouver",
      body: [
        para("Mint Sanitary provides post-construction cleaning across Vancouver, including Kitsilano, Yaletown, Downtown Vancouver, West End, Mount Pleasant, Kerrisdale, Point Grey, Commercial Drive, Fairview, and Dunbar. Infill and rezoning construction concentrates most heavily in Mount Pleasant and Fairview, while Kerrisdale, Dunbar, and Point Grey see more character home renovations and additions. Downtown, Yaletown, and the West End bring their own version of the job: new condo towers and gut renovations inside strata buildings, where debris removal and elevator bookings matter as much as the clean itself. Renovation projects often pair well with our carpet cleaning in Vancouver, window cleaning in Vancouver, and move-in move-out cleaning in Vancouver services."),
      ],
    },
    { _key: key("sec"), _type: "faq", heading: "Frequently Asked Questions", items: faqItems },
    {
      _key: key("sec"),
      _type: "finalCta",
      heading: "Ready to Book Post-Construction Cleaning in Vancouver?",
      body: "Mint Sanitary's HEPA-equipped teams handle debris cleanup, dust removal, and streak-free window and glass care to get Vancouver properties ready for move-in or handover. Since our crews travel from North Vancouver, book ahead of your contractor's completion date for the best chance at your preferred time. Request a free estimate and see current pricing before you book. Use code MINT26 for 10% off your first service. View our rates. Call 236-688-3248.",
      ctaLabel: "Get a Free Estimate",
      ctaHref: "/rates",
    },
  ];

  await replaceAreaServiceDoc(CITY, SLUG, {
    area: refTo("area", CITY),
    cleaningType: refTo("cleaningType", SLUG),
    title: "Post-Construction Cleaning in Vancouver",
    heroHeading: "Post-Construction Cleaning in Vancouver",
    heroIntro: "Mount Pleasant and Fairview are two of Vancouver's busiest rezoning and infill construction zones, with new low-rise and multiplex buildings replacing single detached lots. Kerrisdale's renovation activity runs the other way: older character homes gutted and rebuilt room by room. Either way, the space needs a real post-construction clean before occupancy or move-in. Mint Sanitary clears fine dust, debris, and residue with HEPA equipment and eco-friendly, non-toxic products, rated 5 out of 5 from 50+ Google reviews. First-time customers get 10% off with code MINT26. Our crews are based in North Vancouver, so for Vancouver jobs we recommend booking ahead of your handover date rather than counting on same-day service.",
    metaTitle: "Post-Construction Cleaning in Vancouver | Mint Sanitary",
    metaDescription: "Post-construction cleaning in Vancouver for condos, infill builds, and renovations. HEPA dust removal, free estimates, 10% off with MINT26.",
    sections,
    published: true,
  });
}

run().then(() => console.log("done")).catch((e) => { console.error(e); process.exit(1); });
