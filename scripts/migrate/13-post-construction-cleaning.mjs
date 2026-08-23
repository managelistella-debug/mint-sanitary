import {
  key,
  uploadImage,
  replaceDoc,
  heading,
  para,
  paraWithLink,
  imageBlock,
} from "./lib.mjs";

/**
 * /services/post-construction-cleaning — migrated from the hand-coded page
 * now parked at /services/post-construction-cleaning-original.
 *
 * This is one of the two reference pages the CMS section types were
 * designed around, so most of it maps directly:
 *  - ProcessTimelineChecklist → processChecklist, 1:1.
 *  - AccordionWithImage → whyChoose, 1:1.
 *  - The pricing tier grid → pricing, 1:1.
 *  - The "Post-Construction Window Cleaning" section is the literal
 *    reference example in the richText type doc comment, and is
 *    reproduced in full with its inline image.
 *
 * Two judgment calls:
 *  - The page has two separate card grids besides the ones above
 *    ("Health and Safety Hazards" and "What You Get"), but whatsIncluded
 *    can only appear once per page. "What You Get" reads closest to a
 *    literal "what's included" summary, so it took the whatsIncluded
 *    slot; "Health and Safety Hazards We Address" became a Rich Text
 *    section of heading/paragraph pairs instead, matching how the pilot
 *    pages handled a second informational grid.
 *  - No step titles carried a "Phase N:" prefix on this page, so nothing
 *    needed stripping.
 */

const phases = [
  ["Request Your Free Estimate", "Tell us about the project and the space, and we'll put together a free, transparent estimate before anything is scheduled."],
  ["On-Site or Virtual Assessment", "We review the scope of the project, on-site or virtually, so the quote and the schedule match what the space actually needs."],
  ["Our Team Arrives Prepared", "HEPA equipment and surface-specific products, matched to the job, so the right tools are on-site from the start."],
  ["Rough Clean and Debris Removal", "The first phase clears the site so the detailed work can happen safely. This includes removing large debris, scrap materials, and packaging; sweeping and shoveling bulk dust and drywall fragments; clearing adhesives, tape residue, and stickers; disposing of leftover materials; and an initial wipe-down of major surfaces."],
  ["General and Detailed Cleaning", "This phase moves top to bottom through the space. It covers dusting of ceilings, walls, and trim; HEPA vacuuming of floors, vents, and ductwork; interior window and track cleaning; wiping down cabinetry, shelving, and fixtures; cleaning light fixtures, switch plates, and outlets; scrubbing tile, grout, and countertops; and removing paint overspray and caulking residue."],
  ["Final and Punch-List Clean", "The last phase is a final polish of hard surfaces, fixtures, and hardware; streak-free glass cleaning; sanitizing bathrooms and kitchens; final floor cleaning; touch-up detailing on trim, baseboards, and door frames; and a walk-through inspection to confirm the space is ready to hand over."],
  ["Move-In or Handover Ready", "The space is ready for occupancy, showing, or opening, checked against our full cleaning checklist before we call it done."],
];

const checklist = [
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
];

const hazards = [
  ["Silica Dust", "Cutting concrete, stone, or brick produces fine silica dust that's often invisible to the eye. Breathing it in over time can contribute to respiratory disease, so it requires HEPA filtration to remove properly rather than just being swept or blown around."],
  ["VOCs", "Fresh paint, adhesives, sealants, and new flooring off-gas volatile organic compounds. Exposure can cause headaches and nausea in the short term, with longer-term effects from prolonged contact."],
  ["Lead and Asbestos", "Renovation work on buildings constructed before 1990 can disturb lead-based paint or asbestos-containing materials. This requires specialized handling, not standard cleaning methods."],
  ["Airborne Particles", "Construction dust can stay airborne for hours or even days after work stops. If it isn't captured with HEPA filtration, it can settle into and contaminate HVAC systems, spreading dust through the rest of the building."],
  ["Surface Damage Risk", "New countertops, fresh paint, and newly installed flooring are vulnerable during cleanup. Improper cleaning methods can scratch surfaces, damage paint, or dull flooring that was just installed."],
];

const whyChooseItems = [
  ["Eco-Friendly Products", "Used throughout every phase of the clean."],
  ["7-Day Availability", "To work around construction and handover schedules."],
  ["Residential, Commercial, and Industrial Scale", "From single-unit condos to multi-floor commercial buildouts to industrial facilities."],
  ["Background-Checked Teams", "On every job."],
  ["Free Estimates", "Before work begins."],
  ["24-Hour Satisfaction Guarantee", "After the final walk-through."],
];

const whatYouGet = [
  ["HEPA Dust Elimination", "HEPA-filtered vacuums capture 99.97% of particles 0.3 microns and larger, which is what separates post-construction cleaning from a standard deep clean."],
  ["Surface Protection", "Cleaning methods matched to the surface so new countertops, flooring, and finishes aren't damaged during the process."],
  ["VOC and Residue Removal", "Adhesive, caulk, and overspray residue removed without harsh chemicals that add to off-gassing."],
  ["Flexible Project Timing", "Scheduling built around your construction timeline and handover date."],
  ["Eco-Friendly Process", "From the products used to the disposal of waste."],
  ["MINT26", "Use code MINT26 for 10% off your first clean."],
];

const pricingTiers = [
  ["Condos and Small Renovations", "$500 – $1,000", "Single-room remodels, bathroom or kitchen renovations, and small condo units."],
  ["Average Homes", "$1,000 – $2,500", "Full home renovations, multi-room remodels, and standard new construction homes."],
  ["Large Homes and Commercial", "$2,500 – $5,000+", "Large custom homes, multi-unit projects, commercial tenant improvements, and industrial spaces."],
];

const faqItems = [
  ["How much does post-construction cleaning cost?", "Pricing runs $500 to $1,000 for condos and small renovations, $1,000 to $2,500 for average homes, and $2,500 to $5,000 or more for large homes and commercial projects. Post-construction window cleaning, when scoped on its own, typically runs $200 to $500 or more."],
  ["How long does post-construction cleaning take?", "A small condo renovation might take 4 to 8 hours, a full home build typically takes 1 to 2 days, and large commercial projects can take 3 to 5 days or more."],
  ["What's included in a post-construction clean?", "The full checklist covers debris removal, HEPA-filtered dust vacuuming, interior window cleaning, cabinetry and shelving detailing, light fixture cleaning, baseboard and trim detailing, tile and grout scrubbing, paint overspray and adhesive removal, bathroom sanitizing, full kitchen cleaning including inside appliances, floor cleaning, and a final walk-through inspection."],
  ["What does HEPA filtration remove?", "HEPA (High-Efficiency Particulate Air) filters capture 99.97% of particles 0.3 microns and larger, including fine construction dust and silica particles that standard vacuums push back into the air."],
  ["Do you handle VOCs from fresh paint and adhesives?", "Yes. Fresh paint, adhesives, sealants, and new flooring off-gas VOCs that can cause headaches and nausea in the short term. Our process addresses residue and buildup from these materials as part of the standard clean."],
  ["Do you clean up lead or asbestos on renovation sites?", "Renovation of buildings constructed before 1990 can disturb lead-based paint or asbestos-containing materials, which requires specialized handling. Let us know your building's age when requesting an estimate so we can plan accordingly."],
  ["Is post-construction window cleaning different from regular window cleaning?", "Yes. Post-construction windows carry paint overspray, adhesive residue, caulk drips, and construction dust that require specific tools, like soft-bristle brushes, 0000 steel wool, and the wet glass method, rather than standard squeegee cleaning. Tempered glass and Low-E coated glass are especially vulnerable to scratching from the wrong technique."],
  ["Can cleaning damage new countertops or flooring?", "Improper cleaning is a real risk to newly installed surfaces, which is why surface-specific products and methods matter. Our teams match cleaning methods to the material to avoid scratching countertops, damaging paint, or dulling flooring."],
  ["Are you available on weekends or short notice?", "Mint Sanitary offers 7-day availability to work around construction and handover schedules."],
  ["Do you offer a guarantee?", "Yes, a 24-hour satisfaction guarantee applies after the final walk-through, along with free estimates before any work begins."],
];

console.log("→ /services/post-construction-cleaning");

const sections = [
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Process",
    intro:
      "From your free estimate to move-in ready, here's exactly how a post-construction clean runs with Mint Sanitary.",
    steps: phases.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistHeading: "Complete Post-Construction Cleaning Checklist",
    checklistItems: checklist,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Health and Safety Hazards We Address",
    intro:
      "Construction leaves behind hazards that go beyond visible mess. Mint Sanitary's process is built around five specific risks.",
    body: hazards.flatMap(([title, body]) => [heading(title), para(body)]),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Post-Construction Window Cleaning",
    body: [
      para(
        "Windows take a specific kind of punishment during a build, and they need a specific kind of care to clean safely. As part of our post-construction service, Mint Sanitary handles the glass and frame cleanup that general janitorial crews often get wrong."
      ),
      heading("What Post-Construction Window Cleaning Addresses"),
      para(
        "New and renovated windows typically carry paint overspray (latex, enamel, and exterior finishes), protective stickers and adhesive labels, caulk and silicone sealant drips, construction dust, cement powder, and drywall particles, masking tape residue and plastic film, and silica or glass fabrication dust on tempered surfaces."
      ),
      heading("Why Tempered Glass Needs Careful Handling"),
      para(
        "Tempered glass is heat-treated during manufacturing, and microscopic silica particles fuse to the surface in the process. Careless scraping activates these particles and causes new scratches that are permanent and cannot be repaired. Many new construction windows also carry Low-E thermal coatings, installed to meet local building code energy efficiency standards. Abrasive pads, acidic cleaners, or improper scraping can permanently damage these coatings and void manufacturer warranties."
      ),
      await imageBlock(
        "/window-cleaning-post-construction-north-vancouver.webp",
        "Post-construction window cleaning removing paint overspray and construction residue"
      ),
      heading("Our Window Cleaning Method"),
      para(
        "Mint Sanitary uses soft-bristle brushes and 0000 steel wool instead of metal blades, low-pressure scraping at shallow angles, and a wet glass method that dampens the glass with warm soapy water before using food-grade plastic scrapers. For stubborn paint overspray, we apply chemical softening with eco-friendly paint thinner or denatured alcohol, letting it soften the paint over two to three minutes before gentle scraping. Rinsing is done with deionized water for a streak-free finish, and HEPA-filtered vacuum systems contain silica dust during the process."
      ),
      para(
        "The stakes for getting this right are real. Improper DIY cleaning risks $7,000 to $15,000 in window replacement costs on multi-window projects, and replacement windows with Low-E coatings run $300 to $800 per window if they're scratched or damaged during improper cleaning. Post-construction window cleaning through Mint Sanitary typically runs $200 to $500 or more, depending on the scope of the project, which is a fraction of the risk of a DIY attempt or a crew using the wrong tools."
      ),
      para(
        "This service applies across project types: new residential builds, multi-unit residential buildings, renovations and additions, commercial construction, strata common areas, and industrial and warehouse projects."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Homeowners and Builders Choose Mint Sanitary",
    image: await uploadImage(
      "/post-construction-kitchen-cleaning-north-vancouver.jpg",
      "Post-construction kitchen cleaned and ready"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "What You Get",
    cards: whatYouGet.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Post-Construction Cleaning Pricing",
    intro: "Pricing depends on the size and scope of the project.",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "Post-construction window cleaning, when scoped separately, typically runs $200 to $500 or more depending on the number and type of windows involved.",
      "Timing varies with project size too. A small condo renovation might take 4 to 8 hours, a full home build typically runs 1 to 2 days, and large commercial projects can take 3 to 5 days or more.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Where We Work",
    body: [
      paraWithLink(
        "Mint Sanitary provides post-construction cleaning across Greater Vancouver, including North Vancouver, West Vancouver, Vancouver, and Burnaby. For details on our process in North Vancouver specifically, including North Vancouver neighborhood coverage, see our ",
        "post-construction cleaning in North Vancouver",
        "/north-vancouver/post-construction-cleaning",
        " page."
      ),
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
    heading: "Get Your Free Post-Construction Cleaning Estimate",
    body: "Whether it's a single-room remodel or a multi-floor commercial buildout, our HEPA-equipped teams handle the dust, debris, and residue so the space is ready for move-in or handover. Request a free estimate and see current pricing before you book.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("cleaningType", "post-construction-cleaning", {
  title: "Post-Construction Cleaning Services",
  name: "Post-Construction Cleaning",
  // No tile blurb existed for this slug on either source page (see the
  // stub in 00-globals-and-stubs.mjs) — left undefined rather than
  // inventing copy.
  tileImage: await uploadImage(
    "/post-construction-cleaning-north-vancouver.jpg",
    "Post-construction cleaning in Greater Vancouver"
  ),
  hasOwnPage: true,
  heroHeading: "Post-Construction Cleaning Services",
  heroIntro:
    "After construction ends, a thorough post-construction clean is essential before move-in or opening day. Mint Sanitary handles renovation dust, construction debris, adhesive residue, and fine particles using HEPA equipment and eco-friendly products, on projects that range from a single condo remodel to a multi-floor commercial buildout across Greater Vancouver. Post-construction cleaning is a distinct process, with its own equipment, its own sequence, and its own safety considerations.",
  heroImage: await uploadImage(
    "/post-construction-cleaning-north-vancouver.jpg",
    "Post-construction cleaning in Greater Vancouver"
  ),
  metaTitle: "Post-Construction Cleaning Services | Mint Sanitary",
  metaDescription:
    "Post-construction cleaning across Greater Vancouver. HEPA dust removal, window and glass care after renovation. Free estimates, 10% off with MINT26.",
  sections,
  published: true,
});

console.log("\n✓ Post-construction cleaning migrated");
