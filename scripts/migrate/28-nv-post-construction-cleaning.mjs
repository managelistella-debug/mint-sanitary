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
 * /north-vancouver/post-construction-cleaning — migrated from the hand-coded
 * page now parked at /north-vancouver/post-construction-cleaning-original.
 *
 * All copy verbatim, "in North Vancouver" localization intact. Placement
 * decisions:
 *  - The "Phase 1: / Phase 2: / Phase 3:" numeric prefixes are stripped from
 *    the process step titles, per the one established exception from the
 *    pilot pages — the phase number is purely presentational.
 *  - The page has TWO separate numbered-step sections (the 3-phase process,
 *    and a later 6-step "How the Process Works"). processChecklist isn't
 *    repeatable, so it's used for the first (paired with the completed
 *    checklist as its sticky-checklist column) and the second becomes a
 *    heading/paragraph Rich Text sequence instead.
 *  - The huge "Post-Construction Window Cleaning" section (subheadings,
 *    paragraphs, and one inline image) has no single matching section type,
 *    so it becomes one Rich Text block with the image placed where it sat in
 *    the source.
 *  - The closing Service Areas paragraph links to three other North
 *    Vancouver pages (carpet, move-in/move-out, window cleaning) in one
 *    sentence — built as a manual multi-link block since paraWithLink only
 *    supports a single link per paragraph.
 */

function multiLinkPara(parts) {
  const markDefs = [];
  const children = [];
  for (const part of parts) {
    if (part.href) {
      const k = key("lnk");
      markDefs.push({ _key: k, _type: "link", href: part.href });
      children.push({ _type: "span", _key: key("s"), text: part.text, marks: [k] });
    } else {
      children.push({ _type: "span", _key: key("s"), text: part.text, marks: [] });
    }
  }
  return { _type: "block", _key: key("b"), style: "normal", markDefs, children };
}

const phases = [
  [
    "Rough Clean and Debris Removal",
    "This first phase clears the North Vancouver job site so detailed cleaning can begin safely. It includes removing large debris, scrap materials, and packaging; sweeping and shoveling bulk dust and drywall fragments; clearing adhesives, tape residue, and stickers; disposing of leftover materials; and an initial wipe-down of major surfaces.",
  ],
  [
    "General and Detailed Cleaning",
    "The second phase moves top to bottom through the space. It covers dusting of ceilings, walls, and trim; HEPA vacuuming of floors, vents, and ductwork; interior window and track cleaning; wiping down cabinetry, shelving, and fixtures; cleaning light fixtures, switch plates, and outlets; scrubbing tile, grout, and countertops; and removing paint overspray and caulking residue.",
  ],
  [
    "Final and Punch-List Clean",
    "The last phase is a final polish of hard surfaces, fixtures, and hardware; streak-free glass cleaning; sanitizing bathrooms and kitchens; final floor cleaning; touch-up detailing on trim, baseboards, and door frames; and a walk-through inspection before the North Vancouver property is handed over.",
  ],
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
  ["Silica Dust", "Cutting concrete, stone, or brick produces fine silica dust that's often invisible. Breathing it in over time can contribute to respiratory disease, so it requires HEPA filtration to remove properly."],
  ["VOCs", "Fresh paint, adhesives, sealants, and new flooring off-gas volatile organic compounds common on North Vancouver renovation sites. Exposure can cause headaches and nausea, with longer-term effects from prolonged contact."],
  ["Lead and Asbestos", "Many North Vancouver homes, particularly in established neighborhoods like Lower Lonsdale and Capilano, were built before 1990. Renovating these buildings can disturb lead-based paint or asbestos-containing materials, which requires specialized handling rather than standard cleaning methods."],
  ["Airborne Particles", "Construction dust can stay airborne for hours or days after work stops. If it isn't captured with HEPA filtration, it can settle into and contaminate HVAC systems throughout a North Vancouver home or building."],
  ["Surface Damage Risk", "New countertops, fresh paint, and newly installed flooring are vulnerable during cleanup. Improper cleaning methods can scratch surfaces, damage paint, or dull flooring that was just installed."],
];

const whyChooseItems = [
  ["Eco-Friendly Products", "Used throughout every phase of the North Vancouver clean."],
  ["7-Day Availability", "To work around North Vancouver construction and handover schedules."],
  ["Residential, Commercial, and Industrial Scale", "From single-unit North Vancouver condos to multi-floor commercial buildouts to industrial facilities."],
  ["Background-Checked Teams", "On every job."],
  ["Free Estimates", "Before work begins."],
  ["24-Hour Satisfaction Guarantee", "After the final walk-through."],
];

const whatYouGet = [
  ["HEPA Dust Elimination", "HEPA-filtered vacuums capture 99.97% of particles 0.3 microns and larger, which matters on North Vancouver renovation sites where fine drywall and silica dust settle fast."],
  ["Surface Protection", "Cleaning methods matched to the surface so new countertops, flooring, and finishes in your North Vancouver renovation aren't damaged during cleanup."],
  ["VOC and Residue Removal", "Adhesive, caulk, and overspray residue removed without harsh chemicals that add to off-gassing."],
  ["Flexible Project Timing", "Scheduling built around your North Vancouver construction timeline and handover date."],
  ["Eco-Friendly Process", "From the products used to the disposal of waste."],
  ["MINT26", "Use code MINT26 for 10% off your first North Vancouver post-construction clean."],
];

const pricingTiers = [
  ["Condos and Small Renovations", "$500 – $1,000", "Single-room remodels, bathroom or kitchen renovations, and small North Vancouver condo units, common in buildings around Lower Lonsdale."],
  ["Average Homes", "$1,000 – $2,500", "Full home renovations, multi-room remodels, and standard new construction homes, common throughout Lynn Valley and Deep Cove."],
  ["Large Homes and Commercial", "$2,500 – $5,000+", "Large custom homes, multi-unit projects, commercial tenant improvements, and industrial spaces."],
];

const processSteps = [
  ["Request Your Free Estimate", "Tell us about your North Vancouver project and the space."],
  ["On-Site or Virtual Assessment", "We review the scope before scheduling."],
  ["Our Team Arrives Prepared", "HEPA equipment and surface-specific products, matched to the job."],
  ["Phase-by-Phase Cleaning", "Rough clean, detailed clean, and final punch-list clean, in that order."],
  ["Quality Walk-Through Inspection", "We check the work against the checklist before we call it done."],
  ["Move-In or Handover Ready", "Your North Vancouver space is ready for occupancy, showing, or opening."],
];

const faqItems = [
  ["How much does post-construction cleaning cost in North Vancouver?", "Post-construction cleaning in North Vancouver runs $500 to $1,000 for condos and small renovations, $1,000 to $2,500 for average homes, and $2,500 to $5,000 or more for large homes and commercial projects."],
  ["How long does post-construction cleaning take in North Vancouver?", "A small North Vancouver condo renovation might take 4 to 8 hours, a full home build typically takes 1 to 2 days, and large commercial projects in North Vancouver can take 3 to 5 days or more."],
  ["What does post-construction cleaning in North Vancouver include?", "The full checklist covers debris removal, HEPA-filtered dust vacuuming, interior window cleaning, cabinetry and shelving detailing, light fixture cleaning, baseboard and trim detailing, tile and grout scrubbing, paint overspray and adhesive removal, bathroom sanitizing, full kitchen cleaning including inside appliances, floor cleaning, and a final walk-through inspection."],
  ["What is Phase 1 rough clean for North Vancouver construction cleanup?", "Phase 1 for North Vancouver job sites removes large debris, scrap, and packaging, sweeps and shovels bulk dust and drywall fragments, clears adhesives and tape residue, disposes of leftover materials, and does an initial wipe-down of surfaces."],
  ["What happens during Phase 2 detailed cleaning for North Vancouver renovations?", "Phase 2 covers top-to-bottom dusting of ceilings, walls, and trim, HEPA vacuuming of floors, vents, and ductwork, interior window and track cleaning, wiping cabinetry and fixtures, cleaning light fixtures and outlets, and scrubbing tile, grout, and countertops on North Vancouver properties."],
  ["What is included in the Phase 3 final clean for North Vancouver homes?", "Phase 3 includes final polish of hard surfaces and hardware, streak-free glass cleaning, sanitizing bathrooms and kitchens, final floor cleaning, touch-up detailing on trim and baseboards, and a walk-through inspection before your North Vancouver property is handed over."],
  ["Do you remove silica dust from North Vancouver renovation sites?", "Yes. Cutting concrete, stone, or brick on North Vancouver job sites produces fine silica dust that's often invisible and can contribute to respiratory disease if inhaled over time. We use HEPA filtration to remove it properly."],
  ["How do you handle VOCs after painting in North Vancouver homes?", "Fresh paint, adhesives, sealants, and new flooring off-gas VOCs on North Vancouver renovation sites, which can cause headaches and nausea. Our cleaning process addresses residue and buildup from these materials as part of the standard post-construction clean."],
  ["Do you handle lead and asbestos in older North Vancouver homes?", "Many North Vancouver homes, especially in established neighborhoods, were built before 1990. Renovating these properties can disturb lead-based paint or asbestos-containing materials, which requires specialized handling rather than standard cleaning. Let us know your North Vancouver home's age when requesting an estimate."],
  ["Can construction dust damage HVAC systems in North Vancouver homes?", "Yes. Construction dust can stay airborne for hours or days, and if it isn't captured with HEPA filtration it can settle into and contaminate HVAC systems in North Vancouver homes and buildings."],
  ["Will cleaning damage new countertops or flooring in my North Vancouver renovation?", "Improper cleaning methods can scratch new countertops, damage paint, or dull flooring. We match our methods to the surface on every North Vancouver job to avoid this."],
  ["Do you offer free estimates for North Vancouver post-construction cleaning?", "Yes, free estimates are available for all North Vancouver post-construction cleaning projects before any work begins."],
  ["Are you available 7 days a week in North Vancouver?", "Mint Sanitary offers 7-day availability for North Vancouver post-construction cleaning to work around construction and handover schedules."],
  ["Is there a satisfaction guarantee for North Vancouver post-construction cleaning?", "Yes, a 24-hour satisfaction guarantee applies after the final walk-through on North Vancouver post-construction cleaning jobs."],
  ["Do you clean commercial and industrial post-construction sites in North Vancouver?", "Yes. Mint Sanitary works at residential, commercial, and industrial scale in North Vancouver, from single-unit condos to multi-floor commercial buildouts to industrial facilities."],
  ["Is MINT26 available for North Vancouver post-construction cleaning?", "Yes, use code MINT26 for 10% off your first North Vancouver post-construction clean."],
  ["What is post-construction window cleaning in North Vancouver?", "It's specialized glass and frame cleaning for North Vancouver renovation and new-build windows, addressing paint overspray, adhesive residue, caulk drips, construction dust, and silica fabrication dust using tools and methods matched to tempered and Low-E coated glass."],
  ["Can improper window cleaning damage tempered glass in North Vancouver new builds?", "Yes. Tempered glass is heat-treated, and microscopic silica particles fuse to the surface during manufacturing. Careless scraping on North Vancouver windows activates these particles and causes permanent scratches that cannot be repaired."],
  ["What are Low-E coatings and why do North Vancouver builders need special care cleaning them?", "Low-E thermal coatings are applied to many North Vancouver new construction windows to meet BC Building Code energy efficiency standards. Abrasive pads, acidic cleaners, or improper scraping can permanently damage these coatings and void warranties."],
  ["How much does post-construction window cleaning cost in North Vancouver?", "Post-construction window cleaning in North Vancouver typically runs $200 to $500 or more, depending on the scope of the project."],
  ["How long does post-construction window cleaning take in North Vancouver?", "Small residential North Vancouver projects (10 to 15 windows) take 2 to 4 hours, medium homes (20 to 30 windows) take 4 to 8 hours, and large commercial North Vancouver projects (50+ windows) take 1 to 3 days."],
  ["What project types do you serve for post-construction window cleaning in North Vancouver?", "We serve new residential builds, multi-unit residential buildings, renovations and additions, commercial construction, strata common areas, and industrial and warehouse projects across North Vancouver."],
];

console.log("→ /north-vancouver/post-construction-cleaning");

const secondProcessBody = [];
for (const [title, body] of processSteps) {
  secondProcessBody.push(heading(title), para(body));
}

const sections = [
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Our Three-Phase Post-Construction Cleaning Process for North Vancouver Homes",
    steps: phases.map(([title, body]) => ({ _key: key("step"), title, body })),
    checklistHeading: "Complete Post-Construction Cleaning Checklist for North Vancouver Properties",
    checklistItems: checklist,
  },
  {
    _key: key("sec"),
    _type: "whatsIncluded",
    heading: "Health and Safety Hazards Addressed on North Vancouver Job Sites",
    intro:
      "Construction leaves behind hazards beyond visible mess, and North Vancouver's older housing stock combined with heavy new-build activity means our teams see all five of these regularly.",
    cards: hazards.map(([title, body]) => ({ _key: key("card"), title, body, items: [] })),
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Post-Construction Window Cleaning in North Vancouver",
    body: [
      para(
        "Windows take specific punishment during a North Vancouver build or renovation, and general cleaning crews often get the cleanup wrong in ways that cause permanent damage. This section covers what our post-construction window cleaning process addresses on North Vancouver job sites, from Norgate to Seymour Heights."
      ),
      heading("What Post-Construction Window Cleaning in North Vancouver Addresses"),
      para(
        "New and renovated windows in North Vancouver homes typically carry paint overspray (latex, enamel, and exterior finishes), protective stickers and adhesive labels, caulk and silicone sealant drips, construction dust, cement powder, and drywall particles, masking tape residue and plastic film, and silica or glass fabrication dust on tempered surfaces."
      ),
      heading("Why Tempered Glass in North Vancouver New Builds Needs Careful Handling"),
      para(
        "Tempered glass is heat-treated during manufacturing, and microscopic silica particles fuse to the surface in that process. Careless scraping activates these particles and causes new scratches that are permanent and cannot be repaired. Many North Vancouver new construction windows carry Low-E thermal coatings, installed to meet BC Building Code energy efficiency standards, as tracked through City of North Vancouver building permits. Abrasive pads, acidic cleaners, or improper scraping can permanently damage these coatings and void manufacturer warranties."
      ),
      await imageBlock(
        "/window-cleaning-post-construction-north-vancouver.webp",
        "Post-construction window cleaning removing paint overspray in North Vancouver"
      ),
      heading("Our Method for North Vancouver Post-Construction Window Cleaning"),
      para(
        "Mint Sanitary uses soft-bristle brushes and 0000 steel wool instead of metal blades on North Vancouver job sites, low-pressure scraping at shallow angles, and a wet glass method that dampens the glass with warm soapy water before using food-grade plastic scrapers. For stubborn paint overspray, we apply chemical softening with eco-friendly paint thinner or denatured alcohol, letting it soften the paint over two to three minutes before gentle scraping. Rinsing is done with deionized water for a streak-free finish, and HEPA-filtered vacuum systems contain silica dust throughout the process, in line with WorkSafeBC guidance on airborne particle control and International Window Cleaning Association (IWCA) technical standards."
      ),
      heading("The Cost of Getting Window Cleaning Wrong in North Vancouver"),
      para(
        "The stakes are real for North Vancouver homeowners and builders. Improper DIY cleaning risks $7,000 to $15,000 in window replacement costs on multi-window projects, and replacement windows with Low-E coatings cost $300 to $800 per window if they're scratched or damaged during improper cleaning. Glass.org technical standards and CHOA BC both point to the same conclusion: window glass in new construction needs specialized care, not a squeegee and a metal blade."
      ),
      heading("Pricing and Timing in North Vancouver"),
      para(
        "Post-construction window cleaning in North Vancouver typically runs $200 to $500 or more, depending on the scope of the project. Timing depends on the job size: small residential projects (10 to 15 windows) take 2 to 4 hours, medium North Vancouver homes (20 to 30 windows) take 4 to 8 hours, and large commercial projects (50+ windows) take 1 to 3 days."
      ),
      heading("Project Types We Serve"),
      para(
        "This service covers new residential builds, multi-unit residential buildings, renovations and additions, commercial construction, strata common areas, and industrial and warehouse projects throughout North Vancouver."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why North Vancouver Homeowners and Builders Choose Mint Sanitary",
    image: await uploadImage(
      "/post-construction-kitchen-cleaning-north-vancouver.jpg",
      "Post-construction kitchen cleaned and ready in North Vancouver"
    ),
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "What North Vancouver Clients Get",
    body: whatYouGet.flatMap(([title, body]) => [heading(title), para(body)]),
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Post-Construction Cleaning Pricing in North Vancouver",
    intro: "Pricing for North Vancouver post-construction cleaning depends on the size and scope of the project.",
    tiers: pricingTiers.map(([title, range, body]) => ({ _key: key("tier"), title, range, body })),
    notes: [
      "Timing varies by project size. A small North Vancouver condo renovation might take 4 to 8 hours, a full home build typically runs 1 to 2 days, and large commercial projects can take 3 to 5 days or more.",
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "How the Process Works in North Vancouver",
    body: secondProcessBody,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "North Vancouver Neighborhoods We Serve",
    body: [
      multiLinkPara([
        {
          text: "Mint Sanitary provides post-construction cleaning and post-construction window cleaning across North Vancouver, including Lower Lonsdale, Upper Lonsdale, Lynn Valley, Deep Cove, Edgemont Village, Capilano, Norgate, Seymour Heights, Dollarton, and Blueridge, as well as nearby West Vancouver, Vancouver, and Burnaby. Renovation projects often pair well with our ",
        },
        { text: "carpet cleaning in North Vancouver", href: "/north-vancouver/carpet-cleaning" },
        { text: ", " },
        { text: "move-in move-out cleaning in North Vancouver", href: "/north-vancouver/move-in-move-out-cleaning" },
        { text: ", and " },
        { text: "window cleaning in North Vancouver", href: "/north-vancouver/window-cleaning" },
        { text: " services." },
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
    heading: "Get Your Free North Vancouver Post-Construction Cleaning Estimate",
    body: "From rough debris cleanup to streak-free window and glass care, Mint Sanitary's HEPA-equipped teams get North Vancouver homes and job sites ready for move-in or handover. Request a free estimate and see current North Vancouver pricing before you book.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceDoc("areaService", "post-construction-cleaning", {
  title: "Post-Construction Cleaning in North Vancouver",
  area: refTo("area", "north-vancouver"),
  cleaningType: refTo("cleaningType", "post-construction-cleaning"),
  heroHeading: "Post-Construction Cleaning in North Vancouver",
  heroIntro:
    "After construction ends, a thorough post-construction clean is essential before move-in or opening. Mint Sanitary handles renovation dust, construction debris, adhesive residue, and fine particles using HEPA equipment and eco-friendly products on renovation and new-build projects throughout North Vancouver, from Lower Lonsdale condo remodels to full home builds in Lynn Valley. North Vancouver's mix of established character homes, new condo developments, and ongoing renovation work in neighborhoods like Deep Cove and Edgemont Village means post-construction cleanup varies a lot from job to job.",
  heroImage: await uploadImage(
    "/post-construction-cleaning-north-vancouver.jpg",
    "Post-construction cleaning in North Vancouver"
  ),
  metaTitle: "Post-Construction Cleaning North Vancouver | Mint",
  metaDescription:
    "Post-construction cleaning in North Vancouver, including window and glass care after renovation. HEPA dust removal, free estimates, 10% off with MINT26.",
  sections,
  published: true,
});

console.log("\n✓ North Vancouver post-construction cleaning migrated");
