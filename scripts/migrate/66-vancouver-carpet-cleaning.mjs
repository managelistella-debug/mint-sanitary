import {
  key,
  refTo,
  heading,
  para,
  paraWithLink,
  replaceAreaServiceDoc,
  multiLinkPara,
  customTile,
} from "./vancouver-lib.mjs";

/**
 * /vancouver/carpet-cleaning — new Vancouver page for the merged carpet
 * service (Area Rug Cleaning, Carpet Steam Cleaning, Carpet Stain Removal),
 * mirroring the structure of scripts/migrate/34-nv-carpet-cleaning.mjs but
 * with wholly new, verbatim-from-brief Vancouver copy
 * (vancouver-content/vancouver-pages/carpet-cleaning.md). No redirects
 * target this page yet, so anchor ids were chosen fresh (kebab-case of each
 * sub-service name) and just need to stay internally consistent with the
 * serviceTiles hrefs below.
 *
 * Anchor ids used: area-rug-cleaning, carpet-steam-cleaning,
 * carpet-stain-removal.
 *
 * Structural choices, following 34-nv-carpet-cleaning.mjs's precedent:
 *  - Each sub-service's own "## ... in Vancouver" block (intro + bulleted
 *    list + closing paragraph) became one Rich Text section carrying the
 *    anchorId, using a local bullet() helper for the lists, matching how the
 *    NV reference script represented the same kind of content.
 *  - Area Rug and Carpet Stain Removal both have clean itemized price lists
 *    in the .md, so those became dedicated `pricing` sections (unanchored,
 *    since they're the second section for that sub-service) with the
 *    trailing paragraph as `notes`. Carpet Steam Cleaning's pricing is one
 *    flowing sentence with a link and no tiers, so it stayed as a paragraph
 *    (via paraWithLink) inside that sub-service's own Rich Text section,
 *    exactly like NV's script did.
 *  - Each sub-service's numbered process list ("1. **Bold**: rest") maps
 *    cleanly to a `processChecklist` section per the migration brief, so
 *    unlike the NV reference (which predates that section type and used
 *    heading/para pairs instead), these three use processChecklist here.
 *  - All three sub-service blocks (intro/pricing/process) are grouped
 *    together in page order, matching the NV reference's grouping rather
 *    than the .md's literal top-to-bottom "What's Included / Prices /
 *    Process" topic ordering — grouping by sub-service means clicking a tile
 *    anchor lands you next to that sub-service's own pricing and process,
 *    not on an unrelated later section.
 *  - The shared closing paragraph about hot water extraction stats (moisture
 *    removal / allergen reduction) that sits at the end of the .md's Process
 *    section applies to all three sub-services, so it became its own
 *    headingless Rich Text paragraph immediately after the three grouped
 *    blocks.
 *  - "Signs Vancouver Properties Need This Service" uses a bullet list in
 *    the .md, so per the migration brief it became one Rich Text section
 *    with one para() per bullet line (Portable Text has no bare bullet type
 *    available here beyond the local bullet() helper, but the brief's
 *    fallback rule for this specific section is one paragraph per line).
 *  - "Why Vancouver Homeowners Choose Mint Sanitary" is a bullet list with
 *    no bold label in the .md, so each bullet got a short generic title
 *    (its own subject, not invented) with the full bullet text as body,
 *    matching how 34-nv-carpet-cleaning.mjs's own whyChoose items are
 *    titled.
 *  - Per the migration brief, "Every Mint Cleaning Includes" is a shared
 *    global box and is not represented as its own section anywhere.
 */

console.log("→ /vancouver/carpet-cleaning");

/** Bullet list item (RichTextSection's PortableText config renders listItem: "bullet"). */
function bullet(text) {
  return {
    _type: "block",
    _key: key("b"),
    style: "normal",
    listItem: "bullet",
    level: 1,
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

function step(title, body) {
  return { _key: key("step"), title, body };
}

/* ── Tile grid: "What's Included in Carpet Cleaning in Vancouver" ── */
const tileServices = [
  {
    title: "Area Rug Cleaning",
    href: "#area-rug-cleaning",
    description:
      "Hand-wash cleaning for delicate area rugs using specialized techniques that preserve color and texture, including Persian, Turkish, wool, and handmade rugs. Free pickup and delivery available.",
  },
  {
    title: "Carpet Steam Cleaning",
    href: "#carpet-steam-cleaning",
    description:
      "Deep cleaning using hot water extraction to remove embedded dirt, allergens, and stains from residential and commercial carpet, priced per room starting at $60.",
  },
  {
    title: "Carpet Stain Removal",
    href: "#carpet-stain-removal",
    description:
      "Expert stain removal for pet accidents, food spills, wine, ink, and other stubborn marks using targeted treatments and 200 to 500 PSI extraction equipment.",
  },
  {
    title: "Drapes & Curtains Cleaning",
    href: "/vancouver/drapes-curtains-cleaning",
    description:
      "Professional cleaning for all fabric types to remove dust, allergens, and odors while maintaining fabric integrity.",
  },
];

const tileEntries = [];
for (const t of tileServices) {
  tileEntries.push(await customTile(t));
}

/* ── Area Rug Cleaning ──────────────────────────────────────────── */
const rugTypes = [
  "Persian and Oriental rugs",
  "Wool rugs and silk rugs",
  "Synthetic, Kilim, and tribal rugs",
  "Shag, berber, and textured rugs",
  "Natural fiber rugs, including jute, sisal, and seagrass",
  "Antique and heirloom rugs",
];

const rugProcessSteps = [
  step(
    "Free assessment and inspection",
    "We inspect the rug in your Vancouver home, test for dye stability, identify any damage, and plan the safest approach for that specific rug."
  ),
  step(
    "Pickup and transport",
    "For most Vancouver addresses, we roll, wrap, and transport the rug to our facility. Rugs too large or delicate to move safely can be cleaned in-home instead."
  ),
  step(
    "Hand-wash cleaning",
    "We pre-spot stains, hand-wash with plant-based non-toxic solutions, use low-moisture extraction, and rinse fully so no residue is left behind."
  ),
  step(
    "Controlled drying and return",
    "The rug dries in a climate-controlled facility, typically 3 to 5 days, then goes through a quality check before free delivery back to your Vancouver home."
  ),
];

const rugPricingTiers = [
  { _key: key("tier"), title: "Synthetic rugs", range: "$1 to $4 per square foot", body: "" },
  { _key: key("tier"), title: "Wool rugs", range: "$3 to $8 per square foot", body: "" },
  { _key: key("tier"), title: "Silk and Oriental rugs", range: "$5 to $8+ per square foot", body: "" },
  { _key: key("tier"), title: "Optional add-ons", range: "", body: "pet treatment, protectant, rush drying" },
];

/* ── Carpet Steam Cleaning ─────────────────────────────────────── */
const steamWhatsIncluded = [
  "Professional pre-inspection and carpet fiber assessment",
  "Eco-friendly pre-treatment of stains and high-traffic zones",
  "Commercial-grade hot water extraction cleaning",
  "Spot treatment and light furniture moving",
  "Detailed drying guidance and a satisfaction guarantee",
];

const steamProcessSteps = [
  step(
    "Pre-inspection and assessment",
    "We identify high-traffic zones and stains, and test delicate or wool carpet for colorfastness before treatment."
  ),
  step(
    "Targeted pre-treatment",
    "Eco-friendly pre-treatment goes on for 10 to 15 minutes. Pet odors get enzymatic pre-treatment to neutralize urine compounds at the source."
  ),
  step(
    "Hot water extraction",
    "Commercial-grade equipment injects hot water and cleaning solution while extracting the dirty water, typically with 2 to 3 passes per section."
  ),
  step(
    "Grooming, final extraction, and drying setup",
    "We groom the pile, make final extraction passes, and set up airflow. Most Vancouver carpet dries within 6 to 12 hours."
  ),
];

/* ── Carpet Stain Removal ──────────────────────────────────────── */
const stainsWeTreat = [
  "Beverage stains: wine, coffee, tea, soda, and juice",
  "Food stains: chocolate, tomato sauce, grease, and oils",
  "Pet stains: urine, vomit, feces, and odor",
  "Organic stains: blood, grass, and mud",
  "Personal care stains: lipstick, nail polish, and marker",
  "Set-in stains from weeks or months ago",
];

const stainsCantRemove = [
  "Bleach or chemical damage",
  "Fiber melting from heat damage",
  "Very old dye-based marker or ink stains",
  "Rust and mineral stains, in some cases",
];

const stainProcessSteps = [
  step(
    "Assessment",
    "We examine the stain under normal and UV light, estimate its age, and check carpet fiber type before choosing a treatment."
  ),
  step(
    "Pre-treatment",
    "An eco-friendly pre-spray goes on based on stain chemistry. Pet stains get enzymatic treatment, and we respect proper dwell time."
  ),
  step(
    "Extraction",
    "Using professional-grade equipment, we perform hot water or hot carbonated extraction to pull dissolved stain particles out of the carpet."
  ),
  step(
    "Secondary spot treatment",
    "Stubborn stains get a secondary treatment formula and focused extraction. Some need two or three applications."
  ),
  step(
    "Final inspection",
    "We confirm results under proper lighting and give drying guidance. Optional carpet protectant can be added."
  ),
];

const stainPricingTiers = [
  { _key: key("tier"), title: "Single stain removal", range: "$120 to $180", body: "" },
  { _key: key("tier"), title: "Multiple stains (3+)", range: "$200 to $280", body: "" },
  { _key: key("tier"), title: "Pet stain and odor treatment", range: "$150 to $240", body: "" },
  { _key: key("tier"), title: "Optional carpet protectant", range: "$20 to $40", body: "" },
];

/* ── Signs Vancouver Properties Need This Service ─────────────── */
const signs = [
  "Downtown and Yaletown condo carpet often shows a worn path from the unit door to the elevator lobby, and repeated damp-shoe traffic on that stretch flattens the pile and holds odor faster than carpet in a house with a mudroom to catch it first.",
  "Character homes in Point Grey and Dunbar frequently still have the carpet that was installed with the house, sometimes 15 to 20 years old, in bedrooms or a basement rec room, and it has only ever been vacuumed.",
  "A Kerrisdale or Dunbar house with a dog or young kids shows a visible high-traffic path through the hallway and in front of the kitchen within a year or two.",
  "An area rug over hardwood in a Kitsilano or Mount Pleasant character home can look dull and lose texture even when the surrounding floor still looks fine, because dirt works down through the pile into the backing where a vacuum can't reach it.",
  "A musty smell after a stretch of rain usually means moisture got into the pad, and it shows up in a ground-floor Kitsilano rental as often as an older Point Grey basement.",
  "Staining near a condo's balcony door track or entryway, from rain-soaked shoes and umbrellas, on carpet that never fully dries between wet days.",
];

/* ── Why Vancouver Homeowners Choose Mint Sanitary ──────────────── */
const whyChooseItems = [
  ["Eco-Friendly Products", "Eco-friendly, non-toxic products safe for kids and pets in every home we clean."],
  ["Vetted Technicians", "Background-checked, bonded, and insured technicians on every job."],
  [
    "Satisfaction Guarantee",
    "24-hour satisfaction guarantee. If a spot needs a second pass after we leave, we come back and fix it at no charge.",
  ],
  [
    "Book Ahead for the Fastest Slot",
    "Available 7 days a week. Because our crews travel from North Vancouver over the Lions Gate or Ironworkers Memorial Bridge, book ahead for the fastest available slot rather than expecting a same-day fit.",
  ],
  [
    "Condo and Strata Scheduling",
    "We work around condo and strata scheduling in Yaletown, downtown, and West End towers, including concierge sign-in and elevator booking windows.",
  ],
  [
    "Floor Protection for Character Homes",
    "For character homes in Point Grey, Dunbar, and Kerrisdale, we lay down floor protection around area rugs and along carpet edges before extraction equipment goes in, keeping original hardwood clear of overspray.",
  ],
  [
    "Flexible Rug Pickup",
    "Rug pickup gets scheduled around a building's loading dock hours in a tower, or straight to the driveway for a house, whichever fits the property.",
  ],
  ["Transparent Pricing", "Free estimates and transparent pricing, with no charges added once the job starts."],
];

/* ── FAQ ─────────────────────────────────────────────────────────── */
const faqItems = [
  [
    "How often should carpets be professionally cleaned in Vancouver?",
    "Most homes do well with cleaning every 12 to 18 months. With pets or kids in the house, every 6 to 12 months keeps odors and allergens under control, which matters more in a coastal climate where carpet holds onto moisture longer than it would somewhere drier.",
  ],
  [
    "Do you offer same-day carpet cleaning in Vancouver?",
    "Sometimes, but it isn't guaranteed the way it is closer to our North Vancouver base. Our crews travel over the Lions Gate or Ironworkers Memorial Bridge to reach Vancouver, so call 236-688-3248 and we'll fit you into the fastest available slot, which is often next-day.",
  ],
  [
    "Do you offer commercial carpet cleaning in Vancouver?",
    "Yes. We clean carpet in Vancouver offices and commercial hallways as well as homes and condos, and we can work around business hours to avoid disrupting your day.",
  ],
  [
    "Are your cleaning products safe for kids and pets?",
    "Yes. All products we use are eco-friendly, plant-based, and non-toxic, with no harsh chemicals or fumes. Treated areas are safe once dry.",
  ],
  [
    "What is carpet steam cleaning?",
    "It's the common name for hot water extraction, the deep-cleaning method carpet manufacturers require for warranty protection. We heat water to 200 to 230°F, inject it with an eco-friendly cleaning solution, and extract it with commercial-grade equipment, reaching dirt and allergens a vacuum can't touch.",
  ],
  [
    "How long does carpet steam cleaning take?",
    "A typical 3-bedroom home takes 2 to 4 hours, depending on square footage and carpet condition. A one-bedroom Yaletown or downtown condo usually takes less. We'll confirm a specific timeline during your free estimate.",
  ],
  [
    "What's the drying time after carpet steam cleaning?",
    "Most carpet dries within 6 to 12 hours with good airflow. We set up fans and give you specific guidance; just avoid placing heavy furniture back for at least 6 hours.",
  ],
  [
    "Will carpet steam cleaning help with allergens in my Vancouver home or condo?",
    "Yes. Hot water extraction reduces dust mites by roughly 87% and removes 94%+ of allergens, including pet dander, pollen, and mold spores, which matters in a shared-air condo building or a house that keeps its windows closed through the wet season.",
  ],
  [
    "Can I steam clean a new carpet installation?",
    "Yes, but we recommend waiting 6 to 8 weeks after installation so the new-carpet sizing treatment can set properly first.",
  ],
  [
    "How quickly should I call for stain removal?",
    "The faster, the better. Fresh spills respond best to treatment within hours. Calling within 24 hours of a spill gives us the best chance at complete removal, though we successfully treat set-in stains that have been sitting for weeks too.",
  ],
  [
    "Can you remove pet stains permanently?",
    "Yes, in most cases. Pet urine contains uric acid crystals that can reactivate if not fully removed. We use enzymatic treatments specifically designed to break down these crystals and eliminate odor at the source, which matters in a small condo unit where there isn't much distance between the stain and daily foot traffic.",
  ],
  [
    "How much does carpet stain removal cost?",
    "Single stain removal runs $120 to $180, multiple stains (3+) run $200 to $280, and pet stain plus odor treatment runs $150 to $240. All quotes are free, and new customers can use code MINT26 for 10% off.",
  ],
  [
    "How much does area rug cleaning cost?",
    "Pricing ranges from $1 to $8+ per square foot depending on material. Synthetic rugs start at $1 to $4 per square foot, wool at $3 to $8 per square foot, and delicate Oriental or silk rugs at $5 to $8+ per square foot. Call 236-688-3248 for a specific quote.",
  ],
  [
    "Do you offer pickup and delivery for area rug cleaning in Vancouver?",
    "Yes. Free pickup and delivery comes with qualifying orders, whether that means carrying a rug down from a Yaletown high-rise unit or picking one up from a Kerrisdale driveway. We'll confirm during your free estimate call whether your address qualifies.",
  ],
  [
    "Is professional rug cleaning safe for antique and wool rugs?",
    "Yes, when done by trained professionals. Antique and wool rugs need specialized care. Our team tests dyes and inspects for fragile areas before cleaning, adjusting the process to protect heirloom pieces and preserve wool's softness and color.",
  ],
  [
    "Can you clean carpet in a condo or strata building in downtown Vancouver or Yaletown?",
    "Yes. We coordinate with concierge sign-in and elevator booking windows ahead of time, and we bring equipment sized to fit a standard residential elevator. Let us know your building's rules when you book so we can plan the visit around them.",
  ],
  [
    "Do you clean original carpet in older character homes in Point Grey, Dunbar, or Kerrisdale?",
    "Yes. Original carpet in an older home often needs a gentler pre-treatment and more careful colorfastness testing than newer synthetic carpet, and our team adjusts for that during the free assessment.",
  ],
  [
    "Is there a discount for first-time carpet cleaning customers in Vancouver?",
    "Yes. New customers can use code MINT26 for 10% off their first clean, whether that's a full steam clean, an area rug, or stain treatment.",
  ],
  [
    "What happens if I'm not happy with the carpet cleaning?",
    "Every job comes with a 24-hour satisfaction guarantee. If something needs a second pass after we leave, tell us within 24 hours and we'll come back and fix it at no charge.",
  ],
];

const sections = [
  {
    _key: key("sec"),
    _type: "serviceTiles",
    heading: "What's Included in Carpet Cleaning in Vancouver",
    intro:
      "Mint Sanitary's carpet cleaning in Vancouver covers three sub-services, each with its own process and pricing below.",
    tiles: [],
    customTiles: tileEntries,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Area Rug Cleaning in Vancouver",
    anchorId: "area-rug-cleaning",
    body: [
      para(
        "A character home in Dunbar or Point Grey often comes with a rug that's been in the family for years, an Oriental or wool piece laid over original hardwood. In Yaletown or the West End, the more common area rug sits over laminate or polished concrete in a condo unit, catching grit tracked in from the hallway and elevator lobby. Either way, hand washing is the method that gets dirt out without damaging the fibers or the floor underneath."
      ),
      heading("Rug types we clean"),
      ...rugTypes.map(bullet),
      para(
        "For antique rugs, our team tests dye stability and inspects for fragile areas before cleaning starts, and adjusts the process to protect the piece. A generic carpet cleaner without that training shouldn't be trusted with an heirloom."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing for Area Rug Cleaning in Vancouver",
    tiers: rugPricingTiers,
    notes: [
      "A 9x12 Persian rug covers 108 square feet. At $6 per square foot, mid-range Oriental rug pricing, the total runs around $650 to $700. Free pickup and delivery comes with qualifying orders for Vancouver addresses, so you don't have to move a heavy rug yourself. For an exact quote, call 236-688-3248 or email hello@mintsanitary.com. First-time customers can use code MINT26 for 10% off.",
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Area Rug Cleaning, Step by Step",
    checklistItems: [],
    steps: rugProcessSteps,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Carpet Steam Cleaning in Vancouver",
    anchorId: "carpet-steam-cleaning",
    body: [
      para(
        "Older character homes in Kerrisdale and Point Grey often still have the original wall-to-wall carpet in bedrooms and on the stairs, carpet that's 15 to 20 years old and has never had anything stronger than a vacuum run over it. Hot water extraction is the deep clean that carpet has been missing, and it's the same method that keeps a newer install under warranty in a Fairview or Yaletown condo."
      ),
      heading("What's included"),
      ...steamWhatsIncluded.map(bullet),
      paraWithLink(
        "Carpet steam cleaning in Vancouver is priced at $60 per room. Final cost depends on total rooms, traffic level, stain severity, and add-ons like pet odor treatment. Visit our ",
        "rates page",
        "/rates",
        " for details."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Carpet Steam Cleaning, Step by Step",
    checklistItems: [],
    steps: steamProcessSteps,
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Carpet Stain Removal in Vancouver",
    anchorId: "carpet-stain-removal",
    body: [
      para(
        "A one-bedroom unit in Yaletown or the West End doesn't leave much distance between the dog bed and the carpet, so a pet accident gets stepped on and spread before anyone notices. In a Kerrisdale or Dunbar house, the more common call is wine from a dinner party or mud tracked in from the yard. Either way, the sooner we get to it, the better the odds of getting it out completely."
      ),
      heading("Types of stains we treat"),
      ...stainsWeTreat.map(bullet),
      heading("Stains that typically can't be removed"),
      ...stainsCantRemove.map(bullet),
      para(
        "We'll assess your stain during a free estimate at your Vancouver home and give you a straight answer about removal odds. We won't promise a result we can't deliver."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "pricing",
    heading: "Pricing for Carpet Stain Removal in Vancouver",
    tiers: stainPricingTiers,
    notes: [
      "Call 236-688-3248 with stain details and we'll get you scheduled for the fastest available slot; we work seven days a week. If a treated stain returns, let us know and we'll retreat it at no charge.",
    ],
  },
  {
    _key: key("sec"),
    _type: "processChecklist",
    heading: "Carpet Stain Removal, Step by Step",
    checklistItems: [],
    steps: stainProcessSteps,
  },
  {
    _key: key("sec"),
    _type: "richText",
    body: [
      para(
        "Hot water extraction removes 85 to 95% of moisture from carpet and rugs, so Vancouver carpet typically dries in 4 to 6 hours after stain treatment and 6 to 12 hours after a full steam clean, compared to 24 or more hours after a rental machine. Studies show hot water extraction reduces dust mites by roughly 87% and removes 94%+ of allergens, including pet dander, pollen, and mold spores."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Signs Vancouver Properties Need This Service",
    body: signs.map((s) => para(s)),
  },
  {
    _key: key("sec"),
    _type: "whyChoose",
    heading: "Why Vancouver Homeowners Choose Mint Sanitary",
    items: whyChooseItems.map(([title, body]) => ({ _key: key("why"), title, body })),
  },
  { _key: key("sec"), _type: "testimonials" },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Why Vancouver's Climate and Market Make This Different",
    body: [
      para(
        "Vancouver's carpet cleaning needs split along the age and type of the building more than almost any other service on this site. A character home in Point Grey or Dunbar built decades ago often still has its original subfloor and an older carpet pad, and a pad that's already absorbed years of coastal humidity holds onto new moisture faster during the wet season, which runs roughly October through April. A Yaletown or downtown tower built more recently has mechanical ventilation that controls humidity better, so carpet in a unit dries faster after a clean, but access is the harder variable: a strata building's elevator booking window and loading dock hours decide how much equipment can move in and out in a given appointment slot, not the weather. That means scheduling around building rules matters as much for carpet cleaning in a Fairview or West End tower as drying time matters for a Kerrisdale or Point Grey house with an older pad underneath."
      ),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Related Cleaning Services in Vancouver",
    body: [
      multiLinkPara(["", ["Drapes and Curtains Cleaning in Vancouver", "/vancouver/drapes-curtains-cleaning"]]),
      multiLinkPara(["", ["Steam Cleaning in Vancouver", "/vancouver/steam-cleaning"]]),
      multiLinkPara(["", ["Upholstery Cleaning in Vancouver", "/vancouver/upholstery-cleaning"]]),
      multiLinkPara(["", ["Deep Cleaning in Vancouver", "/vancouver/deep-cleaning"]]),
    ],
  },
  {
    _key: key("sec"),
    _type: "richText",
    heading: "Neighbourhoods We Serve for Carpet Cleaning in Vancouver",
    body: [
      para(
        "Carpet cleaning needs look different block to block in Vancouver. In Downtown Vancouver, Yaletown, the West End, and Fairview, most of our calls are condo carpet, hallway runners, and area rugs over hard flooring, scheduled around building access. In Kitsilano, Mount Pleasant, Point Grey, Dunbar, and Kerrisdale, we're more often cleaning original wall-to-wall carpet and inherited area rugs in single-family and character homes. Commercial Drive sits in between, with a mix of walk-up apartments and older houses. We serve all ten of these neighbourhoods and the areas around them; call 236-688-3248 if you're just outside one and we'll do our best to accommodate you."
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
    heading: "Ready to Book Carpet Cleaning in Vancouver?",
    body: "Call Mint Sanitary at 236-688-3248 or email hello@mintsanitary.com. Use promo code MINT26 for 10% off your first clean. Free estimates, 7-day availability, eco-friendly products, and background-checked, bonded, and insured technicians on every job.",
    ctaLabel: "Get a Free Estimate",
    ctaHref: "/rates",
  },
];

await replaceAreaServiceDoc("vancouver", "carpet-cleaning", {
  area: refTo("area", "vancouver"),
  cleaningType: refTo("cleaningType", "carpet-cleaning"),
  title: "Carpet Cleaning in Vancouver",
  heroHeading: "Carpet Cleaning in Vancouver",
  heroIntro:
    "Carpet in a Yaletown high-rise picks up grit from the elevator lobby and hallway carpet tile every time someone walks in from the rain. A character home in Dunbar, Point Grey, or Kerrisdale is more likely holding onto original wool carpet or a rug that's been down for decades. Mint Sanitary cleans both using hot water extraction, the method carpet manufacturers require to keep warranty coverage valid. We're rated 5 out of 5 from 50+ Google reviews, background-checked, bonded, and insured, and every job uses eco-friendly, non-toxic products with a 24-hour satisfaction guarantee. Our crews and trucks run out of North Vancouver, so book ahead rather than count on same-day service across the bridge. First-time customers save 10% with code MINT26.",
  metaTitle: "Carpet Cleaning in Vancouver | Mint Sanitary",
  metaDescription:
    "Carpet, area rug, and stain cleaning in Vancouver from Mint Sanitary. Hot water extraction, eco-friendly products, 5 out of 5 rating. Call 236-688-3248.",
  sections,
  published: true,
});

console.log("\n✓ Vancouver carpet cleaning migrated");
